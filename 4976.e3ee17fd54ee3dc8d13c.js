"use strict";(self.webpackChunkbuiler=self.webpackChunkbuiler||[]).push([[4976],{4976:(e,t,n)=>{var r,a;n.d(t,{Kd:()=>v,N_:()=>d});var i=n(6540),o=n(961),l=n(7767),c=n(5588);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const u=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(e){}new Map;const f=(r||(r=n.t(i,2))).startTransition;function v(e){let{basename:t,children:n,future:r,window:a}=e,o=i.useRef();null==o.current&&(o.current=(0,c.zR)({window:a,v5Compat:!0}));let s=o.current,[u,v]=i.useState({action:s.action,location:s.location}),{v7_startTransition:w}=r||{},p=i.useCallback((e=>{w&&f?f((()=>v(e))):v(e)}),[v,w]);return i.useLayoutEffect((()=>s.listen(p)),[s,p]),i.createElement(l.Ix,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:s,future:r})}(a||(a=n.t(o,2))).flushSync,(r||(r=n.t(i,2))).useId;const w="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,p=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,d=i.forwardRef((function(e,t){let n,{onClick:r,relative:a,reloadDocument:o,replace:f,state:v,target:d,to:h,preventScrollReset:b,viewTransition:m}=e,S=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,u),{basename:y}=i.useContext(l.jb),R=!1;if("string"==typeof h&&p.test(h)&&(n=h,w))try{let e=new URL(window.location.href),t=h.startsWith("//")?new URL(e.protocol+h):new URL(h),n=(0,c.pb)(t.pathname,y);t.origin===e.origin&&null!=n?h=n+t.search+t.hash:R=!0}catch(e){}let g=(0,l.$P)(h,{relative:a}),k=function(e,t){let{target:n,replace:r,state:a,preventScrollReset:o,relative:s,viewTransition:u}=void 0===t?{}:t,f=(0,l.Zp)(),v=(0,l.zy)(),w=(0,l.x$)(e,{relative:s});return i.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==r?r:(0,c.AO)(v)===(0,c.AO)(w);f(e,{replace:n,state:a,preventScrollReset:o,relative:s,viewTransition:u})}}),[v,f,w,r,a,n,e,o,s,u])}(h,{replace:f,state:v,target:d,preventScrollReset:b,relative:a,viewTransition:m});return i.createElement("a",s({},S,{href:n||g,onClick:R||o?r:function(e){r&&r(e),e.defaultPrevented||k(e)},ref:t,target:d}))}));var h,b;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(h||(h={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(b||(b={}))}}]);