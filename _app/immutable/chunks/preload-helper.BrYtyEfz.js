"Copyright (c) 2022 PvP Legacy. Good luck reading any of this."
const e={},t=function(t,n,r){let o=Promise.resolve()
if(n&&n.length>0){const t=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),s=(null==l?void 0:l.nonce)||(null==l?void 0:l.getAttribute("nonce"))
o=Promise.allSettled(n.map((n=>{if(n=function(e,t){return new URL(e,t).href}(n,r),n in e)return
e[n]=!0
const o=n.endsWith(".css"),l=o?'[rel="stylesheet"]':""
if(r)for(let e=t.length-1;e>=0;e--){const r=t[e]
if(r.href===n&&(!o||"stylesheet"===r.rel))return}else if(document.querySelector(`link[href="${n}"]${l}`))return
const c=document.createElement("link")
return c.rel=o?"stylesheet":"modulepreload",o||(c.as="script"),c.crossOrigin="",c.href=n,s&&c.setAttribute("nonce",s),document.head.appendChild(c),o?new Promise(((e,t)=>{c.addEventListener("load",e),c.addEventListener("error",(()=>t(new Error(`Unable to preload CSS for ${n}`))))})):void 0})))}function l(e){const t=new Event("vite:preloadError",{cancelable:!0})
if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then((e=>{for(const t of e||[])"rejected"===t.status&&l(t.reason)
return t().catch(l)}))}
export{t as _}