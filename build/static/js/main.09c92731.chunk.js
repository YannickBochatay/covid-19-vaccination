(this["webpackJsonpcovid-19-vaccination"]=this["webpackJsonpcovid-19-vaccination"]||[]).push([[0],{101:function(e,t){},142:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(30),i=a.n(o),c=(a(88),a(89),a(90),a(141),a(142),a(73)),l=a(82),u=a(14),s=a.n(u),v=a(39),d=a(74),f=a(40),h=a(31),p=a(7),m=a(8),g=a(9),b=a(10),y=a(79),w=a(17),E=a(37),j=a(80),x=a(75),O=a.n(x),N=r.a.createContext(),k=N,D=function(e){return function(t){return r.a.createElement(N.Consumer,null,(function(t){return r.a.createElement(e,t)}))}},S=a(24),C=a(81),_=a(26),A=D(function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){return e.props.setKeyValue("groupBy",t)},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(S.a.Group,{controlId:"groupBy"},r.a.createElement(S.a.Label,null,"Grouper par"),"\xa0",r.a.createElement(C.a,{type:"radio",name:"groupBy",value:this.props.groupBy,onChange:this.handleChange},r.a.createElement(_.a,{variant:"light",value:"reg"},"r\xe9gion"),r.a.createElement(_.a,{variant:"light",value:"clage_vacsi"},"tranche d'\xe2ge")))}}]),a}(r.a.Component)),B=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(S.a,null,r.a.createElement("div",{style:{display:"flex",alignItems:"flex-start"}},r.a.createElement("div",null,r.a.createElement(A,null)),r.a.createElement("div",{style:{flex:1,marginLeft:25}},r.a.createElement("small",{style:{color:"#fafafa"}},"Les donn\xe9es par cat\xe9gorie n'\xe9tant pas toujours disponibles, leur somme n'est pas forc\xe9ment \xe9gale \xe0 la valeur nationale."))))}}]),a}(r.a.Component),L=a(18),M=a.n(L),R=a(77),F=a.n(R),J=a(78),V=a.n(J),z=a(13),P=a.n(z);V()(M.a),M.a.setOptions({lang:{months:["Janvier","F\xe9vrier","Mars","Avril","Mai","Juin","Juillet","Ao\xfbt","Septembre","Octobre","Novembre","D\xe9cembre"],shortMonths:["Jan","F\xe9v","Mar","Avr","Mai","Juin","Juil","Ao\xfbt","Sep","Oct","Nov","D\xe9c"],weekdays:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],resetZoom:"R\xe9initialiser le zoom"}});var W=D(function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getNationalData=function(t){var a,n=P()(t).format("YYYY-MM-DD");return(null===(a=e.props.nationalData.find((function(e){return e.jour===n})))||void 0===a?void 0:a.n_cum_dose1)||NaN},e}return Object(m.a)(a,[{key:"setSeries",value:function(){var e=this.props,t=e.zones,a=e.ageGroups,n=e.data,r=e.groupBy,o=e.dateRange,i=[],c="reg"===r?t:a,l="reg"===r?n.byReg:n.byAge;return null===c||void 0===c||c.forEach((function(e){var t=l.filter((function(t){return Number(t[r])===Number(null===e||void 0===e?void 0:e.value)})).filter((function(e){return P()(e.jour)>=(null===o||void 0===o?void 0:o.startDate)})).filter((function(e){return P()(e.jour)<=(null===o||void 0===o?void 0:o.endDate)}));i.push({name:null===e||void 0===e?void 0:e.label,data:t.map((function(e){return[Number(new Date(e.jour)),Number(e.n_cum_dose1)]}))})})),i}},{key:"setConfig",value:function(){var e=this.getNationalData;return{title:{text:""},chart:{type:"streamgraph",width:null,height:this.props.chartHeight,zoomType:"x",resetZoomButton:{theme:{style:{color:"#ddd"}}}},yAxis:{title:{text:"Nombre de personnes vaccin\xe9es"},type:this.props.scale,visible:!1},xAxis:{type:"datetime"},plotOptions:{series:{marker:{enabled:!0}}},credits:{enabled:!1},legend:{itemStyle:{color:"#bbb"},itemHoverStyle:{color:"#fff"}},tooltip:{useHTML:!0,formatter:function(){var t=this,a=this.series.chart.series,n="padding-top:15px;color:white;font-size:16px",r='<div style="color:white;text-align:center">\n                        '.concat(new Date(this.x).toLocaleDateString(),"\n                    </div>\n                    <table>");return r+=a.reduce((function(e,a){var n=a.points.find((function(e){return e.x===t.x}));return n?e+'<tr style="'.concat(a===t.series?"border:1px solid white":"",'">\n                            <td style="color:').concat(n.series.color,'">\n                                ').concat(n.series.name,'\n                            </td>\n                            <td style="text-align:right;color:white"><b>').concat(n.y,"</b></td>\n                        </tr>"):e}),""),r+='<tr>\n                        <td style="'.concat(n,'">Total France</td>\n                        <td style="').concat(n,';text-align:right">').concat(e(this.x),"</td>\n                    </tr>\n                    </table>")}},series:this.setSeries()}}},{key:"render",value:function(){return r.a.createElement(F.a,Object.assign({highcharts:M.a,options:this.setConfig()},this.props))}}]),a}(r.a.Component)),G=function(){return r.a.createElement("a",{href:"https://twitter.com/YBotochay",className:"twitter"},"Suivez-moi sur\xa0",r.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"white",d:"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"})))},H=[{label:"Auvergne-Rh\xf4ne-Alpes",value:"84"},{label:"Bourgogne-Franche-Comt\xe9",value:"27"},{label:"Bretagne",value:"53"},{label:"Centre-Val de Loire",value:"24"},{label:"Corse",value:"94"},{label:"Grand Est",value:"44"},{label:"Guadeloupe",value:"01"},{label:"Guyane",value:"03"},{label:"Hauts-de-France",value:"32"},{label:"\xcele-de-France",value:"11"},{label:"La R\xe9union",value:"04"},{label:"Martinique",value:"02"},{label:"Mayotte",value:"06"},{label:"Normandie",value:"28"},{label:"Nouvelle-Aquitaine",value:"75"},{label:"Occitanie",value:"76"},{label:"Pays de la Loire",value:"52"},{label:"Provence-Alpes-C\xf4te d'Azur",value:"93"}],I=[{label:"0 \xe0 9 ans",value:"9"},{label:"10 \xe0 17 ans",value:"17"},{label:"18 \xe0 24 ans",value:"24"},{label:"25 \xe0 29 ans",value:"29"},{label:"30 \xe0 39 ans",value:"39"},{label:"40 \xe0 49 ans",value:"49"},{label:"50 \xe0 59 ans",value:"59"},{label:"60 \xe0 69 ans",value:"69"},{label:"70 \xe0 74 ans",value:"74"},{label:"75 \xe0 79 ans",value:"79"},{label:"80 et plus",value:"80"}],T=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={data:{byReg:[],byAge:[]},nationalData:[],zones:H,dateRange:{startDate:P()("2021-01-01"),endDate:P()()},scale:"linear",groupBy:e.getLocalData("groupBy")||"reg",ageGroups:I,chartHeight:null,isFetching:!1,fetchError:null},e.divChart=r.a.createRef(),e.setKeyValue=function(t,a){e.setState(Object(h.a)({},t,a)),e.setLocalData(t,a)},e}return Object(m.a)(a,[{key:"getLocalData",value:function(e){try{var t=localStorage.getItem("vaccination-"+e);return t&&JSON.parse(t)}catch(a){console.warn("Probl\xe8me d'acc\xe8s au localStorage")}}},{key:"setLocalData",value:function(e,t){try{localStorage.setItem("vaccination-"+e,JSON.stringify(t))}catch(a){console.warn("Probl\xe8me d'acc\xe8s au localStorage")}}},{key:"processData",value:function(e){e=e.filter((function(e){return"0"!==e.clage_vacsi}));var t=Object(f.a)(new Set(e.map((function(e){return e.reg})))).sort(),a=Object(f.a)(new Set(e.map((function(e){return e.clage_vacsi})))).sort(),n=Object(f.a)(new Set(e.map((function(e){return e.jour})))).sort(),r=[],o=[];return n.forEach((function(n){var i=e.filter((function(e){return e.jour===n}));t.forEach((function(e){var t=i.filter((function(t){return t.reg===e})).reduce((function(e,t){return e+Number(t.n_dose1)}),0);r.push({reg:e,jour:n,n_dose1:t})})),a.forEach((function(e){var t=i.filter((function(t){return t.clage_vacsi===e})).reduce((function(e,t){return e+Number(t.n_dose1)}),0);o.push({clage_vacsi:e,jour:n,n_dose1:t})}))})),t.forEach((function(e){r.filter((function(t){return t.reg===e})).reduce((function(e,t){return e+=Number(t.n_dose1),t.n_cum_dose1=e,e}),0)})),a.forEach((function(e){o.filter((function(t){return t.clage_vacsi===e})).reduce((function(e,t){return e+=Number(t.n_dose1),t.n_cum_dose1=e,e}),0)})),{byAge:o,byReg:r}}},{key:"processNationalData",value:function(e){var t=Object(d.a)(e).slice(0);return t.sort((function(e,t){return e.jour<t.jour?-1:1})),t.reduce((function(e,t){return e+=Number(t.n_dose1),t.n_cum_dose1=e,e}),0),t}},{key:"parseCSV",value:function(e){var t=e.trim().split(/[\r\n]+/),a=t.shift().trim().split(/;/);return t.map((function(e){var t=e.trim().split(/;/),n={};return a.forEach((function(e,a){return n[e]=t[a]})),n}))}},{key:"fetchData",value:function(){var e=Object(v.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.data.gouv.fr/fr/datasets/r/c3ccc72a-a945-494b-b98d-09f48aa25337");case 2:return t=e.sent,e.next=5,t.text();case 5:return a=e.sent,n=this.parseCSV(a),e.abrupt("return",this.processData(n));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchNationalData",value:function(){var e=Object(v.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.data.gouv.fr/fr/datasets/r/efe23314-67c4-45d3-89a2-3faef82fae90");case 2:return t=e.sent,e.next=5,t.text();case 5:return a=e.sent,n=this.parseCSV(a),e.abrupt("return","n_cum_dose1"in n[0]?n:this.processNationalData(n));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(v.a)(s.a.mark((function e(){var t,a,n,r,o,i,c,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null===(t=this.divChart)||void 0===t||null===(a=t.current)||void 0===a?void 0:a.getBoundingClientRect().height,this.setState({chartHeight:n,isFetching:!0}),e.prev=2,r=[this.fetchData(),this.fetchNationalData()],e.next=6,Promise.all(r);case 6:o=e.sent,i=Object(l.a)(o,2),c=i[0],u=i[1],this.setState({data:c,nationalData:u,isFetching:!1}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),this.setState({fetchError:"Probl\xe8me de chargement des donn\xe9es",isFetching:!1});case 16:case"end":return e.stop()}}),e,this,[[2,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isFetching,a=e.fetchError;return r.a.createElement(k.Provider,{value:Object(c.a)({},this.state,{setKeyValue:this.setKeyValue})},r.a.createElement(y.a,{fluid:!0,className:"main-container"},r.a.createElement(E.a,null,r.a.createElement(w.a,null,r.a.createElement("h3",null,"Nombre cumul\xe9 de personnes ayant re\xe7u au moins une injection de vaccin contre la COVID-19 en France"))),r.a.createElement(E.a,null,r.a.createElement(w.a,null,r.a.createElement(B,null))),r.a.createElement("div",{className:"chart",ref:this.divChart},a&&r.a.createElement(j.a,{variant:"danger"},a),t?r.a.createElement(O.a,{size:"large"}):null,a||t?null:r.a.createElement(W,null)),r.a.createElement("div",{className:"footer"},r.a.createElement(G,null),r.a.createElement("small",{className:"source"},"Source\xa0:\xa0",r.a.createElement("a",{href:"https://www.data.gouv.fr/fr/datasets/donnees-relatives-aux-personnes-vaccinees-contre-la-covid-19-1/"},"https://www.data.gouv.fr/fr/datasets/donnees-relatives-aux-personnes-vaccinees-contre-la-covid-19-1/")))))}}]),a}(r.a.Component),Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid-19-vaccination/build",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/covid-19-vaccination/build","/service-worker.js");Y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):K(t,e)}))}}()},83:function(e,t,a){e.exports=a(167)}},[[83,1,2]]]);
//# sourceMappingURL=main.09c92731.chunk.js.map