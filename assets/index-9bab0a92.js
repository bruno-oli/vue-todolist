(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function aa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function ia(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=oe(r)?Is(r):ia(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(oe(e))return e;if(G(e))return e}}const Ps=/;(?![^(]*\))/g,Cs=/:([^]+)/,Ss=/\/\*.*?\*\//gs;function Is(e){const t={};return e.replace(Ss,"").split(Ps).forEach(n=>{if(n){const r=n.split(Cs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function oa(e){let t="";if(oe(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=oa(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ts="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ns=aa(Ts);function Xi(e){return!!e||e===""}function Ms(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=tr(e[r],t[r]);return n}function tr(e,t){if(e===t)return!0;let n=Ya(e),r=Ya(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=rn(e),r=rn(t),n||r)return e===t;if(n=F(e),r=F(t),n||r)return n&&r?Ms(e,t):!1;if(n=G(e),r=G(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!tr(e[o],t[o]))return!1}}return String(e)===String(t)}function Ji(e,t){return e.findIndex(n=>tr(n,t))}const q={},Nt=[],Se=()=>{},Fs=()=>!1,Rs=/^on[^a-z]/,nr=e=>Rs.test(e),sa=e=>e.startsWith("onUpdate:"),me=Object.assign,la=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},js=Object.prototype.hasOwnProperty,B=(e,t)=>js.call(e,t),F=Array.isArray,qt=e=>gn(e)==="[object Map]",fa=e=>gn(e)==="[object Set]",Ya=e=>gn(e)==="[object Date]",L=e=>typeof e=="function",oe=e=>typeof e=="string",rn=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",Gi=e=>G(e)&&L(e.then)&&L(e.catch),Ls=Object.prototype.toString,gn=e=>Ls.call(e),Ds=e=>gn(e).slice(8,-1),$s=e=>gn(e)==="[object Object]",ca=e=>oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ln=aa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},zs=/-(\w)/g,$e=rr(e=>e.replace(zs,(t,n)=>n?n.toUpperCase():"")),Us=/\B([A-Z])/g,zt=rr(e=>e.replace(Us,"-$1").toLowerCase()),ar=rr(e=>e.charAt(0).toUpperCase()+e.slice(1)),_r=rr(e=>e?`on${ar(e)}`:""),an=(e,t)=>!Object.is(e,t),Dn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Yn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Tr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Wa;const Hs=()=>Wa||(Wa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let be;class Zi{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=be,!t&&be&&(this.index=(be.scopes||(be.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=be;try{return be=this,t()}finally{be=n}}}on(){be=this}off(){be=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Qi(e){return new Zi(e)}function Bs(e,t=be){t&&t.active&&t.effects.push(e)}function eo(){return be}function Ys(e){be&&be.cleanups.push(e)}const ua=e=>{const t=new Set(e);return t.w=0,t.n=0,t},to=e=>(e.w&nt)>0,no=e=>(e.n&nt)>0,Ws=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=nt},Ks=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];to(a)&&!no(a)?a.delete(e):t[n++]=a,a.w&=~nt,a.n&=~nt}t.length=n}},Wn=new WeakMap;let Kt=0,nt=1;const Nr=30;let Ae;const bt=Symbol(""),Mr=Symbol("");class da{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Bs(this,r)}run(){if(!this.active)return this.fn();let t=Ae,n=Qe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ae,Ae=this,Qe=!0,nt=1<<++Kt,Kt<=Nr?Ws(this):Ka(this),this.fn()}finally{Kt<=Nr&&Ks(this),nt=1<<--Kt,Ae=this.parent,Qe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ae===this?this.deferStop=!0:this.active&&(Ka(this),this.onStop&&this.onStop(),this.active=!1)}}function Ka(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Qe=!0;const ro=[];function Ut(){ro.push(Qe),Qe=!1}function Ht(){const e=ro.pop();Qe=e===void 0?!0:e}function ge(e,t,n){if(Qe&&Ae){let r=Wn.get(e);r||Wn.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ua()),ao(a)}}function ao(e,t){let n=!1;Kt<=Nr?no(e)||(e.n|=nt,n=!to(e)):n=!e.has(Ae),n&&(e.add(Ae),Ae.deps.push(e))}function Be(e,t,n,r,a,i){const o=Wn.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?ca(n)&&s.push(o.get("length")):(s.push(o.get(bt)),qt(e)&&s.push(o.get(Mr)));break;case"delete":F(e)||(s.push(o.get(bt)),qt(e)&&s.push(o.get(Mr)));break;case"set":qt(e)&&s.push(o.get(bt));break}if(s.length===1)s[0]&&Fr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Fr(ua(l))}}function Fr(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&Va(r);for(const r of n)r.computed||Va(r)}function Va(e,t){(e!==Ae||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Vs(e,t){var n;return(n=Wn.get(e))===null||n===void 0?void 0:n.get(t)}const qs=aa("__proto__,__v_isRef,__isVue"),io=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(rn)),Xs=ma(),Js=ma(!1,!0),Gs=ma(!0),qa=Zs();function Zs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)ge(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ut();const r=Y(this)[t].apply(this,n);return Ht(),r}}),e}function Qs(e){const t=Y(this);return ge(t,"has",e),t.hasOwnProperty(e)}function ma(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?hl:co:t?fo:lo).get(r))return r;const o=F(r);if(!e){if(o&&B(qa,a))return Reflect.get(qa,a,i);if(a==="hasOwnProperty")return Qs}const s=Reflect.get(r,a,i);return(rn(a)?io.has(a):qs(a))||(e||ge(r,"get",a),t)?s:ne(s)?o&&ca(a)?s:s.value:G(s)?e?uo(s):or(s):s}}const el=oo(),tl=oo(!0);function oo(e=!1){return function(n,r,a,i){let o=n[r];if(Rt(o)&&ne(o)&&!ne(a))return!1;if(!e&&(!Kn(a)&&!Rt(a)&&(o=Y(o),a=Y(a)),!F(n)&&ne(o)&&!ne(a)))return o.value=a,!0;const s=F(n)&&ca(r)?Number(r)<n.length:B(n,r),l=Reflect.set(n,r,a,i);return n===Y(i)&&(s?an(a,o)&&Be(n,"set",r,a):Be(n,"add",r,a)),l}}function nl(e,t){const n=B(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Be(e,"delete",t,void 0),r}function rl(e,t){const n=Reflect.has(e,t);return(!rn(t)||!io.has(t))&&ge(e,"has",t),n}function al(e){return ge(e,"iterate",F(e)?"length":bt),Reflect.ownKeys(e)}const so={get:Xs,set:el,deleteProperty:nl,has:rl,ownKeys:al},il={get:Gs,set(e,t){return!0},deleteProperty(e,t){return!0}},ol=me({},so,{get:Js,set:tl}),pa=e=>e,ir=e=>Reflect.getPrototypeOf(e);function wn(e,t,n=!1,r=!1){e=e.__v_raw;const a=Y(e),i=Y(t);n||(t!==i&&ge(a,"get",t),ge(a,"get",i));const{has:o}=ir(a),s=r?pa:n?va:on;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function kn(e,t=!1){const n=this.__v_raw,r=Y(n),a=Y(e);return t||(e!==a&&ge(r,"has",e),ge(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function An(e,t=!1){return e=e.__v_raw,!t&&ge(Y(e),"iterate",bt),Reflect.get(e,"size",e)}function Xa(e){e=Y(e);const t=Y(this);return ir(t).has.call(t,e)||(t.add(e),Be(t,"add",e,e)),this}function Ja(e,t){t=Y(t);const n=Y(this),{has:r,get:a}=ir(n);let i=r.call(n,e);i||(e=Y(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?an(t,o)&&Be(n,"set",e,t):Be(n,"add",e,t),this}function Ga(e){const t=Y(this),{has:n,get:r}=ir(t);let a=n.call(t,e);a||(e=Y(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Be(t,"delete",e,void 0),i}function Za(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&Be(e,"clear",void 0,void 0),n}function On(e,t){return function(r,a){const i=this,o=i.__v_raw,s=Y(o),l=t?pa:e?va:on;return!e&&ge(s,"iterate",bt),o.forEach((c,u)=>r.call(a,l(c),l(u),i))}}function En(e,t,n){return function(...r){const a=this.__v_raw,i=Y(a),o=qt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),u=n?pa:t?va:on;return!t&&ge(i,"iterate",l?Mr:bt),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:s?[u(m[0]),u(m[1])]:u(m),done:h}},[Symbol.iterator](){return this}}}}function Xe(e){return function(...t){return e==="delete"?!1:this}}function sl(){const e={get(i){return wn(this,i)},get size(){return An(this)},has:kn,add:Xa,set:Ja,delete:Ga,clear:Za,forEach:On(!1,!1)},t={get(i){return wn(this,i,!1,!0)},get size(){return An(this)},has:kn,add:Xa,set:Ja,delete:Ga,clear:Za,forEach:On(!1,!0)},n={get(i){return wn(this,i,!0)},get size(){return An(this,!0)},has(i){return kn.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:On(!0,!1)},r={get(i){return wn(this,i,!0,!0)},get size(){return An(this,!0)},has(i){return kn.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:On(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=En(i,!1,!1),n[i]=En(i,!0,!1),t[i]=En(i,!1,!0),r[i]=En(i,!0,!0)}),[e,n,t,r]}const[ll,fl,cl,ul]=sl();function ha(e,t){const n=t?e?ul:cl:e?fl:ll;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(B(n,a)&&a in r?n:r,a,i)}const dl={get:ha(!1,!1)},ml={get:ha(!1,!0)},pl={get:ha(!0,!1)},lo=new WeakMap,fo=new WeakMap,co=new WeakMap,hl=new WeakMap;function gl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vl(e){return e.__v_skip||!Object.isExtensible(e)?0:gl(Ds(e))}function or(e){return Rt(e)?e:ga(e,!1,so,dl,lo)}function bl(e){return ga(e,!1,ol,ml,fo)}function uo(e){return ga(e,!0,il,pl,co)}function ga(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=vl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function et(e){return Rt(e)?et(e.__v_raw):!!(e&&e.__v_isReactive)}function Rt(e){return!!(e&&e.__v_isReadonly)}function Kn(e){return!!(e&&e.__v_isShallow)}function mo(e){return et(e)||Rt(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function jt(e){return Yn(e,"__v_skip",!0),e}const on=e=>G(e)?or(e):e,va=e=>G(e)?uo(e):e;function po(e){Qe&&Ae&&(e=Y(e),ao(e.dep||(e.dep=ua())))}function ho(e,t){e=Y(e);const n=e.dep;n&&Fr(n)}function ne(e){return!!(e&&e.__v_isRef===!0)}function ba(e){return yl(e,!1)}function yl(e,t){return ne(e)?e:new xl(e,t)}class xl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Y(t),this._value=n?t:on(t)}get value(){return po(this),this._value}set value(t){const n=this.__v_isShallow||Kn(t)||Rt(t);t=n?t:Y(t),an(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:on(t),ho(this))}}function rt(e){return ne(e)?e.value:e}const _l={get:(e,t,n)=>rt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ne(a)&&!ne(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function go(e){return et(e)?e:new Proxy(e,_l)}function wl(e){const t=F(e)?new Array(e.length):{};for(const n in e)t[n]=Al(e,n);return t}class kl{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Vs(Y(this._object),this._key)}}function Al(e,t,n){const r=e[t];return ne(r)?r:new kl(e,t,n)}var vo;class Ol{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[vo]=!1,this._dirty=!0,this.effect=new da(t,()=>{this._dirty||(this._dirty=!0,ho(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=Y(this);return po(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}vo="__v_isReadonly";function El(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Se):(r=e.get,a=e.set),new Ol(r,a,i||!a,n)}function tt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){sr(i,t,n)}return a}function Ie(e,t,n,r){if(L(e)){const i=tt(e,t,n,r);return i&&Gi(i)&&i.catch(o=>{sr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ie(e[i],t,n,r));return a}function sr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){tt(l,null,10,[e,o,s]);return}}Pl(e,n,a,r)}function Pl(e,t,n,r=!0){console.error(e)}let sn=!1,Rr=!1;const le=[];let je=0;const Mt=[];let He=null,dt=0;const bo=Promise.resolve();let ya=null;function yo(e){const t=ya||bo;return e?t.then(this?e.bind(this):e):t}function Cl(e){let t=je+1,n=le.length;for(;t<n;){const r=t+n>>>1;ln(le[r])<e?t=r+1:n=r}return t}function xa(e){(!le.length||!le.includes(e,sn&&e.allowRecurse?je+1:je))&&(e.id==null?le.push(e):le.splice(Cl(e.id),0,e),xo())}function xo(){!sn&&!Rr&&(Rr=!0,ya=bo.then(wo))}function Sl(e){const t=le.indexOf(e);t>je&&le.splice(t,1)}function Il(e){F(e)?Mt.push(...e):(!He||!He.includes(e,e.allowRecurse?dt+1:dt))&&Mt.push(e),xo()}function Qa(e,t=sn?je+1:0){for(;t<le.length;t++){const n=le[t];n&&n.pre&&(le.splice(t,1),t--,n())}}function _o(e){if(Mt.length){const t=[...new Set(Mt)];if(Mt.length=0,He){He.push(...t);return}for(He=t,He.sort((n,r)=>ln(n)-ln(r)),dt=0;dt<He.length;dt++)He[dt]();He=null,dt=0}}const ln=e=>e.id==null?1/0:e.id,Tl=(e,t)=>{const n=ln(e)-ln(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function wo(e){Rr=!1,sn=!0,le.sort(Tl);const t=Se;try{for(je=0;je<le.length;je++){const n=le[je];n&&n.active!==!1&&tt(n,null,14)}}finally{je=0,le.length=0,_o(),sn=!1,ya=null,(le.length||Mt.length)&&wo()}}function Nl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||q;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[u]||q;h&&(a=n.map(w=>oe(w)?w.trim():w)),m&&(a=n.map(Tr))}let s,l=r[s=_r(t)]||r[s=_r($e(t))];!l&&i&&(l=r[s=_r(zt(t))]),l&&Ie(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ie(c,e,6,a)}}function ko(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=c=>{const u=ko(c,t,!0);u&&(s=!0,me(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(G(e)&&r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):me(o,i),G(e)&&r.set(e,o),o)}function lr(e,t){return!e||!nr(t)?!1:(t=t.slice(2).replace(/Once$/,""),B(e,t[0].toLowerCase()+t.slice(1))||B(e,zt(t))||B(e,t))}let xe=null,Ao=null;function Vn(e){const t=xe;return xe=e,Ao=e&&e.type.__scopeId||null,t}function Ml(e,t=xe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&fi(-1);const i=Vn(t);let o;try{o=e(...a)}finally{Vn(i),r._d&&fi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function wr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:m,data:h,setupState:w,ctx:M,inheritAttrs:I}=e;let H,_;const P=Vn(e);try{if(n.shapeFlag&4){const j=a||r;H=Re(u.call(j,j,m,i,w,h,M)),_=l}else{const j=t;H=Re(j.length>1?j(i,{attrs:l,slots:s,emit:c}):j(i,null)),_=t.props?l:Fl(l)}}catch(j){Zt.length=0,sr(j,e,1),H=fe(_t)}let E=H;if(_&&I!==!1){const j=Object.keys(_),{shapeFlag:D}=E;j.length&&D&7&&(o&&j.some(sa)&&(_=Rl(_,o)),E=Lt(E,_))}return n.dirs&&(E=Lt(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),H=E,Vn(P),H}const Fl=e=>{let t;for(const n in e)(n==="class"||n==="style"||nr(n))&&((t||(t={}))[n]=e[n]);return t},Rl=(e,t)=>{const n={};for(const r in e)(!sa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function jl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ei(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const h=u[m];if(o[h]!==r[h]&&!lr(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ei(r,o,c):!0:!!o;return!1}function ei(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!lr(n,i))return!0}return!1}function Ll({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Dl=e=>e.__isSuspense;function $l(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Il(e)}function zl(e,t){if(te){let n=te.provides;const r=te.parent&&te.parent.provides;r===n&&(n=te.provides=Object.create(r)),n[e]=t}}function Xt(e,t,n=!1){const r=te||xe;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}function Ul(e,t){return _a(e,null,t)}const Pn={};function Jt(e,t,n){return _a(e,t,n)}function _a(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=q){const s=eo()===(te==null?void 0:te.scope)?te:null;let l,c=!1,u=!1;if(ne(e)?(l=()=>e.value,c=Kn(e)):et(e)?(l=()=>e,r=!0):F(e)?(u=!0,c=e.some(E=>et(E)||Kn(E)),l=()=>e.map(E=>{if(ne(E))return E.value;if(et(E))return ht(E);if(L(E))return tt(E,s,2)})):L(e)?t?l=()=>tt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ie(e,s,3,[h])}:l=Se,t&&r){const E=l;l=()=>ht(E())}let m,h=E=>{m=_.onStop=()=>{tt(E,s,4)}},w;if(cn)if(h=Se,t?n&&Ie(t,s,3,[l(),u?[]:void 0,h]):l(),a==="sync"){const E=$f();w=E.__watcherHandles||(E.__watcherHandles=[])}else return Se;let M=u?new Array(e.length).fill(Pn):Pn;const I=()=>{if(_.active)if(t){const E=_.run();(r||c||(u?E.some((j,D)=>an(j,M[D])):an(E,M)))&&(m&&m(),Ie(t,s,3,[E,M===Pn?void 0:u&&M[0]===Pn?[]:M,h]),M=E)}else _.run()};I.allowRecurse=!!t;let H;a==="sync"?H=I:a==="post"?H=()=>he(I,s&&s.suspense):(I.pre=!0,s&&(I.id=s.uid),H=()=>xa(I));const _=new da(l,H);t?n?I():M=_.run():a==="post"?he(_.run.bind(_),s&&s.suspense):_.run();const P=()=>{_.stop(),s&&s.scope&&la(s.scope.effects,_)};return w&&w.push(P),P}function Hl(e,t,n){const r=this.proxy,a=oe(e)?e.includes(".")?Oo(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=te;Dt(this);const s=_a(a,i.bind(r),n);return o?Dt(o):xt(),s}function Oo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ht(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ne(e))ht(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)ht(e[n],t);else if(fa(e)||qt(e))e.forEach(n=>{ht(n,t)});else if($s(e))for(const n in e)ht(e[n],t);return e}function At(e){return L(e)?{setup:e,name:e.name}:e}const $n=e=>!!e.type.__asyncLoader,Eo=e=>e.type.__isKeepAlive;function Bl(e,t){Po(e,"a",t)}function Yl(e,t){Po(e,"da",t)}function Po(e,t,n=te){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(fr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Eo(a.parent.vnode)&&Wl(r,t,n,a),a=a.parent}}function Wl(e,t,n,r){const a=fr(t,e,r,!0);Co(()=>{la(r[t],a)},n)}function fr(e,t,n=te,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ut(),Dt(n);const s=Ie(t,n,e,o);return xt(),Ht(),s});return r?a.unshift(i):a.push(i),i}}const Ve=e=>(t,n=te)=>(!cn||e==="sp")&&fr(e,(...r)=>t(...r),n),Kl=Ve("bm"),Vl=Ve("m"),ql=Ve("bu"),Xl=Ve("u"),Jl=Ve("bum"),Co=Ve("um"),Gl=Ve("sp"),Zl=Ve("rtg"),Ql=Ve("rtc");function ef(e,t=te){fr("ec",e,t)}function ti(e,t){const n=xe;if(n===null)return e;const r=dr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=q]=t[i];o&&(L(o)&&(o={mounted:o,updated:o}),o.deep&&ht(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function ft(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ut(),Ie(l,n,8,[e.el,s,e,t]),Ht())}}const So="components";function Io(e,t){return nf(So,e,!0,t)||e}const tf=Symbol();function nf(e,t,n=!0,r=!1){const a=xe||te;if(a){const i=a.type;if(e===So){const s=jf(i,!1);if(s&&(s===t||s===$e(t)||s===ar($e(t))))return i}const o=ni(a[e]||i[e],t)||ni(a.appContext[e],t);return!o&&r?i:o}}function ni(e,t){return e&&(e[t]||e[$e(t)]||e[ar($e(t))])}function rf(e,t,n,r){let a;const i=n&&n[r];if(F(e)||oe(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(G(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const jr=e=>e?Uo(e)?dr(e)||e.proxy:jr(e.parent):null,Gt=me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>jr(e.parent),$root:e=>jr(e.root),$emit:e=>e.emit,$options:e=>wa(e),$forceUpdate:e=>e.f||(e.f=()=>xa(e.update)),$nextTick:e=>e.n||(e.n=yo.bind(e.proxy)),$watch:e=>Hl.bind(e)}),kr=(e,t)=>e!==q&&!e.__isScriptSetup&&B(e,t),af={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const w=o[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(kr(r,t))return o[t]=1,r[t];if(a!==q&&B(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&B(c,t))return o[t]=3,i[t];if(n!==q&&B(n,t))return o[t]=4,n[t];Lr&&(o[t]=0)}}const u=Gt[t];let m,h;if(u)return t==="$attrs"&&ge(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==q&&B(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,B(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return kr(a,t)?(a[t]=n,!0):r!==q&&B(r,t)?(r[t]=n,!0):B(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==q&&B(e,o)||kr(t,o)||(s=i[0])&&B(s,o)||B(r,o)||B(Gt,o)||B(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:B(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Lr=!0;function of(e){const t=wa(e),n=e.proxy,r=e.ctx;Lr=!1,t.beforeCreate&&ri(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:m,mounted:h,beforeUpdate:w,updated:M,activated:I,deactivated:H,beforeDestroy:_,beforeUnmount:P,destroyed:E,unmounted:j,render:D,renderTracked:re,renderTriggered:$,errorCaptured:z,serverPrefetch:Z,expose:se,inheritAttrs:we,components:Ot,directives:Et,filters:ze}=t;if(c&&sf(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const Q in o){const K=o[Q];L(K)&&(r[Q]=K.bind(n))}if(a){const Q=a.call(n,n);G(Q)&&(e.data=or(Q))}if(Lr=!0,i)for(const Q in i){const K=i[Q],st=L(K)?K.bind(n,n):L(K.get)?K.get.bind(n,n):Se,xn=!L(K)&&L(K.set)?K.set.bind(n):Se,lt=ye({get:st,set:xn});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>lt.value,set:Te=>lt.value=Te})}if(s)for(const Q in s)To(s[Q],r,n,Q);if(l){const Q=L(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(K=>{zl(K,Q[K])})}u&&ri(u,e,"c");function ue(Q,K){F(K)?K.forEach(st=>Q(st.bind(n))):K&&Q(K.bind(n))}if(ue(Kl,m),ue(Vl,h),ue(ql,w),ue(Xl,M),ue(Bl,I),ue(Yl,H),ue(ef,z),ue(Ql,re),ue(Zl,$),ue(Jl,P),ue(Co,j),ue(Gl,Z),F(se))if(se.length){const Q=e.exposed||(e.exposed={});se.forEach(K=>{Object.defineProperty(Q,K,{get:()=>n[K],set:st=>n[K]=st})})}else e.exposed||(e.exposed={});D&&e.render===Se&&(e.render=D),we!=null&&(e.inheritAttrs=we),Ot&&(e.components=Ot),Et&&(e.directives=Et)}function sf(e,t,n=Se,r=!1){F(e)&&(e=Dr(e));for(const a in e){const i=e[a];let o;G(i)?"default"in i?o=Xt(i.from||a,i.default,!0):o=Xt(i.from||a):o=Xt(i),ne(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function ri(e,t,n){Ie(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function To(e,t,n,r){const a=r.includes(".")?Oo(n,r):()=>n[r];if(oe(e)){const i=t[e];L(i)&&Jt(a,i)}else if(L(e))Jt(a,e.bind(n));else if(G(e))if(F(e))e.forEach(i=>To(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&Jt(a,i,e)}}function wa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>qn(l,c,o,!0)),qn(l,t,o)),G(t)&&i.set(t,l),l}function qn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&qn(e,i,n,!0),a&&a.forEach(o=>qn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=lf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const lf={data:ai,props:ut,emits:ut,methods:ut,computed:ut,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:ut,directives:ut,watch:cf,provide:ai,inject:ff};function ai(e,t){return t?e?function(){return me(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function ff(e,t){return ut(Dr(e),Dr(t))}function Dr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function de(e,t){return e?[...new Set([].concat(e,t))]:t}function ut(e,t){return e?me(me(Object.create(null),e),t):t}function cf(e,t){if(!e)return t;if(!t)return e;const n=me(Object.create(null),e);for(const r in t)n[r]=de(e[r],t[r]);return n}function uf(e,t,n,r=!1){const a={},i={};Yn(i,ur,1),e.propsDefaults=Object.create(null),No(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:bl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function df(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=Y(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let h=u[m];if(lr(e.emitsOptions,h))continue;const w=t[h];if(l)if(B(i,h))w!==i[h]&&(i[h]=w,c=!0);else{const M=$e(h);a[M]=$r(l,s,M,w,e,!1)}else w!==i[h]&&(i[h]=w,c=!0)}}}else{No(e,t,a,i)&&(c=!0);let u;for(const m in s)(!t||!B(t,m)&&((u=zt(m))===m||!B(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=$r(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!B(t,m))&&(delete i[m],c=!0)}c&&Be(e,"set","$attrs")}function No(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Ln(l))continue;const c=t[l];let u;a&&B(a,u=$e(l))?!i||!i.includes(u)?n[u]=c:(s||(s={}))[u]=c:lr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Y(n),c=s||q;for(let u=0;u<i.length;u++){const m=i[u];n[m]=$r(a,l,m,c[m],e,!B(c,m))}}return o}function $r(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=B(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Dt(a),r=c[n]=l.call(null,t),xt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===zt(n))&&(r=!0))}return r}function Mo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const u=m=>{l=!0;const[h,w]=Mo(m,t,!0);me(o,h),w&&s.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return G(e)&&r.set(e,Nt),Nt;if(F(i))for(let u=0;u<i.length;u++){const m=$e(i[u]);ii(m)&&(o[m]=q)}else if(i)for(const u in i){const m=$e(u);if(ii(m)){const h=i[u],w=o[m]=F(h)||L(h)?{type:h}:Object.assign({},h);if(w){const M=li(Boolean,w.type),I=li(String,w.type);w[0]=M>-1,w[1]=I<0||M<I,(M>-1||B(w,"default"))&&s.push(m)}}}const c=[o,s];return G(e)&&r.set(e,c),c}function ii(e){return e[0]!=="$"}function oi(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function si(e,t){return oi(e)===oi(t)}function li(e,t){return F(t)?t.findIndex(n=>si(n,e)):L(t)&&si(t,e)?0:-1}const Fo=e=>e[0]==="_"||e==="$stable",ka=e=>F(e)?e.map(Re):[Re(e)],mf=(e,t,n)=>{if(t._n)return t;const r=Ml((...a)=>ka(t(...a)),n);return r._c=!1,r},Ro=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Fo(a))continue;const i=e[a];if(L(i))t[a]=mf(a,i,r);else if(i!=null){const o=ka(i);t[a]=()=>o}}},jo=(e,t)=>{const n=ka(t);e.slots.default=()=>n},pf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),Yn(t,"_",n)):Ro(t,e.slots={})}else e.slots={},t&&jo(e,t);Yn(e.slots,ur,1)},hf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=q;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(me(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Ro(t,a)),o=t}else t&&(jo(e,t),o={default:1});if(i)for(const s in a)!Fo(s)&&!(s in o)&&delete a[s]};function Lo(){return{app:null,config:{isNativeTag:Fs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gf=0;function vf(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!G(a)&&(a=null);const i=Lo(),o=new Set;let s=!1;const l=i.app={_uid:gf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:zf,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(l,...u)):L(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,m){if(!s){const h=fe(r,a);return h.appContext=i,u&&t?t(h,c):e(h,c,m),s=!0,l._container=c,c.__vue_app__=l,dr(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function zr(e,t,n,r,a=!1){if(F(e)){e.forEach((h,w)=>zr(h,t&&(F(t)?t[w]:t),n,r,a));return}if($n(r)&&!a)return;const i=r.shapeFlag&4?dr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,u=s.refs===q?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(oe(c)?(u[c]=null,B(m,c)&&(m[c]=null)):ne(c)&&(c.value=null)),L(l))tt(l,s,12,[o,u]);else{const h=oe(l),w=ne(l);if(h||w){const M=()=>{if(e.f){const I=h?B(m,l)?m[l]:u[l]:l.value;a?F(I)&&la(I,i):F(I)?I.includes(i)||I.push(i):h?(u[l]=[i],B(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else h?(u[l]=o,B(m,l)&&(m[l]=o)):w&&(l.value=o,e.k&&(u[e.k]=o))};o?(M.id=-1,he(M,n)):M()}}}const he=$l;function bf(e){return yf(e)}function yf(e,t){const n=Hs();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:h,setScopeId:w=Se,insertStaticContent:M}=e,I=(f,d,p,v=null,g=null,x=null,A=!1,y=null,k=!!d.dynamicChildren)=>{if(f===d)return;f&&!Wt(f,d)&&(v=_n(f),Te(f,g,x,!0),f=null),d.patchFlag===-2&&(k=!1,d.dynamicChildren=null);const{type:b,ref:T,shapeFlag:C}=d;switch(b){case cr:H(f,d,p,v);break;case _t:_(f,d,p,v);break;case Ar:f==null&&P(d,p,v,A);break;case Fe:Ot(f,d,p,v,g,x,A,y,k);break;default:C&1?D(f,d,p,v,g,x,A,y,k):C&6?Et(f,d,p,v,g,x,A,y,k):(C&64||C&128)&&b.process(f,d,p,v,g,x,A,y,k,Pt)}T!=null&&g&&zr(T,f&&f.ref,x,d||f,!d)},H=(f,d,p,v)=>{if(f==null)r(d.el=s(d.children),p,v);else{const g=d.el=f.el;d.children!==f.children&&c(g,d.children)}},_=(f,d,p,v)=>{f==null?r(d.el=l(d.children||""),p,v):d.el=f.el},P=(f,d,p,v)=>{[f.el,f.anchor]=M(f.children,d,p,v,f.el,f.anchor)},E=({el:f,anchor:d},p,v)=>{let g;for(;f&&f!==d;)g=h(f),r(f,p,v),f=g;r(d,p,v)},j=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=h(f),a(f),f=p;a(d)},D=(f,d,p,v,g,x,A,y,k)=>{A=A||d.type==="svg",f==null?re(d,p,v,g,x,A,y,k):Z(f,d,g,x,A,y,k)},re=(f,d,p,v,g,x,A,y)=>{let k,b;const{type:T,props:C,shapeFlag:N,transition:R,dirs:U}=f;if(k=f.el=o(f.type,x,C&&C.is,C),N&8?u(k,f.children):N&16&&z(f.children,k,null,v,g,x&&T!=="foreignObject",A,y),U&&ft(f,null,v,"created"),$(k,f,f.scopeId,A,v),C){for(const W in C)W!=="value"&&!Ln(W)&&i(k,W,null,C[W],x,f.children,v,g,Ue);"value"in C&&i(k,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Me(b,v,f)}U&&ft(f,null,v,"beforeMount");const V=(!g||g&&!g.pendingBranch)&&R&&!R.persisted;V&&R.beforeEnter(k),r(k,d,p),((b=C&&C.onVnodeMounted)||V||U)&&he(()=>{b&&Me(b,v,f),V&&R.enter(k),U&&ft(f,null,v,"mounted")},g)},$=(f,d,p,v,g)=>{if(p&&w(f,p),v)for(let x=0;x<v.length;x++)w(f,v[x]);if(g){let x=g.subTree;if(d===x){const A=g.vnode;$(f,A,A.scopeId,A.slotScopeIds,g.parent)}}},z=(f,d,p,v,g,x,A,y,k=0)=>{for(let b=k;b<f.length;b++){const T=f[b]=y?Ze(f[b]):Re(f[b]);I(null,T,d,p,v,g,x,A,y)}},Z=(f,d,p,v,g,x,A)=>{const y=d.el=f.el;let{patchFlag:k,dynamicChildren:b,dirs:T}=d;k|=f.patchFlag&16;const C=f.props||q,N=d.props||q;let R;p&&ct(p,!1),(R=N.onVnodeBeforeUpdate)&&Me(R,p,d,f),T&&ft(d,f,p,"beforeUpdate"),p&&ct(p,!0);const U=g&&d.type!=="foreignObject";if(b?se(f.dynamicChildren,b,y,p,v,U,x):A||K(f,d,y,null,p,v,U,x,!1),k>0){if(k&16)we(y,d,C,N,p,v,g);else if(k&2&&C.class!==N.class&&i(y,"class",null,N.class,g),k&4&&i(y,"style",C.style,N.style,g),k&8){const V=d.dynamicProps;for(let W=0;W<V.length;W++){const ae=V[W],ke=C[ae],Ct=N[ae];(Ct!==ke||ae==="value")&&i(y,ae,ke,Ct,g,f.children,p,v,Ue)}}k&1&&f.children!==d.children&&u(y,d.children)}else!A&&b==null&&we(y,d,C,N,p,v,g);((R=N.onVnodeUpdated)||T)&&he(()=>{R&&Me(R,p,d,f),T&&ft(d,f,p,"updated")},v)},se=(f,d,p,v,g,x,A)=>{for(let y=0;y<d.length;y++){const k=f[y],b=d[y],T=k.el&&(k.type===Fe||!Wt(k,b)||k.shapeFlag&70)?m(k.el):p;I(k,b,T,null,v,g,x,A,!0)}},we=(f,d,p,v,g,x,A)=>{if(p!==v){if(p!==q)for(const y in p)!Ln(y)&&!(y in v)&&i(f,y,p[y],null,A,d.children,g,x,Ue);for(const y in v){if(Ln(y))continue;const k=v[y],b=p[y];k!==b&&y!=="value"&&i(f,y,b,k,A,d.children,g,x,Ue)}"value"in v&&i(f,"value",p.value,v.value)}},Ot=(f,d,p,v,g,x,A,y,k)=>{const b=d.el=f?f.el:s(""),T=d.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:N,slotScopeIds:R}=d;R&&(y=y?y.concat(R):R),f==null?(r(b,p,v),r(T,p,v),z(d.children,p,T,g,x,A,y,k)):C>0&&C&64&&N&&f.dynamicChildren?(se(f.dynamicChildren,N,p,g,x,A,y),(d.key!=null||g&&d===g.subTree)&&Do(f,d,!0)):K(f,d,p,T,g,x,A,y,k)},Et=(f,d,p,v,g,x,A,y,k)=>{d.slotScopeIds=y,f==null?d.shapeFlag&512?g.ctx.activate(d,p,v,A,k):ze(d,p,v,g,x,A,k):ce(f,d,k)},ze=(f,d,p,v,g,x,A)=>{const y=f.component=If(f,v,g);if(Eo(f)&&(y.ctx.renderer=Pt),Nf(y),y.asyncDep){if(g&&g.registerDep(y,ue),!f.el){const k=y.subTree=fe(_t);_(null,k,d,p)}return}ue(y,f,d,p,g,x,A)},ce=(f,d,p)=>{const v=d.component=f.component;if(jl(f,d,p))if(v.asyncDep&&!v.asyncResolved){Q(v,d,p);return}else v.next=d,Sl(v.update),v.update();else d.el=f.el,v.vnode=d},ue=(f,d,p,v,g,x,A)=>{const y=()=>{if(f.isMounted){let{next:T,bu:C,u:N,parent:R,vnode:U}=f,V=T,W;ct(f,!1),T?(T.el=U.el,Q(f,T,A)):T=U,C&&Dn(C),(W=T.props&&T.props.onVnodeBeforeUpdate)&&Me(W,R,T,U),ct(f,!0);const ae=wr(f),ke=f.subTree;f.subTree=ae,I(ke,ae,m(ke.el),_n(ke),f,g,x),T.el=ae.el,V===null&&Ll(f,ae.el),N&&he(N,g),(W=T.props&&T.props.onVnodeUpdated)&&he(()=>Me(W,R,T,U),g)}else{let T;const{el:C,props:N}=d,{bm:R,m:U,parent:V}=f,W=$n(d);if(ct(f,!1),R&&Dn(R),!W&&(T=N&&N.onVnodeBeforeMount)&&Me(T,V,d),ct(f,!0),C&&xr){const ae=()=>{f.subTree=wr(f),xr(C,f.subTree,f,g,null)};W?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ae()):ae()}else{const ae=f.subTree=wr(f);I(null,ae,p,v,f,g,x),d.el=ae.el}if(U&&he(U,g),!W&&(T=N&&N.onVnodeMounted)){const ae=d;he(()=>Me(T,V,ae),g)}(d.shapeFlag&256||V&&$n(V.vnode)&&V.vnode.shapeFlag&256)&&f.a&&he(f.a,g),f.isMounted=!0,d=p=v=null}},k=f.effect=new da(y,()=>xa(b),f.scope),b=f.update=()=>k.run();b.id=f.uid,ct(f,!0),b()},Q=(f,d,p)=>{d.component=f;const v=f.vnode.props;f.vnode=d,f.next=null,df(f,d.props,v,p),hf(f,d.children,p),Ut(),Qa(),Ht()},K=(f,d,p,v,g,x,A,y,k=!1)=>{const b=f&&f.children,T=f?f.shapeFlag:0,C=d.children,{patchFlag:N,shapeFlag:R}=d;if(N>0){if(N&128){xn(b,C,p,v,g,x,A,y,k);return}else if(N&256){st(b,C,p,v,g,x,A,y,k);return}}R&8?(T&16&&Ue(b,g,x),C!==b&&u(p,C)):T&16?R&16?xn(b,C,p,v,g,x,A,y,k):Ue(b,g,x,!0):(T&8&&u(p,""),R&16&&z(C,p,v,g,x,A,y,k))},st=(f,d,p,v,g,x,A,y,k)=>{f=f||Nt,d=d||Nt;const b=f.length,T=d.length,C=Math.min(b,T);let N;for(N=0;N<C;N++){const R=d[N]=k?Ze(d[N]):Re(d[N]);I(f[N],R,p,null,g,x,A,y,k)}b>T?Ue(f,g,x,!0,!1,C):z(d,p,v,g,x,A,y,k,C)},xn=(f,d,p,v,g,x,A,y,k)=>{let b=0;const T=d.length;let C=f.length-1,N=T-1;for(;b<=C&&b<=N;){const R=f[b],U=d[b]=k?Ze(d[b]):Re(d[b]);if(Wt(R,U))I(R,U,p,null,g,x,A,y,k);else break;b++}for(;b<=C&&b<=N;){const R=f[C],U=d[N]=k?Ze(d[N]):Re(d[N]);if(Wt(R,U))I(R,U,p,null,g,x,A,y,k);else break;C--,N--}if(b>C){if(b<=N){const R=N+1,U=R<T?d[R].el:v;for(;b<=N;)I(null,d[b]=k?Ze(d[b]):Re(d[b]),p,U,g,x,A,y,k),b++}}else if(b>N)for(;b<=C;)Te(f[b],g,x,!0),b++;else{const R=b,U=b,V=new Map;for(b=U;b<=N;b++){const ve=d[b]=k?Ze(d[b]):Re(d[b]);ve.key!=null&&V.set(ve.key,b)}let W,ae=0;const ke=N-U+1;let Ct=!1,Ua=0;const Yt=new Array(ke);for(b=0;b<ke;b++)Yt[b]=0;for(b=R;b<=C;b++){const ve=f[b];if(ae>=ke){Te(ve,g,x,!0);continue}let Ne;if(ve.key!=null)Ne=V.get(ve.key);else for(W=U;W<=N;W++)if(Yt[W-U]===0&&Wt(ve,d[W])){Ne=W;break}Ne===void 0?Te(ve,g,x,!0):(Yt[Ne-U]=b+1,Ne>=Ua?Ua=Ne:Ct=!0,I(ve,d[Ne],p,null,g,x,A,y,k),ae++)}const Ha=Ct?xf(Yt):Nt;for(W=Ha.length-1,b=ke-1;b>=0;b--){const ve=U+b,Ne=d[ve],Ba=ve+1<T?d[ve+1].el:v;Yt[b]===0?I(null,Ne,p,Ba,g,x,A,y,k):Ct&&(W<0||b!==Ha[W]?lt(Ne,p,Ba,2):W--)}}},lt=(f,d,p,v,g=null)=>{const{el:x,type:A,transition:y,children:k,shapeFlag:b}=f;if(b&6){lt(f.component.subTree,d,p,v);return}if(b&128){f.suspense.move(d,p,v);return}if(b&64){A.move(f,d,p,Pt);return}if(A===Fe){r(x,d,p);for(let C=0;C<k.length;C++)lt(k[C],d,p,v);r(f.anchor,d,p);return}if(A===Ar){E(f,d,p);return}if(v!==2&&b&1&&y)if(v===0)y.beforeEnter(x),r(x,d,p),he(()=>y.enter(x),g);else{const{leave:C,delayLeave:N,afterLeave:R}=y,U=()=>r(x,d,p),V=()=>{C(x,()=>{U(),R&&R()})};N?N(x,U,V):V()}else r(x,d,p)},Te=(f,d,p,v=!1,g=!1)=>{const{type:x,props:A,ref:y,children:k,dynamicChildren:b,shapeFlag:T,patchFlag:C,dirs:N}=f;if(y!=null&&zr(y,null,p,f,!0),T&256){d.ctx.deactivate(f);return}const R=T&1&&N,U=!$n(f);let V;if(U&&(V=A&&A.onVnodeBeforeUnmount)&&Me(V,d,f),T&6)Es(f.component,p,v);else{if(T&128){f.suspense.unmount(p,v);return}R&&ft(f,null,d,"beforeUnmount"),T&64?f.type.remove(f,d,p,g,Pt,v):b&&(x!==Fe||C>0&&C&64)?Ue(b,d,p,!1,!0):(x===Fe&&C&384||!g&&T&16)&&Ue(k,d,p),v&&$a(f)}(U&&(V=A&&A.onVnodeUnmounted)||R)&&he(()=>{V&&Me(V,d,f),R&&ft(f,null,d,"unmounted")},p)},$a=f=>{const{type:d,el:p,anchor:v,transition:g}=f;if(d===Fe){Os(p,v);return}if(d===Ar){j(f);return}const x=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:A,delayLeave:y}=g,k=()=>A(p,x);y?y(f.el,x,k):k()}else x()},Os=(f,d)=>{let p;for(;f!==d;)p=h(f),a(f),f=p;a(d)},Es=(f,d,p)=>{const{bum:v,scope:g,update:x,subTree:A,um:y}=f;v&&Dn(v),g.stop(),x&&(x.active=!1,Te(A,f,d,p)),y&&he(y,d),he(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ue=(f,d,p,v=!1,g=!1,x=0)=>{for(let A=x;A<f.length;A++)Te(f[A],d,p,v,g)},_n=f=>f.shapeFlag&6?_n(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),za=(f,d,p)=>{f==null?d._vnode&&Te(d._vnode,null,null,!0):I(d._vnode||null,f,d,null,null,null,p),Qa(),_o(),d._vnode=f},Pt={p:I,um:Te,m:lt,r:$a,mt:ze,mc:z,pc:K,pbc:se,n:_n,o:e};let yr,xr;return t&&([yr,xr]=t(Pt)),{render:za,hydrate:yr,createApp:vf(za,yr)}}function ct({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Do(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ze(a[i]),s.el=o.el),n||Do(o,s)),s.type===cr&&(s.el=o.el)}}function xf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const _f=e=>e.__isTeleport,Fe=Symbol(void 0),cr=Symbol(void 0),_t=Symbol(void 0),Ar=Symbol(void 0),Zt=[];let Ee=null;function Pe(e=!1){Zt.push(Ee=e?null:[])}function wf(){Zt.pop(),Ee=Zt[Zt.length-1]||null}let fn=1;function fi(e){fn+=e}function $o(e){return e.dynamicChildren=fn>0?Ee||Nt:null,wf(),fn>0&&Ee&&Ee.push(e),e}function yt(e,t,n,r,a,i){return $o(Le(e,t,n,r,a,i,!0))}function zn(e,t,n,r,a){return $o(fe(e,t,n,r,a,!0))}function Ur(e){return e?e.__v_isVNode===!0:!1}function Wt(e,t){return e.type===t.type&&e.key===t.key}const ur="__vInternal",zo=({key:e})=>e??null,Un=({ref:e,ref_key:t,ref_for:n})=>e!=null?oe(e)||ne(e)||L(e)?{i:xe,r:e,k:t,f:!!n}:e:null;function Le(e,t=null,n=null,r=0,a=null,i=e===Fe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&zo(t),ref:t&&Un(t),scopeId:Ao,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:xe};return s?(Aa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=oe(n)?8:16),fn>0&&!o&&Ee&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ee.push(l),l}const fe=kf;function kf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===tf)&&(e=_t),Ur(e)){const s=Lt(e,t,!0);return n&&Aa(s,n),fn>0&&!i&&Ee&&(s.shapeFlag&6?Ee[Ee.indexOf(e)]=s:Ee.push(s)),s.patchFlag|=-2,s}if(Lf(e)&&(e=e.__vccOpts),t){t=Af(t);let{class:s,style:l}=t;s&&!oe(s)&&(t.class=oa(s)),G(l)&&(mo(l)&&!F(l)&&(l=me({},l)),t.style=ia(l))}const o=oe(e)?1:Dl(e)?128:_f(e)?64:G(e)?4:L(e)?2:0;return Le(e,t,n,r,a,o,i,!0)}function Af(e){return e?mo(e)||ur in e?me({},e):e:null}function Lt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Pf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&zo(s),ref:t&&t.ref?n&&a?F(a)?a.concat(Un(t)):[a,Un(t)]:Un(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Fe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Lt(e.ssContent),ssFallback:e.ssFallback&&Lt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Of(e=" ",t=0){return fe(cr,null,e,t)}function Ef(e="",t=!1){return t?(Pe(),zn(_t,null,e)):fe(_t,null,e)}function Re(e){return e==null||typeof e=="boolean"?fe(_t):F(e)?fe(Fe,null,e.slice()):typeof e=="object"?Ze(e):fe(cr,null,String(e))}function Ze(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Lt(e)}function Aa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Aa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(ur in t)?t._ctx=xe:a===3&&xe&&(xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:xe},n=32):(t=String(t),r&64?(n=16,t=[Of(t)]):n=8);e.children=t,e.shapeFlag|=n}function Pf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=oa([t.class,r.class]));else if(a==="style")t.style=ia([t.style,r.style]);else if(nr(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Me(e,t,n,r=null){Ie(e,t,7,[n,r])}const Cf=Lo();let Sf=0;function If(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Cf,i={uid:Sf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mo(r,a),emitsOptions:ko(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Nl.bind(null,i),e.ce&&e.ce(i),i}let te=null;const Tf=()=>te||xe,Dt=e=>{te=e,e.scope.on()},xt=()=>{te&&te.scope.off(),te=null};function Uo(e){return e.vnode.shapeFlag&4}let cn=!1;function Nf(e,t=!1){cn=t;const{props:n,children:r}=e.vnode,a=Uo(e);uf(e,n,a,t),pf(e,r);const i=a?Mf(e,t):void 0;return cn=!1,i}function Mf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=jt(new Proxy(e.ctx,af));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Rf(e):null;Dt(e),Ut();const i=tt(r,e,0,[e.props,a]);if(Ht(),xt(),Gi(i)){if(i.then(xt,xt),t)return i.then(o=>{ci(e,o,t)}).catch(o=>{sr(o,e,0)});e.asyncDep=i}else ci(e,i,t)}else Ho(e,t)}function ci(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=go(t)),Ho(e,n)}let ui;function Ho(e,t,n){const r=e.type;if(!e.render){if(!t&&ui&&!r.render){const a=r.template||wa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=me(me({isCustomElement:i,delimiters:s},o),l);r.render=ui(a,c)}}e.render=r.render||Se}Dt(e),Ut(),of(e),Ht(),xt()}function Ff(e){return new Proxy(e.attrs,{get(t,n){return ge(e,"get","$attrs"),t[n]}})}function Rf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Ff(e))},slots:e.slots,emit:e.emit,expose:t}}function dr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(go(jt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Gt)return Gt[n](e)},has(t,n){return n in t||n in Gt}}))}function jf(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function Lf(e){return L(e)&&"__vccOpts"in e}const ye=(e,t)=>El(e,t,cn);function Bo(e,t,n){const r=arguments.length;return r===2?G(t)&&!F(t)?Ur(t)?fe(e,null,[t]):fe(e,t):fe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ur(n)&&(n=[n]),fe(e,t,n))}const Df=Symbol(""),$f=()=>Xt(Df),zf="3.2.47",Uf="http://www.w3.org/2000/svg",mt=typeof document<"u"?document:null,di=mt&&mt.createElement("template"),Hf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?mt.createElementNS(Uf,e):mt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>mt.createTextNode(e),createComment:e=>mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{di.innerHTML=r?`<svg>${e}</svg>`:e;const s=di.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Bf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Yf(e,t,n){const r=e.style,a=oe(n);if(n&&!a){if(t&&!oe(t))for(const i in t)n[i]==null&&Hr(r,i,"");for(const i in n)Hr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const mi=/\s*!important$/;function Hr(e,t,n){if(F(n))n.forEach(r=>Hr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Wf(e,t);mi.test(n)?e.setProperty(zt(r),n.replace(mi,""),"important"):e[r]=n}}const pi=["Webkit","Moz","ms"],Or={};function Wf(e,t){const n=Or[t];if(n)return n;let r=$e(t);if(r!=="filter"&&r in e)return Or[t]=r;r=ar(r);for(let a=0;a<pi.length;a++){const i=pi[a]+r;if(i in e)return Or[t]=i}return t}const hi="http://www.w3.org/1999/xlink";function Kf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(hi,t.slice(6,t.length)):e.setAttributeNS(hi,t,n);else{const i=Ns(t);n==null||i&&!Xi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Vf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Xi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function pt(e,t,n,r){e.addEventListener(t,n,r)}function qf(e,t,n,r){e.removeEventListener(t,n,r)}function Xf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Jf(t);if(r){const c=i[t]=Qf(r,a);pt(e,s,c,l)}else o&&(qf(e,s,o,l),i[t]=void 0)}}const gi=/(?:Once|Passive|Capture)$/;function Jf(e){let t;if(gi.test(e)){t={};let r;for(;r=e.match(gi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):zt(e.slice(2)),t]}let Er=0;const Gf=Promise.resolve(),Zf=()=>Er||(Gf.then(()=>Er=0),Er=Date.now());function Qf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ie(ec(r,n.value),t,5,[r])};return n.value=e,n.attached=Zf(),n}function ec(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const vi=/^on[a-z]/,tc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Bf(e,r,a):t==="style"?Yf(e,n,r):nr(t)?sa(t)||Xf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):nc(e,t,r,a))?Vf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Kf(e,t,r,a))};function nc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&vi.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||vi.test(t)&&oe(n)?!1:t in e}const Xn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return F(t)?n=>Dn(t,n):t};function rc(e){e.target.composing=!0}function bi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ac={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=Xn(a);const i=r||a.props&&a.props.type==="number";pt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Tr(s)),e._assign(s)}),n&&pt(e,"change",()=>{e.value=e.value.trim()}),t||(pt(e,"compositionstart",rc),pt(e,"compositionend",bi),pt(e,"change",bi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=Xn(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Tr(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},ic={deep:!0,created(e,t,n){e._assign=Xn(n),pt(e,"change",()=>{const r=e._modelValue,a=oc(e),i=e.checked,o=e._assign;if(F(r)){const s=Ji(r,a),l=s!==-1;if(i&&!l)o(r.concat(a));else if(!i&&l){const c=[...r];c.splice(s,1),o(c)}}else if(fa(r)){const s=new Set(r);i?s.add(a):s.delete(a),o(s)}else o(Yo(e,i))})},mounted:yi,beforeUpdate(e,t,n){e._assign=Xn(n),yi(e,t,n)}};function yi(e,{value:t,oldValue:n},r){e._modelValue=t,F(t)?e.checked=Ji(t,r.props.value)>-1:fa(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=tr(t,Yo(e,!0)))}function oc(e){return"_value"in e?e._value:e.value}function Yo(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const sc=me({patchProp:tc},Hf);let xi;function lc(){return xi||(xi=bf(sc))}const fc=(...e)=>{const t=lc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=cc(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function cc(e){return oe(e)?document.querySelector(e):e}var uc=!1;/*!
  * pinia v2.0.34
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Wo;const mr=e=>Wo=e,Ko=Symbol();function Br(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Qt;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Qt||(Qt={}));function dc(){const e=Qi(!0),t=e.run(()=>ba({}));let n=[],r=[];const a=jt({install(i){mr(a),a._a=i,i.provide(Ko,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!uc?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}const Vo=()=>{};function _i(e,t,n,r=Vo){e.push(t);const a=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&eo()&&Ys(a),a}function St(e,...t){e.slice().forEach(n=>{n(...t)})}function Yr(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],a=e[n];Br(a)&&Br(r)&&e.hasOwnProperty(n)&&!ne(r)&&!et(r)?e[n]=Yr(a,r):e[n]=r}return e}const mc=Symbol();function pc(e){return!Br(e)||!e.hasOwnProperty(mc)}const{assign:Ge}=Object;function hc(e){return!!(ne(e)&&e.effect)}function gc(e,t,n,r){const{state:a,actions:i,getters:o}=t,s=n.state.value[e];let l;function c(){s||(n.state.value[e]=a?a():{});const u=wl(n.state.value[e]);return Ge(u,i,Object.keys(o||{}).reduce((m,h)=>(m[h]=jt(ye(()=>{mr(n);const w=n._s.get(e);return o[h].call(w,w)})),m),{}))}return l=qo(e,c,t,n,r,!0),l}function qo(e,t,n={},r,a,i){let o;const s=Ge({actions:{}},n),l={deep:!0};let c,u,m=jt([]),h=jt([]),w;const M=r.state.value[e];!i&&!M&&(r.state.value[e]={}),ba({});let I;function H($){let z;c=u=!1,typeof $=="function"?($(r.state.value[e]),z={type:Qt.patchFunction,storeId:e,events:w}):(Yr(r.state.value[e],$),z={type:Qt.patchObject,payload:$,storeId:e,events:w});const Z=I=Symbol();yo().then(()=>{I===Z&&(c=!0)}),u=!0,St(m,z,r.state.value[e])}const _=i?function(){const{state:z}=n,Z=z?z():{};this.$patch(se=>{Ge(se,Z)})}:Vo;function P(){o.stop(),m=[],h=[],r._s.delete(e)}function E($,z){return function(){mr(r);const Z=Array.from(arguments),se=[],we=[];function Ot(ce){se.push(ce)}function Et(ce){we.push(ce)}St(h,{args:Z,name:$,store:D,after:Ot,onError:Et});let ze;try{ze=z.apply(this&&this.$id===e?this:D,Z)}catch(ce){throw St(we,ce),ce}return ze instanceof Promise?ze.then(ce=>(St(se,ce),ce)).catch(ce=>(St(we,ce),Promise.reject(ce))):(St(se,ze),ze)}}const j={_p:r,$id:e,$onAction:_i.bind(null,h),$patch:H,$reset:_,$subscribe($,z={}){const Z=_i(m,$,z.detached,()=>se()),se=o.run(()=>Jt(()=>r.state.value[e],we=>{(z.flush==="sync"?u:c)&&$({storeId:e,type:Qt.direct,events:w},we)},Ge({},l,z)));return Z},$dispose:P},D=or(j);r._s.set(e,D);const re=r._e.run(()=>(o=Qi(),o.run(()=>t())));for(const $ in re){const z=re[$];if(ne(z)&&!hc(z)||et(z))i||(M&&pc(z)&&(ne(z)?z.value=M[$]:Yr(z,M[$])),r.state.value[e][$]=z);else if(typeof z=="function"){const Z=E($,z);re[$]=Z,s.actions[$]=z}}return Ge(D,re),Ge(Y(D),re),Object.defineProperty(D,"$state",{get:()=>r.state.value[e],set:$=>{H(z=>{Ge(z,$)})}}),r._p.forEach($=>{Ge(D,o.run(()=>$({store:D,app:r._a,pinia:r,options:s})))}),M&&i&&n.hydrate&&n.hydrate(D.$state,M),c=!0,u=!0,D}function vc(e,t,n){let r,a;const i=typeof t=="function";typeof e=="string"?(r=e,a=i?n:t):(a=e,r=e.id);function o(s,l){const c=Tf();return s=s||c&&Xt(Ko,null),s&&mr(s),s=Wo,s._s.has(r)||(i?qo(r,t,a,s):gc(r,a,s)),s._s.get(r)}return o.$id=r,o}const pr=vc("tasks",()=>{const e=ba(JSON.parse(localStorage.getItem("tasks")||"[]"));Ul(()=>{localStorage.setItem("tasks",JSON.stringify(e.value))});function t(){e.value.push({id:crypto.randomUUID(),title:`New Task ${e.value.length+1}`,completed:!1})}function n(a){e.value=e.value.filter(i=>i.id!==a)}function r(){e.value=e.value.filter(a=>!a.completed)}return{tasks:e,addNewTask:t,removeAnTask:n,removeAllCompletedTasks:r}}),bc={class:"flex w-full justify-between items-center"},yc=Le("h1",{class:"font-Roboto font-bold text-2xl text-slate-300"},"Todo List",-1),xc=At({__name:"TheHeader",setup(e){const{addNewTask:t}=pr();return(n,r)=>{const a=Io("font-awesome-icon");return Pe(),yt("div",bc,[yc,Le("button",{onClick:r[0]||(r[0]=(...i)=>rt(t)&&rt(t)(...i)),class:"border-solid border-2 px-1.5 rounded-full transition-all hover:bg-emerald-500 hover:bg-opacity-80"},[fe(a,{icon:"fa-solid fa-plus",class:"text-slate-300"})])])}}}),_c={class:"flex w-full flex-col gap-2"},wc=["onUpdate:modelValue"],kc={class:"flex gap-2 items-center"},Ac=["onUpdate:modelValue"],Oc=["onClick"],Ec=At({__name:"Tasks",setup(e){const t=pr();return(n,r)=>{const a=Io("font-awesome-icon");return Pe(),yt("div",_c,[(Pe(!0),yt(Fe,null,rf(rt(t).tasks,i=>(Pe(),yt("div",{class:"w-full px-4 py-2 flex gap-6 justify-between items-center bg-slate-950 rounded-sm cursor-pointer",key:i.id},[ti(Le("input",{type:"text","onUpdate:modelValue":o=>i.title=o,class:"flex-1 outline-none border-none bg-transparent focus:text-emerald-400 text-slate-300 font-Roboto font-bold transition-colors"},null,8,wc),[[ac,i.title]]),Le("div",kc,[ti(Le("input",{type:"checkbox","onUpdate:modelValue":o=>i.completed=o},null,8,Ac),[[ic,i.completed]]),Le("button",{onClick:()=>rt(t).removeAnTask(i.id)},[fe(a,{icon:"fa-solid fa-trash",class:"text-slate-300 hover:text-red-500 transition-colors"})],8,Oc)])]))),128))])}}}),Pc=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Cc={},Sc={class:"w-full flex justify-center"},Ic=Le("span",{class:"text-red-500 font-Roboto font-bold text-xl text-center"},"Nenhuma tarefa foi encontrada!",-1),Tc=[Ic];function Nc(e,t){return Pe(),yt("div",Sc,Tc)}const Mc=Pc(Cc,[["render",Nc]]),Fc=At({__name:"RemoveCompletedTasks",setup(e){const t=pr();return(n,r)=>(Pe(),yt("button",{onClick:r[0]||(r[0]=()=>rt(t).removeAllCompletedTasks()),class:"w-full h-12 font-Roboto font-bold text-xl shadow-md text-slate-950 rounded-sm bg-emerald-500"}," Remove Completed Tasks "))}}),Rc={class:"bg-slate-900 w-screen min-h-screen flex items-center justify-center"},jc={class:"flex flex-col gap-3 justify-center align-top bg-slate-800 w-96 rounded shadow-md px-5 py-3 m-9"},Lc=At({__name:"App",setup(e){const t=pr();return(n,r)=>(Pe(),yt("main",Rc,[Le("section",jc,[fe(xc),rt(t).tasks.length?(Pe(),zn(Ec,{key:0})):(Pe(),zn(Mc,{key:1})),rt(t).tasks.length?(Pe(),zn(Fc,{key:2})):Ef("",!0)])]))}});function wi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wi(Object(n),!0).forEach(function(r){ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Jn(e){return Jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Jn(e)}function Dc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ki(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $c(e,t,n){return t&&ki(e.prototype,t),n&&ki(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Oa(e,t){return Uc(e)||Bc(e,t)||Xo(e,t)||Wc()}function vn(e){return zc(e)||Hc(e)||Xo(e)||Yc()}function zc(e){if(Array.isArray(e))return Wr(e)}function Uc(e){if(Array.isArray(e))return e}function Hc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Bc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Xo(e,t){if(e){if(typeof e=="string")return Wr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wr(e,t)}}function Wr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Yc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ai=function(){},Ea={},Jo={},Go=null,Zo={mark:Ai,measure:Ai};try{typeof window<"u"&&(Ea=window),typeof document<"u"&&(Jo=document),typeof MutationObserver<"u"&&(Go=MutationObserver),typeof performance<"u"&&(Zo=performance)}catch{}var Kc=Ea.navigator||{},Oi=Kc.userAgent,Ei=Oi===void 0?"":Oi,at=Ea,J=Jo,Pi=Go,Cn=Zo;at.document;var qe=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",Qo=~Ei.indexOf("MSIE")||~Ei.indexOf("Trident/"),Sn,In,Tn,Nn,Mn,Ye="___FONT_AWESOME___",Kr=16,es="fa",ts="svg-inline--fa",wt="data-fa-i2svg",Vr="data-fa-pseudo-element",Vc="data-fa-pseudo-element-pending",Pa="data-prefix",Ca="data-icon",Ci="fontawesome-i2svg",qc="async",Xc=["HTML","HEAD","STYLE","SCRIPT"],ns=function(){try{return!0}catch{return!1}}(),X="classic",ee="sharp",Sa=[X,ee];function bn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var un=bn((Sn={},ie(Sn,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ie(Sn,ee,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Sn)),dn=bn((In={},ie(In,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ie(In,ee,{solid:"fass",regular:"fasr",light:"fasl"}),In)),mn=bn((Tn={},ie(Tn,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ie(Tn,ee,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Tn)),Jc=bn((Nn={},ie(Nn,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ie(Nn,ee,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Nn)),Gc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,rs="fa-layers-text",Zc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Qc=bn((Mn={},ie(Mn,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ie(Mn,ee,{900:"fass",400:"fasr",300:"fasl"}),Mn)),as=[1,2,3,4,5,6,7,8,9,10],eu=as.concat([11,12,13,14,15,16,17,18,19,20]),tu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},pn=new Set;Object.keys(dn[X]).map(pn.add.bind(pn));Object.keys(dn[ee]).map(pn.add.bind(pn));var nu=[].concat(Sa,vn(pn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",gt.GROUP,gt.SWAP_OPACITY,gt.PRIMARY,gt.SECONDARY]).concat(as.map(function(e){return"".concat(e,"x")})).concat(eu.map(function(e){return"w-".concat(e)})),en=at.FontAwesomeConfig||{};function ru(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function au(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var iu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];iu.forEach(function(e){var t=Oa(e,2),n=t[0],r=t[1],a=au(ru(n));a!=null&&(en[r]=a)})}var is={styleDefault:"solid",familyDefault:"classic",cssPrefix:es,replacementClass:ts,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};en.familyPrefix&&(en.cssPrefix=en.familyPrefix);var $t=O(O({},is),en);$t.autoReplaceSvg||($t.observeMutations=!1);var S={};Object.keys(is).forEach(function(e){Object.defineProperty(S,e,{enumerable:!0,set:function(n){$t[e]=n,tn.forEach(function(r){return r(S)})},get:function(){return $t[e]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(t){$t.cssPrefix=t,tn.forEach(function(n){return n(S)})},get:function(){return $t.cssPrefix}});at.FontAwesomeConfig=S;var tn=[];function ou(e){return tn.push(e),function(){tn.splice(tn.indexOf(e),1)}}var Je=Kr,De={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function su(e){if(!(!e||!qe)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var lu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function hn(){for(var e=12,t="";e-- >0;)t+=lu[Math.random()*62|0];return t}function Bt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ia(e){return e.classList?Bt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function os(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(os(e[n]),'" ')},"").trim()}function hr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ta(e){return e.size!==De.size||e.x!==De.x||e.y!==De.y||e.rotate!==De.rotate||e.flipX||e.flipY}function cu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function uu(e){var t=e.transform,n=e.width,r=n===void 0?Kr:n,a=e.height,i=a===void 0?Kr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Qo?l+="translate(".concat(t.x/Je-r/2,"em, ").concat(t.y/Je-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Je,"em), calc(-50% + ").concat(t.y/Je,"em)) "):l+="translate(".concat(t.x/Je,"em, ").concat(t.y/Je,"em) "),l+="scale(".concat(t.size/Je*(t.flipX?-1:1),", ").concat(t.size/Je*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var du=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ss(){var e=es,t=ts,n=S.cssPrefix,r=S.replacementClass,a=du;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Si=!1;function Pr(){S.autoAddCss&&!Si&&(su(ss()),Si=!0)}var mu={mixout:function(){return{dom:{css:ss,insertCss:Pr}}},hooks:function(){return{beforeDOMElementCreation:function(){Pr()},beforeI2svg:function(){Pr()}}}},We=at||{};We[Ye]||(We[Ye]={});We[Ye].styles||(We[Ye].styles={});We[Ye].hooks||(We[Ye].hooks={});We[Ye].shims||(We[Ye].shims=[]);var Ce=We[Ye],ls=[],pu=function e(){J.removeEventListener("DOMContentLoaded",e),Gn=1,ls.map(function(t){return t()})},Gn=!1;qe&&(Gn=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),Gn||J.addEventListener("DOMContentLoaded",pu));function hu(e){qe&&(Gn?setTimeout(e,0):ls.push(e))}function yn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?os(e):"<".concat(t," ").concat(fu(r),">").concat(i.map(yn).join(""),"</").concat(t,">")}function Ii(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var gu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Cr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?gu(n,a):n,l,c,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=s(u,t[c],c,t);return u};function vu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function qr(e){var t=vu(e);return t.length===1?t[0].toString(16):null}function bu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ti(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Xr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ti(t);typeof Ce.hooks.addPack=="function"&&!a?Ce.hooks.addPack(e,Ti(t)):Ce.styles[e]=O(O({},Ce.styles[e]||{}),i),e==="fas"&&Xr("fa",t)}var Fn,Rn,jn,It=Ce.styles,yu=Ce.shims,xu=(Fn={},ie(Fn,X,Object.values(mn[X])),ie(Fn,ee,Object.values(mn[ee])),Fn),Na=null,fs={},cs={},us={},ds={},ms={},_u=(Rn={},ie(Rn,X,Object.keys(un[X])),ie(Rn,ee,Object.keys(un[ee])),Rn);function wu(e){return~nu.indexOf(e)}function ku(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!wu(a)?a:null}var ps=function(){var t=function(i){return Cr(It,function(o,s,l){return o[l]=Cr(s,i,{}),o},{})};fs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),cs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),ms=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in It||S.autoFetchSvg,r=Cr(yu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});us=r.names,ds=r.unicodes,Na=gr(S.styleDefault,{family:S.familyDefault})};ou(function(e){Na=gr(e.styleDefault,{family:S.familyDefault})});ps();function Ma(e,t){return(fs[e]||{})[t]}function Au(e,t){return(cs[e]||{})[t]}function vt(e,t){return(ms[e]||{})[t]}function hs(e){return us[e]||{prefix:null,iconName:null}}function Ou(e){var t=ds[e],n=Ma("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function it(){return Na}var Fa=function(){return{prefix:null,iconName:null,rest:[]}};function gr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,a=un[r][e],i=dn[r][e]||dn[r][a],o=e in Ce.styles?e:null;return i||o||null}var Ni=(jn={},ie(jn,X,Object.keys(mn[X])),ie(jn,ee,Object.keys(mn[ee])),jn);function vr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ie(t,X,"".concat(S.cssPrefix,"-").concat(X)),ie(t,ee,"".concat(S.cssPrefix,"-").concat(ee)),t),o=null,s=X;(e.includes(i[X])||e.some(function(c){return Ni[X].includes(c)}))&&(s=X),(e.includes(i[ee])||e.some(function(c){return Ni[ee].includes(c)}))&&(s=ee);var l=e.reduce(function(c,u){var m=ku(S.cssPrefix,u);if(It[u]?(u=xu[s].includes(u)?Jc[s][u]:u,o=u,c.prefix=u):_u[s].indexOf(u)>-1?(o=u,c.prefix=gr(u,{family:s})):m?c.iconName=m:u!==S.replacementClass&&u!==i[X]&&u!==i[ee]&&c.rest.push(u),!a&&c.prefix&&c.iconName){var h=o==="fa"?hs(c.iconName):{},w=vt(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||w||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!It.far&&It.fas&&!S.autoFetchSvg&&(c.prefix="fas")}return c},Fa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ee&&(It.fass||S.autoFetchSvg)&&(l.prefix="fass",l.iconName=vt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=it()||"fas"),l}var Eu=function(){function e(){Dc(this,e),this.definitions={}}return $c(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Xr(s,o[s]);var l=mn[X][s];l&&Xr(l,o[s]),ps()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Mi=[],Tt={},Ft={},Pu=Object.keys(Ft);function Cu(e,t){var n=t.mixoutsTo;return Mi=e,Tt={},Object.keys(Ft).forEach(function(r){Pu.indexOf(r)===-1&&delete Ft[r]}),Mi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Jn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Tt[o]||(Tt[o]=[]),Tt[o].push(i[o])})}r.provides&&r.provides(Ft)}),n}function Jr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Tt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function kt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Tt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ke(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ft[e]?Ft[e].apply(null,t):void 0}function Gr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||it();if(t)return t=vt(n,t)||t,Ii(gs.definitions,n,t)||Ii(Ce.styles,n,t)}var gs=new Eu,Su=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,kt("noAuto")},Iu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return qe?(kt("beforeI2svg",t),Ke("pseudoElements2svg",t),Ke("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,hu(function(){Nu({autoReplaceSvgRoot:n}),kt("watch",t)})}},Tu={icon:function(t){if(t===null)return null;if(Jn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:vt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=gr(t[0]);return{prefix:r,iconName:vt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(S.cssPrefix,"-"))>-1||t.match(Gc))){var a=vr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||it(),iconName:vt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=it();return{prefix:i,iconName:vt(i,t)||t}}}},_e={noAuto:Su,config:S,dom:Iu,parse:Tu,library:gs,findIconDefinition:Gr,toHtml:yn},Nu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(Ce.styles).length>0||S.autoFetchSvg)&&qe&&S.autoReplaceSvg&&_e.dom.i2svg({node:r})};function br(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return yn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(qe){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Mu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ta(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=hr(O(O({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Fu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(S.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function Ra(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,u=e.titleId,m=e.extra,h=e.watchable,w=h===void 0?!1:h,M=r.found?r:n,I=M.width,H=M.height,_=a==="fak",P=[S.replacementClass,i?"".concat(S.cssPrefix,"-").concat(i):""].filter(function(Z){return m.classes.indexOf(Z)===-1}).filter(function(Z){return Z!==""||!!Z}).concat(m.classes).join(" "),E={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:P,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(H)})},j=_&&!~m.classes.indexOf("fa-fw")?{width:"".concat(I/H*16*.0625,"em")}:{};w&&(E.attributes[wt]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(u||hn())},children:[l]}),delete E.attributes.title);var D=O(O({},E),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},j),m.styles)}),re=r.found&&n.found?Ke("generateAbstractMask",D)||{children:[],attributes:{}}:Ke("generateAbstractIcon",D)||{children:[],attributes:{}},$=re.children,z=re.attributes;return D.children=$,D.attributes=z,s?Fu(D):Mu(D)}function Fi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[wt]="");var u=O({},o.styles);Ta(a)&&(u.transform=uu({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=hr(u);m.length>0&&(c.style=m);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Ru(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=hr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Sr=Ce.styles;function Zr(e){var t=e[0],n=e[1],r=e.slice(4),a=Oa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(gt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(gt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(gt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var ju={found:!1,width:512,height:512};function Lu(e,t){!ns&&!S.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Qr(e,t){var n=t;return t==="fa"&&S.styleDefault!==null&&(t=it()),new Promise(function(r,a){if(Ke("missingIconAbstract"),n==="fa"){var i=hs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Sr[t]&&Sr[t][e]){var o=Sr[t][e];return r(Zr(o))}Lu(e,t),r(O(O({},ju),{},{icon:S.showMissingIcons&&e?Ke("missingIconAbstract")||{}:{}}))})}var Ri=function(){},ea=S.measurePerformance&&Cn&&Cn.mark&&Cn.measure?Cn:{mark:Ri,measure:Ri},Vt='FA "6.4.0"',Du=function(t){return ea.mark("".concat(Vt," ").concat(t," begins")),function(){return vs(t)}},vs=function(t){ea.mark("".concat(Vt," ").concat(t," ends")),ea.measure("".concat(Vt," ").concat(t),"".concat(Vt," ").concat(t," begins"),"".concat(Vt," ").concat(t," ends"))},ja={begin:Du,end:vs},Hn=function(){};function ji(e){var t=e.getAttribute?e.getAttribute(wt):null;return typeof t=="string"}function $u(e){var t=e.getAttribute?e.getAttribute(Pa):null,n=e.getAttribute?e.getAttribute(Ca):null;return t&&n}function zu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(S.replacementClass)}function Uu(){if(S.autoReplaceSvg===!0)return Bn.replace;var e=Bn[S.autoReplaceSvg];return e||Bn.replace}function Hu(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function Bu(e){return J.createElement(e)}function bs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Hu:Bu:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(bs(o,{ceFn:r}))}),a}function Yu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Bn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(bs(a),n)}),n.getAttribute(wt)===null&&S.keepOriginalSource){var r=J.createComment(Yu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ia(n).indexOf(S.replacementClass))return Bn.replace(t);var a=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===S.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return yn(s)}).join(`
`);n.setAttribute(wt,""),n.innerHTML=o}};function Li(e){e()}function ys(e,t){var n=typeof t=="function"?t:Hn;if(e.length===0)n();else{var r=Li;S.mutateApproach===qc&&(r=at.requestAnimationFrame||Li),r(function(){var a=Uu(),i=ja.begin("mutate");e.map(a),i(),n()})}}var La=!1;function xs(){La=!0}function ta(){La=!1}var Zn=null;function Di(e){if(Pi&&S.observeMutations){var t=e.treeCallback,n=t===void 0?Hn:t,r=e.nodeCallback,a=r===void 0?Hn:r,i=e.pseudoElementsCallback,o=i===void 0?Hn:i,s=e.observeMutationsRoot,l=s===void 0?J:s;Zn=new Pi(function(c){if(!La){var u=it();Bt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!ji(m.addedNodes[0])&&(S.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&S.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&ji(m.target)&&~tu.indexOf(m.attributeName))if(m.attributeName==="class"&&$u(m.target)){var h=vr(Ia(m.target)),w=h.prefix,M=h.iconName;m.target.setAttribute(Pa,w||u),M&&m.target.setAttribute(Ca,M)}else zu(m.target)&&a(m.target)})}}),qe&&Zn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Wu(){Zn&&Zn.disconnect()}function Ku(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Vu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=vr(Ia(e));return a.prefix||(a.prefix=it()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Au(a.prefix,e.innerText)||Ma(a.prefix,qr(e.innerText))),!a.iconName&&S.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function qu(e){var t=Bt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return S.autoA11y&&(n?t["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||hn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Xu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:De,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Vu(e),r=n.iconName,a=n.prefix,i=n.rest,o=qu(e),s=Jr("parseNodeAttributes",{},e),l=t.styleParser?Ku(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:De,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ju=Ce.styles;function _s(e){var t=S.autoReplaceSvg==="nest"?$i(e,{styleParser:!1}):$i(e);return~t.extra.classes.indexOf(rs)?Ke("generateLayersText",e,t):Ke("generateSvgReplacementMutation",e,t)}var ot=new Set;Sa.map(function(e){ot.add("fa-".concat(e))});Object.keys(un[X]).map(ot.add.bind(ot));Object.keys(un[ee]).map(ot.add.bind(ot));ot=vn(ot);function zi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!qe)return Promise.resolve();var n=J.documentElement.classList,r=function(m){return n.add("".concat(Ci,"-").concat(m))},a=function(m){return n.remove("".concat(Ci,"-").concat(m))},i=S.autoFetchSvg?ot:Sa.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Ju));i.includes("fa")||i.push("fa");var o=[".".concat(rs,":not([").concat(wt,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(wt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Bt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ja.begin("onTree"),c=s.reduce(function(u,m){try{var h=_s(m);h&&u.push(h)}catch(w){ns||w.name==="MissingIcon"&&console.error(w)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(h){ys(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(h){l(),m(h)})})}function Gu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_s(e).then(function(n){n&&ys([n],t)})}function Zu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Gr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Gr(a||{})),e(r,O(O({},n),{},{mask:a}))}}var Qu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?De:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,m=n.title,h=m===void 0?null:m,w=n.titleId,M=w===void 0?null:w,I=n.classes,H=I===void 0?[]:I,_=n.attributes,P=_===void 0?{}:_,E=n.styles,j=E===void 0?{}:E;if(t){var D=t.prefix,re=t.iconName,$=t.icon;return br(O({type:"icon"},t),function(){return kt("beforeDOMElementCreation",{iconDefinition:t,params:n}),S.autoA11y&&(h?P["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(M||hn()):(P["aria-hidden"]="true",P.focusable="false")),Ra({icons:{main:Zr($),mask:l?Zr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:D,iconName:re,transform:O(O({},De),a),symbol:o,title:h,maskId:u,titleId:M,extra:{attributes:P,styles:j,classes:H}})})}},ed={mixout:function(){return{icon:Zu(Qu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=zi,n.nodeCallback=Gu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,o=i===void 0?function(){}:i;return zi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,h=r.extra;return new Promise(function(w,M){Promise.all([Qr(a,s),u.iconName?Qr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var H=Oa(I,2),_=H[0],P=H[1];w([n,Ra({icons:{main:_,mask:P},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(M)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=hr(s);l.length>0&&(a.style=l);var c;return Ta(o)&&(c=Ke("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},td={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return br({type:"layer"},function(){kt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers")].concat(vn(i)).join(" ")},children:o}]})}}}},nd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return br({type:"counter",content:n},function(){return kt("beforeDOMElementCreation",{content:n,params:r}),Ru({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(S.cssPrefix,"-layers-counter")].concat(vn(s))}})})}}}},rd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?De:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,h=r.styles,w=h===void 0?{}:h;return br({type:"text",content:n},function(){return kt("beforeDOMElementCreation",{content:n,params:r}),Fi({content:n,transform:O(O({},De),i),title:s,extra:{attributes:m,styles:w,classes:["".concat(S.cssPrefix,"-layers-text")].concat(vn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Qo){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return S.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Fi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},ad=new RegExp('"',"ug"),Ui=[1105920,1112319];function id(e){var t=e.replace(ad,""),n=bu(t,0),r=n>=Ui[0]&&n<=Ui[1],a=t.length===2?t[0]===t[1]:!1;return{value:qr(a?t[0]:t),isSecondary:r||a}}function Hi(e,t){var n="".concat(Vc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Bt(e.children),o=i.filter(function($){return $.getAttribute(Vr)===t})[0],s=at.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Zc),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?ee:X,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?dn[h][l[2].toLowerCase()]:Qc[h][c],M=id(m),I=M.value,H=M.isSecondary,_=l[0].startsWith("FontAwesome"),P=Ma(w,I),E=P;if(_){var j=Ou(I);j.iconName&&j.prefix&&(P=j.iconName,w=j.prefix)}if(P&&!H&&(!o||o.getAttribute(Pa)!==w||o.getAttribute(Ca)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);var D=Xu(),re=D.extra;re.attributes[Vr]=t,Qr(P,w).then(function($){var z=Ra(O(O({},D),{},{icons:{main:$,mask:Fa()},prefix:w,iconName:E,extra:re,watchable:!0})),Z=J.createElement("svg");t==="::before"?e.insertBefore(Z,e.firstChild):e.appendChild(Z),Z.outerHTML=z.map(function(se){return yn(se)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function od(e){return Promise.all([Hi(e,"::before"),Hi(e,"::after")])}function sd(e){return e.parentNode!==document.head&&!~Xc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Vr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Bi(e){if(qe)return new Promise(function(t,n){var r=Bt(e.querySelectorAll("*")).filter(sd).map(od),a=ja.begin("searchPseudoElements");xs(),Promise.all(r).then(function(){a(),ta(),t()}).catch(function(){a(),ta(),n()})})}var ld={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Bi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;S.searchPseudoElements&&Bi(a)}}},Yi=!1,fd={mixout:function(){return{dom:{unwatch:function(){xs(),Yi=!0}}}},hooks:function(){return{bootstrap:function(){Di(Jr("mutationObserverCallbacks",{}))},noAuto:function(){Wu()},watch:function(n){var r=n.observeMutationsRoot;Yi?ta():Di(Jr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Wi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},cd={mixout:function(){return{parse:{transform:function(n){return Wi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Wi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:m,path:h};return{tag:"g",attributes:O({},w.outer),children:[{tag:"g",attributes:O({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),w.path)}]}]}}}},Ir={x:0,y:0,width:"100%",height:"100%"};function Ki(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ud(e){return e.tag==="g"?e.children:[e]}var dd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?vr(a.split(" ").map(function(o){return o.trim()})):Fa();return i.prefix||(i.prefix=it()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,u=i.icon,m=o.width,h=o.icon,w=cu({transform:l,containerWidth:m,iconWidth:c}),M={tag:"rect",attributes:O(O({},Ir),{},{fill:"white"})},I=u.children?{children:u.children.map(Ki)}:{},H={tag:"g",attributes:O({},w.inner),children:[Ki(O({tag:u.tag,attributes:O(O({},u.attributes),w.path)},I))]},_={tag:"g",attributes:O({},w.outer),children:[H]},P="mask-".concat(s||hn()),E="clip-".concat(s||hn()),j={tag:"mask",attributes:O(O({},Ir),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,_]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:ud(h)},j]};return r.push(D,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(P,")")},Ir)}),{children:r,attributes:a}}}},md={provides:function(t){var n=!1;at.matchMedia&&(n=at.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},pd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},hd=[mu,ed,td,nd,rd,ld,fd,cd,dd,md,pd];Cu(hd,{mixoutsTo:_e});_e.noAuto;var ws=_e.config,gd=_e.library;_e.dom;var Qn=_e.parse;_e.findIconDefinition;_e.toHtml;var vd=_e.icon;_e.layer;var bd=_e.text;_e.counter;function Vi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vi(Object(n),!0).forEach(function(r){pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function er(e){return er=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},er(e)}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function xd(e,t){if(e==null)return{};var n=yd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function na(e){return _d(e)||wd(e)||kd(e)||Ad()}function _d(e){if(Array.isArray(e))return ra(e)}function wd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kd(e,t){if(e){if(typeof e=="string")return ra(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ra(e,t)}}function ra(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ad(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Od=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ks={exports:{}};(function(e){(function(t){var n=function(_,P,E){if(!c(P)||m(P)||h(P)||w(P)||l(P))return P;var j,D=0,re=0;if(u(P))for(j=[],re=P.length;D<re;D++)j.push(n(_,P[D],E));else{j={};for(var $ in P)Object.prototype.hasOwnProperty.call(P,$)&&(j[_($,E)]=n(_,P[$],E))}return j},r=function(_,P){P=P||{};var E=P.separator||"_",j=P.split||/(?=[A-Z])/;return _.split(j).join(E)},a=function(_){return M(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(P,E){return E?E.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},i=function(_){var P=a(_);return P.substr(0,1).toUpperCase()+P.substr(1)},o=function(_,P){return r(_,P).toLowerCase()},s=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},u=function(_){return s.call(_)=="[object Array]"},m=function(_){return s.call(_)=="[object Date]"},h=function(_){return s.call(_)=="[object RegExp]"},w=function(_){return s.call(_)=="[object Boolean]"},M=function(_){return _=_-0,_===_},I=function(_,P){var E=P&&"process"in P?P.process:P;return typeof E!="function"?_:function(j,D){return E(j,_,D)}},H={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(_,P){return n(I(a,P),_)},decamelizeKeys:function(_,P){return n(I(o,P),_,P)},pascalizeKeys:function(_,P){return n(I(i,P),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=H:t.humps=H})(Od)})(ks);var Ed=ks.exports,Pd=["class","style"];function Cd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Ed.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Sd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Da(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Da(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=Sd(u);break;case"style":l.style=Cd(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=xd(n,Pd);return Bo(e.tag,Oe(Oe(Oe({},t),{},{class:a.class,style:Oe(Oe({},a.style),o)},a.attrs),s),r)}var As=!1;try{As=!0}catch{}function Id(){if(!As&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function nn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?pe({},e,t):{}}function Td(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},pe(t,"fa-".concat(e.size),e.size!==null),pe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),pe(t,"fa-pull-".concat(e.pull),e.pull!==null),pe(t,"fa-swap-opacity",e.swapOpacity),pe(t,"fa-bounce",e.bounce),pe(t,"fa-shake",e.shake),pe(t,"fa-beat",e.beat),pe(t,"fa-fade",e.fade),pe(t,"fa-beat-fade",e.beatFade),pe(t,"fa-flash",e.flash),pe(t,"fa-spin-pulse",e.spinPulse),pe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function qi(e){if(e&&er(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Qn.icon)return Qn.icon(e);if(e===null)return null;if(er(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Nd=At({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ye(function(){return qi(t.icon)}),i=ye(function(){return nn("classes",Td(t))}),o=ye(function(){return nn("transform",typeof t.transform=="string"?Qn.transform(t.transform):t.transform)}),s=ye(function(){return nn("mask",qi(t.mask))}),l=ye(function(){return vd(a.value,Oe(Oe(Oe(Oe({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Jt(l,function(u){if(!u)return Id("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=ye(function(){return l.value?Da(l.value.abstract[0],{},r):null});return function(){return c.value}}});At({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=ws.familyPrefix,i=ye(function(){return["".concat(a,"-layers")].concat(na(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Bo("div",{class:i.value},r.default?r.default():[])}}});At({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=ws.familyPrefix,i=ye(function(){return nn("classes",[].concat(na(t.counter?["".concat(a,"-layers-counter")]:[]),na(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ye(function(){return nn("transform",typeof t.transform=="string"?Qn.transform(t.transform):t.transform)}),s=ye(function(){var c=bd(t.value.toString(),Oe(Oe({},o.value),i.value)),u=c.abstract;return t.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=ye(function(){return Da(s.value,{},r)});return function(){return l.value}}});var Md={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},Fd={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]};gd.add(Fd,Md);fc(Lc).use(dc()).component("font-awesome-icon",Nd).mount("#app");
