if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const o=s=>l(s,i),t={module:{uri:i},exports:u,require:o};e[i]=Promise.all(r.map((s=>t[s]||o(s)))).then((s=>(n(...s),u)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/ar-TN.5e7904d1.js",revision:null},{url:"assets/be-BY.76c9b20f.js",revision:null},{url:"assets/ca-ES.c0b51033.js",revision:null},{url:"assets/collect.3db8483a.js",revision:null},{url:"assets/colorworker.1537294c.js",revision:null},{url:"assets/da-DK.20509582.js",revision:null},{url:"assets/de-DE.b997a814.js",revision:null},{url:"assets/el-GR.0c28ab71.js",revision:null},{url:"assets/en-GB.6c2897dc.js",revision:null},{url:"assets/en-US.b96dc1aa.js",revision:null},{url:"assets/es-ES.81697b08.js",revision:null},{url:"assets/filehandling.cc374e85.js",revision:null},{url:"assets/fr-FR.a9a62eba.js",revision:null},{url:"assets/he-IL.54d4018c.js",revision:null},{url:"assets/id-ID.0355f468.js",revision:null},{url:"assets/index.f9c28252.js",revision:null},{url:"assets/install.674f1b66.js",revision:null},{url:"assets/it-IT.55f5b406.js",revision:null},{url:"assets/ja-JP.2ed67b25.js",revision:null},{url:"assets/ko-KR.2af95d31.js",revision:null},{url:"assets/languages.d01e4060.js",revision:null},{url:"assets/module-workers-polyfill.min.dc7647fd.js",revision:null},{url:"assets/monochromeworker.7268595a.js",revision:null},{url:"assets/nl-NL.4f5c7eb6.js",revision:null},{url:"assets/no-NO.071d7836.js",revision:null},{url:"assets/pl-PL.adc5c117.js",revision:null},{url:"assets/preprocessworker.c15347fd.js",revision:null},{url:"assets/preprocessworker.c16fd16a.js",revision:null},{url:"assets/pt-BR.f29383fb.js",revision:null},{url:"assets/ru-RU.b399b25e.js",revision:null},{url:"assets/share.fbd02356.js",revision:null},{url:"assets/style.7f0bcf0b.css",revision:null},{url:"assets/svgoworker.a1cc194a.js",revision:null},{url:"assets/uk-UA.e0ee5dd1.js",revision:null},{url:"assets/windowcontrols.5c92c3e4.js",revision:null},{url:"assets/workbox-window.prod.es5.d2780aeb.js",revision:null},{url:"assets/zh-CN.fc39fb5e.js",revision:null},{url:"index.html",revision:"259ec0a0b80434f725f2b8a40757b434"},{url:"sharetargetsw.js",revision:"fe6035ce16732cd07fe629f4f0959ef6"},{url:"manifest.webmanifest",revision:"1d80869b80e6dfb3139af5cc4519ce95"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
