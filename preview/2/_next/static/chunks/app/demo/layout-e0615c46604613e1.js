(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8693],{89843:function(e,t,i){"use strict";i.d(t,{Z:function(){return w}});var n=i(46750),r=i(40431),o=i(86006),a=i(89791),l=i(38451),s=i(13809),d=i(47562),c=i(15749),u=i(96263),h=i(41153),p=i(9268);let x=["className","component","disableGutters","fixed","maxWidth","classes"],m=(0,h.Z)(),g=(0,u.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t[`maxWidth${(0,l.Z)(String(i.maxWidth))}`],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}}),f=e=>(0,c.Z)({props:e,name:"MuiContainer",defaultTheme:m}),v=(e,t)=>{let{classes:i,fixed:n,disableGutters:r,maxWidth:o}=e,a={root:["root",o&&`maxWidth${(0,l.Z)(String(o))}`,n&&"fixed",r&&"disableGutters"]};return(0,d.Z)(a,e=>(0,s.Z)(t,e),i)};var b=i(78473),j=i(95457),y=i(18006);let Z=function(e={}){let{createStyledComponent:t=g,useThemeProps:i=f,componentName:l="MuiContainer"}=e,s=t(({theme:e,ownerState:t})=>(0,r.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,i)=>{let n=e.breakpoints.values[i];return 0!==n&&(t[e.breakpoints.up(i)]={maxWidth:`${n}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>(0,r.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})),d=o.forwardRef(function(e,t){let o=i(e),{className:d,component:c="div",disableGutters:u=!1,fixed:h=!1,maxWidth:m="lg"}=o,g=(0,n.Z)(o,x),f=(0,r.Z)({},o,{component:c,disableGutters:u,fixed:h,maxWidth:m}),b=v(f,l);return(0,p.jsx)(s,(0,r.Z)({as:c,ownerState:f,className:(0,a.Z)(b.root,d),ref:t},g))});return d}({createStyledComponent:(0,j.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t[`maxWidth${(0,b.Z)(String(i.maxWidth))}`],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,y.Z)({props:e,name:"MuiContainer"})});var w=Z},33401:function(e,t,i){"use strict";var n=i(46750),r=i(40431),o=i(86006),a=i(89791),l=i(47562),s=i(95457),d=i(18006),c=i(25638),u=i(22879),h=i(9268);let p=["className"],x=e=>{let{alignItems:t,classes:i}=e;return(0,l.Z)({root:["root","flex-start"===t&&"alignItemsFlexStart"]},c.f,i)},m=(0,s.ZP)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,"flex-start"===i.alignItems&&t.alignItemsFlexStart]}})(({theme:e,ownerState:t})=>(0,r.Z)({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex"},"flex-start"===t.alignItems&&{marginTop:8})),g=o.forwardRef(function(e,t){let i=(0,d.Z)({props:e,name:"MuiListItemIcon"}),{className:l}=i,s=(0,n.Z)(i,p),c=o.useContext(u.Z),g=(0,r.Z)({},i,{alignItems:c.alignItems}),f=x(g);return(0,h.jsx)(m,(0,r.Z)({className:(0,a.Z)(f.root,l),ownerState:g,ref:t},s))});t.Z=g},54711:function(e,t,i){"use strict";i.d(t,{Z:function(){return b}});var n=i(46750),r=i(40431),o=i(86006),a=i(89791),l=i(47562),s=i(95457),d=i(18006),c=i(78473),u=i(88539),h=i(13809);function p(e){return(0,h.Z)("MuiListSubheader",e)}(0,u.Z)("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);var x=i(9268);let m=["className","color","component","disableGutters","disableSticky","inset"],g=e=>{let{classes:t,color:i,disableGutters:n,inset:r,disableSticky:o}=e,a={root:["root","default"!==i&&`color${(0,c.Z)(i)}`,!n&&"gutters",r&&"inset",!o&&"sticky"]};return(0,l.Z)(a,p,t)},f=(0,s.ZP)("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,"default"!==i.color&&t[`color${(0,c.Z)(i.color)}`],!i.disableGutters&&t.gutters,i.inset&&t.inset,!i.disableSticky&&t.sticky]}})(({theme:e,ownerState:t})=>(0,r.Z)({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(e.vars||e).palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},"primary"===t.color&&{color:(e.vars||e).palette.primary.main},"inherit"===t.color&&{color:"inherit"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.inset&&{paddingLeft:72},!t.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(e.vars||e).palette.background.paper})),v=o.forwardRef(function(e,t){let i=(0,d.Z)({props:e,name:"MuiListSubheader"}),{className:o,color:l="default",component:s="li",disableGutters:c=!1,disableSticky:u=!1,inset:h=!1}=i,p=(0,n.Z)(i,m),v=(0,r.Z)({},i,{color:l,component:s,disableGutters:c,disableSticky:u,inset:h}),b=g(v);return(0,x.jsx)(f,(0,r.Z)({as:s,className:(0,a.Z)(b.root,o),ref:t,ownerState:v},p))});v.muiSkipListHighlight=!0;var b=v},57138:function(e,t,i){Promise.resolve().then(i.bind(i,96118))},96118:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return M}});var n=i(9268),r=i(99605),o=i(81771),a=i(39168),l=i(52992),s=i(16418),d=i(30469);function c(e){let{children:t,sx:i,...r}=e,a=(0,s.K$)(),c=(0,l.F)("up","lg"),u="horizontal"===a.themeLayout,h="mini"===a.themeLayout;return u?(0,n.jsx)(o.Z,{component:"main",sx:{minHeight:1,display:"flex",flexDirection:"column",pt:"".concat(d.y.H_MOBILE+24,"px"),pb:10,...c&&{pt:"".concat(2*d.y.H_MOBILE+40,"px"),pb:15}},children:t}):(0,n.jsx)(o.Z,{component:"main",sx:{flexGrow:1,py:"".concat(d.y.H_MOBILE+8,"px"),...c&&{px:2,py:"".concat(d.y.H_DESKTOP+8,"px"),width:"calc(100% - ".concat(d.w.W_VERTICAL,"px)"),...h&&{width:"calc(100% - ".concat(d.w.W_MINI,"px)")}},...i},...r,children:t})}var u=i(4957),h=i(65507),p=i(95824),x=i(5793),m=i(39714),g=i(42933),f=i(43586),v=i(46604),b=i(51374),j=i(72608);function y(e){let{onOpenNav:t}=e,i=(0,u.Z)(),r=(0,s.K$)(),o="horizontal"===r.themeLayout,a="mini"===r.themeLayout,c=(0,l.F)("up","lg"),y=(0,f.y)(d.y.H_DESKTOP),Z=(0,n.jsxs)(n.Fragment,{children:[c&&o&&(0,n.jsx)(v.Z,{sx:{mr:2.5}}),!c&&(0,n.jsx)(m.Z,{onClick:t,children:(0,n.jsx)(b.Z,{src:"/assets/icons/navbar/ic_menu_item.svg"})}),(0,n.jsx)(j.wD,{}),(0,n.jsxs)(h.Z,{flexGrow:1,direction:"row",alignItems:"center",justifyContent:"flex-end",spacing:{xs:.5,sm:1},children:[(0,n.jsx)(j.T4,{}),(0,n.jsx)(j.Yr,{}),(0,n.jsx)(j.c3,{}),(0,n.jsx)(j.ls,{}),(0,n.jsx)(j.x4,{})]})]});return(0,n.jsx)(p.Z,{sx:{height:d.y.H_MOBILE,zIndex:i.zIndex.appBar+1,...(0,g.Ls)({color:i.palette.background.default}),transition:i.transitions.create(["height"],{duration:i.transitions.duration.shorter}),...c&&{width:"calc(100% - ".concat(d.w.W_VERTICAL+1,"px)"),height:d.y.H_DESKTOP,...y&&!o&&{height:d.y.H_DESKTOP_OFFSET},...o&&{width:1,bgcolor:"background.default",height:d.y.H_DESKTOP_OFFSET,borderBottom:"dashed 1px ".concat(i.palette.divider)},...a&&{width:"calc(100% - ".concat(d.w.W_MINI+1,"px)")}}},children:(0,n.jsx)(x.Z,{sx:{height:1,px:{lg:5}},children:Z})})}var Z=i(1503),w=i(55073),S=i(77531);function k(){let{user:e}=(0,Z.E)(),t=(0,S.O)();return(0,n.jsxs)(o.Z,{component:"nav",sx:{flexShrink:{lg:0},width:{lg:d.w.W_MINI}},children:[(0,n.jsx)(j.S_,{sx:{top:22,left:d.w.W_MINI-12}}),(0,n.jsxs)(h.Z,{sx:{pb:2,height:1,position:"fixed",width:d.w.W_MINI,borderRight:e=>"dashed 1px ".concat(e.palette.divider),...g.O1.x},children:[(0,n.jsx)(v.Z,{sx:{mx:"auto",my:2}}),(0,n.jsx)(w.Hg,{data:t,config:{currentRole:(null==e?void 0:e.role)||"admin"}})]})]})}var R=i(86006),E=i(26250),H=i(7688),C=i(74373);function P(e){let{openNav:t,onCloseNav:i}=e,{user:r}=(0,Z.E)(),a=(0,C.jD)(),s=(0,l.F)("up","lg"),c=(0,S.O)();(0,R.useEffect)(()=>{t&&i()},[a]);let u=(0,n.jsxs)(H.Z,{sx:{height:1,"& .simplebar-content":{height:1,display:"flex",flexDirection:"column"}},children:[(0,n.jsx)(v.Z,{sx:{mt:3,ml:4,mb:1}}),(0,n.jsx)(w.Mr,{data:c,config:{currentRole:(null==r?void 0:r.role)||"admin"}}),(0,n.jsx)(o.Z,{sx:{flexGrow:1}}),(0,n.jsx)(j.Q$,{})]});return(0,n.jsxs)(o.Z,{component:"nav",sx:{flexShrink:{lg:0},width:{lg:d.w.W_VERTICAL}},children:[(0,n.jsx)(j.S_,{}),s?(0,n.jsx)(h.Z,{sx:{height:1,position:"fixed",width:d.w.W_VERTICAL,borderRight:e=>"dashed 1px ".concat(e.palette.divider)},children:u}):(0,n.jsx)(E.ZP,{open:t,onClose:i,PaperProps:{sx:{width:d.w.W_VERTICAL}},children:u})]})}var W=(0,R.memo)(function(){let e=(0,u.Z)(),{user:t}=(0,Z.E)(),i=(0,S.O)();return(0,n.jsxs)(p.Z,{component:"nav",sx:{top:d.y.H_DESKTOP_OFFSET},children:[(0,n.jsx)(x.Z,{sx:{...(0,g.Ls)({color:e.palette.background.default})},children:(0,n.jsx)(w.EM,{data:i,config:{currentRole:(null==t?void 0:t.role)||"admin"}})}),(0,n.jsx)(j._s,{})]})});function L(e){let{children:t}=e,i=(0,s.K$)(),r=(0,l.F)("up","lg"),d=(0,a.k)(),u="horizontal"===i.themeLayout,h="mini"===i.themeLayout,p=(0,n.jsx)(k,{}),x=(0,n.jsx)(W,{}),m=(0,n.jsx)(P,{openNav:d.value,onCloseNav:d.onFalse});return u?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y,{onOpenNav:d.onTrue}),r?x:m,(0,n.jsx)(c,{children:t})]}):h?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y,{onOpenNav:d.onTrue}),(0,n.jsxs)(o.Z,{sx:{display:{lg:"flex"},minHeight:{lg:1}},children:[r?p:m,(0,n.jsx)(c,{children:t})]})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y,{onOpenNav:d.onTrue}),(0,n.jsxs)(o.Z,{sx:{display:{lg:"flex"},minHeight:{lg:1}},children:[m,(0,n.jsx)(c,{children:t})]})]})}function M(e){let{children:t}=e;return(0,n.jsx)(r.a1,{children:(0,n.jsx)(L,{children:t})})}},99605:function(e,t,i){"use strict";i.d(t,{a1:function(){return d},Ak:function(){return c},jx:function(){return g}});var n=i(9268),r=i(86006),o=i(17950),a=i(74373),l=i(1503);let s={jwt:o.H.auth.jwt.login,auth0:o.H.auth.auth0.login,amplify:o.H.auth.amplify.login,firebase:o.H.auth.firebase.login};function d(e){let{children:t}=e,i=(0,a.tv)(),{authenticated:o,method:d}=(0,l.E)(),[c,u]=(0,r.useState)(!1),h=(0,r.useCallback)(()=>{if(o)u(!0);else{let e=new URLSearchParams({returnTo:window.location.href}).toString(),t=s[d],n="".concat(t,"?").concat(e);i.replace(n)}},[o,d,i]);return((0,r.useEffect)(()=>{h()},[]),c)?(0,n.jsx)(n.Fragment,{children:t}):null}function c(e){let{children:t}=e,i=(0,a.tv)(),{authenticated:s}=(0,l.E)(),d=(0,r.useCallback)(()=>{s&&i.replace(o.H.demo.root)},[s,i]);return(0,r.useEffect)(()=>{d()},[d]),(0,n.jsx)(n.Fragment,{children:t})}var u=i(30655),h=i(89843),p=i(90409),x=i(31935),m=i(92975);function g(e){let{hasContent:t,roles:i,children:r,sx:o}=e,{user:a}=(0,l.E)(),s=null==a?void 0:a.role;return void 0===i||i.includes(s)?(0,n.jsxs)(n.Fragment,{children:[" ",r," "]}):t?(0,n.jsxs)(h.Z,{component:m.NM,sx:{textAlign:"center",...o},children:[(0,n.jsx)(u.m.div,{variants:(0,m.Wp)().in,children:(0,n.jsx)(p.Z,{variant:"h3",paragraph:!0,children:"Permission Denied"})}),(0,n.jsx)(u.m.div,{variants:(0,m.Wp)().in,children:(0,n.jsx)(p.Z,{sx:{color:"text.secondary"},children:"You do not have permission to access this page"})}),(0,n.jsx)(u.m.div,{variants:(0,m.Wp)().in,children:(0,n.jsx)(x.E,{sx:{height:260,my:{xs:5,sm:10}}})})]}):null}},55073:function(e,t,i){"use strict";i.d(t,{EM:function(){return Y},Hg:function(){return C},Mr:function(){return D}});var n=i(9268),r=i(86006),o=i(65507);let a=e=>({itemGap:(null==e?void 0:e.itemGap)||4,iconSize:(null==e?void 0:e.iconSize)||24,currentRole:null==e?void 0:e.currentRole,itemRootHeight:(null==e?void 0:e.itemRootHeight)||44,itemSubHeight:(null==e?void 0:e.itemSubHeight)||36,itemPadding:(null==e?void 0:e.itemPadding)||"4px 8px 4px 12px",itemRadius:(null==e?void 0:e.itemRadius)||8,hiddenLabel:(null==e?void 0:e.hiddenLabel)||!1}),l=e=>({itemGap:(null==e?void 0:e.itemGap)||4,iconSize:(null==e?void 0:e.iconSize)||22,currentRole:null==e?void 0:e.currentRole,itemRootHeight:(null==e?void 0:e.itemRootHeight)||56,itemSubHeight:(null==e?void 0:e.itemSubHeight)||34,itemPadding:(null==e?void 0:e.itemPadding)||"6px 0 0 0",itemRadius:(null==e?void 0:e.itemRadius)||6,hiddenLabel:(null==e?void 0:e.hiddenLabel)||!1}),s=e=>({itemGap:(null==e?void 0:e.itemGap)||6,iconSize:(null==e?void 0:e.iconSize)||22,currentRole:null==e?void 0:e.currentRole,itemRootHeight:(null==e?void 0:e.itemRootHeight)||32,itemSubHeight:(null==e?void 0:e.itemSubHeight)||34,itemPadding:(null==e?void 0:e.itemPadding)||"0 6px 0 6px",itemRadius:(null==e?void 0:e.itemRadius)||6,hiddenLabel:(null==e?void 0:e.hiddenLabel)||!1});var d=i(19550),c=i(48343),u=i(26591),h=i(74373),p=i(58583),x=i(4957),m=i(69881),g=i(19744),f=i(88939),v=i(5669),b=i(55315),j=i(95457),y=i(23343),Z=i(33401),w=i(27052);let S=(0,j.ZP)(w.Z,{shouldForwardProp:e=>"active"!==e})(e=>{let{active:t,open:i,depth:n,config:r,theme:o}=e,a=1!==n,l={root:{color:"light"===o.palette.mode?o.palette.primary.main:o.palette.primary.light,backgroundColor:(0,y.Fq)(o.palette.primary.main,.08),"&:hover":{backgroundColor:(0,y.Fq)(o.palette.primary.main,.16)}},sub:{color:o.palette.text.primary,backgroundColor:o.palette.action.selected,"&:hover":{backgroundColor:o.palette.action.hover}}};return{flexDirection:"column",justifyContent:"center",borderRadius:r.itemRadius,minHeight:r.itemRootHeight,color:o.palette.text.secondary,margin:"0 ".concat(r.itemGap,"px ").concat(r.itemGap,"px ").concat(r.itemGap,"px"),...r.hiddenLabel&&!a&&{padding:r.itemPadding},...t&&{...l.root},...a&&{margin:0,flexDirection:"row",padding:o.spacing(0,1),minHeight:r.itemSubHeight,...t&&{...l.sub}},...i&&!t&&{color:o.palette.text.primary,backgroundColor:o.palette.action.hover}}}),k=(0,j.ZP)(Z.Z)(e=>{let{size:t}=e;return{width:t,height:t,marginRight:0}}),R=(0,r.forwardRef)((e,t)=>{let{item:i,depth:r,open:o,active:a,externalLink:l,config:s,...d}=e,c=(0,x.Z)(),{title:u,path:h,icon:p,children:j,disabled:y,caption:Z,roles:w}=i,R=1!==r,E=(0,n.jsxs)(S,{disableGutters:!0,ref:t,open:o,depth:r,active:a,disabled:y,config:s,...d,children:[p&&(0,n.jsx)(k,{size:s.iconSize,children:p}),!(s.hiddenLabel&&!R)&&(0,n.jsx)(f.Z,{sx:{width:1,flex:"unset",...!R&&{px:.5,mt:.5}},primary:u,primaryTypographyProps:{noWrap:!0,fontSize:10,lineHeight:"16px",textAlign:"center",textTransform:"capitalize",fontWeight:a?"fontWeightBold":"fontWeightSemiBold",...R&&{textAlign:"unset",fontSize:c.typography.body2.fontSize,lineHeight:c.typography.body2.lineHeight,fontWeight:a?"fontWeightSemiBold":"fontWeightMedium"}}}),Z&&(0,n.jsx)(g.Z,{title:Z,arrow:!0,placement:"right",children:(0,n.jsx)(b.Z,{width:16,icon:"eva:info-outline",sx:{color:"text.disabled",...!R&&{top:11,left:6,position:"absolute"}}})}),!!j&&(0,n.jsx)(b.Z,{width:16,icon:"eva:arrow-ios-forward-fill",sx:{top:11,right:6,position:"absolute"}})]});return w&&!w.includes("".concat(s.currentRole))?null:l?(0,n.jsx)(m.Z,{href:h,target:"_blank",rel:"noopener",underline:"none",sx:{width:1,...y&&{cursor:"default"}},children:E}):(0,n.jsx)(m.Z,{component:v.r,href:h,underline:"none",sx:{width:1,...y&&{cursor:"default"}},children:E})});function E(e){let{data:t,depth:i,hasChild:o,config:a}=e,l=(0,r.useRef)(null),s=(0,h.jD)(),x=(0,p.X)(t.path,o),m=t.path.includes("http"),[g,f]=(0,r.useState)(!1);(0,r.useEffect)(()=>{g&&b()},[s]),(0,r.useEffect)(()=>{let e=Array.from(document.querySelectorAll(".".concat(d.Z.root)));document.body.style.overflow="",document.body.style.padding="",e.forEach(e=>{e.style.padding=""})},[g]);let v=(0,r.useCallback)(()=>{f(!0)},[]),b=(0,r.useCallback)(()=>{f(!1)},[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(R,{ref:l,item:t,depth:i,open:g,active:x,externalLink:m,onMouseEnter:v,onMouseLeave:b,config:a}),o&&(0,n.jsx)(c.ZP,{open:g,anchorEl:l.current,anchorOrigin:{vertical:"center",horizontal:"right"},transformOrigin:{vertical:"center",horizontal:"left"},PaperProps:{onMouseEnter:v,onMouseLeave:b},sx:{pointerEvents:"none",["& .".concat(u.Z.paper)]:{mt:.5,width:160,...g&&{pointerEvents:"auto"}}},children:(0,n.jsx)(H,{data:t.children,depth:i,config:a})})]})}function H(e){let{data:t,depth:i,config:r}=e;return(0,n.jsx)(o.Z,{spacing:.5,children:t.map(e=>(0,n.jsx)(E,{data:e,depth:i+1,hasChild:!!e.children,config:r},e.title+e.path))})}var C=(0,r.memo)(function(e){let{data:t,config:i,sx:r,...a}=e;return(0,n.jsx)(o.Z,{sx:r,...a,children:t.map((e,t)=>(0,n.jsx)(P,{items:e.items,config:l(i)},e.subheader||t))})});function P(e){let{items:t,config:i}=e;return(0,n.jsx)(n.Fragment,{children:t.map(e=>(0,n.jsx)(E,{data:e,depth:1,hasChild:!!e.children,config:i},e.title+e.path))})}var W=i(64020),L=i(74495),M=i(54711);let F=(0,j.ZP)(w.Z,{shouldForwardProp:e=>"active"!==e})(e=>{let{active:t,depth:i,config:n,theme:r}=e,o=1!==i,a=i>2,l={root:{color:"light"===r.palette.mode?r.palette.primary.main:r.palette.primary.light,backgroundColor:(0,y.Fq)(r.palette.primary.main,.08),"&:hover":{backgroundColor:(0,y.Fq)(r.palette.primary.main,.16)}},sub:{color:r.palette.text.primary,backgroundColor:"transparent","&:hover":{backgroundColor:r.palette.action.hover}}};return{padding:n.itemPadding,marginBottom:n.itemGap,borderRadius:n.itemRadius,minHeight:n.itemRootHeight,color:r.palette.text.secondary,...t&&{...l.root},...o&&{minHeight:n.itemSubHeight,...t&&{...l.sub}},...a&&{paddingLeft:r.spacing(i)}}}),_=(0,j.ZP)(Z.Z)(e=>{let{size:t}=e;return{width:t,height:t,alignItems:"center",justifyContent:"center"}}),z=(0,j.ZP)("span")(e=>{let{active:t,theme:i}=e;return{width:4,height:4,borderRadius:"50%",backgroundColor:i.palette.text.disabled,transition:i.transitions.create(["transform"],{duration:i.transitions.duration.shorter}),...t&&{transform:"scale(2)",backgroundColor:i.palette.primary.main}}}),I=(0,j.ZP)(M.Z)(e=>{let{config:t,theme:i}=e;return{...i.typography.overline,fontSize:11,cursor:"pointer",display:"inline-flex",padding:t.itemPadding,paddingTop:i.spacing(2),marginBottom:t.itemGap,paddingBottom:i.spacing(1),color:i.palette.text.disabled,transition:i.transitions.create(["color"],{duration:i.transitions.duration.shortest}),"&:hover":{color:i.palette.text.primary}}});var T=i(81771);function G(e){let{item:t,open:i,depth:r,active:o,config:a,externalLink:l,...s}=e,{title:d,path:c,icon:u,info:h,children:p,disabled:x,caption:j,roles:y}=t,Z=1!==r,w=(0,n.jsxs)(F,{disableGutters:!0,disabled:x,active:o,depth:r,config:a,...s,children:[(0,n.jsxs)(n.Fragment,{children:[u&&(0,n.jsx)(_,{size:a.iconSize,children:u}),Z&&(0,n.jsx)(_,{size:a.iconSize,children:(0,n.jsx)(z,{active:o})})]}),!(a.hiddenLabel&&!Z)&&(0,n.jsx)(f.Z,{primary:d,secondary:j?(0,n.jsx)(g.Z,{title:j,placement:"top-start",children:(0,n.jsx)("span",{children:j})}):null,primaryTypographyProps:{noWrap:!0,typography:"body2",textTransform:"capitalize",fontWeight:o?"fontWeightSemiBold":"fontWeightMedium"},secondaryTypographyProps:{noWrap:!0,component:"span",typography:"caption",color:"text.disabled"}}),h&&(0,n.jsx)(T.Z,{component:"span",sx:{ml:1,lineHeight:0},children:h}),!!p&&(0,n.jsx)(b.Z,{width:16,icon:i?"eva:arrow-ios-downward-fill":"eva:arrow-ios-forward-fill",sx:{ml:1,flexShrink:0}})]});return y&&!y.includes("".concat(a.currentRole))?null:l?(0,n.jsx)(m.Z,{href:c,target:"_blank",rel:"noopener",underline:"none",color:"inherit",sx:{...x&&{cursor:"default"}},children:w}):p?w:(0,n.jsx)(m.Z,{component:v.r,href:c,underline:"none",color:"inherit",sx:{...x&&{cursor:"default"}},children:w})}function O(e){let{data:t,depth:i,hasChild:o,config:a}=e,l=(0,h.jD)(),s=(0,p.X)(t.path,o),d=t.path.includes("http"),[c,u]=(0,r.useState)(s);(0,r.useEffect)(()=>{s||m()},[l]);let x=(0,r.useCallback)(()=>{u(e=>!e)},[]),m=(0,r.useCallback)(()=>{u(!1)},[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(G,{item:t,depth:i,open:c,active:s,externalLink:d,onClick:x,config:a}),o&&(0,n.jsx)(L.Z,{in:c,unmountOnExit:!0,children:(0,n.jsx)(N,{data:t.children,depth:i,config:a})})]})}function N(e){let{data:t,depth:i,config:r}=e;return(0,n.jsx)(n.Fragment,{children:t.map(e=>(0,n.jsx)(O,{data:e,depth:i+1,hasChild:!!e.children,config:r},e.title+e.path))})}var D=(0,r.memo)(function(e){let{data:t,config:i,sx:r,...l}=e;return(0,n.jsx)(o.Z,{sx:r,...l,children:t.map((e,t)=>(0,n.jsx)(B,{subheader:e.subheader,items:e.items,config:a(i)},e.subheader||t))})});function B(e){let{subheader:t,items:i,config:o}=e,[a,l]=(0,r.useState)(!0),s=(0,r.useCallback)(()=>{l(e=>!e)},[]),d=i.map(e=>(0,n.jsx)(O,{data:e,depth:1,hasChild:!!e.children,config:o},e.title+e.path));return(0,n.jsx)(W.Z,{disablePadding:!0,sx:{px:2},children:t?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(I,{disableGutters:!0,disableSticky:!0,onClick:s,config:o,children:t}),(0,n.jsx)(L.Z,{in:a,children:d})]}):d})}var A=i(42933);let $=(0,j.ZP)(w.Z,{shouldForwardProp:e=>"active"!==e})(e=>{let{active:t,open:i,depth:n,config:r,theme:o}=e,a={color:o.palette.text.primary,backgroundColor:o.palette.action.selected};return{flexShrink:0,padding:r.itemPadding,marginRight:r.itemGap,borderRadius:r.itemRadius,minHeight:r.itemRootHeight,color:o.palette.text.secondary,...t&&{...a},...1!==n&&{margin:0,padding:o.spacing(0,1),minHeight:r.itemSubHeight},...i&&!t&&{color:o.palette.text.primary,backgroundColor:o.palette.action.hover}}}),K=(0,j.ZP)(Z.Z)(e=>{let{size:t}=e;return{width:t,height:t,flexShrink:0,marginRight:0}}),q=(0,r.forwardRef)((e,t)=>{let{item:i,depth:r,open:o,active:a,externalLink:l,config:s,...d}=e,{title:c,path:u,icon:h,info:p,children:x,disabled:j,caption:y,roles:Z}=i,w=1!==r,S=(0,n.jsxs)($,{disableGutters:!0,ref:t,open:o,depth:r,active:a,disabled:j,config:s,...d,children:[h&&(0,n.jsx)(K,{size:s.iconSize,children:h}),!(s.hiddenLabel&&!w)&&(0,n.jsx)(f.Z,{sx:{...!w&&{ml:1}},primary:c,primaryTypographyProps:{noWrap:!0,typography:"body2",textTransform:"capitalize",fontWeight:a?"fontWeightBold":"fontWeightMedium",...w&&{fontWeight:a?"fontWeightSemiBold":"fontWeightMedium"}}}),p&&(0,n.jsx)(T.Z,{component:"span",sx:{ml:.5,lineHeight:0},children:p}),y&&(0,n.jsx)(g.Z,{title:y,arrow:!0,children:(0,n.jsx)(b.Z,{width:16,icon:"eva:info-outline",sx:{ml:.5,color:"text.disabled"}})}),!!x&&(0,n.jsx)(b.Z,{icon:w?"eva:arrow-ios-forward-fill":"eva:arrow-ios-downward-fill",width:16,sx:{flexShrink:0,ml:.5}})]});return Z&&!Z.includes("".concat(s.currentRole))?null:l?(0,n.jsx)(m.Z,{href:u,target:"_blank",rel:"noopener",underline:"none",sx:{...j&&{cursor:"default"}},children:S}):(0,n.jsx)(m.Z,{component:v.r,href:u,underline:"none",sx:{...j&&{cursor:"default"}},children:S})});function V(e){let{data:t,depth:i,hasChild:o,config:a}=e,l=(0,r.useRef)(null),s=(0,h.jD)(),x=(0,p.X)(t.path,o),m=t.path.includes("http"),[g,f]=(0,r.useState)(!1);(0,r.useEffect)(()=>{g&&b()},[s]),(0,r.useEffect)(()=>{let e=Array.from(document.querySelectorAll(".".concat(d.Z.root)));document.body.style.overflow="",document.body.style.padding="",e.forEach(e=>{e.style.padding=""})},[g]);let v=()=>{f(!0)},b=()=>{f(!1)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(q,{ref:l,item:t,depth:i,open:g,active:x,externalLink:m,onMouseEnter:v,onMouseLeave:b,config:a}),o&&(0,n.jsx)(c.ZP,{open:g,anchorEl:l.current,anchorOrigin:1===i?{vertical:"bottom",horizontal:"left"}:{vertical:"center",horizontal:"right"},transformOrigin:1===i?{vertical:"top",horizontal:"left"}:{vertical:"center",horizontal:"left"},PaperProps:{onMouseEnter:v,onMouseLeave:b},sx:{pointerEvents:"none",["& .".concat(u.Z.paper)]:{width:160,...g&&{pointerEvents:"auto"}}},children:(0,n.jsx)(X,{data:t.children,depth:i,config:a})})]})}function X(e){let{data:t,depth:i,config:r}=e;return(0,n.jsx)(o.Z,{spacing:.5,children:t.map(e=>(0,n.jsx)(V,{data:e,depth:i+1,hasChild:!!e.children,config:r},e.title+e.path))})}var Y=(0,r.memo)(function(e){let{data:t,config:i,sx:r,...a}=e;return(0,n.jsx)(o.Z,{direction:"row",sx:{mx:"auto",...A.O1.y,...r},...a,children:t.map((e,t)=>(0,n.jsx)(Q,{items:e.items,config:s(i)},e.subheader||t))})});function Q(e){let{items:t,config:i}=e;return(0,n.jsx)(n.Fragment,{children:t.map(e=>(0,n.jsx)(V,{data:e,depth:1,hasChild:!!e.children,config:i},e.title+e.path))})}}},function(e){e.O(0,[1278,2929,9083,5846,5551,5597,5011,4571,9744,254,655,3628,8761,5650,570,2968,2916,6350,389,5651,1335,4869,1533,7950,2331,1935,2429,2608,2667,6488,1744],function(){return e(e.s=57138)}),_N_E=e.O()}]);