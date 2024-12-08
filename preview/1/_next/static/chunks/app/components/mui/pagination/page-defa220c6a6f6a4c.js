(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6514],{78436:function(e,n,t){Promise.resolve().then(t.bind(t,71353))},65785:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var s=t(9268),r=t(81771),a=t(69881),i=t(65507),o=t(90409),c=t(88117),l=t(5669);function u(e){let{link:n,activeLast:t,disabled:i}=e,{name:o,href:c,icon:u}=n,d={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...i&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},x=(0,s.jsxs)(s.Fragment,{children:[u&&(0,s.jsx)(r.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:u}),o]});return c?(0,s.jsx)(a.Z,{component:l.r,href:c,sx:d,children:x}):(0,s.jsxs)(r.Z,{sx:d,children:[" ",x," "]})}function d(e){let{links:n,action:t,heading:l,moreLink:d,activeLast:h,sx:j,...p}=e,Z=n[n.length-1].name;return(0,s.jsxs)(r.Z,{sx:{...j},children:[(0,s.jsxs)(i.Z,{direction:"row",alignItems:"center",children:[(0,s.jsxs)(r.Z,{sx:{flexGrow:1},children:[l&&(0,s.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:l}),!!n.length&&(0,s.jsx)(c.Z,{separator:(0,s.jsx)(x,{}),...p,children:n.map(e=>(0,s.jsx)(u,{link:e,activeLast:h,disabled:e.name===Z},e.name||""))})]}),t&&(0,s.jsxs)(r.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!d&&(0,s.jsx)(r.Z,{sx:{mt:2},children:d.map(e=>(0,s.jsx)(a.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e))})]})}function x(){return(0,s.jsx)(r.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},5669:function(e,n,t){"use strict";t.d(n,{r:function(){return c}});var s=t(9268),r=t(86006),a=t(35846),i=t.n(a);let o=(0,r.forwardRef)((e,n)=>{let{...t}=e;return(0,s.jsx)(i(),{ref:n,...t})});var c=o},15211:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var s=t(9268),r=t(23343),a=t(23835),i=t(17558),o=t(65507);function c(e){let{title:n,sx:t,children:c,...l}=e;return(0,s.jsxs)(a.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:e=>(0,r.Fq)(e.palette.grey[500],.04)},children:[n&&(0,s.jsx)(i.Z,{title:n}),(0,s.jsx)(o.Z,{spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:{p:5,minHeight:180,...t},...l,children:c})]})}},71353:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var s=t(9268),r=t(86006),a=t(34825),i=t(81771),o=t(89843),c=t(34196),l=t(44823),u=t(17950),d=t(65785),x=t(15211);let h=["standard","primary","secondary","info","success","warning","error"],j=["small","medium","large"];function p(){let[e,n]=(0,r.useState)(2),[t,p]=(0,r.useState)(10),Z=(0,r.useCallback)((e,t)=>{n(t)},[]),g=(0,r.useCallback)(e=>{p(parseInt(e.target.value,10)),n(0)},[]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{sx:{py:5,bgcolor:e=>"light"===e.palette.mode?"grey.200":"grey.800"},children:(0,s.jsx)(o.Z,{children:(0,s.jsx)(d.Z,{heading:"Pagination",links:[{name:"Components",href:u.H.components},{name:"Pagination"}],moreLink:["https://mui.com/components/pagination"]})})}),(0,s.jsx)(o.Z,{sx:{my:10},children:(0,s.jsxs)(a.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,s.jsxs)(x.Z,{title:"Circular",children:[(0,s.jsx)(c.Z,{shape:"circular",count:10,variant:"text"}),(0,s.jsx)(c.Z,{shape:"circular",count:10,variant:"text",disabled:!0}),(0,s.jsx)(c.Z,{shape:"circular",count:10,variant:"outlined"}),(0,s.jsx)(c.Z,{shape:"circular",count:10,variant:"outlined",disabled:!0}),(0,s.jsx)(c.Z,{shape:"circular",count:10,variant:"soft"}),(0,s.jsx)(c.Z,{shape:"circular",count:10,variant:"soft",disabled:!0})]}),(0,s.jsxs)(x.Z,{title:"Rounded",children:[(0,s.jsx)(c.Z,{shape:"rounded",count:10,variant:"text"}),(0,s.jsx)(c.Z,{shape:"rounded",count:10,variant:"text",disabled:!0}),(0,s.jsx)(c.Z,{shape:"rounded",count:10,variant:"outlined"}),(0,s.jsx)(c.Z,{shape:"rounded",count:10,variant:"outlined",disabled:!0}),(0,s.jsx)(c.Z,{shape:"rounded",count:10,variant:"soft"}),(0,s.jsx)(c.Z,{shape:"rounded",count:10,variant:"soft",disabled:!0})]}),(0,s.jsxs)(x.Z,{title:"Colors",children:[h.map(e=>(0,s.jsx)(c.Z,{color:e,count:10,variant:"text"},e)),h.map(e=>(0,s.jsx)(c.Z,{color:e,count:10,variant:"outlined"},e)),h.map(e=>(0,s.jsx)(c.Z,{color:e,count:10,variant:"soft"},e))]}),(0,s.jsx)(x.Z,{title:"Sizes",children:j.map(e=>(0,s.jsx)(c.Z,{count:10,size:e},e))}),(0,s.jsxs)(x.Z,{title:"Buttons",children:[(0,s.jsx)(c.Z,{count:10,showFirstButton:!0,showLastButton:!0}),(0,s.jsx)(c.Z,{count:10,hidePrevButton:!0,hideNextButton:!0})]}),(0,s.jsxs)(x.Z,{title:"Ranges",children:[(0,s.jsx)(c.Z,{count:11,defaultPage:6,siblingCount:0}),(0,s.jsx)(c.Z,{count:11,defaultPage:6}),(0,s.jsx)(c.Z,{count:11,defaultPage:6,siblingCount:0,boundaryCount:2}),(0,s.jsx)(c.Z,{count:11,defaultPage:6,boundaryCount:2})]}),(0,s.jsx)(x.Z,{title:"Table",children:(0,s.jsx)(l.Z,{component:"div",count:100,page:e,onPageChange:Z,rowsPerPage:t,onRowsPerPageChange:g})})]})})]})}}},function(e){e.O(0,[1278,2929,9083,5846,5597,4571,254,3628,8761,5226,3451,8587,7950,2667,6488,1744],function(){return e(e.s=78436)}),_N_E=e.O()}]);