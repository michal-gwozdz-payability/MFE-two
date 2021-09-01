(()=>{var ft={640:()=>{
/**
      @license @nocompile
      Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
!function(){"use strict";!function(){if(void 0===window.Reflect||void 0===window.customElements||window.customElements.polyfillWrapFlushCallback)return;const q=HTMLElement;window.HTMLElement=function(){return Reflect.construct(q,[],this.constructor)},HTMLElement.prototype=q.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,q)}()}()},761:()=>{"use strict";
/**
       * @license Angular v12.0.0-next.0
       * (c) 2010-2020 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */!function(e){const n=e.performance;function i(M){n&&n.mark&&n.mark(M)}function r(M,p){n&&n.measure&&n.measure(M,p)}i("Zone");const c=e.__Zone_symbol_prefix||"__zone_symbol__";function u(M){return c+M}const f=!0===e[u("forceDuplicateZoneCheck")];if(e.Zone){if(f||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}let _=(()=>{class M{constructor(t,o){this._parent=t,this._name=o?o.name||"unnamed":"<root>",this._properties=o&&o.properties||{},this._zoneDelegate=new T(this,this._parent&&this._parent._zoneDelegate,o)}static assertZonePatched(){if(e.Promise!==ee.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let t=M.current;for(;t.parent;)t=t.parent;return t}static get current(){return G.zone}static get currentTask(){return oe}static __load_patch(t,o,y=!1){if(ee.hasOwnProperty(t)){if(!y&&f)throw Error("Already loaded patch: "+t)}else if(!e["__Zone_disable_"+t]){const P="Zone:"+t;i(P),ee[t]=o(e,M,de),r(P,P)}}get parent(){return this._parent}get name(){return this._name}get(t){const o=this.getZoneWith(t);if(o)return o._properties[t]}getZoneWith(t){let o=this;for(;o;){if(o._properties.hasOwnProperty(t))return o;o=o._parent}return null}fork(t){if(!t)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,t)}wrap(t,o){if("function"!=typeof t)throw new Error("Expecting function got: "+t);const y=this._zoneDelegate.intercept(this,t,o),P=this;return function(){return P.runGuarded(y,this,arguments,o)}}run(t,o,y,P){G={parent:G,zone:this};try{return this._zoneDelegate.invoke(this,t,o,y,P)}finally{G=G.parent}}runGuarded(t,o=null,y,P){G={parent:G,zone:this};try{try{return this._zoneDelegate.invoke(this,t,o,y,P)}catch(Q){if(this._zoneDelegate.handleError(this,Q))throw Q}}finally{G=G.parent}}runTask(t,o,y){if(t.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(t.zone||B).name+"; Execution: "+this.name+")");if(t.state===j&&(t.type===R||t.type===I))return;const P=t.state!=$;P&&t._transitionTo($,S),t.runCount++;const Q=oe;oe=t,G={parent:G,zone:this};try{t.type==I&&t.data&&!t.data.isPeriodic&&(t.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,t,o,y)}catch(l){if(this._zoneDelegate.handleError(this,l))throw l}}finally{t.state!==j&&t.state!==K&&(t.type==R||t.data&&t.data.isPeriodic?P&&t._transitionTo(S,$):(t.runCount=0,this._updateTaskCount(t,-1),P&&t._transitionTo(j,$,j))),G=G.parent,oe=Q}}scheduleTask(t){if(t.zone&&t.zone!==this){let y=this;for(;y;){if(y===t.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);y=y.parent}}t._transitionTo(Y,j);const o=[];t._zoneDelegates=o,t._zone=this;try{t=this._zoneDelegate.scheduleTask(this,t)}catch(y){throw t._transitionTo(K,Y,j),this._zoneDelegate.handleError(this,y),y}return t._zoneDelegates===o&&this._updateTaskCount(t,1),t.state==Y&&t._transitionTo(S,Y),t}scheduleMicroTask(t,o,y,P){return this.scheduleTask(new m(v,t,o,y,P,void 0))}scheduleMacroTask(t,o,y,P,Q){return this.scheduleTask(new m(I,t,o,y,P,Q))}scheduleEventTask(t,o,y,P,Q){return this.scheduleTask(new m(R,t,o,y,P,Q))}cancelTask(t){if(t.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(t.zone||B).name+"; Execution: "+this.name+")");t._transitionTo(H,S,$);try{this._zoneDelegate.cancelTask(this,t)}catch(o){throw t._transitionTo(K,H),this._zoneDelegate.handleError(this,o),o}return this._updateTaskCount(t,-1),t._transitionTo(j,H),t.runCount=0,t}_updateTaskCount(t,o){const y=t._zoneDelegates;-1==o&&(t._zoneDelegates=null);for(let P=0;P<y.length;P++)y[P]._updateTaskCount(t.type,o)}}return M.__symbol__=u,M})();const g={name:"",onHasTask:(M,p,t,o)=>M.hasTask(t,o),onScheduleTask:(M,p,t,o)=>M.scheduleTask(t,o),onInvokeTask:(M,p,t,o,y,P)=>M.invokeTask(t,o,y,P),onCancelTask:(M,p,t,o)=>M.cancelTask(t,o)};class T{constructor(p,t,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=p,this._parentDelegate=t,this._forkZS=o&&(o&&o.onFork?o:t._forkZS),this._forkDlgt=o&&(o.onFork?t:t._forkDlgt),this._forkCurrZone=o&&(o.onFork?this.zone:t._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:t._interceptZS),this._interceptDlgt=o&&(o.onIntercept?t:t._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this.zone:t._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:t._invokeZS),this._invokeDlgt=o&&(o.onInvoke?t:t._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this.zone:t._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:t._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?t:t._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this.zone:t._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:t._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?t:t._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this.zone:t._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:t._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?t:t._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this.zone:t._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:t._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?t:t._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this.zone:t._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const y=o&&o.onHasTask;(y||t&&t._hasTaskZS)&&(this._hasTaskZS=y?o:g,this._hasTaskDlgt=t,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=p,o.onScheduleTask||(this._scheduleTaskZS=g,this._scheduleTaskDlgt=t,this._scheduleTaskCurrZone=this.zone),o.onInvokeTask||(this._invokeTaskZS=g,this._invokeTaskDlgt=t,this._invokeTaskCurrZone=this.zone),o.onCancelTask||(this._cancelTaskZS=g,this._cancelTaskDlgt=t,this._cancelTaskCurrZone=this.zone))}fork(p,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,p,t):new _(p,t)}intercept(p,t,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,p,t,o):t}invoke(p,t,o,y,P){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,p,t,o,y,P):t.apply(o,y)}handleError(p,t){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,p,t)}scheduleTask(p,t){let o=t;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,p,t),o||(o=t);else if(t.scheduleFn)t.scheduleFn(t);else{if(t.type!=v)throw new Error("Task is missing scheduleFn.");d(t)}return o}invokeTask(p,t,o,y){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,p,t,o,y):t.callback.apply(o,y)}cancelTask(p,t){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,p,t);else{if(!t.cancelFn)throw Error("Task is not cancelable");o=t.cancelFn(t)}return o}hasTask(p,t){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,p,t)}catch(o){this.handleError(p,o)}}_updateTaskCount(p,t){const o=this._taskCounts,y=o[p],P=o[p]=y+t;if(P<0)throw new Error("More tasks executed then were scheduled.");0!=y&&0!=P||this.hasTask(this.zone,{microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:p})}}class m{constructor(p,t,o,y,P,Q){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=p,this.source=t,this.data=y,this.scheduleFn=P,this.cancelFn=Q,!o)throw new Error("callback is not defined");this.callback=o;const l=this;this.invoke=p===R&&y&&y.useG?m.invokeTask:function(){return m.invokeTask.call(e,l,this,arguments)}}static invokeTask(p,t,o){p||(p=this),ce++;try{return p.runCount++,p.zone.runTask(p,t,o)}finally{1==ce&&L(),ce--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(j,Y)}_transitionTo(p,t,o){if(this._state!==t&&this._state!==o)throw new Error(`${this.type} '${this.source}': can not transition to '${p}', expecting state '${t}'${o?" or '"+o+"'":""}, was '${this._state}'.`);this._state=p,p==j&&(this._zoneDelegates=null)}toString(){return this.data&&void 0!==this.data.handleId?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const N=u("setTimeout"),D=u("Promise"),Z=u("then");let E,z=[],V=!1;function d(M){if(0===ce&&0===z.length)if(E||e[D]&&(E=e[D].resolve(0)),E){let p=E[Z];p||(p=E.then),p.call(E,L)}else e[N](L,0);M&&z.push(M)}function L(){if(!V){for(V=!0;z.length;){const M=z;z=[];for(let p=0;p<M.length;p++){const t=M[p];try{t.zone.runTask(t,null,null)}catch(o){de.onUnhandledError(o)}}}de.microtaskDrainDone(),V=!1}}const B={name:"NO ZONE"},j="notScheduled",Y="scheduling",S="scheduled",$="running",H="canceling",K="unknown",v="microTask",I="macroTask",R="eventTask",ee={},de={symbol:u,currentZoneFrame:()=>G,onUnhandledError:U,microtaskDrainDone:U,scheduleMicroTask:d,showUncaughtError:()=>!_[u("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:U,patchMethod:()=>U,bindArguments:()=>[],patchThen:()=>U,patchMacroTask:()=>U,patchEventPrototype:()=>U,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>U,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>U,wrapWithCurrentZone:()=>U,filterProperties:()=>[],attachOriginToPatched:()=>U,_redefineProperty:()=>U,patchCallbacks:()=>U};let G={parent:null,zone:new _(null,null)},oe=null,ce=0;function U(){}r("Zone","Zone"),e.Zone=_}("undefined"!=typeof window&&window||"undefined"!=typeof self&&self||global);const X=Object.getOwnPropertyDescriptor,ne=Object.defineProperty,Pe=Object.getPrototypeOf,ht=Object.create,dt=Array.prototype.slice,Se="addEventListener",Ze="removeEventListener",Me=Zone.__symbol__(Se),Le=Zone.__symbol__(Ze),le="true",ue="false",ve=Zone.__symbol__("");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ie(e,n){return Zone.current.wrap(e,n)}function He(e,n,i,r,c){return Zone.current.scheduleMacroTask(e,n,i,r,c)}const x=Zone.__symbol__,Re="undefined"!=typeof window,me=Re?window:void 0,J=Re&&me||"object"==typeof self&&self||global,pt=[null];function je(e,n){for(let i=e.length-1;i>=0;i--)"function"==typeof e[i]&&(e[i]=Ie(e[i],n+"_"+i));return e}function Fe(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&void 0===e.set)}const We="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,Ce=!("nw"in J)&&void 0!==J.process&&"[object process]"==={}.toString.call(J.process),Ae=!Ce&&!We&&!(!Re||!me.HTMLElement),qe=void 0!==J.process&&"[object process]"==={}.toString.call(J.process)&&!We&&!(!Re||!me.HTMLElement),Oe={},Xe=function(e){if(!(e=e||J.event))return;let n=Oe[e.type];n||(n=Oe[e.type]=x("ON_PROPERTY"+e.type));const i=this||e.target||J,r=i[n];let c;if(Ae&&i===me&&"error"===e.type){const u=e;c=r&&r.call(this,u.message,u.filename,u.lineno,u.colno,u.error),!0===c&&e.preventDefault()}else c=r&&r.apply(this,arguments),null!=c&&!c&&e.preventDefault();return c};function Ye(e,n,i){let r=X(e,n);if(!r&&i&&X(i,n)&&(r={enumerable:!0,configurable:!0}),!r||!r.configurable)return;const c=x("on"+n+"patched");if(e.hasOwnProperty(c)&&e[c])return;delete r.writable,delete r.value;const u=r.get,f=r.set,_=n.substr(2);let g=Oe[_];g||(g=Oe[_]=x("ON_PROPERTY"+_)),r.set=function(T){let m=this;!m&&e===J&&(m=J),m&&(m[g]&&m.removeEventListener(_,Xe),f&&f.apply(m,pt),"function"==typeof T?(m[g]=T,m.addEventListener(_,Xe,!1)):m[g]=null)},r.get=function(){let T=this;if(!T&&e===J&&(T=J),!T)return null;const m=T[g];if(m)return m;if(u){let N=u&&u.call(this);if(N)return r.set.call(this,N),"function"==typeof T.removeAttribute&&T.removeAttribute(n),N}return null},ne(e,n,r),e[c]=!0}function $e(e,n,i){if(n)for(let r=0;r<n.length;r++)Ye(e,"on"+n[r],i);else{const r=[];for(const c in e)"on"==c.substr(0,2)&&r.push(c);for(let c=0;c<r.length;c++)Ye(e,r[c],i)}}const ie=x("originalInstance");function be(e){const n=J[e];if(!n)return;J[x(e)]=n,J[e]=function(){const c=je(arguments,e);switch(c.length){case 0:this[ie]=new n;break;case 1:this[ie]=new n(c[0]);break;case 2:this[ie]=new n(c[0],c[1]);break;case 3:this[ie]=new n(c[0],c[1],c[2]);break;case 4:this[ie]=new n(c[0],c[1],c[2],c[3]);break;default:throw new Error("Arg list too long.")}},he(J[e],n);const i=new n(function(){});let r;for(r in i)"XMLHttpRequest"===e&&"responseBlob"===r||function(c){"function"==typeof i[c]?J[e].prototype[c]=function(){return this[ie][c].apply(this[ie],arguments)}:ne(J[e].prototype,c,{set:function(u){"function"==typeof u?(this[ie][c]=Ie(u,e+"."+c),he(this[ie][c],u)):this[ie][c]=u},get:function(){return this[ie][c]}})}(r);for(r in n)"prototype"!==r&&n.hasOwnProperty(r)&&(J[e][r]=n[r])}function fe(e,n,i){let r=e;for(;r&&!r.hasOwnProperty(n);)r=Pe(r);!r&&e[n]&&(r=e);const c=x(n);let u=null;if(r&&(!(u=r[c])||!r.hasOwnProperty(c))&&(u=r[c]=r[n],Fe(r&&X(r,n)))){const _=i(u,c,n);r[n]=function(){return _(this,arguments)},he(r[n],u)}return u}function Et(e,n,i){let r=null;function c(u){const f=u.data;return f.args[f.cbIdx]=function(){u.invoke.apply(this,arguments)},r.apply(f.target,f.args),u}r=fe(e,n,u=>function(f,_){const g=i(f,_);return g.cbIdx>=0&&"function"==typeof _[g.cbIdx]?He(g.name,_[g.cbIdx],g,c):u.apply(f,_)})}function he(e,n){e[x("OriginalDelegate")]=n}let Ke=!1,xe=!1;function yt(){if(Ke)return xe;Ke=!0;try{const e=me.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(xe=!0)}catch(e){}return xe}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Zone.__load_patch("ZoneAwarePromise",(e,n,i)=>{const r=Object.getOwnPropertyDescriptor,c=Object.defineProperty,f=i.symbol,_=[],g=!0===e[f("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],T=f("Promise"),m=f("then");i.onUnhandledError=l=>{if(i.showUncaughtError()){const s=l&&l.rejection;s?console.error("Unhandled Promise rejection:",s instanceof Error?s.message:s,"; Zone:",l.zone.name,"; Task:",l.task&&l.task.source,"; Value:",s,s instanceof Error?s.stack:void 0):console.error(l)}},i.microtaskDrainDone=()=>{for(;_.length;){const l=_.shift();try{l.zone.runGuarded(()=>{throw l.throwOriginal?l.rejection:l})}catch(s){Z(s)}}};const D=f("unhandledPromiseRejectionHandler");function Z(l){i.onUnhandledError(l);try{const s=n[D];"function"==typeof s&&s.call(this,l)}catch(s){}}function z(l){return l&&l.then}function V(l){return l}function E(l){return t.reject(l)}const d=f("state"),L=f("value"),B=f("finally"),j=f("parentPromiseValue"),Y=f("parentPromiseState"),$=null,H=!0,K=!1;function I(l,s){return a=>{try{G(l,s,a)}catch(h){G(l,!1,h)}}}const de=f("currentTaskTrace");function G(l,s,a){const h=function(){let l=!1;return function(a){return function(){l||(l=!0,a.apply(null,arguments))}}}();if(l===a)throw new TypeError("Promise resolved with itself");if(l[d]===$){let w=null;try{("object"==typeof a||"function"==typeof a)&&(w=a&&a.then)}catch(C){return h(()=>{G(l,!1,C)})(),l}if(s!==K&&a instanceof t&&a.hasOwnProperty(d)&&a.hasOwnProperty(L)&&a[d]!==$)ce(a),G(l,a[d],a[L]);else if(s!==K&&"function"==typeof w)try{w.call(a,h(I(l,s)),h(I(l,!1)))}catch(C){h(()=>{G(l,!1,C)})()}else{l[d]=s;const C=l[L];if(l[L]=a,l[B]===B&&s===H&&(l[d]=l[Y],l[L]=l[j]),s===K&&a instanceof Error){const k=n.currentTask&&n.currentTask.data&&n.currentTask.data.__creationTrace__;k&&c(a,de,{configurable:!0,enumerable:!1,writable:!0,value:k})}for(let k=0;k<C.length;)U(l,C[k++],C[k++],C[k++],C[k++]);if(0==C.length&&s==K){l[d]=0;let k=a;try{throw new Error("Uncaught (in promise): "+function(l){return l&&l.toString===Object.prototype.toString?(l.constructor&&l.constructor.name||"")+": "+JSON.stringify(l):l?l.toString():Object.prototype.toString.call(l)}(a)+(a&&a.stack?"\n"+a.stack:""))}catch(b){k=b}g&&(k.throwOriginal=!0),k.rejection=a,k.promise=l,k.zone=n.current,k.task=n.currentTask,_.push(k),i.scheduleMicroTask()}}}return l}const oe=f("rejectionHandledHandler");function ce(l){if(0===l[d]){try{const s=n[oe];s&&"function"==typeof s&&s.call(this,{rejection:l[L],promise:l})}catch(s){}l[d]=K;for(let s=0;s<_.length;s++)l===_[s].promise&&_.splice(s,1)}}function U(l,s,a,h,w){ce(l);const C=l[d],k=C?"function"==typeof h?h:V:"function"==typeof w?w:E;s.scheduleMicroTask("Promise.then",()=>{try{const b=l[L],O=!!a&&B===a[B];O&&(a[j]=b,a[Y]=C);const A=s.run(k,void 0,O&&k!==E&&k!==V?[]:[b]);G(a,!0,A)}catch(b){G(a,!1,b)}},a)}const p=function(){};class t{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(s){return G(new this(null),H,s)}static reject(s){return G(new this(null),K,s)}static race(s){let a,h,w=new this((b,O)=>{a=b,h=O});function C(b){a(b)}function k(b){h(b)}for(let b of s)z(b)||(b=this.resolve(b)),b.then(C,k);return w}static all(s){return t.allWithCallback(s)}static allSettled(s){return(this&&this.prototype instanceof t?this:t).allWithCallback(s,{thenCallback:h=>({status:"fulfilled",value:h}),errorCallback:h=>({status:"rejected",reason:h})})}static allWithCallback(s,a){let h,w,C=new this((A,F)=>{h=A,w=F}),k=2,b=0;const O=[];for(let A of s){z(A)||(A=this.resolve(A));const F=b;try{A.then(te=>{O[F]=a?a.thenCallback(te):te,k--,0===k&&h(O)},te=>{a?(O[F]=a.errorCallback(te),k--,0===k&&h(O)):w(te)})}catch(te){w(te)}k++,b++}return k-=2,0===k&&h(O),C}constructor(s){const a=this;if(!(a instanceof t))throw new Error("Must be an instanceof Promise.");a[d]=$,a[L]=[];try{s&&s(I(a,H),I(a,K))}catch(h){G(a,!1,h)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return t}then(s,a){let h=this.constructor[Symbol.species];(!h||"function"!=typeof h)&&(h=this.constructor||t);const w=new h(p),C=n.current;return this[d]==$?this[L].push(C,w,s,a):U(this,C,w,s,a),w}catch(s){return this.then(null,s)}finally(s){let a=this.constructor[Symbol.species];(!a||"function"!=typeof a)&&(a=t);const h=new a(p);h[B]=B;const w=n.current;return this[d]==$?this[L].push(w,h,s,s):U(this,w,h,s,s),h}}t.resolve=t.resolve,t.reject=t.reject,t.race=t.race,t.all=t.all;const o=e[T]=e.Promise;e.Promise=t;const y=f("thenPatched");function P(l){const s=l.prototype,a=r(s,"then");if(a&&(!1===a.writable||!a.configurable))return;const h=s.then;s[m]=h,l.prototype.then=function(w,C){return new t((b,O)=>{h.call(this,b,O)}).then(w,C)},l[y]=!0}return i.patchThen=P,o&&(P(o),fe(e,"fetch",l=>function(l){return function(s,a){let h=l.apply(s,a);if(h instanceof t)return h;let w=h.constructor;return w[y]||P(w),h}}(l))),Promise[n.__symbol__("uncaughtPromiseErrors")]=_,t}),
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
Zone.__load_patch("toString",e=>{const n=Function.prototype.toString,i=x("OriginalDelegate"),r=x("Promise"),c=x("Error"),u=function(){if("function"==typeof this){const T=this[i];if(T)return"function"==typeof T?n.call(T):Object.prototype.toString.call(T);if(this===Promise){const m=e[r];if(m)return n.call(m)}if(this===Error){const m=e[c];if(m)return n.call(m)}}return n.call(this)};u[i]=n,Function.prototype.toString=u;const f=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":f.call(this)}});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Ee=!1;if("undefined"!=typeof window)try{const e=Object.defineProperty({},"passive",{get:function(){Ee=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){Ee=!1}const gt={useG:!0},re={},Je={},Qe=new RegExp("^"+ve+"(\\w+)(true|false)$"),Ve=x("propagationStopped");function et(e,n){const i=(n?n(e):e)+ue,r=(n?n(e):e)+le,c=ve+i,u=ve+r;re[e]={},re[e][ue]=c,re[e][le]=u}function kt(e,n,i){const r=i&&i.add||Se,c=i&&i.rm||Ze,u=i&&i.listeners||"eventListeners",f=i&&i.rmAll||"removeAllListeners",_=x(r),g="."+r+":",N=function(E,d,L){if(E.isRemoved)return;const B=E.callback;"object"==typeof B&&B.handleEvent&&(E.callback=Y=>B.handleEvent(Y),E.originalDelegate=B),E.invoke(E,d,[L]);const j=E.options;j&&"object"==typeof j&&j.once&&d[c].call(d,L.type,E.originalDelegate?E.originalDelegate:E.callback,j)},D=function(E){if(!(E=E||e.event))return;const d=this||E.target||e,L=d[re[E.type][ue]];if(L)if(1===L.length)N(L[0],d,E);else{const B=L.slice();for(let j=0;j<B.length&&(!E||!0!==E[Ve]);j++)N(B[j],d,E)}},Z=function(E){if(!(E=E||e.event))return;const d=this||E.target||e,L=d[re[E.type][le]];if(L)if(1===L.length)N(L[0],d,E);else{const B=L.slice();for(let j=0;j<B.length&&(!E||!0!==E[Ve]);j++)N(B[j],d,E)}};function z(E,d){if(!E)return!1;let L=!0;d&&void 0!==d.useG&&(L=d.useG);const B=d&&d.vh;let j=!0;d&&void 0!==d.chkDup&&(j=d.chkDup);let Y=!1;d&&void 0!==d.rt&&(Y=d.rt);let S=E;for(;S&&!S.hasOwnProperty(r);)S=Pe(S);if(!S&&E[r]&&(S=E),!S||S[_])return!1;const $=d&&d.eventNameToString,H={},K=S[_]=S[r],v=S[x(c)]=S[c],I=S[x(u)]=S[u],R=S[x(f)]=S[f];let ee;function de(s,a){return!Ee&&"object"==typeof s&&s?!!s.capture:Ee&&a?"boolean"==typeof s?{capture:s,passive:!0}:s?"object"==typeof s&&!1!==s.passive?Object.assign(Object.assign({},s),{passive:!0}):s:{passive:!0}:s}d&&d.prepend&&(ee=S[x(d.prepend)]=S[d.prepend]);const p=L?function(s){if(!H.isExisting)return K.call(H.target,H.eventName,H.capture?Z:D,H.options)}:function(s){return K.call(H.target,H.eventName,s.invoke,H.options)},t=L?function(s){if(!s.isRemoved){const a=re[s.eventName];let h;a&&(h=a[s.capture?le:ue]);const w=h&&s.target[h];if(w)for(let C=0;C<w.length;C++)if(w[C]===s){w.splice(C,1),s.isRemoved=!0,0===w.length&&(s.allRemoved=!0,s.target[h]=null);break}}if(s.allRemoved)return v.call(s.target,s.eventName,s.capture?Z:D,s.options)}:function(s){return v.call(s.target,s.eventName,s.invoke,s.options)},y=d&&d.diff?d.diff:function(s,a){const h=typeof a;return"function"===h&&s.callback===a||"object"===h&&s.originalDelegate===a},P=Zone[x("UNPATCHED_EVENTS")],Q=e[x("PASSIVE_EVENTS")],l=function(s,a,h,w,C=!1,k=!1){return function(){const b=this||e;let O=arguments[0];d&&d.transferEventName&&(O=d.transferEventName(O));let A=arguments[1];if(!A)return s.apply(this,arguments);if(Ce&&"uncaughtException"===O)return s.apply(this,arguments);let F=!1;if("function"!=typeof A){if(!A.handleEvent)return s.apply(this,arguments);F=!0}if(B&&!B(s,A,b,arguments))return;const te=Ee&&!!Q&&-1!==Q.indexOf(O),ae=de(arguments[2],te);if(P)for(let pe=0;pe<P.length;pe++)if(O===P[pe])return te?s.call(b,O,A,ae):s.apply(this,arguments);const Be=!!ae&&("boolean"==typeof ae||ae.capture),it=!(!ae||"object"!=typeof ae)&&ae.once,xt=Zone.current;let ze=re[O];ze||(et(O,$),ze=re[O]);const ct=ze[Be?le:ue];let Ne,ke=b[ct],at=!1;if(ke){if(at=!0,j)for(let pe=0;pe<ke.length;pe++)if(y(ke[pe],A))return}else ke=b[ct]=[];const lt=b.constructor.name,ut=Je[lt];ut&&(Ne=ut[O]),Ne||(Ne=lt+a+($?$(O):O)),H.options=ae,it&&(H.options.once=!1),H.target=b,H.capture=Be,H.eventName=O,H.isExisting=at;const we=L?gt:void 0;we&&(we.taskData=H);const _e=xt.scheduleEventTask(Ne,A,we,h,w);return H.target=null,we&&(we.taskData=null),it&&(ae.once=!0),!Ee&&"boolean"==typeof _e.options||(_e.options=ae),_e.target=b,_e.capture=Be,_e.eventName=O,F&&(_e.originalDelegate=A),k?ke.unshift(_e):ke.push(_e),C?b:void 0}};return S[r]=l(K,g,p,t,Y),ee&&(S.prependListener=l(ee,".prependListener:",function(s){return ee.call(H.target,H.eventName,s.invoke,H.options)},t,Y,!0)),S[c]=function(){const s=this||e;let a=arguments[0];d&&d.transferEventName&&(a=d.transferEventName(a));const h=arguments[2],w=!!h&&("boolean"==typeof h||h.capture),C=arguments[1];if(!C)return v.apply(this,arguments);if(B&&!B(v,C,s,arguments))return;const k=re[a];let b;k&&(b=k[w?le:ue]);const O=b&&s[b];if(O)for(let A=0;A<O.length;A++){const F=O[A];if(y(F,C))return O.splice(A,1),F.isRemoved=!0,0===O.length&&(F.allRemoved=!0,s[b]=null,"string"==typeof a)&&(s[ve+"ON_PROPERTY"+a]=null),F.zone.cancelTask(F),Y?s:void 0}return v.apply(this,arguments)},S[u]=function(){const s=this||e;let a=arguments[0];d&&d.transferEventName&&(a=d.transferEventName(a));const h=[],w=tt(s,$?$(a):a);for(let C=0;C<w.length;C++){const k=w[C];h.push(k.originalDelegate?k.originalDelegate:k.callback)}return h},S[f]=function(){const s=this||e;let a=arguments[0];if(a){d&&d.transferEventName&&(a=d.transferEventName(a));const h=re[a];if(h){const k=s[h[ue]],b=s[h[le]];if(k){const O=k.slice();for(let A=0;A<O.length;A++){const F=O[A];this[c].call(this,a,F.originalDelegate?F.originalDelegate:F.callback,F.options)}}if(b){const O=b.slice();for(let A=0;A<O.length;A++){const F=O[A];this[c].call(this,a,F.originalDelegate?F.originalDelegate:F.callback,F.options)}}}}else{const h=Object.keys(s);for(let w=0;w<h.length;w++){const k=Qe.exec(h[w]);let b=k&&k[1];b&&"removeListener"!==b&&this[f].call(this,b)}this[f].call(this,"removeListener")}if(Y)return this},he(S[r],K),he(S[c],v),R&&he(S[f],R),I&&he(S[u],I),!0}let V=[];for(let E=0;E<n.length;E++)V[E]=z(n[E],i);return V}function tt(e,n){if(!n){const u=[];for(let f in e){const _=Qe.exec(f);let g=_&&_[1];if(g&&(!n||g===n)){const T=e[f];if(T)for(let m=0;m<T.length;m++)u.push(T[m])}}return u}let i=re[n];i||(et(n),i=re[n]);const r=e[i[ue]],c=e[i[le]];return r?c?r.concat(c):r.slice():c?c.slice():[]}function vt(e,n){const i=e.Event;i&&i.prototype&&n.patchMethod(i.prototype,"stopImmediatePropagation",r=>function(c,u){c[Ve]=!0,r&&r.apply(c,u)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function bt(e,n,i,r,c){const u=Zone.__symbol__(r);if(n[u])return;const f=n[u]=n[r];n[r]=function(_,g,T){return g&&g.prototype&&c.forEach(function(m){const N=`${i}.${r}::`+m,D=g.prototype;if(D.hasOwnProperty(m)){const Z=e.ObjectGetOwnPropertyDescriptor(D,m);Z&&Z.value?(Z.value=e.wrapWithCurrentZone(Z.value,N),e._redefineProperty(g.prototype,m,Z)):D[m]&&(D[m]=e.wrapWithCurrentZone(D[m],N))}else D[m]&&(D[m]=e.wrapWithCurrentZone(D[m],N))}),f.call(n,_,g,T)},e.attachOriginToPatched(n[r],f)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ge=["absolutedeviceorientation","afterinput","afterprint","appinstalled","beforeinstallprompt","beforeprint","beforeunload","devicelight","devicemotion","deviceorientation","deviceorientationabsolute","deviceproximity","hashchange","languagechange","message","mozbeforepaint","offline","online","paint","pageshow","pagehide","popstate","rejectionhandled","storage","unhandledrejection","unload","userproximity","vrdisplayconnected","vrdisplaydisconnected","vrdisplaypresentchange"],Ct=["encrypted","waitingforkey","msneedkey","mozinterruptbegin","mozinterruptend"],nt=["load"],rt=["blur","error","focus","load","resize","scroll","messageerror"],Zt=["bounce","finish","start"],ot=["loadstart","progress","abort","error","load","progress","timeout","loadend","readystatechange"],Te=["upgradeneeded","complete","abort","success","error","blocked","versionchange","close"],Mt=["close","error","open","message"],Lt=["error","message"],ye=["abort","animationcancel","animationend","animationiteration","auxclick","beforeinput","blur","cancel","canplay","canplaythrough","change","compositionstart","compositionupdate","compositionend","cuechange","click","close","contextmenu","curechange","dblclick","drag","dragend","dragenter","dragexit","dragleave","dragover","drop","durationchange","emptied","ended","error","focus","focusin","focusout","gotpointercapture","input","invalid","keydown","keypress","keyup","load","loadstart","loadeddata","loadedmetadata","lostpointercapture","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","mousewheel","orientationchange","pause","play","playing","pointercancel","pointerdown","pointerenter","pointerleave","pointerlockchange","mozpointerlockchange","webkitpointerlockerchange","pointerlockerror","mozpointerlockerror","webkitpointerlockerror","pointermove","pointout","pointerover","pointerup","progress","ratechange","reset","resize","scroll","seeked","seeking","select","selectionchange","selectstart","show","sort","stalled","submit","suspend","timeupdate","volumechange","touchcancel","touchmove","touchstart","touchend","transitioncancel","transitionend","waiting","wheel"].concat(["webglcontextrestored","webglcontextlost","webglcontextcreationerror"],["autocomplete","autocompleteerror"],["toggle"],["afterscriptexecute","beforescriptexecute","DOMContentLoaded","freeze","fullscreenchange","mozfullscreenchange","webkitfullscreenchange","msfullscreenchange","fullscreenerror","mozfullscreenerror","webkitfullscreenerror","msfullscreenerror","readystatechange","visibilitychange","resume"],Ge,["beforecopy","beforecut","beforepaste","copy","cut","paste","dragstart","loadend","animationstart","search","transitionrun","transitionstart","webkitanimationend","webkitanimationiteration","webkitanimationstart","webkittransitionend"],["activate","afterupdate","ariarequest","beforeactivate","beforedeactivate","beforeeditfocus","beforeupdate","cellchange","controlselect","dataavailable","datasetchanged","datasetcomplete","errorupdate","filterchange","layoutcomplete","losecapture","move","moveend","movestart","propertychange","resizeend","resizestart","rowenter","rowexit","rowsdelete","rowsinserted","command","compassneedscalibration","deactivate","help","mscontentzoom","msmanipulationstatechanged","msgesturechange","msgesturedoubletap","msgestureend","msgesturehold","msgesturestart","msgesturetap","msgotpointercapture","msinertiastart","mslostpointercapture","mspointercancel","mspointerdown","mspointerenter","mspointerhover","mspointerleave","mspointermove","mspointerout","mspointerover","mspointerup","pointerout","mssitemodejumplistitemremoved","msthumbnailclick","stop","storagecommit"]);function st(e,n,i){if(!i||0===i.length)return n;const r=i.filter(u=>u.target===e);if(!r||0===r.length)return n;const c=r[0].ignoreProperties;return n.filter(u=>-1===c.indexOf(u))}function W(e,n,i,r){e&&$e(e,st(e,n,i),r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
Zone.__load_patch("util",(e,n,i)=>{i.patchOnProperties=$e,i.patchMethod=fe,i.bindArguments=je,i.patchMacroTask=Et;const r=n.__symbol__("BLACK_LISTED_EVENTS"),c=n.__symbol__("UNPATCHED_EVENTS");e[c]&&(e[r]=e[c]),e[r]&&(n[r]=n[c]=e[r]),i.patchEventPrototype=vt,i.patchEventTarget=kt,i.isIEOrEdge=yt,i.ObjectDefineProperty=ne,i.ObjectGetOwnPropertyDescriptor=X,i.ObjectCreate=ht,i.ArraySlice=dt,i.patchClass=be,i.wrapWithCurrentZone=Ie,i.filterProperties=st,i.attachOriginToPatched=he,i._redefineProperty=Object.defineProperty,i.patchCallbacks=bt,i.getGlobalObjects=()=>({globalSources:Je,zoneSymbolEventNames:re,eventNames:ye,isBrowser:Ae,isMix:qe,isNode:Ce,TRUE_STR:le,FALSE_STR:ue,ZONE_SYMBOL_PREFIX:ve,ADD_EVENT_LISTENER_STR:Se,REMOVE_EVENT_LISTENER_STR:Ze})});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const De=x("zoneTask");function ge(e,n,i,r){let c=null,u=null;i+=r;const f={};function _(T){const m=T.data;return m.args[0]=function(){return T.invoke.apply(this,arguments)},m.handleId=c.apply(e,m.args),T}function g(T){return u.call(e,T.data.handleId)}c=fe(e,n+=r,T=>function(m,N){if("function"==typeof N[0]){const D={isPeriodic:"Interval"===r,delay:"Timeout"===r||"Interval"===r?N[1]||0:void 0,args:N},Z=N[0];N[0]=function(){try{return Z.apply(this,arguments)}finally{D.isPeriodic||("number"==typeof D.handleId?delete f[D.handleId]:D.handleId&&(D.handleId[De]=null))}};const z=He(n,N[0],D,_,g);if(!z)return z;const V=z.data.handleId;return"number"==typeof V?f[V]=z:V&&(V[De]=z),V&&V.ref&&V.unref&&"function"==typeof V.ref&&"function"==typeof V.unref&&(z.ref=V.ref.bind(V),z.unref=V.unref.bind(V)),"number"==typeof V||V?V:z}return T.apply(e,N)}),u=fe(e,i,T=>function(m,N){const D=N[0];let Z;"number"==typeof D?Z=f[D]:(Z=D&&D[De],Z||(Z=D)),Z&&"string"==typeof Z.type?"notScheduled"!==Z.state&&(Z.cancelFn&&Z.data.isPeriodic||0===Z.runCount)&&("number"==typeof D?delete f[D]:D&&(D[De]=null),Z.zone.cancelTask(Z)):T.apply(e,N)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
Zone.__load_patch("legacy",e=>{const n=e[Zone.__symbol__("legacyPatch")];n&&n()}),Zone.__load_patch("queueMicrotask",(e,n,i)=>{i.patchMethod(e,"queueMicrotask",r=>function(c,u){n.current.scheduleMicroTask("queueMicrotask",u[0])})}),Zone.__load_patch("timers",e=>{const n="set",i="clear";ge(e,n,i,"Timeout"),ge(e,n,i,"Interval"),ge(e,n,i,"Immediate")}),Zone.__load_patch("requestAnimationFrame",e=>{ge(e,"request","cancel","AnimationFrame"),ge(e,"mozRequest","mozCancel","AnimationFrame"),ge(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(e,n)=>{const i=["alert","prompt","confirm"];for(let r=0;r<i.length;r++)fe(e,i[r],(u,f,_)=>function(g,T){return n.current.run(u,e,T,_)})}),Zone.__load_patch("EventTarget",(e,n,i)=>{(function(e,n){n.patchEventPrototype(e,n)})(e,i),
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(e,n){if(Zone[n.symbol("patchEventTarget")])return;const{eventNames:i,zoneSymbolEventNames:r,TRUE_STR:c,FALSE_STR:u,ZONE_SYMBOL_PREFIX:f}=n.getGlobalObjects();for(let g=0;g<i.length;g++){const T=i[g],D=f+(T+u),Z=f+(T+c);r[T]={},r[T][u]=D,r[T][c]=Z}const _=e.EventTarget;_&&_.prototype&&n.patchEventTarget(e,[_&&_.prototype])}(e,i);const r=e.XMLHttpRequestEventTarget;r&&r.prototype&&i.patchEventTarget(e,[r.prototype])}),Zone.__load_patch("MutationObserver",(e,n,i)=>{be("MutationObserver"),be("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(e,n,i)=>{be("IntersectionObserver")}),Zone.__load_patch("FileReader",(e,n,i)=>{be("FileReader")}),Zone.__load_patch("on_property",(e,n,i)=>{!function(e,n){if(Ce&&!qe||Zone[e.symbol("patchEvents")])return;const i="undefined"!=typeof WebSocket,r=n.__Zone_ignore_on_properties;if(Ae){const f=window,_=function(){try{const e=me.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch(e){}return!1}()?[{target:f,ignoreProperties:["error"]}]:[];W(f,ye.concat(["messageerror"]),r&&r.concat(_),Pe(f)),W(Document.prototype,ye,r),void 0!==f.SVGElement&&W(f.SVGElement.prototype,ye,r),W(Element.prototype,ye,r),W(HTMLElement.prototype,ye,r),W(HTMLMediaElement.prototype,Ct,r),W(HTMLFrameSetElement.prototype,Ge.concat(rt),r),W(HTMLBodyElement.prototype,Ge.concat(rt),r),W(HTMLFrameElement.prototype,nt,r),W(HTMLIFrameElement.prototype,nt,r);const g=f.HTMLMarqueeElement;g&&W(g.prototype,Zt,r);const T=f.Worker;T&&W(T.prototype,Lt,r)}const c=n.XMLHttpRequest;c&&W(c.prototype,ot,r);const u=n.XMLHttpRequestEventTarget;u&&W(u&&u.prototype,ot,r),"undefined"!=typeof IDBIndex&&(W(IDBIndex.prototype,Te,r),W(IDBRequest.prototype,Te,r),W(IDBOpenDBRequest.prototype,Te,r),W(IDBDatabase.prototype,Te,r),W(IDBTransaction.prototype,Te,r),W(IDBCursor.prototype,Te,r)),i&&W(WebSocket.prototype,Mt,r)}(i,e)}),Zone.__load_patch("customElements",(e,n,i)=>{!function(e,n){const{isBrowser:i,isMix:r}=n.getGlobalObjects();(i||r)&&e.customElements&&"customElements"in e&&n.patchCallbacks(n,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,i)}),Zone.__load_patch("XHR",(e,n)=>{!function(T){const m=T.XMLHttpRequest;if(!m)return;const N=m.prototype;let Z=N[Me],z=N[Le];if(!Z){const v=T.XMLHttpRequestEventTarget;if(v){const I=v.prototype;Z=I[Me],z=I[Le]}}const V="readystatechange",E="scheduled";function d(v){const I=v.data,R=I.target;R[u]=!1,R[_]=!1;const ee=R[c];Z||(Z=R[Me],z=R[Le]),ee&&z.call(R,V,ee);const de=R[c]=()=>{if(R.readyState===R.DONE)if(!I.aborted&&R[u]&&v.state===E){const oe=R[n.__symbol__("loadfalse")];if(0!==R.status&&oe&&oe.length>0){const ce=v.invoke;v.invoke=function(){const U=R[n.__symbol__("loadfalse")];for(let M=0;M<U.length;M++)U[M]===v&&U.splice(M,1);!I.aborted&&v.state===E&&ce.call(v)},oe.push(v)}else v.invoke()}else!I.aborted&&!1===R[u]&&(R[_]=!0)};return Z.call(R,V,de),R[i]||(R[i]=v),H.apply(R,I.args),R[u]=!0,v}function L(){}function B(v){const I=v.data;return I.aborted=!0,K.apply(I.target,I.args)}const j=fe(N,"open",()=>function(v,I){return v[r]=0==I[2],v[f]=I[1],j.apply(v,I)}),S=x("fetchTaskAborting"),$=x("fetchTaskScheduling"),H=fe(N,"send",()=>function(v,I){if(!0===n.current[$]||v[r])return H.apply(v,I);{const R={target:v,url:v[f],isPeriodic:!1,args:I,aborted:!1},ee=He("XMLHttpRequest.send",L,R,d,B);v&&!0===v[_]&&!R.aborted&&ee.state===E&&ee.invoke()}}),K=fe(N,"abort",()=>function(v,I){const R=function(v){return v[i]}(v);if(R&&"string"==typeof R.type){if(null==R.cancelFn||R.data&&R.data.aborted)return;R.zone.cancelTask(R)}else if(!0===n.current[S])return K.apply(v,I)})}(e);const i=x("xhrTask"),r=x("xhrSync"),c=x("xhrListener"),u=x("xhrScheduled"),f=x("xhrURL"),_=x("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&function(e,n){const i=e.constructor.name;for(let r=0;r<n.length;r++){const c=n[r],u=e[c];if(u){if(!Fe(X(e,c)))continue;e[c]=(_=>{const g=function(){return _.apply(this,je(arguments,i+"."+c))};return he(g,_),g})(u)}}}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(e,n)=>{function i(r){return function(c){tt(e,r).forEach(f=>{const _=e.PromiseRejectionEvent;if(_){const g=new _(r,{promise:c.promise,reason:c.rejection});f.invoke(g)}})}}e.PromiseRejectionEvent&&(n[x("unhandledPromiseRejectionHandler")]=i("unhandledrejection"),n[x("rejectionHandledHandler")]=i("rejectionhandled"))})}},Ue={};function se(q){var X=Ue[q];if(void 0!==X)return X.exports;var ne=Ue[q]={exports:{}};return ft[q](ne,ne.exports,se),ne.exports}se.n=q=>{var X=q&&q.__esModule?()=>q.default:()=>q;return se.d(X,{a:X}),X},se.d=(q,X)=>{for(var ne in X)se.o(X,ne)&&!se.o(q,ne)&&Object.defineProperty(q,ne,{enumerable:!0,get:X[ne]})},se.o=(q,X)=>Object.prototype.hasOwnProperty.call(q,X),(()=>{"use strict";se(761),se(640)})()})();
//# sourceMappingURL=polyfills.js.map
(()=>{"use strict";function dt(t){return"function"==typeof t}let Ve=!1;const be={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){const e=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+e.stack)}else Ve&&console.log("RxJS: Back to a better error behavior. Thank you. <3");Ve=t},get useDeprecatedSynchronousErrorHandling(){return Ve}};function Gt(t){setTimeout(()=>{throw t},0)}const rs={closed:!0,next(t){},error(t){if(be.useDeprecatedSynchronousErrorHandling)throw t;Gt(t)},complete(){}},D_=Array.isArray||(t=>t&&"number"==typeof t.length);function xc(t){return null!==t&&"object"==typeof t}const os=(()=>{function t(e){return Error.call(this),this.message=e?`${e.length} errors occurred during unsubscription:\n${e.map((n,r)=>`${r+1}) ${n.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=e,this}return t.prototype=Object.create(Error.prototype),t})();class ee{constructor(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._ctorUnsubscribe=!0,this._unsubscribe=e)}unsubscribe(){let e;if(this.closed)return;let{_parentOrParents:n,_ctorUnsubscribe:r,_unsubscribe:o,_subscriptions:s}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof ee)n.remove(this);else if(null!==n)for(let i=0;i<n.length;++i)n[i].remove(this);if(dt(o)){r&&(this._unsubscribe=void 0);try{o.call(this)}catch(i){e=i instanceof os?Ac(i.errors):[i]}}if(D_(s)){let i=-1,a=s.length;for(;++i<a;){const u=s[i];if(xc(u))try{u.unsubscribe()}catch(l){e=e||[],l instanceof os?e=e.concat(Ac(l.errors)):e.push(l)}}}if(e)throw new os(e)}add(e){let n=e;if(!e)return ee.EMPTY;switch(typeof e){case"function":n=new ee(e);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof ee)){const s=n;n=new ee,n._subscriptions=[s]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}let{_parentOrParents:r}=n;if(null===r)n._parentOrParents=this;else if(r instanceof ee){if(r===this)return n;n._parentOrParents=[r,this]}else{if(-1!==r.indexOf(this))return n;r.push(this)}const o=this._subscriptions;return null===o?this._subscriptions=[n]:o.push(n),n}remove(e){const n=this._subscriptions;if(n){const r=n.indexOf(e);-1!==r&&n.splice(r,1)}}}var t;function Ac(t){return t.reduce((e,n)=>e.concat(n instanceof os?n.errors:n),[])}ee.EMPTY=((t=new ee).closed=!0,t);const ss="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random();class Se extends ee{constructor(e,n,r){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=rs;break;case 1:if(!e){this.destination=rs;break}if("object"==typeof e){e instanceof Se?(this.syncErrorThrowable=e.syncErrorThrowable,this.destination=e,e.add(this)):(this.syncErrorThrowable=!0,this.destination=new Nc(this,e));break}default:this.syncErrorThrowable=!0,this.destination=new Nc(this,e,n,r)}}[ss](){return this}static create(e,n,r){const o=new Se(e,n,r);return o.syncErrorThrowable=!1,o}next(e){this.isStopped||this._next(e)}error(e){this.isStopped||(this.isStopped=!0,this._error(e))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(e){this.destination.next(e)}_error(e){this.destination.error(e),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:e}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this}}class Nc extends Se{constructor(e,n,r,o){super(),this._parentSubscriber=e;let s,i=this;dt(n)?s=n:n&&(s=n.next,r=n.error,o=n.complete,n!==rs&&(i=Object.create(n),dt(i.unsubscribe)&&this.add(i.unsubscribe.bind(i)),i.unsubscribe=this.unsubscribe.bind(this))),this._context=i,this._next=s,this._error=r,this._complete=o}next(e){if(!this.isStopped&&this._next){const{_parentSubscriber:n}=this;be.useDeprecatedSynchronousErrorHandling&&n.syncErrorThrowable?this.__tryOrSetError(n,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}}error(e){if(!this.isStopped){const{_parentSubscriber:n}=this,{useDeprecatedSynchronousErrorHandling:r}=be;if(this._error)r&&n.syncErrorThrowable?(this.__tryOrSetError(n,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(n.syncErrorThrowable)r?(n.syncErrorValue=e,n.syncErrorThrown=!0):Gt(e),this.unsubscribe();else{if(this.unsubscribe(),r)throw e;Gt(e)}}}complete(){if(!this.isStopped){const{_parentSubscriber:e}=this;if(this._complete){const n=()=>this._complete.call(this._context);be.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(e,n){try{e.call(this._context,n)}catch(r){if(this.unsubscribe(),be.useDeprecatedSynchronousErrorHandling)throw r;Gt(r)}}__tryOrSetError(e,n,r){if(!be.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{n.call(this._context,r)}catch(o){return be.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=o,e.syncErrorThrown=!0,!0):(Gt(o),!0)}return!1}_unsubscribe(){const{_parentSubscriber:e}=this;this._context=null,this._parentSubscriber=null,e.unsubscribe()}}const qr="function"==typeof Symbol&&Symbol.observable||"@@observable";function Rc(t){return t}let ye=(()=>{class t{constructor(n){this._isScalar=!1,n&&(this._subscribe=n)}lift(n){const r=new t;return r.source=this,r.operator=n,r}subscribe(n,r,o){const{operator:s}=this,i=function(t,e,n){if(t){if(t instanceof Se)return t;if(t[ss])return t[ss]()}return t||e||n?new Se(t,e,n):new Se(rs)}(n,r,o);if(i.add(s?s.call(i,this.source):this.source||be.useDeprecatedSynchronousErrorHandling&&!i.syncErrorThrowable?this._subscribe(i):this._trySubscribe(i)),be.useDeprecatedSynchronousErrorHandling&&i.syncErrorThrowable&&(i.syncErrorThrowable=!1,i.syncErrorThrown))throw i.syncErrorValue;return i}_trySubscribe(n){try{return this._subscribe(n)}catch(r){be.useDeprecatedSynchronousErrorHandling&&(n.syncErrorThrown=!0,n.syncErrorValue=r),function(t){for(;t;){const{closed:e,destination:n,isStopped:r}=t;if(e||r)return!1;t=n&&n instanceof Se?n:null}return!0}(n)?n.error(r):console.warn(r)}}forEach(n,r){return new(r=Fc(r))((o,s)=>{let i;i=this.subscribe(a=>{try{n(a)}catch(u){s(u),i&&i.unsubscribe()}},s,o)})}_subscribe(n){const{source:r}=this;return r&&r.subscribe(n)}[qr](){return this}pipe(...n){return 0===n.length?this:function(t){return 0===t.length?Rc:1===t.length?t[0]:function(n){return t.reduce((r,o)=>o(r),n)}}(n)(this)}toPromise(n){return new(n=Fc(n))((r,o)=>{let s;this.subscribe(i=>s=i,i=>o(i),()=>r(s))})}}return t.create=e=>new t(e),t})();function Fc(t){if(t||(t=be.Promise||Promise),!t)throw new Error("no Promise impl found");return t}const Un=(()=>{function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t})();class Oc extends ee{constructor(e,n){super(),this.subject=e,this.subscriber=n,this.closed=!1}unsubscribe(){if(this.closed)return;this.closed=!0;const e=this.subject,n=e.observers;if(this.subject=null,!n||0===n.length||e.isStopped||e.closed)return;const r=n.indexOf(this.subscriber);-1!==r&&n.splice(r,1)}}class kc extends Se{constructor(e){super(e),this.destination=e}}let is=(()=>{class t extends ye{constructor(){super(),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}[ss](){return new kc(this)}lift(n){const r=new Lc(this,this);return r.operator=n,r}next(n){if(this.closed)throw new Un;if(!this.isStopped){const{observers:r}=this,o=r.length,s=r.slice();for(let i=0;i<o;i++)s[i].next(n)}}error(n){if(this.closed)throw new Un;this.hasError=!0,this.thrownError=n,this.isStopped=!0;const{observers:r}=this,o=r.length,s=r.slice();for(let i=0;i<o;i++)s[i].error(n);this.observers.length=0}complete(){if(this.closed)throw new Un;this.isStopped=!0;const{observers:n}=this,r=n.length,o=n.slice();for(let s=0;s<r;s++)o[s].complete();this.observers.length=0}unsubscribe(){this.isStopped=!0,this.closed=!0,this.observers=null}_trySubscribe(n){if(this.closed)throw new Un;return super._trySubscribe(n)}_subscribe(n){if(this.closed)throw new Un;return this.hasError?(n.error(this.thrownError),ee.EMPTY):this.isStopped?(n.complete(),ee.EMPTY):(this.observers.push(n),new Oc(this,n))}asObservable(){const n=new ye;return n.source=this,n}}return t.create=(e,n)=>new Lc(e,n),t})();class Lc extends is{constructor(e,n){super(),this.destination=e,this.source=n}next(e){const{destination:n}=this;n&&n.next&&n.next(e)}error(e){const{destination:n}=this;n&&n.error&&this.destination.error(e)}complete(){const{destination:e}=this;e&&e.complete&&this.destination.complete()}_subscribe(e){const{source:n}=this;return n?this.source.subscribe(e):ee.EMPTY}}function Vc(t){return t&&"function"==typeof t.schedule}function zr(t,e){return function(r){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return r.lift(new b_(t,e))}}class b_{constructor(e,n){this.project=e,this.thisArg=n}call(e,n){return n.subscribe(new w_(e,this.project,this.thisArg))}}class w_ extends Se{constructor(e,n,r){super(e),this.project=n,this.count=0,this.thisArg=r||this}_next(e){let n;try{n=this.project.call(this.thisArg,e,this.count++)}catch(r){return void this.destination.error(r)}this.destination.next(n)}}const jc=t=>e=>{for(let n=0,r=t.length;n<r&&!e.closed;n++)e.next(t[n]);e.complete()},as="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator",Bc=t=>t&&"number"==typeof t.length&&"function"!=typeof t;function Hc(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}const $c=t=>{if(t&&"function"==typeof t[qr])return(t=>e=>{const n=t[qr]();if("function"!=typeof n.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return n.subscribe(e)})(t);if(Bc(t))return jc(t);if(Hc(t))return(t=>e=>(t.then(n=>{e.closed||(e.next(n),e.complete())},n=>e.error(n)).then(null,Gt),e))(t);if(t&&"function"==typeof t[as])return(t=>e=>{const n=t[as]();for(;;){let r;try{r=n.next()}catch(o){return e.error(o),e}if(r.done){e.complete();break}if(e.next(r.value),e.closed)break}return"function"==typeof n.return&&e.add(()=>{n.return&&n.return()}),e})(t);{const n=`You provided ${xc(t)?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`;throw new TypeError(n)}};function Qi(t,e){return new ye(n=>{const r=new ee;let o=0;return r.add(e.schedule(function(){o!==t.length?(n.next(t[o++]),n.closed||r.add(this.schedule())):n.complete()})),r})}function Uc(t,e){return e?function(t,e){if(null!=t){if(function(t){return t&&"function"==typeof t[qr]}(t))return function(t,e){return new ye(n=>{const r=new ee;return r.add(e.schedule(()=>{const o=t[qr]();r.add(o.subscribe({next(s){r.add(e.schedule(()=>n.next(s)))},error(s){r.add(e.schedule(()=>n.error(s)))},complete(){r.add(e.schedule(()=>n.complete()))}}))})),r})}(t,e);if(Hc(t))return function(t,e){return new ye(n=>{const r=new ee;return r.add(e.schedule(()=>t.then(o=>{r.add(e.schedule(()=>{n.next(o),r.add(e.schedule(()=>n.complete()))}))},o=>{r.add(e.schedule(()=>n.error(o)))}))),r})}(t,e);if(Bc(t))return Qi(t,e);if(function(t){return t&&"function"==typeof t[as]}(t)||"string"==typeof t)return function(t,e){if(!t)throw new Error("Iterable cannot be null");return new ye(n=>{const r=new ee;let o;return r.add(()=>{o&&"function"==typeof o.return&&o.return()}),r.add(e.schedule(()=>{o=t[as](),r.add(e.schedule(function(){if(n.closed)return;let s,i;try{const a=o.next();s=a.value,i=a.done}catch(a){return void n.error(a)}i?n.complete():(n.next(s),this.schedule())}))})),r})}(t,e)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}(t,e):t instanceof ye?t:new ye($c(t))}class Wc extends Se{constructor(e){super(),this.parent=e}_next(e){this.parent.notifyNext(e)}_error(e){this.parent.notifyError(e),this.unsubscribe()}_complete(){this.parent.notifyComplete(),this.unsubscribe()}}class Gc extends Se{notifyNext(e){this.destination.next(e)}notifyError(e){this.destination.error(e)}notifyComplete(){this.destination.complete()}}function qc(t,e){if(e.closed)return;if(t instanceof ye)return t.subscribe(e);let n;try{n=$c(t)(e)}catch(r){e.error(r)}return n}function zc(t,e,n=Number.POSITIVE_INFINITY){return"function"==typeof e?r=>r.pipe(zc((o,s)=>Uc(t(o,s)).pipe(zr((i,a)=>e(o,i,s,a))),n)):("number"==typeof e&&(n=e),r=>r.lift(new F_(t,n)))}class F_{constructor(e,n=Number.POSITIVE_INFINITY){this.project=e,this.concurrent=n}call(e,n){return n.subscribe(new O_(e,this.project,this.concurrent))}}class O_ extends Gc{constructor(e,n,r=Number.POSITIVE_INFINITY){super(e),this.project=n,this.concurrent=r,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}_next(e){this.active<this.concurrent?this._tryNext(e):this.buffer.push(e)}_tryNext(e){let n;const r=this.index++;try{n=this.project(e,r)}catch(o){return void this.destination.error(o)}this.active++,this._innerSub(n)}_innerSub(e){const n=new Wc(this),r=this.destination;r.add(n);const o=qc(e,n);o!==n&&r.add(o)}_complete(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()}notifyNext(e){this.destination.next(e)}notifyComplete(){const e=this.buffer;this.active--,e.length>0?this._next(e.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()}}function k_(t=Number.POSITIVE_INFINITY){return zc(Rc,t)}function Qc(t,e){return e?Qi(t,e):new ye(jc(t))}function Kc(...t){let e=Number.POSITIVE_INFINITY,n=null,r=t[t.length-1];return Vc(r)?(n=t.pop(),t.length>1&&"number"==typeof t[t.length-1]&&(e=t.pop())):"number"==typeof r&&(e=t.pop()),null===n&&1===t.length&&t[0]instanceof ye?t[0]:k_(e)(Qc(t,n))}function Yc(){return function(e){return e.lift(new L_(e))}}class L_{constructor(e){this.connectable=e}call(e,n){const{connectable:r}=this;r._refCount++;const o=new V_(e,r),s=n.subscribe(o);return o.closed||(o.connection=r.connect()),s}}class V_ extends Se{constructor(e,n){super(e),this.connectable=n}_unsubscribe(){const{connectable:e}=this;if(!e)return void(this.connection=null);this.connectable=null;const n=e._refCount;if(n<=0)return void(this.connection=null);if(e._refCount=n-1,n>1)return void(this.connection=null);const{connection:r}=this,o=e._connection;this.connection=null,o&&(!r||o===r)&&o.unsubscribe()}}class j_ extends ye{constructor(e,n){super(),this.source=e,this.subjectFactory=n,this._refCount=0,this._isComplete=!1}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){const e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}connect(){let e=this._connection;return e||(this._isComplete=!1,e=this._connection=new ee,e.add(this.source.subscribe(new H_(this.getSubject(),this))),e.closed&&(this._connection=null,e=ee.EMPTY)),e}refCount(){return Yc()(this)}}const B_=(()=>{const t=j_.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:t._subscribe},_isComplete:{value:t._isComplete,writable:!0},getSubject:{value:t.getSubject},connect:{value:t.connect},refCount:{value:t.refCount}}})();class H_ extends kc{constructor(e,n){super(e),this.connectable=n}_error(e){this._unsubscribe(),super._error(e)}_complete(){this.connectable._isComplete=!0,this._unsubscribe(),super._complete()}_unsubscribe(){const e=this.connectable;if(e){this.connectable=null;const n=e._connection;e._refCount=0,e._subject=null,e._connection=null,n&&n.unsubscribe()}}}function G_(){return new is}
/**
     * @license Angular v12.2.2
     * (c) 2010-2021 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function $(t){for(let e in t)if(t[e]===$)return e;throw Error("Could not find renamed property on target object.")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function O(t){if("string"==typeof t)return t;if(Array.isArray(t))return"["+t.map(O).join(", ")+"]";if(null==t)return""+t;if(t.overriddenName)return`${t.overriddenName}`;if(t.name)return`${t.name}`;const e=t.toString();if(null==e)return""+e;const n=e.indexOf("\n");return-1===n?e:e.substring(0,n)}function Yi(t,e){return null==t||""===t?null===e?"":e:null==e||""===e?t:t+" "+e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const z_=$({__forward_ref__:$});function Zi(t){return t.__forward_ref__=Zi,t.toString=function(){return O(this())},t}function w(t){return function(t){return"function"==typeof t&&t.hasOwnProperty(z_)&&t.__forward_ref__===Zi}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t)?t():t}class bn extends Error{constructor(e,n){super(function(t,e){return`${t?`NG0${t}: `:""}${e}`}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e,n)),this.code=e}}function R(t){return"string"==typeof t?t:null==t?"":String(t)}function xe(t){return"function"==typeof t?t.name||t.toString():"object"==typeof t&&null!=t&&"function"==typeof t.type?t.type.name||t.type.toString():R(t)}function us(t,e){const n=e?` in ${e}`:"";throw new bn("201",`No provider for ${xe(t)} found${n}`)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function We(t,e){null==t&&function(t,e,n,r){throw new Error(`ASSERTION ERROR: ${t}`+(null==r?"":` [Expected=> ${n} ${r} ${e} <=Actual]`))}(e,t,null,"!=")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function q(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function an(t){return{providers:t.providers||[],imports:t.imports||[]}}function zt(t){return Jc(t,ls)||Jc(t,ed)}function Jc(t,e){return t.hasOwnProperty(e)?t[e]:null}function Xc(t){return t&&(t.hasOwnProperty(Xi)||t.hasOwnProperty(eD))?t[Xi]:null}const ls=$({\u0275prov:$}),Xi=$({\u0275inj:$}),ed=$({ngInjectableDef:$}),eD=$({ngInjectorDef:$});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var T=(()=>((T=T||{})[T.Default=0]="Default",T[T.Host=1]="Host",T[T.Self=2]="Self",T[T.SkipSelf=4]="SkipSelf",T[T.Optional=8]="Optional",T))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let ea;function un(t){const e=ea;return ea=t,e}function td(t,e,n){const r=zt(t);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&T.Optional?null:void 0!==e?e:void us(O(t),"Injector")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function ln(t){return{toString:t}.toString()}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var Ze=(()=>((Ze=Ze||{})[Ze.OnPush=0]="OnPush",Ze[Ze.Default=1]="Default",Ze))(),de=(()=>((de=de||{})[de.Emulated=0]="Emulated",de[de.None=2]="None",de[de.ShadowDom=3]="ShadowDom",de))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const nD="undefined"!=typeof globalThis&&globalThis,rD="undefined"!=typeof window&&window,oD="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,sD="undefined"!=typeof global&&global,W=nD||sD||rD||oD,Wn={},z=[],cs=$({\u0275cmp:$}),ta=$({\u0275dir:$}),na=$({\u0275pipe:$}),nd=$({\u0275mod:$}),iD=$({\u0275loc:$}),Qt=$({\u0275fac:$}),Qr=$({__NG_ELEMENT_ID__:$});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let aD=0;function ra(t){return ln(()=>{const n={},r={type:t.type,providersResolver:null,decls:t.decls,vars:t.vars,factory:null,template:t.template||null,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputs:null,outputs:null,exportAs:t.exportAs||null,onPush:t.changeDetection===Ze.OnPush,directiveDefs:null,pipeDefs:null,selectors:t.selectors||z,viewQuery:t.viewQuery||null,features:t.features||null,data:t.data||{},encapsulation:t.encapsulation||de.Emulated,id:"c",styles:t.styles||z,_:null,setInput:null,schemas:t.schemas||null,tView:null},o=t.directives,s=t.features,i=t.pipes;return r.id+=aD++,r.inputs=id(t.inputs,n),r.outputs=id(t.outputs),s&&s.forEach(a=>a(r)),r.directiveDefs=o?()=>("function"==typeof o?o():o).map(rd):null,r.pipeDefs=i?()=>("function"==typeof i?i():i).map(od):null,r})}function rd(t){return Ae(t)||function(t){return t[ta]||null}(t)}function od(t){return function(t){return t[na]||null}(t)}const sd={};function Gn(t){return ln(()=>{const e={type:t.type,bootstrap:t.bootstrap||z,declarations:t.declarations||z,imports:t.imports||z,exports:t.exports||z,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null};return null!=t.id&&(sd[t.id]=t.type),e})}function id(t,e){if(null==t)return Wn;const n={};for(const r in t)if(t.hasOwnProperty(r)){let o=t[r],s=o;Array.isArray(o)&&(s=o[1],o=o[0]),n[o]=r,e&&(e[o]=s)}return n}const Je=ra;function Ae(t){return t[cs]||null}function Xe(t,e){const n=t[nd]||null;if(!n&&!0===e)throw new Error(`Type ${O(t)} does not have '\u0275mod' property.`);return n}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const P=11,Y=20;
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function At(t){return Array.isArray(t)&&"object"==typeof t[1]}function ht(t){return Array.isArray(t)&&!0===t[1]}function ia(t){return 0!=(8&t.flags)}function ps(t){return 2==(2&t.flags)}function gs(t){return 1==(1&t.flags)}function pt(t){return null!==t.template}function pD(t){return 0!=(512&t[2])}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Mn(t,e){return t.hasOwnProperty(Qt)?t[Qt]:null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class ua{constructor(e,n,r){this.previousValue=e,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ud(t){return t.type.prototype.ngOnChanges&&(t.setInput=_D),yD}function yD(){const t=cd(this),e=null==t?void 0:t.current;if(e){const n=t.previous;if(n===Wn)t.previous=e;else for(let r in e)n[r]=e[r];t.current=null,this.ngOnChanges(e)}}function _D(t,e,n,r){const o=cd(t)||function(t,e){return t[ld]=e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t,{previous:Wn,current:null}),s=o.current||(o.current={}),i=o.previous,a=this.declaredInputs[n],u=i[a];s[a]=new ua(u&&u.currentValue,e,i===Wn),t[r]=e}const ld="__ngSimpleChanges__";function cd(t){return t[ld]||null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let ca;function re(t){return!!t.listen}const hd={createRenderer:(t,e)=>void 0!==ca?ca:"undefined"!=typeof document?document:void 0};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ue(t){for(;Array.isArray(t);)t=t[0];return t}function nt(t,e){return ue(e[t.index])}function fa(t,e){return t.data[e]}function qe(t,e){const n=e[t];return At(n)?n:n[0]}function ha(t){return 128==(128&t[2])}function dn(t,e){return null==e?null:t[e]}function gd(t){t[18]=0}function pa(t,e){t[5]+=e;let n=t,r=t[3];for(;null!==r&&(1===e&&1===n[5]||-1===e&&0===n[5]);)r[5]+=e,n=r,r=r[3]
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}const S={lFrame:wd(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function md(){return S.bindingsEnabled}function _(){return S.lFrame.lView}function H(){return S.lFrame.tView}function fe(){let t=yd();for(;null!==t&&64===t.type;)t=t.parent;return t}function yd(){return S.lFrame.currentTNode}function Nt(t,e){const n=S.lFrame;n.currentTNode=t,n.isParent=e}function ga(){return S.lFrame.isParent}function ma(){S.lFrame.isParent=!1}function _s(){return S.isInCheckNoChangesMode}function Ds(t){S.isInCheckNoChangesMode=t}function Zn(){return S.lFrame.bindingIndex++}function FD(t,e){const n=S.lFrame;n.bindingIndex=n.bindingRootIndex=t,ya(e)}function ya(t){S.lFrame.currentDirectiveIndex=t}function Da(t){S.lFrame.currentQueryIndex=t}function kD(t){const e=t[1];return 2===e.type?e.declTNode:1===e.type?t[6]:null}function Ed(t,e,n){if(n&T.SkipSelf){let o=e,s=t;for(;o=o.parent,!(null!==o||n&T.Host||(o=kD(s),null===o||(s=s[15],10&o.type))););if(null===o)return!1;e=o,t=s}const r=S.lFrame=bd();return r.currentTNode=e,r.lView=t,!0}function Cs(t){const e=bd(),n=t[1];S.lFrame=e,e.currentTNode=n.firstChild,e.lView=t,e.tView=n,e.contextLView=t,e.bindingIndex=n.bindingStartIndex,e.inI18n=!1}function bd(){const t=S.lFrame,e=null===t?null:t.child;return null===e?wd(t):e}function wd(t){const e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return null!==t&&(t.child=e),e}function vd(){const t=S.lFrame;return S.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}const Id=vd;function Es(){const t=vd();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function Re(){return S.lFrame.selectedIndex}function fn(t){S.lFrame.selectedIndex=t}function bs(t,e){for(let n=e.directiveStart,r=e.directiveEnd;n<r;n++){const s=t.data[n].type.prototype,{ngAfterContentInit:i,ngAfterContentChecked:a,ngAfterViewInit:u,ngAfterViewChecked:l,ngOnDestroy:c}=s;i&&(t.contentHooks||(t.contentHooks=[])).push(-n,i),a&&((t.contentHooks||(t.contentHooks=[])).push(n,a),(t.contentCheckHooks||(t.contentCheckHooks=[])).push(n,a)),u&&(t.viewHooks||(t.viewHooks=[])).push(-n,u),l&&((t.viewHooks||(t.viewHooks=[])).push(n,l),(t.viewCheckHooks||(t.viewCheckHooks=[])).push(n,l)),null!=c&&(t.destroyHooks||(t.destroyHooks=[])).push(n,c)}}function ws(t,e,n){Td(t,e,3,n)}function vs(t,e,n,r){(3&t[2])===n&&Td(t,e,n,r)}function Ca(t,e){let n=t[2];(3&n)===e&&(n&=2047,n+=1,t[2]=n)}function Td(t,e,n,r){const s=null!=r?r:-1,i=e.length-1;let a=0;for(let u=void 0!==r?65535&t[18]:0;u<i;u++)if("number"==typeof e[u+1]){if(a=e[u],null!=r&&a>=r)break}else e[u]<0&&(t[18]+=65536),(a<s||-1==s)&&(GD(t,n,e,u),t[18]=(4294901760&t[18])+u+2),u++}function GD(t,e,n,r){const o=n[r]<0,s=n[r+1],a=t[o?-n[r]:n[r]];if(o){if(t[2]>>11<t[18]>>16&&(3&t[2])===e){t[2]+=2048;try{s.call(a)}finally{}}}else try{s.call(a)}finally{}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Xr{constructor(e,n,r){this.factory=e,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function Is(t,e,n){const r=re(t);let o=0;for(;o<n.length;){const s=n[o];if("number"==typeof s){if(0!==s)break;o++;const i=n[o++],a=n[o++],u=n[o++];r?t.setAttribute(e,a,u,i):e.setAttributeNS(i,a,u)}else{const i=s,a=n[++o];ba(i)?r&&t.setProperty(e,i,a):r?t.setAttribute(e,i,a):e.setAttribute(i,a),o++}}return o}function Md(t){return 3===t||4===t||6===t}function ba(t){return 64===t.charCodeAt(0)}function Ts(t,e){if(null!==e&&0!==e.length)if(null===t||0===t.length)t=e.slice();else{let n=-1;for(let r=0;r<e.length;r++){const o=e[r];"number"==typeof o?n=o:0===n||Sd(t,n,o,null,-1===n||2===n?e[++r]:null)}}return t}function Sd(t,e,n,r,o){let s=0,i=t.length;if(-1===e)i=-1;else for(;s<t.length;){const a=t[s++];if("number"==typeof a){if(a===e){i=-1;break}if(a>e){i=s-1;break}}}for(;s<t.length;){const a=t[s];if("number"==typeof a)break;if(a===n){if(null===r)return void(null!==o&&(t[s+1]=o));if(r===t[s+1])return void(t[s+2]=o)}s++,null!==r&&s++,null!==o&&s++}-1!==i&&(t.splice(i,0,e),s=i+1),t.splice(s++,0,n),null!==r&&t.splice(s++,0,r),null!==o&&t.splice(s++,0,o)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function xd(t){return-1!==t}function Jn(t){return 32767&t}function Xn(t,e){let n=function(t){return t>>16}(t),r=e;for(;n>0;)r=r[15],n--;return r}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let wa=!0;function Ms(t){const e=wa;return wa=t,e}let ZD=0;function to(t,e){const n=Ia(t,e);if(-1!==n)return n;const r=e[1];r.firstCreatePass&&(t.injectorIndex=e.length,va(r.data,t),va(e,null),va(r.blueprint,null));const o=Ss(t,e),s=t.injectorIndex;if(xd(o)){const i=Jn(o),a=Xn(o,e),u=a[1].data;for(let l=0;l<8;l++)e[s+l]=a[i+l]|u[i+l]}return e[s+8]=o,s}function va(t,e){t.push(0,0,0,0,0,0,0,0,e)}function Ia(t,e){return-1===t.injectorIndex||t.parent&&t.parent.injectorIndex===t.injectorIndex||null===e[t.injectorIndex+8]?-1:t.injectorIndex}function Ss(t,e){if(t.parent&&-1!==t.parent.injectorIndex)return t.parent.injectorIndex;let n=0,r=null,o=e;for(;null!==o;){const s=o[1],i=s.type;if(r=2===i?s.declTNode:1===i?o[6]:null,null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function xs(t,e,n){!function(t,e,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(Qr)&&(r=n[Qr]),null==r&&(r=n[Qr]=ZD++);const o=255&r;e.data[t+(o>>5)]|=1<<o}(t,e,n)}function Rd(t,e,n){if(n&T.Optional)return t;us(e,"NodeInjector")}function Pd(t,e,n,r){if(n&T.Optional&&void 0===r&&(r=null),0==(n&(T.Self|T.Host))){const o=t[9],s=un(void 0);try{return o?o.get(e,r,n&T.Optional):td(e,r,n&T.Optional)}finally{un(s)}}return Rd(r,e,n)}function Fd(t,e,n,r=T.Default,o){if(null!==t){const s=function(t){if("string"==typeof t)return t.charCodeAt(0)||0;const e=t.hasOwnProperty(Qr)?t[Qr]:void 0;return"number"==typeof e?e>=0?255&e:eC:e}(n);if("function"==typeof s){if(!Ed(e,t,r))return r&T.Host?Rd(o,n,r):Pd(e,n,r,o);try{const i=s(r);if(null!=i||r&T.Optional)return i;us(n)}finally{Id()}}else if("number"==typeof s){let i=null,a=Ia(t,e),u=-1,l=r&T.Host?e[16][6]:null;for((-1===a||r&T.SkipSelf)&&(u=-1===a?Ss(t,e):e[a+8],-1!==u&&Ld(r,!1)?(i=e[1],a=Jn(u),e=Xn(u,e)):a=-1);-1!==a;){const c=e[1];if(kd(s,a,c.data)){const d=tC(a,e,n,i,r,l);if(d!==Od)return d}u=e[a+8],-1!==u&&Ld(r,e[1].data[a+8]===l)&&kd(s,a,e)?(i=c,a=Jn(u),e=Xn(u,e)):a=-1}}}return Pd(e,n,r,o)}const Od={};function eC(){return new er(fe(),_())}function tC(t,e,n,r,o,s){const i=e[1],a=i.data[t+8],c=function(t,e,n,r,o){const s=t.providerIndexes,i=e.data,a=1048575&s,u=t.directiveStart,c=s>>20,f=o?a+c:t.directiveEnd;for(let h=r?a:a+c;h<f;h++){const p=i[h];if(h<u&&n===p||h>=u&&p.type===n)return h}if(o){const h=i[u];if(h&&pt(h)&&h.type===n)return u}return null}(a,i,n,null==r?ps(a)&&wa:r!=i&&0!=(3&a.type),o&T.Host&&s===a);return null!==c?no(e,i,c,a):Od}function no(t,e,n,r){let o=t[n];const s=e.data;if(function(t){return t instanceof Xr}(o)){const i=o;i.resolving&&function(t,e){throw new bn("200",`Circular dependency in DI detected for ${t}`)}(xe(s[n]));const a=Ms(i.canSeeViewProviders);i.resolving=!0;const u=i.injectImpl?un(i.injectImpl):null;Ed(t,r,T.Default);try{o=t[n]=i.factory(void 0,s,t,r),e.firstCreatePass&&n>=r.directiveStart&&
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function(t,e,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:s}=e.type.prototype;if(r){const i=ud(e);(n.preOrderHooks||(n.preOrderHooks=[])).push(t,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,i)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-t,o),s&&((n.preOrderHooks||(n.preOrderHooks=[])).push(t,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,s))}(n,s[n],e)}finally{null!==u&&un(u),Ms(a),i.resolving=!1,Id()}}return o}function kd(t,e,n){return!!(n[e+(t>>5)]&1<<t)}function Ld(t,e){return!(t&T.Self||t&T.Host&&e)}class er{constructor(e,n){this._tNode=e,this._lView=n}get(e,n){return Fd(this._tNode,this._lView,e,void 0,n)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const nr="__parameters__";function Sn(t,e,n){return ln(()=>{const r=function(t){return function(...n){if(t){const r=t(...n);for(const o in r)this[o]=r[o]}}}(e);function o(...s){if(this instanceof o)return r.apply(this,s),this;const i=new o(...s);return a.annotation=i,a;function a(u,l,c){const d=u.hasOwnProperty(nr)?u[nr]:Object.defineProperty(u,nr,{value:[]})[nr];for(;d.length<=c;)d.push(null);return(d[c]=d[c]||[]).push(i),u}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=t,o.annotationCls=o,o})}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Q{constructor(e,n){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=q({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}toString(){return`InjectionToken ${this._desc}`}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Pt(t,e){t.forEach(n=>Array.isArray(n)?Pt(n,e):e(n))}function Rs(t,e,n){e>=t.length?t.push(n):t.splice(e,0,n)}function xn(t,e){return e>=t.length-1?t.pop():t.splice(e,1)[0]}function pn(t,e){const n=[];for(let r=0;r<t;r++)n.push(e);return n}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const io={},Ra="__NG_DI_FLAG__",sr="ngTempTokenPath",gC=/\n/gm,Pa="__source",Fa=$({provide:String,useValue:$});let ao;function ir(t){const e=ao;return ao=t,e}function yC(t,e=T.Default){if(void 0===ao)throw new Error("inject() must be called from an injection context");return null===ao?td(t,void 0,e):ao.get(t,e&T.Optional?null:void 0,e)}function j(t,e=T.Default){return(ea||yC)(w(t),e)}function An(t){const e=[];for(let n=0;n<t.length;n++){const r=w(t[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let o,s=T.Default;for(let i=0;i<r.length;i++){const a=r[i],u=_C(a);"number"==typeof u?-1===u?o=a.token:s|=u:o=a}e.push(j(o,s))}else e.push(j(r))}return e}function uo(t,e){return t[Ra]=e,t.prototype[Ra]=e,t}function _C(t){return t[Ra]}function Ud(t,e,n,r){const o=t[sr];throw e[Pa]&&o.unshift(e[Pa]),t.message=function(t,e,n,r=null){t=t&&"\n"===t.charAt(0)&&"\u0275"==t.charAt(1)?t.substr(2):t;let o=O(e);if(Array.isArray(e))o=e.map(O).join(" -> ");else if("object"==typeof e){let s=[];for(let i in e)if(e.hasOwnProperty(i)){let a=e[i];s.push(i+":"+("string"==typeof a?JSON.stringify(a):O(a)))}o=`{${s.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${t.replace(gC,"\n  ")}`}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */("\n"+t.message,o,n,r),t.ngTokenPath=o,t[sr]=null,t}const lo=uo(Sn("Inject",t=>({token:t})),-1),Ft=uo(Sn("Optional"),8),Nn=uo(Sn("SkipSelf"),4);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Rn{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}function Ot(t,e){const n=function(t){return t instanceof Rn&&t.getTypeName()||null}(t);if(null!=n&&n!==e){if("ResourceURL"===n&&"URL"===e)return!0;throw new Error(`Required a safe ${e}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const $C=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,UC=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
var K=(()=>((K=K||{})[K.NONE=0]="NONE",K[K.HTML=1]="HTML",K[K.STYLE=2]="STYLE",K[K.SCRIPT=3]="SCRIPT",K[K.URL=4]="URL",K[K.RESOURCE_URL=5]="RESOURCE_URL",K))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function $a(t){const e=function(){const t=_();return t&&t[12]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */();return e?e.sanitize(K.URL,t)||"":Ot(t,"URL")?function(t){return t instanceof Rn?t.changingThisBreaksApplicationSecurity:t}(t):function(t){return(t=String(t)).match($C)||t.match(UC)?t:"unsafe:"+t}(R(t))}const lf="__ngContext__";function ve(t,e){t[lf]=e}function Wa(t){const e=function(t){return t[lf]||null}(t);return e?Array.isArray(e)?e:e.lView:null}function js(t){return t.ngOriginalError}function dE(t,...e){t.error(...e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Pn{constructor(){this._console=console}handleError(e){const n=this._findOriginalError(e),r=this._findContext(e),o=function(t){return t&&t.ngErrorLogger||dE}(e);o(this._console,"ERROR",e),n&&o(this._console,"ORIGINAL ERROR",n),r&&o(this._console,"ERROR CONTEXT",r)}_findContext(e){return e?function(t){return t.ngDebugContext}(e)||this._findContext(js(e)):null}_findOriginalError(e){let n=e&&js(e);for(;n&&js(n);)n=js(n);return n||null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const _f=(()=>("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(W))();function Lt(t){return t instanceof Function?t():t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
var Ke=(()=>((Ke=Ke||{})[Ke.Important=1]="Important",Ke[Ke.DashCase=2]="DashCase",Ke))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function za(t,e){return(void 0)(t,e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function mo(t){const e=t[3];return ht(e)?e[3]:e}function Qa(t){return wf(t[13])}function Ka(t){return wf(t[4])}function wf(t){for(;null!==t&&!ht(t);)t=t[4];return t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function cr(t,e,n,r,o){if(null!=r){let s,i=!1;ht(r)?s=r:At(r)&&(i=!0,r=r[0]);const a=ue(r);0===t&&null!==n?null==o?xf(e,n,a):Fn(e,n,a,o||null,!0):1===t&&null!==n?Fn(e,n,a,o||null,!0):2===t?function(t,e,n){const r=Hs(t,e);r&&function(t,e,n,r){re(t)?t.removeChild(e,n,r):e.removeChild(n)}(t,r,e,n)}(e,a,i):3===t&&e.destroyNode(a),null!=s&&function(t,e,n,r,o){const s=n[7];s!==ue(n)&&cr(e,t,r,s,o);for(let a=10;a<n.length;a++){const u=n[a];yo(u[1],u,t,e,r,s)}}(e,t,s,n,o)}}function Za(t,e,n){return re(t)?t.createElement(e,n):null===n?t.createElement(e):t.createElementNS(n,e)}function If(t,e){const n=t[9],r=n.indexOf(e),o=e[3];1024&e[2]&&(e[2]&=-1025,pa(o,-1)),n.splice(r,1)}function Ja(t,e){if(t.length<=10)return;const n=10+e,r=t[n];if(r){const o=r[17];null!==o&&o!==t&&If(o,r),e>0&&(t[n-1][4]=r[4]);const s=xn(t,10+e);!function(t,e){yo(t,e,e[P],2,null,null),e[0]=null,e[6]=null}(r[1],r);const i=s[19];null!==i&&i.detachView(s[1]),r[3]=null,r[4]=null,r[2]&=-129}return r}function Tf(t,e){if(!(256&e[2])){const n=e[P];re(n)&&n.destroyNode&&yo(t,e,n,3,null,null),function(t){let e=t[13];if(!e)return Xa(t[1],t);for(;e;){let n=null;if(At(e))n=e[13];else{const r=e[10];r&&(n=r)}if(!n){for(;e&&!e[4]&&e!==t;)At(e)&&Xa(e[1],e),e=e[3];null===e&&(e=t),At(e)&&Xa(e[1],e),n=e&&e[4]}e=n}}(e)}}function Xa(t,e){if(!(256&e[2])){e[2]&=-129,e[2]|=256,function(t,e){let n;if(null!=t&&null!=(n=t.destroyHooks))for(let r=0;r<n.length;r+=2){const o=e[n[r]];if(!(o instanceof Xr)){const s=n[r+1];if(Array.isArray(s))for(let i=0;i<s.length;i+=2){const a=o[s[i]],u=s[i+1];try{u.call(a)}finally{}}else try{s.call(o)}finally{}}}}(t,e),function(t,e){const n=t.cleanup,r=e[7];let o=-1;if(null!==n)for(let s=0;s<n.length-1;s+=2)if("string"==typeof n[s]){const i=n[s+1],a="function"==typeof i?i(e):ue(e[i]),u=r[o=n[s+2]],l=n[s+3];"boolean"==typeof l?a.removeEventListener(n[s],u,l):l>=0?r[o=l]():r[o=-l].unsubscribe(),s+=2}else{const i=r[o=n[s+1]];n[s].call(i)}if(null!==r){for(let s=o+1;s<r.length;s++)r[s]();e[7]=null}}(t,e),1===e[1].type&&re(e[P])&&e[P].destroy();const n=e[17];if(null!==n&&ht(e[3])){n!==e[3]&&If(n,e);const r=e[19];null!==r&&r.detachView(t)}}}function Mf(t,e,n){return function(t,e,n){let r=e;for(;null!==r&&40&r.type;)r=(e=r).parent;if(null===r)return n[0];if(2&r.flags){const o=t.data[r.directiveStart].encapsulation;if(o===de.None||o===de.Emulated)return null}return nt(r,n)}(t,e.parent,n)}function Fn(t,e,n,r,o){re(t)?t.insertBefore(e,n,r,o):e.insertBefore(n,r,o)}function xf(t,e,n){re(t)?t.appendChild(e,n):e.appendChild(n)}function Af(t,e,n,r,o){null!==r?Fn(t,e,n,r,o):xf(t,e,n)}function Hs(t,e){return re(t)?t.parentNode(e):e.parentNode}function Nf(t,e,n){return Pf(t,e,n)}let Pf=function(t,e,n){return 40&t.type?nt(t,n):null};function $s(t,e,n,r){const o=Mf(t,r,e),s=e[P],a=Nf(r.parent||e[6],r,e);if(null!=o)if(Array.isArray(n))for(let u=0;u<n.length;u++)Af(s,o,n[u],a,!1);else Af(s,o,n,a,!1)}function Us(t,e){if(null!==e){const n=e.type;if(3&n)return nt(e,t);if(4&n)return tu(-1,t[e.index]);if(8&n){const r=e.child;if(null!==r)return Us(t,r);{const o=t[e.index];return ht(o)?tu(-1,o):ue(o)}}if(32&n)return za(e,t)()||ue(t[e.index]);{const r=Of(t,e);return null!==r?Array.isArray(r)?r[0]:Us(mo(t[16]),r):Us(t,e.next)}}return null}function Of(t,e){return null!==e?t[16][6].projection[e.projection]:null}function tu(t,e){const n=10+t+1;if(n<e.length){const r=e[n],o=r[1].firstChild;if(null!==o)return Us(r,o)}return e[7]}function nu(t,e,n,r,o,s,i){for(;null!=n;){const a=r[n.index],u=n.type;if(i&&0===e&&(a&&ve(ue(a),r),n.flags|=4),64!=(64&n.flags))if(8&u)nu(t,e,n.child,r,o,s,!1),cr(e,t,o,a,s);else if(32&u){const l=za(n,r);let c;for(;c=l();)cr(e,t,o,c,s);cr(e,t,o,a,s)}else 16&u?Lf(t,e,r,n,o,s):cr(e,t,o,a,s);n=i?n.projectionNext:n.next}}function yo(t,e,n,r,o,s){nu(n,r,t.firstChild,e,o,s,!1)}function Lf(t,e,n,r,o,s){const i=n[16],u=i[6].projection[r.projection];if(Array.isArray(u))for(let l=0;l<u.length;l++)cr(e,t,o,u[l],s);else nu(t,e,u,i[3],o,s,!0)}function Vf(t,e,n){re(t)?t.setAttribute(e,"style",n):e.style.cssText=n}function ru(t,e,n){re(t)?""===n?t.removeAttribute(e,"class"):t.setAttribute(e,"class",n):e.className=n}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function jf(t,e,n){let r=t.length;for(;;){const o=t.indexOf(e,n);if(-1===o)return o;if(0===o||t.charCodeAt(o-1)<=32){const s=e.length;if(o+s===r||t.charCodeAt(o+s)<=32)return o}n=o+1}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Bf="ng-template";function LE(t,e,n){let r=0;for(;r<t.length;){let o=t[r++];if(n&&"class"===o){if(o=t[r],-1!==jf(o.toLowerCase(),e,0))return!0}else if(1===o){for(;r<t.length&&"string"==typeof(o=t[r++]);)if(o.toLowerCase()===e)return!0;return!1}}return!1}function Hf(t){return 4===t.type&&t.value!==Bf}function VE(t,e,n){return e===(4!==t.type||n?t.value:Bf)}function jE(t,e,n){let r=4;const o=t.attrs||[],s=function(t){for(let e=0;e<t.length;e++)if(Md(t[e]))return e;return t.length}(o);let i=!1;for(let a=0;a<e.length;a++){const u=e[a];if("number"!=typeof u){if(!i)if(4&r){if(r=2|1&r,""!==u&&!VE(t,u,n)||""===u&&1===e.length){if(gt(r))return!1;i=!0}}else{const l=8&r?u:e[++a];if(8&r&&null!==t.attrs){if(!LE(t.attrs,l,n)){if(gt(r))return!1;i=!0}continue}const d=BE(8&r?"class":u,o,Hf(t),n);if(-1===d){if(gt(r))return!1;i=!0;continue}if(""!==l){let f;f=d>s?"":o[d+1].toLowerCase();const h=8&r?f:null;if(h&&-1!==jf(h,l,0)||2&r&&l!==f){if(gt(r))return!1;i=!0}}}}else{if(!i&&!gt(r)&&!gt(u))return!1;if(i&&gt(u))continue;i=!1,r=u|1&r}}return gt(r)||i}function gt(t){return 0==(1&t)}function BE(t,e,n,r){if(null===e)return-1;let o=0;if(r||!n){let s=!1;for(;o<e.length;){const i=e[o];if(i===t)return o;if(3===i||6===i)s=!0;else{if(1===i||2===i){let a=e[++o];for(;"string"==typeof a;)a=e[++o];continue}if(4===i)break;if(0===i){o+=4;continue}}o+=s?1:2}return-1}return function(t,e){let n=t.indexOf(4);if(n>-1)for(n++;n<t.length;){const r=t[n];if("number"==typeof r)return-1;if(r===e)return n;n++}return-1}(e,t)}function $f(t,e,n=!1){for(let r=0;r<e.length;r++)if(jE(t,e[r],n))return!0;return!1}function WE(t,e){e:for(let n=0;n<e.length;n++){const r=e[n];if(t.length===r.length){for(let o=0;o<t.length;o++)if(t[o]!==r[o])continue e;return!0}}return!1}function Uf(t,e){return t?":not("+e.trim()+")":e}function GE(t){let e=t[0],n=1,r=2,o="",s=!1;for(;n<t.length;){let i=t[n];if("string"==typeof i)if(2&r){const a=t[++n];o+="["+i+(a.length>0?'="'+a+'"':"")+"]"}else 8&r?o+="."+i:4&r&&(o+=" "+i);else""!==o&&!gt(i)&&(e+=Uf(s,o),o=""),r=i,s=s||!gt(r);n++}return""!==o&&(e+=Uf(s,o)),e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const A={};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function gn(t){Wf(H(),_(),Re()+t,_s())}function Wf(t,e,n,r){if(!r)if(3==(3&e[2])){const s=t.preOrderCheckHooks;null!==s&&ws(e,s,n)}else{const s=t.preOrderHooks;null!==s&&vs(e,s,0,n)}fn(n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function eh(t,e){const n=t.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],s=n[r+1];if(-1!==s){const i=t.data[s];Da(o),i.contentQueries(2,e[s],s)}}}function _o(t,e,n,r,o,s,i,a,u,l){const c=e.blueprint.slice();return c[0]=o,c[2]=140|r,gd(c),c[3]=c[15]=t,c[8]=n,c[10]=i||t&&t[10],c[P]=a||t&&t[P],c[12]=u||t&&t[12]||null,c[9]=l||t&&t[9]||null,c[6]=s,c[16]=2==e.type?t[16]:c,c}function dr(t,e,n,r,o){let s=t.data[e];if(null===s)s=function(t,e,n,r,o){const s=yd(),i=ga(),u=t.data[e]=function(t,e,n,r,o,s){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:e?e.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,i?s:s&&s.parent,n,e,r,o);return null===t.firstChild&&(t.firstChild=u),null!==s&&(i?null==s.child&&null!==u.parent&&(s.child=u):null===s.next&&(s.next=u)),u}(t,e,n,r,o),S.lFrame.inI18n&&(s.flags|=64);else if(64&s.type){s.type=n,s.value=r,s.attrs=o;const i=function(){const t=S.lFrame,e=t.currentTNode;return t.isParent?e:e.parent}();s.injectorIndex=null===i?-1:i.injectorIndex}return Nt(s,!0),s}function fr(t,e,n,r){if(0===n)return-1;const o=e.length;for(let s=0;s<n;s++)e.push(r),t.blueprint.push(r),t.data.push(null);return o}function Do(t,e,n){Cs(e);try{const r=t.viewQuery;null!==r&&bu(1,r,n);const o=t.template;null!==o&&th(t,e,o,1,n),t.firstCreatePass&&(t.firstCreatePass=!1),t.staticContentQueries&&eh(t,e),t.staticViewQueries&&bu(2,t.viewQuery,n);const s=t.components;null!==s&&function(t,e){for(let n=0;n<e.length;n++)vb(t,e[n])}(e,s)}catch(r){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),r}finally{e[2]&=-5,Es()}}function hr(t,e,n,r){const o=e[2];if(256==(256&o))return;Cs(e);const s=_s();try{gd(e),function(t){S.lFrame.bindingIndex=t}(t.bindingStartIndex),null!==n&&th(t,e,n,2,r);const i=3==(3&o);if(!s)if(i){const l=t.preOrderCheckHooks;null!==l&&ws(e,l,null)}else{const l=t.preOrderHooks;null!==l&&vs(e,l,0,null),Ca(e,0)}if(function(t){for(let e=Qa(t);null!==e;e=Ka(e)){if(!e[2])continue;const n=e[9];for(let r=0;r<n.length;r++){const o=n[r],s=o[3];0==(1024&o[2])&&pa(s,1),o[2]|=1024}}}(e),function(t){for(let e=Qa(t);null!==e;e=Ka(e))for(let n=10;n<e.length;n++){const r=e[n],o=r[1];ha(r)&&hr(o,r,o.template,r[8])}}(e),null!==t.contentQueries&&eh(t,e),!s)if(i){const l=t.contentCheckHooks;null!==l&&ws(e,l)}else{const l=t.contentHooks;null!==l&&vs(e,l,1),Ca(e,1)}!function(t,e){const n=t.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const o=n[r];if(o<0)fn(~o);else{const s=o,i=n[++r],a=n[++r];FD(i,s),a(2,e[s])}}}finally{fn(-1)}}(t,e);const a=t.components;null!==a&&function(t,e){for(let n=0;n<e.length;n++)wb(t,e[n])}(e,a);const u=t.viewQuery;if(null!==u&&bu(2,u,r),!s)if(i){const l=t.viewCheckHooks;null!==l&&ws(e,l)}else{const l=t.viewHooks;null!==l&&vs(e,l,2),Ca(e,2)}!0===t.firstUpdatePass&&(t.firstUpdatePass=!1),s||(e[2]&=-73),1024&e[2]&&(e[2]&=-1025,pa(e[3],-1))}finally{Es()}}function ob(t,e,n,r){const o=e[10],s=!_s(),i=function(t){return 4==(4&t[2])}(e);try{s&&!i&&o.begin&&o.begin(),i&&Do(t,e,r),hr(t,e,n,r)}finally{s&&!i&&o.end&&o.end()}}function th(t,e,n,r,o){const s=Re(),i=2&r;try{fn(-1),i&&e.length>Y&&Wf(t,e,Y,_s()),n(r,o)}finally{fn(s)}}function nh(t,e,n){if(ia(e)){const o=e.directiveEnd;for(let s=e.directiveStart;s<o;s++){const i=t.data[s];i.contentQueries&&i.contentQueries(1,n[s],s)}}}function pu(t,e,n){!md()||(function(t,e,n,r){const o=n.directiveStart,s=n.directiveEnd;t.firstCreatePass||to(n,e),ve(r,e);const i=n.initialInputs;for(let a=o;a<s;a++){const u=t.data[a],l=pt(u);l&&_b(e,n,u);const c=no(e,t,a,n);ve(c,e),null!==i&&Db(0,a-o,c,u,0,i),l&&(qe(n.index,e)[8]=c)}}(t,e,n,nt(n,e)),128==(128&n.flags)&&function(t,e,n){const r=n.directiveStart,o=n.directiveEnd,i=n.index,a=S.lFrame.currentDirectiveIndex;try{fn(i);for(let u=r;u<o;u++){const l=t.data[u],c=e[u];ya(u),(null!==l.hostBindings||0!==l.hostVars||null!==l.hostAttrs)&&ch(l,c)}}finally{fn(-1),ya(a)}}(t,e,n))}function gu(t,e,n=nt){const r=e.localNames;if(null!==r){let o=e.index+1;for(let s=0;s<r.length;s+=2){const i=r[s+1],a=-1===i?n(e,t):t[i];t[o++]=a}}}function rh(t){const e=t.tView;return null===e||e.incompleteFirstPass?t.tView=zs(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts):e}function zs(t,e,n,r,o,s,i,a,u,l){const c=Y+r,d=c+o,f=function(t,e){const n=[];for(let r=0;r<e;r++)n.push(r<t?null:A);return n}(c,d),h="function"==typeof l?l():l;return f[1]={type:t,blueprint:f,template:n,queries:null,viewQuery:a,declTNode:e,data:f.slice().fill(null,c),bindingStartIndex:c,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof s?s():s,pipeRegistry:"function"==typeof i?i():i,firstChild:null,schemas:u,consts:h,incompleteFirstPass:!1}}function ah(t,e,n){for(let r in t)if(t.hasOwnProperty(r)){const o=t[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(e,o):n[r]=[e,o]}return n}function mu(t,e,n,r){let o=!1;if(md()){const s=function(t,e,n){const r=t.directiveRegistry;let o=null;if(r)for(let s=0;s<r.length;s++){const i=r[s];$f(n,i.selectors,!1)&&(o||(o=[]),xs(to(n,e),t,i.type),pt(i)?(dh(t,n),o.unshift(i)):o.push(i))}return o}(t,e,n),i=null===r?null:{"":-1};if(null!==s){o=!0,fh(n,t.data.length,s.length);for(let c=0;c<s.length;c++){const d=s[c];d.providersResolver&&d.providersResolver(d)}let a=!1,u=!1,l=fr(t,e,s.length,null);for(let c=0;c<s.length;c++){const d=s[c];n.mergedAttrs=Ts(n.mergedAttrs,d.hostAttrs),hh(t,n,e,l,d),yb(l,d,i),null!==d.contentQueries&&(n.flags|=8),(null!==d.hostBindings||null!==d.hostAttrs||0!==d.hostVars)&&(n.flags|=128);const f=d.type.prototype;!a&&(f.ngOnChanges||f.ngOnInit||f.ngDoCheck)&&((t.preOrderHooks||(t.preOrderHooks=[])).push(n.index),a=!0),!u&&(f.ngOnChanges||f.ngDoCheck)&&((t.preOrderCheckHooks||(t.preOrderCheckHooks=[])).push(n.index),u=!0),l++}!function(t,e){const r=e.directiveEnd,o=t.data,s=e.attrs,i=[];let a=null,u=null;for(let l=e.directiveStart;l<r;l++){const c=o[l],d=c.inputs,f=null===s||Hf(e)?null:Cb(d,s);i.push(f),a=ah(d,l,a),u=ah(c.outputs,l,u)}null!==a&&(a.hasOwnProperty("class")&&(e.flags|=16),a.hasOwnProperty("style")&&(e.flags|=32)),e.initialInputs=i,e.inputs=a,e.outputs=u}(t,n)}i&&function(t,e,n){if(e){const r=t.localNames=[];for(let o=0;o<e.length;o+=2){const s=n[e[o+1]];if(null==s)throw new bn("301",`Export of name '${e[o+1]}' not found!`);r.push(e[o],s)}}}(n,r,i)}return n.mergedAttrs=Ts(n.mergedAttrs,n.attrs),o}function lh(t,e,n,r,o,s){const i=s.hostBindings;if(i){let a=t.hostBindingOpCodes;null===a&&(a=t.hostBindingOpCodes=[]);const u=~e.index;(function(t){let e=t.length;for(;e>0;){const n=t[--e];if("number"==typeof n&&n<0)return n}return 0})(a)!=u&&a.push(u),a.push(r,o,i)}}function ch(t,e){null!==t.hostBindings&&t.hostBindings(1,e)}function dh(t,e){e.flags|=2,(t.components||(t.components=[])).push(e.index)}function yb(t,e,n){if(n){if(e.exportAs)for(let r=0;r<e.exportAs.length;r++)n[e.exportAs[r]]=t;pt(e)&&(n[""]=t)}}function fh(t,e,n){t.flags|=1,t.directiveStart=e,t.directiveEnd=e+n,t.providerIndexes=e}function hh(t,e,n,r,o){t.data[r]=o;const s=o.factory||(o.factory=Mn(o.type)),i=new Xr(s,pt(o),null);t.blueprint[r]=i,n[r]=i,lh(t,e,0,r,fr(t,n,o.hostVars,A),o)}function _b(t,e,n){const r=nt(e,t),o=rh(n),s=t[10],i=Qs(t,_o(t,o,null,n.onPush?64:16,r,e,s,s.createRenderer(r,n),null,null));t[e.index]=i}function Db(t,e,n,r,o,s){const i=s[e];if(null!==i){const a=r.setInput;for(let u=0;u<i.length;){const l=i[u++],c=i[u++],d=i[u++];null!==a?r.setInput(n,d,l,c):n[c]=d}}}function Cb(t,e){let n=null,r=0;for(;r<e.length;){const o=e[r];if(0!==o)if(5!==o){if("number"==typeof o)break;t.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,t[o],e[r+1])),r+=2}else r+=2;else r+=4}return n}function ph(t,e,n,r){return new Array(t,!0,!1,e,null,0,r,n,null,null)}function wb(t,e){const n=qe(e,t);if(ha(n)){const r=n[1];80&n[2]?hr(r,n,r.template,n[8]):n[5]>0&&_u(n)}}function _u(t){for(let r=Qa(t);null!==r;r=Ka(r))for(let o=10;o<r.length;o++){const s=r[o];if(1024&s[2]){const i=s[1];hr(i,s,i.template,s[8])}else s[5]>0&&_u(s)}const n=t[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=qe(n[r],t);ha(o)&&o[5]>0&&_u(o)}}function vb(t,e){const n=qe(e,t),r=n[1];(function(t,e){for(let n=e.length;n<t.blueprint.length;n++)e.push(t.blueprint[n])})(r,n),Do(r,n,n[8])}function Qs(t,e){return t[13]?t[14][4]=e:t[13]=e,t[14]=e,e}function Eu(t,e,n){const r=e[10];r.begin&&r.begin();try{hr(t,e,t.template,n)}catch(o){throw function(t,e){const n=t[9],r=n?n.get(Pn,null):null;r&&r.handleError(e)}(e,o),o}finally{r.end&&r.end()}}function gh(t){!function(t){for(let e=0;e<t.components.length;e++){const n=t.components[e],r=Wa(n),o=r[1];ob(o,r,o.template,n)}}(t[8])}function bu(t,e,n){Da(0),e(t,n)}const xb=(()=>Promise.resolve(null))();function Ch(t,e,n,r,o){for(let s=0;s<n.length;){const i=n[s++],a=n[s++],u=e[i],l=t.data[i];null!==l.setInput?l.setInput(u,o,r,a):u[a]=o}}function Jt(t,e,n){const r=function(t,e){return ue(e[t])}(e,t);!function(t,e,n){re(t)?t.setValue(e,n):e.textContent=n}(t[P],r,n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ks(t,e,n){let r=n?t.styles:null,o=n?t.classes:null,s=0;if(null!==e)for(let i=0;i<e.length;i++){const a=e[i];"number"==typeof a?s=a:1==s?o=Yi(o,a):2==s&&(r=Yi(r,a+": "+e[++i]+";"))}n?t.styles=r:t.stylesWithoutHost=r,n?t.classes=o:t.classesWithoutHost=o}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const pr=new Q("INJECTOR",-1);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Eh{get(e,n=io){if(n===io){const r=new Error(`NullInjectorError: No provider for ${O(e)}!`);throw r.name="NullInjectorError",r}return n}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Co=new Q("Set Injector scope."),Eo={},Rb={};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let wu;function bh(){return void 0===wu&&(wu=new Eh),wu}function wh(t,e=null,n=null,r){return new Fb(t,n,e||bh(),r)}class Fb{constructor(e,n,r,o=null){this.parent=r,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const s=[];n&&Pt(n,a=>this.processProvider(a,e,n)),Pt([e],a=>this.processInjectorType(a,[],s)),this.records.set(pr,gr(void 0,this));const i=this.records.get(Co);this.scope=null!=i?i.value:null,this.source=o||("object"==typeof e?null:O(e))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach(e=>e.ngOnDestroy())}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(e,n=io,r=T.Default){this.assertNotDestroyed();const o=ir(this),s=un(void 0);try{if(!(r&T.SkipSelf)){let a=this.records.get(e);if(void 0===a){const u=function(t){return"function"==typeof t||"object"==typeof t&&t instanceof Q}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e)&&zt(e);a=u&&this.injectableDefInScope(u)?gr(vu(e),Eo):null,this.records.set(e,a)}if(null!=a)return this.hydrate(e,a)}return(r&T.Self?bh():this.parent).get(e,n=r&T.Optional&&n===io?null:n)}catch(i){if("NullInjectorError"===i.name){if((i[sr]=i[sr]||[]).unshift(O(e)),o)throw i;return Ud(i,e,"R3InjectorError",this.source)}throw i}finally{un(s),ir(o)}}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach(e=>this.get(e))}toString(){const e=[];return this.records.forEach((r,o)=>e.push(O(o))),`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(e,n,r){if(!(e=w(e)))return!1;let o=Xc(e);const s=null==o&&e.ngModule||void 0,i=void 0===s?e:s,a=-1!==r.indexOf(i);if(void 0!==s&&(o=Xc(s)),null==o)return!1;if(null!=o.imports&&!a){let c;r.push(i);try{Pt(o.imports,d=>{this.processInjectorType(d,n,r)&&(void 0===c&&(c=[]),c.push(d))})}finally{}if(void 0!==c)for(let d=0;d<c.length;d++){const{ngModule:f,providers:h}=c[d];Pt(h,p=>this.processProvider(p,f,h||z))}}this.injectorDefTypes.add(i);const u=Mn(i)||(()=>new i);this.records.set(i,gr(u,Eo));const l=o.providers;if(null!=l&&!a){const c=e;Pt(l,d=>this.processProvider(d,c,l))}return void 0!==s&&void 0!==e.providers}processProvider(e,n,r){let o=mr(e=w(e))?e:w(e&&e.provide);const s=function(t,e,n){return Ih(t)?gr(void 0,t.useValue):gr(function(t,e,n){let r;if(mr(t)){const o=w(t);return Mn(o)||vu(o)}if(Ih(t))r=()=>w(t.useValue);else if(function(t){return!(!t||!t.useFactory)}(t))r=()=>t.useFactory(...An(t.deps||[]));else if(function(t){return!(!t||!t.useExisting)}(t))r=()=>j(w(t.useExisting));else{const o=w(t&&(t.useClass||t.provide));if(!function(t){return!!t.deps}(t))return Mn(o)||vu(o);r=()=>new o(...An(t.deps))}return r}(t),Eo)}(e);if(mr(e)||!0!==e.multi)this.records.get(o);else{let i=this.records.get(o);i||(i=gr(void 0,Eo,!0),i.factory=()=>An(i.multi),this.records.set(o,i)),o=e,i.multi.push(e)}this.records.set(o,s)}hydrate(e,n){return n.value===Eo&&(n.value=Rb,n.value=n.factory()),"object"==typeof n.value&&n.value&&function(t){return null!==t&&"object"==typeof t&&"function"==typeof t.ngOnDestroy}(n.value)&&this.onDestroy.add(n.value),n.value}injectableDefInScope(e){if(!e.providedIn)return!1;const n=w(e.providedIn);return"string"==typeof n?"any"===n||n===this.scope:this.injectorDefTypes.has(n)}}function vu(t){const e=zt(t),n=null!==e?e.factory:Mn(t);if(null!==n)return n;if(t instanceof Q)throw new Error(`Token ${O(t)} is missing a \u0275prov definition.`);if(t instanceof Function)return function(t){const e=t.length;if(e>0){const r=pn(e,"?");throw new Error(`Can't resolve all parameters for ${O(t)}: (${r.join(", ")}).`)}const n=function(t){const e=t&&(t[ls]||t[ed]);if(e){const n=function(t){if(t.hasOwnProperty("name"))return t.name;const e=(""+t).match(/^function\s*([^\s(]+)/);return null===e?"":e[1]}(t);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),e}return null}(t);return null!==n?()=>n.factory(t):()=>new t}(t);throw new Error("unreachable")}function gr(t,e,n=!1){return{factory:t,value:e,multi:n?[]:void 0}}function Ih(t){return null!==t&&"object"==typeof t&&Fa in t}function mr(t){return"function"==typeof t}const Th=function(t,e,n){return function(t,e=null,n=null,r){const o=wh(t,e,n,r);return o._resolveInjectorDefTypes(),o}({name:n},e,t,n)};class U{static create(e,n){return Array.isArray(e)?Th(e,n,""):Th(e.providers,e.parent,e.name||"")}}function tw(t,e){bs(Wa(t)[1],fe())}U.THROW_IF_NOT_FOUND=io,U.NULL=new Eh,U.\u0275prov=q({token:U,providedIn:"any",factory:()=>j(pr)}),U.__NG_ELEMENT_ID__=-1;
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let Ys=null;function yr(){if(!Ys){const t=W.Symbol;if(t&&t.iterator)Ys=t.iterator;else{const e=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<e.length;++n){const r=e[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(Ys=r)}}}return Ys}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function wo(t){return!!Nu(t)&&(Array.isArray(t)||!(t instanceof Map)&&yr()in t)}function Nu(t){return null!==t&&("function"==typeof t||"object"==typeof t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ie(t,e,n){return!Object.is(t[e],n)&&(t[e]=n,!0)}function Js(t,e,n,r,o,s,i,a){const u=_(),l=H(),c=t+Y,d=l.firstCreatePass?
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function(t,e,n,r,o,s,i,a,u){const l=e.consts,c=dr(e,t,4,i||null,dn(l,a));mu(e,n,c,dn(l,u)),bs(e,c);const d=c.tViews=zs(2,c,r,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,l);return null!==e.queries&&(e.queries.template(e,c),d.queries=e.queries.embeddedTView(c)),c}(c,l,u,e,n,r,o,s,i):l.data[c];Nt(d,!1);const f=u[P].createComment("");$s(l,u,f,d),ve(f,u),Qs(u,u[c]=ph(f,u,f,d)),gs(d)&&pu(l,u,d),null!=i&&gu(u,d,a)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function V(t,e=T.Default){const n=_();return null===n?j(t,e):Fd(fe(),n,w(t),e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function kn(t,e,n){const r=_();return Ie(r,Zn(),e)&&function(t,e,n,r,o,s,i,a){const u=nt(e,n);let c,l=e.inputs;!a&&null!=l&&(c=l[r])?(Ch(t,n,c,r,o),ps(e)&&function(t,e){const n=qe(e,t);16&n[2]||(n[2]|=64)}(n,e.index)):3&e.type&&(r=function(t){return"class"===t?"className":"for"===t?"htmlFor":"formaction"===t?"formAction":"innerHtml"===t?"innerHTML":"readonly"===t?"readOnly":"tabindex"===t?"tabIndex":t}(r),o=null!=i?i(o,e.value||"",r):o,re(s)?s.setProperty(u,r,o):ba(r)||(u.setProperty?u.setProperty(r,o):u[r]=o))}(H(),function(){const t=S.lFrame;return fa(t.tView,t.selectedIndex)}(),r,t,e,r[P],n,!1),kn}function ku(t,e,n,r,o){const i=o?"class":"style";Ch(t,n,e.inputs[i],i,r)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Bt(t,e,n,r){const o=_(),s=H(),i=Y+t,a=o[P],u=o[i]=Za(a,e,S.lFrame.currentNamespace),l=s.firstCreatePass?function(t,e,n,r,o,s,i){const a=e.consts,l=dr(e,t,2,o,dn(a,s));return mu(e,n,l,dn(a,i)),null!==l.attrs&&Ks(l,l.attrs,!1),null!==l.mergedAttrs&&Ks(l,l.mergedAttrs,!0),null!==e.queries&&e.queries.elementStart(e,l),l}(i,s,o,0,e,n,r):s.data[i];Nt(l,!0);const c=l.mergedAttrs;null!==c&&Is(a,u,c);const d=l.classes;null!==d&&ru(a,u,d);const f=l.styles;null!==f&&Vf(a,u,f),64!=(64&l.flags)&&$s(s,o,u,l),0===S.lFrame.elementDepthCount&&ve(u,o),S.lFrame.elementDepthCount++,gs(l)&&(pu(s,o,l),nh(s,l,o)),null!==r&&gu(o,l)}function Ht(){let t=fe();ga()?ma():(t=t.parent,Nt(t,!1));const e=t;S.lFrame.elementDepthCount--;const n=H();n.firstCreatePass&&(bs(n,t),ia(t)&&n.queries.elementEnd(t)),null!=e.classesWithoutHost&&function(t){return 0!=(16&t.flags)}(e)&&ku(n,e,_(),e.classesWithoutHost,!0),null!=e.stylesWithoutHost&&function(t){return 0!=(32&t.flags)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e)&&ku(n,e,_(),e.stylesWithoutHost,!1)}function Io(t,e,n,r){Bt(t,e,n,r),Ht()}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function ju(t){return!!t&&"function"==typeof t.then}const pp=function(t){return!!t&&"function"==typeof t.subscribe};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Dp(t=1){return function(t){return(S.lFrame.contextLView=function(t,e){for(;t>0;)e=e[15],t--;return e}(t,S.lFrame.contextLView))[8]}(t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Hw(t,e){let n=null;const r=function(t){const e=t.attrs;if(null!=e){const n=e.indexOf(5);if(0==(1&n))return e[n+1]}return null}(t);for(let o=0;o<e.length;o++){const s=e[o];if("*"!==s){if(null===r?$f(t,s,!0):WE(r,s))return o}else n=o}return n}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Uu(t,e=""){const n=_(),r=H(),o=t+Y,s=r.firstCreatePass?dr(r,o,1,e,null):r.data[o],i=n[o]=function(t,e){return re(t)?t.createText(e):t.createTextNode(e)}(n[P],e);$s(r,n,i,s),Nt(s,!1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ti(t){return Wu("",t,""),ti}function Wu(t,e,n){const r=_(),o=function(t,e,n,r){return Ie(t,Zn(),n)?e+R(n)+r:A}(r,t,e,n);return o!==A&&Jt(r,Re(),o),Wu}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Ln=void 0;var Iv=["en",[["a","p"],["AM","PM"],Ln],[["AM","PM"],Ln,Ln],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Ln,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Ln,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",Ln,"{1} 'at' {0}",Ln],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(t){const e=Math.floor(Math.abs(t)),n=t.toString().replace(/^[^.]*\.?/,"").length;return 1===e&&0===n?1:5}];
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let xr={};function fg(t){return t in xr||(xr[t]=W.ng&&W.ng.common&&W.ng.common.locales&&W.ng.common.locales[t]),xr[t]}var E=(()=>((E=E||{})[E.LocaleId=0]="LocaleId",E[E.DayPeriodsFormat=1]="DayPeriodsFormat",E[E.DayPeriodsStandalone=2]="DayPeriodsStandalone",E[E.DaysFormat=3]="DaysFormat",E[E.DaysStandalone=4]="DaysStandalone",E[E.MonthsFormat=5]="MonthsFormat",E[E.MonthsStandalone=6]="MonthsStandalone",E[E.Eras=7]="Eras",E[E.FirstDayOfWeek=8]="FirstDayOfWeek",E[E.WeekendRange=9]="WeekendRange",E[E.DateFormat=10]="DateFormat",E[E.TimeFormat=11]="TimeFormat",E[E.DateTimeFormat=12]="DateTimeFormat",E[E.NumberSymbols=13]="NumberSymbols",E[E.NumberFormats=14]="NumberFormats",E[E.CurrencyCode=15]="CurrencyCode",E[E.CurrencySymbol=16]="CurrencySymbol",E[E.CurrencyName=17]="CurrencyName",E[E.Currencies=18]="Currencies",E[E.Directionality=19]="Directionality",E[E.PluralCase=20]="PluralCase",E[E.ExtraData=21]="ExtraData",E))();const ni="en-US";
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let hg=ni;function Gu(t){We(t,"Expected localeId to be defined"),"string"==typeof t&&(hg=t.toLowerCase().replace(/_/g,"-"))}class Vg{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Bg="ngComponent";class T0{resolveComponentFactory(e){throw function(t){const e=Error(`No component factory found for ${O(t)}. Did you add it to @NgModule.entryComponents?`);return e[Bg]=t,e}(e)}}class en{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function ai(...t){}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Nr(t,e){return new Et(nt(t,e))}en.NULL=new T0;const x0=function(){return Nr(fe(),_())};let Et=(()=>{class t{constructor(n){this.nativeElement=n}}return t.__NG_ELEMENT_ID__=x0,t})();class ui{}let $g=(()=>{class t{}return t.__NG_ELEMENT_ID__=()=>N0(),t})();const N0=function(){const t=_(),n=qe(fe().index,t);return function(t){return t[P]}(At(n)?n:t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */;let Xu=(()=>{class t{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return t.\u0275prov=q({token:t,providedIn:"root",factory:()=>null}),t})();class li{constructor(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")}}const Ug=new li("12.2.2");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Wg{constructor(){}supports(e){return wo(e)}create(e){return new O0(e)}}const F0=(t,e)=>e;class O0{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||F0}forEachItem(e){let n;for(n=this._itHead;null!==n;n=n._next)e(n)}forEachOperation(e){let n=this._itHead,r=this._removalsHead,o=0,s=null;for(;n||r;){const i=!r||n&&n.currentIndex<qg(r,o,s)?n:r,a=qg(i,o,s),u=i.currentIndex;if(i===r)o--,r=r._nextRemoved;else if(n=n._next,null==i.previousIndex)o++;else{s||(s=[]);const l=a-o,c=u-o;if(l!=c){for(let f=0;f<l;f++){const h=f<s.length?s[f]:s[f]=0,p=h+f;c<=p&&p<l&&(s[f]=h+1)}s[i.previousIndex]=c-l}}a!==u&&e(i,a,u)}}forEachPreviousItem(e){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)e(n)}forEachAddedItem(e){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)e(n)}forEachMovedItem(e){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)e(n)}forEachRemovedItem(e){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)e(n)}forEachIdentityChange(e){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)e(n)}diff(e){if(null==e&&(e=[]),!wo(e))throw new Error(`Error trying to diff '${O(e)}'. Only arrays and iterables are allowed`);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let o,s,i,n=this._itHead,r=!1;if(Array.isArray(e)){this.length=e.length;for(let a=0;a<this.length;a++)s=e[a],i=this._trackByFn(a,s),null!==n&&Object.is(n.trackById,i)?(r&&(n=this._verifyReinsertion(n,s,i,a)),Object.is(n.item,s)||this._addIdentityChange(n,s)):(n=this._mismatch(n,s,i,a),r=!0),n=n._next}else o=0,function(t,e){if(Array.isArray(t))for(let n=0;n<t.length;n++)e(t[n]);else{const n=t[yr()]();let r;for(;!(r=n.next()).done;)e(r.value)}}(e,a=>{i=this._trackByFn(o,a),null!==n&&Object.is(n.trackById,i)?(r&&(n=this._verifyReinsertion(n,a,i,o)),Object.is(n.item,a)||this._addIdentityChange(n,a)):(n=this._mismatch(n,a,i,o),r=!0),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=e,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;null!==e;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;null!==e;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,n,r,o){let s;return null===e?s=this._itTail:(s=e._prev,this._remove(e)),null!==(e=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(e.item,n)||this._addIdentityChange(e,n),this._reinsertAfter(e,s,o)):null!==(e=null===this._linkedRecords?null:this._linkedRecords.get(r,o))?(Object.is(e.item,n)||this._addIdentityChange(e,n),this._moveAfter(e,s,o)):e=this._addAfter(new k0(n,r),s,o),e}_verifyReinsertion(e,n,r,o){let s=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==s?e=this._reinsertAfter(s,e._prev,o):e.currentIndex!=o&&(e.currentIndex=o,this._addToMoves(e,o)),e}_truncate(e){for(;null!==e;){const n=e._next;this._addToRemovals(this._unlink(e)),e=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(e);const o=e._prevRemoved,s=e._nextRemoved;return null===o?this._removalsHead=s:o._nextRemoved=s,null===s?this._removalsTail=o:s._prevRemoved=o,this._insertAfter(e,n,r),this._addToMoves(e,r),e}_moveAfter(e,n,r){return this._unlink(e),this._insertAfter(e,n,r),this._addToMoves(e,r),e}_addAfter(e,n,r){return this._insertAfter(e,n,r),this._additionsTail=null===this._additionsTail?this._additionsHead=e:this._additionsTail._nextAdded=e,e}_insertAfter(e,n,r){const o=null===n?this._itHead:n._next;return e._next=o,e._prev=n,null===o?this._itTail=e:o._prev=e,null===n?this._itHead=e:n._next=e,null===this._linkedRecords&&(this._linkedRecords=new Gg),this._linkedRecords.put(e),e.currentIndex=r,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){null!==this._linkedRecords&&this._linkedRecords.remove(e);const n=e._prev,r=e._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,e}_addToMoves(e,n){return e.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=e:this._movesTail._nextMoved=e),e}_addToRemovals(e){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Gg),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,n){return e.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=e:this._identityChangesTail._nextIdentityChange=e,e}}class k0{constructor(e,n){this.item=e,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class L0{constructor(){this._head=null,this._tail=null}add(e){null===this._head?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,e))return r;return null}remove(e){const n=e._prevDup,r=e._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class Gg{constructor(){this.map=new Map}put(e){const n=e.trackById;let r=this.map.get(n);r||(r=new L0,this.map.set(n,r)),r.add(e)}get(e,n){const o=this.map.get(e);return o?o.get(e,n):null}remove(e){const n=e.trackById;return this.map.get(n).remove(e)&&this.map.delete(n),e}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function qg(t,e,n){const r=t.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+e+o
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}class zg{constructor(){}supports(e){return e instanceof Map||Nu(e)}create(){return new V0}}class V0{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(e){let n;for(n=this._mapHead;null!==n;n=n._next)e(n)}forEachPreviousItem(e){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)e(n)}forEachChangedItem(e){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)e(n)}forEachAddedItem(e){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)e(n)}forEachRemovedItem(e){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)e(n)}diff(e){if(e){if(!(e instanceof Map||Nu(e)))throw new Error(`Error trying to diff '${O(e)}'. Only maps and objects are allowed`)}else e=new Map;return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(e,(r,o)=>{if(n&&n.key===o)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const s=this._getOrCreateRecordForKey(o,r);n=this._insertBeforeOrAppend(n,s)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(e,n){if(e){const r=e._prev;return n._next=e,n._prev=r,e._prev=n,r&&(r._next=n),e===this._mapHead&&(this._mapHead=n),this._appendAfter=e,e}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(e,n){if(this._records.has(e)){const o=this._records.get(e);this._maybeAddToChanges(o,n);const s=o._prev,i=o._next;return s&&(s._next=i),i&&(i._prev=s),o._next=null,o._prev=null,o}const r=new j0(e);return this._records.set(e,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let e;for(this._previousMapHead=this._mapHead,e=this._previousMapHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._changesHead;null!==e;e=e._nextChanged)e.previousValue=e.currentValue;for(e=this._additionsHead;null!=e;e=e._nextAdded)e.previousValue=e.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(e,n){Object.is(n,e.currentValue)||(e.previousValue=e.currentValue,e.currentValue=n,this._addToChanges(e))}_addToAdditions(e){null===this._additionsHead?this._additionsHead=this._additionsTail=e:(this._additionsTail._nextAdded=e,this._additionsTail=e)}_addToChanges(e){null===this._changesHead?this._changesHead=this._changesTail=e:(this._changesTail._nextChanged=e,this._changesTail=e)}_forEach(e,n){e instanceof Map?e.forEach(n):Object.keys(e).forEach(r=>n(e[r],r))}}class j0{constructor(e){this.key=e,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Qg(){return new No([new Wg])}let No=(()=>{class t{constructor(n){this.factories=n}static create(n,r){if(null!=r){const o=r.factories.slice();n=n.concat(o)}return new t(n)}static extend(n){return{provide:t,useFactory:r=>t.create(n,r||Qg()),deps:[[t,new Nn,new Ft]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(null!=r)return r;throw new Error(`Cannot find a differ supporting object '${n}' of type '${function(t){return t.name||typeof t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(n)}'`)}}return t.\u0275prov=q({token:t,providedIn:"root",factory:Qg}),t})();function Kg(){return new Rr([new zg])}let Rr=(()=>{class t{constructor(n){this.factories=n}static create(n,r){if(r){const o=r.factories.slice();n=n.concat(o)}return new t(n)}static extend(n){return{provide:t,useFactory:r=>t.create(n,r||Kg()),deps:[[t,new Nn,new Ft]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(r)return r;throw new Error(`Cannot find a differ supporting object '${n}'`)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return t.\u0275prov=q({token:t,providedIn:"root",factory:Kg}),t})();function ci(t,e,n,r,o=!1){for(;null!==n;){const s=e[n.index];if(null!==s&&r.push(ue(s)),ht(s))for(let a=10;a<s.length;a++){const u=s[a],l=u[1].firstChild;null!==l&&ci(u[1],u,l,r)}const i=n.type;if(8&i)ci(t,e,n.child,r);else if(32&i){const a=za(n,e);let u;for(;u=a();)r.push(u)}else if(16&i){const a=Of(e,n);if(Array.isArray(a))r.push(...a);else{const u=mo(e[16]);ci(u[1],u,a,r,!0)}}n=o?n.projectionNext:n.next}return r}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Ro{constructor(e,n){this._lView=e,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const e=this._lView,n=e[1];return ci(n,e,n.firstChild,[])}get context(){return this._lView[8]}set context(e){this._lView[8]=e}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const e=this._lView[3];if(ht(e)){const n=e[8],r=n?n.indexOf(this):-1;r>-1&&(Ja(e,r),xn(n,r))}this._attachedToViewContainer=!1}Tf(this._lView[1],this._lView)}onDestroy(e){!function(t,e,n,r){const o=function(t){return t[7]||(t[7]=[])}(e);null===n?o.push(r):(o.push(n),t.firstCreatePass&&function(t){return t.cleanup||(t.cleanup=[])}(t).push(r,o.length-1))}(this._lView[1],this._lView,null,e)}markForCheck(){!function(t){for(;t;){t[2]|=64;const e=mo(t);if(pD(t)&&!e)return t;t=e}}(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){Eu(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(t,e,n){Ds(!0);try{Eu(t,e,n)}finally{Ds(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function(t,e){yo(t,e,e[P],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Error("This view is already attached to a ViewContainer!");this._appRef=e}}class H0 extends Ro{constructor(e){super(e),this._view=e}detectChanges(){gh(this._view)}checkNoChanges(){!function(t){Ds(!0);try{gh(t)}finally{Ds(!1)}}(this._view)}get context(){return null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const U0=function(t){return function(t,e,n){if(ps(t)&&!n){const r=qe(t.index,e);return new Ro(r,r)}return 47&t.type?new Ro(e[16],e):null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(fe(),_(),16==(16&t))};let el=(()=>{class t{}return t.__NG_ELEMENT_ID__=U0,t})();const q0=[new zg],Q0=new No([new Wg]),K0=new Rr(q0),Z0=function(){return di(fe(),_())};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let tn=(()=>{class t{}return t.__NG_ELEMENT_ID__=Z0,t})();const J0=tn,X0=class extends J0{constructor(e,n,r){super(),this._declarationLView=e,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(e){const n=this._declarationTContainer.tViews,r=_o(this._declarationLView,n,e,16,null,n.declTNode,null,null,null,null);r[17]=this._declarationLView[this._declarationTContainer.index];const s=this._declarationLView[19];return null!==s&&(r[19]=s.createEmbeddedView(n)),Do(n,r,e),new Ro(r)}};function di(t,e){return 4&t.type?new X0(e,t,Nr(t,e)):null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Vn{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const rI=function(){return function(t,e){let n;const r=e[t.index];if(ht(r))n=r;else{let o;if(8&t.type)o=ue(r);else{const s=e[P];o=s.createComment("");const i=nt(t,e);Fn(s,Hs(s,i),o,function(t,e){return re(t)?t.nextSibling(e):e.nextSibling}(s,i),!1)}e[t.index]=n=ph(r,e,o,t),Qs(e,n)}return new Yg(n,t,e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(fe(),_())};let Wt=(()=>{class t{}return t.__NG_ELEMENT_ID__=rI,t})();const sI=Wt,Yg=class extends sI{constructor(e,n,r){super(),this._lContainer=e,this._hostTNode=n,this._hostLView=r}get element(){return Nr(this._hostTNode,this._hostLView)}get injector(){return new er(this._hostTNode,this._hostLView)}get parentInjector(){const e=Ss(this._hostTNode,this._hostLView);if(xd(e)){const n=Xn(e,this._hostLView),r=Jn(e);return new er(n[1].data[r+8],n)}return new er(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){const n=Zg(this._lContainer);return null!==n&&n[e]||null}get length(){return this._lContainer.length-10}createEmbeddedView(e,n,r){const o=e.createEmbeddedView(n||{});return this.insert(o,r),o}createComponent(e,n,r,o,s){const i=r||this.parentInjector;if(!s&&null==e.ngModule&&i){const u=i.get(Vn,null);u&&(s=u)}const a=e.create(i,o,void 0,s);return this.insert(a.hostView,n),a}insert(e,n){const r=e._lView,o=r[1];if(function(t){return ht(t[3])}(r)){const c=this.indexOf(e);if(-1!==c)this.detach(c);else{const d=r[3],f=new Yg(d,d[6],d[3]);f.detach(f.indexOf(e))}}const s=this._adjustIndex(n),i=this._lContainer;!function(t,e,n,r){const o=10+r,s=n.length;r>0&&(n[o-1][4]=e),r<s-10?(e[4]=n[o],Rs(n,10+r,e)):(n.push(e),e[4]=null),e[3]=n;const i=e[17];null!==i&&n!==i&&function(t,e){const n=t[9];e[16]!==e[3][3][16]&&(t[2]=!0),null===n?t[9]=[e]:n.push(e)}(i,e);const a=e[19];null!==a&&a.insertView(t),e[2]|=128}(o,r,i,s);const a=tu(s,i),u=r[P],l=Hs(u,i[7]);return null!==l&&function(t,e,n,r,o,s){r[0]=o,r[6]=e,yo(t,r,n,1,o,s)}(o,i[6],u,r,l,a),e.attachToViewContainerRef(),Rs(tl(i),s,e),e}move(e,n){return this.insert(e,n)}indexOf(e){const n=Zg(this._lContainer);return null!==n?n.indexOf(e):-1}remove(e){const n=this._adjustIndex(e,-1),r=Ja(this._lContainer,n);r&&(xn(tl(this._lContainer),n),Tf(r[1],r))}detach(e){const n=this._adjustIndex(e,-1),r=Ja(this._lContainer,n);return r&&null!=xn(tl(this._lContainer),n)?new Ro(r):null}_adjustIndex(e,n=0){return null==e?this.length+n:e}};function Zg(t){return t[8]}function tl(t){return t[8]||(t[8]=[])}const kr={};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class _m extends en{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){const n=Ae(e);return new Cm(n,this.ngModule)}}function Dm(t){const e=[];for(let n in t)t.hasOwnProperty(n)&&e.push({propName:t[n],templateName:n});return e}const tT=new Q("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>_f});class Cm extends Vg{constructor(e,n){super(),this.componentDef=e,this.ngModule=n,this.componentType=e.type,this.selector=function(t){return t.map(GE).join(",")}(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return Dm(this.componentDef.inputs)}get outputs(){return Dm(this.componentDef.outputs)}create(e,n,r,o){const s=(o=o||this.ngModule)?function(t,e){return{get:(n,r,o)=>{const s=t.get(n,kr,o);return s!==kr||r===kr?s:e.get(n,r,o)}}}(e,o.injector):e,i=s.get(ui,hd),a=s.get(Xu,null),u=i.createRenderer(null,this.componentDef),l=this.componentDef.selectors[0][0]||"div",c=r?function(t,e,n){if(re(t))return t.selectRootElement(e,n===de.ShadowDom);let r="string"==typeof e?t.querySelector(e):e;return r.textContent="",r}(u,r,this.componentDef.encapsulation):Za(i.createRenderer(null,this.componentDef),l,function(t){const e=t.toLowerCase();return"svg"===e?"http://www.w3.org/2000/svg":"math"===e?"http://www.w3.org/1998/MathML/":null}(l)),d=this.componentDef.onPush?576:528,f=function(t,e){return{components:[],scheduler:t||_f,clean:xb,playerHandler:e||null,flags:0}}(),h=zs(0,null,null,1,0,null,null,null,null,null),p=_o(null,h,f,d,null,null,i,u,a,s);let m,g;Cs(p);try{const D=function(t,e,n,r,o,s){const i=n[1];n[20]=t;const u=dr(i,20,2,"#host",null),l=u.mergedAttrs=e.hostAttrs;null!==l&&(Ks(u,l,!0),null!==t&&(Is(o,t,l),null!==u.classes&&ru(o,t,u.classes),null!==u.styles&&Vf(o,t,u.styles)));const c=r.createRenderer(t,e),d=_o(n,rh(e),null,e.onPush?64:16,n[20],u,r,c,s||null,null);return i.firstCreatePass&&(xs(to(u,n),i,e.type),dh(i,u),fh(u,n.length,1)),Qs(n,d),n[20]=d}(c,this.componentDef,p,i,u);if(c)if(r)Is(u,c,["ng-version",Ug.full]);else{const{attrs:y,classes:b}=function(t){const e=[],n=[];let r=1,o=2;for(;r<t.length;){let s=t[r];if("string"==typeof s)2===o?""!==s&&e.push(s,t[++r]):8===o&&n.push(s);else{if(!gt(o))break;o=s}r++}return{attrs:e,classes:n}}(this.componentDef.selectors[0]);y&&Is(u,c,y),b&&b.length>0&&ru(u,c,b.join(" "))}if(g=fa(h,Y),void 0!==n){const y=g.projection=[];for(let b=0;b<this.ngContentSelectors.length;b++){const v=n[b];y.push(null!=v?Array.from(v):null)}}m=function(t,e,n,r,o){const s=n[1],i=function(t,e,n){const r=fe();t.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),hh(t,r,e,fr(t,e,1,null),n));const o=no(e,t,r.directiveStart,r);ve(o,e);const s=nt(r,e);return s&&ve(s,e),o}(s,n,e);if(r.components.push(i),t[8]=i,o&&o.forEach(u=>u(i,e)),e.contentQueries){const u=fe();e.contentQueries(1,i,u.directiveStart)}const a=fe();return!s.firstCreatePass||null===e.hostBindings&&null===e.hostAttrs||(fn(a.index),lh(n[1],a,0,a.directiveStart,a.directiveEnd,e),ch(e,i)),i}(D,this.componentDef,p,f,[tw]),Do(h,p,null)}finally{Es()}return new oT(this.componentType,m,Nr(g,p),p,g)}}class oT extends
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class{}{constructor(e,n,r,o,s){super(),this.location=r,this._rootLView=o,this._tNode=s,this.instance=n,this.hostView=this.changeDetectorRef=new H0(o),this.componentType=e}get injector(){return new er(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Lr=new Map;
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class aT extends Vn{constructor(e,n){super(),this._parent=n,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new _m(this);const r=Xe(e),o=function(t){return t[iD]||null}(e);o&&Gu(o),this._bootstrapComponents=Lt(r.bootstrap),this._r3Injector=wh(e,n,[{provide:Vn,useValue:this},{provide:en,useValue:this.componentFactoryResolver}],O(e)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(e)}get(e,n=U.THROW_IF_NOT_FOUND,r=T.Default){return e===U||e===Vn||e===pr?this:this._r3Injector.get(e,n,r)}destroy(){const e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}}class pl extends class{}{constructor(e){super(),this.moduleType=e,null!==Xe(e)&&function(t){const e=new Set;!function n(r){const o=Xe(r,!0),s=o.id;null!==s&&(function(t,e,n){if(e&&e!==n)throw new Error(`Duplicate module registered for ${t} - ${O(e)} vs ${O(e.name)}`)}(s,Lr.get(s),r),Lr.set(s,r));const i=Lt(o.imports);for(const a of i)e.has(a)||(e.add(a),n(a))}(t)}(e)}create(e){return new aT(this.moduleType,e)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function gl(t){return e=>{setTimeout(t,void 0,e)}}const vt=
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class extends is{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,n,r){var o,s,i;let a=e,u=n||(()=>null),l=r;if(e&&"object"==typeof e){const d=e;a=null===(o=d.next)||void 0===o?void 0:o.bind(d),u=null===(s=d.error)||void 0===s?void 0:s.bind(d),l=null===(i=d.complete)||void 0===i?void 0:i.bind(d)}this.__isAsync&&(u=gl(u),a&&(a=gl(a)),l&&(l=gl(l)));const c=super.subscribe({next:a,error:u,complete:l});return e instanceof ee&&e.add(c),c}};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Pm(t,e){return di(t,e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */Symbol;const Di=new Q("Application Initializer");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let jr=(()=>{class t{constructor(n){this.appInits=n,this.resolve=ai,this.reject=ai,this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o})}runInitializers(){if(this.initialized)return;const n=[],r=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let o=0;o<this.appInits.length;o++){const s=this.appInits[o]();if(ju(s))n.push(s);else if(pp(s)){const i=new Promise((a,u)=>{s.subscribe({complete:a,error:u})});n.push(i)}}Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),0===n.length&&r(),this.initialized=!0}}return t.\u0275fac=function(n){return new(n||t)(j(Di,8))},t.\u0275prov=q({token:t,factory:t.\u0275fac}),t})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Wo=new Q("AppId"),dM={provide:Wo,useFactory:function(){return`${Tl()}${Tl()}${Tl()}`},deps:[]};function Tl(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const Zm=new Q("Platform Initializer"),Ml=new Q("Platform ID"),fM=new Q("appBootstrapListener");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Sl=(()=>{class t{log(n){console.log(n)}warn(n){console.warn(n)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=q({token:t,factory:t.\u0275fac}),t})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Dn=new Q("LocaleId"),Jm=new Q("DefaultCurrencyCode");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class pM{constructor(e,n){this.ngModuleFactory=e,this.componentFactories=n}}const xl=function(t){return new pl(t)},gM=xl,mM=function(t){return Promise.resolve(xl(t))},Xm=function(t){const e=xl(t),r=Lt(Xe(t).declarations).reduce((o,s)=>{const i=Ae(s);return i&&o.push(new Cm(i)),o},[]);return new pM(e,r)},yM=Xm,_M=function(t){return Promise.resolve(Xm(t))};let Ei=(()=>{class t{constructor(){this.compileModuleSync=gM,this.compileModuleAsync=mM,this.compileModuleAndAllComponentsSync=yM,this.compileModuleAndAllComponentsAsync=_M}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=q({token:t,factory:t.\u0275fac}),t})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const EM=(()=>Promise.resolve(0))();function Al(t){"undefined"==typeof Zone?EM.then(()=>{t&&t.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class De{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new vt(!1),this.onMicrotaskEmpty=new vt(!1),this.onStable=new vt(!1),this.onError=new vt(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched();const o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function(){let t=W.requestAnimationFrame,e=W.cancelAnimationFrame;if("undefined"!=typeof Zone&&t&&e){const n=t[Zone.__symbol__("OriginalDelegate")];n&&(t=n);const r=e[Zone.__symbol__("OriginalDelegate")];r&&(e=r)}return{nativeRequestAnimationFrame:t,nativeCancelAnimationFrame:e}}().nativeRequestAnimationFrame,function(t){const e=()=>{!function(t){t.isCheckStableRunning||-1!==t.lastRequestAnimationFrameId||(t.lastRequestAnimationFrameId=t.nativeRequestAnimationFrame.call(W,()=>{t.fakeTopEventTask||(t.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{t.lastRequestAnimationFrameId=-1,Rl(t),t.isCheckStableRunning=!0,Nl(t),t.isCheckStableRunning=!1},void 0,()=>{},()=>{})),t.fakeTopEventTask.invoke()}),Rl(t))}(t)};t._inner=t._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,s,i,a)=>{try{return ey(t),n.invokeTask(o,s,i,a)}finally{(t.shouldCoalesceEventChangeDetection&&"eventTask"===s.type||t.shouldCoalesceRunChangeDetection)&&e(),ty(t)}},onInvoke:(n,r,o,s,i,a,u)=>{try{return ey(t),n.invoke(o,s,i,a,u)}finally{t.shouldCoalesceRunChangeDetection&&e(),ty(t)}},onHasTask:(n,r,o,s)=>{n.hasTask(o,s),r===o&&("microTask"==s.change?(t._hasPendingMicrotasks=s.microTask,Rl(t),Nl(t)):"macroTask"==s.change&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(n,r,o,s)=>(n.handleError(o,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}(o)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!De.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(De.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(e,n,r){return this._inner.run(e,n,r)}runTask(e,n,r,o){const s=this._inner,i=s.scheduleEventTask("NgZoneEvent: "+o,e,wM,ai,ai);try{return s.runTask(i,n,r)}finally{s.cancelTask(i)}}runGuarded(e,n,r){return this._inner.runGuarded(e,n,r)}runOutsideAngular(e){return this._outer.run(e)}}const wM={};function Nl(t){if(0==t._nesting&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function Rl(t){t.hasPendingMicrotasks=!!(t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&-1!==t.lastRequestAnimationFrameId)}function ey(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function ty(t){t._nesting--,Nl(t)}class TM{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new vt,this.onMicrotaskEmpty=new vt,this.onStable=new vt,this.onError=new vt}run(e,n,r){return e.apply(n,r)}runGuarded(e,n,r){return e.apply(n,r)}runOutsideAngular(e){return e()}runTask(e,n,r,o){return e.apply(n,r)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Pl=(()=>{class t{constructor(n){this._ngZone=n,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{De.assertNotInAngularZone(),Al(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())Al(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(n)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,r,o){let s=-1;r&&r>0&&(s=setTimeout(()=>{this._callbacks=this._callbacks.filter(i=>i.timeoutId!==s),n(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:n,timeoutId:s,updateCb:o})}whenStable(n,r,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,r,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(n,r,o){return[]}}return t.\u0275fac=function(n){return new(n||t)(j(De))},t.\u0275prov=q({token:t,factory:t.\u0275fac}),t})(),ny=(()=>{class t{constructor(){this._applications=new Map,Fl.addToWindow(this)}registerApplication(n,r){this._applications.set(n,r)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,r=!0){return Fl.findTestabilityInTree(this,n,r)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=q({token:t,factory:t.\u0275fac}),t})();class MM{addToWindow(e){}findTestabilityInTree(e,n,r){return null}}let It,Fl=new MM,ry=!0,oy=!1;
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const iy=new Q("AllowMultipleToken");function ay(t,e,n=[]){const r=`Platform: ${e}`,o=new Q(r);return(s=[])=>{let i=uy();if(!i||i.injector.get(iy,!1))if(t)t(n.concat(s).concat({provide:o,useValue:!0}));else{const a=n.concat(s).concat({provide:o,useValue:!0},{provide:Co,useValue:"platform"});!function(t){if(It&&!It.destroyed&&!It.injector.get(iy,!1))throw new Error("There can be only one platform. Destroy the previous one to create a new one.");It=t.get(ly);const e=t.get(Zm,null);e&&e.forEach(n=>n())}(U.create({providers:a,name:r}))}return function(t){const e=uy();if(!e)throw new Error("No platform exists!");if(!e.injector.get(t,null))throw new Error("A platform with a different configuration has been created. Please destroy it first.");return e}(o)}}function uy(){return It&&!It.destroyed?It:null}let ly=(()=>{class t{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,r){const a=function(t,e){let n;return n="noop"===t?new TM:("zone.js"===t?void 0:t)||new De({enableLongStackTrace:(oy=!0,ry),shouldCoalesceEventChangeDetection:!!(null==e?void 0:e.ngZoneEventCoalescing),shouldCoalesceRunChangeDetection:!!(null==e?void 0:e.ngZoneRunCoalescing)}),n}(r?r.ngZone:void 0,{ngZoneEventCoalescing:r&&r.ngZoneEventCoalescing||!1,ngZoneRunCoalescing:r&&r.ngZoneRunCoalescing||!1}),u=[{provide:De,useValue:a}];return a.run(()=>{const l=U.create({providers:u,parent:this.injector,name:n.moduleType.name}),c=n.create(l),d=c.injector.get(Pn,null);if(!d)throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");return a.runOutsideAngular(()=>{const f=a.onError.subscribe({next:h=>{d.handleError(h)}});c.onDestroy(()=>{Ol(this._modules,c),f.unsubscribe()})}),function(t,e,n){try{const r=n();return ju(r)?r.catch(o=>{throw e.runOutsideAngular(()=>t.handleError(o)),o}):r}catch(r){throw e.runOutsideAngular(()=>t.handleError(r)),r}}(d,a,()=>{const f=c.injector.get(jr);return f.runInitializers(),f.donePromise.then(()=>(Gu(c.injector.get(Dn,ni)||ni),this._moduleDoBootstrap(c),c))})})}bootstrapModule(n,r=[]){const o=cy({},r);return function(t,e,n){const r=new pl(n);return Promise.resolve(r)}(0,0,n).then(s=>this.bootstrapModuleFactory(s,o))}_moduleDoBootstrap(n){const r=n.injector.get(Br);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(o=>r.bootstrap(o));else{if(!n.instance.ngDoBootstrap)throw new Error(`The module ${O(n.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);n.instance.ngDoBootstrap(r)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Error("The platform has already been destroyed!");this._modules.slice().forEach(n=>n.destroy()),this._destroyListeners.forEach(n=>n()),this._destroyed=!0}get destroyed(){return this._destroyed}}return t.\u0275fac=function(n){return new(n||t)(j(U))},t.\u0275prov=q({token:t,factory:t.\u0275fac}),t})();function cy(t,e){return Array.isArray(e)?e.reduce(cy,t):Object.assign(Object.assign({},t),e)}let Br=(()=>{class t{constructor(n,r,o,s,i){this._zone=n,this._injector=r,this._exceptionHandler=o,this._componentFactoryResolver=s,this._initStatus=i,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const a=new ye(l=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{l.next(this._stable),l.complete()})}),u=new ye(l=>{let c;this._zone.runOutsideAngular(()=>{c=this._zone.onStable.subscribe(()=>{De.assertNotInAngularZone(),Al(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,l.next(!0))})})});const d=this._zone.onUnstable.subscribe(()=>{De.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{l.next(!1)}))});return()=>{c.unsubscribe(),d.unsubscribe()}});this.isStable=Kc(a,u.pipe(t=>Yc()(function(t,e){return function(r){let o;o="function"==typeof t?t:function(){return t};const s=Object.create(r,B_);return s.source=r,s.subjectFactory=o,s}}(G_)(t))))}bootstrap(n,r){if(!this._initStatus.done)throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");let o;o=n instanceof Vg?n:this._componentFactoryResolver.resolveComponentFactory(n),this.componentTypes.push(o.componentType);const s=function(t){return t.isBoundToModule}(o)?void 0:this._injector.get(Vn),a=o.create(U.NULL,[],r||o.selector,s),u=a.location.nativeElement,l=a.injector.get(Pl,null),c=l&&a.injector.get(ny);return l&&c&&c.registerApplication(u,l),a.onDestroy(()=>{this.detachView(a.hostView),Ol(this.components,a),c&&c.unregisterApplication(u)}),this._loadComponent(a),a}tick(){if(this._runningTick)throw new Error("ApplicationRef.tick is called recursively");try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){const r=n;Ol(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(fM,[]).concat(this._bootstrapListeners).forEach(o=>o(n))}ngOnDestroy(){this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}get viewCount(){return this._views.length}}return t.\u0275fac=function(n){return new(n||t)(j(De),j(U),j(Pn),j(en),j(jr))},t.\u0275prov=q({token:t,factory:t.\u0275fac}),t})();function Ol(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const eS=ay(null,"core",[{provide:Ml,useValue:"unknown"},{provide:ly,deps:[U]},{provide:ny,deps:[]},{provide:Sl,deps:[]}]),sS=[{provide:Br,useClass:Br,deps:[De,U,Pn,en,jr]},{provide:tT,deps:[De],useFactory:function(t){let e=[];return t.onStable.subscribe(()=>{for(;e.length;)e.pop()()}),function(n){e.push(n)}}},{provide:jr,useClass:jr,deps:[[new Ft,Di]]},{provide:Ei,useClass:Ei,deps:[]},dM,{provide:No,useFactory:
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function(){return Q0},deps:[]},{provide:Rr,useFactory:function(){return K0},deps:[]},{provide:Dn,useFactory:function(t){return Gu(t=t||"undefined"!=typeof $localize&&$localize.locale||ni),t},deps:[[new lo(Dn),new Ft,new Nn]]},{provide:Jm,useValue:"USD"}];
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let aS=(()=>{class t{constructor(n){}}return t.\u0275fac=function(n){return new(n||t)(j(Br))},t.\u0275mod=Gn({type:t}),t.\u0275inj=an({providers:sS}),t})(),Ni=null;
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ko(){return Ni}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Le=new Q("DocumentToken");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
var le=(()=>((le=le||{})[le.Zero=0]="Zero",le[le.One=1]="One",le[le.Two=2]="Two",le[le.Few=3]="Few",le[le.Many=4]="Many",le[le.Other=5]="Other",le))();const gx=function(t){return function(t){const e=function(t){return t.toLowerCase().replace(/_/g,"-")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t);let n=fg(e);if(n)return n;const r=e.split("-")[0];if(n=fg(r),n)return n;if("en"===r)return Iv;throw new Error(`Missing locale data for the locale "${t}".`)}(t)[E.PluralCase]};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Hi{}let Wx=(()=>{class t extends Hi{constructor(n){super(),this.locale=n}getPluralCategory(n,r){switch(gx(r||this.locale)(n)){case le.Zero:return"zero";case le.One:return"one";case le.Two:return"two";case le.Few:return"few";case le.Many:return"many";default:return"other"}}}return t.\u0275fac=function(n){return new(n||t)(j(Dn))},t.\u0275prov=q({token:t,factory:t.\u0275fac}),t})(),Qy=(()=>{class t{constructor(n,r,o,s){this._iterableDiffers=n,this._keyValueDiffers=r,this._ngEl=o,this._renderer=s,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(n){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof n?n.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(n){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof n?n.split(/\s+/):n,this._rawClass&&(wo(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const n=this._iterableDiffer.diff(this._rawClass);n&&this._applyIterableChanges(n)}else if(this._keyValueDiffer){const n=this._keyValueDiffer.diff(this._rawClass);n&&this._applyKeyValueChanges(n)}}_applyKeyValueChanges(n){n.forEachAddedItem(r=>this._toggleClass(r.key,r.currentValue)),n.forEachChangedItem(r=>this._toggleClass(r.key,r.currentValue)),n.forEachRemovedItem(r=>{r.previousValue&&this._toggleClass(r.key,!1)})}_applyIterableChanges(n){n.forEachAddedItem(r=>{if("string"!=typeof r.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${O(r.item)}`);this._toggleClass(r.item,!0)}),n.forEachRemovedItem(r=>this._toggleClass(r.item,!1))}_applyClasses(n){n&&(Array.isArray(n)||n instanceof Set?n.forEach(r=>this._toggleClass(r,!0)):Object.keys(n).forEach(r=>this._toggleClass(r,!!n[r])))}_removeClasses(n){n&&(Array.isArray(n)||n instanceof Set?n.forEach(r=>this._toggleClass(r,!1)):Object.keys(n).forEach(r=>this._toggleClass(r,!1)))}_toggleClass(n,r){(n=n.trim())&&n.split(/\s+/g).forEach(o=>{r?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}}return t.\u0275fac=function(n){return new(n||t)(V(No),V(Rr),V(Et),V($g))},t.\u0275dir=Je({type:t,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"}}),t})(),Yy=(()=>{class t{constructor(n,r){this._viewContainer=n,this._context=new Yx,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=r}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){Zy("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){Zy("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,r){return!0}}return t.\u0275fac=function(n){return new(n||t)(V(Wt),V(tn))},t.\u0275dir=Je({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}}),t})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Yx{constructor(){this.$implicit=null,this.ngIf=null}}function Zy(t,e){if(e&&!e.createEmbeddedView)throw new Error(`${t} must be a TemplateRef, but received '${O(e)}'.`)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let uc=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=Gn({type:t}),t.\u0275inj=an({providers:[{provide:Hi,useClass:Wx}]}),t})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class lc extends
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license Angular v12.2.2
     * (c) 2010-2021 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class extends class{}{constructor(){super(...arguments),this.supportsDOMEvents=!0}}{static makeCurrent(){!function(t){Ni||(Ni=t)}(new lc)}onAndCancel(e,n,r){return e.addEventListener(n,r,!1),()=>{e.removeEventListener(n,r,!1)}}dispatchEvent(e,n){e.dispatchEvent(n)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,n){return(n=n||this.getDefaultDocument()).createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,n){return"window"===n?window:"document"===n?e:"body"===n?e.body:null}getBaseHref(e){const n=(Jo=Jo||document.querySelector("base"),Jo?Jo.getAttribute("href"):null);return null==n?null:function(t){$i=$i||document.createElement("a"),$i.setAttribute("href",t);const e=$i.pathname;return"/"===e.charAt(0)?e:`/${e}`}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(n)}resetBaseElement(){Jo=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
return function(t,e){e=encodeURIComponent(e);for(const n of t.split(";")){const r=n.indexOf("="),[o,s]=-1==r?[n,""]:[n.slice(0,r),n.slice(r+1)];if(o.trim()===e)return decodeURIComponent(s)}return null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(document.cookie,e)}}let $i,Jo=null;const n_=new Q("TRANSITION_ID"),N1=[{provide:Di,useFactory:function(t,e,n){return()=>{n.get(jr).donePromise.then(()=>{const r=Ko(),o=e.querySelectorAll(`style[ng-transition="${t}"]`);for(let s=0;s<o.length;s++)r.remove(o[s])})}},deps:[n_,Le,U],multi:!0}];
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class cc{static init(){!function(t){Fl=t}(new cc)}addToWindow(e){W.getAngularTestability=(r,o=!0)=>{const s=e.findTestabilityInTree(r,o);if(null==s)throw new Error("Could not find testability for element.");return s},W.getAllAngularTestabilities=()=>e.getAllTestabilities(),W.getAllAngularRootElements=()=>e.getAllRootElements(),W.frameworkStabilizers||(W.frameworkStabilizers=[]),W.frameworkStabilizers.push(r=>{const o=W.getAllAngularTestabilities();let s=o.length,i=!1;const a=function(u){i=i||u,s--,0==s&&r(i)};o.forEach(function(u){u.whenStable(a)})})}findTestabilityInTree(e,n,r){if(null==n)return null;const o=e.getTestability(n);return null!=o?o:r?Ko().isShadowRoot(n)?this.findTestabilityInTree(e,n.host,!0):this.findTestabilityInTree(e,n.parentElement,!0):null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let R1=(()=>{class t{build(){return new XMLHttpRequest}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=q({token:t,factory:t.\u0275fac}),t})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Xo=new Q("EventManagerPlugins");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Wi=(()=>{class t{constructor(n,r){this._zone=r,this._eventNameToPlugin=new Map,n.forEach(o=>o.manager=this),this._plugins=n.slice().reverse()}addEventListener(n,r,o){return this._findPluginFor(r).addEventListener(n,r,o)}addGlobalEventListener(n,r,o){return this._findPluginFor(r).addGlobalEventListener(n,r,o)}getZone(){return this._zone}_findPluginFor(n){const r=this._eventNameToPlugin.get(n);if(r)return r;const o=this._plugins;for(let s=0;s<o.length;s++){const i=o[s];if(i.supports(n))return this._eventNameToPlugin.set(n,i),i}throw new Error(`No event manager plugin found for event ${n}`)}}return t.\u0275fac=function(n){return new(n||t)(j(Xo),j(De))},t.\u0275prov=q({token:t,factory:t.\u0275fac}),t})();class dc{constructor(e){this._doc=e}addGlobalEventListener(e,n,r){const o=Ko().getGlobalEventTarget(this._doc,e);if(!o)throw new Error(`Unsupported event target ${o} for event ${n}`);return this.addEventListener(o,n,r)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let o_=(()=>{class t{constructor(){this._stylesSet=new Set}addStyles(n){const r=new Set;n.forEach(o=>{this._stylesSet.has(o)||(this._stylesSet.add(o),r.add(o))}),this.onStylesAdded(r)}onStylesAdded(n){}getAllStyles(){return Array.from(this._stylesSet)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=q({token:t,factory:t.\u0275fac}),t})(),es=(()=>{class t extends o_{constructor(n){super(),this._doc=n,this._hostNodes=new Map,this._hostNodes.set(n.head,[])}_addStylesToHost(n,r,o){n.forEach(s=>{const i=this._doc.createElement("style");i.textContent=s,o.push(r.appendChild(i))})}addHost(n){const r=[];this._addStylesToHost(this._stylesSet,n,r),this._hostNodes.set(n,r)}removeHost(n){const r=this._hostNodes.get(n);r&&r.forEach(s_),this._hostNodes.delete(n)}onStylesAdded(n){this._hostNodes.forEach((r,o)=>{this._addStylesToHost(n,o,r)})}ngOnDestroy(){this._hostNodes.forEach(n=>n.forEach(s_))}}return t.\u0275fac=function(n){return new(n||t)(j(Le))},t.\u0275prov=q({token:t,factory:t.\u0275fac}),t})();function s_(t){Ko().remove(t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const fc={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},hc=/%COMP%/g;function Gi(t,e,n){for(let r=0;r<e.length;r++){let o=e[r];Array.isArray(o)?Gi(t,o,n):(o=o.replace(hc,t),n.push(o))}return n}function u_(t){return e=>{if("__ngUnwrap__"===e)return t;!1===t(e)&&(e.preventDefault(),e.returnValue=!1)}}let pc=(()=>{class t{constructor(n,r,o){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.rendererByCompId=new Map,this.defaultRenderer=new gc(n)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;switch(r.encapsulation){case de.Emulated:{let o=this.rendererByCompId.get(r.id);return o||(o=new z1(this.eventManager,this.sharedStylesHost,r,this.appId),this.rendererByCompId.set(r.id,o)),o.applyToHost(n),o}case 1:case de.ShadowDom:return new Q1(this.eventManager,this.sharedStylesHost,n,r);default:if(!this.rendererByCompId.has(r.id)){const o=Gi(r.id,r.styles,[]);this.sharedStylesHost.addStyles(o),this.rendererByCompId.set(r.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return t.\u0275fac=function(n){return new(n||t)(j(Wi),j(es),j(Wo))},t.\u0275prov=q({token:t,factory:t.\u0275fac}),t})();class gc{constructor(e){this.eventManager=e,this.data=Object.create(null)}destroy(){}createElement(e,n){return n?document.createElementNS(fc[n]||n,e):document.createElement(e)}createComment(e){return document.createComment(e)}createText(e){return document.createTextNode(e)}appendChild(e,n){e.appendChild(n)}insertBefore(e,n,r){e&&e.insertBefore(n,r)}removeChild(e,n){e&&e.removeChild(n)}selectRootElement(e,n){let r="string"==typeof e?document.querySelector(e):e;if(!r)throw new Error(`The selector "${e}" did not match any elements`);return n||(r.textContent=""),r}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,n,r,o){if(o){n=o+":"+n;const s=fc[o];s?e.setAttributeNS(s,n,r):e.setAttribute(n,r)}else e.setAttribute(n,r)}removeAttribute(e,n,r){if(r){const o=fc[r];o?e.removeAttributeNS(o,n):e.removeAttribute(`${r}:${n}`)}else e.removeAttribute(n)}addClass(e,n){e.classList.add(n)}removeClass(e,n){e.classList.remove(n)}setStyle(e,n,r,o){o&(Ke.DashCase|Ke.Important)?e.style.setProperty(n,r,o&Ke.Important?"important":""):e.style[n]=r}removeStyle(e,n,r){r&Ke.DashCase?e.style.removeProperty(n):e.style[n]=""}setProperty(e,n,r){e[n]=r}setValue(e,n){e.nodeValue=n}listen(e,n,r){return"string"==typeof e?this.eventManager.addGlobalEventListener(e,n,u_(r)):this.eventManager.addEventListener(e,n,u_(r))}}class z1 extends gc{constructor(e,n,r,o){super(e),this.component=r;const s=Gi(o+"-"+r.id,r.styles,[]);n.addStyles(s),this.contentAttr=function(t){return"_ngcontent-%COMP%".replace(hc,t)}(o+"-"+r.id),this.hostAttr=function(t){return"_nghost-%COMP%".replace(hc,t)}(o+"-"+r.id)}applyToHost(e){super.setAttribute(e,this.hostAttr,"")}createElement(e,n){const r=super.createElement(e,n);return super.setAttribute(r,this.contentAttr,""),r}}class Q1 extends gc{constructor(e,n,r,o){super(e),this.sharedStylesHost=n,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const s=Gi(o.id,o.styles,[]);for(let i=0;i<s.length;i++){const a=document.createElement("style");a.textContent=s[i],this.shadowRoot.appendChild(a)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(e,n){return super.appendChild(this.nodeOrShadowRoot(e),n)}insertBefore(e,n,r){return super.insertBefore(this.nodeOrShadowRoot(e),n,r)}removeChild(e,n){return super.removeChild(this.nodeOrShadowRoot(e),n)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let K1=(()=>{class t extends dc{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o){return n.addEventListener(r,o,!1),()=>this.removeEventListener(n,r,o)}removeEventListener(n,r,o){return n.removeEventListener(r,o)}}return t.\u0275fac=function(n){return new(n||t)(j(Le))},t.\u0275prov=q({token:t,factory:t.\u0275fac}),t})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const d_=["alt","control","meta","shift"],nA={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},f_={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},rA={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey};let oA=(()=>{class t extends dc{constructor(n){super(n)}supports(n){return null!=t.parseEventName(n)}addEventListener(n,r,o){const s=t.parseEventName(r),i=t.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ko().onAndCancel(n,s.domEventName,i))}static parseEventName(n){const r=n.toLowerCase().split("."),o=r.shift();if(0===r.length||"keydown"!==o&&"keyup"!==o)return null;const s=t._normalizeKey(r.pop());let i="";if(d_.forEach(u=>{const l=r.indexOf(u);l>-1&&(r.splice(l,1),i+=u+".")}),i+=s,0!=r.length||0===s.length)return null;const a={};return a.domEventName=o,a.fullKey=i,a}static getEventFullKey(n){let r="",o=function(t){let e=t.key;if(null==e){if(e=t.keyIdentifier,null==e)return"Unidentified";e.startsWith("U+")&&(e=String.fromCharCode(parseInt(e.substring(2),16)),3===t.location&&f_.hasOwnProperty(e)&&(e=f_[e]))}return nA[e]||e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(n);return o=o.toLowerCase()," "===o?o="space":"."===o&&(o="dot"),d_.forEach(s=>{s!=o&&rA[s](n)&&(r+=s+".")}),r+=o,r}static eventCallback(n,r,o){return s=>{t.getEventFullKey(s)===n&&o.runGuarded(()=>r(s))}}static _normalizeKey(n){switch(n){case"esc":return"escape";default:return n}}}return t.\u0275fac=function(n){return new(n||t)(j(Le))},t.\u0275prov=q({token:t,factory:t.\u0275fac}),t})();const fA=ay(eS,"browser",[{provide:Ml,useValue:"browser"},{provide:Zm,useValue:
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function(){lc.makeCurrent(),cc.init()},multi:!0},{provide:Le,useFactory:function(){return function(t){ca=t}(document),document},deps:[]}]),hA=[[],{provide:Co,useValue:"root"},{provide:Pn,useFactory:function(){return new Pn},deps:[]},{provide:Xo,useClass:K1,multi:!0,deps:[Le,De,Ml]},{provide:Xo,useClass:oA,multi:!0,deps:[Le]},[],{provide:pc,useClass:pc,deps:[Wi,es,Wo]},{provide:ui,useExisting:pc},{provide:o_,useExisting:es},{provide:es,useClass:es,deps:[Le]},{provide:Pl,useClass:Pl,deps:[De]},{provide:Wi,useClass:Wi,deps:[Xo,De]},{provide:
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class{},useClass:R1,deps:[]},[]];let pA=(()=>{class t{constructor(n){if(n)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(n){return{ngModule:t,providers:[{provide:Wo,useValue:n.appId},{provide:n_,useExisting:Wo},N1]}}}return t.\u0275fac=function(n){return new(n||t)(j(t,12))},t.\u0275mod=Gn({type:t}),t.\u0275inj=an({providers:hA,imports:[uc,aS]}),t})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */"undefined"!=typeof window&&window;var on=(()=>(function(t){t.Active="Active",t.SetUpRequired="Setup Required",t.Init=""}(on||(on={})),on))();function Cc(...t){let e=t[t.length-1];return Vc(e)?(t.pop(),Qi(t,e)):Qc(t)}class wA extends ee{constructor(e,n){super()}schedule(e,n=0){return this}}class p_ extends wA{constructor(e,n){super(e,n),this.scheduler=e,this.work=n,this.pending=!1}schedule(e,n=0){if(this.closed)return this;this.state=e;const r=this.id,o=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(o,r,n)),this.pending=!0,this.delay=n,this.id=this.id||this.requestAsyncId(o,this.id,n),this}requestAsyncId(e,n,r=0){return setInterval(e.flush.bind(e,this),r)}recycleAsyncId(e,n,r=0){if(null!==r&&this.delay===r&&!1===this.pending)return n;clearInterval(n)}execute(e,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(e,n);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,n){let o,r=!1;try{this.work(e)}catch(s){r=!0,o=!!s&&s||new Error(s)}if(r)return this.unsubscribe(),o}_unsubscribe(){const e=this.id,n=this.scheduler,r=n.actions,o=r.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==o&&r.splice(o,1),null!=e&&(this.id=this.recycleAsyncId(n,e,null)),this.delay=null}}let g_=(()=>{class t{constructor(n,r=t.now){this.SchedulerAction=n,this.now=r}schedule(n,r=0,o){return new this.SchedulerAction(this,n).schedule(o,r)}}return t.now=()=>Date.now(),t})();class sn extends g_{constructor(e,n=g_.now){super(e,()=>sn.delegate&&sn.delegate!==this?sn.delegate.now():n()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(e,n=0,r){return sn.delegate&&sn.delegate!==this?sn.delegate.schedule(e,n,r):super.schedule(e,n,r)}flush(e){const{actions:n}=this;if(this.active)return void n.push(e);let r;this.active=!0;do{if(r=e.execute(e.state,e.delay))break}while(e=n.shift());if(this.active=!1,r){for(;e=n.shift();)e.unsubscribe();throw r}}}const vA=new sn(p_),TA=new ye(t=>t.complete());class $e{constructor(e,n,r){this.kind=e,this.value=n,this.error=r,this.hasValue="N"===e}observe(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}}do(e,n,r){switch(this.kind){case"N":return e&&e(this.value);case"E":return n&&n(this.error);case"C":return r&&r()}}accept(e,n,r){return e&&"function"==typeof e.next?this.observe(e):this.do(e,n,r)}toObservable(){switch(this.kind){case"N":return Cc(this.value);case"E":return function(t,e){return new ye(n=>n.error(t))}(this.error);case"C":return function(t){return t?function(t){return new ye(e=>t.schedule(()=>e.complete()))}(t):TA}()}throw new Error("unexpected notification kind value")}static createNext(e){return void 0!==e?new $e("N",e):$e.undefinedValueNotification}static createError(e){return new $e("E",void 0,e)}static createComplete(){return $e.completeNotification}}function m_(t,e=vA){const r=function(t){return t instanceof Date&&!isNaN(+t)}(t)?+t-e.now():Math.abs(t);return o=>o.lift(new NA(r,e))}$e.completeNotification=new $e("C"),$e.undefinedValueNotification=new $e("N",void 0);class NA{constructor(e,n){this.delay=e,this.scheduler=n}call(e,n){return n.subscribe(new Ec(e,this.delay,this.scheduler))}}class Ec extends Se{constructor(e,n,r){super(e),this.delay=n,this.scheduler=r,this.queue=[],this.active=!1,this.errored=!1}static dispatch(e){const n=e.source,r=n.queue,o=e.scheduler,s=e.destination;for(;r.length>0&&r[0].time-o.now()<=0;)r.shift().notification.observe(s);if(r.length>0){const i=Math.max(0,r[0].time-o.now());this.schedule(e,i)}else this.unsubscribe(),n.active=!1}_schedule(e){this.active=!0,this.destination.add(e.schedule(Ec.dispatch,this.delay,{source:this,destination:this.destination,scheduler:e}))}scheduleNotification(e){if(!0===this.errored)return;const n=this.scheduler,r=new RA(n.now()+this.delay,e);this.queue.push(r),!1===this.active&&this._schedule(n)}_next(e){this.scheduleNotification($e.createNext(e))}_error(e){this.errored=!0,this.queue=[],this.destination.error(e),this.unsubscribe()}_complete(){this.scheduleNotification($e.createComplete()),this.unsubscribe()}}class RA{constructor(e,n){this.time=e,this.notification=n}}let PA=(()=>{class t{integrate(n){return Cc(!0).pipe(m_(2e3),zr(()=>({status:on.Active})))}checkStatus(n,r){return Cc(!0).pipe(m_(2e3),zr(()=>({status:on.SetUpRequired})))}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=q({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function FA(t,e){1&t&&(function(t,e,n){const r=_(),o=H(),s=t+Y,i=o.firstCreatePass?
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function(t,e,n,r,o){const s=e.consts,i=dn(s,r),a=dr(e,t,8,"ng-container",i);return null!==i&&Ks(a,i,!0),mu(e,n,a,dn(s,o)),null!==e.queries&&e.queries.elementStart(e,a),a}(s,o,r,e,n):o.data[s];Nt(i,!0);const a=r[s]=r[P].createComment("");$s(o,r,a,i),ve(a,r),gs(i)&&(pu(o,r,i),nh(o,i,r)),null!=n&&gu(r,i)}(0),Io(1,"div",9),function(){let t=fe();const e=H();ga()?ma():(t=t.parent,Nt(t,!1)),e.firstCreatePass&&(bs(e,t),ia(t)&&e.queries.elementEnd(t))}())}function OA(t,e){if(1&t&&(Bt(0,"span",10),Io(1,"div",11),Bt(2,"p",12),Uu(3),Ht(),Ht()),2&t){const n=Dp();gn(1),kn("ngClass",n.statusBgColor),gn(1),kn("ngClass",n.statusFontColor),gn(1),ti(n.status)}}function kA(t,e){1&t&&(Bt(0,"div",13),function(t,e=0,n){const r=_(),o=H(),s=dr(o,Y+t,16,null,n||null);null===s.projection&&(s.projection=e),ma(),64!=(64&s.flags)&&function(t,e,n){Lf(e[P],0,e,n,Mf(t,n,e),Nf(n.parent||e[6],n,e))}(o,r,s)}(1),Io(2,"slot",14),Ht())}const LA=[[["content"]]],VA=["content"];let jA=(()=>{class t{constructor(n,r){this.cd=n,this.service=r,this._status=on.Init,this._statusLoading=!1,this._statusBgColor="",this._statusFontColor="",this._statusConfig={logo:"",label:"",mpKey:"",login:""},this.statusChanged=new vt,this.loading=new vt,console.log("PybMpStatus created")}set integrate(n){n&&(this.updateLoading(!0),this.startIntegration(n))}set configuration(n){n&&(this._statusConfig=n,this.updateLoading(!0),this.getStatus(n))}startIntegration(n){this.service.integrate(n).subscribe(r=>{this.updateLoading(!1),this.updateStatus(r),this.cd.detectChanges()})}getStatus(n){this.service.checkStatus(n.mpKey,n.login).subscribe(r=>{this.updateLoading(!1),this.updateStatus(r),this.cd.detectChanges()})}updateLoading(n){this._statusLoading=n,this.loading.emit(n)}updateStatus(n){switch(this._status=n.status,this.status){case on.Active:this._statusBgColor="bg-green-400",this._statusFontColor="text-green-400";break;case on.SetUpRequired:this._statusBgColor="bg-yellow-400",this._statusFontColor="text-yellow-400"}this.statusChanged.emit(this.status)}get status(){return this._status}get statusLoading(){return this._statusLoading}get statusBgColor(){return this._statusBgColor}get statusFontColor(){return this._statusFontColor}get logo(){var n;return null===(n=this._statusConfig)||void 0===n?void 0:n.logo}get label(){var n;return null===(n=this._statusConfig)||void 0===n?void 0:n.label}get isSetupRequired(){return this._status===on.SetUpRequired}}return t.\u0275fac=function(n){return new(n||t)(V(el),V(PA))},t.\u0275cmp=ra({type:t,selectors:[["pyb-mp-status-inner"]],inputs:{integrate:"integrate",configuration:"configuration"},outputs:{statusChanged:"statusChanged",loading:"loading"},ngContentSelectors:VA,decls:11,vars:5,consts:[[1,"pyb-mp-status","flex","items-center","flex-col","items-start","rounded-sm","border-l-2","border-r-2","border-t-2","border-gray-200"],[1,"flex","flex-row","w-full","justify-between","bg-gray-50","border-gray-200","border-b-2"],[1,"pyb-mp-status__left","flex","flex-row","items-center","flex-row","m-4"],[1,"font-semibold"],[4,"ngIf","ngIfElse"],["statusTemplate",""],[1,"pyb-mp-status__right","flex","items-center","flex-row","w-40","h-10","overflow-hidden","m-4"],[3,"src"],["class","p-4 w-full border-gray-200 border-b-2",4,"ngIf"],[1,"loader","ease-linear","rounded-full","border-2","border-t-2","h-3","w-3","mx-2"],[1,"flex","items-center","flex-row"],[1,"rounded-full","bg-gray-200","h-3","w-3","ml-3","mr-2",3,"ngClass"],[3,"ngClass"],[1,"p-4","w-full","border-gray-200","border-b-2"],["name","content"]],template:function(n,r){if(1&n&&(function(t){const e=_()[16][6];if(!e.projection){const r=e.projection=pn(t?t.length:1,null),o=r.slice();let s=e.child;for(;null!==s;){const i=t?Hw(s,t):0;null!==i&&(o[i]?o[i].projectionNext=s:r[i]=s,o[i]=s),s=s.next}}}(LA),Bt(0,"div",0),Bt(1,"div",1),Bt(2,"div",2),Bt(3,"p",3),Uu(4),Ht(),Js(5,FA,2,0,"ng-container",4),Js(6,OA,4,3,"ng-template",null,5,Pm),Ht(),Bt(8,"div",6),Io(9,"img",7),Ht(),Ht(),Js(10,kA,3,0,"div",8),Ht()),2&n){const o=function(t){return function(t,e){return t[e]}(S.lFrame.contextLView,Y+t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(7);gn(4),ti(r.label),gn(1),kn("ngIf",r.statusLoading)("ngIfElse",o),gn(4),kn("src",r.logo,$a),gn(1),kn("ngIf",r.isSetupRequired)}},directives:[Yy,Qy],styles:['*,:before,:after{box-sizing:border-box}html{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Consolas,"Liberation Mono",Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}button{-webkit-appearance:button}legend{padding:0}progress{vertical-align:baseline}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}body{font-family:inherit;line-height:inherit}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}pre,code,kbd,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}*,:before,:after{--tw-border-opacity: 1;border-color:rgba(229,231,235,var(--tw-border-opacity))}.m-4{margin:1rem}.m-5{margin:1.25rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.mr-2{margin-right:.5rem}.ml-3{margin-left:.75rem}.flex{display:flex}.table{display:table}.h-3{height:.75rem}.h-10{height:2.5rem}.w-3{width:.75rem}.w-40{width:10rem}.w-full{width:100%}@keyframes spin{to{transform:rotate(360deg)}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes pulse{50%{opacity:.5}}@keyframes bounce{0%,to{transform:translateY(-25%);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,.2,1)}}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-between{justify-content:space-between}.overflow-hidden{overflow:hidden}.rounded-sm{border-radius:.125rem}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.border-2{border-width:2px}.border-t-2{border-top-width:2px}.border-r-2{border-right-width:2px}.border-b-2{border-bottom-width:2px}.border-l-2{border-left-width:2px}.border-gray-200{--tw-border-opacity: 1;border-color:rgba(229,231,235,var(--tw-border-opacity))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgba(249,250,251,var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgba(229,231,235,var(--tw-bg-opacity))}.bg-yellow-400{--tw-bg-opacity: 1;background-color:rgba(251,191,36,var(--tw-bg-opacity))}.bg-green-400{--tw-bg-opacity: 1;background-color:rgba(52,211,153,var(--tw-bg-opacity))}.bg-blue-500{--tw-bg-opacity: 1;background-color:rgba(59,130,246,var(--tw-bg-opacity))}.hover\\:bg-blue-700:hover{--tw-bg-opacity: 1;background-color:rgba(29,78,216,var(--tw-bg-opacity))}.p-4{padding:1rem}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.font-semibold{font-weight:600}.font-bold{font-weight:700}.text-white{--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity))}.text-yellow-400{--tw-text-opacity: 1;color:rgba(251,191,36,var(--tw-text-opacity))}.text-green-400{--tw-text-opacity: 1;color:rgba(52,211,153,var(--tw-text-opacity))}*,:before,:after{--tw-shadow: 0 0 #0000}*,:before,:after{--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgba(59, 130, 246, .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000}.ease-linear{transition-timing-function:linear}.pyb-mp-status{width:100%;min-width:400px;align-items:start}.pyb-mp-status__left .loader{border-top-color:#3498db;animation:spinner 1s linear infinite}@keyframes spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n'],encapsulation:3,changeDetection:0}),t})();const $A=new class extends sn{}(class extends p_{constructor(e,n){super(e,n),this.scheduler=e,this.work=n}schedule(e,n=0){return n>0?super.schedule(e,n):(this.delay=n,this.state=e,this.scheduler.flush(this),this)}execute(e,n){return n>0||this.closed?super.execute(e,n):this._execute(e,n)}requestAsyncId(e,n,r=0){return null!==r&&r>0||null===r&&this.delay>0?super.requestAsyncId(e,n,r):e.flush(this)}});class qi extends Se{constructor(e,n,r=0){super(e),this.scheduler=n,this.delay=r}static dispatch(e){const{notification:n,destination:r}=e;n.observe(r),this.unsubscribe()}scheduleMessage(e){this.destination.add(this.scheduler.schedule(qi.dispatch,this.delay,new WA(e,this.destination)))}_next(e){this.scheduleMessage($e.createNext(e))}_error(e){this.scheduleMessage($e.createError(e)),this.unsubscribe()}_complete(){this.scheduleMessage($e.createComplete()),this.unsubscribe()}}class WA{constructor(e,n){this.notification=e,this.destination=n}}class GA extends is{constructor(e=Number.POSITIVE_INFINITY,n=Number.POSITIVE_INFINITY,r){super(),this.scheduler=r,this._events=[],this._infiniteTimeWindow=!1,this._bufferSize=e<1?1:e,this._windowTime=n<1?1:n,n===Number.POSITIVE_INFINITY?(this._infiniteTimeWindow=!0,this.next=this.nextInfiniteTimeWindow):this.next=this.nextTimeWindow}nextInfiniteTimeWindow(e){if(!this.isStopped){const n=this._events;n.push(e),n.length>this._bufferSize&&n.shift()}super.next(e)}nextTimeWindow(e){this.isStopped||(this._events.push(new qA(this._getNow(),e)),this._trimBufferThenGetEvents()),super.next(e)}_subscribe(e){const n=this._infiniteTimeWindow,r=n?this._events:this._trimBufferThenGetEvents(),o=this.scheduler,s=r.length;let i;if(this.closed)throw new Un;if(this.isStopped||this.hasError?i=ee.EMPTY:(this.observers.push(e),i=new Oc(this,e)),o&&e.add(e=new qi(e,o)),n)for(let a=0;a<s&&!e.closed;a++)e.next(r[a]);else for(let a=0;a<s&&!e.closed;a++)e.next(r[a].value);return this.hasError?e.error(this.thrownError):this.isStopped&&e.complete(),i}_getNow(){return(this.scheduler||$A).now()}_trimBufferThenGetEvents(){const e=this._getNow(),n=this._bufferSize,r=this._windowTime,o=this._events,s=o.length;let i=0;for(;i<s&&!(e-o[i].time<r);)i++;return s>n&&(i=Math.max(i,s-n)),i>0&&o.splice(0,i),o}}class qA{constructor(e,n){this.time=e,this.value=n}}function y_(t,e){return"function"==typeof e?n=>n.pipe(y_((r,o)=>Uc(t(r,o)).pipe(zr((s,i)=>e(r,s,o,i))))):n=>n.lift(new zA(t))}class zA{constructor(e){this.project=e}call(e,n){return n.subscribe(new QA(e,this.project))}}class QA extends Gc{constructor(e,n){super(e),this.project=n,this.index=0}_next(e){let n;const r=this.index++;try{n=this.project(e,r)}catch(o){return void this.destination.error(o)}this._innerSub(n)}_innerSub(e){const n=this.innerSubscription;n&&n.unsubscribe();const r=new Wc(this),o=this.destination;o.add(r),this.innerSubscription=qc(e,r),this.innerSubscription!==r&&o.add(this.innerSubscription)}_complete(){const{innerSubscription:e}=this;(!e||e.closed)&&super._complete(),this.unsubscribe()}_unsubscribe(){this.innerSubscription=void 0}notifyComplete(){this.innerSubscription=void 0,this.isStopped&&super._complete()}notifyNext(e){this.destination.next(e)}}
/**
     * @license Angular v12.2.3
     * (c) 2010-2021 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const zi={schedule(t,e){const n=setTimeout(t,e);return()=>clearTimeout(n)},scheduleBeforeRender(t){if("undefined"==typeof window)return zi.schedule(t,0);if(void 0===window.requestAnimationFrame)return zi.schedule(t,16);const e=window.requestAnimationFrame(t);return()=>window.cancelAnimationFrame(e)}};let bc;function oN(t,e,n){let r=n;return function(t){return!!t&&t.nodeType===Node.ELEMENT_NODE}(t)&&e.some((o,s)=>!("*"===o||!function(t,e){if(!bc){const n=Element.prototype;bc=n.matches||n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}return t.nodeType===Node.ELEMENT_NODE&&bc.call(t,e)}(t,o)||(r=s,0))),r
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}class iN{constructor(e,n){this.componentFactory=n.get(en).resolveComponentFactory(e)}create(e){return new aN(this.componentFactory,e)}}class aN{constructor(e,n){this.componentFactory=e,this.injector=n,this.eventEmitters=new GA(1),this.events=this.eventEmitters.pipe(y_(r=>Kc(...r))),this.componentRef=null,this.viewChangeDetectorRef=null,this.inputChanges=null,this.hasInputChanges=!1,this.implementsOnChanges=!1,this.scheduledChangeDetectionFn=null,this.scheduledDestroyFn=null,this.initialInputValues=new Map,this.unchangedInputs=new Set(this.componentFactory.inputs.map(({propName:r})=>r)),this.ngZone=this.injector.get(De),this.elementZone="undefined"==typeof Zone?null:this.ngZone.run(()=>Zone.current)}connect(e){this.runInZone(()=>{if(null!==this.scheduledDestroyFn)return this.scheduledDestroyFn(),void(this.scheduledDestroyFn=null);null===this.componentRef&&this.initializeComponent(e)})}disconnect(){this.runInZone(()=>{null===this.componentRef||null!==this.scheduledDestroyFn||(this.scheduledDestroyFn=zi.schedule(()=>{null!==this.componentRef&&(this.componentRef.destroy(),this.componentRef=null,this.viewChangeDetectorRef=null)},10))})}getInputValue(e){return this.runInZone(()=>null===this.componentRef?this.initialInputValues.get(e):this.componentRef.instance[e])}setInputValue(e,n){this.runInZone(()=>{null!==this.componentRef?function(t,e){return t===e||t!=t&&e!=e}(n,this.getInputValue(e))&&(void 0!==n||!this.unchangedInputs.has(e))||(this.recordInputChange(e,n),this.unchangedInputs.delete(e),this.hasInputChanges=!0,this.componentRef.instance[e]=n,this.scheduleDetectChanges()):this.initialInputValues.set(e,n)})}initializeComponent(e){const n=U.create({providers:[],parent:this.injector}),r=
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function(t,e){const n=t.childNodes,r=e.map(()=>[]);let o=-1;e.some((s,i)=>"*"===s&&(o=i,!0));for(let s=0,i=n.length;s<i;++s){const a=n[s],u=oN(a,e,o);-1!==u&&r[u].push(a)}return r}(e,this.componentFactory.ngContentSelectors);this.componentRef=this.componentFactory.create(n,r,e),this.viewChangeDetectorRef=this.componentRef.injector.get(el),this.implementsOnChanges=function(t){return"function"==typeof t}(this.componentRef.instance.ngOnChanges),this.initializeInputs(),this.initializeOutputs(this.componentRef),this.detectChanges(),this.injector.get(Br).attachView(this.componentRef.hostView)}initializeInputs(){this.componentFactory.inputs.forEach(({propName:e})=>{this.initialInputValues.has(e)&&this.setInputValue(e,this.initialInputValues.get(e))}),this.initialInputValues.clear()}initializeOutputs(e){const n=this.componentFactory.outputs.map(({propName:r,templateName:o})=>e.instance[r].pipe(zr(i=>({name:o,value:i}))));this.eventEmitters.next(n)}callNgOnChanges(e){if(!this.implementsOnChanges||null===this.inputChanges)return;const n=this.inputChanges;this.inputChanges=null,e.instance.ngOnChanges(n)}markViewForCheck(e){this.hasInputChanges&&(this.hasInputChanges=!1,e.markForCheck())}scheduleDetectChanges(){this.scheduledChangeDetectionFn||(this.scheduledChangeDetectionFn=zi.scheduleBeforeRender(()=>{this.scheduledChangeDetectionFn=null,this.detectChanges()}))}recordInputChange(e,n){if(!this.implementsOnChanges)return;null===this.inputChanges&&(this.inputChanges={});const r=this.inputChanges[e];if(r)return void(r.currentValue=n);const o=this.unchangedInputs.has(e),s=o?void 0:this.getInputValue(e);this.inputChanges[e]=new ua(s,n,o)}detectChanges(){null!==this.componentRef&&(this.callNgOnChanges(this.componentRef),this.markViewForCheck(this.viewChangeDetectorRef),this.componentRef.changeDetectorRef.detectChanges())}runInZone(e){return this.elementZone&&Zone.current!==this.elementZone?this.ngZone.run(e):e()}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class uN extends HTMLElement{constructor(){super(...arguments),this.ngElementEventsSubscription=null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let cN=(()=>{class t{constructor(n){this.injector=n;const r=function(t,e){const n=function(t,e){return e.get(en).resolveComponentFactory(t).inputs}(t,e.injector),r=e.strategyFactory||new iN(t,e.injector),o=function(t){const e={};return t.forEach(({propName:n,templateName:r})=>{e[function(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}(r)]=n}),e}(n);class s extends uN{constructor(a){super(),this.injector=a}get ngElementStrategy(){if(!this._ngElementStrategy){const a=this._ngElementStrategy=r.create(this.injector||e.injector);n.forEach(({propName:u})=>{if(!this.hasOwnProperty(u))return;const l=this[u];delete this[u],a.setInputValue(u,l)})}return this._ngElementStrategy}attributeChangedCallback(a,u,l,c){this.ngElementStrategy.setInputValue(o[a],l)}connectedCallback(){let a=!1;this.ngElementStrategy.events&&(this.subscribeToEvents(),a=!0),this.ngElementStrategy.connect(this),a||this.subscribeToEvents()}disconnectedCallback(){this._ngElementStrategy&&this._ngElementStrategy.disconnect(),this.ngElementEventsSubscription&&(this.ngElementEventsSubscription.unsubscribe(),this.ngElementEventsSubscription=null)}subscribeToEvents(){this.ngElementEventsSubscription=this.ngElementStrategy.events.subscribe(a=>{const u=function(t,e,n){if("function"!=typeof CustomEvent){const s=t.createEvent("CustomEvent");return s.initCustomEvent(e,!1,!1,n),s}return new CustomEvent(e,{bubbles:!1,cancelable:!1,detail:n})}(this.ownerDocument,a.name,a.value);this.dispatchEvent(u)})}}return s.observedAttributes=Object.keys(o),n.forEach(({propName:i})=>{Object.defineProperty(s.prototype,i,{get(){return this.ngElementStrategy.getInputValue(i)},set(a){this.ngElementStrategy.setInputValue(i,a)},configurable:!0,enumerable:!0})}),s
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}(jA,{injector:this.injector});customElements.define("pyb-mp-status",r)}ngDoBootstrap(n){}}return t.\u0275fac=function(n){return new(n||t)(j(U))},t.\u0275mod=Gn({type:t}),t.\u0275inj=an({imports:[[uc,pA]]}),t})(),dN=(()=>{class t{ngDoBootstrap(n){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=Gn({type:t}),t.\u0275inj=an({imports:[[uc,cN]]}),t})();(function(){if(oy)throw new Error("Cannot enable prod mode after platform setup.");ry=!1}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */)(),fA().bootstrapModule(dN).catch(t=>console.error(t))})();
//# sourceMappingURL=main.js.map