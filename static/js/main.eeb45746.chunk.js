(this["webpackJsonpblindtest-spotify"]=this["webpackJsonpblindtest-spotify"]||[]).push([[0],{14:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(8),r=a.n(s),o=(a(14),a(3)),i=a(5),p=a.n(i),l=a.p+"static/media/logo.53a8fc10.svg",u=a.p+"static/media/loading.6e6379f4.svg",j=a(2),d=a.n(j),b=a(9),h=a.n(b),f=a(0),m=function(e){return Object(f.jsx)("button",{className:h.a.button,onClick:e.onClick,children:e.children})};function g(e){return Math.floor(Math.random()*e)}var v=function(e){var t=e.track.album.images[0].url,a="Album cover for "+e.track.album.name;return Object(f.jsx)("img",{src:t,style:{width:400,height:400},alt:a})},O=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),r=Object(o.a)(s,2),i=r[0],j=r[1],b=Object(n.useState)(null),h=Object(o.a)(b,2),O=h[0],x=h[1],_=Object(n.useState)(),k=Object(o.a)(_,2),N=(k[0],k[1]),B=function e(t){var a=g(t.length);x(t[a].track),N(setTimeout((function(){return e(t)}),3e4))};if(Object(n.useEffect)((function(){fetch("https://api.spotify.com/v1/playlists/64AniTREImifrBpJNwW8FB/tracks",{method:"GET",headers:{Authorization:"Bearer BQDiU2zr-Y-ZU1NF3lfVXcmz1o75ckt8Z5GwNh70eY4RuLcZfbaP8-azyrf-Z6Ngi33WQZbd3u07MNwrSVwdMFdu6ZHpbNacDvuc1YQ2S8GM6pk_vLM6acA4pecZBFP9YWs6sKHfMorcgjcl8B43qhyaEp2cm6ltbrdenDv27RvlmU7B"}}).then((function(e){return e.json()})).then((function(e){console.log("R\xe9ponse re\xe7ue ! Voil\xe0 ce que j'ai re\xe7u : ",e),c(e.items),B(a),j(!0)}))}),[]),!i)return Object(f.jsx)("div",{className:d.a.app,children:Object(f.jsx)("img",{src:u,className:d.a.appLogo,alt:"logo"})});var A=g(a.length),L=g(a.length),y=O,w=function(e){for(var t=e.length;t>0;){var a=g(t),n=e[--t];e[t]=e[a],e[a]=n}return e}([y,a[A].track,a[L].track]);return Object(f.jsxs)("div",{className:d.a.app,children:[Object(f.jsxs)("header",{className:d.a.appHeader,children:[Object(f.jsx)("img",{src:l,className:d.a.appLogo,alt:"logo"}),Object(f.jsx)("h1",{className:d.a.appTitle,children:"Le meilleur Blindtest"})]}),Object(f.jsx)("div",{className:d.a.appImages,children:Object(f.jsxs)("p",{children:["Nous avons charg\xe9 ",a.length," chansons."]})}),Object(f.jsx)("div",{children:Object(f.jsx)("audio",{controls:!0,autoPlay:!0,src:y.preview_url})}),Object(f.jsx)("div",{className:d.a.appButtons,children:w.map((function(e){return Object(f.jsxs)(m,{onClick:function(){return t=e.id,void(O.id===t?p()("Bravo !","Tu as gagn\xe9","success").then((function(){return B})):p()("Essaye encore","Ce n\u2019est pas la bonne r\xe9ponse","error"));var t},children:[Object(f.jsx)(v,{track:e}),Object(f.jsx)("div",{children:e.name})]})}))})]})};r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(O,{})}),document.getElementById("root"))},2:function(e,t,a){e.exports={app:"App_app__1kX79",appLogo:"App_appLogo__1qg7-",appLogoSpin:"App_appLogoSpin__P7gwA",appHeader:"App_appHeader__28RXF",appLink:"App_appLink__2pA8F"}},9:function(e,t,a){e.exports={button:"Button_button__1DqCU"}}},[[18,1,2]]]);
//# sourceMappingURL=main.eeb45746.chunk.js.map