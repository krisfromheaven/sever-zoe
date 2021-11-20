(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"0098":function(e,t,n){"use strict";class r{constructor(){this.attached=!1,this.loaded=!1,this.error=!1,this.stack=[]}attach(){return new Promise((e,t)=>{if(!this.attached){const n=document.createElement("script");n.setAttribute("src","https://yastatic.net/share2/share.js"),n.setAttribute("async",""),document.head.appendChild(n),n.onload=()=>{e(),this.loaded=!0,this.stack.forEach(e=>{e[0]()}),this.stack=[]},n.onerror=()=>{t(),this.loaded=!0,this.error=!0,this.stack.forEach(e=>{e[1]()}),this.stack=[]},this.attached=!0}this.error&&t(),this.loaded?e():this.stack.push([e,t])})}}var i=new r;t["a"]={name:"YandexShare",props:{services:{type:Array,required:!0},counter:{type:Boolean,default:!1},url:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""},image:{type:String,default:void 0},contentByService:{type:Object,default(){return{}}},vertical:{type:Boolean,default:!1},small:{type:Boolean,default:!1},lang:{type:String,default:"ru"},limit:{type:Number,default:void 0},bare:{type:Boolean,default:!1},copy:{type:String,default:"last"},popupTop:{type:Boolean,default:!1},popupOuter:{type:Boolean,default:!1}},mounted(){i.attach().then(()=>{window.Ya.share2(this.$el,{content:{url:this.url||window.location.href,title:this.title||document.title,description:this.description,image:this.image},contentByService:this.contentByService,theme:{bare:this.bare,copy:this.copy,counter:this.counter,direction:this.vertical?"vertical":"horizontal",lang:this.lang,limit:this.limit,popupDirection:this.popupTop?"top":"bottom",popupPosition:this.popupOuter?"outer":"inner",services:this.services.join(","),size:this.small?"s":"m"},hooks:{onready:()=>{this.$emit("ready")},onshare:e=>{this.$emit("share",e)}}})})},render(e){return e("div")}}},"00b4":function(e,t,n){"use strict";n("ac1f");var r=n("23e7"),i=n("da84"),o=n("c65b"),s=n("e330"),a=n("1626"),c=n("861d"),u=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),l=i.Error,h=s(/./.test);r({target:"RegExp",proto:!0,forced:!u},{test:function(e){var t=this.exec;if(!a(t))return h(this,e);var n=o(t,this,e);if(null!==n&&!c(n))throw new l("RegExp exec method returned something other than an Object or null");return!!n}})},"00ee":function(e,t,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},"0366":function(e,t,n){var r=n("e330"),i=n("59ed"),o=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:o?o(e,t):function(){return e.apply(t,arguments)}}},"057f":function(e,t,n){var r=n("c6b6"),i=n("fc6a"),o=n("241c").f,s=n("f36a"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return o(e)}catch(t){return s(a)}};e.exports.f=function(e){return a&&"Window"==r(e)?c(e):o(i(e))}},"06cf":function(e,t,n){var r=n("83ab"),i=n("c65b"),o=n("d1e7"),s=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return s(!i(o.f,e,t),e[t])}},"07fa":function(e,t,n){var r=n("50c4");e.exports=function(e){return r(e.length)}},"0b42":function(e,t,n){var r=n("da84"),i=n("e8b5"),o=n("68ee"),s=n("861d"),a=n("b622"),c=a("species"),u=r.Array;e.exports=function(e){var t;return i(e)&&(t=e.constructor,o(t)&&(t===u||i(t.prototype))?t=void 0:s(t)&&(t=t[c],null===t&&(t=void 0))),void 0===t?u:t}},"0cfb":function(e,t,n){var r=n("83ab"),i=n("d039"),o=n("cc12");e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t,n){var r=n("da84"),i=r.String;e.exports=function(e){try{return i(e)}catch(t){return"Object"}}},"107c":function(e,t,n){var r=n("d039"),i=n("da84"),o=i.RegExp;e.exports=r((function(){var e=o("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1276:function(e,t,n){"use strict";var r=n("2ba4"),i=n("c65b"),o=n("e330"),s=n("d784"),a=n("44e7"),c=n("825a"),u=n("1d80"),l=n("4840"),h=n("8aa5"),d=n("50c4"),f=n("577e"),p=n("dc4a"),m=n("f36a"),v=n("14c3"),g=n("9263"),_=n("9f7f"),y=n("d039"),b=_.UNSUPPORTED_Y,w=4294967295,k=Math.min,C=[].push,O=o(/./.exec),I=o(C),T=o("".slice),E=!y((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));s("split",(function(e,t,n){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var o=f(u(this)),s=void 0===n?w:n>>>0;if(0===s)return[];if(void 0===e)return[o];if(!a(e))return i(t,o,e,s);var c,l,h,d=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,_=new RegExp(e.source,p+"g");while(c=i(g,_,o)){if(l=_.lastIndex,l>v&&(I(d,T(o,v,c.index)),c.length>1&&c.index<o.length&&r(C,d,m(c,1)),h=c[0].length,v=l,d.length>=s))break;_.lastIndex===c.index&&_.lastIndex++}return v===o.length?!h&&O(_,"")||I(d,""):I(d,T(o,v)),d.length>s?m(d,0,s):d}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:i(t,this,e,n)}:t,[function(t,n){var r=u(this),s=void 0==t?void 0:p(t,e);return s?i(s,t,r,n):i(o,f(r),t,n)},function(e,r){var i=c(this),s=f(e),a=n(o,i,s,r,o!==t);if(a.done)return a.value;var u=l(i,RegExp),p=i.unicode,m=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(b?"g":"y"),g=new u(b?"^(?:"+i.source+")":i,m),_=void 0===r?w:r>>>0;if(0===_)return[];if(0===s.length)return null===v(g,s)?[s]:[];var y=0,C=0,O=[];while(C<s.length){g.lastIndex=b?0:C;var E,S=v(g,b?T(s,C):s);if(null===S||(E=k(d(g.lastIndex+(b?C:0)),s.length))===y)C=h(s,C,p);else{if(I(O,T(s,y,C)),O.length===_)return O;for(var x=1;x<=S.length-1;x++)if(I(O,S[x]),O.length===_)return O;C=y=E}}return I(O,T(s,y)),O}]}),!E,b)},"14c3":function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("825a"),s=n("1626"),a=n("c6b6"),c=n("9263"),u=r.TypeError;e.exports=function(e,t){var n=e.exec;if(s(n)){var r=i(n,e,t);return null!==r&&o(r),r}if("RegExp"===a(e))return i(c,e,t);throw u("RegExp#exec called on incompatible receiver")}},"159b":function(e,t,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("17c2"),a=n("9112"),c=function(e){if(e&&e.forEach!==s)try{a(e,"forEach",s)}catch(t){e.forEach=s}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(o)},1626:function(e,t){e.exports=function(e){return"function"==typeof e}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=i("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"19aa":function(e,t,n){var r=n("da84"),i=n("3a9b"),o=r.TypeError;e.exports=function(e,t){if(i(t,e))return e;throw o("Incorrect invocation")}},"1a2d":function(e,t,n){var r=n("e330"),i=n("7b0b"),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c7e":function(e,t,n){var r=n("b622"),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(e,t,n){var r=n("da84"),i=r.TypeError;e.exports=function(e){if(void 0==e)throw i("Can't call method on "+e);return e}},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7");function r(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){r(s,i,o,a,c,"next",e)}function c(e){r(s,i,o,a,c,"throw",e)}a(void 0)}))}}},"1dde":function(e,t,n){var r=n("d039"),i=n("b622"),o=n("2d00"),s=i("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1f5a":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return Fe})),n.d(t,"c",(function(){return ut})),n.d(t,"d",(function(){return ft})),n.d(t,"e",(function(){return mt})),n.d(t,"f",(function(){return pt})),n.d(t,"g",(function(){return Ze})),n.d(t,"h",(function(){return dt})),n.d(t,"i",(function(){return Pr})),n.d(t,"j",(function(){return Hi})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return Or})),n.d(t,"m",(function(){return gt})),n.d(t,"n",(function(){return yt})),n.d(t,"o",(function(){return bt})),n.d(t,"p",(function(){return k})),n.d(t,"q",(function(){return Re})),n.d(t,"r",(function(){return g})),n.d(t,"s",(function(){return Ln})),n.d(t,"t",(function(){return T})),n.d(t,"u",(function(){return oi})),n.d(t,"v",(function(){return fe})),n.d(t,"x",(function(){return zt})),n.d(t,"y",(function(){return An})),n.d(t,"z",(function(){return zi})),n.d(t,"A",(function(){return Pn})),n.d(t,"B",(function(){return Bt})),n.d(t,"C",(function(){return Vt})),n.d(t,"D",(function(){return Ne})),n.d(t,"F",(function(){return Ht})),n.d(t,"G",(function(){return d})),n.d(t,"H",(function(){return Xt})),n.d(t,"I",(function(){return pn})),n.d(t,"J",(function(){return gn})),n.d(t,"K",(function(){return ii})),n.d(t,"L",(function(){return de})),n.d(t,"M",(function(){return rr})),n.d(t,"N",(function(){return Yt})),n.d(t,"O",(function(){return jt})),n.d(t,"P",(function(){return Sr})),n.d(t,"Q",(function(){return Vr})),n.d(t,"R",(function(){return ni})),n.d(t,"S",(function(){return Cn})),n.d(t,"T",(function(){return Lt})),n.d(t,"U",(function(){return xr})),n.d(t,"V",(function(){return qr})),n.d(t,"W",(function(){return ei})),n.d(t,"X",(function(){return Zt})),n.d(t,"Y",(function(){return qt})),n.d(t,"Z",(function(){return Kt})),n.d(t,"ab",(function(){return Ot})),n.d(t,"bb",(function(){return Nt})),n.d(t,"cb",(function(){return Mt})),n.d(t,"db",(function(){return Gt})),n.d(t,"eb",(function(){return Qt})),n.d(t,"fb",(function(){return Er})),n.d(t,"gb",(function(){return $r})),n.d(t,"hb",(function(){return Xr})),n.d(t,"ib",(function(){return St})),n.d(t,"jb",(function(){return rn})),n.d(t,"kb",(function(){return on})),n.d(t,"lb",(function(){return Rr})),n.d(t,"mb",(function(){return nn})),n.d(t,"nb",(function(){return en})),n.d(t,"ob",(function(){return Wt})),n.d(t,"w",(function(){return Oo})),n.d(t,"E",(function(){return ko}));var r=n("1fd5"),i=n("589b");function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var s=n("e691"),a=n("22e5");
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
const c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},u={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
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
function l(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function h(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=l,f=h,p=new r["b"]("auth","Firebase",h()),m=new s["b"]("@firebase/auth");function v(e,...t){m.logLevel<=s["a"].ERROR&&m.error(`Auth (${i["SDK_VERSION"]}): ${e}`,...t)}
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
 */function g(e,...t){throw w(e,...t)}function _(e,...t){return w(e,...t)}function y(e,t,n){const i=Object.assign(Object.assign({},f()),{[t]:n}),o=new r["b"]("auth","Firebase",i);return o.create(t,{appName:e.name})}function b(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&g(e,"argument-error"),y(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function w(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return p.create(e,...t)}function k(e,t,...n){if(!e)throw w(t,...n)}function C(e){const t="INTERNAL ASSERTION FAILED: "+e;throw v(t),new Error(t)}function O(e,t){e||C(t)}
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
 */const I=new Map;function T(e){O(e instanceof Function,"Expected a class definition");let t=I.get(e);return t?(O(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,I.set(e,t),t)}
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
 */function E(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(T);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
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
 */function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function x(){return"http:"===A()||"https:"===A()}function A(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function R(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(x()||Object(r["v"])()||"connection"in navigator))||navigator.onLine}function P(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
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
 */class N{constructor(e,t){this.shortDelay=e,this.longDelay=t,O(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["z"])()||Object(r["C"])()}get(){return R()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function j(e,t){O(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class L{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void C("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void C("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void C("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const D={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},M=new N(3e4,6e4);
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
 */function F(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function U(e,t,n,i,o={}){return $(e,o,()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=Object(r["G"])(Object.assign({key:e.config.apiKey},s)).slice(1),c=new(L.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&c.set("X-Firebase-Locale",e.languageCode),L.fetch()(V(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))})}async function $(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},D),t);try{const t=new z(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw B(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw B(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw B(e,"email-already-in-use",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw y(e,a,s);g(e,a)}}catch(o){if(o instanceof r["c"])throw o;g(e,"network-request-failed")}}async function q(e,t,n,r,i={}){const o=await U(e,t,n,r,i);return"mfaPendingCredential"in o&&g(e,"multi-factor-auth-required",{_serverResponse:o}),o}function V(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?j(e.config,i):`${e.config.apiScheme}://${i}`}class z{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(_(this.auth,"timeout")),M.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function B(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_(e,t,r);return i.customData._tokenResponse=n,i}
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
 */async function W(e,t){return U(e,"POST","/v1/accounts:delete",t)}async function H(e,t){return U(e,"POST","/v1/accounts:update",t)}async function G(e,t){return U(e,"POST","/v1/accounts:lookup",t)}
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
 */function K(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
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
 */async function Y(e,t=!1){const n=Object(r["r"])(e),i=await n.getIdToken(t),o=J(i);k(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:K(Q(o.auth_time)),issuedAtTime:K(Q(o.iat)),expirationTime:K(Q(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function Q(e){return 1e3*Number(e)}function J(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return v("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["h"])(n);return e?JSON.parse(e):(v("Failed to decode base64 JWT payload"),null)}catch(o){return v("Caught error parsing JWT payload as JSON",o),null}}function X(e){const t=J(e);return k(t,"internal-error"),k("undefined"!==typeof t.exp,"internal-error"),k("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function Z(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&ee(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function ee({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */class te{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
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
 */class ne{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=K(this.lastLoginAt),this.creationTime=K(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function re(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Z(e,G(n,{idToken:r}));k(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?se(o.providerUserInfo):[],a=oe(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new ne(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function ie(e){const t=Object(r["r"])(e);await re(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function oe(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function se(e){return e.map(e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
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
 */async function ae(e,t){const n=await $(e,{},()=>{const n=Object(r["G"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=V(e,i,"/v1/token","key="+o);return L.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
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
 */class ce{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k("undefined"!==typeof e.idToken,"internal-error"),k("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):X(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return k(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ae(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new ce;return n&&(k("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(k("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(k("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ce,this.toJSON())}_performRefresh(){return C("not implemented")}}
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
 */function ue(e,t){k("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class le{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new te(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new ne(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Z(this,this.stsTokenManager.getToken(this.auth,e));return k(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Y(this,e)}reload(){return ie(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new le(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await re(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Z(this,W(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,v=null!==(c=t.createdAt)&&void 0!==c?c:void 0,g=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:_,emailVerified:y,isAnonymous:b,providerData:w,stsTokenManager:C}=t;k(_&&C,e,"internal-error");const O=ce.fromJSON(this.name,C);k("string"===typeof _,e,"internal-error"),ue(l,e.name),ue(h,e.name),k("boolean"===typeof y,e,"internal-error"),k("boolean"===typeof b,e,"internal-error"),ue(d,e.name),ue(f,e.name),ue(p,e.name),ue(m,e.name),ue(v,e.name),ue(g,e.name);const I=new le({uid:_,auth:e,email:h,emailVerified:y,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:O,createdAt:v,lastLoginAt:g});return w&&Array.isArray(w)&&(I.providerData=w.map(e=>Object.assign({},e))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new ce;r.updateFromServerResponse(t);const i=new le({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await re(i),i}}
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
 */class he{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}he.type="NONE";const de=he;
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
 */function fe(e,t,n){return`firebase:${e}:${t}:${n}`}class pe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=fe(this.userKey,r.apiKey,i),this.fullPersistenceKey=fe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?le._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pe(T(de),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||T(de);const o=fe(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=le._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(c){}})),new pe(i,e,n)):new pe(i,e,n)}}
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
 */function me(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ye(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ve(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(we(t))return"Blackberry";if(ke(t))return"Webos";if(ge(t))return"Safari";if((t.includes("chrome/")||_e(t))&&!t.includes("edge/"))return"Chrome";if(be(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ve(e=Object(r["s"])()){return/firefox\//i.test(e)}function ge(e=Object(r["s"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function _e(e=Object(r["s"])()){return/crios\//i.test(e)}function ye(e=Object(r["s"])()){return/iemobile/i.test(e)}function be(e=Object(r["s"])()){return/android/i.test(e)}function we(e=Object(r["s"])()){return/blackberry/i.test(e)}function ke(e=Object(r["s"])()){return/webos/i.test(e)}function Ce(e=Object(r["s"])()){return/iphone|ipad|ipod/i.test(e)}function Oe(e=Object(r["s"])()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Ie(e=Object(r["s"])()){var t;return Ce(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Te(){return Object(r["x"])()&&10===document.documentMode}function Ee(e=Object(r["s"])()){return Ce(e)||be(e)||ke(e)||we(e)||/windows phone/i.test(e)||ye(e)}function Se(){try{return!(!window||window===window.top)}catch(e){return!1}}
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
 */function xe(e,t=[]){let n;switch(e){case"Browser":n=me(Object(r["s"])());break;case"Worker":n=`${me(Object(r["s"])())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["SDK_VERSION"]}/${o}`}
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
 */class Ae{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pe(this),this.idTokenSubscription=new Pe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=T(t)),this._initializationPromise=this.queue(async()=>{var n,r;this._deleted||(this.persistenceManager=await pe.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await re(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=P()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["r"])(e):null;return t&&k(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(T(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&T(e)||this._popupRedirectResolver;k(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[T(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return k(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Re(e){return Object(r["r"])(e)}class Pe{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["l"])(e=>this.observer=e)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ne(e,t,n){const r=Re(e);k(r._canInitEmulator,r,"emulator-config-failed"),k(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=je(t),{host:s,port:a}=Le(t),c=null===a?"":":"+a;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Me()}function je(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Le(e){const t=je(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:De(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:De(t)}}}function De(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Me(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */class Fe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return C("not implemented")}_getIdTokenResponse(e){return C("not implemented")}_linkToIdToken(e,t){return C("not implemented")}_getReauthenticationResolver(e){return C("not implemented")}}
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
 */async function Ue(e,t){return U(e,"POST","/v1/accounts:resetPassword",F(e,t))}async function $e(e,t){return U(e,"POST","/v1/accounts:update",t)}async function qe(e,t){return U(e,"POST","/v1/accounts:update",F(e,t))}
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
 */async function Ve(e,t){return q(e,"POST","/v1/accounts:signInWithPassword",F(e,t))}async function ze(e,t){return U(e,"POST","/v1/accounts:sendOobCode",F(e,t))}async function Be(e,t){return ze(e,t)}async function We(e,t){return ze(e,t)}async function He(e,t){return ze(e,t)}async function Ge(e,t){return ze(e,t)}
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
 */async function Ke(e,t){return q(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}async function Ye(e,t){return q(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}
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
 */class Qe extends Fe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Qe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Qe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ve(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ke(e,{email:this._email,oobCode:this._password});default:g(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return $e(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ye(e,{idToken:t,email:this._email,oobCode:this._password});default:g(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Je(e,t){return q(e,"POST","/v1/accounts:signInWithIdp",F(e,t))}
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
 */const Xe="http://localhost";class Ze extends Fe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):g("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Ze(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Je(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Je(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Je(e,t)}buildRequest(){const e={requestUri:Xe,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["G"])(t)}return e}}
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
 */async function et(e,t){return U(e,"POST","/v1/accounts:sendVerificationCode",F(e,t))}async function tt(e,t){return q(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t))}async function nt(e,t){const n=await q(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t));if(n.temporaryProof)throw B(e,"account-exists-with-different-credential",n);return n}const rt={["USER_NOT_FOUND"]:"user-not-found"};async function it(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return q(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,n),rt)}
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
 */class ot extends Fe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ot({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ot({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return tt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return nt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return it(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ot({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */function st(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function at(e){const t=Object(r["H"])(Object(r["q"])(e))["link"],n=t?Object(r["H"])(Object(r["q"])(t))["deep_link_id"]:null,i=Object(r["H"])(Object(r["q"])(e))["deep_link_id"],o=i?Object(r["H"])(Object(r["q"])(i))["link"]:null;return o||i||n||t||e}class ct{constructor(e){var t,n,i,o,s,a;const c=Object(r["H"])(Object(r["q"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=st(null!==(i=c["mode"])&&void 0!==i?i:null);k(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=at(e);try{return new ct(t)}catch(n){return null}}}
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
class ut{constructor(){this.providerId=ut.PROVIDER_ID}static credential(e,t){return Qe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ct.parseLink(t);return k(n,"argument-error"),Qe._fromEmailAndCode(e,n.code,n.tenantId)}}ut.PROVIDER_ID="password",ut.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ut.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class lt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class ht extends lt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class dt extends ht{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return k("providerId"in t&&"signInMethod"in t,"argument-error"),Ze._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return k(e.idToken||e.accessToken,"argument-error"),Ze._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return dt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return dt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:o,providerId:s}=e;if(!n&&!r&&!t&&!i)return null;if(!s)return null;try{return new dt(s)._credential({idToken:t,accessToken:n,nonce:o,pendingToken:i})}catch(a){return null}}}
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
 */class ft extends ht{constructor(){super("facebook.com")}static credential(e){return Ze._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch(t){return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com",ft.PROVIDER_ID="facebook.com";
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
class pt extends ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ze._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return pt.credential(t,n)}catch(r){return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com",pt.PROVIDER_ID="google.com";
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
class mt extends ht{constructor(){super("github.com")}static credential(e){return Ze._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch(t){return null}}}mt.GITHUB_SIGN_IN_METHOD="github.com",mt.PROVIDER_ID="github.com";
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
const vt="http://localhost";class gt extends Fe{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Je(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Je(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Je(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new gt(n,i):null}static _create(e,t){return new gt(e,t)}buildRequest(){return{requestUri:vt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
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
 */const _t="saml.";class yt extends lt{constructor(e){k(e.startsWith(_t),"argument-error"),super(e)}static credentialFromResult(e){return yt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return yt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=gt.fromJSON(e);return k(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return gt._create(n,t)}catch(r){return null}}}
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
 */class bt extends ht{constructor(){super("twitter.com")}static credential(e,t){return Ze._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return bt.credential(t,n)}catch(r){return null}}}
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
async function wt(e,t){return q(e,"POST","/v1/accounts:signUp",F(e,t))}
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
 */bt.TWITTER_SIGN_IN_METHOD="twitter.com",bt.PROVIDER_ID="twitter.com";class kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await le._fromIdTokenResponse(e,n,r),o=Ct(n),s=new kt({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ct(n);return new kt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ct(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */async function Ot(e){var t;const n=Re(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new kt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await wt(n,{returnSecureToken:!0}),i=await kt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
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
 */class It extends r["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,It.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new It(e,t,n,r)}}function Tt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw It._fromErrorAndOperation(e,n,t,r);throw n})}
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
 */function Et(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}
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
 */async function St(e,t){const n=Object(r["r"])(e);await At(!0,n,t);const{providerUserInfo:i}=await H(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),o=Et(i||[]);return n.providerData=n.providerData.filter(e=>o.has(e.providerId)),o.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function xt(e,t,n=!1){const r=await Z(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return kt._forOperation(e,"link",r)}async function At(e,t,n){await re(t);const r=Et(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";k(r.has(n)===e,t.auth,i)}
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
 */async function Rt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await Z(e,Tt(r,i,t,e),n);k(o.idToken,r,"internal-error");const s=J(o.idToken);k(s,r,"internal-error");const{sub:a}=s;return k(e.uid===a,r,"user-mismatch"),kt._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&g(r,"user-mismatch"),o}}
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
 */async function Pt(e,t,n=!1){const r="signIn",i=await Tt(e,r,t),o=await kt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function Nt(e,t){return Pt(Re(e),t)}async function jt(e,t){const n=Object(r["r"])(e);return await At(!1,n,t.providerId),xt(n,t)}async function Lt(e,t){return Rt(Object(r["r"])(e),t)}
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
 */async function Dt(e,t){return q(e,"POST","/v1/accounts:signInWithCustomToken",F(e,t))}
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
 */async function Mt(e,t){const n=Re(e),r=await Dt(n,{token:t,returnSecureToken:!0}),i=await kt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
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
 */class Ft{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Ut._fromServerResponse(e,t):g(e,"internal-error")}}class Ut extends Ft{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Ut(t)}}
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
 */function $t(e,t,n){var r;k((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),k("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(k(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(k(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
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
 */async function qt(e,t,n){const i=Object(r["r"])(e),o={requestType:"PASSWORD_RESET",email:t};n&&$t(i,o,n),await We(i,o)}async function Vt(e,t,n){await Ue(Object(r["r"])(e),{oobCode:t,newPassword:n})}async function zt(e,t){await qe(Object(r["r"])(e),{oobCode:t})}async function Bt(e,t){const n=Object(r["r"])(e),i=await Ue(n,{oobCode:t}),o=i.requestType;switch(k(o,n,"internal-error"),o){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":k(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":k(i.mfaInfo,n,"internal-error");default:k(i.email,n,"internal-error")}let s=null;return i.mfaInfo&&(s=Ft._fromServerResponse(Re(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:s},operation:o}}async function Wt(e,t){const{data:n}=await Bt(Object(r["r"])(e),t);return n.email}async function Ht(e,t,n){const r=Re(e),i=await wt(r,{returnSecureToken:!0,email:t,password:n}),o=await kt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function Gt(e,t,n){return Nt(Object(r["r"])(e),ut.credential(t,n))}
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
 */async function Kt(e,t,n){const i=Object(r["r"])(e),o={requestType:"EMAIL_SIGNIN",email:t};k(n.handleCodeInApp,i,"argument-error"),n&&$t(i,o,n),await He(i,o)}function Yt(e,t){const n=ct.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Qt(e,t,n){const i=Object(r["r"])(e),o=ut.credentialWithLink(t,n||S());return k(o._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Nt(i,o)}
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
 */async function Jt(e,t){return U(e,"POST","/v1/accounts:createAuthUri",F(e,t))}
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
 */async function Xt(e,t){const n=x()?S():"http://localhost",i={identifier:t,continueUri:n},{signinMethods:o}=await Jt(Object(r["r"])(e),i);return o||[]}async function Zt(e,t){const n=Object(r["r"])(e),i=await e.getIdToken(),o={requestType:"VERIFY_EMAIL",idToken:i};t&&$t(n.auth,o,t);const{email:s}=await Be(n.auth,o);s!==e.email&&await e.reload()}async function en(e,t,n){const i=Object(r["r"])(e),o=await e.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:o,newEmail:t};n&&$t(i.auth,s,n);const{email:a}=await Ge(i.auth,s);a!==e.email&&await e.reload()}
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
 */async function tn(e,t){return U(e,"POST","/v1/accounts:update",t)}
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
 */async function nn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=Object(r["r"])(e),o=await i.getIdToken(),s={idToken:o,displayName:t,photoUrl:n,returnSecureToken:!0},a=await Z(i,tn(i.auth,s));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find(({providerId:e})=>"password"===e);c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function rn(e,t){return sn(Object(r["r"])(e),t,null)}function on(e,t){return sn(Object(r["r"])(e),null,t)}async function sn(e,t,n){const{auth:r}=e,i=await e.getIdToken(),o={idToken:i,returnSecureToken:!0};t&&(o.email=t),n&&(o.password=n);const s=await Z(e,$e(r,o));await e._updateTokensIfNecessary(s,!0)}
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
 */function an(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},o=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=J(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new cn(o,e)}}if(!r)return null;switch(r){case"facebook.com":return new ln(o,i);case"github.com":return new hn(o,i);case"google.com":return new dn(o,i);case"twitter.com":return new fn(o,i,e.screenName||null);case"custom":case"anonymous":return new cn(o,null);default:return new cn(o,r,i)}}class cn{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class un extends cn{constructor(e,t,n,r){super(e,t,n),this.username=r}}class ln extends cn{constructor(e,t){super(e,"facebook.com",t)}}class hn extends un{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class dn extends cn{constructor(e,t){super(e,"google.com",t)}}class fn extends un{constructor(e,t,n){super(e,"twitter.com",t,n)}}function pn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:an(n)}
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
 */class mn{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new mn("enroll",e)}static _fromMfaPendingCredential(e){return new mn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return mn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return mn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
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
 */class vn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Re(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(e=>Ft._fromServerResponse(n,e));k(r.mfaPendingCredential,n,"internal-error");const o=mn._fromMfaPendingCredential(r.mfaPendingCredential);return new vn(o,i,async e=>{const i=await e._process(n,o);delete r.mfaInfo,delete r.mfaPendingCredential;const s=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await kt._fromIdTokenResponse(n,t.operationType,s);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return k(t.user,n,"internal-error"),kt._forOperation(t.user,t.operationType,s);default:g(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function gn(e,t){var n;const i=Object(r["r"])(e),o=t;return k(t.customData.operationType,i,"argument-error"),k(null===(n=o.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),vn._fromError(i,o)}
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
 */function _n(e,t){return U(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,t))}function yn(e,t){return U(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}function bn(e,t){return U(e,"POST","/v2/accounts/mfaEnrollment:withdraw",F(e,t))}class wn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>Ft._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new wn(e)}async getSession(){return mn._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),i=await Z(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken(),r=await Z(this.user,bn(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(i){if("auth/user-token-expired"!==i.code)throw i}}}const kn=new WeakMap;function Cn(e){const t=Object(r["r"])(e);return kn.has(t)||kn.set(t,wn._fromUser(t)),kn.get(t)}const On="__sak";
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
 */class In{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(On,"1"),this.storage.removeItem(On),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */function Tn(){const e=Object(r["s"])();return ge(e)||Ce(e)}const En=1e3,Sn=10;class xn extends In{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Tn()&&Se(),this.fallbackToPolling=Ee(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Te()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Sn):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},En)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xn.type="LOCAL";const An=xn;
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
 */class Rn extends In{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rn.type="SESSION";const Pn=Rn;
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
 */function Nn(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
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
 */class jn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new jn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async e=>e(t.origin,i)),a=await Nn(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Ln(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */jn.receivers=[];class Dn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const c=Ln("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
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
 */function Mn(){return window}function Fn(e){Mn().location.href=e}
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
 */function Un(){return"undefined"!==typeof Mn()["WorkerGlobalScope"]&&"function"===typeof Mn()["importScripts"]}async function $n(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function qn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Vn(){return Un()?self:null}
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
 */const zn="firebaseLocalStorageDb",Bn=1,Wn="firebaseLocalStorage",Hn="fbase_key";class Gn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Kn(e,t){return e.transaction([Wn],t?"readwrite":"readonly").objectStore(Wn)}function Yn(){const e=indexedDB.deleteDatabase(zn);return new Gn(e).toPromise()}function Qn(){const e=indexedDB.open(zn,Bn);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Wn,{keyPath:Hn})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Wn)?t(n):(n.close(),await Yn(),t(await Qn()))})})}async function Jn(e,t,n){const r=Kn(e,!0).put({[Hn]:t,value:n});return new Gn(r).toPromise()}async function Xn(e,t){const n=Kn(e,!1).get(t),r=await new Gn(n).toPromise();return void 0===r?null:r.value}function Zn(e,t){const n=Kn(e,!0).delete(t);return new Gn(n).toPromise()}const er=800,tr=3;class nr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Qn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>tr)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Un()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jn._getInstance(Vn()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await $n(),!this.activeServiceWorker)return;this.sender=new Dn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&qn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qn();return await Jn(e,On,"1"),await Zn(e,On),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jn(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Xn(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Kn(e,!1).getAll();return new Gn(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),er)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}nr.type="LOCAL";const rr=nr;
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
 */function ir(e,t){return U(e,"POST","/v2/accounts/mfaSignIn:start",F(e,t))}function or(e,t){return U(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}
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
 */async function sr(e){return(await U(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
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
 */function ar(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function cr(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=_("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",ar().appendChild(r)})}function ur(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
 */const lr=500,hr=6e4,dr=1e12;class fr{constructor(e){this.auth=e,this.counter=dr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new pr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||dr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||dr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||dr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class pr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;k(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=mr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()},hr)},lr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function mr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
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
 */const vr=ur("rcb"),gr=new N(3e4,6e4),_r="https://www.google.com/recaptcha/api.js?";class yr{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Mn().grecaptcha}load(e,t=""){return k(br(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Mn().grecaptcha):new Promise((n,i)=>{const o=Mn().setTimeout(()=>{i(_(e,"network-request-failed"))},gr.get());Mn()[vr]=()=>{Mn().clearTimeout(o),delete Mn()[vr];const r=Mn().grecaptcha;if(!r)return void i(_(e,"internal-error"));const s=r.render;r.render=(e,t)=>{const n=s(e,t);return this.counter++,n},this.hostLanguage=t,n(r)};const s=`${_r}?${Object(r["G"])({onload:vr,render:"explicit",hl:t})}`;cr(s).catch(()=>{clearTimeout(o),i(_(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Mn().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function br(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class wr{async load(e){return new fr(e)}clearedOneInstance(){}}
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
 */const kr="recaptcha",Cr={theme:"light",type:"image"};class Or{constructor(e,t=Object.assign({},Cr),n){this.parameters=t,this.type=kr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Re(n),this.isInvisible="invisible"===this.parameters.size,k("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;k(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new wr:new yr,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){k(!this.parameters.sitekey,this.auth,"argument-error"),k(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),k("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"===typeof e)e(t);else if("string"===typeof e){const n=Mn()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){k(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){k(x()&&!Un(),this.auth,"internal-error"),await Ir(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await sr(this.auth);k(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return k(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Ir(){let e=null;return new Promise(t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}
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
 */class Tr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=ot._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Er(e,t,n){const i=Re(e),o=await Ar(i,t,Object(r["r"])(n));return new Tr(o,e=>Nt(i,e))}async function Sr(e,t,n){const i=Object(r["r"])(e);await At(!1,i,"phone");const o=await Ar(i.auth,t,Object(r["r"])(n));return new Tr(o,e=>jt(i,e))}async function xr(e,t,n){const i=Object(r["r"])(e),o=await Ar(i.auth,t,Object(r["r"])(n));return new Tr(o,e=>Lt(i,e))}async function Ar(e,t,n){var r;const i=await n.verify();try{let o;if(k("string"===typeof i,e,"argument-error"),k(n.type===kr,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){k("enroll"===t.type,e,"internal-error");const n=await _n(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{k("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;k(n,e,"missing-multi-factor-info");const s=await ir(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await et(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Rr(e,t){await xt(Object(r["r"])(e),t)}
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
 */class Pr{constructor(e){this.providerId=Pr.PROVIDER_ID,this.auth=Re(e)}verifyPhoneNumber(e,t){return Ar(this.auth,e,Object(r["r"])(t))}static credential(e,t){return ot._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Pr.credentialFromTaggedObject(t)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ot._fromTokenResponse(t,n):null}}
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
function Nr(e,t){return t?T(t):(k(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Pr.PROVIDER_ID="phone",Pr.PHONE_SIGN_IN_METHOD="phone";class jr extends Fe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Je(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Je(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Je(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Lr(e){return Pt(e.auth,new jr(e),e.bypassAuthState)}function Dr(e){const{auth:t,user:n}=e;return k(n,t,"internal-error"),Rt(n,new jr(e),e.bypassAuthState)}async function Mr(e){const{auth:t,user:n}=e;return k(n,t,"internal-error"),xt(n,new jr(e),e.bypassAuthState)}
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
 */class Fr{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lr;case"linkViaPopup":case"linkViaRedirect":return Mr;case"reauthViaPopup":case"reauthViaRedirect":return Dr;default:g(this.auth,"internal-error")}}resolve(e){O(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){O(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Ur=new N(2e3,1e4);async function $r(e,t,n){const r=Re(e);b(e,t,lt);const i=Nr(r,n),o=new zr(r,"signInViaPopup",t,i);return o.executeNotNull()}async function qr(e,t,n){const i=Object(r["r"])(e);b(i.auth,t,lt);const o=Nr(i.auth,n),s=new zr(i.auth,"reauthViaPopup",t,o,i);return s.executeNotNull()}async function Vr(e,t,n){const i=Object(r["r"])(e);b(i.auth,t,lt);const o=Nr(i.auth,n),s=new zr(i.auth,"linkViaPopup",t,o,i);return s.executeNotNull()}class zr extends Fr{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,zr.currentPopupAction&&zr.currentPopupAction.cancel(),zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){O(1===this.filter.length,"Popup operations only handle one event");const e=Ln();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(_(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(_(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,Ur.get())};e()}}zr.currentPopupAction=null;
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
const Br="pendingRedirect",Wr=new Map;class Hr extends Fr{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Wr.get(this.auth._key());if(!e){try{const t=await Gr(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Wr.set(this.auth._key(),e)}return this.bypassAuthState||Wr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Gr(e,t){const n=Jr(t),r=Qr(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function Kr(e,t){return Qr(e)._set(Jr(t),"true")}function Yr(){Wr.clear()}function Qr(e){return T(e._redirectPersistence)}function Jr(e){return fe(Br,e.config.apiKey,e.name)}
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
 */function Xr(e,t,n){return Zr(e,t,n)}async function Zr(e,t,n){const r=Re(e);b(e,t,lt);const i=Nr(r,n);return await Kr(i,r),i._openRedirect(r,t,"signInViaRedirect")}function ei(e,t,n){return ti(e,t,n)}async function ti(e,t,n){const i=Object(r["r"])(e);b(i.auth,t,lt);const o=Nr(i.auth,n);await Kr(o,i.auth);const s=await si(i);return o._openRedirect(i.auth,t,"reauthViaRedirect",s)}function ni(e,t,n){return ri(e,t,n)}async function ri(e,t,n){const i=Object(r["r"])(e);b(i.auth,t,lt);const o=Nr(i.auth,n);await At(!1,i,t.providerId),await Kr(o,i.auth);const s=await si(i);return o._openRedirect(i.auth,t,"linkViaRedirect",s)}async function ii(e,t){return await Re(e)._initializationPromise,oi(e,t,!1)}async function oi(e,t,n=!1){const r=Re(e),i=Nr(r,t),o=new Hr(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}async function si(e){const t=Ln(e.uid+":::");return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
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
 */const ai=6e5;class ci{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hi(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!li(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(_(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ai&&this.cachedEventUids.clear(),this.cachedEventUids.has(ui(e))}saveEventToCache(e){this.cachedEventUids.add(ui(e)),this.lastProcessedEventTime=Date.now()}}function ui(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function li({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function hi(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return li(e);default:return!1}}
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
 */async function di(e,t={}){return U(e,"GET","/v1/projects",t)}
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
 */const fi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pi=/^https?/;async function mi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await di(e);for(const r of t)try{if(vi(r))return}catch(n){}g(e,"unauthorized-domain")}function vi(e){const t=S(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!pi.test(n))return!1;if(fi.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
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
 */const gi=new N(3e4,6e4);function _i(){const e=Mn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function yi(e){return new Promise((t,n)=>{var r,i,o;function s(){_i(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{_i(),n(_(e,"network-request-failed"))},timeout:gi.get()})}if(null===(i=null===(r=Mn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Mn().gapi)||void 0===o?void 0:o.load)){const t=ur("iframefcb");return Mn()[t]=()=>{gapi.load?s():n(_(e,"network-request-failed"))},cr("https://apis.google.com/js/api.js?onload="+t)}s()}}).catch(e=>{throw bi=null,e})}let bi=null;function wi(e){return bi=bi||yi(e),bi}
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
 */const ki=new N(5e3,15e3),Ci="__/auth/iframe",Oi="emulator/auth/iframe",Ii={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ti=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ei(e){const t=e.config;k(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?j(t,Oi):`https://${e.config.authDomain}/${Ci}`,o={apiKey:t.apiKey,appName:e.name,v:i["SDK_VERSION"]},s=Ti.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${Object(r["G"])(o).slice(1)}`}async function Si(e){const t=await wi(e),n=Mn().gapi;return k(n,e,"internal-error"),t.open({where:document.body,url:Ei(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ii,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=_(e,"network-request-failed"),o=Mn().setTimeout(()=>{r(i)},ki.get());function s(){Mn().clearTimeout(o),n(t)}t.ping(s).then(s,()=>{r(i)})}))}
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
 */const xi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ai=500,Ri=600,Pi="_blank",Ni="http://localhost";class ji{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Li(e,t,n,i=Ai,o=Ri){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},xi),{width:i.toString(),height:o.toString(),top:s,left:a}),l=Object(r["s"])().toLowerCase();n&&(c=_e(l)?Pi:n),ve(l)&&(t=t||Ni,u.scrollbars="yes");const h=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(Ie(l)&&"_self"!==c)return Di(t||"",c),new ji(null);const d=window.open(t||"",c,h);k(d,e,"popup-blocked");try{d.focus()}catch(f){}return new ji(d)}function Di(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */const Mi="__/auth/handler",Fi="emulator/auth/handler";function Ui(e,t,n,o,s,a){k(e.config.authDomain,e,"auth-domain-config-required"),k(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i["SDK_VERSION"],eventId:s};if(t instanceof lt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["w"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof ht){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${$i(e)}?${Object(r["G"])(u).slice(1)}`}function $i({config:e}){return e.emulator?j(e,Fi):`https://${e.authDomain}/${Mi}`}
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
 */const qi="webStorageSupport";class Vi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pn,this._completeRedirectFn=oi}async _openPopup(e,t,n,r){var i;O(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Ui(e,t,n,S(),r);return Li(e,o,Ln())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Fn(Ui(e,t,n,S(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(O(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await Si(e),n=new ci(e);return t.register("authEvent",t=>{k(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(qi,{type:qi},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[qi];void 0!==i&&t(!!i),g(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ee()||ge()||Ce()}}const zi=Vi;class Bi{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return C("unexpected MultiFactorSessionType")}}}class Wi extends Bi{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Wi(e)}_finalizeEnroll(e,t,n){return yn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return or(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Hi{constructor(){}static assertion(e){return Wi._fromCredential(e)}}Hi.FACTOR_ID="phone";var Gi="@firebase/auth",Ki="0.19.3";
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
class Yi{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function Qi(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ji(e){Object(i["_registerComponent"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:o}=r.options;return(t=>{k(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),k(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xe(e)},s=new Ae(t,r);return E(s,n),s})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(i["_registerComponent"])(new a["a"]("auth-internal",e=>{const t=Re(e.getProvider("auth").getImmediate());return(e=>new Yi(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["registerVersion"])(Gi,Ki,Qi(e)),Object(i["registerVersion"])(Gi,Ki,"esm2017")}
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
function Xi(){return window}
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
 */Ji("Browser");const Zi=2e3;async function eo(e,t,n){var r;const{BuildInfo:i}=Xi();O(t.sessionId,"AuthEvent did not contain a session ID");const o=await oo(t.sessionId),s={};return Ce()?s["ibi"]=i.packageName:be()?s["apn"]=i.packageName:g(e,"operation-not-supported-in-this-environment"),i.displayName&&(s["appDisplayName"]=i.displayName),s["sessionId"]=o,Ui(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,s)}async function to(e){const{BuildInfo:t}=Xi(),n={};Ce()?n.iosBundleId=t.packageName:be()?n.androidPackageName=t.packageName:g(e,"operation-not-supported-in-this-environment"),await di(e,n)}function no(e){const{cordova:t}=Xi();return new Promise(n=>{t.plugins.browsertab.isAvailable(r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,Oe()?"_blank":"_system","location=yes"),n(i)})})}async function ro(e,t,n){const{cordova:r}=Xi();let i=()=>{};try{await new Promise((o,s)=>{let a=null;function c(){var e;o();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout(()=>{s(_(e,"redirect-cancelled-by-user"))},Zi))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),be()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function io(e){var t,n,r,i,o,s,a,c,u,l;const h=Xi();k("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),k("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),k("function"===typeof(null===(o=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===o?void 0:o.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k("function"===typeof(null===(c=null===(a=null===(s=null===h||void 0===h?void 0:h.cordova)||void 0===s?void 0:s.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function oo(e){const t=so(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map(e=>e.toString(16).padStart(2,"0")).join("")}function so(e){if(O(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
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
 */const ao=20;class co extends ci{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function uo(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:po(),postBody:null,tenantId:e.tenantId,error:_(e,"no-auth-event")}}function lo(e,t){return mo()._set(vo(e),t)}async function ho(e){const t=await mo()._get(vo(e));return t&&await mo()._remove(vo(e)),t}function fo(e,t){var n,r;const i=_o(t);if(i.includes("/__/auth/callback")){const t=yo(i),o=t["firebaseError"]?go(decodeURIComponent(t["firebaseError"])):null,s=null===(r=null===(n=null===o||void 0===o?void 0:o["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=s?_(s):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function po(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<ao;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function mo(){return T(An)}function vo(e){return fe("authEvent",e.config.apiKey,e.name)}function go(e){try{return JSON.parse(e)}catch(t){return null}}function _o(e){const t=yo(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=yo(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,o=yo(i)["link"];return o||i||r||n||e}function yo(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return Object(r["H"])(n.join("?"))}
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
 */const bo=500;class wo{constructor(){this._redirectPersistence=Pn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=oi}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new co(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){g(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){io(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),Yr(),await this._originValidation(e);const o=uo(e,n,r);await lo(e,o);const s=await eo(e,o,t),a=await no(s);return ro(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=to(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=Xi(),o=setTimeout(async()=>{await ho(e),t.onEvent(Co())},bo),s=async n=>{clearTimeout(o);const r=await ho(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=fo(r,n["url"])),t.onEvent(i||Co())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,s);const a=r,c=i.packageName.toLowerCase()+"://";Xi().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&s({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const ko=wo;function Co(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:_("no-auth-event")}}
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
 */function Oo(e,t){Re(e)._logFramework(t)}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return S})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return W})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return D})),n.d(t,"k",(function(){return v})),n.d(t,"l",(function(){return H})),n.d(t,"m",(function(){return d})),n.d(t,"n",(function(){return $})),n.d(t,"o",(function(){return f})),n.d(t,"p",(function(){return J})),n.d(t,"q",(function(){return B})),n.d(t,"r",(function(){return ne})),n.d(t,"s",(function(){return g})),n.d(t,"t",(function(){return L})),n.d(t,"u",(function(){return b})),n.d(t,"v",(function(){return w})),n.d(t,"w",(function(){return F})),n.d(t,"x",(function(){return C})),n.d(t,"y",(function(){return I})),n.d(t,"z",(function(){return _})),n.d(t,"A",(function(){return y})),n.d(t,"B",(function(){return O})),n.d(t,"C",(function(){return k})),n.d(t,"D",(function(){return j})),n.d(t,"E",(function(){return R})),n.d(t,"F",(function(){return U})),n.d(t,"G",(function(){return V})),n.d(t,"H",(function(){return z})),n.d(t,"I",(function(){return M})),n.d(t,"J",(function(){return te})),n.d(t,"K",(function(){return ee})),n.d(t,"L",(function(){return P})),n.d(t,"M",(function(){return Q})),n.d(t,"N",(function(){return X})),n.d(t,"O",(function(){return Z}));
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
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw o(t)},o=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==l)throw Error();const h=t<<2|s>>4;if(r.push(h),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},u=function(e){const t=s(e);return c.encodeByteArray(t,!0)},l=function(e){return u(e).replace(/\./g,"")},h=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
function d(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&p(n)&&(e[n]=f(e[n],t[n]));return e}function p(e){return"__proto__"!==e}
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
 */class m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
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
 */function v(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[l(JSON.stringify(n)),l(JSON.stringify(s)),a].join(".")}
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
 */function g(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function _(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())}function y(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function b(){return"object"===typeof self&&self.self===self}function w(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function k(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function C(){const e=g();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function O(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function I(){return"object"===typeof indexedDB}
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
const T="FirebaseError";class E extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=T,Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?x(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new E(r,s,n);return a}}function x(e,t){return e.replace(A,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const A=/\{\$([^}]+)}/g;
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
 */function R(e){return JSON.parse(e)}function P(e){return JSON.stringify(e)}
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
 */const N=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=R(h(o[0])||""),n=R(h(o[1])||""),i=o[2],r=n["d"]||{},delete n["d"]}catch(o){}return{header:t,claims:n,data:r,signature:i}},j=function(e){const t=N(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},L=function(e){const t=N(e).claims;return"object"===typeof t&&!0===t["admin"]};
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
function D(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function M(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function F(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function U(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function $(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(q(n)&&q(o)){if(!$(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function q(e){return null!==e&&"object"===typeof e}
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
 */function V(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function z(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function B(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */class W{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let l=0;l<16;l++)n[l]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let l=0;l<16;l++)n[l]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let l=16;l<80;l++){const e=n[l-3]^n[l-8]^n[l-14]^n[l-16];n[l]=4294967295&(e<<1|e>>>31)}let r,i,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],u=this.chain_[4];for(let l=0;l<80;l++){l<40?l<20?(r=c^s&(a^c),i=1518500249):(r=s^a^c,i=1859775393):l<60?(r=s&a|c&(s|a),i=2400959708):(r=s^a^c,i=3395469782);const e=(o<<5|o>>>27)+r+u+i+n[l]&4294967295;u=c,c=a,a=4294967295&(s<<30|s>>>2),s=o,o=e}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;while(r<t){if(0===o)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<t)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n;return e}}function H(e,t){const n=new G(e,t);return n.subscribe.bind(n)}class G{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=K(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Y),void 0===r.error&&(r.error=Y),void 0===r.complete&&(r.complete=Y);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function K(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function Y(){}
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
 */const Q=function(e,t,n,r){let i;if(r<t?i="at least "+t:r>n&&(i=0===n?"none":"no more than "+n),i){const t=e+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+i+".";throw new Error(t)}};function J(e,t){return`${e} failed: ${t} argument `}function X(e,t,n,r){if((!r||n)&&"function"!==typeof n)throw new Error(J(e,t)+"must be a valid function.")}function Z(e,t,n,r){if((!r||n)&&("object"!==typeof n||null===n))throw new Error(J(e,t)+"must be a valid context object.")}
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
 */const ee=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);if(o>=55296&&o<=56319){const t=o-55296;r++,i(r<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(r)-56320;o=65536+(t<<10)+n}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},te=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
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
function ne(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},2266:function(e,t,n){var r=n("da84"),i=n("0366"),o=n("c65b"),s=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),h=n("9a1f"),d=n("35a1"),f=n("2a62"),p=r.TypeError,m=function(e,t){this.stopped=e,this.result=t},v=m.prototype;e.exports=function(e,t,n){var r,g,_,y,b,w,k,C=n&&n.that,O=!(!n||!n.AS_ENTRIES),I=!(!n||!n.IS_ITERATOR),T=!(!n||!n.INTERRUPTED),E=i(t,C),S=function(e){return r&&f(r,"normal",e),new m(!0,e)},x=function(e){return O?(s(e),T?E(e[0],e[1],S):E(e[0],e[1])):T?E(e,S):E(e)};if(I)r=e;else{if(g=d(e),!g)throw p(a(e)+" is not iterable");if(c(g)){for(_=0,y=u(e);y>_;_++)if(b=x(e[_]),b&&l(v,b))return b;return new m(!1)}r=h(e,g)}w=r.next;while(!(k=o(w,r)).done){try{b=x(k.value)}catch(A){f(r,"throw",A)}if("object"==typeof b&&b&&l(v,b))return b}return new m(!1)}},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s}));var r=n("1fd5");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
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
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var r=n("5926"),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},"23e7":function(e,t,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,v=e.global,g=e.stat;if(l=v?r:g?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(v?h:m+(g?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&o(f,"sham",!0),s(l,h,f,e)}}},"241c":function(e,t,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},"24ee":function(e,t,n){"use strict";var r=n("7ded"),i=n("589b"),o=n("1fd5"),s=n("22e5");
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
const a="firebasestorage.googleapis.com",c="storageBucket",u=12e4,l=6e5;class h extends o["c"]{constructor(e,t){super(d(e),`Firebase Storage: ${t} (${d(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}_codeEquals(e){return d(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function d(e){return"storage/"+e}function f(){const e="An unknown error occurred, please check the error payload for server response.";return new h("unknown",e)}function p(e){return new h("object-not-found","Object '"+e+"' does not exist.")}function m(e){return new h("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function v(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h("unauthenticated",e)}function g(){return new h("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function _(e){return new h("unauthorized","User does not have permission to access '"+e+"'.")}function y(){return new h("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function b(){return new h("canceled","User canceled the upload/download.")}function w(e){return new h("invalid-url","Invalid URL '"+e+"'.")}function k(e){return new h("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function C(){return new h("no-default-bucket","No default bucket found. Did you set the '"+c+"' property when initializing the app?")}function O(){return new h("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function I(){return new h("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function T(){return new h("no-download-url","The given file does not have any download URLs.")}function E(e){return new h("invalid-argument",e)}function S(){return new h("app-deleted","The Firebase app was deleted.")}function x(e){return new h("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function A(e,t){return new h("invalid-format","String does not match format '"+e+"': "+t)}function R(e){throw new h("internal-error","Internal error: "+e)}
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
 */class P{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=P.makeFromUrl(e,t)}catch(r){return new P(e,"")}if(""===n.path)return n;throw k(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const o="(/(.*))?$",s=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(e){e.path_=decodeURIComponent(e.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},m=t===a?"(?:storage.googleapis.com|storage.cloud.google.com)":t,v="([^?#]*)",g=new RegExp(`^https?://${m}/${r}/${v}`,"i"),_={bucket:1,path:2},y=[{regex:s,indices:c,postModify:i},{regex:f,indices:p,postModify:u},{regex:g,indices:_,postModify:u}];for(let a=0;a<y.length;a++){const t=y[a],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new P(e,i),t.postModify(n);break}}if(null==n)throw w(e);return n}}class N{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
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
 */function j(e,t,n){let r=1,i=null,o=null,s=!1,a=0;function c(){return 2===a}let u=!1;function l(...e){u||(u=!0,t.apply(null,e))}function h(t){i=setTimeout(()=>{i=null,e(f,c())},t)}function d(){o&&clearTimeout(o)}function f(e,...t){if(u)return void d();if(e)return d(),void l.call(null,e,...t);const n=c()||s;if(n)return d(),void l.call(null,e,...t);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function m(e){p||(p=!0,d(),u||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),o=setTimeout(()=>{s=!0,m(!0)},n),m}function L(e){e(!1)}
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
 */function D(e){return void 0!==e}function M(e){return"function"===typeof e}function F(e){return"object"===typeof e&&!Array.isArray(e)}function U(e){return"string"===typeof e||e instanceof String}function $(e){return q()&&e instanceof Blob}function q(){return"undefined"!==typeof Blob}function V(e,t,n,r){if(r<t)throw E(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw E(`Invalid value for '${e}'. Expected ${n} or less.`)}
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
 */function z(e,t,n){let r=t;return null==n&&(r="https://"+t),`${n}://${r}/v0${e}`}function B(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
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
 */var W;(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(W||(W={}));
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
class H{constructor(e,t,n,r,i,o,s,a,c,u,l){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=s,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){const e=(e,t)=>{if(t)return void e(!1,new G(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===W.NO_ERROR,i=n.getStatus();if(!t||this.isRetryStatusCode_(i)){const t=n.getErrorCode()===W.ABORT;return void e(!1,new G(!1,null,t))}const o=-1!==this.successCodes_.indexOf(i);e(!0,new G(o,n))})},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponseText());D(e)?n(e):n()}catch(o){r(o)}else if(null!==i){const e=f();e.serverResponse=i.getResponseText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){const e=this.appDelete_?S():b();r(e)}else{const e=y();r(e)}};this.canceled_?t(!1,new G(!1,null,!0)):this.backoffId_=j(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&L(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=[408,429],r=-1!==n.indexOf(e),i=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||i}}class G{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function K(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function Y(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function Q(e,t){t&&(e["X-Firebase-GMPID"]=t)}function J(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function X(e,t,n,r,i,o){const s=B(e.urlParams),a=e.url+s,c=Object.assign({},e.headers);return Q(c,t),K(c,n),Y(c,o),J(c,r),new H(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i)}
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
 */function Z(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function ee(...e){const t=Z();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(q())return new Blob(e);throw new h("unsupported-environment","This browser doesn't seem to support creating Blobs")}function te(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
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
 */function ne(e){return atob(e)}
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
 */const re={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ie{constructor(e,t){this.data=e,this.contentType=t||null}}function oe(e,t){switch(e){case re.RAW:return new ie(se(t));case re.BASE64:case re.BASE64URL:return new ie(ce(e,t));case re.DATA_URL:return new ie(le(t),he(t))}throw f()}function se(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(i){const i=r,o=e.charCodeAt(++n);r=65536|(1023&i)<<10|1023&o,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function ae(e){let t;try{t=decodeURIComponent(e)}catch(n){throw A(re.DATA_URL,"Malformed data URL.")}return se(t)}function ce(e,t){switch(e){case re.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){const t=n?"-":"_";throw A(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case re.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){const t=n?"+":"/";throw A(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ne(t)}catch(i){throw A(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class ue{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw A(re.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=de(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}function le(e){const t=new ue(e);return t.base64?ce(re.BASE64,t.rest):ae(t.rest)}function he(e){const t=new ue(e);return t.contentType}function de(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
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
 */class fe{constructor(e,t){let n=0,r="";$(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if($(this.data_)){const n=this.data_,r=te(n,e,t);return null===r?null:new fe(r)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new fe(n,!0)}}static getBlob(...e){if(q()){const t=e.map(e=>e instanceof fe?e.data_:e);return new fe(ee.apply(null,t))}{const t=e.map(e=>U(e)?oe(re.RAW,e).data:e.data_);let n=0;t.forEach(e=>{n+=e.byteLength});const r=new Uint8Array(n);let i=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]}),new fe(r,!0)}}uploadData(){return this.data_}}
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
 */function pe(e){let t;try{t=JSON.parse(e)}catch(n){return null}return F(t)?t:null}
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
 */function me(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function ve(e,t){const n=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?n:e+"/"+n}function ge(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
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
 */function _e(e,t){return t}class ye{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||_e}}let be=null;function we(e){return!U(e)||e.length<2?e:ge(e)}function ke(){if(be)return be;const e=[];function t(e,t){return we(t)}e.push(new ye("bucket")),e.push(new ye("generation")),e.push(new ye("metageneration")),e.push(new ye("name","fullPath",!0));const n=new ye("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const i=new ye("size");return i.xform=r,e.push(i),e.push(new ye("timeCreated")),e.push(new ye("updated")),e.push(new ye("md5Hash",null,!0)),e.push(new ye("cacheControl",null,!0)),e.push(new ye("contentDisposition",null,!0)),e.push(new ye("contentEncoding",null,!0)),e.push(new ye("contentLanguage",null,!0)),e.push(new ye("contentType",null,!0)),e.push(new ye("metadata","customMetadata",!0)),be=e,be}function Ce(e,t){function n(){const n=e["bucket"],r=e["fullPath"],i=new P(n,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function Oe(e,t,n){const r={type:"file"},i=n.length;for(let o=0;o<i;o++){const e=n[o];r[e.local]=e.xform(r,t[e.server])}return Ce(r,e),r}function Ie(e,t,n){const r=pe(t);if(null===r)return null;const i=r;return Oe(e,i,n)}function Te(e,t,n,r){const i=pe(t);if(null===i)return null;if(!U(i["downloadTokens"]))return null;const o=i["downloadTokens"];if(0===o.length)return null;const s=encodeURIComponent,a=o.split(","),c=a.map(t=>{const i=e["bucket"],o=e["fullPath"],a="/b/"+s(i)+"/o/"+s(o),c=z(a,n,r),u=B({alt:"media",token:t});return c+u});return c[0]}function Ee(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
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
 */const Se="prefixes",xe="items";function Ae(e,t,n){const r={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[Se])for(const i of n[Se]){const n=i.replace(/\/$/,""),o=e._makeStorageReference(new P(t,n));r.prefixes.push(o)}if(n[xe])for(const i of n[xe]){const n=e._makeStorageReference(new P(t,i["name"]));r.items.push(n)}return r}function Re(e,t,n){const r=pe(n);if(null===r)return null;const i=r;return Ae(e,t,i)}class Pe{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function Ne(e){if(!e)throw f()}function je(e,t){function n(n,r){const i=Ie(e,r,t);return Ne(null!==i),i}return n}function Le(e,t){function n(n,r){const i=Re(e,t,r);return Ne(null!==i),i}return n}function De(e,t){function n(n,r){const i=Ie(e,r,t);return Ne(null!==i),Te(i,r,e.host,e._protocol)}return n}function Me(e){function t(t,n){let r;return r=401===t.getStatus()?t.getResponseText().includes("Firebase App Check token is invalid")?g():v():402===t.getStatus()?m(e.bucket):403===t.getStatus()?_(e.path):n,r.serverResponse=n.serverResponse,r}return t}function Fe(e){const t=Me(e);function n(n,r){let i=t(n,r);return 404===n.getStatus()&&(i=p(e.path)),i.serverResponse=r.serverResponse,i}return n}function Ue(e,t,n){const r=t.fullServerUrl(),i=z(r,e.host,e._protocol),o="GET",s=e.maxOperationRetryTime,a=new Pe(i,o,je(e,n),s);return a.errorHandler=Fe(t),a}function $e(e,t,n,r,i){const o={};t.isRoot?o["prefix"]="":o["prefix"]=t.path+"/",n&&n.length>0&&(o["delimiter"]=n),r&&(o["pageToken"]=r),i&&(o["maxResults"]=i);const s=t.bucketOnlyServerUrl(),a=z(s,e.host,e._protocol),c="GET",u=e.maxOperationRetryTime,l=new Pe(a,c,Le(e,t.bucket),u);return l.urlParams=o,l.errorHandler=Me(t),l}function qe(e,t,n){const r=t.fullServerUrl(),i=z(r,e.host,e._protocol),o="GET",s=e.maxOperationRetryTime,a=new Pe(i,o,De(e,n),s);return a.errorHandler=Fe(t),a}function Ve(e,t,n,r){const i=t.fullServerUrl(),o=z(i,e.host,e._protocol),s="PATCH",a=Ee(n,r),c={"Content-Type":"application/json; charset=utf-8"},u=e.maxOperationRetryTime,l=new Pe(o,s,je(e,r),u);return l.headers=c,l.body=a,l.errorHandler=Fe(t),l}function ze(e,t){const n=t.fullServerUrl(),r=z(n,e.host,e._protocol),i="DELETE",o=e.maxOperationRetryTime;function s(e,t){}const a=new Pe(r,i,s,o);return a.successCodes=[200,204],a.errorHandler=Fe(t),a}function Be(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function We(e,t,n){const r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=Be(null,t)),r}function He(e,t,n,r,i){const o=t.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const c=a();s["Content-Type"]="multipart/related; boundary="+c;const u=We(t,r,i),l=Ee(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=fe.getBlob(h,r,d);if(null===f)throw O();const p={name:u["fullPath"]},m=z(o,e.host,e._protocol),v="POST",g=e.maxUploadRetryTime,_=new Pe(m,v,je(e,n),g);return _.urlParams=p,_.headers=s,_.body=f.uploadData(),_.errorHandler=Me(t),_}class Ge{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function Ke(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(i){Ne(!1)}const r=t||["active"];return Ne(!!n&&-1!==r.indexOf(n)),n}function Ye(e,t,n,r,i){const o=t.bucketOnlyServerUrl(),s=We(t,r,i),a={name:s["fullPath"]},c=z(o,e.host,e._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":""+r.size(),"X-Goog-Upload-Header-Content-Type":s["contentType"],"Content-Type":"application/json; charset=utf-8"},h=Ee(s,n),d=e.maxUploadRetryTime;function f(e){let t;Ke(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){Ne(!1)}return Ne(U(t)),t}const p=new Pe(c,u,f,d);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=Me(t),p}function Qe(e,t,n,r){const i={"X-Goog-Upload-Command":"query"};function o(e){const t=Ke(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(o){Ne(!1)}n||Ne(!1);const i=Number(n);return Ne(!isNaN(i)),new Ge(i,r.size(),"final"===t)}const s="POST",a=e.maxUploadRetryTime,c=new Pe(n,s,o,a);return c.headers=i,c.errorHandler=Me(t),c}const Je=262144;function Xe(e,t,n,r,i,o,s,a){const c=new Ge(0,0);if(s?(c.current=s.current,c.total=s.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw I();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l,f=l===u?"upload, finalize":"upload",p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":""+c.current},m=r.slice(h,d);if(null===m)throw O();function v(e,n){const i=Ke(e,["active","final"]),s=c.current+l,a=r.size();let u;return u="final"===i?je(t,o)(e,n):null,new Ge(s,a,"final"===i,u)}const g="POST",_=t.maxUploadRetryTime,y=new Pe(n,g,v,_);return y.headers=p,y.body=m.uploadData(),y.progressCallback=a||null,y.errorHandler=Me(e),y}
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
 */const Ze={STATE_CHANGED:"state_changed"},et={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function tt(e){switch(e){case"running":case"pausing":case"canceling":return et.RUNNING;case"paused":return et.PAUSED;case"success":return et.SUCCESS;case"canceled":return et.CANCELED;case"error":return et.ERROR;default:return et.ERROR}}
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
 */class nt{constructor(e,t,n){const r=M(e)||null!=t||null!=n;if(r)this.next=e,this.error=null!==t&&void 0!==t?t:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
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
 */function rt(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}
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
 */let it=null;class ot{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=W.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=W.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=W.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,r){if(this.sent_)throw R("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw R("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw R("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponseText(){if(!this.sent_)throw R("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}function st(){return it?it():new ot}
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
 */class at{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=ke(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=e,this._transition("error"))},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const n=Ye(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,st,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,n)=>{const r=Qe(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,st,t,n);this._request=i,i.getPromise().then(e=>{e=e,this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Je*this._chunkMultiplier,t=new Ge(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=Xe(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const s=this._ref.storage._makeRequest(o,st,r,i);this._request=s,s.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){const e=Je*this._chunkMultiplier;e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const n=Ue(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,st,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const n=He(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,st,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,void 0!==this._request&&this._request.cancel();break;case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=b(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=tt(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const i=new nt(t||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();const e=this._observers.slice();e.forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(tt(this._state)){case et.SUCCESS:rt(this._resolve.bind(null,this.snapshot))();break;case et.CANCELED:case et.ERROR:const t=this._reject;rt(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){const t=tt(this._state);switch(t){case et.RUNNING:case et.PAUSED:e.next&&rt(e.next.bind(e,this.snapshot))();break;case et.SUCCESS:e.complete&&rt(e.complete.bind(e))();break;case et.CANCELED:case et.ERROR:e.error&&rt(e.error.bind(e,this._error))();break;default:e.error&&rt(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
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
 */class ct{constructor(e,t){this._service=e,this._location=t instanceof P?t:P.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ct(e,t)}get root(){const e=new P(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ge(this._location.path)}get storage(){return this._service}get parent(){const e=me(this._location.path);if(null===e)return null;const t=new P(this._location.bucket,e);return new ct(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw x(e)}}function ut(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new at(e,new fe(t),n)}function lt(e){const t={prefixes:[],items:[]};return ht(e,t).then(()=>t)}async function ht(e,t,n){const r={pageToken:n},i=await dt(e,r);t.prefixes.push(...i.prefixes),t.items.push(...i.items),null!=i.nextPageToken&&await ht(e,t,i.nextPageToken)}function dt(e,t){null!=t&&"number"===typeof t.maxResults&&V("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=$e(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,st)}function ft(e){e._throwIfRoot("getMetadata");const t=Ue(e.storage,e._location,ke());return e.storage.makeRequestWithTokens(t,st)}function pt(e,t){e._throwIfRoot("updateMetadata");const n=Ve(e.storage,e._location,t,ke());return e.storage.makeRequestWithTokens(n,st)}function mt(e){e._throwIfRoot("getDownloadURL");const t=qe(e.storage,e._location,ke());return e.storage.makeRequestWithTokens(t,st).then(e=>{if(null===e)throw T();return e})}function vt(e){e._throwIfRoot("deleteObject");const t=ze(e.storage,e._location);return e.storage.makeRequestWithTokens(t,st)}function gt(e,t){const n=ve(e._location.path,t),r=new P(e._location.bucket,n);return new ct(e.storage,r)}
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
 */function _t(e){return/^[A-Za-z]+:\/\//.test(e)}function yt(e,t){return new ct(e,t)}function bt(e,t){if(e instanceof Ot){const n=e;if(null==n._bucket)throw C();const r=new ct(n,n._bucket);return null!=t?bt(r,t):r}return void 0!==t?gt(e,t):e}function wt(e,t){if(t&&_t(t)){if(e instanceof Ot)return yt(e,t);throw E("To use ref(service, url), the first argument must be a Storage instance.")}return bt(e,t)}function kt(e,t){const n=null===t||void 0===t?void 0:t[c];return null==n?null:P.makeFromBucketSpec(n,e)}function Ct(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"===typeof i?i:Object(o["k"])(i,e.app.options.projectId))}class Ot{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=u,this._maxUploadRetryTime=l,this._requests=new Set,this._bucket=null!=r?P.makeFromBucketSpec(r,this._host):kt(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=P.makeFromBucketSpec(this._url,e):this._bucket=kt(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){V("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){V("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ct(this,e)}_makeRequest(e,t,n,r){if(this._deleted)return new N(S());{const i=X(e,this._appId,n,r,t,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const It="@firebase/storage",Tt="0.8.7",Et="storage";function St(e,t,n){return e=Object(o["r"])(e),ut(e,t,n)}function xt(e){return e=Object(o["r"])(e),ft(e)}function At(e,t){return e=Object(o["r"])(e),pt(e,t)}function Rt(e,t){return e=Object(o["r"])(e),dt(e,t)}function Pt(e){return e=Object(o["r"])(e),lt(e)}function Nt(e){return e=Object(o["r"])(e),mt(e)}function jt(e){return e=Object(o["r"])(e),vt(e)}function Lt(e,t){return e=Object(o["r"])(e),wt(e,t)}function Dt(e,t){return gt(e,t)}function Mt(e,t,n,r={}){Ct(e,t,n,r)}function Ft(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new Ot(n,r,o,t,i["SDK_VERSION"])}function Ut(){Object(i["_registerComponent"])(new s["a"](Et,Ft,"PUBLIC").setMultipleInstances(!0)),Object(i["registerVersion"])(It,Tt,""),Object(i["registerVersion"])(It,Tt,"esm2017")}Ut();
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
class $t{constructor(e,t,n){this._delegate=e,this.task=t,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}
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
 */class qt{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new $t(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(t=>{if(e)return e(new $t(t,this,this._ref))},t)}on(e,t,n,r){let i=void 0;return t&&(i="function"===typeof t?e=>t(new $t(e,this,this._ref)):{next:t.next?e=>t.next(new $t(e,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,i,n||void 0,r||void 0)}}class Vt{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new zt(e,this._service))}get items(){return this._delegate.items.map(e=>new zt(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=Dt(this._delegate,e);return new zt(t,this.storage)}get root(){return new zt(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return null==e?null:new zt(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new qt(St(this._delegate,e,t),this)}putString(e,t=re.RAW,n){this._throwIfRoot("putString");const r=oe(t,e),i=Object.assign({},n);return null==i["contentType"]&&null!=r.contentType&&(i["contentType"]=r.contentType),new qt(new at(this._delegate,new fe(r.data,!0),i),this)}listAll(){return Pt(this._delegate).then(e=>new Vt(e,this.storage))}list(e){return Rt(this._delegate,e||void 0).then(e=>new Vt(e,this.storage))}getMetadata(){return xt(this._delegate)}updateMetadata(e){return At(this._delegate,e)}getDownloadURL(){return Nt(this._delegate)}delete(){return this._throwIfRoot("delete"),jt(this._delegate)}_throwIfRoot(e){if(""===this._delegate._location.path)throw x(e)}}
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
 */class Bt{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(Wt(e))throw E("ref() expected a child path but got a URL, use refFromURL instead.");return new zt(Lt(this._delegate,e),this)}refFromURL(e){if(!Wt(e))throw E("refFromURL() expected a full URL but got a child path, use ref() instead.");try{P.makeFromUrl(e,this._delegate.host)}catch(t){throw E("refFromUrl() expected a valid full URL but got an invalid one.")}return new zt(Lt(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,n={}){Mt(this._delegate,e,t,n)}}function Wt(e){return/^[A-Za-z]+:\/\//.test(e)}const Ht="@firebase/storage-compat",Gt="0.1.7",Kt="storage-compat";function Yt(e,{instanceIdentifier:t}){const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("storage").getImmediate({identifier:t}),i=new Bt(n,r);return i}function Qt(e){const t={TaskState:et,TaskEvent:Ze,StringFormat:re,Storage:Bt,Reference:zt};e.INTERNAL.registerComponent(new s["a"](Kt,Yt,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion(Ht,Gt)}Qt(r["a"])},"256a":function(e,t,n){"use strict";n("5994")},"25f0":function(e,t,n){"use strict";var r=n("e330"),i=n("5e77").PROPER,o=n("6eeb"),s=n("825a"),a=n("3a9b"),c=n("577e"),u=n("d039"),l=n("ad6d"),h="toString",d=RegExp.prototype,f=d[h],p=r(l),m=u((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),v=i&&f.name!=h;(m||v)&&o(RegExp.prototype,h,(function(){var e=s(this),t=c(e.source),n=e.flags,r=c(void 0===n&&a(d,e)&&!("flags"in d)?p(e):n);return"/"+t+"/"+r}),{unsafe:!0})},2626:function(e,t,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),s=n("83ab"),a=o("species");e.exports=function(e){var t=r(e),n=i.f;s&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},2877:function(e,t,n){"use strict";function r(e,t,n,r,i,o,s,a){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:u}}n.d(t,"a",(function(){return r}))},2979:function(e,t,n){"use strict";var r=n("7ded"),i=n("22e5"),o=n("51b0"),s=n("1fd5"),a=n("e691");const c="@firebase/database-compat",u="0.1.4",l=new a["b"]("@firebase/database-compat"),h=function(e){const t="FIREBASE WARNING: "+e;l.warn(t)},d=function(e,t,n,r){if((!r||void 0!==n)&&"boolean"!==typeof n)throw new Error(Object(s["p"])(e,t)+"must be a boolean.")},f=function(e,t,n){if(!n||void 0!==t)switch(t){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(Object(s["p"])(e,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};
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
class p{constructor(e){this._delegate=e}cancel(e){Object(s["M"])("OnDisconnect.cancel",0,1,arguments.length),Object(s["N"])("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then(()=>e(null),t=>e(t)),t}remove(e){Object(s["M"])("OnDisconnect.remove",0,1,arguments.length),Object(s["N"])("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then(()=>e(null),t=>e(t)),t}set(e,t){Object(s["M"])("OnDisconnect.set",1,2,arguments.length),Object(s["N"])("OnDisconnect.set","onComplete",t,!0);const n=this._delegate.set(e);return t&&n.then(()=>t(null),e=>t(e)),n}setWithPriority(e,t,n){Object(s["M"])("OnDisconnect.setWithPriority",2,3,arguments.length),Object(s["N"])("OnDisconnect.setWithPriority","onComplete",n,!0);const r=this._delegate.setWithPriority(e,t);return n&&r.then(()=>n(null),e=>n(e)),r}update(e,t){if(Object(s["M"])("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,h("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Object(s["N"])("OnDisconnect.update","onComplete",t,!0);const n=this._delegate.update(e);return t&&n.then(()=>t(null),e=>t(e)),n}}
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
 */class m{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return Object(s["M"])("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}
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
 */class v{constructor(e,t){this._database=e,this._delegate=t}val(){return Object(s["M"])("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return Object(s["M"])("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return Object(s["M"])("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return Object(s["M"])("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return Object(s["M"])("DataSnapshot.child",0,1,arguments.length),e=String(e),Object(o["g"])("DataSnapshot.child","path",e,!1),new v(this._database,this._delegate.child(e))}hasChild(e){return Object(s["M"])("DataSnapshot.hasChild",1,1,arguments.length),Object(o["g"])("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return Object(s["M"])("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return Object(s["M"])("DataSnapshot.forEach",1,1,arguments.length),Object(s["N"])("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(t=>e(new v(this._database,t)))}hasChildren(){return Object(s["M"])("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return Object(s["M"])("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return Object(s["M"])("DataSnapshot.ref",0,0,arguments.length),new _(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class g{constructor(e,t){this.database=e,this._delegate=t}on(e,t,n,r){var i;Object(s["M"])("Query.on",2,4,arguments.length),Object(s["N"])("Query.on","callback",t,!1);const a=g.getCancelAndContextArgs_("Query.on",n,r),c=(e,n)=>{t.call(a.context,new v(this.database,e),n)};c.userCallback=t,c.context=a.context;const u=null===(i=a.cancel)||void 0===i?void 0:i.bind(a.context);switch(e){case"value":return Object(o["z"])(this._delegate,c,u),t;case"child_added":return Object(o["v"])(this._delegate,c,u),t;case"child_removed":return Object(o["y"])(this._delegate,c,u),t;case"child_changed":return Object(o["w"])(this._delegate,c,u),t;case"child_moved":return Object(o["x"])(this._delegate,c,u),t;default:throw new Error(Object(s["p"])("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,n){if(Object(s["M"])("Query.off",0,3,arguments.length),f("Query.off",e,!0),Object(s["N"])("Query.off","callback",t,!0),Object(s["O"])("Query.off","context",n,!0),t){const r=()=>{};r.userCallback=t,r.context=n,Object(o["u"])(this._delegate,e,r)}else Object(o["u"])(this._delegate,e)}get(){return Object(o["o"])(this._delegate).then(e=>new v(this.database,e))}once(e,t,n,r){Object(s["M"])("Query.once",1,4,arguments.length),Object(s["N"])("Query.once","callback",t,!0);const i=g.getCancelAndContextArgs_("Query.once",n,r),a=new s["a"],c=(e,n)=>{const r=new v(this.database,e);t&&t.call(i.context,r,n),a.resolve(r)};c.userCallback=t,c.context=i.context;const u=e=>{i.cancel&&i.cancel.call(i.context,e),a.reject(e)};switch(e){case"value":Object(o["z"])(this._delegate,c,u,{onlyOnce:!0});break;case"child_added":Object(o["v"])(this._delegate,c,u,{onlyOnce:!0});break;case"child_removed":Object(o["y"])(this._delegate,c,u,{onlyOnce:!0});break;case"child_changed":Object(o["w"])(this._delegate,c,u,{onlyOnce:!0});break;case"child_moved":Object(o["x"])(this._delegate,c,u,{onlyOnce:!0});break;default:throw new Error(Object(s["p"])("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return a.promise}limitToFirst(e){return Object(s["M"])("Query.limitToFirst",1,1,arguments.length),new g(this.database,Object(o["F"])(this._delegate,Object(o["s"])(e)))}limitToLast(e){return Object(s["M"])("Query.limitToLast",1,1,arguments.length),new g(this.database,Object(o["F"])(this._delegate,Object(o["t"])(e)))}orderByChild(e){return Object(s["M"])("Query.orderByChild",1,1,arguments.length),new g(this.database,Object(o["F"])(this._delegate,Object(o["A"])(e)))}orderByKey(){return Object(s["M"])("Query.orderByKey",0,0,arguments.length),new g(this.database,Object(o["F"])(this._delegate,Object(o["B"])()))}orderByPriority(){return Object(s["M"])("Query.orderByPriority",0,0,arguments.length),new g(this.database,Object(o["F"])(this._delegate,Object(o["C"])()))}orderByValue(){return Object(s["M"])("Query.orderByValue",0,0,arguments.length),new g(this.database,Object(o["F"])(this._delegate,Object(o["D"])()))}startAt(e=null,t){return Object(s["M"])("Query.startAt",0,2,arguments.length),new g(this.database,Object(o["F"])(this._delegate,Object(o["P"])(e,t)))}startAfter(e=null,t){return Object(s["M"])("Query.startAfter",0,2,arguments.length),new g(this.database,Object(o["F"])(this._delegate,Object(o["O"])(e,t)))}endAt(e=null,t){return Object(s["M"])("Query.endAt",0,2,arguments.length),new g(this.database,Object(o["F"])(this._delegate,Object(o["l"])(e,t)))}endBefore(e=null,t){return Object(s["M"])("Query.endBefore",0,2,arguments.length),new g(this.database,Object(o["F"])(this._delegate,Object(o["m"])(e,t)))}equalTo(e,t){return Object(s["M"])("Query.equalTo",1,2,arguments.length),new g(this.database,Object(o["F"])(this._delegate,Object(o["n"])(e,t)))}toString(){return Object(s["M"])("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return Object(s["M"])("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(Object(s["M"])("Query.isEqual",1,1,arguments.length),!(e instanceof g)){const e="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(e)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,n){const r={cancel:void 0,context:void 0};if(t&&n)r.cancel=t,Object(s["N"])(e,"cancel",r.cancel,!0),r.context=n,Object(s["O"])(e,"context",r.context,!0);else if(t)if("object"===typeof t&&null!==t)r.context=t;else{if("function"!==typeof t)throw new Error(Object(s["p"])(e,"cancelOrContext")+" must either be a cancel callback or a context object.");r.cancel=t}return r}get ref(){return new _(this.database,new o["d"](this._delegate._repo,this._delegate._path))}}class _ extends g{constructor(e,t){super(e,new o["b"](t._repo,t._path,new o["c"],!1)),this.database=e,this._delegate=t}getKey(){return Object(s["M"])("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return Object(s["M"])("Reference.child",1,1,arguments.length),"number"===typeof e&&(e=String(e)),new _(this.database,Object(o["i"])(this._delegate,e))}getParent(){Object(s["M"])("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new _(this.database,e):null}getRoot(){return Object(s["M"])("Reference.root",0,0,arguments.length),new _(this.database,this._delegate.root)}set(e,t){Object(s["M"])("Reference.set",1,2,arguments.length),Object(s["N"])("Reference.set","onComplete",t,!0);const n=Object(o["L"])(this._delegate,e);return t&&n.then(()=>t(null),e=>t(e)),n}update(e,t){if(Object(s["M"])("Reference.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,h("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Object(o["h"])("Reference.update",this._delegate._path),Object(s["N"])("Reference.update","onComplete",t,!0);const n=Object(o["Q"])(this._delegate,e);return t&&n.then(()=>t(null),e=>t(e)),n}setWithPriority(e,t,n){Object(s["M"])("Reference.setWithPriority",2,3,arguments.length),Object(s["N"])("Reference.setWithPriority","onComplete",n,!0);const r=Object(o["N"])(this._delegate,e,t);return n&&r.then(()=>n(null),e=>n(e)),r}remove(e){Object(s["M"])("Reference.remove",0,1,arguments.length),Object(s["N"])("Reference.remove","onComplete",e,!0);const t=Object(o["I"])(this._delegate);return e&&t.then(()=>e(null),t=>e(t)),t}transaction(e,t,n){Object(s["M"])("Reference.transaction",1,3,arguments.length),Object(s["N"])("Reference.transaction","transactionUpdate",e,!1),Object(s["N"])("Reference.transaction","onComplete",t,!0),d("Reference.transaction","applyLocally",n,!0);const r=Object(o["J"])(this._delegate,e,{applyLocally:n}).then(e=>new m(e.committed,new v(this.database,e.snapshot)));return t&&r.then(e=>t(null,e.committed,e.snapshot),e=>t(e,!1,null)),r}setPriority(e,t){Object(s["M"])("Reference.setPriority",1,2,arguments.length),Object(s["N"])("Reference.setPriority","onComplete",t,!0);const n=Object(o["M"])(this._delegate,e);return t&&n.then(()=>t(null),e=>t(e)),n}push(e,t){Object(s["M"])("Reference.push",0,2,arguments.length),Object(s["N"])("Reference.push","onComplete",t,!0);const n=Object(o["E"])(this._delegate,e),r=n.then(e=>new _(this.database,e));t&&r.then(()=>t(null),e=>t(e));const i=new _(this.database,n);return i.then=r.then.bind(r),i.catch=r.catch.bind(r,void 0),i}onDisconnect(){return Object(o["h"])("Reference.onDisconnect",this._delegate._path),new p(new o["a"](this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}
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
 */class y{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete()}}useEmulator(e,t,n={}){Object(o["j"])(this._delegate,e,t,n)}ref(e){if(Object(s["M"])("database.ref",0,1,arguments.length),e instanceof _){const t=Object(o["H"])(this._delegate,e.toString());return new _(this,t)}{const t=Object(o["G"])(this._delegate,e);return new _(this,t)}}refFromURL(e){const t="database.refFromURL";Object(s["M"])(t,1,1,arguments.length);const n=Object(o["H"])(this._delegate,e);return new _(this,n)}goOffline(){return Object(s["M"])("database.goOffline",0,0,arguments.length),Object(o["p"])(this._delegate)}goOnline(){return Object(s["M"])("database.goOnline",0,0,arguments.length),Object(o["q"])(this._delegate)}}
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
function b({app:e,url:t,version:n,customAuthImpl:r,namespace:s,nodeAdmin:a=!1}){Object(o["f"])(n);const c=new i["c"]("auth-internal",new i["b"]("database-standalone"));return c.setComponent(new i["a"]("auth-internal",()=>r,"PRIVATE")),{instance:new y(Object(o["e"])(e,c,void 0,t,a),e),namespace:s}}y.ServerValue={TIMESTAMP:Object(o["K"])(),increment:e=>Object(o["r"])(e)};var w=Object.freeze({__proto__:null,initStandalone:b});
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
 */const k=y.ServerValue;function C(e){e.INTERNAL.registerComponent(new i["a"]("database-compat",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("database").getImmediate({identifier:t});return new y(r,n)},"PUBLIC").setServiceProps({Reference:_,Query:g,Database:y,DataSnapshot:v,enableLogging:o["k"],INTERNAL:w,ServerValue:k}).setMultipleInstances(!0)),e.registerVersion(c,u)}C(r["a"])},"2a62":function(e,t,n){var r=n("c65b"),i=n("825a"),o=n("dc4a");e.exports=function(e,t,n){var s,a;i(e);try{if(s=o(e,"return"),!s){if("throw"===t)throw n;return n}s=r(s,e)}catch(c){a=!0,s=c}if("throw"===t)throw n;if(a)throw s;return i(s),n}},"2b0e":function(e,t,n){"use strict";(function(e){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(e){return void 0===e||null===e}function i(e){return void 0!==e&&null!==e}function o(e){return!0===e}function s(e){return!1===e}function a(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function c(e){return null!==e&&"object"===typeof e}var u=Object.prototype.toString;function l(e){return"[object Object]"===u.call(e)}function h(e){return"[object RegExp]"===u.call(e)}function d(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function f(e){return i(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function p(e){return null==e?"":Array.isArray(e)||l(e)&&e.toString===u?JSON.stringify(e,null,2):String(e)}function m(e){var t=parseFloat(e);return isNaN(t)?e:t}function v(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}v("slot,component",!0);var g=v("key,ref,slot,slot-scope,is");function _(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var y=Object.prototype.hasOwnProperty;function b(e,t){return y.call(e,t)}function w(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}var k=/-(\w)/g,C=w((function(e){return e.replace(k,(function(e,t){return t?t.toUpperCase():""}))})),O=w((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),I=/\B([A-Z])/g,T=w((function(e){return e.replace(I,"-$1").toLowerCase()}));function E(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function S(e,t){return e.bind(t)}var x=Function.prototype.bind?S:E;function A(e,t){t=t||0;var n=e.length-t,r=new Array(n);while(n--)r[n]=e[n+t];return r}function R(e,t){for(var n in t)e[n]=t[n];return e}function P(e){for(var t={},n=0;n<e.length;n++)e[n]&&R(t,e[n]);return t}function N(e,t,n){}var j=function(e,t,n){return!1},L=function(e){return e};function D(e,t){if(e===t)return!0;var n=c(e),r=c(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),o=Array.isArray(t);if(i&&o)return e.length===t.length&&e.every((function(e,n){return D(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||o)return!1;var s=Object.keys(e),a=Object.keys(t);return s.length===a.length&&s.every((function(n){return D(e[n],t[n])}))}catch(u){return!1}}function M(e,t){for(var n=0;n<e.length;n++)if(D(e[n],t))return n;return-1}function F(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var U="data-server-rendered",$=["component","directive","filter"],q=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],V={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:j,isReservedAttr:j,isUnknownElement:j,getTagNamespace:N,parsePlatformTagName:L,mustUseProp:j,async:!0,_lifecycleHooks:q},z=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function B(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function W(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var H=new RegExp("[^"+z.source+".$_\\d]");function G(e){if(!H.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var K,Y="__proto__"in{},Q="undefined"!==typeof window,J="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=J&&WXEnvironment.platform.toLowerCase(),Z=Q&&window.navigator.userAgent.toLowerCase(),ee=Z&&/msie|trident/.test(Z),te=Z&&Z.indexOf("msie 9.0")>0,ne=Z&&Z.indexOf("edge/")>0,re=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===X),ie=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/)),oe={}.watch,se=!1;if(Q)try{var ae={};Object.defineProperty(ae,"passive",{get:function(){se=!0}}),window.addEventListener("test-passive",null,ae)}catch(Os){}var ce=function(){return void 0===K&&(K=!Q&&!J&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),K},ue=Q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function le(e){return"function"===typeof e&&/native code/.test(e.toString())}var he,de="undefined"!==typeof Symbol&&le(Symbol)&&"undefined"!==typeof Reflect&&le(Reflect.ownKeys);he="undefined"!==typeof Set&&le(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var fe=N,pe=0,me=function(){this.id=pe++,this.subs=[]};me.prototype.addSub=function(e){this.subs.push(e)},me.prototype.removeSub=function(e){_(this.subs,e)},me.prototype.depend=function(){me.target&&me.target.addDep(this)},me.prototype.notify=function(){var e=this.subs.slice();for(var t=0,n=e.length;t<n;t++)e[t].update()},me.target=null;var ve=[];function ge(e){ve.push(e),me.target=e}function _e(){ve.pop(),me.target=ve[ve.length-1]}var ye=function(e,t,n,r,i,o,s,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},be={child:{configurable:!0}};be.child.get=function(){return this.componentInstance},Object.defineProperties(ye.prototype,be);var we=function(e){void 0===e&&(e="");var t=new ye;return t.text=e,t.isComment=!0,t};function ke(e){return new ye(void 0,void 0,void 0,String(e))}function Ce(e){var t=new ye(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var Oe=Array.prototype,Ie=Object.create(Oe),Te=["push","pop","shift","unshift","splice","sort","reverse"];Te.forEach((function(e){var t=Oe[e];W(Ie,e,(function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,o=t.apply(this,n),s=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&s.observeArray(i),s.dep.notify(),o}))}));var Ee=Object.getOwnPropertyNames(Ie),Se=!0;function xe(e){Se=e}var Ae=function(e){this.value=e,this.dep=new me,this.vmCount=0,W(e,"__ob__",this),Array.isArray(e)?(Y?Re(e,Ie):Pe(e,Ie,Ee),this.observeArray(e)):this.walk(e)};function Re(e,t){e.__proto__=t}function Pe(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];W(e,o,t[o])}}function Ne(e,t){var n;if(c(e)&&!(e instanceof ye))return b(e,"__ob__")&&e.__ob__ instanceof Ae?n=e.__ob__:Se&&!ce()&&(Array.isArray(e)||l(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new Ae(e)),t&&n&&n.vmCount++,n}function je(e,t,n,r,i){var o=new me,s=Object.getOwnPropertyDescriptor(e,t);if(!s||!1!==s.configurable){var a=s&&s.get,c=s&&s.set;a&&!c||2!==arguments.length||(n=e[t]);var u=!i&&Ne(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return me.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(t)&&Me(t))),t},set:function(t){var r=a?a.call(e):n;t===r||t!==t&&r!==r||a&&!c||(c?c.call(e,t):n=t,u=!i&&Ne(t),o.notify())}})}}function Le(e,t,n){if(Array.isArray(e)&&d(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(je(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function De(e,t){if(Array.isArray(e)&&d(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||b(e,t)&&(delete e[t],n&&n.dep.notify())}}function Me(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&Me(t)}Ae.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)je(e,t[n])},Ae.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Ne(e[t])};var Fe=V.optionMergeStrategies;function Ue(e,t){if(!t)return e;for(var n,r,i,o=de?Reflect.ownKeys(t):Object.keys(t),s=0;s<o.length;s++)n=o[s],"__ob__"!==n&&(r=e[n],i=t[n],b(e,n)?r!==i&&l(r)&&l(i)&&Ue(r,i):Le(e,n,i));return e}function $e(e,t,n){return n?function(){var r="function"===typeof t?t.call(n,n):t,i="function"===typeof e?e.call(n,n):e;return r?Ue(r,i):i}:t?e?function(){return Ue("function"===typeof t?t.call(this,this):t,"function"===typeof e?e.call(this,this):e)}:t:e}function qe(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?Ve(n):n}function Ve(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function ze(e,t,n,r){var i=Object.create(e||null);return t?R(i,t):i}Fe.data=function(e,t,n){return n?$e(e,t,n):t&&"function"!==typeof t?e:$e(e,t)},q.forEach((function(e){Fe[e]=qe})),$.forEach((function(e){Fe[e+"s"]=ze})),Fe.watch=function(e,t,n,r){if(e===oe&&(e=void 0),t===oe&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var o in R(i,e),t){var s=i[o],a=t[o];s&&!Array.isArray(s)&&(s=[s]),i[o]=s?s.concat(a):Array.isArray(a)?a:[a]}return i},Fe.props=Fe.methods=Fe.inject=Fe.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return R(i,e),t&&R(i,t),i},Fe.provide=$e;var Be=function(e,t){return void 0===t?e:t};function We(e,t){var n=e.props;if(n){var r,i,o,s={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(o=C(i),s[o]={type:null})}else if(l(n))for(var a in n)i=n[a],o=C(a),s[o]=l(i)?i:{type:i};else 0;e.props=s}}function He(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var o in n){var s=n[o];r[o]=l(s)?R({from:o},s):{from:s}}else 0}}function Ge(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"===typeof r&&(t[n]={bind:r,update:r})}}function Ke(e,t,n){if("function"===typeof t&&(t=t.options),We(t,n),He(t,n),Ge(t),!t._base&&(t.extends&&(e=Ke(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=Ke(e,t.mixins[r],n);var o,s={};for(o in e)a(o);for(o in t)b(e,o)||a(o);function a(r){var i=Fe[r]||Be;s[r]=i(e[r],t[r],n,r)}return s}function Ye(e,t,n,r){if("string"===typeof n){var i=e[t];if(b(i,n))return i[n];var o=C(n);if(b(i,o))return i[o];var s=O(o);if(b(i,s))return i[s];var a=i[n]||i[o]||i[s];return a}}function Qe(e,t,n,r){var i=t[e],o=!b(n,e),s=n[e],a=tt(Boolean,i.type);if(a>-1)if(o&&!b(i,"default"))s=!1;else if(""===s||s===T(e)){var c=tt(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=Je(r,i,e);var u=Se;xe(!0),Ne(s),xe(u)}return s}function Je(e,t,n){if(b(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"===typeof r&&"Function"!==Ze(t.type)?r.call(e):r}}var Xe=/^\s*function (\w+)/;function Ze(e){var t=e&&e.toString().match(Xe);return t?t[1]:""}function et(e,t){return Ze(e)===Ze(t)}function tt(e,t){if(!Array.isArray(t))return et(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(et(t[n],e))return n;return-1}function nt(e,t,n){ge();try{if(t){var r=t;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var s=!1===i[o].call(r,e,t,n);if(s)return}catch(Os){it(Os,r,"errorCaptured hook")}}}it(e,t,n)}finally{_e()}}function rt(e,t,n,r,i){var o;try{o=n?e.apply(t,n):e.call(t),o&&!o._isVue&&f(o)&&!o._handled&&(o.catch((function(e){return nt(e,r,i+" (Promise/async)")})),o._handled=!0)}catch(Os){nt(Os,r,i)}return o}function it(e,t,n){if(V.errorHandler)try{return V.errorHandler.call(null,e,t,n)}catch(Os){Os!==e&&ot(Os,null,"config.errorHandler")}ot(e,t,n)}function ot(e,t,n){if(!Q&&!J||"undefined"===typeof console)throw e;console.error(e)}var st,at=!1,ct=[],ut=!1;function lt(){ut=!1;var e=ct.slice(0);ct.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&le(Promise)){var ht=Promise.resolve();st=function(){ht.then(lt),re&&setTimeout(N)},at=!0}else if(ee||"undefined"===typeof MutationObserver||!le(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())st="undefined"!==typeof setImmediate&&le(setImmediate)?function(){setImmediate(lt)}:function(){setTimeout(lt,0)};else{var dt=1,ft=new MutationObserver(lt),pt=document.createTextNode(String(dt));ft.observe(pt,{characterData:!0}),st=function(){dt=(dt+1)%2,pt.data=String(dt)},at=!0}function mt(e,t){var n;if(ct.push((function(){if(e)try{e.call(t)}catch(Os){nt(Os,t,"nextTick")}else n&&n(t)})),ut||(ut=!0,st()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){n=e}))}var vt=new he;function gt(e){_t(e,vt),vt.clear()}function _t(e,t){var n,r,i=Array.isArray(e);if(!(!i&&!c(e)||Object.isFrozen(e)||e instanceof ye)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(i){n=e.length;while(n--)_t(e[n],t)}else{r=Object.keys(e),n=r.length;while(n--)_t(e[r[n]],t)}}}var yt=w((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var r="!"===e.charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}}));function bt(e,t){function n(){var e=arguments,r=n.fns;if(!Array.isArray(r))return rt(r,null,arguments,t,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)rt(i[o],null,e,t,"v-on handler")}return n.fns=e,n}function wt(e,t,n,i,s,a){var c,u,l,h;for(c in e)u=e[c],l=t[c],h=yt(c),r(u)||(r(l)?(r(u.fns)&&(u=e[c]=bt(u,a)),o(h.once)&&(u=e[c]=s(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,e[c]=l));for(c in t)r(e[c])&&(h=yt(c),i(h.name,t[c],h.capture))}function kt(e,t,n){var s;e instanceof ye&&(e=e.data.hook||(e.data.hook={}));var a=e[t];function c(){n.apply(this,arguments),_(s.fns,c)}r(a)?s=bt([c]):i(a.fns)&&o(a.merged)?(s=a,s.fns.push(c)):s=bt([a,c]),s.merged=!0,e[t]=s}function Ct(e,t,n){var o=t.options.props;if(!r(o)){var s={},a=e.attrs,c=e.props;if(i(a)||i(c))for(var u in o){var l=T(u);Ot(s,c,u,l,!0)||Ot(s,a,u,l,!1)}return s}}function Ot(e,t,n,r,o){if(i(t)){if(b(t,n))return e[n]=t[n],o||delete t[n],!0;if(b(t,r))return e[n]=t[r],o||delete t[r],!0}return!1}function It(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function Tt(e){return a(e)?[ke(e)]:Array.isArray(e)?St(e):void 0}function Et(e){return i(e)&&i(e.text)&&s(e.isComment)}function St(e,t){var n,s,c,u,l=[];for(n=0;n<e.length;n++)s=e[n],r(s)||"boolean"===typeof s||(c=l.length-1,u=l[c],Array.isArray(s)?s.length>0&&(s=St(s,(t||"")+"_"+n),Et(s[0])&&Et(u)&&(l[c]=ke(u.text+s[0].text),s.shift()),l.push.apply(l,s)):a(s)?Et(u)?l[c]=ke(u.text+s):""!==s&&l.push(ke(s)):Et(s)&&Et(u)?l[c]=ke(u.text+s.text):(o(e._isVList)&&i(s.tag)&&r(s.key)&&i(t)&&(s.key="__vlist"+t+"_"+n+"__"),l.push(s)));return l}function xt(e){var t=e.$options.provide;t&&(e._provided="function"===typeof t?t.call(e):t)}function At(e){var t=Rt(e.$options.inject,e);t&&(xe(!1),Object.keys(t).forEach((function(n){je(e,n,t[n])})),xe(!0))}function Rt(e,t){if(e){for(var n=Object.create(null),r=de?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=e[o].from,a=t;while(a){if(a._provided&&b(a._provided,s)){n[o]=a._provided[s];break}a=a.$parent}if(!a)if("default"in e[o]){var c=e[o].default;n[o]="function"===typeof c?c.call(t):c}else 0}}return n}}function Pt(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==t&&o.fnContext!==t||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(Nt)&&delete n[u];return n}function Nt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function jt(e){return e.isComment&&e.asyncFactory}function Lt(e,t,r){var i,o=Object.keys(t).length>0,s=e?!!e.$stable:!o,a=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(s&&r&&r!==n&&a===r.$key&&!o&&!r.$hasNormal)return r;for(var c in i={},e)e[c]&&"$"!==c[0]&&(i[c]=Dt(t,c,e[c]))}else i={};for(var u in t)u in i||(i[u]=Mt(t,u));return e&&Object.isExtensible(e)&&(e._normalized=i),W(i,"$stable",s),W(i,"$key",a),W(i,"$hasNormal",o),i}function Dt(e,t,n){var r=function(){var e=arguments.length?n.apply(null,arguments):n({});e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:Tt(e);var t=e&&e[0];return e&&(!t||1===e.length&&t.isComment&&!jt(t))?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function Mt(e,t){return function(){return e[t]}}function Ft(e,t){var n,r,o,s,a;if(Array.isArray(e)||"string"===typeof e)for(n=new Array(e.length),r=0,o=e.length;r<o;r++)n[r]=t(e[r],r);else if("number"===typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(c(e))if(de&&e[Symbol.iterator]){n=[];var u=e[Symbol.iterator](),l=u.next();while(!l.done)n.push(t(l.value,n.length)),l=u.next()}else for(s=Object.keys(e),n=new Array(s.length),r=0,o=s.length;r<o;r++)a=s[r],n[r]=t(e[a],a,r);return i(n)||(n=[]),n._isVList=!0,n}function Ut(e,t,n,r){var i,o=this.$scopedSlots[e];o?(n=n||{},r&&(n=R(R({},r),n)),i=o(n)||("function"===typeof t?t():t)):i=this.$slots[e]||("function"===typeof t?t():t);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function $t(e){return Ye(this.$options,"filters",e,!0)||L}function qt(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function Vt(e,t,n,r,i){var o=V.keyCodes[t]||n;return i&&r&&!V.keyCodes[t]?qt(i,r):o?qt(o,e):r?T(r)!==t:void 0===e}function zt(e,t,n,r,i){if(n)if(c(n)){var o;Array.isArray(n)&&(n=P(n));var s=function(s){if("class"===s||"style"===s||g(s))o=e;else{var a=e.attrs&&e.attrs.type;o=r||V.mustUseProp(t,a,s)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=C(s),u=T(s);if(!(c in o)&&!(u in o)&&(o[s]=n[s],i)){var l=e.on||(e.on={});l["update:"+s]=function(e){n[s]=e}}};for(var a in n)s(a)}else;return e}function Bt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Ht(r,"__static__"+e,!1)),r}function Wt(e,t,n){return Ht(e,"__once__"+t+(n?"_"+n:""),!0),e}function Ht(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!==typeof e[r]&&Gt(e[r],t+"_"+r,n);else Gt(e,t,n)}function Gt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function Kt(e,t){if(t)if(l(t)){var n=e.on=e.on?R({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function Yt(e,t,n,r){t=t||{$stable:!n};for(var i=0;i<e.length;i++){var o=e[i];Array.isArray(o)?Yt(o,t,n):o&&(o.proxy&&(o.fn.proxy=!0),t[o.key]=o.fn)}return r&&(t.$key=r),t}function Qt(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"===typeof r&&r&&(e[t[n]]=t[n+1])}return e}function Jt(e,t){return"string"===typeof e?t+e:e}function Xt(e){e._o=Wt,e._n=m,e._s=p,e._l=Ft,e._t=Ut,e._q=D,e._i=M,e._m=Bt,e._f=$t,e._k=Vt,e._b=zt,e._v=ke,e._e=we,e._u=Yt,e._g=Kt,e._d=Qt,e._p=Jt}function Zt(e,t,r,i,s){var a,c=this,u=s.options;b(i,"_uid")?(a=Object.create(i),a._original=i):(a=i,i=i._original);var l=o(u._compiled),h=!l;this.data=e,this.props=t,this.children=r,this.parent=i,this.listeners=e.on||n,this.injections=Rt(u.inject,i),this.slots=function(){return c.$slots||Lt(e.scopedSlots,c.$slots=Pt(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Lt(e.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Lt(e.scopedSlots,this.$slots)),u._scopeId?this._c=function(e,t,n,r){var o=fn(a,e,t,n,r,h);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=i),o}:this._c=function(e,t,n,r){return fn(a,e,t,n,r,h)}}function en(e,t,r,o,s){var a=e.options,c={},u=a.props;if(i(u))for(var l in u)c[l]=Qe(l,u,t||n);else i(r.attrs)&&nn(c,r.attrs),i(r.props)&&nn(c,r.props);var h=new Zt(r,c,s,o,e),d=a.render.call(null,h._c,h);if(d instanceof ye)return tn(d,r,h.parent,a,h);if(Array.isArray(d)){for(var f=Tt(d)||[],p=new Array(f.length),m=0;m<f.length;m++)p[m]=tn(f[m],r,h.parent,a,h);return p}}function tn(e,t,n,r,i){var o=Ce(e);return o.fnContext=n,o.fnOptions=r,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function nn(e,t){for(var n in t)e[C(n)]=t[n]}Xt(Zt.prototype);var rn={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;rn.prepatch(n,n)}else{var r=e.componentInstance=an(e,Rn);r.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,r=t.componentInstance=e.componentInstance;Dn(r,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,$n(n,"mounted")),e.data.keepAlive&&(t._isMounted?Zn(n):Fn(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Un(t,!0):t.$destroy())}},on=Object.keys(rn);function sn(e,t,n,s,a){if(!r(e)){var u=n.$options._base;if(c(e)&&(e=u.extend(e)),"function"===typeof e){var l;if(r(e.cid)&&(l=e,e=Cn(l,u),void 0===e))return kn(l,t,n,s,a);t=t||{},kr(e),i(t.model)&&ln(e.options,t);var h=Ct(t,e,a);if(o(e.options.functional))return en(e,h,t,n,s);var d=t.on;if(t.on=t.nativeOn,o(e.options.abstract)){var f=t.slot;t={},f&&(t.slot=f)}cn(t);var p=e.options.name||a,m=new ye("vue-component-"+e.cid+(p?"-"+p:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:h,listeners:d,tag:a,children:s},l);return m}}}function an(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new e.componentOptions.Ctor(n)}function cn(e){for(var t=e.hook||(e.hook={}),n=0;n<on.length;n++){var r=on[n],i=t[r],o=rn[r];i===o||i&&i._merged||(t[r]=i?un(o,i):o)}}function un(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function ln(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var o=t.on||(t.on={}),s=o[r],a=t.model.callback;i(s)?(Array.isArray(s)?-1===s.indexOf(a):s!==a)&&(o[r]=[a].concat(s)):o[r]=a}var hn=1,dn=2;function fn(e,t,n,r,i,s){return(Array.isArray(n)||a(n))&&(i=r,r=n,n=void 0),o(s)&&(i=dn),pn(e,t,n,r,i)}function pn(e,t,n,r,o){if(i(n)&&i(n.__ob__))return we();if(i(n)&&i(n.is)&&(t=n.is),!t)return we();var s,a,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===dn?r=Tt(r):o===hn&&(r=It(r)),"string"===typeof t)?(a=e.$vnode&&e.$vnode.ns||V.getTagNamespace(t),s=V.isReservedTag(t)?new ye(V.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!i(c=Ye(e.$options,"components",t))?new ye(t,n,r,void 0,void 0,e):sn(c,n,e,r,t)):s=sn(t,n,e,r);return Array.isArray(s)?s:i(s)?(i(a)&&mn(s,a),i(n)&&vn(n),s):we()}function mn(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),i(e.children))for(var s=0,a=e.children.length;s<a;s++){var c=e.children[s];i(c.tag)&&(r(c.ns)||o(n)&&"svg"!==c.tag)&&mn(c,t,n)}}function vn(e){c(e.style)&&gt(e.style),c(e.class)&&gt(e.class)}function gn(e){e._vnode=null,e._staticTrees=null;var t=e.$options,r=e.$vnode=t._parentVnode,i=r&&r.context;e.$slots=Pt(t._renderChildren,i),e.$scopedSlots=n,e._c=function(t,n,r,i){return fn(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return fn(e,t,n,r,i,!0)};var o=r&&r.data;je(e,"$attrs",o&&o.attrs||n,null,!0),je(e,"$listeners",t._parentListeners||n,null,!0)}var _n,yn=null;function bn(e){Xt(e.prototype),e.prototype.$nextTick=function(e){return mt(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,i=n._parentVnode;i&&(t.$scopedSlots=Lt(i.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=i;try{yn=t,e=r.call(t._renderProxy,t.$createElement)}catch(Os){nt(Os,t,"render"),e=t._vnode}finally{yn=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof ye||(e=we()),e.parent=i,e}}function wn(e,t){return(e.__esModule||de&&"Module"===e[Symbol.toStringTag])&&(e=e.default),c(e)?t.extend(e):e}function kn(e,t,n,r,i){var o=we();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}function Cn(e,t){if(o(e.error)&&i(e.errorComp))return e.errorComp;if(i(e.resolved))return e.resolved;var n=yn;if(n&&i(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),o(e.loading)&&i(e.loadingComp))return e.loadingComp;if(n&&!i(e.owners)){var s=e.owners=[n],a=!0,u=null,l=null;n.$on("hook:destroyed",(function(){return _(s,n)}));var h=function(e){for(var t=0,n=s.length;t<n;t++)s[t].$forceUpdate();e&&(s.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},d=F((function(n){e.resolved=wn(n,t),a?s.length=0:h(!0)})),p=F((function(t){i(e.errorComp)&&(e.error=!0,h(!0))})),m=e(d,p);return c(m)&&(f(m)?r(e.resolved)&&m.then(d,p):f(m.component)&&(m.component.then(d,p),i(m.error)&&(e.errorComp=wn(m.error,t)),i(m.loading)&&(e.loadingComp=wn(m.loading,t),0===m.delay?e.loading=!0:u=setTimeout((function(){u=null,r(e.resolved)&&r(e.error)&&(e.loading=!0,h(!1))}),m.delay||200)),i(m.timeout)&&(l=setTimeout((function(){l=null,r(e.resolved)&&p(null)}),m.timeout)))),a=!1,e.loading?e.loadingComp:e.resolved}}function On(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(i(n)&&(i(n.componentOptions)||jt(n)))return n}}function In(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&xn(e,t)}function Tn(e,t){_n.$on(e,t)}function En(e,t){_n.$off(e,t)}function Sn(e,t){var n=_n;return function r(){var i=t.apply(null,arguments);null!==i&&n.$off(e,r)}}function xn(e,t,n){_n=e,wt(t,n||{},Tn,En,Sn,e),_n=void 0}function An(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var i=0,o=e.length;i<o;i++)r.$on(e[i],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)n.$off(e[r],t);return n}var o,s=n._events[e];if(!s)return n;if(!t)return n._events[e]=null,n;var a=s.length;while(a--)if(o=s[a],o===t||o.fn===t){s.splice(a,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?A(n):n;for(var r=A(arguments,1),i='event handler for "'+e+'"',o=0,s=n.length;o<s;o++)rt(n[o],t,r,t,i)}return t}}var Rn=null;function Pn(e){var t=Rn;return Rn=e,function(){Rn=t}}function Nn(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function jn(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=Pn(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){$n(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||_(t.$children,e),e._watcher&&e._watcher.teardown();var n=e._watchers.length;while(n--)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),$n(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Ln(e,t,n){var r;return e.$el=t,e.$options.render||(e.$options.render=we),$n(e,"beforeMount"),r=function(){e._update(e._render(),n)},new rr(e,r,N,{before:function(){e._isMounted&&!e._isDestroyed&&$n(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,$n(e,"mounted")),e}function Dn(e,t,r,i,o){var s=i.data.scopedSlots,a=e.$scopedSlots,c=!!(s&&!s.$stable||a!==n&&!a.$stable||s&&e.$scopedSlots.$key!==s.$key||!s&&e.$scopedSlots.$key),u=!!(o||e.$options._renderChildren||c);if(e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=o,e.$attrs=i.data.attrs||n,e.$listeners=r||n,t&&e.$options.props){xe(!1);for(var l=e._props,h=e.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=e.$options.props;l[f]=Qe(f,p,t,e)}xe(!0),e.$options.propsData=t}r=r||n;var m=e.$options._parentListeners;e.$options._parentListeners=r,xn(e,r,m),u&&(e.$slots=Pt(o,i.context),e.$forceUpdate())}function Mn(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Fn(e,t){if(t){if(e._directInactive=!1,Mn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Fn(e.$children[n]);$n(e,"activated")}}function Un(e,t){if((!t||(e._directInactive=!0,!Mn(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Un(e.$children[n]);$n(e,"deactivated")}}function $n(e,t){ge();var n=e.$options[t],r=t+" hook";if(n)for(var i=0,o=n.length;i<o;i++)rt(n[i],e,null,e,r);e._hasHookEvent&&e.$emit("hook:"+t),_e()}var qn=[],Vn=[],zn={},Bn=!1,Wn=!1,Hn=0;function Gn(){Hn=qn.length=Vn.length=0,zn={},Bn=Wn=!1}var Kn=0,Yn=Date.now;if(Q&&!ee){var Qn=window.performance;Qn&&"function"===typeof Qn.now&&Yn()>document.createEvent("Event").timeStamp&&(Yn=function(){return Qn.now()})}function Jn(){var e,t;for(Kn=Yn(),Wn=!0,qn.sort((function(e,t){return e.id-t.id})),Hn=0;Hn<qn.length;Hn++)e=qn[Hn],e.before&&e.before(),t=e.id,zn[t]=null,e.run();var n=Vn.slice(),r=qn.slice();Gn(),er(n),Xn(r),ue&&V.devtools&&ue.emit("flush")}function Xn(e){var t=e.length;while(t--){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&$n(r,"updated")}}function Zn(e){e._inactive=!1,Vn.push(e)}function er(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Fn(e[t],!0)}function tr(e){var t=e.id;if(null==zn[t]){if(zn[t]=!0,Wn){var n=qn.length-1;while(n>Hn&&qn[n].id>e.id)n--;qn.splice(n+1,0,e)}else qn.push(e);Bn||(Bn=!0,mt(Jn))}}var nr=0,rr=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++nr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new he,this.newDepIds=new he,this.expression="","function"===typeof t?this.getter=t:(this.getter=G(t),this.getter||(this.getter=N)),this.value=this.lazy?void 0:this.get()};rr.prototype.get=function(){var e;ge(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(Os){if(!this.user)throw Os;nt(Os,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&gt(e),_e(),this.cleanupDeps()}return e},rr.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},rr.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},rr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():tr(this)},rr.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||c(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'+this.expression+'"';rt(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},rr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},rr.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},rr.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||_(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var ir={enumerable:!0,configurable:!0,get:N,set:N};function or(e,t,n){ir.get=function(){return this[t][n]},ir.set=function(e){this[t][n]=e},Object.defineProperty(e,n,ir)}function sr(e){e._watchers=[];var t=e.$options;t.props&&ar(e,t.props),t.methods&&mr(e,t.methods),t.data?cr(e):Ne(e._data={},!0),t.computed&&hr(e,t.computed),t.watch&&t.watch!==oe&&vr(e,t.watch)}function ar(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[],o=!e.$parent;o||xe(!1);var s=function(o){i.push(o);var s=Qe(o,t,n,e);je(r,o,s),o in e||or(e,"_props",o)};for(var a in t)s(a);xe(!0)}function cr(e){var t=e.$options.data;t=e._data="function"===typeof t?ur(t,e):t||{},l(t)||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);while(i--){var o=n[i];0,r&&b(r,o)||B(o)||or(e,"_data",o)}Ne(t,!0)}function ur(e,t){ge();try{return e.call(t,t)}catch(Os){return nt(Os,t,"data()"),{}}finally{_e()}}var lr={lazy:!0};function hr(e,t){var n=e._computedWatchers=Object.create(null),r=ce();for(var i in t){var o=t[i],s="function"===typeof o?o:o.get;0,r||(n[i]=new rr(e,s||N,N,lr)),i in e||dr(e,i,o)}}function dr(e,t,n){var r=!ce();"function"===typeof n?(ir.get=r?fr(t):pr(n),ir.set=N):(ir.get=n.get?r&&!1!==n.cache?fr(t):pr(n.get):N,ir.set=n.set||N),Object.defineProperty(e,t,ir)}function fr(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),me.target&&t.depend(),t.value}}function pr(e){return function(){return e.call(this,this)}}function mr(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?N:x(t[n],e)}function vr(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)gr(e,n,r[i]);else gr(e,n,r)}}function gr(e,t,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,r)}function _r(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Le,e.prototype.$delete=De,e.prototype.$watch=function(e,t,n){var r=this;if(l(t))return gr(r,e,t,n);n=n||{},n.user=!0;var i=new rr(r,e,t,n);if(n.immediate){var o='callback for immediate watcher "'+i.expression+'"';ge(),rt(t,r,[i.value],r,o),_e()}return function(){i.teardown()}}}var yr=0;function br(e){e.prototype._init=function(e){var t=this;t._uid=yr++,t._isVue=!0,e&&e._isComponent?wr(t,e):t.$options=Ke(kr(t.constructor),e||{},t),t._renderProxy=t,t._self=t,Nn(t),In(t),gn(t),$n(t,"beforeCreate"),At(t),sr(t),xt(t),$n(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function wr(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function kr(e){var t=e.options;if(e.super){var n=kr(e.super),r=e.superOptions;if(n!==r){e.superOptions=n;var i=Cr(e);i&&R(e.extendOptions,i),t=e.options=Ke(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Cr(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}function Or(e){this._init(e)}function Ir(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=A(arguments,1);return n.unshift(this),"function"===typeof e.install?e.install.apply(e,n):"function"===typeof e&&e.apply(null,n),t.push(e),this}}function Tr(e){e.mixin=function(e){return this.options=Ke(this.options,e),this}}function Er(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name;var s=function(e){this._init(e)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=t++,s.options=Ke(n.options,e),s["super"]=n,s.options.props&&Sr(s),s.options.computed&&xr(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,$.forEach((function(e){s[e]=n[e]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=e,s.sealedOptions=R({},s.options),i[r]=s,s}}function Sr(e){var t=e.options.props;for(var n in t)or(e.prototype,"_props",n)}function xr(e){var t=e.options.computed;for(var n in t)dr(e.prototype,n,t[n])}function Ar(e){$.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&l(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"===typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}function Rr(e){return e&&(e.Ctor.options.name||e.tag)}function Pr(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!h(e)&&e.test(t)}function Nr(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!t(a)&&jr(n,o,r,i)}}}function jr(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,_(n,t)}br(Or),_r(Or),An(Or),jn(Or),bn(Or);var Lr=[String,RegExp,Array],Dr={name:"keep-alive",abstract:!0,props:{include:Lr,exclude:Lr,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,r=e.vnodeToCache,i=e.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;t[i]={name:Rr(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&jr(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)jr(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){Nr(e,(function(e){return Pr(t,e)}))})),this.$watch("exclude",(function(t){Nr(e,(function(e){return!Pr(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=On(e),n=t&&t.componentOptions;if(n){var r=Rr(n),i=this,o=i.include,s=i.exclude;if(o&&(!r||!Pr(o,r))||s&&r&&Pr(s,r))return t;var a=this,c=a.cache,u=a.keys,l=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;c[l]?(t.componentInstance=c[l].componentInstance,_(u,l),u.push(l)):(this.vnodeToCache=t,this.keyToCache=l),t.data.keepAlive=!0}return t||e&&e[0]}},Mr={KeepAlive:Dr};function Fr(e){var t={get:function(){return V}};Object.defineProperty(e,"config",t),e.util={warn:fe,extend:R,mergeOptions:Ke,defineReactive:je},e.set=Le,e.delete=De,e.nextTick=mt,e.observable=function(e){return Ne(e),e},e.options=Object.create(null),$.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,R(e.options.components,Mr),Ir(e),Tr(e),Er(e),Ar(e)}Fr(Or),Object.defineProperty(Or.prototype,"$isServer",{get:ce}),Object.defineProperty(Or.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Or,"FunctionalRenderContext",{value:Zt}),Or.version="2.6.14";var Ur=v("style,class"),$r=v("input,textarea,option,select,progress"),qr=function(e,t,n){return"value"===n&&$r(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Vr=v("contenteditable,draggable,spellcheck"),zr=v("events,caret,typing,plaintext-only"),Br=function(e,t){return Yr(t)||"false"===t?"false":"contenteditable"===e&&zr(t)?t:"true"},Wr=v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Hr="http://www.w3.org/1999/xlink",Gr=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Kr=function(e){return Gr(e)?e.slice(6,e.length):""},Yr=function(e){return null==e||!1===e};function Qr(e){var t=e.data,n=e,r=e;while(i(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(t=Jr(r.data,t));while(i(n=n.parent))n&&n.data&&(t=Jr(t,n.data));return Xr(t.staticClass,t.class)}function Jr(e,t){return{staticClass:Zr(e.staticClass,t.staticClass),class:i(e.class)?[e.class,t.class]:t.class}}function Xr(e,t){return i(e)||i(t)?Zr(e,ei(t)):""}function Zr(e,t){return e?t?e+" "+t:e:t||""}function ei(e){return Array.isArray(e)?ti(e):c(e)?ni(e):"string"===typeof e?e:""}function ti(e){for(var t,n="",r=0,o=e.length;r<o;r++)i(t=ei(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function ni(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var ri={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ii=v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),oi=v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),si=function(e){return ii(e)||oi(e)};function ai(e){return oi(e)?"svg":"math"===e?"math":void 0}var ci=Object.create(null);function ui(e){if(!Q)return!0;if(si(e))return!1;if(e=e.toLowerCase(),null!=ci[e])return ci[e];var t=document.createElement(e);return e.indexOf("-")>-1?ci[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:ci[e]=/HTMLUnknownElement/.test(t.toString())}var li=v("text,number,password,search,email,tel,url");function hi(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function di(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function fi(e,t){return document.createElementNS(ri[e],t)}function pi(e){return document.createTextNode(e)}function mi(e){return document.createComment(e)}function vi(e,t,n){e.insertBefore(t,n)}function gi(e,t){e.removeChild(t)}function _i(e,t){e.appendChild(t)}function yi(e){return e.parentNode}function bi(e){return e.nextSibling}function wi(e){return e.tagName}function ki(e,t){e.textContent=t}function Ci(e,t){e.setAttribute(t,"")}var Oi=Object.freeze({createElement:di,createElementNS:fi,createTextNode:pi,createComment:mi,insertBefore:vi,removeChild:gi,appendChild:_i,parentNode:yi,nextSibling:bi,tagName:wi,setTextContent:ki,setStyleScope:Ci}),Ii={create:function(e,t){Ti(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Ti(e,!0),Ti(t))},destroy:function(e){Ti(e,!0)}};function Ti(e,t){var n=e.data.ref;if(i(n)){var r=e.context,o=e.componentInstance||e.elm,s=r.$refs;t?Array.isArray(s[n])?_(s[n],o):s[n]===o&&(s[n]=void 0):e.data.refInFor?Array.isArray(s[n])?s[n].indexOf(o)<0&&s[n].push(o):s[n]=[o]:s[n]=o}}var Ei=new ye("",{},[]),Si=["create","activate","update","remove","destroy"];function xi(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&i(e.data)===i(t.data)&&Ai(e,t)||o(e.isAsyncPlaceholder)&&r(t.asyncFactory.error))}function Ai(e,t){if("input"!==e.tag)return!0;var n,r=i(n=e.data)&&i(n=n.attrs)&&n.type,o=i(n=t.data)&&i(n=n.attrs)&&n.type;return r===o||li(r)&&li(o)}function Ri(e,t,n){var r,o,s={};for(r=t;r<=n;++r)o=e[r].key,i(o)&&(s[o]=r);return s}function Pi(e){var t,n,s={},c=e.modules,u=e.nodeOps;for(t=0;t<Si.length;++t)for(s[Si[t]]=[],n=0;n<c.length;++n)i(c[n][Si[t]])&&s[Si[t]].push(c[n][Si[t]]);function l(e){return new ye(u.tagName(e).toLowerCase(),{},[],void 0,e)}function h(e,t){function n(){0===--n.listeners&&d(e)}return n.listeners=t,n}function d(e){var t=u.parentNode(e);i(t)&&u.removeChild(t,e)}function f(e,t,n,r,s,a,c){if(i(e.elm)&&i(a)&&(e=a[c]=Ce(e)),e.isRootInsert=!s,!p(e,t,n,r)){var l=e.data,h=e.children,d=e.tag;i(d)?(e.elm=e.ns?u.createElementNS(e.ns,d):u.createElement(d,e),k(e),y(e,h,t),i(l)&&w(e,t),_(n,e.elm,r)):o(e.isComment)?(e.elm=u.createComment(e.text),_(n,e.elm,r)):(e.elm=u.createTextNode(e.text),_(n,e.elm,r))}}function p(e,t,n,r){var s=e.data;if(i(s)){var a=i(e.componentInstance)&&s.keepAlive;if(i(s=s.hook)&&i(s=s.init)&&s(e,!1),i(e.componentInstance))return m(e,t),_(n,e.elm,r),o(a)&&g(e,t,n,r),!0}}function m(e,t){i(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,b(e)?(w(e,t),k(e)):(Ti(e),t.push(e))}function g(e,t,n,r){var o,a=e;while(a.componentInstance)if(a=a.componentInstance._vnode,i(o=a.data)&&i(o=o.transition)){for(o=0;o<s.activate.length;++o)s.activate[o](Ei,a);t.push(a);break}_(n,e.elm,r)}function _(e,t,n){i(e)&&(i(n)?u.parentNode(n)===e&&u.insertBefore(e,t,n):u.appendChild(e,t))}function y(e,t,n){if(Array.isArray(t)){0;for(var r=0;r<t.length;++r)f(t[r],n,e.elm,null,!0,t,r)}else a(e.text)&&u.appendChild(e.elm,u.createTextNode(String(e.text)))}function b(e){while(e.componentInstance)e=e.componentInstance._vnode;return i(e.tag)}function w(e,n){for(var r=0;r<s.create.length;++r)s.create[r](Ei,e);t=e.data.hook,i(t)&&(i(t.create)&&t.create(Ei,e),i(t.insert)&&n.push(e))}function k(e){var t;if(i(t=e.fnScopeId))u.setStyleScope(e.elm,t);else{var n=e;while(n)i(t=n.context)&&i(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t),n=n.parent}i(t=Rn)&&t!==e.context&&t!==e.fnContext&&i(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t)}function C(e,t,n,r,i,o){for(;r<=i;++r)f(n[r],o,e,t,!1,n,r)}function O(e){var t,n,r=e.data;if(i(r))for(i(t=r.hook)&&i(t=t.destroy)&&t(e),t=0;t<s.destroy.length;++t)s.destroy[t](e);if(i(t=e.children))for(n=0;n<e.children.length;++n)O(e.children[n])}function I(e,t,n){for(;t<=n;++t){var r=e[t];i(r)&&(i(r.tag)?(T(r),O(r)):d(r.elm))}}function T(e,t){if(i(t)||i(e.data)){var n,r=s.remove.length+1;for(i(t)?t.listeners+=r:t=h(e.elm,r),i(n=e.componentInstance)&&i(n=n._vnode)&&i(n.data)&&T(n,t),n=0;n<s.remove.length;++n)s.remove[n](e,t);i(n=e.data.hook)&&i(n=n.remove)?n(e,t):t()}else d(e.elm)}function E(e,t,n,o,s){var a,c,l,h,d=0,p=0,m=t.length-1,v=t[0],g=t[m],_=n.length-1,y=n[0],b=n[_],w=!s;while(d<=m&&p<=_)r(v)?v=t[++d]:r(g)?g=t[--m]:xi(v,y)?(x(v,y,o,n,p),v=t[++d],y=n[++p]):xi(g,b)?(x(g,b,o,n,_),g=t[--m],b=n[--_]):xi(v,b)?(x(v,b,o,n,_),w&&u.insertBefore(e,v.elm,u.nextSibling(g.elm)),v=t[++d],b=n[--_]):xi(g,y)?(x(g,y,o,n,p),w&&u.insertBefore(e,g.elm,v.elm),g=t[--m],y=n[++p]):(r(a)&&(a=Ri(t,d,m)),c=i(y.key)?a[y.key]:S(y,t,d,m),r(c)?f(y,o,e,v.elm,!1,n,p):(l=t[c],xi(l,y)?(x(l,y,o,n,p),t[c]=void 0,w&&u.insertBefore(e,l.elm,v.elm)):f(y,o,e,v.elm,!1,n,p)),y=n[++p]);d>m?(h=r(n[_+1])?null:n[_+1].elm,C(e,h,n,p,_,o)):p>_&&I(t,d,m)}function S(e,t,n,r){for(var o=n;o<r;o++){var s=t[o];if(i(s)&&xi(e,s))return o}}function x(e,t,n,a,c,l){if(e!==t){i(t.elm)&&i(a)&&(t=a[c]=Ce(t));var h=t.elm=e.elm;if(o(e.isAsyncPlaceholder))i(t.asyncFactory.resolved)?P(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(o(t.isStatic)&&o(e.isStatic)&&t.key===e.key&&(o(t.isCloned)||o(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,f=t.data;i(f)&&i(d=f.hook)&&i(d=d.prepatch)&&d(e,t);var p=e.children,m=t.children;if(i(f)&&b(t)){for(d=0;d<s.update.length;++d)s.update[d](e,t);i(d=f.hook)&&i(d=d.update)&&d(e,t)}r(t.text)?i(p)&&i(m)?p!==m&&E(h,p,m,n,l):i(m)?(i(e.text)&&u.setTextContent(h,""),C(h,null,m,0,m.length-1,n)):i(p)?I(p,0,p.length-1):i(e.text)&&u.setTextContent(h,""):e.text!==t.text&&u.setTextContent(h,t.text),i(f)&&i(d=f.hook)&&i(d=d.postpatch)&&d(e,t)}}}function A(e,t,n){if(o(n)&&i(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var R=v("attrs,class,staticClass,staticStyle,key");function P(e,t,n,r){var s,a=t.tag,c=t.data,u=t.children;if(r=r||c&&c.pre,t.elm=e,o(t.isComment)&&i(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(i(c)&&(i(s=c.hook)&&i(s=s.init)&&s(t,!0),i(s=t.componentInstance)))return m(t,n),!0;if(i(a)){if(i(u))if(e.hasChildNodes())if(i(s=c)&&i(s=s.domProps)&&i(s=s.innerHTML)){if(s!==e.innerHTML)return!1}else{for(var l=!0,h=e.firstChild,d=0;d<u.length;d++){if(!h||!P(h,u[d],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else y(t,u,n);if(i(c)){var f=!1;for(var p in c)if(!R(p)){f=!0,w(t,n);break}!f&&c["class"]&&gt(c["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,a){if(!r(t)){var c=!1,h=[];if(r(e))c=!0,f(t,h);else{var d=i(e.nodeType);if(!d&&xi(e,t))x(e,t,h,null,null,a);else{if(d){if(1===e.nodeType&&e.hasAttribute(U)&&(e.removeAttribute(U),n=!0),o(n)&&P(e,t,h))return A(t,h,!0),e;e=l(e)}var p=e.elm,m=u.parentNode(p);if(f(t,h,p._leaveCb?null:m,u.nextSibling(p)),i(t.parent)){var v=t.parent,g=b(t);while(v){for(var _=0;_<s.destroy.length;++_)s.destroy[_](v);if(v.elm=t.elm,g){for(var y=0;y<s.create.length;++y)s.create[y](Ei,v);var w=v.data.hook.insert;if(w.merged)for(var k=1;k<w.fns.length;k++)w.fns[k]()}else Ti(v);v=v.parent}}i(m)?I([e],0,0):i(e.tag)&&O(e)}}return A(t,h,c),t.elm}i(e)&&O(e)}}var Ni={create:ji,update:ji,destroy:function(e){ji(e,Ei)}};function ji(e,t){(e.data.directives||t.data.directives)&&Li(e,t)}function Li(e,t){var n,r,i,o=e===Ei,s=t===Ei,a=Mi(e.data.directives,e.context),c=Mi(t.data.directives,t.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,Ui(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(Ui(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)Ui(u[n],"inserted",t,e)};o?kt(t,"insert",h):h()}if(l.length&&kt(t,"postpatch",(function(){for(var n=0;n<l.length;n++)Ui(l[n],"componentUpdated",t,e)})),!o)for(n in a)c[n]||Ui(a[n],"unbind",e,e,s)}var Di=Object.create(null);function Mi(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++)r=e[n],r.modifiers||(r.modifiers=Di),i[Fi(r)]=r,r.def=Ye(t.$options,"directives",r.name,!0);return i}function Fi(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function Ui(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(Os){nt(Os,n.context,"directive "+e.name+" "+t+" hook")}}var $i=[Ii,Ni];function qi(e,t){var n=t.componentOptions;if((!i(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(e.data.attrs)||!r(t.data.attrs))){var o,s,a,c=t.elm,u=e.data.attrs||{},l=t.data.attrs||{};for(o in i(l.__ob__)&&(l=t.data.attrs=R({},l)),l)s=l[o],a=u[o],a!==s&&Vi(c,o,s,t.data.pre);for(o in(ee||ne)&&l.value!==u.value&&Vi(c,"value",l.value),u)r(l[o])&&(Gr(o)?c.removeAttributeNS(Hr,Kr(o)):Vr(o)||c.removeAttribute(o))}}function Vi(e,t,n,r){r||e.tagName.indexOf("-")>-1?zi(e,t,n):Wr(t)?Yr(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):Vr(t)?e.setAttribute(t,Br(t,n)):Gr(t)?Yr(n)?e.removeAttributeNS(Hr,Kr(t)):e.setAttributeNS(Hr,t,n):zi(e,t,n)}function zi(e,t,n){if(Yr(n))e.removeAttribute(t);else{if(ee&&!te&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var Bi={create:qi,update:qi};function Wi(e,t){var n=t.elm,o=t.data,s=e.data;if(!(r(o.staticClass)&&r(o.class)&&(r(s)||r(s.staticClass)&&r(s.class)))){var a=Qr(t),c=n._transitionClasses;i(c)&&(a=Zr(a,ei(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Hi,Gi={create:Wi,update:Wi},Ki="__r",Yi="__c";function Qi(e){if(i(e[Ki])){var t=ee?"change":"input";e[t]=[].concat(e[Ki],e[t]||[]),delete e[Ki]}i(e[Yi])&&(e.change=[].concat(e[Yi],e.change||[]),delete e[Yi])}function Ji(e,t,n){var r=Hi;return function i(){var o=t.apply(null,arguments);null!==o&&eo(e,i,n,r)}}var Xi=at&&!(ie&&Number(ie[1])<=53);function Zi(e,t,n,r){if(Xi){var i=Kn,o=t;t=o._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return o.apply(this,arguments)}}Hi.addEventListener(e,t,se?{capture:n,passive:r}:n)}function eo(e,t,n,r){(r||Hi).removeEventListener(e,t._wrapper||t,n)}function to(e,t){if(!r(e.data.on)||!r(t.data.on)){var n=t.data.on||{},i=e.data.on||{};Hi=t.elm,Qi(n),wt(n,i,Zi,eo,Ji,t.context),Hi=void 0}}var no,ro={create:to,update:to};function io(e,t){if(!r(e.data.domProps)||!r(t.data.domProps)){var n,o,s=t.elm,a=e.data.domProps||{},c=t.data.domProps||{};for(n in i(c.__ob__)&&(c=t.data.domProps=R({},c)),a)n in c||(s[n]="");for(n in c){if(o=c[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),o===a[n])continue;1===s.childNodes.length&&s.removeChild(s.childNodes[0])}if("value"===n&&"PROGRESS"!==s.tagName){s._value=o;var u=r(o)?"":String(o);oo(s,u)&&(s.value=u)}else if("innerHTML"===n&&oi(s.tagName)&&r(s.innerHTML)){no=no||document.createElement("div"),no.innerHTML="<svg>"+o+"</svg>";var l=no.firstChild;while(s.firstChild)s.removeChild(s.firstChild);while(l.firstChild)s.appendChild(l.firstChild)}else if(o!==a[n])try{s[n]=o}catch(Os){}}}}function oo(e,t){return!e.composing&&("OPTION"===e.tagName||so(e,t)||ao(e,t))}function so(e,t){var n=!0;try{n=document.activeElement!==e}catch(Os){}return n&&e.value!==t}function ao(e,t){var n=e.value,r=e._vModifiers;if(i(r)){if(r.number)return m(n)!==m(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}var co={create:io,update:io},uo=w((function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach((function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}));function lo(e){var t=ho(e.style);return e.staticStyle?R(e.staticStyle,t):t}function ho(e){return Array.isArray(e)?P(e):"string"===typeof e?uo(e):e}function fo(e,t){var n,r={};if(t){var i=e;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=lo(i.data))&&R(r,n)}(n=lo(e.data))&&R(r,n);var o=e;while(o=o.parent)o.data&&(n=lo(o.data))&&R(r,n);return r}var po,mo=/^--/,vo=/\s*!important$/,go=function(e,t,n){if(mo.test(t))e.style.setProperty(t,n);else if(vo.test(n))e.style.setProperty(T(t),n.replace(vo,""),"important");else{var r=yo(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},_o=["Webkit","Moz","ms"],yo=w((function(e){if(po=po||document.createElement("div").style,e=C(e),"filter"!==e&&e in po)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<_o.length;n++){var r=_o[n]+t;if(r in po)return r}}));function bo(e,t){var n=t.data,o=e.data;if(!(r(n.staticStyle)&&r(n.style)&&r(o.staticStyle)&&r(o.style))){var s,a,c=t.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},h=u||l,d=ho(t.data.style)||{};t.data.normalizedStyle=i(d.__ob__)?R({},d):d;var f=fo(t,!0);for(a in h)r(f[a])&&go(c,a,"");for(a in f)s=f[a],s!==h[a]&&go(c,a,null==s?"":s)}}var wo={create:bo,update:bo},ko=/\s+/;function Co(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(ko).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Oo(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(ko).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function Io(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&R(t,To(e.name||"v")),R(t,e),t}return"string"===typeof e?To(e):void 0}}var To=w((function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}})),Eo=Q&&!te,So="transition",xo="animation",Ao="transition",Ro="transitionend",Po="animation",No="animationend";Eo&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Ao="WebkitTransition",Ro="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Po="WebkitAnimation",No="webkitAnimationEnd"));var jo=Q?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function Lo(e){jo((function(){jo(e)}))}function Do(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Co(e,t))}function Mo(e,t){e._transitionClasses&&_(e._transitionClasses,t),Oo(e,t)}function Fo(e,t,n){var r=$o(e,t),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===So?Ro:No,c=0,u=function(){e.removeEventListener(a,l),n()},l=function(t){t.target===e&&++c>=s&&u()};setTimeout((function(){c<s&&u()}),o+1),e.addEventListener(a,l)}var Uo=/\b(transform|all)(,|$)/;function $o(e,t){var n,r=window.getComputedStyle(e),i=(r[Ao+"Delay"]||"").split(", "),o=(r[Ao+"Duration"]||"").split(", "),s=qo(i,o),a=(r[Po+"Delay"]||"").split(", "),c=(r[Po+"Duration"]||"").split(", "),u=qo(a,c),l=0,h=0;t===So?s>0&&(n=So,l=s,h=o.length):t===xo?u>0&&(n=xo,l=u,h=c.length):(l=Math.max(s,u),n=l>0?s>u?So:xo:null,h=n?n===So?o.length:c.length:0);var d=n===So&&Uo.test(r[Ao+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function qo(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return Vo(t)+Vo(e[n])})))}function Vo(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function zo(e,t){var n=e.elm;i(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var o=Io(e.data.transition);if(!r(o)&&!i(n._enterCb)&&1===n.nodeType){var s=o.css,a=o.type,u=o.enterClass,l=o.enterToClass,h=o.enterActiveClass,d=o.appearClass,f=o.appearToClass,p=o.appearActiveClass,v=o.beforeEnter,g=o.enter,_=o.afterEnter,y=o.enterCancelled,b=o.beforeAppear,w=o.appear,k=o.afterAppear,C=o.appearCancelled,O=o.duration,I=Rn,T=Rn.$vnode;while(T&&T.parent)I=T.context,T=T.parent;var E=!I._isMounted||!e.isRootInsert;if(!E||w||""===w){var S=E&&d?d:u,x=E&&p?p:h,A=E&&f?f:l,R=E&&b||v,P=E&&"function"===typeof w?w:g,N=E&&k||_,j=E&&C||y,L=m(c(O)?O.enter:O);0;var D=!1!==s&&!te,M=Ho(P),U=n._enterCb=F((function(){D&&(Mo(n,A),Mo(n,x)),U.cancelled?(D&&Mo(n,S),j&&j(n)):N&&N(n),n._enterCb=null}));e.data.show||kt(e,"insert",(function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),P&&P(n,U)})),R&&R(n),D&&(Do(n,S),Do(n,x),Lo((function(){Mo(n,S),U.cancelled||(Do(n,A),M||(Wo(L)?setTimeout(U,L):Fo(n,a,U)))}))),e.data.show&&(t&&t(),P&&P(n,U)),D||M||U()}}}function Bo(e,t){var n=e.elm;i(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var o=Io(e.data.transition);if(r(o)||1!==n.nodeType)return t();if(!i(n._leaveCb)){var s=o.css,a=o.type,u=o.leaveClass,l=o.leaveToClass,h=o.leaveActiveClass,d=o.beforeLeave,f=o.leave,p=o.afterLeave,v=o.leaveCancelled,g=o.delayLeave,_=o.duration,y=!1!==s&&!te,b=Ho(f),w=m(c(_)?_.leave:_);0;var k=n._leaveCb=F((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),y&&(Mo(n,l),Mo(n,h)),k.cancelled?(y&&Mo(n,u),v&&v(n)):(t(),p&&p(n)),n._leaveCb=null}));g?g(C):C()}function C(){k.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),d&&d(n),y&&(Do(n,u),Do(n,h),Lo((function(){Mo(n,u),k.cancelled||(Do(n,l),b||(Wo(w)?setTimeout(k,w):Fo(n,a,k)))}))),f&&f(n,k),y||b||k())}}function Wo(e){return"number"===typeof e&&!isNaN(e)}function Ho(e){if(r(e))return!1;var t=e.fns;return i(t)?Ho(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function Go(e,t){!0!==t.data.show&&zo(t)}var Ko=Q?{create:Go,activate:Go,remove:function(e,t){!0!==e.data.show?Bo(e,t):t()}}:{},Yo=[Bi,Gi,ro,co,wo,Ko],Qo=Yo.concat($i),Jo=Pi({nodeOps:Oi,modules:Qo});te&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&os(e,"input")}));var Xo={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?kt(n,"postpatch",(function(){Xo.componentUpdated(e,t,n)})):Zo(e,t,n.context),e._vOptions=[].map.call(e.options,ns)):("textarea"===n.tag||li(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",rs),e.addEventListener("compositionend",is),e.addEventListener("change",is),te&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Zo(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,ns);if(i.some((function(e,t){return!D(e,r[t])}))){var o=e.multiple?t.value.some((function(e){return ts(e,i)})):t.value!==t.oldValue&&ts(t.value,i);o&&os(e,"change")}}}};function Zo(e,t,n){es(e,t,n),(ee||ne)&&setTimeout((function(){es(e,t,n)}),0)}function es(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=e.options.length;a<c;a++)if(s=e.options[a],i)o=M(r,ns(s))>-1,s.selected!==o&&(s.selected=o);else if(D(ns(s),r))return void(e.selectedIndex!==a&&(e.selectedIndex=a));i||(e.selectedIndex=-1)}}function ts(e,t){return t.every((function(t){return!D(t,e)}))}function ns(e){return"_value"in e?e._value:e.value}function rs(e){e.target.composing=!0}function is(e){e.target.composing&&(e.target.composing=!1,os(e.target,"input"))}function os(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function ss(e){return!e.componentInstance||e.data&&e.data.transition?e:ss(e.componentInstance._vnode)}var as={bind:function(e,t,n){var r=t.value;n=ss(n);var i=n.data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,zo(n,(function(){e.style.display=o}))):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value,i=t.oldValue;if(!r!==!i){n=ss(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?zo(n,(function(){e.style.display=e.__vOriginalDisplay})):Bo(n,(function(){e.style.display="none"}))):e.style.display=r?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},cs={model:Xo,show:as},us={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function ls(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?ls(On(t.children)):e}function hs(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[C(o)]=i[o];return t}function ds(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function fs(e){while(e=e.parent)if(e.data.transition)return!0}function ps(e,t){return t.key===e.key&&t.tag===e.tag}var ms=function(e){return e.tag||jt(e)},vs=function(e){return"show"===e.name},gs={name:"transition",props:us,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(ms),n.length)){0;var r=this.mode;0;var i=n[0];if(fs(this.$vnode))return i;var o=ls(i);if(!o)return i;if(this._leaving)return ds(e,i);var s="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?s+"comment":s+o.tag:a(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var c=(o.data||(o.data={})).transition=hs(this),u=this._vnode,l=ls(u);if(o.data.directives&&o.data.directives.some(vs)&&(o.data.show=!0),l&&l.data&&!ps(o,l)&&!jt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=R({},c);if("out-in"===r)return this._leaving=!0,kt(h,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),ds(e,i);if("in-out"===r){if(jt(o))return u;var d,f=function(){d()};kt(c,"afterEnter",f),kt(c,"enterCancelled",f),kt(h,"delayLeave",(function(e){d=e}))}}return i}}},_s=R({tag:String,moveClass:String},us);delete _s.mode;var ys={props:_s,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=Pn(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=hs(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=s;else;}if(r){for(var u=[],l=[],h=0;h<r.length;h++){var d=r[h];d.data.transition=s,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(bs),e.forEach(ws),e.forEach(ks),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,r=n.style;Do(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Ro,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Ro,e),n._moveCb=null,Mo(n,t))})}})))},methods:{hasMove:function(e,t){if(!Eo)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){Oo(n,e)})),Co(n,t),n.style.display="none",this.$el.appendChild(n);var r=$o(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function bs(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function ws(e){e.data.newPos=e.elm.getBoundingClientRect()}function ks(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}var Cs={Transition:gs,TransitionGroup:ys};Or.config.mustUseProp=qr,Or.config.isReservedTag=si,Or.config.isReservedAttr=Ur,Or.config.getTagNamespace=ai,Or.config.isUnknownElement=ui,R(Or.options.directives,cs),R(Or.options.components,Cs),Or.prototype.__patch__=Q?Jo:N,Or.prototype.$mount=function(e,t){return e=e&&Q?hi(e):void 0,Ln(this,e,t)},Q&&setTimeout((function(){V.devtools&&ue&&ue.emit("init",Or)}),0),t["a"]=Or}).call(this,n("c8ba"))},"2ba4":function(e,t){var n=Function.prototype,r=n.apply,i=n.bind,o=n.call;e.exports="object"==typeof Reflect&&Reflect.apply||(i?o.bind(r):function(){return o.apply(r,arguments)})},"2cf4":function(e,t,n){var r,i,o,s,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),h=n("1a2d"),d=n("d039"),f=n("1be4"),p=n("f36a"),m=n("cc12"),v=n("1cdc"),g=n("605d"),_=a.setImmediate,y=a.clearImmediate,b=a.process,w=a.Dispatch,k=a.Function,C=a.MessageChannel,O=a.String,I=0,T={},E="onreadystatechange";try{r=a.location}catch(P){}var S=function(e){if(h(T,e)){var t=T[e];delete T[e],t()}},x=function(e){return function(){S(e)}},A=function(e){S(e.data)},R=function(e){a.postMessage(O(e),r.protocol+"//"+r.host)};_&&y||(_=function(e){var t=p(arguments,1);return T[++I]=function(){c(l(e)?e:k(e),void 0,t)},i(I),I},y=function(e){delete T[e]},g?i=function(e){b.nextTick(x(e))}:w&&w.now?i=function(e){w.now(x(e))}:C&&!v?(o=new C,s=o.port2,o.port1.onmessage=A,i=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(R)?(i=R,a.addEventListener("message",A,!1)):i=E in m("script")?function(e){f.appendChild(m("script"))[E]=function(){f.removeChild(this),S(e)}}:function(e){setTimeout(x(e),0)}),e.exports={set:_,clear:y}},"2d00":function(e,t,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},"2f62":function(e,t,n){"use strict";(function(e){
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function r(e){var t=Number(e.version.split(".")[0]);if(t>=2)e.mixin({beforeCreate:r});else{var n=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[r].concat(e.init):r,n.call(this,e)}}function r(){var e=this.$options;e.store?this.$store="function"===typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}}n.d(t,"b",(function(){return N}));var i="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},o=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function s(e){o&&(e._devtoolHook=o,o.emit("vuex:init",e),o.on("vuex:travel-to-state",(function(t){e.replaceState(t)})),e.subscribe((function(e,t){o.emit("vuex:mutation",e,t)}),{prepend:!0}),e.subscribeAction((function(e,t){o.emit("vuex:action",e,t)}),{prepend:!0}))}function a(e,t){return e.filter(t)[0]}function c(e,t){if(void 0===t&&(t=[]),null===e||"object"!==typeof e)return e;var n=a(t,(function(t){return t.original===e}));if(n)return n.copy;var r=Array.isArray(e)?[]:{};return t.push({original:e,copy:r}),Object.keys(e).forEach((function(n){r[n]=c(e[n],t)})),r}function u(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function l(e){return null!==e&&"object"===typeof e}function h(e){return e&&"function"===typeof e.then}function d(e,t){return function(){return e(t)}}var f=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},f.prototype.addChild=function(e,t){this._children[e]=t},f.prototype.removeChild=function(e){delete this._children[e]},f.prototype.getChild=function(e){return this._children[e]},f.prototype.hasChild=function(e){return e in this._children},f.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},f.prototype.forEachChild=function(e){u(this._children,e)},f.prototype.forEachGetter=function(e){this._rawModule.getters&&u(this._rawModule.getters,e)},f.prototype.forEachAction=function(e){this._rawModule.actions&&u(this._rawModule.actions,e)},f.prototype.forEachMutation=function(e){this._rawModule.mutations&&u(this._rawModule.mutations,e)},Object.defineProperties(f.prototype,p);var m=function(e){this.register([],e,!1)};function v(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void 0;v(e.concat(r),t.getChild(r),n.modules[r])}}m.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},m.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},m.prototype.update=function(e){v([],this.root,e)},m.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var i=new f(t,n);if(0===e.length)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}t.modules&&u(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},m.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},m.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var g;var _=function(e){var t=this;void 0===e&&(e={}),!g&&"undefined"!==typeof window&&window.Vue&&P(window.Vue);var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new m(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new g,this._makeLocalGettersCache=Object.create(null);var i=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(e,t){return a.call(i,e,t)},this.commit=function(e,t,n){return c.call(i,e,t,n)},this.strict=r;var u=this._modules.root.state;C(this,u,[],this._modules.root),k(this,u),n.forEach((function(e){return e(t)}));var l=void 0!==e.devtools?e.devtools:g.config.devtools;l&&s(this)},y={state:{configurable:!0}};function b(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function w(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;C(e,n,[],e._modules.root,!0),k(e,n,t)}function k(e,t,n){var r=e._vm;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,o={};u(i,(function(t,n){o[n]=d(t,e),Object.defineProperty(e.getters,n,{get:function(){return e._vm[n]},enumerable:!0})}));var s=g.config.silent;g.config.silent=!0,e._vm=new g({data:{$$state:t},computed:o}),g.config.silent=s,e.strict&&x(e),r&&(n&&e._withCommit((function(){r._data.$$state=null})),g.nextTick((function(){return r.$destroy()})))}function C(e,t,n,r,i){var o=!n.length,s=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[s],e._modulesNamespaceMap[s]=r),!o&&!i){var a=A(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){g.set(a,c,r.state)}))}var u=r.context=O(e,s,n);r.forEachMutation((function(t,n){var r=s+n;T(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:s+n,i=t.handler||t;E(e,r,i,u)})),r.forEachGetter((function(t,n){var r=s+n;S(e,r,t,u)})),r.forEachChild((function(r,o){C(e,t,n.concat(o),r,i)}))}function O(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var o=R(n,r,i),s=o.payload,a=o.options,c=o.type;return a&&a.root||(c=t+c),e.dispatch(c,s)},commit:r?e.commit:function(n,r,i){var o=R(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=t+c),e.commit(c,s,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return I(e,t)}},state:{get:function(){return A(e.state,n)}}}),i}function I(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function T(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function E(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return h(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function S(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)})}function x(e){e._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function A(e,t){return t.reduce((function(e,t){return e[t]}),e)}function R(e,t,n){return l(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}function P(e){g&&e===g||(g=e,r(g))}y.state.get=function(){return this._vm._data.$$state},y.state.set=function(e){0},_.prototype.commit=function(e,t,n){var r=this,i=R(e,t,n),o=i.type,s=i.payload,a=(i.options,{type:o,payload:s}),c=this._mutations[o];c&&(this._withCommit((function(){c.forEach((function(e){e(s)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},_.prototype.dispatch=function(e,t){var n=this,r=R(e,t),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(s,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(e){return e(o)}))):a[0](o);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(s,n.state)}))}catch(u){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(s,n.state,e)}))}catch(u){0}t(e)}))}))}},_.prototype.subscribe=function(e,t){return b(e,this._subscribers,t)},_.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return b(n,this._actionSubscribers,t)},_.prototype.watch=function(e,t,n){var r=this;return this._watcherVM.$watch((function(){return e(r.state,r.getters)}),t,n)},_.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._vm._data.$$state=e}))},_.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),C(this,this.state,e,this._modules.get(e),n.preserveState),k(this,this.state)},_.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=A(t.state,e.slice(0,-1));g.delete(n,e[e.length-1])})),w(this)},_.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},_.prototype.hotUpdate=function(e){this._modules.update(e),w(this,!0)},_.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(_.prototype,y);var N=$((function(e,t){var n={};return F(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=q(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),j=$((function(e,t){var n={};return F(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var o=q(this.$store,"mapMutations",e);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),L=$((function(e,t){var n={};return F(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||q(this.$store,"mapGetters",e))return this.$store.getters[i]},n[r].vuex=!0})),n})),D=$((function(e,t){var n={};return F(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var o=q(this.$store,"mapActions",e);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),M=function(e){return{mapState:N.bind(null,e),mapGetters:L.bind(null,e),mapMutations:j.bind(null,e),mapActions:D.bind(null,e)}};function F(e){return U(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function U(e){return Array.isArray(e)||l(e)}function $(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function q(e,t,n){var r=e._modulesNamespaceMap[n];return r}function V(e){void 0===e&&(e={});var t=e.collapsed;void 0===t&&(t=!0);var n=e.filter;void 0===n&&(n=function(e,t,n){return!0});var r=e.transformer;void 0===r&&(r=function(e){return e});var i=e.mutationTransformer;void 0===i&&(i=function(e){return e});var o=e.actionFilter;void 0===o&&(o=function(e,t){return!0});var s=e.actionTransformer;void 0===s&&(s=function(e){return e});var a=e.logMutations;void 0===a&&(a=!0);var u=e.logActions;void 0===u&&(u=!0);var l=e.logger;return void 0===l&&(l=console),function(e){var h=c(e.state);"undefined"!==typeof l&&(a&&e.subscribe((function(e,o){var s=c(o);if(n(e,h,s)){var a=W(),u=i(e),d="mutation "+e.type+a;z(l,d,t),l.log("%c prev state","color: #9E9E9E; font-weight: bold",r(h)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",r(s)),B(l)}h=s})),u&&e.subscribeAction((function(e,n){if(o(e,n)){var r=W(),i=s(e),a="action "+e.type+r;z(l,a,t),l.log("%c action","color: #03A9F4; font-weight: bold",i),B(l)}})))}}function z(e,t,n){var r=n?e.groupCollapsed:e.group;try{r.call(e,t)}catch(i){e.log(t)}}function B(e){try{e.groupEnd()}catch(t){e.log("—— log end ——")}}function W(){var e=new Date;return" @ "+G(e.getHours(),2)+":"+G(e.getMinutes(),2)+":"+G(e.getSeconds(),2)+"."+G(e.getMilliseconds(),3)}function H(e,t){return new Array(t+1).join(e)}function G(e,t){return H("0",t-e.toString().length)+e}var K={Store:_,install:P,version:"3.6.2",mapState:N,mapMutations:j,mapGetters:L,mapActions:D,createNamespacedHelpers:M,createLogger:V};t["a"]=K}).call(this,n("c8ba"))},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"35a1":function(e,t,n){var r=n("f5df"),i=n("dc4a"),o=n("3f8c"),s=n("b622"),a=s("iterator");e.exports=function(e){if(void 0!=e)return i(e,a)||i(e,"@@iterator")||o[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),i=n("9bf2"),o=n("825a"),s=n("fc6a"),a=n("df75");e.exports=r?Object.defineProperties:function(e,t){o(e);var n,r=s(t),c=a(t),u=c.length,l=0;while(u>l)i.f(e,n=c[l++],r[n]);return e}},"3a9b":function(e,t,n){var r=n("e330");e.exports=r({}.isPrototypeOf)},"3bbe":function(e,t,n){var r=n("da84"),i=n("1626"),o=r.String,s=r.TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw s("Can't set "+o(e)+" as a prototype")}},"3c4e":function(e,t,n){"use strict";var r=function(e){return i(e)&&!o(e)};function i(e){return!!e&&"object"===typeof e}function o(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||c(e)}var s="function"===typeof Symbol&&Symbol.for,a=s?Symbol.for("react.element"):60103;function c(e){return e.$$typeof===a}function u(e){return Array.isArray(e)?[]:{}}function l(e,t){return!1!==t.clone&&t.isMergeableObject(e)?_(u(e),e,t):e}function h(e,t,n){return e.concat(t).map((function(e){return l(e,n)}))}function d(e,t){if(!t.customMerge)return _;var n=t.customMerge(e);return"function"===typeof n?n:_}function f(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}function p(e){return Object.keys(e).concat(f(e))}function m(e,t){try{return t in e}catch(n){return!1}}function v(e,t){return m(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function g(e,t,n){var r={};return n.isMergeableObject(e)&&p(e).forEach((function(t){r[t]=l(e[t],n)})),p(t).forEach((function(i){v(e,i)||(m(e,i)&&n.isMergeableObject(t[i])?r[i]=d(i,n)(e[i],t[i],n):r[i]=l(t[i],n))})),r}function _(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||h,n.isMergeableObject=n.isMergeableObject||r,n.cloneUnlessOtherwiseSpecified=l;var i=Array.isArray(t),o=Array.isArray(e),s=i===o;return s?i?n.arrayMerge(e,t,n):g(e,t,n):l(t,n)}_.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return _(e,n,t)}),{})};var y=_;e.exports=y},"3ca3":function(e,t,n){"use strict";var r=n("6547").charAt,i=n("577e"),o=n("69f3"),s=n("7dd0"),a="String Iterator",c=o.set,u=o.getterFor(a);s(String,"String",(function(e){c(this,{type:a,string:i(e),index:0})}),(function(){var e,t=u(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=r(n,i),t.index+=e.length,{value:e,done:!1})}))},"3f8c":function(e,t){e.exports={}},4082:function(e,t,n){n("a4d3");var r=n("f0e4");function i(e,t){if(null==e)return{};var n,i,o=r(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}e.exports=i,e.exports["default"]=e.exports,e.exports.__esModule=!0},"428f":function(e,t,n){var r=n("da84");e.exports=r},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,n){var r=n("da84"),i=n("e330"),o=n("d039"),s=n("c6b6"),a=r.Object,c=i("".split);e.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?c(e,""):a(e)}:a},"44d2":function(e,t,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),e.exports=function(e){a[s][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}},"44e7":function(e,t,n){var r=n("861d"),i=n("c6b6"),o=n("b622"),s=o("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==i(e))}},4840:function(e,t,n){var r=n("825a"),i=n("5087"),o=n("b622"),s=o("species");e.exports=function(e,t){var n,o=r(e).constructor;return void 0===o||void 0==(n=r(o)[s])?t:i(n)}},"485a":function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("1626"),s=n("861d"),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&o(n=e.toString)&&!s(r=i(n,e)))return r;if(o(n=e.valueOf)&&!s(r=i(n,e)))return r;if("string"!==t&&o(n=e.toString)&&!s(r=i(n,e)))return r;throw a("Can't convert object to primitive value")}},4930:function(e,t,n){var r=n("2d00"),i=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(e,t,n){var r=n("fc6a"),i=n("23cb"),o=n("07fa"),s=function(e){return function(t,n,s){var a,c=r(t),u=o(c),l=i(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),s=o("filter");r({target:"Array",proto:!0,forced:!s},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"4f60":function(e,t,n){"use strict";var r=n("7ded");n.d(t,"a",(function(){return r["a"]}));var i="firebase",o="9.4.1";
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
r["a"].registerVersion(i,o,"app-compat")},5087:function(e,t,n){var r=n("da84"),i=n("68ee"),o=n("0d51"),s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not a constructor")}},"50c4":function(e,t,n){var r=n("5926"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},"51b0":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return fa})),n.d(t,"b",(function(){return pa})),n.d(t,"c",(function(){return Un})),n.d(t,"d",(function(){return _a})),n.d(t,"e",(function(){return fc})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return fs})),n.d(t,"h",(function(){return ms})),n.d(t,"i",(function(){return ka})),n.d(t,"j",(function(){return gc})),n.d(t,"k",(function(){return bc})),n.d(t,"l",(function(){return qa})),n.d(t,"m",(function(){return za})),n.d(t,"n",(function(){return ac})),n.d(t,"o",(function(){return xa})),n.d(t,"p",(function(){return _c})),n.d(t,"q",(function(){return yc})),n.d(t,"r",(function(){return Oc})),n.d(t,"s",(function(){return Ya})),n.d(t,"t",(function(){return Ja})),n.d(t,"u",(function(){return Fa})),n.d(t,"v",(function(){return ja})),n.d(t,"w",(function(){return La})),n.d(t,"x",(function(){return Da})),n.d(t,"y",(function(){return Ma})),n.d(t,"z",(function(){return Na})),n.d(t,"A",(function(){return Za})),n.d(t,"B",(function(){return tc})),n.d(t,"C",(function(){return rc})),n.d(t,"D",(function(){return oc})),n.d(t,"E",(function(){return Ca})),n.d(t,"F",(function(){return cc})),n.d(t,"G",(function(){return ba})),n.d(t,"H",(function(){return wa})),n.d(t,"I",(function(){return Oa})),n.d(t,"J",(function(){return Tc})),n.d(t,"K",(function(){return Cc})),n.d(t,"L",(function(){return Ia})),n.d(t,"M",(function(){return Ta})),n.d(t,"N",(function(){return Ea})),n.d(t,"O",(function(){return Ga})),n.d(t,"P",(function(){return Wa})),n.d(t,"Q",(function(){return Sa}));var r=n("589b"),i=n("22e5"),o=n("1fd5"),s=n("e691");const a="@firebase/database",c="0.12.4";
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
let u="";function l(e){u=e}
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
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Object(o["L"])(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Object(o["E"])(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
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
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Object(o["j"])(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
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
 */const f=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},p=f("localStorage"),m=f("sessionStorage"),v=new s["b"]("@firebase/database"),g=function(){let e=1;return function(){return e++}}(),_=function(e){const t=Object(o["K"])(e),n=new o["d"];n.update(t);const r=n.digest();return o["g"].encodeByteArray(r)},y=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?t+=y.apply(null,r):t+="object"===typeof r?Object(o["L"])(r):r,t+=" "}return t};let b=null,w=!0;const k=function(e,t){Object(o["e"])(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(v.logLevel=s["a"].VERBOSE,b=v.log.bind(v),t&&m.set("logging_enabled",!0)):"function"===typeof e?b=e:(b=null,m.remove("logging_enabled"))},C=function(...e){if(!0===w&&(w=!1,null===b&&!0===m.get("logging_enabled")&&k(!0)),b){const t=y.apply(null,e);b(t)}},O=function(e){return function(...t){C(e,...t)}},I=function(...e){const t="FIREBASE INTERNAL ERROR: "+y(...e);v.error(t)},T=function(...e){const t="FIREBASE FATAL ERROR: "+y(...e);throw v.error(t),new Error(t)},E=function(...e){const t="FIREBASE WARNING: "+y(...e);v.warn(t)},S=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&E("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},x=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},A=function(e){if(Object(o["B"])()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},R="[MIN_NAME]",P="[MAX_NAME]",N=function(e,t){if(e===t)return 0;if(e===R||t===P)return-1;if(t===R||e===P)return 1;{const n=H(e),r=H(t);return null!==n?null!==r?n-r===0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},j=function(e,t){return e===t?0:e<t?-1:1},L=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Object(o["L"])(t))},D=function(e){if("object"!==typeof e||null===e)return Object(o["L"])(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=Object(o["L"])(t[r]),n+=":",n+=D(e[t[r]]);return n+="}",n},M=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function F(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const U=function(e){Object(o["e"])(!x(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,a,c,u;0===e?(s=0,a=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=c+r,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(s=0,a=Math.round(e/Math.pow(2,1-r-n))));const l=[];for(u=n;u;u-=1)l.push(a%2?1:0),a=Math.floor(a/2);for(u=t;u;u-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const h=l.join("");let d="";for(u=0;u<64;u+=8){let e=parseInt(h.substr(u,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},$=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},q=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function V(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const z=new RegExp("^-?(0*)\\d{1,10}$"),B=-2147483648,W=2147483647,H=function(e){if(z.test(e)){const t=Number(e);if(t>=B&&t<=W)return t}return null},G=function(e){try{e()}catch(t){setTimeout(()=>{const e=t.stack||"";throw E("Exception was thrown by user callback.",e),t},Math.floor(0))}},K=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
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
class Q{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){E(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
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
 */class J{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(C("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',E(e)}}class X{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}X.OWNER="owner";
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
const Z="5",ee="v",te="s",ne="r",re="f",ie=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,oe="ls",se="p",ae="ac",ce="websocket",ue="long_polling";
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
class le{constructor(e,t,n,r,i=!1,o="",s=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let r;if(Object(o["e"])("string"===typeof t,"typeof type must == string"),Object(o["e"])("object"===typeof n,"typeof params must == object"),t===ce)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ue)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const i=[];return F(n,(e,t)=>{i.push(e+"="+t)}),r+i.join("&")}
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
 */class fe{constructor(){this.counters_={}}incrementCounter(e,t=1){Object(o["j"])(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Object(o["m"])(this.counters_)}}
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
 */const pe={},me={};function ve(e){const t=e.toString();return pe[t]||(pe[t]=new fe),pe[t]}function ge(e,t){const n=e.toString();return me[n]||(me[n]=t()),me[n]}
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
 */class _e{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&G(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
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
 */const ye="start",be="close",we="pLPCommand",ke="pRTLPCB",Ce="id",Oe="pw",Ie="ser",Te="cb",Ee="seg",Se="ts",xe="d",Ae="dframe",Re=1870,Pe=30,Ne=Re-Pe,je=25e3,Le=3e4;class De{constructor(e,t,n,r,i,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=O(e),this.stats_=ve(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,ue,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new _e(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Le)),A(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Me((...e)=>{const[t,n,r,i,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ye)this.id=n,this.password=r;else{if(t!==be)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const e={};e[ye]="t",e[Ie]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Te]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Z,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[oe]=this.lastSessionId),this.applicationId&&(e[se]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(e[ne]=re);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){De.forceAllow_=!0}static forceDisallow(){De.forceDisallow_=!0}static isAvailable(){return!Object(o["B"])()&&(!!De.forceAllow_||!De.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!$()&&!q())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Object(o["L"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Object(o["i"])(t),r=M(n,Ne);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Object(o["B"])())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Ae]="t",n[Ce]=e,n[Oe]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Object(o["L"])(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Me{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(o["B"])())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=g(),window[we+this.uniqueCallbackIdentifier]=e,window[ke+this.uniqueCallbackIdentifier]=t,this.myIFrame=Me.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){C("frame writing exception"),i.stack&&C(i.stack),C(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||C("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ce]=this.myID,e[Oe]=this.myPW,e[Ie]=this.currentSerial;let t=this.urlFn(e),n="",r=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Pe+n.length<=Re))break;{const e=this.pendingSegs.shift();n=n+"&"+Ee+r+"="+e.seg+"&"+Se+r+"="+e.ts+"&"+xe+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(je)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){Object(o["B"])()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{C("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
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
 */const Fe=16384,Ue=45e3;let $e=null;"undefined"!==typeof MozWebSocket?$e=MozWebSocket:"undefined"!==typeof WebSocket&&($e=WebSocket);class qe{constructor(e,t,n,r,i,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=O(this.connId),this.stats_=ve(t),this.connURL=qe.connectionURL_(t,o,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r){const i={};return i[ee]=Z,!Object(o["B"])()&&"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(i[ne]=re),t&&(i[te]=t),n&&(i[oe]=n),r&&(i[ae]=r),de(e,ce,i)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{if(Object(o["B"])()){const t=this.nodeAdmin?"AdminNode":"Node",n={headers:{"User-Agent":`Firebase/${Z}/${u}/${e.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(n.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);const r=Object({NODE_ENV:"production",VUE_APP_FIREBASE_TOKEN:"AIzaSyB1CZlKBnTyZ2MAXtK8BWmwzVm1bYU4gJ8",BASE_URL:"/",NODE_ANALYTICS:"development"}),i=0===this.connURL.indexOf("wss://")?r["HTTPS_PROXY"]||r["https_proxy"]:r["HTTP_PROXY"]||r["http_proxy"];i&&(n["proxy"]={origin:i}),this.mySock=new $e(this.connURL,[],n)}else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new $e(this.connURL,[],e)}}catch(r){this.log_("Error instantiating WebSocket.");const e=r.message||r.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){qe.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==$e&&!qe.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Object(o["E"])(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Object(o["e"])(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Object(o["L"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=M(t,Fe);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ue))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qe.responsesRequiredToBeHealthy=2,qe.healthyTimeout=3e4;
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
class Ve{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[De,qe]}initTransports_(e){const t=qe&&qe["isAvailable"]();let n=t&&!qe.previouslyFailed();if(e.webSocketOnly&&(t||E("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[qe];else{const e=this.transports_=[];for(const t of Ve.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
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
 */const ze=6e4,Be=5e3,We=10240,He=102400,Ge="t",Ke="d",Ye="s",Qe="r",Je="e",Xe="o",Ze="a",et="n",tt="p",nt="h";class rt{constructor(e,t,n,r,i,o,s,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=O("c:"+this.id+":"),this.transportManager_=new Ve(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const r=e["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=Y(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>He?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>We?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ge in e){const t=e[Ge];t===Ze?this.upgradeIfSecondaryHealthy_():t===Qe?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Xe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=L("t",e),n=L("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=L("t",e),n=L("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=L(Ge,e);if(Ke in e){const n=e[Ke];if(t===nt)this.onHandshake_(n);else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ye?this.onConnectionShutdown_(n):t===Qe?this.onReset_(n):t===Je?I("Server Error: "+n):t===Xe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):I("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Z!==n&&E("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Y(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ze))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Be))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
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
 */class it{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
 */class ot{constructor(e){this.allowedEvents_=e,this.listeners_={},Object(o["e"])(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){Object(o["e"])(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
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
 */class st extends ot{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(o["z"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new st}getInitialEvent(e){return Object(o["e"])("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
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
 */const at=32,ct=768;class ut{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function lt(){return new ut("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function ft(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ut(e.pieces_,t)}function pt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function mt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function vt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function gt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ut(t,0)}function _t(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof ut)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ut(n,0)}function yt(e){return e.pieceNum_>=e.pieces_.length}function bt(e,t){const n=ht(e),r=ht(t);if(null===n)return t;if(n===r)return bt(ft(e),ft(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function wt(e,t){const n=vt(e,0),r=vt(t,0);for(let i=0;i<n.length&&i<r.length;i++){const e=N(n[i],r[i]);if(0!==e)return e}return n.length===r.length?0:n.length<r.length?-1:1}function kt(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Ct(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Ot{constructor(e,t){this.errorPrefix_=t,this.parts_=vt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Object(o["J"])(this.parts_[n]);Et(this)}}function It(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Object(o["J"])(t),Et(e)}function Tt(e){const t=e.parts_.pop();e.byteLength_-=Object(o["J"])(t),e.parts_.length>0&&(e.byteLength_-=1)}function Et(e){if(e.byteLength_>ct)throw new Error(e.errorPrefix_+"has a key path longer than "+ct+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+St(e))}function St(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */class xt extends ot{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new xt}getInitialEvent(e){return Object(o["e"])("visible"===e,"Unknown event type: "+e),[this.visible_]}}
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
 */const At=1e3,Rt=3e5,Pt=3e3,Nt=3e4,jt=1.3,Lt=3e4,Dt="server_kill",Mt=3;class Ft extends it{constructor(e,t,n,r,i,s,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Ft.nextPersistentConnectionId_++,this.log_=O("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=At,this.maxReconnectDelay_=Rt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Object(o["B"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&st.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(Object(o["L"])(i)),Object(o["e"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new o["a"],n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const r=e["d"];"ok"===e["s"]?(this.onDataUpdate_(n["p"],r,!1,null),t.resolve(r)):t.reject(r)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const e=this.outstandingGets_[i];void 0!==e&&r===e&&(delete this.outstandingGets_[i],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+i+" timed out on connection"),t.reject(new Error("Client is offline.")))},Pt),this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),Object(o["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(o["e"])(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},o="q";e.tag&&(i["q"]=t._queryObject,i["t"]=e.tag),i["h"]=e.hashFn(),this.sendRequest(o,i,i=>{const o=i["d"],s=i["s"];Ft.warnOnListenWarnings_(o,t);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===e&&(this.log_("listen response",i),"ok"!==s&&this.removeListen_(n,r),e.onComplete&&e.onComplete(s,o))})}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&Object(o["j"])(e,"w")){const n=Object(o["I"])(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();E(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||Object(o["t"])(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Nt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Object(o["D"])(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,t=>{const n=t["s"],r=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Object(o["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(o,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,e=>{r&&setTimeout(()=>{r(e["s"],e["d"])},Math.floor(0))})}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};void 0!==i&&(o["h"]=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Object(o["L"])(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):I("Unrecognized action received from server: "+Object(o["L"])(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Object(o["e"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Lt&&(this.reconnectDelay_=At),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Ft.nextConnectionId_++,i=this.lastSessionId;let s=!1,a=null;const c=function(){a?a.close():(s=!0,n())},u=function(e){Object(o["e"])(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:u};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?C("getToken() completed but was canceled"):(C("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=c&&c.token,a=new rt(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{E(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Dt)},i))}catch(I){this.log_("Failed to get token: "+I),s||(this.repoInfo_.nodeAdmin&&E(I),c())}}}interrupt(e){C("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){C("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Object(o["w"])(this.interruptReasons_)&&(this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>D(e)).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new ut(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){C("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mt&&(this.reconnectDelay_=Nt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){C("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Object(o["B"])()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+u.replace(/\./g,"-")]=1,Object(o["z"])()?e["framework.cordova"]=1:Object(o["C"])()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=st.getInstance().currentlyOnline();return Object(o["w"])(this.interruptReasons_)&&e}}Ft.nextPersistentConnectionId_=0,Ft.nextConnectionId_=0;
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
class Ut{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ut(e,t)}}
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
 */class $t{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Ut(R,e),r=new Ut(R,t);return 0!==this.compare(n,r)}minPost(){return Ut.MIN}}
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
 */let qt;class Vt extends $t{static get __EMPTY_NODE(){return qt}static set __EMPTY_NODE(e){qt=e}compare(e,t){return N(e.name,t.name)}isDefinedOn(e){throw Object(o["f"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ut.MIN}maxPost(){return new Ut(P,qt)}makePost(e,t){return Object(o["e"])("string"===typeof e,"KeyIndex indexValue must always be a string."),new Ut(e,qt)}toString(){return".key"}}const zt=new Vt;
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
 */class Bt{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;while(!e.isEmpty())if(e=e,o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Wt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Wt.RED,this.left=null!=r?r:Gt.EMPTY_NODE,this.right=null!=i?i:Gt.EMPTY_NODE}copy(e,t,n,r,i){return new Wt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Gt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Gt.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Wt.RED=!0,Wt.BLACK=!1;class Ht{copy(e,t,n,r,i){return this}insert(e,t,n){return new Wt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Gt{constructor(e,t=Gt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Gt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Wt.BLACK,null,null))}remove(e){return new Gt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Wt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Bt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Bt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Bt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Bt(this.root_,null,this.comparator_,!0,e)}}
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
function Kt(e,t){return N(e.name,t.name)}function Yt(e,t){return N(e,t)}
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
 */let Qt;function Jt(e){Qt=e}Gt.EMPTY_NODE=new Ht;const Xt=function(e){return"number"===typeof e?"number:"+U(e):"string:"+e},Zt=function(e){if(e.isLeafNode()){const t=e.val();Object(o["e"])("string"===typeof t||"number"===typeof t||"object"===typeof t&&Object(o["j"])(t,".sv"),"Priority must be a string or number.")}else Object(o["e"])(e===Qt||e.isEmpty(),"priority of unexpected type.");Object(o["e"])(e===Qt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let en,tn,nn;class rn{constructor(e,t=rn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Object(o["e"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Zt(this.priorityNode_)}static set __childrenNodeConstructor(e){en=e}static get __childrenNodeConstructor(){return en}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new rn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return yt(e)?this:".priority"===ht(e)?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:rn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Object(o["e"])(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,rn.__childrenNodeConstructor.EMPTY_NODE.updateChild(ft(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?U(this.value_):this.value_,this.lazyHash_=_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===rn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof rn.__childrenNodeConstructor?-1:(Object(o["e"])(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=rn.VALUE_TYPE_ORDER.indexOf(t),i=rn.VALUE_TYPE_ORDER.indexOf(n);return Object(o["e"])(r>=0,"Unknown leaf type: "+t),Object(o["e"])(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function on(e){tn=e}function sn(e){nn=e}rn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class an extends $t{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?N(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ut.MIN}maxPost(){return new Ut(P,new rn("[PRIORITY-POST]",nn))}makePost(e,t){const n=tn(e);return new Ut(t,new rn("[PRIORITY-POST]",n))}toString(){return".priority"}}const cn=new an,un=Math.log(2);
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
 */class ln{constructor(e){const t=e=>parseInt(Math.log(e)/un,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hn=function(e,t,n,r){e.sort(t);const i=function(t,r){const o=r-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new Wt(a,s.node,Wt.BLACK,null,null);{const c=parseInt(o/2,10)+t,u=i(t,c),l=i(c+1,r);return s=e[c],a=n?n(s):s,new Wt(a,s.node,Wt.BLACK,u,l)}},o=function(t){let r=null,o=null,s=e.length;const a=function(t,r){const o=s-t,a=s;s-=t;const u=i(o+1,a),l=e[o],h=n?n(l):l;c(new Wt(h,l.node,r,null,u))},c=function(e){r?(r.left=e,r=e):(o=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Wt.BLACK):(a(r,Wt.BLACK),a(r,Wt.RED))}return o},s=new ln(e.length),a=o(s);return new Gt(r||t,a)};
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
 */let dn;const fn={};class pn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Object(o["e"])(fn&&cn,"ChildrenNode.ts has not been loaded"),dn=dn||new pn({".priority":fn},{".priority":cn}),dn}get(e){const t=Object(o["I"])(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Gt?t:null}hasIndex(e){return Object(o["j"])(this.indexSet_,e.toString())}addIndex(e,t){Object(o["e"])(e!==zt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Ut.Wrap);let s,a=i.getNext();while(a)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();s=r?hn(n,e.getCompare()):fn;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const l=Object.assign({},this.indexes_);return l[c]=s,new pn(l,u)}addToIndexes(e,t){const n=Object(o["F"])(this.indexes_,(n,r)=>{const i=Object(o["I"])(this.indexSet_,r);if(Object(o["e"])(i,"Missing index implementation for "+r),n===fn){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Ut.Wrap);let o=r.getNext();while(o)o.name!==e.name&&n.push(o),o=r.getNext();return n.push(e),hn(n,i.getCompare())}return fn}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Ut(e.name,r))),i.insert(e,e.node)}});return new pn(n,this.indexSet_)}removeFromIndexes(e,t){const n=Object(o["F"])(this.indexes_,n=>{if(n===fn)return n;{const r=t.get(e.name);return r?n.remove(new Ut(e.name,r)):n}});return new pn(n,this.indexSet_)}}
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
 */let mn;class vn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Zt(this.priorityNode_),this.children_.isEmpty()&&Object(o["e"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return mn||(mn=new vn(new Gt(Yt),null,pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mn}updatePriority(e){return this.children_.isEmpty()?this:new vn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?mn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(ft(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Object(o["e"])(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Ut(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?mn:this.priorityNode_;return new vn(r,o,i)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{Object(o["e"])(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(ft(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(cn,(o,s)=>{t[o]=s.val(e),n++,i&&vn.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xt(this.getPriority().val())+":"),this.forEachChild(cn,(t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)}),this.lazyHash_=""===e?"":_(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Ut(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ut(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ut(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{const n=this.children_.getIteratorFrom(e.name,Ut.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{const n=this.children_.getReverseIteratorFrom(e.name,Ut.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)>0)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_n?-1:0}withIndex(e){if(e===zt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new vn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===zt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(cn),n=t.getIterator(cn);let r=e.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===zt?null:this.indexMap_.get(e.toString())}}vn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gn extends vn{constructor(){super(new Gt(Yt),vn.EMPTY_NODE,pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return vn.EMPTY_NODE}isEmpty(){return!1}}const _n=new gn;Object.defineProperties(Ut,{MIN:{value:new Ut(R,vn.EMPTY_NODE)},MAX:{value:new Ut(P,_n)}}),Vt.__EMPTY_NODE=vn.EMPTY_NODE,rn.__childrenNodeConstructor=vn,Jt(_n),sn(_n);
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
const yn=!0;function bn(e,t=null){if(null===e)return vn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),Object(o["e"])(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new rn(n,bn(t))}if(e instanceof Array||!yn){let n=vn.EMPTY_NODE;return F(e,(t,r)=>{if(Object(o["j"])(e,t)&&"."!==t.substring(0,1)){const e=bn(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}}),n.updatePriority(bn(t))}{const n=[];let r=!1;const i=e;if(F(i,(e,t)=>{if("."!==e.substring(0,1)){const i=bn(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Ut(e,i)))}}),0===n.length)return vn.EMPTY_NODE;const o=hn(n,Kt,e=>e.name,Yt);if(r){const e=hn(n,cn.getCompare());return new vn(o,bn(t),new pn({".priority":e},{".priority":cn}))}return new vn(o,bn(t),pn.Default)}}on(bn);
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
class wn extends $t{constructor(e){super(),this.indexPath_=e,Object(o["e"])(!yt(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?N(e.name,t.name):i}makePost(e,t){const n=bn(e),r=vn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ut(t,r)}maxPost(){const e=vn.EMPTY_NODE.updateChild(this.indexPath_,_n);return new Ut(P,e)}toString(){return vt(this.indexPath_,0).join("/")}}
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
 */class kn extends $t{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?N(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ut.MIN}maxPost(){return Ut.MAX}makePost(e,t){const n=bn(e);return new Ut(t,n)}toString(){return".value"}}const Cn=new kn,On="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",In="-",Tn="z",En=786,Sn=function(){let e=0;const t=[];return function(n){const r=n===e;let i;e=n;const s=new Array(8);for(i=7;i>=0;i--)s[i]=On.charAt(n%64),n=Math.floor(n/64);Object(o["e"])(0===n,"Cannot push at time == 0");let a=s.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)a+=On.charAt(t[i]);return Object(o["e"])(20===a.length,"nextPushId: Length should be 20."),a}}(),xn=function(e){if(e===""+W)return In;const t=H(e);if(null!=t)return""+(t+1);const n=new Array(e.length);for(let s=0;s<n.length;s++)n[s]=e.charAt(s);if(n.length<En)return n.push(In),n.join("");let r=n.length-1;while(r>=0&&n[r]===Tn)r--;if(-1===r)return P;const i=n[r],o=On.charAt(On.indexOf(i)+1);return n[r]=o,n.slice(0,r+1).join("")},An=function(e){if(e===""+B)return R;const t=H(e);if(null!=t)return""+(t-1);const n=new Array(e.length);for(let r=0;r<n.length;r++)n[r]=e.charAt(r);return n[n.length-1]===In?1===n.length?""+W:(delete n[n.length-1],n.join("")):(n[n.length-1]=On.charAt(On.indexOf(n[n.length-1])-1),n.join("")+Tn.repeat(En-n.length))};
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
function Rn(e){return{type:"value",snapshotNode:e}}function Pn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Nn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function jn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Ln(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
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
 */class Dn{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){Object(o["e"])(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Nn(t,a)):Object(o["e"])(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(Pn(t,n)):s.trackChildChange(jn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(cn,(e,r)=>{t.hasChild(e)||n.trackChildChange(Nn(e,r))}),t.isLeafNode()||t.forEachChild(cn,(t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(jn(t,r,i))}else n.trackChildChange(Pn(t,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?vn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
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
 */class Mn{constructor(e){this.indexedFilter_=new Dn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Mn.getStartPost_(e),this.endPost_=Mn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,o){return this.matches(new Ut(t,n))||(n=vn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=vn.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(vn.EMPTY_NODE);const i=this;return t.forEachChild(cn,(e,t)=>{i.matches(new Ut(e,t))||(r=r.updateImmediateChild(e,vn.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
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
 */class Fn{constructor(e){this.rangedFilter_=new Mn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,o){return this.rangedFilter_.matches(new Ut(t,n))||(n=vn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=vn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=vn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,o;if(r=t.withIndex(this.index_),r=r.updatePriority(vn.EMPTY_NODE),this.reverse_){o=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else o=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let s=0,a=!1;while(o.hasNext()){const t=o.getNext();!a&&i(e,t)<=0&&(a=!0);const c=a&&s<this.limit_&&i(t,n)<=0;c?s++:r=r.updateImmediateChild(t.name,vn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const a=e;Object(o["e"])(a.numChildren()===this.limit_,"");const c=new Ut(t,n),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),l=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let o=r.getChildAfterChild(this.index_,u,this.reverse_);while(null!=o&&(o.name===t||a.hasChild(o.name)))o=r.getChildAfterChild(this.index_,o,this.reverse_);const h=null==o?1:s(o,c),d=l&&!n.isEmpty()&&h>=0;if(d)return null!=i&&i.trackChildChange(jn(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(Nn(t,e));const n=a.updateImmediateChild(t,vn.EMPTY_NODE),r=null!=o&&this.rangedFilter_.matches(o);return r?(null!=i&&i.trackChildChange(Pn(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?e:l&&s(u,c)>=0?(null!=i&&(i.trackChildChange(Nn(u.name,u.node)),i.trackChildChange(Pn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(u.name,vn.EMPTY_NODE)):e}}
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
 */class Un{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=cn}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(o["e"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(o["e"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:R}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(o["e"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(o["e"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:P}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(o["e"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===cn}copy(){const e=new Un;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $n(e){return e.loadsAllData()?new Dn(e.getIndex()):e.hasLimit()?new Fn(e):new Mn(e)}function qn(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}function Vn(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}function zn(e,t,n){const r=e.copy();return r.startSet_=!0,void 0===t&&(t=null),r.indexStartValue_=t,null!=n?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function Bn(e,t,n){let r;if(e.index_===zt)"string"===typeof t&&(t=xn(t)),r=zn(e,t,n);else{let i;i=null==n?P:xn(n),r=zn(e,t,i)}return r.startAfterSet_=!0,r}function Wn(e,t,n){const r=e.copy();return r.endSet_=!0,void 0===t&&(t=null),r.indexEndValue_=t,void 0!==n?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function Hn(e,t,n){let r,i;return e.index_===zt?("string"===typeof t&&(t=An(t)),i=Wn(e,t,n)):(r=null==n?R:An(n),i=Wn(e,t,r)),i.endBeforeSet_=!0,i}function Gn(e,t){const n=e.copy();return n.index_=t,n}function Kn(e){const t={};if(e.isDefault())return t;let n;return e.index_===cn?n="$priority":e.index_===Cn?n="$value":e.index_===zt?n="$key":(Object(o["e"])(e.index_ instanceof wn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=Object(o["L"])(n),e.startSet_&&(t["startAt"]=Object(o["L"])(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+Object(o["L"])(e.indexStartName_))),e.endSet_&&(t["endAt"]=Object(o["L"])(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+Object(o["L"])(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Yn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==cn&&(t["i"]=e.index_.toString()),t}
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
 */class Qn extends it{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=O("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Object(o["e"])(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=Qn.getListenId_(e,n),a={};this.listens_[s]=a;const c=Kn(e._queryParams);this.restRequest_(i+".json",c,(e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(i,c,!1,n),Object(o["I"])(this.listens_,s)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}})}unlisten(e,t){const n=Qn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Kn(e._queryParams),n=e._path.toString(),r=new o["a"];return this.restRequest_(n+".json",t,(e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t["auth"]=r.accessToken),i&&i.token&&(t["ac"]=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Object(o["G"])(t);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=Object(o["E"])(a.responseText)}catch(e){E("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&E("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status);n=null}},a.open("GET",s,!0),a.send()})}}
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
 */class Jn{constructor(){this.rootNode_=vn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
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
 */function Xn(){return{value:null,children:new Map}}function Zn(e,t,n){if(yt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=ht(t);e.children.has(r)||e.children.set(r,Xn());const i=e.children.get(r);t=ft(t),Zn(i,t,n)}}function er(e,t){if(yt(t))return e.value=null,e.children.clear(),!0;if(null!==e.value){if(e.value.isLeafNode())return!1;{const n=e.value;return e.value=null,n.forEachChild(cn,(t,n)=>{Zn(e,new ut(t),n)}),er(e,t)}}if(e.children.size>0){const n=ht(t);if(t=ft(t),e.children.has(n)){const r=er(e.children.get(n),t);r&&e.children.delete(n)}return 0===e.children.size}return!0}function tr(e,t,n){null!==e.value?n(t,e.value):nr(e,(e,r)=>{const i=new ut(t.toString()+"/"+e);tr(r,i,n)})}function nr(e,t){e.children.forEach((e,n)=>{t(n,e)})}
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
 */class rr{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&F(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}
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
 */const ir=1e4,or=3e4,sr=3e5;class ar{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new rr(e);const n=ir+(or-ir)*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;F(e,(e,r)=>{r>0&&Object(o["j"])(this.statsToReport_,e)&&(t[e]=r,n=!0)}),n&&this.server_.reportStats(t),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*sr))}}
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
 */var cr;function ur(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function lr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hr(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(cr||(cr={}));class dr{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=cr.ACK_USER_WRITE,this.source=ur()}operationForChild(e){if(yt(this.path)){if(null!=this.affectedTree.value)return Object(o["e"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ut(e));return new dr(lt(),t,this.revert)}}return Object(o["e"])(ht(this.path)===e,"operationForChild called for unrelated child."),new dr(ft(this.path),this.affectedTree,this.revert)}}
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
 */class fr{constructor(e,t){this.source=e,this.path=t,this.type=cr.LISTEN_COMPLETE}operationForChild(e){return yt(this.path)?new fr(this.source,lt()):new fr(this.source,ft(this.path))}}
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
 */class pr{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=cr.OVERWRITE}operationForChild(e){return yt(this.path)?new pr(this.source,lt(),this.snap.getImmediateChild(e)):new pr(this.source,ft(this.path),this.snap)}}
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
 */class mr{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=cr.MERGE}operationForChild(e){if(yt(this.path)){const t=this.children.subtree(new ut(e));return t.isEmpty()?null:t.value?new pr(this.source,lt(),t.value):new mr(this.source,lt(),t)}return Object(o["e"])(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new mr(this.source,ft(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
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
 */class vr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(yt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
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
 */class gr{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function _r(e,t,n,r){const i=[],o=[];return t.forEach(t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(Ln(t.childName,t.snapshotNode))}),yr(e,i,"child_removed",t,r,n),yr(e,i,"child_added",t,r,n),yr(e,i,"child_moved",o,r,n),yr(e,i,"child_changed",t,r,n),yr(e,i,"value",t,r,n),i}function yr(e,t,n,r,i,o){const s=r.filter(e=>e.type===n);s.sort((t,n)=>wr(e,t,n)),s.forEach(n=>{const r=br(e,n,o);i.forEach(i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))})})}function br(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function wr(e,t,n){if(null==t.childName||null==n.childName)throw Object(o["f"])("Should only compare child_ events.");const r=new Ut(t.childName,t.snapshotNode),i=new Ut(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
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
 */function kr(e,t){return{eventCache:e,serverCache:t}}function Cr(e,t,n,r){return kr(new vr(t,n,r),e.serverCache)}function Or(e,t,n,r){return kr(e.eventCache,new vr(t,n,r))}function Ir(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Tr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */let Er;const Sr=()=>(Er||(Er=new Gt(j)),Er);class xr{constructor(e,t=Sr()){this.value=e,this.children=t}static fromObject(e){let t=new xr(null);return F(e,(e,n)=>{t=t.set(new ut(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:lt(),value:this.value};if(yt(e))return null;{const n=ht(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(ft(e),t);if(null!=i){const e=_t(new ut(n),i.path);return{path:e,value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(yt(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(ft(e)):new xr(null)}}set(e,t){if(yt(e))return new xr(t,this.children);{const n=ht(e),r=this.children.get(n)||new xr(null),i=r.set(ft(e),t),o=this.children.insert(n,i);return new xr(this.value,o)}}remove(e){if(yt(e))return this.children.isEmpty()?new xr(null):new xr(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const r=n.remove(ft(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new xr(null):new xr(this.value,i)}return this}}get(e){if(yt(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(ft(e)):null}}setTree(e,t){if(yt(e))return t;{const n=ht(e),r=this.children.get(n)||new xr(null),i=r.setTree(ft(e),t);let o;return o=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new xr(this.value,o)}}fold(e){return this.fold_(lt(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(_t(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,lt(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(yt(e))return null;{const r=ht(e),i=this.children.get(r);return i?i.findOnPath_(ft(e),_t(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,lt(),t)}foreachOnPath_(e,t,n){if(yt(e))return this;{this.value&&n(t,this.value);const r=ht(e),i=this.children.get(r);return i?i.foreachOnPath_(ft(e),_t(t,r),n):new xr(null)}}foreach(e){this.foreach_(lt(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(_t(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}
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
 */class Ar{constructor(e){this.writeTree_=e}static empty(){return new Ar(new xr(null))}}function Rr(e,t,n){if(yt(t))return new Ar(new xr(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let o=r.value;const s=bt(i,t);return o=o.updateChild(s,n),new Ar(e.writeTree_.set(i,o))}{const r=new xr(n),i=e.writeTree_.setTree(t,r);return new Ar(i)}}}function Pr(e,t,n){let r=e;return F(n,(e,n)=>{r=Rr(r,_t(t,e),n)}),r}function Nr(e,t){if(yt(t))return Ar.empty();{const n=e.writeTree_.setTree(t,new xr(null));return new Ar(n)}}function jr(e,t){return null!=Lr(e,t)}function Lr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(bt(n.path,t)):null}function Dr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(cn,(e,n)=>{t.push(new Ut(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new Ut(e,n.value))}),t}function Mr(e,t){if(yt(t))return e;{const n=Lr(e,t);return new Ar(null!=n?new xr(n):e.writeTree_.subtree(t))}}function Fr(e){return e.writeTree_.isEmpty()}function Ur(e,t){return $r(lt(),e.writeTree_,t)}function $r(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((t,i)=>{".priority"===t?(Object(o["e"])(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=$r(_t(e,t),i,n)}),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(_t(e,".priority"),r)),n}}
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
 */function qr(e,t){return li(t,e)}function Vr(e,t,n,r,i){Object(o["e"])(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Rr(e.visibleWrites,t,n)),e.lastWriteId=r}function zr(e,t,n,r){Object(o["e"])(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=Pr(e.visibleWrites,t,n),e.lastWriteId=r}function Br(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function Wr(e,t){const n=e.allWrites.findIndex(e=>e.writeId===t);Object(o["e"])(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,a=e.allWrites.length-1;while(i&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Hr(t,r.path)?i=!1:Ct(r.path,t.path)&&(s=!0)),a--}if(i){if(s)return Gr(e),!0;if(r.snap)e.visibleWrites=Nr(e.visibleWrites,r.path);else{const t=r.children;F(t,t=>{e.visibleWrites=Nr(e.visibleWrites,_t(r.path,t))})}return!0}return!1}function Hr(e,t){if(e.snap)return Ct(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ct(_t(e.path,n),t))return!0;return!1}function Gr(e){e.visibleWrites=Yr(e.allWrites,Kr,lt()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Kr(e){return e.visible}function Yr(e,t,n){let r=Ar.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)Ct(n,e)?(t=bt(n,e),r=Rr(r,t,s.snap)):Ct(e,n)&&(t=bt(e,n),r=Rr(r,lt(),s.snap.getChild(t)));else{if(!s.children)throw Object(o["f"])("WriteRecord should have .snap or .children");if(Ct(n,e))t=bt(n,e),r=Pr(r,t,s.children);else if(Ct(e,n))if(t=bt(e,n),yt(t))r=Pr(r,lt(),s.children);else{const e=Object(o["I"])(s.children,ht(t));if(e){const n=e.getChild(ft(t));r=Rr(r,lt(),n)}}}}}return r}function Qr(e,t,n,r,i){if(r||i){const o=Mr(e.visibleWrites,t);if(!i&&Fr(o))return n;if(i||null!=n||jr(o,lt())){const o=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Ct(e.path,t)||Ct(t,e.path))},s=Yr(e.allWrites,o,t),a=n||vn.EMPTY_NODE;return Ur(s,a)}return null}{const r=Lr(e.visibleWrites,t);if(null!=r)return r;{const r=Mr(e.visibleWrites,t);if(Fr(r))return n;if(null!=n||jr(r,lt())){const e=n||vn.EMPTY_NODE;return Ur(r,e)}return null}}}function Jr(e,t,n){let r=vn.EMPTY_NODE;const i=Lr(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(cn,(e,t)=>{r=r.updateImmediateChild(e,t)}),r;if(n){const i=Mr(e.visibleWrites,t);return n.forEachChild(cn,(e,t)=>{const n=Ur(Mr(i,new ut(e)),t);r=r.updateImmediateChild(e,n)}),Dr(i).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}{const n=Mr(e.visibleWrites,t);return Dr(n).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}}function Xr(e,t,n,r,i){Object(o["e"])(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=_t(t,n);if(jr(e.visibleWrites,s))return null;{const t=Mr(e.visibleWrites,s);return Fr(t)?i.getChild(n):Ur(t,i.getChild(n))}}function Zr(e,t,n,r){const i=_t(t,n),o=Lr(e.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n)){const t=Mr(e.visibleWrites,i);return Ur(t,r.getNode().getImmediateChild(n))}return null}function ei(e,t){return Lr(e.visibleWrites,t)}function ti(e,t,n,r,i,o,s){let a;const c=Mr(e.visibleWrites,t),u=Lr(c,lt());if(null!=u)a=u;else{if(null==n)return[];a=Ur(c,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let c=n.getNext();while(c&&e.length<i)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}function ni(){return{visibleWrites:Ar.empty(),allWrites:[],lastWriteId:-1}}function ri(e,t,n,r){return Qr(e.writeTree,e.treePath,t,n,r)}function ii(e,t){return Jr(e.writeTree,e.treePath,t)}function oi(e,t,n,r){return Xr(e.writeTree,e.treePath,t,n,r)}function si(e,t){return ei(e.writeTree,_t(e.treePath,t))}function ai(e,t,n,r,i,o){return ti(e.writeTree,e.treePath,t,n,r,i,o)}function ci(e,t,n){return Zr(e.writeTree,e.treePath,t,n)}function ui(e,t){return li(_t(e.treePath,t),e.writeTree)}function li(e,t){return{treePath:e,writeTree:t}}
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
 */class hi{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Object(o["e"])("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Object(o["e"])(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,jn(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Nn(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Pn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw Object(o["f"])("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,jn(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
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
 */class di{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const fi=new di;class pi{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new vr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ci(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Tr(this.viewCache_),i=ai(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
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
 */function mi(e){return{filter:e}}function vi(e,t){Object(o["e"])(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),Object(o["e"])(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function gi(e,t,n,r,i){const s=new hi;let a,c;if(n.type===cr.OVERWRITE){const u=n;u.source.fromUser?a=wi(e,t,u.path,u.snap,r,i,s):(Object(o["e"])(u.source.fromServer,"Unknown source."),c=u.source.tagged||t.serverCache.isFiltered()&&!yt(u.path),a=bi(e,t,u.path,u.snap,r,i,c,s))}else if(n.type===cr.MERGE){const u=n;u.source.fromUser?a=Ci(e,t,u.path,u.children,r,i,s):(Object(o["e"])(u.source.fromServer,"Unknown source."),c=u.source.tagged||t.serverCache.isFiltered(),a=Ii(e,t,u.path,u.children,r,i,c,s))}else if(n.type===cr.ACK_USER_WRITE){const o=n;a=o.revert?Si(e,t,o.path,r,i,s):Ti(e,t,o.path,o.affectedTree,r,i,s)}else{if(n.type!==cr.LISTEN_COMPLETE)throw Object(o["f"])("Unknown operation type: "+n.type);a=Ei(e,t,n.path,r,s)}const u=s.getChanges();return _i(t,a,u),{viewCache:a,changes:u}}function _i(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=Ir(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(Rn(Ir(t)))}}function yi(e,t,n,r,i,s){const a=t.eventCache;if(null!=si(r,n))return t;{let c,u;if(yt(n))if(Object(o["e"])(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Tr(t),i=n instanceof vn?n:vn.EMPTY_NODE,o=ii(r,i);c=e.filter.updateFullNode(t.eventCache.getNode(),o,s)}else{const n=ri(r,Tr(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const l=ht(n);if(".priority"===l){Object(o["e"])(1===dt(n),"Can't have a priority with additional path components");const i=a.getNode();u=t.serverCache.getNode();const s=oi(r,n,i,u);c=null!=s?e.filter.updatePriority(i,s):a.getNode()}else{const o=ft(n);let h;if(a.isCompleteForChild(l)){u=t.serverCache.getNode();const e=oi(r,n,a.getNode(),u);h=null!=e?a.getNode().getImmediateChild(l).updateChild(o,e):a.getNode().getImmediateChild(l)}else h=ci(r,l,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),l,h,o,i,s):a.getNode()}}return Cr(t,c,a.isFullyInitialized()||yt(n),e.filter.filtersNodes())}}function bi(e,t,n,r,i,o,s,a){const c=t.serverCache;let u;const l=s?e.filter:e.filter.getIndexedFilter();if(yt(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),e,null)}else{const e=ht(n);if(!c.isCompleteForPath(n)&&dt(n)>1)return t;const i=ft(n),o=c.getNode().getImmediateChild(e),s=o.updateChild(i,r);u=".priority"===e?l.updatePriority(c.getNode(),s):l.updateChild(c.getNode(),e,s,i,fi,null)}const h=Or(t,u,c.isFullyInitialized()||yt(n),l.filtersNodes()),d=new pi(i,h,o);return yi(e,h,n,i,d,a)}function wi(e,t,n,r,i,o,s){const a=t.eventCache;let c,u;const l=new pi(i,t,o);if(yt(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,s),c=Cr(t,u,!0,e.filter.filtersNodes());else{const i=ht(n);if(".priority"===i)u=e.filter.updatePriority(t.eventCache.getNode(),r),c=Cr(t,u,a.isFullyInitialized(),a.isFiltered());else{const o=ft(n),u=a.getNode().getImmediateChild(i);let h;if(yt(o))h=r;else{const e=l.getCompleteChild(i);h=null!=e?".priority"===pt(o)&&e.getChild(gt(o)).isEmpty()?e:e.updateChild(o,r):vn.EMPTY_NODE}if(u.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),i,h,o,l,s);c=Cr(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function ki(e,t){return e.eventCache.isCompleteForChild(t)}function Ci(e,t,n,r,i,o,s){let a=t;return r.foreach((r,c)=>{const u=_t(n,r);ki(t,ht(u))&&(a=wi(e,a,u,c,i,o,s))}),r.foreach((r,c)=>{const u=_t(n,r);ki(t,ht(u))||(a=wi(e,a,u,c,i,o,s))}),a}function Oi(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function Ii(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,u=t;c=yt(n)?r:new xr(null).setTree(n,r);const l=t.serverCache.getNode();return c.children.inorderTraversal((n,r)=>{if(l.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),l=Oi(e,c,r);u=bi(e,u,new ut(n),l,i,o,s,a)}}),c.children.inorderTraversal((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!l.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),l=Oi(e,c,r);u=bi(e,u,new ut(n),l,i,o,s,a)}}),u}function Ti(e,t,n,r,i,o,s){if(null!=si(i,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(yt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return bi(e,t,n,c.getNode().getChild(n),i,o,a,s);if(yt(n)){let r=new xr(null);return c.getNode().forEachChild(zt,(e,t)=>{r=r.set(new ut(e),t)}),Ii(e,t,n,r,i,o,a,s)}return t}{let u=new xr(null);return r.foreach((e,t)=>{const r=_t(n,e);c.isCompleteForPath(r)&&(u=u.set(e,c.getNode().getChild(r)))}),Ii(e,t,n,u,i,o,a,s)}}function Ei(e,t,n,r,i){const o=t.serverCache,s=Or(t,o.getNode(),o.isFullyInitialized()||yt(n),o.isFiltered());return yi(e,s,n,r,fi,i)}function Si(e,t,n,r,i,s){let a;if(null!=si(r,n))return t;{const c=new pi(r,t,i),u=t.eventCache.getNode();let l;if(yt(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=ri(r,Tr(t));else{const e=t.serverCache.getNode();Object(o["e"])(e instanceof vn,"serverChildren would be complete if leaf node"),n=ii(r,e)}n=n,l=e.filter.updateFullNode(u,n,s)}else{const i=ht(n);let o=ci(r,i,t.serverCache);null==o&&t.serverCache.isCompleteForChild(i)&&(o=u.getImmediateChild(i)),l=null!=o?e.filter.updateChild(u,i,o,ft(n),c,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(u,i,vn.EMPTY_NODE,ft(n),c,s):u,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=ri(r,Tr(t)),a.isLeafNode()&&(l=e.filter.updateFullNode(l,a,s)))}return a=t.serverCache.isFullyInitialized()||null!=si(r,lt()),Cr(t,l,a,e.filter.filtersNodes())}}
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
 */class xi{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Dn(n.getIndex()),i=$n(n);this.processor_=mi(i);const o=t.serverCache,s=t.eventCache,a=r.updateFullNode(vn.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(vn.EMPTY_NODE,s.getNode(),null),u=new vr(a,o.isFullyInitialized(),r.filtersNodes()),l=new vr(c,s.isFullyInitialized(),i.filtersNodes());this.viewCache_=kr(l,u),this.eventGenerator_=new gr(this.query_)}get query(){return this.query_}}function Ai(e){return e.viewCache_.serverCache.getNode()}function Ri(e){return Ir(e.viewCache_)}function Pi(e,t){const n=Tr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!yt(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function Ni(e){return 0===e.eventRegistrations_.length}function ji(e,t){e.eventRegistrations_.push(t)}function Li(e,t,n){const r=[];if(n){Object(o["e"])(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)})}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function Di(e,t,n,r){t.type===cr.MERGE&&null!==t.source.queryId&&(Object(o["e"])(Tr(e.viewCache_),"We should always have a full cache before handling merges"),Object(o["e"])(Ir(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=gi(e.processor_,i,t,n,r);return vi(e.processor_,s.viewCache),Object(o["e"])(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Fi(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Mi(e,t){const n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(cn,(e,t)=>{r.push(Pn(e,t))})}return n.isFullyInitialized()&&r.push(Rn(n.getNode())),Fi(e,r,n.getNode(),t)}function Fi(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return _r(e.eventGenerator_,t,n,i)}
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
 */let Ui,$i;class qi{constructor(){this.views=new Map}}function Vi(e){Object(o["e"])(!Ui,"__referenceConstructor has already been defined"),Ui=e}function zi(){return Object(o["e"])(Ui,"Reference.ts has not been loaded"),Ui}function Bi(e){return 0===e.views.size}function Wi(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return Object(o["e"])(null!=s,"SyncTree gave us an op for an invalid query."),Di(s,t,n,r)}{let i=[];for(const o of e.views.values())i=i.concat(Di(o,t,n,r));return i}}function Hi(e,t,n,r,i){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let e=ri(n,i?r:null),o=!1;e?o=!0:r instanceof vn?(e=ii(n,r),o=!1):(e=vn.EMPTY_NODE,o=!1);const s=kr(new vr(e,o,!1),new vr(r,i,!1));return new xi(t,s)}return s}function Gi(e,t,n,r,i,o){const s=Hi(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),ji(s,n),Mi(s,n)}function Ki(e,t,n,r){const i=t._queryIdentifier,o=[];let s=[];const a=Zi(e);if("default"===i)for(const[c,u]of e.views.entries())s=s.concat(Li(u,n,r)),Ni(u)&&(e.views.delete(c),u.query._queryParams.loadsAllData()||o.push(u.query));else{const t=e.views.get(i);t&&(s=s.concat(Li(t,n,r)),Ni(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||o.push(t.query)))}return a&&!Zi(e)&&o.push(new(zi())(t._repo,t._path)),{removed:o,events:s}}function Yi(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Qi(e,t){let n=null;for(const r of e.views.values())n=n||Pi(r,t);return n}function Ji(e,t){const n=t._queryParams;if(n.loadsAllData())return eo(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Xi(e,t){return null!=Ji(e,t)}function Zi(e){return null!=eo(e)}function eo(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
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
 */function to(e){Object(o["e"])(!$i,"__referenceConstructor has already been defined"),$i=e}function no(){return Object(o["e"])($i,"Reference.ts has not been loaded"),$i}let ro=1;class io{constructor(e){this.listenProvider_=e,this.syncPointTree_=new xr(null),this.pendingWriteTree_=ni(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function oo(e,t,n,r,i){return Vr(e.pendingWriteTree_,t,n,r,i),i?yo(e,new pr(ur(),t,n)):[]}function so(e,t,n,r){zr(e.pendingWriteTree_,t,n,r);const i=xr.fromObject(n);return yo(e,new mr(ur(),t,i))}function ao(e,t,n=!1){const r=Br(e.pendingWriteTree_,t),i=Wr(e.pendingWriteTree_,t);if(i){let t=new xr(null);return null!=r.snap?t=t.set(lt(),!0):F(r.children,e=>{t=t.set(new ut(e),!0)}),yo(e,new dr(r.path,t,n))}return[]}function co(e,t,n){return yo(e,new pr(lr(),t,n))}function uo(e,t,n){const r=xr.fromObject(n);return yo(e,new mr(lr(),t,r))}function lo(e,t){return yo(e,new fr(lr(),t))}function ho(e,t,n){const r=Io(e,n);if(r){const n=To(r),i=n.path,o=n.queryId,s=bt(i,t),a=new fr(hr(o),s);return Eo(e,i,a)}return[]}function fo(e,t,n,r){const i=t._path,o=e.syncPointTree_.get(i);let s=[];if(o&&("default"===t._queryIdentifier||Xi(o,t))){const a=Ki(o,t,n,r);Bi(o)&&(e.syncPointTree_=e.syncPointTree_.remove(i));const c=a.removed;s=a.events;const u=-1!==c.findIndex(e=>e._queryParams.loadsAllData()),l=e.syncPointTree_.findOnPath(i,(e,t)=>Zi(t));if(u&&!l){const t=e.syncPointTree_.subtree(i);if(!t.isEmpty()){const n=So(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,o=ko(e,r);e.listenProvider_.startListening(xo(i),Co(e,i),o.hashFn,o.onComplete)}}}if(!l&&c.length>0&&!r)if(u){const n=null;e.listenProvider_.stopListening(xo(t),n)}else c.forEach(t=>{const n=e.queryToTagMap.get(Oo(t));e.listenProvider_.stopListening(xo(t),n)});Ao(e,c)}return s}function po(e,t,n,r){const i=Io(e,r);if(null!=i){const r=To(i),o=r.path,s=r.queryId,a=bt(o,t),c=new pr(hr(s),a,n);return Eo(e,o,c)}return[]}function mo(e,t,n,r){const i=Io(e,r);if(i){const r=To(i),o=r.path,s=r.queryId,a=bt(o,t),c=xr.fromObject(n),u=new mr(hr(s),a,c);return Eo(e,o,u)}return[]}function vo(e,t,n){const r=t._path;let i=null,s=!1;e.syncPointTree_.foreachOnPath(r,(e,t)=>{const n=bt(e,r);i=i||Qi(t,n),s=s||Zi(t)});let a,c=e.syncPointTree_.get(r);if(c?(s=s||Zi(c),i=i||Qi(c,lt())):(c=new qi,e.syncPointTree_=e.syncPointTree_.set(r,c)),null!=i)a=!0;else{a=!1,i=vn.EMPTY_NODE;const t=e.syncPointTree_.subtree(r);t.foreachChild((e,t)=>{const n=Qi(t,lt());n&&(i=i.updateImmediateChild(e,n))})}const u=Xi(c,t);if(!u&&!t._queryParams.loadsAllData()){const n=Oo(t);Object(o["e"])(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=Ro();e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}const l=qr(e.pendingWriteTree_,r);let h=Gi(c,t,n,l,i,a);if(!u&&!s){const n=Ji(c,t);h=h.concat(Po(e,t,n))}return h}function go(e,t,n){const r=!0,i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,(e,n)=>{const r=bt(e,t),i=Qi(n,r);if(i)return i});return Qr(i,t,o,n,r)}function _o(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,(e,t)=>{const i=bt(e,n);r=r||Qi(t,i)});let i=e.syncPointTree_.get(n);i?r=r||Qi(i,lt()):(i=new qi,e.syncPointTree_=e.syncPointTree_.set(n,i));const o=null!=r,s=o?new vr(r,!0,!1):null,a=qr(e.pendingWriteTree_,t._path),c=Hi(i,t,a,o?s.getNode():vn.EMPTY_NODE,o);return Ri(c)}function yo(e,t){return bo(t,e.syncPointTree_,null,qr(e.pendingWriteTree_,lt()))}function bo(e,t,n,r){if(yt(e.path))return wo(e,t,n,r);{const i=t.get(lt());null==n&&null!=i&&(n=Qi(i,lt()));let o=[];const s=ht(e.path),a=e.operationForChild(s),c=t.children.get(s);if(c&&a){const e=n?n.getImmediateChild(s):null,t=ui(r,s);o=o.concat(bo(a,c,e,t))}return i&&(o=o.concat(Wi(i,e,r,n))),o}}function wo(e,t,n,r){const i=t.get(lt());null==n&&null!=i&&(n=Qi(i,lt()));let o=[];return t.children.inorderTraversal((t,i)=>{const s=n?n.getImmediateChild(t):null,a=ui(r,t),c=e.operationForChild(t);c&&(o=o.concat(wo(c,i,s,a)))}),i&&(o=o.concat(Wi(i,e,r,n))),o}function ko(e,t){const n=t.query,r=Co(e,n);return{hashFn:()=>{const e=Ai(t)||vn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?ho(e,n._path,r):lo(e,n._path);{const r=V(t,n);return fo(e,n,null,r)}}}}function Co(e,t){const n=Oo(t);return e.queryToTagMap.get(n)}function Oo(e){return e._path.toString()+"$"+e._queryIdentifier}function Io(e,t){return e.tagToQueryMap.get(t)}function To(e){const t=e.indexOf("$");return Object(o["e"])(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ut(e.substr(0,t))}}function Eo(e,t,n){const r=e.syncPointTree_.get(t);Object(o["e"])(r,"Missing sync point for query tag that we're tracking");const i=qr(e.pendingWriteTree_,t);return Wi(r,n,i,null)}function So(e){return e.fold((e,t,n)=>{if(t&&Zi(t)){const e=eo(t);return[e]}{let e=[];return t&&(e=Yi(t)),F(n,(t,n)=>{e=e.concat(n)}),e}})}function xo(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(no())(e._repo,e._path):e}function Ao(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=Oo(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function Ro(){return ro++}function Po(e,t,n){const r=t._path,i=Co(e,t),s=ko(e,n),a=e.listenProvider_.startListening(xo(t),i,s.hashFn,s.onComplete),c=e.syncPointTree_.subtree(r);if(i)Object(o["e"])(!Zi(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold((e,t,n)=>{if(!yt(e)&&t&&Zi(t))return[eo(t).query];{let e=[];return t&&(e=e.concat(Yi(t).map(e=>e.query))),F(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(xo(r),Co(e,r))}}return a}
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
 */class No{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new No(t)}node(){return this.node_}}class jo{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=_t(this.path_,e);return new jo(this.syncTree_,t)}node(){return go(this.syncTree_,this.path_)}}const Lo=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},Do=function(e,t,n){return e&&"object"===typeof e?(Object(o["e"])(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?Mo(e[".sv"],t,n):"object"===typeof e[".sv"]?Fo(e[".sv"],t):void Object(o["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Mo=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:Object(o["e"])(!1,"Unexpected server value: "+e)}},Fo=function(e,t,n){e.hasOwnProperty("increment")||Object(o["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e["increment"];"number"!==typeof r&&Object(o["e"])(!1,"Unexpected increment value: "+r);const i=t.node();if(Object(o["e"])(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i,a=s.getValue();return"number"!==typeof a?r:a+r},Uo=function(e,t,n,r){return qo(t,new jo(n,e),r)},$o=function(e,t,n){return qo(e,new No(t),n)};function qo(e,t,n){const r=e.getPriority().val(),i=Do(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const r=e,o=Do(r.getValue(),t,n);return o!==r.getValue()||i!==r.getPriority().val()?new rn(o,bn(i)):e}{const r=e;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new rn(i))),r.forEachChild(cn,(e,r)=>{const i=qo(r,t.getImmediateChild(e),n);i!==r&&(o=o.updateImmediateChild(e,i))}),o}}
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
 */class Vo{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function zo(e,t){let n=t instanceof ut?t:new ut(t),r=e,i=ht(n);while(null!==i){const e=Object(o["I"])(r.node.children,i)||{children:{},childCount:0};r=new Vo(i,r,e),n=ft(n),i=ht(n)}return r}function Bo(e){return e.node.value}function Wo(e,t){e.node.value=t,Xo(e)}function Ho(e){return e.node.childCount>0}function Go(e){return void 0===Bo(e)&&!Ho(e)}function Ko(e,t){F(e.node.children,(n,r)=>{t(new Vo(n,e,r))})}function Yo(e,t,n,r){n&&!r&&t(e),Ko(e,e=>{Yo(e,t,!0,r)}),n&&r&&t(e)}function Qo(e,t,n){let r=n?e:e.parent;while(null!==r){if(t(r))return!0;r=r.parent}return!1}function Jo(e){return new ut(null===e.parent?e.name:Jo(e.parent)+"/"+e.name)}function Xo(e){null!==e.parent&&Zo(e.parent,e.name,e)}function Zo(e,t,n){const r=Go(n),i=Object(o["j"])(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Xo(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Xo(e))}
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
 */const es=/[\[\].#$\/\u0000-\u001F\u007F]/,ts=/[\[\].#$\u0000-\u001F\u007F]/,ns=10485760,rs=function(e){return"string"===typeof e&&0!==e.length&&!es.test(e)},is=function(e){return"string"===typeof e&&0!==e.length&&!ts.test(e)},os=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),is(e)},ss=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!x(e)||e&&"object"===typeof e&&Object(o["j"])(e,".sv")},as=function(e,t,n,r){r&&void 0===t||cs(Object(o["p"])(e,"value"),t,n)},cs=function(e,t,n){const r=n instanceof ut?new Ot(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+St(r));if("function"===typeof t)throw new Error(e+"contains a function "+St(r)+" with contents = "+t.toString());if(x(t))throw new Error(e+"contains "+t.toString()+" "+St(r));if("string"===typeof t&&t.length>ns/3&&Object(o["J"])(t)>ns)throw new Error(e+"contains a string greater than "+ns+" utf8 bytes "+St(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,i=!1;if(F(t,(t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!rs(t)))throw new Error(e+" contains an invalid key ("+t+") "+St(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');It(r,t),cs(e,o,r),Tt(r)}),n&&i)throw new Error(e+' contains ".value" child '+St(r)+" in addition to actual children.")}},us=function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];const i=vt(r);for(let t=0;t<i.length;t++)if(".priority"===i[t]&&t===i.length-1);else if(!rs(i[t]))throw new Error(e+"contains an invalid key ("+i[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(wt);let i=null;for(n=0;n<t.length;n++){if(r=t[n],null!==i&&Ct(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},ls=function(e,t,n,r){if(r&&void 0===t)return;const i=Object(o["p"])(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");const s=[];F(t,(e,t)=>{const r=new ut(e);if(cs(i,t,_t(n,r)),".priority"===pt(r)&&!ss(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(r)}),us(i,s)},hs=function(e,t,n){if(!n||void 0!==t){if(x(t))throw new Error(Object(o["p"])(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!ss(t))throw new Error(Object(o["p"])(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},ds=function(e,t,n,r){if((!r||void 0!==n)&&!rs(n))throw new Error(Object(o["p"])(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},fs=function(e,t,n,r){if((!r||void 0!==n)&&!is(n))throw new Error(Object(o["p"])(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},ps=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),fs(e,t,n,r)},ms=function(e,t){if(".info"===ht(t))throw new Error(e+" failed = Can't modify data under /.info/")},vs=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!rs(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!os(n))throw new Error(Object(o["p"])(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class gs{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _s(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();null===n||kt(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function ys(e,t,n){_s(e,n),ws(e,e=>kt(e,t))}function bs(e,t,n){_s(e,n),ws(e,e=>Ct(e,t)||Ct(t,e))}function ws(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const o=i.path;t(o)?(ks(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function ks(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();b&&C("event: "+n.toString()),G(r)}}}
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
 */const Cs="repo_interrupt",Os=25;class Is{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new gs,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xn(),this.transactionQueueTree_=new Vo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ts(e,t,n){if(e.stats_=ve(e.repoInfo_),e.forceRestClient_||K())e.server_=new Qn(e.repoInfo_,(t,n,r,i)=>{xs(e,t,n,r,i)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>As(e,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(o["L"])(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Ft(e.repoInfo_,t,(t,n,r,i)=>{xs(e,t,n,r,i)},t=>{As(e,t)},t=>{Rs(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=ge(e.repoInfo_,()=>new ar(e.stats_,e.server_)),e.infoData_=new Jn,e.infoSyncTree_=new io({startListening:(t,n,r,i)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=co(e.infoSyncTree_,t._path,s),setTimeout(()=>{i("ok")},0)),o},stopListening:()=>{}}),Ps(e,"connected",!1),e.serverSyncTree_=new io({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,(n,r)=>{const o=i(n,r);bs(e.eventQueue_,t._path,o)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Es(e){const t=e.infoData_.getNode(new ut(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function Ss(e){return Lo({timestamp:Es(e)})}function xs(e,t,n,r,i){e.dataUpdateCount++;const s=new ut(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=Object(o["F"])(n,e=>bn(e));a=mo(e.serverSyncTree_,s,t,i)}else{const t=bn(n);a=po(e.serverSyncTree_,s,t,i)}else if(r){const t=Object(o["F"])(n,e=>bn(e));a=uo(e.serverSyncTree_,s,t)}else{const t=bn(n);a=co(e.serverSyncTree_,s,t)}let c=s;a.length>0&&(c=Xs(e,s)),bs(e.eventQueue_,c,a)}function As(e,t){Ps(e,"connected",t),!1===t&&Ms(e)}function Rs(e,t){F(t,(t,n)=>{Ps(e,t,n)})}function Ps(e,t,n){const r=new ut("/.info/"+t),i=bn(n);e.infoData_.updateSnapshot(r,i);const o=co(e.infoSyncTree_,r,i);bs(e.eventQueue_,r,o)}function Ns(e){return e.nextWriteId_++}function js(e,t){const n=_o(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then(n=>{const r=bn(n).withIndex(t._queryParams.getIndex()),i=co(e.serverSyncTree_,t._path,r);return ys(e.eventQueue_,t._path,i),Promise.resolve(r)},n=>(Hs(e,"get for query "+Object(o["L"])(t)+" failed: "+n),Promise.reject(new Error(n))))}function Ls(e,t,n,r,i){Hs(e,"set",{path:t.toString(),value:n,priority:r});const o=Ss(e),s=bn(n,r),a=go(e.serverSyncTree_,t),c=$o(s,a,o),u=Ns(e),l=oo(e.serverSyncTree_,t,c,u,!0);_s(e.eventQueue_,l),e.server_.put(t.toString(),s.val(!0),(n,r)=>{const o="ok"===n;o||E("set at "+t+" failed: "+n);const s=ao(e.serverSyncTree_,u,!o);bs(e.eventQueue_,t,s),Gs(e,i,n,r)});const h=ia(e,t);Xs(e,h),bs(e.eventQueue_,h,[])}function Ds(e,t,n,r){Hs(e,"update",{path:t.toString(),value:n});let i=!0;const o=Ss(e),s={};if(F(n,(n,r)=>{i=!1,s[n]=Uo(_t(t,n),bn(r),e.serverSyncTree_,o)}),i)C("update() called with empty data.  Don't do anything."),Gs(e,r,"ok",void 0);else{const i=Ns(e),o=so(e.serverSyncTree_,t,s,i);_s(e.eventQueue_,o),e.server_.merge(t.toString(),n,(n,o)=>{const s="ok"===n;s||E("update at "+t+" failed: "+n);const a=ao(e.serverSyncTree_,i,!s),c=a.length>0?Xs(e,t):t;bs(e.eventQueue_,c,a),Gs(e,r,n,o)}),F(n,n=>{const r=ia(e,_t(t,n));Xs(e,r)}),bs(e.eventQueue_,t,[])}}function Ms(e){Hs(e,"onDisconnectEvents");const t=Ss(e),n=Xn();tr(e.onDisconnect_,lt(),(r,i)=>{const o=Uo(r,i,e.serverSyncTree_,t);Zn(n,r,o)});let r=[];tr(n,lt(),(t,n)=>{r=r.concat(co(e.serverSyncTree_,t,n));const i=ia(e,t);Xs(e,i)}),e.onDisconnect_=Xn(),bs(e.eventQueue_,lt(),r)}function Fs(e,t,n){e.server_.onDisconnectCancel(t.toString(),(r,i)=>{"ok"===r&&er(e.onDisconnect_,t),Gs(e,n,r,i)})}function Us(e,t,n,r){const i=bn(n);e.server_.onDisconnectPut(t.toString(),i.val(!0),(n,o)=>{"ok"===n&&Zn(e.onDisconnect_,t,i),Gs(e,r,n,o)})}function $s(e,t,n,r,i){const o=bn(n,r);e.server_.onDisconnectPut(t.toString(),o.val(!0),(n,r)=>{"ok"===n&&Zn(e.onDisconnect_,t,o),Gs(e,i,n,r)})}function qs(e,t,n,r){if(Object(o["w"])(n))return C("onDisconnect().update() called with empty data.  Don't do anything."),void Gs(e,r,"ok",void 0);e.server_.onDisconnectMerge(t.toString(),n,(i,o)=>{"ok"===i&&F(n,(n,r)=>{const i=bn(r);Zn(e.onDisconnect_,_t(t,n),i)}),Gs(e,r,i,o)})}function Vs(e,t,n){let r;r=".info"===ht(t._path)?vo(e.infoSyncTree_,t,n):vo(e.serverSyncTree_,t,n),ys(e.eventQueue_,t._path,r)}function zs(e,t,n){let r;r=".info"===ht(t._path)?fo(e.infoSyncTree_,t,n):fo(e.serverSyncTree_,t,n),ys(e.eventQueue_,t._path,r)}function Bs(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Cs)}function Ws(e){e.persistentConnection_&&e.persistentConnection_.resume(Cs)}function Hs(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),C(n,...t)}function Gs(e,t,n,r){t&&G(()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const o=new Error(i);o.code=e,t(o)}})}function Ks(e,t,n,r,i,s){Hs(e,"transaction on "+t);const a={path:t,update:n,onComplete:r,status:null,order:g(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},c=Ys(e,t,void 0);a.currentInputSnapshot=c;const u=a.update(c.val());if(void 0===u)a.unwatcher(),a.currentOutputSnapshotRaw=null,a.currentOutputSnapshotResolved=null,a.onComplete&&a.onComplete(null,!1,a.currentInputSnapshot);else{cs("transaction failed: Data returned ",u,a.path),a.status=0;const n=zo(e.transactionQueueTree_,t),r=Bo(n)||[];let i;if(r.push(a),Wo(n,r),"object"===typeof u&&null!==u&&Object(o["j"])(u,".priority"))i=Object(o["I"])(u,".priority"),Object(o["e"])(ss(i),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{const n=go(e.serverSyncTree_,t)||vn.EMPTY_NODE;i=n.getPriority().val()}const s=Ss(e),l=bn(u,i),h=$o(l,c,s);a.currentOutputSnapshotRaw=l,a.currentOutputSnapshotResolved=h,a.currentWriteId=Ns(e);const d=oo(e.serverSyncTree_,t,h,a.currentWriteId,a.applyLocally);bs(e.eventQueue_,t,d),Qs(e,e.transactionQueueTree_)}}function Ys(e,t,n){return go(e.serverSyncTree_,t,n)||vn.EMPTY_NODE}function Qs(e,t=e.transactionQueueTree_){if(t||ra(e,t),Bo(t)){const n=ta(e,t);Object(o["e"])(n.length>0,"Sending zero length transaction queue");const r=n.every(e=>0===e.status);r&&Js(e,Jo(t),n)}else Ho(t)&&Ko(t,t=>{Qs(e,t)})}function Js(e,t,n){const r=n.map(e=>e.currentWriteId),i=Ys(e,t,r);let s=i;const a=i.hash();for(let l=0;l<n.length;l++){const e=n[l];Object(o["e"])(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=bt(t,e.path);s=s.updateChild(r,e.currentOutputSnapshotRaw)}const c=s.val(!0),u=t;e.server_.put(u.toString(),c,r=>{Hs(e,"transaction put response",{path:u.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(ao(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();ra(e,zo(e.transactionQueueTree_,t)),Qs(e,e.transactionQueueTree_),bs(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)G(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{E("transaction at "+u.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}Xs(e,t)}},a)}function Xs(e,t){const n=ea(e,t),r=Jo(n),i=ta(e,n);return Zs(e,i,r),r}function Zs(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter(e=>0===e.status),a=s.map(e=>e.currentWriteId);for(let c=0;c<t.length;c++){const s=t[c],u=bt(n,s.path);let l,h=!1;if(Object(o["e"])(null!==u,"rerunTransactionsUnderNode_: relativePath should not be null."),4===s.status)h=!0,l=s.abortReason,i=i.concat(ao(e.serverSyncTree_,s.currentWriteId,!0));else if(0===s.status)if(s.retryCount>=Os)h=!0,l="maxretry",i=i.concat(ao(e.serverSyncTree_,s.currentWriteId,!0));else{const n=Ys(e,s.path,a);s.currentInputSnapshot=n;const r=t[c].update(n.val());if(void 0!==r){cs("transaction failed: Data returned ",r,s.path);let t=bn(r);const c="object"===typeof r&&null!=r&&Object(o["j"])(r,".priority");c||(t=t.updatePriority(n.getPriority()));const u=s.currentWriteId,l=Ss(e),h=$o(t,n,l);s.currentOutputSnapshotRaw=t,s.currentOutputSnapshotResolved=h,s.currentWriteId=Ns(e),a.splice(a.indexOf(u),1),i=i.concat(oo(e.serverSyncTree_,s.path,h,s.currentWriteId,s.applyLocally)),i=i.concat(ao(e.serverSyncTree_,u,!0))}else h=!0,l="nodata",i=i.concat(ao(e.serverSyncTree_,s.currentWriteId,!0))}bs(e.eventQueue_,n,i),i=[],h&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===l?r.push(()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot)):r.push(()=>t[c].onComplete(new Error(l),!1,null))))}ra(e,e.transactionQueueTree_);for(let o=0;o<r.length;o++)G(r[o]);Qs(e,e.transactionQueueTree_)}function ea(e,t){let n,r=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===Bo(r))r=zo(r,n),t=ft(t),n=ht(t);return r}function ta(e,t){const n=[];return na(e,t,n),n.sort((e,t)=>e.order-t.order),n}function na(e,t,n){const r=Bo(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ko(t,t=>{na(e,t,n)})}function ra(e,t){const n=Bo(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Wo(t,n.length>0?n:void 0)}Ko(t,t=>{ra(e,t)})}function ia(e,t){const n=Jo(ea(e,t)),r=zo(e.transactionQueueTree_,t);return Qo(r,t=>{oa(e,t)}),oa(e,r),Yo(r,t=>{oa(e,t)}),n}function oa(e,t){const n=Bo(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Object(o["e"])(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(Object(o["e"])(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(ao(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Wo(t,void 0):n.length=s+1,bs(e.eventQueue_,Jo(t),i);for(let e=0;e<r.length;e++)G(r[e])}}
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
 */function sa(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}function aa(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):E(`Invalid query segment '${n}' in query '${e}'`)}return t}const ca=function(e,t){const n=ua(e),r=n.namespace;"firebase.com"===n.domain&&T(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||T("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||S();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new le(n.host,n.secure,r,t,i,"",r!==n.subdomain),path:new ut(n.pathString)}},ua=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",c=443;if("string"===typeof e){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let l=e.indexOf("/");-1===l&&(l=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=sa(e.substring(l,h)));const d=aa(e.substring(Math.min(e.length,h)));u=t.indexOf(":"),u>=0?(s="https"===a||"wss"===a,c=parseInt(t.substring(u+1),10)):u=t.length;const f=t.slice(0,u);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=r}"ns"in d&&(o=d["ns"])}return{host:t,port:c,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};
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
class la{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(o["L"])(this.snapshot.exportVal())}}class ha{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
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
 */class da{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Object(o["e"])(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
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
 */class fa{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new o["a"];return Fs(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){ms("OnDisconnect.remove",this._path);const e=new o["a"];return Us(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){ms("OnDisconnect.set",this._path),as("OnDisconnect.set",e,this._path,!1);const t=new o["a"];return Us(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){ms("OnDisconnect.setWithPriority",this._path),as("OnDisconnect.setWithPriority",e,this._path,!1),hs("OnDisconnect.setWithPriority",t,!1);const n=new o["a"];return $s(this._repo,this._path,e,t,n.wrapCallback(()=>{})),n.promise}update(e){ms("OnDisconnect.update",this._path),ls("OnDisconnect.update",e,this._path,!1);const t=new o["a"];return qs(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}
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
 */class pa{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return yt(this._path)?null:pt(this._path)}get ref(){return new _a(this._repo,this._path)}get _queryIdentifier(){const e=Yn(this._queryParams),t=D(e);return"{}"===t?"default":t}get _queryObject(){return Yn(this._queryParams)}isEqual(e){if(e=Object(o["r"])(e),!(e instanceof pa))return!1;const t=this._repo===e._repo,n=kt(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+mt(this._path)}}function ma(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}function va(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===zt){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){const n=e.getIndexStartName();if(n!==R)throw new Error(r);if("string"!==typeof t)throw new Error(i)}if(e.hasEnd()){const t=e.getIndexEndName();if(t!==P)throw new Error(r);if("string"!==typeof n)throw new Error(i)}}else if(e.getIndex()===cn){if(null!=t&&!ss(t)||null!=n&&!ss(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(Object(o["e"])(e.getIndex()instanceof wn||e.getIndex()===Cn,"unknown index type."),null!=t&&"object"===typeof t||null!=n&&"object"===typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function ga(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class _a extends pa{constructor(e,t){super(e,t,new Un,!1)}get parent(){const e=gt(this._path);return null===e?null:new _a(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class ya{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ut(e),n=ka(this.ref,e);return new ya(this._node.getChild(t),n,cn)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,(t,n)=>e(new ya(n,ka(this.ref,t),cn)))}hasChild(e){const t=new ut(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ba(e,t){return e=Object(o["r"])(e),e._checkNotDeleted("ref"),void 0!==t?ka(e._root,t):e._root}function wa(e,t){e=Object(o["r"])(e),e._checkNotDeleted("refFromURL");const n=ca(t,e._repo.repoInfo_.nodeAdmin);vs("refFromURL",n);const r=n.repoInfo;return e._repo.repoInfo_.isCustomHost()||r.host===e._repo.repoInfo_.host||T("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+e._repo.repoInfo_.host+")"),ba(e,n.path.toString())}function ka(e,t){return e=Object(o["r"])(e),null===ht(e._path)?ps("child","path",t,!1):fs("child","path",t,!1),new _a(e._repo,_t(e._path,t))}function Ca(e,t){e=Object(o["r"])(e),ms("push",e._path),as("push",t,e._path,!0);const n=Es(e._repo),r=Sn(n),i=ka(e,r),s=ka(e,r);let a;return a=null!=t?Ia(s,t).then(()=>s):Promise.resolve(s),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i}function Oa(e){return ms("remove",e._path),Ia(e,null)}function Ia(e,t){e=Object(o["r"])(e),ms("set",e._path),as("set",t,e._path,!1);const n=new o["a"];return Ls(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function Ta(e,t){e=Object(o["r"])(e),ms("setPriority",e._path),hs("setPriority",t,!1);const n=new o["a"];return Ls(e._repo,_t(e._path,".priority"),t,null,n.wrapCallback(()=>{})),n.promise}function Ea(e,t,n){if(ms("setWithPriority",e._path),as("setWithPriority",t,e._path,!1),hs("setWithPriority",n,!1),".length"===e.key||".keys"===e.key)throw"setWithPriority failed: "+e.key+" is a read-only object.";const r=new o["a"];return Ls(e._repo,e._path,t,n,r.wrapCallback(()=>{})),r.promise}function Sa(e,t){ls("update",t,e._path,!1);const n=new o["a"];return Ds(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function xa(e){return e=Object(o["r"])(e),js(e._repo,e).then(t=>new ya(t,new _a(e._repo,e._path),e._queryParams.getIndex()))}class Aa{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new la("value",this,new ya(e.snapshotNode,new _a(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ha(this,e,t):null}matches(e){return e instanceof Aa&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Ra{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ha(this,e,t):null}createEvent(e,t){Object(o["e"])(null!=e.childName,"Child events should have a childName.");const n=ka(new _a(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new la(e.type,this,new ya(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ra&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Pa(e,t,n,r,i){let o;if("object"===typeof r&&(o=void 0,i=r),"function"===typeof r&&(o=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{zs(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const s=new da(n,o||void 0),a="value"===t?new Aa(s):new Ra(t,s);return Vs(e._repo,e,a),()=>zs(e._repo,e,a)}function Na(e,t,n,r){return Pa(e,"value",t,n,r)}function ja(e,t,n,r){return Pa(e,"child_added",t,n,r)}function La(e,t,n,r){return Pa(e,"child_changed",t,n,r)}function Da(e,t,n,r){return Pa(e,"child_moved",t,n,r)}function Ma(e,t,n,r){return Pa(e,"child_removed",t,n,r)}function Fa(e,t,n){let r=null;const i=n?new da(n):null;"value"===t?r=new Aa(i):t&&(r=new Ra(t,i)),zs(e._repo,e,r)}class Ua{}class $a extends Ua{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){as("endAt",this._value,e._path,!0);const t=Wn(e._queryParams,this._value,this._key);if(ga(t),va(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new pa(e._repo,e._path,t,e._orderByCalled)}}function qa(e,t){return ds("endAt","key",t,!0),new $a(e,t)}class Va extends Ua{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){as("endBefore",this._value,e._path,!1);const t=Hn(e._queryParams,this._value,this._key);if(ga(t),va(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new pa(e._repo,e._path,t,e._orderByCalled)}}function za(e,t){return ds("endBefore","key",t,!0),new Va(e,t)}class Ba extends Ua{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){as("startAt",this._value,e._path,!0);const t=zn(e._queryParams,this._value,this._key);if(ga(t),va(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new pa(e._repo,e._path,t,e._orderByCalled)}}function Wa(e=null,t){return ds("startAt","key",t,!0),new Ba(e,t)}class Ha extends Ua{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){as("startAfter",this._value,e._path,!1);const t=Bn(e._queryParams,this._value,this._key);if(ga(t),va(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new pa(e._repo,e._path,t,e._orderByCalled)}}function Ga(e,t){return ds("startAfter","key",t,!0),new Ha(e,t)}class Ka extends Ua{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new pa(e._repo,e._path,qn(e._queryParams,this._limit),e._orderByCalled)}}function Ya(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Ka(e)}class Qa extends Ua{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new pa(e._repo,e._path,Vn(e._queryParams,this._limit),e._orderByCalled)}}function Ja(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Qa(e)}class Xa extends Ua{constructor(e){super(),this._path=e}_apply(e){ma(e,"orderByChild");const t=new ut(this._path);if(yt(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new wn(t),r=Gn(e._queryParams,n);return va(r),new pa(e._repo,e._path,r,!0)}}function Za(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return fs("orderByChild","path",e,!1),new Xa(e)}class ec extends Ua{_apply(e){ma(e,"orderByKey");const t=Gn(e._queryParams,zt);return va(t),new pa(e._repo,e._path,t,!0)}}function tc(){return new ec}class nc extends Ua{_apply(e){ma(e,"orderByPriority");const t=Gn(e._queryParams,cn);return va(t),new pa(e._repo,e._path,t,!0)}}function rc(){return new nc}class ic extends Ua{_apply(e){ma(e,"orderByValue");const t=Gn(e._queryParams,Cn);return va(t),new pa(e._repo,e._path,t,!0)}}function oc(){return new ic}class sc extends Ua{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(as("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new $a(this._value,this._key)._apply(new Ba(this._value,this._key)._apply(e))}}function ac(e,t){return ds("equalTo","key",t,!0),new sc(e,t)}function cc(e,...t){let n=Object(o["r"])(e);for(const r of t)n=r._apply(n);return n}Vi(_a),to(_a);
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
const uc="FIREBASE_DATABASE_EMULATOR_HOST",lc={};let hc=!1;function dc(e,t,n,r){e.repoInfo_=new le(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),r&&(e.authTokenProvider_=r)}function fc(t,n,r,i,o){let s=i||t.options.databaseURL;void 0===s&&(t.options.projectId||T("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),C("Using default host for project ",t.options.projectId),s=t.options.projectId+"-default-rtdb.firebaseio.com");let a,c=ca(s,o),u=c.repoInfo,l=void 0;"undefined"!==typeof e&&(l=Object({NODE_ENV:"production",VUE_APP_FIREBASE_TOKEN:"AIzaSyB1CZlKBnTyZ2MAXtK8BWmwzVm1bYU4gJ8",BASE_URL:"/",NODE_ANALYTICS:"development"})[uc]),l?(a=!0,s=`http://${l}?ns=${u.namespace}`,c=ca(s,o),u=c.repoInfo):a=!c.repoInfo.secure;const h=o&&a?new X(X.OWNER):new J(t.name,t.options,n);vs("Invalid Firebase Database URL",c),yt(c.path)||T("Database URL must point to the root of a Firebase Database (not including a child path).");const d=mc(u,t,h,new Q(t.name,r));return new vc(d,t)}function pc(e,t){const n=lc[t];n&&n[e.key]===e||T(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Bs(e),delete n[e.key]}function mc(e,t,n,r){let i=lc[t.name];i||(i={},lc[t.name]=i);let o=i[e.toURLString()];return o&&T("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new Is(e,hc,n,r),i[e.toURLString()]=o,o}class vc{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ts(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _a(this._repo,lt())),this._rootInternal}_delete(){return null!==this._rootInternal&&(pc(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&T("Cannot call "+e+" on a deleted database.")}}function gc(e,t,n,r={}){e=Object(o["r"])(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&T("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s=void 0;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&T('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new X(X.OWNER);else if(r.mockUserToken){const t="string"===typeof r.mockUserToken?r.mockUserToken:Object(o["k"])(r.mockUserToken,e.app.options.projectId);s=new X(t)}dc(i,t,n,s)}function _c(e){e=Object(o["r"])(e),e._checkNotDeleted("goOffline"),Bs(e._repo)}function yc(e){e=Object(o["r"])(e),e._checkNotDeleted("goOnline"),Ws(e._repo)}function bc(e,t){k(e,t)}
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
 */function wc(e){l(r["SDK_VERSION"]),Object(r["_registerComponent"])(new i["a"]("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return fc(n,r,i,t)},"PUBLIC").setMultipleInstances(!0)),Object(r["registerVersion"])(a,c,e),Object(r["registerVersion"])(a,c,"esm2017")}
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
 */const kc={".sv":"timestamp"};function Cc(){return kc}function Oc(e){return{".sv":{increment:e}}}
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
 */class Ic{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function Tc(e,t,n){var r;if(e=Object(o["r"])(e),ms("Reference.transaction",e._path),".length"===e.key||".keys"===e.key)throw"Reference.transaction failed: "+e.key+" is a read-only object.";const i=null===(r=null===n||void 0===n?void 0:n.applyLocally)||void 0===r||r,s=new o["a"],a=(t,n,r)=>{let i=null;t?s.reject(t):(i=new ya(r,new _a(e._repo,e._path),cn),s.resolve(new Ic(n,i)))},c=Na(e,()=>{});return Ks(e._repo,e._path,t,a,c,i),s.promise}
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
 */Ft.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ft.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};wc()}).call(this,n("4362"))},"53ca":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},5692:function(e,t,n){var r=n("c430"),i=n("c6cd");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.19.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,n){var r=n("d066"),i=n("e330"),o=n("241c"),s=n("7418"),a=n("825a"),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},"577e":function(e,t,n){var r=n("da84"),i=n("f5df"),o=r.String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},"589b":function(e,t,n){"use strict";n.r(t),n.d(t,"SDK_VERSION",(function(){return Y})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return D})),n.d(t,"_addComponent",(function(){return $})),n.d(t,"_addOrOverwriteComponent",(function(){return q})),n.d(t,"_apps",(function(){return F})),n.d(t,"_clearComponents",(function(){return W})),n.d(t,"_components",(function(){return U})),n.d(t,"_getProvider",(function(){return z})),n.d(t,"_registerComponent",(function(){return V})),n.d(t,"_removeServiceInstance",(function(){return B})),n.d(t,"deleteApp",(function(){return Z})),n.d(t,"getApp",(function(){return J})),n.d(t,"getApps",(function(){return X})),n.d(t,"initializeApp",(function(){return Q})),n.d(t,"onLog",(function(){return te})),n.d(t,"registerVersion",(function(){return ee})),n.d(t,"setLogLevel",(function(){return ne}));var r=n("22e5"),i=n("e691"),o=n("1fd5");n.d(t,"FirebaseError",(function(){return o["c"]}));
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
class s{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.8",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",v="@firebase/auth",g="@firebase/auth-compat",_="@firebase/database",y="@firebase/database-compat",b="@firebase/functions",w="@firebase/functions-compat",k="@firebase/installations",C="@firebase/installations-compat",O="@firebase/messaging",I="@firebase/messaging-compat",T="@firebase/performance",E="@firebase/performance-compat",S="@firebase/remote-config",x="@firebase/remote-config-compat",A="@firebase/storage",R="@firebase/storage-compat",P="@firebase/firestore",N="@firebase/firestore-compat",j="firebase",L="9.4.1",D="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[v]:"fire-auth",[g]:"fire-auth-compat",[_]:"fire-rtdb",[y]:"fire-rtdb-compat",[b]:"fire-fn",[w]:"fire-fn-compat",[k]:"fire-iid",[C]:"fire-iid-compat",[O]:"fire-fcm",[I]:"fire-fcm-compat",[T]:"fire-perf",[E]:"fire-perf-compat",[S]:"fire-rc",[x]:"fire-rc-compat",[A]:"fire-gcs",[R]:"fire-gcs-compat",[P]:"fire-fst",[N]:"fire-fst-compat","fire-js":"fire-js",[j]:"fire-js-all"},F=new Map,U=new Map;function $(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function q(e,t){e.container.addOrOverwriteComponent(t)}function V(e){const t=e.name;if(U.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;U.set(t,e);for(const n of F.values())$(n,e);return!0}function z(e,t){return e.container.getProvider(t)}function B(e,t,n=D){z(e,t).clearInstance(n)}function W(){U.clear()}
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
 */const H={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},G=new o["b"]("app","Firebase",H);
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
class K{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}
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
 */const Y=L;function Q(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:D,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw G.create("bad-app-name",{appName:String(i)});const s=F.get(i);if(s){if(Object(o["n"])(e,s.options)&&Object(o["n"])(n,s.config))return s;throw G.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of U.values())a.addComponent(r);const c=new K(e,n,a);return F.set(i,c),c}function J(e=D){const t=F.get(e);if(!t)throw G.create("no-app",{appName:e});return t}function X(){return Array.from(F.values())}async function Z(e){const t=e.name;F.has(t)&&(F.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function ee(e,t,n){var i;let o=null!==(i=M[e])&&void 0!==i?i:e;n&&(o+="-"+n);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}V(new r["a"](o+"-version",()=>({library:o,version:t}),"VERSION"))}function te(e,t){if(null!==e&&"function"!==typeof e)throw G.create("invalid-log-argument");Object(i["d"])(e,t)}function ne(e){Object(i["c"])(e)}
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
 */function re(e){V(new r["a"]("platform-logger",e=>new s(e),"PRIVATE")),ee(c,u,e),ee(c,u,"esm2017"),ee("fire-js","")}re("")},"58ca":function(e,t,n){"use strict";(function(e){var r=n("3c4e"),i=n.n(r),o="2.4.0";function s(e){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e){return h(e)||d(e)||f(e)||m()}function h(e){if(Array.isArray(e))return p(e)}function d(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function f(e,t){if(e){if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function v(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=f(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}function g(e){return Array.isArray(e)}function _(e){return"undefined"===typeof e}function y(e){return"object"===s(e)}function b(e){return"object"===s(e)&&null!==e}function w(e){return"function"===typeof e}function k(e){return"string"===typeof e}function C(){try{return!_(window)}catch(e){return!1}}var O=C(),I=O?window:e,T=I.console||{};function E(e){T&&T.warn&&T.warn(e)}var S=function(){return E("This vue app/component has no vue-meta configuration")},x={title:void 0,titleChunk:"",titleTemplate:"%s",htmlAttrs:{},bodyAttrs:{},headAttrs:{},base:[],link:[],meta:[],style:[],script:[],noscript:[],__dangerouslyDisableSanitizers:[],__dangerouslyDisableSanitizersByTagID:{}},A="_vueMeta",R="metaInfo",P="data-vue-meta",N="data-vue-meta-server-rendered",j="vmid",L="template",D="content",M="ssr",F=10,U=!0,$={keyName:R,attribute:P,ssrAttribute:N,tagIDKeyName:j,contentKeyName:D,metaTemplateKeyName:L,waitOnDestroyed:U,debounceWait:F,ssrAppId:M},q=Object.keys(x),V=[q[12],q[13]],z=[q[1],q[2],"changed"].concat(V),B=[q[3],q[4],q[5]],W=["link","style","script"],H=["base","meta","link"],G=["noscript","script","style"],K=["innerHTML","cssText","json"],Y=["once","skip","template"],Q=["body","pbody"],J=["allowfullscreen","amp","amp-boilerplate","async","autofocus","autoplay","checked","compact","controls","declare","default","defaultchecked","defaultmuted","defaultselected","defer","disabled","enabled","formnovalidate","hidden","indeterminate","inert","ismap","itemscope","loop","multiple","muted","nohref","noresize","noshade","novalidate","nowrap","open","pauseonexit","readonly","required","reversed","scoped","seamless","selected","sortable","truespeed","typemustmatch","visible"],X=null;function Z(e,t,n){var r=e.debounceWait;t[A].initialized||!t[A].initializing&&"watcher"!==n||(t[A].initialized=null),t[A].initialized&&!t[A].pausing&&ee((function(){t.$meta().refresh()}),r)}function ee(e,t){if(t=void 0===t?10:t,t)return clearTimeout(X),X=setTimeout((function(){e()}),t),X;e()}function te(e,t,n){if(Array.prototype.find)return e.find(t,n);for(var r=0;r<e.length;r++)if(t.call(n,e[r],r,e))return e[r]}function ne(e,t,n){if(!Array.prototype.findIndex){for(var r=0;r<e.length;r++)if(t.call(n,e[r],r,e))return r;return-1}return e.findIndex(t,n)}function re(e){return Array.from?Array.from(e):Array.prototype.slice.call(e)}function ie(e,t){if(!Array.prototype.includes){for(var n in e)if(e[n]===t)return!0;return!1}return e.includes(t)}var oe=function(e,t){return(t||document).querySelectorAll(e)};function se(e,t){return e[t]||(e[t]=document.getElementsByTagName(t)[0]),e[t]}function ae(e){var t=e.body,n=e.pbody;return t?"body":n?"pbody":"head"}function ce(e,t,n){var r=t.appId,i=t.attribute,o=t.type,s=t.tagIDKeyName;n=n||{};var a=["".concat(o,"[").concat(i,'="').concat(r,'"]'),"".concat(o,"[data-").concat(s,"]")].map((function(e){for(var t in n){var r=n[t],i=r&&!0!==r?'="'.concat(r,'"'):"";e+="[data-".concat(t).concat(i,"]")}return e}));return re(oe(a.join(", "),e))}function ue(e,t){var n=e.attribute;re(oe("[".concat(n,'="').concat(t,'"]'))).map((function(e){return e.remove()}))}function le(e,t){e.removeAttribute(t)}function he(e){return e=e||this,e&&(!0===e[A]||y(e[A]))}function de(e){return e=e||this,e&&!_(e[A])}function fe(e,t){return e[A].pausing=!0,function(){return pe(e,t)}}function pe(e,t){if(e[A].pausing=!1,t||void 0===t)return e.$meta().refresh()}function me(e){var t=e.$router;!e[A].navGuards&&t&&(e[A].navGuards=!0,t.beforeEach((function(t,n,r){fe(e),r()})),t.afterEach((function(){e.$nextTick((function(){var t=pe(e),n=t.metaInfo;n&&w(n.afterNavigation)&&n.afterNavigation(n)}))})))}var ve=1;function ge(e,t){var n=["activated","deactivated","beforeMount"],r=!1;return{beforeCreate:function(){var i=this,o="$root",s=this[o],a=this.$options,c=e.config.devtools;if(Object.defineProperty(this,"_hasMetaInfo",{configurable:!0,get:function(){return c&&!s[A].deprecationWarningShown&&(E("VueMeta DeprecationWarning: _hasMetaInfo has been deprecated and will be removed in a future version. Please use hasMetaInfo(vm) instead"),s[A].deprecationWarningShown=!0),he(this)}}),this===s&&s.$once("hook:beforeMount",(function(){if(r=this.$el&&1===this.$el.nodeType&&this.$el.hasAttribute("data-server-rendered"),!r&&s[A]&&1===s[A].appId){var e=se({},"html");r=e&&e.hasAttribute(t.ssrAttribute)}})),!_(a[t.keyName])&&null!==a[t.keyName]){if(s[A]||(s[A]={appId:ve},ve++,c&&s.$options[t.keyName]&&this.$nextTick((function(){var e=te(s.$children,(function(e){return e.$vnode&&e.$vnode.fnOptions}));e&&e.$vnode.fnOptions[t.keyName]&&E("VueMeta has detected a possible global mixin which adds a ".concat(t.keyName," property to all Vue components on the page. This could cause severe performance issues. If possible, use $meta().addApp to add meta information instead"))}))),!this[A]){this[A]=!0;var u=this.$parent;while(u&&u!==s)_(u[A])&&(u[A]=!1),u=u.$parent}w(a[t.keyName])&&(a.computed=a.computed||{},a.computed.$metaInfo=a[t.keyName],this.$isServer||this.$on("hook:created",(function(){this.$watch("$metaInfo",(function(){Z(t,this[o],"watcher")}))}))),_(s[A].initialized)&&(s[A].initialized=this.$isServer,s[A].initialized||(s[A].initializedSsr||(s[A].initializedSsr=!0,this.$on("hook:beforeMount",(function(){var e=this[o];r&&(e[A].appId=t.ssrAppId)}))),this.$on("hook:mounted",(function(){var e=this[o];e[A].initialized||(e[A].initializing=!0,this.$nextTick((function(){var n=e.$meta().refresh(),r=n.tags,i=n.metaInfo;!1===r&&null===e[A].initialized&&this.$nextTick((function(){return Z(t,e,"init")})),e[A].initialized=!0,delete e[A].initializing,!t.refreshOnceOnNavigation&&i.afterNavigation&&me(e)})))})),t.refreshOnceOnNavigation&&me(s))),this.$on("hook:destroyed",(function(){var e=this;this.$parent&&he(this)&&(delete this._hasMetaInfo,this.$nextTick((function(){if(t.waitOnDestroyed&&e.$el&&e.$el.offsetParent)var n=setInterval((function(){e.$el&&null!==e.$el.offsetParent||(clearInterval(n),Z(t,e.$root,"destroyed"))}),50);else Z(t,e.$root,"destroyed")})))})),this.$isServer||n.forEach((function(e){i.$on("hook:".concat(e),(function(){Z(t,this[o],e)}))}))}}}}function _e(e){return e=y(e)?e:{},{keyName:e["keyName"]||$.keyName,attribute:e["attribute"]||$.attribute,ssrAttribute:e["ssrAttribute"]||$.ssrAttribute,tagIDKeyName:e["tagIDKeyName"]||$.tagIDKeyName,contentKeyName:e["contentKeyName"]||$.contentKeyName,metaTemplateKeyName:e["metaTemplateKeyName"]||$.metaTemplateKeyName,debounceWait:_(e["debounceWait"])?$.debounceWait:e["debounceWait"],waitOnDestroyed:_(e["waitOnDestroyed"])?$.waitOnDestroyed:e["waitOnDestroyed"],ssrAppId:e["ssrAppId"]||$.ssrAppId,refreshOnceOnNavigation:!!e["refreshOnceOnNavigation"]}}function ye(e){var t={};for(var n in e)t[n]=e[n];return t}function be(e,t){return t&&y(e)?(g(e[t])||(e[t]=[]),e):g(e)?e:[]}var we=[[/&/g,"&amp;"],[/</g,"&lt;"],[/>/g,"&gt;"],[/"/g,"&quot;"],[/'/g,"&#x27;"]],ke=[[/&/g,"&"],[/</g,"<"],[/>/g,">"],[/"/g,'"'],[/'/g,"'"]];function Ce(e,t,n,r){var i=t.tagIDKeyName,o=n.doEscape,s=void 0===o?function(e){return e}:o,a={};for(var c in e){var u=e[c];if(ie(z,c))a[c]=u;else{var l=V[0];if(n[l]&&ie(n[l],c))a[c]=u;else{var h=e[i];if(h&&(l=V[1],n[l]&&n[l][h]&&ie(n[l][h],c)))a[c]=u;else if(k(u)?a[c]=s(u):g(u)?a[c]=u.map((function(e){return b(e)?Ce(e,t,n,!0):s(e)})):b(u)?a[c]=Ce(u,t,n,!0):a[c]=u,r){var d=s(c);c!==d&&(a[d]=a[c],delete a[c])}}}}return a}function Oe(e,t,n){n=n||[];var r={doEscape:function(e){return n.reduce((function(e,t){return e.replace(t[0],t[1])}),e)}};return V.forEach((function(e,n){if(0===n)be(t,e);else if(1===n)for(var i in t[e])be(t[e],i);r[e]=t[e]})),Ce(t,e,r)}function Ie(e,t,n,r){var i=e.component,o=e.metaTemplateKeyName,s=e.contentKeyName;return!0!==n&&!0!==t[o]&&(_(n)&&t[o]&&(n=t[o],t[o]=!0),n?(_(r)&&(r=t[s]),t[s]=w(n)?n.call(i,r):n.replace(/%s/g,r),!0):(delete t[o],!1))}function Te(e,t,n){var r=e.component,i=e.tagIDKeyName,o=e.metaTemplateKeyName,s=e.contentKeyName,a=[];return t.length||n.length?(t.forEach((function(e,t){if(e[i]){var c=ne(n,(function(t){return t[i]===e[i]})),u=n[c];if(-1!==c){if(s in u&&void 0===u[s]||"innerHTML"in u&&void 0===u.innerHTML)return a.push(e),void n.splice(c,1);if(null!==u[s]&&null!==u.innerHTML){var l=e[o];if(l){var h=u[o];if(!h)return Ie({component:r,metaTemplateKeyName:o,contentKeyName:s},u,l),void(u.template=!0);u[s]||Ie({component:r,metaTemplateKeyName:o,contentKeyName:s},u,void 0,e[s])}}else n.splice(c,1)}else a.push(e)}else a.push(e)})),a.concat(n)):a}var Ee=!1;function Se(e,t,n){return n=n||{},void 0===t.title&&delete t.title,B.forEach((function(e){if(t[e])for(var n in t[e])n in t[e]&&void 0===t[e][n]&&(ie(J,n)&&!Ee&&(E("VueMeta: Please note that since v2 the value undefined is not used to indicate boolean attributes anymore, see migration guide for details"),Ee=!0),delete t[e][n])})),i()(e,t,{arrayMerge:function(e,t){return Te(n,e,t)}})}function xe(e,t){return Ae(e||{},t,x)}function Ae(e,t,n){if(n=n||{},t._inactive)return n;e=e||{};var r=e,i=r.keyName,o=t.$metaInfo,s=t.$options,a=t.$children;if(s[i]){var c=o||s[i];y(c)&&(n=Se(n,c,e))}return a.length&&a.forEach((function(t){de(t)&&(n=Ae(e,t,n))})),n}var Re=[];function Pe(e){return"complete"===(e||document).readyState}function Ne(e,t){1===arguments.length&&(t=e,e=""),Re.push([e,t])}function je(e,t,n,r){var i=e.tagIDKeyName,o=!1;return n.forEach((function(e){e[i]&&e.callback&&(o=!0,Ne("".concat(t,"[data-").concat(i,'="').concat(e[i],'"]'),e.callback))})),r&&o?Le():o}function Le(){Pe()?De():document.onreadystatechange=function(){De()}}function De(e){Re.forEach((function(t){var n=t[0],r=t[1],i="".concat(n,'[onload="this.__vm_l=1"]'),o=[];e||(o=re(oe(i))),e&&e.matches(i)&&(o=[e]),o.forEach((function(e){if(!e.__vm_cb){var t=function(){e.__vm_cb=!0,le(e,"onload"),r(e)};e.__vm_l?t():e.__vm_ev||(e.__vm_ev=!0,e.addEventListener("load",t))}}))}))}var Me,Fe={};function Ue(e,t,n,r,i){var o=t||{},s=o.attribute,a=i.getAttribute(s);a&&(Fe[n]=JSON.parse(decodeURI(a)),le(i,s));var c=Fe[n]||{},u=[];for(var l in c)void 0!==c[l]&&e in c[l]&&(u.push(l),r[l]||delete c[l][e]);for(var h in r){var d=c[h];d&&d[e]===r[h]||(u.push(h),void 0!==r[h]&&(c[h]=c[h]||{},c[h][e]=r[h]))}for(var f=0,p=u;f<p.length;f++){var m=p[f],v=c[m],g=[];for(var _ in v)Array.prototype.push.apply(g,[].concat(v[_]));if(g.length){var y=ie(J,m)&&g.some(Boolean)?"":g.filter((function(e){return void 0!==e})).join(" ");i.setAttribute(m,y)}else le(i,m)}Fe[n]=c}function $e(e){(e||""===e)&&(document.title=e)}function qe(e,t,n,r,i,o){var s=t||{},a=s.attribute,c=s.tagIDKeyName,u=Q.slice();u.push(c);var l=[],h={appId:e,attribute:a,type:n,tagIDKeyName:c},d={head:ce(i,h),pbody:ce(o,h,{pbody:!0}),body:ce(o,h,{body:!0})};if(r.length>1){var f=[];r=r.filter((function(e){var t=JSON.stringify(e),n=!ie(f,t);return f.push(t),n}))}r.forEach((function(t){if(!t.skip){var r=document.createElement(n);t.once||r.setAttribute(a,e),Object.keys(t).forEach((function(e){if(!ie(Y,e))if("innerHTML"!==e)if("json"!==e)if("cssText"!==e)if("callback"!==e){var n=ie(u,e)?"data-".concat(e):e,i=ie(J,e);if(!i||t[e]){var o=i?"":t[e];r.setAttribute(n,o)}}else r.onload=function(){return t[e](r)};else r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else r.innerHTML=JSON.stringify(t.json);else r.innerHTML=t.innerHTML}));var i,o=d[ae(t)],s=o.some((function(e,t){return i=t,r.isEqualNode(e)}));s&&(i||0===i)?o.splice(i,1):l.push(r)}}));var p=[];for(var m in d)Array.prototype.push.apply(p,d[m]);return p.forEach((function(e){e.parentNode.removeChild(e)})),l.forEach((function(e){e.hasAttribute("data-body")?o.appendChild(e):e.hasAttribute("data-pbody")?o.insertBefore(e,o.firstChild):i.appendChild(e)})),{oldTags:p,newTags:l}}function Ve(e,t,n){t=t||{};var r=t,i=r.ssrAttribute,o=r.ssrAppId,s={},a=se(s,"html");if(e===o&&a.hasAttribute(i)){le(a,i);var c=!1;return W.forEach((function(e){n[e]&&je(t,e,n[e])&&(c=!0)})),c&&Le(),!1}var u={},l={};for(var h in n)if(!ie(z,h))if("title"!==h){if(ie(B,h)){var d=h.substr(0,4);Ue(e,t,h,n[h],se(s,d))}else if(g(n[h])){var f=qe(e,t,h,n[h],se(s,"head"),se(s,"body")),p=f.oldTags,m=f.newTags;m.length&&(u[h]=m,l[h]=p)}}else $e(n.title);return{tagsAdded:u,tagsRemoved:l}}function ze(e,t,n){return{set:function(r){return Be(e,t,n,r)},remove:function(){return We(e,t,n)}}}function Be(e,t,n,r){if(e&&e.$el)return Ve(t,n,r);Me=Me||{},Me[t]=r}function We(e,t,n){if(e&&e.$el){var r,i={},o=v(B);try{for(o.s();!(r=o.n()).done;){var s=r.value,a=s.substr(0,4);Ue(t,n,s,{},se(i,a))}}catch(c){o.e(c)}finally{o.f()}return ue(n,t)}Me[t]&&(delete Me[t],Ge())}function He(){return Me}function Ge(e){!e&&Object.keys(Me).length||(Me=void 0)}function Ke(e,t,n,r){e=e||{},n=n||[];var i=e,o=i.tagIDKeyName;return t.title&&(t.titleChunk=t.title),t.titleTemplate&&"%s"!==t.titleTemplate&&Ie({component:r,contentKeyName:"title"},t,t.titleTemplate,t.titleChunk||""),t.base&&(t.base=Object.keys(t.base).length?[t.base]:[]),t.meta&&(t.meta=t.meta.filter((function(e,t,n){var r=!!e[o];if(!r)return!0;var i=t===ne(n,(function(t){return t[o]===e[o]}));return i})),t.meta.forEach((function(t){return Ie(e,t)}))),Oe(e,t,n)}function Ye(e,t){if(t=t||{},!e[A])return S(),{};var n=xe(t,e),r=Ke(t,n,ke,e),i=e[A].appId,o=Ve(i,t,r);o&&w(r.changed)&&(r.changed(r,o.tagsAdded,o.tagsRemoved),o={addedTags:o.tagsAdded,removedTags:o.tagsRemoved});var s=He();if(s){for(var a in s)Ve(a,t,s[a]),delete s[a];Ge(!0)}return{vm:e,metaInfo:r,tags:o}}function Qe(e,t,n,r){var i=r.addSsrAttribute,o=e||{},s=o.attribute,a=o.ssrAttribute,c="";for(var u in n){var h=n[u],d=[];for(var f in h)d.push.apply(d,l([].concat(h[f])));d.length&&(c+=J.includes(u)&&d.some(Boolean)?"".concat(u):"".concat(u,'="').concat(d.join(" "),'"'),c+=" ")}return c&&(c+="".concat(s,'="').concat(encodeURI(JSON.stringify(n)),'"')),"htmlAttrs"===t&&i?"".concat(a).concat(c?" ":"").concat(c):c}function Je(e,t,n,r){var i=r||{},o=i.ln;return n?"<".concat(t,">").concat(n,"</").concat(t,">").concat(o?"\n":""):""}function Xe(e,t,n,r){var i=e||{},o=i.ssrAppId,s=i.attribute,a=i.tagIDKeyName,c=r||{},u=c.appId,h=c.isSSR,d=void 0===h||h,f=c.body,p=void 0!==f&&f,m=c.pbody,v=void 0!==m&&m,g=c.ln,_=void 0!==g&&g,y=[a].concat(l(Q));return n&&n.length?n.reduce((function(e,n){if(n.skip)return e;var r=Object.keys(n);if(0===r.length)return e;if(Boolean(n.body)!==p||Boolean(n.pbody)!==v)return e;var i=n.once?"":" ".concat(s,'="').concat(u||(!1===d?"1":o),'"');for(var a in n)if(!K.includes(a)&&!Y.includes(a))if("callback"!==a){var c="";y.includes(a)&&(c="data-");var l=!c&&J.includes(a);l&&!n[a]||(i+=" ".concat(c).concat(a)+(l?"":'="'.concat(n[a],'"')))}else i+=' onload="this.__vm_l=1"';var h="";n.json&&(h=JSON.stringify(n.json));var f=n.innerHTML||n.cssText||h,m=!H.includes(t),g=m&&G.includes(t);return"".concat(e,"<").concat(t).concat(i).concat(!g&&m?"/":"",">")+(g?"".concat(f,"</").concat(t,">"):"")+(_?"\n":"")}),""):""}function Ze(e,t,n){var r={data:t,extraData:void 0,addInfo:function(e,t){this.extraData=this.extraData||{},this.extraData[e]=t},callInjectors:function(e){var t=this.injectors;return(e.body||e.pbody?"":t.title.text(e))+t.meta.text(e)+t.base.text(e)+t.link.text(e)+t.style.text(e)+t.script.text(e)+t.noscript.text(e)},injectors:{head:function(e){return r.callInjectors(u(u({},n),{},{ln:e}))},bodyPrepend:function(e){return r.callInjectors(u(u({},n),{},{ln:e,pbody:!0}))},bodyAppend:function(e){return r.callInjectors(u(u({},n),{},{ln:e,body:!0}))}}},i=function(t){if(z.includes(t))return"continue";r.injectors[t]={text:function(i){var o=!0===i;if(i=u(u({addSsrAttribute:o},n),i),"title"===t)return Je(e,t,r.data[t],i);if(B.includes(t)){var s={},c=r.data[t];if(c){var l=!1===i.isSSR?"1":e.ssrAppId;for(var h in c)s[h]=a({},l,c[h])}if(r.extraData)for(var d in r.extraData){var f=r.extraData[d][t];if(f)for(var p in f)s[p]=u(u({},s[p]),{},a({},d,f[p]))}return Qe(e,t,s,i)}var m=Xe(e,t,r.data[t],i);if(r.extraData)for(var v in r.extraData){var g=r.extraData[v][t],_=Xe(e,t,g,u({appId:v},i));m="".concat(m).concat(_)}return m}}};for(var o in x)i(o);return r}function et(e,t,n){if(!e[A])return S(),{};var r=xe(t,e),i=Ke(t,r,we,e),o=Ze(t,i,n),s=He();if(s){for(var a in s)o.addInfo(a,s[a]),delete s[a];Ge(!0)}return o.injectors}function tt(e){e=e||{};var t=this.$root;return{getOptions:function(){return ye(e)},setOptions:function(n){var r="refreshOnceOnNavigation";n&&n[r]&&(e.refreshOnceOnNavigation=!!n[r],me(t));var i="debounceWait";if(n&&i in n){var o=parseInt(n[i]);isNaN(o)||(e.debounceWait=o)}var s="waitOnDestroyed";n&&s in n&&(e.waitOnDestroyed=!!n[s])},refresh:function(){return Ye(t,e)},inject:function(n){return et(t,e,n)},pause:function(){return fe(t)},resume:function(){return pe(t)},addApp:function(n){return ze(t,n,e)}}}function nt(e,t){t=_e(t);var n=Ke(t,e,we),r=Ze(t,n);return r.injectors}function rt(e,t){e.__vuemeta_installed||(e.__vuemeta_installed=!0,t=_e(t),e.prototype.$meta=function(){return tt.call(this,t)},e.mixin(ge(e,t)))}var it={version:o,install:rt,generate:function(e,t){return nt(e,t)},hasMetaInfo:he};t["a"]=it}).call(this,n("c8ba"))},5926:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?r:n)(t)}},5994:function(e,t,n){"use strict";(function(e){var t=n("7ded"),r=n("1f5a"),i=n("22e5"),o=n("1fd5"),s="@firebase/auth-compat",a="0.2.3";
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
const c=1e3;function u(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function l(){return"http:"===u()||"https:"===u()}function h(e=Object(o["s"])()){return!("file:"!==u()&&"ionic:"!==u()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function d(){return Object(o["C"])()||Object(o["A"])()}function f(){return Object(o["x"])()&&11===(null===document||void 0===document?void 0:document.documentMode)}function p(e=Object(o["s"])()){return/Edge\/\d+/.test(e)}function m(e=Object(o["s"])()){return f()||p(e)}function v(){try{const e=self.localStorage,t=r["s"]();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!m()||Object(o["y"])()}catch(e){return g()&&Object(o["y"])()}return!1}function g(){return"undefined"!==typeof e&&"WorkerGlobalScope"in e&&"importScripts"in e}function _(){return(l()||Object(o["v"])()||h())&&!d()&&v()&&!g()}function y(){return h()&&"undefined"!==typeof document}async function b(){return!!y()&&new Promise(e=>{const t=setTimeout(()=>{e(!1)},c);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}
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
 */const w={LOCAL:"local",NONE:"none",SESSION:"session"},k=r["p"],C="persistence";function O(e,t){k(Object.values(w).includes(t),e,"invalid-persistence-type"),Object(o["C"])()?k(t!==w.SESSION,e,"unsupported-persistence-type"):Object(o["A"])()?k(t===w.NONE,e,"unsupported-persistence-type"):g()?k(t===w.NONE||t===w.LOCAL&&Object(o["y"])(),e,"unsupported-persistence-type"):k(t===w.NONE||v(),e,"unsupported-persistence-type")}async function I(e){await e._initializationPromise;const t=E(),n=r["v"](C,e.config.apiKey,e.name);(null===t||void 0===t?void 0:t.sessionStorage)&&t.sessionStorage.setItem(n,e._getPersistence())}function T(e,t){const n=E();if(!(null===n||void 0===n?void 0:n.sessionStorage))return[];const i=r["v"](C,e,t),o=n.sessionStorage.getItem(i);switch(o){case w.NONE:return[r["L"]];case w.LOCAL:return[r["M"],r["A"]];case w.SESSION:return[r["A"]];default:return[]}}function E(){return"undefined"!==typeof window?window:null}
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
 */const S=r["p"];class x{constructor(){this.browserResolver=r["t"](r["z"]),this.cordovaResolver=r["t"](r["E"]),this.underlyingResolver=null,this._redirectPersistence=r["A"],this._completeRedirectFn=r["u"]}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return y()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return S(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await b();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
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
 */function A(e){return e.unwrap()}function R(e){return e.wrapped()}
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
 */function P(e){return j(e)}function N(e,t){var n;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){const n=t;n.resolver=new M(e,r["J"](e,t))}else if(i){const e=j(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}function j(e){const{_tokenResponse:t}=e instanceof o["c"]?e.customData:e;if(!t)return null;if(!(e instanceof o["c"])&&"temporaryProof"in t&&"phoneNumber"in t)return r["i"].credentialFromResult(e);const n=t.providerId;if(!n||n===r["k"].PASSWORD)return null;let i;switch(n){case r["k"].GOOGLE:i=r["f"];break;case r["k"].FACEBOOK:i=r["d"];break;case r["k"].GITHUB:i=r["e"];break;case r["k"].TWITTER:i=r["o"];break;default:const{oauthIdToken:e,oauthAccessToken:o,oauthTokenSecret:s,pendingToken:a,nonce:c}=t;return o||s||e||a?a?n.startsWith("saml.")?r["m"]._create(n,a):r["g"]._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:e,accessToken:o}):new r["h"](n).credential({idToken:e,accessToken:o,rawNonce:c}):null}return e instanceof o["c"]?i.credentialFromError(e):i.credentialFromResult(e)}function L(e,t){return t.catch(t=>{throw t instanceof o["c"]&&N(e,t),t}).then(e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:P(e),additionalUserInfo:r["I"](e),user:F.getOrCreate(n)}})}async function D(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>L(e,n.confirm(t))}}class M{constructor(e,t){this.resolver=t,this.auth=R(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return L(A(this.auth),this.resolver.resolveSignIn(e))}}
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
 */class F{constructor(e){this._delegate=e,this.multiFactor=r["S"](e)}static getOrCreate(e){return F.USER_MAP.has(e)||F.USER_MAP.set(e,new F(e)),F.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return L(this.auth,r["O"](this._delegate,e))}async linkWithPhoneNumber(e,t){return D(this.auth,r["P"](this._delegate,e,t))}async linkWithPopup(e){return L(this.auth,r["Q"](this._delegate,e,x))}async linkWithRedirect(e){return await I(r["q"](this.auth)),r["R"](this._delegate,e,x)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return L(this.auth,r["T"](this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return D(this.auth,r["U"](this._delegate,e,t))}reauthenticateWithPopup(e){return L(this.auth,r["V"](this._delegate,e,x))}async reauthenticateWithRedirect(e){return await I(r["q"](this.auth)),r["W"](this._delegate,e,x)}sendEmailVerification(e){return r["X"](this._delegate,e)}async unlink(e){return await r["ib"](this._delegate,e),this}updateEmail(e){return r["jb"](this._delegate,e)}updatePassword(e){return r["kb"](this._delegate,e)}updatePhoneNumber(e){return r["lb"](this._delegate,e)}updateProfile(e){return r["mb"](this._delegate,e)}verifyBeforeUpdateEmail(e,t){return r["nb"](this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}F.USER_MAP=new WeakMap;
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
const U=r["p"];class ${constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;U(n,"invalid-api-key",{appName:e.name});let i=[r["L"]];if("undefined"!==typeof window){i=T(n,e.name);for(const e of[r["M"],r["y"],r["A"]])i.includes(e)||i.push(e)}U(n,"invalid-api-key",{appName:e.name});const o="undefined"!==typeof window?x:void 0;this._delegate=t.initialize({options:{persistence:i,popupRedirectResolver:o}}),this._delegate._updateErrorMap(r["G"]),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?F.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){r["D"](this._delegate,e,t)}applyActionCode(e){return r["x"](this._delegate,e)}checkActionCode(e){return r["B"](this._delegate,e)}confirmPasswordReset(e,t){return r["C"](this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return L(this._delegate,r["F"](this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return r["H"](this._delegate,e)}isSignInWithEmailLink(e){return r["N"](this._delegate,e)}async getRedirectResult(){U(_(),this._delegate,"operation-not-supported-in-this-environment");const e=await r["K"](this._delegate,x);return e?L(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){r["w"](this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:o}=q(e,t,n);return this._delegate.onAuthStateChanged(r,i,o)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:o}=q(e,t,n);return this._delegate.onIdTokenChanged(r,i,o)}sendSignInLinkToEmail(e,t){return r["Z"](this._delegate,e,t)}sendPasswordResetEmail(e,t){return r["Y"](this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(O(this._delegate,e),e){case w.SESSION:t=r["A"];break;case w.LOCAL:const e=await r["t"](r["M"])._isAvailable();t=e?r["M"]:r["y"];break;case w.NONE:t=r["L"];break;default:return r["r"]("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return L(this._delegate,r["ab"](this._delegate))}signInWithCredential(e){return L(this._delegate,r["bb"](this._delegate,e))}signInWithCustomToken(e){return L(this._delegate,r["cb"](this._delegate,e))}signInWithEmailAndPassword(e,t){return L(this._delegate,r["db"](this._delegate,e,t))}signInWithEmailLink(e,t){return L(this._delegate,r["eb"](this._delegate,e,t))}signInWithPhoneNumber(e,t){return D(this._delegate,r["fb"](this._delegate,e,t))}async signInWithPopup(e){return U(_(),this._delegate,"operation-not-supported-in-this-environment"),L(this._delegate,r["gb"](this._delegate,e,x))}async signInWithRedirect(e){return U(_(),this._delegate,"operation-not-supported-in-this-environment"),await I(this._delegate),r["hb"](this._delegate,e,x)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return r["ob"](this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function q(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,o=e=>i(e&&F.getOrCreate(e));return{next:o,error:t,complete:n}}
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
 */$.Persistence=w;class V{constructor(){this.providerId="phone",this._delegate=new r["i"](A(t["a"].auth()))}static credential(e,t){return r["i"].credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}V.PHONE_SIGN_IN_METHOD=r["i"].PHONE_SIGN_IN_METHOD,V.PROVIDER_ID=r["i"].PROVIDER_ID;
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
const z=r["p"];class B{constructor(e,n,i=t["a"].app()){var o;z(null===(o=i.options)||void 0===o?void 0:o.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new r["l"](e,n,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
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
 */const W="auth-compat";function H(e){e.INTERNAL.registerComponent(new i["a"](W,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new $(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:r["a"].EMAIL_SIGNIN,PASSWORD_RESET:r["a"].PASSWORD_RESET,RECOVER_EMAIL:r["a"].RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:r["a"].REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:r["a"].VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:r["a"].VERIFY_EMAIL}},EmailAuthProvider:r["c"],FacebookAuthProvider:r["d"],GithubAuthProvider:r["e"],GoogleAuthProvider:r["f"],OAuthProvider:r["h"],SAMLAuthProvider:r["n"],PhoneAuthProvider:V,PhoneMultiFactorGenerator:r["j"],RecaptchaVerifier:B,TwitterAuthProvider:r["o"],Auth:$,AuthCredential:r["b"],Error:o["c"]}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(s,a)}H(t["a"])}).call(this,n("c8ba"))},"59ed":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("0d51"),s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not a function")}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var r=n("83ab"),i=n("1a2d"),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(e,t,n){var r=n("c6b6"),i=n("da84");e.exports="process"==r(i.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,n){"use strict";var r=n("83ab"),i=n("e330"),o=n("c65b"),s=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),h=n("44ad"),d=Object.assign,f=Object.defineProperty,p=i([].concat);e.exports=!d||s((function(){if(r&&1!==d({b:1},d(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=d({},e)[n]||a(d({},t)).join("")!=i}))?function(e,t){var n=l(e),i=arguments.length,s=1,d=c.f,f=u.f;while(i>s){var m,v=h(arguments[s++]),g=d?p(a(v),d(v)):a(v),_=g.length,y=0;while(_>y)m=g[y++],r&&!o(f,v,m)||(n[m]=v[m])}return n}:d},6547:function(e,t,n){var r=n("e330"),i=n("5926"),o=n("577e"),s=n("1d80"),a=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(e){return function(t,n){var r,l,h=o(s(t)),d=i(n),f=h.length;return d<0||d>=f?e?"":void 0:(r=c(h,d),r<55296||r>56319||d+1===f||(l=c(h,d+1))<56320||l>57343?e?a(h,d):r:e?u(h,d,d+2):l-56320+(r-55296<<10)+65536)}};e.exports={codeAt:l(!1),charAt:l(!0)}},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"68ee":function(e,t,n){var r=n("e330"),i=n("d039"),o=n("1626"),s=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.exec(u),m=function(e){if(!o(e))return!1;try{return h(u,l,e),!0}catch(t){return!1}},v=function(e){if(!o(e))return!1;switch(s(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return p||!!f(d,c(e))};e.exports=!h||i((function(){var e;return m(m.call)||!m(Object)||!m((function(){e=!0}))||e}))?v:m},6907:function(e,t,n){"use strict";function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l,h="undefined"!==typeof window,d=function(e,t){var n;return function(){var r=this,i=arguments,o=function(){n=null,e.apply(r,i)};clearTimeout(n),n=setTimeout(o,t)}},f=function(e){var t=e.split("."),n=parseInt(t[0],10);return{major:"number"===typeof n?n:1,minor:parseInt(t[1],10)||0,patch:parseInt(t[2],10)||0}},p=function(e,t){var n=f(e),r=f(t);return n.major>r.major||n.major===r.major&&n.minor>r.minor||n.major===r.major&&n.minor===r.minor&&n.patch>=r.patch},m={xs:0,sm:576,md:768,lg:992,xl:1200},v={mobile:0,tablet:769,desktop:1024,widescreen:1216,fullhd:1408},g={small:0,medium:640,large:1024},_={s:0,m:601,l:993,xl:1201},y={mobile:0,tablet:768,computer:992,large:1201},b={xs:0,sm:640,md:768,lg:1024,xl:1280,"2xl":1536},w={bootstrap:m,bulma:v,foundation:g,materialize:_,"semantic-ui":y,tailwind:b},k="2.6.0",C=410,O=730,I="tailwind",T=100,E=["width","height","touch","portrait","landscape","config"],S="__CUSTOM__",x={bootstrap:["xs","sm","md","lg","xl"],bulma:["mobile","tablet","desktop","widescreen","fullhd"],foundation:["small","medium","large"],materialize:["s","m","l","xl"],"semantic-ui":["mobile","tablet","computer","large"],tailwind:["xs","sm","md","lg","xl"]},A=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";i(this,e),this.callbacks={},this.framework="",this.config=e.parseBreakpoints(t),this.createScreen(),this.init()}return s(e,[{key:"init",value:function(){this.attachResize(),this.checkTouch(),this.setScreenSize()}},{key:"attachResize",value:function(){h&&window.addEventListener("resize",d(this.setScreenSize.bind(this),T))}},{key:"setScreenSize",value:function(){h&&(this.screen.width=window.innerWidth,this.screen.height=window.innerHeight,this.runCallbacks(),this.findCurrentBreakpoint())}},{key:"runCallbacks",value:function(){var e=this;Object.keys(this.callbacks).forEach((function(t){e.screen[t]=e.callbacks[t].call(null,e.screen)}))}},{key:"findCurrentBreakpoint",value:function(){var e=this;this.screen.breakpoint=this.config.breakpointsOrder.reduce((function(t,n){return e.screen[n]?n:t}),this.config.breakpointsOrder[0])}},{key:"checkTouch",value:function(){h&&(this.screen.touch="ontouchstart"in window)}},{key:"createScreen",value:function(){var e=this,t=Object.keys(this.config).filter((function(e){return"breakpointsOrder"!==e}));this.screen=l.observable({width:C,height:O,touch:!0,portrait:!0,landscape:!1,breakpoint:this.config.breakpointsOrder[0],breakpointsOrder:this.config.breakpointsOrder,config:this.config}),this.findCurrentBreakpoint(),t.forEach((function(t){if(E.indexOf(t)>=0)throw new Error('Invalid breakpoint name: "'.concat(t,'". This key is reserved.'));l.set(e.screen,t,!1)})),h&&this.initMediaQueries()}},{key:"initMediaQueries",value:function(){var e=this;Object.keys(this.config).filter((function(e){return"breakpointsOrder"!==e})).forEach((function(t){var n=null;if("breakpointsOrder"!==t){var r=e.config[t];"function"===typeof r?e.callbacks[t]=r:"number"===typeof r?n="".concat(r,"px"):"string"===typeof r?n=r:e.screen[t]=r}if(n){var i=window.matchMedia("(min-width: ".concat(n,")"));"addEventListener"in i?i.addEventListener("change",(function(n){return e.mediaStateChanged(t,n.matches)})):i.addListener((function(n){return e.mediaStateChanged(t,n.matches)})),e.mediaStateChanged(t,i.matches)}}));var t=window.matchMedia("(orientation: portrait)");"addEventListener"in t?t.addEventListener("change",(function(t){e.mediaStateChanged("portrait",t.matches),e.mediaStateChanged("landscape",!t.matches)})):t.addListener((function(t){e.mediaStateChanged("portrait",t.matches),e.mediaStateChanged("landscape",!t.matches)})),this.mediaStateChanged("portrait",t.matches),this.mediaStateChanged("landscape",!t.matches)}},{key:"mediaStateChanged",value:function(e,t){l.set(this.screen,e,t)}}],[{key:"parseBreakpoints",value:function(t){return"object"===r(t)?t.extend?(this.framework=t.extend.toString(),delete t.extend,Object.assign({},t,e.getBreakpoints())):(this.framework=S,u({breakpointsOrder:Object.keys(t).filter((function(e){return"breakpointsOrder"!==e}))},t)):(this.framework=t.toString(),e.getBreakpoints())}},{key:"getBreakpoints",value:function(){if(this.framework||(this.framework=I),!w[this.framework])throw new Error('Cannot find grid breakpoints for framework "'.concat(this.framework,'"'));return u({},w[this.framework],{breakpointsOrder:x[this.framework]})}},{key:"install",value:function(t,n){if(l=t,!p(l.version,k))throw Error("VueScreen requires at least Vue ".concat(k));l.prototype.$screen=new e(n).screen}}]),e}();h&&window.Vue&&window.Vue.use(A),t["a"]=A},"69f3":function(e,t,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),h=n("1a2d"),d=n("c6cd"),f=n("f772"),p=n("d012"),m="Object already initialized",v=a.TypeError,g=a.WeakMap,_=function(e){return o(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw v("Incompatible receiver, "+e+" required");return n}};if(s||d.state){var b=d.state||(d.state=new g),w=c(b.get),k=c(b.has),C=c(b.set);r=function(e,t){if(k(b,e))throw new v(m);return t.facade=e,C(b,e,t),t},i=function(e){return w(b,e)||{}},o=function(e){return k(b,e)}}else{var O=f("state");p[O]=!0,r=function(e,t){if(h(e,O))throw new v(m);return t.facade=e,l(e,O,t),t},i=function(e){return h(e,O)?e[O]:{}},o=function(e){return h(e,O)}}e.exports={set:r,get:i,has:o,enforce:_,getterFor:y}},"6eeb":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("1a2d"),s=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,d=u.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,v=c&&void 0!==c.name?c.name:t;i(n)&&("Symbol("===String(v).slice(0,7)&&(v="["+String(v).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||l&&n.name!==v)&&s(n,"name",v),u=d(n),u.source||(u.source=f.join("string"==typeof v?v:""))),e!==r?(h?!m&&e[t]&&(p=!0):delete e[t],p?e[t]=n:s(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},7418:function(e,t){t.f=Object.getOwnPropertySymbols},"746f":function(e,t,n){var r=n("428f"),i=n("1a2d"),o=n("e538"),s=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});i(t,e)||s(t,e,{value:o.f(e)})}},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(e,t,n){var r=n("cc12"),i=r("span").classList,o=i&&i.constructor&&i.constructor.prototype;e.exports=o===Object.prototype?void 0:o},"7b0b":function(e,t,n){var r=n("da84"),i=n("1d80"),o=r.Object;e.exports=function(e){return o(i(e))}},"7c73":function(e,t,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",m=l("IE_PROTO"),v=function(){},g=function(e){return d+p+h+e+d+"/"+p+h},_=function(e){e.write(g("")),e.close();var t=e.parentWindow.Object;return e=null,t},y=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(g("document.F=Object")),e.close(),e.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}b="undefined"!=typeof document?document.domain&&r?_(r):y():_(r);var e=s.length;while(e--)delete b[f][s[e]];return b()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(v[f]=i(e),n=new v,v[f]=null,n[m]=e):n=b(),void 0===t?n:o(n,t)}},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),i=n("c65b"),o=n("c430"),s=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),h=n("d44e"),d=n("9112"),f=n("6eeb"),p=n("b622"),m=n("3f8c"),v=n("ae93"),g=s.PROPER,_=s.CONFIGURABLE,y=v.IteratorPrototype,b=v.BUGGY_SAFARI_ITERATORS,w=p("iterator"),k="keys",C="values",O="entries",I=function(){return this};e.exports=function(e,t,n,s,p,v,T){c(n,t,s);var E,S,x,A=function(e){if(e===p&&L)return L;if(!b&&e in N)return N[e];switch(e){case k:return function(){return new n(this,e)};case C:return function(){return new n(this,e)};case O:return function(){return new n(this,e)}}return function(){return new n(this)}},R=t+" Iterator",P=!1,N=e.prototype,j=N[w]||N["@@iterator"]||p&&N[p],L=!b&&j||A(p),D="Array"==t&&N.entries||j;if(D&&(E=u(D.call(new e)),E!==Object.prototype&&E.next&&(o||u(E)===y||(l?l(E,y):a(E[w])||f(E,w,I)),h(E,R,!0,!0),o&&(m[R]=I))),g&&p==C&&j&&j.name!==C&&(!o&&_?d(N,"name",C):(P=!0,L=function(){return i(j,this)})),p)if(S={values:A(C),keys:v?L:A(k),entries:A(O)},T)for(x in S)(b||P||!(x in N))&&f(N,x,S[x]);else r({target:t,proto:!0,forced:b||P},S);return o&&!T||N[w]===L||f(N,w,L,{name:p}),m[t]=L,S}},"7ded":function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n("1fd5"),i=n("22e5"),o=n("589b"),s=n("e691");
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
class a{constructor(e,t){this._delegate=e,this.firebase=t,Object(o["_addComponent"])(e,new i["a"]("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(o["deleteApp"])(this._delegate)))}_getService(e,t=o["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=o["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(o["_addComponent"])(this._delegate,e)}_addOrOverwriteComponent(e){Object(o["_addOrOverwriteComponent"])(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
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
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r["b"]("app-compat","Firebase",c);
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
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:s,registerVersion:o["registerVersion"],setLogLevel:o["setLogLevel"],onLog:o["onLog"],apps:null,SDK_VERSION:o["SDK_VERSION"],INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:o}};function i(e){delete t[e]}function s(e){if(e=e||o["_DEFAULT_ENTRY_NAME"],!Object(r["j"])(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,s={}){const a=o["initializeApp"](i,s);if(Object(r["j"])(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map(e=>t[e])}function l(t){const i=t.name,a=i.replace("-compat","");if(o["_registerComponent"](t)&&"PUBLIC"===t.type){const o=(e=s())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&Object(r["o"])(o,t.serviceProps),n[a]=o,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),s["App"]=e,n}
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
 */function h(){const e=l(a);function t(t){Object(r["o"])(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r["l"],ErrorFactory:r["b"],deepExtend:r["o"]}),e}const d=h(),f=new s["b"]("@firebase/app-compat"),p="@firebase/app-compat",m="0.1.9";
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
function v(e){Object(o["registerVersion"])(p,m,e)}
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
 */if(Object(r["u"])()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const g=d;v()},"7f9a":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("8925"),s=r.WeakMap;e.exports=i(s)&&/native code/.test(o(s))},"825a":function(e,t,n){var r=n("da84"),i=n("861d"),o=r.String,s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not an object")}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(e,t,n){"use strict";var r=n("a04b"),i=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var s=r(t);s in e?i.f(e,s,o(0,n)):e[s]=n}},"861d":function(e,t,n){var r=n("1626");e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},8832:function(e,t,n){!function(t,n){e.exports=n()}(0,(function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n(1),o=r(i);e.exports=o.default},function(e,t,n){n(2);var r=n(6)(n(7),n(8),"data-v-82963a40",null);e.exports=r.exports},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.id,r,""]]),n(5)(r,{}),r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,"a[data-v-82963a40]{cursor:pointer}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=h[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(c(r.parts[o],t))}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(c(r.parts[o],t));h[r.id]={id:r.id,refs:1,parts:s}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],o=i[0],s=i[1],a=i[2],c=i[3],u={css:s,media:a,sourceMap:c};n[o]?n[o].parts.push(u):t.push(n[o]={id:o,parts:[u]})}return t}function o(e,t){var n=p(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function c(e,t){var n,r,i;if(t.singleton){var o=v++;n=m||(m=a(t)),r=u.bind(null,n,o,!1),i=u.bind(null,n,o,!0)}else n=a(t),r=l.bind(null,n),i=function(){s(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function u(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function l(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var h={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},f=d((function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())})),p=d((function(){return document.head||document.getElementsByTagName("head")[0]})),m=null,v=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=f()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return r(n,t),function(e){for(var o=[],s=0;s<n.length;s++){var a=n[s],c=h[a.id];c.refs--,o.push(c)}if(e){var u=i(e);r(u,t)}for(s=0;s<o.length;s++){c=o[s];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete h[c.id]}}}};var _=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,r){var i,o=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,o=e.default);var a="function"==typeof o?o.options:o;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var c=a.computed||(a.computed={});Object.keys(r).forEach((function(e){var t=r[e];c[e]=function(){return t}}))}return{esModule:i,exports:o,options:a}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{value:{type:Number},pageCount:{type:Number,required:!0},forcePage:{type:Number},clickHandler:{type:Function,default:function(){}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"…"},containerClass:{type:String},pageClass:{type:String},pageLinkClass:{type:String},prevClass:{type:String},prevLinkClass:{type:String},nextClass:{type:String},nextLinkClass:{type:String},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},beforeUpdate:function(){void 0!==this.forcePage&&this.forcePage!==this.selected&&(this.selected=this.forcePage)},computed:{selected:{get:function(){return this.value||this.innerValue},set:function(e){this.innerValue=e}},pages:function(){var e=this,t={};if(this.pageCount<=this.pageRange)for(var n=0;n<this.pageCount;n++){var r={index:n,content:n+1,selected:n===this.selected-1};t[n]=r}else{for(var i=Math.floor(this.pageRange/2),o=function(n){var r={index:n,content:n+1,selected:n===e.selected-1};t[n]=r},s=function(e){var n={disabled:!0,breakView:!0};t[e]=n},a=0;a<this.marginPages;a++)o(a);var c=0;this.selected-i>0&&(c=this.selected-1-i);var u=c+this.pageRange-1;u>=this.pageCount&&(u=this.pageCount-1,c=u-this.pageRange+1);for(var l=c;l<=u&&l<=this.pageCount-1;l++)o(l);c>this.marginPages&&s(c-1),u+1<this.pageCount-this.marginPages&&s(u+1);for(var h=this.pageCount-1;h>=this.pageCount-this.marginPages;h--)o(h)}return t}},data:function(){return{innerValue:1}},methods:{handlePageSelected:function(e){this.selected!==e&&(this.innerValue=e,this.$emit("input",e),this.clickHandler(e))},prevPage:function(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected:function(){return 1===this.selected},lastPageSelected:function(){return this.selected===this.pageCount||0===this.pageCount},selectFirstPage:function(){this.selected<=1||this.handlePageSelected(1)},selectLastPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.noLiSurround?n("div",{class:e.containerClass},[e.firstLastButton?n("a",{class:[e.pageLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){e.selectFirstPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.selectFirstPage():null}}}):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():n("a",{class:[e.prevLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){e.prevPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.prevPage():null}}}),e._v(" "),e._l(e.pages,(function(t){return[t.breakView?n("a",{class:[e.pageLinkClass,e.breakViewLinkClass,t.disabled?e.disabledClass:""],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?n("a",{class:[e.pageLinkClass,t.selected?e.activeClass:"",e.disabledClass],attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:[e.pageLinkClass,t.selected?e.activeClass:""],attrs:{tabindex:"0"},on:{click:function(n){e.handlePageSelected(t.index+1)},keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13)?void e.handlePageSelected(t.index+1):null}}},[e._v(e._s(t.content))])]})),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():n("a",{class:[e.nextLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){e.nextPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.nextPage():null}}}),e._v(" "),e.firstLastButton?n("a",{class:[e.pageLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){e.selectLastPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.selectLastPage():null}}}):e._e()],2):n("ul",{class:e.containerClass},[e.firstLastButton?n("li",{class:[e.pageClass,e.firstPageSelected()?e.disabledClass:""]},[n("a",{class:e.pageLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){e.selectFirstPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.selectFirstPage():null}}})]):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():n("li",{class:[e.prevClass,e.firstPageSelected()?e.disabledClass:""]},[n("a",{class:e.prevLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){e.prevPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.prevPage():null}}})]),e._v(" "),e._l(e.pages,(function(t){return n("li",{class:[e.pageClass,t.selected?e.activeClass:"",t.disabled?e.disabledClass:"",t.breakView?e.breakViewClass:""]},[t.breakView?n("a",{class:[e.pageLinkClass,e.breakViewLinkClass],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"},on:{click:function(n){e.handlePageSelected(t.index+1)},keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13)?void e.handlePageSelected(t.index+1):null}}},[e._v(e._s(t.content))])])})),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():n("li",{class:[e.nextClass,e.lastPageSelected()?e.disabledClass:""]},[n("a",{class:e.nextLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){e.nextPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.nextPage():null}}})]),e._v(" "),e.firstLastButton?n("li",{class:[e.pageClass,e.lastPageSelected()?e.disabledClass:""]},[n("a",{class:e.pageLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){e.selectLastPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.selectLastPage():null}}})]):e._e()],2)},staticRenderFns:[]}}])}))},8925:function(e,t,n){var r=n("e330"),i=n("1626"),o=n("c6cd"),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"8c4f":function(e,t,n){"use strict";
/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
  */function r(e,t){for(var n in t)e[n]=t[n];return e}var i=/[!'()*]/g,o=function(e){return"%"+e.charCodeAt(0).toString(16)},s=/%2C/g,a=function(e){return encodeURIComponent(e).replace(i,o).replace(s,",")};function c(e){try{return decodeURIComponent(e)}catch(t){0}return e}function u(e,t,n){void 0===t&&(t={});var r,i=n||h;try{r=i(e||"")}catch(a){r={}}for(var o in t){var s=t[o];r[o]=Array.isArray(s)?s.map(l):l(s)}return r}var l=function(e){return null==e||"object"===typeof e?e:String(e)};function h(e){var t={};return e=e.trim().replace(/^(\?|#|&)/,""),e?(e.split("&").forEach((function(e){var n=e.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===t[r]?t[r]=i:Array.isArray(t[r])?t[r].push(i):t[r]=[t[r],i]})),t):t}function d(e){var t=e?Object.keys(e).map((function(t){var n=e[t];if(void 0===n)return"";if(null===n)return a(t);if(Array.isArray(n)){var r=[];return n.forEach((function(e){void 0!==e&&(null===e?r.push(a(t)):r.push(a(t)+"="+a(e)))})),r.join("&")}return a(t)+"="+a(n)})).filter((function(e){return e.length>0})).join("&"):null;return t?"?"+t:""}var f=/\/?$/;function p(e,t,n,r){var i=r&&r.options.stringifyQuery,o=t.query||{};try{o=m(o)}catch(a){}var s={name:t.name||e&&e.name,meta:e&&e.meta||{},path:t.path||"/",hash:t.hash||"",query:o,params:t.params||{},fullPath:_(t,i),matched:e?g(e):[]};return n&&(s.redirectedFrom=_(n,i)),Object.freeze(s)}function m(e){if(Array.isArray(e))return e.map(m);if(e&&"object"===typeof e){var t={};for(var n in e)t[n]=m(e[n]);return t}return e}var v=p(null,{path:"/"});function g(e){var t=[];while(e)t.unshift(e),e=e.parent;return t}function _(e,t){var n=e.path,r=e.query;void 0===r&&(r={});var i=e.hash;void 0===i&&(i="");var o=t||d;return(n||"/")+o(r)+i}function y(e,t,n){return t===v?e===t:!!t&&(e.path&&t.path?e.path.replace(f,"")===t.path.replace(f,"")&&(n||e.hash===t.hash&&b(e.query,t.query)):!(!e.name||!t.name)&&(e.name===t.name&&(n||e.hash===t.hash&&b(e.query,t.query)&&b(e.params,t.params))))}function b(e,t){if(void 0===e&&(e={}),void 0===t&&(t={}),!e||!t)return e===t;var n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((function(n,i){var o=e[n],s=r[i];if(s!==n)return!1;var a=t[n];return null==o||null==a?o===a:"object"===typeof o&&"object"===typeof a?b(o,a):String(o)===String(a)}))}function w(e,t){return 0===e.path.replace(f,"/").indexOf(t.path.replace(f,"/"))&&(!t.hash||e.hash===t.hash)&&k(e.query,t.query)}function k(e,t){for(var n in t)if(!(n in e))return!1;return!0}function C(e){for(var t=0;t<e.matched.length;t++){var n=e.matched[t];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var s=0;s<o.length;s++)i._isBeingDestroyed||o[s](i)}}}}var O={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,t){var n=t.props,i=t.children,o=t.parent,s=t.data;s.routerView=!0;var a=o.$createElement,c=n.name,u=o.$route,l=o._routerViewCache||(o._routerViewCache={}),h=0,d=!1;while(o&&o._routerRoot!==o){var f=o.$vnode?o.$vnode.data:{};f.routerView&&h++,f.keepAlive&&o._directInactive&&o._inactive&&(d=!0),o=o.$parent}if(s.routerViewDepth=h,d){var p=l[c],m=p&&p.component;return m?(p.configProps&&I(m,s,p.route,p.configProps),a(m,s,i)):a()}var v=u.matched[h],g=v&&v.components[c];if(!v||!g)return l[c]=null,a();l[c]={component:g},s.registerRouteInstance=function(e,t){var n=v.instances[c];(t&&n!==e||!t&&n===e)&&(v.instances[c]=t)},(s.hook||(s.hook={})).prepatch=function(e,t){v.instances[c]=t.componentInstance},s.hook.init=function(e){e.data.keepAlive&&e.componentInstance&&e.componentInstance!==v.instances[c]&&(v.instances[c]=e.componentInstance),C(u)};var _=v.props&&v.props[c];return _&&(r(l[c],{route:u,configProps:_}),I(g,s,u,_)),a(g,s,i)}};function I(e,t,n,i){var o=t.props=T(n,i);if(o){o=t.props=r({},o);var s=t.attrs=t.attrs||{};for(var a in o)e.props&&a in e.props||(s[a]=o[a],delete o[a])}}function T(e,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(e);case"boolean":return t?e.params:void 0;default:0}}function E(e,t,n){var r=e.charAt(0);if("/"===r)return e;if("?"===r||"#"===r)return t+e;var i=t.split("/");n&&i[i.length-1]||i.pop();for(var o=e.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function S(e){var t="",n="",r=e.indexOf("#");r>=0&&(t=e.slice(r),e=e.slice(0,r));var i=e.indexOf("?");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{path:e,query:n,hash:t}}function x(e){return e.replace(/\/+/g,"/")}var A=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},R=Q,P=M,N=F,j=q,L=Y,D=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function M(e,t){var n,r=[],i=0,o=0,s="",a=t&&t.delimiter||"/";while(null!=(n=D.exec(e))){var c=n[0],u=n[1],l=n.index;if(s+=e.slice(o,l),o=l+c.length,u)s+=u[1];else{var h=e[o],d=n[2],f=n[3],p=n[4],m=n[5],v=n[6],g=n[7];s&&(r.push(s),s="");var _=null!=d&&null!=h&&h!==d,y="+"===v||"*"===v,b="?"===v||"*"===v,w=n[2]||a,k=p||m;r.push({name:f||i++,prefix:d||"",delimiter:w,optional:b,repeat:y,partial:_,asterisk:!!g,pattern:k?z(k):g?".*":"[^"+V(w)+"]+?"})}}return o<e.length&&(s+=e.substr(o)),s&&r.push(s),r}function F(e,t){return q(M(e,t),t)}function U(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function $(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function q(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"===typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",W(t)));return function(t,r){for(var i="",o=t||{},s=r||{},a=s.pretty?U:encodeURIComponent,c=0;c<e.length;c++){var u=e[c];if("string"!==typeof u){var l,h=o[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(A(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=a(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?$(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function V(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function z(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function B(e,t){return e.keys=t,e}function W(e){return e&&e.sensitive?"":"i"}function H(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return B(e,t)}function G(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(Q(e[i],t,n).source);var o=new RegExp("(?:"+r.join("|")+")",W(n));return B(o,t)}function K(e,t,n){return Y(M(e,n),t,n)}function Y(e,t,n){A(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,o="",s=0;s<e.length;s++){var a=e[s];if("string"===typeof a)o+=V(a);else{var c=V(a.prefix),u="(?:"+a.pattern+")";t.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}var l=V(n.delimiter||"/"),h=o.slice(-l.length)===l;return r||(o=(h?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=i?"$":r&&h?"":"(?="+l+"|$)",B(new RegExp("^"+o,W(n)),t)}function Q(e,t,n){return A(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?H(e,t):A(e)?G(e,t,n):K(e,t,n)}R.parse=P,R.compile=N,R.tokensToFunction=j,R.tokensToRegExp=L;var J=Object.create(null);function X(e,t,n){t=t||{};try{var r=J[e]||(J[e]=R.compile(e));return"string"===typeof t.pathMatch&&(t[0]=t.pathMatch),r(t,{pretty:!0})}catch(i){return""}finally{delete t[0]}}function Z(e,t,n,i){var o="string"===typeof e?{path:e}:e;if(o._normalized)return o;if(o.name){o=r({},e);var s=o.params;return s&&"object"===typeof s&&(o.params=r({},s)),o}if(!o.path&&o.params&&t){o=r({},o),o._normalized=!0;var a=r(r({},t.params),o.params);if(t.name)o.name=t.name,o.params=a;else if(t.matched.length){var c=t.matched[t.matched.length-1].path;o.path=X(c,a,"path "+t.path)}else 0;return o}var l=S(o.path||""),h=t&&t.path||"/",d=l.path?E(l.path,h,n||o.append):h,f=u(l.query,o.query,i&&i.options.parseQuery),p=o.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var ee,te=[String,Object],ne=[String,Array],re=function(){},ie={name:"RouterLink",props:{to:{type:te,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:ne,default:"click"}},render:function(e){var t=this,n=this.$router,i=this.$route,o=n.resolve(this.to,i,this.append),s=o.location,a=o.route,c=o.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==l?"router-link-active":l,f=null==h?"router-link-exact-active":h,m=null==this.activeClass?d:this.activeClass,v=null==this.exactActiveClass?f:this.exactActiveClass,g=a.redirectedFrom?p(null,Z(a.redirectedFrom),null,n):a;u[v]=y(i,g,this.exactPath),u[m]=this.exact||this.exactPath?u[v]:w(i,g);var _=u[v]?this.ariaCurrentValue:null,b=function(e){oe(e)&&(t.replace?n.replace(s,re):n.push(s,re))},k={click:oe};Array.isArray(this.event)?this.event.forEach((function(e){k[e]=b})):k[this.event]=b;var C={class:u},O=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:b,isActive:u[m],isExactActive:u[v]});if(O){if(1===O.length)return O[0];if(O.length>1||!O.length)return 0===O.length?e():e("span",{},O)}if("a"===this.tag)C.on=k,C.attrs={href:c,"aria-current":_};else{var I=se(this.$slots.default);if(I){I.isStatic=!1;var T=I.data=r({},I.data);for(var E in T.on=T.on||{},T.on){var S=T.on[E];E in k&&(T.on[E]=Array.isArray(S)?S:[S])}for(var x in k)x in T.on?T.on[x].push(k[x]):T.on[x]=b;var A=I.data.attrs=r({},I.data.attrs);A.href=c,A["aria-current"]=_}else C.on=k}return e(this.tag,C,this.$slots.default)}};function oe(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function se(e){if(e)for(var t,n=0;n<e.length;n++){if(t=e[n],"a"===t.tag)return t;if(t.children&&(t=se(t.children)))return t}}function ae(e){if(!ae.installed||ee!==e){ae.installed=!0,ee=e;var t=function(e){return void 0!==e},n=function(e,n){var r=e.$options._parentVnode;t(r)&&t(r=r.data)&&t(r=r.registerRouteInstance)&&r(e,n)};e.mixin({beforeCreate:function(){t(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",O),e.component("RouterLink",ie);var r=e.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ce="undefined"!==typeof window;function ue(e,t,n,r,i){var o=t||[],s=n||Object.create(null),a=r||Object.create(null);e.forEach((function(e){le(o,s,a,e,i)}));for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:s,nameMap:a}}function le(e,t,n,r,i,o){var s=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=de(s,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:he(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:o,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=o?x(o+"/"+r.path):void 0;le(e,t,n,r,l,i)})),t[l.path]||(e.push(l.path),t[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:r.children};le(e,t,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function he(e,t){var n=R(e,[],t);return n}function de(e,t,n){return n||(e=e.replace(/\/$/,"")),"/"===e[0]||null==t?e:x(t.path+"/"+e)}function fe(e,t){var n=ue(e),r=n.pathList,i=n.pathMap,o=n.nameMap;function s(e){ue(e,r,i,o)}function a(e,t){var n="object"!==typeof e?o[e]:void 0;ue([t||e],r,i,o,n),n&&n.alias.length&&ue(n.alias.map((function(e){return{path:e,children:[t]}})),r,i,o,n)}function c(){return r.map((function(e){return i[e]}))}function u(e,n,s){var a=Z(e,n,!1,t),c=a.name;if(c){var u=o[c];if(!u)return d(null,a);var l=u.regex.keys.filter((function(e){return!e.optional})).map((function(e){return e.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=X(u.path,a.params,'named route "'+c+'"'),d(u,a,s)}if(a.path){a.params={};for(var f=0;f<r.length;f++){var p=r[f],m=i[p];if(pe(m.regex,a.path,a.params))return d(m,a,s)}}return d(null,a)}function l(e,n){var r=e.redirect,i="function"===typeof r?r(p(e,n,null,t)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return d(null,n);var s=i,a=s.name,c=s.path,l=n.query,h=n.hash,f=n.params;if(l=s.hasOwnProperty("query")?s.query:l,h=s.hasOwnProperty("hash")?s.hash:h,f=s.hasOwnProperty("params")?s.params:f,a){o[a];return u({_normalized:!0,name:a,query:l,hash:h,params:f},void 0,n)}if(c){var m=me(c,e),v=X(m,f,'redirect route with path "'+m+'"');return u({_normalized:!0,path:v,query:l,hash:h},void 0,n)}return d(null,n)}function h(e,t,n){var r=X(n,t.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var o=i.matched,s=o[o.length-1];return t.params=i.params,d(s,t)}return d(null,t)}function d(e,n,r){return e&&e.redirect?l(e,r||n):e&&e.matchAs?h(e,n,e.matchAs):p(e,n,r,t)}return{match:u,addRoute:a,getRoutes:c,addRoutes:s}}function pe(e,t,n){var r=t.match(e);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var s=e.keys[i-1];s&&(n[s.name||"pathMatch"]="string"===typeof r[i]?c(r[i]):r[i])}return!0}function me(e,t){return E(e,t.parent?t.parent.path:"/",!0)}var ve=ce&&window.performance&&window.performance.now?window.performance:Date;function ge(){return ve.now().toFixed(3)}var _e=ge();function ye(){return _e}function be(e){return _e=e}var we=Object.create(null);function ke(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(e,""),n=r({},window.history.state);return n.key=ye(),window.history.replaceState(n,"",t),window.addEventListener("popstate",Ie),function(){window.removeEventListener("popstate",Ie)}}function Ce(e,t,n,r){if(e.app){var i=e.options.scrollBehavior;i&&e.app.$nextTick((function(){var o=Te(),s=i.call(e,t,n,r?o:null);s&&("function"===typeof s.then?s.then((function(e){Ne(e,o)})).catch((function(e){0})):Ne(s,o))}))}}function Oe(){var e=ye();e&&(we[e]={x:window.pageXOffset,y:window.pageYOffset})}function Ie(e){Oe(),e.state&&e.state.key&&be(e.state.key)}function Te(){var e=ye();if(e)return we[e]}function Ee(e,t){var n=document.documentElement,r=n.getBoundingClientRect(),i=e.getBoundingClientRect();return{x:i.left-r.left-t.x,y:i.top-r.top-t.y}}function Se(e){return Re(e.x)||Re(e.y)}function xe(e){return{x:Re(e.x)?e.x:window.pageXOffset,y:Re(e.y)?e.y:window.pageYOffset}}function Ae(e){return{x:Re(e.x)?e.x:0,y:Re(e.y)?e.y:0}}function Re(e){return"number"===typeof e}var Pe=/^#\d/;function Ne(e,t){var n="object"===typeof e;if(n&&"string"===typeof e.selector){var r=Pe.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(r){var i=e.offset&&"object"===typeof e.offset?e.offset:{};i=Ae(i),t=Ee(r,i)}else Se(e)&&(t=xe(e))}else n&&Se(e)&&(t=xe(e));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:e.behavior}):window.scrollTo(t.x,t.y))}var je=ce&&function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Le(e,t){Oe();var n=window.history;try{if(t){var i=r({},n.state);i.key=ye(),n.replaceState(i,"",e)}else n.pushState({key:be(ge())},"",e)}catch(o){window.location[t?"replace":"assign"](e)}}function De(e){Le(e,!0)}function Me(e,t,n){var r=function(i){i>=e.length?n():e[i]?t(e[i],(function(){r(i+1)})):r(i+1)};r(0)}var Fe={redirected:2,aborted:4,cancelled:8,duplicated:16};function Ue(e,t){return ze(e,t,Fe.redirected,'Redirected when going from "'+e.fullPath+'" to "'+We(t)+'" via a navigation guard.')}function $e(e,t){var n=ze(e,t,Fe.duplicated,'Avoided redundant navigation to current location: "'+e.fullPath+'".');return n.name="NavigationDuplicated",n}function qe(e,t){return ze(e,t,Fe.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function Ve(e,t){return ze(e,t,Fe.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}function ze(e,t,n,r){var i=new Error(r);return i._isRouter=!0,i.from=e,i.to=t,i.type=n,i}var Be=["params","query","hash"];function We(e){if("string"===typeof e)return e;if("path"in e)return e.path;var t={};return Be.forEach((function(n){n in e&&(t[n]=e[n])})),JSON.stringify(t,null,2)}function He(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function Ge(e,t){return He(e)&&e._isRouter&&(null==t||e.type===t)}function Ke(e){return function(t,n,r){var i=!1,o=0,s=null;Ye(e,(function(e,t,n,a){if("function"===typeof e&&void 0===e.cid){i=!0,o++;var c,u=Ze((function(t){Xe(t)&&(t=t.default),e.resolved="function"===typeof t?t:ee.extend(t),n.components[a]=t,o--,o<=0&&r()})),l=Ze((function(e){var t="Failed to resolve async component "+a+": "+e;s||(s=He(e)?e:new Error(t),r(s))}));try{c=e(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Ye(e,t){return Qe(e.map((function(e){return Object.keys(e.components).map((function(n){return t(e.components[n],e.instances[n],e,n)}))})))}function Qe(e){return Array.prototype.concat.apply([],e)}var Je="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Xe(e){return e.__esModule||Je&&"Module"===e[Symbol.toStringTag]}function Ze(e){var t=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!t)return t=!0,e.apply(this,n)}}var et=function(e,t){this.router=e,this.base=tt(t),this.current=v,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function tt(e){if(!e)if(ce){var t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^https?:\/\/[^\/]+/,"")}else e="/";return"/"!==e.charAt(0)&&(e="/"+e),e.replace(/\/$/,"")}function nt(e,t){var n,r=Math.max(e.length,t.length);for(n=0;n<r;n++)if(e[n]!==t[n])break;return{updated:t.slice(0,n),activated:t.slice(n),deactivated:e.slice(n)}}function rt(e,t,n,r){var i=Ye(e,(function(e,r,i,o){var s=it(e,t);if(s)return Array.isArray(s)?s.map((function(e){return n(e,r,i,o)})):n(s,r,i,o)}));return Qe(r?i.reverse():i)}function it(e,t){return"function"!==typeof e&&(e=ee.extend(e)),e.options[t]}function ot(e){return rt(e,"beforeRouteLeave",at,!0)}function st(e){return rt(e,"beforeRouteUpdate",at)}function at(e,t){if(t)return function(){return e.apply(t,arguments)}}function ct(e){return rt(e,"beforeRouteEnter",(function(e,t,n,r){return ut(e,n,r)}))}function ut(e,t,n){return function(r,i,o){return e(r,i,(function(e){"function"===typeof e&&(t.enteredCbs[n]||(t.enteredCbs[n]=[]),t.enteredCbs[n].push(e)),o(e)}))}}et.prototype.listen=function(e){this.cb=e},et.prototype.onReady=function(e,t){this.ready?e():(this.readyCbs.push(e),t&&this.readyErrorCbs.push(t))},et.prototype.onError=function(e){this.errorCbs.push(e)},et.prototype.transitionTo=function(e,t,n){var r,i=this;try{r=this.router.match(e,this.current)}catch(s){throw this.errorCbs.forEach((function(e){e(s)})),s}var o=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),t&&t(r),i.ensureURL(),i.router.afterHooks.forEach((function(e){e&&e(r,o)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(e){e(r)})))}),(function(e){n&&n(e),e&&!i.ready&&(Ge(e,Fe.redirected)&&o===v||(i.ready=!0,i.readyErrorCbs.forEach((function(t){t(e)}))))}))},et.prototype.confirmTransition=function(e,t,n){var r=this,i=this.current;this.pending=e;var o=function(e){!Ge(e)&&He(e)&&(r.errorCbs.length?r.errorCbs.forEach((function(t){t(e)})):console.error(e)),n&&n(e)},s=e.matched.length-1,a=i.matched.length-1;if(y(e,i)&&s===a&&e.matched[s]===i.matched[a])return this.ensureURL(),e.hash&&Ce(this.router,i,e,!1),o($e(i,e));var c=nt(this.current.matched,e.matched),u=c.updated,l=c.deactivated,h=c.activated,d=[].concat(ot(l),this.router.beforeHooks,st(u),h.map((function(e){return e.beforeEnter})),Ke(h)),f=function(t,n){if(r.pending!==e)return o(qe(i,e));try{t(e,i,(function(t){!1===t?(r.ensureURL(!0),o(Ve(i,e))):He(t)?(r.ensureURL(!0),o(t)):"string"===typeof t||"object"===typeof t&&("string"===typeof t.path||"string"===typeof t.name)?(o(Ue(i,e)),"object"===typeof t&&t.replace?r.replace(t):r.push(t)):n(t)}))}catch(s){o(s)}};Me(d,f,(function(){var n=ct(h),s=n.concat(r.router.resolveHooks);Me(s,f,(function(){if(r.pending!==e)return o(qe(i,e));r.pending=null,t(e),r.router.app&&r.router.app.$nextTick((function(){C(e)}))}))}))},et.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},et.prototype.setupListeners=function(){},et.prototype.teardown=function(){this.listeners.forEach((function(e){e()})),this.listeners=[],this.current=v,this.pending=null};var lt=function(e){function t(t,n){e.call(this,t,n),this._startLocation=ht(this.base)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=je&&n;r&&this.listeners.push(ke());var i=function(){var n=e.current,i=ht(e.base);e.current===v&&i===e._startLocation||e.transitionTo(i,(function(e){r&&Ce(t,e,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},t.prototype.go=function(e){window.history.go(e)},t.prototype.push=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){Le(x(r.base+e.fullPath)),Ce(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){De(x(r.base+e.fullPath)),Ce(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.ensureURL=function(e){if(ht(this.base)!==this.current.fullPath){var t=x(this.base+this.current.fullPath);e?Le(t):De(t)}},t.prototype.getCurrentLocation=function(){return ht(this.base)},t}(et);function ht(e){var t=window.location.pathname,n=t.toLowerCase(),r=e.toLowerCase();return!e||n!==r&&0!==n.indexOf(x(r+"/"))||(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}var dt=function(e){function t(t,n,r){e.call(this,t,n),r&&ft(this.base)||pt()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=je&&n;r&&this.listeners.push(ke());var i=function(){var t=e.current;pt()&&e.transitionTo(mt(),(function(n){r&&Ce(e.router,n,t,!0),je||_t(n.fullPath)}))},o=je?"popstate":"hashchange";window.addEventListener(o,i),this.listeners.push((function(){window.removeEventListener(o,i)}))}},t.prototype.push=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){gt(e.fullPath),Ce(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){_t(e.fullPath),Ce(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.go=function(e){window.history.go(e)},t.prototype.ensureURL=function(e){var t=this.current.fullPath;mt()!==t&&(e?gt(t):_t(t))},t.prototype.getCurrentLocation=function(){return mt()},t}(et);function ft(e){var t=ht(e);if(!/^\/#/.test(t))return window.location.replace(x(e+"/#"+t)),!0}function pt(){var e=mt();return"/"===e.charAt(0)||(_t("/"+e),!1)}function mt(){var e=window.location.href,t=e.indexOf("#");return t<0?"":(e=e.slice(t+1),e)}function vt(e){var t=window.location.href,n=t.indexOf("#"),r=n>=0?t.slice(0,n):t;return r+"#"+e}function gt(e){je?Le(vt(e)):window.location.hash=e}function _t(e){je?De(vt(e)):window.location.replace(vt(e))}var yt=function(e){function t(t,n){e.call(this,t,n),this.stack=[],this.index=-1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.push=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index+1).concat(e),r.index++,t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index).concat(e),t&&t(e)}),n)},t.prototype.go=function(e){var t=this,n=this.index+e;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var e=t.current;t.index=n,t.updateRoute(r),t.router.afterHooks.forEach((function(t){t&&t(r,e)}))}),(function(e){Ge(e,Fe.duplicated)&&(t.index=n)}))}},t.prototype.getCurrentLocation=function(){var e=this.stack[this.stack.length-1];return e?e.fullPath:"/"},t.prototype.ensureURL=function(){},t}(et),bt=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=fe(e.routes||[],this);var t=e.mode||"hash";switch(this.fallback="history"===t&&!je&&!1!==e.fallback,this.fallback&&(t="hash"),ce||(t="abstract"),this.mode=t,t){case"history":this.history=new lt(this,e.base);break;case"hash":this.history=new dt(this,e.base,this.fallback);break;case"abstract":this.history=new yt(this,e.base);break;default:0}},wt={currentRoute:{configurable:!0}};function kt(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function Ct(e,t,n){var r="hash"===n?"#"+t:t;return e?x(e+"/"+r):r}bt.prototype.match=function(e,t,n){return this.matcher.match(e,t,n)},wt.currentRoute.get=function(){return this.history&&this.history.current},bt.prototype.init=function(e){var t=this;if(this.apps.push(e),e.$once("hook:destroyed",(function(){var n=t.apps.indexOf(e);n>-1&&t.apps.splice(n,1),t.app===e&&(t.app=t.apps[0]||null),t.app||t.history.teardown()})),!this.app){this.app=e;var n=this.history;if(n instanceof lt||n instanceof dt){var r=function(e){var r=n.current,i=t.options.scrollBehavior,o=je&&i;o&&"fullPath"in e&&Ce(t,e,r,!1)},i=function(e){n.setupListeners(),r(e)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(e){t.apps.forEach((function(t){t._route=e}))}))}},bt.prototype.beforeEach=function(e){return kt(this.beforeHooks,e)},bt.prototype.beforeResolve=function(e){return kt(this.resolveHooks,e)},bt.prototype.afterEach=function(e){return kt(this.afterHooks,e)},bt.prototype.onReady=function(e,t){this.history.onReady(e,t)},bt.prototype.onError=function(e){this.history.onError(e)},bt.prototype.push=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.push(e,t,n)}));this.history.push(e,t,n)},bt.prototype.replace=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.replace(e,t,n)}));this.history.replace(e,t,n)},bt.prototype.go=function(e){this.history.go(e)},bt.prototype.back=function(){this.go(-1)},bt.prototype.forward=function(){this.go(1)},bt.prototype.getMatchedComponents=function(e){var t=e?e.matched?e:this.resolve(e).route:this.currentRoute;return t?[].concat.apply([],t.matched.map((function(e){return Object.keys(e.components).map((function(t){return e.components[t]}))}))):[]},bt.prototype.resolve=function(e,t,n){t=t||this.history.current;var r=Z(e,t,n,this),i=this.match(r,t),o=i.redirectedFrom||i.fullPath,s=this.history.base,a=Ct(s,o,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},bt.prototype.getRoutes=function(){return this.matcher.getRoutes()},bt.prototype.addRoute=function(e,t){this.matcher.addRoute(e,t),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},bt.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(bt.prototype,wt),bt.install=ae,bt.version="3.5.3",bt.isNavigationFailure=Ge,bt.NavigationFailureType=Fe,bt.START_LOCATION=v,ce&&window.Vue&&window.Vue.use(bt),t["a"]=bt},"90e3":function(e,t,n){var r=n("e330"),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},9112:function(e,t,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9263:function(e,t,n){"use strict";var r=n("c65b"),i=n("e330"),o=n("577e"),s=n("ad6d"),a=n("9f7f"),c=n("5692"),u=n("7c73"),l=n("69f3").get,h=n("fce3"),d=n("107c"),f=c("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,m=p,v=i("".charAt),g=i("".indexOf),_=i("".replace),y=i("".slice),b=function(){var e=/a/,t=/b*/g;return r(p,e,"a"),r(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),w=a.UNSUPPORTED_Y||a.BROKEN_CARET,k=void 0!==/()??/.exec("")[1],C=b||k||w||h||d;C&&(m=function(e){var t,n,i,a,c,h,d,C=this,O=l(C),I=o(e),T=O.raw;if(T)return T.lastIndex=C.lastIndex,t=r(m,T,I),C.lastIndex=T.lastIndex,t;var E=O.groups,S=w&&C.sticky,x=r(s,C),A=C.source,R=0,P=I;if(S&&(x=_(x,"y",""),-1===g(x,"g")&&(x+="g"),P=y(I,C.lastIndex),C.lastIndex>0&&(!C.multiline||C.multiline&&"\n"!==v(I,C.lastIndex-1))&&(A="(?: "+A+")",P=" "+P,R++),n=new RegExp("^(?:"+A+")",x)),k&&(n=new RegExp("^"+A+"$(?!\\s)",x)),b&&(i=C.lastIndex),a=r(p,S?n:C,P),S?a?(a.input=y(a.input,R),a[0]=y(a[0],R),a.index=C.lastIndex,C.lastIndex+=a[0].length):C.lastIndex=0:b&&a&&(C.lastIndex=C.global?a.index+a[0].length:i),k&&a&&a.length>1&&r(f,a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a&&E)for(a.groups=h=u(null),c=0;c<E.length;c++)d=E[c],h[d[0]]=a[d[1]];return a}),e.exports=m},"94ca":function(e,t,n){var r=n("d039"),i=n("1626"),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},9523:function(e,t){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.exports=n,e.exports["default"]=e.exports,e.exports.__esModule=!0},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(P){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof v?t:v,o=Object.create(i.prototype),s=new x(r||[]);return o._invoke=I(e,n,s),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(P){return{type:"throw",arg:P}}}e.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",m={};function v(){}function g(){}function _(){}var y={};c(y,o,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(A([])));w&&w!==n&&r.call(w,o)&&(y=w);var k=_.prototype=v.prototype=Object.create(y);function C(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function n(i,o,s,a){var c=l(e[i],e,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,s,a)}),(function(e){n("throw",e,s,a)})):t.resolve(h).then((function(e){u.value=e,s(u)}),(function(e){return n("throw",e,s,a)}))}a(c.arg)}var i;function o(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function I(e,t,n){var r=h;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return R()}n.method=i,n.arg=o;while(1){var s=n.delegate;if(s){var a=T(s,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function T(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function A(e){if(e){var n=e[o];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,s=function n(){while(++i<e.length)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return s.next=s}}return{next:R}}function R(){return{value:t,done:!0}}return g.prototype=_,c(k,"constructor",_),c(_,"constructor",g),g.displayName=c(_,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,c(e,a,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},C(O.prototype),c(O.prototype,s,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var s=new O(u(t,n,r,i),o);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},C(k),c(k,a,"Generator"),c(k,o,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=A,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return a.type="throw",a.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"99af":function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d039"),s=n("e8b5"),a=n("861d"),c=n("7b0b"),u=n("07fa"),l=n("8418"),h=n("65f0"),d=n("1dde"),f=n("b622"),p=n("2d00"),m=f("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",_=i.TypeError,y=p>=51||!o((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),b=d("concat"),w=function(e){if(!a(e))return!1;var t=e[m];return void 0!==t?!!t:s(e)},k=!y||!b;r({target:"Array",proto:!0,forced:k},{concat:function(e){var t,n,r,i,o,s=c(this),a=h(s,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?s:arguments[t],w(o)){if(i=u(o),d+i>v)throw _(g);for(n=0;n<i;n++,d++)n in o&&l(a,d,o[n])}else{if(d>=v)throw _(g);l(a,d++,o)}return a.length=d,a}})},"9a1f":function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("59ed"),s=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;e.exports=function(e,t){var n=arguments.length<2?c(e):t;if(o(n))return s(i(n,e));throw u(a(e)+" is not iterable")}},"9bf2":function(e,t,n){var r=n("da84"),i=n("83ab"),o=n("0cfb"),s=n("825a"),a=n("a04b"),c=r.TypeError,u=Object.defineProperty;t.f=i?u:function(e,t,n){if(s(e),t=a(t),s(n),o)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n){var u=t+" Iterator";return e.prototype=i(r,{next:o(1,n)}),s(e,u,!1,!0),a[u]=c,e}},"9f7f":function(e,t,n){var r=n("d039"),i=n("da84"),o=i.RegExp;t.UNSUPPORTED_Y=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a04b:function(e,t,n){var r=n("c04e"),i=n("d9b5");e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),s=n("2ba4"),a=n("c65b"),c=n("e330"),u=n("c430"),l=n("83ab"),h=n("4930"),d=n("d039"),f=n("1a2d"),p=n("e8b5"),m=n("1626"),v=n("861d"),g=n("3a9b"),_=n("d9b5"),y=n("825a"),b=n("7b0b"),w=n("fc6a"),k=n("a04b"),C=n("577e"),O=n("5c6c"),I=n("7c73"),T=n("df75"),E=n("241c"),S=n("057f"),x=n("7418"),A=n("06cf"),R=n("9bf2"),P=n("d1e7"),N=n("f36a"),j=n("6eeb"),L=n("5692"),D=n("f772"),M=n("d012"),F=n("90e3"),U=n("b622"),$=n("e538"),q=n("746f"),V=n("d44e"),z=n("69f3"),B=n("b727").forEach,W=D("hidden"),H="Symbol",G="prototype",K=U("toPrimitive"),Y=z.set,Q=z.getterFor(H),J=Object[G],X=i.Symbol,Z=X&&X[G],ee=i.TypeError,te=i.QObject,ne=o("JSON","stringify"),re=A.f,ie=R.f,oe=S.f,se=P.f,ae=c([].push),ce=L("symbols"),ue=L("op-symbols"),le=L("string-to-symbol-registry"),he=L("symbol-to-string-registry"),de=L("wks"),fe=!te||!te[G]||!te[G].findChild,pe=l&&d((function(){return 7!=I(ie({},"a",{get:function(){return ie(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=re(J,t);r&&delete J[t],ie(e,t,n),r&&e!==J&&ie(J,t,r)}:ie,me=function(e,t){var n=ce[e]=I(Z);return Y(n,{type:H,tag:e,description:t}),l||(n.description=t),n},ve=function(e,t,n){e===J&&ve(ue,t,n),y(e);var r=k(t);return y(n),f(ce,r)?(n.enumerable?(f(e,W)&&e[W][r]&&(e[W][r]=!1),n=I(n,{enumerable:O(0,!1)})):(f(e,W)||ie(e,W,O(1,{})),e[W][r]=!0),pe(e,r,n)):ie(e,r,n)},ge=function(e,t){y(e);var n=w(t),r=T(n).concat(ke(n));return B(r,(function(t){l&&!a(ye,n,t)||ve(e,t,n[t])})),e},_e=function(e,t){return void 0===t?I(e):ge(I(e),t)},ye=function(e){var t=k(e),n=a(se,this,t);return!(this===J&&f(ce,t)&&!f(ue,t))&&(!(n||!f(this,t)||!f(ce,t)||f(this,W)&&this[W][t])||n)},be=function(e,t){var n=w(e),r=k(t);if(n!==J||!f(ce,r)||f(ue,r)){var i=re(n,r);return!i||!f(ce,r)||f(n,W)&&n[W][r]||(i.enumerable=!0),i}},we=function(e){var t=oe(w(e)),n=[];return B(t,(function(e){f(ce,e)||f(M,e)||ae(n,e)})),n},ke=function(e){var t=e===J,n=oe(t?ue:w(e)),r=[];return B(n,(function(e){!f(ce,e)||t&&!f(J,e)||ae(r,ce[e])})),r};if(h||(X=function(){if(g(Z,this))throw ee("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?C(arguments[0]):void 0,t=F(e),n=function(e){this===J&&a(n,ue,e),f(this,W)&&f(this[W],t)&&(this[W][t]=!1),pe(this,t,O(1,e))};return l&&fe&&pe(J,t,{configurable:!0,set:n}),me(t,e)},Z=X[G],j(Z,"toString",(function(){return Q(this).tag})),j(X,"withoutSetter",(function(e){return me(F(e),e)})),P.f=ye,R.f=ve,A.f=be,E.f=S.f=we,x.f=ke,$.f=function(e){return me(U(e),e)},l&&(ie(Z,"description",{configurable:!0,get:function(){return Q(this).description}}),u||j(J,"propertyIsEnumerable",ye,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!h,sham:!h},{Symbol:X}),B(T(de),(function(e){q(e)})),r({target:H,stat:!0,forced:!h},{for:function(e){var t=C(e);if(f(le,t))return le[t];var n=X(t);return le[t]=n,he[n]=t,n},keyFor:function(e){if(!_(e))throw ee(e+" is not a symbol");if(f(he,e))return he[e]},useSetter:function(){fe=!0},useSimple:function(){fe=!1}}),r({target:"Object",stat:!0,forced:!h,sham:!l},{create:_e,defineProperty:ve,defineProperties:ge,getOwnPropertyDescriptor:be}),r({target:"Object",stat:!0,forced:!h},{getOwnPropertyNames:we,getOwnPropertySymbols:ke}),r({target:"Object",stat:!0,forced:d((function(){x.f(1)}))},{getOwnPropertySymbols:function(e){return x.f(b(e))}}),ne){var Ce=!h||d((function(){var e=X();return"[null]"!=ne([e])||"{}"!=ne({a:e})||"{}"!=ne(Object(e))}));r({target:"JSON",stat:!0,forced:Ce},{stringify:function(e,t,n){var r=N(arguments),i=t;if((v(t)||void 0!==e)&&!_(e))return p(t)||(t=function(e,t){if(m(i)&&(t=a(i,this,e,t)),!_(t))return t}),r[1]=t,s(ne,null,r)}})}if(!Z[K]){var Oe=Z.valueOf;j(Z,K,(function(e){return a(Oe,this)}))}V(X,H),M[W]=!0},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},a79d:function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("fea9"),s=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("6eeb"),d=!!o&&s((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(e){var t=u(this,a("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!i&&c(o)){var f=a("Promise").prototype["finally"];o.prototype["finally"]!==f&&h(o.prototype,"finally",f,{unsafe:!0})}},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ae93:function(e,t,n){"use strict";var r,i,o,s=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(o=[].keys(),"next"in o?(i=u(u(o)),i!==Object.prototype&&(r=i)):p=!0);var m=void 0==r||s((function(){var e={};return r[f].call(e)!==e}));m?r={}:d&&(r=c(r)),a(r[f])||l(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},b041:function(e,t,n){"use strict";var r=n("00ee"),i=n("f5df");e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(e,t,n){var r=n("83ab"),i=n("5e77").EXISTS,o=n("e330"),s=n("9bf2").f,a=Function.prototype,c=o(a.toString),u=/^\s*function ([^ (]*)/,l=o(u.exec),h="name";r&&!i&&s(a,h,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(e){return""}}})},b575:function(e,t,n){var r,i,o,s,a,c,u,l,h=n("da84"),d=n("0366"),f=n("06cf").f,p=n("2cf4").set,m=n("1cdc"),v=n("d4c3"),g=n("a4b4"),_=n("605d"),y=h.MutationObserver||h.WebKitMutationObserver,b=h.document,w=h.process,k=h.Promise,C=f(h,"queueMicrotask"),O=C&&C.value;O||(r=function(){var e,t;_&&(e=w.domain)&&e.exit();while(i){t=i.fn,i=i.next;try{t()}catch(n){throw i?s():o=void 0,n}}o=void 0,e&&e.enter()},m||_||g||!y||!b?!v&&k&&k.resolve?(u=k.resolve(void 0),u.constructor=k,l=d(u.then,u),s=function(){l(r)}):_?s=function(){w.nextTick(r)}:(p=d(p,h),s=function(){p(r)}):(a=!0,c=b.createTextNode(""),new y(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),e.exports=O||function(e){var t={fn:e,next:void 0};o&&(o.next=t),i||(i=t,s()),o=t}},b622:function(e,t,n){var r=n("da84"),i=n("5692"),o=n("1a2d"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||s;e.exports=function(e){if(!o(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&o(l,e)?u[e]=l[e]:u[e]=c&&h?h(t):d(t)}return u[e]}},b64b:function(e,t,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),s=n("d039"),a=s((function(){o(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(e){return o(i(e))}})},b727:function(e,t,n){var r=n("0366"),i=n("e330"),o=n("44ad"),s=n("7b0b"),a=n("07fa"),c=n("65f0"),u=i([].push),l=function(e){var t=1==e,n=2==e,i=3==e,l=4==e,h=6==e,d=7==e,f=5==e||h;return function(p,m,v,g){for(var _,y,b=s(p),w=o(b),k=r(m,v),C=a(w),O=0,I=g||c,T=t?I(p,C):n||d?I(p,0):void 0;C>O;O++)if((f||O in w)&&(_=w[O],y=k(_,O,b),e))if(t)T[O]=y;else if(y)switch(e){case 3:return!0;case 5:return _;case 6:return O;case 2:u(T,_)}else switch(e){case 4:return!1;case 7:u(T,_)}return h?-1:i||l?l:T}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},c04e:function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("861d"),s=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,h=u("toPrimitive");e.exports=function(e,t){if(!o(e)||s(e))return e;var n,r=a(e,h);if(r){if(void 0===t&&(t="default"),n=i(r,e,t),!o(n)||s(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},c430:function(e,t){e.exports=!1},c65b:function(e,t){var n=Function.prototype.call;e.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},c6b6:function(e,t,n){var r=n("e330"),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},c6cd:function(e,t,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var r=n("e330"),i=n("1a2d"),o=n("fc6a"),s=n("4d64").indexOf,a=n("d012"),c=r([].push);e.exports=function(e,t){var n,r=o(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},caf9:function(e,t,n){"use strict";
/*!
 * Vue-Lazyload.js v1.3.3
 * (c) 2019 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e){return null==e||"function"!==typeof e&&"object"!==("undefined"===typeof e?"undefined":r(e))},a=function(e,t){if(null===e||"undefined"===typeof e)throw new TypeError("expected first argument to be an object.");if("undefined"===typeof t||"undefined"===typeof Symbol)return e;if("function"!==typeof Object.getOwnPropertySymbols)return e;var n=Object.prototype.propertyIsEnumerable,r=Object(e),i=arguments.length,o=0;while(++o<i)for(var s=Object(arguments[o]),a=Object.getOwnPropertySymbols(s),c=0;c<a.length;c++){var u=a[c];n.call(s,u)&&(r[u]=s[u])}return r},c=Object.prototype.toString,u=function(e){var t="undefined"===typeof e?"undefined":r(e);return"undefined"===t?"undefined":null===e?"null":!0===e||!1===e||e instanceof Boolean?"boolean":"string"===t||e instanceof String?"string":"number"===t||e instanceof Number?"number":"function"===t||e instanceof Function?"undefined"!==typeof e.constructor.name&&"Generator"===e.constructor.name.slice(0,9)?"generatorfunction":"function":"undefined"!==typeof Array.isArray&&Array.isArray(e)?"array":e instanceof RegExp?"regexp":e instanceof Date?"date":(t=c.call(e),"[object RegExp]"===t?"regexp":"[object Date]"===t?"date":"[object Arguments]"===t?"arguments":"[object Error]"===t?"error":"[object Promise]"===t?"promise":l(e)?"buffer":"[object Set]"===t?"set":"[object WeakSet]"===t?"weakset":"[object Map]"===t?"map":"[object WeakMap]"===t?"weakmap":"[object Symbol]"===t?"symbol":"[object Map Iterator]"===t?"mapiterator":"[object Set Iterator]"===t?"setiterator":"[object String Iterator]"===t?"stringiterator":"[object Array Iterator]"===t?"arrayiterator":"[object Int8Array]"===t?"int8array":"[object Uint8Array]"===t?"uint8array":"[object Uint8ClampedArray]"===t?"uint8clampedarray":"[object Int16Array]"===t?"int16array":"[object Uint16Array]"===t?"uint16array":"[object Int32Array]"===t?"int32array":"[object Uint32Array]"===t?"uint32array":"[object Float32Array]"===t?"float32array":"[object Float64Array]"===t?"float64array":"object")};function l(e){return e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function h(e){e=e||{};var t=arguments.length,n=0;if(1===t)return e;while(++n<t){var r=arguments[n];s(e)&&(e=r),f(r)&&d(e,r)}return e}function d(e,t){for(var n in a(e,t),t)if("__proto__"!==n&&p(t,n)){var r=t[n];f(r)?("undefined"===u(e[n])&&"function"===u(r)&&(e[n]=r),e[n]=h(e[n]||{},r)):e[n]=r}return e}function f(e){return"object"===u(e)||"function"===u(e)}function p(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var m=h,v="undefined"!==typeof window,g=_();function _(){return!!(v&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)&&("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}),!0)}var y={event:"event",observer:"observer"},b=function(){if(v)return"function"===typeof window.CustomEvent?window.CustomEvent:(e.prototype=window.Event.prototype,e);function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}}();function w(e,t){if(e.length){var n=e.indexOf(t);return n>-1?e.splice(n,1):void 0}}function k(e,t){for(var n=!1,r=0,i=e.length;r<i;r++)if(t(e[r])){n=!0;break}return n}function C(e,t){if("IMG"===e.tagName&&e.getAttribute("data-srcset")){var n=e.getAttribute("data-srcset"),r=[],i=e.parentNode,o=i.offsetWidth*t,s=void 0,a=void 0,c=void 0;n=n.trim().split(","),n.map((function(e){e=e.trim(),s=e.lastIndexOf(" "),-1===s?(a=e,c=999998):(a=e.substr(0,s),c=parseInt(e.substr(s+1,e.length-s-2),10)),r.push([c,a])})),r.sort((function(e,t){if(e[0]<t[0])return 1;if(e[0]>t[0])return-1;if(e[0]===t[0]){if(-1!==t[1].indexOf(".webp",t[1].length-5))return 1;if(-1!==e[1].indexOf(".webp",e[1].length-5))return-1}return 0}));for(var u="",l=void 0,h=0;h<r.length;h++){l=r[h],u=l[1];var d=r[h+1];if(d&&d[0]<o){u=l[1];break}if(!d){u=l[1];break}}return u}}function O(e,t){for(var n=void 0,r=0,i=e.length;r<i;r++)if(t(e[r])){n=e[r];break}return n}var I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return v&&window.devicePixelRatio||e};function T(){if(!v)return!1;var e=!0,t=document;try{var n=t.createElement("object");n.type="image/webp",n.style.visibility="hidden",n.innerHTML="!",t.body.appendChild(n),e=!n.offsetWidth,t.body.removeChild(n)}catch(r){e=!1}return e}function E(e,t){var n=null,r=0;return function(){if(!n){var i=Date.now()-r,o=this,s=arguments,a=function(){r=Date.now(),n=!1,e.apply(o,s)};i>=t?a():n=setTimeout(a,t)}}}function S(){if(v){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(n){}return e}}var x=S(),A={on:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];x?e.addEventListener(t,n,{capture:r,passive:!0}):e.addEventListener(t,n,r)},off:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.removeEventListener(t,n,r)}},R=function(e,t,n){var r=new Image;if(!e||!e.src){var i=new Error("image src is required");return n(i)}r.src=e.src,r.onload=function(){t({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:r.src})},r.onerror=function(e){n(e)}},P=function(e,t){return"undefined"!==typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t]},N=function(e){return P(e,"overflow")+P(e,"overflow-y")+P(e,"overflow-x")},j=function(e){if(v){if(!(e instanceof HTMLElement))return window;var t=e;while(t){if(t===document.body||t===document.documentElement)break;if(!t.parentNode)break;if(/(scroll|auto)/.test(N(t)))return t;t=t.parentNode}return window}};function L(e){return null!==e&&"object"===("undefined"===typeof e?"undefined":r(e))}function D(e){if(!(e instanceof Object))return[];if(Object.keys)return Object.keys(e);var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}function M(e){for(var t=e.length,n=[],r=0;r<t;r++)n.push(e[r]);return n}function F(){}var U=function(){function e(t){var n=t.max;i(this,e),this.options={max:n||100},this._caches=[]}return o(e,[{key:"has",value:function(e){return this._caches.indexOf(e)>-1}},{key:"add",value:function(e){this.has(e)||(this._caches.push(e),this._caches.length>this.options.max&&this.free())}},{key:"free",value:function(){this._caches.shift()}}]),e}(),$=function(){function e(t){var n=t.el,r=t.src,o=t.error,s=t.loading,a=t.bindType,c=t.$parent,u=t.options,l=t.elRenderer,h=t.imageCache;i(this,e),this.el=n,this.src=r,this.error=o,this.loading=s,this.bindType=a,this.attempt=0,this.naturalHeight=0,this.naturalWidth=0,this.options=u,this.rect=null,this.$parent=c,this.elRenderer=l,this._imageCache=h,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}return o(e,[{key:"initState",value:function(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={loading:!1,error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(e){this.performanceData[e]=Date.now()}},{key:"update",value:function(e){var t=e.src,n=e.loading,r=e.error,i=this.src;this.src=t,this.loading=n,this.error=r,this.filter(),i!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}},{key:"filter",value:function(){var e=this;D(this.options.filter).map((function(t){e.options.filter[t](e,e.options)}))}},{key:"renderLoading",value:function(e){var t=this;this.state.loading=!0,R({src:this.loading},(function(n){t.render("loading",!1),t.state.loading=!1,e()}),(function(){e(),t.state.loading=!1,t.options.silent||console.warn("VueLazyload log: load failed with loading image("+t.loading+")")}))}},{key:"load",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F;return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log("VueLazyload log: "+this.src+" tried too more than "+this.options.attempt+" times"),void t()):this.state.rendered&&this.state.loaded?void 0:this._imageCache.has(this.src)?(this.state.loaded=!0,this.render("loaded",!0),this.state.rendered=!0,t()):void this.renderLoading((function(){e.attempt++,e.options.adapter["beforeLoad"]&&e.options.adapter["beforeLoad"](e,e.options),e.record("loadStart"),R({src:e.src},(function(n){e.naturalHeight=n.naturalHeight,e.naturalWidth=n.naturalWidth,e.state.loaded=!0,e.state.error=!1,e.record("loadEnd"),e.render("loaded",!1),e.state.rendered=!0,e._imageCache.add(e.src),t()}),(function(t){!e.options.silent&&console.error(t),e.state.error=!0,e.state.loaded=!1,e.render("error",!1)}))}))}},{key:"render",value:function(e,t){this.elRenderer(this,e,t)}},{key:"performance",value:function(){var e="loading",t=0;return this.state.loaded&&(e="loaded",t=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(e="error"),{src:this.src,state:e,time:t}}},{key:"$destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),e}(),q="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",V=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],z={rootMargin:"0px",threshold:0},B=function(e){return function(){function t(e){var n=e.preLoad,r=e.error,o=e.throttleWait,s=e.preLoadTop,a=e.dispatchEvent,c=e.loading,u=e.attempt,l=e.silent,h=void 0===l||l,d=e.scale,f=e.listenEvents,p=(e.hasbind,e.filter),m=e.adapter,v=e.observer,g=e.observerOptions;i(this,t),this.version="1.3.3",this.mode=y.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:h,dispatchEvent:!!a,throttleWait:o||200,preLoad:n||1.3,preLoadTop:s||0,error:r||q,loading:c||q,attempt:u||3,scale:d||I(d),ListenEvents:f||V,hasbind:!1,supportWebp:T(),filter:p||{},adapter:m||{},observer:!!v,observerOptions:g||z},this._initEvent(),this._imageCache=new U({max:200}),this.lazyLoadHandler=E(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?y.observer:y.event)}return o(t,[{key:"config",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};m(this.options,e)}},{key:"performance",value:function(){var e=[];return this.ListenerQueue.map((function(t){e.push(t.performance())})),e}},{key:"addLazyBox",value:function(e){this.ListenerQueue.push(e),v&&(this._addListenerTarget(window),this._observer&&this._observer.observe(e.el),e.$el&&e.$el.parentNode&&this._addListenerTarget(e.$el.parentNode))}},{key:"add",value:function(t,n,r){var i=this;if(k(this.ListenerQueue,(function(e){return e.el===t})))return this.update(t,n),e.nextTick(this.lazyLoadHandler);var o=this._valueFormatter(n.value),s=o.src,a=o.loading,c=o.error;e.nextTick((function(){s=C(t,i.options.scale)||s,i._observer&&i._observer.observe(t);var o=Object.keys(n.modifiers)[0],u=void 0;o&&(u=r.context.$refs[o],u=u?u.$el||u:document.getElementById(o)),u||(u=j(t));var l=new $({bindType:n.arg,$parent:u,el:t,loading:a,error:c,src:s,elRenderer:i._elRenderer.bind(i),options:i.options,imageCache:i._imageCache});i.ListenerQueue.push(l),v&&(i._addListenerTarget(window),i._addListenerTarget(u)),i.lazyLoadHandler(),e.nextTick((function(){return i.lazyLoadHandler()}))}))}},{key:"update",value:function(t,n,r){var i=this,o=this._valueFormatter(n.value),s=o.src,a=o.loading,c=o.error;s=C(t,this.options.scale)||s;var u=O(this.ListenerQueue,(function(e){return e.el===t}));u?u.update({src:s,loading:a,error:c}):this.add(t,n,r),this._observer&&(this._observer.unobserve(t),this._observer.observe(t)),this.lazyLoadHandler(),e.nextTick((function(){return i.lazyLoadHandler()}))}},{key:"remove",value:function(e){if(e){this._observer&&this._observer.unobserve(e);var t=O(this.ListenerQueue,(function(t){return t.el===e}));t&&(this._removeListenerTarget(t.$parent),this._removeListenerTarget(window),w(this.ListenerQueue,t),t.$destroy())}}},{key:"removeComponent",value:function(e){e&&(w(this.ListenerQueue,e),this._observer&&this._observer.unobserve(e.el),e.$parent&&e.$el.parentNode&&this._removeListenerTarget(e.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(e){var t=this;g||e!==y.observer||(e=y.event),this.mode=e,e===y.event?(this._observer&&(this.ListenerQueue.forEach((function(e){t._observer.unobserve(e.el)})),this._observer=null),this.TargetQueue.forEach((function(e){t._initListen(e.el,!0)}))):(this.TargetQueue.forEach((function(e){t._initListen(e.el,!1)})),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(e){if(e){var t=O(this.TargetQueue,(function(t){return t.el===e}));return t?t.childrenCount++:(t={el:e,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===y.event&&this._initListen(t.el,!0),this.TargetQueue.push(t)),this.TargetIndex}}},{key:"_removeListenerTarget",value:function(e){var t=this;this.TargetQueue.forEach((function(n,r){n.el===e&&(n.childrenCount--,n.childrenCount||(t._initListen(n.el,!1),t.TargetQueue.splice(r,1),n=null))}))}},{key:"_initListen",value:function(e,t){var n=this;this.options.ListenEvents.forEach((function(r){return A[t?"on":"off"](e,r,n.lazyLoadHandler)}))}},{key:"_initEvent",value:function(){var e=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(t,n){e.Event.listeners[t]||(e.Event.listeners[t]=[]),e.Event.listeners[t].push(n)},this.$once=function(t,n){var r=e;function i(){r.$off(t,i),n.apply(r,arguments)}e.$on(t,i)},this.$off=function(t,n){if(n)w(e.Event.listeners[t],n);else{if(!e.Event.listeners[t])return;e.Event.listeners[t].length=0}},this.$emit=function(t,n,r){e.Event.listeners[t]&&e.Event.listeners[t].forEach((function(e){return e(n,r)}))}}},{key:"_lazyLoadHandler",value:function(){var e=this,t=[];this.ListenerQueue.forEach((function(e,n){e.el&&e.el.parentNode||t.push(e);var r=e.checkInView();r&&e.load()})),t.forEach((function(t){w(e.ListenerQueue,t),t.$destroy()}))}},{key:"_initIntersectionObserver",value:function(){var e=this;g&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach((function(t){e._observer.observe(t.el)})))}},{key:"_observerHandler",value:function(e,t){var n=this;e.forEach((function(e){e.isIntersecting&&n.ListenerQueue.forEach((function(t){if(t.el===e.target){if(t.state.loaded)return n._observer.unobserve(t.el);t.load()}}))}))}},{key:"_elRenderer",value:function(e,t,n){if(e.el){var r=e.el,i=e.bindType,o=void 0;switch(t){case"loading":o=e.loading;break;case"error":o=e.error;break;default:o=e.src;break}if(i?r.style[i]='url("'+o+'")':r.getAttribute("src")!==o&&r.setAttribute("src",o),r.setAttribute("lazy",t),this.$emit(t,e,n),this.options.adapter[t]&&this.options.adapter[t](e,this.options),this.options.dispatchEvent){var s=new b(t,{detail:e});r.dispatchEvent(s)}}}},{key:"_valueFormatter",value:function(e){var t=e,n=this.options.loading,r=this.options.error;return L(e)&&(e.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+e),t=e.src,n=e.loading||this.options.loading,r=e.error||this.options.error),{src:t,loading:n,error:r}}}]),t}()},W=function(e){return{props:{tag:{type:String,default:"div"}},render:function(e){return!1===this.show?e(this.tag):e(this.tag,null,this.$slots.default)},data:function(){return{el:null,state:{loaded:!1},rect:{},show:!1}},mounted:function(){this.el=this.$el,e.addLazyBox(this),e.lazyLoadHandler()},beforeDestroy:function(){e.removeComponent(this)},methods:{getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),v&&this.rect.top<window.innerHeight*e.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*e.options.preLoad&&this.rect.right>0},load:function(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)},destroy:function(){return this.$destroy}}}},H=function(){function e(t){var n=t.lazy;i(this,e),this.lazy=n,n.lazyContainerMananger=this,this._queue=[]}return o(e,[{key:"bind",value:function(e,t,n){var r=new K({el:e,binding:t,vnode:n,lazy:this.lazy});this._queue.push(r)}},{key:"update",value:function(e,t,n){var r=O(this._queue,(function(t){return t.el===e}));r&&r.update({el:e,binding:t,vnode:n})}},{key:"unbind",value:function(e,t,n){var r=O(this._queue,(function(t){return t.el===e}));r&&(r.clear(),w(this._queue,r))}}]),e}(),G={selector:"img"},K=function(){function e(t){var n=t.el,r=t.binding,o=t.vnode,s=t.lazy;i(this,e),this.el=null,this.vnode=o,this.binding=r,this.options={},this.lazy=s,this._queue=[],this.update({el:n,binding:r})}return o(e,[{key:"update",value:function(e){var t=this,n=e.el,r=e.binding;this.el=n,this.options=m({},G,r.value);var i=this.getImgs();i.forEach((function(e){t.lazy.add(e,m({},t.binding,{value:{src:"dataset"in e?e.dataset.src:e.getAttribute("data-src"),error:("dataset"in e?e.dataset.error:e.getAttribute("data-error"))||t.options.error,loading:("dataset"in e?e.dataset.loading:e.getAttribute("data-loading"))||t.options.loading}}),t.vnode)}))}},{key:"getImgs",value:function(){return M(this.el.querySelectorAll(this.options.selector))}},{key:"clear",value:function(){var e=this,t=this.getImgs();t.forEach((function(t){return e.lazy.remove(t)})),this.vnode=null,this.binding=null,this.lazy=null}}]),e}(),Y=function(e){return{props:{src:[String,Object],tag:{type:String,default:"img"}},render:function(e){return e(this.tag,{attrs:{src:this.renderSrc}},this.$slots.default)},data:function(){return{el:null,options:{src:"",error:"",loading:"",attempt:e.options.attempt},state:{loaded:!1,error:!1,attempt:0},rect:{},renderSrc:""}},watch:{src:function(){this.init(),e.addLazyBox(this),e.lazyLoadHandler()}},created:function(){this.init(),this.renderSrc=this.options.loading},mounted:function(){this.el=this.$el,e.addLazyBox(this),e.lazyLoadHandler()},beforeDestroy:function(){e.removeComponent(this)},methods:{init:function(){var t=e._valueFormatter(this.src),n=t.src,r=t.loading,i=t.error;this.state.loaded=!1,this.options.src=n,this.options.error=i,this.options.loading=r,this.renderSrc=this.options.loading},getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),v&&this.rect.top<window.innerHeight*e.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*e.options.preLoad&&this.rect.right>0},load:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F;if(this.state.attempt>this.options.attempt-1&&this.state.error)return e.options.silent||console.log("VueLazyload log: "+this.options.src+" tried too more than "+this.options.attempt+" times"),void n();var r=this.options.src;R({src:r},(function(e){var n=e.src;t.renderSrc=n,t.state.loaded=!0}),(function(e){t.state.attempt++,t.renderSrc=t.options.error,t.state.error=!0}))}}}},Q={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=B(e),r=new n(t),i=new H({lazy:r}),o="2"===e.version.split(".")[0];e.prototype.$Lazyload=r,t.lazyComponent&&e.component("lazy-component",W(r)),t.lazyImage&&e.component("lazy-image",Y(r)),o?(e.directive("lazy",{bind:r.add.bind(r),update:r.update.bind(r),componentUpdated:r.lazyLoadHandler.bind(r),unbind:r.remove.bind(r)}),e.directive("lazy-container",{bind:i.bind.bind(i),componentUpdated:i.update.bind(i),unbind:i.unbind.bind(i)})):(e.directive("lazy",{bind:r.lazyLoadHandler.bind(r),update:function(e,t){m(this.vm.$refs,this.vm.$els),r.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){r.remove(this.el)}}),e.directive("lazy-container",{update:function(e,t){i.update(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){i.unbind(this.el)}}))}};t["a"]=Q},cc12:function(e,t,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},cca6:function(e,t,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(e,t,n){var r=n("825a"),i=n("861d"),o=n("f069");e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=o.f(e),s=n.resolve;return s(t),n.promise}},ce4e:function(e,t,n){var r=n("da84"),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("da84"),i=n("1626"),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);t.f=o?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},d28b:function(e,t,n){var r=n("746f");r("iterator")},d2bb:function(e,t,n){var r=n("e330"),i=n("825a"),o=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,i=n("1a2d"),o=n("b622"),s=o("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,s)&&r(e,s,{configurable:!0,value:t})}},d4c3:function(e,t,n){var r=n("342f"),i=n("da84");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),i=n("6eeb"),o=n("9263"),s=n("d039"),a=n("b622"),c=n("9112"),u=a("species"),l=RegExp.prototype;e.exports=function(e,t,n,h){var d=a(e),f=!s((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),p=f&&!s((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!f||!p||n){var m=r(/./[d]),v=t(d,""[e],(function(e,t,n,i,s){var a=r(e),c=t.exec;return c===o||c===l.exec?f&&!s?{done:!0,value:m(t,n,i)}:{done:!0,value:a(n,t,i)}:{done:!1}}));i(String.prototype,e,v[0]),i(l,d,v[1])}h&&c(l[d],"sham",!0)}},d81d:function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").map,o=n("1dde"),s=o("map");r({target:"Array",proto:!0,forced:!s},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},d9b5:function(e,t,n){var r=n("da84"),i=n("d066"),o=n("1626"),s=n("3a9b"),a=n("fdbf"),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return o(t)&&s(t.prototype,c(e))}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(e,t,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),s=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,n,r=s(e),i=a.f,u=o(r),l={},h=0;while(u.length>h)n=i(r,t=u[h++]),void 0!==n&&c(l,t,n);return l}})},dc4a:function(e,t,n){var r=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},ddb0:function(e,t,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("e260"),a=n("9112"),c=n("b622"),u=c("iterator"),l=c("toStringTag"),h=s.values,d=function(e,t){if(e){if(e[u]!==h)try{a(e,u,h)}catch(r){e[u]=h}if(e[l]||a(e,l,t),i[t])for(var n in s)if(e[n]!==s[n])try{a(e,n,s[n])}catch(r){e[n]=s[n]}}};for(var f in i)d(r[f]&&r[f].prototype,f);d(o,"DOMTokenList")},ded3:function(e,t,n){n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");var r=n("9523");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}e.exports=o,e.exports["default"]=e.exports,e.exports.__esModule=!0},df75:function(e,t,n){var r=n("ca84"),i=n("7839");e.exports=Object.keys||function(e){return r(e,i)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:e.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,r="/"===s.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),s="/"===o(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&s&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(o.slice(a)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,o=e.length-1;o>=1;--o)if(t=e.charCodeAt(o),47===t){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,o=0,s=e.length-1;s>=0;--s){var a=e.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===t?t=s:1!==o&&(o=1):-1!==t&&(o=-1);else if(!i){n=s+1;break}}return-1===t||-1===r||0===o||1===o&&t===r-1&&t===n+1?"":e.slice(t,r)};var o="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e01a:function(e,t,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),s=n("e330"),a=n("1a2d"),c=n("1626"),u=n("3a9b"),l=n("577e"),h=n("9bf2").f,d=n("e893"),f=o.Symbol,p=f&&f.prototype;if(i&&c(f)&&(!("description"in p)||void 0!==f().description)){var m={},v=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),t=u(p,this)?new f(e):void 0===e?f():f(e);return""===e&&(m[t]=!0),t};d(v,f),v.prototype=p,p.constructor=v;var g="Symbol(test)"==String(f("test")),_=s(p.toString),y=s(p.valueOf),b=/^Symbol\((.*)\)[^)]+$/,w=s("".replace),k=s("".slice);h(p,"description",{configurable:!0,get:function(){var e=y(this),t=_(e);if(a(m,e))return"";var n=g?k(t,7,-1):w(t,b,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:v})}},e163:function(e,t,n){var r=n("da84"),i=n("1a2d"),o=n("1626"),s=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,h=l.prototype;e.exports=c?l.getPrototypeOf:function(e){var t=s(e);if(i(t,u))return t[u];var n=t.constructor;return o(n)&&t instanceof n?n.prototype:t instanceof l?h:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),s=n("69f3"),a=n("7dd0"),c="Array Iterator",u=s.set,l=s.getterFor(c);e.exports=a(Array,"Array",(function(e,t){u(this,{type:c,target:r(e),index:0,kind:t})}),(function(){var e=l(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},e2cc:function(e,t,n){var r=n("6eeb");e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},e330:function(e,t){var n=Function.prototype,r=n.bind,i=n.call,o=r&&r.bind(i);e.exports=r?function(e){return e&&o(i,e)}:function(e){return e&&function(){return i.apply(e,arguments)}}},e439:function(e,t,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),s=n("06cf").f,a=n("83ab"),c=i((function(){s(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(e,t){return s(o(e),t)}})},e538:function(e,t,n){var r=n("b622");t.f=r},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return h}));
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
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const s=o.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}},e6cf:function(e,t,n){"use strict";var r,i,o,s,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("c65b"),d=n("fea9"),f=n("6eeb"),p=n("e2cc"),m=n("d2bb"),v=n("d44e"),g=n("2626"),_=n("59ed"),y=n("1626"),b=n("861d"),w=n("19aa"),k=n("8925"),C=n("2266"),O=n("1c7e"),I=n("4840"),T=n("2cf4").set,E=n("b575"),S=n("cdf9"),x=n("44de"),A=n("f069"),R=n("e667"),P=n("69f3"),N=n("94ca"),j=n("b622"),L=n("6069"),D=n("605d"),M=n("2d00"),F=j("species"),U="Promise",$=P.get,q=P.set,V=P.getterFor(U),z=d&&d.prototype,B=d,W=z,H=u.TypeError,G=u.document,K=u.process,Y=A.f,Q=Y,J=!!(G&&G.createEvent&&u.dispatchEvent),X=y(u.PromiseRejectionEvent),Z="unhandledrejection",ee="rejectionhandled",te=0,ne=1,re=2,ie=1,oe=2,se=!1,ae=N(U,(function(){var e=k(B),t=e!==String(B);if(!t&&66===M)return!0;if(c&&!W["finally"])return!0;if(M>=51&&/native code/.test(e))return!1;var n=new B((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},i=n.constructor={};return i[F]=r,se=n.then((function(){}))instanceof r,!se||!t&&L&&!X})),ce=ae||!O((function(e){B.all(e)["catch"]((function(){}))})),ue=function(e){var t;return!(!b(e)||!y(t=e.then))&&t},le=function(e,t){if(!e.notified){e.notified=!0;var n=e.reactions;E((function(){var r=e.value,i=e.state==ne,o=0;while(n.length>o){var s,a,c,u=n[o++],l=i?u.ok:u.fail,d=u.resolve,f=u.reject,p=u.domain;try{l?(i||(e.rejection===oe&&pe(e),e.rejection=ie),!0===l?s=r:(p&&p.enter(),s=l(r),p&&(p.exit(),c=!0)),s===u.promise?f(H("Promise-chain cycle")):(a=ue(s))?h(a,s,d,f):d(s)):f(r)}catch(m){p&&!c&&p.exit(),f(m)}}e.reactions=[],e.notified=!1,t&&!e.rejection&&de(e)}))}},he=function(e,t,n){var r,i;J?(r=G.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),u.dispatchEvent(r)):r={promise:t,reason:n},!X&&(i=u["on"+e])?i(r):e===Z&&x("Unhandled promise rejection",n)},de=function(e){h(T,u,(function(){var t,n=e.facade,r=e.value,i=fe(e);if(i&&(t=R((function(){D?K.emit("unhandledRejection",r,n):he(Z,n,r)})),e.rejection=D||fe(e)?oe:ie,t.error))throw t.value}))},fe=function(e){return e.rejection!==ie&&!e.parent},pe=function(e){h(T,u,(function(){var t=e.facade;D?K.emit("rejectionHandled",t):he(ee,t,e.value)}))},me=function(e,t,n){return function(r){e(t,r,n)}},ve=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=re,le(e,!0))},ge=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw H("Promise can't be resolved itself");var r=ue(t);r?E((function(){var n={done:!1};try{h(r,t,me(ge,n,e),me(ve,n,e))}catch(i){ve(n,i,e)}})):(e.value=t,e.state=ne,le(e,!1))}catch(i){ve({done:!1},i,e)}}};if(ae&&(B=function(e){w(this,W),_(e),h(r,this);var t=$(this);try{e(me(ge,t),me(ve,t))}catch(n){ve(t,n)}},W=B.prototype,r=function(e){q(this,{type:U,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:te,value:void 0})},r.prototype=p(W,{then:function(e,t){var n=V(this),r=n.reactions,i=Y(I(this,B));return i.ok=!y(e)||e,i.fail=y(t)&&t,i.domain=D?K.domain:void 0,n.parent=!0,r[r.length]=i,n.state!=te&&le(n,!1),i.promise},catch:function(e){return this.then(void 0,e)}}),i=function(){var e=new r,t=$(e);this.promise=e,this.resolve=me(ge,t),this.reject=me(ve,t)},A.f=Y=function(e){return e===B||e===o?new i(e):Q(e)},!c&&y(d)&&z!==Object.prototype)){s=z.then,se||(f(z,"then",(function(e,t){var n=this;return new B((function(e,t){h(s,n,e,t)})).then(e,t)}),{unsafe:!0}),f(z,"catch",W["catch"],{unsafe:!0}));try{delete z.constructor}catch(_e){}m&&m(z,W)}a({global:!0,wrap:!0,forced:ae},{Promise:B}),v(B,U,!1,!0),g(U),o=l(U),a({target:U,stat:!0,forced:ae},{reject:function(e){var t=Y(this);return h(t.reject,void 0,e),t.promise}}),a({target:U,stat:!0,forced:c||ae},{resolve:function(e){return S(c&&this===o?B:this,e)}}),a({target:U,stat:!0,forced:ce},{all:function(e){var t=this,n=Y(t),r=n.resolve,i=n.reject,o=R((function(){var n=_(t.resolve),o=[],s=0,a=1;C(e,(function(e){var c=s++,u=!1;a++,h(n,t,e).then((function(e){u||(u=!0,o[c]=e,--a||r(o))}),i)})),--a||r(o)}));return o.error&&i(o.value),n.promise},race:function(e){var t=this,n=Y(t),r=n.reject,i=R((function(){var i=_(t.resolve);C(e,(function(e){h(i,t,e).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e893:function(e,t,n){var r=n("1a2d"),i=n("56ef"),o=n("06cf"),s=n("9bf2");e.exports=function(e,t){for(var n=i(t),a=s.f,c=o.f,u=0;u<n.length;u++){var l=n[u];r(e,l)||a(e,l,c(t,l))}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},e95a:function(e,t,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||s[o]===e)}},f069:function(e,t,n){"use strict";var r=n("59ed"),i=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new i(e)}},f0e4:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}n("b64b"),e.exports=r,e.exports["default"]=e.exports,e.exports.__esModule=!0},f36a:function(e,t,n){var r=n("e330");e.exports=r([].slice)},f5df:function(e,t,n){var r=n("da84"),i=n("00ee"),o=n("1626"),s=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==s(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=i?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=u(e),c))?n:l?s(t):"Object"==(r=s(t))&&o(t.callee)?"Arguments":r}},f772:function(e,t,n){var r=n("5692"),i=n("90e3"),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},fc6a:function(e,t,n){var r=n("44ad"),i=n("1d80");e.exports=function(e){return r(i(e))}},fce3:function(e,t,n){var r=n("d039"),i=n("da84"),o=i.RegExp;e.exports=r((function(){var e=o(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,n){var r=n("da84");e.exports=r.Promise}}]);