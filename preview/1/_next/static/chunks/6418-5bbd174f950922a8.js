"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6418],{55315:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(9268),o=r(86006),a=r(35551),i=r(81771);let l=(0,o.forwardRef)((e,t)=>{let{icon:r,width:o=20,sx:l,...c}=e;return(0,n.jsx)(i.Z,{ref:t,component:a.JO,className:"component-iconify",icon:r,sx:{width:o,height:o,...l},...c})});var c=l},7688:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(9268),o=r(86006),a=r(81771),i=r(15650),l=r(95457),c=r(23343);let s=(0,l.ZP)("div")(()=>({flexGrow:1,height:"100%",overflow:"hidden"})),d=(0,l.ZP)(i.Z)(e=>{let{theme:t}=e;return{maxHeight:"100%","& .simplebar-scrollbar":{"&:before":{backgroundColor:(0,c.Fq)(t.palette.grey[600],.48)},"&.simplebar-visible:before":{opacity:1}},"& .simplebar-mask":{zIndex:"inherit"}}}),u=(0,o.forwardRef)((e,t)=>{let{children:r,sx:o,...i}=e,l="undefined"==typeof navigator?"SSR":navigator.userAgent,c=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(l);return c?(0,n.jsx)(a.Z,{ref:t,sx:{overflow:"auto",...o},...i,children:r}):(0,n.jsx)(s,{children:(0,n.jsx)(d,{scrollableNodeProps:{ref:t},clickOnTrack:!1,sx:o,...i,children:r})})});var p=(0,o.memo)(u)},27491:function(e,t,r){r.d(t,{K:function(){return n.useSettingsContext}});var n=r(76760);r(76244)},76760:function(e,t,r){r.r(t),r.d(t,{SettingsContext:function(){return o},useSettingsContext:function(){return a}});var n=r(86006);let o=(0,n.createContext)({}),a=()=>{let e=(0,n.useContext)(o);if(!e)throw Error("useSettingsContext must be use inside SettingsProvider");return e}},76244:function(e,t,r){r.r(t),r.d(t,{SettingsProvider:function(){return s}});var n=r(9268),o=r(4974),a=r.n(o),i=r(86006),l=r(35507),c=r(76760);function s(e){let{children:t,defaultSettings:r}=e,[o,s]=(0,i.useState)(!1),[d,u]=function(e,t){let r=(0,l.V)(),[n,o]=(0,i.useState)(()=>{let n=r?localStorage.getItem(e):null;return null===n?t:JSON.parse(n)});return(0,i.useEffect)(()=>{let t=t=>{t.storageArea===localStorage&&t.key===e&&o(t.newValue?JSON.parse(t.newValue):t.newValue)};return window.addEventListener("storage",t),()=>{window.removeEventListener("storage",t)}},[e,t]),[n,t=>{o(n=>{let o="function"==typeof t?t(n):t;return r&&localStorage.setItem(e,JSON.stringify(o)),o})}]}("settings",r),p="ar"===(0,l.G)("i18nextLng");(0,i.useEffect)(()=>{p&&h("ar")},[p]);let g=(0,i.useCallback)((e,t)=>{u(r=>({...r,[e]:t}))},[u]),h=(0,i.useCallback)(e=>{g("themeDirection","ar"===e?"rtl":"ltr")},[g]),x=(0,i.useCallback)(()=>{u(r)},[r,u]),m=(0,i.useCallback)(()=>{s(e=>!e)},[]),b=(0,i.useCallback)(()=>{s(!1)},[]),f=!a()(d,r),v=(0,i.useMemo)(()=>({...d,onUpdate:g,onChangeDirectionByLang:h,canReset:f,onReset:x,open:o,onToggle:m,onClose:b}),[x,g,d,f,o,b,m,h]);return(0,n.jsx)(c.SettingsContext.Provider,{value:v,children:t})}},46144:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(9268),o=r(4957),a=r(65507),i=r(37504),l=r(14200),c=r(19744),s=r(39714),d=r(90409),u=r(26250),p=r(26069),g=r(42933),h=r(55315),x=r(7688),m=r(27491),b=r(23343),f=r(9083),v=r(51374);function k(e){let{icons:t,options:r,value:o,onChange:i}=e;return(0,n.jsx)(a.Z,{direction:"row",spacing:2,children:r.map(e=>{let r=o===e;return(0,n.jsx)(f.Z,{onClick:()=>i(e),sx:{width:1,height:80,borderRadius:1,border:e=>"solid 1px ".concat((0,b.Fq)(e.palette.grey[500],.08)),...r&&{bgcolor:"background.paper",boxShadow:e=>"-24px 8px 24px -4px ".concat((0,b.Fq)("light"===e.palette.mode?e.palette.grey[500]:e.palette.common.black,.08))},"& .svg-color":{background:e=>"linear-gradient(135deg, ".concat(e.palette.grey[500]," 0%, ").concat(e.palette.grey[600]," 100%)"),...r&&{background:e=>"linear-gradient(135deg, ".concat(e.palette.primary.light," 0%, ").concat(e.palette.primary.main," 100%)")}}},children:(0,n.jsx)(v.Z,{src:"/assets/icons/setting/ic_".concat("light"===e?t[0]:t[1],".svg")})},e)})})}var y=r(81771);function w(e){let{options:t,value:r,onChange:i}=e,l=(0,o.Z)(),c=(e,t)=>{let r="linear-gradient(135deg, ".concat(l.palette.primary.light," 0%, ").concat(l.palette.primary.main," 100%)"),o={flexShrink:0,borderRadius:.5,bgcolor:"grey.500"},i=(0,n.jsx)(y.Z,{sx:{...o,width:8,height:8,...t&&{background:r}}}),c=(0,n.jsx)(y.Z,{sx:{...o,width:1,height:3,opacity:.48,..."horizontal"===e&&{width:12},...t&&{background:r}}}),s=(0,n.jsx)(y.Z,{sx:{...o,width:1,height:3,maxWidth:12,opacity:.24,..."horizontal"===e&&{width:8},...t&&{background:r}}});return(0,n.jsxs)(a.Z,{spacing:.5,flexShrink:0,direction:"horizontal"===e?"row":"column",sx:{p:.5,width:28,height:1,borderRight:"solid 1px ".concat((0,b.Fq)(l.palette.grey[500],.08)),..."mini"===e&&{width:16},..."horizontal"===e&&{width:1,height:16,alignItems:"center",borderRight:"unset",borderBottom:"solid 1px ".concat((0,b.Fq)(l.palette.grey[500],.08))}},children:[i,c,s]})},s=e=>(0,n.jsx)(y.Z,{sx:{p:.5,flexGrow:1,height:1,width:1},children:(0,n.jsx)(y.Z,{sx:{width:1,height:1,opacity:.08,borderRadius:.5,bgcolor:"grey.500",...e&&{opacity:.24,background:"linear-gradient(135deg, ".concat(l.palette.primary.light," 0%, ").concat(l.palette.primary.main," 100%)")}}})});return(0,n.jsx)(a.Z,{direction:"row",spacing:2,children:t.map(e=>{let t=r===e;return(0,n.jsxs)(f.Z,{onClick:()=>i(e),sx:{p:0,width:1,height:56,borderRadius:1,border:"solid 1px ".concat((0,b.Fq)(l.palette.grey[500],.08)),...t&&{bgcolor:"background.paper",boxShadow:"-24px 8px 24px -4px ".concat((0,b.Fq)("light"===l.palette.mode?l.palette.grey[500]:l.palette.common.black,.08))},..."horizontal"===e&&{flexDirection:"column"}},children:[c(e,t),s(t)]},e)})})}var F=r(16793);function j(e){let{value:t,onChange:r}=e,o=F.b.map(e=>({name:e.name,value:e.main}));return(0,n.jsx)(y.Z,{columnGap:2,rowGap:1.5,display:"grid",gridTemplateColumns:"repeat(3, 1fr)",children:o.map(e=>{let o=t===e.name;return(0,n.jsx)(f.Z,{onClick:()=>r(e.name),sx:{height:56,borderRadius:1,border:e=>"solid 1px ".concat((0,b.Fq)(e.palette.grey[500],.08)),...o&&{borderColor:"transparent",bgcolor:(0,b.Fq)(e.value,.08)}},children:(0,n.jsx)(y.Z,{sx:{width:12,height:12,borderRadius:"50%",bgcolor:e.value,transition:e=>e.transitions.create(["transform"],{duration:e.transitions.duration.shorter}),...o&&{transform:"scale(2)"}}})},e.name)})})}function C(e){let{value:t,onChange:r}=e;return(0,n.jsx)(f.Z,{onClick:r,sx:{width:1,height:80,borderRadius:1,color:"text.disabled",border:e=>"solid 1px ".concat((0,b.Fq)(e.palette.grey[500],.08)),...t&&{bgcolor:"background.paper",color:e=>e.palette.primary.main,boxShadow:e=>"-24px 8px 24px -4px ".concat((0,b.Fq)("light"===e.palette.mode?e.palette.grey[500]:e.palette.common.black,.08))}},children:(0,n.jsxs)(a.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{width:.24,transition:e=>e.transitions.create(["width"]),...t&&{width:.5}},children:[(0,n.jsx)(h.Z,{icon:t?"eva:arrow-ios-back-fill":"eva:arrow-ios-forward-fill",sx:{color:e=>"linear-gradient(135deg, ".concat(e.palette.primary.light," 0%, ").concat(e.palette.primary.main," 100%)")}}),(0,n.jsx)(y.Z,{sx:{flexGrow:1,borderBottom:"dashed 1.5px currentcolor"}}),(0,n.jsx)(h.Z,{icon:t?"eva:arrow-ios-forward-fill":"eva:arrow-ios-back-fill",sx:{color:e=>"linear-gradient(135deg, ".concat(e.palette.primary.light," 0%, ").concat(e.palette.primary.main," 100%)")}})]})})}var Z=r(86006);function S(){let[e,t]=(0,Z.useState)(!1),r=(0,Z.useCallback)(()=>{document.fullscreenElement?document.exitFullscreen&&(document.exitFullscreen(),t(!1)):(document.documentElement.requestFullscreen(),t(!0))},[]);return(0,n.jsx)(y.Z,{sx:{p:2.5},children:(0,n.jsxs)(f.Z,{onClick:r,sx:{width:1,height:48,borderRadius:1,color:"text.disabled",typography:"subtitle2",border:e=>"solid 1px ".concat((0,b.Fq)(e.palette.grey[500],.08)),...e&&{color:"text.primary"},"& .svg-color":{background:e=>"linear-gradient(135deg, ".concat(e.palette.grey[500]," 0%, ").concat(e.palette.grey[600]," 100%)"),...e&&{background:e=>"linear-gradient(135deg, ".concat(e.palette.primary.light," 0%, ").concat(e.palette.primary.main," 100%)")}}},children:[(0,n.jsx)(v.Z,{src:"/assets/icons/setting/".concat(e?"ic_exit_full_screen":"ic_full_screen",".svg"),sx:{width:16,height:16,mr:1}}),e?"Exit Fullscreen":"Fullscreen"]})})}function _(){let e=(0,o.Z)(),t=(0,m.K)(),r={mb:1.5,color:"text.disabled",fontWeight:"fontWeightSemiBold"},b=(0,n.jsxs)(a.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2,pr:1,pl:2.5},children:[(0,n.jsx)(d.Z,{variant:"h6",sx:{flexGrow:1},children:"Settings"}),(0,n.jsx)(c.Z,{title:"Reset",children:(0,n.jsx)(s.Z,{onClick:t.onReset,children:(0,n.jsx)(i.Z,{color:"error",variant:"dot",invisible:!t.canReset,children:(0,n.jsx)(h.Z,{icon:"solar:restart-bold"})})})}),(0,n.jsx)(s.Z,{onClick:t.onClose,children:(0,n.jsx)(h.Z,{icon:"mingcute:close-line"})})]}),f=(0,n.jsxs)("div",{children:[(0,n.jsx)(d.Z,{variant:"caption",component:"div",sx:{...r},children:"Mode"}),(0,n.jsx)(k,{value:t.themeMode,onChange:e=>t.onUpdate("themeMode",e),options:["light","dark"],icons:["sun","moon"]})]}),v=(0,n.jsxs)("div",{children:[(0,n.jsx)(d.Z,{variant:"caption",component:"div",sx:{...r},children:"Contrast"}),(0,n.jsx)(k,{value:t.themeContrast,onChange:e=>t.onUpdate("themeContrast",e),options:["default","bold"],icons:["contrast_bold","contrast"]})]}),y=(0,n.jsxs)("div",{children:[(0,n.jsx)(d.Z,{variant:"caption",component:"div",sx:{...r},children:"Direction"}),(0,n.jsx)(k,{value:t.themeDirection,onChange:e=>t.onUpdate("themeDirection",e),options:["ltr","rtl"],icons:["align_right","align_left"]})]}),F=(0,n.jsxs)("div",{children:[(0,n.jsx)(d.Z,{variant:"caption",component:"div",sx:{...r},children:"Layout"}),(0,n.jsx)(w,{value:t.themeLayout,onChange:e=>t.onUpdate("themeLayout",e),options:["vertical","horizontal","mini"]})]}),Z=(0,n.jsxs)("div",{children:[(0,n.jsxs)(d.Z,{variant:"caption",component:"div",sx:{...r,display:"inline-flex",alignItems:"center"},children:["Stretch",(0,n.jsx)(c.Z,{title:"Only available at large resolutions > 1600px (xl)",children:(0,n.jsx)(h.Z,{icon:"eva:info-outline",width:16,sx:{ml:.5}})})]}),(0,n.jsx)(C,{value:t.themeStretch,onChange:()=>t.onUpdate("themeStretch",!t.themeStretch)})]}),_=(0,n.jsxs)("div",{children:[(0,n.jsx)(d.Z,{variant:"caption",component:"div",sx:{...r},children:"Presets"}),(0,n.jsx)(j,{value:t.themeColorPresets,onChange:e=>t.onUpdate("themeColorPresets",e)})]});return(0,n.jsxs)(u.ZP,{anchor:"right",open:t.open,onClose:t.onClose,slotProps:{backdrop:{invisible:!0}},sx:{["& .".concat(p.Z.paper)]:{...(0,g.uS)({theme:e,bgcolor:e.palette.background.default}),width:280}},children:[b,(0,n.jsx)(l.Z,{sx:{borderStyle:"dashed"}}),(0,n.jsx)(x.Z,{children:(0,n.jsxs)(a.Z,{spacing:3,sx:{p:3},children:[f,v,y,F,Z,_]})}),(0,n.jsx)(S,{})]})}},16418:function(e,t,r){r.d(t,{K$:function(){return n.K}});var n=r(27491);r(46144)},51374:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(9268),o=r(86006),a=r(81771);let i=(0,o.forwardRef)((e,t)=>{let{src:r,sx:o,...i}=e;return(0,n.jsx)(a.Z,{component:"span",className:"svg-color",ref:t,sx:{width:24,height:24,display:"inline-block",bgcolor:"currentColor",mask:"url(".concat(r,") no-repeat center / contain"),WebkitMask:"url(".concat(r,") no-repeat center / contain"),...o},...i})});var l=i},42933:function(e,t,r){r.d(t,{D9:function(){return s},Ls:function(){return d},O1:function(){return g},XK:function(){return p},uS:function(){return c},v3:function(){return u}});var n=r(23343),o=r(69515),a=r(90182),i=r(67490),l=r(46017);let c=e=>{let{theme:t,bgcolor:r,dropdown:n}=e;return{...d({blur:20,opacity:.9,color:t.palette.background.paper,...!!r&&{color:r}}),backgroundImage:"url(/assets/cyan-blur.png), url(/assets/red-blur.png)",backgroundRepeat:"no-repeat, no-repeat",backgroundPosition:"top right, left bottom",backgroundSize:"50%, 50%",...n&&{padding:t.spacing(.5),boxShadow:t.customShadows.dropdown,borderRadius:1.25*t.shape.borderRadius}}},s=e=>({...e.typography.body2,padding:e.spacing(.75,1),borderRadius:.75*e.shape.borderRadius,"&:not(:last-of-type)":{marginBottom:4},["&.".concat(i.Z.selected)]:{fontWeight:e.typography.fontWeightSemiBold,backgroundColor:e.palette.action.selected,"&:hover":{backgroundColor:e.palette.action.hover}},["& .".concat(a.Z.root)]:{padding:e.spacing(.5),marginLeft:e.spacing(-.5),marginRight:e.spacing(.5)},["&.".concat(l.Z.option,'[aria-selected="true"]')]:{backgroundColor:e.palette.action.selected,"&:hover":{backgroundColor:e.palette.action.hover}},["&+.".concat(o.Z.root)]:{margin:e.spacing(.5,0)}});function d(e){let t=(null==e?void 0:e.color)||"#000000",r=(null==e?void 0:e.blur)||6,o=(null==e?void 0:e.opacity)||.8,a=null==e?void 0:e.imgUrl;return a?{position:"relative",backgroundImage:"url(".concat(a,")"),"&:before":{position:"absolute",top:0,left:0,zIndex:9,content:'""',width:"100%",height:"100%",backdropFilter:"blur(".concat(r,"px)"),WebkitBackdropFilter:"blur(".concat(r,"px)"),backgroundColor:(0,n.Fq)(t,o)}}:{backdropFilter:"blur(".concat(r,"px)"),WebkitBackdropFilter:"blur(".concat(r,"px)"),backgroundColor:(0,n.Fq)(t,o)}}function u(e){let t=(null==e?void 0:e.direction)||"to bottom",r=null==e?void 0:e.startColor,n=null==e?void 0:e.endColor,o=null==e?void 0:e.imgUrl,a=null==e?void 0:e.color;return o?{background:"linear-gradient(".concat(t,", ").concat(r||a,", ").concat(n||a,"), url(").concat(o,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}:{background:"linear-gradient(".concat(t,", ").concat(r,", ").concat(n,")")}}function p(e){return{background:"-webkit-linear-gradient(".concat(e,")"),WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}let g={x:{msOverflowStyle:"none",scrollbarWidth:"none",overflowX:"scroll","&::-webkit-scrollbar":{display:"none"}},y:{msOverflowStyle:"none",scrollbarWidth:"none",overflowY:"scroll","&::-webkit-scrollbar":{display:"none"}}}},16793:function(e,t,r){r.d(t,{b:function(){return l},u:function(){return a}});var n=r(23343),o=r(73036);function a(e){let t=l.find(t=>t.name===e),r={palette:{primary:t},customShadows:{primary:"0 8px 16px 0 ".concat((0,n.Fq)("".concat(null==t?void 0:t.main),.24))}};return r}let i=(0,o.D)("light"),l=[{name:"default",...i.primary},{name:"cyan",lighter:"#CCF4FE",light:"#68CDF9",main:"#078DEE",dark:"#0351AB",darker:"#012972",contrastText:"#FFFFFF"},{name:"purple",lighter:"#EBD6FD",light:"#B985F4",main:"#7635dc",dark:"#431A9E",darker:"#200A69",contrastText:"#FFFFFF"},{name:"blue",lighter:"#D1E9FC",light:"#76B0F1",main:"#2065D1",dark:"#103996",darker:"#061B64",contrastText:"#FFFFFF"},{name:"orange",lighter:"#FEF4D4",light:"#FED680",main:"#fda92d",dark:"#B66816",darker:"#793908",contrastText:i.grey[800]},{name:"red",lighter:"#FFE3D5",light:"#FFC1AC",main:"#FF3030",dark:"#B71833",darker:"#7A0930",contrastText:"#FFFFFF"}]},35507:function(e,t,r){function n(){try{let e="__some_random_key_you_are_not_going_to_use__";return window.localStorage.setItem(e,e),window.localStorage.removeItem(e),!0}catch(e){return!1}}function o(e){let t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=n();return o&&(t=localStorage.getItem(e)||r),t}r.d(t,{G:function(){return o},V:function(){return n}})}}]);