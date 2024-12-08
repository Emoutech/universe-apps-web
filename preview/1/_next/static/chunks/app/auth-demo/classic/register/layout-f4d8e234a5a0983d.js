(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6411],{46017:function(e,t,n){"use strict";n.d(t,{q:function(){return i}});var r=n(88539),o=n(13809);function i(e){return(0,o.Z)("MuiAutocomplete",e)}let a=(0,r.Z)("MuiAutocomplete",["root","expanded","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]);t.Z=a},90182:function(e,t,n){"use strict";n.d(t,{y:function(){return i}});var r=n(88539),o=n(13809);function i(e){return(0,o.Z)("MuiCheckbox",e)}let a=(0,r.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);t.Z=a},69515:function(e,t,n){"use strict";n.d(t,{V:function(){return i}});var r=n(88539),o=n(13809);function i(e){return(0,o.Z)("MuiDivider",e)}let a=(0,r.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=a},69881:function(e,t,n){"use strict";n.d(t,{Z:function(){return W}});var r=n(46750),o=n(40431),i=n(86006),a=n(89791),l=n(47562),u=n(78473),c=n(95457),s=n(18006),d=n(91724),p=n(84414),f=n(90409),h=n(88539),b=n(13809);function g(e){return(0,b.Z)("MuiLink",e)}let m=(0,h.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var x=n(95247),v=n(23343);let Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=e=>Z[e]||e;var k=({theme:e,ownerState:t})=>{let n=y(t.color),r=(0,x.DW)(e,`palette.${n}`,!1)||t.color,o=(0,x.DW)(e,`palette.${n}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:(0,v.Fq)(r,.4)},w=n(9268);let j=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],C=e=>{let{classes:t,component:n,focusVisible:r,underline:o}=e,i={root:["root",`underline${(0,u.Z)(o)}`,"button"===n&&"button",r&&"focusVisible"]};return(0,l.Z)(i,g,t)},M=(0,c.ZP)(f.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`underline${(0,u.Z)(n.underline)}`],"button"===n.component&&t.button]}})(({theme:e,ownerState:t})=>(0,o.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:k({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${m.focusVisible}`]:{outline:"auto"}})),S=i.forwardRef(function(e,t){let n=(0,s.Z)({props:e,name:"MuiLink"}),{className:l,color:u="primary",component:c="a",onBlur:f,onFocus:h,TypographyClasses:b,underline:g="always",variant:m="inherit",sx:x}=n,v=(0,r.Z)(n,j),{isFocusVisibleRef:y,onBlur:k,onFocus:S,ref:W}=(0,d.Z)(),[A,F]=i.useState(!1),R=(0,p.Z)(t,W),B=(0,o.Z)({},n,{color:u,component:c,focusVisible:A,underline:g,variant:m}),I=C(B);return(0,w.jsx)(M,(0,o.Z)({color:u,className:(0,a.Z)(I.root,l),classes:b,component:c,onBlur:e=>{k(e),!1===y.current&&F(!1),f&&f(e)},onFocus:e=>{S(e),!0===y.current&&F(!0),h&&h(e)},ref:R,ownerState:B,variant:m,sx:[...Object.keys(Z).includes(u)?[]:[{color:u}],...Array.isArray(x)?x:[x]]},v))});var W=S},67490:function(e,t,n){"use strict";n.d(t,{K:function(){return i}});var r=n(88539),o=n(13809);function i(e){return(0,o.Z)("MuiMenuItem",e)}let a=(0,r.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);t.Z=a},93066:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r,o=n(86006),i=n(65396),a=n(93005),l=n(76837);function u(e,t,n,r,i){let[a,u]=o.useState(()=>i&&n?n(e).matches:r?r(e).matches:t);return(0,l.Z)(()=>{let t=!0;if(!n)return;let r=n(e),o=()=>{t&&u(r.matches)};return o(),r.addListener(o),()=>{t=!1,r.removeListener(o)}},[e,n]),a}let c=(r||(r=n.t(o,2))).useSyncExternalStore;function s(e,t,n,r,i){let a=o.useCallback(()=>t,[t]),l=o.useMemo(()=>{if(i&&n)return()=>n(e).matches;if(null!==r){let{matches:t}=r(e);return()=>t}return a},[a,e,r,i,n]),[u,s]=o.useMemo(()=>{if(null===n)return[a,()=>()=>{}];let t=n(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]},[a,n,e]),d=c(s,u,l);return d}function d(e,t={}){let n=(0,i.Z)(),r="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:o=!1,matchMedia:l=r?window.matchMedia:null,ssrMatchMedia:d=null,noSsr:p=!1}=(0,a.Z)({name:"MuiUseMediaQuery",props:t,theme:n}),f="function"==typeof e?e(n):e;f=f.replace(/^@media( ?)/m,"");let h=(void 0!==c?s:u)(f,o,l,d,p);return h}},76837:function(e,t,n){"use strict";var r=n(6804);t.Z=r.Z},53423:function(e,t,n){Promise.resolve().then(n.bind(n,93685))},93685:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(9268),o=n(28744);function i(e){let{children:t}=e;return(0,r.jsx)(o.Z,{title:"Manage the job more effectively with Minimal",children:t})}},56880:function(e,t,n){"use strict";n.r(t),n.d(t,{AuthContext:function(){return o}});var r=n(86006);let o=(0,r.createContext)({})},1503:function(e,t,n){"use strict";n.d(t,{E:function(){return i}});var r=n(86006),o=n(56880);let i=()=>{let e=(0,r.useContext)(o.AuthContext);if(!e)throw Error("useAuthContext context must be use inside AuthProvider");return e}},46604:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(9268),o=n(86006),i=n(4957),a=n(69881),l=n(81771),u=n(5669);let c=(0,o.forwardRef)((e,t)=>{let{disabledLink:n=!1,sx:o,...c}=e,s=(0,i.Z)(),d=s.palette.primary.light,p=s.palette.primary.main,f=s.palette.primary.dark,h=(0,r.jsx)(l.Z,{ref:t,component:"div",sx:{width:40,height:40,display:"inline-flex",...o},...c,children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",children:[(0,r.jsxs)("defs",{children:[(0,r.jsxs)("linearGradient",{id:"BG1",x1:"100%",x2:"50%",y1:"9.946%",y2:"50%",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:f}),(0,r.jsx)("stop",{offset:"100%",stopColor:p})]}),(0,r.jsxs)("linearGradient",{id:"BG2",x1:"50%",x2:"50%",y1:"0%",y2:"100%",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:d}),(0,r.jsx)("stop",{offset:"100%",stopColor:p})]}),(0,r.jsxs)("linearGradient",{id:"BG3",x1:"50%",x2:"50%",y1:"0%",y2:"100%",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:d}),(0,r.jsx)("stop",{offset:"100%",stopColor:p})]})]}),(0,r.jsxs)("g",{fill:p,fillRule:"evenodd",stroke:"none",strokeWidth:"1",children:[(0,r.jsx)("path",{fill:"url(#BG1)",d:"M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z"}),(0,r.jsx)("path",{fill:"url(#BG2)",d:"M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"}),(0,r.jsx)("path",{fill:"url(#BG3)",d:"M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"})]})]})});return n?h:(0,r.jsx)(a.Z,{component:u.r,href:"/",sx:{display:"contents"},children:h})});var s=c},52992:function(e,t,n){"use strict";n.d(t,{F:function(){return i},z:function(){return a}});var r=n(4957),o=n(93066);function i(e,t,n){let i=(0,r.Z)(),a=(0,o.Z)(i.breakpoints.up(t)),l=(0,o.Z)(i.breakpoints.down(t)),u=(0,o.Z)(i.breakpoints.between(t,n)),c=(0,o.Z)(i.breakpoints.only(t));return"up"===e?a:"down"===e?l:"between"===e?u:c}function a(){let e=(0,r.Z)(),t=[...e.breakpoints.keys].reverse();return t.reduce((t,n)=>{let r=(0,o.Z)(e.breakpoints.up(n));return!t&&r?n:t},null)||"xs"}},28744:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(9268),o=n(4957),i=n(23343),a=n(81771),l=n(69881),u=n(65507),c=n(19744),s=n(90409),d=n(1503),p=n(17950),f=n(5669),h=n(52992),b=n(42933),g=n(46604);let m=[{id:"jwt",label:"Jwt",path:p.H.auth.jwt.login,icon:"/assets/icons/auth/ic_jwt.svg"},{id:"firebase",label:"Firebase",path:p.H.auth.firebase.login,icon:"/assets/icons/auth/ic_firebase.svg"},{id:"amplify",label:"Amplify",path:p.H.auth.amplify.login,icon:"/assets/icons/auth/ic_amplify.svg"},{id:"auth0",label:"Auth0",path:p.H.auth.auth0.login,icon:"/assets/icons/auth/ic_auth0.svg"}];function x(e){let{children:t,image:n,title:p}=e,{method:x}=(0,d.E)(),v=(0,o.Z)(),Z=(0,h.F)("up","md"),y=(0,r.jsx)(g.Z,{sx:{zIndex:9,position:"absolute",m:{xs:2,md:5}}}),k=(0,r.jsx)(u.Z,{sx:{width:1,mx:"auto",maxWidth:480,px:{xs:2,md:8},py:{xs:15,md:30}},children:t}),w=(0,r.jsxs)(u.Z,{flexGrow:1,alignItems:"center",justifyContent:"center",spacing:10,sx:{...(0,b.v3)({color:(0,i.Fq)(v.palette.background.default,"light"===v.palette.mode?.88:.94),imgUrl:"/assets/background/overlay_2.jpg"})},children:[(0,r.jsx)(s.Z,{variant:"h3",sx:{maxWidth:480,textAlign:"center"},children:p||"Hi, Welcome back"}),(0,r.jsx)(a.Z,{component:"img",alt:"auth",src:n||"/assets/illustrations/illustration_dashboard.png",sx:{maxWidth:720}}),(0,r.jsx)(u.Z,{direction:"row",spacing:2,children:m.map(e=>(0,r.jsx)(c.Z,{title:e.label,children:(0,r.jsx)(l.Z,{component:f.r,href:e.path,children:(0,r.jsx)(a.Z,{component:"img",alt:e.label,src:e.icon,sx:{width:32,height:32,...x!==e.id&&{filter:"grayscale(100%)"}}})})},e.label))})]});return(0,r.jsxs)(u.Z,{component:"main",direction:"row",sx:{minHeight:"100vh"},children:[y,Z&&w,k]})}},5669:function(e,t,n){"use strict";n.d(t,{r:function(){return u}});var r=n(9268),o=n(86006),i=n(35846),a=n.n(i);let l=(0,o.forwardRef)((e,t)=>{let{...n}=e;return(0,r.jsx)(a(),{ref:t,...n})});var u=l},42933:function(e,t,n){"use strict";n.d(t,{D9:function(){return c},Ls:function(){return s},O1:function(){return f},XK:function(){return p},uS:function(){return u},v3:function(){return d}});var r=n(23343),o=n(69515),i=n(90182),a=n(67490),l=n(46017);let u=e=>{let{theme:t,bgcolor:n,dropdown:r}=e;return{...s({blur:20,opacity:.9,color:t.palette.background.paper,...!!n&&{color:n}}),backgroundImage:"url(/assets/cyan-blur.png), url(/assets/red-blur.png)",backgroundRepeat:"no-repeat, no-repeat",backgroundPosition:"top right, left bottom",backgroundSize:"50%, 50%",...r&&{padding:t.spacing(.5),boxShadow:t.customShadows.dropdown,borderRadius:1.25*t.shape.borderRadius}}},c=e=>({...e.typography.body2,padding:e.spacing(.75,1),borderRadius:.75*e.shape.borderRadius,"&:not(:last-of-type)":{marginBottom:4},["&.".concat(a.Z.selected)]:{fontWeight:e.typography.fontWeightSemiBold,backgroundColor:e.palette.action.selected,"&:hover":{backgroundColor:e.palette.action.hover}},["& .".concat(i.Z.root)]:{padding:e.spacing(.5),marginLeft:e.spacing(-.5),marginRight:e.spacing(.5)},["&.".concat(l.Z.option,'[aria-selected="true"]')]:{backgroundColor:e.palette.action.selected,"&:hover":{backgroundColor:e.palette.action.hover}},["&+.".concat(o.Z.root)]:{margin:e.spacing(.5,0)}});function s(e){let t=(null==e?void 0:e.color)||"#000000",n=(null==e?void 0:e.blur)||6,o=(null==e?void 0:e.opacity)||.8,i=null==e?void 0:e.imgUrl;return i?{position:"relative",backgroundImage:"url(".concat(i,")"),"&:before":{position:"absolute",top:0,left:0,zIndex:9,content:'""',width:"100%",height:"100%",backdropFilter:"blur(".concat(n,"px)"),WebkitBackdropFilter:"blur(".concat(n,"px)"),backgroundColor:(0,r.Fq)(t,o)}}:{backdropFilter:"blur(".concat(n,"px)"),WebkitBackdropFilter:"blur(".concat(n,"px)"),backgroundColor:(0,r.Fq)(t,o)}}function d(e){let t=(null==e?void 0:e.direction)||"to bottom",n=null==e?void 0:e.startColor,r=null==e?void 0:e.endColor,o=null==e?void 0:e.imgUrl,i=null==e?void 0:e.color;return o?{background:"linear-gradient(".concat(t,", ").concat(n||i,", ").concat(r||i,"), url(").concat(o,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}:{background:"linear-gradient(".concat(t,", ").concat(n,", ").concat(r,")")}}function p(e){return{background:"-webkit-linear-gradient(".concat(e,")"),WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}let f={x:{msOverflowStyle:"none",scrollbarWidth:"none",overflowX:"scroll","&::-webkit-scrollbar":{display:"none"}},y:{msOverflowStyle:"none",scrollbarWidth:"none",overflowY:"scroll","&::-webkit-scrollbar":{display:"none"}}}}},function(e){e.O(0,[1278,2929,5846,5597,5011,9744,7950,2667,6488,1744],function(){return e(e.s=53423)}),_N_E=e.O()}]);