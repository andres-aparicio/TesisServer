(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"69go":function(t,r,a){"use strict";a.d(r,"a",(function(){return i}));var e=a("AytR"),o=a("fXoL");const n=e.a.url;let i=(()=>{class t{constructor(){this.mostrarNombre=!1,this.img1=n+"/uploadYo/andres-apa/4a.jpg",this.img2=n+"/uploadYo/andres-apa/5a.jpeg",this.img3=n+"/uploadYo/andres-apa/8a.jpeg",this.img4=n+"/uploadYo/andres-apa/9a.jpeg",this.imagenesYo=[{img:n+"/uploadYo/andres-apa/8a.jpeg"},{img:n+"/uploadYo/andres-apa/4a.jpg"},{img:n+"/uploadYo/andres-apa/9a.jpeg"},{img:n+"/uploadYo/andres-apa/5a.jpeg"}]}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=o.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"94Kt":function(t,r,a){"use strict";a.d(r,"a",(function(){return n}));var e=a("ofXK"),o=a("fXoL");let n=(()=>{class t{}return t.\u0275mod=o.Gb({type:t}),t.\u0275inj=o.Fb({factory:function(r){return new(r||t)},imports:[[e.b]]}),t})()},Eelw:function(t,r,a){"use strict";a.d(r,"a",(function(){return u}));var e=a("AytR"),o=a("fXoL"),n=a("tk/3"),i=a("on2l");const s=e.a.url;let u=(()=>{class t{constructor(t,r){this.http=t,this.usuarioservice=r,this.mostrarTec=!1,this.mostrarSobreMi=!1}getTecnologia(){return this.http.get(s+"/tecnologia")}getSobreMi(){return this.http.get(s+"/sobreMi")}actualizarTecnologia(t,r){return this.http.post(`${s}/tecnologia/update/${r}`,t,{headers:{miToken:this.usuarioservice.token}}).subscribe()}actualizarSobreMi(t,r){return this.http.post(`${s}/sobreMi/update/${r}`,t,{headers:{miToken:this.usuarioservice.token}}).subscribe()}}return t.\u0275fac=function(r){return new(r||t)(o.Pb(n.a),o.Pb(i.a))},t.\u0275prov=o.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},G0CF:function(t,r,a){"use strict";a.d(r,"a",(function(){return i}));var e=a("AytR"),o=a("fXoL");const n=e.a.url;let i=(()=>{class t{transform(t){return`${n}/noticias/imgNoticia/${t}`}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275pipe=o.Hb({name:"imagenNoticia",type:t,pure:!0}),t})()},jCc1:function(t,r,a){"use strict";a.d(r,"a",(function(){return i}));var e=a("AytR"),o=a("fXoL");const n=e.a.url;let i=(()=>{class t{transform(t){return`${n}/noticias/imgYo/${t}`}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275pipe=o.Hb({name:"imagenYo",type:t,pure:!0}),t})()}}]);