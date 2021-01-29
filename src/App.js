import React from 'react';
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Alert from "react-bootstrap/Alert"
import Spinner from 'reactjs-simple-spinner'
import DataContext from "./DataContext"
import Form from "./Form"
import Chart from "./Chart"
import Twitter from "./Twitter"
import moment from "moment"
import zones from "./regions"
import ageGroups from "./ageGroups"

const storagePrefix = "vaccination-"
class App extends React.Component {

  state = {
    data : { byReg : [], byAge : [] },
    nationalData : [],
    zones : /* this.getLocalData("zones") || */ zones,
    dateRange : /* this.getLocalData("dateRange") || */ { startDate : moment("2021-01-01"), endDate : moment() },
    scale : /* this.getLocalData("scale") || */ "linear",
    groupBy : this.getLocalData("groupBy") || "reg",
    ageGroups,
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

  processData(data) {

    data = data.filter(item => item.clage_vacsi !== "0") // toutes catégories d'âge

    const regs = [...new Set(data.map(item => item.reg))].sort()
    const ageGroups = [...new Set(data.map(item => item.clage_vacsi))].sort()
    const dates = [...new Set(data.map(item => item.jour))].sort()

    const byReg = []
    const byAge = []

    dates.forEach(jour => {
      const dataByDate = data.filter(item => item.jour === jour)
      regs.forEach(reg => {
        const dataByReg = dataByDate.filter(item => item.reg === reg)
        const n_dose1 = dataByReg.reduce((sum, item) => sum + Number(item.n_dose1), 0)
        byReg.push({ reg, jour, n_dose1 })
      })
      ageGroups.forEach(clage_vacsi => {
        const dataByAge = dataByDate.filter(item => item.clage_vacsi === clage_vacsi)
        const n_dose1 = dataByAge.reduce((sum, item) => sum + Number(item.n_dose1), 0)
        byAge.push({ clage_vacsi, jour, n_dose1 })
      })
    })

    regs.forEach(reg => {
      byReg
        .filter(item => item.reg === reg)
        .reduce((cum, item) => {
          cum += Number(item.n_dose1)
          item.n_cum_dose1 = cum
          return cum
        }, 0)
    })

    ageGroups.forEach(clage_vacsi => {
      byAge
        .filter(item => item.clage_vacsi === clage_vacsi)
        .reduce((cum, item) => {
          cum += Number(item.n_dose1)
          item.n_cum_dose1 = cum
          return cum
        }, 0)
    })

    return { byAge, byReg }
  }

  processNationalData([...data]) {
    data.sort((a, b) => a.jour < b.jour ? -1 : 1)
    data.reduce((cum, item) => {
      cum += Number(item.n_dose1)
      item.n_cum_dose1 = cum
      return cum
    }, 0)

    return data
  }

  parseCSV(csvData) {
    const lines = csvData.trim().split(/[\r\n]+/)
    const colnames = lines.shift().trim().split(/;/)

    return lines.map(line => {
      const fields = line.trim().split(/;/)
      const item = {}
      
      colnames.forEach((col, i) => item[col] = fields[i])

      return item
    })
  }

  async fetchData() {
    const res = await fetch("https://www.data.gouv.fr/fr/datasets/r/c3ccc72a-a945-494b-b98d-09f48aa25337")
    const csv = await res.text()
    const data = this.parseCSV(csv)

    return this.processData(data)    
  }

  async fetchNationalData() {
    const res = await fetch("https://www.data.gouv.fr/fr/datasets/r/efe23314-67c4-45d3-89a2-3faef82fae90")
    const csv = await res.text()
    const data = this.parseCSV(csv)

    return ("n_cum_dose1" in data[0]) ? data : this.processNationalData(data)
  }

  async componentDidMount() {
    const chartHeight = this.divChart?.current?.getBoundingClientRect().height
    this.setState({ chartHeight, isFetching : true })

    try {
      const promises = [this.fetchData(), this.fetchNationalData()]
      const [data, nationalData] = await Promise.all(promises)
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
          <Row>
            <Col>
              <Form/>
            </Col>
          </Row>
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
