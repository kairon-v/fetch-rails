!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return document.querySelector('meta[name="csrf-token"]').getAttribute("content")},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t&&0!==Object.keys(t).length?e+"?"+$.param(t):e},u=function(){return{"X-Requested-With":"XMLHttpRequest","X-CSRF-Token":r(),Accept:"application/json","Content-Type":"application/json"}},c=function(){return{"X-Requested-With":"XMLHttpRequest","X-CSRF-Token":r()}},i=function(e){return e.json()},a=function(e){return e.text()},s={checkStatus:function(e){return new Promise(function(t,n){e.status>=200&&e.status<300?t(e):e.json().then(function(e){n(e)})})},json:function(e,t){var e=o(e,t),n={headers:u(),credentials:"same-origin"};return fetch(e,n).then(s.checkStatus).then(i)},postJSON:function(e,t){var n={headers:u(),credentials:"same-origin",method:"post",body:JSON.stringify(t)};return fetch(e,n).then(s.checkStatus).then(i)},putJSON:function(e,t){var n={headers:u(),credentials:"same-origin",method:"put",body:JSON.stringify(t)};return fetch(e,n).then(s.checkStatus).then(i)},deleteJSON:function(e){var t={headers:u(),credentials:"same-origin",method:"delete"};return fetch(e,t).then(s.checkStatus).then(i)},html:function(e,t){var e=o(e,t),n={headers:c(),credentials:"same-origin"};return fetch(e,n).then(s.checkStatus)},text:function(e,t){var e=o(e,params),t={headers:c(),credentials:"same-origin"};return fetch(e,t).then(s.checkStatus).then(a)},postForm:function(e,t){var n={headers:defaultHeadersHTML(),credentials:"same-origin",body:new FormData(document.querySelector(t)),method:"post"};return fetch(e,n).then(s.checkStatus)}};t.default=s},function(e,t,n){e.exports=n(0)}]);