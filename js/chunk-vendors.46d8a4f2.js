(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(e,t,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},"0366":function(e,t,n){var r=n("59ed");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},"057f":function(e,t,n){var r=n("fc6a"),i=n("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return i(e)}catch(t){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==o.call(e)?s(e):i(r(e))}},"06cf":function(e,t,n){var r=n("83ab"),i=n("d1e7"),o=n("5c6c"),a=n("fc6a"),s=n("a04b"),c=n("1a2d"),u=n("0cfb"),l=Object.getOwnPropertyDescriptor;t.f=r?l:function(e,t){if(e=a(e),t=s(t),u)try{return l(e,t)}catch(n){}if(c(e,t))return o(!i.f.call(e,t),e[t])}},"07fa":function(e,t,n){var r=n("50c4");e.exports=function(e){return r(e.length)}},"0b42":function(e,t,n){var r=n("e8b5"),i=n("68ee"),o=n("861d"),a=n("b622"),s=a("species");e.exports=function(e){var t;return r(e)&&(t=e.constructor,i(t)&&(t===Array||r(t.prototype))?t=void 0:o(t)&&(t=t[s],null===t&&(t=void 0))),void 0===t?Array:t}},"0cfb":function(e,t,n){var r=n("83ab"),i=n("d039"),o=n("cc12");e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t){e.exports=function(e){try{return String(e)}catch(t){return"Object"}}},"159b":function(e,t,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),a=n("17c2"),s=n("9112"),c=function(e){if(e&&e.forEach!==a)try{s(e,"forEach",a)}catch(t){e.forEach=a}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(o)},1626:function(e,t){e.exports=function(e){return"function"===typeof e}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=i("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"19aa":function(e,t){e.exports=function(e,t,n){if(e instanceof t)return e;throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}},"1a2d":function(e,t,n){var r=n("7b0b"),i={}.hasOwnProperty;e.exports=Object.hasOwn||function(e,t){return i.call(r(e),t)}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c7e":function(e,t,n){var r=n("b622"),i=r("iterator"),o=!1;try{var a=0,s={next:function(){return{done:!!a++}},return:function(){o=!0}};s[i]=function(){return this},Array.from(s,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7");function r(e,t,n,r,i,o,a){try{var s=e[o](a),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var a=e.apply(t,n);function s(e){r(a,i,o,s,c,"next",e)}function c(e){r(a,i,o,s,c,"throw",e)}s(void 0)}))}}},"1dde":function(e,t,n){var r=n("d039"),i=n("b622"),o=n("2d00"),a=i("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1f5a":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return $e})),n.d(t,"c",(function(){return ut})),n.d(t,"d",(function(){return ht})),n.d(t,"e",(function(){return vt})),n.d(t,"f",(function(){return pt})),n.d(t,"g",(function(){return Qe})),n.d(t,"h",(function(){return ft})),n.d(t,"i",(function(){return Rr})),n.d(t,"j",(function(){return Wi})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return Ir})),n.d(t,"m",(function(){return gt})),n.d(t,"n",(function(){return yt})),n.d(t,"o",(function(){return I})),n.d(t,"p",(function(){return Pe})),n.d(t,"q",(function(){return g})),n.d(t,"r",(function(){return jn})),n.d(t,"s",(function(){return T})),n.d(t,"t",(function(){return ri})),n.d(t,"u",(function(){return he})),n.d(t,"w",(function(){return Vt})),n.d(t,"x",(function(){return An})),n.d(t,"y",(function(){return Vi})),n.d(t,"z",(function(){return Rn})),n.d(t,"A",(function(){return zt})),n.d(t,"B",(function(){return Ft})),n.d(t,"C",(function(){return je})),n.d(t,"E",(function(){return Wt})),n.d(t,"F",(function(){return f})),n.d(t,"G",(function(){return Yt})),n.d(t,"H",(function(){return fn})),n.d(t,"I",(function(){return vn})),n.d(t,"J",(function(){return ni})),n.d(t,"K",(function(){return fe})),n.d(t,"L",(function(){return tr})),n.d(t,"M",(function(){return qt})),n.d(t,"N",(function(){return xt})),n.d(t,"O",(function(){return Tr})),n.d(t,"P",(function(){return Fr})),n.d(t,"Q",(function(){return ei})),n.d(t,"R",(function(){return wn})),n.d(t,"S",(function(){return jt})),n.d(t,"T",(function(){return Sr})),n.d(t,"U",(function(){return Ur})),n.d(t,"V",(function(){return Zr})),n.d(t,"W",(function(){return Xt})),n.d(t,"X",(function(){return Ut})),n.d(t,"Y",(function(){return Gt})),n.d(t,"Z",(function(){return It})),n.d(t,"ab",(function(){return Pt})),n.d(t,"bb",(function(){return Lt})),n.d(t,"cb",(function(){return Bt})),n.d(t,"db",(function(){return Kt})),n.d(t,"eb",(function(){return Er})),n.d(t,"fb",(function(){return $r})),n.d(t,"gb",(function(){return Yr})),n.d(t,"hb",(function(){return Tt})),n.d(t,"ib",(function(){return tn})),n.d(t,"jb",(function(){return nn})),n.d(t,"kb",(function(){return Cr})),n.d(t,"lb",(function(){return en})),n.d(t,"mb",(function(){return Zt})),n.d(t,"nb",(function(){return Ht})),n.d(t,"v",(function(){return Io})),n.d(t,"D",(function(){return _o}));var r=n("1fd5"),i=n("5606"),o=n("9ab4"),a=n("4fc1"),s=n("ffa6");
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
function l(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function d(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f=l,h=d,p=new r["b"]("auth","Firebase",d()),v=new a["b"]("@firebase/auth");function m(e,...t){v.logLevel<=a["a"].ERROR&&v.error(`Auth (${i["SDK_VERSION"]}): ${e}`,...t)}
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
 */function g(e,...t){throw w(e,...t)}function y(e,...t){return w(e,...t)}function b(e,t,n){const i=Object.assign(Object.assign({},h()),{[t]:n}),o=new r["b"]("auth","Firebase",i);return o.create(t,{appName:e.name})}function _(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&g(e,"argument-error"),b(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function w(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return p.create(e,...t)}function I(e,t,...n){if(!e)throw w(t,...n)}function O(e){const t="INTERNAL ASSERTION FAILED: "+e;throw m(t),new Error(t)}function k(e,t){e||O(t)}
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
 */const E=new Map;function T(e){k(e instanceof Function,"Expected a class definition");let t=E.get(e);return t?(k(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,E.set(e,t),t)}
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
 */function S(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(T);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
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
 */function A(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function C(){return"http:"===R()||"https:"===R()}function R(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function P(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(C()||Object(r["m"])()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
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
 */class j{constructor(e,t){this.shortDelay=e,this.longDelay=t,k(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["q"])()||Object(r["s"])()}get(){return P()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function N(e,t){k(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class L{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void O("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void O("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void O("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const D={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},M=new j(3e4,6e4);
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
 */function $(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function U(e,t,n,i,o={}){return F(e,o,()=>{let o={},a={};i&&("GET"===t?a=i:o={body:JSON.stringify(i)});const s=Object(r["t"])(Object.assign({key:e.config.apiKey},a)).slice(1),c=new(L.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&c.set("X-Firebase-Locale",e.languageCode),L.fetch()(z(e,e.config.apiHost,n,s),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))})}async function F(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},D),t);try{const t=new H(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw W(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw W(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw W(e,"email-already-in-use",o);const s=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw b(e,s,a);g(e,s)}}catch(o){if(o instanceof r["c"])throw o;g(e,"network-request-failed")}}async function V(e,t,n,r,i={}){const o=await U(e,t,n,r,i);return"mfaPendingCredential"in o&&g(e,"multi-factor-auth-required",{serverResponse:o}),o}function z(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?N(e.config,i):`${e.config.apiScheme}://${i}`}class H{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(y(this.auth,"timeout")),M.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function W(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=y(e,t,r);return i.customData._tokenResponse=n,i}
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
 */async function B(e,t){return U(e,"POST","/v1/accounts:delete",t)}async function G(e,t){return U(e,"POST","/v1/accounts:update",t)}async function q(e,t){return U(e,"POST","/v1/accounts:lookup",t)}
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
 */async function J(e,t=!1){const n=Object(r["j"])(e),i=await n.getIdToken(t),o=X(i);I(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const a="object"===typeof o.firebase?o.firebase:void 0,s=null===a||void 0===a?void 0:a["sign_in_provider"];return{claims:o,token:i,authTime:K(Y(o.auth_time)),issuedAtTime:K(Y(o.iat)),expirationTime:K(Y(o.exp)),signInProvider:s||null,signInSecondFactor:(null===a||void 0===a?void 0:a["sign_in_second_factor"])||null}}function Y(e){return 1e3*Number(e)}function X(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return m("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["d"])(n);return e?JSON.parse(e):(m("Failed to decode base64 JWT payload"),null)}catch(o){return m("Caught error parsing JWT payload as JSON",o),null}}function Z(e){const t=X(e);return I(t,"internal-error"),I("undefined"!==typeof t.exp,"internal-error"),I("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function Q(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&ee(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function ee({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */async function re(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Q(e,q(n,{idToken:r}));I(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?ae(o.providerUserInfo):[],s=oe(e.providerData,a),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===s||void 0===s?void 0:s.length),l=!!c&&u,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new ne(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,d)}async function ie(e){const t=Object(r["j"])(e);await re(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function oe(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function ae(e){return e.map(e=>{var{providerId:t}=e,n=Object(o["d"])(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
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
 */async function se(e,t){const n=await F(e,{},()=>{const n=Object(r["t"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,a=z(e,i,"/v1/token","key="+o);return L.fetch()(a,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
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
 */class ce{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I("undefined"!==typeof e.idToken,"internal-error"),I("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Z(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await se(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new ce;return n&&(I("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(I("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(I("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ce,this.toJSON())}_performRefresh(){return O("not implemented")}}
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
 */function ue(e,t){I("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class le{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Object(o["d"])(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new te(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new ne(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Q(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return J(this,e)}reload(){return ie(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new le(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await re(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Q(this,B(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,a,s,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,h=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,v=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,g=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:_,providerData:w,stsTokenManager:O}=t;I(y&&O,e,"internal-error");const k=ce.fromJSON(this.name,O);I("string"===typeof y,e,"internal-error"),ue(l,e.name),ue(d,e.name),I("boolean"===typeof b,e,"internal-error"),I("boolean"===typeof _,e,"internal-error"),ue(f,e.name),ue(h,e.name),ue(p,e.name),ue(v,e.name),ue(m,e.name),ue(g,e.name);const E=new le({uid:y,auth:e,email:d,emailVerified:b,displayName:l,isAnonymous:_,photoURL:h,phoneNumber:f,tenantId:p,stsTokenManager:k,createdAt:m,lastLoginAt:g});return w&&Array.isArray(w)&&(E.providerData=w.map(e=>Object.assign({},e))),v&&(E._redirectEventId=v),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new ce;r.updateFromServerResponse(t);const i=new le({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await re(i),i}}
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
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const fe=de;
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
 */function he(e,t,n){return`firebase:${e}:${t}:${n}`}class pe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=he(this.userKey,r.apiKey,i),this.fullPersistenceKey=he("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?le._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pe(T(fe),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||T(fe);const o=he(n,e.config.apiKey,e.name);let a=null;for(const u of t)try{const t=await u._get(o);if(t){const n=le._fromJSON(e,t);u!==i&&(a=n),i=u;break}}catch(c){}const s=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&s.length?(i=s[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(c){}})),new pe(i,e,n)):new pe(i,e,n)}}
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
 */function ve(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(be(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(me(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(we(t))return"Blackberry";if(Ie(t))return"Webos";if(ge(t))return"Safari";if((t.includes("chrome/")||ye(t))&&!t.includes("edge/"))return"Chrome";if(_e(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function me(e=Object(r["k"])()){return/firefox\//i.test(e)}function ge(e=Object(r["k"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ye(e=Object(r["k"])()){return/crios\//i.test(e)}function be(e=Object(r["k"])()){return/iemobile/i.test(e)}function _e(e=Object(r["k"])()){return/android/i.test(e)}function we(e=Object(r["k"])()){return/blackberry/i.test(e)}function Ie(e=Object(r["k"])()){return/webos/i.test(e)}function Oe(e=Object(r["k"])()){return/iphone|ipad|ipod/i.test(e)}function ke(e=Object(r["k"])()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Ee(e=Object(r["k"])()){var t;return Oe(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Te(){return Object(r["o"])()&&10===document.documentMode}function Se(e=Object(r["k"])()){return Oe(e)||_e(e)||Ie(e)||we(e)||/windows phone/i.test(e)||be(e)}function Ae(){try{return!(!window||window===window.top)}catch(e){return!1}}
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
 */function Ce(e,t=[]){let n;switch(e){case"Browser":n=ve(Object(r["k"])());break;case"Worker":n=`${ve(Object(r["k"])())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["SDK_VERSION"]}/${o}`}
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
 */class Re{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xe(this),this.idTokenSubscription=new xe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=T(t)),this._initializationPromise=this.queue(async()=>{var n;this._deleted||(this.persistenceManager=await pe.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await re(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["j"])(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(T(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&T(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[T(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return I(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ce(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Pe(e){return Object(r["j"])(e)}class xe{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["f"])(e=>this.observer=e)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function je(e,t,n){const r=Pe(e);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=Ne(t),{host:a,port:s}=Le(t),c=null===s?"":":"+s;r.config.emulator={url:`${o}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:s,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Me()}function Ne(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Le(e){const t=Ne(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:De(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:De(t)}}}function De(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Me(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */class $e{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return O("not implemented")}_getIdTokenResponse(e){return O("not implemented")}_linkToIdToken(e,t){return O("not implemented")}_getReauthenticationResolver(e){return O("not implemented")}}
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
 */async function Ue(e,t){return U(e,"POST","/v1/accounts:resetPassword",$(e,t))}async function Fe(e,t){return U(e,"POST","/v1/accounts:update",t)}async function Ve(e,t){return U(e,"POST","/v1/accounts:update",$(e,t))}
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
 */async function ze(e,t){return V(e,"POST","/v1/accounts:signInWithPassword",$(e,t))}async function He(e,t){return U(e,"POST","/v1/accounts:sendOobCode",$(e,t))}async function We(e,t){return He(e,t)}async function Be(e,t){return He(e,t)}async function Ge(e,t){return He(e,t)}async function qe(e,t){return He(e,t)}
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
 */async function Ke(e,t){return V(e,"POST","/v1/accounts:signInWithEmailLink",$(e,t))}async function Je(e,t){return V(e,"POST","/v1/accounts:signInWithEmailLink",$(e,t))}
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
 */class Ye extends $e{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ye(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ye(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ze(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ke(e,{email:this._email,oobCode:this._password});default:g(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Fe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Je(e,{idToken:t,email:this._email,oobCode:this._password});default:g(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Xe(e,t){return V(e,"POST","/v1/accounts:signInWithIdp",$(e,t))}
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
 */const Ze="http://localhost";class Qe extends $e{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Qe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):g("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Object(o["d"])(t,["providerId","signInMethod"]);if(!n||!r)return null;const a=new Qe(n,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Xe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Xe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xe(e,t)}buildRequest(){const e={requestUri:Ze,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["t"])(t)}return e}}
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
 */async function et(e,t){return U(e,"POST","/v1/accounts:sendVerificationCode",$(e,t))}async function tt(e,t){return V(e,"POST","/v1/accounts:signInWithPhoneNumber",$(e,t))}async function nt(e,t){const n=await V(e,"POST","/v1/accounts:signInWithPhoneNumber",$(e,t));if(n.temporaryProof)throw W(e,"account-exists-with-different-credential",n);return n}const rt={["USER_NOT_FOUND"]:"user-not-found"};async function it(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return V(e,"POST","/v1/accounts:signInWithPhoneNumber",$(e,n),rt)}
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
 */class ot extends $e{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ot({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ot({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return tt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return nt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return it(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ot({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */function at(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function st(e){const t=Object(r["u"])(Object(r["i"])(e))["link"],n=t?Object(r["u"])(Object(r["i"])(t))["deep_link_id"]:null,i=Object(r["u"])(Object(r["i"])(e))["deep_link_id"],o=i?Object(r["u"])(Object(r["i"])(i))["link"]:null;return o||i||n||t||e}class ct{constructor(e){var t,n,i,o,a,s;const c=Object(r["u"])(Object(r["i"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,d=at(null!==(i=c["mode"])&&void 0!==i?i:null);I(u&&l&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(a=c["languageCode"])&&void 0!==a?a:null,this.tenantId=null!==(s=c["tenantId"])&&void 0!==s?s:null}static parseLink(e){const t=st(e);try{return new ct(t)}catch(n){return null}}}
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
class ut{constructor(){this.providerId=ut.PROVIDER_ID}static credential(e,t){return Ye._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ct.parseLink(t);return I(n,"argument-error"),Ye._fromEmailAndCode(e,n.code,n.tenantId)}}ut.PROVIDER_ID="password",ut.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ut.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
 */class dt extends lt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ft extends dt{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return I("providerId"in t&&"signInMethod"in t,"argument-error"),Qe._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return I(e.idToken||e.accessToken,"argument-error"),Qe._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ft.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ft.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:o,providerId:a}=e;if(!n&&!r&&!t&&!i)return null;if(!a)return null;try{return new ft(a)._credential({idToken:t,accessToken:n,nonce:o,pendingToken:i})}catch(s){return null}}}
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
 */class ht extends dt{constructor(){super("facebook.com")}static credential(e){return Qe._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch(t){return null}}}ht.FACEBOOK_SIGN_IN_METHOD="facebook.com",ht.PROVIDER_ID="facebook.com";
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
class pt extends dt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Qe._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return pt.credential(t,n)}catch(r){return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com",pt.PROVIDER_ID="google.com";
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
class vt extends dt{constructor(){super("github.com")}static credential(e){return Qe._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch(t){return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com",vt.PROVIDER_ID="github.com";
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
const mt="http://localhost";class gt extends $e{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Xe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Xe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xe(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new gt(n,i):null}static _create(e,t){return new gt(e,t)}buildRequest(){return{requestUri:mt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
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
class yt extends dt{constructor(){super("twitter.com")}static credential(e,t){return Qe._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return yt.credential(t,n)}catch(r){return null}}}
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
async function bt(e,t){return V(e,"POST","/v1/accounts:signUp",$(e,t))}
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
 */yt.TWITTER_SIGN_IN_METHOD="twitter.com",yt.PROVIDER_ID="twitter.com";class _t{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await le._fromIdTokenResponse(e,n,r),o=wt(n),a=new _t({user:i,providerId:o,_tokenResponse:n,operationType:t});return a}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=wt(n);return new _t({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function wt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */async function It(e){var t;const n=Pe(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new _t({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await bt(n,{returnSecureToken:!0}),i=await _t._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
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
 */class Ot extends r["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Ot.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new Ot(e,t,n,r)}}function kt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Ot._fromErrorAndOperation(e,n,t,r);throw n})}
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
 */async function Tt(e,t){const n=Object(r["j"])(e);await At(!0,n,t);const{providerUserInfo:i}=await G(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),o=Et(i||[]);return n.providerData=n.providerData.filter(e=>o.has(e.providerId)),o.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function St(e,t,n=!1){const r=await Q(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return _t._forOperation(e,"link",r)}async function At(e,t,n){await re(t);const r=Et(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";I(r.has(n)===e,t.auth,i)}
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
 */async function Ct(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await Q(e,kt(r,i,t,e),n);I(o.idToken,r,"internal-error");const a=X(o.idToken);I(a,r,"internal-error");const{sub:s}=a;return I(e.uid===s,r,"user-mismatch"),_t._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&g(r,"user-mismatch"),o}}
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
 */async function Rt(e,t,n=!1){const r="signIn",i=await kt(e,r,t),o=await _t._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function Pt(e,t){return Rt(Pe(e),t)}async function xt(e,t){const n=Object(r["j"])(e);return await At(!1,n,t.providerId),St(n,t)}async function jt(e,t){return Ct(Object(r["j"])(e),t)}
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
 */async function Nt(e,t){return V(e,"POST","/v1/accounts:signInWithCustomToken",$(e,t))}
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
 */async function Lt(e,t){const n=Pe(e),r=await Nt(n,{token:t,returnSecureToken:!0}),i=await _t._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
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
 */class Dt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Mt._fromServerResponse(e,t):g(e,"internal-error")}}class Mt extends Dt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Mt(t)}}
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
 */function $t(e,t,n){var r;I((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),I("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
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
 */async function Ut(e,t,n){const i=Object(r["j"])(e),o={requestType:"PASSWORD_RESET",email:t};n&&$t(i,o,n),await Be(i,o)}async function Ft(e,t,n){await Ue(Object(r["j"])(e),{oobCode:t,newPassword:n})}async function Vt(e,t){await Ve(Object(r["j"])(e),{oobCode:t})}async function zt(e,t){const n=Object(r["j"])(e),i=await Ue(n,{oobCode:t}),o=i.requestType;switch(I(o,n,"internal-error"),o){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":I(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":I(i.mfaInfo,n,"internal-error");default:I(i.email,n,"internal-error")}let a=null;return i.mfaInfo&&(a=Dt._fromServerResponse(Pe(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:a},operation:o}}async function Ht(e,t){const{data:n}=await zt(Object(r["j"])(e),t);return n.email}async function Wt(e,t,n){const r=Pe(e),i=await bt(r,{returnSecureToken:!0,email:t,password:n}),o=await _t._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function Bt(e,t,n){return Pt(Object(r["j"])(e),ut.credential(t,n))}
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
 */async function Gt(e,t,n){const i=Object(r["j"])(e),o={requestType:"EMAIL_SIGNIN",email:t};I(n.handleCodeInApp,i,"argument-error"),n&&$t(i,o,n),await Ge(i,o)}function qt(e,t){const n=ct.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Kt(e,t,n){const i=Object(r["j"])(e),o=ut.credentialWithLink(t,n||A());return I(o._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Pt(i,o)}
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
 */async function Jt(e,t){return U(e,"POST","/v1/accounts:createAuthUri",$(e,t))}
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
 */async function Yt(e,t){const n=C()?A():"http://localhost",i={identifier:t,continueUri:n},{signinMethods:o}=await Jt(Object(r["j"])(e),i);return o||[]}async function Xt(e,t){const n=Object(r["j"])(e),i=await e.getIdToken(),o={requestType:"VERIFY_EMAIL",idToken:i};t&&$t(n.auth,o,t);const{email:a}=await We(n.auth,o);a!==e.email&&await e.reload()}async function Zt(e,t,n){const i=Object(r["j"])(e),o=await e.getIdToken(),a={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:o,newEmail:t};n&&$t(i.auth,a,n);const{email:s}=await qe(i.auth,a);s!==e.email&&await e.reload()}
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
 */async function Qt(e,t){return U(e,"POST","/v1/accounts:update",t)}
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
 */async function en(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=Object(r["j"])(e),o=await i.getIdToken(),a={idToken:o,displayName:t,photoUrl:n,returnSecureToken:!0},s=await Q(i,Qt(i.auth,a));i.displayName=s.displayName||null,i.photoURL=s.photoUrl||null;const c=i.providerData.find(({providerId:e})=>"password"===e);c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(s)}function tn(e,t){return rn(Object(r["j"])(e),t,null)}function nn(e,t){return rn(Object(r["j"])(e),null,t)}async function rn(e,t,n){const{auth:r}=e,i=await e.getIdToken(),o={idToken:i,returnSecureToken:!0};t&&(o.email=t),n&&(o.password=n);const a=await Q(e,Fe(r,o));await e._updateTokensIfNecessary(a,!0)}
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
 */function on(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},o=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=X(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new an(o,e)}}if(!r)return null;switch(r){case"facebook.com":return new cn(o,i);case"github.com":return new un(o,i);case"google.com":return new ln(o,i);case"twitter.com":return new dn(o,i,e.screenName||null);case"custom":case"anonymous":return new an(o,null);default:return new an(o,r,i)}}class an{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class sn extends an{constructor(e,t,n,r){super(e,t,n),this.username=r}}class cn extends an{constructor(e,t){super(e,"facebook.com",t)}}class un extends sn{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class ln extends an{constructor(e,t){super(e,"google.com",t)}}class dn extends sn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function fn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:on(n)}
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
 */class hn{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new hn("enroll",e)}static _fromMfaPendingCredential(e){return new hn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return hn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return hn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
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
 */class pn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Pe(e),r=(t.serverResponse.mfaInfo||[]).map(e=>Dt._fromServerResponse(n,e));I(t.serverResponse.mfaPendingCredential,n,"internal-error");const i=hn._fromMfaPendingCredential(t.serverResponse.mfaPendingCredential);return new pn(i,r,async e=>{const r=await e._process(n,i);delete t.serverResponse.mfaInfo,delete t.serverResponse.mfaPendingCredential;const o=Object.assign(Object.assign({},t.serverResponse),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await _t._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return I(t.user,n,"internal-error"),_t._forOperation(t.user,t.operationType,o);default:g(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function vn(e,t){var n;const i=Object(r["j"])(e),o=t;return I(t.operationType,i,"argument-error"),I(null===(n=o.serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),pn._fromError(i,o)}
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
 */function mn(e,t){return U(e,"POST","/v2/accounts/mfaEnrollment:start",$(e,t))}function gn(e,t){return U(e,"POST","/v2/accounts/mfaEnrollment:finalize",$(e,t))}function yn(e,t){return U(e,"POST","/v2/accounts/mfaEnrollment:withdraw",$(e,t))}class bn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>Dt._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new bn(e)}async getSession(){return hn._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),i=await Q(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken(),r=await Q(this.user,yn(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(i){if("auth/user-token-expired"!==i.code)throw i}}}const _n=new WeakMap;function wn(e){const t=Object(r["j"])(e);return _n.has(t)||_n.set(t,bn._fromUser(t)),_n.get(t)}const In="__sak";
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
 */class On{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(In,"1"),this.storage.removeItem(In),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
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
 */function kn(){const e=Object(r["k"])();return ge(e)||Oe(e)}const En=1e3,Tn=10;class Sn extends On{constructor(){super(window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kn()&&Ae(),this.fallbackToPolling=Se(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Te()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Tn):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},En)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sn.type="LOCAL";const An=Sn;
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
 */class Cn extends On{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Cn.type="SESSION";const Rn=Cn;
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
 */function Pn(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
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
 */class xn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new xn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(o).map(async e=>e(t.origin,i)),s=await Pn(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function jn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */xn.receivers=[];class Nn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,s)=>{const c=jn("",20);r.port1.start();const u=setTimeout(()=>{s(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{s(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(u),clearTimeout(i),s(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
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
 */function Ln(){return window}function Dn(e){Ln().location.href=e}
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
 */function Mn(){return"undefined"!==typeof Ln()["WorkerGlobalScope"]&&"function"===typeof Ln()["importScripts"]}async function $n(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Un(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Fn(){return Mn()?self:null}
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
 */const Vn="firebaseLocalStorageDb",zn=1,Hn="firebaseLocalStorage",Wn="fbase_key";class Bn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Gn(e,t){return e.transaction([Hn],t?"readwrite":"readonly").objectStore(Hn)}function qn(){const e=indexedDB.deleteDatabase(Vn);return new Bn(e).toPromise()}function Kn(){const e=indexedDB.open(Vn,zn);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Hn,{keyPath:Wn})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Hn)?t(n):(n.close(),await qn(),t(await Kn()))})})}async function Jn(e,t,n){const r=Gn(e,!0).put({[Wn]:t,value:n});return new Bn(r).toPromise()}async function Yn(e,t){const n=Gn(e,!1).get(t),r=await new Bn(n).toPromise();return void 0===r?null:r.value}function Xn(e,t){const n=Gn(e,!0).delete(t);return new Bn(n).toPromise()}const Zn=800,Qn=3;class er{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Kn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Qn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xn._getInstance(Fn()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await $n(),!this.activeServiceWorker)return;this.sender=new Nn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Un()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kn();return await Jn(e,In,"1"),await Xn(e,In),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jn(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Yn(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Gn(e,!1).getAll();return new Bn(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}er.type="LOCAL";const tr=er;
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
 */function nr(e,t){return U(e,"POST","/v2/accounts/mfaSignIn:start",$(e,t))}function rr(e,t){return U(e,"POST","/v2/accounts/mfaSignIn:finalize",$(e,t))}
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
 */async function ir(e){return(await U(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
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
 */function or(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function ar(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=y("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",or().appendChild(r)})}function sr(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
 */const cr=500,ur=6e4,lr=1e12;class dr{constructor(e){this.auth=e,this.counter=lr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new fr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||lr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||lr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||lr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class fr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;I(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=hr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()},ur)},cr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function hr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
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
 */const pr=sr("rcb"),vr=new j(3e4,6e4),mr="https://www.google.com/recaptcha/api.js?";class gr{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Ln().grecaptcha}load(e,t=""){return I(yr(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Ln().grecaptcha):new Promise((n,i)=>{const o=Ln().setTimeout(()=>{i(y(e,"network-request-failed"))},vr.get());Ln()[pr]=()=>{Ln().clearTimeout(o),delete Ln()[pr];const r=Ln().grecaptcha;if(!r)return void i(y(e,"internal-error"));const a=r.render;r.render=(e,t)=>{const n=a(e,t);return this.counter++,n},this.hostLanguage=t,n(r)};const a=`${mr}?${Object(r["t"])({onload:pr,render:"explicit",hl:t})}`;ar(a).catch(()=>{clearTimeout(o),i(y(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Ln().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function yr(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class br{async load(e){return new dr(e)}clearedOneInstance(){}}
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
 */const _r="recaptcha",wr={theme:"light",type:"image"};class Ir{constructor(e,t=Object.assign({},wr),n){this.parameters=t,this.type=_r,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Pe(n),this.isInvisible="invisible"===this.parameters.size,I("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;I(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new br:new gr,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"===typeof e)e(t);else if("string"===typeof e){const n=Ln()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I(C()&&!Mn(),this.auth,"internal-error"),await Or(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await ir(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Or(){let e=null;return new Promise(t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}
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
 */class kr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=ot._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Er(e,t,n){const i=Pe(e),o=await Ar(i,t,Object(r["j"])(n));return new kr(o,e=>Pt(i,e))}async function Tr(e,t,n){const i=Object(r["j"])(e);await At(!1,i,"phone");const o=await Ar(i.auth,t,Object(r["j"])(n));return new kr(o,e=>xt(i,e))}async function Sr(e,t,n){const i=Object(r["j"])(e),o=await Ar(i.auth,t,Object(r["j"])(n));return new kr(o,e=>jt(i,e))}async function Ar(e,t,n){var r;const i=await n.verify();try{let o;if(I("string"===typeof i,e,"argument-error"),I(n.type===_r,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){I("enroll"===t.type,e,"internal-error");const n=await mn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{I("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;I(n,e,"missing-multi-factor-info");const a=await nr(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await et(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Cr(e,t){await St(Object(r["j"])(e),t)}
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
 */class Rr{constructor(e){this.providerId=Rr.PROVIDER_ID,this.auth=Pe(e)}verifyPhoneNumber(e,t){return Ar(this.auth,e,Object(r["j"])(t))}static credential(e,t){return ot._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Rr.credentialFromTaggedObject(t)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ot._fromTokenResponse(t,n):null}}
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
function Pr(e,t){return t?T(t):(I(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Rr.PROVIDER_ID="phone",Rr.PHONE_SIGN_IN_METHOD="phone";class xr extends $e{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function jr(e){return Rt(e.auth,new xr(e),e.bypassAuthState)}function Nr(e){const{auth:t,user:n}=e;return I(n,t,"internal-error"),Ct(n,new xr(e),e.bypassAuthState)}async function Lr(e){const{auth:t,user:n}=e;return I(n,t,"internal-error"),St(n,new xr(e),e.bypassAuthState)}
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
 */class Dr{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:a}=e;if(o)return void this.reject(o);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(s))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jr;case"linkViaPopup":case"linkViaRedirect":return Lr;case"reauthViaPopup":case"reauthViaRedirect":return Nr;default:g(this.auth,"internal-error")}}resolve(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Mr=new j(2e3,1e4);async function $r(e,t,n){const r=Pe(e);_(e,t,lt);const i=Pr(r,n),o=new Vr(r,"signInViaPopup",t,i);return o.executeNotNull()}async function Ur(e,t,n){const i=Object(r["j"])(e);_(i.auth,t,lt);const o=Pr(i.auth,n),a=new Vr(i.auth,"reauthViaPopup",t,o,i);return a.executeNotNull()}async function Fr(e,t,n){const i=Object(r["j"])(e);_(i.auth,t,lt);const o=Pr(i.auth,n),a=new Vr(i.auth,"linkViaPopup",t,o,i);return a.executeNotNull()}class Vr extends Dr{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Vr.currentPopupAction&&Vr.currentPopupAction.cancel(),Vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){k(1===this.filter.length,"Popup operations only handle one event");const e=jn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(y(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(y(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(y(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,Mr.get())};e()}}Vr.currentPopupAction=null;
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
const zr="pendingRedirect",Hr=new Map;class Wr extends Dr{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Hr.get(this.auth._key());if(!e){try{const t=await Br(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Hr.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Br(e,t){const n=Jr(t),r="true"===await Kr(e)._get(n);return await Kr(e)._remove(n),r}async function Gr(e,t){return Kr(e)._set(Jr(t),"true")}function qr(){Hr.clear()}function Kr(e){return T(e._redirectPersistence)}function Jr(e){return he(zr,e.config.apiKey,e.name)}
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
 */function Yr(e,t,n){return Xr(e,t,n)}async function Xr(e,t,n){const r=Pe(e);_(e,t,lt);const i=Pr(r,n);return await Gr(i,r),i._openRedirect(r,t,"signInViaRedirect")}function Zr(e,t,n){return Qr(e,t,n)}async function Qr(e,t,n){const i=Object(r["j"])(e);_(i.auth,t,lt);const o=Pr(i.auth,n);await Gr(o,i.auth);const a=await ii(i);return o._openRedirect(i.auth,t,"reauthViaRedirect",a)}function ei(e,t,n){return ti(e,t,n)}async function ti(e,t,n){const i=Object(r["j"])(e);_(i.auth,t,lt);const o=Pr(i.auth,n);await At(!1,i,t.providerId),await Gr(o,i.auth);const a=await ii(i);return o._openRedirect(i.auth,t,"linkViaRedirect",a)}async function ni(e,t){return await Pe(e)._initializationPromise,ri(e,t,!1)}async function ri(e,t,n=!1){const r=Pe(e),i=Pr(r,t),o=new Wr(r,i,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}async function ii(e){const t=jn(e.uid+":::");return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
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
 */const oi=6e5;class ai{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ui(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ci(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(y(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oi&&this.cachedEventUids.clear(),this.cachedEventUids.has(si(e))}saveEventToCache(e){this.cachedEventUids.add(si(e)),this.lastProcessedEventTime=Date.now()}}function si(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function ci({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function ui(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ci(e);default:return!1}}
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
 */async function li(e,t={}){return U(e,"GET","/v1/projects",t)}
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
 */const di=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fi=/^https?/;async function hi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await li(e);for(const r of t)try{if(pi(r))return}catch(n){}g(e,"unauthorized-domain")}function pi(e){const t=A(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!fi.test(n))return!1;if(di.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
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
 */const vi=new j(3e4,6e4);function mi(){const e=Ln().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function gi(e){return new Promise((t,n)=>{var r,i,o;function a(){mi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{mi(),n(y(e,"network-request-failed"))},timeout:vi.get()})}if(null===(i=null===(r=Ln().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Ln().gapi)||void 0===o?void 0:o.load)){const t=sr("iframefcb");return Ln()[t]=()=>{gapi.load?a():n(y(e,"network-request-failed"))},ar("https://apis.google.com/js/api.js?onload="+t)}a()}}).catch(e=>{throw yi=null,e})}let yi=null;function bi(e){return yi=yi||gi(e),yi}
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
 */const _i=new j(5e3,15e3),wi="__/auth/iframe",Ii="emulator/auth/iframe",Oi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},ki=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ei(e){const t=e.config;I(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?N(t,Ii):`https://${e.config.authDomain}/${wi}`,o={apiKey:t.apiKey,appName:e.name,v:i["SDK_VERSION"]},a=ki.get(e.config.apiHost);a&&(o.eid=a);const s=e._getFrameworks();return s.length&&(o.fw=s.join(",")),`${n}?${Object(r["t"])(o).slice(1)}`}async function Ti(e){const t=await bi(e),n=Ln().gapi;return I(n,e,"internal-error"),t.open({where:document.body,url:Ei(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Oi,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=y(e,"network-request-failed"),o=Ln().setTimeout(()=>{r(i)},_i.get());function a(){Ln().clearTimeout(o),n(t)}t.ping(a).then(a,()=>{r(i)})}))}
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
 */const Si={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ai=500,Ci=600,Ri="_blank",Pi="http://localhost";class xi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function ji(e,t,n,i=Ai,o=Ci){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Si),{width:i.toString(),height:o.toString(),top:a,left:s}),l=Object(r["k"])().toLowerCase();n&&(c=ye(l)?Ri:n),me(l)&&(t=t||Pi,u.scrollbars="yes");const d=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(Ee(l)&&"_self"!==c)return Ni(t||"",c),new xi(null);const f=window.open(t||"",c,d);I(f,e,"popup-blocked");try{f.focus()}catch(h){}return new xi(f)}function Ni(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */const Li="__/auth/handler",Di="emulator/auth/handler";function Mi(e,t,n,o,a,s){I(e.config.authDomain,e,"auth-domain-config-required"),I(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i["SDK_VERSION"],eventId:a};if(t instanceof lt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["n"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))c[e]=t}if(t instanceof dt){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${$i(e)}?${Object(r["t"])(u).slice(1)}`}function $i({config:e}){return e.emulator?N(e,Di):`https://${e.authDomain}/${Li}`}
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
 */const Ui="webStorageSupport";class Fi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rn,this._completeRedirectFn=ri}async _openPopup(e,t,n,r){var i;k(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Mi(e,t,n,A(),r);return ji(e,o,jn())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Dn(Mi(e,t,n,A(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(k(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await Ti(e),n=new ai(e);return t.register("authEvent",t=>{I(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Ui,{type:Ui},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Ui];void 0!==i&&t(!!i),g(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=hi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Se()||ge()||Oe()}}const Vi=Fi;class zi{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return O("unexpected MultiFactorSessionType")}}}class Hi extends zi{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Hi(e)}_finalizeEnroll(e,t,n){return gn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return rr(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Wi{constructor(){}static assertion(e){return Hi._fromCredential(e)}}Wi.FACTOR_ID="phone";var Bi="@firebase/auth",Gi="0.18.3";
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
class qi{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function Ki(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ji(e){Object(i["_registerComponent"])(new s["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:o}=r.options;return(t=>{I(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),I(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ce(e)},a=new Re(t,r);return S(a,n),a})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(i["_registerComponent"])(new s["a"]("auth-internal",e=>{const t=Pe(e.getProvider("auth").getImmediate());return(e=>new qi(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["registerVersion"])(Bi,Gi,Ki(e)),Object(i["registerVersion"])(Bi,Gi,"esm2017")}
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
function Yi(){return window}
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
 */Ji("Browser");const Xi=2e3;async function Zi(e,t,n){var r;const{BuildInfo:i}=Yi();k(t.sessionId,"AuthEvent did not contain a session ID");const o=await ro(t.sessionId),a={};return Oe()?a["ibi"]=i.packageName:_e()?a["apn"]=i.packageName:g(e,"operation-not-supported-in-this-environment"),i.displayName&&(a["appDisplayName"]=i.displayName),a["sessionId"]=o,Mi(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,a)}async function Qi(e){const{BuildInfo:t}=Yi(),n={};Oe()?n.iosBundleId=t.packageName:_e()?n.androidPackageName=t.packageName:g(e,"operation-not-supported-in-this-environment"),await li(e,n)}function eo(e){const{cordova:t}=Yi();return new Promise(n=>{t.plugins.browsertab.isAvailable(r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,ke()?"_blank":"_system","location=yes"),n(i)})})}async function to(e,t,n){const{cordova:r}=Yi();let i=()=>{};try{await new Promise((o,a)=>{let s=null;function c(){var e;o();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){s||(s=window.setTimeout(()=>{a(y(e,"redirect-cancelled-by-user"))},Xi))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),_e()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),s&&window.clearTimeout(s)}})}finally{i()}}function no(e){var t,n,r,i,o,a,s,c,u,l;const d=Yi();I("function"===typeof(null===(t=null===d||void 0===d?void 0:d.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),I("undefined"!==typeof(null===(n=null===d||void 0===d?void 0:d.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),I("function"===typeof(null===(o=null===(i=null===(r=null===d||void 0===d?void 0:d.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===o?void 0:o.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I("function"===typeof(null===(c=null===(s=null===(a=null===d||void 0===d?void 0:d.cordova)||void 0===a?void 0:a.plugins)||void 0===s?void 0:s.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I("function"===typeof(null===(l=null===(u=null===d||void 0===d?void 0:d.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function ro(e){const t=io(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map(e=>e.toString(16).padStart(2,"0")).join("")}function io(e){if(k(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
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
 */const oo=20;class ao extends ai{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function so(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:fo(),postBody:null,tenantId:e.tenantId,error:y(e,"no-auth-event")}}function co(e,t){return ho()._set(po(e),t)}async function uo(e){const t=await ho()._get(po(e));return t&&await ho()._remove(po(e)),t}function lo(e,t){var n,r;const i=mo(t);if(i.includes("/__/auth/callback")){const t=go(i),o=t["firebaseError"]?vo(decodeURIComponent(t["firebaseError"])):null,a=null===(r=null===(n=null===o||void 0===o?void 0:o["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],s=a?y(a):null;return s?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:s,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function fo(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<oo;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function ho(){return T(An)}function po(e){return he("authEvent",e.config.apiKey,e.name)}function vo(e){try{return JSON.parse(e)}catch(t){return null}}function mo(e){const t=go(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=go(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,o=go(i)["link"];return o||i||r||n||e}function go(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return Object(r["u"])(n.join("?"))}
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
 */const yo=500;class bo{constructor(){this._redirectPersistence=Rn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ri}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new ao(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){g(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){no(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),qr(),await this._originValidation(e);const o=so(e,n,r);await co(e,o);const a=await Zi(e,o,t),s=await eo(a);return to(e,i,s)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Qi(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=Yi(),o=setTimeout(async()=>{await uo(e),t.onEvent(wo())},yo),a=async n=>{clearTimeout(o);const r=await uo(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=lo(r,n["url"])),t.onEvent(i||wo())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,a);const s=r,c=i.packageName.toLowerCase()+"://";Yi().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&a({url:e}),"function"===typeof s)try{s(e)}catch(t){console.error(t)}}}}const _o=bo;function wo(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:y("no-auth-event")}}
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
 */function Io(e,t){Pe(e)._logFramework(t)}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return O})),n.d(t,"f",(function(){return R})),n.d(t,"g",(function(){return E})),n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return C})),n.d(t,"j",(function(){return N})),n.d(t,"k",(function(){return l})),n.d(t,"l",(function(){return h})),n.d(t,"m",(function(){return p})),n.d(t,"n",(function(){return k})),n.d(t,"o",(function(){return m})),n.d(t,"p",(function(){return g})),n.d(t,"q",(function(){return d})),n.d(t,"r",(function(){return f})),n.d(t,"s",(function(){return v})),n.d(t,"t",(function(){return S})),n.d(t,"u",(function(){return A}));
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
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],a=e[n++],s=e[n++],c=((7&i)<<18|(63&o)<<12|(63&a)<<6|63&s)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,a=o?e[i+1]:0,s=i+2<e.length,c=s?e[i+2]:0,u=t>>2,l=(3&t)<<4|a>>4;let d=(15&a)<<2|c>>6,f=63&c;s||(f=64,o||(d=64)),r.push(n[u],n[l],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,a=o?n[e.charAt(i)]:0;++i;const s=i<e.length,c=s?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==c||null==l)throw Error();const d=t<<2|a>>4;if(r.push(d),64!==c){const e=a<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},a=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
 */function s(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&c(n)&&(e[n]=s(e[n],t[n]));return e}function c(e){return"__proto__"!==e}
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
 */class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
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
function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function d(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function f(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function h(){return"object"===typeof self&&self.self===self}function p(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function v(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function m(){const e=l();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function g(){return"object"===typeof indexedDB}
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
const y="FirebaseError";class b extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=y,Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}}class _{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?w(i,n):"Error",a=`${this.serviceName}: ${o} (${r}).`,s=new b(r,a,n);return s}}function w(e,t){return e.replace(I,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const I=/\{\$([^}]+)}/g;
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
function O(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function k(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function E(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(T(n)&&T(o)){if(!E(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function T(e){return null!==e&&"object"===typeof e}
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
 */function S(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function A(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function C(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function R(e,t){const n=new P(e,t);return n.subscribe.bind(n)}class P{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=x(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=j),void 0===r.error&&(r.error=j),void 0===r.complete&&(r.complete=j);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function x(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function j(){}
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
function N(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},2266:function(e,t,n){var r=n("825a"),i=n("e95a"),o=n("07fa"),a=n("0366"),s=n("9a1f"),c=n("35a1"),u=n("2a62"),l=function(e,t){this.stopped=e,this.result=t};e.exports=function(e,t,n){var d,f,h,p,v,m,g,y=n&&n.that,b=!(!n||!n.AS_ENTRIES),_=!(!n||!n.IS_ITERATOR),w=!(!n||!n.INTERRUPTED),I=a(t,y,1+b+w),O=function(e){return d&&u(d,"normal",e),new l(!0,e)},k=function(e){return b?(r(e),w?I(e[0],e[1],O):I(e[0],e[1])):w?I(e,O):I(e)};if(_)d=e;else{if(f=c(e),!f)throw TypeError(String(e)+" is not iterable");if(i(f)){for(h=0,p=o(e);p>h;h++)if(v=k(e[h]),v&&v instanceof l)return v;return new l(!1)}d=s(e,f)}m=d.next;while(!(g=m.call(d)).done){try{v=k(g.value)}catch(E){u(d,"throw",E)}if("object"==typeof v&&v&&v instanceof l)return v}return new l(!1)}},"23cb":function(e,t,n){var r=n("5926"),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},"23e7":function(e,t,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),a=n("6eeb"),s=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,d,f,h,p,v=e.target,m=e.global,g=e.stat;if(l=m?r:g?r[v]||s(v,{}):(r[v]||{}).prototype,l)for(d in t){if(h=t[d],e.noTargetGet?(p=i(l,d),f=p&&p.value):f=l[d],n=u(m?d:v+(g?".":"#")+d,e.forced),!n&&void 0!==f){if(typeof h===typeof f)continue;c(h,f)}(e.sham||f&&f.sham)&&o(h,"sham",!0),a(l,d,h,e)}}},"241c":function(e,t,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},"256a":function(e,t,n){"use strict";n("5994")},2626:function(e,t,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),a=n("83ab"),s=o("species");e.exports=function(e){var t=r(e),n=i.f;a&&t&&!t[s]&&n(t,s,{configurable:!0,get:function(){return this}})}},2877:function(e,t,n){"use strict";function r(e,t,n,r,i,o,a,s){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=c):i&&(c=s?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:u}}n.d(t,"a",(function(){return r}))},"2a62":function(e,t,n){var r=n("825a"),i=n("dc4a");e.exports=function(e,t,n){var o,a;r(e);try{if(o=i(e,"return"),!o){if("throw"===t)throw n;return n}o=o.call(e)}catch(s){a=!0,o=s}if("throw"===t)throw n;if(a)throw o;return r(o),n}},"2b0e":function(e,t,n){"use strict";(function(e){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(e){return void 0===e||null===e}function i(e){return void 0!==e&&null!==e}function o(e){return!0===e}function a(e){return!1===e}function s(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function c(e){return null!==e&&"object"===typeof e}var u=Object.prototype.toString;function l(e){return"[object Object]"===u.call(e)}function d(e){return"[object RegExp]"===u.call(e)}function f(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function h(e){return i(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function p(e){return null==e?"":Array.isArray(e)||l(e)&&e.toString===u?JSON.stringify(e,null,2):String(e)}function v(e){var t=parseFloat(e);return isNaN(t)?e:t}function m(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}m("slot,component",!0);var g=m("key,ref,slot,slot-scope,is");function y(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function _(e,t){return b.call(e,t)}function w(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}var I=/-(\w)/g,O=w((function(e){return e.replace(I,(function(e,t){return t?t.toUpperCase():""}))})),k=w((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),E=/\B([A-Z])/g,T=w((function(e){return e.replace(E,"-$1").toLowerCase()}));function S(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function A(e,t){return e.bind(t)}var C=Function.prototype.bind?A:S;function R(e,t){t=t||0;var n=e.length-t,r=new Array(n);while(n--)r[n]=e[n+t];return r}function P(e,t){for(var n in t)e[n]=t[n];return e}function x(e){for(var t={},n=0;n<e.length;n++)e[n]&&P(t,e[n]);return t}function j(e,t,n){}var N=function(e,t,n){return!1},L=function(e){return e};function D(e,t){if(e===t)return!0;var n=c(e),r=c(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),o=Array.isArray(t);if(i&&o)return e.length===t.length&&e.every((function(e,n){return D(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||o)return!1;var a=Object.keys(e),s=Object.keys(t);return a.length===s.length&&a.every((function(n){return D(e[n],t[n])}))}catch(u){return!1}}function M(e,t){for(var n=0;n<e.length;n++)if(D(e[n],t))return n;return-1}function $(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var U="data-server-rendered",F=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],z={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:N,isReservedAttr:N,isUnknownElement:N,getTagNamespace:j,parsePlatformTagName:L,mustUseProp:N,async:!0,_lifecycleHooks:V},H=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function W(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function B(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var G=new RegExp("[^"+H.source+".$_\\d]");function q(e){if(!G.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var K,J="__proto__"in{},Y="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Z=X&&WXEnvironment.platform.toLowerCase(),Q=Y&&window.navigator.userAgent.toLowerCase(),ee=Q&&/msie|trident/.test(Q),te=Q&&Q.indexOf("msie 9.0")>0,ne=Q&&Q.indexOf("edge/")>0,re=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===Z),ie=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/)),oe={}.watch,ae=!1;if(Y)try{var se={};Object.defineProperty(se,"passive",{get:function(){ae=!0}}),window.addEventListener("test-passive",null,se)}catch(ka){}var ce=function(){return void 0===K&&(K=!Y&&!X&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),K},ue=Y&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function le(e){return"function"===typeof e&&/native code/.test(e.toString())}var de,fe="undefined"!==typeof Symbol&&le(Symbol)&&"undefined"!==typeof Reflect&&le(Reflect.ownKeys);de="undefined"!==typeof Set&&le(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var he=j,pe=0,ve=function(){this.id=pe++,this.subs=[]};ve.prototype.addSub=function(e){this.subs.push(e)},ve.prototype.removeSub=function(e){y(this.subs,e)},ve.prototype.depend=function(){ve.target&&ve.target.addDep(this)},ve.prototype.notify=function(){var e=this.subs.slice();for(var t=0,n=e.length;t<n;t++)e[t].update()},ve.target=null;var me=[];function ge(e){me.push(e),ve.target=e}function ye(){me.pop(),ve.target=me[me.length-1]}var be=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},_e={child:{configurable:!0}};_e.child.get=function(){return this.componentInstance},Object.defineProperties(be.prototype,_e);var we=function(e){void 0===e&&(e="");var t=new be;return t.text=e,t.isComment=!0,t};function Ie(e){return new be(void 0,void 0,void 0,String(e))}function Oe(e){var t=new be(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var ke=Array.prototype,Ee=Object.create(ke),Te=["push","pop","shift","unshift","splice","sort","reverse"];Te.forEach((function(e){var t=ke[e];B(Ee,e,(function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,o=t.apply(this,n),a=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&a.observeArray(i),a.dep.notify(),o}))}));var Se=Object.getOwnPropertyNames(Ee),Ae=!0;function Ce(e){Ae=e}var Re=function(e){this.value=e,this.dep=new ve,this.vmCount=0,B(e,"__ob__",this),Array.isArray(e)?(J?Pe(e,Ee):xe(e,Ee,Se),this.observeArray(e)):this.walk(e)};function Pe(e,t){e.__proto__=t}function xe(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];B(e,o,t[o])}}function je(e,t){var n;if(c(e)&&!(e instanceof be))return _(e,"__ob__")&&e.__ob__ instanceof Re?n=e.__ob__:Ae&&!ce()&&(Array.isArray(e)||l(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new Re(e)),t&&n&&n.vmCount++,n}function Ne(e,t,n,r,i){var o=new ve,a=Object.getOwnPropertyDescriptor(e,t);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set;s&&!c||2!==arguments.length||(n=e[t]);var u=!i&&je(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=s?s.call(e):n;return ve.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(t)&&Me(t))),t},set:function(t){var r=s?s.call(e):n;t===r||t!==t&&r!==r||s&&!c||(c?c.call(e,t):n=t,u=!i&&je(t),o.notify())}})}}function Le(e,t,n){if(Array.isArray(e)&&f(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(Ne(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function De(e,t){if(Array.isArray(e)&&f(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||_(e,t)&&(delete e[t],n&&n.dep.notify())}}function Me(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&Me(t)}Re.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)Ne(e,t[n])},Re.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)je(e[t])};var $e=z.optionMergeStrategies;function Ue(e,t){if(!t)return e;for(var n,r,i,o=fe?Reflect.ownKeys(t):Object.keys(t),a=0;a<o.length;a++)n=o[a],"__ob__"!==n&&(r=e[n],i=t[n],_(e,n)?r!==i&&l(r)&&l(i)&&Ue(r,i):Le(e,n,i));return e}function Fe(e,t,n){return n?function(){var r="function"===typeof t?t.call(n,n):t,i="function"===typeof e?e.call(n,n):e;return r?Ue(r,i):i}:t?e?function(){return Ue("function"===typeof t?t.call(this,this):t,"function"===typeof e?e.call(this,this):e)}:t:e}function Ve(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?ze(n):n}function ze(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function He(e,t,n,r){var i=Object.create(e||null);return t?P(i,t):i}$e.data=function(e,t,n){return n?Fe(e,t,n):t&&"function"!==typeof t?e:Fe(e,t)},V.forEach((function(e){$e[e]=Ve})),F.forEach((function(e){$e[e+"s"]=He})),$e.watch=function(e,t,n,r){if(e===oe&&(e=void 0),t===oe&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var o in P(i,e),t){var a=i[o],s=t[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},$e.props=$e.methods=$e.inject=$e.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return P(i,e),t&&P(i,t),i},$e.provide=Fe;var We=function(e,t){return void 0===t?e:t};function Be(e,t){var n=e.props;if(n){var r,i,o,a={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(o=O(i),a[o]={type:null})}else if(l(n))for(var s in n)i=n[s],o=O(s),a[o]=l(i)?i:{type:i};else 0;e.props=a}}function Ge(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var o in n){var a=n[o];r[o]=l(a)?P({from:o},a):{from:a}}else 0}}function qe(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"===typeof r&&(t[n]={bind:r,update:r})}}function Ke(e,t,n){if("function"===typeof t&&(t=t.options),Be(t,n),Ge(t,n),qe(t),!t._base&&(t.extends&&(e=Ke(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=Ke(e,t.mixins[r],n);var o,a={};for(o in e)s(o);for(o in t)_(e,o)||s(o);function s(r){var i=$e[r]||We;a[r]=i(e[r],t[r],n,r)}return a}function Je(e,t,n,r){if("string"===typeof n){var i=e[t];if(_(i,n))return i[n];var o=O(n);if(_(i,o))return i[o];var a=k(o);if(_(i,a))return i[a];var s=i[n]||i[o]||i[a];return s}}function Ye(e,t,n,r){var i=t[e],o=!_(n,e),a=n[e],s=tt(Boolean,i.type);if(s>-1)if(o&&!_(i,"default"))a=!1;else if(""===a||a===T(e)){var c=tt(String,i.type);(c<0||s<c)&&(a=!0)}if(void 0===a){a=Xe(r,i,e);var u=Ae;Ce(!0),je(a),Ce(u)}return a}function Xe(e,t,n){if(_(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"===typeof r&&"Function"!==Qe(t.type)?r.call(e):r}}var Ze=/^\s*function (\w+)/;function Qe(e){var t=e&&e.toString().match(Ze);return t?t[1]:""}function et(e,t){return Qe(e)===Qe(t)}function tt(e,t){if(!Array.isArray(t))return et(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(et(t[n],e))return n;return-1}function nt(e,t,n){ge();try{if(t){var r=t;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var a=!1===i[o].call(r,e,t,n);if(a)return}catch(ka){it(ka,r,"errorCaptured hook")}}}it(e,t,n)}finally{ye()}}function rt(e,t,n,r,i){var o;try{o=n?e.apply(t,n):e.call(t),o&&!o._isVue&&h(o)&&!o._handled&&(o.catch((function(e){return nt(e,r,i+" (Promise/async)")})),o._handled=!0)}catch(ka){nt(ka,r,i)}return o}function it(e,t,n){if(z.errorHandler)try{return z.errorHandler.call(null,e,t,n)}catch(ka){ka!==e&&ot(ka,null,"config.errorHandler")}ot(e,t,n)}function ot(e,t,n){if(!Y&&!X||"undefined"===typeof console)throw e;console.error(e)}var at,st=!1,ct=[],ut=!1;function lt(){ut=!1;var e=ct.slice(0);ct.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&le(Promise)){var dt=Promise.resolve();at=function(){dt.then(lt),re&&setTimeout(j)},st=!0}else if(ee||"undefined"===typeof MutationObserver||!le(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())at="undefined"!==typeof setImmediate&&le(setImmediate)?function(){setImmediate(lt)}:function(){setTimeout(lt,0)};else{var ft=1,ht=new MutationObserver(lt),pt=document.createTextNode(String(ft));ht.observe(pt,{characterData:!0}),at=function(){ft=(ft+1)%2,pt.data=String(ft)},st=!0}function vt(e,t){var n;if(ct.push((function(){if(e)try{e.call(t)}catch(ka){nt(ka,t,"nextTick")}else n&&n(t)})),ut||(ut=!0,at()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){n=e}))}var mt=new de;function gt(e){yt(e,mt),mt.clear()}function yt(e,t){var n,r,i=Array.isArray(e);if(!(!i&&!c(e)||Object.isFrozen(e)||e instanceof be)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(i){n=e.length;while(n--)yt(e[n],t)}else{r=Object.keys(e),n=r.length;while(n--)yt(e[r[n]],t)}}}var bt=w((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var r="!"===e.charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}}));function _t(e,t){function n(){var e=arguments,r=n.fns;if(!Array.isArray(r))return rt(r,null,arguments,t,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)rt(i[o],null,e,t,"v-on handler")}return n.fns=e,n}function wt(e,t,n,i,a,s){var c,u,l,d;for(c in e)u=e[c],l=t[c],d=bt(c),r(u)||(r(l)?(r(u.fns)&&(u=e[c]=_t(u,s)),o(d.once)&&(u=e[c]=a(d.name,u,d.capture)),n(d.name,u,d.capture,d.passive,d.params)):u!==l&&(l.fns=u,e[c]=l));for(c in t)r(e[c])&&(d=bt(c),i(d.name,t[c],d.capture))}function It(e,t,n){var a;e instanceof be&&(e=e.data.hook||(e.data.hook={}));var s=e[t];function c(){n.apply(this,arguments),y(a.fns,c)}r(s)?a=_t([c]):i(s.fns)&&o(s.merged)?(a=s,a.fns.push(c)):a=_t([s,c]),a.merged=!0,e[t]=a}function Ot(e,t,n){var o=t.options.props;if(!r(o)){var a={},s=e.attrs,c=e.props;if(i(s)||i(c))for(var u in o){var l=T(u);kt(a,c,u,l,!0)||kt(a,s,u,l,!1)}return a}}function kt(e,t,n,r,o){if(i(t)){if(_(t,n))return e[n]=t[n],o||delete t[n],!0;if(_(t,r))return e[n]=t[r],o||delete t[r],!0}return!1}function Et(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function Tt(e){return s(e)?[Ie(e)]:Array.isArray(e)?At(e):void 0}function St(e){return i(e)&&i(e.text)&&a(e.isComment)}function At(e,t){var n,a,c,u,l=[];for(n=0;n<e.length;n++)a=e[n],r(a)||"boolean"===typeof a||(c=l.length-1,u=l[c],Array.isArray(a)?a.length>0&&(a=At(a,(t||"")+"_"+n),St(a[0])&&St(u)&&(l[c]=Ie(u.text+a[0].text),a.shift()),l.push.apply(l,a)):s(a)?St(u)?l[c]=Ie(u.text+a):""!==a&&l.push(Ie(a)):St(a)&&St(u)?l[c]=Ie(u.text+a.text):(o(e._isVList)&&i(a.tag)&&r(a.key)&&i(t)&&(a.key="__vlist"+t+"_"+n+"__"),l.push(a)));return l}function Ct(e){var t=e.$options.provide;t&&(e._provided="function"===typeof t?t.call(e):t)}function Rt(e){var t=Pt(e.$options.inject,e);t&&(Ce(!1),Object.keys(t).forEach((function(n){Ne(e,n,t[n])})),Ce(!0))}function Pt(e,t){if(e){for(var n=Object.create(null),r=fe?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var a=e[o].from,s=t;while(s){if(s._provided&&_(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in e[o]){var c=e[o].default;n[o]="function"===typeof c?c.call(t):c}else 0}}return n}}function xt(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==t&&o.fnContext!==t||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(jt)&&delete n[u];return n}function jt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Nt(e){return e.isComment&&e.asyncFactory}function Lt(e,t,r){var i,o=Object.keys(t).length>0,a=e?!!e.$stable:!o,s=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(a&&r&&r!==n&&s===r.$key&&!o&&!r.$hasNormal)return r;for(var c in i={},e)e[c]&&"$"!==c[0]&&(i[c]=Dt(t,c,e[c]))}else i={};for(var u in t)u in i||(i[u]=Mt(t,u));return e&&Object.isExtensible(e)&&(e._normalized=i),B(i,"$stable",a),B(i,"$key",s),B(i,"$hasNormal",o),i}function Dt(e,t,n){var r=function(){var e=arguments.length?n.apply(null,arguments):n({});e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:Tt(e);var t=e&&e[0];return e&&(!t||1===e.length&&t.isComment&&!Nt(t))?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function Mt(e,t){return function(){return e[t]}}function $t(e,t){var n,r,o,a,s;if(Array.isArray(e)||"string"===typeof e)for(n=new Array(e.length),r=0,o=e.length;r<o;r++)n[r]=t(e[r],r);else if("number"===typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(c(e))if(fe&&e[Symbol.iterator]){n=[];var u=e[Symbol.iterator](),l=u.next();while(!l.done)n.push(t(l.value,n.length)),l=u.next()}else for(a=Object.keys(e),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=t(e[s],s,r);return i(n)||(n=[]),n._isVList=!0,n}function Ut(e,t,n,r){var i,o=this.$scopedSlots[e];o?(n=n||{},r&&(n=P(P({},r),n)),i=o(n)||("function"===typeof t?t():t)):i=this.$slots[e]||("function"===typeof t?t():t);var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function Ft(e){return Je(this.$options,"filters",e,!0)||L}function Vt(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function zt(e,t,n,r,i){var o=z.keyCodes[t]||n;return i&&r&&!z.keyCodes[t]?Vt(i,r):o?Vt(o,e):r?T(r)!==t:void 0===e}function Ht(e,t,n,r,i){if(n)if(c(n)){var o;Array.isArray(n)&&(n=x(n));var a=function(a){if("class"===a||"style"===a||g(a))o=e;else{var s=e.attrs&&e.attrs.type;o=r||z.mustUseProp(t,s,a)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=O(a),u=T(a);if(!(c in o)&&!(u in o)&&(o[a]=n[a],i)){var l=e.on||(e.on={});l["update:"+a]=function(e){n[a]=e}}};for(var s in n)a(s)}else;return e}function Wt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Gt(r,"__static__"+e,!1)),r}function Bt(e,t,n){return Gt(e,"__once__"+t+(n?"_"+n:""),!0),e}function Gt(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!==typeof e[r]&&qt(e[r],t+"_"+r,n);else qt(e,t,n)}function qt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function Kt(e,t){if(t)if(l(t)){var n=e.on=e.on?P({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function Jt(e,t,n,r){t=t||{$stable:!n};for(var i=0;i<e.length;i++){var o=e[i];Array.isArray(o)?Jt(o,t,n):o&&(o.proxy&&(o.fn.proxy=!0),t[o.key]=o.fn)}return r&&(t.$key=r),t}function Yt(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"===typeof r&&r&&(e[t[n]]=t[n+1])}return e}function Xt(e,t){return"string"===typeof e?t+e:e}function Zt(e){e._o=Bt,e._n=v,e._s=p,e._l=$t,e._t=Ut,e._q=D,e._i=M,e._m=Wt,e._f=Ft,e._k=zt,e._b=Ht,e._v=Ie,e._e=we,e._u=Jt,e._g=Kt,e._d=Yt,e._p=Xt}function Qt(e,t,r,i,a){var s,c=this,u=a.options;_(i,"_uid")?(s=Object.create(i),s._original=i):(s=i,i=i._original);var l=o(u._compiled),d=!l;this.data=e,this.props=t,this.children=r,this.parent=i,this.listeners=e.on||n,this.injections=Pt(u.inject,i),this.slots=function(){return c.$slots||Lt(e.scopedSlots,c.$slots=xt(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Lt(e.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Lt(e.scopedSlots,this.$slots)),u._scopeId?this._c=function(e,t,n,r){var o=hn(s,e,t,n,r,d);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=i),o}:this._c=function(e,t,n,r){return hn(s,e,t,n,r,d)}}function en(e,t,r,o,a){var s=e.options,c={},u=s.props;if(i(u))for(var l in u)c[l]=Ye(l,u,t||n);else i(r.attrs)&&nn(c,r.attrs),i(r.props)&&nn(c,r.props);var d=new Qt(r,c,a,o,e),f=s.render.call(null,d._c,d);if(f instanceof be)return tn(f,r,d.parent,s,d);if(Array.isArray(f)){for(var h=Tt(f)||[],p=new Array(h.length),v=0;v<h.length;v++)p[v]=tn(h[v],r,d.parent,s,d);return p}}function tn(e,t,n,r,i){var o=Oe(e);return o.fnContext=n,o.fnOptions=r,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function nn(e,t){for(var n in t)e[O(n)]=t[n]}Zt(Qt.prototype);var rn={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;rn.prepatch(n,n)}else{var r=e.componentInstance=sn(e,Pn);r.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,r=t.componentInstance=e.componentInstance;Dn(r,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,Fn(n,"mounted")),e.data.keepAlive&&(t._isMounted?Qn(n):$n(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Un(t,!0):t.$destroy())}},on=Object.keys(rn);function an(e,t,n,a,s){if(!r(e)){var u=n.$options._base;if(c(e)&&(e=u.extend(e)),"function"===typeof e){var l;if(r(e.cid)&&(l=e,e=On(l,u),void 0===e))return In(l,t,n,a,s);t=t||{},Ir(e),i(t.model)&&ln(e.options,t);var d=Ot(t,e,s);if(o(e.options.functional))return en(e,d,t,n,a);var f=t.on;if(t.on=t.nativeOn,o(e.options.abstract)){var h=t.slot;t={},h&&(t.slot=h)}cn(t);var p=e.options.name||s,v=new be("vue-component-"+e.cid+(p?"-"+p:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:d,listeners:f,tag:s,children:a},l);return v}}}function sn(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new e.componentOptions.Ctor(n)}function cn(e){for(var t=e.hook||(e.hook={}),n=0;n<on.length;n++){var r=on[n],i=t[r],o=rn[r];i===o||i&&i._merged||(t[r]=i?un(o,i):o)}}function un(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function ln(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var o=t.on||(t.on={}),a=o[r],s=t.model.callback;i(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[r]=[s].concat(a)):o[r]=s}var dn=1,fn=2;function hn(e,t,n,r,i,a){return(Array.isArray(n)||s(n))&&(i=r,r=n,n=void 0),o(a)&&(i=fn),pn(e,t,n,r,i)}function pn(e,t,n,r,o){if(i(n)&&i(n.__ob__))return we();if(i(n)&&i(n.is)&&(t=n.is),!t)return we();var a,s,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===fn?r=Tt(r):o===dn&&(r=Et(r)),"string"===typeof t)?(s=e.$vnode&&e.$vnode.ns||z.getTagNamespace(t),a=z.isReservedTag(t)?new be(z.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!i(c=Je(e.$options,"components",t))?new be(t,n,r,void 0,void 0,e):an(c,n,e,r,t)):a=an(t,n,e,r);return Array.isArray(a)?a:i(a)?(i(s)&&vn(a,s),i(n)&&mn(n),a):we()}function vn(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),i(e.children))for(var a=0,s=e.children.length;a<s;a++){var c=e.children[a];i(c.tag)&&(r(c.ns)||o(n)&&"svg"!==c.tag)&&vn(c,t,n)}}function mn(e){c(e.style)&&gt(e.style),c(e.class)&&gt(e.class)}function gn(e){e._vnode=null,e._staticTrees=null;var t=e.$options,r=e.$vnode=t._parentVnode,i=r&&r.context;e.$slots=xt(t._renderChildren,i),e.$scopedSlots=n,e._c=function(t,n,r,i){return hn(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return hn(e,t,n,r,i,!0)};var o=r&&r.data;Ne(e,"$attrs",o&&o.attrs||n,null,!0),Ne(e,"$listeners",t._parentListeners||n,null,!0)}var yn,bn=null;function _n(e){Zt(e.prototype),e.prototype.$nextTick=function(e){return vt(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,i=n._parentVnode;i&&(t.$scopedSlots=Lt(i.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=i;try{bn=t,e=r.call(t._renderProxy,t.$createElement)}catch(ka){nt(ka,t,"render"),e=t._vnode}finally{bn=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof be||(e=we()),e.parent=i,e}}function wn(e,t){return(e.__esModule||fe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),c(e)?t.extend(e):e}function In(e,t,n,r,i){var o=we();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}function On(e,t){if(o(e.error)&&i(e.errorComp))return e.errorComp;if(i(e.resolved))return e.resolved;var n=bn;if(n&&i(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),o(e.loading)&&i(e.loadingComp))return e.loadingComp;if(n&&!i(e.owners)){var a=e.owners=[n],s=!0,u=null,l=null;n.$on("hook:destroyed",(function(){return y(a,n)}));var d=function(e){for(var t=0,n=a.length;t<n;t++)a[t].$forceUpdate();e&&(a.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},f=$((function(n){e.resolved=wn(n,t),s?a.length=0:d(!0)})),p=$((function(t){i(e.errorComp)&&(e.error=!0,d(!0))})),v=e(f,p);return c(v)&&(h(v)?r(e.resolved)&&v.then(f,p):h(v.component)&&(v.component.then(f,p),i(v.error)&&(e.errorComp=wn(v.error,t)),i(v.loading)&&(e.loadingComp=wn(v.loading,t),0===v.delay?e.loading=!0:u=setTimeout((function(){u=null,r(e.resolved)&&r(e.error)&&(e.loading=!0,d(!1))}),v.delay||200)),i(v.timeout)&&(l=setTimeout((function(){l=null,r(e.resolved)&&p(null)}),v.timeout)))),s=!1,e.loading?e.loadingComp:e.resolved}}function kn(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(i(n)&&(i(n.componentOptions)||Nt(n)))return n}}function En(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Cn(e,t)}function Tn(e,t){yn.$on(e,t)}function Sn(e,t){yn.$off(e,t)}function An(e,t){var n=yn;return function r(){var i=t.apply(null,arguments);null!==i&&n.$off(e,r)}}function Cn(e,t,n){yn=e,wt(t,n||{},Tn,Sn,An,e),yn=void 0}function Rn(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var i=0,o=e.length;i<o;i++)r.$on(e[i],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)n.$off(e[r],t);return n}var o,a=n._events[e];if(!a)return n;if(!t)return n._events[e]=null,n;var s=a.length;while(s--)if(o=a[s],o===t||o.fn===t){a.splice(s,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?R(n):n;for(var r=R(arguments,1),i='event handler for "'+e+'"',o=0,a=n.length;o<a;o++)rt(n[o],t,r,t,i)}return t}}var Pn=null;function xn(e){var t=Pn;return Pn=e,function(){Pn=t}}function jn(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Nn(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=xn(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Fn(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||y(t.$children,e),e._watcher&&e._watcher.teardown();var n=e._watchers.length;while(n--)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Fn(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Ln(e,t,n){var r;return e.$el=t,e.$options.render||(e.$options.render=we),Fn(e,"beforeMount"),r=function(){e._update(e._render(),n)},new rr(e,r,j,{before:function(){e._isMounted&&!e._isDestroyed&&Fn(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,Fn(e,"mounted")),e}function Dn(e,t,r,i,o){var a=i.data.scopedSlots,s=e.$scopedSlots,c=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&e.$scopedSlots.$key!==a.$key||!a&&e.$scopedSlots.$key),u=!!(o||e.$options._renderChildren||c);if(e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=o,e.$attrs=i.data.attrs||n,e.$listeners=r||n,t&&e.$options.props){Ce(!1);for(var l=e._props,d=e.$options._propKeys||[],f=0;f<d.length;f++){var h=d[f],p=e.$options.props;l[h]=Ye(h,p,t,e)}Ce(!0),e.$options.propsData=t}r=r||n;var v=e.$options._parentListeners;e.$options._parentListeners=r,Cn(e,r,v),u&&(e.$slots=xt(o,i.context),e.$forceUpdate())}function Mn(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function $n(e,t){if(t){if(e._directInactive=!1,Mn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)$n(e.$children[n]);Fn(e,"activated")}}function Un(e,t){if((!t||(e._directInactive=!0,!Mn(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Un(e.$children[n]);Fn(e,"deactivated")}}function Fn(e,t){ge();var n=e.$options[t],r=t+" hook";if(n)for(var i=0,o=n.length;i<o;i++)rt(n[i],e,null,e,r);e._hasHookEvent&&e.$emit("hook:"+t),ye()}var Vn=[],zn=[],Hn={},Wn=!1,Bn=!1,Gn=0;function qn(){Gn=Vn.length=zn.length=0,Hn={},Wn=Bn=!1}var Kn=0,Jn=Date.now;if(Y&&!ee){var Yn=window.performance;Yn&&"function"===typeof Yn.now&&Jn()>document.createEvent("Event").timeStamp&&(Jn=function(){return Yn.now()})}function Xn(){var e,t;for(Kn=Jn(),Bn=!0,Vn.sort((function(e,t){return e.id-t.id})),Gn=0;Gn<Vn.length;Gn++)e=Vn[Gn],e.before&&e.before(),t=e.id,Hn[t]=null,e.run();var n=zn.slice(),r=Vn.slice();qn(),er(n),Zn(r),ue&&z.devtools&&ue.emit("flush")}function Zn(e){var t=e.length;while(t--){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Fn(r,"updated")}}function Qn(e){e._inactive=!1,zn.push(e)}function er(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,$n(e[t],!0)}function tr(e){var t=e.id;if(null==Hn[t]){if(Hn[t]=!0,Bn){var n=Vn.length-1;while(n>Gn&&Vn[n].id>e.id)n--;Vn.splice(n+1,0,e)}else Vn.push(e);Wn||(Wn=!0,vt(Xn))}}var nr=0,rr=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++nr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new de,this.newDepIds=new de,this.expression="","function"===typeof t?this.getter=t:(this.getter=q(t),this.getter||(this.getter=j)),this.value=this.lazy?void 0:this.get()};rr.prototype.get=function(){var e;ge(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(ka){if(!this.user)throw ka;nt(ka,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&gt(e),ye(),this.cleanupDeps()}return e},rr.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},rr.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},rr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():tr(this)},rr.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||c(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'+this.expression+'"';rt(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},rr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},rr.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},rr.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var ir={enumerable:!0,configurable:!0,get:j,set:j};function or(e,t,n){ir.get=function(){return this[t][n]},ir.set=function(e){this[t][n]=e},Object.defineProperty(e,n,ir)}function ar(e){e._watchers=[];var t=e.$options;t.props&&sr(e,t.props),t.methods&&vr(e,t.methods),t.data?cr(e):je(e._data={},!0),t.computed&&dr(e,t.computed),t.watch&&t.watch!==oe&&mr(e,t.watch)}function sr(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[],o=!e.$parent;o||Ce(!1);var a=function(o){i.push(o);var a=Ye(o,t,n,e);Ne(r,o,a),o in e||or(e,"_props",o)};for(var s in t)a(s);Ce(!0)}function cr(e){var t=e.$options.data;t=e._data="function"===typeof t?ur(t,e):t||{},l(t)||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);while(i--){var o=n[i];0,r&&_(r,o)||W(o)||or(e,"_data",o)}je(t,!0)}function ur(e,t){ge();try{return e.call(t,t)}catch(ka){return nt(ka,t,"data()"),{}}finally{ye()}}var lr={lazy:!0};function dr(e,t){var n=e._computedWatchers=Object.create(null),r=ce();for(var i in t){var o=t[i],a="function"===typeof o?o:o.get;0,r||(n[i]=new rr(e,a||j,j,lr)),i in e||fr(e,i,o)}}function fr(e,t,n){var r=!ce();"function"===typeof n?(ir.get=r?hr(t):pr(n),ir.set=j):(ir.get=n.get?r&&!1!==n.cache?hr(t):pr(n.get):j,ir.set=n.set||j),Object.defineProperty(e,t,ir)}function hr(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),ve.target&&t.depend(),t.value}}function pr(e){return function(){return e.call(this,this)}}function vr(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?j:C(t[n],e)}function mr(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)gr(e,n,r[i]);else gr(e,n,r)}}function gr(e,t,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,r)}function yr(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Le,e.prototype.$delete=De,e.prototype.$watch=function(e,t,n){var r=this;if(l(t))return gr(r,e,t,n);n=n||{},n.user=!0;var i=new rr(r,e,t,n);if(n.immediate){var o='callback for immediate watcher "'+i.expression+'"';ge(),rt(t,r,[i.value],r,o),ye()}return function(){i.teardown()}}}var br=0;function _r(e){e.prototype._init=function(e){var t=this;t._uid=br++,t._isVue=!0,e&&e._isComponent?wr(t,e):t.$options=Ke(Ir(t.constructor),e||{},t),t._renderProxy=t,t._self=t,jn(t),En(t),gn(t),Fn(t,"beforeCreate"),Rt(t),ar(t),Ct(t),Fn(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function wr(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Ir(e){var t=e.options;if(e.super){var n=Ir(e.super),r=e.superOptions;if(n!==r){e.superOptions=n;var i=Or(e);i&&P(e.extendOptions,i),t=e.options=Ke(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Or(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}function kr(e){this._init(e)}function Er(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=R(arguments,1);return n.unshift(this),"function"===typeof e.install?e.install.apply(e,n):"function"===typeof e&&e.apply(null,n),t.push(e),this}}function Tr(e){e.mixin=function(e){return this.options=Ke(this.options,e),this}}function Sr(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name;var a=function(e){this._init(e)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=t++,a.options=Ke(n.options,e),a["super"]=n,a.options.props&&Ar(a),a.options.computed&&Cr(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,F.forEach((function(e){a[e]=n[e]})),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=P({},a.options),i[r]=a,a}}function Ar(e){var t=e.options.props;for(var n in t)or(e.prototype,"_props",n)}function Cr(e){var t=e.options.computed;for(var n in t)fr(e.prototype,n,t[n])}function Rr(e){F.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&l(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"===typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}function Pr(e){return e&&(e.Ctor.options.name||e.tag)}function xr(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!d(e)&&e.test(t)}function jr(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var a=n[o];if(a){var s=a.name;s&&!t(s)&&Nr(n,o,r,i)}}}function Nr(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,y(n,t)}_r(kr),yr(kr),Rn(kr),Nn(kr),_n(kr);var Lr=[String,RegExp,Array],Dr={name:"keep-alive",abstract:!0,props:{include:Lr,exclude:Lr,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,r=e.vnodeToCache,i=e.keyToCache;if(r){var o=r.tag,a=r.componentInstance,s=r.componentOptions;t[i]={name:Pr(s),tag:o,componentInstance:a},n.push(i),this.max&&n.length>parseInt(this.max)&&Nr(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Nr(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){jr(e,(function(e){return xr(t,e)}))})),this.$watch("exclude",(function(t){jr(e,(function(e){return!xr(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=kn(e),n=t&&t.componentOptions;if(n){var r=Pr(n),i=this,o=i.include,a=i.exclude;if(o&&(!r||!xr(o,r))||a&&r&&xr(a,r))return t;var s=this,c=s.cache,u=s.keys,l=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;c[l]?(t.componentInstance=c[l].componentInstance,y(u,l),u.push(l)):(this.vnodeToCache=t,this.keyToCache=l),t.data.keepAlive=!0}return t||e&&e[0]}},Mr={KeepAlive:Dr};function $r(e){var t={get:function(){return z}};Object.defineProperty(e,"config",t),e.util={warn:he,extend:P,mergeOptions:Ke,defineReactive:Ne},e.set=Le,e.delete=De,e.nextTick=vt,e.observable=function(e){return je(e),e},e.options=Object.create(null),F.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,P(e.options.components,Mr),Er(e),Tr(e),Sr(e),Rr(e)}$r(kr),Object.defineProperty(kr.prototype,"$isServer",{get:ce}),Object.defineProperty(kr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(kr,"FunctionalRenderContext",{value:Qt}),kr.version="2.6.14";var Ur=m("style,class"),Fr=m("input,textarea,option,select,progress"),Vr=function(e,t,n){return"value"===n&&Fr(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},zr=m("contenteditable,draggable,spellcheck"),Hr=m("events,caret,typing,plaintext-only"),Wr=function(e,t){return Jr(t)||"false"===t?"false":"contenteditable"===e&&Hr(t)?t:"true"},Br=m("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Gr="http://www.w3.org/1999/xlink",qr=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Kr=function(e){return qr(e)?e.slice(6,e.length):""},Jr=function(e){return null==e||!1===e};function Yr(e){var t=e.data,n=e,r=e;while(i(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(t=Xr(r.data,t));while(i(n=n.parent))n&&n.data&&(t=Xr(t,n.data));return Zr(t.staticClass,t.class)}function Xr(e,t){return{staticClass:Qr(e.staticClass,t.staticClass),class:i(e.class)?[e.class,t.class]:t.class}}function Zr(e,t){return i(e)||i(t)?Qr(e,ei(t)):""}function Qr(e,t){return e?t?e+" "+t:e:t||""}function ei(e){return Array.isArray(e)?ti(e):c(e)?ni(e):"string"===typeof e?e:""}function ti(e){for(var t,n="",r=0,o=e.length;r<o;r++)i(t=ei(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function ni(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var ri={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ii=m("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),oi=m("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ai=function(e){return ii(e)||oi(e)};function si(e){return oi(e)?"svg":"math"===e?"math":void 0}var ci=Object.create(null);function ui(e){if(!Y)return!0;if(ai(e))return!1;if(e=e.toLowerCase(),null!=ci[e])return ci[e];var t=document.createElement(e);return e.indexOf("-")>-1?ci[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:ci[e]=/HTMLUnknownElement/.test(t.toString())}var li=m("text,number,password,search,email,tel,url");function di(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function fi(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function hi(e,t){return document.createElementNS(ri[e],t)}function pi(e){return document.createTextNode(e)}function vi(e){return document.createComment(e)}function mi(e,t,n){e.insertBefore(t,n)}function gi(e,t){e.removeChild(t)}function yi(e,t){e.appendChild(t)}function bi(e){return e.parentNode}function _i(e){return e.nextSibling}function wi(e){return e.tagName}function Ii(e,t){e.textContent=t}function Oi(e,t){e.setAttribute(t,"")}var ki=Object.freeze({createElement:fi,createElementNS:hi,createTextNode:pi,createComment:vi,insertBefore:mi,removeChild:gi,appendChild:yi,parentNode:bi,nextSibling:_i,tagName:wi,setTextContent:Ii,setStyleScope:Oi}),Ei={create:function(e,t){Ti(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Ti(e,!0),Ti(t))},destroy:function(e){Ti(e,!0)}};function Ti(e,t){var n=e.data.ref;if(i(n)){var r=e.context,o=e.componentInstance||e.elm,a=r.$refs;t?Array.isArray(a[n])?y(a[n],o):a[n]===o&&(a[n]=void 0):e.data.refInFor?Array.isArray(a[n])?a[n].indexOf(o)<0&&a[n].push(o):a[n]=[o]:a[n]=o}}var Si=new be("",{},[]),Ai=["create","activate","update","remove","destroy"];function Ci(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&i(e.data)===i(t.data)&&Ri(e,t)||o(e.isAsyncPlaceholder)&&r(t.asyncFactory.error))}function Ri(e,t){if("input"!==e.tag)return!0;var n,r=i(n=e.data)&&i(n=n.attrs)&&n.type,o=i(n=t.data)&&i(n=n.attrs)&&n.type;return r===o||li(r)&&li(o)}function Pi(e,t,n){var r,o,a={};for(r=t;r<=n;++r)o=e[r].key,i(o)&&(a[o]=r);return a}function xi(e){var t,n,a={},c=e.modules,u=e.nodeOps;for(t=0;t<Ai.length;++t)for(a[Ai[t]]=[],n=0;n<c.length;++n)i(c[n][Ai[t]])&&a[Ai[t]].push(c[n][Ai[t]]);function l(e){return new be(u.tagName(e).toLowerCase(),{},[],void 0,e)}function d(e,t){function n(){0===--n.listeners&&f(e)}return n.listeners=t,n}function f(e){var t=u.parentNode(e);i(t)&&u.removeChild(t,e)}function h(e,t,n,r,a,s,c){if(i(e.elm)&&i(s)&&(e=s[c]=Oe(e)),e.isRootInsert=!a,!p(e,t,n,r)){var l=e.data,d=e.children,f=e.tag;i(f)?(e.elm=e.ns?u.createElementNS(e.ns,f):u.createElement(f,e),I(e),b(e,d,t),i(l)&&w(e,t),y(n,e.elm,r)):o(e.isComment)?(e.elm=u.createComment(e.text),y(n,e.elm,r)):(e.elm=u.createTextNode(e.text),y(n,e.elm,r))}}function p(e,t,n,r){var a=e.data;if(i(a)){var s=i(e.componentInstance)&&a.keepAlive;if(i(a=a.hook)&&i(a=a.init)&&a(e,!1),i(e.componentInstance))return v(e,t),y(n,e.elm,r),o(s)&&g(e,t,n,r),!0}}function v(e,t){i(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,_(e)?(w(e,t),I(e)):(Ti(e),t.push(e))}function g(e,t,n,r){var o,s=e;while(s.componentInstance)if(s=s.componentInstance._vnode,i(o=s.data)&&i(o=o.transition)){for(o=0;o<a.activate.length;++o)a.activate[o](Si,s);t.push(s);break}y(n,e.elm,r)}function y(e,t,n){i(e)&&(i(n)?u.parentNode(n)===e&&u.insertBefore(e,t,n):u.appendChild(e,t))}function b(e,t,n){if(Array.isArray(t)){0;for(var r=0;r<t.length;++r)h(t[r],n,e.elm,null,!0,t,r)}else s(e.text)&&u.appendChild(e.elm,u.createTextNode(String(e.text)))}function _(e){while(e.componentInstance)e=e.componentInstance._vnode;return i(e.tag)}function w(e,n){for(var r=0;r<a.create.length;++r)a.create[r](Si,e);t=e.data.hook,i(t)&&(i(t.create)&&t.create(Si,e),i(t.insert)&&n.push(e))}function I(e){var t;if(i(t=e.fnScopeId))u.setStyleScope(e.elm,t);else{var n=e;while(n)i(t=n.context)&&i(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t),n=n.parent}i(t=Pn)&&t!==e.context&&t!==e.fnContext&&i(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t)}function O(e,t,n,r,i,o){for(;r<=i;++r)h(n[r],o,e,t,!1,n,r)}function k(e){var t,n,r=e.data;if(i(r))for(i(t=r.hook)&&i(t=t.destroy)&&t(e),t=0;t<a.destroy.length;++t)a.destroy[t](e);if(i(t=e.children))for(n=0;n<e.children.length;++n)k(e.children[n])}function E(e,t,n){for(;t<=n;++t){var r=e[t];i(r)&&(i(r.tag)?(T(r),k(r)):f(r.elm))}}function T(e,t){if(i(t)||i(e.data)){var n,r=a.remove.length+1;for(i(t)?t.listeners+=r:t=d(e.elm,r),i(n=e.componentInstance)&&i(n=n._vnode)&&i(n.data)&&T(n,t),n=0;n<a.remove.length;++n)a.remove[n](e,t);i(n=e.data.hook)&&i(n=n.remove)?n(e,t):t()}else f(e.elm)}function S(e,t,n,o,a){var s,c,l,d,f=0,p=0,v=t.length-1,m=t[0],g=t[v],y=n.length-1,b=n[0],_=n[y],w=!a;while(f<=v&&p<=y)r(m)?m=t[++f]:r(g)?g=t[--v]:Ci(m,b)?(C(m,b,o,n,p),m=t[++f],b=n[++p]):Ci(g,_)?(C(g,_,o,n,y),g=t[--v],_=n[--y]):Ci(m,_)?(C(m,_,o,n,y),w&&u.insertBefore(e,m.elm,u.nextSibling(g.elm)),m=t[++f],_=n[--y]):Ci(g,b)?(C(g,b,o,n,p),w&&u.insertBefore(e,g.elm,m.elm),g=t[--v],b=n[++p]):(r(s)&&(s=Pi(t,f,v)),c=i(b.key)?s[b.key]:A(b,t,f,v),r(c)?h(b,o,e,m.elm,!1,n,p):(l=t[c],Ci(l,b)?(C(l,b,o,n,p),t[c]=void 0,w&&u.insertBefore(e,l.elm,m.elm)):h(b,o,e,m.elm,!1,n,p)),b=n[++p]);f>v?(d=r(n[y+1])?null:n[y+1].elm,O(e,d,n,p,y,o)):p>y&&E(t,f,v)}function A(e,t,n,r){for(var o=n;o<r;o++){var a=t[o];if(i(a)&&Ci(e,a))return o}}function C(e,t,n,s,c,l){if(e!==t){i(t.elm)&&i(s)&&(t=s[c]=Oe(t));var d=t.elm=e.elm;if(o(e.isAsyncPlaceholder))i(t.asyncFactory.resolved)?x(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(o(t.isStatic)&&o(e.isStatic)&&t.key===e.key&&(o(t.isCloned)||o(t.isOnce)))t.componentInstance=e.componentInstance;else{var f,h=t.data;i(h)&&i(f=h.hook)&&i(f=f.prepatch)&&f(e,t);var p=e.children,v=t.children;if(i(h)&&_(t)){for(f=0;f<a.update.length;++f)a.update[f](e,t);i(f=h.hook)&&i(f=f.update)&&f(e,t)}r(t.text)?i(p)&&i(v)?p!==v&&S(d,p,v,n,l):i(v)?(i(e.text)&&u.setTextContent(d,""),O(d,null,v,0,v.length-1,n)):i(p)?E(p,0,p.length-1):i(e.text)&&u.setTextContent(d,""):e.text!==t.text&&u.setTextContent(d,t.text),i(h)&&i(f=h.hook)&&i(f=f.postpatch)&&f(e,t)}}}function R(e,t,n){if(o(n)&&i(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var P=m("attrs,class,staticClass,staticStyle,key");function x(e,t,n,r){var a,s=t.tag,c=t.data,u=t.children;if(r=r||c&&c.pre,t.elm=e,o(t.isComment)&&i(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(i(c)&&(i(a=c.hook)&&i(a=a.init)&&a(t,!0),i(a=t.componentInstance)))return v(t,n),!0;if(i(s)){if(i(u))if(e.hasChildNodes())if(i(a=c)&&i(a=a.domProps)&&i(a=a.innerHTML)){if(a!==e.innerHTML)return!1}else{for(var l=!0,d=e.firstChild,f=0;f<u.length;f++){if(!d||!x(d,u[f],n,r)){l=!1;break}d=d.nextSibling}if(!l||d)return!1}else b(t,u,n);if(i(c)){var h=!1;for(var p in c)if(!P(p)){h=!0,w(t,n);break}!h&&c["class"]&&gt(c["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,s){if(!r(t)){var c=!1,d=[];if(r(e))c=!0,h(t,d);else{var f=i(e.nodeType);if(!f&&Ci(e,t))C(e,t,d,null,null,s);else{if(f){if(1===e.nodeType&&e.hasAttribute(U)&&(e.removeAttribute(U),n=!0),o(n)&&x(e,t,d))return R(t,d,!0),e;e=l(e)}var p=e.elm,v=u.parentNode(p);if(h(t,d,p._leaveCb?null:v,u.nextSibling(p)),i(t.parent)){var m=t.parent,g=_(t);while(m){for(var y=0;y<a.destroy.length;++y)a.destroy[y](m);if(m.elm=t.elm,g){for(var b=0;b<a.create.length;++b)a.create[b](Si,m);var w=m.data.hook.insert;if(w.merged)for(var I=1;I<w.fns.length;I++)w.fns[I]()}else Ti(m);m=m.parent}}i(v)?E([e],0,0):i(e.tag)&&k(e)}}return R(t,d,c),t.elm}i(e)&&k(e)}}var ji={create:Ni,update:Ni,destroy:function(e){Ni(e,Si)}};function Ni(e,t){(e.data.directives||t.data.directives)&&Li(e,t)}function Li(e,t){var n,r,i,o=e===Si,a=t===Si,s=Mi(e.data.directives,e.context),c=Mi(t.data.directives,t.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,Ui(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(Ui(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var d=function(){for(var n=0;n<u.length;n++)Ui(u[n],"inserted",t,e)};o?It(t,"insert",d):d()}if(l.length&&It(t,"postpatch",(function(){for(var n=0;n<l.length;n++)Ui(l[n],"componentUpdated",t,e)})),!o)for(n in s)c[n]||Ui(s[n],"unbind",e,e,a)}var Di=Object.create(null);function Mi(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++)r=e[n],r.modifiers||(r.modifiers=Di),i[$i(r)]=r,r.def=Je(t.$options,"directives",r.name,!0);return i}function $i(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function Ui(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(ka){nt(ka,n.context,"directive "+e.name+" "+t+" hook")}}var Fi=[Ei,ji];function Vi(e,t){var n=t.componentOptions;if((!i(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(e.data.attrs)||!r(t.data.attrs))){var o,a,s,c=t.elm,u=e.data.attrs||{},l=t.data.attrs||{};for(o in i(l.__ob__)&&(l=t.data.attrs=P({},l)),l)a=l[o],s=u[o],s!==a&&zi(c,o,a,t.data.pre);for(o in(ee||ne)&&l.value!==u.value&&zi(c,"value",l.value),u)r(l[o])&&(qr(o)?c.removeAttributeNS(Gr,Kr(o)):zr(o)||c.removeAttribute(o))}}function zi(e,t,n,r){r||e.tagName.indexOf("-")>-1?Hi(e,t,n):Br(t)?Jr(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):zr(t)?e.setAttribute(t,Wr(t,n)):qr(t)?Jr(n)?e.removeAttributeNS(Gr,Kr(t)):e.setAttributeNS(Gr,t,n):Hi(e,t,n)}function Hi(e,t,n){if(Jr(n))e.removeAttribute(t);else{if(ee&&!te&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var Wi={create:Vi,update:Vi};function Bi(e,t){var n=t.elm,o=t.data,a=e.data;if(!(r(o.staticClass)&&r(o.class)&&(r(a)||r(a.staticClass)&&r(a.class)))){var s=Yr(t),c=n._transitionClasses;i(c)&&(s=Qr(s,ei(c))),s!==n._prevClass&&(n.setAttribute("class",s),n._prevClass=s)}}var Gi,qi={create:Bi,update:Bi},Ki="__r",Ji="__c";function Yi(e){if(i(e[Ki])){var t=ee?"change":"input";e[t]=[].concat(e[Ki],e[t]||[]),delete e[Ki]}i(e[Ji])&&(e.change=[].concat(e[Ji],e.change||[]),delete e[Ji])}function Xi(e,t,n){var r=Gi;return function i(){var o=t.apply(null,arguments);null!==o&&eo(e,i,n,r)}}var Zi=st&&!(ie&&Number(ie[1])<=53);function Qi(e,t,n,r){if(Zi){var i=Kn,o=t;t=o._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return o.apply(this,arguments)}}Gi.addEventListener(e,t,ae?{capture:n,passive:r}:n)}function eo(e,t,n,r){(r||Gi).removeEventListener(e,t._wrapper||t,n)}function to(e,t){if(!r(e.data.on)||!r(t.data.on)){var n=t.data.on||{},i=e.data.on||{};Gi=t.elm,Yi(n),wt(n,i,Qi,eo,Xi,t.context),Gi=void 0}}var no,ro={create:to,update:to};function io(e,t){if(!r(e.data.domProps)||!r(t.data.domProps)){var n,o,a=t.elm,s=e.data.domProps||{},c=t.data.domProps||{};for(n in i(c.__ob__)&&(c=t.data.domProps=P({},c)),s)n in c||(a[n]="");for(n in c){if(o=c[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),o===s[n])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===n&&"PROGRESS"!==a.tagName){a._value=o;var u=r(o)?"":String(o);oo(a,u)&&(a.value=u)}else if("innerHTML"===n&&oi(a.tagName)&&r(a.innerHTML)){no=no||document.createElement("div"),no.innerHTML="<svg>"+o+"</svg>";var l=no.firstChild;while(a.firstChild)a.removeChild(a.firstChild);while(l.firstChild)a.appendChild(l.firstChild)}else if(o!==s[n])try{a[n]=o}catch(ka){}}}}function oo(e,t){return!e.composing&&("OPTION"===e.tagName||ao(e,t)||so(e,t))}function ao(e,t){var n=!0;try{n=document.activeElement!==e}catch(ka){}return n&&e.value!==t}function so(e,t){var n=e.value,r=e._vModifiers;if(i(r)){if(r.number)return v(n)!==v(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}var co={create:io,update:io},uo=w((function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach((function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}));function lo(e){var t=fo(e.style);return e.staticStyle?P(e.staticStyle,t):t}function fo(e){return Array.isArray(e)?x(e):"string"===typeof e?uo(e):e}function ho(e,t){var n,r={};if(t){var i=e;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=lo(i.data))&&P(r,n)}(n=lo(e.data))&&P(r,n);var o=e;while(o=o.parent)o.data&&(n=lo(o.data))&&P(r,n);return r}var po,vo=/^--/,mo=/\s*!important$/,go=function(e,t,n){if(vo.test(t))e.style.setProperty(t,n);else if(mo.test(n))e.style.setProperty(T(t),n.replace(mo,""),"important");else{var r=bo(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},yo=["Webkit","Moz","ms"],bo=w((function(e){if(po=po||document.createElement("div").style,e=O(e),"filter"!==e&&e in po)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<yo.length;n++){var r=yo[n]+t;if(r in po)return r}}));function _o(e,t){var n=t.data,o=e.data;if(!(r(n.staticStyle)&&r(n.style)&&r(o.staticStyle)&&r(o.style))){var a,s,c=t.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},d=u||l,f=fo(t.data.style)||{};t.data.normalizedStyle=i(f.__ob__)?P({},f):f;var h=ho(t,!0);for(s in d)r(h[s])&&go(c,s,"");for(s in h)a=h[s],a!==d[s]&&go(c,s,null==a?"":a)}}var wo={create:_o,update:_o},Io=/\s+/;function Oo(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Io).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function ko(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Io).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function Eo(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&P(t,To(e.name||"v")),P(t,e),t}return"string"===typeof e?To(e):void 0}}var To=w((function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}})),So=Y&&!te,Ao="transition",Co="animation",Ro="transition",Po="transitionend",xo="animation",jo="animationend";So&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Ro="WebkitTransition",Po="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(xo="WebkitAnimation",jo="webkitAnimationEnd"));var No=Y?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function Lo(e){No((function(){No(e)}))}function Do(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Oo(e,t))}function Mo(e,t){e._transitionClasses&&y(e._transitionClasses,t),ko(e,t)}function $o(e,t,n){var r=Fo(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===Ao?Po:jo,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout((function(){c<a&&u()}),o+1),e.addEventListener(s,l)}var Uo=/\b(transform|all)(,|$)/;function Fo(e,t){var n,r=window.getComputedStyle(e),i=(r[Ro+"Delay"]||"").split(", "),o=(r[Ro+"Duration"]||"").split(", "),a=Vo(i,o),s=(r[xo+"Delay"]||"").split(", "),c=(r[xo+"Duration"]||"").split(", "),u=Vo(s,c),l=0,d=0;t===Ao?a>0&&(n=Ao,l=a,d=o.length):t===Co?u>0&&(n=Co,l=u,d=c.length):(l=Math.max(a,u),n=l>0?a>u?Ao:Co:null,d=n?n===Ao?o.length:c.length:0);var f=n===Ao&&Uo.test(r[Ro+"Property"]);return{type:n,timeout:l,propCount:d,hasTransform:f}}function Vo(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return zo(t)+zo(e[n])})))}function zo(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Ho(e,t){var n=e.elm;i(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var o=Eo(e.data.transition);if(!r(o)&&!i(n._enterCb)&&1===n.nodeType){var a=o.css,s=o.type,u=o.enterClass,l=o.enterToClass,d=o.enterActiveClass,f=o.appearClass,h=o.appearToClass,p=o.appearActiveClass,m=o.beforeEnter,g=o.enter,y=o.afterEnter,b=o.enterCancelled,_=o.beforeAppear,w=o.appear,I=o.afterAppear,O=o.appearCancelled,k=o.duration,E=Pn,T=Pn.$vnode;while(T&&T.parent)E=T.context,T=T.parent;var S=!E._isMounted||!e.isRootInsert;if(!S||w||""===w){var A=S&&f?f:u,C=S&&p?p:d,R=S&&h?h:l,P=S&&_||m,x=S&&"function"===typeof w?w:g,j=S&&I||y,N=S&&O||b,L=v(c(k)?k.enter:k);0;var D=!1!==a&&!te,M=Go(x),U=n._enterCb=$((function(){D&&(Mo(n,R),Mo(n,C)),U.cancelled?(D&&Mo(n,A),N&&N(n)):j&&j(n),n._enterCb=null}));e.data.show||It(e,"insert",(function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),x&&x(n,U)})),P&&P(n),D&&(Do(n,A),Do(n,C),Lo((function(){Mo(n,A),U.cancelled||(Do(n,R),M||(Bo(L)?setTimeout(U,L):$o(n,s,U)))}))),e.data.show&&(t&&t(),x&&x(n,U)),D||M||U()}}}function Wo(e,t){var n=e.elm;i(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var o=Eo(e.data.transition);if(r(o)||1!==n.nodeType)return t();if(!i(n._leaveCb)){var a=o.css,s=o.type,u=o.leaveClass,l=o.leaveToClass,d=o.leaveActiveClass,f=o.beforeLeave,h=o.leave,p=o.afterLeave,m=o.leaveCancelled,g=o.delayLeave,y=o.duration,b=!1!==a&&!te,_=Go(h),w=v(c(y)?y.leave:y);0;var I=n._leaveCb=$((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),b&&(Mo(n,l),Mo(n,d)),I.cancelled?(b&&Mo(n,u),m&&m(n)):(t(),p&&p(n)),n._leaveCb=null}));g?g(O):O()}function O(){I.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),f&&f(n),b&&(Do(n,u),Do(n,d),Lo((function(){Mo(n,u),I.cancelled||(Do(n,l),_||(Bo(w)?setTimeout(I,w):$o(n,s,I)))}))),h&&h(n,I),b||_||I())}}function Bo(e){return"number"===typeof e&&!isNaN(e)}function Go(e){if(r(e))return!1;var t=e.fns;return i(t)?Go(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function qo(e,t){!0!==t.data.show&&Ho(t)}var Ko=Y?{create:qo,activate:qo,remove:function(e,t){!0!==e.data.show?Wo(e,t):t()}}:{},Jo=[Wi,qi,ro,co,wo,Ko],Yo=Jo.concat(Fi),Xo=xi({nodeOps:ki,modules:Yo});te&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&oa(e,"input")}));var Zo={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?It(n,"postpatch",(function(){Zo.componentUpdated(e,t,n)})):Qo(e,t,n.context),e._vOptions=[].map.call(e.options,na)):("textarea"===n.tag||li(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",ra),e.addEventListener("compositionend",ia),e.addEventListener("change",ia),te&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Qo(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,na);if(i.some((function(e,t){return!D(e,r[t])}))){var o=e.multiple?t.value.some((function(e){return ta(e,i)})):t.value!==t.oldValue&&ta(t.value,i);o&&oa(e,"change")}}}};function Qo(e,t,n){ea(e,t,n),(ee||ne)&&setTimeout((function(){ea(e,t,n)}),0)}function ea(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=M(r,na(a))>-1,a.selected!==o&&(a.selected=o);else if(D(na(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function ta(e,t){return t.every((function(t){return!D(t,e)}))}function na(e){return"_value"in e?e._value:e.value}function ra(e){e.target.composing=!0}function ia(e){e.target.composing&&(e.target.composing=!1,oa(e.target,"input"))}function oa(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function aa(e){return!e.componentInstance||e.data&&e.data.transition?e:aa(e.componentInstance._vnode)}var sa={bind:function(e,t,n){var r=t.value;n=aa(n);var i=n.data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,Ho(n,(function(){e.style.display=o}))):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value,i=t.oldValue;if(!r!==!i){n=aa(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?Ho(n,(function(){e.style.display=e.__vOriginalDisplay})):Wo(n,(function(){e.style.display="none"}))):e.style.display=r?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},ca={model:Zo,show:sa},ua={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function la(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?la(kn(t.children)):e}function da(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[O(o)]=i[o];return t}function fa(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function ha(e){while(e=e.parent)if(e.data.transition)return!0}function pa(e,t){return t.key===e.key&&t.tag===e.tag}var va=function(e){return e.tag||Nt(e)},ma=function(e){return"show"===e.name},ga={name:"transition",props:ua,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(va),n.length)){0;var r=this.mode;0;var i=n[0];if(ha(this.$vnode))return i;var o=la(i);if(!o)return i;if(this._leaving)return fa(e,i);var a="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?a+"comment":a+o.tag:s(o.key)?0===String(o.key).indexOf(a)?o.key:a+o.key:o.key;var c=(o.data||(o.data={})).transition=da(this),u=this._vnode,l=la(u);if(o.data.directives&&o.data.directives.some(ma)&&(o.data.show=!0),l&&l.data&&!pa(o,l)&&!Nt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var d=l.data.transition=P({},c);if("out-in"===r)return this._leaving=!0,It(d,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),fa(e,i);if("in-out"===r){if(Nt(o))return u;var f,h=function(){f()};It(c,"afterEnter",h),It(c,"enterCancelled",h),It(d,"delayLeave",(function(e){f=e}))}}return i}}},ya=P({tag:String,moveClass:String},ua);delete ya.mode;var ba={props:ya,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=xn(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=da(this),s=0;s<i.length;s++){var c=i[s];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a;else;}if(r){for(var u=[],l=[],d=0;d<r.length;d++){var f=r[d];f.data.transition=a,f.data.pos=f.elm.getBoundingClientRect(),n[f.key]?u.push(f):l.push(f)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(_a),e.forEach(wa),e.forEach(Ia),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,r=n.style;Do(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Po,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Po,e),n._moveCb=null,Mo(n,t))})}})))},methods:{hasMove:function(e,t){if(!So)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){ko(n,e)})),Oo(n,t),n.style.display="none",this.$el.appendChild(n);var r=Fo(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function _a(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function wa(e){e.data.newPos=e.elm.getBoundingClientRect()}function Ia(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}var Oa={Transition:ga,TransitionGroup:ba};kr.config.mustUseProp=Vr,kr.config.isReservedTag=ai,kr.config.isReservedAttr=Ur,kr.config.getTagNamespace=si,kr.config.isUnknownElement=ui,P(kr.options.directives,ca),P(kr.options.components,Oa),kr.prototype.__patch__=Y?Xo:j,kr.prototype.$mount=function(e,t){return e=e&&Y?di(e):void 0,Ln(this,e,t)},Y&&setTimeout((function(){z.devtools&&ue&&ue.emit("init",kr)}),0),t["a"]=kr}).call(this,n("c8ba"))},"2cf4":function(e,t,n){var r,i,o,a,s=n("da84"),c=n("1626"),u=n("d039"),l=n("0366"),d=n("1be4"),f=n("cc12"),h=n("1cdc"),p=n("605d"),v=s.setImmediate,m=s.clearImmediate,g=s.process,y=s.MessageChannel,b=s.Dispatch,_=0,w={},I="onreadystatechange";try{r=s.location}catch(S){}var O=function(e){if(w.hasOwnProperty(e)){var t=w[e];delete w[e],t()}},k=function(e){return function(){O(e)}},E=function(e){O(e.data)},T=function(e){s.postMessage(String(e),r.protocol+"//"+r.host)};v&&m||(v=function(e){var t=[],n=arguments.length,r=1;while(n>r)t.push(arguments[r++]);return w[++_]=function(){(c(e)?e:Function(e)).apply(void 0,t)},i(_),_},m=function(e){delete w[e]},p?i=function(e){g.nextTick(k(e))}:b&&b.now?i=function(e){b.now(k(e))}:y&&!h?(o=new y,a=o.port2,o.port1.onmessage=E,i=l(a.postMessage,a,1)):s.addEventListener&&c(s.postMessage)&&!s.importScripts&&r&&"file:"!==r.protocol&&!u(T)?(i=T,s.addEventListener("message",E,!1)):i=I in f("script")?function(e){d.appendChild(f("script"))[I]=function(){d.removeChild(this),O(e)}}:function(e){setTimeout(k(e),0)}),e.exports={set:v,clear:m}},"2d00":function(e,t,n){var r,i,o=n("da84"),a=n("342f"),s=o.process,c=o.Deno,u=s&&s.versions||c&&c.version,l=u&&u.v8;l?(r=l.split("."),i=r[0]<4?1:r[0]+r[1]):a&&(r=a.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/),r&&(i=r[1]))),e.exports=i&&+i},"2f62":function(e,t,n){"use strict";(function(e){
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function r(e){var t=Number(e.version.split(".")[0]);if(t>=2)e.mixin({beforeCreate:r});else{var n=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[r].concat(e.init):r,n.call(this,e)}}function r(){var e=this.$options;e.store?this.$store="function"===typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}}n.d(t,"b",(function(){return j}));var i="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},o=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function a(e){o&&(e._devtoolHook=o,o.emit("vuex:init",e),o.on("vuex:travel-to-state",(function(t){e.replaceState(t)})),e.subscribe((function(e,t){o.emit("vuex:mutation",e,t)}),{prepend:!0}),e.subscribeAction((function(e,t){o.emit("vuex:action",e,t)}),{prepend:!0}))}function s(e,t){return e.filter(t)[0]}function c(e,t){if(void 0===t&&(t=[]),null===e||"object"!==typeof e)return e;var n=s(t,(function(t){return t.original===e}));if(n)return n.copy;var r=Array.isArray(e)?[]:{};return t.push({original:e,copy:r}),Object.keys(e).forEach((function(n){r[n]=c(e[n],t)})),r}function u(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function l(e){return null!==e&&"object"===typeof e}function d(e){return e&&"function"===typeof e.then}function f(e,t){return function(){return e(t)}}var h=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},h.prototype.addChild=function(e,t){this._children[e]=t},h.prototype.removeChild=function(e){delete this._children[e]},h.prototype.getChild=function(e){return this._children[e]},h.prototype.hasChild=function(e){return e in this._children},h.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},h.prototype.forEachChild=function(e){u(this._children,e)},h.prototype.forEachGetter=function(e){this._rawModule.getters&&u(this._rawModule.getters,e)},h.prototype.forEachAction=function(e){this._rawModule.actions&&u(this._rawModule.actions,e)},h.prototype.forEachMutation=function(e){this._rawModule.mutations&&u(this._rawModule.mutations,e)},Object.defineProperties(h.prototype,p);var v=function(e){this.register([],e,!1)};function m(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void 0;m(e.concat(r),t.getChild(r),n.modules[r])}}v.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},v.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},v.prototype.update=function(e){m([],this.root,e)},v.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var i=new h(t,n);if(0===e.length)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}t.modules&&u(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},v.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},v.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var g;var y=function(e){var t=this;void 0===e&&(e={}),!g&&"undefined"!==typeof window&&window.Vue&&x(window.Vue);var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new v(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new g,this._makeLocalGettersCache=Object.create(null);var i=this,o=this,s=o.dispatch,c=o.commit;this.dispatch=function(e,t){return s.call(i,e,t)},this.commit=function(e,t,n){return c.call(i,e,t,n)},this.strict=r;var u=this._modules.root.state;O(this,u,[],this._modules.root),I(this,u),n.forEach((function(e){return e(t)}));var l=void 0!==e.devtools?e.devtools:g.config.devtools;l&&a(this)},b={state:{configurable:!0}};function _(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function w(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;O(e,n,[],e._modules.root,!0),I(e,n,t)}function I(e,t,n){var r=e._vm;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,o={};u(i,(function(t,n){o[n]=f(t,e),Object.defineProperty(e.getters,n,{get:function(){return e._vm[n]},enumerable:!0})}));var a=g.config.silent;g.config.silent=!0,e._vm=new g({data:{$$state:t},computed:o}),g.config.silent=a,e.strict&&C(e),r&&(n&&e._withCommit((function(){r._data.$$state=null})),g.nextTick((function(){return r.$destroy()})))}function O(e,t,n,r,i){var o=!n.length,a=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[a],e._modulesNamespaceMap[a]=r),!o&&!i){var s=R(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){g.set(s,c,r.state)}))}var u=r.context=k(e,a,n);r.forEachMutation((function(t,n){var r=a+n;T(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:a+n,i=t.handler||t;S(e,r,i,u)})),r.forEachGetter((function(t,n){var r=a+n;A(e,r,t,u)})),r.forEachChild((function(r,o){O(e,t,n.concat(o),r,i)}))}function k(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var o=P(n,r,i),a=o.payload,s=o.options,c=o.type;return s&&s.root||(c=t+c),e.dispatch(c,a)},commit:r?e.commit:function(n,r,i){var o=P(n,r,i),a=o.payload,s=o.options,c=o.type;s&&s.root||(c=t+c),e.commit(c,a,s)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return E(e,t)}},state:{get:function(){return R(e.state,n)}}}),i}function E(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function T(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function S(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return d(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function A(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)})}function C(e){e._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function R(e,t){return t.reduce((function(e,t){return e[t]}),e)}function P(e,t,n){return l(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}function x(e){g&&e===g||(g=e,r(g))}b.state.get=function(){return this._vm._data.$$state},b.state.set=function(e){0},y.prototype.commit=function(e,t,n){var r=this,i=P(e,t,n),o=i.type,a=i.payload,s=(i.options,{type:o,payload:a}),c=this._mutations[o];c&&(this._withCommit((function(){c.forEach((function(e){e(a)}))})),this._subscribers.slice().forEach((function(e){return e(s,r.state)})))},y.prototype.dispatch=function(e,t){var n=this,r=P(e,t),i=r.type,o=r.payload,a={type:i,payload:o},s=this._actions[i];if(s){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(a,n.state)}))}catch(u){0}var c=s.length>1?Promise.all(s.map((function(e){return e(o)}))):s[0](o);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(a,n.state)}))}catch(u){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(a,n.state,e)}))}catch(u){0}t(e)}))}))}},y.prototype.subscribe=function(e,t){return _(e,this._subscribers,t)},y.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return _(n,this._actionSubscribers,t)},y.prototype.watch=function(e,t,n){var r=this;return this._watcherVM.$watch((function(){return e(r.state,r.getters)}),t,n)},y.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._vm._data.$$state=e}))},y.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),O(this,this.state,e,this._modules.get(e),n.preserveState),I(this,this.state)},y.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=R(t.state,e.slice(0,-1));g.delete(n,e[e.length-1])})),w(this)},y.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},y.prototype.hotUpdate=function(e){this._modules.update(e),w(this,!0)},y.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(y.prototype,b);var j=F((function(e,t){var n={};return $(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=V(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),N=F((function(e,t){var n={};return $(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var o=V(this.$store,"mapMutations",e);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),L=F((function(e,t){var n={};return $(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||V(this.$store,"mapGetters",e))return this.$store.getters[i]},n[r].vuex=!0})),n})),D=F((function(e,t){var n={};return $(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var o=V(this.$store,"mapActions",e);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),M=function(e){return{mapState:j.bind(null,e),mapGetters:L.bind(null,e),mapMutations:N.bind(null,e),mapActions:D.bind(null,e)}};function $(e){return U(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function U(e){return Array.isArray(e)||l(e)}function F(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function V(e,t,n){var r=e._modulesNamespaceMap[n];return r}function z(e){void 0===e&&(e={});var t=e.collapsed;void 0===t&&(t=!0);var n=e.filter;void 0===n&&(n=function(e,t,n){return!0});var r=e.transformer;void 0===r&&(r=function(e){return e});var i=e.mutationTransformer;void 0===i&&(i=function(e){return e});var o=e.actionFilter;void 0===o&&(o=function(e,t){return!0});var a=e.actionTransformer;void 0===a&&(a=function(e){return e});var s=e.logMutations;void 0===s&&(s=!0);var u=e.logActions;void 0===u&&(u=!0);var l=e.logger;return void 0===l&&(l=console),function(e){var d=c(e.state);"undefined"!==typeof l&&(s&&e.subscribe((function(e,o){var a=c(o);if(n(e,d,a)){var s=B(),u=i(e),f="mutation "+e.type+s;H(l,f,t),l.log("%c prev state","color: #9E9E9E; font-weight: bold",r(d)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",r(a)),W(l)}d=a})),u&&e.subscribeAction((function(e,n){if(o(e,n)){var r=B(),i=a(e),s="action "+e.type+r;H(l,s,t),l.log("%c action","color: #03A9F4; font-weight: bold",i),W(l)}})))}}function H(e,t,n){var r=n?e.groupCollapsed:e.group;try{r.call(e,t)}catch(i){e.log(t)}}function W(e){try{e.groupEnd()}catch(t){e.log("—— log end ——")}}function B(){var e=new Date;return" @ "+q(e.getHours(),2)+":"+q(e.getMinutes(),2)+":"+q(e.getSeconds(),2)+"."+q(e.getMilliseconds(),3)}function G(e,t){return new Array(t+1).join(e)}function q(e,t){return G("0",t-e.toString().length)+e}var K={Store:y,install:x,version:"3.6.2",mapState:j,mapMutations:N,mapGetters:L,mapActions:D,createNamespacedHelpers:M,createLogger:z};t["a"]=K}).call(this,n("c8ba"))},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"35a1":function(e,t,n){var r=n("f5df"),i=n("dc4a"),o=n("3f8c"),a=n("b622"),s=a("iterator");e.exports=function(e){if(void 0!=e)return i(e,s)||i(e,"@@iterator")||o[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),i=n("9bf2"),o=n("825a"),a=n("df75");e.exports=r?Object.defineProperties:function(e,t){o(e);var n,r=a(t),s=r.length,c=0;while(s>c)i.f(e,n=r[c++],t[n]);return e}},"3bbe":function(e,t,n){var r=n("1626");e.exports=function(e){if("object"===typeof e||r(e))return e;throw TypeError("Can't set "+String(e)+" as a prototype")}},"3ca3":function(e,t,n){"use strict";var r=n("6547").charAt,i=n("577e"),o=n("69f3"),a=n("7dd0"),s="String Iterator",c=o.set,u=o.getterFor(s);a(String,"String",(function(e){c(this,{type:s,string:i(e),index:0})}),(function(){var e,t=u(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=r(n,i),t.index+=e.length,{value:e,done:!1})}))},"3f8c":function(e,t){e.exports={}},4082:function(e,t,n){n("a4d3");var r=n("f0e4");function i(e,t){if(null==e)return{};var n,i,o=r(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}e.exports=i,e.exports["default"]=e.exports,e.exports.__esModule=!0},"428f":function(e,t,n){var r=n("da84");e.exports=r},"44ad":function(e,t,n){var r=n("d039"),i=n("c6b6"),o="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?o.call(e,""):Object(e)}:Object},"44d2":function(e,t,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),a=r("unscopables"),s=Array.prototype;void 0==s[a]&&o.f(s,a,{configurable:!0,value:i(null)}),e.exports=function(e){s[a][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1===arguments.length?n.error(e):n.error(e,t))}},4840:function(e,t,n){var r=n("825a"),i=n("5087"),o=n("b622"),a=o("species");e.exports=function(e,t){var n,o=r(e).constructor;return void 0===o||void 0==(n=r(o)[a])?t:i(n)}},"485a":function(e,t,n){var r=n("1626"),i=n("861d");e.exports=function(e,t){var n,o;if("string"===t&&r(n=e.toString)&&!i(o=n.call(e)))return o;if(r(n=e.valueOf)&&!i(o=n.call(e)))return o;if("string"!==t&&r(n=e.toString)&&!i(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},4930:function(e,t,n){var r=n("2d00"),i=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(e,t,n){var r=n("fc6a"),i=n("23cb"),o=n("07fa"),a=function(e){return function(t,n,a){var s,c=r(t),u=o(c),l=i(a,u);if(e&&n!=n){while(u>l)if(s=c[l++],s!=s)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),a=o("filter");r({target:"Array",proto:!0,forced:!a},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"4f60":function(e,t,n){"use strict";var r=n("614a");n.d(t,"a",(function(){return r["a"]}));var i="firebase",o="9.1.3";
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
r["a"].registerVersion(i,o,"app-compat")},"4fc1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return d}));
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
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},a=i.INFO,s={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=s[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function d(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const a=o.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:a,args:o,type:t.name})}}}},5087:function(e,t,n){var r=n("68ee"),i=n("0d51");e.exports=function(e){if(r(e))return e;throw TypeError(i(e)+" is not a constructor")}},"50c4":function(e,t,n){var r=n("5926"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},"53ca":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},5606:function(e,t,n){"use strict";n.r(t),n.d(t,"SDK_VERSION",(function(){return J})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return D})),n.d(t,"_addComponent",(function(){return F})),n.d(t,"_addOrOverwriteComponent",(function(){return V})),n.d(t,"_apps",(function(){return $})),n.d(t,"_clearComponents",(function(){return B})),n.d(t,"_components",(function(){return U})),n.d(t,"_getProvider",(function(){return H})),n.d(t,"_registerComponent",(function(){return z})),n.d(t,"_removeServiceInstance",(function(){return W})),n.d(t,"deleteApp",(function(){return Q})),n.d(t,"getApp",(function(){return X})),n.d(t,"getApps",(function(){return Z})),n.d(t,"initializeApp",(function(){return Y})),n.d(t,"onLog",(function(){return te})),n.d(t,"registerVersion",(function(){return ee})),n.d(t,"setLogLevel",(function(){return ne}));var r=n("ffa6"),i=n("4fc1"),o=n("1fd5");n.d(t,"FirebaseError",(function(){return o["c"]}));
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
class a{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(s(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function s(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.4",l=new i["b"]("@firebase/app"),d="@firebase/app-compat",f="@firebase/analytics-compat",h="@firebase/analytics",p="@firebase/app-check-compat",v="@firebase/app-check",m="@firebase/auth",g="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",_="@firebase/functions",w="@firebase/functions-compat",I="@firebase/installations",O="@firebase/installations-compat",k="@firebase/messaging",E="@firebase/messaging-compat",T="@firebase/performance",S="@firebase/performance-compat",A="@firebase/remote-config",C="@firebase/remote-config-compat",R="@firebase/storage",P="@firebase/storage-compat",x="@firebase/firestore",j="@firebase/firestore-compat",N="firebase",L="9.1.3",D="[DEFAULT]",M={[c]:"fire-core",[d]:"fire-core-compat",[h]:"fire-analytics",[f]:"fire-analytics-compat",[v]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[g]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[_]:"fire-fn",[w]:"fire-fn-compat",[I]:"fire-iid",[O]:"fire-iid-compat",[k]:"fire-fcm",[E]:"fire-fcm-compat",[T]:"fire-perf",[S]:"fire-perf-compat",[A]:"fire-rc",[C]:"fire-rc-compat",[R]:"fire-gcs",[P]:"fire-gcs-compat",[x]:"fire-fst",[j]:"fire-fst-compat","fire-js":"fire-js",[N]:"fire-js-all"},$=new Map,U=new Map;function F(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function V(e,t){e.container.addOrOverwriteComponent(t)}function z(e){const t=e.name;if(U.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;U.set(t,e);for(const n of $.values())F(n,e);return!0}function H(e,t){return e.container.getProvider(t)}function W(e,t,n=D){H(e,t).clearInstance(n)}function B(){U.clear()}
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
 */const G={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},q=new o["b"]("app","Firebase",G);
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
class K{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw q.create("app-deleted",{appName:this._name})}}
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
 */const J=L;function Y(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:D,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw q.create("bad-app-name",{appName:String(i)});const a=$.get(i);if(a){if(Object(o["g"])(e,a.options)&&Object(o["g"])(n,a.config))return a;throw q.create("duplicate-app",{appName:i})}const s=new r["b"](i);for(const r of U.values())s.addComponent(r);const c=new K(e,n,s);return $.set(i,c),c}function X(e=D){const t=$.get(e);if(!t)throw q.create("no-app",{appName:e});return t}function Z(){return Array.from($.values())}async function Q(e){const t=e.name;$.has(t)&&($.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function ee(e,t,n){var i;let o=null!==(i=M[e])&&void 0!==i?i:e;n&&(o+="-"+n);const a=o.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const e=[`Unable to register library "${o}" with version "${t}":`];return a&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}z(new r["a"](o+"-version",()=>({library:o,version:t}),"VERSION"))}function te(e,t){if(null!==e&&"function"!==typeof e)throw q.create("invalid-log-argument");Object(i["d"])(e,t)}function ne(e){Object(i["c"])(e)}
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
 */function re(e){z(new r["a"]("platform-logger",e=>new a(e),"PRIVATE")),ee(c,u,e),ee(c,u,"esm2017"),ee("fire-js","")}re("")},5692:function(e,t,n){var r=n("c430"),i=n("c6cd");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.18.3",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,n){var r=n("d066"),i=n("241c"),o=n("7418"),a=n("825a");e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(a(e)),n=o.f;return n?t.concat(n(e)):t}},"577e":function(e,t,n){var r=n("f5df");e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return String(e)}},5926:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?r:n)(t)}},5994:function(e,t,n){"use strict";(function(e){var t=n("614a"),r=n("1f5a"),i=n("ffa6"),o=n("1fd5"),a="@firebase/auth-compat",s="0.1.6";
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
const c=1e3;function u(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function l(){return"http:"===u()||"https:"===u()}function d(e=Object(o["k"])()){return!("file:"!==u()&&"ionic:"!==u()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function f(){return Object(o["s"])()||Object(o["r"])()}function h(){return Object(o["o"])()&&11===(null===document||void 0===document?void 0:document.documentMode)}function p(e=Object(o["k"])()){return/Edge\/\d+/.test(e)}function v(e=Object(o["k"])()){return h()||p(e)}function m(){try{const e=self.localStorage,t=r["r"]();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!v()||Object(o["p"])()}catch(e){return g()&&Object(o["p"])()}return!1}function g(){return"undefined"!==typeof e&&"WorkerGlobalScope"in e&&"importScripts"in e}function y(){return(l()||Object(o["m"])()||d())&&!f()&&m()&&!g()}function b(){return d()&&"undefined"!==typeof document}async function _(){return!!b()&&new Promise(e=>{const t=setTimeout(()=>{e(!1)},c);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}
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
 */const w={LOCAL:"local",NONE:"none",SESSION:"session"},I=r["o"],O="persistence";function k(e,t){I(Object.values(w).includes(t),e,"invalid-persistence-type"),Object(o["s"])()?I(t!==w.SESSION,e,"unsupported-persistence-type"):Object(o["r"])()?I(t===w.NONE,e,"unsupported-persistence-type"):g()?I(t===w.NONE||t===w.LOCAL&&Object(o["p"])(),e,"unsupported-persistence-type"):I(t===w.NONE||m(),e,"unsupported-persistence-type")}async function E(e){await e._initializationPromise;const t=S(),n=r["u"](O,e.config.apiKey,e.name);(null===t||void 0===t?void 0:t.sessionStorage)&&t.sessionStorage.setItem(n,e._getPersistence())}function T(e,t){const n=S();if(!(null===n||void 0===n?void 0:n.sessionStorage))return[];const i=r["u"](O,e,t),o=n.sessionStorage.getItem(i);switch(o){case w.NONE:return[r["K"]];case w.LOCAL:return[r["L"],r["z"]];case w.SESSION:return[r["z"]];default:return[]}}function S(){return"undefined"!==typeof window?window:null}
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
 */const A=r["o"];class C{constructor(){this.browserResolver=r["s"](r["y"]),this.cordovaResolver=r["s"](r["D"]),this.underlyingResolver=null,this._redirectPersistence=r["z"],this._completeRedirectFn=r["t"]}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return b()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return A(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await _();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
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
 */function R(e){return e.unwrap()}function P(e){return e.wrapped()}
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
 */function x(e){return N(e)}function j(e,t){var n;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){const n=t;n.resolver=new M(e,r["I"](e,t))}else if(i){const e=N(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}function N(e){const{_tokenResponse:t}=e instanceof o["c"]?e.customData:e;if(!t)return null;if(!(e instanceof o["c"])&&"temporaryProof"in t&&"phoneNumber"in t)return r["i"].credentialFromResult(e);const n=t.providerId;if(!n||n===r["k"].PASSWORD)return null;let i;switch(n){case r["k"].GOOGLE:i=r["f"];break;case r["k"].FACEBOOK:i=r["d"];break;case r["k"].GITHUB:i=r["e"];break;case r["k"].TWITTER:i=r["n"];break;default:const{oauthIdToken:e,oauthAccessToken:o,oauthTokenSecret:a,pendingToken:s,nonce:c}=t;return o||a||e||s?s?n.startsWith("saml.")?r["m"]._create(n,s):r["g"]._fromParams({providerId:n,signInMethod:n,pendingToken:s,idToken:e,accessToken:o}):new r["h"](n).credential({idToken:e,accessToken:o,rawNonce:c}):null}return e instanceof o["c"]?i.credentialFromError(e):i.credentialFromResult(e)}function L(e,t){return t.catch(t=>{throw t instanceof o["c"]&&j(e,t),t}).then(e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:x(e),additionalUserInfo:r["H"](e),user:$.getOrCreate(n)}})}async function D(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>L(e,n.confirm(t))}}class M{constructor(e,t){this.resolver=t,this.auth=P(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return L(R(this.auth),this.resolver.resolveSignIn(e))}}
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
 */class ${constructor(e){this._delegate=e,this.multiFactor=r["R"](e)}static getOrCreate(e){return $.USER_MAP.has(e)||$.USER_MAP.set(e,new $(e)),$.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return L(this.auth,r["N"](this._delegate,e))}async linkWithPhoneNumber(e,t){return D(this.auth,r["O"](this._delegate,e,t))}async linkWithPopup(e){return L(this.auth,r["P"](this._delegate,e,C))}async linkWithRedirect(e){return await E(r["p"](this.auth)),r["Q"](this._delegate,e,C)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return L(this.auth,r["S"](this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return D(this.auth,r["T"](this._delegate,e,t))}reauthenticateWithPopup(e){return L(this.auth,r["U"](this._delegate,e,C))}async reauthenticateWithRedirect(e){return await E(r["p"](this.auth)),r["V"](this._delegate,e,C)}sendEmailVerification(e){return r["W"](this._delegate,e)}async unlink(e){return await r["hb"](this._delegate,e),this}updateEmail(e){return r["ib"](this._delegate,e)}updatePassword(e){return r["jb"](this._delegate,e)}updatePhoneNumber(e){return r["kb"](this._delegate,e)}updateProfile(e){return r["lb"](this._delegate,e)}verifyBeforeUpdateEmail(e,t){return r["mb"](this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}$.USER_MAP=new WeakMap;
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
const U=r["o"];class F{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;U(n,"invalid-api-key",{appName:e.name});let i=[r["K"]];if("undefined"!==typeof window){i=T(n,e.name);for(const e of[r["L"],r["x"],r["z"]])i.includes(e)||i.push(e)}U(n,"invalid-api-key",{appName:e.name});const o="undefined"!==typeof window?C:void 0;this._delegate=t.initialize({options:{persistence:i,popupRedirectResolver:o}}),this._delegate._updateErrorMap(r["F"]),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?$.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){r["C"](this._delegate,e,t)}applyActionCode(e){return r["w"](this._delegate,e)}checkActionCode(e){return r["A"](this._delegate,e)}confirmPasswordReset(e,t){return r["B"](this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return L(this._delegate,r["E"](this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return r["G"](this._delegate,e)}isSignInWithEmailLink(e){return r["M"](this._delegate,e)}async getRedirectResult(){U(y(),this._delegate,"operation-not-supported-in-this-environment");const e=await r["J"](this._delegate,C);return e?L(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){r["v"](this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:o}=V(e,t,n);return this._delegate.onAuthStateChanged(r,i,o)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:o}=V(e,t,n);return this._delegate.onIdTokenChanged(r,i,o)}sendSignInLinkToEmail(e,t){return r["Y"](this._delegate,e,t)}sendPasswordResetEmail(e,t){return r["X"](this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(k(this._delegate,e),e){case w.SESSION:t=r["z"];break;case w.LOCAL:const e=await r["s"](r["L"])._isAvailable();t=e?r["L"]:r["x"];break;case w.NONE:t=r["K"];break;default:return r["q"]("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return L(this._delegate,r["Z"](this._delegate))}signInWithCredential(e){return L(this._delegate,r["ab"](this._delegate,e))}signInWithCustomToken(e){return L(this._delegate,r["bb"](this._delegate,e))}signInWithEmailAndPassword(e,t){return L(this._delegate,r["cb"](this._delegate,e,t))}signInWithEmailLink(e,t){return L(this._delegate,r["db"](this._delegate,e,t))}signInWithPhoneNumber(e,t){return D(this._delegate,r["eb"](this._delegate,e,t))}async signInWithPopup(e){return U(y(),this._delegate,"operation-not-supported-in-this-environment"),L(this._delegate,r["fb"](this._delegate,e,C))}async signInWithRedirect(e){return U(y(),this._delegate,"operation-not-supported-in-this-environment"),await E(this._delegate),r["gb"](this._delegate,e,C)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return r["nb"](this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function V(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,o=e=>i(e&&$.getOrCreate(e));return{next:o,error:t,complete:n}}
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
 */F.Persistence=w;class z{constructor(){this.providerId="phone",this._delegate=new r["i"](R(t["a"].auth()))}static credential(e,t){return r["i"].credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}z.PHONE_SIGN_IN_METHOD=r["i"].PHONE_SIGN_IN_METHOD,z.PROVIDER_ID=r["i"].PROVIDER_ID;
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
const H=r["o"];class W{constructor(e,n,i=t["a"].app()){var o;H(null===(o=i.options)||void 0===o?void 0:o.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new r["l"](e,n,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
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
 */const B="auth-compat";function G(e){e.INTERNAL.registerComponent(new i["a"](B,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new F(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:r["a"].EMAIL_SIGNIN,PASSWORD_RESET:r["a"].PASSWORD_RESET,RECOVER_EMAIL:r["a"].RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:r["a"].REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:r["a"].VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:r["a"].VERIFY_EMAIL}},EmailAuthProvider:r["c"],FacebookAuthProvider:r["d"],GithubAuthProvider:r["e"],GoogleAuthProvider:r["f"],OAuthProvider:r["h"],PhoneAuthProvider:z,PhoneMultiFactorGenerator:r["j"],RecaptchaVerifier:W,TwitterAuthProvider:r["n"],Auth:F,AuthCredential:r["b"],Error:o["c"]}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(a,s)}G(t["a"])}).call(this,n("c8ba"))},"59ed":function(e,t,n){var r=n("1626"),i=n("0d51");e.exports=function(e){if(r(e))return e;throw TypeError(i(e)+" is not a function")}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var r=n("83ab"),i=n("1a2d"),o=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,s=i(o,"name"),c=s&&"something"===function(){}.name,u=s&&(!r||r&&a(o,"name").configurable);e.exports={EXISTS:s,PROPER:c,CONFIGURABLE:u}},"605d":function(e,t,n){var r=n("c6b6"),i=n("da84");e.exports="process"==r(i.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,n){"use strict";var r=n("83ab"),i=n("d039"),o=n("df75"),a=n("7418"),s=n("d1e7"),c=n("7b0b"),u=n("44ad"),l=Object.assign,d=Object.defineProperty;e.exports=!l||i((function(){if(r&&1!==l({b:1},l(d({},"a",{enumerable:!0,get:function(){d(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=l({},e)[n]||o(l({},t)).join("")!=i}))?function(e,t){var n=c(e),i=arguments.length,l=1,d=a.f,f=s.f;while(i>l){var h,p=u(arguments[l++]),v=d?o(p).concat(d(p)):o(p),m=v.length,g=0;while(m>g)h=v[g++],r&&!f.call(p,h)||(n[h]=p[h])}return n}:l},"614a":function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n("1fd5"),i=n("ffa6"),o=n("5606"),a=n("4fc1");
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
class s{constructor(e,t){this._delegate=e,this.firebase=t,Object(o["_addComponent"])(e,new i["a"]("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(o["deleteApp"])(this._delegate)))}_getService(e,t=o["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=o["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(o["_addComponent"])(this._delegate,e)}_addOrOverwriteComponent(e){Object(o["_addOrOverwriteComponent"])(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
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
function l(e){const t={},n={__esModule:!0,initializeApp:s,app:a,registerVersion:o["registerVersion"],setLogLevel:o["setLogLevel"],onLog:o["onLog"],apps:null,SDK_VERSION:o["SDK_VERSION"],INTERNAL:{registerComponent:l,removeApp:i,useAsService:d,modularAPIs:o}};function i(e){delete t[e]}function a(e){if(e=e||o["_DEFAULT_ENTRY_NAME"],!Object(r["e"])(t,e))throw u.create("no-app",{appName:e});return t[e]}function s(i,a={}){const s=o["initializeApp"](i,a);if(Object(r["e"])(t,s.name))return t[s.name];const c=new e(s,n);return t[s.name]=c,c}function c(){return Object.keys(t).map(e=>t[e])}function l(t){const i=t.name,s=i.replace("-compat","");if(o["_registerComponent"](t)&&"PUBLIC"===t.type){const o=(e=a())=>{if("function"!==typeof e[s])throw u.create("invalid-app-argument",{appName:i});return e[s]()};void 0!==t.serviceProps&&Object(r["h"])(o,t.serviceProps),n[s]=o,e.prototype[s]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[s]:null}function d(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),a["App"]=e,n}
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
 */function d(){const e=l(s);function t(t){Object(r["h"])(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:d,extendNamespace:t,createSubscribe:r["f"],ErrorFactory:r["b"],deepExtend:r["h"]}),e}const f=d(),h=new a["b"]("@firebase/app-compat"),p="@firebase/app-compat",v="0.1.5";
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
function m(e){Object(o["registerVersion"])(p,v,e)}
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
 */if(Object(r["l"])()&&void 0!==self.firebase){h.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&h.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const g=f;m()},6547:function(e,t,n){var r=n("5926"),i=n("577e"),o=n("1d80"),a=function(e){return function(t,n){var a,s,c=i(o(t)),u=r(n),l=c.length;return u<0||u>=l?e?"":void 0:(a=c.charCodeAt(u),a<55296||a>56319||u+1===l||(s=c.charCodeAt(u+1))<56320||s>57343?e?c.charAt(u):a:e?c.slice(u,u+2):s-56320+(a-55296<<10)+65536)}};e.exports={codeAt:a(!1),charAt:a(!0)}},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"68ee":function(e,t,n){var r=n("d039"),i=n("1626"),o=n("f5df"),a=n("d066"),s=n("8925"),c=[],u=a("Reflect","construct"),l=/^\s*(?:class|function)\b/,d=l.exec,f=!l.exec((function(){})),h=function(e){if(!i(e))return!1;try{return u(Object,c,e),!0}catch(t){return!1}},p=function(e){if(!i(e))return!1;switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return f||!!d.call(l,s(e))};e.exports=!u||r((function(){var e;return h(h.call)||!h(Object)||!h((function(){e=!0}))||e}))?p:h},6907:function(e,t,n){"use strict";function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l,d="undefined"!==typeof window,f=function(e,t){var n;return function(){var r=this,i=arguments,o=function(){n=null,e.apply(r,i)};clearTimeout(n),n=setTimeout(o,t)}},h=function(e){var t=e.split("."),n=parseInt(t[0],10);return{major:"number"===typeof n?n:1,minor:parseInt(t[1],10)||0,patch:parseInt(t[2],10)||0}},p=function(e,t){var n=h(e),r=h(t);return n.major>r.major||n.major===r.major&&n.minor>r.minor||n.major===r.major&&n.minor===r.minor&&n.patch>=r.patch},v={xs:0,sm:576,md:768,lg:992,xl:1200},m={mobile:0,tablet:769,desktop:1024,widescreen:1216,fullhd:1408},g={small:0,medium:640,large:1024},y={s:0,m:601,l:993,xl:1201},b={mobile:0,tablet:768,computer:992,large:1201},_={xs:0,sm:640,md:768,lg:1024,xl:1280,"2xl":1536},w={bootstrap:v,bulma:m,foundation:g,materialize:y,"semantic-ui":b,tailwind:_},I="2.6.0",O=410,k=730,E="tailwind",T=100,S=["width","height","touch","portrait","landscape","config"],A="__CUSTOM__",C={bootstrap:["xs","sm","md","lg","xl"],bulma:["mobile","tablet","desktop","widescreen","fullhd"],foundation:["small","medium","large"],materialize:["s","m","l","xl"],"semantic-ui":["mobile","tablet","computer","large"],tailwind:["xs","sm","md","lg","xl"]},R=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";i(this,e),this.callbacks={},this.framework="",this.config=e.parseBreakpoints(t),this.createScreen(),this.init()}return a(e,[{key:"init",value:function(){this.attachResize(),this.checkTouch(),this.setScreenSize()}},{key:"attachResize",value:function(){d&&window.addEventListener("resize",f(this.setScreenSize.bind(this),T))}},{key:"setScreenSize",value:function(){d&&(this.screen.width=window.innerWidth,this.screen.height=window.innerHeight,this.runCallbacks(),this.findCurrentBreakpoint())}},{key:"runCallbacks",value:function(){var e=this;Object.keys(this.callbacks).forEach((function(t){e.screen[t]=e.callbacks[t].call(null,e.screen)}))}},{key:"findCurrentBreakpoint",value:function(){var e=this;this.screen.breakpoint=this.config.breakpointsOrder.reduce((function(t,n){return e.screen[n]?n:t}),this.config.breakpointsOrder[0])}},{key:"checkTouch",value:function(){d&&(this.screen.touch="ontouchstart"in window)}},{key:"createScreen",value:function(){var e=this,t=Object.keys(this.config).filter((function(e){return"breakpointsOrder"!==e}));this.screen=l.observable({width:O,height:k,touch:!0,portrait:!0,landscape:!1,breakpoint:this.config.breakpointsOrder[0],breakpointsOrder:this.config.breakpointsOrder,config:this.config}),this.findCurrentBreakpoint(),t.forEach((function(t){if(S.indexOf(t)>=0)throw new Error('Invalid breakpoint name: "'.concat(t,'". This key is reserved.'));l.set(e.screen,t,!1)})),d&&this.initMediaQueries()}},{key:"initMediaQueries",value:function(){var e=this;Object.keys(this.config).filter((function(e){return"breakpointsOrder"!==e})).forEach((function(t){var n=null;if("breakpointsOrder"!==t){var r=e.config[t];"function"===typeof r?e.callbacks[t]=r:"number"===typeof r?n="".concat(r,"px"):"string"===typeof r?n=r:e.screen[t]=r}if(n){var i=window.matchMedia("(min-width: ".concat(n,")"));"addEventListener"in i?i.addEventListener("change",(function(n){return e.mediaStateChanged(t,n.matches)})):i.addListener((function(n){return e.mediaStateChanged(t,n.matches)})),e.mediaStateChanged(t,i.matches)}}));var t=window.matchMedia("(orientation: portrait)");"addEventListener"in t?t.addEventListener("change",(function(t){e.mediaStateChanged("portrait",t.matches),e.mediaStateChanged("landscape",!t.matches)})):t.addListener((function(t){e.mediaStateChanged("portrait",t.matches),e.mediaStateChanged("landscape",!t.matches)})),this.mediaStateChanged("portrait",t.matches),this.mediaStateChanged("landscape",!t.matches)}},{key:"mediaStateChanged",value:function(e,t){l.set(this.screen,e,t)}}],[{key:"parseBreakpoints",value:function(t){return"object"===r(t)?t.extend?(this.framework=t.extend.toString(),delete t.extend,Object.assign({},t,e.getBreakpoints())):(this.framework=A,u({breakpointsOrder:Object.keys(t).filter((function(e){return"breakpointsOrder"!==e}))},t)):(this.framework=t.toString(),e.getBreakpoints())}},{key:"getBreakpoints",value:function(){if(this.framework||(this.framework=E),!w[this.framework])throw new Error('Cannot find grid breakpoints for framework "'.concat(this.framework,'"'));return u({},w[this.framework],{breakpointsOrder:C[this.framework]})}},{key:"install",value:function(t,n){if(l=t,!p(l.version,I))throw Error("VueScreen requires at least Vue ".concat(I));l.prototype.$screen=new e(n).screen}}]),e}();d&&window.Vue&&window.Vue.use(R),t["a"]=R},"69f3":function(e,t,n){var r,i,o,a=n("7f9a"),s=n("da84"),c=n("861d"),u=n("9112"),l=n("1a2d"),d=n("c6cd"),f=n("f772"),h=n("d012"),p="Object already initialized",v=s.WeakMap,m=function(e){return o(e)?i(e):r(e,{})},g=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}};if(a||d.state){var y=d.state||(d.state=new v),b=y.get,_=y.has,w=y.set;r=function(e,t){if(_.call(y,e))throw new TypeError(p);return t.facade=e,w.call(y,e,t),t},i=function(e){return b.call(y,e)||{}},o=function(e){return _.call(y,e)}}else{var I=f("state");h[I]=!0,r=function(e,t){if(l(e,I))throw new TypeError(p);return t.facade=e,u(e,I,t),t},i=function(e){return l(e,I)?e[I]:{}},o=function(e){return l(e,I)}}e.exports={set:r,get:i,has:o,enforce:m,getterFor:g}},"6eeb":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("1a2d"),a=n("9112"),s=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,d=u.get,f=u.enforce,h=String(String).split("String");(e.exports=function(e,t,n,c){var u,d=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:t;i(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||l&&n.name!==m)&&a(n,"name",m),u=f(n),u.source||(u.source=h.join("string"==typeof m?m:""))),e!==r?(d?!v&&e[t]&&(p=!0):delete e[t],p?e[t]=n:a(e,t,n)):p?e[t]=n:s(t,n)})(Function.prototype,"toString",(function(){return i(this)&&d(this).source||c(this)}))},7418:function(e,t){t.f=Object.getOwnPropertySymbols},"746f":function(e,t,n){var r=n("428f"),i=n("1a2d"),o=n("e538"),a=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});i(t,e)||a(t,e,{value:o.f(e)})}},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(e,t,n){var r=n("cc12"),i=r("span").classList,o=i&&i.constructor&&i.constructor.prototype;e.exports=o===Object.prototype?void 0:o},"7b0b":function(e,t,n){var r=n("1d80");e.exports=function(e){return Object(r(e))}},"7c73":function(e,t,n){var r,i=n("825a"),o=n("37e8"),a=n("7839"),s=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),d=">",f="<",h="prototype",p="script",v=l("IE_PROTO"),m=function(){},g=function(e){return f+p+d+e+f+"/"+p+d},y=function(e){e.write(g("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(g("document.F=Object")),e.close(),e.F},_=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}_="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var e=a.length;while(e--)delete _[h][a[e]];return _()};s[v]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[h]=i(e),n=new m,m[h]=null,n[v]=e):n=_(),void 0===t?n:o(n,t)}},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("5e77"),a=n("1626"),s=n("9ed3"),c=n("e163"),u=n("d2bb"),l=n("d44e"),d=n("9112"),f=n("6eeb"),h=n("b622"),p=n("3f8c"),v=n("ae93"),m=o.PROPER,g=o.CONFIGURABLE,y=v.IteratorPrototype,b=v.BUGGY_SAFARI_ITERATORS,_=h("iterator"),w="keys",I="values",O="entries",k=function(){return this};e.exports=function(e,t,n,o,h,v,E){s(n,t,o);var T,S,A,C=function(e){if(e===h&&N)return N;if(!b&&e in x)return x[e];switch(e){case w:return function(){return new n(this,e)};case I:return function(){return new n(this,e)};case O:return function(){return new n(this,e)}}return function(){return new n(this)}},R=t+" Iterator",P=!1,x=e.prototype,j=x[_]||x["@@iterator"]||h&&x[h],N=!b&&j||C(h),L="Array"==t&&x.entries||j;if(L&&(T=c(L.call(new e)),T!==Object.prototype&&T.next&&(i||c(T)===y||(u?u(T,y):a(T[_])||f(T,_,k)),l(T,R,!0,!0),i&&(p[R]=k))),m&&h==I&&j&&j.name!==I&&(!i&&g?d(x,"name",I):(P=!0,N=function(){return j.call(this)})),h)if(S={values:C(I),keys:v?N:C(w),entries:C(O)},E)for(A in S)(b||P||!(A in x))&&f(x,A,S[A]);else r({target:t,proto:!0,forced:b||P},S);return i&&!E||x[_]===N||f(x,_,N,{name:h}),p[t]=N,S}},"7f9a":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("8925"),a=r.WeakMap;e.exports=i(a)&&/native code/.test(o(a))},"825a":function(e,t,n){var r=n("861d");e.exports=function(e){if(r(e))return e;throw TypeError(String(e)+" is not an object")}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(e,t,n){"use strict";var r=n("a04b"),i=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var a=r(t);a in e?i.f(e,a,o(0,n)):e[a]=n}},"861d":function(e,t,n){var r=n("1626");e.exports=function(e){return"object"===typeof e?null!==e:r(e)}},8925:function(e,t,n){var r=n("1626"),i=n("c6cd"),o=Function.toString;r(i.inspectSource)||(i.inspectSource=function(e){return o.call(e)}),e.exports=i.inspectSource},"8c4f":function(e,t,n){"use strict";
/*!
  * vue-router v3.5.2
  * (c) 2021 Evan You
  * @license MIT
  */function r(e,t){0}function i(e,t){for(var n in t)e[n]=t[n];return e}var o=/[!'()*]/g,a=function(e){return"%"+e.charCodeAt(0).toString(16)},s=/%2C/g,c=function(e){return encodeURIComponent(e).replace(o,a).replace(s,",")};function u(e){try{return decodeURIComponent(e)}catch(t){0}return e}function l(e,t,n){void 0===t&&(t={});var r,i=n||f;try{r=i(e||"")}catch(s){r={}}for(var o in t){var a=t[o];r[o]=Array.isArray(a)?a.map(d):d(a)}return r}var d=function(e){return null==e||"object"===typeof e?e:String(e)};function f(e){var t={};return e=e.trim().replace(/^(\?|#|&)/,""),e?(e.split("&").forEach((function(e){var n=e.replace(/\+/g," ").split("="),r=u(n.shift()),i=n.length>0?u(n.join("=")):null;void 0===t[r]?t[r]=i:Array.isArray(t[r])?t[r].push(i):t[r]=[t[r],i]})),t):t}function h(e){var t=e?Object.keys(e).map((function(t){var n=e[t];if(void 0===n)return"";if(null===n)return c(t);if(Array.isArray(n)){var r=[];return n.forEach((function(e){void 0!==e&&(null===e?r.push(c(t)):r.push(c(t)+"="+c(e)))})),r.join("&")}return c(t)+"="+c(n)})).filter((function(e){return e.length>0})).join("&"):null;return t?"?"+t:""}var p=/\/?$/;function v(e,t,n,r){var i=r&&r.options.stringifyQuery,o=t.query||{};try{o=m(o)}catch(s){}var a={name:t.name||e&&e.name,meta:e&&e.meta||{},path:t.path||"/",hash:t.hash||"",query:o,params:t.params||{},fullPath:b(t,i),matched:e?y(e):[]};return n&&(a.redirectedFrom=b(n,i)),Object.freeze(a)}function m(e){if(Array.isArray(e))return e.map(m);if(e&&"object"===typeof e){var t={};for(var n in e)t[n]=m(e[n]);return t}return e}var g=v(null,{path:"/"});function y(e){var t=[];while(e)t.unshift(e),e=e.parent;return t}function b(e,t){var n=e.path,r=e.query;void 0===r&&(r={});var i=e.hash;void 0===i&&(i="");var o=t||h;return(n||"/")+o(r)+i}function _(e,t,n){return t===g?e===t:!!t&&(e.path&&t.path?e.path.replace(p,"")===t.path.replace(p,"")&&(n||e.hash===t.hash&&w(e.query,t.query)):!(!e.name||!t.name)&&(e.name===t.name&&(n||e.hash===t.hash&&w(e.query,t.query)&&w(e.params,t.params))))}function w(e,t){if(void 0===e&&(e={}),void 0===t&&(t={}),!e||!t)return e===t;var n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((function(n,i){var o=e[n],a=r[i];if(a!==n)return!1;var s=t[n];return null==o||null==s?o===s:"object"===typeof o&&"object"===typeof s?w(o,s):String(o)===String(s)}))}function I(e,t){return 0===e.path.replace(p,"/").indexOf(t.path.replace(p,"/"))&&(!t.hash||e.hash===t.hash)&&O(e.query,t.query)}function O(e,t){for(var n in t)if(!(n in e))return!1;return!0}function k(e){for(var t=0;t<e.matched.length;t++){var n=e.matched[t];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var a=0;a<o.length;a++)i._isBeingDestroyed||o[a](i)}}}}var E={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,t){var n=t.props,r=t.children,o=t.parent,a=t.data;a.routerView=!0;var s=o.$createElement,c=n.name,u=o.$route,l=o._routerViewCache||(o._routerViewCache={}),d=0,f=!1;while(o&&o._routerRoot!==o){var h=o.$vnode?o.$vnode.data:{};h.routerView&&d++,h.keepAlive&&o._directInactive&&o._inactive&&(f=!0),o=o.$parent}if(a.routerViewDepth=d,f){var p=l[c],v=p&&p.component;return v?(p.configProps&&T(v,a,p.route,p.configProps),s(v,a,r)):s()}var m=u.matched[d],g=m&&m.components[c];if(!m||!g)return l[c]=null,s();l[c]={component:g},a.registerRouteInstance=function(e,t){var n=m.instances[c];(t&&n!==e||!t&&n===e)&&(m.instances[c]=t)},(a.hook||(a.hook={})).prepatch=function(e,t){m.instances[c]=t.componentInstance},a.hook.init=function(e){e.data.keepAlive&&e.componentInstance&&e.componentInstance!==m.instances[c]&&(m.instances[c]=e.componentInstance),k(u)};var y=m.props&&m.props[c];return y&&(i(l[c],{route:u,configProps:y}),T(g,a,u,y)),s(g,a,r)}};function T(e,t,n,r){var o=t.props=S(n,r);if(o){o=t.props=i({},o);var a=t.attrs=t.attrs||{};for(var s in o)e.props&&s in e.props||(a[s]=o[s],delete o[s])}}function S(e,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(e);case"boolean":return t?e.params:void 0;default:0}}function A(e,t,n){var r=e.charAt(0);if("/"===r)return e;if("?"===r||"#"===r)return t+e;var i=t.split("/");n&&i[i.length-1]||i.pop();for(var o=e.replace(/^\//,"").split("/"),a=0;a<o.length;a++){var s=o[a];".."===s?i.pop():"."!==s&&i.push(s)}return""!==i[0]&&i.unshift(""),i.join("/")}function C(e){var t="",n="",r=e.indexOf("#");r>=0&&(t=e.slice(r),e=e.slice(0,r));var i=e.indexOf("?");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{path:e,query:n,hash:t}}function R(e){return e.replace(/\/\//g,"/")}var P=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},x=X,j=$,N=U,L=z,D=Y,M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function $(e,t){var n,r=[],i=0,o=0,a="",s=t&&t.delimiter||"/";while(null!=(n=M.exec(e))){var c=n[0],u=n[1],l=n.index;if(a+=e.slice(o,l),o=l+c.length,u)a+=u[1];else{var d=e[o],f=n[2],h=n[3],p=n[4],v=n[5],m=n[6],g=n[7];a&&(r.push(a),a="");var y=null!=f&&null!=d&&d!==f,b="+"===m||"*"===m,_="?"===m||"*"===m,w=n[2]||s,I=p||v;r.push({name:h||i++,prefix:f||"",delimiter:w,optional:_,repeat:b,partial:y,asterisk:!!g,pattern:I?W(I):g?".*":"[^"+H(w)+"]+?"})}}return o<e.length&&(a+=e.substr(o)),a&&r.push(a),r}function U(e,t){return z($(e,t),t)}function F(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function V(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function z(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"===typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",G(t)));return function(t,r){for(var i="",o=t||{},a=r||{},s=a.pretty?F:encodeURIComponent,c=0;c<e.length;c++){var u=e[c];if("string"!==typeof u){var l,d=o[u.name];if(null==d){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(P(d)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(d)+"`");if(0===d.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var f=0;f<d.length;f++){if(l=s(d[f]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===f?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?V(d):s(d),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function H(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function W(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function B(e,t){return e.keys=t,e}function G(e){return e&&e.sensitive?"":"i"}function q(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return B(e,t)}function K(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(X(e[i],t,n).source);var o=new RegExp("(?:"+r.join("|")+")",G(n));return B(o,t)}function J(e,t,n){return Y($(e,n),t,n)}function Y(e,t,n){P(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,o="",a=0;a<e.length;a++){var s=e[a];if("string"===typeof s)o+=H(s);else{var c=H(s.prefix),u="(?:"+s.pattern+")";t.push(s),s.repeat&&(u+="(?:"+c+u+")*"),u=s.optional?s.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}var l=H(n.delimiter||"/"),d=o.slice(-l.length)===l;return r||(o=(d?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=i?"$":r&&d?"":"(?="+l+"|$)",B(new RegExp("^"+o,G(n)),t)}function X(e,t,n){return P(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?q(e,t):P(e)?K(e,t,n):J(e,t,n)}x.parse=j,x.compile=N,x.tokensToFunction=L,x.tokensToRegExp=D;var Z=Object.create(null);function Q(e,t,n){t=t||{};try{var r=Z[e]||(Z[e]=x.compile(e));return"string"===typeof t.pathMatch&&(t[0]=t.pathMatch),r(t,{pretty:!0})}catch(i){return""}finally{delete t[0]}}function ee(e,t,n,r){var o="string"===typeof e?{path:e}:e;if(o._normalized)return o;if(o.name){o=i({},e);var a=o.params;return a&&"object"===typeof a&&(o.params=i({},a)),o}if(!o.path&&o.params&&t){o=i({},o),o._normalized=!0;var s=i(i({},t.params),o.params);if(t.name)o.name=t.name,o.params=s;else if(t.matched.length){var c=t.matched[t.matched.length-1].path;o.path=Q(c,s,"path "+t.path)}else 0;return o}var u=C(o.path||""),d=t&&t.path||"/",f=u.path?A(u.path,d,n||o.append):d,h=l(u.query,o.query,r&&r.options.parseQuery),p=o.hash||u.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:f,query:h,hash:p}}var te,ne=[String,Object],re=[String,Array],ie=function(){},oe={name:"RouterLink",props:{to:{type:ne,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:re,default:"click"}},render:function(e){var t=this,n=this.$router,r=this.$route,o=n.resolve(this.to,r,this.append),a=o.location,s=o.route,c=o.href,u={},l=n.options.linkActiveClass,d=n.options.linkExactActiveClass,f=null==l?"router-link-active":l,h=null==d?"router-link-exact-active":d,p=null==this.activeClass?f:this.activeClass,m=null==this.exactActiveClass?h:this.exactActiveClass,g=s.redirectedFrom?v(null,ee(s.redirectedFrom),null,n):s;u[m]=_(r,g,this.exactPath),u[p]=this.exact||this.exactPath?u[m]:I(r,g);var y=u[m]?this.ariaCurrentValue:null,b=function(e){ae(e)&&(t.replace?n.replace(a,ie):n.push(a,ie))},w={click:ae};Array.isArray(this.event)?this.event.forEach((function(e){w[e]=b})):w[this.event]=b;var O={class:u},k=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:s,navigate:b,isActive:u[p],isExactActive:u[m]});if(k){if(1===k.length)return k[0];if(k.length>1||!k.length)return 0===k.length?e():e("span",{},k)}if("a"===this.tag)O.on=w,O.attrs={href:c,"aria-current":y};else{var E=se(this.$slots.default);if(E){E.isStatic=!1;var T=E.data=i({},E.data);for(var S in T.on=T.on||{},T.on){var A=T.on[S];S in w&&(T.on[S]=Array.isArray(A)?A:[A])}for(var C in w)C in T.on?T.on[C].push(w[C]):T.on[C]=b;var R=E.data.attrs=i({},E.data.attrs);R.href=c,R["aria-current"]=y}else O.on=w}return e(this.tag,O,this.$slots.default)}};function ae(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function se(e){if(e)for(var t,n=0;n<e.length;n++){if(t=e[n],"a"===t.tag)return t;if(t.children&&(t=se(t.children)))return t}}function ce(e){if(!ce.installed||te!==e){ce.installed=!0,te=e;var t=function(e){return void 0!==e},n=function(e,n){var r=e.$options._parentVnode;t(r)&&t(r=r.data)&&t(r=r.registerRouteInstance)&&r(e,n)};e.mixin({beforeCreate:function(){t(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",E),e.component("RouterLink",oe);var r=e.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ue="undefined"!==typeof window;function le(e,t,n,r,i){var o=t||[],a=n||Object.create(null),s=r||Object.create(null);e.forEach((function(e){de(o,a,s,e,i)}));for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:a,nameMap:s}}function de(e,t,n,r,i,o){var a=r.path,s=r.name;var c=r.pathToRegexpOptions||{},u=he(a,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:fe(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:s,parent:i,matchAs:o,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=o?R(o+"/"+r.path):void 0;de(e,t,n,r,l,i)})),t[l.path]||(e.push(l.path),t[l.path]=l),void 0!==r.alias)for(var d=Array.isArray(r.alias)?r.alias:[r.alias],f=0;f<d.length;++f){var h=d[f];0;var p={path:h,children:r.children};de(e,t,n,p,i,l.path||"/")}s&&(n[s]||(n[s]=l))}function fe(e,t){var n=x(e,[],t);return n}function he(e,t,n){return n||(e=e.replace(/\/$/,"")),"/"===e[0]||null==t?e:R(t.path+"/"+e)}function pe(e,t){var n=le(e),r=n.pathList,i=n.pathMap,o=n.nameMap;function a(e){le(e,r,i,o)}function s(e,t){var n="object"!==typeof e?o[e]:void 0;le([t||e],r,i,o,n),n&&n.alias.length&&le(n.alias.map((function(e){return{path:e,children:[t]}})),r,i,o,n)}function c(){return r.map((function(e){return i[e]}))}function u(e,n,a){var s=ee(e,n,!1,t),c=s.name;if(c){var u=o[c];if(!u)return f(null,s);var l=u.regex.keys.filter((function(e){return!e.optional})).map((function(e){return e.name}));if("object"!==typeof s.params&&(s.params={}),n&&"object"===typeof n.params)for(var d in n.params)!(d in s.params)&&l.indexOf(d)>-1&&(s.params[d]=n.params[d]);return s.path=Q(u.path,s.params,'named route "'+c+'"'),f(u,s,a)}if(s.path){s.params={};for(var h=0;h<r.length;h++){var p=r[h],v=i[p];if(ve(v.regex,s.path,s.params))return f(v,s,a)}}return f(null,s)}function l(e,n){var r=e.redirect,i="function"===typeof r?r(v(e,n,null,t)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return f(null,n);var a=i,s=a.name,c=a.path,l=n.query,d=n.hash,h=n.params;if(l=a.hasOwnProperty("query")?a.query:l,d=a.hasOwnProperty("hash")?a.hash:d,h=a.hasOwnProperty("params")?a.params:h,s){o[s];return u({_normalized:!0,name:s,query:l,hash:d,params:h},void 0,n)}if(c){var p=me(c,e),m=Q(p,h,'redirect route with path "'+p+'"');return u({_normalized:!0,path:m,query:l,hash:d},void 0,n)}return f(null,n)}function d(e,t,n){var r=Q(n,t.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var o=i.matched,a=o[o.length-1];return t.params=i.params,f(a,t)}return f(null,t)}function f(e,n,r){return e&&e.redirect?l(e,r||n):e&&e.matchAs?d(e,n,e.matchAs):v(e,n,r,t)}return{match:u,addRoute:s,getRoutes:c,addRoutes:a}}function ve(e,t,n){var r=t.match(e);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var a=e.keys[i-1];a&&(n[a.name||"pathMatch"]="string"===typeof r[i]?u(r[i]):r[i])}return!0}function me(e,t){return A(e,t.parent?t.parent.path:"/",!0)}var ge=ue&&window.performance&&window.performance.now?window.performance:Date;function ye(){return ge.now().toFixed(3)}var be=ye();function _e(){return be}function we(e){return be=e}var Ie=Object.create(null);function Oe(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(e,""),n=i({},window.history.state);return n.key=_e(),window.history.replaceState(n,"",t),window.addEventListener("popstate",Te),function(){window.removeEventListener("popstate",Te)}}function ke(e,t,n,r){if(e.app){var i=e.options.scrollBehavior;i&&e.app.$nextTick((function(){var o=Se(),a=i.call(e,t,n,r?o:null);a&&("function"===typeof a.then?a.then((function(e){Ne(e,o)})).catch((function(e){0})):Ne(a,o))}))}}function Ee(){var e=_e();e&&(Ie[e]={x:window.pageXOffset,y:window.pageYOffset})}function Te(e){Ee(),e.state&&e.state.key&&we(e.state.key)}function Se(){var e=_e();if(e)return Ie[e]}function Ae(e,t){var n=document.documentElement,r=n.getBoundingClientRect(),i=e.getBoundingClientRect();return{x:i.left-r.left-t.x,y:i.top-r.top-t.y}}function Ce(e){return xe(e.x)||xe(e.y)}function Re(e){return{x:xe(e.x)?e.x:window.pageXOffset,y:xe(e.y)?e.y:window.pageYOffset}}function Pe(e){return{x:xe(e.x)?e.x:0,y:xe(e.y)?e.y:0}}function xe(e){return"number"===typeof e}var je=/^#\d/;function Ne(e,t){var n="object"===typeof e;if(n&&"string"===typeof e.selector){var r=je.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(r){var i=e.offset&&"object"===typeof e.offset?e.offset:{};i=Pe(i),t=Ae(r,i)}else Ce(e)&&(t=Re(e))}else n&&Ce(e)&&(t=Re(e));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:e.behavior}):window.scrollTo(t.x,t.y))}var Le=ue&&function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function De(e,t){Ee();var n=window.history;try{if(t){var r=i({},n.state);r.key=_e(),n.replaceState(r,"",e)}else n.pushState({key:we(ye())},"",e)}catch(o){window.location[t?"replace":"assign"](e)}}function Me(e){De(e,!0)}function $e(e,t,n){var r=function(i){i>=e.length?n():e[i]?t(e[i],(function(){r(i+1)})):r(i+1)};r(0)}var Ue={redirected:2,aborted:4,cancelled:8,duplicated:16};function Fe(e,t){return We(e,t,Ue.redirected,'Redirected when going from "'+e.fullPath+'" to "'+Ge(t)+'" via a navigation guard.')}function Ve(e,t){var n=We(e,t,Ue.duplicated,'Avoided redundant navigation to current location: "'+e.fullPath+'".');return n.name="NavigationDuplicated",n}function ze(e,t){return We(e,t,Ue.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function He(e,t){return We(e,t,Ue.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}function We(e,t,n,r){var i=new Error(r);return i._isRouter=!0,i.from=e,i.to=t,i.type=n,i}var Be=["params","query","hash"];function Ge(e){if("string"===typeof e)return e;if("path"in e)return e.path;var t={};return Be.forEach((function(n){n in e&&(t[n]=e[n])})),JSON.stringify(t,null,2)}function qe(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function Ke(e,t){return qe(e)&&e._isRouter&&(null==t||e.type===t)}function Je(e){return function(t,n,r){var i=!1,o=0,a=null;Ye(e,(function(e,t,n,s){if("function"===typeof e&&void 0===e.cid){i=!0,o++;var c,u=et((function(t){Qe(t)&&(t=t.default),e.resolved="function"===typeof t?t:te.extend(t),n.components[s]=t,o--,o<=0&&r()})),l=et((function(e){var t="Failed to resolve async component "+s+": "+e;a||(a=qe(e)?e:new Error(t),r(a))}));try{c=e(u,l)}catch(f){l(f)}if(c)if("function"===typeof c.then)c.then(u,l);else{var d=c.component;d&&"function"===typeof d.then&&d.then(u,l)}}})),i||r()}}function Ye(e,t){return Xe(e.map((function(e){return Object.keys(e.components).map((function(n){return t(e.components[n],e.instances[n],e,n)}))})))}function Xe(e){return Array.prototype.concat.apply([],e)}var Ze="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Qe(e){return e.__esModule||Ze&&"Module"===e[Symbol.toStringTag]}function et(e){var t=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!t)return t=!0,e.apply(this,n)}}var tt=function(e,t){this.router=e,this.base=nt(t),this.current=g,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function nt(e){if(!e)if(ue){var t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^https?:\/\/[^\/]+/,"")}else e="/";return"/"!==e.charAt(0)&&(e="/"+e),e.replace(/\/$/,"")}function rt(e,t){var n,r=Math.max(e.length,t.length);for(n=0;n<r;n++)if(e[n]!==t[n])break;return{updated:t.slice(0,n),activated:t.slice(n),deactivated:e.slice(n)}}function it(e,t,n,r){var i=Ye(e,(function(e,r,i,o){var a=ot(e,t);if(a)return Array.isArray(a)?a.map((function(e){return n(e,r,i,o)})):n(a,r,i,o)}));return Xe(r?i.reverse():i)}function ot(e,t){return"function"!==typeof e&&(e=te.extend(e)),e.options[t]}function at(e){return it(e,"beforeRouteLeave",ct,!0)}function st(e){return it(e,"beforeRouteUpdate",ct)}function ct(e,t){if(t)return function(){return e.apply(t,arguments)}}function ut(e){return it(e,"beforeRouteEnter",(function(e,t,n,r){return lt(e,n,r)}))}function lt(e,t,n){return function(r,i,o){return e(r,i,(function(e){"function"===typeof e&&(t.enteredCbs[n]||(t.enteredCbs[n]=[]),t.enteredCbs[n].push(e)),o(e)}))}}tt.prototype.listen=function(e){this.cb=e},tt.prototype.onReady=function(e,t){this.ready?e():(this.readyCbs.push(e),t&&this.readyErrorCbs.push(t))},tt.prototype.onError=function(e){this.errorCbs.push(e)},tt.prototype.transitionTo=function(e,t,n){var r,i=this;try{r=this.router.match(e,this.current)}catch(a){throw this.errorCbs.forEach((function(e){e(a)})),a}var o=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),t&&t(r),i.ensureURL(),i.router.afterHooks.forEach((function(e){e&&e(r,o)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(e){e(r)})))}),(function(e){n&&n(e),e&&!i.ready&&(Ke(e,Ue.redirected)&&o===g||(i.ready=!0,i.readyErrorCbs.forEach((function(t){t(e)}))))}))},tt.prototype.confirmTransition=function(e,t,n){var i=this,o=this.current;this.pending=e;var a=function(e){!Ke(e)&&qe(e)&&(i.errorCbs.length?i.errorCbs.forEach((function(t){t(e)})):(r(!1,"uncaught error during route navigation:"),console.error(e))),n&&n(e)},s=e.matched.length-1,c=o.matched.length-1;if(_(e,o)&&s===c&&e.matched[s]===o.matched[c])return this.ensureURL(),a(Ve(o,e));var u=rt(this.current.matched,e.matched),l=u.updated,d=u.deactivated,f=u.activated,h=[].concat(at(d),this.router.beforeHooks,st(l),f.map((function(e){return e.beforeEnter})),Je(f)),p=function(t,n){if(i.pending!==e)return a(ze(o,e));try{t(e,o,(function(t){!1===t?(i.ensureURL(!0),a(He(o,e))):qe(t)?(i.ensureURL(!0),a(t)):"string"===typeof t||"object"===typeof t&&("string"===typeof t.path||"string"===typeof t.name)?(a(Fe(o,e)),"object"===typeof t&&t.replace?i.replace(t):i.push(t)):n(t)}))}catch(r){a(r)}};$e(h,p,(function(){var n=ut(f),r=n.concat(i.router.resolveHooks);$e(r,p,(function(){if(i.pending!==e)return a(ze(o,e));i.pending=null,t(e),i.router.app&&i.router.app.$nextTick((function(){k(e)}))}))}))},tt.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},tt.prototype.setupListeners=function(){},tt.prototype.teardown=function(){this.listeners.forEach((function(e){e()})),this.listeners=[],this.current=g,this.pending=null};var dt=function(e){function t(t,n){e.call(this,t,n),this._startLocation=ft(this.base)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=Le&&n;r&&this.listeners.push(Oe());var i=function(){var n=e.current,i=ft(e.base);e.current===g&&i===e._startLocation||e.transitionTo(i,(function(e){r&&ke(t,e,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},t.prototype.go=function(e){window.history.go(e)},t.prototype.push=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){De(R(r.base+e.fullPath)),ke(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){Me(R(r.base+e.fullPath)),ke(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.ensureURL=function(e){if(ft(this.base)!==this.current.fullPath){var t=R(this.base+this.current.fullPath);e?De(t):Me(t)}},t.prototype.getCurrentLocation=function(){return ft(this.base)},t}(tt);function ft(e){var t=window.location.pathname,n=t.toLowerCase(),r=e.toLowerCase();return!e||n!==r&&0!==n.indexOf(R(r+"/"))||(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}var ht=function(e){function t(t,n,r){e.call(this,t,n),r&&pt(this.base)||vt()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=Le&&n;r&&this.listeners.push(Oe());var i=function(){var t=e.current;vt()&&e.transitionTo(mt(),(function(n){r&&ke(e.router,n,t,!0),Le||bt(n.fullPath)}))},o=Le?"popstate":"hashchange";window.addEventListener(o,i),this.listeners.push((function(){window.removeEventListener(o,i)}))}},t.prototype.push=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){yt(e.fullPath),ke(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){bt(e.fullPath),ke(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.go=function(e){window.history.go(e)},t.prototype.ensureURL=function(e){var t=this.current.fullPath;mt()!==t&&(e?yt(t):bt(t))},t.prototype.getCurrentLocation=function(){return mt()},t}(tt);function pt(e){var t=ft(e);if(!/^\/#/.test(t))return window.location.replace(R(e+"/#"+t)),!0}function vt(){var e=mt();return"/"===e.charAt(0)||(bt("/"+e),!1)}function mt(){var e=window.location.href,t=e.indexOf("#");return t<0?"":(e=e.slice(t+1),e)}function gt(e){var t=window.location.href,n=t.indexOf("#"),r=n>=0?t.slice(0,n):t;return r+"#"+e}function yt(e){Le?De(gt(e)):window.location.hash=e}function bt(e){Le?Me(gt(e)):window.location.replace(gt(e))}var _t=function(e){function t(t,n){e.call(this,t,n),this.stack=[],this.index=-1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.push=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index+1).concat(e),r.index++,t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index).concat(e),t&&t(e)}),n)},t.prototype.go=function(e){var t=this,n=this.index+e;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var e=t.current;t.index=n,t.updateRoute(r),t.router.afterHooks.forEach((function(t){t&&t(r,e)}))}),(function(e){Ke(e,Ue.duplicated)&&(t.index=n)}))}},t.prototype.getCurrentLocation=function(){var e=this.stack[this.stack.length-1];return e?e.fullPath:"/"},t.prototype.ensureURL=function(){},t}(tt),wt=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=pe(e.routes||[],this);var t=e.mode||"hash";switch(this.fallback="history"===t&&!Le&&!1!==e.fallback,this.fallback&&(t="hash"),ue||(t="abstract"),this.mode=t,t){case"history":this.history=new dt(this,e.base);break;case"hash":this.history=new ht(this,e.base,this.fallback);break;case"abstract":this.history=new _t(this,e.base);break;default:0}},It={currentRoute:{configurable:!0}};function Ot(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function kt(e,t,n){var r="hash"===n?"#"+t:t;return e?R(e+"/"+r):r}wt.prototype.match=function(e,t,n){return this.matcher.match(e,t,n)},It.currentRoute.get=function(){return this.history&&this.history.current},wt.prototype.init=function(e){var t=this;if(this.apps.push(e),e.$once("hook:destroyed",(function(){var n=t.apps.indexOf(e);n>-1&&t.apps.splice(n,1),t.app===e&&(t.app=t.apps[0]||null),t.app||t.history.teardown()})),!this.app){this.app=e;var n=this.history;if(n instanceof dt||n instanceof ht){var r=function(e){var r=n.current,i=t.options.scrollBehavior,o=Le&&i;o&&"fullPath"in e&&ke(t,e,r,!1)},i=function(e){n.setupListeners(),r(e)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(e){t.apps.forEach((function(t){t._route=e}))}))}},wt.prototype.beforeEach=function(e){return Ot(this.beforeHooks,e)},wt.prototype.beforeResolve=function(e){return Ot(this.resolveHooks,e)},wt.prototype.afterEach=function(e){return Ot(this.afterHooks,e)},wt.prototype.onReady=function(e,t){this.history.onReady(e,t)},wt.prototype.onError=function(e){this.history.onError(e)},wt.prototype.push=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.push(e,t,n)}));this.history.push(e,t,n)},wt.prototype.replace=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.replace(e,t,n)}));this.history.replace(e,t,n)},wt.prototype.go=function(e){this.history.go(e)},wt.prototype.back=function(){this.go(-1)},wt.prototype.forward=function(){this.go(1)},wt.prototype.getMatchedComponents=function(e){var t=e?e.matched?e:this.resolve(e).route:this.currentRoute;return t?[].concat.apply([],t.matched.map((function(e){return Object.keys(e.components).map((function(t){return e.components[t]}))}))):[]},wt.prototype.resolve=function(e,t,n){t=t||this.history.current;var r=ee(e,t,n,this),i=this.match(r,t),o=i.redirectedFrom||i.fullPath,a=this.history.base,s=kt(a,o,this.mode);return{location:r,route:i,href:s,normalizedTo:r,resolved:i}},wt.prototype.getRoutes=function(){return this.matcher.getRoutes()},wt.prototype.addRoute=function(e,t){this.matcher.addRoute(e,t),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},wt.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(wt.prototype,It),wt.install=ce,wt.version="3.5.2",wt.isNavigationFailure=Ke,wt.NavigationFailureType=Ue,wt.START_LOCATION=g,ue&&window.Vue&&window.Vue.use(wt),t["a"]=wt},"90e3":function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},9112:function(e,t,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},"94ca":function(e,t,n){var r=n("d039"),i=n("1626"),o=/#|\.prototype\./,a=function(e,t){var n=c[s(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},s=a.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=a.data={},u=a.NATIVE="N",l=a.POLYFILL="P";e.exports=a},9523:function(e,t){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.exports=n,e.exports["default"]=e.exports,e.exports.__esModule=!0},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(x){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,o=Object.create(i.prototype),a=new C(r||[]);return o._invoke=E(e,n,a),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(x){return{type:"throw",arg:x}}}e.wrap=u;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",v={};function m(){}function g(){}function y(){}var b={};c(b,o,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(R([])));w&&w!==n&&r.call(w,o)&&(b=w);var I=y.prototype=m.prototype=Object.create(b);function O(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function n(i,o,a,s){var c=l(e[i],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"===typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var i;function o(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function E(e,t,n){var r=d;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return P()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var s=T(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function T(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function R(e){if(e){var n=e[o];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){while(++i<e.length)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:P}}function P(){return{value:t,done:!0}}return g.prototype=y,c(I,"constructor",y),c(y,"constructor",g),g.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(I),e},e.awrap=function(e){return{__await:e}},O(k.prototype),c(k.prototype,a,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new k(u(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},O(I),c(I,s,"Generator"),c(I,o,(function(){return this})),c(I,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=R,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;A(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:R(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"99af":function(e,t,n){"use strict";var r=n("23e7"),i=n("d039"),o=n("e8b5"),a=n("861d"),s=n("7b0b"),c=n("07fa"),u=n("8418"),l=n("65f0"),d=n("1dde"),f=n("b622"),h=n("2d00"),p=f("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",g=h>=51||!i((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),y=d("concat"),b=function(e){if(!a(e))return!1;var t=e[p];return void 0!==t?!!t:o(e)},_=!g||!y;r({target:"Array",proto:!0,forced:_},{concat:function(e){var t,n,r,i,o,a=s(this),d=l(a,0),f=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?a:arguments[t],b(o)){if(i=c(o),f+i>v)throw TypeError(m);for(n=0;n<i;n++,f++)n in o&&u(d,f,o[n])}else{if(f>=v)throw TypeError(m);u(d,f++,o)}return d.length=f,d}})},"9a1f":function(e,t,n){var r=n("59ed"),i=n("825a"),o=n("35a1");e.exports=function(e,t){var n=arguments.length<2?o(e):t;if(r(n))return i(n.call(e));throw TypeError(String(e)+" is not iterable")}},"9ab4":function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"f",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return c}));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function i(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function s(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):i(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function o(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}Object.create;function a(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{while((void 0===t||t-- >0)&&!(r=o.next()).done)a.push(r.value)}catch(s){i={error:s}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return a}function c(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create},"9bf2":function(e,t,n){var r=n("83ab"),i=n("0cfb"),o=n("825a"),a=n("a04b"),s=Object.defineProperty;t.f=r?s:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return s(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),a=n("d44e"),s=n("3f8c"),c=function(){return this};e.exports=function(e,t,n){var u=t+" Iterator";return e.prototype=i(r,{next:o(1,n)}),a(e,u,!1,!0),s[u]=c,e}},a04b:function(e,t,n){var r=n("c04e"),i=n("d9b5");e.exports=function(e){var t=r(e,"string");return i(t)?t:String(t)}},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),a=n("c430"),s=n("83ab"),c=n("4930"),u=n("d039"),l=n("1a2d"),d=n("e8b5"),f=n("1626"),h=n("861d"),p=n("d9b5"),v=n("825a"),m=n("7b0b"),g=n("fc6a"),y=n("a04b"),b=n("577e"),_=n("5c6c"),w=n("7c73"),I=n("df75"),O=n("241c"),k=n("057f"),E=n("7418"),T=n("06cf"),S=n("9bf2"),A=n("d1e7"),C=n("6eeb"),R=n("5692"),P=n("f772"),x=n("d012"),j=n("90e3"),N=n("b622"),L=n("e538"),D=n("746f"),M=n("d44e"),$=n("69f3"),U=n("b727").forEach,F=P("hidden"),V="Symbol",z="prototype",H=N("toPrimitive"),W=$.set,B=$.getterFor(V),G=Object[z],q=i.Symbol,K=o("JSON","stringify"),J=T.f,Y=S.f,X=k.f,Z=A.f,Q=R("symbols"),ee=R("op-symbols"),te=R("string-to-symbol-registry"),ne=R("symbol-to-string-registry"),re=R("wks"),ie=i.QObject,oe=!ie||!ie[z]||!ie[z].findChild,ae=s&&u((function(){return 7!=w(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=J(G,t);r&&delete G[t],Y(e,t,n),r&&e!==G&&Y(G,t,r)}:Y,se=function(e,t){var n=Q[e]=w(q[z]);return W(n,{type:V,tag:e,description:t}),s||(n.description=t),n},ce=function(e,t,n){e===G&&ce(ee,t,n),v(e);var r=y(t);return v(n),l(Q,r)?(n.enumerable?(l(e,F)&&e[F][r]&&(e[F][r]=!1),n=w(n,{enumerable:_(0,!1)})):(l(e,F)||Y(e,F,_(1,{})),e[F][r]=!0),ae(e,r,n)):Y(e,r,n)},ue=function(e,t){v(e);var n=g(t),r=I(n).concat(pe(n));return U(r,(function(t){s&&!de.call(n,t)||ce(e,t,n[t])})),e},le=function(e,t){return void 0===t?w(e):ue(w(e),t)},de=function(e){var t=y(e),n=Z.call(this,t);return!(this===G&&l(Q,t)&&!l(ee,t))&&(!(n||!l(this,t)||!l(Q,t)||l(this,F)&&this[F][t])||n)},fe=function(e,t){var n=g(e),r=y(t);if(n!==G||!l(Q,r)||l(ee,r)){var i=J(n,r);return!i||!l(Q,r)||l(n,F)&&n[F][r]||(i.enumerable=!0),i}},he=function(e){var t=X(g(e)),n=[];return U(t,(function(e){l(Q,e)||l(x,e)||n.push(e)})),n},pe=function(e){var t=e===G,n=X(t?ee:g(e)),r=[];return U(n,(function(e){!l(Q,e)||t&&!l(G,e)||r.push(Q[e])})),r};if(c||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?b(arguments[0]):void 0,t=j(e),n=function(e){this===G&&n.call(ee,e),l(this,F)&&l(this[F],t)&&(this[F][t]=!1),ae(this,t,_(1,e))};return s&&oe&&ae(G,t,{configurable:!0,set:n}),se(t,e)},C(q[z],"toString",(function(){return B(this).tag})),C(q,"withoutSetter",(function(e){return se(j(e),e)})),A.f=de,S.f=ce,T.f=fe,O.f=k.f=he,E.f=pe,L.f=function(e){return se(N(e),e)},s&&(Y(q[z],"description",{configurable:!0,get:function(){return B(this).description}}),a||C(G,"propertyIsEnumerable",de,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:q}),U(I(re),(function(e){D(e)})),r({target:V,stat:!0,forced:!c},{for:function(e){var t=b(e);if(l(te,t))return te[t];var n=q(t);return te[t]=n,ne[n]=t,n},keyFor:function(e){if(!p(e))throw TypeError(e+" is not a symbol");if(l(ne,e))return ne[e]},useSetter:function(){oe=!0},useSimple:function(){oe=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!s},{create:le,defineProperty:ce,defineProperties:ue,getOwnPropertyDescriptor:fe}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:he,getOwnPropertySymbols:pe}),r({target:"Object",stat:!0,forced:u((function(){E.f(1)}))},{getOwnPropertySymbols:function(e){return E.f(m(e))}}),K){var ve=!c||u((function(){var e=q();return"[null]"!=K([e])||"{}"!=K({a:e})||"{}"!=K(Object(e))}));r({target:"JSON",stat:!0,forced:ve},{stringify:function(e,t,n){var r,i=[e],o=1;while(arguments.length>o)i.push(arguments[o++]);if(r=t,(h(t)||void 0!==e)&&!p(e))return d(t)||(t=function(e,t){if(f(r)&&(t=r.call(this,e,t)),!p(t))return t}),i[1]=t,K.apply(null,i)}})}if(!q[z][H]){var me=q[z].valueOf;C(q[z],H,(function(){return me.apply(this,arguments)}))}M(q,V),x[F]=!0},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},a79d:function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("fea9"),a=n("d039"),s=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),d=n("6eeb"),f=!!o&&a((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:f},{finally:function(e){var t=u(this,s("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!i&&c(o)){var h=s("Promise").prototype["finally"];o.prototype["finally"]!==h&&d(o.prototype,"finally",h,{unsafe:!0})}},ae93:function(e,t,n){"use strict";var r,i,o,a=n("d039"),s=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),d=n("b622"),f=n("c430"),h=d("iterator"),p=!1;[].keys&&(o=[].keys(),"next"in o?(i=u(u(o)),i!==Object.prototype&&(r=i)):p=!0);var v=void 0==r||a((function(){var e={};return r[h].call(e)!==e}));v?r={}:f&&(r=c(r)),s(r[h])||l(r,h,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},b041:function(e,t,n){"use strict";var r=n("00ee"),i=n("f5df");e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(e,t,n){var r=n("83ab"),i=n("5e77").EXISTS,o=n("9bf2").f,a=Function.prototype,s=a.toString,c=/^\s*function ([^ (]*)/,u="name";r&&!i&&o(a,u,{configurable:!0,get:function(){try{return s.call(this).match(c)[1]}catch(e){return""}}})},b575:function(e,t,n){var r,i,o,a,s,c,u,l,d=n("da84"),f=n("06cf").f,h=n("2cf4").set,p=n("1cdc"),v=n("d4c3"),m=n("a4b4"),g=n("605d"),y=d.MutationObserver||d.WebKitMutationObserver,b=d.document,_=d.process,w=d.Promise,I=f(d,"queueMicrotask"),O=I&&I.value;O||(r=function(){var e,t;g&&(e=_.domain)&&e.exit();while(i){t=i.fn,i=i.next;try{t()}catch(n){throw i?a():o=void 0,n}}o=void 0,e&&e.enter()},p||g||m||!y||!b?!v&&w&&w.resolve?(u=w.resolve(void 0),u.constructor=w,l=u.then,a=function(){l.call(u,r)}):a=g?function(){_.nextTick(r)}:function(){h.call(d,r)}:(s=!0,c=b.createTextNode(""),new y(r).observe(c,{characterData:!0}),a=function(){c.data=s=!s})),e.exports=O||function(e){var t={fn:e,next:void 0};o&&(o.next=t),i||(i=t,a()),o=t}},b622:function(e,t,n){var r=n("da84"),i=n("5692"),o=n("1a2d"),a=n("90e3"),s=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,d=c?l:l&&l.withoutSetter||a;e.exports=function(e){return o(u,e)&&(s||"string"==typeof u[e])||(s&&o(l,e)?u[e]=l[e]:u[e]=d("Symbol."+e)),u[e]}},b64b:function(e,t,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),a=n("d039"),s=a((function(){o(1)}));r({target:"Object",stat:!0,forced:s},{keys:function(e){return o(i(e))}})},b727:function(e,t,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),a=n("07fa"),s=n("65f0"),c=[].push,u=function(e){var t=1==e,n=2==e,u=3==e,l=4==e,d=6==e,f=7==e,h=5==e||d;return function(p,v,m,g){for(var y,b,_=o(p),w=i(_),I=r(v,m,3),O=a(w),k=0,E=g||s,T=t?E(p,O):n||f?E(p,0):void 0;O>k;k++)if((h||k in w)&&(y=w[k],b=I(y,k,_),e))if(t)T[k]=b;else if(b)switch(e){case 3:return!0;case 5:return y;case 6:return k;case 2:c.call(T,y)}else switch(e){case 4:return!1;case 7:c.call(T,y)}return d?-1:u||l?l:T}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},c04e:function(e,t,n){var r=n("861d"),i=n("d9b5"),o=n("dc4a"),a=n("485a"),s=n("b622"),c=s("toPrimitive");e.exports=function(e,t){if(!r(e)||i(e))return e;var n,s=o(e,c);if(s){if(void 0===t&&(t="default"),n=s.call(e,t),!r(n)||i(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},c430:function(e,t){e.exports=!1},c6b6:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},c6cd:function(e,t,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",a=r[o]||i(o,{});e.exports=a},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var r=n("1a2d"),i=n("fc6a"),o=n("4d64").indexOf,a=n("d012");e.exports=function(e,t){var n,s=i(e),c=0,u=[];for(n in s)!r(a,n)&&r(s,n)&&u.push(n);while(t.length>c)r(s,n=t[c++])&&(~o(u,n)||u.push(n));return u}},cc12:function(e,t,n){var r=n("da84"),i=n("861d"),o=r.document,a=i(o)&&i(o.createElement);e.exports=function(e){return a?o.createElement(e):{}}},cca6:function(e,t,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(e,t,n){var r=n("825a"),i=n("861d"),o=n("f069");e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=o.f(e),a=n.resolve;return a(t),n.promise}},ce4e:function(e,t,n){var r=n("da84");e.exports=function(e,t){try{Object.defineProperty(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("da84"),i=n("1626"),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);t.f=o?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},d28b:function(e,t,n){var r=n("746f");r("iterator")},d2bb:function(e,t,n){var r=n("825a"),i=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,e.call(n,[]),t=n instanceof Array}catch(o){}return function(n,o){return r(n),i(o),t?e.call(n,o):n.__proto__=o,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,i=n("1a2d"),o=n("b622"),a=o("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,a)&&r(e,a,{configurable:!0,value:t})}},d4c3:function(e,t,n){var r=n("342f"),i=n("da84");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d9b5:function(e,t,n){var r=n("1626"),i=n("d066"),o=n("fdbf");e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return r(t)&&Object(e)instanceof t}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(e,t,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),a=n("fc6a"),s=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,n,r=a(e),i=s.f,u=o(r),l={},d=0;while(u.length>d)n=i(r,t=u[d++]),void 0!==n&&c(l,t,n);return l}})},dc4a:function(e,t,n){var r=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},ddb0:function(e,t,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),a=n("e260"),s=n("9112"),c=n("b622"),u=c("iterator"),l=c("toStringTag"),d=a.values,f=function(e,t){if(e){if(e[u]!==d)try{s(e,u,d)}catch(r){e[u]=d}if(e[l]||s(e,l,t),i[t])for(var n in a)if(e[n]!==a[n])try{s(e,n,a[n])}catch(r){e[n]=a[n]}}};for(var h in i)f(r[h]&&r[h].prototype,h);f(o,"DOMTokenList")},ded3:function(e,t,n){n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");var r=n("9523");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}e.exports=o,e.exports["default"]=e.exports,e.exports.__esModule=!0},df75:function(e,t,n){var r=n("ca84"),i=n("7839");e.exports=Object.keys||function(e){return r(e,i)}},e01a:function(e,t,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),a=n("1a2d"),s=n("1626"),c=n("861d"),u=n("9bf2").f,l=n("e893"),d=o.Symbol;if(i&&s(d)&&(!("description"in d.prototype)||void 0!==d().description)){var f={},h=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof h?new d(e):void 0===e?d():d(e);return""===e&&(f[t]=!0),t};l(h,d);var p=h.prototype=d.prototype;p.constructor=h;var v=p.toString,m="Symbol(test)"==String(d("test")),g=/^Symbol\((.*)\)[^)]+$/;u(p,"description",{configurable:!0,get:function(){var e=c(this)?this.valueOf():this,t=v.call(e);if(a(f,e))return"";var n=m?t.slice(7,-1):t.replace(g,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:h})}},e163:function(e,t,n){var r=n("1a2d"),i=n("1626"),o=n("7b0b"),a=n("f772"),s=n("e177"),c=a("IE_PROTO"),u=Object.prototype;e.exports=s?Object.getPrototypeOf:function(e){var t=o(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof Object?u:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),a=n("69f3"),s=n("7dd0"),c="Array Iterator",u=a.set,l=a.getterFor(c);e.exports=s(Array,"Array",(function(e,t){u(this,{type:c,target:r(e),index:0,kind:t})}),(function(){var e=l(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},e2cc:function(e,t,n){var r=n("6eeb");e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},e439:function(e,t,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),a=n("06cf").f,s=n("83ab"),c=i((function(){a(1)})),u=!s||c;r({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(e,t){return a(o(e),t)}})},e538:function(e,t,n){var r=n("b622");t.f=r},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e6cf:function(e,t,n){"use strict";var r,i,o,a,s=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),d=n("fea9"),f=n("6eeb"),h=n("e2cc"),p=n("d2bb"),v=n("d44e"),m=n("2626"),g=n("59ed"),y=n("1626"),b=n("861d"),_=n("19aa"),w=n("8925"),I=n("2266"),O=n("1c7e"),k=n("4840"),E=n("2cf4").set,T=n("b575"),S=n("cdf9"),A=n("44de"),C=n("f069"),R=n("e667"),P=n("69f3"),x=n("94ca"),j=n("b622"),N=n("6069"),L=n("605d"),D=n("2d00"),M=j("species"),$="Promise",U=P.get,F=P.set,V=P.getterFor($),z=d&&d.prototype,H=d,W=z,B=u.TypeError,G=u.document,q=u.process,K=C.f,J=K,Y=!!(G&&G.createEvent&&u.dispatchEvent),X=y(u.PromiseRejectionEvent),Z="unhandledrejection",Q="rejectionhandled",ee=0,te=1,ne=2,re=1,ie=2,oe=!1,ae=x($,(function(){var e=w(H),t=e!==String(H);if(!t&&66===D)return!0;if(c&&!W["finally"])return!0;if(D>=51&&/native code/.test(e))return!1;var n=new H((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},i=n.constructor={};return i[M]=r,oe=n.then((function(){}))instanceof r,!oe||!t&&N&&!X})),se=ae||!O((function(e){H.all(e)["catch"]((function(){}))})),ce=function(e){var t;return!(!b(e)||!y(t=e.then))&&t},ue=function(e,t){if(!e.notified){e.notified=!0;var n=e.reactions;T((function(){var r=e.value,i=e.state==te,o=0;while(n.length>o){var a,s,c,u=n[o++],l=i?u.ok:u.fail,d=u.resolve,f=u.reject,h=u.domain;try{l?(i||(e.rejection===ie&&he(e),e.rejection=re),!0===l?a=r:(h&&h.enter(),a=l(r),h&&(h.exit(),c=!0)),a===u.promise?f(B("Promise-chain cycle")):(s=ce(a))?s.call(a,d,f):d(a)):f(r)}catch(p){h&&!c&&h.exit(),f(p)}}e.reactions=[],e.notified=!1,t&&!e.rejection&&de(e)}))}},le=function(e,t,n){var r,i;Y?(r=G.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),u.dispatchEvent(r)):r={promise:t,reason:n},!X&&(i=u["on"+e])?i(r):e===Z&&A("Unhandled promise rejection",n)},de=function(e){E.call(u,(function(){var t,n=e.facade,r=e.value,i=fe(e);if(i&&(t=R((function(){L?q.emit("unhandledRejection",r,n):le(Z,n,r)})),e.rejection=L||fe(e)?ie:re,t.error))throw t.value}))},fe=function(e){return e.rejection!==re&&!e.parent},he=function(e){E.call(u,(function(){var t=e.facade;L?q.emit("rejectionHandled",t):le(Q,t,e.value)}))},pe=function(e,t,n){return function(r){e(t,r,n)}},ve=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=ne,ue(e,!0))},me=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw B("Promise can't be resolved itself");var r=ce(t);r?T((function(){var n={done:!1};try{r.call(t,pe(me,n,e),pe(ve,n,e))}catch(i){ve(n,i,e)}})):(e.value=t,e.state=te,ue(e,!1))}catch(i){ve({done:!1},i,e)}}};if(ae&&(H=function(e){_(this,H,$),g(e),r.call(this);var t=U(this);try{e(pe(me,t),pe(ve,t))}catch(n){ve(t,n)}},W=H.prototype,r=function(e){F(this,{type:$,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:ee,value:void 0})},r.prototype=h(W,{then:function(e,t){var n=V(this),r=K(k(this,H));return r.ok=!y(e)||e,r.fail=y(t)&&t,r.domain=L?q.domain:void 0,n.parent=!0,n.reactions.push(r),n.state!=ee&&ue(n,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),i=function(){var e=new r,t=U(e);this.promise=e,this.resolve=pe(me,t),this.reject=pe(ve,t)},C.f=K=function(e){return e===H||e===o?new i(e):J(e)},!c&&y(d)&&z!==Object.prototype)){a=z.then,oe||(f(z,"then",(function(e,t){var n=this;return new H((function(e,t){a.call(n,e,t)})).then(e,t)}),{unsafe:!0}),f(z,"catch",W["catch"],{unsafe:!0}));try{delete z.constructor}catch(ge){}p&&p(z,W)}s({global:!0,wrap:!0,forced:ae},{Promise:H}),v(H,$,!1,!0),m($),o=l($),s({target:$,stat:!0,forced:ae},{reject:function(e){var t=K(this);return t.reject.call(void 0,e),t.promise}}),s({target:$,stat:!0,forced:c||ae},{resolve:function(e){return S(c&&this===o?H:this,e)}}),s({target:$,stat:!0,forced:se},{all:function(e){var t=this,n=K(t),r=n.resolve,i=n.reject,o=R((function(){var n=g(t.resolve),o=[],a=0,s=1;I(e,(function(e){var c=a++,u=!1;o.push(void 0),s++,n.call(t,e).then((function(e){u||(u=!0,o[c]=e,--s||r(o))}),i)})),--s||r(o)}));return o.error&&i(o.value),n.promise},race:function(e){var t=this,n=K(t),r=n.reject,i=R((function(){var i=g(t.resolve);I(e,(function(e){i.call(t,e).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e893:function(e,t,n){var r=n("1a2d"),i=n("56ef"),o=n("06cf"),a=n("9bf2");e.exports=function(e,t){for(var n=i(t),s=a.f,c=o.f,u=0;u<n.length;u++){var l=n[u];r(e,l)||s(e,l,c(t,l))}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},e95a:function(e,t,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||a[o]===e)}},f069:function(e,t,n){"use strict";var r=n("59ed"),i=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new i(e)}},f0e4:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}n("b64b"),e.exports=r,e.exports["default"]=e.exports,e.exports.__esModule=!0},f5df:function(e,t,n){var r=n("00ee"),i=n("1626"),o=n("c6b6"),a=n("b622"),s=a("toStringTag"),c="Arguments"==o(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=u(t=Object(e),s))?n:c?o(t):"Object"==(r=o(t))&&i(t.callee)?"Arguments":r}},f772:function(e,t,n){var r=n("5692"),i=n("90e3"),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},fc6a:function(e,t,n){var r=n("44ad"),i=n("1d80");e.exports=function(e){return r(i(e))}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,n){var r=n("da84");e.exports=r.Promise},ffa6:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}));var r=n("9ab4"),i=n("1fd5"),o=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),a="[DEFAULT]",s=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new i["a"];if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(o){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(u(e))try{this.getOrInitializeService({instanceIdentifier:a})}catch(h){}try{for(var i=Object(r["f"])(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var s=Object(r["c"])(o.value,2),c=s[0],l=s[1],d=this.normalizeInstanceIdentifier(c);try{var f=this.getOrInitializeService({instanceIdentifier:d});l.resolve(f)}catch(h){}}}catch(p){t={error:p}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=a),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return Object(r["a"])(this,void 0,void 0,(function(){var e;return Object(r["b"])(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Object(r["e"])(Object(r["e"])([],Object(r["c"])(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),Object(r["c"])(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=a),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e=a),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var i=e.options,o=void 0===i?{}:i,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(this.name+"("+a+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var s=this.getOrInitializeService({instanceIdentifier:a,options:o});try{for(var c=Object(r["f"])(this.instancesDeferred.entries()),u=c.next();!u.done;u=c.next()){var l=Object(r["c"])(u.value,2),d=l[0],f=l[1],h=this.normalizeInstanceIdentifier(d);a===h&&f.resolve(s)}}catch(p){t={error:p}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}return s},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,i,o=this.onInitCallbacks.get(t);if(o)try{for(var a=Object(r["f"])(o),s=a.next();!s.done;s=a.next()){var c=s.value;try{c(e,t)}catch(u){}}}catch(l){n={error:l}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t=e.instanceIdentifier,n=e.options,r=void 0===n?{}:n,i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:c(t),options:r}),this.instances.set(t,i),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch(o){}return i||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=a),this.component?this.component.multipleInstances?e:a:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();function c(e){return e===a?void 0:e}function u(e){return"EAGER"===e.instantiationMode}
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
 */var l=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){var t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new s(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}()}}]);