(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Bn(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const K={},lt=[],Be=()=>{},Fr=()=>!1,Gt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),In=e=>e.startsWith("onUpdate:"),se=Object.assign,Mn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Lr=Object.prototype.hasOwnProperty,H=(e,t)=>Lr.call(e,t),O=Array.isArray,ct=e=>zt(e)==="[object Map]",Es=e=>zt(e)==="[object Set]",B=e=>typeof e=="function",z=e=>typeof e=="string",Je=e=>typeof e=="symbol",k=e=>e!==null&&typeof e=="object",Os=e=>(k(e)||B(e))&&B(e.then)&&B(e.catch),Bs=Object.prototype.toString,zt=e=>Bs.call(e),Hr=e=>zt(e).slice(8,-1),Is=e=>zt(e)==="[object Object]",Rn=e=>z(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,vt=Bn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xt=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Nr=/-(\w)/g,Ke=Xt(e=>e.replace(Nr,(t,n)=>n?n.toUpperCase():"")),Vr=/\B([A-Z])/g,st=Xt(e=>e.replace(Vr,"-$1").toLowerCase()),Ms=Xt(e=>e.charAt(0).toUpperCase()+e.slice(1)),cn=Xt(e=>e?`on${Ms(e)}`:""),We=(e,t)=>!Object.is(e,t),fn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Rs=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},jr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ts;const Zt=()=>ts||(ts=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qn(e){if(O(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=z(s)?Kr(s):qn(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(z(e)||k(e))return e}const $r=/;(?![^(]*\))/g,Ur=/:([^]+)/,Wr=/\/\*[^]*?\*\//g;function Kr(e){const t={};return e.replace(Wr,"").split($r).forEach(n=>{if(n){const s=n.split(Ur);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function tt(e){let t="";if(z(e))t=e;else if(O(e))for(let n=0;n<e.length;n++){const s=tt(e[n]);s&&(t+=s+" ")}else if(k(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Qr="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yr=Bn(Qr);function qs(e){return!!e||e===""}const Fs=e=>!!(e&&e.__v_isRef===!0),de=e=>z(e)?e:e==null?"":O(e)||k(e)&&(e.toString===Bs||!B(e.toString))?Fs(e)?de(e.value):JSON.stringify(e,Ls,2):String(e),Ls=(e,t)=>Fs(t)?Ls(e,t.value):ct(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[un(s,i)+" =>"]=r,n),{})}:Es(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>un(n))}:Je(t)?un(t):k(t)&&!O(t)&&!Is(t)?String(t):t,un=(e,t="")=>{var n;return Je(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let he;class Jr{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=he,!t&&he&&(this.index=(he.scopes||(he.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=he;try{return he=this,t()}finally{he=n}}}on(){++this._on===1&&(this.prevScope=he,he=this)}off(){this._on>0&&--this._on===0&&(he=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function kr(){return he}let W;const an=new WeakSet;class Hs{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,he&&he.active&&he.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,an.has(this)&&(an.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vs(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ns(this),js(this);const t=W,n=Ce;W=this,Ce=!0;try{return this.fn()}finally{$s(this),W=t,Ce=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Hn(t);this.deps=this.depsTail=void 0,ns(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?an.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Cn(this)&&this.run()}get dirty(){return Cn(this)}}let Ns=0,yt,Ct;function Vs(e,t=!1){if(e.flags|=8,t){e.next=Ct,Ct=e;return}e.next=yt,yt=e}function Fn(){Ns++}function Ln(){if(--Ns>0)return;if(Ct){let t=Ct;for(Ct=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;yt;){let t=yt;for(yt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function js(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function $s(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Hn(s),Gr(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function Cn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Us(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Us(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===St)||(e.globalVersion=St,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Cn(e))))return;e.flags|=2;const t=e.dep,n=W,s=Ce;W=e,Ce=!0;try{js(e);const r=e.fn(e._value);(t.version===0||We(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{W=n,Ce=s,$s(e),e.flags&=-3}}function Hn(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Hn(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Gr(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ce=!0;const Ws=[];function He(){Ws.push(Ce),Ce=!1}function Ne(){const e=Ws.pop();Ce=e===void 0?!0:e}function ns(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=W;W=void 0;try{t()}finally{W=n}}}let St=0;class zr{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Nn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!W||!Ce||W===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==W)n=this.activeLink=new zr(W,this),W.deps?(n.prevDep=W.depsTail,W.depsTail.nextDep=n,W.depsTail=n):W.deps=W.depsTail=n,Ks(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=W.depsTail,n.nextDep=void 0,W.depsTail.nextDep=n,W.depsTail=n,W.deps===n&&(W.deps=s)}return n}trigger(t){this.version++,St++,this.notify(t)}notify(t){Fn();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ln()}}}function Ks(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Ks(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const wn=new WeakMap,nt=Symbol(""),xn=Symbol(""),Dt=Symbol("");function te(e,t,n){if(Ce&&W){let s=wn.get(e);s||wn.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new Nn),r.map=s,r.key=n),r.track()}}function Fe(e,t,n,s,r,i){const o=wn.get(e);if(!o){St++;return}const l=u=>{u&&u.trigger()};if(Fn(),t==="clear")o.forEach(l);else{const u=O(e),d=u&&Rn(n);if(u&&n==="length"){const a=Number(s);o.forEach((p,x)=>{(x==="length"||x===Dt||!Je(x)&&x>=a)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),d&&l(o.get(Dt)),t){case"add":u?d&&l(o.get("length")):(l(o.get(nt)),ct(e)&&l(o.get(xn)));break;case"delete":u||(l(o.get(nt)),ct(e)&&l(o.get(xn)));break;case"set":ct(e)&&l(o.get(nt));break}}Ln()}function rt(e){const t=L(e);return t===e?t:(te(t,"iterate",Dt),ve(e)?t:t.map(Z))}function en(e){return te(e=L(e),"iterate",Dt),e}const Xr={__proto__:null,[Symbol.iterator](){return dn(this,Symbol.iterator,Z)},concat(...e){return rt(this).concat(...e.map(t=>O(t)?rt(t):t))},entries(){return dn(this,"entries",e=>(e[1]=Z(e[1]),e))},every(e,t){return Re(this,"every",e,t,void 0,arguments)},filter(e,t){return Re(this,"filter",e,t,n=>n.map(Z),arguments)},find(e,t){return Re(this,"find",e,t,Z,arguments)},findIndex(e,t){return Re(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Re(this,"findLast",e,t,Z,arguments)},findLastIndex(e,t){return Re(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Re(this,"forEach",e,t,void 0,arguments)},includes(...e){return hn(this,"includes",e)},indexOf(...e){return hn(this,"indexOf",e)},join(e){return rt(this).join(e)},lastIndexOf(...e){return hn(this,"lastIndexOf",e)},map(e,t){return Re(this,"map",e,t,void 0,arguments)},pop(){return _t(this,"pop")},push(...e){return _t(this,"push",e)},reduce(e,...t){return ss(this,"reduce",e,t)},reduceRight(e,...t){return ss(this,"reduceRight",e,t)},shift(){return _t(this,"shift")},some(e,t){return Re(this,"some",e,t,void 0,arguments)},splice(...e){return _t(this,"splice",e)},toReversed(){return rt(this).toReversed()},toSorted(e){return rt(this).toSorted(e)},toSpliced(...e){return rt(this).toSpliced(...e)},unshift(...e){return _t(this,"unshift",e)},values(){return dn(this,"values",Z)}};function dn(e,t,n){const s=en(e),r=s[t]();return s!==e&&!ve(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const Zr=Array.prototype;function Re(e,t,n,s,r,i){const o=en(e),l=o!==e&&!ve(e),u=o[t];if(u!==Zr[t]){const p=u.apply(e,i);return l?Z(p):p}let d=n;o!==e&&(l?d=function(p,x){return n.call(this,Z(p),x,e)}:n.length>2&&(d=function(p,x){return n.call(this,p,x,e)}));const a=u.call(o,d,s);return l&&r?r(a):a}function ss(e,t,n,s){const r=en(e);let i=n;return r!==e&&(ve(e)?n.length>3&&(i=function(o,l,u){return n.call(this,o,l,u,e)}):i=function(o,l,u){return n.call(this,o,Z(l),u,e)}),r[t](i,...s)}function hn(e,t,n){const s=L(e);te(s,"iterate",Dt);const r=s[t](...n);return(r===-1||r===!1)&&Un(n[0])?(n[0]=L(n[0]),s[t](...n)):r}function _t(e,t,n=[]){He(),Fn();const s=L(e)[t].apply(e,n);return Ln(),Ne(),s}const ei=Bn("__proto__,__v_isRef,__isVue"),Qs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Je));function ti(e){Je(e)||(e=String(e));const t=L(this);return te(t,"has",e),t.hasOwnProperty(e)}class Ys{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?ai:zs:i?Gs:ks).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=O(t);if(!r){let u;if(o&&(u=Xr[n]))return u;if(n==="hasOwnProperty")return ti}const l=Reflect.get(t,n,ne(t)?t:s);return(Je(n)?Qs.has(n):ei(n))||(r||te(t,"get",n),i)?l:ne(l)?o&&Rn(n)?l:l.value:k(l)?r?Xs(l):jn(l):l}}class Js extends Ys{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];if(!this._isShallow){const u=Qe(i);if(!ve(s)&&!Qe(s)&&(i=L(i),s=L(s)),!O(t)&&ne(i)&&!ne(s))return u?!1:(i.value=s,!0)}const o=O(t)&&Rn(n)?Number(n)<t.length:H(t,n),l=Reflect.set(t,n,s,ne(t)?t:r);return t===L(r)&&(o?We(s,i)&&Fe(t,"set",n,s):Fe(t,"add",n,s)),l}deleteProperty(t,n){const s=H(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&Fe(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!Je(n)||!Qs.has(n))&&te(t,"has",n),s}ownKeys(t){return te(t,"iterate",O(t)?"length":nt),Reflect.ownKeys(t)}}class ni extends Ys{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const si=new Js,ri=new ni,ii=new Js(!0);const An=e=>e,Ft=e=>Reflect.getPrototypeOf(e);function oi(e,t,n){return function(...s){const r=this.__v_raw,i=L(r),o=ct(i),l=e==="entries"||e===Symbol.iterator&&o,u=e==="keys"&&o,d=r[e](...s),a=n?An:t?Ut:Z;return!t&&te(i,"iterate",u?xn:nt),{next(){const{value:p,done:x}=d.next();return x?{value:p,done:x}:{value:l?[a(p[0]),a(p[1])]:a(p),done:x}},[Symbol.iterator](){return this}}}}function Lt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function li(e,t){const n={get(r){const i=this.__v_raw,o=L(i),l=L(r);e||(We(r,l)&&te(o,"get",r),te(o,"get",l));const{has:u}=Ft(o),d=t?An:e?Ut:Z;if(u.call(o,r))return d(i.get(r));if(u.call(o,l))return d(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!e&&te(L(r),"iterate",nt),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=L(i),l=L(r);return e||(We(r,l)&&te(o,"has",r),te(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,u=L(l),d=t?An:e?Ut:Z;return!e&&te(u,"iterate",nt),l.forEach((a,p)=>r.call(i,d(a),d(p),o))}};return se(n,e?{add:Lt("add"),set:Lt("set"),delete:Lt("delete"),clear:Lt("clear")}:{add(r){!t&&!ve(r)&&!Qe(r)&&(r=L(r));const i=L(this);return Ft(i).has.call(i,r)||(i.add(r),Fe(i,"add",r,r)),this},set(r,i){!t&&!ve(i)&&!Qe(i)&&(i=L(i));const o=L(this),{has:l,get:u}=Ft(o);let d=l.call(o,r);d||(r=L(r),d=l.call(o,r));const a=u.call(o,r);return o.set(r,i),d?We(i,a)&&Fe(o,"set",r,i):Fe(o,"add",r,i),this},delete(r){const i=L(this),{has:o,get:l}=Ft(i);let u=o.call(i,r);u||(r=L(r),u=o.call(i,r)),l&&l.call(i,r);const d=i.delete(r);return u&&Fe(i,"delete",r,void 0),d},clear(){const r=L(this),i=r.size!==0,o=r.clear();return i&&Fe(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=oi(r,e,t)}),n}function Vn(e,t){const n=li(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(H(n,r)&&r in s?n:s,r,i)}const ci={get:Vn(!1,!1)},fi={get:Vn(!1,!0)},ui={get:Vn(!0,!1)};const ks=new WeakMap,Gs=new WeakMap,zs=new WeakMap,ai=new WeakMap;function di(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hi(e){return e.__v_skip||!Object.isExtensible(e)?0:di(Hr(e))}function jn(e){return Qe(e)?e:$n(e,!1,si,ci,ks)}function pi(e){return $n(e,!1,ii,fi,Gs)}function Xs(e){return $n(e,!0,ri,ui,zs)}function $n(e,t,n,s,r){if(!k(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=hi(e);if(i===0)return e;const o=r.get(e);if(o)return o;const l=new Proxy(e,i===2?s:n);return r.set(e,l),l}function ft(e){return Qe(e)?ft(e.__v_raw):!!(e&&e.__v_isReactive)}function Qe(e){return!!(e&&e.__v_isReadonly)}function ve(e){return!!(e&&e.__v_isShallow)}function Un(e){return e?!!e.__v_raw:!1}function L(e){const t=e&&e.__v_raw;return t?L(t):e}function gi(e){return!H(e,"__v_skip")&&Object.isExtensible(e)&&Rs(e,"__v_skip",!0),e}const Z=e=>k(e)?jn(e):e,Ut=e=>k(e)?Xs(e):e;function ne(e){return e?e.__v_isRef===!0:!1}function ze(e){return _i(e,!1)}function _i(e,t){return ne(e)?e:new mi(e,t)}class mi{constructor(t,n){this.dep=new Nn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:L(t),this._value=n?t:Z(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||ve(t)||Qe(t);t=s?t:L(t),We(t,n)&&(this._rawValue=t,this._value=s?t:Z(t),this.dep.trigger())}}function Nt(e){return ne(e)?e.value:e}const bi={get:(e,t,n)=>t==="__v_raw"?e:Nt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return ne(r)&&!ne(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Zs(e){return ft(e)?e:new Proxy(e,bi)}class vi{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Nn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=St-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&W!==this)return Vs(this,!0),!0}get value(){const t=this.dep.track();return Us(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function yi(e,t,n=!1){let s,r;return B(e)?s=e:(s=e.get,r=e.set),new vi(s,r,n)}const Ht={},Wt=new WeakMap;let et;function Ci(e,t=!1,n=et){if(n){let s=Wt.get(n);s||Wt.set(n,s=[]),s.push(e)}}function wi(e,t,n=K){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:u}=n,d=T=>r?T:ve(T)||r===!1||r===0?Ue(T,1):Ue(T);let a,p,x,A,R=!1,M=!1;if(ne(e)?(p=()=>e.value,R=ve(e)):ft(e)?(p=()=>d(e),R=!0):O(e)?(M=!0,R=e.some(T=>ft(T)||ve(T)),p=()=>e.map(T=>{if(ne(T))return T.value;if(ft(T))return d(T);if(B(T))return u?u(T,2):T()})):B(e)?t?p=u?()=>u(e,2):e:p=()=>{if(x){He();try{x()}finally{Ne()}}const T=et;et=a;try{return u?u(e,3,[A]):e(A)}finally{et=T}}:p=Be,t&&r){const T=p,G=r===!0?1/0:r;p=()=>Ue(T(),G)}const X=kr(),N=()=>{a.stop(),X&&X.active&&Mn(X.effects,a)};if(i&&t){const T=t;t=(...G)=>{T(...G),N()}}let Q=M?new Array(e.length).fill(Ht):Ht;const Y=T=>{if(!(!(a.flags&1)||!a.dirty&&!T))if(t){const G=a.run();if(r||R||(M?G.some((F,P)=>We(F,Q[P])):We(G,Q))){x&&x();const F=et;et=a;try{const P=[G,Q===Ht?void 0:M&&Q[0]===Ht?[]:Q,A];Q=G,u?u(t,3,P):t(...P)}finally{et=F}}}else a.run()};return l&&l(Y),a=new Hs(p),a.scheduler=o?()=>o(Y,!1):Y,A=T=>Ci(T,!1,a),x=a.onStop=()=>{const T=Wt.get(a);if(T){if(u)u(T,4);else for(const G of T)G();Wt.delete(a)}},t?s?Y(!0):Q=a.run():o?o(Y.bind(null,!0),!0):a.run(),N.pause=a.pause.bind(a),N.resume=a.resume.bind(a),N.stop=N,N}function Ue(e,t=1/0,n){if(t<=0||!k(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ne(e))Ue(e.value,t,n);else if(O(e))for(let s=0;s<e.length;s++)Ue(e[s],t,n);else if(Es(e)||ct(e))e.forEach(s=>{Ue(s,t,n)});else if(Is(e)){for(const s in e)Ue(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Ue(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ot(e,t,n,s){try{return s?e(...s):e()}catch(r){tn(r,t,n)}}function Ie(e,t,n,s){if(B(e)){const r=Ot(e,t,n,s);return r&&Os(r)&&r.catch(i=>{tn(i,t,n)}),r}if(O(e)){const r=[];for(let i=0;i<e.length;i++)r.push(Ie(e[i],t,n,s));return r}}function tn(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||K;if(t){let l=t.parent;const u=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const a=l.ec;if(a){for(let p=0;p<a.length;p++)if(a[p](e,u,d)===!1)return}l=l.parent}if(i){He(),Ot(i,null,10,[e,u,d]),Ne();return}}xi(e,n,r,s,o)}function xi(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const le=[];let Pe=-1;const ut=[];let je=null,it=0;const er=Promise.resolve();let Kt=null;function Ai(e){const t=Kt||er;return e?t.then(this?e.bind(this):e):t}function Si(e){let t=Pe+1,n=le.length;for(;t<n;){const s=t+n>>>1,r=le[s],i=Tt(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function Wn(e){if(!(e.flags&1)){const t=Tt(e),n=le[le.length-1];!n||!(e.flags&2)&&t>=Tt(n)?le.push(e):le.splice(Si(t),0,e),e.flags|=1,tr()}}function tr(){Kt||(Kt=er.then(sr))}function Di(e){O(e)?ut.push(...e):je&&e.id===-1?je.splice(it+1,0,e):e.flags&1||(ut.push(e),e.flags|=1),tr()}function rs(e,t,n=Pe+1){for(;n<le.length;n++){const s=le[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;le.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function nr(e){if(ut.length){const t=[...new Set(ut)].sort((n,s)=>Tt(n)-Tt(s));if(ut.length=0,je){je.push(...t);return}for(je=t,it=0;it<je.length;it++){const n=je[it];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}je=null,it=0}}const Tt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function sr(e){try{for(Pe=0;Pe<le.length;Pe++){const t=le[Pe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ot(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Pe<le.length;Pe++){const t=le[Pe];t&&(t.flags&=-2)}Pe=-1,le.length=0,nr(),Kt=null,(le.length||ut.length)&&sr()}}let Oe=null,rr=null;function Qt(e){const t=Oe;return Oe=e,rr=e&&e.type.__scopeId||null,t}function Ti(e,t=Oe,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&ps(-1);const i=Qt(t);let o;try{o=e(...r)}finally{Qt(i),s._d&&ps(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Xe(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let u=l.dir[s];u&&(He(),Ie(u,n,8,[e.el,l,e,t]),Ne())}}const Pi=Symbol("_vte"),Ei=e=>e.__isTeleport;function Kn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Kn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function ir(e,t){return B(e)?se({name:e.name},t,{setup:e}):e}function or(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Yt(e,t,n,s,r=!1){if(O(e)){e.forEach((R,M)=>Yt(R,t&&(O(t)?t[M]:t),n,s,r));return}if(wt(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Yt(e,t,n,s.component.subTree);return}const i=s.shapeFlag&4?kn(s.component):s.el,o=r?null:i,{i:l,r:u}=e,d=t&&t.r,a=l.refs===K?l.refs={}:l.refs,p=l.setupState,x=L(p),A=p===K?()=>!1:R=>H(x,R);if(d!=null&&d!==u&&(z(d)?(a[d]=null,A(d)&&(p[d]=null)):ne(d)&&(d.value=null)),B(u))Ot(u,l,12,[o,a]);else{const R=z(u),M=ne(u);if(R||M){const X=()=>{if(e.f){const N=R?A(u)?p[u]:a[u]:u.value;r?O(N)&&Mn(N,i):O(N)?N.includes(i)||N.push(i):R?(a[u]=[i],A(u)&&(p[u]=a[u])):(u.value=[i],e.k&&(a[e.k]=u.value))}else R?(a[u]=o,A(u)&&(p[u]=o)):M&&(u.value=o,e.k&&(a[e.k]=o))};o?(X.id=-1,_e(X,n)):X()}}}Zt().requestIdleCallback;Zt().cancelIdleCallback;const wt=e=>!!e.type.__asyncLoader,lr=e=>e.type.__isKeepAlive;function Oi(e,t){cr(e,"a",t)}function Bi(e,t){cr(e,"da",t)}function cr(e,t,n=ce){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(nn(t,s,n),n){let r=n.parent;for(;r&&r.parent;)lr(r.parent.vnode)&&Ii(s,t,n,r),r=r.parent}}function Ii(e,t,n,s){const r=nn(t,e,s,!0);fr(()=>{Mn(s[t],r)},n)}function nn(e,t,n=ce,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{He();const l=Bt(n),u=Ie(t,n,e,o);return l(),Ne(),u});return s?r.unshift(i):r.push(i),i}}const Ve=e=>(t,n=ce)=>{(!Et||e==="sp")&&nn(e,(...s)=>t(...s),n)},Mi=Ve("bm"),Ri=Ve("m"),qi=Ve("bu"),Fi=Ve("u"),Li=Ve("bum"),fr=Ve("um"),Hi=Ve("sp"),Ni=Ve("rtg"),Vi=Ve("rtc");function ji(e,t=ce){nn("ec",e,t)}const $i=Symbol.for("v-ndc");function is(e,t,n,s){let r;const i=n,o=O(e);if(o||z(e)){const l=o&&ft(e);let u=!1,d=!1;l&&(u=!ve(e),d=Qe(e),e=en(e)),r=new Array(e.length);for(let a=0,p=e.length;a<p;a++)r[a]=t(u?d?Ut(Z(e[a])):Z(e[a]):e[a],a,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=t(l+1,l,void 0,i)}else if(k(e))if(e[Symbol.iterator])r=Array.from(e,(l,u)=>t(l,u,void 0,i));else{const l=Object.keys(e);r=new Array(l.length);for(let u=0,d=l.length;u<d;u++){const a=l[u];r[u]=t(e[a],a,u,i)}}else r=[];return r}const Sn=e=>e?Br(e)?kn(e):Sn(e.parent):null,xt=se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Sn(e.parent),$root:e=>Sn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ar(e),$forceUpdate:e=>e.f||(e.f=()=>{Wn(e.update)}),$nextTick:e=>e.n||(e.n=Ai.bind(e.proxy)),$watch:e=>uo.bind(e)}),pn=(e,t)=>e!==K&&!e.__isScriptSetup&&H(e,t),Ui={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:u}=e;let d;if(t[0]!=="$"){const A=o[t];if(A!==void 0)switch(A){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(pn(s,t))return o[t]=1,s[t];if(r!==K&&H(r,t))return o[t]=2,r[t];if((d=e.propsOptions[0])&&H(d,t))return o[t]=3,i[t];if(n!==K&&H(n,t))return o[t]=4,n[t];Dn&&(o[t]=0)}}const a=xt[t];let p,x;if(a)return t==="$attrs"&&te(e.attrs,"get",""),a(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(n!==K&&H(n,t))return o[t]=4,n[t];if(x=u.config.globalProperties,H(x,t))return x[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return pn(r,t)?(r[t]=n,!0):s!==K&&H(s,t)?(s[t]=n,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let l;return!!n[o]||e!==K&&H(e,o)||pn(t,o)||(l=i[0])&&H(l,o)||H(s,o)||H(xt,o)||H(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:H(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function os(e){return O(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Dn=!0;function Wi(e){const t=ar(e),n=e.proxy,s=e.ctx;Dn=!1,t.beforeCreate&&ls(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:l,provide:u,inject:d,created:a,beforeMount:p,mounted:x,beforeUpdate:A,updated:R,activated:M,deactivated:X,beforeDestroy:N,beforeUnmount:Q,destroyed:Y,unmounted:T,render:G,renderTracked:F,renderTriggered:P,errorCaptured:j,serverPrefetch:fe,expose:re,inheritAttrs:Me,components:It,directives:Mt,filters:on}=t;if(d&&Ki(d,s,null),o)for(const J in o){const $=o[J];B($)&&(s[J]=$.bind(n))}if(r){const J=r.call(n,n);k(J)&&(e.data=jn(J))}if(Dn=!0,i)for(const J in i){const $=i[J],ke=B($)?$.bind(n,n):B($.get)?$.get.bind(n,n):Be,Rt=!B($)&&B($.set)?$.set.bind(n):Be,Ge=ot({get:ke,set:Rt});Object.defineProperty(s,J,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:we=>Ge.value=we})}if(l)for(const J in l)ur(l[J],s,n,J);if(u){const J=B(u)?u.call(n):u;Reflect.ownKeys(J).forEach($=>{zi($,J[$])})}a&&ls(a,e,"c");function ie(J,$){O($)?$.forEach(ke=>J(ke.bind(n))):$&&J($.bind(n))}if(ie(Mi,p),ie(Ri,x),ie(qi,A),ie(Fi,R),ie(Oi,M),ie(Bi,X),ie(ji,j),ie(Vi,F),ie(Ni,P),ie(Li,Q),ie(fr,T),ie(Hi,fe),O(re))if(re.length){const J=e.exposed||(e.exposed={});re.forEach($=>{Object.defineProperty(J,$,{get:()=>n[$],set:ke=>n[$]=ke})})}else e.exposed||(e.exposed={});G&&e.render===Be&&(e.render=G),Me!=null&&(e.inheritAttrs=Me),It&&(e.components=It),Mt&&(e.directives=Mt),fe&&or(e)}function Ki(e,t,n=Be){O(e)&&(e=Tn(e));for(const s in e){const r=e[s];let i;k(r)?"default"in r?i=Vt(r.from||s,r.default,!0):i=Vt(r.from||s):i=Vt(r),ne(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function ls(e,t,n){Ie(O(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function ur(e,t,n,s){let r=s.includes(".")?Ar(n,s):()=>n[s];if(z(e)){const i=t[e];B(i)&&_n(r,i)}else if(B(e))_n(r,e.bind(n));else if(k(e))if(O(e))e.forEach(i=>ur(i,t,n,s));else{const i=B(e.handler)?e.handler.bind(n):t[e.handler];B(i)&&_n(r,i,e)}}function ar(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let u;return l?u=l:!r.length&&!n&&!s?u=t:(u={},r.length&&r.forEach(d=>Jt(u,d,o,!0)),Jt(u,t,o)),k(t)&&i.set(t,u),u}function Jt(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&Jt(e,i,n,!0),r&&r.forEach(o=>Jt(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const l=Qi[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const Qi={data:cs,props:fs,emits:fs,methods:bt,computed:bt,beforeCreate:oe,created:oe,beforeMount:oe,mounted:oe,beforeUpdate:oe,updated:oe,beforeDestroy:oe,beforeUnmount:oe,destroyed:oe,unmounted:oe,activated:oe,deactivated:oe,errorCaptured:oe,serverPrefetch:oe,components:bt,directives:bt,watch:Ji,provide:cs,inject:Yi};function cs(e,t){return t?e?function(){return se(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function Yi(e,t){return bt(Tn(e),Tn(t))}function Tn(e){if(O(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function oe(e,t){return e?[...new Set([].concat(e,t))]:t}function bt(e,t){return e?se(Object.create(null),e,t):t}function fs(e,t){return e?O(e)&&O(t)?[...new Set([...e,...t])]:se(Object.create(null),os(e),os(t??{})):t}function Ji(e,t){if(!e)return t;if(!t)return e;const n=se(Object.create(null),e);for(const s in t)n[s]=oe(e[s],t[s]);return n}function dr(){return{app:null,config:{isNativeTag:Fr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ki=0;function Gi(e,t){return function(s,r=null){B(s)||(s=se({},s)),r!=null&&!k(r)&&(r=null);const i=dr(),o=new WeakSet,l=[];let u=!1;const d=i.app={_uid:ki++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Io,get config(){return i.config},set config(a){},use(a,...p){return o.has(a)||(a&&B(a.install)?(o.add(a),a.install(d,...p)):B(a)&&(o.add(a),a(d,...p))),d},mixin(a){return i.mixins.includes(a)||i.mixins.push(a),d},component(a,p){return p?(i.components[a]=p,d):i.components[a]},directive(a,p){return p?(i.directives[a]=p,d):i.directives[a]},mount(a,p,x){if(!u){const A=d._ceVNode||Le(s,r);return A.appContext=i,x===!0?x="svg":x===!1&&(x=void 0),e(A,a,x),u=!0,d._container=a,a.__vue_app__=d,kn(A.component)}},onUnmount(a){l.push(a)},unmount(){u&&(Ie(l,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(a,p){return i.provides[a]=p,d},runWithContext(a){const p=at;at=d;try{return a()}finally{at=p}}};return d}}let at=null;function zi(e,t){if(ce){let n=ce.provides;const s=ce.parent&&ce.parent.provides;s===n&&(n=ce.provides=Object.create(s)),n[e]=t}}function Vt(e,t,n=!1){const s=ce||Oe;if(s||at){let r=at?at._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&B(t)?t.call(s&&s.proxy):t}}const hr={},pr=()=>Object.create(hr),gr=e=>Object.getPrototypeOf(e)===hr;function Xi(e,t,n,s=!1){const r={},i=pr();e.propsDefaults=Object.create(null),_r(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:pi(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Zi(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,l=L(r),[u]=e.propsOptions;let d=!1;if((s||o>0)&&!(o&16)){if(o&8){const a=e.vnode.dynamicProps;for(let p=0;p<a.length;p++){let x=a[p];if(sn(e.emitsOptions,x))continue;const A=t[x];if(u)if(H(i,x))A!==i[x]&&(i[x]=A,d=!0);else{const R=Ke(x);r[R]=Pn(u,l,R,A,e,!1)}else A!==i[x]&&(i[x]=A,d=!0)}}}else{_r(e,t,r,i)&&(d=!0);let a;for(const p in l)(!t||!H(t,p)&&((a=st(p))===p||!H(t,a)))&&(u?n&&(n[p]!==void 0||n[a]!==void 0)&&(r[p]=Pn(u,l,p,void 0,e,!0)):delete r[p]);if(i!==l)for(const p in i)(!t||!H(t,p))&&(delete i[p],d=!0)}d&&Fe(e.attrs,"set","")}function _r(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,l;if(t)for(let u in t){if(vt(u))continue;const d=t[u];let a;r&&H(r,a=Ke(u))?!i||!i.includes(a)?n[a]=d:(l||(l={}))[a]=d:sn(e.emitsOptions,u)||(!(u in s)||d!==s[u])&&(s[u]=d,o=!0)}if(i){const u=L(n),d=l||K;for(let a=0;a<i.length;a++){const p=i[a];n[p]=Pn(r,u,p,d[p],e,!H(d,p))}}return o}function Pn(e,t,n,s,r,i){const o=e[n];if(o!=null){const l=H(o,"default");if(l&&s===void 0){const u=o.default;if(o.type!==Function&&!o.skipFactory&&B(u)){const{propsDefaults:d}=r;if(n in d)s=d[n];else{const a=Bt(r);s=d[n]=u.call(null,t),a()}}else s=u;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===st(n))&&(s=!0))}return s}const eo=new WeakMap;function mr(e,t,n=!1){const s=n?eo:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},l=[];let u=!1;if(!B(e)){const a=p=>{u=!0;const[x,A]=mr(p,t,!0);se(o,x),A&&l.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}if(!i&&!u)return k(e)&&s.set(e,lt),lt;if(O(i))for(let a=0;a<i.length;a++){const p=Ke(i[a]);us(p)&&(o[p]=K)}else if(i)for(const a in i){const p=Ke(a);if(us(p)){const x=i[a],A=o[p]=O(x)||B(x)?{type:x}:se({},x),R=A.type;let M=!1,X=!0;if(O(R))for(let N=0;N<R.length;++N){const Q=R[N],Y=B(Q)&&Q.name;if(Y==="Boolean"){M=!0;break}else Y==="String"&&(X=!1)}else M=B(R)&&R.name==="Boolean";A[0]=M,A[1]=X,(M||H(A,"default"))&&l.push(p)}}const d=[o,l];return k(e)&&s.set(e,d),d}function us(e){return e[0]!=="$"&&!vt(e)}const Qn=e=>e[0]==="_"||e==="$stable",Yn=e=>O(e)?e.map(Ee):[Ee(e)],to=(e,t,n)=>{if(t._n)return t;const s=Ti((...r)=>Yn(t(...r)),n);return s._c=!1,s},br=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Qn(r))continue;const i=e[r];if(B(i))t[r]=to(r,i,s);else if(i!=null){const o=Yn(i);t[r]=()=>o}}},vr=(e,t)=>{const n=Yn(t);e.slots.default=()=>n},yr=(e,t,n)=>{for(const s in t)(n||!Qn(s))&&(e[s]=t[s])},no=(e,t,n)=>{const s=e.slots=pr();if(e.vnode.shapeFlag&32){const r=t._;r?(yr(s,t,n),n&&Rs(s,"_",r,!0)):br(t,s)}else t&&vr(e,t)},so=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=K;if(s.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:yr(r,t,n):(i=!t.$stable,br(t,r)),o=t}else t&&(vr(e,t),o={default:1});if(i)for(const l in r)!Qn(l)&&o[l]==null&&delete r[l]},_e=bo;function ro(e){return io(e)}function io(e,t){const n=Zt();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:u,setText:d,setElementText:a,parentNode:p,nextSibling:x,setScopeId:A=Be,insertStaticContent:R}=e,M=(c,f,h,m=null,g=null,_=null,C=void 0,y=null,v=!!f.dynamicChildren)=>{if(c===f)return;c&&!mt(c,f)&&(m=qt(c),we(c,g,_,!0),c=null),f.patchFlag===-2&&(v=!1,f.dynamicChildren=null);const{type:b,ref:D,shapeFlag:w}=f;switch(b){case rn:X(c,f,h,m);break;case Ye:N(c,f,h,m);break;case mn:c==null&&Q(f,h,m,C);break;case ye:It(c,f,h,m,g,_,C,y,v);break;default:w&1?G(c,f,h,m,g,_,C,y,v):w&6?Mt(c,f,h,m,g,_,C,y,v):(w&64||w&128)&&b.process(c,f,h,m,g,_,C,y,v,pt)}D!=null&&g&&Yt(D,c&&c.ref,_,f||c,!f)},X=(c,f,h,m)=>{if(c==null)s(f.el=l(f.children),h,m);else{const g=f.el=c.el;f.children!==c.children&&d(g,f.children)}},N=(c,f,h,m)=>{c==null?s(f.el=u(f.children||""),h,m):f.el=c.el},Q=(c,f,h,m)=>{[c.el,c.anchor]=R(c.children,f,h,m,c.el,c.anchor)},Y=({el:c,anchor:f},h,m)=>{let g;for(;c&&c!==f;)g=x(c),s(c,h,m),c=g;s(f,h,m)},T=({el:c,anchor:f})=>{let h;for(;c&&c!==f;)h=x(c),r(c),c=h;r(f)},G=(c,f,h,m,g,_,C,y,v)=>{f.type==="svg"?C="svg":f.type==="math"&&(C="mathml"),c==null?F(f,h,m,g,_,C,y,v):fe(c,f,g,_,C,y,v)},F=(c,f,h,m,g,_,C,y)=>{let v,b;const{props:D,shapeFlag:w,transition:S,dirs:E}=c;if(v=c.el=o(c.type,_,D&&D.is,D),w&8?a(v,c.children):w&16&&j(c.children,v,null,m,g,gn(c,_),C,y),E&&Xe(c,null,m,"created"),P(v,c,c.scopeId,C,m),D){for(const U in D)U!=="value"&&!vt(U)&&i(v,U,null,D[U],_,m);"value"in D&&i(v,"value",null,D.value,_),(b=D.onVnodeBeforeMount)&&De(b,m,c)}E&&Xe(c,null,m,"beforeMount");const q=oo(g,S);q&&S.beforeEnter(v),s(v,f,h),((b=D&&D.onVnodeMounted)||q||E)&&_e(()=>{b&&De(b,m,c),q&&S.enter(v),E&&Xe(c,null,m,"mounted")},g)},P=(c,f,h,m,g)=>{if(h&&A(c,h),m)for(let _=0;_<m.length;_++)A(c,m[_]);if(g){let _=g.subTree;if(f===_||Dr(_.type)&&(_.ssContent===f||_.ssFallback===f)){const C=g.vnode;P(c,C,C.scopeId,C.slotScopeIds,g.parent)}}},j=(c,f,h,m,g,_,C,y,v=0)=>{for(let b=v;b<c.length;b++){const D=c[b]=y?$e(c[b]):Ee(c[b]);M(null,D,f,h,m,g,_,C,y)}},fe=(c,f,h,m,g,_,C)=>{const y=f.el=c.el;let{patchFlag:v,dynamicChildren:b,dirs:D}=f;v|=c.patchFlag&16;const w=c.props||K,S=f.props||K;let E;if(h&&Ze(h,!1),(E=S.onVnodeBeforeUpdate)&&De(E,h,f,c),D&&Xe(f,c,h,"beforeUpdate"),h&&Ze(h,!0),(w.innerHTML&&S.innerHTML==null||w.textContent&&S.textContent==null)&&a(y,""),b?re(c.dynamicChildren,b,y,h,m,gn(f,g),_):C||$(c,f,y,null,h,m,gn(f,g),_,!1),v>0){if(v&16)Me(y,w,S,h,g);else if(v&2&&w.class!==S.class&&i(y,"class",null,S.class,g),v&4&&i(y,"style",w.style,S.style,g),v&8){const q=f.dynamicProps;for(let U=0;U<q.length;U++){const V=q[U],pe=w[V],ue=S[V];(ue!==pe||V==="value")&&i(y,V,pe,ue,g,h)}}v&1&&c.children!==f.children&&a(y,f.children)}else!C&&b==null&&Me(y,w,S,h,g);((E=S.onVnodeUpdated)||D)&&_e(()=>{E&&De(E,h,f,c),D&&Xe(f,c,h,"updated")},m)},re=(c,f,h,m,g,_,C)=>{for(let y=0;y<f.length;y++){const v=c[y],b=f[y],D=v.el&&(v.type===ye||!mt(v,b)||v.shapeFlag&198)?p(v.el):h;M(v,b,D,null,m,g,_,C,!0)}},Me=(c,f,h,m,g)=>{if(f!==h){if(f!==K)for(const _ in f)!vt(_)&&!(_ in h)&&i(c,_,f[_],null,g,m);for(const _ in h){if(vt(_))continue;const C=h[_],y=f[_];C!==y&&_!=="value"&&i(c,_,y,C,g,m)}"value"in h&&i(c,"value",f.value,h.value,g)}},It=(c,f,h,m,g,_,C,y,v)=>{const b=f.el=c?c.el:l(""),D=f.anchor=c?c.anchor:l("");let{patchFlag:w,dynamicChildren:S,slotScopeIds:E}=f;E&&(y=y?y.concat(E):E),c==null?(s(b,h,m),s(D,h,m),j(f.children||[],h,D,g,_,C,y,v)):w>0&&w&64&&S&&c.dynamicChildren?(re(c.dynamicChildren,S,h,g,_,C,y),(f.key!=null||g&&f===g.subTree)&&Cr(c,f,!0)):$(c,f,h,D,g,_,C,y,v)},Mt=(c,f,h,m,g,_,C,y,v)=>{f.slotScopeIds=y,c==null?f.shapeFlag&512?g.ctx.activate(f,h,m,C,v):on(f,h,m,g,_,C,v):Gn(c,f,v)},on=(c,f,h,m,g,_,C)=>{const y=c.component=Do(c,m,g);if(lr(c)&&(y.ctx.renderer=pt),To(y,!1,C),y.asyncDep){if(g&&g.registerDep(y,ie,C),!c.el){const v=y.subTree=Le(Ye);N(null,v,f,h)}}else ie(y,c,f,h,g,_,C)},Gn=(c,f,h)=>{const m=f.component=c.component;if(_o(c,f,h))if(m.asyncDep&&!m.asyncResolved){J(m,f,h);return}else m.next=f,m.update();else f.el=c.el,m.vnode=f},ie=(c,f,h,m,g,_,C)=>{const y=()=>{if(c.isMounted){let{next:w,bu:S,u:E,parent:q,vnode:U}=c;{const Ae=wr(c);if(Ae){w&&(w.el=U.el,J(c,w,C)),Ae.asyncDep.then(()=>{c.isUnmounted||y()});return}}let V=w,pe;Ze(c,!1),w?(w.el=U.el,J(c,w,C)):w=U,S&&fn(S),(pe=w.props&&w.props.onVnodeBeforeUpdate)&&De(pe,q,w,U),Ze(c,!0);const ue=ds(c),xe=c.subTree;c.subTree=ue,M(xe,ue,p(xe.el),qt(xe),c,g,_),w.el=ue.el,V===null&&mo(c,ue.el),E&&_e(E,g),(pe=w.props&&w.props.onVnodeUpdated)&&_e(()=>De(pe,q,w,U),g)}else{let w;const{el:S,props:E}=f,{bm:q,m:U,parent:V,root:pe,type:ue}=c,xe=wt(f);Ze(c,!1),q&&fn(q),!xe&&(w=E&&E.onVnodeBeforeMount)&&De(w,V,f),Ze(c,!0);{pe.ce&&pe.ce._injectChildStyle(ue);const Ae=c.subTree=ds(c);M(null,Ae,h,m,c,g,_),f.el=Ae.el}if(U&&_e(U,g),!xe&&(w=E&&E.onVnodeMounted)){const Ae=f;_e(()=>De(w,V,Ae),g)}(f.shapeFlag&256||V&&wt(V.vnode)&&V.vnode.shapeFlag&256)&&c.a&&_e(c.a,g),c.isMounted=!0,f=h=m=null}};c.scope.on();const v=c.effect=new Hs(y);c.scope.off();const b=c.update=v.run.bind(v),D=c.job=v.runIfDirty.bind(v);D.i=c,D.id=c.uid,v.scheduler=()=>Wn(D),Ze(c,!0),b()},J=(c,f,h)=>{f.component=c;const m=c.vnode.props;c.vnode=f,c.next=null,Zi(c,f.props,m,h),so(c,f.children,h),He(),rs(c),Ne()},$=(c,f,h,m,g,_,C,y,v=!1)=>{const b=c&&c.children,D=c?c.shapeFlag:0,w=f.children,{patchFlag:S,shapeFlag:E}=f;if(S>0){if(S&128){Rt(b,w,h,m,g,_,C,y,v);return}else if(S&256){ke(b,w,h,m,g,_,C,y,v);return}}E&8?(D&16&&ht(b,g,_),w!==b&&a(h,w)):D&16?E&16?Rt(b,w,h,m,g,_,C,y,v):ht(b,g,_,!0):(D&8&&a(h,""),E&16&&j(w,h,m,g,_,C,y,v))},ke=(c,f,h,m,g,_,C,y,v)=>{c=c||lt,f=f||lt;const b=c.length,D=f.length,w=Math.min(b,D);let S;for(S=0;S<w;S++){const E=f[S]=v?$e(f[S]):Ee(f[S]);M(c[S],E,h,null,g,_,C,y,v)}b>D?ht(c,g,_,!0,!1,w):j(f,h,m,g,_,C,y,v,w)},Rt=(c,f,h,m,g,_,C,y,v)=>{let b=0;const D=f.length;let w=c.length-1,S=D-1;for(;b<=w&&b<=S;){const E=c[b],q=f[b]=v?$e(f[b]):Ee(f[b]);if(mt(E,q))M(E,q,h,null,g,_,C,y,v);else break;b++}for(;b<=w&&b<=S;){const E=c[w],q=f[S]=v?$e(f[S]):Ee(f[S]);if(mt(E,q))M(E,q,h,null,g,_,C,y,v);else break;w--,S--}if(b>w){if(b<=S){const E=S+1,q=E<D?f[E].el:m;for(;b<=S;)M(null,f[b]=v?$e(f[b]):Ee(f[b]),h,q,g,_,C,y,v),b++}}else if(b>S)for(;b<=w;)we(c[b],g,_,!0),b++;else{const E=b,q=b,U=new Map;for(b=q;b<=S;b++){const ge=f[b]=v?$e(f[b]):Ee(f[b]);ge.key!=null&&U.set(ge.key,b)}let V,pe=0;const ue=S-q+1;let xe=!1,Ae=0;const gt=new Array(ue);for(b=0;b<ue;b++)gt[b]=0;for(b=E;b<=w;b++){const ge=c[b];if(pe>=ue){we(ge,g,_,!0);continue}let Se;if(ge.key!=null)Se=U.get(ge.key);else for(V=q;V<=S;V++)if(gt[V-q]===0&&mt(ge,f[V])){Se=V;break}Se===void 0?we(ge,g,_,!0):(gt[Se-q]=b+1,Se>=Ae?Ae=Se:xe=!0,M(ge,f[Se],h,null,g,_,C,y,v),pe++)}const Zn=xe?lo(gt):lt;for(V=Zn.length-1,b=ue-1;b>=0;b--){const ge=q+b,Se=f[ge],es=ge+1<D?f[ge+1].el:m;gt[b]===0?M(null,Se,h,es,g,_,C,y,v):xe&&(V<0||b!==Zn[V]?Ge(Se,h,es,2):V--)}}},Ge=(c,f,h,m,g=null)=>{const{el:_,type:C,transition:y,children:v,shapeFlag:b}=c;if(b&6){Ge(c.component.subTree,f,h,m);return}if(b&128){c.suspense.move(f,h,m);return}if(b&64){C.move(c,f,h,pt);return}if(C===ye){s(_,f,h);for(let w=0;w<v.length;w++)Ge(v[w],f,h,m);s(c.anchor,f,h);return}if(C===mn){Y(c,f,h);return}if(m!==2&&b&1&&y)if(m===0)y.beforeEnter(_),s(_,f,h),_e(()=>y.enter(_),g);else{const{leave:w,delayLeave:S,afterLeave:E}=y,q=()=>{c.ctx.isUnmounted?r(_):s(_,f,h)},U=()=>{w(_,()=>{q(),E&&E()})};S?S(_,q,U):U()}else s(_,f,h)},we=(c,f,h,m=!1,g=!1)=>{const{type:_,props:C,ref:y,children:v,dynamicChildren:b,shapeFlag:D,patchFlag:w,dirs:S,cacheIndex:E}=c;if(w===-2&&(g=!1),y!=null&&(He(),Yt(y,null,h,c,!0),Ne()),E!=null&&(f.renderCache[E]=void 0),D&256){f.ctx.deactivate(c);return}const q=D&1&&S,U=!wt(c);let V;if(U&&(V=C&&C.onVnodeBeforeUnmount)&&De(V,f,c),D&6)qr(c.component,h,m);else{if(D&128){c.suspense.unmount(h,m);return}q&&Xe(c,null,f,"beforeUnmount"),D&64?c.type.remove(c,f,h,pt,m):b&&!b.hasOnce&&(_!==ye||w>0&&w&64)?ht(b,f,h,!1,!0):(_===ye&&w&384||!g&&D&16)&&ht(v,f,h),m&&zn(c)}(U&&(V=C&&C.onVnodeUnmounted)||q)&&_e(()=>{V&&De(V,f,c),q&&Xe(c,null,f,"unmounted")},h)},zn=c=>{const{type:f,el:h,anchor:m,transition:g}=c;if(f===ye){Rr(h,m);return}if(f===mn){T(c);return}const _=()=>{r(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:C,delayLeave:y}=g,v=()=>C(h,_);y?y(c.el,_,v):v()}else _()},Rr=(c,f)=>{let h;for(;c!==f;)h=x(c),r(c),c=h;r(f)},qr=(c,f,h)=>{const{bum:m,scope:g,job:_,subTree:C,um:y,m:v,a:b,parent:D,slots:{__:w}}=c;as(v),as(b),m&&fn(m),D&&O(w)&&w.forEach(S=>{D.renderCache[S]=void 0}),g.stop(),_&&(_.flags|=8,we(C,c,f,h)),y&&_e(y,f),_e(()=>{c.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},ht=(c,f,h,m=!1,g=!1,_=0)=>{for(let C=_;C<c.length;C++)we(c[C],f,h,m,g)},qt=c=>{if(c.shapeFlag&6)return qt(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const f=x(c.anchor||c.el),h=f&&f[Pi];return h?x(h):f};let ln=!1;const Xn=(c,f,h)=>{c==null?f._vnode&&we(f._vnode,null,null,!0):M(f._vnode||null,c,f,null,null,null,h),f._vnode=c,ln||(ln=!0,rs(),nr(),ln=!1)},pt={p:M,um:we,m:Ge,r:zn,mt:on,mc:j,pc:$,pbc:re,n:qt,o:e};return{render:Xn,hydrate:void 0,createApp:Gi(Xn)}}function gn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ze({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function oo(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Cr(e,t,n=!1){const s=e.children,r=t.children;if(O(s)&&O(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=$e(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Cr(o,l)),l.type===rn&&(l.el=o.el),l.type===Ye&&!l.el&&(l.el=o.el)}}function lo(e){const t=e.slice(),n=[0];let s,r,i,o,l;const u=e.length;for(s=0;s<u;s++){const d=e[s];if(d!==0){if(r=n[n.length-1],e[r]<d){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,e[n[l]]<d?i=l+1:o=l;d<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function wr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:wr(t)}function as(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const co=Symbol.for("v-scx"),fo=()=>Vt(co);function _n(e,t,n){return xr(e,t,n)}function xr(e,t,n=K){const{immediate:s,deep:r,flush:i,once:o}=n,l=se({},n),u=t&&s||!t&&i!=="post";let d;if(Et){if(i==="sync"){const A=fo();d=A.__watcherHandles||(A.__watcherHandles=[])}else if(!u){const A=()=>{};return A.stop=Be,A.resume=Be,A.pause=Be,A}}const a=ce;l.call=(A,R,M)=>Ie(A,a,R,M);let p=!1;i==="post"?l.scheduler=A=>{_e(A,a&&a.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(A,R)=>{R?A():Wn(A)}),l.augmentJob=A=>{t&&(A.flags|=4),p&&(A.flags|=2,a&&(A.id=a.uid,A.i=a))};const x=wi(e,t,l);return Et&&(d?d.push(x):u&&x()),x}function uo(e,t,n){const s=this.proxy,r=z(e)?e.includes(".")?Ar(s,e):()=>s[e]:e.bind(s,s);let i;B(t)?i=t:(i=t.handler,n=t);const o=Bt(this),l=xr(r,i.bind(s),n);return o(),l}function Ar(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const ao=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ke(t)}Modifiers`]||e[`${st(t)}Modifiers`];function ho(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||K;let r=n;const i=t.startsWith("update:"),o=i&&ao(s,t.slice(7));o&&(o.trim&&(r=n.map(a=>z(a)?a.trim():a)),o.number&&(r=n.map(jr)));let l,u=s[l=cn(t)]||s[l=cn(Ke(t))];!u&&i&&(u=s[l=cn(st(t))]),u&&Ie(u,e,6,r);const d=s[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Ie(d,e,6,r)}}function Sr(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},l=!1;if(!B(e)){const u=d=>{const a=Sr(d,t,!0);a&&(l=!0,se(o,a))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!l?(k(e)&&s.set(e,null),null):(O(i)?i.forEach(u=>o[u]=null):se(o,i),k(e)&&s.set(e,o),o)}function sn(e,t){return!e||!Gt(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,st(t))||H(e,t))}function ds(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:u,render:d,renderCache:a,props:p,data:x,setupState:A,ctx:R,inheritAttrs:M}=e,X=Qt(e);let N,Q;try{if(n.shapeFlag&4){const T=r||s,G=T;N=Ee(d.call(G,T,a,p,A,x,R)),Q=l}else{const T=t;N=Ee(T.length>1?T(p,{attrs:l,slots:o,emit:u}):T(p,null)),Q=t.props?l:po(l)}}catch(T){At.length=0,tn(T,e,1),N=Le(Ye)}let Y=N;if(Q&&M!==!1){const T=Object.keys(Q),{shapeFlag:G}=Y;T.length&&G&7&&(i&&T.some(In)&&(Q=go(Q,i)),Y=dt(Y,Q,!1,!0))}return n.dirs&&(Y=dt(Y,null,!1,!0),Y.dirs=Y.dirs?Y.dirs.concat(n.dirs):n.dirs),n.transition&&Kn(Y,n.transition),N=Y,Qt(X),N}const po=e=>{let t;for(const n in e)(n==="class"||n==="style"||Gt(n))&&((t||(t={}))[n]=e[n]);return t},go=(e,t)=>{const n={};for(const s in e)(!In(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function _o(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:l,patchFlag:u}=t,d=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?hs(s,o,d):!!o;if(u&8){const a=t.dynamicProps;for(let p=0;p<a.length;p++){const x=a[p];if(o[x]!==s[x]&&!sn(d,x))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?hs(s,o,d):!0:!!o;return!1}function hs(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!sn(n,i))return!0}return!1}function mo({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Dr=e=>e.__isSuspense;function bo(e,t){t&&t.pendingBranch?O(e)?t.effects.push(...e):t.effects.push(e):Di(e)}const ye=Symbol.for("v-fgt"),rn=Symbol.for("v-txt"),Ye=Symbol.for("v-cmt"),mn=Symbol.for("v-stc"),At=[];let me=null;function ee(e=!1){At.push(me=e?null:[])}function vo(){At.pop(),me=At[At.length-1]||null}let Pt=1;function ps(e,t=!1){Pt+=e,e<0&&me&&t&&(me.hasOnce=!0)}function Tr(e){return e.dynamicChildren=Pt>0?me||lt:null,vo(),Pt>0&&me&&me.push(e),e}function ae(e,t,n,s,r,i){return Tr(I(e,t,n,s,r,i,!0))}function Pr(e,t,n,s,r){return Tr(Le(e,t,n,s,r,!0))}function Er(e){return e?e.__v_isVNode===!0:!1}function mt(e,t){return e.type===t.type&&e.key===t.key}const Or=({key:e})=>e??null,jt=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?z(e)||ne(e)||B(e)?{i:Oe,r:e,k:t,f:!!n}:e:null);function I(e,t=null,n=null,s=0,r=null,i=e===ye?0:1,o=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Or(t),ref:t&&jt(t),scopeId:rr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Oe};return l?(Jn(u,n),i&128&&e.normalize(u)):n&&(u.shapeFlag|=z(n)?8:16),Pt>0&&!o&&me&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&me.push(u),u}const Le=yo;function yo(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===$i)&&(e=Ye),Er(e)){const l=dt(e,t,!0);return n&&Jn(l,n),Pt>0&&!i&&me&&(l.shapeFlag&6?me[me.indexOf(e)]=l:me.push(l)),l.patchFlag=-2,l}if(Bo(e)&&(e=e.__vccOpts),t){t=Co(t);let{class:l,style:u}=t;l&&!z(l)&&(t.class=tt(l)),k(u)&&(Un(u)&&!O(u)&&(u=se({},u)),t.style=qn(u))}const o=z(e)?1:Dr(e)?128:Ei(e)?64:k(e)?4:B(e)?2:0;return I(e,t,n,s,r,o,i,!0)}function Co(e){return e?Un(e)||gr(e)?se({},e):e:null}function dt(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:u}=e,d=t?xo(r||{},t):r,a={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Or(d),ref:t&&t.ref?n&&i?O(i)?i.concat(jt(t)):[i,jt(t)]:jt(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ye?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&dt(e.ssContent),ssFallback:e.ssFallback&&dt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&s&&Kn(a,u.clone(a)),a}function Te(e=" ",t=0){return Le(rn,null,e,t)}function wo(e="",t=!1){return t?(ee(),Pr(Ye,null,e)):Le(Ye,null,e)}function Ee(e){return e==null||typeof e=="boolean"?Le(Ye):O(e)?Le(ye,null,e.slice()):Er(e)?$e(e):Le(rn,null,String(e))}function $e(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:dt(e)}function Jn(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(O(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Jn(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!gr(t)?t._ctx=Oe:r===3&&Oe&&(Oe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:Oe},n=32):(t=String(t),s&64?(n=16,t=[Te(t)]):n=8);e.children=t,e.shapeFlag|=n}function xo(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=tt([t.class,s.class]));else if(r==="style")t.style=qn([t.style,s.style]);else if(Gt(r)){const i=t[r],o=s[r];o&&i!==o&&!(O(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function De(e,t,n,s=null){Ie(e,t,7,[n,s])}const Ao=dr();let So=0;function Do(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Ao,i={uid:So++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Jr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mr(s,r),emitsOptions:Sr(s,r),emit:null,emitted:null,propsDefaults:K,inheritAttrs:s.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ho.bind(null,i),e.ce&&e.ce(i),i}let ce=null,kt,En;{const e=Zt(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};kt=t("__VUE_INSTANCE_SETTERS__",n=>ce=n),En=t("__VUE_SSR_SETTERS__",n=>Et=n)}const Bt=e=>{const t=ce;return kt(e),e.scope.on(),()=>{e.scope.off(),kt(t)}},gs=()=>{ce&&ce.scope.off(),kt(null)};function Br(e){return e.vnode.shapeFlag&4}let Et=!1;function To(e,t=!1,n=!1){t&&En(t);const{props:s,children:r}=e.vnode,i=Br(e);Xi(e,s,i,t),no(e,r,n||t);const o=i?Po(e,t):void 0;return t&&En(!1),o}function Po(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ui);const{setup:s}=n;if(s){He();const r=e.setupContext=s.length>1?Oo(e):null,i=Bt(e),o=Ot(s,e,0,[e.props,r]),l=Os(o);if(Ne(),i(),(l||e.sp)&&!wt(e)&&or(e),l){if(o.then(gs,gs),t)return o.then(u=>{_s(e,u)}).catch(u=>{tn(u,e,0)});e.asyncDep=o}else _s(e,o)}else Ir(e)}function _s(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:k(t)&&(e.setupState=Zs(t)),Ir(e)}function Ir(e,t,n){const s=e.type;e.render||(e.render=s.render||Be);{const r=Bt(e);He();try{Wi(e)}finally{Ne(),r()}}}const Eo={get(e,t){return te(e,"get",""),e[t]}};function Oo(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Eo),slots:e.slots,emit:e.emit,expose:t}}function kn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Zs(gi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in xt)return xt[n](e)},has(t,n){return n in t||n in xt}})):e.proxy}function Bo(e){return B(e)&&"__vccOpts"in e}const ot=(e,t)=>yi(e,t,Et),Io="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let On;const ms=typeof window<"u"&&window.trustedTypes;if(ms)try{On=ms.createPolicy("vue",{createHTML:e=>e})}catch{}const Mr=On?e=>On.createHTML(e):e=>e,Mo="http://www.w3.org/2000/svg",Ro="http://www.w3.org/1998/Math/MathML",qe=typeof document<"u"?document:null,bs=qe&&qe.createElement("template"),qo={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?qe.createElementNS(Mo,e):t==="mathml"?qe.createElementNS(Ro,e):n?qe.createElement(e,{is:n}):qe.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>qe.createTextNode(e),createComment:e=>qe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>qe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{bs.innerHTML=Mr(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=bs.content;if(s==="svg"||s==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Fo=Symbol("_vtc");function Lo(e,t,n){const s=e[Fo];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const vs=Symbol("_vod"),Ho=Symbol("_vsh"),No=Symbol(""),Vo=/(^|;)\s*display\s*:/;function jo(e,t,n){const s=e.style,r=z(n);let i=!1;if(n&&!r){if(t)if(z(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&$t(s,l,"")}else for(const o in t)n[o]==null&&$t(s,o,"");for(const o in n)o==="display"&&(i=!0),$t(s,o,n[o])}else if(r){if(t!==n){const o=s[No];o&&(n+=";"+o),s.cssText=n,i=Vo.test(n)}}else t&&e.removeAttribute("style");vs in e&&(e[vs]=i?s.display:"",e[Ho]&&(s.display="none"))}const ys=/\s*!important$/;function $t(e,t,n){if(O(n))n.forEach(s=>$t(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=$o(e,t);ys.test(n)?e.setProperty(st(s),n.replace(ys,""),"important"):e[s]=n}}const Cs=["Webkit","Moz","ms"],bn={};function $o(e,t){const n=bn[t];if(n)return n;let s=Ke(t);if(s!=="filter"&&s in e)return bn[t]=s;s=Ms(s);for(let r=0;r<Cs.length;r++){const i=Cs[r]+s;if(i in e)return bn[t]=i}return t}const ws="http://www.w3.org/1999/xlink";function xs(e,t,n,s,r,i=Yr(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ws,t.slice(6,t.length)):e.setAttributeNS(ws,t,n):n==null||i&&!qs(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Je(n)?String(n):n)}function As(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Mr(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,u=n==null?e.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=qs(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function Uo(e,t,n,s){e.addEventListener(t,n,s)}function Wo(e,t,n,s){e.removeEventListener(t,n,s)}const Ss=Symbol("_vei");function Ko(e,t,n,s,r=null){const i=e[Ss]||(e[Ss]={}),o=i[t];if(s&&o)o.value=s;else{const[l,u]=Qo(t);if(s){const d=i[t]=ko(s,r);Uo(e,l,d,u)}else o&&(Wo(e,l,o,u),i[t]=void 0)}}const Ds=/(?:Once|Passive|Capture)$/;function Qo(e){let t;if(Ds.test(e)){t={};let s;for(;s=e.match(Ds);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):st(e.slice(2)),t]}let vn=0;const Yo=Promise.resolve(),Jo=()=>vn||(Yo.then(()=>vn=0),vn=Date.now());function ko(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ie(Go(s,n.value),t,5,[s])};return n.value=e,n.attached=Jo(),n}function Go(e,t){if(O(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Ts=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,zo=(e,t,n,s,r,i)=>{const o=r==="svg";t==="class"?Lo(e,s,o):t==="style"?jo(e,n,s):Gt(t)?In(t)||Ko(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Xo(e,t,s,o))?(As(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&xs(e,t,s,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!z(s))?As(e,Ke(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),xs(e,t,s,o))};function Xo(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ts(t)&&B(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ts(t)&&z(n)?!1:t in e}const Zo=se({patchProp:zo},qo);let Ps;function el(){return Ps||(Ps=ro(Zo))}const tl=(...e)=>{const t=el().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=sl(s);if(!r)return;const i=t._component;!B(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,nl(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function nl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function sl(e){return z(e)?document.querySelector(e):e}const be=[{question:`关于Brooks提及的软件开发本质难题，下列说法中不准确的是（ 多选 ）

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
7. 开发人员：负责软件产品的开发`}],rl={class:"container"},il={class:"header"},ol={class:"tab-container"},ll={key:0},cl={key:0,class:"question-container"},fl={class:"question-header"},ul={class:"question-number"},al={key:0,class:"question-type"},dl={key:1,class:"question-type"},hl={class:"question-content"},pl={class:"options-container"},gl=["onClick"],_l={class:"option-letter"},ml={class:"option-text"},bl={class:"controls"},vl=["disabled"],yl={key:1,class:"result-container"},Cl={class:"score-circle"},wl={class:"score-text"},xl={key:0,class:"incorrect-questions"},Al={key:1,class:"short-answer-container"},Sl={class:"short-answer-question"},Dl={class:"short-answer-answer"},Tl={class:"controls"},Pl=["disabled"],El=["disabled"],Ol=ir({__name:"Exercise",setup(e){const t=ze(!1),n=ze(0),s=ot(()=>yn[n.value]),r=()=>{n.value>0&&n.value--},i=()=>{n.value<yn.length-1&&n.value++},o=ze([{question:"",userAnswer:"",correctAnswer:""}]),l=F=>{const P=F.split(`
`),j=[],fe=/^([A-Z]) : (.+)$/;for(let re=0;re<P.length;re++){const Me=P[re].match(fe);Me&&j.push({letter:Me[1],text:Me[2]})}return j},u=ot(()=>be.map(F=>({...F,options:l(F.question),isMultiple:F.question.includes("多选")}))),d=ze(0),a=ze(Array(be.length).fill("")),p=ze(!1),x=ze(0);ot(()=>(d.value+1)/be.length*100);const A=ot(()=>u.value[d.value]),R=F=>a.value[d.value].includes(F),M=F=>{const P=a.value[d.value];A.value.isMultiple?P.includes(F)?a.value[d.value]=P.replace(F,""):a.value[d.value]=P+F:a.value[d.value]=F},X=()=>{d.value>0&&d.value--},N=()=>{d.value<be.length-1&&d.value++},Q=()=>{let F=0;const P=[];for(let j=0;j<be.length;j++){const fe=[...a.value[j]].sort().join(""),re=[...be[j].answer].sort().join("");fe===re?F++:P.push({question:be[j].question,userAnswer:fe||"未作答",correctAnswer:re})}x.value=F,o.value=P,p.value=!0},Y=()=>{const F=x.value/be.length*100;return F>=90?"太棒了！您已经掌握了这些知识点！":F>=70?"做得很好！继续努力！":F>=50?"不错的尝试！复习一下会更好！":"需要更多练习，加油！"},T=ot(()=>{const F=x.value/be.length*100;return F>=90?"excellent":F>=70?"good":F>=50?"average":"poor"}),G=()=>{d.value=0,a.value=Array(be.length).fill(""),p.value=!1,x.value=0};return(F,P)=>(ee(),ae("div",rl,[I("div",il,[P[2]||(P[2]=I("h1",null,"软件质量管理",-1)),I("div",ol,[I("button",{class:tt(["tab-btn",{active:!t.value}]),onClick:P[0]||(P[0]=j=>t.value=!1)}," 选择题 ",2),I("button",{class:tt(["tab-btn",{active:t.value}]),onClick:P[1]||(P[1]=j=>t.value=!0)}," 简答题 ",2)])]),t.value?(ee(),ae("div",Al,[I("div",Sl,de(s.value.question),1),I("div",Dl,[I("p",null,de(s.value.answer),1)]),I("div",Tl,[I("button",{class:"btn btn-prev",onClick:r,disabled:n.value===0},P[11]||(P[11]=[I("i",{class:"fas fa-arrow-left"},null,-1),Te(" 上一题 ")]),8,Pl),I("button",{class:"btn btn-next",onClick:i,disabled:n.value===Nt(yn).length-1},P[12]||(P[12]=[Te(" 下一题 "),I("i",{class:"fas fa-arrow-right"},null,-1)]),8,El)])])):(ee(),ae("div",ll,[p.value?(ee(),ae("div",yl,[P[10]||(P[10]=I("h2",{class:"result-title"},"测试完成!",-1)),I("div",Cl,[I("div",wl,de(x.value)+" / "+de(Nt(be).length),1)]),I("div",{class:tt(["feedback",T.value])},de(Y()),3),o.value.length?(ee(),ae("div",xl,[P[8]||(P[8]=I("h3",null,"您答错的题目：",-1)),(ee(!0),ae(ye,null,is(o.value,(j,fe)=>(ee(),ae("div",{key:fe,class:"incorrect-question"},[I("p",null,[I("strong",null,"题目 "+de(fe+1)+"：",1),Te(" "+de(j.question.split(`

`)[0]),1)]),I("p",null,[P[6]||(P[6]=I("strong",null,"您的答案：",-1)),Te(" "+de(j.userAnswer),1)]),I("p",null,[P[7]||(P[7]=I("strong",null,"正确答案：",-1)),Te(" "+de(j.correctAnswer),1)])]))),128))])):wo("",!0),I("button",{class:"restart-btn",onClick:G},P[9]||(P[9]=[I("i",{class:"fas fa-redo"},null,-1),Te(" 重新测试 ")]))])):(ee(),ae("div",cl,[I("div",fl,[I("div",ul,"题目 "+de(d.value+1),1),A.value.isMultiple?(ee(),ae("div",al,"多选题")):(ee(),ae("div",dl,"单选题"))]),I("div",hl,de(A.value.question.split(`

`)[0]),1),I("div",pl,[(ee(!0),ae(ye,null,is(A.value.options,(j,fe)=>(ee(),ae("div",{key:fe,class:tt(["option",{selected:R(j.letter)}]),onClick:re=>M(j.letter)},[I("div",_l,de(j.letter),1),I("div",ml,de(j.text),1)],10,gl))),128))]),I("div",bl,[I("button",{class:"btn btn-prev",onClick:X,disabled:d.value===0},P[3]||(P[3]=[I("i",{class:"fas fa-arrow-left"},null,-1),Te(" 上一题 ")]),8,vl),d.value<Nt(be).length-1?(ee(),ae("button",{key:0,class:"btn btn-next",onClick:N},P[4]||(P[4]=[Te(" 下一题 "),I("i",{class:"fas fa-arrow-right"},null,-1)]))):(ee(),ae("button",{key:1,class:"btn btn-finish",onClick:Q},P[5]||(P[5]=[Te(" 完成测试 "),I("i",{class:"fas fa-check"},null,-1)])))])]))]))]))}}),Bl=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},Il=Bl(Ol,[["__scopeId","data-v-e6ce5fd2"]]),Ml=ir({__name:"App",setup(e){return(t,n)=>(ee(),Pr(Il,{msg:"Vite + Vue"}))}});tl(Ml).mount("#app");
