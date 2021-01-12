(this["webpackJsonpcovid-19-vaccination"]=this["webpackJsonpcovid-19-vaccination"]||[]).push([[0],{132:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),c=(n(78),n(79),n(80),n(131),n(132),n(64)),l=n(23),s=n.n(l),u=n(38),d=n(27),h=n(9),v=n(10),f=n(11),m=n(12),p=n(69),g=n(14),b=n(20),w=n(70),y=n(65),E=n.n(y),O=r.a.createContext(),k=O,j=function(e){return function(t){return r.a.createElement(O.Consumer,null,(function(t){return r.a.createElement(e,t)}))}},S=n(28),C=n.n(S),x=n(66),D=n.n(x),A=n(16),N=n.n(A);C.a.setOptions({lang:{months:["Janvier","F\xe9vrier","Mars","Avril","Mai","Juin","Juillet","Ao\xfbt","Septembre","Octobre","Novembre","D\xe9cembre"],shortMonths:["Jan","F\xe9v","Mar","Avr","Mai","Juin","Juil","Ao\xfbt","Sep","Oct","Nov","D\xe9c"],weekdays:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],resetZoom:"R\xe9initialiser le zoom"}});var z=j(function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"setSeries",value:function(){var e=this.props,t=e.zones,n=e.data,a=e.dateRange,r=[];return null===t||void 0===t||t.forEach((function(e){var t=n.filter((function(t){return t.code===(null===e||void 0===e?void 0:e.value)})).filter((function(e){return N()(e.date)>=(null===a||void 0===a?void 0:a.startDate)})).filter((function(e){return N()(e.date)<=(null===a||void 0===a?void 0:a.endDate)}));r.push({name:null===e||void 0===e?void 0:e.label,data:t.map((function(e){return[Number(new Date(e.date)),Number(e.totalVaccines)]}))})})),r}},{key:"setConfig",value:function(){return{title:{text:""},chart:{width:null,height:this.props.chartHeight,zoomType:"x",resetZoomButton:{theme:{style:{color:"#ddd"}}}},yAxis:{title:{text:"Nombre de personnes vaccin\xe9es"},type:this.props.scale},xAxis:{type:"datetime"},plotOptions:{series:{marker:{enabled:!0}}},credits:{enabled:!1},legend:{itemStyle:{color:"#bbb"},itemHoverStyle:{color:"#fff"}},tooltip:{dateTimeLabelFormats:{day:"%A %e %b %Y"}},series:this.setSeries()}}},{key:"render",value:function(){return r.a.createElement(D.a,Object.assign({highcharts:C.a,options:this.setConfig()},this.props))}}]),n}(r.a.Component)),F=n(21),J=n(72),L=n(71),M=j(function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){return e.props.setKeyValue("zones",t)},e}return Object(v.a)(n,[{key:"getOptions",value:function(){var e=this.props.data;return e.filter((function(e,t,n){return n.findIndex((function(t){return t.nom===e.nom}))===t})).map((function(e){return e.nom+" - "+e.code})).sort().map((function(e){var t=e.split(" - "),n=Object(J.a)(t,2);return{label:n[0],value:n[1]}}))}},{key:"render",value:function(){return r.a.createElement(F.a.Group,{controlId:"zone"},r.a.createElement(F.a.Label,null,"Zones"),r.a.createElement(L.a,{options:this.getOptions(),value:this.props.zones,onChange:this.handleChange,isMulti:!0,isClearable:!1}))}}]),n}(r.a.Component)),R=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return r.a.createElement(F.a,null,r.a.createElement(b.a,null,r.a.createElement(g.a,{md:12},r.a.createElement(M,null))))}}]),n}(r.a.Component),W=function(){return r.a.createElement("a",{href:"https://twitter.com/YBotochay",className:"twitter"},"Suivez-moi sur\xa0",r.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"white",d:"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"})))},V=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={data:[],zones:e.getLocalData("zones")||[{value:"FRA",label:"France"}],dateRange:e.getLocalData("dateRange")||{startDate:N()("2021-01-11"),endDate:N()()},scale:e.getLocalData("scale")||"linear",chartHeight:null,isFetching:!1,fetchError:null},e.divChart=r.a.createRef(),e.setKeyValue=function(t,n){e.setState(Object(d.a)({},t,n)),e.setLocalData(t,n)},e}return Object(v.a)(n,[{key:"getLocalData",value:function(e){try{var t=localStorage.getItem(e);return t&&JSON.parse(t)}catch(n){console.warn("Probl\xe8me d'acc\xe8s au localStorage")}}},{key:"setLocalData",value:function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){console.warn("Probl\xe8me d'acc\xe8s au localStorage")}}},{key:"fetchData",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.data.gouv.fr/fr/datasets/r/16cb2df5-e9c7-46ec-9dbf-c902f834dab1");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t,n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null===(t=this.divChart)||void 0===t||null===(n=t.current)||void 0===n?void 0:n.getBoundingClientRect().height,this.setState({chartHeight:a,isFetching:!0}),e.prev=2,e.next=5,this.fetchData();case 5:r=e.sent,this.setState({data:r,isFetching:!1}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),this.setState({fetchError:"Probl\xe8me de chargement des donn\xe9es",isFetching:!1});case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isFetching,n=e.fetchError;return r.a.createElement(k.Provider,{value:Object(c.a)({},this.state,{setKeyValue:this.setKeyValue})},r.a.createElement(p.a,{fluid:!0,className:"main-container"},r.a.createElement(b.a,null,r.a.createElement(g.a,null,r.a.createElement("h3",null,"Nombre cumul\xe9 de personnes vaccin\xe9es contre la COVID-19 en France"))),r.a.createElement(b.a,null,r.a.createElement(g.a,null,r.a.createElement(R,null))),r.a.createElement("h6",null,"Cliquez et faites glissez pour zoomer sur une p\xe9riode restreinte"),r.a.createElement("div",{className:"chart",ref:this.divChart},n&&r.a.createElement(w.a,{variant:"danger"},n),t?r.a.createElement(E.a,{size:"large"}):null,n||t?null:r.a.createElement(z,null)),r.a.createElement("div",{className:"footer"},r.a.createElement(W,null),r.a.createElement("small",{className:"source"},"Source\xa0:\xa0",r.a.createElement("a",{href:"https://www.data.gouv.fr/fr/datasets/donnees-relatives-aux-personnes-vaccinees-contre-la-covid-19/"},"https://www.data.gouv.fr/fr/datasets/donnees-relatives-aux-personnes-vaccinees-contre-la-covid-19/")))))}}]),n}(r.a.Component),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid-19-vaccination/build",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/covid-19-vaccination/build","/service-worker.js");B?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):I(t,e)}))}}()},73:function(e,t,n){e.exports=n(157)},91:function(e,t){}},[[73,1,2]]]);
//# sourceMappingURL=main.ab9383a7.chunk.js.map