if(!self.define){let o,l={};const r=(r,s)=>(r=new URL(r+".js",s).href,l[r]||new Promise((l=>{if("document"in self){const o=document.createElement("script");o.src=r,o.onload=l,document.head.appendChild(o)}else o=r,importScripts(r),l()})).then((()=>{let o=l[r];if(!o)throw new Error(`Module ${r} didn’t register its module`);return o})));self.define=(s,e)=>{const n=o||("document"in self?document.currentScript.src:"")||location.href;if(l[n])return;let i={};const t=o=>r(o,n),a={module:{uri:n},exports:i,require:t};l[n]=Promise.all(s.map((o=>a[o]||t(o)))).then((o=>(e(...o),i)))}}define(["./workbox-7cfec069"],(function(o){"use strict";self.addEventListener("message",(o=>{o.data&&"SKIP_WAITING"===o.data.type&&self.skipWaiting()})),o.precacheAndRoute([{url:"assets/alarm-DM0YUa2r.mp3",revision:null},{url:"assets/index-2em06Nsd.css",revision:null},{url:"assets/index-Cyc3hHYs.js",revision:null},{url:"assets/roboto-cyrillic-300-normal-D6mjswgs.woff2",revision:null},{url:"assets/roboto-cyrillic-300-normal-UX5PCucy.woff",revision:null},{url:"assets/roboto-cyrillic-400-normal-DCQqOlfN.woff",revision:null},{url:"assets/roboto-cyrillic-400-normal-DVDTZtmW.woff2",revision:null},{url:"assets/roboto-cyrillic-500-normal-DAkZhMOh.woff2",revision:null},{url:"assets/roboto-cyrillic-500-normal-QpWeYsca.woff",revision:null},{url:"assets/roboto-cyrillic-700-normal-B5ZBKWCH.woff2",revision:null},{url:"assets/roboto-cyrillic-700-normal-DAIxw5xX.woff",revision:null},{url:"assets/roboto-cyrillic-ext-300-normal-C7AGhuC_.woff",revision:null},{url:"assets/roboto-cyrillic-ext-300-normal-TzZWIuiO.woff2",revision:null},{url:"assets/roboto-cyrillic-ext-400-normal--KougVX-.woff",revision:null},{url:"assets/roboto-cyrillic-ext-400-normal-DORK9bGA.woff2",revision:null},{url:"assets/roboto-cyrillic-ext-500-normal-G9W8hgzQ.woff2",revision:null},{url:"assets/roboto-cyrillic-ext-500-normal-sraxM_lR.woff",revision:null},{url:"assets/roboto-cyrillic-ext-700-normal-CsrCEJIc.woff2",revision:null},{url:"assets/roboto-cyrillic-ext-700-normal-dDOtDc5i.woff",revision:null},{url:"assets/roboto-greek-300-normal-Dgbe-dnN.woff",revision:null},{url:"assets/roboto-greek-300-normal-ndiuWqED.woff2",revision:null},{url:"assets/roboto-greek-400-normal-BnGNaKeW.woff",revision:null},{url:"assets/roboto-greek-400-normal-BRWHCUYo.woff2",revision:null},{url:"assets/roboto-greek-500-normal-CpESfwfG.woff2",revision:null},{url:"assets/roboto-greek-500-normal-CVjdsdX9.woff",revision:null},{url:"assets/roboto-greek-700-normal-Cc2Tq8FV.woff2",revision:null},{url:"assets/roboto-greek-700-normal-CjuTpGfE.woff",revision:null},{url:"assets/roboto-latin-300-normal-Cs84CNT2.woff",revision:null},{url:"assets/roboto-latin-300-normal-ThHrQhYb.woff2",revision:null},{url:"assets/roboto-latin-400-normal-BU1SoK4h.woff",revision:null},{url:"assets/roboto-latin-400-normal-mTIRXP6Y.woff2",revision:null},{url:"assets/roboto-latin-500-normal-Dcm-rhWF.woff",revision:null},{url:"assets/roboto-latin-500-normal-Dxdx3aXO.woff2",revision:null},{url:"assets/roboto-latin-700-normal-Bh431LEL.woff",revision:null},{url:"assets/roboto-latin-700-normal-CeM5gOv8.woff2",revision:null},{url:"assets/roboto-latin-ext-300-normal-CaUuWeqj.woff",revision:null},{url:"assets/roboto-latin-ext-300-normal-DEsNdRC-.woff2",revision:null},{url:"assets/roboto-latin-ext-400-normal-4bLplyDh.woff2",revision:null},{url:"assets/roboto-latin-ext-400-normal-ABAIaefi.woff",revision:null},{url:"assets/roboto-latin-ext-500-normal-B9pAx_JH.woff",revision:null},{url:"assets/roboto-latin-ext-500-normal-BWKy6SgX.woff2",revision:null},{url:"assets/roboto-latin-ext-700-normal-BYGCo3Go.woff2",revision:null},{url:"assets/roboto-latin-ext-700-normal-DwUXTeTv.woff",revision:null},{url:"assets/roboto-vietnamese-300-normal-CnPrVvBs.woff2",revision:null},{url:"assets/roboto-vietnamese-300-normal-DOxDZ6bW.woff",revision:null},{url:"assets/roboto-vietnamese-400-normal-BkEBOAV9.woff",revision:null},{url:"assets/roboto-vietnamese-400-normal-kCRe3VZk.woff2",revision:null},{url:"assets/roboto-vietnamese-500-normal-Bwg8Dbh6.woff",revision:null},{url:"assets/roboto-vietnamese-500-normal-CcijQRVW.woff2",revision:null},{url:"assets/roboto-vietnamese-700-normal-Mc0c6qif.woff",revision:null},{url:"assets/roboto-vietnamese-700-normal-SekShQfT.woff2",revision:null},{url:"assets/workbox-window.prod.es5-DFjpnwFp.js",revision:null},{url:"index.html",revision:"20ac44a4381e038697e75b31a8514bb0"},{url:"styles.css",revision:"22808aa9ddac6c0183191614b7953e5f"},{url:"favicon.ico",revision:"03d55280cc7e16907f90d7d152111869"},{url:"apple-touch-icon-180x180.png",revision:"27527b05315b4bcaa27183d0c99178d6"},{url:"pwa-64x64.png",revision:"bb08d4ffe204a919b06960e1a96caea7"},{url:"pwa-192x192.png",revision:"3b1e4bbecc729dd5ba5c67eb273f91ee"},{url:"pwa-512x512.png",revision:"9e98c5c9167e3577609ac44b27c5be45"},{url:"manifest.webmanifest",revision:"968b888aeea2a525304a5752d3e61651"}],{}),o.cleanupOutdatedCaches(),o.registerRoute(new o.NavigationRoute(o.createHandlerBoundToURL("index.html"),{denylist:[/^\/api/]}))}));
