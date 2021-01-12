/* eslint-disable no-unused-expressions */
import React from "react"
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { withDataContext } from "./DataContext"
import moment from "moment"

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

        return {
            title: { text: "" },
            chart: {
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
                type: this.props.scale
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
                dateTimeLabelFormats : {
                    day : "%A %e %b %Y"
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