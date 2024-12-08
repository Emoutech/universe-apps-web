"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2720],{31931:function(t,o,r){r.d(o,{Z:function(){return h},S:function(){return n}});var e=r(86006);function n(){let[t,o]=(0,e.useState)(null),r=(0,e.useCallback)(t=>{o(t.currentTarget)},[]),n=(0,e.useCallback)(()=>{o(null)},[]);return{open:t,onOpen:r,onClose:n,setOpen:o}}var i=r(9268),a=r(67490),l=r(48343),c=r(95457),s=r(23343),d=r(42933);let p=(0,c.ZP)("span")(t=>{let{arrow:o,theme:r}=t,e={top:-6.5,transform:"rotate(135deg)"},n={bottom:-6.5,transform:"rotate(-45deg)"},i={left:-6.5,transform:"rotate(45deg)"},a={right:-6.5,transform:"rotate(-135deg)"};return{width:14,height:14,position:"absolute",borderBottomLeftRadius:3.5,clipPath:"polygon(0% 0%, 100% 100%, 0% 100%)",border:"solid 1px ".concat((0,s.Fq)("light"===r.palette.mode?r.palette.grey[500]:r.palette.common.black,.12)),...(0,d.Ls)({color:r.palette.background.paper}),..."top-left"===o&&{...e,left:20},..."top-center"===o&&{...e,left:0,right:0,margin:"auto"},..."top-right"===o&&{...e,right:20},..."bottom-left"===o&&{...n,left:20},..."bottom-center"===o&&{...n,left:0,right:0,margin:"auto"},..."bottom-right"===o&&{...n,right:20},..."left-top"===o&&{...i,top:20},..."left-center"===o&&{...i,top:0,bottom:0,margin:"auto"},..."left-bottom"===o&&{...i,bottom:20},..."right-top"===o&&{...a,top:20},..."right-center"===o&&{...a,top:0,bottom:0,margin:"auto"},..."right-bottom"===o&&{...a,bottom:20}}});function h(t){let{open:o,children:r,arrow:e="top-right",hiddenArrow:n,sx:c,...s}=t,{style:d,anchorOrigin:h,transformOrigin:g}=function(t){let o;switch(t){case"top-left":o={style:{ml:-.75},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}};break;case"top-center":o={style:{},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}};break;case"top-right":default:o={style:{ml:.75},anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}};break;case"bottom-left":o={style:{ml:-.75},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"left"}};break;case"bottom-center":o={style:{},anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"}};break;case"bottom-right":o={style:{ml:.75},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"right"}};break;case"left-top":o={style:{mt:-.75},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"}};break;case"left-center":o={anchorOrigin:{vertical:"center",horizontal:"right"},transformOrigin:{vertical:"center",horizontal:"left"}};break;case"left-bottom":o={style:{mt:.75},anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"left"}};break;case"right-top":o={style:{mt:-.75},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"}};break;case"right-center":o={anchorOrigin:{vertical:"center",horizontal:"left"},transformOrigin:{vertical:"center",horizontal:"right"}};break;case"right-bottom":o={style:{mt:.75},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"right"}}}return o}(e);return(0,i.jsxs)(l.ZP,{open:!!o,anchorEl:o,anchorOrigin:h,transformOrigin:g,PaperProps:{sx:{width:"auto",overflow:"inherit",...d,["& .".concat(a.Z.root)]:{"& svg":{mr:2,flexShrink:0}},...c}},...s,children:[!n&&(0,i.jsx)(p,{arrow:e}),r]})}},55315:function(t,o,r){r.d(o,{Z:function(){return c}});var e=r(9268),n=r(86006),i=r(35551),a=r(81771);let l=(0,n.forwardRef)((t,o)=>{let{icon:r,width:n=20,sx:l,...c}=t;return(0,e.jsx)(a.Z,{ref:o,component:i.JO,className:"component-iconify",icon:r,sx:{width:n,height:n,...l},...c})});var c=l},66589:function(t,o,r){r.d(o,{Z:function(){return p}});var e=r(9268),n=r(86006),i=r(4957),a=r(81771),l=r(95457),c=r(23343);let s=(0,l.ZP)(a.Z)(t=>{let{theme:o,ownerState:r}=t,e="light"===o.palette.mode,n="filled"===r.variant,i="outlined"===r.variant,a="soft"===r.variant,l={..."default"===r.color&&{...n&&{color:e?o.palette.common.white:o.palette.grey[800],backgroundColor:o.palette.text.primary},...i&&{backgroundColor:"transparent",color:o.palette.text.primary,border:"2px solid ".concat(o.palette.text.primary)},...a&&{color:o.palette.text.secondary,backgroundColor:(0,c.Fq)(o.palette.grey[500],.16)}}},s={..."default"!==r.color&&{...n&&{color:o.palette[r.color].contrastText,backgroundColor:o.palette[r.color].main},...i&&{backgroundColor:"transparent",color:o.palette[r.color].main,border:"2px solid ".concat(o.palette[r.color].main)},...a&&{color:o.palette[r.color][e?"dark":"light"],backgroundColor:(0,c.Fq)(o.palette[r.color].main,.16)}}};return{height:24,minWidth:24,lineHeight:0,borderRadius:6,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",textTransform:"capitalize",padding:o.spacing(0,.75),fontSize:o.typography.pxToRem(12),fontWeight:o.typography.fontWeightBold,transition:o.transitions.create("all",{duration:o.transitions.duration.shorter}),...l,...s}}),d=(0,n.forwardRef)((t,o)=>{let{children:r,color:n="default",variant:l="soft",startIcon:c,endIcon:d,sx:p,...h}=t,g=(0,i.Z)(),u={width:16,height:16,"& svg, img":{width:1,height:1,objectFit:"cover"}};return(0,e.jsxs)(s,{ref:o,component:"span",ownerState:{color:n,variant:l},sx:{...c&&{pl:.75},...d&&{pr:.75},...p},theme:g,...h,children:[c&&(0,e.jsxs)(a.Z,{sx:{mr:.75,...u},children:[" ",c," "]}),r,d&&(0,e.jsxs)(a.Z,{sx:{ml:.75,...u},children:[" ",d," "]})]})});var p=d},22720:function(t,o,r){r.r(o),r.d(o,{List:function(){return j},default:function(){return y}});var e=r(9268),n=r(79039),i=r(4957),a=r(99954),l=r(23343),c=r(81771),s=r(17095),d=r(65507),p=r(37487),h=r(90409),g=r(66589);function u(t){let{node:o,depth:r,length:n,sx:a}=t,u=(0,i.Z)(),m="light"===u.palette.mode,b=t=>({bgcolor:(0,l.Fq)(u.palette[t].main,.08),border:"solid 1px ".concat((0,l.Fq)(u.palette[t].main,.24)),color:m?u.palette[t].darker:u.palette[t].lighter}),f=1===r,x="root"===o.group,v="product design"===o.group,k="development"===o.group,y="marketing"===o.group;return(0,e.jsxs)(d.Z,{sx:{position:"relative",display:"inline-flex"},alignItems:"center",children:[!f&&(0,e.jsx)(p.Z,{alt:o.name,src:o.avatarUrl||"",sx:{mt:-3.5,zIndex:9,width:56,height:56,position:"absolute",border:"solid 4px ".concat(u.palette.background.paper)}}),(0,e.jsxs)(s.Z,{sx:{pt:5,pb:3,minWidth:200,borderRadius:1.5,textTransform:"capitalize",...f&&{py:2},...f&&v&&b("primary"),...f&&k&&b("info"),...f&&y&&b("warning"),...a},children:[1!==r&&!x&&(0,e.jsx)(c.Z,{sx:{top:0,left:0,width:1,height:4,position:"absolute",borderRadius:1.5,...v&&{bgcolor:"primary.light"},...k&&{bgcolor:"info.light"},...y&&{bgcolor:"warning.light"}}}),(0,e.jsxs)(h.Z,{variant:f?"subtitle1":"subtitle2",noWrap:!0,children:[o.name,f&&(0,e.jsx)(g.Z,{color:k&&"info"||y&&"warning"||"primary",sx:{ml:1},children:n})]}),!f&&(0,e.jsx)(h.Z,{variant:"caption",component:"div",noWrap:!0,sx:{color:"text.secondary"},children:o.role})]})]})}function m(t){let{node:o,sx:r}=t;return(0,e.jsx)(s.Z,{sx:{p:2,boxShadow:"none",borderRadius:1.5,display:"inline-flex",textTransform:"capitalize",color:t=>"light"===t.palette.mode?"primary.darker":"primary.lighter",bgcolor:t=>(0,l.Fq)(t.palette.primary.main,.08),border:t=>"1px solid ".concat((0,l.Fq)(t.palette.primary.main,.24)),...r},children:(0,e.jsx)(h.Z,{variant:"subtitle2",children:o.name})})}var b=r(8929),f=r(39714),x=r(55315),v=r(31931);function k(t){let{node:o,onEdit:r,onDelete:n,sx:i}=t,a=(0,v.S)();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(s.Z,{sx:{p:2,minWidth:200,borderRadius:1.5,textAlign:"left",position:"relative",display:"inline-flex",flexDirection:"column",textTransform:"capitalize",...i},children:[(0,e.jsx)(f.Z,{color:a.open?"inherit":"default",onClick:a.onOpen,sx:{position:"absolute",top:8,right:8},children:(0,e.jsx)(x.Z,{icon:"eva:more-horizontal-fill"})}),(0,e.jsx)(p.Z,{alt:o.name,src:o.avatarUrl||"",sx:{mr:2,mb:1,width:48,height:48}}),(0,e.jsx)(h.Z,{variant:"subtitle2",noWrap:!0,children:o.name}),(0,e.jsx)(h.Z,{variant:"caption",component:"div",noWrap:!0,sx:{color:"text.secondary"},children:o.role})]}),(0,e.jsxs)(v.Z,{open:a.open,onClose:a.onClose,arrow:"left-center",sx:{width:160},children:[n&&(0,e.jsxs)(b.Z,{onClick:()=>{a.onClose(),n()},sx:{color:"error.main"},children:[(0,e.jsx)(x.Z,{icon:"solar:trash-bin-trash-bold"}),"Delete"]}),r&&(0,e.jsxs)(b.Z,{onClick:()=>{a.onClose(),r()},children:[(0,e.jsx)(x.Z,{icon:"solar:pen-bold"}),"Edit"]})]})]})}function y(t){let{data:o,variant:r="simple",sx:a,...l}=t,c=(0,i.Z)();return(0,e.jsx)(n.m,{lineWidth:"1.5px",nodePadding:"4px",lineBorderRadius:"24px",lineColor:c.palette.divider,label:"simple"===r&&(0,e.jsx)(m,{sx:a,node:o})||"standard"===r&&(0,e.jsx)(k,{sx:a,node:o,onEdit:()=>console.info("EDIT",o.name),onDelete:()=>console.info("DELETE",o.name)})||"group"===r&&(0,e.jsx)(u,{sx:a,node:o}),...l,children:o.children.map(t=>(0,e.jsx)(j,{depth:1,data:t,variant:r,sx:a},t.name))})}function j(t){var o;let{data:r,depth:i,variant:l,sx:c}=t,s=r.children&&!!r.children;return(0,e.jsx)(n.O,{label:"simple"===l&&(0,e.jsx)(m,{sx:c,node:r})||"standard"===l&&(0,e.jsx)(k,{sx:c,node:r,onEdit:()=>console.info("EDIT",r.name),onDelete:()=>console.info("DELETE",r.name)})||"group"===l&&(0,e.jsx)(u,{sx:c,node:r,depth:i,length:null===(o=(0,a.V)(r.children))||void 0===o?void 0:o.length}),children:s&&(0,e.jsx)(Z,{data:r.children,depth:i,variant:l,sx:c})})}function Z(t){let{data:o,depth:r,variant:n,sx:i}=t;return(0,e.jsx)(e.Fragment,{children:o.map(t=>(0,e.jsx)(j,{data:t,depth:r+1,variant:n,sx:i},t.name))})}},42933:function(t,o,r){r.d(o,{D9:function(){return s},Ls:function(){return d},O1:function(){return g},XK:function(){return h},uS:function(){return c},v3:function(){return p}});var e=r(23343),n=r(69515),i=r(90182),a=r(67490),l=r(46017);let c=t=>{let{theme:o,bgcolor:r,dropdown:e}=t;return{...d({blur:20,opacity:.9,color:o.palette.background.paper,...!!r&&{color:r}}),backgroundImage:"url(/assets/cyan-blur.png), url(/assets/red-blur.png)",backgroundRepeat:"no-repeat, no-repeat",backgroundPosition:"top right, left bottom",backgroundSize:"50%, 50%",...e&&{padding:o.spacing(.5),boxShadow:o.customShadows.dropdown,borderRadius:1.25*o.shape.borderRadius}}},s=t=>({...t.typography.body2,padding:t.spacing(.75,1),borderRadius:.75*t.shape.borderRadius,"&:not(:last-of-type)":{marginBottom:4},["&.".concat(a.Z.selected)]:{fontWeight:t.typography.fontWeightSemiBold,backgroundColor:t.palette.action.selected,"&:hover":{backgroundColor:t.palette.action.hover}},["& .".concat(i.Z.root)]:{padding:t.spacing(.5),marginLeft:t.spacing(-.5),marginRight:t.spacing(.5)},["&.".concat(l.Z.option,'[aria-selected="true"]')]:{backgroundColor:t.palette.action.selected,"&:hover":{backgroundColor:t.palette.action.hover}},["&+.".concat(n.Z.root)]:{margin:t.spacing(.5,0)}});function d(t){let o=(null==t?void 0:t.color)||"#000000",r=(null==t?void 0:t.blur)||6,n=(null==t?void 0:t.opacity)||.8,i=null==t?void 0:t.imgUrl;return i?{position:"relative",backgroundImage:"url(".concat(i,")"),"&:before":{position:"absolute",top:0,left:0,zIndex:9,content:'""',width:"100%",height:"100%",backdropFilter:"blur(".concat(r,"px)"),WebkitBackdropFilter:"blur(".concat(r,"px)"),backgroundColor:(0,e.Fq)(o,n)}}:{backdropFilter:"blur(".concat(r,"px)"),WebkitBackdropFilter:"blur(".concat(r,"px)"),backgroundColor:(0,e.Fq)(o,n)}}function p(t){let o=(null==t?void 0:t.direction)||"to bottom",r=null==t?void 0:t.startColor,e=null==t?void 0:t.endColor,n=null==t?void 0:t.imgUrl,i=null==t?void 0:t.color;return n?{background:"linear-gradient(".concat(o,", ").concat(r||i,", ").concat(e||i,"), url(").concat(n,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}:{background:"linear-gradient(".concat(o,", ").concat(r,", ").concat(e,")")}}function h(t){return{background:"-webkit-linear-gradient(".concat(t,")"),WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}let g={x:{msOverflowStyle:"none",scrollbarWidth:"none",overflowX:"scroll","&::-webkit-scrollbar":{display:"none"}},y:{msOverflowStyle:"none",scrollbarWidth:"none",overflowY:"scroll","&::-webkit-scrollbar":{display:"none"}}}},99954:function(t,o,r){r.d(o,{V:function(){return function t(o){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"children",e=[],n=null==o?void 0:o.map(t=>(t[r]&&t[r].length&&(e=[...e,...t[r]]),t));return null==n?void 0:n.concat(e.length?t(e,r):e)}}})}}]);