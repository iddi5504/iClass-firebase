(self["webpackChunkiclass_firebase"]=self["webpackChunkiclass_firebase"]||[]).push([[998],{1001:function(t,e,n){"use strict";function r(t,e,n,r,i,o,s,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}n.d(e,{Z:function(){return r}})},9662:function(t,e,n){var r=n(614),i=n(6330),o=TypeError;t.exports=function(t){if(r(t))return t;throw o(i(t)+" is not a function")}},6077:function(t,e,n){var r=n(614),i=String,o=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw o("Can't set "+i(t)+" as a prototype")}},5787:function(t,e,n){var r=n(7976),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw i("Incorrect invocation")}},9670:function(t,e,n){var r=n(111),i=String,o=TypeError;t.exports=function(t){if(r(t))return t;throw o(i(t)+" is not an object")}},3013:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var r,i,o,s=n(3013),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),f=n(648),d=n(6330),p=n(8880),v=n(8052),m=n(3070).f,g=n(7976),y=n(9518),w=n(7674),b=n(5112),_=n(9711),E=n(9909),T=E.enforce,S=E.get,I=c.Int8Array,C=I&&I.prototype,k=c.Uint8ClampedArray,A=k&&k.prototype,O=I&&y(I),x=C&&y(C),R=Object.prototype,N=c.TypeError,D=b("toStringTag"),P=_("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=s&&!!w&&"Opera"!==f(c.opera),$=!1,j={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},U={BigInt64Array:8,BigUint64Array:8},F=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h(j,e)||h(U,e)},V=function(t){var e=y(t);if(l(e)){var n=S(e);return n&&h(n,L)?n[L]:V(e)}},B=function(t){if(!l(t))return!1;var e=f(t);return h(j,e)||h(U,e)},q=function(t){if(B(t))return t;throw N("Target is not a typed array")},H=function(t){if(u(t)&&(!w||g(O,t)))return t;throw N(d(t)+" is not a typed array constructor")},z=function(t,e,n,r){if(a){if(n)for(var i in j){var o=c[i];if(o&&h(o.prototype,t))try{delete o.prototype[t]}catch(s){try{o.prototype[t]=e}catch(u){}}}x[t]&&!n||v(x,t,n?e:M&&C[t]||e,r)}},K=function(t,e,n){var r,i;if(a){if(w){if(n)for(r in j)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(o){}if(O[t]&&!n)return;try{return v(O,t,n?e:M&&O[t]||e)}catch(o){}}for(r in j)i=c[r],!i||i[t]&&!n||v(i,t,e)}};for(r in j)i=c[r],o=i&&i.prototype,o?T(o)[L]=i:M=!1;for(r in U)i=c[r],o=i&&i.prototype,o&&(T(o)[L]=i);if((!M||!u(O)||O===Function.prototype)&&(O=function(){throw N("Incorrect invocation")},M))for(r in j)c[r]&&w(c[r],O);if((!M||!x||x===R)&&(x=O.prototype,M))for(r in j)c[r]&&w(c[r].prototype,x);if(M&&y(A)!==x&&w(A,x),a&&!h(x,D))for(r in $=!0,m(x,D,{get:function(){return l(this)?this[P]:void 0}}),j)c[r]&&p(c[r],P,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:$&&P,aTypedArray:q,aTypedArrayConstructor:H,exportTypedArrayMethod:z,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:V,isView:F,isTypedArray:B,TypedArray:O,TypedArrayPrototype:x}},1318:function(t,e,n){var r=n(5656),i=n(1400),o=n(6244),s=function(t){return function(e,n,s){var a,c=r(e),u=o(c),l=i(s,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},9671:function(t,e,n){var r=n(9974),i=n(8361),o=n(7908),s=n(6244),a=function(t){var e=1==t;return function(n,a,c){var u,l,h=o(n),f=i(h),d=r(a,c),p=s(f);while(p-- >0)if(u=f[p],l=d(u,p,h),l)switch(t){case 0:return u;case 1:return p}return e?-1:void 0}};t.exports={findLast:a(0),findLastIndex:a(1)}},3658:function(t,e,n){"use strict";var r=n(9781),i=n(3157),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!s(t,"length").writable)throw o("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},206:function(t,e,n){var r=n(1702);t.exports=r([].slice)},4326:function(t,e,n){var r=n(84),i=r({}.toString),o=r("".slice);t.exports=function(t){return o(i(t),8,-1)}},648:function(t,e,n){var r=n(1694),i=n(614),o=n(4326),s=n(5112),a=s("toStringTag"),c=Object,u="Arguments"==o(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?o(e):"Object"==(r=o(e))&&i(e.callee)?"Arguments":r}},9920:function(t,e,n){var r=n(2597),i=n(3887),o=n(1236),s=n(3070);t.exports=function(t,e,n){for(var a=i(e),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var r=n(9781),i=n(3070),o=n(9114);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),i=n(3070),o=n(6339),s=n(3072);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&o(n,u,a),a.global)c?t[e]=n:s(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},5117:function(t,e,n){"use strict";var r=n(6330),i=TypeError;t.exports=function(t,e){if(!delete t[e])throw i("Cannot delete property "+r(e)+" of "+r(t))}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var r=n(7854),i=n(111),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},6833:function(t,e,n){var r=n(8113);t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},5268:function(t,e,n){var r=n(4326),i=n(7854);t.exports="process"==r(i.process)},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,i,o=n(7854),s=n(8113),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(t,e,n){var r=n(1702),i=Error,o=r("".replace),s=function(t){return String(i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=o(t,a,"");return t}},2109:function(t,e,n){var r=n(7854),i=n(1236).f,o=n(8880),s=n(8052),a=n(3072),c=n(9920),u=n(4705);t.exports=function(t,e){var n,l,h,f,d,p,v=t.target,m=t.global,g=t.stat;if(l=m?r:g?r[v]||a(v,{}):(r[v]||{}).prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:v+(g?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&o(d,"sham",!0),s(l,h,d,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var r=n(4374),i=Function.prototype,o=i.apply,s=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(o):function(){return s.apply(o,arguments)})},9974:function(t,e,n){var r=n(1702),i=n(9662),o=n(4374),s=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:o?s(t,e):function(){return t.apply(e,arguments)}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(t,e,n){var r=n(9781),i=n(2597),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},84:function(t,e,n){var r=n(4374),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);t.exports=r?s:function(t){return function(){return o.apply(t,arguments)}}},1702:function(t,e,n){var r=n(4326),i=n(84);t.exports=function(t){if("Function"===r(t))return i(t)}},5005:function(t,e,n){var r=n(7854),i=n(614),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662),i=n(8554);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),i=n(7908),o=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(i(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),i=n(7293),o=n(317);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),i=n(7293),o=n(4326),s=Object,a=r("".split);t.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?a(t,""):s(t)}:s},9587:function(t,e,n){var r=n(614),i=n(111),o=n(7674);t.exports=function(t,e,n){var s,a;return o&&r(s=e.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(t,a),t}},2788:function(t,e,n){var r=n(1702),i=n(614),o=n(5465),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(t){return s(t)}),t.exports=o.inspectSource},9909:function(t,e,n){var r,i,o,s=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),f=n(6200),d=n(3501),p="Object already initialized",v=a.TypeError,m=a.WeakMap,g=function(t){return o(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw v("Incompatible receiver, "+t+" required");return n}};if(s||h.state){var w=h.state||(h.state=new m);w.get=w.get,w.has=w.has,w.set=w.set,r=function(t,e){if(w.has(t))throw v(p);return e.facade=t,w.set(t,e),e},i=function(t){return w.get(t)||{}},o=function(t){return w.has(t)}}else{var b=f("state");d[b]=!0,r=function(t,e){if(l(t,b))throw v(p);return e.facade=t,u(t,b,e),e},i=function(t){return l(t,b)?t[b]:{}},o=function(t){return l(t,b)}}t.exports={set:r,get:i,has:o,enforce:g,getterFor:y}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},614:function(t,e,n){var r=n(4154),i=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===i}:function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),i=n(614),o=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";t.exports=s},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var r=n(614),i=n(4154),o=i.all;t.exports=i.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===o}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),i=n(614),o=n(7976),s=n(3307),a=Object;t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&o(e.prototype,a(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(7293),i=n(614),o=n(2597),s=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),l=u.enforce,h=u.get,f=Object.defineProperty,d=s&&!r((function(){return 8!==f((function(){}),"length",{value:8}).length})),p=String(String).split("String"),v=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||a&&t.name!==e)&&(s?f(t,"name",{value:e,configurable:!0}):t.name=e),d&&n&&o(n,"arity")&&t.length!==n.arity&&f(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?s&&f(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=l(t);return o(r,"source")||(r.source=p.join("string"==typeof e?e:"")),t};Function.prototype.toString=v((function(){return i(this)&&h(this).source||c(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},3070:function(t,e,n){var r=n(9781),i=n(4664),o=n(3353),s=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?o?function(t,e,n){if(s(t),e=a(e),s(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(s(t),e=a(e),s(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),i=n(6916),o=n(5296),s=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return s(!i(o.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),i=n(748),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var r=n(2597),i=n(614),o=n(7908),s=n(6200),a=n(8544),c=s("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=o(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),i=n(2597),o=n(5656),s=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=o(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~s(l,n)||c(l,n));return l}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(1702),i=n(9670),o=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(6916),i=n(614),o=n(111),s=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!o(a=r(n,t)))return a;if(i(n=t.valueOf)&&!o(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!o(a=r(n,t)))return a;throw s("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),i=n(1702),o=n(8006),s=n(5181),a=n(9670),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=s.f;return n?c(e,n(t)):e}},4488:function(t,e,n){var r=n(8554),i=TypeError;t.exports=function(t){if(r(t))throw i("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),i=n(9711),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},5465:function(t,e,n){var r=n(7854),i=n(3072),o="__core-js_shared__",s=r[o]||i(o,{});t.exports=s},2309:function(t,e,n){var r=n(1913),i=n(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.26.0",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),i=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},261:function(t,e,n){var r,i,o,s,a=n(7854),c=n(2104),u=n(9974),l=n(614),h=n(2597),f=n(7293),d=n(490),p=n(206),v=n(317),m=n(8053),g=n(6833),y=n(5268),w=a.setImmediate,b=a.clearImmediate,_=a.process,E=a.Dispatch,T=a.Function,S=a.MessageChannel,I=a.String,C=0,k={},A="onreadystatechange";try{r=a.location}catch(D){}var O=function(t){if(h(k,t)){var e=k[t];delete k[t],e()}},x=function(t){return function(){O(t)}},R=function(t){O(t.data)},N=function(t){a.postMessage(I(t),r.protocol+"//"+r.host)};w&&b||(w=function(t){m(arguments.length,1);var e=l(t)?t:T(t),n=p(arguments,1);return k[++C]=function(){c(e,void 0,n)},i(C),C},b=function(t){delete k[t]},y?i=function(t){_.nextTick(x(t))}:E&&E.now?i=function(t){E.now(x(t))}:S&&!g?(o=new S,s=o.port2,o.port1.onmessage=R,i=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!f(N)?(i=N,a.addEventListener("message",R,!1)):i=A in v("script")?function(t){d.appendChild(v("script"))[A]=function(){d.removeChild(this),O(t)}}:function(t){setTimeout(x(t),0)}),t.exports={set:w,clear:b}},1400:function(t,e,n){var r=n(9303),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},5656:function(t,e,n){var r=n(8361),i=n(4488);t.exports=function(t){return r(i(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),i=Object;t.exports=function(t){return i(r(t))}},7593:function(t,e,n){var r=n(6916),i=n(111),o=n(2190),s=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||o(t))return t;var n,c=s(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var r=n(7593),i=n(2190);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},1694:function(t,e,n){var r=n(5112),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},1340:function(t,e,n){var r=n(648),i=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),i=0,o=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++i+o,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),i=n(7293);t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(t){var e=TypeError;t.exports=function(t,n){if(t<n)throw e("Not enough arguments");return t}},4811:function(t,e,n){var r=n(7854),i=n(614),o=r.WeakMap;t.exports=i(o)&&/native code/.test(String(o))},5112:function(t,e,n){var r=n(7854),i=n(2309),o=n(2597),s=n(9711),a=n(6293),c=n(3307),u=i("wks"),l=r.Symbol,h=l&&l["for"],f=c?l:l&&l.withoutSetter||s;t.exports=function(t){if(!o(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&o(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):f(e)}return u[t]}},7658:function(t,e,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||l},{push:function(t){var e=i(this),n=o(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return s(e,n),n}})},541:function(t,e,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(5117),c=n(7207),u=1!==[].unshift(0),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||l},{unshift:function(t){var e=i(this),n=o(e),r=arguments.length;if(r){c(n+r);var u=n;while(u--){var l=u+r;u in e?e[l]=e[u]:a(e,l)}for(var h=0;h<r;h++)e[h]=arguments[h]}return s(e,n+r)}})},4590:function(t,e,n){"use strict";var r=n(260),i=n(9671).findLastIndex,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("findLastIndex",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},3408:function(t,e,n){"use strict";var r=n(260),i=n(9671).findLast,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("findLast",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},1091:function(t,e,n){var r=n(2109),i=n(7854),o=n(261).clear;r({global:!0,bind:!0,enumerable:!0,forced:i.clearImmediate!==o},{clearImmediate:o})},2801:function(t,e,n){"use strict";var r=n(2109),i=n(7854),o=n(5005),s=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),h=n(6277),f=n(3678),d=n(1060),p=n(9781),v=n(1913),m="DOMException",g=o("Error"),y=o(m),w=function(){u(this,b);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new y(e,n),i=g(e);return i.name=m,a(r,"stack",s(1,d(i.stack,1))),l(r,this,w),r},b=w.prototype=y.prototype,_="stack"in g(m),E="stack"in new y(1,2),T=y&&p&&Object.getOwnPropertyDescriptor(i,m),S=!!T&&!(T.writable&&T.configurable),I=_&&!S&&!E;r({global:!0,constructor:!0,forced:v||I},{DOMException:I?w:y});var C=o(m),k=C.prototype;if(k.constructor!==C)for(var A in v||a(k,"constructor",s(1,C)),f)if(c(f,A)){var O=f[A],x=O.s;c(C,x)||a(C,x,s(6,O.c))}},4633:function(t,e,n){n(1091),n(2986)},2986:function(t,e,n){var r=n(2109),i=n(7854),o=n(261).set;r({global:!0,bind:!0,enumerable:!0,forced:i.setImmediate!==o},{setImmediate:o})},1361:function(t,e,n){"use strict";n.d(e,{Xb:function(){return de},v0:function(){return br},e5:function(){return pe},w7:function(){return ge}});n(7658);var r=n(223),i=n(7077),o=n(5168);function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;var a=n(7142);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),h=new o.Yd("@firebase/auth");function f(t,...e){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${i.Jn}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(t,...e){throw m(t,...e)}function p(t,...e){return m(t,...e)}function v(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n}),o=new r.LL("auth","Firebase",i);return o.create(e,{appName:t.name})}function m(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function g(t,e,...n){if(!t)throw m(e,...n)}function y(t){const e="INTERNAL ASSERTION FAILED: "+t;throw f(e),new Error(e)}function w(t,e){t||y(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function _(t){w(t instanceof Function,"Expected a class definition");let e=b.get(t);return e?(w(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,b.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t,e){const n=(0,i.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==e&&void 0!==e?e:{}))return t;d(t,"already-initialized")}const o=n.initialize({options:e});return o}function T(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function I(){return"http:"===C()||"https:"===C()}function C(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,e){this.shortDelay=t,this.longDelay=e,w(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return k()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){w(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},D=new O(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function L(t,e,n,i,o={}){return M(t,o,(async()=>{let o={},s={};i&&("GET"===e?s=i:o={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:t.config.apiKey},s)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),R.fetch()(j(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},o))}))}async function M(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},N),e);try{const e=new U(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw F(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const e=r.ok?o.errorMessage:o.error.message,[n,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw F(t,"email-already-in-use",o);if("USER_DISABLED"===n)throw F(t,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw v(t,a,s);d(t,a)}}catch(o){if(o instanceof r.ZR)throw o;d(t,"network-request-failed")}}async function $(t,e,n,r,i={}){const o=await L(t,e,n,r,i);return"mfaPendingCredential"in o&&d(t,"multi-factor-auth-required",{_serverResponse:o}),o}function j(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?x(t.config,i):`${t.config.apiScheme}://${i}`}class U{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(p(this.auth,"network-request-failed"))),D.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function F(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(t,e){return L(t,"POST","/v1/accounts:delete",e)}async function B(t,e){return L(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e=!1){const n=(0,r.m9)(t),i=await n.getIdToken(e),o=K(i);g(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:q(z(o.auth_time)),issuedAtTime:q(z(o.iat)),expirationTime:q(z(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function z(t){return 1e3*Number(t)}function K(t){var e;const[n,i,o]=t.split(".");if(void 0===n||void 0===i||void 0===o)return f("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.tV)(i);return t?JSON.parse(t):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",null===(e=s)||void 0===e?void 0:e.toString()),null}}function G(t){const e=K(t);return g(e,"internal-error"),g("undefined"!==typeof e.exp,"internal-error"),g("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r.ZR&&Q(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Q({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===(t=e)||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(t){var e;const n=t.auth,r=await t.getIdToken(),i=await W(t,B(n,{idToken:r}));g(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?et(o.providerUserInfo):[],a=tt(t.providerData,s),c=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new X(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Z(t){const e=(0,r.m9)(t);await Y(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function et(t){return t.map((t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(t,e){const n=await M(t,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=j(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){g(t.idToken,"internal-error"),g("undefined"!==typeof t.idToken,"internal-error"),g("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):G(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return g(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await nt(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,o=new rt;return n&&(g("string"===typeof n,"internal-error",{appName:t}),o.refreshToken=n),r&&(g("string"===typeof r,"internal-error",{appName:t}),o.accessToken=r),i&&(g("number"===typeof i,"internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,e){g("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class ot{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new X(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await W(this,this.stsTokenManager.getToken(this.auth,t));return g(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return H(this,t)}reload(){return Z(this)}_assign(t){this!==t&&(g(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new ot(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Y(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await W(this,V(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,o,s,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,f=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(o=e.photoURL)&&void 0!==o?o:void 0,p=null!==(s=e.tenantId)&&void 0!==s?s:void 0,v=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:b,isAnonymous:_,providerData:E,stsTokenManager:T}=e;g(w&&T,t,"internal-error");const S=rt.fromJSON(this.name,T);g("string"===typeof w,t,"internal-error"),it(l,t.name),it(h,t.name),g("boolean"===typeof b,t,"internal-error"),g("boolean"===typeof _,t,"internal-error"),it(f,t.name),it(d,t.name),it(p,t.name),it(v,t.name),it(m,t.name),it(y,t.name);const I=new ot({uid:w,auth:t,email:h,emailVerified:b,displayName:l,isAnonymous:_,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:S,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(I.providerData=E.map((t=>Object.assign({},t)))),v&&(I._redirectEventId=v),I}static async _fromIdTokenResponse(t,e,n=!1){const r=new rt;r.updateFromServerResponse(e);const i=new ot({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Y(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}st.type="NONE";const at=st;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e,n){return`firebase:${t}:${e}:${n}`}class ut{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ct(this.userKey,r.apiKey,i),this.fullPersistenceKey=ct("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ot._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ut(_(at),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||_(at);const o=ct(n,t.config.apiKey,t.name);let s=null;for(const u of e)try{const e=await u._get(o);if(e){const n=ot._fromJSON(t,e);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(o)}catch(c){}}))),new ut(i,t,n)):new ut(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mt(e))return"Blackberry";if(gt(e))return"Webos";if(ft(e))return"Safari";if((e.includes("chrome/")||dt(e))&&!e.includes("edge/"))return"Chrome";if(vt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=(0,r.z$)()){return/firefox\//i.test(t)}function ft(t=(0,r.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dt(t=(0,r.z$)()){return/crios\//i.test(t)}function pt(t=(0,r.z$)()){return/iemobile/i.test(t)}function vt(t=(0,r.z$)()){return/android/i.test(t)}function mt(t=(0,r.z$)()){return/blackberry/i.test(t)}function gt(t=(0,r.z$)()){return/webos/i.test(t)}function yt(t=(0,r.z$)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wt(t=(0,r.z$)()){var e;return yt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function bt(){return(0,r.w1)()&&10===document.documentMode}function _t(t=(0,r.z$)()){return yt(t)||vt(t)||gt(t)||mt(t)||/windows phone/i.test(t)||pt(t)}function Et(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,e=[]){let n;switch(t){case"Browser":n=lt((0,r.z$)());break;case"Worker":n=`${lt((0,r.z$)())}-${t}`;break;default:n=t}const o=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${o}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(i){r(i)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){var e;if(this.auth.currentUser===t)return;const n=[];try{for(const e of this.queue)await e(t),e.onAbort&&n.push(e.onAbort)}catch(r){n.reverse();for(const t of n)try{t()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(e=r)||void 0===e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kt(this),this.idTokenSubscription=new kt(this),this.beforeStateQueue=new St(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=_(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ut.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,o=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(t);n&&n!==o||!(null===s||void 0===s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){var e;try{await Y(t)}catch(n){if("auth/network-request-failed"!==(null===(e=n)||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,r.m9)(t):null;return e&&g(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&g(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&_(t)||this._popupRedirectResolver;g(e,this,"argument-error"),this.redirectPersistenceManager=await ut.create(this,[_(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return g(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Tt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function Ct(t){return(0,r.m9)(t)}class kt{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.ne)((t=>this.observer=t))}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function At(t,e,n){const r=Ct(t);g(r._canInitEmulator,r,"emulator-config-failed"),g(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=Ot(e),{host:s,port:a}=xt(e),c=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Nt()}function Ot(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xt(t){const e=Ot(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:Rt(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:Rt(e)}}}function Rt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Nt(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return y("not implemented")}_getIdTokenResponse(t){return y("not implemented")}_linkToIdToken(t,e){return y("not implemented")}_getReauthenticationResolver(t){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(t,e){return L(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Lt(t,e){return $(t,"POST","/v1/accounts:signInWithPassword",P(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Mt(t,e){return $(t,"POST","/v1/accounts:signInWithEmailLink",P(t,e))}async function $t(t,e){return $(t,"POST","/v1/accounts:signInWithEmailLink",P(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Dt{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new jt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new jt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Lt(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Mt(t,{email:this._email,oobCode:this._password});default:d(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Pt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $t(t,{idToken:e,email:this._email,oobCode:this._password});default:d(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(t,e){return $(t,"POST","/v1/accounts:signInWithIdp",P(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="http://localhost";class Vt extends Dt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Vt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):d("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=s(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Vt(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Ut(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Ut(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Ut(t,e)}buildRequest(){const t={requestUri:Ft,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,r.xO)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(t,e){return L(t,"POST","/v1/accounts:sendVerificationCode",P(t,e))}async function qt(t,e){return $(t,"POST","/v1/accounts:signInWithPhoneNumber",P(t,e))}async function Ht(t,e){const n=await $(t,"POST","/v1/accounts:signInWithPhoneNumber",P(t,e));if(n.temporaryProof)throw F(t,"account-exists-with-different-credential",n);return n}const zt={["USER_NOT_FOUND"]:"user-not-found"};async function Kt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return $(t,"POST","/v1/accounts:signInWithPhoneNumber",P(t,n),zt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Dt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Gt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Gt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return qt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Ht(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Kt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new Gt({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qt(t){const e=(0,r.zd)((0,r.pd)(t))["link"],n=e?(0,r.zd)((0,r.pd)(e))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(t))["deep_link_id"],o=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return o||i||n||e||t}class Jt{constructor(t){var e,n,i,o,s,a;const c=(0,r.zd)((0,r.pd)(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=Wt(null!==(i=c["mode"])&&void 0!==i?i:null);g(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=Qt(t);try{return new Jt(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt{constructor(){this.providerId=Xt.PROVIDER_ID}static credential(t,e){return jt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Jt.parseLink(e);return g(n,"argument-error"),jt._fromEmailAndCode(t,n.code,n.tenantId)}}Xt.PROVIDER_ID="password",Xt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Xt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Yt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class te extends Zt{constructor(){super("facebook.com")}static credential(t){return Vt._fromParams({providerId:te.PROVIDER_ID,signInMethod:te.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return te.credentialFromTaggedObject(t)}static credentialFromError(t){return te.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return te.credential(t.oauthAccessToken)}catch(e){return null}}}te.FACEBOOK_SIGN_IN_METHOD="facebook.com",te.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee extends Zt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Vt._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ee.credentialFromTaggedObject(t)}static credentialFromError(t){return ee.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return ee.credential(e,n)}catch(r){return null}}}ee.GOOGLE_SIGN_IN_METHOD="google.com",ee.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne extends Zt{constructor(){super("github.com")}static credential(t){return Vt._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ne.credentialFromTaggedObject(t)}static credentialFromError(t){return ne.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return ne.credential(t.oauthAccessToken)}catch(e){return null}}}ne.GITHUB_SIGN_IN_METHOD="github.com",ne.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class re extends Zt{constructor(){super("twitter.com")}static credential(t,e){return Vt._fromParams({providerId:re.PROVIDER_ID,signInMethod:re.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return re.credentialFromTaggedObject(t)}static credentialFromError(t){return re.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return re.credential(e,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ie(t,e){return $(t,"POST","/v1/accounts:signUp",P(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */re.TWITTER_SIGN_IN_METHOD="twitter.com",re.PROVIDER_ID="twitter.com";class oe{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await ot._fromIdTokenResponse(t,n,r),o=se(n),s=new oe({user:i,providerId:o,_tokenResponse:n,operationType:e});return s}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=se(n);return new oe({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function se(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ae extends r.ZR{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ae.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new ae(t,e,n,r)}}function ce(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ae._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ue(t,e,n=!1){const r=await W(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return oe._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function le(t,e,n=!1){var r;const{auth:i}=t,o="reauthenticate";try{const r=await W(t,ce(i,o,e,t),n);g(r.idToken,i,"internal-error");const s=K(r.idToken);g(s,i,"internal-error");const{sub:a}=s;return g(t.uid===a,i,"user-mismatch"),oe._forOperation(t,o,r)}catch(s){throw"auth/user-not-found"===(null===(r=s)||void 0===r?void 0:r.code)&&d(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function he(t,e,n=!1){const r="signIn",i=await ce(t,r,e),o=await oe._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function fe(t,e){return he(Ct(t),e)}async function de(t,e,n){const r=Ct(t),i=await ie(r,{returnSecureToken:!0,email:e,password:n}),o=await oe._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function pe(t,e,n){return fe((0,r.m9)(t),Xt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t,e,n,i){return(0,r.m9)(t).onIdTokenChanged(e,n,i)}function me(t,e,n){return(0,r.m9)(t).beforeAuthStateChanged(e,n)}function ge(t){return(0,r.m9)(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ye(t,e){return L(t,"POST","/v2/accounts/mfaEnrollment:start",P(t,e))}function we(t,e){return L(t,"POST","/v2/accounts/mfaEnrollment:finalize",P(t,e))}new WeakMap;const be="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(be,"1"),this.storage.removeItem(be),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){const t=(0,r.z$)();return ft(t)||yt(t)}const Te=1e3,Se=10;class Ie extends _e{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ee()&&Et(),this.fallbackToPolling=_t(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);bt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,Se):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),Te)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ie.type="LOCAL";const Ce=Ie;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends _e{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}ke.type="SESSION";const Ae=ke;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new xe(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async t=>t(e.origin,i))),a=await Oe(s);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Re(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xe.receivers=[];class Ne{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const c=Re("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return window}function Pe(t){De().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return"undefined"!==typeof De()["WorkerGlobalScope"]&&"function"===typeof De()["importScripts"]}async function Me(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function $e(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function je(){return Le()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="firebaseLocalStorageDb",Fe=1,Ve="firebaseLocalStorage",Be="fbase_key";class qe{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function He(t,e){return t.transaction([Ve],e?"readwrite":"readonly").objectStore(Ve)}function ze(){const t=indexedDB.deleteDatabase(Ue);return new qe(t).toPromise()}function Ke(){const t=indexedDB.open(Ue,Fe);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Ve,{keyPath:Be})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Ve)?e(n):(n.close(),await ze(),e(await Ke()))}))}))}async function Ge(t,e,n){const r=He(t,!0).put({[Be]:e,value:n});return new qe(r).toPromise()}async function We(t,e){const n=He(t,!1).get(e),r=await new qe(n).toPromise();return void 0===r?null:r.value}function Qe(t,e){const n=He(t,!0).delete(e);return new qe(n).toPromise()}const Je=800,Xe=3;class Ye{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Ke()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>Xe)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Le()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xe._getInstance(je()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await Me(),!this.activeServiceWorker)return;this.sender=new Ne(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&$e()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ke();return await Ge(t,be,"1"),await Qe(t,be),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ge(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>We(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Qe(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=He(t,!1).getAll();return new qe(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Je)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ye.type="LOCAL";const Ze=Ye;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,e){return L(t,"POST","/v2/accounts/mfaSignIn:start",P(t,e))}function en(t,e){return L(t,"POST","/v2/accounts/mfaSignIn:finalize",P(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nn(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function rn(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",nn().appendChild(r)}))}function on(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
on("rcb"),new O(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sn="recaptcha";async function an(t,e,n){var r;const i=await n.verify();try{let o;if(g("string"===typeof i,t,"argument-error"),g(n.type===sn,t,"argument-error"),o="string"===typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){g("enroll"===e.type,t,"internal-error");const n=await ye(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{g("signin"===e.type,t,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;g(n,t,"missing-multi-factor-info");const s=await tn(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Bt(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cn{constructor(t){this.providerId=cn.PROVIDER_ID,this.auth=Ct(t)}verifyPhoneNumber(t,e){return an(this.auth,t,(0,r.m9)(e))}static credential(t,e){return Gt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return cn.credentialFromTaggedObject(e)}static credentialFromError(t){return cn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Gt._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function un(t,e){return e?_(e):(g(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn.PROVIDER_ID="phone",cn.PHONE_SIGN_IN_METHOD="phone";class ln extends Dt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ut(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Ut(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Ut(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function hn(t){return he(t.auth,new ln(t),t.bypassAuthState)}function fn(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),le(n,new ln(t),t.bypassAuthState)}async function dn(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),ue(n,new ln(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=t;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return hn;case"linkViaPopup":case"linkViaRedirect":return dn;case"reauthViaPopup":case"reauthViaRedirect":return fn;default:d(this.auth,"internal-error")}}resolve(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new O(2e3,1e4);class mn extends pn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,mn.currentPopupAction&&mn.currentPopupAction.cancel(),mn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return g(t,this.auth,"internal-error"),t}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const t=Re();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,vn.get())};t()}}mn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gn="pendingRedirect",yn=new Map;class wn extends pn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=yn.get(this.auth._key());if(!t){try{const e=await bn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}yn.set(this.auth._key(),t)}return this.bypassAuthState||yn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function bn(t,e){const n=Tn(e),r=En(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function _n(t,e){yn.set(t._key(),e)}function En(t){return _(t._redirectPersistence)}function Tn(t){return ct(gn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(t,e,n=!1){const r=Ct(t),i=un(r,e),o=new wn(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const In=6e5;class Cn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!On(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!An(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=In&&this.cachedEventUids.clear(),this.cachedEventUids.has(kn(t))}saveEventToCache(t){this.cachedEventUids.add(kn(t)),this.lastProcessedEventTime=Date.now()}}function kn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function An({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function On(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return An(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(t,e={}){return L(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nn=/^https?/;async function Dn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xn(t);for(const r of e)try{if(Pn(r))return}catch(n){}d(t,"unauthorized-domain")}function Pn(t){const e=S(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Nn.test(n))return!1;if(Rn.test(t))return r===t;const i=t.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new O(3e4,6e4);function Mn(){const t=De().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function $n(t){return new Promise(((e,n)=>{var r,i,o;function s(){Mn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mn(),n(p(t,"network-request-failed"))},timeout:Ln.get()})}if(null===(i=null===(r=De().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(o=De().gapi)||void 0===o?void 0:o.load)){const e=on("iframefcb");return De()[e]=()=>{gapi.load?s():n(p(t,"network-request-failed"))},rn(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}s()}})).catch((t=>{throw jn=null,t}))}let jn=null;function Un(t){return jn=jn||$n(t),jn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new O(5e3,15e3),Vn="__/auth/iframe",Bn="emulator/auth/iframe",qn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zn(t){const e=t.config;g(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?x(e,Bn):`https://${t.config.authDomain}/${Vn}`,o={apiKey:e.apiKey,appName:t.name,v:i.Jn},s=Hn.get(t.config.apiHost);s&&(o.eid=s);const a=t._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,r.xO)(o).slice(1)}`}async function Kn(t){const e=await Un(t),n=De().gapi;return g(n,t,"internal-error"),e.open({where:document.body,url:zn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qn,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=p(t,"network-request-failed"),o=De().setTimeout((()=>{r(i)}),Fn.get());function s(){De().clearTimeout(o),n(e)}e.ping(s).then(s,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Wn=500,Qn=600,Jn="_blank",Xn="http://localhost";class Yn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Zn(t,e,n,i=Wn,o=Qn){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Gn),{width:i.toString(),height:o.toString(),top:s,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=dt(l)?Jn:n),ht(l)&&(e=e||Xn,u.scrollbars="yes");const h=Object.entries(u).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(wt(l)&&"_self"!==c)return tr(e||"",c),new Yn(null);const f=window.open(e||"",c,h);g(f,t,"popup-blocked");try{f.focus()}catch(d){}return new Yn(f)}function tr(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er="__/auth/handler",nr="emulator/auth/handler";function rr(t,e,n,o,s,a){g(t.config.authDomain,t,"auth-domain-config-required"),g(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:o,v:i.Jn,eventId:s};if(e instanceof Yt){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,r.xb)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Zt){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${ir(t)}?${(0,r.xO)(u).slice(1)}`}function ir({config:t}){return t.emulator?x(t,nr):`https://${t.authDomain}/${er}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="webStorageSupport";class sr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ae,this._completeRedirectFn=Sn,this._overrideRedirectResult=_n}async _openPopup(t,e,n,r){var i;w(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=rr(t,e,n,S(),r);return Zn(t,o,Re())}async _openRedirect(t,e,n,r){return await this._originValidation(t),Pe(rr(t,e,n,S(),r)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await Kn(t),n=new Cn(t);return e.register("authEvent",(e=>{g(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(or,{type:or},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[or];void 0!==i&&e(!!i),d(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Dn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return _t()||ft()||yt()}}const ar=sr;class cr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return y("unexpected MultiFactorSessionType")}}}class ur extends cr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new ur(t)}_finalizeEnroll(t,e,n){return we(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return en(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class lr{constructor(){}static assertion(t){return ur._fromCredential(t)}}lr.FACTOR_ID="phone";var hr="@firebase/auth",fr="0.20.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vr(t){(0,i.Xd)(new a.wA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((e,r)=>{g(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),g(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:e.name});const i={apiKey:o,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tt(t)},a=new It(e,r,i);return T(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(t=>{const e=Ct(t.getProvider("auth").getImmediate());return(t=>new dr(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(hr,fr,pr(t)),(0,i.KN)(hr,fr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=300,gr=(0,r.Pz)("authIdTokenMaxAge")||mr;let yr=null;const wr=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gr)return;const i=null===n||void 0===n?void 0:n.token;yr!==i&&(yr=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function br(t=(0,i.Mq)()){const e=(0,i.qX)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=E(t,{popupRedirectResolver:ar,persistence:[Ze,Ce,Ae]}),o=(0,r.Pz)("authTokenSyncURL");if(o){const t=wr(o);me(n,t,(()=>t(n.currentUser))),ve(n,(e=>t(e)))}const s=(0,r.q4)("auth");return s&&At(n,`http://${s}`),n}vr("Browser")},223:function(t,e,n){"use strict";n.d(e,{BH:function(){return I},L:function(){return a},LL:function(){return O},P0:function(){return E},Pz:function(){return S},Sg:function(){return C},ZR:function(){return A},aH:function(){return T},b$:function(){return f},eu:function(){return v},hl:function(){return p},m9:function(){return B},ne:function(){return j},pd:function(){return $},q4:function(){return _},ru:function(){return h},tV:function(){return c},uI:function(){return l},vZ:function(){return D},w1:function(){return d},xO:function(){return L},xb:function(){return N},z$:function(){return u},zd:function(){return M}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|s>>4;let h=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,s=o?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==s||null==c||null==l)throw Error();const h=e<<2|s>>4;if(r.push(h),64!==c){const t=s<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},s=function(t){const e=r(t);return o.encodeByteArray(e,!0)},a=function(t){return s(t).replace(/\./g,"")},c=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function l(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function h(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function d(){const t=u();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function p(){return"object"===typeof indexedDB}function v(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}function m(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=()=>m().__FIREBASE_DEFAULTS__,y=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},w=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&c(t[1]);return e&&JSON.parse(e)},b=()=>{try{return g()||y()||w()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},_=t=>{var e,n;return null===(n=null===(e=b())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},E=t=>{const e=_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},T=()=>{var t;return null===(t=b())||void 0===t?void 0:t.config},S=t=>{var e;return null===(e=b())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(s)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k="FirebaseError";class A extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=k,Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?x(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new A(r,s,n);return a}}function x(t,e){return t.replace(R,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const R=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function D(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(P(n)&&P(o)){if(!D(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function P(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function M(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function $(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t,e){const n=new U(t,e);return n.subscribe.bind(n)}class U{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=F(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=V),void 0===r.error&&(r.error=V),void 0===r.complete&&(r.complete=V);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function F(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function V(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(t){return t&&t._delegate?t._delegate:t}},4275:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(7077),i="firebase",o="9.12.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,o,"app")},5866:function(t,e,n){"use strict";n.d(e,{v0:function(){return r.v0},w7:function(){return r.w7}});var r=n(1361)},6035:function(t,e,n){"use strict";n.d(e,{ET:function(){return dh},hJ:function(){return al},JU:function(){return cl},QT:function(){return uh},PL:function(){return hh},ad:function(){return _l},IO:function(){return Jl},pl:function(){return fh},ar:function(){return Yl}});n(3408),n(4590),n(7658),n(2801);var r,i=n(7077),o=n(7142),s=n(5168),a=n(223),c=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),u={},l=l||{},h=c||self;function f(){}function d(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function v(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++g)}var m="closure_uid_"+(1e9*Math.random()>>>0),g=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:w,b.apply(null,arguments)}function _(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function E(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function T(){this.s=this.s,this.o=this.o}var S=0,I={};T.prototype.s=!1,T.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=S)){var t=v(this);delete I[t]}},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const C=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function k(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function A(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(d(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function O(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",f,e),h.removeEventListener("test",f,e)}catch(n){}return t}();function R(t){return/^[\s\xa0]*$/.test(t)}var N=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function D(t,e){return t<e?-1:t>e?1:0}function P(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function L(t){return-1!=P().indexOf(t)}function M(t){return M[" "](t),t}function $(t){var e=J;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}M[" "]=f;var j,U=L("Opera"),F=L("Trident")||L("MSIE"),V=L("Edge"),B=V||F,q=L("Gecko")&&!(-1!=P().toLowerCase().indexOf("webkit")&&!L("Edge"))&&!(L("Trident")||L("MSIE"))&&!L("Edge"),H=-1!=P().toLowerCase().indexOf("webkit")&&!L("Edge");function z(){var t=h.document;return t?t.documentMode:void 0}t:{var K="",G=function(){var t=P();return q?/rv:([^\);]+)(\)|;)/.exec(t):V?/Edge\/([\d\.]+)/.exec(t):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):H?/WebKit\/(\S+)/.exec(t):U?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(G&&(K=G?G[1]:""),F){var W=z();if(null!=W&&W>parseFloat(K)){j=String(W);break t}}j=K}var Q,J={};function X(){return $((function(){let t=0;const e=N(String(j)).split("."),n=N("9").split("."),r=Math.max(e.length,n.length);for(let s=0;0==t&&s<r;s++){var i=e[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==i[0].length&&0==o[0].length)break;t=D(0==i[1].length?0:parseInt(i[1],10),0==o[1].length?0:parseInt(o[1],10))||D(0==i[2].length,0==o[2].length)||D(i[2],o[2]),i=i[3],o=o[3]}while(0==t)}return 0<=t}))}if(h.document&&F){var Y=z();Q=Y||(parseInt(j,10)||void 0)}else Q=void 0;var Z=Q;function tt(t,e){if(O.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(q){t:{try{M(e.nodeName);var i=!0;break t}catch(o){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:et[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&tt.X.h.call(this)}}E(tt,O);var et={2:"touch",3:"pen",4:"mouse"};tt.prototype.h=function(){tt.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var nt="closure_listenable_"+(1e6*Math.random()|0),rt=0;function it(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++rt,this.ba=this.ea=!1}function ot(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function st(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function at(t){const e={};for(const n in t)e[n]=t[n];return e}const ct="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ut(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<ct.length;e++)n=ct[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function lt(t){this.src=t,this.g={},this.h=0}function ht(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],o=C(i,e);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(ot(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ft(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.ba&&o.listener==e&&o.capture==!!n&&o.ha==r)return i}return-1}lt.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=ft(t,e,r,i);return-1<s?(e=t[s],n||(e.ea=!1)):(e=new it(e,this.src,o,!!r,i),e.ea=n,t.push(e)),e};var dt="closure_lm_"+(1e6*Math.random()|0),pt={};function vt(t,e,n,r,i){if(r&&r.once)return yt(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)vt(t,e[o],n,r,i);return null}return n=It(n),t&&t[nt]?t.N(e,n,p(r)?!!r.capture:!!r,i):mt(t,e,n,!1,r,i)}function mt(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=p(i)?!!i.capture:!!i,a=Tt(t);if(a||(t[dt]=a=new lt(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=gt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)x||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(_t(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function gt(){function t(n){return e.call(t.src,t.listener,n)}const e=Et;return t}function yt(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)yt(t,e[o],n,r,i);return null}return n=It(n),t&&t[nt]?t.O(e,n,p(r)?!!r.capture:!!r,i):mt(t,e,n,!0,r,i)}function wt(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)wt(t,e[o],n,r,i);else r=p(r)?!!r.capture:!!r,n=It(n),t&&t[nt]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=ft(o,n,r,i),-1<n&&(ot(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=Tt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ft(e,n,r,i)),(n=-1<t?e[t]:null)&&bt(n))}function bt(t){if("number"!==typeof t&&t&&!t.ba){var e=t.src;if(e&&e[nt])ht(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_t(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Tt(e))?(ht(n,t),0==n.h&&(n.src=null,e[dt]=null)):ot(t)}}}function _t(t){return t in pt?pt[t]:pt[t]="on"+t}function Et(t,e){if(t.ba)t=!0;else{e=new tt(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&bt(t),t=n.call(r,e)}return t}function Tt(t){return t=t[dt],t instanceof lt?t:null}var St="__closure_events_fn_"+(1e9*Math.random()>>>0);function It(t){return"function"===typeof t?t:(t[St]||(t[St]=function(e){return t.handleEvent(e)}),t[St])}function Ct(){T.call(this),this.i=new lt(this),this.P=this,this.I=null}function kt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new O(e,t);else if(e instanceof O)e.target=e.target||t;else{var i=e;e=new O(r,t),ut(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=At(s,r,!0,e)&&i}if(s=e.g=t,i=At(s,r,!0,e)&&i,i=At(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=At(s,r,!1,e)&&i}function At(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.ba&&s.capture==n){var a=s.listener,c=s.ha||s.src;s.ea&&ht(t.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}E(Ct,T),Ct.prototype[nt]=!0,Ct.prototype.removeEventListener=function(t,e,n,r){wt(this,t,e,n,r)},Ct.prototype.M=function(){if(Ct.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ot(n[r]);delete e.g[t],e.h--}}this.I=null},Ct.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Ct.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Ot=h.JSON.stringify;function xt(){var t=Ut;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Rt{constructor(){this.h=this.g=null}add(t,e){const n=Dt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Nt,Dt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Pt),(t=>t.reset()));class Pt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Lt(t){h.setTimeout((()=>{throw t}),0)}function Mt(t,e){Nt||$t(),jt||(Nt(),jt=!0),Ut.add(t,e)}function $t(){var t=h.Promise.resolve(void 0);Nt=function(){t.then(Ft)}}var jt=!1,Ut=new Rt;function Ft(){for(var t;t=xt();){try{t.h.call(t.g)}catch(n){Lt(n)}var e=Dt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}jt=!1}function Vt(t,e){Ct.call(this),this.h=t||1,this.g=e||h,this.j=b(this.lb,this),this.l=Date.now()}function Bt(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function qt(t,e,n){if("function"===typeof t)n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Ht(t){t.g=qt((()=>{t.g=null,t.i&&(t.i=!1,Ht(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}E(Vt,Ct),r=Vt.prototype,r.ca=!1,r.R=null,r.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),kt(this,"tick"),this.ca&&(Bt(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Vt.X.M.call(this),Bt(this),delete this.g};class zt extends T{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ht(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kt(t){T.call(this),this.h=t,this.g={}}E(Kt,T);var Gt=[];function Wt(t,e,n,r){Array.isArray(n)||(n&&(Gt[0]=n.toString()),n=Gt);for(var i=0;i<n.length;i++){var o=vt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Qt(t){st(t.g,(function(t,e){this.g.hasOwnProperty(e)&&bt(t)}),t),t.g={}}function Jt(){this.g=!0}function Xt(t,e,n,r,i,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}function Yt(t,e,n,r,i,o,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s}))}function Zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(r?" "+r:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return Ot(n)}catch(a){return e}}Kt.prototype.M=function(){Kt.X.M.call(this),Qt(this)},Kt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Jt.prototype.Aa=function(){this.g=!1},Jt.prototype.info=function(){};var ne={},re=null;function ie(){return re=re||new Ct}function oe(t){O.call(this,ne.Pa,t)}function se(t){const e=ie();kt(e,new oe(e,t))}function ae(t,e){O.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=ie();kt(e,new ae(e,t))}function ue(t,e){O.call(this,ne.Qa,t),this.size=e}function le(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}ne.Pa="serverreachability",E(oe,O),ne.STAT_EVENT="statevent",E(ae,O),ne.Qa="timingevent",E(ue,O);var he={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},fe={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function de(){}function pe(t){return t.h||(t.h=t.i())}function ve(){}de.prototype.h=null;var me,ge={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ye(){O.call(this,"d")}function we(){O.call(this,"c")}function be(){}function _e(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Kt(this),this.O=Te,t=B?125:void 0,this.T=new Vt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Ee}function Ee(){this.i=null,this.g="",this.h=!1}E(ye,O),E(we,O),E(be,de),be.prototype.g=function(){return new XMLHttpRequest},be.prototype.i=function(){return{}},me=new be;var Te=45e3,Se={},Ie={};function Ce(t,e,n){t.K=1,t.v=We(qe(e)),t.s=n,t.P=!0,ke(t,null)}function ke(t,e){t.F=Date.now(),Re(t),t.A=qe(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),cn(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Ee,t.g=fr(t.l,n?e:null,!t.s),0<t.N&&(t.L=new zt(b(t.La,t,t.g),t.N)),Wt(t.S,t.g,"readystatechange",t.ib),e=t.H?at(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),se(1),Xt(t.j,t.u,t.A,t.m,t.U,t.s)}function Ae(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Oe(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=xe(t,n),r==Ie){4==e&&(t.o=4,ce(14),i=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Se){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Zt(t.j,t.m,r,null),Me(t,r)}Ae(t)&&r!=Ie&&r!=Se&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ir(e),e.K=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Le(t),Pe(t))}function xe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Ie:(n=Number(e.substring(n,r)),isNaN(n)?Se:(r+=1,r+n>e.length?Ie:(e=e.substr(r,n),t.C=r+n,e)))}function Re(t){t.V=Date.now()+t.O,Ne(t,t.O)}function Ne(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=le(b(t.gb,t),e)}function De(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Pe(t){0==t.l.G||t.I||ar(t.l,t)}function Le(t){De(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Bt(t.T),Qt(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Me(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||mn(n.h,t)))if(!t.J&&mn(n.h,t)&&3==n.G){try{var r=n.Fa.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;sr(n),Qn(n)}rr(n),ce(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=le(b(n.cb,n),6e3));if(1>=vn(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else ur(n,11)}else if((t.J||n.g==t)&&sr(n),!R(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=r.h;o.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(gn(o,o.h),o.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.za=t,Ge(r.F,r.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var s=t;if(r.sa=hr(r,r.H?r.ka:null,r.V),s.J){yn(r.h,s);var a=s,c=r.J;c&&a.setTimeout(c),a.B&&(De(a),Re(a)),r.g=s}else nr(r);0<n.i.length&&Xn(n)}else"stop"!=u[0]&&"close"!=u[0]||ur(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ur(n,7):Wn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}se(4)}catch(u){}}function $e(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(d(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function je(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(d(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Ue(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(d(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=je(t),r=$e(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}r=_e.prototype,r.setTimeout=function(t){this.O=t},r.ib=function(t){t=t.target;const e=this.L;e&&3==Bn(t)?e.l():this.La(t)},r.La=function(t){try{if(t==this.g)t:{const l=Bn(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>l)&&(3!=l||B||this.g&&(this.h.h||this.g.fa()||qn(this.g)))){this.I||4!=l||7==e||se(8==e||0>=f?3:2),De(this);var n=this.g.aa();this.Y=n;e:if(Ae(this)){var r=qn(this.g);t="";var i=r.length,o=4==Bn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Le(this),Pe(this);var s="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=200==n,Yt(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ce(12),Le(this),Pe(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Me(this,n)}this.P?(Oe(this,l,s),B&&this.i&&3==l&&(Wt(this.S,this.T,"tick",this.hb),this.T.start())):(Zt(this.j,this.m,s,null),Me(this,s)),4==l&&Le(this),this.i&&!this.I&&(4==l?ar(this.l,this):(this.i=!1,Re(this)))}else 400==n&&0<s.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Le(this),Pe(this)}}}catch(l){}},r.hb=function(){if(this.g){var t=Bn(this.g),e=this.g.fa();this.C<e.length&&(De(this),Oe(this,t,e),this.i&&4!=t&&Re(this))}},r.cancel=function(){this.I=!0,Le(this)},r.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(te(this.j,this.A),2!=this.K&&(se(3),ce(17)),Le(this),this.o=2,Pe(this)):Ne(this,this.V-t)};var Fe=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ve(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Be(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Be){this.h=void 0!==e?e:t.h,He(this,t.j),this.s=t.s,this.g=t.g,ze(this,t.m),this.l=t.l,e=t.i;var n=new rn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ke(this,n),this.o=t.o}else t&&(n=String(t).match(Fe))?(this.h=!!e,He(this,n[1]||"",!0),this.s=Qe(n[2]||""),this.g=Qe(n[3]||"",!0),ze(this,n[4]),this.l=Qe(n[5]||"",!0),Ke(this,n[6]||"",!0),this.o=Qe(n[7]||"")):(this.h=!!e,this.i=new rn(null,this.h))}function qe(t){return new Be(t)}function He(t,e,n){t.j=n?Qe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ze(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ke(t,e,n){e instanceof rn?(t.i=e,ln(t.i,t.h)):(n||(e=Je(e,en)),t.i=new rn(e,t.h))}function Ge(t,e,n){t.i.set(e,n)}function We(t){return Ge(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Qe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Je(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Xe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Xe(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Be.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Je(e,Ye,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Je(e,Ye,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Je(n,"/"==n.charAt(0)?tn:Ze,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Je(n,nn)),t.join("")};var Ye=/[#\/\?@]/g,Ze=/[#\?:]/g,tn=/[#\?]/g,en=/[#\?@]/g,nn=/#/g;function rn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function on(t){t.g||(t.g=new Map,t.h=0,t.i&&Ve(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function sn(t,e){on(t),e=un(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function an(t,e){return on(t),e=un(t,e),t.g.has(e)}function cn(t,e,n){sn(t,e),0<n.length&&(t.i=null,t.g.set(un(t,e),k(n)),t.h+=n.length)}function un(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ln(t,e){e&&!t.j&&(on(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(sn(this,e),cn(this,n,t))}),t)),t.j=e}r=rn.prototype,r.add=function(t,e){on(this),this.i=null,t=un(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){on(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.oa=function(){on(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},r.W=function(t){on(this);let e=[];if("string"===typeof t)an(this,t)&&(e=e.concat(this.g.get(un(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return on(this),this.i=null,t=un(this,t),an(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const o=encodeURIComponent(String(r)),s=this.W(r);for(r=0;r<s.length;r++){var i=o;""!==s[r]&&(i+="="+encodeURIComponent(String(s[r]))),t.push(i)}}return this.i=t.join("&")};var hn=class{constructor(t,e){this.h=t,this.g=e}};function fn(t){this.l=t||dn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dn=10;function pn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function vn(t){return t.h?1:t.g?t.g.size:0}function mn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function gn(t,e){t.g?t.g.add(e):t.h=e}function yn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function wn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return k(t.i)}function bn(){}function _n(){this.g=new bn}function En(t,e,n){const r=n||"";try{Ue(t,(function(t,n){let i=t;p(t)&&(i=Ot(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Tn(t,e){const n=new Jt;if(h.Image){const r=new Image;r.onload=_(Sn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=_(Sn,n,r,"TestLoadImage: error",!1,e),r.onabort=_(Sn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=_(Sn,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Sn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(o){}}function In(t){this.l=t.ac||null,this.j=t.jb||!1}function Cn(t,e){Ct.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=kn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}fn.prototype.cancel=function(){if(this.i=wn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},bn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},bn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},E(In,de),In.prototype.g=function(){return new Cn(this.l,this.j)},In.prototype.i=function(t){return function(){return t}}({}),E(Cn,Ct);var kn=0;function An(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function On(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xn(t)}function xn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Cn.prototype,r.open=function(t,e){if(this.readyState!=kn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,On(this)),this.readyState=kn},r.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xn(this)),this.g&&(this.readyState=3,xn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;An(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?On(this):xn(this),3==this.readyState&&An(this)}},r.Va=function(t){this.g&&(this.response=this.responseText=t,On(this))},r.Ua=function(t){this.g&&(this.response=t,On(this))},r.ga=function(){this.g&&On(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Cn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Rn=h.JSON.parse;function Nn(t){Ct.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Dn,this.K=this.L=!1}E(Nn,Ct);var Dn="",Pn=/^https?$/i,Ln=["POST","PUT"];function Mn(t){return F&&X()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function $n(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,jn(t),Fn(t)}function jn(t){t.D||(t.D=!0,kt(t,"complete"),kt(t,"error"))}function Un(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=Bn(t)||2!=t.aa()))if(t.v&&4==Bn(t))qt(t.Ha,0,t);else if(kt(t,"readystatechange"),4==Bn(t)){t.h=!1;try{const c=t.aa();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var i=String(t.H).match(Fe)[1]||null;if(!i&&h.self&&h.self.location){var o=h.self.location.protocol;i=o.substr(0,o.length-1)}r=!Pn.test(i?i.toLowerCase():"")}n=r}if(n)kt(t,"complete"),kt(t,"success");else{t.m=6;try{var s=2<Bn(t)?t.g.statusText:""}catch(a){s=""}t.j=s+" ["+t.aa()+"]",jn(t)}}finally{Fn(t)}}}function Fn(t,e){if(t.g){Vn(t);const r=t.g,i=t.C[0]?f:null;t.g=null,t.C=null,e||kt(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Vn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Bn(t){return t.g?t.g.readyState:0}function qn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Dn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Ar){return null}}function Hn(t){let e="";return st(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function zn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Hn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ge(t,e,n))}function Kn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Gn(t){this.Ca=0,this.i=[],this.j=new Jt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Kn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Kn("baseRetryDelayMs",5e3,t),this.bb=Kn("retryDelaySeedMs",1e4,t),this.$a=Kn("forwardChannelMaxRetries",2,t),this.ta=Kn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new fn(t&&t.concurrentRequestLimit),this.Fa=new _n,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Wn(t){if(Jn(t),3==t.G){var e=t.U++,n=qe(t.F);Ge(n,"SID",t.I),Ge(n,"RID",e),Ge(n,"TYPE","terminate"),tr(t,n),e=new _e(t,t.j,e,void 0),e.K=2,e.v=We(qe(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=fr(e.l,null),e.g.da(e.v)),e.F=Date.now(),Re(e)}lr(t)}function Qn(t){t.g&&(ir(t),t.g.cancel(),t.g=null)}function Jn(t){Qn(t),t.u&&(h.clearTimeout(t.u),t.u=null),sr(t),t.h.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Xn(t){pn(t.h)||t.m||(t.m=!0,Mt(t.Ja,t),t.C=0)}function Yn(t,e){return!(vn(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Za?0:t.$a))&&(t.m=le(b(t.Ja,t,e),cr(t,t.C)),t.C++,!0))}function Zn(t,e){var n;n=e?e.m:t.U++;const r=qe(t.F);Ge(r,"SID",t.I),Ge(r,"RID",n),Ge(r,"AID",t.T),tr(t,r),t.o&&t.s&&zn(r,t.o,t.s),n=new _e(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=er(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),gn(t.h,n),Ce(n,r,e)}function tr(t,e){t.ia&&st(t.ia,(function(t,n){Ge(e,n,t)})),t.l&&Ue({},(function(t,n){Ge(e,n,t)}))}function er(t,e,n){n=Math.min(t.i.length,n);var r=t.l?b(t.l.Ra,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=e,0>n)e=Math.max(0,i[a].h-100),s=!1;else try{En(c,t,"req"+n+"_")}catch(o){r&&r(c)}}if(s){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function nr(t){t.g||t.u||(t.Z=1,Mt(t.Ia,t),t.A=0)}function rr(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=le(b(t.Ia,t),cr(t,t.A)),t.A++,!0)}function ir(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function or(t){t.g=new _e(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=qe(t.sa);Ge(e,"RID","rpc"),Ge(e,"SID",t.I),Ge(e,"CI",t.L?"0":"1"),Ge(e,"AID",t.T),Ge(e,"TYPE","xmlhttp"),tr(t,e),t.o&&t.s&&zn(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=We(qe(e)),n.s=null,n.P=!0,ke(n,t)}function sr(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function ar(t,e){var n=null;if(t.g==e){sr(t),ir(t),t.g=null;var r=2}else{if(!mn(t.h,e))return;n=e.D,yn(t.h,e),r=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ie(),kt(r,new ue(r,n,e,i)),Xn(t)}else nr(t);else if(i=e.o,3==i||0==i&&0<t.pa||!(1==r&&Yn(t,e)||2==r&&rr(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ur(t,5);break;case 4:ur(t,10);break;case 3:ur(t,6);break;default:ur(t,2)}}function cr(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ur(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=b(t.kb,t);n||(n=new Be("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||He(n,"https"),We(n)),Tn(n.toString(),r)}else ce(2);t.G=0,t.l&&t.l.va(e),lr(t),Jn(t)}function lr(t){if(t.G=0,t.la=[],t.l){const e=wn(t.h);0==e.length&&0==t.i.length||(A(t.la,e),A(t.la,t.i),t.h.i.length=0,k(t.i),t.i.length=0),t.l.ua()}}function hr(t,e,n){var r=n instanceof Be?qe(n):new Be(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),ze(r,r.m);else{var i=h.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new Be(null,void 0);r&&He(o,r),e&&(o.g=e),i&&ze(o,i),n&&(o.l=n),r=o}return n=t.D,e=t.za,n&&e&&Ge(r,n,e),Ge(r,"VER",t.ma),tr(t,r),r}function fr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Nn(new In({jb:!0})):new Nn(t.ra),e.Ka(t.H),e}function dr(){}function pr(){if(F&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function vr(t,e){Ct.call(this),this.g=new Gn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!R(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!R(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new yr(this)}function mr(t){ye.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function gr(){we.call(this),this.status=1}function yr(t){this.g=t}r=Nn.prototype,r.Ka=function(t){this.L=t},r.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?pe(this.u):pe(me),this.g.onreadystatechange=b(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(o){return void $n(this,o)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=h.FormData&&t instanceof h.FormData,!(0<=C(Ln,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Vn(this),0<this.B&&((this.K=Mn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.qa,this)):this.A=qt(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){$n(this,o)}},r.qa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,kt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,kt(this,"complete"),kt(this,"abort"),Fn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fn(this,!0)),Nn.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?Un(this):this.fb())},r.fb=function(){Un(this)},r.aa=function(){try{return 2<Bn(this)?this.g.status:-1}catch(t){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Rn(e)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Gn.prototype,r.ma=8,r.G=1,r.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new _e(this,this.j,t,void 0);let o=this.s;if(this.S&&(o?(o=at(o),ut(o,this.S)):o=this.S),null!==this.o||this.N||(i.H=o,o=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=er(this,i,e),n=qe(this.F),Ge(n,"RID",t),Ge(n,"CVER",22),this.D&&Ge(n,"X-HTTP-Session-Id",this.D),tr(this,n),o&&(this.N?e="headers="+encodeURIComponent(String(Hn(o)))+"&"+e:this.o&&zn(n,this.o,o)),gn(this.h,i),this.Ya&&Ge(n,"TYPE","init"),this.O?(Ge(n,"$req",e),Ge(n,"SID","null"),i.Z=!0,Ce(i,n,null)):Ce(i,n,e),this.G=2}}else 3==this.G&&(t?Zn(this,t):0==this.i.length||pn(this.h)||Zn(this))},r.Ia=function(){if(this.u=null,or(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=le(b(this.eb,this),t)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ce(10),Qn(this),or(this))},r.cb=function(){null!=this.v&&(this.v=null,Qn(this),rr(this),ce(19))},r.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ce(2)):(this.j.info("Failed to ping google.com"),ce(1))},r=dr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},pr.prototype.g=function(t,e){return new vr(t,e)},E(vr,Ct),vr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ce(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=hr(t,null,t.V),Xn(t)},vr.prototype.close=function(){Wn(this.g)},vr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ot(t),t=n);e.i.push(new hn(e.ab++,t)),3==e.G&&Xn(e)},vr.prototype.M=function(){this.g.l=null,delete this.j,Wn(this.g),delete this.g,vr.X.M.call(this)},E(mr,ye),E(gr,we),E(yr,dr),yr.prototype.xa=function(){kt(this.g,"a")},yr.prototype.wa=function(t){kt(this.g,new mr(t))},yr.prototype.va=function(t){kt(this.g,new gr(t))},yr.prototype.ua=function(){kt(this.g,"b")},pr.prototype.createWebChannel=pr.prototype.g,vr.prototype.send=vr.prototype.u,vr.prototype.open=vr.prototype.m,vr.prototype.close=vr.prototype.close,he.NO_ERROR=0,he.TIMEOUT=8,he.HTTP_ERROR=6,fe.COMPLETE="complete",ve.EventType=ge,ge.OPEN="a",ge.CLOSE="b",ge.ERROR="c",ge.MESSAGE="d",Ct.prototype.listen=Ct.prototype.N,Nn.prototype.listenOnce=Nn.prototype.O,Nn.prototype.getLastError=Nn.prototype.Oa,Nn.prototype.getLastErrorCode=Nn.prototype.Ea,Nn.prototype.getStatus=Nn.prototype.aa,Nn.prototype.getResponseJson=Nn.prototype.Sa,Nn.prototype.getResponseText=Nn.prototype.fa,Nn.prototype.send=Nn.prototype.da,Nn.prototype.setWithCredentials=Nn.prototype.Ka;var wr=u.createWebChannelTransport=function(){return new pr},br=u.getStatEventTarget=function(){return ie()},_r=u.ErrorCode=he,Er=u.EventType=fe,Tr=u.Event=ne,Sr=u.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Ir=u.FetchXmlHttpFactory=In,Cr=u.WebChannel=ve,kr=u.XhrIo=Nn;const Ar="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Or.UNAUTHENTICATED=new Or(null),Or.GOOGLE_CREDENTIALS=new Or("google-credentials-uid"),Or.FIRST_PARTY=new Or("first-party-uid"),Or.MOCK_USER=new Or("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let xr="9.12.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new s.Yd("@firebase/firestore");function Nr(){return Rr.logLevel}function Dr(t,...e){if(Rr.logLevel<=s["in"].DEBUG){const n=e.map(Mr);Rr.debug(`Firestore (${xr}): ${t}`,...n)}}function Pr(t,...e){if(Rr.logLevel<=s["in"].ERROR){const n=e.map(Mr);Rr.error(`Firestore (${xr}): ${t}`,...n)}}function Lr(t,...e){if(Rr.logLevel<=s["in"].WARN){const n=e.map(Mr);Rr.warn(`Firestore (${xr}): ${t}`,...n)}}function Mr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t="Unexpected state"){const e=`FIRESTORE (${xr}) INTERNAL ASSERTION FAILED: `+t;throw Pr(e),new Error(e)}function jr(t,e){t||$r()}function Ur(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Vr extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Hr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Or.UNAUTHENTICATED)))}shutdown(){}}class zr{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Kr{constructor(t){this.t=t,this.currentUser=Or.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Br;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Br,t.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},s=t=>{Dr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((t=>s(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(Dr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Br)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Dr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(jr("string"==typeof e.accessToken),new qr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return jr(null===t||"string"==typeof t),new Or(t)}}class Gr{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r,this.type="FirstParty",this.user=Or.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(jr(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Wr{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r}getToken(){return Promise.resolve(new Gr(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(Or.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Qr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jr{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&Dr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,Dr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Dr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?r(t):Dr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(jr("string"==typeof t.token),this.A=t.token,new Qr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=Xr(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function Zr(t,e){return t<e?-1:t>e?1:0}function ti(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ei{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Vr(Fr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Vr(Fr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Vr(Fr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Vr(Fr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ei.fromMillis(Date.now())}static fromDate(t){return ei.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ei(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Zr(this.nanoseconds,t.nanoseconds):Zr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ni(t)}static min(){return new ni(new ei(0,0))}static max(){return new ni(new ei(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,e,n){void 0===e?e=0:e>t.length&&$r(),void 0===n?n=t.length-e:n>t.length-e&&$r(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===ri.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ri?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ii extends ri{construct(t,e,n){return new ii(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Vr(Fr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ii(e)}static emptyPath(){return new ii([])}}const oi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class si extends ri{construct(t,e,n){return new si(t,e,n)}static isValidIdentifier(t){return oi.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),si.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new si(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Vr(Fr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Vr(Fr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Vr(Fr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(o=!o,r++):"."!==e||o?(n+=e,r++):(i(),r++)}if(i(),o)throw new Vr(Fr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new si(e)}static emptyPath(){return new si([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t){this.path=t}static fromPath(t){return new ai(ii.fromString(t))}static fromName(t){return new ai(ii.fromString(t).popFirst(5))}static empty(){return new ai(ii.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ii.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ii.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ai(new ii(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}ci.UNKNOWN_ID=-1;function ui(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ni.fromTimestamp(1e9===r?new ei(n+1,0):new ei(n,r));return new hi(i,ai.empty(),e)}function li(t){return new hi(t.readTime,t.key,-1)}class hi{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new hi(ni.min(),ai.empty(),-1)}static max(){return new hi(ni.max(),ai.empty(),-1)}}function fi(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ai.comparator(t.documentKey,e.documentKey),0!==n?n:Zr(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vi(t){if(t.code!==Fr.FAILED_PRECONDITION||t.message!==di)throw t;Dr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&$r(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new mi(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof mi?e:mi.resolve(e)}catch(t){return mi.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):mi.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):mi.reject(e)}static resolve(t){return new mi(((e,n)=>{e(t)}))}static reject(t){return new mi(((e,n)=>{n(t)}))}static waitFor(t){return new mi(((e,n)=>{let r=0,i=0,o=!1;t.forEach((t=>{++r,t.next((()=>{++i,o&&i===r&&e()}),(t=>n(t)))})),o=!0,i===r&&e()}))}static or(t){let e=mi.resolve(!1);for(const n of t)e=e.next((t=>t?mi.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new mi(((n,r)=>{const i=t.length,o=new Array(i);let s=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{o[c]=t,++s,s===i&&n(o)}),(t=>r(t)))}}))}static doWhile(t,e){return new mi(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _i(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yi.at=-1;class Ei{constructor(t,e){this.comparator=t,this.root=e||Si.EMPTY}insert(t,e){return new Ei(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Si.BLACK,null,null))}remove(t){return new Ei(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Si.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ti(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ti(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ti(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ti(this.root,t,this.comparator,!0)}}class Ti{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Si{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Si.RED,this.left=null!=r?r:Si.EMPTY,this.right=null!=i?i:Si.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Si(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Si.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Si.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Si.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Si.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw $r();if(this.right.isRed())throw $r();const t=this.left.check();if(t!==this.right.check())throw $r();return t+(this.isRed()?0:1)}}Si.EMPTY=null,Si.RED=!0,Si.BLACK=!1,Si.EMPTY=new class{constructor(){this.size=0}get key(){throw $r()}get value(){throw $r()}get color(){throw $r()}get left(){throw $r()}get right(){throw $r()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Si(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ii{constructor(t){this.comparator=t,this.data=new Ei(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ci(this.data.getIterator())}getIteratorFrom(t){return new Ci(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ii))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ii(this.comparator);return e.data=t,e}}class Ci{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ki{constructor(t){this.fields=t,t.sort(si.comparator)}static empty(){return new ki([])}unionWith(t){let e=new Ii(si.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new ki(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ti(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ai{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Ai(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ai(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Zr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ai.EMPTY_BYTE_STRING=new Ai("");const Oi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xi(t){if(jr(!!t),"string"==typeof t){let e=0;const n=Oi.exec(t);if(jr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ri(t.seconds),nanos:Ri(t.nanos)}}function Ri(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ni(t){return"string"==typeof t?Ai.fromBase64String(t):Ai.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Pi(t){const e=t.mapValue.fields.__previous_value__;return Di(e)?Pi(e):e}function Li(t){const e=xi(t.mapValue.fields.__local_write_time__.timestampValue);return new ei(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t,e,n,r,i,o,s,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class $i{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new $i("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof $i&&t.projectId===this.projectId&&t.database===this.database}}function ji(t){return null==t}function Ui(t){return 0===t&&1/t==-1/0}function Fi(t){return"number"==typeof t&&Number.isInteger(t)&&!Ui(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Bi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Di(t)?4:no(t)?9007199254740991:10:$r()}function qi(t,e){if(t===e)return!0;const n=Bi(t);if(n!==Bi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Li(t).isEqual(Li(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=xi(t.timestampValue),r=xi(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ni(t.bytesValue).isEqual(Ni(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ri(t.geoPointValue.latitude)===Ri(e.geoPointValue.latitude)&&Ri(t.geoPointValue.longitude)===Ri(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ri(t.integerValue)===Ri(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ri(t.doubleValue),r=Ri(e.doubleValue);return n===r?Ui(n)===Ui(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return ti(t.arrayValue.values||[],e.arrayValue.values||[],qi);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(wi(n)!==wi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!qi(n[i],r[i])))return!1;return!0}(t,e);default:return $r()}}function Hi(t,e){return void 0!==(t.values||[]).find((t=>qi(t,e)))}function zi(t,e){if(t===e)return 0;const n=Bi(t),r=Bi(e);if(n!==r)return Zr(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Zr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ri(t.integerValue||t.doubleValue),r=Ri(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Ki(t.timestampValue,e.timestampValue);case 4:return Ki(Li(t),Li(e));case 5:return Zr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ni(t),r=Ni(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=Zr(n[i],r[i]);if(0!==t)return t}return Zr(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Zr(Ri(t.latitude),Ri(e.latitude));return 0!==n?n:Zr(Ri(t.longitude),Ri(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=zi(n[i],r[i]);if(t)return t}return Zr(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Vi.mapValue&&e===Vi.mapValue)return 0;if(t===Vi.mapValue)return 1;if(e===Vi.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const t=Zr(r[s],o[s]);if(0!==t)return t;const e=zi(n[r[s]],i[o[s]]);if(0!==e)return e}return Zr(r.length,o.length)}(t.mapValue,e.mapValue);default:throw $r()}}function Ki(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Zr(t,e);const n=xi(t),r=xi(e),i=Zr(n.seconds,r.seconds);return 0!==i?i:Zr(n.nanos,r.nanos)}function Gi(t){return Wi(t)}function Wi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=xi(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ni(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ai.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Wi(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Wi(t.fields[i])}`;return n+"}"}(t.mapValue):$r();var e,n}function Qi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ji(t){return!!t&&"integerValue"in t}function Xi(t){return!!t&&"arrayValue"in t}function Yi(t){return!!t&&"nullValue"in t}function Zi(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function to(t){return!!t&&"mapValue"in t}function eo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=eo(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=eo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function no(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ro{constructor(t){this.value=t}static empty(){return new ro({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!to(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=eo(e)}setAll(t){let e=si.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=eo(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());to(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return qi(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];to(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){bi(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new ro(eo(this.value))}}function io(t){const e=[];return bi(t.fields,((t,n)=>{const r=new si([t]);if(to(n)){const t=io(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new ki(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class oo{constructor(t,e,n,r,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new oo(t,0,ni.min(),ni.min(),ro.empty(),0)}static newFoundDocument(t,e,n){return new oo(t,1,e,ni.min(),n,0)}static newNoDocument(t,e){return new oo(t,2,e,ni.min(),ro.empty(),0)}static newUnknownDocument(t,e){return new oo(t,3,e,ni.min(),ro.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ro.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ro.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ni.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof oo&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new oo(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t,e=null,n=[],r=[],i=null,o=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.ht=null}}function ao(t,e=null,n=[],r=[],i=null,o=null,s=null){return new so(t,e,n,r,i,o,s)}function co(t){const e=Ur(t);if(null===e.ht){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Gi(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),ji(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Gi(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Gi(t))).join(",")),e.ht=t}return e.ht}function uo(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Gi(e.value)}`;var e})).join(", ")}]`),ji(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Gi(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Gi(t))).join(",")),`Target(${e})`}function lo(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!So(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!qi(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Co(t.startAt,e.startAt)&&Co(t.endAt,e.endAt)}function ho(t){return ai.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class fo extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.lt(t,e,n):new po(t,e,n):"array-contains"===e?new yo(t,n):"in"===e?new wo(t,n):"not-in"===e?new bo(t,n):"array-contains-any"===e?new _o(t,n):new fo(t,e,n)}static lt(t,e,n){return"in"===e?new vo(t,n):new mo(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.ft(zi(e,this.value)):null!==e&&Bi(this.value)===Bi(e)&&this.ft(zi(e,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return $r()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class po extends fo{constructor(t,e,n){super(t,e,n),this.key=ai.fromName(n.referenceValue)}matches(t){const e=ai.comparator(t.key,this.key);return this.ft(e)}}class vo extends fo{constructor(t,e){super(t,"in",e),this.keys=go("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class mo extends fo{constructor(t,e){super(t,"not-in",e),this.keys=go("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function go(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ai.fromName(t.referenceValue)))}class yo extends fo{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Xi(e)&&Hi(e.arrayValue,this.value)}}class wo extends fo{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Hi(this.value.arrayValue,e)}}class bo extends fo{constructor(t,e){super(t,"not-in",e)}matches(t){if(Hi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Hi(this.value.arrayValue,e)}}class _o extends fo{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Xi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Hi(this.value.arrayValue,t)))}}class Eo{constructor(t,e){this.position=t,this.inclusive=e}}class To{constructor(t,e="asc"){this.field=t,this.dir=e}}function So(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Io(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(r=o.field.isKeyField()?ai.comparator(ai.fromName(s.referenceValue),n.key):zi(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function Co(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qi(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t,e=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function Ao(t,e,n,r,i,o,s,a){return new ko(t,e,n,r,i,o,s,a)}function Oo(t){return new ko(t)}function xo(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ro(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function No(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Do(t){return null!==t.collectionGroup}function Po(t){const e=Ur(t);if(null===e._t){e._t=[];const t=No(e),n=Ro(e);if(null!==t&&null===n)t.isKeyField()||e._t.push(new To(t)),e._t.push(new To(si.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e._t.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new To(si.keyField(),t))}}}return e._t}function Lo(t){const e=Ur(t);if(!e.wt)if("F"===e.limitType)e.wt=ao(e.path,e.collectionGroup,Po(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Po(e)){const e="desc"===i.dir?"asc":"desc";t.push(new To(i.field,e))}const n=e.endAt?new Eo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Eo(e.startAt.position,e.startAt.inclusive):null;e.wt=ao(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.wt}function Mo(t,e,n){return new ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $o(t,e){return lo(Lo(t),Lo(e))&&t.limitType===e.limitType}function jo(t){return`${co(Lo(t))}|lt:${t.limitType}`}function Uo(t){return`Query(target=${uo(Lo(t))}; limitType=${t.limitType})`}function Fo(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ai.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Io(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Po(t),e))&&!(t.endAt&&!function(t,e,n){const r=Io(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Po(t),e))}(t,e)}function Vo(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Bo(t){return(e,n)=>{let r=!1;for(const i of Po(t)){const t=qo(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function qo(t,e,n){const r=t.field.isKeyField()?ai.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?zi(r,i):$r()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $r()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ui(e)?"-0":e}}function zo(t){return{integerValue:""+t}}function Ko(t,e){return Fi(e)?zo(e):Ho(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this._=void 0}}function Wo(t,e,n){return t instanceof Xo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Yo?Zo(t,e):t instanceof ts?es(t,e):function(t,e){const n=Jo(t,e),r=rs(n)+rs(t.yt);return Ji(n)&&Ji(t.yt)?zo(r):Ho(t.It,r)}(t,e)}function Qo(t,e,n){return t instanceof Yo?Zo(t,e):t instanceof ts?es(t,e):n}function Jo(t,e){return t instanceof ns?Ji(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Xo extends Go{}class Yo extends Go{constructor(t){super(),this.elements=t}}function Zo(t,e){const n=is(e);for(const r of t.elements)n.some((t=>qi(t,r)))||n.push(r);return{arrayValue:{values:n}}}class ts extends Go{constructor(t){super(),this.elements=t}}function es(t,e){let n=is(e);for(const r of t.elements)n=n.filter((t=>!qi(t,r)));return{arrayValue:{values:n}}}class ns extends Go{constructor(t,e){super(),this.It=t,this.yt=e}}function rs(t){return Ri(t.integerValue||t.doubleValue)}function is(t){return Xi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Yo&&e instanceof Yo||t instanceof ts&&e instanceof ts?ti(t.elements,e.elements,qi):t instanceof ns&&e instanceof ns?qi(t.yt,e.yt):t instanceof Xo&&e instanceof Xo}(t.transform,e.transform)}class ss{constructor(t,e){this.version=t,this.transformResults=e}}class as{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new as}static exists(t){return new as(void 0,t)}static updateTime(t){return new as(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function cs(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class us{}function ls(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new bs(t.key,as.none()):new vs(t.key,t.data,as.none());{const n=t.data,r=ro.empty();let i=new Ii(si.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new ms(t.key,r,new ki(i.toArray()),as.none())}}function hs(t,e,n){t instanceof vs?function(t,e,n){const r=t.value.clone(),i=ys(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof ms?function(t,e,n){if(!cs(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=ys(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(gs(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function fs(t,e,n,r){return t instanceof vs?function(t,e,n,r){if(!cs(t.precondition,e))return n;const i=t.value.clone(),o=ws(t.fieldTransforms,r,e);return i.setAll(o),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof ms?function(t,e,n,r){if(!cs(t.precondition,e))return n;const i=ws(t.fieldTransforms,r,e),o=e.data;return o.setAll(gs(t)),o.setAll(i),e.convertToFoundDocument(e.version,o).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return cs(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function ds(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Jo(r.transform,t||null);null!=i&&(null===n&&(n=ro.empty()),n.set(r.field,i))}return n||null}function ps(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&ti(t,e,((t,e)=>os(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class vs extends us{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ms extends us{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gs(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function ys(t,e,n){const r=new Map;jr(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,Qo(s,a,n[i]))}return r}function ws(t,e,n){const r=new Map;for(const i of t){const t=i.transform,o=n.data.field(i.field);r.set(i.field,Wo(t,o,e))}return r}class bs extends us{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _s extends us{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ts,Ss;function Is(t){switch(t){default:return $r();case Fr.CANCELLED:case Fr.UNKNOWN:case Fr.DEADLINE_EXCEEDED:case Fr.RESOURCE_EXHAUSTED:case Fr.INTERNAL:case Fr.UNAVAILABLE:case Fr.UNAUTHENTICATED:return!1;case Fr.INVALID_ARGUMENT:case Fr.NOT_FOUND:case Fr.ALREADY_EXISTS:case Fr.PERMISSION_DENIED:case Fr.FAILED_PRECONDITION:case Fr.ABORTED:case Fr.OUT_OF_RANGE:case Fr.UNIMPLEMENTED:case Fr.DATA_LOSS:return!0}}function Cs(t){if(void 0===t)return Pr("GRPC error has no .code"),Fr.UNKNOWN;switch(t){case Ts.OK:return Fr.OK;case Ts.CANCELLED:return Fr.CANCELLED;case Ts.UNKNOWN:return Fr.UNKNOWN;case Ts.DEADLINE_EXCEEDED:return Fr.DEADLINE_EXCEEDED;case Ts.RESOURCE_EXHAUSTED:return Fr.RESOURCE_EXHAUSTED;case Ts.INTERNAL:return Fr.INTERNAL;case Ts.UNAVAILABLE:return Fr.UNAVAILABLE;case Ts.UNAUTHENTICATED:return Fr.UNAUTHENTICATED;case Ts.INVALID_ARGUMENT:return Fr.INVALID_ARGUMENT;case Ts.NOT_FOUND:return Fr.NOT_FOUND;case Ts.ALREADY_EXISTS:return Fr.ALREADY_EXISTS;case Ts.PERMISSION_DENIED:return Fr.PERMISSION_DENIED;case Ts.FAILED_PRECONDITION:return Fr.FAILED_PRECONDITION;case Ts.ABORTED:return Fr.ABORTED;case Ts.OUT_OF_RANGE:return Fr.OUT_OF_RANGE;case Ts.UNIMPLEMENTED:return Fr.UNIMPLEMENTED;case Ts.DATA_LOSS:return Fr.DATA_LOSS;default:return $r()}}(Ss=Ts||(Ts={}))[Ss.OK=0]="OK",Ss[Ss.CANCELLED=1]="CANCELLED",Ss[Ss.UNKNOWN=2]="UNKNOWN",Ss[Ss.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ss[Ss.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ss[Ss.NOT_FOUND=5]="NOT_FOUND",Ss[Ss.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ss[Ss.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ss[Ss.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ss[Ss.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ss[Ss.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ss[Ss.ABORTED=10]="ABORTED",Ss[Ss.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ss[Ss.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ss[Ss.INTERNAL=13]="INTERNAL",Ss[Ss.UNAVAILABLE=14]="UNAVAILABLE",Ss[Ss.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ks{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){bi(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return _i(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new Ei(ai.comparator);function Os(){return As}const xs=new Ei(ai.comparator);function Rs(...t){let e=xs;for(const n of t)e=e.insert(n.key,n);return e}function Ns(t){let e=xs;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Ds(){return Ls()}function Ps(){return Ls()}function Ls(){return new ks((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Ms=new Ei(ai.comparator),$s=new Ii(ai.comparator);function js(...t){let e=$s;for(const n of t)e=e.add(n);return e}const Us=new Ii(Zr);function Fs(){return Us}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,Bs.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Vs(ni.min(),r,Fs(),Os(),js())}}class Bs{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Bs(n,e,js(),js(),js())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t,e,n,r){this.Tt=t,this.removedTargetIds=e,this.key=n,this.Et=r}}class Hs{constructor(t,e){this.targetId=t,this.At=e}}class zs{constructor(t,e,n=Ai.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Ks{constructor(){this.Rt=0,this.bt=Qs(),this.Pt=Ai.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=js(),e=js(),n=js();return this.bt.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:$r()}})),new Bs(this.Pt,this.vt,t,e,n)}Nt(){this.Vt=!1,this.bt=Qs()}kt(t,e){this.Vt=!0,this.bt=this.bt.insert(t,e)}Ot(t){this.Vt=!0,this.bt=this.bt.remove(t)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Gs{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=Os(),this.qt=Ws(),this.Kt=new Ii(Zr)}Gt(t){for(const e of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(e,t.Et):this.jt(e,t.key,t.Et);for(const e of t.removedTargetIds)this.jt(e,t.key,t.Et)}Wt(t){this.forEachTarget(t,(e=>{const n=this.zt(e);switch(t.state){case 0:this.Ht(e)&&n.Ct(t.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(t.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(e);break;case 3:this.Ht(e)&&(n.$t(),n.Ct(t.resumeToken));break;case 4:this.Ht(e)&&(this.Jt(e),n.Ct(t.resumeToken));break;default:$r()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Lt.forEach(((t,n)=>{this.Ht(n)&&e(n)}))}Yt(t){const e=t.targetId,n=t.At.count,r=this.Xt(e);if(r){const t=r.target;if(ho(t))if(0===n){const n=new ai(t.path);this.jt(e,n,oo.newNoDocument(n,ni.min()))}else jr(1===n);else this.Zt(e)!==n&&(this.Jt(e),this.Kt=this.Kt.add(e))}}te(t){const e=new Map;this.Lt.forEach(((n,r)=>{const i=this.Xt(r);if(i){if(n.current&&ho(i.target)){const e=new ai(i.target.path);null!==this.Ut.get(e)||this.ee(r,e)||this.jt(r,e,oo.newNoDocument(e,t))}n.Dt&&(e.set(r,n.xt()),n.Nt())}}));let n=js();this.qt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Xt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.Ut.forEach(((e,n)=>n.setReadTime(t)));const r=new Vs(t,e,this.Kt,this.Ut,n);return this.Ut=Os(),this.qt=Ws(),this.Kt=new Ii(Zr),r}Qt(t,e){if(!this.Ht(t))return;const n=this.ee(t,e.key)?2:0;this.zt(t).kt(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ne(e.key).add(t))}jt(t,e,n){if(!this.Ht(t))return;const r=this.zt(t);this.ee(t,e)?r.kt(e,1):r.Ot(e),this.qt=this.qt.insert(e,this.ne(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.Lt.delete(t)}Zt(t){const e=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Mt(t){this.zt(t).Mt()}zt(t){let e=this.Lt.get(t);return e||(e=new Ks,this.Lt.set(t,e)),e}ne(t){let e=this.qt.get(t);return e||(e=new Ii(Zr),this.qt=this.qt.insert(t,e)),e}Ht(t){const e=null!==this.Xt(t);return e||Dr("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.Lt.get(t);return e&&e.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new Ks),this.Bt.getRemoteKeysForTarget(t).forEach((e=>{this.jt(t,e,null)}))}ee(t,e){return this.Bt.getRemoteKeysForTarget(t).has(e)}}function Ws(){return new Ei(ai.comparator)}function Qs(){return new Ei(ai.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Xs=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class Ys{constructor(t,e){this.databaseId=t,this.gt=e}}function Zs(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ta(t,e){return t.gt?e.toBase64():e.toUint8Array()}function ea(t,e){return Zs(t,e.toTimestamp())}function na(t){return jr(!!t),ni.fromTimestamp(function(t){const e=xi(t);return new ei(e.seconds,e.nanos)}(t))}function ra(t,e){return function(t){return new ii(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function ia(t){const e=ii.fromString(t);return jr(ka(e)),e}function oa(t,e){return ra(t.databaseId,e.path)}function sa(t,e){const n=ia(e);if(n.get(1)!==t.databaseId.projectId)throw new Vr(Fr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Vr(Fr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ai(la(n))}function aa(t,e){return ra(t.databaseId,e)}function ca(t){const e=ia(t);return 4===e.length?ii.emptyPath():la(e)}function ua(t){return new ii(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function la(t){return jr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ha(t,e,n){return{name:oa(t,e),fields:n.value.mapValue.fields}}function fa(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:$r()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(t,e){return t.gt?(jr(void 0===e||"string"==typeof e),Ai.fromBase64String(e||"")):(jr(void 0===e||e instanceof Uint8Array),Ai.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(t){const e=void 0===t.code?Fr.UNKNOWN:Cs(t.code);return new Vr(e,t.message||"")}(s);n=new zs(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=sa(t,r.document.name),o=na(r.document.updateTime),s=new ro({mapValue:{fields:r.document.fields}}),a=oo.newFoundDocument(i,o,s),c=r.targetIds||[],u=r.removedTargetIds||[];n=new qs(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=sa(t,r.document),o=r.readTime?na(r.readTime):ni.min(),s=oo.newNoDocument(i,o),a=r.removedTargetIds||[];n=new qs([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=sa(t,r.document),o=r.removedTargetIds||[];n=new qs([],o,i,null)}else{if(!("filter"in e))return $r();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Es(r),o=t.targetId;n=new Hs(o,i)}}return n}function da(t,e){let n;if(e instanceof vs)n={update:ha(t,e.key,e.value)};else if(e instanceof bs)n={delete:oa(t,e.key)};else if(e instanceof ms)n={update:ha(t,e.key,e.data),updateMask:Ca(e.fieldMask)};else{if(!(e instanceof _s))return $r();n={verify:oa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Xo)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Yo)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ts)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ns)return{fieldPath:e.field.canonicalString(),increment:n.yt};throw $r()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:ea(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:$r()}(t,e.precondition)),n}function pa(t,e){return t&&t.length>0?(jr(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?na(t.updateTime):na(e);return n.isEqual(ni.min())&&(n=na(e)),new ss(n,t.transformResults||[])}(t,e)))):[]}function va(t,e){return{documents:[aa(t,e.path)]}}function ma(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=aa(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=aa(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Zi(t.value))return{unaryFilter:{field:Ea(t.field),op:"IS_NAN"}};if(Yi(t.value))return{unaryFilter:{field:Ea(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Zi(t.value))return{unaryFilter:{field:Ea(t.field),op:"IS_NOT_NAN"}};if(Yi(t.value))return{unaryFilter:{field:Ea(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ea(t.field),op:_a(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Ea(t.field),direction:ba(t.dir)}}(t)))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(t,e){return t.gt||ji(e)?e:{value:e}}(t,e.limit);var a;return null!==s&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function ga(t){let e=ca(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){jr(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let o=[];n.where&&(o=wa(n.where));let s=[];n.orderBy&&(s=n.orderBy.map((t=>function(t){return new To(Ta(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,ji(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Eo(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Eo(n,e)}(n.endAt)),Ao(e,i,s,o,a,"F",c,u)}function ya(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return $r()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function wa(t){return t?void 0!==t.unaryFilter?[Ia(t)]:void 0!==t.fieldFilter?[Sa(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>wa(t))).reduce(((t,e)=>t.concat(e))):$r():[]}function ba(t){return Js[t]}function _a(t){return Xs[t]}function Ea(t){return{fieldPath:t.canonicalString()}}function Ta(t){return si.fromServerFormat(t.fieldPath)}function Sa(t){return fo.create(Ta(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $r()}}(t.fieldFilter.op),t.fieldFilter.value)}function Ia(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ta(t.unaryFilter.field);return fo.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ta(t.unaryFilter.field);return fo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ta(t.unaryFilter.field);return fo.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ta(t.unaryFilter.field);return fo.create(i,"!=",{nullValue:"NULL_VALUE"});default:return $r()}}function Ca(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ka(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Oa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],xa=Oa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ra{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&hs(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=fs(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=fs(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ps();return this.mutations.forEach((r=>{const i=t.get(r.key),o=i.overlayedDocument;let s=this.applyToLocalView(o,i.mutatedFields);s=e.has(r.key)?null:s;const a=ls(o,s);null!==a&&n.set(r.key,a),o.isValidDocument()||o.convertToNoDocument(ni.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),js())}isEqual(t){return this.batchId===t.batchId&&ti(this.mutations,t.mutations,((t,e)=>ps(t,e)))&&ti(this.baseMutations,t.baseMutations,((t,e)=>ps(t,e)))}}class Na{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){jr(t.mutations.length===n.length);let r=Ms;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new Na(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(t,e,n,r,i=ni.min(),o=ni.min(),s=Ai.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s}withSequenceNumber(t){return new Pa(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Pa(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Pa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t){this.re=t}}function Ma(t){const e=ga({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Mo(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){}ce(t,e){this.ae(t,e),e.he()}ae(t,e){if("nullValue"in t)this.le(e,5);else if("booleanValue"in t)this.le(e,10),e.fe(t.booleanValue?1:0);else if("integerValue"in t)this.le(e,15),e.fe(Ri(t.integerValue));else if("doubleValue"in t){const n=Ri(t.doubleValue);isNaN(n)?this.le(e,13):(this.le(e,15),Ui(n)?e.fe(0):e.fe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.le(e,20),"string"==typeof n?e.de(n):(e.de(`${n.seconds||""}`),e.fe(n.nanos||0))}else if("stringValue"in t)this._e(t.stringValue,e),this.we(e);else if("bytesValue"in t)this.le(e,30),e.me(Ni(t.bytesValue)),this.we(e);else if("referenceValue"in t)this.ge(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.le(e,45),e.fe(n.latitude||0),e.fe(n.longitude||0)}else"mapValue"in t?no(t)?this.le(e,Number.MAX_SAFE_INTEGER):(this.ye(t.mapValue,e),this.we(e)):"arrayValue"in t?(this.pe(t.arrayValue,e),this.we(e)):$r()}_e(t,e){this.le(e,25),this.Ie(t,e)}Ie(t,e){e.de(t)}ye(t,e){const n=t.fields||{};this.le(e,55);for(const r of Object.keys(n))this._e(r,e),this.ae(n[r],e)}pe(t,e){const n=t.values||[];this.le(e,50);for(const r of n)this.ae(r,e)}ge(t,e){this.le(e,37),ai.fromName(t).path.forEach((t=>{this.le(e,60),this.Ie(t,e)}))}le(t,e){t.fe(e)}we(t){t.fe(2)}}$a.Te=new $a;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ja{constructor(){this.Ye=new Ua}addToCollectionParentIndex(t,e){return this.Ye.add(e),mi.resolve()}getCollectionParents(t,e){return mi.resolve(this.Ye.getEntries(e))}addFieldIndex(t,e){return mi.resolve()}deleteFieldIndex(t,e){return mi.resolve()}getDocumentsMatchingTarget(t,e){return mi.resolve(null)}getIndexType(t,e){return mi.resolve(0)}getFieldIndexes(t,e){return mi.resolve([])}getNextCollectionGroupToUpdate(t){return mi.resolve(null)}getMinOffset(t,e){return mi.resolve(hi.min())}getMinOffsetFromCollectionGroup(t,e){return mi.resolve(hi.min())}updateCollectionGroup(t,e,n){return mi.resolve()}updateIndexEntries(t,e){return mi.resolve()}}class Ua{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Ii(ii.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Ii(ii.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Fa{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Fa(t,Fa.DEFAULT_COLLECTION_PERCENTILE,Fa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fa.DEFAULT_COLLECTION_PERCENTILE=10,Fa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Fa.DEFAULT=new Fa(41943040,Fa.DEFAULT_COLLECTION_PERCENTILE,Fa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Fa.DISABLED=new Fa(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Va{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Va(0)}static vn(){return new Va(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ba{constructor(){this.changes=new ks((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,oo.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?mi.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qa{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&fs(n.mutation,t,ki.empty(),ei.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,js()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=js()){const r=Ds();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Rs();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Ds();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,js())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=Os();const o=Ls(),s=Ls();return e.forEach(((t,e)=>{const s=n.get(e.key);r.has(e.key)&&(void 0===s||s.mutation instanceof ms)?i=i.insert(e.key,e):void 0!==s&&(o.set(e.key,s.mutation.getFieldMask()),fs(s.mutation,e,s.mutation.getFieldMask(),ei.now()))})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>o.set(t,e))),e.forEach(((t,e)=>{var n;return s.set(t,new qa(e,null!==(n=o.get(t))&&void 0!==n?n:null))})),s)))}recalculateAndSaveOverlays(t,e){const n=Ls();let r=new Ei(((t,e)=>t-e)),i=js();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const o=e.get(t);if(null===o)return;let s=n.get(t)||ki.empty();s=i.applyToLocalView(o,s),n.set(t,s);const a=(r.get(i.batchId)||js()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const o=[],s=r.getReverseIterator();for(;s.hasNext();){const r=s.getNext(),a=r.key,c=r.value,u=Ps();c.forEach((t=>{if(!i.has(t)){const r=ls(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),o.push(this.documentOverlayCache.saveOverlays(t,a,u))}return mi.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return ai.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Do(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):mi.resolve(Ds());let s=-1,a=i;return o.next((e=>mi.forEach(e,((e,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),i.get(e)?mi.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,js()))).next((t=>({batchId:s,changes:Ns(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ai(e)).next((t=>{let e=Rs();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=Rs();return this.indexManager.getCollectionParents(t,r).next((o=>mi.forEach(o,(o=>{const s=function(t,e){return new ko(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.getDocumentsMatchingCollectionQuery(t,s,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,oo.newInvalidDocument(n)))}));let n=Rs();return r.forEach(((r,i)=>{const o=t.get(r);void 0!==o&&fs(o.mutation,i,ki.empty(),ei.now()),Fo(e,i)&&(n=n.insert(r,i))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):mi.resolve(oo.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return mi.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:na(n.createTime)}),mi.resolve()}getNamedQuery(t,e){return mi.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:Ma(t.bundledQuery),readTime:na(t.readTime)}}(e)),mi.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this.overlays=new Ei(ai.comparator),this.es=new Map}getOverlay(t,e){return mi.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Ds();return mi.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ue(t,e,r)})),mi.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),mi.resolve()}getOverlaysForCollection(t,e,n){const r=Ds(),i=e.length+1,o=new ai(e.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const t=s.getNext().value,o=t.getKey();if(!e.isPrefixOf(o.path))break;o.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return mi.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Ei(((t,e)=>t-e));const o=this.overlays.getIterator();for(;o.hasNext();){const t=o.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Ds(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const s=Ds(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>s.set(t,e))),s.size()>=r)break;return mi.resolve(s)}ue(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Da(e,n));let i=this.es.get(e);void 0===i&&(i=js(),this.es.set(e,i)),this.es.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(){this.ns=new Ii(Wa.ss),this.rs=new Ii(Wa.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Wa(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new Wa(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new ai(new ii([])),n=new Wa(e,t),r=new Wa(e,t+1),i=[];return this.rs.forEachInRange([n,r],(t=>{this.cs(t),i.push(t.key)})),i}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new ai(new ii([])),n=new Wa(e,t),r=new Wa(e,t+1);let i=js();return this.rs.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Wa(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Wa{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return ai.comparator(t.key,e.key)||Zr(t._s,e._s)}static os(t,e){return Zr(t._s,e._s)||ai.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new Ii(Wa.ss)}checkEmpty(t){return mi.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ra(i,e,n,r);this.mutationQueue.push(o);for(const s of r)this.gs=this.gs.add(new Wa(s.key,i)),this.indexManager.addToCollectionParentIndex(t,s.key.path.popLast());return mi.resolve(o)}lookupMutationBatch(t,e){return mi.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ps(n),i=r<0?0:r;return mi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return mi.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return mi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Wa(e,0),r=new Wa(e,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],(t=>{const e=this.ys(t._s);i.push(e)})),mi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ii(Zr);return e.forEach((t=>{const e=new Wa(t,0),r=new Wa(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,r],(t=>{n=n.add(t._s)}))})),mi.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;ai.isDocumentKey(i)||(i=i.child(""));const o=new Wa(new ai(i),0);let s=new Ii(Zr);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(s=s.add(t._s)),!0)}),o),mi.resolve(this.Is(s))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){jr(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return mi.forEach(e.mutations,(r=>{const i=new Wa(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new Wa(e,0),r=this.gs.firstAfterOrEqual(n);return mi.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,mi.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t){this.Es=t,this.docs=new Ei(ai.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,o=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return mi.resolve(n?n.document.mutableCopy():oo.newInvalidDocument(e))}getEntries(t,e){let n=Os();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():oo.newInvalidDocument(t))})),mi.resolve(n)}getAllFromCollection(t,e,n){let r=Os();const i=new ai(e.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:t,value:{document:i}}=o.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||fi(li(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return mi.resolve(r)}getAllFromCollectionGroup(t,e,n,r){$r()}As(t,e){return mi.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Xa(this)}getSize(t){return mi.resolve(this.size)}}class Xa extends Ba{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(n)})),mi.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t){this.persistence=t,this.Rs=new ks((t=>co(t)),lo),this.lastRemoteSnapshotVersion=ni.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ga,this.targetCount=0,this.vs=Va.Pn()}forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),mi.resolve()}getLastRemoteSnapshotVersion(t){return mi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return mi.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),mi.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),mi.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Va(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,mi.resolve()}updateTargetData(t,e){return this.Dn(e),mi.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,mi.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Rs.forEach(((o,s)=>{s.sequenceNumber<=e&&null===n.get(s.targetId)&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,s.targetId)),r++)})),mi.waitFor(i).next((()=>r))}getTargetCount(t){return mi.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return mi.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),mi.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),mi.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),mi.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return mi.resolve(n)}containsKey(t,e){return mi.resolve(this.Ps.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new yi(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Ya(this),this.indexManager=new ja,this.remoteDocumentCache=function(t){return new Ja(t)}((t=>this.referenceDelegate.xs(t))),this.It=new La(e),this.Ns=new za(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ka,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Qa(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){Dr("MemoryPersistence","Starting transaction:",t);const r=new tc(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((t=>this.referenceDelegate.Os(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ms(t,e){return mi.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}}class tc extends pi{constructor(t){super(),this.currentSequenceNumber=t}}class ec{constructor(t){this.persistence=t,this.Fs=new Ga,this.$s=null}static Bs(t){return new ec(t)}get Ls(){if(this.$s)return this.$s;throw $r()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),mi.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),mi.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),mi.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return mi.forEach(this.Ls,(n=>{const r=ai.fromPath(n);return this.Us(t,r).next((t=>{t||e.removeEntry(r,ni.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.Us(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}Us(t,e){return mi.or([()=>mi.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nc{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=r}static Ci(t,e){let n=js(),r=js();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new nc(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.ki(t,e).next((i=>i||this.Oi(t,e,r,n))).next((n=>n||this.Mi(t,e)))}ki(t,e){if(xo(e))return mi.resolve(null);let n=Lo(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Mo(e,null,"F"),n=Lo(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=js(...r);return this.Ni.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const o=this.Fi(e,r);return this.$i(e,o,i,n.readTime)?this.ki(t,Mo(e,null,"F")):this.Bi(t,o,e,n)}))))})))))}Oi(t,e,n,r){return xo(e)||r.isEqual(ni.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next((i=>{const o=this.Fi(e,i);return this.$i(e,o,n,r)?this.Mi(t,e):(Nr()<=s["in"].DEBUG&&Dr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Uo(e)),this.Bi(t,o,e,ui(r,-1)))}))}Fi(t,e){let n=new Ii(Bo(t));return e.forEach(((e,r)=>{Fo(t,r)&&(n=n.add(r))})),n}$i(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(t,e){return Nr()<=s["in"].DEBUG&&Dr("QueryEngine","Using full collection scan to execute query:",Uo(e)),this.Ni.getDocumentsMatchingQuery(t,e,hi.min())}Bi(t,e,n,r){return this.Ni.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(t,e,n,r){this.persistence=t,this.Li=e,this.It=r,this.Ui=new Ei(Zr),this.qi=new ks((t=>co(t)),lo),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ha(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ui)))}}function oc(t,e,n,r){return new ic(t,e,n,r)}async function sc(t,e){const n=Ur(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],o=[];let s=js();for(const t of r){i.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}for(const t of e){o.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}return n.localDocuments.getDocuments(t,s).next((t=>({ji:t,removedBatchIds:i,addedBatchIds:o})))}))}))}function ac(t,e){const n=Ur(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,o=i.keys();let s=mi.resolve();return o.forEach((t=>{s=s.next((()=>r.getEntry(e,t))).next((e=>{const o=n.docVersions.get(t);jr(null!==o),e.version.compareTo(o)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),s.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=js();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function cc(t){const e=Ur(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function uc(t,e){const n=Ur(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const s=[];e.targetChanges.forEach(((o,a)=>{const c=i.get(a);if(!c)return;s.push(n.Cs.removeMatchingKeys(t,o.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,o.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(Ai.EMPTY_BYTE_STRING,ni.min()).withLastLimboFreeSnapshotVersion(ni.min()):o.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(o.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,o)&&s.push(n.Cs.updateTargetData(t,u))}));let a=Os(),c=js();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),s.push(lc(t,o,e.documentUpdates).next((t=>{a=t.Wi,c=t.zi}))),!r.isEqual(ni.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,r)));s.push(e)}return mi.waitFor(s).next((()=>o.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ui=i,t)))}function lc(t,e,n){let r=js(),i=js();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Os();return n.forEach(((n,o)=>{const s=t.get(n);o.isFoundDocument()!==s.isFoundDocument()&&(i=i.add(n)),o.isNoDocument()&&o.version.isEqual(ni.min())?(e.removeEntry(n,o.readTime),r=r.insert(n,o)):!s.isValidDocument()||o.version.compareTo(s.version)>0||0===o.version.compareTo(s.version)&&s.hasPendingWrites?(e.addEntry(o),r=r.insert(n,o)):Dr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",o.version)})),{Wi:r,zi:i}}))}function hc(t,e){const n=Ur(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function fc(t,e){const n=Ur(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Cs.getTargetData(t,e).next((i=>i?(r=i,mi.resolve(r)):n.Cs.allocateTargetId(t).next((i=>(r=new Pa(e,i,0,t.currentSequenceNumber),n.Cs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Ui.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}async function dc(t,e,n){const r=Ur(t),i=r.Ui.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!gi(t))throw t;Dr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function pc(t,e,n){const r=Ur(t);let i=ni.min(),o=js();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Ur(t),i=r.qi.get(n);return void 0!==i?mi.resolve(r.Ui.get(i)):r.Cs.getTargetData(e,n)}(r,t,Lo(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{o=t}))})).next((()=>r.Li.getDocumentsMatchingQuery(t,e,n?i:ni.min(),n?o:js()))).next((t=>(vc(r,Vo(e),t),{documents:t,Hi:o})))))}function vc(t,e,n){let r=t.Ki.get(e)||ni.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Ki.set(e,r)}class mc{constructor(){this.activeTargetIds=Fs()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class gc{constructor(){this.Lr=new mc,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,e,n){this.Ur[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new mc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{qr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Dr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){Dr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,e,n,r,i){const o=this.ho(t,e);Dr("RestConnection","Sending: ",o,n);const s={};return this.lo(s,r,i),this.fo(t,o,s,n).then((t=>(Dr("RestConnection","Received: ",t),t)),(e=>{throw Lr("RestConnection",`${t} failed with error: `,e,"url: ",o,"request:",n),e}))}_o(t,e,n,r,i,o){return this.ao(t,e,n,r,i)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+xr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=bc[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,r){return new Promise(((i,o)=>{const s=new kr;s.setWithCredentials(!0),s.listenOnce(Er.COMPLETE,(()=>{try{switch(s.getLastErrorCode()){case _r.NO_ERROR:const e=s.getResponseJson();Dr("Connection","XHR received:",JSON.stringify(e)),i(e);break;case _r.TIMEOUT:Dr("Connection",'RPC "'+t+'" timed out'),o(new Vr(Fr.DEADLINE_EXCEEDED,"Request time out"));break;case _r.HTTP_ERROR:const n=s.getStatus();if(Dr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",s.getResponseText()),n>0){const t=s.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Fr).indexOf(e)>=0?e:Fr.UNKNOWN}(t.status);o(new Vr(e,t.message))}else o(new Vr(Fr.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new Vr(Fr.UNAVAILABLE,"Connection failed."));break;default:$r()}}finally{Dr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);s.send(e,"POST",a,n,15)}))}wo(t,e,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=wr(),o=br(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new Ir({})),this.lo(s.initMessageHeaders,e,n),s.encodeInitMessageHeaders=!0;const a=r.join("");Dr("Connection","Creating WebChannel: "+a,s);const c=i.createWebChannel(a,s);let u=!1,l=!1;const h=new _c({Hr:t=>{l?Dr("Connection","Not sending because WebChannel is closed:",t):(u||(Dr("Connection","Opening WebChannel transport."),c.open(),u=!0),Dr("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(c,Cr.EventType.OPEN,(()=>{l||Dr("Connection","WebChannel transport opened.")})),f(c,Cr.EventType.CLOSE,(()=>{l||(l=!0,Dr("Connection","WebChannel transport closed"),h.io())})),f(c,Cr.EventType.ERROR,(t=>{l||(l=!0,Lr("Connection","WebChannel transport errored:",t),h.io(new Vr(Fr.UNAVAILABLE,"The operation could not be completed")))})),f(c,Cr.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];jr(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){Dr("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Ts[t];if(void 0!==e)return Cs(e)}(t),n=i.message;void 0===e&&(e=Fr.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),l=!0,h.io(new Vr(e,n)),c.close()}else Dr("Connection","WebChannel received:",n),h.ro(n)}})),f(o,Tr.STAT_EVENT,(t=>{t.stat===Sr.PROXY?Dr("Connection","Detected buffering proxy"):t.stat===Sr.NOPROXY&&Dr("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t){return new Ys(t,!0)}class Ic{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,e-n);r>0&&Dr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,e,n,r,i,o,s,a){this.Hs=t,this.vo=n,this.Vo=r,this.So=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Ic(t,e)}ko(){return 1===this.state||5===this.state||this.Oo()}Oo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&null===this.Co&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.Bo())))}Lo(t){this.Uo(),this.stream.send(t)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(t,e){this.Uo(),this.qo(),this.No.cancel(),this.Do++,4!==t?this.No.reset():e&&e.code===Fr.RESOURCE_EXHAUSTED?(Pr(e.toString()),Pr("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):e&&e.code===Fr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Ko(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}Ko(){}auth(){this.state=1;const t=this.Go(this.Do),e=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Do===e&&this.Qo(t,n)}),(e=>{t((()=>{const t=new Vr(Fr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.jo(t)}))}))}Qo(t,e){const n=this.Go(this.Do);this.stream=this.Wo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.Oo()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.jo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Mo(){this.state=5,this.No.Ro((async()=>{this.state=0,this.start()}))}jo(t){return Dr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Go(t){return e=>{this.Hs.enqueueAndForget((()=>this.Do===t?e():(Dr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class kc extends Cc{constructor(t,e,n,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,o),this.It=i}Wo(t,e){return this.So.wo("Listen",t,e)}onMessage(t){this.No.reset();const e=fa(this.It,t),n=function(t){if(!("targetChange"in t))return ni.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?ni.min():e.readTime?na(e.readTime):ni.min()}(t);return this.listener.zo(e,n)}Ho(t){const e={};e.database=ua(this.It),e.addTarget=function(t,e){let n;const r=e.target;return n=ho(r)?{documents:va(t,r)}:{query:ma(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ta(t,e.resumeToken):e.snapshotVersion.compareTo(ni.min())>0&&(n.readTime=Zs(t,e.snapshotVersion.toTimestamp())),n}(this.It,t);const n=ya(this.It,t);n&&(e.labels=n),this.Lo(e)}Jo(t){const e={};e.database=ua(this.It),e.removeTarget=t,this.Lo(e)}}class Ac extends Cc{constructor(t,e,n,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,o),this.It=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(t,e){return this.So.wo("Write",t,e)}onMessage(t){if(jr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Yo){this.No.reset();const e=pa(t.writeResults,t.commitTime),n=na(t.commitTime);return this.listener.tu(n,e)}return jr(!t.writeResults||0===t.writeResults.length),this.Yo=!0,this.listener.eu()}nu(){const t={};t.database=ua(this.It),this.Lo(t)}Zo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>da(this.It,t)))};this.Lo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.So=n,this.It=r,this.su=!1}iu(){if(this.su)throw new Vr(Fr.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.So.ao(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Fr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Vr(Fr.UNKNOWN,t.toString())}))}_o(t,e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.So._o(t,e,n,i,o,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Fr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Vr(Fr.UNKNOWN,t.toString())}))}terminate(){this.su=!0}}class xc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){0===this.ru&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve()))))}lu(t){"Online"===this.state?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.au("Offline")))}set(t){this.fu(),this.ru=0,"Online"===t&&(this.uu=!1),this.au(t)}au(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}hu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(Pr(e),this.uu=!1):Dr("OnlineStateTracker",e)}fu(){null!==this.ou&&(this.ou.cancel(),this.ou=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.qr((t=>{n.enqueueAndForget((async()=>{Fc(this)&&(Dr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Ur(t);e.wu.add(4),await Dc(e),e.yu.set("Unknown"),e.wu.delete(4),await Nc(e)}(this))}))})),this.yu=new xc(n,r)}}async function Nc(t){if(Fc(t))for(const e of t.mu)await e(!0)}async function Dc(t){for(const e of t.mu)await e(!1)}function Pc(t,e){const n=Ur(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Uc(n)?jc(n):iu(n).Oo()&&Mc(n,e))}function Lc(t,e){const n=Ur(t),r=iu(n);n._u.delete(e),r.Oo()&&$c(n,e),0===n._u.size&&(r.Oo()?r.$o():Fc(n)&&n.yu.set("Unknown"))}function Mc(t,e){t.pu.Mt(e.targetId),iu(t).Ho(e)}function $c(t,e){t.pu.Mt(e),iu(t).Jo(e)}function jc(t){t.pu=new Gs({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),iu(t).start(),t.yu.cu()}function Uc(t){return Fc(t)&&!iu(t).ko()&&t._u.size>0}function Fc(t){return 0===Ur(t).wu.size}function Vc(t){t.pu=void 0}async function Bc(t){t._u.forEach(((e,n)=>{Mc(t,e)}))}async function qc(t,e){Vc(t),Uc(t)?(t.yu.lu(e),jc(t)):t.yu.set("Unknown")}async function Hc(t,e,n){if(t.yu.set("Online"),e instanceof zs&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t._u.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t._u.delete(r),t.pu.removeTarget(r))}(t,e)}catch(n){Dr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await zc(t,n)}else if(e instanceof qs?t.pu.Gt(e):e instanceof Hs?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(ni.min()))try{const e=await cc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.pu.te(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t._u.get(r);i&&t._u.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t._u.get(e);if(!n)return;t._u.set(e,n.withResumeToken(Ai.EMPTY_BYTE_STRING,n.snapshotVersion)),$c(t,e);const r=new Pa(n.target,e,1,n.sequenceNumber);Mc(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Dr("RemoteStore","Failed to raise snapshot:",e),await zc(t,e)}}async function zc(t,e,n){if(!gi(e))throw e;t.wu.add(1),await Dc(t),t.yu.set("Offline"),n||(n=()=>cc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Dr("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await Nc(t)}))}function Kc(t,e){return e().catch((n=>zc(t,n,e)))}async function Gc(t){const e=Ur(t),n=ou(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;Wc(e);)try{const t=await hc(e.localStore,r);if(null===t){0===e.du.length&&n.$o();break}r=t.batchId,Qc(e,t)}catch(t){await zc(e,t)}Jc(e)&&Xc(e)}function Wc(t){return Fc(t)&&t.du.length<10}function Qc(t,e){t.du.push(e);const n=ou(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function Jc(t){return Fc(t)&&!ou(t).ko()&&t.du.length>0}function Xc(t){ou(t).start()}async function Yc(t){ou(t).nu()}async function Zc(t){const e=ou(t);for(const n of t.du)e.Zo(n.mutations)}async function tu(t,e,n){const r=t.du.shift(),i=Na.from(r,e,n);await Kc(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Gc(t)}async function eu(t,e){e&&ou(t).Xo&&await async function(t,e){if(n=e.code,Is(n)&&n!==Fr.ABORTED){const n=t.du.shift();ou(t).Fo(),await Kc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Gc(t)}var n}(t,e),Jc(t)&&Xc(t)}async function nu(t,e){const n=Ur(t);n.asyncQueue.verifyOperationInProgress(),Dr("RemoteStore","RemoteStore received new credentials");const r=Fc(n);n.wu.add(3),await Dc(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await Nc(n)}async function ru(t,e){const n=Ur(t);e?(n.wu.delete(2),await Nc(n)):e||(n.wu.add(2),await Dc(n),n.yu.set("Unknown"))}function iu(t){return t.Iu||(t.Iu=function(t,e,n){const r=Ur(t);return r.iu(),new kc(e,r.So,r.authCredentials,r.appCheckCredentials,r.It,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Yr:Bc.bind(null,t),Zr:qc.bind(null,t),zo:Hc.bind(null,t)}),t.mu.push((async e=>{e?(t.Iu.Fo(),Uc(t)?jc(t):t.yu.set("Unknown")):(await t.Iu.stop(),Vc(t))}))),t.Iu}function ou(t){return t.Tu||(t.Tu=function(t,e,n){const r=Ur(t);return r.iu(),new Ac(e,r.So,r.authCredentials,r.appCheckCredentials,r.It,n)}(t.datastore,t.asyncQueue,{Yr:Yc.bind(null,t),Zr:eu.bind(null,t),eu:Zc.bind(null,t),tu:tu.bind(null,t)}),t.mu.push((async e=>{e?(t.Tu.Fo(),await Gc(t)):(await t.Tu.stop(),t.du.length>0&&(Dr("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))}))),t.Tu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class su{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const o=Date.now()+n,s=new su(t,e,o,r,i);return s.start(n),s}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Vr(Fr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function au(t,e){if(Pr("AsyncQueue",`${e}: ${t}`),gi(t))return new Vr(Fr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||ai.comparator(e.key,n.key):(t,e)=>ai.comparator(t.key,e.key),this.keyedMap=Rs(),this.sortedSet=new Ei(this.comparator)}static emptySet(t){return new cu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof cu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new cu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this.Eu=new Ei(ai.comparator)}track(t){const e=t.doc.key,n=this.Eu.get(e);n?0!==t.type&&3===n.type?this.Eu=this.Eu.insert(e,t):3===t.type&&1!==n.type?this.Eu=this.Eu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Eu=this.Eu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Eu=this.Eu.remove(e):1===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):$r():this.Eu=this.Eu.insert(e,t)}Au(){const t=[];return this.Eu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class lu{constructor(t,e,n,r,i,o,s,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const o=[];return e.forEach((t=>{o.push({type:0,doc:t})})),new lu(t,e,cu.emptySet(e),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&$o(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(){this.Ru=void 0,this.listeners=[]}}class fu{constructor(){this.queries=new ks((t=>jo(t)),$o),this.onlineState="Unknown",this.bu=new Set}}async function du(t,e){const n=Ur(t),r=e.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new hu),i)try{o.Ru=await n.onListen(r)}catch(t){const n=au(t,`Initialization of query '${Uo(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,o),o.listeners.push(e),e.Pu(n.onlineState),o.Ru&&e.vu(o.Ru)&&gu(n)}async function pu(t,e){const n=Ur(t),r=e.query;let i=!1;const o=n.queries.get(r);if(o){const t=o.listeners.indexOf(e);t>=0&&(o.listeners.splice(t,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function vu(t,e){const n=Ur(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.vu(i)&&(r=!0);e.Ru=i}}r&&gu(n)}function mu(t,e,n){const r=Ur(t),i=r.queries.get(e);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(e)}function gu(t){t.bu.forEach((t=>{t.next()}))}class yu{constructor(t,e,n){this.query=t,this.Vu=e,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=n||{}}vu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new lu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Su?this.Cu(t)&&(this.Vu.next(t),e=!0):this.xu(t,this.onlineState)&&(this.Nu(t),e=!0),this.Du=t,e}onError(t){this.Vu.error(t)}Pu(t){this.onlineState=t;let e=!1;return this.Du&&!this.Su&&this.xu(this.Du,t)&&(this.Nu(this.Du),e=!0),e}xu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.ku||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Cu(t){if(t.docChanges.length>0)return!0;const e=this.Du&&this.Du.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Nu(t){t=lu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Su=!0,this.Vu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wu{constructor(t){this.key=t}}class bu{constructor(t){this.key=t}}class _u{constructor(t,e){this.query=t,this.Uu=e,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=js(),this.mutatedKeys=js(),this.Gu=Bo(t),this.Qu=new cu(this.Gu)}get ju(){return this.Uu}Wu(t,e){const n=e?e.zu:new uu,r=e?e.Qu:this.Qu;let i=e?e.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=Fo(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Hu(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.Gu(l,a)>0||c&&this.Gu(l,c)<0)&&(s=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(s=!0)),d&&(l?(o=o.add(l),i=f?i.add(t):i.delete(t)):(o=o.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;o.size>this.query.limit;){const t="F"===this.query.limitType?o.last():o.first();o=o.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Qu:o,zu:n,$i:s,mutatedKeys:i}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Au();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $r()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const o=e?this.Yu():[],s=0===this.Ku.size&&this.current?1:0,a=s!==this.qu;return this.qu=s,0!==i.length||a?{snapshot:new lu(this.query,t.Qu,r,i,t.mutatedKeys,0===s,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new uu,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.Uu=this.Uu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Uu=this.Uu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=js(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new bu(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new wu(n))})),e}tc(t){this.Uu=t.Hi,this.Ku=js();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return lu.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class Eu{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Tu{constructor(t){this.key=t,this.nc=!1}}class Su{constructor(t,e,n,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ks((t=>jo(t)),$o),this.rc=new Map,this.oc=new Set,this.uc=new Ei(ai.comparator),this.cc=new Map,this.ac=new Ga,this.hc={},this.lc=new Map,this.fc=Va.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function Iu(t,e){const n=Hu(t);let r,i;const o=n.ic.get(e);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.ec();else{const t=await fc(n.localStore,Lo(e));n.isPrimaryClient&&Pc(n.remoteStore,t);const o=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Cu(n,e,r,"current"===o,t.resumeToken)}return i}async function Cu(t,e,n,r,i){t._c=(e,n,r)=>async function(t,e,n,r){let i=e.view.Wu(n);i.$i&&(i=await pc(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,i))));const o=r&&r.targetChanges.get(e.targetId),s=e.view.applyChanges(i,t.isPrimaryClient,o);return ju(t,e.targetId,s.Xu),s.snapshot}(t,e,n,r);const o=await pc(t.localStore,e,!0),s=new _u(e,o.Hi),a=s.Wu(o.documents),c=Bs.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=s.applyChanges(a,t.isPrimaryClient,c);ju(t,n,u.Xu);const l=new Eu(e,n,s);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function ku(t,e){const n=Ur(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter((t=>!$o(t,e)))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await dc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Lc(n.remoteStore,r.targetId),Mu(n,r.targetId)})).catch(vi)):(Mu(n,r.targetId),await dc(n.localStore,r.targetId,!0))}async function Au(t,e,n){const r=zu(t);try{const t=await function(t,e){const n=Ur(t),r=ei.now(),i=e.reduce(((t,e)=>t.add(e.key)),js());let o,s;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Os(),c=js();return n.Gi.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{o=i;const s=[];for(const t of e){const e=ds(t,o.get(t.key).overlayedDocument);null!=e&&s.push(new ms(t.key,e,io(e.value.mapValue),as.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,s,e)})).next((e=>{s=e;const r=e.applyToLocalDocumentSet(o,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:s.batchId,changes:Ns(o)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.hc[t.currentUser.toKey()];r||(r=new Ei(Zr)),r=r.insert(e,n),t.hc[t.currentUser.toKey()]=r}(r,t.batchId,n),await Vu(r,t.changes),await Gc(r.remoteStore)}catch(t){const e=au(t,"Failed to persist write");n.reject(e)}}async function Ou(t,e){const n=Ur(t);try{const t=await uc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.cc.get(e);r&&(jr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.nc=!0:t.modifiedDocuments.size>0?jr(r.nc):t.removedDocuments.size>0&&(jr(r.nc),r.nc=!1))})),await Vu(n,t,e)}catch(t){await vi(t)}}function xu(t,e,n){const r=Ur(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ic.forEach(((n,r)=>{const i=r.view.Pu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Ur(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Pu(e)&&(r=!0)})),r&&gu(n)}(r.eventManager,e),t.length&&r.sc.zo(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ru(t,e,n){const r=Ur(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),o=i&&i.key;if(o){let t=new Ei(ai.comparator);t=t.insert(o,oo.newNoDocument(o,ni.min()));const n=js().add(o),i=new Vs(ni.min(),new Map,new Ii(Zr),t,n);await Ou(r,i),r.uc=r.uc.remove(o),r.cc.delete(e),Fu(r)}else await dc(r.localStore,e,!1).then((()=>Mu(r,e,n))).catch(vi)}async function Nu(t,e){const n=Ur(t),r=e.batch.batchId;try{const t=await ac(n.localStore,e);Lu(n,r,null),Pu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Vu(n,t)}catch(t){await vi(t)}}async function Du(t,e,n){const r=Ur(t);try{const t=await function(t,e){const n=Ur(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(jr(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Lu(r,e,n),Pu(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Vu(r,t)}catch(n){await vi(n)}}function Pu(t,e){(t.lc.get(e)||[]).forEach((t=>{t.resolve()})),t.lc.delete(e)}function Lu(t,e,n){const r=Ur(t);let i=r.hc[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Mu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach((e=>{t.ac.containsKey(e)||$u(t,e)}))}function $u(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(Lc(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Fu(t))}function ju(t,e,n){for(const r of n)r instanceof wu?(t.ac.addReference(r.key,e),Uu(t,r)):r instanceof bu?(Dr("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||$u(t,r.key)):$r()}function Uu(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(Dr("SyncEngine","New document in limbo: "+n),t.oc.add(r),Fu(t))}function Fu(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new ai(ii.fromString(e)),r=t.fc.next();t.cc.set(r,new Tu(n)),t.uc=t.uc.insert(n,r),Pc(t.remoteStore,new Pa(Lo(Oo(n.path)),r,2,yi.at))}}async function Vu(t,e,n){const r=Ur(t),i=[],o=[],s=[];r.ic.isEmpty()||(r.ic.forEach(((t,a)=>{s.push(r._c(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=nc.Ci(a.targetId,t);o.push(e)}})))})),await Promise.all(s),r.sc.zo(i),await async function(t,e){const n=Ur(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>mi.forEach(e,(e=>mi.forEach(e.Si,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>mi.forEach(e.Di,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!gi(t))throw t;Dr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ui.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ui=n.Ui.insert(t,i)}}}(r.localStore,o))}async function Bu(t,e){const n=Ur(t);if(!n.currentUser.isEqual(e)){Dr("SyncEngine","User change. New user:",e.toKey());const t=await sc(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach((t=>{t.forEach((t=>{t.reject(new Vr(Fr.CANCELLED,e))}))})),t.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Vu(n,t.ji)}}function qu(t,e){const n=Ur(t),r=n.cc.get(e);if(r&&r.nc)return js().add(r.key);{let t=js();const r=n.rc.get(e);if(!r)return t;for(const e of r){const r=n.ic.get(e);t=t.unionWith(r.view.ju)}return t}}function Hu(t){const e=Ur(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ou.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ru.bind(null,e),e.sc.zo=vu.bind(null,e.eventManager),e.sc.wc=mu.bind(null,e.eventManager),e}function zu(t){const e=Ur(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Nu.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Du.bind(null,e),e}class Ku{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=Sc(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return oc(this.persistence,new rc,t.initialUser,this.It)}yc(t){return new Za(ec.Bs,this.It)}gc(t){return new gc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Gu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>xu(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bu.bind(null,this.syncEngine),await ru(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new fu}createDatastore(t){const e=Sc(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Ec(r));var r;return function(t,e,n,r){return new Oc(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>xu(this.syncEngine,t,0),o=wc.C()?new wc:new yc,new Rc(e,n,r,i,o);var e,n,r,i,o}createSyncEngine(t,e){return function(t,e,n,r,i,o,s){const a=new Su(t,e,n,r,i,o);return s&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Ur(t);Dr("RemoteStore","RemoteStore shutting down."),e.wu.add(5),await Dc(e),e.gu.shutdown(),e.yu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t,e,n){if(!n)throw new Vr(Fr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Qu(t,e,n,r){if(!0===e&&!0===r)throw new Vr(Fr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ju(t){if(!ai.isDocumentKey(t))throw new Vr(Fr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xu(t){if(ai.isDocumentKey(t))throw new Vr(Fr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Yu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":$r()}function Zu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Vr(Fr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yu(t);throw new Vr(Fr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tl=new Map;class el{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Vr(Fr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Vr(Fr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Qu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new el({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Vr(Fr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Vr(Fr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new el(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Hr;switch(t.type){case"gapi":const e=t.client;return new Wr(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Vr(Fr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=tl.get(t);e&&(Dr("ComponentProvider","Removing Datastore"),tl.delete(t),e.terminate())}(this),Promise.resolve()}}function rl(t,e,n,r={}){var i;const o=(t=Zu(t,nl))._getSettings();if("firestore.googleapis.com"!==o.host&&o.host!==e&&Lr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},o),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Or.MOCK_USER;else{e=(0,a.Sg)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new Vr(Fr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Or(o)}t._authCredentials=new zr(new qr(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new il(this.firestore,t,this._key)}}class ol{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ol(this.firestore,t,this._query)}}class sl extends ol{constructor(t,e,n){super(t,e,Oo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new il(this.firestore,null,new ai(t))}withConverter(t){return new sl(this.firestore,t,this._path)}}function al(t,e,...n){if(t=(0,a.m9)(t),Wu("collection","path",e),t instanceof nl){const r=ii.fromString(e,...n);return Xu(r),new sl(t,null,r)}{if(!(t instanceof il||t instanceof sl))throw new Vr(Fr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ii.fromString(e,...n));return Xu(r),new sl(t.firestore,null,r)}}function cl(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=Yr.R()),Wu("doc","path",e),t instanceof nl){const r=ii.fromString(e,...n);return Ju(r),new il(t,null,new ai(r))}{if(!(t instanceof il||t instanceof sl))throw new Vr(Fr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ii.fromString(e,...n));return Ju(r),new il(t.firestore,t instanceof sl?t.converter:null,new ai(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ul{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):Pr("Uncaught Error in snapshot listener:",t)}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ll{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Or.UNAUTHENTICATED,this.clientId=Yr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Dr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Dr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Vr(Fr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=au(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function hl(t,e){t.asyncQueue.verifyOperationInProgress(),Dr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await sc(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function fl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dl(t);Dr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>nu(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>nu(e.remoteStore,n))),t.onlineComponents=e}async function dl(t){return t.offlineComponents||(Dr("FirestoreClient","Using default OfflineComponentProvider"),await hl(t,new Ku)),t.offlineComponents}async function pl(t){return t.onlineComponents||(Dr("FirestoreClient","Using default OnlineComponentProvider"),await fl(t,new Gu)),t.onlineComponents}function vl(t){return pl(t).then((t=>t.syncEngine))}async function ml(t){const e=await pl(t),n=e.eventManager;return n.onListen=Iu.bind(null,e.syncEngine),n.onUnlisten=ku.bind(null,e.syncEngine),n}function gl(t,e,n={}){const r=new Br;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const o=new ul({next:o=>{e.enqueueAndForget((()=>pu(t,s)));const a=o.docs.has(n);!a&&o.fromCache?i.reject(new Vr(Fr.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&o.fromCache&&r&&"server"===r.source?i.reject(new Vr(Fr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:t=>i.reject(t)}),s=new yu(Oo(n.path),o,{includeMetadataChanges:!0,ku:!0});return du(t,s)}(await ml(t),t.asyncQueue,e,n,r))),r.promise}function yl(t,e,n={}){const r=new Br;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const o=new ul({next:n=>{e.enqueueAndForget((()=>pu(t,s))),n.fromCache&&"server"===r.source?i.reject(new Vr(Fr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),s=new yu(n,o,{includeMetadataChanges:!0,ku:!0});return du(t,s)}(await ml(t),t.asyncQueue,e,n,r))),r.promise}class wl{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new Ic(this,"async_queue_retry"),this.Wc=()=>{const t=Tc();t&&Dr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.No.Po()};const t=Tc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const e=Tc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise((()=>{}));const e=new Br;return this.Hc((()=>this.Uc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(E){if(!gi(E))throw E;Dr("AsyncQueue","Operation failed with retryable error: "+E)}this.Lc.length>0&&this.No.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Pr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const r=su.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.qc.push(r),r}zc(){this.Kc&&$r()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.qc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.qc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.qc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.qc.indexOf(t);this.qc.splice(e,1)}}class bl extends nl{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new wl,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Tl(this),this._firestoreClient.terminate()}}function _l(t,e){const n="object"==typeof t?t:(0,i.Mq)(),r="string"==typeof t?t:e||"(default)",o=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const t=(0,a.P0)("firestore");t&&rl(o,...t)}return o}function El(t){return t._firestoreClient||Tl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Tl(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Mi(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ll(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Sl(Ai.fromBase64String(t))}catch(t){throw new Vr(Fr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Sl(Ai.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Vr(Fr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new si(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cl{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Vr(Fr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Vr(Fr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Zr(this._lat,t._lat)||Zr(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=/^__.*__$/;class Ol{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ms(t,this.data,this.fieldMask,e,this.fieldTransforms):new vs(t,this.data,e,this.fieldTransforms)}}function xl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $r()}}class Rl{constructor(t,e,n,r,i,o){this.settings=t,this.databaseId=e,this.It=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new Rl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.ua(t),r}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.na(),r}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return ql(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(xl(this.sa)&&Al.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class Nl{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.It=n||Sc(t)}da(t,e,n,r=!1){return new Rl({sa:t,methodName:e,fa:n,path:si.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Dl(t){const e=t._freezeSettings(),n=Sc(t._databaseId);return new Nl(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Pl(t,e,n,r,i,o={}){const s=t.da(o.merge||o.mergeFields?2:0,e,n,i);Ul("Data must be an object, but it was:",s,r);const a=$l(r,s);let c,u;if(o.merge)c=new ki(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const t=[];for(const r of o.mergeFields){const i=Fl(e,r,n);if(!s.contains(i))throw new Vr(Fr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Hl(t,i)||t.push(i)}c=new ki(t),u=s.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=s.fieldTransforms;return new Ol(new ro(a),c,u)}function Ll(t,e,n,r=!1){return Ml(n,t.da(r?4:3,e))}function Ml(t,e){if(jl(t=(0,a.m9)(t)))return Ul("Unsupported field value:",e,t),$l(t,e);if(t instanceof Cl)return function(t,e){if(!xl(e.sa))throw e.ha(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ha(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Ml(i,e.aa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ko(e.It,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=ei.fromDate(t);return{timestampValue:Zs(e.It,n)}}if(t instanceof ei){const n=new ei(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Zs(e.It,n)}}if(t instanceof kl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Sl)return{bytesValue:ta(e.It,t._byteString)};if(t instanceof il){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ra(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha(`Unsupported field value: ${Yu(t)}`)}(t,e)}function $l(t,e){const n={};return _i(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bi(t,((t,r)=>{const i=Ml(r,e.ra(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function jl(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ei||t instanceof kl||t instanceof Sl||t instanceof il||t instanceof Cl)}function Ul(t,e,n){if(!jl(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Yu(n);throw"an object"===r?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function Fl(t,e,n){if((e=(0,a.m9)(e))instanceof Il)return e._internalPath;if("string"==typeof e)return Bl(t,e);throw ql("Field path arguments must be of type string or ",t,!1,void 0,n)}const Vl=new RegExp("[~\\*/\\[\\]]");function Bl(t,e,n){if(e.search(Vl)>=0)throw ql(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Il(...e.split("."))._internalPath}catch(r){throw ql(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ql(t,e,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=` in field ${r}`),s&&(c+=` in document ${i}`),c+=")"),new Vr(Fr.INVALID_ARGUMENT,a+t+c)}function Hl(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new il(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Kl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Gl("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Kl extends zl{data(){return super.data()}}function Gl(t,e){return"string"==typeof e?Bl(t,e):e instanceof Il?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Vr(Fr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ql{}function Jl(t,...e){for(const n of e)t=n._apply(t);return t}class Xl extends Ql{constructor(t,e,n){super(),this.ma=t,this.ga=e,this.ya=n,this.type="where"}_apply(t){const e=Dl(t.firestore),n=function(t,e,n,r,i,o,s){let a;if(i.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new Vr(Fr.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on documentId().`);if("in"===o||"not-in"===o){th(s,o);const e=[];for(const n of s)e.push(Zl(r,t,n));a={arrayValue:{values:e}}}else a=Zl(r,t,s)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||th(s,o),a=Ll(n,e,s,"in"===o||"not-in"===o);const c=fo.create(i,o,a);return function(t,e){if(e.dt()){const n=No(t);if(null!==n&&!n.isEqual(e.field))throw new Vr(Fr.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=Ro(t);null!==r&&eh(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new Vr(Fr.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Vr(Fr.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.ma,this.ga,this.ya);return new ol(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function Yl(t,e,n){const r=e,i=Gl("where",t);return new Xl(i,r,n)}function Zl(t,e,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new Vr(Fr.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Do(e)&&-1!==n.indexOf("/"))throw new Vr(Fr.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ii.fromString(n));if(!ai.isDocumentKey(r))throw new Vr(Fr.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Qi(t,new ai(r))}if(n instanceof il)return Qi(t,n._key);throw new Vr(Fr.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yu(n)}.`)}function th(t,e){if(!Array.isArray(t)||0===t.length)throw new Vr(Fr.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new Vr(Fr.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function eh(t,e,n){if(!n.isEqual(e))throw new Vr(Fr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{convertValue(t,e="none"){switch(Bi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ri(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ni(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw $r()}}convertObject(t,e){const n={};return bi(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new kl(Ri(t.latitude),Ri(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Pi(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Li(t));default:return null}}convertTimestamp(t){const e=xi(t);return new ei(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ii.fromString(t);jr(ka(n));const r=new $i(n.get(1),n.get(3)),i=new ai(n.popFirst(5));return r.isEqual(e)||Pr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ih{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class oh extends zl{constructor(t,e,n,r,i,o){super(t,e,n,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new sh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Gl("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class sh extends oh{data(t={}){return super.data(t)}}class ah{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new ih(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new sh(this._firestore,this._userDataWriter,n.key,n,new ih(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Vr(Fr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new sh(t._firestore,t._userDataWriter,n.doc.key,n.doc,new ih(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new sh(t._firestore,t._userDataWriter,e.doc.key,e.doc,new ih(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,o=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),o=n.indexOf(e.doc.key)),{type:ch(e.type),doc:r,oldIndex:i,newIndex:o}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function ch(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $r()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function uh(t){t=Zu(t,il);const e=Zu(t.firestore,bl);return gl(El(e),t._key).then((n=>vh(e,t,n)))}class lh extends nh{constructor(t){super(),this.firestore=t}convertBytes(t){return new Sl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new il(this.firestore,null,e)}}function hh(t){t=Zu(t,ol);const e=Zu(t.firestore,bl),n=El(e),r=new lh(e);return Wl(t._query),yl(n,t._query).then((n=>new ah(e,r,t,n)))}function fh(t,e,n){t=Zu(t,il);const r=Zu(t.firestore,bl),i=rh(t.converter,e,n);return ph(r,[Pl(Dl(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,as.none())])}function dh(t,e){const n=Zu(t.firestore,bl),r=cl(t),i=rh(t.converter,e);return ph(n,[Pl(Dl(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,as.exists(!1))]).then((()=>r))}function ph(t,e){return function(t,e){const n=new Br;return t.asyncQueue.enqueueAndForget((async()=>Au(await vl(t),e,n))),n.promise}(El(t),e)}function vh(t,e,n){const r=n.docs.get(e._key),i=new lh(t);return new oh(t,i,e._key,r,new ih(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){xr=t}(i.Jn),(0,i.Xd)(new o.wA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),o=new bl(new Kr(t.getProvider("auth-internal")),new Jr(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Vr(Fr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $i(t.options.projectId,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i,n),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Ar,"3.7.1",t),(0,i.KN)(Ar,"3.7.1","esm2017")}()},6237:function(t){t.exports="object"==typeof self?self.FormData:window.FormData},2631:function(t,e,n){"use strict";n.d(e,{ZP:function(){return Ee}});n(7658),n(541);function r(t,e){for(var n in e)t[n]=e[n];return t}var i=/[!'()*]/g,o=function(t){return"%"+t.charCodeAt(0).toString(16)},s=/%2C/g,a=function(t){return encodeURIComponent(t).replace(i,o).replace(s,",")};function c(t){try{return decodeURIComponent(t)}catch(e){0}return t}function u(t,e,n){void 0===e&&(e={});var r,i=n||h;try{r=i(t||"")}catch(a){r={}}for(var o in e){var s=e[o];r[o]=Array.isArray(s)?s.map(l):l(s)}return r}var l=function(t){return null==t||"object"===typeof t?t:String(t)};function h(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]})),e):e}function f(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return a(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(a(e)):r.push(a(e)+"="+a(t)))})),r.join("&")}return a(e)+"="+a(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var d=/\/?$/;function p(t,e,n,r){var i=r&&r.options.stringifyQuery,o=e.query||{};try{o=v(o)}catch(a){}var s={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:o,params:e.params||{},fullPath:y(e,i),matched:t?g(t):[]};return n&&(s.redirectedFrom=y(n,i)),Object.freeze(s)}function v(t){if(Array.isArray(t))return t.map(v);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=v(t[n]);return e}return t}var m=p(null,{path:"/"});function g(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function y(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;void 0===i&&(i="");var o=e||f;return(n||"/")+o(r)+i}function w(t,e,n){return e===m?t===e:!!e&&(t.path&&e.path?t.path.replace(d,"")===e.path.replace(d,"")&&(n||t.hash===e.hash&&b(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&b(t.query,e.query)&&b(t.params,e.params))))}function b(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,i){var o=t[n],s=r[i];if(s!==n)return!1;var a=e[n];return null==o||null==a?o===a:"object"===typeof o&&"object"===typeof a?b(o,a):String(o)===String(a)}))}function _(t,e){return 0===t.path.replace(d,"/").indexOf(e.path.replace(d,"/"))&&(!e.hash||t.hash===e.hash)&&E(t.query,e.query)}function E(t,e){for(var n in e)if(!(n in t))return!1;return!0}function T(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var s=0;s<o.length;s++)i._isBeingDestroyed||o[s](i)}}}}var S={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,i=e.children,o=e.parent,s=e.data;s.routerView=!0;var a=o.$createElement,c=n.name,u=o.$route,l=o._routerViewCache||(o._routerViewCache={}),h=0,f=!1;while(o&&o._routerRoot!==o){var d=o.$vnode?o.$vnode.data:{};d.routerView&&h++,d.keepAlive&&o._directInactive&&o._inactive&&(f=!0),o=o.$parent}if(s.routerViewDepth=h,f){var p=l[c],v=p&&p.component;return v?(p.configProps&&I(v,s,p.route,p.configProps),a(v,s,i)):a()}var m=u.matched[h],g=m&&m.components[c];if(!m||!g)return l[c]=null,a();l[c]={component:g},s.registerRouteInstance=function(t,e){var n=m.instances[c];(e&&n!==t||!e&&n===t)&&(m.instances[c]=e)},(s.hook||(s.hook={})).prepatch=function(t,e){m.instances[c]=e.componentInstance},s.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[c]&&(m.instances[c]=t.componentInstance),T(u)};var y=m.props&&m.props[c];return y&&(r(l[c],{route:u,configProps:y}),I(g,s,u,y)),a(g,s,i)}};function I(t,e,n,i){var o=e.props=C(n,i);if(o){o=e.props=r({},o);var s=e.attrs=e.attrs||{};for(var a in o)t.props&&a in t.props||(s[a]=o[a],delete o[a])}}function C(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function k(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var o=t.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function A(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}function O(t){return t.replace(/\/(?:\s*\/)+/g,"/")}var x=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},R=J,N=$,D=j,P=V,L=Q,M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function $(t,e){var n,r=[],i=0,o=0,s="",a=e&&e.delimiter||"/";while(null!=(n=M.exec(t))){var c=n[0],u=n[1],l=n.index;if(s+=t.slice(o,l),o=l+c.length,u)s+=u[1];else{var h=t[o],f=n[2],d=n[3],p=n[4],v=n[5],m=n[6],g=n[7];s&&(r.push(s),s="");var y=null!=f&&null!=h&&h!==f,w="+"===m||"*"===m,b="?"===m||"*"===m,_=n[2]||a,E=p||v;r.push({name:d||i++,prefix:f||"",delimiter:_,optional:b,repeat:w,partial:y,asterisk:!!g,pattern:E?q(E):g?".*":"[^"+B(_)+"]+?"})}}return o<t.length&&(s+=t.substr(o)),s&&r.push(s),r}function j(t,e){return V($(t,e),e)}function U(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function F(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function V(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",z(e)));return function(e,r){for(var i="",o=e||{},s=r||{},a=s.pretty?U:encodeURIComponent,c=0;c<t.length;c++){var u=t[c];if("string"!==typeof u){var l,h=o[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(x(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var f=0;f<h.length;f++){if(l=a(h[f]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===f?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?F(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function B(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function q(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function H(t,e){return t.keys=e,t}function z(t){return t&&t.sensitive?"":"i"}function K(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return H(t,e)}function G(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(J(t[i],e,n).source);var o=new RegExp("(?:"+r.join("|")+")",z(n));return H(o,e)}function W(t,e,n){return Q($(t,n),e,n)}function Q(t,e,n){x(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,o="",s=0;s<t.length;s++){var a=t[s];if("string"===typeof a)o+=B(a);else{var c=B(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}var l=B(n.delimiter||"/"),h=o.slice(-l.length)===l;return r||(o=(h?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=i?"$":r&&h?"":"(?="+l+"|$)",H(new RegExp("^"+o,z(n)),e)}function J(t,e,n){return x(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?K(t,e):x(t)?G(t,e,n):W(t,e,n)}R.parse=N,R.compile=D,R.tokensToFunction=P,R.tokensToRegExp=L;var X=Object.create(null);function Y(t,e,n){e=e||{};try{var r=X[t]||(X[t]=R.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(i){return""}finally{delete e[0]}}function Z(t,e,n,i){var o="string"===typeof t?{path:t}:t;if(o._normalized)return o;if(o.name){o=r({},t);var s=o.params;return s&&"object"===typeof s&&(o.params=r({},s)),o}if(!o.path&&o.params&&e){o=r({},o),o._normalized=!0;var a=r(r({},e.params),o.params);if(e.name)o.name=e.name,o.params=a;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;o.path=Y(c,a,"path "+e.path)}else 0;return o}var l=A(o.path||""),h=e&&e.path||"/",f=l.path?k(l.path,h,n||o.append):h,d=u(l.query,o.query,i&&i.options.parseQuery),p=o.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:f,query:d,hash:p}}var tt,et=[String,Object],nt=[String,Array],rt=function(){},it={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:nt,default:"click"}},render:function(t){var e=this,n=this.$router,i=this.$route,o=n.resolve(this.to,i,this.append),s=o.location,a=o.route,c=o.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,f=null==l?"router-link-active":l,d=null==h?"router-link-exact-active":h,v=null==this.activeClass?f:this.activeClass,m=null==this.exactActiveClass?d:this.exactActiveClass,g=a.redirectedFrom?p(null,Z(a.redirectedFrom),null,n):a;u[m]=w(i,g,this.exactPath),u[v]=this.exact||this.exactPath?u[m]:_(i,g);var y=u[m]?this.ariaCurrentValue:null,b=function(t){ot(t)&&(e.replace?n.replace(s,rt):n.push(s,rt))},E={click:ot};Array.isArray(this.event)?this.event.forEach((function(t){E[t]=b})):E[this.event]=b;var T={class:u},S=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:b,isActive:u[v],isExactActive:u[m]});if(S){if(1===S.length)return S[0];if(S.length>1||!S.length)return 0===S.length?t():t("span",{},S)}if("a"===this.tag)T.on=E,T.attrs={href:c,"aria-current":y};else{var I=st(this.$slots.default);if(I){I.isStatic=!1;var C=I.data=r({},I.data);for(var k in C.on=C.on||{},C.on){var A=C.on[k];k in E&&(C.on[k]=Array.isArray(A)?A:[A])}for(var O in E)O in C.on?C.on[O].push(E[O]):C.on[O]=b;var x=I.data.attrs=r({},I.data.attrs);x.href=c,x["aria-current"]=y}else T.on=E}return t(this.tag,T,this.$slots.default)}};function ot(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function st(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=st(e.children)))return e}}function at(t){if(!at.installed||tt!==t){at.installed=!0,tt=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",S),t.component("RouterLink",it);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ct="undefined"!==typeof window;function ut(t,e,n,r,i){var o=e||[],s=n||Object.create(null),a=r||Object.create(null);t.forEach((function(t){lt(o,s,a,t,i)}));for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:s,nameMap:a}}function lt(t,e,n,r,i,o){var s=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=ft(s,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:ht(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:o,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=o?O(o+"/"+r.path):void 0;lt(t,e,n,r,l,i)})),e[l.path]||(t.push(l.path),e[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],f=0;f<h.length;++f){var d=h[f];0;var p={path:d,children:r.children};lt(t,e,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function ht(t,e){var n=R(t,[],e);return n}function ft(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:O(e.path+"/"+t)}function dt(t,e){var n=ut(t),r=n.pathList,i=n.pathMap,o=n.nameMap;function s(t){ut(t,r,i,o)}function a(t,e){var n="object"!==typeof t?o[t]:void 0;ut([e||t],r,i,o,n),n&&n.alias.length&&ut(n.alias.map((function(t){return{path:t,children:[e]}})),r,i,o,n)}function c(){return r.map((function(t){return i[t]}))}function u(t,n,s){var a=Z(t,n,!1,e),c=a.name;if(c){var u=o[c];if(!u)return f(null,a);var l=u.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=Y(u.path,a.params,'named route "'+c+'"'),f(u,a,s)}if(a.path){a.params={};for(var d=0;d<r.length;d++){var p=r[d],v=i[p];if(pt(v.regex,a.path,a.params))return f(v,a,s)}}return f(null,a)}function l(t,n){var r=t.redirect,i="function"===typeof r?r(p(t,n,null,e)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return f(null,n);var s=i,a=s.name,c=s.path,l=n.query,h=n.hash,d=n.params;if(l=s.hasOwnProperty("query")?s.query:l,h=s.hasOwnProperty("hash")?s.hash:h,d=s.hasOwnProperty("params")?s.params:d,a){o[a];return u({_normalized:!0,name:a,query:l,hash:h,params:d},void 0,n)}if(c){var v=vt(c,t),m=Y(v,d,'redirect route with path "'+v+'"');return u({_normalized:!0,path:m,query:l,hash:h},void 0,n)}return f(null,n)}function h(t,e,n){var r=Y(n,e.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var o=i.matched,s=o[o.length-1];return e.params=i.params,f(s,e)}return f(null,e)}function f(t,n,r){return t&&t.redirect?l(t,r||n):t&&t.matchAs?h(t,n,t.matchAs):p(t,n,r,e)}return{match:u,addRoute:a,getRoutes:c,addRoutes:s}}function pt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var s=t.keys[i-1];s&&(n[s.name||"pathMatch"]="string"===typeof r[i]?c(r[i]):r[i])}return!0}function vt(t,e){return k(t,e.parent?e.parent.path:"/",!0)}var mt=ct&&window.performance&&window.performance.now?window.performance:Date;function gt(){return mt.now().toFixed(3)}var yt=gt();function wt(){return yt}function bt(t){return yt=t}var _t=Object.create(null);function Et(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=r({},window.history.state);return n.key=wt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",It),function(){window.removeEventListener("popstate",It)}}function Tt(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick((function(){var o=Ct(),s=i.call(t,e,n,r?o:null);s&&("function"===typeof s.then?s.then((function(t){Dt(t,o)})).catch((function(t){0})):Dt(s,o))}))}}function St(){var t=wt();t&&(_t[t]={x:window.pageXOffset,y:window.pageYOffset})}function It(t){St(),t.state&&t.state.key&&bt(t.state.key)}function Ct(){var t=wt();if(t)return _t[t]}function kt(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-r.left-e.x,y:i.top-r.top-e.y}}function At(t){return Rt(t.x)||Rt(t.y)}function Ot(t){return{x:Rt(t.x)?t.x:window.pageXOffset,y:Rt(t.y)?t.y:window.pageYOffset}}function xt(t){return{x:Rt(t.x)?t.x:0,y:Rt(t.y)?t.y:0}}function Rt(t){return"number"===typeof t}var Nt=/^#\d/;function Dt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=Nt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var i=t.offset&&"object"===typeof t.offset?t.offset:{};i=xt(i),e=kt(r,i)}else At(t)&&(e=Ot(t))}else n&&At(t)&&(e=Ot(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Pt=ct&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Lt(t,e){St();var n=window.history;try{if(e){var i=r({},n.state);i.key=wt(),n.replaceState(i,"",t)}else n.pushState({key:bt(gt())},"",t)}catch(o){window.location[e?"replace":"assign"](t)}}function Mt(t){Lt(t,!0)}var $t={redirected:2,aborted:4,cancelled:8,duplicated:16};function jt(t,e){return Bt(t,e,$t.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Ht(e)+'" via a navigation guard.')}function Ut(t,e){var n=Bt(t,e,$t.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Ft(t,e){return Bt(t,e,$t.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Vt(t,e){return Bt(t,e,$t.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Bt(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var qt=["params","query","hash"];function Ht(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return qt.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function zt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Kt(t,e){return zt(t)&&t._isRouter&&(null==e||t.type===e)}function Gt(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],(function(){r(i+1)})):r(i+1)};r(0)}function Wt(t){return function(e,n,r){var i=!1,o=0,s=null;Qt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){i=!0,o++;var c,u=Zt((function(e){Yt(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),n.components[a]=e,o--,o<=0&&r()})),l=Zt((function(t){var e="Failed to resolve async component "+a+": "+t;s||(s=zt(t)?t:new Error(e),r(s))}));try{c=t(u,l)}catch(f){l(f)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Qt(t,e){return Jt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Jt(t){return Array.prototype.concat.apply([],t)}var Xt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Yt(t){return t.__esModule||Xt&&"Module"===t[Symbol.toStringTag]}function Zt(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var te=function(t,e){this.router=t,this.base=ee(e),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ee(t){if(!t)if(ct){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ne(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function re(t,e,n,r){var i=Qt(t,(function(t,r,i,o){var s=ie(t,e);if(s)return Array.isArray(s)?s.map((function(t){return n(t,r,i,o)})):n(s,r,i,o)}));return Jt(r?i.reverse():i)}function ie(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function oe(t){return re(t,"beforeRouteLeave",ae,!0)}function se(t){return re(t,"beforeRouteUpdate",ae)}function ae(t,e){if(e)return function(){return t.apply(e,arguments)}}function ce(t){return re(t,"beforeRouteEnter",(function(t,e,n,r){return ue(t,n,r)}))}function ue(t,e,n){return function(r,i,o){return t(r,i,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),o(t)}))}}te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,n){var r,i=this;try{r=this.router.match(t,this.current)}catch(s){throw this.errorCbs.forEach((function(t){t(s)})),s}var o=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),e&&e(r),i.ensureURL(),i.router.afterHooks.forEach((function(t){t&&t(r,o)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(t){t(r)})))}),(function(t){n&&n(t),t&&!i.ready&&(Kt(t,$t.redirected)&&o===m||(i.ready=!0,i.readyErrorCbs.forEach((function(e){e(t)}))))}))},te.prototype.confirmTransition=function(t,e,n){var r=this,i=this.current;this.pending=t;var o=function(t){!Kt(t)&&zt(t)&&(r.errorCbs.length?r.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},s=t.matched.length-1,a=i.matched.length-1;if(w(t,i)&&s===a&&t.matched[s]===i.matched[a])return this.ensureURL(),t.hash&&Tt(this.router,i,t,!1),o(Ut(i,t));var c=ne(this.current.matched,t.matched),u=c.updated,l=c.deactivated,h=c.activated,f=[].concat(oe(l),this.router.beforeHooks,se(u),h.map((function(t){return t.beforeEnter})),Wt(h)),d=function(e,n){if(r.pending!==t)return o(Ft(i,t));try{e(t,i,(function(e){!1===e?(r.ensureURL(!0),o(Vt(i,t))):zt(e)?(r.ensureURL(!0),o(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(o(jt(i,t)),"object"===typeof e&&e.replace?r.replace(e):r.push(e)):n(e)}))}catch(s){o(s)}};Gt(f,d,(function(){var n=ce(h),s=n.concat(r.router.resolveHooks);Gt(s,d,(function(){if(r.pending!==t)return o(Ft(i,t));r.pending=null,e(t),r.router.app&&r.router.app.$nextTick((function(){T(t)}))}))}))},te.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},te.prototype.setupListeners=function(){},te.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=m,this.pending=null};var le=function(t){function e(e,n){t.call(this,e,n),this._startLocation=he(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Pt&&n;r&&this.listeners.push(Et());var i=function(){var n=t.current,i=he(t.base);t.current===m&&i===t._startLocation||t.transitionTo(i,(function(t){r&&Tt(e,t,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){Lt(O(r.base+t.fullPath)),Tt(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){Mt(O(r.base+t.fullPath)),Tt(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(he(this.base)!==this.current.fullPath){var e=O(this.base+this.current.fullPath);t?Lt(e):Mt(e)}},e.prototype.getCurrentLocation=function(){return he(this.base)},e}(te);function he(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(O(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var fe=function(t){function e(e,n,r){t.call(this,e,n),r&&de(this.base)||pe()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Pt&&n;r&&this.listeners.push(Et());var i=function(){var e=t.current;pe()&&t.transitionTo(ve(),(function(n){r&&Tt(t.router,n,e,!0),Pt||ye(n.fullPath)}))},o=Pt?"popstate":"hashchange";window.addEventListener(o,i),this.listeners.push((function(){window.removeEventListener(o,i)}))}},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){ge(t.fullPath),Tt(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){ye(t.fullPath),Tt(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;ve()!==e&&(t?ge(e):ye(e))},e.prototype.getCurrentLocation=function(){return ve()},e}(te);function de(t){var e=he(t);if(!/^\/#/.test(e))return window.location.replace(O(t+"/#"+e)),!0}function pe(){var t=ve();return"/"===t.charAt(0)||(ye("/"+t),!1)}function ve(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function me(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function ge(t){Pt?Lt(me(t)):window.location.hash=t}function ye(t){Pt?Mt(me(t)):window.location.replace(me(t))}var we=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach((function(e){e&&e(r,t)}))}),(function(t){Kt(t,$t.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),be=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=dt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Pt&&!1!==t.fallback,this.fallback&&(e="hash"),ct||(e="abstract"),this.mode=e,e){case"history":this.history=new le(this,t.base);break;case"hash":this.history=new fe(this,t.base,this.fallback);break;case"abstract":this.history=new we(this,t.base);break;default:0}},_e={currentRoute:{configurable:!0}};be.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},_e.currentRoute.get=function(){return this.history&&this.history.current},be.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof le||n instanceof fe){var r=function(t){var r=n.current,i=e.options.scrollBehavior,o=Pt&&i;o&&"fullPath"in t&&Tt(e,t,r,!1)},i=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},be.prototype.beforeEach=function(t){return Te(this.beforeHooks,t)},be.prototype.beforeResolve=function(t){return Te(this.resolveHooks,t)},be.prototype.afterEach=function(t){return Te(this.afterHooks,t)},be.prototype.onReady=function(t,e){this.history.onReady(t,e)},be.prototype.onError=function(t){this.history.onError(t)},be.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},be.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},be.prototype.go=function(t){this.history.go(t)},be.prototype.back=function(){this.go(-1)},be.prototype.forward=function(){this.go(1)},be.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},be.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=Z(t,e,n,this),i=this.match(r,e),o=i.redirectedFrom||i.fullPath,s=this.history.base,a=Se(s,o,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},be.prototype.getRoutes=function(){return this.matcher.getRoutes()},be.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},be.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(be.prototype,_e);var Ee=be;function Te(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Se(t,e,n){var r="hash"===n?"#"+e:e;return t?O(t+"/"+r):r}be.install=at,be.version="3.6.5",be.isNavigationFailure=Kt,be.NavigationFailureType=$t,be.START_LOCATION=m,ct&&window.Vue&&window.Vue.use(be)},9555:function(t,e,n){n(7658),n(4633),n(541),
/*!
 * Vue.js v2.7.13
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
function(e,n){t.exports=n()}(0,(function(){"use strict";var t=Object.freeze({}),e=Array.isArray;function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function o(t){return!0===t}function s(t){return!1===t}function a(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return"function"===typeof t}function u(t){return null!==t&&"object"===typeof t}var l=Object.prototype.toString;function h(t){return l.call(t).slice(8,-1)}function f(t){return"[object Object]"===l.call(t)}function d(t){return"[object RegExp]"===l.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function v(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function m(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===l?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}var w=y("slot,component",!0),b=y("key,ref,slot,slot-scope,is");function _(t,e){var n=t.length;if(n){if(e===t[n-1])return void(t.length=n-1);var r=t.indexOf(e);if(r>-1)return t.splice(r,1)}}var E=Object.prototype.hasOwnProperty;function T(t,e){return E.call(t,e)}function S(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var I=/-(\w)/g,C=S((function(t){return t.replace(I,(function(t,e){return e?e.toUpperCase():""}))})),k=S((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),A=/\B([A-Z])/g,O=S((function(t){return t.replace(A,"-$1").toLowerCase()}));function x(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function R(t,e){return t.bind(e)}var N=Function.prototype.bind?R:x;function D(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function P(t,e){for(var n in e)t[n]=e[n];return t}function L(t){for(var e={},n=0;n<t.length;n++)t[n]&&P(e,t[n]);return e}function M(t,e,n){}var $=function(t,e,n){return!1},j=function(t){return t};function U(t){return t.reduce((function(t,e){return t.concat(e.staticKeys||[])}),[]).join(",")}function F(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every((function(t,n){return F(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var s=Object.keys(t),a=Object.keys(e);return s.length===a.length&&s.every((function(n){return F(t[n],e[n])}))}catch(c){return!1}}function V(t,e){for(var n=0;n<t.length;n++)if(F(t[n],e))return n;return-1}function B(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function q(t,e){return t===e?0===t&&1/t!==1/e:t===t||e===e}var H="data-server-rendered",z=["component","directive","filter"],K=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],G={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!0,devtools:!0,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:$,isReservedAttr:$,isUnknownElement:$,getTagNamespace:M,parsePlatformTagName:j,mustUseProp:$,async:!0,_lifecycleHooks:K},W=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function Q(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function J(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var X=new RegExp("[^".concat(W.source,".$_\\d]"));function Y(t){if(!X.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var Z="__proto__"in{},tt="undefined"!==typeof window,et=tt&&window.navigator.userAgent.toLowerCase(),nt=et&&/msie|trident/.test(et),rt=et&&et.indexOf("msie 9.0")>0,it=et&&et.indexOf("edge/")>0;et&&et.indexOf("android");var ot=et&&/iphone|ipad|ipod|ios/.test(et);et&&/chrome\/\d+/.test(et),et&&/phantomjs/.test(et);var st,at=et&&et.match(/firefox\/(\d+)/),ct={}.watch,ut=!1;if(tt)try{var lt={};Object.defineProperty(lt,"passive",{get:function(){ut=!0}}),window.addEventListener("test-passive",null,lt)}catch(Lf){}var ht=function(){return void 0===st&&(st=!tt&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),st},ft=tt&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function dt(t){return"function"===typeof t&&/native code/.test(t.toString())}var pt,vt="undefined"!==typeof Symbol&&dt(Symbol)&&"undefined"!==typeof Reflect&&dt(Reflect.ownKeys);pt="undefined"!==typeof Set&&dt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var mt=null;function gt(){return mt&&{proxy:mt}}function yt(t){void 0===t&&(t=null),t||mt&&mt._scope.off(),mt=t,t&&t._scope.on()}var wt,bt=function(){function t(t,e,n,r,i,o,s,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(t.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),t}(),_t=function(t){void 0===t&&(t="");var e=new bt;return e.text=t,e.isComment=!0,e};function Et(t){return new bt(void 0,void 0,void 0,String(t))}function Tt(t){var e=new bt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var St=y("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,require"),It=function(t,e){so('Property or method "'.concat(e,'" is not defined on the instance but ')+"referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://v2.vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.",t)},Ct=function(t,e){so('Property "'.concat(e,'" must be accessed with "$data.').concat(e,'" because ')+'properties starting with "$" or "_" are not proxied in the Vue instance to prevent conflicts with Vue internals. See: https://v2.vuejs.org/v2/api/#data',t)},kt="undefined"!==typeof Proxy&&dt(Proxy);if(kt){var At=y("stop,prevent,self,ctrl,shift,alt,meta,exact");G.keyCodes=new Proxy(G.keyCodes,{set:function(t,e,n){return At(e)?(so("Avoid overwriting built-in modifier in config.keyCodes: .".concat(e)),!1):(t[e]=n,!0)}})}var Ot={has:function(t,e){var n=e in t,r=St(e)||"string"===typeof e&&"_"===e.charAt(0)&&!(e in t.$data);return n||r||(e in t.$data?Ct(t,e):It(t,e)),n||!r}},xt={get:function(t,e){return"string"!==typeof e||e in t||(e in t.$data?Ct(t,e):It(t,e)),t[e]}};wt=function(t){if(kt){var e=t.$options,n=e.render&&e.render._withStripped?xt:Ot;t._renderProxy=new Proxy(t,n)}else t._renderProxy=t};var Rt=function(){return Rt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},Rt.apply(this,arguments)},Nt=0,Dt=[],Pt=function(){for(var t=0;t<Dt.length;t++){var e=Dt[t];e.subs=e.subs.filter((function(t){return t})),e._pending=!1}Dt.length=0},Lt=function(){function t(){this._pending=!1,this.id=Nt++,this.subs=[]}return t.prototype.addSub=function(t){this.subs.push(t)},t.prototype.removeSub=function(t){this.subs[this.subs.indexOf(t)]=null,this._pending||(this._pending=!0,Dt.push(this))},t.prototype.depend=function(e){t.target&&(t.target.addDep(this),e&&t.target.onTrack&&t.target.onTrack(Rt({effect:t.target},e)))},t.prototype.notify=function(t){var e=this.subs.filter((function(t){return t}));G.async||e.sort((function(t,e){return t.id-e.id}));for(var n=0,r=e.length;n<r;n++){var i=e[n];t&&i.onTrigger&&i.onTrigger(Rt({effect:e[n]},t)),i.update()}},t}();Lt.target=null;var Mt=[];function $t(t){Mt.push(t),Lt.target=t}function jt(){Mt.pop(),Lt.target=Mt[Mt.length-1]}var Ut=Array.prototype,Ft=Object.create(Ut),Vt=["push","pop","shift","unshift","splice","sort","reverse"];Vt.forEach((function(t){var e=Ut[t];J(Ft,t,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,o=e.apply(this,n),s=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&s.observeArray(i),s.dep.notify({type:"array mutation",target:this,key:t}),o}))}));var Bt=new WeakMap;function qt(t){return zt(t,!1),t}function Ht(t){return zt(t,!0),J(t,"__v_isShallow",!0),t}function zt(t,n){if(!Wt(t)){e(t)&&so("Avoid using Array as root value for ".concat(n?"shallowReactive()":"reactive()"," as it cannot be tracked in watch() or watchEffect(). Use ").concat(n?"shallowRef()":"ref()"," instead. This is a Vue-2-only limitation."));var r=t&&t.__ob__;r&&r.shallow!==n&&so("Target is already a ".concat(r.shallow?"":"non-","shallow reactive object, and cannot be converted to ").concat(n?"":"non-","shallow."));var i=oe(t,n,ht());i||((null==t||a(t))&&so("value cannot be made reactive: ".concat(String(t))),Yt(t)&&so("Vue 2 does not support reactive collection types such as Map or Set."))}}function Kt(t){return Wt(t)?Kt(t["__v_raw"]):!(!t||!t.__ob__)}function Gt(t){return!(!t||!t.__v_isShallow)}function Wt(t){return!(!t||!t.__v_isReadonly)}function Qt(t){return Kt(t)||Wt(t)}function Jt(t){var e=t&&t["__v_raw"];return e?Jt(e):t}function Xt(t){return u(t)&&Bt.set(t,!0),t}function Yt(t){var e=h(t);return"Map"===e||"WeakMap"===e||"Set"===e||"WeakSet"===e}var Zt=Object.getOwnPropertyNames(Ft),te={},ee=!0;function ne(t){ee=t}var re={notify:M,depend:M,addSub:M,removeSub:M},ie=function(){function t(t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!1),this.value=t,this.shallow=n,this.mock=r,this.dep=r?re:new Lt,this.vmCount=0,J(t,"__ob__",this),e(t)){if(!r)if(Z)t.__proto__=Ft;else for(var i=0,o=Zt.length;i<o;i++){var s=Zt[i];J(t,s,Ft[s])}n||this.observeArray(t)}else{var a=Object.keys(t);for(i=0;i<a.length;i++){s=a[i];se(t,s,te,void 0,n,r)}}}return t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)oe(t[e],!1,this.mock)},t}();function oe(t,n,r){return t&&T(t,"__ob__")&&t.__ob__ instanceof ie?t.__ob__:!ee||!r&&ht()||!e(t)&&!f(t)||!Object.isExtensible(t)||t.__v_skip||Bt.has(t)||he(t)||t instanceof bt?void 0:new ie(t,n,r)}function se(t,n,r,i,o,s){var a=new Lt,c=Object.getOwnPropertyDescriptor(t,n);if(!c||!1!==c.configurable){var u=c&&c.get,l=c&&c.set;u&&!l||r!==te&&2!==arguments.length||(r=t[n]);var h=!o&&oe(r,!1,s);return Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var i=u?u.call(t):r;return Lt.target&&(a.depend({target:t,type:"get",key:n}),h&&(h.dep.depend(),e(i)&&ue(i))),he(i)&&!o?i.value:i},set:function(e){var c=u?u.call(t):r;if(q(c,e)){if(i&&i(),l)l.call(t,e);else{if(u)return;if(!o&&he(c)&&!he(e))return void(c.value=e);r=e}h=!o&&oe(e,!1,s),a.notify({type:"set",target:t,key:n,newValue:e,oldValue:c})}}}),a}}function ae(t,n,i){if((r(t)||a(t))&&so("Cannot set reactive property on undefined, null, or primitive value: ".concat(t)),!Wt(t)){var o=t.__ob__;return e(t)&&p(n)?(t.length=Math.max(t.length,n),t.splice(n,1,i),o&&!o.shallow&&o.mock&&oe(i,!1,!0),i):n in t&&!(n in Object.prototype)?(t[n]=i,i):t._isVue||o&&o.vmCount?(so("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."),i):o?(se(o.value,n,i,void 0,o.shallow,o.mock),o.dep.notify({type:"add",target:t,key:n,newValue:i,oldValue:void 0}),i):(t[n]=i,i)}so('Set operation on key "'.concat(n,'" failed: target is readonly.'))}function ce(t,n){if((r(t)||a(t))&&so("Cannot delete reactive property on undefined, null, or primitive value: ".concat(t)),e(t)&&p(n))t.splice(n,1);else{var i=t.__ob__;t._isVue||i&&i.vmCount?so("Avoid deleting properties on a Vue instance or its root $data - just set it to null."):Wt(t)?so('Delete operation on key "'.concat(n,'" failed: target is readonly.')):T(t,n)&&(delete t[n],i&&i.dep.notify({type:"delete",target:t,key:n}))}}function ue(t){for(var n=void 0,r=0,i=t.length;r<i;r++)n=t[r],n&&n.__ob__&&n.__ob__.dep.depend(),e(n)&&ue(n)}var le="__v_isRef";function he(t){return!(!t||!0!==t.__v_isRef)}function fe(t){return pe(t,!1)}function de(t){return pe(t,!0)}function pe(t,e){if(he(t))return t;var n={};return J(n,le,!0),J(n,"__v_isShallow",e),J(n,"dep",se(n,"value",t,null,e,ht())),n}function ve(t){t.dep||so("received object is not a triggerable ref."),t.dep&&t.dep.notify({type:"set",target:t,key:"value"})}function me(t){return he(t)?t.value:t}function ge(t){if(Kt(t))return t;for(var e={},n=Object.keys(t),r=0;r<n.length;r++)ye(e,t,n[r]);return e}function ye(t,e,n){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];if(he(t))return t.value;var r=t&&t.__ob__;return r&&r.dep.depend(),t},set:function(t){var r=e[n];he(r)&&!he(t)?r.value=t:e[n]=t}})}function we(t){var e=new Lt,n=t((function(){e.depend({target:o,type:"get",key:"value"})}),(function(){e.notify({target:o,type:"set",key:"value"})})),r=n.get,i=n.set,o={get value(){return r()},set value(t){i(t)}};return J(o,le,!0),o}function be(t){Kt(t)||so("toRefs() expects a reactive object but received a plain one.");var n=e(t)?new Array(t.length):{};for(var r in t)n[r]=_e(t,r);return n}function _e(t,e,n){var r=t[e];if(he(r))return r;var i={get value(){var r=t[e];return void 0===r?n:r},set value(n){t[e]=n}};return J(i,le,!0),i}var Ee,Te,Se=new WeakMap,Ie=new WeakMap;function Ce(t){return ke(t,!1)}function ke(t,n){if(!f(t))return e(t)?so("Vue 2 does not support readonly arrays."):Yt(t)?so("Vue 2 does not support readonly collection types such as Map or Set."):so("value cannot be made readonly: ".concat(typeof t)),t;if(Wt(t))return t;var r=n?Ie:Se,i=r.get(t);if(i)return i;var o=Object.create(Object.getPrototypeOf(t));r.set(t,o),J(o,"__v_isReadonly",!0),J(o,"__v_raw",t),he(t)&&J(o,le,!0),(n||Gt(t))&&J(o,"__v_isShallow",!0);for(var s=Object.keys(t),a=0;a<s.length;a++)Ae(o,t,s[a],n);return o}function Ae(t,e,n,r){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];return r||!f(t)?t:Ce(t)},set:function(){so('Set operation on key "'.concat(n,'" failed: target is readonly.'))}})}function Oe(t){return ke(t,!0)}function xe(t,e){var n,r,i=c(t);i?(n=t,r=function(){so("Write operation failed: computed value is readonly")}):(n=t.get,r=t.set);var o=ht()?null:new Ei(mt,n,M,{lazy:!0});o&&e&&(o.onTrack=e.onTrack,o.onTrigger=e.onTrigger);var s={effect:o,get value(){return o?(o.dirty&&o.evaluate(),Lt.target&&(Lt.target.onTrack&&Lt.target.onTrack({effect:Lt.target,target:s,type:"get",key:"value"}),o.depend()),o.value):n()},set value(t){r(t)}};return J(s,le,!0),J(s,"__v_isReadonly",i),s}var Re=tt&&window.performance;Re&&Re.mark&&Re.measure&&Re.clearMarks&&Re.clearMeasures&&(Ee=function(t){return Re.mark(t)},Te=function(t,e,n){Re.measure(t,e,n),Re.clearMarks(e),Re.clearMarks(n)});var Ne=S((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function De(t,n){function r(){var t=r.fns;if(!e(t))return $r(t,null,arguments,n,"v-on handler");for(var i=t.slice(),o=0;o<i.length;o++)$r(i[o],null,arguments,n,"v-on handler")}return r.fns=t,r}function Pe(t,e,n,i,s,a){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=Ne(c),r(u)?so('Invalid handler for event "'.concat(h.name,'": got ')+String(u),a):r(l)?(r(u.fns)&&(u=t[c]=De(u,a)),o(h.once)&&(u=t[c]=s(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l);for(c in e)r(t[c])&&(h=Ne(c),i(h.name,e[c],h.capture))}function Le(t,e,n){var s;t instanceof bt&&(t=t.data.hook||(t.data.hook={}));var a=t[e];function c(){n.apply(this,arguments),_(s.fns,c)}r(a)?s=De([c]):i(a.fns)&&o(a.merged)?(s=a,s.fns.push(c)):s=De([a,c]),s.merged=!0,t[e]=s}function Me(t,e,n){var o=e.options.props;if(!r(o)){var s={},a=t.attrs,c=t.props;if(i(a)||i(c))for(var u in o){var l=O(u),h=u.toLowerCase();u!==h&&a&&T(a,h)&&ao('Prop "'.concat(h,'" is passed to component ')+"".concat(oo(n||e),", but the declared prop name is")+' "'.concat(u,'". ')+"Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM "+'templates. You should probably use "'.concat(l,'" instead of "').concat(u,'".')),$e(s,c,u,l,!0)||$e(s,a,u,l,!1)}return s}}function $e(t,e,n,r,o){if(i(e)){if(T(e,n))return t[n]=e[n],o||delete e[n],!0;if(T(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function je(t){for(var n=0;n<t.length;n++)if(e(t[n]))return Array.prototype.concat.apply([],t);return t}function Ue(t){return a(t)?[Et(t)]:e(t)?Ve(t):void 0}function Fe(t){return i(t)&&i(t.text)&&s(t.isComment)}function Ve(t,n){var s,c,u,l,h=[];for(s=0;s<t.length;s++)c=t[s],r(c)||"boolean"===typeof c||(u=h.length-1,l=h[u],e(c)?c.length>0&&(c=Ve(c,"".concat(n||"","_").concat(s)),Fe(c[0])&&Fe(l)&&(h[u]=Et(l.text+c[0].text),c.shift()),h.push.apply(h,c)):a(c)?Fe(l)?h[u]=Et(l.text+c):""!==c&&h.push(Et(c)):Fe(c)&&Fe(l)?h[u]=Et(l.text+c.text):(o(t._isVList)&&i(c.tag)&&r(c.key)&&i(n)&&(c.key="__vlist".concat(n,"_").concat(s,"__")),h.push(c)));return h}var Be=1,qe=2;function He(t,n,r,i,s,c){return(e(r)||a(r))&&(s=i,i=r,r=void 0),o(c)&&(s=qe),ze(t,n,r,i,s)}function ze(t,n,r,o,s){if(i(r)&&i(r.__ob__))return so("Avoid using observed data object as vnode data: ".concat(JSON.stringify(r),"\n")+"Always create fresh vnode data objects in each render!",t),_t();if(i(r)&&i(r.is)&&(n=r.is),!n)return _t();var u,l;if(i(r)&&i(r.key)&&!a(r.key)&&so("Avoid using non-primitive value as key, use string/number value instead.",t),e(o)&&c(o[0])&&(r=r||{},r.scopedSlots={default:o[0]},o.length=0),s===qe?o=Ue(o):s===Be&&(o=je(o)),"string"===typeof n){var h=void 0;l=t.$vnode&&t.$vnode.ns||G.getTagNamespace(n),G.isReservedTag(n)?(i(r)&&i(r.nativeOn)&&"component"!==r.tag&&so("The .native modifier for v-on is only valid on components but it was used on <".concat(n,">."),t),u=new bt(G.parsePlatformTagName(n),r,o,void 0,void 0,t)):u=r&&r.pre||!i(h=ko(t.$options,"components",n))?new bt(n,r,o,void 0,void 0,t):Zi(h,r,t,o,n)}else u=Zi(n,r,t,o);return e(u)?u:i(u)?(i(l)&&Ke(u,l),i(r)&&Ge(r),u):_t()}function Ke(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var s=0,a=t.children.length;s<a;s++){var c=t.children[s];i(c.tag)&&(r(c.ns)||o(n)&&"svg"!==c.tag)&&Ke(c,e,n)}}function Ge(t){u(t.style)&&wi(t.style),u(t.class)&&wi(t.class)}function We(t,n){var r,o,s,a,c=null;if(e(t)||"string"===typeof t)for(c=new Array(t.length),r=0,o=t.length;r<o;r++)c[r]=n(t[r],r);else if("number"===typeof t)for(c=new Array(t),r=0;r<t;r++)c[r]=n(r+1,r);else if(u(t))if(vt&&t[Symbol.iterator]){c=[];var l=t[Symbol.iterator](),h=l.next();while(!h.done)c.push(n(h.value,c.length)),h=l.next()}else for(s=Object.keys(t),c=new Array(s.length),r=0,o=s.length;r<o;r++)a=s[r],c[r]=n(t[a],a,r);return i(c)||(c=[]),c._isVList=!0,c}function Qe(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(u(r)||so("slot v-bind without argument expects an Object",this),n=P(P({},r),n)),i=o(n)||(c(e)?e():e)):i=this.$slots[t]||(c(e)?e():e);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function Je(t){return ko(this.$options,"filters",t,!0)||j}function Xe(t,n){return e(t)?-1===t.indexOf(n):t!==n}function Ye(t,e,n,r,i){var o=G.keyCodes[e]||n;return i&&r&&!G.keyCodes[e]?Xe(i,r):o?Xe(o,t):r?O(r)!==e:void 0===t}function Ze(t,n,r,i,o){if(r)if(u(r)){e(r)&&(r=L(r));var s=void 0,a=function(e){if("class"===e||"style"===e||b(e))s=t;else{var a=t.attrs&&t.attrs.type;s=i||G.mustUseProp(n,a,e)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=C(e),u=O(e);if(!(c in s)&&!(u in s)&&(s[e]=r[e],o)){var l=t.on||(t.on={});l["update:".concat(e)]=function(t){r[e]=t}}};for(var c in r)a(c)}else so("v-bind without argument expects an Object or Array value",this);return t}function tn(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,this._c,this),nn(r,"__static__".concat(t),!1)),r}function en(t,e,n){return nn(t,"__once__".concat(e).concat(n?"_".concat(n):""),!0),t}function nn(t,n,r){if(e(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&rn(t[i],"".concat(n,"_").concat(i),r);else rn(t,n,r)}function rn(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function on(t,e){if(e)if(f(e)){var n=t.on=t.on?P({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else so("v-on without argument expects an Object value",this);return t}function sn(t,n,r,i){n=n||{$stable:!r};for(var o=0;o<t.length;o++){var s=t[o];e(s)?sn(s,n,r):s&&(s.proxy&&(s.fn.proxy=!0),n[s.key]=s.fn)}return i&&(n.$key=i),n}function an(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r?t[e[n]]=e[n+1]:""!==r&&null!==r&&so("Invalid value for dynamic directive argument (expected string or null): ".concat(r),this)}return t}function cn(t,e){return"string"===typeof t?e+t:t}function un(t){t._o=en,t._n=g,t._s=m,t._l=We,t._t=Qe,t._q=F,t._i=V,t._m=tn,t._f=Je,t._k=Ye,t._b=Ze,t._v=Et,t._e=_t,t._u=sn,t._g=on,t._d=an,t._p=cn}function ln(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==e&&o.fnContext!==e||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(hn)&&delete n[u];return n}function hn(t){return t.isComment&&!t.asyncFactory||" "===t.text}function fn(t){return t.isComment&&t.asyncFactory}function dn(e,n,r,i){var o,s=Object.keys(r).length>0,a=n?!!n.$stable:!s,c=n&&n.$key;if(n){if(n._normalized)return n._normalized;if(a&&i&&i!==t&&c===i.$key&&!s&&!i.$hasNormal)return i;for(var u in o={},n)n[u]&&"$"!==u[0]&&(o[u]=pn(e,r,u,n[u]))}else o={};for(var l in r)l in o||(o[l]=vn(r,l));return n&&Object.isExtensible(n)&&(n._normalized=o),J(o,"$stable",a),J(o,"$key",c),J(o,"$hasNormal",s),o}function pn(t,n,r,i){var o=function(){var n=mt;yt(t);var r=arguments.length?i.apply(null,arguments):i({});r=r&&"object"===typeof r&&!e(r)?[r]:Ue(r);var o=r&&r[0];return yt(n),r&&(!o||1===r.length&&o.isComment&&!fn(o))?void 0:r};return i.proxy&&Object.defineProperty(n,r,{get:o,enumerable:!0,configurable:!0}),o}function vn(t,e){return function(){return t[e]}}function mn(t){var e=t.$options,n=e.setup;if(n){var r=t._setupContext=gn(t);yt(t),$t();var i=$r(n,null,[t._props||Ht({}),r],t,"setup");if(jt(),yt(),c(i))e.render=i;else if(u(i))if(i instanceof bt&&so("setup() should not return VNodes directly - return a render function instead."),t._setupState=i,i.__sfc){var o=t._setupProxy={};for(var s in i)"__sfc"!==s&&ye(o,i,s)}else for(var s in i)Q(s)?so("Avoid using variables that start with _ or $ in setup()."):ye(t,i,s);else void 0!==i&&so("setup() should return an object. Received: ".concat(null===i?"null":typeof i))}}function gn(e){var n=!1;return{get attrs(){if(!e._attrsProxy){var n=e._attrsProxy={};J(n,"_v_attr_proxy",!0),yn(n,e.$attrs,t,e,"$attrs")}return e._attrsProxy},get listeners(){if(!e._listenersProxy){var n=e._listenersProxy={};yn(n,e.$listeners,t,e,"$listeners")}return e._listenersProxy},get slots(){return bn(e)},emit:N(e.$emit,e),expose:function(t){n&&so("expose() should be called only once per setup().",e),n=!0,t&&Object.keys(t).forEach((function(n){return ye(e,t,n)}))}}}function yn(t,e,n,r,i){var o=!1;for(var s in e)s in t?e[s]!==n[s]&&(o=!0):(o=!0,wn(t,s,r,i));for(var s in t)s in e||(o=!0,delete t[s]);return o}function wn(t,e,n,r){Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){return n[r][e]}})}function bn(t){return t._slotsProxy||_n(t._slotsProxy={},t.$scopedSlots),t._slotsProxy}function _n(t,e){for(var n in e)t[n]=e[n];for(var n in t)n in e||delete t[n]}function En(){return In().slots}function Tn(){return In().attrs}function Sn(){return In().listeners}function In(){mt||so("useContext() called without active instance.");var t=mt;return t._setupContext||(t._setupContext=gn(t))}function Cn(t,n){var r=e(t)?t.reduce((function(t,e){return t[e]={},t}),{}):t;for(var i in n){var o=r[i];o?e(o)||c(o)?r[i]={type:o,default:n[i]}:o.default=n[i]:null===o?r[i]={default:n[i]}:so('props default key "'.concat(i,'" has no corresponding declaration.'))}return r}function kn(e){e._vnode=null,e._staticTrees=null;var n=e.$options,r=e.$vnode=n._parentVnode,i=r&&r.context;e.$slots=ln(n._renderChildren,i),e.$scopedSlots=r?dn(e.$parent,r.data.scopedSlots,e.$slots):t,e._c=function(t,n,r,i){return He(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return He(e,t,n,r,i,!0)};var o=r&&r.data;se(e,"$attrs",o&&o.attrs||t,(function(){!Bn&&so("$attrs is readonly.",e)}),!0),se(e,"$listeners",n._parentListeners||t,(function(){!Bn&&so("$listeners is readonly.",e)}),!0)}var An,On=null;function xn(t){un(t.prototype),t.prototype.$nextTick=function(t){return Qr(t,this)},t.prototype._render=function(){var t,n=this,r=n.$options,i=r.render,o=r._parentVnode;o&&n._isMounted&&(n.$scopedSlots=dn(n.$parent,o.data.scopedSlots,n.$slots,n.$scopedSlots),n._slotsProxy&&_n(n._slotsProxy,n.$scopedSlots)),n.$vnode=o;try{yt(n),On=n,t=i.call(n._renderProxy,n.$createElement)}catch(Lf){if(Mr(Lf,n,"render"),n.$options.renderError)try{t=n.$options.renderError.call(n._renderProxy,n.$createElement,Lf)}catch(Lf){Mr(Lf,n,"renderError"),t=n._vnode}else t=n._vnode}finally{On=null,yt()}return e(t)&&1===t.length&&(t=t[0]),t instanceof bt||(e(t)&&so("Multiple root nodes returned from render function. Render function should return a single root node.",n),t=_t()),t.parent=o,t}}function Rn(t,e){return(t.__esModule||vt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function Nn(t,e,n,r,i){var o=_t();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function Dn(t,e){if(o(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=On;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var s=t.owners=[n],a=!0,c=null,l=null;n.$on("hook:destroyed",(function(){return _(s,n)}));var h=function(t){for(var e=0,n=s.length;e<n;e++)s[e].$forceUpdate();t&&(s.length=0,null!==c&&(clearTimeout(c),c=null),null!==l&&(clearTimeout(l),l=null))},f=B((function(n){t.resolved=Rn(n,e),a?s.length=0:h(!0)})),d=B((function(e){so("Failed to resolve async component: ".concat(String(t))+(e?"\nReason: ".concat(e):"")),i(t.errorComp)&&(t.error=!0,h(!0))})),p=t(f,d);return u(p)&&(v(p)?r(t.resolved)&&p.then(f,d):v(p.component)&&(p.component.then(f,d),i(p.error)&&(t.errorComp=Rn(p.error,e)),i(p.loading)&&(t.loadingComp=Rn(p.loading,e),0===p.delay?t.loading=!0:c=setTimeout((function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,h(!1))}),p.delay||200)),i(p.timeout)&&(l=setTimeout((function(){l=null,r(t.resolved)&&d("timeout (".concat(p.timeout,"ms)"))}),p.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function Pn(t){if(e(t))for(var n=0;n<t.length;n++){var r=t[n];if(i(r)&&(i(r.componentOptions)||fn(r)))return r}}function Ln(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Un(t,e)}function Mn(t,e){An.$on(t,e)}function $n(t,e){An.$off(t,e)}function jn(t,e){var n=An;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function Un(t,e,n){An=t,Pe(e,n||{},Mn,$n,jn,t),An=void 0}function Fn(t){var n=/^hook:/;t.prototype.$on=function(t,r){var i=this;if(e(t))for(var o=0,s=t.length;o<s;o++)i.$on(t[o],r);else(i._events[t]||(i._events[t]=[])).push(r),n.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,n){var r=this;if(!arguments.length)return r._events=Object.create(null),r;if(e(t)){for(var i=0,o=t.length;i<o;i++)r.$off(t[i],n);return r}var s,a=r._events[t];if(!a)return r;if(!n)return r._events[t]=null,r;var c=a.length;while(c--)if(s=a[c],s===n||s.fn===n){a.splice(c,1);break}return r},t.prototype.$emit=function(t){var e=this,n=t.toLowerCase();n!==t&&e._events[n]&&ao('Event "'.concat(n,'" is emitted in component ')+"".concat(oo(e),' but the handler is registered for "').concat(t,'". ')+"Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. "+'You should probably use "'.concat(O(t),'" instead of "').concat(t,'".'));var r=e._events[t];if(r){r=r.length>1?D(r):r;for(var i=D(arguments,1),o='event handler for "'.concat(t,'"'),s=0,a=r.length;s<a;s++)$r(r[s],e,i,e,o)}return e}}var Vn=null,Bn=!1;function qn(t){var e=Vn;return Vn=t,function(){Vn=e}}function Hn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._provided=n?n._provided:Object.create(null),t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function zn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=qn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);var s=n;while(s&&s.$vnode&&s.$parent&&s.$vnode===s.$parent._vnode)s.$parent.$el=s.$el,s=s.$parent},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Xn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||_(e.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Xn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Kn(t,e,n){var r;t.$el=e,t.$options.render||(t.$options.render=_t,t.$options.template&&"#"!==t.$options.template.charAt(0)||t.$options.el||e?so("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.",t):so("Failed to mount component: template or render function not defined.",t)),Xn(t,"beforeMount"),r=G.performance&&Ee?function(){var e=t._name,r=t._uid,i="vue-perf-start:".concat(r),o="vue-perf-end:".concat(r);Ee(i);var s=t._render();Ee(o),Te("vue ".concat(e," render"),i,o),Ee(i),t._update(s,n),Ee(o),Te("vue ".concat(e," patch"),i,o)}:function(){t._update(t._render(),n)};var i={before:function(){t._isMounted&&!t._isDestroyed&&Xn(t,"beforeUpdate")},onTrack:function(e){return Xn(t,"renderTracked",[e])},onTrigger:function(e){return Xn(t,"renderTriggered",[e])}};new Ei(t,r,M,i,!0),n=!1;var o=t._preWatchers;if(o)for(var s=0;s<o.length;s++)o[s].run();return null==t.$vnode&&(t._isMounted=!0,Xn(t,"mounted")),t}function Gn(e,n,r,i,o){Bn=!0;var s=i.data.scopedSlots,a=e.$scopedSlots,c=!!(s&&!s.$stable||a!==t&&!a.$stable||s&&e.$scopedSlots.$key!==s.$key||!s&&e.$scopedSlots.$key),u=!!(o||e.$options._renderChildren||c),l=e.$vnode;e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=o;var h=i.data.attrs||t;e._attrsProxy&&yn(e._attrsProxy,h,l.data&&l.data.attrs||t,e,"$attrs")&&(u=!0),e.$attrs=h,r=r||t;var f=e.$options._parentListeners;if(e._listenersProxy&&yn(e._listenersProxy,r,f||t,e,"$listeners"),e.$listeners=e.$options._parentListeners=r,Un(e,r,f),n&&e.$options.props){ne(!1);for(var d=e._props,p=e.$options._propKeys||[],v=0;v<p.length;v++){var m=p[v],g=e.$options.props;d[m]=Ao(m,g,n,e)}ne(!0),e.$options.propsData=n}u&&(e.$slots=ln(o,i.context),e.$forceUpdate()),Bn=!1}function Wn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Qn(t,e){if(e){if(t._directInactive=!1,Wn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Qn(t.$children[n]);Xn(t,"activated")}}function Jn(t,e){if((!e||(t._directInactive=!0,!Wn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Jn(t.$children[n]);Xn(t,"deactivated")}}function Xn(t,e,n,r){void 0===r&&(r=!0),$t();var i=mt;r&&yt(t);var o=t.$options[e],s="".concat(e," hook");if(o)for(var a=0,c=o.length;a<c;a++)$r(o[a],t,n||null,t,s);t._hasHookEvent&&t.$emit("hook:"+e),r&&yt(i),jt()}var Yn=100,Zn=[],tr=[],er={},nr={},rr=!1,ir=!1,or=0;function sr(){or=Zn.length=tr.length=0,er={},nr={},rr=ir=!1}var ar=0,cr=Date.now;if(tt&&!nt){var ur=window.performance;ur&&"function"===typeof ur.now&&cr()>document.createEvent("Event").timeStamp&&(cr=function(){return ur.now()})}var lr=function(t,e){if(t.post){if(!e.post)return 1}else if(e.post)return-1;return t.id-e.id};function hr(){var t,e;for(ar=cr(),ir=!0,Zn.sort(lr),or=0;or<Zn.length;or++)if(t=Zn[or],t.before&&t.before(),e=t.id,er[e]=null,t.run(),null!=er[e]&&(nr[e]=(nr[e]||0)+1,nr[e]>Yn)){so("You may have an infinite update loop "+(t.user?'in watcher with expression "'.concat(t.expression,'"'):"in a component render function."),t.vm);break}var n=tr.slice(),r=Zn.slice();sr(),pr(n),fr(r),Pt(),ft&&G.devtools&&ft.emit("flush")}function fr(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&Xn(r,"updated")}}function dr(t){t._inactive=!1,tr.push(t)}function pr(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Qn(t[e],!0)}function vr(t){var e=t.id;if(null==er[e]&&(t!==Lt.target||!t.noRecurse)){if(er[e]=!0,ir){var n=Zn.length-1;while(n>or&&Zn[n].id>t.id)n--;Zn.splice(n+1,0,t)}else Zn.push(t);if(!rr){if(rr=!0,!G.async)return void hr();Qr(hr)}}}var mr="watcher",gr="".concat(mr," callback"),yr="".concat(mr," getter"),wr="".concat(mr," cleanup");function br(t,e){return Cr(t,null,e)}function _r(t,e){return Cr(t,null,Rt(Rt({},e),{flush:"post"}))}function Er(t,e){return Cr(t,null,Rt(Rt({},e),{flush:"sync"}))}var Tr,Sr={};function Ir(t,e,n){return"function"!==typeof e&&so("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Cr(t,e,n)}function Cr(n,r,i){var o=void 0===i?t:i,s=o.immediate,a=o.deep,u=o.flush,l=void 0===u?"pre":u,h=o.onTrack,f=o.onTrigger;r||(void 0!==s&&so('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),void 0!==a&&so('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));var d,p,v=function(t){so("Invalid watch source: ".concat(t,". A watch source can only be a getter/effect ")+"function, a ref, a reactive object, or an array of these types.")},m=mt,g=function(t,e,n){return void 0===n&&(n=null),$r(t,null,n,m,e)},y=!1,w=!1;if(he(n)?(d=function(){return n.value},y=Gt(n)):Kt(n)?(d=function(){return n.__ob__.dep.depend(),n},a=!0):e(n)?(w=!0,y=n.some((function(t){return Kt(t)||Gt(t)})),d=function(){return n.map((function(t){return he(t)?t.value:Kt(t)?wi(t):c(t)?g(t,yr):void v(t)}))}):c(n)?d=r?function(){return g(n,yr)}:function(){if(!m||!m._isDestroyed)return p&&p(),g(n,mr,[_])}:(d=M,v(n)),r&&a){var b=d;d=function(){return wi(b())}}var _=function(t){p=E.onStop=function(){g(t,wr)}};if(ht())return _=M,r?s&&g(r,gr,[d(),w?[]:void 0,_]):d(),M;var E=new Ei(mt,d,M,{lazy:!0});E.noRecurse=!r;var T=w?[]:Sr;return E.run=function(){if(E.active)if(r){var t=E.get();(a||y||(w?t.some((function(t,e){return q(t,T[e])})):q(t,T)))&&(p&&p(),g(r,gr,[t,T===Sr?void 0:T,_]),T=t)}else E.get()},"sync"===l?E.update=E.run:"post"===l?(E.post=!0,E.update=function(){return vr(E)}):E.update=function(){if(m&&m===mt&&!m._isMounted){var t=m._preWatchers||(m._preWatchers=[]);t.indexOf(E)<0&&t.push(E)}else vr(E)},E.onTrack=h,E.onTrigger=f,r?s?E.run():T=E.get():"post"===l&&m?m.$once("hook:mounted",(function(){return E.get()})):E.get(),function(){E.teardown()}}var kr=function(){function t(t){void 0===t&&(t=!1),this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Tr,!t&&Tr&&(this.index=(Tr.scopes||(Tr.scopes=[])).push(this)-1)}return t.prototype.run=function(t){if(this.active){var e=Tr;try{return Tr=this,t()}finally{Tr=e}}else so("cannot run an inactive effect scope.")},t.prototype.on=function(){Tr=this},t.prototype.off=function(){Tr=this.parent},t.prototype.stop=function(t){if(this.active){var e=void 0,n=void 0;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].teardown();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},t}();function Ar(t){return new kr(t)}function Or(t,e){void 0===e&&(e=Tr),e&&e.active&&e.effects.push(t)}function xr(){return Tr}function Rr(t){Tr?Tr.cleanups.push(t):so("onScopeDispose() is called when there is no active effect scope to be associated with.")}function Nr(t,e){mt?Dr(mt)[t]=e:so("provide() can only be used inside setup().")}function Dr(t){var e=t._provided,n=t.$parent&&t.$parent._provided;return n===e?t._provided=Object.create(n):e}function Pr(t,e,n){void 0===n&&(n=!1);var r=mt;if(r){var i=r.$parent&&r.$parent._provided;if(i&&t in i)return i[t];if(arguments.length>1)return n&&c(e)?e.call(r):e;so('injection "'.concat(String(t),'" not found.'))}else so("inject() can only be used inside setup() or functional components.")}function Lr(t,e,n){return mt||so("globally imported h() can only be invoked when there is an active component instance, e.g. synchronously in a component's render or setup function."),He(mt,t,e,n,2,!0)}function Mr(t,e,n){$t();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var s=!1===i[o].call(r,t,e,n);if(s)return}catch(Lf){jr(Lf,r,"errorCaptured hook")}}}jr(t,e,n)}finally{jt()}}function $r(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&v(o)&&!o._handled&&(o.catch((function(t){return Mr(t,r,i+" (Promise/async)")})),o._handled=!0)}catch(Lf){Mr(Lf,r,i)}return o}function jr(t,e,n){if(G.errorHandler)try{return G.errorHandler.call(null,t,e,n)}catch(Lf){Lf!==t&&Ur(Lf,null,"config.errorHandler")}Ur(t,e,n)}function Ur(t,e,n){if(so("Error in ".concat(n,': "').concat(t.toString(),'"'),e),!tt||"undefined"===typeof console)throw t;console.error(t)}var Fr,Vr=!1,Br=[],qr=!1;function Hr(){qr=!1;var t=Br.slice(0);Br.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&dt(Promise)){var zr=Promise.resolve();Fr=function(){zr.then(Hr),ot&&setTimeout(M)},Vr=!0}else if(nt||"undefined"===typeof MutationObserver||!dt(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Fr="undefined"!==typeof setImmediate&&dt(setImmediate)?function(){setImmediate(Hr)}:function(){setTimeout(Hr,0)};else{var Kr=1,Gr=new MutationObserver(Hr),Wr=document.createTextNode(String(Kr));Gr.observe(Wr,{characterData:!0}),Fr=function(){Kr=(Kr+1)%2,Wr.data=String(Kr)},Vr=!0}function Qr(t,e){var n;if(Br.push((function(){if(t)try{t.call(e)}catch(Lf){Mr(Lf,e,"nextTick")}else n&&n(e)})),qr||(qr=!0,Fr()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}function Jr(e){return so("useCssModule() is not supported in the global build."),t}function Xr(t){if(tt){var e=mt;e?_r((function(){var n=e.$el,r=t(e,e._setupProxy);if(n&&1===n.nodeType){var i=n.style;for(var o in r)i.setProperty("--".concat(o),r[o])}})):so("useCssVars is called without current active component instance.")}}function Yr(t){c(t)&&(t={loader:t});var e=t.loader,n=t.loadingComponent,r=t.errorComponent,i=t.delay,o=void 0===i?200:i,s=t.timeout,a=t.suspensible,l=void 0!==a&&a,h=t.onError;l&&so("The suspensiblbe option for async components is not supported in Vue2. It is ignored.");var f=null,d=0,p=function(){return d++,f=null,v()},v=function(){var t;return f||(t=f=e().catch((function(t){if(t=t instanceof Error?t:new Error(String(t)),h)return new Promise((function(e,n){var r=function(){return e(p())},i=function(){return n(t)};h(t,r,i,d+1)}));throw t})).then((function(e){if(t!==f&&f)return f;if(e||so("Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."),e&&(e.__esModule||"Module"===e[Symbol.toStringTag])&&(e=e.default),e&&!u(e)&&!c(e))throw new Error("Invalid async component load result: ".concat(e));return e})))};return function(){var t=v();return{component:t,delay:o,timeout:s,error:r,loading:n}}}function Zr(t){return function(e,n){if(void 0===n&&(n=mt),n)return ei(n,t,e);so("".concat(ti(t)," is called when there is no active component instance to be ")+"associated with. Lifecycle injection APIs can only be used during execution of setup().")}}function ti(t){return"beforeDestroy"===t?t="beforeUnmount":"destroyed"===t&&(t="unmounted"),"on".concat(t[0].toUpperCase()+t.slice(1))}function ei(t,e,n){var r=t.$options;r[e]=mo(r[e],n)}var ni=Zr("beforeMount"),ri=Zr("mounted"),ii=Zr("beforeUpdate"),oi=Zr("updated"),si=Zr("beforeDestroy"),ai=Zr("destroyed"),ci=Zr("activated"),ui=Zr("deactivated"),li=Zr("serverPrefetch"),hi=Zr("renderTracked"),fi=Zr("renderTriggered"),di=Zr("errorCaptured");function pi(t,e){void 0===e&&(e=mt),di(t,e)}var vi="2.7.13";function mi(t){return t}var gi=Object.freeze({__proto__:null,version:vi,defineComponent:mi,ref:fe,shallowRef:de,isRef:he,toRef:_e,toRefs:be,unref:me,proxyRefs:ge,customRef:we,triggerRef:ve,reactive:qt,isReactive:Kt,isReadonly:Wt,isShallow:Gt,isProxy:Qt,shallowReactive:Ht,markRaw:Xt,toRaw:Jt,readonly:Ce,shallowReadonly:Oe,computed:xe,watch:Ir,watchEffect:br,watchPostEffect:_r,watchSyncEffect:Er,EffectScope:kr,effectScope:Ar,onScopeDispose:Rr,getCurrentScope:xr,provide:Nr,inject:Pr,h:Lr,getCurrentInstance:gt,useSlots:En,useAttrs:Tn,useListeners:Sn,mergeDefaults:Cn,nextTick:Qr,set:ae,del:ce,useCssModule:Jr,useCssVars:Xr,defineAsyncComponent:Yr,onBeforeMount:ni,onMounted:ri,onBeforeUpdate:ii,onUpdated:oi,onBeforeUnmount:si,onUnmounted:ai,onActivated:ci,onDeactivated:ui,onServerPrefetch:li,onRenderTracked:hi,onRenderTriggered:fi,onErrorCaptured:pi}),yi=new pt;function wi(t){return bi(t,yi),yi.clear(),t}function bi(t,n){var r,i,o=e(t);if(!(!o&&!u(t)||t.__v_skip||Object.isFrozen(t)||t instanceof bt)){if(t.__ob__){var s=t.__ob__.dep.id;if(n.has(s))return;n.add(s)}if(o){r=t.length;while(r--)bi(t[r],n)}else if(he(t))bi(t.value,n);else{i=Object.keys(t),r=i.length;while(r--)bi(t[i[r]],n)}}}var _i=0,Ei=function(){function t(t,e,n,r,i){Or(this,Tr&&!Tr._vm?Tr:t?t._scope:void 0),(this.vm=t)&&i&&(t._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before,this.onTrack=r.onTrack,this.onTrigger=r.onTrigger):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++_i,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new pt,this.newDepIds=new pt,this.expression=e.toString(),c(e)?this.getter=e:(this.getter=Y(e),this.getter||(this.getter=M,so('Failed watching path: "'.concat(e,'" ')+"Watcher only accepts simple dot-delimited paths. For full control, use a function instead.",t))),this.value=this.lazy?void 0:this.get()}return t.prototype.get=function(){var t;$t(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Lf){if(!this.user)throw Lf;Mr(Lf,e,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&wi(t),jt(),this.cleanupDeps()}return t},t.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},t.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},t.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():vr(this)},t.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'.concat(this.expression,'"');$r(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},t.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},t.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},t.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&_(this.vm._scope.effects,this),this.active){var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},t}(),Ti={enumerable:!0,configurable:!0,get:M,set:M};function Si(t,e,n){Ti.get=function(){return this[e][n]},Ti.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Ti)}function Ii(t){var e=t.$options;if(e.props&&Ci(t,e.props),mn(t),e.methods&&Pi(t,e.methods),e.data)ki(t);else{var n=oe(t._data={});n&&n.vmCount++}e.computed&&xi(t,e.computed),e.watch&&e.watch!==ct&&Li(t,e.watch)}function Ci(t,e){var n=t.$options.propsData||{},r=t._props=Ht({}),i=t.$options._propKeys=[],o=!t.$parent;o||ne(!1);var s=function(s){i.push(s);var a=Ao(s,e,n,t),c=O(s);(b(c)||G.isReservedAttr(c))&&so('"'.concat(c,'" is a reserved attribute and cannot be used as component prop.'),t),se(r,s,a,(function(){o||Bn||so("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's "+'value. Prop being mutated: "'.concat(s,'"'),t)})),s in t||Si(t,"_props",s)};for(var a in e)s(a);ne(!0)}function ki(t){var e=t.$options.data;e=t._data=c(e)?Ai(e,t):e||{},f(e)||(e={},so("data functions should return an object:\nhttps://v2.vuejs.org/v2/guide/components.html#data-Must-Be-a-Function",t));var n=Object.keys(e),r=t.$options.props,i=t.$options.methods,o=n.length;while(o--){var s=n[o];i&&T(i,s)&&so('Method "'.concat(s,'" has already been defined as a data property.'),t),r&&T(r,s)?so('The data property "'.concat(s,'" is already declared as a prop. ')+"Use prop default value instead.",t):Q(s)||Si(t,"_data",s)}var a=oe(e);a&&a.vmCount++}function Ai(t,e){$t();try{return t.call(e,e)}catch(Lf){return Mr(Lf,e,"data()"),{}}finally{jt()}}var Oi={lazy:!0};function xi(t,e){var n=t._computedWatchers=Object.create(null),r=ht();for(var i in e){var o=e[i],s=c(o)?o:o.get;null==s&&so('Getter is missing for computed property "'.concat(i,'".'),t),r||(n[i]=new Ei(t,s||M,M,Oi)),i in t?i in t.$data?so('The computed property "'.concat(i,'" is already defined in data.'),t):t.$options.props&&i in t.$options.props?so('The computed property "'.concat(i,'" is already defined as a prop.'),t):t.$options.methods&&i in t.$options.methods&&so('The computed property "'.concat(i,'" is already defined as a method.'),t):Ri(t,i,o)}}function Ri(t,e,n){var r=!ht();c(n)?(Ti.get=r?Ni(e):Di(n),Ti.set=M):(Ti.get=n.get?r&&!1!==n.cache?Ni(e):Di(n.get):M,Ti.set=n.set||M),Ti.set===M&&(Ti.set=function(){so('Computed property "'.concat(e,'" was assigned to but it has no setter.'),this)}),Object.defineProperty(t,e,Ti)}function Ni(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),Lt.target&&(Lt.target.onTrack&&Lt.target.onTrack({effect:Lt.target,target:this,type:"get",key:t}),e.depend()),e.value}}function Di(t){return function(){return t.call(this,this)}}function Pi(t,e){var n=t.$options.props;for(var r in e)"function"!==typeof e[r]&&so('Method "'.concat(r,'" has type "').concat(typeof e[r],'" in the component definition. ')+"Did you reference the function correctly?",t),n&&T(n,r)&&so('Method "'.concat(r,'" has already been defined as a prop.'),t),r in t&&Q(r)&&so('Method "'.concat(r,'" conflicts with an existing Vue instance method. ')+"Avoid defining component methods that start with _ or $."),t[r]="function"!==typeof e[r]?M:N(e[r],t)}function Li(t,n){for(var r in n){var i=n[r];if(e(i))for(var o=0;o<i.length;o++)Mi(t,r,i[o]);else Mi(t,r,i)}}function Mi(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function $i(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};e.set=function(){so("Avoid replacing instance root $data. Use nested data properties instead.",this)},n.set=function(){so("$props is readonly.",this)},Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=ae,t.prototype.$delete=ce,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return Mi(r,t,e,n);n=n||{},n.user=!0;var i=new Ei(r,t,e,n);if(n.immediate){var o='callback for immediate watcher "'.concat(i.expression,'"');$t(),$r(e,r,[i.value],r,o),jt()}return function(){i.teardown()}}}function ji(t){var e=t.$options.provide;if(e){var n=c(e)?e.call(t):e;if(!u(n))return;for(var r=Dr(t),i=vt?Reflect.ownKeys(n):Object.keys(n),o=0;o<i.length;o++){var s=i[o];Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(n,s))}}}function Ui(t){var e=Fi(t.$options.inject,t);e&&(ne(!1),Object.keys(e).forEach((function(n){se(t,n,e[n],(function(){so("Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. "+'injection being mutated: "'.concat(n,'"'),t)}))})),ne(!0))}function Fi(t,e){if(t){for(var n=Object.create(null),r=vt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=t[o].from;if(s in e._provided)n[o]=e._provided[s];else if("default"in t[o]){var a=t[o].default;n[o]=c(a)?a.call(e):a}else so('Injection "'.concat(o,'" not found'),e)}}return n}}var Vi=0;function Bi(t){t.prototype._init=function(t){var e,n,r=this;r._uid=Vi++,G.performance&&Ee&&(e="vue-perf-start:".concat(r._uid),n="vue-perf-end:".concat(r._uid),Ee(e)),r._isVue=!0,r.__v_skip=!0,r._scope=new kr(!0),r._scope._vm=!0,t&&t._isComponent?qi(r,t):r.$options=Co(Hi(r.constructor),t||{},r),wt(r),r._self=r,Hn(r),Ln(r),kn(r),Xn(r,"beforeCreate",void 0,!1),Ui(r),Ii(r),ji(r),Xn(r,"created"),G.performance&&Ee&&(r._name=oo(r,!1),Ee(n),Te("vue ".concat(r._name," init"),e,n)),r.$options.el&&r.$mount(r.$options.el)}}function qi(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Hi(t){var e=t.options;if(t.super){var n=Hi(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=zi(t);i&&P(t.extendOptions,i),e=t.options=Co(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function zi(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Ki(n,r,i,s,a){var c,u=this,l=a.options;T(s,"_uid")?(c=Object.create(s),c._original=s):(c=s,s=s._original);var h=o(l._compiled),f=!h;this.data=n,this.props=r,this.children=i,this.parent=s,this.listeners=n.on||t,this.injections=Fi(l.inject,s),this.slots=function(){return u.$slots||dn(s,n.scopedSlots,u.$slots=ln(i,s)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return dn(s,n.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=dn(s,n.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,n,r,i){var o=He(c,t,n,r,i,f);return o&&!e(o)&&(o.fnScopeId=l._scopeId,o.fnContext=s),o}:this._c=function(t,e,n,r){return He(c,t,e,n,r,f)}}function Gi(n,r,o,s,a){var c=n.options,u={},l=c.props;if(i(l))for(var h in l)u[h]=Ao(h,l,r||t);else i(o.attrs)&&Qi(u,o.attrs),i(o.props)&&Qi(u,o.props);var f=new Ki(o,u,a,s,n),d=c.render.call(null,f._c,f);if(d instanceof bt)return Wi(d,o,f.parent,c,f);if(e(d)){for(var p=Ue(d)||[],v=new Array(p.length),m=0;m<p.length;m++)v[m]=Wi(p[m],o,f.parent,c,f);return v}}function Wi(t,e,n,r,i){var o=Tt(t);return o.fnContext=n,o.fnOptions=r,(o.devtoolsMeta=o.devtoolsMeta||{}).renderContext=i,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function Qi(t,e){for(var n in e)t[C(n)]=e[n]}function Ji(t){return t.name||t.__name||t._componentTag}un(Ki.prototype);var Xi={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Xi.prepatch(n,n)}else{var r=t.componentInstance=to(t,Vn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Gn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Xn(n,"mounted")),t.data.keepAlive&&(e._isMounted?dr(n):Qn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Jn(e,!0):e.$destroy())}},Yi=Object.keys(Xi);function Zi(t,e,n,s,a){if(!r(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var l;if(r(t.cid)&&(l=t,t=Dn(l,c),void 0===t))return Nn(l,e,n,s,a);e=e||{},Hi(t),i(e.model)&&ro(t.options,e);var h=Me(e,t,a);if(o(t.options.functional))return Gi(t,h,e,n,s);var f=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}eo(e);var p=Ji(t.options)||a,v=new bt("vue-component-".concat(t.cid).concat(p?"-".concat(p):""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:f,tag:a,children:s},l);return v}so("Invalid Component definition: ".concat(String(t)),n)}}function to(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function eo(t){for(var e=t.hook||(t.hook={}),n=0;n<Yi.length;n++){var r=Yi[n],i=e[r],o=Xi[r];i===o||i&&i._merged||(e[r]=i?no(o,i):o)}}function no(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function ro(t,n){var r=t.model&&t.model.prop||"value",o=t.model&&t.model.event||"input";(n.attrs||(n.attrs={}))[r]=n.model.value;var s=n.on||(n.on={}),a=s[o],c=n.model.callback;i(a)?(e(a)?-1===a.indexOf(c):a!==c)&&(s[o]=[c].concat(a)):s[o]=c}var io,oo,so=M,ao=M,co="undefined"!==typeof console,uo=/(?:^|[-_])(\w)/g,lo=function(t){return t.replace(uo,(function(t){return t.toUpperCase()})).replace(/[-_]/g,"")};so=function(t,e){void 0===e&&(e=mt);var n=e?io(e):"";G.warnHandler?G.warnHandler.call(null,t,e,n):co&&!G.silent&&console.error("[Vue warn]: ".concat(t).concat(n))},ao=function(t,e){co&&!G.silent&&console.warn("[Vue tip]: ".concat(t)+(e?io(e):""))},oo=function(t,e){if(t.$root===t)return"<Root>";var n=c(t)&&null!=t.cid?t.options:t._isVue?t.$options||t.constructor.options:t,r=Ji(n),i=n.__file;if(!r&&i){var o=i.match(/([^/\\]+)\.vue$/);r=o&&o[1]}return(r?"<".concat(lo(r),">"):"<Anonymous>")+(i&&!1!==e?" at ".concat(i):"")};var ho=function(t,e){var n="";while(e)e%2===1&&(n+=t),e>1&&(t+=t),e>>=1;return n};io=function(t){if(t._isVue&&t.$parent){var n=[],r=0;while(t){if(n.length>0){var i=n[n.length-1];if(i.constructor===t.constructor){r++,t=t.$parent;continue}r>0&&(n[n.length-1]=[i,r],r=0)}n.push(t),t=t.$parent}return"\n\nfound in\n\n"+n.map((function(t,n){return"".concat(0===n?"---\x3e ":ho(" ",5+2*n)).concat(e(t)?"".concat(oo(t[0]),"... (").concat(t[1]," recursive calls)"):oo(t))})).join("\n")}return"\n\n(found in ".concat(oo(t),")")};var fo=G.optionMergeStrategies;function po(t,e){if(!e)return t;for(var n,r,i,o=vt?Reflect.ownKeys(e):Object.keys(e),s=0;s<o.length;s++)n=o[s],"__ob__"!==n&&(r=t[n],i=e[n],T(t,n)?r!==i&&f(r)&&f(i)&&po(r,i):ae(t,n,i));return t}function vo(t,e,n){return n?function(){var r=c(e)?e.call(n,n):e,i=c(t)?t.call(n,n):t;return r?po(r,i):i}:e?t?function(){return po(c(e)?e.call(this,this):e,c(t)?t.call(this,this):t)}:e:t}function mo(t,n){var r=n?t?t.concat(n):e(n)?n:[n]:t;return r?go(r):r}function go(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function yo(t,e,n,r){var i=Object.create(t||null);return e?(Io(r,e,n),P(i,e)):i}fo.el=fo.propsData=function(t,e,n,r){return n||so('option "'.concat(r,'" can only be used during instance ')+"creation with the `new` keyword."),wo(t,e)},fo.data=function(t,e,n){return n?vo(t,e,n):e&&"function"!==typeof e?(so('The "data" option should be a function that returns a per-instance value in component definitions.',n),t):vo(t,e)},K.forEach((function(t){fo[t]=mo})),z.forEach((function(t){fo[t+"s"]=yo})),fo.watch=function(t,n,r,i){if(t===ct&&(t=void 0),n===ct&&(n=void 0),!n)return Object.create(t||null);if(Io(i,n,r),!t)return n;var o={};for(var s in P(o,t),n){var a=o[s],c=n[s];a&&!e(a)&&(a=[a]),o[s]=a?a.concat(c):e(c)?c:[c]}return o},fo.props=fo.methods=fo.inject=fo.computed=function(t,e,n,r){if(e&&Io(r,e,n),!t)return e;var i=Object.create(null);return P(i,t),e&&P(i,e),i},fo.provide=vo;var wo=function(t,e){return void 0===e?t:e};function bo(t){for(var e in t.components)_o(e)}function _o(t){new RegExp("^[a-zA-Z][\\-\\.0-9_".concat(W.source,"]*$")).test(t)||so('Invalid component name: "'+t+'". Component names should conform to valid custom element name in html5 specification.'),(w(t)||G.isReservedTag(t))&&so("Do not use built-in or reserved HTML elements as component id: "+t)}function Eo(t,n){var r=t.props;if(r){var i,o,s,a={};if(e(r)){i=r.length;while(i--)o=r[i],"string"===typeof o?(s=C(o),a[s]={type:null}):so("props must be strings when using array syntax.")}else if(f(r))for(var c in r)o=r[c],s=C(c),a[s]=f(o)?o:{type:o};else so('Invalid value for option "props": expected an Array or an Object, '+"but got ".concat(h(r),"."),n);t.props=a}}function To(t,n){var r=t.inject;if(r){var i=t.inject={};if(e(r))for(var o=0;o<r.length;o++)i[r[o]]={from:r[o]};else if(f(r))for(var s in r){var a=r[s];i[s]=f(a)?P({from:s},a):{from:a}}else so('Invalid value for option "inject": expected an Array or an Object, '+"but got ".concat(h(r),"."),n)}}function So(t){var e=t.directives;if(e)for(var n in e){var r=e[n];c(r)&&(e[n]={bind:r,update:r})}}function Io(t,e,n){f(e)||so('Invalid value for option "'.concat(t,'": expected an Object, ')+"but got ".concat(h(e),"."),n)}function Co(t,e,n){if(bo(e),c(e)&&(e=e.options),Eo(e,n),To(e,n),So(e),!e._base&&(e.extends&&(t=Co(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Co(t,e.mixins[r],n);var o,s={};for(o in t)a(o);for(o in e)T(t,o)||a(o);function a(r){var i=fo[r]||wo;s[r]=i(t[r],e[r],n,r)}return s}function ko(t,e,n,r){if("string"===typeof n){var i=t[e];if(T(i,n))return i[n];var o=C(n);if(T(i,o))return i[o];var s=k(o);if(T(i,s))return i[s];var a=i[n]||i[o]||i[s];return r&&!a&&so("Failed to resolve "+e.slice(0,-1)+": "+n),a}}function Ao(t,e,n,r){var i=e[t],o=!T(n,t),s=n[t],a=Mo(Boolean,i.type);if(a>-1)if(o&&!T(i,"default"))s=!1;else if(""===s||s===O(t)){var c=Mo(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=Oo(r,i,t);var u=ee;ne(!0),oe(s),ne(u)}return xo(i,t,s,r,o),s}function Oo(t,e,n){if(T(e,"default")){var r=e.default;return u(r)&&so('Invalid default value for prop "'+n+'": Props with type Object/Array must use a factory function to return the default value.',t),t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:c(r)&&"Function"!==Po(e.type)?r.call(t):r}}function xo(t,n,r,i,o){if(t.required&&o)so('Missing required prop: "'+n+'"',i);else if(null!=r||t.required){var s=t.type,a=!s||!0===s,c=[];if(s){e(s)||(s=[s]);for(var u=0;u<s.length&&!a;u++){var l=No(r,s[u],i);c.push(l.expectedType||""),a=l.valid}}var h=c.some((function(t){return t}));if(a||!h){var f=t.validator;f&&(f(r)||so('Invalid prop: custom validator check failed for prop "'+n+'".',i))}else so($o(n,r,c),i)}}var Ro=/^(String|Number|Boolean|Function|Symbol|BigInt)$/;function No(t,n,r){var i,o=Po(n);if(Ro.test(o)){var s=typeof t;i=s===o.toLowerCase(),i||"object"!==s||(i=t instanceof n)}else if("Object"===o)i=f(t);else if("Array"===o)i=e(t);else try{i=t instanceof n}catch(Lf){so('Invalid prop type: "'+String(n)+'" is not a constructor',r),i=!1}return{valid:i,expectedType:o}}var Do=/^\s*function (\w+)/;function Po(t){var e=t&&t.toString().match(Do);return e?e[1]:""}function Lo(t,e){return Po(t)===Po(e)}function Mo(t,n){if(!e(n))return Lo(n,t)?0:-1;for(var r=0,i=n.length;r<i;r++)if(Lo(n[r],t))return r;return-1}function $o(t,e,n){var r='Invalid prop: type check failed for prop "'.concat(t,'".')+" Expected ".concat(n.map(k).join(", ")),i=n[0],o=h(e);return 1===n.length&&Fo(i)&&Fo(typeof e)&&!Vo(i,o)&&(r+=" with value ".concat(jo(e,i))),r+=", got ".concat(o," "),Fo(o)&&(r+="with value ".concat(jo(e,o),".")),r}function jo(t,e){return"String"===e?'"'.concat(t,'"'):"".concat("Number"===e?Number(t):t)}var Uo=["string","number","boolean"];function Fo(t){return Uo.some((function(e){return t.toLowerCase()===e}))}function Vo(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.some((function(t){return"boolean"===t.toLowerCase()}))}function Bo(t){this instanceof Bo||so("Vue is a constructor and should be called with the `new` keyword"),this._init(t)}function qo(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=D(arguments,1);return n.unshift(this),c(t.install)?t.install.apply(t,n):c(t)&&t.apply(null,n),e.push(t),this}}function Ho(t){t.mixin=function(t){return this.options=Co(this.options,t),this}}function zo(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=Ji(t)||Ji(n.options);o&&_o(o);var s=function(t){this._init(t)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=e++,s.options=Co(n.options,t),s["super"]=n,s.options.props&&Ko(s),s.options.computed&&Go(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,z.forEach((function(t){s[t]=n[t]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=t,s.sealedOptions=P({},s.options),i[r]=s,s}}function Ko(t){var e=t.options.props;for(var n in e)Si(t.prototype,"_props",n)}function Go(t){var e=t.options.computed;for(var n in e)Ri(t.prototype,n,e[n])}function Wo(t){z.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&_o(t),"component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&c(n)&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function Qo(t){return t&&(Ji(t.Ctor.options)||t.tag)}function Jo(t,n){return e(t)?t.indexOf(n)>-1:"string"===typeof t?t.split(",").indexOf(n)>-1:!!d(t)&&t.test(n)}function Xo(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!e(a)&&Yo(n,o,r,i)}}}function Yo(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,_(n,e)}Bi(Bo),$i(Bo),Fn(Bo),zn(Bo),xn(Bo);var Zo=[String,RegExp,Array],ts={name:"keep-alive",abstract:!0,props:{include:Zo,exclude:Zo,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;e[i]={name:Qo(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&Yo(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Yo(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Xo(t,(function(t){return Jo(e,t)}))})),this.$watch("exclude",(function(e){Xo(t,(function(t){return!Jo(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Pn(t),n=e&&e.componentOptions;if(n){var r=Qo(n),i=this,o=i.include,s=i.exclude;if(o&&(!r||!Jo(o,r))||s&&r&&Jo(s,r))return e;var a=this,c=a.cache,u=a.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,_(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},es={KeepAlive:ts};function ns(t){var e={get:function(){return G},set:function(){so("Do not replace the Vue.config object, set individual fields instead.")}};Object.defineProperty(t,"config",e),t.util={warn:so,extend:P,mergeOptions:Co,defineReactive:se},t.set=ae,t.delete=ce,t.nextTick=Qr,t.observable=function(t){return oe(t),t},t.options=Object.create(null),z.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,P(t.options.components,es),qo(t),Ho(t),zo(t),Wo(t)}ns(Bo),Object.defineProperty(Bo.prototype,"$isServer",{get:ht}),Object.defineProperty(Bo.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Bo,"FunctionalRenderContext",{value:Ki}),Bo.version=vi;var rs=y("style,class"),is=y("input,textarea,option,select,progress"),os=function(t,e,n){return"value"===n&&is(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},ss=y("contenteditable,draggable,spellcheck"),as=y("events,caret,typing,plaintext-only"),cs=function(t,e){return ds(e)||"false"===e?"false":"contenteditable"===t&&as(e)?e:"true"},us=y("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),ls="http://www.w3.org/1999/xlink",hs=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},fs=function(t){return hs(t)?t.slice(6,t.length):""},ds=function(t){return null==t||!1===t};function ps(t){var e=t.data,n=t,r=t;while(i(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=vs(r.data,e));while(i(n=n.parent))n&&n.data&&(e=vs(e,n.data));return ms(e.staticClass,e.class)}function vs(t,e){return{staticClass:gs(t.staticClass,e.staticClass),class:i(t.class)?[t.class,e.class]:e.class}}function ms(t,e){return i(t)||i(e)?gs(t,ys(e)):""}function gs(t,e){return t?e?t+" "+e:t:e||""}function ys(t){return Array.isArray(t)?ws(t):u(t)?bs(t):"string"===typeof t?t:""}function ws(t){for(var e,n="",r=0,o=t.length;r<o;r++)i(e=ys(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function bs(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var _s={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Es=y("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Ts=y("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Ss=function(t){return"pre"===t},Is=function(t){return Es(t)||Ts(t)};function Cs(t){return Ts(t)?"svg":"math"===t?"math":void 0}var ks=Object.create(null);function As(t){if(!tt)return!0;if(Is(t))return!1;if(t=t.toLowerCase(),null!=ks[t])return ks[t];var e=document.createElement(t);return t.indexOf("-")>-1?ks[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:ks[t]=/HTMLUnknownElement/.test(e.toString())}var Os=y("text,number,password,search,email,tel,url");function xs(t){if("string"===typeof t){var e=document.querySelector(t);return e||(so("Cannot find element: "+t),document.createElement("div"))}return t}function Rs(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function Ns(t,e){return document.createElementNS(_s[t],e)}function Ds(t){return document.createTextNode(t)}function Ps(t){return document.createComment(t)}function Ls(t,e,n){t.insertBefore(e,n)}function Ms(t,e){t.removeChild(e)}function $s(t,e){t.appendChild(e)}function js(t){return t.parentNode}function Us(t){return t.nextSibling}function Fs(t){return t.tagName}function Vs(t,e){t.textContent=e}function Bs(t,e){t.setAttribute(e,"")}var qs=Object.freeze({__proto__:null,createElement:Rs,createElementNS:Ns,createTextNode:Ds,createComment:Ps,insertBefore:Ls,removeChild:Ms,appendChild:$s,parentNode:js,nextSibling:Us,tagName:Fs,setTextContent:Vs,setStyleScope:Bs}),Hs={create:function(t,e){zs(e)},update:function(t,e){t.data.ref!==e.data.ref&&(zs(t,!0),zs(e))},destroy:function(t){zs(t,!0)}};function zs(t,n){var r=t.data.ref;if(i(r)){var o=t.context,s=t.componentInstance||t.elm,a=n?null:s,u=n?void 0:s;if(c(r))$r(r,o,[a],o,"template ref function");else{var l=t.data.refInFor,h="string"===typeof r||"number"===typeof r,f=he(r),d=o.$refs;if(h||f)if(l){var p=h?d[r]:r.value;n?e(p)&&_(p,s):e(p)?p.includes(s)||p.push(s):h?(d[r]=[s],Ks(o,r,d[r])):r.value=[s]}else if(h){if(n&&d[r]!==s)return;d[r]=u,Ks(o,r,a)}else if(f){if(n&&r.value!==s)return;r.value=a}else so("Invalid template ref type: ".concat(typeof r))}}}function Ks(t,e,n){var r=t._setupState;r&&T(r,e)&&(he(r[e])?r[e].value=n:r[e]=n)}var Gs=new bt("",{},[]),Ws=["create","activate","update","remove","destroy"];function Qs(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&Js(t,e)||o(t.isAsyncPlaceholder)&&r(e.asyncFactory.error))}function Js(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,o=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===o||Os(r)&&Os(o)}function Xs(t,e,n){var r,o,s={};for(r=e;r<=n;++r)o=t[r].key,i(o)&&(s[o]=r);return s}function Ys(t){var n,s,c={},u=t.modules,l=t.nodeOps;for(n=0;n<Ws.length;++n)for(c[Ws[n]]=[],s=0;s<u.length;++s)i(u[s][Ws[n]])&&c[Ws[n]].push(u[s][Ws[n]]);function h(t){return new bt(l.tagName(t).toLowerCase(),{},[],void 0,t)}function f(t,e){function n(){0===--n.listeners&&p(t)}return n.listeners=e,n}function p(t){var e=l.parentNode(t);i(e)&&l.removeChild(e,t)}function v(t,e){return!e&&!t.ns&&!(G.ignoredElements.length&&G.ignoredElements.some((function(e){return d(e)?e.test(t.tag):e===t.tag})))&&G.isUnknownElement(t.tag)}var m=0;function g(t,e,n,r,s,a,c){if(i(t.elm)&&i(a)&&(t=a[c]=Tt(t)),t.isRootInsert=!s,!w(t,e,n,r)){var u=t.data,h=t.children,f=t.tag;i(f)?(u&&u.pre&&m++,v(t,m)&&so("Unknown custom element: <"+f+'> - did you register the component correctly? For recursive components, make sure to provide the "name" option.',t.context),t.elm=t.ns?l.createElementNS(t.ns,f):l.createElement(f,t),C(t),T(t,h,e),i(u)&&I(t,e),E(n,t.elm,r),u&&u.pre&&m--):o(t.isComment)?(t.elm=l.createComment(t.text),E(n,t.elm,r)):(t.elm=l.createTextNode(t.text),E(n,t.elm,r))}}function w(t,e,n,r){var s=t.data;if(i(s)){var a=i(t.componentInstance)&&s.keepAlive;if(i(s=s.hook)&&i(s=s.init)&&s(t,!1),i(t.componentInstance))return b(t,e),E(n,t.elm,r),o(a)&&_(t,e,n,r),!0}}function b(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,S(t)?(I(t,e),C(t)):(zs(t),e.push(t))}function _(t,e,n,r){var o,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,i(o=s.data)&&i(o=o.transition)){for(o=0;o<c.activate.length;++o)c.activate[o](Gs,s);e.push(s);break}E(n,t.elm,r)}function E(t,e,n){i(t)&&(i(n)?l.parentNode(n)===t&&l.insertBefore(t,e,n):l.appendChild(t,e))}function T(t,n,r){if(e(n)){N(n);for(var i=0;i<n.length;++i)g(n[i],r,t.elm,null,!0,n,i)}else a(t.text)&&l.appendChild(t.elm,l.createTextNode(String(t.text)))}function S(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function I(t,e){for(var r=0;r<c.create.length;++r)c.create[r](Gs,t);n=t.data.hook,i(n)&&(i(n.create)&&n.create(Gs,t),i(n.insert)&&e.push(t))}function C(t){var e;if(i(e=t.fnScopeId))l.setStyleScope(t.elm,e);else{var n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e),n=n.parent}i(e=Vn)&&e!==t.context&&e!==t.fnContext&&i(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e)}function k(t,e,n,r,i,o){for(;r<=i;++r)g(n[r],o,t,e,!1,n,r)}function A(t){var e,n,r=t.data;if(i(r))for(i(e=r.hook)&&i(e=e.destroy)&&e(t),e=0;e<c.destroy.length;++e)c.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)A(t.children[n])}function O(t,e,n){for(;e<=n;++e){var r=t[e];i(r)&&(i(r.tag)?(x(r),A(r)):p(r.elm))}}function x(t,e){if(i(e)||i(t.data)){var n,r=c.remove.length+1;for(i(e)?e.listeners+=r:e=f(t.elm,r),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&x(n,e),n=0;n<c.remove.length;++n)c.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else p(t.elm)}function R(t,e,n,o,s){var a,c,u,h,f=0,d=0,p=e.length-1,v=e[0],m=e[p],y=n.length-1,w=n[0],b=n[y],_=!s;N(n);while(f<=p&&d<=y)r(v)?v=e[++f]:r(m)?m=e[--p]:Qs(v,w)?(P(v,w,o,n,d),v=e[++f],w=n[++d]):Qs(m,b)?(P(m,b,o,n,y),m=e[--p],b=n[--y]):Qs(v,b)?(P(v,b,o,n,y),_&&l.insertBefore(t,v.elm,l.nextSibling(m.elm)),v=e[++f],b=n[--y]):Qs(m,w)?(P(m,w,o,n,d),_&&l.insertBefore(t,m.elm,v.elm),m=e[--p],w=n[++d]):(r(a)&&(a=Xs(e,f,p)),c=i(w.key)?a[w.key]:D(w,e,f,p),r(c)?g(w,o,t,v.elm,!1,n,d):(u=e[c],Qs(u,w)?(P(u,w,o,n,d),e[c]=void 0,_&&l.insertBefore(t,u.elm,v.elm)):g(w,o,t,v.elm,!1,n,d)),w=n[++d]);f>p?(h=r(n[y+1])?null:n[y+1].elm,k(t,h,n,d,y,o)):d>y&&O(e,f,p)}function N(t){for(var e={},n=0;n<t.length;n++){var r=t[n],o=r.key;i(o)&&(e[o]?so("Duplicate keys detected: '".concat(o,"'. This may cause an update error."),r.context):e[o]=!0)}}function D(t,e,n,r){for(var o=n;o<r;o++){var s=e[o];if(i(s)&&Qs(t,s))return o}}function P(t,e,n,s,a,u){if(t!==e){i(e.elm)&&i(s)&&(e=s[a]=Tt(e));var h=e.elm=t.elm;if(o(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?j(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(o(e.isStatic)&&o(t.isStatic)&&e.key===t.key&&(o(e.isCloned)||o(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,d=e.data;i(d)&&i(f=d.hook)&&i(f=f.prepatch)&&f(t,e);var p=t.children,v=e.children;if(i(d)&&S(e)){for(f=0;f<c.update.length;++f)c.update[f](t,e);i(f=d.hook)&&i(f=f.update)&&f(t,e)}r(e.text)?i(p)&&i(v)?p!==v&&R(h,p,v,n,u):i(v)?(N(v),i(t.text)&&l.setTextContent(h,""),k(h,null,v,0,v.length-1,n)):i(p)?O(p,0,p.length-1):i(t.text)&&l.setTextContent(h,""):t.text!==e.text&&l.setTextContent(h,e.text),i(d)&&i(f=d.hook)&&i(f=f.postpatch)&&f(t,e)}}}function L(t,e,n){if(o(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var M=!1,$=y("attrs,class,staticClass,staticStyle,key");function j(t,e,n,r){var s,a=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,o(e.isComment)&&i(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(!U(t,e,r))return!1;if(i(c)&&(i(s=c.hook)&&i(s=s.init)&&s(e,!0),i(s=e.componentInstance)))return b(e,n),!0;if(i(a)){if(i(u))if(t.hasChildNodes())if(i(s=c)&&i(s=s.domProps)&&i(s=s.innerHTML)){if(s!==t.innerHTML)return"undefined"===typeof console||M||(M=!0,console.warn("Parent: ",t),console.warn("server innerHTML: ",s),console.warn("client innerHTML: ",t.innerHTML)),!1}else{for(var l=!0,h=t.firstChild,f=0;f<u.length;f++){if(!h||!j(h,u[f],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return"undefined"===typeof console||M||(M=!0,console.warn("Parent: ",t),console.warn("Mismatching childNodes vs. VNodes: ",t.childNodes,u)),!1}else T(e,u,n);if(i(c)){var d=!1;for(var p in c)if(!$(p)){d=!0,I(e,n);break}!d&&c["class"]&&wi(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}function U(t,e,n){return i(e.tag)?0===e.tag.indexOf("vue-component")||!v(e,n)&&e.tag.toLowerCase()===(t.tagName&&t.tagName.toLowerCase()):t.nodeType===(e.isComment?8:3)}return function(t,e,n,s){if(!r(e)){var a=!1,u=[];if(r(t))a=!0,g(e,u);else{var f=i(t.nodeType);if(!f&&Qs(t,e))P(t,e,u,null,null,s);else{if(f){if(1===t.nodeType&&t.hasAttribute(H)&&(t.removeAttribute(H),n=!0),o(n)){if(j(t,e,u))return L(e,u,!0),t;so("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.")}t=h(t)}var d=t.elm,p=l.parentNode(d);if(g(e,u,d._leaveCb?null:p,l.nextSibling(d)),i(e.parent)){var v=e.parent,m=S(e);while(v){for(var y=0;y<c.destroy.length;++y)c.destroy[y](v);if(v.elm=e.elm,m){for(var w=0;w<c.create.length;++w)c.create[w](Gs,v);var b=v.data.hook.insert;if(b.merged)for(var _=1;_<b.fns.length;_++)b.fns[_]()}else zs(v);v=v.parent}}i(p)?O([t],0,0):i(t.tag)&&A(t)}}return L(e,u,a),e.elm}i(t)&&A(t)}}var Zs={create:ta,update:ta,destroy:function(t){ta(t,Gs)}};function ta(t,e){(t.data.directives||e.data.directives)&&ea(t,e)}function ea(t,e){var n,r,i,o=t===Gs,s=e===Gs,a=ra(t.data.directives,t.context),c=ra(e.data.directives,e.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,oa(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(oa(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)oa(u[n],"inserted",e,t)};o?Le(e,"insert",h):h()}if(l.length&&Le(e,"postpatch",(function(){for(var n=0;n<l.length;n++)oa(l[n],"componentUpdated",e,t)})),!o)for(n in a)c[n]||oa(a[n],"unbind",t,t,s)}var na=Object.create(null);function ra(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++){if(r=t[n],r.modifiers||(r.modifiers=na),i[ia(r)]=r,e._setupState&&e._setupState.__sfc){var o=r.def||ko(e,"_setupState","v-"+r.name);r.def="function"===typeof o?{bind:o,update:o}:o}r.def=r.def||ko(e.$options,"directives",r.name,!0)}return i}function ia(t){return t.rawName||"".concat(t.name,".").concat(Object.keys(t.modifiers||{}).join("."))}function oa(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(Lf){Mr(Lf,n.context,"directive ".concat(t.name," ").concat(e," hook"))}}var sa=[Hs,Zs];function aa(t,e){var n=e.componentOptions;if((!i(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(t.data.attrs)||!r(e.data.attrs))){var s,a,c,u=e.elm,l=t.data.attrs||{},h=e.data.attrs||{};for(s in(i(h.__ob__)||o(h._v_attr_proxy))&&(h=e.data.attrs=P({},h)),h)a=h[s],c=l[s],c!==a&&ca(u,s,a,e.data.pre);for(s in(nt||it)&&h.value!==l.value&&ca(u,"value",h.value),l)r(h[s])&&(hs(s)?u.removeAttributeNS(ls,fs(s)):ss(s)||u.removeAttribute(s))}}function ca(t,e,n,r){r||t.tagName.indexOf("-")>-1?ua(t,e,n):us(e)?ds(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):ss(e)?t.setAttribute(e,cs(e,n)):hs(e)?ds(n)?t.removeAttributeNS(ls,fs(e)):t.setAttributeNS(ls,e,n):ua(t,e,n)}function ua(t,e,n){if(ds(n))t.removeAttribute(e);else{if(nt&&!rt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var la={create:aa,update:aa};function ha(t,e){var n=e.elm,o=e.data,s=t.data;if(!(r(o.staticClass)&&r(o.class)&&(r(s)||r(s.staticClass)&&r(s.class)))){var a=ps(e),c=n._transitionClasses;i(c)&&(a=gs(a,ys(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var fa,da,pa,va,ma,ga,ya,wa={create:ha,update:ha},ba=/[\w).+\-_$\]]/;function _a(t){var e,n,r,i,o,s=!1,a=!1,c=!1,u=!1,l=0,h=0,f=0,d=0;for(r=0;r<t.length;r++)if(n=e,e=t.charCodeAt(r),s)39===e&&92!==n&&(s=!1);else if(a)34===e&&92!==n&&(a=!1);else if(c)96===e&&92!==n&&(c=!1);else if(u)47===e&&92!==n&&(u=!1);else if(124!==e||124===t.charCodeAt(r+1)||124===t.charCodeAt(r-1)||l||h||f){switch(e){case 34:a=!0;break;case 39:s=!0;break;case 96:c=!0;break;case 40:f++;break;case 41:f--;break;case 91:h++;break;case 93:h--;break;case 123:l++;break;case 125:l--;break}if(47===e){for(var p=r-1,v=void 0;p>=0;p--)if(v=t.charAt(p)," "!==v)break;v&&ba.test(v)||(u=!0)}}else void 0===i?(d=r+1,i=t.slice(0,r).trim()):m();function m(){(o||(o=[])).push(t.slice(d,r).trim()),d=r+1}if(void 0===i?i=t.slice(0,r).trim():0!==d&&m(),o)for(r=0;r<o.length;r++)i=Ea(i,o[r]);return i}function Ea(t,e){var n=e.indexOf("(");if(n<0)return'_f("'.concat(e,'")(').concat(t,")");var r=e.slice(0,n),i=e.slice(n+1);return'_f("'.concat(r,'")(').concat(t).concat(")"!==i?","+i:i)}function Ta(t,e){console.error("[Vue compiler]: ".concat(t))}function Sa(t,e){return t?t.map((function(t){return t[e]})).filter((function(t){return t})):[]}function Ia(t,e,n,r,i){(t.props||(t.props=[])).push(La({name:e,value:n,dynamic:i},r)),t.plain=!1}function Ca(t,e,n,r,i){var o=i?t.dynamicAttrs||(t.dynamicAttrs=[]):t.attrs||(t.attrs=[]);o.push(La({name:e,value:n,dynamic:i},r)),t.plain=!1}function ka(t,e,n,r){t.attrsMap[e]=n,t.attrsList.push(La({name:e,value:n},r))}function Aa(t,e,n,r,i,o,s,a){(t.directives||(t.directives=[])).push(La({name:e,rawName:n,value:r,arg:i,isDynamicArg:o,modifiers:s},a)),t.plain=!1}function Oa(t,e,n){return n?"_p(".concat(e,',"').concat(t,'")'):t+e}function xa(e,n,r,i,o,s,a,c){var u;i=i||t,s&&i.prevent&&i.passive&&s("passive and prevent can't be used together. Passive handler can't prevent default event.",a),i.right?c?n="(".concat(n,")==='click'?'contextmenu':(").concat(n,")"):"click"===n&&(n="contextmenu",delete i.right):i.middle&&(c?n="(".concat(n,")==='click'?'mouseup':(").concat(n,")"):"click"===n&&(n="mouseup")),i.capture&&(delete i.capture,n=Oa("!",n,c)),i.once&&(delete i.once,n=Oa("~",n,c)),i.passive&&(delete i.passive,n=Oa("&",n,c)),i.native?(delete i.native,u=e.nativeEvents||(e.nativeEvents={})):u=e.events||(e.events={});var l=La({value:r.trim(),dynamic:c},a);i!==t&&(l.modifiers=i);var h=u[n];Array.isArray(h)?o?h.unshift(l):h.push(l):u[n]=h?o?[l,h]:[h,l]:l,e.plain=!1}function Ra(t,e){return t.rawAttrsMap[":"+e]||t.rawAttrsMap["v-bind:"+e]||t.rawAttrsMap[e]}function Na(t,e,n){var r=Da(t,":"+e)||Da(t,"v-bind:"+e);if(null!=r)return _a(r);if(!1!==n){var i=Da(t,e);if(null!=i)return JSON.stringify(i)}}function Da(t,e,n){var r;if(null!=(r=t.attrsMap[e]))for(var i=t.attrsList,o=0,s=i.length;o<s;o++)if(i[o].name===e){i.splice(o,1);break}return n&&delete t.attrsMap[e],r}function Pa(t,e){for(var n=t.attrsList,r=0,i=n.length;r<i;r++){var o=n[r];if(e.test(o.name))return n.splice(r,1),o}}function La(t,e){return e&&(null!=e.start&&(t.start=e.start),null!=e.end&&(t.end=e.end)),t}function Ma(t,e,n){var r=n||{},i=r.number,o=r.trim,s="$$v",a=s;o&&(a="(typeof ".concat(s," === 'string'")+"? ".concat(s,".trim()")+": ".concat(s,")")),i&&(a="_n(".concat(a,")"));var c=$a(e,a);t.model={value:"(".concat(e,")"),expression:JSON.stringify(e),callback:"function (".concat(s,") {").concat(c,"}")}}function $a(t,e){var n=ja(t);return null===n.key?"".concat(t,"=").concat(e):"$set(".concat(n.exp,", ").concat(n.key,", ").concat(e,")")}function ja(t){if(t=t.trim(),fa=t.length,t.indexOf("[")<0||t.lastIndexOf("]")<fa-1)return va=t.lastIndexOf("."),va>-1?{exp:t.slice(0,va),key:'"'+t.slice(va+1)+'"'}:{exp:t,key:null};da=t,va=ma=ga=0;while(!Fa())pa=Ua(),Va(pa)?qa(pa):91===pa&&Ba(pa);return{exp:t.slice(0,ma),key:t.slice(ma+1,ga)}}function Ua(){return da.charCodeAt(++va)}function Fa(){return va>=fa}function Va(t){return 34===t||39===t}function Ba(t){var e=1;ma=va;while(!Fa())if(t=Ua(),Va(t))qa(t);else if(91===t&&e++,93===t&&e--,0===e){ga=va;break}}function qa(t){var e=t;while(!Fa())if(t=Ua(),t===e)break}var Ha,za="__r",Ka="__c";function Ga(t,e,n){ya=n;var r=e.value,i=e.modifiers,o=t.tag,s=t.attrsMap.type;if("input"===o&&"file"===s&&ya("<".concat(t.tag,' v-model="').concat(r,'" type="file">:\n')+"File inputs are read only. Use a v-on:change listener instead.",t.rawAttrsMap["v-model"]),t.component)return Ma(t,r,i),!1;if("select"===o)Ja(t,r,i);else if("input"===o&&"checkbox"===s)Wa(t,r,i);else if("input"===o&&"radio"===s)Qa(t,r,i);else if("input"===o||"textarea"===o)Xa(t,r,i);else{if(!G.isReservedTag(o))return Ma(t,r,i),!1;ya("<".concat(t.tag,' v-model="').concat(r,'">: ')+"v-model is not supported on this element type. If you are working with contenteditable, it's recommended to wrap a library dedicated for that purpose inside a custom component.",t.rawAttrsMap["v-model"])}return!0}function Wa(t,e,n){var r=n&&n.number,i=Na(t,"value")||"null",o=Na(t,"true-value")||"true",s=Na(t,"false-value")||"false";Ia(t,"checked","Array.isArray(".concat(e,")")+"?_i(".concat(e,",").concat(i,")>-1")+("true"===o?":(".concat(e,")"):":_q(".concat(e,",").concat(o,")"))),xa(t,"change","var $$a=".concat(e,",")+"$$el=$event.target,"+"$$c=$$el.checked?(".concat(o,"):(").concat(s,");")+"if(Array.isArray($$a)){"+"var $$v=".concat(r?"_n("+i+")":i,",")+"$$i=_i($$a,$$v);"+"if($$el.checked){$$i<0&&(".concat($a(e,"$$a.concat([$$v])"),")}")+"else{$$i>-1&&(".concat($a(e,"$$a.slice(0,$$i).concat($$a.slice($$i+1))"),")}")+"}else{".concat($a(e,"$$c"),"}"),null,!0)}function Qa(t,e,n){var r=n&&n.number,i=Na(t,"value")||"null";i=r?"_n(".concat(i,")"):i,Ia(t,"checked","_q(".concat(e,",").concat(i,")")),xa(t,"change",$a(e,i),null,!0)}function Ja(t,e,n){var r=n&&n.number,i='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;'+"return ".concat(r?"_n(val)":"val","})"),o="$event.target.multiple ? $$selectedVal : $$selectedVal[0]",s="var $$selectedVal = ".concat(i,";");s="".concat(s," ").concat($a(e,o)),xa(t,"change",s,null,!0)}function Xa(t,e,n){var r=t.attrsMap.type,i=t.attrsMap["v-bind:value"]||t.attrsMap[":value"],o=t.attrsMap["v-bind:type"]||t.attrsMap[":type"];if(i&&!o){var s=t.attrsMap["v-bind:value"]?"v-bind:value":":value";ya("".concat(s,'="').concat(i,'" conflicts with v-model on the same element ')+"because the latter already expands to a value binding internally",t.rawAttrsMap[s])}var a=n||{},c=a.lazy,u=a.number,l=a.trim,h=!c&&"range"!==r,f=c?"change":"range"===r?za:"input",d="$event.target.value";l&&(d="$event.target.value.trim()"),u&&(d="_n(".concat(d,")"));var p=$a(e,d);h&&(p="if($event.target.composing)return;".concat(p)),Ia(t,"value","(".concat(e,")")),xa(t,f,p,null,!0),(l||u)&&xa(t,"blur","$forceUpdate()")}function Ya(t){if(i(t[za])){var e=nt?"change":"input";t[e]=[].concat(t[za],t[e]||[]),delete t[za]}i(t[Ka])&&(t.change=[].concat(t[Ka],t.change||[]),delete t[Ka])}function Za(t,e,n){var r=Ha;return function i(){var o=e.apply(null,arguments);null!==o&&nc(t,i,n,r)}}var tc=Vr&&!(at&&Number(at[1])<=53);function ec(t,e,n,r){if(tc){var i=ar,o=e;e=o._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return o.apply(this,arguments)}}Ha.addEventListener(t,e,ut?{capture:n,passive:r}:n)}function nc(t,e,n,r){(r||Ha).removeEventListener(t,e._wrapper||e,n)}function rc(t,e){if(!r(t.data.on)||!r(e.data.on)){var n=e.data.on||{},i=t.data.on||{};Ha=e.elm||t.elm,Ya(n),Pe(n,i,ec,nc,Za,e.context),Ha=void 0}}var ic,oc={create:rc,update:rc,destroy:function(t){return rc(t,Gs)}};function sc(t,e){if(!r(t.data.domProps)||!r(e.data.domProps)){var n,s,a=e.elm,c=t.data.domProps||{},u=e.data.domProps||{};for(n in(i(u.__ob__)||o(u._v_attr_proxy))&&(u=e.data.domProps=P({},u)),c)n in u||(a[n]="");for(n in u){if(s=u[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),s===c[n])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===n&&"PROGRESS"!==a.tagName){a._value=s;var l=r(s)?"":String(s);ac(a,l)&&(a.value=l)}else if("innerHTML"===n&&Ts(a.tagName)&&r(a.innerHTML)){ic=ic||document.createElement("div"),ic.innerHTML="<svg>".concat(s,"</svg>");var h=ic.firstChild;while(a.firstChild)a.removeChild(a.firstChild);while(h.firstChild)a.appendChild(h.firstChild)}else if(s!==c[n])try{a[n]=s}catch(Lf){}}}}function ac(t,e){return!t.composing&&("OPTION"===t.tagName||cc(t,e)||uc(t,e))}function cc(t,e){var n=!0;try{n=document.activeElement!==t}catch(Lf){}return n&&t.value!==e}function uc(t,e){var n=t.value,r=t._vModifiers;if(i(r)){if(r.number)return g(n)!==g(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var lc={create:sc,update:sc},hc=S((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function fc(t){var e=dc(t.style);return t.staticStyle?P(t.staticStyle,e):e}function dc(t){return Array.isArray(t)?L(t):"string"===typeof t?hc(t):t}function pc(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=fc(i.data))&&P(r,n)}(n=fc(t.data))&&P(r,n);var o=t;while(o=o.parent)o.data&&(n=fc(o.data))&&P(r,n);return r}var vc,mc=/^--/,gc=/\s*!important$/,yc=function(t,e,n){if(mc.test(e))t.style.setProperty(e,n);else if(gc.test(n))t.style.setProperty(O(e),n.replace(gc,""),"important");else{var r=bc(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},wc=["Webkit","Moz","ms"],bc=S((function(t){if(vc=vc||document.createElement("div").style,t=C(t),"filter"!==t&&t in vc)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<wc.length;n++){var r=wc[n]+e;if(r in vc)return r}}));function _c(t,e){var n=e.data,o=t.data;if(!(r(n.staticStyle)&&r(n.style)&&r(o.staticStyle)&&r(o.style))){var s,a,c=e.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},h=u||l,f=dc(e.data.style)||{};e.data.normalizedStyle=i(f.__ob__)?P({},f):f;var d=pc(e,!0);for(a in h)r(d[a])&&yc(c,a,"");for(a in d)s=d[a],s!==h[a]&&yc(c,a,null==s?"":s)}}var Ec={create:_c,update:_c},Tc=/\s+/;function Sc(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Tc).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" ".concat(t.getAttribute("class")||""," ");n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Ic(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Tc).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" ".concat(t.getAttribute("class")||""," "),r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Cc(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&P(e,kc(t.name||"v")),P(e,t),e}return"string"===typeof t?kc(t):void 0}}var kc=S((function(t){return{enterClass:"".concat(t,"-enter"),enterToClass:"".concat(t,"-enter-to"),enterActiveClass:"".concat(t,"-enter-active"),leaveClass:"".concat(t,"-leave"),leaveToClass:"".concat(t,"-leave-to"),leaveActiveClass:"".concat(t,"-leave-active")}})),Ac=tt&&!rt,Oc="transition",xc="animation",Rc="transition",Nc="transitionend",Dc="animation",Pc="animationend";Ac&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Rc="WebkitTransition",Nc="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Dc="WebkitAnimation",Pc="webkitAnimationEnd"));var Lc=tt?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Mc(t){Lc((function(){Lc(t)}))}function $c(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Sc(t,e))}function jc(t,e){t._transitionClasses&&_(t._transitionClasses,e),Ic(t,e)}function Uc(t,e,n){var r=Vc(t,e),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===Oc?Nc:Pc,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=s&&u()};setTimeout((function(){c<s&&u()}),o+1),t.addEventListener(a,l)}var Fc=/\b(transform|all)(,|$)/;function Vc(t,e){var n,r=window.getComputedStyle(t),i=(r[Rc+"Delay"]||"").split(", "),o=(r[Rc+"Duration"]||"").split(", "),s=Bc(i,o),a=(r[Dc+"Delay"]||"").split(", "),c=(r[Dc+"Duration"]||"").split(", "),u=Bc(a,c),l=0,h=0;e===Oc?s>0&&(n=Oc,l=s,h=o.length):e===xc?u>0&&(n=xc,l=u,h=c.length):(l=Math.max(s,u),n=l>0?s>u?Oc:xc:null,h=n?n===Oc?o.length:c.length:0);var f=n===Oc&&Fc.test(r[Rc+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:f}}function Bc(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return qc(e)+qc(t[n])})))}function qc(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Hc(t,e){var n=t.elm;i(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var o=Cc(t.data.transition);if(!r(o)&&!i(n._enterCb)&&1===n.nodeType){var s=o.css,a=o.type,l=o.enterClass,h=o.enterToClass,f=o.enterActiveClass,d=o.appearClass,p=o.appearToClass,v=o.appearActiveClass,m=o.beforeEnter,y=o.enter,w=o.afterEnter,b=o.enterCancelled,_=o.beforeAppear,E=o.appear,T=o.afterAppear,S=o.appearCancelled,I=o.duration,C=Vn,k=Vn.$vnode;while(k&&k.parent)C=k.context,k=k.parent;var A=!C._isMounted||!t.isRootInsert;if(!A||E||""===E){var O=A&&d?d:l,x=A&&v?v:f,R=A&&p?p:h,N=A&&_||m,D=A&&c(E)?E:y,P=A&&T||w,L=A&&S||b,M=g(u(I)?I.enter:I);null!=M&&Kc(M,"enter",t);var $=!1!==s&&!rt,j=Wc(D),U=n._enterCb=B((function(){$&&(jc(n,R),jc(n,x)),U.cancelled?($&&jc(n,O),L&&L(n)):P&&P(n),n._enterCb=null}));t.data.show||Le(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),D&&D(n,U)})),N&&N(n),$&&($c(n,O),$c(n,x),Mc((function(){jc(n,O),U.cancelled||($c(n,R),j||(Gc(M)?setTimeout(U,M):Uc(n,a,U)))}))),t.data.show&&(e&&e(),D&&D(n,U)),$||j||U()}}}function zc(t,e){var n=t.elm;i(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var o=Cc(t.data.transition);if(r(o)||1!==n.nodeType)return e();if(!i(n._leaveCb)){var s=o.css,a=o.type,c=o.leaveClass,l=o.leaveToClass,h=o.leaveActiveClass,f=o.beforeLeave,d=o.leave,p=o.afterLeave,v=o.leaveCancelled,m=o.delayLeave,y=o.duration,w=!1!==s&&!rt,b=Wc(d),_=g(u(y)?y.leave:y);i(_)&&Kc(_,"leave",t);var E=n._leaveCb=B((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),w&&(jc(n,l),jc(n,h)),E.cancelled?(w&&jc(n,c),v&&v(n)):(e(),p&&p(n)),n._leaveCb=null}));m?m(T):T()}function T(){E.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),f&&f(n),w&&($c(n,c),$c(n,h),Mc((function(){jc(n,c),E.cancelled||($c(n,l),b||(Gc(_)?setTimeout(E,_):Uc(n,a,E)))}))),d&&d(n,E),w||b||E())}}function Kc(t,e,n){"number"!==typeof t?so("<transition> explicit ".concat(e," duration is not a valid number - ")+"got ".concat(JSON.stringify(t),"."),n.context):isNaN(t)&&so("<transition> explicit ".concat(e," duration is NaN - ")+"the duration expression might be incorrect.",n.context)}function Gc(t){return"number"===typeof t&&!isNaN(t)}function Wc(t){if(r(t))return!1;var e=t.fns;return i(e)?Wc(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Qc(t,e){!0!==e.data.show&&Hc(e)}var Jc=tt?{create:Qc,activate:Qc,remove:function(t,e){!0!==t.data.show?zc(t,e):e()}}:{},Xc=[la,wa,oc,lc,Ec,Jc],Yc=Xc.concat(sa),Zc=Ys({nodeOps:qs,modules:Yc});rt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&au(t,"input")}));var tu={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Le(n,"postpatch",(function(){tu.componentUpdated(t,e,n)})):eu(t,e,n.context),t._vOptions=[].map.call(t.options,iu)):("textarea"===n.tag||Os(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",ou),t.addEventListener("compositionend",su),t.addEventListener("change",su),rt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){eu(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,iu);if(i.some((function(t,e){return!F(t,r[e])}))){var o=t.multiple?e.value.some((function(t){return ru(t,i)})):e.value!==e.oldValue&&ru(e.value,i);o&&au(t,"change")}}}};function eu(t,e,n){nu(t,e,n),(nt||it)&&setTimeout((function(){nu(t,e,n)}),0)}function nu(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=t.options.length;a<c;a++)if(s=t.options[a],i)o=V(r,iu(s))>-1,s.selected!==o&&(s.selected=o);else if(F(iu(s),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}else so('<select multiple v-model="'.concat(e.expression,'"> ')+"expects an Array value for its binding, but got ".concat(Object.prototype.toString.call(r).slice(8,-1)),n)}function ru(t,e){return e.every((function(e){return!F(e,t)}))}function iu(t){return"_value"in t?t._value:t.value}function ou(t){t.target.composing=!0}function su(t){t.target.composing&&(t.target.composing=!1,au(t.target,"input"))}function au(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function cu(t){return!t.componentInstance||t.data&&t.data.transition?t:cu(t.componentInstance._vnode)}var uu={bind:function(t,e,n){var r=e.value;n=cu(n);var i=n.data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,Hc(n,(function(){t.style.display=o}))):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=cu(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?Hc(n,(function(){t.style.display=t.__vOriginalDisplay})):zc(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},lu={model:tu,show:uu},hu={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function fu(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?fu(Pn(e.children)):t}function du(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var r in i)e[C(r)]=i[r];return e}function pu(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function vu(t){while(t=t.parent)if(t.data.transition)return!0}function mu(t,e){return e.key===t.key&&e.tag===t.tag}var gu=function(t){return t.tag||fn(t)},yu=function(t){return"show"===t.name},wu={name:"transition",props:hu,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(gu),n.length)){n.length>1&&so("<transition> can only be used on a single element. Use <transition-group> for lists.",this.$parent);var r=this.mode;r&&"in-out"!==r&&"out-in"!==r&&so("invalid <transition> mode: "+r,this.$parent);var i=n[0];if(vu(this.$vnode))return i;var o=fu(i);if(!o)return i;if(this._leaving)return pu(t,i);var s="__transition-".concat(this._uid,"-");o.key=null==o.key?o.isComment?s+"comment":s+o.tag:a(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var c=(o.data||(o.data={})).transition=du(this),u=this._vnode,l=fu(u);if(o.data.directives&&o.data.directives.some(yu)&&(o.data.show=!0),l&&l.data&&!mu(o,l)&&!fn(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=P({},c);if("out-in"===r)return this._leaving=!0,Le(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),pu(t,i);if("in-out"===r){if(fn(o))return u;var f,d=function(){f()};Le(c,"afterEnter",d),Le(c,"enterCancelled",d),Le(h,"delayLeave",(function(t){f=t}))}}return i}}},bu=P({tag:String,moveClass:String},hu);delete bu.mode;var _u={props:bu,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=qn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=du(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=s;else{var u=c.componentOptions,l=u?Ji(u.Ctor.options)||u.tag||"":c.tag;so("<transition-group> children must be keyed: <".concat(l,">"))}}if(r){var h=[],f=[];for(a=0;a<r.length;a++){c=r[a];c.data.transition=s,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?h.push(c):f.push(c)}this.kept=t(e,null,h),this.removed=f}return t(e,null,o)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(Eu),t.forEach(Tu),t.forEach(Su),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;$c(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Nc,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Nc,t),n._moveCb=null,jc(n,e))})}})))},methods:{hasMove:function(t,e){if(!Ac)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Ic(n,t)})),Sc(n,e),n.style.display="none",this.$el.appendChild(n);var r=Vc(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function Eu(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Tu(t){t.data.newPos=t.elm.getBoundingClientRect()}function Su(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),o.transitionDuration="0s"}}var Iu={Transition:wu,TransitionGroup:_u};Bo.config.mustUseProp=os,Bo.config.isReservedTag=Is,Bo.config.isReservedAttr=rs,Bo.config.getTagNamespace=Cs,Bo.config.isUnknownElement=As,P(Bo.options.directives,lu),P(Bo.options.components,Iu),Bo.prototype.__patch__=tt?Zc:M,Bo.prototype.$mount=function(t,e){return t=t&&tt?xs(t):void 0,Kn(this,t,e)},tt&&setTimeout((function(){G.devtools&&(ft?ft.emit("init",Bo):console[console.info?"info":"log"]("Download the Vue Devtools extension for a better development experience:\nhttps://github.com/vuejs/vue-devtools")),!1!==G.productionTip&&"undefined"!==typeof console&&console[console.info?"info":"log"]("You are running Vue in development mode.\nMake sure to turn on production mode when deploying for production.\nSee more tips at https://vuejs.org/guide/deployment.html")}),0);var Cu=/\{\{((?:.|\r?\n)+?)\}\}/g,ku=/[-.*+?^${}()|[\]\/\\]/g,Au=S((function(t){var e=t[0].replace(ku,"\\$&"),n=t[1].replace(ku,"\\$&");return new RegExp(e+"((?:.|\\n)+?)"+n,"g")}));function Ou(t,e){var n=e?Au(e):Cu;if(n.test(t)){var r,i,o,s=[],a=[],c=n.lastIndex=0;while(r=n.exec(t)){i=r.index,i>c&&(a.push(o=t.slice(c,i)),s.push(JSON.stringify(o)));var u=_a(r[1].trim());s.push("_s(".concat(u,")")),a.push({"@binding":u}),c=i+r[0].length}return c<t.length&&(a.push(o=t.slice(c)),s.push(JSON.stringify(o))),{expression:s.join("+"),tokens:a}}}function xu(t,e){var n=e.warn||Ta,r=Da(t,"class");if(r){var i=Ou(r,e.delimiters);i&&n('class="'.concat(r,'": ')+'Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div class="{{ val }}">, use <div :class="val">.',t.rawAttrsMap["class"])}r&&(t.staticClass=JSON.stringify(r.replace(/\s+/g," ").trim()));var o=Na(t,"class",!1);o&&(t.classBinding=o)}function Ru(t){var e="";return t.staticClass&&(e+="staticClass:".concat(t.staticClass,",")),t.classBinding&&(e+="class:".concat(t.classBinding,",")),e}var Nu={staticKeys:["staticClass"],transformNode:xu,genData:Ru};function Du(t,e){var n=e.warn||Ta,r=Da(t,"style");if(r){var i=Ou(r,e.delimiters);i&&n('style="'.concat(r,'": ')+'Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div style="{{ val }}">, use <div :style="val">.',t.rawAttrsMap["style"]),t.staticStyle=JSON.stringify(hc(r))}var o=Na(t,"style",!1);o&&(t.styleBinding=o)}function Pu(t){var e="";return t.staticStyle&&(e+="staticStyle:".concat(t.staticStyle,",")),t.styleBinding&&(e+="style:(".concat(t.styleBinding,"),")),e}var Lu,Mu={staticKeys:["staticStyle"],transformNode:Du,genData:Pu},$u={decode:function(t){return Lu=Lu||document.createElement("div"),Lu.innerHTML=t,Lu.textContent}},ju=y("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),Uu=y("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),Fu=y("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),Vu=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Bu=/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,qu="[a-zA-Z_][\\-\\.0-9_a-zA-Z".concat(W.source,"]*"),Hu="((?:".concat(qu,"\\:)?").concat(qu,")"),zu=new RegExp("^<".concat(Hu)),Ku=/^\s*(\/?)>/,Gu=new RegExp("^<\\/".concat(Hu,"[^>]*>")),Wu=/^<!DOCTYPE [^>]+>/i,Qu=/^<!\--/,Ju=/^<!\[/,Xu=y("script,style,textarea",!0),Yu={},Zu={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t","&#39;":"'"},tl=/&(?:lt|gt|quot|amp|#39);/g,el=/&(?:lt|gt|quot|amp|#39|#10|#9);/g,nl=y("pre,textarea",!0),rl=function(t,e){return t&&nl(t)&&"\n"===e[0]};function il(t,e){var n=e?el:tl;return t.replace(n,(function(t){return Zu[t]}))}function ol(t,e){var n,r,i=[],o=e.expectHTML,s=e.isUnaryTag||$,a=e.canBeLeftOpenTag||$,c=0,u=function(){if(n=t,r&&Xu(r)){var o=0,s=r.toLowerCase(),a=Yu[s]||(Yu[s]=new RegExp("([\\s\\S]*?)(</"+s+"[^>]*>)","i"));_=t.replace(a,(function(t,n,r){return o=r.length,Xu(s)||"noscript"===s||(n=n.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),rl(s,n)&&(n=n.slice(1)),e.chars&&e.chars(n),""}));c+=t.length-_.length,t=_,p(s,c-o,c)}else{var u=t.indexOf("<");if(0===u){if(Qu.test(t)){var l=t.indexOf("--\x3e");if(l>=0)return e.shouldKeepComment&&e.comment&&e.comment(t.substring(4,l),c,c+l+3),h(l+3),"continue"}if(Ju.test(t)){var v=t.indexOf("]>");if(v>=0)return h(v+2),"continue"}var m=t.match(Wu);if(m)return h(m[0].length),"continue";var g=t.match(Gu);if(g){var y=c;return h(g[0].length),p(g[1],y,c),"continue"}var w=f();if(w)return d(w),rl(w.tagName,t)&&h(1),"continue"}var b=void 0,_=void 0,E=void 0;if(u>=0){_=t.slice(u);while(!Gu.test(_)&&!zu.test(_)&&!Qu.test(_)&&!Ju.test(_)){if(E=_.indexOf("<",1),E<0)break;u+=E,_=t.slice(u)}b=t.substring(0,u)}u<0&&(b=t),b&&h(b.length),e.chars&&b&&e.chars(b,c-b.length,c)}if(t===n)return e.chars&&e.chars(t),!i.length&&e.warn&&e.warn('Mal-formatted tag at end of template: "'.concat(t,'"'),{start:c+t.length}),"break"};while(t){var l=u();if("break"===l)break}function h(e){c+=e,t=t.substring(e)}function f(){var e=t.match(zu);if(e){var n={tagName:e[1],attrs:[],start:c};h(e[0].length);var r=void 0,i=void 0;while(!(r=t.match(Ku))&&(i=t.match(Bu)||t.match(Vu)))i.start=c,h(i[0].length),i.end=c,n.attrs.push(i);if(r)return n.unarySlash=r[1],h(r[0].length),n.end=c,n}}function d(t){var n=t.tagName,c=t.unarySlash;o&&("p"===r&&Fu(n)&&p(r),a(n)&&r===n&&p(n));for(var u=s(n)||!!c,l=t.attrs.length,h=new Array(l),f=0;f<l;f++){var d=t.attrs[f],v=d[3]||d[4]||d[5]||"",m="a"===n&&"href"===d[1]?e.shouldDecodeNewlinesForHref:e.shouldDecodeNewlines;h[f]={name:d[1],value:il(v,m)},e.outputSourceRange&&(h[f].start=d.start+d[0].match(/^\s*/).length,h[f].end=d.end)}u||(i.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:h,start:t.start,end:t.end}),r=n),e.start&&e.start(n,h,u,t.start,t.end)}function p(t,n,o){var s,a;if(null==n&&(n=c),null==o&&(o=c),t){for(a=t.toLowerCase(),s=i.length-1;s>=0;s--)if(i[s].lowerCasedTag===a)break}else s=0;if(s>=0){for(var u=i.length-1;u>=s;u--)(u>s||!t)&&e.warn&&e.warn("tag <".concat(i[u].tag,"> has no matching end tag."),{start:i[u].start,end:i[u].end}),e.end&&e.end(i[u].tag,n,o);i.length=s,r=s&&i[s-1].tag}else"br"===a?e.start&&e.start(t,[],!0,n,o):"p"===a&&(e.start&&e.start(t,[],!1,n,o),e.end&&e.end(t,n,o))}p()}var sl,al,cl,ul,ll,hl,fl,dl,pl,vl=/^@|^v-on:/,ml=/^v-|^@|^:|^#/,gl=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,yl=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,wl=/^\(|\)$/g,bl=/^\[.*\]$/,_l=/:(.*)$/,El=/^:|^\.|^v-bind:/,Tl=/\.[^.\]]+(?=[^\]]*$)/g,Sl=/^v-slot(:|$)|^#/,Il=/[\r\n]/,Cl=/[ \f\t\r\n]+/g,kl=/[\s"'<>\/=]/,Al=S($u.decode),Ol="_empty_";function xl(t,e,n){return{type:1,tag:t,attrsList:e,attrsMap:Xl(e),rawAttrsMap:{},parent:n,children:[]}}function Rl(t,e){sl=e.warn||Ta,hl=e.isPreTag||$,fl=e.mustUseProp||$,dl=e.getTagNamespace||$;var n=e.isReservedTag||$;pl=function(t){return!(!(t.component||t.attrsMap[":is"]||t.attrsMap["v-bind:is"])&&(t.attrsMap.is?n(t.attrsMap.is):n(t.tag)))},cl=Sa(e.modules,"transformNode"),ul=Sa(e.modules,"preTransformNode"),ll=Sa(e.modules,"postTransformNode"),al=e.delimiters;var r,i,o=[],s=!1!==e.preserveWhitespace,a=e.whitespace,c=!1,u=!1,l=!1;function h(t,e){l||(l=!0,sl(t,e))}function f(t){if(d(t),c||t.processed||(t=Pl(t,e)),o.length||t===r||(r.if&&(t.elseif||t.else)?(p(t),Bl(r,{exp:t.elseif,block:t})):h("Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.",{start:t.start})),i&&!t.forbidden)if(t.elseif||t.else)Fl(t,i);else{if(t.slotScope){var n=t.slotTarget||'"default"';(i.scopedSlots||(i.scopedSlots={}))[n]=t}i.children.push(t),t.parent=i}t.children=t.children.filter((function(t){return!t.slotScope})),d(t),t.pre&&(c=!1),hl(t.tag)&&(u=!1);for(var s=0;s<ll.length;s++)ll[s](t,e)}function d(t){if(!u){var e=void 0;while((e=t.children[t.children.length-1])&&3===e.type&&" "===e.text)t.children.pop()}}function p(t){"slot"!==t.tag&&"template"!==t.tag||h("Cannot use <".concat(t.tag,"> as component root element because it may ")+"contain multiple nodes.",{start:t.start}),t.attrsMap.hasOwnProperty("v-for")&&h("Cannot use v-for on stateful component root element because it renders multiple elements.",t.rawAttrsMap["v-for"])}return ol(t,{warn:sl,expectHTML:e.expectHTML,isUnaryTag:e.isUnaryTag,canBeLeftOpenTag:e.canBeLeftOpenTag,shouldDecodeNewlines:e.shouldDecodeNewlines,shouldDecodeNewlinesForHref:e.shouldDecodeNewlinesForHref,shouldKeepComment:e.comments,outputSourceRange:e.outputSourceRange,start:function(t,n,s,a,l){var h=i&&i.ns||dl(t);nt&&"svg"===h&&(n=nh(n));var d=xl(t,n,i);h&&(d.ns=h),e.outputSourceRange&&(d.start=a,d.end=l,d.rawAttrsMap=d.attrsList.reduce((function(t,e){return t[e.name]=e,t}),{})),n.forEach((function(t){kl.test(t.name)&&sl("Invalid dynamic argument expression: attribute names cannot contain spaces, quotes, <, >, / or =.",e.outputSourceRange?{start:t.start+t.name.indexOf("["),end:t.start+t.name.length}:void 0)})),Zl(d)&&!ht()&&(d.forbidden=!0,sl("Templates should only be responsible for mapping the state to the UI. Avoid placing tags with side-effects in your templates, such as "+"<".concat(t,">")+", as they will not be parsed.",{start:d.start}));for(var v=0;v<ul.length;v++)d=ul[v](d,e)||d;c||(Nl(d),d.pre&&(c=!0)),hl(d.tag)&&(u=!0),c?Dl(d):d.processed||($l(d),Ul(d),ql(d)),r||(r=d,p(r)),s?f(d):(i=d,o.push(d))},end:function(t,n,r){var s=o[o.length-1];o.length-=1,i=o[o.length-1],e.outputSourceRange&&(s.end=r),f(s)},chars:function(n,r,o){if(i){if(!nt||"textarea"!==i.tag||i.attrsMap.placeholder!==n){var l=i.children;if(n=u||n.trim()?Yl(i)?n:Al(n):l.length?a?"condense"===a&&Il.test(n)?"":" ":s?" ":"":"",n){u||"condense"!==a||(n=n.replace(Cl," "));var f=void 0,d=void 0;!c&&" "!==n&&(f=Ou(n,al))?d={type:2,expression:f.expression,tokens:f.tokens,text:n}:" "===n&&l.length&&" "===l[l.length-1].text||(d={type:3,text:n}),d&&(e.outputSourceRange&&(d.start=r,d.end=o),l.push(d))}}}else n===t?h("Component template requires a root element, rather than just text.",{start:r}):(n=n.trim())&&h('text "'.concat(n,'" outside root element will be ignored.'),{start:r})},comment:function(t,n,r){if(i){var o={type:3,text:t,isComment:!0};e.outputSourceRange&&(o.start=n,o.end=r),i.children.push(o)}}}),r}function Nl(t){null!=Da(t,"v-pre")&&(t.pre=!0)}function Dl(t){var e=t.attrsList,n=e.length;if(n)for(var r=t.attrs=new Array(n),i=0;i<n;i++)r[i]={name:e[i].name,value:JSON.stringify(e[i].value)},null!=e[i].start&&(r[i].start=e[i].start,r[i].end=e[i].end);else t.pre||(t.plain=!0)}function Pl(t,e){Ll(t),t.plain=!t.key&&!t.scopedSlots&&!t.attrsList.length,Ml(t),Hl(t),Kl(t),Gl(t);for(var n=0;n<cl.length;n++)t=cl[n](t,e)||t;return Wl(t),t}function Ll(t){var e=Na(t,"key");if(e){if("template"===t.tag&&sl("<template> cannot be keyed. Place the key on real elements instead.",Ra(t,"key")),t.for){var n=t.iterator2||t.iterator1,r=t.parent;n&&n===e&&r&&"transition-group"===r.tag&&sl("Do not use v-for index as key on <transition-group> children, this is the same as not using keys.",Ra(t,"key"),!0)}t.key=e}}function Ml(t){var e=Na(t,"ref");e&&(t.ref=e,t.refInFor=Ql(t))}function $l(t){var e;if(e=Da(t,"v-for")){var n=jl(e);n?P(t,n):sl("Invalid v-for expression: ".concat(e),t.rawAttrsMap["v-for"])}}function jl(t){var e=t.match(gl);if(e){var n={};n.for=e[2].trim();var r=e[1].trim().replace(wl,""),i=r.match(yl);return i?(n.alias=r.replace(yl,"").trim(),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=r,n}}function Ul(t){var e=Da(t,"v-if");if(e)t.if=e,Bl(t,{exp:e,block:t});else{null!=Da(t,"v-else")&&(t.else=!0);var n=Da(t,"v-else-if");n&&(t.elseif=n)}}function Fl(t,e){var n=Vl(e.children);n&&n.if?Bl(n,{exp:t.elseif,block:t}):sl("v-".concat(t.elseif?'else-if="'+t.elseif+'"':"else"," ")+"used on element <".concat(t.tag,"> without corresponding v-if."),t.rawAttrsMap[t.elseif?"v-else-if":"v-else"])}function Vl(t){var e=t.length;while(e--){if(1===t[e].type)return t[e];" "!==t[e].text&&sl('text "'.concat(t[e].text.trim(),'" between v-if and v-else(-if) ')+"will be ignored.",t[e]),t.pop()}}function Bl(t,e){t.ifConditions||(t.ifConditions=[]),t.ifConditions.push(e)}function ql(t){var e=Da(t,"v-once");null!=e&&(t.once=!0)}function Hl(t){var e;"template"===t.tag?(e=Da(t,"scope"),e&&sl('the "scope" attribute for scoped slots have been deprecated and replaced by "slot-scope" since 2.5. The new "slot-scope" attribute can also be used on plain elements in addition to <template> to denote scoped slots.',t.rawAttrsMap["scope"],!0),t.slotScope=e||Da(t,"slot-scope")):(e=Da(t,"slot-scope"))&&(t.attrsMap["v-for"]&&sl("Ambiguous combined usage of slot-scope and v-for on <".concat(t.tag,"> ")+"(v-for takes higher priority). Use a wrapper <template> for the scoped slot to make it clearer.",t.rawAttrsMap["slot-scope"],!0),t.slotScope=e);var n=Na(t,"slot");if(n&&(t.slotTarget='""'===n?'"default"':n,t.slotTargetDynamic=!(!t.attrsMap[":slot"]&&!t.attrsMap["v-bind:slot"]),"template"===t.tag||t.slotScope||Ca(t,"slot",n,Ra(t,"slot"))),"template"===t.tag){var r=Pa(t,Sl);if(r){(t.slotTarget||t.slotScope)&&sl("Unexpected mixed usage of different slot syntaxes.",t),t.parent&&!pl(t.parent)&&sl("<template v-slot> can only appear at the root level inside the receiving component",t);var i=zl(r),o=i.name,s=i.dynamic;t.slotTarget=o,t.slotTargetDynamic=s,t.slotScope=r.value||Ol}}else{r=Pa(t,Sl);if(r){pl(t)||sl("v-slot can only be used on components or <template>.",r),(t.slotScope||t.slotTarget)&&sl("Unexpected mixed usage of different slot syntaxes.",t),t.scopedSlots&&sl("To avoid scope ambiguity, the default slot should also use <template> syntax when there are other named slots.",r);var a=t.scopedSlots||(t.scopedSlots={}),c=zl(r),u=c.name,l=(s=c.dynamic,a[u]=xl("template",[],t));l.slotTarget=u,l.slotTargetDynamic=s,l.children=t.children.filter((function(t){if(!t.slotScope)return t.parent=l,!0})),l.slotScope=r.value||Ol,t.children=[],t.plain=!1}}}function zl(t){var e=t.name.replace(Sl,"");return e||("#"!==t.name[0]?e="default":sl("v-slot shorthand syntax requires a slot name.",t)),bl.test(e)?{name:e.slice(1,-1),dynamic:!0}:{name:'"'.concat(e,'"'),dynamic:!1}}function Kl(t){"slot"===t.tag&&(t.slotName=Na(t,"name"),t.key&&sl("`key` does not work on <slot> because slots are abstract outlets and can possibly expand into multiple elements. Use the key on a wrapping element instead.",Ra(t,"key")))}function Gl(t){var e;(e=Na(t,"is"))&&(t.component=e),null!=Da(t,"inline-template")&&(t.inlineTemplate=!0)}function Wl(t){var e,n,r,i,o,s,a,c,u=t.attrsList;for(e=0,n=u.length;e<n;e++)if(r=i=u[e].name,o=u[e].value,ml.test(r))if(t.hasBindings=!0,s=Jl(r.replace(ml,"")),s&&(r=r.replace(Tl,"")),El.test(r))r=r.replace(El,""),o=_a(o),c=bl.test(r),c&&(r=r.slice(1,-1)),0===o.trim().length&&sl('The value for a v-bind expression cannot be empty. Found in "v-bind:'.concat(r,'"')),s&&(s.prop&&!c&&(r=C(r),"innerHtml"===r&&(r="innerHTML")),s.camel&&!c&&(r=C(r)),s.sync&&(a=$a(o,"$event"),c?xa(t,'"update:"+('.concat(r,")"),a,null,!1,sl,u[e],!0):(xa(t,"update:".concat(C(r)),a,null,!1,sl,u[e]),O(r)!==C(r)&&xa(t,"update:".concat(O(r)),a,null,!1,sl,u[e])))),s&&s.prop||!t.component&&fl(t.tag,t.attrsMap.type,r)?Ia(t,r,o,u[e],c):Ca(t,r,o,u[e],c);else if(vl.test(r))r=r.replace(vl,""),c=bl.test(r),c&&(r=r.slice(1,-1)),xa(t,r,o,s,!1,sl,u[e],c);else{r=r.replace(ml,"");var l=r.match(_l),h=l&&l[1];c=!1,h&&(r=r.slice(0,-(h.length+1)),bl.test(h)&&(h=h.slice(1,-1),c=!0)),Aa(t,r,i,o,h,c,s,u[e]),"model"===r&&rh(t,o)}else{var f=Ou(o,al);f&&sl("".concat(r,'="').concat(o,'": ')+'Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div id="{{ val }}">, use <div :id="val">.',u[e]),Ca(t,r,JSON.stringify(o),u[e]),!t.component&&"muted"===r&&fl(t.tag,t.attrsMap.type,r)&&Ia(t,r,"true",u[e])}}function Ql(t){var e=t;while(e){if(void 0!==e.for)return!0;e=e.parent}return!1}function Jl(t){var e=t.match(Tl);if(e){var n={};return e.forEach((function(t){n[t.slice(1)]=!0})),n}}function Xl(t){for(var e={},n=0,r=t.length;n<r;n++)!e[t[n].name]||nt||it||sl("duplicate attribute: "+t[n].name,t[n]),e[t[n].name]=t[n].value;return e}function Yl(t){return"script"===t.tag||"style"===t.tag}function Zl(t){return"style"===t.tag||"script"===t.tag&&(!t.attrsMap.type||"text/javascript"===t.attrsMap.type)}var th=/^xmlns:NS\d+/,eh=/^NS\d+:/;function nh(t){for(var e=[],n=0;n<t.length;n++){var r=t[n];th.test(r.name)||(r.name=r.name.replace(eh,""),e.push(r))}return e}function rh(t,e){var n=t;while(n)n.for&&n.alias===e&&sl("<".concat(t.tag,' v-model="').concat(e,'">: ')+"You are binding v-model directly to a v-for iteration alias. This will not be able to modify the v-for source array because writing to the alias is like modifying a function local variable. Consider using an array of objects and use v-model on an object property instead.",t.rawAttrsMap["v-model"]),n=n.parent}function ih(t,e){if("input"===t.tag){var n=t.attrsMap;if(!n["v-model"])return;var r=void 0;if((n[":type"]||n["v-bind:type"])&&(r=Na(t,"type")),n.type||r||!n["v-bind"]||(r="(".concat(n["v-bind"],").type")),r){var i=Da(t,"v-if",!0),o=i?"&&(".concat(i,")"):"",s=null!=Da(t,"v-else",!0),a=Da(t,"v-else-if",!0),c=oh(t);$l(c),ka(c,"type","checkbox"),Pl(c,e),c.processed=!0,c.if="(".concat(r,")==='checkbox'")+o,Bl(c,{exp:c.if,block:c});var u=oh(t);Da(u,"v-for",!0),ka(u,"type","radio"),Pl(u,e),Bl(c,{exp:"(".concat(r,")==='radio'")+o,block:u});var l=oh(t);return Da(l,"v-for",!0),ka(l,":type",r),Pl(l,e),Bl(c,{exp:i,block:l}),s?c.else=!0:a&&(c.elseif=a),c}}}function oh(t){return xl(t.tag,t.attrsList.slice(),t.parent)}var sh={preTransformNode:ih},ah=[Nu,Mu,sh];function ch(t,e){e.value&&Ia(t,"textContent","_s(".concat(e.value,")"),e)}function uh(t,e){e.value&&Ia(t,"innerHTML","_s(".concat(e.value,")"),e)}var lh,hh,fh={model:Ga,text:ch,html:uh},dh={expectHTML:!0,modules:ah,directives:fh,isPreTag:Ss,isUnaryTag:ju,mustUseProp:os,canBeLeftOpenTag:Uu,isReservedTag:Is,getTagNamespace:Cs,staticKeys:U(ah)},ph=S(mh);function vh(t,e){t&&(lh=ph(e.staticKeys||""),hh=e.isReservedTag||$,gh(t),yh(t,!1))}function mh(t){return y("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap"+(t?","+t:""))}function gh(t){if(t.static=wh(t),1===t.type){if(!hh(t.tag)&&"slot"!==t.tag&&null==t.attrsMap["inline-template"])return;for(var e=0,n=t.children.length;e<n;e++){var r=t.children[e];gh(r),r.static||(t.static=!1)}if(t.ifConditions)for(e=1,n=t.ifConditions.length;e<n;e++){var i=t.ifConditions[e].block;gh(i),i.static||(t.static=!1)}}}function yh(t,e){if(1===t.type){if((t.static||t.once)&&(t.staticInFor=e),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return void(t.staticRoot=!0);if(t.staticRoot=!1,t.children)for(var n=0,r=t.children.length;n<r;n++)yh(t.children[n],e||!!t.for);if(t.ifConditions)for(n=1,r=t.ifConditions.length;n<r;n++)yh(t.ifConditions[n].block,e)}}function wh(t){return 2!==t.type&&(3===t.type||!(!t.pre&&(t.hasBindings||t.if||t.for||w(t.tag)||!hh(t.tag)||bh(t)||!Object.keys(t).every(lh))))}function bh(t){while(t.parent){if(t=t.parent,"template"!==t.tag)return!1;if(t.for)return!0}return!1}var _h=/^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,Eh=/\([^)]*?\);*$/,Th=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,Sh={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Ih={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]},Ch=function(t){return"if(".concat(t,")return null;")},kh={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:Ch("$event.target !== $event.currentTarget"),ctrl:Ch("!$event.ctrlKey"),shift:Ch("!$event.shiftKey"),alt:Ch("!$event.altKey"),meta:Ch("!$event.metaKey"),left:Ch("'button' in $event && $event.button !== 0"),middle:Ch("'button' in $event && $event.button !== 1"),right:Ch("'button' in $event && $event.button !== 2")};function Ah(t,e){var n=e?"nativeOn:":"on:",r="",i="";for(var o in t){var s=Oh(t[o]);t[o]&&t[o].dynamic?i+="".concat(o,",").concat(s,","):r+='"'.concat(o,'":').concat(s,",")}return r="{".concat(r.slice(0,-1),"}"),i?n+"_d(".concat(r,",[").concat(i.slice(0,-1),"])"):n+r}function Oh(t){if(!t)return"function(){}";if(Array.isArray(t))return"[".concat(t.map((function(t){return Oh(t)})).join(","),"]");var e=Th.test(t.value),n=_h.test(t.value),r=Th.test(t.value.replace(Eh,""));if(t.modifiers){var i="",o="",s=[],a=function(e){if(kh[e])o+=kh[e],Sh[e]&&s.push(e);else if("exact"===e){var n=t.modifiers;o+=Ch(["ctrl","shift","alt","meta"].filter((function(t){return!n[t]})).map((function(t){return"$event.".concat(t,"Key")})).join("||"))}else s.push(e)};for(var c in t.modifiers)a(c);s.length&&(i+=xh(s)),o&&(i+=o);var u=e?"return ".concat(t.value,".apply(null, arguments)"):n?"return (".concat(t.value,").apply(null, arguments)"):r?"return ".concat(t.value):t.value;return"function($event){".concat(i).concat(u,"}")}return e||n?t.value:"function($event){".concat(r?"return ".concat(t.value):t.value,"}")}function xh(t){return"if(!$event.type.indexOf('key')&&"+"".concat(t.map(Rh).join("&&"),")return null;")}function Rh(t){var e=parseInt(t,10);if(e)return"$event.keyCode!==".concat(e);var n=Sh[t],r=Ih[t];return"_k($event.keyCode,"+"".concat(JSON.stringify(t),",")+"".concat(JSON.stringify(n),",")+"$event.key,"+"".concat(JSON.stringify(r))+")"}function Nh(t,e){e.modifiers&&so("v-on without argument does not support modifiers."),t.wrapListeners=function(t){return"_g(".concat(t,",").concat(e.value,")")}}function Dh(t,e){t.wrapData=function(n){return"_b(".concat(n,",'").concat(t.tag,"',").concat(e.value,",").concat(e.modifiers&&e.modifiers.prop?"true":"false").concat(e.modifiers&&e.modifiers.sync?",true":"",")")}}var Ph={on:Nh,bind:Dh,cloak:M},Lh=function(){function t(t){this.options=t,this.warn=t.warn||Ta,this.transforms=Sa(t.modules,"transformCode"),this.dataGenFns=Sa(t.modules,"genData"),this.directives=P(P({},Ph),t.directives);var e=t.isReservedTag||$;this.maybeComponent=function(t){return!!t.component||!e(t.tag)},this.onceId=0,this.staticRenderFns=[],this.pre=!1}return t}();function Mh(t,e){var n=new Lh(e),r=t?"script"===t.tag?"null":$h(t,n):'_c("div")';return{render:"with(this){return ".concat(r,"}"),staticRenderFns:n.staticRenderFns}}function $h(t,e){if(t.parent&&(t.pre=t.pre||t.parent.pre),t.staticRoot&&!t.staticProcessed)return Uh(t,e);if(t.once&&!t.onceProcessed)return Fh(t,e);if(t.for&&!t.forProcessed)return qh(t,e);if(t.if&&!t.ifProcessed)return Vh(t,e);if("template"!==t.tag||t.slotTarget||e.pre){if("slot"===t.tag)return rf(t,e);var n=void 0;if(t.component)n=of(t.component,t,e);else{var r=void 0,i=e.maybeComponent(t);(!t.plain||t.pre&&i)&&(r=Hh(t,e));var o=void 0,s=e.options.bindings;i&&s&&!1!==s.__isScriptSetup&&(o=jh(s,t.tag)),o||(o="'".concat(t.tag,"'"));var a=t.inlineTemplate?null:Xh(t,e,!0);n="_c(".concat(o).concat(r?",".concat(r):"").concat(a?",".concat(a):"",")")}for(var c=0;c<e.transforms.length;c++)n=e.transforms[c](t,n);return n}return Xh(t,e)||"void 0"}function jh(t,e){var n=C(e),r=k(n),i=function(i){return t[e]===i?e:t[n]===i?n:t[r]===i?r:void 0},o=i("setup-const")||i("setup-reactive-const");if(o)return o;var s=i("setup-let")||i("setup-ref")||i("setup-maybe-ref");return s||void 0}function Uh(t,e){t.staticProcessed=!0;var n=e.pre;return t.pre&&(e.pre=t.pre),e.staticRenderFns.push("with(this){return ".concat($h(t,e),"}")),e.pre=n,"_m(".concat(e.staticRenderFns.length-1).concat(t.staticInFor?",true":"",")")}function Fh(t,e){if(t.onceProcessed=!0,t.if&&!t.ifProcessed)return Vh(t,e);if(t.staticInFor){var n="",r=t.parent;while(r){if(r.for){n=r.key;break}r=r.parent}return n?"_o(".concat($h(t,e),",").concat(e.onceId++,",").concat(n,")"):(e.warn("v-once can only be used inside v-for that is keyed. ",t.rawAttrsMap["v-once"]),$h(t,e))}return Uh(t,e)}function Vh(t,e,n,r){return t.ifProcessed=!0,Bh(t.ifConditions.slice(),e,n,r)}function Bh(t,e,n,r){if(!t.length)return r||"_e()";var i=t.shift();return i.exp?"(".concat(i.exp,")?").concat(o(i.block),":").concat(Bh(t,e,n,r)):"".concat(o(i.block));function o(t){return n?n(t,e):t.once?Fh(t,e):$h(t,e)}}function qh(t,e,n,r){var i=t.for,o=t.alias,s=t.iterator1?",".concat(t.iterator1):"",a=t.iterator2?",".concat(t.iterator2):"";return e.maybeComponent(t)&&"slot"!==t.tag&&"template"!==t.tag&&!t.key&&e.warn("<".concat(t.tag,' v-for="').concat(o," in ").concat(i,'">: component lists rendered with ')+"v-for should have explicit keys. See https://vuejs.org/guide/list.html#key for more info.",t.rawAttrsMap["v-for"],!0),t.forProcessed=!0,"".concat(r||"_l","((").concat(i,"),")+"function(".concat(o).concat(s).concat(a,"){")+"return ".concat((n||$h)(t,e))+"})"}function Hh(t,e){var n="{",r=zh(t,e);r&&(n+=r+","),t.key&&(n+="key:".concat(t.key,",")),t.ref&&(n+="ref:".concat(t.ref,",")),t.refInFor&&(n+="refInFor:true,"),t.pre&&(n+="pre:true,"),t.component&&(n+='tag:"'.concat(t.tag,'",'));for(var i=0;i<e.dataGenFns.length;i++)n+=e.dataGenFns[i](t);if(t.attrs&&(n+="attrs:".concat(sf(t.attrs),",")),t.props&&(n+="domProps:".concat(sf(t.props),",")),t.events&&(n+="".concat(Ah(t.events,!1),",")),t.nativeEvents&&(n+="".concat(Ah(t.nativeEvents,!0),",")),t.slotTarget&&!t.slotScope&&(n+="slot:".concat(t.slotTarget,",")),t.scopedSlots&&(n+="".concat(Gh(t,t.scopedSlots,e),",")),t.model&&(n+="model:{value:".concat(t.model.value,",callback:").concat(t.model.callback,",expression:").concat(t.model.expression,"},")),t.inlineTemplate){var o=Kh(t,e);o&&(n+="".concat(o,","))}return n=n.replace(/,$/,"")+"}",t.dynamicAttrs&&(n="_b(".concat(n,',"').concat(t.tag,'",').concat(sf(t.dynamicAttrs),")")),t.wrapData&&(n=t.wrapData(n)),t.wrapListeners&&(n=t.wrapListeners(n)),n}function zh(t,e){var n=t.directives;if(n){var r,i,o,s,a="directives:[",c=!1;for(r=0,i=n.length;r<i;r++){o=n[r],s=!0;var u=e.directives[o.name];u&&(s=!!u(t,o,e.warn)),s&&(c=!0,a+='{name:"'.concat(o.name,'",rawName:"').concat(o.rawName,'"').concat(o.value?",value:(".concat(o.value,"),expression:").concat(JSON.stringify(o.value)):"").concat(o.arg?",arg:".concat(o.isDynamicArg?o.arg:'"'.concat(o.arg,'"')):"").concat(o.modifiers?",modifiers:".concat(JSON.stringify(o.modifiers)):"","},"))}return c?a.slice(0,-1)+"]":void 0}}function Kh(t,e){var n=t.children[0];if(1===t.children.length&&1===n.type||e.warn("Inline-template components must have exactly one child element.",{start:t.start}),n&&1===n.type){var r=Mh(n,e.options);return"inlineTemplate:{render:function(){".concat(r.render,"},staticRenderFns:[").concat(r.staticRenderFns.map((function(t){return"function(){".concat(t,"}")})).join(","),"]}")}}function Gh(t,e,n){var r=t.for||Object.keys(e).some((function(t){var n=e[t];return n.slotTargetDynamic||n.if||n.for||Qh(n)})),i=!!t.if;if(!r){var o=t.parent;while(o){if(o.slotScope&&o.slotScope!==Ol||o.for){r=!0;break}o.if&&(i=!0),o=o.parent}}var s=Object.keys(e).map((function(t){return Jh(e[t],n)})).join(",");return"scopedSlots:_u([".concat(s,"]").concat(r?",null,true":"").concat(!r&&i?",null,false,".concat(Wh(s)):"",")")}function Wh(t){var e=5381,n=t.length;while(n)e=33*e^t.charCodeAt(--n);return e>>>0}function Qh(t){return 1===t.type&&("slot"===t.tag||t.children.some(Qh))}function Jh(t,e){var n=t.attrsMap["slot-scope"];if(t.if&&!t.ifProcessed&&!n)return Vh(t,e,Jh,"null");if(t.for&&!t.forProcessed)return qh(t,e,Jh);var r=t.slotScope===Ol?"":String(t.slotScope),i="function(".concat(r,"){")+"return ".concat("template"===t.tag?t.if&&n?"(".concat(t.if,")?").concat(Xh(t,e)||"undefined",":undefined"):Xh(t,e)||"undefined":$h(t,e),"}"),o=r?"":",proxy:true";return"{key:".concat(t.slotTarget||'"default"',",fn:").concat(i).concat(o,"}")}function Xh(t,e,n,r,i){var o=t.children;if(o.length){var s=o[0];if(1===o.length&&s.for&&"template"!==s.tag&&"slot"!==s.tag){var a=n?e.maybeComponent(s)?",1":",0":"";return"".concat((r||$h)(s,e)).concat(a)}var c=n?Yh(o,e.maybeComponent):0,u=i||tf;return"[".concat(o.map((function(t){return u(t,e)})).join(","),"]").concat(c?",".concat(c):"")}}function Yh(t,e){for(var n=0,r=0;r<t.length;r++){var i=t[r];if(1===i.type){if(Zh(i)||i.ifConditions&&i.ifConditions.some((function(t){return Zh(t.block)}))){n=2;break}(e(i)||i.ifConditions&&i.ifConditions.some((function(t){return e(t.block)})))&&(n=1)}}return n}function Zh(t){return void 0!==t.for||"template"===t.tag||"slot"===t.tag}function tf(t,e){return 1===t.type?$h(t,e):3===t.type&&t.isComment?nf(t):ef(t)}function ef(t){return"_v(".concat(2===t.type?t.expression:af(JSON.stringify(t.text)),")")}function nf(t){return"_e(".concat(JSON.stringify(t.text),")")}function rf(t,e){var n=t.slotName||'"default"',r=Xh(t,e),i="_t(".concat(n).concat(r?",function(){return ".concat(r,"}"):""),o=t.attrs||t.dynamicAttrs?sf((t.attrs||[]).concat(t.dynamicAttrs||[]).map((function(t){return{name:C(t.name),value:t.value,dynamic:t.dynamic}}))):null,s=t.attrsMap["v-bind"];return!o&&!s||r||(i+=",null"),o&&(i+=",".concat(o)),s&&(i+="".concat(o?"":",null",",").concat(s)),i+")"}function of(t,e,n){var r=e.inlineTemplate?null:Xh(e,n,!0);return"_c(".concat(t,",").concat(Hh(e,n)).concat(r?",".concat(r):"",")")}function sf(t){for(var e="",n="",r=0;r<t.length;r++){var i=t[r],o=af(i.value);i.dynamic?n+="".concat(i.name,",").concat(o,","):e+='"'.concat(i.name,'":').concat(o,",")}return e="{".concat(e.slice(0,-1),"}"),n?"_d(".concat(e,",[").concat(n.slice(0,-1),"])"):e}function af(t){return t.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}var cf=new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),uf=new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)"),lf=/'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;function hf(t,e){t&&ff(t,e)}function ff(t,e){if(1===t.type){for(var n in t.attrsMap)if(ml.test(n)){var r=t.attrsMap[n];if(r){var i=t.rawAttrsMap[n];"v-for"===n?pf(t,'v-for="'.concat(r,'"'),e,i):"v-slot"===n||"#"===n[0]?gf(r,"".concat(n,'="').concat(r,'"'),e,i):vl.test(n)?df(r,"".concat(n,'="').concat(r,'"'),e,i):mf(r,"".concat(n,'="').concat(r,'"'),e,i)}}if(t.children)for(var o=0;o<t.children.length;o++)ff(t.children[o],e)}else 2===t.type&&mf(t.expression,t.text,e,t)}function df(t,e,n,r){var i=t.replace(lf,""),o=i.match(uf);o&&"$"!==i.charAt(o.index-1)&&n("avoid using JavaScript unary operator as property name: "+'"'.concat(o[0],'" in expression ').concat(e.trim()),r),mf(t,e,n,r)}function pf(t,e,n,r){mf(t.for||"",e,n,r),vf(t.alias,"v-for alias",e,n,r),vf(t.iterator1,"v-for iterator",e,n,r),vf(t.iterator2,"v-for iterator",e,n,r)}function vf(t,e,n,r,i){if("string"===typeof t)try{new Function("var ".concat(t,"=_"))}catch(Lf){r("invalid ".concat(e,' "').concat(t,'" in expression: ').concat(n.trim()),i)}}function mf(t,e,n,r){try{new Function("return ".concat(t))}catch(Lf){var i=t.replace(lf,"").match(cf);n(i?"avoid using JavaScript keyword as property name: "+'"'.concat(i[0],'"\n  Raw expression: ').concat(e.trim()):"invalid expression: ".concat(Lf.message," in\n\n")+"    ".concat(t,"\n\n")+"  Raw expression: ".concat(e.trim(),"\n"),r)}}function gf(t,e,n,r){try{new Function(t,"")}catch(Lf){n("invalid function parameter expression: ".concat(Lf.message," in\n\n")+"    ".concat(t,"\n\n")+"  Raw expression: ".concat(e.trim(),"\n"),r)}}var yf=2;function wf(t,e,n){void 0===e&&(e=0),void 0===n&&(n=t.length);for(var r=t.split(/\r?\n/),i=0,o=[],s=0;s<r.length;s++)if(i+=r[s].length+1,i>=e){for(var a=s-yf;a<=s+yf||n>i;a++)if(!(a<0||a>=r.length)){o.push("".concat(a+1).concat(bf(" ",3-String(a+1).length),"|  ").concat(r[a]));var c=r[a].length;if(a===s){var u=e-(i-c)+1,l=n>i?c-u:n-e;o.push("   |  "+bf(" ",u)+bf("^",l))}else if(a>s){if(n>i){var h=Math.min(n-i,c);o.push("   |  "+bf("^",h))}i+=c+1}}break}return o.join("\n")}function bf(t,e){var n="";if(e>0)while(1){if(1&e&&(n+=t),e>>>=1,e<=0)break;t+=t}return n}function _f(t,e){try{return new Function(t)}catch(n){return e.push({err:n,code:t}),M}}function Ef(t){var e=Object.create(null);return function(n,r,i){r=P({},r);var o=r.warn||so;delete r.warn;try{new Function("return 1")}catch(Lf){Lf.toString().match(/unsafe-eval|CSP/)&&o("It seems you are using the standalone build of Vue.js in an environment with Content Security Policy that prohibits unsafe-eval. The template compiler cannot work in this environment. Consider relaxing the policy to allow unsafe-eval or pre-compiling your templates into render functions.")}var s=r.delimiters?String(r.delimiters)+n:n;if(e[s])return e[s];var a=t(n,r);a.errors&&a.errors.length&&(r.outputSourceRange?a.errors.forEach((function(t){o("Error compiling template:\n\n".concat(t.msg,"\n\n")+wf(n,t.start,t.end),i)})):o("Error compiling template:\n\n".concat(n,"\n\n")+a.errors.map((function(t){return"- ".concat(t)})).join("\n")+"\n",i)),a.tips&&a.tips.length&&(r.outputSourceRange?a.tips.forEach((function(t){return ao(t.msg,i)})):a.tips.forEach((function(t){return ao(t,i)})));var c={},u=[];return c.render=_f(a.render,u),c.staticRenderFns=a.staticRenderFns.map((function(t){return _f(t,u)})),a.errors&&a.errors.length||!u.length||o("Failed to generate render function:\n\n"+u.map((function(t){var e=t.err,n=t.code;return"".concat(e.toString()," in\n\n").concat(n,"\n")})).join("\n"),i),e[s]=c}}function Tf(t){return function(e){function n(n,r){var i=Object.create(e),o=[],s=[],a=function(t,e,n){(n?s:o).push(t)};if(r){if(r.outputSourceRange){var c=n.match(/^\s*/)[0].length;a=function(t,e,n){var r="string"===typeof t?{msg:t}:t;e&&(null!=e.start&&(r.start=e.start+c),null!=e.end&&(r.end=e.end+c)),(n?s:o).push(r)}}for(var u in r.modules&&(i.modules=(e.modules||[]).concat(r.modules)),r.directives&&(i.directives=P(Object.create(e.directives||null),r.directives)),r)"modules"!==u&&"directives"!==u&&(i[u]=r[u])}i.warn=a;var l=t(n.trim(),i);return hf(l.ast,a),l.errors=o,l.tips=s,l}return{compile:n,compileToFunctions:Ef(n)}}}var Sf,If=Tf((function(t,e){var n=Rl(t.trim(),e);!1!==e.optimize&&vh(n,e);var r=Mh(n,e);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}})),Cf=If(dh),kf=Cf.compileToFunctions;function Af(t){return Sf=Sf||document.createElement("div"),Sf.innerHTML=t?'<a href="\n"/>':'<div a="\n"/>',Sf.innerHTML.indexOf("&#10;")>0}var Of=!!tt&&Af(!1),xf=!!tt&&Af(!0),Rf=S((function(t){var e=xs(t);return e&&e.innerHTML})),Nf=Bo.prototype.$mount;function Df(t){if(t.outerHTML)return t.outerHTML;var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}function Pf(t,e){var n=new Ei(mt,t,M,{sync:!0});e&&(n.update=function(){e((function(){return n.run()}))})}return Bo.prototype.$mount=function(t,e){if(t=t&&xs(t),t===document.body||t===document.documentElement)return so("Do not mount Vue to <html> or <body> - mount to normal elements instead."),this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"===typeof r)"#"===r.charAt(0)&&(r=Rf(r),r||so("Template element not found or is empty: ".concat(n.template),this));else{if(!r.nodeType)return so("invalid template option:"+r,this),this;r=r.innerHTML}else t&&(r=Df(t));if(r){G.performance&&Ee&&Ee("compile");var i=kf(r,{outputSourceRange:!0,shouldDecodeNewlines:Of,shouldDecodeNewlinesForHref:xf,delimiters:n.delimiters,comments:n.comments},this),o=i.render,s=i.staticRenderFns;n.render=o,n.staticRenderFns=s,G.performance&&Ee&&(Ee("compile end"),Te("vue ".concat(this._name," compile"),"compile","compile end"))}}return Nf.call(this,t,e)},Bo.compile=kf,P(Bo,gi),Bo.effect=Pf,Bo}))},6369:function(t,e,n){"use strict";n.d(e,{ZP:function(){return Xr}});n(7658),n(4633),n(541);var r=Object.freeze({}),i=Array.isArray;function o(t){return void 0===t||null===t}function s(t){return void 0!==t&&null!==t}function a(t){return!0===t}function c(t){return!1===t}function u(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return"function"===typeof t}function h(t){return null!==t&&"object"===typeof t}var f=Object.prototype.toString;function d(t){return"[object Object]"===f.call(t)}function p(t){return"[object RegExp]"===f.call(t)}function v(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function m(t){return s(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function g(t){return null==t?"":Array.isArray(t)||d(t)&&t.toString===f?JSON.stringify(t,null,2):String(t)}function y(t){var e=parseFloat(t);return isNaN(e)?t:e}function w(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}w("slot,component",!0);var b=w("key,ref,slot,slot-scope,is");function _(t,e){var n=t.length;if(n){if(e===t[n-1])return void(t.length=n-1);var r=t.indexOf(e);if(r>-1)return t.splice(r,1)}}var E=Object.prototype.hasOwnProperty;function T(t,e){return E.call(t,e)}function S(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var I=/-(\w)/g,C=S((function(t){return t.replace(I,(function(t,e){return e?e.toUpperCase():""}))})),k=S((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),A=/\B([A-Z])/g,O=S((function(t){return t.replace(A,"-$1").toLowerCase()}));function x(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function R(t,e){return t.bind(e)}var N=Function.prototype.bind?R:x;function D(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function P(t,e){for(var n in e)t[n]=e[n];return t}function L(t){for(var e={},n=0;n<t.length;n++)t[n]&&P(e,t[n]);return e}function M(t,e,n){}var $=function(t,e,n){return!1},j=function(t){return t};function U(t,e){if(t===e)return!0;var n=h(t),r=h(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every((function(t,n){return U(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var s=Object.keys(t),a=Object.keys(e);return s.length===a.length&&s.every((function(n){return U(t[n],e[n])}))}catch(c){return!1}}function F(t,e){for(var n=0;n<t.length;n++)if(U(t[n],e))return n;return-1}function V(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function B(t,e){return t===e?0===t&&1/t!==1/e:t===t||e===e}var q="data-server-rendered",H=["component","directive","filter"],z=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],K={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:$,isReservedAttr:$,isUnknownElement:$,getTagNamespace:M,parsePlatformTagName:j,mustUseProp:$,async:!0,_lifecycleHooks:z},G=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function W(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function Q(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var J=new RegExp("[^".concat(G.source,".$_\\d]"));function X(t){if(!J.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var Y="__proto__"in{},Z="undefined"!==typeof window,tt=Z&&window.navigator.userAgent.toLowerCase(),et=tt&&/msie|trident/.test(tt),nt=tt&&tt.indexOf("msie 9.0")>0,rt=tt&&tt.indexOf("edge/")>0;tt&&tt.indexOf("android");var it=tt&&/iphone|ipad|ipod|ios/.test(tt);tt&&/chrome\/\d+/.test(tt),tt&&/phantomjs/.test(tt);var ot,st=tt&&tt.match(/firefox\/(\d+)/),at={}.watch,ct=!1;if(Z)try{var ut={};Object.defineProperty(ut,"passive",{get:function(){ct=!0}}),window.addEventListener("test-passive",null,ut)}catch(Ys){}var lt=function(){return void 0===ot&&(ot=!Z&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),ot},ht=Z&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ft(t){return"function"===typeof t&&/native code/.test(t.toString())}var dt,pt="undefined"!==typeof Symbol&&ft(Symbol)&&"undefined"!==typeof Reflect&&ft(Reflect.ownKeys);dt="undefined"!==typeof Set&&ft(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var vt=null;function mt(t){void 0===t&&(t=null),t||vt&&vt._scope.off(),vt=t,t&&t._scope.on()}var gt=function(){function t(t,e,n,r,i,o,s,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(t.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),t}(),yt=function(t){void 0===t&&(t="");var e=new gt;return e.text=t,e.isComment=!0,e};function wt(t){return new gt(void 0,void 0,void 0,String(t))}function bt(t){var e=new gt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var _t=0,Et=[],Tt=function(){for(var t=0;t<Et.length;t++){var e=Et[t];e.subs=e.subs.filter((function(t){return t})),e._pending=!1}Et.length=0},St=function(){function t(){this._pending=!1,this.id=_t++,this.subs=[]}return t.prototype.addSub=function(t){this.subs.push(t)},t.prototype.removeSub=function(t){this.subs[this.subs.indexOf(t)]=null,this._pending||(this._pending=!0,Et.push(this))},t.prototype.depend=function(e){t.target&&t.target.addDep(this)},t.prototype.notify=function(t){var e=this.subs.filter((function(t){return t}));for(var n=0,r=e.length;n<r;n++){var i=e[n];0,i.update()}},t}();St.target=null;var It=[];function Ct(t){It.push(t),St.target=t}function kt(){It.pop(),St.target=It[It.length-1]}var At=Array.prototype,Ot=Object.create(At),xt=["push","pop","shift","unshift","splice","sort","reverse"];xt.forEach((function(t){var e=At[t];Q(Ot,t,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,o=e.apply(this,n),s=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&s.observeArray(i),s.dep.notify(),o}))}));var Rt=new WeakMap;function Nt(t){return Dt(t,!0),Q(t,"__v_isShallow",!0),t}function Dt(t,e){if(!Pt(t)){Vt(t,e,lt());0}}function Pt(t){return!(!t||!t.__v_isReadonly)}var Lt=Object.getOwnPropertyNames(Ot),Mt={},$t=!0;function jt(t){$t=t}var Ut={notify:M,depend:M,addSub:M,removeSub:M},Ft=function(){function t(t,e,n){if(void 0===e&&(e=!1),void 0===n&&(n=!1),this.value=t,this.shallow=e,this.mock=n,this.dep=n?Ut:new St,this.vmCount=0,Q(t,"__ob__",this),i(t)){if(!n)if(Y)t.__proto__=Ot;else for(var r=0,o=Lt.length;r<o;r++){var s=Lt[r];Q(t,s,Ot[s])}e||this.observeArray(t)}else{var a=Object.keys(t);for(r=0;r<a.length;r++){s=a[r];Bt(t,s,Mt,void 0,e,n)}}}return t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Vt(t[e],!1,this.mock)},t}();function Vt(t,e,n){return t&&T(t,"__ob__")&&t.__ob__ instanceof Ft?t.__ob__:!$t||!n&&lt()||!i(t)&&!d(t)||!Object.isExtensible(t)||t.__v_skip||Rt.has(t)||Kt(t)||t instanceof gt?void 0:new Ft(t,e,n)}function Bt(t,e,n,r,o,s){var a=new St,c=Object.getOwnPropertyDescriptor(t,e);if(!c||!1!==c.configurable){var u=c&&c.get,l=c&&c.set;u&&!l||n!==Mt&&2!==arguments.length||(n=t[e]);var h=!o&&Vt(n,!1,s);return Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=u?u.call(t):n;return St.target&&(a.depend(),h&&(h.dep.depend(),i(e)&&zt(e))),Kt(e)&&!o?e.value:e},set:function(e){var r=u?u.call(t):n;if(B(r,e)){if(l)l.call(t,e);else{if(u)return;if(!o&&Kt(r)&&!Kt(e))return void(r.value=e);n=e}h=!o&&Vt(e,!1,s),a.notify()}}}),a}}function qt(t,e,n){if(!Pt(t)){var r=t.__ob__;return i(t)&&v(e)?(t.length=Math.max(t.length,e),t.splice(e,1,n),r&&!r.shallow&&r.mock&&Vt(n,!1,!0),n):e in t&&!(e in Object.prototype)?(t[e]=n,n):t._isVue||r&&r.vmCount?n:r?(Bt(r.value,e,n,void 0,r.shallow,r.mock),r.dep.notify(),n):(t[e]=n,n)}}function Ht(t,e){if(i(t)&&v(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||Pt(t)||T(t,e)&&(delete t[e],n&&n.dep.notify())}}function zt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),i(e)&&zt(e)}function Kt(t){return!(!t||!0!==t.__v_isRef)}function Gt(t,e,n){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];if(Kt(t))return t.value;var r=t&&t.__ob__;return r&&r.dep.depend(),t},set:function(t){var r=e[n];Kt(r)&&!Kt(t)?r.value=t:e[n]=t}})}new WeakMap,new WeakMap;var Wt="watcher";"".concat(Wt," callback"),"".concat(Wt," getter"),"".concat(Wt," cleanup");var Qt;var Jt=function(){function t(t){void 0===t&&(t=!1),this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Qt,!t&&Qt&&(this.index=(Qt.scopes||(Qt.scopes=[])).push(this)-1)}return t.prototype.run=function(t){if(this.active){var e=Qt;try{return Qt=this,t()}finally{Qt=e}}else 0},t.prototype.on=function(){Qt=this},t.prototype.off=function(){Qt=this.parent},t.prototype.stop=function(t){if(this.active){var e=void 0,n=void 0;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].teardown();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},t}();function Xt(t,e){void 0===e&&(e=Qt),e&&e.active&&e.effects.push(t)}function Yt(t){var e=t._provided,n=t.$parent&&t.$parent._provided;return n===e?t._provided=Object.create(n):e}var Zt=S((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function te(t,e){function n(){var t=n.fns;if(!i(t))return Je(t,null,arguments,e,"v-on handler");for(var r=t.slice(),o=0;o<r.length;o++)Je(r[o],null,arguments,e,"v-on handler")}return n.fns=t,n}function ee(t,e,n,r,i,s){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=Zt(c),o(u)||(o(l)?(o(u.fns)&&(u=t[c]=te(u,s)),a(h.once)&&(u=t[c]=i(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)o(t[c])&&(h=Zt(c),r(h.name,e[c],h.capture))}function ne(t,e,n){var r;t instanceof gt&&(t=t.data.hook||(t.data.hook={}));var i=t[e];function c(){n.apply(this,arguments),_(r.fns,c)}o(i)?r=te([c]):s(i.fns)&&a(i.merged)?(r=i,r.fns.push(c)):r=te([i,c]),r.merged=!0,t[e]=r}function re(t,e,n){var r=e.options.props;if(!o(r)){var i={},a=t.attrs,c=t.props;if(s(a)||s(c))for(var u in r){var l=O(u);ie(i,c,u,l,!0)||ie(i,a,u,l,!1)}return i}}function ie(t,e,n,r,i){if(s(e)){if(T(e,n))return t[n]=e[n],i||delete e[n],!0;if(T(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function oe(t){for(var e=0;e<t.length;e++)if(i(t[e]))return Array.prototype.concat.apply([],t);return t}function se(t){return u(t)?[wt(t)]:i(t)?ce(t):void 0}function ae(t){return s(t)&&s(t.text)&&c(t.isComment)}function ce(t,e){var n,r,c,l,h=[];for(n=0;n<t.length;n++)r=t[n],o(r)||"boolean"===typeof r||(c=h.length-1,l=h[c],i(r)?r.length>0&&(r=ce(r,"".concat(e||"","_").concat(n)),ae(r[0])&&ae(l)&&(h[c]=wt(l.text+r[0].text),r.shift()),h.push.apply(h,r)):u(r)?ae(l)?h[c]=wt(l.text+r):""!==r&&h.push(wt(r)):ae(r)&&ae(l)?h[c]=wt(l.text+r.text):(a(t._isVList)&&s(r.tag)&&o(r.key)&&s(e)&&(r.key="__vlist".concat(e,"_").concat(n,"__")),h.push(r)));return h}function ue(t,e){var n,r,o,a,c=null;if(i(t)||"string"===typeof t)for(c=new Array(t.length),n=0,r=t.length;n<r;n++)c[n]=e(t[n],n);else if("number"===typeof t)for(c=new Array(t),n=0;n<t;n++)c[n]=e(n+1,n);else if(h(t))if(pt&&t[Symbol.iterator]){c=[];var u=t[Symbol.iterator](),l=u.next();while(!l.done)c.push(e(l.value,c.length)),l=u.next()}else for(o=Object.keys(t),c=new Array(o.length),n=0,r=o.length;n<r;n++)a=o[n],c[n]=e(t[a],a,n);return s(c)||(c=[]),c._isVList=!0,c}function le(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=P(P({},r),n)),i=o(n)||(l(e)?e():e)):i=this.$slots[t]||(l(e)?e():e);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function he(t){return Sr(this.$options,"filters",t,!0)||j}function fe(t,e){return i(t)?-1===t.indexOf(e):t!==e}function de(t,e,n,r,i){var o=K.keyCodes[e]||n;return i&&r&&!K.keyCodes[e]?fe(i,r):o?fe(o,t):r?O(r)!==e:void 0===t}function pe(t,e,n,r,o){if(n)if(h(n)){i(n)&&(n=L(n));var s=void 0,a=function(i){if("class"===i||"style"===i||b(i))s=t;else{var a=t.attrs&&t.attrs.type;s=r||K.mustUseProp(e,a,i)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=C(i),u=O(i);if(!(c in s)&&!(u in s)&&(s[i]=n[i],o)){var l=t.on||(t.on={});l["update:".concat(i)]=function(t){n[i]=t}}};for(var c in n)a(c)}else;return t}function ve(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,this._c,this),ge(r,"__static__".concat(t),!1)),r}function me(t,e,n){return ge(t,"__once__".concat(e).concat(n?"_".concat(n):""),!0),t}function ge(t,e,n){if(i(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&ye(t[r],"".concat(e,"_").concat(r),n);else ye(t,e,n)}function ye(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function we(t,e){if(e)if(d(e)){var n=t.on=t.on?P({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function be(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var s=t[o];i(s)?be(s,e,n):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return r&&(e.$key=r),e}function _e(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Ee(t,e){return"string"===typeof t?e+t:t}function Te(t){t._o=me,t._n=y,t._s=g,t._l=ue,t._t=le,t._q=U,t._i=F,t._m=ve,t._f=he,t._k=de,t._b=pe,t._v=wt,t._e=yt,t._u=be,t._g=we,t._d=_e,t._p=Ee}function Se(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==e&&o.fnContext!==e||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(Ie)&&delete n[u];return n}function Ie(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Ce(t){return t.isComment&&t.asyncFactory}function ke(t,e,n,i){var o,s=Object.keys(n).length>0,a=e?!!e.$stable:!s,c=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(a&&i&&i!==r&&c===i.$key&&!s&&!i.$hasNormal)return i;for(var u in o={},e)e[u]&&"$"!==u[0]&&(o[u]=Ae(t,n,u,e[u]))}else o={};for(var l in n)l in o||(o[l]=Oe(n,l));return e&&Object.isExtensible(e)&&(e._normalized=o),Q(o,"$stable",a),Q(o,"$key",c),Q(o,"$hasNormal",s),o}function Ae(t,e,n,r){var o=function(){var e=vt;mt(t);var n=arguments.length?r.apply(null,arguments):r({});n=n&&"object"===typeof n&&!i(n)?[n]:se(n);var o=n&&n[0];return mt(e),n&&(!o||1===n.length&&o.isComment&&!Ce(o))?void 0:n};return r.proxy&&Object.defineProperty(e,n,{get:o,enumerable:!0,configurable:!0}),o}function Oe(t,e){return function(){return t[e]}}function xe(t){var e=t.$options,n=e.setup;if(n){var r=t._setupContext=Re(t);mt(t),Ct();var i=Je(n,null,[t._props||Nt({}),r],t,"setup");if(kt(),mt(),l(i))e.render=i;else if(h(i))if(t._setupState=i,i.__sfc){var o=t._setupProxy={};for(var s in i)"__sfc"!==s&&Gt(o,i,s)}else for(var s in i)W(s)||Gt(t,i,s);else 0}}function Re(t){return{get attrs(){if(!t._attrsProxy){var e=t._attrsProxy={};Q(e,"_v_attr_proxy",!0),Ne(e,t.$attrs,r,t,"$attrs")}return t._attrsProxy},get listeners(){if(!t._listenersProxy){var e=t._listenersProxy={};Ne(e,t.$listeners,r,t,"$listeners")}return t._listenersProxy},get slots(){return Pe(t)},emit:N(t.$emit,t),expose:function(e){e&&Object.keys(e).forEach((function(n){return Gt(t,e,n)}))}}}function Ne(t,e,n,r,i){var o=!1;for(var s in e)s in t?e[s]!==n[s]&&(o=!0):(o=!0,De(t,s,r,i));for(var s in t)s in e||(o=!0,delete t[s]);return o}function De(t,e,n,r){Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){return n[r][e]}})}function Pe(t){return t._slotsProxy||Le(t._slotsProxy={},t.$scopedSlots),t._slotsProxy}function Le(t,e){for(var n in e)t[n]=e[n];for(var n in t)n in e||delete t[n]}function Me(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,i=n&&n.context;t.$slots=Se(e._renderChildren,i),t.$scopedSlots=n?ke(t.$parent,n.data.scopedSlots,t.$slots):r,t._c=function(e,n,r,i){return ze(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return ze(t,e,n,r,i,!0)};var o=n&&n.data;Bt(t,"$attrs",o&&o.attrs||r,null,!0),Bt(t,"$listeners",e._parentListeners||r,null,!0)}var $e=null;function je(t){Te(t.prototype),t.prototype.$nextTick=function(t){return un(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&e._isMounted&&(e.$scopedSlots=ke(e.$parent,o.data.scopedSlots,e.$slots,e.$scopedSlots),e._slotsProxy&&Le(e._slotsProxy,e.$scopedSlots)),e.$vnode=o;try{mt(e),$e=e,t=r.call(e._renderProxy,e.$createElement)}catch(Ys){Qe(Ys,e,"render"),t=e._vnode}finally{$e=null,mt()}return i(t)&&1===t.length&&(t=t[0]),t instanceof gt||(t=yt()),t.parent=o,t}}function Ue(t,e){return(t.__esModule||pt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),h(t)?e.extend(t):t}function Fe(t,e,n,r,i){var o=yt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function Ve(t,e){if(a(t.error)&&s(t.errorComp))return t.errorComp;if(s(t.resolved))return t.resolved;var n=$e;if(n&&s(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),a(t.loading)&&s(t.loadingComp))return t.loadingComp;if(n&&!s(t.owners)){var r=t.owners=[n],i=!0,c=null,u=null;n.$on("hook:destroyed",(function(){return _(r,n)}));var l=function(t){for(var e=0,n=r.length;e<n;e++)r[e].$forceUpdate();t&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},f=V((function(n){t.resolved=Ue(n,e),i?r.length=0:l(!0)})),d=V((function(e){s(t.errorComp)&&(t.error=!0,l(!0))})),p=t(f,d);return h(p)&&(m(p)?o(t.resolved)&&p.then(f,d):m(p.component)&&(p.component.then(f,d),s(p.error)&&(t.errorComp=Ue(p.error,e)),s(p.loading)&&(t.loadingComp=Ue(p.loading,e),0===p.delay?t.loading=!0:c=setTimeout((function(){c=null,o(t.resolved)&&o(t.error)&&(t.loading=!0,l(!1))}),p.delay||200)),s(p.timeout)&&(u=setTimeout((function(){u=null,o(t.resolved)&&d(null)}),p.timeout)))),i=!1,t.loading?t.loadingComp:t.resolved}}function Be(t){if(i(t))for(var e=0;e<t.length;e++){var n=t[e];if(s(n)&&(s(n.componentOptions)||Ce(n)))return n}}var qe=1,He=2;function ze(t,e,n,r,o,s){return(i(n)||u(n))&&(o=r,r=n,n=void 0),a(s)&&(o=He),Ke(t,e,n,r,o)}function Ke(t,e,n,r,o){if(s(n)&&s(n.__ob__))return yt();if(s(n)&&s(n.is)&&(e=n.is),!e)return yt();var a,c;if(i(r)&&l(r[0])&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===He?r=se(r):o===qe&&(r=oe(r)),"string"===typeof e){var u=void 0;c=t.$vnode&&t.$vnode.ns||K.getTagNamespace(e),a=K.isReservedTag(e)?new gt(K.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!s(u=Sr(t.$options,"components",e))?new gt(e,n,r,void 0,void 0,t):ar(u,n,t,r,e)}else a=ar(e,n,t,r);return i(a)?a:s(a)?(s(c)&&Ge(a,c),s(n)&&We(n),a):yt()}function Ge(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),s(t.children))for(var r=0,i=t.children.length;r<i;r++){var c=t.children[r];s(c.tag)&&(o(c.ns)||a(n)&&"svg"!==c.tag)&&Ge(c,e,n)}}function We(t){h(t.style)&&pn(t.style),h(t.class)&&pn(t.class)}function Qe(t,e,n){Ct();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var s=!1===i[o].call(r,t,e,n);if(s)return}catch(Ys){Xe(Ys,r,"errorCaptured hook")}}}Xe(t,e,n)}finally{kt()}}function Je(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&m(o)&&!o._handled&&(o.catch((function(t){return Qe(t,r,i+" (Promise/async)")})),o._handled=!0)}catch(Ys){Qe(Ys,r,i)}return o}function Xe(t,e,n){if(K.errorHandler)try{return K.errorHandler.call(null,t,e,n)}catch(Ys){Ys!==t&&Ye(Ys,null,"config.errorHandler")}Ye(t,e,n)}function Ye(t,e,n){if(!Z||"undefined"===typeof console)throw t;console.error(t)}var Ze,tn=!1,en=[],nn=!1;function rn(){nn=!1;var t=en.slice(0);en.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ft(Promise)){var on=Promise.resolve();Ze=function(){on.then(rn),it&&setTimeout(M)},tn=!0}else if(et||"undefined"===typeof MutationObserver||!ft(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Ze="undefined"!==typeof setImmediate&&ft(setImmediate)?function(){setImmediate(rn)}:function(){setTimeout(rn,0)};else{var sn=1,an=new MutationObserver(rn),cn=document.createTextNode(String(sn));an.observe(cn,{characterData:!0}),Ze=function(){sn=(sn+1)%2,cn.data=String(sn)},tn=!0}function un(t,e){var n;if(en.push((function(){if(t)try{t.call(e)}catch(Ys){Qe(Ys,e,"nextTick")}else n&&n(e)})),nn||(nn=!0,Ze()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}function ln(t){return function(e,n){if(void 0===n&&(n=vt),n)return hn(n,t,e)}}function hn(t,e,n){var r=t.$options;r[e]=mr(r[e],n)}ln("beforeMount"),ln("mounted"),ln("beforeUpdate"),ln("updated"),ln("beforeDestroy"),ln("destroyed"),ln("activated"),ln("deactivated"),ln("serverPrefetch"),ln("renderTracked"),ln("renderTriggered"),ln("errorCaptured");var fn="2.7.13";var dn=new dt;function pn(t){return vn(t,dn),dn.clear(),t}function vn(t,e){var n,r,o=i(t);if(!(!o&&!h(t)||t.__v_skip||Object.isFrozen(t)||t instanceof gt)){if(t.__ob__){var s=t.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(o){n=t.length;while(n--)vn(t[n],e)}else if(Kt(t))vn(t.value,e);else{r=Object.keys(t),n=r.length;while(n--)vn(t[r[n]],e)}}}var mn,gn=0,yn=function(){function t(t,e,n,r,i){Xt(this,Qt&&!Qt._vm?Qt:t?t._scope:void 0),(this.vm=t)&&i&&(t._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++gn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new dt,this.newDepIds=new dt,this.expression="",l(e)?this.getter=e:(this.getter=X(e),this.getter||(this.getter=M)),this.value=this.lazy?void 0:this.get()}return t.prototype.get=function(){var t;Ct(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Ys){if(!this.user)throw Ys;Qe(Ys,e,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&pn(t),kt(),this.cleanupDeps()}return t},t.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},t.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},t.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Jn(this)},t.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||h(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'.concat(this.expression,'"');Je(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},t.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},t.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},t.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&_(this.vm._scope.effects,this),this.active){var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},t}();function wn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Tn(t,e)}function bn(t,e){mn.$on(t,e)}function _n(t,e){mn.$off(t,e)}function En(t,e){var n=mn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function Tn(t,e,n){mn=t,ee(e,n||{},bn,_n,En,t),mn=void 0}function Sn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(i(t))for(var o=0,s=t.length;o<s;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(i(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var s,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var c=a.length;while(c--)if(s=a[c],s===e||s.fn===e){a.splice(c,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?D(n):n;for(var r=D(arguments,1),i='event handler for "'.concat(t,'"'),o=0,s=n.length;o<s;o++)Je(n[o],e,r,e,i)}return e}}var In=null;function Cn(t){var e=In;return In=t,function(){In=e}}function kn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._provided=n?n._provided:Object.create(null),t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function An(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=Cn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);var s=n;while(s&&s.$vnode&&s.$parent&&s.$vnode===s.$parent._vnode)s.$parent.$el=s.$el,s=s.$parent},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Pn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||_(e.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Pn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function On(t,e,n){var r;t.$el=e,t.$options.render||(t.$options.render=yt),Pn(t,"beforeMount"),r=function(){t._update(t._render(),n)};var i={before:function(){t._isMounted&&!t._isDestroyed&&Pn(t,"beforeUpdate")}};new yn(t,r,M,i,!0),n=!1;var o=t._preWatchers;if(o)for(var s=0;s<o.length;s++)o[s].run();return null==t.$vnode&&(t._isMounted=!0,Pn(t,"mounted")),t}function xn(t,e,n,i,o){var s=i.data.scopedSlots,a=t.$scopedSlots,c=!!(s&&!s.$stable||a!==r&&!a.$stable||s&&t.$scopedSlots.$key!==s.$key||!s&&t.$scopedSlots.$key),u=!!(o||t.$options._renderChildren||c),l=t.$vnode;t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o;var h=i.data.attrs||r;t._attrsProxy&&Ne(t._attrsProxy,h,l.data&&l.data.attrs||r,t,"$attrs")&&(u=!0),t.$attrs=h,n=n||r;var f=t.$options._parentListeners;if(t._listenersProxy&&Ne(t._listenersProxy,n,f||r,t,"$listeners"),t.$listeners=t.$options._parentListeners=n,Tn(t,n,f),e&&t.$options.props){jt(!1);for(var d=t._props,p=t.$options._propKeys||[],v=0;v<p.length;v++){var m=p[v],g=t.$options.props;d[m]=Ir(m,g,e,t)}jt(!0),t.$options.propsData=e}u&&(t.$slots=Se(o,i.context),t.$forceUpdate())}function Rn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Nn(t,e){if(e){if(t._directInactive=!1,Rn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Nn(t.$children[n]);Pn(t,"activated")}}function Dn(t,e){if((!e||(t._directInactive=!0,!Rn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);Pn(t,"deactivated")}}function Pn(t,e,n,r){void 0===r&&(r=!0),Ct();var i=vt;r&&mt(t);var o=t.$options[e],s="".concat(e," hook");if(o)for(var a=0,c=o.length;a<c;a++)Je(o[a],t,n||null,t,s);t._hasHookEvent&&t.$emit("hook:"+e),r&&mt(i),kt()}var Ln=[],Mn=[],$n={},jn=!1,Un=!1,Fn=0;function Vn(){Fn=Ln.length=Mn.length=0,$n={},jn=Un=!1}var Bn=0,qn=Date.now;if(Z&&!et){var Hn=window.performance;Hn&&"function"===typeof Hn.now&&qn()>document.createEvent("Event").timeStamp&&(qn=function(){return Hn.now()})}var zn=function(t,e){if(t.post){if(!e.post)return 1}else if(e.post)return-1;return t.id-e.id};function Kn(){var t,e;for(Bn=qn(),Un=!0,Ln.sort(zn),Fn=0;Fn<Ln.length;Fn++)t=Ln[Fn],t.before&&t.before(),e=t.id,$n[e]=null,t.run();var n=Mn.slice(),r=Ln.slice();Vn(),Qn(n),Gn(r),Tt(),ht&&K.devtools&&ht.emit("flush")}function Gn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&Pn(r,"updated")}}function Wn(t){t._inactive=!1,Mn.push(t)}function Qn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Nn(t[e],!0)}function Jn(t){var e=t.id;if(null==$n[e]&&(t!==St.target||!t.noRecurse)){if($n[e]=!0,Un){var n=Ln.length-1;while(n>Fn&&Ln[n].id>t.id)n--;Ln.splice(n+1,0,t)}else Ln.push(t);jn||(jn=!0,un(Kn))}}function Xn(t){var e=t.$options.provide;if(e){var n=l(e)?e.call(t):e;if(!h(n))return;for(var r=Yt(t),i=pt?Reflect.ownKeys(n):Object.keys(n),o=0;o<i.length;o++){var s=i[o];Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(n,s))}}}function Yn(t){var e=Zn(t.$options.inject,t);e&&(jt(!1),Object.keys(e).forEach((function(n){Bt(t,n,e[n])})),jt(!0))}function Zn(t,e){if(t){for(var n=Object.create(null),r=pt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=t[o].from;if(s in e._provided)n[o]=e._provided[s];else if("default"in t[o]){var a=t[o].default;n[o]=l(a)?a.call(e):a}else 0}}return n}}function tr(t,e,n,o,s){var c,u=this,l=s.options;T(o,"_uid")?(c=Object.create(o),c._original=o):(c=o,o=o._original);var h=a(l._compiled),f=!h;this.data=t,this.props=e,this.children=n,this.parent=o,this.listeners=t.on||r,this.injections=Zn(l.inject,o),this.slots=function(){return u.$slots||ke(o,t.scopedSlots,u.$slots=Se(n,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ke(o,t.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=ke(o,t.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,e,n,r){var s=ze(c,t,e,n,r,f);return s&&!i(s)&&(s.fnScopeId=l._scopeId,s.fnContext=o),s}:this._c=function(t,e,n,r){return ze(c,t,e,n,r,f)}}function er(t,e,n,o,a){var c=t.options,u={},l=c.props;if(s(l))for(var h in l)u[h]=Ir(h,l,e||r);else s(n.attrs)&&rr(u,n.attrs),s(n.props)&&rr(u,n.props);var f=new tr(n,u,a,o,t),d=c.render.call(null,f._c,f);if(d instanceof gt)return nr(d,n,f.parent,c,f);if(i(d)){for(var p=se(d)||[],v=new Array(p.length),m=0;m<p.length;m++)v[m]=nr(p[m],n,f.parent,c,f);return v}}function nr(t,e,n,r,i){var o=bt(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function rr(t,e){for(var n in e)t[C(n)]=e[n]}function ir(t){return t.name||t.__name||t._componentTag}Te(tr.prototype);var or={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;or.prepatch(n,n)}else{var r=t.componentInstance=cr(t,In);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;xn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Pn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Wn(n):Nn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Dn(e,!0):e.$destroy())}},sr=Object.keys(or);function ar(t,e,n,r,i){if(!o(t)){var c=n.$options._base;if(h(t)&&(t=c.extend(t)),"function"===typeof t){var u;if(o(t.cid)&&(u=t,t=Ve(u,c),void 0===t))return Fe(u,e,n,r,i);e=e||{},Qr(t),s(e.model)&&hr(t.options,e);var l=re(e,t,i);if(a(t.options.functional))return er(t,l,e,n,r);var f=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}ur(e);var p=ir(t.options)||i,v=new gt("vue-component-".concat(t.cid).concat(p?"-".concat(p):""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:f,tag:i,children:r},u);return v}}}function cr(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return s(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function ur(t){for(var e=t.hook||(t.hook={}),n=0;n<sr.length;n++){var r=sr[n],i=e[r],o=or[r];i===o||i&&i._merged||(e[r]=i?lr(o,i):o)}}function lr(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function hr(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[r],c=e.model.callback;s(a)?(i(a)?-1===a.indexOf(c):a!==c)&&(o[r]=[c].concat(a)):o[r]=c}var fr=M,dr=K.optionMergeStrategies;function pr(t,e){if(!e)return t;for(var n,r,i,o=pt?Reflect.ownKeys(e):Object.keys(e),s=0;s<o.length;s++)n=o[s],"__ob__"!==n&&(r=t[n],i=e[n],T(t,n)?r!==i&&d(r)&&d(i)&&pr(r,i):qt(t,n,i));return t}function vr(t,e,n){return n?function(){var r=l(e)?e.call(n,n):e,i=l(t)?t.call(n,n):t;return r?pr(r,i):i}:e?t?function(){return pr(l(e)?e.call(this,this):e,l(t)?t.call(this,this):t)}:e:t}function mr(t,e){var n=e?t?t.concat(e):i(e)?e:[e]:t;return n?gr(n):n}function gr(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function yr(t,e,n,r){var i=Object.create(t||null);return e?P(i,e):i}dr.data=function(t,e,n){return n?vr(t,e,n):e&&"function"!==typeof e?t:vr(t,e)},z.forEach((function(t){dr[t]=mr})),H.forEach((function(t){dr[t+"s"]=yr})),dr.watch=function(t,e,n,r){if(t===at&&(t=void 0),e===at&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var s in P(o,t),e){var a=o[s],c=e[s];a&&!i(a)&&(a=[a]),o[s]=a?a.concat(c):i(c)?c:[c]}return o},dr.props=dr.methods=dr.inject=dr.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return P(i,t),e&&P(i,e),i},dr.provide=vr;var wr=function(t,e){return void 0===e?t:e};function br(t,e){var n=t.props;if(n){var r,o,s,a={};if(i(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(s=C(o),a[s]={type:null})}else if(d(n))for(var c in n)o=n[c],s=C(c),a[s]=d(o)?o:{type:o};else 0;t.props=a}}function _r(t,e){var n=t.inject;if(n){var r=t.inject={};if(i(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(d(n))for(var s in n){var a=n[s];r[s]=d(a)?P({from:s},a):{from:a}}else 0}}function Er(t){var e=t.directives;if(e)for(var n in e){var r=e[n];l(r)&&(e[n]={bind:r,update:r})}}function Tr(t,e,n){if(l(e)&&(e=e.options),br(e,n),_r(e,n),Er(e),!e._base&&(e.extends&&(t=Tr(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Tr(t,e.mixins[r],n);var o,s={};for(o in t)a(o);for(o in e)T(t,o)||a(o);function a(r){var i=dr[r]||wr;s[r]=i(t[r],e[r],n,r)}return s}function Sr(t,e,n,r){if("string"===typeof n){var i=t[e];if(T(i,n))return i[n];var o=C(n);if(T(i,o))return i[o];var s=k(o);if(T(i,s))return i[s];var a=i[n]||i[o]||i[s];return a}}function Ir(t,e,n,r){var i=e[t],o=!T(n,t),s=n[t],a=xr(Boolean,i.type);if(a>-1)if(o&&!T(i,"default"))s=!1;else if(""===s||s===O(t)){var c=xr(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=Cr(r,i,t);var u=$t;jt(!0),Vt(s),jt(u)}return s}function Cr(t,e,n){if(T(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:l(r)&&"Function"!==Ar(e.type)?r.call(t):r}}var kr=/^\s*function (\w+)/;function Ar(t){var e=t&&t.toString().match(kr);return e?e[1]:""}function Or(t,e){return Ar(t)===Ar(e)}function xr(t,e){if(!i(e))return Or(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Or(e[n],t))return n;return-1}var Rr={enumerable:!0,configurable:!0,get:M,set:M};function Nr(t,e,n){Rr.get=function(){return this[e][n]},Rr.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Rr)}function Dr(t){var e=t.$options;if(e.props&&Pr(t,e.props),xe(t),e.methods&&Br(t,e.methods),e.data)Lr(t);else{var n=Vt(t._data={});n&&n.vmCount++}e.computed&&jr(t,e.computed),e.watch&&e.watch!==at&&qr(t,e.watch)}function Pr(t,e){var n=t.$options.propsData||{},r=t._props=Nt({}),i=t.$options._propKeys=[],o=!t.$parent;o||jt(!1);var s=function(o){i.push(o);var s=Ir(o,e,n,t);Bt(r,o,s),o in t||Nr(t,"_props",o)};for(var a in e)s(a);jt(!0)}function Lr(t){var e=t.$options.data;e=t._data=l(e)?Mr(e,t):e||{},d(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];0,r&&T(r,o)||W(o)||Nr(t,"_data",o)}var s=Vt(e);s&&s.vmCount++}function Mr(t,e){Ct();try{return t.call(e,e)}catch(Ys){return Qe(Ys,e,"data()"),{}}finally{kt()}}var $r={lazy:!0};function jr(t,e){var n=t._computedWatchers=Object.create(null),r=lt();for(var i in e){var o=e[i],s=l(o)?o:o.get;0,r||(n[i]=new yn(t,s||M,M,$r)),i in t||Ur(t,i,o)}}function Ur(t,e,n){var r=!lt();l(n)?(Rr.get=r?Fr(e):Vr(n),Rr.set=M):(Rr.get=n.get?r&&!1!==n.cache?Fr(e):Vr(n.get):M,Rr.set=n.set||M),Object.defineProperty(t,e,Rr)}function Fr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),St.target&&e.depend(),e.value}}function Vr(t){return function(){return t.call(this,this)}}function Br(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?M:N(e[n],t)}function qr(t,e){for(var n in e){var r=e[n];if(i(r))for(var o=0;o<r.length;o++)Hr(t,n,r[o]);else Hr(t,n,r)}}function Hr(t,e,n,r){return d(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function zr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=qt,t.prototype.$delete=Ht,t.prototype.$watch=function(t,e,n){var r=this;if(d(e))return Hr(r,t,e,n);n=n||{},n.user=!0;var i=new yn(r,t,e,n);if(n.immediate){var o='callback for immediate watcher "'.concat(i.expression,'"');Ct(),Je(e,r,[i.value],r,o),kt()}return function(){i.teardown()}}}var Kr=0;function Gr(t){t.prototype._init=function(t){var e=this;e._uid=Kr++,e._isVue=!0,e.__v_skip=!0,e._scope=new Jt(!0),e._scope._vm=!0,t&&t._isComponent?Wr(e,t):e.$options=Tr(Qr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,kn(e),wn(e),Me(e),Pn(e,"beforeCreate",void 0,!1),Yn(e),Dr(e),Xn(e),Pn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Wr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Qr(t){var e=t.options;if(t.super){var n=Qr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Jr(t);i&&P(t.extendOptions,i),e=t.options=Tr(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Jr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Xr(t){this._init(t)}function Yr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=D(arguments,1);return n.unshift(this),l(t.install)?t.install.apply(t,n):l(t)&&t.apply(null,n),e.push(t),this}}function Zr(t){t.mixin=function(t){return this.options=Tr(this.options,t),this}}function ti(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=ir(t)||ir(n.options);var s=function(t){this._init(t)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=e++,s.options=Tr(n.options,t),s["super"]=n,s.options.props&&ei(s),s.options.computed&&ni(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,H.forEach((function(t){s[t]=n[t]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=t,s.sealedOptions=P({},s.options),i[r]=s,s}}function ei(t){var e=t.options.props;for(var n in e)Nr(t.prototype,"_props",n)}function ni(t){var e=t.options.computed;for(var n in e)Ur(t.prototype,n,e[n])}function ri(t){H.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&d(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&l(n)&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function ii(t){return t&&(ir(t.Ctor.options)||t.tag)}function oi(t,e){return i(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function si(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!e(a)&&ai(n,o,r,i)}}}function ai(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,_(n,e)}Gr(Xr),zr(Xr),Sn(Xr),An(Xr),je(Xr);var ci=[String,RegExp,Array],ui={name:"keep-alive",abstract:!0,props:{include:ci,exclude:ci,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;e[i]={name:ii(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&ai(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)ai(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){si(t,(function(t){return oi(e,t)}))})),this.$watch("exclude",(function(e){si(t,(function(t){return!oi(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Be(t),n=e&&e.componentOptions;if(n){var r=ii(n),i=this,o=i.include,s=i.exclude;if(o&&(!r||!oi(o,r))||s&&r&&oi(s,r))return e;var a=this,c=a.cache,u=a.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,_(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},li={KeepAlive:ui};function hi(t){var e={get:function(){return K}};Object.defineProperty(t,"config",e),t.util={warn:fr,extend:P,mergeOptions:Tr,defineReactive:Bt},t.set=qt,t.delete=Ht,t.nextTick=un,t.observable=function(t){return Vt(t),t},t.options=Object.create(null),H.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,P(t.options.components,li),Yr(t),Zr(t),ti(t),ri(t)}hi(Xr),Object.defineProperty(Xr.prototype,"$isServer",{get:lt}),Object.defineProperty(Xr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Xr,"FunctionalRenderContext",{value:tr}),Xr.version=fn;var fi=w("style,class"),di=w("input,textarea,option,select,progress"),pi=function(t,e,n){return"value"===n&&di(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},vi=w("contenteditable,draggable,spellcheck"),mi=w("events,caret,typing,plaintext-only"),gi=function(t,e){return Ei(e)||"false"===e?"false":"contenteditable"===t&&mi(e)?e:"true"},yi=w("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),wi="http://www.w3.org/1999/xlink",bi=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},_i=function(t){return bi(t)?t.slice(6,t.length):""},Ei=function(t){return null==t||!1===t};function Ti(t){var e=t.data,n=t,r=t;while(s(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Si(r.data,e));while(s(n=n.parent))n&&n.data&&(e=Si(e,n.data));return Ii(e.staticClass,e.class)}function Si(t,e){return{staticClass:Ci(t.staticClass,e.staticClass),class:s(t.class)?[t.class,e.class]:e.class}}function Ii(t,e){return s(t)||s(e)?Ci(t,ki(e)):""}function Ci(t,e){return t?e?t+" "+e:t:e||""}function ki(t){return Array.isArray(t)?Ai(t):h(t)?Oi(t):"string"===typeof t?t:""}function Ai(t){for(var e,n="",r=0,i=t.length;r<i;r++)s(e=ki(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Oi(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var xi={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Ri=w("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Ni=w("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Di=function(t){return Ri(t)||Ni(t)};function Pi(t){return Ni(t)?"svg":"math"===t?"math":void 0}var Li=Object.create(null);function Mi(t){if(!Z)return!0;if(Di(t))return!1;if(t=t.toLowerCase(),null!=Li[t])return Li[t];var e=document.createElement(t);return t.indexOf("-")>-1?Li[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Li[t]=/HTMLUnknownElement/.test(e.toString())}var $i=w("text,number,password,search,email,tel,url");function ji(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function Ui(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function Fi(t,e){return document.createElementNS(xi[t],e)}function Vi(t){return document.createTextNode(t)}function Bi(t){return document.createComment(t)}function qi(t,e,n){t.insertBefore(e,n)}function Hi(t,e){t.removeChild(e)}function zi(t,e){t.appendChild(e)}function Ki(t){return t.parentNode}function Gi(t){return t.nextSibling}function Wi(t){return t.tagName}function Qi(t,e){t.textContent=e}function Ji(t,e){t.setAttribute(e,"")}var Xi=Object.freeze({__proto__:null,createElement:Ui,createElementNS:Fi,createTextNode:Vi,createComment:Bi,insertBefore:qi,removeChild:Hi,appendChild:zi,parentNode:Ki,nextSibling:Gi,tagName:Wi,setTextContent:Qi,setStyleScope:Ji}),Yi={create:function(t,e){Zi(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Zi(t,!0),Zi(e))},destroy:function(t){Zi(t,!0)}};function Zi(t,e){var n=t.data.ref;if(s(n)){var r=t.context,o=t.componentInstance||t.elm,a=e?null:o,c=e?void 0:o;if(l(n))Je(n,r,[a],r,"template ref function");else{var u=t.data.refInFor,h="string"===typeof n||"number"===typeof n,f=Kt(n),d=r.$refs;if(h||f)if(u){var p=h?d[n]:n.value;e?i(p)&&_(p,o):i(p)?p.includes(o)||p.push(o):h?(d[n]=[o],to(r,n,d[n])):n.value=[o]}else if(h){if(e&&d[n]!==o)return;d[n]=c,to(r,n,a)}else if(f){if(e&&n.value!==o)return;n.value=a}else 0}}}function to(t,e,n){var r=t._setupState;r&&T(r,e)&&(Kt(r[e])?r[e].value=n:r[e]=n)}var eo=new gt("",{},[]),no=["create","activate","update","remove","destroy"];function ro(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&s(t.data)===s(e.data)&&io(t,e)||a(t.isAsyncPlaceholder)&&o(e.asyncFactory.error))}function io(t,e){if("input"!==t.tag)return!0;var n,r=s(n=t.data)&&s(n=n.attrs)&&n.type,i=s(n=e.data)&&s(n=n.attrs)&&n.type;return r===i||$i(r)&&$i(i)}function oo(t,e,n){var r,i,o={};for(r=e;r<=n;++r)i=t[r].key,s(i)&&(o[i]=r);return o}function so(t){var e,n,r={},c=t.modules,l=t.nodeOps;for(e=0;e<no.length;++e)for(r[no[e]]=[],n=0;n<c.length;++n)s(c[n][no[e]])&&r[no[e]].push(c[n][no[e]]);function h(t){return new gt(l.tagName(t).toLowerCase(),{},[],void 0,t)}function f(t,e){function n(){0===--n.listeners&&d(t)}return n.listeners=e,n}function d(t){var e=l.parentNode(t);s(e)&&l.removeChild(e,t)}function p(t,e,n,r,i,o,c){if(s(t.elm)&&s(o)&&(t=o[c]=bt(t)),t.isRootInsert=!i,!v(t,e,n,r)){var u=t.data,h=t.children,f=t.tag;s(f)?(t.elm=t.ns?l.createElementNS(t.ns,f):l.createElement(f,t),T(t),b(t,h,e),s(u)&&E(t,e),y(n,t.elm,r)):a(t.isComment)?(t.elm=l.createComment(t.text),y(n,t.elm,r)):(t.elm=l.createTextNode(t.text),y(n,t.elm,r))}}function v(t,e,n,r){var i=t.data;if(s(i)){var o=s(t.componentInstance)&&i.keepAlive;if(s(i=i.hook)&&s(i=i.init)&&i(t,!1),s(t.componentInstance))return m(t,e),y(n,t.elm,r),a(o)&&g(t,e,n,r),!0}}function m(t,e){s(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,_(t)?(E(t,e),T(t)):(Zi(t),e.push(t))}function g(t,e,n,i){var o,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,s(o=a.data)&&s(o=o.transition)){for(o=0;o<r.activate.length;++o)r.activate[o](eo,a);e.push(a);break}y(n,t.elm,i)}function y(t,e,n){s(t)&&(s(n)?l.parentNode(n)===t&&l.insertBefore(t,e,n):l.appendChild(t,e))}function b(t,e,n){if(i(e)){0;for(var r=0;r<e.length;++r)p(e[r],n,t.elm,null,!0,e,r)}else u(t.text)&&l.appendChild(t.elm,l.createTextNode(String(t.text)))}function _(t){while(t.componentInstance)t=t.componentInstance._vnode;return s(t.tag)}function E(t,n){for(var i=0;i<r.create.length;++i)r.create[i](eo,t);e=t.data.hook,s(e)&&(s(e.create)&&e.create(eo,t),s(e.insert)&&n.push(t))}function T(t){var e;if(s(e=t.fnScopeId))l.setStyleScope(t.elm,e);else{var n=t;while(n)s(e=n.context)&&s(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e),n=n.parent}s(e=In)&&e!==t.context&&e!==t.fnContext&&s(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e)}function S(t,e,n,r,i,o){for(;r<=i;++r)p(n[r],o,t,e,!1,n,r)}function I(t){var e,n,i=t.data;if(s(i))for(s(e=i.hook)&&s(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(s(e=t.children))for(n=0;n<t.children.length;++n)I(t.children[n])}function C(t,e,n){for(;e<=n;++e){var r=t[e];s(r)&&(s(r.tag)?(k(r),I(r)):d(r.elm))}}function k(t,e){if(s(e)||s(t.data)){var n,i=r.remove.length+1;for(s(e)?e.listeners+=i:e=f(t.elm,i),s(n=t.componentInstance)&&s(n=n._vnode)&&s(n.data)&&k(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);s(n=t.data.hook)&&s(n=n.remove)?n(t,e):e()}else d(t.elm)}function A(t,e,n,r,i){var a,c,u,h,f=0,d=0,v=e.length-1,m=e[0],g=e[v],y=n.length-1,w=n[0],b=n[y],_=!i;while(f<=v&&d<=y)o(m)?m=e[++f]:o(g)?g=e[--v]:ro(m,w)?(x(m,w,r,n,d),m=e[++f],w=n[++d]):ro(g,b)?(x(g,b,r,n,y),g=e[--v],b=n[--y]):ro(m,b)?(x(m,b,r,n,y),_&&l.insertBefore(t,m.elm,l.nextSibling(g.elm)),m=e[++f],b=n[--y]):ro(g,w)?(x(g,w,r,n,d),_&&l.insertBefore(t,g.elm,m.elm),g=e[--v],w=n[++d]):(o(a)&&(a=oo(e,f,v)),c=s(w.key)?a[w.key]:O(w,e,f,v),o(c)?p(w,r,t,m.elm,!1,n,d):(u=e[c],ro(u,w)?(x(u,w,r,n,d),e[c]=void 0,_&&l.insertBefore(t,u.elm,m.elm)):p(w,r,t,m.elm,!1,n,d)),w=n[++d]);f>v?(h=o(n[y+1])?null:n[y+1].elm,S(t,h,n,d,y,r)):d>y&&C(e,f,v)}function O(t,e,n,r){for(var i=n;i<r;i++){var o=e[i];if(s(o)&&ro(t,o))return i}}function x(t,e,n,i,c,u){if(t!==e){s(e.elm)&&s(i)&&(e=i[c]=bt(e));var h=e.elm=t.elm;if(a(t.isAsyncPlaceholder))s(e.asyncFactory.resolved)?D(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,d=e.data;s(d)&&s(f=d.hook)&&s(f=f.prepatch)&&f(t,e);var p=t.children,v=e.children;if(s(d)&&_(e)){for(f=0;f<r.update.length;++f)r.update[f](t,e);s(f=d.hook)&&s(f=f.update)&&f(t,e)}o(e.text)?s(p)&&s(v)?p!==v&&A(h,p,v,n,u):s(v)?(s(t.text)&&l.setTextContent(h,""),S(h,null,v,0,v.length-1,n)):s(p)?C(p,0,p.length-1):s(t.text)&&l.setTextContent(h,""):t.text!==e.text&&l.setTextContent(h,e.text),s(d)&&s(f=d.hook)&&s(f=f.postpatch)&&f(t,e)}}}function R(t,e,n){if(a(n)&&s(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var N=w("attrs,class,staticClass,staticStyle,key");function D(t,e,n,r){var i,o=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,a(e.isComment)&&s(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(s(c)&&(s(i=c.hook)&&s(i=i.init)&&i(e,!0),s(i=e.componentInstance)))return m(e,n),!0;if(s(o)){if(s(u))if(t.hasChildNodes())if(s(i=c)&&s(i=i.domProps)&&s(i=i.innerHTML)){if(i!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,f=0;f<u.length;f++){if(!h||!D(h,u[f],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else b(e,u,n);if(s(c)){var d=!1;for(var p in c)if(!N(p)){d=!0,E(e,n);break}!d&&c["class"]&&pn(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,i){if(!o(e)){var c=!1,u=[];if(o(t))c=!0,p(e,u);else{var f=s(t.nodeType);if(!f&&ro(t,e))x(t,e,u,null,null,i);else{if(f){if(1===t.nodeType&&t.hasAttribute(q)&&(t.removeAttribute(q),n=!0),a(n)&&D(t,e,u))return R(e,u,!0),t;t=h(t)}var d=t.elm,v=l.parentNode(d);if(p(e,u,d._leaveCb?null:v,l.nextSibling(d)),s(e.parent)){var m=e.parent,g=_(e);while(m){for(var y=0;y<r.destroy.length;++y)r.destroy[y](m);if(m.elm=e.elm,g){for(var w=0;w<r.create.length;++w)r.create[w](eo,m);var b=m.data.hook.insert;if(b.merged)for(var E=1;E<b.fns.length;E++)b.fns[E]()}else Zi(m);m=m.parent}}s(v)?C([t],0,0):s(t.tag)&&I(t)}}return R(e,u,c),e.elm}s(t)&&I(t)}}var ao={create:co,update:co,destroy:function(t){co(t,eo)}};function co(t,e){(t.data.directives||e.data.directives)&&uo(t,e)}function uo(t,e){var n,r,i,o=t===eo,s=e===eo,a=ho(t.data.directives,t.context),c=ho(e.data.directives,e.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,po(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(po(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)po(u[n],"inserted",e,t)};o?ne(e,"insert",h):h()}if(l.length&&ne(e,"postpatch",(function(){for(var n=0;n<l.length;n++)po(l[n],"componentUpdated",e,t)})),!o)for(n in a)c[n]||po(a[n],"unbind",t,t,s)}var lo=Object.create(null);function ho(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++){if(r=t[n],r.modifiers||(r.modifiers=lo),i[fo(r)]=r,e._setupState&&e._setupState.__sfc){var o=r.def||Sr(e,"_setupState","v-"+r.name);r.def="function"===typeof o?{bind:o,update:o}:o}r.def=r.def||Sr(e.$options,"directives",r.name,!0)}return i}function fo(t){return t.rawName||"".concat(t.name,".").concat(Object.keys(t.modifiers||{}).join("."))}function po(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(Ys){Qe(Ys,n.context,"directive ".concat(t.name," ").concat(e," hook"))}}var vo=[Yi,ao];function mo(t,e){var n=e.componentOptions;if((!s(n)||!1!==n.Ctor.options.inheritAttrs)&&(!o(t.data.attrs)||!o(e.data.attrs))){var r,i,c,u=e.elm,l=t.data.attrs||{},h=e.data.attrs||{};for(r in(s(h.__ob__)||a(h._v_attr_proxy))&&(h=e.data.attrs=P({},h)),h)i=h[r],c=l[r],c!==i&&go(u,r,i,e.data.pre);for(r in(et||rt)&&h.value!==l.value&&go(u,"value",h.value),l)o(h[r])&&(bi(r)?u.removeAttributeNS(wi,_i(r)):vi(r)||u.removeAttribute(r))}}function go(t,e,n,r){r||t.tagName.indexOf("-")>-1?yo(t,e,n):yi(e)?Ei(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):vi(e)?t.setAttribute(e,gi(e,n)):bi(e)?Ei(n)?t.removeAttributeNS(wi,_i(e)):t.setAttributeNS(wi,e,n):yo(t,e,n)}function yo(t,e,n){if(Ei(n))t.removeAttribute(e);else{if(et&&!nt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var wo={create:mo,update:mo};function bo(t,e){var n=e.elm,r=e.data,i=t.data;if(!(o(r.staticClass)&&o(r.class)&&(o(i)||o(i.staticClass)&&o(i.class)))){var a=Ti(e),c=n._transitionClasses;s(c)&&(a=Ci(a,ki(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var _o,Eo={create:bo,update:bo},To="__r",So="__c";function Io(t){if(s(t[To])){var e=et?"change":"input";t[e]=[].concat(t[To],t[e]||[]),delete t[To]}s(t[So])&&(t.change=[].concat(t[So],t.change||[]),delete t[So])}function Co(t,e,n){var r=_o;return function i(){var o=e.apply(null,arguments);null!==o&&Oo(t,i,n,r)}}var ko=tn&&!(st&&Number(st[1])<=53);function Ao(t,e,n,r){if(ko){var i=Bn,o=e;e=o._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return o.apply(this,arguments)}}_o.addEventListener(t,e,ct?{capture:n,passive:r}:n)}function Oo(t,e,n,r){(r||_o).removeEventListener(t,e._wrapper||e,n)}function xo(t,e){if(!o(t.data.on)||!o(e.data.on)){var n=e.data.on||{},r=t.data.on||{};_o=e.elm||t.elm,Io(n),ee(n,r,Ao,Oo,Co,e.context),_o=void 0}}var Ro,No={create:xo,update:xo,destroy:function(t){return xo(t,eo)}};function Do(t,e){if(!o(t.data.domProps)||!o(e.data.domProps)){var n,r,i=e.elm,c=t.data.domProps||{},u=e.data.domProps||{};for(n in(s(u.__ob__)||a(u._v_attr_proxy))&&(u=e.data.domProps=P({},u)),c)n in u||(i[n]="");for(n in u){if(r=u[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),r===c[n])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0])}if("value"===n&&"PROGRESS"!==i.tagName){i._value=r;var l=o(r)?"":String(r);Po(i,l)&&(i.value=l)}else if("innerHTML"===n&&Ni(i.tagName)&&o(i.innerHTML)){Ro=Ro||document.createElement("div"),Ro.innerHTML="<svg>".concat(r,"</svg>");var h=Ro.firstChild;while(i.firstChild)i.removeChild(i.firstChild);while(h.firstChild)i.appendChild(h.firstChild)}else if(r!==c[n])try{i[n]=r}catch(Ys){}}}}function Po(t,e){return!t.composing&&("OPTION"===t.tagName||Lo(t,e)||Mo(t,e))}function Lo(t,e){var n=!0;try{n=document.activeElement!==t}catch(Ys){}return n&&t.value!==e}function Mo(t,e){var n=t.value,r=t._vModifiers;if(s(r)){if(r.number)return y(n)!==y(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var $o={create:Do,update:Do},jo=S((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function Uo(t){var e=Fo(t.style);return t.staticStyle?P(t.staticStyle,e):e}function Fo(t){return Array.isArray(t)?L(t):"string"===typeof t?jo(t):t}function Vo(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=Uo(i.data))&&P(r,n)}(n=Uo(t.data))&&P(r,n);var o=t;while(o=o.parent)o.data&&(n=Uo(o.data))&&P(r,n);return r}var Bo,qo=/^--/,Ho=/\s*!important$/,zo=function(t,e,n){if(qo.test(e))t.style.setProperty(e,n);else if(Ho.test(n))t.style.setProperty(O(e),n.replace(Ho,""),"important");else{var r=Go(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},Ko=["Webkit","Moz","ms"],Go=S((function(t){if(Bo=Bo||document.createElement("div").style,t=C(t),"filter"!==t&&t in Bo)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Ko.length;n++){var r=Ko[n]+e;if(r in Bo)return r}}));function Wo(t,e){var n=e.data,r=t.data;if(!(o(n.staticStyle)&&o(n.style)&&o(r.staticStyle)&&o(r.style))){var i,a,c=e.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},h=u||l,f=Fo(e.data.style)||{};e.data.normalizedStyle=s(f.__ob__)?P({},f):f;var d=Vo(e,!0);for(a in h)o(d[a])&&zo(c,a,"");for(a in d)i=d[a],i!==h[a]&&zo(c,a,null==i?"":i)}}var Qo={create:Wo,update:Wo},Jo=/\s+/;function Xo(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Jo).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" ".concat(t.getAttribute("class")||""," ");n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Yo(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Jo).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" ".concat(t.getAttribute("class")||""," "),r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Zo(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&P(e,ts(t.name||"v")),P(e,t),e}return"string"===typeof t?ts(t):void 0}}var ts=S((function(t){return{enterClass:"".concat(t,"-enter"),enterToClass:"".concat(t,"-enter-to"),enterActiveClass:"".concat(t,"-enter-active"),leaveClass:"".concat(t,"-leave"),leaveToClass:"".concat(t,"-leave-to"),leaveActiveClass:"".concat(t,"-leave-active")}})),es=Z&&!nt,ns="transition",rs="animation",is="transition",os="transitionend",ss="animation",as="animationend";es&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(is="WebkitTransition",os="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(ss="WebkitAnimation",as="webkitAnimationEnd"));var cs=Z?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function us(t){cs((function(){cs(t)}))}function ls(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Xo(t,e))}function hs(t,e){t._transitionClasses&&_(t._transitionClasses,e),Yo(t,e)}function fs(t,e,n){var r=ps(t,e),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===ns?os:as,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=s&&u()};setTimeout((function(){c<s&&u()}),o+1),t.addEventListener(a,l)}var ds=/\b(transform|all)(,|$)/;function ps(t,e){var n,r=window.getComputedStyle(t),i=(r[is+"Delay"]||"").split(", "),o=(r[is+"Duration"]||"").split(", "),s=vs(i,o),a=(r[ss+"Delay"]||"").split(", "),c=(r[ss+"Duration"]||"").split(", "),u=vs(a,c),l=0,h=0;e===ns?s>0&&(n=ns,l=s,h=o.length):e===rs?u>0&&(n=rs,l=u,h=c.length):(l=Math.max(s,u),n=l>0?s>u?ns:rs:null,h=n?n===ns?o.length:c.length:0);var f=n===ns&&ds.test(r[is+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:f}}function vs(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return ms(e)+ms(t[n])})))}function ms(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function gs(t,e){var n=t.elm;s(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Zo(t.data.transition);if(!o(r)&&!s(n._enterCb)&&1===n.nodeType){var i=r.css,a=r.type,c=r.enterClass,u=r.enterToClass,f=r.enterActiveClass,d=r.appearClass,p=r.appearToClass,v=r.appearActiveClass,m=r.beforeEnter,g=r.enter,w=r.afterEnter,b=r.enterCancelled,_=r.beforeAppear,E=r.appear,T=r.afterAppear,S=r.appearCancelled,I=r.duration,C=In,k=In.$vnode;while(k&&k.parent)C=k.context,k=k.parent;var A=!C._isMounted||!t.isRootInsert;if(!A||E||""===E){var O=A&&d?d:c,x=A&&v?v:f,R=A&&p?p:u,N=A&&_||m,D=A&&l(E)?E:g,P=A&&T||w,L=A&&S||b,M=y(h(I)?I.enter:I);0;var $=!1!==i&&!nt,j=bs(D),U=n._enterCb=V((function(){$&&(hs(n,R),hs(n,x)),U.cancelled?($&&hs(n,O),L&&L(n)):P&&P(n),n._enterCb=null}));t.data.show||ne(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),D&&D(n,U)})),N&&N(n),$&&(ls(n,O),ls(n,x),us((function(){hs(n,O),U.cancelled||(ls(n,R),j||(ws(M)?setTimeout(U,M):fs(n,a,U)))}))),t.data.show&&(e&&e(),D&&D(n,U)),$||j||U()}}}function ys(t,e){var n=t.elm;s(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Zo(t.data.transition);if(o(r)||1!==n.nodeType)return e();if(!s(n._leaveCb)){var i=r.css,a=r.type,c=r.leaveClass,u=r.leaveToClass,l=r.leaveActiveClass,f=r.beforeLeave,d=r.leave,p=r.afterLeave,v=r.leaveCancelled,m=r.delayLeave,g=r.duration,w=!1!==i&&!nt,b=bs(d),_=y(h(g)?g.leave:g);0;var E=n._leaveCb=V((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),w&&(hs(n,u),hs(n,l)),E.cancelled?(w&&hs(n,c),v&&v(n)):(e(),p&&p(n)),n._leaveCb=null}));m?m(T):T()}function T(){E.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),f&&f(n),w&&(ls(n,c),ls(n,l),us((function(){hs(n,c),E.cancelled||(ls(n,u),b||(ws(_)?setTimeout(E,_):fs(n,a,E)))}))),d&&d(n,E),w||b||E())}}function ws(t){return"number"===typeof t&&!isNaN(t)}function bs(t){if(o(t))return!1;var e=t.fns;return s(e)?bs(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function _s(t,e){!0!==e.data.show&&gs(e)}var Es=Z?{create:_s,activate:_s,remove:function(t,e){!0!==t.data.show?ys(t,e):e()}}:{},Ts=[wo,Eo,No,$o,Qo,Es],Ss=Ts.concat(vo),Is=so({nodeOps:Xi,modules:Ss});nt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&Ds(t,"input")}));var Cs={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?ne(n,"postpatch",(function(){Cs.componentUpdated(t,e,n)})):ks(t,e,n.context),t._vOptions=[].map.call(t.options,xs)):("textarea"===n.tag||$i(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",Rs),t.addEventListener("compositionend",Ns),t.addEventListener("change",Ns),nt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){ks(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,xs);if(i.some((function(t,e){return!U(t,r[e])}))){var o=t.multiple?e.value.some((function(t){return Os(t,i)})):e.value!==e.oldValue&&Os(e.value,i);o&&Ds(t,"change")}}}};function ks(t,e,n){As(t,e,n),(et||rt)&&setTimeout((function(){As(t,e,n)}),0)}function As(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=t.options.length;a<c;a++)if(s=t.options[a],i)o=F(r,xs(s))>-1,s.selected!==o&&(s.selected=o);else if(U(xs(s),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function Os(t,e){return e.every((function(e){return!U(e,t)}))}function xs(t){return"_value"in t?t._value:t.value}function Rs(t){t.target.composing=!0}function Ns(t){t.target.composing&&(t.target.composing=!1,Ds(t.target,"input"))}function Ds(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Ps(t){return!t.componentInstance||t.data&&t.data.transition?t:Ps(t.componentInstance._vnode)}var Ls={bind:function(t,e,n){var r=e.value;n=Ps(n);var i=n.data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,gs(n,(function(){t.style.display=o}))):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=Ps(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?gs(n,(function(){t.style.display=t.__vOriginalDisplay})):ys(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},Ms={model:Cs,show:Ls},$s={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function js(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?js(Be(e.children)):t}function Us(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var r in i)e[C(r)]=i[r];return e}function Fs(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function Vs(t){while(t=t.parent)if(t.data.transition)return!0}function Bs(t,e){return e.key===t.key&&e.tag===t.tag}var qs=function(t){return t.tag||Ce(t)},Hs=function(t){return"show"===t.name},zs={name:"transition",props:$s,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(qs),n.length)){0;var r=this.mode;0;var i=n[0];if(Vs(this.$vnode))return i;var o=js(i);if(!o)return i;if(this._leaving)return Fs(t,i);var s="__transition-".concat(this._uid,"-");o.key=null==o.key?o.isComment?s+"comment":s+o.tag:u(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var a=(o.data||(o.data={})).transition=Us(this),c=this._vnode,l=js(c);if(o.data.directives&&o.data.directives.some(Hs)&&(o.data.show=!0),l&&l.data&&!Bs(o,l)&&!Ce(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=P({},a);if("out-in"===r)return this._leaving=!0,ne(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),Fs(t,i);if("in-out"===r){if(Ce(o))return c;var f,d=function(){f()};ne(a,"afterEnter",d),ne(a,"enterCancelled",d),ne(h,"delayLeave",(function(t){f=t}))}}return i}}},Ks=P({tag:String,moveClass:String},$s);delete Ks.mode;var Gs={props:Ks,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=Cn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=Us(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=s;else;}if(r){var u=[],l=[];for(a=0;a<r.length;a++){c=r[a];c.data.transition=s,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?u.push(c):l.push(c)}this.kept=t(e,null,u),this.removed=l}return t(e,null,o)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(Ws),t.forEach(Qs),t.forEach(Js),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;ls(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(os,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(os,t),n._moveCb=null,hs(n,e))})}})))},methods:{hasMove:function(t,e){if(!es)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Yo(n,t)})),Xo(n,e),n.style.display="none",this.$el.appendChild(n);var r=ps(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function Ws(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Qs(t){t.data.newPos=t.elm.getBoundingClientRect()}function Js(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),o.transitionDuration="0s"}}var Xs={Transition:zs,TransitionGroup:Gs};Xr.config.mustUseProp=pi,Xr.config.isReservedTag=Di,Xr.config.isReservedAttr=fi,Xr.config.getTagNamespace=Pi,Xr.config.isUnknownElement=Mi,P(Xr.options.directives,Ms),P(Xr.options.components,Xs),Xr.prototype.__patch__=Z?Is:M,Xr.prototype.$mount=function(t,e){return t=t&&Z?ji(t):void 0,On(this,t,e)},Z&&setTimeout((function(){K.devtools&&ht&&ht.emit("init",Xr)}),0)},3822:function(t,e,n){"use strict";n.d(e,{Se:function(){return L}});n(7658),n(541);
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function r(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}var i="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{},o=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function s(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){o.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){o.emit("vuex:action",t,e)}),{prepend:!0}))}function a(t,e){return t.filter(e)[0]}function c(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=a(e,(function(e){return e.original===t}));if(n)return n.copy;var r=Array.isArray(t)?[]:{};return e.push({original:t,copy:r}),Object.keys(t).forEach((function(n){r[n]=c(t[n],e)})),r}function u(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function l(t){return null!==t&&"object"===typeof t}function h(t){return t&&"function"===typeof t.then}function f(t,e){return function(){return t(e)}}var d=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},d.prototype.addChild=function(t,e){this._children[t]=e},d.prototype.removeChild=function(t){delete this._children[t]},d.prototype.getChild=function(t){return this._children[t]},d.prototype.hasChild=function(t){return t in this._children},d.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},d.prototype.forEachChild=function(t){u(this._children,t)},d.prototype.forEachGetter=function(t){this._rawModule.getters&&u(this._rawModule.getters,t)},d.prototype.forEachAction=function(t){this._rawModule.actions&&u(this._rawModule.actions,t)},d.prototype.forEachMutation=function(t){this._rawModule.mutations&&u(this._rawModule.mutations,t)},Object.defineProperties(d.prototype,p);var v=function(t){this.register([],t,!1)};function m(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;m(t.concat(r),e.getChild(r),n.modules[r])}}v.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},v.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},v.prototype.update=function(t){m([],this.root,t)},v.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new d(e,n);if(0===t.length)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}e.modules&&u(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},v.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},v.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var g;var y=function(t){var e=this;void 0===t&&(t={}),!g&&"undefined"!==typeof window&&window.Vue&&N(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new v(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new g,this._makeLocalGettersCache=Object.create(null);var i=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(t,e){return a.call(i,t,e)},this.commit=function(t,e,n){return c.call(i,t,e,n)},this.strict=r;var u=this._modules.root.state;T(this,u,[],this._modules.root),E(this,u),n.forEach((function(t){return t(e)}));var l=void 0!==t.devtools?t.devtools:g.config.devtools;l&&s(this)},w={state:{configurable:!0}};function b(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function _(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;T(t,n,[],t._modules.root,!0),E(t,n,e)}function E(t,e,n){var r=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={};u(i,(function(e,n){o[n]=f(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var s=g.config.silent;g.config.silent=!0,t._vm=new g({data:{$$state:e},computed:o}),g.config.silent=s,t.strict&&O(t),r&&(n&&t._withCommit((function(){r._data.$$state=null})),g.nextTick((function(){return r.$destroy()})))}function T(t,e,n,r,i){var o=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=r),!o&&!i){var a=x(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){g.set(a,c,r.state)}))}var u=r.context=S(t,s,n);r.forEachMutation((function(e,n){var r=s+n;C(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:s+n,i=e.handler||e;k(t,r,i,u)})),r.forEachGetter((function(e,n){var r=s+n;A(t,r,e,u)})),r.forEachChild((function(r,o){T(t,e,n.concat(o),r,i)}))}function S(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var o=R(n,r,i),s=o.payload,a=o.options,c=o.type;return a&&a.root||(c=e+c),t.dispatch(c,s)},commit:r?t.commit:function(n,r,i){var o=R(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=e+c),t.commit(c,s,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return I(t,e)}},state:{get:function(){return x(t.state,n)}}}),i}function I(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function C(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function k(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return h(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function A(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function O(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function x(t,e){return e.reduce((function(t,e){return t[e]}),t)}function R(t,e,n){return l(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function N(t){g&&t===g||(g=t,r(g))}w.state.get=function(){return this._vm._data.$$state},w.state.set=function(t){0},y.prototype.commit=function(t,e,n){var r=this,i=R(t,e,n),o=i.type,s=i.payload,a=(i.options,{type:o,payload:s}),c=this._mutations[o];c&&(this._withCommit((function(){c.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},y.prototype.dispatch=function(t,e){var n=this,r=R(t,e),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(t){return t(o)}))):a[0](o);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,n.state,t)}))}catch(u){0}e(t)}))}))}},y.prototype.subscribe=function(t,e){return b(t,this._subscribers,e)},y.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return b(n,this._actionSubscribers,e)},y.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch((function(){return t(r.state,r.getters)}),e,n)},y.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},y.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),T(this,this.state,t,this._modules.get(t),n.preserveState),E(this,this.state)},y.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=x(e.state,t.slice(0,-1));g.delete(n,t[t.length-1])})),_(this)},y.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},y.prototype.hotUpdate=function(t){this._modules.update(t),_(this,!0)},y.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(y.prototype,w);var D=F((function(t,e){var n={};return j(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=V(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),P=F((function(t,e){var n={};return j(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var o=V(this.$store,"mapMutations",t);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),L=F((function(t,e){var n={};return j(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||V(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n})),M=F((function(t,e){var n={};return j(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var o=V(this.$store,"mapActions",t);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),$=function(t){return{mapState:D.bind(null,t),mapGetters:L.bind(null,t),mapMutations:P.bind(null,t),mapActions:M.bind(null,t)}};function j(t){return U(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function U(t){return Array.isArray(t)||l(t)}function F(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function V(t,e,n){var r=t._modulesNamespaceMap[n];return r}function B(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var r=t.transformer;void 0===r&&(r=function(t){return t});var i=t.mutationTransformer;void 0===i&&(i=function(t){return t});var o=t.actionFilter;void 0===o&&(o=function(t,e){return!0});var s=t.actionTransformer;void 0===s&&(s=function(t){return t});var a=t.logMutations;void 0===a&&(a=!0);var u=t.logActions;void 0===u&&(u=!0);var l=t.logger;return void 0===l&&(l=console),function(t){var h=c(t.state);"undefined"!==typeof l&&(a&&t.subscribe((function(t,o){var s=c(o);if(n(t,h,s)){var a=z(),u=i(t),f="mutation "+t.type+a;q(l,f,e),l.log("%c prev state","color: #9E9E9E; font-weight: bold",r(h)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",r(s)),H(l)}h=s})),u&&t.subscribeAction((function(t,n){if(o(t,n)){var r=z(),i=s(t),a="action "+t.type+r;q(l,a,e),l.log("%c action","color: #03A9F4; font-weight: bold",i),H(l)}})))}}function q(t,e,n){var r=n?t.groupCollapsed:t.group;try{r.call(t,e)}catch(i){t.log(e)}}function H(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function z(){var t=new Date;return" @ "+G(t.getHours(),2)+":"+G(t.getMinutes(),2)+":"+G(t.getSeconds(),2)+"."+G(t.getMilliseconds(),3)}function K(t,e){return new Array(e+1).join(t)}function G(t,e){return K("0",e-t.toString().length)+t}var W={Store:y,install:N,version:"3.6.2",mapState:D,mapMutations:P,mapGetters:L,mapActions:M,createNamespacedHelpers:$,createLogger:B};e["ZP"]=W},7077:function(t,e,n){"use strict";n.d(e,{Jn:function(){return vt},qX:function(){return ht},Xd:function(){return lt},Mq:function(){return gt},ZF:function(){return mt},KN:function(){return yt}});n(7658);var r=n(7142),i=n(5168),o=n(223);n(2801);const s=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,v=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{e(E(t.result)),r()},o=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),v.set(e,t),e}function g(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{e(),r()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)}));f.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){y=t(y)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function _(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&g(t),s(t,u())?new Proxy(t,y):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=_(t);return e!==t&&(p.set(t,e),v.set(e,t)),e}const T=t=>v.get(t);function S(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=E(s);return r&&s.addEventListener("upgradeneeded",(t=>{r(E(s.result),t.oldVersion,t.newVersion,E(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((t=>{o&&t.addEventListener("close",(()=>o())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],k=new Map;function A(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(k.get(e))return k.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!I.includes(n))return;const o=async function(t,...e){const o=this.transaction(t,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),i&&o.done]))[0]};return k.set(e,o),o}w((t=>({...t,get:(e,n,r)=>A(e,n)||t.get(e,n,r),has:(e,n)=>!!A(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(x(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function x(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const R="@firebase/app",N="0.8.2",D=new i.Yd("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",$="@firebase/app-check-compat",j="@firebase/app-check",U="@firebase/auth",F="@firebase/auth-compat",V="@firebase/database",B="@firebase/database-compat",q="@firebase/functions",H="@firebase/functions-compat",z="@firebase/installations",K="@firebase/installations-compat",G="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",J="@firebase/performance-compat",X="@firebase/remote-config",Y="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="9.12.1",ot="[DEFAULT]",st={[R]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[j]:"fire-app-check",[$]:"fire-app-check-compat",[U]:"fire-auth",[F]:"fire-auth-compat",[V]:"fire-rtdb",[B]:"fire-rtdb-compat",[q]:"fire-fn",[H]:"fire-fn-compat",[z]:"fire-iid",[K]:"fire-iid-compat",[G]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[J]:"fire-perf-compat",[X]:"fire-rc",[Y]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){D.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return D.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ft={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dt=new o.LL("app","Firebase",ft);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=it;function mt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:ot,automaticDataCollectionEnabled:!1},e),s=i.name;if("string"!==typeof s||!s)throw dt.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.aH)()),!n)throw dt.create("no-options");const a=at.get(s);if(a){if((0,o.vZ)(n,a.options)&&(0,o.vZ)(i,a.config))return a;throw dt.create("duplicate-app",{appName:s})}const c=new r.H0(s);for(const r of ct.values())c.addComponent(r);const u=new pt(n,i,c);return at.set(s,u),u}function gt(t=ot){const e=at.get(t);if(!e&&t===ot)return mt();if(!e)throw dt.create("no-app",{appName:t});return e}function yt(t,e,n){var i;let o=null!==(i=st[t])&&void 0!==i?i:t;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void D.warn(t.join(" "))}lt(new r.wA(`${o}-version`,(()=>({library:o,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wt="firebase-heartbeat-database",bt=1,_t="firebase-heartbeat-store";let Et=null;function Tt(){return Et||(Et=S(wt,bt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_t)}}}).catch((t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})}))),Et}async function St(t){var e;try{const e=await Tt();return e.transaction(_t).objectStore(_t).get(Ct(t))}catch(n){if(n instanceof o.ZR)D.warn(n.message);else{const t=dt.create("idb-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message});D.warn(t.message)}}}async function It(t,e){var n;try{const n=await Tt(),r=n.transaction(_t,"readwrite"),i=r.objectStore(_t);return await i.put(e,Ct(t)),r.done}catch(r){if(r instanceof o.ZR)D.warn(r.message);else{const t=dt.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});D.warn(t.message)}}}function Ct(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=1024,At=2592e6;class Ot{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Nt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=xt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=At})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=xt(),{heartbeatsToSend:e,unsentEntries:n}=Rt(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function xt(){const t=new Date;return t.toISOString().substring(0,10)}function Rt(t,e=kt){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Dt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await St(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return It(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return It(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Dt(t){return(0,o.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){lt(new r.wA("platform-logger",(t=>new O(t)),"PRIVATE")),lt(new r.wA("heartbeat",(t=>new Ot(t)),"PRIVATE")),yt(R,N,t),yt(R,N,"esm2017"),yt("fire-js","")}Pt("")},7142:function(t,e,n){"use strict";n.d(e,{H0:function(){return u},wA:function(){return i}});var r=n(223);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=o){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=o){return this.instances.has(t)}getOptions(t=o){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,o]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=o){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===o?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new s(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){"use strict";n.d(e,{Yd:function(){return u},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},70:function(t,e,n){"use strict";n.d(e,{ZP:function(){return $e}});n(3408),n(4590),n(7658);function r(t,e){return function(){return t.apply(e,arguments)}}const{toString:i}=Object.prototype,{getPrototypeOf:o}=Object,s=(t=>e=>{const n=i.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),a=t=>(t=t.toLowerCase(),e=>s(e)===t),c=t=>e=>typeof e===t,{isArray:u}=Array,l=c("undefined");function h(t){return null!==t&&!l(t)&&null!==t.constructor&&!l(t.constructor)&&v(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const f=a("ArrayBuffer");function d(t){let e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&f(t.buffer),e}const p=c("string"),v=c("function"),m=c("number"),g=t=>null!==t&&"object"===typeof t,y=t=>!0===t||!1===t,w=t=>{if("object"!==s(t))return!1;const e=o(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},b=a("Date"),_=a("File"),E=a("Blob"),T=a("FileList"),S=t=>g(t)&&v(t.pipe),I=t=>{const e="[object FormData]";return t&&("function"===typeof FormData&&t instanceof FormData||i.call(t)===e||v(t.toString)&&t.toString()===e)},C=a("URLSearchParams"),k=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function A(t,e,{allOwnKeys:n=!1}={}){if(null===t||"undefined"===typeof t)return;let r,i;if("object"!==typeof t&&(t=[t]),u(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let s;for(r=0;r<o;r++)s=i[r],e.call(null,t[s],s,t)}}function O(){const t={},e=(e,n)=>{w(t[n])&&w(e)?t[n]=O(t[n],e):w(e)?t[n]=O({},e):u(e)?t[n]=e.slice():t[n]=e};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&A(arguments[n],e);return t}const x=(t,e,n,{allOwnKeys:i}={})=>(A(e,((e,i)=>{n&&v(e)?t[i]=r(e,n):t[i]=e}),{allOwnKeys:i}),t),R=t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),N=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},D=(t,e,n,r)=>{let i,s,a;const c={};if(e=e||{},null==t)return e;do{i=Object.getOwnPropertyNames(t),s=i.length;while(s-- >0)a=i[s],r&&!r(a,t,e)||c[a]||(e[a]=t[a],c[a]=!0);t=!1!==n&&o(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},P=(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return-1!==r&&r===n},L=t=>{if(!t)return null;if(u(t))return t;let e=t.length;if(!m(e))return null;const n=new Array(e);while(e-- >0)n[e]=t[e];return n},M=(t=>e=>t&&e instanceof t)("undefined"!==typeof Uint8Array&&o(Uint8Array)),$=(t,e)=>{const n=t&&t[Symbol.iterator],r=n.call(t);let i;while((i=r.next())&&!i.done){const n=i.value;e.call(t,n[0],n[1])}},j=(t,e)=>{let n;const r=[];while(null!==(n=t.exec(e)))r.push(n);return r},U=a("HTMLFormElement"),F=t=>t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),V=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),B=a("RegExp"),q=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};A(n,((n,i)=>{!1!==e(n,i,t)&&(r[i]=n)})),Object.defineProperties(t,r)},H=t=>{q(t,((e,n)=>{const r=t[n];v(r)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not read-only method '"+n+"'")}))}))},z=(t,e)=>{const n={},r=t=>{t.forEach((t=>{n[t]=!0}))};return u(t)?r(t):r(String(t).split(e)),n},K=()=>{},G=(t,e)=>(t=+t,Number.isFinite(t)?t:e);var W={isArray:u,isArrayBuffer:f,isBuffer:h,isFormData:I,isArrayBufferView:d,isString:p,isNumber:m,isBoolean:y,isObject:g,isPlainObject:w,isUndefined:l,isDate:b,isFile:_,isBlob:E,isRegExp:B,isFunction:v,isStream:S,isURLSearchParams:C,isTypedArray:M,isFileList:T,forEach:A,merge:O,extend:x,trim:k,stripBOM:R,inherits:N,toFlatObject:D,kindOf:s,kindOfTest:a,endsWith:P,toArray:L,forEachEntry:$,matchAll:j,isHTMLForm:U,hasOwnProperty:V,hasOwnProp:V,reduceDescriptors:q,freezeMethods:H,toObjectSet:z,toCamelCase:F,noop:K,toFiniteNumber:G};n(541);function Q(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}W.inherits(Q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const J=Q.prototype,X={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{X[t]={value:t}})),Object.defineProperties(Q,X),Object.defineProperty(J,"isAxiosError",{value:!0}),Q.from=(t,e,n,r,i,o)=>{const s=Object.create(J);return W.toFlatObject(t,s,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),Q.call(s,t.message,e,n,r,i),s.cause=t,s.name=t.name,o&&Object.assign(s,o),s};var Y=Q,Z=n(6237),tt=Z;function et(t){return W.isPlainObject(t)||W.isArray(t)}function nt(t){return W.endsWith(t,"[]")?t.slice(0,-2):t}function rt(t,e,n){return t?t.concat(e).map((function(t,e){return t=nt(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}function it(t){return W.isArray(t)&&!t.some(et)}const ot=W.toFlatObject(W,{},null,(function(t){return/^is[A-Z]/.test(t)}));function st(t){return t&&W.isFunction(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator]}function at(t,e,n){if(!W.isObject(t))throw new TypeError("target must be an object");e=e||new(tt||FormData),n=W.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!W.isUndefined(e[t])}));const r=n.metaTokens,i=n.visitor||l,o=n.dots,s=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&st(e);if(!W.isFunction(i))throw new TypeError("visitor must be a function");function u(t){if(null===t)return"";if(W.isDate(t))return t.toISOString();if(!c&&W.isBlob(t))throw new Y("Blob is not supported. Use a Buffer instead.");return W.isArrayBuffer(t)||W.isTypedArray(t)?c&&"function"===typeof Blob?new Blob([t]):Buffer.from(t):t}function l(t,n,i){let a=t;if(t&&!i&&"object"===typeof t)if(W.endsWith(n,"{}"))n=r?n:n.slice(0,-2),t=JSON.stringify(t);else if(W.isArray(t)&&it(t)||W.isFileList(t)||W.endsWith(n,"[]")&&(a=W.toArray(t)))return n=nt(n),a.forEach((function(t,r){!W.isUndefined(t)&&null!==t&&e.append(!0===s?rt([n],r,o):null===s?n:n+"[]",u(t))})),!1;return!!et(t)||(e.append(rt(i,n,o),u(t)),!1)}const h=[],f=Object.assign(ot,{defaultVisitor:l,convertValue:u,isVisitable:et});function d(t,n){if(!W.isUndefined(t)){if(-1!==h.indexOf(t))throw Error("Circular reference detected in "+n.join("."));h.push(t),W.forEach(t,(function(t,r){const o=!(W.isUndefined(t)||null===t)&&i.call(e,t,W.isString(r)?r.trim():r,n,f);!0===o&&d(t,n?n.concat(r):[r])})),h.pop()}}if(!W.isObject(t))throw new TypeError("data must be an object");return d(t),e}var ct=at;function ut(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function lt(t,e){this._pairs=[],t&&ct(t,this,e)}const ht=lt.prototype;ht.append=function(t,e){this._pairs.push([t,e])},ht.toString=function(t){const e=t?function(e){return t.call(this,e,ut)}:ut;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var ft=lt;function dt(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function pt(t,e,n){if(!e)return t;const r=n&&n.encode||dt,i=n&&n.serialize;let o;if(o=i?i(e,n):W.isURLSearchParams(e)?e.toString():new ft(e,n).toString(r),o){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+o}return t}class vt{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){W.forEach(this.handlers,(function(e){null!==e&&t(e)}))}}var mt=vt,gt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},yt="undefined"!==typeof URLSearchParams?URLSearchParams:ft,wt=FormData;const bt=(()=>{let t;return("undefined"===typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!==typeof window&&"undefined"!==typeof document)})();var _t={isBrowser:!0,classes:{URLSearchParams:yt,FormData:wt,Blob:Blob},isStandardBrowserEnv:bt,protocols:["http","https","file","blob","url","data"]};function Et(t,e){return ct(t,new _t.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,r){return _t.isNode&&W.isBuffer(t)?(this.append(e,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}function Tt(t){return W.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}function St(t){const e={},n=Object.keys(t);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],e[o]=t[o];return e}function It(t){function e(t,n,r,i){let o=t[i++];const s=Number.isFinite(+o),a=i>=t.length;if(o=!o&&W.isArray(r)?r.length:o,a)return W.hasOwnProp(r,o)?r[o]=[r[o],n]:r[o]=n,!s;r[o]&&W.isObject(r[o])||(r[o]=[]);const c=e(t,n,r[o],i);return c&&W.isArray(r[o])&&(r[o]=St(r[o])),!s}if(W.isFormData(t)&&W.isFunction(t.entries)){const n={};return W.forEachEntry(t,((t,r)=>{e(Tt(t),r,n,0)})),n}return null}var Ct=It;n(2801);function kt(t,e,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(new Y("Request failed with status code "+n.status,[Y.ERR_BAD_REQUEST,Y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}var At=_t.isStandardBrowserEnv?function(){return{write:function(t,e,n,r,i,o){const s=[];s.push(t+"="+encodeURIComponent(e)),W.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),W.isString(r)&&s.push("path="+r),W.isString(i)&&s.push("domain="+i),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Ot(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function xt(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Rt(t,e){return t&&!Ot(e)?xt(t,e):e}var Nt=_t.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function r(n){let r=n;return t&&(e.setAttribute("href",r),r=e.href),e.setAttribute("href",r),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=r(window.location.href),function(t){const e=W.isString(t)?r(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return function(){return!0}}();function Dt(t,e,n){Y.call(this,null==t?"canceled":t,Y.ERR_CANCELED,e,n),this.name="CanceledError"}W.inherits(Dt,Y,{__CANCEL__:!0});var Pt=Dt;function Lt(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}const Mt=W.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var $t=t=>{const e={};let n,r,i;return t&&t.split("\n").forEach((function(t){i=t.indexOf(":"),n=t.substring(0,i).trim().toLowerCase(),r=t.substring(i+1).trim(),!n||e[n]&&Mt[n]||("set-cookie"===n?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)})),e};const jt=Symbol("internals"),Ut=Symbol("defaults");function Ft(t){return t&&String(t).trim().toLowerCase()}function Vt(t){return!1===t||null==t?t:W.isArray(t)?t.map(Vt):String(t)}function Bt(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(t))e[r[1]]=r[2];return e}function qt(t,e,n,r){return W.isFunction(r)?r.call(this,e,n):W.isString(e)?W.isString(r)?-1!==e.indexOf(r):W.isRegExp(r)?r.test(e):void 0:void 0}function Ht(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}function zt(t,e){const n=W.toCamelCase(" "+e);["get","set","has"].forEach((r=>{Object.defineProperty(t,r+n,{value:function(t,n,i){return this[r].call(this,e,t,n,i)},configurable:!0})}))}function Kt(t,e){e=e.toLowerCase();const n=Object.keys(t);let r,i=n.length;while(i-- >0)if(r=n[i],e===r.toLowerCase())return r;return null}function Gt(t,e){t&&this.set(t),this[Ut]=e||null}Object.assign(Gt.prototype,{set:function(t,e,n){const r=this;function i(t,e,n){const i=Ft(e);if(!i)throw new Error("header name must be a non-empty string");const o=Kt(r,i);(!o||!0===n||!1!==r[o]&&!1!==n)&&(r[o||e]=Vt(t))}return W.isPlainObject(t)?W.forEach(t,((t,n)=>{i(t,n,e)})):i(e,t,n),this},get:function(t,e){if(t=Ft(t),!t)return;const n=Kt(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return Bt(t);if(W.isFunction(e))return e.call(this,t,n);if(W.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}},has:function(t,e){if(t=Ft(t),t){const n=Kt(this,t);return!(!n||e&&!qt(this,this[n],n,e))}return!1},delete:function(t,e){const n=this;let r=!1;function i(t){if(t=Ft(t),t){const i=Kt(n,t);!i||e&&!qt(n,n[i],i,e)||(delete n[i],r=!0)}}return W.isArray(t)?t.forEach(i):i(t),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(t){const e=this,n={};return W.forEach(this,((r,i)=>{const o=Kt(n,i);if(o)return e[o]=Vt(r),void delete e[i];const s=t?Ht(i):String(i).trim();s!==i&&delete e[i],e[s]=Vt(r),n[s]=!0})),this},toJSON:function(t){const e=Object.create(null);return W.forEach(Object.assign({},this[Ut]||null,this),((n,r)=>{null!=n&&!1!==n&&(e[r]=t&&W.isArray(n)?n.join(", "):n)})),e}}),Object.assign(Gt,{from:function(t){return W.isString(t)?new this($t(t)):t instanceof this?t:new this(t)},accessor:function(t){const e=this[jt]=this[jt]={accessors:{}},n=e.accessors,r=this.prototype;function i(t){const e=Ft(t);n[e]||(zt(r,t),n[e]=!0)}return W.isArray(t)?t.forEach(i):i(t),this}}),Gt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),W.freezeMethods(Gt.prototype),W.freezeMethods(Gt);var Wt=Gt;function Qt(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i,o=0,s=0;return e=void 0!==e?e:1e3,function(a){const c=Date.now(),u=r[s];i||(i=c),n[o]=a,r[o]=c;let l=s,h=0;while(l!==o)h+=n[l++],l%=t;if(o=(o+1)%t,o===s&&(s=(s+1)%t),c-i<e)return;const f=u&&c-u;return f?Math.round(1e3*h/f):void 0}}var Jt=Qt;function Xt(t,e){let n=0;const r=Jt(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-n,c=r(a),u=o<=s;n=o;const l={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&u?(s-o)/c:void 0};l[e?"download":"upload"]=!0,t(l)}}function Yt(t){return new Promise((function(e,n){let r=t.data;const i=Wt.from(t.headers).normalize(),o=t.responseType;let s;function a(){t.cancelToken&&t.cancelToken.unsubscribe(s),t.signal&&t.signal.removeEventListener("abort",s)}W.isFormData(r)&&_t.isStandardBrowserEnv&&i.setContentType(!1);let c=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(e+":"+n))}const u=Rt(t.baseURL,t.url);function l(){if(!c)return;const r=Wt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),i=o&&"text"!==o&&"json"!==o?c.response:c.responseText,s={data:i,status:c.status,statusText:c.statusText,headers:r,config:t,request:c};kt((function(t){e(t),a()}),(function(t){n(t),a()}),s),c=null}if(c.open(t.method.toUpperCase(),pt(u,t.params,t.paramsSerializer),!0),c.timeout=t.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new Y("Request aborted",Y.ECONNABORTED,t,c)),c=null)},c.onerror=function(){n(new Y("Network Error",Y.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const r=t.transitional||gt;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new Y(e,r.clarifyTimeoutError?Y.ETIMEDOUT:Y.ECONNABORTED,t,c)),c=null},_t.isStandardBrowserEnv){const e=(t.withCredentials||Nt(u))&&t.xsrfCookieName&&At.read(t.xsrfCookieName);e&&i.set(t.xsrfHeaderName,e)}void 0===r&&i.setContentType(null),"setRequestHeader"in c&&W.forEach(i.toJSON(),(function(t,e){c.setRequestHeader(e,t)})),W.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),o&&"json"!==o&&(c.responseType=t.responseType),"function"===typeof t.onDownloadProgress&&c.addEventListener("progress",Xt(t.onDownloadProgress,!0)),"function"===typeof t.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Xt(t.onUploadProgress)),(t.cancelToken||t.signal)&&(s=e=>{c&&(n(!e||e.type?new Pt(null,t,c):e),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(s),t.signal&&(t.signal.aborted?s():t.signal.addEventListener("abort",s)));const h=Lt(u);h&&-1===_t.protocols.indexOf(h)?n(new Y("Unsupported protocol "+h+":",Y.ERR_BAD_REQUEST,t)):c.send(r||null)}))}const Zt={http:Yt,xhr:Yt};var te={getAdapter:t=>{if(W.isString(t)){const e=Zt[t];if(!t)throw Error(W.hasOwnProp(t)?`Adapter '${t}' is not available in the build`:`Can not resolve adapter '${t}'`);return e}if(!W.isFunction(t))throw new TypeError("adapter is not a function");return t},adapters:Zt};const ee={"Content-Type":"application/x-www-form-urlencoded"};function ne(){let t;return"undefined"!==typeof XMLHttpRequest?t=te.getAdapter("xhr"):"undefined"!==typeof process&&"process"===W.kindOf(process)&&(t=te.getAdapter("http")),t}function re(t,e,n){if(W.isString(t))try{return(e||JSON.parse)(t),W.trim(t)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(t)}const ie={transitional:gt,adapter:ne(),transformRequest:[function(t,e){const n=e.getContentType()||"",r=n.indexOf("application/json")>-1,i=W.isObject(t);i&&W.isHTMLForm(t)&&(t=new FormData(t));const o=W.isFormData(t);if(o)return r&&r?JSON.stringify(Ct(t)):t;if(W.isArrayBuffer(t)||W.isBuffer(t)||W.isStream(t)||W.isFile(t)||W.isBlob(t))return t;if(W.isArrayBufferView(t))return t.buffer;if(W.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Et(t,this.formSerializer).toString();if((s=W.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return ct(s?{"files[]":t}:t,e&&new e,this.formSerializer)}}return i||r?(e.setContentType("application/json",!1),re(t)):t}],transformResponse:[function(t){const e=this.transitional||ie.transitional,n=e&&e.forcedJSONParsing,r="json"===this.responseType;if(t&&W.isString(t)&&(n&&!this.responseType||r)){const n=e&&e.silentJSONParsing,o=!n&&r;try{return JSON.parse(t)}catch(i){if(o){if("SyntaxError"===i.name)throw Y.from(i,Y.ERR_BAD_RESPONSE,this,null,this.response);throw i}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_t.classes.FormData,Blob:_t.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};W.forEach(["delete","get","head"],(function(t){ie.headers[t]={}})),W.forEach(["post","put","patch"],(function(t){ie.headers[t]=W.merge(ee)}));var oe=ie;function se(t,e){const n=this||oe,r=e||n,i=Wt.from(r.headers);let o=r.data;return W.forEach(t,(function(t){o=t.call(n,o,i.normalize(),e?e.status:void 0)})),i.normalize(),o}function ae(t){return!(!t||!t.__CANCEL__)}function ce(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Pt}function ue(t){ce(t),t.headers=Wt.from(t.headers),t.data=se.call(t,t.transformRequest);const e=t.adapter||oe.adapter;return e(t).then((function(e){return ce(t),e.data=se.call(t,t.transformResponse,e),e.headers=Wt.from(e.headers),e}),(function(e){return ae(e)||(ce(t),e&&e.response&&(e.response.data=se.call(t,t.transformResponse,e.response),e.response.headers=Wt.from(e.response.headers))),Promise.reject(e)}))}function le(t,e){e=e||{};const n={};function r(t,e){return W.isPlainObject(t)&&W.isPlainObject(e)?W.merge(t,e):W.isPlainObject(e)?W.merge({},e):W.isArray(e)?e.slice():e}function i(n){return W.isUndefined(e[n])?W.isUndefined(t[n])?void 0:r(void 0,t[n]):r(t[n],e[n])}function o(t){if(!W.isUndefined(e[t]))return r(void 0,e[t])}function s(n){return W.isUndefined(e[n])?W.isUndefined(t[n])?void 0:r(void 0,t[n]):r(void 0,e[n])}function a(n){return n in e?r(t[n],e[n]):n in t?r(void 0,t[n]):void 0}const c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a};return W.forEach(Object.keys(t).concat(Object.keys(e)),(function(t){const e=c[t]||i,r=e(t);W.isUndefined(r)&&e!==a||(n[t]=r)})),n}const he="1.1.3",fe={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{fe[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const de={};function pe(t,e,n){if("object"!==typeof t)throw new Y("options must be an object",Y.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;while(i-- >0){const o=r[i],s=e[o];if(s){const e=t[o],n=void 0===e||s(e,o,t);if(!0!==n)throw new Y("option "+o+" must be "+n,Y.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Y("Unknown option "+o,Y.ERR_BAD_OPTION)}}fe.transitional=function(t,e,n){function r(t,e){return"[Axios v"+he+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,i,o)=>{if(!1===t)throw new Y(r(i," has been removed"+(e?" in "+e:"")),Y.ERR_DEPRECATED);return e&&!de[i]&&(de[i]=!0,console.warn(r(i," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,i,o)}};var ve={assertOptions:pe,validators:fe};const me=ve.validators;class ge{constructor(t){this.defaults=t,this.interceptors={request:new mt,response:new mt}}request(t,e){"string"===typeof t?(e=e||{},e.url=t):e=t||{},e=le(this.defaults,e);const{transitional:n,paramsSerializer:r}=e;void 0!==n&&ve.assertOptions(n,{silentJSONParsing:me.transitional(me.boolean),forcedJSONParsing:me.transitional(me.boolean),clarifyTimeoutError:me.transitional(me.boolean)},!1),void 0!==r&&ve.assertOptions(r,{encode:me.function,serialize:me.function},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase();const i=e.headers&&W.merge(e.headers.common,e.headers[e.method]);i&&W.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),e.headers=new Wt(e.headers,i);const o=[];let s=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(s=s&&t.synchronous,o.unshift(t.fulfilled,t.rejected))}));const a=[];let c;this.interceptors.response.forEach((function(t){a.push(t.fulfilled,t.rejected)}));let u,l=0;if(!s){const t=[ue.bind(this),void 0];t.unshift.apply(t,o),t.push.apply(t,a),u=t.length,c=Promise.resolve(e);while(l<u)c=c.then(t[l++],t[l++]);return c}u=o.length;let h=e;l=0;while(l<u){const t=o[l++],e=o[l++];try{h=t(h)}catch(f){e.call(this,f);break}}try{c=ue.call(this,h)}catch(f){return Promise.reject(f)}l=0,u=a.length;while(l<u)c=c.then(a[l++],a[l++]);return c}getUri(t){t=le(this.defaults,t);const e=Rt(t.baseURL,t.url);return pt(e,t.params,t.paramsSerializer)}}W.forEach(["delete","get","head","options"],(function(t){ge.prototype[t]=function(e,n){return this.request(le(n||{},{method:t,url:e,data:(n||{}).data}))}})),W.forEach(["post","put","patch"],(function(t){function e(e){return function(n,r,i){return this.request(le(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}ge.prototype[t]=e(),ge.prototype[t+"Form"]=e(!0)}));var ye=ge;class we{constructor(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;while(e-- >0)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const r=new Promise((t=>{n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t,r,i){n.reason||(n.reason=new Pt(t,r,i),e(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;const e=new we((function(e){t=e}));return{token:e,cancel:t}}}var be=we;function _e(t){return function(e){return t.apply(null,e)}}function Ee(t){return W.isObject(t)&&!0===t.isAxiosError}function Te(t){const e=new ye(t),n=r(ye.prototype.request,e);return W.extend(n,ye.prototype,e,{allOwnKeys:!0}),W.extend(n,e,null,{allOwnKeys:!0}),n.create=function(e){return Te(le(t,e))},n}const Se=Te(oe);Se.Axios=ye,Se.CanceledError=Pt,Se.CancelToken=be,Se.isCancel=ae,Se.VERSION=he,Se.toFormData=ct,Se.AxiosError=Y,Se.Cancel=Se.CanceledError,Se.all=function(t){return Promise.all(t)},Se.spread=_e,Se.isAxiosError=Ee,Se.formToJSON=t=>Ct(W.isHTMLForm(t)?new FormData(t):t);var Ie=Se;const{Axios:Ce,AxiosError:ke,CanceledError:Ae,isCancel:Oe,CancelToken:xe,VERSION:Re,all:Ne,Cancel:De,isAxiosError:Pe,spread:Le,toFormData:Me}=Ie;var $e=Ie}}]);
//# sourceMappingURL=chunk-vendors.d85d95af.js.map