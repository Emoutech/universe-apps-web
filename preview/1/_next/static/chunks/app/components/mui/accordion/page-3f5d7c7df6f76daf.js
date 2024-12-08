(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7357],{92720:function(e,n,r){Promise.resolve().then(r.bind(r,45107))},65785:function(e,n,r){"use strict";r.d(n,{Z:function(){return x}});var i=r(9268),t=r(81771),s=r(69881),o=r(65507),c=r(90409),l=r(88117),d=r(5669);function a(e){let{link:n,activeLast:r,disabled:o}=e,{name:c,href:l,icon:a}=n,x={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...o&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},h=(0,i.jsxs)(i.Fragment,{children:[a&&(0,i.jsx)(t.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:a}),c]});return l?(0,i.jsx)(s.Z,{component:d.r,href:l,sx:x,children:h}):(0,i.jsxs)(t.Z,{sx:x,children:[" ",h," "]})}function x(e){let{links:n,action:r,heading:d,moreLink:x,activeLast:u,sx:p,...j}=e,f=n[n.length-1].name;return(0,i.jsxs)(t.Z,{sx:{...p},children:[(0,i.jsxs)(o.Z,{direction:"row",alignItems:"center",children:[(0,i.jsxs)(t.Z,{sx:{flexGrow:1},children:[d&&(0,i.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,i.jsx)(l.Z,{separator:(0,i.jsx)(h,{}),...j,children:n.map(e=>(0,i.jsx)(a,{link:e,activeLast:u,disabled:e.name===f},e.name||""))})]}),r&&(0,i.jsxs)(t.Z,{sx:{flexShrink:0},children:[" ",r," "]})]}),!!x&&(0,i.jsx)(t.Z,{sx:{mt:2},children:x.map(e=>(0,i.jsx)(s.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e))})]})}function h(){return(0,i.jsx)(t.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},55315:function(e,n,r){"use strict";r.d(n,{Z:function(){return l}});var i=r(9268),t=r(86006),s=r(35551),o=r(81771);let c=(0,t.forwardRef)((e,n)=>{let{icon:r,width:t=20,sx:c,...l}=e;return(0,i.jsx)(o.Z,{ref:n,component:s.JO,className:"component-iconify",icon:r,sx:{width:t,height:t,...c},...l})});var l=c},5669:function(e,n,r){"use strict";r.d(n,{r:function(){return l}});var i=r(9268),t=r(86006),s=r(35846),o=r.n(s);let c=(0,t.forwardRef)((e,n)=>{let{...r}=e;return(0,i.jsx)(o(),{ref:n,...r})});var l=c},15211:function(e,n,r){"use strict";r.d(n,{Z:function(){return l}});var i=r(9268),t=r(23343),s=r(23835),o=r(17558),c=r(65507);function l(e){let{title:n,sx:r,children:l,...d}=e;return(0,i.jsxs)(s.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:e=>(0,t.Fq)(e.palette.grey[500],.04)},children:[n&&(0,i.jsx)(o.Z,{title:n}),(0,i.jsx)(c.Z,{spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:{p:5,minHeight:180,...r},...d,children:l})]})}},45107:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return m}});var i=r(9268),t=r(86006),s=r(81771),o=r(65507),c=r(89843),l=r(90409),d=r(59192),a=r(63956),x=r(95383),h=r(17950),u=r(82331),p=r(55315),j=r(65785),f=r(15211);let Z=[void 0,void 0,void 0,void 0].map((e,n)=>({id:u.QJ.id(n),value:"panel".concat(n+1),heading:"Accordion ".concat(n+1),subHeading:u.QJ.postTitle(n),detail:u.QJ.description(n)}));function m(){let[e,n]=(0,t.useState)(!1),r=e=>(r,i)=>{n(!!i&&e)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Z,{sx:{py:5,bgcolor:e=>"light"===e.palette.mode?"grey.200":"grey.800"},children:(0,i.jsx)(c.Z,{children:(0,i.jsx)(j.Z,{heading:"Accordion",links:[{name:"Components",href:h.H.components},{name:"Accordion"}],moreLink:["https://mui.com/components/accordion"]})})}),(0,i.jsx)(c.Z,{sx:{my:10},children:(0,i.jsxs)(o.Z,{spacing:5,children:[(0,i.jsx)(f.Z,{title:"Simple",spacing:0,children:Z.map((e,n)=>(0,i.jsxs)(d.Z,{disabled:3===n,children:[(0,i.jsx)(a.Z,{expandIcon:(0,i.jsx)(p.Z,{icon:"eva:arrow-ios-downward-fill"}),children:(0,i.jsx)(l.Z,{variant:"subtitle1",children:e.heading})}),(0,i.jsx)(x.Z,{children:(0,i.jsx)(l.Z,{children:e.detail})})]},e.value))}),(0,i.jsx)(f.Z,{title:"Controlled",spacing:0,children:Z.map((n,t)=>(0,i.jsxs)(d.Z,{disabled:3===t,expanded:e===n.value,onChange:r(n.value),children:[(0,i.jsxs)(a.Z,{expandIcon:(0,i.jsx)(p.Z,{icon:"eva:arrow-ios-downward-fill"}),children:[(0,i.jsx)(l.Z,{variant:"subtitle1",sx:{width:"33%",flexShrink:0},children:n.heading}),(0,i.jsx)(l.Z,{sx:{color:"text.secondary"},children:n.subHeading})]}),(0,i.jsx)(x.Z,{children:(0,i.jsx)(l.Z,{children:n.detail})})]},n.value))})]})})]})}}},function(e){e.O(0,[1278,2929,9083,5846,5551,5597,5226,89,14,7950,2331,2667,6488,1744],function(){return e(e.s=92720)}),_N_E=e.O()}]);