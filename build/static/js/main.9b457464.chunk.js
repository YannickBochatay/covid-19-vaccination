(this["webpackJsonpcovid-19-vaccination"]=this["webpackJsonpcovid-19-vaccination"]||[]).push([[0],{127:function(e,t,a){},150:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),i=a(18),c=a.n(i),l=(a(73),a(74),a(75),a(126),a(127),a(58)),s=a(67),u=a(9),d=a.n(u),v=a(25),h=a(19),f=a(20),p=a(21),g=a(23),m=a(24),b=a(62),w=a(65),y=a(64),E=a(66),R=a(59),x=a.n(R),D=o.a.createContext(),k=D,S=a(11),O=a.n(S),N=a(60),G=a.n(N),j=a(61),A=a.n(j),C=a(8),M=a.n(C);A()(O.a),O.a.setOptions({lang:{months:["Janvier","F\xe9vrier","Mars","Avril","Mai","Juin","Juillet","Ao\xfbt","Septembre","Octobre","Novembre","D\xe9cembre"],shortMonths:["Jan","F\xe9v","Mar","Avr","Mai","Juin","Juil","Ao\xfbt","Sep","Oct","Nov","D\xe9c"],weekdays:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],resetZoom:"R\xe9initialiser le zoom"}});var L,F=(n=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getNationalData=function(t){var a,n=M()(t).format("YYYY-MM-DD");return(null===(a=e.props.nationalData.find((function(e){return e.date===n})))||void 0===a?void 0:a.total_vaccines)||NaN},e}return Object(p.a)(a,[{key:"setSeries",value:function(){var e=this.props,t=e.zones,a=e.data,n=e.dateRange,r=[];return null===t||void 0===t||t.forEach((function(e){var t=a.filter((function(t){return t.code===(null===e||void 0===e?void 0:e.value)})).filter((function(e){return M()(e.date)>=(null===n||void 0===n?void 0:n.startDate)})).filter((function(e){return M()(e.date)<=(null===n||void 0===n?void 0:n.endDate)}));r.push({name:null===e||void 0===e?void 0:e.label,data:t.map((function(e){return[Number(new Date(e.date)),Number(e.totalVaccines)]}))})})),r}},{key:"setConfig",value:function(){var e=this.getNationalData;return{title:{text:""},chart:{type:"streamgraph",width:null,height:this.props.chartHeight,zoomType:"x",resetZoomButton:{theme:{style:{color:"#ddd"}}}},yAxis:{title:{text:"Nombre de personnes vaccin\xe9es"},type:this.props.scale,visible:!1},xAxis:{type:"datetime"},plotOptions:{series:{marker:{enabled:!0}}},credits:{enabled:!1},legend:{itemStyle:{color:"#bbb"},itemHoverStyle:{color:"#fff"}},tooltip:{useHTML:!0,formatter:function(){var t=this,a=this.series.chart.series,n="padding-top:15px;color:white;font-size:16px",r='<div style="color:white;text-align:center">\n                        '.concat(new Date(this.x).toLocaleDateString(),"\n                    </div>\n                    <table>");return r+=a.reduce((function(e,a){var n=a.points[t.point.index];return e+'<tr style="'.concat(a===t.series?"border:1px solid white":"",'">\n                            <td style="color:').concat(n.series.color,'">\n                                ').concat(n.series.name,'\n                            </td>\n                            <td style="text-align:right;color:white"><b>').concat(n.y,"</b></td>\n                        </tr>")}),""),r+='<tr>\n                        <td style="'.concat(n,'">Total France</td>\n                        <td style="').concat(n,';text-align:right">').concat(e(this.x),"</td>\n                    </tr>\n                    </table>")}},series:this.setSeries()}}},{key:"render",value:function(){return o.a.createElement(G.a,Object.assign({highcharts:O.a,options:this.setConfig()},this.props))}}]),a}(o.a.Component),L=n,function(e){return o.a.createElement(D.Consumer,null,(function(e){return o.a.createElement(L,e)}))}),J=function(){return o.a.createElement("a",{href:"https://twitter.com/YBotochay",className:"twitter"},"Suivez-moi sur\xa0",o.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{fill:"white",d:"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"})))},z=[{label:"Auvergne-Rh\xf4ne-Alpes",value:"REG-84"},{label:"Bourgogne-Franche-Comt\xe9",value:"REG-27"},{label:"Bretagne",value:"REG-53"},{label:"Centre-Val de Loire",value:"REG-24"},{label:"Corse",value:"REG-94"},{label:"Grand Est",value:"REG-44"},{label:"Guadeloupe",value:"REG-01"},{label:"Guyane",value:"REG-03"},{label:"Hauts-de-France",value:"REG-32"},{label:"\xcele-de-France",value:"REG-11"},{label:"La R\xe9union",value:"REG-04"},{label:"Martinique",value:"REG-02"},{label:"Mayotte",value:"REG-06"},{label:"Normandie",value:"REG-28"},{label:"Nouvelle-Aquitaine",value:"REG-75"},{label:"Occitanie",value:"REG-76"},{label:"Pays de la Loire",value:"REG-52"},{label:"Provence-Alpes-C\xf4te d'Azur",value:"REG-93"}],P=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:[],nationalData:[],zones:e.getLocalData("zones")||z,dateRange:e.getLocalData("dateRange")||{startDate:M()("2021-01-11"),endDate:M()()},scale:e.getLocalData("scale")||"linear",chartHeight:null,isFetching:!1,fetchError:null},e.divChart=o.a.createRef(),e.setKeyValue=function(t,a){e.setState(Object(h.a)({},t,a)),e.setLocalData(t,a)},e}return Object(p.a)(a,[{key:"getLocalData",value:function(e){try{var t=localStorage.getItem("vaccination-"+e);return t&&JSON.parse(t)}catch(a){console.warn("Probl\xe8me d'acc\xe8s au localStorage")}}},{key:"setLocalData",value:function(e,t){try{localStorage.setItem("vaccination-"+e,JSON.stringify(t))}catch(a){console.warn("Probl\xe8me d'acc\xe8s au localStorage")}}},{key:"fetchRegionalData",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.data.gouv.fr/fr/datasets/r/16cb2df5-e9c7-46ec-9dbf-c902f834dab1");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchNationalData",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.data.gouv.fr/fr/datasets/r/b39196f2-97c4-42f4-8dee-5eb07e823377");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t,a,n,r,o,i,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null===(t=this.divChart)||void 0===t||null===(a=t.current)||void 0===a?void 0:a.getBoundingClientRect().height,this.setState({chartHeight:n,isFetching:!0}),e.prev=2,e.next=5,Promise.all([this.fetchRegionalData(),this.fetchNationalData()]);case 5:r=e.sent,o=Object(s.a)(r,2),i=o[0],c=o[1],this.setState({data:i,nationalData:c,isFetching:!1}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),this.setState({fetchError:"Probl\xe8me de chargement des donn\xe9es",isFetching:!1});case 15:case"end":return e.stop()}}),e,this,[[2,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isFetching,a=e.fetchError;return o.a.createElement(k.Provider,{value:Object(l.a)({},this.state,{setKeyValue:this.setKeyValue})},o.a.createElement(b.a,{fluid:!0,className:"main-container"},o.a.createElement(y.a,null,o.a.createElement(w.a,null,o.a.createElement("h3",null,"Nombre cumul\xe9 de personnes vaccin\xe9es contre la COVID-19 en France"))),o.a.createElement("div",{className:"chart",ref:this.divChart},a&&o.a.createElement(E.a,{variant:"danger"},a),t?o.a.createElement(x.a,{size:"large"}):null,a||t?null:o.a.createElement(F,null)),o.a.createElement("div",{className:"footer"},o.a.createElement(J,null),o.a.createElement("small",{className:"source"},"Source\xa0:\xa0",o.a.createElement("a",{href:"https://www.data.gouv.fr/fr/datasets/donnees-relatives-aux-personnes-vaccinees-contre-la-covid-19/"},"https://www.data.gouv.fr/fr/datasets/donnees-relatives-aux-personnes-vaccinees-contre-la-covid-19/")))))}}]),a}(o.a.Component),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(P,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid-19-vaccination/build",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/covid-19-vaccination/build","/service-worker.js");B?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):W(t,e)}))}}()},68:function(e,t,a){e.exports=a(150)},86:function(e,t){}},[[68,1,2]]]);
//# sourceMappingURL=main.9b457464.chunk.js.map