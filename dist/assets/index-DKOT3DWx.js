(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function On(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const K={},lt=[],Oe=()=>{},Fr=()=>!1,Gt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Bn=e=>e.startsWith("onUpdate:"),se=Object.assign,In=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Lr=Object.prototype.hasOwnProperty,H=(e,t)=>Lr.call(e,t),M=Array.isArray,ct=e=>zt(e)==="[object Map]",Ps=e=>zt(e)==="[object Set]",O=e=>typeof e=="function",z=e=>typeof e=="string",Ye=e=>typeof e=="symbol",k=e=>e!==null&&typeof e=="object",Ms=e=>(k(e)||O(e))&&O(e.then)&&O(e.catch),Os=Object.prototype.toString,zt=e=>Os.call(e),Hr=e=>zt(e).slice(8,-1),Bs=e=>zt(e)==="[object Object]",Rn=e=>z(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,vt=On(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xt=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Nr=/-(\w)/g,Ke=Xt(e=>e.replace(Nr,(t,n)=>n?n.toUpperCase():"")),jr=/\B([A-Z])/g,st=Xt(e=>e.replace(jr,"-$1").toLowerCase()),Is=Xt(e=>e.charAt(0).toUpperCase()+e.slice(1)),cn=Xt(e=>e?`on${Is(e)}`:""),We=(e,t)=>!Object.is(e,t),fn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Rs=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},$r=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ts;const Zt=()=>ts||(ts=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qn(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=z(s)?Kr(s):qn(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(z(e)||k(e))return e}const Ur=/;(?![^(]*\))/g,Vr=/:([^]+)/,Wr=/\/\*[^]*?\*\//g;function Kr(e){const t={};return e.replace(Wr,"").split(Ur).forEach(n=>{if(n){const s=n.split(Vr);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function tt(e){let t="";if(z(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const s=tt(e[n]);s&&(t+=s+" ")}else if(k(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Qr="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jr=On(Qr);function qs(e){return!!e||e===""}const Fs=e=>!!(e&&e.__v_isRef===!0),de=e=>z(e)?e:e==null?"":M(e)||k(e)&&(e.toString===Os||!O(e.toString))?Fs(e)?de(e.value):JSON.stringify(e,Ls,2):String(e),Ls=(e,t)=>Fs(t)?Ls(e,t.value):ct(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[un(s,i)+" =>"]=r,n),{})}:Ps(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>un(n))}:Ye(t)?un(t):k(t)&&!M(t)&&!Bs(t)?String(t):t,un=(e,t="")=>{var n;return Ye(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let he;class Yr{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=he,!t&&he&&(this.index=(he.scopes||(he.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=he;try{return he=this,t()}finally{he=n}}}on(){++this._on===1&&(this.prevScope=he,he=this)}off(){this._on>0&&--this._on===0&&(he=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function kr(){return he}let W;const an=new WeakSet;class Hs{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,he&&he.active&&he.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,an.has(this)&&(an.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||js(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ns(this),$s(this);const t=W,n=Ce;W=this,Ce=!0;try{return this.fn()}finally{Us(this),W=t,Ce=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Hn(t);this.deps=this.depsTail=void 0,ns(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?an.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){wn(this)&&this.run()}get dirty(){return wn(this)}}let Ns=0,yt,wt;function js(e,t=!1){if(e.flags|=8,t){e.next=wt,wt=e;return}e.next=yt,yt=e}function Fn(){Ns++}function Ln(){if(--Ns>0)return;if(wt){let t=wt;for(wt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;yt;){let t=yt;for(yt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function $s(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Us(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Hn(s),Gr(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function wn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Vs(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Vs(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===St)||(e.globalVersion=St,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!wn(e))))return;e.flags|=2;const t=e.dep,n=W,s=Ce;W=e,Ce=!0;try{$s(e);const r=e.fn(e._value);(t.version===0||We(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{W=n,Ce=s,Us(e),e.flags&=-3}}function Hn(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Hn(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Gr(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ce=!0;const Ws=[];function He(){Ws.push(Ce),Ce=!1}function Ne(){const e=Ws.pop();Ce=e===void 0?!0:e}function ns(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=W;W=void 0;try{t()}finally{W=n}}}let St=0;class zr{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Nn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!W||!Ce||W===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==W)n=this.activeLink=new zr(W,this),W.deps?(n.prevDep=W.depsTail,W.depsTail.nextDep=n,W.depsTail=n):W.deps=W.depsTail=n,Ks(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=W.depsTail,n.nextDep=void 0,W.depsTail.nextDep=n,W.depsTail=n,W.deps===n&&(W.deps=s)}return n}trigger(t){this.version++,St++,this.notify(t)}notify(t){Fn();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ln()}}}function Ks(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Ks(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Cn=new WeakMap,nt=Symbol(""),xn=Symbol(""),Dt=Symbol("");function te(e,t,n){if(Ce&&W){let s=Cn.get(e);s||Cn.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new Nn),r.map=s,r.key=n),r.track()}}function Fe(e,t,n,s,r,i){const o=Cn.get(e);if(!o){St++;return}const l=u=>{u&&u.trigger()};if(Fn(),t==="clear")o.forEach(l);else{const u=M(e),d=u&&Rn(n);if(u&&n==="length"){const a=Number(s);o.forEach((p,x)=>{(x==="length"||x===Dt||!Ye(x)&&x>=a)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),d&&l(o.get(Dt)),t){case"add":u?d&&l(o.get("length")):(l(o.get(nt)),ct(e)&&l(o.get(xn)));break;case"delete":u||(l(o.get(nt)),ct(e)&&l(o.get(xn)));break;case"set":ct(e)&&l(o.get(nt));break}}Ln()}function rt(e){const t=L(e);return t===e?t:(te(t,"iterate",Dt),ve(e)?t:t.map(Z))}function en(e){return te(e=L(e),"iterate",Dt),e}const Xr={__proto__:null,[Symbol.iterator](){return dn(this,Symbol.iterator,Z)},concat(...e){return rt(this).concat(...e.map(t=>M(t)?rt(t):t))},entries(){return dn(this,"entries",e=>(e[1]=Z(e[1]),e))},every(e,t){return Re(this,"every",e,t,void 0,arguments)},filter(e,t){return Re(this,"filter",e,t,n=>n.map(Z),arguments)},find(e,t){return Re(this,"find",e,t,Z,arguments)},findIndex(e,t){return Re(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Re(this,"findLast",e,t,Z,arguments)},findLastIndex(e,t){return Re(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Re(this,"forEach",e,t,void 0,arguments)},includes(...e){return hn(this,"includes",e)},indexOf(...e){return hn(this,"indexOf",e)},join(e){return rt(this).join(e)},lastIndexOf(...e){return hn(this,"lastIndexOf",e)},map(e,t){return Re(this,"map",e,t,void 0,arguments)},pop(){return _t(this,"pop")},push(...e){return _t(this,"push",e)},reduce(e,...t){return ss(this,"reduce",e,t)},reduceRight(e,...t){return ss(this,"reduceRight",e,t)},shift(){return _t(this,"shift")},some(e,t){return Re(this,"some",e,t,void 0,arguments)},splice(...e){return _t(this,"splice",e)},toReversed(){return rt(this).toReversed()},toSorted(e){return rt(this).toSorted(e)},toSpliced(...e){return rt(this).toSpliced(...e)},unshift(...e){return _t(this,"unshift",e)},values(){return dn(this,"values",Z)}};function dn(e,t,n){const s=en(e),r=s[t]();return s!==e&&!ve(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const Zr=Array.prototype;function Re(e,t,n,s,r,i){const o=en(e),l=o!==e&&!ve(e),u=o[t];if(u!==Zr[t]){const p=u.apply(e,i);return l?Z(p):p}let d=n;o!==e&&(l?d=function(p,x){return n.call(this,Z(p),x,e)}:n.length>2&&(d=function(p,x){return n.call(this,p,x,e)}));const a=u.call(o,d,s);return l&&r?r(a):a}function ss(e,t,n,s){const r=en(e);let i=n;return r!==e&&(ve(e)?n.length>3&&(i=function(o,l,u){return n.call(this,o,l,u,e)}):i=function(o,l,u){return n.call(this,o,Z(l),u,e)}),r[t](i,...s)}function hn(e,t,n){const s=L(e);te(s,"iterate",Dt);const r=s[t](...n);return(r===-1||r===!1)&&Vn(n[0])?(n[0]=L(n[0]),s[t](...n)):r}function _t(e,t,n=[]){He(),Fn();const s=L(e)[t].apply(e,n);return Ln(),Ne(),s}const ei=On("__proto__,__v_isRef,__isVue"),Qs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ye));function ti(e){Ye(e)||(e=String(e));const t=L(this);return te(t,"has",e),t.hasOwnProperty(e)}class Js{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?ai:zs:i?Gs:ks).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=M(t);if(!r){let u;if(o&&(u=Xr[n]))return u;if(n==="hasOwnProperty")return ti}const l=Reflect.get(t,n,ne(t)?t:s);return(Ye(n)?Qs.has(n):ei(n))||(r||te(t,"get",n),i)?l:ne(l)?o&&Rn(n)?l:l.value:k(l)?r?Xs(l):$n(l):l}}class Ys extends Js{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];if(!this._isShallow){const u=Qe(i);if(!ve(s)&&!Qe(s)&&(i=L(i),s=L(s)),!M(t)&&ne(i)&&!ne(s))return u?!1:(i.value=s,!0)}const o=M(t)&&Rn(n)?Number(n)<t.length:H(t,n),l=Reflect.set(t,n,s,ne(t)?t:r);return t===L(r)&&(o?We(s,i)&&Fe(t,"set",n,s):Fe(t,"add",n,s)),l}deleteProperty(t,n){const s=H(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&Fe(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!Ye(n)||!Qs.has(n))&&te(t,"has",n),s}ownKeys(t){return te(t,"iterate",M(t)?"length":nt),Reflect.ownKeys(t)}}class ni extends Js{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const si=new Ys,ri=new ni,ii=new Ys(!0);const An=e=>e,Ft=e=>Reflect.getPrototypeOf(e);function oi(e,t,n){return function(...s){const r=this.__v_raw,i=L(r),o=ct(i),l=e==="entries"||e===Symbol.iterator&&o,u=e==="keys"&&o,d=r[e](...s),a=n?An:t?Vt:Z;return!t&&te(i,"iterate",u?xn:nt),{next(){const{value:p,done:x}=d.next();return x?{value:p,done:x}:{value:l?[a(p[0]),a(p[1])]:a(p),done:x}},[Symbol.iterator](){return this}}}}function Lt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function li(e,t){const n={get(r){const i=this.__v_raw,o=L(i),l=L(r);e||(We(r,l)&&te(o,"get",r),te(o,"get",l));const{has:u}=Ft(o),d=t?An:e?Vt:Z;if(u.call(o,r))return d(i.get(r));if(u.call(o,l))return d(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!e&&te(L(r),"iterate",nt),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=L(i),l=L(r);return e||(We(r,l)&&te(o,"has",r),te(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,u=L(l),d=t?An:e?Vt:Z;return!e&&te(u,"iterate",nt),l.forEach((a,p)=>r.call(i,d(a),d(p),o))}};return se(n,e?{add:Lt("add"),set:Lt("set"),delete:Lt("delete"),clear:Lt("clear")}:{add(r){!t&&!ve(r)&&!Qe(r)&&(r=L(r));const i=L(this);return Ft(i).has.call(i,r)||(i.add(r),Fe(i,"add",r,r)),this},set(r,i){!t&&!ve(i)&&!Qe(i)&&(i=L(i));const o=L(this),{has:l,get:u}=Ft(o);let d=l.call(o,r);d||(r=L(r),d=l.call(o,r));const a=u.call(o,r);return o.set(r,i),d?We(i,a)&&Fe(o,"set",r,i):Fe(o,"add",r,i),this},delete(r){const i=L(this),{has:o,get:l}=Ft(i);let u=o.call(i,r);u||(r=L(r),u=o.call(i,r)),l&&l.call(i,r);const d=i.delete(r);return u&&Fe(i,"delete",r,void 0),d},clear(){const r=L(this),i=r.size!==0,o=r.clear();return i&&Fe(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=oi(r,e,t)}),n}function jn(e,t){const n=li(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(H(n,r)&&r in s?n:s,r,i)}const ci={get:jn(!1,!1)},fi={get:jn(!1,!0)},ui={get:jn(!0,!1)};const ks=new WeakMap,Gs=new WeakMap,zs=new WeakMap,ai=new WeakMap;function di(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hi(e){return e.__v_skip||!Object.isExtensible(e)?0:di(Hr(e))}function $n(e){return Qe(e)?e:Un(e,!1,si,ci,ks)}function pi(e){return Un(e,!1,ii,fi,Gs)}function Xs(e){return Un(e,!0,ri,ui,zs)}function Un(e,t,n,s,r){if(!k(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=hi(e);if(i===0)return e;const o=r.get(e);if(o)return o;const l=new Proxy(e,i===2?s:n);return r.set(e,l),l}function ft(e){return Qe(e)?ft(e.__v_raw):!!(e&&e.__v_isReactive)}function Qe(e){return!!(e&&e.__v_isReadonly)}function ve(e){return!!(e&&e.__v_isShallow)}function Vn(e){return e?!!e.__v_raw:!1}function L(e){const t=e&&e.__v_raw;return t?L(t):e}function gi(e){return!H(e,"__v_skip")&&Object.isExtensible(e)&&Rs(e,"__v_skip",!0),e}const Z=e=>k(e)?$n(e):e,Vt=e=>k(e)?Xs(e):e;function ne(e){return e?e.__v_isRef===!0:!1}function ze(e){return _i(e,!1)}function _i(e,t){return ne(e)?e:new mi(e,t)}class mi{constructor(t,n){this.dep=new Nn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:L(t),this._value=n?t:Z(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||ve(t)||Qe(t);t=s?t:L(t),We(t,n)&&(this._rawValue=t,this._value=s?t:Z(t),this.dep.trigger())}}function Nt(e){return ne(e)?e.value:e}const bi={get:(e,t,n)=>t==="__v_raw"?e:Nt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return ne(r)&&!ne(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Zs(e){return ft(e)?e:new Proxy(e,bi)}class vi{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Nn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=St-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&W!==this)return js(this,!0),!0}get value(){const t=this.dep.track();return Vs(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function yi(e,t,n=!1){let s,r;return O(e)?s=e:(s=e.get,r=e.set),new vi(s,r,n)}const Ht={},Wt=new WeakMap;let et;function wi(e,t=!1,n=et){if(n){let s=Wt.get(n);s||Wt.set(n,s=[]),s.push(e)}}function Ci(e,t,n=K){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:u}=n,d=T=>r?T:ve(T)||r===!1||r===0?Ve(T,1):Ve(T);let a,p,x,A,R=!1,I=!1;if(ne(e)?(p=()=>e.value,R=ve(e)):ft(e)?(p=()=>d(e),R=!0):M(e)?(I=!0,R=e.some(T=>ft(T)||ve(T)),p=()=>e.map(T=>{if(ne(T))return T.value;if(ft(T))return d(T);if(O(T))return u?u(T,2):T()})):O(e)?t?p=u?()=>u(e,2):e:p=()=>{if(x){He();try{x()}finally{Ne()}}const T=et;et=a;try{return u?u(e,3,[A]):e(A)}finally{et=T}}:p=Oe,t&&r){const T=p,G=r===!0?1/0:r;p=()=>Ve(T(),G)}const X=kr(),N=()=>{a.stop(),X&&X.active&&In(X.effects,a)};if(i&&t){const T=t;t=(...G)=>{T(...G),N()}}let Q=I?new Array(e.length).fill(Ht):Ht;const J=T=>{if(!(!(a.flags&1)||!a.dirty&&!T))if(t){const G=a.run();if(r||R||(I?G.some((F,E)=>We(F,Q[E])):We(G,Q))){x&&x();const F=et;et=a;try{const E=[G,Q===Ht?void 0:I&&Q[0]===Ht?[]:Q,A];Q=G,u?u(t,3,E):t(...E)}finally{et=F}}}else a.run()};return l&&l(J),a=new Hs(p),a.scheduler=o?()=>o(J,!1):J,A=T=>wi(T,!1,a),x=a.onStop=()=>{const T=Wt.get(a);if(T){if(u)u(T,4);else for(const G of T)G();Wt.delete(a)}},t?s?J(!0):Q=a.run():o?o(J.bind(null,!0),!0):a.run(),N.pause=a.pause.bind(a),N.resume=a.resume.bind(a),N.stop=N,N}function Ve(e,t=1/0,n){if(t<=0||!k(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ne(e))Ve(e.value,t,n);else if(M(e))for(let s=0;s<e.length;s++)Ve(e[s],t,n);else if(Ps(e)||ct(e))e.forEach(s=>{Ve(s,t,n)});else if(Bs(e)){for(const s in e)Ve(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Ve(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mt(e,t,n,s){try{return s?e(...s):e()}catch(r){tn(r,t,n)}}function Be(e,t,n,s){if(O(e)){const r=Mt(e,t,n,s);return r&&Ms(r)&&r.catch(i=>{tn(i,t,n)}),r}if(M(e)){const r=[];for(let i=0;i<e.length;i++)r.push(Be(e[i],t,n,s));return r}}function tn(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||K;if(t){let l=t.parent;const u=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const a=l.ec;if(a){for(let p=0;p<a.length;p++)if(a[p](e,u,d)===!1)return}l=l.parent}if(i){He(),Mt(i,null,10,[e,u,d]),Ne();return}}xi(e,n,r,s,o)}function xi(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const le=[];let Ee=-1;const ut=[];let $e=null,it=0;const er=Promise.resolve();let Kt=null;function Ai(e){const t=Kt||er;return e?t.then(this?e.bind(this):e):t}function Si(e){let t=Ee+1,n=le.length;for(;t<n;){const s=t+n>>>1,r=le[s],i=Tt(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function Wn(e){if(!(e.flags&1)){const t=Tt(e),n=le[le.length-1];!n||!(e.flags&2)&&t>=Tt(n)?le.push(e):le.splice(Si(t),0,e),e.flags|=1,tr()}}function tr(){Kt||(Kt=er.then(sr))}function Di(e){M(e)?ut.push(...e):$e&&e.id===-1?$e.splice(it+1,0,e):e.flags&1||(ut.push(e),e.flags|=1),tr()}function rs(e,t,n=Ee+1){for(;n<le.length;n++){const s=le[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;le.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function nr(e){if(ut.length){const t=[...new Set(ut)].sort((n,s)=>Tt(n)-Tt(s));if(ut.length=0,$e){$e.push(...t);return}for($e=t,it=0;it<$e.length;it++){const n=$e[it];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}$e=null,it=0}}const Tt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function sr(e){try{for(Ee=0;Ee<le.length;Ee++){const t=le[Ee];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Mt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ee<le.length;Ee++){const t=le[Ee];t&&(t.flags&=-2)}Ee=-1,le.length=0,nr(),Kt=null,(le.length||ut.length)&&sr()}}let Me=null,rr=null;function Qt(e){const t=Me;return Me=e,rr=e&&e.type.__scopeId||null,t}function Ti(e,t=Me,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&ps(-1);const i=Qt(t);let o;try{o=e(...r)}finally{Qt(i),s._d&&ps(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Xe(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let u=l.dir[s];u&&(He(),Be(u,n,8,[e.el,l,e,t]),Ne())}}const Ei=Symbol("_vte"),Pi=e=>e.__isTeleport;function Kn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Kn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function ir(e,t){return O(e)?se({name:e.name},t,{setup:e}):e}function or(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Jt(e,t,n,s,r=!1){if(M(e)){e.forEach((R,I)=>Jt(R,t&&(M(t)?t[I]:t),n,s,r));return}if(Ct(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Jt(e,t,n,s.component.subTree);return}const i=s.shapeFlag&4?kn(s.component):s.el,o=r?null:i,{i:l,r:u}=e,d=t&&t.r,a=l.refs===K?l.refs={}:l.refs,p=l.setupState,x=L(p),A=p===K?()=>!1:R=>H(x,R);if(d!=null&&d!==u&&(z(d)?(a[d]=null,A(d)&&(p[d]=null)):ne(d)&&(d.value=null)),O(u))Mt(u,l,12,[o,a]);else{const R=z(u),I=ne(u);if(R||I){const X=()=>{if(e.f){const N=R?A(u)?p[u]:a[u]:u.value;r?M(N)&&In(N,i):M(N)?N.includes(i)||N.push(i):R?(a[u]=[i],A(u)&&(p[u]=a[u])):(u.value=[i],e.k&&(a[e.k]=u.value))}else R?(a[u]=o,A(u)&&(p[u]=o)):I&&(u.value=o,e.k&&(a[e.k]=o))};o?(X.id=-1,_e(X,n)):X()}}}Zt().requestIdleCallback;Zt().cancelIdleCallback;const Ct=e=>!!e.type.__asyncLoader,lr=e=>e.type.__isKeepAlive;function Mi(e,t){cr(e,"a",t)}function Oi(e,t){cr(e,"da",t)}function cr(e,t,n=ce){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(nn(t,s,n),n){let r=n.parent;for(;r&&r.parent;)lr(r.parent.vnode)&&Bi(s,t,n,r),r=r.parent}}function Bi(e,t,n,s){const r=nn(t,e,s,!0);fr(()=>{In(s[t],r)},n)}function nn(e,t,n=ce,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{He();const l=Ot(n),u=Be(t,n,e,o);return l(),Ne(),u});return s?r.unshift(i):r.push(i),i}}const je=e=>(t,n=ce)=>{(!Pt||e==="sp")&&nn(e,(...s)=>t(...s),n)},Ii=je("bm"),Ri=je("m"),qi=je("bu"),Fi=je("u"),Li=je("bum"),fr=je("um"),Hi=je("sp"),Ni=je("rtg"),ji=je("rtc");function $i(e,t=ce){nn("ec",e,t)}const Ui=Symbol.for("v-ndc");function is(e,t,n,s){let r;const i=n,o=M(e);if(o||z(e)){const l=o&&ft(e);let u=!1,d=!1;l&&(u=!ve(e),d=Qe(e),e=en(e)),r=new Array(e.length);for(let a=0,p=e.length;a<p;a++)r[a]=t(u?d?Vt(Z(e[a])):Z(e[a]):e[a],a,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=t(l+1,l,void 0,i)}else if(k(e))if(e[Symbol.iterator])r=Array.from(e,(l,u)=>t(l,u,void 0,i));else{const l=Object.keys(e);r=new Array(l.length);for(let u=0,d=l.length;u<d;u++){const a=l[u];r[u]=t(e[a],a,u,i)}}else r=[];return r}const Sn=e=>e?Or(e)?kn(e):Sn(e.parent):null,xt=se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Sn(e.parent),$root:e=>Sn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ar(e),$forceUpdate:e=>e.f||(e.f=()=>{Wn(e.update)}),$nextTick:e=>e.n||(e.n=Ai.bind(e.proxy)),$watch:e=>uo.bind(e)}),pn=(e,t)=>e!==K&&!e.__isScriptSetup&&H(e,t),Vi={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:u}=e;let d;if(t[0]!=="$"){const A=o[t];if(A!==void 0)switch(A){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(pn(s,t))return o[t]=1,s[t];if(r!==K&&H(r,t))return o[t]=2,r[t];if((d=e.propsOptions[0])&&H(d,t))return o[t]=3,i[t];if(n!==K&&H(n,t))return o[t]=4,n[t];Dn&&(o[t]=0)}}const a=xt[t];let p,x;if(a)return t==="$attrs"&&te(e.attrs,"get",""),a(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(n!==K&&H(n,t))return o[t]=4,n[t];if(x=u.config.globalProperties,H(x,t))return x[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return pn(r,t)?(r[t]=n,!0):s!==K&&H(s,t)?(s[t]=n,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let l;return!!n[o]||e!==K&&H(e,o)||pn(t,o)||(l=i[0])&&H(l,o)||H(s,o)||H(xt,o)||H(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:H(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function os(e){return M(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Dn=!0;function Wi(e){const t=ar(e),n=e.proxy,s=e.ctx;Dn=!1,t.beforeCreate&&ls(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:l,provide:u,inject:d,created:a,beforeMount:p,mounted:x,beforeUpdate:A,updated:R,activated:I,deactivated:X,beforeDestroy:N,beforeUnmount:Q,destroyed:J,unmounted:T,render:G,renderTracked:F,renderTriggered:E,errorCaptured:$,serverPrefetch:fe,expose:re,inheritAttrs:Ie,components:Bt,directives:It,filters:on}=t;if(d&&Ki(d,s,null),o)for(const Y in o){const U=o[Y];O(U)&&(s[Y]=U.bind(n))}if(r){const Y=r.call(n,n);k(Y)&&(e.data=$n(Y))}if(Dn=!0,i)for(const Y in i){const U=i[Y],ke=O(U)?U.bind(n,n):O(U.get)?U.get.bind(n,n):Oe,Rt=!O(U)&&O(U.set)?U.set.bind(n):Oe,Ge=ot({get:ke,set:Rt});Object.defineProperty(s,Y,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:xe=>Ge.value=xe})}if(l)for(const Y in l)ur(l[Y],s,n,Y);if(u){const Y=O(u)?u.call(n):u;Reflect.ownKeys(Y).forEach(U=>{zi(U,Y[U])})}a&&ls(a,e,"c");function ie(Y,U){M(U)?U.forEach(ke=>Y(ke.bind(n))):U&&Y(U.bind(n))}if(ie(Ii,p),ie(Ri,x),ie(qi,A),ie(Fi,R),ie(Mi,I),ie(Oi,X),ie($i,$),ie(ji,F),ie(Ni,E),ie(Li,Q),ie(fr,T),ie(Hi,fe),M(re))if(re.length){const Y=e.exposed||(e.exposed={});re.forEach(U=>{Object.defineProperty(Y,U,{get:()=>n[U],set:ke=>n[U]=ke})})}else e.exposed||(e.exposed={});G&&e.render===Oe&&(e.render=G),Ie!=null&&(e.inheritAttrs=Ie),Bt&&(e.components=Bt),It&&(e.directives=It),fe&&or(e)}function Ki(e,t,n=Oe){M(e)&&(e=Tn(e));for(const s in e){const r=e[s];let i;k(r)?"default"in r?i=jt(r.from||s,r.default,!0):i=jt(r.from||s):i=jt(r),ne(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function ls(e,t,n){Be(M(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function ur(e,t,n,s){let r=s.includes(".")?Ar(n,s):()=>n[s];if(z(e)){const i=t[e];O(i)&&_n(r,i)}else if(O(e))_n(r,e.bind(n));else if(k(e))if(M(e))e.forEach(i=>ur(i,t,n,s));else{const i=O(e.handler)?e.handler.bind(n):t[e.handler];O(i)&&_n(r,i,e)}}function ar(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let u;return l?u=l:!r.length&&!n&&!s?u=t:(u={},r.length&&r.forEach(d=>Yt(u,d,o,!0)),Yt(u,t,o)),k(t)&&i.set(t,u),u}function Yt(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&Yt(e,i,n,!0),r&&r.forEach(o=>Yt(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const l=Qi[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const Qi={data:cs,props:fs,emits:fs,methods:bt,computed:bt,beforeCreate:oe,created:oe,beforeMount:oe,mounted:oe,beforeUpdate:oe,updated:oe,beforeDestroy:oe,beforeUnmount:oe,destroyed:oe,unmounted:oe,activated:oe,deactivated:oe,errorCaptured:oe,serverPrefetch:oe,components:bt,directives:bt,watch:Yi,provide:cs,inject:Ji};function cs(e,t){return t?e?function(){return se(O(e)?e.call(this,this):e,O(t)?t.call(this,this):t)}:t:e}function Ji(e,t){return bt(Tn(e),Tn(t))}function Tn(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function oe(e,t){return e?[...new Set([].concat(e,t))]:t}function bt(e,t){return e?se(Object.create(null),e,t):t}function fs(e,t){return e?M(e)&&M(t)?[...new Set([...e,...t])]:se(Object.create(null),os(e),os(t??{})):t}function Yi(e,t){if(!e)return t;if(!t)return e;const n=se(Object.create(null),e);for(const s in t)n[s]=oe(e[s],t[s]);return n}function dr(){return{app:null,config:{isNativeTag:Fr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ki=0;function Gi(e,t){return function(s,r=null){O(s)||(s=se({},s)),r!=null&&!k(r)&&(r=null);const i=dr(),o=new WeakSet,l=[];let u=!1;const d=i.app={_uid:ki++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Bo,get config(){return i.config},set config(a){},use(a,...p){return o.has(a)||(a&&O(a.install)?(o.add(a),a.install(d,...p)):O(a)&&(o.add(a),a(d,...p))),d},mixin(a){return i.mixins.includes(a)||i.mixins.push(a),d},component(a,p){return p?(i.components[a]=p,d):i.components[a]},directive(a,p){return p?(i.directives[a]=p,d):i.directives[a]},mount(a,p,x){if(!u){const A=d._ceVNode||Le(s,r);return A.appContext=i,x===!0?x="svg":x===!1&&(x=void 0),e(A,a,x),u=!0,d._container=a,a.__vue_app__=d,kn(A.component)}},onUnmount(a){l.push(a)},unmount(){u&&(Be(l,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(a,p){return i.provides[a]=p,d},runWithContext(a){const p=at;at=d;try{return a()}finally{at=p}}};return d}}let at=null;function zi(e,t){if(ce){let n=ce.provides;const s=ce.parent&&ce.parent.provides;s===n&&(n=ce.provides=Object.create(s)),n[e]=t}}function jt(e,t,n=!1){const s=ce||Me;if(s||at){let r=at?at._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&O(t)?t.call(s&&s.proxy):t}}const hr={},pr=()=>Object.create(hr),gr=e=>Object.getPrototypeOf(e)===hr;function Xi(e,t,n,s=!1){const r={},i=pr();e.propsDefaults=Object.create(null),_r(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:pi(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Zi(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,l=L(r),[u]=e.propsOptions;let d=!1;if((s||o>0)&&!(o&16)){if(o&8){const a=e.vnode.dynamicProps;for(let p=0;p<a.length;p++){let x=a[p];if(sn(e.emitsOptions,x))continue;const A=t[x];if(u)if(H(i,x))A!==i[x]&&(i[x]=A,d=!0);else{const R=Ke(x);r[R]=En(u,l,R,A,e,!1)}else A!==i[x]&&(i[x]=A,d=!0)}}}else{_r(e,t,r,i)&&(d=!0);let a;for(const p in l)(!t||!H(t,p)&&((a=st(p))===p||!H(t,a)))&&(u?n&&(n[p]!==void 0||n[a]!==void 0)&&(r[p]=En(u,l,p,void 0,e,!0)):delete r[p]);if(i!==l)for(const p in i)(!t||!H(t,p))&&(delete i[p],d=!0)}d&&Fe(e.attrs,"set","")}function _r(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,l;if(t)for(let u in t){if(vt(u))continue;const d=t[u];let a;r&&H(r,a=Ke(u))?!i||!i.includes(a)?n[a]=d:(l||(l={}))[a]=d:sn(e.emitsOptions,u)||(!(u in s)||d!==s[u])&&(s[u]=d,o=!0)}if(i){const u=L(n),d=l||K;for(let a=0;a<i.length;a++){const p=i[a];n[p]=En(r,u,p,d[p],e,!H(d,p))}}return o}function En(e,t,n,s,r,i){const o=e[n];if(o!=null){const l=H(o,"default");if(l&&s===void 0){const u=o.default;if(o.type!==Function&&!o.skipFactory&&O(u)){const{propsDefaults:d}=r;if(n in d)s=d[n];else{const a=Ot(r);s=d[n]=u.call(null,t),a()}}else s=u;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===st(n))&&(s=!0))}return s}const eo=new WeakMap;function mr(e,t,n=!1){const s=n?eo:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},l=[];let u=!1;if(!O(e)){const a=p=>{u=!0;const[x,A]=mr(p,t,!0);se(o,x),A&&l.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}if(!i&&!u)return k(e)&&s.set(e,lt),lt;if(M(i))for(let a=0;a<i.length;a++){const p=Ke(i[a]);us(p)&&(o[p]=K)}else if(i)for(const a in i){const p=Ke(a);if(us(p)){const x=i[a],A=o[p]=M(x)||O(x)?{type:x}:se({},x),R=A.type;let I=!1,X=!0;if(M(R))for(let N=0;N<R.length;++N){const Q=R[N],J=O(Q)&&Q.name;if(J==="Boolean"){I=!0;break}else J==="String"&&(X=!1)}else I=O(R)&&R.name==="Boolean";A[0]=I,A[1]=X,(I||H(A,"default"))&&l.push(p)}}const d=[o,l];return k(e)&&s.set(e,d),d}function us(e){return e[0]!=="$"&&!vt(e)}const Qn=e=>e[0]==="_"||e==="$stable",Jn=e=>M(e)?e.map(Pe):[Pe(e)],to=(e,t,n)=>{if(t._n)return t;const s=Ti((...r)=>Jn(t(...r)),n);return s._c=!1,s},br=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Qn(r))continue;const i=e[r];if(O(i))t[r]=to(r,i,s);else if(i!=null){const o=Jn(i);t[r]=()=>o}}},vr=(e,t)=>{const n=Jn(t);e.slots.default=()=>n},yr=(e,t,n)=>{for(const s in t)(n||!Qn(s))&&(e[s]=t[s])},no=(e,t,n)=>{const s=e.slots=pr();if(e.vnode.shapeFlag&32){const r=t._;r?(yr(s,t,n),n&&Rs(s,"_",r,!0)):br(t,s)}else t&&vr(e,t)},so=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=K;if(s.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:yr(r,t,n):(i=!t.$stable,br(t,r)),o=t}else t&&(vr(e,t),o={default:1});if(i)for(const l in r)!Qn(l)&&o[l]==null&&delete r[l]},_e=bo;function ro(e){return io(e)}function io(e,t){const n=Zt();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:u,setText:d,setElementText:a,parentNode:p,nextSibling:x,setScopeId:A=Oe,insertStaticContent:R}=e,I=(c,f,h,m=null,g=null,_=null,w=void 0,y=null,v=!!f.dynamicChildren)=>{if(c===f)return;c&&!mt(c,f)&&(m=qt(c),xe(c,g,_,!0),c=null),f.patchFlag===-2&&(v=!1,f.dynamicChildren=null);const{type:b,ref:D,shapeFlag:C}=f;switch(b){case rn:X(c,f,h,m);break;case Je:N(c,f,h,m);break;case mn:c==null&&Q(f,h,m,w);break;case we:Bt(c,f,h,m,g,_,w,y,v);break;default:C&1?G(c,f,h,m,g,_,w,y,v):C&6?It(c,f,h,m,g,_,w,y,v):(C&64||C&128)&&b.process(c,f,h,m,g,_,w,y,v,pt)}D!=null&&g&&Jt(D,c&&c.ref,_,f||c,!f)},X=(c,f,h,m)=>{if(c==null)s(f.el=l(f.children),h,m);else{const g=f.el=c.el;f.children!==c.children&&d(g,f.children)}},N=(c,f,h,m)=>{c==null?s(f.el=u(f.children||""),h,m):f.el=c.el},Q=(c,f,h,m)=>{[c.el,c.anchor]=R(c.children,f,h,m,c.el,c.anchor)},J=({el:c,anchor:f},h,m)=>{let g;for(;c&&c!==f;)g=x(c),s(c,h,m),c=g;s(f,h,m)},T=({el:c,anchor:f})=>{let h;for(;c&&c!==f;)h=x(c),r(c),c=h;r(f)},G=(c,f,h,m,g,_,w,y,v)=>{f.type==="svg"?w="svg":f.type==="math"&&(w="mathml"),c==null?F(f,h,m,g,_,w,y,v):fe(c,f,g,_,w,y,v)},F=(c,f,h,m,g,_,w,y)=>{let v,b;const{props:D,shapeFlag:C,transition:S,dirs:P}=c;if(v=c.el=o(c.type,_,D&&D.is,D),C&8?a(v,c.children):C&16&&$(c.children,v,null,m,g,gn(c,_),w,y),P&&Xe(c,null,m,"created"),E(v,c,c.scopeId,w,m),D){for(const V in D)V!=="value"&&!vt(V)&&i(v,V,null,D[V],_,m);"value"in D&&i(v,"value",null,D.value,_),(b=D.onVnodeBeforeMount)&&Te(b,m,c)}P&&Xe(c,null,m,"beforeMount");const q=oo(g,S);q&&S.beforeEnter(v),s(v,f,h),((b=D&&D.onVnodeMounted)||q||P)&&_e(()=>{b&&Te(b,m,c),q&&S.enter(v),P&&Xe(c,null,m,"mounted")},g)},E=(c,f,h,m,g)=>{if(h&&A(c,h),m)for(let _=0;_<m.length;_++)A(c,m[_]);if(g){let _=g.subTree;if(f===_||Dr(_.type)&&(_.ssContent===f||_.ssFallback===f)){const w=g.vnode;E(c,w,w.scopeId,w.slotScopeIds,g.parent)}}},$=(c,f,h,m,g,_,w,y,v=0)=>{for(let b=v;b<c.length;b++){const D=c[b]=y?Ue(c[b]):Pe(c[b]);I(null,D,f,h,m,g,_,w,y)}},fe=(c,f,h,m,g,_,w)=>{const y=f.el=c.el;let{patchFlag:v,dynamicChildren:b,dirs:D}=f;v|=c.patchFlag&16;const C=c.props||K,S=f.props||K;let P;if(h&&Ze(h,!1),(P=S.onVnodeBeforeUpdate)&&Te(P,h,f,c),D&&Xe(f,c,h,"beforeUpdate"),h&&Ze(h,!0),(C.innerHTML&&S.innerHTML==null||C.textContent&&S.textContent==null)&&a(y,""),b?re(c.dynamicChildren,b,y,h,m,gn(f,g),_):w||U(c,f,y,null,h,m,gn(f,g),_,!1),v>0){if(v&16)Ie(y,C,S,h,g);else if(v&2&&C.class!==S.class&&i(y,"class",null,S.class,g),v&4&&i(y,"style",C.style,S.style,g),v&8){const q=f.dynamicProps;for(let V=0;V<q.length;V++){const j=q[V],pe=C[j],ue=S[j];(ue!==pe||j==="value")&&i(y,j,pe,ue,g,h)}}v&1&&c.children!==f.children&&a(y,f.children)}else!w&&b==null&&Ie(y,C,S,h,g);((P=S.onVnodeUpdated)||D)&&_e(()=>{P&&Te(P,h,f,c),D&&Xe(f,c,h,"updated")},m)},re=(c,f,h,m,g,_,w)=>{for(let y=0;y<f.length;y++){const v=c[y],b=f[y],D=v.el&&(v.type===we||!mt(v,b)||v.shapeFlag&198)?p(v.el):h;I(v,b,D,null,m,g,_,w,!0)}},Ie=(c,f,h,m,g)=>{if(f!==h){if(f!==K)for(const _ in f)!vt(_)&&!(_ in h)&&i(c,_,f[_],null,g,m);for(const _ in h){if(vt(_))continue;const w=h[_],y=f[_];w!==y&&_!=="value"&&i(c,_,y,w,g,m)}"value"in h&&i(c,"value",f.value,h.value,g)}},Bt=(c,f,h,m,g,_,w,y,v)=>{const b=f.el=c?c.el:l(""),D=f.anchor=c?c.anchor:l("");let{patchFlag:C,dynamicChildren:S,slotScopeIds:P}=f;P&&(y=y?y.concat(P):P),c==null?(s(b,h,m),s(D,h,m),$(f.children||[],h,D,g,_,w,y,v)):C>0&&C&64&&S&&c.dynamicChildren?(re(c.dynamicChildren,S,h,g,_,w,y),(f.key!=null||g&&f===g.subTree)&&wr(c,f,!0)):U(c,f,h,D,g,_,w,y,v)},It=(c,f,h,m,g,_,w,y,v)=>{f.slotScopeIds=y,c==null?f.shapeFlag&512?g.ctx.activate(f,h,m,w,v):on(f,h,m,g,_,w,v):Gn(c,f,v)},on=(c,f,h,m,g,_,w)=>{const y=c.component=Do(c,m,g);if(lr(c)&&(y.ctx.renderer=pt),To(y,!1,w),y.asyncDep){if(g&&g.registerDep(y,ie,w),!c.el){const v=y.subTree=Le(Je);N(null,v,f,h)}}else ie(y,c,f,h,g,_,w)},Gn=(c,f,h)=>{const m=f.component=c.component;if(_o(c,f,h))if(m.asyncDep&&!m.asyncResolved){Y(m,f,h);return}else m.next=f,m.update();else f.el=c.el,m.vnode=f},ie=(c,f,h,m,g,_,w)=>{const y=()=>{if(c.isMounted){let{next:C,bu:S,u:P,parent:q,vnode:V}=c;{const Se=Cr(c);if(Se){C&&(C.el=V.el,Y(c,C,w)),Se.asyncDep.then(()=>{c.isUnmounted||y()});return}}let j=C,pe;Ze(c,!1),C?(C.el=V.el,Y(c,C,w)):C=V,S&&fn(S),(pe=C.props&&C.props.onVnodeBeforeUpdate)&&Te(pe,q,C,V),Ze(c,!0);const ue=ds(c),Ae=c.subTree;c.subTree=ue,I(Ae,ue,p(Ae.el),qt(Ae),c,g,_),C.el=ue.el,j===null&&mo(c,ue.el),P&&_e(P,g),(pe=C.props&&C.props.onVnodeUpdated)&&_e(()=>Te(pe,q,C,V),g)}else{let C;const{el:S,props:P}=f,{bm:q,m:V,parent:j,root:pe,type:ue}=c,Ae=Ct(f);Ze(c,!1),q&&fn(q),!Ae&&(C=P&&P.onVnodeBeforeMount)&&Te(C,j,f),Ze(c,!0);{pe.ce&&pe.ce._injectChildStyle(ue);const Se=c.subTree=ds(c);I(null,Se,h,m,c,g,_),f.el=Se.el}if(V&&_e(V,g),!Ae&&(C=P&&P.onVnodeMounted)){const Se=f;_e(()=>Te(C,j,Se),g)}(f.shapeFlag&256||j&&Ct(j.vnode)&&j.vnode.shapeFlag&256)&&c.a&&_e(c.a,g),c.isMounted=!0,f=h=m=null}};c.scope.on();const v=c.effect=new Hs(y);c.scope.off();const b=c.update=v.run.bind(v),D=c.job=v.runIfDirty.bind(v);D.i=c,D.id=c.uid,v.scheduler=()=>Wn(D),Ze(c,!0),b()},Y=(c,f,h)=>{f.component=c;const m=c.vnode.props;c.vnode=f,c.next=null,Zi(c,f.props,m,h),so(c,f.children,h),He(),rs(c),Ne()},U=(c,f,h,m,g,_,w,y,v=!1)=>{const b=c&&c.children,D=c?c.shapeFlag:0,C=f.children,{patchFlag:S,shapeFlag:P}=f;if(S>0){if(S&128){Rt(b,C,h,m,g,_,w,y,v);return}else if(S&256){ke(b,C,h,m,g,_,w,y,v);return}}P&8?(D&16&&ht(b,g,_),C!==b&&a(h,C)):D&16?P&16?Rt(b,C,h,m,g,_,w,y,v):ht(b,g,_,!0):(D&8&&a(h,""),P&16&&$(C,h,m,g,_,w,y,v))},ke=(c,f,h,m,g,_,w,y,v)=>{c=c||lt,f=f||lt;const b=c.length,D=f.length,C=Math.min(b,D);let S;for(S=0;S<C;S++){const P=f[S]=v?Ue(f[S]):Pe(f[S]);I(c[S],P,h,null,g,_,w,y,v)}b>D?ht(c,g,_,!0,!1,C):$(f,h,m,g,_,w,y,v,C)},Rt=(c,f,h,m,g,_,w,y,v)=>{let b=0;const D=f.length;let C=c.length-1,S=D-1;for(;b<=C&&b<=S;){const P=c[b],q=f[b]=v?Ue(f[b]):Pe(f[b]);if(mt(P,q))I(P,q,h,null,g,_,w,y,v);else break;b++}for(;b<=C&&b<=S;){const P=c[C],q=f[S]=v?Ue(f[S]):Pe(f[S]);if(mt(P,q))I(P,q,h,null,g,_,w,y,v);else break;C--,S--}if(b>C){if(b<=S){const P=S+1,q=P<D?f[P].el:m;for(;b<=S;)I(null,f[b]=v?Ue(f[b]):Pe(f[b]),h,q,g,_,w,y,v),b++}}else if(b>S)for(;b<=C;)xe(c[b],g,_,!0),b++;else{const P=b,q=b,V=new Map;for(b=q;b<=S;b++){const ge=f[b]=v?Ue(f[b]):Pe(f[b]);ge.key!=null&&V.set(ge.key,b)}let j,pe=0;const ue=S-q+1;let Ae=!1,Se=0;const gt=new Array(ue);for(b=0;b<ue;b++)gt[b]=0;for(b=P;b<=C;b++){const ge=c[b];if(pe>=ue){xe(ge,g,_,!0);continue}let De;if(ge.key!=null)De=V.get(ge.key);else for(j=q;j<=S;j++)if(gt[j-q]===0&&mt(ge,f[j])){De=j;break}De===void 0?xe(ge,g,_,!0):(gt[De-q]=b+1,De>=Se?Se=De:Ae=!0,I(ge,f[De],h,null,g,_,w,y,v),pe++)}const Zn=Ae?lo(gt):lt;for(j=Zn.length-1,b=ue-1;b>=0;b--){const ge=q+b,De=f[ge],es=ge+1<D?f[ge+1].el:m;gt[b]===0?I(null,De,h,es,g,_,w,y,v):Ae&&(j<0||b!==Zn[j]?Ge(De,h,es,2):j--)}}},Ge=(c,f,h,m,g=null)=>{const{el:_,type:w,transition:y,children:v,shapeFlag:b}=c;if(b&6){Ge(c.component.subTree,f,h,m);return}if(b&128){c.suspense.move(f,h,m);return}if(b&64){w.move(c,f,h,pt);return}if(w===we){s(_,f,h);for(let C=0;C<v.length;C++)Ge(v[C],f,h,m);s(c.anchor,f,h);return}if(w===mn){J(c,f,h);return}if(m!==2&&b&1&&y)if(m===0)y.beforeEnter(_),s(_,f,h),_e(()=>y.enter(_),g);else{const{leave:C,delayLeave:S,afterLeave:P}=y,q=()=>{c.ctx.isUnmounted?r(_):s(_,f,h)},V=()=>{C(_,()=>{q(),P&&P()})};S?S(_,q,V):V()}else s(_,f,h)},xe=(c,f,h,m=!1,g=!1)=>{const{type:_,props:w,ref:y,children:v,dynamicChildren:b,shapeFlag:D,patchFlag:C,dirs:S,cacheIndex:P}=c;if(C===-2&&(g=!1),y!=null&&(He(),Jt(y,null,h,c,!0),Ne()),P!=null&&(f.renderCache[P]=void 0),D&256){f.ctx.deactivate(c);return}const q=D&1&&S,V=!Ct(c);let j;if(V&&(j=w&&w.onVnodeBeforeUnmount)&&Te(j,f,c),D&6)qr(c.component,h,m);else{if(D&128){c.suspense.unmount(h,m);return}q&&Xe(c,null,f,"beforeUnmount"),D&64?c.type.remove(c,f,h,pt,m):b&&!b.hasOnce&&(_!==we||C>0&&C&64)?ht(b,f,h,!1,!0):(_===we&&C&384||!g&&D&16)&&ht(v,f,h),m&&zn(c)}(V&&(j=w&&w.onVnodeUnmounted)||q)&&_e(()=>{j&&Te(j,f,c),q&&Xe(c,null,f,"unmounted")},h)},zn=c=>{const{type:f,el:h,anchor:m,transition:g}=c;if(f===we){Rr(h,m);return}if(f===mn){T(c);return}const _=()=>{r(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:w,delayLeave:y}=g,v=()=>w(h,_);y?y(c.el,_,v):v()}else _()},Rr=(c,f)=>{let h;for(;c!==f;)h=x(c),r(c),c=h;r(f)},qr=(c,f,h)=>{const{bum:m,scope:g,job:_,subTree:w,um:y,m:v,a:b,parent:D,slots:{__:C}}=c;as(v),as(b),m&&fn(m),D&&M(C)&&C.forEach(S=>{D.renderCache[S]=void 0}),g.stop(),_&&(_.flags|=8,xe(w,c,f,h)),y&&_e(y,f),_e(()=>{c.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},ht=(c,f,h,m=!1,g=!1,_=0)=>{for(let w=_;w<c.length;w++)xe(c[w],f,h,m,g)},qt=c=>{if(c.shapeFlag&6)return qt(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const f=x(c.anchor||c.el),h=f&&f[Ei];return h?x(h):f};let ln=!1;const Xn=(c,f,h)=>{c==null?f._vnode&&xe(f._vnode,null,null,!0):I(f._vnode||null,c,f,null,null,null,h),f._vnode=c,ln||(ln=!0,rs(),nr(),ln=!1)},pt={p:I,um:xe,m:Ge,r:zn,mt:on,mc:$,pc:U,pbc:re,n:qt,o:e};return{render:Xn,hydrate:void 0,createApp:Gi(Xn)}}function gn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ze({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function oo(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function wr(e,t,n=!1){const s=e.children,r=t.children;if(M(s)&&M(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=Ue(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&wr(o,l)),l.type===rn&&(l.el=o.el),l.type===Je&&!l.el&&(l.el=o.el)}}function lo(e){const t=e.slice(),n=[0];let s,r,i,o,l;const u=e.length;for(s=0;s<u;s++){const d=e[s];if(d!==0){if(r=n[n.length-1],e[r]<d){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,e[n[l]]<d?i=l+1:o=l;d<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Cr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Cr(t)}function as(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const co=Symbol.for("v-scx"),fo=()=>jt(co);function _n(e,t,n){return xr(e,t,n)}function xr(e,t,n=K){const{immediate:s,deep:r,flush:i,once:o}=n,l=se({},n),u=t&&s||!t&&i!=="post";let d;if(Pt){if(i==="sync"){const A=fo();d=A.__watcherHandles||(A.__watcherHandles=[])}else if(!u){const A=()=>{};return A.stop=Oe,A.resume=Oe,A.pause=Oe,A}}const a=ce;l.call=(A,R,I)=>Be(A,a,R,I);let p=!1;i==="post"?l.scheduler=A=>{_e(A,a&&a.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(A,R)=>{R?A():Wn(A)}),l.augmentJob=A=>{t&&(A.flags|=4),p&&(A.flags|=2,a&&(A.id=a.uid,A.i=a))};const x=Ci(e,t,l);return Pt&&(d?d.push(x):u&&x()),x}function uo(e,t,n){const s=this.proxy,r=z(e)?e.includes(".")?Ar(s,e):()=>s[e]:e.bind(s,s);let i;O(t)?i=t:(i=t.handler,n=t);const o=Ot(this),l=xr(r,i.bind(s),n);return o(),l}function Ar(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const ao=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ke(t)}Modifiers`]||e[`${st(t)}Modifiers`];function ho(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||K;let r=n;const i=t.startsWith("update:"),o=i&&ao(s,t.slice(7));o&&(o.trim&&(r=n.map(a=>z(a)?a.trim():a)),o.number&&(r=n.map($r)));let l,u=s[l=cn(t)]||s[l=cn(Ke(t))];!u&&i&&(u=s[l=cn(st(t))]),u&&Be(u,e,6,r);const d=s[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Be(d,e,6,r)}}function Sr(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},l=!1;if(!O(e)){const u=d=>{const a=Sr(d,t,!0);a&&(l=!0,se(o,a))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!l?(k(e)&&s.set(e,null),null):(M(i)?i.forEach(u=>o[u]=null):se(o,i),k(e)&&s.set(e,o),o)}function sn(e,t){return!e||!Gt(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,st(t))||H(e,t))}function ds(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:u,render:d,renderCache:a,props:p,data:x,setupState:A,ctx:R,inheritAttrs:I}=e,X=Qt(e);let N,Q;try{if(n.shapeFlag&4){const T=r||s,G=T;N=Pe(d.call(G,T,a,p,A,x,R)),Q=l}else{const T=t;N=Pe(T.length>1?T(p,{attrs:l,slots:o,emit:u}):T(p,null)),Q=t.props?l:po(l)}}catch(T){At.length=0,tn(T,e,1),N=Le(Je)}let J=N;if(Q&&I!==!1){const T=Object.keys(Q),{shapeFlag:G}=J;T.length&&G&7&&(i&&T.some(Bn)&&(Q=go(Q,i)),J=dt(J,Q,!1,!0))}return n.dirs&&(J=dt(J,null,!1,!0),J.dirs=J.dirs?J.dirs.concat(n.dirs):n.dirs),n.transition&&Kn(J,n.transition),N=J,Qt(X),N}const po=e=>{let t;for(const n in e)(n==="class"||n==="style"||Gt(n))&&((t||(t={}))[n]=e[n]);return t},go=(e,t)=>{const n={};for(const s in e)(!Bn(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function _o(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:l,patchFlag:u}=t,d=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?hs(s,o,d):!!o;if(u&8){const a=t.dynamicProps;for(let p=0;p<a.length;p++){const x=a[p];if(o[x]!==s[x]&&!sn(d,x))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?hs(s,o,d):!0:!!o;return!1}function hs(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!sn(n,i))return!0}return!1}function mo({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Dr=e=>e.__isSuspense;function bo(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):Di(e)}const we=Symbol.for("v-fgt"),rn=Symbol.for("v-txt"),Je=Symbol.for("v-cmt"),mn=Symbol.for("v-stc"),At=[];let me=null;function ee(e=!1){At.push(me=e?null:[])}function vo(){At.pop(),me=At[At.length-1]||null}let Et=1;function ps(e,t=!1){Et+=e,e<0&&me&&t&&(me.hasOnce=!0)}function Tr(e){return e.dynamicChildren=Et>0?me||lt:null,vo(),Et>0&&me&&me.push(e),e}function ae(e,t,n,s,r,i){return Tr(B(e,t,n,s,r,i,!0))}function Er(e,t,n,s,r){return Tr(Le(e,t,n,s,r,!0))}function Pr(e){return e?e.__v_isVNode===!0:!1}function mt(e,t){return e.type===t.type&&e.key===t.key}const Mr=({key:e})=>e??null,$t=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?z(e)||ne(e)||O(e)?{i:Me,r:e,k:t,f:!!n}:e:null);function B(e,t=null,n=null,s=0,r=null,i=e===we?0:1,o=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Mr(t),ref:t&&$t(t),scopeId:rr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Me};return l?(Yn(u,n),i&128&&e.normalize(u)):n&&(u.shapeFlag|=z(n)?8:16),Et>0&&!o&&me&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&me.push(u),u}const Le=yo;function yo(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===Ui)&&(e=Je),Pr(e)){const l=dt(e,t,!0);return n&&Yn(l,n),Et>0&&!i&&me&&(l.shapeFlag&6?me[me.indexOf(e)]=l:me.push(l)),l.patchFlag=-2,l}if(Oo(e)&&(e=e.__vccOpts),t){t=wo(t);let{class:l,style:u}=t;l&&!z(l)&&(t.class=tt(l)),k(u)&&(Vn(u)&&!M(u)&&(u=se({},u)),t.style=qn(u))}const o=z(e)?1:Dr(e)?128:Pi(e)?64:k(e)?4:O(e)?2:0;return B(e,t,n,s,r,o,i,!0)}function wo(e){return e?Vn(e)||gr(e)?se({},e):e:null}function dt(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:u}=e,d=t?xo(r||{},t):r,a={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Mr(d),ref:t&&t.ref?n&&i?M(i)?i.concat($t(t)):[i,$t(t)]:$t(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==we?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&dt(e.ssContent),ssFallback:e.ssFallback&&dt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&s&&Kn(a,u.clone(a)),a}function ye(e=" ",t=0){return Le(rn,null,e,t)}function Co(e="",t=!1){return t?(ee(),Er(Je,null,e)):Le(Je,null,e)}function Pe(e){return e==null||typeof e=="boolean"?Le(Je):M(e)?Le(we,null,e.slice()):Pr(e)?Ue(e):Le(rn,null,String(e))}function Ue(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:dt(e)}function Yn(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Yn(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!gr(t)?t._ctx=Me:r===3&&Me&&(Me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else O(t)?(t={default:t,_ctx:Me},n=32):(t=String(t),s&64?(n=16,t=[ye(t)]):n=8);e.children=t,e.shapeFlag|=n}function xo(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=tt([t.class,s.class]));else if(r==="style")t.style=qn([t.style,s.style]);else if(Gt(r)){const i=t[r],o=s[r];o&&i!==o&&!(M(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function Te(e,t,n,s=null){Be(e,t,7,[n,s])}const Ao=dr();let So=0;function Do(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Ao,i={uid:So++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Yr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mr(s,r),emitsOptions:Sr(s,r),emit:null,emitted:null,propsDefaults:K,inheritAttrs:s.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ho.bind(null,i),e.ce&&e.ce(i),i}let ce=null,kt,Pn;{const e=Zt(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};kt=t("__VUE_INSTANCE_SETTERS__",n=>ce=n),Pn=t("__VUE_SSR_SETTERS__",n=>Pt=n)}const Ot=e=>{const t=ce;return kt(e),e.scope.on(),()=>{e.scope.off(),kt(t)}},gs=()=>{ce&&ce.scope.off(),kt(null)};function Or(e){return e.vnode.shapeFlag&4}let Pt=!1;function To(e,t=!1,n=!1){t&&Pn(t);const{props:s,children:r}=e.vnode,i=Or(e);Xi(e,s,i,t),no(e,r,n||t);const o=i?Eo(e,t):void 0;return t&&Pn(!1),o}function Eo(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Vi);const{setup:s}=n;if(s){He();const r=e.setupContext=s.length>1?Mo(e):null,i=Ot(e),o=Mt(s,e,0,[e.props,r]),l=Ms(o);if(Ne(),i(),(l||e.sp)&&!Ct(e)&&or(e),l){if(o.then(gs,gs),t)return o.then(u=>{_s(e,u)}).catch(u=>{tn(u,e,0)});e.asyncDep=o}else _s(e,o)}else Br(e)}function _s(e,t,n){O(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:k(t)&&(e.setupState=Zs(t)),Br(e)}function Br(e,t,n){const s=e.type;e.render||(e.render=s.render||Oe);{const r=Ot(e);He();try{Wi(e)}finally{Ne(),r()}}}const Po={get(e,t){return te(e,"get",""),e[t]}};function Mo(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Po),slots:e.slots,emit:e.emit,expose:t}}function kn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Zs(gi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in xt)return xt[n](e)},has(t,n){return n in t||n in xt}})):e.proxy}function Oo(e){return O(e)&&"__vccOpts"in e}const ot=(e,t)=>yi(e,t,Pt),Bo="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mn;const ms=typeof window<"u"&&window.trustedTypes;if(ms)try{Mn=ms.createPolicy("vue",{createHTML:e=>e})}catch{}const Ir=Mn?e=>Mn.createHTML(e):e=>e,Io="http://www.w3.org/2000/svg",Ro="http://www.w3.org/1998/Math/MathML",qe=typeof document<"u"?document:null,bs=qe&&qe.createElement("template"),qo={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?qe.createElementNS(Io,e):t==="mathml"?qe.createElementNS(Ro,e):n?qe.createElement(e,{is:n}):qe.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>qe.createTextNode(e),createComment:e=>qe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>qe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{bs.innerHTML=Ir(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=bs.content;if(s==="svg"||s==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Fo=Symbol("_vtc");function Lo(e,t,n){const s=e[Fo];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const vs=Symbol("_vod"),Ho=Symbol("_vsh"),No=Symbol(""),jo=/(^|;)\s*display\s*:/;function $o(e,t,n){const s=e.style,r=z(n);let i=!1;if(n&&!r){if(t)if(z(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ut(s,l,"")}else for(const o in t)n[o]==null&&Ut(s,o,"");for(const o in n)o==="display"&&(i=!0),Ut(s,o,n[o])}else if(r){if(t!==n){const o=s[No];o&&(n+=";"+o),s.cssText=n,i=jo.test(n)}}else t&&e.removeAttribute("style");vs in e&&(e[vs]=i?s.display:"",e[Ho]&&(s.display="none"))}const ys=/\s*!important$/;function Ut(e,t,n){if(M(n))n.forEach(s=>Ut(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Uo(e,t);ys.test(n)?e.setProperty(st(s),n.replace(ys,""),"important"):e[s]=n}}const ws=["Webkit","Moz","ms"],bn={};function Uo(e,t){const n=bn[t];if(n)return n;let s=Ke(t);if(s!=="filter"&&s in e)return bn[t]=s;s=Is(s);for(let r=0;r<ws.length;r++){const i=ws[r]+s;if(i in e)return bn[t]=i}return t}const Cs="http://www.w3.org/1999/xlink";function xs(e,t,n,s,r,i=Jr(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Cs,t.slice(6,t.length)):e.setAttributeNS(Cs,t,n):n==null||i&&!qs(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Ye(n)?String(n):n)}function As(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Ir(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,u=n==null?e.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=qs(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function Vo(e,t,n,s){e.addEventListener(t,n,s)}function Wo(e,t,n,s){e.removeEventListener(t,n,s)}const Ss=Symbol("_vei");function Ko(e,t,n,s,r=null){const i=e[Ss]||(e[Ss]={}),o=i[t];if(s&&o)o.value=s;else{const[l,u]=Qo(t);if(s){const d=i[t]=ko(s,r);Vo(e,l,d,u)}else o&&(Wo(e,l,o,u),i[t]=void 0)}}const Ds=/(?:Once|Passive|Capture)$/;function Qo(e){let t;if(Ds.test(e)){t={};let s;for(;s=e.match(Ds);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):st(e.slice(2)),t]}let vn=0;const Jo=Promise.resolve(),Yo=()=>vn||(Jo.then(()=>vn=0),vn=Date.now());function ko(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Be(Go(s,n.value),t,5,[s])};return n.value=e,n.attached=Yo(),n}function Go(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Ts=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,zo=(e,t,n,s,r,i)=>{const o=r==="svg";t==="class"?Lo(e,s,o):t==="style"?$o(e,n,s):Gt(t)?Bn(t)||Ko(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Xo(e,t,s,o))?(As(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&xs(e,t,s,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!z(s))?As(e,Ke(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),xs(e,t,s,o))};function Xo(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ts(t)&&O(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ts(t)&&z(n)?!1:t in e}const Zo=se({patchProp:zo},qo);let Es;function el(){return Es||(Es=ro(Zo))}const tl=(...e)=>{const t=el().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=sl(s);if(!r)return;const i=t._component;!O(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,nl(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function nl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function sl(e){return z(e)?document.querySelector(e):e}const be=[{question:`关于Brooks提及的软件开发本质难题，下列说法中不准确的是（ 多选 ）

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

A : CMMI SPICE PDCA：SPICE是软件过程管理
B : IDEAL XP SCRUM：IDEAL是软件过程改进，XP和SCRUM是软件过程
C : Cleanroom Gate TSP：软件过程
D : Waterfall SCRUM XP：软件实践
`,answer:"CD"},{question:`“Measure twice, cut once” 描述的是下述哪个软件开发场景

A : 软件设计
B : 代码评审
C : 需求开发；
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
C : Quality Journey仍然仅仅是在“用缺陷管理替代 质量管理”这一基本策略之下进行讨论
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
B : 接口标准”
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
3. 测试驱动开发（TDD）可以提高开发质量：并没有足够的证据支持这一说法。`},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""}],rl={class:"container"},il={class:"header"},ol={class:"tab-container"},ll={key:0},cl={key:0,class:"question-container"},fl={class:"question-header"},ul={class:"question-number"},al={key:0,class:"question-type"},dl={key:1,class:"question-type"},hl={class:"question-content"},pl={class:"options-container"},gl=["onClick"],_l={class:"option-letter"},ml={class:"option-text"},bl={class:"controls"},vl=["disabled"],yl={key:1,class:"result-container"},wl={class:"score-circle"},Cl={class:"score-text"},xl={key:0,class:"incorrect-questions"},Al={key:1,class:"short-answer-container"},Sl={class:"short-answer-question"},Dl={class:"short-answer-answer"},Tl={class:"controls"},El=["disabled"],Pl=["disabled"],Ml=ir({__name:"Exercise",setup(e){const t=ze(!1),n=ze(0),s=ot(()=>yn[n.value]),r=()=>{n.value>0&&n.value--},i=()=>{n.value<yn.length-1&&n.value++},o=ze([{question:"",userAnswer:"",correctAnswer:""}]),l=F=>{const E=F.split(`
`),$=[],fe=/^([A-Z]) : (.+)$/;for(let re=0;re<E.length;re++){const Ie=E[re].match(fe);Ie&&$.push({letter:Ie[1],text:Ie[2]})}return $},u=ot(()=>be.map(F=>({...F,options:l(F.question),isMultiple:F.question.includes("多选")}))),d=ze(0),a=ze(Array(be.length).fill("")),p=ze(!1),x=ze(0);ot(()=>(d.value+1)/be.length*100);const A=ot(()=>u.value[d.value]),R=F=>a.value[d.value].includes(F),I=F=>{const E=a.value[d.value];A.value.isMultiple?E.includes(F)?a.value[d.value]=E.replace(F,""):a.value[d.value]=E+F:a.value[d.value]=F},X=()=>{d.value>0&&d.value--},N=()=>{d.value<be.length-1&&d.value++},Q=()=>{let F=0;const E=[];for(let $=0;$<be.length;$++){const fe=[...a.value[$]].sort().join(""),re=[...be[$].answer].sort().join("");fe===re?F++:E.push({question:be[$].question,userAnswer:fe||"未作答",correctAnswer:re})}x.value=F,o.value=E,p.value=!0},J=()=>{const F=x.value/be.length*100;return F>=90?"太棒了！您已经掌握了这些知识点！":F>=70?"做得很好！继续努力！":F>=50?"不错的尝试！复习一下会更好！":"需要更多练习，加油！"},T=ot(()=>{const F=x.value/be.length*100;return F>=90?"excellent":F>=70?"good":F>=50?"average":"poor"}),G=()=>{d.value=0,a.value=Array(be.length).fill(""),p.value=!1,x.value=0};return(F,E)=>(ee(),ae("div",rl,[B("div",il,[E[2]||(E[2]=B("h1",null,[B("i",{class:"fas fa-graduation-cap"}),ye(" 软件质量管理")],-1)),B("div",ol,[B("button",{class:tt(["tab-btn",{active:!t.value}]),onClick:E[0]||(E[0]=$=>t.value=!1)}," 选择题 ",2),B("button",{class:tt(["tab-btn",{active:t.value}]),onClick:E[1]||(E[1]=$=>t.value=!0)}," 简答题 ",2)])]),t.value?(ee(),ae("div",Al,[B("div",Sl,de(s.value.question),1),B("div",Dl,[B("p",null,de(s.value.answer),1)]),B("div",Tl,[B("button",{class:"btn btn-prev",onClick:r,disabled:n.value===0},E[11]||(E[11]=[B("i",{class:"fas fa-arrow-left"},null,-1),ye(" 上一题 ")]),8,El),B("button",{class:"btn btn-next",onClick:i,disabled:n.value===Nt(yn).length-1},E[12]||(E[12]=[ye(" 下一题 "),B("i",{class:"fas fa-arrow-right"},null,-1)]),8,Pl)])])):(ee(),ae("div",ll,[p.value?(ee(),ae("div",yl,[E[10]||(E[10]=B("h2",{class:"result-title"},"测试完成!",-1)),B("div",wl,[B("div",Cl,de(x.value)+" / "+de(Nt(be).length),1)]),B("div",{class:tt(["feedback",T.value])},de(J()),3),o.value.length?(ee(),ae("div",xl,[E[8]||(E[8]=B("h3",null,"您答错的题目：",-1)),(ee(!0),ae(we,null,is(o.value,($,fe)=>(ee(),ae("div",{key:fe,class:"incorrect-question"},[B("p",null,[B("strong",null,"题目 "+de(fe+1)+"：",1),ye(" "+de($.question.split(`

`)[0]),1)]),B("p",null,[E[6]||(E[6]=B("strong",null,"您的答案：",-1)),ye(" "+de($.userAnswer),1)]),B("p",null,[E[7]||(E[7]=B("strong",null,"正确答案：",-1)),ye(" "+de($.correctAnswer),1)])]))),128))])):Co("",!0),B("button",{class:"restart-btn",onClick:G},E[9]||(E[9]=[B("i",{class:"fas fa-redo"},null,-1),ye(" 重新测试 ")]))])):(ee(),ae("div",cl,[B("div",fl,[B("div",ul,"题目 "+de(d.value+1),1),A.value.isMultiple?(ee(),ae("div",al,"多选题")):(ee(),ae("div",dl,"单选题"))]),B("div",hl,de(A.value.question.split(`

`)[0]),1),B("div",pl,[(ee(!0),ae(we,null,is(A.value.options,($,fe)=>(ee(),ae("div",{key:fe,class:tt(["option",{selected:R($.letter)}]),onClick:re=>I($.letter)},[B("div",_l,de($.letter),1),B("div",ml,de($.text),1)],10,gl))),128))]),B("div",bl,[B("button",{class:"btn btn-prev",onClick:X,disabled:d.value===0},E[3]||(E[3]=[B("i",{class:"fas fa-arrow-left"},null,-1),ye(" 上一题 ")]),8,vl),d.value<Nt(be).length-1?(ee(),ae("button",{key:0,class:"btn btn-next",onClick:N},E[4]||(E[4]=[ye(" 下一题 "),B("i",{class:"fas fa-arrow-right"},null,-1)]))):(ee(),ae("button",{key:1,class:"btn btn-finish",onClick:Q},E[5]||(E[5]=[ye(" 完成测试 "),B("i",{class:"fas fa-check"},null,-1)])))])]))]))]))}}),Ol=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},Bl=Ol(Ml,[["__scopeId","data-v-c0611aa2"]]),Il=ir({__name:"App",setup(e){return(t,n)=>(ee(),Er(Bl,{msg:"Vite + Vue"}))}});tl(Il).mount("#app");
