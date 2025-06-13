(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Rn(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const W={},at=[],Ie=()=>{},Li=()=>!1,Zt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),qn=e=>e.startsWith("onUpdate:"),ie=Object.assign,Fn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Hi=Object.prototype.hasOwnProperty,H=(e,t)=>Hi.call(e,t),B=Array.isArray,dt=e=>en(e)==="[object Map]",Bs=e=>en(e)==="[object Set]",O=e=>typeof e=="function",X=e=>typeof e=="string",Xe=e=>typeof e=="symbol",Y=e=>e!==null&&typeof e=="object",Os=e=>(Y(e)||O(e))&&O(e.then)&&O(e.catch),Is=Object.prototype.toString,en=e=>Is.call(e),$i=e=>en(e).slice(8,-1),Rs=e=>en(e)==="[object Object]",Ln=e=>X(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,xt=Rn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Vi=/-(\w)/g,Ye=tn(e=>e.replace(Vi,(t,n)=>n?n.toUpperCase():"")),Ni=/\B([A-Z])/g,rt=tn(e=>e.replace(Ni,"-$1").toLowerCase()),qs=tn(e=>e.charAt(0).toUpperCase()+e.slice(1)),an=tn(e=>e?`on${qs(e)}`:""),ze=(e,t)=>!Object.is(e,t),dn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Fs=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},ji=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ss;const nn=()=>ss||(ss=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hn(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=X(s)?ki(s):Hn(s);if(i)for(const r in i)t[r]=i[r]}return t}else if(X(e)||Y(e))return e}const Ui=/;(?![^(]*\))/g,Wi=/:([^]+)/,Ki=/\/\*[^]*?\*\//g;function ki(e){const t={};return e.replace(Ki,"").split(Ui).forEach(n=>{if(n){const s=n.split(Wi);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function ke(e){let t="";if(X(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const s=ke(e[n]);s&&(t+=s+" ")}else if(Y(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Qi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zi=Rn(Qi);function Ls(e){return!!e||e===""}const Hs=e=>!!(e&&e.__v_isRef===!0),ve=e=>X(e)?e:e==null?"":B(e)||Y(e)&&(e.toString===Is||!O(e.toString))?Hs(e)?ve(e.value):JSON.stringify(e,$s,2):String(e),$s=(e,t)=>Hs(t)?$s(e,t.value):dt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i],r)=>(n[hn(s,r)+" =>"]=i,n),{})}:Bs(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>hn(n))}:Xe(t)?hn(t):Y(t)&&!B(t)&&!Rs(t)?String(t):t,hn=(e,t="")=>{var n;return Xe(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ae;class Yi{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ae,!t&&ae&&(this.index=(ae.scopes||(ae.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ae;try{return ae=this,t()}finally{ae=n}}}on(){++this._on===1&&(this.prevScope=ae,ae=this)}off(){this._on>0&&--this._on===0&&(ae=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ji(){return ae}let U;const pn=new WeakSet;class Vs{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ae&&ae.active&&ae.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pn.has(this)&&(pn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||js(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,is(this),Us(this);const t=U,n=xe;U=this,xe=!0;try{return this.fn()}finally{Ws(this),U=t,xe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Nn(t);this.deps=this.depsTail=void 0,is(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){An(this)&&this.run()}get dirty(){return An(this)}}let Ns=0,At,St;function js(e,t=!1){if(e.flags|=8,t){e.next=St,St=e;return}e.next=At,At=e}function $n(){Ns++}function Vn(){if(--Ns>0)return;if(St){let t=St;for(St=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;At;){let t=At;for(At=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Us(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ws(e){let t,n=e.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Nn(s),Gi(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}e.deps=t,e.depsTail=n}function An(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ks(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ks(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Et)||(e.globalVersion=Et,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!An(e))))return;e.flags|=2;const t=e.dep,n=U,s=xe;U=e,xe=!0;try{Us(e);const i=e.fn(e._value);(t.version===0||ze(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{U=n,xe=s,Ws(e),e.flags&=-3}}function Nn(e,t=!1){const{dep:n,prevSub:s,nextSub:i}=e;if(s&&(s.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Nn(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Gi(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let xe=!0;const ks=[];function Ne(){ks.push(xe),xe=!1}function je(){const e=ks.pop();xe=e===void 0?!0:e}function is(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=U;U=void 0;try{t()}finally{U=n}}}let Et=0;class Xi{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!U||!xe||U===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==U)n=this.activeLink=new Xi(U,this),U.deps?(n.prevDep=U.depsTail,U.depsTail.nextDep=n,U.depsTail=n):U.deps=U.depsTail=n,Qs(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=U.depsTail,n.nextDep=void 0,U.depsTail.nextDep=n,U.depsTail=n,U.deps===n&&(U.deps=s)}return n}trigger(t){this.version++,Et++,this.notify(t)}notify(t){$n();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Vn()}}}function Qs(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Qs(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Sn=new WeakMap,it=Symbol(""),Dn=Symbol(""),Mt=Symbol("");function ne(e,t,n){if(xe&&U){let s=Sn.get(e);s||Sn.set(e,s=new Map);let i=s.get(n);i||(s.set(n,i=new jn),i.map=s,i.key=n),i.track()}}function Ve(e,t,n,s,i,r){const o=Sn.get(e);if(!o){Et++;return}const l=u=>{u&&u.trigger()};if($n(),t==="clear")o.forEach(l);else{const u=B(e),p=u&&Ln(n);if(u&&n==="length"){const a=Number(s);o.forEach((h,C)=>{(C==="length"||C===Mt||!Xe(C)&&C>=a)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),p&&l(o.get(Mt)),t){case"add":u?p&&l(o.get("length")):(l(o.get(it)),dt(e)&&l(o.get(Dn)));break;case"delete":u||(l(o.get(it)),dt(e)&&l(o.get(Dn)));break;case"set":dt(e)&&l(o.get(it));break}}Vn()}function ct(e){const t=L(e);return t===e?t:(ne(t,"iterate",Mt),we(e)?t:t.map(te))}function sn(e){return ne(e=L(e),"iterate",Mt),e}const Zi={__proto__:null,[Symbol.iterator](){return gn(this,Symbol.iterator,te)},concat(...e){return ct(this).concat(...e.map(t=>B(t)?ct(t):t))},entries(){return gn(this,"entries",e=>(e[1]=te(e[1]),e))},every(e,t){return Fe(this,"every",e,t,void 0,arguments)},filter(e,t){return Fe(this,"filter",e,t,n=>n.map(te),arguments)},find(e,t){return Fe(this,"find",e,t,te,arguments)},findIndex(e,t){return Fe(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Fe(this,"findLast",e,t,te,arguments)},findLastIndex(e,t){return Fe(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Fe(this,"forEach",e,t,void 0,arguments)},includes(...e){return _n(this,"includes",e)},indexOf(...e){return _n(this,"indexOf",e)},join(e){return ct(this).join(e)},lastIndexOf(...e){return _n(this,"lastIndexOf",e)},map(e,t){return Fe(this,"map",e,t,void 0,arguments)},pop(){return wt(this,"pop")},push(...e){return wt(this,"push",e)},reduce(e,...t){return rs(this,"reduce",e,t)},reduceRight(e,...t){return rs(this,"reduceRight",e,t)},shift(){return wt(this,"shift")},some(e,t){return Fe(this,"some",e,t,void 0,arguments)},splice(...e){return wt(this,"splice",e)},toReversed(){return ct(this).toReversed()},toSorted(e){return ct(this).toSorted(e)},toSpliced(...e){return ct(this).toSpliced(...e)},unshift(...e){return wt(this,"unshift",e)},values(){return gn(this,"values",te)}};function gn(e,t,n){const s=sn(e),i=s[t]();return s!==e&&!we(e)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const er=Array.prototype;function Fe(e,t,n,s,i,r){const o=sn(e),l=o!==e&&!we(e),u=o[t];if(u!==er[t]){const h=u.apply(e,r);return l?te(h):h}let p=n;o!==e&&(l?p=function(h,C){return n.call(this,te(h),C,e)}:n.length>2&&(p=function(h,C){return n.call(this,h,C,e)}));const a=u.call(o,p,s);return l&&i?i(a):a}function rs(e,t,n,s){const i=sn(e);let r=n;return i!==e&&(we(e)?n.length>3&&(r=function(o,l,u){return n.call(this,o,l,u,e)}):r=function(o,l,u){return n.call(this,o,te(l),u,e)}),i[t](r,...s)}function _n(e,t,n){const s=L(e);ne(s,"iterate",Mt);const i=s[t](...n);return(i===-1||i===!1)&&kn(n[0])?(n[0]=L(n[0]),s[t](...n)):i}function wt(e,t,n=[]){Ne(),$n();const s=L(e)[t].apply(e,n);return Vn(),je(),s}const tr=Rn("__proto__,__v_isRef,__isVue"),zs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Xe));function nr(e){Xe(e)||(e=String(e));const t=L(this);return ne(t,"has",e),t.hasOwnProperty(e)}class Ys{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?dr:Zs:r?Xs:Gs).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=B(t);if(!i){let u;if(o&&(u=Zi[n]))return u;if(n==="hasOwnProperty")return nr}const l=Reflect.get(t,n,se(t)?t:s);return(Xe(n)?zs.has(n):tr(n))||(i||ne(t,"get",n),r)?l:se(l)?o&&Ln(n)?l:l.value:Y(l)?i?ei(l):Wn(l):l}}class Js extends Ys{constructor(t=!1){super(!1,t)}set(t,n,s,i){let r=t[n];if(!this._isShallow){const u=Je(r);if(!we(s)&&!Je(s)&&(r=L(r),s=L(s)),!B(t)&&se(r)&&!se(s))return u?!1:(r.value=s,!0)}const o=B(t)&&Ln(n)?Number(n)<t.length:H(t,n),l=Reflect.set(t,n,s,se(t)?t:i);return t===L(i)&&(o?ze(s,r)&&Ve(t,"set",n,s):Ve(t,"add",n,s)),l}deleteProperty(t,n){const s=H(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&s&&Ve(t,"delete",n,void 0),i}has(t,n){const s=Reflect.has(t,n);return(!Xe(n)||!zs.has(n))&&ne(t,"has",n),s}ownKeys(t){return ne(t,"iterate",B(t)?"length":it),Reflect.ownKeys(t)}}class sr extends Ys{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const ir=new Js,rr=new sr,or=new Js(!0);const Tn=e=>e,Ht=e=>Reflect.getPrototypeOf(e);function lr(e,t,n){return function(...s){const i=this.__v_raw,r=L(i),o=dt(r),l=e==="entries"||e===Symbol.iterator&&o,u=e==="keys"&&o,p=i[e](...s),a=n?Tn:t?Kt:te;return!t&&ne(r,"iterate",u?Dn:it),{next(){const{value:h,done:C}=p.next();return C?{value:h,done:C}:{value:l?[a(h[0]),a(h[1])]:a(h),done:C}},[Symbol.iterator](){return this}}}}function $t(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function cr(e,t){const n={get(i){const r=this.__v_raw,o=L(r),l=L(i);e||(ze(i,l)&&ne(o,"get",i),ne(o,"get",l));const{has:u}=Ht(o),p=t?Tn:e?Kt:te;if(u.call(o,i))return p(r.get(i));if(u.call(o,l))return p(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!e&&ne(L(i),"iterate",it),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=L(r),l=L(i);return e||(ze(i,l)&&ne(o,"has",i),ne(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,u=L(l),p=t?Tn:e?Kt:te;return!e&&ne(u,"iterate",it),l.forEach((a,h)=>i.call(r,p(a),p(h),o))}};return ie(n,e?{add:$t("add"),set:$t("set"),delete:$t("delete"),clear:$t("clear")}:{add(i){!t&&!we(i)&&!Je(i)&&(i=L(i));const r=L(this);return Ht(r).has.call(r,i)||(r.add(i),Ve(r,"add",i,i)),this},set(i,r){!t&&!we(r)&&!Je(r)&&(r=L(r));const o=L(this),{has:l,get:u}=Ht(o);let p=l.call(o,i);p||(i=L(i),p=l.call(o,i));const a=u.call(o,i);return o.set(i,r),p?ze(r,a)&&Ve(o,"set",i,r):Ve(o,"add",i,r),this},delete(i){const r=L(this),{has:o,get:l}=Ht(r);let u=o.call(r,i);u||(i=L(i),u=o.call(r,i)),l&&l.call(r,i);const p=r.delete(i);return u&&Ve(r,"delete",i,void 0),p},clear(){const i=L(this),r=i.size!==0,o=i.clear();return r&&Ve(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=lr(i,e,t)}),n}function Un(e,t){const n=cr(e,t);return(s,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(H(n,i)&&i in s?n:s,i,r)}const fr={get:Un(!1,!1)},ur={get:Un(!1,!0)},ar={get:Un(!0,!1)};const Gs=new WeakMap,Xs=new WeakMap,Zs=new WeakMap,dr=new WeakMap;function hr(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pr(e){return e.__v_skip||!Object.isExtensible(e)?0:hr($i(e))}function Wn(e){return Je(e)?e:Kn(e,!1,ir,fr,Gs)}function gr(e){return Kn(e,!1,or,ur,Xs)}function ei(e){return Kn(e,!0,rr,ar,Zs)}function Kn(e,t,n,s,i){if(!Y(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=pr(e);if(r===0)return e;const o=i.get(e);if(o)return o;const l=new Proxy(e,r===2?s:n);return i.set(e,l),l}function ht(e){return Je(e)?ht(e.__v_raw):!!(e&&e.__v_isReactive)}function Je(e){return!!(e&&e.__v_isReadonly)}function we(e){return!!(e&&e.__v_isShallow)}function kn(e){return e?!!e.__v_raw:!1}function L(e){const t=e&&e.__v_raw;return t?L(t):e}function _r(e){return!H(e,"__v_skip")&&Object.isExtensible(e)&&Fs(e,"__v_skip",!0),e}const te=e=>Y(e)?Wn(e):e,Kt=e=>Y(e)?ei(e):e;function se(e){return e?e.__v_isRef===!0:!1}function Le(e){return mr(e,!1)}function mr(e,t){return se(e)?e:new br(e,t)}class br{constructor(t,n){this.dep=new jn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:L(t),this._value=n?t:te(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||we(t)||Je(t);t=s?t:L(t),ze(t,n)&&(this._rawValue=t,this._value=s?t:te(t),this.dep.trigger())}}function Nt(e){return se(e)?e.value:e}const vr={get:(e,t,n)=>t==="__v_raw"?e:Nt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return se(i)&&!se(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function ti(e){return ht(e)?e:new Proxy(e,vr)}class wr{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new jn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Et-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&U!==this)return js(this,!0),!0}get value(){const t=this.dep.track();return Ks(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function yr(e,t,n=!1){let s,i;return O(e)?s=e:(s=e.get,i=e.set),new wr(s,i,n)}const Vt={},kt=new WeakMap;let st;function Cr(e,t=!1,n=st){if(n){let s=kt.get(n);s||kt.set(n,s=[]),s.push(e)}}function xr(e,t,n=W){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:u}=n,p=E=>i?E:we(E)||i===!1||i===0?Qe(E,1):Qe(E);let a,h,C,A,I=!1,R=!1;if(se(e)?(h=()=>e.value,I=we(e)):ht(e)?(h=()=>p(e),I=!0):B(e)?(R=!0,I=e.some(E=>ht(E)||we(E)),h=()=>e.map(E=>{if(se(E))return E.value;if(ht(E))return p(E);if(O(E))return u?u(E,2):E()})):O(e)?t?h=u?()=>u(e,2):e:h=()=>{if(C){Ne();try{C()}finally{je()}}const E=st;st=a;try{return u?u(e,3,[A]):e(A)}finally{st=E}}:h=Ie,t&&i){const E=h,J=i===!0?1/0:i;h=()=>Qe(E(),J)}const Z=Ji(),$=()=>{a.stop(),Z&&Z.active&&Fn(Z.effects,a)};if(r&&t){const E=t;t=(...J)=>{E(...J),$()}}let K=R?new Array(e.length).fill(Vt):Vt;const k=E=>{if(!(!(a.flags&1)||!a.dirty&&!E))if(t){const J=a.run();if(i||I||(R?J.some((Ae,me)=>ze(Ae,K[me])):ze(J,K))){C&&C();const Ae=st;st=a;try{const me=[J,K===Vt?void 0:R&&K[0]===Vt?[]:K,A];K=J,u?u(t,3,me):t(...me)}finally{st=Ae}}}else a.run()};return l&&l(k),a=new Vs(h),a.scheduler=o?()=>o(k,!1):k,A=E=>Cr(E,!1,a),C=a.onStop=()=>{const E=kt.get(a);if(E){if(u)u(E,4);else for(const J of E)J();kt.delete(a)}},t?s?k(!0):K=a.run():o?o(k.bind(null,!0),!0):a.run(),$.pause=a.pause.bind(a),$.resume=a.resume.bind(a),$.stop=$,$}function Qe(e,t=1/0,n){if(t<=0||!Y(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,se(e))Qe(e.value,t,n);else if(B(e))for(let s=0;s<e.length;s++)Qe(e[s],t,n);else if(Bs(e)||dt(e))e.forEach(s=>{Qe(s,t,n)});else if(Rs(e)){for(const s in e)Qe(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Qe(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Rt(e,t,n,s){try{return s?e(...s):e()}catch(i){rn(i,t,n)}}function qe(e,t,n,s){if(O(e)){const i=Rt(e,t,n,s);return i&&Os(i)&&i.catch(r=>{rn(r,t,n)}),i}if(B(e)){const i=[];for(let r=0;r<e.length;r++)i.push(qe(e[r],t,n,s));return i}}function rn(e,t,n,s=!0){const i=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||W;if(t){let l=t.parent;const u=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const a=l.ec;if(a){for(let h=0;h<a.length;h++)if(a[h](e,u,p)===!1)return}l=l.parent}if(r){Ne(),Rt(r,null,10,[e,u,p]),je();return}}Ar(e,n,i,s,o)}function Ar(e,t,n,s=!0,i=!1){if(i)throw e;console.error(e)}const le=[];let Me=-1;const pt=[];let We=null,ft=0;const ni=Promise.resolve();let Qt=null;function Sr(e){const t=Qt||ni;return e?t.then(this?e.bind(this):e):t}function Dr(e){let t=Me+1,n=le.length;for(;t<n;){const s=t+n>>>1,i=le[s],r=Bt(i);r<e||r===e&&i.flags&2?t=s+1:n=s}return t}function Qn(e){if(!(e.flags&1)){const t=Bt(e),n=le[le.length-1];!n||!(e.flags&2)&&t>=Bt(n)?le.push(e):le.splice(Dr(t),0,e),e.flags|=1,si()}}function si(){Qt||(Qt=ni.then(ri))}function Tr(e){B(e)?pt.push(...e):We&&e.id===-1?We.splice(ft+1,0,e):e.flags&1||(pt.push(e),e.flags|=1),si()}function os(e,t,n=Me+1){for(;n<le.length;n++){const s=le[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;le.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ii(e){if(pt.length){const t=[...new Set(pt)].sort((n,s)=>Bt(n)-Bt(s));if(pt.length=0,We){We.push(...t);return}for(We=t,ft=0;ft<We.length;ft++){const n=We[ft];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}We=null,ft=0}}const Bt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ri(e){try{for(Me=0;Me<le.length;Me++){const t=le[Me];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Rt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Me<le.length;Me++){const t=le[Me];t&&(t.flags&=-2)}Me=-1,le.length=0,ii(),Qt=null,(le.length||pt.length)&&ri()}}let Oe=null,oi=null;function zt(e){const t=Oe;return Oe=e,oi=e&&e.type.__scopeId||null,t}function Pr(e,t=Oe,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&_s(-1);const r=zt(t);let o;try{o=e(...i)}finally{zt(r),s._d&&_s(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function tt(e,t,n,s){const i=e.dirs,r=t&&t.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let u=l.dir[s];u&&(Ne(),qe(u,n,8,[e.el,l,e,t]),je())}}const Er=Symbol("_vte"),Mr=e=>e.__isTeleport;function zn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,zn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function li(e,t){return O(e)?ie({name:e.name},t,{setup:e}):e}function ci(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Yt(e,t,n,s,i=!1){if(B(e)){e.forEach((I,R)=>Yt(I,t&&(B(t)?t[R]:t),n,s,i));return}if(Dt(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Yt(e,t,n,s.component.subTree);return}const r=s.shapeFlag&4?Xn(s.component):s.el,o=i?null:r,{i:l,r:u}=e,p=t&&t.r,a=l.refs===W?l.refs={}:l.refs,h=l.setupState,C=L(h),A=h===W?()=>!1:I=>H(C,I);if(p!=null&&p!==u&&(X(p)?(a[p]=null,A(p)&&(h[p]=null)):se(p)&&(p.value=null)),O(u))Rt(u,l,12,[o,a]);else{const I=X(u),R=se(u);if(I||R){const Z=()=>{if(e.f){const $=I?A(u)?h[u]:a[u]:u.value;i?B($)&&Fn($,r):B($)?$.includes(r)||$.push(r):I?(a[u]=[r],A(u)&&(h[u]=a[u])):(u.value=[r],e.k&&(a[e.k]=u.value))}else I?(a[u]=o,A(u)&&(h[u]=o)):R&&(u.value=o,e.k&&(a[e.k]=o))};o?(Z.id=-1,ge(Z,n)):Z()}}}nn().requestIdleCallback;nn().cancelIdleCallback;const Dt=e=>!!e.type.__asyncLoader,fi=e=>e.type.__isKeepAlive;function Br(e,t){ui(e,"a",t)}function Or(e,t){ui(e,"da",t)}function ui(e,t,n=ce){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(on(t,s,n),n){let i=n.parent;for(;i&&i.parent;)fi(i.parent.vnode)&&Ir(s,t,n,i),i=i.parent}}function Ir(e,t,n,s){const i=on(t,e,s,!0);ai(()=>{Fn(s[t],i)},n)}function on(e,t,n=ce,s=!1){if(n){const i=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{Ne();const l=qt(n),u=qe(t,n,e,o);return l(),je(),u});return s?i.unshift(r):i.push(r),r}}const Ue=e=>(t,n=ce)=>{(!It||e==="sp")&&on(e,(...s)=>t(...s),n)},Rr=Ue("bm"),qr=Ue("m"),Fr=Ue("bu"),Lr=Ue("u"),Hr=Ue("bum"),ai=Ue("um"),$r=Ue("sp"),Vr=Ue("rtg"),Nr=Ue("rtc");function jr(e,t=ce){on("ec",e,t)}const Ur=Symbol.for("v-ndc");function ls(e,t,n,s){let i;const r=n,o=B(e);if(o||X(e)){const l=o&&ht(e);let u=!1,p=!1;l&&(u=!we(e),p=Je(e),e=sn(e)),i=new Array(e.length);for(let a=0,h=e.length;a<h;a++)i[a]=t(u?p?Kt(te(e[a])):te(e[a]):e[a],a,void 0,r)}else if(typeof e=="number"){i=new Array(e);for(let l=0;l<e;l++)i[l]=t(l+1,l,void 0,r)}else if(Y(e))if(e[Symbol.iterator])i=Array.from(e,(l,u)=>t(l,u,void 0,r));else{const l=Object.keys(e);i=new Array(l.length);for(let u=0,p=l.length;u<p;u++){const a=l[u];i[u]=t(e[a],a,u,r)}}else i=[];return i}const Pn=e=>e?Oi(e)?Xn(e):Pn(e.parent):null,Tt=ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Pn(e.parent),$root:e=>Pn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>hi(e),$forceUpdate:e=>e.f||(e.f=()=>{Qn(e.update)}),$nextTick:e=>e.n||(e.n=Sr.bind(e.proxy)),$watch:e=>ao.bind(e)}),mn=(e,t)=>e!==W&&!e.__isScriptSetup&&H(e,t),Wr={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:u}=e;let p;if(t[0]!=="$"){const A=o[t];if(A!==void 0)switch(A){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return r[t]}else{if(mn(s,t))return o[t]=1,s[t];if(i!==W&&H(i,t))return o[t]=2,i[t];if((p=e.propsOptions[0])&&H(p,t))return o[t]=3,r[t];if(n!==W&&H(n,t))return o[t]=4,n[t];En&&(o[t]=0)}}const a=Tt[t];let h,C;if(a)return t==="$attrs"&&ne(e.attrs,"get",""),a(e);if((h=l.__cssModules)&&(h=h[t]))return h;if(n!==W&&H(n,t))return o[t]=4,n[t];if(C=u.config.globalProperties,H(C,t))return C[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:r}=e;return mn(i,t)?(i[t]=n,!0):s!==W&&H(s,t)?(s[t]=n,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||e!==W&&H(e,o)||mn(t,o)||(l=r[0])&&H(l,o)||H(s,o)||H(Tt,o)||H(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:H(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function cs(e){return B(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let En=!0;function Kr(e){const t=hi(e),n=e.proxy,s=e.ctx;En=!1,t.beforeCreate&&fs(t.beforeCreate,e,"bc");const{data:i,computed:r,methods:o,watch:l,provide:u,inject:p,created:a,beforeMount:h,mounted:C,beforeUpdate:A,updated:I,activated:R,deactivated:Z,beforeDestroy:$,beforeUnmount:K,destroyed:k,unmounted:E,render:J,renderTracked:Ae,renderTriggered:me,errorCaptured:fe,serverPrefetch:ot,expose:F,inheritAttrs:P,components:Q,directives:de,filters:ye}=t;if(p&&kr(p,s,null),o)for(const z in o){const N=o[z];O(N)&&(s[z]=N.bind(n))}if(i){const z=i.call(n,n);Y(z)&&(e.data=Wn(z))}if(En=!0,r)for(const z in r){const N=r[z],Ze=O(N)?N.bind(n,n):O(N.get)?N.get.bind(n,n):Ie,Ft=!O(N)&&O(N.set)?N.set.bind(n):Ie,et=ut({get:Ze,set:Ft});Object.defineProperty(s,z,{enumerable:!0,configurable:!0,get:()=>et.value,set:Se=>et.value=Se})}if(l)for(const z in l)di(l[z],s,n,z);if(u){const z=O(u)?u.call(n):u;Reflect.ownKeys(z).forEach(N=>{Xr(N,z[N])})}a&&fs(a,e,"c");function re(z,N){B(N)?N.forEach(Ze=>z(Ze.bind(n))):N&&z(N.bind(n))}if(re(Rr,h),re(qr,C),re(Fr,A),re(Lr,I),re(Br,R),re(Or,Z),re(jr,fe),re(Nr,Ae),re(Vr,me),re(Hr,K),re(ai,E),re($r,ot),B(F))if(F.length){const z=e.exposed||(e.exposed={});F.forEach(N=>{Object.defineProperty(z,N,{get:()=>n[N],set:Ze=>n[N]=Ze})})}else e.exposed||(e.exposed={});J&&e.render===Ie&&(e.render=J),P!=null&&(e.inheritAttrs=P),Q&&(e.components=Q),de&&(e.directives=de),ot&&ci(e)}function kr(e,t,n=Ie){B(e)&&(e=Mn(e));for(const s in e){const i=e[s];let r;Y(i)?"default"in i?r=jt(i.from||s,i.default,!0):r=jt(i.from||s):r=jt(i),se(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[s]=r}}function fs(e,t,n){qe(B(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function di(e,t,n,s){let i=s.includes(".")?Di(n,s):()=>n[s];if(X(e)){const r=t[e];O(r)&&vn(i,r)}else if(O(e))vn(i,e.bind(n));else if(Y(e))if(B(e))e.forEach(r=>di(r,t,n,s));else{const r=O(e.handler)?e.handler.bind(n):t[e.handler];O(r)&&vn(i,r,e)}}function hi(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,l=r.get(t);let u;return l?u=l:!i.length&&!n&&!s?u=t:(u={},i.length&&i.forEach(p=>Jt(u,p,o,!0)),Jt(u,t,o)),Y(t)&&r.set(t,u),u}function Jt(e,t,n,s=!1){const{mixins:i,extends:r}=t;r&&Jt(e,r,n,!0),i&&i.forEach(o=>Jt(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const l=Qr[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const Qr={data:us,props:as,emits:as,methods:Ct,computed:Ct,beforeCreate:oe,created:oe,beforeMount:oe,mounted:oe,beforeUpdate:oe,updated:oe,beforeDestroy:oe,beforeUnmount:oe,destroyed:oe,unmounted:oe,activated:oe,deactivated:oe,errorCaptured:oe,serverPrefetch:oe,components:Ct,directives:Ct,watch:Yr,provide:us,inject:zr};function us(e,t){return t?e?function(){return ie(O(e)?e.call(this,this):e,O(t)?t.call(this,this):t)}:t:e}function zr(e,t){return Ct(Mn(e),Mn(t))}function Mn(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function oe(e,t){return e?[...new Set([].concat(e,t))]:t}function Ct(e,t){return e?ie(Object.create(null),e,t):t}function as(e,t){return e?B(e)&&B(t)?[...new Set([...e,...t])]:ie(Object.create(null),cs(e),cs(t??{})):t}function Yr(e,t){if(!e)return t;if(!t)return e;const n=ie(Object.create(null),e);for(const s in t)n[s]=oe(e[s],t[s]);return n}function pi(){return{app:null,config:{isNativeTag:Li,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jr=0;function Gr(e,t){return function(s,i=null){O(s)||(s=ie({},s)),i!=null&&!Y(i)&&(i=null);const r=pi(),o=new WeakSet,l=[];let u=!1;const p=r.app={_uid:Jr++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Io,get config(){return r.config},set config(a){},use(a,...h){return o.has(a)||(a&&O(a.install)?(o.add(a),a.install(p,...h)):O(a)&&(o.add(a),a(p,...h))),p},mixin(a){return r.mixins.includes(a)||r.mixins.push(a),p},component(a,h){return h?(r.components[a]=h,p):r.components[a]},directive(a,h){return h?(r.directives[a]=h,p):r.directives[a]},mount(a,h,C){if(!u){const A=p._ceVNode||Re(s,i);return A.appContext=r,C===!0?C="svg":C===!1&&(C=void 0),e(A,a,C),u=!0,p._container=a,a.__vue_app__=p,Xn(A.component)}},onUnmount(a){l.push(a)},unmount(){u&&(qe(l,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(a,h){return r.provides[a]=h,p},runWithContext(a){const h=gt;gt=p;try{return a()}finally{gt=h}}};return p}}let gt=null;function Xr(e,t){if(ce){let n=ce.provides;const s=ce.parent&&ce.parent.provides;s===n&&(n=ce.provides=Object.create(s)),n[e]=t}}function jt(e,t,n=!1){const s=ce||Oe;if(s||gt){let i=gt?gt._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&O(t)?t.call(s&&s.proxy):t}}const gi={},_i=()=>Object.create(gi),mi=e=>Object.getPrototypeOf(e)===gi;function Zr(e,t,n,s=!1){const i={},r=_i();e.propsDefaults=Object.create(null),bi(e,t,i,r);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=s?i:gr(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function eo(e,t,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=e,l=L(i),[u]=e.propsOptions;let p=!1;if((s||o>0)&&!(o&16)){if(o&8){const a=e.vnode.dynamicProps;for(let h=0;h<a.length;h++){let C=a[h];if(ln(e.emitsOptions,C))continue;const A=t[C];if(u)if(H(r,C))A!==r[C]&&(r[C]=A,p=!0);else{const I=Ye(C);i[I]=Bn(u,l,I,A,e,!1)}else A!==r[C]&&(r[C]=A,p=!0)}}}else{bi(e,t,i,r)&&(p=!0);let a;for(const h in l)(!t||!H(t,h)&&((a=rt(h))===h||!H(t,a)))&&(u?n&&(n[h]!==void 0||n[a]!==void 0)&&(i[h]=Bn(u,l,h,void 0,e,!0)):delete i[h]);if(r!==l)for(const h in r)(!t||!H(t,h))&&(delete r[h],p=!0)}p&&Ve(e.attrs,"set","")}function bi(e,t,n,s){const[i,r]=e.propsOptions;let o=!1,l;if(t)for(let u in t){if(xt(u))continue;const p=t[u];let a;i&&H(i,a=Ye(u))?!r||!r.includes(a)?n[a]=p:(l||(l={}))[a]=p:ln(e.emitsOptions,u)||(!(u in s)||p!==s[u])&&(s[u]=p,o=!0)}if(r){const u=L(n),p=l||W;for(let a=0;a<r.length;a++){const h=r[a];n[h]=Bn(i,u,h,p[h],e,!H(p,h))}}return o}function Bn(e,t,n,s,i,r){const o=e[n];if(o!=null){const l=H(o,"default");if(l&&s===void 0){const u=o.default;if(o.type!==Function&&!o.skipFactory&&O(u)){const{propsDefaults:p}=i;if(n in p)s=p[n];else{const a=qt(i);s=p[n]=u.call(null,t),a()}}else s=u;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===rt(n))&&(s=!0))}return s}const to=new WeakMap;function vi(e,t,n=!1){const s=n?to:t.propsCache,i=s.get(e);if(i)return i;const r=e.props,o={},l=[];let u=!1;if(!O(e)){const a=h=>{u=!0;const[C,A]=vi(h,t,!0);ie(o,C),A&&l.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}if(!r&&!u)return Y(e)&&s.set(e,at),at;if(B(r))for(let a=0;a<r.length;a++){const h=Ye(r[a]);ds(h)&&(o[h]=W)}else if(r)for(const a in r){const h=Ye(a);if(ds(h)){const C=r[a],A=o[h]=B(C)||O(C)?{type:C}:ie({},C),I=A.type;let R=!1,Z=!0;if(B(I))for(let $=0;$<I.length;++$){const K=I[$],k=O(K)&&K.name;if(k==="Boolean"){R=!0;break}else k==="String"&&(Z=!1)}else R=O(I)&&I.name==="Boolean";A[0]=R,A[1]=Z,(R||H(A,"default"))&&l.push(h)}}const p=[o,l];return Y(e)&&s.set(e,p),p}function ds(e){return e[0]!=="$"&&!xt(e)}const Yn=e=>e[0]==="_"||e==="$stable",Jn=e=>B(e)?e.map(Be):[Be(e)],no=(e,t,n)=>{if(t._n)return t;const s=Pr((...i)=>Jn(t(...i)),n);return s._c=!1,s},wi=(e,t,n)=>{const s=e._ctx;for(const i in e){if(Yn(i))continue;const r=e[i];if(O(r))t[i]=no(i,r,s);else if(r!=null){const o=Jn(r);t[i]=()=>o}}},yi=(e,t)=>{const n=Jn(t);e.slots.default=()=>n},Ci=(e,t,n)=>{for(const s in t)(n||!Yn(s))&&(e[s]=t[s])},so=(e,t,n)=>{const s=e.slots=_i();if(e.vnode.shapeFlag&32){const i=t._;i?(Ci(s,t,n),n&&Fs(s,"_",i,!0)):wi(t,s)}else t&&yi(e,t)},io=(e,t,n)=>{const{vnode:s,slots:i}=e;let r=!0,o=W;if(s.shapeFlag&32){const l=t._;l?n&&l===1?r=!1:Ci(i,t,n):(r=!t.$stable,wi(t,i)),o=t}else t&&(yi(e,t),o={default:1});if(r)for(const l in i)!Yn(l)&&o[l]==null&&delete i[l]},ge=vo;function ro(e){return oo(e)}function oo(e,t){const n=nn();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:u,setText:p,setElementText:a,parentNode:h,nextSibling:C,setScopeId:A=Ie,insertStaticContent:I}=e,R=(c,f,d,m=null,g=null,_=null,y=void 0,w=null,v=!!f.dynamicChildren)=>{if(c===f)return;c&&!yt(c,f)&&(m=Lt(c),Se(c,g,_,!0),c=null),f.patchFlag===-2&&(v=!1,f.dynamicChildren=null);const{type:b,ref:D,shapeFlag:x}=f;switch(b){case cn:Z(c,f,d,m);break;case Ge:$(c,f,d,m);break;case wn:c==null&&K(f,d,m,y);break;case Ce:Q(c,f,d,m,g,_,y,w,v);break;default:x&1?J(c,f,d,m,g,_,y,w,v):x&6?de(c,f,d,m,g,_,y,w,v):(x&64||x&128)&&b.process(c,f,d,m,g,_,y,w,v,bt)}D!=null&&g&&Yt(D,c&&c.ref,_,f||c,!f)},Z=(c,f,d,m)=>{if(c==null)s(f.el=l(f.children),d,m);else{const g=f.el=c.el;f.children!==c.children&&p(g,f.children)}},$=(c,f,d,m)=>{c==null?s(f.el=u(f.children||""),d,m):f.el=c.el},K=(c,f,d,m)=>{[c.el,c.anchor]=I(c.children,f,d,m,c.el,c.anchor)},k=({el:c,anchor:f},d,m)=>{let g;for(;c&&c!==f;)g=C(c),s(c,d,m),c=g;s(f,d,m)},E=({el:c,anchor:f})=>{let d;for(;c&&c!==f;)d=C(c),i(c),c=d;i(f)},J=(c,f,d,m,g,_,y,w,v)=>{f.type==="svg"?y="svg":f.type==="math"&&(y="mathml"),c==null?Ae(f,d,m,g,_,y,w,v):ot(c,f,g,_,y,w,v)},Ae=(c,f,d,m,g,_,y,w)=>{let v,b;const{props:D,shapeFlag:x,transition:S,dirs:M}=c;if(v=c.el=o(c.type,_,D&&D.is,D),x&8?a(v,c.children):x&16&&fe(c.children,v,null,m,g,bn(c,_),y,w),M&&tt(c,null,m,"created"),me(v,c,c.scopeId,y,m),D){for(const j in D)j!=="value"&&!xt(j)&&r(v,j,null,D[j],_,m);"value"in D&&r(v,"value",null,D.value,_),(b=D.onVnodeBeforeMount)&&Ee(b,m,c)}M&&tt(c,null,m,"beforeMount");const q=lo(g,S);q&&S.beforeEnter(v),s(v,f,d),((b=D&&D.onVnodeMounted)||q||M)&&ge(()=>{b&&Ee(b,m,c),q&&S.enter(v),M&&tt(c,null,m,"mounted")},g)},me=(c,f,d,m,g)=>{if(d&&A(c,d),m)for(let _=0;_<m.length;_++)A(c,m[_]);if(g){let _=g.subTree;if(f===_||Pi(_.type)&&(_.ssContent===f||_.ssFallback===f)){const y=g.vnode;me(c,y,y.scopeId,y.slotScopeIds,g.parent)}}},fe=(c,f,d,m,g,_,y,w,v=0)=>{for(let b=v;b<c.length;b++){const D=c[b]=w?Ke(c[b]):Be(c[b]);R(null,D,f,d,m,g,_,y,w)}},ot=(c,f,d,m,g,_,y)=>{const w=f.el=c.el;let{patchFlag:v,dynamicChildren:b,dirs:D}=f;v|=c.patchFlag&16;const x=c.props||W,S=f.props||W;let M;if(d&&nt(d,!1),(M=S.onVnodeBeforeUpdate)&&Ee(M,d,f,c),D&&tt(f,c,d,"beforeUpdate"),d&&nt(d,!0),(x.innerHTML&&S.innerHTML==null||x.textContent&&S.textContent==null)&&a(w,""),b?F(c.dynamicChildren,b,w,d,m,bn(f,g),_):y||N(c,f,w,null,d,m,bn(f,g),_,!1),v>0){if(v&16)P(w,x,S,d,g);else if(v&2&&x.class!==S.class&&r(w,"class",null,S.class,g),v&4&&r(w,"style",x.style,S.style,g),v&8){const q=f.dynamicProps;for(let j=0;j<q.length;j++){const V=q[j],he=x[V],ue=S[V];(ue!==he||V==="value")&&r(w,V,he,ue,g,d)}}v&1&&c.children!==f.children&&a(w,f.children)}else!y&&b==null&&P(w,x,S,d,g);((M=S.onVnodeUpdated)||D)&&ge(()=>{M&&Ee(M,d,f,c),D&&tt(f,c,d,"updated")},m)},F=(c,f,d,m,g,_,y)=>{for(let w=0;w<f.length;w++){const v=c[w],b=f[w],D=v.el&&(v.type===Ce||!yt(v,b)||v.shapeFlag&198)?h(v.el):d;R(v,b,D,null,m,g,_,y,!0)}},P=(c,f,d,m,g)=>{if(f!==d){if(f!==W)for(const _ in f)!xt(_)&&!(_ in d)&&r(c,_,f[_],null,g,m);for(const _ in d){if(xt(_))continue;const y=d[_],w=f[_];y!==w&&_!=="value"&&r(c,_,w,y,g,m)}"value"in d&&r(c,"value",f.value,d.value,g)}},Q=(c,f,d,m,g,_,y,w,v)=>{const b=f.el=c?c.el:l(""),D=f.anchor=c?c.anchor:l("");let{patchFlag:x,dynamicChildren:S,slotScopeIds:M}=f;M&&(w=w?w.concat(M):M),c==null?(s(b,d,m),s(D,d,m),fe(f.children||[],d,D,g,_,y,w,v)):x>0&&x&64&&S&&c.dynamicChildren?(F(c.dynamicChildren,S,d,g,_,y,w),(f.key!=null||g&&f===g.subTree)&&xi(c,f,!0)):N(c,f,d,D,g,_,y,w,v)},de=(c,f,d,m,g,_,y,w,v)=>{f.slotScopeIds=w,c==null?f.shapeFlag&512?g.ctx.activate(f,d,m,y,v):ye(f,d,m,g,_,y,v):lt(c,f,v)},ye=(c,f,d,m,g,_,y)=>{const w=c.component=To(c,m,g);if(fi(c)&&(w.ctx.renderer=bt),Po(w,!1,y),w.asyncDep){if(g&&g.registerDep(w,re,y),!c.el){const v=w.subTree=Re(Ge);$(null,v,f,d)}}else re(w,c,f,d,g,_,y)},lt=(c,f,d)=>{const m=f.component=c.component;if(mo(c,f,d))if(m.asyncDep&&!m.asyncResolved){z(m,f,d);return}else m.next=f,m.update();else f.el=c.el,m.vnode=f},re=(c,f,d,m,g,_,y)=>{const w=()=>{if(c.isMounted){let{next:x,bu:S,u:M,parent:q,vnode:j}=c;{const Te=Ai(c);if(Te){x&&(x.el=j.el,z(c,x,y)),Te.asyncDep.then(()=>{c.isUnmounted||w()});return}}let V=x,he;nt(c,!1),x?(x.el=j.el,z(c,x,y)):x=j,S&&dn(S),(he=x.props&&x.props.onVnodeBeforeUpdate)&&Ee(he,q,x,j),nt(c,!0);const ue=ps(c),De=c.subTree;c.subTree=ue,R(De,ue,h(De.el),Lt(De),c,g,_),x.el=ue.el,V===null&&bo(c,ue.el),M&&ge(M,g),(he=x.props&&x.props.onVnodeUpdated)&&ge(()=>Ee(he,q,x,j),g)}else{let x;const{el:S,props:M}=f,{bm:q,m:j,parent:V,root:he,type:ue}=c,De=Dt(f);nt(c,!1),q&&dn(q),!De&&(x=M&&M.onVnodeBeforeMount)&&Ee(x,V,f),nt(c,!0);{he.ce&&he.ce._injectChildStyle(ue);const Te=c.subTree=ps(c);R(null,Te,d,m,c,g,_),f.el=Te.el}if(j&&ge(j,g),!De&&(x=M&&M.onVnodeMounted)){const Te=f;ge(()=>Ee(x,V,Te),g)}(f.shapeFlag&256||V&&Dt(V.vnode)&&V.vnode.shapeFlag&256)&&c.a&&ge(c.a,g),c.isMounted=!0,f=d=m=null}};c.scope.on();const v=c.effect=new Vs(w);c.scope.off();const b=c.update=v.run.bind(v),D=c.job=v.runIfDirty.bind(v);D.i=c,D.id=c.uid,v.scheduler=()=>Qn(D),nt(c,!0),b()},z=(c,f,d)=>{f.component=c;const m=c.vnode.props;c.vnode=f,c.next=null,eo(c,f.props,m,d),io(c,f.children,d),Ne(),os(c),je()},N=(c,f,d,m,g,_,y,w,v=!1)=>{const b=c&&c.children,D=c?c.shapeFlag:0,x=f.children,{patchFlag:S,shapeFlag:M}=f;if(S>0){if(S&128){Ft(b,x,d,m,g,_,y,w,v);return}else if(S&256){Ze(b,x,d,m,g,_,y,w,v);return}}M&8?(D&16&&mt(b,g,_),x!==b&&a(d,x)):D&16?M&16?Ft(b,x,d,m,g,_,y,w,v):mt(b,g,_,!0):(D&8&&a(d,""),M&16&&fe(x,d,m,g,_,y,w,v))},Ze=(c,f,d,m,g,_,y,w,v)=>{c=c||at,f=f||at;const b=c.length,D=f.length,x=Math.min(b,D);let S;for(S=0;S<x;S++){const M=f[S]=v?Ke(f[S]):Be(f[S]);R(c[S],M,d,null,g,_,y,w,v)}b>D?mt(c,g,_,!0,!1,x):fe(f,d,m,g,_,y,w,v,x)},Ft=(c,f,d,m,g,_,y,w,v)=>{let b=0;const D=f.length;let x=c.length-1,S=D-1;for(;b<=x&&b<=S;){const M=c[b],q=f[b]=v?Ke(f[b]):Be(f[b]);if(yt(M,q))R(M,q,d,null,g,_,y,w,v);else break;b++}for(;b<=x&&b<=S;){const M=c[x],q=f[S]=v?Ke(f[S]):Be(f[S]);if(yt(M,q))R(M,q,d,null,g,_,y,w,v);else break;x--,S--}if(b>x){if(b<=S){const M=S+1,q=M<D?f[M].el:m;for(;b<=S;)R(null,f[b]=v?Ke(f[b]):Be(f[b]),d,q,g,_,y,w,v),b++}}else if(b>S)for(;b<=x;)Se(c[b],g,_,!0),b++;else{const M=b,q=b,j=new Map;for(b=q;b<=S;b++){const pe=f[b]=v?Ke(f[b]):Be(f[b]);pe.key!=null&&j.set(pe.key,b)}let V,he=0;const ue=S-q+1;let De=!1,Te=0;const vt=new Array(ue);for(b=0;b<ue;b++)vt[b]=0;for(b=M;b<=x;b++){const pe=c[b];if(he>=ue){Se(pe,g,_,!0);continue}let Pe;if(pe.key!=null)Pe=j.get(pe.key);else for(V=q;V<=S;V++)if(vt[V-q]===0&&yt(pe,f[V])){Pe=V;break}Pe===void 0?Se(pe,g,_,!0):(vt[Pe-q]=b+1,Pe>=Te?Te=Pe:De=!0,R(pe,f[Pe],d,null,g,_,y,w,v),he++)}const ts=De?co(vt):at;for(V=ts.length-1,b=ue-1;b>=0;b--){const pe=q+b,Pe=f[pe],ns=pe+1<D?f[pe+1].el:m;vt[b]===0?R(null,Pe,d,ns,g,_,y,w,v):De&&(V<0||b!==ts[V]?et(Pe,d,ns,2):V--)}}},et=(c,f,d,m,g=null)=>{const{el:_,type:y,transition:w,children:v,shapeFlag:b}=c;if(b&6){et(c.component.subTree,f,d,m);return}if(b&128){c.suspense.move(f,d,m);return}if(b&64){y.move(c,f,d,bt);return}if(y===Ce){s(_,f,d);for(let x=0;x<v.length;x++)et(v[x],f,d,m);s(c.anchor,f,d);return}if(y===wn){k(c,f,d);return}if(m!==2&&b&1&&w)if(m===0)w.beforeEnter(_),s(_,f,d),ge(()=>w.enter(_),g);else{const{leave:x,delayLeave:S,afterLeave:M}=w,q=()=>{c.ctx.isUnmounted?i(_):s(_,f,d)},j=()=>{x(_,()=>{q(),M&&M()})};S?S(_,q,j):j()}else s(_,f,d)},Se=(c,f,d,m=!1,g=!1)=>{const{type:_,props:y,ref:w,children:v,dynamicChildren:b,shapeFlag:D,patchFlag:x,dirs:S,cacheIndex:M}=c;if(x===-2&&(g=!1),w!=null&&(Ne(),Yt(w,null,d,c,!0),je()),M!=null&&(f.renderCache[M]=void 0),D&256){f.ctx.deactivate(c);return}const q=D&1&&S,j=!Dt(c);let V;if(j&&(V=y&&y.onVnodeBeforeUnmount)&&Ee(V,f,c),D&6)Fi(c.component,d,m);else{if(D&128){c.suspense.unmount(d,m);return}q&&tt(c,null,f,"beforeUnmount"),D&64?c.type.remove(c,f,d,bt,m):b&&!b.hasOnce&&(_!==Ce||x>0&&x&64)?mt(b,f,d,!1,!0):(_===Ce&&x&384||!g&&D&16)&&mt(v,f,d),m&&Zn(c)}(j&&(V=y&&y.onVnodeUnmounted)||q)&&ge(()=>{V&&Ee(V,f,c),q&&tt(c,null,f,"unmounted")},d)},Zn=c=>{const{type:f,el:d,anchor:m,transition:g}=c;if(f===Ce){qi(d,m);return}if(f===wn){E(c);return}const _=()=>{i(d),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:y,delayLeave:w}=g,v=()=>y(d,_);w?w(c.el,_,v):v()}else _()},qi=(c,f)=>{let d;for(;c!==f;)d=C(c),i(c),c=d;i(f)},Fi=(c,f,d)=>{const{bum:m,scope:g,job:_,subTree:y,um:w,m:v,a:b,parent:D,slots:{__:x}}=c;hs(v),hs(b),m&&dn(m),D&&B(x)&&x.forEach(S=>{D.renderCache[S]=void 0}),g.stop(),_&&(_.flags|=8,Se(y,c,f,d)),w&&ge(w,f),ge(()=>{c.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},mt=(c,f,d,m=!1,g=!1,_=0)=>{for(let y=_;y<c.length;y++)Se(c[y],f,d,m,g)},Lt=c=>{if(c.shapeFlag&6)return Lt(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const f=C(c.anchor||c.el),d=f&&f[Er];return d?C(d):f};let un=!1;const es=(c,f,d)=>{c==null?f._vnode&&Se(f._vnode,null,null,!0):R(f._vnode||null,c,f,null,null,null,d),f._vnode=c,un||(un=!0,os(),ii(),un=!1)},bt={p:R,um:Se,m:et,r:Zn,mt:ye,mc:fe,pc:N,pbc:F,n:Lt,o:e};return{render:es,hydrate:void 0,createApp:Gr(es)}}function bn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function nt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function lo(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function xi(e,t,n=!1){const s=e.children,i=t.children;if(B(s)&&B(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Ke(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&xi(o,l)),l.type===cn&&(l.el=o.el),l.type===Ge&&!l.el&&(l.el=o.el)}}function co(e){const t=e.slice(),n=[0];let s,i,r,o,l;const u=e.length;for(s=0;s<u;s++){const p=e[s];if(p!==0){if(i=n[n.length-1],e[i]<p){t[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,e[n[l]]<p?r=l+1:o=l;p<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}function Ai(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ai(t)}function hs(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const fo=Symbol.for("v-scx"),uo=()=>jt(fo);function vn(e,t,n){return Si(e,t,n)}function Si(e,t,n=W){const{immediate:s,deep:i,flush:r,once:o}=n,l=ie({},n),u=t&&s||!t&&r!=="post";let p;if(It){if(r==="sync"){const A=uo();p=A.__watcherHandles||(A.__watcherHandles=[])}else if(!u){const A=()=>{};return A.stop=Ie,A.resume=Ie,A.pause=Ie,A}}const a=ce;l.call=(A,I,R)=>qe(A,a,I,R);let h=!1;r==="post"?l.scheduler=A=>{ge(A,a&&a.suspense)}:r!=="sync"&&(h=!0,l.scheduler=(A,I)=>{I?A():Qn(A)}),l.augmentJob=A=>{t&&(A.flags|=4),h&&(A.flags|=2,a&&(A.id=a.uid,A.i=a))};const C=xr(e,t,l);return It&&(p?p.push(C):u&&C()),C}function ao(e,t,n){const s=this.proxy,i=X(e)?e.includes(".")?Di(s,e):()=>s[e]:e.bind(s,s);let r;O(t)?r=t:(r=t.handler,n=t);const o=qt(this),l=Si(i,r.bind(s),n);return o(),l}function Di(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const ho=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ye(t)}Modifiers`]||e[`${rt(t)}Modifiers`];function po(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||W;let i=n;const r=t.startsWith("update:"),o=r&&ho(s,t.slice(7));o&&(o.trim&&(i=n.map(a=>X(a)?a.trim():a)),o.number&&(i=n.map(ji)));let l,u=s[l=an(t)]||s[l=an(Ye(t))];!u&&r&&(u=s[l=an(rt(t))]),u&&qe(u,e,6,i);const p=s[l+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,qe(p,e,6,i)}}function Ti(e,t,n=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const r=e.emits;let o={},l=!1;if(!O(e)){const u=p=>{const a=Ti(p,t,!0);a&&(l=!0,ie(o,a))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!r&&!l?(Y(e)&&s.set(e,null),null):(B(r)?r.forEach(u=>o[u]=null):ie(o,r),Y(e)&&s.set(e,o),o)}function ln(e,t){return!e||!Zt(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,rt(t))||H(e,t))}function ps(e){const{type:t,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:u,render:p,renderCache:a,props:h,data:C,setupState:A,ctx:I,inheritAttrs:R}=e,Z=zt(e);let $,K;try{if(n.shapeFlag&4){const E=i||s,J=E;$=Be(p.call(J,E,a,h,A,C,I)),K=l}else{const E=t;$=Be(E.length>1?E(h,{attrs:l,slots:o,emit:u}):E(h,null)),K=t.props?l:go(l)}}catch(E){Pt.length=0,rn(E,e,1),$=Re(Ge)}let k=$;if(K&&R!==!1){const E=Object.keys(K),{shapeFlag:J}=k;E.length&&J&7&&(r&&E.some(qn)&&(K=_o(K,r)),k=_t(k,K,!1,!0))}return n.dirs&&(k=_t(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&zn(k,n.transition),$=k,zt(Z),$}const go=e=>{let t;for(const n in e)(n==="class"||n==="style"||Zt(n))&&((t||(t={}))[n]=e[n]);return t},_o=(e,t)=>{const n={};for(const s in e)(!qn(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function mo(e,t,n){const{props:s,children:i,component:r}=e,{props:o,children:l,patchFlag:u}=t,p=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?gs(s,o,p):!!o;if(u&8){const a=t.dynamicProps;for(let h=0;h<a.length;h++){const C=a[h];if(o[C]!==s[C]&&!ln(p,C))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?gs(s,o,p):!0:!!o;return!1}function gs(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(t[r]!==e[r]&&!ln(n,r))return!0}return!1}function bo({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Pi=e=>e.__isSuspense;function vo(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):Tr(e)}const Ce=Symbol.for("v-fgt"),cn=Symbol.for("v-txt"),Ge=Symbol.for("v-cmt"),wn=Symbol.for("v-stc"),Pt=[];let _e=null;function G(e=!1){Pt.push(_e=e?null:[])}function wo(){Pt.pop(),_e=Pt[Pt.length-1]||null}let Ot=1;function _s(e,t=!1){Ot+=e,e<0&&_e&&t&&(_e.hasOnce=!0)}function Ei(e){return e.dynamicChildren=Ot>0?_e||at:null,wo(),Ot>0&&_e&&_e.push(e),e}function ee(e,t,n,s,i,r){return Ei(T(e,t,n,s,i,r,!0))}function Gt(e,t,n,s,i){return Ei(Re(e,t,n,s,i,!0))}function Mi(e){return e?e.__v_isVNode===!0:!1}function yt(e,t){return e.type===t.type&&e.key===t.key}const Bi=({key:e})=>e??null,Ut=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?X(e)||se(e)||O(e)?{i:Oe,r:e,k:t,f:!!n}:e:null);function T(e,t=null,n=null,s=0,i=null,r=e===Ce?0:1,o=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Bi(t),ref:t&&Ut(t),scopeId:oi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Oe};return l?(Gn(u,n),r&128&&e.normalize(u)):n&&(u.shapeFlag|=X(n)?8:16),Ot>0&&!o&&_e&&(u.patchFlag>0||r&6)&&u.patchFlag!==32&&_e.push(u),u}const Re=yo;function yo(e,t=null,n=null,s=0,i=null,r=!1){if((!e||e===Ur)&&(e=Ge),Mi(e)){const l=_t(e,t,!0);return n&&Gn(l,n),Ot>0&&!r&&_e&&(l.shapeFlag&6?_e[_e.indexOf(e)]=l:_e.push(l)),l.patchFlag=-2,l}if(Oo(e)&&(e=e.__vccOpts),t){t=Co(t);let{class:l,style:u}=t;l&&!X(l)&&(t.class=ke(l)),Y(u)&&(kn(u)&&!B(u)&&(u=ie({},u)),t.style=Hn(u))}const o=X(e)?1:Pi(e)?128:Mr(e)?64:Y(e)?4:O(e)?2:0;return T(e,t,n,s,i,o,r,!0)}function Co(e){return e?kn(e)||mi(e)?ie({},e):e:null}function _t(e,t,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:u}=e,p=t?Ao(i||{},t):i,a={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Bi(p),ref:t&&t.ref?n&&r?B(r)?r.concat(Ut(t)):[r,Ut(t)]:Ut(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&_t(e.ssContent),ssFallback:e.ssFallback&&_t(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&s&&zn(a,u.clone(a)),a}function He(e=" ",t=0){return Re(cn,null,e,t)}function xo(e="",t=!1){return t?(G(),Gt(Ge,null,e)):Re(Ge,null,e)}function Be(e){return e==null||typeof e=="boolean"?Re(Ge):B(e)?Re(Ce,null,e.slice()):Mi(e)?Ke(e):Re(cn,null,String(e))}function Ke(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:_t(e)}function Gn(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),Gn(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!mi(t)?t._ctx=Oe:i===3&&Oe&&(Oe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else O(t)?(t={default:t,_ctx:Oe},n=32):(t=String(t),s&64?(n=16,t=[He(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ao(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=ke([t.class,s.class]));else if(i==="style")t.style=Hn([t.style,s.style]);else if(Zt(i)){const r=t[i],o=s[i];o&&r!==o&&!(B(r)&&r.includes(o))&&(t[i]=r?[].concat(r,o):o)}else i!==""&&(t[i]=s[i])}return t}function Ee(e,t,n,s=null){qe(e,t,7,[n,s])}const So=pi();let Do=0;function To(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||So,r={uid:Do++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Yi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vi(s,i),emitsOptions:Ti(s,i),emit:null,emitted:null,propsDefaults:W,inheritAttrs:s.inheritAttrs,ctx:W,data:W,props:W,attrs:W,slots:W,refs:W,setupState:W,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=po.bind(null,r),e.ce&&e.ce(r),r}let ce=null,Xt,On;{const e=nn(),t=(n,s)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Xt=t("__VUE_INSTANCE_SETTERS__",n=>ce=n),On=t("__VUE_SSR_SETTERS__",n=>It=n)}const qt=e=>{const t=ce;return Xt(e),e.scope.on(),()=>{e.scope.off(),Xt(t)}},ms=()=>{ce&&ce.scope.off(),Xt(null)};function Oi(e){return e.vnode.shapeFlag&4}let It=!1;function Po(e,t=!1,n=!1){t&&On(t);const{props:s,children:i}=e.vnode,r=Oi(e);Zr(e,s,r,t),so(e,i,n||t);const o=r?Eo(e,t):void 0;return t&&On(!1),o}function Eo(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Wr);const{setup:s}=n;if(s){Ne();const i=e.setupContext=s.length>1?Bo(e):null,r=qt(e),o=Rt(s,e,0,[e.props,i]),l=Os(o);if(je(),r(),(l||e.sp)&&!Dt(e)&&ci(e),l){if(o.then(ms,ms),t)return o.then(u=>{bs(e,u)}).catch(u=>{rn(u,e,0)});e.asyncDep=o}else bs(e,o)}else Ii(e)}function bs(e,t,n){O(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Y(t)&&(e.setupState=ti(t)),Ii(e)}function Ii(e,t,n){const s=e.type;e.render||(e.render=s.render||Ie);{const i=qt(e);Ne();try{Kr(e)}finally{je(),i()}}}const Mo={get(e,t){return ne(e,"get",""),e[t]}};function Bo(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Mo),slots:e.slots,emit:e.emit,expose:t}}function Xn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ti(_r(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Tt)return Tt[n](e)},has(t,n){return n in t||n in Tt}})):e.proxy}function Oo(e){return O(e)&&"__vccOpts"in e}const ut=(e,t)=>yr(e,t,It),Io="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let In;const vs=typeof window<"u"&&window.trustedTypes;if(vs)try{In=vs.createPolicy("vue",{createHTML:e=>e})}catch{}const Ri=In?e=>In.createHTML(e):e=>e,Ro="http://www.w3.org/2000/svg",qo="http://www.w3.org/1998/Math/MathML",$e=typeof document<"u"?document:null,ws=$e&&$e.createElement("template"),Fo={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t==="svg"?$e.createElementNS(Ro,e):t==="mathml"?$e.createElementNS(qo,e):n?$e.createElement(e,{is:n}):$e.createElement(e);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>$e.createTextNode(e),createComment:e=>$e.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>$e.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,r){const o=n?n.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ws.innerHTML=Ri(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=ws.content;if(s==="svg"||s==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Lo=Symbol("_vtc");function Ho(e,t,n){const s=e[Lo];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ys=Symbol("_vod"),$o=Symbol("_vsh"),Vo=Symbol(""),No=/(^|;)\s*display\s*:/;function jo(e,t,n){const s=e.style,i=X(n);let r=!1;if(n&&!i){if(t)if(X(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Wt(s,l,"")}else for(const o in t)n[o]==null&&Wt(s,o,"");for(const o in n)o==="display"&&(r=!0),Wt(s,o,n[o])}else if(i){if(t!==n){const o=s[Vo];o&&(n+=";"+o),s.cssText=n,r=No.test(n)}}else t&&e.removeAttribute("style");ys in e&&(e[ys]=r?s.display:"",e[$o]&&(s.display="none"))}const Cs=/\s*!important$/;function Wt(e,t,n){if(B(n))n.forEach(s=>Wt(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Uo(e,t);Cs.test(n)?e.setProperty(rt(s),n.replace(Cs,""),"important"):e[s]=n}}const xs=["Webkit","Moz","ms"],yn={};function Uo(e,t){const n=yn[t];if(n)return n;let s=Ye(t);if(s!=="filter"&&s in e)return yn[t]=s;s=qs(s);for(let i=0;i<xs.length;i++){const r=xs[i]+s;if(r in e)return yn[t]=r}return t}const As="http://www.w3.org/1999/xlink";function Ss(e,t,n,s,i,r=zi(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(As,t.slice(6,t.length)):e.setAttributeNS(As,t,n):n==null||r&&!Ls(n)?e.removeAttribute(t):e.setAttribute(t,r?"":Xe(n)?String(n):n)}function Ds(e,t,n,s,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Ri(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?e.getAttribute("value")||"":e.value,u=n==null?e.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ls(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Wo(e,t,n,s){e.addEventListener(t,n,s)}function Ko(e,t,n,s){e.removeEventListener(t,n,s)}const Ts=Symbol("_vei");function ko(e,t,n,s,i=null){const r=e[Ts]||(e[Ts]={}),o=r[t];if(s&&o)o.value=s;else{const[l,u]=Qo(t);if(s){const p=r[t]=Jo(s,i);Wo(e,l,p,u)}else o&&(Ko(e,l,o,u),r[t]=void 0)}}const Ps=/(?:Once|Passive|Capture)$/;function Qo(e){let t;if(Ps.test(e)){t={};let s;for(;s=e.match(Ps);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):rt(e.slice(2)),t]}let Cn=0;const zo=Promise.resolve(),Yo=()=>Cn||(zo.then(()=>Cn=0),Cn=Date.now());function Jo(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;qe(Go(s,n.value),t,5,[s])};return n.value=e,n.attached=Yo(),n}function Go(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const Es=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Xo=(e,t,n,s,i,r)=>{const o=i==="svg";t==="class"?Ho(e,s,o):t==="style"?jo(e,n,s):Zt(t)?qn(t)||ko(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Zo(e,t,s,o))?(Ds(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ss(e,t,s,o,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!X(s))?Ds(e,Ye(t),s,r,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Ss(e,t,s,o))};function Zo(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Es(t)&&O(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Es(t)&&X(n)?!1:t in e}const el=ie({patchProp:Xo},Fo);let Ms;function tl(){return Ms||(Ms=ro(el))}const nl=(...e)=>{const t=tl().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=il(s);if(!i)return;const r=t._component;!O(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,sl(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function sl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function il(e){return X(e)?document.querySelector(e):e}const be=[{question:`关于Brooks提及的软件开发本质难题，下列说法中不准确的是（ 多选 ）

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
`,answer:"AD"}],xn=[{question:"简述软件发展三大阶段以及典型的开发方法",answer:`1. 软硬件一体化：线性顺序过程，事实上是硬件开发流程
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
7. 开发人员：负责软件产品的开发`}],fn=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n},rl={},ol={t:"1749733532145",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"43898",width:"48",height:"48"};function ll(e,t){return G(),ee("svg",ol,t[0]||(t[0]=[T("path",{d:"M753.777778 625.777778c0-116.622222-82.488889-213.333333-190.577778-236.088889 0-5.688889 0-8.533333-2.844444-14.222222l-22.755556-42.666667V122.311111c0-14.222222-11.377778-22.755556-22.755556-22.755555s-22.755556 11.377778-22.755555 22.755555v213.333333l-22.755556 42.666667c-2.844444 2.844444-2.844444 8.533333-2.844444 14.222222-108.088889 22.755556-190.577778 119.466667-190.577778 236.088889 0 14.222222 11.377778 22.755556 22.755556 22.755556h96.711111c11.377778 56.888889 62.577778 102.4 122.311111 102.4 59.733333 0 110.933333-42.666667 122.311111-102.4h96.711111c5.688889-2.844444 17.066667-11.377778 17.066667-25.6zM512 705.422222c-34.133333 0-65.422222-22.755556-73.955556-54.044444h147.911112c-8.533333 31.288889-39.822222 54.044444-73.955556 54.044444z m-193.422222-102.4c11.377778-96.711111 93.866667-170.666667 193.422222-170.666666s182.044444 73.955556 193.422222 170.666666H318.577778zM318.577778 742.4l-45.511111 45.511111c-11.377778 11.377778-11.377778 28.444444 0 39.822222 11.377778 11.377778 28.444444 11.377778 39.822222 0l45.511111-45.511111c11.377778-11.377778 11.377778-28.444444 0-39.822222-8.533333-11.377778-28.444444-11.377778-39.822222 0zM750.933333 790.755556l-45.511111-45.511112c-11.377778-11.377778-28.444444-11.377778-39.822222 0-11.377778 11.377778-11.377778 28.444444 0 39.822223l45.511111 45.511111c11.377778 11.377778 28.444444 11.377778 39.822222 0s11.377778-28.444444 0-39.822222zM512 802.133333c-17.066667 0-28.444444 14.222222-28.444444 28.444445v65.422222c0 17.066667 14.222222 28.444444 28.444444 28.444444 17.066667 0 28.444444-14.222222 28.444444-28.444444v-65.422222c0-17.066667-11.377778-28.444444-28.444444-28.444445z","p-id":"43899",fill:"#ffffff"},null,-1)]))}const cl=fn(rl,[["render",ll]]),fl={},ul={t:"1749733532145",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"43898",width:"48",height:"48"};function al(e,t){return G(),ee("svg",ul,t[0]||(t[0]=[T("path",{d:"M753.777778 625.777778c0-116.622222-82.488889-213.333333-190.577778-236.088889 0-5.688889 0-8.533333-2.844444-14.222222l-22.755556-42.666667V122.311111c0-14.222222-11.377778-22.755556-22.755556-22.755555s-22.755556 11.377778-22.755555 22.755555v213.333333l-22.755556 42.666667c-2.844444 2.844444-2.844444 8.533333-2.844444 14.222222-108.088889 22.755556-190.577778 119.466667-190.577778 236.088889 0 14.222222 11.377778 22.755556 22.755556 22.755556h96.711111c11.377778 56.888889 62.577778 102.4 122.311111 102.4 59.733333 0 110.933333-42.666667 122.311111-102.4h96.711111c5.688889-2.844444 17.066667-11.377778 17.066667-25.6zM512 705.422222c-34.133333 0-65.422222-22.755556-73.955556-54.044444h147.911112c-8.533333 31.288889-39.822222 54.044444-73.955556 54.044444z m-193.422222-102.4c11.377778-96.711111 93.866667-170.666667 193.422222-170.666666s182.044444 73.955556 193.422222 170.666666H318.577778zM318.577778 742.4l-45.511111 45.511111c-11.377778 11.377778-11.377778 28.444444","p-id":"43899",fill:"#ffffff"},null,-1)]))}const dl=fn(fl,[["render",al]]),hl={},pl={t:"1749791627159",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"48513",width:"64",height:"64"};function gl(e,t){return G(),ee("svg",pl,t[0]||(t[0]=[T("path",{d:"M512 483.952751m-483.440873 0a483.440873 483.440873 0 1 0 966.881746 0 483.440873 483.440873 0 1 0-966.881746 0Z",fill:"#FFCB4C","p-id":"48514"},null,-1),T("path",{d:"M413.15056 598.215423a25.992056 25.992056 0 0 1-8.872562-13.195092 22.721721 22.721721 0 0 1 16.778243-29.03489c128.765898-29.03489 215.472441 38.760583 219.140903 41.661228 10.920076 8.701936 13.052904 24.029855 4.919722 34.267427-8.133182 10.180696-23.546414 11.403517-34.438053 2.758457-3.128147-2.388767-71.748313-54.685694-175.801851-31.224593a25.878306 25.878306 0 0 1-21.726402-5.232537z",fill:"#65471B","p-id":"48515"},null,-1),T("path",{d:"M312.765485 317.762842a75.530527 60.430109 90 1 0 120.860218 0 75.530527 60.430109 90 1 0-120.860218 0Z",fill:"#65471B","p-id":"48516"},null,-1),T("path",{d:"M632.860218 347.963678a75.530527 60.430109 90 1 0 120.860218 0 75.530527 60.430109 90 1 0-120.860218 0Z",fill:"#65471B","p-id":"48517"},null,-1),T("path",{d:"M491.411106 999.556661s35.973688-11.687894 40.637471-38.447768c4.919722-27.641443-17.745124-33.186794-17.745123-33.186795s29.603644-5.915041 33.328982-39.130273c3.497837-31.309906-24.484858-38.760583-24.484858-38.760582s27.584567-11.375079 28.892701-43.765618c1.080633-27.271753-28.29551-40.609033-28.29551-40.609034s143.269124-34.72243 157.999853-38.134953c14.673852-3.412524 37.537762-17.489185 30.399899-48.173461-7.080987-30.712714-34.238989-31.793347-48.258774-28.523012-14.048223 3.270335-191.783838 44.533436-253.095516 58.809161l-40.921848 9.498191c-15.356357 3.611588-22.323593-3.128147-11.48883-14.560102 14.446351-15.242606 23.688603-32.106161 26.902063-60.088856 3.384086-29.433018-6.597546-65.776396-12.313523-79.881495-10.635699-26.19112-28.579887-46.893765-49.310969-54.003189-32.333663-11.090702-55.311323 9.128501-43.850931 44.391247 17.17637 52.723493 5.915041 95.977232-23.688603 122.083039-69.643923 61.340115-102.034462 105.077296-80.478687 198.296071 23.546414 101.664772 124.471806 167.099916 226.136578 143.553501l89.635625-19.366072z",fill:"#efb336","p-id":"48518","data-spm-anchor-id":"a313x.search_index.0.i17.2f793a81OOjooU",class:"selected"},null,-1),T("path",{d:"M264.478273 180.607822a26.304871 26.304871 0 0 1-11.11914-11.346641 22.750159 22.750159 0 0 1 11.176016-31.622721c121.315221-52.069426 218.94184-1.222821 223.036868 0.966882 12.313523 6.569108 17.290121 21.242961 11.11914 32.817104-6.142543 11.517268-21.043897 15.526983-33.35742 9.043188-3.497837-1.791575-80.535562-40.722784-178.531871 1.336572a26.020494 26.020494 0 0 1-22.323593-1.194384z m345.09147 106.641369a26.276433 26.276433 0 0 1-10.294447-12.057584 22.750159 22.750159 0 0 1 13.308843-30.826465c124.585557-43.680305 218.543712 13.650095 222.468115 16.124175 11.801645 7.393802 15.782923 22.380469 8.872562 33.499609-6.881923 11.090702-22.067654 14.076661-33.869299 6.768172-3.412524-2.047514-77.549604-46.097509-178.219056-10.777888a26.276433 26.276433 0 0 1-22.266718-2.730019z",fill:"#65471B","p-id":"48519"},null,-1)]))}const _l=fn(hl,[["render",gl]]),ml={class:"header"},bl={class:"tab-container"},vl={key:0},wl={key:0,class:"question-container"},yl={class:"question-content"},Cl={class:"options-container"},xl=["onClick"],Al={class:"option-letter"},Sl={class:"option-text"},Dl={class:"controls"},Tl=["disabled"],Pl={key:1,class:"result-container"},El={class:"score-circle"},Ml={class:"score-text"},Bl={key:0,class:"incorrect-questions"},Ol={key:1,class:"short-answer-container"},Il={class:"short-answer-question"},Rl={key:0},ql={key:1,class:"thinking-mode"},Fl={class:"controls"},Ll=["disabled"],Hl=["disabled"],$l=li({__name:"Exercise",setup(e){const t=Le(!1),n=Le(!1),s=()=>{n.value=!n.value},i=Le(0),r=ut(()=>xn[i.value]),o=()=>{fe.value=!0,i.value>0&&i.value--},l=()=>{fe.value=!0,i.value<xn.length-1&&i.value++},u=Le([{question:"",userAnswer:"",correctAnswer:""}]),p=F=>{const P=F.split(`
`),Q=[],de=/^([A-Z]) : (.+)$/;for(let ye=0;ye<P.length;ye++){const lt=P[ye].match(de);lt&&Q.push({letter:lt[1],text:lt[2]})}return Q},a=ut(()=>be.map(F=>({...F,options:p(F.question),isMultiple:F.question.includes("多选")}))),h=Le(0),C=Le(Array(be.length).fill("")),A=Le(!1),I=Le(0);ut(()=>(h.value+1)/be.length*100);const R=ut(()=>a.value[h.value]),Z=F=>C.value[h.value].includes(F),$=F=>{const P=C.value[h.value];R.value.isMultiple?P.includes(F)?C.value[h.value]=P.replace(F,""):C.value[h.value]=P+F:C.value[h.value]=F},K=()=>{h.value>0&&h.value--},k=()=>{h.value<be.length-1&&h.value++},E=()=>{let F=0;const P=[];for(let Q=0;Q<be.length;Q++){const de=[...C.value[Q]].sort().join(""),ye=[...be[Q].answer].sort().join("");de===ye?F++:P.push({question:be[Q].question,userAnswer:de||"未作答",correctAnswer:ye})}I.value=F,u.value=P,A.value=!0},J=()=>{const F=I.value/be.length*100;return F>=90?"太棒了！您已经掌握了这些知识点！":F>=70?"做得很好！继续努力！":F>=50?"不错的尝试！复习一下会更好！":"需要更多练习，加油！"},Ae=ut(()=>{const F=I.value/be.length*100;return F>=90?"excellent":F>=70?"good":F>=50?"average":"poor"}),me=()=>{h.value=0,C.value=Array(be.length).fill(""),A.value=!1,I.value=0},fe=Le(!0),ot=()=>{fe.value=!fe.value};return(F,P)=>(G(),ee("div",{class:ke(["container",{"dark-mode":n.value}])},[T("div",ml,[n.value?(G(),Gt(dl,{key:1,class:"dark-mode-btn",onClick:s})):(G(),Gt(cl,{key:0,class:"dark-mode-btn",onClick:s})),P[2]||(P[2]=T("h1",null,"软件质量管理",-1)),T("div",bl,[T("button",{class:ke(["tab-btn",{active:!t.value}]),onClick:P[0]||(P[0]=Q=>t.value=!1)}," 选择题 ",2),T("button",{class:ke(["tab-btn",{active:t.value}]),onClick:P[1]||(P[1]=Q=>t.value=!0)}," 简答题 ",2)])]),t.value?(G(),ee("div",Ol,[P[15]||(P[15]=T("div",{class:"question-header"},[T("div",{class:"link-container"},[T("a",{href:"https/ziqingchuan.github.io/SSD/",target:"_blank",class:"link-btn"}," 软件系统设计复习网站 ")])],-1)),T("div",Il,ve(r.value.question),1),T("div",{class:"short-answer-answer",onClick:ot},[fe.value?(G(),ee("div",ql,[Re(_l),P[12]||(P[12]=T("span",null,"答案是什么来着？",-1))])):(G(),ee("p",Rl,ve(r.value.answer),1))]),T("div",Fl,[T("button",{class:"btn btn-prev",onClick:o,disabled:i.value===0},P[13]||(P[13]=[T("i",{class:"fas fa-arrow-left"},null,-1),He(" 上一题 ")]),8,Ll),T("button",{class:"btn btn-next",onClick:l,disabled:i.value===Nt(xn).length-1},P[14]||(P[14]=[He(" 下一题 "),T("i",{class:"fas fa-arrow-right"},null,-1)]),8,Hl)])])):(G(),ee("div",vl,[A.value?(G(),ee("div",Pl,[P[11]||(P[11]=T("h2",{class:"result-title"},"测试完成!",-1)),T("div",El,[T("div",Ml,ve(I.value)+" / "+ve(Nt(be).length),1)]),T("div",{class:ke(["feedback",Ae.value])},ve(J()),3),u.value.length?(G(),ee("div",Bl,[P[9]||(P[9]=T("h3",null,"您答错的题目：",-1)),(G(!0),ee(Ce,null,ls(u.value,(Q,de)=>(G(),ee("div",{key:de,class:"incorrect-question"},[T("p",null,ve(Q.question),1),T("p",null,[P[7]||(P[7]=T("strong",null,"您的答案：",-1)),He(" "+ve(Q.userAnswer),1)]),T("p",null,[P[8]||(P[8]=T("strong",null,"正确答案：",-1)),He(" "+ve(Q.correctAnswer),1)])]))),128))])):xo("",!0),T("button",{class:"restart-btn",onClick:me},P[10]||(P[10]=[T("i",{class:"fas fa-redo"},null,-1),He(" 重新测试 ")]))])):(G(),ee("div",wl,[P[6]||(P[6]=T("div",{class:"question-header"},[T("div",{class:"link-container"},[T("a",{href:"https://ziqingchuan.github.io/SSD/",target:"_blank",class:"link-btn"}," 软件系统设计复习网站 ")])],-1)),T("div",yl,ve(R.value.question.split(`

`)[0]),1),T("div",Cl,[(G(!0),ee(Ce,null,ls(R.value.options,(Q,de)=>(G(),ee("div",{key:de,class:ke(["option",{selected:Z(Q.letter)}]),onClick:ye=>$(Q.letter)},[T("div",Al,ve(Q.letter),1),T("div",Sl,ve(Q.text),1)],10,xl))),128))]),T("div",Dl,[T("button",{class:"btn btn-prev",onClick:K,disabled:h.value===0},P[3]||(P[3]=[T("i",{class:"fas fa-arrow-left"},null,-1),He(" 上一题 ")]),8,Tl),h.value<Nt(be).length-1?(G(),ee("button",{key:0,class:"btn btn-next",onClick:k},P[4]||(P[4]=[He(" 下一题 "),T("i",{class:"fas fa-arrow-right"},null,-1)]))):(G(),ee("button",{key:1,class:"btn btn-finish",onClick:E},P[5]||(P[5]=[He(" 完成测试 "),T("i",{class:"fas fa-check"},null,-1)])))])]))]))],2))}}),Vl=fn($l,[["__scopeId","data-v-33d4efc9"]]),Nl=li({__name:"App",setup(e){return(t,n)=>(G(),Gt(Vl,{msg:"Vite + Vue"}))}});nl(Nl).mount("#app");
