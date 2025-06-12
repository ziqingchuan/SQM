(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Bn(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const K={},ft=[],Be=()=>{},Lr=()=>!1,Gt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),In=e=>e.startsWith("onUpdate:"),se=Object.assign,Rn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Hr=Object.prototype.hasOwnProperty,H=(e,t)=>Hr.call(e,t),O=Array.isArray,ut=e=>Xt(e)==="[object Map]",Os=e=>Xt(e)==="[object Set]",B=e=>typeof e=="function",G=e=>typeof e=="string",Xe=e=>typeof e=="symbol",z=e=>e!==null&&typeof e=="object",Bs=e=>(z(e)||B(e))&&B(e.then)&&B(e.catch),Is=Object.prototype.toString,Xt=e=>Is.call(e),$r=e=>Xt(e).slice(8,-1),Rs=e=>Xt(e)==="[object Object]",qn=e=>G(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,yt=Bn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zt=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Vr=/-(\w)/g,ze=Zt(e=>e.replace(Vr,(t,n)=>n?n.toUpperCase():"")),Nr=/\B([A-Z])/g,it=Zt(e=>e.replace(Nr,"-$1").toLowerCase()),qs=Zt(e=>e.charAt(0).toUpperCase()+e.slice(1)),fn=Zt(e=>e?`on${qs(e)}`:""),Ye=(e,t)=>!Object.is(e,t),un=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Fs=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},jr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ss;const en=()=>ss||(ss=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fn(e){if(O(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=G(s)?kr(s):Fn(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(G(e)||z(e))return e}const Ur=/;(?![^(]*\))/g,Wr=/:([^]+)/,Kr=/\/\*[^]*?\*\//g;function kr(e){const t={};return e.replace(Kr,"").split(Ur).forEach(n=>{if(n){const s=n.split(Wr);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function ke(e){let t="";if(G(e))t=e;else if(O(e))for(let n=0;n<e.length;n++){const s=ke(e[n]);s&&(t+=s+" ")}else if(z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Qr="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yr=Bn(Qr);function Ls(e){return!!e||e===""}const Hs=e=>!!(e&&e.__v_isRef===!0),ve=e=>G(e)?e:e==null?"":O(e)||z(e)&&(e.toString===Is||!B(e.toString))?Hs(e)?ve(e.value):JSON.stringify(e,$s,2):String(e),$s=(e,t)=>Hs(t)?$s(e,t.value):ut(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[an(s,i)+" =>"]=r,n),{})}:Os(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>an(n))}:Xe(t)?an(t):z(t)&&!O(t)&&!Rs(t)?String(t):t,an=(e,t="")=>{var n;return Xe(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ae;class zr{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ae,!t&&ae&&(this.index=(ae.scopes||(ae.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ae;try{return ae=this,t()}finally{ae=n}}}on(){++this._on===1&&(this.prevScope=ae,ae=this)}off(){this._on>0&&--this._on===0&&(ae=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Jr(){return ae}let W;const dn=new WeakSet;class Vs{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ae&&ae.active&&ae.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,dn.has(this)&&(dn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||js(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,rs(this),Us(this);const t=W,n=Ce;W=this,Ce=!0;try{return this.fn()}finally{Ws(this),W=t,Ce=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)$n(t);this.deps=this.depsTail=void 0,rs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?dn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Cn(this)&&this.run()}get dirty(){return Cn(this)}}let Ns=0,Ct,xt;function js(e,t=!1){if(e.flags|=8,t){e.next=xt,xt=e;return}e.next=Ct,Ct=e}function Ln(){Ns++}function Hn(){if(--Ns>0)return;if(xt){let t=xt;for(xt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Ct;){let t=Ct;for(Ct=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Us(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ws(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),$n(s),Gr(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function Cn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ks(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ks(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Tt)||(e.globalVersion=Tt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Cn(e))))return;e.flags|=2;const t=e.dep,n=W,s=Ce;W=e,Ce=!0;try{Us(e);const r=e.fn(e._value);(t.version===0||Ye(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{W=n,Ce=s,Ws(e),e.flags&=-3}}function $n(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)$n(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Gr(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ce=!0;const ks=[];function $e(){ks.push(Ce),Ce=!1}function Ve(){const e=ks.pop();Ce=e===void 0?!0:e}function rs(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=W;W=void 0;try{t()}finally{W=n}}}let Tt=0;class Xr{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!W||!Ce||W===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==W)n=this.activeLink=new Xr(W,this),W.deps?(n.prevDep=W.depsTail,W.depsTail.nextDep=n,W.depsTail=n):W.deps=W.depsTail=n,Qs(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=W.depsTail,n.nextDep=void 0,W.depsTail.nextDep=n,W.depsTail=n,W.deps===n&&(W.deps=s)}return n}trigger(t){this.version++,Tt++,this.notify(t)}notify(t){Ln();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Hn()}}}function Qs(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Qs(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const xn=new WeakMap,rt=Symbol(""),An=Symbol(""),Pt=Symbol("");function te(e,t,n){if(Ce&&W){let s=xn.get(e);s||xn.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new Vn),r.map=s,r.key=n),r.track()}}function Le(e,t,n,s,r,i){const o=xn.get(e);if(!o){Tt++;return}const l=u=>{u&&u.trigger()};if(Ln(),t==="clear")o.forEach(l);else{const u=O(e),p=u&&qn(n);if(u&&n==="length"){const a=Number(s);o.forEach((h,C)=>{(C==="length"||C===Pt||!Xe(C)&&C>=a)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),p&&l(o.get(Pt)),t){case"add":u?p&&l(o.get("length")):(l(o.get(rt)),ut(e)&&l(o.get(An)));break;case"delete":u||(l(o.get(rt)),ut(e)&&l(o.get(An)));break;case"set":ut(e)&&l(o.get(rt));break}}Hn()}function ot(e){const t=L(e);return t===e?t:(te(t,"iterate",Pt),we(e)?t:t.map(ee))}function tn(e){return te(e=L(e),"iterate",Pt),e}const Zr={__proto__:null,[Symbol.iterator](){return hn(this,Symbol.iterator,ee)},concat(...e){return ot(this).concat(...e.map(t=>O(t)?ot(t):t))},entries(){return hn(this,"entries",e=>(e[1]=ee(e[1]),e))},every(e,t){return Re(this,"every",e,t,void 0,arguments)},filter(e,t){return Re(this,"filter",e,t,n=>n.map(ee),arguments)},find(e,t){return Re(this,"find",e,t,ee,arguments)},findIndex(e,t){return Re(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Re(this,"findLast",e,t,ee,arguments)},findLastIndex(e,t){return Re(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Re(this,"forEach",e,t,void 0,arguments)},includes(...e){return pn(this,"includes",e)},indexOf(...e){return pn(this,"indexOf",e)},join(e){return ot(this).join(e)},lastIndexOf(...e){return pn(this,"lastIndexOf",e)},map(e,t){return Re(this,"map",e,t,void 0,arguments)},pop(){return bt(this,"pop")},push(...e){return bt(this,"push",e)},reduce(e,...t){return is(this,"reduce",e,t)},reduceRight(e,...t){return is(this,"reduceRight",e,t)},shift(){return bt(this,"shift")},some(e,t){return Re(this,"some",e,t,void 0,arguments)},splice(...e){return bt(this,"splice",e)},toReversed(){return ot(this).toReversed()},toSorted(e){return ot(this).toSorted(e)},toSpliced(...e){return ot(this).toSpliced(...e)},unshift(...e){return bt(this,"unshift",e)},values(){return hn(this,"values",ee)}};function hn(e,t,n){const s=tn(e),r=s[t]();return s!==e&&!we(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const ei=Array.prototype;function Re(e,t,n,s,r,i){const o=tn(e),l=o!==e&&!we(e),u=o[t];if(u!==ei[t]){const h=u.apply(e,i);return l?ee(h):h}let p=n;o!==e&&(l?p=function(h,C){return n.call(this,ee(h),C,e)}:n.length>2&&(p=function(h,C){return n.call(this,h,C,e)}));const a=u.call(o,p,s);return l&&r?r(a):a}function is(e,t,n,s){const r=tn(e);let i=n;return r!==e&&(we(e)?n.length>3&&(i=function(o,l,u){return n.call(this,o,l,u,e)}):i=function(o,l,u){return n.call(this,o,ee(l),u,e)}),r[t](i,...s)}function pn(e,t,n){const s=L(e);te(s,"iterate",Pt);const r=s[t](...n);return(r===-1||r===!1)&&Wn(n[0])?(n[0]=L(n[0]),s[t](...n)):r}function bt(e,t,n=[]){$e(),Ln();const s=L(e)[t].apply(e,n);return Hn(),Ve(),s}const ti=Bn("__proto__,__v_isRef,__isVue"),Ys=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Xe));function ni(e){Xe(e)||(e=String(e));const t=L(this);return te(t,"has",e),t.hasOwnProperty(e)}class zs{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?di:Zs:i?Xs:Gs).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=O(t);if(!r){let u;if(o&&(u=Zr[n]))return u;if(n==="hasOwnProperty")return ni}const l=Reflect.get(t,n,ne(t)?t:s);return(Xe(n)?Ys.has(n):ti(n))||(r||te(t,"get",n),i)?l:ne(l)?o&&qn(n)?l:l.value:z(l)?r?er(l):jn(l):l}}class Js extends zs{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];if(!this._isShallow){const u=Je(i);if(!we(s)&&!Je(s)&&(i=L(i),s=L(s)),!O(t)&&ne(i)&&!ne(s))return u?!1:(i.value=s,!0)}const o=O(t)&&qn(n)?Number(n)<t.length:H(t,n),l=Reflect.set(t,n,s,ne(t)?t:r);return t===L(r)&&(o?Ye(s,i)&&Le(t,"set",n,s):Le(t,"add",n,s)),l}deleteProperty(t,n){const s=H(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&Le(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!Xe(n)||!Ys.has(n))&&te(t,"has",n),s}ownKeys(t){return te(t,"iterate",O(t)?"length":rt),Reflect.ownKeys(t)}}class si extends zs{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const ri=new Js,ii=new si,oi=new Js(!0);const Sn=e=>e,Ft=e=>Reflect.getPrototypeOf(e);function li(e,t,n){return function(...s){const r=this.__v_raw,i=L(r),o=ut(i),l=e==="entries"||e===Symbol.iterator&&o,u=e==="keys"&&o,p=r[e](...s),a=n?Sn:t?Ut:ee;return!t&&te(i,"iterate",u?An:rt),{next(){const{value:h,done:C}=p.next();return C?{value:h,done:C}:{value:l?[a(h[0]),a(h[1])]:a(h),done:C}},[Symbol.iterator](){return this}}}}function Lt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ci(e,t){const n={get(r){const i=this.__v_raw,o=L(i),l=L(r);e||(Ye(r,l)&&te(o,"get",r),te(o,"get",l));const{has:u}=Ft(o),p=t?Sn:e?Ut:ee;if(u.call(o,r))return p(i.get(r));if(u.call(o,l))return p(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!e&&te(L(r),"iterate",rt),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=L(i),l=L(r);return e||(Ye(r,l)&&te(o,"has",r),te(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,u=L(l),p=t?Sn:e?Ut:ee;return!e&&te(u,"iterate",rt),l.forEach((a,h)=>r.call(i,p(a),p(h),o))}};return se(n,e?{add:Lt("add"),set:Lt("set"),delete:Lt("delete"),clear:Lt("clear")}:{add(r){!t&&!we(r)&&!Je(r)&&(r=L(r));const i=L(this);return Ft(i).has.call(i,r)||(i.add(r),Le(i,"add",r,r)),this},set(r,i){!t&&!we(i)&&!Je(i)&&(i=L(i));const o=L(this),{has:l,get:u}=Ft(o);let p=l.call(o,r);p||(r=L(r),p=l.call(o,r));const a=u.call(o,r);return o.set(r,i),p?Ye(i,a)&&Le(o,"set",r,i):Le(o,"add",r,i),this},delete(r){const i=L(this),{has:o,get:l}=Ft(i);let u=o.call(i,r);u||(r=L(r),u=o.call(i,r)),l&&l.call(i,r);const p=i.delete(r);return u&&Le(i,"delete",r,void 0),p},clear(){const r=L(this),i=r.size!==0,o=r.clear();return i&&Le(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=li(r,e,t)}),n}function Nn(e,t){const n=ci(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(H(n,r)&&r in s?n:s,r,i)}const fi={get:Nn(!1,!1)},ui={get:Nn(!1,!0)},ai={get:Nn(!0,!1)};const Gs=new WeakMap,Xs=new WeakMap,Zs=new WeakMap,di=new WeakMap;function hi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pi(e){return e.__v_skip||!Object.isExtensible(e)?0:hi($r(e))}function jn(e){return Je(e)?e:Un(e,!1,ri,fi,Gs)}function gi(e){return Un(e,!1,oi,ui,Xs)}function er(e){return Un(e,!0,ii,ai,Zs)}function Un(e,t,n,s,r){if(!z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=pi(e);if(i===0)return e;const o=r.get(e);if(o)return o;const l=new Proxy(e,i===2?s:n);return r.set(e,l),l}function at(e){return Je(e)?at(e.__v_raw):!!(e&&e.__v_isReactive)}function Je(e){return!!(e&&e.__v_isReadonly)}function we(e){return!!(e&&e.__v_isShallow)}function Wn(e){return e?!!e.__v_raw:!1}function L(e){const t=e&&e.__v_raw;return t?L(t):e}function _i(e){return!H(e,"__v_skip")&&Object.isExtensible(e)&&Fs(e,"__v_skip",!0),e}const ee=e=>z(e)?jn(e):e,Ut=e=>z(e)?er(e):e;function ne(e){return e?e.__v_isRef===!0:!1}function Ue(e){return mi(e,!1)}function mi(e,t){return ne(e)?e:new bi(e,t)}class bi{constructor(t,n){this.dep=new Vn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:L(t),this._value=n?t:ee(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||we(t)||Je(t);t=s?t:L(t),Ye(t,n)&&(this._rawValue=t,this._value=s?t:ee(t),this.dep.trigger())}}function $t(e){return ne(e)?e.value:e}const vi={get:(e,t,n)=>t==="__v_raw"?e:$t(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return ne(r)&&!ne(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function tr(e){return at(e)?e:new Proxy(e,vi)}class wi{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Vn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Tt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&W!==this)return js(this,!0),!0}get value(){const t=this.dep.track();return Ks(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function yi(e,t,n=!1){let s,r;return B(e)?s=e:(s=e.get,r=e.set),new wi(s,r,n)}const Ht={},Wt=new WeakMap;let st;function Ci(e,t=!1,n=st){if(n){let s=Wt.get(n);s||Wt.set(n,s=[]),s.push(e)}}function xi(e,t,n=K){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:u}=n,p=T=>r?T:we(T)||r===!1||r===0?Qe(T,1):Qe(T);let a,h,C,A,I=!1,R=!1;if(ne(e)?(h=()=>e.value,I=we(e)):at(e)?(h=()=>p(e),I=!0):O(e)?(R=!0,I=e.some(T=>at(T)||we(T)),h=()=>e.map(T=>{if(ne(T))return T.value;if(at(T))return p(T);if(B(T))return u?u(T,2):T()})):B(e)?t?h=u?()=>u(e,2):e:h=()=>{if(C){$e();try{C()}finally{Ve()}}const T=st;st=a;try{return u?u(e,3,[A]):e(A)}finally{st=T}}:h=Be,t&&r){const T=h,J=r===!0?1/0:r;h=()=>Qe(T(),J)}const X=Jr(),$=()=>{a.stop(),X&&X.active&&Rn(X.effects,a)};if(i&&t){const T=t;t=(...J)=>{T(...J),$()}}let k=R?new Array(e.length).fill(Ht):Ht;const Q=T=>{if(!(!(a.flags&1)||!a.dirty&&!T))if(t){const J=a.run();if(r||I||(R?J.some((xe,_e)=>Ye(xe,k[_e])):Ye(J,k))){C&&C();const xe=st;st=a;try{const _e=[J,k===Ht?void 0:R&&k[0]===Ht?[]:k,A];k=J,u?u(t,3,_e):t(..._e)}finally{st=xe}}}else a.run()};return l&&l(Q),a=new Vs(h),a.scheduler=o?()=>o(Q,!1):Q,A=T=>Ci(T,!1,a),C=a.onStop=()=>{const T=Wt.get(a);if(T){if(u)u(T,4);else for(const J of T)J();Wt.delete(a)}},t?s?Q(!0):k=a.run():o?o(Q.bind(null,!0),!0):a.run(),$.pause=a.pause.bind(a),$.resume=a.resume.bind(a),$.stop=$,$}function Qe(e,t=1/0,n){if(t<=0||!z(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ne(e))Qe(e.value,t,n);else if(O(e))for(let s=0;s<e.length;s++)Qe(e[s],t,n);else if(Os(e)||ut(e))e.forEach(s=>{Qe(s,t,n)});else if(Rs(e)){for(const s in e)Qe(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Qe(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bt(e,t,n,s){try{return s?e(...s):e()}catch(r){nn(r,t,n)}}function Ie(e,t,n,s){if(B(e)){const r=Bt(e,t,n,s);return r&&Bs(r)&&r.catch(i=>{nn(i,t,n)}),r}if(O(e)){const r=[];for(let i=0;i<e.length;i++)r.push(Ie(e[i],t,n,s));return r}}function nn(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||K;if(t){let l=t.parent;const u=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const a=l.ec;if(a){for(let h=0;h<a.length;h++)if(a[h](e,u,p)===!1)return}l=l.parent}if(i){$e(),Bt(i,null,10,[e,u,p]),Ve();return}}Ai(e,n,r,s,o)}function Ai(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const oe=[];let Ee=-1;const dt=[];let We=null,lt=0;const nr=Promise.resolve();let Kt=null;function Si(e){const t=Kt||nr;return e?t.then(this?e.bind(this):e):t}function Di(e){let t=Ee+1,n=oe.length;for(;t<n;){const s=t+n>>>1,r=oe[s],i=Et(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function Kn(e){if(!(e.flags&1)){const t=Et(e),n=oe[oe.length-1];!n||!(e.flags&2)&&t>=Et(n)?oe.push(e):oe.splice(Di(t),0,e),e.flags|=1,sr()}}function sr(){Kt||(Kt=nr.then(ir))}function Ti(e){O(e)?dt.push(...e):We&&e.id===-1?We.splice(lt+1,0,e):e.flags&1||(dt.push(e),e.flags|=1),sr()}function os(e,t,n=Ee+1){for(;n<oe.length;n++){const s=oe[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;oe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function rr(e){if(dt.length){const t=[...new Set(dt)].sort((n,s)=>Et(n)-Et(s));if(dt.length=0,We){We.push(...t);return}for(We=t,lt=0;lt<We.length;lt++){const n=We[lt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}We=null,lt=0}}const Et=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ir(e){try{for(Ee=0;Ee<oe.length;Ee++){const t=oe[Ee];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Bt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ee<oe.length;Ee++){const t=oe[Ee];t&&(t.flags&=-2)}Ee=-1,oe.length=0,rr(),Kt=null,(oe.length||dt.length)&&ir()}}let Oe=null,or=null;function kt(e){const t=Oe;return Oe=e,or=e&&e.type.__scopeId||null,t}function Pi(e,t=Oe,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&_s(-1);const i=kt(t);let o;try{o=e(...r)}finally{kt(i),s._d&&_s(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function tt(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let u=l.dir[s];u&&($e(),Ie(u,n,8,[e.el,l,e,t]),Ve())}}const Ei=Symbol("_vte"),Mi=e=>e.__isTeleport;function kn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,kn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function lr(e,t){return B(e)?se({name:e.name},t,{setup:e}):e}function cr(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Qt(e,t,n,s,r=!1){if(O(e)){e.forEach((I,R)=>Qt(I,t&&(O(t)?t[R]:t),n,s,r));return}if(At(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Qt(e,t,n,s.component.subTree);return}const i=s.shapeFlag&4?Jn(s.component):s.el,o=r?null:i,{i:l,r:u}=e,p=t&&t.r,a=l.refs===K?l.refs={}:l.refs,h=l.setupState,C=L(h),A=h===K?()=>!1:I=>H(C,I);if(p!=null&&p!==u&&(G(p)?(a[p]=null,A(p)&&(h[p]=null)):ne(p)&&(p.value=null)),B(u))Bt(u,l,12,[o,a]);else{const I=G(u),R=ne(u);if(I||R){const X=()=>{if(e.f){const $=I?A(u)?h[u]:a[u]:u.value;r?O($)&&Rn($,i):O($)?$.includes(i)||$.push(i):I?(a[u]=[i],A(u)&&(h[u]=a[u])):(u.value=[i],e.k&&(a[e.k]=u.value))}else I?(a[u]=o,A(u)&&(h[u]=o)):R&&(u.value=o,e.k&&(a[e.k]=o))};o?(X.id=-1,pe(X,n)):X()}}}en().requestIdleCallback;en().cancelIdleCallback;const At=e=>!!e.type.__asyncLoader,fr=e=>e.type.__isKeepAlive;function Oi(e,t){ur(e,"a",t)}function Bi(e,t){ur(e,"da",t)}function ur(e,t,n=le){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(sn(t,s,n),n){let r=n.parent;for(;r&&r.parent;)fr(r.parent.vnode)&&Ii(s,t,n,r),r=r.parent}}function Ii(e,t,n,s){const r=sn(t,e,s,!0);ar(()=>{Rn(s[t],r)},n)}function sn(e,t,n=le,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{$e();const l=It(n),u=Ie(t,n,e,o);return l(),Ve(),u});return s?r.unshift(i):r.push(i),i}}const Ne=e=>(t,n=le)=>{(!Ot||e==="sp")&&sn(e,(...s)=>t(...s),n)},Ri=Ne("bm"),qi=Ne("m"),Fi=Ne("bu"),Li=Ne("u"),Hi=Ne("bum"),ar=Ne("um"),$i=Ne("sp"),Vi=Ne("rtg"),Ni=Ne("rtc");function ji(e,t=le){sn("ec",e,t)}const Ui=Symbol.for("v-ndc");function ls(e,t,n,s){let r;const i=n,o=O(e);if(o||G(e)){const l=o&&at(e);let u=!1,p=!1;l&&(u=!we(e),p=Je(e),e=tn(e)),r=new Array(e.length);for(let a=0,h=e.length;a<h;a++)r[a]=t(u?p?Ut(ee(e[a])):ee(e[a]):e[a],a,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=t(l+1,l,void 0,i)}else if(z(e))if(e[Symbol.iterator])r=Array.from(e,(l,u)=>t(l,u,void 0,i));else{const l=Object.keys(e);r=new Array(l.length);for(let u=0,p=l.length;u<p;u++){const a=l[u];r[u]=t(e[a],a,u,i)}}else r=[];return r}const Dn=e=>e?Br(e)?Jn(e):Dn(e.parent):null,St=se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Dn(e.parent),$root:e=>Dn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>hr(e),$forceUpdate:e=>e.f||(e.f=()=>{Kn(e.update)}),$nextTick:e=>e.n||(e.n=Si.bind(e.proxy)),$watch:e=>ao.bind(e)}),gn=(e,t)=>e!==K&&!e.__isScriptSetup&&H(e,t),Wi={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:u}=e;let p;if(t[0]!=="$"){const A=o[t];if(A!==void 0)switch(A){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(gn(s,t))return o[t]=1,s[t];if(r!==K&&H(r,t))return o[t]=2,r[t];if((p=e.propsOptions[0])&&H(p,t))return o[t]=3,i[t];if(n!==K&&H(n,t))return o[t]=4,n[t];Tn&&(o[t]=0)}}const a=St[t];let h,C;if(a)return t==="$attrs"&&te(e.attrs,"get",""),a(e);if((h=l.__cssModules)&&(h=h[t]))return h;if(n!==K&&H(n,t))return o[t]=4,n[t];if(C=u.config.globalProperties,H(C,t))return C[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return gn(r,t)?(r[t]=n,!0):s!==K&&H(s,t)?(s[t]=n,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let l;return!!n[o]||e!==K&&H(e,o)||gn(t,o)||(l=i[0])&&H(l,o)||H(s,o)||H(St,o)||H(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:H(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function cs(e){return O(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Tn=!0;function Ki(e){const t=hr(e),n=e.proxy,s=e.ctx;Tn=!1,t.beforeCreate&&fs(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:l,provide:u,inject:p,created:a,beforeMount:h,mounted:C,beforeUpdate:A,updated:I,activated:R,deactivated:X,beforeDestroy:$,beforeUnmount:k,destroyed:Q,unmounted:T,render:J,renderTracked:xe,renderTriggered:_e,errorCaptured:F,serverPrefetch:P,expose:N,inheritAttrs:ce,components:me,directives:je,filters:ln}=t;if(p&&ki(p,s,null),o)for(const Y in o){const j=o[Y];B(j)&&(s[Y]=j.bind(n))}if(r){const Y=r.call(n,n);z(Y)&&(e.data=jn(Y))}if(Tn=!0,i)for(const Y in i){const j=i[Y],Ze=B(j)?j.bind(n,n):B(j.get)?j.get.bind(n,n):Be,Rt=!B(j)&&B(j.set)?j.set.bind(n):Be,et=ct({get:Ze,set:Rt});Object.defineProperty(s,Y,{enumerable:!0,configurable:!0,get:()=>et.value,set:Ae=>et.value=Ae})}if(l)for(const Y in l)dr(l[Y],s,n,Y);if(u){const Y=B(u)?u.call(n):u;Reflect.ownKeys(Y).forEach(j=>{Xi(j,Y[j])})}a&&fs(a,e,"c");function re(Y,j){O(j)?j.forEach(Ze=>Y(Ze.bind(n))):j&&Y(j.bind(n))}if(re(Ri,h),re(qi,C),re(Fi,A),re(Li,I),re(Oi,R),re(Bi,X),re(ji,F),re(Ni,xe),re(Vi,_e),re(Hi,k),re(ar,T),re($i,P),O(N))if(N.length){const Y=e.exposed||(e.exposed={});N.forEach(j=>{Object.defineProperty(Y,j,{get:()=>n[j],set:Ze=>n[j]=Ze})})}else e.exposed||(e.exposed={});J&&e.render===Be&&(e.render=J),ce!=null&&(e.inheritAttrs=ce),me&&(e.components=me),je&&(e.directives=je),P&&cr(e)}function ki(e,t,n=Be){O(e)&&(e=Pn(e));for(const s in e){const r=e[s];let i;z(r)?"default"in r?i=Vt(r.from||s,r.default,!0):i=Vt(r.from||s):i=Vt(r),ne(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function fs(e,t,n){Ie(O(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function dr(e,t,n,s){let r=s.includes(".")?Dr(n,s):()=>n[s];if(G(e)){const i=t[e];B(i)&&mn(r,i)}else if(B(e))mn(r,e.bind(n));else if(z(e))if(O(e))e.forEach(i=>dr(i,t,n,s));else{const i=B(e.handler)?e.handler.bind(n):t[e.handler];B(i)&&mn(r,i,e)}}function hr(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let u;return l?u=l:!r.length&&!n&&!s?u=t:(u={},r.length&&r.forEach(p=>Yt(u,p,o,!0)),Yt(u,t,o)),z(t)&&i.set(t,u),u}function Yt(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&Yt(e,i,n,!0),r&&r.forEach(o=>Yt(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const l=Qi[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const Qi={data:us,props:as,emits:as,methods:wt,computed:wt,beforeCreate:ie,created:ie,beforeMount:ie,mounted:ie,beforeUpdate:ie,updated:ie,beforeDestroy:ie,beforeUnmount:ie,destroyed:ie,unmounted:ie,activated:ie,deactivated:ie,errorCaptured:ie,serverPrefetch:ie,components:wt,directives:wt,watch:zi,provide:us,inject:Yi};function us(e,t){return t?e?function(){return se(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function Yi(e,t){return wt(Pn(e),Pn(t))}function Pn(e){if(O(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ie(e,t){return e?[...new Set([].concat(e,t))]:t}function wt(e,t){return e?se(Object.create(null),e,t):t}function as(e,t){return e?O(e)&&O(t)?[...new Set([...e,...t])]:se(Object.create(null),cs(e),cs(t??{})):t}function zi(e,t){if(!e)return t;if(!t)return e;const n=se(Object.create(null),e);for(const s in t)n[s]=ie(e[s],t[s]);return n}function pr(){return{app:null,config:{isNativeTag:Lr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ji=0;function Gi(e,t){return function(s,r=null){B(s)||(s=se({},s)),r!=null&&!z(r)&&(r=null);const i=pr(),o=new WeakSet,l=[];let u=!1;const p=i.app={_uid:Ji++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Io,get config(){return i.config},set config(a){},use(a,...h){return o.has(a)||(a&&B(a.install)?(o.add(a),a.install(p,...h)):B(a)&&(o.add(a),a(p,...h))),p},mixin(a){return i.mixins.includes(a)||i.mixins.push(a),p},component(a,h){return h?(i.components[a]=h,p):i.components[a]},directive(a,h){return h?(i.directives[a]=h,p):i.directives[a]},mount(a,h,C){if(!u){const A=p._ceVNode||He(s,r);return A.appContext=i,C===!0?C="svg":C===!1&&(C=void 0),e(A,a,C),u=!0,p._container=a,a.__vue_app__=p,Jn(A.component)}},onUnmount(a){l.push(a)},unmount(){u&&(Ie(l,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(a,h){return i.provides[a]=h,p},runWithContext(a){const h=ht;ht=p;try{return a()}finally{ht=h}}};return p}}let ht=null;function Xi(e,t){if(le){let n=le.provides;const s=le.parent&&le.parent.provides;s===n&&(n=le.provides=Object.create(s)),n[e]=t}}function Vt(e,t,n=!1){const s=le||Oe;if(s||ht){let r=ht?ht._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&B(t)?t.call(s&&s.proxy):t}}const gr={},_r=()=>Object.create(gr),mr=e=>Object.getPrototypeOf(e)===gr;function Zi(e,t,n,s=!1){const r={},i=_r();e.propsDefaults=Object.create(null),br(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:gi(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function eo(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,l=L(r),[u]=e.propsOptions;let p=!1;if((s||o>0)&&!(o&16)){if(o&8){const a=e.vnode.dynamicProps;for(let h=0;h<a.length;h++){let C=a[h];if(rn(e.emitsOptions,C))continue;const A=t[C];if(u)if(H(i,C))A!==i[C]&&(i[C]=A,p=!0);else{const I=ze(C);r[I]=En(u,l,I,A,e,!1)}else A!==i[C]&&(i[C]=A,p=!0)}}}else{br(e,t,r,i)&&(p=!0);let a;for(const h in l)(!t||!H(t,h)&&((a=it(h))===h||!H(t,a)))&&(u?n&&(n[h]!==void 0||n[a]!==void 0)&&(r[h]=En(u,l,h,void 0,e,!0)):delete r[h]);if(i!==l)for(const h in i)(!t||!H(t,h))&&(delete i[h],p=!0)}p&&Le(e.attrs,"set","")}function br(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,l;if(t)for(let u in t){if(yt(u))continue;const p=t[u];let a;r&&H(r,a=ze(u))?!i||!i.includes(a)?n[a]=p:(l||(l={}))[a]=p:rn(e.emitsOptions,u)||(!(u in s)||p!==s[u])&&(s[u]=p,o=!0)}if(i){const u=L(n),p=l||K;for(let a=0;a<i.length;a++){const h=i[a];n[h]=En(r,u,h,p[h],e,!H(p,h))}}return o}function En(e,t,n,s,r,i){const o=e[n];if(o!=null){const l=H(o,"default");if(l&&s===void 0){const u=o.default;if(o.type!==Function&&!o.skipFactory&&B(u)){const{propsDefaults:p}=r;if(n in p)s=p[n];else{const a=It(r);s=p[n]=u.call(null,t),a()}}else s=u;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===it(n))&&(s=!0))}return s}const to=new WeakMap;function vr(e,t,n=!1){const s=n?to:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},l=[];let u=!1;if(!B(e)){const a=h=>{u=!0;const[C,A]=vr(h,t,!0);se(o,C),A&&l.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}if(!i&&!u)return z(e)&&s.set(e,ft),ft;if(O(i))for(let a=0;a<i.length;a++){const h=ze(i[a]);ds(h)&&(o[h]=K)}else if(i)for(const a in i){const h=ze(a);if(ds(h)){const C=i[a],A=o[h]=O(C)||B(C)?{type:C}:se({},C),I=A.type;let R=!1,X=!0;if(O(I))for(let $=0;$<I.length;++$){const k=I[$],Q=B(k)&&k.name;if(Q==="Boolean"){R=!0;break}else Q==="String"&&(X=!1)}else R=B(I)&&I.name==="Boolean";A[0]=R,A[1]=X,(R||H(A,"default"))&&l.push(h)}}const p=[o,l];return z(e)&&s.set(e,p),p}function ds(e){return e[0]!=="$"&&!yt(e)}const Qn=e=>e[0]==="_"||e==="$stable",Yn=e=>O(e)?e.map(Me):[Me(e)],no=(e,t,n)=>{if(t._n)return t;const s=Pi((...r)=>Yn(t(...r)),n);return s._c=!1,s},wr=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Qn(r))continue;const i=e[r];if(B(i))t[r]=no(r,i,s);else if(i!=null){const o=Yn(i);t[r]=()=>o}}},yr=(e,t)=>{const n=Yn(t);e.slots.default=()=>n},Cr=(e,t,n)=>{for(const s in t)(n||!Qn(s))&&(e[s]=t[s])},so=(e,t,n)=>{const s=e.slots=_r();if(e.vnode.shapeFlag&32){const r=t._;r?(Cr(s,t,n),n&&Fs(s,"_",r,!0)):wr(t,s)}else t&&yr(e,t)},ro=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=K;if(s.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:Cr(r,t,n):(i=!t.$stable,wr(t,r)),o=t}else t&&(yr(e,t),o={default:1});if(i)for(const l in r)!Qn(l)&&o[l]==null&&delete r[l]},pe=vo;function io(e){return oo(e)}function oo(e,t){const n=en();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:u,setText:p,setElementText:a,parentNode:h,nextSibling:C,setScopeId:A=Be,insertStaticContent:I}=e,R=(c,f,d,m=null,g=null,_=null,y=void 0,w=null,v=!!f.dynamicChildren)=>{if(c===f)return;c&&!vt(c,f)&&(m=qt(c),Ae(c,g,_,!0),c=null),f.patchFlag===-2&&(v=!1,f.dynamicChildren=null);const{type:b,ref:D,shapeFlag:x}=f;switch(b){case on:X(c,f,d,m);break;case Ge:$(c,f,d,m);break;case bn:c==null&&k(f,d,m,y);break;case ye:me(c,f,d,m,g,_,y,w,v);break;default:x&1?J(c,f,d,m,g,_,y,w,v):x&6?je(c,f,d,m,g,_,y,w,v):(x&64||x&128)&&b.process(c,f,d,m,g,_,y,w,v,_t)}D!=null&&g&&Qt(D,c&&c.ref,_,f||c,!f)},X=(c,f,d,m)=>{if(c==null)s(f.el=l(f.children),d,m);else{const g=f.el=c.el;f.children!==c.children&&p(g,f.children)}},$=(c,f,d,m)=>{c==null?s(f.el=u(f.children||""),d,m):f.el=c.el},k=(c,f,d,m)=>{[c.el,c.anchor]=I(c.children,f,d,m,c.el,c.anchor)},Q=({el:c,anchor:f},d,m)=>{let g;for(;c&&c!==f;)g=C(c),s(c,d,m),c=g;s(f,d,m)},T=({el:c,anchor:f})=>{let d;for(;c&&c!==f;)d=C(c),r(c),c=d;r(f)},J=(c,f,d,m,g,_,y,w,v)=>{f.type==="svg"?y="svg":f.type==="math"&&(y="mathml"),c==null?xe(f,d,m,g,_,y,w,v):P(c,f,g,_,y,w,v)},xe=(c,f,d,m,g,_,y,w)=>{let v,b;const{props:D,shapeFlag:x,transition:S,dirs:E}=c;if(v=c.el=o(c.type,_,D&&D.is,D),x&8?a(v,c.children):x&16&&F(c.children,v,null,m,g,_n(c,_),y,w),E&&tt(c,null,m,"created"),_e(v,c,c.scopeId,y,m),D){for(const U in D)U!=="value"&&!yt(U)&&i(v,U,null,D[U],_,m);"value"in D&&i(v,"value",null,D.value,_),(b=D.onVnodeBeforeMount)&&Pe(b,m,c)}E&&tt(c,null,m,"beforeMount");const q=lo(g,S);q&&S.beforeEnter(v),s(v,f,d),((b=D&&D.onVnodeMounted)||q||E)&&pe(()=>{b&&Pe(b,m,c),q&&S.enter(v),E&&tt(c,null,m,"mounted")},g)},_e=(c,f,d,m,g)=>{if(d&&A(c,d),m)for(let _=0;_<m.length;_++)A(c,m[_]);if(g){let _=g.subTree;if(f===_||Pr(_.type)&&(_.ssContent===f||_.ssFallback===f)){const y=g.vnode;_e(c,y,y.scopeId,y.slotScopeIds,g.parent)}}},F=(c,f,d,m,g,_,y,w,v=0)=>{for(let b=v;b<c.length;b++){const D=c[b]=w?Ke(c[b]):Me(c[b]);R(null,D,f,d,m,g,_,y,w)}},P=(c,f,d,m,g,_,y)=>{const w=f.el=c.el;let{patchFlag:v,dynamicChildren:b,dirs:D}=f;v|=c.patchFlag&16;const x=c.props||K,S=f.props||K;let E;if(d&&nt(d,!1),(E=S.onVnodeBeforeUpdate)&&Pe(E,d,f,c),D&&tt(f,c,d,"beforeUpdate"),d&&nt(d,!0),(x.innerHTML&&S.innerHTML==null||x.textContent&&S.textContent==null)&&a(w,""),b?N(c.dynamicChildren,b,w,d,m,_n(f,g),_):y||j(c,f,w,null,d,m,_n(f,g),_,!1),v>0){if(v&16)ce(w,x,S,d,g);else if(v&2&&x.class!==S.class&&i(w,"class",null,S.class,g),v&4&&i(w,"style",x.style,S.style,g),v&8){const q=f.dynamicProps;for(let U=0;U<q.length;U++){const V=q[U],de=x[V],fe=S[V];(fe!==de||V==="value")&&i(w,V,de,fe,g,d)}}v&1&&c.children!==f.children&&a(w,f.children)}else!y&&b==null&&ce(w,x,S,d,g);((E=S.onVnodeUpdated)||D)&&pe(()=>{E&&Pe(E,d,f,c),D&&tt(f,c,d,"updated")},m)},N=(c,f,d,m,g,_,y)=>{for(let w=0;w<f.length;w++){const v=c[w],b=f[w],D=v.el&&(v.type===ye||!vt(v,b)||v.shapeFlag&198)?h(v.el):d;R(v,b,D,null,m,g,_,y,!0)}},ce=(c,f,d,m,g)=>{if(f!==d){if(f!==K)for(const _ in f)!yt(_)&&!(_ in d)&&i(c,_,f[_],null,g,m);for(const _ in d){if(yt(_))continue;const y=d[_],w=f[_];y!==w&&_!=="value"&&i(c,_,w,y,g,m)}"value"in d&&i(c,"value",f.value,d.value,g)}},me=(c,f,d,m,g,_,y,w,v)=>{const b=f.el=c?c.el:l(""),D=f.anchor=c?c.anchor:l("");let{patchFlag:x,dynamicChildren:S,slotScopeIds:E}=f;E&&(w=w?w.concat(E):E),c==null?(s(b,d,m),s(D,d,m),F(f.children||[],d,D,g,_,y,w,v)):x>0&&x&64&&S&&c.dynamicChildren?(N(c.dynamicChildren,S,d,g,_,y,w),(f.key!=null||g&&f===g.subTree)&&xr(c,f,!0)):j(c,f,d,D,g,_,y,w,v)},je=(c,f,d,m,g,_,y,w,v)=>{f.slotScopeIds=w,c==null?f.shapeFlag&512?g.ctx.activate(f,d,m,y,v):ln(f,d,m,g,_,y,v):Xn(c,f,v)},ln=(c,f,d,m,g,_,y)=>{const w=c.component=To(c,m,g);if(fr(c)&&(w.ctx.renderer=_t),Po(w,!1,y),w.asyncDep){if(g&&g.registerDep(w,re,y),!c.el){const v=w.subTree=He(Ge);$(null,v,f,d)}}else re(w,c,f,d,g,_,y)},Xn=(c,f,d)=>{const m=f.component=c.component;if(mo(c,f,d))if(m.asyncDep&&!m.asyncResolved){Y(m,f,d);return}else m.next=f,m.update();else f.el=c.el,m.vnode=f},re=(c,f,d,m,g,_,y)=>{const w=()=>{if(c.isMounted){let{next:x,bu:S,u:E,parent:q,vnode:U}=c;{const De=Ar(c);if(De){x&&(x.el=U.el,Y(c,x,y)),De.asyncDep.then(()=>{c.isUnmounted||w()});return}}let V=x,de;nt(c,!1),x?(x.el=U.el,Y(c,x,y)):x=U,S&&un(S),(de=x.props&&x.props.onVnodeBeforeUpdate)&&Pe(de,q,x,U),nt(c,!0);const fe=ps(c),Se=c.subTree;c.subTree=fe,R(Se,fe,h(Se.el),qt(Se),c,g,_),x.el=fe.el,V===null&&bo(c,fe.el),E&&pe(E,g),(de=x.props&&x.props.onVnodeUpdated)&&pe(()=>Pe(de,q,x,U),g)}else{let x;const{el:S,props:E}=f,{bm:q,m:U,parent:V,root:de,type:fe}=c,Se=At(f);nt(c,!1),q&&un(q),!Se&&(x=E&&E.onVnodeBeforeMount)&&Pe(x,V,f),nt(c,!0);{de.ce&&de.ce._injectChildStyle(fe);const De=c.subTree=ps(c);R(null,De,d,m,c,g,_),f.el=De.el}if(U&&pe(U,g),!Se&&(x=E&&E.onVnodeMounted)){const De=f;pe(()=>Pe(x,V,De),g)}(f.shapeFlag&256||V&&At(V.vnode)&&V.vnode.shapeFlag&256)&&c.a&&pe(c.a,g),c.isMounted=!0,f=d=m=null}};c.scope.on();const v=c.effect=new Vs(w);c.scope.off();const b=c.update=v.run.bind(v),D=c.job=v.runIfDirty.bind(v);D.i=c,D.id=c.uid,v.scheduler=()=>Kn(D),nt(c,!0),b()},Y=(c,f,d)=>{f.component=c;const m=c.vnode.props;c.vnode=f,c.next=null,eo(c,f.props,m,d),ro(c,f.children,d),$e(),os(c),Ve()},j=(c,f,d,m,g,_,y,w,v=!1)=>{const b=c&&c.children,D=c?c.shapeFlag:0,x=f.children,{patchFlag:S,shapeFlag:E}=f;if(S>0){if(S&128){Rt(b,x,d,m,g,_,y,w,v);return}else if(S&256){Ze(b,x,d,m,g,_,y,w,v);return}}E&8?(D&16&&gt(b,g,_),x!==b&&a(d,x)):D&16?E&16?Rt(b,x,d,m,g,_,y,w,v):gt(b,g,_,!0):(D&8&&a(d,""),E&16&&F(x,d,m,g,_,y,w,v))},Ze=(c,f,d,m,g,_,y,w,v)=>{c=c||ft,f=f||ft;const b=c.length,D=f.length,x=Math.min(b,D);let S;for(S=0;S<x;S++){const E=f[S]=v?Ke(f[S]):Me(f[S]);R(c[S],E,d,null,g,_,y,w,v)}b>D?gt(c,g,_,!0,!1,x):F(f,d,m,g,_,y,w,v,x)},Rt=(c,f,d,m,g,_,y,w,v)=>{let b=0;const D=f.length;let x=c.length-1,S=D-1;for(;b<=x&&b<=S;){const E=c[b],q=f[b]=v?Ke(f[b]):Me(f[b]);if(vt(E,q))R(E,q,d,null,g,_,y,w,v);else break;b++}for(;b<=x&&b<=S;){const E=c[x],q=f[S]=v?Ke(f[S]):Me(f[S]);if(vt(E,q))R(E,q,d,null,g,_,y,w,v);else break;x--,S--}if(b>x){if(b<=S){const E=S+1,q=E<D?f[E].el:m;for(;b<=S;)R(null,f[b]=v?Ke(f[b]):Me(f[b]),d,q,g,_,y,w,v),b++}}else if(b>S)for(;b<=x;)Ae(c[b],g,_,!0),b++;else{const E=b,q=b,U=new Map;for(b=q;b<=S;b++){const he=f[b]=v?Ke(f[b]):Me(f[b]);he.key!=null&&U.set(he.key,b)}let V,de=0;const fe=S-q+1;let Se=!1,De=0;const mt=new Array(fe);for(b=0;b<fe;b++)mt[b]=0;for(b=E;b<=x;b++){const he=c[b];if(de>=fe){Ae(he,g,_,!0);continue}let Te;if(he.key!=null)Te=U.get(he.key);else for(V=q;V<=S;V++)if(mt[V-q]===0&&vt(he,f[V])){Te=V;break}Te===void 0?Ae(he,g,_,!0):(mt[Te-q]=b+1,Te>=De?De=Te:Se=!0,R(he,f[Te],d,null,g,_,y,w,v),de++)}const ts=Se?co(mt):ft;for(V=ts.length-1,b=fe-1;b>=0;b--){const he=q+b,Te=f[he],ns=he+1<D?f[he+1].el:m;mt[b]===0?R(null,Te,d,ns,g,_,y,w,v):Se&&(V<0||b!==ts[V]?et(Te,d,ns,2):V--)}}},et=(c,f,d,m,g=null)=>{const{el:_,type:y,transition:w,children:v,shapeFlag:b}=c;if(b&6){et(c.component.subTree,f,d,m);return}if(b&128){c.suspense.move(f,d,m);return}if(b&64){y.move(c,f,d,_t);return}if(y===ye){s(_,f,d);for(let x=0;x<v.length;x++)et(v[x],f,d,m);s(c.anchor,f,d);return}if(y===bn){Q(c,f,d);return}if(m!==2&&b&1&&w)if(m===0)w.beforeEnter(_),s(_,f,d),pe(()=>w.enter(_),g);else{const{leave:x,delayLeave:S,afterLeave:E}=w,q=()=>{c.ctx.isUnmounted?r(_):s(_,f,d)},U=()=>{x(_,()=>{q(),E&&E()})};S?S(_,q,U):U()}else s(_,f,d)},Ae=(c,f,d,m=!1,g=!1)=>{const{type:_,props:y,ref:w,children:v,dynamicChildren:b,shapeFlag:D,patchFlag:x,dirs:S,cacheIndex:E}=c;if(x===-2&&(g=!1),w!=null&&($e(),Qt(w,null,d,c,!0),Ve()),E!=null&&(f.renderCache[E]=void 0),D&256){f.ctx.deactivate(c);return}const q=D&1&&S,U=!At(c);let V;if(U&&(V=y&&y.onVnodeBeforeUnmount)&&Pe(V,f,c),D&6)Fr(c.component,d,m);else{if(D&128){c.suspense.unmount(d,m);return}q&&tt(c,null,f,"beforeUnmount"),D&64?c.type.remove(c,f,d,_t,m):b&&!b.hasOnce&&(_!==ye||x>0&&x&64)?gt(b,f,d,!1,!0):(_===ye&&x&384||!g&&D&16)&&gt(v,f,d),m&&Zn(c)}(U&&(V=y&&y.onVnodeUnmounted)||q)&&pe(()=>{V&&Pe(V,f,c),q&&tt(c,null,f,"unmounted")},d)},Zn=c=>{const{type:f,el:d,anchor:m,transition:g}=c;if(f===ye){qr(d,m);return}if(f===bn){T(c);return}const _=()=>{r(d),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:y,delayLeave:w}=g,v=()=>y(d,_);w?w(c.el,_,v):v()}else _()},qr=(c,f)=>{let d;for(;c!==f;)d=C(c),r(c),c=d;r(f)},Fr=(c,f,d)=>{const{bum:m,scope:g,job:_,subTree:y,um:w,m:v,a:b,parent:D,slots:{__:x}}=c;hs(v),hs(b),m&&un(m),D&&O(x)&&x.forEach(S=>{D.renderCache[S]=void 0}),g.stop(),_&&(_.flags|=8,Ae(y,c,f,d)),w&&pe(w,f),pe(()=>{c.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},gt=(c,f,d,m=!1,g=!1,_=0)=>{for(let y=_;y<c.length;y++)Ae(c[y],f,d,m,g)},qt=c=>{if(c.shapeFlag&6)return qt(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const f=C(c.anchor||c.el),d=f&&f[Ei];return d?C(d):f};let cn=!1;const es=(c,f,d)=>{c==null?f._vnode&&Ae(f._vnode,null,null,!0):R(f._vnode||null,c,f,null,null,null,d),f._vnode=c,cn||(cn=!0,os(),rr(),cn=!1)},_t={p:R,um:Ae,m:et,r:Zn,mt:ln,mc:F,pc:j,pbc:N,n:qt,o:e};return{render:es,hydrate:void 0,createApp:Gi(es)}}function _n({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function nt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function lo(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function xr(e,t,n=!1){const s=e.children,r=t.children;if(O(s)&&O(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=Ke(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&xr(o,l)),l.type===on&&(l.el=o.el),l.type===Ge&&!l.el&&(l.el=o.el)}}function co(e){const t=e.slice(),n=[0];let s,r,i,o,l;const u=e.length;for(s=0;s<u;s++){const p=e[s];if(p!==0){if(r=n[n.length-1],e[r]<p){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,e[n[l]]<p?i=l+1:o=l;p<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Ar(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ar(t)}function hs(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const fo=Symbol.for("v-scx"),uo=()=>Vt(fo);function mn(e,t,n){return Sr(e,t,n)}function Sr(e,t,n=K){const{immediate:s,deep:r,flush:i,once:o}=n,l=se({},n),u=t&&s||!t&&i!=="post";let p;if(Ot){if(i==="sync"){const A=uo();p=A.__watcherHandles||(A.__watcherHandles=[])}else if(!u){const A=()=>{};return A.stop=Be,A.resume=Be,A.pause=Be,A}}const a=le;l.call=(A,I,R)=>Ie(A,a,I,R);let h=!1;i==="post"?l.scheduler=A=>{pe(A,a&&a.suspense)}:i!=="sync"&&(h=!0,l.scheduler=(A,I)=>{I?A():Kn(A)}),l.augmentJob=A=>{t&&(A.flags|=4),h&&(A.flags|=2,a&&(A.id=a.uid,A.i=a))};const C=xi(e,t,l);return Ot&&(p?p.push(C):u&&C()),C}function ao(e,t,n){const s=this.proxy,r=G(e)?e.includes(".")?Dr(s,e):()=>s[e]:e.bind(s,s);let i;B(t)?i=t:(i=t.handler,n=t);const o=It(this),l=Sr(r,i.bind(s),n);return o(),l}function Dr(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const ho=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ze(t)}Modifiers`]||e[`${it(t)}Modifiers`];function po(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||K;let r=n;const i=t.startsWith("update:"),o=i&&ho(s,t.slice(7));o&&(o.trim&&(r=n.map(a=>G(a)?a.trim():a)),o.number&&(r=n.map(jr)));let l,u=s[l=fn(t)]||s[l=fn(ze(t))];!u&&i&&(u=s[l=fn(it(t))]),u&&Ie(u,e,6,r);const p=s[l+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Ie(p,e,6,r)}}function Tr(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},l=!1;if(!B(e)){const u=p=>{const a=Tr(p,t,!0);a&&(l=!0,se(o,a))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!l?(z(e)&&s.set(e,null),null):(O(i)?i.forEach(u=>o[u]=null):se(o,i),z(e)&&s.set(e,o),o)}function rn(e,t){return!e||!Gt(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,it(t))||H(e,t))}function ps(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:u,render:p,renderCache:a,props:h,data:C,setupState:A,ctx:I,inheritAttrs:R}=e,X=kt(e);let $,k;try{if(n.shapeFlag&4){const T=r||s,J=T;$=Me(p.call(J,T,a,h,A,C,I)),k=l}else{const T=t;$=Me(T.length>1?T(h,{attrs:l,slots:o,emit:u}):T(h,null)),k=t.props?l:go(l)}}catch(T){Dt.length=0,nn(T,e,1),$=He(Ge)}let Q=$;if(k&&R!==!1){const T=Object.keys(k),{shapeFlag:J}=Q;T.length&&J&7&&(i&&T.some(In)&&(k=_o(k,i)),Q=pt(Q,k,!1,!0))}return n.dirs&&(Q=pt(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&kn(Q,n.transition),$=Q,kt(X),$}const go=e=>{let t;for(const n in e)(n==="class"||n==="style"||Gt(n))&&((t||(t={}))[n]=e[n]);return t},_o=(e,t)=>{const n={};for(const s in e)(!In(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function mo(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:l,patchFlag:u}=t,p=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?gs(s,o,p):!!o;if(u&8){const a=t.dynamicProps;for(let h=0;h<a.length;h++){const C=a[h];if(o[C]!==s[C]&&!rn(p,C))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?gs(s,o,p):!0:!!o;return!1}function gs(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!rn(n,i))return!0}return!1}function bo({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Pr=e=>e.__isSuspense;function vo(e,t){t&&t.pendingBranch?O(e)?t.effects.push(...e):t.effects.push(e):Ti(e)}const ye=Symbol.for("v-fgt"),on=Symbol.for("v-txt"),Ge=Symbol.for("v-cmt"),bn=Symbol.for("v-stc"),Dt=[];let ge=null;function Z(e=!1){Dt.push(ge=e?null:[])}function wo(){Dt.pop(),ge=Dt[Dt.length-1]||null}let Mt=1;function _s(e,t=!1){Mt+=e,e<0&&ge&&t&&(ge.hasOnce=!0)}function Er(e){return e.dynamicChildren=Mt>0?ge||ft:null,wo(),Mt>0&&ge&&ge.push(e),e}function ue(e,t,n,s,r,i){return Er(M(e,t,n,s,r,i,!0))}function zt(e,t,n,s,r){return Er(He(e,t,n,s,r,!0))}function Mr(e){return e?e.__v_isVNode===!0:!1}function vt(e,t){return e.type===t.type&&e.key===t.key}const Or=({key:e})=>e??null,Nt=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?G(e)||ne(e)||B(e)?{i:Oe,r:e,k:t,f:!!n}:e:null);function M(e,t=null,n=null,s=0,r=null,i=e===ye?0:1,o=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Or(t),ref:t&&Nt(t),scopeId:or,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Oe};return l?(zn(u,n),i&128&&e.normalize(u)):n&&(u.shapeFlag|=G(n)?8:16),Mt>0&&!o&&ge&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&ge.push(u),u}const He=yo;function yo(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===Ui)&&(e=Ge),Mr(e)){const l=pt(e,t,!0);return n&&zn(l,n),Mt>0&&!i&&ge&&(l.shapeFlag&6?ge[ge.indexOf(e)]=l:ge.push(l)),l.patchFlag=-2,l}if(Bo(e)&&(e=e.__vccOpts),t){t=Co(t);let{class:l,style:u}=t;l&&!G(l)&&(t.class=ke(l)),z(u)&&(Wn(u)&&!O(u)&&(u=se({},u)),t.style=Fn(u))}const o=G(e)?1:Pr(e)?128:Mi(e)?64:z(e)?4:B(e)?2:0;return M(e,t,n,s,r,o,i,!0)}function Co(e){return e?Wn(e)||mr(e)?se({},e):e:null}function pt(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:u}=e,p=t?Ao(r||{},t):r,a={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Or(p),ref:t&&t.ref?n&&i?O(i)?i.concat(Nt(t)):[i,Nt(t)]:Nt(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ye?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&pt(e.ssContent),ssFallback:e.ssFallback&&pt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&s&&kn(a,u.clone(a)),a}function qe(e=" ",t=0){return He(on,null,e,t)}function xo(e="",t=!1){return t?(Z(),zt(Ge,null,e)):He(Ge,null,e)}function Me(e){return e==null||typeof e=="boolean"?He(Ge):O(e)?He(ye,null,e.slice()):Mr(e)?Ke(e):He(on,null,String(e))}function Ke(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:pt(e)}function zn(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(O(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),zn(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!mr(t)?t._ctx=Oe:r===3&&Oe&&(Oe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:Oe},n=32):(t=String(t),s&64?(n=16,t=[qe(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ao(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=ke([t.class,s.class]));else if(r==="style")t.style=Fn([t.style,s.style]);else if(Gt(r)){const i=t[r],o=s[r];o&&i!==o&&!(O(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function Pe(e,t,n,s=null){Ie(e,t,7,[n,s])}const So=pr();let Do=0;function To(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||So,i={uid:Do++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vr(s,r),emitsOptions:Tr(s,r),emit:null,emitted:null,propsDefaults:K,inheritAttrs:s.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=po.bind(null,i),e.ce&&e.ce(i),i}let le=null,Jt,Mn;{const e=en(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Jt=t("__VUE_INSTANCE_SETTERS__",n=>le=n),Mn=t("__VUE_SSR_SETTERS__",n=>Ot=n)}const It=e=>{const t=le;return Jt(e),e.scope.on(),()=>{e.scope.off(),Jt(t)}},ms=()=>{le&&le.scope.off(),Jt(null)};function Br(e){return e.vnode.shapeFlag&4}let Ot=!1;function Po(e,t=!1,n=!1){t&&Mn(t);const{props:s,children:r}=e.vnode,i=Br(e);Zi(e,s,i,t),so(e,r,n||t);const o=i?Eo(e,t):void 0;return t&&Mn(!1),o}function Eo(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Wi);const{setup:s}=n;if(s){$e();const r=e.setupContext=s.length>1?Oo(e):null,i=It(e),o=Bt(s,e,0,[e.props,r]),l=Bs(o);if(Ve(),i(),(l||e.sp)&&!At(e)&&cr(e),l){if(o.then(ms,ms),t)return o.then(u=>{bs(e,u)}).catch(u=>{nn(u,e,0)});e.asyncDep=o}else bs(e,o)}else Ir(e)}function bs(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:z(t)&&(e.setupState=tr(t)),Ir(e)}function Ir(e,t,n){const s=e.type;e.render||(e.render=s.render||Be);{const r=It(e);$e();try{Ki(e)}finally{Ve(),r()}}}const Mo={get(e,t){return te(e,"get",""),e[t]}};function Oo(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Mo),slots:e.slots,emit:e.emit,expose:t}}function Jn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(tr(_i(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in St)return St[n](e)},has(t,n){return n in t||n in St}})):e.proxy}function Bo(e){return B(e)&&"__vccOpts"in e}const ct=(e,t)=>yi(e,t,Ot),Io="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let On;const vs=typeof window<"u"&&window.trustedTypes;if(vs)try{On=vs.createPolicy("vue",{createHTML:e=>e})}catch{}const Rr=On?e=>On.createHTML(e):e=>e,Ro="http://www.w3.org/2000/svg",qo="http://www.w3.org/1998/Math/MathML",Fe=typeof document<"u"?document:null,ws=Fe&&Fe.createElement("template"),Fo={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?Fe.createElementNS(Ro,e):t==="mathml"?Fe.createElementNS(qo,e):n?Fe.createElement(e,{is:n}):Fe.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Fe.createTextNode(e),createComment:e=>Fe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Fe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{ws.innerHTML=Rr(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=ws.content;if(s==="svg"||s==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Lo=Symbol("_vtc");function Ho(e,t,n){const s=e[Lo];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ys=Symbol("_vod"),$o=Symbol("_vsh"),Vo=Symbol(""),No=/(^|;)\s*display\s*:/;function jo(e,t,n){const s=e.style,r=G(n);let i=!1;if(n&&!r){if(t)if(G(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&jt(s,l,"")}else for(const o in t)n[o]==null&&jt(s,o,"");for(const o in n)o==="display"&&(i=!0),jt(s,o,n[o])}else if(r){if(t!==n){const o=s[Vo];o&&(n+=";"+o),s.cssText=n,i=No.test(n)}}else t&&e.removeAttribute("style");ys in e&&(e[ys]=i?s.display:"",e[$o]&&(s.display="none"))}const Cs=/\s*!important$/;function jt(e,t,n){if(O(n))n.forEach(s=>jt(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Uo(e,t);Cs.test(n)?e.setProperty(it(s),n.replace(Cs,""),"important"):e[s]=n}}const xs=["Webkit","Moz","ms"],vn={};function Uo(e,t){const n=vn[t];if(n)return n;let s=ze(t);if(s!=="filter"&&s in e)return vn[t]=s;s=qs(s);for(let r=0;r<xs.length;r++){const i=xs[r]+s;if(i in e)return vn[t]=i}return t}const As="http://www.w3.org/1999/xlink";function Ss(e,t,n,s,r,i=Yr(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(As,t.slice(6,t.length)):e.setAttributeNS(As,t,n):n==null||i&&!Ls(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Xe(n)?String(n):n)}function Ds(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Rr(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,u=n==null?e.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ls(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function Wo(e,t,n,s){e.addEventListener(t,n,s)}function Ko(e,t,n,s){e.removeEventListener(t,n,s)}const Ts=Symbol("_vei");function ko(e,t,n,s,r=null){const i=e[Ts]||(e[Ts]={}),o=i[t];if(s&&o)o.value=s;else{const[l,u]=Qo(t);if(s){const p=i[t]=Jo(s,r);Wo(e,l,p,u)}else o&&(Ko(e,l,o,u),i[t]=void 0)}}const Ps=/(?:Once|Passive|Capture)$/;function Qo(e){let t;if(Ps.test(e)){t={};let s;for(;s=e.match(Ps);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):it(e.slice(2)),t]}let wn=0;const Yo=Promise.resolve(),zo=()=>wn||(Yo.then(()=>wn=0),wn=Date.now());function Jo(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ie(Go(s,n.value),t,5,[s])};return n.value=e,n.attached=zo(),n}function Go(e,t){if(O(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Es=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Xo=(e,t,n,s,r,i)=>{const o=r==="svg";t==="class"?Ho(e,s,o):t==="style"?jo(e,n,s):Gt(t)?In(t)||ko(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Zo(e,t,s,o))?(Ds(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ss(e,t,s,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!G(s))?Ds(e,ze(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Ss(e,t,s,o))};function Zo(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Es(t)&&B(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Es(t)&&G(n)?!1:t in e}const el=se({patchProp:Xo},Fo);let Ms;function tl(){return Ms||(Ms=io(el))}const nl=(...e)=>{const t=tl().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=rl(s);if(!r)return;const i=t._component;!B(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,sl(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function sl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function rl(e){return G(e)?document.querySelector(e):e}const be=[{question:`关于Brooks提及的软件开发本质难题，下列说法中不准确的是（ 多选 ）

A : 本质难题总共有四个，分别为复杂、不可见、可变和质量挑战
B : 既然是本质难题，那就说明是根植于软件开发本身，因此是不可能在软件开发当中得到缓解
C : 严格来说，只有不可见才是真正的“本质”难题，其他三个因项目差异
D : 四大本质难题贯穿软件发展的不同历史阶段，但是在不同历史阶段，相互凸显程度不一样
`,answer:"AB"},{question:`下列软件应用和开发的典型特征中属于软硬件一体化阶段的是（ 多选 ）

A : 可以通过引入操作系统，摆脱了硬件束缚：软件成为独立的产品
B : 几乎不需要考虑 需求变更
C : 缺乏科班的软件工程师
D : 系统兼容对应软件开发的成败非常关键：软件成为独立的产品
`,answer:"BC"},{question:`下列名词和术语中不属于软件过程的是有哪些（ 多选 ）

A : SCRUM
B : CMM/CMMI
C : GATE方法
D : IDEAL
`,answer:"BD"},{question:`CMM的创始人是哪位?

A : Boehm
B : Juran
C : Humphrey
D : Crosby
`,answer:"C"},{question:`XP规定开发人员每周工作时间不超过___小时，连续加班不可以超过两周，以免降低生产率？

A : 30
B : 40
C : 50
D : 60
`,answer:"B"},{question:`下列不属于看板方法典型实践的是?（多选）

A : 可视化工作流
B : 站立式会议
C : 限定WIP
D : 重构
`,answer:"BD"},{question:`完成一份完整的项目日程计划，需要下列哪些信息?（多选）

A : 任务清单
B : 任务顺序
C : 质量要求
D : 人员资源水平
`,answer:"ABD"},{question:`在TSP的团队组建过程中，确定软件开发策略的是第几次会议?

A : 第一次
B : 第二次
C : 第三次
D : 第四次
`,answer:"C"},{question:`下列关于挣值管理方法的描述中错误的是?

A : 这是一种可以用来跟踪项目预算消耗的方法
B : 这种方法高度依赖估算准确性
C : 这种方法可以支持质量管理
D : 这种方法可以用来跟踪项目进度
`,answer:"C"},{question:`下列描述当中，属于过程经理的工作内容有哪些（多选）

A : 建立团队的开发标准
B : 主持项目周例会
C : 记录周例会的会议记录
D : 制定开发计划
`,answer:"AC"},{question:`为了制定Schedule plan，下述描述中，哪一项是不需要的？

A : Task size
B : Task Order
C : Schedule Hour
D : Task hour for each task
`,answer:"A"},{question:`有了Task Order、Schedule Hour、Task hour for each task，还需要补充下述哪一项数据就可以定义Schedule Plan了？

A : Task List
B : Plan Value
C : Earned Value
D : Nothing
`,answer:"A"},{question:`下列术语描述的技术或者方法是同类型的是?（ 多选 ）

A : CMMI、SPICE、PDCA
B : IDEAL、XP、SCRUM
C : Cleanroom、Gate、TSP
D : Waterfall、SCRUM、XP
`,answer:"CD"},{question:`“Measure twice, cut once” 描述的是下述哪个软件开发场景

A : 软件设计
B : 代码评审
C : 需求开发
D : V&V
`,answer:"B"},{question:` 整体来看，我们可以把软件的发展分为三大阶段，以下不属于三大主要阶段的是

A : 软硬件一体化； (1950s - 1970s)
B : 网络化和服务化； (1970s - 1990s)
C : 云计算化和云原生
D : 软件成为独立产品；(1990s - )
`,answer:"C"},{question:`以下描述中，不属于软件开发本质困难或者本质挑战的是

A : 质量难题
B : 复杂性
C : 不可见性
D : 一致性
`,answer:"A"},{question:`以下描述中，哪一种实践是软硬件一体化阶段的典型实践

A : Code and Fix
B : 迭代式开发
C : 瀑布生命周期模型
D : 成熟度模型
`,answer:"A"},{question:`对比TSP和SCRUM，下列说法不恰当的是（多选）

A : 都是过程框架，需要填补具体实践之后才是一个可以工作的过程
B : 一种是计划驱动方法，另外一种是敏捷方法
C : SCRUM适合迭代式场景，TSP适合瀑布场景
D : 两种方法都需要进行度量数据收集、分析，从而支持管理决策
`,answer:"BC"},{question:`以下特征适用麦克勒格Y理论（McGregors Theory Y）激励的场合是

A : 关注工作环境，薪金等
B : 更喜欢经常的指导，避免承担责任，缺乏主动性 
C : 自我中心，对组织需求反应淡漠，反对变革 
D : 能够自我约束，自我导向与控制，渴望承担责任
`,answer:"D"},{question:`以下关于马斯洛的需求层次理论描述不正确的是：（多选）

A : 自我实现是寻求自尊（Esteem）
B : 激励来自为没有满足的需求而努力奋斗
C : 低层次的需求必须在高层次需求满足之前得到满足
D : 满足高层次的需求的途径比满足低层次的途径更少
`,answer:"AD"},{question:`以下关于团队动力学的论述，不恰当的是？

A : 马斯洛的需求层次理论可以用来更好地维持激励水平
B : 智力工作的激励方式中，应该尽可能使用鼓励承诺这种方式
C : 麦克勒格的X理论适合用马斯洛底层需求激励
D : 海兹伯格的激励理论区分为内在因素和外在因素两种
`,answer:"A"},{question:`下列关于挣值管理方法的描述中正确的是（ 多选 ）

A : 挣值管理中进度的计算可以区分悲观和乐观两种方式
B : 挣值管理的简单、中级和高级实现三种方式中，只有高级实现才会涉及成本因素
C : 挣值管理与项目类型无关
D : 挣值管理不适用与需求频繁变更的软件项目管理中
`,answer:"ABC"},{question:`下述关于WBS的描述中，哪些说法不正确的？ 

A : WBS应该对应OBS 
B : WBS提供了范围管理的基础 
C : WBS工作分解最底层的要素是实现目标的充分必要条件 
D : WBS分解的时候，同一层不能应用不同标准
`,answer:"A"},{question:`下述关于EVM的描述中，哪些说法不正确的？ 

A : EVM不适用于质量管理 
B : EVM的中级实现中引入成本信息 
C : EVM高度依赖估算准确 
D : EVM可以适应需求变更
`,answer:"B"},{question:`关于PSP质量管理策略，下列说法中正确的是（ 多选 ）

A : 用缺陷管理替代质量管理，既有必要性，也有合理性
B : 基本无缺陷的开发是通过开展高质量的评审来实现的
C : 经过训练，评审是所有消除缺陷的手段当中最高效的
D : PSP质量策略主要解决的是外部质量，而非内部质量
`,answer:"ABD"},{question:`关于DRL，下列说法中不正确的是（ 多选 ）

A : 这是一种模块级开发中质量控制的指标 
B : DRL以单元测试每小时发现缺陷率作为基准，考察上游其他缺陷消除阶段的消除效率
C : DRL以单元测试发现的缺陷个数作为基准，考察上游其他缺陷消除阶段消除缺陷的效率
D : DRL只能预测，不能度量
`,answer:"CD"},{question:`关于PQI，下列说法中不正确的是（ 多选 ）

A : PQI表征模块级别开发中的过程规范化程度
B : PQI越高越好，可以充分保障质量
C : PQI越低越好
D : PQI不能用作质量规划
`,answer:"BCD"},{question:`关于PQI，下列说法中正确的是（ 多选 ）

A : PQI可以辅助判断模块开发质量 
B : PQI可以提供过程改进的依据 
C : PQI确保大于1，从而确保开发质量
D : PQI只能预测，不能度量
`,answer:"AB"},{question:`关于Yield，下列说法中正确的是（ 多选 ）

A : Yield可以辅助判断模块开发质量
B : Yield可以提供过程改进的依据 
C : Yield区分为Process Yield和Phase Yield
D : Yield只能预测，不能度量
`,answer:"ABCD"},{question:`关于评审速度，下列说法中正确的是

A : 进行代码评审的时候，控制评审速度不超过每小时1000LOC就能实现大部分质量要求
B : 实战中，评审速度应该根据资源水平而定，时间充分就评审慢一些
C : 文档评审速度应该控制每小时不超过4页
D : 评审速度与人的技能有关，技能强的人可以突破 每小时1000 LOC代码这个限制
`,answer:"C"},{question:`关于Humphrey 梳理的Quality Journey，下列说法中正确的是？（多选）

A : Quality Journey中列出的步骤可以在适当的时候更换顺序
B : 由于需求是一切工程活动的基础，因此加强需求开发应该是Quality Journey早期的必备步骤
C : Quality Journey仍然仅仅是在“用缺陷管理替代质量管理”这一基本策略之下进行讨论
D : Quality Journey中测试应该先于评审得到贯彻和改善
`,answer:"CD"},{question:`下述设计模板中用来记录内部动态信息的是

A : OST
B : SST
C : LST
D : FST
`,answer:"B"},{question:`下述关于PSP四大设计模板和UML典型设计图 的描述中完全正确的是

A : OST在UML中没有对应的设计图
B : UML中的类结构以及类之间的关系，在PSP四大设计模板中无法体现
C : LST在UML中可以通过类图来体现
D : FST在UML中可以通过类图来体现
`,answer:"B"},{question:` 一个完全正确的状态机应该满足（ 多选 ）

A : 没有死循环和陷阱
B : 状态转化条件满足正交性
C : 状态转化条件满足完整性
D : 状态转化条件满足独立性
`,answer:"ABC"},{question:`下列关于各种设计验证手段的描述中正确的是?

A : 执行表是唯一一种提供全面设计验证的手段
B : 跟踪表是唯一一种提供全面设计验证的手段
C : 受限于手工方式，都易于出错
D : 符号化执行验证不适合复杂的计算过程
`,answer:"C"},{question:`关于使用程序正确性证明手段验证while-do循环设计的描述中，正确的是?（多选）

A : 如果设计是正确的，那么应满足的条件之一是循环判断条件最后一定可以变为false
B : 如果设计是正确的，那么应满足的条件之一是循环判断条件为真的时候，单独的循环结构执行结果与 循环体再加一个循环结构，其执行结果一致
C : 如果设计是正确的，那么应满足的条件之一是循环判断条件为false的时候，循环体内所有变量不能被 修改
D : 该方法并不能保证循环体算法实现设计意图
`,answer:"ABCD"},{question:`下面描述属于典型客户需求的是（多选）

A : 客户期望
B : 预算限制
C : 法律法规限制
D : 系统功能描述
`,answer:"ABC"},{question:`在团队设计活动中，应该注意设计标准，下列属于典型的设计标准应该约定的是？（多选）

A : 命名规范
B : 接口标准
C : 出错或者异常处理信息
D : 设计表示方式
`,answer:"ABCD"},{question:`典型地，在团队设计活动中，应该注意哪些内容？（多选）

A : 设计标准的应用
B : 复用的考虑
C : 可测试性支持
D : 可用性支持
`,answer:"ABCD"},{question:`关于集成策略，下述描述中正确的是（ 多选 ）

A : 当待集成组件质量普遍不高的时候，不可以使用扁平化策略
B : 当需要尽早获取可以工作的组件的时候， 应该使用集簇式策略
C : 当待集成组件质量普通较高的时候，可以使用大爆炸式集成策略
D : 持续集成本质上就是逐一添加策略
`,answer:"BCD"},{question:`当考虑集成策略的时候，应该注意如下哪些方面？（多选）

A : 待集成组件的质量状态
B : 待集成组件的获取方式
C : 待集成组件的功能和关系
D : 待集成组件的数量
`,answer:"ABCD"},{question:`关于扁平化集成策略和集簇式集成策略，下述说法中正确的是？（多选）

A : 扁平化策略可以较早地充分地暴露系统级别的错误
B : 扁平化策略对于系统级别错误的暴露能力有限
C : 集簇式集成策略有助于复用策略的实现
D : 扁平化策略和集簇式策略的优缺点正好相反
`,answer:"BC"},{question:`下述活动是典型的验证（Verification）的是（多选）

A : 需求评审
B : 详细设计评审
C : 单元测试
D : 试运行
`,answer:"BC"},{question:`下述活动是典型的确认（Validation）的是

A : 验收测试
B : 代码评审
C : 系统测试
D : 持续集成
`,answer:"A"},{question:`下述产物中属于典型的确认（Validation）对象的是？（多选）

A : 接口设计文档
B : 源代码
C : 用户手册
D : 系统使用培训材料（视频、录像等）
`,answer:"BCD"},{question:`下述关于需求开发的描述中，哪些是正确的？（多选）

A : 客户需求是指客户提出的关于软件功能的具体要求
B : 工期或者预算往往都是客户需求的一个方面
C : 产品需求需要跟客户充分讨论才能获取 
D : 客户应该在需求开发活动中起到主导作用
`,answer:"BC"},{question:`下述产物中属于典型的配置项是（多选）

A : 接口设计文档
B : 源代码
C : 用户手册
D : 系统使用培训材料（视频、录像等）
`,answer:"ABCD"},{question:`团队内部的配置审计通常应该关注什么（ 多选 ）

A : 物理审计
B : 配置项列表
C : 配置管理记录
D : 基线计划
`,answer:"BC"},{question:`下列关于决策分析的论述中，不恰当的是?（多选）

A : 决策分析指南中最关键的是明确需要开展决策分析活动的判定标准，即什么场合之下需要开展正式的决策分析活动
B : 评价方法是体现决策者利益诉求的关键，因此，需要谨慎设计
C : 候选方案的识别应该晚于于评价标准
D : 现实生活中的项目投标就是一个典型的决策分析活动
`,answer:"BD"},{question:`下列关于根因分析的论述中，不恰当的是（ 多选 ）

A : 根因分析必须基于丰富的数据来选择合适的问题
B : 鱼骨图是根因分析的有效手段
C : 典型地，可以从技术、人员、培训以及过程角度开展根因分析
D : 根因分析活动终止的唯一特征就是找到相应的根因的明确解决方案
`,answer:"AD"}],yn=[{question:"简述软件发展三大阶段以及典型的开发方法",answer:`1. 软硬件一体化：线性顺序过程，事实上是硬件开发流程
2. 软件成为独立产品：结构化程序设计、瀑布模型、成熟度运动
3. 网络化和服务化：迭代式开发、敏捷运动`},{question:"简述软件项目管理和软件过程管理",answer:`软件项目管理：应用工具、方法、技术以及人员能力来完成软件项目，实现项目目标的过程
软件过程管理：让软件过程在开发效率、质量等方面有更好的性能绩效`},{question:"简述生命周期模型和软件过程的区别与联系",answer:`1. 生命周期模型是对一个软件过程的人为划分
2. 生命周期模型是软件开发过程的框架，是对软件开发过程的粗粒度划分
3. 生命周期模型往往不包含技术实践`},{question:"简述如何理解瀑布模型",answer:`瀑布模型不是单一的模型而是一系列模型，覆盖最简单到最复杂场景
软件项目应该结合实际情况选择合适过程元素的瀑布模型`},{question:"请描述CMMI模型的5个等级的特征，解释为什么CMMI模型不应该是敏捷方法的对立面？四五级和普通等级的区别是什么？",answer:`五个等级特征：
1. 原始级别：开发相对混乱，没有过程概念
2. 已管理级别：项目小组体现出项目管理的特征，有项目计划、需求管理等过程
3. 已定义级别：公司层面有标准流程和相应规范，每个小组可以基于此定义自己的过程
4. 定量管理级别：构建预测模型，以统计过程控制的手段来管理过程
5. 优化级：继续识别过程偏差，找到问题根源并消除，避免未来继续出错
原因：
CMMI是过程管理/改进模型，而大部分敏捷方法都是开发方法，两者性质完全不同，因此不是对立的。
区别：
普通等级关注的都是当前的状态，而四五级是根据结果（未来）进行管理。`},{question:"请分别简述PDCA模型和IDEAL模型的主要步骤",answer:`PDCA模型：
分析现状，找出问题→分析影响质量的原因→找出措施→拟定计划→执行措施与计划→检查效果，发现问题→总结经验纳入标准→遗留问题传入下一个PDCA循环
IDEAL模型：
I: 开始（Initiating）D: 诊断（Diagnosing） E: 建立（Establishing）A: 执行（Acting）L: 调整（Leveraging）
`},{question:"请简述敏捷宣言的四个价值观",answer:`个体和互动胜过流程和工具
可以工作的软件胜过详尽的文档
客户合作胜过合同谈判
响应变化胜过遵循计划`},{question:"敏捷方法的特征有哪些？哪些关于敏捷方法的特征表述可能带有误导？为什么？",answer:`特征：
小周期迭代式、持续交付、敏捷宣言
带有误导的表述：
1. 轻量级方法：事实上，敏捷方法对工程规范有着极为严格的要求，很难说就是轻量级方法。
2. 拥抱变更、变更驱动：仅仅是个口号，对待变更，所有软件工程方法都是限制和管理的态度。
3. 测试驱动开发（TDD）可以提高开发质量：并没有足够的证据支持这一说法。`},{question:"简要描述按照通用计划框架，为了开发合理的项目计划，应该要做哪些估算？PROBE方法充当什么角色？",answer:`应该要做规模估算、时间估算、日程估算；
PROBE方法充当精确度量与早期规划的桥梁`},{question:"谈谈你对项目估算的认识，并简述应用PROBE方法估算的优缺点。",answer:`规模估算往往可以根据历史数据来完成；而时间估算的偏差产生原因很复杂，历史数据参考价值不大。
估算本质上是一种猜测，追求的目标是一致性以及估算结果的使用者对估算结果的信心。
优缺点：
优点：PROBE方法通过定义的估算过程和数据收集以及使用的框架，使得估算结果尽可能一致，增强用户对估算结果的信心。
缺点：这种方法非常依赖高质量的历史数据，一旦数据不完整就可能导致估算结果有显著偏差。`},{question:"简述软件项目规模估算的基本要点",answer:`1. 尽可能划分详细一些
2. 建立对结果的信心
3. 依赖数据
4. 估算要的是过程而非结果`},{question:"请描述一下PROBE方法的基本原理和过程，并简述为什么不使用历史数据中的生产效率数据？",answer:`估算的基本原理：
1. 设立合理的代理作为精确度量与早期规划之间的桥梁
2. 相对大小而非绝对大小
估算的过程：
概要设计→代理识别和代理规模→估算并调整程序规模、资源→计算预测区间
理由：
在估算资源需求时，生产效率一般在分母上，考虑个体软件工程师的生产效率差异，容易导致估算偏差范围变大。
`},{question:"简述基于Yield指标构建缺陷预测模型的步骤以及可能的改进方案。",answer:`步骤：
确定纳入影响因子的数据以及数据度量方法→收集并整理历史数据→依照回归技术进行计算→
项目进行过程中不断收集数据，与预测数据比较，调整回归参数→进行风险的识别、预防和控制
可能的改进方案：
假设注入水平和消除水平都符合正态分布，计算均值和标准差，可以用蒙特卡洛方法模拟结果。`},{question:"请简述DevOps的三个步骤",answer:`1. 实现开发到运维的工作快速地从左向右流动
2. 从右向左的每个阶段，采用持续、快速的工作反馈机制
3. 建立具有创意和高可信度的企业文化，支持动态、严格、科学的实验`},{question:"简述DevOps的特点以及为什么流行",answer:`1. 敏捷团队项目管理：增强网站和移动应用软件开发的管理
2. 软件开发过程的优化：通过持续集成和持续交付功能实现，使用自动版本控制系统简化了代码升级
3. 促进协作：Git允许开发人员在具有订单项回滚能力的团队中进行协作
4. 通过自动化提高效率：借助CI/CD工具自动化的管理软件开发的生命周期`},{question:"简述DevOps的技术、实践",answer:`开发运维一体化；领域驱动设计为指导的微服务框架；大量虚拟化技术的使用；强大的工具链支持高水平自动化
实践：
培养协作和无责沟通的文化；采用CI/CD；使用自动化避免手动工作；在开发生命周期的早期加入安全性`},{question:"简述A/FR、PQI的计算方式以及这两个指标的用途。",answer:`A/FR：质检失效比
A/FR = 质检成本 / 失效成本 = （设计评审时间 + 代码评审时间）/ （编译时间 + 单元测试时间）
用途：理论上，A/FR的值越大意味质量更高，但他过大说明评审过多，开发效率低下
PQI：过程质量指标
PQI = 设计质量 * 设计评审质量 * 代码质量 * 代码评审质量 * 程序质量
用途：判断模块开发质量；规划质量活动计划；过程改进`},{question:"请结合A/FR、PQI、Review Rate、DRL、Yield尽可能具体描述一个软件项目应该如何从多方面来确保开发的高质量？",answer:`1. 按照A/FR、PQI等指标要求，安排个人评审与小组评审
2. 评审时间应多于测试时间两倍以上（A/FR）；评审速度要求（Review Rate）
3. 利用Yield指标构建质量预测模型，更加积极地判断和控制开发质量
4. 依据PQI和Yield指标所体现的信息，通过过程改进来提高开发质量`},{question:"如果对质量的追求是无止境的，在不考虑资源和成本的前提下，有哪些可能有效的策略？",answer:`1. 重视测试以及测试过程的文档化
2. 重视小组评审与个人评审
3. 重视设计
4. 开展设计验证`},{question:"简述需求开发的完整过程，并解释客户需求和产品需求各自含义",answer:`需求开发过程：
需求获取、需求汇总、需求验证、需求文档制作
客户需求：描述客户的期望。往往表现为客户在实际工作中遇到一些具体问题，希望通过某个东西帮忙解决这些问题。
产品需求：描述开发团队针对客户需求提供的解决方案。`},{question:"请解释在质量保障活动中的V&V分别是什么含义？二者之间的关系是什么？",answer:`含义：
验证（Verification） & 确认（Validation）
验证是确保选定的工作产品与事先给定的需求一致；确认是确保开发完成的产品在即将使用该产品的环境中工作正确。
二者的关系：
验证与确认是相互依存的两个活动，都是为了提升最终产品质量而采取的措施。
验证的依据来源于确认的目标；验证活动为确认活动提供了前提条件。`},{question:"如何制定一份让人无法拒绝的计划？请描述剧本步骤和一些注意事项。",answer:`1. 制定任务计划，描述项目所有的任务清单，人物之间的先后顺序以及每个任务所需时间资源。
2. 制定日程计划，描述各个任务在日程上的安排
3. 制定资源计划
4. 制定日程计划过程中，除了概要设计和资源估算外，其他环节尽可能自动化完成，充分参考历史数据进行估算。
`},{question:"挣值管理有三种实现方式，分别是简单、中级和高级，分别阐述上述三种方式的要点",answer:`1. 简单实现：仅关注进度信息。首先建立WBS，定义工作范围；其次为每一项工作定义计划价值（PV）；最后按照规则将某一数值赋值给已完成的工作，该值成为挣值（EV）。
2. 中级实现：在简单实现基础上加入日程偏差的计算。日程偏差 SV = EV - PV； 日程偏差指数 SPI = EV / PV
3. 高级实现：加入成本线（AC）、预测线（BAC），当任务足够多时，让预测线尽可能平直，同时延伸挣值线，找到与预测线的交点，就可以明确项目的落后时间。`},{question:"请结合软件开发的特点介绍软件项目管理中自主性团队的必要性以及自主团队应该具备的特征。",answer:`软件开发是一种智力活动，开发者是智力劳动者，对于智力劳动者而言，管理的第一准则就是智力劳动者不能被管理而是实现自我管理。
自主性团队的特征：
1. 自行定义项目的目标2. 自行决定团队组成形式以及成员角色
3. 自行决定项目的开发策略
4. 自行定义项目的开发过程
5. 自行制定项目的开发计划
6. 自行度量、管理和控制项目工作`},{question:"结合“软件开发作为一种知识工作，需要领导者而不是一般的经理”这句话，阐述知识工作领导者应具备的品质或特点",answer:`1. 善于倾听团队成员的想法并加以分析和改进
2. 善于通过询问来诱导团队成员向正确的方向前进
3. 善于通过激励以及设定目标等方式吸引团队成员努力表现
4. 出现分歧时，善于沟通促成一致意见
`},{question:"列出TSP角色并解释他们的职责",answer:`1. 项目组长：建设和维持高效率团队；激励团队成员工作；处理团队成员问题；充当会议组织者和协调者
2. 计划经理：开发完整准确的团队计划和个人计划；每周准确报告小组状态
3. 开发经理：开发优秀的软件产品；充分利用团队成员的技能
4. 质量经理：带领团队开发和跟踪质量计划；向项目组长警示质量问题；协调和组织小组评审
5. 过程经理：带领成员记录和跟踪过程数据并支持过程改进
6. 支持经理：提供合适的工具和环境；主持配置管理委员会
7. 开发人员：负责软件产品的开发`}],Gn=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},il={},ol={t:"1749733532145",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"43898",width:"64",height:"64"};function ll(e,t){return Z(),ue("svg",ol,t[0]||(t[0]=[M("path",{d:"M753.777778 625.777778c0-116.622222-82.488889-213.333333-190.577778-236.088889 0-5.688889 0-8.533333-2.844444-14.222222l-22.755556-42.666667V122.311111c0-14.222222-11.377778-22.755556-22.755556-22.755555s-22.755556 11.377778-22.755555 22.755555v213.333333l-22.755556 42.666667c-2.844444 2.844444-2.844444 8.533333-2.844444 14.222222-108.088889 22.755556-190.577778 119.466667-190.577778 236.088889 0 14.222222 11.377778 22.755556 22.755556 22.755556h96.711111c11.377778 56.888889 62.577778 102.4 122.311111 102.4 59.733333 0 110.933333-42.666667 122.311111-102.4h96.711111c5.688889-2.844444 17.066667-11.377778 17.066667-25.6zM512 705.422222c-34.133333 0-65.422222-22.755556-73.955556-54.044444h147.911112c-8.533333 31.288889-39.822222 54.044444-73.955556 54.044444z m-193.422222-102.4c11.377778-96.711111 93.866667-170.666667 193.422222-170.666666s182.044444 73.955556 193.422222 170.666666H318.577778zM318.577778 742.4l-45.511111 45.511111c-11.377778 11.377778-11.377778 28.444444 0 39.822222 11.377778 11.377778 28.444444 11.377778 39.822222 0l45.511111-45.511111c11.377778-11.377778 11.377778-28.444444 0-39.822222-8.533333-11.377778-28.444444-11.377778-39.822222 0zM750.933333 790.755556l-45.511111-45.511112c-11.377778-11.377778-28.444444-11.377778-39.822222 0-11.377778 11.377778-11.377778 28.444444 0 39.822223l45.511111 45.511111c11.377778 11.377778 28.444444 11.377778 39.822222 0s11.377778-28.444444 0-39.822222zM512 802.133333c-17.066667 0-28.444444 14.222222-28.444444 28.444445v65.422222c0 17.066667 14.222222 28.444444 28.444444 28.444444 17.066667 0 28.444444-14.222222 28.444444-28.444444v-65.422222c0-17.066667-11.377778-28.444444-28.444444-28.444445z","p-id":"43899",fill:"#ffffff"},null,-1)]))}const cl=Gn(il,[["render",ll]]),fl={},ul={t:"1749733532145",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"43898",width:"64",height:"64"};function al(e,t){return Z(),ue("svg",ul,t[0]||(t[0]=[M("path",{d:"M753.777778 625.777778c0-116.622222-82.488889-213.333333-190.577778-236.088889 0-5.688889 0-8.533333-2.844444-14.222222l-22.755556-42.666667V122.311111c0-14.222222-11.377778-22.755556-22.755556-22.755555s-22.755556 11.377778-22.755555 22.755555v213.333333l-22.755556 42.666667c-2.844444 2.844444-2.844444 8.533333-2.844444 14.222222-108.088889 22.755556-190.577778 119.466667-190.577778 236.088889 0 14.222222 11.377778 22.755556 22.755556 22.755556h96.711111c11.377778 56.888889 62.577778 102.4 122.311111 102.4 59.733333 0 110.933333-42.666667 122.311111-102.4h96.711111c5.688889-2.844444 17.066667-11.377778 17.066667-25.6zM512 705.422222c-34.133333 0-65.422222-22.755556-73.955556-54.044444h147.911112c-8.533333 31.288889-39.822222 54.044444-73.955556 54.044444z m-193.422222-102.4c11.377778-96.711111 93.866667-170.666667 193.422222-170.666666s182.044444 73.955556 193.422222 170.666666H318.577778zM318.577778 742.4l-45.511111 45.511111c-11.377778 11.377778-11.377778 28.444444","p-id":"43899",fill:"#ffffff"},null,-1)]))}const dl=Gn(fl,[["render",al]]),hl={class:"header"},pl={class:"tab-container"},gl={key:0},_l={key:0,class:"question-container"},ml={class:"question-content"},bl={class:"options-container"},vl=["onClick"],wl={class:"option-letter"},yl={class:"option-text"},Cl={class:"controls"},xl=["disabled"],Al={key:1,class:"result-container"},Sl={class:"score-circle"},Dl={class:"score-text"},Tl={key:0,class:"incorrect-questions"},Pl={key:1,class:"short-answer-container"},El={class:"short-answer-question"},Ml={class:"short-answer-answer"},Ol={class:"controls"},Bl=["disabled"],Il=["disabled"],Rl=lr({__name:"Exercise",setup(e){const t=Ue(!1),n=Ue(!1),s=()=>{n.value=!n.value},r=Ue(0),i=ct(()=>yn[r.value]),o=()=>{r.value>0&&r.value--},l=()=>{r.value<yn.length-1&&r.value++},u=Ue([{question:"",userAnswer:"",correctAnswer:""}]),p=F=>{const P=F.split(`
`),N=[],ce=/^([A-Z]) : (.+)$/;for(let me=0;me<P.length;me++){const je=P[me].match(ce);je&&N.push({letter:je[1],text:je[2]})}return N},a=ct(()=>be.map(F=>({...F,options:p(F.question),isMultiple:F.question.includes("多选")}))),h=Ue(0),C=Ue(Array(be.length).fill("")),A=Ue(!1),I=Ue(0);ct(()=>(h.value+1)/be.length*100);const R=ct(()=>a.value[h.value]),X=F=>C.value[h.value].includes(F),$=F=>{const P=C.value[h.value];R.value.isMultiple?P.includes(F)?C.value[h.value]=P.replace(F,""):C.value[h.value]=P+F:C.value[h.value]=F},k=()=>{h.value>0&&h.value--},Q=()=>{h.value<be.length-1&&h.value++},T=()=>{let F=0;const P=[];for(let N=0;N<be.length;N++){const ce=[...C.value[N]].sort().join(""),me=[...be[N].answer].sort().join("");ce===me?F++:P.push({question:be[N].question,userAnswer:ce||"未作答",correctAnswer:me})}I.value=F,u.value=P,A.value=!0},J=()=>{const F=I.value/be.length*100;return F>=90?"太棒了！您已经掌握了这些知识点！":F>=70?"做得很好！继续努力！":F>=50?"不错的尝试！复习一下会更好！":"需要更多练习，加油！"},xe=ct(()=>{const F=I.value/be.length*100;return F>=90?"excellent":F>=70?"good":F>=50?"average":"poor"}),_e=()=>{h.value=0,C.value=Array(be.length).fill(""),A.value=!1,I.value=0};return(F,P)=>(Z(),ue("div",{class:ke(["container",{"dark-mode":n.value}])},[M("div",hl,[n.value?(Z(),zt(dl,{key:1,class:"dark-mode-btn",onClick:s})):(Z(),zt(cl,{key:0,class:"dark-mode-btn",onClick:s})),P[2]||(P[2]=M("h1",null,"软件质量管理",-1)),M("div",pl,[M("button",{class:ke(["tab-btn",{active:!t.value}]),onClick:P[0]||(P[0]=N=>t.value=!1)}," 选择题 ",2),M("button",{class:ke(["tab-btn",{active:t.value}]),onClick:P[1]||(P[1]=N=>t.value=!0)}," 简答题 ",2)])]),t.value?(Z(),ue("div",Pl,[P[14]||(P[14]=M("div",{class:"question-header"},[M("div",{class:"link-container"},[M("a",{href:"https/ziqingchuan.github.io/SSD/",target:"_blank",class:"link-btn"}," 软件系统设计复习网站 ")])],-1)),M("div",El,ve(i.value.question),1),M("div",Ml,[M("p",null,ve(i.value.answer),1)]),M("div",Ol,[M("button",{class:"btn btn-prev",onClick:o,disabled:r.value===0},P[12]||(P[12]=[M("i",{class:"fas fa-arrow-left"},null,-1),qe(" 上一题 ")]),8,Bl),M("button",{class:"btn btn-next",onClick:l,disabled:r.value===$t(yn).length-1},P[13]||(P[13]=[qe(" 下一题 "),M("i",{class:"fas fa-arrow-right"},null,-1)]),8,Il)])])):(Z(),ue("div",gl,[A.value?(Z(),ue("div",Al,[P[11]||(P[11]=M("h2",{class:"result-title"},"测试完成!",-1)),M("div",Sl,[M("div",Dl,ve(I.value)+" / "+ve($t(be).length),1)]),M("div",{class:ke(["feedback",xe.value])},ve(J()),3),u.value.length?(Z(),ue("div",Tl,[P[9]||(P[9]=M("h3",null,"您答错的题目：",-1)),(Z(!0),ue(ye,null,ls(u.value,(N,ce)=>(Z(),ue("div",{key:ce,class:"incorrect-question"},[M("p",null,ve(N.question),1),M("p",null,[P[7]||(P[7]=M("strong",null,"您的答案：",-1)),qe(" "+ve(N.userAnswer),1)]),M("p",null,[P[8]||(P[8]=M("strong",null,"正确答案：",-1)),qe(" "+ve(N.correctAnswer),1)])]))),128))])):xo("",!0),M("button",{class:"restart-btn",onClick:_e},P[10]||(P[10]=[M("i",{class:"fas fa-redo"},null,-1),qe(" 重新测试 ")]))])):(Z(),ue("div",_l,[P[6]||(P[6]=M("div",{class:"question-header"},[M("div",{class:"link-container"},[M("a",{href:"https://ziqingchuan.github.io/SSD/",target:"_blank",class:"link-btn"}," 软件系统设计复习网站 ")])],-1)),M("div",ml,ve(R.value.question.split(`

`)[0]),1),M("div",bl,[(Z(!0),ue(ye,null,ls(R.value.options,(N,ce)=>(Z(),ue("div",{key:ce,class:ke(["option",{selected:X(N.letter)}]),onClick:me=>$(N.letter)},[M("div",wl,ve(N.letter),1),M("div",yl,ve(N.text),1)],10,vl))),128))]),M("div",Cl,[M("button",{class:"btn btn-prev",onClick:k,disabled:h.value===0},P[3]||(P[3]=[M("i",{class:"fas fa-arrow-left"},null,-1),qe(" 上一题 ")]),8,xl),h.value<$t(be).length-1?(Z(),ue("button",{key:0,class:"btn btn-next",onClick:Q},P[4]||(P[4]=[qe(" 下一题 "),M("i",{class:"fas fa-arrow-right"},null,-1)]))):(Z(),ue("button",{key:1,class:"btn btn-finish",onClick:T},P[5]||(P[5]=[qe(" 完成测试 "),M("i",{class:"fas fa-check"},null,-1)])))])]))]))],2))}}),ql=Gn(Rl,[["__scopeId","data-v-663f2264"]]),Fl=lr({__name:"App",setup(e){return(t,n)=>(Z(),zt(ql,{msg:"Vite + Vue"}))}});nl(Fl).mount("#app");
