import React from 'react';
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Alert from "react-bootstrap/Alert"
import Spinner from 'reactjs-simple-spinner'
import DataContext from "./DataContext"
import Chart from "./Chart"
import Form from "./Form"
import Twitter from "./Twitter"
import moment from "moment"

class App extends React.Component {

  state = {
    data : [],
    zones : this.getLocalData("zones") || [{ value : "FRA", label : "France" }],
    dateRange : this.getLocalData("dateRange") || { startDate : moment("2021-01-11"), endDate : moment() },
    scale : this.getLocalData("scale") || "linear",
    chartHeight : null,
    isFetching : false,
    fetchError : null
  }

  divChart = React.createRef()

  getLocalData(key) {
    try {
      const data = localStorage.getItem(key)
      return data && JSON.parse(data)
    } catch (e) {
      console.warn("Problème d'accès au localStorage")
    }
  }

  setLocalData(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.warn("Problème d'accès au localStorage")
    }
  }

  async fetchData() {
    const res = await fetch("https://www.data.gouv.fr/fr/datasets/r/16cb2df5-e9c7-46ec-9dbf-c902f834dab1")
    return await res.json()
  }

  async componentDidMount() {
    const chartHeight = this.divChart?.current?.getBoundingClientRect().height
    this.setState({ chartHeight, isFetching : true })

    try {
      const data = await this.fetchData()
      this.setState({ data, isFetching : false })
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
                Nombre cumulé de personnes vaccinées contre la COVID-19 en France
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form/>
            </Col>
          </Row>
          <h6>Cliquez et faites glissez pour zoomer sur une période restreinte</h6>
          <div className="chart" ref={ this.divChart }>
            { fetchError && <Alert variant="danger">{ fetchError }</Alert> }
            { isFetching ? <Spinner size="large"/> : null }
            { !fetchError && !isFetching ? <Chart/> : null }
          </div>
          <div className="footer">
            <Twitter/>
            <small className="source">
              Source&nbsp;:&nbsp;
                <a href="https://www.data.gouv.fr/fr/datasets/donnees-relatives-aux-personnes-vaccinees-contre-la-covid-19/">
                https://www.data.gouv.fr/fr/datasets/donnees-relatives-aux-personnes-vaccinees-contre-la-covid-19/
                </a>              
            </small>
          </div>
        </Container>
      </DataContext.Provider>
    )
  }
}

export default App
