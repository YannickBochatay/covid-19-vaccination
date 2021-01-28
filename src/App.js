import React from 'react';
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Alert from "react-bootstrap/Alert"
import Spinner from 'reactjs-simple-spinner'
import DataContext from "./DataContext"
import Chart from "./Chart"
import Twitter from "./Twitter"
import moment from "moment"
import zones from "./regions"

const storagePrefix = "vaccination-"
class App extends React.Component {

  state = {
    data : [],
    nationalData : [],
    zones : /* this.getLocalData("zones") || */ zones,
    dateRange : /* this.getLocalData("dateRange") || */ { startDate : moment("2021-01-01"), endDate : moment() },
    scale : /* this.getLocalData("scale") || */ "linear",
    chartHeight : null,
    isFetching : false,
    fetchError : null
  }

  divChart = React.createRef()

  getLocalData(key) {
    try {
      const data = localStorage.getItem(storagePrefix + key)
      return data && JSON.parse(data)
    } catch (e) {
      console.warn("Problème d'accès au localStorage")
    }
  }

  setLocalData(key, value) {
    try {
      localStorage.setItem(storagePrefix + key, JSON.stringify(value))
    } catch (e) {
      console.warn("Problème d'accès au localStorage")
    }
  }

  calculateTotals(data) {
    const regs = [...new Set(data.map(item => item.reg || item.fra))]

    return regs.reduce((dataWithTotals, reg) => {
      const dataset = data.filter(item => item.reg === reg || item.fra === reg)

      dataset.sort((a, b) => a.jour < b.jour ? -1 : 1)

      dataset.reduce((cum, item) => {
        cum += Number(item.n_dose1)
        item.n_cum_dose1 = cum
        return cum
      }, 0)

      return dataWithTotals.concat(dataset)
    }, [])
  }

  fillMissingData(data) {

    const endDate = moment().subtract(2, "days")

    for (let i = moment("2021-01-01"); i <= endDate; i = i.add(1, 'days')) {
      zones.forEach(({ value }) => {
        const jour = i.format("YYYY-MM-DD")
        if (!data.find(item => item.reg === value && item.jour === jour)) {
          data.push({ reg : value, jour, n_dose1 : 0 })
        }
      })
    }

    return data
  }

  parseCSV(csvData) {
    const lines = csvData.trim().split(/[\r\n]+/)
    const colnames = lines.shift().trim().split(/;/)

    let data = lines.map(line => {
      const fields = line.trim().split(/;/)
      const item = {}
      
      colnames.forEach((col, i) => item[col] = fields[i])

      return item
    })

    // data = this.fillMissingData(data)

    if (colnames.includes("n_cum_dose1")) return data
    else return this.calculateTotals(data)
  }

  async fetchRegionalData() {
    const res = await fetch("https://www.data.gouv.fr/fr/datasets/r/735b0df8-51b4-4dd2-8a2d-8e46d77d60d8")
    const csv = await res.text()

    return this.parseCSV(csv)
  }

  async fetchNationalData() {
    const res = await fetch("https://www.data.gouv.fr/fr/datasets/r/efe23314-67c4-45d3-89a2-3faef82fae90")
    const csv = await res.text()

    return this.parseCSV(csv)
  }

  async componentDidMount() {
    const chartHeight = this.divChart?.current?.getBoundingClientRect().height
    this.setState({ chartHeight, isFetching : true })

    try {
      const [data, nationalData] = await Promise.all([this.fetchRegionalData(), this.fetchNationalData()])
      this.setState({ data, nationalData, isFetching : false })
    } catch (e) {
      this.setState({
        fetchError : "Problème de chargement des données",
        isFetching : false
      })
    }
  }

  setKeyValue = (key, value) => {
    this.setState({ [key] : value })
    this.setLocalData(key, value)
  }

  render() {

    const { isFetching, fetchError } = this.state

    return (
      <DataContext.Provider
        value={ { ...this.state, setKeyValue : this.setKeyValue } }
      >
        <Container
          fluid
          className="main-container"
        >
          <Row>
            <Col>
              <h3>
                Nombre cumulé de personnes ayant reçu au moins une injection de vaccin contre la COVID-19 en France
              </h3>
            </Col>
          </Row>
          {/* <Row>
            <Col>
              <Form/>
            </Col>
          </Row> */}
          {/* <h6>Cliquez et faites glissez pour zoomer sur une période restreinte</h6> */}
          <div className="chart" ref={ this.divChart }>
            { fetchError && <Alert variant="danger">{ fetchError }</Alert> }
            { isFetching ? <Spinner size="large"/> : null }
            { !fetchError && !isFetching ? <Chart/> : null }
          </div>
          <div className="footer">
            <Twitter/>
            <small className="source">
              Source&nbsp;:&nbsp;
                <a href="https://www.data.gouv.fr/fr/datasets/donnees-relatives-aux-personnes-vaccinees-contre-la-covid-19-1/">
                https://www.data.gouv.fr/fr/datasets/donnees-relatives-aux-personnes-vaccinees-contre-la-covid-19-1/
                </a>              
            </small>
          </div>
        </Container>
      </DataContext.Provider>
    )
  }
}

export default App
