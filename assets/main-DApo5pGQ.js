const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Snow-DiJ7OQRG.js","assets/preact-DoPIZWeU.js","assets/render-D473Hyb3.js","assets/Snow-BJfsKG8O.css","assets/Place-B6ITrXAv.js","assets/snapshot-B2tMHrRQ.js","assets/Place-CCdJ0iqm.css","assets/TopBar-CHXT3ay3.js","assets/TopBar-rtOIGjkA.css"])))=>i.map(i=>d[i]);
var e=Object.defineProperty,t=(t,a,n)=>((t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n)(t,"symbol"!=typeof a?a+"":a,n);import{d as a,w as n,G as i,u as o,x as l,k as s,F as r,y as c,B as u,L as d,R as v,S as f}from"./preact-DoPIZWeU.js";import{C as p,P as m}from"./render-D473Hyb3.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const h={},g=function(e,t,a){let n=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),a=(null==e?void 0:e.nonce)||(null==e?void 0:e.getAttribute("nonce"));n=Promise.all(t.map((e=>{if((e=function(e){return"/"+e}(e))in h)return;h[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const i=document.createElement("link");return i.rel=t?"stylesheet":"modulepreload",t||(i.as="script",i.crossOrigin=""),i.href=e,a&&i.setAttribute("nonce",a),document.head.appendChild(i),t?new Promise(((t,a)=>{i.addEventListener("load",t),i.addEventListener("error",(()=>a(new Error(`Unable to preload CSS for ${e}`))))})):void 0})))}return n.then((()=>e())).catch((e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}))};class y extends p{constructor(e){super(e)}equals(e){return this.toNumber()===e.toNumber()}getReadableColor(){const[e,t,a]=this.toUint8RgbArray();return new y(.299*e+.587*t+.114*a>186?"black":"white")}static getRandom(){return new y(Math.floor(16777215*Math.random()))}}var w=(e=>(e[e.RGB=3]="RGB",e[e.RGBA=4]="RGBA",e))(w||{});class b{constructor(e,a=4){t(this,"_buffer"),t(this,"_size"),this._raw=e,this.bufferPixelDataSize=a}convertRGBAtoRGB(e,{x:t,y:a}){const n=new Uint8ClampedArray(t*a*3);for(let i=0,o=0;i<e.length;i+=4,o+=3)n[o]=e[i],n[o+1]=e[i+1],n[o+2]=e[i+2];return n}async process(){const e=await createImageBitmap(this._raw),t=document.createElement("canvas"),a=t.getContext("2d");t.width=e.width,t.height=e.height,a.drawImage(e,0,0);const n=a.getImageData(0,0,t.width,t.height).data;return this._size=new m(e.width,e.height),this._buffer=3===this.bufferPixelDataSize?this.convertRGBAtoRGB(n,this._size):n,this}get raw(){return this._raw}get buffer(){return this._buffer}get size(){return this._size}getPixel(e){const t=e.x+e.y*this._size.x,[a,n,i,...o]=this._buffer.slice(t*this.bufferPixelDataSize,t*this.bufferPixelDataSize+this.bufferPixelDataSize);return new y(new Uint8Array([a,n,i,0===o.length?255:o[0]]))}setPixel(e,t){const a=(e.x+e.y*this._size.x)*this.bufferPixelDataSize,[n,i,o]=t.toUint8RgbArray();this._buffer[a]=n,this._buffer[a+1]=i,this._buffer[a+2]=o}}const _={defaults:{colors:{background:new y("#282828"),palette:{colors:[new y("#ff0000"),new y("#00ff00"),new y("#0000ff"),new y("#000000"),new y("#ffffff")],selected:new y("#ffffff")}},settings:{enableSnow:!0}},time:{update:{tags:3e4,info:3e4},ws:2e3,shake:200,notificationRemoved:3e3,pixelInfo:500},cooldown:{offset:50,staff:50},shakeAmount:.1,zoom:{defaultLevel:.25,maxLevel:3,minLevelPx:5},discord:{clientId:"970714810905936022",redirectUri:"https://api.pixelbattle.fun/login",scope:["identify","guilds.join","email"]},hover:{outlineSize:.1,scale:1.2},url:{api:"https://api.pixelbattle.fun"},snow:{size:2,amount:100},overlay:{defaultOpacity:60},media:{youtube:["https://youtube.pixelbattle.fun","YouTube канал Pixelate It!"],discord:["https://discord.pixelbattle.fun","Discord-сервер Pixelate It!"],github:["https://github.pixelbattle.fun","GitHub Pixelate It!"],help:["https://help.pixelbattle.fun","Страница помощи"]}};var x=(e=>(e[e.User=0]="User",e[e.Moderator=1]="Moderator",e[e.Admin=2]="Admin",e))(x||{});
/*! js-cookie v3.0.5 | MIT */function P(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)e[n]=a[n]}return e}var S=function e(t,a){function n(e,n,i){if("undefined"!=typeof document){"number"==typeof(i=P({},a,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var l in i)i[l]&&(o+="; "+l,!0!==i[l]&&(o+="="+i[l].split(";")[0]));return document.cookie=e+"="+t.write(n,e)+o}}return Object.create({set:n,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var a=document.cookie?document.cookie.split("; "):[],n={},i=0;i<a.length;i++){var o=a[i].split("="),l=o.slice(1).join("=");try{var s=decodeURIComponent(o[0]);if(n[s]=t.read(l,s),e===s)break}catch(r){}}return e?n[e]:n}},remove:function(e,t){n(e,"",P({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,P({},this.attributes,t))},withConverter:function(t){return e(P({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(a)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});class C{static get(e){return S.get(e)}static set(e,t){S.set(e,t)}static remove(e){S.remove(e,{domain:this.url})}static clear(){Object.keys(S.get()).forEach((e=>S.remove(e,{domain:this.url})))}}t(C,"url",(_.url.api.split("//")[1].includes(":")?"":".")+_.url.api.split("//").slice(-1)[0].split(":")[0].split(".").slice(-2).join("."));const N={user:a(null),profile:a(null),isAuthenticated:n((()=>!1)),isBanned:n((()=>!1)),isStaff:n((()=>!1)),load(){const e=C.get("token"),t=C.get("userid");e&&t&&(N.profile.value={token:e,id:t})},async fetch(){const e=await R.profile();N.user.value=e},login(e,t){N.profile.value={token:e,id:t}},logout(){N.profile.value=null,N.user.value=null,C.clear()}};N.isAuthenticated=n((()=>!!N.profile.value)),N.isBanned=n((()=>{var e;return!!(null==(e=N.user.value)?void 0:e.banned)})),N.isStaff=n((()=>{var e;return((null==(e=N.user.value)?void 0:e.role)??x.User)>=x.Moderator}));const k=i({}),T={notifications:a([]),addNotification(e){T.notifications.value.length>=5&&(T.notifications.value=T.notifications.value.slice(1)),T.notifications.value=[...T.notifications.value,{...e,id:Math.random().toString()}]},removeNotification(e){T.notifications.value=T.notifications.value.filter((t=>t.id!==e))}},A=i({}),E={UserCooldown:{title:"Кулдаун активен (С)",message:"Подождите пару секунд"},RateLimit:{title:"Рейт лимит (С)",message:"Подождите пару секунд"},TokenBanned:{title:"Аккаунт забанен (С)",message:"Ваш аккаунт забанен"},NotAuthorized:{title:"Необходимо авторизоваться (С)",message:"Вы не вошли в дискорд аккаунт"}},I={Banned:{title:"Аккаунт забанен",message:"Ваш аккаунт забанен"},Cooldown:{title:"Подождите пару секунд",message:"Кулдаун активен"},"Not logged":{title:"Необходимо авторизоваться",message:"Вы не вошли в дискорд аккаунт"},"Game ended":{title:"Ждите новой игры",message:"Игра окончена"},SnapshotSuccess:{title:"Снимок холста",message:"Снимок сохранено в буфер обмена"},SnapshotFailed:{title:"Снимок холста",message:"Ваш браузер не поддерживает работу с буфером обмена"}};class R{static fetch(e){var t;const a={"Content-Type":"application/json"};return e.withCredentials&&(a.Authorization=`Bearer ${null==(t=N.profile.value)?void 0:t.token}`),fetch(_.url.api+e.url,{method:e.method,headers:"GET"===e.method?void 0:a,body:e.body?JSON.stringify(e.body):void 0}).then((e=>e.json())).then(R.checkForErrors)}static async post(e,t,a=!1){return R.fetch({url:e,method:"POST",withCredentials:a,body:t})}static async put(e,t,a=!1){return R.fetch({url:e,method:"PUT",withCredentials:a,body:t})}static async get(e,t=!1){return R.fetch({url:e,method:"GET",withCredentials:t})}static processError(e){const t=E[e.reason]??{title:"Неизвестная ошибка (С)",message:e.reason};T.addNotification({...t,type:"error"})}static checkForErrors(e){return"error"in e&&e.error?(R.processError(e),Promise.reject(e)):e}static async pixels(){return fetch(_.url.api+"/pixels.png").then((e=>e.blob()))}static async info(){return R.get("/game")}static async profile(){var e;return R.get(`/users/${null==(e=N.profile.value)?void 0:e.id}`)}static async getPixel(e){return R.get(`/pixels?x=${e.x}&y=${e.y}`)}static async tags(){return R.get("/pixels/tag")}static async putPixel(e){return R.put("/pixels",e,!0)}static async changeTag(e){var t;return R.post(`/users/${null==(t=N.profile.value)?void 0:t.id}/tag`,{tag:e},!0)}}const B={image:a(null),container:a({}),async fetch(){const e=await R.pixels();B.image.value=await new b(e,w.RGB).process()}},O=i({});class z{static set(e,t,a=JSON.stringify){localStorage.setItem(e,a(t))}static get(e,t){const a=localStorage.getItem(e);return a?t?t(JSON.parse(a)):JSON.parse(a):void 0}static reset(e){localStorage.removeItem(e)}}const j={palette:a(_.defaults.colors.palette),reset(){j.palette.value=_.defaults.colors.palette,j.save()},setCurrentColor:e=>{j.palette.value={...j.palette.value,selected:e},j.save()},removeColor(e){j.palette.value={selected:j.palette.value.colors.at(-2)??j.palette.value.selected,colors:j.palette.value.colors.filter((t=>!t.equals(e)))},j.save()},isDefaultColor:e=>_.defaults.colors.palette.colors.some((t=>t.equals(e))),addColor(e){j.palette.value={...j.palette.value,colors:[...j.palette.value.colors,e]},j.save()},addAndSelect(e){j.palette.value.colors.some((t=>t.equals(e)))||this.addColor(e),this.setCurrentColor(e),j.save()},save(){z.set("palette",{colors:j.palette.value.colors,selected:j.palette.value.selected},(({colors:e,selected:t})=>JSON.stringify({colors:e.map((e=>e.toHex())),selected:t.toHex()})))},load(){const e=z.get("palette",(e=>({colors:e.colors.map((e=>new y(e))),selected:new y(e.selected)})));e&&(j.palette.value=e)}},U=i({}),D={info:a(null),end(){null!==D.info.value&&(D.info.value={...D.info.value,ended:!0})},start(){null!==D.info.value&&(D.info.value={...D.info.value,ended:!1})},async fetch(){const e=await R.info();return D.info.value={...e,cooldown:e.cooldown},e}},F=i({}),L={progress:a(0),reqId:a(0),startTime:a(0),hasCooldown:n((()=>!1)),start(){L.startTime.value=performance.now(),L.reqId.value=requestAnimationFrame(L.update)},update(e){const t=e-L.startTime.value;if(null===D.info.value)return;const a=t/(_.cooldown.offset+(N.isStaff.value?_.cooldown.staff:D.info.value.cooldown));if(a>=1)return L.progress.value=0,void cancelAnimationFrame(L.reqId.value);L.progress.value=100*a,requestAnimationFrame(L.update)}};L.hasCooldown=n((()=>L.progress.value>0));const q=i({}),G={coordinates:a(new m(-1,-1)),areCoordinatesSet:n((()=>!1)),info:a(null),async fetchInfo(){G.info.value=await R.getPixel(G.coordinates.value)},setCoordinates(e){G.coordinates.value=e},removeCoordinates(){G.coordinates.value=new m(-1,-1)}};G.areCoordinatesSet=n((()=>-1!==G.coordinates.value.x));const $=i({}),M={tags:a([]),selectedTag:a(""),async fetch(){const e=await R.tags();if(M.tags.value=e.tags.map(((e,t)=>({name:e[0],pixels:e[1],place:t}))),!N.isAuthenticated.value)return;if(null===N.user.value)return;if(!(null!==N.user.value.tag))return;M.selectedTag.value=N.user.value.tag??"";!M.tags.value.some((e=>e.name===M.selectedTag.value))&&M.pushFakeTag(N.user.value.tag??"???")},pushFakeTag(e){M.tags.value=[...M.tags.value,{name:e,pixels:-1,place:M.tags.value.length}]},purgeFakeTags(){M.tags.value=M.tags.value.filter((e=>-1!==e.pixels))},select(e){var t;const a=M.selectedTag.value;if(a===e)return;-1===(null==(t=M.tags.value.find((e=>e.name===a)))?void 0:t.pixels)&&M.purgeFakeTags();M.tags.value.find((t=>t.name===e))||M.pushFakeTag(e),M.selectedTag.value=e},selectAndFetch(e){this.select(e),R.changeTag(e).then((()=>N.fetch()))},remove(){M.selectedTag.value="",M.purgeFakeTags(),R.changeTag("").then((()=>N.fetch()))}},J=i({}),H={isEnabled:a(!1),toggle(){H.isEnabled.value=!H.isEnabled.value}},V=i({}),K={settings:a(_.defaults.settings),load(){const e=z.get("settings");e&&(this.settings.value=e)},save(){z.set("settings",this.settings.value??_.defaults.settings)}},W=i({});async function Y(e){const t=new FileReader;return new Promise(((a,n)=>{t.onloadend=()=>{"string"==typeof t.result?a(t.result):n()},t.onerror=()=>n(),t.readAsDataURL(e)}))}const Q={image:a(null),imageName:a(null),position:a(null),opacity:a(null),isSet:n((()=>!1)),setImage(e,t,a){Q.image.value=e,Q.imageName.value=t,Q.position.value=a,Q.opacity.value=_.overlay.defaultOpacity,Q.save()},unsetImage(){Q.image.value=null,Q.imageName.value=null,Q.position.value=null,Q.opacity.value=null,Q.save()},async save(){Q.isSet.value?z.set("overlay",{data:await Y(Q.image.value.raw),name:Q.imageName.value,position:{x:Q.position.value.x,y:Q.position.value.y},opacity:Q.opacity.value??_.overlay.defaultOpacity}):z.reset("overlay")},async load(){const e=z.get("overlay");e&&(Q.image.value=await new b(await async function(e){return(await fetch(e)).blob()}(e.data)).process(),Q.position.value=new m(e.position.x,e.position.y),Q.imageName.value=e.name,Q.opacity.value=e.opacity??_.overlay.defaultOpacity)}};Q.isSet=n((()=>null!==Q.image.value));const X=i({}),Z={modal:a(null),isOpen:n((()=>!1)),open(e,t){Z.modal.value={title:e,children:t}},close(){Z.modal.value=null}};Z.isOpen=n((()=>null!==Z.modal.value));const ee=i({}),te={background:"_background_1uywn_1",modal:"_modal_1uywn_13",top:"_top_1uywn_24",title:"_title_1uywn_31",close:"_close_1uywn_36",body:"_body_1uywn_40"};function ae({className:e,icon:t,alt:a,size:n=15,viewBoxSize:i=17}){return o("svg",{className:e,alt:a,width:n,height:n,viewBox:`0 0 ${i} ${i}`,children:o("use",{href:`/images/icons/minify/${t}.min.svg#icon`})})}function ne(){var e,t;const a=l(ee);return a.isOpen.value?o("div",{className:te.background,children:o("div",{className:te.modal,children:[o("div",{className:te.top,children:[o("h3",{className:te.title,children:null==(e=a.modal.value)?void 0:e.title}),o("button",{className:te.close,onClick:()=>a.close(),children:o(ae,{icon:"plus"})})]}),o("div",{className:te.body,children:null==(t=a.modal.value)?void 0:t.children})]})}):null}const ie=r((()=>g((()=>import("./Snow-DiJ7OQRG.js")),__vite__mapDeps([0,1,2,3])).then((e=>e.Snow)))),oe=r((()=>g((()=>import("./Place-B6ITrXAv.js")),__vite__mapDeps([4,1,2,5,6])).then((e=>e.Place)))),le=r((()=>g((()=>import("./TopBar-CHXT3ay3.js")),__vite__mapDeps([7,1,2,5,8])).then((e=>e.TopBar))));function se(){return o(s,{children:[o(W.Provider,{value:K,children:o(ie,{})}),o(F.Provider,{value:D,children:o(V.Provider,{value:H,children:o(O.Provider,{value:B,children:o(X.Provider,{value:Q,children:[o(oe,{}),o(A.Provider,{value:T,children:o(J.Provider,{value:M,children:o(ee.Provider,{value:Z,children:[o(ne,{}),o(k.Provider,{value:N,children:o($.Provider,{value:G,children:o(q.Provider,{value:L,children:o(U.Provider,{value:j,children:o(le,{})})})})})]})})})]})})})})]})}const re={wrapper:"_wrapper_13eau_1",title:"_title_13eau_12",container:"_container_13eau_19",link:"_link_13eau_27",message:"_message_13eau_31"};function ce(){return o("div",{className:re.container,children:o("section",{className:re.wrapper,children:[o("h1",{className:re.title,children:"Страница не найдена"}),o("p",{className:re.message,children:"Возможно вы перешли по неправильному адресу"}),o("a",{href:"/",className:re.link,children:"Вернуться на главную"})]})})}function ue(){return c((()=>{window.location.replace(_.url.api+"/login/discord")})),null}function de(){return c((()=>{N.logout(),window.location.replace("/")}),[]),null}const ve="_wrapper_1xbj9_1",fe="_logo_1xbj9_25",pe="_message_1xbj9_39";function me(){return o(f,{children:[o(d,{fallback:o("div",{className:ve,children:[o("img",{className:fe,src:"/images/meta/favicon.svg",alt:"Логотип Pixel Battle"}),o("p",{className:pe,children:"Loading"})]}),children:o(v,{path:"/",component:se})}),o(v,{path:"/login",component:ue}),o(v,{path:"/logout",component:de}),o(v,{path:void 0,component:ce})]})}u(o(me,{}),document.getElementById("app"));export{y as A,H as C,D as I,ee as M,T as N,Q as O,B as P,W as S,J as T,x as U,j as a,I as b,_ as c,L as d,N as e,R as f,G as g,O as h,q as i,U as j,ae as k,V as l,$ as m,k as n,A as o,X as p,b as q,w as r,F as s};
