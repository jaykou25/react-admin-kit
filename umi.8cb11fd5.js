!(function(){var hd=Object.defineProperty,yd=Object.defineProperties;var gd=Object.getOwnPropertyDescriptors;var Fc=Object.getOwnPropertySymbols;var Id=Object.prototype.hasOwnProperty,xd=Object.prototype.propertyIsEnumerable;var Bc=(c,l,e)=>l in c?hd(c,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[l]=e,ks=(c,l)=>{for(var e in l||(l={}))Id.call(l,e)&&Bc(c,e,l[e]);if(Fc)for(var e of Fc(l))xd.call(l,e)&&Bc(c,e,l[e]);return c},El=(c,l)=>yd(c,gd(l));(function(){var __webpack_modules__={25687:function(c,l,e){"use strict";e.d(l,{kG:function(){return p}});function o(y){return Math.floor(Math.log(y)*Math.LOG10E)}function a(y,g){if(typeof y.repeat=="function")return y.repeat(g);for(var I=new Array(g),b=0;b<I.length;b++)I[b]=y;return I.join("")}function r(y,g,I,b){y.get(g)||y.set(g,Object.create(null));var E=y.get(g);E[I]=b}function s(y,g,I){for(var b=0,E=Object.keys(I);b<E.length;b++){var R=E[b];r(y,g,R,I[R])}}function u(y,g,I){return v(y,g,I)[I]}function v(y,g){for(var I=[],b=2;b<arguments.length;b++)I[b-2]=arguments[b];var E=y.get(g);if(!E)throw new TypeError("".concat(g," InternalSlot has not been initialized"));return I.reduce(function(R,A){return R[A]=E[A],R},Object.create(null))}function d(y){return y.type==="literal"}function h(y,g,I){var b=I.value;Object.defineProperty(y,g,{configurable:!0,enumerable:!1,writable:!0,value:b})}var m=/-u(?:-[0-9a-z]{2,8})+/gi;function p(y,g,I){if(I===void 0&&(I=Error),!y)throw new I(g)}},95957:function(c,l,e){"use strict";e.d(l,{A:function(){return g},H:function(){return o}});function o(I,b){var E=b&&b.cache?b.cache:y,R=b&&b.serializer?b.serializer:m,A=b&&b.strategy?b.strategy:v;return A(I,{cache:E,serializer:R})}function a(I){return I==null||typeof I=="number"||typeof I=="boolean"}function r(I,b,E,R){var A=a(R)?R:E(R),N=b.get(A);return typeof N=="undefined"&&(N=I.call(this,R),b.set(A,N)),N}function s(I,b,E){var R=Array.prototype.slice.call(arguments,3),A=E(R),N=b.get(A);return typeof N=="undefined"&&(N=I.apply(this,R),b.set(A,N)),N}function u(I,b,E,R,A){return E.bind(b,I,R,A)}function v(I,b){var E=I.length===1?r:s;return u(I,this,E,b.cache.create(),b.serializer)}function d(I,b){return u(I,this,s,b.cache.create(),b.serializer)}function h(I,b){return u(I,this,r,b.cache.create(),b.serializer)}var m=function(){return JSON.stringify(arguments)};function p(){this.cache=Object.create(null)}p.prototype.get=function(I){return this.cache[I]},p.prototype.set=function(I,b){this.cache[I]=b};var y={create:function(){return new p}},g={variadic:d,monadic:h}},56096:function(c,l,e){"use strict";e.d(l,{wD:function(){return r},VG:function(){return v},rp:function(){return h},Ii:function(){return E},O4:function(){return u},uf:function(){return d},Wh:function(){return b},Jo:function(){return y},yx:function(){return g},Wi:function(){return p},HI:function(){return I},pe:function(){return m},Qc:function(){return Ot}});var o=e(97582),a;(function(x){x[x.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",x[x.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",x[x.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",x[x.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",x[x.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",x[x.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",x[x.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",x[x.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",x[x.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",x[x.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",x[x.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",x[x.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",x[x.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",x[x.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",x[x.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",x[x.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",x[x.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",x[x.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",x[x.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",x[x.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",x[x.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",x[x.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",x[x.INVALID_TAG=23]="INVALID_TAG",x[x.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",x[x.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",x[x.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(a||(a={}));var r;(function(x){x[x.literal=0]="literal",x[x.argument=1]="argument",x[x.number=2]="number",x[x.date=3]="date",x[x.time=4]="time",x[x.select=5]="select",x[x.plural=6]="plural",x[x.pound=7]="pound",x[x.tag=8]="tag"})(r||(r={}));var s;(function(x){x[x.number=0]="number",x[x.dateTime=1]="dateTime"})(s||(s={}));function u(x){return x.type===r.literal}function v(x){return x.type===r.argument}function d(x){return x.type===r.number}function h(x){return x.type===r.date}function m(x){return x.type===r.time}function p(x){return x.type===r.select}function y(x){return x.type===r.plural}function g(x){return x.type===r.pound}function I(x){return x.type===r.tag}function b(x){return!!(x&&typeof x=="object"&&x.type===s.number)}function E(x){return!!(x&&typeof x=="object"&&x.type===s.dateTime)}function R(x){return{type:r.literal,value:x}}function A(x,U){return{type:r.number,value:x,style:U}}var N=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,w=/[\t-\r \x85\u200E\u200F\u2028\u2029]/,B=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function C(x){var U={};return x.replace(B,function(ne){var ue=ne.length;switch(ne[0]){case"G":U.era=ue===4?"long":ue===5?"narrow":"short";break;case"y":U.year=ue===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":U.month=["numeric","2-digit","short","long","narrow"][ue-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":U.day=["numeric","2-digit"][ue-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":U.weekday=ue===4?"short":ue===5?"narrow":"short";break;case"e":if(ue<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");U.weekday=["short","long","narrow","short"][ue-4];break;case"c":if(ue<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");U.weekday=["short","long","narrow","short"][ue-4];break;case"a":U.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":U.hourCycle="h12",U.hour=["numeric","2-digit"][ue-1];break;case"H":U.hourCycle="h23",U.hour=["numeric","2-digit"][ue-1];break;case"K":U.hourCycle="h11",U.hour=["numeric","2-digit"][ue-1];break;case"k":U.hourCycle="h24",U.hour=["numeric","2-digit"][ue-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":U.minute=["numeric","2-digit"][ue-1];break;case"s":U.second=["numeric","2-digit"][ue-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":U.timeZoneName=ue<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),U}var L=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function Z(x){if(x.length===0)throw new Error("Number skeleton cannot be empty");for(var U=x.split(L).filter(function(Be){return Be.length>0}),ne=[],ue=0,Ie=U;ue<Ie.length;ue++){var Oe=Ie[ue],Se=Oe.split("/");if(Se.length===0)throw new Error("Invalid number skeleton");for(var $e=Se[0],Ve=Se.slice(1),Ge=0,vt=Ve;Ge<vt.length;Ge++){var he=vt[Ge];if(he.length===0)throw new Error("Invalid number skeleton")}ne.push({stem:$e,options:Ve})}return ne}function te(x){return x.replace(/^(.*?)-/,"")}var ee=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,_=/^(@+)?(\+|#+)?[rs]?$/g,de=/(\*)(0+)|(#+)(0+)|(0+)/g,be=/^(0+)$/;function Te(x){var U={};return x[x.length-1]==="r"?U.roundingPriority="morePrecision":x[x.length-1]==="s"&&(U.roundingPriority="lessPrecision"),x.replace(_,function(ne,ue,Ie){return typeof Ie!="string"?(U.minimumSignificantDigits=ue.length,U.maximumSignificantDigits=ue.length):Ie==="+"?U.minimumSignificantDigits=ue.length:ue[0]==="#"?U.maximumSignificantDigits=ue.length:(U.minimumSignificantDigits=ue.length,U.maximumSignificantDigits=ue.length+(typeof Ie=="string"?Ie.length:0)),""}),U}function ie(x){switch(x){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Q(x){var U;if(x[0]==="E"&&x[1]==="E"?(U={notation:"engineering"},x=x.slice(2)):x[0]==="E"&&(U={notation:"scientific"},x=x.slice(1)),U){var ne=x.slice(0,2);if(ne==="+!"?(U.signDisplay="always",x=x.slice(2)):ne==="+?"&&(U.signDisplay="exceptZero",x=x.slice(2)),!be.test(x))throw new Error("Malformed concise eng/scientific notation");U.minimumIntegerDigits=x.length}return U}function Y(x){var U={},ne=ie(x);return ne||U}function k(x){for(var U={},ne=0,ue=x;ne<ue.length;ne++){var Ie=ue[ne];switch(Ie.stem){case"percent":case"%":U.style="percent";continue;case"%x100":U.style="percent",U.scale=100;continue;case"currency":U.style="currency",U.currency=Ie.options[0];continue;case"group-off":case",_":U.useGrouping=!1;continue;case"precision-integer":case".":U.maximumFractionDigits=0;continue;case"measure-unit":case"unit":U.style="unit",U.unit=te(Ie.options[0]);continue;case"compact-short":case"K":U.notation="compact",U.compactDisplay="short";continue;case"compact-long":case"KK":U.notation="compact",U.compactDisplay="long";continue;case"scientific":U=(0,o.pi)((0,o.pi)((0,o.pi)({},U),{notation:"scientific"}),Ie.options.reduce(function(Ve,Ge){return(0,o.pi)((0,o.pi)({},Ve),Y(Ge))},{}));continue;case"engineering":U=(0,o.pi)((0,o.pi)((0,o.pi)({},U),{notation:"engineering"}),Ie.options.reduce(function(Ve,Ge){return(0,o.pi)((0,o.pi)({},Ve),Y(Ge))},{}));continue;case"notation-simple":U.notation="standard";continue;case"unit-width-narrow":U.currencyDisplay="narrowSymbol",U.unitDisplay="narrow";continue;case"unit-width-short":U.currencyDisplay="code",U.unitDisplay="short";continue;case"unit-width-full-name":U.currencyDisplay="name",U.unitDisplay="long";continue;case"unit-width-iso-code":U.currencyDisplay="symbol";continue;case"scale":U.scale=parseFloat(Ie.options[0]);continue;case"integer-width":if(Ie.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");Ie.options[0].replace(de,function(Ve,Ge,vt,he,Be,Fe){if(Ge)U.minimumIntegerDigits=vt.length;else{if(he&&Be)throw new Error("We currently do not support maximum integer digits");if(Fe)throw new Error("We currently do not support exact integer digits")}return""});continue}if(be.test(Ie.stem)){U.minimumIntegerDigits=Ie.stem.length;continue}if(ee.test(Ie.stem)){if(Ie.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");Ie.stem.replace(ee,function(Ve,Ge,vt,he,Be,Fe){return vt==="*"?U.minimumFractionDigits=Ge.length:he&&he[0]==="#"?U.maximumFractionDigits=he.length:Be&&Fe?(U.minimumFractionDigits=Be.length,U.maximumFractionDigits=Be.length+Fe.length):(U.minimumFractionDigits=Ge.length,U.maximumFractionDigits=Ge.length),""});var Oe=Ie.options[0];Oe==="w"?U=(0,o.pi)((0,o.pi)({},U),{trailingZeroDisplay:"stripIfInteger"}):Oe&&(U=(0,o.pi)((0,o.pi)({},U),Te(Oe)));continue}if(_.test(Ie.stem)){U=(0,o.pi)((0,o.pi)({},U),Te(Ie.stem));continue}var Se=ie(Ie.stem);Se&&(U=(0,o.pi)((0,o.pi)({},U),Se));var $e=Q(Ie.stem);$e&&(U=(0,o.pi)((0,o.pi)({},U),$e))}return U}var K={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","h","K"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TL:["H","hB","hb","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function re(x,U){for(var ne="",ue=0;ue<x.length;ue++){var Ie=x.charAt(ue);if(Ie==="j"){for(var Oe=0;ue+1<x.length&&x.charAt(ue+1)===Ie;)Oe++,ue++;var Se=1+(Oe&1),$e=Oe<2?1:3+(Oe>>1),Ve="a",Ge=T(U);for((Ge=="H"||Ge=="k")&&($e=0);$e-- >0;)ne+=Ve;for(;Se-- >0;)ne=Ge+ne}else Ie==="J"?ne+="H":ne+=Ie}return ne}function T(x){var U=x.hourCycle;if(U===void 0&&x.hourCycles&&x.hourCycles.length&&(U=x.hourCycles[0]),U)switch(U){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var ne=x.language,ue;ne!=="root"&&(ue=x.maximize().region);var Ie=K[ue||""]||K[ne||""]||K["".concat(ne,"-001")]||K["001"];return Ie[0]}var D,V=new RegExp("^".concat(N.source,"*")),le=new RegExp("".concat(N.source,"*$"));function J(x,U){return{start:x,end:U}}var P=!!String.prototype.startsWith,$=!!String.fromCodePoint,H=!!Object.fromEntries,q=!!String.prototype.codePointAt,ae=!!String.prototype.trimStart,Ce=!!String.prototype.trimEnd,Le=!!Number.isSafeInteger,Xe=Le?Number.isSafeInteger:function(x){return typeof x=="number"&&isFinite(x)&&Math.floor(x)===x&&Math.abs(x)<=9007199254740991},Ze=!0;try{var je=se("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Ze=((D=je.exec("a"))===null||D===void 0?void 0:D[0])==="a"}catch(x){Ze=!1}var Ye=P?function(U,ne,ue){return U.startsWith(ne,ue)}:function(U,ne,ue){return U.slice(ue,ue+ne.length)===ne},oe=$?String.fromCodePoint:function(){for(var U=[],ne=0;ne<arguments.length;ne++)U[ne]=arguments[ne];for(var ue="",Ie=U.length,Oe=0,Se;Ie>Oe;){if(Se=U[Oe++],Se>1114111)throw RangeError(Se+" is not a valid code point");ue+=Se<65536?String.fromCharCode(Se):String.fromCharCode(((Se-=65536)>>10)+55296,Se%1024+56320)}return ue},fe=H?Object.fromEntries:function(U){for(var ne={},ue=0,Ie=U;ue<Ie.length;ue++){var Oe=Ie[ue],Se=Oe[0],$e=Oe[1];ne[Se]=$e}return ne},pe=q?function(U,ne){return U.codePointAt(ne)}:function(U,ne){var ue=U.length;if(!(ne<0||ne>=ue)){var Ie=U.charCodeAt(ne),Oe;return Ie<55296||Ie>56319||ne+1===ue||(Oe=U.charCodeAt(ne+1))<56320||Oe>57343?Ie:(Ie-55296<<10)+(Oe-56320)+65536}},me=ae?function(U){return U.trimStart()}:function(U){return U.replace(V,"")},Pe=Ce?function(U){return U.trimEnd()}:function(U){return U.replace(le,"")};function se(x,U){return new RegExp(x,U)}var ve;if(Ze){var ye=se("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ve=function(U,ne){var ue;ye.lastIndex=ne;var Ie=ye.exec(U);return(ue=Ie[1])!==null&&ue!==void 0?ue:""}}else ve=function(U,ne){for(var ue=[];;){var Ie=pe(U,ne);if(Ie===void 0||lt(Ie)||St(Ie))break;ue.push(Ie),ne+=Ie>=65536?2:1}return oe.apply(void 0,ue)};var De=function(){function x(U,ne){ne===void 0&&(ne={}),this.message=U,this.position={offset:0,line:1,column:1},this.ignoreTag=!!ne.ignoreTag,this.locale=ne.locale,this.requiresOtherClause=!!ne.requiresOtherClause,this.shouldParseSkeletons=!!ne.shouldParseSkeletons}return x.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},x.prototype.parseMessage=function(U,ne,ue){for(var Ie=[];!this.isEOF();){var Oe=this.char();if(Oe===123){var Se=this.parseArgument(U,ue);if(Se.err)return Se;Ie.push(Se.val)}else{if(Oe===125&&U>0)break;if(Oe===35&&(ne==="plural"||ne==="selectordinal")){var $e=this.clonePosition();this.bump(),Ie.push({type:r.pound,location:J($e,this.clonePosition())})}else if(Oe===60&&!this.ignoreTag&&this.peek()===47){if(ue)break;return this.error(a.UNMATCHED_CLOSING_TAG,J(this.clonePosition(),this.clonePosition()))}else if(Oe===60&&!this.ignoreTag&&ze(this.peek()||0)){var Se=this.parseTag(U,ne);if(Se.err)return Se;Ie.push(Se.val)}else{var Se=this.parseLiteral(U,ne);if(Se.err)return Se;Ie.push(Se.val)}}}return{val:Ie,err:null}},x.prototype.parseTag=function(U,ne){var ue=this.clonePosition();this.bump();var Ie=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:r.literal,value:"<".concat(Ie,"/>"),location:J(ue,this.clonePosition())},err:null};if(this.bumpIf(">")){var Oe=this.parseMessage(U+1,ne,!0);if(Oe.err)return Oe;var Se=Oe.val,$e=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!ze(this.char()))return this.error(a.INVALID_TAG,J($e,this.clonePosition()));var Ve=this.clonePosition(),Ge=this.parseTagName();return Ie!==Ge?this.error(a.UNMATCHED_CLOSING_TAG,J(Ve,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:r.tag,value:Ie,children:Se,location:J(ue,this.clonePosition())},err:null}:this.error(a.INVALID_TAG,J($e,this.clonePosition())))}else return this.error(a.UNCLOSED_TAG,J(ue,this.clonePosition()))}else return this.error(a.INVALID_TAG,J(ue,this.clonePosition()))},x.prototype.parseTagName=function(){var U=this.offset();for(this.bump();!this.isEOF()&&at(this.char());)this.bump();return this.message.slice(U,this.offset())},x.prototype.parseLiteral=function(U,ne){for(var ue=this.clonePosition(),Ie="";;){var Oe=this.tryParseQuote(ne);if(Oe){Ie+=Oe;continue}var Se=this.tryParseUnquoted(U,ne);if(Se){Ie+=Se;continue}var $e=this.tryParseLeftAngleBracket();if($e){Ie+=$e;continue}break}var Ve=J(ue,this.clonePosition());return{val:{type:r.literal,value:Ie,location:Ve},err:null}},x.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!bt(this.peek()||0))?(this.bump(),"<"):null},x.prototype.tryParseQuote=function(U){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(U==="plural"||U==="selectordinal")break;return null;default:return null}this.bump();var ne=[this.char()];for(this.bump();!this.isEOF();){var ue=this.char();if(ue===39)if(this.peek()===39)ne.push(39),this.bump();else{this.bump();break}else ne.push(ue);this.bump()}return oe.apply(void 0,ne)},x.prototype.tryParseUnquoted=function(U,ne){if(this.isEOF())return null;var ue=this.char();return ue===60||ue===123||ue===35&&(ne==="plural"||ne==="selectordinal")||ue===125&&U>0?null:(this.bump(),oe(ue))},x.prototype.parseArgument=function(U,ne){var ue=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE,J(ue,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(a.EMPTY_ARGUMENT,J(ue,this.clonePosition()));var Ie=this.parseIdentifierIfPossible().value;if(!Ie)return this.error(a.MALFORMED_ARGUMENT,J(ue,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE,J(ue,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:r.argument,value:Ie,location:J(ue,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE,J(ue,this.clonePosition())):this.parseArgumentOptions(U,ne,Ie,ue);default:return this.error(a.MALFORMED_ARGUMENT,J(ue,this.clonePosition()))}},x.prototype.parseIdentifierIfPossible=function(){var U=this.clonePosition(),ne=this.offset(),ue=ve(this.message,ne),Ie=ne+ue.length;this.bumpTo(Ie);var Oe=this.clonePosition(),Se=J(U,Oe);return{value:ue,location:Se}},x.prototype.parseArgumentOptions=function(U,ne,ue,Ie){var Oe,Se=this.clonePosition(),$e=this.parseIdentifierIfPossible().value,Ve=this.clonePosition();switch($e){case"":return this.error(a.EXPECT_ARGUMENT_TYPE,J(Se,Ve));case"number":case"date":case"time":{this.bumpSpace();var Ge=null;if(this.bumpIf(",")){this.bumpSpace();var vt=this.clonePosition(),he=this.parseSimpleArgStyleIfPossible();if(he.err)return he;var Be=Pe(he.val);if(Be.length===0)return this.error(a.EXPECT_ARGUMENT_STYLE,J(this.clonePosition(),this.clonePosition()));var Fe=J(vt,this.clonePosition());Ge={style:Be,styleLocation:Fe}}var Re=this.tryParseArgumentClose(Ie);if(Re.err)return Re;var Je=J(Ie,this.clonePosition());if(Ge&&Ye(Ge==null?void 0:Ge.style,"::",0)){var Ue=me(Ge.style.slice(2));if($e==="number"){var he=this.parseNumberSkeletonFromString(Ue,Ge.styleLocation);return he.err?he:{val:{type:r.number,value:ue,location:Je,style:he.val},err:null}}else{if(Ue.length===0)return this.error(a.EXPECT_DATE_TIME_SKELETON,Je);var It=Ue;this.locale&&(It=re(Ue,this.locale));var Be={type:s.dateTime,pattern:It,location:Ge.styleLocation,parsedOptions:this.shouldParseSkeletons?C(It):{}},xt=$e==="date"?r.date:r.time;return{val:{type:xt,value:ue,location:Je,style:Be},err:null}}}return{val:{type:$e==="number"?r.number:$e==="date"?r.date:r.time,value:ue,location:Je,style:(Oe=Ge==null?void 0:Ge.style)!==null&&Oe!==void 0?Oe:null},err:null}}case"plural":case"selectordinal":case"select":{var Dt=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(a.EXPECT_SELECT_ARGUMENT_OPTIONS,J(Dt,(0,o.pi)({},Dt)));this.bumpSpace();var En=this.parseIdentifierIfPossible(),Xt=0;if($e!=="select"&&En.value==="offset"){if(!this.bumpIf(":"))return this.error(a.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,J(this.clonePosition(),this.clonePosition()));this.bumpSpace();var he=this.tryParseDecimalInteger(a.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,a.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(he.err)return he;this.bumpSpace(),En=this.parseIdentifierIfPossible(),Xt=he.val}var Mn=this.tryParsePluralOrSelectOptions(U,$e,ne,En);if(Mn.err)return Mn;var Re=this.tryParseArgumentClose(Ie);if(Re.err)return Re;var Wn=J(Ie,this.clonePosition());return $e==="select"?{val:{type:r.select,value:ue,options:fe(Mn.val),location:Wn},err:null}:{val:{type:r.plural,value:ue,options:fe(Mn.val),offset:Xt,pluralType:$e==="plural"?"cardinal":"ordinal",location:Wn},err:null}}default:return this.error(a.INVALID_ARGUMENT_TYPE,J(Se,Ve))}},x.prototype.tryParseArgumentClose=function(U){return this.isEOF()||this.char()!==125?this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE,J(U,this.clonePosition())):(this.bump(),{val:!0,err:null})},x.prototype.parseSimpleArgStyleIfPossible=function(){for(var U=0,ne=this.clonePosition();!this.isEOF();){var ue=this.char();switch(ue){case 39:{this.bump();var Ie=this.clonePosition();if(!this.bumpUntil("'"))return this.error(a.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,J(Ie,this.clonePosition()));this.bump();break}case 123:{U+=1,this.bump();break}case 125:{if(U>0)U-=1;else return{val:this.message.slice(ne.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(ne.offset,this.offset()),err:null}},x.prototype.parseNumberSkeletonFromString=function(U,ne){var ue=[];try{ue=Z(U)}catch(Ie){return this.error(a.INVALID_NUMBER_SKELETON,ne)}return{val:{type:s.number,tokens:ue,location:ne,parsedOptions:this.shouldParseSkeletons?k(ue):{}},err:null}},x.prototype.tryParsePluralOrSelectOptions=function(U,ne,ue,Ie){for(var Oe,Se=!1,$e=[],Ve=new Set,Ge=Ie.value,vt=Ie.location;;){if(Ge.length===0){var he=this.clonePosition();if(ne!=="select"&&this.bumpIf("=")){var Be=this.tryParseDecimalInteger(a.EXPECT_PLURAL_ARGUMENT_SELECTOR,a.INVALID_PLURAL_ARGUMENT_SELECTOR);if(Be.err)return Be;vt=J(he,this.clonePosition()),Ge=this.message.slice(he.offset,this.offset())}else break}if(Ve.has(Ge))return this.error(ne==="select"?a.DUPLICATE_SELECT_ARGUMENT_SELECTOR:a.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,vt);Ge==="other"&&(Se=!0),this.bumpSpace();var Fe=this.clonePosition();if(!this.bumpIf("{"))return this.error(ne==="select"?a.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:a.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,J(this.clonePosition(),this.clonePosition()));var Re=this.parseMessage(U+1,ne,ue);if(Re.err)return Re;var Je=this.tryParseArgumentClose(Fe);if(Je.err)return Je;$e.push([Ge,{value:Re.val,location:J(Fe,this.clonePosition())}]),Ve.add(Ge),this.bumpSpace(),Oe=this.parseIdentifierIfPossible(),Ge=Oe.value,vt=Oe.location}return $e.length===0?this.error(ne==="select"?a.EXPECT_SELECT_ARGUMENT_SELECTOR:a.EXPECT_PLURAL_ARGUMENT_SELECTOR,J(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!Se?this.error(a.MISSING_OTHER_CLAUSE,J(this.clonePosition(),this.clonePosition())):{val:$e,err:null}},x.prototype.tryParseDecimalInteger=function(U,ne){var ue=1,Ie=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(ue=-1);for(var Oe=!1,Se=0;!this.isEOF();){var $e=this.char();if($e>=48&&$e<=57)Oe=!0,Se=Se*10+($e-48),this.bump();else break}var Ve=J(Ie,this.clonePosition());return Oe?(Se*=ue,Xe(Se)?{val:Se,err:null}:this.error(ne,Ve)):this.error(U,Ve)},x.prototype.offset=function(){return this.position.offset},x.prototype.isEOF=function(){return this.offset()===this.message.length},x.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},x.prototype.char=function(){var U=this.position.offset;if(U>=this.message.length)throw Error("out of bound");var ne=pe(this.message,U);if(ne===void 0)throw Error("Offset ".concat(U," is at invalid UTF-16 code unit boundary"));return ne},x.prototype.error=function(U,ne){return{val:null,err:{kind:U,message:this.message,location:ne}}},x.prototype.bump=function(){if(!this.isEOF()){var U=this.char();U===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=U<65536?1:2)}},x.prototype.bumpIf=function(U){if(Ye(this.message,U,this.offset())){for(var ne=0;ne<U.length;ne++)this.bump();return!0}return!1},x.prototype.bumpUntil=function(U){var ne=this.offset(),ue=this.message.indexOf(U,ne);return ue>=0?(this.bumpTo(ue),!0):(this.bumpTo(this.message.length),!1)},x.prototype.bumpTo=function(U){if(this.offset()>U)throw Error("targetOffset ".concat(U," must be greater than or equal to the current offset ").concat(this.offset()));for(U=Math.min(U,this.message.length);;){var ne=this.offset();if(ne===U)break;if(ne>U)throw Error("targetOffset ".concat(U," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},x.prototype.bumpSpace=function(){for(;!this.isEOF()&&lt(this.char());)this.bump()},x.prototype.peek=function(){if(this.isEOF())return null;var U=this.char(),ne=this.offset(),ue=this.message.charCodeAt(ne+(U>=65536?2:1));return ue!=null?ue:null},x}();function ze(x){return x>=97&&x<=122||x>=65&&x<=90}function bt(x){return ze(x)||x===47}function at(x){return x===45||x===46||x>=48&&x<=57||x===95||x>=97&&x<=122||x>=65&&x<=90||x==183||x>=192&&x<=214||x>=216&&x<=246||x>=248&&x<=893||x>=895&&x<=8191||x>=8204&&x<=8205||x>=8255&&x<=8256||x>=8304&&x<=8591||x>=11264&&x<=12271||x>=12289&&x<=55295||x>=63744&&x<=64975||x>=65008&&x<=65533||x>=65536&&x<=983039}function lt(x){return x>=9&&x<=13||x===32||x===133||x>=8206&&x<=8207||x===8232||x===8233}function St(x){return x>=33&&x<=35||x===36||x>=37&&x<=39||x===40||x===41||x===42||x===43||x===44||x===45||x>=46&&x<=47||x>=58&&x<=59||x>=60&&x<=62||x>=63&&x<=64||x===91||x===92||x===93||x===94||x===96||x===123||x===124||x===125||x===126||x===161||x>=162&&x<=165||x===166||x===167||x===169||x===171||x===172||x===174||x===176||x===177||x===182||x===187||x===191||x===215||x===247||x>=8208&&x<=8213||x>=8214&&x<=8215||x===8216||x===8217||x===8218||x>=8219&&x<=8220||x===8221||x===8222||x===8223||x>=8224&&x<=8231||x>=8240&&x<=8248||x===8249||x===8250||x>=8251&&x<=8254||x>=8257&&x<=8259||x===8260||x===8261||x===8262||x>=8263&&x<=8273||x===8274||x===8275||x>=8277&&x<=8286||x>=8592&&x<=8596||x>=8597&&x<=8601||x>=8602&&x<=8603||x>=8604&&x<=8607||x===8608||x>=8609&&x<=8610||x===8611||x>=8612&&x<=8613||x===8614||x>=8615&&x<=8621||x===8622||x>=8623&&x<=8653||x>=8654&&x<=8655||x>=8656&&x<=8657||x===8658||x===8659||x===8660||x>=8661&&x<=8691||x>=8692&&x<=8959||x>=8960&&x<=8967||x===8968||x===8969||x===8970||x===8971||x>=8972&&x<=8991||x>=8992&&x<=8993||x>=8994&&x<=9e3||x===9001||x===9002||x>=9003&&x<=9083||x===9084||x>=9085&&x<=9114||x>=9115&&x<=9139||x>=9140&&x<=9179||x>=9180&&x<=9185||x>=9186&&x<=9254||x>=9255&&x<=9279||x>=9280&&x<=9290||x>=9291&&x<=9311||x>=9472&&x<=9654||x===9655||x>=9656&&x<=9664||x===9665||x>=9666&&x<=9719||x>=9720&&x<=9727||x>=9728&&x<=9838||x===9839||x>=9840&&x<=10087||x===10088||x===10089||x===10090||x===10091||x===10092||x===10093||x===10094||x===10095||x===10096||x===10097||x===10098||x===10099||x===10100||x===10101||x>=10132&&x<=10175||x>=10176&&x<=10180||x===10181||x===10182||x>=10183&&x<=10213||x===10214||x===10215||x===10216||x===10217||x===10218||x===10219||x===10220||x===10221||x===10222||x===10223||x>=10224&&x<=10239||x>=10240&&x<=10495||x>=10496&&x<=10626||x===10627||x===10628||x===10629||x===10630||x===10631||x===10632||x===10633||x===10634||x===10635||x===10636||x===10637||x===10638||x===10639||x===10640||x===10641||x===10642||x===10643||x===10644||x===10645||x===10646||x===10647||x===10648||x>=10649&&x<=10711||x===10712||x===10713||x===10714||x===10715||x>=10716&&x<=10747||x===10748||x===10749||x>=10750&&x<=11007||x>=11008&&x<=11055||x>=11056&&x<=11076||x>=11077&&x<=11078||x>=11079&&x<=11084||x>=11085&&x<=11123||x>=11124&&x<=11125||x>=11126&&x<=11157||x===11158||x>=11159&&x<=11263||x>=11776&&x<=11777||x===11778||x===11779||x===11780||x===11781||x>=11782&&x<=11784||x===11785||x===11786||x===11787||x===11788||x===11789||x>=11790&&x<=11798||x===11799||x>=11800&&x<=11801||x===11802||x===11803||x===11804||x===11805||x>=11806&&x<=11807||x===11808||x===11809||x===11810||x===11811||x===11812||x===11813||x===11814||x===11815||x===11816||x===11817||x>=11818&&x<=11822||x===11823||x>=11824&&x<=11833||x>=11834&&x<=11835||x>=11836&&x<=11839||x===11840||x===11841||x===11842||x>=11843&&x<=11855||x>=11856&&x<=11857||x===11858||x>=11859&&x<=11903||x>=12289&&x<=12291||x===12296||x===12297||x===12298||x===12299||x===12300||x===12301||x===12302||x===12303||x===12304||x===12305||x>=12306&&x<=12307||x===12308||x===12309||x===12310||x===12311||x===12312||x===12313||x===12314||x===12315||x===12316||x===12317||x>=12318&&x<=12319||x===12320||x===12336||x===64830||x===64831||x>=65093&&x<=65094}function Bt(x){x.forEach(function(U){if(delete U.location,p(U)||y(U))for(var ne in U.options)delete U.options[ne].location,Bt(U.options[ne].value);else d(U)&&b(U.style)||(h(U)||m(U))&&E(U.style)?delete U.style.location:I(U)&&Bt(U.children)})}function Ot(x,U){U===void 0&&(U={}),U=(0,o.pi)({shouldParseSkeletons:!0,requiresOtherClause:!0},U);var ne=new De(x,U).parse();if(ne.err){var ue=SyntaxError(a[ne.err.kind]);throw ue.location=ne.err.location,ue.originalMessage=ne.err.message,ue}return U!=null&&U.captureLocation||Bt(ne.val),ne.val}var Wt=null},88222:function(c,l,e){"use strict";e.d(l,{$6:function(){return m},OV:function(){return u},Qe:function(){return d},X9:function(){return h},gb:function(){return v},wI:function(){return s}});var o=e(97582),a;(function(p){p.FORMAT_ERROR="FORMAT_ERROR",p.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",p.INVALID_CONFIG="INVALID_CONFIG",p.MISSING_DATA="MISSING_DATA",p.MISSING_TRANSLATION="MISSING_TRANSLATION"})(a||(a={}));var r=function(p){(0,o.ZT)(y,p);function y(g,I,b){var E=this,R=b?b instanceof Error?b:new Error(String(b)):void 0;return E=p.call(this,"[@formatjs/intl Error ".concat(g,"] ").concat(I,`
`).concat(R?`
`.concat(R.message,`
`).concat(R.stack):""))||this,E.code=g,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(E,y),E}return y}(Error),s=function(p){(0,o.ZT)(y,p);function y(g,I){return p.call(this,a.UNSUPPORTED_FORMATTER,g,I)||this}return y}(r),u=function(p){(0,o.ZT)(y,p);function y(g,I){return p.call(this,a.INVALID_CONFIG,g,I)||this}return y}(r),v=function(p){(0,o.ZT)(y,p);function y(g,I){return p.call(this,a.MISSING_DATA,g,I)||this}return y}(r),d=function(p){(0,o.ZT)(y,p);function y(g,I,b){var E=p.call(this,a.FORMAT_ERROR,"".concat(g,`
Locale: `).concat(I,`
`),b)||this;return E.locale=I,E}return y}(r),h=function(p){(0,o.ZT)(y,p);function y(g,I,b,E){var R=p.call(this,"".concat(g,`
MessageID: `).concat(b==null?void 0:b.id,`
Default Message: `).concat(b==null?void 0:b.defaultMessage,`
Description: `).concat(b==null?void 0:b.description,`
`),I,E)||this;return R.descriptor=b,R.locale=I,R}return y}(d),m=function(p){(0,o.ZT)(y,p);function y(g,I){var b=p.call(this,a.MISSING_TRANSLATION,'Missing message: "'.concat(g.id,'" for locale "').concat(I,'", using ').concat(g.defaultMessage?"default message (".concat(typeof g.defaultMessage=="string"?g.defaultMessage:g.defaultMessage.map(function(E){var R;return(R=E.value)!==null&&R!==void 0?R:JSON.stringify(E)}).join(),")"):"id"," as fallback."))||this;return b.descriptor=g,b}return y}(r)},82644:function(c,l,e){"use strict";e.d(l,{L6:function(){return u},Sn:function(){return m},TB:function(){return g},Z0:function(){return h},ax:function(){return y}});var o=e(97582),a=e(16284),r=e(95957),s=e(88222);function u(I,b,E){return E===void 0&&(E={}),b.reduce(function(R,A){return A in I?R[A]=I[A]:A in E&&(R[A]=E[A]),R},{})}var v=function(I){},d=function(I){},h={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:v,onWarn:d};function m(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function p(I){return{create:function(){return{get:function(b){return I[b]},set:function(b,E){I[b]=E}}}}}function y(I){I===void 0&&(I=m());var b=Intl.RelativeTimeFormat,E=Intl.ListFormat,R=Intl.DisplayNames,A=(0,r.H)(function(){for(var B,C=[],L=0;L<arguments.length;L++)C[L]=arguments[L];return new((B=Intl.DateTimeFormat).bind.apply(B,(0,o.ev)([void 0],C,!1)))},{cache:p(I.dateTime),strategy:r.A.variadic}),N=(0,r.H)(function(){for(var B,C=[],L=0;L<arguments.length;L++)C[L]=arguments[L];return new((B=Intl.NumberFormat).bind.apply(B,(0,o.ev)([void 0],C,!1)))},{cache:p(I.number),strategy:r.A.variadic}),w=(0,r.H)(function(){for(var B,C=[],L=0;L<arguments.length;L++)C[L]=arguments[L];return new((B=Intl.PluralRules).bind.apply(B,(0,o.ev)([void 0],C,!1)))},{cache:p(I.pluralRules),strategy:r.A.variadic});return{getDateTimeFormat:A,getNumberFormat:N,getMessageFormat:(0,r.H)(function(B,C,L,Z){return new a.C(B,C,L,(0,o.pi)({formatters:{getNumberFormat:N,getDateTimeFormat:A,getPluralRules:w}},Z||{}))},{cache:p(I.message),strategy:r.A.variadic}),getRelativeTimeFormat:(0,r.H)(function(){for(var B=[],C=0;C<arguments.length;C++)B[C]=arguments[C];return new(b.bind.apply(b,(0,o.ev)([void 0],B,!1)))},{cache:p(I.relativeTime),strategy:r.A.variadic}),getPluralRules:w,getListFormat:(0,r.H)(function(){for(var B=[],C=0;C<arguments.length;C++)B[C]=arguments[C];return new(E.bind.apply(E,(0,o.ev)([void 0],B,!1)))},{cache:p(I.list),strategy:r.A.variadic}),getDisplayNames:(0,r.H)(function(){for(var B=[],C=0;C<arguments.length;C++)B[C]=arguments[C];return new(R.bind.apply(R,(0,o.ev)([void 0],B,!1)))},{cache:p(I.displayNames),strategy:r.A.variadic})}}function g(I,b,E,R){var A=I&&I[b],N;if(A&&(N=A[E]),N)return N;R(new s.wI("No ".concat(b," format named: ").concat(E)))}},2788:function(c,l,e){"use strict";e.d(l,{Z:function(){return te}});var o=e(97685),a=e(67294),r=e(73935),s=e(98924),u=e(80334),v=e(42550),d=a.createContext(null),h=d,m=e(74902),p=e(8410),y=[];function g(ee,_){var de=a.useState(function(){if(!(0,s.Z)())return null;var le=document.createElement("div");return le}),be=(0,o.Z)(de,1),Te=be[0],ie=a.useRef(!1),Q=a.useContext(h),Y=a.useState(y),k=(0,o.Z)(Y,2),K=k[0],re=k[1],T=Q||(ie.current?void 0:function(le){re(function(J){var P=[le].concat((0,m.Z)(J));return P})});function D(){Te.parentElement||document.body.appendChild(Te),ie.current=!0}function V(){var le;(le=Te.parentElement)===null||le===void 0||le.removeChild(Te),ie.current=!1}return(0,p.Z)(function(){return ee?Q?Q(D):D():V(),V},[ee]),(0,p.Z)(function(){K.length&&(K.forEach(function(le){return le()}),re(y))},[K]),[Te,T]}var I=e(44958),b=e(74204);function E(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var R="rc-util-locker-".concat(Date.now()),A=0;function N(ee){var _=!!ee,de=a.useState(function(){return A+=1,"".concat(R,"_").concat(A)}),be=(0,o.Z)(de,1),Te=be[0];(0,p.Z)(function(){if(_){var ie=(0,b.o)(document.body).width,Q=E();(0,I.hq)(`
html body {
  overflow-y: hidden;
  `.concat(Q?"width: calc(100% - ".concat(ie,"px);"):"",`
}`),Te)}else(0,I.jL)(Te);return function(){(0,I.jL)(Te)}},[_,Te])}var w=!1;function B(ee){return typeof ee=="boolean"&&(w=ee),w}var C=function(_){return _===!1?!1:!(0,s.Z)()||!_?null:typeof _=="string"?document.querySelector(_):typeof _=="function"?_():_},L=a.forwardRef(function(ee,_){var de=ee.open,be=ee.autoLock,Te=ee.getContainer,ie=ee.debug,Q=ee.autoDestroy,Y=Q===void 0?!0:Q,k=ee.children,K=a.useState(de),re=(0,o.Z)(K,2),T=re[0],D=re[1],V=T||de;a.useEffect(function(){(Y||de)&&D(de)},[de,Y]);var le=a.useState(function(){return C(Te)}),J=(0,o.Z)(le,2),P=J[0],$=J[1];a.useEffect(function(){var fe=C(Te);$(fe!=null?fe:null)});var H=g(V&&!P,ie),q=(0,o.Z)(H,2),ae=q[0],Ce=q[1],Le=P!=null?P:ae;N(be&&de&&(0,s.Z)()&&(Le===ae||Le===document.body));var Xe=null;if(k&&(0,v.Yr)(k)&&_){var Ze=k;Xe=Ze.ref}var je=(0,v.x1)(Xe,_);if(!V||!(0,s.Z)()||P===void 0)return null;var Ye=Le===!1||B(),oe=k;return _&&(oe=a.cloneElement(k,{ref:je})),a.createElement(h.Provider,{value:Ce},Ye?oe:(0,r.createPortal)(oe,Le))}),Z=L,te=Z},82651:function(c,l,e){"use strict";e.d(l,{f:function(){return h},m:function(){return v}});var o=e(52677),a=e.n(o),r=e(97857),s=e.n(r),u=e(55648),v,d="/";function h(y){var g;return y.type==="hash"?g=(0,u.q_)():y.type==="memory"?g=(0,u.PP)(y):g=(0,u.lX)(),y.basename&&(d=y.basename),v=s()(s()({},g),{},{push:function(b,E){g.push(m(b,g),E)},replace:function(b,E){g.replace(m(b,g),E)},get location(){return g.location},get action(){return g.action}}),g}function m(y,g){if(typeof y=="string")return"".concat(p(d)).concat(y);if(a()(y)==="object"){var I=g.location.pathname;return s()(s()({},y),{},{pathname:y.pathname?"".concat(p(d)).concat(y.pathname):I})}else throw new Error("Unexpected to: ".concat(y))}function p(y){return y.slice(-1)==="/"?y.slice(0,-1):y}},24497:function(c,l,e){"use strict";e.d(l,{gD:function(){return Ge},We:function(){return vt}});var o={};e.r(o),e.d(o,{modifyClientRenderOpts:function(){return h}});var a={};e.r(a),e.d(a,{innerProvider:function(){return g}});var r={};e.r(r),e.d(r,{patchRoutes:function(){return R}});var s={};e.r(s),e.d(s,{i18nProvider:function(){return ne}});var u={};e.r(u),e.d(u,{modifyClientRenderOpts:function(){return ue}});var v=e(97857),d=e.n(v);function h(he){var Be=he.history,Fe=he.hydrate;return d()(d()({},he),{},{hydrate:Fe&&!["/~demos/:id"].includes(Be.location.pathname)})}var m=e(67294),p=e(70405),y={},g=function(Be){return m.createElement(p.B6,{context:y},Be)},I=e(5485),b=e(9996),E=e.n(b),R=function(Be){var Fe=Be.routes;Object.values(Fe).forEach(function(Re){if(I.C3[Re.id]){var Je,Ue;if((Je=Re.meta)!==null&&Je!==void 0&&(Ue=Je.frontmatter)!==null&&Ue!==void 0&&Ue.debug||I.C3[Re.id].frontmatter.debug)delete Fe[Re.id];else{var It;Re.meta=E()(Re.meta,I.C3[Re.id]),Re.meta.tabs=(It=Re.meta.tabs)===null||It===void 0?void 0:It.map(function(xt){var Dt={frontmatter:{title:I.eA[xt].title},toc:[],texts:[]};return d()(d()({},I.eA[xt]),{},{meta:I.C3[xt]||Dt})})}}})},A=e(5574),N=e.n(A),w=e(61748),B=e(82644),C=e(97582),L=e(74806),Z=e(680),te=e(25687),ee=e(16284),_=e(88222),de=e(56096);function be(he,Be){return Object.keys(he).reduce(function(Fe,Re){return Fe[Re]=(0,C.pi)({timeZone:Be},he[Re]),Fe},{})}function Te(he,Be){var Fe=Object.keys((0,C.pi)((0,C.pi)({},he),Be));return Fe.reduce(function(Re,Je){return Re[Je]=(0,C.pi)((0,C.pi)({},he[Je]||{}),Be[Je]||{}),Re},{})}function ie(he,Be){if(!Be)return he;var Fe=ee.C.formats;return(0,C.pi)((0,C.pi)((0,C.pi)({},Fe),he),{date:Te(be(Fe.date,Be),be(he.date||{},Be)),time:Te(be(Fe.time,Be),be(he.time||{},Be))})}var Q=function(he,Be,Fe,Re,Je){var Ue=he.locale,It=he.formats,xt=he.messages,Dt=he.defaultLocale,En=he.defaultFormats,Xt=he.fallbackOnEmptyString,Mn=he.onError,Wn=he.timeZone,Ar=he.defaultRichTextElements;Fe===void 0&&(Fe={id:""});var Kr=Fe.id,jn=Fe.defaultMessage;(0,te.kG)(!!Kr,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var Bn=String(Kr),Gn=xt&&Object.prototype.hasOwnProperty.call(xt,Bn)&&xt[Bn];if(Array.isArray(Gn)&&Gn.length===1&&Gn[0].type===de.wD.literal)return Gn[0].value;if(!Re&&Gn&&typeof Gn=="string"&&!Ar)return Gn.replace(/'\{(.*?)\}'/gi,"{$1}");if(Re=(0,C.pi)((0,C.pi)({},Ar),Re||{}),It=ie(It,Wn),En=ie(En,Wn),!Gn){if(Xt===!1&&Gn==="")return Gn;if((!jn||Ue&&Ue.toLowerCase()!==Dt.toLowerCase())&&Mn(new _.$6(Fe,Ue)),jn)try{var pt=Be.getMessageFormat(jn,Dt,En,Je);return pt.format(Re)}catch(st){return Mn(new _.X9('Error formatting default message for: "'.concat(Bn,'", rendering default message verbatim'),Ue,Fe,st)),typeof jn=="string"?jn:Bn}return Bn}try{var pt=Be.getMessageFormat(Gn,Ue,It,(0,C.pi)({formatters:Be},Je||{}));return pt.format(Re)}catch(st){Mn(new _.X9('Error formatting message: "'.concat(Bn,'", using ').concat(jn?"default message":"id"," as fallback."),Ue,Fe,st))}if(jn)try{var pt=Be.getMessageFormat(jn,Dt,En,Je);return pt.format(Re)}catch(st){Mn(new _.X9('Error formatting the default message for: "'.concat(Bn,'", rendering message verbatim'),Ue,Fe,st))}return typeof Gn=="string"?Gn:typeof jn=="string"?jn:Bn},Y=["style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"];function k(he,Be,Fe){var Re=he.locale,Je=he.formats,Ue=he.onError;Fe===void 0&&(Fe={});var It=Fe.format,xt=It&&(0,B.TB)(Je,"number",It,Ue)||{},Dt=(0,B.L6)(Fe,Y,xt);return Be(Re,Dt)}function K(he,Be,Fe,Re){Re===void 0&&(Re={});try{return k(he,Be,Re).format(Fe)}catch(Je){he.onError(new _.Qe("Error formatting number.",he.locale,Je))}return String(Fe)}function re(he,Be,Fe,Re){Re===void 0&&(Re={});try{return k(he,Be,Re).formatToParts(Fe)}catch(Je){he.onError(new _.Qe("Error formatting number.",he.locale,Je))}return[]}var T=e(11050),D=["numeric","style"];function V(he,Be,Fe){var Re=he.locale,Je=he.formats,Ue=he.onError;Fe===void 0&&(Fe={});var It=Fe.format,xt=!!It&&(0,B.TB)(Je,"relative",It,Ue)||{},Dt=(0,B.L6)(Fe,D,xt);return Be(Re,Dt)}function le(he,Be,Fe,Re,Je){Je===void 0&&(Je={}),Re||(Re="second");var Ue=Intl.RelativeTimeFormat;Ue||he.onError(new T.u_(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,T.jK.MISSING_INTL_API));try{return V(he,Be,Je).format(Fe,Re)}catch(It){he.onError(new _.Qe("Error formatting relative time.",he.locale,It))}return String(Fe)}var J=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function P(he,Be,Fe,Re){var Je=he.locale,Ue=he.formats,It=he.onError,xt=he.timeZone;Re===void 0&&(Re={});var Dt=Re.format,En=(0,C.pi)((0,C.pi)({},xt&&{timeZone:xt}),Dt&&(0,B.TB)(Ue,Be,Dt,It)),Xt=(0,B.L6)(Re,J,En);return Be==="time"&&!Xt.hour&&!Xt.minute&&!Xt.second&&!Xt.timeStyle&&!Xt.dateStyle&&(Xt=(0,C.pi)((0,C.pi)({},Xt),{hour:"numeric",minute:"numeric"})),Fe(Je,Xt)}function $(he,Be){for(var Fe=[],Re=2;Re<arguments.length;Re++)Fe[Re-2]=arguments[Re];var Je=Fe[0],Ue=Fe[1],It=Ue===void 0?{}:Ue,xt=typeof Je=="string"?new Date(Je||0):Je;try{return P(he,"date",Be,It).format(xt)}catch(Dt){he.onError(new _.Qe("Error formatting date.",he.locale,Dt))}return String(xt)}function H(he,Be){for(var Fe=[],Re=2;Re<arguments.length;Re++)Fe[Re-2]=arguments[Re];var Je=Fe[0],Ue=Fe[1],It=Ue===void 0?{}:Ue,xt=typeof Je=="string"?new Date(Je||0):Je;try{return P(he,"time",Be,It).format(xt)}catch(Dt){he.onError(new _.Qe("Error formatting time.",he.locale,Dt))}return String(xt)}function q(he,Be){for(var Fe=[],Re=2;Re<arguments.length;Re++)Fe[Re-2]=arguments[Re];var Je=Fe[0],Ue=Fe[1],It=Fe[2],xt=It===void 0?{}:It,Dt=he.timeZone,En=he.locale,Xt=he.onError,Mn=(0,B.L6)(xt,J,Dt?{timeZone:Dt}:{});try{return Be(En,Mn).formatRange(Je,Ue)}catch(Wn){Xt(new _.Qe("Error formatting date time range.",he.locale,Wn))}return String(Je)}function ae(he,Be){for(var Fe=[],Re=2;Re<arguments.length;Re++)Fe[Re-2]=arguments[Re];var Je=Fe[0],Ue=Fe[1],It=Ue===void 0?{}:Ue,xt=typeof Je=="string"?new Date(Je||0):Je;try{return P(he,"date",Be,It).formatToParts(xt)}catch(Dt){he.onError(new _.Qe("Error formatting date.",he.locale,Dt))}return[]}function Ce(he,Be){for(var Fe=[],Re=2;Re<arguments.length;Re++)Fe[Re-2]=arguments[Re];var Je=Fe[0],Ue=Fe[1],It=Ue===void 0?{}:Ue,xt=typeof Je=="string"?new Date(Je||0):Je;try{return P(he,"time",Be,It).formatToParts(xt)}catch(Dt){he.onError(new _.Qe("Error formatting time.",he.locale,Dt))}return[]}var Le=["type"];function Xe(he,Be,Fe,Re){var Je=he.locale,Ue=he.onError;Re===void 0&&(Re={}),Intl.PluralRules||Ue(new T.u_(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,T.jK.MISSING_INTL_API));var It=(0,B.L6)(Re,Le);try{return Be(Je,It).select(Fe)}catch(xt){Ue(new _.Qe("Error formatting plural.",Je,xt))}return"other"}var Ze=["type","style"],je=Date.now();function Ye(he){return"".concat(je,"_").concat(he,"_").concat(je)}function oe(he,Be,Fe,Re){Re===void 0&&(Re={});var Je=fe(he,Be,Fe,Re).reduce(function(Ue,It){var xt=It.value;return typeof xt!="string"?Ue.push(xt):typeof Ue[Ue.length-1]=="string"?Ue[Ue.length-1]+=xt:Ue.push(xt),Ue},[]);return Je.length===1?Je[0]:Je.length===0?"":Je}function fe(he,Be,Fe,Re){var Je=he.locale,Ue=he.onError;Re===void 0&&(Re={});var It=Intl.ListFormat;It||Ue(new T.u_(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,T.jK.MISSING_INTL_API));var xt=(0,B.L6)(Re,Ze);try{var Dt={},En=Fe.map(function(Xt,Mn){if(typeof Xt=="object"){var Wn=Ye(Mn);return Dt[Wn]=Xt,Wn}return String(Xt)});return Be(Je,xt).formatToParts(En).map(function(Xt){return Xt.type==="literal"?Xt:(0,C.pi)((0,C.pi)({},Xt),{value:Dt[Xt.value]||Xt.value})})}catch(Xt){Ue(new _.Qe("Error formatting list.",Je,Xt))}return Fe}var pe=["style","type","fallback","languageDisplay"];function me(he,Be,Fe,Re){var Je=he.locale,Ue=he.onError,It=Intl.DisplayNames;It||Ue(new T.u_(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,T.jK.MISSING_INTL_API));var xt=(0,B.L6)(Re,pe);try{return Be(Je,xt).of(Fe)}catch(Dt){Ue(new _.Qe("Error formatting display name.",Je,Dt))}}function Pe(he){var Be=he?he[Object.keys(he)[0]]:void 0;return typeof Be=="string"}function se(he){he.onWarn&&he.defaultRichTextElements&&Pe(he.messages||{})&&he.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function ve(he,Be){var Fe=(0,B.ax)(Be),Re=(0,C.pi)((0,C.pi)({},B.Z0),he),Je=Re.locale,Ue=Re.defaultLocale,It=Re.onError;return Je?!Intl.NumberFormat.supportedLocalesOf(Je).length&&It?It(new _.gb('Missing locale data for locale: "'.concat(Je,'" in Intl.NumberFormat. Using default locale: "').concat(Ue,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(Je).length&&It&&It(new _.gb('Missing locale data for locale: "'.concat(Je,'" in Intl.DateTimeFormat. Using default locale: "').concat(Ue,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(It&&It(new _.OV('"locale" was not configured, using "'.concat(Ue,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),Re.locale=Re.defaultLocale||"en"),se(Re),(0,C.pi)((0,C.pi)({},Re),{formatters:Fe,formatNumber:K.bind(null,Re,Fe.getNumberFormat),formatNumberToParts:re.bind(null,Re,Fe.getNumberFormat),formatRelativeTime:le.bind(null,Re,Fe.getRelativeTimeFormat),formatDate:$.bind(null,Re,Fe.getDateTimeFormat),formatDateToParts:ae.bind(null,Re,Fe.getDateTimeFormat),formatTime:H.bind(null,Re,Fe.getDateTimeFormat),formatDateTimeRange:q.bind(null,Re,Fe.getDateTimeFormat),formatTimeToParts:Ce.bind(null,Re,Fe.getDateTimeFormat),formatPlural:Xe.bind(null,Re,Fe.getPluralRules),formatMessage:Q.bind(null,Re,Fe),$t:Q.bind(null,Re,Fe),formatList:oe.bind(null,Re,Fe.getListFormat),formatListToParts:fe.bind(null,Re,Fe.getListFormat),formatDisplayName:me.bind(null,Re,Fe.getDisplayNames)})}var ye=e(61092);function De(he){return{locale:he.locale,timeZone:he.timeZone,fallbackOnEmptyString:he.fallbackOnEmptyString,formats:he.formats,textComponent:he.textComponent,messages:he.messages,defaultLocale:he.defaultLocale,defaultFormats:he.defaultFormats,onError:he.onError,onWarn:he.onWarn,wrapRichTextChunksInFragment:he.wrapRichTextChunksInFragment,defaultRichTextElements:he.defaultRichTextElements}}function ze(he){return he&&Object.keys(he).reduce(function(Be,Fe){var Re=he[Fe];return Be[Fe]=(0,ye.Gt)(Re)?(0,Z.dt)(Re):Re,Be},{})}var bt=function(he,Be,Fe,Re){for(var Je=[],Ue=4;Ue<arguments.length;Ue++)Je[Ue-4]=arguments[Ue];var It=ze(Re),xt=Q.apply(void 0,(0,C.ev)([he,Be,Fe,It],Je,!1));return Array.isArray(xt)?m.Children.toArray(xt):xt},at=function(he,Be){var Fe=he.defaultRichTextElements,Re=(0,C._T)(he,["defaultRichTextElements"]),Je=ze(Fe),Ue=ve((0,C.pi)((0,C.pi)((0,C.pi)({},Z.Z0),Re),{defaultRichTextElements:Je}),Be),It={locale:Ue.locale,timeZone:Ue.timeZone,fallbackOnEmptyString:Ue.fallbackOnEmptyString,formats:Ue.formats,defaultLocale:Ue.defaultLocale,defaultFormats:Ue.defaultFormats,messages:Ue.messages,onError:Ue.onError,defaultRichTextElements:Je};return(0,C.pi)((0,C.pi)({},Ue),{formatMessage:bt.bind(null,It,Ue.formatters),$t:bt.bind(null,It,Ue.formatters)})},lt=function(he){(0,C.ZT)(Be,he);function Be(){var Fe=he!==null&&he.apply(this,arguments)||this;return Fe.cache=(0,B.Sn)(),Fe.state={cache:Fe.cache,intl:at(De(Fe.props),Fe.cache),prevConfig:De(Fe.props)},Fe}return Be.getDerivedStateFromProps=function(Fe,Re){var Je=Re.prevConfig,Ue=Re.cache,It=De(Fe);return(0,Z.wU)(Je,It)?null:{intl:at(It,Ue),prevConfig:It}},Be.prototype.render=function(){return(0,Z.lq)(this.state.intl),m.createElement(L.zt,{value:this.state.intl},this.props.children)},Be.displayName="IntlProvider",Be.defaultProps=Z.Z0,Be}(m.PureComponent),St=null,Bt=e(77742),Ot=e(90482),Wt=e(85893),x=(0,B.Sn)(),U=function(Be){var Fe=(0,m.useCallback)(function(){var xt=Ot.k.slice().reverse().find(function(Xt){return"suffix"in Xt?w.m8.location.pathname.replace(/([^/])\/$/,"$1").endsWith(Xt.suffix):w.m8.location.pathname.replace(/([^/])\/$/,"$1").startsWith("/react-admin-kit"+Xt.base)}),Dt=xt?xt.id:Ot.k[0].id,En=Ot.s[Dt]||{};return En["$internal.edit.link"]="https://github.com/jaykou25/react-admin-kit/edit/master/{filename}",at({locale:Dt,messages:En},x)},[]),Re=(0,m.useState)(function(){return Fe()}),Je=N()(Re,2),Ue=Je[0],It=Je[1];return(0,Bt.LI)(function(){return w.m8.listen(function(){It(Fe())})},[]),(0,Wt.jsx)(L.zt,{value:Ue,children:Be.children},Ue.locale)};function ne(he){return m.createElement(U,null,he)}function ue(he){var Be=he.history,Fe=he.hydrate;return d()(d()({},he),{},{hydrate:Fe&&!Be.location.pathname.startsWith("/~demos")})}var Ie=e(54220);function Oe(he){return he.default?typeof he.default=="function"?he.default():he.default:he}function Se(){return[{apply:o,path:void 0},{apply:a,path:void 0},{apply:r,path:void 0},{apply:s,path:void 0},{apply:u,path:void 0}]}function $e(){return["patchRoutes","patchClientRoutes","modifyContextOpts","modifyClientRenderOpts","rootContainer","innerProvider","i18nProvider","accessProvider","dataflowProvider","outerProvider","render","onRouteChange","modifyCodeSandboxData","modifyStackBlitzData"]}var Ve=null;function Ge(){return Ve=Ie.Q$.create({plugins:Se(),validKeys:$e()}),Ve}function vt(){return Ve}},61748:function(c,l,e){"use strict";e.d(l,{Ac:function(){return o.Ac},Dl:function(){return te},dY:function(){return je},_H:function(){return m},ql:function(){return o.ql},rU:function(){return o.rU},OL:function(){return o.OL},p6:function(){return o.p6},m8:function(){return o.m8},fp:function(){return o.fp},il:function(){return ze},Sc:function(){return ha},Ov:function(){return o.Ov},yh:function(){return la},YB:function(){return s.Z},bU:function(){return Ua.b},TH:function(){return o.TH},OK:function(){return Ho},pC:function(){return o.pC},UO:function(){return o.UO},OI:function(){return Li},Qt:function(){return o.Qt},eL:function(){return Vo},lr:function(){return o.lr},tx:function(){return za},WF:function(){return y.W},OO:function(){return Iu},zh:function(){return H}});var o=e(54220),a=e(97582),r=e(67294),s=e(86896),u=e(680);function v(M,z){var j=M.values,ce=(0,a._T)(M,["values"]),He=z.values,tt=(0,a._T)(z,["values"]);return(0,u.wU)(He,j)&&(0,u.wU)(ce,tt)}function d(M){var z=(0,s.Z)(),j=z.formatMessage,ce=z.textComponent,He=ce===void 0?r.Fragment:ce,tt=M.id,_e=M.description,nt=M.defaultMessage,it=M.values,ut=M.children,Ft=M.tagName,hn=Ft===void 0?He:Ft,sn=M.ignoreTag,Jt={id:tt,description:_e,defaultMessage:nt},cn=j(Jt,it,{ignoreTag:sn});return typeof ut=="function"?ut(Array.isArray(cn)?cn:[cn]):hn?r.createElement(hn,null,r.Children.toArray(cn)):r.createElement(r.Fragment,null,cn)}d.displayName="FormattedMessage";var h=r.memo(d,v);h.displayName="MemoizedFormattedMessage";var m=h,p=e(35095),y=e(64236),g=e(68498),I=e(19532),b=e(76014);const E=(0,r.createContext)(null),R={didCatch:!1,error:null};class A extends r.Component{constructor(z){super(z),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=R}static getDerivedStateFromError(z){return{didCatch:!0,error:z}}resetErrorBoundary(){const{error:z}=this.state;if(z!==null){for(var j,ce,He=arguments.length,tt=new Array(He),_e=0;_e<He;_e++)tt[_e]=arguments[_e];(j=(ce=this.props).onReset)===null||j===void 0||j.call(ce,{args:tt,reason:"imperative-api"}),this.setState(R)}}componentDidCatch(z,j){var ce,He;(ce=(He=this.props).onError)===null||ce===void 0||ce.call(He,z,j)}componentDidUpdate(z,j){const{didCatch:ce}=this.state,{resetKeys:He}=this.props;if(ce&&j.error!==null&&N(z.resetKeys,He)){var tt,_e;(tt=(_e=this.props).onReset)===null||tt===void 0||tt.call(_e,{next:He,prev:z.resetKeys,reason:"keys"}),this.setState(R)}}render(){const{children:z,fallbackRender:j,FallbackComponent:ce,fallback:He}=this.props,{didCatch:tt,error:_e}=this.state;let nt=z;if(tt){const it={error:_e,resetErrorBoundary:this.resetErrorBoundary};if((0,r.isValidElement)(He))nt=He;else if(typeof j=="function")nt=j(it);else if(ce)nt=(0,r.createElement)(ce,it);else throw _e}return(0,r.createElement)(E.Provider,{value:{didCatch:tt,error:_e,resetErrorBoundary:this.resetErrorBoundary}},nt)}}function N(){let M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return M.length!==z.length||M.some((j,ce)=>!Object.is(j,z[ce]))}function w(M){if(M==null||typeof M.didCatch!="boolean"||typeof M.resetErrorBoundary!="function")throw new Error("ErrorBoundaryContext not found");return!0}function B(){const M=useContext(E);w(M);const[z,j]=useState({error:null,hasError:!1}),ce=useMemo(()=>({resetBoundary:()=>{M==null||M.resetErrorBoundary(),j({error:null,hasError:!1})},showBoundary:He=>j({error:He,hasError:!0})}),[M==null?void 0:M.resetErrorBoundary]);if(z.hasError)throw z.error;return ce}function C(M,z){const j=forwardRef((He,tt)=>createElement(A,z,createElement(M,El(ks({},He),{ref:tt})))),ce=M.displayName||M.name||"Unknown";return j.displayName="withErrorBoundary(".concat(ce,")"),j}function L(){return L=Object.assign?Object.assign.bind():function(M){for(var z=1;z<arguments.length;z++){var j=arguments[z];for(var ce in j)Object.prototype.hasOwnProperty.call(j,ce)&&(M[ce]=j[ce])}return M},L.apply(this,arguments)}var Z=function(z){return r.createElement(A,{fallbackRender:function(ce){var He=ce.error;return r.createElement(I.Z,{type:"error"},r.createElement("p",null,r.createElement("strong",null,He.message||"This demo has been crashed.")),He.stack&&r.createElement("p",null,r.createElement("details",{open:!0},r.createElement("summary",null,"Error stack"),r.createElement("pre",null,He.stack))))}},z.children)},te=r.memo(function(M){var z=(0,y.W)(),j=z.demos,ce=z.historyType,He=(0,o.Ov)(),tt=He.basename,_e=j[M.demo.id],nt=_e.component,it=_e.asset;if(M.previewerProps.debug)return null;if(M.demo.inline)return r.createElement(Z,null,(0,r.createElement)(nt));var ut=ce==="hash";return r.createElement(b.Z,L({asset:it,demoUrl:M.previewerProps.demoUrl||"".concat(ut?"#":"").concat(tt).concat(g.SP_ROUTE_PREFIX,"demos/").concat(M.demo.id)},M.previewerProps),M.previewerProps.iframe?null:r.createElement(Z,null,(0,r.createElement)(nt)))},function(M,z){return JSON.stringify(M).length===JSON.stringify(z).length});function ee(){return ee=Object.assign?Object.assign.bind():function(M){for(var z=1;z<arguments.length;z++){var j=arguments[z];for(var ce in j)Object.prototype.hasOwnProperty.call(j,ce)&&(M[ce]=j[ce])}return M},ee.apply(this,arguments)}function _(M,z){return Q(M)||ie(M,z)||be(M,z)||de()}function de(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function be(M,z){if(M){if(typeof M=="string")return Te(M,z);var j=Object.prototype.toString.call(M).slice(8,-1);if(j==="Object"&&M.constructor&&(j=M.constructor.name),j==="Map"||j==="Set")return Array.from(M);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return Te(M,z)}}function Te(M,z){(z==null||z>M.length)&&(z=M.length);for(var j=0,ce=new Array(z);j<z;j++)ce[j]=M[j];return ce}function ie(M,z){var j=M==null?null:typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(j!=null){var ce,He,tt,_e,nt=[],it=!0,ut=!1;try{if(tt=(j=j.call(M)).next,z===0){if(Object(j)!==j)return;it=!1}else for(;!(it=(ce=tt.call(j)).done)&&(nt.push(ce.value),nt.length!==z);it=!0);}catch(Ft){ut=!0,He=Ft}finally{try{if(!it&&j.return!=null&&(_e=j.return(),Object(_e)!==_e))return}finally{if(ut)throw He}}return nt}}function Q(M){if(Array.isArray(M))return M}var Y=function(z){var j=useRouteMeta(),ce=j.frontmatter,He=useCallback(function(ut,Ft){var hn,sn=[],Jt=Ft.filter(function(Qn){return!Qn.previewerProps.debug});if((hn=ut.demo)!==null&&hn!==void 0&&hn.cols&&ut.demo.cols>1&&(typeof window=="undefined"||window.innerWidth>1024)){for(var cn=0;cn<Jt.length;cn+=ut.demo.cols)Jt.slice(cn,cn+ut.demo.cols).forEach(function(Qn,$n){var lr;(lr=sn[$n])!==null&&lr!==void 0||(sn[$n]=[]),sn[$n].push(Qn)});return sn}else sn.push(Jt);return sn},[]),tt=useState(function(){return He(ce,z.items)}),_e=_(tt,2),nt=_e[0],it=_e[1];return useEffect(function(){var ut=function(){return it(He(ce,z.items))};return window.addEventListener("resize",ut),ut(),function(){return window.removeEventListener("resize",ut)}},[z.items,ce.demo]),React.createElement("div",{style:{display:"flex",margin:-8},"data-dumi-demo-grid":!0},nt.map(function(ut,Ft){return React.createElement("section",{style:{flex:1,padding:8,width:0},key:String(Ft)},ut.map(function(hn){return React.createElement(DumiDemo,ee({key:hn.demo.id},hn))}))}))},k=function(z){var j=z.tabs,ce=z.tabKey,He=z.onChange,tt=(0,s.Z)();return j!=null&&j.length?r.createElement("ul",{className:"dumi-default-content-tabs"},r.createElement("li",{onClick:function(){return He()},"data-active":!ce||void 0},r.createElement("button",{type:"button"},tt.formatMessage({id:"content.tabs.default"}))),j.map(function(_e){return r.createElement("li",{key:_e.key,onClick:function(){return He(_e)},"data-active":ce===_e.key||void 0},r.createElement("button",{type:"button"},_e.titleIntlId?tt.formatMessage({id:_e.titleIntlId}):_e.meta.frontmatter.title))})):null},K=k;function re(M,z){return J(M)||le(M,z)||D(M,z)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(M,z){if(M){if(typeof M=="string")return V(M,z);var j=Object.prototype.toString.call(M).slice(8,-1);if(j==="Object"&&M.constructor&&(j=M.constructor.name),j==="Map"||j==="Set")return Array.from(M);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return V(M,z)}}function V(M,z){(z==null||z>M.length)&&(z=M.length);for(var j=0,ce=new Array(z);j<z;j++)ce[j]=M[j];return ce}function le(M,z){var j=M==null?null:typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(j!=null){var ce,He,tt,_e,nt=[],it=!0,ut=!1;try{if(tt=(j=j.call(M)).next,z===0){if(Object(j)!==j)return;it=!1}else for(;!(it=(ce=tt.call(j)).done)&&(nt.push(ce.value),nt.length!==z);it=!0);}catch(Ft){ut=!0,He=Ft}finally{try{if(!it&&j.return!=null&&(_e=j.return(),Object(_e)!==_e))return}finally{if(ut)throw He}}return nt}}function J(M){if(Array.isArray(M))return M}var P="tab",$=function(){var z=(0,o.TH)(),j=z.pathname,ce=(0,o.lr)(),He=re(ce,1),tt=He[0],_e=(0,r.useCallback)(function(nt){nt?tt.set(P,nt):tt.delete(P),o.m8.push({pathname:j,search:"?".concat(tt.toString())})},[tt]);return[tt.get(P),_e]},H=function(){var z,j=Vo(),ce=j.tabs,He=$(),tt=re(He,1),_e=tt[0];return ce==null||(z=ce.find(function(nt){var it=nt.key;return _e===it}))===null||z===void 0?void 0:z.meta};function q(M,z){return Ze(M)||Xe(M,z)||Ce(M,z)||ae()}function ae(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ce(M,z){if(M){if(typeof M=="string")return Le(M,z);var j=Object.prototype.toString.call(M).slice(8,-1);if(j==="Object"&&M.constructor&&(j=M.constructor.name),j==="Map"||j==="Set")return Array.from(M);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return Le(M,z)}}function Le(M,z){(z==null||z>M.length)&&(z=M.length);for(var j=0,ce=new Array(z);j<z;j++)ce[j]=M[j];return ce}function Xe(M,z){var j=M==null?null:typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(j!=null){var ce,He,tt,_e,nt=[],it=!0,ut=!1;try{if(tt=(j=j.call(M)).next,z===0){if(Object(j)!==j)return;it=!1}else for(;!(it=(ce=tt.call(j)).done)&&(nt.push(ce.value),nt.length!==z);it=!0);}catch(Ft){ut=!0,He=Ft}finally{try{if(!it&&j.return!=null&&(_e=j.return(),Object(_e)!==_e))return}finally{if(ut)throw He}}return nt}}function Ze(M){if(Array.isArray(M))return M}var je=function(z){var j=Vo(),ce=j.tabs,He=$(),tt=q(He,2),_e=tt[0],nt=tt[1],it=(0,r.useState)(function(){return ce==null?void 0:ce.find(function(sn){var Jt=sn.key;return Jt===_e})}),ut=q(it,2),Ft=ut[0],hn=ut[1];return r.createElement(r.Fragment,null,r.createElement(K,{tabs:ce,tabKey:_e,onChange:function(Jt){hn(Jt),nt(Jt==null?void 0:Jt.key)}}),Ft?r.createElement(Ft.components.default):z.children)},Ye=e(12662),oe=e(77742);function fe(M,z){return ve(M)||se(M,z)||me(M,z)||pe()}function pe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function me(M,z){if(M){if(typeof M=="string")return Pe(M,z);var j=Object.prototype.toString.call(M).slice(8,-1);if(j==="Object"&&M.constructor&&(j=M.constructor.name),j==="Map"||j==="Set")return Array.from(M);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return Pe(M,z)}}function Pe(M,z){(z==null||z>M.length)&&(z=M.length);for(var j=0,ce=new Array(z);j<z;j++)ce[j]=M[j];return ce}function se(M,z){var j=M==null?null:typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(j!=null){var ce,He,tt,_e,nt=[],it=!0,ut=!1;try{if(tt=(j=j.call(M)).next,z===0){if(Object(j)!==j)return;it=!1}else for(;!(it=(ce=tt.call(j)).done)&&(nt.push(ce.value),nt.length!==z);it=!0);}catch(Ft){ut=!0,He=Ft}finally{try{if(!it&&j.return!=null&&(_e=j.return(),Object(_e)!==_e))return}finally{if(ut)throw He}}return nt}}function ve(M){if(Array.isArray(M))return M}var ye="https://codesandbox.io/api/v1/sandboxes/define";function De(M){var z,j,ce,He,tt,_e=!!(!((z=M.asset.dependencies)===null||z===void 0)&&z["index.tsx"]),nt=_e?".tsx":".jsx",it={},ut={},Ft="index".concat(nt);Object.entries(M.asset.dependencies).forEach(function(sn){var Jt=fe(sn,2),cn=Jt[0],Qn=Jt[1],$n=Qn.type,lr=Qn.value;$n==="NPM"?ut[cn]=lr:it[cn===Ft?"App".concat(nt):cn]={content:lr,isBinary:!1}}),(ce=ut[j="react"])!==null&&ce!==void 0||(ut[j]="latest"),(tt=ut[He="react-dom"])!==null&&tt!==void 0||(ut[He]=ut.react),it["sandbox.config.json"]={content:JSON.stringify({template:"create-react-app"},null,2),isBinary:!1},it["package.json"]={content:JSON.stringify({name:M.title,description:M.description||"An auto-generated demo by dumi",main:Ft,dependencies:ut,devDependencies:_e?{typescript:"^4"}:{}},null,2),isBinary:!1},it["index.html"]={content:'<div style="margin: 16px;" id="root"></div>',isBinary:!1},it[Ft]={content:(0,oe.AM)(ut.react),isBinary:!1};var hn=oe.EV.applyPlugins({type:o.Ac.modify,key:"modifyCodeSandboxData",initialValue:{files:it},args:M});return(0,Ye.Z)(hn)}var ze=function(z,j){var ce,He=document.createElement("form"),tt=document.createElement("input"),_e=De(z);He.method="POST",He.target="_blank",He.style.display="none",He.action=(j==null?void 0:j.api)||ye,He.appendChild(tt),He.setAttribute("data-demo",((ce=z.assets)===null||ce===void 0?void 0:ce.id)||""),tt.name="parameters",tt.value=_e,document.body.appendChild(He),He.submit(),He.remove()};const bt=500,at=20,lt=300,St="https://stackblitz.com",Bt=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],Ot=["project","search","ports","settings"],Wt=["light","dark"],x=["editor","preview"],U={clickToLoad:M=>ue("ctl",M),devToolsHeight:M=>Oe("devtoolsheight",M),forceEmbedLayout:M=>ue("embed",M),hideDevTools:M=>ue("hidedevtools",M),hideExplorer:M=>ue("hideExplorer",M),hideNavigation:M=>ue("hideNavigation",M),openFile:M=>$e("file",M),showSidebar:M=>Ie("showSidebar",M),sidebarView:M=>Se("sidebarView",M,Ot),startScript:M=>$e("startScript",M),terminalHeight:M=>Oe("terminalHeight",M),theme:M=>Se("theme",M,Wt),view:M=>Se("view",M,x),zenMode:M=>ue("zenMode",M)};function ne(M={}){const z=Object.entries(M).map(([j,ce])=>ce!=null&&U.hasOwnProperty(j)?U[j](ce):"").filter(Boolean);return z.length?`?${z.join("&")}`:""}function ue(M,z){return z===!0?`${M}=1`:""}function Ie(M,z){return typeof z=="boolean"?`${M}=${z?"1":"0"}`:""}function Oe(M,z){if(typeof z=="number"&&!Number.isNaN(z)){const j=Math.min(100,Math.max(0,z));return`${M}=${encodeURIComponent(Math.round(j))}`}return""}function Se(M,z="",j=[]){return j.includes(z)?`${M}=${encodeURIComponent(z)}`:""}function $e(M,z){return(Array.isArray(z)?z:[z]).filter(ce=>typeof ce=="string"&&ce.trim()!=="").map(ce=>`${M}=${encodeURIComponent(ce)}`).join("&")}function Ve(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function Ge(M,z){return`${he(z)}${M}${ne(z)}`}function vt(M,z){const j={forceEmbedLayout:!0};return z&&typeof z=="object"&&Object.assign(j,z),`${he(j)}${M}${ne(j)}`}function he(M={}){return(typeof M.origin=="string"?M.origin:St).replace(/\/$/,"")}function Be(M,z,j){if(!z||!M||!M.parentNode)throw new Error("Invalid Element");M.id&&(z.id=M.id),M.className&&(z.className=M.className),Je(z,j),M.replaceWith(z)}function Fe(M){if(typeof M=="string"){const z=document.getElementById(M);if(!z)throw new Error(`Could not find element with id '${M}'`);return z}else if(M instanceof HTMLElement)return M;throw new Error(`Invalid element: ${M}`)}function Re(M){return M&&M.newWindow===!1?"_self":"_blank"}function Je(M,z={}){const j=Object.hasOwnProperty.call(z,"height")?`${z.height}`:`${lt}`,ce=Object.hasOwnProperty.call(z,"width")?`${z.width}`:void 0;M.setAttribute("height",j),ce?M.setAttribute("width",ce):M.setAttribute("style","width:100%;")}class Ue{constructor(z){this.pending={},this.port=z,this.port.onmessage=this.messageListener.bind(this)}request({type:z,payload:j}){return new Promise((ce,He)=>{const tt=Ve();this.pending[tt]={resolve:ce,reject:He},this.port.postMessage({type:z,payload:El(ks({},j),{__reqid:tt})})})}messageListener(z){var nt;if(typeof((nt=z.data.payload)==null?void 0:nt.__reqid)!="string")return;const{type:j,payload:ce}=z.data,{__reqid:He,__success:tt,__error:_e}=ce;this.pending[He]&&(tt?this.pending[He].resolve(this.cleanResult(ce)):this.pending[He].reject(_e?`${j}: ${_e}`:j),delete this.pending[He])}cleanResult(z){const j=ks({},z);return delete j.__reqid,delete j.__success,delete j.__error,Object.keys(j).length?j:null}}class It{constructor(z,j){this.editor={openFile:ce=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:ce}}),setCurrentFile:ce=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:ce}}),setTheme:ce=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:ce}}),setView:ce=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:ce}}),showSidebar:(ce=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:ce}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(ce=>{var He;return(He=ce==null?void 0:ce.url)!=null?He:null}),setUrl:(ce="/")=>{if(typeof ce!="string"||!ce.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${ce}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:ce}})}},this._rdc=new Ue(z),Object.defineProperty(this.preview,"origin",{value:typeof j.previewOrigin=="string"?j.previewOrigin:null,writable:!1})}applyFsDiff(z){const j=ce=>ce!==null&&typeof ce=="object";if(!j(z)||!j(z.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(z.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:z})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const xt=[];class Dt{constructor(z){this.id=Ve(),this.element=z,this.pending=new Promise((j,ce)=>{const He=({data:ut,ports:Ft})=>{(ut==null?void 0:ut.action)==="SDK_INIT_SUCCESS"&&ut.id===this.id&&(this.vm=new It(Ft[0],ut.payload),j(this.vm),_e())},tt=()=>{var ut;(ut=this.element.contentWindow)==null||ut.postMessage({action:"SDK_INIT",id:this.id},"*")};function _e(){window.clearInterval(it),window.removeEventListener("message",He)}window.addEventListener("message",He),tt();let nt=0;const it=window.setInterval(()=>{if(this.vm){_e();return}if(nt>=at){_e(),ce("Timeout: Unable to establish a connection with the StackBlitz VM"),xt.forEach((ut,Ft)=>{ut.id===this.id&&xt.splice(Ft,1)});return}nt++,tt()},bt)}),xt.push(this)}}const En=M=>{var j;const z=M instanceof Element?"element":"id";return(j=xt.find(ce=>ce[z]===M))!=null?j:null};function Xt(M,z){const j=document.createElement("input");return j.type="hidden",j.name=M,j.value=z,j}function Mn(M){return M.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function Wn({template:M,title:z,description:j,dependencies:ce,files:He,settings:tt}){if(!Bt.includes(M)){const ut=Bt.map(Ft=>`'${Ft}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${ut}`)}const _e=[],nt=(ut,Ft,hn="")=>{_e.push(Xt(ut,typeof Ft=="string"?Ft:hn))};nt("project[title]",z),typeof j=="string"&&j.length>0&&nt("project[description]",j),nt("project[template]",M,"javascript"),ce&&(M==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):nt("project[dependencies]",JSON.stringify(ce))),tt&&nt("project[settings]",JSON.stringify(tt)),Object.entries(He).forEach(([ut,Ft])=>{nt(`project[files][${Mn(ut)}]`,Ft)});const it=document.createElement("form");return it.method="POST",it.setAttribute("style","display:none!important;"),it.append(..._e),it}function Ar(M,z){const j=Wn(M);return j.action=vt("/run",z),j.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${j.outerHTML}
  <script>document.getElementById('${j.id}').submit();<\/script>
</body>
</html>`}function Kr(M,z){const j=Wn(M);j.action=Ge("/run",z),j.target=Re(z),document.body.appendChild(j),j.submit(),document.body.removeChild(j)}function jn(M){var j;return M!=null&&M.contentWindow?((j=En(M))!=null?j:new Dt(M)).pending:Promise.reject("Provided element is not an iframe.")}function Bn(M,z){Kr(M,z)}function Gn(M,z){const j=Ge(`/edit/${M}`,z),ce=Re(z);window.open(j,ce)}function pt(M,z){const j=Ge(`/github/${M}`,z),ce=Re(z);window.open(j,ce)}function st(M,z,j){var _e;const ce=Fe(M),He=Ar(z,j),tt=document.createElement("iframe");return Be(ce,tt,j),(_e=tt.contentDocument)==null||_e.write(He),jn(tt)}function mt(M,z,j){const ce=Fe(M),He=document.createElement("iframe");return He.src=vt(`/edit/${z}`,j),Be(ce,He,j),jn(He)}function kt(M,z,j){const ce=Fe(M),He=document.createElement("iframe");return He.src=vt(`/github/${z}`,j),Be(ce,He,j),jn(He)}const qt={connect:jn,embedGithubProject:kt,embedProject:st,embedProjectId:mt,openGithubProject:pt,openProject:Bn,openProjectId:Gn};function zt(M,z){return Nn(M)||qr(M,z)||bn(M,z)||Zn()}function Zn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bn(M,z){if(M){if(typeof M=="string")return qn(M,z);var j=Object.prototype.toString.call(M).slice(8,-1);if(j==="Object"&&M.constructor&&(j=M.constructor.name),j==="Map"||j==="Set")return Array.from(M);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return qn(M,z)}}function qn(M,z){(z==null||z>M.length)&&(z=M.length);for(var j=0,ce=new Array(z);j<z;j++)ce[j]=M[j];return ce}function qr(M,z){var j=M==null?null:typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(j!=null){var ce,He,tt,_e,nt=[],it=!0,ut=!1;try{if(tt=(j=j.call(M)).next,z===0){if(Object(j)!==j)return;it=!1}else for(;!(it=(ce=tt.call(j)).done)&&(nt.push(ce.value),nt.length!==z);it=!0);}catch(Ft){ut=!0,He=Ft}finally{try{if(!it&&j.return!=null&&(_e=j.return(),Object(_e)!==_e))return}finally{if(ut)throw He}}return nt}}function Nn(M){if(Array.isArray(M))return M}var ha=function(z){var j,ce,He,tt,_e,nt=!!(!((j=z.asset.dependencies)===null||j===void 0)&&j["index.tsx"]),it=nt?".tsx":".jsx",ut={},Ft="index".concat(it),hn={"index.html":'<div style="margin: 16px;" id="root"></div>'},sn={title:z.title||"",description:z.description||"An auto-generated demo by dumi",template:"create-react-app",files:{}};Object.entries(z.asset.dependencies).forEach(function(cn){var Qn=zt(cn,2),$n=Qn[0],lr=Qn[1],Dr=lr.type,gr=lr.value;Dr==="NPM"?ut[$n]=gr:hn[$n===Ft?"App".concat(it):$n]=gr}),(He=ut[ce="react"])!==null&&He!==void 0||(ut[ce]="latest"),(_e=ut[tt="react-dom"])!==null&&_e!==void 0||(ut[tt]=ut.react),hn["package.json"]=JSON.stringify({name:z.title,description:z.description||"An auto-generated demo by dumi",dependencies:ut,devDependencies:nt?{typescript:"^4"}:{}},null,2),hn[Ft]=(0,oe.AM)(ut.react),sn.files=hn;var Jt=oe.EV.applyPlugins({type:o.Ac.modify,key:"modifyStackBlitzData",initialValue:sn,args:z});qt.openProject(Jt)},wa=function(){var z=useSiteData(),j=z.components;return{components:j}},Ua=e(88903);function ia(M){"@babel/helpers - typeof";return ia=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},ia(M)}function Hn(M,z){var j=Object.keys(M);if(Object.getOwnPropertySymbols){var ce=Object.getOwnPropertySymbols(M);z&&(ce=ce.filter(function(He){return Object.getOwnPropertyDescriptor(M,He).enumerable})),j.push.apply(j,ce)}return j}function Oo(M){for(var z=1;z<arguments.length;z++){var j=arguments[z]!=null?arguments[z]:{};z%2?Hn(Object(j),!0).forEach(function(ce){Qa(M,ce,j[ce])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(j)):Hn(Object(j)).forEach(function(ce){Object.defineProperty(M,ce,Object.getOwnPropertyDescriptor(j,ce))})}return M}function Qa(M,z,j){return z=ua(z),z in M?Object.defineProperty(M,z,{value:j,enumerable:!0,configurable:!0,writable:!0}):M[z]=j,M}function ua(M){var z=Zo(M,"string");return ia(z)==="symbol"?z:String(z)}function Zo(M,z){if(ia(M)!=="object"||M===null)return M;var j=M[Symbol.toPrimitive];if(j!==void 0){var ce=j.call(M,z||"default");if(ia(ce)!=="object")return ce;throw new TypeError("@@toPrimitive must return a primitive value.")}return(z==="string"?String:Number)(M)}function Vr(M,z){var j=typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(!j){if(Array.isArray(M)||(j=Ea(M))||z&&M&&typeof M.length=="number"){j&&(M=j);var ce=0,He=function(){};return{s:He,n:function(){return ce>=M.length?{done:!0}:{done:!1,value:M[ce++]}},e:function(ut){throw ut},f:He}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var tt=!0,_e=!1,nt;return{s:function(){j=j.call(M)},n:function(){var ut=j.next();return tt=ut.done,ut},e:function(ut){_e=!0,nt=ut},f:function(){try{!tt&&j.return!=null&&j.return()}finally{if(_e)throw nt}}}}function fn(M){return ea(M)||fr(M)||Ea(M)||wn()}function wn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fr(M){if(typeof Symbol!="undefined"&&M[Symbol.iterator]!=null||M["@@iterator"]!=null)return Array.from(M)}function ea(M){if(Array.isArray(M))return fi(M)}function sa(M,z){return Ro(M)||xo(M,z)||Ea(M,z)||$o()}function $o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ea(M,z){if(M){if(typeof M=="string")return fi(M,z);var j=Object.prototype.toString.call(M).slice(8,-1);if(j==="Object"&&M.constructor&&(j=M.constructor.name),j==="Map"||j==="Set")return Array.from(M);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return fi(M,z)}}function fi(M,z){(z==null||z>M.length)&&(z=M.length);for(var j=0,ce=new Array(z);j<z;j++)ce[j]=M[j];return ce}function xo(M,z){var j=M==null?null:typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(j!=null){var ce,He,tt,_e,nt=[],it=!0,ut=!1;try{if(tt=(j=j.call(M)).next,z===0){if(Object(j)!==j)return;it=!1}else for(;!(it=(ce=tt.call(j)).done)&&(nt.push(ce.value),nt.length!==z);it=!0);}catch(Ft){ut=!0,He=Ft}finally{try{if(!it&&j.return!=null&&(_e=j.return(),Object(_e)!==_e))return}finally{if(ut)throw He}}return nt}}function Ro(M){if(Array.isArray(M))return M}var Yr="$default-group-title",Tr=function(z,j){return"base"in j?z.replace(j.base.slice(1),"").replace(/^\//,""):z};function yr(M,z){var j,ce=z.meta,He=z.is2LevelNav,tt=((j=ce.frontmatter.filename)===null||j===void 0?void 0:j.endsWith("index.md"))&&!ce._atom_route&&He,_e=M.split("/").filter(Boolean),nt=Math.min(Math.max(tt?_e.length:_e.length-1,1),He?2:1/0);return _e.slice(0,nt).join("/")}var la=function(){var z=(0,Ua.b)(),j=(0,oe.RX)(),ce=(0,y.W)(),He=ce.themeConfig,tt=ce._2_level_nav_available,_e=(0,oe.M7)(),nt=(0,r.useState)(function(){var Ft=Object.values(j).reduce(function(sn,Jt){var cn=Tr(Jt.path,z);if(cn&&Jt.meta){var Qn,$n,lr,Dr="/".concat(Jt.path.replace(cn,function(rn){return yr(rn,{is2LevelNav:tt,meta:Jt.meta})})),gr=(0,oe.qu)({order:0},"group",Jt.meta.frontmatter),Lo=gr.title,La=gr.order,$a=Lo||Yr;(Qn=sn[Dr])!==null&&Qn!==void 0||(sn[Dr]={}),sn[Dr][$a]={title:Lo,order:(($n=sn[Dr][$a])===null||$n===void 0?void 0:$n.order)||La,children:[].concat(fn(((lr=sn[Dr][$a])===null||lr===void 0?void 0:lr.children)||[]),[{title:Jt.meta.frontmatter.title,link:"/".concat(Jt.path),order:Jt.meta.frontmatter.order||0,frontmatter:Jt.meta.frontmatter}])}}return sn},{}),hn=Object.entries(Ft).reduce(function(sn,Jt){var cn=sa(Jt,2),Qn=cn[0],$n=cn[1];return sn[Qn]=Object.values($n).sort(_e),sn[Qn].forEach(function(lr){return lr.children.sort(_e)}),sn},{});return Object.assign(hn,He.sidebar)}),it=sa(nt,1),ut=it[0];return ut};function oo(M){var z={order:0,title:""},j=Vr(M),ce;try{for(j.s();!(ce=j.n()).done;){var He=ce.value,tt=Vr(He.children),_e;try{for(tt.s();!(_e=tt.n()).done;){var nt=_e.value;"frontmatter"in nt&&pickRouteSortMeta(z,"nav",nt.frontmatter)}}catch(it){tt.e(it)}finally{tt.f()}}}catch(it){j.e(it)}finally{j.f()}return z}var rr=function(){var z=la(),j=useRouteDataComparer(),ce=useState(function(){var _e=Object.entries(z).sort(function(nt,it){return it[0].split("/").length-nt[0].split("/").length}).reduce(function(nt,it){var ut=sa(it,2),Ft=ut[0],hn=ut[1],sn=Ft.replace(/\/[^/]+$/,"");if(sn){var Jt;if((Jt=nt[sn])!==null&&Jt!==void 0||(nt[sn]=Oo({path:sn,children:z[sn]||[]},oo(z[sn]||[]))),nt[Ft])nt[Ft].children.sort(j),nt[sn].children.push(nt[Ft]),delete nt[Ft];else{var cn;(cn=nt[sn].children).push.apply(cn,fn(hn))}}else hn.sort(j),nt[Ft]=Oo({path:Ft,children:hn},oo(hn));return nt},{});return Object.values(_e)}),He=sa(ce,1),tt=He[0];return tt},za=function(){var z=(0,Ua.b)(),j=la(),ce=(0,y.W)(),He=ce._2_level_nav_available,tt=(0,o.TH)(),_e=tt.pathname,nt=Vo(),it=Tr(_e.slice(1),z),ut=it?_e.replace(it,function(Ft){return yr(Ft,{is2LevelNav:He,meta:nt})}):_e;return ut?j[ut]:[]};function ni(M){"@babel/helpers - typeof";return ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},ni(M)}function Ao(M){return vi(M)||Ji(M)||io(M)||hu()}function hu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ji(M){if(typeof Symbol!="undefined"&&M[Symbol.iterator]!=null||M["@@iterator"]!=null)return Array.from(M)}function vi(M){if(Array.isArray(M))return uo(M)}function So(M,z){return pi(M)||so(M,z)||io(M,z)||Mo()}function Mo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function io(M,z){if(M){if(typeof M=="string")return uo(M,z);var j=Object.prototype.toString.call(M).slice(8,-1);if(j==="Object"&&M.constructor&&(j=M.constructor.name),j==="Map"||j==="Set")return Array.from(M);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return uo(M,z)}}function uo(M,z){(z==null||z>M.length)&&(z=M.length);for(var j=0,ce=new Array(z);j<z;j++)ce[j]=M[j];return ce}function so(M,z){var j=M==null?null:typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(j!=null){var ce,He,tt,_e,nt=[],it=!0,ut=!1;try{if(tt=(j=j.call(M)).next,z===0){if(Object(j)!==j)return;it=!1}else for(;!(it=(ce=tt.call(j)).done)&&(nt.push(ce.value),nt.length!==z);it=!0);}catch(Ft){ut=!0,He=Ft}finally{try{if(!it&&j.return!=null&&(_e=j.return(),Object(_e)!==_e))return}finally{if(ut)throw He}}return nt}}function pi(M){if(Array.isArray(M))return M}function wo(M,z){var j=Object.keys(M);if(Object.getOwnPropertySymbols){var ce=Object.getOwnPropertySymbols(M);z&&(ce=ce.filter(function(He){return Object.getOwnPropertyDescriptor(M,He).enumerable})),j.push.apply(j,ce)}return j}function lo(M){for(var z=1;z<arguments.length;z++){var j=arguments[z]!=null?arguments[z]:{};z%2?wo(Object(j),!0).forEach(function(ce){_i(M,ce,j[ce])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(j)):wo(Object(j)).forEach(function(ce){Object.defineProperty(M,ce,Object.getOwnPropertyDescriptor(j,ce))})}return M}function _i(M,z,j){return z=mi(z),z in M?Object.defineProperty(M,z,{value:j,enumerable:!0,configurable:!0,writable:!0}):M[z]=j,M}function mi(M){var z=No(M,"string");return ni(z)==="symbol"?z:String(z)}function No(M,z){if(ni(M)!=="object"||M===null)return M;var j=M[Symbol.toPrimitive];if(j!==void 0){var ce=j.call(M,z||"default");if(ni(ce)!=="object")return ce;throw new TypeError("@@toPrimitive must return a primitive value.")}return(z==="string"?String:Number)(M)}function Ai(M,z,j,ce){return lo({title:M.title||z[0].title||z[0].children[0].title,order:M.order||0,activePath:j},ce?{link:ce}:{})}var Ho=function(){var z=(0,Ua.b)(),j=(0,oe.RX)(),ce=(0,y.W)(),He=ce.themeConfig,tt=ce._2_level_nav_available,_e=la(),nt=(0,oe.M7)(),it=(0,r.useState)(function(){var hn=[],sn;if(He.nav&&("mode"in He.nav&&typeof He.nav.mode=="string"?(sn=He.nav.mode,hn=(0,oe.m7)(He.nav.value,z)):"mode"in He.nav||(hn=(0,oe.m7)(He.nav,z)),!sn||sn==="override"))return hn;var Jt=Object.values(Object.entries(_e).sort(function(cn,Qn){var $n=So(cn,1),lr=$n[0],Dr=So(Qn,1),gr=Dr[0];return lr.split("/").length-gr.split("/").length}).reduce(function(cn,Qn){var $n=So(Qn,2),lr=$n[0],Dr=$n[1],gr="/".concat(Tr(lr.replace(/^\//,""),z)).match(/^(\/[^/]+)([^]+)?$/),Lo=So(gr,3),La=Lo[1],$a=Lo[2],rn=!!$a&&tt,Ta=Object.values(j).reduce(function(co,Do){return Do.path.startsWith(lr.slice(1))&&((0,oe.qu)(co[0],"nav",Do.meta.frontmatter),rn&&(0,oe.qu)(co[1],"nav.second",Do.meta.frontmatter)),co},[{},{}]),Da=So(Ta,2),Pa=Da[0],ui=Da[1];if(rn){var $i,xi,Si;($i=Pa.title)!==null&&$i!==void 0||(Pa.title=La.slice(1).replace(/^[a-z]/,function(co){return co.toUpperCase()}));var Ei=(xi=cn[La])!==null&&xi!==void 0?xi:cn[La]=Ai(Pa,Dr,La);(Si=Ei.children)!==null&&Si!==void 0||(Ei.children=[]),cn[La].children.push(Ai(ui,Dr,lr,Dr[0].children[0].link))}else cn[lr]=Ai(Pa,Dr,lr,Dr[0].children[0].link);return cn},{}));return Jt.forEach(function(cn,Qn){var $n;!cn.link&&(($n=cn.children)===null||$n===void 0?void 0:$n.length)===1?Jt[Qn]=cn.children[0]:cn.children&&cn.children.sort(nt)}),Jt.sort(nt),sn==="prepend"?Jt.unshift.apply(Jt,Ao(hn)):sn==="append"&&Jt.push.apply(Jt,Ao(hn)),Jt}),ut=So(it,1),Ft=ut[0];return Ft};function Za(M){"@babel/helpers - typeof";return Za=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},Za(M)}function Mi(M,z){return yi(M)||Ko(M,z)||hi(M,z)||wu()}function wu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hi(M,z){if(M){if(typeof M=="string")return ri(M,z);var j=Object.prototype.toString.call(M).slice(8,-1);if(j==="Object"&&M.constructor&&(j=M.constructor.name),j==="Map"||j==="Set")return Array.from(M);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return ri(M,z)}}function ri(M,z){(z==null||z>M.length)&&(z=M.length);for(var j=0,ce=new Array(z);j<z;j++)ce[j]=M[j];return ce}function Ko(M,z){var j=M==null?null:typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(j!=null){var ce,He,tt,_e,nt=[],it=!0,ut=!1;try{if(tt=(j=j.call(M)).next,z===0){if(Object(j)!==j)return;it=!1}else for(;!(it=(ce=tt.call(j)).done)&&(nt.push(ce.value),nt.length!==z);it=!0);}catch(Ft){ut=!0,He=Ft}finally{try{if(!it&&j.return!=null&&(_e=j.return(),Object(_e)!==_e))return}finally{if(ut)throw He}}return nt}}function yi(M){if(Array.isArray(M))return M}function Nu(M,z){if(!(M instanceof z))throw new TypeError("Cannot call a class as a function")}function yu(M,z){for(var j=0;j<z.length;j++){var ce=z[j];ce.enumerable=ce.enumerable||!1,ce.configurable=!0,"value"in ce&&(ce.writable=!0),Object.defineProperty(M,wi(ce.key),ce)}}function gi(M,z,j){return z&&yu(M.prototype,z),j&&yu(M,j),Object.defineProperty(M,"prototype",{writable:!1}),M}function Wo(M,z,j){return z=wi(z),z in M?Object.defineProperty(M,z,{value:j,enumerable:!0,configurable:!0,writable:!0}):M[z]=j,M}function wi(M){var z=Ni(M,"string");return Za(z)==="symbol"?z:String(z)}function Ni(M,z){if(Za(M)!=="object"||M===null)return M;var j=M[Symbol.toPrimitive];if(j!==void 0){var ce=j.call(M,z||"default");if(Za(ce)!=="object")return ce;throw new TypeError("@@toPrimitive must return a primitive value.")}return(z==="string"?String:Number)(M)}var ba,Go=function(){function M(z){var j=this;Nu(this,M),Wo(this,"color",void 0),Wo(this,"prefersColor",void 0),Wo(this,"callbacks",[]),this.prefersColor=navigator.cookieEnabled&&localStorage.getItem(g.PREFERS_COLOR_LS_KEY)||z.default,this.color=document.documentElement.getAttribute(g.PREFERS_COLOR_ATTR),["light","dark"].forEach(function(ce){var He=j.getColorMedia(ce),tt=function(nt){nt.matches&&j.prefersColor==="auto"&&(j.color=ce,document.documentElement.setAttribute(g.PREFERS_COLOR_ATTR,ce),j.applyCallbacks())};He.addEventListener?He.addEventListener("change",tt):He.addListener&&He.addListener(tt)})}return gi(M,[{key:"getColorMedia",value:function(j){return window.matchMedia("(prefers-color-scheme: ".concat(j,")"))}},{key:"isColorMode",value:function(j){return this.getColorMedia(j).matches}},{key:"applyCallbacks",value:function(){var j=this;this.callbacks.forEach(function(ce){return ce({color:j.color,prefersColor:j.prefersColor})})}},{key:"listen",value:function(j){this.callbacks.push(j)}},{key:"unlisten",value:function(j){this.callbacks.splice(this.callbacks.indexOf(j),1)}},{key:"tryPrefersColor",value:function(j){return navigator.cookieEnabled&&localStorage.setItem(g.PREFERS_COLOR_LS_KEY,j),this.prefersColor=j,this.color=j==="auto"?this.isColorMode("dark")?"dark":"light":j,document.documentElement.setAttribute(g.PREFERS_COLOR_ATTR,j),this.applyCallbacks(),j}}]),M}(),Li=function(){var z=(0,y.W)(),j=z.themeConfig,ce=(0,r.useState)(),He=Mi(ce,2),tt=He[0],_e=He[1],nt=(0,r.useState)(),it=Mi(nt,2),ut=it[0],Ft=it[1],hn=(0,r.useCallback)(function(Jt){ba.tryPrefersColor(Jt)},[]),sn=(0,r.useCallback)(function(Jt){_e(Jt.color),Ft(Jt.prefersColor)},[]);return(0,r.useEffect)(function(){var Jt;return(Jt=ba)!==null&&Jt!==void 0||(ba=new Go({default:j.prefersColor.default})),ba.listen(sn),_e(ba.color),Ft(ba.prefersColor),function(){return ba.unlisten(sn)}},[]),[tt,ut,hn]};function qi(M,z){return ai(M)||Na(M,z)||Fi(M,z)||Di()}function Di(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fi(M,z){if(M){if(typeof M=="string")return eu(M,z);var j=Object.prototype.toString.call(M).slice(8,-1);if(j==="Object"&&M.constructor&&(j=M.constructor.name),j==="Map"||j==="Set")return Array.from(M);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return eu(M,z)}}function eu(M,z){(z==null||z>M.length)&&(z=M.length);for(var j=0,ce=new Array(z);j<z;j++)ce[j]=M[j];return ce}function Na(M,z){var j=M==null?null:typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(j!=null){var ce,He,tt,_e,nt=[],it=!0,ut=!1;try{if(tt=(j=j.call(M)).next,z===0){if(Object(j)!==j)return;it=!1}else for(;!(it=(ce=tt.call(j)).done)&&(nt.push(ce.value),nt.length!==z);it=!0);}catch(Ft){ut=!0,He=Ft}finally{try{if(!it&&j.return!=null&&(_e=j.return(),Object(_e)!==_e))return}finally{if(ut)throw He}}return nt}}function ai(M){if(Array.isArray(M))return M}var Vo=function(){var z=(0,o.Qt)(),j=z.route,ce=(0,o.TH)(),He=ce.pathname,tt=(0,o.Ov)(),_e=tt.clientRoutes,nt=(0,r.useCallback)(function(){var sn;if(j.path===He&&!("isLayout"in j))sn=j.meta;else{var Jt,cn,Qn=(Jt=(0,o.fp)(_e,He))===null||Jt===void 0?void 0:Jt.pop();sn=Qn==null||(cn=Qn.route)===null||cn===void 0?void 0:cn.meta}return sn||{frontmatter:{},toc:[],texts:[]}},[_e.length,He]),it=(0,r.useState)(nt),ut=qi(it,2),Ft=ut[0],hn=ut[1];return(0,oe.LI)(function(){hn(nt)},[_e.length,He]),Ft},oi='"use strict";(()=>{var P=Object.create;var I=Object.defineProperty;var z=Object.getOwnPropertyDescriptor;var D=Object.getOwnPropertyNames,R=Object.getOwnPropertySymbols,B=Object.getPrototypeOf,E=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var O=(e,t,i)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,M=(e,t)=>{for(var i in t||(t={}))E.call(t,i)&&O(e,i,t[i]);if(R)for(var i of R(t))L.call(t,i)&&O(e,i,t[i]);return e};var F=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var N=(e,t,i,h)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of D(t))!E.call(e,a)&&a!==i&&I(e,a,{get:()=>t[a],enumerable:!(h=z(t,a))||h.enumerable});return e};var W=(e,t,i)=>(i=e!=null?P(B(e)):{},N(t||!e||!e.__esModule?I(i,"default",{value:e,enumerable:!0}):i,e));var j=F((K,w)=>{w.exports=function(e){var t={};function i(h){if(t[h])return t[h].exports;var a=t[h]={exports:{},id:h,loaded:!1};return e[h].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}return i.m=e,i.c=t,i.p="",i(0)}([function(e,t,i){e.exports=i(1)},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var h=i(2);Object.defineProperty(t,"combineChunks",{enumerable:!0,get:function(){return h.combineChunks}}),Object.defineProperty(t,"fillInChunks",{enumerable:!0,get:function(){return h.fillInChunks}}),Object.defineProperty(t,"findAll",{enumerable:!0,get:function(){return h.findAll}}),Object.defineProperty(t,"findChunks",{enumerable:!0,get:function(){return h.findChunks}})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=t.findAll=function(s){var n=s.autoEscape,g=s.caseSensitive,f=g===void 0?!1:g,p=s.findChunks,u=p===void 0?a:p,c=s.sanitize,v=s.searchWords,T=s.textToHighlight;return l({chunksToHighlight:h({chunks:u({autoEscape:n,caseSensitive:f,sanitize:c,searchWords:v,textToHighlight:T})}),totalLength:T?T.length:0})},h=t.combineChunks=function(s){var n=s.chunks;return n=n.sort(function(g,f){return g.start-f.start}).reduce(function(g,f){if(g.length===0)return[f];var p=g.pop();if(f.start<=p.end){var u=Math.max(p.end,f.end);g.push({highlight:!1,start:p.start,end:u})}else g.push(p,f);return g},[]),n},a=function(s){var n=s.autoEscape,g=s.caseSensitive,f=s.sanitize,p=f===void 0?d:f,u=s.searchWords,c=s.textToHighlight;return c=p(c),u.filter(function(v){return v}).reduce(function(v,T){T=p(T),n&&(T=r(T));for(var m=new RegExp(T,g?"g":"gi"),x=void 0;x=m.exec(c);){var S=x.index,$=m.lastIndex;$>S&&v.push({highlight:!1,start:S,end:$}),x.index===m.lastIndex&&m.lastIndex++}return v},[])};t.findChunks=a;var l=t.fillInChunks=function(s){var n=s.chunksToHighlight,g=s.totalLength,f=[],p=function(v,T,m){T-v>0&&f.push({start:v,end:T,highlight:m})};if(n.length===0)p(0,g,!1);else{var u=0;n.forEach(function(c){p(u,c.start,!1),p(c.start,c.end,!0),u=c.end}),p(u,g,!1)}return f};function d(o){return o}function r(o){return o.replace(/[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]/g,"\\\\$&")}}])});var C=W(j());var H="tab";function k(e,t,i,h,a){let l=a!==void 0;return h.reduce((r,o)=>(o.tocIndex===a&&(r[o.paraId]=(r[o.paraId]||"").concat(o.value)),r),[]).filter(Boolean).length||l?{rawTitle:e,title:t,link:i,paragraphs:h.reduce((r,o)=>{var s,n;return o.tocIndex===a&&((n=r[s=o.paraId])!=null||(r[s]=""),r[o.paraId]+=o.value),r},[]).filter(Boolean)}:null}function y(e){return[e.title,e.subtitle].filter(Boolean).join(" ")}function _(e,t,i){let h=[],a=Object.values(t).reduce((l,d)=>{var r,o;return d.asset&&((o=l[r=d.routeId])!=null||(l[r]=[]),l[d.routeId].push(d)),l},{});return Object.values(e).forEach(l=>{var d;if("meta"in l&&!("isLayout"in l)){let r=l.meta,o=l.path.replace(/^([^/])/,"/$1")||"/",s=i.find(u=>o===u.link||o.startsWith(`${u.activePath}/`)),n=(a[l.id]||[]).map(u=>{var c;return(c=u.asset)==null?void 0:c.id}),g=k("",y(r.frontmatter),o,r.texts),f=r.toc.reduce((u,c,v)=>{if(!n.includes(c.id)&&c.depth>=1){let T=y(r.frontmatter);c.depth!==1&&(T=`${T} - ${c.title}`),u.push(k(c.title,T,`${o}#${c.id}`,r.texts,v))}return u},[]),p=(r.tabs||[]).reduce((u,{key:c,meta:v})=>{let T=k("",`${y(r.frontmatter)} - ${v.frontmatter.title}`,`${o}?${H}=${c}`,v.texts);return T&&u.push(T),u.push(...v.toc.map((m,x)=>k(m.title,`${y(r.frontmatter)} - ${v.frontmatter.title} - ${m.title}`,`${o}?${H}=${c}#${m.id}`,v.texts,x))),u},[]);h.push({navTitle:s==null?void 0:s.title,navOrder:s?i.indexOf(s):1/0,title:y(r.frontmatter),link:o,sections:[...g?[g]:[],...f,...p],demos:((d=a[l.id])==null?void 0:d.map(u=>({link:`${o}#${u.asset.id}`,rawTitle:u.asset.title||"",title:u.asset.title||y(r.frontmatter),description:u.asset.description||"",keywords:u.asset.keywords||[]})))||[]})}}),h}function b(e="",t,i=1){let h=(0,C.findAll)({textToHighlight:e,searchWords:t,autoEscape:!0}),a={};return[h.map(({start:l,end:d,highlight:r},o)=>{let s={text:e.slice(l,d)};return o===0&&!r&&h.length>1&&s.text.length>20&&(s.text=`...${s.text.slice(-20)}`),r&&(s.highlighted=!0,a[t.find(n=>s.text.includes(n))]=i),s}),a]}function Y(e,t){let i=t.split(" "),h=new RegExp(t.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&").replace(/\\s+/g,"|"),"i"),a={};return e.forEach(l=>{var o,s;let d=l.title,r=[];if(l.sections.forEach(n=>{for(let g of n.paragraphs)if(h.test(g)){let[f,p]=b(n.title,i,10),[u,c]=b(g,i);r.push({type:"content",link:n.link,priority:Object.values(M(M({},c),p)).reduce((v,T)=>v+T,0),highlightTitleTexts:f,highlightTexts:u,pageTitle:d});return}if(h.test(n.rawTitle)&&!h.test(l.title)){let[g,f]=b(n.title,i,10);r.push({type:"title",link:n.link,priority:Object.values(f).reduce((p,u)=>p+u,0),highlightTitleTexts:g,highlightTexts:b(n.paragraphs[0]||"",i)[0],pageTitle:d})}}),l.demos.forEach(n=>{if(h.test(n.rawTitle)||h.test(n.description)){let[g,f]=b(n.title,i,10),[p,u]=b(n.description,i);r.push({type:"demo",link:n.link,priority:Object.values(M(M({},u),f)).reduce((c,v)=>c+v,0),highlightTitleTexts:g,highlightTexts:p,pageTitle:d})}}),h.test(l.title)){let[n,g]=b(l.title,i,100);r.push({type:"page",link:l.link,priority:Object.values(g).reduce((f,p)=>f+p,0),highlightTitleTexts:n,highlightTexts:b(((o=l.sections[0])==null?void 0:o.paragraphs[0])||"",i)[0],pageTitle:d})}if(r.length){let n=l.navTitle||"$ROOT";(s=a[n])!=null||(a[n]={title:l.navTitle,priority:l.navOrder*1e3,hints:[]}),a[n].hints.push(...r)}}),Object.values(a).forEach(({hints:l})=>{l.sort((d,r)=>r.priority-d.priority)}),Object.values(a).sort((l,d)=>d.priority-l.priority)}var A;self.onmessage=({data:e})=>{switch(e.action){case"generate-metadata":A=_(e.args.routes,e.args.demos,e.args.nav);break;case"get-search-result":self.postMessage(Y(A,e.args.keywords));break;default:}};})();\n';function ii(M){"@babel/helpers - typeof";return ii=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},ii(M)}function Ii(M,z){var j=Object.keys(M);if(Object.getOwnPropertySymbols){var ce=Object.getOwnPropertySymbols(M);z&&(ce=ce.filter(function(He){return Object.getOwnPropertyDescriptor(M,He).enumerable})),j.push.apply(j,ce)}return j}function Bi(M){for(var z=1;z<arguments.length;z++){var j=arguments[z]!=null?arguments[z]:{};z%2?Ii(Object(j),!0).forEach(function(ce){Eo(M,ce,j[ce])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(j)):Ii(Object(j)).forEach(function(ce){Object.defineProperty(M,ce,Object.getOwnPropertyDescriptor(j,ce))})}return M}function Eo(M,z,j){return z=ki(z),z in M?Object.defineProperty(M,z,{value:j,enumerable:!0,configurable:!0,writable:!0}):M[z]=j,M}function ki(M){var z=gu(M,"string");return ii(z)==="symbol"?z:String(z)}function gu(M,z){if(ii(M)!=="object"||M===null)return M;var j=M[Symbol.toPrimitive];if(j!==void 0){var ce=j.call(M,z||"default");if(ii(ce)!=="object")return ce;throw new TypeError("@@toPrimitive must return a primitive value.")}return(z==="string"?String:Number)(M)}function ji(M,z){return Fu(M)||zi(M,z)||Du(M,z)||Lu()}function Lu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Du(M,z){if(M){if(typeof M=="string")return Ui(M,z);var j=Object.prototype.toString.call(M).slice(8,-1);if(j==="Object"&&M.constructor&&(j=M.constructor.name),j==="Map"||j==="Set")return Array.from(M);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return Ui(M,z)}}function Ui(M,z){(z==null||z>M.length)&&(z=M.length);for(var j=0,ce=new Array(z);j<z;j++)ce[j]=M[j];return ce}function zi(M,z){var j=M==null?null:typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(j!=null){var ce,He,tt,_e,nt=[],it=!0,ut=!1;try{if(tt=(j=j.call(M)).next,z===0){if(Object(j)!==j)return;it=!1}else for(;!(it=(ce=tt.call(j)).done)&&(nt.push(ce.value),nt.length!==z);it=!0);}catch(Ft){ut=!0,He=Ft}finally{try{if(!it&&j.return!=null&&(_e=j.return(),Object(_e)!==_e))return}finally{if(ut)throw He}}return nt}}function Fu(M){if(Array.isArray(M))return M}var Zi;typeof window!="undefined"&&(Zi=new Worker(URL.createObjectURL(new Blob([oi],{type:"application/javascript"}))));var Iu=function(){var z=(0,r.useRef)(),j=(0,oe.RX)(),ce=(0,y.W)(),He=ce.demos,tt=(0,r.useState)(!1),_e=ji(tt,2),nt=_e[0],it=_e[1],ut=(0,r.useState)(""),Ft=ji(ut,2),hn=Ft[0],sn=Ft[1],Jt=Ho(),cn=(0,r.useState)([]),Qn=ji(cn,2),$n=Qn[0],lr=Qn[1],Dr=(0,r.useCallback)(function(gr){it(!0),sn(gr)},[]);return(0,r.useEffect)(function(){Zi.onmessage=function(gr){lr(gr.data),it(!1)}},[]),(0,r.useEffect)(function(){var gr=Object.entries(He).reduce(function(Lo,La){var $a=ji(La,2),rn=$a[0],Ta=$a[1],Da=Ta.asset,Pa=Ta.routeId;return Bi(Bi({},Lo),{},Eo({},rn,{asset:Da,routeId:Pa}))},{});Zi.postMessage({action:"generate-metadata",args:{routes:JSON.parse(JSON.stringify(j)),nav:Jt,demos:gr}})},[j,He,Jt]),(0,r.useEffect)(function(){var gr=hn.trim();gr?(clearTimeout(z.current),z.current=window.setTimeout(function(){Zi.postMessage({action:"get-search-result",args:{keywords:gr}})},200)):lr([])},[hn]),{keywords:hn,setKeywords:Dr,result:$n,loading:nt}}},90482:function(c,l,e){"use strict";e.d(l,{k:function(){return o},s:function(){return a}});var o=[{id:"zh-CN",name:"\u4E2D\u6587",base:"/"}],a={"en-US":{"header.search.placeholder":"Type keywords...","header.color.mode.light":"Light Mode","header.color.mode.dark":"Dark Mode","header.color.mode.auto":"Follow System","header.social.github":"GitHub","header.social.weibo":"Weibo","header.social.twitter":"Twitter","header.social.gitlab":"GitLab","header.social.facebook":"Facebook","header.social.zhihu":"Zhihu","header.social.yuque":"Yuque","header.social.linkedin":"Linkedin","previewer.actions.code.expand":"Show Code","previewer.actions.code.shrink":"Hide Code","previewer.actions.sketch":"Copy to Sketch app","previewer.actions.sketch.group":"Copy as Sketch Group","previewer.actions.sketch.symbol":"Copy as Sketch Symbol","previewer.actions.sketch.divider":"------------------------","previewer.actions.sketch.guide":"How to paste to Sketch?","previewer.actions.codesandbox":"Open in CodeSandbox","previewer.actions.codepen":"Open in CodePen (Not implemented)","previewer.actions.stackblitz":"Open in StackBlitz","previewer.actions.separate":"Open in separate page","404.title":"PAGE NOT FOUND","404.back":"Back to homepage","api.component.name":"Name","api.component.description":"Description","api.component.type":"Type","api.component.default":"Default","api.component.required":"(required)","api.component.unavailable":"apiParser must be enabled to use auto-generated API","api.component.loading":"Properties definition is resolving, wait a moment...","api.component.not.found":"Properties definition not found for {id} component","content.tabs.default":"Doc","content.footer.last.updated":"Last updated: ","content.footer.actions.edit":"Improve this documentation","content.footer.actions.previous":"PREV","content.footer.actions.next":"NEXT","search.not.found":"No content was found","layout.sidebar.btn":"Sidebar"},"zh-CN":{"header.search.placeholder":"\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22...","header.color.mode.light":"\u4EAE\u8272\u6A21\u5F0F","header.color.mode.dark":"\u6697\u8272\u6A21\u5F0F","header.color.mode.auto":"\u8DDF\u968F\u7CFB\u7EDF","header.social.github":"GitHub","header.social.weibo":"\u5FAE\u535A","header.social.twitter":"Twitter","header.social.gitlab":"GitLab","header.social.facebook":"Facebook","header.social.zhihu":"\u77E5\u4E4E","header.social.yuque":"\u8BED\u96C0","header.social.linkedin":"Linkedin","previewer.actions.code.expand":"\u5C55\u5F00\u4EE3\u7801","previewer.actions.code.shrink":"\u6536\u8D77\u4EE3\u7801","previewer.actions.codesandbox":"\u5728 CodeSandbox \u4E2D\u6253\u5F00","previewer.actions.sketch":"\u62F7\u8D1D\u5230 Sketch","previewer.actions.sketch.group":"\u62F7\u8D1D\u4E3A Sketch Group","previewer.actions.sketch.symbol":"\u62F7\u8D1D\u4E3A Sketch Symbol","previewer.actions.sketch.divider":"----------------------","previewer.actions.sketch.guide":"\u5982\u4F55\u7C98\u8D34\u5230 SKetch\uFF1F","previewer.actions.stackblitz":"\u5728 StackBlitz \u4E2D\u6253\u5F00","previewer.actions.separate":"\u5728\u72EC\u7ACB\u9875\u9762\u4E2D\u6253\u5F00","404.title":"\u9875\u9762\u672A\u627E\u5230","404.back":"\u8FD4\u56DE\u9996\u9875","api.component.name":"\u5C5E\u6027\u540D","api.component.description":"\u63CF\u8FF0","api.component.type":"\u7C7B\u578B","api.component.default":"\u9ED8\u8BA4\u503C","api.component.required":"(\u5FC5\u9009)","api.component.unavailable":"\u5FC5\u987B\u542F\u7528 apiParser \u624D\u80FD\u4F7F\u7528\u81EA\u52A8 API \u7279\u6027","api.component.loading":"\u5C5E\u6027\u5B9A\u4E49\u6B63\u5728\u89E3\u6790\u4E2D\uFF0C\u7A0D\u7B49\u7247\u523B...","api.component.not.found":"\u672A\u627E\u5230 {id} \u7EC4\u4EF6\u7684\u5C5E\u6027\u5B9A\u4E49","content.tabs.default":"\u6587\u6863","content.footer.last.updated":"\u6700\u540E\u66F4\u65B0\u65F6\u95F4\uFF1A","content.footer.actions.edit":"\u5E2E\u52A9\u6539\u8FDB\u6B64\u6587\u6863","content.footer.actions.previous":"\u4E0A\u4E00\u7BC7","content.footer.actions.next":"\u4E0B\u4E00\u7BC7","search.not.found":"\u672A\u627E\u5230\u76F8\u5173\u5185\u5BB9","layout.sidebar.btn":"\u4FA7\u8FB9\u83DC\u5355"}}},5485:function(c,l,e){"use strict";e.d(l,{wx:function(){return oe},DE:function(){return me},C3:function(){return pe},eA:function(){return fe}});var o=e(5574),a=e.n(o),r={title:"Pages"},s=[],u=[],v={},d=e(67294),h={},m={title:"\u66F4\u65B0\u65E5\u5FD7",toc:"content",filename:"docs/changelog/index.md",lastUpdated:169358816e4,nav:{title:"\u66F4\u65B0\u65E5\u5FD7",order:2},class:"home",sidebar:!1,description:"React Admin Kit \u7EC4\u4EF6\u5E93\u7684\u66F4\u65B0\u65E5\u5FD7"},p=[{id:"\u66F4\u65B0\u65E5\u5FD7",depth:1,title:"\u66F4\u65B0\u65E5\u5FD7"},{id:"031",depth:2,title:"0.3.1"},{id:"030",depth:2,title:"0.3.0"},{id:"022",depth:2,title:"0.2.2"},{id:"0123",depth:2,title:"0.1.23"},{id:"021",depth:2,title:"0.2.1"},{id:"020",depth:2,title:"0.2.0"},{id:"0122",depth:2,title:"0.1.22"},{id:"0121",depth:2,title:"0.1.21"},{id:"0120",depth:2,title:"0.1.20"},{id:"0119",depth:2,title:"0.1.19"},{id:"0118",depth:2,title:"0.1.18"},{id:"0117",depth:2,title:"0.1.17"},{id:"0116",depth:2,title:"0.1.16"},{id:"0115",depth:2,title:"0.1.15"},{id:"0114",depth:2,title:"0.1.14"},{id:"0113",depth:2,title:"0.1.13"},{id:"0112",depth:2,title:"0.1.12"},{id:"0111",depth:2,title:"0.1.11"},{id:"0110",depth:2,title:"0.1.10"},{id:"019",depth:2,title:"0.1.9"},{id:"018",depth:2,title:"0.1.8"},{id:"017",depth:2,title:"0.1.7"},{id:"016",depth:2,title:"0.1.6"},{id:"015",depth:2,title:"0.1.5"},{id:"014",depth:2,title:"0.1.4"},{id:"013",depth:2,title:"0.1.3"},{id:"012",depth:2,title:"0.1.2"},{id:"011",depth:2,title:"0.1.1"},{id:"010",depth:2,title:"0.1.0"}],y=[{value:"\u4FEE\u590D SchemaForm \u5F53 initialValues \u6709\u503C\u65F6 formRef \u65E0\u6548\u7684\u95EE\u9898\u3002",paraId:0,tocIndex:1},{value:"\u4FEE\u590D ProForm \u5F53 initialValues \u6709\u503C\u65F6 formRef \u65E0\u6548\u7684\u95EE\u9898\u3002",paraId:0,tocIndex:1},{value:"\u6587\u6863\u5347\u7EA7\u6210 dumi2.0",paraId:1,tocIndex:2},{value:"ProForm \u7EC4\u4EF6\u65B0\u589E innerRef \u5C5E\u6027.",paraId:1,tocIndex:2},{value:"SchemaForm \u7EC4\u4EF6 submitter \u5C5E\u6027\u65B0\u589E style \u5C5E\u6027.",paraId:1,tocIndex:2},{value:"\u4FEE\u590D ProTable \u7EC4\u4EF6 name \u4E0D\u4F20\u65F6\u7684 undefined \u95EE\u9898.",paraId:1,tocIndex:2},{value:"\u4FEE\u590D SchemaForm \u7EC4\u4EF6\u5F53 initialValues \u6709\u503C\u65F6, \u91CD\u7F6E\u8868\u5355\u4F1A\u8BA9\u521D\u59CB\u503C\u4E22\u5931\u7684\u95EE\u9898.",paraId:1,tocIndex:2},{value:"api \u6539\u52A8: Protable \u7EC4\u4EF6\u4E2D tableAlertOption \u91CC\u7684 ",paraId:1,tocIndex:2},{value:"hideExport",paraId:1,tocIndex:2},{value:" \u5C5E\u6027\u540D\u6539\u6210 ",paraId:1,tocIndex:2},{value:"enableExport",paraId:1,tocIndex:2},{value:`api \u6539\u52A8: FormUpload \u7EC4\u4EF6\u7684 onChange \u5C5E\u6027\u4FEE\u6539:
`,paraId:1,tocIndex:2},{value:"\u7531\u539F\u6765\u7684\u53EA\u8981\u6587\u4EF6\u53D8\u52A8\u5C31\u4F1A\u89E6\u53D1 onChange, \u6539\u6210\u53EA\u6709\u5F53\u6587\u4EF6\u90FD\u4E0A\u4F20\u5B8C\u6BD5\u624D\u89E6\u53D1, \u5E76\u4E14\u4E0A\u4F20\u9519\u8BEF\u7684\u6587\u4EF6\u5E76\u4E0D\u4F1A\u5305\u542B\u5728 files \u91CC.",paraId:2,tocIndex:2},{value:"onFinish \u5C5E\u6027\u4E0E onChange \u76F8\u540C.",paraId:2,tocIndex:2},{value:"\u4FEE\u590D\u540C 0.1.23",paraId:3,tocIndex:3},{value:"\u4FEE\u590D FormUpload \u5728\u53D7\u63A7\u72B6\u6001\u4E0B fileList \u72B6\u6001\u4E0D\u540C\u6B65\u95EE\u9898",paraId:4,tocIndex:4},{value:"\u4FEE\u590D SchemaForm \u5728\u8BBE\u7F6E initialValues \u65F6\u5F15\u8D77\u7684 fields touched",paraId:5,tocIndex:5},{value:"api \u6539\u52A8: \u66F4\u6539 SchemaForm \u7EC4\u4EF6\u7684 valueName \u4E3A valueBaseName",paraId:6,tocIndex:6},{value:"\u589E\u52A0\u8868\u5355\u7684\u7EA6\u5B9A\u5F0F\u5904\u7406, \u5927\u5927\u7B80\u5316\u6570\u636E\u5904\u7406\u6D41\u7A0B",paraId:6,tocIndex:6},{value:"\u4FEE\u590D \u5F53 valueBaseName \u6709\u503C\u65F6, valueType \u4E3A dependency \u65F6 columns \u51FD\u6570\u91CC dataIndex \u8981\u5904\u7406 valueBaseName \u503C",paraId:6,tocIndex:6},{value:"\u4FEE\u590D readonly \u6A21\u5F0F\u4E0B dependency \u7684 columns \u672A\u5904\u7406",paraId:6,tocIndex:6},{value:"\u79FB\u9664\u6389\u591A\u4F59\u7684 console.log",paraId:7,tocIndex:7},{value:"\u8C03\u6574 BusinessSelectBuilder \u7684 api",paraId:8,tocIndex:8},{value:"\u8C03\u6574 BusinessTreeSelectBuilder \u7684 api",paraId:8,tocIndex:8},{value:"\u4FEE\u6539 LinkButton type",paraId:9,tocIndex:9},{value:"SettingProvider \u589E\u52A0 \u5BF9 SchemaForm \u7684\u5168\u5C40\u8BBE\u7F6E",paraId:10,tocIndex:10},{value:"\u5B8C\u5584 ProTable \u524D\u7AEF\u5BFC\u51FA",paraId:10,tocIndex:10},{value:"\u65B0\u589E\u7EC4\u4EF6 FormUpload",paraId:10,tocIndex:10},{value:"SettingProvider \u589E\u52A0 \u5BF9 FormUpload \u7684\u5168\u5C40\u8BBE\u7F6E",paraId:10,tocIndex:10},{value:"ModalForm \u589E\u52A0 confirmOnClose",paraId:11,tocIndex:11},{value:"BusinessSelect \u589E\u52A0 clearSelectCache \u65B9\u6CD5",paraId:11,tocIndex:11},{value:"BusinessTreeSelect \u589E\u52A0 clearTreeSelectCache \u65B9\u6CD5",paraId:11,tocIndex:11},{value:"ModalForm \u548C ProTable \u7684 onOpen \u65B9\u6CD5\u589E\u52A0\u7B2C\u4E09\u4E2A\u53C2\u6570 formData",paraId:12,tocIndex:12},{value:"\u4FEE\u6B63 ProColumnType",paraId:12,tocIndex:12},{value:"\u4FEE\u590D BusinessSelectBuilder \u7F13\u5B58\u5F15\u8D77\u7684 reRender \u95EE\u9898",paraId:13,tocIndex:13},{value:"ModalForm onFinish \u5931\u8D25\u540E\u4E0D\u5173\u95ED\u5F39\u7A97",paraId:14,tocIndex:14},{value:"\u4FEE\u590D BusinessSelectBuilder \u5206\u9875\u7EC4\u4EF6\u6CA1\u6709\u629B\u51FA queryParams",paraId:14,tocIndex:14},{value:"ModalForm \u7684 innerRef \u7684 openModal \u65B9\u6CD5\u589E\u52A0 formType \u53C2\u6570;onOpen \u548C onFinish \u65F6\u53EF\u83B7\u53D6\u5230; formType \u652F\u6301 read",paraId:14,tocIndex:14},{value:"ProTable \u7684 innerRef \u7684 openModal \u652F\u6301 read",paraId:14,tocIndex:14},{value:"\u4FEE\u590D ProTable \u7684 columnsType",paraId:14,tocIndex:14},{value:"\u4FEE\u590D LinkButton classnames \u95EE\u9898",paraId:15,tocIndex:15},{value:"\u91CD\u6784 BusinessTreeSelect \u7EC4\u4EF6, \u589E\u52A0 queryParams",paraId:15,tocIndex:15},{value:"\u4FEE\u6539 columns \u7684 valueType",paraId:16,tocIndex:16},{value:"\u6D4B\u8BD5 SchemaFormfieldProps \u62FF\u4E0D\u5230 form \u5B9E\u4F8B",paraId:16,tocIndex:16},{value:"\u53BB\u6389 src",paraId:16,tocIndex:16},{value:"\u589E\u52A0\u4F9D\u8D56@ant-design/pro-utils",paraId:17,tocIndex:17},{value:"\u6253\u5305\u4E2D\u653E\u5165 src \u6587\u4EF6",paraId:18,tocIndex:18},{value:"ProTable \u589E\u52A0 noPadding",paraId:19,tocIndex:19},{value:"\u4FEE\u6539\u7528\u4F8B \u5F03\u7528 renderFormItem \u6765\u505A\u663E\u793A\u63A7\u5236",paraId:20,tocIndex:20},{value:"\u6269\u5C55 valueType \u5B9A\u4E49",paraId:20,tocIndex:20},{value:"BusinessSelect \u548C BusinessTreeSelect \u652F\u6301\u4F20\u5165 type \u6CDB\u578B",paraId:20,tocIndex:20},{value:"\u4FEE\u590D LinkButton \u544A\u8B66",paraId:21,tocIndex:21},{value:"\u4FEE\u590D BusinessTreeSelect loading \u9519\u8BEF",paraId:21,tocIndex:21},{value:"\u589E\u52A0\u7EC4\u4EF6 Button",paraId:22,tocIndex:22},{value:"\u589E\u52A0\u7EC4\u4EF6 LinkButton",paraId:22,tocIndex:22},{value:"\u589E\u52A0 SchemaForm \u7684 embed \u6A21\u5F0F",paraId:23,tocIndex:23},{value:"\u589E\u52A0\u7EC4\u4EF6 BusinessSelect",paraId:24,tocIndex:24},{value:"\u589E\u52A0\u7EC4\u4EF6 BusinessTreeSelect",paraId:24,tocIndex:24},{value:"\u589E\u52A0\u7EC4\u4EF6 SettingProvider",paraId:24,tocIndex:24},{value:"\u628A react \u79FB\u51FA dependency",paraId:25,tocIndex:25},{value:"\u589E\u52A0 type ",paraId:26,tocIndex:26},{value:"ProColumnType",paraId:26,tocIndex:26},{value:" \u548C ",paraId:26,tocIndex:26},{value:"InnerRefType",paraId:26,tocIndex:26},{value:"\u53BB\u6389 css modules",paraId:27,tocIndex:27},{value:"\u8C03\u6574\u4F9D\u8D56",paraId:28,tocIndex:28},{value:"\u521D\u53D1\u7248\u6D4B\u8BD5",paraId:29,tocIndex:29}],g={},I={title:"\u7B80\u4ECB",toc:"content",filename:"docs/intro/index.md",lastUpdated:1693560993e3,nav:{title:"\u7B80\u4ECB",order:0},sidebar:!1,class:"home",description:"React Admin Kit (\u7B80\u79F0RAK) \u662F\u4E00\u4E2A\u57FA\u4E8E React \u548C Ant Design \u7684\u7EC4\u4EF6\u5E93, \u7528\u4E8E\u5728\u4E2D\u540E\u53F0\u7CFB\u7EDF\u4E2D\u5FEB\u901F\u7684\u6784\u5EFA\u8868\u5355\u8868\u683C. RAK \u7684\u4F7F\u7528\u4E0D\u4EC5\u80FD\u6781\u5927\u7684\u63D0\u5347\u5F00\u53D1\u6548\u7387, \u800C\u4E14\u7531\u4E8E\u5176\u7EA6\u5B9A\u5F0F\u7684 api \u8FD8\u80FD\u964D\u4F4E\u540E\u671F\u4E0D\u540C\u5F00\u53D1\u4EBA\u5458\u7684\u7EF4\u62A4\u6210\u672C. \u53E6\u5916\u7531\u4E8E\u8868\u5355\u548C\u8868\u683C\u90FD\u662F\u7531\u914D\u7F6E\u5F0F\u6570\u7EC4\u751F\u6210, \u4F7F\u5F97\u4E0D\u540C\u9875\u9762\u95F4\u7684\u8868\u5355\u548C\u8868\u683C\u7684\u590D\u7528\u53D8\u5F97\u975E\u5E38\u7B80\u5355."},b=[{id:"\u7B80\u4ECB",depth:1,title:"\u7B80\u4ECB"},{id:"\u4E3A\u4EC0\u4E48\u8981\u6709\u8FD9\u5957\u7EC4\u4EF6\u5E93",depth:2,title:"\u4E3A\u4EC0\u4E48\u8981\u6709\u8FD9\u5957\u7EC4\u4EF6\u5E93"},{id:"\u5982\u4F55\u4F7F\u7528",depth:2,title:"\u5982\u4F55\u4F7F\u7528"},{id:"\u751F\u6210\u8868\u5355",depth:3,title:"\u751F\u6210\u8868\u5355"},{id:"\u751F\u6210\u8868\u683C",depth:3,title:"\u751F\u6210\u8868\u683C"},{id:"\u6838\u5FC3\u7EC4\u4EF6\u4ECB\u7ECD",depth:2,title:"\u6838\u5FC3\u7EC4\u4EF6\u4ECB\u7ECD"},{id:"\u9879\u76EE\u4F9D\u8D56",depth:2,title:"\u9879\u76EE\u4F9D\u8D56"}],E=[{value:"React Admin Kit (\u7B80\u79F0 RAK) \u662F\u4E00\u4E2A\u57FA\u4E8E React \u548C Ant Design \u7684\u7EC4\u4EF6\u5E93, \u7528\u4E8E\u5728\u4E2D\u540E\u53F0\u7CFB\u7EDF\u4E2D\u5FEB\u901F\u7684\u6784\u5EFA\u8868\u5355\u8868\u683C. RAK \u7684\u4F7F\u7528\u4E0D\u4EC5\u80FD\u6781\u5927\u7684\u63D0\u5347\u5F00\u53D1\u6548\u7387, \u800C\u4E14\u7531\u4E8E\u5176\u7EA6\u5B9A\u5F0F\u7684 api \u8FD8\u80FD\u964D\u4F4E\u540E\u671F\u4E0D\u540C\u5F00\u53D1\u4EBA\u5458\u7684\u7EF4\u62A4\u6210\u672C. \u53E6\u5916\u7531\u4E8E\u8868\u5355\u548C\u8868\u683C\u90FD\u662F\u7531\u914D\u7F6E\u5F0F\u6570\u7EC4\u751F\u6210, \u4F7F\u5F97\u4E0D\u540C\u9875\u9762\u95F4\u7684\u8868\u5355\u548C\u8868\u683C\u7684\u590D\u7528\u53D8\u5F97\u975E\u5E38\u7B80\u5355.",paraId:0,tocIndex:0},{value:"\u6216\u8005\u8BF4\u5DF2\u7ECF\u6709\u4E86 ProComponent \u4E3A\u4EC0\u4E48\u8FD8\u9700\u8981 RAK?",paraId:1,tocIndex:1},{value:"\u5BF9\u4E8E\u4E2D\u540E\u53F0\u4E1A\u52A1\u7CFB\u7EDF(\u7B80\u79F0 admin \u7CFB\u7EDF), ProComponent \u7684",paraId:2,tocIndex:1},{value:"ProLayout",paraId:2,tocIndex:1},{value:", ",paraId:2,tocIndex:1},{value:"ProTable",paraId:2,tocIndex:1},{value:"\u7B49\u7EC4\u4EF6\u5DF2\u7ECF\u6210\u4E3A\u4E86\u4E00\u4E2A\u5178\u8303, \u5B83\u4EEC\u6781\u5927\u7684\u65B9\u4FBF\u4E86\u6211\u4EEC\u524D\u7AEF\u5F00\u53D1\u8005.",paraId:2,tocIndex:1},{value:"\u7136\u800C, ProComponent \u8FD8\u662F\u5B58\u5728\u7740\u4E00\u4E9B\u95EE\u9898, \u6216\u8005\u8BF4\u5B83\u603B\u662F\u8FBE\u4E0D\u5230\u50CF Antd \u4E00\u6837\u7684\u4F7F\u7528\u4F53\u9A8C. \u7A76\u5176\u539F\u56E0, \u5BF9\u6211\u800C\u8A00, \u662F\u5728\u6587\u6863\u7684\u9605\u8BFB\u548C\u7EC4\u4EF6\u7684\u9009\u62E9\u4E0A\u9700\u8981\u82B1\u8D39\u8F83\u591A\u7684\u65F6\u95F4\u6210\u672C...",paraId:3,tocIndex:1},{value:"\u6211\u4EEC\u53EA\u60F3\u628A\u89C6\u89D2\u805A\u7126\u5728\u4E24\u4E2A\u70B9\u4E0A, \u8868\u683C(Table)\u548C\u8868\u5355(Form), \u4E5F\u662F admin \u7CFB\u7EDF\u4E2D\u4F7F\u7528\u6700\u591A\u7684\u9875\u9762\u7ED3\u6784, \u4EE5 schema \u4E3A\u6838\u5FC3\u628A Table \u548C Form \u4E32\u8054\u8D77\u6765. \u5E76\u4EE5\u6B64\u884D\u751F\u51FA\u4E00\u4E9B\u5176\u5B83\u7684\u7EC4\u4EF6.",paraId:4,tocIndex:1},{value:"\u5982\u679C\u4F60\u662F ProComponent \u7528\u6237, \u90A3\u5927\u90E8\u5206\u7684 api \u90FD\u53EF\u4EE5\u900F\u4F20\u7ED9 RAK. \u5982\u679C\u4F60\u4E4B\u524D\u672A\u4F7F\u7528\u8FC7 ProComponent, \u90A3\u4E5F\u5B8C\u5168\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7 RAK \u7684\u7528\u4F8B\u548C\u6587\u6863\u6765\u5F00\u59CB\u4F7F\u7528, \u6E10\u8FD1\u5F0F\u7684\u4F7F\u7528\u5176\u5B83\u7684 api.",paraId:5,tocIndex:1},{value:"RAK \u4F9D\u8D56 Antd, \u6240\u4EE5\u5728\u4F7F\u7528\u524D\u9700\u8981\u5148\u5B89\u88C5 Antd.",paraId:6,tocIndex:2},{value:`yarn add antd
`,paraId:7,tocIndex:2},{value:"\u5982\u679C\u4F7F\u7528\u7684\u662F antd v4 \u7248\u672C, \u8FD8\u9700\u8981\u5F15\u5165\u6837\u5F0F.",paraId:8,tocIndex:2},{value:`import 'antd/dist/antd.min.css';
`,paraId:9,tocIndex:2},{value:"\u5B89\u88C5 RAK",paraId:10,tocIndex:2},{value:`$ yarn add react-admin-kit
`,paraId:11,tocIndex:2},{value:"\u5E38\u89C4\u7684\u8868\u5355\u662F\u7531 Form.Item \u7EC4\u6210.",paraId:12,tocIndex:3},{value:`import { Form, Input, DatePicker, Select } from 'antd';

<Form onFinish={handleFinish}>
  <Form.Item label="\u5BA2\u6237\u540D\u79F0" name="name">
    <Input />
  </Form.Item>

  <Form.Item label="\u5408\u540C\u65E5\u671F" name="contractDate">
    <DatePicker />
  </Form.Item>

  <Form.Item label="\u652F\u4ED8\u65B9\u5F0F" name="payType">
    <Select
      options={[
        { label: '\u652F\u4ED8\u5B9D', value: '1' },
        { label: '\u5FAE\u4FE1', value: '2' },
      ]}
    />
    ;
  </Form.Item>
</Form>;
`,paraId:13,tocIndex:3},{value:"RAK \u901A\u8FC7 schemas \u751F\u6210\u8868\u5355, \u4E00\u4E2A schema \u5BF9\u5E94\u4E00\u4E2A Form.Item.",paraId:14,tocIndex:3},{value:`import { SchemaForm } from 'react-admin-kit';

const columns = [
  {
    title: '\u5BA2\u6237\u540D\u79F0',
    dataIndex: 'name',
  },
  {
    title: '\u5408\u540C\u65E5\u671F',
    dataIndex: 'contractDate',
    valueType: 'date',
  },
  {
    title: '\u652F\u4ED8\u65B9\u5F0F',
    dataIndex: 'payType',
    valueType: 'select',
    fieldProps: {
      options: [
        { label: '\u652F\u4ED8\u5B9D', value: '1' },
        { label: '\u5FAE\u4FE1', value: '2' },
      ],
    },
  },
];

// \u5177\u4F53\u8BF7\u53C2\u8003\u5404\u7EC4\u4EF6\u6587\u6863
const Demo = () => {
  return <SchemaForm columns={columns} onFinish={handleFinish} />;
};
`,paraId:15,tocIndex:3},{value:`import { ProTable } from 'react-admin-kit';

// \u5177\u4F53\u8BF7\u53C2\u8003\u5404\u7EC4\u4EF6\u6587\u6863
const Demo = () => {
  return <ProTable columns={columns} />;
};
`,paraId:16,tocIndex:4},{value:"RAK \u53EA\u6709 3 \u4E2A\u6838\u5FC3\u7EC4\u4EF6, \u5E76\u4E14\u5B83\u4EEC\u662F\u7EC4\u5408\u7684\u5173\u7CFB:",paraId:17,tocIndex:5},{value:"SchemaForm - JSON\u8868\u5355",paraId:18,tocIndex:5},{value:": ",paraId:18,tocIndex:5},{value:"SchemaForm",paraId:18,tocIndex:5},{value:"ModalForm - \u5F39\u7A97\u8868\u5355",paraId:18,tocIndex:5},{value:": ",paraId:18,tocIndex:5},{value:"Modal",paraId:18,tocIndex:5},{value:" + ",paraId:18,tocIndex:5},{value:"SchemaForm",paraId:18,tocIndex:5},{value:"ProTable - \u9AD8\u7EA7\u8868\u683C",paraId:18,tocIndex:5},{value:": ",paraId:18,tocIndex:5},{value:"ProTable",paraId:18,tocIndex:5},{value:" + ",paraId:18,tocIndex:5},{value:"ModalForm",paraId:18,tocIndex:5},{value:"\u6240\u4EE5\u7EC4\u4EF6\u95F4\u7684\u5C5E\u6027\u662F\u53EF\u4EE5\u900F\u4F20\u7684. \u6BD4\u5982\u5728",paraId:19,tocIndex:5},{value:"ModalForm",paraId:19,tocIndex:5},{value:"\u7EC4\u4EF6\u4E2D\u5C31\u53EF\u4EE5\u900F\u4F20",paraId:19,tocIndex:5},{value:"SchemaForm",paraId:19,tocIndex:5},{value:"\u7684\u5C5E\u6027. \u5728",paraId:19,tocIndex:5},{value:"ProTable",paraId:19,tocIndex:5},{value:"\u7EC4\u4EF6\u4E2D\u53EF\u4EE5\u900F\u4F20",paraId:19,tocIndex:5},{value:"Modal",paraId:19,tocIndex:5},{value:"\u548C",paraId:19,tocIndex:5},{value:"SchemaForm",paraId:19,tocIndex:5},{value:"\u7684\u5C5E\u6027. \u5177\u4F53\u53EF\u4EE5\u53C2\u89C1\u5404\u7EC4\u4EF6\u7684\u6587\u6863\u8BF4\u660E.",paraId:19,tocIndex:5},{value:`{
  "@ant-design/pro-form": "^2.2.2",
  "@ant-design/pro-table": "^3.0.11",
  "@ant-design/pro-utils": "^2.2.10",
}

// peerDependency
{
  "antd": ">=4.23.4",
}
`,paraId:20,tocIndex:6},{value:"\u6587\u6863\u4E2D\u7684\u7528\u4F8B\u4F7F\u7528\u7684\u662F antd v4 \u7248\u672C.",paraId:21,tocIndex:6},{value:"antd v5 \u7406\u8BBA\u4E5F\u80FD\u652F\u6301.",paraId:22,tocIndex:6}],R={"businessselectbuilder-demo-basic":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(364)]).then(e.bind(e,10821))})),asset:{type:"BLOCK",id:"businessselectbuilder-demo-basic",refAtomIds:["BusinessSelectBuilder"],dependencies:{"index.tsx":{type:"FILE",value:e(3798).Z},"react-admin-kit":{type:"NPM",value:"0.3.1"},"query.ts":{type:"FILE",value:e(41362).Z}}}},"businessselectbuilder-demo-onequery":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(364)]).then(e.bind(e,53620))})),asset:{type:"BLOCK",id:"businessselectbuilder-demo-onequery",refAtomIds:["BusinessSelectBuilder"],dependencies:{"index.tsx":{type:"FILE",value:e(72230).Z},"react-admin-kit":{type:"NPM",value:"0.3.1"},"basic/index.tsx":{type:"FILE",value:e(3798).Z},"basic/query.ts":{type:"FILE",value:e(41362).Z}}}},"businessselectbuilder-demo-queryparams":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(364)]).then(e.bind(e,93177))})),asset:{type:"BLOCK",id:"businessselectbuilder-demo-queryparams",refAtomIds:["BusinessSelectBuilder"],dependencies:{"index.tsx":{type:"FILE",value:e(22042).Z},"react-admin-kit":{type:"NPM",value:"0.3.1"},"basic/index.tsx":{type:"FILE",value:e(3798).Z},"basic/query.ts":{type:"FILE",value:e(41362).Z}}}},"businessselectbuilder-demo-clearcache":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(364)]).then(e.bind(e,17079))})),asset:{type:"BLOCK",id:"businessselectbuilder-demo-clearcache",refAtomIds:["BusinessSelectBuilder"],dependencies:{"index.tsx":{type:"FILE",value:e(53927).Z},antd:{type:"NPM",value:"4.24.13"},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"basic/index.tsx":{type:"FILE",value:e(3798).Z},"basic/query.ts":{type:"FILE",value:e(41362).Z}}}}},A={title:"BusinessSelect - \u4E1A\u52A1\u4E0B\u62C9",toc:"content",filename:"src/BusinessSelectBuilder/index.md",atomId:"BusinessSelectBuilder",lastUpdated:1693472974e3,group:{title:"\u884D\u751F\u7EC4\u4EF6",order:1},order:0,description:"BusinessSelect - \u4E1A\u52A1\u4E0B\u62C9\u7EC4\u4EF6\u7528\u4E8E\u89E3\u51B3\u4E2D\u540E\u53F0\u7CFB\u7EDF\u4E2D\u4E0B\u62C9\u7EC4\u4EF6\u5982\u4F55\u5206\u9875, \u5982\u4F55\u590D\u7528\u7B49\u95EE\u9898."},N=[{id:"businessselect---\u4E1A\u52A1\u4E0B\u62C9",depth:1,title:"BusinessSelect - \u4E1A\u52A1\u4E0B\u62C9"},{id:"\u57FA\u672C\u7684\u4F7F\u7528\u65B9\u6CD5",depth:3,title:"\u57FA\u672C\u7684\u4F7F\u7528\u65B9\u6CD5"},{id:"\u540C\u4E00\u9875\u9762\u4E2D\u591A\u6B21\u5F15\u7528\u53EA\u4F1A\u8BF7\u6C42\u4E00\u6B21\u63A5\u53E3",depth:3,title:"\u540C\u4E00\u9875\u9762\u4E2D\u591A\u6B21\u5F15\u7528\u53EA\u4F1A\u8BF7\u6C42\u4E00\u6B21\u63A5\u53E3"},{id:"\u8BF7\u6C42\u63A5\u53E3\u5E26\u67E5\u8BE2\u53C2\u6570-queryparams",depth:3,title:"\u8BF7\u6C42\u63A5\u53E3\u5E26\u67E5\u8BE2\u53C2\u6570 queryParams"},{id:"\u5206\u9875\u4E0B\u62C9\u53CA\u5176\u641C\u7D22",depth:3,title:"\u5206\u9875\u4E0B\u62C9\u53CA\u5176\u641C\u7D22"},{id:"\u6E05\u9664\u7F13\u5B58",depth:3,title:"\u6E05\u9664\u7F13\u5B58"},{id:"\u5B9A\u4E49-labelkey-\u548C-valuekey",depth:3,title:"\u5B9A\u4E49 labelKey \u548C valueKey"},{id:"api",depth:3,title:"API"},{id:"businessselectbuilder",depth:3,title:"BusinessSelectBuilder"},{id:"apitype",depth:3,title:"ApiType"},{id:"businessselect",depth:3,title:"BusinessSelect"}],w=[{value:"\u4E0B\u62C9\u7EC4\u4EF6\u662F\u4E2D\u540E\u53F0\u7CFB\u7EDF\u4E2D\u91CD\u5EA6\u4F7F\u7528\u7684\u7EC4\u4EF6, \u5E76\u4E14\u4E0B\u62C9\u9009\u9879\u5927\u90E8\u5206\u662F\u901A\u8FC7\u63A5\u53E3\u83B7\u53D6\u7684. \u5F53\u7CFB\u7EDF\u4E2D\u7684\u4E0B\u62C9\u7EC4\u4EF6\u4F7F\u7528\u7684\u8D8A\u6765\u8D8A\u591A\u7684\u65F6\u5019, \u5C31\u4F1A\u51FA\u73B0\u4E00\u4E9B\u95EE\u9898, \u6BD4\u5982:",paraId:0,tocIndex:0},{value:"\u6709\u4E00\u90E8\u5206\u4E0B\u62C9\u662F\u9700\u8981\u5206\u9875\u7684, \u5E0C\u671B\u80FD\u5BF9\u5206\u9875\u7684\u4E0B\u62C9\u7EC4\u4EF6\u8FDB\u884C\u66F4\u901A\u7528\u7684\u5C01\u88C5.",paraId:1,tocIndex:0},{value:"\u6709\u7684\u4E0B\u62C9\u4F1A\u5728\u591A\u4E2A\u9875\u9762\u4E2D\u591A\u6B21\u4F7F\u7528, \u5982\u4F55\u66F4\u597D\u7684\u590D\u7528\u4ED6\u4EEC.",paraId:1,tocIndex:0},{value:"\u5F53\u9875\u9762\u4E2D\u6709\u591A\u4E2A\u4E0B\u62C9\u7EC4\u4EF6\u65F6, \u4E0B\u62C9\u9009\u9879\u7684\u8BF7\u6C42\u903B\u8F91\u4F1A\u8BA9\u9875\u9762\u4EE3\u7801\u53D8\u5F97\u81C3\u80BF, \u5982\u4F55\u62BD\u79BB\u8FD9\u4E9B\u4EE3\u7801.",paraId:1,tocIndex:0},{value:"\u4E0E\u5176\u8BA9\u8FD9\u4E9B\u4E0B\u62C9\u5206\u5E03\u5728\u5404\u4E2A\u9875\u9762\u4E2D, \u4E0D\u5982\u628A\u4ED6\u4EEC\u5B9A\u4E49\u5230\u4E00\u5757, \u7531 type \u533A\u5206, \u5F62\u6210\u4E00\u4E2A\u66F4\u4E3A\u901A\u7528\u7684\u4E0B\u62C9\u7EC4\u4EF6.",paraId:2,tocIndex:0},{value:"\u6211\u4EEC\u79F0\u8FD9\u4E2A\u7EC4\u4EF6\u4E3A ",paraId:3,tocIndex:0},{value:"BusinessSelect",paraId:3,tocIndex:0},{value:", \u5B83\u662F\u7531 ",paraId:3,tocIndex:0},{value:"BusinessSelectBuilder",paraId:3,tocIndex:0},{value:" \u521D\u59CB\u5316\u800C\u6765:",paraId:3,tocIndex:0},{value:`import { BusinessSelectBuilder } from 'react-admin-kit';

// \u5B9A\u4E49 type \u7C7B\u578B
type SelectType = 'color' | 'brand';

const BusinessSelect = BusinessSelectBiulder<SelectType>({
  apis: [
    {
      type: 'color',
      api: queryColorFunction,
    },
    {
      type: 'brand',
      api: queryBrandFunction,
      pagination: true,
    },
  ],
});

// \u5728\u9875\u9762\u4E0A\u4F7F\u7528
<BusinessSelect type="color" />;
<BusinessSelect type="brand" />;
`,paraId:4,tocIndex:0},{value:"BusinessSelect",paraId:5,tocIndex:1},{value:"\u662F antd Select \u7684\u5C01\u88C5, \u53EF\u4EE5\u900F\u4F20 Select \u7684\u6240\u6709\u5C5E\u6027.",paraId:5,tocIndex:1},{value:"\u4E0B\u62C9\u6570\u636E\u9ED8\u8BA4\u4F1A\u81EA\u52A8\u7F13\u5B58",paraId:6,tocIndex:2},{value:"\u6709\u65F6\u6211\u4EEC\u9700\u8981\u7ED9\u63A5\u53E3\u4F20\u9012\u67E5\u8BE2\u53C2\u6570, \u53EF\u4EE5\u4F7F\u7528 queryParams.",paraId:7,tocIndex:3},{value:"\u6BD4\u5982\u6709\u4E00\u4E2A\u4EBA\u5458\u63A5\u53E3\u4F1A\u6839\u636E type \u6765\u533A\u5206\u4E0D\u540C\u7684\u4EBA\u5458\u7C7B\u578B, \u5728 A \u9875\u9762\u7528\u7684\u662F type=1, \u5728 B \u9875\u9762\u7528\u7684\u662F type=2. \u8FD9\u79CD\u60C5\u51B5\u53EF\u4EE5\u4F7F\u7528",paraId:8,tocIndex:3},{value:"queryParams",paraId:8,tocIndex:3},{value:"\u5C5E\u6027",paraId:8,tocIndex:3},{value:`// A\u9875\u9762
<BusinessSelect type="user" queryParams={{ type: 1 }} />

// B\u9875\u9762
<BusinessSelect type="user" queryParams={{ type: 2 }} />
`,paraId:9,tocIndex:3},{value:"\u5F53 queryParams \u4F20\u5165\u503C\u65F6, \u8BE5\u4E0B\u62C9\u5C06\u4E0D\u7F13\u5B58\u6570\u636E",paraId:10,tocIndex:3},{value:"\u5F53\u4E0B\u62C9\u6570\u636E\u91CF\u5F88\u5927\u65F6, \u5C06 ApiType \u4E2D\u7684 pagination \u8BBE\u4E3A true, \u7EC4\u4EF6\u5373\u5F00\u542F\u5206\u9875\u6A21\u5F0F, \u652F\u6301\u6EDA\u52A8\u5230\u5E95\u90E8\u52A0\u8F7D\u4E0B\u4E00\u9875\u548C\u8FDC\u7A0B\u641C\u7D22",paraId:11,tocIndex:4},{value:"\u5728\u4E0B\u4E00\u9875\u6216\u8005\u641C\u7D22\u7684\u65F6\u5019, \u4F1A\u7ED9\u63A5\u53E3\u629B\u51FA current, searchValue \u4E24\u4E2A\u503C",paraId:12,tocIndex:4},{value:`{
  api: ({ current, searchValue }) => request();
}
`,paraId:13,tocIndex:4},{value:"\u4F7F\u7528",paraId:14,tocIndex:5},{value:"clearSelectCache(type: string)",paraId:14,tocIndex:5},{value:"\u65B9\u6CD5\u6E05\u9664\u7F13\u5B58. type \u4E0D\u4F20\u6E05\u9664\u6240\u6709\u7C7B\u578B\u7684\u7F13\u5B58",paraId:14,tocIndex:5},{value:"\u4E0B\u62C9\u7684 label \u9ED8\u8BA4\u53D6\u503C\u662F ",paraId:15,tocIndex:6},{value:"name",paraId:15,tocIndex:6},{value:" \u5B57\u6BB5, value \u7684\u9ED8\u8BA4\u53D6\u503C\u662F ",paraId:15,tocIndex:6},{value:"id",paraId:15,tocIndex:6},{value:". \u5982\u679C\u8981\u66F4\u6539\u53D6\u503C\u5B57\u6BB5, \u53EF\u901A\u8FC7 labelKey \u548C valueKey \u6765\u66F4\u6539.",paraId:15,tocIndex:6},{value:`<BusinessSelect type="user" labelKey="userName" valueKey="userId" />
`,paraId:16,tocIndex:6},{value:"\u9664\u4E86\u5728 BusinessSelect \u4E0A\u8BBE\u7F6E\u4EE5\u5916, \u8FD8\u53EF\u4EE5\u5728 BusinessSelectBuilder \u4E0A\u8BBE\u7F6E",paraId:17,tocIndex:6},{value:`BusinessSelectBuilder({
  apis: [
    {
      type: 'user'
      defaultProps: {
        labelKey: 'userName',
        valueKey: 'userId'
      }
    }
  ]
})
`,paraId:18,tocIndex:6}],B={"businesstreeselectbuilder-demo-basic":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(438)]).then(e.bind(e,74503))})),asset:{type:"BLOCK",id:"businesstreeselectbuilder-demo-basic",refAtomIds:["BusinessTreeSelectBuilder"],dependencies:{"index.tsx":{type:"FILE",value:e(57818).Z},"react-admin-kit":{type:"NPM",value:"0.3.1"},"query.ts":{type:"FILE",value:e(83272).Z}}}},"businesstreeselectbuilder-demo-clearcache":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(438)]).then(e.bind(e,60360))})),asset:{type:"BLOCK",id:"businesstreeselectbuilder-demo-clearcache",refAtomIds:["BusinessTreeSelectBuilder"],dependencies:{"index.tsx":{type:"FILE",value:e(62453).Z},antd:{type:"NPM",value:"4.24.13"},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"basic/index.tsx":{type:"FILE",value:e(57818).Z},"basic/query.ts":{type:"FILE",value:e(83272).Z}}}}},C={title:"BusinessTreeSelect - \u4E1A\u52A1\u6811\u4E0B\u62C9",toc:"content",filename:"src/BusinessTreeSelectBuilder/index.md",atomId:"BusinessTreeSelectBuilder",lastUpdated:1693472974e3,group:{title:"\u884D\u751F\u7EC4\u4EF6",order:1},order:1,description:"BusinessTreeSelect - \u4E1A\u52A1\u6811\u4E0B\u62C9\u7EC4\u4EF6\u7528\u4E8E\u89E3\u51B3\u4E2D\u540E\u53F0\u7CFB\u7EDF\u4E2D\u6811\u4E0B\u62C9\u7684\u5206\u9875, \u5982\u4F55\u590D\u7528\u7B49\u95EE\u9898."},L=[{id:"businesstreeselect---\u4E1A\u52A1\u6811\u4E0B\u62C9",depth:2,title:"BusinessTreeSelect - \u4E1A\u52A1\u6811\u4E0B\u62C9"},{id:"\u57FA\u672C\u7684\u4F7F\u7528\u65B9\u6CD5",depth:3,title:"\u57FA\u672C\u7684\u4F7F\u7528\u65B9\u6CD5"},{id:"\u6E05\u9664\u7F13\u5B58",depth:3,title:"\u6E05\u9664\u7F13\u5B58"},{id:"api",depth:3,title:"API"},{id:"businesstreeselectbuilder",depth:3,title:"BusinessTreeSelectBuilder"},{id:"apitype",depth:3,title:"ApiType"},{id:"businesstreeselect",depth:3,title:"BusinessTreeSelect"}],Z=[{value:"\u4E0E BusinessSelect \u4E00\u6837, \u53EF\u4EE5\u5C06\u7CFB\u7EDF\u91CC\u6240\u6709\u7684\u6811\u4E0B\u62C9\u90FD\u5B9A\u4E49\u5230\u4E00\u8D77. \u53EA\u9700\u4E00\u6B21\u5B9A\u4E49, \u5168\u9875\u9762\u90FD\u80FD\u65B9\u4FBF\u4F7F\u7528.",paraId:0,tocIndex:0},{value:"\u5148\u521D\u59CB\u5316\u7EC4\u4EF6.",paraId:1,tocIndex:0},{value:`import { BusinessTreeSelectBuilder } from 'react-admin-kit';

// \u5B9A\u4E49 type \u7C7B\u578B
type TreeSelectType = 'org';

const BusinessTreeSelect = BusinessTreeSelectBuilder<TreeSelectType>(
  {
    apis: [
      {
        type: 'org',
        api: queryOrgFunction,
      },
    ],
  })

// \u5728\u9875\u9762\u4E2D\u4F7F\u7528
<BusinessTreeSelect type="org" />;
`,paraId:2,tocIndex:0},{value:"\u8BE5\u4F8B\u5B50\u4E2D\u90E8\u95E8\u4F1A\u6839\u636E\u516C\u53F8\u7EA7\u8054",paraId:3,tocIndex:1},{value:"\u548C",paraId:4,tocIndex:1},{value:"BusinessSelect",paraId:4,tocIndex:1},{value:"\u4E00\u6837, \u540C\u6837\u652F\u6301",paraId:4,tocIndex:1},{value:"queryParams",paraId:4,tocIndex:1},{value:", \u53EF\u4EE5\u4F20\u5165\u8BF7\u6C42\u53C2\u6570.",paraId:4,tocIndex:1},{value:"\u6570\u636E\u540C\u6837\u4F1A\u9ED8\u8BA4\u7F13\u5B58.",paraId:5,tocIndex:1},{value:"BusinessTreeSelect",paraId:6,tocIndex:1},{value:"\u53EF\u4EE5\u900F\u4F20 Antd TreeSelect \u7684\u6240\u6709\u5C5E\u6027.",paraId:6,tocIndex:1},{value:"\u4F7F\u7528",paraId:7,tocIndex:2},{value:"clearTreeSelectCache(type: string)",paraId:7,tocIndex:2},{value:"\u65B9\u6CD5\u6E05\u9664\u7F13\u5B58. type \u4E0D\u4F20\u6E05\u9664\u6240\u6709\u7C7B\u578B\u7684\u7F13\u5B58.",paraId:7,tocIndex:2}],te={"button-demo-basic":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(570)]).then(e.bind(e,57803))})),asset:{type:"BLOCK",id:"button-demo-basic",refAtomIds:["Button"],dependencies:{"index.tsx":{type:"FILE",value:e(31816).Z},antd:{type:"NPM",value:"4.24.13"},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"}}}}},ee={title:"Button - \u6309\u94AE",toc:"content",filename:"src/Button/index.md",atomId:"Button",lastUpdated:1693472974e3,group:{title:"\u884D\u751F\u7EC4\u4EF6",order:1},order:2,description:"Button - \u6309\u94AE\u7EC4\u4EF6\u662F Antd Button \u7684\u5C01\u88C5, \u589E\u52A0\u4E86 `visible` \u5C5E\u6027, \u7528\u4E8E\u66F4\u65B9\u4FBF\u7684\u63A7\u5236\u663E\u793A\u4E0E\u9690\u85CF. \u9002\u7528\u4E8E\u6BD4\u5982\u6309\u94AE\u6743\u9650\u7B49\u573A\u666F."},_=[{id:"button---\u6309\u94AE",depth:1,title:"Button - \u6309\u94AE"},{id:"\u57FA\u672C\u7684\u4F7F\u7528\u65B9\u6CD5",depth:3,title:"\u57FA\u672C\u7684\u4F7F\u7528\u65B9\u6CD5"},{id:"api",depth:3,title:"API"},{id:"button",depth:3,title:"Button"}],de=[{value:"\u8BE5\u7EC4\u4EF6\u662F Antd Button \u7684\u5C01\u88C5, \u589E\u52A0\u4E86 ",paraId:0,tocIndex:0},{value:"visible",paraId:0,tocIndex:0},{value:" \u5C5E\u6027, \u7528\u4E8E\u66F4\u65B9\u4FBF\u7684\u63A7\u5236\u663E\u793A\u4E0E\u9690\u85CF. \u9002\u7528\u4E8E\u6BD4\u5982\u6309\u94AE\u6743\u9650\u7B49\u573A\u666F.",paraId:0,tocIndex:0}],be={"formupload-demo-basic":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(749)]).then(e.bind(e,32298))})),asset:{type:"BLOCK",id:"formupload-demo-basic",refAtomIds:["FormUpload"],dependencies:{"index.tsx":{type:"FILE",value:e(53230).Z},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"}}}},"formupload-demo-errorhandle":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(749)]).then(e.bind(e,9180))})),asset:{type:"BLOCK",id:"formupload-demo-errorhandle",refAtomIds:["FormUpload"],dependencies:{"index.tsx":{type:"FILE",value:e(53148).Z},antd:{type:"NPM",value:"4.24.13"},"react-admin-kit":{type:"NPM",value:"0.3.1"}}}},"formupload-demo-show":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(749)]).then(e.bind(e,77576))})),asset:{type:"BLOCK",id:"formupload-demo-show",refAtomIds:["FormUpload"],dependencies:{"index.tsx":{type:"FILE",value:e(92033).Z},antd:{type:"NPM",value:"4.24.13"},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"}}}},"formupload-demo-datasubmit":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(749)]).then(e.bind(e,96749))})),asset:{type:"BLOCK",id:"formupload-demo-datasubmit",refAtomIds:["FormUpload"],dependencies:{"index.tsx":{type:"FILE",value:e(13625).Z},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"}}}},"formupload-demo-changekey":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(749)]).then(e.bind(e,75146))})),asset:{type:"BLOCK",id:"formupload-demo-changekey",refAtomIds:["FormUpload"],dependencies:{"index.tsx":{type:"FILE",value:e(36444).Z},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"}}}}},Te={title:"FormUpload - \u8868\u5355\u4E0A\u4F20",toc:"content",filename:"src/FormUpload/index.md",atomId:"FormUpload",lastUpdated:1693472974e3,group:{title:"\u884D\u751F\u7EC4\u4EF6",order:1},order:4,description:"FormUpload - \u8868\u5355\u4E0A\u4F20\u7EC4\u4EF6\u9002\u7528\u4E8E\u5728\u8868\u5355\u4E2D\u7684\u6587\u4EF6\u4E0A\u4F20. \u9075\u5FAA value, onChange \u53D7\u63A7\u6A21\u5F0F."},ie=[{id:"formupload---\u8868\u5355\u4E0A\u4F20",depth:1,title:"FormUpload - \u8868\u5355\u4E0A\u4F20"},{id:"\u57FA\u672C\u7684\u4F7F\u7528",depth:3,title:"\u57FA\u672C\u7684\u4F7F\u7528"},{id:"\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25",depth:3,title:"\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25"},{id:"\u6587\u4EF6\u521D\u59CB\u503C",depth:3,title:"\u6587\u4EF6\u521D\u59CB\u503C"},{id:"\u6570\u636E\u5904\u7406\u548C\u6536\u96C6---convervalue---transform",depth:3,title:"\u6570\u636E\u5904\u7406\u548C\u6536\u96C6 - ConverValue - Transform"},{id:"\u66F4\u6539\u53D6\u503C\u5B57\u6BB5",depth:3,title:"\u66F4\u6539\u53D6\u503C\u5B57\u6BB5"},{id:"api",depth:3,title:"API"},{id:"responsetofilelist-\u662F\u4EC0\u4E48\u610F\u601D",depth:4,title:"responseToFileList \u662F\u4EC0\u4E48\u610F\u601D?"}],Q=[{value:"\u8BE5\u7EC4\u4EF6\u662F\u5BF9 Antd Upload \u7EC4\u4EF6\u7684\u5C01\u88C5, \u901A\u8FC7\u5BF9 fileList \u548C onChange \u7684\u63A5\u7BA1, \u8BA9\u5B83\u8868\u73B0\u4E3A\u4E00\u4E2A\u6807\u51C6\u7684 value - onChange \u53D7\u63A7\u7EC4\u4EF6, \u4F7F\u5176\u80FD\u591F\u88AB\u76F4\u63A5\u7528\u5728 Form.Item \u91CC.",paraId:0,tocIndex:0},{value:"FormUpload \u7EC4\u4EF6\u7684\u8BBE\u8BA1\u76EE\u6807\u662F\u5E0C\u671B\u5728\u7B80\u5355\u7684\u5168\u5C40\u914D\u7F6E\u8FC7\u540E, \u4F7F\u7528 FormUpload \u7EC4\u4EF6\u5C31\u50CF\u4F7F\u7528 Input \u7EC4\u4EF6\u4E00\u6837\u7B80\u5355\u8F7B\u91CF. \u4E0A\u4F20\u6210\u529F\u7684\u6587\u4EF6\u4F1A\u88AB\u8868\u5355\u81EA\u52A8\u6536\u96C6, \u4E0A\u4F20\u5931\u8D25\u7684\u6587\u4EF6\u4F1A\u88AB\u81EA\u52A8\u8FC7\u6EE4.",paraId:1,tocIndex:0},{value:"\u5728\u4F7F\u7528\u4E4B\u524D\u5148\u5728\u5168\u5C40\u914D\u7F6E\u597D ",paraId:2,tocIndex:1},{value:"action",paraId:2,tocIndex:1},{value:", ",paraId:2,tocIndex:1},{value:"headers",paraId:2,tocIndex:1},{value:" \u7B49\u5FC5\u8981\u5C5E\u6027.",paraId:2,tocIndex:1},{value:`<SettingProvider
  formUploadSetting={{
    action: 'https://mock.apifox.cn/m1/1864670-0-default/mockUpload',
    headers: { Authorization: 'myToken' },
    responseToFileList: (res) => ({ id: res?.data.id }), // \u5C06\u540E\u53F0\u8FD4\u56DE\u503C\u5408\u5E76\u8FDBfile\u5BF9\u8C61
  }}
>
  ...
</SettingProvider>
`,paraId:3,tocIndex:1},{value:"\u53EF\u5728\u5168\u5C40\u8BBE\u7F6E\u4E0A\u4F20\u5931\u8D25\u540E\u7684\u63D0\u9192.",paraId:4,tocIndex:2},{value:"\u4E0A\u4F20\u5931\u8D25\u7684\u6587\u4EF6\u4E0D\u4F1A\u88AB\u8868\u5355\u6536\u96C6.",paraId:4,tocIndex:2},{value:"beforeUpload \u8FD4\u56DE false \u7684\u6587\u4EF6\u8868\u5355\u4E0D\u6536\u96C6.",paraId:5,tocIndex:3},{value:"FormUpload \u7EC4\u4EF6\u9ED8\u8BA4\u63A5\u53D7\u7684 file \u5BF9\u8C61\u683C\u5F0F\u662F { name: string; url: string }",paraId:6,tocIndex:4},{value:"\u5982\u679C\u540E\u7AEF\u8FD4\u56DE\u7684\u6570\u636E\u4E0D\u7B26\u5408\u8BE5\u8981\u6C42, \u53EF\u4EE5\u4F7F\u7528 SchemaForm \u63D0\u4F9B\u7684 ConverValue \u548C Transform",paraId:7,tocIndex:4},{value:"FormUpload \u8FD8\u63D0\u4F9B\u4E86 ",paraId:8,tocIndex:5},{value:"nameKey",paraId:8,tocIndex:5},{value:" \u548C ",paraId:8,tocIndex:5},{value:"urlKey",paraId:8,tocIndex:5},{value:" \u6765\u66F4\u6539 file \u5BF9\u8C61\u7684\u53D6\u503C\u5B57\u6BB5. \u540C\u6837\u4E5F\u652F\u6301\u5728\u5168\u5C40\u66F4\u6539.",paraId:8,tocIndex:5},{value:"\u5F53\u6587\u4EF6\u4E0A\u4F20\u6210\u529F\u540E, \u8868\u5355\u9ED8\u8BA4\u6536\u96C6\u5230\u7684\u6570\u636E\u662F\u8FD9\u6837\u7684:",paraId:9,tocIndex:7},{value:`{
  uid: 'rc-upload-1691485494798-17',
  name: 'xx.png',
  size: 1403,
  status: 'done',
  response: {
    // \u4E0A\u4F20\u6210\u529F\u540E\u7684\u540E\u7AEF\u8FD4\u56DE\u503C
    id: 123,
    filePath: 'xxx'
  }
}
`,paraId:10,tocIndex:7},{value:"responseToFileList \u51FD\u6570\u53EF\u4EE5\u628A\u4E0A\u9762\u7684 response \u5408\u5E76\u8FDB\u6587\u4EF6\u5BF9\u8C61.",paraId:11,tocIndex:7},{value:"\u6BD4\u5982 ",paraId:12,tocIndex:7},{value:"responseToFileList: (res) => ({ id: res.id })",paraId:12,tocIndex:7},{value:", \u6700\u540E\u63D0\u4EA4\u65F6\u7684\u5BF9\u8C61\u5C31\u4F1A\u6709 id.",paraId:12,tocIndex:7},{value:`{
  id: 123,
  uid: 'rc-upload-1691485494798-17',
  name: 'xx.png',
  size: 1403,
  status: 'done',
  response: {
    // \u4E0A\u4F20\u6210\u529F\u540E\u7684\u540E\u7AEF\u8FD4\u56DE
    id: 123,
    filePath: 'xxx'
  }
}
`,paraId:13,tocIndex:7},{value:"\u4E00\u822C\u8FD9\u4E2A\u5C5E\u6027\u53EF\u4EE5\u5728 ",paraId:14,tocIndex:7},{value:"SettingProvider",paraId:14,tocIndex:7},{value:" \u7EC4\u4EF6\u4E2D\u5168\u5C40\u8BBE\u5B9A",paraId:14,tocIndex:7}],Y={"linkbutton-demo-basic":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(587)]).then(e.bind(e,27341))})),asset:{type:"BLOCK",id:"linkbutton-demo-basic",refAtomIds:["LinkButton"],dependencies:{"index.tsx":{type:"FILE",value:e(847).Z},antd:{type:"NPM",value:"4.24.13"},"react-admin-kit":{type:"NPM",value:"0.3.1"}}}}},k={title:"LinkButton - \u94FE\u63A5\u6309\u94AE",toc:"content",filename:"src/LinkButton/index.md",atomId:"LinkButton",lastUpdated:1693472974e3,group:{title:"\u884D\u751F\u7EC4\u4EF6",order:1},order:3,description:"LinkButton - \u94FE\u63A5\u6309\u94AE\u7EC4\u4EF6\u662F Antd Button \u7684\u5C01\u88C5, \u4E0E Antd Button \u4E0D\u540C\u7684\u662F\u53BB\u6389\u4E86 padding, \u56FA\u5B9A\u9AD8\u5EA6\u4EE5\u53CA\u767D\u8272\u7684\u5E95\u8272, \u8BA9\u5176\u53EF\u4EE5\u9002\u5E94\u4E0D\u540C\u7684\u80CC\u666F\u5E95\u8272, \u540C\u65F6\u8868\u73B0\u66F4\u52A0\u7D27\u51D1. \u9002\u7528\u4E8E\u8868\u683C\u7684\u64CD\u4F5C\u5217\u7B49\u7A7A\u95F4\u4E0D\u5BBD\u88D5\u7684\u5730\u65B9. \u8BE5\u7EC4\u4EF6\u540C\u6837\u6709`visible`\u5C5E\u6027."},K=[{id:"linkbutton---\u94FE\u63A5\u6309\u94AE",depth:1,title:"LinkButton - \u94FE\u63A5\u6309\u94AE"},{id:"\u57FA\u672C\u7684\u4F7F\u7528\u65B9\u6CD5",depth:3,title:"\u57FA\u672C\u7684\u4F7F\u7528\u65B9\u6CD5"},{id:"api",depth:3,title:"API"},{id:"linkbutton",depth:3,title:"LinkButton"}],re=[{value:"\u8BE5\u7EC4\u4EF6\u662F Antd Button \u7684\u5C01\u88C5, \u4E0E Antd Button \u4E0D\u540C\u7684\u662F\u53BB\u6389\u4E86 padding, \u56FA\u5B9A\u9AD8\u5EA6\u4EE5\u53CA\u767D\u8272\u7684\u5E95\u8272, \u8BA9\u5176\u53EF\u4EE5\u9002\u5E94\u4E0D\u540C\u7684\u80CC\u666F\u5E95\u8272, \u540C\u65F6\u8868\u73B0\u66F4\u52A0\u7D27\u51D1. \u9002\u7528\u4E8E\u8868\u683C\u7684\u64CD\u4F5C\u5217\u7B49\u7A7A\u95F4\u4E0D\u5BBD\u88D5\u7684\u5730\u65B9. \u8BE5\u7EC4\u4EF6\u540C\u6837\u6709",paraId:0,tocIndex:0},{value:"visible",paraId:0,tocIndex:0},{value:"\u5C5E\u6027.",paraId:0,tocIndex:0}],T={"modalform-demo-basic":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(424)]).then(e.bind(e,98822))})),asset:{type:"BLOCK",id:"modalform-demo-basic",refAtomIds:["ModalForm"],dependencies:{"index.tsx":{type:"FILE",value:e(62091).Z},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.ts":{type:"FILE",value:e(26449).Z}}}},"modalform-demo-innerref":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(424)]).then(e.bind(e,41515))})),asset:{type:"BLOCK",id:"modalform-demo-innerref",refAtomIds:["ModalForm"],dependencies:{"index.tsx":{type:"FILE",value:e(65516).Z},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.ts":{type:"FILE",value:e(96169).Z}}}},"modalform-demo-multiplecol":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(424)]).then(e.bind(e,56576))})),asset:{type:"BLOCK",id:"modalform-demo-multiplecol",refAtomIds:["ModalForm"],dependencies:{"index.tsx":{type:"FILE",value:e(34234).Z},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.ts":{type:"FILE",value:e(57820).Z}}}},"modalform-demo-longform":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(424)]).then(e.bind(e,57275))})),asset:{type:"BLOCK",id:"modalform-demo-longform",refAtomIds:["ModalForm"],dependencies:{"index.tsx":{type:"FILE",value:e(4951).Z},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.ts":{type:"FILE",value:e(66830).Z}}}},"modalform-demo-readonly":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(424)]).then(e.bind(e,73954))})),asset:{type:"BLOCK",id:"modalform-demo-readonly",refAtomIds:["ModalForm"],dependencies:{"index.tsx":{type:"FILE",value:e(68887).Z},antd:{type:"NPM",value:"4.24.13"},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.ts":{type:"FILE",value:e(54331).Z}}}},"modalform-demo-onopen":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(424)]).then(e.bind(e,44983))})),asset:{type:"BLOCK",id:"modalform-demo-onopen",refAtomIds:["ModalForm"],dependencies:{"index.tsx":{type:"FILE",value:e(78978).Z},antd:{type:"NPM",value:"4.24.13"},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.ts":{type:"FILE",value:e(27652).Z}}}},"modalform-demo-initvalue":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(424)]).then(e.bind(e,45864))})),asset:{type:"BLOCK",id:"modalform-demo-initvalue",refAtomIds:["ModalForm"],dependencies:{"index.tsx":{type:"FILE",value:e(74448).Z},antd:{type:"NPM",value:"4.24.13"},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.tsx":{type:"FILE",value:e(28310).Z}}}},"modalform-demo-onfinish":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(424)]).then(e.bind(e,76039))})),asset:{type:"BLOCK",id:"modalform-demo-onfinish",refAtomIds:["ModalForm"],dependencies:{"index.tsx":{type:"FILE",value:e(74474).Z},antd:{type:"NPM",value:"4.24.13"},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.ts":{type:"FILE",value:e(84892).Z}}}},"modalform-demo-convention":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(424)]).then(e.bind(e,36796))})),asset:{type:"BLOCK",id:"modalform-demo-convention",refAtomIds:["ModalForm"],dependencies:{"index.tsx":{type:"FILE",value:e(80117).Z},antd:{type:"NPM",value:"4.24.13"},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.ts":{type:"FILE",value:e(35574).Z}}}},"modalform-demo-innerrefdata":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(424)]).then(e.bind(e,70850))})),asset:{type:"BLOCK",id:"modalform-demo-innerrefdata",refAtomIds:["ModalForm"],dependencies:{"index.tsx":{type:"FILE",value:e(70323).Z},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.tsx":{type:"FILE",value:e(64021).Z}}}}},D={title:"ModalForm - \u5F39\u7A97\u8868\u5355",toc:"content",filename:"src/ModalForm/index.md",atomId:"ModalForm",lastUpdated:1693472974e3,group:{title:"\u6838\u5FC3\u7EC4\u4EF6",order:0},order:1,description:"\u901A\u8FC7 schema \u751F\u6210\u4E00\u4E2A\u5F39\u7A97\u8868\u5355. \u8FD9\u662F Modal \u548C SchemaForm \u7684\u7ED3\u5408."},V=[{id:"modalform---\u5F39\u7A97\u8868\u5355",depth:1,title:"ModalForm - \u5F39\u7A97\u8868\u5355"},{id:"\u4E00\u4E2A\u57FA\u672C\u7684\u5F39\u7A97\u8868\u5355",depth:3,title:"\u4E00\u4E2A\u57FA\u672C\u7684\u5F39\u7A97\u8868\u5355"},{id:"\u975E\u53D7\u63A7\u6A21\u5F0F-\u63A8\u8350",depth:3,title:"\u975E\u53D7\u63A7\u6A21\u5F0F (\u63A8\u8350)"},{id:"\u591A\u5217\u6392\u5E03",depth:3,title:"\u591A\u5217\u6392\u5E03"},{id:"\u957F\u8868\u5355\u6821\u9A8C\u65F6\u6EDA\u52A8\u5230\u6240\u5728\u9879",depth:3,title:"\u957F\u8868\u5355\u6821\u9A8C\u65F6\u6EDA\u52A8\u5230\u6240\u5728\u9879"},{id:"\u8868\u5355\u7C7B\u578B\u548C\u8868\u5355\u521D\u59CB\u503C",depth:3,title:"\u8868\u5355\u7C7B\u578B\u548C\u8868\u5355\u521D\u59CB\u503C"},{id:"\u6253\u5F00\u5F39\u7A97\u540E\u8BF7\u6C42\u6570\u636E\u56DE\u663E",depth:3,title:"\u6253\u5F00\u5F39\u7A97\u540E\u8BF7\u6C42\u6570\u636E\u56DE\u663E"},{id:"\u8868\u5355\u9879\u663E\u793A\u9690\u85CF",depth:3,title:"\u8868\u5355\u9879\u663E\u793A\u9690\u85CF"},{id:"onfinish",depth:3,title:"onFinish"},{id:"-\u6570\u636E\u5904\u7406\u548C\u6536\u96C6---\u7EA6\u5B9A\u5F0F",depth:3,title:"\u2B50 \u6570\u636E\u5904\u7406\u548C\u6536\u96C6 - \u7EA6\u5B9A\u5F0F"},{id:"\u5229\u7528-innerref-\u5B58\u50A8\u989D\u5916\u4FE1\u606F",depth:3,title:"\u5229\u7528 innerRef \u5B58\u50A8\u989D\u5916\u4FE1\u606F"},{id:"api",depth:3,title:"API"},{id:"modalform",depth:3,title:"ModalForm"},{id:"innerref",depth:3,title:"InnerRef"},{id:"\u900F\u4F20\u7ED9-modal-\u7684-api-\u53EF\u53C2\u8003antd-modal-\u6587\u6863",depth:3,title:"\u900F\u4F20\u7ED9 Modal \u7684 API \u53EF\u53C2\u8003Antd Modal \u6587\u6863"}],le=[{value:"\u901A\u8FC7 schema \u751F\u6210\u4E00\u4E2A\u5F39\u7A97\u8868\u5355.",paraId:0,tocIndex:0},{value:"\u8FD9\u662F Modal \u548C SchemaForm \u7684\u7ED3\u5408, \u56E0\u6B64\u53EF\u4EE5\u900F\u4F20 Modal \u548C SchemaForm \u7684 api.",paraId:1,tocIndex:0},{value:"\u5229\u7528 RAK \u63D0\u4F9B\u7684 innerRef, \u65E0\u9700\u989D\u5916\u5B9A\u4E49 open \u53D8\u91CF\u5C31\u80FD\u63A7\u5236\u5F39\u7A97, \u4F7F\u7528\u66F4\u52A0\u7B80\u6D01. \u540E\u9762\u7684\u7528\u4F8B\u9ED8\u8BA4\u4F7F\u7528\u8BE5\u65B9\u5F0F.",paraId:2,tocIndex:2},{value:"formProps",paraId:3,tocIndex:3},{value:" \u5C5E\u6027\u53EF\u4EE5\u900F\u4F20 SchemaForm \u7EC4\u4EF6\u7684 api, \u6765\u6539\u53D8\u8868\u5355\u7684\u6392\u5217\u6837\u5F0F.",paraId:3,tocIndex:3},{value:"innerRef \u4E0A\u7684 ",paraId:4,tocIndex:5},{value:"openModal",paraId:4,tocIndex:5},{value:" \u65B9\u6CD5\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570, \u7B2C\u4E00\u4E2A\u662F formType, \u7B2C\u4E8C\u4E2A\u662F initialValues.",paraId:4,tocIndex:5},{value:"formType \u6709\u4E09\u79CD\u7C7B\u578B, ",paraId:5,tocIndex:5},{value:"new | edit | read",paraId:5,tocIndex:5},{value:", \u9ED8\u8BA4\u503C\u662F ",paraId:5,tocIndex:5},{value:"new",paraId:5,tocIndex:5},{value:", \u5728 onFinish \u548C onOpen \u5C5E\u6027\u91CC\u53EF\u4EE5\u6839\u636E\u8BE5\u503C\u505A\u4E0D\u540C\u7684\u5904\u7406.",paraId:5,tocIndex:5},{value:"initialValues \u662F\u7ED9\u8868\u5355\u7684\u521D\u59CB\u503C.",paraId:6,tocIndex:5},{value:"\u5229\u7528 formType \u53EA\u5728\u7F16\u8F91\u548C\u67E5\u770B\u65F6\u624D\u8BF7\u6C42",paraId:7,tocIndex:6},{value:"\u8BF7\u4F7F\u7528 valueType='dependency'\u6765\u505A\u663E\u793A\u63A7\u5236, \u539F\u6765\u7684 renderFormItem \u5DF2\u7ECF\u5F03\u7528.",paraId:8,tocIndex:7},{value:"onFinish \u56DE\u8C03\u6709\u4E09\u4E2A\u53C2\u6570, \u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u8868\u5355\u91CC\u6536\u96C6\u5230\u7684\u503C, \u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u8868\u5355\u7C7B\u578B, \u7B2C\u4E09\u4E2A\u53C2\u6570\u662F\u6253\u5F00\u5F39\u7A97\u65F6\u8D4B\u7ED9\u8868\u5355\u7684\u521D\u59CB\u503C(\u8FD9\u91CC\u53EF\u4EE5\u643A\u5E26\u4E00\u4E9B\u989D\u5916\u6570\u636E\u6BD4\u5982 id \u7B49).",paraId:9,tocIndex:8},{value:"\u4E0E",paraId:10,tocIndex:9},{value:"SchemaForm \u4E00\u6837",paraId:11,tocIndex:9},{value:", ModalForm \u540C\u6837\u652F\u6301\u7EA6\u5B9A\u5F0F\u6570\u636E\u5904\u7406.",paraId:10,tocIndex:9},{value:"\u4E0E",paraId:12,tocIndex:10},{value:"SchemaForm",paraId:13,tocIndex:10},{value:"\u4E00\u6837, ModalForm \u4E5F\u80FD\u5229\u7528 innerRef \u5B58\u50A8\u989D\u5916\u6570\u636E.",paraId:12,tocIndex:10},{value:"\u53C2\u6570",paraId:14,tocIndex:13},{value:"\u8BF4\u660E",paraId:14,tocIndex:13},{value:"\u7C7B\u578B",paraId:14,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:13},{value:"openModal",paraId:14,tocIndex:13},{value:"\u7528\u4E8E\u6253\u5F00\u5F39\u7A97; formType \u53EF\u7528\u4E8E\u5728 onFinish \u7684\u65F6\u5019\u5224\u65AD\u8868\u5355\u7C7B\u578B; ",paraId:14,tocIndex:13},{value:"innerRef.current?.openModal('edit', {name: 'jack', age: 18})",paraId:14,tocIndex:13},{value:"(formType?: 'new' | 'edit' | 'read', initialValues?: any) => void",paraId:14,tocIndex:13},{value:"-",paraId:14,tocIndex:13},{value:"data",paraId:14,tocIndex:13},{value:"\u53EF\u4EE5\u5B58\u50A8\u8868\u5355\u4E2D\u7684\u989D\u5916\u6570\u636E",paraId:14,tocIndex:13},{value:"Record<string, any>",paraId:14,tocIndex:13},{value:"{}",paraId:14,tocIndex:13},{value:"setData",paraId:14,tocIndex:13},{value:"\u5B58\u5165\u6570\u636E; setData \u548C react \u7684 setState \u4E00\u6837, \u53EA\u9700\u8981\u4F20\u5165\u5173\u5FC3\u7684\u5B57\u6BB5\u5C31\u53EF\u4EE5, \u4E0D\u4F1A\u8986\u76D6\u5176\u5B83\u7684\u5B57\u6BB5.",paraId:14,tocIndex:13},{value:"(Record<string, any>) => void",paraId:14,tocIndex:13},{value:"--",paraId:14,tocIndex:13},{value:"Antd Modal \u6587\u6863",paraId:15}],J={"protable-demo-basic":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(843)]).then(e.bind(e,33732))})),asset:{type:"BLOCK",id:"protable-demo-basic",refAtomIds:["ProTable"],dependencies:{"index.tsx":{type:"FILE",value:e(86264).Z},antd:{type:"NPM",value:"4.24.13"},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.tsx":{type:"FILE",value:e(57914).Z},"apis.ts":{type:"FILE",value:e(65942).Z}}}},"protable-demo-retrieve":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(843)]).then(e.bind(e,62898))})),asset:{type:"BLOCK",id:"protable-demo-retrieve",refAtomIds:["ProTable"],dependencies:{"index.tsx":{type:"FILE",value:e(43616).Z},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.tsx":{type:"FILE",value:e(51715).Z},"apis.ts":{type:"FILE",value:e(94434).Z}}}},"protable-demo-create":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(843)]).then(e.bind(e,25985))})),asset:{type:"BLOCK",id:"protable-demo-create",refAtomIds:["ProTable"],dependencies:{"index.tsx":{type:"FILE",value:e(61728).Z},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},antd:{type:"NPM",value:"4.24.13"},"columns.tsx":{type:"FILE",value:e(36205).Z},"apis.ts":{type:"FILE",value:e(70319).Z}}}},"protable-demo-update":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(843)]).then(e.bind(e,62376))})),asset:{type:"BLOCK",id:"protable-demo-update",refAtomIds:["ProTable"],dependencies:{"index.tsx":{type:"FILE",value:e(44752).Z},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},antd:{type:"NPM",value:"4.24.13"},"columns.tsx":{type:"FILE",value:e(79211).Z},"apis.ts":{type:"FILE",value:e(54849).Z}}}},"protable-demo-destroy":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(843)]).then(e.bind(e,15992))})),asset:{type:"BLOCK",id:"protable-demo-destroy",refAtomIds:["ProTable"],dependencies:{"index.tsx":{type:"FILE",value:e(24614).Z},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},antd:{type:"NPM",value:"4.24.13"},"columns.tsx":{type:"FILE",value:e(62965).Z},"apis.ts":{type:"FILE",value:e(64084).Z}}}},"protable-demo-valuetype":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(843)]).then(e.bind(e,98064))})),asset:{type:"BLOCK",id:"protable-demo-valuetype",refAtomIds:["ProTable"],dependencies:{"index.tsx":{type:"FILE",value:e(7128).Z},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.tsx":{type:"FILE",value:e(99219).Z},"apis.ts":{type:"FILE",value:e(90503).Z}}}},"protable-demo-rendertext":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(843)]).then(e.bind(e,71742))})),asset:{type:"BLOCK",id:"protable-demo-rendertext",refAtomIds:["ProTable"],dependencies:{"index.tsx":{type:"FILE",value:e(37549).Z},"react-admin-kit":{type:"NPM",value:"0.3.1"},"apis.ts":{type:"FILE",value:e(96177).Z}}}},"protable-demo-modalformlayout":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(843)]).then(e.bind(e,44106))})),asset:{type:"BLOCK",id:"protable-demo-modalformlayout",refAtomIds:["ProTable"],dependencies:{"index.tsx":{type:"FILE",value:e(36021).Z},antd:{type:"NPM",value:"4.24.13"},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.tsx":{type:"FILE",value:e(58485).Z},"basic/apis.ts":{type:"FILE",value:e(65942).Z}}}},"protable-demo-readonly":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(843)]).then(e.bind(e,60491))})),asset:{type:"BLOCK",id:"protable-demo-readonly",refAtomIds:["ProTable"],dependencies:{"index.tsx":{type:"FILE",value:e(89374).Z},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"basic/apis.ts":{type:"FILE",value:e(65942).Z},"columns.tsx":{type:"FILE",value:e(82843).Z}}}},"protable-demo-onopen":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(843)]).then(e.bind(e,32413))})),asset:{type:"BLOCK",id:"protable-demo-onopen",refAtomIds:["ProTable"],dependencies:{"index.tsx":{type:"FILE",value:e(52846).Z},antd:{type:"NPM",value:"4.24.13"},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.tsx":{type:"FILE",value:e(56201).Z},"apis.ts":{type:"FILE",value:e(22135).Z}}}},"protable-demo-onfinish":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(843)]).then(e.bind(e,20212))})),asset:{type:"BLOCK",id:"protable-demo-onfinish",refAtomIds:["ProTable"],dependencies:{"index.tsx":{type:"FILE",value:e(50619).Z},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"apis.ts":{type:"FILE",value:e(48357).Z},"columns.tsx":{type:"FILE",value:e(8609).Z}}}},"protable-demo-controlled":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(843)]).then(e.bind(e,39111))})),asset:{type:"BLOCK",id:"protable-demo-controlled",refAtomIds:["ProTable"],dependencies:{"index.tsx":{type:"FILE",value:e(86843).Z},antd:{type:"NPM",value:"4.24.13"},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.tsx":{type:"FILE",value:e(45869).Z}}}},"protable-demo-export":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(843)]).then(e.bind(e,3463))})),asset:{type:"BLOCK",id:"protable-demo-export",refAtomIds:["ProTable"],dependencies:{"index.tsx":{type:"FILE",value:e(31421).Z},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.tsx":{type:"FILE",value:e(35912).Z},"apis.ts":{type:"FILE",value:e(89398).Z},antd:{type:"NPM",value:"4.24.13"}}}},"protable-demo-convention":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(843)]).then(e.bind(e,33517))})),asset:{type:"BLOCK",id:"protable-demo-convention",refAtomIds:["ProTable"],dependencies:{"index.tsx":{type:"FILE",value:e(45229).Z},antd:{type:"NPM",value:"4.24.13"},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.tsx":{type:"FILE",value:e(36274).Z},"apis.ts":{type:"FILE",value:e(73254).Z}}}}},P={title:"ProTable - \u9AD8\u7EA7\u8868\u683C",toc:"content",filename:"src/ProTable/index.md",atomId:"ProTable",lastUpdated:1693472974e3,group:{title:"\u6838\u5FC3\u7EC4\u4EF6",order:0},order:2,description:"ProTable \u662F Antd Protable \u548C ModalForm \u7684\u7ED3\u5408, \u5E76\u4E14\u878D\u5165\u4E86\u5220\u9664, \u524D\u7AEF\u5BFC\u51FA\u7B49\u529F\u80FD. \u66F4\u52A0\u8D34\u5408\u5B9E\u9645\u573A\u666F."},$=[{id:"protable---\u9AD8\u7EA7\u8868\u683C",depth:1,title:"ProTable - \u9AD8\u7EA7\u8868\u683C"},{id:"\u4E00\u4E2A\u57FA\u672C\u7684-crud-\u8868\u683C",depth:3,title:"\u4E00\u4E2A\u57FA\u672C\u7684 CRUD \u8868\u683C"},{id:"\u67E5\u8BE2",depth:3,title:"\u67E5\u8BE2"},{id:"\u65B0\u589E",depth:3,title:"\u65B0\u589E"},{id:"\u7F16\u8F91",depth:3,title:"\u7F16\u8F91"},{id:"\u5220\u9664",depth:3,title:"\u5220\u9664"},{id:"valuetype",depth:3,title:"valueType"},{id:"rendertext-\u4E0E-render-\u7684\u533A\u522B",depth:3,title:"renderText \u4E0E render \u7684\u533A\u522B"},{id:"\u66F4\u6539\u5F39\u7A97\u8868\u5355\u7684\u5E03\u5C40",depth:3,title:"\u66F4\u6539\u5F39\u7A97\u8868\u5355\u7684\u5E03\u5C40"},{id:"\u5F39\u7A97\u53EA\u8BFB\u6A21\u5F0F",depth:3,title:"\u5F39\u7A97\u53EA\u8BFB\u6A21\u5F0F"},{id:"\u6253\u5F00\u5F39\u7A97\u540E\u8BF7\u6C42\u6570\u636E\u56DE\u663E",depth:3,title:"\u6253\u5F00\u5F39\u7A97\u540E\u8BF7\u6C42\u6570\u636E\u56DE\u663E"},{id:"onfinish",depth:3,title:"onFinish"},{id:"\u53D7\u63A7\u8868\u5355",depth:3,title:"\u53D7\u63A7\u8868\u5355"},{id:"\u5F00\u542F\u524D\u7AEF\u5BFC\u51FA\u5217\u8868",depth:3,title:"\u5F00\u542F\u524D\u7AEF\u5BFC\u51FA\u5217\u8868"},{id:"-\u6570\u636E\u5904\u7406\u548C\u6536\u96C6---\u7EA6\u5B9A\u5F0F",depth:3,title:"\u2B50 \u6570\u636E\u5904\u7406\u548C\u6536\u96C6 - \u7EA6\u5B9A\u5F0F"},{id:"api",depth:3,title:"API"},{id:"protable",depth:3,title:"ProTable"},{id:"innerref",depth:3,title:"InnerRef"},{id:"tablealertoption",depth:3,title:"TableAlertOption"},{id:"schema",depth:3,title:"Schema"}],H=[{value:"ProTable \u662F ",paraId:0,tocIndex:0},{value:"Antd ProTable",paraId:0,tocIndex:0},{value:" \u548C ModalForm \u7684\u7ED3\u5408, \u5E76\u4E14\u878D\u5165\u4E86\u5220\u9664, \u524D\u7AEF\u5BFC\u51FA\u7B49\u529F\u80FD. \u66F4\u52A0\u8D34\u5408\u5B9E\u9645\u573A\u666F.",paraId:0,tocIndex:0},{value:"\u5982\u679C\u4F60\u4E4B\u524D\u5E76\u4E0D\u719F\u6089 ProTable \u7684 api, \u5B8C\u5168\u53EF\u4EE5\u76F4\u63A5\u770B\u4F8B\u5B50\u6765\u5F00\u59CB\u4F7F\u7528.",paraId:1,tocIndex:0},{value:"\u8FD9\u662F\u4E00\u4E2A\u57FA\u672C\u7684 CRUD \u8868\u683C, \u5305\u542B\u4E86 ",paraId:2,tocIndex:1},{value:"\u67E5\u8BE2",paraId:2,tocIndex:1},{value:", ",paraId:2,tocIndex:1},{value:"\u65B0\u5EFA",paraId:2,tocIndex:1},{value:", ",paraId:2,tocIndex:1},{value:"\u7F16\u8F91",paraId:2,tocIndex:1},{value:", ",paraId:2,tocIndex:1},{value:"\u5220\u9664",paraId:2,tocIndex:1},{value:". \u521D\u6B21\u63A5\u89E6 ProTable \u7684\u7528\u6237\u53EF\u80FD\u4F1A\u9047\u5230\u5F88\u591A\u964C\u751F\u7684 api, \u8BA9\u4EBA\u611F\u89C9\u5F88\u4E0D\u8212\u670D, \u6CA1\u5173\u7CFB, \u6211\u4EEC\u4F1A\u901A\u8FC7\u51E0\u4E2A\u4F8B\u5B50\u6162\u6162\u5C55\u5F00.",paraId:2,tocIndex:1},{value:"\u5148\u6765\u8BA4\u8BC6\u4E00\u4E0B ",paraId:3,tocIndex:2},{value:"request",paraId:3,tocIndex:2},{value:" \u5C5E\u6027, \u901A\u8FC7\u4F20\u5165\u4E00\u4E2A\u8BF7\u6C42\u51FD\u6570, ProTable \u5C31\u5E2E\u6211\u4EEC\u505A\u597D\u4E86\u6570\u636E\u8BF7\u6C42, \u5206\u9875\u8BF7\u6C42, \u67E5\u8BE2\u8BF7\u6C42, \u91CD\u7F6E\u8BF7\u6C42\u7B49\u529F\u80FD. \u8BF7\u6C42\u51FD\u6570\u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A promise (\u4E00\u822C\u662F\u4E00\u4E2A axios \u5B9E\u4F8B), \u5E76\u4E14 promise \u4E2D\u8FD4\u56DE\u7684\u6570\u636E\u9700\u8981\u6EE1\u8DB3\u4E0B\u9762\u7684\u8981\u6C42:",paraId:3,tocIndex:2},{value:`// Promise\u56DE\u8FD4\u7684\u6570\u636E\u683C\u5F0F
{
  data: [], // \u8868\u683C\u6570\u636E\u6E90
  success: true,
  total: 6 // \u7528\u4E8E\u5206\u9875
}
`,paraId:4,tocIndex:2},{value:`<ProTable
  request={(params) => requestApi(params)}
  ...
/>
`,paraId:5,tocIndex:2},{value:"\u8BF7\u6C42\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570 ",paraId:6,tocIndex:2},{value:"params",paraId:6,tocIndex:2},{value:" \u4F1A\u5305\u542B\u5206\u9875, \u641C\u7D22\u7B49\u8BF7\u6C42\u53C2\u6570:",paraId:6,tocIndex:2},{value:`{
  current: 2,
  pageSize: 5,
  ... // \u5176\u5B83\u641C\u7D22\u5B57\u6BB5
}
`,paraId:7,tocIndex:2},{value:"\u7528\u6237\u53EF\u4EE5\u4E0E\u540E\u53F0\u7EA6\u5B9A\u597D\u8FD9\u4E9B\u8BF7\u6C42\u53C2\u6570\u548C\u8FD4\u56DE\u683C\u5F0F, \u4E5F\u53EF\u4EE5\u81EA\u5DF2\u5728\u5168\u5C40\u5305\u88C5\u4E00\u4E0B\u540E\u4F20\u7ED9\u540E\u53F0.",paraId:8,tocIndex:2},{value:"column \u91CC\u7684 ",paraId:9,tocIndex:2},{value:"hideInSearch",paraId:9,tocIndex:2},{value:" \u5B57\u6BB5\u63A7\u5236\u662F\u5426\u5728\u641C\u7D22\u8868\u5355\u91CC\u9690\u85CF.",paraId:9,tocIndex:2},{value:`{
  title: '\u6635\u79F0',
  dataIndex: 'nickName',
  hideInSearch: true, // \u5728\u641C\u7D22\u8868\u5355\u91CC\u9690\u85CF
}
`,paraId:10,tocIndex:2},{value:"\u63A5\u4E0A\u4E00\u4E2A\u4F8B\u5B50, \u6211\u4EEC\u5148\u6765\u6DFB\u52A0\u4E00\u4E2A\u65B0\u589E\u6309\u94AE.",paraId:11,tocIndex:3},{value:"ProTable \u5185\u90E8\u89C4\u5212\u4E86\u591A\u4E2A\u533A\u57DF\u7528\u4E8E\u653E\u7F6E\u4E0D\u540C\u7684\u6309\u94AE, \u7528\u6237\u53EA\u8981\u5728\u76F8\u5E94\u7684 api \u4E0A\u914D\u7F6E\u6309\u94AE\u5C31\u53EF\u4EE5\u4E86. \u8FD9\u4E48\u505A\u4E00\u65B9\u9762\u80FD\u8BA9\u5404\u8868\u683C\u7684\u529F\u80FD\u533A\u57DF\u4FDD\u6301\u6E05\u6670\u7EDF\u4E00, \u53E6\u4E00\u65B9\u9762\u5BF9\u4E8E\u7EC8\u7AEF\u7528\u6237\u6765\u8BF4\u4E5F\u80FD\u51CF\u5C11\u4ED6\u4EEC\u5BF9\u8868\u683C\u64CD\u4F5C\u7684\u719F\u6089\u6210\u672C.",paraId:12,tocIndex:3},{value:"\u4E0A\u56FE\u4E2D\u7684\u7EA2\u8272\u5B57\u662F\u5927\u533A\u5757, \u5927\u533A\u5757\u91CC\u8FD8\u5305\u542B\u9ED1\u8272\u7684\u5C0F\u533A\u5757. \u5BF9\u4E8E\u65B0\u589E\u6309\u94AE\u6765\u8BF4, \u5E94\u8BE5\u52A0\u5230 toolbar \u5927\u533A\u5757\u91CC\u7684 actions \u5C0F\u533A\u5757\u91CC.",paraId:13,tocIndex:3},{value:`<ProTable
  toolbar={{
    actions: [
      <Button
        key={1}
        type="primary"
      >
        \u65B0\u589E
      </Button>,
    ],
  }}
`,paraId:14,tocIndex:3},{value:"\u6DFB\u52A0\u4E86\u6309\u94AE\u4E4B\u540E, \u901A\u8FC7 ",paraId:15,tocIndex:3},{value:"innerRef.current.openModal()",paraId:15,tocIndex:3},{value:" \u5C31\u80FD\u6253\u5F00\u8868\u5355.",paraId:15,tocIndex:3},{value:`<ProTable
  innerRef={innerRef}
  toolbar={{
    actions: [
      <Button
        key={1}
        type="primary"
        onClick={() => innerRef.current.openModal()}
      >
        \u65B0\u589E
      </Button>,
    ],
  }}
`,paraId:16,tocIndex:3},{value:"\u6700\u540E\u8BBE\u7F6E onFinish \u5C5E\u6027\u5C31\u5B8C\u6210\u4E86\u8868\u5355\u7684\u65B0\u589E.",paraId:17,tocIndex:3},{value:`<ProTable
  columns={getColumns()}
  request={mockRequest}
  pagination={{ pageSize: 5 }}
  innerRef={innerRef}
  toolbar={{
    actions: [
      <Button
        key={1}
        type="primary"
        onClick={() => innerRef.current?.openModal()}
      >
        \u65B0\u589E
      </Button>,
    ],
  }}
  onFinish={async (values, formType) => {
    if (formType === 'new') {
      await mockAdd(values);
      message.success('\u65B0\u5EFA\u6210\u529F!');
      actionRef.current?.reload(); // \u65B0\u589E\u6210\u529F\u540E\u7528 actionRef \u91CD\u65B0\u8BF7\u6C42\u63A5\u53E3
    }
  }}
/>
`,paraId:18,tocIndex:3},{value:"\u63A5\u4E0A\u4E00\u4E2A\u4F8B\u5B50, \u8981\u5B9E\u73B0\u7F16\u8F91\u529F\u80FD, \u53EF\u4EE5\u5728 columns \u91CC\u589E\u52A0\u4E00\u4E2A\u64CD\u4F5C\u5217\u6765\u6DFB\u52A0\u7F16\u8F91\u6309\u94AE.",paraId:19,tocIndex:4},{value:`// columns
{
  title: '\u64CD\u4F5C',
  valueType: 'option', // valueType \u8BBE\u4E3A option \u4EE3\u8868\u662F\u64CD\u4F5C\u5217
  render: (text, record, index, actionRef, innerRef) => [
    <LinkButton
      key={1}
      onClick={() => innerRef.current?.openModal('edit', record)}
    >
      \u7F16\u8F91
    </LinkButton>,
  ],
},
`,paraId:20,tocIndex:4},{value:"\u5F53 valueType \u4E3A option \u65F6, render \u51FD\u6570\u4F1A\u88AB\u81EA\u52A8\u6CE8\u5165 innerRef \u53C2\u6570, \u901A\u8FC7 innerRef \u5C31\u53EF\u4EE5\u6253\u5F00\u7F16\u8F91\u5F39\u6846\u5E76\u4E14\u5BF9\u8868\u5355\u8D4B\u503C.",paraId:21,tocIndex:4},{value:"\u7F16\u8F91\u5F39\u6846\u6253\u5F00\u540E\u6211\u4EEC\u7EE7\u7EED\u5B8C\u5584 onFinish \u4E2D\u7684\u66F4\u65B0\u90E8\u5206:",paraId:22,tocIndex:4},{value:`<ProTable
  ...
  onFinish={async (values, formType, formData) => {
    if (formType === 'new') {
      await mockAdd(values);
      message.success('\u65B0\u5EFA\u6210\u529F!');
      actionRef.current?.reload();
    }

    if (formType === 'edit') {
      await mockUpdate({ ...values, id: formData.id });
      message.success('\u66F4\u65B0\u6210\u529F!');
      actionRef.current?.reload();
    }
  }}
/>
`,paraId:23,tocIndex:4},{value:"\u4ECE 11 \u884C\u6211\u4EEC\u6CE8\u610F\u5230, \u66F4\u65B0\u63A5\u53E3\u9664\u4E86\u9700\u8981\u8868\u5355\u503C\u4EE5\u5916, \u8FD8\u9700\u8981\u989D\u5916\u4F20\u9012\u8BB0\u5F55 id \u7ED9\u540E\u53F0.",paraId:24,tocIndex:4},{value:"onFinish \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570 values \u662F\u8868\u5355\u6536\u96C6\u7684\u503C, \u91CC\u9762\u5E76\u6CA1\u6709 id. \u8FD9\u4E2A\u65F6\u5019\u5C31\u53EF\u4EE5\u4ECE onFinish \u7684\u7B2C\u4E09\u4E2A\u53C2\u6570 formData \u91CC\u6765\u53D6\u503C. formData \u5C31\u662F\u4E0A\u4E00\u6B65\u6253\u5F00\u7F16\u8F91\u5F39\u6846\u65F6\u8D4B\u7ED9\u8868\u5355\u7684\u521D\u59CB\u503C, \u4E5F\u5C31\u662F ",paraId:25,tocIndex:4},{value:"innerRef.current?.openModal('edit', record)",paraId:25,tocIndex:4},{value:" \u91CC\u7684 record.",paraId:25,tocIndex:4},{value:"\u5220\u9664\u529F\u80FD\u4E0E\u4E0A\u6587\u4E2D\u7684 ",paraId:26,tocIndex:5},{value:"request",paraId:26,tocIndex:5},{value:" \u5C5E\u6027\u975E\u5E38\u76F8\u4F3C, ProTable \u63D0\u4F9B\u4E86\u4E00\u4E2A ",paraId:26,tocIndex:5},{value:"delFunction",paraId:26,tocIndex:5},{value:" \u5C5E\u6027, \u53EA\u9700\u8981\u4F20\u5165\u4E00\u4E2A\u5220\u9664\u51FD\u6570, ProTable \u5C31\u5E2E\u6211\u4EEC\u505A\u597D\u4E86\u591A\u9009\u5220\u9664\u548C\u884C\u4E0A\u5220\u9664\u7684\u529F\u80FD,",paraId:26,tocIndex:5},{value:"\u5220\u9664\u51FD\u6570\u540C\u6837\u8FD4\u56DE\u4E00\u4E2A promise, \u53C2\u6570\u662F\u6240\u9009\u884C\u7684 id \u6570\u7EC4.",paraId:27,tocIndex:5},{value:"\u53E6\u5916\u8981\u652F\u6301\u591A\u9009\u5220\u9664\u8FD8\u9700\u8981\u5F00\u542F\u884C\u9009\u62E9\u529F\u80FD.",paraId:28,tocIndex:5},{value:`<ProTable
  ...
  delFunction={mockDetroy}
  rowSelection={{}}
/>
`,paraId:29,tocIndex:5},{value:"\u884C\u4E0A\u5220\u9664\u7684\u529F\u80FD\u9ED8\u8BA4\u662F\u5173\u95ED\u7684, \u662F\u4E3A\u4E86\u8282\u7701\u5217\u7684\u6A2A\u5411\u7A7A\u95F4, \u53EF\u4EE5\u5728 columns \u91CC\u5355\u72EC\u5F00\u542F.",paraId:30,tocIndex:5},{value:`// columns
{
  title: '\u64CD\u4F5C',
  valueType: 'option', // valueType \u8BBE\u4E3A option \u4EE3\u8868\u662F\u64CD\u4F5C\u5217
  render: (text, record, index, actionRef, innerRef) => [
    <LinkButton
      key={1}
      onClick={() => innerRef.current?.openModal('edit', record)}
    >
      \u7F16\u8F91
    </LinkButton>,
  ],
  // boolean\u6216\u51FD\u6570
  enableDelete: true,
  enableDelete: () => ({
    disabled: true,
    visible: true,
    danger: true
  }),
},
`,paraId:31,tocIndex:5},{value:"ProTable \u540C\u6837\u652F\u6301 valueType, \u53EA\u662F\u4E0E SchemaForm \u4E0D\u540C\u7684\u662F, ProTable \u7684 valueType \u4E3B\u8981\u662F\u7528\u4E8E\u663E\u793A. \u6BD4\u5982\u5F53\u6307\u5B9A ",paraId:32,tocIndex:6},{value:"date",paraId:32,tocIndex:6},{value:" \u7C7B\u578B\u65F6, \u5F53\u540E\u53F0\u8FD4\u56DE\u4E00\u4E2A\u65F6\u95F4\u6233\u65F6, \u8868\u683C\u4E2D\u4F1A\u81EA\u52A8\u663E\u793A\u6210\u65F6\u95F4.",paraId:32,tocIndex:6},{value:"\u5728 ProTable \u7684 column \u91CC",paraId:33,tocIndex:7},{value:"render",paraId:33,tocIndex:7},{value:"\u8DDF",paraId:33,tocIndex:7},{value:"renderText",paraId:33,tocIndex:7},{value:"\u5F88\u5BB9\u6613\u6DF7\u6DC6.",paraId:33,tocIndex:7},{value:"renderText",paraId:34,tocIndex:7},{value:"\u66F4\u63A5\u8FD1\u4E8E Antd Table \u7684 render, \u4F46\u662F\u5FC5\u9700\u8FD4\u56DE string. \u6700\u7EC8\u5728\u8868\u683C\u4E0A\u663E\u793A\u7684\u65F6\u5019\u4F1A\u628A\u7701\u7565\u53F7, \u590D\u5236\u56FE\u6807\u7B49\u5185\u5BB9\u62FC\u63A5\u4E0A\u53BB.",paraId:34,tocIndex:7},{value:"render",paraId:35,tocIndex:7},{value:"\u53EF\u4EE5\u5B8C\u5168\u81EA\u5B9A\u4E49\u5185\u5BB9\u7684\u663E\u793A. \u4F46\u662F\u5B83\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F",paraId:35,tocIndex:7},{value:"dom",paraId:35,tocIndex:7},{value:"\u800C\u4E0D\u662F",paraId:35,tocIndex:7},{value:"text",paraId:35,tocIndex:7},{value:", \u8FD9\u4E2A\u9700\u8981\u6CE8\u610F. \u8FD9\u4E2A dom \u91CC\u5305\u542B\u4E86\u7701\u7565\u53F7\u548C\u590D\u5236\u56FE\u6807\u7B49\u5185\u5BB9.",paraId:35,tocIndex:7},{value:"formProps",paraId:36,tocIndex:8},{value:"\u5C5E\u6027\u53EF\u4EE5\u900F\u4F20 SchemaForm \u4E2D\u7684\u5C5E\u6027.",paraId:36,tocIndex:8},{value:"innerRef.current?.openModal('read', initialData)",paraId:37,tocIndex:9},{value:"\u53EF\u4EE5\u7528 formType \u5224\u65AD\u53EA\u6709\u5F53\u7F16\u8F91\u65F6\u624D\u8BF7\u6C42",paraId:38,tocIndex:10},{value:"onFinish \u56DE\u8C03\u6709\u4E09\u4E2A\u53C2\u6570, \u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u8868\u5355\u91CC\u6536\u96C6\u5230\u7684\u503C, \u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u8868\u5355\u7C7B\u578B, \u7B2C\u4E09\u4E2A\u53C2\u6570\u662F\u6253\u5F00\u5F39\u7A97\u65F6\u8D4B\u7ED9\u8868\u5355\u7684\u521D\u59CB\u503C(\u8FD9\u91CC\u53EF\u4EE5\u643A\u5E26\u4E00\u4E9B\u989D\u5916\u6570\u636E\u6BD4\u5982 id \u7B49).",paraId:39,tocIndex:11},{value:"\u4E5F\u53EF\u4EE5\u4E0D\u4F7F\u7528 request, \u5F53\u6210\u666E\u901A table \u6765\u4F7F\u7528. \u540C\u6837\u96C6\u6210\u4E86\u65B0\u589E\u7F16\u8F91\u529F\u80FD.",paraId:40,tocIndex:12},{value:"ProTable \u5185\u7F6E\u4E86\u5BFC\u51FA\u529F\u80FD, \u9ED8\u8BA4\u662F\u5173\u95ED, \u53EF\u901A\u8FC7 ",paraId:41,tocIndex:13},{value:"tableAlertOption",paraId:41,tocIndex:13},{value:" \u5C5E\u6027\u5F00\u542F.",paraId:41,tocIndex:13},{value:"column \u91CC\u589E\u52A0\u4E86 ",paraId:42,tocIndex:13},{value:"renderExport",paraId:42,tocIndex:13},{value:" \u81EA\u5B9A\u4E49\u5BFC\u51FA\u7684\u5185\u5BB9",paraId:42,tocIndex:13},{value:"\u4E0E",paraId:43,tocIndex:14},{value:"SchemaForm \u4E00\u6837",paraId:44,tocIndex:14},{value:", ProTable \u540C\u6837\u652F\u6301\u7EA6\u5B9A\u5F0F\u6570\u636E\u5904\u7406.",paraId:43,tocIndex:14},{value:"\u53C2\u6570",paraId:45,tocIndex:16},{value:"\u8BF4\u660E",paraId:45,tocIndex:16},{value:"\u7C7B\u578B",paraId:45,tocIndex:16},{value:"\u9ED8\u8BA4\u503C",paraId:45,tocIndex:16},{value:"request",paraId:45,tocIndex:16},{value:"\u83B7\u53D6 ",paraId:45,tocIndex:16},{value:"dataSource",paraId:45,tocIndex:16},{value:" \u7684\u65B9\u6CD5",paraId:45,tocIndex:16},{value:"(params?: { pageSize,current }, sort, filter) => Promise<{ data, success, total}>",paraId:45,tocIndex:16},{value:"--",paraId:45,tocIndex:16},{value:"actionRef",paraId:45,tocIndex:16},{value:"\u7528\u4E8E\u624B\u52A8\u89E6\u53D1 table \u7684 reload \u7B49\u64CD\u4F5C",paraId:45,tocIndex:16},{value:"MutableRefObject<ActionType>",paraId:45,tocIndex:16},{value:"--",paraId:45,tocIndex:16},{value:"innerRef",paraId:45,tocIndex:16},{value:"\u7528\u4E8E\u63A7\u5236\u5F39\u7A97\u7684\u6253\u5F00; \u83B7\u53D6 dataSource, \u603B\u9875\u6570\u7B49\u4FE1\u606F",paraId:45,tocIndex:16},{value:"MutableRefObject<InnerRefType>",paraId:45,tocIndex:16},{value:"--",paraId:45,tocIndex:16},{value:"delFunction",paraId:45,tocIndex:16},{value:"\u7528\u4E8E\u591A\u9009\u5220\u9664\u548C\u884C\u4E0A\u5220\u9664\u7684\u65B9\u6CD5",paraId:45,tocIndex:16},{value:"(ids) => Promise<void>",paraId:45,tocIndex:16},{value:"--",paraId:45,tocIndex:16},{value:"name",paraId:45,tocIndex:16},{value:"name \u88AB\u7528\u4E8E\u663E\u793A\u5728\u8868\u683C\u6807\u9898\u4E0A, \u5F39\u7A97\u7684\u6807\u9898\u4E0A, \u4EE5\u53CA\u5BFC\u51FA\u7684\u6587\u4EF6\u540D\u4E0A. \u4E5F\u53EF\u4E0D\u4F20. \u82E5\u8981\u5173\u95ED\u8868\u683C\u6807\u9898\u7684\u663E\u793A, \u53EF\u4EE5\u7528 headerTitle: false",paraId:45,tocIndex:16},{value:"string",paraId:45,tocIndex:16},{value:"--",paraId:45,tocIndex:16},{value:"noPadding",paraId:45,tocIndex:16},{value:"\u662F\u5426\u53BB\u6389 table \u5916\u7684\u7684 padding, \u4E00\u822C\u7528\u4E8E\u7EAF\u8868\u683C\u573A\u666F\u65F6",paraId:45,tocIndex:16},{value:"boolean",paraId:45,tocIndex:16},{value:"false",paraId:45,tocIndex:16},{value:"onFinish",paraId:45,tocIndex:16},{value:"\u70B9\u51FB\u5F39\u7A97\u786E\u8BA4\u6309\u94AE\u540E\u7684\u56DE\u8C03",paraId:45,tocIndex:16},{value:"(values, formType, formData) => Promise<any> | void",paraId:45,tocIndex:16},{value:"--",paraId:45,tocIndex:16},{value:"onOpen",paraId:45,tocIndex:16},{value:"\u6253\u5F00\u5F39\u7A97\u540E\u7684\u56DE\u8C03",paraId:45,tocIndex:16},{value:"(formType, formRef, formData) => Promise | void",paraId:45,tocIndex:16},{value:"--",paraId:45,tocIndex:16},{value:"tableAlertOption",paraId:45,tocIndex:16},{value:"tableAlertOption \u533A\u57DF\u7684\u9009\u9879, \u8FD9\u91CC\u9762\u96C6\u6210\u4E86\u5220\u9664, \u5BFC\u51FA\u7B49\u529F\u80FD",paraId:45,tocIndex:16},{value:"TableAlertOption",paraId:46,tocIndex:16},{value:"{ hideDelete: false, enableExport: false }",paraId:45,tocIndex:16},{value:"modalProps",paraId:45,tocIndex:16},{value:"\u4F20\u7ED9 Modal \u7684\u5C5E\u6027",paraId:45,tocIndex:16},{value:"ModalProps",paraId:45,tocIndex:16},{value:"--",paraId:45,tocIndex:16},{value:"formProps",paraId:45,tocIndex:16},{value:"\u4F20\u7ED9 SchemaForm \u7684\u5C5E\u6027",paraId:45,tocIndex:16},{value:"SchemaFormProps",paraId:47,tocIndex:16},{value:"--",paraId:45,tocIndex:16},{value:"\u53C2\u6570",paraId:48,tocIndex:17},{value:"\u8BF4\u660E",paraId:48,tocIndex:17},{value:"\u7C7B\u578B",paraId:48,tocIndex:17},{value:"\u9ED8\u8BA4\u503C",paraId:48,tocIndex:17},{value:"openModal",paraId:48,tocIndex:17},{value:"\u7528\u4E8E\u6253\u5F00\u5F39\u7A97; formType \u53EF\u7528\u4E8E\u5728 onFinish \u7684\u65F6\u5019\u5224\u65AD\u8868\u5355\u7C7B\u578B; ",paraId:48,tocIndex:17},{value:"innerRef.current?.openModal('edit', {name: 'jack', age: 18})",paraId:48,tocIndex:17},{value:"(formType: 'new' | 'edit' | 'read', initialValues) => void",paraId:48,tocIndex:17},{value:"--",paraId:48,tocIndex:17},{value:"setData",paraId:48,tocIndex:17},{value:"\u7528\u4E8E\u5B58\u50A8\u989D\u5916\u4FE1\u606F.",paraId:48,tocIndex:17},{value:"(vals: Record<string, any>) => void",paraId:48,tocIndex:17},{value:"--",paraId:48,tocIndex:17},{value:"data",paraId:48,tocIndex:17},{value:"\u83B7\u53D6\u5B58\u50A8\u7684\u989D\u5916\u4FE1\u606F.",paraId:48,tocIndex:17},{value:"Record<string, any>",paraId:48,tocIndex:17},{value:"--",paraId:48,tocIndex:17},{value:"dataSource",paraId:48,tocIndex:17},{value:"\u83B7\u53D6 request \u8BF7\u6C42\u5230\u7684 dataSource",paraId:48,tocIndex:17},{value:"any[]",paraId:48,tocIndex:17},{value:"--",paraId:48,tocIndex:17},{value:"total",paraId:48,tocIndex:17},{value:"\u83B7\u53D6 request \u8BF7\u6C42\u5230\u7684\u6570\u636E\u603B\u6570",paraId:48,tocIndex:17},{value:"number",paraId:48,tocIndex:17},{value:"--",paraId:48,tocIndex:17},{value:"params",paraId:48,tocIndex:17},{value:"\u83B7\u53D6 request \u7684\u8BF7\u6C42\u53C2\u6570",paraId:48,tocIndex:17},{value:"Record<string, any>",paraId:48,tocIndex:17},{value:"--",paraId:48,tocIndex:17},{value:"\u540D\u79F0",paraId:49,tocIndex:18},{value:"\u8BF4\u660E",paraId:49,tocIndex:18},{value:"\u7C7B\u578B",paraId:49,tocIndex:18},{value:"\u9ED8\u8BA4",paraId:49,tocIndex:18},{value:"hideDelete",paraId:49,tocIndex:18},{value:"\u662F\u5426\u9690\u85CF\u52FE\u9009\u5220\u9664\u529F\u80FD",paraId:49,tocIndex:18},{value:"boolean",paraId:49,tocIndex:18},{value:"false",paraId:49,tocIndex:18},{value:"enableExport",paraId:49,tocIndex:18},{value:"\u662F\u5426\u5F00\u542F\u5BFC\u51FA\u529F\u80FD",paraId:49,tocIndex:18},{value:"boolean",paraId:49,tocIndex:18},{value:"false",paraId:49,tocIndex:18},{value:"exportName",paraId:49,tocIndex:18},{value:"\u5BFC\u51FA\u6587\u4EF6\u7684\u540D\u5B57",paraId:49,tocIndex:18},{value:"string",paraId:49,tocIndex:18},{value:"\u9ED8\u8BA4\u4EE5 ProTable \u7684 name \u5C5E\u6027\u4E3A\u5BFC\u51FA\u6587\u4EF6\u540D",paraId:49,tocIndex:18},{value:"actions",paraId:49,tocIndex:18},{value:"\u5B9A\u4E49\u8BE5\u533A\u57DF\u989D\u5916\u7684\u6309\u94AE",paraId:49,tocIndex:18},{value:"Array[ReactNode]",paraId:49,tocIndex:18},{value:"-",paraId:49,tocIndex:18},{value:"\u66F4\u591A\u8BF7\u67E5\u770B",paraId:50,tocIndex:19},{value:"\u6587\u6863",paraId:50,tocIndex:19},{value:"\u53EA\u5217\u4E3E\u5728 Table \u6A21\u5F0F\u4E0B\u7279\u6709\u7684. Form \u6A21\u5F0F\u7684\u8BF7\u53C2\u8003",paraId:51,tocIndex:19},{value:"SchemaForm",paraId:52,tocIndex:19},{value:"\u53C2\u6570",paraId:53,tocIndex:19},{value:"\u8BF4\u660E",paraId:53,tocIndex:19},{value:"\u7C7B\u578B",paraId:53,tocIndex:19},{value:"dataIndex",paraId:53,tocIndex:19},{value:"\u8868\u683C\u5185\u7684\u53D6\u503C\u5B57\u6BB5",paraId:53,tocIndex:19},{value:"string",paraId:53,tocIndex:19},{value:"valueType",paraId:53,tocIndex:19},{value:"\u6570\u636E\u7684\u6E32\u6E32\u67D3\u65B9\u5F0F\uFF0C\u6BD4\u5982\u6307\u5B9A date \u5C31\u4F1A\u81EA\u52A8\u65F6\u95F4\u5904\u7406",paraId:53,tocIndex:19},{value:"ProFieldValueType",paraId:53,tocIndex:19},{value:"title",paraId:53,tocIndex:19},{value:"\u6807\u9898\u7684\u5185\u5BB9",paraId:53,tocIndex:19},{value:"ReactNode",paraId:53,tocIndex:19},{value:" | ",paraId:53,tocIndex:19},{value:"(props,type,dom)=> ReactNode",paraId:53,tocIndex:19},{value:"ellipsis",paraId:53,tocIndex:19},{value:"\u662F\u5426\u81EA\u52A8\u7F29\u7565",paraId:53,tocIndex:19},{value:"boolean",paraId:53,tocIndex:19},{value:"copyable",paraId:53,tocIndex:19},{value:"\u662F\u5426\u652F\u6301\u590D\u5236",paraId:53,tocIndex:19},{value:"boolean",paraId:53,tocIndex:19},{value:"valueEnum",paraId:53,tocIndex:19},{value:"\u652F\u6301 object \u548C Map\uFF0CMap \u662F\u652F\u6301\u5176\u4ED6\u57FA\u7840\u7C7B\u578B\u4F5C\u4E3A key",paraId:53,tocIndex:19},{value:"(Entity)=> ValueEnum",paraId:53,tocIndex:19},{value:" | ",paraId:53,tocIndex:19},{value:"ValueEnum",paraId:53,tocIndex:19},{value:"renderExport",paraId:53,tocIndex:19},{value:"\u5B9A\u4E49\u524D\u7AEF\u5BFC\u51FA\u7684\u5185\u5BB9",paraId:53,tocIndex:19},{value:"(text, record, index) => string",paraId:53,tocIndex:19},{value:"renderText",paraId:53,tocIndex:19},{value:"\u7528\u4E8E\u81EA\u5B9A\u4E49\u8868\u683C\u4E0A\u7684\u6587\u5B57\u663E\u793A; renderText \u4F1A\u4FDD\u7559\u7701\u7565\u53F7, \u56FE\u6807\u7B49",paraId:53,tocIndex:19},{value:"(text, record) => string",paraId:53,tocIndex:19},{value:"render",paraId:53,tocIndex:19},{value:"\u7528\u4E8E\u5B8C\u5168\u81EA\u5B9A\u4E49\u8868\u683C\u4E0A\u7684\u663E\u793A; \u5B83\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A ReactNode, \u5B83\u91CC\u9762\u5305\u542B\u4E86\u7701\u7565\u53F7, \u590D\u5236\u56FE\u6807\u7B49\u5185\u5BB9.",paraId:53,tocIndex:19},{value:"(dom, record, index) => any",paraId:53,tocIndex:19},{value:"hideInForm",paraId:53,tocIndex:19},{value:"\u5728 Form \u4E2D\u9690\u85CF",paraId:53,tocIndex:19},{value:"boolean",paraId:53,tocIndex:19},{value:"hideInTable",paraId:53,tocIndex:19},{value:"\u5728 Table \u4E2D\u9690\u85CF",paraId:53,tocIndex:19},{value:"boolean",paraId:53,tocIndex:19},{value:"hideInSearch",paraId:53,tocIndex:19},{value:"\u5728 Search \u4E2D\u9690\u85CF",paraId:53,tocIndex:19},{value:"boolean",paraId:53,tocIndex:19},{value:"enableDelete",paraId:53,tocIndex:19},{value:"\u7528\u4E8E\u5F00\u542F\u884C\u4E0A\u5220\u9664\u529F\u80FD",paraId:53,tocIndex:19},{value:"boolean",paraId:53,tocIndex:19},{value:" | ",paraId:53,tocIndex:19},{value:"(record, index) => {disabled?: boolean; visible?: boolean; danger?: boolean }",paraId:53,tocIndex:19}],q={"schemaform-demo-basic":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(216)]).then(e.bind(e,22308))})),asset:{type:"BLOCK",id:"schemaform-demo-basic",refAtomIds:["SchemaForm"],dependencies:{"index.tsx":{type:"FILE",value:e(27707).Z},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},antd:{type:"NPM",value:"4.24.13"},"columns.ts":{type:"FILE",value:e(38779).Z}}}},"schemaform-demo-valuetype":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(216)]).then(e.bind(e,23292))})),asset:{type:"BLOCK",id:"schemaform-demo-valuetype",refAtomIds:["SchemaForm"],dependencies:{"index.tsx":{type:"FILE",value:e(47442).Z},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.ts":{type:"FILE",value:e(94887).Z}}}},"schemaform-demo-horizontal":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(216)]).then(e.bind(e,62907))})),asset:{type:"BLOCK",id:"schemaform-demo-horizontal",refAtomIds:["SchemaForm"],dependencies:{"index.tsx":{type:"FILE",value:e(19386).Z},antd:{type:"NPM",value:"4.24.13"},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.ts":{type:"FILE",value:e(69931).Z}}}},"schemaform-demo-grid":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(216)]).then(e.bind(e,901))})),asset:{type:"BLOCK",id:"schemaform-demo-grid",refAtomIds:["SchemaForm"],dependencies:{"index.tsx":{type:"FILE",value:e(18370).Z},antd:{type:"NPM",value:"4.24.13"},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.ts":{type:"FILE",value:e(85186).Z}}}},"schemaform-demo-gridhorizontalinit":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(216)]).then(e.bind(e,71655))})),asset:{type:"BLOCK",id:"schemaform-demo-gridhorizontalinit",refAtomIds:["SchemaForm"],dependencies:{"index.tsx":{type:"FILE",value:e(49796).Z},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.tsx":{type:"FILE",value:e(86421).Z}}}},"schemaform-demo-gridhorizontal":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(216)]).then(e.bind(e,6222))})),asset:{type:"BLOCK",id:"schemaform-demo-gridhorizontal",refAtomIds:["SchemaForm"],dependencies:{"index.tsx":{type:"FILE",value:e(68098).Z},antd:{type:"NPM",value:"4.24.13"},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.tsx":{type:"FILE",value:e(67313).Z}}}},"schemaform-demo-placeholder":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(216)]).then(e.bind(e,18546))})),asset:{type:"BLOCK",id:"schemaform-demo-placeholder",refAtomIds:["SchemaForm"],dependencies:{"index.tsx":{type:"FILE",value:e(70716).Z},antd:{type:"NPM",value:"4.24.13"},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.ts":{type:"FILE",value:e(88802).Z}}}},"schemaform-demo-readonly":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(216)]).then(e.bind(e,9960))})),asset:{type:"BLOCK",id:"schemaform-demo-readonly",refAtomIds:["SchemaForm"],dependencies:{"index.tsx":{type:"FILE",value:e(78635).Z},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.ts":{type:"FILE",value:e(5760).Z}}}},"schemaform-demo-dependency":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(216)]).then(e.bind(e,84300))})),asset:{type:"BLOCK",id:"schemaform-demo-dependency",refAtomIds:["SchemaForm"],dependencies:{"index.tsx":{type:"FILE",value:e(74716).Z},"react-admin-kit":{type:"NPM",value:"0.3.1"}}}},"schemaform-demo-initvalue":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(216)]).then(e.bind(e,91944))})),asset:{type:"BLOCK",id:"schemaform-demo-initvalue",refAtomIds:["SchemaForm"],dependencies:{"index.tsx":{type:"FILE",value:e(86950).Z},antd:{type:"NPM",value:"4.24.13"},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.tsx":{type:"FILE",value:e(71813).Z}}}},"schemaform-demo-submitter":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(216)]).then(e.bind(e,30715))})),asset:{type:"BLOCK",id:"schemaform-demo-submitter",refAtomIds:["SchemaForm"],dependencies:{"index.tsx":{type:"FILE",value:e(11308).Z},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.ts":{type:"FILE",value:e(38270).Z}}}},"schemaform-demo-submitterprops":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(216)]).then(e.bind(e,63306))})),asset:{type:"BLOCK",id:"schemaform-demo-submitterprops",refAtomIds:["SchemaForm"],dependencies:{"index.tsx":{type:"FILE",value:e(82148).Z},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.ts":{type:"FILE",value:e(38545).Z}}}},"schemaform-demo-embed":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(216)]).then(e.bind(e,48971))})),asset:{type:"BLOCK",id:"schemaform-demo-embed",refAtomIds:["SchemaForm"],dependencies:{"index.tsx":{type:"FILE",value:e(40708).Z},antd:{type:"NPM",value:"4.24.13"},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"baseColumns.ts":{type:"FILE",value:e(94357).Z},"businessColumns.tsx":{type:"FILE",value:e(48101).Z}}}},"schemaform-demo-group":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(216)]).then(e.bind(e,91440))})),asset:{type:"BLOCK",id:"schemaform-demo-group",refAtomIds:["SchemaForm"],dependencies:{"index.tsx":{type:"FILE",value:e(91398).Z},antd:{type:"NPM",value:"4.24.13"},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.ts":{type:"FILE",value:e(62459).Z}}}},"schemaform-demo-groupgrid":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(216)]).then(e.bind(e,60689))})),asset:{type:"BLOCK",id:"schemaform-demo-groupgrid",refAtomIds:["SchemaForm"],dependencies:{"index.tsx":{type:"FILE",value:e(70487).Z},antd:{type:"NPM",value:"4.24.13"},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.ts":{type:"FILE",value:e(74193).Z}}}},"schemaform-demo-groupgridhorizontal":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(216)]).then(e.bind(e,93996))})),asset:{type:"BLOCK",id:"schemaform-demo-groupgridhorizontal",refAtomIds:["SchemaForm"],dependencies:{"index.tsx":{type:"FILE",value:e(63924).Z},antd:{type:"NPM",value:"4.24.13"},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.tsx":{type:"FILE",value:e(94187).Z}}}},"schemaform-demo-datasubmit":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(216)]).then(e.bind(e,96749))})),asset:{type:"BLOCK",id:"schemaform-demo-datasubmit",refAtomIds:["SchemaForm"],dependencies:{"index.tsx":{type:"FILE",value:e(13625).Z},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"}}}},"schemaform-demo-convention":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(216)]).then(e.bind(e,47010))})),asset:{type:"BLOCK",id:"schemaform-demo-convention",refAtomIds:["SchemaForm"],dependencies:{"index.tsx":{type:"FILE",value:e(22456).Z},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.ts":{type:"FILE",value:e(4972).Z}}}},"schemaform-demo-conventionvaluebasename":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(216)]).then(e.bind(e,6191))})),asset:{type:"BLOCK",id:"schemaform-demo-conventionvaluebasename",refAtomIds:["SchemaForm"],dependencies:{"index.tsx":{type:"FILE",value:e(73399).Z},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.ts":{type:"FILE",value:e(40877).Z}}}},"schemaform-demo-innerrefdata":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(216)]).then(e.bind(e,64857))})),asset:{type:"BLOCK",id:"schemaform-demo-innerrefdata",refAtomIds:["SchemaForm"],dependencies:{"index.tsx":{type:"FILE",value:e(81684).Z},react:{type:"NPM",value:"18.2.0"},"react-admin-kit":{type:"NPM",value:"0.3.1"},"columns.tsx":{type:"FILE",value:e(28540).Z}}}}},ae={title:"SchemaForm - JSON \u8868\u5355",toc:"content",filename:"src/SchemaForm/index.md",atomId:"SchemaForm",lastUpdated:1693560993e3,nav:{title:"\u7EC4\u4EF6",order:1},group:{title:"\u6838\u5FC3\u7EC4\u4EF6",order:0},order:0,description:"\u901A\u8FC7\u4E00\u4E2A\u914D\u7F6E\u5F0F\u7684 schema \u6765\u751F\u6210\u8868\u5355 (Form), \u7B80\u5355\u9AD8\u6548."},Ce=[{id:"schemaform---json-\u8868\u5355",depth:1,title:"SchemaForm - JSON \u8868\u5355"},{id:"\u4E00\u4E2A\u57FA\u672C\u7684-schema-\u8868\u683C-\u9ED8\u8BA4\u662F\u7EB5\u5411\u6A21\u5F0F-vertical",depth:3,title:"\u4E00\u4E2A\u57FA\u672C\u7684 Schema \u8868\u683C (\u9ED8\u8BA4\u662F\u7EB5\u5411\u6A21\u5F0F vertical)"},{id:"valuetype",depth:3,title:"valueType"},{id:"\u6C34\u5E73\u6A21\u5F0F-horizontal",depth:3,title:"\u6C34\u5E73\u6A21\u5F0F horizontal"},{id:"-grid-\u6A21\u5F0F-\u63A8\u8350",depth:3,title:"\u2B50 grid \u6A21\u5F0F (\u63A8\u8350)"},{id:"grid-\u6A21\u5F0F-\u6C34\u5E73\u65B9\u5411",depth:3,title:"grid \u6A21\u5F0F (\u6C34\u5E73\u65B9\u5411)"},{id:"\u7A7A\u767D\u5360\u4F4D",depth:3,title:"\u7A7A\u767D\u5360\u4F4D"},{id:"\u53EA\u8BFB\u6A21\u5F0F",depth:3,title:"\u53EA\u8BFB\u6A21\u5F0F"},{id:"\u8868\u5355\u9879\u8054\u52A8",depth:3,title:"\u8868\u5355\u9879\u8054\u52A8"},{id:"\u521D\u59CB\u503C\u548C\u8868\u5355\u9879\u8D4B\u503C",depth:3,title:"\u521D\u59CB\u503C\u548C\u8868\u5355\u9879\u8D4B\u503C"},{id:"\u63D0\u4EA4\u6309\u94AE-submitter",depth:3,title:"\u63D0\u4EA4\u6309\u94AE submitter"},{id:"-\u5185\u5D4C\u6A21\u5F0F-embed",depth:3,title:"\u2B50 \u5185\u5D4C\u6A21\u5F0F (Embed)"},{id:"\u5206\u7EC4-group",depth:3,title:"\u5206\u7EC4 (Group)"},{id:"\u5206\u7EC4-grid-\u6A21\u5F0F",depth:3,title:"\u5206\u7EC4 (Grid \u6A21\u5F0F)"},{id:"\u5206\u7EC4-grid-\u6A21\u5F0F-\u5DE6\u53F3\u5E03\u5C40",depth:3,title:"\u5206\u7EC4 (Grid \u6A21\u5F0F) \u5DE6\u53F3\u5E03\u5C40"},{id:"\u6570\u636E\u5904\u7406\u548C\u6536\u96C6---convertvalue-transform",depth:3,title:"\u6570\u636E\u5904\u7406\u548C\u6536\u96C6 - ConvertValue-Transform"},{id:"-\u6570\u636E\u5904\u7406\u548C\u6536\u96C6---\u7EA6\u5B9A\u5F0F",depth:3,title:"\u2B50 \u6570\u636E\u5904\u7406\u548C\u6536\u96C6 - \u7EA6\u5B9A\u5F0F"},{id:"\u5229\u7528-innerref-\u5B58\u50A8\u989D\u5916\u4FE1\u606F",depth:3,title:"\u5229\u7528 innerRef \u5B58\u50A8\u989D\u5916\u4FE1\u606F"},{id:"api",depth:3,title:"API"},{id:"schemaform",depth:3,title:"SchemaForm"},{id:"innerref",depth:3,title:"InnerRef"},{id:"column",depth:3,title:"Column"}],Le=[{value:"\u901A\u8FC7\u4E00\u4E2A\u914D\u7F6E\u5F0F\u7684 schema \u6765\u751F\u6210\u8868\u5355. schema \u4E0E antd table \u7684 columns \u975E\u5E38\u7C7B\u4F3C.",paraId:0,tocIndex:0},{value:"valueType \u662F schema \u91CC\u7684\u4E00\u4E2A\u975E\u5E38\u91CD\u8981\u7684\u5B57\u6BB5, \u901A\u8FC7\u6307\u5B9A valueType \u5C31\u80FD\u6620\u5C04\u51FA\u4E0D\u540C\u7684\u8868\u5355\u9879. \u5E38\u7528\u7684 valueType \u6709 ",paraId:1,tocIndex:2},{value:"money",paraId:1,tocIndex:2},{value:" ",paraId:1,tocIndex:2},{value:"digit",paraId:1,tocIndex:2},{value:" ",paraId:1,tocIndex:2},{value:"textarea",paraId:1,tocIndex:2},{value:" ",paraId:1,tocIndex:2},{value:"date",paraId:1,tocIndex:2},{value:" ",paraId:1,tocIndex:2},{value:"dateRange",paraId:1,tocIndex:2},{value:" ",paraId:1,tocIndex:2},{value:"select",paraId:1,tocIndex:2},{value:" ",paraId:1,tocIndex:2},{value:"radio",paraId:1,tocIndex:2},{value:" \u7B49, \u5B8C\u6574\u7684\u5217\u8868\u89C1",paraId:1,tocIndex:2},{value:"\u8FD9\u91CC",paraId:1,tocIndex:2},{value:". \u5F53 valueType \u6CA1\u6709\u6307\u5B9A\u65F6, \u9ED8\u8BA4\u6E32\u67D3\u7684\u8868\u5355\u9879\u662F Input \u7EC4\u4EF6.",paraId:1,tocIndex:2},{value:"\u4E00\u4E2A schema \u5B9E\u9645\u4E0A\u5C31\u662F\u5BF9\u5E94\u4E00\u4E2A Form.Item, Form.Item \u91CC\u5305\u88F9\u7684\u7EC4\u4EF6\u7EDF\u79F0\u4E3A Field. \u5982\u679C\u8981\u7ED9 Field \u4F20\u9012\u5C5E\u6027, \u53EF\u4EE5\u7528 ",paraId:2},{value:"fieldProps",paraId:2},{value:".",paraId:2},{value:`{
  valueType: 'money',
  // \u4F20\u9012\u7ED9 InputNumber \u7684\u5C5E\u6027
  fieldProps: {
    precision: 2,
    style: { width: '80%' },
  },
},
{
  valueType: 'select',
  // \u4F20\u9012\u7ED9 Select \u7EC4\u4EF6\u7684\u5C5E\u6027
  fieldProps: {
    options: [
      { label: '\u9009\u62E91', value: 1 },
      { label: '\u9009\u62E92', value: 2 },
    ],
  },
}
`,paraId:3},{value:"\u800C ",paraId:4},{value:"formItemProps",paraId:4},{value:" \u662F\u4F20\u9012\u7ED9 Form.Item \u7684\u5C5E\u6027, \u6BD4\u5982\u662F\u5426\u5FC5\u9009:",paraId:4},{value:`{
  formItemProps: {
    rules: [
      {
        required: true,
      },
    ],
  },
}
`,paraId:5},{value:"\u5982\u679C valueType \u4E0D\u80FD\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42, \u53EF\u4EE5\u4F7F\u7528 ",paraId:6},{value:"renderFormItem",paraId:6},{value:" \u5B8C\u5168\u81EA\u5B9A\u4E49\u8868\u5355\u9879, \u8FD4\u56DE\u7684\u7EC4\u4EF6\u9700\u8981\u6EE1\u8DB3 Form.Item \u7684\u89C4\u8303, \u5373\u7EC4\u4EF6\u80FD\u63A5\u53D7 value \u548C onChange \u5C5E\u6027.",paraId:6},{value:`{
  renderFormItem: (schema, config, form) => {
    return <MyComp />;
  };
}
`,paraId:7},{value:"grid \u6A21\u5F0F\u53EF\u4EE5\u4EFB\u610F\u63A7\u5236\u6BCF\u4E2A FormItem \u6240\u5360\u7684\u7A7A\u95F4",paraId:8,tocIndex:4},{value:"\u5F53\u8BBE\u6210\u6C34\u5E73\u65B9\u5411\u65F6, \u5982\u679C\u4E0D\u540C\u884C\u6240\u5360\u7684\u7A7A\u95F4\u4E0D\u540C, \u8868\u5355\u9879 label \u7684\u5BBD\u5EA6\u53EF\u80FD\u4F1A\u4E0D\u4E00\u81F4.",paraId:9,tocIndex:5},{value:"\u4EE5\u4E0B\u9762\u8FD9\u4E2A\u4F8B\u5B50\u4E3A\u4F8B, \u7B2C\u4E00\u884C\u8868\u5355\u9879\u72EC\u5360 24, \u7B2C\u4E8C\u884C\u6BCF\u4E2A\u8868\u5355\u9879\u5360 8, \u7B2C\u4E09\u884C\u8868\u5355\u9879\u5360 16. \u9ED8\u8BA4\u72B6\u6001\u4E0B\u4ED6\u4EEC\u7684 label \u5BBD\u5EA6\u4F1A\u4E0D\u4E00\u81F4.",paraId:10,tocIndex:5},{value:"\u5982\u679C\u8981\u5B9E\u73B0 label \u5BBD\u5EA6\u56FA\u5B9A\u5C31\u9700\u8981\u5BF9\u6BCF\u4E2A\u8868\u5355\u9879\u5355\u72EC\u6307\u5B9A ",paraId:11},{value:"labelCol",paraId:11},{value:".",paraId:11},{value:"labelCol",paraId:12},{value:"\u53EF\u4EE5\u5728 SchemaForm \u4E0A\u6307\u5B9A, \u4E5F\u53EF\u4EE5\u5728 schema \u7684 formItemProps \u91CC\u6307\u5B9A, \u540E\u8005\u7684\u4F18\u5148\u7EA7\u66F4\u9AD8.",paraId:12},{value:"labelCol",paraId:13},{value:"\u7684\u503C\u662F\u4EE5\u6240\u5728\u8868\u5355\u9879\u7684\u5BBD\u5EA6\u4E3A 24 \u5206\u6765\u7B97\u51FA\u7684\u6BD4\u4F8B\u503C. \u6240\u4EE5\u5982\u679C\u8868\u5355\u9879\u7684\u5BBD\u5EA6\u4E0D\u540C, ",paraId:13},{value:"labelCol",paraId:13},{value:"\u7684\u503C\u9700\u8981\u7ECF\u8FC7\u4E00\u5B9A\u7684\u8BA1\u7B97. \u4E00\u822C\u5148\u4EE5\u6700\u7A84\u7684\u8868\u5355\u9879\u4E3A\u57FA\u51C6, \u8BBE\u5B9A\u597D\u5B83\u7684",paraId:13},{value:"labelCol",paraId:13},{value:", \u518D\u8BA1\u7B97\u5176\u5B83\u8868\u5355\u9879\u7684",paraId:13},{value:"labelCol",paraId:13},{value:", \u6765\u4F7F\u4ED6\u4EEC\u7684 label \u5BBD\u4FDD\u6301\u76F8\u7B49.",paraId:13},{value:"\u4EE5\u8FD9\u4E2A\u4F8B\u5B50\u4E3A\u4F8B, \u5148\u8BBE\u5B9A\u7B2C\u4E8C\u884C\u7684",paraId:14},{value:"labelCol",paraId:14},{value:"\u4E3A",paraId:14},{value:"{span: 9}",paraId:14},{value:", \u53EF\u7B97\u51FA label \u7684\u5BBD\u5EA6\u4E3A 9/24 * 8 = 3. \u4EE3\u8868\u5728\u6574\u884C 24 \u4EFD\u4E2D\u5360 3 \u4EFD.",paraId:14},{value:"\u6240\u4EE5\u7B2C\u4E00\u884C\u7684",paraId:15},{value:"labelCol",paraId:15},{value:"\u53EF\u4EE5\u8BBE\u6210",paraId:15},{value:"{span: 3}",paraId:15},{value:"\u7B2C\u4E09\u884C\u56E0\u4E3A\u8868\u5355\u9879\u5360 16 \u4EFD, \u6240\u4EE5",paraId:16},{value:"labelCol",paraId:16},{value:"\u5E94\u8BE5\u8BBE\u6210",paraId:16},{value:"{span: 4.5}",paraId:16},{value:". 4.5/24 * 16 = 3. \u4F46\u662F span \u503C\u53EA\u80FD\u662F\u6574\u6570. \u53EF\u4EE5\u6539\u4F20 flex, ",paraId:16},{value:"flex: 0 0 18.75%",paraId:16},{value:". 3/16 = 0.1875. ",paraId:16},{value:"\u53C2\u8003 grid \u7EC4\u4EF6",paraId:16},{value:"\u9700\u8981\u5F3A\u5236\u6362\u884C\u65F6\u53EF\u7528\u7A7A\u767D\u5360\u4F4D.",paraId:17,tocIndex:6},{value:"\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u81EA\u5B9A\u4E49\u663E\u793A\u8D70\u7684",paraId:18,tocIndex:7},{value:"render",paraId:18,tocIndex:7},{value:"\u65B9\u6CD5.",paraId:18,tocIndex:7},{value:"\u7A7A\u767D\u5360\u4F4D\u8BF7\u4F7F\u7528",paraId:19,tocIndex:7},{value:"render: () => null",paraId:19,tocIndex:7},{value:"\u53EF\u4EE5\u4F7F\u7528 valueType='dependency'\u6765\u505A\u663E\u793A\u63A7\u5236, ",paraId:20,tocIndex:8},{value:"name",paraId:20,tocIndex:8},{value:"\u91CC\u7684\u503C\u662F\u9700\u8981\u76D1\u63A7\u7684\u8868\u5355\u9879.",paraId:20,tocIndex:8},{value:"submitter \u5C5E\u6027\u9ED8\u8BA4\u4E3A false, \u5F00\u542F\u540E\u53EF\u81EA\u52A8\u751F\u6210\u63D0\u4EA4\u6309\u94AE.",paraId:21,tocIndex:10},{value:"\u8FD8\u53EF\u4EE5\u7ED9\u751F\u6210\u7684\u6309\u94AE\u4F20\u9012\u5C5E\u6027.",paraId:22},{value:"\u5BF9\u4E8E\u590D\u6742\u8868\u5355, \u5185\u5D4C\u6A21\u5F0F\u53EF\u4EE5\u8BA9\u6BCF\u4E2A\u533A\u5757\u5355\u72EC\u8BBE\u7F6E\u5E03\u5C40, \u540C\u65F6\u901A\u8FC7\u8BBE\u7F6E",paraId:23,tocIndex:11},{value:"valueBaseName",paraId:23,tocIndex:11},{value:", \u6570\u636E\u4E5F\u53EF\u4EE5\u6536\u96C6\u5728\u5404\u81EA\u7684\u5BF9\u8C61\u91CC.",paraId:23,tocIndex:11},{value:"\u4EE5\u8FD9\u4E2A\u4F8B\u5B50\u4E3A, ",paraId:24,tocIndex:11},{value:"\u57FA\u672C\u4FE1\u606F",paraId:24,tocIndex:11},{value:"\u533A\u5757\u548C",paraId:24,tocIndex:11},{value:"\u4E1A\u52A1\u4FE1\u606F",paraId:24,tocIndex:11},{value:"\u533A\u5757\u53EF\u4EE5\u5355\u72EC\u8BBE\u7F6E\u5E03\u5C40. \u540C\u65F6\u8868\u5355\u63D0\u4EA4\u65F6\u7684\u6570\u636E\u4F1A\u6536\u96C6\u6210 ",paraId:24,tocIndex:11},{value:"{ base: { username: 'xx'}, business: { company: 'xx'}}",paraId:24,tocIndex:11},{value:"\u8FD9\u4E2A\u4F8B\u5B50\u540C\u65F6\u8FD8\u5C55\u793A\u4E86\u8868\u5355\u9879\u7684\u8D4B\u503C\u548C\u8868\u5355\u9879\u7684\u8054\u52A8\u63A7\u5236.",paraId:25},{value:"\u9009\u62E9\u4E86\u516C\u53F8\u540E, \u5730\u5740\u4F1A\u81EA\u52A8\u5E26\u51FA.",paraId:26},{value:"\u529E\u7406\u4E1A\u52A1\u9009\u62E9\u7B2C\u4E00\u9879, \u57FA\u672C\u4FE1\u606F\u4E2D\u7684\u8EAB\u4EFD\u8BC1\u9879\u4F1A\u9690\u85CF.",paraId:26},{value:"\u{1F449} \u9700\u8981\u6CE8\u610F\u7684\u662F, \u5728 embed \u6A21\u5F0F\u4E0B, valueBaseName \u7684\u5B9E\u73B0\u4EC5\u4EC5\u53EA\u662F\u628A schema \u4E2D\u7684 dataIndex \u8F6C\u6362\u6210\u6570\u7EC4. \u89C1 antd \u7684\u8FD9\u4E2A",paraId:27},{value:"\u4F8B\u5B50",paraId:27},{value:".",paraId:27},{value:"\u6240\u4EE5\u5728 setFieldsValue \u7684\u65F6\u5019, \u9700\u8981\u628A valueBaseName \u7684\u503C\u4E5F\u8003\u8651\u8FDB\u53BB.",paraId:28},{value:`setFieldsValue({ business: { company: 'xxx' } });
`,paraId:29},{value:"\u540C\u65F6\u5728\u505A\u8054\u52A8\u63A7\u5236\u65F6, \u5F53 valueType='dependency'\u5E76\u4E14 valueBaseName \u6709\u503C\u65F6, ",paraId:30},{value:"name",paraId:30},{value:" \u91CC\u7684\u503C\u5E94\u8BE5\u662F\u5957\u5D4C\u6570\u7EC4.",paraId:30},{value:`{ valueType: 'dependency', name: [['business', 'serviceName']] } \u{1F448}
`,paraId:31},{value:"\u5F53 valueType \u4E3A group \u65F6\u5373\u5F00\u542F\u5206\u7EC4\u6A21\u5F0F. \u6BCF\u4E2A group \u76F8\u5F53\u4E8E\u662F\u4E00\u4E2A\u533A\u5757, ",paraId:32,tocIndex:12},{value:"columns",paraId:32,tocIndex:12},{value:"\u91CC\u7684\u5185\u5BB9\u4F1A\u751F\u6210\u8868\u5355\u9879.",paraId:32,tocIndex:12},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8FD9\u4E9B\u8868\u5355\u9879\u662F\u4EE5",paraId:33,tocIndex:12},{value:"Space",paraId:33,tocIndex:12},{value:"\u7EC4\u4EF6\u5305\u88F9\u7684. \u6240\u4EE5\u4F60\u53EF\u4EE5\u5728 fieldProps \u91CC\u4F20\u5165 Space \u7684 ",paraId:33,tocIndex:12},{value:"api",paraId:33,tocIndex:12},{value:"\u5728\u5206\u7EC4\u6A21\u5F0F\u4E0B\u540C\u6837\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u8868\u5355\u9879\u7684\u5E03\u5C40, \u5373\u5F00\u542F grid \u6A21\u5F0F.",paraId:34,tocIndex:13},{value:"\u5206\u7EC4\u6A21\u5F0F\u4E0B\u5E03\u5C40\u5206\u4E3A\u4E24\u5C42, \u5916\u5C42(\u533A\u5757\u6807\u9898)\u548C\u5185\u5C42(columns \u91CC\u7684\u8868\u5355\u9879), \u6240\u4EE5 grid \u7684\u8BBE\u7F6E\u4E5F\u5206\u4E24\u5C42.",paraId:35,tocIndex:13},{value:"\u6709\u7684\u65F6\u5019\u540E\u7AEF\u8FD4\u56DE\u7684\u6570\u636E\u5E76\u4E0D\u80FD\u76F4\u63A5\u7528\u4E8E\u8868\u5355\u63A7\u4EF6, \u9700\u8981\u5148\u5BF9\u6570\u636E\u8FDB\u884C\u5904\u7406. (ConvertValue)",paraId:36,tocIndex:15},{value:"\u8FD8\u6709\u7684\u65F6\u5019, \u5728\u63D0\u4EA4\u8868\u5355\u65F6, \u8868\u5355\u6536\u96C6\u5230\u7684\u6570\u636E\u5E76\u4E0D\u80FD\u76F4\u63A5\u63D0\u4EA4\u7ED9\u540E\u53F0, \u9700\u8981\u5148\u5BF9\u6570\u636E\u8FDB\u884C\u5904\u7406. (Transform)",paraId:37,tocIndex:15},{value:"\u5F88\u5178\u578B\u7684\u573A\u666F\u5C31\u662F\u9644\u4EF6\u4E0A\u4F20.",paraId:38,tocIndex:15},{value:`// \u5047\u8BBE\u6709\u4E00\u4E2A\u9644\u4EF6\u4E0A\u4F20\u7EC4\u4EF6
{
  title: '\u9644\u4EF6\u5217\u8868',
  dataIndex: 'fileList',
  renderFormItem: () => <FormUpload />
}

// \u8BE5\u7EC4\u4EF6\u9700\u8981\u63A5\u6536\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61\u6570\u7EC4, \u5BF9\u8C61\u7684\u5B57\u6BB5\u662F name \u548C url.
[
  { name: '\u6587\u4EF6A', url: 'www.xx.com/xx' },
  { name: '\u6587\u4EF6B', url: 'www.xx.com/xx' },
];

// \u800C\u540E\u7AEF\u8FD4\u56DE\u7684\u6570\u636E\u662F fileName \u548C filePath:
[
  { id: 1, fileName: '\u6587\u4EF6A', filePath: 'www.xx.com/xx' },
  { id: 2, fileName: '\u6587\u4EF6B', filePath: 'www.xx.com/xx' },
];

// \u63D0\u4EA4\u7ED9\u540E\u7AEF\u7684\u6570\u636E\u9700\u8981\u662F fileIds: '1,2'

`,paraId:39,tocIndex:15},{value:"Schema \u4E2D\u7684 ",paraId:40,tocIndex:15},{value:"convertValue",paraId:40,tocIndex:15},{value:" \u548C ",paraId:40,tocIndex:15},{value:"tranform",paraId:40,tocIndex:15},{value:" \u5B57\u6BB5\u5C31\u53EF\u4EE5\u5E94\u5BF9\u8FD9\u4E2A\u573A\u666F.",paraId:40,tocIndex:15},{value:"\u9644\u4EF6\u4E0A\u4F20\u573A\u666F\u53EF\u4EE5\u4F7F\u7528\u884D\u751F\u7EC4\u4EF6\u4E2D\u7684 ",paraId:41},{value:"FormUpload \u7EC4\u4EF6",paraId:42},{value:".",paraId:41},{value:"\u8FD8\u6709\u4E00\u7C7B\u7EC4\u4EF6\u6211\u4EEC\u9664\u4E86\u8981\u83B7\u53D6\u5176 value \u5916\u8FD8\u8981\u83B7\u53D6\u5B83\u7684\u663E\u793A\u6587\u672C(label), \u50CF Select, TreeSelect \u7B49. \u7279\u522B\u662F\u5F53\u4E0B\u62C9\u7EC4\u4EF6\u6709\u5206\u9875\u65F6, \u5149\u9760 value \u65E0\u6CD5\u56DE\u663E\u51FA\u4E0B\u62C9\u5185\u5BB9, \u8FD9\u7C7B\u573A\u666F\u53EF\u4EE5\u901A\u8FC7\u5F00\u542F\u7EC4\u4EF6\u7684 ",paraId:43,tocIndex:16},{value:"labelInValue",paraId:43,tocIndex:16},{value:" \u5C5E\u6027\u6765\u89E3\u51B3, \u6B64\u65F6\u7EC4\u4EF6\u9700\u8981\u63A5\u6536\u4E00\u4E2A\u5BF9\u8C61 ",paraId:43,tocIndex:16},{value:"{ label: string, value: string}",paraId:43,tocIndex:16},{value:"\u4F46\u662F\u540E\u53F0\u4E00\u822C\u4F1A\u628A\u503C\u5206\u5F00\u7ED9\u524D\u7AEF, \u6BD4\u5982",paraId:44,tocIndex:16},{value:"{userId: 1, userName: 'jack'}",paraId:44,tocIndex:16},{value:", \u524D\u7AEF\u4F1A\u628A\u503C\u62FC\u6210\u5BF9\u8C61",paraId:44,tocIndex:16},{value:"{value: 1, label: 'jack'}",paraId:44,tocIndex:16},{value:"\u7528\u4E8E\u56DE\u663E, \u5728\u8868\u5355\u63D0\u4EA4\u65F6\u518D\u628A\u5BF9\u8C61\u62C6\u6210\u5B57\u7B26\u4E32.",paraId:44,tocIndex:16},{value:"\u8FD9\u4E00\u7C7B\u573A\u666F\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\u8FD8\u662F\u6BD4\u8F83\u5E38\u89C1\u7684. RAK \u60F3\u901A\u8FC7\u5BF9",paraId:45,tocIndex:16},{value:"dataIndex",paraId:45,tocIndex:16},{value:"\u7684\u7EA6\u5B9A\u6765\u7B80\u5316\u8FD9\u4E00\u6D41\u7A0B, \u7EA6\u5B9A\u5982\u4E0B:",paraId:45,tocIndex:16},{value:"\u{1F449} \u5982\u679C",paraId:46,tocIndex:16},{value:"dataIndex",paraId:46,tocIndex:16},{value:"\u4E2D\u5305\u542B\u9017\u53F7",paraId:46,tocIndex:16},{value:",",paraId:46,tocIndex:16},{value:", RAK \u4F1A\u6839\u636E\u9017\u53F7\u524D\u540E\u7684\u5B57\u6BB5\u6765\u81EA\u52A8\u62FC\u63A5\u6210\u4E00\u4E2A\u5BF9\u8C61, \u63D0\u4EA4\u65F6\u53C8\u4F1A\u81EA\u52A8\u5C06\u5176\u62C6\u5206. \u9017\u53F7\u524D\u7684\u5B57\u6BB5\u6620\u5C04\u6210 value, \u9017\u53F7\u540E\u7684\u5B57\u6BB5\u6620\u5C04\u6210 label.",paraId:46,tocIndex:16},{value:`// \u6BD4\u5982\u6709\u4E00\u4E2A\u8868\u5355\u9879\u5F00\u542F\u4E86labelInValue
{
  title: '\u7528\u6237',
  dataIndex: 'userId,userName',
  valueType: 'select',
  fieldProps: {
    labelInValue: true,
    options: [
      { value: 1, label: 'jack' },
      { value: 2, label: 'tom' },
    ]
  }
}

// RAK\u68C0\u6D4B\u5230dataIndex\u4E2D\u542B\u6709\u9017\u53F7, \u6240\u4EE5\u5728\u8868\u5355\u63D0\u4EA4\u65F6, values\u7684\u503C\u4F1A\u81EA\u52A8\u8F6C\u5316\u6210:
{
  userId: 1,
  userName: 'jack'
}

// \u4E0D\u9700\u8981\u5904\u7406\u5373\u53EF\u76F4\u63A5\u63D0\u4EA4\u7ED9\u540E\u7AEF.

// \u540C\u65F6\u5728\u8868\u5355\u56DE\u663E\u65F6\u65E0\u9700\u5BF9\u540E\u7AEF\u6570\u636E\u8FDB\u884C\u5904\u7406, \u76F4\u63A5\u4F7F\u7528initialValues\u6216setFieldsValue\u5373\u80FD\u56DE\u663E\u6570\u636E.
initialValues={{userId: 1, userName: 'jack'}}

formRef.current?.setFieldsValue({userId: 1, userName: 'jack'})
`,paraId:47,tocIndex:16},{value:"\u5982\u679C\u7EC4\u4EF6\u63A5\u53D7\u5BF9\u8C61\u7684\u952E\u503C\u4E0D\u662F value \u548C label, \u8FD8\u53EF\u4EE5\u901A\u8FC7\u4E0B\u5212\u7EBF\u81EA\u5B9A\u4E49. \u6BD4\u5982",paraId:48,tocIndex:16},{value:"userId,userName_id,name",paraId:48,tocIndex:16},{value:", RAK \u4F1A\u62C6\u5206\u4E0B\u5212\u7EBF, \u4E0B\u5212\u7EBF\u540E\u9762\u7684\u5B57\u6BB5\u540C\u6837\u7528\u9017\u53F7\u9694\u5F00. \u8FD9\u79CD\u60C5\u51B5\u7684\u8F93\u5165\u5982\u679C\u662F",paraId:48,tocIndex:16},{value:"{userId: 1, userName: 'jack'}",paraId:48,tocIndex:16},{value:"\u5219\u4F1A\u8F6C\u6362\u6210",paraId:48,tocIndex:16},{value:"{id: 1, name: 'jack'}",paraId:48,tocIndex:16},{value:"innerRef",paraId:49,tocIndex:17},{value:"\u662F RAK \u63D0\u4F9B\u7684\u4E00\u4E2A\u5DE5\u5177\u7C7B ref, \u91CC\u9762\u5305\u542B\u4E86\u4E00\u4E9B\u5B9E\u7528\u7684\u65B9\u6CD5\u53EF\u4EE5\u7528\u6765\u7B80\u5316\u4E00\u4E9B\u7279\u6B8A\u7684\u573A\u666F.",paraId:49,tocIndex:17},{value:"\u6BD4\u5982\u5BF9\u4E8E\u8868\u5355\u6765\u8BF4\u6709\u8FD9\u6837\u4E00\u4E2A\u573A\u666F:",paraId:50,tocIndex:17},{value:"\u6709\u7684\u65F6\u4FAF\u540E\u53F0\u9700\u8981\u524D\u7AEF\u63D0\u4EA4\u4E00\u4E9B\u4E0D\u5728\u8868\u5355\u5185\u7684\u989D\u5916\u7684\u4FE1\u606F, \u6BD4\u5982\u8868\u5355\u91CC\u6709\u4E00\u4E2A\u4EBA\u5458\u7684\u4E0B\u62C9\u6846\u7EC4\u4EF6, \u9664\u4E86 userId \u5916\u8FD8\u9700\u8981\u63D0\u4EA4 userCode \u7ED9\u540E\u53F0. \u4E00\u822C\u8FD9\u79CD\u60C5\u51B5\u6211\u4EEC\u4F1A\u5B9A\u4E49\u4E00\u4E2A\u53D8\u91CF, \u7136\u540E\u5728\u4E0B\u62C9\u6846\u7EC4\u4EF6\u7684 onChange \u4E8B\u4EF6\u91CC\u628A\u989D\u5916\u4FE1\u606F\u8D4B\u7ED9\u8FD9\u4E2A\u53D8\u91CF.",paraId:51,tocIndex:17},{value:"innerRef \u5C31\u53EF\u4EE5\u51CF\u5316\u8FD9\u4E00\u6D41\u7A0B, \u5728 fieldProps \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u91CC\u63D0\u4F9B\u4E86 innerRef, \u53EF\u4EE5\u7528 ",paraId:52,tocIndex:17},{value:"innerRef.current?.setData()",paraId:52,tocIndex:17},{value:"\u6765\u5B58\u50A8\u989D\u5916\u7684\u4FE1\u606F. setData \u548C react \u7684 setState \u4E00\u6837, \u53EA\u9700\u8981\u4F20\u5165\u5173\u5FC3\u7684\u5B57\u6BB5\u5C31\u53EF\u4EE5, \u4E0D\u4F1A\u8986\u76D6\u5176\u5B83\u7684\u5B57\u6BB5.",paraId:52,tocIndex:17},{value:"\u5BF9\u4E8E\u5185\u5D4C\u6A21\u5F0F (embed), innerRef \u53EF\u4EE5\u4F20\u5230 ProForm \u4E0A.",paraId:53},{value:`import { ProForm } from 'react-admin-kit';
import { useRef } from 'react'

const innerRef = useRef();
...

<ProForm
  innerRef={innerRef}
  ...
>
...
</>
`,paraId:54},{value:"\u9664\u4E86\u4EE5\u4E0A\u8FD9\u4E9B\u5C5E\u6027, \u8FD8\u53EF\u4EE5\u900F\u4F20 Ant Design \u7684\u5C5E\u6027, \u66F4\u591A\u53EF\u53C2\u8003",paraId:55},{value:"ProForm \u7684\u6587\u6863",paraId:55},{value:"\u4EE5\u53CA",paraId:55},{value:"Antd Form \u7684\u6587\u6863",paraId:55},{value:", \u4EE5\u4E0B\u5217\u53D6\u4E00\u4E9B\u5E38\u7528\u7684:",paraId:55},{value:"\u53C2\u6570",paraId:56},{value:"\u8BF4\u660E",paraId:56},{value:"\u7C7B\u578B",paraId:56},{value:"\u9ED8\u8BA4\u503C",paraId:56},{value:"layout",paraId:56},{value:"\u8868\u5355\u5E03\u5C40",paraId:56},{value:"horizontal",paraId:56},{value:" | ",paraId:56},{value:"vertical",paraId:56},{value:" | ",paraId:56},{value:"inline",paraId:56},{value:"vertical",paraId:56},{value:"grid",paraId:56},{value:"\u5F00\u542F grid \u6A21\u5F0F(\u63A8\u8350), \u53EF\u53C2\u8003\u4E0A\u9762\u7684\u4F8B\u5B50. \u5F00\u542F\u4E86 grid \u540E\u53EF\u4EE5\u901A\u8FC7 rowProps \u548C colProps \u5BF9\u4EFB\u610F\u8868\u5355\u9879\u8C03\u6574\u5E03\u5C40",paraId:56},{value:"Boolean",paraId:56},{value:"false",paraId:56},{value:"rowProps",paraId:56},{value:"\u5F00\u542F ",paraId:56},{value:"grid",paraId:56},{value:" \u6A21\u5F0F\u540E\u4F20\u9012\u7ED9 ",paraId:56},{value:"Row",paraId:56},{value:"\u7684\u5C5E\u6027. \u4F8B\u5982 {gutter: [16, 0]}",paraId:56},{value:"RowProps",paraId:56},{value:"{ gutter: 8 }",paraId:56},{value:"colProps",paraId:56},{value:"\u5F00\u542F ",paraId:56},{value:"grid",paraId:56},{value:" \u6A21\u5F0F\u540E\u4F20\u9012\u7ED9\u5168\u5C40\u8868\u5355\u9879\u7684\u5C5E\u6027. \u4F8B\u5982 {span: 8}\u4EE3\u8868\u6BCF\u884C\u4E09\u9879. \u540C\u65F6\u5728 columns \u91CC\u4E5F\u53EF\u4EE5\u5355\u72EC\u6307\u5B9A colProps, columns \u91CC\u7684 colProps \u4F1A\u8986\u76D6 form \u4E0A\u7684 colProps",paraId:56},{value:"ColProps",paraId:56},{value:"--",paraId:56},{value:"labelCol",paraId:56},{value:"\u4F20\u9012\u7ED9\u8868\u5355\u9879\u4E2D label \u7684\u5C5E\u6027. \u5982{span: 3}. \u540C\u4E0A\u9762\u7684 colProps, \u8BE5\u5C5E\u6027\u4E5F\u53EF\u4EE5\u5728 columns \u91CC\u7684 formItemProps \u91CC\u5355\u72EC\u6307\u5B9A. \u5982 ",paraId:56},{value:"{formItemProps: {labelCol: {span: 3}}}",paraId:56},{value:"LabelColProps",paraId:56},{value:"--",paraId:56},{value:"\u53C2\u6570",paraId:57,tocIndex:20},{value:"\u8BF4\u660E",paraId:57,tocIndex:20},{value:"\u7C7B\u578B",paraId:57,tocIndex:20},{value:"\u9ED8\u8BA4\u503C",paraId:57,tocIndex:20},{value:"data",paraId:57,tocIndex:20},{value:"\u53EF\u4EE5\u5B58\u50A8\u8868\u5355\u4E2D\u7684\u989D\u5916\u6570\u636E",paraId:57,tocIndex:20},{value:"Record<string, any>",paraId:57,tocIndex:20},{value:"{}",paraId:57,tocIndex:20},{value:"setData",paraId:57,tocIndex:20},{value:"\u5B58\u5165\u6570\u636E; setData \u548C react \u7684 setState \u4E00\u6837, \u53EA\u9700\u8981\u4F20\u5165\u5173\u5FC3\u7684\u5B57\u6BB5\u5C31\u53EF\u4EE5, \u4E0D\u4F1A\u8986\u76D6\u5176\u5B83\u7684\u5B57\u6BB5.",paraId:57,tocIndex:20},{value:"(Record<string, any>) => void",paraId:57,tocIndex:20},{value:"--",paraId:57,tocIndex:20},{value:"\u5B57\u6BB5\u540D\u79F0",paraId:58,tocIndex:21},{value:"\u8BF4\u660E",paraId:58,tocIndex:21},{value:"\u7C7B\u578B",paraId:58,tocIndex:21},{value:"key",paraId:58,tocIndex:21},{value:"\u786E\u5B9A\u8FD9\u4E2A\u5217\u7684\u552F\u4E00\u503C, \u4E00\u822C\u7528\u4E8E dataIndex \u91CD\u590D\u7684\u60C5\u51B5",paraId:58,tocIndex:21},{value:"React.key",paraId:58,tocIndex:21},{value:"dataIndex",paraId:58,tocIndex:21},{value:"\u53EF\u4F7F\u7528\u7EA6\u5B9A\u6A21\u5F0F\u81EA\u52A8\u5904\u7406\u503C: userId, userName \u6216 userId, userName_id, name; \u53EF\u53C2\u8003",paraId:58,tocIndex:21},{value:"\u7EA6\u5B9A\u5F0F\u4F8B\u5B50",paraId:59,tocIndex:21},{value:"string",paraId:58,tocIndex:21},{value:"valueType",paraId:58,tocIndex:21},{value:"\u6570\u636E\u7684\u6E32\u6E32\u67D3\u65B9\u5F0F\uFF0C\u6211\u4EEC\u81EA\u5E26\u4E86\u4E00\u90E8\u5206\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49 valueType",paraId:58,tocIndex:21},{value:"ProFieldValueType",paraId:58,tocIndex:21},{value:"title",paraId:58,tocIndex:21},{value:"\u6807\u9898\u7684\u5185\u5BB9\uFF0C\u5728 form \u4E2D\u662F label",paraId:58,tocIndex:21},{value:"ReactNode",paraId:58,tocIndex:21},{value:" | ",paraId:58,tocIndex:21},{value:"(props,type,dom)=> ReactNode",paraId:58,tocIndex:21},{value:"tooltip",paraId:58,tocIndex:21},{value:"\u4F1A\u5728 title \u65C1\u8FB9\u5C55\u793A\u4E00\u4E2A icon\uFF0C\u9F20\u6807\u6D6E\u52A8\u4E4B\u540E\u5C55\u793A",paraId:58,tocIndex:21},{value:"string",paraId:58,tocIndex:21},{value:"valueEnum",paraId:58,tocIndex:21},{value:"\u652F\u6301 object \u548C Map\uFF0CMap \u662F\u652F\u6301\u5176\u4ED6\u57FA\u7840\u7C7B\u578B\u4F5C\u4E3A key",paraId:58,tocIndex:21},{value:"(Entity)=> ValueEnum",paraId:58,tocIndex:21},{value:" | ",paraId:58,tocIndex:21},{value:"ValueEnum",paraId:58,tocIndex:21},{value:"fieldProps",paraId:58,tocIndex:21},{value:"\u4F20\u7ED9\u6E32\u67D3\u7684\u7EC4\u4EF6\u7684 props\uFF0C\u81EA\u5B9A\u4E49\u7684\u65F6\u5019\u4E5F\u4F1A\u4F20\u9012",paraId:58,tocIndex:21},{value:"(form,config)=>fieldProps",paraId:58,tocIndex:21},{value:" | ",paraId:58,tocIndex:21},{value:"fieldProps",paraId:58,tocIndex:21},{value:"formItemProps",paraId:58,tocIndex:21},{value:"\u4F20\u9012\u7ED9 Form. Item \u7684\u914D\u7F6E",paraId:58,tocIndex:21},{value:"(form,config)=>formItemProps",paraId:58,tocIndex:21},{value:" | ",paraId:58,tocIndex:21},{value:"formItemProps",paraId:58,tocIndex:21},{value:"render",paraId:58,tocIndex:21},{value:"\u81EA\u5B9A\u4E49\u53EA\u8BFB\u6A21\u5F0F\u7684 dom, ",paraId:58,tocIndex:21},{value:"render",paraId:58,tocIndex:21},{value:" \u65B9\u6CD5\u53EA\u7BA1\u7406\u7684\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u7F16\u8F91\u6A21\u5F0F\u9700\u8981\u4F7F\u7528 ",paraId:58,tocIndex:21},{value:"renderFormItem",paraId:58,tocIndex:21},{value:"(dom,entity,index, action, schema) => React.ReactNode",paraId:58,tocIndex:21},{value:"renderFormItem",paraId:58,tocIndex:21},{value:"\u81EA\u5B9A\u4E49\u7F16\u8F91\u6A21\u5F0F, \u8FD4\u56DE\u4E00\u4E2A ReactNode\uFF0C\u4F1A\u81EA\u52A8\u5305\u88F9 value \u548C onChange",paraId:58,tocIndex:21},{value:"(schema,config,form) => React.ReactNode",paraId:58,tocIndex:21},{value:"hideInForm",paraId:58,tocIndex:21},{value:"\u5728 Form \u4E2D\u9690\u85CF",paraId:58,tocIndex:21},{value:"boolean",paraId:58,tocIndex:21},{value:"rowProps",paraId:58,tocIndex:21},{value:"\u5728\u5F00\u542F ",paraId:58,tocIndex:21},{value:"grid",paraId:58,tocIndex:21},{value:" \u6A21\u5F0F\u65F6\u4F20\u9012\u7ED9 Row",paraId:58,tocIndex:21},{value:"RowProps",paraId:58,tocIndex:21},{value:"colProps",paraId:58,tocIndex:21},{value:"\u5728\u5F00\u542F ",paraId:58,tocIndex:21},{value:"grid",paraId:58,tocIndex:21},{value:" \u6A21\u5F0F\u65F6\u4F20\u9012\u7ED9 Col",paraId:58,tocIndex:21},{value:"ColProps",paraId:58,tocIndex:21}],Xe={"settingprovider-demo-table":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(809)]).then(e.bind(e,88304))})),asset:{type:"BLOCK",id:"settingprovider-demo-table",refAtomIds:["SettingProvider"],dependencies:{"index.tsx":{type:"FILE",value:e(74957).Z},"react-admin-kit":{type:"NPM",value:"0.3.1"}}}},"settingprovider-demo-modalform":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(809)]).then(e.bind(e,40912))})),asset:{type:"BLOCK",id:"settingprovider-demo-modalform",refAtomIds:["SettingProvider"],dependencies:{"index.tsx":{type:"FILE",value:e(17121).Z},"react-admin-kit":{type:"NPM",value:"0.3.1"}}}},"settingprovider-demo-schemaform":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(809)]).then(e.bind(e,66107))})),asset:{type:"BLOCK",id:"settingprovider-demo-schemaform",refAtomIds:["SettingProvider"],dependencies:{"index.tsx":{type:"FILE",value:e(73774).Z},"react-admin-kit":{type:"NPM",value:"0.3.1"}}}},"settingprovider-demo-formupload":{component:d.memo(d.lazy(function(){return Promise.all([e.e(482),e.e(230),e.e(428),e.e(244),e.e(809)]).then(e.bind(e,73712))})),asset:{type:"BLOCK",id:"settingprovider-demo-formupload",refAtomIds:["SettingProvider"],dependencies:{"index.tsx":{type:"FILE",value:e(81537).Z},"react-admin-kit":{type:"NPM",value:"0.3.1"},"FormUpload/demos/basic/index.tsx":{type:"FILE",value:e(53230).Z},react:{type:"NPM",value:"18.2.0"}}}}},Ze={title:"SettingProvider - \u9ED8\u8BA4\u8BBE\u7F6E",toc:"content",filename:"src/SettingProvider/index.md",atomId:"SettingProvider",lastUpdated:1693472974e3,group:{title:"\u9ED8\u8BA4\u8BBE\u7F6E",order:2},order:0,description:"\u4E3A\u7EC4\u4EF6\u63D0\u4F9B\u7EDF\u4E00\u7684\u9ED8\u8BA4\u8BBE\u7F6E, \u53EA\u9700\u5728\u5E94\u7528\u5916\u56F4\u5305\u88F9\u4E00\u6B21\u5373\u53EF\u5168\u5C40\u751F\u6548."},je=[{id:"settingprovider---\u7EC4\u4EF6\u9ED8\u8BA4\u8BBE\u7F6E",depth:2,title:"SettingProvider - \u7EC4\u4EF6\u9ED8\u8BA4\u8BBE\u7F6E"},{id:"protable",depth:3,title:"ProTable"},{id:"modalform",depth:3,title:"ModalForm"},{id:"schemaform",depth:3,title:"SchemaForm"},{id:"formupload",depth:3,title:"FormUpload"},{id:"api",depth:3,title:"API"}],Ye=[{value:"\u4E3A\u7EC4\u4EF6\u63D0\u4F9B\u7EDF\u4E00\u7684\u9ED8\u8BA4\u8BBE\u7F6E, \u53EA\u9700\u5728\u5E94\u7528\u5916\u56F4\u5305\u88F9\u4E00\u6B21\u5373\u53EF\u5168\u5C40\u751F\u6548.",paraId:0,tocIndex:0},{value:"\u6BD4\u5982\u6211\u4EEC\u60F3\u914D\u7F6E ProTable \u7684\u9ED8\u8BA4\u5927\u5C0F, search \u533A\u57DF\u7684\u914D\u7F6E\u4EE5\u53CA\u5F39\u7A97\u8868\u5355\u7684\u5E03\u5C40.",paraId:1,tocIndex:1},{value:"\u6BD4\u5982\u6211\u4EEC\u60F3\u914D\u7F6E ModalForm \u7684\u9ED8\u8BA4\u5F39\u7A97\u8868\u5355\u7684\u5E03\u5C40\u4E3A\u6C34\u5E73\u6A21\u5F0F.",paraId:2,tocIndex:2},{value:"\u6BD4\u5982\u6211\u4EEC\u60F3\u914D\u7F6E SchemaForm \u7684\u9ED8\u8BA4\u9A8C\u8BC1\u63D0\u793A.",paraId:3,tocIndex:3},{value:"\u53EF\u4EE5\u7ED9 FormUpload \u7EC4\u4EF6\u9ED8\u8BA4\u5E26\u4E0A token.",paraId:4,tocIndex:4}],oe=null,fe={},pe={index:{frontmatter:r,toc:s,texts:u,demos:v},"docs/changelog/index":{frontmatter:m,toc:p,texts:y,demos:h},"docs/intro/index":{frontmatter:I,toc:b,texts:E,demos:g},"components/BusinessSelectBuilder/index":{frontmatter:A,toc:N,texts:w,demos:R},"components/BusinessTreeSelectBuilder/index":{frontmatter:C,toc:L,texts:Z,demos:B},"components/Button/index":{frontmatter:ee,toc:_,texts:de,demos:te},"components/FormUpload/index":{frontmatter:Te,toc:ie,texts:Q,demos:be},"components/LinkButton/index":{frontmatter:k,toc:K,texts:re,demos:Y},"components/ModalForm/index":{frontmatter:D,toc:V,texts:le,demos:T},"components/ProTable/index":{frontmatter:P,toc:$,texts:H,demos:J},"components/SchemaForm/index":{frontmatter:ae,toc:Ce,texts:Le,demos:q},"components/SettingProvider/index":{frontmatter:Ze,toc:je,texts:Ye,demos:Xe}},me=Object.entries(pe).reduce(function(Pe,se){var ve=a()(se,2),ye=ve[0],De=ve[1];return Object.values(De.demos).forEach(function(ze){ze.routeId=ye}),Object.assign(Pe,De.demos),delete De.demos,Pe},{})},54220:function(c,l,e){"use strict";e.d(l,{Ac:function(){return Le},ql:function(){return Z.ql},rU:function(){return L},OL:function(){return b},Q$:function(){return Xe},p6:function(){return x},m8:function(){return Ze.m},fp:function(){return a.fp},Ov:function(){return B.Ov},TH:function(){return a.TH},pC:function(){return a.pC},UO:function(){return a.UO},Qt:function(){return te.Q},lr:function(){return R}});var o=e(67294),a=e(20057),r=e(55648);function s(){return s=Object.assign||function(U){for(var ne=1;ne<arguments.length;ne++){var ue=arguments[ne];for(var Ie in ue)Object.prototype.hasOwnProperty.call(ue,Ie)&&(U[Ie]=ue[Ie])}return U},s.apply(this,arguments)}function u(U,ne){if(U==null)return{};var ue={},Ie=Object.keys(U),Oe,Se;for(Se=0;Se<Ie.length;Se++)Oe=Ie[Se],!(ne.indexOf(Oe)>=0)&&(ue[Oe]=U[Oe]);return ue}const v=["onClick","reloadDocument","replace","state","target","to"],d=["aria-current","caseSensitive","className","end","style","to","children"];function h(U,ne){if(!U){typeof console!="undefined"&&console.warn(ne);try{throw new Error(ne)}catch(ue){}}}function m(U){let{basename:ne,children:ue,window:Ie}=U,Oe=useRef();Oe.current==null&&(Oe.current=createBrowserHistory({window:Ie}));let Se=Oe.current,[$e,Ve]=useState({action:Se.action,location:Se.location});return useLayoutEffect(()=>Se.listen(Ve),[Se]),createElement(Router,{basename:ne,children:ue,location:$e.location,navigationType:$e.action,navigator:Se})}function p(U){let{basename:ne,children:ue,window:Ie}=U,Oe=useRef();Oe.current==null&&(Oe.current=createHashHistory({window:Ie}));let Se=Oe.current,[$e,Ve]=useState({action:Se.action,location:Se.location});return useLayoutEffect(()=>Se.listen(Ve),[Se]),createElement(Router,{basename:ne,children:ue,location:$e.location,navigationType:$e.action,navigator:Se})}function y(U){let{basename:ne,children:ue,history:Ie}=U;const[Oe,Se]=useState({action:Ie.action,location:Ie.location});return useLayoutEffect(()=>Ie.listen(Se),[Ie]),createElement(Router,{basename:ne,children:ue,location:Oe.location,navigationType:Oe.action,navigator:Ie})}function g(U){return!!(U.metaKey||U.altKey||U.ctrlKey||U.shiftKey)}const I=(0,o.forwardRef)(function(ne,ue){let{onClick:Ie,reloadDocument:Oe,replace:Se=!1,state:$e,target:Ve,to:Ge}=ne,vt=u(ne,v),he=(0,a.oQ)(Ge),Be=E(Ge,{replace:Se,state:$e,target:Ve});function Fe(Re){Ie&&Ie(Re),!Re.defaultPrevented&&!Oe&&Be(Re)}return(0,o.createElement)("a",s({},vt,{href:he,onClick:Fe,ref:ue,target:Ve}))}),b=(0,o.forwardRef)(function(ne,ue){let{"aria-current":Ie="page",caseSensitive:Oe=!1,className:Se="",end:$e=!1,style:Ve,to:Ge,children:vt}=ne,he=u(ne,d),Be=(0,a.TH)(),Fe=(0,a.WU)(Ge),Re=Be.pathname,Je=Fe.pathname;Oe||(Re=Re.toLowerCase(),Je=Je.toLowerCase());let Ue=Re===Je||!$e&&Re.startsWith(Je)&&Re.charAt(Je.length)==="/",It=Ue?Ie:void 0,xt;typeof Se=="function"?xt=Se({isActive:Ue}):xt=[Se,Ue?"active":null].filter(Boolean).join(" ");let Dt=typeof Ve=="function"?Ve({isActive:Ue}):Ve;return(0,o.createElement)(I,s({},he,{"aria-current":It,className:xt,ref:ue,style:Dt,to:Ge}),typeof vt=="function"?vt({isActive:Ue}):vt)});function E(U,ne){let{target:ue,replace:Ie,state:Oe}=ne===void 0?{}:ne,Se=(0,a.s0)(),$e=(0,a.TH)(),Ve=(0,a.WU)(U);return(0,o.useCallback)(Ge=>{if(Ge.button===0&&(!ue||ue==="_self")&&!g(Ge)){Ge.preventDefault();let vt=!!Ie||(0,r.Ep)($e)===(0,r.Ep)(Ve);Se(U,{replace:vt,state:Oe})}},[$e,Se,Ve,Ie,Oe,ue,U])}function R(U){let ne=(0,o.useRef)(A(U)),ue=(0,a.TH)(),Ie=(0,o.useMemo)(()=>{let $e=A(ue.search);for(let Ve of ne.current.keys())$e.has(Ve)||ne.current.getAll(Ve).forEach(Ge=>{$e.append(Ve,Ge)});return $e},[ue.search]),Oe=(0,a.s0)(),Se=(0,o.useCallback)(($e,Ve)=>{Oe("?"+A($e),Ve)},[Oe]);return[Ie,Se]}function A(U){return U===void 0&&(U=""),new URLSearchParams(typeof U=="string"||Array.isArray(U)||U instanceof URLSearchParams?U:Object.keys(U).reduce((ne,ue)=>{let Ie=U[ue];return ne.concat(Array.isArray(Ie)?Ie.map(Oe=>[ue,Oe]):[[ue,Ie]])},[]))}var N=e(58096),w=e(49647),B=e(34162),C=["prefetch"];function L(U){var ne,ue=U.prefetch,Ie=(0,w.Z)(U,C),Oe=(0,B.Ov)(),Se=typeof U.to=="string"?U.to:(ne=U.to)===null||ne===void 0?void 0:ne.pathname;return Se?o.createElement(I,(0,N.Z)({onMouseEnter:function(){var Ve;return ue&&Se&&((Ve=Oe.preloadRoute)===null||Ve===void 0?void 0:Ve.call(Oe,Se))}},Ie),U.children):null}var Z=e(70405),te=e(59918);function ee(U){"@babel/helpers - typeof";return ee=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(ne){return typeof ne}:function(ne){return ne&&typeof Symbol=="function"&&ne.constructor===Symbol&&ne!==Symbol.prototype?"symbol":typeof ne},ee(U)}function _(){"use strict";_=function(){return U};var U={},ne=Object.prototype,ue=ne.hasOwnProperty,Ie=Object.defineProperty||function(pt,st,mt){pt[st]=mt.value},Oe=typeof Symbol=="function"?Symbol:{},Se=Oe.iterator||"@@iterator",$e=Oe.asyncIterator||"@@asyncIterator",Ve=Oe.toStringTag||"@@toStringTag";function Ge(pt,st,mt){return Object.defineProperty(pt,st,{value:mt,enumerable:!0,configurable:!0,writable:!0}),pt[st]}try{Ge({},"")}catch(pt){Ge=function(mt,kt,qt){return mt[kt]=qt}}function vt(pt,st,mt,kt){var qt=st&&st.prototype instanceof Fe?st:Fe,zt=Object.create(qt.prototype),Zn=new jn(kt||[]);return Ie(zt,"_invoke",{value:Mn(pt,mt,Zn)}),zt}function he(pt,st,mt){try{return{type:"normal",arg:pt.call(st,mt)}}catch(kt){return{type:"throw",arg:kt}}}U.wrap=vt;var Be={};function Fe(){}function Re(){}function Je(){}var Ue={};Ge(Ue,Se,function(){return this});var It=Object.getPrototypeOf,xt=It&&It(It(Bn([])));xt&&xt!==ne&&ue.call(xt,Se)&&(Ue=xt);var Dt=Je.prototype=Fe.prototype=Object.create(Ue);function En(pt){["next","throw","return"].forEach(function(st){Ge(pt,st,function(mt){return this._invoke(st,mt)})})}function Xt(pt,st){function mt(qt,zt,Zn,bn){var qn=he(pt[qt],pt,zt);if(qn.type!=="throw"){var qr=qn.arg,Nn=qr.value;return Nn&&ee(Nn)=="object"&&ue.call(Nn,"__await")?st.resolve(Nn.__await).then(function(ha){mt("next",ha,Zn,bn)},function(ha){mt("throw",ha,Zn,bn)}):st.resolve(Nn).then(function(ha){qr.value=ha,Zn(qr)},function(ha){return mt("throw",ha,Zn,bn)})}bn(qn.arg)}var kt;Ie(this,"_invoke",{value:function(zt,Zn){function bn(){return new st(function(qn,qr){mt(zt,Zn,qn,qr)})}return kt=kt?kt.then(bn,bn):bn()}})}function Mn(pt,st,mt){var kt="suspendedStart";return function(qt,zt){if(kt==="executing")throw new Error("Generator is already running");if(kt==="completed"){if(qt==="throw")throw zt;return Gn()}for(mt.method=qt,mt.arg=zt;;){var Zn=mt.delegate;if(Zn){var bn=Wn(Zn,mt);if(bn){if(bn===Be)continue;return bn}}if(mt.method==="next")mt.sent=mt._sent=mt.arg;else if(mt.method==="throw"){if(kt==="suspendedStart")throw kt="completed",mt.arg;mt.dispatchException(mt.arg)}else mt.method==="return"&&mt.abrupt("return",mt.arg);kt="executing";var qn=he(pt,st,mt);if(qn.type==="normal"){if(kt=mt.done?"completed":"suspendedYield",qn.arg===Be)continue;return{value:qn.arg,done:mt.done}}qn.type==="throw"&&(kt="completed",mt.method="throw",mt.arg=qn.arg)}}}function Wn(pt,st){var mt=st.method,kt=pt.iterator[mt];if(kt===void 0)return st.delegate=null,mt==="throw"&&pt.iterator.return&&(st.method="return",st.arg=void 0,Wn(pt,st),st.method==="throw")||mt!=="return"&&(st.method="throw",st.arg=new TypeError("The iterator does not provide a '"+mt+"' method")),Be;var qt=he(kt,pt.iterator,st.arg);if(qt.type==="throw")return st.method="throw",st.arg=qt.arg,st.delegate=null,Be;var zt=qt.arg;return zt?zt.done?(st[pt.resultName]=zt.value,st.next=pt.nextLoc,st.method!=="return"&&(st.method="next",st.arg=void 0),st.delegate=null,Be):zt:(st.method="throw",st.arg=new TypeError("iterator result is not an object"),st.delegate=null,Be)}function Ar(pt){var st={tryLoc:pt[0]};1 in pt&&(st.catchLoc=pt[1]),2 in pt&&(st.finallyLoc=pt[2],st.afterLoc=pt[3]),this.tryEntries.push(st)}function Kr(pt){var st=pt.completion||{};st.type="normal",delete st.arg,pt.completion=st}function jn(pt){this.tryEntries=[{tryLoc:"root"}],pt.forEach(Ar,this),this.reset(!0)}function Bn(pt){if(pt){var st=pt[Se];if(st)return st.call(pt);if(typeof pt.next=="function")return pt;if(!isNaN(pt.length)){var mt=-1,kt=function qt(){for(;++mt<pt.length;)if(ue.call(pt,mt))return qt.value=pt[mt],qt.done=!1,qt;return qt.value=void 0,qt.done=!0,qt};return kt.next=kt}}return{next:Gn}}function Gn(){return{value:void 0,done:!0}}return Re.prototype=Je,Ie(Dt,"constructor",{value:Je,configurable:!0}),Ie(Je,"constructor",{value:Re,configurable:!0}),Re.displayName=Ge(Je,Ve,"GeneratorFunction"),U.isGeneratorFunction=function(pt){var st=typeof pt=="function"&&pt.constructor;return!!st&&(st===Re||(st.displayName||st.name)==="GeneratorFunction")},U.mark=function(pt){return Object.setPrototypeOf?Object.setPrototypeOf(pt,Je):(pt.__proto__=Je,Ge(pt,Ve,"GeneratorFunction")),pt.prototype=Object.create(Dt),pt},U.awrap=function(pt){return{__await:pt}},En(Xt.prototype),Ge(Xt.prototype,$e,function(){return this}),U.AsyncIterator=Xt,U.async=function(pt,st,mt,kt,qt){qt===void 0&&(qt=Promise);var zt=new Xt(vt(pt,st,mt,kt),qt);return U.isGeneratorFunction(st)?zt:zt.next().then(function(Zn){return Zn.done?Zn.value:zt.next()})},En(Dt),Ge(Dt,Ve,"Generator"),Ge(Dt,Se,function(){return this}),Ge(Dt,"toString",function(){return"[object Generator]"}),U.keys=function(pt){var st=Object(pt),mt=[];for(var kt in st)mt.push(kt);return mt.reverse(),function qt(){for(;mt.length;){var zt=mt.pop();if(zt in st)return qt.value=zt,qt.done=!1,qt}return qt.done=!0,qt}},U.values=Bn,jn.prototype={constructor:jn,reset:function(st){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Kr),!st)for(var mt in this)mt.charAt(0)==="t"&&ue.call(this,mt)&&!isNaN(+mt.slice(1))&&(this[mt]=void 0)},stop:function(){this.done=!0;var st=this.tryEntries[0].completion;if(st.type==="throw")throw st.arg;return this.rval},dispatchException:function(st){if(this.done)throw st;var mt=this;function kt(qr,Nn){return Zn.type="throw",Zn.arg=st,mt.next=qr,Nn&&(mt.method="next",mt.arg=void 0),!!Nn}for(var qt=this.tryEntries.length-1;qt>=0;--qt){var zt=this.tryEntries[qt],Zn=zt.completion;if(zt.tryLoc==="root")return kt("end");if(zt.tryLoc<=this.prev){var bn=ue.call(zt,"catchLoc"),qn=ue.call(zt,"finallyLoc");if(bn&&qn){if(this.prev<zt.catchLoc)return kt(zt.catchLoc,!0);if(this.prev<zt.finallyLoc)return kt(zt.finallyLoc)}else if(bn){if(this.prev<zt.catchLoc)return kt(zt.catchLoc,!0)}else{if(!qn)throw new Error("try statement without catch or finally");if(this.prev<zt.finallyLoc)return kt(zt.finallyLoc)}}}},abrupt:function(st,mt){for(var kt=this.tryEntries.length-1;kt>=0;--kt){var qt=this.tryEntries[kt];if(qt.tryLoc<=this.prev&&ue.call(qt,"finallyLoc")&&this.prev<qt.finallyLoc){var zt=qt;break}}zt&&(st==="break"||st==="continue")&&zt.tryLoc<=mt&&mt<=zt.finallyLoc&&(zt=null);var Zn=zt?zt.completion:{};return Zn.type=st,Zn.arg=mt,zt?(this.method="next",this.next=zt.finallyLoc,Be):this.complete(Zn)},complete:function(st,mt){if(st.type==="throw")throw st.arg;return st.type==="break"||st.type==="continue"?this.next=st.arg:st.type==="return"?(this.rval=this.arg=st.arg,this.method="return",this.next="end"):st.type==="normal"&&mt&&(this.next=mt),Be},finish:function(st){for(var mt=this.tryEntries.length-1;mt>=0;--mt){var kt=this.tryEntries[mt];if(kt.finallyLoc===st)return this.complete(kt.completion,kt.afterLoc),Kr(kt),Be}},catch:function(st){for(var mt=this.tryEntries.length-1;mt>=0;--mt){var kt=this.tryEntries[mt];if(kt.tryLoc===st){var qt=kt.completion;if(qt.type==="throw"){var zt=qt.arg;Kr(kt)}return zt}}throw new Error("illegal catch attempt")},delegateYield:function(st,mt,kt){return this.delegate={iterator:Bn(st),resultName:mt,nextLoc:kt},this.method==="next"&&(this.arg=void 0),Be}},U}function de(U,ne){if(ee(U)!=="object"||U===null)return U;var ue=U[Symbol.toPrimitive];if(ue!==void 0){var Ie=ue.call(U,ne||"default");if(ee(Ie)!=="object")return Ie;throw new TypeError("@@toPrimitive must return a primitive value.")}return(ne==="string"?String:Number)(U)}function be(U){var ne=de(U,"string");return ee(ne)==="symbol"?ne:String(ne)}function Te(U,ne,ue){return ne=be(ne),ne in U?Object.defineProperty(U,ne,{value:ue,enumerable:!0,configurable:!0,writable:!0}):U[ne]=ue,U}function ie(U,ne){var ue=Object.keys(U);if(Object.getOwnPropertySymbols){var Ie=Object.getOwnPropertySymbols(U);ne&&(Ie=Ie.filter(function(Oe){return Object.getOwnPropertyDescriptor(U,Oe).enumerable})),ue.push.apply(ue,Ie)}return ue}function Q(U){for(var ne=1;ne<arguments.length;ne++){var ue=arguments[ne]!=null?arguments[ne]:{};ne%2?ie(Object(ue),!0).forEach(function(Ie){Te(U,Ie,ue[Ie])}):Object.getOwnPropertyDescriptors?Object.defineProperties(U,Object.getOwnPropertyDescriptors(ue)):ie(Object(ue)).forEach(function(Ie){Object.defineProperty(U,Ie,Object.getOwnPropertyDescriptor(ue,Ie))})}return U}function Y(U,ne,ue,Ie,Oe,Se,$e){try{var Ve=U[Se]($e),Ge=Ve.value}catch(vt){ue(vt);return}Ve.done?ne(Ge):Promise.resolve(Ge).then(Ie,Oe)}function k(U){return function(){var ne=this,ue=arguments;return new Promise(function(Ie,Oe){var Se=U.apply(ne,ue);function $e(Ge){Y(Se,Ie,Oe,$e,Ve,"next",Ge)}function Ve(Ge){Y(Se,Ie,Oe,$e,Ve,"throw",Ge)}$e(void 0)})}}function K(U,ne){(ne==null||ne>U.length)&&(ne=U.length);for(var ue=0,Ie=new Array(ne);ue<ne;ue++)Ie[ue]=U[ue];return Ie}function re(U,ne){if(U){if(typeof U=="string")return K(U,ne);var ue=Object.prototype.toString.call(U).slice(8,-1);if(ue==="Object"&&U.constructor&&(ue=U.constructor.name),ue==="Map"||ue==="Set")return Array.from(U);if(ue==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ue))return K(U,ne)}}function T(U,ne){var ue=typeof Symbol!="undefined"&&U[Symbol.iterator]||U["@@iterator"];if(!ue){if(Array.isArray(U)||(ue=re(U))||ne&&U&&typeof U.length=="number"){ue&&(U=ue);var Ie=0,Oe=function(){};return{s:Oe,n:function(){return Ie>=U.length?{done:!0}:{done:!1,value:U[Ie++]}},e:function(vt){throw vt},f:Oe}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Se=!0,$e=!1,Ve;return{s:function(){ue=ue.call(U)},n:function(){var vt=ue.next();return Se=vt.done,vt},e:function(vt){$e=!0,Ve=vt},f:function(){try{!Se&&ue.return!=null&&ue.return()}finally{if($e)throw Ve}}}}function D(U){if(Array.isArray(U))return U}function V(U){if(typeof Symbol!="undefined"&&U[Symbol.iterator]!=null||U["@@iterator"]!=null)return Array.from(U)}function le(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(U){return D(U)||V(U)||re(U)||le()}function P(U,ne){if(!(U instanceof ne))throw new TypeError("Cannot call a class as a function")}function $(U,ne){for(var ue=0;ue<ne.length;ue++){var Ie=ne[ue];Ie.enumerable=Ie.enumerable||!1,Ie.configurable=!0,"value"in Ie&&(Ie.writable=!0),Object.defineProperty(U,be(Ie.key),Ie)}}function H(U,ne,ue){return ne&&$(U.prototype,ne),ue&&$(U,ue),Object.defineProperty(U,"prototype",{writable:!1}),U}function q(U,ne){if(!U)throw new Error(ne)}function ae(U){var ne=U.fns,ue=U.args;if(ne.length===1)return ne[0];var Ie=ne.pop();return ne.reduce(function(Oe,Se){return function(){return Se(Oe,ue)}},Ie)}function Ce(U){return!!U&&ee(U)==="object"&&typeof U.then=="function"}var Le;(function(U){U.compose="compose",U.modify="modify",U.event="event"})(Le||(Le={}));var Xe=function(){function U(ne){P(this,U),Te(this,"opts",void 0),Te(this,"hooks",{}),this.opts=ne}return H(U,[{key:"register",value:function(ue){var Ie=this;q(ue.apply,"plugin register failed, apply must supplied"),Object.keys(ue.apply).forEach(function(Oe){q(Ie.opts.validKeys.indexOf(Oe)>-1,"register failed, invalid key ".concat(Oe," ").concat(ue.path?"from plugin ".concat(ue.path):"",".")),Ie.hooks[Oe]=(Ie.hooks[Oe]||[]).concat(ue.apply[Oe])})}},{key:"getHooks",value:function(ue){var Ie=ue.split("."),Oe=J(Ie),Se=Oe[0],$e=Oe.slice(1),Ve=this.hooks[Se]||[];return $e.length&&(Ve=Ve.map(function(Ge){try{var vt=Ge,he=T($e),Be;try{for(he.s();!(Be=he.n()).done;){var Fe=Be.value;vt=vt[Fe]}}catch(Re){he.e(Re)}finally{he.f()}return vt}catch(Re){return null}}).filter(Boolean)),Ve}},{key:"applyPlugins",value:function(ue){var Ie=ue.key,Oe=ue.type,Se=ue.initialValue,$e=ue.args,Ve=ue.async,Ge=this.getHooks(Ie)||[];switch($e&&q(ee($e)==="object","applyPlugins failed, args must be plain object."),Ve&&q(Oe===Le.modify||Oe===Le.event,"async only works with modify and event type."),Oe){case Le.modify:return Ve?Ge.reduce(function(){var vt=k(_().mark(function he(Be,Fe){var Re;return _().wrap(function(Ue){for(;;)switch(Ue.prev=Ue.next){case 0:if(q(typeof Fe=="function"||ee(Fe)==="object"||Ce(Fe),"applyPlugins failed, all hooks for key ".concat(Ie," must be function, plain object or Promise.")),!Ce(Be)){Ue.next=5;break}return Ue.next=4,Be;case 4:Be=Ue.sent;case 5:if(typeof Fe!="function"){Ue.next=16;break}if(Re=Fe(Be,$e),!Ce(Re)){Ue.next=13;break}return Ue.next=10,Re;case 10:return Ue.abrupt("return",Ue.sent);case 13:return Ue.abrupt("return",Re);case 14:Ue.next=21;break;case 16:if(!Ce(Fe)){Ue.next=20;break}return Ue.next=19,Fe;case 19:Fe=Ue.sent;case 20:return Ue.abrupt("return",Q(Q({},Be),Fe));case 21:case"end":return Ue.stop()}},he)}));return function(he,Be){return vt.apply(this,arguments)}}(),Ce(Se)?Se:Promise.resolve(Se)):Ge.reduce(function(vt,he){return q(typeof he=="function"||ee(he)==="object","applyPlugins failed, all hooks for key ".concat(Ie," must be function or plain object.")),typeof he=="function"?he(vt,$e):Q(Q({},vt),he)},Se);case Le.event:return k(_().mark(function vt(){var he,Be,Fe,Re;return _().wrap(function(Ue){for(;;)switch(Ue.prev=Ue.next){case 0:he=T(Ge),Ue.prev=1,he.s();case 3:if((Be=he.n()).done){Ue.next=12;break}if(Fe=Be.value,q(typeof Fe=="function","applyPlugins failed, all hooks for key ".concat(Ie," must be function.")),Re=Fe($e),!(Ve&&Ce(Re))){Ue.next=10;break}return Ue.next=10,Re;case 10:Ue.next=3;break;case 12:Ue.next=17;break;case 14:Ue.prev=14,Ue.t0=Ue.catch(1),he.e(Ue.t0);case 17:return Ue.prev=17,he.f(),Ue.finish(17);case 20:case"end":return Ue.stop()}},vt,null,[[1,14,17,20]])}))();case Le.compose:return function(){return ae({fns:Ge.concat(Se),args:$e})()}}}}],[{key:"create",value:function(ue){var Ie=new U({validKeys:ue.validKeys});return ue.plugins.forEach(function(Oe){Ie.register(Oe)}),Ie}}]),U}(),Ze=e(82651),je=e(52677),Ye=e.n(je),oe=0,fe=0;function pe(U,ne){if(!1)var ue}function me(U){return JSON.stringify(U,null,2)}function Pe(U){var ne=U.length>1?U.map(se).join(" "):U[0];return Ye()(ne)==="object"?"".concat(me(ne)):ne.toString()}function se(U){return Ye()(U)==="object"?"".concat(JSON.stringify(U)):U.toString()}var ve={log:function(){for(var ne=arguments.length,ue=new Array(ne),Ie=0;Ie<ne;Ie++)ue[Ie]=arguments[Ie];pe("log",Pe(ue))},info:function(){for(var ne=arguments.length,ue=new Array(ne),Ie=0;Ie<ne;Ie++)ue[Ie]=arguments[Ie];pe("info",Pe(ue))},warn:function(){for(var ne=arguments.length,ue=new Array(ne),Ie=0;Ie<ne;Ie++)ue[Ie]=arguments[Ie];pe("warn",Pe(ue))},error:function(){for(var ne=arguments.length,ue=new Array(ne),Ie=0;Ie<ne;Ie++)ue[Ie]=arguments[Ie];pe("error",Pe(ue))},group:function(){fe++},groupCollapsed:function(){fe++},groupEnd:function(){fe&&--fe},clear:function(){pe("clear")},trace:function(){var ne;(ne=console).trace.apply(ne,arguments)},profile:function(){var ne;(ne=console).profile.apply(ne,arguments)},profileEnd:function(){var ne;(ne=console).profileEnd.apply(ne,arguments)}},ye=null;function De(U){var ne=React.useContext(ye);ne&&ne(U)}var ze=e(15009),bt=e(99289),at=e(61748),lt=e(24497),St=typeof window!="undefined"?window.html2sketch:null;function Bt(U,ne){return Ot.apply(this,arguments)}function Ot(){return Ot=_asyncToGenerator(_regeneratorRuntime().mark(function U(ne,ue){return _regeneratorRuntime().wrap(function(Oe){for(;;)switch(Oe.prev=Oe.next){case 0:if(ue.type!=="group"){Oe.next=6;break}return Oe.next=3,St.nodeToGroup(ne);case 3:Oe.t0=Oe.sent.toSketchJSON(),Oe.next=9;break;case 6:return Oe.next=8,St.nodeToSymbol(ne);case 8:Oe.t0=Oe.sent.toSketchJSON();case 9:return Oe.abrupt("return",Oe.t0);case 10:case"end":return Oe.stop()}},U)})),Ot.apply(this,arguments)}function Wt(U,ne){return getPluginManager().applyPlugins({key:"toSketchJSON",type:ApplyPluginsType.modify,initialValue:null,args:{target:U,opts:ne},async:!0})}var x=null},35095:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var dumi__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(61748),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294);function ownKeys(c,l){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(c);l&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),e.push.apply(e,o)}return e}function _objectSpread(c){for(var l=1;l<arguments.length;l++){var e=arguments[l]!=null?arguments[l]:{};l%2?ownKeys(Object(e),!0).forEach(function(o){_defineProperty(c,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):ownKeys(Object(e)).forEach(function(o){Object.defineProperty(c,o,Object.getOwnPropertyDescriptor(e,o))})}return c}function _defineProperty(c,l,e){return l=_toPropertyKey(l),l in c?Object.defineProperty(c,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[l]=e,c}function _toPropertyKey(c){var l=_toPrimitive(c,"string");return _typeof(l)==="symbol"?l:String(l)}function _toPrimitive(c,l){if(_typeof(c)!=="object"||c===null)return c;var e=c[Symbol.toPrimitive];if(e!==void 0){var o=e.call(c,l||"default");if(_typeof(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(c)}function _slicedToArray(c,l){return _arrayWithHoles(c)||_iterableToArrayLimit(c,l)||_unsupportedIterableToArray(c,l)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _unsupportedIterableToArray(c,l){if(c){if(typeof c=="string")return _arrayLikeToArray(c,l);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return _arrayLikeToArray(c,l)}}function _arrayLikeToArray(c,l){(l==null||l>c.length)&&(l=c.length);for(var e=0,o=new Array(l);e<l;e++)o[e]=c[e];return o}function _iterableToArrayLimit(c,l){var e=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var o,a,r,s,u=[],v=!0,d=!1;try{if(r=(e=e.call(c)).next,l===0){if(Object(e)!==e)return;v=!1}else for(;!(v=(o=r.call(e)).done)&&(u.push(o.value),u.length!==l);v=!0);}catch(h){d=!0,a=h}finally{try{if(!v&&e.return!=null&&(s=e.return(),Object(s)!==s))return}finally{if(d)throw a}}return u}}function _arrayWithHoles(c){if(Array.isArray(c))return c}function _typeof(c){"@babel/helpers - typeof";return _typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},_typeof(c)}function builtInProcessor(entity,entryExports){var mod;switch(entity.$$__type){case"function":return eval(entity.$$__body.sourceCode);case"element":return mod=entity.$$__body.componentName.split(".").reduce(function(c,l){return c[l]},entryExports),mod===void 0?entity.$$__body.componentName:"_InternalPanelDoNotUseOrYouWillBeFired"in mod?mod._InternalPanelDoNotUseOrYouWillBeFired:mod}}function deepReplace(c,l){return Array.isArray(c)?c.map(function(e){return deepReplace(e,l)}):_typeof(c)==="object"&&(c==null?void 0:c.$$__type)==="element"?translatePresetToReact(c.$$__body,l):_typeof(c)==="object"&&Object.prototype.toString.call(c)==="[object Object]"?Object.entries(c).reduce(function(e,o){var a=_slicedToArray(o,2),r=a[0],s=a[1];return _objectSpread(_objectSpread({},e),{},_defineProperty({},r,deepReplace(s,l)))},{}):c}function translatePresetToReact(c,l){var e=c.props,o=c.size,a=l({$$__type:"element",$$__body:c});return React.createElement(a,deepReplace(_objectSpread(_objectSpread({},e),{},{style:_objectSpread(_objectSpread({},e.style),o)}),l))}var AtomRenderer=function c(l){var e=useSiteData(),o=e.entryExports;switch(l.type){case"COMPONENT":return translatePresetToReact(l.value,function(a){var r,s;return(r=(s=l.processor)===null||s===void 0?void 0:s.call(l,a,o))!==null&&r!==void 0?r:builtInProcessor(a,o)});default:return React.createElement(React.Fragment,null,l.type," atom is not supported.")}}},64236:function(c,l,e){"use strict";e.d(l,{D:function(){return a},W:function(){return r}});var o=e(67294),a=(0,o.createContext)({pkg:{},historyType:"browser",entryExports:{},demos:{},components:{},locales:[],themeConfig:{},loading:!1,setLoading:function(){},_2_level_nav_available:!0}),r=function(){return(0,o.useContext)(a)}},88903:function(c,l,e){"use strict";e.d(l,{b:function(){return m}});var o=e(61748),a=e(67294);function r(p,y){return h(p)||d(p,y)||u(p,y)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u(p,y){if(p){if(typeof p=="string")return v(p,y);var g=Object.prototype.toString.call(p).slice(8,-1);if(g==="Object"&&p.constructor&&(g=p.constructor.name),g==="Map"||g==="Set")return Array.from(p);if(g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))return v(p,y)}}function v(p,y){(y==null||y>p.length)&&(y=p.length);for(var g=0,I=new Array(y);g<y;g++)I[g]=p[g];return I}function d(p,y){var g=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(g!=null){var I,b,E,R,A=[],N=!0,w=!1;try{if(E=(g=g.call(p)).next,y===0){if(Object(g)!==g)return;N=!1}else for(;!(N=(I=E.call(g)).done)&&(A.push(I.value),A.length!==y);N=!0);}catch(B){w=!0,b=B}finally{try{if(!N&&g.return!=null&&(R=g.return(),Object(R)!==R))return}finally{if(w)throw b}}return A}}function h(p){if(Array.isArray(p))return p}var m=function(){var y=(0,o.YB)(),g=(0,o.WF)(),I=g.locales,b=(0,a.useState)(function(){return I.find(function(A){var N=A.id;return N===y.locale})}),E=r(b,1),R=E[0];return R}},77742:function(c,l,e){"use strict";e.d(l,{AM:function(){return b},EV:function(){return y},LI:function(){return E},M7:function(){return R},RX:function(){return I},m7:function(){return N},qu:function(){return A},rl:function(){return g}});var o=e(61748),a=e(67294),r=e(88903);function s(w){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},s(w)}function u(w,B){return p(w)||m(w,B)||d(w,B)||v()}function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d(w,B){if(w){if(typeof w=="string")return h(w,B);var C=Object.prototype.toString.call(w).slice(8,-1);if(C==="Object"&&w.constructor&&(C=w.constructor.name),C==="Map"||C==="Set")return Array.from(w);if(C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))return h(w,B)}}function h(w,B){(B==null||B>w.length)&&(B=w.length);for(var C=0,L=new Array(B);C<B;C++)L[C]=w[C];return L}function m(w,B){var C=w==null?null:typeof Symbol!="undefined"&&w[Symbol.iterator]||w["@@iterator"];if(C!=null){var L,Z,te,ee,_=[],de=!0,be=!1;try{if(te=(C=C.call(w)).next,B===0){if(Object(C)!==C)return;de=!1}else for(;!(de=(L=te.call(C)).done)&&(_.push(L.value),_.length!==B);de=!0);}catch(Te){be=!0,Z=Te}finally{try{if(!de&&C.return!=null&&(ee=C.return(),Object(ee)!==ee))return}finally{if(be)throw Z}}return _}}function p(w){if(Array.isArray(w))return w}var y,g=function(B){y=B},I=function(){var B=(0,o.YB)(),C=(0,o.Ov)(),L=C.routes,Z=(0,o.WF)(),te=Z.locales,ee=(0,a.useState)(function(){var be=te.slice().reverse();return Object.values(L).reduce(function(Te,ie){var Q=be.find(function(Y){return"suffix"in Y?ie.path.endsWith(Y.suffix):ie.path.startsWith(Y.base.slice(1))});return ie.parentId==="DocLayout"&&Q.id===B.locale&&(Te[ie.id]=ie),Te},{})}),_=u(ee,1),de=_[0];return de},b=function(B){var C=`/**
 * This is an auto-generated demo by dumi
 * if you think it is not working as expected,
 * please report the issue at
 * https://github.com/umijs/dumi/issues
 */`;return B.startsWith("18.")||B==="latest"?"".concat(C,`

import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);`):"".concat(C,`

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);`)},E=typeof window!="undefined"?a.useLayoutEffect:a.useEffect,R=function(){var B=(0,r.b)();return(0,a.useCallback)(function(C,L){return("order"in C&&"order"in L?C.order-L.order:0)||("link"in C&&"link"in L?C.link.split("/").length-L.link.split("/").length:0)||("path"in C&&"path"in L?C.path.split("/").length-L.path.split("/").length:0)||(C.title?C.title.localeCompare(L.title||"",B.id):-1)},[])},A=function(B,C,L){var Z,te=C==="nav.second"?s(L.nav)==="object"?L.nav.second:{}:L[C];switch(s(te)){case"object":B.title=te.title||B.title,B.order=(Z=te.order)!==null&&Z!==void 0?Z:B.order;break;case"string":B.title=te||B.title;break;default:}return B};function N(w,B){return Array.isArray(w)?w:w[B.id]}},19532:function(c,l,e){"use strict";e.d(l,{Z:function(){return $}});var o=e(67294),a=Object.defineProperty,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,v=(H,q,ae)=>q in H?a(H,q,{enumerable:!0,configurable:!0,writable:!0,value:ae}):H[q]=ae,d=(H,q)=>{for(var ae in q||(q={}))s.call(q,ae)&&v(H,ae,q[ae]);if(r)for(var ae of r(q))u.call(q,ae)&&v(H,ae,q[ae]);return H};const h=H=>o.createElement("svg",d({viewBox:"64 64 896 896"},H),o.createElement("path",{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}),o.createElement("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}));var m="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNjk5IDM1M2gtNDYuOWMtMTAuMiAwLTE5LjkgNC45LTI1LjkgMTMuM0w0NjkgNTg0LjNsLTcxLjItOTguOGMtNi04LjMtMTUuNi0xMy4zLTI1LjktMTMuM0gzMjVjLTYuNSAwLTEwLjMgNy40LTYuNSAxMi43bDEyNC42IDE3Mi44YTMxLjggMzEuOCAwIDAgMCA1MS43IDBsMjEwLjYtMjkyYzMuOS01LjMuMS0xMi43LTYuNC0xMi43eiIvPjxwYXRoIGQ9Ik01MTIgNjRDMjY0LjYgNjQgNjQgMjY0LjYgNjQgNTEyczIwMC42IDQ0OCA0NDggNDQ4IDQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY0IDUxMiA2NHptMCA4MjBjLTIwNS40IDAtMzcyLTE2Ni42LTM3Mi0zNzJzMTY2LjYtMzcyIDM3Mi0zNzIgMzcyIDE2Ni42IDM3MiAzNzItMTY2LjYgMzcyLTM3MiAzNzJ6Ii8+PC9zdmc+",p=Object.defineProperty,y=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,b=(H,q,ae)=>q in H?p(H,q,{enumerable:!0,configurable:!0,writable:!0,value:ae}):H[q]=ae,E=(H,q)=>{for(var ae in q||(q={}))g.call(q,ae)&&b(H,ae,q[ae]);if(y)for(var ae of y(q))I.call(q,ae)&&b(H,ae,q[ae]);return H};const R=H=>o.createElement("svg",E({fillRule:"evenodd",viewBox:"64 64 896 896"},H),o.createElement("path",{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 0 1 .05.09.12.12 0 0 1 0 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 0 1 .05.06v.02a.12.12 0 0 1 0 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 0 1-.09.05.12.12 0 0 1-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 0 1-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 0 1-.05-.09.12.12 0 0 1 0-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 0 1-.05-.06l-.01-.02a.12.12 0 0 1 0-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 0 1 .09-.05.12.12 0 0 1 .07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 0 1 .07 0z"}));var A="data:image/svg+xml;base64,PHN2ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiPjxwYXRoIGQ9Ik01MTIgNjRjMjQ3LjQgMCA0NDggMjAwLjYgNDQ4IDQ0OFM3NTkuNCA5NjAgNTEyIDk2MCA2NCA3NTkuNCA2NCA1MTIgMjY0LjYgNjQgNTEyIDY0em0wIDc2Yy0yMDUuNCAwLTM3MiAxNjYuNi0zNzIgMzcyczE2Ni42IDM3MiAzNzIgMzcyIDM3Mi0xNjYuNiAzNzItMzcyLTE2Ni42LTM3Mi0zNzItMzcyem0xMjguMDEgMTk4LjgzYy4wMyAwIC4wNS4wMS4wOS4wNmw0NS4wMiA0NS4wMWEuMi4yIDAgMCAxIC4wNS4wOS4xMi4xMiAwIDAgMSAwIC4wN2MwIC4wMi0uMDEuMDQtLjA1LjA4TDU1Ny4yNSA1MTJsMTI3Ljg3IDEyNy44NmEuMjcuMjcgMCAwIDEgLjA1LjA2di4wMmEuMTIuMTIgMCAwIDEgMCAuMDdjMCAuMDMtLjAxLjA1LS4wNS4wOWwtNDUuMDIgNDUuMDJhLjIuMiAwIDAgMS0uMDkuMDUuMTIuMTIgMCAwIDEtLjA3IDBjLS4wMiAwLS4wNC0uMDEtLjA4LS4wNUw1MTIgNTU3LjI1IDM4NC4xNCA2ODUuMTJjLS4wNC4wNC0uMDYuMDUtLjA4LjA1YS4xMi4xMiAwIDAgMS0uMDcgMGMtLjAzIDAtLjA1LS4wMS0uMDktLjA1bC00NS4wMi00NS4wMmEuMi4yIDAgMCAxLS4wNS0uMDkuMTIuMTIgMCAwIDEgMC0uMDdjMC0uMDIuMDEtLjA0LjA2LS4wOEw0NjYuNzUgNTEyIDMzOC44OCAzODQuMTRhLjI3LjI3IDAgMCAxLS4wNS0uMDZsLS4wMS0uMDJhLjEyLjEyIDAgMCAxIDAtLjA3YzAtLjAzLjAxLS4wNS4wNS0uMDlsNDUuMDItNDUuMDJhLjIuMiAwIDAgMSAuMDktLjA1LjEyLjEyIDAgMCAxIC4wNyAwYy4wMiAwIC4wNC4wMS4wOC4wNkw1MTIgNDY2Ljc1bDEyNy44Ni0xMjcuODZjLjA0LS4wNS4wNi0uMDYuMDgtLjA2YS4xMi4xMiAwIDAgMSAuMDcgMHoiLz48L3N2Zz4=",N=Object.defineProperty,w=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,L=(H,q,ae)=>q in H?N(H,q,{enumerable:!0,configurable:!0,writable:!0,value:ae}):H[q]=ae,Z=(H,q)=>{for(var ae in q||(q={}))B.call(q,ae)&&L(H,ae,q[ae]);if(w)for(var ae of w(q))C.call(q,ae)&&L(H,ae,q[ae]);return H};const te=H=>o.createElement("svg",Z({viewBox:"64 64 896 896"},H),o.createElement("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}),o.createElement("path",{d:"M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}));var ee="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTEyIDY0QzI2NC42IDY0IDY0IDI2NC42IDY0IDUxMnMyMDAuNiA0NDggNDQ4IDQ0OCA0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NCA1MTIgNjR6bTAgODIwYy0yMDUuNCAwLTM3Mi0xNjYuNi0zNzItMzcyczE2Ni42LTM3MiAzNzItMzcyIDM3MiAxNjYuNiAzNzIgMzcyLTE2Ni42IDM3Mi0zNzIgMzcyeiIvPjxwYXRoIGQ9Ik00NjQgMzM2YTQ4IDQ4IDAgMSAwIDk2IDAgNDggNDggMCAxIDAtOTYgMHptNzIgMTEyaC00OGMtNC40IDAtOCAzLjYtOCA4djI3MmMwIDQuNCAzLjYgOCA4IDhoNDhjNC40IDAgOC0zLjYgOC04VjQ1NmMwLTQuNC0zLjYtOC04LTh6Ii8+PC9zdmc+",_=Object.defineProperty,de=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,ie=(H,q,ae)=>q in H?_(H,q,{enumerable:!0,configurable:!0,writable:!0,value:ae}):H[q]=ae,Q=(H,q)=>{for(var ae in q||(q={}))be.call(q,ae)&&ie(H,ae,q[ae]);if(de)for(var ae of de(q))Te.call(q,ae)&&ie(H,ae,q[ae]);return H};const Y=H=>o.createElement("svg",Q({viewBox:"64 64 896 896"},H),o.createElement("path",{d:"M464 720a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"}));var k="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNDY0IDcyMGE0OCA0OCAwIDEgMCA5NiAwIDQ4IDQ4IDAgMSAwLTk2IDB6bTE2LTMwNHYxODRjMCA0LjQgMy42IDggOCA4aDQ4YzQuNCAwIDgtMy42IDgtOFY0MTZjMC00LjQtMy42LTgtOC04aC00OGMtNC40IDAtOCAzLjYtOCA4em00NzUuNyA0NDAtNDE2LTcyMGMtNi4yLTEwLjctMTYuOS0xNi0yNy43LTE2cy0yMS42IDUuMy0yNy43IDE2bC00MTYgNzIwQzU2IDg3Ny40IDcxLjQgOTA0IDk2IDkwNGg4MzJjMjQuNiAwIDQwLTI2LjYgMjcuNy00OHptLTc4My41LTI3LjlMNTEyIDIzOS45bDMzOS44IDU4OC4ySDE3Mi4yeiIvPjwvc3ZnPg==";function K(H,q){return le(H)||V(H,q)||T(H,q)||re()}function re(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(H,q){if(H){if(typeof H=="string")return D(H,q);var ae=Object.prototype.toString.call(H).slice(8,-1);if(ae==="Object"&&H.constructor&&(ae=H.constructor.name),ae==="Map"||ae==="Set")return Array.from(H);if(ae==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ae))return D(H,q)}}function D(H,q){(q==null||q>H.length)&&(q=H.length);for(var ae=0,Ce=new Array(q);ae<q;ae++)Ce[ae]=H[ae];return Ce}function V(H,q){var ae=H==null?null:typeof Symbol!="undefined"&&H[Symbol.iterator]||H["@@iterator"];if(ae!=null){var Ce,Le,Xe,Ze,je=[],Ye=!0,oe=!1;try{if(Xe=(ae=ae.call(H)).next,q===0){if(Object(ae)!==ae)return;Ye=!1}else for(;!(Ye=(Ce=Xe.call(ae)).done)&&(je.push(Ce.value),je.length!==q);Ye=!0);}catch(fe){oe=!0,Le=fe}finally{try{if(!Ye&&ae.return!=null&&(Ze=ae.return(),Object(Ze)!==Ze))return}finally{if(oe)throw Le}}return je}}function le(H){if(Array.isArray(H))return H}var J={info:te,warning:Y,success:h,error:R},P=function(q){var ae=(0,o.useState)(function(){return J[q.type]}),Ce=K(ae,1),Le=Ce[0];return o.createElement("div",{className:"dumi-default-container markdown","data-type":q.type},o.createElement(Le,null),o.createElement("h4",null,q.title||q.type.toUpperCase()),o.createElement("section",null,q.children))},$=P},76014:function(c,l,e){"use strict";e.d(l,{Z:function(){return Ir}});var o=e(94184),a=e.n(o),r=e(61748),s=e(47697),u=e(67294),v=Object.defineProperty,d=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(F,G,X)=>G in F?v(F,G,{enumerable:!0,configurable:!0,writable:!0,value:X}):F[G]=X,y=(F,G)=>{for(var X in G||(G={}))h.call(G,X)&&p(F,X,G[X]);if(d)for(var X of d(G))m.call(G,X)&&p(F,X,G[X]);return F};const g=F=>u.createElement("svg",y({viewBox:"64 64 896 896"},F),u.createElement("path",{d:"m709.6 210 .4-.2h.2L512 96 313.9 209.8h-.2l.7.3L151.5 304v416L512 928l360.5-208V304l-162.9-94zM482.7 843.6 339.6 761V621.4L210 547.8V372.9l272.7 157.3v313.4zM238.2 321.5l134.7-77.8 138.9 79.7 139.1-79.9 135.2 78-273.9 158-274-158zM814 548.3l-128.8 73.1v139.1l-143.9 83V530.4L814 373.1v175.2z"}));var I="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJtNzA5LjYgMjEwIC40LS4yaC4yTDUxMiA5NiAzMTMuOSAyMDkuOGgtLjJsLjcuM0wxNTEuNSAzMDR2NDE2TDUxMiA5MjhsMzYwLjUtMjA4VjMwNGwtMTYyLjktOTR6TTQ4Mi43IDg0My42IDMzOS42IDc2MVY2MjEuNEwyMTAgNTQ3LjhWMzcyLjlsMjcyLjcgMTU3LjN2MzEzLjR6TTIzOC4yIDMyMS41bDEzNC43LTc3LjggMTM4LjkgNzkuNyAxMzkuMS03OS45IDEzNS4yIDc4LTI3My45IDE1OC0yNzQtMTU4ek04MTQgNTQ4LjNsLTEyOC44IDczLjF2MTM5LjFsLTE0My45IDgzVjUzMC40TDgxNCAzNzMuMXYxNzUuMnoiLz48L3N2Zz4=",b=Object.defineProperty,E=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,N=(F,G,X)=>G in F?b(F,G,{enumerable:!0,configurable:!0,writable:!0,value:X}):F[G]=X,w=(F,G)=>{for(var X in G||(G={}))R.call(G,X)&&N(F,X,G[X]);if(E)for(var X of E(G))A.call(G,X)&&N(F,X,G[X]);return F};const B=F=>u.createElement("svg",w({viewBox:"64 64 896 896"},F),u.createElement("path",{d:"m925.6 405.1-203-253.7a6.5 6.5 0 0 0-5-2.4H306.4c-1.9 0-3.8.9-5 2.4l-203 253.7a6.5 6.5 0 0 0 .2 8.3l408.6 459.5c1.2 1.4 3 2.1 4.8 2.1 1.8 0 3.5-.8 4.8-2.1l408.6-459.5a6.5 6.5 0 0 0 .2-8.3zM645.2 206.4l34.4 133.9-132.5-133.9h98.1zm8.2 178.5H370.6L512 242l141.4 142.9zM378.8 206.4h98.1L344.3 340.3l34.5-133.9zm-53.4 7-44.1 171.5h-93.1l137.2-171.5zM194.6 434.9H289l125.8 247.7-220.2-247.7zM512 763.4 345.1 434.9h333.7L512 763.4zm97.1-80.8L735 434.9h94.4L609.1 682.6zm133.6-297.7-44.1-171.5 137.2 171.5h-93.1z"}));var C="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJtOTI1LjYgNDA1LjEtMjAzLTI1My43YTYuNSA2LjUgMCAwIDAtNS0yLjRIMzA2LjRjLTEuOSAwLTMuOC45LTUgMi40bC0yMDMgMjUzLjdhNi41IDYuNSAwIDAgMCAuMiA4LjNsNDA4LjYgNDU5LjVjMS4yIDEuNCAzIDIuMSA0LjggMi4xIDEuOCAwIDMuNS0uOCA0LjgtMi4xbDQwOC42LTQ1OS41YTYuNSA2LjUgMCAwIDAgLjItOC4zek02NDUuMiAyMDYuNGwzNC40IDEzMy45LTEzMi41LTEzMy45aDk4LjF6bTguMiAxNzguNUgzNzAuNkw1MTIgMjQybDE0MS40IDE0Mi45ek0zNzguOCAyMDYuNGg5OC4xTDM0NC4zIDM0MC4zbDM0LjUtMTMzLjl6bS01My40IDctNDQuMSAxNzEuNWgtOTMuMWwxMzcuMi0xNzEuNXpNMTk0LjYgNDM0LjlIMjg5bDEyNS44IDI0Ny43LTIyMC4yLTI0Ny43ek01MTIgNzYzLjQgMzQ1LjEgNDM0LjloMzMzLjdMNTEyIDc2My40em05Ny4xLTgwLjhMNzM1IDQzNC45aDk0LjRMNjA5LjEgNjgyLjZ6bTEzMy42LTI5Ny43LTQ0LjEtMTcxLjUgMTM3LjIgMTcxLjVoLTkzLjF6Ii8+PC9zdmc+",L=Object.defineProperty,Z=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,_=(F,G,X)=>G in F?L(F,G,{enumerable:!0,configurable:!0,writable:!0,value:X}):F[G]=X,de=(F,G)=>{for(var X in G||(G={}))te.call(G,X)&&_(F,X,G[X]);if(Z)for(var X of Z(G))ee.call(G,X)&&_(F,X,G[X]);return F};const be=F=>u.createElement("svg",de({viewBox:"64 64 896 896"},F),u.createElement("path",{d:"M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"}));var Te="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODQ4IDM1OS4zSDYyNy43TDgyNS44IDEwOWM0LjEtNS4zLjQtMTMtNi4zLTEzSDQzNmMtMi44IDAtNS41IDEuNS02LjkgNEwxNzAgNTQ3LjVjLTMuMSA1LjMuNyAxMiA2LjkgMTJoMTc0LjRsLTg5LjQgMzU3LjZjLTEuOSA3LjggNy41IDEzLjMgMTMuMyA3LjdMODUzLjUgMzczYzUuMi00LjkgMS43LTEzLjctNS41LTEzLjd6TTM3OC4yIDczMi41bDYwLjMtMjQxSDI4MS4xbDE4OS42LTMyNy40aDIyNC42TDQ4NyA0MjcuNGgyMTFMMzc4LjIgNzMyLjV6Ii8+PC9zdmc+",ie=e(20640),Q=e.n(ie),Y=e(60037),k=function(){return u.createElement(u.Fragment,null)},K=k,re=e(87462),T=e(4942),D=e(1413),V=e(97685),le=e(71002),J=e(91),P=e(31131),$=e(21770),H=e(82225),q=(0,u.createContext)(null),ae=u.forwardRef(function(F,G){var X=F.prefixCls,Ee=F.className,xe=F.style,Me=F.id,we=F.active,Ke=F.tabKey,qe=F.children;return u.createElement("div",{id:Me&&"".concat(Me,"-panel-").concat(Ke),role:"tabpanel",tabIndex:we?0:-1,"aria-labelledby":Me&&"".concat(Me,"-tab-").concat(Ke),"aria-hidden":!we,style:xe,className:a()(X,we&&"".concat(X,"-active"),Ee),ref:G},qe)}),Ce=ae,Le=["key","forceRender","style","className"];function Xe(F){var G=F.id,X=F.activeKey,Ee=F.animated,xe=F.tabPosition,Me=F.destroyInactiveTabPane,we=u.useContext(q),Ke=we.prefixCls,qe=we.tabs,rt=Ee.tabPane,Pt="".concat(Ke,"-tabpane");return u.createElement("div",{className:a()("".concat(Ke,"-content-holder"))},u.createElement("div",{className:a()("".concat(Ke,"-content"),"".concat(Ke,"-content-").concat(xe),(0,T.Z)({},"".concat(Ke,"-content-animated"),rt))},qe.map(function(et){var Tt=et.key,ht=et.forceRender,Ct=et.style,Lt=et.className,Gt=(0,J.Z)(et,Le),Mt=Tt===X;return u.createElement(H.ZP,(0,re.Z)({key:Tt,visible:Mt,forceRender:ht,removeOnLeave:!!Me,leavedClassName:"".concat(Pt,"-hidden")},Ee.tabPaneMotion),function(dt,At){var ct=dt.style,jt=dt.className;return u.createElement(Ce,(0,re.Z)({},Gt,{prefixCls:Pt,id:G,tabKey:Tt,animated:rt,active:Mt,style:(0,D.Z)((0,D.Z)({},Ct),ct),className:a()(Lt,jt),ref:At}))})})))}var Ze=e(74902),je=e(48555),Ye=e(66680),oe=e(42550),fe={width:0,height:0,left:0,top:0};function pe(F,G,X){return(0,u.useMemo)(function(){for(var Ee,xe=new Map,Me=G.get((Ee=F[0])===null||Ee===void 0?void 0:Ee.key)||fe,we=Me.left+Me.width,Ke=0;Ke<F.length;Ke+=1){var qe=F[Ke].key,rt=G.get(qe);if(!rt){var Pt;rt=G.get((Pt=F[Ke-1])===null||Pt===void 0?void 0:Pt.key)||fe}var et=xe.get(qe)||(0,D.Z)({},rt);et.right=we-et.left-et.width,xe.set(qe,et)}return xe},[F.map(function(Ee){return Ee.key}).join("_"),G,X])}function me(F,G){var X=u.useRef(F),Ee=u.useState({}),xe=(0,V.Z)(Ee,2),Me=xe[1];function we(Ke){var qe=typeof Ke=="function"?Ke(X.current):Ke;qe!==X.current&&G(qe,X.current),X.current=qe,Me({})}return[X.current,we]}var Pe=.1,se=.01,ve=20,ye=Math.pow(.995,ve);function De(F,G){var X=(0,u.useState)(),Ee=(0,V.Z)(X,2),xe=Ee[0],Me=Ee[1],we=(0,u.useState)(0),Ke=(0,V.Z)(we,2),qe=Ke[0],rt=Ke[1],Pt=(0,u.useState)(0),et=(0,V.Z)(Pt,2),Tt=et[0],ht=et[1],Ct=(0,u.useState)(),Lt=(0,V.Z)(Ct,2),Gt=Lt[0],Mt=Lt[1],dt=(0,u.useRef)();function At(Nt){var wt=Nt.touches[0],nn=wt.screenX,Vt=wt.screenY;Me({x:nn,y:Vt}),window.clearInterval(dt.current)}function ct(Nt){if(xe){Nt.preventDefault();var wt=Nt.touches[0],nn=wt.screenX,Vt=wt.screenY;Me({x:nn,y:Vt});var dn=nn-xe.x,un=Vt-xe.y;G(dn,un);var Yt=Date.now();rt(Yt),ht(Yt-qe),Mt({x:dn,y:un})}}function jt(){if(xe&&(Me(null),Mt(null),Gt)){var Nt=Gt.x/Tt,wt=Gt.y/Tt,nn=Math.abs(Nt),Vt=Math.abs(wt);if(Math.max(nn,Vt)<Pe)return;var dn=Nt,un=wt;dt.current=window.setInterval(function(){if(Math.abs(dn)<se&&Math.abs(un)<se){window.clearInterval(dt.current);return}dn*=ye,un*=ye,G(dn*ve,un*ve)},ve)}}var Ht=(0,u.useRef)();function on(Nt){var wt=Nt.deltaX,nn=Nt.deltaY,Vt=0,dn=Math.abs(wt),un=Math.abs(nn);dn===un?Vt=Ht.current==="x"?wt:nn:dn>un?(Vt=wt,Ht.current="x"):(Vt=nn,Ht.current="y"),G(-Vt,-Vt)&&Nt.preventDefault()}var Ut=(0,u.useRef)(null);Ut.current={onTouchStart:At,onTouchMove:ct,onTouchEnd:jt,onWheel:on},u.useEffect(function(){function Nt(dn){Ut.current.onTouchStart(dn)}function wt(dn){Ut.current.onTouchMove(dn)}function nn(dn){Ut.current.onTouchEnd(dn)}function Vt(dn){Ut.current.onWheel(dn)}return document.addEventListener("touchmove",wt,{passive:!1}),document.addEventListener("touchend",nn,{passive:!1}),F.current.addEventListener("touchstart",Nt,{passive:!1}),F.current.addEventListener("wheel",Vt),function(){document.removeEventListener("touchmove",wt),document.removeEventListener("touchend",nn)}},[])}var ze=e(8410);function bt(F){var G=(0,u.useState)(0),X=(0,V.Z)(G,2),Ee=X[0],xe=X[1],Me=(0,u.useRef)(0),we=(0,u.useRef)();return we.current=F,(0,ze.o)(function(){var Ke;(Ke=we.current)===null||Ke===void 0||Ke.call(we)},[Ee]),function(){Me.current===Ee&&(Me.current+=1,xe(Me.current))}}function at(F){var G=(0,u.useRef)([]),X=(0,u.useState)({}),Ee=(0,V.Z)(X,2),xe=Ee[1],Me=(0,u.useRef)(typeof F=="function"?F():F),we=bt(function(){var qe=Me.current;G.current.forEach(function(rt){qe=rt(qe)}),G.current=[],Me.current=qe,xe({})});function Ke(qe){G.current.push(qe),we()}return[Me.current,Ke]}var lt={width:0,height:0,left:0,top:0,right:0};function St(F,G,X,Ee,xe,Me,we){var Ke=we.tabs,qe=we.tabPosition,rt=we.rtl,Pt,et,Tt;return["top","bottom"].includes(qe)?(Pt="width",et=rt?"right":"left",Tt=Math.abs(X)):(Pt="height",et="top",Tt=-X),(0,u.useMemo)(function(){if(!Ke.length)return[0,0];for(var ht=Ke.length,Ct=ht,Lt=0;Lt<ht;Lt+=1){var Gt=F.get(Ke[Lt].key)||lt;if(Gt[et]+Gt[Pt]>Tt+G){Ct=Lt-1;break}}for(var Mt=0,dt=ht-1;dt>=0;dt-=1){var At=F.get(Ke[dt].key)||lt;if(At[et]<Tt){Mt=dt+1;break}}return Mt>=Ct?[0,0]:[Mt,Ct]},[F,G,Ee,xe,Me,Tt,qe,Ke.map(function(ht){return ht.key}).join("_"),rt])}function Bt(F){var G;return F instanceof Map?(G={},F.forEach(function(X,Ee){G[Ee]=X})):G=F,JSON.stringify(G)}var Ot="TABS_DQ";function Wt(F){return String(F).replace(/"/g,Ot)}function x(F,G,X,Ee){return!(!X||Ee||F===!1||F===void 0&&(G===!1||G===null))}function U(F,G){var X=F.prefixCls,Ee=F.editable,xe=F.locale,Me=F.style;return!Ee||Ee.showAdd===!1?null:u.createElement("button",{ref:G,type:"button",className:"".concat(X,"-nav-add"),style:Me,"aria-label":(xe==null?void 0:xe.addAriaLabel)||"Add tab",onClick:function(Ke){Ee.onEdit("add",{event:Ke})}},Ee.addIcon||"+")}var ne=u.forwardRef(U),ue=u.forwardRef(function(F,G){var X=F.position,Ee=F.prefixCls,xe=F.extra;if(!xe)return null;var Me,we={};return(0,le.Z)(xe)==="object"&&!u.isValidElement(xe)?we=xe:we.right=xe,X==="right"&&(Me=we.right),X==="left"&&(Me=we.left),Me?u.createElement("div",{className:"".concat(Ee,"-extra-content"),ref:G},Me):null}),Ie=ue,Oe=e(2788),Se=e(34203),$e=e(27571),Ve=e(7028),Ge=e(73935),vt=u.createContext(null),he=vt;function Be(F){return F?Array.isArray(F)?F:[F]:[]}function Fe(F,G,X,Ee){return u.useMemo(function(){var xe=Be(X!=null?X:G),Me=Be(Ee!=null?Ee:G),we=new Set(xe),Ke=new Set(Me);return F&&(we.has("hover")&&(we.delete("hover"),we.add("click")),Ke.has("hover")&&(Ke.delete("hover"),Ke.add("click"))),[we,Ke]},[F,G,X,Ee])}var Re=e(5110);function Je(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],G=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],X=arguments.length>2?arguments[2]:void 0;return X?F[0]===G[0]:F[0]===G[0]&&F[1]===G[1]}function Ue(F,G,X,Ee){for(var xe=X.points,Me=Object.keys(F),we=0;we<Me.length;we+=1){var Ke,qe=Me[we];if(Je((Ke=F[qe])===null||Ke===void 0?void 0:Ke.points,xe,Ee))return"".concat(G,"-placement-").concat(qe)}return""}function It(F,G,X,Ee){return G||(X?{motionName:"".concat(F,"-").concat(X)}:Ee?{motionName:Ee}:null)}function xt(F){return F.ownerDocument.defaultView}function Dt(F){for(var G=[],X=F==null?void 0:F.parentElement,Ee=["hidden","scroll","clip","auto"];X;){var xe=xt(X).getComputedStyle(X),Me=xe.overflowX,we=xe.overflowY,Ke=xe.overflow;[Me,we,Ke].some(function(qe){return Ee.includes(qe)})&&G.push(X),X=X.parentElement}return G}function En(F){var G=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Number.isNaN(F)?G:F}function Xt(F){return En(parseFloat(F),0)}function Mn(F,G){var X=(0,D.Z)({},F);return(G||[]).forEach(function(Ee){if(!(Ee instanceof HTMLBodyElement||Ee instanceof HTMLHtmlElement)){var xe=xt(Ee).getComputedStyle(Ee),Me=xe.overflow,we=xe.overflowClipMargin,Ke=xe.borderTopWidth,qe=xe.borderBottomWidth,rt=xe.borderLeftWidth,Pt=xe.borderRightWidth,et=Ee.getBoundingClientRect(),Tt=Ee.offsetHeight,ht=Ee.clientHeight,Ct=Ee.offsetWidth,Lt=Ee.clientWidth,Gt=Xt(Ke),Mt=Xt(qe),dt=Xt(rt),At=Xt(Pt),ct=En(Math.round(et.width/Ct*1e3)/1e3),jt=En(Math.round(et.height/Tt*1e3)/1e3),Ht=(Ct-Lt-dt-At)*ct,on=(Tt-ht-Gt-Mt)*jt,Ut=Gt*jt,Nt=Mt*jt,wt=dt*ct,nn=At*ct,Vt=0,dn=0;if(Me==="clip"){var un=Xt(we);Vt=un*ct,dn=un*jt}var Yt=et.x+wt-Vt,ln=et.y+Ut-dn,en=Yt+et.width+2*Vt-wt-nn-Ht,Kn=ln+et.height+2*dn-Ut-Nt-on;X.left=Math.max(X.left,Yt),X.top=Math.max(X.top,ln),X.right=Math.min(X.right,en),X.bottom=Math.min(X.bottom,Kn)}}),X}function Wn(F){var G=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,X="".concat(G),Ee=X.match(/^(.*)\%$/);return Ee?F*(parseFloat(Ee[1])/100):parseFloat(X)}function Ar(F,G){var X=G||[],Ee=(0,V.Z)(X,2),xe=Ee[0],Me=Ee[1];return[Wn(F.width,xe),Wn(F.height,Me)]}function Kr(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return[F[0],F[1]]}function jn(F,G){var X=G[0],Ee=G[1],xe,Me;return X==="t"?Me=F.y:X==="b"?Me=F.y+F.height:Me=F.y+F.height/2,Ee==="l"?xe=F.x:Ee==="r"?xe=F.x+F.width:xe=F.x+F.width/2,{x:xe,y:Me}}function Bn(F,G){var X={t:"b",b:"t",l:"r",r:"l"};return F.map(function(Ee,xe){return xe===G?X[Ee]||"c":Ee}).join("")}function Gn(F,G,X,Ee,xe,Me,we){var Ke=u.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:xe[Ee]||{}}),qe=(0,V.Z)(Ke,2),rt=qe[0],Pt=qe[1],et=u.useRef(0),Tt=u.useMemo(function(){return G?Dt(G):[]},[G]),ht=u.useRef({}),Ct=function(){ht.current={}};F||Ct();var Lt=(0,Ye.Z)(function(){if(G&&X&&F){let pa=function(Wi,_o){var Ci=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ha,Uo=Sn.x+Wi,iu=Sn.y+_o,Gi=Uo+On,bo=iu+yn,Vi=Math.max(Uo,Ci.left),Yi=Math.max(iu,Ci.top),Kt=Math.min(Gi,Ci.right),Cn=Math.min(bo,Ci.bottom);return Math.max(0,(Kt-Vi)*(Cn-Yi))},Pi=function(){Ur=Sn.y+nr,qa=Ur+yn,na=Sn.x+Rn,Yn=na+On};var dt,At,ct=G,jt=ct.ownerDocument,Ht=xt(ct),on=Ht.getComputedStyle(ct),Ut=on.width,Nt=on.height,wt=on.position,nn=ct.style.left,Vt=ct.style.top,dn=ct.style.right,un=ct.style.bottom,Yt=(0,D.Z)((0,D.Z)({},xe[Ee]),Me),ln=jt.createElement("div");(dt=ct.parentElement)===null||dt===void 0||dt.appendChild(ln),ln.style.left="".concat(ct.offsetLeft,"px"),ln.style.top="".concat(ct.offsetTop,"px"),ln.style.position=wt,ln.style.height="".concat(ct.offsetHeight,"px"),ln.style.width="".concat(ct.offsetWidth,"px"),ct.style.left="0",ct.style.top="0",ct.style.right="auto",ct.style.bottom="auto";var en;if(Array.isArray(X))en={x:X[0],y:X[1],width:0,height:0};else{var Kn=X.getBoundingClientRect();en={x:Kn.x,y:Kn.y,width:Kn.width,height:Kn.height}}var Sn=ct.getBoundingClientRect(),Jn=jt.documentElement,xr=Jn.clientWidth,Tn=Jn.clientHeight,kn=Jn.scrollWidth,er=Jn.scrollHeight,ar=Jn.scrollTop,vn=Jn.scrollLeft,yn=Sn.height,On=Sn.width,Un=en.height,or=en.width,_n={left:0,top:0,right:xr,bottom:Tn},Wr={left:-vn,top:-ar,right:kn-vn,bottom:er-ar},vr=Yt.htmlRegion,Ca="visible",Mr="visibleFirst";vr!=="scroll"&&vr!==Mr&&(vr=Ca);var gn=vr===Mr,Pr=Mn(Wr,Tt),Ln=Mn(_n,Tt),Ha=vr===Ca?Ln:Pr,wr=gn?Ln:Ha;ct.style.left="auto",ct.style.top="auto",ct.style.right="0",ct.style.bottom="0";var Qr=ct.getBoundingClientRect();ct.style.left=nn,ct.style.top=Vt,ct.style.right=dn,ct.style.bottom=un,(At=ct.parentElement)===null||At===void 0||At.removeChild(ln);var Dn=En(Math.round(On/parseFloat(Ut)*1e3)/1e3),In=En(Math.round(yn/parseFloat(Nt)*1e3)/1e3);if(Dn===0||In===0||(0,Se.S)(X)&&!(0,Re.Z)(X))return;var ca=Yt.offset,Vn=Yt.targetOffset,Fr=Ar(Sn,ca),Nr=(0,V.Z)(Fr,2),Lr=Nr[0],Fn=Nr[1],Er=Ar(en,Vn),Ka=(0,V.Z)(Er,2),Ja=Ka[0],Br=Ka[1];en.x-=Ja,en.y-=Br;var $r=Yt.points||[],cr=(0,V.Z)($r,2),ta=cr[0],Gr=cr[1],Fa=Kr(Gr),Oa=Kr(ta),da=jn(en,Fa),fo=jn(Sn,Oa),fa=(0,D.Z)({},Yt),Rn=da.x-fo.x+Lr,nr=da.y-fo.y+Fn,ir=pa(Rn,nr),Hr=pa(Rn,nr,Ln),ya=jn(en,["t","l"]),kr=jn(Sn,["t","l"]),jr=jn(en,["b","r"]),Wa=jn(Sn,["b","r"]),_a=Yt.overflow||{},ko=_a.adjustX,Yo=_a.adjustY,Xr=_a.shiftX,Cr=_a.shiftY,zn=function(_o){return typeof _o=="boolean"?_o:_o>=0},Ur,qa,na,Yn;Pi();var An=zn(Yo),pr=Oa[0]===Fa[0];if(An&&Oa[0]==="t"&&(qa>wr.bottom||ht.current.bt)){var mr=nr;pr?mr-=yn-Un:mr=ya.y-Wa.y-Fn;var Or=pa(Rn,mr),Jr=pa(Rn,mr,Ln);Or>ir||Or===ir&&(!gn||Jr>=Hr)?(ht.current.bt=!0,nr=mr,Fn=-Fn,fa.points=[Bn(Oa,0),Bn(Fa,0)]):ht.current.bt=!1}if(An&&Oa[0]==="b"&&(Ur<wr.top||ht.current.tb)){var vo=nr;pr?vo+=yn-Un:vo=jr.y-kr.y-Fn;var ru=pa(Rn,vo),Ga=pa(Rn,vo,Ln);ru>ir||ru===ir&&(!gn||Ga>=Hr)?(ht.current.tb=!0,nr=vo,Fn=-Fn,fa.points=[Bn(Oa,0),Bn(Fa,0)]):ht.current.tb=!1}var si=zn(ko),Qo=Oa[1]===Fa[1];if(si&&Oa[1]==="l"&&(Yn>wr.right||ht.current.rl)){var ga=Rn;Qo?ga-=On-or:ga=ya.x-Wa.x-Lr;var Xo=pa(ga,nr),Hi=pa(ga,nr,Ln);Xo>ir||Xo===ir&&(!gn||Hi>=Hr)?(ht.current.rl=!0,Rn=ga,Lr=-Lr,fa.points=[Bn(Oa,1),Bn(Fa,1)]):ht.current.rl=!1}if(si&&Oa[1]==="r"&&(na<wr.left||ht.current.lr)){var eo=Rn;Qo?eo+=On-or:eo=jr.x-kr.x-Lr;var Jo=pa(eo,nr),jo=pa(eo,nr,Ln);Jo>ir||Jo===ir&&(!gn||jo>=Hr)?(ht.current.lr=!0,Rn=eo,Lr=-Lr,fa.points=[Bn(Oa,1),Bn(Fa,1)]):ht.current.lr=!1}Pi();var zr=Xr===!0?0:Xr;typeof zr=="number"&&(na<Ln.left&&(Rn-=na-Ln.left-Lr,en.x+or<Ln.left+zr&&(Rn+=en.x-Ln.left+or-zr)),Yn>Ln.right&&(Rn-=Yn-Ln.right-Lr,en.x>Ln.right-zr&&(Rn+=en.x-Ln.right+zr)));var Ia=Cr===!0?0:Cr;typeof Ia=="number"&&(Ur<Ln.top&&(nr-=Ur-Ln.top-Fn,en.y+Un<Ln.top+Ia&&(nr+=en.y-Ln.top+Un-Ia)),qa>Ln.bottom&&(nr-=qa-Ln.bottom-Fn,en.y>Ln.bottom-Ia&&(nr+=en.y-Ln.bottom+Ia)));var po=Sn.x+Rn,Ki=po+On,va=Sn.y+nr,Ra=va+yn,Ti=en.x,au=Ti+or,to=en.y,mo=to+Un,hr=Math.max(po,Ti),tr=Math.min(Ki,au),ur=(hr+tr)/2,ra=ur-po,xa=Math.max(va,to),ho=Math.min(Ra,mo),yo=(xa+ho)/2,ou=yo-va;we==null||we(G,fa);var Hu=Qr.right-Sn.x-(Rn+Sn.width),Ku=Qr.bottom-Sn.y-(nr+Sn.height);Pt({ready:!0,offsetX:Rn/Dn,offsetY:nr/In,offsetR:Hu/Dn,offsetB:Ku/In,arrowX:ra/Dn,arrowY:ou/In,scaleX:Dn,scaleY:In,align:fa})}}),Gt=function(){et.current+=1;var At=et.current;Promise.resolve().then(function(){et.current===At&&Lt()})},Mt=function(){Pt(function(At){return(0,D.Z)((0,D.Z)({},At),{},{ready:!1})})};return(0,ze.Z)(Mt,[Ee]),(0,ze.Z)(function(){F||Mt()},[F]),[rt.ready,rt.offsetX,rt.offsetY,rt.offsetR,rt.offsetB,rt.arrowX,rt.arrowY,rt.scaleX,rt.scaleY,rt.align,Gt]}function pt(F,G,X,Ee,xe){(0,ze.Z)(function(){if(F&&G&&X){let et=function(){Ee(),xe()};var Me=G,we=X,Ke=Dt(Me),qe=Dt(we),rt=xt(we),Pt=new Set([rt].concat((0,Ze.Z)(Ke),(0,Ze.Z)(qe)));return Pt.forEach(function(Tt){Tt.addEventListener("scroll",et,{passive:!0})}),rt.addEventListener("resize",et,{passive:!0}),Ee(),function(){Pt.forEach(function(Tt){Tt.removeEventListener("scroll",et),rt.removeEventListener("resize",et)})}}},[F,G,X])}var st=e(56790),mt=e(75164);function kt(F,G,X,Ee,xe,Me,we,Ke){var qe=u.useRef(F),rt=u.useRef(!1);qe.current!==F&&(rt.current=!0,qe.current=F),u.useEffect(function(){var Pt=(0,mt.Z)(function(){rt.current=!1});return function(){mt.Z.cancel(Pt)}},[F]),u.useEffect(function(){if(G&&Ee&&(!xe||Me)){var Pt=function(){var wt=!1,nn=function(un){var Yt=un.target;wt=we(Yt)},Vt=function(un){var Yt=un.target;!rt.current&&qe.current&&!wt&&!we(Yt)&&Ke(!1)};return[nn,Vt]},et=Pt(),Tt=(0,V.Z)(et,2),ht=Tt[0],Ct=Tt[1],Lt=Pt(),Gt=(0,V.Z)(Lt,2),Mt=Gt[0],dt=Gt[1],At=xt(Ee);At.addEventListener("mousedown",ht,!0),At.addEventListener("click",Ct,!0),At.addEventListener("contextmenu",Ct,!0);var ct=(0,$e.A)(X);if(ct&&(ct.addEventListener("mousedown",Mt,!0),ct.addEventListener("click",dt,!0),ct.addEventListener("contextmenu",dt,!0)),!1)var jt,Ht,on,Ut;return function(){At.removeEventListener("mousedown",ht,!0),At.removeEventListener("click",Ct,!0),At.removeEventListener("contextmenu",Ct,!0),ct&&(ct.removeEventListener("mousedown",Mt,!0),ct.removeEventListener("click",dt,!0),ct.removeEventListener("contextmenu",dt,!0))}}},[G,X,Ee,xe,Me])}function qt(F){var G=F.prefixCls,X=F.align,Ee=F.arrow,xe=F.arrowPos,Me=Ee||{},we=Me.className,Ke=Me.content,qe=xe.x,rt=qe===void 0?0:qe,Pt=xe.y,et=Pt===void 0?0:Pt,Tt=u.useRef();if(!X||!X.points)return null;var ht={position:"absolute"};if(X.autoArrow!==!1){var Ct=X.points[0],Lt=X.points[1],Gt=Ct[0],Mt=Ct[1],dt=Lt[0],At=Lt[1];Gt===dt||!["t","b"].includes(Gt)?ht.top=et:Gt==="t"?ht.top=0:ht.bottom=0,Mt===At||!["l","r"].includes(Mt)?ht.left=rt:Mt==="l"?ht.left=0:ht.right=0}return u.createElement("div",{ref:Tt,className:a()("".concat(G,"-arrow"),we),style:ht},Ke)}function zt(F){var G=F.prefixCls,X=F.open,Ee=F.zIndex,xe=F.mask,Me=F.motion;return xe?u.createElement(H.ZP,(0,re.Z)({},Me,{motionAppear:!0,visible:X,removeOnLeave:!0}),function(we){var Ke=we.className;return u.createElement("div",{style:{zIndex:Ee},className:a()("".concat(G,"-mask"),Ke)})}):null}var Zn=u.memo(function(F){var G=F.children;return G},function(F,G){return G.cache}),bn=Zn,qn=u.forwardRef(function(F,G){var X=F.popup,Ee=F.className,xe=F.prefixCls,Me=F.style,we=F.target,Ke=F.onVisibleChanged,qe=F.open,rt=F.keepDom,Pt=F.onClick,et=F.mask,Tt=F.arrow,ht=F.arrowPos,Ct=F.align,Lt=F.motion,Gt=F.maskMotion,Mt=F.forceRender,dt=F.getPopupContainer,At=F.autoDestroy,ct=F.portal,jt=F.zIndex,Ht=F.onMouseEnter,on=F.onMouseLeave,Ut=F.onPointerEnter,Nt=F.ready,wt=F.offsetX,nn=F.offsetY,Vt=F.offsetR,dn=F.offsetB,un=F.onAlign,Yt=F.onPrepare,ln=F.stretch,en=F.targetWidth,Kn=F.targetHeight,Sn=typeof X=="function"?X():X,Jn=qe||rt,xr=(dt==null?void 0:dt.length)>0,Tn=u.useState(!dt||!xr),kn=(0,V.Z)(Tn,2),er=kn[0],ar=kn[1];if((0,ze.Z)(function(){!er&&xr&&we&&ar(!0)},[er,xr,we]),!er)return null;var vn="auto",yn={left:"-1000vw",top:"-1000vh",right:vn,bottom:vn};if(Nt||!qe){var On=Ct.points,Un=Ct._experimental,or=Un==null?void 0:Un.dynamicInset,_n=or&&On[0][1]==="r",Wr=or&&On[0][0]==="b";_n?(yn.right=Vt,yn.left=vn):(yn.left=wt,yn.right=vn),Wr?(yn.bottom=dn,yn.top=vn):(yn.top=nn,yn.bottom=vn)}var vr={};return ln&&(ln.includes("height")&&Kn?vr.height=Kn:ln.includes("minHeight")&&Kn&&(vr.minHeight=Kn),ln.includes("width")&&en?vr.width=en:ln.includes("minWidth")&&en&&(vr.minWidth=en)),qe||(vr.pointerEvents="none"),u.createElement(ct,{open:Mt||Jn,getContainer:dt&&function(){return dt(we)},autoDestroy:At},u.createElement(zt,{prefixCls:xe,open:qe,zIndex:jt,mask:et,motion:Gt}),u.createElement(je.Z,{onResize:un,disabled:!qe},function(Ca){return u.createElement(H.ZP,(0,re.Z)({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:Mt,leavedClassName:"".concat(xe,"-hidden")},Lt,{onAppearPrepare:Yt,onEnterPrepare:Yt,visible:qe,onVisibleChanged:function(gn){var Pr;Lt==null||(Pr=Lt.onVisibleChanged)===null||Pr===void 0||Pr.call(Lt,gn),Ke(gn)}}),function(Mr,gn){var Pr=Mr.className,Ln=Mr.style,Ha=a()(xe,Pr,Ee);return u.createElement("div",{ref:(0,oe.sQ)(Ca,G,gn),className:Ha,style:(0,D.Z)((0,D.Z)((0,D.Z)((0,D.Z)({"--arrow-x":"".concat(ht.x||0,"px"),"--arrow-y":"".concat(ht.y||0,"px")},yn),vr),Ln),{},{boxSizing:"border-box",zIndex:jt},Me),onMouseEnter:Ht,onMouseLeave:on,onPointerEnter:Ut,onClick:Pt},Tt&&u.createElement(qt,{prefixCls:xe,arrow:Tt,arrowPos:ht,align:Ct}),u.createElement(bn,{cache:!qe},Sn))})}))}),qr=qn,Nn=u.forwardRef(function(F,G){var X=F.children,Ee=F.getTriggerDOMNode,xe=(0,oe.Yr)(X),Me=u.useCallback(function(Ke){(0,oe.mH)(G,Ee?Ee(Ke):Ke)},[Ee]),we=(0,oe.x1)(Me,X.ref);return xe?u.cloneElement(X,{ref:we}):X}),ha=Nn,wa=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];function Ua(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Oe.Z,G=u.forwardRef(function(X,Ee){var xe=X.prefixCls,Me=xe===void 0?"rc-trigger-popup":xe,we=X.children,Ke=X.action,qe=Ke===void 0?"hover":Ke,rt=X.showAction,Pt=X.hideAction,et=X.popupVisible,Tt=X.defaultPopupVisible,ht=X.onPopupVisibleChange,Ct=X.afterPopupVisibleChange,Lt=X.mouseEnterDelay,Gt=X.mouseLeaveDelay,Mt=Gt===void 0?.1:Gt,dt=X.focusDelay,At=X.blurDelay,ct=X.mask,jt=X.maskClosable,Ht=jt===void 0?!0:jt,on=X.getPopupContainer,Ut=X.forceRender,Nt=X.autoDestroy,wt=X.destroyPopupOnHide,nn=X.popup,Vt=X.popupClassName,dn=X.popupStyle,un=X.popupPlacement,Yt=X.builtinPlacements,ln=Yt===void 0?{}:Yt,en=X.popupAlign,Kn=X.zIndex,Sn=X.stretch,Jn=X.getPopupClassNameFromAlign,xr=X.alignPoint,Tn=X.onPopupClick,kn=X.onPopupAlign,er=X.arrow,ar=X.popupMotion,vn=X.maskMotion,yn=X.popupTransitionName,On=X.popupAnimation,Un=X.maskTransitionName,or=X.maskAnimation,_n=X.className,Wr=X.getTriggerDOMNode,vr=(0,J.Z)(X,wa),Ca=Nt||wt||!1,Mr=u.useState(!1),gn=(0,V.Z)(Mr,2),Pr=gn[0],Ln=gn[1];(0,ze.Z)(function(){Ln((0,P.Z)())},[]);var Ha=u.useRef({}),wr=u.useContext(he),Qr=u.useMemo(function(){return{registerSubPopup:function(Cn,br){Ha.current[Cn]=br,wr==null||wr.registerSubPopup(Cn,br)}}},[wr]),Dn=(0,Ve.Z)(),In=u.useState(null),ca=(0,V.Z)(In,2),Vn=ca[0],Fr=ca[1],Nr=(0,Ye.Z)(function(Kt){(0,Se.S)(Kt)&&Vn!==Kt&&Fr(Kt),wr==null||wr.registerSubPopup(Dn,Kt)}),Lr=u.useState(null),Fn=(0,V.Z)(Lr,2),Er=Fn[0],Ka=Fn[1],Ja=(0,Ye.Z)(function(Kt){(0,Se.S)(Kt)&&Er!==Kt&&Ka(Kt)}),Br=u.Children.only(we),$r=(Br==null?void 0:Br.props)||{},cr={},ta=(0,Ye.Z)(function(Kt){var Cn,br,aa=Er;return(aa==null?void 0:aa.contains(Kt))||((Cn=(0,$e.A)(aa))===null||Cn===void 0?void 0:Cn.host)===Kt||Kt===aa||(Vn==null?void 0:Vn.contains(Kt))||((br=(0,$e.A)(Vn))===null||br===void 0?void 0:br.host)===Kt||Kt===Vn||Object.values(Ha.current).some(function(Zr){return(Zr==null?void 0:Zr.contains(Kt))||Kt===Zr})}),Gr=It(Me,ar,On,yn),Fa=It(Me,vn,or,Un),Oa=u.useState(Tt||!1),da=(0,V.Z)(Oa,2),fo=da[0],fa=da[1],Rn=et!=null?et:fo,nr=(0,Ye.Z)(function(Kt){et===void 0&&fa(Kt)});(0,ze.Z)(function(){fa(et||!1)},[et]);var ir=u.useRef(Rn);ir.current=Rn;var Hr=(0,Ye.Z)(function(Kt){(0,Ge.flushSync)(function(){Rn!==Kt&&(nr(Kt),ht==null||ht(Kt))})}),ya=u.useRef(),kr=function(){clearTimeout(ya.current)},jr=function(Cn){var br=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;kr(),br===0?Hr(Cn):ya.current=setTimeout(function(){Hr(Cn)},br*1e3)};u.useEffect(function(){return kr},[]);var Wa=u.useState(!1),_a=(0,V.Z)(Wa,2),ko=_a[0],Yo=_a[1];(0,ze.Z)(function(Kt){(!Kt||Rn)&&Yo(!0)},[Rn]);var Xr=u.useState(null),Cr=(0,V.Z)(Xr,2),zn=Cr[0],Ur=Cr[1],qa=u.useState([0,0]),na=(0,V.Z)(qa,2),Yn=na[0],An=na[1],pr=function(Cn){An([Cn.clientX,Cn.clientY])},mr=Gn(Rn,Vn,xr?Yn:Er,un,ln,en,kn),Or=(0,V.Z)(mr,11),Jr=Or[0],vo=Or[1],ru=Or[2],Ga=Or[3],si=Or[4],Qo=Or[5],ga=Or[6],Xo=Or[7],Hi=Or[8],eo=Or[9],Jo=Or[10],jo=Fe(Pr,qe,rt,Pt),zr=(0,V.Z)(jo,2),Ia=zr[0],po=zr[1],Ki=Ia.has("click"),va=po.has("click")||po.has("contextMenu"),Ra=(0,Ye.Z)(function(){ko||Jo()}),Ti=function(){ir.current&&xr&&va&&jr(!1)};pt(Rn,Er,Vn,Ra,Ti),(0,ze.Z)(function(){Ra()},[Yn,un]),(0,ze.Z)(function(){Rn&&!(ln!=null&&ln[un])&&Ra()},[JSON.stringify(en)]);var au=u.useMemo(function(){var Kt=Ue(ln,Me,eo,xr);return a()(Kt,Jn==null?void 0:Jn(eo))},[eo,Jn,ln,Me,xr]);u.useImperativeHandle(Ee,function(){return{forceAlign:Ra}});var to=u.useState(0),mo=(0,V.Z)(to,2),hr=mo[0],tr=mo[1],ur=u.useState(0),ra=(0,V.Z)(ur,2),xa=ra[0],ho=ra[1],yo=function(){if(Sn&&Er){var Cn=Er.getBoundingClientRect();tr(Cn.width),ho(Cn.height)}},ou=function(){yo(),Ra()},Hu=function(Cn){Yo(!1),Jo(),Ct==null||Ct(Cn)},Ku=function(){return new Promise(function(Cn){yo(),Ur(function(){return Cn})})};(0,ze.Z)(function(){zn&&(Jo(),zn(),Ur(null))},[zn]);function pa(Kt,Cn,br,aa){cr[Kt]=function(Zr){var Rr;aa==null||aa(Zr),jr(Cn,br);for(var uu=arguments.length,Wu=new Array(uu>1?uu-1:0),su=1;su<uu;su++)Wu[su-1]=arguments[su];(Rr=$r[Kt])===null||Rr===void 0||Rr.call.apply(Rr,[$r,Zr].concat(Wu))}}(Ki||va)&&(cr.onClick=function(Kt){var Cn;ir.current&&va?jr(!1):!ir.current&&Ki&&(pr(Kt),jr(!0));for(var br=arguments.length,aa=new Array(br>1?br-1:0),Zr=1;Zr<br;Zr++)aa[Zr-1]=arguments[Zr];(Cn=$r.onClick)===null||Cn===void 0||Cn.call.apply(Cn,[$r,Kt].concat(aa))}),kt(Rn,va,Er,Vn,ct,Ht,ta,jr);var Pi=Ia.has("hover"),Wi=po.has("hover"),_o,Ci;Pi&&(pa("onMouseEnter",!0,Lt,function(Kt){pr(Kt)}),pa("onPointerEnter",!0,Lt,function(Kt){pr(Kt)}),_o=function(){(Rn||ko)&&jr(!0,Lt)},xr&&(cr.onMouseMove=function(Kt){var Cn;(Cn=$r.onMouseMove)===null||Cn===void 0||Cn.call($r,Kt)})),Wi&&(pa("onMouseLeave",!1,Mt),pa("onPointerLeave",!1,Mt),Ci=function(){jr(!1,Mt)}),Ia.has("focus")&&pa("onFocus",!0,dt),po.has("focus")&&pa("onBlur",!1,At),Ia.has("contextMenu")&&(cr.onContextMenu=function(Kt){var Cn;ir.current&&po.has("contextMenu")?jr(!1):(pr(Kt),jr(!0)),Kt.preventDefault();for(var br=arguments.length,aa=new Array(br>1?br-1:0),Zr=1;Zr<br;Zr++)aa[Zr-1]=arguments[Zr];(Cn=$r.onContextMenu)===null||Cn===void 0||Cn.call.apply(Cn,[$r,Kt].concat(aa))}),_n&&(cr.className=a()($r.className,_n));var Uo=(0,D.Z)((0,D.Z)({},$r),cr),iu={},Gi=["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"];Gi.forEach(function(Kt){vr[Kt]&&(iu[Kt]=function(){for(var Cn,br=arguments.length,aa=new Array(br),Zr=0;Zr<br;Zr++)aa[Zr]=arguments[Zr];(Cn=Uo[Kt])===null||Cn===void 0||Cn.call.apply(Cn,[Uo].concat(aa)),vr[Kt].apply(vr,aa)})});var bo=u.cloneElement(Br,(0,D.Z)((0,D.Z)({},Uo),iu)),Vi={x:Qo,y:ga},Yi=er?(0,D.Z)({},er!==!0?er:{}):null;return u.createElement(u.Fragment,null,u.createElement(je.Z,{disabled:!Rn,ref:Ja,onResize:ou},u.createElement(ha,{getTriggerDOMNode:Wr},bo)),u.createElement(he.Provider,{value:Qr},u.createElement(qr,{portal:F,ref:Nr,prefixCls:Me,popup:nn,className:a()(Vt,au),style:dn,target:Er,onMouseEnter:_o,onMouseLeave:Ci,onPointerEnter:_o,zIndex:Kn,open:Rn,keepDom:ko,onClick:Tn,mask:ct,motion:Gr,maskMotion:Fa,onVisibleChanged:Hu,onPrepare:Ku,forceRender:Ut,autoDestroy:Ca,getPopupContainer:on,align:eo,arrow:Yi,arrowPos:Vi,ready:Jr,offsetX:vo,offsetY:ru,offsetR:Ga,offsetB:si,onAlign:Ra,stretch:Sn,targetWidth:hr/Xo,targetHeight:xa/Hi})))});return G}var ia=Ua(Oe.Z),Hn=e(15105),Oo=Hn.Z.ESC,Qa=Hn.Z.TAB;function ua(F){var G=F.visible,X=F.triggerRef,Ee=F.onVisibleChange,xe=F.autoFocus,Me=F.overlayRef,we=u.useRef(!1),Ke=function(){if(G){var et,Tt;(et=X.current)===null||et===void 0||(Tt=et.focus)===null||Tt===void 0||Tt.call(et),Ee==null||Ee(!1)}},qe=function(){var et;return(et=Me.current)!==null&&et!==void 0&&et.focus?(Me.current.focus(),we.current=!0,!0):!1},rt=function(et){switch(et.keyCode){case Oo:Ke();break;case Qa:{var Tt=!1;we.current||(Tt=qe()),Tt?et.preventDefault():Ke();break}}};u.useEffect(function(){return G?(window.addEventListener("keydown",rt),xe&&(0,mt.Z)(qe,3),function(){window.removeEventListener("keydown",rt),we.current=!1}):function(){we.current=!1}},[G])}var Zo=(0,u.forwardRef)(function(F,G){var X=F.overlay,Ee=F.arrow,xe=F.prefixCls,Me=(0,u.useMemo)(function(){var Ke;return typeof X=="function"?Ke=X():Ke=X,Ke},[X]),we=(0,oe.sQ)(G,Me==null?void 0:Me.ref);return u.createElement(u.Fragment,null,Ee&&u.createElement("div",{className:"".concat(xe,"-arrow")}),u.cloneElement(Me,{ref:(0,oe.Yr)(Me)?we:void 0}))}),Vr=Zo,fn={adjustX:1,adjustY:1},wn=[0,0],fr={topLeft:{points:["bl","tl"],overflow:fn,offset:[0,-4],targetOffset:wn},top:{points:["bc","tc"],overflow:fn,offset:[0,-4],targetOffset:wn},topRight:{points:["br","tr"],overflow:fn,offset:[0,-4],targetOffset:wn},bottomLeft:{points:["tl","bl"],overflow:fn,offset:[0,4],targetOffset:wn},bottom:{points:["tc","bc"],overflow:fn,offset:[0,4],targetOffset:wn},bottomRight:{points:["tr","br"],overflow:fn,offset:[0,4],targetOffset:wn}},ea=fr,sa=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"];function $o(F,G){var X,Ee=F.arrow,xe=Ee===void 0?!1:Ee,Me=F.prefixCls,we=Me===void 0?"rc-dropdown":Me,Ke=F.transitionName,qe=F.animation,rt=F.align,Pt=F.placement,et=Pt===void 0?"bottomLeft":Pt,Tt=F.placements,ht=Tt===void 0?ea:Tt,Ct=F.getPopupContainer,Lt=F.showAction,Gt=F.hideAction,Mt=F.overlayClassName,dt=F.overlayStyle,At=F.visible,ct=F.trigger,jt=ct===void 0?["hover"]:ct,Ht=F.autoFocus,on=F.overlay,Ut=F.children,Nt=F.onVisibleChange,wt=(0,J.Z)(F,sa),nn=u.useState(),Vt=(0,V.Z)(nn,2),dn=Vt[0],un=Vt[1],Yt="visible"in F?At:dn,ln=u.useRef(null),en=u.useRef(null),Kn=u.useRef(null);u.useImperativeHandle(G,function(){return ln.current});var Sn=function(On){un(On),Nt==null||Nt(On)};ua({visible:Yt,triggerRef:Kn,onVisibleChange:Sn,autoFocus:Ht,overlayRef:en});var Jn=function(On){var Un=F.onOverlayClick;un(!1),Un&&Un(On)},xr=function(){return u.createElement(Vr,{ref:en,overlay:on,prefixCls:we,arrow:xe})},Tn=function(){return typeof on=="function"?xr:xr()},kn=function(){var On=F.minOverlayWidthMatchTrigger,Un=F.alignPoint;return"minOverlayWidthMatchTrigger"in F?On:!Un},er=function(){var On=F.openClassName;return On!==void 0?On:"".concat(we,"-open")},ar=u.cloneElement(Ut,{className:a()((X=Ut.props)===null||X===void 0?void 0:X.className,Yt&&er()),ref:(0,oe.Yr)(Ut)?(0,oe.sQ)(Kn,Ut.ref):void 0}),vn=Gt;return!vn&&jt.indexOf("contextMenu")!==-1&&(vn=["click"]),u.createElement(ia,(0,re.Z)({builtinPlacements:ht},wt,{prefixCls:we,ref:ln,popupClassName:a()(Mt,(0,T.Z)({},"".concat(we,"-show-arrow"),xe)),popupStyle:dt,action:jt,showAction:Lt,hideAction:vn,popupPlacement:et,popupAlign:rt,popupTransitionName:Ke,popupAnimation:qe,popupVisible:Yt,stretch:kn()?"minWidth":"",popup:Tn(),onPopupVisibleChange:Sn,onPopupClick:Jn,getPopupContainer:Ct}),ar)}var Ea=u.forwardRef($o),fi=Ea,xo=e(39983),Ro=e(80334),Yr=e(91881),Tr=u.createContext(null);function yr(F,G){return F===void 0?null:"".concat(F,"-").concat(G)}function la(F){var G=u.useContext(Tr);return yr(G,F)}var oo=e(56982),rr=["children","locked"],za=u.createContext(null);function ni(F,G){var X=(0,D.Z)({},F);return Object.keys(G).forEach(function(Ee){var xe=G[Ee];xe!==void 0&&(X[Ee]=xe)}),X}function Ao(F){var G=F.children,X=F.locked,Ee=(0,J.Z)(F,rr),xe=u.useContext(za),Me=(0,oo.Z)(function(){return ni(xe,Ee)},[xe,Ee],function(we,Ke){return!X&&(we[0]!==Ke[0]||!(0,Yr.Z)(we[1],Ke[1],!0))});return u.createElement(za.Provider,{value:Me},G)}var hu=[],Ji=u.createContext(null);function vi(){return u.useContext(Ji)}var So=u.createContext(hu);function Mo(F){var G=u.useContext(So);return u.useMemo(function(){return F!==void 0?[].concat((0,Ze.Z)(G),[F]):G},[G,F])}var io=u.createContext(null),uo=u.createContext({}),so=uo,pi=e(88603),wo=Hn.Z.LEFT,lo=Hn.Z.RIGHT,_i=Hn.Z.UP,mi=Hn.Z.DOWN,No=Hn.Z.ENTER,Ai=Hn.Z.ESC,Ho=Hn.Z.HOME,Za=Hn.Z.END,Mi=[_i,mi,wo,lo];function wu(F,G,X,Ee){var xe,Me,we,Ke,qe="prev",rt="next",Pt="children",et="parent";if(F==="inline"&&Ee===No)return{inlineTrigger:!0};var Tt=(xe={},(0,T.Z)(xe,_i,qe),(0,T.Z)(xe,mi,rt),xe),ht=(Me={},(0,T.Z)(Me,wo,X?rt:qe),(0,T.Z)(Me,lo,X?qe:rt),(0,T.Z)(Me,mi,Pt),(0,T.Z)(Me,No,Pt),Me),Ct=(we={},(0,T.Z)(we,_i,qe),(0,T.Z)(we,mi,rt),(0,T.Z)(we,No,Pt),(0,T.Z)(we,Ai,et),(0,T.Z)(we,wo,X?Pt:et),(0,T.Z)(we,lo,X?et:Pt),we),Lt={inline:Tt,horizontal:ht,vertical:Ct,inlineSub:Tt,horizontalSub:Ct,verticalSub:Ct},Gt=(Ke=Lt["".concat(F).concat(G?"":"Sub")])===null||Ke===void 0?void 0:Ke[Ee];switch(Gt){case qe:return{offset:-1,sibling:!0};case rt:return{offset:1,sibling:!0};case et:return{offset:-1,sibling:!1};case Pt:return{offset:1,sibling:!1};default:return null}}function hi(F){for(var G=F;G;){if(G.getAttribute("data-menu-list"))return G;G=G.parentElement}return null}function ri(F,G){for(var X=F||document.activeElement;X;){if(G.has(X))return X;X=X.parentElement}return null}function Ko(F,G){var X=(0,pi.tS)(F,!0);return X.filter(function(Ee){return G.has(Ee)})}function yi(F,G,X){var Ee=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!F)return null;var xe=Ko(F,G),Me=xe.length,we=xe.findIndex(function(Ke){return X===Ke});return Ee<0?we===-1?we=Me-1:we-=1:Ee>0&&(we+=1),we=(we+Me)%Me,xe[we]}function Nu(F,G,X,Ee,xe,Me,we,Ke,qe,rt){var Pt=u.useRef(),et=u.useRef();et.current=G;var Tt=function(){mt.Z.cancel(Pt.current)};return u.useEffect(function(){return function(){Tt()}},[]),function(ht){var Ct=ht.which;if([].concat(Mi,[No,Ai,Ho,Za]).includes(Ct)){var Lt,Gt,Mt,dt=function(){Lt=new Set,Gt=new Map,Mt=new Map;var Yt=Me();return Yt.forEach(function(ln){var en=document.querySelector("[data-menu-id='".concat(yr(Ee,ln),"']"));en&&(Lt.add(en),Mt.set(en,ln),Gt.set(ln,en))}),Lt};dt();var At=Gt.get(G),ct=ri(At,Lt),jt=Mt.get(ct),Ht=wu(F,we(jt,!0).length===1,X,Ct);if(!Ht&&Ct!==Ho&&Ct!==Za)return;(Mi.includes(Ct)||[Ho,Za].includes(Ct))&&ht.preventDefault();var on=function(Yt){if(Yt){var ln=Yt,en=Yt.querySelector("a");en!=null&&en.getAttribute("href")&&(ln=en);var Kn=Mt.get(Yt);Ke(Kn),Tt(),Pt.current=(0,mt.Z)(function(){et.current===Kn&&ln.focus()})}};if([Ho,Za].includes(Ct)||Ht.sibling||!ct){var Ut;!ct||F==="inline"?Ut=xe.current:Ut=hi(ct);var Nt,wt=Ko(Ut,Lt);Ct===Ho?Nt=wt[0]:Ct===Za?Nt=wt[wt.length-1]:Nt=yi(Ut,Lt,ct,Ht.offset),on(Nt)}else if(Ht.inlineTrigger)qe(jt);else if(Ht.offset>0)qe(jt,!0),Tt(),Pt.current=(0,mt.Z)(function(){dt();var un=ct.getAttribute("aria-controls"),Yt=document.getElementById(un),ln=yi(Yt,Lt);on(ln)},5);else if(Ht.offset<0){var nn=we(jt,!0),Vt=nn[nn.length-2],dn=Gt.get(Vt);qe(Vt,!1),on(dn)}}rt==null||rt(ht)}}function yu(F){Promise.resolve().then(F)}var gi="__RC_UTIL_PATH_SPLIT__",Wo=function(G){return G.join(gi)},wi=function(G){return G.split(gi)},Ni="rc-menu-more";function ba(){var F=u.useState({}),G=(0,V.Z)(F,2),X=G[1],Ee=(0,u.useRef)(new Map),xe=(0,u.useRef)(new Map),Me=u.useState([]),we=(0,V.Z)(Me,2),Ke=we[0],qe=we[1],rt=(0,u.useRef)(0),Pt=(0,u.useRef)(!1),et=function(){Pt.current||X({})},Tt=(0,u.useCallback)(function(At,ct){var jt=Wo(ct);xe.current.set(jt,At),Ee.current.set(At,jt),rt.current+=1;var Ht=rt.current;yu(function(){Ht===rt.current&&et()})},[]),ht=(0,u.useCallback)(function(At,ct){var jt=Wo(ct);xe.current.delete(jt),Ee.current.delete(At)},[]),Ct=(0,u.useCallback)(function(At){qe(At)},[]),Lt=(0,u.useCallback)(function(At,ct){var jt=Ee.current.get(At)||"",Ht=wi(jt);return ct&&Ke.includes(Ht[0])&&Ht.unshift(Ni),Ht},[Ke]),Gt=(0,u.useCallback)(function(At,ct){return At.some(function(jt){var Ht=Lt(jt,!0);return Ht.includes(ct)})},[Lt]),Mt=function(){var ct=(0,Ze.Z)(Ee.current.keys());return Ke.length&&ct.push(Ni),ct},dt=(0,u.useCallback)(function(At){var ct="".concat(Ee.current.get(At)).concat(gi),jt=new Set;return(0,Ze.Z)(xe.current.keys()).forEach(function(Ht){Ht.startsWith(ct)&&jt.add(xe.current.get(Ht))}),jt},[]);return u.useEffect(function(){return function(){Pt.current=!0}},[]),{registerPath:Tt,unregisterPath:ht,refreshOverflowKeys:Ct,isSubPathKey:Gt,getKeyPath:Lt,getKeys:Mt,getSubPathKeys:dt}}function Go(F){var G=u.useRef(F);G.current=F;var X=u.useCallback(function(){for(var Ee,xe=arguments.length,Me=new Array(xe),we=0;we<xe;we++)Me[we]=arguments[we];return(Ee=G.current)===null||Ee===void 0?void 0:Ee.call.apply(Ee,[G].concat(Me))},[]);return F?X:void 0}var Li=Math.random().toFixed(5).toString().slice(2),qi=0;function Di(F){var G=(0,$.Z)(F,{value:F}),X=(0,V.Z)(G,2),Ee=X[0],xe=X[1];return u.useEffect(function(){qi+=1;var Me="".concat(Li,"-").concat(qi);xe("rc-menu-uuid-".concat(Me))},[]),Ee}var Fi=e(15671),eu=e(43144),Na=e(32531),ai=e(73568),Vo=e(98423);function oi(F,G,X,Ee){var xe=u.useContext(za),Me=xe.activeKey,we=xe.onActive,Ke=xe.onInactive,qe={active:Me===F};return G||(qe.onMouseEnter=function(rt){X==null||X({key:F,domEvent:rt}),we(F)},qe.onMouseLeave=function(rt){Ee==null||Ee({key:F,domEvent:rt}),Ke(F)}),qe}function ii(F){var G=u.useContext(za),X=G.mode,Ee=G.rtl,xe=G.inlineIndent;if(X!=="inline")return null;var Me=F;return Ee?{paddingRight:Me*xe}:{paddingLeft:Me*xe}}function Ii(F){var G=F.icon,X=F.props,Ee=F.children,xe;return G===null||G===!1?null:(typeof G=="function"?xe=u.createElement(G,(0,D.Z)({},X)):typeof G!="boolean"&&(xe=G),xe||Ee||null)}var Bi=["item"];function Eo(F){var G=F.item,X=(0,J.Z)(F,Bi);return Object.defineProperty(X,"item",{get:function(){return(0,Ro.ZP)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),G}}),X}var ki=["title","attribute","elementRef"],gu=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],ji=["active"],Lu=function(F){(0,Na.Z)(X,F);var G=(0,ai.Z)(X);function X(){return(0,Fi.Z)(this,X),G.apply(this,arguments)}return(0,eu.Z)(X,[{key:"render",value:function(){var xe=this.props,Me=xe.title,we=xe.attribute,Ke=xe.elementRef,qe=(0,J.Z)(xe,ki),rt=(0,Vo.Z)(qe,["eventKey","popupClassName","popupOffset","onTitleClick"]);return(0,Ro.ZP)(!we,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),u.createElement(xo.Z.Item,(0,re.Z)({},we,{title:typeof Me=="string"?Me:void 0},rt,{ref:Ke}))}}]),X}(u.Component),Du=u.forwardRef(function(F,G){var X,Ee=F.style,xe=F.className,Me=F.eventKey,we=F.warnKey,Ke=F.disabled,qe=F.itemIcon,rt=F.children,Pt=F.role,et=F.onMouseEnter,Tt=F.onMouseLeave,ht=F.onClick,Ct=F.onKeyDown,Lt=F.onFocus,Gt=(0,J.Z)(F,gu),Mt=la(Me),dt=u.useContext(za),At=dt.prefixCls,ct=dt.onItemClick,jt=dt.disabled,Ht=dt.overflowDisabled,on=dt.itemIcon,Ut=dt.selectedKeys,Nt=dt.onActive,wt=u.useContext(so),nn=wt._internalRenderMenuItem,Vt="".concat(At,"-item"),dn=u.useRef(),un=u.useRef(),Yt=jt||Ke,ln=(0,oe.x1)(G,un),en=Mo(Me),Kn=function(_n){return{key:Me,keyPath:(0,Ze.Z)(en).reverse(),item:dn.current,domEvent:_n}},Sn=qe||on,Jn=oi(Me,Yt,et,Tt),xr=Jn.active,Tn=(0,J.Z)(Jn,ji),kn=Ut.includes(Me),er=ii(en.length),ar=function(_n){if(!Yt){var Wr=Kn(_n);ht==null||ht(Eo(Wr)),ct(Wr)}},vn=function(_n){if(Ct==null||Ct(_n),_n.which===Hn.Z.ENTER){var Wr=Kn(_n);ht==null||ht(Eo(Wr)),ct(Wr)}},yn=function(_n){Nt(Me),Lt==null||Lt(_n)},On={};F.role==="option"&&(On["aria-selected"]=kn);var Un=u.createElement(Lu,(0,re.Z)({ref:dn,elementRef:ln,role:Pt===null?"none":Pt||"menuitem",tabIndex:Ke?null:-1,"data-menu-id":Ht&&Mt?null:Mt},Gt,Tn,On,{component:"li","aria-disabled":Ke,style:(0,D.Z)((0,D.Z)({},er),Ee),className:a()(Vt,(X={},(0,T.Z)(X,"".concat(Vt,"-active"),xr),(0,T.Z)(X,"".concat(Vt,"-selected"),kn),(0,T.Z)(X,"".concat(Vt,"-disabled"),Yt),X),xe),onClick:ar,onKeyDown:vn,onFocus:yn}),rt,u.createElement(Ii,{props:(0,D.Z)((0,D.Z)({},F),{},{isSelected:kn}),icon:Sn}));return nn&&(Un=nn(Un,F,{selected:kn})),Un});function Ui(F,G){var X=F.eventKey,Ee=vi(),xe=Mo(X);return u.useEffect(function(){if(Ee)return Ee.registerPath(X,xe),function(){Ee.unregisterPath(X,xe)}},[xe]),Ee?null:u.createElement(Du,(0,re.Z)({},F,{ref:G}))}var zi=u.forwardRef(Ui),Fu=["className","children"],Zi=function(G,X){var Ee=G.className,xe=G.children,Me=(0,J.Z)(G,Fu),we=u.useContext(za),Ke=we.prefixCls,qe=we.mode,rt=we.rtl;return u.createElement("ul",(0,re.Z)({className:a()(Ke,rt&&"".concat(Ke,"-rtl"),"".concat(Ke,"-sub"),"".concat(Ke,"-").concat(qe==="inline"?"inline":"vertical"),Ee),role:"menu"},Me,{"data-menu-list":!0,ref:X}),xe)},Iu=u.forwardRef(Zi);Iu.displayName="SubMenuList";var M=Iu,z=e(50344);function j(F,G){return(0,z.Z)(F).map(function(X,Ee){if(u.isValidElement(X)){var xe,Me,we=X.key,Ke=(xe=(Me=X.props)===null||Me===void 0?void 0:Me.eventKey)!==null&&xe!==void 0?xe:we,qe=Ke==null;qe&&(Ke="tmp_key-".concat([].concat((0,Ze.Z)(G),[Ee]).join("-")));var rt={key:Ke,eventKey:Ke};return u.cloneElement(X,rt)}return X})}var ce={adjustX:1,adjustY:1},He={topLeft:{points:["bl","tl"],overflow:ce},topRight:{points:["br","tr"],overflow:ce},bottomLeft:{points:["tl","bl"],overflow:ce},bottomRight:{points:["tr","br"],overflow:ce},leftTop:{points:["tr","tl"],overflow:ce},leftBottom:{points:["br","bl"],overflow:ce},rightTop:{points:["tl","tr"],overflow:ce},rightBottom:{points:["bl","br"],overflow:ce}},tt={topLeft:{points:["bl","tl"],overflow:ce},topRight:{points:["br","tr"],overflow:ce},bottomLeft:{points:["tl","bl"],overflow:ce},bottomRight:{points:["tr","br"],overflow:ce},rightTop:{points:["tr","tl"],overflow:ce},rightBottom:{points:["br","bl"],overflow:ce},leftTop:{points:["tl","tr"],overflow:ce},leftBottom:{points:["bl","br"],overflow:ce}},_e=null;function nt(F,G,X){if(G)return G;if(X)return X[F]||X.other}var it={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function ut(F){var G=F.prefixCls,X=F.visible,Ee=F.children,xe=F.popup,Me=F.popupStyle,we=F.popupClassName,Ke=F.popupOffset,qe=F.disabled,rt=F.mode,Pt=F.onVisibleChange,et=u.useContext(za),Tt=et.getPopupContainer,ht=et.rtl,Ct=et.subMenuOpenDelay,Lt=et.subMenuCloseDelay,Gt=et.builtinPlacements,Mt=et.triggerSubMenuAction,dt=et.forceSubMenuRender,At=et.rootClassName,ct=et.motion,jt=et.defaultMotions,Ht=u.useState(!1),on=(0,V.Z)(Ht,2),Ut=on[0],Nt=on[1],wt=ht?(0,D.Z)((0,D.Z)({},tt),Gt):(0,D.Z)((0,D.Z)({},He),Gt),nn=it[rt],Vt=nt(rt,ct,jt),dn=u.useRef(Vt);rt!=="inline"&&(dn.current=Vt);var un=(0,D.Z)((0,D.Z)({},dn.current),{},{leavedClassName:"".concat(G,"-hidden"),removeOnLeave:!1,motionAppear:!0}),Yt=u.useRef();return u.useEffect(function(){return Yt.current=(0,mt.Z)(function(){Nt(X)}),function(){mt.Z.cancel(Yt.current)}},[X]),u.createElement(ia,{prefixCls:G,popupClassName:a()("".concat(G,"-popup"),(0,T.Z)({},"".concat(G,"-rtl"),ht),we,At),stretch:rt==="horizontal"?"minWidth":null,getPopupContainer:Tt,builtinPlacements:wt,popupPlacement:nn,popupVisible:Ut,popup:xe,popupStyle:Me,popupAlign:Ke&&{offset:Ke},action:qe?[]:[Mt],mouseEnterDelay:Ct,mouseLeaveDelay:Lt,onPopupVisibleChange:Pt,forceRender:dt,popupMotion:un},Ee)}function Ft(F){var G=F.id,X=F.open,Ee=F.keyPath,xe=F.children,Me="inline",we=u.useContext(za),Ke=we.prefixCls,qe=we.forceSubMenuRender,rt=we.motion,Pt=we.defaultMotions,et=we.mode,Tt=u.useRef(!1);Tt.current=et===Me;var ht=u.useState(!Tt.current),Ct=(0,V.Z)(ht,2),Lt=Ct[0],Gt=Ct[1],Mt=Tt.current?X:!1;u.useEffect(function(){Tt.current&&Gt(!1)},[et]);var dt=(0,D.Z)({},nt(Me,rt,Pt));Ee.length>1&&(dt.motionAppear=!1);var At=dt.onVisibleChanged;return dt.onVisibleChanged=function(ct){return!Tt.current&&!ct&&Gt(!0),At==null?void 0:At(ct)},Lt?null:u.createElement(Ao,{mode:Me,locked:!Tt.current},u.createElement(H.ZP,(0,re.Z)({visible:Mt},dt,{forceRender:qe,removeOnLeave:!1,leavedClassName:"".concat(Ke,"-hidden")}),function(ct){var jt=ct.className,Ht=ct.style;return u.createElement(M,{id:G,className:jt,style:Ht},xe)}))}var hn=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","popupStyle","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],sn=["active"],Jt=function(G){var X,Ee=G.style,xe=G.className,Me=G.title,we=G.eventKey,Ke=G.warnKey,qe=G.disabled,rt=G.internalPopupClose,Pt=G.children,et=G.itemIcon,Tt=G.expandIcon,ht=G.popupClassName,Ct=G.popupOffset,Lt=G.popupStyle,Gt=G.onClick,Mt=G.onMouseEnter,dt=G.onMouseLeave,At=G.onTitleClick,ct=G.onTitleMouseEnter,jt=G.onTitleMouseLeave,Ht=(0,J.Z)(G,hn),on=la(we),Ut=u.useContext(za),Nt=Ut.prefixCls,wt=Ut.mode,nn=Ut.openKeys,Vt=Ut.disabled,dn=Ut.overflowDisabled,un=Ut.activeKey,Yt=Ut.selectedKeys,ln=Ut.itemIcon,en=Ut.expandIcon,Kn=Ut.onItemClick,Sn=Ut.onOpenChange,Jn=Ut.onActive,xr=u.useContext(so),Tn=xr._internalRenderSubMenuItem,kn=u.useContext(io),er=kn.isSubPathKey,ar=Mo(),vn="".concat(Nt,"-submenu"),yn=Vt||qe,On=u.useRef(),Un=u.useRef(),or=et!=null?et:ln,_n=Tt!=null?Tt:en,Wr=nn.includes(we),vr=!dn&&Wr,Ca=er(Yt,we),Mr=oi(we,yn,ct,jt),gn=Mr.active,Pr=(0,J.Z)(Mr,sn),Ln=u.useState(!1),Ha=(0,V.Z)(Ln,2),wr=Ha[0],Qr=Ha[1],Dn=function(Gr){yn||Qr(Gr)},In=function(Gr){Dn(!0),Mt==null||Mt({key:we,domEvent:Gr})},ca=function(Gr){Dn(!1),dt==null||dt({key:we,domEvent:Gr})},Vn=u.useMemo(function(){return gn||(wt!=="inline"?wr||er([un],we):!1)},[wt,gn,un,wr,we,er]),Fr=ii(ar.length),Nr=function(Gr){yn||(At==null||At({key:we,domEvent:Gr}),wt==="inline"&&Sn(we,!Wr))},Lr=Go(function(ta){Gt==null||Gt(Eo(ta)),Kn(ta)}),Fn=function(Gr){wt!=="inline"&&Sn(we,Gr)},Er=function(){Jn(we)},Ka=on&&"".concat(on,"-popup"),Ja=u.createElement("div",(0,re.Z)({role:"menuitem",style:Fr,className:"".concat(vn,"-title"),tabIndex:yn?null:-1,ref:On,title:typeof Me=="string"?Me:null,"data-menu-id":dn&&on?null:on,"aria-expanded":vr,"aria-haspopup":!0,"aria-controls":Ka,"aria-disabled":yn,onClick:Nr,onFocus:Er},Pr),Me,u.createElement(Ii,{icon:wt!=="horizontal"?_n:void 0,props:(0,D.Z)((0,D.Z)({},G),{},{isOpen:vr,isSubMenu:!0})},u.createElement("i",{className:"".concat(vn,"-arrow")}))),Br=u.useRef(wt);if(wt!=="inline"&&ar.length>1?Br.current="vertical":Br.current=wt,!dn){var $r=Br.current;Ja=u.createElement(ut,{mode:$r,prefixCls:vn,visible:!rt&&vr&&wt!=="inline",popupClassName:ht,popupOffset:Ct,popupStyle:Lt,popup:u.createElement(Ao,{mode:$r==="horizontal"?"vertical":$r},u.createElement(M,{id:Ka,ref:Un},Pt)),disabled:yn,onVisibleChange:Fn},Ja)}var cr=u.createElement(xo.Z.Item,(0,re.Z)({role:"none"},Ht,{component:"li",style:Ee,className:a()(vn,"".concat(vn,"-").concat(wt),xe,(X={},(0,T.Z)(X,"".concat(vn,"-open"),vr),(0,T.Z)(X,"".concat(vn,"-active"),Vn),(0,T.Z)(X,"".concat(vn,"-selected"),Ca),(0,T.Z)(X,"".concat(vn,"-disabled"),yn),X)),onMouseEnter:In,onMouseLeave:ca}),Ja,!dn&&u.createElement(Ft,{id:Ka,open:vr,keyPath:ar},Pt));return Tn&&(cr=Tn(cr,G,{selected:Ca,active:Vn,open:vr,disabled:yn})),u.createElement(Ao,{onItemClick:Lr,mode:wt==="horizontal"?"vertical":wt,itemIcon:or,expandIcon:_n},cr)};function cn(F){var G=F.eventKey,X=F.children,Ee=Mo(G),xe=j(X,Ee),Me=vi();u.useEffect(function(){if(Me)return Me.registerPath(G,Ee),function(){Me.unregisterPath(G,Ee)}},[Ee]);var we;return Me?we=xe:we=u.createElement(Jt,F,xe),u.createElement(So.Provider,{value:Ee},we)}var Qn=["className","title","eventKey","children"],$n=["children"],lr=function(G){var X=G.className,Ee=G.title,xe=G.eventKey,Me=G.children,we=(0,J.Z)(G,Qn),Ke=u.useContext(za),qe=Ke.prefixCls,rt="".concat(qe,"-item-group");return u.createElement("li",(0,re.Z)({role:"presentation"},we,{onClick:function(et){return et.stopPropagation()},className:a()(rt,X)}),u.createElement("div",{role:"presentation",className:"".concat(rt,"-title"),title:typeof Ee=="string"?Ee:void 0},Ee),u.createElement("ul",{role:"group",className:"".concat(rt,"-list")},Me))};function Dr(F){var G=F.children,X=(0,J.Z)(F,$n),Ee=Mo(X.eventKey),xe=j(G,Ee),Me=vi();return Me?xe:u.createElement(lr,(0,Vo.Z)(X,["warnKey"]),xe)}function gr(F){var G=F.className,X=F.style,Ee=u.useContext(za),xe=Ee.prefixCls,Me=vi();return Me?null:u.createElement("li",{role:"separator",className:a()("".concat(xe,"-item-divider"),G),style:X})}var Lo=["label","children","key","type"];function La(F){return(F||[]).map(function(G,X){if(G&&(0,le.Z)(G)==="object"){var Ee=G,xe=Ee.label,Me=Ee.children,we=Ee.key,Ke=Ee.type,qe=(0,J.Z)(Ee,Lo),rt=we!=null?we:"tmp-".concat(X);return Me||Ke==="group"?Ke==="group"?u.createElement(Dr,(0,re.Z)({key:rt},qe,{title:xe}),La(Me)):u.createElement(cn,(0,re.Z)({key:rt},qe,{title:xe}),La(Me)):Ke==="divider"?u.createElement(gr,(0,re.Z)({key:rt},qe)):u.createElement(zi,(0,re.Z)({key:rt},qe),xe)}return null}).filter(function(G){return G})}function $a(F,G,X){var Ee=F;return G&&(Ee=La(G)),j(Ee,X)}var rn=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],Ta=[],Da=u.forwardRef(function(F,G){var X,Ee,xe=F,Me=xe.prefixCls,we=Me===void 0?"rc-menu":Me,Ke=xe.rootClassName,qe=xe.style,rt=xe.className,Pt=xe.tabIndex,et=Pt===void 0?0:Pt,Tt=xe.items,ht=xe.children,Ct=xe.direction,Lt=xe.id,Gt=xe.mode,Mt=Gt===void 0?"vertical":Gt,dt=xe.inlineCollapsed,At=xe.disabled,ct=xe.disabledOverflow,jt=xe.subMenuOpenDelay,Ht=jt===void 0?.1:jt,on=xe.subMenuCloseDelay,Ut=on===void 0?.1:on,Nt=xe.forceSubMenuRender,wt=xe.defaultOpenKeys,nn=xe.openKeys,Vt=xe.activeKey,dn=xe.defaultActiveFirst,un=xe.selectable,Yt=un===void 0?!0:un,ln=xe.multiple,en=ln===void 0?!1:ln,Kn=xe.defaultSelectedKeys,Sn=xe.selectedKeys,Jn=xe.onSelect,xr=xe.onDeselect,Tn=xe.inlineIndent,kn=Tn===void 0?24:Tn,er=xe.motion,ar=xe.defaultMotions,vn=xe.triggerSubMenuAction,yn=vn===void 0?"hover":vn,On=xe.builtinPlacements,Un=xe.itemIcon,or=xe.expandIcon,_n=xe.overflowedIndicator,Wr=_n===void 0?"...":_n,vr=xe.overflowedIndicatorPopupClassName,Ca=xe.getPopupContainer,Mr=xe.onClick,gn=xe.onOpenChange,Pr=xe.onKeyDown,Ln=xe.openAnimation,Ha=xe.openTransitionName,wr=xe._internalRenderMenuItem,Qr=xe._internalRenderSubMenuItem,Dn=(0,J.Z)(xe,rn),In=u.useMemo(function(){return $a(ht,Tt,Ta)},[ht,Tt]),ca=u.useState(!1),Vn=(0,V.Z)(ca,2),Fr=Vn[0],Nr=Vn[1],Lr=u.useRef(),Fn=Di(Lt),Er=Ct==="rtl",Ka=(0,$.Z)(wt,{value:nn,postState:function(tr){return tr||Ta}}),Ja=(0,V.Z)(Ka,2),Br=Ja[0],$r=Ja[1],cr=function(tr){var ur=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function ra(){$r(tr),gn==null||gn(tr)}ur?(0,Ge.flushSync)(ra):ra()},ta=u.useState(Br),Gr=(0,V.Z)(ta,2),Fa=Gr[0],Oa=Gr[1],da=u.useRef(!1),fo=u.useMemo(function(){return(Mt==="inline"||Mt==="vertical")&&dt?["vertical",dt]:[Mt,!1]},[Mt,dt]),fa=(0,V.Z)(fo,2),Rn=fa[0],nr=fa[1],ir=Rn==="inline",Hr=u.useState(Rn),ya=(0,V.Z)(Hr,2),kr=ya[0],jr=ya[1],Wa=u.useState(nr),_a=(0,V.Z)(Wa,2),ko=_a[0],Yo=_a[1];u.useEffect(function(){jr(Rn),Yo(nr),da.current&&(ir?$r(Fa):cr(Ta))},[Rn,nr]);var Xr=u.useState(0),Cr=(0,V.Z)(Xr,2),zn=Cr[0],Ur=Cr[1],qa=zn>=In.length-1||kr!=="horizontal"||ct;u.useEffect(function(){ir&&Oa(Br)},[Br]),u.useEffect(function(){return da.current=!0,function(){da.current=!1}},[]);var na=ba(),Yn=na.registerPath,An=na.unregisterPath,pr=na.refreshOverflowKeys,mr=na.isSubPathKey,Or=na.getKeyPath,Jr=na.getKeys,vo=na.getSubPathKeys,ru=u.useMemo(function(){return{registerPath:Yn,unregisterPath:An}},[Yn,An]),Ga=u.useMemo(function(){return{isSubPathKey:mr}},[mr]);u.useEffect(function(){pr(qa?Ta:In.slice(zn+1).map(function(hr){return hr.key}))},[zn,qa]);var si=(0,$.Z)(Vt||dn&&((X=In[0])===null||X===void 0?void 0:X.key),{value:Vt}),Qo=(0,V.Z)(si,2),ga=Qo[0],Xo=Qo[1],Hi=Go(function(hr){Xo(hr)}),eo=Go(function(){Xo(void 0)});(0,u.useImperativeHandle)(G,function(){return{list:Lr.current,focus:function(tr){var ur,ra=ga!=null?ga:(ur=In.find(function(ou){return!ou.props.disabled}))===null||ur===void 0?void 0:ur.key;if(ra){var xa,ho,yo;(xa=Lr.current)===null||xa===void 0||(ho=xa.querySelector("li[data-menu-id='".concat(yr(Fn,ra),"']")))===null||ho===void 0||(yo=ho.focus)===null||yo===void 0||yo.call(ho,tr)}}}});var Jo=(0,$.Z)(Kn||[],{value:Sn,postState:function(tr){return Array.isArray(tr)?tr:tr==null?Ta:[tr]}}),jo=(0,V.Z)(Jo,2),zr=jo[0],Ia=jo[1],po=function(tr){if(Yt){var ur=tr.key,ra=zr.includes(ur),xa;en?ra?xa=zr.filter(function(yo){return yo!==ur}):xa=[].concat((0,Ze.Z)(zr),[ur]):xa=[ur],Ia(xa);var ho=(0,D.Z)((0,D.Z)({},tr),{},{selectedKeys:xa});ra?xr==null||xr(ho):Jn==null||Jn(ho)}!en&&Br.length&&kr!=="inline"&&cr(Ta)},Ki=Go(function(hr){Mr==null||Mr(Eo(hr)),po(hr)}),va=Go(function(hr,tr){var ur=Br.filter(function(xa){return xa!==hr});if(tr)ur.push(hr);else if(kr!=="inline"){var ra=vo(hr);ur=ur.filter(function(xa){return!ra.has(xa)})}(0,Yr.Z)(Br,ur,!0)||cr(ur,!0)}),Ra=function(tr,ur){var ra=ur!=null?ur:!Br.includes(tr);va(tr,ra)},Ti=Nu(kr,ga,Er,Fn,Lr,Jr,Or,Xo,Ra,Pr);u.useEffect(function(){Nr(!0)},[]);var au=u.useMemo(function(){return{_internalRenderMenuItem:wr,_internalRenderSubMenuItem:Qr}},[wr,Qr]),to=kr!=="horizontal"||ct?In:In.map(function(hr,tr){return u.createElement(Ao,{key:hr.key,overflowDisabled:tr>zn},hr)}),mo=u.createElement(xo.Z,(0,re.Z)({id:Lt,ref:Lr,prefixCls:"".concat(we,"-overflow"),component:"ul",itemComponent:zi,className:a()(we,"".concat(we,"-root"),"".concat(we,"-").concat(kr),rt,(Ee={},(0,T.Z)(Ee,"".concat(we,"-inline-collapsed"),ko),(0,T.Z)(Ee,"".concat(we,"-rtl"),Er),Ee),Ke),dir:Ct,style:qe,role:"menu",tabIndex:et,data:to,renderRawItem:function(tr){return tr},renderRawRest:function(tr){var ur=tr.length,ra=ur?In.slice(-ur):null;return u.createElement(cn,{eventKey:Ni,title:Wr,disabled:qa,internalPopupClose:ur===0,popupClassName:vr},ra)},maxCount:kr!=="horizontal"||ct?xo.Z.INVALIDATE:xo.Z.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(tr){Ur(tr)},onKeyDown:Ti},Dn));return u.createElement(so.Provider,{value:au},u.createElement(Tr.Provider,{value:Fn},u.createElement(Ao,{prefixCls:we,rootClassName:Ke,mode:kr,openKeys:Br,rtl:Er,disabled:At,motion:Fr?er:null,defaultMotions:Fr?ar:null,activeKey:ga,onActive:Hi,onInactive:eo,selectedKeys:zr,inlineIndent:kn,subMenuOpenDelay:Ht,subMenuCloseDelay:Ut,forceSubMenuRender:Nt,builtinPlacements:On,triggerSubMenuAction:yn,getPopupContainer:Ca,itemIcon:Un,expandIcon:or,onItemClick:Ki,onOpenChange:va},u.createElement(io.Provider,{value:Ga},mo),u.createElement("div",{style:{display:"none"},"aria-hidden":!0},u.createElement(Ji.Provider,{value:ru},In)))))}),Pa=Da,ui=Pa;ui.Item=zi,ui.SubMenu=cn,ui.ItemGroup=Dr,ui.Divider=gr;var $i=ui;function xi(F,G){var X=F.prefixCls,Ee=F.id,xe=F.tabs,Me=F.locale,we=F.mobile,Ke=F.moreIcon,qe=Ke===void 0?"More":Ke,rt=F.moreTransitionName,Pt=F.style,et=F.className,Tt=F.editable,ht=F.tabBarGutter,Ct=F.rtl,Lt=F.removeAriaLabel,Gt=F.onTabClick,Mt=F.getPopupContainer,dt=F.popupClassName,At=(0,u.useState)(!1),ct=(0,V.Z)(At,2),jt=ct[0],Ht=ct[1],on=(0,u.useState)(null),Ut=(0,V.Z)(on,2),Nt=Ut[0],wt=Ut[1],nn="".concat(Ee,"-more-popup"),Vt="".concat(X,"-dropdown"),dn=Nt!==null?"".concat(nn,"-").concat(Nt):null,un=Me==null?void 0:Me.dropdownAriaLabel;function Yt(Tn,kn){Tn.preventDefault(),Tn.stopPropagation(),Tt.onEdit("remove",{key:kn,event:Tn})}var ln=u.createElement($i,{onClick:function(kn){var er=kn.key,ar=kn.domEvent;Gt(er,ar),Ht(!1)},prefixCls:"".concat(Vt,"-menu"),id:nn,tabIndex:-1,role:"listbox","aria-activedescendant":dn,selectedKeys:[Nt],"aria-label":un!==void 0?un:"expanded dropdown"},xe.map(function(Tn){var kn=Tn.closable,er=Tn.disabled,ar=Tn.closeIcon,vn=Tn.key,yn=Tn.label,On=x(kn,ar,Tt,er);return u.createElement(zi,{key:vn,id:"".concat(nn,"-").concat(vn),role:"option","aria-controls":Ee&&"".concat(Ee,"-panel-").concat(vn),disabled:er},u.createElement("span",null,yn),On&&u.createElement("button",{type:"button","aria-label":Lt||"remove",tabIndex:0,className:"".concat(Vt,"-menu-item-remove"),onClick:function(or){or.stopPropagation(),Yt(or,vn)}},ar||Tt.removeIcon||"\xD7"))}));function en(Tn){for(var kn=xe.filter(function(On){return!On.disabled}),er=kn.findIndex(function(On){return On.key===Nt})||0,ar=kn.length,vn=0;vn<ar;vn+=1){er=(er+Tn+ar)%ar;var yn=kn[er];if(!yn.disabled){wt(yn.key);return}}}function Kn(Tn){var kn=Tn.which;if(!jt){[Hn.Z.DOWN,Hn.Z.SPACE,Hn.Z.ENTER].includes(kn)&&(Ht(!0),Tn.preventDefault());return}switch(kn){case Hn.Z.UP:en(-1),Tn.preventDefault();break;case Hn.Z.DOWN:en(1),Tn.preventDefault();break;case Hn.Z.ESC:Ht(!1);break;case Hn.Z.SPACE:case Hn.Z.ENTER:Nt!==null&&Gt(Nt,Tn);break}}(0,u.useEffect)(function(){var Tn=document.getElementById(dn);Tn&&Tn.scrollIntoView&&Tn.scrollIntoView(!1)},[Nt]),(0,u.useEffect)(function(){jt||wt(null)},[jt]);var Sn=(0,T.Z)({},Ct?"marginRight":"marginLeft",ht);xe.length||(Sn.visibility="hidden",Sn.order=1);var Jn=a()((0,T.Z)({},"".concat(Vt,"-rtl"),Ct)),xr=we?null:u.createElement(fi,{prefixCls:Vt,overlay:ln,trigger:["hover"],visible:xe.length?jt:!1,transitionName:rt,onVisibleChange:Ht,overlayClassName:a()(Jn,dt),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:Mt},u.createElement("button",{type:"button",className:"".concat(X,"-nav-more"),style:Sn,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":nn,id:"".concat(Ee,"-more"),"aria-expanded":jt,onKeyDown:Kn},qe));return u.createElement("div",{className:a()("".concat(X,"-nav-operations"),et),style:Pt,ref:G},xr,u.createElement(ne,{prefixCls:X,locale:Me,editable:Tt}))}var Si=u.memo(u.forwardRef(xi),function(F,G){return G.tabMoving});function Ei(F){var G,X=F.prefixCls,Ee=F.id,xe=F.active,Me=F.tab,we=Me.key,Ke=Me.label,qe=Me.disabled,rt=Me.closeIcon,Pt=F.closable,et=F.renderWrapper,Tt=F.removeAriaLabel,ht=F.editable,Ct=F.onClick,Lt=F.onFocus,Gt=F.style,Mt="".concat(X,"-tab"),dt=x(Pt,rt,ht,qe);function At(Ht){qe||Ct(Ht)}function ct(Ht){Ht.preventDefault(),Ht.stopPropagation(),ht.onEdit("remove",{key:we,event:Ht})}var jt=u.createElement("div",{key:we,"data-node-key":Wt(we),className:a()(Mt,(G={},(0,T.Z)(G,"".concat(Mt,"-with-remove"),dt),(0,T.Z)(G,"".concat(Mt,"-active"),xe),(0,T.Z)(G,"".concat(Mt,"-disabled"),qe),G)),style:Gt,onClick:At},u.createElement("div",{role:"tab","aria-selected":xe,id:Ee&&"".concat(Ee,"-tab-").concat(we),className:"".concat(Mt,"-btn"),"aria-controls":Ee&&"".concat(Ee,"-panel-").concat(we),"aria-disabled":qe,tabIndex:qe?null:0,onClick:function(on){on.stopPropagation(),At(on)},onKeyDown:function(on){[Hn.Z.SPACE,Hn.Z.ENTER].includes(on.which)&&(on.preventDefault(),At(on))},onFocus:Lt},Ke),dt&&u.createElement("button",{type:"button","aria-label":Tt||"remove",tabIndex:0,className:"".concat(Mt,"-remove"),onClick:function(on){on.stopPropagation(),ct(on)}},rt||ht.removeIcon||"\xD7"));return et?et(jt):jt}var co=Ei,Do=function(G){var X=G.activeTabOffset,Ee=G.horizontal,xe=G.rtl,Me=G.indicatorSize,we=(0,u.useState)(),Ke=(0,V.Z)(we,2),qe=Ke[0],rt=Ke[1],Pt=(0,u.useRef)(),et=function(Ct){return typeof Me=="function"?Me(Ct):typeof Me=="number"?Me:Ct};function Tt(){mt.Z.cancel(Pt.current)}return(0,u.useEffect)(function(){var ht={};return X&&(Ee?(xe?(ht.right=X.right+X.width/2,ht.transform="translateX(50%)"):(ht.left=X.left+X.width/2,ht.transform="translateX(-50%)"),ht.width=et(X.width)):(ht.top=X.top+X.height/2,ht.transform="translateY(-50%)",ht.height=et(X.height))),Tt(),Pt.current=(0,mt.Z)(function(){rt(ht)}),Tt},[X,Ee,xe,Me]),{style:qe}},Ju=Do,Fo=function(G){var X=G.current||{},Ee=X.offsetWidth,xe=Ee===void 0?0:Ee,Me=X.offsetHeight,we=Me===void 0?0:Me;return[xe,we]},tu=function(G,X){return G[X?0:1]};function nu(F,G){var X,Ee=u.useContext(q),xe=Ee.prefixCls,Me=Ee.tabs,we=F.className,Ke=F.style,qe=F.id,rt=F.animated,Pt=F.activeKey,et=F.rtl,Tt=F.extra,ht=F.editable,Ct=F.locale,Lt=F.tabPosition,Gt=F.tabBarGutter,Mt=F.children,dt=F.onTabClick,At=F.onTabScroll,ct=F.indicatorSize,jt=(0,u.useRef)(),Ht=(0,u.useRef)(),on=(0,u.useRef)(),Ut=(0,u.useRef)(),Nt=(0,u.useRef)(),wt=(0,u.useRef)(),nn=(0,u.useRef)(),Vt=Lt==="top"||Lt==="bottom",dn=me(0,function(Yn,An){Vt&&At&&At({direction:Yn>An?"left":"right"})}),un=(0,V.Z)(dn,2),Yt=un[0],ln=un[1],en=me(0,function(Yn,An){!Vt&&At&&At({direction:Yn>An?"top":"bottom"})}),Kn=(0,V.Z)(en,2),Sn=Kn[0],Jn=Kn[1],xr=(0,u.useState)([0,0]),Tn=(0,V.Z)(xr,2),kn=Tn[0],er=Tn[1],ar=(0,u.useState)([0,0]),vn=(0,V.Z)(ar,2),yn=vn[0],On=vn[1],Un=(0,u.useState)([0,0]),or=(0,V.Z)(Un,2),_n=or[0],Wr=or[1],vr=(0,u.useState)([0,0]),Ca=(0,V.Z)(vr,2),Mr=Ca[0],gn=Ca[1],Pr=at(new Map),Ln=(0,V.Z)(Pr,2),Ha=Ln[0],wr=Ln[1],Qr=pe(Me,Ha,yn[0]),Dn=tu(kn,Vt),In=tu(yn,Vt),ca=tu(_n,Vt),Vn=tu(Mr,Vt),Fr=Dn<In+ca,Nr=Fr?Dn-Vn:Dn-ca,Lr="".concat(xe,"-nav-operations-hidden"),Fn=0,Er=0;Vt&&et?(Fn=0,Er=Math.max(0,In-Nr)):(Fn=Math.min(0,Nr-In),Er=0);function Ka(Yn){return Yn<Fn?Fn:Yn>Er?Er:Yn}var Ja=(0,u.useRef)(),Br=(0,u.useState)(),$r=(0,V.Z)(Br,2),cr=$r[0],ta=$r[1];function Gr(){ta(Date.now())}function Fa(){window.clearTimeout(Ja.current)}De(Ut,function(Yn,An){function pr(mr,Or){mr(function(Jr){var vo=Ka(Jr+Or);return vo})}return Fr?(Vt?pr(ln,Yn):pr(Jn,An),Fa(),Gr(),!0):!1}),(0,u.useEffect)(function(){return Fa(),cr&&(Ja.current=window.setTimeout(function(){ta(0)},100)),Fa},[cr]);var Oa=St(Qr,Nr,Vt?Yt:Sn,In,ca,Vn,(0,D.Z)((0,D.Z)({},F),{},{tabs:Me})),da=(0,V.Z)(Oa,2),fo=da[0],fa=da[1],Rn=(0,Ye.Z)(function(){var Yn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Pt,An=Qr.get(Yn)||{width:0,height:0,left:0,right:0,top:0};if(Vt){var pr=Yt;et?An.right<Yt?pr=An.right:An.right+An.width>Yt+Nr&&(pr=An.right+An.width-Nr):An.left<-Yt?pr=-An.left:An.left+An.width>-Yt+Nr&&(pr=-(An.left+An.width-Nr)),Jn(0),ln(Ka(pr))}else{var mr=Sn;An.top<-Sn?mr=-An.top:An.top+An.height>-Sn+Nr&&(mr=-(An.top+An.height-Nr)),ln(0),Jn(Ka(mr))}}),nr={};Lt==="top"||Lt==="bottom"?nr[et?"marginRight":"marginLeft"]=Gt:nr.marginTop=Gt;var ir=Me.map(function(Yn,An){var pr=Yn.key;return u.createElement(co,{id:qe,prefixCls:xe,key:pr,tab:Yn,style:An===0?void 0:nr,closable:Yn.closable,editable:ht,active:pr===Pt,renderWrapper:Mt,removeAriaLabel:Ct==null?void 0:Ct.removeAriaLabel,onClick:function(Or){dt(pr,Or)},onFocus:function(){Rn(pr),Gr(),Ut.current&&(et||(Ut.current.scrollLeft=0),Ut.current.scrollTop=0)}})}),Hr=function(){return wr(function(){var An=new Map;return Me.forEach(function(pr){var mr,Or=pr.key,Jr=(mr=Nt.current)===null||mr===void 0?void 0:mr.querySelector('[data-node-key="'.concat(Wt(Or),'"]'));Jr&&An.set(Or,{width:Jr.offsetWidth,height:Jr.offsetHeight,left:Jr.offsetLeft,top:Jr.offsetTop})}),An})};(0,u.useEffect)(function(){Hr()},[Me.map(function(Yn){return Yn.key}).join("_")]);var ya=bt(function(){var Yn=Fo(jt),An=Fo(Ht),pr=Fo(on);er([Yn[0]-An[0]-pr[0],Yn[1]-An[1]-pr[1]]);var mr=Fo(nn);Wr(mr);var Or=Fo(wt);gn(Or);var Jr=Fo(Nt);On([Jr[0]-mr[0],Jr[1]-mr[1]]),Hr()}),kr=Me.slice(0,fo),jr=Me.slice(fa+1),Wa=[].concat((0,Ze.Z)(kr),(0,Ze.Z)(jr)),_a=Qr.get(Pt),ko=Ju({activeTabOffset:_a,horizontal:Vt,rtl:et,indicatorSize:ct}),Yo=ko.style;(0,u.useEffect)(function(){Rn()},[Pt,Fn,Er,Bt(_a),Bt(Qr),Vt]),(0,u.useEffect)(function(){ya()},[et]);var Xr=!!Wa.length,Cr="".concat(xe,"-nav-wrap"),zn,Ur,qa,na;return Vt?et?(Ur=Yt>0,zn=Yt!==Er):(zn=Yt<0,Ur=Yt!==Fn):(qa=Sn<0,na=Sn!==Fn),u.createElement(je.Z,{onResize:ya},u.createElement("div",{ref:(0,oe.x1)(G,jt),role:"tablist",className:a()("".concat(xe,"-nav"),we),style:Ke,onKeyDown:function(){Gr()}},u.createElement(Ie,{ref:Ht,position:"left",extra:Tt,prefixCls:xe}),u.createElement("div",{className:a()(Cr,(X={},(0,T.Z)(X,"".concat(Cr,"-ping-left"),zn),(0,T.Z)(X,"".concat(Cr,"-ping-right"),Ur),(0,T.Z)(X,"".concat(Cr,"-ping-top"),qa),(0,T.Z)(X,"".concat(Cr,"-ping-bottom"),na),X)),ref:Ut},u.createElement(je.Z,{onResize:ya},u.createElement("div",{ref:Nt,className:"".concat(xe,"-nav-list"),style:{transform:"translate(".concat(Yt,"px, ").concat(Sn,"px)"),transition:cr?"none":void 0}},ir,u.createElement(ne,{ref:nn,prefixCls:xe,locale:Ct,editable:ht,style:(0,D.Z)((0,D.Z)({},ir.length===0?void 0:nr),{},{visibility:Xr?"hidden":null})}),u.createElement("div",{className:a()("".concat(xe,"-ink-bar"),(0,T.Z)({},"".concat(xe,"-ink-bar-animated"),rt.inkBar)),style:Yo})))),u.createElement(Si,(0,re.Z)({},F,{removeAriaLabel:Ct==null?void 0:Ct.removeAriaLabel,ref:wt,prefixCls:xe,tabs:Wa,className:!Xr&&Lr,tabMoving:!!cr})),u.createElement(Ie,{ref:on,position:"right",extra:Tt,prefixCls:xe})))}var xu=u.forwardRef(nu),Su=["renderTabBar"],Bu=["label","key"];function ku(F){var G=F.renderTabBar,X=(0,J.Z)(F,Su),Ee=u.useContext(q),xe=Ee.tabs;if(G){var Me=(0,D.Z)((0,D.Z)({},X),{},{panes:xe.map(function(we){var Ke=we.label,qe=we.key,rt=(0,J.Z)(we,Bu);return u.createElement(Ce,(0,re.Z)({tab:Ke,key:qe,tabKey:qe},rt))})});return G(Me,xu)}return u.createElement(xu,X)}function ju(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},G;return F===!1?G={inkBar:!1,tabPane:!1}:F===!0?G={inkBar:!0,tabPane:!1}:G=(0,D.Z)({inkBar:!0},(0,le.Z)(F)==="object"?F:{}),G.tabPaneMotion&&G.tabPane===void 0&&(G.tabPane=!0),!G.tabPaneMotion&&G.tabPane&&(G.tabPane=!1),G}var _u=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicatorSize"],Uu=0;function Eu(F,G){var X,Ee=F.id,xe=F.prefixCls,Me=xe===void 0?"rc-tabs":xe,we=F.className,Ke=F.items,qe=F.direction,rt=F.activeKey,Pt=F.defaultActiveKey,et=F.editable,Tt=F.animated,ht=F.tabPosition,Ct=ht===void 0?"top":ht,Lt=F.tabBarGutter,Gt=F.tabBarStyle,Mt=F.tabBarExtraContent,dt=F.locale,At=F.moreIcon,ct=F.moreTransitionName,jt=F.destroyInactiveTabPane,Ht=F.renderTabBar,on=F.onChange,Ut=F.onTabClick,Nt=F.onTabScroll,wt=F.getPopupContainer,nn=F.popupClassName,Vt=F.indicatorSize,dn=(0,J.Z)(F,_u),un=u.useMemo(function(){return(Ke||[]).filter(function(gn){return gn&&(0,le.Z)(gn)==="object"&&"key"in gn})},[Ke]),Yt=qe==="rtl",ln=ju(Tt),en=(0,u.useState)(!1),Kn=(0,V.Z)(en,2),Sn=Kn[0],Jn=Kn[1];(0,u.useEffect)(function(){Jn((0,P.Z)())},[]);var xr=(0,$.Z)(function(){var gn;return(gn=un[0])===null||gn===void 0?void 0:gn.key},{value:rt,defaultValue:Pt}),Tn=(0,V.Z)(xr,2),kn=Tn[0],er=Tn[1],ar=(0,u.useState)(function(){return un.findIndex(function(gn){return gn.key===kn})}),vn=(0,V.Z)(ar,2),yn=vn[0],On=vn[1];(0,u.useEffect)(function(){var gn=un.findIndex(function(Ln){return Ln.key===kn});if(gn===-1){var Pr;gn=Math.max(0,Math.min(yn,un.length-1)),er((Pr=un[gn])===null||Pr===void 0?void 0:Pr.key)}On(gn)},[un.map(function(gn){return gn.key}).join("_"),kn,yn]);var Un=(0,$.Z)(null,{value:Ee}),or=(0,V.Z)(Un,2),_n=or[0],Wr=or[1];(0,u.useEffect)(function(){Ee||(Wr("rc-tabs-".concat(Uu)),Uu+=1)},[]);function vr(gn,Pr){Ut==null||Ut(gn,Pr);var Ln=gn!==kn;er(gn),Ln&&(on==null||on(gn))}var Ca={id:_n,activeKey:kn,animated:ln,tabPosition:Ct,rtl:Yt,mobile:Sn},Mr=(0,D.Z)((0,D.Z)({},Ca),{},{editable:et,locale:dt,moreIcon:At,moreTransitionName:ct,tabBarGutter:Lt,onTabClick:vr,onTabScroll:Nt,extra:Mt,style:Gt,panes:null,getPopupContainer:wt,popupClassName:nn,indicatorSize:Vt});return u.createElement(q.Provider,{value:{tabs:un,prefixCls:Me}},u.createElement("div",(0,re.Z)({ref:G,id:Ee,className:a()(Me,"".concat(Me,"-").concat(Ct),(X={},(0,T.Z)(X,"".concat(Me,"-mobile"),Sn),(0,T.Z)(X,"".concat(Me,"-editable"),et),(0,T.Z)(X,"".concat(Me,"-rtl"),Yt),X),we)},dn),u.createElement(ku,(0,re.Z)({},Mr,{renderTabBar:Ht})),u.createElement(Xe,(0,re.Z)({destroyInactiveTabPane:jt},Ca,{animated:ln}))))}var qu=u.forwardRef(Eu),es=qu,Xa=es;function Bo(F,G){return bu(F)||$u(F,G)||Zu(F,G)||zu()}function zu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zu(F,G){if(F){if(typeof F=="string")return bi(F,G);var X=Object.prototype.toString.call(F).slice(8,-1);if(X==="Object"&&F.constructor&&(X=F.constructor.name),X==="Map"||X==="Set")return Array.from(F);if(X==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(X))return bi(F,G)}}function bi(F,G){(G==null||G>F.length)&&(G=F.length);for(var X=0,Ee=new Array(G);X<G;X++)Ee[X]=F[X];return Ee}function $u(F,G){var X=F==null?null:typeof Symbol!="undefined"&&F[Symbol.iterator]||F["@@iterator"];if(X!=null){var Ee,xe,Me,we,Ke=[],qe=!0,rt=!1;try{if(Me=(X=X.call(F)).next,G===0){if(Object(X)!==X)return;qe=!1}else for(;!(qe=(Ee=Me.call(X)).done)&&(Ke.push(Ee.value),Ke.length!==G);qe=!0);}catch(Pt){rt=!0,xe=Pt}finally{try{if(!qe&&X.return!=null&&(we=X.return(),Object(we)!==we))return}finally{if(rt)throw xe}}return Ke}}function bu(F){if(Array.isArray(F))return F}var ts=function(){return u.createElement("svg",{viewBox:"0 0 200 117"},u.createElement("path",{d:"M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Zm-75.938-45c-4.062-1.563-9.062.937-10.937 5l-34.063 95c-1.562 4.062.938 9.062 5 10.937.938 0 1.563.938 2.5.938 3.438 0 6.563-2.5 7.5-5.938l35-95.937c1.563-4.063-.937-9.063-5-10Z"}))},Tu=function(){return u.createElement("svg",{viewBox:"0 0 200 117"},u.createElement("path",{d:"M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Z"}))},ft=function(){return u.createElement("svg",{viewBox:"0 0 1024 1024"},u.createElement("path",{d:"M853.333 469.333A42.667 42.667 0 0 0 810.667 512v256A42.667 42.667 0 0 1 768 810.667H256A42.667 42.667 0 0 1 213.333 768V256A42.667 42.667 0 0 1 256 213.333h256A42.667 42.667 0 0 0 512 128H256a128 128 0 0 0-128 128v512a128 128 0 0 0 128 128h512a128 128 0 0 0 128-128V512a42.667 42.667 0 0 0-42.667-42.667z"}),u.createElement("path",{d:"M682.667 213.333h67.413L481.707 481.28a42.667 42.667 0 0 0 0 60.587 42.667 42.667 0 0 0 60.586 0L810.667 273.92v67.413A42.667 42.667 0 0 0 853.333 384 42.667 42.667 0 0 0 896 341.333V170.667A42.667 42.667 0 0 0 853.333 128H682.667a42.667 42.667 0 0 0 0 85.333z"}))},ot=function(G){var X,Ee,xe,Me,we,Ke=(0,r.YB)(),qe=Object.entries(G.asset.dependencies).filter(function(Ut){var Nt=Bo(Ut,2),wt=Nt[1].type;return wt==="FILE"}),rt=(0,u.useState)(0),Pt=Bo(rt,2),et=Pt[0],Tt=Pt[1],ht=(0,u.useState)(G.forceShowCode||G.defaultShowCode),Ct=Bo(ht,2),Lt=Ct[0],Gt=Ct[1],Mt=(0,u.useRef)(),dt=(0,u.useState)(!1),At=Bo(dt,2),ct=At[0],jt=At[1],Ht=qe.length===1,on=((X=qe[et][0].match(/\.([^.]+)$/))===null||X===void 0?void 0:X[1])||"text";return u.createElement(u.Fragment,null,u.createElement("div",{className:"dumi-default-previewer-actions"},!((Ee=G.disabledActions)!==null&&Ee!==void 0&&Ee.includes("CSB"))&&u.createElement("button",{className:"dumi-default-previewer-action-btn",type:"button","data-dumi-tooltip":Ke.formatMessage({id:"previewer.actions.codesandbox"}),onClick:function(){return(0,r.il)(G)}},u.createElement(g,null)),!((xe=G.disabledActions)!==null&&xe!==void 0&&xe.includes("STACKBLITZ"))&&u.createElement("button",{className:"dumi-default-previewer-action-btn",type:"button","data-dumi-tooltip":Ke.formatMessage({id:"previewer.actions.stackblitz"}),onClick:function(){return(0,r.Sc)(G)}},u.createElement(be,null)),!((Me=G.disabledActions)!==null&&Me!==void 0&&Me.includes("HTML2SKETCH"))&&r.p6&&u.createElement("span",{className:"dumi-default-previewer-action-btn dumi-default-previewer-action-sketch","data-dumi-tooltip":Ke.formatMessage({id:"previewer.actions.sketch"}),"data-copied":ct||void 0},ct?u.createElement(s.r,null):u.createElement(B,null),u.createElement("select",{value:"",onChange:function(Nt){var wt=Nt.target.value;switch(wt){case"group":case"symbol":(0,r.p6)(G.demoContainer,{type:wt}).then(function(nn){Q()(JSON.stringify(nn)),jt(!0),clearTimeout(Mt.current),Mt.current=window.setTimeout(function(){return jt(!1)},2e3)});break;case"guide":window.open("https://d.umijs.org/config#html2sketch");break;default:}}},u.createElement("option",{value:"",hidden:!0}),u.createElement("option",{value:"group"},Ke.formatMessage({id:"previewer.actions.sketch.group"})),u.createElement("option",{value:"symbol"},Ke.formatMessage({id:"previewer.actions.sketch.symbol"})),u.createElement("option",{value:"-",disabled:!0},Ke.formatMessage({id:"previewer.actions.sketch.divider"})),u.createElement("option",{value:"guide"},Ke.formatMessage({id:"previewer.actions.sketch.guide"})))),!((we=G.disabledActions)!==null&&we!==void 0&&we.includes("EXTERNAL"))&&u.createElement("a",{target:"_blank",rel:"noreferrer",href:G.demoUrl,className:"dumi-default-previewer-action-btn","data-dumi-tooltip":Ke.formatMessage({id:"previewer.actions.separate"})},u.createElement(ft,null)),G.extra,u.createElement(K,G),!G.forceShowCode&&u.createElement("button",{className:"dumi-default-previewer-action-btn",type:"button",onClick:function(){return Gt(function(Nt){return!Nt})},"data-dumi-tooltip":Ke.formatMessage({id:"previewer.actions.code.".concat(Lt?"shrink":"expand")})},Lt?u.createElement(Tu,null):u.createElement(ts,null))),Lt&&u.createElement(u.Fragment,null,u.createElement("div",{className:"dumi-default-previewer-sources"},!Ht&&u.createElement(Xa,{className:"dumi-default-previewer-tabs",prefixCls:"dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:String(et),onChange:function(Nt){return Tt(Number(Nt))},items:qe.map(function(Ut,Nt){var wt=Bo(Ut,1),nn=wt[0];return{key:String(Nt),label:nn}})})),u.createElement(Y.Z,{lang:on},qe[et][1].value)))},Zt=ot;function xn(){return xn=Object.assign?Object.assign.bind():function(F){for(var G=1;G<arguments.length;G++){var X=arguments[G];for(var Ee in X)Object.prototype.hasOwnProperty.call(X,Ee)&&(F[Ee]=X[Ee])}return F},xn.apply(this,arguments)}function Xn(F){"@babel/helpers - typeof";return Xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(G){return typeof G}:function(G){return G&&typeof Symbol=="function"&&G.constructor===Symbol&&G!==Symbol.prototype?"symbol":typeof G},Xn(F)}var Sr=function(G){var X,Ee=(0,u.useRef)(null),xe=(0,r.TH)(),Me=xe.hash,we="#".concat(G.asset.id);return u.createElement("div",{id:G.asset.id,className:a()("dumi-default-previewer",G.className),style:G.style,"data-debug":G.debug,"data-active":Me===we||void 0},u.createElement("div",{className:"dumi-default-previewer-demo",style:{background:G.background},"data-compact":G.compact||void 0,"data-transform":G.transform||void 0,"data-iframe":G.iframe||void 0,ref:Ee},G.iframe?u.createElement("iframe",{style:["string","number"].includes(Xn(G.iframe))?{height:Number(G.iframe)}:{},src:G.demoUrl}):G.children),u.createElement("div",{className:"dumi-default-previewer-meta"},(G.title||G.debug)&&u.createElement("div",{className:"dumi-default-previewer-desc"},u.createElement("h5",null,u.createElement("a",{href:we},G.debug&&u.createElement("strong",null,"DEV ONLY"),G.title)),G.description&&u.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:G.description}})),u.createElement(Zt,xn({},G,{demoContainer:G.iframe?(X=Ee.current)===null||X===void 0?void 0:X.firstElementChild:Ee.current}))))},Ir=Sr},60037:function(c,l,e){"use strict";e.d(l,{Z:function(){return J}});var o=e(47697),a=e(67294),r=Object.defineProperty,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,d=(P,$,H)=>$ in P?r(P,$,{enumerable:!0,configurable:!0,writable:!0,value:H}):P[$]=H,h=(P,$)=>{for(var H in $||($={}))u.call($,H)&&d(P,H,$[H]);if(s)for(var H of s($))v.call($,H)&&d(P,H,$[H]);return P};const m=P=>a.createElement("svg",h({viewBox:"64 64 896 896"},P),a.createElement("path",{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2 263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}));var p="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODMyIDY0SDI5NmMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg0OTZ2Njg4YzAgNC40IDMuNiA4IDggOGg1NmM0LjQgMCA4LTMuNiA4LThWOTZjMC0xNy43LTE0LjMtMzItMzItMzJ6TTcwNCAxOTJIMTkyYy0xNy43IDAtMzIgMTQuMy0zMiAzMnY1MzAuN2MwIDguNSAzLjQgMTYuNiA5LjQgMjIuNmwxNzMuMyAxNzMuM2MyLjIgMi4yIDQuNyA0IDcuNCA1LjV2MS45aDQuMmMzLjUgMS4zIDcuMiAyIDExIDJINzA0YzE3LjcgMCAzMi0xNC4zIDMyLTMyVjIyNGMwLTE3LjctMTQuMy0zMi0zMi0zMnpNMzUwIDg1Ni4yIDI2My45IDc3MEgzNTB2ODYuMnpNNjY0IDg4OEg0MTRWNzQ2YzAtMjIuMS0xNy45LTQwLTQwLTQwSDIzMlYyNjRoNDMydjYyNHoiLz48L3N2Zz4=",y=e(94184),g=e.n(y),I=e(61748);var b=function(){var P=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,$=0,H={},q={util:{encode:function oe(fe){return fe instanceof ae?new ae(fe.type,oe(fe.content),fe.alias):Array.isArray(fe)?fe.map(oe):fe.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(oe){return Object.prototype.toString.call(oe).slice(8,-1)},objId:function(oe){return oe.__id||Object.defineProperty(oe,"__id",{value:++$}),oe.__id},clone:function oe(fe,pe){pe=pe||{};var me,Pe;switch(q.util.type(fe)){case"Object":if(Pe=q.util.objId(fe),pe[Pe])return pe[Pe];me={},pe[Pe]=me;for(var se in fe)fe.hasOwnProperty(se)&&(me[se]=oe(fe[se],pe));return me;case"Array":return Pe=q.util.objId(fe),pe[Pe]?pe[Pe]:(me=[],pe[Pe]=me,fe.forEach(function(ve,ye){me[ye]=oe(ve,pe)}),me);default:return fe}},getLanguage:function(oe){for(;oe;){var fe=P.exec(oe.className);if(fe)return fe[1].toLowerCase();oe=oe.parentElement}return"none"},setLanguage:function(oe,fe){oe.className=oe.className.replace(RegExp(P,"gi"),""),oe.classList.add("language-"+fe)},isActive:function(oe,fe,pe){for(var me="no-"+fe;oe;){var Pe=oe.classList;if(Pe.contains(fe))return!0;if(Pe.contains(me))return!1;oe=oe.parentElement}return!!pe}},languages:{plain:H,plaintext:H,text:H,txt:H,extend:function(oe,fe){var pe=q.util.clone(q.languages[oe]);for(var me in fe)pe[me]=fe[me];return pe},insertBefore:function(oe,fe,pe,me){me=me||q.languages;var Pe=me[oe],se={};for(var ve in Pe)if(Pe.hasOwnProperty(ve)){if(ve==fe)for(var ye in pe)pe.hasOwnProperty(ye)&&(se[ye]=pe[ye]);pe.hasOwnProperty(ve)||(se[ve]=Pe[ve])}var De=me[oe];return me[oe]=se,q.languages.DFS(q.languages,function(ze,bt){bt===De&&ze!=oe&&(this[ze]=se)}),se},DFS:function oe(fe,pe,me,Pe){Pe=Pe||{};var se=q.util.objId;for(var ve in fe)if(fe.hasOwnProperty(ve)){pe.call(fe,ve,fe[ve],me||ve);var ye=fe[ve],De=q.util.type(ye);De==="Object"&&!Pe[se(ye)]?(Pe[se(ye)]=!0,oe(ye,pe,null,Pe)):De==="Array"&&!Pe[se(ye)]&&(Pe[se(ye)]=!0,oe(ye,pe,ve,Pe))}}},plugins:{},highlight:function(oe,fe,pe){var me={code:oe,grammar:fe,language:pe};return q.hooks.run("before-tokenize",me),me.tokens=q.tokenize(me.code,me.grammar),q.hooks.run("after-tokenize",me),ae.stringify(q.util.encode(me.tokens),me.language)},tokenize:function(oe,fe){var pe=fe.rest;if(pe){for(var me in pe)fe[me]=pe[me];delete fe.rest}var Pe=new Xe;return Ze(Pe,Pe.head,oe),Le(oe,Pe,fe,Pe.head,0),Ye(Pe)},hooks:{all:{},add:function(oe,fe){var pe=q.hooks.all;pe[oe]=pe[oe]||[],pe[oe].push(fe)},run:function(oe,fe){var pe=q.hooks.all[oe];if(!(!pe||!pe.length))for(var me=0,Pe;Pe=pe[me++];)Pe(fe)}},Token:ae};function ae(oe,fe,pe,me){this.type=oe,this.content=fe,this.alias=pe,this.length=(me||"").length|0}ae.stringify=function oe(fe,pe){if(typeof fe=="string")return fe;if(Array.isArray(fe)){var me="";return fe.forEach(function(De){me+=oe(De,pe)}),me}var Pe={type:fe.type,content:oe(fe.content,pe),tag:"span",classes:["token",fe.type],attributes:{},language:pe},se=fe.alias;se&&(Array.isArray(se)?Array.prototype.push.apply(Pe.classes,se):Pe.classes.push(se)),q.hooks.run("wrap",Pe);var ve="";for(var ye in Pe.attributes)ve+=" "+ye+'="'+(Pe.attributes[ye]||"").replace(/"/g,"&quot;")+'"';return"<"+Pe.tag+' class="'+Pe.classes.join(" ")+'"'+ve+">"+Pe.content+"</"+Pe.tag+">"};function Ce(oe,fe,pe,me){oe.lastIndex=fe;var Pe=oe.exec(pe);if(Pe&&me&&Pe[1]){var se=Pe[1].length;Pe.index+=se,Pe[0]=Pe[0].slice(se)}return Pe}function Le(oe,fe,pe,me,Pe,se){for(var ve in pe)if(!(!pe.hasOwnProperty(ve)||!pe[ve])){var ye=pe[ve];ye=Array.isArray(ye)?ye:[ye];for(var De=0;De<ye.length;++De){if(se&&se.cause==ve+","+De)return;var ze=ye[De],bt=ze.inside,at=!!ze.lookbehind,lt=!!ze.greedy,St=ze.alias;if(lt&&!ze.pattern.global){var Bt=ze.pattern.toString().match(/[imsuy]*$/)[0];ze.pattern=RegExp(ze.pattern.source,Bt+"g")}for(var Ot=ze.pattern||ze,Wt=me.next,x=Pe;Wt!==fe.tail&&!(se&&x>=se.reach);x+=Wt.value.length,Wt=Wt.next){var U=Wt.value;if(fe.length>oe.length)return;if(!(U instanceof ae)){var ne=1,ue;if(lt){if(ue=Ce(Ot,x,oe,at),!ue||ue.index>=oe.length)break;var $e=ue.index,Ie=ue.index+ue[0].length,Oe=x;for(Oe+=Wt.value.length;$e>=Oe;)Wt=Wt.next,Oe+=Wt.value.length;if(Oe-=Wt.value.length,x=Oe,Wt.value instanceof ae)continue;for(var Se=Wt;Se!==fe.tail&&(Oe<Ie||typeof Se.value=="string");Se=Se.next)ne++,Oe+=Se.value.length;ne--,U=oe.slice(x,Oe),ue.index-=x}else if(ue=Ce(Ot,0,U,at),!ue)continue;var $e=ue.index,Ve=ue[0],Ge=U.slice(0,$e),vt=U.slice($e+Ve.length),he=x+U.length;se&&he>se.reach&&(se.reach=he);var Be=Wt.prev;Ge&&(Be=Ze(fe,Be,Ge),x+=Ge.length),je(fe,Be,ne);var Fe=new ae(ve,bt?q.tokenize(Ve,bt):Ve,St,Ve);if(Wt=Ze(fe,Be,Fe),vt&&Ze(fe,Wt,vt),ne>1){var Re={cause:ve+","+De,reach:he};Le(oe,fe,pe,Wt.prev,x,Re),se&&Re.reach>se.reach&&(se.reach=Re.reach)}}}}}}function Xe(){var oe={value:null,prev:null,next:null},fe={value:null,prev:oe,next:null};oe.next=fe,this.head=oe,this.tail=fe,this.length=0}function Ze(oe,fe,pe){var me=fe.next,Pe={value:pe,prev:fe,next:me};return fe.next=Pe,me.prev=Pe,oe.length++,Pe}function je(oe,fe,pe){for(var me=fe.next,Pe=0;Pe<pe&&me!==oe.tail;Pe++)me=me.next;fe.next=me,me.prev=fe,oe.length-=Pe}function Ye(oe){for(var fe=[],pe=oe.head.next;pe!==oe.tail;)fe.push(pe.value),pe=pe.next;return fe}return q}(),E=b;b.default=b,E.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},E.languages.markup.tag.inside["attr-value"].inside.entity=E.languages.markup.entity,E.languages.markup.doctype.inside["internal-subset"].inside=E.languages.markup,E.hooks.add("wrap",function(P){P.type==="entity"&&(P.attributes.title=P.content.replace(/&amp;/,"&"))}),Object.defineProperty(E.languages.markup.tag,"addInlined",{value:function($,H){var q={};q["language-"+H]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:E.languages[H]},q.cdata=/^<!\[CDATA\[|\]\]>$/i;var ae={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:q}};ae["language-"+H]={pattern:/[\s\S]+/,inside:E.languages[H]};var Ce={};Ce[$]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return $}),"i"),lookbehind:!0,greedy:!0,inside:ae},E.languages.insertBefore("markup","cdata",Ce)}}),Object.defineProperty(E.languages.markup.tag,"addAttribute",{value:function(P,$){E.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+P+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[$,"language-"+$],inside:E.languages[$]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),E.languages.html=E.languages.markup,E.languages.mathml=E.languages.markup,E.languages.svg=E.languages.markup,E.languages.xml=E.languages.extend("markup",{}),E.languages.ssml=E.languages.xml,E.languages.atom=E.languages.xml,E.languages.rss=E.languages.xml,function(P){var $="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",H={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},q={bash:H,environment:{pattern:RegExp("\\$"+$),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+$),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};P.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+$),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:q},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:H}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:q},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:q.entity}}],environment:{pattern:RegExp("\\$?"+$),alias:"constant"},variable:q.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},H.inside=P.languages.bash;for(var ae=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],Ce=q.variable[1].inside,Le=0;Le<ae.length;Le++)Ce[ae[Le]]=P.languages.bash[ae[Le]];P.languages.shell=P.languages.bash}(E),E.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},E.languages.c=E.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),E.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),E.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},E.languages.c.string],char:E.languages.c.char,comment:E.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:E.languages.c}}}}),E.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete E.languages.c.boolean,function(P){var $=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,H=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return $.source});P.languages.cpp=P.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return $.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:$,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),P.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return H})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),P.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:P.languages.cpp}}}}),P.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),P.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:P.languages.extend("cpp",{})}}),P.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},P.languages.cpp["base-clause"])}(E),function(P){var $=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;P.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+$.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+$.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+$.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:$,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},P.languages.css.atrule.inside.rest=P.languages.css;var H=P.languages.markup;H&&(H.tag.addInlined("style","css"),H.tag.addAttribute("style","css"))}(E),function(P){var $=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,H;P.languages.css.selector={pattern:P.languages.css.selector.pattern,lookbehind:!0,inside:H={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+$.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[$,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},P.languages.css.atrule.inside["selector-function-argument"].inside=H,P.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var q={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},ae={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};P.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:q,number:ae,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:q,number:ae})}(E),E.languages.javascript=E.languages.extend("clike",{"class-name":[E.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),E.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,E.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:E.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:E.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:E.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:E.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:E.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),E.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:E.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),E.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),E.languages.markup&&(E.languages.markup.tag.addInlined("script","javascript"),E.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),E.languages.js=E.languages.javascript,function(P){var $=/#(?!\{).+/,H={pattern:/#\{[^}]+\}/,alias:"variable"};P.languages.coffeescript=P.languages.extend("javascript",{comment:$,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:H}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),P.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:$,interpolation:H}}}),P.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:P.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:H}}]}),P.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete P.languages.coffeescript["template-string"],P.languages.coffee=P.languages.coffeescript}(E),function(P){var $=/[*&][^\s[\]{},]+/,H=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,q="(?:"+H.source+"(?:[ 	]+"+$.source+")?|"+$.source+"(?:[ 	]+"+H.source+")?)",ae=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),Ce=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function Le(Xe,Ze){Ze=(Ze||"").replace(/m/g,"")+"m";var je=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return q}).replace(/<<value>>/g,function(){return Xe});return RegExp(je,Ze)}P.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return q})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return q}).replace(/<<key>>/g,function(){return"(?:"+ae+"|"+Ce+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:Le(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:Le(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:Le(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:Le(Ce),lookbehind:!0,greedy:!0},number:{pattern:Le(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:H,important:$,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},P.languages.yml=P.languages.yaml}(E),function(P){var $=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function H(Ye){return Ye=Ye.replace(/<inner>/g,function(){return $}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+Ye+")")}var q=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,ae=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return q}),Ce=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;P.languages.markdown=P.languages.extend("markup",{}),P.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:P.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+ae+Ce+"(?:"+ae+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+ae+Ce+")(?:"+ae+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(q),inside:P.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+ae+")"+Ce+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+ae+"$"),inside:{"table-header":{pattern:RegExp(q),alias:"important",inside:P.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:H(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:H(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:H(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:H(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(Ye){["url","bold","italic","strike","code-snippet"].forEach(function(oe){Ye!==oe&&(P.languages.markdown[Ye].inside.content.inside[oe]=P.languages.markdown[oe])})}),P.hooks.add("after-tokenize",function(Ye){if(Ye.language!=="markdown"&&Ye.language!=="md")return;function oe(fe){if(!(!fe||typeof fe=="string"))for(var pe=0,me=fe.length;pe<me;pe++){var Pe=fe[pe];if(Pe.type!=="code"){oe(Pe.content);continue}var se=Pe.content[1],ve=Pe.content[3];if(se&&ve&&se.type==="code-language"&&ve.type==="code-block"&&typeof se.content=="string"){var ye=se.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");ye=(/[a-z][\w-]*/i.exec(ye)||[""])[0].toLowerCase();var De="language-"+ye;ve.alias?typeof ve.alias=="string"?ve.alias=[ve.alias,De]:ve.alias.push(De):ve.alias=[De]}}}oe(Ye.tokens)}),P.hooks.add("wrap",function(Ye){if(Ye.type==="code-block"){for(var oe="",fe=0,pe=Ye.classes.length;fe<pe;fe++){var me=Ye.classes[fe],Pe=/language-(.+)/.exec(me);if(Pe){oe=Pe[1];break}}var se=P.languages[oe];if(se)Ye.content=P.highlight(je(Ye.content),se,oe);else if(oe&&oe!=="none"&&P.plugins.autoloader){var ve="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);Ye.attributes.id=ve,P.plugins.autoloader.loadLanguages(oe,function(){var ye=document.getElementById(ve);ye&&(ye.innerHTML=P.highlight(ye.textContent,P.languages[oe],oe))})}}});var Le=RegExp(P.languages.markup.tag.pattern.source,"gi"),Xe={amp:"&",lt:"<",gt:">",quot:'"'},Ze=String.fromCodePoint||String.fromCharCode;function je(Ye){var oe=Ye.replace(Le,"");return oe=oe.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(fe,pe){if(pe=pe.toLowerCase(),pe[0]==="#"){var me;return pe[1]==="x"?me=parseInt(pe.slice(2),16):me=Number(pe.slice(1)),Ze(me)}else{var Pe=Xe[pe];return Pe||fe}}),oe}P.languages.md=P.languages.markdown}(E),E.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:E.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},E.hooks.add("after-tokenize",function($){if($.language!=="graphql")return;var H=$.tokens.filter(function(Pe){return typeof Pe!="string"&&Pe.type!=="comment"&&Pe.type!=="scalar"}),q=0;function ae(Pe){return H[q+Pe]}function Ce(Pe,se){se=se||0;for(var ve=0;ve<Pe.length;ve++){var ye=ae(ve+se);if(!ye||ye.type!==Pe[ve])return!1}return!0}function Le(Pe,se){for(var ve=1,ye=q;ye<H.length;ye++){var De=H[ye],ze=De.content;if(De.type==="punctuation"&&typeof ze=="string"){if(Pe.test(ze))ve++;else if(se.test(ze)&&(ve--,ve===0))return ye}}return-1}function Xe(Pe,se){var ve=Pe.alias;ve?Array.isArray(ve)||(Pe.alias=ve=[ve]):Pe.alias=ve=[],ve.push(se)}for(;q<H.length;){var Ze=H[q++];if(Ze.type==="keyword"&&Ze.content==="mutation"){var je=[];if(Ce(["definition-mutation","punctuation"])&&ae(1).content==="("){q+=2;var Ye=Le(/^\($/,/^\)$/);if(Ye===-1)continue;for(;q<Ye;q++){var oe=ae(0);oe.type==="variable"&&(Xe(oe,"variable-input"),je.push(oe.content))}q=Ye+1}if(Ce(["punctuation","property-query"])&&ae(0).content==="{"&&(q++,Xe(ae(0),"property-mutation"),je.length>0)){var fe=Le(/^\{$/,/^\}$/);if(fe===-1)continue;for(var pe=q;pe<fe;pe++){var me=H[pe];me.type==="variable"&&je.indexOf(me.content)>=0&&Xe(me,"variable-input")}}}}}),E.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},function(P){var $=P.languages.javascript["template-string"],H=$.pattern.source,q=$.inside.interpolation,ae=q.inside["interpolation-punctuation"],Ce=q.pattern.source;function Le(pe,me){if(P.languages[pe])return{pattern:RegExp("((?:"+me+")\\s*)"+H),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:pe}}}}P.languages.javascript["template-string"]=[Le("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),Le("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),Le("svg",/\bsvg/.source),Le("markdown",/\b(?:markdown|md)/.source),Le("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),Le("sql",/\bsql/.source),$].filter(Boolean);function Xe(pe,me){return"___"+me.toUpperCase()+"_"+pe+"___"}function Ze(pe,me,Pe){var se={code:pe,grammar:me,language:Pe};return P.hooks.run("before-tokenize",se),se.tokens=P.tokenize(se.code,se.grammar),P.hooks.run("after-tokenize",se),se.tokens}function je(pe){var me={};me["interpolation-punctuation"]=ae;var Pe=P.tokenize(pe,me);if(Pe.length===3){var se=[1,1];se.push.apply(se,Ze(Pe[1],P.languages.javascript,"javascript")),Pe.splice.apply(Pe,se)}return new P.Token("interpolation",Pe,q.alias,pe)}function Ye(pe,me,Pe){var se=P.tokenize(pe,{interpolation:{pattern:RegExp(Ce),lookbehind:!0}}),ve=0,ye={},De=se.map(function(lt){if(typeof lt=="string")return lt;for(var St=lt.content,Bt;pe.indexOf(Bt=Xe(ve++,Pe))!==-1;);return ye[Bt]=St,Bt}).join(""),ze=Ze(De,me,Pe),bt=Object.keys(ye);ve=0;function at(lt){for(var St=0;St<lt.length;St++){if(ve>=bt.length)return;var Bt=lt[St];if(typeof Bt=="string"||typeof Bt.content=="string"){var Ot=bt[ve],Wt=typeof Bt=="string"?Bt:Bt.content,x=Wt.indexOf(Ot);if(x!==-1){++ve;var U=Wt.substring(0,x),ne=je(ye[Ot]),ue=Wt.substring(x+Ot.length),Ie=[];if(U&&Ie.push(U),Ie.push(ne),ue){var Oe=[ue];at(Oe),Ie.push.apply(Ie,Oe)}typeof Bt=="string"?(lt.splice.apply(lt,[St,1].concat(Ie)),St+=Ie.length-1):Bt.content=Ie}}else{var Se=Bt.content;Array.isArray(Se)?at(Se):at([Se])}}}return at(ze),new P.Token(Pe,ze,"language-"+Pe,pe)}var oe={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};P.hooks.add("after-tokenize",function(pe){if(!(pe.language in oe))return;function me(Pe){for(var se=0,ve=Pe.length;se<ve;se++){var ye=Pe[se];if(typeof ye!="string"){var De=ye.content;if(!Array.isArray(De)){typeof De!="string"&&me([De]);continue}if(ye.type==="template-string"){var ze=De[1];if(De.length===3&&typeof ze!="string"&&ze.type==="embedded-code"){var bt=fe(ze),at=ze.alias,lt=Array.isArray(at)?at[0]:at,St=P.languages[lt];if(!St)continue;De[1]=Ye(bt,St,lt)}}else me(De)}}}me(pe.tokens)});function fe(pe){return typeof pe=="string"?pe:Array.isArray(pe)?pe.map(fe).join(""):fe(pe.content)}}(E),function(P){P.languages.typescript=P.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),P.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete P.languages.typescript.parameter,delete P.languages.typescript["literal-property"];var $=P.languages.extend("typescript",{});delete $["class-name"],P.languages.typescript["class-name"].inside=$,P.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:$}}}}),P.languages.ts=P.languages.typescript}(E),function(P){P.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+P.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),P.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+P.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),P.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]});function $(Xe,Ze){return RegExp(Xe.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),Ze)}P.languages.insertBefore("javascript","keyword",{imports:{pattern:$(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:P.languages.javascript},exports:{pattern:$(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:P.languages.javascript}}),P.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),P.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),P.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:$(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var H=["function","function-variable","method","method-variable","property-access"],q=0;q<H.length;q++){var ae=H[q],Ce=P.languages.javascript[ae];P.util.type(Ce)==="RegExp"&&(Ce=P.languages.javascript[ae]={pattern:Ce});var Le=Ce.inside||{};Ce.inside=Le,Le["maybe-class-name"]=/^[A-Z][\s\S]*/}}(E),function(P){var $=P.util.clone(P.languages.javascript),H=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,q=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,ae=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function Ce(Ze,je){return Ze=Ze.replace(/<S>/g,function(){return H}).replace(/<BRACES>/g,function(){return q}).replace(/<SPREAD>/g,function(){return ae}),RegExp(Ze,je)}ae=Ce(ae).source,P.languages.jsx=P.languages.extend("markup",$),P.languages.jsx.tag.pattern=Ce(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),P.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,P.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,P.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,P.languages.jsx.tag.inside.comment=$.comment,P.languages.insertBefore("inside","attr-name",{spread:{pattern:Ce(/<SPREAD>/.source),inside:P.languages.jsx}},P.languages.jsx.tag),P.languages.insertBefore("inside","special-attr",{script:{pattern:Ce(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:P.languages.jsx}}},P.languages.jsx.tag);var Le=function(Ze){return Ze?typeof Ze=="string"?Ze:typeof Ze.content=="string"?Ze.content:Ze.content.map(Le).join(""):""},Xe=function(Ze){for(var je=[],Ye=0;Ye<Ze.length;Ye++){var oe=Ze[Ye],fe=!1;if(typeof oe!="string"&&(oe.type==="tag"&&oe.content[0]&&oe.content[0].type==="tag"?oe.content[0].content[0].content==="</"?je.length>0&&je[je.length-1].tagName===Le(oe.content[0].content[1])&&je.pop():oe.content[oe.content.length-1].content==="/>"||je.push({tagName:Le(oe.content[0].content[1]),openedBraces:0}):je.length>0&&oe.type==="punctuation"&&oe.content==="{"?je[je.length-1].openedBraces++:je.length>0&&je[je.length-1].openedBraces>0&&oe.type==="punctuation"&&oe.content==="}"?je[je.length-1].openedBraces--:fe=!0),(fe||typeof oe=="string")&&je.length>0&&je[je.length-1].openedBraces===0){var pe=Le(oe);Ye<Ze.length-1&&(typeof Ze[Ye+1]=="string"||Ze[Ye+1].type==="plain-text")&&(pe+=Le(Ze[Ye+1]),Ze.splice(Ye+1,1)),Ye>0&&(typeof Ze[Ye-1]=="string"||Ze[Ye-1].type==="plain-text")&&(pe=Le(Ze[Ye-1])+pe,Ze.splice(Ye-1,1),Ye--),Ze[Ye]=new P.Token("plain-text",pe,null,pe)}oe.content&&typeof oe.content!="string"&&Xe(oe.content)}};P.hooks.add("after-tokenize",function(Ze){Ze.language!=="jsx"&&Ze.language!=="tsx"||Xe(Ze.tokens)})}(E),function(P){P.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var $={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys($).forEach(function(H){var q=$[H],ae=[];/^\w+$/.test(H)||ae.push(/\w+/.exec(H)[0]),H==="diff"&&ae.push("bold"),P.languages.diff[H]={pattern:RegExp("^(?:["+q+`].*(?:\r
?|
|(?![\\s\\S])))+`,"m"),alias:ae,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(H)[0]}}}}),Object.defineProperty(P.languages.diff,"PREFIXES",{value:$})}(E),E.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s--?\w+/}},coord:/^@@.*@@$/m,"commit-sha1":/^commit \w{40}$/m},E.languages.go=E.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),E.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete E.languages.go["class-name"],function(P){function $(H,q){return"___"+H.toUpperCase()+q+"___"}Object.defineProperties(P.languages["markup-templating"]={},{buildPlaceholders:{value:function(H,q,ae,Ce){if(H.language===q){var Le=H.tokenStack=[];H.code=H.code.replace(ae,function(Xe){if(typeof Ce=="function"&&!Ce(Xe))return Xe;for(var Ze=Le.length,je;H.code.indexOf(je=$(q,Ze))!==-1;)++Ze;return Le[Ze]=Xe,je}),H.grammar=P.languages.markup}}},tokenizePlaceholders:{value:function(H,q){if(H.language!==q||!H.tokenStack)return;H.grammar=P.languages[q];var ae=0,Ce=Object.keys(H.tokenStack);function Le(Xe){for(var Ze=0;Ze<Xe.length&&!(ae>=Ce.length);Ze++){var je=Xe[Ze];if(typeof je=="string"||je.content&&typeof je.content=="string"){var Ye=Ce[ae],oe=H.tokenStack[Ye],fe=typeof je=="string"?je:je.content,pe=$(q,Ye),me=fe.indexOf(pe);if(me>-1){++ae;var Pe=fe.substring(0,me),se=new P.Token(q,P.tokenize(oe,H.grammar),"language-"+q,oe),ve=fe.substring(me+pe.length),ye=[];Pe&&ye.push.apply(ye,Le([Pe])),ye.push(se),ve&&ye.push.apply(ye,Le([ve])),typeof je=="string"?Xe.splice.apply(Xe,[Ze,1].concat(ye)):je.content=ye}}else je.content&&Le(je.content)}return Xe}Le(H.tokens)}}})}(E),function(P){P.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:false|true)\b/,block:{pattern:/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/},P.hooks.add("before-tokenize",function($){var H=/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;P.languages["markup-templating"].buildPlaceholders($,"handlebars",H)}),P.hooks.add("after-tokenize",function($){P.languages["markup-templating"].tokenizePlaceholders($,"handlebars")}),P.languages.hbs=P.languages.handlebars}(E),E.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},E.languages.webmanifest=E.languages.json,E.languages.less=E.languages.extend("css",{comment:[/\/\*[\s\S]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,operator:/[+\-*\/]/}),E.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,lookbehind:!0,alias:"function"}}),E.languages.makefile={comment:{pattern:/(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,lookbehind:!0},string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"builtin-target":{pattern:/\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,alias:"builtin"},target:{pattern:/^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,alias:"symbol",inside:{variable:/\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/}},variable:/\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,keyword:/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,function:{pattern:/(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,lookbehind:!0},operator:/(?:::|[?:+!])?=|[|@]/,punctuation:/[:;(){}]/},E.languages.objectivec=E.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete E.languages.objectivec["class-name"],E.languages.objc=E.languages.objectivec,E.languages.ocaml={comment:{pattern:/\(\*[\s\S]*?\*\)/,greedy:!0},char:{pattern:/'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,greedy:!0},string:[{pattern:/"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/,greedy:!0},{pattern:/\{([a-z_]*)\|[\s\S]*?\|\1\}/,greedy:!0}],number:[/\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i,/\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i,/\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i],directive:{pattern:/\B#\w+/,alias:"property"},label:{pattern:/\B~\w+/,alias:"property"},"type-variable":{pattern:/\B'\w+/,alias:"function"},variant:{pattern:/`\w+/,alias:"symbol"},keyword:/\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,boolean:/\b(?:false|true)\b/,"operator-like-punctuation":{pattern:/\[[<>|]|[>|]\]|\{<|>\}/,alias:"punctuation"},operator:/\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,punctuation:/;;|::|[(){}\[\].,:;#]|\b_\b/},E.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},E.languages.python["string-interpolation"].inside.interpolation.inside.rest=E.languages.python,E.languages.py=E.languages.python,E.languages.reason=E.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),E.languages.insertBefore("reason","class-name",{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete E.languages.reason.function,function(P){P.languages.sass=P.languages.extend("css",{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,lookbehind:!0,greedy:!0}}),P.languages.insertBefore("sass","atrule",{"atrule-line":{pattern:/^(?:[ \t]*)[@+=].+/m,greedy:!0,inside:{atrule:/(?:@[\w-]+|[+=])/}}}),delete P.languages.sass.atrule;var $=/\$[-\w]+|#\{\$[-\w]+\}/,H=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}];P.languages.insertBefore("sass","property",{"variable-line":{pattern:/^[ \t]*\$.+/m,greedy:!0,inside:{punctuation:/:/,variable:$,operator:H}},"property-line":{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,greedy:!0,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:$,operator:H,important:P.languages.sass.important}}}),delete P.languages.sass.property,delete P.languages.sass.important,P.languages.insertBefore("sass","punctuation",{selector:{pattern:/^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,lookbehind:!0,greedy:!0}})}(E),E.languages.scss=E.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),E.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),E.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),E.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),E.languages.scss.atrule.inside.rest=E.languages.scss,function(P){var $={pattern:/(\b\d+)(?:%|[a-z]+)/,lookbehind:!0},H={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0},q={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},url:{pattern:/\burl\((["']?).*?\1\)/i,greedy:!0},string:{pattern:/("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,greedy:!0},interpolation:null,func:null,important:/\B!(?:important|optional)\b/i,keyword:{pattern:/(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,lookbehind:!0},hexcode:/#[\da-f]{3,6}/i,color:[/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:$,number:H,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:$,boolean:/\b(?:false|true)\b/,operator:[/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],number:H,punctuation:/[{}()\[\];:,]/};q.interpolation={pattern:/\{[^\r\n}:]+\}/,alias:"variable",inside:{delimiter:{pattern:/^\{|\}$/,alias:"punctuation"},rest:q}},q.func={pattern:/[\w-]+\([^)]*\).*/,inside:{function:/^[^(]+/,rest:q}},P.languages.stylus={"atrule-declaration":{pattern:/(^[ \t]*)@.+/m,lookbehind:!0,inside:{atrule:/^@[\w-]+/,rest:q}},"variable-declaration":{pattern:/(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,lookbehind:!0,inside:{variable:/^\S+/,rest:q}},statement:{pattern:/(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,lookbehind:!0,inside:{keyword:/^\S+/,rest:q}},"property-declaration":{pattern:/((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,lookbehind:!0,inside:{property:{pattern:/^[^\s:]+/,inside:{interpolation:q.interpolation}},rest:q}},selector:{pattern:/(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,lookbehind:!0,inside:{interpolation:q.interpolation,comment:q.comment,punctuation:/[{},]/}},func:q.func,string:q.string,comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0,greedy:!0},interpolation:q.interpolation,punctuation:/[{}()\[\];:.]/}}(E),function(P){var $=P.util.clone(P.languages.typescript);P.languages.tsx=P.languages.extend("jsx",$),delete P.languages.tsx.parameter,delete P.languages.tsx["literal-property"];var H=P.languages.tsx.tag;H.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+H.pattern.source+")",H.pattern.flags),H.lookbehind=!0}(E),E.languages.wasm={comment:[/\(;[\s\S]*?;\)/,{pattern:/;;.*/,greedy:!0}],string:{pattern:/"(?:\\[\s\S]|[^"\\])*"/,greedy:!0},keyword:[{pattern:/\b(?:align|offset)=/,inside:{operator:/=/}},{pattern:/\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,inside:{punctuation:/\./}},/\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],variable:/\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,number:/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,punctuation:/[()]/};var R=E,A={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},N=A,w={Prism:R,theme:N};function B(P,$,H){return $ in P?Object.defineProperty(P,$,{value:H,enumerable:!0,configurable:!0,writable:!0}):P[$]=H,P}function C(){return C=Object.assign||function(P){for(var $=1;$<arguments.length;$++){var H=arguments[$];for(var q in H)Object.prototype.hasOwnProperty.call(H,q)&&(P[q]=H[q])}return P},C.apply(this,arguments)}var L=/\r\n|\r|\n/,Z=function(P){P.length===0?P.push({types:["plain"],content:`
`,empty:!0}):P.length===1&&P[0].content===""&&(P[0].content=`
`,P[0].empty=!0)},te=function(P,$){var H=P.length;return H>0&&P[H-1]===$?P:P.concat($)},ee=function(P){for(var $=[[]],H=[P],q=[0],ae=[P.length],Ce=0,Le=0,Xe=[],Ze=[Xe];Le>-1;){for(;(Ce=q[Le]++)<ae[Le];){var je=void 0,Ye=$[Le],oe=H[Le],fe=oe[Ce];if(typeof fe=="string"?(Ye=Le>0?Ye:["plain"],je=fe):(Ye=te(Ye,fe.type),fe.alias&&(Ye=te(Ye,fe.alias)),je=fe.content),typeof je!="string"){Le++,$.push(Ye),H.push(je),q.push(0),ae.push(je.length);continue}var pe=je.split(L),me=pe.length;Xe.push({types:Ye,content:pe[0]});for(var Pe=1;Pe<me;Pe++)Z(Xe),Ze.push(Xe=[]),Xe.push({types:Ye,content:pe[Pe]})}Le--,$.pop(),H.pop(),q.pop(),ae.pop()}return Z(Xe),Ze},_=function(P,$){var H=P.plain,q=Object.create(null),ae=P.styles.reduce(function(Ce,Le){var Xe=Le.languages,Ze=Le.style;return Xe&&!Xe.includes($)||Le.types.forEach(function(je){var Ye=C({},Ce[je],Ze);Ce[je]=Ye}),Ce},q);return ae.root=H,ae.plain=C({},H,{backgroundColor:null}),ae};function de(P,$){var H={};for(var q in P)Object.prototype.hasOwnProperty.call(P,q)&&$.indexOf(q)===-1&&(H[q]=P[q]);return H}var be=function(P){function $(){for(var H=this,q=[],ae=arguments.length;ae--;)q[ae]=arguments[ae];P.apply(this,q),B(this,"getThemeDict",function(Ce){if(H.themeDict!==void 0&&Ce.theme===H.prevTheme&&Ce.language===H.prevLanguage)return H.themeDict;H.prevTheme=Ce.theme,H.prevLanguage=Ce.language;var Le=Ce.theme?_(Ce.theme,Ce.language):void 0;return H.themeDict=Le}),B(this,"getLineProps",function(Ce){var Le=Ce.key,Xe=Ce.className,Ze=Ce.style,je=de(Ce,["key","className","style","line"]),Ye=je,oe=C({},Ye,{className:"token-line",style:void 0,key:void 0}),fe=H.getThemeDict(H.props);return fe!==void 0&&(oe.style=fe.plain),Ze!==void 0&&(oe.style=oe.style!==void 0?C({},oe.style,Ze):Ze),Le!==void 0&&(oe.key=Le),Xe&&(oe.className+=" "+Xe),oe}),B(this,"getStyleForToken",function(Ce){var Le=Ce.types,Xe=Ce.empty,Ze=Le.length,je=H.getThemeDict(H.props);if(je!==void 0){{if(Ze===1&&Le[0]==="plain")return Xe?{display:"inline-block"}:void 0;if(Ze===1&&!Xe)return je[Le[0]]}var Ye=Xe?{display:"inline-block"}:{},oe=Le.map(function(fe){return je[fe]});return Object.assign.apply(Object,[Ye].concat(oe))}}),B(this,"getTokenProps",function(Ce){var Le=Ce.key,Xe=Ce.className,Ze=Ce.style,je=Ce.token,Ye=de(Ce,["key","className","style","token"]),oe=Ye,fe=C({},oe,{className:"token "+je.types.join(" "),children:je.content,style:H.getStyleForToken(je),key:void 0});return Ze!==void 0&&(fe.style=fe.style!==void 0?C({},fe.style,Ze):Ze),Le!==void 0&&(fe.key=Le),Xe&&(fe.className+=" "+Xe),fe}),B(this,"tokenize",function(Ce,Le,Xe,Ze){var je={code:Le,grammar:Xe,language:Ze,tokens:[]};Ce.hooks.run("before-tokenize",je);var Ye=je.tokens=Ce.tokenize(je.code,je.grammar,je.language);return Ce.hooks.run("after-tokenize",je),Ye})}return P&&($.__proto__=P),$.prototype=Object.create(P&&P.prototype),$.prototype.constructor=$,$.prototype.render=function(){var q=this.props,ae=q.Prism,Ce=q.language,Le=q.code,Xe=q.children,Ze=this.getThemeDict(this.props),je=ae.languages[Ce],Ye=je!==void 0?this.tokenize(ae,Le,je,Ce):[Le],oe=ee(Ye);return Xe({tokens:oe,className:"prism-code language-"+Ce,style:Ze!==void 0?Ze.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},$}(a.Component),Te=be,ie=e(74855);function Q(){return Q=Object.assign?Object.assign.bind():function(P){for(var $=1;$<arguments.length;$++){var H=arguments[$];for(var q in H)Object.prototype.hasOwnProperty.call(H,q)&&(P[q]=H[q])}return P},Q.apply(this,arguments)}function Y(P,$){return D(P)||T(P,$)||K(P,$)||k()}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(P,$){if(P){if(typeof P=="string")return re(P,$);var H=Object.prototype.toString.call(P).slice(8,-1);if(H==="Object"&&P.constructor&&(H=P.constructor.name),H==="Map"||H==="Set")return Array.from(P);if(H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H))return re(P,$)}}function re(P,$){($==null||$>P.length)&&($=P.length);for(var H=0,q=new Array($);H<$;H++)q[H]=P[H];return q}function T(P,$){var H=P==null?null:typeof Symbol!="undefined"&&P[Symbol.iterator]||P["@@iterator"];if(H!=null){var q,ae,Ce,Le,Xe=[],Ze=!0,je=!1;try{if(Ce=(H=H.call(P)).next,$===0){if(Object(H)!==H)return;Ze=!1}else for(;!(Ze=(q=Ce.call(H)).done)&&(Xe.push(q.value),Xe.length!==$);Ze=!0);}catch(Ye){je=!0,ae=Ye}finally{try{if(!Ze&&H.return!=null&&(Le=H.return(),Object(Le)!==Le))return}finally{if(je)throw ae}}return Xe}}function D(P){if(Array.isArray(P))return P}var V={acss:"css",axml:"markup"},le=function($){var H=$.children,q=H===void 0?"":H,ae=$.lang,Ce=$.highlightLines,Le=Ce===void 0?[]:Ce,Xe=(0,a.useRef)(),Ze=(0,a.useState)(!1),je=Y(Ze,2),Ye=je[0],oe=je[1],fe=(0,a.useState)(q),pe=Y(fe,2),me=pe[0],Pe=pe[1],se=(0,I.WF)(),ve=se.themeConfig;return(0,a.useEffect)(function(){var ye=/shellscript|shell|bash|sh|zsh/.test(ae);if(ye){var De=q.replace(/^(\$|>)\s/gm,"");Pe(De)}},[ae,q]),a.createElement("div",{className:"dumi-default-source-code"},a.createElement(ie.CopyToClipboard,{text:me,onCopy:function(){oe(!0),clearTimeout(Xe.current),Xe.current=window.setTimeout(function(){return oe(!1)},2e3)}},a.createElement("button",{type:"button",className:"dumi-default-source-code-copy","data-copied":Ye||void 0},Ye?a.createElement(o.r,null):a.createElement(m,null))),a.createElement(Te,Q({},w,{code:q.trim(),language:V[ae]||ae,theme:void 0}),function(ye){var De=ye.className,ze=ye.style,bt=ye.tokens,at=ye.getLineProps,lt=ye.getTokenProps;return a.createElement("pre",{className:De,style:ze},bt.map(function(St,Bt){return a.createElement("div",{key:String(Bt),className:g()({highlighted:Le.includes(Bt+1),wrap:ve.showLineNum})},ve.showLineNum&&a.createElement("span",{className:"token-line-num"},Bt+1),a.createElement("div",Q({},at({line:St,key:Bt}),{className:g()({"line-cell":ve.showLineNum})}),St.map(function(Ot,Wt){return a.createElement("span",lt({token:Ot,key:Wt}))})))}))}))},J=le},2747:function(){"use strict"},97560:function(){"use strict"},59700:function(){"use strict"},39195:function(){"use strict"},48119:function(){"use strict"},57763:function(){"use strict"},56440:function(){"use strict"},46396:function(){"use strict"},16813:function(){"use strict"},29236:function(){"use strict"},31281:function(){"use strict"},15595:function(){"use strict"},27584:function(){"use strict"},38228:function(){"use strict"},49507:function(){"use strict"},76364:function(){"use strict"},53735:function(){"use strict"},87606:function(){"use strict"},17202:function(){"use strict"},70667:function(){"use strict"},8720:function(){"use strict"},20429:function(){"use strict"},77627:function(){"use strict"},22648:function(){"use strict"},19315:function(){"use strict"},67684:function(){"use strict"},41636:function(){"use strict"},46897:function(){"use strict"},62514:function(){"use strict"},24104:function(){"use strict"},73758:function(){"use strict"},1965:function(){"use strict"},66424:function(){"use strict"},60113:function(){"use strict"},17316:function(){"use strict"},43146:function(){"use strict"},63045:function(){"use strict"},9068:function(){"use strict"},89957:function(){"use strict"},35231:function(){"use strict"},13368:function(){"use strict"},77113:function(){"use strict"},68292:function(){"use strict"},89575:function(){"use strict"},59803:function(){"use strict"},34661:function(){"use strict"},81901:function(){"use strict"},7043:function(){"use strict"},1498:function(){"use strict"},85662:function(){"use strict"},65361:function(){"use strict"},87937:function(){"use strict"},43226:function(){"use strict"},27809:function(){"use strict"},55770:function(){"use strict"},54791:function(){"use strict"},31002:function(){"use strict"},10240:function(){"use strict"},13390:function(){"use strict"},51705:function(){"use strict"},67546:function(){"use strict"},38280:function(){"use strict"},40195:function(){"use strict"},81943:function(){"use strict"},58347:function(){"use strict"},30717:function(){"use strict"},47697:function(c,l,e){"use strict";e.d(l,{r:function(){return h}});var o=e(67294),a=Object.defineProperty,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,v=(p,y,g)=>y in p?a(p,y,{enumerable:!0,configurable:!0,writable:!0,value:g}):p[y]=g,d=(p,y)=>{for(var g in y||(y={}))s.call(y,g)&&v(p,g,y[g]);if(r)for(var g of r(y))u.call(y,g)&&v(p,g,y[g]);return p};const h=p=>o.createElement("svg",d({viewBox:"64 64 896 896"},p),o.createElement("path",{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}));var m="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTEyIDE5MGgtNjkuOWMtOS44IDAtMTkuMSA0LjUtMjUuMSAxMi4yTDQwNC43IDcyNC41IDIwNyA0NzRhMzIgMzIgMCAwIDAtMjUuMS0xMi4ySDExMmMtNi43IDAtMTAuNCA3LjctNi4zIDEyLjlsMjczLjkgMzQ3YzEyLjggMTYuMiAzNy40IDE2LjIgNTAuMyAwbDQ4OC40LTYxOC45YzQuMS01LjEuNC0xMi44LTYuMy0xMi44eiIvPjwvc3ZnPg=="},20057:function(c,l,e){"use strict";e.d(l,{F0:function(){return fe},Fg:function(){return je},Gn:function(){return p},TH:function(){return V},UO:function(){return ae},V$:function(){return Le},WU:function(){return Ce},fp:function(){return y},j3:function(){return Ye},oQ:function(){return T},pC:function(){return q},s0:function(){return P}});var o=e(55648),a=e(67294);const r=(0,a.createContext)(null),s=(0,a.createContext)(null),u=(0,a.createContext)({outlet:null,matches:[]});function v(se,ve){if(!se)throw new Error(ve)}function d(se,ve){if(!se){typeof console!="undefined"&&console.warn(ve);try{throw new Error(ve)}catch(ye){}}}const h={};function m(se,ve,ye){!ve&&!h[se]&&(h[se]=!0)}function p(se,ve){return ve===void 0&&(ve={}),se.replace(/:(\w+)/g,(ye,De)=>(ve[De]==null&&v(!1),ve[De])).replace(/\/*\*$/,ye=>ve["*"]==null?"":ve["*"].replace(/^\/*/,"/"))}function y(se,ve,ye){ye===void 0&&(ye="/");let De=typeof ve=="string"?(0,o.cP)(ve):ve,ze=Q(De.pathname||"/",ye);if(ze==null)return null;let bt=g(se);I(bt);let at=null;for(let lt=0;at==null&&lt<bt.length;++lt)at=Z(bt[lt],ze);return at}function g(se,ve,ye,De){return ve===void 0&&(ve=[]),ye===void 0&&(ye=[]),De===void 0&&(De=""),se.forEach((ze,bt)=>{let at={relativePath:ze.path||"",caseSensitive:ze.caseSensitive===!0,childrenIndex:bt,route:ze};at.relativePath.startsWith("/")&&(at.relativePath.startsWith(De)||v(!1),at.relativePath=at.relativePath.slice(De.length));let lt=Y([De,at.relativePath]),St=ye.concat(at);ze.children&&ze.children.length>0&&(ze.index===!0&&v(!1),g(ze.children,ve,St,lt)),!(ze.path==null&&!ze.index)&&ve.push({path:lt,score:C(lt,ze.index),routesMeta:St})}),ve}function I(se){se.sort((ve,ye)=>ve.score!==ye.score?ye.score-ve.score:L(ve.routesMeta.map(De=>De.childrenIndex),ye.routesMeta.map(De=>De.childrenIndex)))}const b=/^:\w+$/,E=3,R=2,A=1,N=10,w=-2,B=se=>se==="*";function C(se,ve){let ye=se.split("/"),De=ye.length;return ye.some(B)&&(De+=w),ve&&(De+=R),ye.filter(ze=>!B(ze)).reduce((ze,bt)=>ze+(b.test(bt)?E:bt===""?A:N),De)}function L(se,ve){return se.length===ve.length&&se.slice(0,-1).every((De,ze)=>De===ve[ze])?se[se.length-1]-ve[ve.length-1]:0}function Z(se,ve){let{routesMeta:ye}=se,De={},ze="/",bt=[];for(let at=0;at<ye.length;++at){let lt=ye[at],St=at===ye.length-1,Bt=ze==="/"?ve:ve.slice(ze.length)||"/",Ot=te({path:lt.relativePath,caseSensitive:lt.caseSensitive,end:St},Bt);if(!Ot)return null;Object.assign(De,Ot.params);let Wt=lt.route;bt.push({params:De,pathname:Y([ze,Ot.pathname]),pathnameBase:k(Y([ze,Ot.pathnameBase])),route:Wt}),Ot.pathnameBase!=="/"&&(ze=Y([ze,Ot.pathnameBase]))}return bt}function te(se,ve){typeof se=="string"&&(se={path:se,caseSensitive:!1,end:!0});let[ye,De]=ee(se.path,se.caseSensitive,se.end),ze=ve.match(ye);if(!ze)return null;let bt=ze[0],at=bt.replace(/(.)\/+$/,"$1"),lt=ze.slice(1);return{params:De.reduce((Bt,Ot,Wt)=>{if(Ot==="*"){let x=lt[Wt]||"";at=bt.slice(0,bt.length-x.length).replace(/(.)\/+$/,"$1")}return Bt[Ot]=_(lt[Wt]||"",Ot),Bt},{}),pathname:bt,pathnameBase:at,pattern:se}}function ee(se,ve,ye){ve===void 0&&(ve=!1),ye===void 0&&(ye=!0);let De=[],ze="^"+se.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(at,lt)=>(De.push(lt),"([^\\/]+)"));return se.endsWith("*")?(De.push("*"),ze+=se==="*"||se==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):ze+=ye?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(ze,ve?void 0:"i"),De]}function _(se,ve){try{return decodeURIComponent(se)}catch(ye){return se}}function de(se,ve){ve===void 0&&(ve="/");let{pathname:ye,search:De="",hash:ze=""}=typeof se=="string"?(0,o.cP)(se):se;return{pathname:ye?ye.startsWith("/")?ye:be(ye,ve):ve,search:K(De),hash:re(ze)}}function be(se,ve){let ye=ve.replace(/\/+$/,"").split("/");return se.split("/").forEach(ze=>{ze===".."?ye.length>1&&ye.pop():ze!=="."&&ye.push(ze)}),ye.length>1?ye.join("/"):"/"}function Te(se,ve,ye){let De=typeof se=="string"?(0,o.cP)(se):se,ze=se===""||De.pathname===""?"/":De.pathname,bt;if(ze==null)bt=ye;else{let lt=ve.length-1;if(ze.startsWith("..")){let St=ze.split("/");for(;St[0]==="..";)St.shift(),lt-=1;De.pathname=St.join("/")}bt=lt>=0?ve[lt]:"/"}let at=de(De,bt);return ze&&ze!=="/"&&ze.endsWith("/")&&!at.pathname.endsWith("/")&&(at.pathname+="/"),at}function ie(se){return se===""||se.pathname===""?"/":typeof se=="string"?(0,o.cP)(se).pathname:se.pathname}function Q(se,ve){if(ve==="/")return se;if(!se.toLowerCase().startsWith(ve.toLowerCase()))return null;let ye=se.charAt(ve.length);return ye&&ye!=="/"?null:se.slice(ve.length)||"/"}const Y=se=>se.join("/").replace(/\/\/+/g,"/"),k=se=>se.replace(/\/+$/,"").replace(/^\/*/,"/"),K=se=>!se||se==="?"?"":se.startsWith("?")?se:"?"+se,re=se=>!se||se==="#"?"":se.startsWith("#")?se:"#"+se;function T(se){D()||v(!1);let{basename:ve,navigator:ye}=(0,a.useContext)(r),{hash:De,pathname:ze,search:bt}=Ce(se),at=ze;if(ve!=="/"){let lt=ie(se),St=lt!=null&&lt.endsWith("/");at=ze==="/"?ve+(St?"/":""):Y([ve,ze])}return ye.createHref({pathname:at,search:bt,hash:De})}function D(){return(0,a.useContext)(s)!=null}function V(){return D()||v(!1),(0,a.useContext)(s).location}function le(){return useContext(s).navigationType}function J(se){D()||v(!1);let{pathname:ve}=V();return useMemo(()=>te(se,ve),[ve,se])}function P(){D()||v(!1);let{basename:se,navigator:ve}=(0,a.useContext)(r),{matches:ye}=(0,a.useContext)(u),{pathname:De}=V(),ze=JSON.stringify(ye.map(lt=>lt.pathnameBase)),bt=(0,a.useRef)(!1);return(0,a.useEffect)(()=>{bt.current=!0}),(0,a.useCallback)(function(lt,St){if(St===void 0&&(St={}),!bt.current)return;if(typeof lt=="number"){ve.go(lt);return}let Bt=Te(lt,JSON.parse(ze),De);se!=="/"&&(Bt.pathname=Y([se,Bt.pathname])),(St.replace?ve.replace:ve.push)(Bt,St.state)},[se,ve,ze,De])}const $=(0,a.createContext)(null);function H(){return useContext($)}function q(se){let ve=(0,a.useContext)(u).outlet;return ve&&(0,a.createElement)($.Provider,{value:se},ve)}function ae(){let{matches:se}=(0,a.useContext)(u),ve=se[se.length-1];return ve?ve.params:{}}function Ce(se){let{matches:ve}=(0,a.useContext)(u),{pathname:ye}=V(),De=JSON.stringify(ve.map(ze=>ze.pathnameBase));return(0,a.useMemo)(()=>Te(se,JSON.parse(De),ye),[se,De,ye])}function Le(se,ve){D()||v(!1);let{matches:ye}=(0,a.useContext)(u),De=ye[ye.length-1],ze=De?De.params:{},bt=De?De.pathname:"/",at=De?De.pathnameBase:"/",lt=De&&De.route,St=V(),Bt;if(ve){var Ot;let ne=typeof ve=="string"?(0,o.cP)(ve):ve;at==="/"||(Ot=ne.pathname)!=null&&Ot.startsWith(at)||v(!1),Bt=ne}else Bt=St;let Wt=Bt.pathname||"/",x=at==="/"?Wt:Wt.slice(at.length)||"/",U=y(se,{pathname:x});return Xe(U&&U.map(ne=>Object.assign({},ne,{params:Object.assign({},ze,ne.params),pathname:Y([at,ne.pathname]),pathnameBase:ne.pathnameBase==="/"?at:Y([at,ne.pathnameBase])})),ye)}function Xe(se,ve){return ve===void 0&&(ve=[]),se==null?null:se.reduceRight((ye,De,ze)=>(0,a.createElement)(u.Provider,{children:De.route.element!==void 0?De.route.element:ye,value:{outlet:ye,matches:ve.concat(se.slice(0,ze+1))}}),null)}function Ze(se){let{basename:ve,children:ye,initialEntries:De,initialIndex:ze}=se,bt=useRef();bt.current==null&&(bt.current=createMemoryHistory({initialEntries:De,initialIndex:ze}));let at=bt.current,[lt,St]=useState({action:at.action,location:at.location});return useLayoutEffect(()=>at.listen(St),[at]),createElement(fe,{basename:ve,children:ye,location:lt.location,navigationType:lt.action,navigator:at})}function je(se){let{to:ve,replace:ye,state:De}=se;D()||v(!1);let ze=P();return(0,a.useEffect)(()=>{ze(ve,{replace:ye,state:De})}),null}function Ye(se){return q(se.context)}function oe(se){v(!1)}function fe(se){let{basename:ve="/",children:ye=null,location:De,navigationType:ze=o.aU.Pop,navigator:bt,static:at=!1}=se;D()&&v(!1);let lt=k(ve),St=(0,a.useMemo)(()=>({basename:lt,navigator:bt,static:at}),[lt,bt,at]);typeof De=="string"&&(De=(0,o.cP)(De));let{pathname:Bt="/",search:Ot="",hash:Wt="",state:x=null,key:U="default"}=De,ne=(0,a.useMemo)(()=>{let ue=Q(Bt,lt);return ue==null?null:{pathname:ue,search:Ot,hash:Wt,state:x,key:U}},[lt,Bt,Ot,Wt,x,U]);return ne==null?null:(0,a.createElement)(r.Provider,{value:St},(0,a.createElement)(s.Provider,{children:ye,value:{location:ne,navigationType:ze}}))}function pe(se){let{children:ve,location:ye}=se;return Le(me(ve),ye)}function me(se){let ve=[];return Children.forEach(se,ye=>{if(!isValidElement(ye))return;if(ye.type===Fragment){ve.push.apply(ve,me(ye.props.children));return}ye.type!==oe&&v(!1);let De={caseSensitive:ye.props.caseSensitive,element:ye.props.element,index:ye.props.index,path:ye.props.path};ye.props.children&&(De.children=me(ye.props.children)),ve.push(De)}),ve}function Pe(se){return Xe(se)}},34162:function(c,l,e){"use strict";e.d(l,{Il:function(){return r},Ov:function(){return s}});var o=e(67294),a=null,r=o.createContext({});function s(){return o.useContext(r)}function u(){var m=useLocation(),p=s(),y=p.clientRoutes,g=matchRoutes(y,m.pathname);return g||[]}function v(){var m,p=u().slice(-1),y=((m=p[0])===null||m===void 0?void 0:m.route)||{},g=y.element,I=_objectWithoutProperties(y,a);return I}function d(){var m=useRouteData(),p=s();return{data:p.serverLoaderData[m.route.id]}}function h(){var m=useRouteData(),p=s();return{data:p.clientLoaderData[m.route.id]}}},59918:function(c,l,e){"use strict";e.d(l,{Q:function(){return r},X:function(){return a}});var o=e(67294),a=o.createContext(void 0);function r(){return o.useContext(a)}},94184:function(c,l){var e,o;(function(){"use strict";var a={}.hasOwnProperty,r="[native code]";function s(){for(var u=[],v=0;v<arguments.length;v++){var d=arguments[v];if(d){var h=typeof d;if(h==="string"||h==="number")u.push(d);else if(Array.isArray(d)){if(d.length){var m=s.apply(null,d);m&&u.push(m)}}else if(h==="object"){if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]")){u.push(d.toString());continue}for(var p in d)a.call(d,p)&&d[p]&&u.push(p)}}}return u.join(" ")}c.exports?(s.default=s,c.exports=s):(e=[],o=function(){return s}.apply(l,e),o!==void 0&&(c.exports=o))})()},19661:function(c,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.getParameters=void 0;var o=e(26961);function a(s){return o.compressToBase64(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function r(s){return a(JSON.stringify(s))}l.getParameters=r},12662:function(c,l,e){"use strict";var o;o=!0,l.Z=void 0;var a=e(19661);l.Z=a.getParameters},20640:function(c,l,e){"use strict";var o=e(11742),a={"text/plain":"Text","text/html":"Url",default:"Text"},r="Copy to clipboard: #{key}, Enter";function s(v){var d=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return v.replace(/#{\s*key\s*}/g,d)}function u(v,d){var h,m,p,y,g,I,b=!1;d||(d={}),h=d.debug||!1;try{p=o(),y=document.createRange(),g=document.getSelection(),I=document.createElement("span"),I.textContent=v,I.ariaHidden="true",I.style.all="unset",I.style.position="fixed",I.style.top=0,I.style.clip="rect(0, 0, 0, 0)",I.style.whiteSpace="pre",I.style.webkitUserSelect="text",I.style.MozUserSelect="text",I.style.msUserSelect="text",I.style.userSelect="text",I.addEventListener("copy",function(R){if(R.stopPropagation(),d.format)if(R.preventDefault(),typeof R.clipboardData=="undefined"){h&&console.warn("unable to use e.clipboardData"),h&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var A=a[d.format]||a.default;window.clipboardData.setData(A,v)}else R.clipboardData.clearData(),R.clipboardData.setData(d.format,v);d.onCopy&&(R.preventDefault(),d.onCopy(R.clipboardData))}),document.body.appendChild(I),y.selectNodeContents(I),g.addRange(y);var E=document.execCommand("copy");if(!E)throw new Error("copy command was unsuccessful");b=!0}catch(R){h&&console.error("unable to copy using execCommand: ",R),h&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(d.format||"text",v),d.onCopy&&d.onCopy(window.clipboardData),b=!0}catch(A){h&&console.error("unable to copy using clipboardData: ",A),h&&console.error("falling back to prompt"),m=s("message"in d?d.message:r),window.prompt(m,v)}}finally{g&&(typeof g.removeRange=="function"?g.removeRange(y):g.removeAllRanges()),I&&document.body.removeChild(I),p()}return b}c.exports=u},19662:function(c,l,e){var o=e(60614),a=e(66330),r=TypeError;c.exports=function(s){if(o(s))return s;throw r(a(s)+" is not a function")}},39483:function(c,l,e){var o=e(4411),a=e(66330),r=TypeError;c.exports=function(s){if(o(s))return s;throw r(a(s)+" is not a constructor")}},40027:function(c,l,e){var o=e(75706).has;c.exports=function(a){return o(a),a}},96077:function(c,l,e){var o=e(60614),a=String,r=TypeError;c.exports=function(s){if(typeof s=="object"||o(s))return s;throw r("Can't set "+a(s)+" as a prototype")}},88999:function(c,l,e){var o=e(79405).has;c.exports=function(a){return o(a),a}},29257:function(c,l,e){var o=e(60953).has;c.exports=function(a){return o(a),a}},72682:function(c,l,e){var o=e(78818).has;c.exports=function(a){return o(a),a}},8557:function(c,l,e){var o=e(1702),a=e(49974),r=e(19670),s=e(68554),u=e(58173),v=e(5112),d=v("asyncDispose"),h=v("dispose"),m=o([].push),p=function(g,I){return I=="async-dispose"&&u(g,d)||u(g,h)},y=function(g,I,b){return a(b||p(g,I),g)};c.exports=function(g,I,b,E){var R;if(E)s(I)?R=y(void 0,b,E):R=y(r(I),b,E);else{if(s(I))return;R=y(I,b)}m(g.stack,R)}},51223:function(c,l,e){var o=e(5112),a=e(70030),r=e(3070).f,s=o("unscopables"),u=Array.prototype;u[s]==null&&r(u,s,{configurable:!0,value:a(null)}),c.exports=function(v){u[s][v]=!0}},25787:function(c,l,e){var o=e(47976),a=TypeError;c.exports=function(r,s){if(o(s,r))return r;throw a("Incorrect invocation")}},19670:function(c,l,e){var o=e(70111),a=String,r=TypeError;c.exports=function(s){if(o(s))return s;throw r(a(s)+" is not an object")}},23013:function(c){c.exports=typeof ArrayBuffer!="undefined"&&typeof DataView!="undefined"},38321:function(c,l,e){var o=e(75668),a=e(84326),r=TypeError;c.exports=o(ArrayBuffer.prototype,"byteLength","get")||function(s){if(a(s)!="ArrayBuffer")throw r("ArrayBuffer expected");return s.byteLength}},58199:function(c,l,e){var o=e(1702),a=e(38321),r=o(ArrayBuffer.prototype.slice);c.exports=function(s){if(a(s)!==0)return!1;try{return r(s,0,0),!1}catch(u){return!0}}},7556:function(c,l,e){var o=e(47293);c.exports=o(function(){if(typeof ArrayBuffer=="function"){var a=new ArrayBuffer(8);Object.isExtensible(a)&&Object.defineProperty(a,"a",{value:8})}})},58846:function(c,l,e){var o=e(17854),a=e(1702),r=e(75668),s=e(57067),u=e(58199),v=e(38321),d=e(64124),h=o.TypeError,m=o.structuredClone,p=o.ArrayBuffer,y=o.DataView,g=Math.min,I=p.prototype,b=y.prototype,E=a(I.slice),R=r(I,"resizable","get"),A=r(I,"maxByteLength","get"),N=a(b.getInt8),w=a(b.setInt8);c.exports=d&&function(B,C,L){var Z=v(B),te=C===void 0?Z:g(s(C),Z),ee=!R||!R(B);if(u(B))throw h("ArrayBuffer is detached");var _=m(B,{transfer:[B]});if(Z==te&&(L||ee))return _;if(!L||ee)return E(_,0,te);for(var de=new p(te,A&&{maxByteLength:A(_)}),be=new y(_),Te=new y(de),ie=0;ie<te;ie++)w(Te,ie,N(be,ie));return de}},90260:function(c,l,e){"use strict";var o=e(23013),a=e(19781),r=e(17854),s=e(60614),u=e(70111),v=e(92597),d=e(70648),h=e(66330),m=e(68880),p=e(98052),y=e(47045),g=e(47976),I=e(79518),b=e(27674),E=e(5112),R=e(69711),A=e(29909),N=A.enforce,w=A.get,B=r.Int8Array,C=B&&B.prototype,L=r.Uint8ClampedArray,Z=L&&L.prototype,te=B&&I(B),ee=C&&I(C),_=Object.prototype,de=r.TypeError,be=E("toStringTag"),Te=R("TYPED_ARRAY_TAG"),ie="TypedArrayConstructor",Q=o&&!!b&&d(r.opera)!=="Opera",Y=!1,k,K,re,T={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},D={BigInt64Array:8,BigUint64Array:8},V=function(Ce){if(!u(Ce))return!1;var Le=d(Ce);return Le==="DataView"||v(T,Le)||v(D,Le)},le=function(ae){var Ce=I(ae);if(u(Ce)){var Le=w(Ce);return Le&&v(Le,ie)?Le[ie]:le(Ce)}},J=function(ae){if(!u(ae))return!1;var Ce=d(ae);return v(T,Ce)||v(D,Ce)},P=function(ae){if(J(ae))return ae;throw de("Target is not a typed array")},$=function(ae){if(s(ae)&&(!b||g(te,ae)))return ae;throw de(h(ae)+" is not a typed array constructor")},H=function(ae,Ce,Le,Xe){if(a){if(Le)for(var Ze in T){var je=r[Ze];if(je&&v(je.prototype,ae))try{delete je.prototype[ae]}catch(Ye){try{je.prototype[ae]=Ce}catch(oe){}}}(!ee[ae]||Le)&&p(ee,ae,Le?Ce:Q&&C[ae]||Ce,Xe)}},q=function(ae,Ce,Le){var Xe,Ze;if(a){if(b){if(Le){for(Xe in T)if(Ze=r[Xe],Ze&&v(Ze,ae))try{delete Ze[ae]}catch(je){}}if(!te[ae]||Le)try{return p(te,ae,Le?Ce:Q&&te[ae]||Ce)}catch(je){}else return}for(Xe in T)Ze=r[Xe],Ze&&(!Ze[ae]||Le)&&p(Ze,ae,Ce)}};for(k in T)K=r[k],re=K&&K.prototype,re?N(re)[ie]=K:Q=!1;for(k in D)K=r[k],re=K&&K.prototype,re&&(N(re)[ie]=K);if((!Q||!s(te)||te===Function.prototype)&&(te=function(){throw de("Incorrect invocation")},Q))for(k in T)r[k]&&b(r[k],te);if((!Q||!ee||ee===_)&&(ee=te.prototype,Q))for(k in T)r[k]&&b(r[k].prototype,ee);if(Q&&I(Z)!==ee&&b(Z,ee),a&&!v(ee,be)){Y=!0,y(ee,be,{configurable:!0,get:function(){return u(this)?this[Te]:void 0}});for(k in T)r[k]&&m(r[k],Te,k)}c.exports={NATIVE_ARRAY_BUFFER_VIEWS:Q,TYPED_ARRAY_TAG:Y&&Te,aTypedArray:P,aTypedArrayConstructor:$,exportTypedArrayMethod:H,exportTypedArrayStaticMethod:q,getTypedArrayConstructor:le,isView:V,isTypedArray:J,TypedArray:te,TypedArrayPrototype:ee}},33253:function(c,l,e){"use strict";var o=e(49974),a=e(1702),r=e(47908),s=e(4411),u=e(54777),v=e(18554),d=e(24942),h=e(71246),m=e(58173),p=e(98770),y=e(35005),g=e(5112),I=e(28091),b=e(12269).toArray,E=g("asyncIterator"),R=a(p("Array").values),A=a(R([]).next),N=function(){return new w(this)},w=function(B){this.iterator=R(B)};w.prototype.next=function(){return A(this.iterator)},c.exports=function(C){var L=this,Z=arguments.length,te=Z>1?arguments[1]:void 0,ee=Z>2?arguments[2]:void 0;return new(y("Promise"))(function(_){var de=r(C);te!==void 0&&(te=o(te,ee));var be=m(de,E),Te=be?void 0:h(de)||N,ie=s(L)?new L:[],Q=be?u(de,be):new I(d(v(de,Te)));_(b(Q,te,ie))})}},97745:function(c,l,e){var o=e(26244);c.exports=function(a,r){for(var s=0,u=o(r),v=new a(u);u>s;)v[s]=r[s++];return v}},59921:function(c,l,e){"use strict";var o=e(49974),a=e(1702),r=e(68361),s=e(47908),u=e(26244),v=e(75706),d=v.Map,h=v.get,m=v.has,p=v.set,y=a([].push);c.exports=function(I){for(var b=s(this),E=r(b),R=o(I,arguments.length>1?arguments[1]:void 0),A=new d,N=u(E),w=0,B,C;N>w;w++)C=E[w],B=R(C,w,b),m(A,B)?y(h(A,B),C):p(A,B,[C]);return A}},21191:function(c,l,e){var o=e(49974),a=e(1702),r=e(68361),s=e(47908),u=e(34948),v=e(26244),d=e(70030),h=e(97745),m=Array,p=a([].push);c.exports=function(y,g,I,b){for(var E=s(y),R=r(E),A=o(g,I),N=d(null),w=v(R),B=0,C,L,Z;w>B;B++)Z=R[B],L=u(A(Z,B,E)),L in N?p(N[L],Z):N[L]=[Z];if(b&&(C=b(E),C!==m))for(L in N)N[L]=h(C,N[L]);return N}},41318:function(c,l,e){var o=e(45656),a=e(51400),r=e(26244),s=function(u){return function(v,d,h){var m=o(v),p=r(m),y=a(h,p),g;if(u&&d!=d){for(;p>y;)if(g=m[y++],g!=g)return!0}else for(;p>y;y++)if((u||y in m)&&m[y]===d)return u||y||0;return!u&&-1}};c.exports={includes:s(!0),indexOf:s(!1)}},9671:function(c,l,e){var o=e(49974),a=e(68361),r=e(47908),s=e(26244),u=function(v){var d=v==1;return function(h,m,p){for(var y=r(h),g=a(y),I=o(m,p),b=s(g),E,R;b-- >0;)if(E=g[b],R=I(E,b,y),R)switch(v){case 0:return E;case 1:return b}return d?-1:void 0}};c.exports={findLast:u(0),findLastIndex:u(1)}},42092:function(c,l,e){var o=e(49974),a=e(1702),r=e(68361),s=e(47908),u=e(26244),v=e(65417),d=a([].push),h=function(m){var p=m==1,y=m==2,g=m==3,I=m==4,b=m==6,E=m==7,R=m==5||b;return function(A,N,w,B){for(var C=s(A),L=r(C),Z=o(N,w),te=u(L),ee=0,_=B||v,de=p?_(A,te):y||E?_(A,0):void 0,be,Te;te>ee;ee++)if((R||ee in L)&&(be=L[ee],Te=Z(be,ee,C),m))if(p)de[ee]=Te;else if(Te)switch(m){case 3:return!0;case 5:return be;case 6:return ee;case 2:d(de,be)}else switch(m){case 4:return!1;case 7:d(de,be)}return b?-1:g||I?I:de}};c.exports={forEach:h(0),map:h(1),filter:h(2),some:h(3),every:h(4),find:h(5),findIndex:h(6),filterReject:h(7)}},9341:function(c,l,e){"use strict";var o=e(47293);c.exports=function(a,r){var s=[][a];return!!s&&o(function(){s.call(null,r||function(){return 1},1)})}},53671:function(c,l,e){var o=e(19662),a=e(47908),r=e(68361),s=e(26244),u=TypeError,v=function(d){return function(h,m,p,y){o(m);var g=a(h),I=r(g),b=s(g),E=d?b-1:0,R=d?-1:1;if(p<2)for(;;){if(E in I){y=I[E],E+=R;break}if(E+=R,d?E<0:b<=E)throw u("Reduce of empty array with no initial value")}for(;d?E>=0:b>E;E+=R)E in I&&(y=m(y,I[E],E,g));return y}};c.exports={left:v(!1),right:v(!0)}},83658:function(c,l,e){"use strict";var o=e(19781),a=e(43157),r=TypeError,s=Object.getOwnPropertyDescriptor,u=o&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(v){return v instanceof TypeError}}();c.exports=u?function(v,d){if(a(v)&&!s(v,"length").writable)throw r("Cannot set read only .length");return v.length=d}:function(v,d){return v.length=d}},41589:function(c,l,e){var o=e(51400),a=e(26244),r=e(86135),s=Array,u=Math.max;c.exports=function(v,d,h){for(var m=a(v),p=o(d,m),y=o(h===void 0?m:h,m),g=s(u(y-p,0)),I=0;p<y;p++,I++)r(g,I,v[p]);return g.length=I,g}},50206:function(c,l,e){var o=e(1702);c.exports=o([].slice)},77475:function(c,l,e){var o=e(43157),a=e(4411),r=e(70111),s=e(5112),u=s("species"),v=Array;c.exports=function(d){var h;return o(d)&&(h=d.constructor,a(h)&&(h===v||o(h.prototype))?h=void 0:r(h)&&(h=h[u],h===null&&(h=void 0))),h===void 0?v:h}},65417:function(c,l,e){var o=e(77475);c.exports=function(a,r){return new(o(a))(r===0?0:r)}},21843:function(c,l,e){var o=e(26244);c.exports=function(a,r){for(var s=o(a),u=new r(s),v=0;v<s;v++)u[v]=a[s-v-1];return u}},60956:function(c,l,e){"use strict";var o=e(1702),a=e(19662),r=e(68554),s=e(26244),u=e(47908),v=e(75706),d=e(14995),h=v.Map,m=v.has,p=v.set,y=o([].push);c.exports=function(I){var b=u(this),E=s(b),R=[],A=new h,N=r(I)?function(L){return L}:a(I),w,B,C;for(w=0;w<E;w++)B=b[w],C=N(B),m(A,C)||p(A,C,B);return d(A,function(L){y(R,L)}),R}},11572:function(c,l,e){var o=e(26244),a=e(19303),r=RangeError;c.exports=function(s,u,v,d){var h=o(s),m=a(v),p=m<0?h+m:m;if(p>=h||p<0)throw r("Incorrect index");for(var y=new u(h),g=0;g<h;g++)y[g]=g===p?d:s[g];return y}},28091:function(c,l,e){"use strict";var o=e(46916),a=e(19670),r=e(70030),s=e(58173),u=e(89190),v=e(29909),d=e(35005),h=e(66462),m=e(76178),p=d("Promise"),y="AsyncFromSyncIterator",g=v.set,I=v.getterFor(y),b=function(R,A,N){var w=R.done;p.resolve(R.value).then(function(B){A(m(B,w))},N)},E=function(A){A.type=y,g(this,A)};E.prototype=u(r(h),{next:function(){var A=I(this);return new p(function(N,w){var B=a(o(A.next,A.iterator));b(B,N,w)})},return:function(){var R=I(this).iterator;return new p(function(A,N){var w=s(R,"return");if(w===void 0)return A(m(void 0,!0));var B=a(o(w,R));b(B,A,N)})}}),c.exports=E},21753:function(c,l,e){var o=e(46916),a=e(35005),r=e(58173);c.exports=function(s,u,v,d){try{var h=r(s,"return");if(h)return a("Promise").resolve(o(h,s)).then(function(){u(v)},function(m){d(m)})}catch(m){return d(m)}u(v)}},45348:function(c,l,e){"use strict";var o=e(46916),a=e(12534),r=e(19670),s=e(70030),u=e(68880),v=e(89190),d=e(5112),h=e(29909),m=e(35005),p=e(58173),y=e(66462),g=e(76178),I=e(99212),b=m("Promise"),E=d("toStringTag"),R="AsyncIteratorHelper",A="WrapForValidAsyncIterator",N=h.set,w=function(L){var Z=!L,te=h.getterFor(L?A:R),ee=function(_){var de=a(function(){return te(_)}),be=de.error,Te=de.value;return be||Z&&Te.done?{exit:!0,value:be?b.reject(Te):b.resolve(g(void 0,!0))}:{exit:!1,value:Te}};return v(s(y),{next:function(){var de=ee(this),be=de.value;if(de.exit)return be;var Te=a(function(){return r(be.nextHandler(b))}),ie=Te.error,Q=Te.value;return ie&&(be.done=!0),ie?b.reject(Q):b.resolve(Q)},return:function(){var _=ee(this),de=_.value;if(_.exit)return de;de.done=!0;var be=de.iterator,Te,ie,Q=a(function(){if(de.inner)try{I(de.inner.iterator,"normal")}catch(Y){return I(be,"throw",Y)}return p(be,"return")});return Te=ie=Q.value,Q.error?b.reject(ie):Te===void 0?b.resolve(g(void 0,!0)):(Q=a(function(){return o(Te,be)}),ie=Q.value,Q.error?b.reject(ie):L?b.resolve(ie):b.resolve(ie).then(function(Y){return r(Y),g(void 0,!0)}))}})},B=w(!0),C=w(!1);u(C,E,"Async Iterator Helper"),c.exports=function(L,Z){var te=function(_,de){de?(de.iterator=_.iterator,de.next=_.next):de=_,de.type=Z?A:R,de.nextHandler=L,de.counter=0,de.done=!1,N(this,de)};return te.prototype=Z?B:C,te}},47520:function(c,l,e){"use strict";var o=e(46916),a=e(13232),r=function(s,u){return[u,s]};c.exports=function(){return o(a,this,r)}},12269:function(c,l,e){"use strict";var o=e(46916),a=e(19662),r=e(19670),s=e(70111),u=e(7207),v=e(35005),d=e(24942),h=e(21753),m=function(p){var y=p==0,g=p==1,I=p==2,b=p==3;return function(E,R,A){var N=d(E),w=v("Promise"),B=N.iterator,C=N.next,L=0,Z=R!==void 0;return(Z||!y)&&a(R),new w(function(te,ee){var _=function(be){h(B,ee,be,ee)},de=function(){try{if(Z)try{u(L)}catch(be){_(be)}w.resolve(r(o(C,B))).then(function(be){try{if(r(be).done)y?(A.length=L,te(A)):te(b?!1:I||void 0);else{var Te=be.value;try{if(Z){var ie=R(Te,L),Q=function(Y){if(g)de();else if(I)Y?de():h(B,te,!1,ee);else if(y)try{A[L++]=Y,de()}catch(k){_(k)}else Y?h(B,te,b||Te,ee):de()};s(ie)?w.resolve(ie).then(Q,_):Q(ie)}else A[L++]=Te,de()}catch(Y){_(Y)}}}catch(Y){ee(Y)}},ee)}catch(be){ee(be)}};de()})}};c.exports={toArray:m(0),forEach:m(1),every:m(2),some:m(3),find:m(4)}},13232:function(c,l,e){"use strict";var o=e(46916),a=e(19662),r=e(19670),s=e(70111),u=e(24942),v=e(45348),d=e(76178),h=e(21753),m=v(function(p){var y=this,g=y.iterator,I=y.mapper;return new p(function(b,E){var R=function(N){y.done=!0,E(N)},A=function(N){h(g,R,N,R)};p.resolve(r(o(y.next,g))).then(function(N){try{if(r(N).done)y.done=!0,b(d(void 0,!0));else{var w=N.value;try{var B=I(w,y.counter++),C=function(L){b(d(L,!1))};s(B)?p.resolve(B).then(C,A):C(B)}catch(L){A(L)}}}catch(L){R(L)}},R)})});c.exports=function(y){return new m(u(this),{mapper:a(y)})}},66462:function(c,l,e){var o=e(17854),a=e(5465),r=e(60614),s=e(70030),u=e(79518),v=e(98052),d=e(5112),h=e(31913),m="USE_FUNCTION_CONSTRUCTOR",p=d("asyncIterator"),y=o.AsyncIterator,g=a.AsyncIteratorPrototype,I,b;if(g)I=g;else if(r(y))I=y.prototype;else if(a[m]||o[m])try{b=u(u(u(Function("return async function*(){}()")()))),u(b)===Object.prototype&&(I=b)}catch(E){}I?h&&(I=s(I)):I={},r(I[p])||v(I,p,function(){return this}),c.exports=I},86221:function(c,l,e){var o=e(46916),a=e(45348);c.exports=a(function(){return o(this.next,this.iterator)},!0)},53411:function(c,l,e){var o=e(19670),a=e(99212);c.exports=function(r,s,u,v){try{return v?s(o(u)[0],u[1]):s(u)}catch(d){a(r,"throw",d)}}},17072:function(c,l,e){var o=e(5112),a=o("iterator"),r=!1;try{var s=0,u={next:function(){return{done:!!s++}},return:function(){r=!0}};u[a]=function(){return this},Array.from(u,function(){throw 2})}catch(v){}c.exports=function(v,d){if(!d&&!r)return!1;var h=!1;try{var m={};m[a]=function(){return{next:function(){return{done:h=!0}}}},v(m)}catch(p){}return h}},84326:function(c,l,e){var o=e(1702),a=o({}.toString),r=o("".slice);c.exports=function(s){return r(a(s),8,-1)}},70648:function(c,l,e){var o=e(51694),a=e(60614),r=e(84326),s=e(5112),u=s("toStringTag"),v=Object,d=r(function(){return arguments}())=="Arguments",h=function(m,p){try{return m[p]}catch(y){}};c.exports=o?r:function(m){var p,y,g;return m===void 0?"Undefined":m===null?"Null":typeof(y=h(p=v(m),u))=="string"?y:d?r(p):(g=r(p))=="Object"&&a(p.callee)?"Arguments":g}},27296:function(c,l,e){"use strict";var o=e(49974),a=e(46916),r=e(19662),s=e(39483),u=e(68554),v=e(20408),d=[].push;c.exports=function(m){var p=arguments.length,y=p>1?arguments[1]:void 0,g,I,b,E;return s(this),g=y!==void 0,g&&r(y),u(m)?new this:(I=[],g?(b=0,E=o(y,p>2?arguments[2]:void 0),v(m,function(R){a(d,I,E(R,b++))})):v(m,d,{that:I}),new this(I))}},82044:function(c,l,e){"use strict";var o=e(50206);c.exports=function(){return new this(o(arguments))}},95631:function(c,l,e){"use strict";var o=e(70030),a=e(47045),r=e(89190),s=e(49974),u=e(25787),v=e(68554),d=e(20408),h=e(51656),m=e(76178),p=e(96340),y=e(19781),g=e(62423).fastKey,I=e(29909),b=I.set,E=I.getterFor;c.exports={getConstructor:function(R,A,N,w){var B=R(function(ee,_){u(ee,C),b(ee,{type:A,index:o(null),first:void 0,last:void 0,size:0}),y||(ee.size=0),v(_)||d(_,ee[w],{that:ee,AS_ENTRIES:N})}),C=B.prototype,L=E(A),Z=function(ee,_,de){var be=L(ee),Te=te(ee,_),ie,Q;return Te?Te.value=de:(be.last=Te={index:Q=g(_,!0),key:_,value:de,previous:ie=be.last,next:void 0,removed:!1},be.first||(be.first=Te),ie&&(ie.next=Te),y?be.size++:ee.size++,Q!=="F"&&(be.index[Q]=Te)),ee},te=function(ee,_){var de=L(ee),be=g(_),Te;if(be!=="F")return de.index[be];for(Te=de.first;Te;Te=Te.next)if(Te.key==_)return Te};return r(C,{clear:function(){for(var _=this,de=L(_),be=de.index,Te=de.first;Te;)Te.removed=!0,Te.previous&&(Te.previous=Te.previous.next=void 0),delete be[Te.index],Te=Te.next;de.first=de.last=void 0,y?de.size=0:_.size=0},delete:function(ee){var _=this,de=L(_),be=te(_,ee);if(be){var Te=be.next,ie=be.previous;delete de.index[be.index],be.removed=!0,ie&&(ie.next=Te),Te&&(Te.previous=ie),de.first==be&&(de.first=Te),de.last==be&&(de.last=ie),y?de.size--:_.size--}return!!be},forEach:function(_){for(var de=L(this),be=s(_,arguments.length>1?arguments[1]:void 0),Te;Te=Te?Te.next:de.first;)for(be(Te.value,Te.key,this);Te&&Te.removed;)Te=Te.previous},has:function(_){return!!te(this,_)}}),r(C,N?{get:function(_){var de=te(this,_);return de&&de.value},set:function(_,de){return Z(this,_===0?0:_,de)}}:{add:function(_){return Z(this,_=_===0?0:_,_)}}),y&&a(C,"size",{configurable:!0,get:function(){return L(this).size}}),B},setStrong:function(R,A,N){var w=A+" Iterator",B=E(A),C=E(w);h(R,A,function(L,Z){b(this,{type:w,target:L,state:B(L),kind:Z,last:void 0})},function(){for(var L=C(this),Z=L.kind,te=L.last;te&&te.removed;)te=te.previous;return!L.target||!(L.last=te=te?te.next:L.state.first)?(L.target=void 0,m(void 0,!0)):Z=="keys"?m(te.key,!1):Z=="values"?m(te.value,!1):m([te.key,te.value],!1)},N?"entries":"values",!N,!0),p(A)}}},29320:function(c,l,e){"use strict";var o=e(1702),a=e(89190),r=e(62423).getWeakData,s=e(25787),u=e(19670),v=e(68554),d=e(70111),h=e(20408),m=e(42092),p=e(92597),y=e(29909),g=y.set,I=y.getterFor,b=m.find,E=m.findIndex,R=o([].splice),A=0,N=function(C){return C.frozen||(C.frozen=new w)},w=function(){this.entries=[]},B=function(C,L){return b(C.entries,function(Z){return Z[0]===L})};w.prototype={get:function(C){var L=B(this,C);if(L)return L[1]},has:function(C){return!!B(this,C)},set:function(C,L){var Z=B(this,C);Z?Z[1]=L:this.entries.push([C,L])},delete:function(C){var L=E(this.entries,function(Z){return Z[0]===C});return~L&&R(this.entries,L,1),!!~L}},c.exports={getConstructor:function(C,L,Z,te){var ee=C(function(Te,ie){s(Te,_),g(Te,{type:L,id:A++,frozen:void 0}),v(ie)||h(ie,Te[te],{that:Te,AS_ENTRIES:Z})}),_=ee.prototype,de=I(L),be=function(Te,ie,Q){var Y=de(Te),k=r(u(ie),!0);return k===!0?N(Y).set(ie,Q):k[Y.id]=Q,Te};return a(_,{delete:function(Te){var ie=de(this);if(!d(Te))return!1;var Q=r(Te);return Q===!0?N(ie).delete(Te):Q&&p(Q,ie.id)&&delete Q[ie.id]},has:function(ie){var Q=de(this);if(!d(ie))return!1;var Y=r(ie);return Y===!0?N(Q).has(ie):Y&&p(Y,Q.id)}}),a(_,Z?{get:function(ie){var Q=de(this);if(d(ie)){var Y=r(ie);return Y===!0?N(Q).get(ie):Y?Y[Q.id]:void 0}},set:function(ie,Q){return be(this,ie,Q)}}:{add:function(ie){return be(this,ie,!0)}}),ee}}},77710:function(c,l,e){"use strict";var o=e(82109),a=e(17854),r=e(1702),s=e(54705),u=e(98052),v=e(62423),d=e(20408),h=e(25787),m=e(60614),p=e(68554),y=e(70111),g=e(47293),I=e(17072),b=e(58003),E=e(79587);c.exports=function(R,A,N){var w=R.indexOf("Map")!==-1,B=R.indexOf("Weak")!==-1,C=w?"set":"add",L=a[R],Z=L&&L.prototype,te=L,ee={},_=function(k){var K=r(Z[k]);u(Z,k,k=="add"?function(T){return K(this,T===0?0:T),this}:k=="delete"?function(re){return B&&!y(re)?!1:K(this,re===0?0:re)}:k=="get"?function(T){return B&&!y(T)?void 0:K(this,T===0?0:T)}:k=="has"?function(T){return B&&!y(T)?!1:K(this,T===0?0:T)}:function(T,D){return K(this,T===0?0:T,D),this})},de=s(R,!m(L)||!(B||Z.forEach&&!g(function(){new L().entries().next()})));if(de)te=N.getConstructor(A,R,w,C),v.enable();else if(s(R,!0)){var be=new te,Te=be[C](B?{}:-0,1)!=be,ie=g(function(){be.has(1)}),Q=I(function(k){new L(k)}),Y=!B&&g(function(){for(var k=new L,K=5;K--;)k[C](K,K);return!k.has(-0)});Q||(te=A(function(k,K){h(k,Z);var re=E(new L,k,te);return p(K)||d(K,re[C],{that:re,AS_ENTRIES:w}),re}),te.prototype=Z,Z.constructor=te),(ie||Y)&&(_("delete"),_("has"),w&&_("get")),(Y||Te)&&_(C),B&&Z.clear&&delete Z.clear}return ee[R]=te,o({global:!0,constructor:!0,forced:te!=L},ee),b(te,R),B||N.setStrong(te,R,w),te}},10313:function(c,l,e){e(51532),e(4129);var o=e(35005),a=e(70030),r=e(70111),s=Object,u=TypeError,v=o("Map"),d=o("WeakMap"),h=function(){this.object=null,this.symbol=null,this.primitives=null,this.objectsByIndex=a(null)};h.prototype.get=function(p,y){return this[p]||(this[p]=y())},h.prototype.next=function(p,y,g){var I=g?this.objectsByIndex[p]||(this.objectsByIndex[p]=new d):this.primitives||(this.primitives=new v),b=I.get(y);return b||I.set(y,b=new h),b};var m=new h;c.exports=function(){var p=m,y=arguments.length,g,I;for(g=0;g<y;g++)r(I=arguments[g])&&(p=p.next(g,I,!0));if(this===s&&p===m)throw u("Composite keys must contain a non-primitive component");for(g=0;g<y;g++)r(I=arguments[g])||(p=p.next(g,I,!1));return p}},99920:function(c,l,e){var o=e(92597),a=e(53887),r=e(31236),s=e(3070);c.exports=function(u,v,d){for(var h=a(v),m=s.f,p=r.f,y=0;y<h.length;y++){var g=h[y];!o(u,g)&&!(d&&o(d,g))&&m(u,g,p(v,g))}}},49920:function(c,l,e){var o=e(47293);c.exports=!o(function(){function a(){}return a.prototype.constructor=null,Object.getPrototypeOf(new a)!==a.prototype})},76178:function(c){c.exports=function(l,e){return{value:l,done:e}}},68880:function(c,l,e){var o=e(19781),a=e(3070),r=e(79114);c.exports=o?function(s,u,v){return a.f(s,u,r(1,v))}:function(s,u,v){return s[u]=v,s}},79114:function(c){c.exports=function(l,e){return{enumerable:!(l&1),configurable:!(l&2),writable:!(l&4),value:e}}},86135:function(c,l,e){"use strict";var o=e(34948),a=e(3070),r=e(79114);c.exports=function(s,u,v){var d=o(u);d in s?a.f(s,d,r(0,v)):s[d]=v}},47045:function(c,l,e){var o=e(56339),a=e(3070);c.exports=function(r,s,u){return u.get&&o(u.get,s,{getter:!0}),u.set&&o(u.set,s,{setter:!0}),a.f(r,s,u)}},98052:function(c,l,e){var o=e(60614),a=e(3070),r=e(56339),s=e(13072);c.exports=function(u,v,d,h){h||(h={});var m=h.enumerable,p=h.name!==void 0?h.name:v;if(o(d)&&r(d,p,h),h.global)m?u[v]=d:s(v,d);else{try{h.unsafe?u[v]&&(m=!0):delete u[v]}catch(y){}m?u[v]=d:a.f(u,v,{value:d,enumerable:!1,configurable:!h.nonConfigurable,writable:!h.nonWritable})}return u}},89190:function(c,l,e){var o=e(98052);c.exports=function(a,r,s){for(var u in r)o(a,u,r[u],s);return a}},13072:function(c,l,e){var o=e(17854),a=Object.defineProperty;c.exports=function(r,s){try{a(o,r,{value:s,configurable:!0,writable:!0})}catch(u){o[r]=s}return s}},19781:function(c,l,e){var o=e(47293);c.exports=!o(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},4154:function(c){var l=typeof document=="object"&&document.all,e=typeof l=="undefined"&&l!==void 0;c.exports={all:l,IS_HTMLDDA:e}},80317:function(c,l,e){var o=e(17854),a=e(70111),r=o.document,s=a(r)&&a(r.createElement);c.exports=function(u){return s?r.createElement(u):{}}},7207:function(c){var l=TypeError,e=9007199254740991;c.exports=function(o){if(o>e)throw l("Maximum allowed index exceeded");return o}},93678:function(c){c.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},7871:function(c,l,e){var o=e(83823),a=e(35268);c.exports=!o&&!a&&typeof window=="object"&&typeof document=="object"},89363:function(c){c.exports=typeof Bun=="function"&&Bun&&typeof Bun.version=="string"},83823:function(c){c.exports=typeof Deno=="object"&&Deno&&typeof Deno.version=="object"},6833:function(c,l,e){var o=e(88113);c.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(o)},35268:function(c,l,e){var o=e(34155),a=e(84326);c.exports=typeof o!="undefined"&&a(o)=="process"},88113:function(c){c.exports=typeof navigator!="undefined"&&String(navigator.userAgent)||""},7392:function(c,l,e){var o=e(17854),a=e(88113),r=o.process,s=o.Deno,u=r&&r.versions||s&&s.version,v=u&&u.v8,d,h;v&&(d=v.split("."),h=d[0]>0&&d[0]<4?1:+(d[0]+d[1])),!h&&a&&(d=a.match(/Edge\/(\d+)/),(!d||d[1]>=74)&&(d=a.match(/Chrome\/(\d+)/),d&&(h=+d[1]))),c.exports=h},98770:function(c,l,e){var o=e(17854);c.exports=function(a){return o[a].prototype}},80748:function(c){c.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},11060:function(c,l,e){var o=e(1702),a=Error,r=o("".replace),s=function(d){return String(a(d).stack)}("zxcasd"),u=/\n\s*at [^:]*:[^\n]*/,v=u.test(s);c.exports=function(d,h){if(v&&typeof d=="string"&&!a.prepareStackTrace)for(;h--;)d=r(d,u,"");return d}},5392:function(c,l,e){var o=e(68880),a=e(11060),r=e(22914),s=Error.captureStackTrace;c.exports=function(u,v,d,h){r&&(s?s(u,v):o(u,"stack",a(d,h)))}},22914:function(c,l,e){var o=e(47293),a=e(79114);c.exports=!o(function(){var r=Error("a");return"stack"in r?(Object.defineProperty(r,"stack",a(1,7)),r.stack!==7):!0})},82109:function(c,l,e){var o=e(17854),a=e(31236).f,r=e(68880),s=e(98052),u=e(13072),v=e(99920),d=e(54705);c.exports=function(h,m){var p=h.target,y=h.global,g=h.stat,I,b,E,R,A,N;if(y?b=o:g?b=o[p]||u(p,{}):b=(o[p]||{}).prototype,b)for(E in m){if(A=m[E],h.dontCallGetSet?(N=a(b,E),R=N&&N.value):R=b[E],I=d(y?E:p+(g?".":"#")+E,h.forced),!I&&R!==void 0){if(typeof A==typeof R)continue;v(A,R)}(h.sham||R&&R.sham)&&r(A,"sham",!0),s(b,E,A,h)}}},47293:function(c){c.exports=function(l){try{return!!l()}catch(e){return!0}}},76677:function(c,l,e){var o=e(47293);c.exports=!o(function(){return Object.isExtensible(Object.preventExtensions({}))})},22104:function(c,l,e){var o=e(34374),a=Function.prototype,r=a.apply,s=a.call;c.exports=typeof Reflect=="object"&&Reflect.apply||(o?s.bind(r):function(){return s.apply(r,arguments)})},49974:function(c,l,e){var o=e(21470),a=e(19662),r=e(34374),s=o(o.bind);c.exports=function(u,v){return a(u),v===void 0?u:r?s(u,v):function(){return u.apply(v,arguments)}}},34374:function(c,l,e){var o=e(47293);c.exports=!o(function(){var a=function(){}.bind();return typeof a!="function"||a.hasOwnProperty("prototype")})},46916:function(c,l,e){var o=e(34374),a=Function.prototype.call;c.exports=o?a.bind(a):function(){return a.apply(a,arguments)}},55040:function(c,l,e){"use strict";var o=e(1702),a=e(19662);c.exports=function(){return o(a(this))}},76530:function(c,l,e){var o=e(19781),a=e(92597),r=Function.prototype,s=o&&Object.getOwnPropertyDescriptor,u=a(r,"name"),v=u&&function(){}.name==="something",d=u&&(!o||o&&s(r,"name").configurable);c.exports={EXISTS:u,PROPER:v,CONFIGURABLE:d}},75668:function(c,l,e){var o=e(1702),a=e(19662);c.exports=function(r,s,u){try{return o(a(Object.getOwnPropertyDescriptor(r,s)[u]))}catch(v){}}},21470:function(c,l,e){var o=e(84326),a=e(1702);c.exports=function(r){if(o(r)==="Function")return a(r)}},1702:function(c,l,e){var o=e(34374),a=Function.prototype,r=a.call,s=o&&a.bind.bind(r,r);c.exports=o?s:function(u){return function(){return r.apply(u,arguments)}}},62617:function(c,l,e){var o=e(46916),a=e(60614),r=e(19670),s=e(24942),u=e(71246),v=e(58173),d=e(5112),h=e(28091),m=d("asyncIterator");c.exports=function(y){var g=r(y),I=!0,b=v(g,m),E;return a(b)||(b=u(g),I=!1),a(b)?E=o(b,g):(E=g,I=!0),r(E),s(I?E:new h(s(E)))}},54777:function(c,l,e){var o=e(46916),a=e(28091),r=e(19670),s=e(18554),u=e(24942),v=e(58173),d=e(5112),h=d("asyncIterator");c.exports=function(m,p){var y=arguments.length<2?v(m,h):p;return y?r(o(y,m)):new a(u(s(m)))}},35005:function(c,l,e){var o=e(17854),a=e(60614),r=function(s){return a(s)?s:void 0};c.exports=function(s,u){return arguments.length<2?r(o[s]):o[s]&&o[s][u]}},24942:function(c,l,e){var o=e(19662),a=e(19670);c.exports=function(r){return{iterator:r,next:o(a(r).next)}}},72897:function(c,l,e){var o=e(46916),a=e(60614),r=e(19670),s=e(24942),u=e(71246);c.exports=function(v){var d=r(v),h=u(d);return s(r(a(h)?o(h,d):d))}},71246:function(c,l,e){var o=e(70648),a=e(58173),r=e(68554),s=e(97497),u=e(5112),v=u("iterator");c.exports=function(d){if(!r(d))return a(d,v)||a(d,"@@iterator")||s[o(d)]}},18554:function(c,l,e){var o=e(46916),a=e(19662),r=e(19670),s=e(66330),u=e(71246),v=TypeError;c.exports=function(d,h){var m=arguments.length<2?u(d):h;if(a(m))return r(o(m,d));throw v(s(d)+" is not iterable")}},88044:function(c,l,e){var o=e(1702),a=e(43157),r=e(60614),s=e(84326),u=e(41340),v=o([].push);c.exports=function(d){if(r(d))return d;if(a(d)){for(var h=d.length,m=[],p=0;p<h;p++){var y=d[p];typeof y=="string"?v(m,y):(typeof y=="number"||s(y)=="Number"||s(y)=="String")&&v(m,u(y))}var g=m.length,I=!0;return function(b,E){if(I)return I=!1,E;if(a(this))return E;for(var R=0;R<g;R++)if(m[R]===b)return E}}}},58173:function(c,l,e){var o=e(19662),a=e(68554);c.exports=function(r,s){var u=r[s];return a(u)?void 0:o(u)}},738:function(c,l,e){var o=e(19662),a=e(19670),r=e(46916),s=e(19303),u=TypeError,v=Math.max,d=function(h,m,p,y){this.set=h,this.size=m,this.has=p,this.keys=y};d.prototype={getIterator:function(){return a(r(this.keys,this.set))},includes:function(h){return r(this.has,this.set,h)}},c.exports=function(h){a(h);var m=+h.size;if(m!=m)throw u("Invalid size");return new d(h,v(s(m),0),o(h.has),o(h.keys))}},10647:function(c,l,e){var o=e(1702),a=e(47908),r=Math.floor,s=o("".charAt),u=o("".replace),v=o("".slice),d=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,h=/\$([$&'`]|\d{1,2})/g;c.exports=function(m,p,y,g,I,b){var E=y+m.length,R=g.length,A=h;return I!==void 0&&(I=a(I),A=d),u(b,A,function(N,w){var B;switch(s(w,0)){case"$":return"$";case"&":return m;case"`":return v(p,0,y);case"'":return v(p,E);case"<":B=I[v(w,1,-1)];break;default:var C=+w;if(C===0)return N;if(C>R){var L=r(C/10);return L===0?N:L<=R?g[L-1]===void 0?s(w,1):g[L-1]+s(w,1):N}B=g[C-1]}return B===void 0?"":B})}},17854:function(c,l,e){var o=function(a){return a&&a.Math==Math&&a};c.exports=o(typeof globalThis=="object"&&globalThis)||o(typeof window=="object"&&window)||o(typeof self=="object"&&self)||o(typeof e.g=="object"&&e.g)||function(){return this}()||Function("return this")()},92597:function(c,l,e){var o=e(1702),a=e(47908),r=o({}.hasOwnProperty);c.exports=Object.hasOwn||function(u,v){return r(a(u),v)}},3501:function(c){c.exports={}},842:function(c){c.exports=function(l,e){try{arguments.length==1?console.error(l):console.error(l,e)}catch(o){}}},60490:function(c,l,e){var o=e(35005);c.exports=o("document","documentElement")},64664:function(c,l,e){var o=e(19781),a=e(47293),r=e(80317);c.exports=!o&&!a(function(){return Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a!=7})},68361:function(c,l,e){var o=e(1702),a=e(47293),r=e(84326),s=Object,u=o("".split);c.exports=a(function(){return!s("z").propertyIsEnumerable(0)})?function(v){return r(v)=="String"?u(v,""):s(v)}:s},79587:function(c,l,e){var o=e(60614),a=e(70111),r=e(27674);c.exports=function(s,u,v){var d,h;return r&&o(d=u.constructor)&&d!==v&&a(h=d.prototype)&&h!==v.prototype&&r(s,h),s}},42788:function(c,l,e){var o=e(1702),a=e(60614),r=e(5465),s=o(Function.toString);a(r.inspectSource)||(r.inspectSource=function(u){return s(u)}),c.exports=r.inspectSource},58340:function(c,l,e){var o=e(70111),a=e(68880);c.exports=function(r,s){o(s)&&"cause"in s&&a(r,"cause",s.cause)}},62423:function(c,l,e){var o=e(82109),a=e(1702),r=e(3501),s=e(70111),u=e(92597),v=e(3070).f,d=e(8006),h=e(1156),m=e(52050),p=e(69711),y=e(76677),g=!1,I=p("meta"),b=0,E=function(C){v(C,I,{value:{objectID:"O"+b++,weakData:{}}})},R=function(C,L){if(!s(C))return typeof C=="symbol"?C:(typeof C=="string"?"S":"P")+C;if(!u(C,I)){if(!m(C))return"F";if(!L)return"E";E(C)}return C[I].objectID},A=function(C,L){if(!u(C,I)){if(!m(C))return!0;if(!L)return!1;E(C)}return C[I].weakData},N=function(C){return y&&g&&m(C)&&!u(C,I)&&E(C),C},w=function(){B.enable=function(){},g=!0;var C=d.f,L=a([].splice),Z={};Z[I]=1,C(Z).length&&(d.f=function(te){for(var ee=C(te),_=0,de=ee.length;_<de;_++)if(ee[_]===I){L(ee,_,1);break}return ee},o({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:h.f}))},B=c.exports={enable:w,fastKey:R,getWeakData:A,onFreeze:N};r[I]=!0},29909:function(c,l,e){var o=e(94811),a=e(17854),r=e(70111),s=e(68880),u=e(92597),v=e(5465),d=e(6200),h=e(3501),m="Object already initialized",p=a.TypeError,y=a.WeakMap,g,I,b,E=function(w){return b(w)?I(w):g(w,{})},R=function(w){return function(B){var C;if(!r(B)||(C=I(B)).type!==w)throw p("Incompatible receiver, "+w+" required");return C}};if(o||v.state){var A=v.state||(v.state=new y);A.get=A.get,A.has=A.has,A.set=A.set,g=function(w,B){if(A.has(w))throw p(m);return B.facade=w,A.set(w,B),B},I=function(w){return A.get(w)||{}},b=function(w){return A.has(w)}}else{var N=d("state");h[N]=!0,g=function(w,B){if(u(w,N))throw p(m);return B.facade=w,s(w,N,B),B},I=function(w){return u(w,N)?w[N]:{}},b=function(w){return u(w,N)}}c.exports={set:g,get:I,has:b,enforce:E,getterFor:R}},97659:function(c,l,e){var o=e(5112),a=e(97497),r=o("iterator"),s=Array.prototype;c.exports=function(u){return u!==void 0&&(a.Array===u||s[r]===u)}},43157:function(c,l,e){var o=e(84326);c.exports=Array.isArray||function(r){return o(r)=="Array"}},44067:function(c,l,e){var o=e(70648);c.exports=function(a){var r=o(a);return r=="BigInt64Array"||r=="BigUint64Array"}},60614:function(c,l,e){var o=e(4154),a=o.all;c.exports=o.IS_HTMLDDA?function(r){return typeof r=="function"||r===a}:function(r){return typeof r=="function"}},4411:function(c,l,e){var o=e(1702),a=e(47293),r=e(60614),s=e(70648),u=e(35005),v=e(42788),d=function(){},h=[],m=u("Reflect","construct"),p=/^\s*(?:class|function)\b/,y=o(p.exec),g=!p.exec(d),I=function(R){if(!r(R))return!1;try{return m(d,h,R),!0}catch(A){return!1}},b=function(R){if(!r(R))return!1;switch(s(R)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return g||!!y(p,v(R))}catch(A){return!0}};b.sham=!0,c.exports=!m||a(function(){var E;return I(I.call)||!I(Object)||!I(function(){E=!0})||E})?b:I},54705:function(c,l,e){var o=e(47293),a=e(60614),r=/#|\.prototype\./,s=function(m,p){var y=v[u(m)];return y==h?!0:y==d?!1:a(p)?o(p):!!p},u=s.normalize=function(m){return String(m).replace(r,".").toLowerCase()},v=s.data={},d=s.NATIVE="N",h=s.POLYFILL="P";c.exports=s},25615:function(c,l,e){var o=e(70648),a=e(92597),r=e(68554),s=e(5112),u=e(97497),v=s("iterator"),d=Object;c.exports=function(h){if(r(h))return!1;var m=d(h);return m[v]!==void 0||"@@iterator"in m||a(u,o(m))}},68554:function(c){c.exports=function(l){return l==null}},70111:function(c,l,e){var o=e(60614),a=e(4154),r=a.all;c.exports=a.IS_HTMLDDA?function(s){return typeof s=="object"?s!==null:o(s)||s===r}:function(s){return typeof s=="object"?s!==null:o(s)}},31913:function(c){c.exports=!1},73633:function(c,l,e){var o=e(70111),a=e(29909).get;c.exports=function(s){if(!o(s))return!1;var u=a(s);return!!u&&u.type==="RawJSON"}},47850:function(c,l,e){var o=e(70111),a=e(84326),r=e(5112),s=r("match");c.exports=function(u){var v;return o(u)&&((v=u[s])!==void 0?!!v:a(u)=="RegExp")}},52190:function(c,l,e){var o=e(35005),a=e(60614),r=e(47976),s=e(43307),u=Object;c.exports=s?function(v){return typeof v=="symbol"}:function(v){var d=o("Symbol");return a(d)&&r(d.prototype,u(v))}},6333:function(c,l,e){var o=e(46916);c.exports=function(a,r,s){for(var u=s||a.next,v,d;!(v=o(u,a)).done;)if(d=r(v.value),d!==void 0)return d}},20408:function(c,l,e){var o=e(49974),a=e(46916),r=e(19670),s=e(66330),u=e(97659),v=e(26244),d=e(47976),h=e(18554),m=e(71246),p=e(99212),y=TypeError,g=function(b,E){this.stopped=b,this.result=E},I=g.prototype;c.exports=function(b,E,R){var A=R&&R.that,N=!!(R&&R.AS_ENTRIES),w=!!(R&&R.IS_RECORD),B=!!(R&&R.IS_ITERATOR),C=!!(R&&R.INTERRUPTED),L=o(E,A),Z,te,ee,_,de,be,Te,ie=function(Y){return Z&&p(Z,"normal",Y),new g(!0,Y)},Q=function(Y){return N?(r(Y),C?L(Y[0],Y[1],ie):L(Y[0],Y[1])):C?L(Y,ie):L(Y)};if(w)Z=b.iterator;else if(B)Z=b;else{if(te=m(b),!te)throw y(s(b)+" is not iterable");if(u(te)){for(ee=0,_=v(b);_>ee;ee++)if(de=Q(b[ee]),de&&d(I,de))return de;return new g(!1)}Z=h(b,te)}for(be=w?b.next:Z.next;!(Te=a(be,Z)).done;){try{de=Q(Te.value)}catch(Y){p(Z,"throw",Y)}if(typeof de=="object"&&de&&d(I,de))return de}return new g(!1)}},99212:function(c,l,e){var o=e(46916),a=e(19670),r=e(58173);c.exports=function(s,u,v){var d,h;a(s);try{if(d=r(s,"return"),!d){if(u==="throw")throw v;return v}d=o(d,s)}catch(m){h=!0,d=m}if(u==="throw")throw v;if(h)throw d;return a(d),v}},63061:function(c,l,e){"use strict";var o=e(13383).IteratorPrototype,a=e(70030),r=e(79114),s=e(58003),u=e(97497),v=function(){return this};c.exports=function(d,h,m,p){var y=h+" Iterator";return d.prototype=a(o,{next:r(+!p,m)}),s(d,y,!1,!0),u[y]=v,d}},54956:function(c,l,e){"use strict";var o=e(46916),a=e(70030),r=e(68880),s=e(89190),u=e(5112),v=e(29909),d=e(58173),h=e(13383).IteratorPrototype,m=e(76178),p=e(99212),y=u("toStringTag"),g="IteratorHelper",I="WrapForValidIterator",b=v.set,E=function(N){var w=v.getterFor(N?I:g);return s(a(h),{next:function(){var C=w(this);if(N)return C.nextHandler();try{var L=C.done?void 0:C.nextHandler();return m(L,C.done)}catch(Z){throw C.done=!0,Z}},return:function(){var B=w(this),C=B.iterator;if(B.done=!0,N){var L=d(C,"return");return L?o(L,C):m(void 0,!0)}if(B.inner)try{p(B.inner.iterator,"normal")}catch(Z){return p(C,"throw",Z)}return p(C,"normal"),m(void 0,!0)}})},R=E(!0),A=E(!1);r(A,y,"Iterator Helper"),c.exports=function(N,w){var B=function(L,Z){Z?(Z.iterator=L.iterator,Z.next=L.next):Z=L,Z.type=w?I:g,Z.nextHandler=N,Z.counter=0,Z.done=!1,b(this,Z)};return B.prototype=w?R:A,B}},51656:function(c,l,e){"use strict";var o=e(82109),a=e(46916),r=e(31913),s=e(76530),u=e(60614),v=e(63061),d=e(79518),h=e(27674),m=e(58003),p=e(68880),y=e(98052),g=e(5112),I=e(97497),b=e(13383),E=s.PROPER,R=s.CONFIGURABLE,A=b.IteratorPrototype,N=b.BUGGY_SAFARI_ITERATORS,w=g("iterator"),B="keys",C="values",L="entries",Z=function(){return this};c.exports=function(te,ee,_,de,be,Te,ie){v(_,ee,de);var Q=function(P){if(P===be&&T)return T;if(!N&&P in K)return K[P];switch(P){case B:return function(){return new _(this,P)};case C:return function(){return new _(this,P)};case L:return function(){return new _(this,P)}}return function(){return new _(this)}},Y=ee+" Iterator",k=!1,K=te.prototype,re=K[w]||K["@@iterator"]||be&&K[be],T=!N&&re||Q(be),D=ee=="Array"&&K.entries||re,V,le,J;if(D&&(V=d(D.call(new te)),V!==Object.prototype&&V.next&&(!r&&d(V)!==A&&(h?h(V,A):u(V[w])||y(V,w,Z)),m(V,Y,!0,!0),r&&(I[Y]=Z))),E&&be==C&&re&&re.name!==C&&(!r&&R?p(K,"name",C):(k=!0,T=function(){return a(re,this)})),be)if(le={values:Q(C),keys:Te?T:Q(B),entries:Q(L)},ie)for(J in le)(N||k||!(J in K))&&y(K,J,le[J]);else o({target:ee,proto:!0,forced:N||k},le);return(!r||ie)&&K[w]!==T&&y(K,w,T,{name:be}),I[ee]=T,le}},14323:function(c,l,e){"use strict";var o=e(46916),a=e(20487),r=function(s,u){return[u,s]};c.exports=function(){return o(a,this,r)}},20487:function(c,l,e){"use strict";var o=e(46916),a=e(19662),r=e(19670),s=e(24942),u=e(54956),v=e(53411),d=u(function(){var h=this.iterator,m=r(o(this.next,h)),p=this.done=!!m.done;if(!p)return v(h,this.mapper,[m.value,this.counter++],!0)});c.exports=function(m){return new d(s(this),{mapper:a(m)})}},13383:function(c,l,e){"use strict";var o=e(47293),a=e(60614),r=e(70111),s=e(70030),u=e(79518),v=e(98052),d=e(5112),h=e(31913),m=d("iterator"),p=!1,y,g,I;[].keys&&(I=[].keys(),"next"in I?(g=u(u(I)),g!==Object.prototype&&(y=g)):p=!0);var b=!r(y)||o(function(){var E={};return y[m].call(E)!==E});b?y={}:h&&(y=s(y)),a(y[m])||v(y,m,function(){return this}),c.exports={IteratorPrototype:y,BUGGY_SAFARI_ITERATORS:p}},97497:function(c){c.exports={}},26244:function(c,l,e){var o=e(17466);c.exports=function(a){return o(a.length)}},56339:function(c,l,e){var o=e(1702),a=e(47293),r=e(60614),s=e(92597),u=e(19781),v=e(76530).CONFIGURABLE,d=e(42788),h=e(29909),m=h.enforce,p=h.get,y=String,g=Object.defineProperty,I=o("".slice),b=o("".replace),E=o([].join),R=u&&!a(function(){return g(function(){},"length",{value:8}).length!==8}),A=String(String).split("String"),N=c.exports=function(w,B,C){I(y(B),0,7)==="Symbol("&&(B="["+b(y(B),/^Symbol\(([^)]*)\)/,"$1")+"]"),C&&C.getter&&(B="get "+B),C&&C.setter&&(B="set "+B),(!s(w,"name")||v&&w.name!==B)&&(u?g(w,"name",{value:B,configurable:!0}):w.name=B),R&&C&&s(C,"arity")&&w.length!==C.arity&&g(w,"length",{value:C.arity});try{C&&s(C,"constructor")&&C.constructor?u&&g(w,"prototype",{writable:!1}):w.prototype&&(w.prototype=void 0)}catch(Z){}var L=m(w);return s(L,"source")||(L.source=E(A,typeof B=="string"?B:"")),w};Function.prototype.toString=N(function(){return r(this)&&p(this).source||d(this)},"toString")},75706:function(c,l,e){var o=e(1702),a=Map.prototype;c.exports={Map,set:o(a.set),get:o(a.get),has:o(a.has),remove:o(a.delete),proto:a}},14995:function(c,l,e){var o=e(1702),a=e(6333),r=e(75706),s=r.Map,u=r.proto,v=o(u.forEach),d=o(u.entries),h=d(new s).next;c.exports=function(m,p,y){return y?a(d(m),function(g){return p(g[1],g[0])},h):v(m,p)}},8154:function(c,l,e){"use strict";var o=e(46916),a=e(19662),r=e(60614),s=e(19670),u=TypeError;c.exports=function(d,h){var m=s(this),p=a(m.get),y=a(m.has),g=a(m.set),I=arguments.length>2?arguments[2]:void 0,b;if(!r(h)&&!r(I))throw u("At least one callback required");return o(y,m,d)?(b=o(p,m,d),r(h)&&(b=h(b),o(g,m,d,b))):r(I)&&(b=I(),o(g,m,d,b)),b}},26130:function(c,l,e){var o=e(64310),a=Math.abs,r=Math.pow,s=r(2,-52),u=r(2,-23),v=r(2,127)*(2-u),d=r(2,-126),h=function(m){return m+1/s-1/s};c.exports=Math.fround||function(p){var y=+p,g=a(y),I=o(y),b,E;return g<d?I*h(g/d/u)*d*u:(b=(1+u/s)*g,E=b-(b-g),E>v||E!=E?I*(1/0):I*E)}},47103:function(c){c.exports=Math.scale||function(e,o,a,r,s){var u=+e,v=+o,d=+a,h=+r,m=+s;return u!=u||v!=v||d!=d||h!=h||m!=m?NaN:u===1/0||u===-1/0?u:(u-v)*(m-h)/(d-v)+h}},64310:function(c){c.exports=Math.sign||function(e){var o=+e;return o==0||o!=o?o:o<0?-1:1}},74758:function(c){var l=Math.ceil,e=Math.floor;c.exports=Math.trunc||function(a){var r=+a;return(r>0?e:l)(r)}},80363:function(c,l,e){var o=e(47293);c.exports=!o(function(){var a="9007199254740993",r=JSON.rawJSON(a);return!JSON.isRawJSON(r)||JSON.stringify(r)!==a})},78523:function(c,l,e){"use strict";var o=e(19662),a=TypeError,r=function(s){var u,v;this.promise=new s(function(d,h){if(u!==void 0||v!==void 0)throw a("Bad Promise constructor");u=d,v=h}),this.resolve=o(u),this.reject=o(v)};c.exports.f=function(s){return new r(s)}},56277:function(c,l,e){var o=e(41340);c.exports=function(a,r){return a===void 0?arguments.length<2?"":r:o(a)}},66336:function(c){var l=RangeError;c.exports=function(e){if(e===e)return e;throw l("NaN is not allowed")}},77023:function(c,l,e){var o=e(17854),a=o.isFinite;c.exports=Number.isFinite||function(s){return typeof s=="number"&&a(s)}},83009:function(c,l,e){var o=e(17854),a=e(47293),r=e(1702),s=e(41340),u=e(53111).trim,v=e(81361),d=o.parseInt,h=o.Symbol,m=h&&h.iterator,p=/^[+-]?0x/i,y=r(p.exec),g=d(v+"08")!==8||d(v+"0x16")!==22||m&&!a(function(){d(Object(m))});c.exports=g?function(b,E){var R=u(s(b));return d(R,E>>>0||(y(p,R)?16:10))}:d},80430:function(c,l,e){"use strict";var o=e(29909),a=e(63061),r=e(76178),s=e(68554),u=e(70111),v=e(36048).f,d=e(19781),h="Incorrect Iterator.range arguments",m="NumericRangeIterator",p=o.set,y=o.getterFor(m),g=RangeError,I=TypeError,b=a(function(A,N,w,B,C,L){if(typeof A!=B||N!==1/0&&N!==-1/0&&typeof N!=B)throw I(h);if(A===1/0||A===-1/0)throw g(h);var Z=N>A,te=!1,ee;if(w===void 0)ee=void 0;else if(u(w))ee=w.step,te=!!w.inclusive;else if(typeof w==B)ee=w;else throw I(h);if(s(ee)&&(ee=Z?L:-L),typeof ee!=B)throw I(h);if(ee===1/0||ee===-1/0||ee===C&&A!==N)throw g(h);var _=A!=A||N!=N||ee!=ee||N>A!=ee>C;p(this,{type:m,start:A,end:N,step:ee,inclusiveEnd:te,hitsEnd:_,currentCount:C,zero:C}),d||(this.start=A,this.end=N,this.step=ee,this.inclusive=te)},m,function(){var A=y(this);if(A.hitsEnd)return r(void 0,!0);var N=A.start,w=A.end,B=A.step,C=N+B*A.currentCount++;C===w&&(A.hitsEnd=!0);var L=A.inclusiveEnd,Z;return w>N?Z=L?C>w:C>=w:Z=L?w>C:w>=C,Z?(A.hitsEnd=!0,r(void 0,!0)):r(C,!1)}),E=function(R){return{get:R,set:function(){},configurable:!0,enumerable:!1}};d&&v(b.prototype,{start:E(function(){return y(this).start}),end:E(function(){return y(this).end}),inclusive:E(function(){return y(this).inclusiveEnd}),step:E(function(){return y(this).step})}),c.exports=b},70030:function(c,l,e){var o=e(19670),a=e(36048),r=e(80748),s=e(3501),u=e(60490),v=e(80317),d=e(6200),h=">",m="<",p="prototype",y="script",g=d("IE_PROTO"),I=function(){},b=function(w){return m+y+h+w+m+"/"+y+h},E=function(w){w.write(b("")),w.close();var B=w.parentWindow.Object;return w=null,B},R=function(){var w=v("iframe"),B="java"+y+":",C;return w.style.display="none",u.appendChild(w),w.src=String(B),C=w.contentWindow.document,C.open(),C.write(b("document.F=Object")),C.close(),C.F},A,N=function(){try{A=new ActiveXObject("htmlfile")}catch(B){}N=typeof document!="undefined"?document.domain&&A?E(A):R():E(A);for(var w=r.length;w--;)delete N[p][r[w]];return N()};s[g]=!0,c.exports=Object.create||function(B,C){var L;return B!==null?(I[p]=o(B),L=new I,I[p]=null,L[g]=B):L=N(),C===void 0?L:a.f(L,C)}},36048:function(c,l,e){var o=e(19781),a=e(3353),r=e(3070),s=e(19670),u=e(45656),v=e(81956);l.f=o&&!a?Object.defineProperties:function(h,m){s(h);for(var p=u(m),y=v(m),g=y.length,I=0,b;g>I;)r.f(h,b=y[I++],p[b]);return h}},3070:function(c,l,e){var o=e(19781),a=e(64664),r=e(3353),s=e(19670),u=e(34948),v=TypeError,d=Object.defineProperty,h=Object.getOwnPropertyDescriptor,m="enumerable",p="configurable",y="writable";l.f=o?r?function(I,b,E){if(s(I),b=u(b),s(E),typeof I=="function"&&b==="prototype"&&"value"in E&&y in E&&!E[y]){var R=h(I,b);R&&R[y]&&(I[b]=E.value,E={configurable:p in E?E[p]:R[p],enumerable:m in E?E[m]:R[m],writable:!1})}return d(I,b,E)}:d:function(I,b,E){if(s(I),b=u(b),s(E),a)try{return d(I,b,E)}catch(R){}if("get"in E||"set"in E)throw v("Accessors not supported");return"value"in E&&(I[b]=E.value),I}},31236:function(c,l,e){var o=e(19781),a=e(46916),r=e(55296),s=e(79114),u=e(45656),v=e(34948),d=e(92597),h=e(64664),m=Object.getOwnPropertyDescriptor;l.f=o?m:function(y,g){if(y=u(y),g=v(g),h)try{return m(y,g)}catch(I){}if(d(y,g))return s(!a(r.f,y,g),y[g])}},1156:function(c,l,e){var o=e(84326),a=e(45656),r=e(8006).f,s=e(41589),u=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],v=function(d){try{return r(d)}catch(h){return s(u)}};c.exports.f=function(h){return u&&o(h)=="Window"?v(h):r(a(h))}},8006:function(c,l,e){var o=e(16324),a=e(80748),r=a.concat("length","prototype");l.f=Object.getOwnPropertyNames||function(u){return o(u,r)}},25181:function(c,l){l.f=Object.getOwnPropertySymbols},79518:function(c,l,e){var o=e(92597),a=e(60614),r=e(47908),s=e(6200),u=e(49920),v=s("IE_PROTO"),d=Object,h=d.prototype;c.exports=u?d.getPrototypeOf:function(m){var p=r(m);if(o(p,v))return p[v];var y=p.constructor;return a(y)&&p instanceof y?y.prototype:p instanceof d?h:null}},52050:function(c,l,e){var o=e(47293),a=e(70111),r=e(84326),s=e(7556),u=Object.isExtensible,v=o(function(){u(1)});c.exports=v||s?function(h){return!a(h)||s&&r(h)=="ArrayBuffer"?!1:u?u(h):!0}:u},47976:function(c,l,e){var o=e(1702);c.exports=o({}.isPrototypeOf)},60996:function(c,l,e){"use strict";var o=e(29909),a=e(63061),r=e(76178),s=e(92597),u=e(81956),v=e(47908),d="Object Iterator",h=o.set,m=o.getterFor(d);c.exports=a(function(y,g){var I=v(y);h(this,{type:d,mode:g,object:I,keys:u(I),index:0})},"Object",function(){for(var y=m(this),g=y.keys;;){if(g===null||y.index>=g.length)return y.object=y.keys=null,r(void 0,!0);var I=g[y.index++],b=y.object;if(s(b,I)){switch(y.mode){case"keys":return r(I,!1);case"values":return r(b[I],!1)}return r([I,b[I]],!1)}}})},16324:function(c,l,e){var o=e(1702),a=e(92597),r=e(45656),s=e(41318).indexOf,u=e(3501),v=o([].push);c.exports=function(d,h){var m=r(d),p=0,y=[],g;for(g in m)!a(u,g)&&a(m,g)&&v(y,g);for(;h.length>p;)a(m,g=h[p++])&&(~s(y,g)||v(y,g));return y}},81956:function(c,l,e){var o=e(16324),a=e(80748);c.exports=Object.keys||function(s){return o(s,a)}},55296:function(c,l){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,a=o&&!e.call({1:2},1);l.f=a?function(s){var u=o(this,s);return!!u&&u.enumerable}:e},27674:function(c,l,e){var o=e(75668),a=e(19670),r=e(96077);c.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var s=!1,u={},v;try{v=o(Object.prototype,"__proto__","set"),v(u,[]),s=u instanceof Array}catch(d){}return function(h,m){return a(h),r(m),s?v(h,m):h.__proto__=m,h}}():void 0)},90515:function(c,l,e){var o=e(17854),a=e(60614),r=e(5112),s=r("observable"),u=o.Observable,v=u&&u.prototype;c.exports=!a(u)||!a(u.from)||!a(u.of)||!a(v.subscribe)||!a(v[s])},92140:function(c,l,e){var o=e(46916),a=e(60614),r=e(70111),s=TypeError;c.exports=function(u,v){var d,h;if(v==="string"&&a(d=u.toString)&&!r(h=o(d,u))||a(d=u.valueOf)&&!r(h=o(d,u))||v!=="string"&&a(d=u.toString)&&!r(h=o(d,u)))return h;throw s("Can't convert object to primitive value")}},53887:function(c,l,e){var o=e(35005),a=e(1702),r=e(8006),s=e(25181),u=e(19670),v=a([].concat);c.exports=o("Reflect","ownKeys")||function(h){var m=r.f(u(h)),p=s.f;return p?v(m,p(h)):m}},18832:function(c,l,e){var o=e(1702),a=e(92597),r=SyntaxError,s=parseInt,u=String.fromCharCode,v=o("".charAt),d=o("".slice),h=o(/./.exec),m={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},p=/^[\da-f]{4}$/i,y=/^[\u0000-\u001F]$/;c.exports=function(g,I){for(var b=!0,E="";I<g.length;){var R=v(g,I);if(R=="\\"){var A=d(g,I,I+2);if(a(m,A))E+=m[A],I+=2;else if(A=="\\u"){I+=2;var N=d(g,I,I+4);if(!h(p,N))throw r("Bad Unicode escape at: "+I);E+=u(s(N,16)),I+=4}else throw r('Unknown escape sequence: "'+A+'"')}else if(R=='"'){b=!1,I++;break}else{if(h(y,R))throw r("Bad control character in string literal at: "+I);E+=R,I++}}if(b)throw r("Unterminated string at: "+I);return{value:E,end:I}}},40857:function(c,l,e){var o=e(17854);c.exports=o},12534:function(c){c.exports=function(l){try{return{error:!1,value:l()}}catch(e){return{error:!0,value:e}}}},63702:function(c,l,e){var o=e(17854),a=e(2492),r=e(60614),s=e(54705),u=e(42788),v=e(5112),d=e(7871),h=e(83823),m=e(31913),p=e(7392),y=a&&a.prototype,g=v("species"),I=!1,b=r(o.PromiseRejectionEvent),E=s("Promise",function(){var R=u(a),A=R!==String(a);if(!A&&p===66||m&&!(y.catch&&y.finally))return!0;if(!p||p<51||!/native code/.test(R)){var N=new a(function(C){C(1)}),w=function(C){C(function(){},function(){})},B=N.constructor={};if(B[g]=w,I=N.then(function(){})instanceof w,!I)return!0}return!A&&(d||h)&&!b});c.exports={CONSTRUCTOR:E,REJECTION_EVENT:b,SUBCLASSING:I}},2492:function(c,l,e){var o=e(17854);c.exports=o.Promise},80612:function(c,l,e){var o=e(2492),a=e(17072),r=e(63702).CONSTRUCTOR;c.exports=r||!a(function(s){o.all(s).then(void 0,function(){})})},2626:function(c,l,e){var o=e(3070).f;c.exports=function(a,r,s){s in a||o(a,s,{configurable:!0,get:function(){return r[s]},set:function(u){r[s]=u}})}},38845:function(c,l,e){e(51532),e(4129);var o=e(35005),a=e(1702),r=e(72309),s=o("Map"),u=o("WeakMap"),v=a([].push),d=r("metadata"),h=d.store||(d.store=new u),m=function(E,R,A){var N=h.get(E);if(!N){if(!A)return;h.set(E,N=new s)}var w=N.get(R);if(!w){if(!A)return;N.set(R,w=new s)}return w},p=function(E,R,A){var N=m(R,A,!1);return N===void 0?!1:N.has(E)},y=function(E,R,A){var N=m(R,A,!1);return N===void 0?void 0:N.get(E)},g=function(E,R,A,N){m(A,N,!0).set(E,R)},I=function(E,R){var A=m(E,R,!1),N=[];return A&&A.forEach(function(w,B){v(N,B)}),N},b=function(E){return E===void 0||typeof E=="symbol"?E:String(E)};c.exports={store:h,getMap:m,has:p,get:y,set:g,keys:I,toKey:b}},67066:function(c,l,e){"use strict";var o=e(19670);c.exports=function(){var a=o(this),r="";return a.hasIndices&&(r+="d"),a.global&&(r+="g"),a.ignoreCase&&(r+="i"),a.multiline&&(r+="m"),a.dotAll&&(r+="s"),a.unicode&&(r+="u"),a.unicodeSets&&(r+="v"),a.sticky&&(r+="y"),r}},34706:function(c,l,e){var o=e(46916),a=e(92597),r=e(47976),s=e(67066),u=RegExp.prototype;c.exports=function(v){var d=v.flags;return d===void 0&&!("flags"in u)&&!a(v,"flags")&&r(u,v)?o(s,v):d}},84488:function(c,l,e){var o=e(68554),a=TypeError;c.exports=function(r){if(o(r))throw a("Can't call method on "+r);return r}},46465:function(c){c.exports=function(l,e){return l===e||l!=l&&e!=e}},17152:function(c,l,e){"use strict";var o=e(17854),a=e(22104),r=e(60614),s=e(89363),u=e(88113),v=e(50206),d=e(48053),h=o.Function,m=/MSIE .\./.test(u)||s&&function(){var p=o.Bun.version.split(".");return p.length<3||p[0]==0&&(p[1]<3||p[1]==3&&p[2]==0)}();c.exports=function(p,y){var g=y?2:1;return m?function(I,b){var E=d(arguments.length,1)>g,R=r(I)?I:h(I),A=E?v(arguments,g):[],N=E?function(){a(R,this,A)}:R;return y?p(N,b):p(N)}:p}},26283:function(c,l,e){var o=e(79405),a=e(87758),r=o.Set,s=o.add;c.exports=function(u){var v=new r;return a(u,function(d){s(v,d)}),v}},37075:function(c,l,e){"use strict";var o=e(88999),a=e(79405),r=e(26283),s=e(1043),u=e(738),v=e(87758),d=e(6333),h=a.has,m=a.remove;c.exports=function(y){var g=o(this),I=u(y),b=r(g);return s(g)<=I.size?v(g,function(E){I.includes(E)&&m(b,E)}):d(I.getIterator(),function(E){h(g,E)&&m(b,E)}),b}},79405:function(c,l,e){var o=e(1702),a=Set.prototype;c.exports={Set,add:o(a.add),has:o(a.has),remove:o(a.delete),proto:a,$has:a.has,$keys:a.keys}},81920:function(c,l,e){"use strict";var o=e(88999),a=e(79405),r=e(1043),s=e(738),u=e(87758),v=e(6333),d=a.Set,h=a.add,m=a.has,p=a.$has,y=a.$keys,g=function(I){return I.has===p&&I.keys===y};c.exports=function(b){var E=o(this),R=s(b),A=new d;if(!g(R)&&r(E)>R.size){if(v(R.getIterator(),function(w){m(E,w)&&h(A,w)}),r(A)<2)return A;var N=A;A=new d,u(E,function(w){m(N,w)&&h(A,w)})}else u(E,function(w){R.includes(w)&&h(A,w)});return A}},78239:function(c,l,e){"use strict";var o=e(88999),a=e(79405).has,r=e(1043),s=e(738),u=e(87758),v=e(6333),d=e(99212);c.exports=function(m){var p=o(this),y=s(m);if(r(p)<=y.size)return u(p,function(I){if(y.includes(I))return!1},!0)!==!1;var g=y.getIterator();return v(g,function(I){if(a(p,I))return d(g,"normal",!1)})!==!1}},49180:function(c,l,e){"use strict";var o=e(88999),a=e(1043),r=e(87758),s=e(738);c.exports=function(v){var d=o(this),h=s(v);return a(d)>h.size?!1:r(d,function(m){if(!h.includes(m))return!1},!0)!==!1}},10107:function(c,l,e){"use strict";var o=e(88999),a=e(79405).has,r=e(1043),s=e(738),u=e(6333),v=e(99212);c.exports=function(h){var m=o(this),p=s(h);if(r(m)<p.size)return!1;var y=p.getIterator();return u(y,function(g){if(!a(m,g))return v(y,"normal",!1)})!==!1}},87758:function(c,l,e){var o=e(1702),a=e(6333),r=e(79405),s=r.Set,u=r.proto,v=o(u.forEach),d=o(u.keys),h=d(new s).next;c.exports=function(m,p,y){return y?a(d(m),p,h):v(m,p)}},13831:function(c,l,e){var o=e(35005),a=function(){return{size:0,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};c.exports=function(r){try{var s=o("Set");return new s()[r](a()),!0}catch(u){return!1}}},1043:function(c,l,e){var o=e(75668),a=e(79405);c.exports=o(a.proto,"size","get")||function(r){return r.size}},96340:function(c,l,e){"use strict";var o=e(35005),a=e(47045),r=e(5112),s=e(19781),u=r("species");c.exports=function(v){var d=o(v);s&&d&&!d[u]&&a(d,u,{configurable:!0,get:function(){return this}})}},98506:function(c,l,e){"use strict";var o=e(88999),a=e(79405),r=e(26283),s=e(738),u=e(6333),v=a.add,d=a.has,h=a.remove;c.exports=function(p){var y=o(this),g=s(p).getIterator(),I=r(y);return u(g,function(b){d(y,b)?h(I,b):v(I,b)}),I}},58003:function(c,l,e){var o=e(3070).f,a=e(92597),r=e(5112),s=r("toStringTag");c.exports=function(u,v,d){u&&!d&&(u=u.prototype),u&&!a(u,s)&&o(u,s,{configurable:!0,value:v})}},39391:function(c,l,e){"use strict";var o=e(88999),a=e(79405).add,r=e(26283),s=e(738),u=e(6333);c.exports=function(d){var h=o(this),m=s(d).getIterator(),p=r(h);return u(m,function(y){a(p,y)}),p}},6200:function(c,l,e){var o=e(72309),a=e(69711),r=o("keys");c.exports=function(s){return r[s]||(r[s]=a(s))}},5465:function(c,l,e){var o=e(17854),a=e(13072),r="__core-js_shared__",s=o[r]||a(r,{});c.exports=s},72309:function(c,l,e){var o=e(31913),a=e(5465);(c.exports=function(r,s){return a[r]||(a[r]=s!==void 0?s:{})})("versions",[]).push({version:"3.28.0",mode:o?"pure":"global",copyright:"\xA9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.28.0/LICENSE",source:"https://github.com/zloirock/core-js"})},36707:function(c,l,e){var o=e(19670),a=e(39483),r=e(68554),s=e(5112),u=s("species");c.exports=function(v,d){var h=o(v).constructor,m;return h===void 0||r(m=o(h)[u])?d:a(m)}},92386:function(c,l,e){var o=e(1702),a=e(45656),r=e(41340),s=e(26244),u=TypeError,v=o([].push),d=o([].join);c.exports=function(m){var p=a(m),y=s(p);if(!y)return"";for(var g=arguments.length,I=[],b=0;;){var E=p[b++];if(E===void 0)throw u("Incorrect template");if(v(I,r(E)),b===y)return d(I,"");b<g&&v(I,r(arguments[b]))}}},28710:function(c,l,e){var o=e(1702),a=e(19303),r=e(41340),s=e(84488),u=o("".charAt),v=o("".charCodeAt),d=o("".slice),h=function(m){return function(p,y){var g=r(s(p)),I=a(y),b=g.length,E,R;return I<0||I>=b?m?"":void 0:(E=v(g,I),E<55296||E>56319||I+1===b||(R=v(g,I+1))<56320||R>57343?m?u(g,I):E:m?d(g,I,I+2):(E-55296<<10)+(R-56320)+65536)}};c.exports={codeAt:h(!1),charAt:h(!0)}},70327:function(c,l,e){var o=e(35005),a=e(1702),r=String.fromCharCode,s=o("String","fromCodePoint"),u=a("".charAt),v=a("".charCodeAt),d=a("".indexOf),h=a("".slice),m=48,p=57,y=97,g=102,I=65,b=70,E=function(N,w){var B=v(N,w);return B>=m&&B<=p},R=function(N,w,B){if(B>=N.length)return-1;for(var C=0;w<B;w++){var L=A(v(N,w));if(L===-1)return-1;C=C*16+L}return C},A=function(N){return N>=m&&N<=p?N-m:N>=y&&N<=g?N-y+10:N>=I&&N<=b?N-I+10:-1};c.exports=function(N){for(var w="",B=0,C=0,L;(C=d(N,"\\",C))>-1;){if(w+=h(N,B,C),++C===N.length)return;var Z=u(N,C++);switch(Z){case"b":w+="\b";break;case"t":w+="	";break;case"n":w+=`
`;break;case"v":w+="\v";break;case"f":w+="\f";break;case"r":w+="\r";break;case"\r":C<N.length&&u(N,C)===`
`&&++C;case`
`:case"\u2028":case"\u2029":break;case"0":if(E(N,C))return;w+="\0";break;case"x":if(L=R(N,C,C+2),L===-1)return;C+=2,w+=r(L);break;case"u":if(C<N.length&&u(N,C)==="{"){var te=d(N,"}",++C);if(te===-1)return;L=R(N,C,te),C=te+1}else L=R(N,C,C+4),C+=4;if(L===-1||L>1114111)return;w+=s(L);break;default:if(E(Z,0))return;w+=Z}B=C}return w+h(N,B)}},53111:function(c,l,e){var o=e(1702),a=e(84488),r=e(41340),s=e(81361),u=o("".replace),v=RegExp("^["+s+"]+"),d=RegExp("(^|[^"+s+"])["+s+"]+$"),h=function(m){return function(p){var y=r(a(p));return m&1&&(y=u(y,v,"")),m&2&&(y=u(y,d,"$1")),y}};c.exports={start:h(1),end:h(2),trim:h(3)}},64124:function(c,l,e){var o=e(17854),a=e(47293),r=e(7392),s=e(7871),u=e(83823),v=e(35268),d=o.structuredClone;c.exports=!!d&&!a(function(){if(u&&r>92||v&&r>94||s&&r>97)return!1;var h=new ArrayBuffer(8),m=d(h,{transfer:[h]});return h.byteLength!=0||m.byteLength!=8})},36293:function(c,l,e){var o=e(7392),a=e(47293);c.exports=!!Object.getOwnPropertySymbols&&!a(function(){var r=Symbol();return!String(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&o&&o<41})},20261:function(c,l,e){var o=e(17854),a=e(22104),r=e(49974),s=e(60614),u=e(92597),v=e(47293),d=e(60490),h=e(50206),m=e(80317),p=e(48053),y=e(6833),g=e(35268),I=o.setImmediate,b=o.clearImmediate,E=o.process,R=o.Dispatch,A=o.Function,N=o.MessageChannel,w=o.String,B=0,C={},L="onreadystatechange",Z,te,ee,_;v(function(){Z=o.location});var de=function(Q){if(u(C,Q)){var Y=C[Q];delete C[Q],Y()}},be=function(Q){return function(){de(Q)}},Te=function(Q){de(Q.data)},ie=function(Q){o.postMessage(w(Q),Z.protocol+"//"+Z.host)};(!I||!b)&&(I=function(Y){p(arguments.length,1);var k=s(Y)?Y:A(Y),K=h(arguments,1);return C[++B]=function(){a(k,void 0,K)},te(B),B},b=function(Y){delete C[Y]},g?te=function(Q){E.nextTick(be(Q))}:R&&R.now?te=function(Q){R.now(be(Q))}:N&&!y?(ee=new N,_=ee.port2,ee.port1.onmessage=Te,te=r(_.postMessage,_)):o.addEventListener&&s(o.postMessage)&&!o.importScripts&&Z&&Z.protocol!=="file:"&&!v(ie)?(te=ie,o.addEventListener("message",Te,!1)):L in m("script")?te=function(Q){d.appendChild(m("script"))[L]=function(){d.removeChild(this),de(Q)}}:te=function(Q){setTimeout(be(Q),0)}),c.exports={set:I,clear:b}},51400:function(c,l,e){var o=e(19303),a=Math.max,r=Math.min;c.exports=function(s,u){var v=o(s);return v<0?a(v+u,0):r(v,u)}},64599:function(c,l,e){var o=e(57593),a=TypeError;c.exports=function(r){var s=o(r,"number");if(typeof s=="number")throw a("Can't convert number to bigint");return BigInt(s)}},57067:function(c,l,e){var o=e(19303),a=e(17466),r=RangeError;c.exports=function(s){if(s===void 0)return 0;var u=o(s),v=a(u);if(u!==v)throw r("Wrong length or index");return v}},45656:function(c,l,e){var o=e(68361),a=e(84488);c.exports=function(r){return o(a(r))}},19303:function(c,l,e){var o=e(74758);c.exports=function(a){var r=+a;return r!==r||r===0?0:o(r)}},17466:function(c,l,e){var o=e(19303),a=Math.min;c.exports=function(r){return r>0?a(o(r),9007199254740991):0}},47908:function(c,l,e){var o=e(84488),a=Object;c.exports=function(r){return a(o(r))}},84590:function(c,l,e){var o=e(73002),a=RangeError;c.exports=function(r,s){var u=o(r);if(u%s)throw a("Wrong offset");return u}},73002:function(c,l,e){var o=e(19303),a=RangeError;c.exports=function(r){var s=o(r);if(s<0)throw a("The argument can't be less than 0");return s}},57593:function(c,l,e){var o=e(46916),a=e(70111),r=e(52190),s=e(58173),u=e(92140),v=e(5112),d=TypeError,h=v("toPrimitive");c.exports=function(m,p){if(!a(m)||r(m))return m;var y=s(m,h),g;if(y){if(p===void 0&&(p="default"),g=o(y,m,p),!a(g)||r(g))return g;throw d("Can't convert object to primitive value")}return p===void 0&&(p="number"),u(m,p)}},34948:function(c,l,e){var o=e(57593),a=e(52190);c.exports=function(r){var s=o(r,"string");return a(s)?s:s+""}},45965:function(c,l,e){var o=e(35005),a=e(60614),r=e(25615),s=e(70111),u=o("Set"),v=function(d){return s(d)&&typeof d.size=="number"&&a(d.has)&&a(d.keys)};c.exports=function(d){if(v(d))return d;if(r(d))return new u(d)}},51694:function(c,l,e){var o=e(5112),a=o("toStringTag"),r={};r[a]="z",c.exports=String(r)==="[object z]"},41340:function(c,l,e){var o=e(70648),a=String;c.exports=function(r){if(o(r)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return a(r)}},66330:function(c){var l=String;c.exports=function(e){try{return l(e)}catch(o){return"Object"}}},43074:function(c,l,e){var o=e(97745),a=e(66304);c.exports=function(r,s){return o(a(r),s)}},66304:function(c,l,e){var o=e(90260),a=e(36707),r=o.aTypedArrayConstructor,s=o.getTypedArrayConstructor;c.exports=function(u){return r(a(u,s(u)))}},69711:function(c,l,e){var o=e(1702),a=0,r=Math.random(),s=o(1 .toString);c.exports=function(u){return"Symbol("+(u===void 0?"":u)+")_"+s(++a+r,36)}},43307:function(c,l,e){var o=e(36293);c.exports=o&&!Symbol.sham&&typeof Symbol.iterator=="symbol"},3353:function(c,l,e){var o=e(19781),a=e(47293);c.exports=o&&a(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42})},48053:function(c){var l=TypeError;c.exports=function(e,o){if(e<o)throw l("Not enough arguments");return e}},94811:function(c,l,e){var o=e(17854),a=e(60614),r=o.WeakMap;c.exports=a(r)&&/native code/.test(String(r))},60953:function(c,l,e){var o=e(1702),a=WeakMap.prototype;c.exports={WeakMap,set:o(a.set),get:o(a.get),has:o(a.has),remove:o(a.delete)}},78818:function(c,l,e){var o=e(1702),a=WeakSet.prototype;c.exports={WeakSet,add:o(a.add),has:o(a.has),remove:o(a.delete)}},26800:function(c,l,e){var o=e(40857),a=e(92597),r=e(6061),s=e(3070).f;c.exports=function(u){var v=o.Symbol||(o.Symbol={});a(v,u)||s(v,u,{value:r.f(u)})}},6061:function(c,l,e){var o=e(5112);l.f=o},5112:function(c,l,e){var o=e(17854),a=e(72309),r=e(92597),s=e(69711),u=e(36293),v=e(43307),d=o.Symbol,h=a("wks"),m=v?d.for||d:d&&d.withoutSetter||s;c.exports=function(p){return r(h,p)||(h[p]=u&&r(d,p)?d[p]:m("Symbol."+p)),h[p]}},81361:function(c){c.exports=`	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`},89191:function(c,l,e){"use strict";var o=e(35005),a=e(92597),r=e(68880),s=e(47976),u=e(27674),v=e(99920),d=e(2626),h=e(79587),m=e(56277),p=e(58340),y=e(5392),g=e(19781),I=e(31913);c.exports=function(b,E,R,A){var N="stackTraceLimit",w=A?2:1,B=b.split("."),C=B[B.length-1],L=o.apply(null,B);if(L){var Z=L.prototype;if(!I&&a(Z,"cause")&&delete Z.cause,!R)return L;var te=o("Error"),ee=E(function(_,de){var be=m(A?de:_,void 0),Te=A?new L(_):new L;return be!==void 0&&r(Te,"message",be),y(Te,ee,Te.stack,2),this&&s(Z,this)&&h(Te,this,ee),arguments.length>w&&p(Te,arguments[w]),Te});if(ee.prototype=Z,C!=="Error"?u?u(ee,te):v(ee,te,{name:!0}):g&&N in L&&(d(ee,L,N),d(ee,L,"prepareStackTrace")),v(ee,L),!I)try{Z.name!==C&&r(Z,"name",C),Z.constructor=ee}catch(_){}return ee}}},32120:function(c,l,e){var o=e(82109),a=e(35005),r=e(22104),s=e(47293),u=e(89191),v="AggregateError",d=a(v),h=!s(function(){return d([1]).errors[0]!==1})&&s(function(){return d([1],v,{cause:7}).cause!==7});o({global:!0,constructor:!0,arity:2,forced:h},{AggregateError:u(v,function(m){return function(y,g){return r(m,this,arguments)}},h,!0)})},56967:function(c,l,e){"use strict";var o=e(82109),a=e(47976),r=e(79518),s=e(27674),u=e(99920),v=e(70030),d=e(68880),h=e(79114),m=e(58340),p=e(5392),y=e(20408),g=e(56277),I=e(5112),b=I("toStringTag"),E=Error,R=[].push,A=function(B,C){var L=a(N,this),Z;s?Z=s(E(),L?r(this):N):(Z=L?this:v(N),d(Z,b,"Error")),C!==void 0&&d(Z,"message",g(C)),p(Z,A,Z.stack,1),arguments.length>2&&m(Z,arguments[2]);var te=[];return y(B,R,{that:te}),d(Z,"errors",te),Z};s?s(A,E):u(A,E,{name:!0});var N=A.prototype=v(E.prototype,{constructor:h(1,A),message:h(1,""),name:h(1,"AggregateError")});o({global:!0,constructor:!0,arity:2},{AggregateError:A})},9170:function(c,l,e){e(56967)},52262:function(c,l,e){"use strict";var o=e(82109),a=e(47908),r=e(26244),s=e(19303),u=e(51223);o({target:"Array",proto:!0},{at:function(d){var h=a(this),m=r(h),p=s(d),y=p>=0?p:m+p;return y<0||y>=m?void 0:h[y]}}),u("at")},77287:function(c,l,e){"use strict";var o=e(82109),a=e(9671).findLastIndex,r=e(51223);o({target:"Array",proto:!0},{findLastIndex:function(u){return a(this,u,arguments.length>1?arguments[1]:void 0)}}),r("findLastIndex")},67635:function(c,l,e){"use strict";var o=e(82109),a=e(9671).findLast,r=e(51223);o({target:"Array",proto:!0},{findLast:function(u){return a(this,u,arguments.length>1?arguments[1]:void 0)}}),r("findLast")},57658:function(c,l,e){"use strict";var o=e(82109),a=e(47908),r=e(26244),s=e(83658),u=e(7207),v=e(47293),d=v(function(){return[].push.call({length:4294967296},1)!==4294967297}),h=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(p){return p instanceof TypeError}},m=d||!h();o({target:"Array",proto:!0,arity:1,forced:m},{push:function(y){var g=a(this),I=r(g),b=arguments.length;u(I+b);for(var E=0;E<b;E++)g[I]=arguments[E],I++;return s(g,I),I}})},96644:function(c,l,e){"use strict";var o=e(82109),a=e(53671).right,r=e(9341),s=e(7392),u=e(35268),v=!u&&s>79&&s<83,d=v||!r("reduceRight");o({target:"Array",proto:!0,forced:d},{reduceRight:function(m){return a(this,m,arguments.length,arguments.length>1?arguments[1]:void 0)}})},85827:function(c,l,e){"use strict";var o=e(82109),a=e(53671).left,r=e(9341),s=e(7392),u=e(35268),v=!u&&s>79&&s<83,d=v||!r("reduce");o({target:"Array",proto:!0,forced:d},{reduce:function(m){var p=arguments.length;return a(this,m,p,p>1?arguments[1]:void 0)}})},90476:function(c,l,e){"use strict";var o=e(82109),a=e(21843),r=e(45656),s=e(51223),u=Array;o({target:"Array",proto:!0},{toReversed:function(){return a(r(this),u)}}),s("toReversed")},76459:function(c,l,e){"use strict";var o=e(82109),a=e(1702),r=e(19662),s=e(45656),u=e(97745),v=e(98770),d=e(51223),h=Array,m=a(v("Array").sort);o({target:"Array",proto:!0},{toSorted:function(y){y!==void 0&&r(y);var g=s(this),I=u(h,g);return m(I,y)}}),d("toSorted")},99892:function(c,l,e){"use strict";var o=e(82109),a=e(51223),r=e(7207),s=e(26244),u=e(51400),v=e(45656),d=e(19303),h=Array,m=Math.max,p=Math.min;o({target:"Array",proto:!0},{toSpliced:function(g,I){var b=v(this),E=s(b),R=u(g,E),A=arguments.length,N=0,w,B,C,L;for(A===0?w=B=0:A===1?(w=0,B=E-R):(w=A-2,B=p(m(d(I),0),E-R)),C=r(E+w-B),L=h(C);N<R;N++)L[N]=b[N];for(;N<R+w;N++)L[N]=arguments[N-R+2];for(;N<C;N++)L[N]=b[N+B-w];return L}}),a("toSpliced")},35581:function(c,l,e){"use strict";var o=e(82109),a=e(11572),r=e(45656),s=Array;o({target:"Array",proto:!0},{with:function(u,v){return a(r(this),s,u,v)}})},21703:function(c,l,e){var o=e(82109),a=e(17854),r=e(22104),s=e(89191),u="WebAssembly",v=a[u],d=Error("e",{cause:7}).cause!==7,h=function(p,y){var g={};g[p]=s(p,y,d),o({global:!0,constructor:!0,arity:1,forced:d},g)},m=function(p,y){if(v&&v[p]){var g={};g[p]=s(u+"."+p,y,d),o({target:u,stat:!0,constructor:!0,arity:1,forced:d},g)}};h("Error",function(p){return function(g){return r(p,this,arguments)}}),h("EvalError",function(p){return function(g){return r(p,this,arguments)}}),h("RangeError",function(p){return function(g){return r(p,this,arguments)}}),h("ReferenceError",function(p){return function(g){return r(p,this,arguments)}}),h("SyntaxError",function(p){return function(g){return r(p,this,arguments)}}),h("TypeError",function(p){return function(g){return r(p,this,arguments)}}),h("URIError",function(p){return function(g){return r(p,this,arguments)}}),m("CompileError",function(p){return function(g){return r(p,this,arguments)}}),m("LinkError",function(p){return function(g){return r(p,this,arguments)}}),m("RuntimeError",function(p){return function(g){return r(p,this,arguments)}})},69098:function(c,l,e){"use strict";var o=e(77710),a=e(95631);o("Map",function(r){return function(){return r(this,arguments.length?arguments[0]:void 0)}},a)},51532:function(c,l,e){e(69098)},46314:function(c,l,e){var o=e(82109),a=e(92597);o({target:"Object",stat:!0},{hasOwn:a})},34668:function(c,l,e){"use strict";var o=e(82109),a=e(46916),r=e(19662),s=e(35005),u=e(78523),v=e(12534),d=e(20408),h=e(80612),m="No one promise resolved";o({target:"Promise",stat:!0,forced:h},{any:function(y){var g=this,I=s("AggregateError"),b=u.f(g),E=b.resolve,R=b.reject,A=v(function(){var N=r(g.resolve),w=[],B=0,C=1,L=!1;d(y,function(Z){var te=B++,ee=!1;C++,a(N,g,Z).then(function(_){ee||L||(L=!0,E(_))},function(_){ee||L||(ee=!0,w[te]=_,--C||R(new I(w,m)))})}),--C||R(new I(w,m))});return A.error&&R(A.value),b.promise}})},81299:function(c,l,e){var o=e(82109),a=e(17854),r=e(58003);o({global:!0},{Reflect:{}}),r(a.Reflect,"Reflect",!0)},92087:function(c,l,e){var o=e(17854),a=e(19781),r=e(47045),s=e(67066),u=e(47293),v=o.RegExp,d=v.prototype,h=a&&u(function(){var m=!0;try{v(".","d")}catch(A){m=!1}var p={},y="",g=m?"dgimsy":"gimsy",I=function(A,N){Object.defineProperty(p,A,{get:function(){return y+=N,!0}})},b={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};m&&(b.hasIndices="d");for(var E in b)I(E,b[E]);var R=Object.getOwnPropertyDescriptor(d,"flags").get.call(p);return R!==g||y!==g});h&&r(d,"flags",{configurable:!0,get:s})},24506:function(c,l,e){"use strict";var o=e(82109),a=e(1702),r=e(84488),s=e(19303),u=e(41340),v=e(47293),d=a("".charAt),h=v(function(){return"\u{20BB7}".at(-2)!=="\uD842"});o({target:"String",proto:!0,forced:h},{at:function(p){var y=u(r(this)),g=y.length,I=s(p),b=I>=0?I:g+I;return b<0||b>=g?void 0:d(y,b)}})},68757:function(c,l,e){"use strict";var o=e(82109),a=e(46916),r=e(1702),s=e(84488),u=e(60614),v=e(68554),d=e(47850),h=e(41340),m=e(58173),p=e(34706),y=e(10647),g=e(5112),I=e(31913),b=g("replace"),E=TypeError,R=r("".indexOf),A=r("".replace),N=r("".slice),w=Math.max,B=function(C,L,Z){return Z>C.length?-1:L===""?Z:R(C,L,Z)};o({target:"String",proto:!0},{replaceAll:function(L,Z){var te=s(this),ee,_,de,be,Te,ie,Q,Y,k,K=0,re=0,T="";if(!v(L)){if(ee=d(L),ee&&(_=h(s(p(L))),!~R(_,"g")))throw E("`.replaceAll` does not allow non-global regexes");if(de=m(L,b),de)return a(de,L,te,Z);if(I&&ee)return A(h(te),L,Z)}for(be=h(te),Te=h(L),ie=u(Z),ie||(Z=h(Z)),Q=Te.length,Y=w(1,Q),K=B(be,Te,0);K!==-1;)k=ie?h(Z(Te,K,be)):y(Te,be,K,[],void 0,Z),T+=N(be,re,K)+k,re=K+Q,K=B(be,Te,K+Y);return re<be.length&&(T+=N(be,re)),T}})},48675:function(c,l,e){"use strict";var o=e(90260),a=e(26244),r=e(19303),s=o.aTypedArray,u=o.exportTypedArrayMethod;u("at",function(d){var h=s(this),m=a(h),p=r(d),y=p>=0?p:m+p;return y<0||y>=m?void 0:h[y]})},14590:function(c,l,e){"use strict";var o=e(90260),a=e(9671).findLastIndex,r=o.aTypedArray,s=o.exportTypedArrayMethod;s("findLastIndex",function(v){return a(r(this),v,arguments.length>1?arguments[1]:void 0)})},63408:function(c,l,e){"use strict";var o=e(90260),a=e(9671).findLast,r=o.aTypedArray,s=o.exportTypedArrayMethod;s("findLast",function(v){return a(r(this),v,arguments.length>1?arguments[1]:void 0)})},3462:function(c,l,e){"use strict";var o=e(17854),a=e(46916),r=e(90260),s=e(26244),u=e(84590),v=e(47908),d=e(47293),h=o.RangeError,m=o.Int8Array,p=m&&m.prototype,y=p&&p.set,g=r.aTypedArray,I=r.exportTypedArrayMethod,b=!d(function(){var R=new Uint8ClampedArray(2);return a(y,R,{length:1,0:3},1),R[1]!==3}),E=b&&r.NATIVE_ARRAY_BUFFER_VIEWS&&d(function(){var R=new m(2);return R.set(1),R.set("2",1),R[0]!==0||R[1]!==2});I("set",function(A){g(this);var N=u(arguments.length>1?arguments[1]:void 0,1),w=v(A);if(b)return a(y,this,w,N);var B=this.length,C=s(w),L=0;if(C+N>B)throw h("Wrong length");for(;L<C;)this[N+L]=w[L++]},!b||E)},1439:function(c,l,e){"use strict";var o=e(21843),a=e(90260),r=a.aTypedArray,s=a.exportTypedArrayMethod,u=a.getTypedArrayConstructor;s("toReversed",function(){return o(r(this),u(this))})},87585:function(c,l,e){"use strict";var o=e(90260),a=e(1702),r=e(19662),s=e(97745),u=o.aTypedArray,v=o.getTypedArrayConstructor,d=o.exportTypedArrayMethod,h=a(o.TypedArrayPrototype.sort);d("toSorted",function(p){p!==void 0&&r(p);var y=u(this),g=s(v(y),y);return h(g,p)})},55315:function(c,l,e){"use strict";var o=e(11572),a=e(90260),r=e(44067),s=e(19303),u=e(64599),v=a.aTypedArray,d=a.getTypedArrayConstructor,h=a.exportTypedArrayMethod,m=!!function(){try{new Int8Array(1).with(2,{valueOf:function(){throw 8}})}catch(p){return p===8}}();h("with",function(p,y){var g=v(this),I=s(p),b=r(g)?u(y):+y;return o(g,d(g),I,b)},!m)},41202:function(c,l,e){"use strict";var o=e(76677),a=e(17854),r=e(1702),s=e(89190),u=e(62423),v=e(77710),d=e(29320),h=e(70111),m=e(29909).enforce,p=e(47293),y=e(94811),g=Object,I=Array.isArray,b=g.isExtensible,E=g.isFrozen,R=g.isSealed,A=g.freeze,N=g.seal,w={},B={},C=!a.ActiveXObject&&"ActiveXObject"in a,L,Z=function(Q){return function(){return Q(this,arguments.length?arguments[0]:void 0)}},te=v("WeakMap",Z,d),ee=te.prototype,_=r(ee.set),de=function(){return o&&p(function(){var Q=A([]);return _(new te,Q,1),!E(Q)})};if(y)if(C){L=d.getConstructor(Z,"WeakMap",!0),u.enable();var be=r(ee.delete),Te=r(ee.has),ie=r(ee.get);s(ee,{delete:function(Q){if(h(Q)&&!b(Q)){var Y=m(this);return Y.frozen||(Y.frozen=new L),be(this,Q)||Y.frozen.delete(Q)}return be(this,Q)},has:function(Y){if(h(Y)&&!b(Y)){var k=m(this);return k.frozen||(k.frozen=new L),Te(this,Y)||k.frozen.has(Y)}return Te(this,Y)},get:function(Y){if(h(Y)&&!b(Y)){var k=m(this);return k.frozen||(k.frozen=new L),Te(this,Y)?ie(this,Y):k.frozen.get(Y)}return ie(this,Y)},set:function(Y,k){if(h(Y)&&!b(Y)){var K=m(this);K.frozen||(K.frozen=new L),Te(this,Y)?_(this,Y,k):K.frozen.set(Y,k)}else _(this,Y,k);return this}})}else de()&&s(ee,{set:function(Y,k){var K;return I(Y)&&(E(Y)?K=w:R(Y)&&(K=B)),_(this,Y,k),K==w&&A(Y),K==B&&N(Y),this}})},4129:function(c,l,e){e(41202)},23252:function(c,l,e){"use strict";var o=e(19781),a=e(47045),r=e(58199),s=ArrayBuffer.prototype;o&&!("detached"in s)&&a(s,"detached",{configurable:!0,get:function(){return r(this)}})},32372:function(c,l,e){"use strict";var o=e(82109),a=e(58846);a&&o({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return a(this,arguments.length?arguments[0]:void 0,!1)}})},6461:function(c,l,e){"use strict";var o=e(82109),a=e(58846);a&&o({target:"ArrayBuffer",proto:!0},{transfer:function(){return a(this,arguments.length?arguments[0]:void 0,!0)}})},84811:function(c,l,e){"use strict";var o=e(82109),a=e(42092).filterReject,r=e(51223);o({target:"Array",proto:!0,forced:!0},{filterOut:function(u){return a(this,u,arguments.length>1?arguments[1]:void 0)}}),r("filterOut")},34286:function(c,l,e){"use strict";var o=e(82109),a=e(42092).filterReject,r=e(51223);o({target:"Array",proto:!0,forced:!0},{filterReject:function(u){return a(this,u,arguments.length>1?arguments[1]:void 0)}}),r("filterReject")},19258:function(c,l,e){var o=e(82109),a=e(33253);o({target:"Array",stat:!0},{fromAsync:a})},61886:function(c,l,e){var o=e(82109),a=e(9341),r=e(51223),s=e(59921),u=e(31913);o({target:"Array",proto:!0,name:"groupToMap",forced:u||!a("groupByToMap")},{groupByToMap:s}),r("groupByToMap")},1999:function(c,l,e){"use strict";var o=e(82109),a=e(21191),r=e(9341),s=e(51223);o({target:"Array",proto:!0,forced:!r("groupBy")},{groupBy:function(v){var d=arguments.length>1?arguments[1]:void 0;return a(this,v,d)}}),s("groupBy")},59422:function(c,l,e){var o=e(82109),a=e(51223),r=e(59921),s=e(31913);o({target:"Array",proto:!0,forced:s},{groupToMap:r}),a("groupToMap")},52550:function(c,l,e){"use strict";var o=e(82109),a=e(21191),r=e(51223);o({target:"Array",proto:!0},{group:function(u){var v=arguments.length>1?arguments[1]:void 0;return a(this,u,v)}}),r("group")},8e4:function(c,l,e){var o=e(82109),a=e(43157),r=Object.isFrozen,s=function(u,v){if(!r||!a(u)||!r(u))return!1;for(var d=0,h=u.length,m;d<h;)if(m=u[d++],!(typeof m=="string"||v&&m===void 0))return!1;return h!==0};o({target:"Array",stat:!0,sham:!0,forced:!0},{isTemplateObject:function(v){if(!s(v,!0))return!1;var d=v.raw;return d.length===v.length&&s(d,!1)}})},83475:function(c,l,e){"use strict";var o=e(19781),a=e(51223),r=e(47908),s=e(26244),u=e(47045);o&&(u(Array.prototype,"lastIndex",{configurable:!0,get:function(){var d=r(this),h=s(d);return h==0?0:h-1}}),a("lastIndex"))},46273:function(c,l,e){"use strict";var o=e(19781),a=e(51223),r=e(47908),s=e(26244),u=e(47045);o&&(u(Array.prototype,"lastItem",{configurable:!0,get:function(){var d=r(this),h=s(d);return h==0?void 0:d[h-1]},set:function(d){var h=r(this),m=s(h);return h[m==0?0:m-1]=d}}),a("lastItem"))},3087:function(c,l,e){"use strict";var o=e(82109),a=e(51223),r=e(60956);o({target:"Array",proto:!0,forced:!0},{uniqueBy:r}),a("uniqueBy")},4763:function(c,l,e){"use strict";var o=e(82109),a=e(19781),r=e(35005),s=e(19662),u=e(25787),v=e(98052),d=e(89190),h=e(47045),m=e(5112),p=e(29909),y=e(8557),g=r("Promise"),I=r("SuppressedError"),b=ReferenceError,E=m("asyncDispose"),R=m("toStringTag"),A="AsyncDisposableStack",N=p.set,w=p.getterFor(A),B="async-dispose",C="disposed",L="pending",Z=A+" already disposed",te=function(){N(u(this,ee),{type:A,state:L,stack:[]}),a||(this.disposed=!1)},ee=te.prototype;d(ee,{disposeAsync:function(){var de=this;return new g(function(be,Te){var ie=w(de);if(ie.state==C)return be(void 0);ie.state=C,a||(de.disposed=!0);var Q=ie.stack,Y=Q.length,k=!1,K,re=function(D){k?K=new I(D,K):(k=!0,K=D),T()},T=function(){if(Y){var D=Q[--Y];Q[Y]=null;try{g.resolve(D()).then(T,re)}catch(V){re(V)}}else ie.stack=null,k?Te(K):be(void 0)};T()})},use:function(de){var be=w(this);if(be.state==C)throw b(Z);return y(be,de,B),de},adopt:function(de,be){var Te=w(this);if(Te.state==C)throw b(Z);return s(be),y(Te,void 0,B,function(){be(de)}),de},defer:function(de){var be=w(this);if(be.state==C)throw b(Z);s(de),y(be,void 0,B,de)},move:function(){var de=w(this);if(de.state==C)throw b(Z);var be=new te;return w(be).stack=de.stack,de.stack=[],be}}),a&&h(ee,"disposed",{configurable:!0,get:function(){return w(this).state==C}}),v(ee,E,ee.disposeAsync,{name:"disposeAsync"}),v(ee,R,A,{nonWritable:!0}),o({global:!0,constructor:!0,forced:!0},{AsyncDisposableStack:te})},40787:function(c,l,e){var o=e(82109),a=e(47520);o({target:"AsyncIterator",name:"indexed",proto:!0,real:!0,forced:!0},{asIndexedPairs:a})},1094:function(c,l,e){"use strict";var o=e(46916),a=e(98052),r=e(35005),s=e(58173),u=e(92597),v=e(5112),d=e(66462),h=v("asyncDispose"),m=r("Promise");u(d,h)||a(d,h,function(){var p=this;return new m(function(y,g){var I=s(p,"return");I?m.resolve(o(I,p)).then(function(){y(void 0)},g):y(void 0)})})},66342:function(c,l,e){"use strict";var o=e(82109),a=e(25787),r=e(68880),s=e(92597),u=e(5112),v=e(66462),d=e(31913),h=u("toStringTag"),m=function(){a(this,v)};m.prototype=v,s(v,h)||r(v,h,"AsyncIterator"),(d||!s(v,"constructor")||v.constructor===Object)&&r(v,"constructor",m),o({global:!0,constructor:!0,forced:d},{AsyncIterator:m})},23647:function(c,l,e){"use strict";var o=e(82109),a=e(46916),r=e(19670),s=e(24942),u=e(66336),v=e(73002),d=e(45348),h=e(76178),m=d(function(p){var y=this;return new p(function(g,I){var b=function(R){y.done=!0,I(R)},E=function(){try{p.resolve(r(a(y.next,y.iterator))).then(function(R){try{r(R).done?(y.done=!0,g(h(void 0,!0))):y.remaining?(y.remaining--,E()):g(h(R.value,!1))}catch(A){b(A)}},b)}catch(R){b(R)}};E()})});o({target:"AsyncIterator",proto:!0,real:!0},{drop:function(y){return new m(s(this),{remaining:v(u(+y))})}})},68216:function(c,l,e){"use strict";var o=e(82109),a=e(12269).every;o({target:"AsyncIterator",proto:!0,real:!0},{every:function(s){return a(this,s)}})},88449:function(c,l,e){"use strict";var o=e(82109),a=e(46916),r=e(19662),s=e(19670),u=e(70111),v=e(24942),d=e(45348),h=e(76178),m=e(21753),p=d(function(y){var g=this,I=g.iterator,b=g.predicate;return new y(function(E,R){var A=function(B){g.done=!0,R(B)},N=function(B){m(I,A,B,A)},w=function(){try{y.resolve(s(a(g.next,I))).then(function(B){try{if(s(B).done)g.done=!0,E(h(void 0,!0));else{var C=B.value;try{var L=b(C,g.counter++),Z=function(te){te?E(h(C,!1)):w()};u(L)?y.resolve(L).then(Z,N):Z(L)}catch(te){N(te)}}}catch(te){A(te)}},A)}catch(B){A(B)}};w()})});o({target:"AsyncIterator",proto:!0,real:!0},{filter:function(g){return new p(v(this),{predicate:r(g)})}})},31672:function(c,l,e){"use strict";var o=e(82109),a=e(12269).find;o({target:"AsyncIterator",proto:!0,real:!0},{find:function(s){return a(this,s)}})},74326:function(c,l,e){"use strict";var o=e(82109),a=e(46916),r=e(19662),s=e(19670),u=e(70111),v=e(24942),d=e(45348),h=e(76178),m=e(62617),p=e(21753),y=d(function(g){var I=this,b=I.iterator,E=I.mapper;return new g(function(R,A){var N=function(L){I.done=!0,A(L)},w=function(L){p(b,N,L,N)},B=function(){try{g.resolve(s(a(I.next,b))).then(function(L){try{if(s(L).done)I.done=!0,R(h(void 0,!0));else{var Z=L.value;try{var te=E(Z,I.counter++),ee=function(_){try{I.inner=m(_),C()}catch(de){w(de)}};u(te)?g.resolve(te).then(ee,w):ee(te)}catch(_){w(_)}}}catch(_){N(_)}},N)}catch(L){N(L)}},C=function(){var L=I.inner;if(L)try{g.resolve(s(a(L.next,L.iterator))).then(function(Z){try{s(Z).done?(I.inner=null,B()):R(h(Z.value,!1))}catch(te){w(te)}},w)}catch(Z){w(Z)}else B()};C()})});o({target:"AsyncIterator",proto:!0,real:!0},{flatMap:function(I){return new y(v(this),{mapper:r(I),inner:null})}})},15581:function(c,l,e){"use strict";var o=e(82109),a=e(12269).forEach;o({target:"AsyncIterator",proto:!0,real:!0},{forEach:function(s){return a(this,s)}})},78631:function(c,l,e){var o=e(82109),a=e(47908),r=e(47976),s=e(62617),u=e(66462),v=e(86221);o({target:"AsyncIterator",stat:!0},{from:function(h){var m=s(typeof h=="string"?a(h):h);return r(u,m.iterator)?m.iterator:new v(m)}})},48746:function(c,l,e){var o=e(82109),a=e(47520);o({target:"AsyncIterator",proto:!0,real:!0,forced:!0},{indexed:a})},57640:function(c,l,e){var o=e(82109),a=e(13232);o({target:"AsyncIterator",proto:!0,real:!0},{map:a})},25387:function(c,l,e){"use strict";var o=e(82109),a=e(46916),r=e(19662),s=e(19670),u=e(70111),v=e(35005),d=e(24942),h=e(21753),m=v("Promise"),p=TypeError;o({target:"AsyncIterator",proto:!0,real:!0},{reduce:function(g){var I=d(this),b=I.iterator,E=I.next,R=arguments.length<2,A=R?void 0:arguments[1],N=0;return r(g),new m(function(w,B){var C=function(Z){h(b,B,Z,B)},L=function(){try{m.resolve(s(a(E,b))).then(function(Z){try{if(s(Z).done)R?B(p("Reduce of empty iterator with no initial value")):w(A);else{var te=Z.value;if(R)R=!1,A=te,L();else try{var ee=g(A,te,N),_=function(de){A=de,L()};u(ee)?m.resolve(ee).then(_,C):_(ee)}catch(de){C(de)}}N++}catch(de){B(de)}},B)}catch(Z){B(Z)}};L()})}})},64211:function(c,l,e){"use strict";var o=e(82109),a=e(12269).some;o({target:"AsyncIterator",proto:!0,real:!0},{some:function(s){return a(this,s)}})},12771:function(c,l,e){"use strict";var o=e(82109),a=e(46916),r=e(19670),s=e(24942),u=e(66336),v=e(73002),d=e(45348),h=e(76178),m=d(function(p){var y=this,g=y.iterator,I;if(!y.remaining--){var b=h(void 0,!0);return y.done=!0,I=g.return,I!==void 0?p.resolve(a(I,g,void 0)).then(function(){return b}):b}return p.resolve(a(y.next,g)).then(function(E){return r(E).done?(y.done=!0,h(void 0,!0)):h(E.value,!1)}).then(null,function(E){throw y.done=!0,E})});o({target:"AsyncIterator",proto:!0,real:!0},{take:function(y){return new m(s(this),{remaining:v(u(+y))})}})},62962:function(c,l,e){"use strict";var o=e(82109),a=e(12269).toArray;o({target:"AsyncIterator",proto:!0,real:!0},{toArray:function(){return a(this,void 0,[])}})},71790:function(c,l,e){"use strict";var o=e(82109),a=e(80430);typeof BigInt=="function"&&o({target:"BigInt",stat:!0,forced:!0},{range:function(s,u,v){return new a(s,u,v,"bigint",BigInt(0),BigInt(1))}})},51568:function(c,l,e){var o=e(82109),a=e(22104),r=e(10313),s=e(35005),u=e(70030),v=Object,d=function(){var h=s("Object","freeze");return h?h(u(null)):u(null)};o({global:!0,forced:!0},{compositeKey:function(){return a(r,v,arguments).get("object",d)}})},26349:function(c,l,e){var o=e(82109),a=e(10313),r=e(35005),s=e(22104);o({global:!0,forced:!0},{compositeSymbol:function(){return arguments.length==1&&typeof arguments[0]=="string"?r("Symbol").for(arguments[0]):s(a,null,arguments).get("symbol",r("Symbol"))}})},30800:function(c,l,e){"use strict";var o=e(82109),a=e(19781),r=e(35005),s=e(19662),u=e(25787),v=e(98052),d=e(89190),h=e(47045),m=e(5112),p=e(29909),y=e(8557),g=r("SuppressedError"),I=ReferenceError,b=m("dispose"),E=m("toStringTag"),R="DisposableStack",A=p.set,N=p.getterFor(R),w="sync-dispose",B="disposed",C="pending",L=R+" already disposed",Z=function(){A(u(this,te),{type:R,state:C,stack:[]}),a||(this.disposed=!1)},te=Z.prototype;d(te,{dispose:function(){var _=N(this);if(_.state!=B){_.state=B,a||(this.disposed=!0);for(var de=_.stack,be=de.length,Te=!1,ie;be;){var Q=de[--be];de[be]=null;try{Q()}catch(Y){Te?ie=new g(Y,ie):(Te=!0,ie=Y)}}if(_.stack=null,Te)throw ie}},use:function(_){var de=N(this);if(de.state==B)throw I(L);return y(de,_,w),_},adopt:function(_,de){var be=N(this);if(be.state==B)throw I(L);return s(de),y(be,void 0,w,function(){de(_)}),_},defer:function(_){var de=N(this);if(de.state==B)throw I(L);s(_),y(de,void 0,w,_)},move:function(){var _=N(this);if(_.state==B)throw I(L);var de=new Z;return N(de).stack=_.stack,_.stack=[],de}}),a&&h(te,"disposed",{configurable:!0,get:function(){return N(this).state==B}}),v(te,b,te.dispose,{name:"dispose"}),v(te,E,R,{nonWritable:!0}),o({global:!0,constructor:!0},{DisposableStack:Z})},48580:function(c,l,e){var o=e(82109),a=e(55040);o({target:"Function",proto:!0,forced:!0},{demethodize:a})},67427:function(c,l,e){var o=e(82109),a=e(1702),r=e(60614),s=e(42788),u=e(92597),v=e(19781),d=Object.getOwnPropertyDescriptor,h=/^\s*class\b/,m=a(h.exec),p=function(y){try{if(!v||!m(h,s(y)))return!1}catch(I){}var g=d(y,"prototype");return!!g&&u(g,"writable")&&!g.writable};o({target:"Function",stat:!0,sham:!0,forced:!0},{isCallable:function(g){return r(g)&&!p(g)}})},32279:function(c,l,e){var o=e(82109),a=e(4411);o({target:"Function",stat:!0,forced:!0},{isConstructor:a})},13384:function(c,l,e){var o=e(82109),a=e(55040);o({target:"Function",proto:!0,forced:!0,name:"demethodize"},{unThis:a})},85567:function(c,l,e){var o=e(82109),a=e(14323);o({target:"Iterator",name:"indexed",proto:!0,real:!0,forced:!0},{asIndexedPairs:a})},2490:function(c,l,e){"use strict";var o=e(82109),a=e(17854),r=e(25787),s=e(60614),u=e(68880),v=e(47293),d=e(92597),h=e(5112),m=e(13383).IteratorPrototype,p=e(31913),y=h("toStringTag"),g=a.Iterator,I=p||!s(g)||g.prototype!==m||!v(function(){g({})}),b=function(){r(this,m)};d(m,y)||u(m,y,"Iterator"),(I||!d(m,"constructor")||m.constructor===Object)&&u(m,"constructor",b),b.prototype=m,o({global:!0,constructor:!0,forced:I},{Iterator:b})},18359:function(c,l,e){"use strict";var o=e(46916),a=e(98052),r=e(58173),s=e(92597),u=e(5112),v=e(13383).IteratorPrototype,d=u("dispose");s(v,d)||a(v,d,function(){var h=r(this,"return");h&&o(h,this)})},5332:function(c,l,e){"use strict";var o=e(82109),a=e(46916),r=e(19670),s=e(24942),u=e(66336),v=e(73002),d=e(54956),h=d(function(){for(var m=this.iterator,p=this.next,y,g;this.remaining;)if(this.remaining--,y=r(a(p,m)),g=this.done=!!y.done,g)return;if(y=r(a(p,m)),g=this.done=!!y.done,!g)return y.value});o({target:"Iterator",proto:!0,real:!0},{drop:function(p){return new h(s(this),{remaining:v(u(+p))})}})},79433:function(c,l,e){"use strict";var o=e(82109),a=e(20408),r=e(19662),s=e(24942);o({target:"Iterator",proto:!0,real:!0},{every:function(v){var d=s(this),h=0;return r(v),!a(d,function(m,p){if(!v(m,h++))return p()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},59849:function(c,l,e){"use strict";var o=e(82109),a=e(46916),r=e(19662),s=e(19670),u=e(24942),v=e(54956),d=e(53411),h=v(function(){for(var m=this.iterator,p=this.predicate,y=this.next,g,I,b;;){if(g=s(a(y,m)),I=this.done=!!g.done,I)return;if(b=g.value,d(m,p,[b,this.counter++],!0))return b}});o({target:"Iterator",proto:!0,real:!0},{filter:function(p){return new h(u(this),{predicate:r(p)})}})},59461:function(c,l,e){"use strict";var o=e(82109),a=e(20408),r=e(19662),s=e(24942);o({target:"Iterator",proto:!0,real:!0},{find:function(v){var d=s(this),h=0;return r(v),a(d,function(m,p){if(v(m,h++))return p(m)},{IS_RECORD:!0,INTERRUPTED:!0}).result}})},82499:function(c,l,e){"use strict";var o=e(82109),a=e(46916),r=e(19662),s=e(19670),u=e(24942),v=e(72897),d=e(54956),h=e(99212),m=d(function(){for(var p=this.iterator,y=this.mapper,g,I;;){if(I=this.inner)try{if(g=s(a(I.next,I.iterator)),!g.done)return g.value;this.inner=null}catch(b){h(p,"throw",b)}if(g=s(a(this.next,p)),this.done=!!g.done)return;try{this.inner=v(y(g.value,this.counter++))}catch(b){h(p,"throw",b)}}});o({target:"Iterator",proto:!0,real:!0},{flatMap:function(y){return new m(u(this),{mapper:r(y),inner:null})}})},34514:function(c,l,e){"use strict";var o=e(82109),a=e(20408),r=e(19662),s=e(24942);o({target:"Iterator",proto:!0,real:!0},{forEach:function(v){var d=s(this),h=0;r(v),a(d,function(m){v(m,h++)},{IS_RECORD:!0})}})},26877:function(c,l,e){var o=e(82109),a=e(46916),r=e(47908),s=e(47976),u=e(13383).IteratorPrototype,v=e(54956),d=e(72897),h=v(function(){return a(this.next,this.iterator)},!0);o({target:"Iterator",stat:!0},{from:function(p){var y=d(typeof p=="string"?r(p):p);return s(u,y.iterator)?y.iterator:new h(y)}})},64994:function(c,l,e){var o=e(82109),a=e(14323);o({target:"Iterator",proto:!0,real:!0,forced:!0},{indexed:a})},9924:function(c,l,e){var o=e(82109),a=e(20487);o({target:"Iterator",proto:!0,real:!0},{map:a})},64411:function(c,l,e){"use strict";var o=e(82109),a=e(80430),r=TypeError;o({target:"Iterator",stat:!0,forced:!0},{range:function(u,v,d){if(typeof u=="number")return new a(u,v,d,"number",0,1);if(typeof u=="bigint")return new a(u,v,d,"bigint",BigInt(0),BigInt(1));throw r("Incorrect Iterator.range arguments")}})},72608:function(c,l,e){"use strict";var o=e(82109),a=e(20408),r=e(19662),s=e(24942),u=TypeError;o({target:"Iterator",proto:!0,real:!0},{reduce:function(d){var h=s(this);r(d);var m=arguments.length<2,p=m?void 0:arguments[1],y=0;if(a(h,function(g){m?(m=!1,p=g):p=d(p,g,y),y++},{IS_RECORD:!0}),m)throw u("Reduce of empty iterator with no initial value");return p}})},41874:function(c,l,e){"use strict";var o=e(82109),a=e(20408),r=e(19662),s=e(24942);o({target:"Iterator",proto:!0,real:!0},{some:function(v){var d=s(this),h=0;return r(v),a(d,function(m,p){if(v(m,h++))return p()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},66043:function(c,l,e){"use strict";var o=e(82109),a=e(46916),r=e(19670),s=e(24942),u=e(66336),v=e(73002),d=e(54956),h=e(99212),m=d(function(){var p=this.iterator;if(!this.remaining--)return this.done=!0,h(p,"normal",void 0);var y=r(a(this.next,p)),g=this.done=!!y.done;if(!g)return y.value});o({target:"Iterator",proto:!0,real:!0},{take:function(y){return new m(s(this),{remaining:v(u(+y))})}})},23748:function(c,l,e){"use strict";var o=e(82109),a=e(20408),r=e(24942),s=[].push;o({target:"Iterator",proto:!0,real:!0},{toArray:function(){var v=[];return a(r(this),s,{that:v,IS_RECORD:!0}),v}})},71501:function(c,l,e){"use strict";var o=e(82109),a=e(28091),r=e(86221),s=e(24942);o({target:"Iterator",proto:!0,real:!0},{toAsync:function(){return new r(s(new a(s(this))))}})},60855:function(c,l,e){var o=e(82109),a=e(80363),r=e(73633);o({target:"JSON",stat:!0,forced:!a},{isRawJSON:r})},43847:function(c,l,e){"use strict";var o=e(82109),a=e(19781),r=e(17854),s=e(35005),u=e(1702),v=e(46916),d=e(60614),h=e(70111),m=e(43157),p=e(92597),y=e(41340),g=e(26244),I=e(86135),b=e(47293),E=e(18832),R=e(36293),A=r.JSON,N=r.Number,w=r.SyntaxError,B=A&&A.parse,C=s("Object","keys"),L=Object.getOwnPropertyDescriptor,Z=u("".charAt),te=u("".slice),ee=u(/./.exec),_=u([].push),de=/^\d$/,be=/^[1-9]$/,Te=/^(-|\d)$/,ie=/^[\t\n\r ]$/,Q=0,Y=1,k=function(J,P){J=y(J);var $=new D(J,0,""),H=$.parse(),q=H.value,ae=$.skip(ie,H.end);if(ae<J.length)throw w('Unexpected extra character: "'+Z(J,ae)+'" after the parsed data at: '+ae);return d(P)?K({"":q},"",P,H):q},K=function(J,P,$,H){var q=J[P],ae=H&&q===H.value,Ce=ae&&typeof H.source=="string"?{source:H.source}:{},Le,Xe,Ze,je,Ye;if(h(q)){var oe=m(q),fe=ae?H.nodes:oe?[]:{};if(oe)for(Le=fe.length,Ze=g(q),je=0;je<Ze;je++)re(q,je,K(q,""+je,$,je<Le?fe[je]:void 0));else for(Xe=C(q),Ze=g(Xe),je=0;je<Ze;je++)Ye=Xe[je],re(q,Ye,K(q,Ye,$,p(fe,Ye)?fe[Ye]:void 0))}return v($,J,P,q,Ce)},re=function(J,P,$){if(a){var H=L(J,P);if(H&&!H.configurable)return}$===void 0?delete J[P]:I(J,P,$)},T=function(J,P,$,H){this.value=J,this.end=P,this.source=$,this.nodes=H},D=function(J,P){this.source=J,this.index=P};D.prototype={fork:function(J){return new D(this.source,J)},parse:function(){var J=this.source,P=this.skip(ie,this.index),$=this.fork(P),H=Z(J,P),q;if(ee(Te,H))q=$.number();else switch(H){case"{":q=$.object();break;case"[":q=$.array();break;case'"':q=$.string();break;case"t":q=$.keyword(!0);break;case"f":q=$.keyword(!1);break;case"n":q=$.keyword(null);break;default:throw w('Unexpected character: "'+H+'" at: '+P)}return q},node:function(J,P,$,H,q){return new T(P,H,J?null:te(this.source,$,H),q)},object:function(){for(var J=this.source,P=this.index+1,$=!1,H={},q={};P<J.length;){if(P=this.until(['"',"}"],P),Z(J,P)=="}"&&!$){P++;break}var ae=this.fork(P).string(),Ce=ae.value;P=ae.end,P=this.until([":"],P)+1,P=this.skip(ie,P),ae=this.fork(P).parse(),I(q,Ce,ae),I(H,Ce,ae.value),P=this.until([",","}"],ae.end);var Le=Z(J,P);if(Le==",")$=!0,P++;else if(Le=="}"){P++;break}}return this.node(Y,H,this.index,P,q)},array:function(){for(var J=this.source,P=this.index+1,$=!1,H=[],q=[];P<J.length;){if(P=this.skip(ie,P),Z(J,P)=="]"&&!$){P++;break}var ae=this.fork(P).parse();if(_(q,ae),_(H,ae.value),P=this.until([",","]"],ae.end),Z(J,P)==",")$=!0,P++;else if(Z(J,P)=="]"){P++;break}}return this.node(Y,H,this.index,P,q)},string:function(){var J=this.index,P=E(this.source,this.index+1);return this.node(Q,P.value,J,P.end)},number:function(){var J=this.source,P=this.index,$=P;if(Z(J,$)=="-"&&$++,Z(J,$)=="0")$++;else if(ee(be,Z(J,$)))$=this.skip(de,++$);else throw w("Failed to parse number at: "+$);if(Z(J,$)=="."&&($=this.skip(de,++$)),Z(J,$)=="e"||Z(J,$)=="E"){$++,(Z(J,$)=="+"||Z(J,$)=="-")&&$++;var H=$;if($=this.skip(de,$),H==$)throw w("Failed to parse number's exponent value at: "+$)}return this.node(Q,N(te(J,P,$)),P,$)},keyword:function(J){var P=""+J,$=this.index,H=$+P.length;if(te(this.source,$,H)!=P)throw w("Failed to parse value at: "+$);return this.node(Q,J,$,H)},skip:function(J,P){for(var $=this.source;P<$.length&&ee(J,Z($,P));P++);return P},until:function(J,P){P=this.skip(ie,P);for(var $=Z(this.source,P),H=0;H<J.length;H++)if(J[H]==$)return P;throw w('Unexpected character: "'+$+'" at: '+P)}};var V=b(function(){var J="9007199254740993",P;return B(J,function($,H,q){P=q.source}),P!==J}),le=R&&!b(function(){return 1/B("-0 	")!==-1/0});o({target:"JSON",stat:!0,forced:V},{parse:function(P,$){return le&&!d($)?B(P):k(P,$)}})},38564:function(c,l,e){"use strict";var o=e(82109),a=e(76677),r=e(80363),s=e(35005),u=e(46916),v=e(1702),d=e(60614),h=e(73633),m=e(41340),p=e(86135),y=e(18832),g=e(88044),I=e(69711),b=e(29909).set,E=String,R=SyntaxError,A=s("JSON","parse"),N=s("JSON","stringify"),w=s("Object","create"),B=s("Object","freeze"),C=v("".charAt),L=v("".slice),Z=v(/./.exec),te=v([].push),ee=I(),_=ee.length,de="Unacceptable as raw JSON",be=/^[\t\n\r ]$/;o({target:"JSON",stat:!0,forced:!r},{rawJSON:function(ie){var Q=m(ie);if(Q==""||Z(be,C(Q,0))||Z(be,C(Q,Q.length-1)))throw R(de);var Y=A(Q);if(typeof Y=="object"&&Y!==null)throw R(de);var k=w(null);return b(k,{type:"RawJSON"}),p(k,"rawJSON",Q),a?B(k):k}}),N&&o({target:"JSON",stat:!0,arity:3,forced:!r},{stringify:function(ie,Q,Y){var k=g(Q),K=[],re=N(ie,function($,H){var q=d(k)?u(k,this,E($),H):H;return h(q)?ee+(te(K,q.rawJSON)-1):q},Y);if(typeof re!="string")return re;for(var T="",D=re.length,V=0;V<D;V++){var le=C(re,V);if(le=='"'){var J=y(re,++V).end-1,P=L(re,V,J);T+=L(P,0,_)==ee?K[L(P,_)]:'"'+P+'"',V=J}else T+=le}return T}})},10072:function(c,l,e){"use strict";var o=e(82109),a=e(40027),r=e(75706).remove;o({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var u=a(this),v=!0,d,h=0,m=arguments.length;h<m;h++)d=r(u,arguments[h]),v=v&&d;return!!v}})},23042:function(c,l,e){"use strict";var o=e(82109),a=e(40027),r=e(75706),s=r.get,u=r.has,v=r.set;o({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(h,m){var p=a(this),y,g;return u(p,h)?(y=s(p,h),"update"in m&&(y=m.update(y,h,p),v(p,h,y)),y):(g=m.insert(h,p),v(p,h,g),g)}})},99137:function(c,l,e){"use strict";var o=e(82109),a=e(49974),r=e(40027),s=e(14995);o({target:"Map",proto:!0,real:!0,forced:!0},{every:function(v){var d=r(this),h=a(v,arguments.length>1?arguments[1]:void 0);return s(d,function(m,p){if(!h(m,p,d))return!1},!0)!==!1}})},71957:function(c,l,e){"use strict";var o=e(82109),a=e(49974),r=e(40027),s=e(75706),u=e(14995),v=s.Map,d=s.set;o({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(m){var p=r(this),y=a(m,arguments.length>1?arguments[1]:void 0),g=new v;return u(p,function(I,b){y(I,b,p)&&d(g,b,I)}),g}})},103:function(c,l,e){"use strict";var o=e(82109),a=e(49974),r=e(40027),s=e(14995);o({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(v){var d=r(this),h=a(v,arguments.length>1?arguments[1]:void 0),m=s(d,function(p,y){if(h(p,y,d))return{key:y}},!0);return m&&m.key}})},96306:function(c,l,e){"use strict";var o=e(82109),a=e(49974),r=e(40027),s=e(14995);o({target:"Map",proto:!0,real:!0,forced:!0},{find:function(v){var d=r(this),h=a(v,arguments.length>1?arguments[1]:void 0),m=s(d,function(p,y){if(h(p,y,d))return{value:p}},!0);return m&&m.value}})},8582:function(c,l,e){var o=e(82109),a=e(27296);o({target:"Map",stat:!0,forced:!0},{from:a})},90618:function(c,l,e){"use strict";var o=e(82109),a=e(46916),r=e(1702),s=e(60614),u=e(19662),v=e(20408),d=e(75706).Map,h=r([].push);o({target:"Map",stat:!0,forced:!0},{groupBy:function(p,y){var g=s(this)?this:d,I=new g;u(y);var b=u(I.has),E=u(I.get),R=u(I.set);return v(p,function(A){var N=y(A);a(b,I,N)?h(a(E,I,N),A):a(R,I,N,[A])}),I}})},74592:function(c,l,e){"use strict";var o=e(82109),a=e(46465),r=e(40027),s=e(14995);o({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(v){return s(r(this),function(d){if(a(d,v))return!0},!0)===!0}})},88440:function(c,l,e){"use strict";var o=e(82109),a=e(46916),r=e(20408),s=e(60614),u=e(19662),v=e(75706).Map;o({target:"Map",stat:!0,forced:!0},{keyBy:function(h,m){var p=s(this)?this:v,y=new p;u(m);var g=u(y.set);return r(h,function(I){a(g,y,m(I),I)}),y}})},58276:function(c,l,e){"use strict";var o=e(82109),a=e(40027),r=e(14995);o({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(u){var v=r(a(this),function(d,h){if(d===u)return{key:h}},!0);return v&&v.key}})},35082:function(c,l,e){"use strict";var o=e(82109),a=e(49974),r=e(40027),s=e(75706),u=e(14995),v=s.Map,d=s.set;o({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(m){var p=r(this),y=a(m,arguments.length>1?arguments[1]:void 0),g=new v;return u(p,function(I,b){d(g,y(I,b,p),I)}),g}})},12813:function(c,l,e){"use strict";var o=e(82109),a=e(49974),r=e(40027),s=e(75706),u=e(14995),v=s.Map,d=s.set;o({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(m){var p=r(this),y=a(m,arguments.length>1?arguments[1]:void 0),g=new v;return u(p,function(I,b){d(g,b,y(I,b,p))}),g}})},18222:function(c,l,e){"use strict";var o=e(82109),a=e(40027),r=e(20408),s=e(75706).set;o({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(v){for(var d=a(this),h=arguments.length,m=0;m<h;)r(arguments[m++],function(p,y){s(d,p,y)},{AS_ENTRIES:!0});return d}})},24838:function(c,l,e){var o=e(82109),a=e(82044);o({target:"Map",stat:!0,forced:!0},{of:a})},38563:function(c,l,e){"use strict";var o=e(82109),a=e(19662),r=e(40027),s=e(14995),u=TypeError;o({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(d){var h=r(this),m=arguments.length<2,p=m?void 0:arguments[1];if(a(d),s(h,function(y,g){m?(m=!1,p=y):p=d(p,y,g,h)}),m)throw u("Reduce of empty map with no initial value");return p}})},50336:function(c,l,e){"use strict";var o=e(82109),a=e(49974),r=e(40027),s=e(14995);o({target:"Map",proto:!0,real:!0,forced:!0},{some:function(v){var d=r(this),h=a(v,arguments.length>1?arguments[1]:void 0);return s(d,function(m,p){if(h(m,p,d))return!0},!0)===!0}})},74442:function(c,l,e){"use strict";var o=e(82109),a=e(8154);o({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:a})},7512:function(c,l,e){"use strict";var o=e(82109),a=e(19662),r=e(40027),s=e(75706),u=TypeError,v=s.get,d=s.has,h=s.set;o({target:"Map",proto:!0,real:!0,forced:!0},{update:function(p,y){var g=r(this),I=arguments.length;a(y);var b=d(g,p);if(!b&&I<3)throw u("Updating absent value");var E=b?v(g,p):a(I>2?arguments[2]:void 0)(p,g);return h(g,p,y(E,p,g)),g}})},87713:function(c,l,e){"use strict";var o=e(82109),a=e(8154);o({target:"Map",proto:!0,real:!0,forced:!0},{upsert:a})},46603:function(c,l,e){var o=e(82109),a=Math.min,r=Math.max;o({target:"Math",stat:!0,forced:!0},{clamp:function(u,v,d){return a(d,r(v,u))}})},70100:function(c,l,e){var o=e(82109);o({target:"Math",stat:!0,nonConfigurable:!0,nonWritable:!0},{DEG_PER_RAD:Math.PI/180})},10490:function(c,l,e){var o=e(82109),a=180/Math.PI;o({target:"Math",stat:!0,forced:!0},{degrees:function(s){return s*a}})},13187:function(c,l,e){var o=e(82109),a=e(47103),r=e(26130);o({target:"Math",stat:!0,forced:!0},{fscale:function(u,v,d,h,m){return r(a(u,v,d,h,m))}})},60092:function(c,l,e){var o=e(82109);o({target:"Math",stat:!0,forced:!0},{iaddh:function(r,s,u,v){var d=r>>>0,h=s>>>0,m=u>>>0;return h+(v>>>0)+((d&m|(d|m)&~(d+m>>>0))>>>31)|0}})},19041:function(c,l,e){var o=e(82109);o({target:"Math",stat:!0,forced:!0},{imulh:function(r,s){var u=65535,v=+r,d=+s,h=v&u,m=d&u,p=v>>16,y=d>>16,g=(p*m>>>0)+(h*m>>>16);return p*y+(g>>16)+((h*y>>>0)+(g&u)>>16)}})},30666:function(c,l,e){var o=e(82109);o({target:"Math",stat:!0,forced:!0},{isubh:function(r,s,u,v){var d=r>>>0,h=s>>>0,m=u>>>0;return h-(v>>>0)-((~d&m|~(d^m)&d-m>>>0)>>>31)|0}})},51638:function(c,l,e){var o=e(82109);o({target:"Math",stat:!0,nonConfigurable:!0,nonWritable:!0},{RAD_PER_DEG:180/Math.PI})},62975:function(c,l,e){var o=e(82109),a=Math.PI/180;o({target:"Math",stat:!0,forced:!0},{radians:function(s){return s*a}})},15728:function(c,l,e){var o=e(82109),a=e(47103);o({target:"Math",stat:!0,forced:!0},{scale:a})},46056:function(c,l,e){var o=e(82109),a=e(19670),r=e(77023),s=e(63061),u=e(76178),v=e(29909),d="Seeded Random",h=d+" Generator",m='Math.seededPRNG() argument should have a "seed" field with a finite value.',p=v.set,y=v.getterFor(h),g=TypeError,I=s(function(E){p(this,{type:h,seed:E%2147483647})},d,function(){var E=y(this),R=E.seed=(E.seed*1103515245+12345)%2147483647;return u((R&1073741823)/1073741823,!1)});o({target:"Math",stat:!0,forced:!0},{seededPRNG:function(E){var R=a(E).seed;if(!r(R))throw g(m);return new I(R)}})},44299:function(c,l,e){var o=e(82109);o({target:"Math",stat:!0,forced:!0},{signbit:function(r){var s=+r;return s==s&&s==0?1/s==-1/0:s<0}})},5162:function(c,l,e){var o=e(82109);o({target:"Math",stat:!0,forced:!0},{umulh:function(r,s){var u=65535,v=+r,d=+s,h=v&u,m=d&u,p=v>>>16,y=d>>>16,g=(p*m>>>0)+(h*m>>>16);return p*y+(g>>>16)+((h*y>>>0)+(g&u)>>>16)}})},50292:function(c,l,e){"use strict";var o=e(82109),a=e(1702),r=e(19303),s=e(83009),u="Invalid number representation",v="Invalid radix",d=RangeError,h=SyntaxError,m=TypeError,p=/^[\da-z]+$/,y=a("".charAt),g=a(p.exec),I=a(1 .toString),b=a("".slice);o({target:"Number",stat:!0,forced:!0},{fromString:function(R,A){var N=1,w,B;if(typeof R!="string")throw m(u);if(!R.length||y(R,0)=="-"&&(N=-1,R=b(R,1),!R.length))throw h(u);if(w=A===void 0?10:r(A),w<2||w>36)throw d(v);if(!g(p,R)||I(B=s(R,w),w)!==R)throw h(u);return N*B}})},29427:function(c,l,e){"use strict";var o=e(82109),a=e(80430);o({target:"Number",stat:!0,forced:!0},{range:function(s,u,v){return new a(s,u,v,"number",0,1)}})},99964:function(c,l,e){"use strict";var o=e(82109),a=e(60996);o({target:"Object",stat:!0,forced:!0},{iterateEntries:function(s){return new a(s,"entries")}})},75238:function(c,l,e){"use strict";var o=e(82109),a=e(60996);o({target:"Object",stat:!0,forced:!0},{iterateKeys:function(s){return new a(s,"keys")}})},4987:function(c,l,e){"use strict";var o=e(82109),a=e(60996);o({target:"Object",stat:!0,forced:!0},{iterateValues:function(s){return new a(s,"values")}})},39769:function(c,l,e){"use strict";var o=e(82109),a=e(46916),r=e(19781),s=e(96340),u=e(19662),v=e(19670),d=e(25787),h=e(60614),m=e(68554),p=e(70111),y=e(58173),g=e(98052),I=e(89190),b=e(47045),E=e(842),R=e(5112),A=e(29909),N=e(90515),w=R("observable"),B="Observable",C="Subscription",L="SubscriptionObserver",Z=A.getterFor,te=A.set,ee=Z(B),_=Z(C),de=Z(L),be=function(k){this.observer=v(k),this.cleanup=void 0,this.subscriptionObserver=void 0};be.prototype={type:C,clean:function(){var k=this.cleanup;if(k){this.cleanup=void 0;try{k()}catch(K){E(K)}}},close:function(){if(!r){var k=this.facade,K=this.subscriptionObserver;k.closed=!0,K&&(K.closed=!0)}this.observer=void 0},isClosed:function(){return this.observer===void 0}};var Te=function(k,K){var re=te(this,new be(k)),T;r||(this.closed=!1);try{(T=y(k,"start"))&&a(T,k,this)}catch(J){E(J)}if(!re.isClosed()){var D=re.subscriptionObserver=new ie(re);try{var V=K(D),le=V;m(V)||(re.cleanup=h(V.unsubscribe)?function(){le.unsubscribe()}:u(V))}catch(J){D.error(J);return}re.isClosed()&&re.clean()}};Te.prototype=I({},{unsubscribe:function(){var K=_(this);K.isClosed()||(K.close(),K.clean())}}),r&&b(Te.prototype,"closed",{configurable:!0,get:function(){return _(this).isClosed()}});var ie=function(k){te(this,{type:L,subscriptionState:k}),r||(this.closed=!1)};ie.prototype=I({},{next:function(K){var re=de(this).subscriptionState;if(!re.isClosed()){var T=re.observer;try{var D=y(T,"next");D&&a(D,T,K)}catch(V){E(V)}}},error:function(K){var re=de(this).subscriptionState;if(!re.isClosed()){var T=re.observer;re.close();try{var D=y(T,"error");D?a(D,T,K):E(K)}catch(V){E(V)}re.clean()}},complete:function(){var K=de(this).subscriptionState;if(!K.isClosed()){var re=K.observer;K.close();try{var T=y(re,"complete");T&&a(T,re)}catch(D){E(D)}K.clean()}}}),r&&b(ie.prototype,"closed",{configurable:!0,get:function(){return de(this).subscriptionState.isClosed()}});var Q=function(K){d(this,Y),te(this,{type:B,subscriber:u(K)})},Y=Q.prototype;I(Y,{subscribe:function(K){var re=arguments.length;return new Te(h(K)?{next:K,error:re>1?arguments[1]:void 0,complete:re>2?arguments[2]:void 0}:p(K)?K:{},ee(this).subscriber)}}),g(Y,w,function(){return this}),o({global:!0,constructor:!0,forced:N},{Observable:Q}),s(B)},93532:function(c,l,e){"use strict";var o=e(82109),a=e(35005),r=e(46916),s=e(19670),u=e(4411),v=e(18554),d=e(58173),h=e(20408),m=e(5112),p=e(90515),y=m("observable");o({target:"Observable",stat:!0,forced:p},{from:function(I){var b=u(this)?this:a("Observable"),E=d(s(I),y);if(E){var R=s(r(E,I));return R.constructor===b?R:new b(function(N){return R.subscribe(N)})}var A=v(I);return new b(function(N){h(A,function(w,B){if(N.next(w),N.closed)return B()},{IS_ITERATOR:!0,INTERRUPTED:!0}),N.complete()})}})},1025:function(c,l,e){e(39769),e(93532),e(88170)},88170:function(c,l,e){"use strict";var o=e(82109),a=e(35005),r=e(4411),s=e(90515),u=a("Array");o({target:"Observable",stat:!0,forced:s},{of:function(){for(var d=r(this)?this:a("Observable"),h=arguments.length,m=u(h),p=0;p<h;)m[p]=arguments[p++];return new d(function(y){for(var g=0;g<h;g++)if(y.next(m[g]),y.closed)return;y.complete()})}})},77479:function(c,l,e){"use strict";var o=e(82109),a=e(78523),r=e(12534);o({target:"Promise",stat:!0,forced:!0},{try:function(s){var u=a.f(this),v=r(s);return(v.error?u.reject:u.resolve)(v.value),u.promise}})},34582:function(c,l,e){var o=e(82109),a=e(38845),r=e(19670),s=a.toKey,u=a.set;o({target:"Reflect",stat:!0},{defineMetadata:function(d,h,m){var p=arguments.length<4?void 0:s(arguments[3]);u(d,h,r(m),p)}})},47896:function(c,l,e){var o=e(82109),a=e(38845),r=e(19670),s=a.toKey,u=a.getMap,v=a.store;o({target:"Reflect",stat:!0},{deleteMetadata:function(h,m){var p=arguments.length<3?void 0:s(arguments[2]),y=u(r(m),p,!1);if(y===void 0||!y.delete(h))return!1;if(y.size)return!0;var g=v.get(m);return g.delete(p),!!g.size||v.delete(m)}})},98558:function(c,l,e){var o=e(82109),a=e(1702),r=e(38845),s=e(19670),u=e(79518),v=e(60956),d=a(v),h=a([].concat),m=r.keys,p=r.toKey,y=function(g,I){var b=m(g,I),E=u(g);if(E===null)return b;var R=y(E,I);return R.length?b.length?d(h(b,R)):R:b};o({target:"Reflect",stat:!0},{getMetadataKeys:function(I){var b=arguments.length<2?void 0:p(arguments[1]);return y(s(I),b)}})},12647:function(c,l,e){var o=e(82109),a=e(38845),r=e(19670),s=e(79518),u=a.has,v=a.get,d=a.toKey,h=function(m,p,y){var g=u(m,p,y);if(g)return v(m,p,y);var I=s(p);return I!==null?h(m,I,y):void 0};o({target:"Reflect",stat:!0},{getMetadata:function(p,y){var g=arguments.length<3?void 0:d(arguments[2]);return h(p,r(y),g)}})},97507:function(c,l,e){var o=e(82109),a=e(38845),r=e(19670),s=a.keys,u=a.toKey;o({target:"Reflect",stat:!0},{getOwnMetadataKeys:function(d){var h=arguments.length<2?void 0:u(arguments[1]);return s(r(d),h)}})},84018:function(c,l,e){var o=e(82109),a=e(38845),r=e(19670),s=a.get,u=a.toKey;o({target:"Reflect",stat:!0},{getOwnMetadata:function(d,h){var m=arguments.length<3?void 0:u(arguments[2]);return s(d,r(h),m)}})},61605:function(c,l,e){var o=e(82109),a=e(38845),r=e(19670),s=e(79518),u=a.has,v=a.toKey,d=function(h,m,p){var y=u(h,m,p);if(y)return!0;var g=s(m);return g!==null?d(h,g,p):!1};o({target:"Reflect",stat:!0},{hasMetadata:function(m,p){var y=arguments.length<3?void 0:v(arguments[2]);return d(m,r(p),y)}})},49076:function(c,l,e){var o=e(82109),a=e(38845),r=e(19670),s=a.has,u=a.toKey;o({target:"Reflect",stat:!0},{hasOwnMetadata:function(d,h){var m=arguments.length<3?void 0:u(arguments[2]);return s(d,r(h),m)}})},34999:function(c,l,e){var o=e(82109),a=e(38845),r=e(19670),s=a.toKey,u=a.set;o({target:"Reflect",stat:!0},{metadata:function(d,h){return function(p,y){u(d,h,r(p),s(y))}}})},88921:function(c,l,e){"use strict";var o=e(82109),a=e(88999),r=e(79405).add;o({target:"Set",proto:!0,real:!0,forced:!0},{addAll:function(){for(var u=a(this),v=0,d=arguments.length;v<d;v++)r(u,arguments[v]);return u}})},96248:function(c,l,e){"use strict";var o=e(82109),a=e(88999),r=e(79405).remove;o({target:"Set",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var u=a(this),v=!0,d,h=0,m=arguments.length;h<m;h++)d=r(u,arguments[h]),v=v&&d;return!!v}})},13599:function(c,l,e){"use strict";var o=e(82109),a=e(46916),r=e(45965),s=e(37075);o({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(v){return a(s,this,r(v))}})},27561:function(c,l,e){var o=e(82109),a=e(37075),r=e(13831);o({target:"Set",proto:!0,real:!0,forced:!r("difference")},{difference:a})},11477:function(c,l,e){"use strict";var o=e(82109),a=e(49974),r=e(88999),s=e(87758);o({target:"Set",proto:!0,real:!0,forced:!0},{every:function(v){var d=r(this),h=a(v,arguments.length>1?arguments[1]:void 0);return s(d,function(m){if(!h(m,m,d))return!1},!0)!==!1}})},64362:function(c,l,e){"use strict";var o=e(82109),a=e(49974),r=e(88999),s=e(79405),u=e(87758),v=s.Set,d=s.add;o({target:"Set",proto:!0,real:!0,forced:!0},{filter:function(m){var p=r(this),y=a(m,arguments.length>1?arguments[1]:void 0),g=new v;return u(p,function(I){y(I,I,p)&&d(g,I)}),g}})},15389:function(c,l,e){"use strict";var o=e(82109),a=e(49974),r=e(88999),s=e(87758);o({target:"Set",proto:!0,real:!0,forced:!0},{find:function(v){var d=r(this),h=a(v,arguments.length>1?arguments[1]:void 0),m=s(d,function(p){if(h(p,p,d))return{value:p}},!0);return m&&m.value}})},46006:function(c,l,e){var o=e(82109),a=e(27296);o({target:"Set",stat:!0,forced:!0},{from:a})},90401:function(c,l,e){"use strict";var o=e(82109),a=e(46916),r=e(45965),s=e(81920);o({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(v){return a(s,this,r(v))}})},3440:function(c,l,e){var o=e(82109),a=e(81920),r=e(13831);o({target:"Set",proto:!0,real:!0,forced:!r("intersection")},{intersection:a})},45164:function(c,l,e){"use strict";var o=e(82109),a=e(46916),r=e(45965),s=e(78239);o({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(v){return a(s,this,r(v))}})},66244:function(c,l,e){var o=e(82109),a=e(78239),r=e(13831);o({target:"Set",proto:!0,real:!0,forced:!r("isDisjointFrom")},{isDisjointFrom:a})},91238:function(c,l,e){"use strict";var o=e(82109),a=e(46916),r=e(45965),s=e(49180);o({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(v){return a(s,this,r(v))}})},89772:function(c,l,e){var o=e(82109),a=e(49180),r=e(13831);o({target:"Set",proto:!0,real:!0,forced:!r("isSubsetOf")},{isSubsetOf:a})},54837:function(c,l,e){"use strict";var o=e(82109),a=e(46916),r=e(45965),s=e(10107);o({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(v){return a(s,this,r(v))}})},88910:function(c,l,e){var o=e(82109),a=e(10107),r=e(13831);o({target:"Set",proto:!0,real:!0,forced:!r("isSupersetOf")},{isSupersetOf:a})},87485:function(c,l,e){"use strict";var o=e(82109),a=e(1702),r=e(88999),s=e(87758),u=e(41340),v=a([].join),d=a([].push);o({target:"Set",proto:!0,real:!0,forced:!0},{join:function(m){var p=r(this),y=m===void 0?",":u(m),g=[];return s(p,function(I){d(g,I)}),v(g,y)}})},56767:function(c,l,e){"use strict";var o=e(82109),a=e(49974),r=e(88999),s=e(79405),u=e(87758),v=s.Set,d=s.add;o({target:"Set",proto:!0,real:!0,forced:!0},{map:function(m){var p=r(this),y=a(m,arguments.length>1?arguments[1]:void 0),g=new v;return u(p,function(I){d(g,y(I,I,p))}),g}})},69916:function(c,l,e){var o=e(82109),a=e(82044);o({target:"Set",stat:!0,forced:!0},{of:a})},76651:function(c,l,e){"use strict";var o=e(82109),a=e(19662),r=e(88999),s=e(87758),u=TypeError;o({target:"Set",proto:!0,real:!0,forced:!0},{reduce:function(d){var h=r(this),m=arguments.length<2,p=m?void 0:arguments[1];if(a(d),s(h,function(y){m?(m=!1,p=y):p=d(p,y,y,h)}),m)throw u("Reduce of empty set with no initial value");return p}})},61437:function(c,l,e){"use strict";var o=e(82109),a=e(49974),r=e(88999),s=e(87758);o({target:"Set",proto:!0,real:!0,forced:!0},{some:function(v){var d=r(this),h=a(v,arguments.length>1?arguments[1]:void 0);return s(d,function(m){if(h(m,m,d))return!0},!0)===!0}})},35285:function(c,l,e){"use strict";var o=e(82109),a=e(46916),r=e(45965),s=e(98506);o({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(v){return a(s,this,r(v))}})},63252:function(c,l,e){var o=e(82109),a=e(98506),r=e(13831);o({target:"Set",proto:!0,real:!0,forced:!r("symmetricDifference")},{symmetricDifference:a})},39865:function(c,l,e){"use strict";var o=e(82109),a=e(46916),r=e(45965),s=e(39391);o({target:"Set",proto:!0,real:!0,forced:!0},{union:function(v){return a(s,this,r(v))}})},17454:function(c,l,e){var o=e(82109),a=e(39391),r=e(13831);o({target:"Set",proto:!0,real:!0,forced:!r("union")},{union:a})},86035:function(c,l,e){"use strict";var o=e(82109),a=e(28710).charAt,r=e(84488),s=e(19303),u=e(41340);o({target:"String",proto:!0,forced:!0},{at:function(d){var h=u(r(this)),m=h.length,p=s(d),y=p>=0?p:m+p;return y<0||y>=m?void 0:a(h,y)}})},67501:function(c,l,e){"use strict";var o=e(82109),a=e(63061),r=e(76178),s=e(84488),u=e(41340),v=e(29909),d=e(28710),h=d.codeAt,m=d.charAt,p="String Iterator",y=v.set,g=v.getterFor(p),I=a(function(E){y(this,{type:p,string:E,index:0})},"String",function(){var E=g(this),R=E.string,A=E.index,N;return A>=R.length?r(void 0,!0):(N=m(R,A),E.index+=N.length,r({codePoint:h(N,0),position:A},!1))});o({target:"String",proto:!0,forced:!0},{codePoints:function(){return new I(u(s(this)))}})},50058:function(c,l,e){var o=e(82109),a=e(92386);o({target:"String",stat:!0,forced:!0},{cooked:a})},85576:function(c,l,e){"use strict";var o=e(76677),a=e(82109),r=e(72309),s=e(35005),u=e(56339),v=e(1702),d=e(22104),h=e(19670),m=e(47908),p=e(60614),y=e(26244),g=e(3070).f,I=e(41589),b=e(92386),E=e(70327),R=e(81361),A=s("WeakMap"),N=r("GlobalDedentRegistry",new A);N.has=N.has,N.get=N.get,N.set=N.set;var w=Array,B=TypeError,C=Object.freeze||Object,L=Object.isFrozen,Z=Math.min,te=v("".charAt),ee=v("".slice),_=v("".split),de=v(/./.exec),be=/([\n\u2028\u2029]|\r\n?)/g,Te=RegExp("^["+R+"]*"),ie=RegExp("[^"+R+"]"),Q="Invalid tag",Y="Invalid opening line",k="Invalid closing line",K=function(J){var P=J.raw;if(o&&!L(P))throw B("Raw template should be frozen");if(N.has(P))return N.get(P);var $=re(P),H=D($);return g(H,"raw",{value:C($)}),C(H),N.set(P,H),H},re=function(J){var P=m(J),$=y(P),H=w($),q=w($),ae=0,Ce,Le;if(!$)throw B(Q);for(;ae<$;ae++){var Xe=P[ae];if(typeof Xe=="string")H[ae]=_(Xe,be);else throw B(Q)}for(ae=0;ae<$;ae++){var Ze=ae+1===$;if(Ce=H[ae],ae===0){if(Ce.length===1||Ce[0].length>0)throw B(Y);Ce[1]=""}if(Ze){if(Ce.length===1||de(ie,Ce[Ce.length-1]))throw B(k);Ce[Ce.length-2]="",Ce[Ce.length-1]=""}for(var je=2;je<Ce.length;je+=2){var Ye=Ce[je],oe=je+1===Ce.length&&!Ze,fe=de(Te,Ye)[0];if(!oe&&fe.length===Ye.length){Ce[je]="";continue}Le=T(fe,Le)}}var pe=Le?Le.length:0;for(ae=0;ae<$;ae++){Ce=H[ae];for(var me=Ce[0],Pe=1;Pe<Ce.length;Pe+=2)me+=Ce[Pe]+ee(Ce[Pe+1],pe);q[ae]=me}return q},T=function(J,P){if(P===void 0||J===P)return J;for(var $=0,H=Z(J.length,P.length);$<H&&te(J,$)===te(P,$);$++);return ee(J,0,$)},D=function(J){for(var P=0,$=J.length,H=w($);P<$;P++)H[P]=E(J[P]);return H},V=function(J){return u(function(P){var $=I(arguments);return $[0]=K(h(P)),d(J,this,$)},"")},le=V(b);a({target:"String",stat:!0,forced:!0},{dedent:function(P){return h(P),p(P)?V(P):d(le,this,arguments)}})},98275:function(c,l,e){"use strict";var o=e(82109),a=e(1702),r=e(84488),s=e(41340),u=a("".charCodeAt);o({target:"String",proto:!0},{isWellFormed:function(){for(var d=s(r(this)),h=d.length,m=0;m<h;m++){var p=u(d,m);if((p&63488)==55296&&(p>=56320||++m>=h||(u(d,m)&64512)!=56320))return!1}return!0}})},71842:function(c,l,e){"use strict";var o=e(82109),a=e(46916),r=e(1702),s=e(84488),u=e(41340),v=e(47293),d=Array,h=r("".charAt),m=r("".charCodeAt),p=r([].join),y="".toWellFormed,g="\uFFFD",I=y&&v(function(){return a(y,1)!=="1"});o({target:"String",proto:!0,forced:I},{toWellFormed:function(){var E=u(s(this));if(I)return a(y,E);for(var R=E.length,A=d(R),N=0;N<R;N++){var w=m(E,N);(w&63488)!=55296?A[N]=h(E,N):w>=56320||N+1>=R||(m(E,N+1)&64512)!=56320?A[N]=g:(A[N]=h(E,N),A[++N]=h(E,N))}return p(A,"")}})},16586:function(c,l,e){"use strict";var o=e(82109),a=e(47976),r=e(79518),s=e(27674),u=e(99920),v=e(70030),d=e(68880),h=e(79114),m=e(5392),p=e(56277),y=e(5112),g=y("toStringTag"),I=Error,b=function(A,N,w){var B=a(E,this),C;return s?C=s(I(),B?r(this):E):(C=B?this:v(E),d(C,g,"Error")),w!==void 0&&d(C,"message",p(w)),m(C,b,C.stack,1),d(C,"error",A),d(C,"suppressed",N),C};s?s(b,I):u(b,I,{name:!0});var E=b.prototype=v(I.prototype,{constructor:h(1,b),message:h(1,""),name:h(1,"SuppressedError")});o({global:!0,constructor:!0,arity:3},{SuppressedError:b})},609:function(c,l,e){var o=e(26800);o("asyncDispose")},21568:function(c,l,e){var o=e(26800);o("dispose")},96431:function(c,l,e){var o=e(82109),a=e(35005),r=e(1702),s=a("Symbol"),u=s.keyFor,v=r(s.prototype.valueOf);o({target:"Symbol",stat:!0},{isRegistered:function(h){try{return u(v(h))!==void 0}catch(m){return!1}}})},40050:function(c,l,e){for(var o=e(82109),a=e(72309),r=e(35005),s=e(1702),u=e(52190),v=e(5112),d=r("Symbol"),h=d.isWellKnown,m=r("Object","getOwnPropertyNames"),p=s(d.prototype.valueOf),y=a("wks"),g=0,I=m(d),b=I.length;g<b;g++)try{var E=I[g];u(d[E])&&v(E)}catch(R){}o({target:"Symbol",stat:!0,forced:!0},{isWellKnown:function(A){if(h&&h(A))return!0;try{for(var N=p(A),w=0,B=m(y),C=B.length;w<C;w++)if(y[B[w]]==N)return!0}catch(L){}return!1}})},54534:function(c,l,e){var o=e(26800);o("matcher")},34744:function(c,l,e){var o=e(26800);o("metadataKey")},95090:function(c,l,e){var o=e(26800);o("metadata")},48824:function(c,l,e){var o=e(26800);o("observable")},44130:function(c,l,e){var o=e(26800);o("patternMatch")},35954:function(c,l,e){var o=e(26800);o("replaceAll")},26182:function(c,l,e){"use strict";var o=e(90260),a=e(42092).filterReject,r=e(43074),s=o.aTypedArray,u=o.exportTypedArrayMethod;u("filterOut",function(d){var h=a(s(this),d,arguments.length>1?arguments[1]:void 0);return r(this,h)},!0)},8922:function(c,l,e){"use strict";var o=e(90260),a=e(42092).filterReject,r=e(43074),s=o.aTypedArray,u=o.exportTypedArrayMethod;u("filterReject",function(d){var h=a(s(this),d,arguments.length>1?arguments[1]:void 0);return r(this,h)},!0)},16850:function(c,l,e){"use strict";var o=e(35005),a=e(39483),r=e(33253),s=e(90260),u=e(97745),v=s.aTypedArrayConstructor,d=s.exportTypedArrayStaticMethod;d("fromAsync",function(m){var p=this,y=arguments.length,g=y>1?arguments[1]:void 0,I=y>2?arguments[2]:void 0;return new(o("Promise"))(function(b){a(p),b(r(m,g,I))}).then(function(b){return u(v(p),b)})},!0)},5835:function(c,l,e){"use strict";var o=e(90260),a=e(21191),r=e(66304),s=o.aTypedArray,u=o.exportTypedArrayMethod;u("groupBy",function(d){var h=arguments.length>1?arguments[1]:void 0;return a(s(this),d,h,r)},!0)},8970:function(c,l,e){"use strict";var o=e(90260),a=e(26244),r=e(44067),s=e(51400),u=e(64599),v=e(19303),d=e(47293),h=o.aTypedArray,m=o.getTypedArrayConstructor,p=o.exportTypedArrayMethod,y=Math.max,g=Math.min,I=!d(function(){var b=new Int8Array([1]),E=b.toSpliced(1,0,{valueOf:function(){return b[0]=2,3}});return E[0]!==2||E[1]!==3});p("toSpliced",function(E,R){var A=h(this),N=m(A),w=a(A),B=s(E,w),C=arguments.length,L=0,Z,te,ee,_,de,be,Te;if(C===0)Z=te=0;else if(C===1)Z=0,te=w-B;else if(te=g(y(v(R),0),w-B),Z=C-2,Z){_=new N(Z),ee=r(_);for(var ie=2;ie<C;ie++)de=arguments[ie],_[ie-2]=ee?u(de):+de}for(be=w+Z-te,Te=new N(be);L<B;L++)Te[L]=A[L];for(;L<B+Z;L++)Te[L]=_[L-B];for(;L<be;L++)Te[L]=A[L+te-Z];return Te},!I)},84444:function(c,l,e){"use strict";var o=e(1702),a=e(90260),r=e(97745),s=e(60956),u=a.aTypedArray,v=a.getTypedArrayConstructor,d=a.exportTypedArrayMethod,h=o(s);d("uniqueBy",function(p){return u(this),r(v(this),h(this,p))},!0)},78206:function(c,l,e){"use strict";var o=e(82109),a=e(29257),r=e(60953).remove;o({target:"WeakMap",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var u=a(this),v=!0,d,h=0,m=arguments.length;h<m;h++)d=r(u,arguments[h]),v=v&&d;return!!v}})},12714:function(c,l,e){"use strict";var o=e(82109),a=e(29257),r=e(60953),s=r.get,u=r.has,v=r.set;o({target:"WeakMap",proto:!0,real:!0,forced:!0},{emplace:function(h,m){var p=a(this),y,g;return u(p,h)?(y=s(p,h),"update"in m&&(y=m.update(y,h,p),v(p,h,y)),y):(g=m.insert(h,p),v(p,h,g),g)}})},76478:function(c,l,e){var o=e(82109),a=e(27296);o({target:"WeakMap",stat:!0,forced:!0},{from:a})},79715:function(c,l,e){var o=e(82109),a=e(82044);o({target:"WeakMap",stat:!0,forced:!0},{of:a})},5964:function(c,l,e){"use strict";var o=e(82109),a=e(8154);o({target:"WeakMap",proto:!0,real:!0,forced:!0},{upsert:a})},43561:function(c,l,e){"use strict";var o=e(82109),a=e(72682),r=e(78818).add;o({target:"WeakSet",proto:!0,real:!0,forced:!0},{addAll:function(){for(var u=a(this),v=0,d=arguments.length;v<d;v++)r(u,arguments[v]);return u}})},32049:function(c,l,e){"use strict";var o=e(82109),a=e(72682),r=e(78818).remove;o({target:"WeakSet",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var u=a(this),v=!0,d,h=0,m=arguments.length;h<m;h++)d=r(u,arguments[h]),v=v&&d;return!!v}})},86020:function(c,l,e){var o=e(82109),a=e(27296);o({target:"WeakSet",stat:!0,forced:!0},{from:a})},56585:function(c,l,e){var o=e(82109),a=e(82044);o({target:"WeakSet",stat:!0,forced:!0},{of:a})},11091:function(c,l,e){var o=e(82109),a=e(17854),r=e(20261).clear;o({global:!0,bind:!0,enumerable:!0,forced:a.clearImmediate!==r},{clearImmediate:r})},82801:function(c,l,e){"use strict";var o=e(82109),a=e(17854),r=e(35005),s=e(79114),u=e(3070).f,v=e(92597),d=e(25787),h=e(79587),m=e(56277),p=e(93678),y=e(11060),g=e(19781),I=e(31913),b="DOMException",E=r("Error"),R=r(b),A=function(){d(this,N);var ie=arguments.length,Q=m(ie<1?void 0:arguments[0]),Y=m(ie<2?void 0:arguments[1],"Error"),k=new R(Q,Y),K=E(Q);return K.name=b,u(k,"stack",s(1,y(K.stack,1))),h(k,this,A),k},N=A.prototype=R.prototype,w="stack"in E(b),B="stack"in new R(1,2),C=R&&g&&Object.getOwnPropertyDescriptor(a,b),L=!!C&&!(C.writable&&C.configurable),Z=w&&!L&&!B;o({global:!0,constructor:!0,forced:I||Z},{DOMException:Z?A:R});var te=r(b),ee=te.prototype;if(ee.constructor!==te){I||u(ee,"constructor",s(1,te));for(var _ in p)if(v(p,_)){var de=p[_],be=de.s;v(te,be)||u(te,be,s(6,de.c))}}},84633:function(c,l,e){e(11091),e(12986)},71550:function(c,l,e){"use strict";var o=e(82109),a=e(17854),r=e(47045),s=e(19781),u=TypeError,v=Object.defineProperty,d=a.self!==a;try{if(s){var h=Object.getOwnPropertyDescriptor(a,"self");(d||!h||!h.get||!h.enumerable)&&r(a,"self",{get:function(){return a},set:function(p){if(this!==a)throw u("Illegal invocation");v(a,"self",{value:p,writable:!0,configurable:!0,enumerable:!0})},configurable:!0,enumerable:!0})}else o({global:!0,simple:!0,forced:d},{self:a})}catch(m){}},12986:function(c,l,e){var o=e(82109),a=e(17854),r=e(20261).set,s=e(17152),u=a.setImmediate?s(r,!1):r;o({global:!0,bind:!0,enumerable:!0,forced:a.setImmediate!==u},{setImmediate:u})},61295:function(c,l,e){var o=e(31913),a=e(82109),r=e(17854),s=e(35005),u=e(1702),v=e(47293),d=e(69711),h=e(60614),m=e(4411),p=e(68554),y=e(70111),g=e(52190),I=e(20408),b=e(19670),E=e(70648),R=e(92597),A=e(86135),N=e(68880),w=e(26244),B=e(48053),C=e(34706),L=e(75706),Z=e(79405),te=e(22914),ee=e(64124),_=r.Object,de=r.Array,be=r.Date,Te=r.Error,ie=r.EvalError,Q=r.RangeError,Y=r.ReferenceError,k=r.SyntaxError,K=r.TypeError,re=r.URIError,T=r.PerformanceMark,D=r.WebAssembly,V=D&&D.CompileError||Te,le=D&&D.LinkError||Te,J=D&&D.RuntimeError||Te,P=s("DOMException"),$=L.Map,H=L.has,q=L.get,ae=L.set,Ce=Z.Set,Le=Z.add,Xe=s("Object","keys"),Ze=u([].push),je=u((!0).valueOf),Ye=u(1 .valueOf),oe=u("".valueOf),fe=u(be.prototype.getTime),pe=d("structuredClone"),me="DataCloneError",Pe="Transferring",se=function(x){return!v(function(){var U=new r.Set([7]),ne=x(U),ue=x(_(7));return ne==U||!ne.has(7)||typeof ue!="object"||ue!=7})&&x},ve=function(x,U){return!v(function(){var ne=new U,ue=x({a:ne,b:ne});return!(ue&&ue.a===ue.b&&ue.a instanceof U&&ue.a.stack===ne.stack)})},ye=function(x){return!v(function(){var U=x(new r.AggregateError([1],pe,{cause:3}));return U.name!="AggregateError"||U.errors[0]!=1||U.message!=pe||U.cause!=3})},De=r.structuredClone,ze=o||!ve(De,Te)||!ve(De,P)||!ye(De),bt=!De&&se(function(x){return new T(pe,{detail:x}).detail}),at=se(De)||bt,lt=function(x){throw new P("Uncloneable type: "+x,me)},St=function(x,U){throw new P((U||"Cloning")+" of "+x+" cannot be properly polyfilled in this engine",me)},Bt=function(){var x;try{x=new r.DataTransfer}catch(U){try{x=new r.ClipboardEvent("").clipboardData}catch(ne){}}return x&&x.items&&x.files?x:null},Ot=function(x,U){if(g(x)&&lt("Symbol"),!y(x))return x;if(U){if(H(U,x))return q(U,x)}else U=new $;var ne=E(x),ue=!1,Ie,Oe,Se,$e,Ve,Ge,vt,he,Be,Fe;switch(ne){case"Array":Se=de(w(x)),ue=!0;break;case"Object":Se={},ue=!0;break;case"Map":Se=new $,ue=!0;break;case"Set":Se=new Ce,ue=!0;break;case"RegExp":Se=new RegExp(x.source,C(x));break;case"Error":switch(Oe=x.name,Oe){case"AggregateError":Se=s("AggregateError")([]);break;case"EvalError":Se=ie();break;case"RangeError":Se=Q();break;case"ReferenceError":Se=Y();break;case"SyntaxError":Se=k();break;case"TypeError":Se=K();break;case"URIError":Se=re();break;case"CompileError":Se=V();break;case"LinkError":Se=le();break;case"RuntimeError":Se=J();break;default:Se=Te()}ue=!0;break;case"DOMException":Se=new P(x.message,x.name),ue=!0;break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":Ie=r[ne],y(Ie)||St(ne),Se=new Ie(Ot(x.buffer,U),x.byteOffset,ne==="DataView"?x.byteLength:x.length);break;case"DOMQuad":try{Se=new DOMQuad(Ot(x.p1,U),Ot(x.p2,U),Ot(x.p3,U),Ot(x.p4,U))}catch(Re){at?Se=at(x):St(ne)}break;case"FileList":if($e=Bt(),$e){for(Ve=0,Ge=w(x);Ve<Ge;Ve++)$e.items.add(Ot(x[Ve],U));Se=$e.files}else at?Se=at(x):St(ne);break;case"ImageData":try{Se=new ImageData(Ot(x.data,U),x.width,x.height,{colorSpace:x.colorSpace})}catch(Re){at?Se=at(x):St(ne)}break;default:if(at)Se=at(x);else switch(ne){case"BigInt":Se=_(x.valueOf());break;case"Boolean":Se=_(je(x));break;case"Number":Se=_(Ye(x));break;case"String":Se=_(oe(x));break;case"Date":Se=new be(fe(x));break;case"ArrayBuffer":Ie=r.DataView,!Ie&&typeof x.slice!="function"&&St(ne);try{if(typeof x.slice=="function")Se=x.slice(0);else for(Ge=x.byteLength,Se=new ArrayBuffer(Ge),Be=new Ie(x),Fe=new Ie(Se),Ve=0;Ve<Ge;Ve++)Fe.setUint8(Ve,Be.getUint8(Ve))}catch(Re){throw new P("ArrayBuffer is detached",me)}break;case"SharedArrayBuffer":Se=x;break;case"Blob":try{Se=x.slice(0,x.size,x.type)}catch(Re){St(ne)}break;case"DOMPoint":case"DOMPointReadOnly":Ie=r[ne];try{Se=Ie.fromPoint?Ie.fromPoint(x):new Ie(x.x,x.y,x.z,x.w)}catch(Re){St(ne)}break;case"DOMRect":case"DOMRectReadOnly":Ie=r[ne];try{Se=Ie.fromRect?Ie.fromRect(x):new Ie(x.x,x.y,x.width,x.height)}catch(Re){St(ne)}break;case"DOMMatrix":case"DOMMatrixReadOnly":Ie=r[ne];try{Se=Ie.fromMatrix?Ie.fromMatrix(x):new Ie(x)}catch(Re){St(ne)}break;case"AudioData":case"VideoFrame":h(x.clone)||St(ne);try{Se=x.clone()}catch(Re){lt(ne)}break;case"File":try{Se=new File([x],x.name,x)}catch(Re){St(ne)}break;case"CropTarget":case"CryptoKey":case"FileSystemDirectoryHandle":case"FileSystemFileHandle":case"FileSystemHandle":case"GPUCompilationInfo":case"GPUCompilationMessage":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":St(ne);default:lt(ne)}}if(ae(U,x,Se),ue)switch(ne){case"Array":case"Object":for(vt=Xe(x),Ve=0,Ge=w(vt);Ve<Ge;Ve++)he=vt[Ve],A(Se,he,Ot(x[he],U));break;case"Map":x.forEach(function(Re,Je){ae(Se,Ot(Je,U),Ot(Re,U))});break;case"Set":x.forEach(function(Re){Le(Se,Ot(Re,U))});break;case"Error":N(Se,"message",Ot(x.message,U)),R(x,"cause")&&N(Se,"cause",Ot(x.cause,U)),Oe=="AggregateError"&&(Se.errors=Ot(x.errors,U));case"DOMException":te&&N(Se,"stack",Ot(x.stack,U))}return Se},Wt=function(x,U){if(!y(x))throw K("Transfer option cannot be converted to a sequence");var ne=[];I(x,function(Be){Ze(ne,b(Be))});var ue=0,Ie=w(ne),Oe,Se,$e,Ve,Ge,vt,he;if(ee)for(Ve=De(ne,{transfer:ne});ue<Ie;)ae(U,ne[ue],Ve[ue++]);else for(;ue<Ie;){if(Oe=ne[ue++],H(U,Oe))throw new P("Duplicate transferable",me);switch(Se=E(Oe),Se){case"ImageBitmap":$e=r.OffscreenCanvas,m($e)||St(Se,Pe);try{vt=new $e(Oe.width,Oe.height),he=vt.getContext("bitmaprenderer"),he.transferFromImageBitmap(Oe),Ge=vt.transferToImageBitmap()}catch(Be){}break;case"AudioData":case"VideoFrame":(!h(Oe.clone)||!h(Oe.close))&&St(Se,Pe);try{Ge=Oe.clone(),Oe.close()}catch(Be){}break;case"ArrayBuffer":h(Oe.transfer)||St(Se,Pe),Ge=Oe.transfer();break;case"MediaSourceHandle":case"MessagePort":case"OffscreenCanvas":case"ReadableStream":case"TransformStream":case"WritableStream":St(Se,Pe)}if(Ge===void 0)throw new P("This object cannot be transferred: "+Se,me);ae(U,Oe,Ge)}};a({global:!0,enumerable:!0,sham:!ee,forced:ze},{structuredClone:function(U){var ne=B(arguments.length,1)>1&&!p(arguments[1])?b(arguments[1]):void 0,ue=ne?ne.transfer:void 0,Ie;return ue!==void 0&&(Ie=new $,Wt(ue,Ie)),Ot(U,Ie)}})},9996:function(c){"use strict";var l=function(A){return e(A)&&!o(A)};function e(R){return!!R&&typeof R=="object"}function o(R){var A=Object.prototype.toString.call(R);return A==="[object RegExp]"||A==="[object Date]"||s(R)}var a=typeof Symbol=="function"&&Symbol.for,r=a?Symbol.for("react.element"):60103;function s(R){return R.$$typeof===r}function u(R){return Array.isArray(R)?[]:{}}function v(R,A){return A.clone!==!1&&A.isMergeableObject(R)?b(u(R),R,A):R}function d(R,A,N){return R.concat(A).map(function(w){return v(w,N)})}function h(R,A){if(!A.customMerge)return b;var N=A.customMerge(R);return typeof N=="function"?N:b}function m(R){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(R).filter(function(A){return Object.propertyIsEnumerable.call(R,A)}):[]}function p(R){return Object.keys(R).concat(m(R))}function y(R,A){try{return A in R}catch(N){return!1}}function g(R,A){return y(R,A)&&!(Object.hasOwnProperty.call(R,A)&&Object.propertyIsEnumerable.call(R,A))}function I(R,A,N){var w={};return N.isMergeableObject(R)&&p(R).forEach(function(B){w[B]=v(R[B],N)}),p(A).forEach(function(B){g(R,B)||(y(R,B)&&N.isMergeableObject(A[B])?w[B]=h(B,N)(R[B],A[B],N):w[B]=v(A[B],N))}),w}function b(R,A,N){N=N||{},N.arrayMerge=N.arrayMerge||d,N.isMergeableObject=N.isMergeableObject||l,N.cloneUnlessOtherwiseSpecified=v;var w=Array.isArray(A),B=Array.isArray(R),C=w===B;return C?w?N.arrayMerge(R,A,N):I(R,A,N):v(A,N)}b.all=function(A,N){if(!Array.isArray(A))throw new Error("first argument should be an array");return A.reduce(function(w,B){return b(w,B,N)},{})};var E=b;c.exports=E},68498:function(c){var l=Object.defineProperty,e=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.prototype.hasOwnProperty,r=(N,w)=>{for(var B in w)l(N,B,{get:w[B],enumerable:!0})},s=(N,w,B,C)=>{if(w&&typeof w=="object"||typeof w=="function")for(let L of o(w))!a.call(N,L)&&L!==B&&l(N,L,{get:()=>w[L],enumerable:!(C=e(w,L))||C.enumerable});return N},u=N=>s(l({},"__esModule",{value:!0}),N),v={};r(v,{LOCAL_DUMI_DIR:()=>d,LOCAL_PAGES_DIR:()=>m,LOCAL_THEME_DIR:()=>h,PICKED_PKG_FIELDS:()=>b,PREFERS_COLOR_ATTR:()=>g,PREFERS_COLOR_LS_KEY:()=>I,SP_ROUTE_PREFIX:()=>y,THEME_PREFIX:()=>p,USELESS_TMP_FILES:()=>E,VERSION_2_DEPRECATE_SOFT_BREAKS:()=>A,VERSION_2_LEVEL_NAV:()=>R}),c.exports=u(v);var d=".dumi",h=`${d}/theme`,m=`${d}/pages`,p="dumi-theme-",y="~",g="data-prefers-color",I="dumi:prefers-color",b={name:"",description:"",version:"",license:"",repository:"",author:"",authors:""},E=["tsconfig.json","typings.d.ts"],R="^2.2.0",A="^2.2.0"},55648:function(c,l,e){"use strict";e.d(l,{Ep:function(){return E},PP:function(){return p},aU:function(){return a},cP:function(){return R},lX:function(){return h},q_:function(){return m}});var o=e(87462),a;(function(A){A.Pop="POP",A.Push="PUSH",A.Replace="REPLACE"})(a||(a={}));var r=function(A){return A};function s(A,N){if(!A){typeof console!="undefined"&&console.warn(N);try{throw new Error(N)}catch(w){}}}var u="beforeunload",v="hashchange",d="popstate";function h(A){A===void 0&&(A={});var N=A,w=N.window,B=w===void 0?document.defaultView:w,C=B.history;function L(){var J=B.location,P=J.pathname,$=J.search,H=J.hash,q=C.state||{};return[q.idx,r({pathname:P,search:$,hash:H,state:q.usr||null,key:q.key||"default"})]}var Z=null;function te(){if(Z)ie.call(Z),Z=null;else{var J=a.Pop,P=L(),$=P[0],H=P[1];if(ie.length){if($!=null){var q=de-$;q&&(Z={action:J,location:H,retry:function(){V(q*-1)}},V(q))}}else re(J)}}B.addEventListener(d,te);var ee=a.Pop,_=L(),de=_[0],be=_[1],Te=I(),ie=I();de==null&&(de=0,C.replaceState((0,o.Z)({},C.state,{idx:de}),""));function Q(J){return typeof J=="string"?J:E(J)}function Y(J,P){return P===void 0&&(P=null),r((0,o.Z)({pathname:be.pathname,hash:"",search:""},typeof J=="string"?R(J):J,{state:P,key:b()}))}function k(J,P){return[{usr:J.state,key:J.key,idx:P},Q(J)]}function K(J,P,$){return!ie.length||(ie.call({action:J,location:P,retry:$}),!1)}function re(J){ee=J;var P=L();de=P[0],be=P[1],Te.call({action:ee,location:be})}function T(J,P){var $=a.Push,H=Y(J,P);function q(){T(J,P)}if(K($,H,q)){var ae=k(H,de+1),Ce=ae[0],Le=ae[1];try{C.pushState(Ce,"",Le)}catch(Xe){B.location.assign(Le)}re($)}}function D(J,P){var $=a.Replace,H=Y(J,P);function q(){D(J,P)}if(K($,H,q)){var ae=k(H,de),Ce=ae[0],Le=ae[1];C.replaceState(Ce,"",Le),re($)}}function V(J){C.go(J)}var le={get action(){return ee},get location(){return be},createHref:Q,push:T,replace:D,go:V,back:function(){V(-1)},forward:function(){V(1)},listen:function(P){return Te.push(P)},block:function(P){var $=ie.push(P);return ie.length===1&&B.addEventListener(u,g),function(){$(),ie.length||B.removeEventListener(u,g)}}};return le}function m(A){A===void 0&&(A={});var N=A,w=N.window,B=w===void 0?document.defaultView:w,C=B.history;function L(){var P=R(B.location.hash.substr(1)),$=P.pathname,H=$===void 0?"/":$,q=P.search,ae=q===void 0?"":q,Ce=P.hash,Le=Ce===void 0?"":Ce,Xe=C.state||{};return[Xe.idx,r({pathname:H,search:ae,hash:Le,state:Xe.usr||null,key:Xe.key||"default"})]}var Z=null;function te(){if(Z)ie.call(Z),Z=null;else{var P=a.Pop,$=L(),H=$[0],q=$[1];if(ie.length){if(H!=null){var ae=de-H;ae&&(Z={action:P,location:q,retry:function(){le(ae*-1)}},le(ae))}}else T(P)}}B.addEventListener(d,te),B.addEventListener(v,function(){var P=L(),$=P[1];E($)!==E(be)&&te()});var ee=a.Pop,_=L(),de=_[0],be=_[1],Te=I(),ie=I();de==null&&(de=0,C.replaceState((0,o.Z)({},C.state,{idx:de}),""));function Q(){var P=document.querySelector("base"),$="";if(P&&P.getAttribute("href")){var H=B.location.href,q=H.indexOf("#");$=q===-1?H:H.slice(0,q)}return $}function Y(P){return Q()+"#"+(typeof P=="string"?P:E(P))}function k(P,$){return $===void 0&&($=null),r((0,o.Z)({pathname:be.pathname,hash:"",search:""},typeof P=="string"?R(P):P,{state:$,key:b()}))}function K(P,$){return[{usr:P.state,key:P.key,idx:$},Y(P)]}function re(P,$,H){return!ie.length||(ie.call({action:P,location:$,retry:H}),!1)}function T(P){ee=P;var $=L();de=$[0],be=$[1],Te.call({action:ee,location:be})}function D(P,$){var H=a.Push,q=k(P,$);function ae(){D(P,$)}if(re(H,q,ae)){var Ce=K(q,de+1),Le=Ce[0],Xe=Ce[1];try{C.pushState(Le,"",Xe)}catch(Ze){B.location.assign(Xe)}T(H)}}function V(P,$){var H=a.Replace,q=k(P,$);function ae(){V(P,$)}if(re(H,q,ae)){var Ce=K(q,de),Le=Ce[0],Xe=Ce[1];C.replaceState(Le,"",Xe),T(H)}}function le(P){C.go(P)}var J={get action(){return ee},get location(){return be},createHref:Y,push:D,replace:V,go:le,back:function(){le(-1)},forward:function(){le(1)},listen:function($){return Te.push($)},block:function($){var H=ie.push($);return ie.length===1&&B.addEventListener(u,g),function(){H(),ie.length||B.removeEventListener(u,g)}}};return J}function p(A){A===void 0&&(A={});var N=A,w=N.initialEntries,B=w===void 0?["/"]:w,C=N.initialIndex,L=B.map(function(T){var D=r((0,o.Z)({pathname:"/",search:"",hash:"",state:null,key:b()},typeof T=="string"?R(T):T));return D}),Z=y(C==null?L.length-1:C,0,L.length-1),te=a.Pop,ee=L[Z],_=I(),de=I();function be(T){return typeof T=="string"?T:E(T)}function Te(T,D){return D===void 0&&(D=null),r((0,o.Z)({pathname:ee.pathname,search:"",hash:""},typeof T=="string"?R(T):T,{state:D,key:b()}))}function ie(T,D,V){return!de.length||(de.call({action:T,location:D,retry:V}),!1)}function Q(T,D){te=T,ee=D,_.call({action:te,location:ee})}function Y(T,D){var V=a.Push,le=Te(T,D);function J(){Y(T,D)}ie(V,le,J)&&(Z+=1,L.splice(Z,L.length,le),Q(V,le))}function k(T,D){var V=a.Replace,le=Te(T,D);function J(){k(T,D)}ie(V,le,J)&&(L[Z]=le,Q(V,le))}function K(T){var D=y(Z+T,0,L.length-1),V=a.Pop,le=L[D];function J(){K(T)}ie(V,le,J)&&(Z=D,Q(V,le))}var re={get index(){return Z},get action(){return te},get location(){return ee},createHref:be,push:Y,replace:k,go:K,back:function(){K(-1)},forward:function(){K(1)},listen:function(D){return _.push(D)},block:function(D){return de.push(D)}};return re}function y(A,N,w){return Math.min(Math.max(A,N),w)}function g(A){A.preventDefault(),A.returnValue=""}function I(){var A=[];return{get length(){return A.length},push:function(w){return A.push(w),function(){A=A.filter(function(B){return B!==w})}},call:function(w){A.forEach(function(B){return B&&B(w)})}}}function b(){return Math.random().toString(36).substr(2,8)}function E(A){var N=A.pathname,w=N===void 0?"/":N,B=A.search,C=B===void 0?"":B,L=A.hash,Z=L===void 0?"":L;return C&&C!=="?"&&(w+=C.charAt(0)==="?"?C:"?"+C),Z&&Z!=="#"&&(w+=Z.charAt(0)==="#"?Z:"#"+Z),w}function R(A){var N={};if(A){var w=A.indexOf("#");w>=0&&(N.hash=A.substr(w),A=A.substr(0,w));var B=A.indexOf("?");B>=0&&(N.search=A.substr(B),A=A.substr(0,B)),A&&(N.pathname=A)}return N}},8679:function(c,l,e){"use strict";var o=e(59864),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},v={};v[o.ForwardRef]=s,v[o.Memo]=u;function d(E){return o.isMemo(E)?u:v[E.$$typeof]||a}var h=Object.defineProperty,m=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,y=Object.getOwnPropertyDescriptor,g=Object.getPrototypeOf,I=Object.prototype;function b(E,R,A){if(typeof R!="string"){if(I){var N=g(R);N&&N!==I&&b(E,N,A)}var w=m(R);p&&(w=w.concat(p(R)));for(var B=d(E),C=d(R),L=0;L<w.length;++L){var Z=w[L];if(!r[Z]&&!(A&&A[Z])&&!(C&&C[Z])&&!(B&&B[Z])){var te=y(R,Z);try{h(E,Z,te)}catch(ee){}}}}return E}c.exports=b},16284:function(c,l,e){"use strict";e.d(l,{C:function(){return m}});var o=e(97582),a=e(56096),r=e(95957),s=e(61092);function u(p,y){return y?(0,o.pi)((0,o.pi)((0,o.pi)({},p||{}),y||{}),Object.keys(p).reduce(function(g,I){return g[I]=(0,o.pi)((0,o.pi)({},p[I]),y[I]||{}),g},{})):p}function v(p,y){return y?Object.keys(p).reduce(function(g,I){return g[I]=u(p[I],y[I]),g},(0,o.pi)({},p)):p}function d(p){return{create:function(){return{get:function(y){return p[y]},set:function(y,g){p[y]=g}}}}}function h(p){return p===void 0&&(p={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:(0,r.H)(function(){for(var y,g=[],I=0;I<arguments.length;I++)g[I]=arguments[I];return new((y=Intl.NumberFormat).bind.apply(y,(0,o.ev)([void 0],g,!1)))},{cache:d(p.number),strategy:r.A.variadic}),getDateTimeFormat:(0,r.H)(function(){for(var y,g=[],I=0;I<arguments.length;I++)g[I]=arguments[I];return new((y=Intl.DateTimeFormat).bind.apply(y,(0,o.ev)([void 0],g,!1)))},{cache:d(p.dateTime),strategy:r.A.variadic}),getPluralRules:(0,r.H)(function(){for(var y,g=[],I=0;I<arguments.length;I++)g[I]=arguments[I];return new((y=Intl.PluralRules).bind.apply(y,(0,o.ev)([void 0],g,!1)))},{cache:d(p.pluralRules),strategy:r.A.variadic})}}var m=function(){function p(y,g,I,b){g===void 0&&(g=p.defaultLocale);var E=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(w){var B=E.formatToParts(w);if(B.length===1)return B[0].value;var C=B.reduce(function(L,Z){return!L.length||Z.type!==s.du.literal||typeof L[L.length-1]!="string"?L.push(Z.value):L[L.length-1]+=Z.value,L},[]);return C.length<=1?C[0]||"":C},this.formatToParts=function(w){return(0,s.FK)(E.ast,E.locales,E.formatters,E.formats,w,void 0,E.message)},this.resolvedOptions=function(){var w;return{locale:((w=E.resolvedLocale)===null||w===void 0?void 0:w.toString())||Intl.NumberFormat.supportedLocalesOf(E.locales)[0]}},this.getAst=function(){return E.ast},this.locales=g,this.resolvedLocale=p.resolveLocale(g),typeof y=="string"){if(this.message=y,!p.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var R=b||{},A=R.formatters,N=(0,o._T)(R,["formatters"]);this.ast=p.__parse(y,(0,o.pi)((0,o.pi)({},N),{locale:this.resolvedLocale}))}else this.ast=y;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=v(p.formats,I),this.formatters=b&&b.formatters||h(this.formatterCache)}return Object.defineProperty(p,"defaultLocale",{get:function(){return p.memoizedDefaultLocale||(p.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),p.memoizedDefaultLocale},enumerable:!1,configurable:!0}),p.memoizedDefaultLocale=null,p.resolveLocale=function(y){if(typeof Intl.Locale!="undefined"){var g=Intl.NumberFormat.supportedLocalesOf(y);return g.length>0?new Intl.Locale(g[0]):new Intl.Locale(typeof y=="string"?y:y[0])}},p.__parse=a.Qc,p.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},p}()},11050:function(c,l,e){"use strict";e.d(l,{C8:function(){return s},HR:function(){return v},YR:function(){return u},jK:function(){return a},u_:function(){return r}});var o=e(97582),a;(function(d){d.MISSING_VALUE="MISSING_VALUE",d.INVALID_VALUE="INVALID_VALUE",d.MISSING_INTL_API="MISSING_INTL_API"})(a||(a={}));var r=function(d){(0,o.ZT)(h,d);function h(m,p,y){var g=d.call(this,m)||this;return g.code=p,g.originalMessage=y,g}return h.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},h}(Error),s=function(d){(0,o.ZT)(h,d);function h(m,p,y,g){return d.call(this,'Invalid values for "'.concat(m,'": "').concat(p,'". Options are "').concat(Object.keys(y).join('", "'),'"'),a.INVALID_VALUE,g)||this}return h}(r),u=function(d){(0,o.ZT)(h,d);function h(m,p,y){return d.call(this,'Value for "'.concat(m,'" must be of type ').concat(p),a.INVALID_VALUE,y)||this}return h}(r),v=function(d){(0,o.ZT)(h,d);function h(m,p){return d.call(this,'The intl string context variable "'.concat(m,'" was not provided to the string "').concat(p,'"'),a.MISSING_VALUE,p)||this}return h}(r)},61092:function(c,l,e){"use strict";e.d(l,{FK:function(){return v},Gt:function(){return u},du:function(){return r}});var o=e(56096),a=e(11050),r;(function(d){d[d.literal=0]="literal",d[d.object=1]="object"})(r||(r={}));function s(d){return d.length<2?d:d.reduce(function(h,m){var p=h[h.length-1];return!p||p.type!==r.literal||m.type!==r.literal?h.push(m):p.value+=m.value,h},[])}function u(d){return typeof d=="function"}function v(d,h,m,p,y,g,I){if(d.length===1&&(0,o.O4)(d[0]))return[{type:r.literal,value:d[0].value}];for(var b=[],E=0,R=d;E<R.length;E++){var A=R[E];if((0,o.O4)(A)){b.push({type:r.literal,value:A.value});continue}if((0,o.yx)(A)){typeof g=="number"&&b.push({type:r.literal,value:m.getNumberFormat(h).format(g)});continue}var N=A.value;if(!(y&&N in y))throw new a.HR(N,I);var w=y[N];if((0,o.VG)(A)){(!w||typeof w=="string"||typeof w=="number")&&(w=typeof w=="string"||typeof w=="number"?String(w):""),b.push({type:typeof w=="string"?r.literal:r.object,value:w});continue}if((0,o.rp)(A)){var B=typeof A.style=="string"?p.date[A.style]:(0,o.Ii)(A.style)?A.style.parsedOptions:void 0;b.push({type:r.literal,value:m.getDateTimeFormat(h,B).format(w)});continue}if((0,o.pe)(A)){var B=typeof A.style=="string"?p.time[A.style]:(0,o.Ii)(A.style)?A.style.parsedOptions:p.time.medium;b.push({type:r.literal,value:m.getDateTimeFormat(h,B).format(w)});continue}if((0,o.uf)(A)){var B=typeof A.style=="string"?p.number[A.style]:(0,o.Wh)(A.style)?A.style.parsedOptions:void 0;B&&B.scale&&(w=w*(B.scale||1)),b.push({type:r.literal,value:m.getNumberFormat(h,B).format(w)});continue}if((0,o.HI)(A)){var C=A.children,L=A.value,Z=y[L];if(!u(Z))throw new a.YR(L,"function",I);var te=v(C,h,m,p,y,g),ee=Z(te.map(function(be){return be.value}));Array.isArray(ee)||(ee=[ee]),b.push.apply(b,ee.map(function(be){return{type:typeof be=="string"?r.literal:r.object,value:be}}))}if((0,o.Wi)(A)){var _=A.options[w]||A.options.other;if(!_)throw new a.C8(A.value,w,Object.keys(A.options),I);b.push.apply(b,v(_.value,h,m,p,y));continue}if((0,o.Jo)(A)){var _=A.options["=".concat(w)];if(!_){if(!Intl.PluralRules)throw new a.u_(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,a.jK.MISSING_INTL_API,I);var de=m.getPluralRules(h,{type:A.pluralType}).select(w-(A.offset||0));_=A.options[de]||A.options.other}if(!_)throw new a.C8(A.value,w,Object.keys(A.options),I);b.push.apply(b,v(_.value,h,m,p,y,w-(A.offset||0)));continue}}return s(b)}},41143:function(c){"use strict";var l=function(e,o,a,r,s,u,v,d){if(!e){var h;if(o===void 0)h=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var m=[a,r,s,u,v,d],p=0;h=new Error(o.replace(/%s/g,function(){return m[p++]})),h.name="Invariant Violation"}throw h.framesToPop=1,h}};c.exports=l},26961:function(c,l,e){var o,a=function(){var r=String.fromCharCode,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",v={};function d(m,p){if(!v[m]){v[m]={};for(var y=0;y<m.length;y++)v[m][m.charAt(y)]=y}return v[m][p]}var h={compressToBase64:function(m){if(m==null)return"";var p=h._compress(m,6,function(y){return s.charAt(y)});switch(p.length%4){default:case 0:return p;case 1:return p+"===";case 2:return p+"==";case 3:return p+"="}},decompressFromBase64:function(m){return m==null?"":m==""?null:h._decompress(m.length,32,function(p){return d(s,m.charAt(p))})},compressToUTF16:function(m){return m==null?"":h._compress(m,15,function(p){return r(p+32)})+" "},decompressFromUTF16:function(m){return m==null?"":m==""?null:h._decompress(m.length,16384,function(p){return m.charCodeAt(p)-32})},compressToUint8Array:function(m){for(var p=h.compress(m),y=new Uint8Array(p.length*2),g=0,I=p.length;g<I;g++){var b=p.charCodeAt(g);y[g*2]=b>>>8,y[g*2+1]=b%256}return y},decompressFromUint8Array:function(m){if(m==null)return h.decompress(m);for(var p=new Array(m.length/2),y=0,g=p.length;y<g;y++)p[y]=m[y*2]*256+m[y*2+1];var I=[];return p.forEach(function(b){I.push(r(b))}),h.decompress(I.join(""))},compressToEncodedURIComponent:function(m){return m==null?"":h._compress(m,6,function(p){return u.charAt(p)})},decompressFromEncodedURIComponent:function(m){return m==null?"":m==""?null:(m=m.replace(/ /g,"+"),h._decompress(m.length,32,function(p){return d(u,m.charAt(p))}))},compress:function(m){return h._compress(m,16,function(p){return r(p)})},_compress:function(m,p,y){if(m==null)return"";var g,I,b={},E={},R="",A="",N="",w=2,B=3,C=2,L=[],Z=0,te=0,ee;for(ee=0;ee<m.length;ee+=1)if(R=m.charAt(ee),Object.prototype.hasOwnProperty.call(b,R)||(b[R]=B++,E[R]=!0),A=N+R,Object.prototype.hasOwnProperty.call(b,A))N=A;else{if(Object.prototype.hasOwnProperty.call(E,N)){if(N.charCodeAt(0)<256){for(g=0;g<C;g++)Z=Z<<1,te==p-1?(te=0,L.push(y(Z)),Z=0):te++;for(I=N.charCodeAt(0),g=0;g<8;g++)Z=Z<<1|I&1,te==p-1?(te=0,L.push(y(Z)),Z=0):te++,I=I>>1}else{for(I=1,g=0;g<C;g++)Z=Z<<1|I,te==p-1?(te=0,L.push(y(Z)),Z=0):te++,I=0;for(I=N.charCodeAt(0),g=0;g<16;g++)Z=Z<<1|I&1,te==p-1?(te=0,L.push(y(Z)),Z=0):te++,I=I>>1}w--,w==0&&(w=Math.pow(2,C),C++),delete E[N]}else for(I=b[N],g=0;g<C;g++)Z=Z<<1|I&1,te==p-1?(te=0,L.push(y(Z)),Z=0):te++,I=I>>1;w--,w==0&&(w=Math.pow(2,C),C++),b[A]=B++,N=String(R)}if(N!==""){if(Object.prototype.hasOwnProperty.call(E,N)){if(N.charCodeAt(0)<256){for(g=0;g<C;g++)Z=Z<<1,te==p-1?(te=0,L.push(y(Z)),Z=0):te++;for(I=N.charCodeAt(0),g=0;g<8;g++)Z=Z<<1|I&1,te==p-1?(te=0,L.push(y(Z)),Z=0):te++,I=I>>1}else{for(I=1,g=0;g<C;g++)Z=Z<<1|I,te==p-1?(te=0,L.push(y(Z)),Z=0):te++,I=0;for(I=N.charCodeAt(0),g=0;g<16;g++)Z=Z<<1|I&1,te==p-1?(te=0,L.push(y(Z)),Z=0):te++,I=I>>1}w--,w==0&&(w=Math.pow(2,C),C++),delete E[N]}else for(I=b[N],g=0;g<C;g++)Z=Z<<1|I&1,te==p-1?(te=0,L.push(y(Z)),Z=0):te++,I=I>>1;w--,w==0&&(w=Math.pow(2,C),C++)}for(I=2,g=0;g<C;g++)Z=Z<<1|I&1,te==p-1?(te=0,L.push(y(Z)),Z=0):te++,I=I>>1;for(;;)if(Z=Z<<1,te==p-1){L.push(y(Z));break}else te++;return L.join("")},decompress:function(m){return m==null?"":m==""?null:h._decompress(m.length,32768,function(p){return m.charCodeAt(p)})},_decompress:function(m,p,y){var g=[],I,b=4,E=4,R=3,A="",N=[],w,B,C,L,Z,te,ee,_={val:y(0),position:p,index:1};for(w=0;w<3;w+=1)g[w]=w;for(C=0,Z=Math.pow(2,2),te=1;te!=Z;)L=_.val&_.position,_.position>>=1,_.position==0&&(_.position=p,_.val=y(_.index++)),C|=(L>0?1:0)*te,te<<=1;switch(I=C){case 0:for(C=0,Z=Math.pow(2,8),te=1;te!=Z;)L=_.val&_.position,_.position>>=1,_.position==0&&(_.position=p,_.val=y(_.index++)),C|=(L>0?1:0)*te,te<<=1;ee=r(C);break;case 1:for(C=0,Z=Math.pow(2,16),te=1;te!=Z;)L=_.val&_.position,_.position>>=1,_.position==0&&(_.position=p,_.val=y(_.index++)),C|=(L>0?1:0)*te,te<<=1;ee=r(C);break;case 2:return""}for(g[3]=ee,B=ee,N.push(ee);;){if(_.index>m)return"";for(C=0,Z=Math.pow(2,R),te=1;te!=Z;)L=_.val&_.position,_.position>>=1,_.position==0&&(_.position=p,_.val=y(_.index++)),C|=(L>0?1:0)*te,te<<=1;switch(ee=C){case 0:for(C=0,Z=Math.pow(2,8),te=1;te!=Z;)L=_.val&_.position,_.position>>=1,_.position==0&&(_.position=p,_.val=y(_.index++)),C|=(L>0?1:0)*te,te<<=1;g[E++]=r(C),ee=E-1,b--;break;case 1:for(C=0,Z=Math.pow(2,16),te=1;te!=Z;)L=_.val&_.position,_.position>>=1,_.position==0&&(_.position=p,_.val=y(_.index++)),C|=(L>0?1:0)*te,te<<=1;g[E++]=r(C),ee=E-1,b--;break;case 2:return N.join("")}if(b==0&&(b=Math.pow(2,R),R++),g[ee])A=g[ee];else if(ee===E)A=B+B.charAt(0);else return null;N.push(A),g[E++]=B+A.charAt(0),b--,B=A,b==0&&(b=Math.pow(2,R),R++)}}};return h}();o=function(){return a}.call(l,e,l,c),o!==void 0&&(c.exports=o)},74865:function(c,l,e){var o,a;(function(r,s){o=s,a=typeof o=="function"?o.call(l,e,l,c):o,a!==void 0&&(c.exports=a)})(this,function(){var r={};r.version="0.2.0";var s=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};r.configure=function(E){var R,A;for(R in E)A=E[R],A!==void 0&&E.hasOwnProperty(R)&&(s[R]=A);return this},r.status=null,r.set=function(E){var R=r.isStarted();E=u(E,s.minimum,1),r.status=E===1?null:E;var A=r.render(!R),N=A.querySelector(s.barSelector),w=s.speed,B=s.easing;return A.offsetWidth,h(function(C){s.positionUsing===""&&(s.positionUsing=r.getPositioningCSS()),m(N,d(E,w,B)),E===1?(m(A,{transition:"none",opacity:1}),A.offsetWidth,setTimeout(function(){m(A,{transition:"all "+w+"ms linear",opacity:0}),setTimeout(function(){r.remove(),C()},w)},w)):setTimeout(C,w)}),this},r.isStarted=function(){return typeof r.status=="number"},r.start=function(){r.status||r.set(0);var E=function(){setTimeout(function(){r.status&&(r.trickle(),E())},s.trickleSpeed)};return s.trickle&&E(),this},r.done=function(E){return!E&&!r.status?this:r.inc(.3+.5*Math.random()).set(1)},r.inc=function(E){var R=r.status;return R?(typeof E!="number"&&(E=(1-R)*u(Math.random()*R,.1,.95)),R=u(R+E,0,.994),r.set(R)):r.start()},r.trickle=function(){return r.inc(Math.random()*s.trickleRate)},function(){var E=0,R=0;r.promise=function(A){return!A||A.state()==="resolved"?this:(R===0&&r.start(),E++,R++,A.always(function(){R--,R===0?(E=0,r.done()):r.set((E-R)/E)}),this)}}(),r.render=function(E){if(r.isRendered())return document.getElementById("nprogress");y(document.documentElement,"nprogress-busy");var R=document.createElement("div");R.id="nprogress",R.innerHTML=s.template;var A=R.querySelector(s.barSelector),N=E?"-100":v(r.status||0),w=document.querySelector(s.parent),B;return m(A,{transition:"all 0 linear",transform:"translate3d("+N+"%,0,0)"}),s.showSpinner||(B=R.querySelector(s.spinnerSelector),B&&b(B)),w!=document.body&&y(w,"nprogress-custom-parent"),w.appendChild(R),R},r.remove=function(){g(document.documentElement,"nprogress-busy"),g(document.querySelector(s.parent),"nprogress-custom-parent");var E=document.getElementById("nprogress");E&&b(E)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var E=document.body.style,R="WebkitTransform"in E?"Webkit":"MozTransform"in E?"Moz":"msTransform"in E?"ms":"OTransform"in E?"O":"";return R+"Perspective"in E?"translate3d":R+"Transform"in E?"translate":"margin"};function u(E,R,A){return E<R?R:E>A?A:E}function v(E){return(-1+E)*100}function d(E,R,A){var N;return s.positionUsing==="translate3d"?N={transform:"translate3d("+v(E)+"%,0,0)"}:s.positionUsing==="translate"?N={transform:"translate("+v(E)+"%,0)"}:N={"margin-left":v(E)+"%"},N.transition="all "+R+"ms "+A,N}var h=function(){var E=[];function R(){var A=E.shift();A&&A(R)}return function(A){E.push(A),E.length==1&&R()}}(),m=function(){var E=["Webkit","O","Moz","ms"],R={};function A(C){return C.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(L,Z){return Z.toUpperCase()})}function N(C){var L=document.body.style;if(C in L)return C;for(var Z=E.length,te=C.charAt(0).toUpperCase()+C.slice(1),ee;Z--;)if(ee=E[Z]+te,ee in L)return ee;return C}function w(C){return C=A(C),R[C]||(R[C]=N(C))}function B(C,L,Z){L=w(L),C.style[L]=Z}return function(C,L){var Z=arguments,te,ee;if(Z.length==2)for(te in L)ee=L[te],ee!==void 0&&L.hasOwnProperty(te)&&B(C,te,ee);else B(C,Z[1],Z[2])}}();function p(E,R){var A=typeof E=="string"?E:I(E);return A.indexOf(" "+R+" ")>=0}function y(E,R){var A=I(E),N=A+R;p(A,R)||(E.className=N.substring(1))}function g(E,R){var A=I(E),N;p(E,R)&&(N=A.replace(" "+R+" "," "),E.className=N.substring(1,N.length-1))}function I(E){return(" "+(E.className||"")+" ").replace(/\s+/gi," ")}function b(E){E&&E.parentNode&&E.parentNode.removeChild(E)}return r})},34155:function(c){var l=c.exports={},e,o;function a(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?e=setTimeout:e=a}catch(b){e=a}try{typeof clearTimeout=="function"?o=clearTimeout:o=r}catch(b){o=r}})();function s(b){if(e===setTimeout)return setTimeout(b,0);if((e===a||!e)&&setTimeout)return e=setTimeout,setTimeout(b,0);try{return e(b,0)}catch(E){try{return e.call(null,b,0)}catch(R){return e.call(this,b,0)}}}function u(b){if(o===clearTimeout)return clearTimeout(b);if((o===r||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(b);try{return o(b)}catch(E){try{return o.call(null,b)}catch(R){return o.call(this,b)}}}var v=[],d=!1,h,m=-1;function p(){!d||!h||(d=!1,h.length?v=h.concat(v):m=-1,v.length&&y())}function y(){if(!d){var b=s(p);d=!0;for(var E=v.length;E;){for(h=v,v=[];++m<E;)h&&h[m].run();m=-1,E=v.length}h=null,d=!1,u(b)}}l.nextTick=function(b){var E=new Array(arguments.length-1);if(arguments.length>1)for(var R=1;R<arguments.length;R++)E[R-1]=arguments[R];v.push(new g(b,E)),v.length===1&&!d&&s(y)};function g(b,E){this.fun=b,this.array=E}g.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function I(){}l.on=I,l.addListener=I,l.once=I,l.off=I,l.removeListener=I,l.removeAllListeners=I,l.emit=I,l.prependListener=I,l.prependOnceListener=I,l.listeners=function(b){return[]},l.binding=function(b){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(b){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}},92703:function(c,l,e){"use strict";var o=e(50414);function a(){}function r(){}r.resetWarningCache=a,c.exports=function(){function s(d,h,m,p,y,g){if(g!==o){var I=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw I.name="Invariant Violation",I}}s.isRequired=s;function u(){return s}var v={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:u,element:s,elementType:s,instanceOf:u,node:s,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u,checkPropTypes:r,resetWarningCache:a};return v.PropTypes=v,v}},45697:function(c,l,e){if(!1)var o,a;else c.exports=e(92703)()},50414:function(c){"use strict";var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";c.exports=l},3798:function(c,l){"use strict";l.Z=`import { BusinessSelectBuilder, SchemaForm } from 'react-admin-kit';
import { queryBrand, queryColor, queryUser } from './query';

/**
 * \u5728\u5168\u5C40\u7EF4\u62A4 BusinessSelect
 */
type SelectType = 'color' | 'brand' | 'user'; // \u5B9A\u4E49 type \u7C7B\u578B
export const BusinessSelect = BusinessSelectBuilder<SelectType>({
  apis: [
    {
      api: queryColor,
      type: 'color',
      pagination: false,
    },
    {
      api: queryBrand,
      type: 'brand',
      pagination: true,
    },
    {
      api: queryUser,
      type: 'user',
    },
  ],
  defaultProps: {
    placeholder: '\u8BF7\u9009\u62E9',
  },
});

const Basic = () => {
  return (
    <SchemaForm
      grid
      colProps={{ span: 8 }}
      onFinish={(values) => console.log({ values })}
      autoFocusFirstInput={false}
      submitter={{}}
      columns={[
        {
          title: '\u989C\u8272-\u4E0D\u5206\u9875',
          dataIndex: 'color',
          renderFormItem: () => {
            return <BusinessSelect type="color" placeholder="\u8BF7\u9009\u62E9\u989C\u8272" />;
          },
        },
        {
          title: '\u54C1\u724C-\u5206\u9875(\u5E26\u641C\u7D22)',
          dataIndex: 'brand',
          renderFormItem: () => (
            <BusinessSelect
              labelInValue
              type="brand"
              placeholder="\u8BF7\u9009\u62E9\u54C1\u724C"
            />
          ),
        },
      ]}
    />
  );
};

export default Basic;
`},41362:function(c,l){"use strict";l.Z=`export const queryColor = (): Promise<any> => {
  return new Promise((resolve) => {
    console.log('queryColor only once');
    setTimeout(() => {
      resolve({
        data: [
          { name: '\u7EA2', id: 1 },
          { name: '\u7EFF', id: 2 },
        ],
      });
    }, 1000);
  });
};

export const queryBrand = (params): Promise<any> => {
  console.log('qeryBrand', { params });
  const data: any = [];
  const brands = ['\u82F9\u679C', '\u8C37\u6B4C', '\u534E\u4E3A', '\u5C0F\u7C73', '\u8682\u8681'];

  if (params.searchValue) {
    data.push({ name: params.searchValue, id: -Math.random() });
  } else {
    for (let i = 0; i < 10; i++) {
      const index = i % 5;
      data.push({ name: brands[index], id: Math.random() });
    }
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data,
        total: 30,
      });
    }, 500);
  });
};

export const queryUser = (params): Promise<any> => {
  return new Promise((resolve) => {
    console.log('queryUser', params);
    if (params.type === 1) {
      setTimeout(() => {
        resolve({
          data: [{ name: 'A', id: 1 }],
        });
      }, 500);
    }

    if (params.type === 2) {
      setTimeout(() => {
        resolve({
          data: [{ name: 'B', id: 2 }],
        });
      }, 600);
    }

    setTimeout(() => {
      resolve({
        data: [
          { name: 'A', id: 1, userName: '\u4EBA\u5458A', userId: 1 },
          { name: 'B', id: 2, userName: '\u4EBA\u5458B', userId: 2 },
          { name: 'C', id: 3, userName: '\u4EBA\u5458C', userId: 3 },
        ],
      });
    }, 1200);
  });
};
`},53927:function(c,l){"use strict";l.Z=`import { message } from 'antd';
import { useRef } from 'react';
import { Button, ModalForm, clearSelectCache } from 'react-admin-kit';
import { BusinessSelect } from '../basic';

const QueryParams = () => {
  const innerRef = useRef<any>();
  return (
    <div>
      <Button
        onClick={() => {
          clearSelectCache('user');
          message.info('\u7F13\u5B58\u6E05\u9664\u6210\u529F');
        }}
      >
        \u6E05\u9664\u7F13\u5B58
      </Button>

      <Button
        type="primary"
        style={{ marginLeft: '10px' }}
        onClick={() => innerRef.current?.openModal('new')}
      >
        \u6253\u5F00\u5F39\u7A97
      </Button>

      <ModalForm
        innerRef={innerRef}
        columns={[
          {
            title: '\u4EBA\u5458\u6240\u6709 (\u6CE8\u610F\u4E0B\u62C9\u6846\u4E0A\u7684 loading \u56FE\u6807)',
            renderFormItem: () => <BusinessSelect type="user" />,
          },
        ]}
      />
    </div>
  );
};

export default QueryParams;
`},72230:function(c,l){"use strict";l.Z=`import { SchemaForm } from 'react-admin-kit';
import { BusinessSelect } from '../basic';

const OneQuery = () => {
  return (
    <SchemaForm
      grid
      colProps={{ span: 8 }}
      onFinish={(values) => console.log({ values })}
      autoFocusFirstInput={false}
      columns={[
        {
          title: '\u989C\u8272',
          dataIndex: 'color',
          renderFormItem: () => <BusinessSelect type="color" />,
        },
        {
          title: '\u989C\u82722',
          dataIndex: 'color2',
          renderFormItem: () => <BusinessSelect type="color" />,
        },
        {
          title: '\u989C\u82723',
          dataIndex: 'color3',
          renderFormItem: () => <BusinessSelect type="color" />,
        },
      ]}
    />
  );
};

export default OneQuery;
`},22042:function(c,l){"use strict";l.Z=`import { SchemaForm } from 'react-admin-kit';
import { BusinessSelect } from '../basic';

const QueryParams = () => {
  return (
    <div>
      <SchemaForm
        grid
        colProps={{ span: 8 }}
        autoFocusFirstInput={false}
        columns={[
          {
            title: '\u4EBA\u5458\u6240\u6709',
            renderFormItem: () => <BusinessSelect type="user" />,
          },
          {
            title: '\u4EBA\u5458A',
            renderFormItem: () => (
              <BusinessSelect type="user" queryParams={{ type: 1 }} />
            ),
          },
          {
            title: '\u4EBA\u5458B',
            renderFormItem: () => (
              <BusinessSelect type="user" queryParams={{ type: 2 }} />
            ),
          },
        ]}
      />
    </div>
  );
};

export default QueryParams;
`},57818:function(c,l){"use strict";l.Z=`import { BusinessTreeSelectBuilder, SchemaForm } from 'react-admin-kit';
import { queryCompany, queryDept } from './query';

// \u5B9A\u4E49 type \u7C7B\u578B, \u65B9\u4FBF ts \u63D0\u793A
type TreeSelectType = 'company' | 'dept';

export const BusinessTreeSelect = BusinessTreeSelectBuilder<TreeSelectType>({
  apis: [
    {
      api: queryCompany,
      type: 'company',
    },
    {
      api: queryDept,
      type: 'dept',
    },
  ],
});

const Basic = () => {
  return (
    <SchemaForm
      grid
      colProps={{ span: 8 }}
      onFinish={(values) => console.log({ values })}
      autoFocusFirstInput={false}
      columns={[
        {
          title: '\u516C\u53F8',
          dataIndex: 'company',
          renderFormItem: () => <BusinessTreeSelect type="company" />,
        },
        {
          valueType: 'dependency',
          name: ['company'],
          columns: ({ company }) => {
            if (company) {
              return [
                {
                  title: '\u90E8\u95E8',
                  dataIndex: 'dept',
                  renderFormItem: () => (
                    <BusinessTreeSelect
                      queryParams={{ id: company }}
                      type="dept"
                    />
                  ),
                },
              ];
            } else {
              return [
                {
                  title: '\u90E8\u95E8',
                  dataIndex: 'dept',
                  fieldProps: { disabled: true, placeholder: '\u8BF7\u9009\u62E9\u516C\u53F8' },
                },
              ];
            }
          },
        },
      ]}
    />
  );
};

export default Basic;
`},83272:function(c,l){"use strict";l.Z=`export const queryCompany = () => {
  return new Promise((resolve) => {
    console.log('queryOrg only once');
    setTimeout(() => {
      resolve([
        {
          name: '\u96C6\u56E2\u516C\u53F8',
          id: 1,
          children: [
            {
              name: '\u4E1A\u52A1\u5B50\u516C\u53F8A',
              id: 2,
            },
            {
              name: '\u4E1A\u52A1\u5B50\u516C\u53F8B',
              id: 3,
            },
          ],
        },
        { name: '\u5176\u5B83\u516C\u53F8', id: -1 },
      ]);
    }, 1200);
  });
};

export const queryDept = (params): Promise<any> => {
  return new Promise((resolve) => {
    console.log('queryDept', params);
    setTimeout(() => {
      if (params.id === 1) {
        resolve([
          { name: '\u96C6\u56E2 - \u603B\u7ECF\u7406\u5BA4', id: 1 },
          {
            name: '\u96C6\u56E2 - \u9500\u552E\u90E8',
            id: 2,
            children: [
              { name: '\u96C6\u56E2 - \u9500\u552E\u90E81', id: 3 },
              { name: '\u96C6\u56E2 - \u9500\u552E\u90E82', id: 4 },
            ],
          },
        ]);
      } else if (params.id === 2 || params.id === 3) {
        resolve([
          {
            name: '\u5B50\u516C\u53F8 - \u90E8\u95E81',
            id: 1,
            children: [
              {
                name: '\u5B50\u516C\u53F8 - \u5B50\u90E8\u95E81',
                id: 2,
              },
              {
                name: '\u5B50\u516C\u53F8- \u5B50\u90E8\u95E82',
                id: 3,
              },
            ],
          },
        ]);
      } else {
        resolve([
          {
            name: '\u5176\u5B83\u516C\u53F8 - \u90E8\u95E81',
            id: 1,
            children: [
              {
                name: '\u5176\u5B83\u516C\u53F8 - \u5B50\u90E8\u95E81',
                id: 2,
              },
              {
                name: '\u5176\u5B83\u516C\u53F8 - \u5B50\u90E8\u95E82',
                id: 3,
              },
            ],
          },
          { name: '\u5176\u5B83\u516C\u53F8 - \u90E8\u95E82', id: -1 },
        ]);
      }
    }, 1000);
  });
};
`},62453:function(c,l){"use strict";l.Z=`import { message } from 'antd';
import { useRef } from 'react';
import { Button, ModalForm, clearTreeSelectCache } from 'react-admin-kit';
import { BusinessTreeSelect } from '../basic';

const ClearCacheDemo = () => {
  const innerRef = useRef<any>();

  return (
    <div>
      <Button
        onClick={() => {
          clearTreeSelectCache('company');
          message.info('\u7F13\u5B58\u6E05\u9664\u6210\u529F');
        }}
      >
        \u6E05\u9664\u7F13\u5B58
      </Button>

      <Button
        type="primary"
        style={{ marginLeft: '10px' }}
        onClick={() => innerRef.current?.openModal('new')}
      >
        \u6253\u5F00\u5F39\u7A97
      </Button>

      <ModalForm
        innerRef={innerRef}
        onFinish={(values) => console.log({ values })}
        columns={[
          {
            title: '\u516C\u53F8 (\u6CE8\u610F\u4E0B\u62C9\u6846\u4E0A\u7684 loading \u56FE\u6807)',
            dataIndex: 'company',
            renderFormItem: () => <BusinessTreeSelect type="company" />,
          },
        ]}
      />
    </div>
  );
};

export default ClearCacheDemo;
`},31816:function(c,l){"use strict";l.Z=`import { Space } from 'antd';
import { useState } from 'react';
import { Button } from 'react-admin-kit';

const Basic = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <Button onClick={() => setVisible(!visible)}>\u5207\u6362</Button>

      <div style={{ marginTop: '20px' }}>
        <Space>
          <Button visible={visible} type="primary">
            \u6743\u9650\u6309\u94AE
          </Button>
          <Button visible={() => visible} danger type="primary">
            \u6743\u9650\u6309\u94AE2
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default Basic;
`},53230:function(c,l){"use strict";l.Z=`import { useRef } from 'react';
import {
  FormUpload,
  LinkButton,
  SchemaForm,
  SettingProvider,
} from 'react-admin-kit';

const Basic = () => {
  const formRef = useRef<any>(null);
  return (
    <SettingProvider
      formUploadSetting={{
        action: 'https://mock.apifox.cn/m1/1864670-0-default/mockUpload',
        headers: { Authorization: 'myToken' },
        responseToFileList: (res) => ({ id: res?.data.id }), // \u5C06\u540E\u53F0\u8FD4\u56DE\u503C\u5408\u5E76\u8FDBfile\u5BF9\u8C61
      }}
    >
      <SchemaForm
        formRef={formRef}
        columns={[
          {
            title: '\u9644\u4EF6',
            dataIndex: 'files',
            renderFormItem: () => (
              <FormUpload>
                <LinkButton>\u4E0A\u4F20\u9644\u4EF6</LinkButton>
              </FormUpload>
            ),
          },
        ]}
        submitter={{}}
        onFinish={console.log}
      />
    </SettingProvider>
  );
};

export default Basic;
`},36444:function(c,l){"use strict";l.Z=`import { useEffect, useRef } from 'react';
import {
  FormUpload,
  LinkButton,
  SchemaForm,
  SettingProvider,
} from 'react-admin-kit';

const ChangeKey = () => {
  const formRef = useRef<any>();

  useEffect(() => {
    // \u6A21\u62DF\u8BF7\u6C42
    formRef.current?.setFieldsValue({
      fileList: [
        {
          id: 1,
          fileName: '\u7167\u72471',
          filePath:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          id: 2,
          fileName: '\u7167\u72472',
          filePath:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ],
    });
  }, []);

  return (
    <SettingProvider
      formUploadSetting={{
        action: 'https://mock.apifox.cn/m1/1864670-0-default/mockUpload',
        responseToFileList: (res) => res.data,
        nameKey: 'fileName',
        urlKey: 'filePath',
      }}
    >
      <SchemaForm
        formRef={formRef}
        columns={[
          {
            title: '\u9644\u4EF6',
            dataIndex: 'fileList',
            transform: (files) => ({
              fileIds: files.map((file) => file.id).join(','),
            }),
            renderFormItem: () => (
              <FormUpload>
                <LinkButton>\u4E0A\u4F20\u9644\u4EF6</LinkButton>
              </FormUpload>
            ),
          },
        ]}
        submitter={{}}
        onFinish={console.log}
      />
    </SettingProvider>
  );
};

export default ChangeKey;
`},13625:function(c,l){"use strict";l.Z=`import { useEffect, useRef } from 'react';
import { FormUpload, LinkButton, SchemaForm } from 'react-admin-kit';

const DataSubmit = () => {
  const formRef = useRef<any>();

  const onFinish = (values) => {
    console.log({ values });
  };

  useEffect(() => {
    // \u6A21\u62DF\u540E\u7AEF\u8FD4\u56DE
    formRef.current?.setFieldsValue({
      fileList: [
        {
          id: 1,
          fileName: '\u7167\u72471',
          filePath:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          id: 2,
          fileName: '\u7167\u72472',
          filePath:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ],
    });
  }, []);

  return (
    <SchemaForm
      columns={[
        {
          title: '\u9644\u4EF6',
          dataIndex: 'fileList',
          convertValue: (vals) => {
            if (vals) {
              return vals.map((val) => ({
                ...val,
                name: val.fileName,
                url: val.filePath,
              }));
            }

            return vals;
          },
          transform: (files) => ({
            fileIds: files.map((file) => file.id).join(','),
          }),
          renderFormItem: () => (
            <FormUpload
              action="https://mock.apifox.cn/m1/1864670-0-default/mockUpload"
              // \u4EC5\u7528\u4E8E\u793A\u8303, \u4E00\u822C\u5728\u5168\u5C40\u8BBE\u7F6E. \u53EF\u5C06\u670D\u52A1\u7AEF\u8FD4\u56DE\u503C\u5408\u5E76\u8FDB\u6587\u4EF6\u5217\u8868
              responseToFileList={(res) => res.data}
            >
              <LinkButton>\u4E0A\u4F20\u9644\u4EF6</LinkButton>
            </FormUpload>
          ),
        },
      ]}
      submitter={{}}
      onFinish={onFinish}
    />
  );
};

export default DataSubmit;
`},53148:function(c,l){"use strict";l.Z=`import { message } from 'antd';
import {
  FormUpload,
  LinkButton,
  SchemaForm,
  SettingProvider,
} from 'react-admin-kit';

const ErrorHandle = () => {
  return (
    <SettingProvider
      formUploadSetting={{
        action: 'https://mock.apifox.cn/m1/1864670-0-default/mockUploadFailed',
        headers: { Authorization: 'myToken' },
        responseToFileList: (res) => ({ id: res?.data?.id }), // \u5C06\u540E\u53F0\u8FD4\u56DE\u503C\u5408\u5E76\u8FDBfile\u5BF9\u8C61
        errorHandle: (res) => {
          message.error('\u4E0A\u4F20\u5931\u8D25 ' + res?.message || '');
        },
      }}
    >
      <SchemaForm
        columns={[
          {
            title: '\u9644\u4EF6',
            dataIndex: 'files',
            formItemProps: {
              rules: [{ required: true, message: '\u8BF7\u4E0A\u4F20\u9644\u4EF6' }],
            },
            renderFormItem: () => (
              <FormUpload>
                <LinkButton>\u4E0A\u4F20\u9644\u4EF6</LinkButton>
              </FormUpload>
            ),
          },
        ]}
        submitter={{}}
        onFinish={console.log}
      />
    </SettingProvider>
  );
};

export default ErrorHandle;
`},92033:function(c,l){"use strict";l.Z=`import { message } from 'antd';
import { useRef } from 'react';
import { FormUpload, LinkButton, SchemaForm } from 'react-admin-kit';

const Show = () => {
  const formRef = useRef<any>();

  return (
    <SchemaForm
      formRef={formRef}
      initialValues={{
        files: [
          {
            id: 1,
            name: '\u7167\u72471',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
          {
            id: 2,
            name: '\u7167\u72472',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
        ],
      }}
      columns={[
        {
          title: '\u9644\u4EF6',
          dataIndex: 'files',
          renderFormItem: () => (
            <FormUpload
              action="https://mock.apifox.cn/m1/1864670-0-default/mockUpload"
              listType="picture-card"
              beforeUpload={(file) => {
                const isImage =
                  file.type === 'image/jpeg' || file.type === 'image/png';
                if (!isImage) {
                  message.error('\u8BF7\u4E0A\u4F20 JPG/PNG \u6587\u4EF6!');
                  return false;
                }
              }}
            >
              <LinkButton>\u4E0A\u4F20\u9644\u4EF6</LinkButton>
            </FormUpload>
          ),
        },
      ]}
      submitter={{}}
      onFinish={console.log}
    />
  );
};

export default Show;
`},847:function(c,l){"use strict";l.Z=`import { Space } from 'antd';
import { LinkButton } from 'react-admin-kit';

const Basic = () => {
  return (
    <div style={{ backgroundColor: '#e6f4ff', padding: '10px' }}>
      <Space size={'middle'}>
        <LinkButton>\u7F16\u8F91</LinkButton>
        <LinkButton loading>\u7F16\u8F91</LinkButton>
        <LinkButton disabled>\u7F16\u8F91</LinkButton>
        <LinkButton danger>\u5220\u9664</LinkButton>
      </Space>
    </div>
  );
};

export default Basic;
`},26449:function(c,l){"use strict";l.Z=`import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '\u5E8F\u53F7',
    valueType: 'index',
    width: 48,
  },
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'username',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7535\u8BDD\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
  {
    title: '\u6635\u79F0',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u6635\u79F0\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
    dataIndex: 'nickName',
  },
  {
    title: '\u6027\u522B',
    dataIndex: 'sex',
    valueEnum: {
      \u7537: { text: '\u7537' },
      \u5973: { text: '\u5973' },
    },
  },
  {
    title: '\u8EAB\u4EFD\u8BC1\u53F7',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u8EAB\u4EFD\u8BC1\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
    dataIndex: 'idNumber',
  },
];
`},62091:function(c,l){"use strict";l.Z=`import { useState } from 'react';
import { Button, ModalForm } from 'react-admin-kit';
import { columns } from './columns';

const Basic = () => {
  const [open, setOpen] = useState(false);

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <div style={{ textAlign: 'start' }}>
        <Button type="primary" onClick={() => setOpen(true)}>
          \u6253\u5F00\u5F39\u7A97
        </Button>
      </div>

      <ModalForm
        title={'\u57FA\u672C\u8868\u5355'}
        open={open}
        onCancel={() => setOpen(false)}
        onFinish={onFinish}
        columns={columns}
      />
    </div>
  );
};

export default Basic;
`},35574:function(c,l){"use strict";l.Z=`import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'name',
  },
  {
    title: '\u90E8\u95E8',
    dataIndex: 'deptId,deptName',
    valueType: 'treeSelect',
    width: 'sm',
    fieldProps: {
      placeholder: '\u8BF7\u9009\u62E9',
      labelInValue: true,
      options: [
        {
          value: '1',
          label: 'A\u516C\u53F8',
          children: [
            { value: '2', label: '\u6280\u672F\u90E8' },
            { value: '3', label: '\u9500\u552E\u90E8' },
          ],
        },
      ],
    },
  },
  {
    title: '\u4F1A\u5458',
    dataIndex: 'isMember',
    valueType: 'radio',
    fieldProps: {
      options: [
        { label: '\u5426', value: 0 },
        { label: '\u662F', value: 1 },
      ],
    },
  },
  {
    valueType: 'dependency',
    name: ['isMember'],
    columns: ({ isMember }) => {
      if (isMember) {
        return [
          {
            title: '\u4F1A\u5458\u7B49\u7EA7',
            dataIndex: 'gradeId,gradeName',
            valueType: 'select',
            fieldProps: {
              labelInValue: true,
              options: [
                { value: '1', label: 'A' },
                { value: '2', label: 'B' },
              ],
            },
          },
        ];
      }

      return [];
    },
  },
];
`},80117:function(c,l){"use strict";l.Z=`import { Button, Space } from 'antd';
import { useRef } from 'react';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { ModalForm } from 'react-admin-kit';
import { columns } from './columns';

const ConventionDemo = () => {
  const innerRef = useRef<ModalFormInnerRefType>();

  const onFinish = async (values: any, formType, formData) => {
    console.log({ values, formType, formData });
  };

  return (
    <div>
      <Space>
        <Button
          type="primary"
          onClick={() =>
            innerRef.current?.openModal('edit', {
              id: '1',
              name: 'tom',
              deptId: '3',
              deptName: '\u9500\u552E\u90E8',
              isMember: 1,
              gradeId: '2',
              gradeName: 'B',
            })
          }
        >
          \u7F16\u8F91
        </Button>
      </Space>

      <ModalForm
        title={'\u57FA\u672C\u8868\u5355'}
        innerRef={innerRef}
        onFinish={onFinish}
        columns={columns}
      />
    </div>
  );
};

export default ConventionDemo;
`},28310:function(c,l){"use strict";l.Z=`import { Select } from 'antd';
import type { FormColumnType } from 'react-admin-kit';

export const getColumns = (): FormColumnType[] => [
  {
    title: '\u662F\u5426\u663E\u793A\u7535\u8BDD',
    dataIndex: 'showPhone',
    renderFormItem: () => (
      <Select
        options={[
          { label: '\u662F', value: 1 },
          { label: '\u5426', value: 0 },
        ]}
      />
    ),
  },
  {
    valueType: 'dependency',
    name: ['showPhone'],
    columns: ({ showPhone }) => {
      if (showPhone) {
        return [
          {
            title: '\u7535\u8BDD',
            dataIndex: 'phone',
          },
        ];
      } else {
        return [];
      }
    },
  },
];
`},74448:function(c,l){"use strict";l.Z=`import { Button } from 'antd';
import { useRef } from 'react';
import { ModalForm } from 'react-admin-kit';
import { getColumns } from './columns';

const InitValueDemo = () => {
  const innerRef = useRef<any>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <div style={{ textAlign: 'start' }}>
        <Button type="primary" onClick={() => innerRef.current.openModal()}>
          \u6253\u5F00\u5F39\u7A97
        </Button>
      </div>

      <ModalForm
        title={'\u57FA\u672C\u8868\u5355'}
        innerRef={innerRef}
        onFinish={onFinish}
        columns={getColumns()}
        formProps={{ initialValues: { showPhone: 0 } }}
      />
    </div>
  );
};

export default InitValueDemo;
`},96169:function(c,l){"use strict";l.Z=`import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'username',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7535\u8BDD\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
];
`},65516:function(c,l){"use strict";l.Z=`import { useRef } from 'react';
import { Button, ModalForm } from 'react-admin-kit';
import { columns } from './columns';

import type { ModalFormInnerRefType } from 'react-admin-kit';

const InnerRefDemo = () => {
  const ref = useRef<ModalFormInnerRefType>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <div style={{ textAlign: 'start' }}>
        <Button type="primary" onClick={() => ref.current?.openModal()}>
          \u6253\u5F00\u5F39\u7A97
        </Button>
      </div>

      <ModalForm
        innerRef={ref}
        title={'\u57FA\u672C\u8868\u5355\u975E\u53D7\u63A7'}
        onFinish={onFinish}
        columns={columns}
      />
    </div>
  );
};

export default InnerRefDemo;
`},64021:function(c,l){"use strict";l.Z=`import type { SelectProps } from 'antd';
import type { FormColumnType } from 'react-admin-kit';

export const getColumns = (): FormColumnType[] => [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'name',
  },
  {
    title: '\u90E8\u95E8 (\u5305\u542B\u989D\u5916\u4FE1\u606F)',
    dataIndex: 'deptId,deptName',
    valueType: 'select',
    fieldProps: (form, innerRef): SelectProps<any, any> => ({
      labelInValue: true,
      options: [
        {
          label: '\u9500\u552E\u90E8',
          value: '1',
          otherId: 'A',
        },
        {
          label: '\u6280\u672F\u90E8',
          value: '2',
          otherId: 'B',
        },
      ],
      onChange: (val, option) => {
        innerRef.current?.setData({ otherId: option.otherId });
      },
    }),
  },
];
`},70323:function(c,l){"use strict";l.Z=`import { useRef } from 'react';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { Button, ModalForm } from 'react-admin-kit';

import { getColumns } from './columns';

const InnerRefDataDemo = () => {
  const innerRef = useRef<ModalFormInnerRefType>(null);

  const onFinish = async (values: any) => {
    const { otherId } = innerRef.current?.data;
    console.log({ values, otherId });
  };

  return (
    <div>
      <Button type="primary" onClick={() => innerRef.current?.openModal()}>
        \u65B0\u5EFA\u8868\u5355
      </Button>
      <ModalForm
        columns={getColumns()}
        innerRef={innerRef}
        onFinish={onFinish}
      />
    </div>
  );
};

export default InnerRefDataDemo;
`},66830:function(c,l){"use strict";l.Z=`import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '\u5E8F\u53F7',
    valueType: 'index',
    width: 48,
  },
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'username',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
  },
  {
    title: '\u6635\u79F0',
    dataIndex: 'nickName',
  },
  {
    title: '\u5E74\u9F84',
    dataIndex: 'age',
  },
  {
    title: '\u804C\u4E1A',
    dataIndex: 'profession',
  },
  {
    title: '\u7231\u597D',
    dataIndex: 'hobby',
  },
  {
    title: '\u6027\u522B',
    dataIndex: 'sex',
    valueEnum: {
      \u7537: { text: '\u7537' },
      \u5973: { text: '\u5973' },
    },
  },
  {
    title: '\u8EAB\u4EFD\u8BC1\u53F7',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u8EAB\u4EFD\u8BC1\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
    dataIndex: 'idNumber',
  },
];
`},4951:function(c,l){"use strict";l.Z=`import { useRef } from 'react';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { Button, ModalForm } from 'react-admin-kit';
import { columns } from './columns';

const LongForm = () => {
  const innerRef = useRef<ModalFormInnerRefType>(null);

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <div style={{ textAlign: 'start' }}>
        <Button type="primary" onClick={() => innerRef.current?.openModal()}>
          \u6253\u5F00\u5F39\u7A97
        </Button>
      </div>

      <ModalForm
        title={'\u957F\u8868\u5355\u9A8C\u8BC1'}
        innerRef={innerRef}
        onFinish={onFinish}
        columns={columns}
      />
    </div>
  );
};

export default LongForm;
`},57820:function(c,l){"use strict";l.Z=`import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '\u5E8F\u53F7',
    valueType: 'index',
    width: 48,
  },
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'username',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
  },
  {
    title: '\u6635\u79F0',
    dataIndex: 'nickName',
  },
  {
    title: '\u5E74\u9F84',
    dataIndex: 'age',
  },
  {
    title: '\u804C\u4E1A',
    dataIndex: 'profession',
  },
  {
    title: '\u7231\u597D',
    dataIndex: 'hobby',
  },
  {
    title: '\u6027\u522B',
    dataIndex: 'sex',
    valueEnum: {
      \u7537: { text: '\u7537' },
      \u5973: { text: '\u5973' },
    },
  },
  {
    title: '\u8EAB\u4EFD\u8BC1\u53F7',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u8EAB\u4EFD\u8BC1\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
    dataIndex: 'idNumber',
  },
];
`},34234:function(c,l){"use strict";l.Z=`import { useRef } from 'react';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { Button, ModalForm } from 'react-admin-kit';
import { columns } from './columns';

const MultipleCol = () => {
  const innerRef = useRef<ModalFormInnerRefType>(null);

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <div style={{ textAlign: 'start' }}>
        <Button type="primary" onClick={() => innerRef.current?.openModal()}>
          \u6253\u5F00\u5F39\u7A97
        </Button>
      </div>

      <ModalForm
        width={600}
        title={'\u591A\u5217\u6392\u5E03'}
        innerRef={innerRef}
        onFinish={onFinish}
        columns={columns}
        formProps={{
          grid: true,
          rowProps: { gutter: [24, 0] },
          colProps: { span: 12 },
        }}
      />
    </div>
  );
};

export default MultipleCol;
`},84892:function(c,l){"use strict";l.Z=`import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'username',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7535\u8BDD\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
];
`},74474:function(c,l){"use strict";l.Z=`import { Button, Space } from 'antd';
import { useRef } from 'react';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { ModalForm } from 'react-admin-kit';
import { columns } from './columns';

const OnFinishDemo = () => {
  const innerRef = useRef<ModalFormInnerRefType>();

  const onFinish = (values: any, formType, formData) => {
    console.log({ values, formType, formData });
  };

  return (
    <div>
      <Space>
        <Button
          type="primary"
          onClick={() => innerRef.current?.openModal('new')}
        >
          \u65B0\u589E
        </Button>

        <Button
          type="primary"
          onClick={() =>
            innerRef.current?.openModal('edit', {
              id: '1',
              username: '\u738B\u5148\u751F',
              phone: '15800018888',
            })
          }
        >
          \u7F16\u8F91
        </Button>
      </Space>

      <ModalForm
        title={'\u57FA\u672C\u8868\u5355'}
        innerRef={innerRef}
        onFinish={onFinish}
        columns={columns}
      />
    </div>
  );
};

export default OnFinishDemo;
`},27652:function(c,l){"use strict";l.Z=`import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'username',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7535\u8BDD\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
];
`},78978:function(c,l){"use strict";l.Z=`import { Button, Space } from 'antd';
import { useRef } from 'react';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { ModalForm } from 'react-admin-kit';
import { columns } from './columns';

const OnOpenDemo = () => {
  const innerRef = useRef<ModalFormInnerRefType>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  const requestData = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };

  return (
    <div>
      <Space>
        <Button
          type="primary"
          onClick={() => innerRef.current?.openModal('new')}
        >
          \u65B0\u589E
        </Button>

        <Button
          type="primary"
          onClick={() => innerRef.current?.openModal('edit')}
        >
          \u7F16\u8F91
        </Button>

        <Button
          type="primary"
          onClick={() => innerRef.current?.openModal('read')}
        >
          \u67E5\u770B
        </Button>
      </Space>

      <ModalForm
        title={'\u57FA\u672C\u8868\u5355'}
        innerRef={innerRef}
        onFinish={onFinish}
        columns={columns}
        onOpen={(formType, formRef) => {
          if (formType === 'edit' || formType === 'read') {
            return requestData().then(() => {
              // \u8FD9\u91CC\u6CA1\u6709\u4F7F\u7528setFieldsValue()\u662F\u4E0D\u60F3\u5F15\u8D77field touched.
              // ModalForm\u7684\u5C5E\u6027confirmOnClose\u9ED8\u8BA4\u662Ftrue
              formRef.current?.setFields([
                {
                  name: 'username',
                  value: '\u738B\u5148\u751F',
                  touched: false,
                },
                {
                  name: 'phone',
                  value: '15800018888',
                  touched: false,
                },
              ]);
            });
          }
        }}
      />
    </div>
  );
};

export default OnOpenDemo;
`},54331:function(c,l){"use strict";l.Z=`import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'username',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7535\u8BDD\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
];
`},68887:function(c,l){"use strict";l.Z=`import { Button, Space } from 'antd';
import { useRef } from 'react';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { ModalForm } from 'react-admin-kit';
import { columns } from './columns';

const ReadonlyDemo = () => {
  const ref = useRef<ModalFormInnerRefType>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <Space>
        <Button type="primary" onClick={() => ref.current?.openModal()}>
          \u6253\u5F00\u5F39\u7A97
        </Button>
        <Button
          type="primary"
          onClick={() =>
            ref.current?.openModal('read', { username: '\u738B\u5148\u751F', phone: 134 })
          }
        >
          \u53EA\u8BFB\u6A21\u5F0F
        </Button>
      </Space>

      <ModalForm
        innerRef={ref}
        title={'\u57FA\u672C\u8868\u5355\u975E\u53D7\u63A7'}
        onFinish={onFinish}
        columns={columns}
      />
    </div>
  );
};

export default ReadonlyDemo;
`},65942:function(c,l){"use strict";l.Z=`export const mockRequest = (): any => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          data: [
            { id: 1, name: 'Jack', phone: 133 },
            { id: 2, name: 'Tom', phone: 155 },
          ],
          success: true,
          total: 2,
        }),
      1000,
    );
  });
};

export const delelteRecord = (ids) => {
  return new Promise((resolve) => {
    console.log('delete record', ids);
    setTimeout(() => resolve(true), 500);
  });
};
`},57914:function(c,l){"use strict";l.Z=`import type { TableColumnType } from 'react-admin-kit';
import { LinkButton } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'name',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
  },
  {
    title: '\u6635\u79F0',
    dataIndex: 'nickName',
    hideInSearch: true,
  },
  {
    title: '\u6027\u522B',
    dataIndex: 'sex',
    formItemProps: {},
    valueEnum: {
      \u7537: { text: '\u7537' },
      \u5973: { text: '\u5973' },
    },
  },
  {
    title: '\u8EAB\u4EFD\u8BC1\u53F7',
    dataIndex: 'idNumber',
    hideInSearch: true,
  },
  {
    title: '\u64CD\u4F5C',
    valueType: 'option',
    enableDelete: true,
    render: (text, record, index, actionRef, innerRef) => [
      <LinkButton
        key={1}
        onClick={() => innerRef.current?.openModal('edit', record)}
      >
        \u7F16\u8F91
      </LinkButton>,
    ],
  },
];
`},86264:function(c,l){"use strict";l.Z=`import { Button, message } from 'antd';
import { useRef } from 'react';
import type { ActionRefType, InnerRefType } from 'react-admin-kit';
import { ProTable } from 'react-admin-kit';
import { delelteRecord, mockRequest } from './apis';

import { getColumns } from './columns';

export const FORM_TYPE_MAP = {
  new: '\u65B0\u589E',
  edit: '\u7F16\u8F91',
  read: '\u67E5\u770B',
};

const Basic = () => {
  const innerRef = useRef<InnerRefType>();
  const actionRef = useRef<ActionRefType>();

  return (
    <div>
      <ProTable
        name="\u7528\u6237"
        columns={getColumns()}
        request={mockRequest}
        bordered
        innerRef={innerRef}
        actionRef={actionRef}
        toolbar={{
          actions: [
            <Button
              key={1}
              type="primary"
              onClick={() => {
                innerRef.current?.openModal();
              }}
            >
              \u65B0\u589E
            </Button>,
          ],
        }}
        rowSelection={{}}
        delFunction={delelteRecord}
        onFinish={(values, type) => {
          console.log({ values });
          // \u6A21\u62DF\u8BF7\u6C42
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(true);

              message.success(FORM_TYPE_MAP[type] + '\u6210\u529F');
              actionRef.current?.reload();
            }, 1000);
          });
        }}
      />
    </div>
  );
};

export default Basic;
`},45869:function(c,l){"use strict";l.Z=`import { Popconfirm } from 'antd';
import type { TableColumnType } from 'react-admin-kit';
import { LinkButton } from 'react-admin-kit';

export const getColumns = (handleDel: any): TableColumnType[] => [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'name',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
  },
  {
    title: '\u51FA\u751F\u65E5\u671F',
    dataIndex: 'birthday',
    valueType: 'date',
  },

  {
    title: '\u6027\u522B',
    dataIndex: 'sex',
    formItemProps: {},
    valueEnum: {
      \u7537: { text: '\u7537' },
      \u5973: { text: '\u5973' },
    },
  },
  {
    title: '\u8EAB\u4EFD\u8BC1\u53F7',
    dataIndex: 'idNumber',
    hideInSearch: true,
  },
  {
    title: '\u64CD\u4F5C',
    valueType: 'option',
    enableDelete: true,
    render: (text, record, index, actionRef, innerRef) => [
      <LinkButton
        key={1}
        onClick={() => innerRef.current?.openModal('edit', record)}
      >
        \u7F16\u8F91
      </LinkButton>,
      <Popconfirm
        key={2}
        title="\u786E\u8BA4\u5220\u9664\u5417?"
        onConfirm={() => handleDel(record.id)}
      >
        <LinkButton danger>\u5220\u9664</LinkButton>
      </Popconfirm>,
    ],
  },
];
`},86843:function(c,l){"use strict";l.Z=`import { Button } from 'antd';
import produce from 'immer';
import { useRef, useState } from 'react';
import { ProTable } from 'react-admin-kit';

import { getColumns } from './columns';

const Controlled = () => {
  const innerRef = useRef<any>();

  const [dataSource, setDataSource] = useState([
    { id: 1, name: '\u738B\u5148\u751F', phone: '1596668888', sex: '\u7537' },
  ]);

  const onFinish = (values: any, type: any, formData: any) => {
    if (type === 'new') {
      setDataSource(dataSource.concat({ ...values, id: Date.now() }));
    }

    if (type === 'edit') {
      const newData = produce(dataSource, (draft) => {
        const index = draft.findIndex((item) => item.id === formData.id);
        draft[index] = { ...formData, ...values };
      });

      setDataSource(newData);
    }
  };

  const handleDel = (id: string | number) => {
    setDataSource(dataSource.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div style={{ textAlign: 'right', marginBottom: '10px' }}>
        <Button
          type="primary"
          onClick={() => {
            innerRef.current.openModal();
          }}
        >
          \u65B0\u589E\u7528\u6237
        </Button>
      </div>
      <ProTable
        columns={getColumns(handleDel)}
        dataSource={dataSource}
        innerRef={innerRef}
        onFinish={onFinish}
        bordered
        search={false}
        pagination={false}
        noPadding
      />
    </div>
  );
};

export default Controlled;
`},73254:function(c,l){"use strict";l.Z=`export const mockRequest = (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          data: [
            {
              id: '1',
              name: 'tom',
              deptId: '3',
              deptName: '\u9500\u552E\u90E8',
              isMember: 1,
              gradeId: '2',
              gradeName: 'B',
            },
          ],
        }),
      1000,
    );
  });
};
`},36274:function(c,l){"use strict";l.Z=`import type { TableColumnType } from 'react-admin-kit';
import { LinkButton } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'name',
  },
  {
    title: '\u90E8\u95E8',
    dataIndex: 'deptId,deptName',
    valueType: 'treeSelect',
    width: 'sm',
    fieldProps: {
      placeholder: '\u8BF7\u9009\u62E9',
      labelInValue: true,
      options: [
        {
          value: '1',
          label: 'A\u516C\u53F8',
          children: [
            { value: '2', label: '\u6280\u672F\u90E8' },
            { value: '3', label: '\u9500\u552E\u90E8' },
          ],
        },
      ],
    },
    renderText: (text, record) => record.deptName,
  },
  {
    title: '\u4F1A\u5458',
    dataIndex: 'isMember',
    valueType: 'radio',
    fieldProps: {
      options: [
        { label: '\u5426', value: 0 },
        { label: '\u662F', value: 1 },
      ],
    },
  },

  // \u4EC5\u5728table\u4E2D\u663E\u793A
  {
    title: '\u4F1A\u5458\u7B49\u7EA7',
    dataIndex: 'gradeName',
    hideInForm: true,
  },

  // \u4EC5\u5728form\u4E2D\u663E\u793A
  {
    hideInTable: true,
    valueType: 'dependency',
    name: ['isMember'],
    columns: ({ isMember }) => {
      if (isMember) {
        return [
          {
            title: '\u4F1A\u5458\u7B49\u7EA7',
            dataIndex: 'gradeId,gradeName',
            valueType: 'select',
            fieldProps: {
              labelInValue: true,
              options: [
                { value: '1', label: 'A' },
                { value: '2', label: 'B' },
              ],
            },
          },
        ];
      }

      return [];
    },
  },
  {
    valueType: 'option',
    title: '\u64CD\u4F5C',
    render: (text, record, index, actionRef, innerRef) => [
      <LinkButton
        key={1}
        onClick={() => innerRef.current?.openModal('edit', record)}
      >
        \u7F16\u8F91
      </LinkButton>,
    ],
  },
];
`},45229:function(c,l){"use strict";l.Z=`import { message } from 'antd';
import { useRef } from 'react';
import { ProTable } from 'react-admin-kit';
import { mockRequest } from './apis';

import { getColumns } from './columns';

export const FORM_TYPE_MAP = {
  new: '\u65B0\u589E',
  edit: '\u7F16\u8F91',
  read: '\u67E5\u770B',
};

const ConventionDemo = () => {
  const innerRef = useRef<any>();
  const actionRef = useRef<any>();

  const onFinish = (values: any, type, formData) => {
    console.log({ values, type, formData });
    // \u6A21\u62DF\u8BF7\u6C42
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);

        message.success(FORM_TYPE_MAP[type] + '\u6210\u529F');
        actionRef.current?.reload();
      }, 1000);
    });
  };

  return (
    <div>
      <ProTable
        name="\u7528\u6237"
        columns={getColumns()}
        innerRef={innerRef}
        actionRef={actionRef}
        request={mockRequest}
        onFinish={onFinish}
        bordered
        search={false}
        pagination={false}
        formProps={{
          layout: 'horizontal',
          labelCol: { span: 4 },
        }}
      />
    </div>
  );
};

export default ConventionDemo;
`},70319:function(c,l){"use strict";l.Z=`export const mockRequest = (params: any): any => {
  console.log('\u8BF7\u6C42\u6570\u636E\u53C2\u6570:', params);
  return new Promise((resolve) => {
    setTimeout(
      () => {
        if (params.current === 1) {
          resolve({
            data: [
              { id: 1, name: 'Jack', phone: 133 },
              { id: 2, name: 'Tom', phone: 155 },
              { id: 3, name: 'Jeff', phone: 133 },
              { id: 4, name: 'Janni', phone: 155 },
              { id: 5, name: 'Tim', phone: 155 },
            ],
            success: true,
            total: 6,
          });
        } else {
          resolve({
            data: [{ id: 6, name: 'Steve', phone: 133 }],
            success: true,
            total: 6,
          });
        }
      },

      1000,
    );
  });
};

export const mockAdd = (data: any) => {
  console.log('\u521B\u5EFA\u7528\u6237\u53C2\u6570:', data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};
`},36205:function(c,l){"use strict";l.Z=`import type { TableColumnType } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'name',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
  },
  {
    title: '\u6635\u79F0',
    dataIndex: 'nickName',
    hideInSearch: true,
  },
  {
    title: '\u6027\u522B',
    dataIndex: 'sex',
    formItemProps: {},
    valueEnum: {
      \u7537: { text: '\u7537' },
      \u5973: { text: '\u5973' },
    },
  },
  {
    title: '\u8EAB\u4EFD\u8BC1\u53F7',
    dataIndex: 'idNumber',
    hideInSearch: true,
  },
];
`},61728:function(c,l){"use strict";l.Z=`import { useRef } from 'react';
import type { ActionRefType, InnerRefType } from 'react-admin-kit';
import { Button, ProTable } from 'react-admin-kit';
import { mockAdd, mockRequest } from './apis';

import { message } from 'antd';
import { getColumns } from './columns';

const Create = () => {
  const innerRef = useRef<InnerRefType>(null);
  const actionRef = useRef<ActionRefType>(null);

  return (
    <ProTable
      columns={getColumns()}
      request={mockRequest}
      pagination={{ pageSize: 5 }}
      innerRef={innerRef}
      toolbar={{
        actions: [
          <Button
            key={1}
            type="primary"
            onClick={() => innerRef.current?.openModal()}
          >
            \u65B0\u589E
          </Button>,
        ],
      }}
      onFinish={async (values, formType) => {
        if (formType === 'new') {
          await mockAdd(values);
          message.success('\u65B0\u5EFA\u6210\u529F!');
          actionRef.current?.reload();
        }
      }}
    />
  );
};

export default Create;
`},64084:function(c,l){"use strict";l.Z=`export const mockRequest = (params: any): any => {
  console.log('\u8BF7\u6C42\u6570\u636E\u53C2\u6570:', params);
  return new Promise((resolve) => {
    setTimeout(
      () => {
        if (params.current === 1) {
          resolve({
            data: [
              { id: 1, name: 'Jack', phone: 133 },
              { id: 2, name: 'Tom', phone: 155 },
              { id: 3, name: 'Jeff', phone: 133 },
              { id: 4, name: 'Janni', phone: 155 },
              { id: 5, name: 'Tim', phone: 155 },
            ],
            success: true,
            total: 6,
          });
        } else {
          resolve({
            data: [{ id: 6, name: 'Steve', phone: 133 }],
            success: true,
            total: 6,
          });
        }
      },

      1000,
    );
  });
};

export const mockAdd = (data: any) => {
  console.log('\u521B\u5EFA\u7528\u6237\u53C2\u6570:', data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};

export const mockUpdate = (data: any) => {
  console.log('\u66F4\u65B0\u7528\u6237\u53C2\u6570:', data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};

export const mockDetroy = (data: any) => {
  console.log('\u5220\u9664\u7528\u6237\u53C2\u6570:', data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};
`},62965:function(c,l){"use strict";l.Z=`import { LinkButton, type TableColumnType } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'name',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
  },
  {
    title: '\u6635\u79F0',
    dataIndex: 'nickName',
    hideInSearch: true,
  },
  {
    title: '\u6027\u522B',
    dataIndex: 'sex',
    formItemProps: {},
    valueEnum: {
      \u7537: { text: '\u7537' },
      \u5973: { text: '\u5973' },
    },
  },
  {
    title: '\u8EAB\u4EFD\u8BC1\u53F7',
    dataIndex: 'idNumber',
    hideInSearch: true,
  },
  {
    title: '\u64CD\u4F5C',
    valueType: 'option', // valueType \u8BBE\u4E3A option \u4EE3\u8868\u662F\u64CD\u4F5C\u5217
    render: (text, record, index, actionRef, innerRef) => [
      <LinkButton
        key={1}
        onClick={() => {
          console.log('editclick', innerRef);
          innerRef.current?.openModal('edit', record);
        }}
      >
        \u7F16\u8F91
      </LinkButton>,
    ],
  },
];
`},24614:function(c,l){"use strict";l.Z=`import { useRef } from 'react';
import type { ActionRefType, InnerRefType } from 'react-admin-kit';
import { Button, ProTable } from 'react-admin-kit';
import { mockAdd, mockDetroy, mockRequest, mockUpdate } from './apis';

import { message } from 'antd';
import { getColumns } from './columns';

const Destroy = () => {
  const innerRef = useRef<InnerRefType>(null);
  const actionRef = useRef<ActionRefType>(null);

  return (
    <ProTable
      columns={getColumns()}
      request={mockRequest}
      pagination={{ pageSize: 5 }}
      innerRef={innerRef}
      toolbar={{
        actions: [
          <Button
            key={1}
            type="primary"
            onClick={() => innerRef.current?.openModal()}
          >
            \u65B0\u589E
          </Button>,
        ],
      }}
      onFinish={async (values, formType, formData) => {
        if (formType === 'new') {
          await mockAdd(values);
          message.success('\u65B0\u5EFA\u6210\u529F!');
          actionRef.current?.reload();
        }

        if (formType === 'edit') {
          await mockUpdate({ ...values, id: formData.id });
          message.success('\u66F4\u65B0\u6210\u529F!');
          actionRef.current?.reload();
        }
      }}
      delFunction={mockDetroy}
      rowSelection={{}}
    />
  );
};

export default Destroy;
`},89398:function(c,l){"use strict";l.Z=`export const mockRequestForExport = (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          data: [
            {
              id: 1,
              name: 'Jack',
              birthday: 1667375314278,
              sex: 'man',
              type: '1',
              range: [1667375314278, 1667375314278],
              status: '1',
              createTime: 1667375314278,
            },
          ],
        }),
      1000,
    );
  });
};
`},35912:function(c,l){"use strict";l.Z=`import { Tag } from 'antd';
import type { TableColumnType } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'name',
    width: 80,
  },
  {
    title: '\u751F\u65E5',
    dataIndex: 'birthday',
    valueType: 'date',
    width: 110,
  },
  {
    title: '\u6027\u522B',
    dataIndex: 'sex',
    valueType: 'select',
    valueEnum: {
      man: { text: '\u7537' },
      woman: { text: '\u5973' },
    },
    width: 80,
  },
  {
    title: '\u7C7B\u578B',
    dataIndex: 'type',
    valueType: 'select',
    fieldProps: {
      options: [
        { label: '\u4F1A\u5458', value: '1' },
        { label: '\u975E\u4F1A\u5458', value: '2' },
      ],
    },
    width: 80,
  },
  {
    title: '\u4F1A\u5458\u8303\u56F4',
    dataIndex: 'range',
    valueType: 'dateRange',
    width: 130,
  },
  {
    title: '\u72B6\u6001',
    dataIndex: 'status',
    render: (text) => {
      if (text) {
        return <Tag color="success">\u5F00\u542F</Tag>;
      }

      return <Tag>\u672A\u5F00\u542F</Tag>;
    },
    renderExport: (text) => {
      return text ? '\u5F00\u542F' : '\u672A\u5F00\u542F';
    },
    width: 80,
  },
  {
    title: '\u521B\u5EFA\u65E5\u671F',
    dataIndex: 'createTime',
    valueType: 'dateTime',
    width: 100,
  },
];
`},31421:function(c,l){"use strict";l.Z=`import { ProTable } from 'react-admin-kit';
import { mockRequestForExport } from './apis';

import { getColumns } from './columns';

const Export = () => {
  return (
    <div>
      <ProTable
        noPadding
        name="\u7528\u6237"
        search={false}
        columns={getColumns()}
        request={mockRequestForExport}
        bordered
        rowSelection={{}}
        tableAlertOption={{ enableExport: true }}
      />
    </div>
  );
};

export default Export;
`},58485:function(c,l){"use strict";l.Z=`import type { TableColumnType } from 'react-admin-kit';
import { LinkButton } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'name',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
  },
  {
    title: '\u6635\u79F0',
    dataIndex: 'nickName',
    hideInSearch: true,
  },
  {
    title: '\u6027\u522B',
    dataIndex: 'sex',
    formItemProps: {},
    valueEnum: {
      \u7537: { text: '\u7537' },
      \u5973: { text: '\u5973' },
    },
  },
  {
    title: '\u8EAB\u4EFD\u8BC1\u53F7',
    dataIndex: 'idNumber',
    hideInSearch: true,
  },
  {
    title: '\u64CD\u4F5C',
    valueType: 'option',
    enableDelete: true,
    render: (text, record, index, actionRef, innerRef) => [
      <LinkButton
        key={1}
        onClick={() => innerRef.current?.openModal('edit', record)}
      >
        \u7F16\u8F91
      </LinkButton>,
    ],
  },
];
`},36021:function(c,l){"use strict";l.Z=`import { Button, message } from 'antd';
import { useRef } from 'react';
import { ProTable } from 'react-admin-kit';
import { delelteRecord, mockRequest } from '../basic/apis';

import { getColumns } from './columns';

const FormLayout = () => {
  const innerRef = useRef<any>();
  const actionRef = useRef<any>();

  const onFinish = (values: any) => {
    console.log({ values });
    // \u6A21\u62DF\u8BF7\u6C42
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);

        message.success('\u64CD\u4F5C\u6210\u529F');
        actionRef.current?.reload();
      }, 1000);
    });
  };

  return (
    <ProTable
      name="\u7528\u6237"
      search={false}
      columns={getColumns()}
      innerRef={innerRef}
      actionRef={actionRef}
      request={mockRequest}
      onFinish={onFinish}
      bordered
      toolbar={{
        actions: [
          <Button
            key={1}
            type="primary"
            onClick={() => {
              innerRef.current?.openModal();
            }}
          >
            \u65B0\u589E
          </Button>,
        ],
      }}
      rowSelection={{}}
      delFunction={delelteRecord}
      formProps={{
        grid: true,
        rowProps: { gutter: [24, 0] },
        colProps: { span: 12 },
      }}
    />
  );
};

export default FormLayout;
`},48357:function(c,l){"use strict";l.Z=`export const mockRequest = (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          data: [
            { id: 1, name: 'Jack', phone: 133 },
            { id: 2, name: 'Tom', phone: 155 },
          ],
        }),
      1000,
    );
  });
};

export const mockAdd = (data: any) => {
  console.log('\u521B\u5EFA\u7528\u6237\u53C2\u6570:', data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};

export const mockUpdate = (data: any) => {
  console.log('\u66F4\u65B0\u7528\u6237\u53C2\u6570:', data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};
`},8609:function(c,l){"use strict";l.Z=`import type { TableColumnType } from 'react-admin-kit';
import { LinkButton } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'name',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
  },
  {
    title: '\u6635\u79F0',
    dataIndex: 'nickName',
    hideInSearch: true,
  },
  {
    title: '\u6027\u522B',
    dataIndex: 'sex',
    formItemProps: {},
    valueEnum: {
      \u7537: { text: '\u7537' },
      \u5973: { text: '\u5973' },
    },
  },
  {
    title: '\u8EAB\u4EFD\u8BC1\u53F7',
    dataIndex: 'idNumber',
    hideInSearch: true,
  },

  {
    title: '\u64CD\u4F5C',
    valueType: 'option',
    enableDelete: true,
    render: (text, record, index, actionRef, innerRef) => [
      <LinkButton
        key={1}
        onClick={() => innerRef.current?.openModal('edit', record)}
      >
        \u7F16\u8F91
      </LinkButton>,
    ],
  },
];
`},50619:function(c,l){"use strict";l.Z=`import { useRef } from 'react';
import { ProTable } from 'react-admin-kit';
import { mockAdd, mockRequest, mockUpdate } from './apis';

import { getColumns } from './columns';

const OnFinishDemo = () => {
  const innerRef = useRef<any>();
  const actionRef = useRef<any>();

  return (
    <div>
      <ProTable
        name="\u7528\u6237"
        columns={getColumns()}
        innerRef={innerRef}
        actionRef={actionRef}
        request={mockRequest}
        bordered
        search={false}
        onFinish={async (values, formType, formData) => {
          if (formType === 'new') {
            await mockAdd(values);
          }

          if (formType === 'edit') {
            await mockUpdate({ ...values, id: formData.id });
          }

          actionRef.current.reload();
        }}
      />
    </div>
  );
};

export default OnFinishDemo;
`},22135:function(c,l){"use strict";l.Z=`export const mockRequest = (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          data: [
            { id: 1, name: 'Jack', phone: 133 },
            { id: 2, name: 'Tom', phone: 155 },
          ],
        }),
      1000,
    );
  });
};

export const requestExtra = (id) => {
  console.log('request detail for id', id);
  return new Promise((resolve) => {
    setTimeout(() => resolve(8888), 500);
  });
};
`},56201:function(c,l){"use strict";l.Z=`import type { TableColumnType } from 'react-admin-kit';
import { LinkButton } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  {
    title: '\u989D\u5916\u4FE1\u606F',
    dataIndex: 'extra',
    hideInTable: true,
  },
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'name',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
  },
  {
    title: '\u6635\u79F0',
    dataIndex: 'nickName',
    hideInSearch: true,
  },
  {
    title: '\u6027\u522B',
    dataIndex: 'sex',
    formItemProps: {},
    valueEnum: {
      \u7537: { text: '\u7537' },
      \u5973: { text: '\u5973' },
    },
  },
  {
    title: '\u8EAB\u4EFD\u8BC1\u53F7',
    dataIndex: 'idNumber',
    hideInSearch: true,
  },

  {
    title: '\u64CD\u4F5C',
    valueType: 'option',
    enableDelete: true,
    render: (text, record, index, actionRef, innerRef) => [
      <LinkButton
        key={1}
        onClick={() => innerRef.current?.openModal('edit', record)}
      >
        \u7F16\u8F91
      </LinkButton>,
    ],
  },
];
`},52846:function(c,l){"use strict";l.Z=`import { Button, message } from 'antd';
import { useRef } from 'react';
import { ProTable } from 'react-admin-kit';
import { mockRequest, requestExtra } from './apis';

import { getColumns } from './columns';

const OnOpenDemo = () => {
  const innerRef = useRef<any>();
  const actionRef = useRef<any>();

  const onFinish = (values: any) => {
    console.log({ values });
    // \u6A21\u62DF\u8BF7\u6C42
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);

        message.success('\u64CD\u4F5C\u6210\u529F');
        actionRef.current?.reload();
      }, 1000);
    });
  };

  return (
    <div>
      <ProTable
        name="\u7528\u6237"
        columns={getColumns()}
        innerRef={innerRef}
        actionRef={actionRef}
        request={mockRequest}
        onFinish={onFinish}
        bordered
        toolbar={{
          actions: [
            <Button
              key={1}
              type="primary"
              onClick={() => {
                innerRef.current?.openModal();
              }}
            >
              \u65B0\u589E
            </Button>,
          ],
        }}
        search={false}
        onOpen={(formType, formRef, formData) => {
          if (formType === 'edit') {
            return requestExtra(formData.id).then((res) => {
              formRef.current?.setFields([
                { name: 'extra', value: res, touched: false },
              ]);
            });
          }
        }}
      />
    </div>
  );
};

export default OnOpenDemo;
`},82843:function(c,l){"use strict";l.Z=`import type { TableColumnType } from 'react-admin-kit';
import { LinkButton } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'name',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
  },
  {
    title: '\u6635\u79F0',
    dataIndex: 'nickName',
    hideInSearch: true,
  },
  {
    title: '\u6027\u522B',
    dataIndex: 'sex',
    formItemProps: {},
    valueEnum: {
      \u7537: { text: '\u7537' },
      \u5973: { text: '\u5973' },
    },
  },
  {
    title: '\u8EAB\u4EFD\u8BC1\u53F7',
    dataIndex: 'idNumber',
    hideInSearch: true,
  },
  {
    title: '\u64CD\u4F5C',
    valueType: 'option',
    enableDelete: true,
    render: (text, record, index, actionRef, innerRef) => [
      <LinkButton
        key={1}
        onClick={() => innerRef.current?.openModal('read', record)}
      >
        \u67E5\u770B
      </LinkButton>,
    ],
  },
];
`},89374:function(c,l){"use strict";l.Z=`import { useRef } from 'react';
import { ProTable } from 'react-admin-kit';
import { mockRequest } from '../basic/apis';

import { getColumns } from './columns';

const Readonly = () => {
  const innerRef = useRef<any>(null);

  return (
    <div>
      <ProTable
        name="\u7528\u6237"
        search={false}
        columns={getColumns()}
        innerRef={innerRef}
        request={mockRequest}
        bordered
        formProps={{ layout: 'horizontal', labelCol: { span: 5 } }}
      />
    </div>
  );
};

export default Readonly;
`},96177:function(c,l){"use strict";l.Z=`export const mockRequestForRenderText = async (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          data: [
            {
              id: 1,
              name: '\u8FD9\u662F\u4E00\u4E2A\u5F88\u957F\u7684\u7528\u6237\u540D',
              phone: 15881234567,
            },
          ],
        }),
      500,
    );
  });
};
`},37549:function(c,l){"use strict";l.Z=`import type { TableColumnType } from 'react-admin-kit';
import { ProTable } from 'react-admin-kit';
import { mockRequestForRenderText } from './apis';

const columns: TableColumnType[] = [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'name',
    ellipsis: true,
    copyable: true,
    width: 100,
    render: (dom) => {
      return (
        <div>
          <span style={{ marginRight: '3px' }}>\u{1F468}</span>
          {dom}
        </div>
      );
    },
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
    copyable: true,
    renderText: (text) => {
      return '+86 ' + text;
    },
  },
];

const RenderText = () => {
  return (
    <ProTable
      search={false}
      pagination={false}
      noPadding
      columns={columns}
      request={mockRequestForRenderText}
      bordered
    />
  );
};

export default RenderText;
`},94434:function(c,l){"use strict";l.Z=`export const mockRequest = (params: any): any => {
  console.log('\u8BF7\u6C42\u6570\u636E\u53C2\u6570:', params);
  return new Promise((resolve) => {
    setTimeout(
      () => {
        if (params.current === 1) {
          resolve({
            data: [
              { id: 1, name: 'Jack', phone: 133 },
              { id: 2, name: 'Tom', phone: 155 },
              { id: 3, name: 'Jeff', phone: 133 },
              { id: 4, name: 'Janni', phone: 155 },
              { id: 5, name: 'Tim', phone: 155 },
            ],
            success: true,
            total: 6,
          });
        } else {
          resolve({
            data: [{ id: 6, name: 'Steve', phone: 133 }],
            success: true,
            total: 6,
          });
        }
      },

      1000,
    );
  });
};
`},51715:function(c,l){"use strict";l.Z=`import type { TableColumnType } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'name',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
  },
  {
    title: '\u6635\u79F0',
    dataIndex: 'nickName',
    hideInSearch: true,
  },
  {
    title: '\u6027\u522B',
    dataIndex: 'sex',
    formItemProps: {},
    valueEnum: {
      \u7537: { text: '\u7537' },
      \u5973: { text: '\u5973' },
    },
  },
  {
    title: '\u8EAB\u4EFD\u8BC1\u53F7',
    dataIndex: 'idNumber',
    hideInSearch: true,
  },
];
`},43616:function(c,l){"use strict";l.Z=`import { ProTable } from 'react-admin-kit';
import { mockRequest } from './apis';

import { getColumns } from './columns';

const Retrieve = () => {
  return (
    <ProTable
      columns={getColumns()}
      request={mockRequest}
      pagination={{ pageSize: 5 }}
    />
  );
};

export default Retrieve;
`},54849:function(c,l){"use strict";l.Z=`export const mockRequest = (params: any): any => {
  console.log('\u8BF7\u6C42\u6570\u636E\u53C2\u6570:', params);
  return new Promise((resolve) => {
    setTimeout(
      () => {
        if (params.current === 1) {
          resolve({
            data: [
              { id: 1, name: 'Jack', phone: 133 },
              { id: 2, name: 'Tom', phone: 155 },
              { id: 3, name: 'Jeff', phone: 133 },
              { id: 4, name: 'Janni', phone: 155 },
              { id: 5, name: 'Tim', phone: 155 },
            ],
            success: true,
            total: 6,
          });
        } else {
          resolve({
            data: [{ id: 6, name: 'Steve', phone: 133 }],
            success: true,
            total: 6,
          });
        }
      },

      1000,
    );
  });
};

export const mockAdd = (data: any) => {
  console.log('\u521B\u5EFA\u7528\u6237\u53C2\u6570:', data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};

export const mockUpdate = (data: any) => {
  console.log('\u66F4\u65B0\u7528\u6237\u53C2\u6570:', data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};
`},79211:function(c,l){"use strict";l.Z=`import { LinkButton, type TableColumnType } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'name',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
  },
  {
    title: '\u6635\u79F0',
    dataIndex: 'nickName',
    hideInSearch: true,
  },
  {
    title: '\u6027\u522B',
    dataIndex: 'sex',
    formItemProps: {},
    valueEnum: {
      \u7537: { text: '\u7537' },
      \u5973: { text: '\u5973' },
    },
  },
  {
    title: '\u8EAB\u4EFD\u8BC1\u53F7',
    dataIndex: 'idNumber',
    hideInSearch: true,
  },
  {
    title: '\u64CD\u4F5C',
    valueType: 'option', // valueType \u8BBE\u4E3A option \u4EE3\u8868\u662F\u64CD\u4F5C\u5217
    render: (text, record, index, actionRef, innerRef) => [
      <LinkButton
        key={1}
        onClick={() => {
          console.log('editclick', innerRef);
          innerRef.current?.openModal('edit', record);
        }}
      >
        \u7F16\u8F91
      </LinkButton>,
    ],
  },
];
`},44752:function(c,l){"use strict";l.Z=`import { useRef } from 'react';
import type { ActionRefType, InnerRefType } from 'react-admin-kit';
import { Button, ProTable } from 'react-admin-kit';
import { mockAdd, mockRequest, mockUpdate } from './apis';

import { message } from 'antd';
import { getColumns } from './columns';

const Update = () => {
  const innerRef = useRef<InnerRefType>(null);
  const actionRef = useRef<ActionRefType>(null);

  return (
    <ProTable
      columns={getColumns()}
      request={mockRequest}
      pagination={{ pageSize: 5 }}
      innerRef={innerRef}
      toolbar={{
        actions: [
          <Button
            key={1}
            type="primary"
            onClick={() => innerRef.current?.openModal()}
          >
            \u65B0\u589E
          </Button>,
        ],
      }}
      onFinish={async (values, formType, formData) => {
        if (formType === 'new') {
          await mockAdd(values);
          message.success('\u65B0\u5EFA\u6210\u529F!');
          actionRef.current?.reload();
        }

        if (formType === 'edit') {
          await mockUpdate({ ...values, id: formData.id });
          message.success('\u66F4\u65B0\u6210\u529F!');
          actionRef.current?.reload();
        }
      }}
    />
  );
};

export default Update;
`},90503:function(c,l){"use strict";l.Z=`export const mockRequest = (params: any): any => {
  console.log('\u8BF7\u6C42\u6570\u636E\u53C2\u6570:', params);
  return new Promise((resolve) => {
    setTimeout(
      () => {
        resolve({
          data: [
            {
              id: 1,
              date: 1692861082010,
              dateTime: 1692861082010,
              dateRange: [1690819200000, 1692861082010],
              money: 1234,
              userId: 1,
            },
          ],
          success: true,
          total: 1,
        });
      },

      500,
    );
  });
};
`},99219:function(c,l){"use strict";l.Z=`import type { TableColumnType } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  {
    title: 'date',
    dataIndex: 'date',
    valueType: 'date',
  },
  {
    title: 'dateTime',
    dataIndex: 'dateTime',
    valueType: 'dateTime',
  },
  {
    title: 'dateRange',
    dataIndex: 'dateRange',
    valueType: 'dateRange',
  },
  {
    title: '\u91D1\u989D',
    dataIndex: 'money',
    valueType: 'money',
  },
];
`},7128:function(c,l){"use strict";l.Z=`import { ProTable } from 'react-admin-kit';
import { mockRequest } from './apis';

import { getColumns } from './columns';

const ValueType = () => {
  return (
    <ProTable
      columns={getColumns()}
      request={mockRequest}
      search={false}
      pagination={false}
    />
  );
};

export default ValueType;
`},38779:function(c,l){"use strict";l.Z=`import type { FormColumnType } from 'react-admin-kit/SchemaForm/types';

export const columns: FormColumnType[] = [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'username',
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
  },
  {
    title: '\u6635\u79F0',
    dataIndex: 'nickName',
  },
  {
    title: '\u6027\u522B',
    dataIndex: 'sex',
    valueType: 'radio',
    fieldProps: {
      options: [
        { label: '\u7537', value: '\u7537' },
        { label: '\u5973', value: '\u5973' },
      ],
    },
  },
  {
    title: '\u8EAB\u4EFD\u8BC1\u53F7',
    dataIndex: 'idNumber',
  },
];
`},27707:function(c,l){"use strict";l.Z=`import { useRef } from 'react';
import { SchemaForm } from 'react-admin-kit';

import type { FormInstance } from 'antd';
import { Button } from 'antd';
import { columns } from './columns';

const Basic = () => {
  const formRef = useRef<FormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        onFinish={onFinish}
        formRef={formRef}
        columns={columns}
        autoFocusFirstInput={false}
      />

      <div style={{ textAlign: 'end' }}>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => formRef.current?.resetFields()}
        >
          \u91CD\u7F6E
        </Button>
        <Button type="primary" onClick={() => formRef.current?.submit()}>
          \u63D0\u4EA4
        </Button>
      </div>
    </div>
  );
};

export default Basic;
`},4972:function(c,l){"use strict";l.Z=`import type { FormColumnType } from 'react-admin-kit/SchemaForm/types';

export const columns: FormColumnType[] = [
  {
    title: '\u57FA\u672C\u4FE1\u606F',
    valueType: 'group',
    columns: [
      {
        title: '\u7528\u6237\u540D',
        dataIndex: 'name',
      },
      {
        title: '\u90E8\u95E8',
        dataIndex: 'deptId,deptName',
        valueType: 'treeSelect',
        width: 'sm',
        fieldProps: {
          placeholder: '\u8BF7\u9009\u62E9',
          labelInValue: true,
          options: [
            {
              value: '1',
              label: 'A\u516C\u53F8',
              children: [
                { value: '2', label: '\u6280\u672F\u90E8' },
                { value: '3', label: '\u9500\u552E\u90E8' },
              ],
            },
          ],
        },
      },
      {
        title: '\u4F1A\u5458',
        dataIndex: 'isMember',
        valueType: 'radio',
        fieldProps: {
          options: [
            { label: '\u5426', value: 0 },
            { label: '\u662F', value: 1 },
          ],
        },
      },
      {
        valueType: 'dependency',
        name: ['isMember'],
        columns: ({ isMember }) => {
          if (isMember) {
            return [
              {
                title: '\u4F1A\u5458\u7B49\u7EA7',
                dataIndex: 'gradeId,gradeName',
                valueType: 'select',
                fieldProps: {
                  labelInValue: true,
                  options: [
                    { value: '1', label: 'A' },
                    { value: '2', label: 'B' },
                  ],
                },
              },
            ];
          }

          return [];
        },
      },
    ],
  },
];
`},22456:function(c,l){"use strict";l.Z=`import { useRef } from 'react';
import { Button, SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

import type { ProFormInstance } from 'react-admin-kit';

const Convention = () => {
  const formRef = useRef<ProFormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        onFinish={onFinish}
        formRef={formRef}
        columns={columns}
        autoFocusFirstInput={false}
        initialValues={{
          name: 'tom',
          deptId: '3',
          deptName: '\u9500\u552E\u90E8',
          isMember: 1,
          gradeId: '2',
          gradeName: 'B',
        }}
      />

      <div style={{ textAlign: 'end' }}>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() =>
            formRef.current?.setFieldsValue({
              name: 'jack',
              deptId: '2',
              deptName: '\u6280\u672F\u90E8',
              isMember: 1,
              gradeId: '1',
              gradeName: 'A',
            })
          }
        >
          \u8D4B\u503C
        </Button>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => formRef.current?.resetFields(['deptId,deptName'])}
        >
          \u91CD\u7F6E\u90E8\u95E8
        </Button>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() =>
            formRef.current?.resetFields([
              'deptId,deptName',
              'gradeId,gradeName',
            ])
          }
        >
          \u91CD\u7F6E\u90E8\u95E8\u7B49\u7EA7
        </Button>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => formRef.current?.resetFields()}
        >
          \u91CD\u7F6E\u6240\u6709
        </Button>
        <Button type="primary" onClick={() => formRef.current?.submit()}>
          \u63D0\u4EA4
        </Button>
      </div>
    </div>
  );
};

export default Convention;
`},40877:function(c,l){"use strict";l.Z=`import type { FormColumnType } from 'react-admin-kit/SchemaForm/types';

export const columns: FormColumnType[] = [
  {
    title: '\u57FA\u672C\u4FE1\u606F - \u5185\u5D4C\u6A21\u5F0F(valueBaseName)',
    valueType: 'group',
    columns: [
      {
        title: '\u7528\u6237\u540D',
        dataIndex: 'name',
      },
      {
        title: '\u90E8\u95E8',
        dataIndex: 'deptId,deptName',
        valueType: 'treeSelect',
        width: 'sm',
        fieldProps: {
          placeholder: '\u8BF7\u9009\u62E9',
          labelInValue: true,
          options: [
            {
              value: '1',
              label: 'A\u516C\u53F8',
              children: [
                { value: '2', label: '\u6280\u672F\u90E8' },
                { value: '3', label: '\u9500\u552E\u90E8' },
              ],
            },
          ],
        },
      },
      {
        title: '\u4F1A\u5458',
        dataIndex: 'isMember',
        valueType: 'radio',
        fieldProps: {
          options: [
            { label: '\u5426', value: 0 },
            { label: '\u662F', value: 1 },
          ],
        },
      },
      {
        valueType: 'dependency',
        name: [['info', 'isMember']],
        columns: ({ info: { isMember } }) => {
          if (isMember) {
            return [
              {
                title: '\u4F1A\u5458\u7B49\u7EA7',
                dataIndex: 'gradeId,gradeName',
                valueType: 'select',
                fieldProps: {
                  labelInValue: true,
                  options: [
                    { value: '1', label: 'A' },
                    { value: '2', label: 'B' },
                  ],
                },
              },
            ];
          }

          return [];
        },
      },
    ],
  },
];
`},73399:function(c,l){"use strict";l.Z=`import { useRef } from 'react';
import { Button, ProForm, SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

import type { ProFormInstance } from 'react-admin-kit';

const ConventionValueBaseName = () => {
  const formRef = useRef<ProFormInstance>();

  const onFinish = async (values: any) => {
    console.log({ values });
  };

  return (
    <ProForm
      onFinish={onFinish}
      formRef={formRef}
      autoFocusFirstInput={false}
      submitter={false}
      initialValues={{
        info: {
          name: 'tom',
          deptId: '3',
          deptName: '\u9500\u552E\u90E8',
          isMember: 1,
          gradeId: '2',
          gradeName: 'B',
        },
      }}
    >
      <SchemaForm embed valueBaseName="info" columns={columns} />

      <div style={{ textAlign: 'end' }}>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() =>
            formRef.current?.setFieldsValue({
              info: {
                name: 'jack',
                deptId: '2',
                deptName: '\u6280\u672F\u90E8',
                isMember: 1,
                gradeId: '1',
                gradeName: 'A',
              },
            })
          }
        >
          \u8D4B\u503C
        </Button>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() =>
            formRef.current?.resetFields([['info', 'deptId,deptName']])
          }
        >
          \u91CD\u7F6E\u90E8\u95E8
        </Button>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() =>
            formRef.current?.resetFields([
              ['info', 'deptId,deptName'],
              ['info', 'gradeId,gradeName'],
            ])
          }
        >
          \u91CD\u7F6E\u90E8\u95E8\u7B49\u7EA7
        </Button>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => formRef.current?.resetFields()}
        >
          \u91CD\u7F6E\u6240\u6709
        </Button>
        <Button type="primary" onClick={() => formRef.current?.submit()}>
          \u63D0\u4EA4
        </Button>
      </div>
    </ProForm>
  );
};

export default ConventionValueBaseName;
`},74716:function(c,l){"use strict";l.Z=`import type { FormColumnType } from 'react-admin-kit';
import { SchemaForm } from 'react-admin-kit';

const DependencyDemo = () => {
  const columns: FormColumnType[] = [
    {
      title: '\u662F\u5426\u663E\u793A\u7535\u8BDD',
      dataIndex: 'showPhone',
      valueType: 'select',
      fieldProps: {
        options: [
          { label: '\u662F', value: 1 },
          { label: '\u5426', value: 0 },
        ],
      },
    },
    {
      valueType: 'dependency',
      name: ['showPhone'],
      columns: ({ showPhone }) => {
        if (showPhone) {
          return [
            {
              title: '\u7535\u8BDD',
              dataIndex: 'phone',
            },
          ];
        } else {
          return [];
        }
      },
    },
  ];

  return (
    <div>
      <SchemaForm columns={columns} autoFocusFirstInput={false} />
    </div>
  );
};

export default DependencyDemo;
`},94357:function(c,l){"use strict";l.Z=`import type { FormColumnType } from 'react-admin-kit';

export const getBaseColumns = (): FormColumnType[] => {
  return [
    {
      title: '\u7528\u6237\u540D',
      dataIndex: 'username',
      colProps: { span: 24 },
      formItemProps: {
        labelCol: { span: 3 },
        rules: [
          {
            required: true,
            message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
          },
        ],
      },
    },
    {
      valueType: 'dependency',
      // \u{1F447}\u8FD9\u91CC\u662F\u4E00\u4E2A\u5957\u5D4C\u6570\u7EC4, \u56E0\u4E3AvalueBaseName\u662Fbusiness\u{1F447}
      name: [['business', 'serviceName']],
      columns: (values) => {
        const serviceName = values?.business?.serviceName;
        if (serviceName === '1') {
          return [];
        } else {
          return [
            {
              title: '\u8EAB\u4EFD\u8BC1\u53F7',
              dataIndex: 'idNumber',
              colProps: { span: 16 },
              formItemProps: {
                // 3 / 16 = 0.1875
                labelCol: { flex: '0 0 18.75%' },
              },
            },
            { fieldProps: { hidden: true } },
          ];
        }
      },
    },
    {
      title: '\u7535\u8BDD',
      dataIndex: 'phone',
    },
    {
      title: '\u51FA\u751F\u65E5\u671F',
      dataIndex: 'birthday',
      valueType: 'dateMonth',
    },
    {
      title: '\u6027\u522B',
      dataIndex: 'sex',
      valueType: 'radio',
      fieldProps: {
        options: ['\u7537', '\u5973'],
      },
    },
  ];
};
`},48101:function(c,l){"use strict";l.Z=`import type { SelectProps } from 'antd';
import { Select } from 'antd';
import type { FormColumnType } from 'react-admin-kit';

const getBusinessColumns = (): FormColumnType[] => [
  {
    title: '\u516C\u53F8\u540D',
    dataIndex: 'company',
    colProps: { span: 24 },
    formItemProps: {
      labelCol: { span: 3 },
      rules: [
        {
          required: true,
        },
      ],
    },
    renderFormItem: () => (
      <Select
        options={[
          {
            label: 'A\u516C\u53F8',
            value: '1',
            address: '\u6C5F\u82CF\u7701\u65E0\u9521\u5E02',
            otherKey: '1a',
          },
        ]}
      />
    ),
    fieldProps: (form): SelectProps<any, any> => ({
      onChange: (val, option) => {
        if (val) {
          form.setFieldsValue({ business: { address: option.address } });
        } else {
          form.setFieldsValue({ business: { address: undefined } });
        }
      },
    }),
  },
  {
    title: '\u5730\u5740',
    dataIndex: 'address',
  },
  {
    title: '\u529E\u7406\u4E1A\u52A1',
    dataIndex: 'serviceName',
    renderFormItem: () => (
      <Select
        options={[
          {
            label: '\u4E0D\u9700\u8981\u8EAB\u4EFD\u8BC1\u4E1A\u52A1',
            value: '1',
          },
          {
            label: '\u9700\u8981\u8EAB\u4EFD\u8BC1\u4E1A\u52A1',
            value: '2',
          },
        ]}
      />
    ),
    render: (text) => {
      if (text === '1') {
        return '\u4E0D\u9700\u8981\u8EAB\u4EFD\u8BC1\u4E1A\u52A1';
      }

      if (text === '2') {
        return '\u9700\u8981\u8EAB\u4EFD\u8BC1\u4E1A\u52A1';
      }

      return '-';
    },
  },
];

export default getBusinessColumns;
`},40708:function(c,l){"use strict";l.Z=`import { Button, Card } from 'antd';
import { useRef, useState } from 'react';
import { ProForm, SchemaForm } from 'react-admin-kit';
import { getBaseColumns } from './baseColumns';
import getBusinessColumns from './businessColumns';

import type { FormInstance } from 'antd';

const Embed = () => {
  const formRef = useRef<FormInstance>();

  const onFinish = async (values: any) => {
    console.log({ values });
    return true;
  };

  const [readonly, setReadonly] = useState(false);

  const [loading, setLoading] = useState(false);
  const handleFillData = () => {
    setLoading(true);
    setTimeout(() => {
      formRef.current?.setFieldsValue({
        base: {
          username: '\u738B\u5148\u751F',
          phone: '15588888',
          nickName: 'wang',
          sex: '\u7537',
          idNumber: 3202335566,
        },
        business: {
          company: '\u4FE1\u606F\u6280\u672F\u6709\u9650\u516C\u53F8',
          address: '\u6C5F\u82CF\u7701\u65E0\u9521\u5E02',
          serviceName: '1',
        },
      });
      setLoading(false);
    }, 500);
  };

  return (
    <div>
      <ProForm
        layout="horizontal"
        onFinish={onFinish}
        submitter={false}
        formRef={formRef}
        readonly={readonly} // \u4E5F\u53EF\u4EE5\u5355\u72EC\u8BBE\u5728\u67D0\u4E2ASchemaForm\u4E0A
        initialValues={{ base: { username: '\u9AD8\u5148\u751F' } }}
      >
        <Card
          style={{ marginBottom: '24px' }}
          size="small"
          headStyle={{ background: '#ebebeb' }}
          title="\u57FA\u672C\u4FE1\u606F"
        >
          <SchemaForm
            embed
            grid={true}
            rowProps={{ gutter: [0, 0] }}
            colProps={{ span: 8 }}
            labelCol={{ span: 9 }}
            columns={getBaseColumns()}
            valueBaseName="base"
          />
        </Card>

        <Card
          size="small"
          title="\u4E1A\u52A1\u4FE1\u606F"
          headStyle={{ background: '#ebebeb' }}
        >
          <SchemaForm
            embed
            columns={getBusinessColumns()}
            labelCol={{ span: 3 }}
            valueBaseName="business"
          />
        </Card>
      </ProForm>

      <div style={{ marginTop: '10px', textAlign: 'end' }}>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => setReadonly((val) => !val)}
        >
          \u5207\u6362\u53EA\u8BFB
        </Button>
        <Button
          loading={loading}
          style={{ marginRight: '20px' }}
          onClick={handleFillData}
        >
          \u56DE\u663E\u6570\u636E
        </Button>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => formRef.current?.resetFields()}
        >
          \u91CD\u7F6E
        </Button>
        <Button type="primary" onClick={() => formRef.current?.submit()}>
          \u63D0\u4EA4
        </Button>
      </div>
    </div>
  );
};

export default Embed;
`},85186:function(c,l){"use strict";l.Z=`import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'username',
    colProps: { span: 24 },
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
  },
  {
    title: '\u6635\u79F0',
    dataIndex: 'nickName',
  },
  {
    title: '\u6027\u522B',
    dataIndex: 'sex',
    valueType: 'radio',
    fieldProps: {
      options: [
        { label: '\u7537', value: '\u7537' },
        { label: '\u5973', value: '\u5973' },
      ],
    },
  },
  {
    title: '\u8EAB\u4EFD\u8BC1\u53F7',
    colProps: { span: 16 },
    dataIndex: 'idNumber',
  },
];
`},18370:function(c,l){"use strict";l.Z=`import { Button } from 'antd';
import { useRef } from 'react';
import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

import type { FormInstance } from 'antd';

const Grid = () => {
  const formRef = useRef<FormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        grid={true}
        /**
         * \u53EF\u4F20\u5165Antd Grid\u6805\u683C\u7EC4\u4EF6\u7684 Row \u5C5E\u6027\u3002
         * https://4x.ant.design/components/grid-cn/#Row
         */

        rowProps={{ gutter: [8, 0] }}
        /**
         * \u53EF\u4F20\u5165Antd Grid\u6805\u683C\u7EC4\u4EF6\u7684 Col\u5C5E\u6027\u3002
         * https://4x.ant.design/components/grid-cn/#Col
         */
        colProps={{ span: 8 }} // \u5168\u5C40\u63A7\u5236\u4E00\u884C\u4E09\u5217\uFF0C\u540C\u65F6\u5728 columns \u4E0A\u53EF\u4EE5\u5355\u72EC\u8986\u76D6
        onFinish={onFinish}
        formRef={formRef}
        columns={columns}
        autoFocusFirstInput={false}
      />

      <div style={{ textAlign: 'end' }}>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => formRef.current?.resetFields()}
        >
          \u91CD\u7F6E
        </Button>
        <Button type="primary" onClick={() => formRef.current?.submit()}>
          \u63D0\u4EA4
        </Button>
      </div>
    </div>
  );
};

export default Grid;
`},67313:function(c,l){"use strict";l.Z=`import type { FormColumnType } from 'react-admin-kit';

export const getColumns = (): FormColumnType[] => [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'username',
    colProps: { span: 24 },
    formItemProps: {
      labelCol: { span: 3 },
      rules: [
        {
          required: true,
          message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
    formItemProps: {
      // labelCol\u53EF\u4EE5\u5728SchemaForm\u4E0A\u6574\u4F53\u8BBE\u5B9A
      labelCol: { span: 9 },
    },
  },
  {
    title: '\u6635\u79F0',
    formItemProps: {
      // labelCol\u5DF2\u5728SchemaForm\u4E0A\u6574\u4F53\u8BBE\u5B9A
    },
    dataIndex: 'nickName',
  },
  {
    title: '\u6027\u522B',
    dataIndex: 'sex',
    formItemProps: {
      // labelCol\u5DF2\u5728SchemaForm\u4E0A\u6574\u4F53\u8BBE\u5B9A
    },
    valueType: 'radio',
    fieldProps: {
      options: [
        { label: '\u7537', value: '\u7537' },
        { label: '\u5973', value: '\u5973' },
      ],
    },
  },
  {
    title: '\u8EAB\u4EFD\u8BC1\u53F7',
    colProps: { span: 16 },
    formItemProps: {
      // 3 / 16 = 0.1875
      labelCol: { flex: '0 0 18.75%' },
    },
    dataIndex: 'idNumber',
  },
];
`},68098:function(c,l){"use strict";l.Z=`import { Button } from 'antd';
import { useRef } from 'react';
import { SchemaForm } from 'react-admin-kit';
import { getColumns } from './columns';

import type { FormInstance } from 'antd';

const GridHorizontal = () => {
  const formRef = useRef<FormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        layout="horizontal"
        grid={true}
        rowProps={{ gutter: [0, 0] }}
        colProps={{ span: 8 }}
        labelCol={{ span: 9 }}
        onFinish={onFinish}
        formRef={formRef}
        columns={getColumns()}
        autoFocusFirstInput={false}
      />

      <div style={{ textAlign: 'end' }}>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => formRef.current?.resetFields()}
        >
          \u91CD\u7F6E
        </Button>
        <Button type="primary" onClick={() => formRef.current?.submit()}>
          \u63D0\u4EA4
        </Button>
      </div>
    </div>
  );
};

export default GridHorizontal;
`},86421:function(c,l){"use strict";l.Z=`import type { FormColumnType } from 'react-admin-kit';

export const getColumns = (): FormColumnType[] => [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'username',
    colProps: { span: 24 },
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
  },
  {
    title: '\u6635\u79F0',
    dataIndex: 'nickName',
  },
  {
    title: '\u6027\u522B',
    dataIndex: 'sex',
    valueType: 'radio',
    fieldProps: {
      options: [
        { label: '\u7537', value: '\u7537' },
        { label: '\u5973', value: '\u5973' },
      ],
    },
  },
  {
    title: '\u8EAB\u4EFD\u8BC1\u53F7',
    colProps: { span: 16 },
    dataIndex: 'idNumber',
  },
];
`},49796:function(c,l){"use strict";l.Z=`import { SchemaForm } from 'react-admin-kit';
import { getColumns } from './columns';

const GridHorizontalInit = () => {
  return (
    <div>
      <SchemaForm
        layout="horizontal"
        grid={true}
        rowProps={{ gutter: [8, 0] }}
        colProps={{ span: 8 }}
        columns={getColumns()}
        autoFocusFirstInput={false}
      />
    </div>
  );
};

export default GridHorizontalInit;
`},62459:function(c,l){"use strict";l.Z=`import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '\u57FA\u672C\u4FE1\u606F',
    valueType: 'group',
    fieldProps: {
      // \u{1F447}\u53EF\u4EE5\u4F20\u5165Space\u7684\u5C5E\u6027, \u8FD9\u91CC\u95F4\u8DDD\u662Fsmall\u{1F447}
      size: 'small',
    },
    columns: [
      {
        title: '\u7528\u6237\u540D',
        dataIndex: 'username',
        colProps: { span: 24 },
        formItemProps: {
          rules: [
            {
              required: true,
              message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
            },
          ],
        },
      },
      {
        title: '\u7535\u8BDD',
        dataIndex: 'phone',
      },
    ],
  },
  {
    valueType: 'divider',
  },
  {
    title: '\u989D\u5916\u4FE1\u606F',
    valueType: 'group',
    columns: [
      {
        title: '\u6635\u79F0',
        formItemProps: {
          rules: [
            {
              required: true,
              message: '\u6635\u79F0\u4E3A\u5FC5\u586B\u9879',
            },
          ],
        },
        dataIndex: 'nickName',
      },
      {
        title: '\u6027\u522B',
        dataIndex: 'sex',
        formItemProps: {},
        valueEnum: {
          \u7537: { text: '\u7537' },
          \u5973: { text: '\u5973' },
        },
      },
      {
        title: '\u8EAB\u4EFD\u8BC1\u53F7',
        dataIndex: 'idNumber',
      },
    ],
  },
];
`},91398:function(c,l){"use strict";l.Z=`import { Button } from 'antd';
import { useRef } from 'react';
import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

import type { FormInstance } from 'antd';

const Group = () => {
  const formRef = useRef<FormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        onFinish={onFinish}
        formRef={formRef}
        columns={columns}
        autoFocusFirstInput={false}
      />

      <div style={{ textAlign: 'end' }}>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => formRef.current?.resetFields()}
        >
          \u91CD\u7F6E
        </Button>
        <Button type="primary" onClick={() => formRef.current?.submit()}>
          \u63D0\u4EA4
        </Button>
      </div>
    </div>
  );
};

export default Group;
`},74193:function(c,l){"use strict";l.Z=`import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '\u57FA\u672C\u4FE1\u606F',
    valueType: 'group',
    columns: [
      {
        title: '\u7528\u6237\u540D',
        dataIndex: 'username',

        // \u{1F447}\u8FD9\u662F\u8BBE\u7F6E\u7ED9\u91CC\u5C42\u7684\u{1F447}
        colProps: { span: 24 },
        formItemProps: {
          rules: [
            {
              required: true,
              message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
            },
          ],
        },
      },
      {
        title: '\u7535\u8BDD',
        dataIndex: 'phone',

        // \u{1F447}\u8FD9\u662F\u8BBE\u7F6E\u7ED9\u91CC\u5C42\u7684\u{1F447}
        colProps: { span: 24 },
        formItemProps: {
          rules: [
            {
              required: true,
              message: '\u7535\u8BDD\u4E3A\u5FC5\u586B\u9879',
            },
          ],
        },
      },
    ],
  },
  {
    valueType: 'divider',
  },
  {
    title: '\u989D\u5916\u4FE1\u606F',
    valueType: 'group',
    columns: [
      {
        title: '\u6635\u79F0',
        formItemProps: {
          rules: [
            {
              required: true,
              message: '\u6635\u79F0\u4E3A\u5FC5\u586B\u9879',
            },
          ],
        },
        dataIndex: 'nickName',
      },
      {
        title: '\u6027\u522B',
        dataIndex: 'sex',

        // \u{1F447}\u8FD9\u662F\u8BBE\u7F6E\u7ED9\u91CC\u5C42\u7684\u{1F447}
        colProps: { span: 12 },
        valueEnum: {
          \u7537: { text: '\u7537' },
          \u5973: { text: '\u5973' },
        },
      },
      {
        title: '\u8EAB\u4EFD\u8BC1\u53F7',
        dataIndex: 'idNumber',

        // \u{1F447}\u8FD9\u662F\u8BBE\u7F6E\u7ED9\u91CC\u5C42\u7684\u{1F447}
        colProps: { span: 12 },
        formItemProps: {
          rules: [
            {
              required: true,
              message: '\u8EAB\u4EFD\u8BC1\u4E3A\u5FC5\u586B\u9879',
            },
          ],
        },
      },
    ],
  },
];
`},70487:function(c,l){"use strict";l.Z=`import { Button } from 'antd';
import { useRef } from 'react';
import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

import type { FormInstance } from 'antd';

const GroupGrid = () => {
  const formRef = useRef<FormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        // \u{1F447}\u8FD9\u662F\u8BBE\u7F6E\u7ED9\u5916\u5C42\u7684\u{1F447}
        grid
        colProps={{ span: 24 }}
        // \u{1F446}\u8FD9\u662F\u8BBE\u7F6E\u7ED9\u5916\u5C42\u7684\u{1F446}

        onFinish={onFinish}
        formRef={formRef}
        columns={columns}
        autoFocusFirstInput={false}
      />

      <div style={{ textAlign: 'end' }}>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => formRef.current?.resetFields()}
        >
          \u91CD\u7F6E
        </Button>
        <Button type="primary" onClick={() => formRef.current?.submit()}>
          \u63D0\u4EA4
        </Button>
      </div>
    </div>
  );
};

export default GroupGrid;
`},94187:function(c,l){"use strict";l.Z=`import { Divider } from 'antd';
import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '\u57FA\u672C\u4FE1\u606F',
    valueType: 'group',

    // \u{1F447}\u8FD9\u662F\u8BBE\u7F6E\u7ED9\u5916\u5C42\u7684\u{1F447}
    colProps: { span: 11 },
    columns: [
      {
        title: '\u7528\u6237\u540D',
        dataIndex: 'username',
        colProps: { span: 24 },
        formItemProps: {
          rules: [
            {
              required: true,
              message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
            },
          ],
        },
      },
      {
        title: '\u7535\u8BDD',
        dataIndex: 'phone',
        colProps: { span: 24 },
        formItemProps: {
          rules: [
            {
              required: true,
              message: '\u7535\u8BDD\u4E3A\u5FC5\u586B\u9879',
            },
          ],
        },
      },
    ],
  },
  // \u5206\u9694\u7B26
  {
    renderFormItem: () => (
      <div style={{ textAlign: 'center' }}>
        <Divider type="vertical" style={{ height: '50px' }} />
      </div>
    ),
    fieldProps: { style: { width: '100%' } },

    // \u{1F447}\u8FD9\u662F\u8BBE\u7F6E\u7ED9\u5916\u5C42\u7684\u{1F447}
    colProps: { span: 2, style: { alignSelf: 'center' } },
  },
  {
    title: '\u989D\u5916\u4FE1\u606F',
    valueType: 'group',

    // \u{1F447}\u8FD9\u662F\u8BBE\u7F6E\u7ED9\u5916\u5C42\u7684\u{1F447}
    colProps: { span: 11 },
    columns: [
      {
        title: '\u6635\u79F0',
        colProps: { span: 24 },
        formItemProps: {
          rules: [
            {
              required: true,
              message: '\u6635\u79F0\u4E3A\u5FC5\u586B\u9879',
            },
          ],
        },
        dataIndex: 'nickName',
      },
      {
        title: '\u6027\u522B',
        dataIndex: 'sex',
        colProps: { span: 24 },
        valueEnum: {
          \u7537: { text: '\u7537' },
          \u5973: { text: '\u5973' },
        },
      },
      {
        title: '\u8EAB\u4EFD\u8BC1\u53F7',
        dataIndex: 'idNumber',
        colProps: { span: 24 },
        formItemProps: {
          rules: [
            {
              required: true,
              message: '\u8EAB\u4EFD\u8BC1\u4E3A\u5FC5\u586B\u9879',
            },
          ],
        },
      },
    ],
  },
];
`},63924:function(c,l){"use strict";l.Z=`import { Button } from 'antd';
import { useRef } from 'react';
import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

import type { FormInstance } from 'antd';

const GroupGridHorizontal = () => {
  const formRef = useRef<FormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        // \u{1F447}\u8FD9\u662F\u8BBE\u7F6E\u7ED9\u5916\u5C42\u7684\u{1F447}
        grid
        // \u{1F446}\u8FD9\u662F\u8BBE\u7F6E\u7ED9\u5916\u5C42\u7684\u{1F446}
        onFinish={onFinish}
        formRef={formRef}
        columns={columns}
        autoFocusFirstInput={false}
      />

      <div style={{ textAlign: 'end' }}>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => formRef.current?.resetFields()}
        >
          \u91CD\u7F6E
        </Button>
        <Button type="primary" onClick={() => formRef.current?.submit()}>
          \u63D0\u4EA4
        </Button>
      </div>
    </div>
  );
};

export default GroupGridHorizontal;
`},69931:function(c,l){"use strict";l.Z=`import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'username',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879',
        },
      ],
    },
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
  },
  {
    title: '\u6635\u79F0',
    dataIndex: 'nickName',
  },
  {
    title: '\u6027\u522B',
    dataIndex: 'sex',
    valueType: 'radio',
    fieldProps: {
      options: [
        { label: '\u7537', value: '\u7537' },
        { label: '\u5973', value: '\u5973' },
      ],
    },
  },
  {
    title: '\u8EAB\u4EFD\u8BC1\u53F7',
    dataIndex: 'idNumber',
  },
];
`},19386:function(c,l){"use strict";l.Z=`import { Button } from 'antd';
import { useRef } from 'react';
import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

import type { FormInstance } from 'antd';

const Horizontal = () => {
  const formRef = useRef<FormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        layout="horizontal"
        labelCol={{ span: 3 }}
        onFinish={onFinish}
        formRef={formRef}
        columns={columns}
        autoFocusFirstInput={false}
      />

      <div style={{ textAlign: 'end' }}>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => formRef.current?.resetFields()}
        >
          \u91CD\u7F6E
        </Button>
        <Button type="primary" onClick={() => formRef.current?.submit()}>
          \u63D0\u4EA4
        </Button>
      </div>
    </div>
  );
};

export default Horizontal;
`},71813:function(c,l){"use strict";l.Z=`import { Select } from 'antd';
import type { FormColumnType } from 'react-admin-kit';

export const getColumns = (): FormColumnType[] => [
  {
    title: '\u662F\u5426\u663E\u793A\u7535\u8BDD',
    dataIndex: 'showPhone',
    renderFormItem: () => (
      <Select
        options={[
          { label: '\u662F', value: 1 },
          { label: '\u5426', value: 0 },
        ]}
      />
    ),
    render: (text) => (text ? '\u662F' : '\u5426'),
  },
  {
    valueType: 'dependency',
    name: ['showPhone'],
    columns: ({ showPhone }) => {
      if (showPhone) {
        return [
          {
            title: '\u7535\u8BDD',
            dataIndex: 'phone',
          },
        ];
      } else {
        return [];
      }
    },
  },
];
`},86950:function(c,l){"use strict";l.Z=`import { Button } from 'antd';
import { useRef, useState } from 'react';
import { SchemaForm } from 'react-admin-kit';
import { getColumns } from './columns';

import type { FormInstance } from 'antd';

const InitValueDemo = () => {
  const formRef = useRef<FormInstance>();

  const [readonly, setReadonly] = useState(false);

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        onFinish={onFinish}
        formRef={formRef}
        columns={getColumns()}
        autoFocusFirstInput={false}
        initialValues={{ showPhone: 0 }}
        readonly={readonly}
      />

      <div style={{ textAlign: 'end' }}>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => setReadonly(!readonly)}
        >
          \u5207\u6362\u53EA\u8BFB
        </Button>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() =>
            formRef.current?.setFieldsValue({
              showPhone: 1,
              phone: 15800012345,
            })
          }
        >
          \u8D4B\u503C
        </Button>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => formRef.current?.resetFields()}
        >
          \u91CD\u7F6E
        </Button>
        <Button type="primary" onClick={() => formRef.current?.submit()}>
          \u63D0\u4EA4
        </Button>
      </div>
    </div>
  );
};

export default InitValueDemo;
`},28540:function(c,l){"use strict";l.Z=`import type { SelectProps } from 'antd';
import type { FormColumnType } from 'react-admin-kit';

export const getColumns = (): FormColumnType[] => [
  {
    title: '\u5458\u5DE5',
    dataIndex: 'userId',
    valueType: 'select',
    fieldProps: (form, innerRef): SelectProps<any, any> => ({
      options: [
        {
          label: '\u5458\u5DE51',
          value: 'user1',
          userCode: 'c01',
        },
        {
          label: '\u5458\u5DE52',
          value: 'user2',
          userCode: 'c02',
        },
      ],
      onChange: (val, option) => {
        innerRef.current?.setData({ userCode: option.userCode });
      },
    }),
  },
  {
    title: '\u662F\u5426\u5C55\u793A\u90E8\u95E8',
    dataIndex: 'showDept',
    valueType: 'radio',
    fieldProps: {
      options: [
        {
          label: '\u662F',
          value: 1,
        },
        {
          label: '\u5426',
          value: 0,
        },
      ],
    },
  },
  {
    name: ['showDept'],
    valueType: 'dependency',
    columns: ({ showDept }) => {
      if (showDept) {
        return [
          {
            title: '\u90E8\u95E8',
            dataIndex: 'deptId,deptName',
            valueType: 'select',
            fieldProps: (form, innerRef): SelectProps<any, any> => ({
              labelInValue: true,
              options: [
                {
                  label: '\u9500\u552E\u90E8',
                  value: '1',
                  deptCode: 'A',
                },
                {
                  label: '\u6280\u672F\u90E8',
                  value: '2',
                  deptCode: 'B',
                },
              ],
              onChange: (val, option) => {
                innerRef.current?.setData({ deptCode: option.deptCode });
              },
            }),
          },
        ];
      }

      return [];
    },
  },
];
`},81684:function(c,l){"use strict";l.Z=`import { useRef } from 'react';
import type { SchemaFormInnerRefType } from 'react-admin-kit';
import { SchemaForm } from 'react-admin-kit';

import { getColumns } from './columns';

const InnerRefDataDemo = () => {
  const innerRef = useRef<SchemaFormInnerRefType>(null);

  const onFinish = async (values: any) => {
    console.log({ values, otherValues: innerRef.current?.data });
  };

  return (
    <SchemaForm
      columns={getColumns()}
      innerRef={innerRef}
      onFinish={onFinish}
      submitter={{}}
      autoFocusFirstInput={false}
    />
  );
};

export default InnerRefDataDemo;
`},88802:function(c,l){"use strict";l.Z=`import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '\u8054\u7CFB\u4EBA',
    dataIndex: 'name',
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
  },
  {
    fieldProps: { hidden: true },
  },
  {
    title: '\u8D1F\u8D23\u4EBA',
    dataIndex: 'chargeName',
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'chargePhone',
  },
  {
    title: '\u90AE\u7BB1',
    dataIndex: 'mail',
  },
];
`},70716:function(c,l){"use strict";l.Z=`import { Button } from 'antd';
import { useRef } from 'react';
import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

import type { FormInstance } from 'antd';

const Placeholder = () => {
  const formRef = useRef<FormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        layout="horizontal"
        grid={true}
        rowProps={{ gutter: [0, 0] }}
        colProps={{ span: 8 }}
        labelCol={{ span: 9 }}
        onFinish={onFinish}
        formRef={formRef}
        columns={columns}
        autoFocusFirstInput={false}
      />

      <div style={{ textAlign: 'end' }}>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => formRef.current?.resetFields()}
        >
          \u91CD\u7F6E
        </Button>
        <Button type="primary" onClick={() => formRef.current?.submit()}>
          \u63D0\u4EA4
        </Button>
      </div>
    </div>
  );
};

export default Placeholder;
`},5760:function(c,l){"use strict";l.Z=`import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '\u8054\u7CFB\u4EBA',
    dataIndex: 'name',
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'phone',
  },
  {
    fieldProps: { hidden: true },
    render: () => null,
  },
  {
    title: '\u8D1F\u8D23\u4EBA',
    dataIndex: 'chargeName',
  },
  {
    title: '\u7535\u8BDD',
    dataIndex: 'chargePhone',
  },
  {
    title: '\u81EA\u5B9A\u4E49',
    dataIndex: 'mail',
    render: (dom, record) => {
      if (record.mode === 'read') {
        return '\u{1F4E7}' + record.value;
      }
      return dom;
    },
  },
];
`},78635:function(c,l){"use strict";l.Z=`import { useRef } from 'react';
import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

import type { FormInstance } from 'antd';

const Readonly = () => {
  const formRef = useRef<FormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        layout="horizontal"
        grid={true}
        rowProps={{ gutter: [0, 0] }}
        colProps={{ span: 8 }}
        labelCol={{ span: 9 }}
        onFinish={onFinish}
        formRef={formRef}
        columns={columns}
        readonly={true}
        initialValues={{
          name: '\u738B\u5148\u751F',
          phone: 1202228888,
          sex: '\u7537',
          mail: 'mail.com',
        }}
      />
    </div>
  );
};

export default Readonly;
`},38270:function(c,l){"use strict";l.Z=`import type { FormColumnType } from 'react-admin-kit/SchemaForm/types';

export const columns: FormColumnType[] = [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'username',
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
  },
];
`},11308:function(c,l){"use strict";l.Z=`import { SchemaForm } from 'react-admin-kit';

import { columns } from './columns';

const Basic = () => {
  return (
    <SchemaForm
      columns={columns}
      autoFocusFirstInput={false}
      submitter
      onFinish={console.log}
    />
  );
};

export default Basic;
`},38545:function(c,l){"use strict";l.Z=`import type { FormColumnType } from 'react-admin-kit/SchemaForm/types';

export const columns: FormColumnType[] = [
  {
    title: '\u7528\u6237\u540D',
    dataIndex: 'username',
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
  },
];
`},82148:function(c,l){"use strict";l.Z=`import { SchemaForm } from 'react-admin-kit';

import { columns } from './columns';

const Basic = () => {
  return (
    <SchemaForm
      columns={columns}
      autoFocusFirstInput={false}
      submitter={{
        style: { justifyContent: 'end' },
        submitButtonProps: { loading: true },
        resetButtonProps: { danger: true },
      }}
      onFinish={console.log}
    />
  );
};

export default Basic;
`},94887:function(c,l){"use strict";l.Z=`import type { FormColumnType } from 'react-admin-kit/SchemaForm/types';

export const columns: FormColumnType[] = [
  {
    title: 'money',
    dataIndex: 'money',
    valueType: 'money',
    initialValue: 1234.25,
    fieldProps: {
      precision: 2,
      style: { width: '80%' },
    },
  },
  {
    title: 'digit',
    dataIndex: 'digit',
    valueType: 'digit',
    initialValue: 8,
  },
  {
    title: 'date',
    dataIndex: 'date',
    valueType: 'date',
    initialValue: new Date(),
  },
  {
    title: 'dateRange',
    dataIndex: 'dateRange',
    valueType: 'dateRange',
    initialValue: ['2023-8-1', new Date()],
    colProps: { span: 16 },
  },
  {
    title: 'select',
    dataIndex: 'select',
    valueType: 'select',
    fieldProps: {
      options: [
        { label: '\u9009\u62E91', value: 1 },
        { label: '\u9009\u62E92', value: 2 },
      ],
    },
    initialValue: 1,
  },
  {
    title: 'radio',
    dataIndex: 'radio',
    valueType: 'radio',
    fieldProps: {
      options: [
        { label: '\u662F', value: 1 },
        { label: '\u5426', value: 0 },
      ],
    },
    initialValue: 1,
  },
  {
    title: 'textarea',
    dataIndex: 'textarea',
    valueType: 'textarea',
    initialValue: '\u6587\u672C\u57DF',
  },
];
`},47442:function(c,l){"use strict";l.Z=`import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

const ValueType = () => {
  return (
    <SchemaForm
      columns={columns}
      grid
      colProps={{ span: 8 }}
      autoFocusFirstInput={false}
    />
  );
};

export default ValueType;
`},81537:function(c,l){"use strict";l.Z=`import { SettingProvider } from 'react-admin-kit';
import Example from '../../../FormUpload/demos/basic';

const SchemaFormDemo = () => {
  return (
    <SettingProvider
      formUploadSetting={{ headers: { authorization: 'authorization-text' } }}
    >
      <Example />
    </SettingProvider>
  );
};

export default SchemaFormDemo;
`},17121:function(c,l){"use strict";l.Z=`import Example from '@/ModalForm/demos/basic';
import { SettingProvider } from 'react-admin-kit';

const ModalDemo = () => {
  return (
    <SettingProvider
      modalFormSetting={{
        formProps: { layout: 'horizontal', labelCol: { span: 4 } },
      }}
    >
      <Example />
    </SettingProvider>
  );
};

export default ModalDemo;
`},73774:function(c,l){"use strict";l.Z=`import Example from '@/SchemaForm/demos/basic';
import { SettingProvider } from 'react-admin-kit';

const SchemaFormDemo = () => {
  return (
    <SettingProvider
      schemaFormSetting={{ validateMessages: { required: '\${label}\u4E3A\u5FC5\u586B\u9879' } }}
    >
      <Example />
    </SettingProvider>
  );
};

export default SchemaFormDemo;
`},74957:function(c,l){"use strict";l.Z=`import { SettingProvider } from 'react-admin-kit';

import Example from '@/ProTable/demos/basic';

const Basic = () => {
  return (
    <SettingProvider
      proTableSetting={{
        size: 'middle',
        searchConfig: { defaultCollapsed: false },
        modalProps: { width: 680 },
        formProps: {
          grid: true,
          rowProps: { gutter: [24, 0] },
          colProps: { span: 12 },
        },
      }}
    >
      <Example />
    </SettingProvider>
  );
};

export default Basic;
`},82225:function(c,l,e){"use strict";e.d(l,{V4:function(){return ue},ZP:function(){return Ie}});var o=e(4942),a=e(1413),r=e(97685),s=e(71002),u=e(94184),v=e.n(u),d=e(34203),h=e(42550),m=e(67294),p=null,y=m.createContext({});function g(Oe){var Se=Oe.children,$e=_objectWithoutProperties(Oe,p);return React.createElement(y.Provider,{value:$e},Se)}var I=e(15671),b=e(43144),E=e(32531),R=e(73568),A=function(Oe){(0,E.Z)($e,Oe);var Se=(0,R.Z)($e);function $e(){return(0,I.Z)(this,$e),Se.apply(this,arguments)}return(0,b.Z)($e,[{key:"render",value:function(){return this.props.children}}]),$e}(m.Component),N=A,w=e(30470),B="none",C="appear",L="enter",Z="leave",te="none",ee="prepare",_="start",de="active",be="end",Te="prepared",ie=e(98924);function Q(Oe,Se){var $e={};return $e[Oe.toLowerCase()]=Se.toLowerCase(),$e["Webkit".concat(Oe)]="webkit".concat(Se),$e["Moz".concat(Oe)]="moz".concat(Se),$e["ms".concat(Oe)]="MS".concat(Se),$e["O".concat(Oe)]="o".concat(Se.toLowerCase()),$e}function Y(Oe,Se){var $e={animationend:Q("Animation","AnimationEnd"),transitionend:Q("Transition","TransitionEnd")};return Oe&&("AnimationEvent"in Se||delete $e.animationend.animation,"TransitionEvent"in Se||delete $e.transitionend.transition),$e}var k=Y((0,ie.Z)(),typeof window!="undefined"?window:{}),K={};if((0,ie.Z)()){var re=document.createElement("div");K=re.style}var T={};function D(Oe){if(T[Oe])return T[Oe];var Se=k[Oe];if(Se)for(var $e=Object.keys(Se),Ve=$e.length,Ge=0;Ge<Ve;Ge+=1){var vt=$e[Ge];if(Object.prototype.hasOwnProperty.call(Se,vt)&&vt in K)return T[Oe]=Se[vt],T[Oe]}return""}var V=D("animationend"),le=D("transitionend"),J=!!(V&&le),P=V||"animationend",$=le||"transitionend";function H(Oe,Se){if(!Oe)return null;if((0,s.Z)(Oe)==="object"){var $e=Se.replace(/-\w/g,function(Ve){return Ve[1].toUpperCase()});return Oe[$e]}return"".concat(Oe,"-").concat(Se)}var q=function(Oe){var Se=(0,m.useRef)(),$e=(0,m.useRef)(Oe);$e.current=Oe;var Ve=m.useCallback(function(he){$e.current(he)},[]);function Ge(he){he&&(he.removeEventListener($,Ve),he.removeEventListener(P,Ve))}function vt(he){Se.current&&Se.current!==he&&Ge(Se.current),he&&he!==Se.current&&(he.addEventListener($,Ve),he.addEventListener(P,Ve),Se.current=he)}return m.useEffect(function(){return function(){Ge(Se.current)}},[]),[vt,Ge]},ae=(0,ie.Z)()?m.useLayoutEffect:m.useEffect,Ce=ae,Le=e(75164),Xe=function(){var Oe=m.useRef(null);function Se(){Le.Z.cancel(Oe.current)}function $e(Ve){var Ge=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;Se();var vt=(0,Le.Z)(function(){Ge<=1?Ve({isCanceled:function(){return vt!==Oe.current}}):$e(Ve,Ge-1)});Oe.current=vt}return m.useEffect(function(){return function(){Se()}},[]),[$e,Se]},Ze=[ee,_,de,be],je=[ee,Te],Ye=!1,oe=!0;function fe(Oe){return Oe===de||Oe===be}var pe=function(Oe,Se,$e){var Ve=(0,w.Z)(te),Ge=(0,r.Z)(Ve,2),vt=Ge[0],he=Ge[1],Be=Xe(),Fe=(0,r.Z)(Be,2),Re=Fe[0],Je=Fe[1];function Ue(){he(ee,!0)}var It=Se?je:Ze;return Ce(function(){if(vt!==te&&vt!==be){var xt=It.indexOf(vt),Dt=It[xt+1],En=$e(vt);En===Ye?he(Dt,!0):Dt&&Re(function(Xt){function Mn(){Xt.isCanceled()||he(Dt,!0)}En===!0?Mn():Promise.resolve(En).then(Mn)})}},[Oe,vt]),m.useEffect(function(){return function(){Je()}},[]),[Ue,vt]};function me(Oe,Se,$e,Ve){var Ge=Ve.motionEnter,vt=Ge===void 0?!0:Ge,he=Ve.motionAppear,Be=he===void 0?!0:he,Fe=Ve.motionLeave,Re=Fe===void 0?!0:Fe,Je=Ve.motionDeadline,Ue=Ve.motionLeaveImmediately,It=Ve.onAppearPrepare,xt=Ve.onEnterPrepare,Dt=Ve.onLeavePrepare,En=Ve.onAppearStart,Xt=Ve.onEnterStart,Mn=Ve.onLeaveStart,Wn=Ve.onAppearActive,Ar=Ve.onEnterActive,Kr=Ve.onLeaveActive,jn=Ve.onAppearEnd,Bn=Ve.onEnterEnd,Gn=Ve.onLeaveEnd,pt=Ve.onVisibleChanged,st=(0,w.Z)(),mt=(0,r.Z)(st,2),kt=mt[0],qt=mt[1],zt=(0,w.Z)(B),Zn=(0,r.Z)(zt,2),bn=Zn[0],qn=Zn[1],qr=(0,w.Z)(null),Nn=(0,r.Z)(qr,2),ha=Nn[0],wa=Nn[1],Ua=(0,m.useRef)(!1),ia=(0,m.useRef)(null);function Hn(){return $e()}var Oo=(0,m.useRef)(!1);function Qa(){qn(B,!0),wa(null,!0)}function ua(Yr){var Tr=Hn();if(!(Yr&&!Yr.deadline&&Yr.target!==Tr)){var yr=Oo.current,la;bn===C&&yr?la=jn==null?void 0:jn(Tr,Yr):bn===L&&yr?la=Bn==null?void 0:Bn(Tr,Yr):bn===Z&&yr&&(la=Gn==null?void 0:Gn(Tr,Yr)),bn!==B&&yr&&la!==!1&&Qa()}}var Zo=q(ua),Vr=(0,r.Z)(Zo,1),fn=Vr[0],wn=function(Tr){var yr,la,oo;switch(Tr){case C:return yr={},(0,o.Z)(yr,ee,It),(0,o.Z)(yr,_,En),(0,o.Z)(yr,de,Wn),yr;case L:return la={},(0,o.Z)(la,ee,xt),(0,o.Z)(la,_,Xt),(0,o.Z)(la,de,Ar),la;case Z:return oo={},(0,o.Z)(oo,ee,Dt),(0,o.Z)(oo,_,Mn),(0,o.Z)(oo,de,Kr),oo;default:return{}}},fr=m.useMemo(function(){return wn(bn)},[bn]),ea=pe(bn,!Oe,function(Yr){if(Yr===ee){var Tr=fr[ee];return Tr?Tr(Hn()):Ye}if(Ea in fr){var yr;wa(((yr=fr[Ea])===null||yr===void 0?void 0:yr.call(fr,Hn(),null))||null)}return Ea===de&&(fn(Hn()),Je>0&&(clearTimeout(ia.current),ia.current=setTimeout(function(){ua({deadline:!0})},Je))),Ea===Te&&Qa(),oe}),sa=(0,r.Z)(ea,2),$o=sa[0],Ea=sa[1],fi=fe(Ea);Oo.current=fi,Ce(function(){qt(Se);var Yr=Ua.current;Ua.current=!0;var Tr;!Yr&&Se&&Be&&(Tr=C),Yr&&Se&&vt&&(Tr=L),(Yr&&!Se&&Re||!Yr&&Ue&&!Se&&Re)&&(Tr=Z);var yr=wn(Tr);Tr&&(Oe||yr[ee])?(qn(Tr),$o()):qn(B)},[Se]),(0,m.useEffect)(function(){(bn===C&&!Be||bn===L&&!vt||bn===Z&&!Re)&&qn(B)},[Be,vt,Re]),(0,m.useEffect)(function(){return function(){Ua.current=!1,clearTimeout(ia.current)}},[]);var xo=m.useRef(!1);(0,m.useEffect)(function(){kt&&(xo.current=!0),kt!==void 0&&bn===B&&((xo.current||kt)&&(pt==null||pt(kt)),xo.current=!0)},[kt,bn]);var Ro=ha;return fr[ee]&&Ea===_&&(Ro=(0,a.Z)({transition:"none"},Ro)),[bn,Ea,Ro,kt!=null?kt:Se]}function Pe(Oe){var Se=Oe;(0,s.Z)(Oe)==="object"&&(Se=Oe.transitionSupport);function $e(Ge,vt){return!!(Ge.motionName&&Se&&vt!==!1)}var Ve=m.forwardRef(function(Ge,vt){var he=Ge.visible,Be=he===void 0?!0:he,Fe=Ge.removeOnLeave,Re=Fe===void 0?!0:Fe,Je=Ge.forceRender,Ue=Ge.children,It=Ge.motionName,xt=Ge.leavedClassName,Dt=Ge.eventProps,En=m.useContext(y),Xt=En.motion,Mn=$e(Ge,Xt),Wn=(0,m.useRef)(),Ar=(0,m.useRef)();function Kr(){try{return Wn.current instanceof HTMLElement?Wn.current:(0,d.Z)(Ar.current)}catch(wa){return null}}var jn=me(Mn,Be,Kr,Ge),Bn=(0,r.Z)(jn,4),Gn=Bn[0],pt=Bn[1],st=Bn[2],mt=Bn[3],kt=m.useRef(mt);mt&&(kt.current=!0);var qt=m.useCallback(function(wa){Wn.current=wa,(0,h.mH)(vt,wa)},[vt]),zt,Zn=(0,a.Z)((0,a.Z)({},Dt),{},{visible:Be});if(!Ue)zt=null;else if(Gn===B)mt?zt=Ue((0,a.Z)({},Zn),qt):!Re&&kt.current&&xt?zt=Ue((0,a.Z)((0,a.Z)({},Zn),{},{className:xt}),qt):Je||!Re&&!xt?zt=Ue((0,a.Z)((0,a.Z)({},Zn),{},{style:{display:"none"}}),qt):zt=null;else{var bn,qn;pt===ee?qn="prepare":fe(pt)?qn="active":pt===_&&(qn="start");var qr=H(It,"".concat(Gn,"-").concat(qn));zt=Ue((0,a.Z)((0,a.Z)({},Zn),{},{className:v()(H(It,Gn),(bn={},(0,o.Z)(bn,qr,qr&&qn),(0,o.Z)(bn,It,typeof It=="string"),bn)),style:st}),qt)}if(m.isValidElement(zt)&&(0,h.Yr)(zt)){var Nn=zt,ha=Nn.ref;ha||(zt=m.cloneElement(zt,{ref:qt}))}return m.createElement(N,{ref:Ar},zt)});return Ve.displayName="CSSMotion",Ve}var se=Pe(J),ve=e(87462),ye=e(91),De=e(97326),ze="add",bt="keep",at="remove",lt="removed";function St(Oe){var Se;return Oe&&(0,s.Z)(Oe)==="object"&&"key"in Oe?Se=Oe:Se={key:Oe},(0,a.Z)((0,a.Z)({},Se),{},{key:String(Se.key)})}function Bt(){var Oe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return Oe.map(St)}function Ot(){var Oe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],Se=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],$e=[],Ve=0,Ge=Se.length,vt=Bt(Oe),he=Bt(Se);vt.forEach(function(Re){for(var Je=!1,Ue=Ve;Ue<Ge;Ue+=1){var It=he[Ue];if(It.key===Re.key){Ve<Ue&&($e=$e.concat(he.slice(Ve,Ue).map(function(xt){return(0,a.Z)((0,a.Z)({},xt),{},{status:ze})})),Ve=Ue),$e.push((0,a.Z)((0,a.Z)({},It),{},{status:bt})),Ve+=1,Je=!0;break}}Je||$e.push((0,a.Z)((0,a.Z)({},Re),{},{status:at}))}),Ve<Ge&&($e=$e.concat(he.slice(Ve).map(function(Re){return(0,a.Z)((0,a.Z)({},Re),{},{status:ze})})));var Be={};$e.forEach(function(Re){var Je=Re.key;Be[Je]=(Be[Je]||0)+1});var Fe=Object.keys(Be).filter(function(Re){return Be[Re]>1});return Fe.forEach(function(Re){$e=$e.filter(function(Je){var Ue=Je.key,It=Je.status;return Ue!==Re||It!==at}),$e.forEach(function(Je){Je.key===Re&&(Je.status=bt)})}),$e}var Wt=["component","children","onVisibleChanged","onAllRemoved"],x=["status"],U=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearPrepare","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function ne(Oe){var Se=arguments.length>1&&arguments[1]!==void 0?arguments[1]:se,$e=function(Ve){(0,E.Z)(vt,Ve);var Ge=(0,R.Z)(vt);function vt(){var he;(0,I.Z)(this,vt);for(var Be=arguments.length,Fe=new Array(Be),Re=0;Re<Be;Re++)Fe[Re]=arguments[Re];return he=Ge.call.apply(Ge,[this].concat(Fe)),(0,o.Z)((0,De.Z)(he),"state",{keyEntities:[]}),(0,o.Z)((0,De.Z)(he),"removeKey",function(Je){var Ue=he.state.keyEntities,It=Ue.map(function(xt){return xt.key!==Je?xt:(0,a.Z)((0,a.Z)({},xt),{},{status:lt})});return he.setState({keyEntities:It}),It.filter(function(xt){var Dt=xt.status;return Dt!==lt}).length}),he}return(0,b.Z)(vt,[{key:"render",value:function(){var Be=this,Fe=this.state.keyEntities,Re=this.props,Je=Re.component,Ue=Re.children,It=Re.onVisibleChanged,xt=Re.onAllRemoved,Dt=(0,ye.Z)(Re,Wt),En=Je||m.Fragment,Xt={};return U.forEach(function(Mn){Xt[Mn]=Dt[Mn],delete Dt[Mn]}),delete Dt.keys,m.createElement(En,Dt,Fe.map(function(Mn){var Wn=Mn.status,Ar=(0,ye.Z)(Mn,x),Kr=Wn===ze||Wn===bt;return m.createElement(Se,(0,ve.Z)({},Xt,{key:Ar.key,visible:Kr,eventProps:Ar,onVisibleChanged:function(Bn){if(It==null||It(Bn,{key:Ar.key}),!Bn){var Gn=Be.removeKey(Ar.key);Gn===0&&xt&&xt()}}}),Ue)}))}}],[{key:"getDerivedStateFromProps",value:function(Be,Fe){var Re=Be.keys,Je=Fe.keyEntities,Ue=Bt(Re),It=Ot(Je,Ue);return{keyEntities:It.filter(function(xt){var Dt=Je.find(function(En){var Xt=En.key;return xt.key===Xt});return!(Dt&&Dt.status===lt&&xt.status===at)})}}}]),vt}(m.Component);return(0,o.Z)($e,"defaultProps",{component:"div"}),$e}var ue=ne(J),Ie=se},39983:function(c,l,e){"use strict";e.d(l,{Z:function(){return re}});var o=e(87462),a=e(1413),r=e(97685),s=e(91),u=e(67294),v=e(94184),d=e.n(v),h=e(48555),m=e(8410),p=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],y=void 0;function g(T,D){var V=T.prefixCls,le=T.invalidate,J=T.item,P=T.renderItem,$=T.responsive,H=T.responsiveDisabled,q=T.registerSize,ae=T.itemKey,Ce=T.className,Le=T.style,Xe=T.children,Ze=T.display,je=T.order,Ye=T.component,oe=Ye===void 0?"div":Ye,fe=(0,s.Z)(T,p),pe=$&&!Ze;function me(De){q(ae,De)}u.useEffect(function(){return function(){me(null)}},[]);var Pe=P&&J!==y?P(J):Xe,se;le||(se={opacity:pe?0:1,height:pe?0:y,overflowY:pe?"hidden":y,order:$?je:y,pointerEvents:pe?"none":y,position:pe?"absolute":y});var ve={};pe&&(ve["aria-hidden"]=!0);var ye=u.createElement(oe,(0,o.Z)({className:d()(!le&&V,Ce),style:(0,a.Z)((0,a.Z)({},se),Le)},ve,fe,{ref:D}),Pe);return $&&(ye=u.createElement(h.Z,{onResize:function(ze){var bt=ze.offsetWidth;me(bt)},disabled:H},ye)),ye}var I=u.forwardRef(g);I.displayName="Item";var b=I,E=e(66680),R=e(73935),A=e(75164);function N(T){if(typeof MessageChannel=="undefined")(0,A.Z)(T);else{var D=new MessageChannel;D.port1.onmessage=function(){return T()},D.port2.postMessage(void 0)}}function w(){var T=u.useRef(null),D=function(le){T.current||(T.current=[],N(function(){(0,R.unstable_batchedUpdates)(function(){T.current.forEach(function(J){J()}),T.current=null})})),T.current.push(le)};return D}function B(T,D){var V=u.useState(D),le=(0,r.Z)(V,2),J=le[0],P=le[1],$=(0,E.Z)(function(H){T(function(){P(H)})});return[J,$]}var C=u.createContext(null),L=["component"],Z=["className"],te=["className"],ee=function(D,V){var le=u.useContext(C);if(!le){var J=D.component,P=J===void 0?"div":J,$=(0,s.Z)(D,L);return u.createElement(P,(0,o.Z)({},$,{ref:V}))}var H=le.className,q=(0,s.Z)(le,Z),ae=D.className,Ce=(0,s.Z)(D,te);return u.createElement(C.Provider,{value:null},u.createElement(b,(0,o.Z)({ref:V,className:d()(H,ae)},q,Ce)))},_=u.forwardRef(ee);_.displayName="RawItem";var de=_,be=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],Te="responsive",ie="invalidate";function Q(T){return"+ ".concat(T.length," ...")}function Y(T,D){var V=T.prefixCls,le=V===void 0?"rc-overflow":V,J=T.data,P=J===void 0?[]:J,$=T.renderItem,H=T.renderRawItem,q=T.itemKey,ae=T.itemWidth,Ce=ae===void 0?10:ae,Le=T.ssr,Xe=T.style,Ze=T.className,je=T.maxCount,Ye=T.renderRest,oe=T.renderRawRest,fe=T.suffix,pe=T.component,me=pe===void 0?"div":pe,Pe=T.itemComponent,se=T.onVisibleChange,ve=(0,s.Z)(T,be),ye=Le==="full",De=w(),ze=B(De,null),bt=(0,r.Z)(ze,2),at=bt[0],lt=bt[1],St=at||0,Bt=B(De,new Map),Ot=(0,r.Z)(Bt,2),Wt=Ot[0],x=Ot[1],U=B(De,0),ne=(0,r.Z)(U,2),ue=ne[0],Ie=ne[1],Oe=B(De,0),Se=(0,r.Z)(Oe,2),$e=Se[0],Ve=Se[1],Ge=B(De,0),vt=(0,r.Z)(Ge,2),he=vt[0],Be=vt[1],Fe=(0,u.useState)(null),Re=(0,r.Z)(Fe,2),Je=Re[0],Ue=Re[1],It=(0,u.useState)(null),xt=(0,r.Z)(It,2),Dt=xt[0],En=xt[1],Xt=u.useMemo(function(){return Dt===null&&ye?Number.MAX_SAFE_INTEGER:Dt||0},[Dt,at]),Mn=(0,u.useState)(!1),Wn=(0,r.Z)(Mn,2),Ar=Wn[0],Kr=Wn[1],jn="".concat(le,"-item"),Bn=Math.max(ue,$e),Gn=je===Te,pt=P.length&&Gn,st=je===ie,mt=pt||typeof je=="number"&&P.length>je,kt=(0,u.useMemo)(function(){var fn=P;return pt?at===null&&ye?fn=P:fn=P.slice(0,Math.min(P.length,St/Ce)):typeof je=="number"&&(fn=P.slice(0,je)),fn},[P,Ce,at,je,pt]),qt=(0,u.useMemo)(function(){return pt?P.slice(Xt+1):P.slice(kt.length)},[P,kt,pt,Xt]),zt=(0,u.useCallback)(function(fn,wn){var fr;return typeof q=="function"?q(fn):(fr=q&&(fn==null?void 0:fn[q]))!==null&&fr!==void 0?fr:wn},[q]),Zn=(0,u.useCallback)($||function(fn){return fn},[$]);function bn(fn,wn,fr){Dt===fn&&(wn===void 0||wn===Je)||(En(fn),fr||(Kr(fn<P.length-1),se==null||se(fn)),wn!==void 0&&Ue(wn))}function qn(fn,wn){lt(wn.clientWidth)}function qr(fn,wn){x(function(fr){var ea=new Map(fr);return wn===null?ea.delete(fn):ea.set(fn,wn),ea})}function Nn(fn,wn){Ve(wn),Ie($e)}function ha(fn,wn){Be(wn)}function wa(fn){return Wt.get(zt(kt[fn],fn))}(0,m.Z)(function(){if(St&&typeof Bn=="number"&&kt){var fn=he,wn=kt.length,fr=wn-1;if(!wn){bn(0,null);return}for(var ea=0;ea<wn;ea+=1){var sa=wa(ea);if(ye&&(sa=sa||0),sa===void 0){bn(ea-1,void 0,!0);break}if(fn+=sa,fr===0&&fn<=St||ea===fr-1&&fn+wa(fr)<=St){bn(fr,null);break}else if(fn+Bn>St){bn(ea-1,fn-sa-he+$e);break}}fe&&wa(0)+he>St&&Ue(null)}},[St,Wt,$e,he,zt,kt]);var Ua=Ar&&!!qt.length,ia={};Je!==null&&pt&&(ia={position:"absolute",left:Je,top:0});var Hn={prefixCls:jn,responsive:pt,component:Pe,invalidate:st},Oo=H?function(fn,wn){var fr=zt(fn,wn);return u.createElement(C.Provider,{key:fr,value:(0,a.Z)((0,a.Z)({},Hn),{},{order:wn,item:fn,itemKey:fr,registerSize:qr,display:wn<=Xt})},H(fn,wn))}:function(fn,wn){var fr=zt(fn,wn);return u.createElement(b,(0,o.Z)({},Hn,{order:wn,key:fr,item:fn,renderItem:Zn,itemKey:fr,registerSize:qr,display:wn<=Xt}))},Qa,ua={order:Ua?Xt:Number.MAX_SAFE_INTEGER,className:"".concat(jn,"-rest"),registerSize:Nn,display:Ua};if(oe)oe&&(Qa=u.createElement(C.Provider,{value:(0,a.Z)((0,a.Z)({},Hn),ua)},oe(qt)));else{var Zo=Ye||Q;Qa=u.createElement(b,(0,o.Z)({},Hn,ua),typeof Zo=="function"?Zo(qt):Zo)}var Vr=u.createElement(me,(0,o.Z)({className:d()(!st&&le,Ze),style:Xe,ref:D},ve),kt.map(Oo),mt?Qa:null,fe&&u.createElement(b,(0,o.Z)({},Hn,{responsive:Gn,responsiveDisabled:!pt,order:Xt,className:"".concat(jn,"-suffix"),registerSize:ha,display:!0,style:ia}),fe));return Gn&&(Vr=u.createElement(h.Z,{onResize:qn,disabled:!pt},Vr)),Vr}var k=u.forwardRef(Y);k.displayName="Overflow",k.Item=de,k.RESPONSIVE=Te,k.INVALIDATE=ie;var K=k,re=K},48555:function(c,l,e){"use strict";e.d(l,{Z:function(){return Te}});var o=e(87462),a=e(67294),r=e(50344),s=e(80334),u=e(1413),v=e(42550),d=e(34203),h=e(91033),m=new Map;function p(ie){ie.forEach(function(Q){var Y,k=Q.target;(Y=m.get(k))===null||Y===void 0||Y.forEach(function(K){return K(k)})})}var y=new h.Z(p),g=null,I=null;function b(ie,Q){m.has(ie)||(m.set(ie,new Set),y.observe(ie)),m.get(ie).add(Q)}function E(ie,Q){m.has(ie)&&(m.get(ie).delete(Q),m.get(ie).size||(y.unobserve(ie),m.delete(ie)))}var R=e(15671),A=e(43144),N=e(32531),w=e(73568),B=function(ie){(0,N.Z)(Y,ie);var Q=(0,w.Z)(Y);function Y(){return(0,R.Z)(this,Y),Q.apply(this,arguments)}return(0,A.Z)(Y,[{key:"render",value:function(){return this.props.children}}]),Y}(a.Component),C=a.createContext(null);function L(ie){var Q=ie.children,Y=ie.onBatchResize,k=a.useRef(0),K=a.useRef([]),re=a.useContext(C),T=a.useCallback(function(D,V,le){k.current+=1;var J=k.current;K.current.push({size:D,element:V,data:le}),Promise.resolve().then(function(){J===k.current&&(Y==null||Y(K.current),K.current=[])}),re==null||re(D,V,le)},[Y,re]);return a.createElement(C.Provider,{value:T},Q)}function Z(ie,Q){var Y=ie.children,k=ie.disabled,K=a.useRef(null),re=a.useRef(null),T=a.useContext(C),D=typeof Y=="function",V=D?Y(K):Y,le=a.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),J=!D&&a.isValidElement(V)&&(0,v.Yr)(V),P=J?V.ref:null,$=a.useMemo(function(){return(0,v.sQ)(P,K)},[P,K]),H=function(){return(0,d.Z)(K.current)||(0,d.Z)(re.current)};a.useImperativeHandle(Q,function(){return H()});var q=a.useRef(ie);q.current=ie;var ae=a.useCallback(function(Ce){var Le=q.current,Xe=Le.onResize,Ze=Le.data,je=Ce.getBoundingClientRect(),Ye=je.width,oe=je.height,fe=Ce.offsetWidth,pe=Ce.offsetHeight,me=Math.floor(Ye),Pe=Math.floor(oe);if(le.current.width!==me||le.current.height!==Pe||le.current.offsetWidth!==fe||le.current.offsetHeight!==pe){var se={width:me,height:Pe,offsetWidth:fe,offsetHeight:pe};le.current=se;var ve=fe===Math.round(Ye)?Ye:fe,ye=pe===Math.round(oe)?oe:pe,De=(0,u.Z)((0,u.Z)({},se),{},{offsetWidth:ve,offsetHeight:ye});T==null||T(De,Ce,Ze),Xe&&Promise.resolve().then(function(){Xe(De,Ce)})}},[]);return a.useEffect(function(){var Ce=H();return Ce&&!k&&b(Ce,ae),function(){return E(Ce,ae)}},[K.current,k]),a.createElement(B,{ref:re},J?a.cloneElement(V,{ref:$}):V)}var te=a.forwardRef(Z),ee=te,_="rc-observer-key";function de(ie,Q){var Y=ie.children,k=typeof Y=="function"?[Y]:(0,r.Z)(Y);return k.map(function(K,re){var T=(K==null?void 0:K.key)||"".concat(_,"-").concat(re);return a.createElement(ee,(0,o.Z)({},ie,{key:T,ref:re===0?Q:void 0}),K)})}var be=a.forwardRef(de);be.Collection=L;var Te=be},50344:function(c,l,e){"use strict";e.d(l,{Z:function(){return r}});var o=e(67294),a=e(59864);function r(s){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=[];return o.Children.forEach(s,function(d){d==null&&!u.keepEmpty||(Array.isArray(d)?v=v.concat(r(d)):(0,a.isFragment)(d)&&d.props?v=v.concat(r(d.props.children,u)):v.push(d))}),v}},98924:function(c,l,e){"use strict";e.d(l,{Z:function(){return o}});function o(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},94999:function(c,l,e){"use strict";e.d(l,{Z:function(){return o}});function o(a,r){if(!a)return!1;if(a.contains)return a.contains(r);for(var s=r;s;){if(s===a)return!0;s=s.parentNode}return!1}},44958:function(c,l,e){"use strict";e.d(l,{hq:function(){return R},jL:function(){return I}});var o=e(98924),a=e(94999),r="data-rc-order",s="data-rc-priority",u="rc-util-key",v=new Map;function d(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},N=A.mark;return N?N.startsWith("data-")?N:"data-".concat(N):u}function h(A){if(A.attachTo)return A.attachTo;var N=document.querySelector("head");return N||document.body}function m(A){return A==="queue"?"prependQueue":A?"prepend":"append"}function p(A){return Array.from((v.get(A)||A).children).filter(function(N){return N.tagName==="STYLE"})}function y(A){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!(0,o.Z)())return null;var w=N.csp,B=N.prepend,C=N.priority,L=C===void 0?0:C,Z=m(B),te=Z==="prependQueue",ee=document.createElement("style");ee.setAttribute(r,Z),te&&L&&ee.setAttribute(s,"".concat(L)),w!=null&&w.nonce&&(ee.nonce=w==null?void 0:w.nonce),ee.innerHTML=A;var _=h(N),de=_.firstChild;if(B){if(te){var be=p(_).filter(function(Te){if(!["prepend","prependQueue"].includes(Te.getAttribute(r)))return!1;var ie=Number(Te.getAttribute(s)||0);return L>=ie});if(be.length)return _.insertBefore(ee,be[be.length-1].nextSibling),ee}_.insertBefore(ee,de)}else _.appendChild(ee);return ee}function g(A){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},w=h(N);return p(w).find(function(B){return B.getAttribute(d(N))===A})}function I(A){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},w=g(A,N);if(w){var B=h(N);B.removeChild(w)}}function b(A,N){var w=v.get(A);if(!w||!(0,a.Z)(document,w)){var B=y("",N),C=B.parentNode;v.set(A,C),A.removeChild(B)}}function E(){v.clear()}function R(A,N){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},B=h(w);b(B,w);var C=g(N,w);if(C){var L,Z;if((L=w.csp)!==null&&L!==void 0&&L.nonce&&C.nonce!==((Z=w.csp)===null||Z===void 0?void 0:Z.nonce)){var te;C.nonce=(te=w.csp)===null||te===void 0?void 0:te.nonce}return C.innerHTML!==A&&(C.innerHTML=A),C}var ee=y(A,w);return ee.setAttribute(d(w),N),ee}},34203:function(c,l,e){"use strict";e.d(l,{S:function(){return r},Z:function(){return s}});var o=e(67294),a=e(73935);function r(u){return u instanceof HTMLElement||u instanceof SVGElement}function s(u){return r(u)?u:u instanceof o.Component?a.findDOMNode(u):null}},88603:function(c,l,e){"use strict";e.d(l,{tS:function(){return s}});var o=e(74902),a=e(5110);function r(p){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if((0,a.Z)(p)){var g=p.nodeName.toLowerCase(),I=["input","select","textarea","button"].includes(g)||p.isContentEditable||g==="a"&&!!p.getAttribute("href"),b=p.getAttribute("tabindex"),E=Number(b),R=null;return b&&!Number.isNaN(E)?R=E:I&&R===null&&(R=0),I&&p.disabled&&(R=null),R!==null&&(R>=0||y&&R<0)}return!1}function s(p){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=(0,o.Z)(p.querySelectorAll("*")).filter(function(I){return r(I,y)});return r(p,y)&&g.unshift(p),g}var u=null;function v(){u=document.activeElement}function d(){u=null}function h(){if(u)try{u.focus()}catch(p){}}function m(p,y){if(y.keyCode===9){var g=s(p),I=g[y.shiftKey?0:g.length-1],b=I===document.activeElement||p===document.activeElement;if(b){var E=g[y.shiftKey?g.length-1:0];E.focus(),y.preventDefault()}}}},5110:function(c,l){"use strict";l.Z=function(e){if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){var o=e.getBBox(),a=o.width,r=o.height;if(a||r)return!0}if(e.getBoundingClientRect){var s=e.getBoundingClientRect(),u=s.width,v=s.height;if(u||v)return!0}}return!1}},27571:function(c,l,e){"use strict";e.d(l,{A:function(){return r}});function o(s){var u;return s==null||(u=s.getRootNode)===null||u===void 0?void 0:u.call(s)}function a(s){return o(s)instanceof ShadowRoot}function r(s){return a(s)?o(s):null}},15105:function(c,l){"use strict";var e={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(a){var r=a.keyCode;if(a.altKey&&!a.ctrlKey||a.metaKey||r>=e.F1&&r<=e.F12)return!1;switch(r){case e.ALT:case e.CAPS_LOCK:case e.CONTEXT_MENU:case e.CTRL:case e.DOWN:case e.END:case e.ESC:case e.HOME:case e.INSERT:case e.LEFT:case e.MAC_FF_META:case e.META:case e.NUMLOCK:case e.NUM_CENTER:case e.PAGE_DOWN:case e.PAGE_UP:case e.PAUSE:case e.PRINT_SCREEN:case e.RIGHT:case e.SHIFT:case e.UP:case e.WIN_KEY:case e.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(a){if(a>=e.ZERO&&a<=e.NINE||a>=e.NUM_ZERO&&a<=e.NUM_MULTIPLY||a>=e.A&&a<=e.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&a===0)return!0;switch(a){case e.SPACE:case e.QUESTION_MARK:case e.NUM_PLUS:case e.NUM_MINUS:case e.NUM_PERIOD:case e.NUM_DIVISION:case e.SEMICOLON:case e.DASH:case e.EQUALS:case e.COMMA:case e.PERIOD:case e.SLASH:case e.APOSTROPHE:case e.SINGLE_QUOTE:case e.OPEN_SQUARE_BRACKET:case e.BACKSLASH:case e.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};l.Z=e},74204:function(c,l,e){"use strict";e.d(l,{Z:function(){return a},o:function(){return s}});var o;function a(u){if(typeof document=="undefined")return 0;if(u||o===void 0){var v=document.createElement("div");v.style.width="100%",v.style.height="200px";var d=document.createElement("div"),h=d.style;h.position="absolute",h.top="0",h.left="0",h.pointerEvents="none",h.visibility="hidden",h.width="200px",h.height="150px",h.overflow="hidden",d.appendChild(v),document.body.appendChild(d);var m=v.offsetWidth;d.style.overflow="scroll";var p=v.offsetWidth;m===p&&(p=d.clientWidth),document.body.removeChild(d),o=m-p}return o}function r(u){var v=u.match(/^(.*)px$/),d=Number(v==null?void 0:v[1]);return Number.isNaN(d)?a():d}function s(u){if(typeof document=="undefined"||!u||!(u instanceof Element))return{width:0,height:0};var v=getComputedStyle(u,"::-webkit-scrollbar"),d=v.width,h=v.height;return{width:r(d),height:r(h)}}},66680:function(c,l,e){"use strict";e.d(l,{Z:function(){return a}});var o=e(67294);function a(r){var s=o.useRef();s.current=r;var u=o.useCallback(function(){for(var v,d=arguments.length,h=new Array(d),m=0;m<d;m++)h[m]=arguments[m];return(v=s.current)===null||v===void 0?void 0:v.call.apply(v,[s].concat(h))},[]);return u}},7028:function(c,l,e){"use strict";var o;e.d(l,{Z:function(){return h}});var a=e(97685),r=e(1413),s=e(67294);function u(){var m=(0,r.Z)({},o||(o=e.t(s,2)));return m.useId}var v=0;function d(){}function h(m){var p=s.useState("ssr-id"),y=(0,a.Z)(p,2),g=y[0],I=y[1],b=u(),E=b==null?void 0:b();return s.useEffect(function(){if(!b){var R=v;v+=1,I("rc_unique_".concat(R))}},[]),m||E||g}},8410:function(c,l,e){"use strict";e.d(l,{o:function(){return u}});var o=e(67294),a=e(98924),r=(0,a.Z)()?o.useLayoutEffect:o.useEffect,s=function(d,h){var m=o.useRef(!0);r(function(){return d(m.current)},h),r(function(){return m.current=!1,function(){m.current=!0}},[])},u=function(d,h){s(function(m){if(!m)return d()},h)};l.Z=s},56982:function(c,l,e){"use strict";e.d(l,{Z:function(){return a}});var o=e(67294);function a(r,s,u){var v=o.useRef({});return(!("value"in v.current)||u(v.current.condition,s))&&(v.current.value=r(),v.current.condition=s),v.current.value}},21770:function(c,l,e){"use strict";e.d(l,{Z:function(){return v}});var o=e(97685),a=e(66680),r=e(8410),s=e(30470);function u(d){return d!==void 0}function v(d,h){var m=h||{},p=m.defaultValue,y=m.value,g=m.onChange,I=m.postState,b=(0,s.Z)(function(){return u(y)?y:u(p)?typeof p=="function"?p():p:typeof d=="function"?d():d}),E=(0,o.Z)(b,2),R=E[0],A=E[1],N=y!==void 0?y:R,w=I?I(N):N,B=(0,a.Z)(g),C=(0,s.Z)([N]),L=(0,o.Z)(C,2),Z=L[0],te=L[1];(0,r.o)(function(){var _=Z[0];R!==_&&B(R,_)},[Z]),(0,r.o)(function(){u(y)||A(y)},[y]);var ee=(0,a.Z)(function(_,de){A(_,de),te([N],de)});return[w,ee]}},30470:function(c,l,e){"use strict";e.d(l,{Z:function(){return r}});var o=e(97685),a=e(67294);function r(s){var u=a.useRef(!1),v=a.useState(s),d=(0,o.Z)(v,2),h=d[0],m=d[1];a.useEffect(function(){return u.current=!1,function(){u.current=!0}},[]);function p(y,g){g&&u.current||m(y)}return[h,p]}},56790:function(c,l,e){"use strict";e.d(l,{zX:function(){return o.Z}});var o=e(66680),a=e(21770),r=e(42550),s=e(8880),u=e(80334)},91881:function(c,l,e){"use strict";var o=e(71002),a=e(80334);function r(s,u){var v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,d=new Set;function h(m,p){var y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,g=d.has(m);if((0,a.ZP)(!g,"Warning: There may be circular references"),g)return!1;if(m===p)return!0;if(v&&y>1)return!1;d.add(m);var I=y+1;if(Array.isArray(m)){if(!Array.isArray(p)||m.length!==p.length)return!1;for(var b=0;b<m.length;b++)if(!h(m[b],p[b],I))return!1;return!0}if(m&&p&&(0,o.Z)(m)==="object"&&(0,o.Z)(p)==="object"){var E=Object.keys(m);return E.length!==Object.keys(p).length?!1:E.every(function(R){return h(m[R],p[R],I)})}return!1}return h(s,u)}l.Z=r},31131:function(c,l){"use strict";l.Z=function(){if(typeof navigator=="undefined"||typeof window=="undefined")return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e==null?void 0:e.substr(0,4))}},98423:function(c,l,e){"use strict";e.d(l,{Z:function(){return a}});var o=e(1413);function a(r,s){var u=(0,o.Z)({},r);return Array.isArray(s)&&s.forEach(function(v){delete u[v]}),u}},75164:function(c,l){"use strict";var e=function(d){return+setTimeout(d,16)},o=function(d){return clearTimeout(d)};typeof window!="undefined"&&"requestAnimationFrame"in window&&(e=function(d){return window.requestAnimationFrame(d)},o=function(d){return window.cancelAnimationFrame(d)});var a=0,r=new Map;function s(v){r.delete(v)}var u=function(d){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;a+=1;var m=a;function p(y){if(y===0)s(m),d();else{var g=e(function(){p(y-1)});r.set(m,g)}}return p(h),m};u.cancel=function(v){var d=r.get(v);return s(d),o(d)},l.Z=u},42550:function(c,l,e){"use strict";e.d(l,{Yr:function(){return h},mH:function(){return u},sQ:function(){return v},x1:function(){return d}});var o=e(71002),a=e(67294),r=e(59864),s=e(56982);function u(p,y){typeof p=="function"?p(y):(0,o.Z)(p)==="object"&&p&&"current"in p&&(p.current=y)}function v(){for(var p=arguments.length,y=new Array(p),g=0;g<p;g++)y[g]=arguments[g];var I=y.filter(function(b){return b});return I.length<=1?I[0]:function(b){y.forEach(function(E){u(E,b)})}}function d(){for(var p=arguments.length,y=new Array(p),g=0;g<p;g++)y[g]=arguments[g];return(0,s.Z)(function(){return v.apply(void 0,y)},y,function(I,b){return I.length!==b.length||I.every(function(E,R){return E!==b[R]})})}function h(p){var y,g,I=(0,r.isMemo)(p)?p.type.type:p.type;return!(typeof I=="function"&&!((y=I.prototype)!==null&&y!==void 0&&y.render)||typeof p=="function"&&!((g=p.prototype)!==null&&g!==void 0&&g.render))}function m(p){return!isValidElement(p)||isFragment(p)?!1:h(p)}},88306:function(c,l,e){"use strict";e.d(l,{Z:function(){return o}});function o(a,r){for(var s=a,u=0;u<r.length;u+=1){if(s==null)return;s=s[r[u]]}return s}},8880:function(c,l,e){"use strict";e.d(l,{T:function(){return y},Z:function(){return d}});var o=e(71002),a=e(1413),r=e(74902),s=e(84506),u=e(88306);function v(g,I,b,E){if(!I.length)return b;var R=(0,s.Z)(I),A=R[0],N=R.slice(1),w;return!g&&typeof A=="number"?w=[]:Array.isArray(g)?w=(0,r.Z)(g):w=(0,a.Z)({},g),E&&b===void 0&&N.length===1?delete w[A][N[0]]:w[A]=v(w[A],N,b,E),w}function d(g,I,b){var E=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return I.length&&E&&b===void 0&&!(0,u.Z)(g,I.slice(0,-1))?g:v(g,I,b,E)}function h(g){return(0,o.Z)(g)==="object"&&g!==null&&Object.getPrototypeOf(g)===Object.prototype}function m(g){return Array.isArray(g)?[]:{}}var p=typeof Reflect=="undefined"?Object.keys:Reflect.ownKeys;function y(){for(var g=arguments.length,I=new Array(g),b=0;b<g;b++)I[b]=arguments[b];var E=m(I[0]);return I.forEach(function(R){function A(N,w){var B=new Set(w),C=(0,u.Z)(R,N),L=Array.isArray(C);if(L||h(C)){if(!B.has(C)){B.add(C);var Z=(0,u.Z)(E,N);L?E=d(E,N,[]):(!Z||(0,o.Z)(Z)!=="object")&&(E=d(E,N,m(C))),p(C).forEach(function(te){A([].concat((0,r.Z)(N),[te]),B)})}}else E=d(E,N,C)}A([])}),E}},80334:function(c,l,e){"use strict";e.d(l,{ET:function(){return m},Kp:function(){return s}});var o={},a=[],r=function(y){a.push(y)};function s(p,y){if(!1)var g}function u(p,y){if(!1)var g}function v(){o={}}function d(p,y,g){!y&&!o[g]&&(p(!1,g),o[g]=!0)}function h(p,y){d(s,p,y)}function m(p,y){d(u,p,y)}h.preMessage=r,h.resetWarned=v,h.noteOnce=m,l.ZP=h},74300:function(c,l,e){"use strict";function o(L){"@babel/helpers - typeof";return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Z){return typeof Z}:function(Z){return Z&&typeof Symbol=="function"&&Z.constructor===Symbol&&Z!==Symbol.prototype?"symbol":typeof Z},o(L)}Object.defineProperty(l,"__esModule",{value:!0}),l.CopyToClipboard=void 0;var a=u(e(67294)),r=u(e(20640)),s=["text","onCopy","options","children"];function u(L){return L&&L.__esModule?L:{default:L}}function v(L,Z){var te=Object.keys(L);if(Object.getOwnPropertySymbols){var ee=Object.getOwnPropertySymbols(L);Z&&(ee=ee.filter(function(_){return Object.getOwnPropertyDescriptor(L,_).enumerable})),te.push.apply(te,ee)}return te}function d(L){for(var Z=1;Z<arguments.length;Z++){var te=arguments[Z]!=null?arguments[Z]:{};Z%2?v(Object(te),!0).forEach(function(ee){B(L,ee,te[ee])}):Object.getOwnPropertyDescriptors?Object.defineProperties(L,Object.getOwnPropertyDescriptors(te)):v(Object(te)).forEach(function(ee){Object.defineProperty(L,ee,Object.getOwnPropertyDescriptor(te,ee))})}return L}function h(L,Z){if(L==null)return{};var te=m(L,Z),ee,_;if(Object.getOwnPropertySymbols){var de=Object.getOwnPropertySymbols(L);for(_=0;_<de.length;_++)ee=de[_],!(Z.indexOf(ee)>=0)&&Object.prototype.propertyIsEnumerable.call(L,ee)&&(te[ee]=L[ee])}return te}function m(L,Z){if(L==null)return{};var te={},ee=Object.keys(L),_,de;for(de=0;de<ee.length;de++)_=ee[de],!(Z.indexOf(_)>=0)&&(te[_]=L[_]);return te}function p(L,Z){if(!(L instanceof Z))throw new TypeError("Cannot call a class as a function")}function y(L,Z){for(var te=0;te<Z.length;te++){var ee=Z[te];ee.enumerable=ee.enumerable||!1,ee.configurable=!0,"value"in ee&&(ee.writable=!0),Object.defineProperty(L,ee.key,ee)}}function g(L,Z,te){return Z&&y(L.prototype,Z),te&&y(L,te),Object.defineProperty(L,"prototype",{writable:!1}),L}function I(L,Z){if(typeof Z!="function"&&Z!==null)throw new TypeError("Super expression must either be null or a function");L.prototype=Object.create(Z&&Z.prototype,{constructor:{value:L,writable:!0,configurable:!0}}),Object.defineProperty(L,"prototype",{writable:!1}),Z&&b(L,Z)}function b(L,Z){return b=Object.setPrototypeOf||function(ee,_){return ee.__proto__=_,ee},b(L,Z)}function E(L){var Z=N();return function(){var ee=w(L),_;if(Z){var de=w(this).constructor;_=Reflect.construct(ee,arguments,de)}else _=ee.apply(this,arguments);return R(this,_)}}function R(L,Z){if(Z&&(o(Z)==="object"||typeof Z=="function"))return Z;if(Z!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return A(L)}function A(L){if(L===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return L}function N(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(L){return!1}}function w(L){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(te){return te.__proto__||Object.getPrototypeOf(te)},w(L)}function B(L,Z,te){return Z in L?Object.defineProperty(L,Z,{value:te,enumerable:!0,configurable:!0,writable:!0}):L[Z]=te,L}var C=function(L){I(te,L);var Z=E(te);function te(){var ee;p(this,te);for(var _=arguments.length,de=new Array(_),be=0;be<_;be++)de[be]=arguments[be];return ee=Z.call.apply(Z,[this].concat(de)),B(A(ee),"onClick",function(Te){var ie=ee.props,Q=ie.text,Y=ie.onCopy,k=ie.children,K=ie.options,re=a.default.Children.only(k),T=(0,r.default)(Q,K);Y&&Y(Q,T),re&&re.props&&typeof re.props.onClick=="function"&&re.props.onClick(Te)}),ee}return g(te,[{key:"render",value:function(){var _=this.props,de=_.text,be=_.onCopy,Te=_.options,ie=_.children,Q=h(_,s),Y=a.default.Children.only(ie);return a.default.cloneElement(Y,d(d({},Q),{},{onClick:this.onClick}))}}]),te}(a.default.PureComponent);l.CopyToClipboard=C,B(C,"defaultProps",{onCopy:void 0,options:void 0})},74855:function(c,l,e){"use strict";var o=e(74300),a=o.CopyToClipboard;a.CopyToClipboard=a,c.exports=a},64448:function(c,l,e){"use strict";var o=e(67294),a=e(63840);function r(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,u={};function v(t,n){d(t,n),d(t+"Capture",n)}function d(t,n){for(u[t]=n,t=0;t<n.length;t++)s.add(n[t])}var h=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},g={};function I(t){return m.call(g,t)?!0:m.call(y,t)?!1:p.test(t)?g[t]=!0:(y[t]=!0,!1)}function b(t,n,i,f){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return f?!1:i!==null?!i.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,n,i,f){if(n===null||typeof n=="undefined"||b(t,n,i,f))return!0;if(f)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function R(t,n,i,f,S,O,W){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=f,this.attributeNamespace=S,this.mustUseProperty=i,this.propertyName=t,this.type=n,this.sanitizeURL=O,this.removeEmptyString=W}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){A[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];A[n]=new R(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){A[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){A[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){A[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){A[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){A[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){A[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){A[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var N=/[\-:]([a-z])/g;function w(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(N,w);A[n]=new R(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(N,w);A[n]=new R(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(N,w);A[n]=new R(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){A[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),A.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){A[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function B(t,n,i,f){var S=A.hasOwnProperty(n)?A[n]:null;(S!==null?S.type!==0:f||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(E(n,i,S,f)&&(i=null),f||S===null?I(n)&&(i===null?t.removeAttribute(n):t.setAttribute(n,""+i)):S.mustUseProperty?t[S.propertyName]=i===null?S.type===3?!1:"":i:(n=S.attributeName,f=S.attributeNamespace,i===null?t.removeAttribute(n):(S=S.type,i=S===3||S===4&&i===!0?"":""+i,f?t.setAttributeNS(f,n,i):t.setAttribute(n,i))))}var C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),Z=Symbol.for("react.portal"),te=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),de=Symbol.for("react.provider"),be=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),k=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var K=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var re=Symbol.iterator;function T(t){return t===null||typeof t!="object"?null:(t=re&&t[re]||t["@@iterator"],typeof t=="function"?t:null)}var D=Object.assign,V;function le(t){if(V===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);V=n&&n[1]||""}return`
`+V+t}var J=!1;function P(t,n){if(!t||J)return"";J=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(Qe){var f=Qe}Reflect.construct(t,[],n)}else{try{n.call()}catch(Qe){f=Qe}t.call(n.prototype)}else{try{throw Error()}catch(Qe){f=Qe}t()}}catch(Qe){if(Qe&&f&&typeof Qe.stack=="string"){for(var S=Qe.stack.split(`
`),O=f.stack.split(`
`),W=S.length-1,ge=O.length-1;1<=W&&0<=ge&&S[W]!==O[ge];)ge--;for(;1<=W&&0<=ge;W--,ge--)if(S[W]!==O[ge]){if(W!==1||ge!==1)do if(W--,ge--,0>ge||S[W]!==O[ge]){var Ae=`
`+S[W].replace(" at new "," at ");return t.displayName&&Ae.includes("<anonymous>")&&(Ae=Ae.replace("<anonymous>",t.displayName)),Ae}while(1<=W&&0<=ge);break}}}finally{J=!1,Error.prepareStackTrace=i}return(t=t?t.displayName||t.name:"")?le(t):""}function $(t){switch(t.tag){case 5:return le(t.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return t=P(t.type,!1),t;case 11:return t=P(t.type.render,!1),t;case 1:return t=P(t.type,!0),t;default:return""}}function H(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case te:return"Fragment";case Z:return"Portal";case _:return"Profiler";case ee:return"StrictMode";case ie:return"Suspense";case Q:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case be:return(t.displayName||"Context")+".Consumer";case de:return(t._context.displayName||"Context")+".Provider";case Te:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Y:return n=t.displayName||null,n!==null?n:H(t.type)||"Memo";case k:n=t._payload,t=t._init;try{return H(t(n))}catch(i){}}return null}function q(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(n);case 8:return n===ee?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ae(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ce(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Le(t){var n=Ce(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),f=""+t[n];if(!t.hasOwnProperty(n)&&typeof i!="undefined"&&typeof i.get=="function"&&typeof i.set=="function"){var S=i.get,O=i.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return S.call(this)},set:function(W){f=""+W,O.call(this,W)}}),Object.defineProperty(t,n,{enumerable:i.enumerable}),{getValue:function(){return f},setValue:function(W){f=""+W},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Xe(t){t._valueTracker||(t._valueTracker=Le(t))}function Ze(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),f="";return t&&(f=Ce(t)?t.checked?"true":"false":t.value),t=f,t!==i?(n.setValue(t),!0):!1}function je(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch(n){return t.body}}function Ye(t,n){var i=n.checked;return D({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i!=null?i:t._wrapperState.initialChecked})}function oe(t,n){var i=n.defaultValue==null?"":n.defaultValue,f=n.checked!=null?n.checked:n.defaultChecked;i=ae(n.value!=null?n.value:i),t._wrapperState={initialChecked:f,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function fe(t,n){n=n.checked,n!=null&&B(t,"checked",n,!1)}function pe(t,n){fe(t,n);var i=ae(n.value),f=n.type;if(i!=null)f==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+i):t.value!==""+i&&(t.value=""+i);else if(f==="submit"||f==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?Pe(t,n.type,i):n.hasOwnProperty("defaultValue")&&Pe(t,n.type,ae(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function me(t,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var f=n.type;if(!(f!=="submit"&&f!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,i||n===t.value||(t.value=n),t.defaultValue=n}i=t.name,i!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,i!==""&&(t.name=i)}function Pe(t,n,i){(n!=="number"||je(t.ownerDocument)!==t)&&(i==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+i&&(t.defaultValue=""+i))}var se=Array.isArray;function ve(t,n,i,f){if(t=t.options,n){n={};for(var S=0;S<i.length;S++)n["$"+i[S]]=!0;for(i=0;i<t.length;i++)S=n.hasOwnProperty("$"+t[i].value),t[i].selected!==S&&(t[i].selected=S),S&&f&&(t[i].defaultSelected=!0)}else{for(i=""+ae(i),n=null,S=0;S<t.length;S++){if(t[S].value===i){t[S].selected=!0,f&&(t[S].defaultSelected=!0);return}n!==null||t[S].disabled||(n=t[S])}n!==null&&(n.selected=!0)}}function ye(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(r(91));return D({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function De(t,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(r(92));if(se(i)){if(1<i.length)throw Error(r(93));i=i[0]}n=i}n==null&&(n=""),i=n}t._wrapperState={initialValue:ae(i)}}function ze(t,n){var i=ae(n.value),f=ae(n.defaultValue);i!=null&&(i=""+i,i!==t.value&&(t.value=i),n.defaultValue==null&&t.defaultValue!==i&&(t.defaultValue=i)),f!=null&&(t.defaultValue=""+f)}function bt(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function at(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lt(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?at(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var St,Bt=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(n,i,f,S){MSApp.execUnsafeLocalFunction(function(){return t(n,i,f,S)})}:t}(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(St=St||document.createElement("div"),St.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=St.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function Ot(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var Wt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},x=["Webkit","ms","Moz","O"];Object.keys(Wt).forEach(function(t){x.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),Wt[n]=Wt[t]})});function U(t,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||Wt.hasOwnProperty(t)&&Wt[t]?(""+n).trim():n+"px"}function ne(t,n){t=t.style;for(var i in n)if(n.hasOwnProperty(i)){var f=i.indexOf("--")===0,S=U(i,n[i],f);i==="float"&&(i="cssFloat"),f?t.setProperty(i,S):t[i]=S}}var ue=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ie(t,n){if(n){if(ue[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(r(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(r(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(r(61))}if(n.style!=null&&typeof n.style!="object")throw Error(r(62))}}function Oe(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Se=null;function $e(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ve=null,Ge=null,vt=null;function he(t){if(t=gn(t)){if(typeof Ve!="function")throw Error(r(280));var n=t.stateNode;n&&(n=Ln(n),Ve(t.stateNode,t.type,n))}}function Be(t){Ge?vt?vt.push(t):vt=[t]:Ge=t}function Fe(){if(Ge){var t=Ge,n=vt;if(vt=Ge=null,he(t),n)for(t=0;t<n.length;t++)he(n[t])}}function Re(t,n){return t(n)}function Je(){}var Ue=!1;function It(t,n,i){if(Ue)return t(n,i);Ue=!0;try{return Re(t,n,i)}finally{Ue=!1,(Ge!==null||vt!==null)&&(Je(),Fe())}}function xt(t,n){var i=t.stateNode;if(i===null)return null;var f=Ln(i);if(f===null)return null;i=f[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(t=t.type,f=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!f;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(r(231,n,typeof i));return i}var Dt=!1;if(h)try{var En={};Object.defineProperty(En,"passive",{get:function(){Dt=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch(t){Dt=!1}function Xt(t,n,i,f,S,O,W,ge,Ae){var Qe=Array.prototype.slice.call(arguments,3);try{n.apply(i,Qe)}catch(gt){this.onError(gt)}}var Mn=!1,Wn=null,Ar=!1,Kr=null,jn={onError:function(t){Mn=!0,Wn=t}};function Bn(t,n,i,f,S,O,W,ge,Ae){Mn=!1,Wn=null,Xt.apply(jn,arguments)}function Gn(t,n,i,f,S,O,W,ge,Ae){if(Bn.apply(this,arguments),Mn){if(Mn){var Qe=Wn;Mn=!1,Wn=null}else throw Error(r(198));Ar||(Ar=!0,Kr=Qe)}}function pt(t){var n=t,i=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,n.flags&4098&&(i=n.return),t=n.return;while(t)}return n.tag===3?i:null}function st(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function mt(t){if(pt(t)!==t)throw Error(r(188))}function kt(t){var n=t.alternate;if(!n){if(n=pt(t),n===null)throw Error(r(188));return n!==t?null:t}for(var i=t,f=n;;){var S=i.return;if(S===null)break;var O=S.alternate;if(O===null){if(f=S.return,f!==null){i=f;continue}break}if(S.child===O.child){for(O=S.child;O;){if(O===i)return mt(S),t;if(O===f)return mt(S),n;O=O.sibling}throw Error(r(188))}if(i.return!==f.return)i=S,f=O;else{for(var W=!1,ge=S.child;ge;){if(ge===i){W=!0,i=S,f=O;break}if(ge===f){W=!0,f=S,i=O;break}ge=ge.sibling}if(!W){for(ge=O.child;ge;){if(ge===i){W=!0,i=O,f=S;break}if(ge===f){W=!0,f=O,i=S;break}ge=ge.sibling}if(!W)throw Error(r(189))}}if(i.alternate!==f)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?t:n}function qt(t){return t=kt(t),t!==null?zt(t):null}function zt(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=zt(t);if(n!==null)return n;t=t.sibling}return null}var Zn=a.unstable_scheduleCallback,bn=a.unstable_cancelCallback,qn=a.unstable_shouldYield,qr=a.unstable_requestPaint,Nn=a.unstable_now,ha=a.unstable_getCurrentPriorityLevel,wa=a.unstable_ImmediatePriority,Ua=a.unstable_UserBlockingPriority,ia=a.unstable_NormalPriority,Hn=a.unstable_LowPriority,Oo=a.unstable_IdlePriority,Qa=null,ua=null;function Zo(t){if(ua&&typeof ua.onCommitFiberRoot=="function")try{ua.onCommitFiberRoot(Qa,t,void 0,(t.current.flags&128)===128)}catch(n){}}var Vr=Math.clz32?Math.clz32:fr,fn=Math.log,wn=Math.LN2;function fr(t){return t>>>=0,t===0?32:31-(fn(t)/wn|0)|0}var ea=64,sa=4194304;function $o(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ea(t,n){var i=t.pendingLanes;if(i===0)return 0;var f=0,S=t.suspendedLanes,O=t.pingedLanes,W=i&268435455;if(W!==0){var ge=W&~S;ge!==0?f=$o(ge):(O&=W,O!==0&&(f=$o(O)))}else W=i&~S,W!==0?f=$o(W):O!==0&&(f=$o(O));if(f===0)return 0;if(n!==0&&n!==f&&!(n&S)&&(S=f&-f,O=n&-n,S>=O||S===16&&(O&4194240)!==0))return n;if(f&4&&(f|=i&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=f;0<n;)i=31-Vr(n),S=1<<i,f|=t[i],n&=~S;return f}function fi(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xo(t,n){for(var i=t.suspendedLanes,f=t.pingedLanes,S=t.expirationTimes,O=t.pendingLanes;0<O;){var W=31-Vr(O),ge=1<<W,Ae=S[W];Ae===-1?(!(ge&i)||ge&f)&&(S[W]=fi(ge,n)):Ae<=n&&(t.expiredLanes|=ge),O&=~ge}}function Ro(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Yr(){var t=ea;return ea<<=1,!(ea&4194240)&&(ea=64),t}function Tr(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function yr(t,n,i){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-Vr(n),t[n]=i}function la(t,n){var i=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var f=t.eventTimes;for(t=t.expirationTimes;0<i;){var S=31-Vr(i),O=1<<S;n[S]=0,f[S]=-1,t[S]=-1,i&=~O}}function oo(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var f=31-Vr(i),S=1<<f;S&n|t[f]&n&&(t[f]|=n),i&=~S}}var rr=0;function za(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ni,Ao,hu,Ji,vi,So=!1,Mo=[],io=null,uo=null,so=null,pi=new Map,wo=new Map,lo=[],_i="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mi(t,n){switch(t){case"focusin":case"focusout":io=null;break;case"dragenter":case"dragleave":uo=null;break;case"mouseover":case"mouseout":so=null;break;case"pointerover":case"pointerout":pi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(n.pointerId)}}function No(t,n,i,f,S,O){return t===null||t.nativeEvent!==O?(t={blockedOn:n,domEventName:i,eventSystemFlags:f,nativeEvent:O,targetContainers:[S]},n!==null&&(n=gn(n),n!==null&&Ao(n)),t):(t.eventSystemFlags|=f,n=t.targetContainers,S!==null&&n.indexOf(S)===-1&&n.push(S),t)}function Ai(t,n,i,f,S){switch(n){case"focusin":return io=No(io,t,n,i,f,S),!0;case"dragenter":return uo=No(uo,t,n,i,f,S),!0;case"mouseover":return so=No(so,t,n,i,f,S),!0;case"pointerover":var O=S.pointerId;return pi.set(O,No(pi.get(O)||null,t,n,i,f,S)),!0;case"gotpointercapture":return O=S.pointerId,wo.set(O,No(wo.get(O)||null,t,n,i,f,S)),!0}return!1}function Ho(t){var n=Mr(t.target);if(n!==null){var i=pt(n);if(i!==null){if(n=i.tag,n===13){if(n=st(i),n!==null){t.blockedOn=n,vi(t.priority,function(){hu(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Za(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=wi(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(i===null){i=t.nativeEvent;var f=new i.constructor(i.type,i);Se=f,i.target.dispatchEvent(f),Se=null}else return n=gn(i),n!==null&&Ao(n),t.blockedOn=i,!1;n.shift()}return!0}function Mi(t,n,i){Za(t)&&i.delete(n)}function wu(){So=!1,io!==null&&Za(io)&&(io=null),uo!==null&&Za(uo)&&(uo=null),so!==null&&Za(so)&&(so=null),pi.forEach(Mi),wo.forEach(Mi)}function hi(t,n){t.blockedOn===n&&(t.blockedOn=null,So||(So=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,wu)))}function ri(t){function n(S){return hi(S,t)}if(0<Mo.length){hi(Mo[0],t);for(var i=1;i<Mo.length;i++){var f=Mo[i];f.blockedOn===t&&(f.blockedOn=null)}}for(io!==null&&hi(io,t),uo!==null&&hi(uo,t),so!==null&&hi(so,t),pi.forEach(n),wo.forEach(n),i=0;i<lo.length;i++)f=lo[i],f.blockedOn===t&&(f.blockedOn=null);for(;0<lo.length&&(i=lo[0],i.blockedOn===null);)Ho(i),i.blockedOn===null&&lo.shift()}var Ko=C.ReactCurrentBatchConfig,yi=!0;function Nu(t,n,i,f){var S=rr,O=Ko.transition;Ko.transition=null;try{rr=1,gi(t,n,i,f)}finally{rr=S,Ko.transition=O}}function yu(t,n,i,f){var S=rr,O=Ko.transition;Ko.transition=null;try{rr=4,gi(t,n,i,f)}finally{rr=S,Ko.transition=O}}function gi(t,n,i,f){if(yi){var S=wi(t,n,i,f);if(S===null)on(t,n,f,Wo,i),mi(t,f);else if(Ai(S,t,n,i,f))f.stopPropagation();else if(mi(t,f),n&4&&-1<_i.indexOf(t)){for(;S!==null;){var O=gn(S);if(O!==null&&ni(O),O=wi(t,n,i,f),O===null&&on(t,n,f,Wo,i),O===S)break;S=O}S!==null&&f.stopPropagation()}else on(t,n,f,null,i)}}var Wo=null;function wi(t,n,i,f){if(Wo=null,t=$e(f),t=Mr(t),t!==null)if(n=pt(t),n===null)t=null;else if(i=n.tag,i===13){if(t=st(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return Wo=t,null}function Ni(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ha()){case wa:return 1;case Ua:return 4;case ia:case Hn:return 16;case Oo:return 536870912;default:return 16}default:return 16}}var ba=null,Go=null,Li=null;function qi(){if(Li)return Li;var t,n=Go,i=n.length,f,S="value"in ba?ba.value:ba.textContent,O=S.length;for(t=0;t<i&&n[t]===S[t];t++);var W=i-t;for(f=1;f<=W&&n[i-f]===S[O-f];f++);return Li=S.slice(t,1<f?1-f:void 0)}function Di(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Fi(){return!0}function eu(){return!1}function Na(t){function n(i,f,S,O,W){this._reactName=i,this._targetInst=S,this.type=f,this.nativeEvent=O,this.target=W,this.currentTarget=null;for(var ge in t)t.hasOwnProperty(ge)&&(i=t[ge],this[ge]=i?i(O):O[ge]);return this.isDefaultPrevented=(O.defaultPrevented!=null?O.defaultPrevented:O.returnValue===!1)?Fi:eu,this.isPropagationStopped=eu,this}return D(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Fi)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Fi)},persist:function(){},isPersistent:Fi}),n}var ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vo=Na(ai),oi=D({},ai,{view:0,detail:0}),ii=Na(oi),Ii,Bi,Eo,ki=D({},oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_e,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Eo&&(Eo&&t.type==="mousemove"?(Ii=t.screenX-Eo.screenX,Bi=t.screenY-Eo.screenY):Bi=Ii=0,Eo=t),Ii)},movementY:function(t){return"movementY"in t?t.movementY:Bi}}),gu=Na(ki),ji=D({},ki,{dataTransfer:0}),Lu=Na(ji),Du=D({},oi,{relatedTarget:0}),Ui=Na(Du),zi=D({},ai,{animationName:0,elapsedTime:0,pseudoElement:0}),Fu=Na(zi),Zi=D({},ai,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Iu=Na(Zi),M=D({},ai,{data:0}),z=Na(M),j={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ce={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},He={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tt(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=He[t])?!!n[t]:!1}function _e(){return tt}var nt=D({},oi,{key:function(t){if(t.key){var n=j[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Di(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ce[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_e,charCode:function(t){return t.type==="keypress"?Di(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Di(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),it=Na(nt),ut=D({},ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ft=Na(ut),hn=D({},oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_e}),sn=Na(hn),Jt=D({},ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),cn=Na(Jt),Qn=D({},ki,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$n=Na(Qn),lr=[9,13,27,32],Dr=h&&"CompositionEvent"in window,gr=null;h&&"documentMode"in document&&(gr=document.documentMode);var Lo=h&&"TextEvent"in window&&!gr,La=h&&(!Dr||gr&&8<gr&&11>=gr),$a=String.fromCharCode(32),rn=!1;function Ta(t,n){switch(t){case"keyup":return lr.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Da(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pa=!1;function ui(t,n){switch(t){case"compositionend":return Da(n);case"keypress":return n.which!==32?null:(rn=!0,$a);case"textInput":return t=n.data,t===$a&&rn?null:t;default:return null}}function $i(t,n){if(Pa)return t==="compositionend"||!Dr&&Ta(t,n)?(t=qi(),Li=Go=ba=null,Pa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return La&&n.locale!=="ko"?null:n.data;default:return null}}var xi={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Si(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!xi[t.type]:n==="textarea"}function Ei(t,n,i,f){Be(f),n=Nt(n,"onChange"),0<n.length&&(i=new Vo("onChange","change",null,i,f),t.push({event:i,listeners:n}))}var co=null,Do=null;function Ju(t){Mt(t,0)}function Fo(t){var n=Pr(t);if(Ze(n))return t}function tu(t,n){if(t==="change")return n}var nu=!1;if(h){var xu;if(h){var Su="oninput"in document;if(!Su){var Bu=document.createElement("div");Bu.setAttribute("oninput","return;"),Su=typeof Bu.oninput=="function"}xu=Su}else xu=!1;nu=xu&&(!document.documentMode||9<document.documentMode)}function ku(){co&&(co.detachEvent("onpropertychange",ju),Do=co=null)}function ju(t){if(t.propertyName==="value"&&Fo(Do)){var n=[];Ei(n,Do,t,$e(t)),It(Ju,n)}}function _u(t,n,i){t==="focusin"?(ku(),co=n,Do=i,co.attachEvent("onpropertychange",ju)):t==="focusout"&&ku()}function Uu(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fo(Do)}function Eu(t,n){if(t==="click")return Fo(n)}function qu(t,n){if(t==="input"||t==="change")return Fo(n)}function es(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xa=typeof Object.is=="function"?Object.is:es;function Bo(t,n){if(Xa(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),f=Object.keys(n);if(i.length!==f.length)return!1;for(f=0;f<i.length;f++){var S=i[f];if(!m.call(n,S)||!Xa(t[S],n[S]))return!1}return!0}function zu(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zu(t,n){var i=zu(t);t=0;for(var f;i;){if(i.nodeType===3){if(f=t+i.textContent.length,t<=n&&f>=n)return{node:i,offset:n-t};t=f}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=zu(i)}}function bi(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?bi(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function $u(){for(var t=window,n=je();n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch(f){i=!1}if(i)t=n.contentWindow;else break;n=je(t.document)}return n}function bu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function ts(t){var n=$u(),i=t.focusedElem,f=t.selectionRange;if(n!==i&&i&&i.ownerDocument&&bi(i.ownerDocument.documentElement,i)){if(f!==null&&bu(i)){if(n=f.start,t=f.end,t===void 0&&(t=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(t,i.value.length);else if(t=(n=i.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var S=i.textContent.length,O=Math.min(f.start,S);f=f.end===void 0?O:Math.min(f.end,S),!t.extend&&O>f&&(S=f,f=O,O=S),S=Zu(i,O);var W=Zu(i,f);S&&W&&(t.rangeCount!==1||t.anchorNode!==S.node||t.anchorOffset!==S.offset||t.focusNode!==W.node||t.focusOffset!==W.offset)&&(n=n.createRange(),n.setStart(S.node,S.offset),t.removeAllRanges(),O>f?(t.addRange(n),t.extend(W.node,W.offset)):(n.setEnd(W.node,W.offset),t.addRange(n)))}}for(n=[],t=i;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)t=n[i],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Tu=h&&"documentMode"in document&&11>=document.documentMode,ft=null,ot=null,Zt=null,xn=!1;function Xn(t,n,i){var f=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;xn||ft==null||ft!==je(f)||(f=ft,"selectionStart"in f&&bu(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Zt&&Bo(Zt,f)||(Zt=f,f=Nt(ot,"onSelect"),0<f.length&&(n=new Vo("onSelect","select",null,n,i),t.push({event:n,listeners:f}),n.target=ft)))}function Sr(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var Ir={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionend:Sr("Transition","TransitionEnd")},F={},G={};h&&(G=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function X(t){if(F[t])return F[t];if(!Ir[t])return t;var n=Ir[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in G)return F[t]=n[i];return t}var Ee=X("animationend"),xe=X("animationiteration"),Me=X("animationstart"),we=X("transitionend"),Ke=new Map,qe="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rt(t,n){Ke.set(t,n),v(n,[t])}for(var Pt=0;Pt<qe.length;Pt++){var et=qe[Pt],Tt=et.toLowerCase(),ht=et[0].toUpperCase()+et.slice(1);rt(Tt,"on"+ht)}rt(Ee,"onAnimationEnd"),rt(xe,"onAnimationIteration"),rt(Me,"onAnimationStart"),rt("dblclick","onDoubleClick"),rt("focusin","onFocus"),rt("focusout","onBlur"),rt(we,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),v("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),v("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),v("onBeforeInput",["compositionend","keypress","textInput","paste"]),v("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ct="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lt=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ct));function Gt(t,n,i){var f=t.type||"unknown-event";t.currentTarget=i,Gn(f,n,void 0,t),t.currentTarget=null}function Mt(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var f=t[i],S=f.event;f=f.listeners;e:{var O=void 0;if(n)for(var W=f.length-1;0<=W;W--){var ge=f[W],Ae=ge.instance,Qe=ge.currentTarget;if(ge=ge.listener,Ae!==O&&S.isPropagationStopped())break e;Gt(S,ge,Qe),O=Ae}else for(W=0;W<f.length;W++){if(ge=f[W],Ae=ge.instance,Qe=ge.currentTarget,ge=ge.listener,Ae!==O&&S.isPropagationStopped())break e;Gt(S,ge,Qe),O=Ae}}}if(Ar)throw t=Kr,Ar=!1,Kr=null,t}function dt(t,n){var i=n[Wr];i===void 0&&(i=n[Wr]=new Set);var f=t+"__bubble";i.has(f)||(Ht(n,t,2,!1),i.add(f))}function At(t,n,i){var f=0;n&&(f|=4),Ht(i,t,f,n)}var ct="_reactListening"+Math.random().toString(36).slice(2);function jt(t){if(!t[ct]){t[ct]=!0,s.forEach(function(i){i!=="selectionchange"&&(Lt.has(i)||At(i,!1,t),At(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ct]||(n[ct]=!0,At("selectionchange",!1,n))}}function Ht(t,n,i,f){switch(Ni(n)){case 1:var S=Nu;break;case 4:S=yu;break;default:S=gi}i=S.bind(null,n,i,t),S=void 0,!Dt||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(S=!0),f?S!==void 0?t.addEventListener(n,i,{capture:!0,passive:S}):t.addEventListener(n,i,!0):S!==void 0?t.addEventListener(n,i,{passive:S}):t.addEventListener(n,i,!1)}function on(t,n,i,f,S){var O=f;if(!(n&1)&&!(n&2)&&f!==null)e:for(;;){if(f===null)return;var W=f.tag;if(W===3||W===4){var ge=f.stateNode.containerInfo;if(ge===S||ge.nodeType===8&&ge.parentNode===S)break;if(W===4)for(W=f.return;W!==null;){var Ae=W.tag;if((Ae===3||Ae===4)&&(Ae=W.stateNode.containerInfo,Ae===S||Ae.nodeType===8&&Ae.parentNode===S))return;W=W.return}for(;ge!==null;){if(W=Mr(ge),W===null)return;if(Ae=W.tag,Ae===5||Ae===6){f=O=W;continue e}ge=ge.parentNode}}f=f.return}It(function(){var Qe=O,gt=$e(i),Et=[];e:{var yt=Ke.get(t);if(yt!==void 0){var $t=Vo,_t=t;switch(t){case"keypress":if(Di(i)===0)break e;case"keydown":case"keyup":$t=it;break;case"focusin":_t="focus",$t=Ui;break;case"focusout":_t="blur",$t=Ui;break;case"beforeblur":case"afterblur":$t=Ui;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$t=gu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$t=Lu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$t=sn;break;case Ee:case xe:case Me:$t=Fu;break;case we:$t=cn;break;case"scroll":$t=ii;break;case"wheel":$t=$n;break;case"copy":case"cut":case"paste":$t=Iu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$t=Ft}var tn=(n&4)!==0,ma=!tn&&t==="scroll",ke=tn?yt!==null?yt+"Capture":null:yt;tn=[];for(var Ne=Qe,We;Ne!==null;){We=Ne;var Rt=We.stateNode;if(We.tag===5&&Rt!==null&&(We=Rt,ke!==null&&(Rt=xt(Ne,ke),Rt!=null&&tn.push(Ut(Ne,Rt,We)))),ma)break;Ne=Ne.return}0<tn.length&&(yt=new $t(yt,_t,null,i,gt),Et.push({event:yt,listeners:tn}))}}if(!(n&7)){e:{if(yt=t==="mouseover"||t==="pointerover",$t=t==="mouseout"||t==="pointerout",yt&&i!==Se&&(_t=i.relatedTarget||i.fromElement)&&(Mr(_t)||_t[_n]))break e;if(($t||yt)&&(yt=gt.window===gt?gt:(yt=gt.ownerDocument)?yt.defaultView||yt.parentWindow:window,$t?(_t=i.relatedTarget||i.toElement,$t=Qe,_t=_t?Mr(_t):null,_t!==null&&(ma=pt(_t),_t!==ma||_t.tag!==5&&_t.tag!==6)&&(_t=null)):($t=null,_t=Qe),$t!==_t)){if(tn=gu,Rt="onMouseLeave",ke="onMouseEnter",Ne="mouse",(t==="pointerout"||t==="pointerover")&&(tn=Ft,Rt="onPointerLeave",ke="onPointerEnter",Ne="pointer"),ma=$t==null?yt:Pr($t),We=_t==null?yt:Pr(_t),yt=new tn(Rt,Ne+"leave",$t,i,gt),yt.target=ma,yt.relatedTarget=We,Rt=null,Mr(gt)===Qe&&(tn=new tn(ke,Ne+"enter",_t,i,gt),tn.target=We,tn.relatedTarget=ma,Rt=tn),ma=Rt,$t&&_t)t:{for(tn=$t,ke=_t,Ne=0,We=tn;We;We=wt(We))Ne++;for(We=0,Rt=ke;Rt;Rt=wt(Rt))We++;for(;0<Ne-We;)tn=wt(tn),Ne--;for(;0<We-Ne;)ke=wt(ke),We--;for(;Ne--;){if(tn===ke||ke!==null&&tn===ke.alternate)break t;tn=wt(tn),ke=wt(ke)}tn=null}else tn=null;$t!==null&&nn(Et,yt,$t,tn,!1),_t!==null&&ma!==null&&nn(Et,ma,_t,tn,!0)}}e:{if(yt=Qe?Pr(Qe):window,$t=yt.nodeName&&yt.nodeName.toLowerCase(),$t==="select"||$t==="input"&&yt.type==="file")var an=tu;else if(Si(yt))if(nu)an=qu;else{an=Uu;var pn=_u}else($t=yt.nodeName)&&$t.toLowerCase()==="input"&&(yt.type==="checkbox"||yt.type==="radio")&&(an=Eu);if(an&&(an=an(t,Qe))){Ei(Et,an,i,gt);break e}pn&&pn(t,yt,Qe),t==="focusout"&&(pn=yt._wrapperState)&&pn.controlled&&yt.type==="number"&&Pe(yt,"number",yt.value)}switch(pn=Qe?Pr(Qe):window,t){case"focusin":(Si(pn)||pn.contentEditable==="true")&&(ft=pn,ot=Qe,Zt=null);break;case"focusout":Zt=ot=ft=null;break;case"mousedown":xn=!0;break;case"contextmenu":case"mouseup":case"dragend":xn=!1,Xn(Et,i,gt);break;case"selectionchange":if(Tu)break;case"keydown":case"keyup":Xn(Et,i,gt)}var mn;if(Dr)e:{switch(t){case"compositionstart":var Pn="onCompositionStart";break e;case"compositionend":Pn="onCompositionEnd";break e;case"compositionupdate":Pn="onCompositionUpdate";break e}Pn=void 0}else Pa?Ta(t,i)&&(Pn="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(Pn="onCompositionStart");Pn&&(La&&i.locale!=="ko"&&(Pa||Pn!=="onCompositionStart"?Pn==="onCompositionEnd"&&Pa&&(mn=qi()):(ba=gt,Go="value"in ba?ba.value:ba.textContent,Pa=!0)),pn=Nt(Qe,Pn),0<pn.length&&(Pn=new z(Pn,t,null,i,gt),Et.push({event:Pn,listeners:pn}),mn?Pn.data=mn:(mn=Da(i),mn!==null&&(Pn.data=mn)))),(mn=Lo?ui(t,i):$i(t,i))&&(Qe=Nt(Qe,"onBeforeInput"),0<Qe.length&&(gt=new z("onBeforeInput","beforeinput",null,i,gt),Et.push({event:gt,listeners:Qe}),gt.data=mn))}Mt(Et,n)})}function Ut(t,n,i){return{instance:t,listener:n,currentTarget:i}}function Nt(t,n){for(var i=n+"Capture",f=[];t!==null;){var S=t,O=S.stateNode;S.tag===5&&O!==null&&(S=O,O=xt(t,i),O!=null&&f.unshift(Ut(t,O,S)),O=xt(t,n),O!=null&&f.push(Ut(t,O,S))),t=t.return}return f}function wt(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function nn(t,n,i,f,S){for(var O=n._reactName,W=[];i!==null&&i!==f;){var ge=i,Ae=ge.alternate,Qe=ge.stateNode;if(Ae!==null&&Ae===f)break;ge.tag===5&&Qe!==null&&(ge=Qe,S?(Ae=xt(i,O),Ae!=null&&W.unshift(Ut(i,Ae,ge))):S||(Ae=xt(i,O),Ae!=null&&W.push(Ut(i,Ae,ge)))),i=i.return}W.length!==0&&t.push({event:n,listeners:W})}var Vt=/\r\n?/g,dn=/\u0000|\uFFFD/g;function un(t){return(typeof t=="string"?t:""+t).replace(Vt,`
`).replace(dn,"")}function Yt(t,n,i){if(n=un(n),un(t)!==n&&i)throw Error(r(425))}function ln(){}var en=null,Kn=null;function Sn(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Jn=typeof setTimeout=="function"?setTimeout:void 0,xr=typeof clearTimeout=="function"?clearTimeout:void 0,Tn=typeof Promise=="function"?Promise:void 0,kn=typeof queueMicrotask=="function"?queueMicrotask:typeof Tn!="undefined"?function(t){return Tn.resolve(null).then(t).catch(er)}:Jn;function er(t){setTimeout(function(){throw t})}function ar(t,n){var i=n,f=0;do{var S=i.nextSibling;if(t.removeChild(i),S&&S.nodeType===8)if(i=S.data,i==="/$"){if(f===0){t.removeChild(S),ri(n);return}f--}else i!=="$"&&i!=="$?"&&i!=="$!"||f++;i=S}while(i);ri(n)}function vn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function yn(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return t;n--}else i==="/$"&&n++}t=t.previousSibling}return null}var On=Math.random().toString(36).slice(2),Un="__reactFiber$"+On,or="__reactProps$"+On,_n="__reactContainer$"+On,Wr="__reactEvents$"+On,vr="__reactListeners$"+On,Ca="__reactHandles$"+On;function Mr(t){var n=t[Un];if(n)return n;for(var i=t.parentNode;i;){if(n=i[_n]||i[Un]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=yn(t);t!==null;){if(i=t[Un])return i;t=yn(t)}return n}t=i,i=t.parentNode}return null}function gn(t){return t=t[Un]||t[_n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Pr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(r(33))}function Ln(t){return t[or]||null}var Ha=[],wr=-1;function Qr(t){return{current:t}}function Dn(t){0>wr||(t.current=Ha[wr],Ha[wr]=null,wr--)}function In(t,n){wr++,Ha[wr]=t.current,t.current=n}var ca={},Vn=Qr(ca),Fr=Qr(!1),Nr=ca;function Lr(t,n){var i=t.type.contextTypes;if(!i)return ca;var f=t.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===n)return f.__reactInternalMemoizedMaskedChildContext;var S={},O;for(O in i)S[O]=n[O];return f&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=S),S}function Fn(t){return t=t.childContextTypes,t!=null}function Er(){Dn(Fr),Dn(Vn)}function Ka(t,n,i){if(Vn.current!==ca)throw Error(r(168));In(Vn,n),In(Fr,i)}function Ja(t,n,i){var f=t.stateNode;if(n=n.childContextTypes,typeof f.getChildContext!="function")return i;f=f.getChildContext();for(var S in f)if(!(S in n))throw Error(r(108,q(t)||"Unknown",S));return D({},i,f)}function Br(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ca,Nr=Vn.current,In(Vn,t),In(Fr,Fr.current),!0}function $r(t,n,i){var f=t.stateNode;if(!f)throw Error(r(169));i?(t=Ja(t,n,Nr),f.__reactInternalMemoizedMergedChildContext=t,Dn(Fr),Dn(Vn),In(Vn,t)):Dn(Fr),In(Fr,i)}var cr=null,ta=!1,Gr=!1;function Fa(t){cr===null?cr=[t]:cr.push(t)}function Oa(t){ta=!0,Fa(t)}function da(){if(!Gr&&cr!==null){Gr=!0;var t=0,n=rr;try{var i=cr;for(rr=1;t<i.length;t++){var f=i[t];do f=f(!0);while(f!==null)}cr=null,ta=!1}catch(S){throw cr!==null&&(cr=cr.slice(t+1)),Zn(wa,da),S}finally{rr=n,Gr=!1}}return null}var fo=[],fa=0,Rn=null,nr=0,ir=[],Hr=0,ya=null,kr=1,jr="";function Wa(t,n){fo[fa++]=nr,fo[fa++]=Rn,Rn=t,nr=n}function _a(t,n,i){ir[Hr++]=kr,ir[Hr++]=jr,ir[Hr++]=ya,ya=t;var f=kr;t=jr;var S=32-Vr(f)-1;f&=~(1<<S),i+=1;var O=32-Vr(n)+S;if(30<O){var W=S-S%5;O=(f&(1<<W)-1).toString(32),f>>=W,S-=W,kr=1<<32-Vr(n)+S|i<<S|f,jr=O+t}else kr=1<<O|i<<S|f,jr=t}function ko(t){t.return!==null&&(Wa(t,1),_a(t,1,0))}function Yo(t){for(;t===Rn;)Rn=fo[--fa],fo[fa]=null,nr=fo[--fa],fo[fa]=null;for(;t===ya;)ya=ir[--Hr],ir[Hr]=null,jr=ir[--Hr],ir[Hr]=null,kr=ir[--Hr],ir[Hr]=null}var Xr=null,Cr=null,zn=!1,Ur=null;function qa(t,n){var i=ti(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=t,n=t.deletions,n===null?(t.deletions=[i],t.flags|=16):n.push(i)}function na(t,n){switch(t.tag){case 5:var i=t.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,Xr=t,Cr=vn(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,Xr=t,Cr=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=ya!==null?{id:kr,overflow:jr}:null,t.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=ti(18,null,null,0),i.stateNode=n,i.return=t,t.child=i,Xr=t,Cr=null,!0):!1;default:return!1}}function Yn(t){return(t.mode&1)!==0&&(t.flags&128)===0}function An(t){if(zn){var n=Cr;if(n){var i=n;if(!na(t,n)){if(Yn(t))throw Error(r(418));n=vn(i.nextSibling);var f=Xr;n&&na(t,n)?qa(f,i):(t.flags=t.flags&-4097|2,zn=!1,Xr=t)}}else{if(Yn(t))throw Error(r(418));t.flags=t.flags&-4097|2,zn=!1,Xr=t}}}function pr(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xr=t}function mr(t){if(t!==Xr)return!1;if(!zn)return pr(t),zn=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!Sn(t.type,t.memoizedProps)),n&&(n=Cr)){if(Yn(t))throw Or(),Error(r(418));for(;n;)qa(t,n),n=vn(n.nextSibling)}if(pr(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"){if(n===0){Cr=vn(t.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}t=t.nextSibling}Cr=null}}else Cr=Xr?vn(t.stateNode.nextSibling):null;return!0}function Or(){for(var t=Cr;t;)t=vn(t.nextSibling)}function Jr(){Cr=Xr=null,zn=!1}function vo(t){Ur===null?Ur=[t]:Ur.push(t)}var ru=C.ReactCurrentBatchConfig;function Ga(t,n){if(t&&t.defaultProps){n=D({},n),t=t.defaultProps;for(var i in t)n[i]===void 0&&(n[i]=t[i]);return n}return n}var si=Qr(null),Qo=null,ga=null,Xo=null;function Hi(){Xo=ga=Qo=null}function eo(t){var n=si.current;Dn(si),t._currentValue=n}function Jo(t,n,i){for(;t!==null;){var f=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,f!==null&&(f.childLanes|=n)):f!==null&&(f.childLanes&n)!==n&&(f.childLanes|=n),t===i)break;t=t.return}}function jo(t,n){Qo=t,Xo=ga=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&n&&(To=!0),t.firstContext=null)}function zr(t){var n=t._currentValue;if(Xo!==t)if(t={context:t,memoizedValue:n,next:null},ga===null){if(Qo===null)throw Error(r(308));ga=t,Qo.dependencies={lanes:0,firstContext:t}}else ga=ga.next=t;return n}var Ia=null;function po(t){Ia===null?Ia=[t]:Ia.push(t)}function Ki(t,n,i,f){var S=n.interleaved;return S===null?(i.next=i,po(n)):(i.next=S.next,S.next=i),n.interleaved=i,va(t,f)}function va(t,n){t.lanes|=n;var i=t.alternate;for(i!==null&&(i.lanes|=n),i=t,t=t.return;t!==null;)t.childLanes|=n,i=t.alternate,i!==null&&(i.childLanes|=n),i=t,t=t.return;return i.tag===3?i.stateNode:null}var Ra=!1;function Ti(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function au(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function to(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function mo(t,n,i){var f=t.updateQueue;if(f===null)return null;if(f=f.shared,sr&2){var S=f.pending;return S===null?n.next=n:(n.next=S.next,S.next=n),f.pending=n,va(t,i)}return S=f.interleaved,S===null?(n.next=n,po(f)):(n.next=S.next,S.next=n),f.interleaved=n,va(t,i)}function hr(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var f=n.lanes;f&=t.pendingLanes,i|=f,n.lanes=i,oo(t,i)}}function tr(t,n){var i=t.updateQueue,f=t.alternate;if(f!==null&&(f=f.updateQueue,i===f)){var S=null,O=null;if(i=i.firstBaseUpdate,i!==null){do{var W={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};O===null?S=O=W:O=O.next=W,i=i.next}while(i!==null);O===null?S=O=n:O=O.next=n}else S=O=n;i={baseState:f.baseState,firstBaseUpdate:S,lastBaseUpdate:O,shared:f.shared,effects:f.effects},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}function ur(t,n,i,f){var S=t.updateQueue;Ra=!1;var O=S.firstBaseUpdate,W=S.lastBaseUpdate,ge=S.shared.pending;if(ge!==null){S.shared.pending=null;var Ae=ge,Qe=Ae.next;Ae.next=null,W===null?O=Qe:W.next=Qe,W=Ae;var gt=t.alternate;gt!==null&&(gt=gt.updateQueue,ge=gt.lastBaseUpdate,ge!==W&&(ge===null?gt.firstBaseUpdate=Qe:ge.next=Qe,gt.lastBaseUpdate=Ae))}if(O!==null){var Et=S.baseState;W=0,gt=Qe=Ae=null,ge=O;do{var yt=ge.lane,$t=ge.eventTime;if((f&yt)===yt){gt!==null&&(gt=gt.next={eventTime:$t,lane:0,tag:ge.tag,payload:ge.payload,callback:ge.callback,next:null});e:{var _t=t,tn=ge;switch(yt=n,$t=i,tn.tag){case 1:if(_t=tn.payload,typeof _t=="function"){Et=_t.call($t,Et,yt);break e}Et=_t;break e;case 3:_t.flags=_t.flags&-65537|128;case 0:if(_t=tn.payload,yt=typeof _t=="function"?_t.call($t,Et,yt):_t,yt==null)break e;Et=D({},Et,yt);break e;case 2:Ra=!0}}ge.callback!==null&&ge.lane!==0&&(t.flags|=64,yt=S.effects,yt===null?S.effects=[ge]:yt.push(ge))}else $t={eventTime:$t,lane:yt,tag:ge.tag,payload:ge.payload,callback:ge.callback,next:null},gt===null?(Qe=gt=$t,Ae=Et):gt=gt.next=$t,W|=yt;if(ge=ge.next,ge===null){if(ge=S.shared.pending,ge===null)break;yt=ge,ge=yt.next,yt.next=null,S.lastBaseUpdate=yt,S.shared.pending=null}}while(1);if(gt===null&&(Ae=Et),S.baseState=Ae,S.firstBaseUpdate=Qe,S.lastBaseUpdate=gt,n=S.shared.interleaved,n!==null){S=n;do W|=S.lane,S=S.next;while(S!==n)}else O===null&&(S.shared.lanes=0);Cu|=W,t.lanes=W,t.memoizedState=Et}}function ra(t,n,i){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var f=t[n],S=f.callback;if(S!==null){if(f.callback=null,f=i,typeof S!="function")throw Error(r(191,S));S.call(f)}}}var xa=new o.Component().refs;function ho(t,n,i,f){n=t.memoizedState,i=i(f,n),i=i==null?n:D({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var yo={isMounted:function(t){return(t=t._reactInternals)?pt(t)===t:!1},enqueueSetState:function(t,n,i){t=t._reactInternals;var f=Io(),S=fu(t),O=to(f,S);O.payload=n,i!=null&&(O.callback=i),n=mo(t,O,S),n!==null&&(di(n,t,S,f),hr(n,t,S))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var f=Io(),S=fu(t),O=to(f,S);O.tag=1,O.payload=n,i!=null&&(O.callback=i),n=mo(t,O,S),n!==null&&(di(n,t,S,f),hr(n,t,S))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=Io(),f=fu(t),S=to(i,f);S.tag=2,n!=null&&(S.callback=n),n=mo(t,S,f),n!==null&&(di(n,t,f,i),hr(n,t,f))}};function ou(t,n,i,f,S,O,W){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(f,O,W):n.prototype&&n.prototype.isPureReactComponent?!Bo(i,f)||!Bo(S,O):!0}function Hu(t,n,i){var f=!1,S=ca,O=n.contextType;return typeof O=="object"&&O!==null?O=zr(O):(S=Fn(n)?Nr:Vn.current,f=n.contextTypes,O=(f=f!=null)?Lr(t,S):ca),n=new n(i,O),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=yo,t.stateNode=n,n._reactInternals=t,f&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=S,t.__reactInternalMemoizedMaskedChildContext=O),n}function Ku(t,n,i,f){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,f),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,f),n.state!==t&&yo.enqueueReplaceState(n,n.state,null)}function pa(t,n,i,f){var S=t.stateNode;S.props=i,S.state=t.memoizedState,S.refs=xa,Ti(t);var O=n.contextType;typeof O=="object"&&O!==null?S.context=zr(O):(O=Fn(n)?Nr:Vn.current,S.context=Lr(t,O)),S.state=t.memoizedState,O=n.getDerivedStateFromProps,typeof O=="function"&&(ho(t,n,O,i),S.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof S.getSnapshotBeforeUpdate=="function"||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(n=S.state,typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount(),n!==S.state&&yo.enqueueReplaceState(S,S.state,null),ur(t,i,S,f),S.state=t.memoizedState),typeof S.componentDidMount=="function"&&(t.flags|=4194308)}function Pi(t,n,i){if(t=i.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(r(309));var f=i.stateNode}if(!f)throw Error(r(147,t));var S=f,O=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===O?n.ref:(n=function(W){var ge=S.refs;ge===xa&&(ge=S.refs={}),W===null?delete ge[O]:ge[O]=W},n._stringRef=O,n)}if(typeof t!="string")throw Error(r(284));if(!i._owner)throw Error(r(290,t))}return t}function Wi(t,n){throw t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function _o(t){var n=t._init;return n(t._payload)}function Ci(t){function n(ke,Ne){if(t){var We=ke.deletions;We===null?(ke.deletions=[Ne],ke.flags|=16):We.push(Ne)}}function i(ke,Ne){if(!t)return null;for(;Ne!==null;)n(ke,Ne),Ne=Ne.sibling;return null}function f(ke,Ne){for(ke=new Map;Ne!==null;)Ne.key!==null?ke.set(Ne.key,Ne):ke.set(Ne.index,Ne),Ne=Ne.sibling;return ke}function S(ke,Ne){return ke=pu(ke,Ne),ke.index=0,ke.sibling=null,ke}function O(ke,Ne,We){return ke.index=We,t?(We=ke.alternate,We!==null?(We=We.index,We<Ne?(ke.flags|=2,Ne):We):(ke.flags|=2,Ne)):(ke.flags|=1048576,Ne)}function W(ke){return t&&ke.alternate===null&&(ke.flags|=2),ke}function ge(ke,Ne,We,Rt){return Ne===null||Ne.tag!==6?(Ne=hl(We,ke.mode,Rt),Ne.return=ke,Ne):(Ne=S(Ne,We),Ne.return=ke,Ne)}function Ae(ke,Ne,We,Rt){var an=We.type;return an===te?gt(ke,Ne,We.props.children,Rt,We.key):Ne!==null&&(Ne.elementType===an||typeof an=="object"&&an!==null&&an.$$typeof===k&&_o(an)===Ne.type)?(Rt=S(Ne,We.props),Rt.ref=Pi(ke,Ne,We),Rt.return=ke,Rt):(Rt=As(We.type,We.key,We.props,null,ke.mode,Rt),Rt.ref=Pi(ke,Ne,We),Rt.return=ke,Rt)}function Qe(ke,Ne,We,Rt){return Ne===null||Ne.tag!==4||Ne.stateNode.containerInfo!==We.containerInfo||Ne.stateNode.implementation!==We.implementation?(Ne=yl(We,ke.mode,Rt),Ne.return=ke,Ne):(Ne=S(Ne,We.children||[]),Ne.return=ke,Ne)}function gt(ke,Ne,We,Rt,an){return Ne===null||Ne.tag!==7?(Ne=Mu(We,ke.mode,Rt,an),Ne.return=ke,Ne):(Ne=S(Ne,We),Ne.return=ke,Ne)}function Et(ke,Ne,We){if(typeof Ne=="string"&&Ne!==""||typeof Ne=="number")return Ne=hl(""+Ne,ke.mode,We),Ne.return=ke,Ne;if(typeof Ne=="object"&&Ne!==null){switch(Ne.$$typeof){case L:return We=As(Ne.type,Ne.key,Ne.props,null,ke.mode,We),We.ref=Pi(ke,null,Ne),We.return=ke,We;case Z:return Ne=yl(Ne,ke.mode,We),Ne.return=ke,Ne;case k:var Rt=Ne._init;return Et(ke,Rt(Ne._payload),We)}if(se(Ne)||T(Ne))return Ne=Mu(Ne,ke.mode,We,null),Ne.return=ke,Ne;Wi(ke,Ne)}return null}function yt(ke,Ne,We,Rt){var an=Ne!==null?Ne.key:null;if(typeof We=="string"&&We!==""||typeof We=="number")return an!==null?null:ge(ke,Ne,""+We,Rt);if(typeof We=="object"&&We!==null){switch(We.$$typeof){case L:return We.key===an?Ae(ke,Ne,We,Rt):null;case Z:return We.key===an?Qe(ke,Ne,We,Rt):null;case k:return an=We._init,yt(ke,Ne,an(We._payload),Rt)}if(se(We)||T(We))return an!==null?null:gt(ke,Ne,We,Rt,null);Wi(ke,We)}return null}function $t(ke,Ne,We,Rt,an){if(typeof Rt=="string"&&Rt!==""||typeof Rt=="number")return ke=ke.get(We)||null,ge(Ne,ke,""+Rt,an);if(typeof Rt=="object"&&Rt!==null){switch(Rt.$$typeof){case L:return ke=ke.get(Rt.key===null?We:Rt.key)||null,Ae(Ne,ke,Rt,an);case Z:return ke=ke.get(Rt.key===null?We:Rt.key)||null,Qe(Ne,ke,Rt,an);case k:var pn=Rt._init;return $t(ke,Ne,We,pn(Rt._payload),an)}if(se(Rt)||T(Rt))return ke=ke.get(We)||null,gt(Ne,ke,Rt,an,null);Wi(Ne,Rt)}return null}function _t(ke,Ne,We,Rt){for(var an=null,pn=null,mn=Ne,Pn=Ne=0,ja=null;mn!==null&&Pn<We.length;Pn++){mn.index>Pn?(ja=mn,mn=null):ja=mn.sibling;var dr=yt(ke,mn,We[Pn],Rt);if(dr===null){mn===null&&(mn=ja);break}t&&mn&&dr.alternate===null&&n(ke,mn),Ne=O(dr,Ne,Pn),pn===null?an=dr:pn.sibling=dr,pn=dr,mn=ja}if(Pn===We.length)return i(ke,mn),zn&&Wa(ke,Pn),an;if(mn===null){for(;Pn<We.length;Pn++)mn=Et(ke,We[Pn],Rt),mn!==null&&(Ne=O(mn,Ne,Pn),pn===null?an=mn:pn.sibling=mn,pn=mn);return zn&&Wa(ke,Pn),an}for(mn=f(ke,mn);Pn<We.length;Pn++)ja=$t(mn,ke,Pn,We[Pn],Rt),ja!==null&&(t&&ja.alternate!==null&&mn.delete(ja.key===null?Pn:ja.key),Ne=O(ja,Ne,Pn),pn===null?an=ja:pn.sibling=ja,pn=ja);return t&&mn.forEach(function(mu){return n(ke,mu)}),zn&&Wa(ke,Pn),an}function tn(ke,Ne,We,Rt){var an=T(We);if(typeof an!="function")throw Error(r(150));if(We=an.call(We),We==null)throw Error(r(151));for(var pn=an=null,mn=Ne,Pn=Ne=0,ja=null,dr=We.next();mn!==null&&!dr.done;Pn++,dr=We.next()){mn.index>Pn?(ja=mn,mn=null):ja=mn.sibling;var mu=yt(ke,mn,dr.value,Rt);if(mu===null){mn===null&&(mn=ja);break}t&&mn&&mu.alternate===null&&n(ke,mn),Ne=O(mu,Ne,Pn),pn===null?an=mu:pn.sibling=mu,pn=mu,mn=ja}if(dr.done)return i(ke,mn),zn&&Wa(ke,Pn),an;if(mn===null){for(;!dr.done;Pn++,dr=We.next())dr=Et(ke,dr.value,Rt),dr!==null&&(Ne=O(dr,Ne,Pn),pn===null?an=dr:pn.sibling=dr,pn=dr);return zn&&Wa(ke,Pn),an}for(mn=f(ke,mn);!dr.done;Pn++,dr=We.next())dr=$t(mn,ke,Pn,dr.value,Rt),dr!==null&&(t&&dr.alternate!==null&&mn.delete(dr.key===null?Pn:dr.key),Ne=O(dr,Ne,Pn),pn===null?an=dr:pn.sibling=dr,pn=dr);return t&&mn.forEach(function(md){return n(ke,md)}),zn&&Wa(ke,Pn),an}function ma(ke,Ne,We,Rt){if(typeof We=="object"&&We!==null&&We.type===te&&We.key===null&&(We=We.props.children),typeof We=="object"&&We!==null){switch(We.$$typeof){case L:e:{for(var an=We.key,pn=Ne;pn!==null;){if(pn.key===an){if(an=We.type,an===te){if(pn.tag===7){i(ke,pn.sibling),Ne=S(pn,We.props.children),Ne.return=ke,ke=Ne;break e}}else if(pn.elementType===an||typeof an=="object"&&an!==null&&an.$$typeof===k&&_o(an)===pn.type){i(ke,pn.sibling),Ne=S(pn,We.props),Ne.ref=Pi(ke,pn,We),Ne.return=ke,ke=Ne;break e}i(ke,pn);break}else n(ke,pn);pn=pn.sibling}We.type===te?(Ne=Mu(We.props.children,ke.mode,Rt,We.key),Ne.return=ke,ke=Ne):(Rt=As(We.type,We.key,We.props,null,ke.mode,Rt),Rt.ref=Pi(ke,Ne,We),Rt.return=ke,ke=Rt)}return W(ke);case Z:e:{for(pn=We.key;Ne!==null;){if(Ne.key===pn)if(Ne.tag===4&&Ne.stateNode.containerInfo===We.containerInfo&&Ne.stateNode.implementation===We.implementation){i(ke,Ne.sibling),Ne=S(Ne,We.children||[]),Ne.return=ke,ke=Ne;break e}else{i(ke,Ne);break}else n(ke,Ne);Ne=Ne.sibling}Ne=yl(We,ke.mode,Rt),Ne.return=ke,ke=Ne}return W(ke);case k:return pn=We._init,ma(ke,Ne,pn(We._payload),Rt)}if(se(We))return _t(ke,Ne,We,Rt);if(T(We))return tn(ke,Ne,We,Rt);Wi(ke,We)}return typeof We=="string"&&We!==""||typeof We=="number"?(We=""+We,Ne!==null&&Ne.tag===6?(i(ke,Ne.sibling),Ne=S(Ne,We),Ne.return=ke,ke=Ne):(i(ke,Ne),Ne=hl(We,ke.mode,Rt),Ne.return=ke,ke=Ne),W(ke)):i(ke,Ne)}return ma}var Uo=Ci(!0),iu=Ci(!1),Gi={},bo=Qr(Gi),Vi=Qr(Gi),Yi=Qr(Gi);function Kt(t){if(t===Gi)throw Error(r(174));return t}function Cn(t,n){switch(In(Yi,n),In(Vi,t),In(bo,Gi),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:lt(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=lt(n,t)}Dn(bo),In(bo,n)}function br(){Dn(bo),Dn(Vi),Dn(Yi)}function aa(t){Kt(Yi.current);var n=Kt(bo.current),i=lt(n,t.type);n!==i&&(In(Vi,t),In(bo,i))}function Zr(t){Vi.current===t&&(Dn(bo),Dn(Vi))}var Rr=Qr(0);function uu(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Wu=[];function su(){for(var t=0;t<Wu.length;t++)Wu[t]._workInProgressVersionPrimary=null;Wu.length=0}var fs=C.ReactCurrentDispatcher,js=C.ReactCurrentBatchConfig,Pu=0,_r=null,Aa=null,Ba=null,vs=!1,ns=!1,rs=0,kc=0;function no(){throw Error(r(321))}function Us(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!Xa(t[i],n[i]))return!1;return!0}function zs(t,n,i,f,S,O){if(Pu=O,_r=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,fs.current=t===null||t.memoizedState===null?Zc:$c,t=i(f,S),ns){O=0;do{if(ns=!1,rs=0,25<=O)throw Error(r(301));O+=1,Ba=Aa=null,n.updateQueue=null,fs.current=Hc,t=i(f,S)}while(ns)}if(fs.current=hs,n=Aa!==null&&Aa.next!==null,Pu=0,Ba=Aa=_r=null,vs=!1,n)throw Error(r(300));return t}function Zs(){var t=rs!==0;return rs=0,t}function Oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ba===null?_r.memoizedState=Ba=t:Ba=Ba.next=t,Ba}function qo(){if(Aa===null){var t=_r.alternate;t=t!==null?t.memoizedState:null}else t=Aa.next;var n=Ba===null?_r.memoizedState:Ba.next;if(n!==null)Ba=n,Aa=t;else{if(t===null)throw Error(r(310));Aa=t,t={memoizedState:Aa.memoizedState,baseState:Aa.baseState,baseQueue:Aa.baseQueue,queue:Aa.queue,next:null},Ba===null?_r.memoizedState=Ba=t:Ba=Ba.next=t}return Ba}function as(t,n){return typeof n=="function"?n(t):n}function $s(t){var n=qo(),i=n.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=t;var f=Aa,S=f.baseQueue,O=i.pending;if(O!==null){if(S!==null){var W=S.next;S.next=O.next,O.next=W}f.baseQueue=S=O,i.pending=null}if(S!==null){O=S.next,f=f.baseState;var ge=W=null,Ae=null,Qe=O;do{var gt=Qe.lane;if((Pu&gt)===gt)Ae!==null&&(Ae=Ae.next={lane:0,action:Qe.action,hasEagerState:Qe.hasEagerState,eagerState:Qe.eagerState,next:null}),f=Qe.hasEagerState?Qe.eagerState:t(f,Qe.action);else{var Et={lane:gt,action:Qe.action,hasEagerState:Qe.hasEagerState,eagerState:Qe.eagerState,next:null};Ae===null?(ge=Ae=Et,W=f):Ae=Ae.next=Et,_r.lanes|=gt,Cu|=gt}Qe=Qe.next}while(Qe!==null&&Qe!==O);Ae===null?W=f:Ae.next=ge,Xa(f,n.memoizedState)||(To=!0),n.memoizedState=f,n.baseState=W,n.baseQueue=Ae,i.lastRenderedState=f}if(t=i.interleaved,t!==null){S=t;do O=S.lane,_r.lanes|=O,Cu|=O,S=S.next;while(S!==t)}else S===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function Hs(t){var n=qo(),i=n.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=t;var f=i.dispatch,S=i.pending,O=n.memoizedState;if(S!==null){i.pending=null;var W=S=S.next;do O=t(O,W.action),W=W.next;while(W!==S);Xa(O,n.memoizedState)||(To=!0),n.memoizedState=O,n.baseQueue===null&&(n.baseState=O),i.lastRenderedState=O}return[O,f]}function bl(){}function Tl(t,n){var i=_r,f=qo(),S=n(),O=!Xa(f.memoizedState,S);if(O&&(f.memoizedState=S,To=!0),f=f.queue,Ks(Ol.bind(null,i,f,t),[t]),f.getSnapshot!==n||O||Ba!==null&&Ba.memoizedState.tag&1){if(i.flags|=2048,os(9,Cl.bind(null,i,f,S,n),void 0,null),ka===null)throw Error(r(349));Pu&30||Pl(i,n,S)}return S}function Pl(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=_r.updateQueue,n===null?(n={lastEffect:null,stores:null},_r.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function Cl(t,n,i,f){n.value=i,n.getSnapshot=f,Rl(n)&&Al(t)}function Ol(t,n,i){return i(function(){Rl(n)&&Al(t)})}function Rl(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!Xa(t,i)}catch(f){return!0}}function Al(t){var n=va(t,1);n!==null&&di(n,t,1,-1)}function Ml(t){var n=Oi();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:t},n.queue=t,t=t.dispatch=zc.bind(null,_r,t),[n.memoizedState,t]}function os(t,n,i,f){return t={tag:t,create:n,destroy:i,deps:f,next:null},n=_r.updateQueue,n===null?(n={lastEffect:null,stores:null},_r.updateQueue=n,n.lastEffect=t.next=t):(i=n.lastEffect,i===null?n.lastEffect=t.next=t:(f=i.next,i.next=t,t.next=f,n.lastEffect=t)),t}function wl(){return qo().memoizedState}function ps(t,n,i,f){var S=Oi();_r.flags|=t,S.memoizedState=os(1|n,i,void 0,f===void 0?null:f)}function ms(t,n,i,f){var S=qo();f=f===void 0?null:f;var O=void 0;if(Aa!==null){var W=Aa.memoizedState;if(O=W.destroy,f!==null&&Us(f,W.deps)){S.memoizedState=os(n,i,O,f);return}}_r.flags|=t,S.memoizedState=os(1|n,i,O,f)}function Nl(t,n){return ps(8390656,8,t,n)}function Ks(t,n){return ms(2048,8,t,n)}function Ll(t,n){return ms(4,2,t,n)}function Dl(t,n){return ms(4,4,t,n)}function Fl(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Bl(t,n,i){return i=i!=null?i.concat([t]):null,ms(4,4,Fl.bind(null,n,t),i)}function Ws(){}function kl(t,n){var i=qo();n=n===void 0?null:n;var f=i.memoizedState;return f!==null&&n!==null&&Us(n,f[1])?f[0]:(i.memoizedState=[t,n],t)}function jl(t,n){var i=qo();n=n===void 0?null:n;var f=i.memoizedState;return f!==null&&n!==null&&Us(n,f[1])?f[0]:(t=t(),i.memoizedState=[t,n],t)}function Ul(t,n,i){return Pu&21?(Xa(i,n)||(i=Yr(),_r.lanes|=i,Cu|=i,t.baseState=!0),n):(t.baseState&&(t.baseState=!1,To=!0),t.memoizedState=i)}function jc(t,n){var i=rr;rr=i!==0&&4>i?i:4,t(!0);var f=js.transition;js.transition={};try{t(!1),n()}finally{rr=i,js.transition=f}}function zl(){return qo().memoizedState}function Uc(t,n,i){var f=fu(t);if(i={lane:f,action:i,hasEagerState:!1,eagerState:null,next:null},Zl(t))$l(n,i);else if(i=Ki(t,n,i,f),i!==null){var S=Io();di(i,t,f,S),Hl(i,n,f)}}function zc(t,n,i){var f=fu(t),S={lane:f,action:i,hasEagerState:!1,eagerState:null,next:null};if(Zl(t))$l(n,S);else{var O=t.alternate;if(t.lanes===0&&(O===null||O.lanes===0)&&(O=n.lastRenderedReducer,O!==null))try{var W=n.lastRenderedState,ge=O(W,i);if(S.hasEagerState=!0,S.eagerState=ge,Xa(ge,W)){var Ae=n.interleaved;Ae===null?(S.next=S,po(n)):(S.next=Ae.next,Ae.next=S),n.interleaved=S;return}}catch(Qe){}finally{}i=Ki(t,n,S,f),i!==null&&(S=Io(),di(i,t,f,S),Hl(i,n,f))}}function Zl(t){var n=t.alternate;return t===_r||n!==null&&n===_r}function $l(t,n){ns=vs=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function Hl(t,n,i){if(i&4194240){var f=n.lanes;f&=t.pendingLanes,i|=f,n.lanes=i,oo(t,i)}}var hs={readContext:zr,useCallback:no,useContext:no,useEffect:no,useImperativeHandle:no,useInsertionEffect:no,useLayoutEffect:no,useMemo:no,useReducer:no,useRef:no,useState:no,useDebugValue:no,useDeferredValue:no,useTransition:no,useMutableSource:no,useSyncExternalStore:no,useId:no,unstable_isNewReconciler:!1},Zc={readContext:zr,useCallback:function(t,n){return Oi().memoizedState=[t,n===void 0?null:n],t},useContext:zr,useEffect:Nl,useImperativeHandle:function(t,n,i){return i=i!=null?i.concat([t]):null,ps(4194308,4,Fl.bind(null,n,t),i)},useLayoutEffect:function(t,n){return ps(4194308,4,t,n)},useInsertionEffect:function(t,n){return ps(4,2,t,n)},useMemo:function(t,n){var i=Oi();return n=n===void 0?null:n,t=t(),i.memoizedState=[t,n],t},useReducer:function(t,n,i){var f=Oi();return n=i!==void 0?i(n):n,f.memoizedState=f.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},f.queue=t,t=t.dispatch=Uc.bind(null,_r,t),[f.memoizedState,t]},useRef:function(t){var n=Oi();return t={current:t},n.memoizedState=t},useState:Ml,useDebugValue:Ws,useDeferredValue:function(t){return Oi().memoizedState=t},useTransition:function(){var t=Ml(!1),n=t[0];return t=jc.bind(null,t[1]),Oi().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,i){var f=_r,S=Oi();if(zn){if(i===void 0)throw Error(r(407));i=i()}else{if(i=n(),ka===null)throw Error(r(349));Pu&30||Pl(f,n,i)}S.memoizedState=i;var O={value:i,getSnapshot:n};return S.queue=O,Nl(Ol.bind(null,f,O,t),[t]),f.flags|=2048,os(9,Cl.bind(null,f,O,i,n),void 0,null),i},useId:function(){var t=Oi(),n=ka.identifierPrefix;if(zn){var i=jr,f=kr;i=(f&~(1<<32-Vr(f)-1)).toString(32)+i,n=":"+n+"R"+i,i=rs++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=kc++,n=":"+n+"r"+i.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},$c={readContext:zr,useCallback:kl,useContext:zr,useEffect:Ks,useImperativeHandle:Bl,useInsertionEffect:Ll,useLayoutEffect:Dl,useMemo:jl,useReducer:$s,useRef:wl,useState:function(){return $s(as)},useDebugValue:Ws,useDeferredValue:function(t){var n=qo();return Ul(n,Aa.memoizedState,t)},useTransition:function(){var t=$s(as)[0],n=qo().memoizedState;return[t,n]},useMutableSource:bl,useSyncExternalStore:Tl,useId:zl,unstable_isNewReconciler:!1},Hc={readContext:zr,useCallback:kl,useContext:zr,useEffect:Ks,useImperativeHandle:Bl,useInsertionEffect:Ll,useLayoutEffect:Dl,useMemo:jl,useReducer:Hs,useRef:wl,useState:function(){return Hs(as)},useDebugValue:Ws,useDeferredValue:function(t){var n=qo();return Aa===null?n.memoizedState=t:Ul(n,Aa.memoizedState,t)},useTransition:function(){var t=Hs(as)[0],n=qo().memoizedState;return[t,n]},useMutableSource:bl,useSyncExternalStore:Tl,useId:zl,unstable_isNewReconciler:!1};function Gu(t,n){try{var i="",f=n;do i+=$(f),f=f.return;while(f);var S=i}catch(O){S=`
Error generating stack: `+O.message+`
`+O.stack}return{value:t,source:n,stack:S,digest:null}}function Gs(t,n,i){return{value:t,source:null,stack:i!=null?i:null,digest:n!=null?n:null}}function Vs(t,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var Kc=typeof WeakMap=="function"?WeakMap:Map;function Kl(t,n,i){i=to(-1,i),i.tag=3,i.payload={element:null};var f=n.value;return i.callback=function(){bs||(bs=!0,sl=f),Vs(t,n)},i}function Wl(t,n,i){i=to(-1,i),i.tag=3;var f=t.type.getDerivedStateFromError;if(typeof f=="function"){var S=n.value;i.payload=function(){return f(S)},i.callback=function(){Vs(t,n)}}var O=t.stateNode;return O!==null&&typeof O.componentDidCatch=="function"&&(i.callback=function(){Vs(t,n),typeof f!="function"&&(cu===null?cu=new Set([this]):cu.add(this));var W=n.stack;this.componentDidCatch(n.value,{componentStack:W!==null?W:""})}),i}function Gl(t,n,i){var f=t.pingCache;if(f===null){f=t.pingCache=new Kc;var S=new Set;f.set(n,S)}else S=f.get(n),S===void 0&&(S=new Set,f.set(n,S));S.has(i)||(S.add(i),t=ad.bind(null,t,n,i),n.then(t,t))}function Vl(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function Yl(t,n,i,f,S){return t.mode&1?(t.flags|=65536,t.lanes=S,t):(t===n?t.flags|=65536:(t.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=to(-1,1),n.tag=2,mo(i,n,1))),i.lanes|=1),t)}var Wc=C.ReactCurrentOwner,To=!1;function go(t,n,i,f){n.child=t===null?iu(n,null,i,f):Uo(n,t.child,i,f)}function Ql(t,n,i,f,S){i=i.render;var O=n.ref;return jo(n,S),f=zs(t,n,i,f,O,S),i=Zs(),t!==null&&!To?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~S,Qi(t,n,S)):(zn&&i&&ko(n),n.flags|=1,go(t,n,f,S),n.child)}function Xl(t,n,i,f,S){if(t===null){var O=i.type;return typeof O=="function"&&!ml(O)&&O.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=O,Jl(t,n,O,f,S)):(t=As(i.type,null,f,n,n.mode,S),t.ref=n.ref,t.return=n,n.child=t)}if(O=t.child,!(t.lanes&S)){var W=O.memoizedProps;if(i=i.compare,i=i!==null?i:Bo,i(W,f)&&t.ref===n.ref)return Qi(t,n,S)}return n.flags|=1,t=pu(O,f),t.ref=n.ref,t.return=n,n.child=t}function Jl(t,n,i,f,S){if(t!==null){var O=t.memoizedProps;if(Bo(O,f)&&t.ref===n.ref)if(To=!1,n.pendingProps=f=O,(t.lanes&S)!==0)t.flags&131072&&(To=!0);else return n.lanes=t.lanes,Qi(t,n,S)}return Ys(t,n,i,f,S)}function _l(t,n,i){var f=n.pendingProps,S=f.children,O=t!==null?t.memoizedState:null;if(f.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},In(Yu,zo),zo|=i;else{if(!(i&1073741824))return t=O!==null?O.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,In(Yu,zo),zo|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=O!==null?O.baseLanes:i,In(Yu,zo),zo|=f}else O!==null?(f=O.baseLanes|i,n.memoizedState=null):f=i,In(Yu,zo),zo|=f;return go(t,n,S,i),n.child}function ql(t,n){var i=n.ref;(t===null&&i!==null||t!==null&&t.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function Ys(t,n,i,f,S){var O=Fn(i)?Nr:Vn.current;return O=Lr(n,O),jo(n,S),i=zs(t,n,i,f,O,S),f=Zs(),t!==null&&!To?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~S,Qi(t,n,S)):(zn&&f&&ko(n),n.flags|=1,go(t,n,i,S),n.child)}function ec(t,n,i,f,S){if(Fn(i)){var O=!0;Br(n)}else O=!1;if(jo(n,S),n.stateNode===null)gs(t,n),Hu(n,i,f),pa(n,i,f,S),f=!0;else if(t===null){var W=n.stateNode,ge=n.memoizedProps;W.props=ge;var Ae=W.context,Qe=i.contextType;typeof Qe=="object"&&Qe!==null?Qe=zr(Qe):(Qe=Fn(i)?Nr:Vn.current,Qe=Lr(n,Qe));var gt=i.getDerivedStateFromProps,Et=typeof gt=="function"||typeof W.getSnapshotBeforeUpdate=="function";Et||typeof W.UNSAFE_componentWillReceiveProps!="function"&&typeof W.componentWillReceiveProps!="function"||(ge!==f||Ae!==Qe)&&Ku(n,W,f,Qe),Ra=!1;var yt=n.memoizedState;W.state=yt,ur(n,f,W,S),Ae=n.memoizedState,ge!==f||yt!==Ae||Fr.current||Ra?(typeof gt=="function"&&(ho(n,i,gt,f),Ae=n.memoizedState),(ge=Ra||ou(n,i,ge,f,yt,Ae,Qe))?(Et||typeof W.UNSAFE_componentWillMount!="function"&&typeof W.componentWillMount!="function"||(typeof W.componentWillMount=="function"&&W.componentWillMount(),typeof W.UNSAFE_componentWillMount=="function"&&W.UNSAFE_componentWillMount()),typeof W.componentDidMount=="function"&&(n.flags|=4194308)):(typeof W.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=f,n.memoizedState=Ae),W.props=f,W.state=Ae,W.context=Qe,f=ge):(typeof W.componentDidMount=="function"&&(n.flags|=4194308),f=!1)}else{W=n.stateNode,au(t,n),ge=n.memoizedProps,Qe=n.type===n.elementType?ge:Ga(n.type,ge),W.props=Qe,Et=n.pendingProps,yt=W.context,Ae=i.contextType,typeof Ae=="object"&&Ae!==null?Ae=zr(Ae):(Ae=Fn(i)?Nr:Vn.current,Ae=Lr(n,Ae));var $t=i.getDerivedStateFromProps;(gt=typeof $t=="function"||typeof W.getSnapshotBeforeUpdate=="function")||typeof W.UNSAFE_componentWillReceiveProps!="function"&&typeof W.componentWillReceiveProps!="function"||(ge!==Et||yt!==Ae)&&Ku(n,W,f,Ae),Ra=!1,yt=n.memoizedState,W.state=yt,ur(n,f,W,S);var _t=n.memoizedState;ge!==Et||yt!==_t||Fr.current||Ra?(typeof $t=="function"&&(ho(n,i,$t,f),_t=n.memoizedState),(Qe=Ra||ou(n,i,Qe,f,yt,_t,Ae)||!1)?(gt||typeof W.UNSAFE_componentWillUpdate!="function"&&typeof W.componentWillUpdate!="function"||(typeof W.componentWillUpdate=="function"&&W.componentWillUpdate(f,_t,Ae),typeof W.UNSAFE_componentWillUpdate=="function"&&W.UNSAFE_componentWillUpdate(f,_t,Ae)),typeof W.componentDidUpdate=="function"&&(n.flags|=4),typeof W.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof W.componentDidUpdate!="function"||ge===t.memoizedProps&&yt===t.memoizedState||(n.flags|=4),typeof W.getSnapshotBeforeUpdate!="function"||ge===t.memoizedProps&&yt===t.memoizedState||(n.flags|=1024),n.memoizedProps=f,n.memoizedState=_t),W.props=f,W.state=_t,W.context=Ae,f=Qe):(typeof W.componentDidUpdate!="function"||ge===t.memoizedProps&&yt===t.memoizedState||(n.flags|=4),typeof W.getSnapshotBeforeUpdate!="function"||ge===t.memoizedProps&&yt===t.memoizedState||(n.flags|=1024),f=!1)}return Qs(t,n,i,f,O,S)}function Qs(t,n,i,f,S,O){ql(t,n);var W=(n.flags&128)!==0;if(!f&&!W)return S&&$r(n,i,!1),Qi(t,n,O);f=n.stateNode,Wc.current=n;var ge=W&&typeof i.getDerivedStateFromError!="function"?null:f.render();return n.flags|=1,t!==null&&W?(n.child=Uo(n,t.child,null,O),n.child=Uo(n,null,ge,O)):go(t,n,ge,O),n.memoizedState=f.state,S&&$r(n,i,!0),n.child}function tc(t){var n=t.stateNode;n.pendingContext?Ka(t,n.pendingContext,n.pendingContext!==n.context):n.context&&Ka(t,n.context,!1),Cn(t,n.containerInfo)}function nc(t,n,i,f,S){return Jr(),vo(S),n.flags|=256,go(t,n,i,f),n.child}var Xs={dehydrated:null,treeContext:null,retryLane:0};function Js(t){return{baseLanes:t,cachePool:null,transitions:null}}function rc(t,n,i){var f=n.pendingProps,S=Rr.current,O=!1,W=(n.flags&128)!==0,ge;if((ge=W)||(ge=t!==null&&t.memoizedState===null?!1:(S&2)!==0),ge?(O=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(S|=1),In(Rr,S&1),t===null)return An(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(n.mode&1?t.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(W=f.children,t=f.fallback,O?(f=n.mode,O=n.child,W={mode:"hidden",children:W},!(f&1)&&O!==null?(O.childLanes=0,O.pendingProps=W):O=Ms(W,f,0,null),t=Mu(t,f,i,null),O.return=n,t.return=n,O.sibling=t,n.child=O,n.child.memoizedState=Js(i),n.memoizedState=Xs,t):_s(n,W));if(S=t.memoizedState,S!==null&&(ge=S.dehydrated,ge!==null))return Gc(t,n,W,f,ge,S,i);if(O){O=f.fallback,W=n.mode,S=t.child,ge=S.sibling;var Ae={mode:"hidden",children:f.children};return!(W&1)&&n.child!==S?(f=n.child,f.childLanes=0,f.pendingProps=Ae,n.deletions=null):(f=pu(S,Ae),f.subtreeFlags=S.subtreeFlags&14680064),ge!==null?O=pu(ge,O):(O=Mu(O,W,i,null),O.flags|=2),O.return=n,f.return=n,f.sibling=O,n.child=f,f=O,O=n.child,W=t.child.memoizedState,W=W===null?Js(i):{baseLanes:W.baseLanes|i,cachePool:null,transitions:W.transitions},O.memoizedState=W,O.childLanes=t.childLanes&~i,n.memoizedState=Xs,f}return O=t.child,t=O.sibling,f=pu(O,{mode:"visible",children:f.children}),!(n.mode&1)&&(f.lanes=i),f.return=n,f.sibling=null,t!==null&&(i=n.deletions,i===null?(n.deletions=[t],n.flags|=16):i.push(t)),n.child=f,n.memoizedState=null,f}function _s(t,n){return n=Ms({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function ys(t,n,i,f){return f!==null&&vo(f),Uo(n,t.child,null,i),t=_s(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Gc(t,n,i,f,S,O,W){if(i)return n.flags&256?(n.flags&=-257,f=Gs(Error(r(422))),ys(t,n,W,f)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(O=f.fallback,S=n.mode,f=Ms({mode:"visible",children:f.children},S,0,null),O=Mu(O,S,W,null),O.flags|=2,f.return=n,O.return=n,f.sibling=O,n.child=f,n.mode&1&&Uo(n,t.child,null,W),n.child.memoizedState=Js(W),n.memoizedState=Xs,O);if(!(n.mode&1))return ys(t,n,W,null);if(S.data==="$!"){if(f=S.nextSibling&&S.nextSibling.dataset,f)var ge=f.dgst;return f=ge,O=Error(r(419)),f=Gs(O,f,void 0),ys(t,n,W,f)}if(ge=(W&t.childLanes)!==0,To||ge){if(f=ka,f!==null){switch(W&-W){case 4:S=2;break;case 16:S=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:S=32;break;case 536870912:S=268435456;break;default:S=0}S=S&(f.suspendedLanes|W)?0:S,S!==0&&S!==O.retryLane&&(O.retryLane=S,va(t,S),di(f,t,S,-1))}return pl(),f=Gs(Error(r(421))),ys(t,n,W,f)}return S.data==="$?"?(n.flags|=128,n.child=t.child,n=od.bind(null,t),S._reactRetry=n,null):(t=O.treeContext,Cr=vn(S.nextSibling),Xr=n,zn=!0,Ur=null,t!==null&&(ir[Hr++]=kr,ir[Hr++]=jr,ir[Hr++]=ya,kr=t.id,jr=t.overflow,ya=n),n=_s(n,f.children),n.flags|=4096,n)}function ac(t,n,i){t.lanes|=n;var f=t.alternate;f!==null&&(f.lanes|=n),Jo(t.return,n,i)}function qs(t,n,i,f,S){var O=t.memoizedState;O===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:f,tail:i,tailMode:S}:(O.isBackwards=n,O.rendering=null,O.renderingStartTime=0,O.last=f,O.tail=i,O.tailMode=S)}function oc(t,n,i){var f=n.pendingProps,S=f.revealOrder,O=f.tail;if(go(t,n,f.children,i),f=Rr.current,f&2)f=f&1|2,n.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ac(t,i,n);else if(t.tag===19)ac(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}f&=1}if(In(Rr,f),!(n.mode&1))n.memoizedState=null;else switch(S){case"forwards":for(i=n.child,S=null;i!==null;)t=i.alternate,t!==null&&uu(t)===null&&(S=i),i=i.sibling;i=S,i===null?(S=n.child,n.child=null):(S=i.sibling,i.sibling=null),qs(n,!1,S,i,O);break;case"backwards":for(i=null,S=n.child,n.child=null;S!==null;){if(t=S.alternate,t!==null&&uu(t)===null){n.child=S;break}t=S.sibling,S.sibling=i,i=S,S=t}qs(n,!0,i,null,O);break;case"together":qs(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function gs(t,n){!(n.mode&1)&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function Qi(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),Cu|=n.lanes,!(i&n.childLanes))return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,i=pu(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=pu(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function Vc(t,n,i){switch(n.tag){case 3:tc(n),Jr();break;case 5:aa(n);break;case 1:Fn(n.type)&&Br(n);break;case 4:Cn(n,n.stateNode.containerInfo);break;case 10:var f=n.type._context,S=n.memoizedProps.value;In(si,f._currentValue),f._currentValue=S;break;case 13:if(f=n.memoizedState,f!==null)return f.dehydrated!==null?(In(Rr,Rr.current&1),n.flags|=128,null):i&n.child.childLanes?rc(t,n,i):(In(Rr,Rr.current&1),t=Qi(t,n,i),t!==null?t.sibling:null);In(Rr,Rr.current&1);break;case 19:if(f=(i&n.childLanes)!==0,t.flags&128){if(f)return oc(t,n,i);n.flags|=128}if(S=n.memoizedState,S!==null&&(S.rendering=null,S.tail=null,S.lastEffect=null),In(Rr,Rr.current),f)break;return null;case 22:case 23:return n.lanes=0,_l(t,n,i)}return Qi(t,n,i)}var ic,el,uc,sc;ic=function(t,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},el=function(){},uc=function(t,n,i,f){var S=t.memoizedProps;if(S!==f){t=n.stateNode,Kt(bo.current);var O=null;switch(i){case"input":S=Ye(t,S),f=Ye(t,f),O=[];break;case"select":S=D({},S,{value:void 0}),f=D({},f,{value:void 0}),O=[];break;case"textarea":S=ye(t,S),f=ye(t,f),O=[];break;default:typeof S.onClick!="function"&&typeof f.onClick=="function"&&(t.onclick=ln)}Ie(i,f);var W;i=null;for(Qe in S)if(!f.hasOwnProperty(Qe)&&S.hasOwnProperty(Qe)&&S[Qe]!=null)if(Qe==="style"){var ge=S[Qe];for(W in ge)ge.hasOwnProperty(W)&&(i||(i={}),i[W]="")}else Qe!=="dangerouslySetInnerHTML"&&Qe!=="children"&&Qe!=="suppressContentEditableWarning"&&Qe!=="suppressHydrationWarning"&&Qe!=="autoFocus"&&(u.hasOwnProperty(Qe)?O||(O=[]):(O=O||[]).push(Qe,null));for(Qe in f){var Ae=f[Qe];if(ge=S!=null?S[Qe]:void 0,f.hasOwnProperty(Qe)&&Ae!==ge&&(Ae!=null||ge!=null))if(Qe==="style")if(ge){for(W in ge)!ge.hasOwnProperty(W)||Ae&&Ae.hasOwnProperty(W)||(i||(i={}),i[W]="");for(W in Ae)Ae.hasOwnProperty(W)&&ge[W]!==Ae[W]&&(i||(i={}),i[W]=Ae[W])}else i||(O||(O=[]),O.push(Qe,i)),i=Ae;else Qe==="dangerouslySetInnerHTML"?(Ae=Ae?Ae.__html:void 0,ge=ge?ge.__html:void 0,Ae!=null&&ge!==Ae&&(O=O||[]).push(Qe,Ae)):Qe==="children"?typeof Ae!="string"&&typeof Ae!="number"||(O=O||[]).push(Qe,""+Ae):Qe!=="suppressContentEditableWarning"&&Qe!=="suppressHydrationWarning"&&(u.hasOwnProperty(Qe)?(Ae!=null&&Qe==="onScroll"&&dt("scroll",t),O||ge===Ae||(O=[])):(O=O||[]).push(Qe,Ae))}i&&(O=O||[]).push("style",i);var Qe=O;(n.updateQueue=Qe)&&(n.flags|=4)}},sc=function(t,n,i,f){i!==f&&(n.flags|=4)};function is(t,n){if(!zn)switch(t.tailMode){case"hidden":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var f=null;i!==null;)i.alternate!==null&&(f=i),i=i.sibling;f===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:f.sibling=null}}function ro(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,f=0;if(n)for(var S=t.child;S!==null;)i|=S.lanes|S.childLanes,f|=S.subtreeFlags&14680064,f|=S.flags&14680064,S.return=t,S=S.sibling;else for(S=t.child;S!==null;)i|=S.lanes|S.childLanes,f|=S.subtreeFlags,f|=S.flags,S.return=t,S=S.sibling;return t.subtreeFlags|=f,t.childLanes=i,n}function Yc(t,n,i){var f=n.pendingProps;switch(Yo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ro(n),null;case 1:return Fn(n.type)&&Er(),ro(n),null;case 3:return f=n.stateNode,br(),Dn(Fr),Dn(Vn),su(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(t===null||t.child===null)&&(mr(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ur!==null&&(dl(Ur),Ur=null))),el(t,n),ro(n),null;case 5:Zr(n);var S=Kt(Yi.current);if(i=n.type,t!==null&&n.stateNode!=null)uc(t,n,i,f,S),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!f){if(n.stateNode===null)throw Error(r(166));return ro(n),null}if(t=Kt(bo.current),mr(n)){f=n.stateNode,i=n.type;var O=n.memoizedProps;switch(f[Un]=n,f[or]=O,t=(n.mode&1)!==0,i){case"dialog":dt("cancel",f),dt("close",f);break;case"iframe":case"object":case"embed":dt("load",f);break;case"video":case"audio":for(S=0;S<Ct.length;S++)dt(Ct[S],f);break;case"source":dt("error",f);break;case"img":case"image":case"link":dt("error",f),dt("load",f);break;case"details":dt("toggle",f);break;case"input":oe(f,O),dt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!O.multiple},dt("invalid",f);break;case"textarea":De(f,O),dt("invalid",f)}Ie(i,O),S=null;for(var W in O)if(O.hasOwnProperty(W)){var ge=O[W];W==="children"?typeof ge=="string"?f.textContent!==ge&&(O.suppressHydrationWarning!==!0&&Yt(f.textContent,ge,t),S=["children",ge]):typeof ge=="number"&&f.textContent!==""+ge&&(O.suppressHydrationWarning!==!0&&Yt(f.textContent,ge,t),S=["children",""+ge]):u.hasOwnProperty(W)&&ge!=null&&W==="onScroll"&&dt("scroll",f)}switch(i){case"input":Xe(f),me(f,O,!0);break;case"textarea":Xe(f),bt(f);break;case"select":case"option":break;default:typeof O.onClick=="function"&&(f.onclick=ln)}f=S,n.updateQueue=f,f!==null&&(n.flags|=4)}else{W=S.nodeType===9?S:S.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=at(i)),t==="http://www.w3.org/1999/xhtml"?i==="script"?(t=W.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof f.is=="string"?t=W.createElement(i,{is:f.is}):(t=W.createElement(i),i==="select"&&(W=t,f.multiple?W.multiple=!0:f.size&&(W.size=f.size))):t=W.createElementNS(t,i),t[Un]=n,t[or]=f,ic(t,n,!1,!1),n.stateNode=t;e:{switch(W=Oe(i,f),i){case"dialog":dt("cancel",t),dt("close",t),S=f;break;case"iframe":case"object":case"embed":dt("load",t),S=f;break;case"video":case"audio":for(S=0;S<Ct.length;S++)dt(Ct[S],t);S=f;break;case"source":dt("error",t),S=f;break;case"img":case"image":case"link":dt("error",t),dt("load",t),S=f;break;case"details":dt("toggle",t),S=f;break;case"input":oe(t,f),S=Ye(t,f),dt("invalid",t);break;case"option":S=f;break;case"select":t._wrapperState={wasMultiple:!!f.multiple},S=D({},f,{value:void 0}),dt("invalid",t);break;case"textarea":De(t,f),S=ye(t,f),dt("invalid",t);break;default:S=f}Ie(i,S),ge=S;for(O in ge)if(ge.hasOwnProperty(O)){var Ae=ge[O];O==="style"?ne(t,Ae):O==="dangerouslySetInnerHTML"?(Ae=Ae?Ae.__html:void 0,Ae!=null&&Bt(t,Ae)):O==="children"?typeof Ae=="string"?(i!=="textarea"||Ae!=="")&&Ot(t,Ae):typeof Ae=="number"&&Ot(t,""+Ae):O!=="suppressContentEditableWarning"&&O!=="suppressHydrationWarning"&&O!=="autoFocus"&&(u.hasOwnProperty(O)?Ae!=null&&O==="onScroll"&&dt("scroll",t):Ae!=null&&B(t,O,Ae,W))}switch(i){case"input":Xe(t),me(t,f,!1);break;case"textarea":Xe(t),bt(t);break;case"option":f.value!=null&&t.setAttribute("value",""+ae(f.value));break;case"select":t.multiple=!!f.multiple,O=f.value,O!=null?ve(t,!!f.multiple,O,!1):f.defaultValue!=null&&ve(t,!!f.multiple,f.defaultValue,!0);break;default:typeof S.onClick=="function"&&(t.onclick=ln)}switch(i){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ro(n),null;case 6:if(t&&n.stateNode!=null)sc(t,n,t.memoizedProps,f);else{if(typeof f!="string"&&n.stateNode===null)throw Error(r(166));if(i=Kt(Yi.current),Kt(bo.current),mr(n)){if(f=n.stateNode,i=n.memoizedProps,f[Un]=n,(O=f.nodeValue!==i)&&(t=Xr,t!==null))switch(t.tag){case 3:Yt(f.nodeValue,i,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Yt(f.nodeValue,i,(t.mode&1)!==0)}O&&(n.flags|=4)}else f=(i.nodeType===9?i:i.ownerDocument).createTextNode(f),f[Un]=n,n.stateNode=f}return ro(n),null;case 13:if(Dn(Rr),f=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(zn&&Cr!==null&&n.mode&1&&!(n.flags&128))Or(),Jr(),n.flags|=98560,O=!1;else if(O=mr(n),f!==null&&f.dehydrated!==null){if(t===null){if(!O)throw Error(r(318));if(O=n.memoizedState,O=O!==null?O.dehydrated:null,!O)throw Error(r(317));O[Un]=n}else Jr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ro(n),O=!1}else Ur!==null&&(dl(Ur),Ur=null),O=!0;if(!O)return n.flags&65536?n:null}return n.flags&128?(n.lanes=i,n):(f=f!==null,f!==(t!==null&&t.memoizedState!==null)&&f&&(n.child.flags|=8192,n.mode&1&&(t===null||Rr.current&1?Ma===0&&(Ma=3):pl())),n.updateQueue!==null&&(n.flags|=4),ro(n),null);case 4:return br(),el(t,n),t===null&&jt(n.stateNode.containerInfo),ro(n),null;case 10:return eo(n.type._context),ro(n),null;case 17:return Fn(n.type)&&Er(),ro(n),null;case 19:if(Dn(Rr),O=n.memoizedState,O===null)return ro(n),null;if(f=(n.flags&128)!==0,W=O.rendering,W===null)if(f)is(O,!1);else{if(Ma!==0||t!==null&&t.flags&128)for(t=n.child;t!==null;){if(W=uu(t),W!==null){for(n.flags|=128,is(O,!1),f=W.updateQueue,f!==null&&(n.updateQueue=f,n.flags|=4),n.subtreeFlags=0,f=i,i=n.child;i!==null;)O=i,t=f,O.flags&=14680066,W=O.alternate,W===null?(O.childLanes=0,O.lanes=t,O.child=null,O.subtreeFlags=0,O.memoizedProps=null,O.memoizedState=null,O.updateQueue=null,O.dependencies=null,O.stateNode=null):(O.childLanes=W.childLanes,O.lanes=W.lanes,O.child=W.child,O.subtreeFlags=0,O.deletions=null,O.memoizedProps=W.memoizedProps,O.memoizedState=W.memoizedState,O.updateQueue=W.updateQueue,O.type=W.type,t=W.dependencies,O.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),i=i.sibling;return In(Rr,Rr.current&1|2),n.child}t=t.sibling}O.tail!==null&&Nn()>Qu&&(n.flags|=128,f=!0,is(O,!1),n.lanes=4194304)}else{if(!f)if(t=uu(W),t!==null){if(n.flags|=128,f=!0,i=t.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),is(O,!0),O.tail===null&&O.tailMode==="hidden"&&!W.alternate&&!zn)return ro(n),null}else 2*Nn()-O.renderingStartTime>Qu&&i!==1073741824&&(n.flags|=128,f=!0,is(O,!1),n.lanes=4194304);O.isBackwards?(W.sibling=n.child,n.child=W):(i=O.last,i!==null?i.sibling=W:n.child=W,O.last=W)}return O.tail!==null?(n=O.tail,O.rendering=n,O.tail=n.sibling,O.renderingStartTime=Nn(),n.sibling=null,i=Rr.current,In(Rr,f?i&1|2:i&1),n):(ro(n),null);case 22:case 23:return vl(),f=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==f&&(n.flags|=8192),f&&n.mode&1?zo&1073741824&&(ro(n),n.subtreeFlags&6&&(n.flags|=8192)):ro(n),null;case 24:return null;case 25:return null}throw Error(r(156,n.tag))}function Qc(t,n){switch(Yo(n),n.tag){case 1:return Fn(n.type)&&Er(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return br(),Dn(Fr),Dn(Vn),su(),t=n.flags,t&65536&&!(t&128)?(n.flags=t&-65537|128,n):null;case 5:return Zr(n),null;case 13:if(Dn(Rr),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Jr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Dn(Rr),null;case 4:return br(),null;case 10:return eo(n.type._context),null;case 22:case 23:return vl(),null;case 24:return null;default:return null}}var Is=!1,ao=!1,Xc=typeof WeakSet=="function"?WeakSet:Set,Qt=null;function Vu(t,n){var i=t.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(f){oa(t,n,f)}else i.current=null}function tl(t,n,i){try{i()}catch(f){oa(t,n,f)}}var lc=!1;function Jc(t,n){if(en=yi,t=$u(),bu(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var f=i.getSelection&&i.getSelection();if(f&&f.rangeCount!==0){i=f.anchorNode;var S=f.anchorOffset,O=f.focusNode;f=f.focusOffset;try{i.nodeType,O.nodeType}catch(Rt){i=null;break e}var W=0,ge=-1,Ae=-1,Qe=0,gt=0,Et=t,yt=null;t:for(;;){for(var $t;Et!==i||S!==0&&Et.nodeType!==3||(ge=W+S),Et!==O||f!==0&&Et.nodeType!==3||(Ae=W+f),Et.nodeType===3&&(W+=Et.nodeValue.length),($t=Et.firstChild)!==null;)yt=Et,Et=$t;for(;;){if(Et===t)break t;if(yt===i&&++Qe===S&&(ge=W),yt===O&&++gt===f&&(Ae=W),($t=Et.nextSibling)!==null)break;Et=yt,yt=Et.parentNode}Et=$t}i=ge===-1||Ae===-1?null:{start:ge,end:Ae}}else i=null}i=i||{start:0,end:0}}else i=null;for(Kn={focusedElem:t,selectionRange:i},yi=!1,Qt=n;Qt!==null;)if(n=Qt,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Qt=t;else for(;Qt!==null;){n=Qt;try{var _t=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(_t!==null){var tn=_t.memoizedProps,ma=_t.memoizedState,ke=n.stateNode,Ne=ke.getSnapshotBeforeUpdate(n.elementType===n.type?tn:Ga(n.type,tn),ma);ke.__reactInternalSnapshotBeforeUpdate=Ne}break;case 3:var We=n.stateNode.containerInfo;We.nodeType===1?We.textContent="":We.nodeType===9&&We.documentElement&&We.removeChild(We.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(Rt){oa(n,n.return,Rt)}if(t=n.sibling,t!==null){t.return=n.return,Qt=t;break}Qt=n.return}return _t=lc,lc=!1,_t}function us(t,n,i){var f=n.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var S=f=f.next;do{if((S.tag&t)===t){var O=S.destroy;S.destroy=void 0,O!==void 0&&tl(n,i,O)}S=S.next}while(S!==f)}}function xs(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var f=i.create;i.destroy=f()}i=i.next}while(i!==n)}}function nl(t){var n=t.ref;if(n!==null){var i=t.stateNode;switch(t.tag){case 5:t=i;break;default:t=i}typeof n=="function"?n(t):n.current=t}}function cc(t){var n=t.alternate;n!==null&&(t.alternate=null,cc(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[Un],delete n[or],delete n[Wr],delete n[vr],delete n[Ca])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dc(t){return t.tag===5||t.tag===3||t.tag===4}function fc(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dc(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rl(t,n,i){var f=t.tag;if(f===5||f===6)t=t.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(t,n):i.insertBefore(t,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(t,i)):(n=i,n.appendChild(t)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=ln));else if(f!==4&&(t=t.child,t!==null))for(rl(t,n,i),t=t.sibling;t!==null;)rl(t,n,i),t=t.sibling}function al(t,n,i){var f=t.tag;if(f===5||f===6)t=t.stateNode,n?i.insertBefore(t,n):i.appendChild(t);else if(f!==4&&(t=t.child,t!==null))for(al(t,n,i),t=t.sibling;t!==null;)al(t,n,i),t=t.sibling}var Va=null,li=!1;function lu(t,n,i){for(i=i.child;i!==null;)vc(t,n,i),i=i.sibling}function vc(t,n,i){if(ua&&typeof ua.onCommitFiberUnmount=="function")try{ua.onCommitFiberUnmount(Qa,i)}catch(ge){}switch(i.tag){case 5:ao||Vu(i,n);case 6:var f=Va,S=li;Va=null,lu(t,n,i),Va=f,li=S,Va!==null&&(li?(t=Va,i=i.stateNode,t.nodeType===8?t.parentNode.removeChild(i):t.removeChild(i)):Va.removeChild(i.stateNode));break;case 18:Va!==null&&(li?(t=Va,i=i.stateNode,t.nodeType===8?ar(t.parentNode,i):t.nodeType===1&&ar(t,i),ri(t)):ar(Va,i.stateNode));break;case 4:f=Va,S=li,Va=i.stateNode.containerInfo,li=!0,lu(t,n,i),Va=f,li=S;break;case 0:case 11:case 14:case 15:if(!ao&&(f=i.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){S=f=f.next;do{var O=S,W=O.destroy;O=O.tag,W!==void 0&&(O&2||O&4)&&tl(i,n,W),S=S.next}while(S!==f)}lu(t,n,i);break;case 1:if(!ao&&(Vu(i,n),f=i.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=i.memoizedProps,f.state=i.memoizedState,f.componentWillUnmount()}catch(ge){oa(i,n,ge)}lu(t,n,i);break;case 21:lu(t,n,i);break;case 22:i.mode&1?(ao=(f=ao)||i.memoizedState!==null,lu(t,n,i),ao=f):lu(t,n,i);break;default:lu(t,n,i)}}function pc(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var i=t.stateNode;i===null&&(i=t.stateNode=new Xc),n.forEach(function(f){var S=id.bind(null,t,f);i.has(f)||(i.add(f),f.then(S,S))})}}function ci(t,n){var i=n.deletions;if(i!==null)for(var f=0;f<i.length;f++){var S=i[f];try{var O=t,W=n,ge=W;e:for(;ge!==null;){switch(ge.tag){case 5:Va=ge.stateNode,li=!1;break e;case 3:Va=ge.stateNode.containerInfo,li=!0;break e;case 4:Va=ge.stateNode.containerInfo,li=!0;break e}ge=ge.return}if(Va===null)throw Error(r(160));vc(O,W,S),Va=null,li=!1;var Ae=S.alternate;Ae!==null&&(Ae.return=null),S.return=null}catch(Qe){oa(S,n,Qe)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)mc(n,t),n=n.sibling}function mc(t,n){var i=t.alternate,f=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ci(n,t),Ri(t),f&4){try{us(3,t,t.return),xs(3,t)}catch(tn){oa(t,t.return,tn)}try{us(5,t,t.return)}catch(tn){oa(t,t.return,tn)}}break;case 1:ci(n,t),Ri(t),f&512&&i!==null&&Vu(i,i.return);break;case 5:if(ci(n,t),Ri(t),f&512&&i!==null&&Vu(i,i.return),t.flags&32){var S=t.stateNode;try{Ot(S,"")}catch(tn){oa(t,t.return,tn)}}if(f&4&&(S=t.stateNode,S!=null)){var O=t.memoizedProps,W=i!==null?i.memoizedProps:O,ge=t.type,Ae=t.updateQueue;if(t.updateQueue=null,Ae!==null)try{ge==="input"&&O.type==="radio"&&O.name!=null&&fe(S,O),Oe(ge,W);var Qe=Oe(ge,O);for(W=0;W<Ae.length;W+=2){var gt=Ae[W],Et=Ae[W+1];gt==="style"?ne(S,Et):gt==="dangerouslySetInnerHTML"?Bt(S,Et):gt==="children"?Ot(S,Et):B(S,gt,Et,Qe)}switch(ge){case"input":pe(S,O);break;case"textarea":ze(S,O);break;case"select":var yt=S._wrapperState.wasMultiple;S._wrapperState.wasMultiple=!!O.multiple;var $t=O.value;$t!=null?ve(S,!!O.multiple,$t,!1):yt!==!!O.multiple&&(O.defaultValue!=null?ve(S,!!O.multiple,O.defaultValue,!0):ve(S,!!O.multiple,O.multiple?[]:"",!1))}S[or]=O}catch(tn){oa(t,t.return,tn)}}break;case 6:if(ci(n,t),Ri(t),f&4){if(t.stateNode===null)throw Error(r(162));S=t.stateNode,O=t.memoizedProps;try{S.nodeValue=O}catch(tn){oa(t,t.return,tn)}}break;case 3:if(ci(n,t),Ri(t),f&4&&i!==null&&i.memoizedState.isDehydrated)try{ri(n.containerInfo)}catch(tn){oa(t,t.return,tn)}break;case 4:ci(n,t),Ri(t);break;case 13:ci(n,t),Ri(t),S=t.child,S.flags&8192&&(O=S.memoizedState!==null,S.stateNode.isHidden=O,!O||S.alternate!==null&&S.alternate.memoizedState!==null||(ul=Nn())),f&4&&pc(t);break;case 22:if(gt=i!==null&&i.memoizedState!==null,t.mode&1?(ao=(Qe=ao)||gt,ci(n,t),ao=Qe):ci(n,t),Ri(t),f&8192){if(Qe=t.memoizedState!==null,(t.stateNode.isHidden=Qe)&&!gt&&t.mode&1)for(Qt=t,gt=t.child;gt!==null;){for(Et=Qt=gt;Qt!==null;){switch(yt=Qt,$t=yt.child,yt.tag){case 0:case 11:case 14:case 15:us(4,yt,yt.return);break;case 1:Vu(yt,yt.return);var _t=yt.stateNode;if(typeof _t.componentWillUnmount=="function"){f=yt,i=yt.return;try{n=f,_t.props=n.memoizedProps,_t.state=n.memoizedState,_t.componentWillUnmount()}catch(tn){oa(f,i,tn)}}break;case 5:Vu(yt,yt.return);break;case 22:if(yt.memoizedState!==null){gc(Et);continue}}$t!==null?($t.return=yt,Qt=$t):gc(Et)}gt=gt.sibling}e:for(gt=null,Et=t;;){if(Et.tag===5){if(gt===null){gt=Et;try{S=Et.stateNode,Qe?(O=S.style,typeof O.setProperty=="function"?O.setProperty("display","none","important"):O.display="none"):(ge=Et.stateNode,Ae=Et.memoizedProps.style,W=Ae!=null&&Ae.hasOwnProperty("display")?Ae.display:null,ge.style.display=U("display",W))}catch(tn){oa(t,t.return,tn)}}}else if(Et.tag===6){if(gt===null)try{Et.stateNode.nodeValue=Qe?"":Et.memoizedProps}catch(tn){oa(t,t.return,tn)}}else if((Et.tag!==22&&Et.tag!==23||Et.memoizedState===null||Et===t)&&Et.child!==null){Et.child.return=Et,Et=Et.child;continue}if(Et===t)break e;for(;Et.sibling===null;){if(Et.return===null||Et.return===t)break e;gt===Et&&(gt=null),Et=Et.return}gt===Et&&(gt=null),Et.sibling.return=Et.return,Et=Et.sibling}}break;case 19:ci(n,t),Ri(t),f&4&&pc(t);break;case 21:break;default:ci(n,t),Ri(t)}}function Ri(t){var n=t.flags;if(n&2){try{e:{for(var i=t.return;i!==null;){if(dc(i)){var f=i;break e}i=i.return}throw Error(r(160))}switch(f.tag){case 5:var S=f.stateNode;f.flags&32&&(Ot(S,""),f.flags&=-33);var O=fc(t);al(t,O,S);break;case 3:case 4:var W=f.stateNode.containerInfo,ge=fc(t);rl(t,ge,W);break;default:throw Error(r(161))}}catch(Ae){oa(t,t.return,Ae)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function _c(t,n,i){Qt=t,hc(t,n,i)}function hc(t,n,i){for(var f=(t.mode&1)!==0;Qt!==null;){var S=Qt,O=S.child;if(S.tag===22&&f){var W=S.memoizedState!==null||Is;if(!W){var ge=S.alternate,Ae=ge!==null&&ge.memoizedState!==null||ao;ge=Is;var Qe=ao;if(Is=W,(ao=Ae)&&!Qe)for(Qt=S;Qt!==null;)W=Qt,Ae=W.child,W.tag===22&&W.memoizedState!==null?Ic(S):Ae!==null?(Ae.return=W,Qt=Ae):Ic(S);for(;O!==null;)Qt=O,hc(O,n,i),O=O.sibling;Qt=S,Is=ge,ao=Qe}yc(t,n,i)}else S.subtreeFlags&8772&&O!==null?(O.return=S,Qt=O):yc(t,n,i)}}function yc(t){for(;Qt!==null;){var n=Qt;if(n.flags&8772){var i=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ao||xs(5,n);break;case 1:var f=n.stateNode;if(n.flags&4&&!ao)if(i===null)f.componentDidMount();else{var S=n.elementType===n.type?i.memoizedProps:Ga(n.type,i.memoizedProps);f.componentDidUpdate(S,i.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var O=n.updateQueue;O!==null&&ra(n,O,f);break;case 3:var W=n.updateQueue;if(W!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}ra(n,W,i)}break;case 5:var ge=n.stateNode;if(i===null&&n.flags&4){i=ge;var Ae=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":Ae.autoFocus&&i.focus();break;case"img":Ae.src&&(i.src=Ae.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var Qe=n.alternate;if(Qe!==null){var gt=Qe.memoizedState;if(gt!==null){var Et=gt.dehydrated;Et!==null&&ri(Et)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}ao||n.flags&512&&nl(n)}catch(yt){oa(n,n.return,yt)}}if(n===t){Qt=null;break}if(i=n.sibling,i!==null){i.return=n.return,Qt=i;break}Qt=n.return}}function gc(t){for(;Qt!==null;){var n=Qt;if(n===t){Qt=null;break}var i=n.sibling;if(i!==null){i.return=n.return,Qt=i;break}Qt=n.return}}function Ic(t){for(;Qt!==null;){var n=Qt;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{xs(4,n)}catch(Ae){oa(n,i,Ae)}break;case 1:var f=n.stateNode;if(typeof f.componentDidMount=="function"){var S=n.return;try{f.componentDidMount()}catch(Ae){oa(n,S,Ae)}}var O=n.return;try{nl(n)}catch(Ae){oa(n,O,Ae)}break;case 5:var W=n.return;try{nl(n)}catch(Ae){oa(n,W,Ae)}}}catch(Ae){oa(n,n.return,Ae)}if(n===t){Qt=null;break}var ge=n.sibling;if(ge!==null){ge.return=n.return,Qt=ge;break}Qt=n.return}}var qc=Math.ceil,Ss=C.ReactCurrentDispatcher,ol=C.ReactCurrentOwner,ei=C.ReactCurrentBatchConfig,sr=0,ka=null,Sa=null,Ya=0,zo=0,Yu=Qr(0),Ma=0,ss=null,Cu=0,Es=0,il=0,ls=null,Po=null,ul=0,Qu=1/0,Xi=null,bs=!1,sl=null,cu=null,Ts=!1,du=null,Ps=0,cs=0,ll=null,Cs=-1,Os=0;function Io(){return sr&6?Nn():Cs!==-1?Cs:Cs=Nn()}function fu(t){return t.mode&1?sr&2&&Ya!==0?Ya&-Ya:ru.transition!==null?(Os===0&&(Os=Yr()),Os):(t=rr,t!==0||(t=window.event,t=t===void 0?16:Ni(t.type)),t):1}function di(t,n,i,f){if(50<cs)throw cs=0,ll=null,Error(r(185));yr(t,i,f),(!(sr&2)||t!==ka)&&(t===ka&&(!(sr&2)&&(Es|=i),Ma===4&&vu(t,Ya)),Co(t,f),i===1&&sr===0&&!(n.mode&1)&&(Qu=Nn()+500,ta&&da()))}function Co(t,n){var i=t.callbackNode;xo(t,n);var f=Ea(t,t===ka?Ya:0);if(f===0)i!==null&&bn(i),t.callbackNode=null,t.callbackPriority=0;else if(n=f&-f,t.callbackPriority!==n){if(i!=null&&bn(i),n===1)t.tag===0?Oa(Sc.bind(null,t)):Fa(Sc.bind(null,t)),kn(function(){!(sr&6)&&da()}),i=null;else{switch(za(f)){case 1:i=wa;break;case 4:i=Ua;break;case 16:i=ia;break;case 536870912:i=Oo;break;default:i=ia}i=Ac(i,xc.bind(null,t))}t.callbackPriority=n,t.callbackNode=i}}function xc(t,n){if(Cs=-1,Os=0,sr&6)throw Error(r(327));var i=t.callbackNode;if(Xu()&&t.callbackNode!==i)return null;var f=Ea(t,t===ka?Ya:0);if(f===0)return null;if(f&30||f&t.expiredLanes||n)n=Rs(t,f);else{n=f;var S=sr;sr|=2;var O=bc();(ka!==t||Ya!==n)&&(Xi=null,Qu=Nn()+500,Ru(t,n));do try{nd();break}catch(ge){Ec(t,ge)}while(1);Hi(),Ss.current=O,sr=S,Sa!==null?n=0:(ka=null,Ya=0,n=Ma)}if(n!==0){if(n===2&&(S=Ro(t),S!==0&&(f=S,n=cl(t,S))),n===1)throw i=ss,Ru(t,0),vu(t,f),Co(t,Nn()),i;if(n===6)vu(t,f);else{if(S=t.current.alternate,!(f&30)&&!ed(S)&&(n=Rs(t,f),n===2&&(O=Ro(t),O!==0&&(f=O,n=cl(t,O))),n===1))throw i=ss,Ru(t,0),vu(t,f),Co(t,Nn()),i;switch(t.finishedWork=S,t.finishedLanes=f,n){case 0:case 1:throw Error(r(345));case 2:Au(t,Po,Xi);break;case 3:if(vu(t,f),(f&130023424)===f&&(n=ul+500-Nn(),10<n)){if(Ea(t,0)!==0)break;if(S=t.suspendedLanes,(S&f)!==f){Io(),t.pingedLanes|=t.suspendedLanes&S;break}t.timeoutHandle=Jn(Au.bind(null,t,Po,Xi),n);break}Au(t,Po,Xi);break;case 4:if(vu(t,f),(f&4194240)===f)break;for(n=t.eventTimes,S=-1;0<f;){var W=31-Vr(f);O=1<<W,W=n[W],W>S&&(S=W),f&=~O}if(f=S,f=Nn()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*qc(f/1960))-f,10<f){t.timeoutHandle=Jn(Au.bind(null,t,Po,Xi),f);break}Au(t,Po,Xi);break;case 5:Au(t,Po,Xi);break;default:throw Error(r(329))}}}return Co(t,Nn()),t.callbackNode===i?xc.bind(null,t):null}function cl(t,n){var i=ls;return t.current.memoizedState.isDehydrated&&(Ru(t,n).flags|=256),t=Rs(t,n),t!==2&&(n=Po,Po=i,n!==null&&dl(n)),t}function dl(t){Po===null?Po=t:Po.push.apply(Po,t)}function ed(t){for(var n=t;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var f=0;f<i.length;f++){var S=i[f],O=S.getSnapshot;S=S.value;try{if(!Xa(O(),S))return!1}catch(W){return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function vu(t,n){for(n&=~il,n&=~Es,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var i=31-Vr(n),f=1<<i;t[i]=-1,n&=~f}}function Sc(t){if(sr&6)throw Error(r(327));Xu();var n=Ea(t,0);if(!(n&1))return Co(t,Nn()),null;var i=Rs(t,n);if(t.tag!==0&&i===2){var f=Ro(t);f!==0&&(n=f,i=cl(t,f))}if(i===1)throw i=ss,Ru(t,0),vu(t,n),Co(t,Nn()),i;if(i===6)throw Error(r(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,Au(t,Po,Xi),Co(t,Nn()),null}function fl(t,n){var i=sr;sr|=1;try{return t(n)}finally{sr=i,sr===0&&(Qu=Nn()+500,ta&&da())}}function Ou(t){du!==null&&du.tag===0&&!(sr&6)&&Xu();var n=sr;sr|=1;var i=ei.transition,f=rr;try{if(ei.transition=null,rr=1,t)return t()}finally{rr=f,ei.transition=i,sr=n,!(sr&6)&&da()}}function vl(){zo=Yu.current,Dn(Yu)}function Ru(t,n){t.finishedWork=null,t.finishedLanes=0;var i=t.timeoutHandle;if(i!==-1&&(t.timeoutHandle=-1,xr(i)),Sa!==null)for(i=Sa.return;i!==null;){var f=i;switch(Yo(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Er();break;case 3:br(),Dn(Fr),Dn(Vn),su();break;case 5:Zr(f);break;case 4:br();break;case 13:Dn(Rr);break;case 19:Dn(Rr);break;case 10:eo(f.type._context);break;case 22:case 23:vl()}i=i.return}if(ka=t,Sa=t=pu(t.current,null),Ya=zo=n,Ma=0,ss=null,il=Es=Cu=0,Po=ls=null,Ia!==null){for(n=0;n<Ia.length;n++)if(i=Ia[n],f=i.interleaved,f!==null){i.interleaved=null;var S=f.next,O=i.pending;if(O!==null){var W=O.next;O.next=S,f.next=W}i.pending=f}Ia=null}return t}function Ec(t,n){do{var i=Sa;try{if(Hi(),fs.current=hs,vs){for(var f=_r.memoizedState;f!==null;){var S=f.queue;S!==null&&(S.pending=null),f=f.next}vs=!1}if(Pu=0,Ba=Aa=_r=null,ns=!1,rs=0,ol.current=null,i===null||i.return===null){Ma=1,ss=n,Sa=null;break}e:{var O=t,W=i.return,ge=i,Ae=n;if(n=Ya,ge.flags|=32768,Ae!==null&&typeof Ae=="object"&&typeof Ae.then=="function"){var Qe=Ae,gt=ge,Et=gt.tag;if(!(gt.mode&1)&&(Et===0||Et===11||Et===15)){var yt=gt.alternate;yt?(gt.updateQueue=yt.updateQueue,gt.memoizedState=yt.memoizedState,gt.lanes=yt.lanes):(gt.updateQueue=null,gt.memoizedState=null)}var $t=Vl(W);if($t!==null){$t.flags&=-257,Yl($t,W,ge,O,n),$t.mode&1&&Gl(O,Qe,n),n=$t,Ae=Qe;var _t=n.updateQueue;if(_t===null){var tn=new Set;tn.add(Ae),n.updateQueue=tn}else _t.add(Ae);break e}else{if(!(n&1)){Gl(O,Qe,n),pl();break e}Ae=Error(r(426))}}else if(zn&&ge.mode&1){var ma=Vl(W);if(ma!==null){!(ma.flags&65536)&&(ma.flags|=256),Yl(ma,W,ge,O,n),vo(Gu(Ae,ge));break e}}O=Ae=Gu(Ae,ge),Ma!==4&&(Ma=2),ls===null?ls=[O]:ls.push(O),O=W;do{switch(O.tag){case 3:O.flags|=65536,n&=-n,O.lanes|=n;var ke=Kl(O,Ae,n);tr(O,ke);break e;case 1:ge=Ae;var Ne=O.type,We=O.stateNode;if(!(O.flags&128)&&(typeof Ne.getDerivedStateFromError=="function"||We!==null&&typeof We.componentDidCatch=="function"&&(cu===null||!cu.has(We)))){O.flags|=65536,n&=-n,O.lanes|=n;var Rt=Wl(O,ge,n);tr(O,Rt);break e}}O=O.return}while(O!==null)}Pc(i)}catch(an){n=an,Sa===i&&i!==null&&(Sa=i=i.return);continue}break}while(1)}function bc(){var t=Ss.current;return Ss.current=hs,t===null?hs:t}function pl(){(Ma===0||Ma===3||Ma===2)&&(Ma=4),ka===null||!(Cu&268435455)&&!(Es&268435455)||vu(ka,Ya)}function Rs(t,n){var i=sr;sr|=2;var f=bc();(ka!==t||Ya!==n)&&(Xi=null,Ru(t,n));do try{td();break}catch(S){Ec(t,S)}while(1);if(Hi(),sr=i,Ss.current=f,Sa!==null)throw Error(r(261));return ka=null,Ya=0,Ma}function td(){for(;Sa!==null;)Tc(Sa)}function nd(){for(;Sa!==null&&!qn();)Tc(Sa)}function Tc(t){var n=Rc(t.alternate,t,zo);t.memoizedProps=t.pendingProps,n===null?Pc(t):Sa=n,ol.current=null}function Pc(t){var n=t;do{var i=n.alternate;if(t=n.return,n.flags&32768){if(i=Qc(i,n),i!==null){i.flags&=32767,Sa=i;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ma=6,Sa=null;return}}else if(i=Yc(i,n,zo),i!==null){Sa=i;return}if(n=n.sibling,n!==null){Sa=n;return}Sa=n=t}while(n!==null);Ma===0&&(Ma=5)}function Au(t,n,i){var f=rr,S=ei.transition;try{ei.transition=null,rr=1,rd(t,n,i,f)}finally{ei.transition=S,rr=f}return null}function rd(t,n,i,f){do Xu();while(du!==null);if(sr&6)throw Error(r(327));i=t.finishedWork;var S=t.finishedLanes;if(i===null)return null;if(t.finishedWork=null,t.finishedLanes=0,i===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0;var O=i.lanes|i.childLanes;if(la(t,O),t===ka&&(Sa=ka=null,Ya=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||Ts||(Ts=!0,Ac(ia,function(){return Xu(),null})),O=(i.flags&15990)!==0,i.subtreeFlags&15990||O){O=ei.transition,ei.transition=null;var W=rr;rr=1;var ge=sr;sr|=4,ol.current=null,Jc(t,i),mc(i,t),ts(Kn),yi=!!en,Kn=en=null,t.current=i,_c(i,t,S),qr(),sr=ge,rr=W,ei.transition=O}else t.current=i;if(Ts&&(Ts=!1,du=t,Ps=S),O=t.pendingLanes,O===0&&(cu=null),Zo(i.stateNode,f),Co(t,Nn()),n!==null)for(f=t.onRecoverableError,i=0;i<n.length;i++)S=n[i],f(S.value,{componentStack:S.stack,digest:S.digest});if(bs)throw bs=!1,t=sl,sl=null,t;return Ps&1&&t.tag!==0&&Xu(),O=t.pendingLanes,O&1?t===ll?cs++:(cs=0,ll=t):cs=0,da(),null}function Xu(){if(du!==null){var t=za(Ps),n=ei.transition,i=rr;try{if(ei.transition=null,rr=16>t?16:t,du===null)var f=!1;else{if(t=du,du=null,Ps=0,sr&6)throw Error(r(331));var S=sr;for(sr|=4,Qt=t.current;Qt!==null;){var O=Qt,W=O.child;if(Qt.flags&16){var ge=O.deletions;if(ge!==null){for(var Ae=0;Ae<ge.length;Ae++){var Qe=ge[Ae];for(Qt=Qe;Qt!==null;){var gt=Qt;switch(gt.tag){case 0:case 11:case 15:us(8,gt,O)}var Et=gt.child;if(Et!==null)Et.return=gt,Qt=Et;else for(;Qt!==null;){gt=Qt;var yt=gt.sibling,$t=gt.return;if(cc(gt),gt===Qe){Qt=null;break}if(yt!==null){yt.return=$t,Qt=yt;break}Qt=$t}}}var _t=O.alternate;if(_t!==null){var tn=_t.child;if(tn!==null){_t.child=null;do{var ma=tn.sibling;tn.sibling=null,tn=ma}while(tn!==null)}}Qt=O}}if(O.subtreeFlags&2064&&W!==null)W.return=O,Qt=W;else e:for(;Qt!==null;){if(O=Qt,O.flags&2048)switch(O.tag){case 0:case 11:case 15:us(9,O,O.return)}var ke=O.sibling;if(ke!==null){ke.return=O.return,Qt=ke;break e}Qt=O.return}}var Ne=t.current;for(Qt=Ne;Qt!==null;){W=Qt;var We=W.child;if(W.subtreeFlags&2064&&We!==null)We.return=W,Qt=We;else e:for(W=Ne;Qt!==null;){if(ge=Qt,ge.flags&2048)try{switch(ge.tag){case 0:case 11:case 15:xs(9,ge)}}catch(an){oa(ge,ge.return,an)}if(ge===W){Qt=null;break e}var Rt=ge.sibling;if(Rt!==null){Rt.return=ge.return,Qt=Rt;break e}Qt=ge.return}}if(sr=S,da(),ua&&typeof ua.onPostCommitFiberRoot=="function")try{ua.onPostCommitFiberRoot(Qa,t)}catch(an){}f=!0}return f}finally{rr=i,ei.transition=n}}return!1}function Cc(t,n,i){n=Gu(i,n),n=Kl(t,n,1),t=mo(t,n,1),n=Io(),t!==null&&(yr(t,1,n),Co(t,n))}function oa(t,n,i){if(t.tag===3)Cc(t,t,i);else for(;n!==null;){if(n.tag===3){Cc(n,t,i);break}else if(n.tag===1){var f=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(cu===null||!cu.has(f))){t=Gu(i,t),t=Wl(n,t,1),n=mo(n,t,1),t=Io(),n!==null&&(yr(n,1,t),Co(n,t));break}}n=n.return}}function ad(t,n,i){var f=t.pingCache;f!==null&&f.delete(n),n=Io(),t.pingedLanes|=t.suspendedLanes&i,ka===t&&(Ya&i)===i&&(Ma===4||Ma===3&&(Ya&130023424)===Ya&&500>Nn()-ul?Ru(t,0):il|=i),Co(t,n)}function Oc(t,n){n===0&&(t.mode&1?(n=sa,sa<<=1,!(sa&130023424)&&(sa=4194304)):n=1);var i=Io();t=va(t,n),t!==null&&(yr(t,n,i),Co(t,i))}function od(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),Oc(t,i)}function id(t,n){var i=0;switch(t.tag){case 13:var f=t.stateNode,S=t.memoizedState;S!==null&&(i=S.retryLane);break;case 19:f=t.stateNode;break;default:throw Error(r(314))}f!==null&&f.delete(n),Oc(t,i)}var Rc;Rc=function(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps||Fr.current)To=!0;else{if(!(t.lanes&i)&&!(n.flags&128))return To=!1,Vc(t,n,i);To=!!(t.flags&131072)}else To=!1,zn&&n.flags&1048576&&_a(n,nr,n.index);switch(n.lanes=0,n.tag){case 2:var f=n.type;gs(t,n),t=n.pendingProps;var S=Lr(n,Vn.current);jo(n,i),S=zs(null,n,f,t,S,i);var O=Zs();return n.flags|=1,typeof S=="object"&&S!==null&&typeof S.render=="function"&&S.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Fn(f)?(O=!0,Br(n)):O=!1,n.memoizedState=S.state!==null&&S.state!==void 0?S.state:null,Ti(n),S.updater=yo,n.stateNode=S,S._reactInternals=n,pa(n,f,t,i),n=Qs(null,n,f,!0,O,i)):(n.tag=0,zn&&O&&ko(n),go(null,n,S,i),n=n.child),n;case 16:f=n.elementType;e:{switch(gs(t,n),t=n.pendingProps,S=f._init,f=S(f._payload),n.type=f,S=n.tag=sd(f),t=Ga(f,t),S){case 0:n=Ys(null,n,f,t,i);break e;case 1:n=ec(null,n,f,t,i);break e;case 11:n=Ql(null,n,f,t,i);break e;case 14:n=Xl(null,n,f,Ga(f.type,t),i);break e}throw Error(r(306,f,""))}return n;case 0:return f=n.type,S=n.pendingProps,S=n.elementType===f?S:Ga(f,S),Ys(t,n,f,S,i);case 1:return f=n.type,S=n.pendingProps,S=n.elementType===f?S:Ga(f,S),ec(t,n,f,S,i);case 3:e:{if(tc(n),t===null)throw Error(r(387));f=n.pendingProps,O=n.memoizedState,S=O.element,au(t,n),ur(n,f,null,i);var W=n.memoizedState;if(f=W.element,O.isDehydrated)if(O={element:f,isDehydrated:!1,cache:W.cache,pendingSuspenseBoundaries:W.pendingSuspenseBoundaries,transitions:W.transitions},n.updateQueue.baseState=O,n.memoizedState=O,n.flags&256){S=Gu(Error(r(423)),n),n=nc(t,n,f,i,S);break e}else if(f!==S){S=Gu(Error(r(424)),n),n=nc(t,n,f,i,S);break e}else for(Cr=vn(n.stateNode.containerInfo.firstChild),Xr=n,zn=!0,Ur=null,i=iu(n,null,f,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Jr(),f===S){n=Qi(t,n,i);break e}go(t,n,f,i)}n=n.child}return n;case 5:return aa(n),t===null&&An(n),f=n.type,S=n.pendingProps,O=t!==null?t.memoizedProps:null,W=S.children,Sn(f,S)?W=null:O!==null&&Sn(f,O)&&(n.flags|=32),ql(t,n),go(t,n,W,i),n.child;case 6:return t===null&&An(n),null;case 13:return rc(t,n,i);case 4:return Cn(n,n.stateNode.containerInfo),f=n.pendingProps,t===null?n.child=Uo(n,null,f,i):go(t,n,f,i),n.child;case 11:return f=n.type,S=n.pendingProps,S=n.elementType===f?S:Ga(f,S),Ql(t,n,f,S,i);case 7:return go(t,n,n.pendingProps,i),n.child;case 8:return go(t,n,n.pendingProps.children,i),n.child;case 12:return go(t,n,n.pendingProps.children,i),n.child;case 10:e:{if(f=n.type._context,S=n.pendingProps,O=n.memoizedProps,W=S.value,In(si,f._currentValue),f._currentValue=W,O!==null)if(Xa(O.value,W)){if(O.children===S.children&&!Fr.current){n=Qi(t,n,i);break e}}else for(O=n.child,O!==null&&(O.return=n);O!==null;){var ge=O.dependencies;if(ge!==null){W=O.child;for(var Ae=ge.firstContext;Ae!==null;){if(Ae.context===f){if(O.tag===1){Ae=to(-1,i&-i),Ae.tag=2;var Qe=O.updateQueue;if(Qe!==null){Qe=Qe.shared;var gt=Qe.pending;gt===null?Ae.next=Ae:(Ae.next=gt.next,gt.next=Ae),Qe.pending=Ae}}O.lanes|=i,Ae=O.alternate,Ae!==null&&(Ae.lanes|=i),Jo(O.return,i,n),ge.lanes|=i;break}Ae=Ae.next}}else if(O.tag===10)W=O.type===n.type?null:O.child;else if(O.tag===18){if(W=O.return,W===null)throw Error(r(341));W.lanes|=i,ge=W.alternate,ge!==null&&(ge.lanes|=i),Jo(W,i,n),W=O.sibling}else W=O.child;if(W!==null)W.return=O;else for(W=O;W!==null;){if(W===n){W=null;break}if(O=W.sibling,O!==null){O.return=W.return,W=O;break}W=W.return}O=W}go(t,n,S.children,i),n=n.child}return n;case 9:return S=n.type,f=n.pendingProps.children,jo(n,i),S=zr(S),f=f(S),n.flags|=1,go(t,n,f,i),n.child;case 14:return f=n.type,S=Ga(f,n.pendingProps),S=Ga(f.type,S),Xl(t,n,f,S,i);case 15:return Jl(t,n,n.type,n.pendingProps,i);case 17:return f=n.type,S=n.pendingProps,S=n.elementType===f?S:Ga(f,S),gs(t,n),n.tag=1,Fn(f)?(t=!0,Br(n)):t=!1,jo(n,i),Hu(n,f,S),pa(n,f,S,i),Qs(null,n,f,!0,t,i);case 19:return oc(t,n,i);case 22:return _l(t,n,i)}throw Error(r(156,n.tag))};function Ac(t,n){return Zn(t,n)}function ud(t,n,i,f){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,n,i,f){return new ud(t,n,i,f)}function ml(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sd(t){if(typeof t=="function")return ml(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Te)return 11;if(t===Y)return 14}return 2}function pu(t,n){var i=t.alternate;return i===null?(i=ti(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&14680064,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i}function As(t,n,i,f,S,O){var W=2;if(f=t,typeof t=="function")ml(t)&&(W=1);else if(typeof t=="string")W=5;else e:switch(t){case te:return Mu(i.children,S,O,n);case ee:W=8,S|=8;break;case _:return t=ti(12,i,n,S|2),t.elementType=_,t.lanes=O,t;case ie:return t=ti(13,i,n,S),t.elementType=ie,t.lanes=O,t;case Q:return t=ti(19,i,n,S),t.elementType=Q,t.lanes=O,t;case K:return Ms(i,S,O,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case de:W=10;break e;case be:W=9;break e;case Te:W=11;break e;case Y:W=14;break e;case k:W=16,f=null;break e}throw Error(r(130,t==null?t:typeof t,""))}return n=ti(W,i,n,S),n.elementType=t,n.type=f,n.lanes=O,n}function Mu(t,n,i,f){return t=ti(7,t,f,n),t.lanes=i,t}function Ms(t,n,i,f){return t=ti(22,t,f,n),t.elementType=K,t.lanes=i,t.stateNode={isHidden:!1},t}function hl(t,n,i){return t=ti(6,t,null,n),t.lanes=i,t}function yl(t,n,i){return n=ti(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function ld(t,n,i,f,S){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tr(0),this.expirationTimes=Tr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tr(0),this.identifierPrefix=f,this.onRecoverableError=S,this.mutableSourceEagerHydrationData=null}function gl(t,n,i,f,S,O,W,ge,Ae){return t=new ld(t,n,i,ge,Ae),n===1?(n=1,O===!0&&(n|=8)):n=0,O=ti(3,null,null,n),t.current=O,O.stateNode=t,O.memoizedState={element:f,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ti(O),t}function cd(t,n,i){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Z,key:f==null?null:""+f,children:t,containerInfo:n,implementation:i}}function Mc(t){if(!t)return ca;t=t._reactInternals;e:{if(pt(t)!==t||t.tag!==1)throw Error(r(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Fn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(r(171))}if(t.tag===1){var i=t.type;if(Fn(i))return Ja(t,i,n)}return n}function wc(t,n,i,f,S,O,W,ge,Ae){return t=gl(i,f,!0,t,S,O,W,ge,Ae),t.context=Mc(null),i=t.current,f=Io(),S=fu(i),O=to(f,S),O.callback=n!=null?n:null,mo(i,O,S),t.current.lanes=S,yr(t,S,f),Co(t,f),t}function ws(t,n,i,f){var S=n.current,O=Io(),W=fu(S);return i=Mc(i),n.context===null?n.context=i:n.pendingContext=i,n=to(O,W),n.payload={element:t},f=f===void 0?null:f,f!==null&&(n.callback=f),t=mo(S,n,W),t!==null&&(di(t,S,W,O),hr(t,S,W)),W}function Ns(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Nc(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function Il(t,n){Nc(t,n),(t=t.alternate)&&Nc(t,n)}function dd(){return null}var Lc=typeof reportError=="function"?reportError:function(t){console.error(t)};function xl(t){this._internalRoot=t}Ls.prototype.render=xl.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));ws(t,n,null,null)},Ls.prototype.unmount=xl.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Ou(function(){ws(null,t,null,null)}),n[_n]=null}};function Ls(t){this._internalRoot=t}Ls.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ji();t={blockedOn:null,target:t,priority:n};for(var i=0;i<lo.length&&n!==0&&n<lo[i].priority;i++);lo.splice(i,0,t),i===0&&Ho(t)}};function Sl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ds(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dc(){}function fd(t,n,i,f,S){if(S){if(typeof f=="function"){var O=f;f=function(){var Qe=Ns(W);O.call(Qe)}}var W=wc(n,f,t,0,null,!1,!1,"",Dc);return t._reactRootContainer=W,t[_n]=W.current,jt(t.nodeType===8?t.parentNode:t),Ou(),W}for(;S=t.lastChild;)t.removeChild(S);if(typeof f=="function"){var ge=f;f=function(){var Qe=Ns(Ae);ge.call(Qe)}}var Ae=gl(t,0,!1,null,null,!1,!1,"",Dc);return t._reactRootContainer=Ae,t[_n]=Ae.current,jt(t.nodeType===8?t.parentNode:t),Ou(function(){ws(n,Ae,i,f)}),Ae}function Fs(t,n,i,f,S){var O=i._reactRootContainer;if(O){var W=O;if(typeof S=="function"){var ge=S;S=function(){var Ae=Ns(W);ge.call(Ae)}}ws(n,W,t,S)}else W=fd(i,n,t,S,f);return Ns(W)}ni=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var i=$o(n.pendingLanes);i!==0&&(oo(n,i|1),Co(n,Nn()),!(sr&6)&&(Qu=Nn()+500,da()))}break;case 13:Ou(function(){var f=va(t,1);if(f!==null){var S=Io();di(f,t,1,S)}}),Il(t,1)}},Ao=function(t){if(t.tag===13){var n=va(t,134217728);if(n!==null){var i=Io();di(n,t,134217728,i)}Il(t,134217728)}},hu=function(t){if(t.tag===13){var n=fu(t),i=va(t,n);if(i!==null){var f=Io();di(i,t,n,f)}Il(t,n)}},Ji=function(){return rr},vi=function(t,n){var i=rr;try{return rr=t,n()}finally{rr=i}},Ve=function(t,n,i){switch(n){case"input":if(pe(t,i),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var f=i[n];if(f!==t&&f.form===t.form){var S=Ln(f);if(!S)throw Error(r(90));Ze(f),pe(f,S)}}}break;case"textarea":ze(t,i);break;case"select":n=i.value,n!=null&&ve(t,!!i.multiple,n,!1)}},Re=fl,Je=Ou;var vd={usingClientEntryPoint:!1,Events:[gn,Pr,Ln,Be,Fe,fl]},ds={findFiberByHostInstance:Mr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},pd={bundleType:ds.bundleType,version:ds.version,rendererPackageName:ds.rendererPackageName,rendererConfig:ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qt(t),t===null?null:t.stateNode},findFiberByHostInstance:ds.findFiberByHostInstance||dd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Bs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bs.isDisabled&&Bs.supportsFiber)try{Qa=Bs.inject(pd),ua=Bs}catch(t){}}l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vd,l.createPortal=function(t,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sl(n))throw Error(r(200));return cd(t,n,null,i)},l.createRoot=function(t,n){if(!Sl(t))throw Error(r(299));var i=!1,f="",S=Lc;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(f=n.identifierPrefix),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=gl(t,1,!1,null,null,i,!1,f,S),t[_n]=n.current,jt(t.nodeType===8?t.parentNode:t),new xl(n)},l.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=qt(n),t=t===null?null:t.stateNode,t},l.flushSync=function(t){return Ou(t)},l.hydrate=function(t,n,i){if(!Ds(n))throw Error(r(200));return Fs(null,t,n,!0,i)},l.hydrateRoot=function(t,n,i){if(!Sl(t))throw Error(r(405));var f=i!=null&&i.hydratedSources||null,S=!1,O="",W=Lc;if(i!=null&&(i.unstable_strictMode===!0&&(S=!0),i.identifierPrefix!==void 0&&(O=i.identifierPrefix),i.onRecoverableError!==void 0&&(W=i.onRecoverableError)),n=wc(n,null,t,1,i!=null?i:null,S,!1,O,W),t[_n]=n.current,jt(t),f)for(t=0;t<f.length;t++)i=f[t],S=i._getVersion,S=S(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,S]:n.mutableSourceEagerHydrationData.push(i,S);return new Ls(n)},l.render=function(t,n,i){if(!Ds(n))throw Error(r(200));return Fs(null,t,n,!1,i)},l.unmountComponentAtNode=function(t){if(!Ds(t))throw Error(r(40));return t._reactRootContainer?(Ou(function(){Fs(null,null,t,!1,function(){t._reactRootContainer=null,t[_n]=null})}),!0):!1},l.unstable_batchedUpdates=fl,l.unstable_renderSubtreeIntoContainer=function(t,n,i,f){if(!Ds(i))throw Error(r(200));if(t==null||t._reactInternals===void 0)throw Error(r(38));return Fs(t,n,i,!1,f)},l.version="18.2.0-next-9e3b772b8-20220608"},20745:function(c,l,e){"use strict";var o=e(73935);if(!0)l.createRoot=o.createRoot,l.hydrateRoot=o.hydrateRoot;else var a},73935:function(c,l,e){"use strict";function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(a){console.error(a)}}o(),c.exports=e(64448)},69590:function(c){var l=typeof Element!="undefined",e=typeof Map=="function",o=typeof Set=="function",a=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function r(s,u){if(s===u)return!0;if(s&&u&&typeof s=="object"&&typeof u=="object"){if(s.constructor!==u.constructor)return!1;var v,d,h;if(Array.isArray(s)){if(v=s.length,v!=u.length)return!1;for(d=v;d--!==0;)if(!r(s[d],u[d]))return!1;return!0}var m;if(e&&s instanceof Map&&u instanceof Map){if(s.size!==u.size)return!1;for(m=s.entries();!(d=m.next()).done;)if(!u.has(d.value[0]))return!1;for(m=s.entries();!(d=m.next()).done;)if(!r(d.value[1],u.get(d.value[0])))return!1;return!0}if(o&&s instanceof Set&&u instanceof Set){if(s.size!==u.size)return!1;for(m=s.entries();!(d=m.next()).done;)if(!u.has(d.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(s)&&ArrayBuffer.isView(u)){if(v=s.length,v!=u.length)return!1;for(d=v;d--!==0;)if(s[d]!==u[d])return!1;return!0}if(s.constructor===RegExp)return s.source===u.source&&s.flags===u.flags;if(s.valueOf!==Object.prototype.valueOf&&typeof s.valueOf=="function"&&typeof u.valueOf=="function")return s.valueOf()===u.valueOf();if(s.toString!==Object.prototype.toString&&typeof s.toString=="function"&&typeof u.toString=="function")return s.toString()===u.toString();if(h=Object.keys(s),v=h.length,v!==Object.keys(u).length)return!1;for(d=v;d--!==0;)if(!Object.prototype.hasOwnProperty.call(u,h[d]))return!1;if(l&&s instanceof Element)return!1;for(d=v;d--!==0;)if(!((h[d]==="_owner"||h[d]==="__v"||h[d]==="__o")&&s.$$typeof)&&!r(s[h[d]],u[h[d]]))return!1;return!0}return s!==s&&u!==u}c.exports=function(u,v){try{return r(u,v)}catch(d){if((d.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw d}}},70405:function(c,l,e){"use strict";e.d(l,{B6:function(){return H},ql:function(){return Ye}});var o=e(67294),a=e(45697),r=e.n(a),s=e(69590),u=e.n(s),v=e(41143),d=e.n(v),h=e(96774),m=e.n(h);function p(){return p=Object.assign||function(oe){for(var fe=1;fe<arguments.length;fe++){var pe=arguments[fe];for(var me in pe)Object.prototype.hasOwnProperty.call(pe,me)&&(oe[me]=pe[me])}return oe},p.apply(this,arguments)}function y(oe,fe){oe.prototype=Object.create(fe.prototype),oe.prototype.constructor=oe,g(oe,fe)}function g(oe,fe){return g=Object.setPrototypeOf||function(pe,me){return pe.__proto__=me,pe},g(oe,fe)}function I(oe,fe){if(oe==null)return{};var pe,me,Pe={},se=Object.keys(oe);for(me=0;me<se.length;me++)fe.indexOf(pe=se[me])>=0||(Pe[pe]=oe[pe]);return Pe}var b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},E={rel:["amphtml","canonical","alternate"]},R={type:["application/ld+json"]},A={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},N=Object.keys(b).map(function(oe){return b[oe]}),w={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},B=Object.keys(w).reduce(function(oe,fe){return oe[w[fe]]=fe,oe},{}),C=function(oe,fe){for(var pe=oe.length-1;pe>=0;pe-=1){var me=oe[pe];if(Object.prototype.hasOwnProperty.call(me,fe))return me[fe]}return null},L=function(oe){var fe=C(oe,b.TITLE),pe=C(oe,"titleTemplate");if(Array.isArray(fe)&&(fe=fe.join("")),pe&&fe)return pe.replace(/%s/g,function(){return fe});var me=C(oe,"defaultTitle");return fe||me||void 0},Z=function(oe){return C(oe,"onChangeClientState")||function(){}},te=function(oe,fe){return fe.filter(function(pe){return pe[oe]!==void 0}).map(function(pe){return pe[oe]}).reduce(function(pe,me){return p({},pe,me)},{})},ee=function(oe,fe){return fe.filter(function(pe){return pe[b.BASE]!==void 0}).map(function(pe){return pe[b.BASE]}).reverse().reduce(function(pe,me){if(!pe.length)for(var Pe=Object.keys(me),se=0;se<Pe.length;se+=1){var ve=Pe[se].toLowerCase();if(oe.indexOf(ve)!==-1&&me[ve])return pe.concat(me)}return pe},[])},_=function(oe,fe,pe){var me={};return pe.filter(function(Pe){return!!Array.isArray(Pe[oe])||(Pe[oe]!==void 0&&console&&typeof console.warn=="function"&&console.warn("Helmet: "+oe+' should be of type "Array". Instead found type "'+typeof Pe[oe]+'"'),!1)}).map(function(Pe){return Pe[oe]}).reverse().reduce(function(Pe,se){var ve={};se.filter(function(at){for(var lt,St=Object.keys(at),Bt=0;Bt<St.length;Bt+=1){var Ot=St[Bt],Wt=Ot.toLowerCase();fe.indexOf(Wt)===-1||lt==="rel"&&at[lt].toLowerCase()==="canonical"||Wt==="rel"&&at[Wt].toLowerCase()==="stylesheet"||(lt=Wt),fe.indexOf(Ot)===-1||Ot!=="innerHTML"&&Ot!=="cssText"&&Ot!=="itemprop"||(lt=Ot)}if(!lt||!at[lt])return!1;var x=at[lt].toLowerCase();return me[lt]||(me[lt]={}),ve[lt]||(ve[lt]={}),!me[lt][x]&&(ve[lt][x]=!0,!0)}).reverse().forEach(function(at){return Pe.push(at)});for(var ye=Object.keys(ve),De=0;De<ye.length;De+=1){var ze=ye[De],bt=p({},me[ze],ve[ze]);me[ze]=bt}return Pe},[]).reverse()},de=function(oe,fe){if(Array.isArray(oe)&&oe.length){for(var pe=0;pe<oe.length;pe+=1)if(oe[pe][fe])return!0}return!1},be=function(oe){return Array.isArray(oe)?oe.join(""):oe},Te=function(oe,fe){return Array.isArray(oe)?oe.reduce(function(pe,me){return function(Pe,se){for(var ve=Object.keys(Pe),ye=0;ye<ve.length;ye+=1)if(se[ve[ye]]&&se[ve[ye]].includes(Pe[ve[ye]]))return!0;return!1}(me,fe)?pe.priority.push(me):pe.default.push(me),pe},{priority:[],default:[]}):{default:oe}},ie=function(oe,fe){var pe;return p({},oe,((pe={})[fe]=void 0,pe))},Q=[b.NOSCRIPT,b.SCRIPT,b.STYLE],Y=function(oe,fe){return fe===void 0&&(fe=!0),fe===!1?String(oe):String(oe).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},k=function(oe){return Object.keys(oe).reduce(function(fe,pe){var me=oe[pe]!==void 0?pe+'="'+oe[pe]+'"':""+pe;return fe?fe+" "+me:me},"")},K=function(oe,fe){return fe===void 0&&(fe={}),Object.keys(oe).reduce(function(pe,me){return pe[w[me]||me]=oe[me],pe},fe)},re=function(oe,fe){return fe.map(function(pe,me){var Pe,se=((Pe={key:me})["data-rh"]=!0,Pe);return Object.keys(pe).forEach(function(ve){var ye=w[ve]||ve;ye==="innerHTML"||ye==="cssText"?se.dangerouslySetInnerHTML={__html:pe.innerHTML||pe.cssText}:se[ye]=pe[ve]}),o.createElement(oe,se)})},T=function(oe,fe,pe){switch(oe){case b.TITLE:return{toComponent:function(){return Pe=fe.titleAttributes,(se={key:me=fe.title})["data-rh"]=!0,ve=K(Pe,se),[o.createElement(b.TITLE,ve,me)];var me,Pe,se,ve},toString:function(){return function(me,Pe,se,ve){var ye=k(se),De=be(Pe);return ye?"<"+me+' data-rh="true" '+ye+">"+Y(De,ve)+"</"+me+">":"<"+me+' data-rh="true">'+Y(De,ve)+"</"+me+">"}(oe,fe.title,fe.titleAttributes,pe)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return K(fe)},toString:function(){return k(fe)}};default:return{toComponent:function(){return re(oe,fe)},toString:function(){return function(me,Pe,se){return Pe.reduce(function(ve,ye){var De=Object.keys(ye).filter(function(at){return!(at==="innerHTML"||at==="cssText")}).reduce(function(at,lt){var St=ye[lt]===void 0?lt:lt+'="'+Y(ye[lt],se)+'"';return at?at+" "+St:St},""),ze=ye.innerHTML||ye.cssText||"",bt=Q.indexOf(me)===-1;return ve+"<"+me+' data-rh="true" '+De+(bt?"/>":">"+ze+"</"+me+">")},"")}(oe,fe,pe)}}}},D=function(oe){var fe=oe.baseTag,pe=oe.bodyAttributes,me=oe.encode,Pe=oe.htmlAttributes,se=oe.noscriptTags,ve=oe.styleTags,ye=oe.title,De=ye===void 0?"":ye,ze=oe.titleAttributes,bt=oe.linkTags,at=oe.metaTags,lt=oe.scriptTags,St={toComponent:function(){},toString:function(){return""}};if(oe.prioritizeSeoTags){var Bt=function(Ot){var Wt=Ot.linkTags,x=Ot.scriptTags,U=Ot.encode,ne=Te(Ot.metaTags,A),ue=Te(Wt,E),Ie=Te(x,R);return{priorityMethods:{toComponent:function(){return[].concat(re(b.META,ne.priority),re(b.LINK,ue.priority),re(b.SCRIPT,Ie.priority))},toString:function(){return T(b.META,ne.priority,U)+" "+T(b.LINK,ue.priority,U)+" "+T(b.SCRIPT,Ie.priority,U)}},metaTags:ne.default,linkTags:ue.default,scriptTags:Ie.default}}(oe);St=Bt.priorityMethods,bt=Bt.linkTags,at=Bt.metaTags,lt=Bt.scriptTags}return{priority:St,base:T(b.BASE,fe,me),bodyAttributes:T("bodyAttributes",pe,me),htmlAttributes:T("htmlAttributes",Pe,me),link:T(b.LINK,bt,me),meta:T(b.META,at,me),noscript:T(b.NOSCRIPT,se,me),script:T(b.SCRIPT,lt,me),style:T(b.STYLE,ve,me),title:T(b.TITLE,{title:De,titleAttributes:ze},me)}},V=[],le=function(oe,fe){var pe=this;fe===void 0&&(fe=typeof document!="undefined"),this.instances=[],this.value={setHelmet:function(me){pe.context.helmet=me},helmetInstances:{get:function(){return pe.canUseDOM?V:pe.instances},add:function(me){(pe.canUseDOM?V:pe.instances).push(me)},remove:function(me){var Pe=(pe.canUseDOM?V:pe.instances).indexOf(me);(pe.canUseDOM?V:pe.instances).splice(Pe,1)}}},this.context=oe,this.canUseDOM=fe,fe||(oe.helmet=D({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},J=o.createContext({}),P=r().shape({setHelmet:r().func,helmetInstances:r().shape({get:r().func,add:r().func,remove:r().func})}),$=typeof document!="undefined",H=function(oe){function fe(pe){var me;return(me=oe.call(this,pe)||this).helmetData=new le(me.props.context,fe.canUseDOM),me}return y(fe,oe),fe.prototype.render=function(){return o.createElement(J.Provider,{value:this.helmetData.value},this.props.children)},fe}(o.Component);H.canUseDOM=$,H.propTypes={context:r().shape({helmet:r().shape()}),children:r().node.isRequired},H.defaultProps={context:{}},H.displayName="HelmetProvider";var q=function(oe,fe){var pe,me=document.head||document.querySelector(b.HEAD),Pe=me.querySelectorAll(oe+"[data-rh]"),se=[].slice.call(Pe),ve=[];return fe&&fe.length&&fe.forEach(function(ye){var De=document.createElement(oe);for(var ze in ye)Object.prototype.hasOwnProperty.call(ye,ze)&&(ze==="innerHTML"?De.innerHTML=ye.innerHTML:ze==="cssText"?De.styleSheet?De.styleSheet.cssText=ye.cssText:De.appendChild(document.createTextNode(ye.cssText)):De.setAttribute(ze,ye[ze]===void 0?"":ye[ze]));De.setAttribute("data-rh","true"),se.some(function(bt,at){return pe=at,De.isEqualNode(bt)})?se.splice(pe,1):ve.push(De)}),se.forEach(function(ye){return ye.parentNode.removeChild(ye)}),ve.forEach(function(ye){return me.appendChild(ye)}),{oldTags:se,newTags:ve}},ae=function(oe,fe){var pe=document.getElementsByTagName(oe)[0];if(pe){for(var me=pe.getAttribute("data-rh"),Pe=me?me.split(","):[],se=[].concat(Pe),ve=Object.keys(fe),ye=0;ye<ve.length;ye+=1){var De=ve[ye],ze=fe[De]||"";pe.getAttribute(De)!==ze&&pe.setAttribute(De,ze),Pe.indexOf(De)===-1&&Pe.push(De);var bt=se.indexOf(De);bt!==-1&&se.splice(bt,1)}for(var at=se.length-1;at>=0;at-=1)pe.removeAttribute(se[at]);Pe.length===se.length?pe.removeAttribute("data-rh"):pe.getAttribute("data-rh")!==ve.join(",")&&pe.setAttribute("data-rh",ve.join(","))}},Ce=function(oe,fe){var pe=oe.baseTag,me=oe.htmlAttributes,Pe=oe.linkTags,se=oe.metaTags,ve=oe.noscriptTags,ye=oe.onChangeClientState,De=oe.scriptTags,ze=oe.styleTags,bt=oe.title,at=oe.titleAttributes;ae(b.BODY,oe.bodyAttributes),ae(b.HTML,me),function(Ot,Wt){Ot!==void 0&&document.title!==Ot&&(document.title=be(Ot)),ae(b.TITLE,Wt)}(bt,at);var lt={baseTag:q(b.BASE,pe),linkTags:q(b.LINK,Pe),metaTags:q(b.META,se),noscriptTags:q(b.NOSCRIPT,ve),scriptTags:q(b.SCRIPT,De),styleTags:q(b.STYLE,ze)},St={},Bt={};Object.keys(lt).forEach(function(Ot){var Wt=lt[Ot],x=Wt.newTags,U=Wt.oldTags;x.length&&(St[Ot]=x),U.length&&(Bt[Ot]=lt[Ot].oldTags)}),fe&&fe(),ye(oe,St,Bt)},Le=null,Xe=function(oe){function fe(){for(var me,Pe=arguments.length,se=new Array(Pe),ve=0;ve<Pe;ve++)se[ve]=arguments[ve];return(me=oe.call.apply(oe,[this].concat(se))||this).rendered=!1,me}y(fe,oe);var pe=fe.prototype;return pe.shouldComponentUpdate=function(me){return!m()(me,this.props)},pe.componentDidUpdate=function(){this.emitChange()},pe.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},pe.emitChange=function(){var me,Pe,se=this.props.context,ve=se.setHelmet,ye=null,De=(me=se.helmetInstances.get().map(function(ze){var bt=p({},ze.props);return delete bt.context,bt}),{baseTag:ee(["href"],me),bodyAttributes:te("bodyAttributes",me),defer:C(me,"defer"),encode:C(me,"encodeSpecialCharacters"),htmlAttributes:te("htmlAttributes",me),linkTags:_(b.LINK,["rel","href"],me),metaTags:_(b.META,["name","charset","http-equiv","property","itemprop"],me),noscriptTags:_(b.NOSCRIPT,["innerHTML"],me),onChangeClientState:Z(me),scriptTags:_(b.SCRIPT,["src","innerHTML"],me),styleTags:_(b.STYLE,["cssText"],me),title:L(me),titleAttributes:te("titleAttributes",me),prioritizeSeoTags:de(me,"prioritizeSeoTags")});H.canUseDOM?(Pe=De,Le&&cancelAnimationFrame(Le),Pe.defer?Le=requestAnimationFrame(function(){Ce(Pe,function(){Le=null})}):(Ce(Pe),Le=null)):D&&(ye=D(De)),ve(ye)},pe.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},pe.render=function(){return this.init(),null},fe}(o.Component);Xe.propTypes={context:P.isRequired},Xe.displayName="HelmetDispatcher";var Ze=["children"],je=["children"],Ye=function(oe){function fe(){return oe.apply(this,arguments)||this}y(fe,oe);var pe=fe.prototype;return pe.shouldComponentUpdate=function(me){return!u()(ie(this.props,"helmetData"),ie(me,"helmetData"))},pe.mapNestedChildrenToProps=function(me,Pe){if(!Pe)return null;switch(me.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:Pe};case b.STYLE:return{cssText:Pe};default:throw new Error("<"+me.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},pe.flattenArrayTypeChildren=function(me){var Pe,se=me.child,ve=me.arrayTypeChildren;return p({},ve,((Pe={})[se.type]=[].concat(ve[se.type]||[],[p({},me.newChildProps,this.mapNestedChildrenToProps(se,me.nestedChildren))]),Pe))},pe.mapObjectTypeChildren=function(me){var Pe,se,ve=me.child,ye=me.newProps,De=me.newChildProps,ze=me.nestedChildren;switch(ve.type){case b.TITLE:return p({},ye,((Pe={})[ve.type]=ze,Pe.titleAttributes=p({},De),Pe));case b.BODY:return p({},ye,{bodyAttributes:p({},De)});case b.HTML:return p({},ye,{htmlAttributes:p({},De)});default:return p({},ye,((se={})[ve.type]=p({},De),se))}},pe.mapArrayTypeChildrenToProps=function(me,Pe){var se=p({},Pe);return Object.keys(me).forEach(function(ve){var ye;se=p({},se,((ye={})[ve]=me[ve],ye))}),se},pe.warnOnInvalidChildren=function(me,Pe){return d()(N.some(function(se){return me.type===se}),typeof me.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+N.join(", ")+" are allowed. Helmet does not support rendering <"+me.type+"> elements. Refer to our API for more information."),d()(!Pe||typeof Pe=="string"||Array.isArray(Pe)&&!Pe.some(function(se){return typeof se!="string"}),"Helmet expects a string as a child of <"+me.type+">. Did you forget to wrap your children in braces? ( <"+me.type+">{``}</"+me.type+"> ) Refer to our API for more information."),!0},pe.mapChildrenToProps=function(me,Pe){var se=this,ve={};return o.Children.forEach(me,function(ye){if(ye&&ye.props){var De=ye.props,ze=De.children,bt=I(De,Ze),at=Object.keys(bt).reduce(function(St,Bt){return St[B[Bt]||Bt]=bt[Bt],St},{}),lt=ye.type;switch(typeof lt=="symbol"?lt=lt.toString():se.warnOnInvalidChildren(ye,ze),lt){case b.FRAGMENT:Pe=se.mapChildrenToProps(ze,Pe);break;case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:ve=se.flattenArrayTypeChildren({child:ye,arrayTypeChildren:ve,newChildProps:at,nestedChildren:ze});break;default:Pe=se.mapObjectTypeChildren({child:ye,newProps:Pe,newChildProps:at,nestedChildren:ze})}}}),this.mapArrayTypeChildrenToProps(ve,Pe)},pe.render=function(){var me=this.props,Pe=me.children,se=I(me,je),ve=p({},se),ye=se.helmetData;return Pe&&(ve=this.mapChildrenToProps(Pe,ve)),!ye||ye instanceof le||(ye=new le(ye.context,ye.instances)),ye?o.createElement(Xe,p({},ve,{context:ye.value,helmetData:void 0})):o.createElement(J.Consumer,null,function(De){return o.createElement(Xe,p({},ve,{context:De}))})},fe}(o.Component);Ye.propTypes={base:r().object,bodyAttributes:r().object,children:r().oneOfType([r().arrayOf(r().node),r().node]),defaultTitle:r().string,defer:r().bool,encodeSpecialCharacters:r().bool,htmlAttributes:r().object,link:r().arrayOf(r().object),meta:r().arrayOf(r().object),noscript:r().arrayOf(r().object),onChangeClientState:r().func,script:r().arrayOf(r().object),style:r().arrayOf(r().object),title:r().string,titleAttributes:r().object,titleTemplate:r().string,prioritizeSeoTags:r().bool,helmetData:r().object},Ye.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},Ye.displayName="Helmet"},74806:function(c,l,e){"use strict";e.d(l,{_y:function(){return m},zt:function(){return h}});var o=e(67294),a=e(8679),r=e.n(a);function s(y){return y.displayName||y.name||"Component"}var u=typeof window!="undefined"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=o.createContext(null)):o.createContext(null),v=u.Consumer,d=u.Provider,h=d,m=u;function p(y,g){var I=g||{},b=I.intlPropName,E=b===void 0?"intl":b,R=I.forwardRef,A=R===void 0?!1:R,N=I.enforceContext,w=N===void 0?!0:N,B=function(C){return React.createElement(v,null,function(L){var Z;w&&invariantIntlContext(L);var te=(Z={},Z[E]=L,Z);return React.createElement(y,__assign({},C,te,{ref:A?C.forwardedRef:null}))})};return B.displayName="injectIntl(".concat(s(y),")"),B.WrappedComponent=y,A?hoistNonReactStatics(React.forwardRef(function(C,L){return React.createElement(B,__assign({},C,{forwardedRef:L}))}),y):hoistNonReactStatics(B,y)}},86896:function(c,l,e){"use strict";e.d(l,{Z:function(){return s}});var o=e(67294),a=e(74806),r=e(680);function s(){var u=o.useContext(a._y);return(0,r.lq)(u),u}},680:function(c,l,e){"use strict";e.d(l,{Z0:function(){return v},dt:function(){return d},lq:function(){return u},wU:function(){return h}});var o=e(97582),a=e(67294),r=e(25687),s=e(82644);function u(m){(0,r.kG)(m,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var v=(0,o.pi)((0,o.pi)({},s.Z0),{textComponent:a.Fragment});function d(m){return function(p){return m(a.Children.toArray(p))}}function h(m,p){if(m===p)return!0;if(!m||!p)return!1;var y=Object.keys(m),g=Object.keys(p),I=y.length;if(g.length!==I)return!1;for(var b=0;b<I;b++){var E=y[b];if(m[E]!==p[E]||!Object.prototype.hasOwnProperty.call(p,E))return!1}return!0}},69921:function(c,l){"use strict";var e=typeof Symbol=="function"&&Symbol.for,o=e?Symbol.for("react.element"):60103,a=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,u=e?Symbol.for("react.profiler"):60114,v=e?Symbol.for("react.provider"):60109,d=e?Symbol.for("react.context"):60110,h=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,y=e?Symbol.for("react.suspense"):60113,g=e?Symbol.for("react.suspense_list"):60120,I=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,E=e?Symbol.for("react.block"):60121,R=e?Symbol.for("react.fundamental"):60117,A=e?Symbol.for("react.responder"):60118,N=e?Symbol.for("react.scope"):60119;function w(C){if(typeof C=="object"&&C!==null){var L=C.$$typeof;switch(L){case o:switch(C=C.type,C){case h:case m:case r:case u:case s:case y:return C;default:switch(C=C&&C.$$typeof,C){case d:case p:case b:case I:case v:return C;default:return L}}case a:return L}}}function B(C){return w(C)===m}l.AsyncMode=h,l.ConcurrentMode=m,l.ContextConsumer=d,l.ContextProvider=v,l.Element=o,l.ForwardRef=p,l.Fragment=r,l.Lazy=b,l.Memo=I,l.Portal=a,l.Profiler=u,l.StrictMode=s,l.Suspense=y,l.isAsyncMode=function(C){return B(C)||w(C)===h},l.isConcurrentMode=B,l.isContextConsumer=function(C){return w(C)===d},l.isContextProvider=function(C){return w(C)===v},l.isElement=function(C){return typeof C=="object"&&C!==null&&C.$$typeof===o},l.isForwardRef=function(C){return w(C)===p},l.isFragment=function(C){return w(C)===r},l.isLazy=function(C){return w(C)===b},l.isMemo=function(C){return w(C)===I},l.isPortal=function(C){return w(C)===a},l.isProfiler=function(C){return w(C)===u},l.isStrictMode=function(C){return w(C)===s},l.isSuspense=function(C){return w(C)===y},l.isValidElementType=function(C){return typeof C=="string"||typeof C=="function"||C===r||C===m||C===u||C===s||C===y||C===g||typeof C=="object"&&C!==null&&(C.$$typeof===b||C.$$typeof===I||C.$$typeof===v||C.$$typeof===d||C.$$typeof===p||C.$$typeof===R||C.$$typeof===A||C.$$typeof===N||C.$$typeof===E)},l.typeOf=w},59864:function(c,l,e){"use strict";c.exports=e(69921)},75251:function(c,l,e){"use strict";var o=e(67294),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,u=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function d(h,m,p){var y,g={},I=null,b=null;p!==void 0&&(I=""+p),m.key!==void 0&&(I=""+m.key),m.ref!==void 0&&(b=m.ref);for(y in m)s.call(m,y)&&!v.hasOwnProperty(y)&&(g[y]=m[y]);if(h&&h.defaultProps)for(y in m=h.defaultProps,m)g[y]===void 0&&(g[y]=m[y]);return{$$typeof:a,type:h,key:I,ref:b,props:g,_owner:u.current}}l.Fragment=r,l.jsx=d,l.jsxs=d},72408:function(c,l){"use strict";var e=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),v=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.iterator;function g(T){return T===null||typeof T!="object"?null:(T=y&&T[y]||T["@@iterator"],typeof T=="function"?T:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,E={};function R(T,D,V){this.props=T,this.context=D,this.refs=E,this.updater=V||I}R.prototype.isReactComponent={},R.prototype.setState=function(T,D){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,D,"setState")},R.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function A(){}A.prototype=R.prototype;function N(T,D,V){this.props=T,this.context=D,this.refs=E,this.updater=V||I}var w=N.prototype=new A;w.constructor=N,b(w,R.prototype),w.isPureReactComponent=!0;var B=Array.isArray,C=Object.prototype.hasOwnProperty,L={current:null},Z={key:!0,ref:!0,__self:!0,__source:!0};function te(T,D,V){var le,J={},P=null,$=null;if(D!=null)for(le in D.ref!==void 0&&($=D.ref),D.key!==void 0&&(P=""+D.key),D)C.call(D,le)&&!Z.hasOwnProperty(le)&&(J[le]=D[le]);var H=arguments.length-2;if(H===1)J.children=V;else if(1<H){for(var q=Array(H),ae=0;ae<H;ae++)q[ae]=arguments[ae+2];J.children=q}if(T&&T.defaultProps)for(le in H=T.defaultProps,H)J[le]===void 0&&(J[le]=H[le]);return{$$typeof:e,type:T,key:P,ref:$,props:J,_owner:L.current}}function ee(T,D){return{$$typeof:e,type:T.type,key:D,ref:T.ref,props:T.props,_owner:T._owner}}function _(T){return typeof T=="object"&&T!==null&&T.$$typeof===e}function de(T){var D={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(V){return D[V]})}var be=/\/+/g;function Te(T,D){return typeof T=="object"&&T!==null&&T.key!=null?de(""+T.key):D.toString(36)}function ie(T,D,V,le,J){var P=typeof T;(P==="undefined"||P==="boolean")&&(T=null);var $=!1;if(T===null)$=!0;else switch(P){case"string":case"number":$=!0;break;case"object":switch(T.$$typeof){case e:case o:$=!0}}if($)return $=T,J=J($),T=le===""?"."+Te($,0):le,B(J)?(V="",T!=null&&(V=T.replace(be,"$&/")+"/"),ie(J,D,V,"",function(ae){return ae})):J!=null&&(_(J)&&(J=ee(J,V+(!J.key||$&&$.key===J.key?"":(""+J.key).replace(be,"$&/")+"/")+T)),D.push(J)),1;if($=0,le=le===""?".":le+":",B(T))for(var H=0;H<T.length;H++){P=T[H];var q=le+Te(P,H);$+=ie(P,D,V,q,J)}else if(q=g(T),typeof q=="function")for(T=q.call(T),H=0;!(P=T.next()).done;)P=P.value,q=le+Te(P,H++),$+=ie(P,D,V,q,J);else if(P==="object")throw D=String(T),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.");return $}function Q(T,D,V){if(T==null)return T;var le=[],J=0;return ie(T,le,"","",function(P){return D.call(V,P,J++)}),le}function Y(T){if(T._status===-1){var D=T._result;D=D(),D.then(function(V){(T._status===0||T._status===-1)&&(T._status=1,T._result=V)},function(V){(T._status===0||T._status===-1)&&(T._status=2,T._result=V)}),T._status===-1&&(T._status=0,T._result=D)}if(T._status===1)return T._result.default;throw T._result}var k={current:null},K={transition:null},re={ReactCurrentDispatcher:k,ReactCurrentBatchConfig:K,ReactCurrentOwner:L};l.Children={map:Q,forEach:function(T,D,V){Q(T,function(){D.apply(this,arguments)},V)},count:function(T){var D=0;return Q(T,function(){D++}),D},toArray:function(T){return Q(T,function(D){return D})||[]},only:function(T){if(!_(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},l.Component=R,l.Fragment=a,l.Profiler=s,l.PureComponent=N,l.StrictMode=r,l.Suspense=h,l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,l.cloneElement=function(T,D,V){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var le=b({},T.props),J=T.key,P=T.ref,$=T._owner;if(D!=null){if(D.ref!==void 0&&(P=D.ref,$=L.current),D.key!==void 0&&(J=""+D.key),T.type&&T.type.defaultProps)var H=T.type.defaultProps;for(q in D)C.call(D,q)&&!Z.hasOwnProperty(q)&&(le[q]=D[q]===void 0&&H!==void 0?H[q]:D[q])}var q=arguments.length-2;if(q===1)le.children=V;else if(1<q){H=Array(q);for(var ae=0;ae<q;ae++)H[ae]=arguments[ae+2];le.children=H}return{$$typeof:e,type:T.type,key:J,ref:P,props:le,_owner:$}},l.createContext=function(T){return T={$$typeof:v,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:u,_context:T},T.Consumer=T},l.createElement=te,l.createFactory=function(T){var D=te.bind(null,T);return D.type=T,D},l.createRef=function(){return{current:null}},l.forwardRef=function(T){return{$$typeof:d,render:T}},l.isValidElement=_,l.lazy=function(T){return{$$typeof:p,_payload:{_status:-1,_result:T},_init:Y}},l.memo=function(T,D){return{$$typeof:m,type:T,compare:D===void 0?null:D}},l.startTransition=function(T){var D=K.transition;K.transition={};try{T()}finally{K.transition=D}},l.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},l.useCallback=function(T,D){return k.current.useCallback(T,D)},l.useContext=function(T){return k.current.useContext(T)},l.useDebugValue=function(){},l.useDeferredValue=function(T){return k.current.useDeferredValue(T)},l.useEffect=function(T,D){return k.current.useEffect(T,D)},l.useId=function(){return k.current.useId()},l.useImperativeHandle=function(T,D,V){return k.current.useImperativeHandle(T,D,V)},l.useInsertionEffect=function(T,D){return k.current.useInsertionEffect(T,D)},l.useLayoutEffect=function(T,D){return k.current.useLayoutEffect(T,D)},l.useMemo=function(T,D){return k.current.useMemo(T,D)},l.useReducer=function(T,D,V){return k.current.useReducer(T,D,V)},l.useRef=function(T){return k.current.useRef(T)},l.useState=function(T){return k.current.useState(T)},l.useSyncExternalStore=function(T,D,V){return k.current.useSyncExternalStore(T,D,V)},l.useTransition=function(){return k.current.useTransition()},l.version="18.2.0"},67294:function(c,l,e){"use strict";c.exports=e(72408)},85893:function(c,l,e){"use strict";c.exports=e(75251)},35666:function(c){var l=function(e){"use strict";var o=Object.prototype,a=o.hasOwnProperty,r=Object.defineProperty||function(k,K,re){k[K]=re.value},s,u=typeof Symbol=="function"?Symbol:{},v=u.iterator||"@@iterator",d=u.asyncIterator||"@@asyncIterator",h=u.toStringTag||"@@toStringTag";function m(k,K,re){return Object.defineProperty(k,K,{value:re,enumerable:!0,configurable:!0,writable:!0}),k[K]}try{m({},"")}catch(k){m=function(K,re,T){return K[re]=T}}function p(k,K,re,T){var D=K&&K.prototype instanceof A?K:A,V=Object.create(D.prototype),le=new ie(T||[]);return r(V,"_invoke",{value:_(k,re,le)}),V}e.wrap=p;function y(k,K,re){try{return{type:"normal",arg:k.call(K,re)}}catch(T){return{type:"throw",arg:T}}}var g="suspendedStart",I="suspendedYield",b="executing",E="completed",R={};function A(){}function N(){}function w(){}var B={};m(B,v,function(){return this});var C=Object.getPrototypeOf,L=C&&C(C(Q([])));L&&L!==o&&a.call(L,v)&&(B=L);var Z=w.prototype=A.prototype=Object.create(B);N.prototype=w,r(Z,"constructor",{value:w,configurable:!0}),r(w,"constructor",{value:N,configurable:!0}),N.displayName=m(w,h,"GeneratorFunction");function te(k){["next","throw","return"].forEach(function(K){m(k,K,function(re){return this._invoke(K,re)})})}e.isGeneratorFunction=function(k){var K=typeof k=="function"&&k.constructor;return K?K===N||(K.displayName||K.name)==="GeneratorFunction":!1},e.mark=function(k){return Object.setPrototypeOf?Object.setPrototypeOf(k,w):(k.__proto__=w,m(k,h,"GeneratorFunction")),k.prototype=Object.create(Z),k},e.awrap=function(k){return{__await:k}};function ee(k,K){function re(V,le,J,P){var $=y(k[V],k,le);if($.type==="throw")P($.arg);else{var H=$.arg,q=H.value;return q&&typeof q=="object"&&a.call(q,"__await")?K.resolve(q.__await).then(function(ae){re("next",ae,J,P)},function(ae){re("throw",ae,J,P)}):K.resolve(q).then(function(ae){H.value=ae,J(H)},function(ae){return re("throw",ae,J,P)})}}var T;function D(V,le){function J(){return new K(function(P,$){re(V,le,P,$)})}return T=T?T.then(J,J):J()}r(this,"_invoke",{value:D})}te(ee.prototype),m(ee.prototype,d,function(){return this}),e.AsyncIterator=ee,e.async=function(k,K,re,T,D){D===void 0&&(D=Promise);var V=new ee(p(k,K,re,T),D);return e.isGeneratorFunction(K)?V:V.next().then(function(le){return le.done?le.value:V.next()})};function _(k,K,re){var T=g;return function(V,le){if(T===b)throw new Error("Generator is already running");if(T===E){if(V==="throw")throw le;return Y()}for(re.method=V,re.arg=le;;){var J=re.delegate;if(J){var P=de(J,re);if(P){if(P===R)continue;return P}}if(re.method==="next")re.sent=re._sent=re.arg;else if(re.method==="throw"){if(T===g)throw T=E,re.arg;re.dispatchException(re.arg)}else re.method==="return"&&re.abrupt("return",re.arg);T=b;var $=y(k,K,re);if($.type==="normal"){if(T=re.done?E:I,$.arg===R)continue;return{value:$.arg,done:re.done}}else $.type==="throw"&&(T=E,re.method="throw",re.arg=$.arg)}}}function de(k,K){var re=K.method,T=k.iterator[re];if(T===s)return K.delegate=null,re==="throw"&&k.iterator.return&&(K.method="return",K.arg=s,de(k,K),K.method==="throw")||re!=="return"&&(K.method="throw",K.arg=new TypeError("The iterator does not provide a '"+re+"' method")),R;var D=y(T,k.iterator,K.arg);if(D.type==="throw")return K.method="throw",K.arg=D.arg,K.delegate=null,R;var V=D.arg;if(!V)return K.method="throw",K.arg=new TypeError("iterator result is not an object"),K.delegate=null,R;if(V.done)K[k.resultName]=V.value,K.next=k.nextLoc,K.method!=="return"&&(K.method="next",K.arg=s);else return V;return K.delegate=null,R}te(Z),m(Z,h,"Generator"),m(Z,v,function(){return this}),m(Z,"toString",function(){return"[object Generator]"});function be(k){var K={tryLoc:k[0]};1 in k&&(K.catchLoc=k[1]),2 in k&&(K.finallyLoc=k[2],K.afterLoc=k[3]),this.tryEntries.push(K)}function Te(k){var K=k.completion||{};K.type="normal",delete K.arg,k.completion=K}function ie(k){this.tryEntries=[{tryLoc:"root"}],k.forEach(be,this),this.reset(!0)}e.keys=function(k){var K=Object(k),re=[];for(var T in K)re.push(T);return re.reverse(),function D(){for(;re.length;){var V=re.pop();if(V in K)return D.value=V,D.done=!1,D}return D.done=!0,D}};function Q(k){if(k){var K=k[v];if(K)return K.call(k);if(typeof k.next=="function")return k;if(!isNaN(k.length)){var re=-1,T=function D(){for(;++re<k.length;)if(a.call(k,re))return D.value=k[re],D.done=!1,D;return D.value=s,D.done=!0,D};return T.next=T}}return{next:Y}}e.values=Q;function Y(){return{value:s,done:!0}}return ie.prototype={constructor:ie,reset:function(k){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(Te),!k)for(var K in this)K.charAt(0)==="t"&&a.call(this,K)&&!isNaN(+K.slice(1))&&(this[K]=s)},stop:function(){this.done=!0;var k=this.tryEntries[0],K=k.completion;if(K.type==="throw")throw K.arg;return this.rval},dispatchException:function(k){if(this.done)throw k;var K=this;function re(P,$){return V.type="throw",V.arg=k,K.next=P,$&&(K.method="next",K.arg=s),!!$}for(var T=this.tryEntries.length-1;T>=0;--T){var D=this.tryEntries[T],V=D.completion;if(D.tryLoc==="root")return re("end");if(D.tryLoc<=this.prev){var le=a.call(D,"catchLoc"),J=a.call(D,"finallyLoc");if(le&&J){if(this.prev<D.catchLoc)return re(D.catchLoc,!0);if(this.prev<D.finallyLoc)return re(D.finallyLoc)}else if(le){if(this.prev<D.catchLoc)return re(D.catchLoc,!0)}else if(J){if(this.prev<D.finallyLoc)return re(D.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(k,K){for(var re=this.tryEntries.length-1;re>=0;--re){var T=this.tryEntries[re];if(T.tryLoc<=this.prev&&a.call(T,"finallyLoc")&&this.prev<T.finallyLoc){var D=T;break}}D&&(k==="break"||k==="continue")&&D.tryLoc<=K&&K<=D.finallyLoc&&(D=null);var V=D?D.completion:{};return V.type=k,V.arg=K,D?(this.method="next",this.next=D.finallyLoc,R):this.complete(V)},complete:function(k,K){if(k.type==="throw")throw k.arg;return k.type==="break"||k.type==="continue"?this.next=k.arg:k.type==="return"?(this.rval=this.arg=k.arg,this.method="return",this.next="end"):k.type==="normal"&&K&&(this.next=K),R},finish:function(k){for(var K=this.tryEntries.length-1;K>=0;--K){var re=this.tryEntries[K];if(re.finallyLoc===k)return this.complete(re.completion,re.afterLoc),Te(re),R}},catch:function(k){for(var K=this.tryEntries.length-1;K>=0;--K){var re=this.tryEntries[K];if(re.tryLoc===k){var T=re.completion;if(T.type==="throw"){var D=T.arg;Te(re)}return D}}throw new Error("illegal catch attempt")},delegateYield:function(k,K,re){return this.delegate={iterator:Q(k),resultName:K,nextLoc:re},this.method==="next"&&(this.arg=s),R}},e}(c.exports);try{regeneratorRuntime=l}catch(e){typeof globalThis=="object"?globalThis.regeneratorRuntime=l:Function("r","regeneratorRuntime = r")(l)}},91033:function(c,l,e){"use strict";var o=function(){if(typeof Map!="undefined")return Map;function ie(Q,Y){var k=-1;return Q.some(function(K,re){return K[0]===Y?(k=re,!0):!1}),k}return function(){function Q(){this.__entries__=[]}return Object.defineProperty(Q.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),Q.prototype.get=function(Y){var k=ie(this.__entries__,Y),K=this.__entries__[k];return K&&K[1]},Q.prototype.set=function(Y,k){var K=ie(this.__entries__,Y);~K?this.__entries__[K][1]=k:this.__entries__.push([Y,k])},Q.prototype.delete=function(Y){var k=this.__entries__,K=ie(k,Y);~K&&k.splice(K,1)},Q.prototype.has=function(Y){return!!~ie(this.__entries__,Y)},Q.prototype.clear=function(){this.__entries__.splice(0)},Q.prototype.forEach=function(Y,k){k===void 0&&(k=null);for(var K=0,re=this.__entries__;K<re.length;K++){var T=re[K];Y.call(k,T[1],T[0])}},Q}()}(),a=typeof window!="undefined"&&typeof document!="undefined"&&window.document===document,r=function(){return typeof e.g!="undefined"&&e.g.Math===Math?e.g:typeof self!="undefined"&&self.Math===Math?self:typeof window!="undefined"&&window.Math===Math?window:Function("return this")()}(),s=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(r):function(ie){return setTimeout(function(){return ie(Date.now())},1e3/60)}}(),u=2;function v(ie,Q){var Y=!1,k=!1,K=0;function re(){Y&&(Y=!1,ie()),k&&D()}function T(){s(re)}function D(){var V=Date.now();if(Y){if(V-K<u)return;k=!0}else Y=!0,k=!1,setTimeout(T,Q);K=V}return D}var d=20,h=["top","right","bottom","left","width","height","size","weight"],m=typeof MutationObserver!="undefined",p=function(){function ie(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=v(this.refresh.bind(this),d)}return ie.prototype.addObserver=function(Q){~this.observers_.indexOf(Q)||this.observers_.push(Q),this.connected_||this.connect_()},ie.prototype.removeObserver=function(Q){var Y=this.observers_,k=Y.indexOf(Q);~k&&Y.splice(k,1),!Y.length&&this.connected_&&this.disconnect_()},ie.prototype.refresh=function(){var Q=this.updateObservers_();Q&&this.refresh()},ie.prototype.updateObservers_=function(){var Q=this.observers_.filter(function(Y){return Y.gatherActive(),Y.hasActive()});return Q.forEach(function(Y){return Y.broadcastActive()}),Q.length>0},ie.prototype.connect_=function(){!a||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),m?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},ie.prototype.disconnect_=function(){!a||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},ie.prototype.onTransitionEnd_=function(Q){var Y=Q.propertyName,k=Y===void 0?"":Y,K=h.some(function(re){return!!~k.indexOf(re)});K&&this.refresh()},ie.getInstance=function(){return this.instance_||(this.instance_=new ie),this.instance_},ie.instance_=null,ie}(),y=function(ie,Q){for(var Y=0,k=Object.keys(Q);Y<k.length;Y++){var K=k[Y];Object.defineProperty(ie,K,{value:Q[K],enumerable:!1,writable:!1,configurable:!0})}return ie},g=function(ie){var Q=ie&&ie.ownerDocument&&ie.ownerDocument.defaultView;return Q||r},I=Z(0,0,0,0);function b(ie){return parseFloat(ie)||0}function E(ie){for(var Q=[],Y=1;Y<arguments.length;Y++)Q[Y-1]=arguments[Y];return Q.reduce(function(k,K){var re=ie["border-"+K+"-width"];return k+b(re)},0)}function R(ie){for(var Q=["top","right","bottom","left"],Y={},k=0,K=Q;k<K.length;k++){var re=K[k],T=ie["padding-"+re];Y[re]=b(T)}return Y}function A(ie){var Q=ie.getBBox();return Z(0,0,Q.width,Q.height)}function N(ie){var Q=ie.clientWidth,Y=ie.clientHeight;if(!Q&&!Y)return I;var k=g(ie).getComputedStyle(ie),K=R(k),re=K.left+K.right,T=K.top+K.bottom,D=b(k.width),V=b(k.height);if(k.boxSizing==="border-box"&&(Math.round(D+re)!==Q&&(D-=E(k,"left","right")+re),Math.round(V+T)!==Y&&(V-=E(k,"top","bottom")+T)),!B(ie)){var le=Math.round(D+re)-Q,J=Math.round(V+T)-Y;Math.abs(le)!==1&&(D-=le),Math.abs(J)!==1&&(V-=J)}return Z(K.left,K.top,D,V)}var w=function(){return typeof SVGGraphicsElement!="undefined"?function(ie){return ie instanceof g(ie).SVGGraphicsElement}:function(ie){return ie instanceof g(ie).SVGElement&&typeof ie.getBBox=="function"}}();function B(ie){return ie===g(ie).document.documentElement}function C(ie){return a?w(ie)?A(ie):N(ie):I}function L(ie){var Q=ie.x,Y=ie.y,k=ie.width,K=ie.height,re=typeof DOMRectReadOnly!="undefined"?DOMRectReadOnly:Object,T=Object.create(re.prototype);return y(T,{x:Q,y:Y,width:k,height:K,top:Y,right:Q+k,bottom:K+Y,left:Q}),T}function Z(ie,Q,Y,k){return{x:ie,y:Q,width:Y,height:k}}var te=function(){function ie(Q){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Z(0,0,0,0),this.target=Q}return ie.prototype.isActive=function(){var Q=C(this.target);return this.contentRect_=Q,Q.width!==this.broadcastWidth||Q.height!==this.broadcastHeight},ie.prototype.broadcastRect=function(){var Q=this.contentRect_;return this.broadcastWidth=Q.width,this.broadcastHeight=Q.height,Q},ie}(),ee=function(){function ie(Q,Y){var k=L(Y);y(this,{target:Q,contentRect:k})}return ie}(),_=function(){function ie(Q,Y,k){if(this.activeObservations_=[],this.observations_=new o,typeof Q!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=Q,this.controller_=Y,this.callbackCtx_=k}return ie.prototype.observe=function(Q){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element=="undefined"||!(Element instanceof Object))){if(!(Q instanceof g(Q).Element))throw new TypeError('parameter 1 is not of type "Element".');var Y=this.observations_;Y.has(Q)||(Y.set(Q,new te(Q)),this.controller_.addObserver(this),this.controller_.refresh())}},ie.prototype.unobserve=function(Q){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element=="undefined"||!(Element instanceof Object))){if(!(Q instanceof g(Q).Element))throw new TypeError('parameter 1 is not of type "Element".');var Y=this.observations_;Y.has(Q)&&(Y.delete(Q),Y.size||this.controller_.removeObserver(this))}},ie.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},ie.prototype.gatherActive=function(){var Q=this;this.clearActive(),this.observations_.forEach(function(Y){Y.isActive()&&Q.activeObservations_.push(Y)})},ie.prototype.broadcastActive=function(){if(this.hasActive()){var Q=this.callbackCtx_,Y=this.activeObservations_.map(function(k){return new ee(k.target,k.broadcastRect())});this.callback_.call(Q,Y,Q),this.clearActive()}},ie.prototype.clearActive=function(){this.activeObservations_.splice(0)},ie.prototype.hasActive=function(){return this.activeObservations_.length>0},ie}(),de=typeof WeakMap!="undefined"?new WeakMap:new o,be=function(){function ie(Q){if(!(this instanceof ie))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var Y=p.getInstance(),k=new _(Q,Y,this);de.set(this,k)}return ie}();["observe","unobserve","disconnect"].forEach(function(ie){be.prototype[ie]=function(){var Q;return(Q=de.get(this))[ie].apply(Q,arguments)}});var Te=function(){return typeof r.ResizeObserver!="undefined"?r.ResizeObserver:be}();l.Z=Te},60053:function(c,l){"use strict";function e(k,K){var re=k.length;k.push(K);e:for(;0<re;){var T=re-1>>>1,D=k[T];if(0<r(D,K))k[T]=K,k[re]=D,re=T;else break e}}function o(k){return k.length===0?null:k[0]}function a(k){if(k.length===0)return null;var K=k[0],re=k.pop();if(re!==K){k[0]=re;e:for(var T=0,D=k.length,V=D>>>1;T<V;){var le=2*(T+1)-1,J=k[le],P=le+1,$=k[P];if(0>r(J,re))P<D&&0>r($,J)?(k[T]=$,k[P]=re,T=P):(k[T]=J,k[le]=re,T=le);else if(P<D&&0>r($,re))k[T]=$,k[P]=re,T=P;else break e}}return K}function r(k,K){var re=k.sortIndex-K.sortIndex;return re!==0?re:k.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;l.unstable_now=function(){return s.now()}}else{var u=Date,v=u.now();l.unstable_now=function(){return u.now()-v}}var d=[],h=[],m=1,p=null,y=3,g=!1,I=!1,b=!1,E=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(k){for(var K=o(h);K!==null;){if(K.callback===null)a(h);else if(K.startTime<=k)a(h),K.sortIndex=K.expirationTime,e(d,K);else break;K=o(h)}}function w(k){if(b=!1,N(k),!I)if(o(d)!==null)I=!0,Q(B);else{var K=o(h);K!==null&&Y(w,K.startTime-k)}}function B(k,K){I=!1,b&&(b=!1,R(Z),Z=-1),g=!0;var re=y;try{for(N(K),p=o(d);p!==null&&(!(p.expirationTime>K)||k&&!_());){var T=p.callback;if(typeof T=="function"){p.callback=null,y=p.priorityLevel;var D=T(p.expirationTime<=K);K=l.unstable_now(),typeof D=="function"?p.callback=D:p===o(d)&&a(d),N(K)}else a(d);p=o(d)}if(p!==null)var V=!0;else{var le=o(h);le!==null&&Y(w,le.startTime-K),V=!1}return V}finally{p=null,y=re,g=!1}}var C=!1,L=null,Z=-1,te=5,ee=-1;function _(){return!(l.unstable_now()-ee<te)}function de(){if(L!==null){var k=l.unstable_now();ee=k;var K=!0;try{K=L(!0,k)}finally{K?be():(C=!1,L=null)}}else C=!1}var be;if(typeof A=="function")be=function(){A(de)};else if(typeof MessageChannel!="undefined"){var Te=new MessageChannel,ie=Te.port2;Te.port1.onmessage=de,be=function(){ie.postMessage(null)}}else be=function(){E(de,0)};function Q(k){L=k,C||(C=!0,be())}function Y(k,K){Z=E(function(){k(l.unstable_now())},K)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(k){k.callback=null},l.unstable_continueExecution=function(){I||g||(I=!0,Q(B))},l.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<k?Math.floor(1e3/k):5},l.unstable_getCurrentPriorityLevel=function(){return y},l.unstable_getFirstCallbackNode=function(){return o(d)},l.unstable_next=function(k){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var re=y;y=K;try{return k()}finally{y=re}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(k,K){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var re=y;y=k;try{return K()}finally{y=re}},l.unstable_scheduleCallback=function(k,K,re){var T=l.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?T+re:T):re=T,k){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=re+D,k={id:m++,callback:K,priorityLevel:k,startTime:re,expirationTime:D,sortIndex:-1},re>T?(k.sortIndex=re,e(h,k),o(d)===null&&k===o(h)&&(b?(R(Z),Z=-1):b=!0,Y(w,re-T))):(k.sortIndex=D,e(d,k),I||g||(I=!0,Q(B))),k},l.unstable_shouldYield=_,l.unstable_wrapCallback=function(k){var K=y;return function(){var re=y;y=K;try{return k.apply(this,arguments)}finally{y=re}}}},63840:function(c,l,e){"use strict";c.exports=e(60053)},96774:function(c){c.exports=function(e,o,a,r){var s=a?a.call(r,e,o):void 0;if(s!==void 0)return!!s;if(e===o)return!0;if(typeof e!="object"||!e||typeof o!="object"||!o)return!1;var u=Object.keys(e),v=Object.keys(o);if(u.length!==v.length)return!1;for(var d=Object.prototype.hasOwnProperty.bind(o),h=0;h<u.length;h++){var m=u[h];if(!d(m))return!1;var p=e[m],y=o[m];if(s=a?a.call(r,p,y,m):void 0,s===!1||s===void 0&&p!==y)return!1}return!0}},11742:function(c){c.exports=function(){var l=document.getSelection();if(!l.rangeCount)return function(){};for(var e=document.activeElement,o=[],a=0;a<l.rangeCount;a++)o.push(l.getRangeAt(a));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return l.removeAllRanges(),function(){l.type==="Caret"&&l.removeAllRanges(),l.rangeCount||o.forEach(function(r){l.addRange(r)}),e&&e.focus()}}},37923:function(c){function l(e,o){(o==null||o>e.length)&&(o=e.length);for(var a=0,r=new Array(o);a<o;a++)r[a]=e[a];return r}c.exports=l,c.exports.__esModule=!0,c.exports.default=c.exports},82187:function(c){function l(e){if(Array.isArray(e))return e}c.exports=l,c.exports.__esModule=!0,c.exports.default=c.exports},99289:function(c){function l(o,a,r,s,u,v,d){try{var h=o[v](d),m=h.value}catch(p){r(p);return}h.done?a(m):Promise.resolve(m).then(s,u)}function e(o){return function(){var a=this,r=arguments;return new Promise(function(s,u){var v=o.apply(a,r);function d(m){l(v,s,u,d,h,"next",m)}function h(m){l(v,s,u,d,h,"throw",m)}d(void 0)})}}c.exports=e,c.exports.__esModule=!0,c.exports.default=c.exports},9783:function(c,l,e){var o=e(51883);function a(r,s,u){return s=o(s),s in r?Object.defineProperty(r,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[s]=u,r}c.exports=a,c.exports.__esModule=!0,c.exports.default=c.exports},73964:function(c){function l(e,o){var a=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,s,u,v,d=[],h=!0,m=!1;try{if(u=(a=a.call(e)).next,o===0){if(Object(a)!==a)return;h=!1}else for(;!(h=(r=u.call(a)).done)&&(d.push(r.value),d.length!==o);h=!0);}catch(p){m=!0,s=p}finally{try{if(!h&&a.return!=null&&(v=a.return(),Object(v)!==v))return}finally{if(m)throw s}}return d}}c.exports=l,c.exports.__esModule=!0,c.exports.default=c.exports},69094:function(c){function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}c.exports=l,c.exports.__esModule=!0,c.exports.default=c.exports},97857:function(c,l,e){var o=e(9783);function a(s,u){var v=Object.keys(s);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(s);u&&(d=d.filter(function(h){return Object.getOwnPropertyDescriptor(s,h).enumerable})),v.push.apply(v,d)}return v}function r(s){for(var u=1;u<arguments.length;u++){var v=arguments[u]!=null?arguments[u]:{};u%2?a(Object(v),!0).forEach(function(d){o(s,d,v[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(v)):a(Object(v)).forEach(function(d){Object.defineProperty(s,d,Object.getOwnPropertyDescriptor(v,d))})}return s}c.exports=r,c.exports.__esModule=!0,c.exports.default=c.exports},15009:function(c,l,e){var o=e(52677).default;function a(){"use strict";c.exports=a=function(){return r},c.exports.__esModule=!0,c.exports.default=c.exports;var r={},s=Object.prototype,u=s.hasOwnProperty,v=Object.defineProperty||function(Q,Y,k){Q[Y]=k.value},d=typeof Symbol=="function"?Symbol:{},h=d.iterator||"@@iterator",m=d.asyncIterator||"@@asyncIterator",p=d.toStringTag||"@@toStringTag";function y(Q,Y,k){return Object.defineProperty(Q,Y,{value:k,enumerable:!0,configurable:!0,writable:!0}),Q[Y]}try{y({},"")}catch(Q){y=function(k,K,re){return k[K]=re}}function g(Q,Y,k,K){var re=Y&&Y.prototype instanceof E?Y:E,T=Object.create(re.prototype),D=new be(K||[]);return v(T,"_invoke",{value:te(Q,k,D)}),T}function I(Q,Y,k){try{return{type:"normal",arg:Q.call(Y,k)}}catch(K){return{type:"throw",arg:K}}}r.wrap=g;var b={};function E(){}function R(){}function A(){}var N={};y(N,h,function(){return this});var w=Object.getPrototypeOf,B=w&&w(w(Te([])));B&&B!==s&&u.call(B,h)&&(N=B);var C=A.prototype=E.prototype=Object.create(N);function L(Q){["next","throw","return"].forEach(function(Y){y(Q,Y,function(k){return this._invoke(Y,k)})})}function Z(Q,Y){function k(re,T,D,V){var le=I(Q[re],Q,T);if(le.type!=="throw"){var J=le.arg,P=J.value;return P&&o(P)=="object"&&u.call(P,"__await")?Y.resolve(P.__await).then(function($){k("next",$,D,V)},function($){k("throw",$,D,V)}):Y.resolve(P).then(function($){J.value=$,D(J)},function($){return k("throw",$,D,V)})}V(le.arg)}var K;v(this,"_invoke",{value:function(T,D){function V(){return new Y(function(le,J){k(T,D,le,J)})}return K=K?K.then(V,V):V()}})}function te(Q,Y,k){var K="suspendedStart";return function(re,T){if(K==="executing")throw new Error("Generator is already running");if(K==="completed"){if(re==="throw")throw T;return ie()}for(k.method=re,k.arg=T;;){var D=k.delegate;if(D){var V=ee(D,k);if(V){if(V===b)continue;return V}}if(k.method==="next")k.sent=k._sent=k.arg;else if(k.method==="throw"){if(K==="suspendedStart")throw K="completed",k.arg;k.dispatchException(k.arg)}else k.method==="return"&&k.abrupt("return",k.arg);K="executing";var le=I(Q,Y,k);if(le.type==="normal"){if(K=k.done?"completed":"suspendedYield",le.arg===b)continue;return{value:le.arg,done:k.done}}le.type==="throw"&&(K="completed",k.method="throw",k.arg=le.arg)}}}function ee(Q,Y){var k=Y.method,K=Q.iterator[k];if(K===void 0)return Y.delegate=null,k==="throw"&&Q.iterator.return&&(Y.method="return",Y.arg=void 0,ee(Q,Y),Y.method==="throw")||k!=="return"&&(Y.method="throw",Y.arg=new TypeError("The iterator does not provide a '"+k+"' method")),b;var re=I(K,Q.iterator,Y.arg);if(re.type==="throw")return Y.method="throw",Y.arg=re.arg,Y.delegate=null,b;var T=re.arg;return T?T.done?(Y[Q.resultName]=T.value,Y.next=Q.nextLoc,Y.method!=="return"&&(Y.method="next",Y.arg=void 0),Y.delegate=null,b):T:(Y.method="throw",Y.arg=new TypeError("iterator result is not an object"),Y.delegate=null,b)}function _(Q){var Y={tryLoc:Q[0]};1 in Q&&(Y.catchLoc=Q[1]),2 in Q&&(Y.finallyLoc=Q[2],Y.afterLoc=Q[3]),this.tryEntries.push(Y)}function de(Q){var Y=Q.completion||{};Y.type="normal",delete Y.arg,Q.completion=Y}function be(Q){this.tryEntries=[{tryLoc:"root"}],Q.forEach(_,this),this.reset(!0)}function Te(Q){if(Q){var Y=Q[h];if(Y)return Y.call(Q);if(typeof Q.next=="function")return Q;if(!isNaN(Q.length)){var k=-1,K=function re(){for(;++k<Q.length;)if(u.call(Q,k))return re.value=Q[k],re.done=!1,re;return re.value=void 0,re.done=!0,re};return K.next=K}}return{next:ie}}function ie(){return{value:void 0,done:!0}}return R.prototype=A,v(C,"constructor",{value:A,configurable:!0}),v(A,"constructor",{value:R,configurable:!0}),R.displayName=y(A,p,"GeneratorFunction"),r.isGeneratorFunction=function(Q){var Y=typeof Q=="function"&&Q.constructor;return!!Y&&(Y===R||(Y.displayName||Y.name)==="GeneratorFunction")},r.mark=function(Q){return Object.setPrototypeOf?Object.setPrototypeOf(Q,A):(Q.__proto__=A,y(Q,p,"GeneratorFunction")),Q.prototype=Object.create(C),Q},r.awrap=function(Q){return{__await:Q}},L(Z.prototype),y(Z.prototype,m,function(){return this}),r.AsyncIterator=Z,r.async=function(Q,Y,k,K,re){re===void 0&&(re=Promise);var T=new Z(g(Q,Y,k,K),re);return r.isGeneratorFunction(Y)?T:T.next().then(function(D){return D.done?D.value:T.next()})},L(C),y(C,p,"Generator"),y(C,h,function(){return this}),y(C,"toString",function(){return"[object Generator]"}),r.keys=function(Q){var Y=Object(Q),k=[];for(var K in Y)k.push(K);return k.reverse(),function re(){for(;k.length;){var T=k.pop();if(T in Y)return re.value=T,re.done=!1,re}return re.done=!0,re}},r.values=Te,be.prototype={constructor:be,reset:function(Y){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(de),!Y)for(var k in this)k.charAt(0)==="t"&&u.call(this,k)&&!isNaN(+k.slice(1))&&(this[k]=void 0)},stop:function(){this.done=!0;var Y=this.tryEntries[0].completion;if(Y.type==="throw")throw Y.arg;return this.rval},dispatchException:function(Y){if(this.done)throw Y;var k=this;function K(J,P){return D.type="throw",D.arg=Y,k.next=J,P&&(k.method="next",k.arg=void 0),!!P}for(var re=this.tryEntries.length-1;re>=0;--re){var T=this.tryEntries[re],D=T.completion;if(T.tryLoc==="root")return K("end");if(T.tryLoc<=this.prev){var V=u.call(T,"catchLoc"),le=u.call(T,"finallyLoc");if(V&&le){if(this.prev<T.catchLoc)return K(T.catchLoc,!0);if(this.prev<T.finallyLoc)return K(T.finallyLoc)}else if(V){if(this.prev<T.catchLoc)return K(T.catchLoc,!0)}else{if(!le)throw new Error("try statement without catch or finally");if(this.prev<T.finallyLoc)return K(T.finallyLoc)}}}},abrupt:function(Y,k){for(var K=this.tryEntries.length-1;K>=0;--K){var re=this.tryEntries[K];if(re.tryLoc<=this.prev&&u.call(re,"finallyLoc")&&this.prev<re.finallyLoc){var T=re;break}}T&&(Y==="break"||Y==="continue")&&T.tryLoc<=k&&k<=T.finallyLoc&&(T=null);var D=T?T.completion:{};return D.type=Y,D.arg=k,T?(this.method="next",this.next=T.finallyLoc,b):this.complete(D)},complete:function(Y,k){if(Y.type==="throw")throw Y.arg;return Y.type==="break"||Y.type==="continue"?this.next=Y.arg:Y.type==="return"?(this.rval=this.arg=Y.arg,this.method="return",this.next="end"):Y.type==="normal"&&k&&(this.next=k),b},finish:function(Y){for(var k=this.tryEntries.length-1;k>=0;--k){var K=this.tryEntries[k];if(K.finallyLoc===Y)return this.complete(K.completion,K.afterLoc),de(K),b}},catch:function(Y){for(var k=this.tryEntries.length-1;k>=0;--k){var K=this.tryEntries[k];if(K.tryLoc===Y){var re=K.completion;if(re.type==="throw"){var T=re.arg;de(K)}return T}}throw new Error("illegal catch attempt")},delegateYield:function(Y,k,K){return this.delegate={iterator:Te(Y),resultName:k,nextLoc:K},this.method==="next"&&(this.arg=void 0),b}},r}c.exports=a,c.exports.__esModule=!0,c.exports.default=c.exports},5574:function(c,l,e){var o=e(82187),a=e(73964),r=e(96263),s=e(69094);function u(v,d){return o(v)||a(v,d)||r(v,d)||s()}c.exports=u,c.exports.__esModule=!0,c.exports.default=c.exports},66518:function(c,l,e){var o=e(52677).default;function a(r,s){if(o(r)!=="object"||r===null)return r;var u=r[Symbol.toPrimitive];if(u!==void 0){var v=u.call(r,s||"default");if(o(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(r)}c.exports=a,c.exports.__esModule=!0,c.exports.default=c.exports},51883:function(c,l,e){var o=e(52677).default,a=e(66518);function r(s){var u=a(s,"string");return o(u)==="symbol"?u:String(u)}c.exports=r,c.exports.__esModule=!0,c.exports.default=c.exports},52677:function(c){function l(e){"@babel/helpers - typeof";return c.exports=l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},c.exports.__esModule=!0,c.exports.default=c.exports,l(e)}c.exports=l,c.exports.__esModule=!0,c.exports.default=c.exports},96263:function(c,l,e){var o=e(37923);function a(r,s){if(r){if(typeof r=="string")return o(r,s);var u=Object.prototype.toString.call(r).slice(8,-1);if(u==="Object"&&r.constructor&&(u=r.constructor.name),u==="Map"||u==="Set")return Array.from(r);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return o(r,s)}}c.exports=a,c.exports.__esModule=!0,c.exports.default=c.exports},30907:function(c,l,e){"use strict";e.d(l,{Z:function(){return o}});function o(a,r){(r==null||r>a.length)&&(r=a.length);for(var s=0,u=new Array(r);s<r;s++)u[s]=a[s];return u}},83878:function(c,l,e){"use strict";e.d(l,{Z:function(){return o}});function o(a){if(Array.isArray(a))return a}},97326:function(c,l,e){"use strict";e.d(l,{Z:function(){return o}});function o(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}},15671:function(c,l,e){"use strict";e.d(l,{Z:function(){return o}});function o(a,r){if(!(a instanceof r))throw new TypeError("Cannot call a class as a function")}},43144:function(c,l,e){"use strict";e.d(l,{Z:function(){return r}});var o=e(83997);function a(s,u){for(var v=0;v<u.length;v++){var d=u[v];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(s,(0,o.Z)(d.key),d)}}function r(s,u,v){return u&&a(s.prototype,u),v&&a(s,v),Object.defineProperty(s,"prototype",{writable:!1}),s}},73568:function(c,l,e){"use strict";e.d(l,{Z:function(){return v}});function o(d){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(m){return m.__proto__||Object.getPrototypeOf(m)},o(d)}function a(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(d){return!1}}var r=e(71002),s=e(97326);function u(d,h){if(h&&((0,r.Z)(h)==="object"||typeof h=="function"))return h;if(h!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return(0,s.Z)(d)}function v(d){var h=a();return function(){var p=o(d),y;if(h){var g=o(this).constructor;y=Reflect.construct(p,arguments,g)}else y=p.apply(this,arguments);return u(this,y)}}},4942:function(c,l,e){"use strict";e.d(l,{Z:function(){return a}});var o=e(83997);function a(r,s,u){return s=(0,o.Z)(s),s in r?Object.defineProperty(r,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[s]=u,r}},87462:function(c,l,e){"use strict";e.d(l,{Z:function(){return o}});function o(){return o=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(a[u]=s[u])}return a},o.apply(this,arguments)}},32531:function(c,l,e){"use strict";e.d(l,{Z:function(){return a}});function o(r,s){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(v,d){return v.__proto__=d,v},o(r,s)}function a(r,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(s&&s.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),s&&o(r,s)}},59199:function(c,l,e){"use strict";e.d(l,{Z:function(){return o}});function o(a){if(typeof Symbol!="undefined"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}},25267:function(c,l,e){"use strict";e.d(l,{Z:function(){return o}});function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}},1413:function(c,l,e){"use strict";e.d(l,{Z:function(){return r}});var o=e(4942);function a(s,u){var v=Object.keys(s);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(s);u&&(d=d.filter(function(h){return Object.getOwnPropertyDescriptor(s,h).enumerable})),v.push.apply(v,d)}return v}function r(s){for(var u=1;u<arguments.length;u++){var v=arguments[u]!=null?arguments[u]:{};u%2?a(Object(v),!0).forEach(function(d){(0,o.Z)(s,d,v[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(v)):a(Object(v)).forEach(function(d){Object.defineProperty(s,d,Object.getOwnPropertyDescriptor(v,d))})}return s}},91:function(c,l,e){"use strict";e.d(l,{Z:function(){return a}});function o(r,s){if(r==null)return{};var u={},v=Object.keys(r),d,h;for(h=0;h<v.length;h++)d=v[h],!(s.indexOf(d)>=0)&&(u[d]=r[d]);return u}function a(r,s){if(r==null)return{};var u=o(r,s),v,d;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(r);for(d=0;d<h.length;d++)v=h[d],!(s.indexOf(v)>=0)&&Object.prototype.propertyIsEnumerable.call(r,v)&&(u[v]=r[v])}return u}},97685:function(c,l,e){"use strict";e.d(l,{Z:function(){return u}});var o=e(83878);function a(v,d){var h=v==null?null:typeof Symbol!="undefined"&&v[Symbol.iterator]||v["@@iterator"];if(h!=null){var m,p,y,g,I=[],b=!0,E=!1;try{if(y=(h=h.call(v)).next,d===0){if(Object(h)!==h)return;b=!1}else for(;!(b=(m=y.call(h)).done)&&(I.push(m.value),I.length!==d);b=!0);}catch(R){E=!0,p=R}finally{try{if(!b&&h.return!=null&&(g=h.return(),Object(g)!==g))return}finally{if(E)throw p}}return I}}var r=e(40181),s=e(25267);function u(v,d){return(0,o.Z)(v)||a(v,d)||(0,r.Z)(v,d)||(0,s.Z)()}},84506:function(c,l,e){"use strict";e.d(l,{Z:function(){return u}});var o=e(83878),a=e(59199),r=e(40181),s=e(25267);function u(v){return(0,o.Z)(v)||(0,a.Z)(v)||(0,r.Z)(v)||(0,s.Z)()}},74902:function(c,l,e){"use strict";e.d(l,{Z:function(){return v}});var o=e(30907);function a(d){if(Array.isArray(d))return(0,o.Z)(d)}var r=e(59199),s=e(40181);function u(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(d){return a(d)||(0,r.Z)(d)||(0,s.Z)(d)||u()}},83997:function(c,l,e){"use strict";e.d(l,{Z:function(){return r}});var o=e(71002);function a(s,u){if((0,o.Z)(s)!=="object"||s===null)return s;var v=s[Symbol.toPrimitive];if(v!==void 0){var d=v.call(s,u||"default");if((0,o.Z)(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(s)}function r(s){var u=a(s,"string");return(0,o.Z)(u)==="symbol"?u:String(u)}},71002:function(c,l,e){"use strict";e.d(l,{Z:function(){return o}});function o(a){"@babel/helpers - typeof";return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},o(a)}},40181:function(c,l,e){"use strict";e.d(l,{Z:function(){return a}});var o=e(30907);function a(r,s){if(r){if(typeof r=="string")return(0,o.Z)(r,s);var u=Object.prototype.toString.call(r).slice(8,-1);if(u==="Object"&&r.constructor&&(u=r.constructor.name),u==="Map"||u==="Set")return Array.from(r);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return(0,o.Z)(r,s)}}},58096:function(c,l,e){"use strict";e.d(l,{Z:function(){return o}});function o(){return o=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(a[u]=s[u])}return a},o.apply(this,arguments)}},49647:function(c,l,e){"use strict";e.d(l,{Z:function(){return a}});function o(r,s){if(r==null)return{};var u={},v=Object.keys(r),d,h;for(h=0;h<v.length;h++)d=v[h],!(s.indexOf(d)>=0)&&(u[d]=r[d]);return u}function a(r,s){if(r==null)return{};var u=o(r,s),v,d;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(r);for(d=0;d<h.length;d++)v=h[d],!(s.indexOf(v)>=0)&&Object.prototype.propertyIsEnumerable.call(r,v)&&(u[v]=r[v])}return u}},97582:function(c,l,e){"use strict";e.d(l,{ZT:function(){return a},_T:function(){return s},ev:function(){return B},pi:function(){return r}});var o=function(T,D){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(V,le){V.__proto__=le}||function(V,le){for(var J in le)Object.prototype.hasOwnProperty.call(le,J)&&(V[J]=le[J])},o(T,D)};function a(T,D){if(typeof D!="function"&&D!==null)throw new TypeError("Class extends value "+String(D)+" is not a constructor or null");o(T,D);function V(){this.constructor=T}T.prototype=D===null?Object.create(D):(V.prototype=D.prototype,new V)}var r=function(){return r=Object.assign||function(D){for(var V,le=1,J=arguments.length;le<J;le++){V=arguments[le];for(var P in V)Object.prototype.hasOwnProperty.call(V,P)&&(D[P]=V[P])}return D},r.apply(this,arguments)};function s(T,D){var V={};for(var le in T)Object.prototype.hasOwnProperty.call(T,le)&&D.indexOf(le)<0&&(V[le]=T[le]);if(T!=null&&typeof Object.getOwnPropertySymbols=="function")for(var J=0,le=Object.getOwnPropertySymbols(T);J<le.length;J++)D.indexOf(le[J])<0&&Object.prototype.propertyIsEnumerable.call(T,le[J])&&(V[le[J]]=T[le[J]]);return V}function u(T,D,V,le){var J=arguments.length,P=J<3?D:le===null?le=Object.getOwnPropertyDescriptor(D,V):le,$;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")P=Reflect.decorate(T,D,V,le);else for(var H=T.length-1;H>=0;H--)($=T[H])&&(P=(J<3?$(P):J>3?$(D,V,P):$(D,V))||P);return J>3&&P&&Object.defineProperty(D,V,P),P}function v(T,D){return function(V,le){D(V,le,T)}}function d(T,D,V,le,J,P){function $(fe){if(fe!==void 0&&typeof fe!="function")throw new TypeError("Function expected");return fe}for(var H=le.kind,q=H==="getter"?"get":H==="setter"?"set":"value",ae=!D&&T?le.static?T:T.prototype:null,Ce=D||(ae?Object.getOwnPropertyDescriptor(ae,le.name):{}),Le,Xe=!1,Ze=V.length-1;Ze>=0;Ze--){var je={};for(var Ye in le)je[Ye]=Ye==="access"?{}:le[Ye];for(var Ye in le.access)je.access[Ye]=le.access[Ye];je.addInitializer=function(fe){if(Xe)throw new TypeError("Cannot add initializers after decoration has completed");P.push($(fe||null))};var oe=(0,V[Ze])(H==="accessor"?{get:Ce.get,set:Ce.set}:Ce[q],je);if(H==="accessor"){if(oe===void 0)continue;if(oe===null||typeof oe!="object")throw new TypeError("Object expected");(Le=$(oe.get))&&(Ce.get=Le),(Le=$(oe.set))&&(Ce.set=Le),(Le=$(oe.init))&&J.unshift(Le)}else(Le=$(oe))&&(H==="field"?J.unshift(Le):Ce[q]=Le)}ae&&Object.defineProperty(ae,le.name,Ce),Xe=!0}function h(T,D,V){for(var le=arguments.length>2,J=0;J<D.length;J++)V=le?D[J].call(T,V):D[J].call(T);return le?V:void 0}function m(T){return typeof T=="symbol"?T:"".concat(T)}function p(T,D,V){return typeof D=="symbol"&&(D=D.description?"[".concat(D.description,"]"):""),Object.defineProperty(T,"name",{configurable:!0,value:V?"".concat(V," ",D):D})}function y(T,D){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(T,D)}function g(T,D,V,le){function J(P){return P instanceof V?P:new V(function($){$(P)})}return new(V||(V=Promise))(function(P,$){function H(Ce){try{ae(le.next(Ce))}catch(Le){$(Le)}}function q(Ce){try{ae(le.throw(Ce))}catch(Le){$(Le)}}function ae(Ce){Ce.done?P(Ce.value):J(Ce.value).then(H,q)}ae((le=le.apply(T,D||[])).next())})}function I(T,D){var V={label:0,sent:function(){if(P[0]&1)throw P[1];return P[1]},trys:[],ops:[]},le,J,P,$;return $={next:H(0),throw:H(1),return:H(2)},typeof Symbol=="function"&&($[Symbol.iterator]=function(){return this}),$;function H(ae){return function(Ce){return q([ae,Ce])}}function q(ae){if(le)throw new TypeError("Generator is already executing.");for(;$&&($=0,ae[0]&&(V=0)),V;)try{if(le=1,J&&(P=ae[0]&2?J.return:ae[0]?J.throw||((P=J.return)&&P.call(J),0):J.next)&&!(P=P.call(J,ae[1])).done)return P;switch(J=0,P&&(ae=[ae[0]&2,P.value]),ae[0]){case 0:case 1:P=ae;break;case 4:return V.label++,{value:ae[1],done:!1};case 5:V.label++,J=ae[1],ae=[0];continue;case 7:ae=V.ops.pop(),V.trys.pop();continue;default:if(P=V.trys,!(P=P.length>0&&P[P.length-1])&&(ae[0]===6||ae[0]===2)){V=0;continue}if(ae[0]===3&&(!P||ae[1]>P[0]&&ae[1]<P[3])){V.label=ae[1];break}if(ae[0]===6&&V.label<P[1]){V.label=P[1],P=ae;break}if(P&&V.label<P[2]){V.label=P[2],V.ops.push(ae);break}P[2]&&V.ops.pop(),V.trys.pop();continue}ae=D.call(T,V)}catch(Ce){ae=[6,Ce],J=0}finally{le=P=0}if(ae[0]&5)throw ae[1];return{value:ae[0]?ae[1]:void 0,done:!0}}}var b=Object.create?function(T,D,V,le){le===void 0&&(le=V);var J=Object.getOwnPropertyDescriptor(D,V);(!J||("get"in J?!D.__esModule:J.writable||J.configurable))&&(J={enumerable:!0,get:function(){return D[V]}}),Object.defineProperty(T,le,J)}:function(T,D,V,le){le===void 0&&(le=V),T[le]=D[V]};function E(T,D){for(var V in T)V!=="default"&&!Object.prototype.hasOwnProperty.call(D,V)&&b(D,T,V)}function R(T){var D=typeof Symbol=="function"&&Symbol.iterator,V=D&&T[D],le=0;if(V)return V.call(T);if(T&&typeof T.length=="number")return{next:function(){return T&&le>=T.length&&(T=void 0),{value:T&&T[le++],done:!T}}};throw new TypeError(D?"Object is not iterable.":"Symbol.iterator is not defined.")}function A(T,D){var V=typeof Symbol=="function"&&T[Symbol.iterator];if(!V)return T;var le=V.call(T),J,P=[],$;try{for(;(D===void 0||D-- >0)&&!(J=le.next()).done;)P.push(J.value)}catch(H){$={error:H}}finally{try{J&&!J.done&&(V=le.return)&&V.call(le)}finally{if($)throw $.error}}return P}function N(){for(var T=[],D=0;D<arguments.length;D++)T=T.concat(A(arguments[D]));return T}function w(){for(var T=0,D=0,V=arguments.length;D<V;D++)T+=arguments[D].length;for(var le=Array(T),J=0,D=0;D<V;D++)for(var P=arguments[D],$=0,H=P.length;$<H;$++,J++)le[J]=P[$];return le}function B(T,D,V){if(V||arguments.length===2)for(var le=0,J=D.length,P;le<J;le++)(P||!(le in D))&&(P||(P=Array.prototype.slice.call(D,0,le)),P[le]=D[le]);return T.concat(P||Array.prototype.slice.call(D))}function C(T){return this instanceof C?(this.v=T,this):new C(T)}function L(T,D,V){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var le=V.apply(T,D||[]),J,P=[];return J={},$("next"),$("throw"),$("return"),J[Symbol.asyncIterator]=function(){return this},J;function $(Xe){le[Xe]&&(J[Xe]=function(Ze){return new Promise(function(je,Ye){P.push([Xe,Ze,je,Ye])>1||H(Xe,Ze)})})}function H(Xe,Ze){try{q(le[Xe](Ze))}catch(je){Le(P[0][3],je)}}function q(Xe){Xe.value instanceof C?Promise.resolve(Xe.value.v).then(ae,Ce):Le(P[0][2],Xe)}function ae(Xe){H("next",Xe)}function Ce(Xe){H("throw",Xe)}function Le(Xe,Ze){Xe(Ze),P.shift(),P.length&&H(P[0][0],P[0][1])}}function Z(T){var D,V;return D={},le("next"),le("throw",function(J){throw J}),le("return"),D[Symbol.iterator]=function(){return this},D;function le(J,P){D[J]=T[J]?function($){return(V=!V)?{value:C(T[J]($)),done:!1}:P?P($):$}:P}}function te(T){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var D=T[Symbol.asyncIterator],V;return D?D.call(T):(T=typeof R=="function"?R(T):T[Symbol.iterator](),V={},le("next"),le("throw"),le("return"),V[Symbol.asyncIterator]=function(){return this},V);function le(P){V[P]=T[P]&&function($){return new Promise(function(H,q){$=T[P]($),J(H,q,$.done,$.value)})}}function J(P,$,H,q){Promise.resolve(q).then(function(ae){P({value:ae,done:H})},$)}}function ee(T,D){return Object.defineProperty?Object.defineProperty(T,"raw",{value:D}):T.raw=D,T}var _=Object.create?function(T,D){Object.defineProperty(T,"default",{enumerable:!0,value:D})}:function(T,D){T.default=D};function de(T){if(T&&T.__esModule)return T;var D={};if(T!=null)for(var V in T)V!=="default"&&Object.prototype.hasOwnProperty.call(T,V)&&b(D,T,V);return _(D,T),D}function be(T){return T&&T.__esModule?T:{default:T}}function Te(T,D,V,le){if(V==="a"&&!le)throw new TypeError("Private accessor was defined without a getter");if(typeof D=="function"?T!==D||!le:!D.has(T))throw new TypeError("Cannot read private member from an object whose class did not declare it");return V==="m"?le:V==="a"?le.call(T):le?le.value:D.get(T)}function ie(T,D,V,le,J){if(le==="m")throw new TypeError("Private method is not writable");if(le==="a"&&!J)throw new TypeError("Private accessor was defined without a setter");if(typeof D=="function"?T!==D||!J:!D.has(T))throw new TypeError("Cannot write private member to an object whose class did not declare it");return le==="a"?J.call(T,V):J?J.value=V:D.set(T,V),V}function Q(T,D){if(D===null||typeof D!="object"&&typeof D!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof T=="function"?D===T:T.has(D)}function Y(T,D,V){if(D!=null){if(typeof D!="object"&&typeof D!="function")throw new TypeError("Object expected.");var le;if(V){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");le=D[Symbol.asyncDispose]}if(le===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");le=D[Symbol.dispose]}if(typeof le!="function")throw new TypeError("Object not disposable.");T.stack.push({value:D,dispose:le,async:V})}else V&&T.stack.push({async:!0});return D}var k=typeof SuppressedError=="function"?SuppressedError:function(T,D,V){var le=new Error(V);return le.name="SuppressedError",le.error=T,le.suppressed=D,le};function K(T){function D(le){T.error=T.hasError?new k(le,T.error,"An error was suppressed during disposal."):le,T.hasError=!0}function V(){for(;T.stack.length;){var le=T.stack.pop();try{var J=le.dispose&&le.dispose.call(le.value);if(le.async)return Promise.resolve(J).then(V,function(P){return D(P),V()})}catch(P){D(P)}}if(T.hasError)throw T.error}return V()}var re={__extends:a,__assign:r,__rest:s,__decorate:u,__param:v,__metadata:y,__awaiter:g,__generator:I,__createBinding:b,__exportStar:E,__values:R,__read:A,__spread:N,__spreadArrays:w,__spreadArray:B,__await:C,__asyncGenerator:L,__asyncDelegator:Z,__asyncValues:te,__makeTemplateObject:ee,__importStar:de,__importDefault:be,__classPrivateFieldGet:Te,__classPrivateFieldSet:ie,__classPrivateFieldIn:Q,__addDisposableResource:Y,__disposeResources:K}}},__webpack_module_cache__={};function __webpack_require__(c){var l=__webpack_module_cache__[c];if(l!==void 0)return l.exports;var e=__webpack_module_cache__[c]={id:c,loaded:!1,exports:{}};return __webpack_modules__[c].call(e.exports,e,e.exports,__webpack_require__),e.loaded=!0,e.exports}__webpack_require__.m=__webpack_modules__,function(){__webpack_require__.n=function(c){var l=c&&c.__esModule?function(){return c.default}:function(){return c};return __webpack_require__.d(l,{a:l}),l}}(),function(){var c=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},l;__webpack_require__.t=function(e,o){if(o&1&&(e=this(e)),o&8||typeof e=="object"&&e&&(o&4&&e.__esModule||o&16&&typeof e.then=="function"))return e;var a=Object.create(null);__webpack_require__.r(a);var r={};l=l||[null,c({}),c([]),c(c)];for(var s=o&2&&e;typeof s=="object"&&!~l.indexOf(s);s=c(s))Object.getOwnPropertyNames(s).forEach(function(u){r[u]=function(){return e[u]}});return r.default=function(){return e},__webpack_require__.d(a,r),a}}(),function(){__webpack_require__.d=function(c,l){for(var e in l)__webpack_require__.o(l,e)&&!__webpack_require__.o(c,e)&&Object.defineProperty(c,e,{enumerable:!0,get:l[e]})}}(),function(){__webpack_require__.f={},__webpack_require__.e=function(c){return Promise.all(Object.keys(__webpack_require__.f).reduce(function(l,e){return __webpack_require__.f[e](c,l),l},[]))}}(),function(){__webpack_require__.u=function(c){return""+({25:"ModalForm__index.md",96:"dumi__theme__layouts__DocLayout",107:"docs__changelog__index.md",131:"BusinessTreeSelectBuilder__index.md",147:"FormUpload__index.md",152:"dumi__pages__index",216:"SchemaForm__demos",283:"SettingProvider__index.md",364:"BusinessSelectBuilder__demos",371:"ProTable__index.md",400:"dumi__pages__404",424:"ModalForm__demos",438:"BusinessTreeSelectBuilder__demos",448:"dumi__pages__Demo",458:"dumi__theme__ContextWrapper",544:"Button__index.md",570:"Button__demos",587:"LinkButton__demos",646:"SchemaForm__index.md",749:"FormUpload__demos",781:"LinkButton__index.md",809:"SettingProvider__demos",843:"ProTable__demos",868:"docs__intro__index.md",970:"BusinessSelectBuilder__index.md"}[c]||c)+"."+{25:"c2689369",96:"98c00b0c",107:"d487087e",131:"7be3339c",147:"3f318e78",152:"78eb3ae0",216:"80d8f7da",230:"3ad446c1",244:"ed744694",283:"94f69d06",364:"2e42af55",371:"02a2e4a4",400:"322f6c9c",424:"b7974d35",428:"d0e17342",438:"b3198ea9",448:"33e73aa2",458:"07ad718b",482:"e159d221",544:"26f6a6fd",570:"2c184b96",587:"9a6fd366",646:"91c68c0b",749:"6bd9ed00",769:"66a4bced",781:"5276378d",809:"10cd600c",843:"bf4d9e39",868:"1a25ed80",970:"9db287a7"}[c]+".async.js"}}(),function(){__webpack_require__.miniCssF=function(c){}}(),function(){__webpack_require__.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(c){if(typeof window=="object")return window}}()}(),function(){__webpack_require__.o=function(c,l){return Object.prototype.hasOwnProperty.call(c,l)}}(),function(){var c={},l="react-admin-kit:";__webpack_require__.l=function(e,o,a,r){if(c[e]){c[e].push(o);return}var s,u;if(a!==void 0)for(var v=document.getElementsByTagName("script"),d=0;d<v.length;d++){var h=v[d];if(h.getAttribute("src")==e||h.getAttribute("data-webpack")==l+a){s=h;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,__webpack_require__.nc&&s.setAttribute("nonce",__webpack_require__.nc),s.setAttribute("data-webpack",l+a),s.src=e),c[e]=[o];var m=function(y,g){s.onerror=s.onload=null,clearTimeout(p);var I=c[e];if(delete c[e],s.parentNode&&s.parentNode.removeChild(s),I&&I.forEach(function(b){return b(g)}),y)return y(g)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),u&&document.head.appendChild(s)}}(),function(){__webpack_require__.r=function(c){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})}}(),function(){__webpack_require__.nmd=function(c){return c.paths=[],c.children||(c.children=[]),c}}(),function(){__webpack_require__.p="/react-admin-kit/"}(),function(){var c={620:0};__webpack_require__.f.j=function(o,a){var r=__webpack_require__.o(c,o)?c[o]:void 0;if(r!==0)if(r)a.push(r[2]);else{var s=new Promise(function(h,m){r=c[o]=[h,m]});a.push(r[2]=s);var u=__webpack_require__.p+__webpack_require__.u(o),v=new Error,d=function(h){if(__webpack_require__.o(c,o)&&(r=c[o],r!==0&&(c[o]=void 0),r)){var m=h&&(h.type==="load"?"missing":h.type),p=h&&h.target&&h.target.src;v.message="Loading chunk "+o+` failed.
(`+m+": "+p+")",v.name="ChunkLoadError",v.type=m,v.request=p,r[1](v)}};__webpack_require__.l(u,d,"chunk-"+o,o)}};var l=function(o,a){var r=a[0],s=a[1],u=a[2],v,d,h=0;if(r.some(function(p){return c[p]!==0})){for(v in s)__webpack_require__.o(s,v)&&(__webpack_require__.m[v]=s[v]);if(u)var m=u(__webpack_require__)}for(o&&o(a);h<r.length;h++)d=r[h],__webpack_require__.o(c,d)&&c[d]&&c[d][0](),c[d]=0},e=self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[];e.forEach(l.bind(null,0)),e.push=l.bind(null,e.push.bind(e))}();var __webpack_exports__={};(function(){"use strict";var c=__webpack_require__(15009),l=__webpack_require__.n(c),e=__webpack_require__(97857),o=__webpack_require__.n(e),a=__webpack_require__(99289),r=__webpack_require__.n(a),s=__webpack_require__(21703),u=__webpack_require__(9170),v=__webpack_require__(32120),d=__webpack_require__(52262),h=__webpack_require__(67635),m=__webpack_require__(77287),p=__webpack_require__(57658),y=__webpack_require__(85827),g=__webpack_require__(96644),I=__webpack_require__(90476),b=__webpack_require__(76459),E=__webpack_require__(99892),R=__webpack_require__(35581),A=__webpack_require__(46314),N=__webpack_require__(34668),w=__webpack_require__(81299),B=__webpack_require__(92087),C=__webpack_require__(24506),L=__webpack_require__(68757),Z=__webpack_require__(48675),te=__webpack_require__(63408),ee=__webpack_require__(14590),_=__webpack_require__(3462),de=__webpack_require__(1439),be=__webpack_require__(87585),Te=__webpack_require__(55315),ie=__webpack_require__(16586),Q=__webpack_require__(19258),Y=__webpack_require__(84811),k=__webpack_require__(34286),K=__webpack_require__(52550),re=__webpack_require__(1999),T=__webpack_require__(61886),D=__webpack_require__(59422),V=__webpack_require__(8e4),le=__webpack_require__(83475),J=__webpack_require__(46273),P=__webpack_require__(3087),$=__webpack_require__(23252),H=__webpack_require__(6461),q=__webpack_require__(32372),ae=__webpack_require__(4763),Ce=__webpack_require__(66342),Le=__webpack_require__(40787),Xe=__webpack_require__(1094),Ze=__webpack_require__(23647),je=__webpack_require__(68216),Ye=__webpack_require__(88449),oe=__webpack_require__(31672),fe=__webpack_require__(74326),pe=__webpack_require__(15581),me=__webpack_require__(78631),Pe=__webpack_require__(48746),se=__webpack_require__(57640),ve=__webpack_require__(25387),ye=__webpack_require__(64211),De=__webpack_require__(12771),ze=__webpack_require__(62962),bt=__webpack_require__(71790),at=__webpack_require__(51568),lt=__webpack_require__(26349),St=__webpack_require__(30800),Bt=__webpack_require__(48580),Ot=__webpack_require__(67427),Wt=__webpack_require__(32279),x=__webpack_require__(13384),U=__webpack_require__(2490),ne=__webpack_require__(85567),ue=__webpack_require__(18359),Ie=__webpack_require__(5332),Oe=__webpack_require__(79433),Se=__webpack_require__(59849),$e=__webpack_require__(59461),Ve=__webpack_require__(82499),Ge=__webpack_require__(34514),vt=__webpack_require__(26877),he=__webpack_require__(64994),Be=__webpack_require__(9924),Fe=__webpack_require__(64411),Re=__webpack_require__(72608),Je=__webpack_require__(41874),Ue=__webpack_require__(66043),It=__webpack_require__(23748),xt=__webpack_require__(71501),Dt=__webpack_require__(60855),En=__webpack_require__(43847),Xt=__webpack_require__(38564),Mn=__webpack_require__(10072),Wn=__webpack_require__(23042),Ar=__webpack_require__(99137),Kr=__webpack_require__(71957),jn=__webpack_require__(96306),Bn=__webpack_require__(103),Gn=__webpack_require__(8582),pt=__webpack_require__(90618),st=__webpack_require__(74592),mt=__webpack_require__(88440),kt=__webpack_require__(58276),qt=__webpack_require__(35082),zt=__webpack_require__(12813),Zn=__webpack_require__(18222),bn=__webpack_require__(24838),qn=__webpack_require__(38563),qr=__webpack_require__(50336),Nn=__webpack_require__(7512),ha=__webpack_require__(74442),wa=__webpack_require__(87713),Ua=__webpack_require__(46603),ia=__webpack_require__(70100),Hn=__webpack_require__(10490),Oo=__webpack_require__(13187),Qa=__webpack_require__(60092),ua=__webpack_require__(19041),Zo=__webpack_require__(30666),Vr=__webpack_require__(51638),fn=__webpack_require__(62975),wn=__webpack_require__(15728),fr=__webpack_require__(46056),ea=__webpack_require__(44299),sa=__webpack_require__(5162),$o=__webpack_require__(50292),Ea=__webpack_require__(29427),fi=__webpack_require__(99964),xo=__webpack_require__(75238),Ro=__webpack_require__(4987),Yr=__webpack_require__(1025),Tr=__webpack_require__(77479),yr=__webpack_require__(34582),la=__webpack_require__(47896),oo=__webpack_require__(12647),rr=__webpack_require__(98558),za=__webpack_require__(84018),ni=__webpack_require__(97507),Ao=__webpack_require__(61605),hu=__webpack_require__(49076),Ji=__webpack_require__(34999),vi=__webpack_require__(88921),So=__webpack_require__(96248),Mo=__webpack_require__(27561),io=__webpack_require__(13599),uo=__webpack_require__(11477),so=__webpack_require__(64362),pi=__webpack_require__(15389),wo=__webpack_require__(46006),lo=__webpack_require__(3440),_i=__webpack_require__(90401),mi=__webpack_require__(66244),No=__webpack_require__(45164),Ai=__webpack_require__(89772),Ho=__webpack_require__(91238),Za=__webpack_require__(88910),Mi=__webpack_require__(54837),wu=__webpack_require__(87485),hi=__webpack_require__(56767),ri=__webpack_require__(69916),Ko=__webpack_require__(76651),yi=__webpack_require__(61437),Nu=__webpack_require__(63252),yu=__webpack_require__(35285),gi=__webpack_require__(17454),Wo=__webpack_require__(39865),wi=__webpack_require__(86035),Ni=__webpack_require__(50058),ba=__webpack_require__(67501),Go=__webpack_require__(85576),Li=__webpack_require__(98275),qi=__webpack_require__(71842),Di=__webpack_require__(609),Fi=__webpack_require__(21568),eu=__webpack_require__(96431),Na=__webpack_require__(40050),ai=__webpack_require__(54534),Vo=__webpack_require__(95090),oi=__webpack_require__(34744),ii=__webpack_require__(48824),Ii=__webpack_require__(44130),Bi=__webpack_require__(35954),Eo=__webpack_require__(16850),ki=__webpack_require__(26182),gu=__webpack_require__(8922),ji=__webpack_require__(5835),Lu=__webpack_require__(8970),Du=__webpack_require__(84444),Ui=__webpack_require__(78206),zi=__webpack_require__(76478),Fu=__webpack_require__(79715),Zi=__webpack_require__(12714),Iu=__webpack_require__(5964),M=__webpack_require__(43561),z=__webpack_require__(32049),j=__webpack_require__(86020),ce=__webpack_require__(56585),He=__webpack_require__(82801),tt=__webpack_require__(84633),_e=__webpack_require__(71550),nt=__webpack_require__(61295),it=__webpack_require__(35666),ut=__webpack_require__(24497),Ft=__webpack_require__(77742);function hn(ft){"@babel/helpers - typeof";return hn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(ot){return typeof ot}:function(ot){return ot&&typeof Symbol=="function"&&ot.constructor===Symbol&&ot!==Symbol.prototype?"symbol":typeof ot},hn(ft)}function sn(ft,ot){if(hn(ft)!=="object"||ft===null)return ft;var Zt=ft[Symbol.toPrimitive];if(Zt!==void 0){var xn=Zt.call(ft,ot||"default");if(hn(xn)!=="object")return xn;throw new TypeError("@@toPrimitive must return a primitive value.")}return(ot==="string"?String:Number)(ft)}function Jt(ft){var ot=sn(ft,"string");return hn(ot)==="symbol"?ot:String(ot)}function cn(ft,ot,Zt){return ot=Jt(ot),ot in ft?Object.defineProperty(ft,ot,{value:Zt,enumerable:!0,configurable:!0,writable:!0}):ft[ot]=Zt,ft}function Qn(ft,ot){var Zt=Object.keys(ft);if(Object.getOwnPropertySymbols){var xn=Object.getOwnPropertySymbols(ft);ot&&(xn=xn.filter(function(Xn){return Object.getOwnPropertyDescriptor(ft,Xn).enumerable})),Zt.push.apply(Zt,xn)}return Zt}function $n(ft){for(var ot=1;ot<arguments.length;ot++){var Zt=arguments[ot]!=null?arguments[ot]:{};ot%2?Qn(Object(Zt),!0).forEach(function(xn){cn(ft,xn,Zt[xn])}):Object.getOwnPropertyDescriptors?Object.defineProperties(ft,Object.getOwnPropertyDescriptors(Zt)):Qn(Object(Zt)).forEach(function(xn){Object.defineProperty(ft,xn,Object.getOwnPropertyDescriptor(Zt,xn))})}return ft}function lr(ft){if(Array.isArray(ft))return ft}function Dr(ft,ot){var Zt=ft==null?null:typeof Symbol!="undefined"&&ft[Symbol.iterator]||ft["@@iterator"];if(Zt!=null){var xn,Xn,Sr,Ir,F=[],G=!0,X=!1;try{if(Sr=(Zt=Zt.call(ft)).next,ot===0){if(Object(Zt)!==Zt)return;G=!1}else for(;!(G=(xn=Sr.call(Zt)).done)&&(F.push(xn.value),F.length!==ot);G=!0);}catch(Ee){X=!0,Xn=Ee}finally{try{if(!G&&Zt.return!=null&&(Ir=Zt.return(),Object(Ir)!==Ir))return}finally{if(X)throw Xn}}return F}}function gr(ft,ot){(ot==null||ot>ft.length)&&(ot=ft.length);for(var Zt=0,xn=new Array(ot);Zt<ot;Zt++)xn[Zt]=ft[Zt];return xn}function Lo(ft,ot){if(ft){if(typeof ft=="string")return gr(ft,ot);var Zt=Object.prototype.toString.call(ft).slice(8,-1);if(Zt==="Object"&&ft.constructor&&(Zt=ft.constructor.name),Zt==="Map"||Zt==="Set")return Array.from(ft);if(Zt==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Zt))return gr(ft,ot)}}function La(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $a(ft,ot){return lr(ft)||Dr(ft,ot)||Lo(ft,ot)||La()}var rn=__webpack_require__(67294),Ta=__webpack_require__(20745),Da=__webpack_require__(20057),Pa=__webpack_require__(34162),ui=__webpack_require__(49647),$i=__webpack_require__(58096),xi=__webpack_require__(59918),Si=["redirect"];function Ei(ft){var ot=ft.routesById,Zt=ft.parentId,xn=ft.routeComponents;return Object.keys(ot).filter(function(Xn){return ot[Xn].parentId===Zt}).map(function(Xn){var Sr=Do($n({route:ot[Xn],routeComponent:xn[Xn],loadingComponent:ft.loadingComponent,reactRouter5Compat:ft.reactRouter5Compat},ft.reactRouter5Compat&&{hasChildren:Object.keys(ot).filter(function(F){return ot[F].parentId===Xn}).length>0})),Ir=Ei({routesById:ot,routeComponents:xn,parentId:Sr.id,loadingComponent:ft.loadingComponent,reactRouter5Compat:ft.reactRouter5Compat});return Ir.length>0&&(Sr.children=Ir,Sr.routes=Ir),Sr})}function co(ft){var ot=(0,Da.UO)(),Zt=$n($n({},ft),{},{to:(0,Da.Gn)(ft.to,ot)});return rn.createElement(Da.Fg,(0,$i.Z)({replace:!0},Zt))}function Do(ft){var ot=ft.route,Zt=ot.redirect,xn=(0,ui.Z)(ot,Si),Xn=ft.reactRouter5Compat?Fo:tu;return $n({element:Zt?rn.createElement(co,{to:Zt}):rn.createElement(xi.X.Provider,{value:{route:ft.route}},rn.createElement(Xn,{loader:rn.memo(ft.routeComponent),loadingComponent:ft.loadingComponent||Ju,hasChildren:ft.hasChildren}))},xn)}function Ju(){return rn.createElement("div",null)}function Fo(ft){var ot=(0,xi.Q)(),Zt=ot.route,xn=(0,Pa.Ov)(),Xn=xn.history,Sr=xn.clientRoutes,Ir=(0,Da.UO)(),F={params:Ir,isExact:!0,path:Zt.path,url:Xn.location.pathname},G=ft.loader;return rn.createElement(rn.Suspense,{fallback:rn.createElement(ft.loadingComponent,null)},rn.createElement(G,{location:Xn.location,match:F,history:Xn,params:Ir,route:Zt,routes:Sr},ft.hasChildren&&rn.createElement(Da.j3,null)))}function tu(ft){var ot=ft.loader;return rn.createElement(rn.Suspense,{fallback:rn.createElement(ft.loadingComponent,null)},rn.createElement(ot,null))}var nu=null;function xu(){return nu}function Su(ft){var ot=ft.history,Zt=rn.useState({action:ot.action,location:ot.location}),xn=$a(Zt,2),Xn=xn[0],Sr=xn[1];return(0,rn.useLayoutEffect)(function(){return ot.listen(Sr)},[ot]),(0,rn.useLayoutEffect)(function(){function Ir(F){ft.pluginManager.applyPlugins({key:"onRouteChange",type:"event",args:{routes:ft.routes,clientRoutes:ft.clientRoutes,location:F.location,action:F.action,basename:ft.basename,isFirst:!!F.isFirst}})}return Ir({location:Xn.location,action:Xn.action,isFirst:!0}),ot.listen(Ir)},[ot,ft.routes,ft.clientRoutes]),rn.createElement(Da.F0,{navigator:ot,location:Xn.location,basename:ft.basename},ft.children)}function Bu(){var ft=(0,Pa.Ov)(),ot=ft.clientRoutes;return(0,Da.V$)(ot)}var ku=["innerProvider","i18nProvider","accessProvider","dataflowProvider","outerProvider","rootContainer"],ju=function(ot,Zt){var xn=ot.basename||"/",Xn=Ei({routesById:ot.routes,routeComponents:ot.routeComponents,loadingComponent:ot.loadingComponent,reactRouter5Compat:ot.reactRouter5Compat});ot.pluginManager.applyPlugins({key:"patchClientRoutes",type:"event",args:{routes:Xn}});for(var Sr=rn.createElement(Su,{basename:xn,pluginManager:ot.pluginManager,routes:ot.routes,clientRoutes:Xn,history:ot.history},Zt),Ir=0,F=ku;Ir<F.length;Ir++){var G=F[Ir];Sr=ot.pluginManager.applyPlugins({type:"modify",key:G,initialValue:Sr,args:{routes:ot.routes,history:ot.history,plugin:ot.pluginManager}})}var X=function(){var xe=(0,rn.useState)({}),Me=$a(xe,2),we=Me[0],Ke=Me[1],qe=(0,rn.useState)(window.__UMI_LOADER_DATA__||{}),rt=$a(qe,2),Pt=rt[0],et=rt[1],Tt=(0,rn.useCallback)(function(ht,Ct){var Lt,Gt=(((Lt=(0,Da.fp)(Xn,ht,xn))===null||Lt===void 0?void 0:Lt.map(function(Mt){return Mt.route.id}))||[]).filter(Boolean);Gt.forEach(function(Mt){var dt,At,ct=window.__umi_manifest__;if(ct){var jt=Mt.replace(/[\/\-]/g,"_"),Ht="preload-".concat(jt,".js");if(!document.getElementById(Ht)){var on=Object.keys(ct).filter(function(Nt){return Nt.startsWith(jt+".")});on.forEach(function(Nt){if(!/\.(js|css)$/.test(Nt))throw Error("preload not support ".concat(Nt," file"));var wt=ct[Nt],nn=document.createElement("link");nn.rel="preload",nn.as="style",Nt.endsWith(".js")&&(nn.as="script",nn.id=Ht),ot.runtimePublicPath&&(wt=wt.replace(new RegExp("^".concat(ot.publicPath)),window.publicPath)),nn.href=wt,document.head.appendChild(nn)})}}!Ct&&(dt=ot.routes[Mt])!==null&&dt!==void 0&&dt.hasServerLoader&&fetch("/__serverLoader?route="+Mt).then(function(Nt){return Nt.json()}).then(function(Nt){rn.startTransition(function(){et(function(wt){return $n($n({},wt),{},cn({},Mt,Nt))})})}).catch(console.error);var Ut=(At=ot.routes[Mt])===null||At===void 0?void 0:At.clientLoader;Ut&&!we[Mt]&&Ut().then(function(Nt){Ke(function(wt){return $n($n({},wt),{},cn({},Mt,Nt))})})})},[we]);return(0,rn.useEffect)(function(){return Tt(window.location.pathname,!0),ot.history.listen(function(ht){Tt(ht.location.pathname)})},[]),(0,rn.useLayoutEffect)(function(){typeof ot.callback=="function"&&ot.callback()},[]),rn.createElement(Pa.Il.Provider,{value:{routes:ot.routes,routeComponents:ot.routeComponents,clientRoutes:Xn,pluginManager:ot.pluginManager,rootElement:ot.rootElement,basename:xn,clientLoaderData:we,serverLoaderData:Pt,preloadRoute:Tt,history:ot.history}},Sr)};return X};function _u(ft){var ot=ft.rootElement||document.getElementById("root"),Zt=ju(ft,rn.createElement(Bu,null));if(ft.components)return Zt;if(ft.hydrate){Ta.hydrateRoot(ot,rn.createElement(Zt,null));return}if(Ta.createRoot){nu=Ta.createRoot(ot),nu.render(rn.createElement(Zt,null));return}Ta.render(rn.createElement(Zt,null),ot)}function Uu(){return Eu.apply(this,arguments)}function Eu(){return Eu=r()(l()().mark(function ft(){var ot;return l()().wrap(function(xn){for(;;)switch(xn.prev=xn.next){case 0:return ot={404:{id:"404",path:"*",parentId:"DocLayout"},"dumi-context-layout":{id:"dumi-context-layout",path:"/",isLayout:!0},DocLayout:{id:"DocLayout",path:"/",parentId:"dumi-context-layout",isLayout:!0},index:{path:"",id:"index",parentId:"DocLayout",hasServerLoader:!1},"docs/changelog/index":{path:"changelog",id:"docs/changelog/index",parentId:"DocLayout"},"docs/intro/index":{path:"intro",id:"docs/intro/index",parentId:"DocLayout"},"components/BusinessSelectBuilder/index":{id:"components/BusinessSelectBuilder/index",path:"components/business-select-builder",parentId:"DocLayout",meta:{_atom_route:!0}},"components/BusinessTreeSelectBuilder/index":{id:"components/BusinessTreeSelectBuilder/index",path:"components/business-tree-select-builder",parentId:"DocLayout",meta:{_atom_route:!0}},"components/Button/index":{id:"components/Button/index",path:"components/button",parentId:"DocLayout",meta:{_atom_route:!0}},"components/FormUpload/index":{id:"components/FormUpload/index",path:"components/form-upload",parentId:"DocLayout",meta:{_atom_route:!0}},"components/LinkButton/index":{id:"components/LinkButton/index",path:"components/link-button",parentId:"DocLayout",meta:{_atom_route:!0}},"components/ModalForm/index":{id:"components/ModalForm/index",path:"components/modal-form",parentId:"DocLayout",meta:{_atom_route:!0}},"components/ProTable/index":{id:"components/ProTable/index",path:"components/pro-table",parentId:"DocLayout",meta:{_atom_route:!0}},"components/SchemaForm/index":{id:"components/SchemaForm/index",path:"components/schema-form",parentId:"DocLayout",meta:{_atom_route:!0}},"components/SettingProvider/index":{id:"components/SettingProvider/index",path:"components/setting-provider",parentId:"DocLayout",meta:{_atom_route:!0}},"demo-render":{id:"demo-render",path:"~demos/:id",parentId:"dumi-context-layout",prerender:!1}},xn.abrupt("return",{routes:ot,routeComponents:{404:rn.lazy(function(){return __webpack_require__.e(400).then(__webpack_require__.bind(__webpack_require__,47949))}),"dumi-context-layout":rn.lazy(function(){return __webpack_require__.e(458).then(__webpack_require__.bind(__webpack_require__,34576))}),DocLayout:rn.lazy(function(){return Promise.all([__webpack_require__.e(230),__webpack_require__.e(769),__webpack_require__.e(96)]).then(__webpack_require__.bind(__webpack_require__,20142))}),index:rn.lazy(function(){return __webpack_require__.e(152).then(__webpack_require__.bind(__webpack_require__,11031))}),"docs/changelog/index":rn.lazy(function(){return Promise.all([__webpack_require__.e(482),__webpack_require__.e(107)]).then(__webpack_require__.bind(__webpack_require__,63747))}),"docs/intro/index":rn.lazy(function(){return Promise.all([__webpack_require__.e(482),__webpack_require__.e(868)]).then(__webpack_require__.bind(__webpack_require__,73859))}),"components/BusinessSelectBuilder/index":rn.lazy(function(){return Promise.all([__webpack_require__.e(482),__webpack_require__.e(970)]).then(__webpack_require__.bind(__webpack_require__,8161))}),"components/BusinessTreeSelectBuilder/index":rn.lazy(function(){return Promise.all([__webpack_require__.e(482),__webpack_require__.e(131)]).then(__webpack_require__.bind(__webpack_require__,49710))}),"components/Button/index":rn.lazy(function(){return Promise.all([__webpack_require__.e(482),__webpack_require__.e(544)]).then(__webpack_require__.bind(__webpack_require__,24253))}),"components/FormUpload/index":rn.lazy(function(){return Promise.all([__webpack_require__.e(482),__webpack_require__.e(147)]).then(__webpack_require__.bind(__webpack_require__,25951))}),"components/LinkButton/index":rn.lazy(function(){return Promise.all([__webpack_require__.e(482),__webpack_require__.e(781)]).then(__webpack_require__.bind(__webpack_require__,32881))}),"components/ModalForm/index":rn.lazy(function(){return Promise.all([__webpack_require__.e(482),__webpack_require__.e(25)]).then(__webpack_require__.bind(__webpack_require__,21221))}),"components/ProTable/index":rn.lazy(function(){return Promise.all([__webpack_require__.e(482),__webpack_require__.e(371)]).then(__webpack_require__.bind(__webpack_require__,68780))}),"components/SchemaForm/index":rn.lazy(function(){return Promise.all([__webpack_require__.e(482),__webpack_require__.e(646)]).then(__webpack_require__.bind(__webpack_require__,96468))}),"components/SettingProvider/index":rn.lazy(function(){return Promise.all([__webpack_require__.e(482),__webpack_require__.e(283)]).then(__webpack_require__.bind(__webpack_require__,8938))}),"demo-render":rn.lazy(function(){return __webpack_require__.e(448).then(__webpack_require__.bind(__webpack_require__,95993))})}});case 2:case"end":return xn.stop()}},ft)})),Eu.apply(this,arguments)}var qu=__webpack_require__(82651),es=__webpack_require__(74865),Xa=__webpack_require__.n(es),Bo=__webpack_require__(61748),zu=function(){var ot=(0,Bo.WF)(),Zt=ot.setLoading;return(0,rn.useLayoutEffect)(function(){return Zt(!0),Xa().start(),function(){Zt(!1),Xa().done()}},[]),null},Zu=zu,bi=__webpack_require__(54220),$u="/react-admin-kit/",bu=!1;function ts(){return Tu.apply(this,arguments)}function Tu(){return Tu=r()(l()().mark(function ft(){var ot,Zt,xn,Xn,Sr,Ir,F,G;return l()().wrap(function(Ee){for(;;)switch(Ee.prev=Ee.next){case 0:return ot=(0,ut.gD)(),Ee.next=3,Uu(ot);case 3:return Zt=Ee.sent,xn=Zt.routes,Xn=Zt.routeComponents,Ee.next=8,ot.applyPlugins({key:"patchRoutes",type:bi.Ac.event,args:{routes:xn,routeComponents:Xn}});case 8:return Sr=ot.applyPlugins({key:"modifyContextOpts",type:bi.Ac.modify,initialValue:{}}),Ir=Sr.basename||"/react-admin-kit/",F=Sr.historyType||"browser",G=(0,qu.f)(o()({type:F,basename:Ir},Sr.historyOpts)),Ee.abrupt("return",ot.applyPlugins({key:"render",type:bi.Ac.compose,initialValue:function(){var Me={hydrate:!0,routes:xn,routeComponents:Xn,pluginManager:ot,rootElement:Sr.rootElement||document.getElementById("root"),loadingComponent:Zu,publicPath:$u,runtimePublicPath:bu,history:G,historyType:F,basename:Ir,callback:Sr.callback},we=ot.applyPlugins({key:"modifyClientRenderOpts",type:bi.Ac.modify,initialValue:Me});return _u(we)}})());case 13:case"end":return Ee.stop()}},ft)})),Tu.apply(this,arguments)}typeof history!="undefined"&&location.pathname.length>1&&location.pathname.endsWith("/")&&history.replaceState({},"",location.pathname.slice(0,-1)+location.search+location.hash),document.documentElement.setAttribute("data-prefers-color","light"),ts(),window.g_umi={version:"4.0.79"},(0,Ft.rl)((0,ut.We)())})()})();
}());