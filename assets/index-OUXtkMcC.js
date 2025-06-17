(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Mn(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const U={},at=[],Ie=()=>{},Lr=()=>!1,Zt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Rn=e=>e.startsWith("onUpdate:"),re=Object.assign,Fn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Hr=Object.prototype.hasOwnProperty,H=(e,t)=>Hr.call(e,t),E=Array.isArray,dt=e=>en(e)==="[object Map]",Es=e=>en(e)==="[object Set]",q=e=>typeof e=="function",X=e=>typeof e=="string",Xe=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",qs=e=>(G(e)||q(e))&&q(e.then)&&q(e.catch),Is=Object.prototype.toString,en=e=>Is.call(e),$r=e=>en(e).slice(8,-1),Ms=e=>en(e)==="[object Object]",Ln=e=>X(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,yt=Mn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Nr=/-(\w)/g,Ge=tn(e=>e.replace(Nr,(t,n)=>n?n.toUpperCase():"")),jr=/\B([A-Z])/g,it=tn(e=>e.replace(jr,"-$1").toLowerCase()),Rs=tn(e=>e.charAt(0).toUpperCase()+e.slice(1)),an=tn(e=>e?`on${Rs(e)}`:""),ze=(e,t)=>!Object.is(e,t),dn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Fs=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Vr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ss;const nn=()=>ss||(ss=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hn(e){if(E(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=X(s)?kr(s):Hn(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(X(e)||G(e))return e}const Kr=/;(?![^(]*\))/g,Ur=/:([^]+)/,Wr=/\/\*[^]*?\*\//g;function kr(e){const t={};return e.replace(Wr,"").split(Kr).forEach(n=>{if(n){const s=n.split(Ur);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function ke(e){let t="";if(X(e))t=e;else if(E(e))for(let n=0;n<e.length;n++){const s=ke(e[n]);s&&(t+=s+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Qr="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zr=Mn(Qr);function Ls(e){return!!e||e===""}const Hs=e=>!!(e&&e.__v_isRef===!0),ve=e=>X(e)?e:e==null?"":E(e)||G(e)&&(e.toString===Is||!q(e.toString))?Hs(e)?ve(e.value):JSON.stringify(e,$s,2):String(e),$s=(e,t)=>Hs(t)?$s(e,t.value):dt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[hn(s,i)+" =>"]=r,n),{})}:Es(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>hn(n))}:Xe(t)?hn(t):G(t)&&!E(t)&&!Ms(t)?String(t):t,hn=(e,t="")=>{var n;return Xe(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ae;class Gr{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ae,!t&&ae&&(this.index=(ae.scopes||(ae.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ae;try{return ae=this,t()}finally{ae=n}}}on(){++this._on===1&&(this.prevScope=ae,ae=this)}off(){this._on>0&&--this._on===0&&(ae=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Yr(){return ae}let K;const pn=new WeakSet;class Ns{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ae&&ae.active&&ae.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pn.has(this)&&(pn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vs(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,rs(this),Ks(this);const t=K,n=ye;K=this,ye=!0;try{return this.fn()}finally{Us(this),K=t,ye=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)jn(t);this.deps=this.depsTail=void 0,rs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xn(this)&&this.run()}get dirty(){return xn(this)}}let js=0,xt,Dt;function Vs(e,t=!1){if(e.flags|=8,t){e.next=Dt,Dt=e;return}e.next=xt,xt=e}function $n(){js++}function Nn(){if(--js>0)return;if(Dt){let t=Dt;for(Dt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;xt;){let t=xt;for(xt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Ks(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Us(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),jn(s),Jr(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function xn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ws(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ws(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Pt)||(e.globalVersion=Pt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!xn(e))))return;e.flags|=2;const t=e.dep,n=K,s=ye;K=e,ye=!0;try{Ks(e);const r=e.fn(e._value);(t.version===0||ze(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{K=n,ye=s,Us(e),e.flags&=-3}}function jn(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)jn(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Jr(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ye=!0;const ks=[];function je(){ks.push(ye),ye=!1}function Ve(){const e=ks.pop();ye=e===void 0?!0:e}function rs(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=K;K=void 0;try{t()}finally{K=n}}}let Pt=0;class Xr{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!K||!ye||K===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==K)n=this.activeLink=new Xr(K,this),K.deps?(n.prevDep=K.depsTail,K.depsTail.nextDep=n,K.depsTail=n):K.deps=K.depsTail=n,Qs(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=K.depsTail,n.nextDep=void 0,K.depsTail.nextDep=n,K.depsTail=n,K.deps===n&&(K.deps=s)}return n}trigger(t){this.version++,Pt++,this.notify(t)}notify(t){$n();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Nn()}}}function Qs(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Qs(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Dn=new WeakMap,rt=Symbol(""),Sn=Symbol(""),Ot=Symbol("");function ne(e,t,n){if(ye&&K){let s=Dn.get(e);s||Dn.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new Vn),r.map=s,r.key=n),r.track()}}function Ne(e,t,n,s,r,i){const o=Dn.get(e);if(!o){Pt++;return}const l=u=>{u&&u.trigger()};if($n(),t==="clear")o.forEach(l);else{const u=E(e),p=u&&Ln(n);if(u&&n==="length"){const a=Number(s);o.forEach((h,A)=>{(A==="length"||A===Ot||!Xe(A)&&A>=a)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),p&&l(o.get(Ot)),t){case"add":u?p&&l(o.get("length")):(l(o.get(rt)),dt(e)&&l(o.get(Sn)));break;case"delete":u||(l(o.get(rt)),dt(e)&&l(o.get(Sn)));break;case"set":dt(e)&&l(o.get(rt));break}}Nn()}function ct(e){const t=L(e);return t===e?t:(ne(t,"iterate",Ot),Ce(e)?t:t.map(te))}function sn(e){return ne(e=L(e),"iterate",Ot),e}const Zr={__proto__:null,[Symbol.iterator](){return gn(this,Symbol.iterator,te)},concat(...e){return ct(this).concat(...e.map(t=>E(t)?ct(t):t))},entries(){return gn(this,"entries",e=>(e[1]=te(e[1]),e))},every(e,t){return Fe(this,"every",e,t,void 0,arguments)},filter(e,t){return Fe(this,"filter",e,t,n=>n.map(te),arguments)},find(e,t){return Fe(this,"find",e,t,te,arguments)},findIndex(e,t){return Fe(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Fe(this,"findLast",e,t,te,arguments)},findLastIndex(e,t){return Fe(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Fe(this,"forEach",e,t,void 0,arguments)},includes(...e){return _n(this,"includes",e)},indexOf(...e){return _n(this,"indexOf",e)},join(e){return ct(this).join(e)},lastIndexOf(...e){return _n(this,"lastIndexOf",e)},map(e,t){return Fe(this,"map",e,t,void 0,arguments)},pop(){return Ct(this,"pop")},push(...e){return Ct(this,"push",e)},reduce(e,...t){return is(this,"reduce",e,t)},reduceRight(e,...t){return is(this,"reduceRight",e,t)},shift(){return Ct(this,"shift")},some(e,t){return Fe(this,"some",e,t,void 0,arguments)},splice(...e){return Ct(this,"splice",e)},toReversed(){return ct(this).toReversed()},toSorted(e){return ct(this).toSorted(e)},toSpliced(...e){return ct(this).toSpliced(...e)},unshift(...e){return Ct(this,"unshift",e)},values(){return gn(this,"values",te)}};function gn(e,t,n){const s=sn(e),r=s[t]();return s!==e&&!Ce(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const ei=Array.prototype;function Fe(e,t,n,s,r,i){const o=sn(e),l=o!==e&&!Ce(e),u=o[t];if(u!==ei[t]){const h=u.apply(e,i);return l?te(h):h}let p=n;o!==e&&(l?p=function(h,A){return n.call(this,te(h),A,e)}:n.length>2&&(p=function(h,A){return n.call(this,h,A,e)}));const a=u.call(o,p,s);return l&&r?r(a):a}function is(e,t,n,s){const r=sn(e);let i=n;return r!==e&&(Ce(e)?n.length>3&&(i=function(o,l,u){return n.call(this,o,l,u,e)}):i=function(o,l,u){return n.call(this,o,te(l),u,e)}),r[t](i,...s)}function _n(e,t,n){const s=L(e);ne(s,"iterate",Ot);const r=s[t](...n);return(r===-1||r===!1)&&kn(n[0])?(n[0]=L(n[0]),s[t](...n)):r}function Ct(e,t,n=[]){je(),$n();const s=L(e)[t].apply(e,n);return Nn(),Ve(),s}const ti=Mn("__proto__,__v_isRef,__isVue"),zs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Xe));function ni(e){Xe(e)||(e=String(e));const t=L(this);return ne(t,"has",e),t.hasOwnProperty(e)}class Gs{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?di:Zs:i?Xs:Js).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=E(t);if(!r){let u;if(o&&(u=Zr[n]))return u;if(n==="hasOwnProperty")return ni}const l=Reflect.get(t,n,se(t)?t:s);return(Xe(n)?zs.has(n):ti(n))||(r||ne(t,"get",n),i)?l:se(l)?o&&Ln(n)?l:l.value:G(l)?r?er(l):Un(l):l}}class Ys extends Gs{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];if(!this._isShallow){const u=Ye(i);if(!Ce(s)&&!Ye(s)&&(i=L(i),s=L(s)),!E(t)&&se(i)&&!se(s))return u?!1:(i.value=s,!0)}const o=E(t)&&Ln(n)?Number(n)<t.length:H(t,n),l=Reflect.set(t,n,s,se(t)?t:r);return t===L(r)&&(o?ze(s,i)&&Ne(t,"set",n,s):Ne(t,"add",n,s)),l}deleteProperty(t,n){const s=H(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&Ne(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!Xe(n)||!zs.has(n))&&ne(t,"has",n),s}ownKeys(t){return ne(t,"iterate",E(t)?"length":rt),Reflect.ownKeys(t)}}class si extends Gs{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const ri=new Ys,ii=new si,oi=new Ys(!0);const Bn=e=>e,Ht=e=>Reflect.getPrototypeOf(e);function li(e,t,n){return function(...s){const r=this.__v_raw,i=L(r),o=dt(i),l=e==="entries"||e===Symbol.iterator&&o,u=e==="keys"&&o,p=r[e](...s),a=n?Bn:t?Wt:te;return!t&&ne(i,"iterate",u?Sn:rt),{next(){const{value:h,done:A}=p.next();return A?{value:h,done:A}:{value:l?[a(h[0]),a(h[1])]:a(h),done:A}},[Symbol.iterator](){return this}}}}function $t(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ci(e,t){const n={get(r){const i=this.__v_raw,o=L(i),l=L(r);e||(ze(r,l)&&ne(o,"get",r),ne(o,"get",l));const{has:u}=Ht(o),p=t?Bn:e?Wt:te;if(u.call(o,r))return p(i.get(r));if(u.call(o,l))return p(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!e&&ne(L(r),"iterate",rt),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=L(i),l=L(r);return e||(ze(r,l)&&ne(o,"has",r),ne(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,u=L(l),p=t?Bn:e?Wt:te;return!e&&ne(u,"iterate",rt),l.forEach((a,h)=>r.call(i,p(a),p(h),o))}};return re(n,e?{add:$t("add"),set:$t("set"),delete:$t("delete"),clear:$t("clear")}:{add(r){!t&&!Ce(r)&&!Ye(r)&&(r=L(r));const i=L(this);return Ht(i).has.call(i,r)||(i.add(r),Ne(i,"add",r,r)),this},set(r,i){!t&&!Ce(i)&&!Ye(i)&&(i=L(i));const o=L(this),{has:l,get:u}=Ht(o);let p=l.call(o,r);p||(r=L(r),p=l.call(o,r));const a=u.call(o,r);return o.set(r,i),p?ze(i,a)&&Ne(o,"set",r,i):Ne(o,"add",r,i),this},delete(r){const i=L(this),{has:o,get:l}=Ht(i);let u=o.call(i,r);u||(r=L(r),u=o.call(i,r)),l&&l.call(i,r);const p=i.delete(r);return u&&Ne(i,"delete",r,void 0),p},clear(){const r=L(this),i=r.size!==0,o=r.clear();return i&&Ne(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=li(r,e,t)}),n}function Kn(e,t){const n=ci(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(H(n,r)&&r in s?n:s,r,i)}const fi={get:Kn(!1,!1)},ui={get:Kn(!1,!0)},ai={get:Kn(!0,!1)};const Js=new WeakMap,Xs=new WeakMap,Zs=new WeakMap,di=new WeakMap;function hi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pi(e){return e.__v_skip||!Object.isExtensible(e)?0:hi($r(e))}function Un(e){return Ye(e)?e:Wn(e,!1,ri,fi,Js)}function gi(e){return Wn(e,!1,oi,ui,Xs)}function er(e){return Wn(e,!0,ii,ai,Zs)}function Wn(e,t,n,s,r){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=pi(e);if(i===0)return e;const o=r.get(e);if(o)return o;const l=new Proxy(e,i===2?s:n);return r.set(e,l),l}function ht(e){return Ye(e)?ht(e.__v_raw):!!(e&&e.__v_isReactive)}function Ye(e){return!!(e&&e.__v_isReadonly)}function Ce(e){return!!(e&&e.__v_isShallow)}function kn(e){return e?!!e.__v_raw:!1}function L(e){const t=e&&e.__v_raw;return t?L(t):e}function _i(e){return!H(e,"__v_skip")&&Object.isExtensible(e)&&Fs(e,"__v_skip",!0),e}const te=e=>G(e)?Un(e):e,Wt=e=>G(e)?er(e):e;function se(e){return e?e.__v_isRef===!0:!1}function Le(e){return mi(e,!1)}function mi(e,t){return se(e)?e:new bi(e,t)}class bi{constructor(t,n){this.dep=new Vn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:L(t),this._value=n?t:te(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Ce(t)||Ye(t);t=s?t:L(t),ze(t,n)&&(this._rawValue=t,this._value=s?t:te(t),this.dep.trigger())}}function jt(e){return se(e)?e.value:e}const vi={get:(e,t,n)=>t==="__v_raw"?e:jt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return se(r)&&!se(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function tr(e){return ht(e)?e:new Proxy(e,vi)}class Ci{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Vn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Pt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&K!==this)return Vs(this,!0),!0}get value(){const t=this.dep.track();return Ws(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function wi(e,t,n=!1){let s,r;return q(e)?s=e:(s=e.get,r=e.set),new Ci(s,r,n)}const Nt={},kt=new WeakMap;let st;function Ai(e,t=!1,n=st){if(n){let s=kt.get(n);s||kt.set(n,s=[]),s.push(e)}}function yi(e,t,n=U){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:u}=n,p=P=>r?P:Ce(P)||r===!1||r===0?Qe(P,1):Qe(P);let a,h,A,x,I=!1,M=!1;if(se(e)?(h=()=>e.value,I=Ce(e)):ht(e)?(h=()=>p(e),I=!0):E(e)?(M=!0,I=e.some(P=>ht(P)||Ce(P)),h=()=>e.map(P=>{if(se(P))return P.value;if(ht(P))return p(P);if(q(P))return u?u(P,2):P()})):q(e)?t?h=u?()=>u(e,2):e:h=()=>{if(A){je();try{A()}finally{Ve()}}const P=st;st=a;try{return u?u(e,3,[x]):e(x)}finally{st=P}}:h=Ie,t&&r){const P=h,Y=r===!0?1/0:r;h=()=>Qe(P(),Y)}const Z=Yr(),$=()=>{a.stop(),Z&&Z.active&&Fn(Z.effects,a)};if(i&&t){const P=t;t=(...Y)=>{P(...Y),$()}}let W=M?new Array(e.length).fill(Nt):Nt;const k=P=>{if(!(!(a.flags&1)||!a.dirty&&!P))if(t){const Y=a.run();if(r||I||(M?Y.some((xe,me)=>ze(xe,W[me])):ze(Y,W))){A&&A();const xe=st;st=a;try{const me=[Y,W===Nt?void 0:M&&W[0]===Nt?[]:W,x];W=Y,u?u(t,3,me):t(...me)}finally{st=xe}}}else a.run()};return l&&l(k),a=new Ns(h),a.scheduler=o?()=>o(k,!1):k,x=P=>Ai(P,!1,a),A=a.onStop=()=>{const P=kt.get(a);if(P){if(u)u(P,4);else for(const Y of P)Y();kt.delete(a)}},t?s?k(!0):W=a.run():o?o(k.bind(null,!0),!0):a.run(),$.pause=a.pause.bind(a),$.resume=a.resume.bind(a),$.stop=$,$}function Qe(e,t=1/0,n){if(t<=0||!G(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,se(e))Qe(e.value,t,n);else if(E(e))for(let s=0;s<e.length;s++)Qe(e[s],t,n);else if(Es(e)||dt(e))e.forEach(s=>{Qe(s,t,n)});else if(Ms(e)){for(const s in e)Qe(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Qe(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mt(e,t,n,s){try{return s?e(...s):e()}catch(r){rn(r,t,n)}}function Re(e,t,n,s){if(q(e)){const r=Mt(e,t,n,s);return r&&qs(r)&&r.catch(i=>{rn(i,t,n)}),r}if(E(e)){const r=[];for(let i=0;i<e.length;i++)r.push(Re(e[i],t,n,s));return r}}function rn(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||U;if(t){let l=t.parent;const u=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const a=l.ec;if(a){for(let h=0;h<a.length;h++)if(a[h](e,u,p)===!1)return}l=l.parent}if(i){je(),Mt(i,null,10,[e,u,p]),Ve();return}}xi(e,n,r,s,o)}function xi(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const le=[];let Oe=-1;const pt=[];let Ue=null,ft=0;const nr=Promise.resolve();let Qt=null;function Di(e){const t=Qt||nr;return e?t.then(this?e.bind(this):e):t}function Si(e){let t=Oe+1,n=le.length;for(;t<n;){const s=t+n>>>1,r=le[s],i=Et(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function Qn(e){if(!(e.flags&1)){const t=Et(e),n=le[le.length-1];!n||!(e.flags&2)&&t>=Et(n)?le.push(e):le.splice(Si(t),0,e),e.flags|=1,sr()}}function sr(){Qt||(Qt=nr.then(ir))}function Bi(e){E(e)?pt.push(...e):Ue&&e.id===-1?Ue.splice(ft+1,0,e):e.flags&1||(pt.push(e),e.flags|=1),sr()}function os(e,t,n=Oe+1){for(;n<le.length;n++){const s=le[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;le.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function rr(e){if(pt.length){const t=[...new Set(pt)].sort((n,s)=>Et(n)-Et(s));if(pt.length=0,Ue){Ue.push(...t);return}for(Ue=t,ft=0;ft<Ue.length;ft++){const n=Ue[ft];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ue=null,ft=0}}const Et=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ir(e){try{for(Oe=0;Oe<le.length;Oe++){const t=le[Oe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Mt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Oe<le.length;Oe++){const t=le[Oe];t&&(t.flags&=-2)}Oe=-1,le.length=0,rr(),Qt=null,(le.length||pt.length)&&ir()}}let qe=null,or=null;function zt(e){const t=qe;return qe=e,or=e&&e.type.__scopeId||null,t}function Ti(e,t=qe,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&_s(-1);const i=zt(t);let o;try{o=e(...r)}finally{zt(i),s._d&&_s(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function tt(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let u=l.dir[s];u&&(je(),Re(u,n,8,[e.el,l,e,t]),Ve())}}const Pi=Symbol("_vte"),Oi=e=>e.__isTeleport;function zn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,zn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function lr(e,t){return q(e)?re({name:e.name},t,{setup:e}):e}function cr(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Gt(e,t,n,s,r=!1){if(E(e)){e.forEach((I,M)=>Gt(I,t&&(E(t)?t[M]:t),n,s,r));return}if(St(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Gt(e,t,n,s.component.subTree);return}const i=s.shapeFlag&4?Xn(s.component):s.el,o=r?null:i,{i:l,r:u}=e,p=t&&t.r,a=l.refs===U?l.refs={}:l.refs,h=l.setupState,A=L(h),x=h===U?()=>!1:I=>H(A,I);if(p!=null&&p!==u&&(X(p)?(a[p]=null,x(p)&&(h[p]=null)):se(p)&&(p.value=null)),q(u))Mt(u,l,12,[o,a]);else{const I=X(u),M=se(u);if(I||M){const Z=()=>{if(e.f){const $=I?x(u)?h[u]:a[u]:u.value;r?E($)&&Fn($,i):E($)?$.includes(i)||$.push(i):I?(a[u]=[i],x(u)&&(h[u]=a[u])):(u.value=[i],e.k&&(a[e.k]=u.value))}else I?(a[u]=o,x(u)&&(h[u]=o)):M&&(u.value=o,e.k&&(a[e.k]=o))};o?(Z.id=-1,ge(Z,n)):Z()}}}nn().requestIdleCallback;nn().cancelIdleCallback;const St=e=>!!e.type.__asyncLoader,fr=e=>e.type.__isKeepAlive;function Ei(e,t){ur(e,"a",t)}function qi(e,t){ur(e,"da",t)}function ur(e,t,n=ce){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(on(t,s,n),n){let r=n.parent;for(;r&&r.parent;)fr(r.parent.vnode)&&Ii(s,t,n,r),r=r.parent}}function Ii(e,t,n,s){const r=on(t,e,s,!0);ar(()=>{Fn(s[t],r)},n)}function on(e,t,n=ce,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{je();const l=Rt(n),u=Re(t,n,e,o);return l(),Ve(),u});return s?r.unshift(i):r.push(i),i}}const Ke=e=>(t,n=ce)=>{(!It||e==="sp")&&on(e,(...s)=>t(...s),n)},Mi=Ke("bm"),Ri=Ke("m"),Fi=Ke("bu"),Li=Ke("u"),Hi=Ke("bum"),ar=Ke("um"),$i=Ke("sp"),Ni=Ke("rtg"),ji=Ke("rtc");function Vi(e,t=ce){on("ec",e,t)}const Ki=Symbol.for("v-ndc");function ls(e,t,n,s){let r;const i=n,o=E(e);if(o||X(e)){const l=o&&ht(e);let u=!1,p=!1;l&&(u=!Ce(e),p=Ye(e),e=sn(e)),r=new Array(e.length);for(let a=0,h=e.length;a<h;a++)r[a]=t(u?p?Wt(te(e[a])):te(e[a]):e[a],a,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=t(l+1,l,void 0,i)}else if(G(e))if(e[Symbol.iterator])r=Array.from(e,(l,u)=>t(l,u,void 0,i));else{const l=Object.keys(e);r=new Array(l.length);for(let u=0,p=l.length;u<p;u++){const a=l[u];r[u]=t(e[a],a,u,i)}}else r=[];return r}const Tn=e=>e?qr(e)?Xn(e):Tn(e.parent):null,Bt=re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Tn(e.parent),$root:e=>Tn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>hr(e),$forceUpdate:e=>e.f||(e.f=()=>{Qn(e.update)}),$nextTick:e=>e.n||(e.n=Di.bind(e.proxy)),$watch:e=>ao.bind(e)}),mn=(e,t)=>e!==U&&!e.__isScriptSetup&&H(e,t),Ui={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:u}=e;let p;if(t[0]!=="$"){const x=o[t];if(x!==void 0)switch(x){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(mn(s,t))return o[t]=1,s[t];if(r!==U&&H(r,t))return o[t]=2,r[t];if((p=e.propsOptions[0])&&H(p,t))return o[t]=3,i[t];if(n!==U&&H(n,t))return o[t]=4,n[t];Pn&&(o[t]=0)}}const a=Bt[t];let h,A;if(a)return t==="$attrs"&&ne(e.attrs,"get",""),a(e);if((h=l.__cssModules)&&(h=h[t]))return h;if(n!==U&&H(n,t))return o[t]=4,n[t];if(A=u.config.globalProperties,H(A,t))return A[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return mn(r,t)?(r[t]=n,!0):s!==U&&H(s,t)?(s[t]=n,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let l;return!!n[o]||e!==U&&H(e,o)||mn(t,o)||(l=i[0])&&H(l,o)||H(s,o)||H(Bt,o)||H(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:H(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function cs(e){return E(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Pn=!0;function Wi(e){const t=hr(e),n=e.proxy,s=e.ctx;Pn=!1,t.beforeCreate&&fs(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:l,provide:u,inject:p,created:a,beforeMount:h,mounted:A,beforeUpdate:x,updated:I,activated:M,deactivated:Z,beforeDestroy:$,beforeUnmount:W,destroyed:k,unmounted:P,render:Y,renderTracked:xe,renderTriggered:me,errorCaptured:fe,serverPrefetch:ot,expose:F,inheritAttrs:T,components:Q,directives:de,filters:we}=t;if(p&&ki(p,s,null),o)for(const z in o){const j=o[z];q(j)&&(s[z]=j.bind(n))}if(r){const z=r.call(n,n);G(z)&&(e.data=Un(z))}if(Pn=!0,i)for(const z in i){const j=i[z],Ze=q(j)?j.bind(n,n):q(j.get)?j.get.bind(n,n):Ie,Ft=!q(j)&&q(j.set)?j.set.bind(n):Ie,et=ut({get:Ze,set:Ft});Object.defineProperty(s,z,{enumerable:!0,configurable:!0,get:()=>et.value,set:De=>et.value=De})}if(l)for(const z in l)dr(l[z],s,n,z);if(u){const z=q(u)?u.call(n):u;Reflect.ownKeys(z).forEach(j=>{Xi(j,z[j])})}a&&fs(a,e,"c");function ie(z,j){E(j)?j.forEach(Ze=>z(Ze.bind(n))):j&&z(j.bind(n))}if(ie(Mi,h),ie(Ri,A),ie(Fi,x),ie(Li,I),ie(Ei,M),ie(qi,Z),ie(Vi,fe),ie(ji,xe),ie(Ni,me),ie(Hi,W),ie(ar,P),ie($i,ot),E(F))if(F.length){const z=e.exposed||(e.exposed={});F.forEach(j=>{Object.defineProperty(z,j,{get:()=>n[j],set:Ze=>n[j]=Ze})})}else e.exposed||(e.exposed={});Y&&e.render===Ie&&(e.render=Y),T!=null&&(e.inheritAttrs=T),Q&&(e.components=Q),de&&(e.directives=de),ot&&cr(e)}function ki(e,t,n=Ie){E(e)&&(e=On(e));for(const s in e){const r=e[s];let i;G(r)?"default"in r?i=Vt(r.from||s,r.default,!0):i=Vt(r.from||s):i=Vt(r),se(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function fs(e,t,n){Re(E(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function dr(e,t,n,s){let r=s.includes(".")?Sr(n,s):()=>n[s];if(X(e)){const i=t[e];q(i)&&vn(r,i)}else if(q(e))vn(r,e.bind(n));else if(G(e))if(E(e))e.forEach(i=>dr(i,t,n,s));else{const i=q(e.handler)?e.handler.bind(n):t[e.handler];q(i)&&vn(r,i,e)}}function hr(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let u;return l?u=l:!r.length&&!n&&!s?u=t:(u={},r.length&&r.forEach(p=>Yt(u,p,o,!0)),Yt(u,t,o)),G(t)&&i.set(t,u),u}function Yt(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&Yt(e,i,n,!0),r&&r.forEach(o=>Yt(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const l=Qi[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const Qi={data:us,props:as,emits:as,methods:At,computed:At,beforeCreate:oe,created:oe,beforeMount:oe,mounted:oe,beforeUpdate:oe,updated:oe,beforeDestroy:oe,beforeUnmount:oe,destroyed:oe,unmounted:oe,activated:oe,deactivated:oe,errorCaptured:oe,serverPrefetch:oe,components:At,directives:At,watch:Gi,provide:us,inject:zi};function us(e,t){return t?e?function(){return re(q(e)?e.call(this,this):e,q(t)?t.call(this,this):t)}:t:e}function zi(e,t){return At(On(e),On(t))}function On(e){if(E(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function oe(e,t){return e?[...new Set([].concat(e,t))]:t}function At(e,t){return e?re(Object.create(null),e,t):t}function as(e,t){return e?E(e)&&E(t)?[...new Set([...e,...t])]:re(Object.create(null),cs(e),cs(t??{})):t}function Gi(e,t){if(!e)return t;if(!t)return e;const n=re(Object.create(null),e);for(const s in t)n[s]=oe(e[s],t[s]);return n}function pr(){return{app:null,config:{isNativeTag:Lr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yi=0;function Ji(e,t){return function(s,r=null){q(s)||(s=re({},s)),r!=null&&!G(r)&&(r=null);const i=pr(),o=new WeakSet,l=[];let u=!1;const p=i.app={_uid:Yi++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Io,get config(){return i.config},set config(a){},use(a,...h){return o.has(a)||(a&&q(a.install)?(o.add(a),a.install(p,...h)):q(a)&&(o.add(a),a(p,...h))),p},mixin(a){return i.mixins.includes(a)||i.mixins.push(a),p},component(a,h){return h?(i.components[a]=h,p):i.components[a]},directive(a,h){return h?(i.directives[a]=h,p):i.directives[a]},mount(a,h,A){if(!u){const x=p._ceVNode||Me(s,r);return x.appContext=i,A===!0?A="svg":A===!1&&(A=void 0),e(x,a,A),u=!0,p._container=a,a.__vue_app__=p,Xn(x.component)}},onUnmount(a){l.push(a)},unmount(){u&&(Re(l,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(a,h){return i.provides[a]=h,p},runWithContext(a){const h=gt;gt=p;try{return a()}finally{gt=h}}};return p}}let gt=null;function Xi(e,t){if(ce){let n=ce.provides;const s=ce.parent&&ce.parent.provides;s===n&&(n=ce.provides=Object.create(s)),n[e]=t}}function Vt(e,t,n=!1){const s=ce||qe;if(s||gt){let r=gt?gt._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&q(t)?t.call(s&&s.proxy):t}}const gr={},_r=()=>Object.create(gr),mr=e=>Object.getPrototypeOf(e)===gr;function Zi(e,t,n,s=!1){const r={},i=_r();e.propsDefaults=Object.create(null),br(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:gi(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function eo(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,l=L(r),[u]=e.propsOptions;let p=!1;if((s||o>0)&&!(o&16)){if(o&8){const a=e.vnode.dynamicProps;for(let h=0;h<a.length;h++){let A=a[h];if(ln(e.emitsOptions,A))continue;const x=t[A];if(u)if(H(i,A))x!==i[A]&&(i[A]=x,p=!0);else{const I=Ge(A);r[I]=En(u,l,I,x,e,!1)}else x!==i[A]&&(i[A]=x,p=!0)}}}else{br(e,t,r,i)&&(p=!0);let a;for(const h in l)(!t||!H(t,h)&&((a=it(h))===h||!H(t,a)))&&(u?n&&(n[h]!==void 0||n[a]!==void 0)&&(r[h]=En(u,l,h,void 0,e,!0)):delete r[h]);if(i!==l)for(const h in i)(!t||!H(t,h))&&(delete i[h],p=!0)}p&&Ne(e.attrs,"set","")}function br(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,l;if(t)for(let u in t){if(yt(u))continue;const p=t[u];let a;r&&H(r,a=Ge(u))?!i||!i.includes(a)?n[a]=p:(l||(l={}))[a]=p:ln(e.emitsOptions,u)||(!(u in s)||p!==s[u])&&(s[u]=p,o=!0)}if(i){const u=L(n),p=l||U;for(let a=0;a<i.length;a++){const h=i[a];n[h]=En(r,u,h,p[h],e,!H(p,h))}}return o}function En(e,t,n,s,r,i){const o=e[n];if(o!=null){const l=H(o,"default");if(l&&s===void 0){const u=o.default;if(o.type!==Function&&!o.skipFactory&&q(u)){const{propsDefaults:p}=r;if(n in p)s=p[n];else{const a=Rt(r);s=p[n]=u.call(null,t),a()}}else s=u;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===it(n))&&(s=!0))}return s}const to=new WeakMap;function vr(e,t,n=!1){const s=n?to:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},l=[];let u=!1;if(!q(e)){const a=h=>{u=!0;const[A,x]=vr(h,t,!0);re(o,A),x&&l.push(...x)};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}if(!i&&!u)return G(e)&&s.set(e,at),at;if(E(i))for(let a=0;a<i.length;a++){const h=Ge(i[a]);ds(h)&&(o[h]=U)}else if(i)for(const a in i){const h=Ge(a);if(ds(h)){const A=i[a],x=o[h]=E(A)||q(A)?{type:A}:re({},A),I=x.type;let M=!1,Z=!0;if(E(I))for(let $=0;$<I.length;++$){const W=I[$],k=q(W)&&W.name;if(k==="Boolean"){M=!0;break}else k==="String"&&(Z=!1)}else M=q(I)&&I.name==="Boolean";x[0]=M,x[1]=Z,(M||H(x,"default"))&&l.push(h)}}const p=[o,l];return G(e)&&s.set(e,p),p}function ds(e){return e[0]!=="$"&&!yt(e)}const Gn=e=>e[0]==="_"||e==="$stable",Yn=e=>E(e)?e.map(Ee):[Ee(e)],no=(e,t,n)=>{if(t._n)return t;const s=Ti((...r)=>Yn(t(...r)),n);return s._c=!1,s},Cr=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Gn(r))continue;const i=e[r];if(q(i))t[r]=no(r,i,s);else if(i!=null){const o=Yn(i);t[r]=()=>o}}},wr=(e,t)=>{const n=Yn(t);e.slots.default=()=>n},Ar=(e,t,n)=>{for(const s in t)(n||!Gn(s))&&(e[s]=t[s])},so=(e,t,n)=>{const s=e.slots=_r();if(e.vnode.shapeFlag&32){const r=t._;r?(Ar(s,t,n),n&&Fs(s,"_",r,!0)):Cr(t,s)}else t&&wr(e,t)},ro=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=U;if(s.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:Ar(r,t,n):(i=!t.$stable,Cr(t,r)),o=t}else t&&(wr(e,t),o={default:1});if(i)for(const l in r)!Gn(l)&&o[l]==null&&delete r[l]},ge=vo;function io(e){return oo(e)}function oo(e,t){const n=nn();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:u,setText:p,setElementText:a,parentNode:h,nextSibling:A,setScopeId:x=Ie,insertStaticContent:I}=e,M=(c,f,d,m=null,g=null,_=null,w=void 0,C=null,v=!!f.dynamicChildren)=>{if(c===f)return;c&&!wt(c,f)&&(m=Lt(c),De(c,g,_,!0),c=null),f.patchFlag===-2&&(v=!1,f.dynamicChildren=null);const{type:b,ref:S,shapeFlag:y}=f;switch(b){case cn:Z(c,f,d,m);break;case Je:$(c,f,d,m);break;case Cn:c==null&&W(f,d,m,w);break;case Ae:Q(c,f,d,m,g,_,w,C,v);break;default:y&1?Y(c,f,d,m,g,_,w,C,v):y&6?de(c,f,d,m,g,_,w,C,v):(y&64||y&128)&&b.process(c,f,d,m,g,_,w,C,v,bt)}S!=null&&g&&Gt(S,c&&c.ref,_,f||c,!f)},Z=(c,f,d,m)=>{if(c==null)s(f.el=l(f.children),d,m);else{const g=f.el=c.el;f.children!==c.children&&p(g,f.children)}},$=(c,f,d,m)=>{c==null?s(f.el=u(f.children||""),d,m):f.el=c.el},W=(c,f,d,m)=>{[c.el,c.anchor]=I(c.children,f,d,m,c.el,c.anchor)},k=({el:c,anchor:f},d,m)=>{let g;for(;c&&c!==f;)g=A(c),s(c,d,m),c=g;s(f,d,m)},P=({el:c,anchor:f})=>{let d;for(;c&&c!==f;)d=A(c),r(c),c=d;r(f)},Y=(c,f,d,m,g,_,w,C,v)=>{f.type==="svg"?w="svg":f.type==="math"&&(w="mathml"),c==null?xe(f,d,m,g,_,w,C,v):ot(c,f,g,_,w,C,v)},xe=(c,f,d,m,g,_,w,C)=>{let v,b;const{props:S,shapeFlag:y,transition:D,dirs:O}=c;if(v=c.el=o(c.type,_,S&&S.is,S),y&8?a(v,c.children):y&16&&fe(c.children,v,null,m,g,bn(c,_),w,C),O&&tt(c,null,m,"created"),me(v,c,c.scopeId,w,m),S){for(const V in S)V!=="value"&&!yt(V)&&i(v,V,null,S[V],_,m);"value"in S&&i(v,"value",null,S.value,_),(b=S.onVnodeBeforeMount)&&Pe(b,m,c)}O&&tt(c,null,m,"beforeMount");const R=lo(g,D);R&&D.beforeEnter(v),s(v,f,d),((b=S&&S.onVnodeMounted)||R||O)&&ge(()=>{b&&Pe(b,m,c),R&&D.enter(v),O&&tt(c,null,m,"mounted")},g)},me=(c,f,d,m,g)=>{if(d&&x(c,d),m)for(let _=0;_<m.length;_++)x(c,m[_]);if(g){let _=g.subTree;if(f===_||Tr(_.type)&&(_.ssContent===f||_.ssFallback===f)){const w=g.vnode;me(c,w,w.scopeId,w.slotScopeIds,g.parent)}}},fe=(c,f,d,m,g,_,w,C,v=0)=>{for(let b=v;b<c.length;b++){const S=c[b]=C?We(c[b]):Ee(c[b]);M(null,S,f,d,m,g,_,w,C)}},ot=(c,f,d,m,g,_,w)=>{const C=f.el=c.el;let{patchFlag:v,dynamicChildren:b,dirs:S}=f;v|=c.patchFlag&16;const y=c.props||U,D=f.props||U;let O;if(d&&nt(d,!1),(O=D.onVnodeBeforeUpdate)&&Pe(O,d,f,c),S&&tt(f,c,d,"beforeUpdate"),d&&nt(d,!0),(y.innerHTML&&D.innerHTML==null||y.textContent&&D.textContent==null)&&a(C,""),b?F(c.dynamicChildren,b,C,d,m,bn(f,g),_):w||j(c,f,C,null,d,m,bn(f,g),_,!1),v>0){if(v&16)T(C,y,D,d,g);else if(v&2&&y.class!==D.class&&i(C,"class",null,D.class,g),v&4&&i(C,"style",y.style,D.style,g),v&8){const R=f.dynamicProps;for(let V=0;V<R.length;V++){const N=R[V],he=y[N],ue=D[N];(ue!==he||N==="value")&&i(C,N,he,ue,g,d)}}v&1&&c.children!==f.children&&a(C,f.children)}else!w&&b==null&&T(C,y,D,d,g);((O=D.onVnodeUpdated)||S)&&ge(()=>{O&&Pe(O,d,f,c),S&&tt(f,c,d,"updated")},m)},F=(c,f,d,m,g,_,w)=>{for(let C=0;C<f.length;C++){const v=c[C],b=f[C],S=v.el&&(v.type===Ae||!wt(v,b)||v.shapeFlag&198)?h(v.el):d;M(v,b,S,null,m,g,_,w,!0)}},T=(c,f,d,m,g)=>{if(f!==d){if(f!==U)for(const _ in f)!yt(_)&&!(_ in d)&&i(c,_,f[_],null,g,m);for(const _ in d){if(yt(_))continue;const w=d[_],C=f[_];w!==C&&_!=="value"&&i(c,_,C,w,g,m)}"value"in d&&i(c,"value",f.value,d.value,g)}},Q=(c,f,d,m,g,_,w,C,v)=>{const b=f.el=c?c.el:l(""),S=f.anchor=c?c.anchor:l("");let{patchFlag:y,dynamicChildren:D,slotScopeIds:O}=f;O&&(C=C?C.concat(O):O),c==null?(s(b,d,m),s(S,d,m),fe(f.children||[],d,S,g,_,w,C,v)):y>0&&y&64&&D&&c.dynamicChildren?(F(c.dynamicChildren,D,d,g,_,w,C),(f.key!=null||g&&f===g.subTree)&&yr(c,f,!0)):j(c,f,d,S,g,_,w,C,v)},de=(c,f,d,m,g,_,w,C,v)=>{f.slotScopeIds=C,c==null?f.shapeFlag&512?g.ctx.activate(f,d,m,w,v):we(f,d,m,g,_,w,v):lt(c,f,v)},we=(c,f,d,m,g,_,w)=>{const C=c.component=Bo(c,m,g);if(fr(c)&&(C.ctx.renderer=bt),To(C,!1,w),C.asyncDep){if(g&&g.registerDep(C,ie,w),!c.el){const v=C.subTree=Me(Je);$(null,v,f,d)}}else ie(C,c,f,d,g,_,w)},lt=(c,f,d)=>{const m=f.component=c.component;if(mo(c,f,d))if(m.asyncDep&&!m.asyncResolved){z(m,f,d);return}else m.next=f,m.update();else f.el=c.el,m.vnode=f},ie=(c,f,d,m,g,_,w)=>{const C=()=>{if(c.isMounted){let{next:y,bu:D,u:O,parent:R,vnode:V}=c;{const Be=xr(c);if(Be){y&&(y.el=V.el,z(c,y,w)),Be.asyncDep.then(()=>{c.isUnmounted||C()});return}}let N=y,he;nt(c,!1),y?(y.el=V.el,z(c,y,w)):y=V,D&&dn(D),(he=y.props&&y.props.onVnodeBeforeUpdate)&&Pe(he,R,y,V),nt(c,!0);const ue=ps(c),Se=c.subTree;c.subTree=ue,M(Se,ue,h(Se.el),Lt(Se),c,g,_),y.el=ue.el,N===null&&bo(c,ue.el),O&&ge(O,g),(he=y.props&&y.props.onVnodeUpdated)&&ge(()=>Pe(he,R,y,V),g)}else{let y;const{el:D,props:O}=f,{bm:R,m:V,parent:N,root:he,type:ue}=c,Se=St(f);nt(c,!1),R&&dn(R),!Se&&(y=O&&O.onVnodeBeforeMount)&&Pe(y,N,f),nt(c,!0);{he.ce&&he.ce._injectChildStyle(ue);const Be=c.subTree=ps(c);M(null,Be,d,m,c,g,_),f.el=Be.el}if(V&&ge(V,g),!Se&&(y=O&&O.onVnodeMounted)){const Be=f;ge(()=>Pe(y,N,Be),g)}(f.shapeFlag&256||N&&St(N.vnode)&&N.vnode.shapeFlag&256)&&c.a&&ge(c.a,g),c.isMounted=!0,f=d=m=null}};c.scope.on();const v=c.effect=new Ns(C);c.scope.off();const b=c.update=v.run.bind(v),S=c.job=v.runIfDirty.bind(v);S.i=c,S.id=c.uid,v.scheduler=()=>Qn(S),nt(c,!0),b()},z=(c,f,d)=>{f.component=c;const m=c.vnode.props;c.vnode=f,c.next=null,eo(c,f.props,m,d),ro(c,f.children,d),je(),os(c),Ve()},j=(c,f,d,m,g,_,w,C,v=!1)=>{const b=c&&c.children,S=c?c.shapeFlag:0,y=f.children,{patchFlag:D,shapeFlag:O}=f;if(D>0){if(D&128){Ft(b,y,d,m,g,_,w,C,v);return}else if(D&256){Ze(b,y,d,m,g,_,w,C,v);return}}O&8?(S&16&&mt(b,g,_),y!==b&&a(d,y)):S&16?O&16?Ft(b,y,d,m,g,_,w,C,v):mt(b,g,_,!0):(S&8&&a(d,""),O&16&&fe(y,d,m,g,_,w,C,v))},Ze=(c,f,d,m,g,_,w,C,v)=>{c=c||at,f=f||at;const b=c.length,S=f.length,y=Math.min(b,S);let D;for(D=0;D<y;D++){const O=f[D]=v?We(f[D]):Ee(f[D]);M(c[D],O,d,null,g,_,w,C,v)}b>S?mt(c,g,_,!0,!1,y):fe(f,d,m,g,_,w,C,v,y)},Ft=(c,f,d,m,g,_,w,C,v)=>{let b=0;const S=f.length;let y=c.length-1,D=S-1;for(;b<=y&&b<=D;){const O=c[b],R=f[b]=v?We(f[b]):Ee(f[b]);if(wt(O,R))M(O,R,d,null,g,_,w,C,v);else break;b++}for(;b<=y&&b<=D;){const O=c[y],R=f[D]=v?We(f[D]):Ee(f[D]);if(wt(O,R))M(O,R,d,null,g,_,w,C,v);else break;y--,D--}if(b>y){if(b<=D){const O=D+1,R=O<S?f[O].el:m;for(;b<=D;)M(null,f[b]=v?We(f[b]):Ee(f[b]),d,R,g,_,w,C,v),b++}}else if(b>D)for(;b<=y;)De(c[b],g,_,!0),b++;else{const O=b,R=b,V=new Map;for(b=R;b<=D;b++){const pe=f[b]=v?We(f[b]):Ee(f[b]);pe.key!=null&&V.set(pe.key,b)}let N,he=0;const ue=D-R+1;let Se=!1,Be=0;const vt=new Array(ue);for(b=0;b<ue;b++)vt[b]=0;for(b=O;b<=y;b++){const pe=c[b];if(he>=ue){De(pe,g,_,!0);continue}let Te;if(pe.key!=null)Te=V.get(pe.key);else for(N=R;N<=D;N++)if(vt[N-R]===0&&wt(pe,f[N])){Te=N;break}Te===void 0?De(pe,g,_,!0):(vt[Te-R]=b+1,Te>=Be?Be=Te:Se=!0,M(pe,f[Te],d,null,g,_,w,C,v),he++)}const ts=Se?co(vt):at;for(N=ts.length-1,b=ue-1;b>=0;b--){const pe=R+b,Te=f[pe],ns=pe+1<S?f[pe+1].el:m;vt[b]===0?M(null,Te,d,ns,g,_,w,C,v):Se&&(N<0||b!==ts[N]?et(Te,d,ns,2):N--)}}},et=(c,f,d,m,g=null)=>{const{el:_,type:w,transition:C,children:v,shapeFlag:b}=c;if(b&6){et(c.component.subTree,f,d,m);return}if(b&128){c.suspense.move(f,d,m);return}if(b&64){w.move(c,f,d,bt);return}if(w===Ae){s(_,f,d);for(let y=0;y<v.length;y++)et(v[y],f,d,m);s(c.anchor,f,d);return}if(w===Cn){k(c,f,d);return}if(m!==2&&b&1&&C)if(m===0)C.beforeEnter(_),s(_,f,d),ge(()=>C.enter(_),g);else{const{leave:y,delayLeave:D,afterLeave:O}=C,R=()=>{c.ctx.isUnmounted?r(_):s(_,f,d)},V=()=>{y(_,()=>{R(),O&&O()})};D?D(_,R,V):V()}else s(_,f,d)},De=(c,f,d,m=!1,g=!1)=>{const{type:_,props:w,ref:C,children:v,dynamicChildren:b,shapeFlag:S,patchFlag:y,dirs:D,cacheIndex:O}=c;if(y===-2&&(g=!1),C!=null&&(je(),Gt(C,null,d,c,!0),Ve()),O!=null&&(f.renderCache[O]=void 0),S&256){f.ctx.deactivate(c);return}const R=S&1&&D,V=!St(c);let N;if(V&&(N=w&&w.onVnodeBeforeUnmount)&&Pe(N,f,c),S&6)Fr(c.component,d,m);else{if(S&128){c.suspense.unmount(d,m);return}R&&tt(c,null,f,"beforeUnmount"),S&64?c.type.remove(c,f,d,bt,m):b&&!b.hasOnce&&(_!==Ae||y>0&&y&64)?mt(b,f,d,!1,!0):(_===Ae&&y&384||!g&&S&16)&&mt(v,f,d),m&&Zn(c)}(V&&(N=w&&w.onVnodeUnmounted)||R)&&ge(()=>{N&&Pe(N,f,c),R&&tt(c,null,f,"unmounted")},d)},Zn=c=>{const{type:f,el:d,anchor:m,transition:g}=c;if(f===Ae){Rr(d,m);return}if(f===Cn){P(c);return}const _=()=>{r(d),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:w,delayLeave:C}=g,v=()=>w(d,_);C?C(c.el,_,v):v()}else _()},Rr=(c,f)=>{let d;for(;c!==f;)d=A(c),r(c),c=d;r(f)},Fr=(c,f,d)=>{const{bum:m,scope:g,job:_,subTree:w,um:C,m:v,a:b,parent:S,slots:{__:y}}=c;hs(v),hs(b),m&&dn(m),S&&E(y)&&y.forEach(D=>{S.renderCache[D]=void 0}),g.stop(),_&&(_.flags|=8,De(w,c,f,d)),C&&ge(C,f),ge(()=>{c.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},mt=(c,f,d,m=!1,g=!1,_=0)=>{for(let w=_;w<c.length;w++)De(c[w],f,d,m,g)},Lt=c=>{if(c.shapeFlag&6)return Lt(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const f=A(c.anchor||c.el),d=f&&f[Pi];return d?A(d):f};let un=!1;const es=(c,f,d)=>{c==null?f._vnode&&De(f._vnode,null,null,!0):M(f._vnode||null,c,f,null,null,null,d),f._vnode=c,un||(un=!0,os(),rr(),un=!1)},bt={p:M,um:De,m:et,r:Zn,mt:we,mc:fe,pc:j,pbc:F,n:Lt,o:e};return{render:es,hydrate:void 0,createApp:Ji(es)}}function bn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function nt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function lo(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function yr(e,t,n=!1){const s=e.children,r=t.children;if(E(s)&&E(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=We(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&yr(o,l)),l.type===cn&&(l.el=o.el),l.type===Je&&!l.el&&(l.el=o.el)}}function co(e){const t=e.slice(),n=[0];let s,r,i,o,l;const u=e.length;for(s=0;s<u;s++){const p=e[s];if(p!==0){if(r=n[n.length-1],e[r]<p){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,e[n[l]]<p?i=l+1:o=l;p<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function xr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:xr(t)}function hs(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const fo=Symbol.for("v-scx"),uo=()=>Vt(fo);function vn(e,t,n){return Dr(e,t,n)}function Dr(e,t,n=U){const{immediate:s,deep:r,flush:i,once:o}=n,l=re({},n),u=t&&s||!t&&i!=="post";let p;if(It){if(i==="sync"){const x=uo();p=x.__watcherHandles||(x.__watcherHandles=[])}else if(!u){const x=()=>{};return x.stop=Ie,x.resume=Ie,x.pause=Ie,x}}const a=ce;l.call=(x,I,M)=>Re(x,a,I,M);let h=!1;i==="post"?l.scheduler=x=>{ge(x,a&&a.suspense)}:i!=="sync"&&(h=!0,l.scheduler=(x,I)=>{I?x():Qn(x)}),l.augmentJob=x=>{t&&(x.flags|=4),h&&(x.flags|=2,a&&(x.id=a.uid,x.i=a))};const A=yi(e,t,l);return It&&(p?p.push(A):u&&A()),A}function ao(e,t,n){const s=this.proxy,r=X(e)?e.includes(".")?Sr(s,e):()=>s[e]:e.bind(s,s);let i;q(t)?i=t:(i=t.handler,n=t);const o=Rt(this),l=Dr(r,i.bind(s),n);return o(),l}function Sr(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const ho=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ge(t)}Modifiers`]||e[`${it(t)}Modifiers`];function po(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||U;let r=n;const i=t.startsWith("update:"),o=i&&ho(s,t.slice(7));o&&(o.trim&&(r=n.map(a=>X(a)?a.trim():a)),o.number&&(r=n.map(Vr)));let l,u=s[l=an(t)]||s[l=an(Ge(t))];!u&&i&&(u=s[l=an(it(t))]),u&&Re(u,e,6,r);const p=s[l+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Re(p,e,6,r)}}function Br(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},l=!1;if(!q(e)){const u=p=>{const a=Br(p,t,!0);a&&(l=!0,re(o,a))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!l?(G(e)&&s.set(e,null),null):(E(i)?i.forEach(u=>o[u]=null):re(o,i),G(e)&&s.set(e,o),o)}function ln(e,t){return!e||!Zt(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,it(t))||H(e,t))}function ps(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:u,render:p,renderCache:a,props:h,data:A,setupState:x,ctx:I,inheritAttrs:M}=e,Z=zt(e);let $,W;try{if(n.shapeFlag&4){const P=r||s,Y=P;$=Ee(p.call(Y,P,a,h,x,A,I)),W=l}else{const P=t;$=Ee(P.length>1?P(h,{attrs:l,slots:o,emit:u}):P(h,null)),W=t.props?l:go(l)}}catch(P){Tt.length=0,rn(P,e,1),$=Me(Je)}let k=$;if(W&&M!==!1){const P=Object.keys(W),{shapeFlag:Y}=k;P.length&&Y&7&&(i&&P.some(Rn)&&(W=_o(W,i)),k=_t(k,W,!1,!0))}return n.dirs&&(k=_t(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&zn(k,n.transition),$=k,zt(Z),$}const go=e=>{let t;for(const n in e)(n==="class"||n==="style"||Zt(n))&&((t||(t={}))[n]=e[n]);return t},_o=(e,t)=>{const n={};for(const s in e)(!Rn(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function mo(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:l,patchFlag:u}=t,p=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?gs(s,o,p):!!o;if(u&8){const a=t.dynamicProps;for(let h=0;h<a.length;h++){const A=a[h];if(o[A]!==s[A]&&!ln(p,A))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?gs(s,o,p):!0:!!o;return!1}function gs(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!ln(n,i))return!0}return!1}function bo({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Tr=e=>e.__isSuspense;function vo(e,t){t&&t.pendingBranch?E(e)?t.effects.push(...e):t.effects.push(e):Bi(e)}const Ae=Symbol.for("v-fgt"),cn=Symbol.for("v-txt"),Je=Symbol.for("v-cmt"),Cn=Symbol.for("v-stc"),Tt=[];let _e=null;function J(e=!1){Tt.push(_e=e?null:[])}function Co(){Tt.pop(),_e=Tt[Tt.length-1]||null}let qt=1;function _s(e,t=!1){qt+=e,e<0&&_e&&t&&(_e.hasOnce=!0)}function Pr(e){return e.dynamicChildren=qt>0?_e||at:null,Co(),qt>0&&_e&&_e.push(e),e}function ee(e,t,n,s,r,i){return Pr(B(e,t,n,s,r,i,!0))}function Jt(e,t,n,s,r){return Pr(Me(e,t,n,s,r,!0))}function Or(e){return e?e.__v_isVNode===!0:!1}function wt(e,t){return e.type===t.type&&e.key===t.key}const Er=({key:e})=>e??null,Kt=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?X(e)||se(e)||q(e)?{i:qe,r:e,k:t,f:!!n}:e:null);function B(e,t=null,n=null,s=0,r=null,i=e===Ae?0:1,o=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Er(t),ref:t&&Kt(t),scopeId:or,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:qe};return l?(Jn(u,n),i&128&&e.normalize(u)):n&&(u.shapeFlag|=X(n)?8:16),qt>0&&!o&&_e&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&_e.push(u),u}const Me=wo;function wo(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===Ki)&&(e=Je),Or(e)){const l=_t(e,t,!0);return n&&Jn(l,n),qt>0&&!i&&_e&&(l.shapeFlag&6?_e[_e.indexOf(e)]=l:_e.push(l)),l.patchFlag=-2,l}if(qo(e)&&(e=e.__vccOpts),t){t=Ao(t);let{class:l,style:u}=t;l&&!X(l)&&(t.class=ke(l)),G(u)&&(kn(u)&&!E(u)&&(u=re({},u)),t.style=Hn(u))}const o=X(e)?1:Tr(e)?128:Oi(e)?64:G(e)?4:q(e)?2:0;return B(e,t,n,s,r,o,i,!0)}function Ao(e){return e?kn(e)||mr(e)?re({},e):e:null}function _t(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:u}=e,p=t?xo(r||{},t):r,a={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Er(p),ref:t&&t.ref?n&&i?E(i)?i.concat(Kt(t)):[i,Kt(t)]:Kt(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ae?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&_t(e.ssContent),ssFallback:e.ssFallback&&_t(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&s&&zn(a,u.clone(a)),a}function He(e=" ",t=0){return Me(cn,null,e,t)}function yo(e="",t=!1){return t?(J(),Jt(Je,null,e)):Me(Je,null,e)}function Ee(e){return e==null||typeof e=="boolean"?Me(Je):E(e)?Me(Ae,null,e.slice()):Or(e)?We(e):Me(cn,null,String(e))}function We(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:_t(e)}function Jn(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(E(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Jn(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!mr(t)?t._ctx=qe:r===3&&qe&&(qe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else q(t)?(t={default:t,_ctx:qe},n=32):(t=String(t),s&64?(n=16,t=[He(t)]):n=8);e.children=t,e.shapeFlag|=n}function xo(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=ke([t.class,s.class]));else if(r==="style")t.style=Hn([t.style,s.style]);else if(Zt(r)){const i=t[r],o=s[r];o&&i!==o&&!(E(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function Pe(e,t,n,s=null){Re(e,t,7,[n,s])}const Do=pr();let So=0;function Bo(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Do,i={uid:So++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vr(s,r),emitsOptions:Br(s,r),emit:null,emitted:null,propsDefaults:U,inheritAttrs:s.inheritAttrs,ctx:U,data:U,props:U,attrs:U,slots:U,refs:U,setupState:U,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=po.bind(null,i),e.ce&&e.ce(i),i}let ce=null,Xt,qn;{const e=nn(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Xt=t("__VUE_INSTANCE_SETTERS__",n=>ce=n),qn=t("__VUE_SSR_SETTERS__",n=>It=n)}const Rt=e=>{const t=ce;return Xt(e),e.scope.on(),()=>{e.scope.off(),Xt(t)}},ms=()=>{ce&&ce.scope.off(),Xt(null)};function qr(e){return e.vnode.shapeFlag&4}let It=!1;function To(e,t=!1,n=!1){t&&qn(t);const{props:s,children:r}=e.vnode,i=qr(e);Zi(e,s,i,t),so(e,r,n||t);const o=i?Po(e,t):void 0;return t&&qn(!1),o}function Po(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ui);const{setup:s}=n;if(s){je();const r=e.setupContext=s.length>1?Eo(e):null,i=Rt(e),o=Mt(s,e,0,[e.props,r]),l=qs(o);if(Ve(),i(),(l||e.sp)&&!St(e)&&cr(e),l){if(o.then(ms,ms),t)return o.then(u=>{bs(e,u)}).catch(u=>{rn(u,e,0)});e.asyncDep=o}else bs(e,o)}else Ir(e)}function bs(e,t,n){q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=tr(t)),Ir(e)}function Ir(e,t,n){const s=e.type;e.render||(e.render=s.render||Ie);{const r=Rt(e);je();try{Wi(e)}finally{Ve(),r()}}}const Oo={get(e,t){return ne(e,"get",""),e[t]}};function Eo(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Oo),slots:e.slots,emit:e.emit,expose:t}}function Xn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(tr(_i(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Bt)return Bt[n](e)},has(t,n){return n in t||n in Bt}})):e.proxy}function qo(e){return q(e)&&"__vccOpts"in e}const ut=(e,t)=>wi(e,t,It),Io="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let In;const vs=typeof window<"u"&&window.trustedTypes;if(vs)try{In=vs.createPolicy("vue",{createHTML:e=>e})}catch{}const Mr=In?e=>In.createHTML(e):e=>e,Mo="http://www.w3.org/2000/svg",Ro="http://www.w3.org/1998/Math/MathML",$e=typeof document<"u"?document:null,Cs=$e&&$e.createElement("template"),Fo={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?$e.createElementNS(Mo,e):t==="mathml"?$e.createElementNS(Ro,e):n?$e.createElement(e,{is:n}):$e.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>$e.createTextNode(e),createComment:e=>$e.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>$e.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Cs.innerHTML=Mr(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=Cs.content;if(s==="svg"||s==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Lo=Symbol("_vtc");function Ho(e,t,n){const s=e[Lo];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ws=Symbol("_vod"),$o=Symbol("_vsh"),No=Symbol(""),jo=/(^|;)\s*display\s*:/;function Vo(e,t,n){const s=e.style,r=X(n);let i=!1;if(n&&!r){if(t)if(X(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ut(s,l,"")}else for(const o in t)n[o]==null&&Ut(s,o,"");for(const o in n)o==="display"&&(i=!0),Ut(s,o,n[o])}else if(r){if(t!==n){const o=s[No];o&&(n+=";"+o),s.cssText=n,i=jo.test(n)}}else t&&e.removeAttribute("style");ws in e&&(e[ws]=i?s.display:"",e[$o]&&(s.display="none"))}const As=/\s*!important$/;function Ut(e,t,n){if(E(n))n.forEach(s=>Ut(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Ko(e,t);As.test(n)?e.setProperty(it(s),n.replace(As,""),"important"):e[s]=n}}const ys=["Webkit","Moz","ms"],wn={};function Ko(e,t){const n=wn[t];if(n)return n;let s=Ge(t);if(s!=="filter"&&s in e)return wn[t]=s;s=Rs(s);for(let r=0;r<ys.length;r++){const i=ys[r]+s;if(i in e)return wn[t]=i}return t}const xs="http://www.w3.org/1999/xlink";function Ds(e,t,n,s,r,i=zr(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(xs,t.slice(6,t.length)):e.setAttributeNS(xs,t,n):n==null||i&&!Ls(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Xe(n)?String(n):n)}function Ss(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Mr(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,u=n==null?e.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ls(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function Uo(e,t,n,s){e.addEventListener(t,n,s)}function Wo(e,t,n,s){e.removeEventListener(t,n,s)}const Bs=Symbol("_vei");function ko(e,t,n,s,r=null){const i=e[Bs]||(e[Bs]={}),o=i[t];if(s&&o)o.value=s;else{const[l,u]=Qo(t);if(s){const p=i[t]=Yo(s,r);Uo(e,l,p,u)}else o&&(Wo(e,l,o,u),i[t]=void 0)}}const Ts=/(?:Once|Passive|Capture)$/;function Qo(e){let t;if(Ts.test(e)){t={};let s;for(;s=e.match(Ts);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):it(e.slice(2)),t]}let An=0;const zo=Promise.resolve(),Go=()=>An||(zo.then(()=>An=0),An=Date.now());function Yo(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Re(Jo(s,n.value),t,5,[s])};return n.value=e,n.attached=Go(),n}function Jo(e,t){if(E(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Ps=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Xo=(e,t,n,s,r,i)=>{const o=r==="svg";t==="class"?Ho(e,s,o):t==="style"?Vo(e,n,s):Zt(t)?Rn(t)||ko(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Zo(e,t,s,o))?(Ss(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ds(e,t,s,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!X(s))?Ss(e,Ge(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Ds(e,t,s,o))};function Zo(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ps(t)&&q(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ps(t)&&X(n)?!1:t in e}const el=re({patchProp:Xo},Fo);let Os;function tl(){return Os||(Os=io(el))}const nl=(...e)=>{const t=tl().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=rl(s);if(!r)return;const i=t._component;!q(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,sl(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function sl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function rl(e){return X(e)?document.querySelector(e):e}const be=[{question:`关于Brooks提及的软件开发本质难题，下列说法中不准确的是（ 多选 ）

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
`,answer:"AC"},{question:`“Measure twice, cut once” 描述的是下述哪个软件开发场景

A : 软件设计
B : 代码评审
C : 需求开发
D : V&V
`,answer:"B"},{question:` 整体来看，我们可以把软件的发展分为三大阶段，以下不属于三大主要阶段的是

A : 软硬件一体化； (1950s - 1970s)
B : 网络化和服务化； (1990s -)
C : 云计算化和云原生
D : 软件成为独立产品；(1970s - 1990s )
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
`,answer:"A"},{question:`对比TSP和SCRUM，下列说法不恰当的是

A : 都是过程框架，需要填补具体实践之后才是一个可以工作的过程
B : 一种是计划驱动方法，另外一种是敏捷方法
C : SCRUM适合迭代式场景，TSP适合瀑布场景
D : 两种方法都需要进行度量数据收集、分析，从而支持管理决策
`,answer:"C"},{question:`以下特征适用麦克勒格Y理论（McGregors Theory Y）激励的场合是

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
`,answer:"B"},{question:`关于DRL，下列说法中不正确的是（ 多选 ）

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
`,answer:"CD"},{question:`以下哪项不属于Scrum的三大支柱？

A : 透明
B : 检查
C : 适应
D : 效率
`,answer:"D"},{question:`“完成的定义（DoD）”的主要作用是？

A : 限制开发人员自由
B : 确保交付质量基准
C : 缩短会议时间
D : 简化文档工作
`,answer:"B"},{question:`猪与鸡的比喻主要说明？

A : 团队饮食管理
B : 利益相关者参与程度
C : 敏捷估算方法
D : 动物角色扮演
`,answer:"B"},{question:`以下哪个事件不属于Scrum五大事件？

A : 迭代计划会议
B : 需求评审会
C : 每日站会
D : 迭代回顾会议
`,answer:"B"},{question:`跨职能团队的关键特征是？

A : 成员都是全栈工程师
B : 具备端到端交付能力
C : 定期轮换岗位
D : 使用统一开发工具
`,answer:"B"},{question:`用户故事的3C原则不包括？

A : 卡片（card）
B : 协作（collaboration）
C : 交谈（conversation）
D : 确认（confirmation）
`,answer:"B"},{question:`Scrum术语首次提出的论文是？

A : 《敏捷软件开发宣言》
B : 《新型新产品开发策略》
C : 《Scrum指南2020》
D : 《精益思想》
`,answer:"B"},{question:`产品负责人的核心职责是？

A : 主持每日站会
B : 管理产品Backlog
C : 解决技术难题
D : 制定团队KPI
`,answer:"B"},{question:`Scrum团队理想规模通常是？

A : 3-5人
B : 5-7人
C : 10人或更少
D : 15-20人
`,answer:"C"},{question:`Scrum的理论基础是？

A : 预测性计划和严格流程
B : 经验主义和精益思维
C : 六西格玛管理
D : 瀑布模型
`,answer:"B"},{question:`行为驱动开发是从什么方法演变而来？

A : 瀑布模型
B : 测试驱动开发TDD
C : 极限编程XP
D : Scrum
`,answer:"B"},{question:`“金发女孩”估算技术主要用于？

A : 调整工作项到合适大小
B : 确定优先级顺序
C : 分配开发任务
D : 评估代码质量
`,answer:"A"},{question:`故事点的估算基于什么原则？

A : 绝对时间单位
B : 相对工作量比较
C : 代码行数预测
D : 任务复杂度评分
`,answer:"B"},{question:`当前最常见的Sprint周期是？

A : 1周
B : 3周
C : 2周
D : 4周
`,answer:"C"},{question:`用户故事地图主要解决传统Backlog的什么问题？

A : 全局视角缺失
B : 需求数量过多
C : 技术实现复杂
D : 测试覆盖率不足
`,answer:"A"},{question:`某团队使用计划扑克估算时，发现对“支付功能”的估算差异极大（5、8、13）最可能的原因是？

A : 团队成员能力差异
B : 会议时间安排不合理
C : 扑克牌工具使用错误
D : 需求理解不一致
`,answer:"D"},{question:`验收标准的正确格式是？

A : When → Then → Given
B : Then → Given → When
C : Given → When → Then
D : When → Given → Then
`,answer:"C"},{question:`在Scrum框架中，哪个事件的时间盒是每一个月Sprint最多8小时？

A : Sprint回顾会议
B : 每日站会
C : Sprint计划会议
D : Sprint评审会议
`,answer:"C"},{question:`每日站会的核心关注点应该是？

A : 轮流报告个人昨天的工作细节
B : 检查Sprint进度并识别障碍
C : 讨论技术实现方案
D : 更新燃尽图
`,answer:"B"},{question:`XP方法最早在哪个项目中得到系统应用？

A : 克莱斯勒薪资系统
B : NASA航天飞机软件
C : 微软Windows系统
D : 亚马逊电商平台
`,answer:"A"},{question:`SAFe框架中协调多个团队同步交付的核心机制是？

A : Scrum of Scrums
B : 每日站会
C : ART
D : PI Objectives
`,answer:"A"},{question:`根据Scrum价值观，当发现Sprint目标无法实现时，团队最应该展现的是？

A : 隐瞒进度风险
B : 要求延长Sprint
C : 降低质量标准
D : 及时透明沟通
`,answer:"D"},{question:`有效的Sprint演示应该避免？

A : 展示实际可运行的代码
B : 详细解释实现技术细节
C : 聚焦核心业务价值
D : 获取利益相关者反馈
`,answer:"B"},{question:`Less框架与SAFe的核心区别在于？

A : 保持单产品Backlog，不添加管理层级
B : 引入Release Train工程师角色
C : 要求所有团队使用相同技术栈
D : 强制采用测试驱动开发
`,answer:"A"},{question:`Scrum Guide 2020 取消的旧版概念是？

A : Product Owner
B : Sprint Retrospective
C : Definition of Done
D : 专属“开发团队”称谓
`,answer:"D"},{question:`根据国际Scrum联盟认证要求，一个Sprint的最大时长是？

A : 1周
B : 2周
C : 1个月
D : 6周
`,answer:"C"},{question:`极限编程的四个核心价值观不包括下面哪个？

A : 沟通
B : 简单
C : 反馈
D : 计划
`,answer:"D"},{question:`在极限编程中，哪项实践强调所有生产代码都由两个人共同完成？

A : 持续集成
B : 代码集体拥有制
C : 结对编程
D : 重构
`,answer:"C"},{question:`软件开发的四项基本活动是编码、测试、倾听和____？

A : 设计
B : 部署
C : 维护
D : 沟通
`,answer:"A"},{question:`在极限编程中，“计划游戏”的主要目的是什么？

A : 制定详细的技术实施方案
B : 结合业务和技术考虑，决定范围、优先级和发布计划
C : 让程序员独立决定项目进度
D : 评估团队成员的个人能力
`,answer:"B"},{question:`下列哪项是XP提倡的简单设计原则之一？

A : 消除重复的逻辑
B : 尽可能多的使用设计模式
C : 为未来的需求提前设计
D : 编写详尽的设计文档
`,answer:"A"},{question:`测试驱动开发TDD的核心循环是？

A : 红（失败测试）→ 绿（通过实现）→ 重构
B : 设计 → 编码 → 测试
C : 编码 → 测试 → 部署
D : 需求分析 → 设计 → 编码
`,answer:"A"},{question:`在XP中，由谁负责编写功能测试？

A : 程序员
B : 项目经理
C : 客户
D : 测试工程师
`,answer:"C"},{question:`“YAGNI”原则指的是什么？

A : 你需要它
B : 你不会需要它
C : 总是优先考虑性能
D : 今天实现，为明天设计
`,answer:"B"},{question:`持续集成的核心目标是？

A : 尽早发现并解决集成问题
B : 自动化所有开发任务
C : 减少代码编写量
D : 取代版本控制系统
`,answer:"A"},{question:`在持续集成实践中，“主线”指的是什么？

A : 开发者的本地代码分支
B : 用于发布稳定版本的特定分支
C : 代码库中单一的、共享的、代表项目当前集成状态的分支
D : 存放测试代码的分支
`,answer:"C"},{question:`根据持续集成的实践，以下哪项内容不应该纳入版本控制系统？

A : 源代码
B : 数据库模式定义脚本
C : 构建脚本
D : 编译后的二进制文件或构建产物
`,answer:"D"},{question:`什么是“自测试构建”？

A : 只需要编译代码的构建
B : 包含自动化测试验证，能自我验证正确性的构建过程
C : 由测试人员手动执行的构建
D : 仅在本地环境运行的构建
`,answer:"B"},{question:`在XP的结对编程中，不负责直接编码的伙伴主要思考什么？

A : 代码的格式是否符合规范
B : 下一个功能如何实现
C : 具体的变量命名
D : 从更战略性的角度思考，如整体方法是否可行、是否有遗漏的测试用例、是否能简化系统等
`,answer:"D"},{question:`持续集成的实践要求自动化构建过程能够通过什么方式触发？

A : 每天固定时间
B : 每周一次
C : 一个简单的单一命令
D : 项目经理批准后
`,answer:"C"},{question:`在持续集成实践中，经验法则是每个团队成员每天至少向主线提交代码更改的频率是？

A : 至少一次
B : 至少两次
C : 每小时一次
D : 每周一次
`,answer:"A"},{question:`当集成构建失败时，团队的首选处理方式通常是？

A : 立即尝试在主线上修复问题
B : 忽略该失败，继续开发新功能
C : 恢复导致失败的提交
D : 等待其他成员帮助解决
`,answer:"C"},{question:`下列哪项不属于持续集成服务的典型功能？

A : 监控版本控制仓库，检测新的提交
B : 自动从仓库检出最新的主线代码
C : 报告构建结果
D : 自动编写新的单元测试
`,answer:"D"},{question:`以下关于持续集成与持续交付关系的描述，哪项是正确的？

A : CI的CD的后续阶段，CD成功后才进行CI
B : CI是实现CD的必要前提
C : CI和CD是互斥的概念，不能同时实施
D : CD主要关注开发环境，CI主要关注生产环境
`,answer:"B"},{question:`Kanban方法起源于哪个国家的制造业？

A : 美国
B : 德国
C : 日本
D : 中国
`,answer:"C"},{question:`在Kanban中，代表具体工作项并记录必要信息的工具是？

A : Kanban卡片
B : 燃尽图
C : 用户画像
D : 甘特图
`,answer:"A"},{question:`Kanban系统成员对于工作流的明确且共同的认知被称为？

A : 服务水平期望
B : 工作流的定义
C : 在制品限制
D : 价值单位
`,answer:"B"},{question:`在Kanban中，介于开始节点与结束节点的任何一个工作项被称为？

A : 待办事项
B : 已完成工作
C : 进行中工作
D : 瓶颈
`,answer:"C"},{question:`Kanban方法的核心实践不包括？

A : 定义并可视化工作流程
B : 主动管理工作流程中的事项
C : 改进工作流程
D : 规定固定的迭代周期
`,answer:"D"},{question:`根据所学的硬币传递游戏的结果，哪种传递方式使得所有硬币最快达到客户手中？

A : 每次传递20枚硬币
B : 每次传递5枚硬币
C : 每次传递1枚硬币
D : 三种方式时间相同
`,answer:"C"},{question:`在Kanban中，为处理紧急工作而设置的特殊通道通常被称为？

A : 快速通道
B : 慢速通道
C : 阻塞通道
D : 评审通道
`,answer:"A"},{question:`看板方法中，用于限制每个工作阶段在制品数量的关键概念是？

A : 拉动系统
B : 在制品限制
C : 泳道
D : 周期时间
`,answer:"B"},{question:`在Kanban中，当某个工作列达到在制品数量上限时，团队应该？

A : 暂停拉入新任务，优先完成现有任务
B : 立即增加该列的在制品数量上限
C : 将现有任务移到下一列
D : 开始新的任务以保持流动
`,answer:"A"},{question:`以下哪个是Kanban的核心度量指标，指的是一个工作项从正式开始处理到完成交付之间的总时长？

A : 在制品数量（WIP）
B : 产能
C : 工作项存续时长
D : 周期时间
`,answer:"D"},{question:`Scrum和Kanban的主要区别之一在于框架性质，Scrum是迭代式框架而Kanban是？

A : 规定式框架
B : 会议驱动框架
C : 流动式框架
D : 固定周期框架
`,answer:"C"},{question:`ScrumBan是由Corey Ladas提出的，它通常被视为？

A : Scrum到Kanban的中间态或过渡
B : 一种全新的敏捷方法
C : XP实践的替代方案
D : 一种项目管理软件
`,answer:"A"},{question:`DevOps的核心目标不包括？

A : 提升交付速度
B : 提升交付可靠性
C : 打破开发与运维之间的壁垒
D : 固定软件架构
`,answer:"D"},{question:`将安全保障集成到软件开发生命周期各阶段，强调“内建安全”而非“事后补救”的理念是？

A : AIOps
B : DevSecOps
C : Cloud Native
D : CI/CD
`,answer:"B"},{question:`在DevOps实践中，仅将一小部分用户/流量切换到新版本，观察运行情况后逐步扩大流量的部署策略是？

A : 蓝绿部署
B : 持续部署
C : 金丝雀发布
D : 基础设施即代码
`,answer:"C"},{question:`根据DevOps的DORA指标，精英级别的团队的部署频率通常是？

A : 每日多次
B : 每周一次到每日一次
C : 每月一次到每周一次
D : 每月不到一次
`,answer:"A"},{question:`DevOps与敏捷的关系，以下描述最准确的是？

A : DevOps取代了敏捷
B : 敏捷是DevOps的一个分支
C : DevOps扩展了敏捷的理念，关注从开发到运维的全生命周期
D : DevOps只关注技术工具，敏捷只关注流程
`,answer:"C"},{question:`使用代码化方式管理和配置基础设施，将手动运维操作转为可编程脚本/配置描述的是？

A : 基础设施即代码
B : 容器化技术
C : 微服务
D : 持续监控
`,answer:"A"},{question:`敏捷软件开发出现的根本原因是为了帮助处理软件开发的？

A : 复杂性与可变性
B : 低成本与高效率
C : 标准化与一致性
D : 文档化与流程化
`,answer:"A"},{question:`根据敏捷观点，评价软件项目成功的最重要标准是？

A : 按时完成项目
B : 不超过预算
C : 所有功能均按规格实现
D : 为客户创造价值
`,answer:"D"},{question:`极限编程更侧重于？

A : 流程和可视化管理
B : 工程实践如TDD、重构等
C : 项目时间盒管理
D : 客户需求优先级排序
`,answer:"B"}],yn=[{question:"简述软件发展三大阶段以及典型的开发方法",answer:`1. 软硬件一体化：线性顺序过程，事实上是硬件开发流程
2. 软件成为独立产品：结构化程序设计、瀑布模型、成熟度运动
3. 网络化和服务化：迭代式开发、敏捷运动`},{question:"简述软件项目管理和软件过程管理",answer:`软件项目管理：应用工具、方法、技术以及人员能力来完成软件项目，实现项目目标的过程
软件过程管理：让软件过程在开发效率、质量等方面有更好的性能绩效`},{question:"简述生命周期模型和软件过程的区别与联系",answer:`1. 生命周期模型是对一个软件过程的人为划分
2. 生命周期模型是软件开发过程的框架，是对软件开发过程的粗粒度划分
3. 生命周期模型往往不包含技术实践`},{question:"简述如何理解瀑布模型",answer:`瀑布模型不是单一的模型而是一系列模型，覆盖最简单到最复杂场景，
软件项目应该结合实际情况选择合适过程元素的瀑布模型`},{question:"请描述CMMI模型的5个等级的特征，解释为什么CMMI模型不应该是敏捷方法的对立面？四五级和普通等级的区别是什么？",answer:`五个等级特征：
1. 原始级别：开发相对混乱，没有过程概念
2. 已管理级别：体现出项目管理的特征，有项目计划、需求管理等过程
3. 已定义级别：小组可以基于标准流程和相应规范定义自己的过程
4. 定量管理级别：构建预测模型，以统计过程控制的手段来管理过程
5. 优化级：继续识别过程偏差，找到问题根源并消除，避免未来继续出错
原因：
CMMI是过程管理/改进模型，而大部分敏捷方法都是开发方法，两者性质完全不同，因此不是对立的。
区别：
普通等级关注的都是当前的状态，而四五级是根据结果（未来）进行管理。`},{question:"请分别简述PDCA模型和IDEAL模型的主要步骤",answer:`PDCA模型：
分析现状，找出问题 → 分析影响质量的原因 → 找出措施 → 拟定计划 → 执行措施与计划 → 检查效果，发现问题 → 总结经验纳入标准 → 遗留问题传入下一个PDCA循环
IDEAL模型：
I: 开始（Initiating）D: 诊断（Diagnosing） E: 建立（Establishing）A: 执行（Acting）L: 调整（Leveraging）
`},{question:"请简述敏捷宣言的四个价值观",answer:`1. 个体和互动胜过流程和工具
2. 可以工作的软件胜过详尽的文档
3. 客户合作胜过合同谈判
4. 响应变化胜过遵循计划
尽管右项有其价值，我们更重视左项的价值`},{question:"敏捷方法的特征有哪些？哪些关于敏捷方法的特征表述可能带有误导？为什么？",answer:`特征：
① 小周期迭代式；② 持续交付；③ 敏捷宣言
带有误导的表述：
1. 轻量级方法：事实上，敏捷方法对工程规范有着极为严格的要求，很难说就是轻量级方法。
2. 拥抱变更、变更驱动：仅仅是个口号，对待变更，所有软件工程方法都是限制和管理的态度。
3. 测试驱动开发（TDD）可以提高开发质量：并没有足够的证据支持这一说法。`},{question:"简要描述按照通用计划框架，为了开发合理的项目计划，应该要做哪些估算？PROBE方法充当什么角色？",answer:`应该要做规模估算、资源估算；
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
概要设计 → 代理识别和代理规模 → 估算并调整程序规模、资源 → 计算预测区间
理由：
在估算资源需求时，生产效率一般在分母上，考虑个体软件工程师的生产效率差异，容易导致估算偏差范围变大。
`},{question:"请简述DevOps的三个步骤",answer:`第一步: 从左到右快速流动
第二步: 从右到左快速反馈
第三步: 在整个过程中持续学习`},{question:"简述DevOps的特点以及为什么流行",answer:`1. 敏捷团队项目管理：增强网站和移动应用软件开发的管理
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
4. 开展设计验证`},{question:"如何制定一份让人无法拒绝的计划？请描述基本步骤和一些注意事项。",answer:`1. 制定日程计划，进行规模估算、资源估算以及日程的规划，要注意结合历史数据
2. 制定质量计划，确认需要开展的质量保证活动以及开展的程度（如时间、人数与目标）
3. 制定风险计划，对可能发生的风险进行识别与应对，从而消除潜在问题对项目的负面影响
`},{question:"挣值管理有三种实现方式，分别是简单、中级和高级，分别阐述上述三种方式的要点",answer:`1. 简单实现：仅关注进度信息。首先建立WBS，定义工作范围；其次为每一项工作定义计划价值（PV）；最后按照规则将某一数值赋值给已完成的工作，该值成为挣值（EV）。
2. 中级实现：在简单实现基础上加入日程偏差的计算。日程偏差 SV = EV - PV； 日程偏差指数 SPI = EV / PV
3. 高级实现：加入成本线（AC）、预测线（BAC），当任务足够多时，让预测线尽可能平直，同时延伸挣值线，找到与预测线的交点，就可以明确项目的落后时间。`},{question:"请结合软件开发的特点介绍软件项目管理中自主性团队的必要性以及自主团队应该具备的特征。",answer:`软件开发是一种智力活动，开发者是智力劳动者，对于智力劳动者而言，管理的第一准则就是智力劳动者不能被管理而是实现自我管理。
自主性团队的特征：
1. 自行定义项目的目标
2. 自行决定团队组成形式以及成员角色
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
7. 开发人员：负责软件产品的开发`},{question:"简述Quality Journey的步骤",answer:`① 各种测试
② 进入测试前的产物质量提升
③ 评审过程度量和稳定
④ 质量意识和主人翁态度
⑤ 个体review的度量和稳定
⑥ 诉诸设计
⑦ 缺陷预防
⑧ 用户质量观——其他质量属性`}],fn=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},il={},ol={t:"1749733532145",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"43898",width:"48",height:"48"};function ll(e,t){return J(),ee("svg",ol,t[0]||(t[0]=[B("path",{d:"M753.777778 625.777778c0-116.622222-82.488889-213.333333-190.577778-236.088889 0-5.688889 0-8.533333-2.844444-14.222222l-22.755556-42.666667V122.311111c0-14.222222-11.377778-22.755556-22.755556-22.755555s-22.755556 11.377778-22.755555 22.755555v213.333333l-22.755556 42.666667c-2.844444 2.844444-2.844444 8.533333-2.844444 14.222222-108.088889 22.755556-190.577778 119.466667-190.577778 236.088889 0 14.222222 11.377778 22.755556 22.755556 22.755556h96.711111c11.377778 56.888889 62.577778 102.4 122.311111 102.4 59.733333 0 110.933333-42.666667 122.311111-102.4h96.711111c5.688889-2.844444 17.066667-11.377778 17.066667-25.6zM512 705.422222c-34.133333 0-65.422222-22.755556-73.955556-54.044444h147.911112c-8.533333 31.288889-39.822222 54.044444-73.955556 54.044444z m-193.422222-102.4c11.377778-96.711111 93.866667-170.666667 193.422222-170.666666s182.044444 73.955556 193.422222 170.666666H318.577778zM318.577778 742.4l-45.511111 45.511111c-11.377778 11.377778-11.377778 28.444444 0 39.822222 11.377778 11.377778 28.444444 11.377778 39.822222 0l45.511111-45.511111c11.377778-11.377778 11.377778-28.444444 0-39.822222-8.533333-11.377778-28.444444-11.377778-39.822222 0zM750.933333 790.755556l-45.511111-45.511112c-11.377778-11.377778-28.444444-11.377778-39.822222 0-11.377778 11.377778-11.377778 28.444444 0 39.822223l45.511111 45.511111c11.377778 11.377778 28.444444 11.377778 39.822222 0s11.377778-28.444444 0-39.822222zM512 802.133333c-17.066667 0-28.444444 14.222222-28.444444 28.444445v65.422222c0 17.066667 14.222222 28.444444 28.444444 28.444444 17.066667 0 28.444444-14.222222 28.444444-28.444444v-65.422222c0-17.066667-11.377778-28.444444-28.444444-28.444445z","p-id":"43899",fill:"#ffffff"},null,-1)]))}const cl=fn(il,[["render",ll]]),fl={},ul={t:"1749733532145",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"43898",width:"48",height:"48"};function al(e,t){return J(),ee("svg",ul,t[0]||(t[0]=[B("path",{d:"M753.777778 625.777778c0-116.622222-82.488889-213.333333-190.577778-236.088889 0-5.688889 0-8.533333-2.844444-14.222222l-22.755556-42.666667V122.311111c0-14.222222-11.377778-22.755556-22.755556-22.755555s-22.755556 11.377778-22.755555 22.755555v213.333333l-22.755556 42.666667c-2.844444 2.844444-2.844444 8.533333-2.844444 14.222222-108.088889 22.755556-190.577778 119.466667-190.577778 236.088889 0 14.222222 11.377778 22.755556 22.755556 22.755556h96.711111c11.377778 56.888889 62.577778 102.4 122.311111 102.4 59.733333 0 110.933333-42.666667 122.311111-102.4h96.711111c5.688889-2.844444 17.066667-11.377778 17.066667-25.6zM512 705.422222c-34.133333 0-65.422222-22.755556-73.955556-54.044444h147.911112c-8.533333 31.288889-39.822222 54.044444-73.955556 54.044444z m-193.422222-102.4c11.377778-96.711111 93.866667-170.666667 193.422222-170.666666s182.044444 73.955556 193.422222 170.666666H318.577778zM318.577778 742.4l-45.511111 45.511111c-11.377778 11.377778-11.377778 28.444444","p-id":"43899",fill:"#ffffff"},null,-1)]))}const dl=fn(fl,[["render",al]]),hl={},pl={t:"1749791627159",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"48513",width:"64",height:"64"};function gl(e,t){return J(),ee("svg",pl,t[0]||(t[0]=[B("path",{d:"M512 483.952751m-483.440873 0a483.440873 483.440873 0 1 0 966.881746 0 483.440873 483.440873 0 1 0-966.881746 0Z",fill:"#FFCB4C","p-id":"48514"},null,-1),B("path",{d:"M413.15056 598.215423a25.992056 25.992056 0 0 1-8.872562-13.195092 22.721721 22.721721 0 0 1 16.778243-29.03489c128.765898-29.03489 215.472441 38.760583 219.140903 41.661228 10.920076 8.701936 13.052904 24.029855 4.919722 34.267427-8.133182 10.180696-23.546414 11.403517-34.438053 2.758457-3.128147-2.388767-71.748313-54.685694-175.801851-31.224593a25.878306 25.878306 0 0 1-21.726402-5.232537z",fill:"#65471B","p-id":"48515"},null,-1),B("path",{d:"M312.765485 317.762842a75.530527 60.430109 90 1 0 120.860218 0 75.530527 60.430109 90 1 0-120.860218 0Z",fill:"#65471B","p-id":"48516"},null,-1),B("path",{d:"M632.860218 347.963678a75.530527 60.430109 90 1 0 120.860218 0 75.530527 60.430109 90 1 0-120.860218 0Z",fill:"#65471B","p-id":"48517"},null,-1),B("path",{d:"M491.411106 999.556661s35.973688-11.687894 40.637471-38.447768c4.919722-27.641443-17.745124-33.186794-17.745123-33.186795s29.603644-5.915041 33.328982-39.130273c3.497837-31.309906-24.484858-38.760583-24.484858-38.760582s27.584567-11.375079 28.892701-43.765618c1.080633-27.271753-28.29551-40.609033-28.29551-40.609034s143.269124-34.72243 157.999853-38.134953c14.673852-3.412524 37.537762-17.489185 30.399899-48.173461-7.080987-30.712714-34.238989-31.793347-48.258774-28.523012-14.048223 3.270335-191.783838 44.533436-253.095516 58.809161l-40.921848 9.498191c-15.356357 3.611588-22.323593-3.128147-11.48883-14.560102 14.446351-15.242606 23.688603-32.106161 26.902063-60.088856 3.384086-29.433018-6.597546-65.776396-12.313523-79.881495-10.635699-26.19112-28.579887-46.893765-49.310969-54.003189-32.333663-11.090702-55.311323 9.128501-43.850931 44.391247 17.17637 52.723493 5.915041 95.977232-23.688603 122.083039-69.643923 61.340115-102.034462 105.077296-80.478687 198.296071 23.546414 101.664772 124.471806 167.099916 226.136578 143.553501l89.635625-19.366072z",fill:"#efb336","p-id":"48518","data-spm-anchor-id":"a313x.search_index.0.i17.2f793a81OOjooU",class:"selected"},null,-1),B("path",{d:"M264.478273 180.607822a26.304871 26.304871 0 0 1-11.11914-11.346641 22.750159 22.750159 0 0 1 11.176016-31.622721c121.315221-52.069426 218.94184-1.222821 223.036868 0.966882 12.313523 6.569108 17.290121 21.242961 11.11914 32.817104-6.142543 11.517268-21.043897 15.526983-33.35742 9.043188-3.497837-1.791575-80.535562-40.722784-178.531871 1.336572a26.020494 26.020494 0 0 1-22.323593-1.194384z m345.09147 106.641369a26.276433 26.276433 0 0 1-10.294447-12.057584 22.750159 22.750159 0 0 1 13.308843-30.826465c124.585557-43.680305 218.543712 13.650095 222.468115 16.124175 11.801645 7.393802 15.782923 22.380469 8.872562 33.499609-6.881923 11.090702-22.067654 14.076661-33.869299 6.768172-3.412524-2.047514-77.549604-46.097509-178.219056-10.777888a26.276433 26.276433 0 0 1-22.266718-2.730019z",fill:"#65471B","p-id":"48519"},null,-1)]))}const _l=fn(hl,[["render",gl]]),ml={class:"header"},bl={class:"tab-container"},vl={key:0},Cl={key:0,class:"question-container"},wl={class:"question-content"},Al={class:"options-container"},yl=["onClick"],xl={class:"option-letter"},Dl={class:"option-text"},Sl={class:"controls"},Bl=["disabled"],Tl={key:1,class:"result-container"},Pl={class:"score-circle"},Ol={class:"score-text"},El={key:0,class:"incorrect-questions"},ql={key:1,class:"short-answer-container"},Il={class:"short-answer-question"},Ml={key:0},Rl={key:1,class:"thinking-mode"},Fl={class:"controls"},Ll=["disabled"],Hl=["disabled"],$l=lr({__name:"Exercise",setup(e){const t=Le(!1),n=Le(!1),s=()=>{n.value=!n.value},r=Le(0),i=ut(()=>yn[r.value]),o=()=>{fe.value=!0,r.value>0&&r.value--},l=()=>{fe.value=!0,r.value<yn.length-1&&r.value++},u=Le([{question:"",userAnswer:"",correctAnswer:""}]),p=F=>{const T=F.split(`
`),Q=[],de=/^([A-Z]) : (.+)$/;for(let we=0;we<T.length;we++){const lt=T[we].match(de);lt&&Q.push({letter:lt[1],text:lt[2]})}return Q},a=ut(()=>be.map(F=>({...F,options:p(F.question),isMultiple:F.question.includes("多选")}))),h=Le(0),A=Le(Array(be.length).fill("")),x=Le(!1),I=Le(0);ut(()=>(h.value+1)/be.length*100);const M=ut(()=>a.value[h.value]),Z=F=>A.value[h.value].includes(F),$=F=>{const T=A.value[h.value];M.value.isMultiple?T.includes(F)?A.value[h.value]=T.replace(F,""):A.value[h.value]=T+F:A.value[h.value]=F},W=()=>{h.value>0&&h.value--},k=()=>{h.value<be.length-1&&h.value++},P=()=>{let F=0;const T=[];for(let Q=0;Q<be.length;Q++){const de=[...A.value[Q]].sort().join(""),we=[...be[Q].answer].sort().join("");de===we?F++:T.push({question:be[Q].question,userAnswer:de||"未作答",correctAnswer:we})}I.value=F,u.value=T,x.value=!0},Y=()=>{const F=I.value/be.length*100;return F>=90?"太棒了！您已经掌握了这些知识点！":F>=70?"做得很好！继续努力！":F>=50?"不错的尝试！复习一下会更好！":"需要更多练习，加油！"},xe=ut(()=>{const F=I.value/be.length*100;return F>=90?"excellent":F>=70?"good":F>=50?"average":"poor"}),me=()=>{h.value=0,A.value=Array(be.length).fill(""),x.value=!1,I.value=0},fe=Le(!0),ot=()=>{fe.value=!fe.value};return(F,T)=>(J(),ee("div",{class:ke(["container",{"dark-mode":n.value}])},[B("div",ml,[n.value?(J(),Jt(dl,{key:1,class:"dark-mode-btn",onClick:s})):(J(),Jt(cl,{key:0,class:"dark-mode-btn",onClick:s})),T[2]||(T[2]=B("h1",null,"软件质量管理",-1)),B("div",bl,[B("button",{class:ke(["tab-btn",{active:!t.value}]),onClick:T[0]||(T[0]=Q=>t.value=!1)}," 选择题 ",2),B("button",{class:ke(["tab-btn",{active:t.value}]),onClick:T[1]||(T[1]=Q=>t.value=!0)}," 简答题 ",2)])]),t.value?(J(),ee("div",ql,[T[15]||(T[15]=B("div",{class:"question-header"},[B("div",{class:"link-container"},[B("a",{href:"https://ziqingchuan.github.io/SSD/",target:"_blank",class:"link-btn"}," 软件系统设计复习网站 ")])],-1)),B("div",Il,ve(i.value.question),1),B("div",{class:"short-answer-answer",onClick:ot},[fe.value?(J(),ee("div",Rl,[Me(_l),T[12]||(T[12]=B("span",null,"答案是什么来着？",-1))])):(J(),ee("p",Ml,ve(i.value.answer),1))]),B("div",Fl,[B("button",{class:"btn btn-prev",onClick:o,disabled:r.value===0},T[13]||(T[13]=[B("i",{class:"fas fa-arrow-left"},null,-1),He(" 上一题 ")]),8,Ll),B("button",{class:"btn btn-next",onClick:l,disabled:r.value===jt(yn).length-1},T[14]||(T[14]=[He(" 下一题 "),B("i",{class:"fas fa-arrow-right"},null,-1)]),8,Hl)])])):(J(),ee("div",vl,[x.value?(J(),ee("div",Tl,[T[11]||(T[11]=B("h2",{class:"result-title"},"测试完成!",-1)),B("div",Pl,[B("div",Ol,ve(I.value)+" / "+ve(jt(be).length),1)]),B("div",{class:ke(["feedback",xe.value])},ve(Y()),3),u.value.length?(J(),ee("div",El,[T[9]||(T[9]=B("h3",null,"您答错的题目：",-1)),(J(!0),ee(Ae,null,ls(u.value,(Q,de)=>(J(),ee("div",{key:de,class:"incorrect-question"},[B("p",null,ve(Q.question),1),B("p",null,[T[7]||(T[7]=B("strong",null,"您的答案：",-1)),He(" "+ve(Q.userAnswer),1)]),B("p",null,[T[8]||(T[8]=B("strong",null,"正确答案：",-1)),He(" "+ve(Q.correctAnswer),1)])]))),128))])):yo("",!0),B("button",{class:"restart-btn",onClick:me},T[10]||(T[10]=[B("i",{class:"fas fa-redo"},null,-1),He(" 重新测试 ")]))])):(J(),ee("div",Cl,[T[6]||(T[6]=B("div",{class:"question-header"},[B("div",{class:"link-container"},[B("a",{href:"https://ziqingchuan.github.io/SSD/",target:"_blank",class:"link-btn"}," 软件系统设计复习网站 ")])],-1)),B("div",wl,ve(M.value.question.split(`

`)[0]),1),B("div",Al,[(J(!0),ee(Ae,null,ls(M.value.options,(Q,de)=>(J(),ee("div",{key:de,class:ke(["option",{selected:Z(Q.letter)}]),onClick:we=>$(Q.letter)},[B("div",xl,ve(Q.letter),1),B("div",Dl,ve(Q.text),1)],10,yl))),128))]),B("div",Sl,[B("button",{class:"btn btn-prev",onClick:W,disabled:h.value===0},T[3]||(T[3]=[B("i",{class:"fas fa-arrow-left"},null,-1),He(" 上一题 ")]),8,Bl),h.value<jt(be).length-1?(J(),ee("button",{key:0,class:"btn btn-next",onClick:k},T[4]||(T[4]=[He(" 下一题 "),B("i",{class:"fas fa-arrow-right"},null,-1)]))):(J(),ee("button",{key:1,class:"btn btn-finish",onClick:P},T[5]||(T[5]=[He(" 完成测试 "),B("i",{class:"fas fa-check"},null,-1)])))])]))]))],2))}}),Nl=fn($l,[["__scopeId","data-v-91d30885"]]),jl=lr({__name:"App",setup(e){return(t,n)=>(J(),Jt(Nl,{msg:"Vite + Vue"}))}});nl(jl).mount("#app");
