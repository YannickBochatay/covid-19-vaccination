/* eslint-disable no-unused-expressions */
import React from "react"
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import streamgraph from 'highcharts/modules/streamgraph'
import { withDataContext } from "./DataContext"
import moment from "moment"

streamgraph(Highcharts)

Highcharts.setOptions({
    lang: {
        months: [
            'Janvier', 'Février', 'Mars', 'Avril',
            'Mai', 'Juin', 'Juillet', 'Août',
            'Septembre', 'Octobre', 'Novembre', 'Décembre'
        ],
        shortMonths : ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
        weekdays: [
            'Dimanche', 'Lundi', 'Mardi', 'Mercredi',
            'Jeudi', 'Vendredi', 'Samedi'
        ],
        resetZoom : "Réinitialiser le zoom"
    }
})

export default withDataContext(class Chart extends React.Component {

    getNationalData = date => {
        const YYYYMMDD = moment(date).format("YYYY-MM-DD")

        return this.props.nationalData.find(item => item.date === YYYYMMDD)?.total_vaccines || NaN
    }

    setSeries() {
        const { zones, data, dateRange } = this.props

        const series = []
        
        zones?.forEach(zone => {
            const dataZone = data
            .filter(item => item.code === zone?.value)
            .filter(item => moment(item.date) >= dateRange?.startDate)
            .filter(item => moment(item.date) <= dateRange?.endDate)
            
            series.push({
                name :  zone?.label,
                data : dataZone.map(item => [Number(new Date(item.date)), Number(item.totalVaccines)] )
            })
        })

        return series
    }

    setConfig() {

        const { getNationalData } = this

        return {
            title: { text: "" },
            chart: {
                type: "streamgraph",
                width : null,
                height : this.props.chartHeight,
                zoomType : "x",
                resetZoomButton : {
                    theme : {
                        style : { color : "#ddd" }
                    }
                }
            },
            yAxis: {
                title: { text: "Nombre de personnes vaccinées" },
                type: this.props.scale,
                visible: false
            },
            xAxis: {
                type: 'datetime'
            },
            plotOptions: {
                series: {
                    marker: {
                        enabled: true
                    }
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                itemStyle: {
                    color: '#bbb'
                },
                itemHoverStyle:{
                    color: '#fff'
                }
            },
            tooltip : {
                useHTML: true,
                formatter: function() {
                    const series = this.series.chart.series

                    let html = `<div style="color:white;text-align:center">
                        ${new Date(this.x).toLocaleDateString()}
                    </div>
                    <table>`

                    html += series.reduce((s, serie) => {
                        const point = serie.points[this.point.index]
                        return s + `<tr style="${serie === this.series ? "border:1px solid white" : ""}">
                            <td style="color:${point.series.color}">
                                ${point.series.name}
                            </td>
                            <td style="text-align:right;color:white"><b>${point.y}</b></td>
                        </tr>`
                    }, "")

                    html += `<tr>
                        <td style="padding-top:15px;color:white">Total France</td>
                        <td style="padding-top:15px;text-align:right;color:white">${getNationalData(this.x)}</td>
                    </tr>
                    </table>`

                    return html
                }
            },
            series: this.setSeries()
        }
    }

    render() {
        return (
            <HighchartsReact
                highcharts={ Highcharts }
                options={ this.setConfig() }
                { ...this.props }
            />
        )
    }
})