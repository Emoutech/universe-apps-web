(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[643],{14844:function(e,r,t){Promise.resolve().then(t.bind(t,29626))},65785:function(e,r,t){"use strict";t.d(r,{Z:function(){return h}});var n=t(9268),i=t(81771),a=t(69881),l=t(65507),o=t(90409),s=t(88117),d=t(5669);function c(e){let{link:r,activeLast:t,disabled:l}=e,{name:o,href:s,icon:c}=r,h={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...l&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},m=(0,n.jsxs)(n.Fragment,{children:[c&&(0,n.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),o]});return s?(0,n.jsx)(a.Z,{component:d.r,href:s,sx:h,children:m}):(0,n.jsxs)(i.Z,{sx:h,children:[" ",m," "]})}function h(e){let{links:r,action:t,heading:d,moreLink:h,activeLast:u,sx:f,...x}=e,p=r[r.length-1].name;return(0,n.jsxs)(i.Z,{sx:{...f},children:[(0,n.jsxs)(l.Z,{direction:"row",alignItems:"center",children:[(0,n.jsxs)(i.Z,{sx:{flexGrow:1},children:[d&&(0,n.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:d}),!!r.length&&(0,n.jsx)(s.Z,{separator:(0,n.jsx)(m,{}),...x,children:r.map(e=>(0,n.jsx)(c,{link:e,activeLast:u,disabled:e.name===p},e.name||""))})]}),t&&(0,n.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!h&&(0,n.jsx)(i.Z,{sx:{mt:2},children:h.map(e=>(0,n.jsx)(a.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e))})]})}function m(){return(0,n.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},55315:function(e,r,t){"use strict";t.d(r,{Z:function(){return s}});var n=t(9268),i=t(86006),a=t(35551),l=t(81771);let o=(0,i.forwardRef)((e,r)=>{let{icon:t,width:i=20,sx:o,...s}=e;return(0,n.jsx)(l.Z,{ref:r,component:a.JO,className:"component-iconify",icon:t,sx:{width:i,height:i,...o},...s})});var s=o},66589:function(e,r,t){"use strict";t.d(r,{Z:function(){return h}});var n=t(9268),i=t(86006),a=t(4957),l=t(81771),o=t(95457),s=t(23343);let d=(0,o.ZP)(l.Z)(e=>{let{theme:r,ownerState:t}=e,n="light"===r.palette.mode,i="filled"===t.variant,a="outlined"===t.variant,l="soft"===t.variant,o={..."default"===t.color&&{...i&&{color:n?r.palette.common.white:r.palette.grey[800],backgroundColor:r.palette.text.primary},...a&&{backgroundColor:"transparent",color:r.palette.text.primary,border:"2px solid ".concat(r.palette.text.primary)},...l&&{color:r.palette.text.secondary,backgroundColor:(0,s.Fq)(r.palette.grey[500],.16)}}},d={..."default"!==t.color&&{...i&&{color:r.palette[t.color].contrastText,backgroundColor:r.palette[t.color].main},...a&&{backgroundColor:"transparent",color:r.palette[t.color].main,border:"2px solid ".concat(r.palette[t.color].main)},...l&&{color:r.palette[t.color][n?"dark":"light"],backgroundColor:(0,s.Fq)(r.palette[t.color].main,.16)}}};return{height:24,minWidth:24,lineHeight:0,borderRadius:6,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",textTransform:"capitalize",padding:r.spacing(0,.75),fontSize:r.typography.pxToRem(12),fontWeight:r.typography.fontWeightBold,transition:r.transitions.create("all",{duration:r.transitions.duration.shorter}),...o,...d}}),c=(0,i.forwardRef)((e,r)=>{let{children:t,color:i="default",variant:o="soft",startIcon:s,endIcon:c,sx:h,...m}=e,u=(0,a.Z)(),f={width:16,height:16,"& svg, img":{width:1,height:1,objectFit:"cover"}};return(0,n.jsxs)(d,{ref:r,component:"span",ownerState:{color:i,variant:o},sx:{...s&&{pl:.75},...c&&{pr:.75},...h},theme:u,...m,children:[s&&(0,n.jsxs)(l.Z,{sx:{mr:.75,...f},children:[" ",s," "]}),t,c&&(0,n.jsxs)(l.Z,{sx:{ml:.75,...f},children:[" ",c," "]})]})});var h=c},5669:function(e,r,t){"use strict";t.d(r,{r:function(){return s}});var n=t(9268),i=t(86006),a=t(35846),l=t.n(a);let o=(0,i.forwardRef)((e,r)=>{let{...t}=e;return(0,n.jsx)(l(),{ref:r,...t})});var s=o},29626:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return _}});var n=t(9268),i=t(81771),a=t(69881),l=t(17095),o=t(65507),s=t(89843),d=t(17558),c=t(90409),h=t(17950),m=t(82331),u=t(65785),f=t(39714),x=t(70024),p=t(55315);let g=[{field:"id",headerName:"ID",width:120},{field:"firstName",headerName:"First name",width:160,editable:!0},{field:"lastName",headerName:"Last name",width:160,editable:!0},{field:"age",headerName:"Age",type:"number",width:120,editable:!0,align:"center",headerAlign:"center"},{field:"fullName",headerName:"Full name",description:"This column has a value getter and is not sortable.",flex:1,valueGetter:e=>"".concat(e.row.firstName||""," ").concat(e.row.lastName||"")},{field:"action",headerName:" ",width:80,align:"right",sortable:!1,disableColumnMenu:!0,renderCell:()=>(0,n.jsx)(f.Z,{children:(0,n.jsx)(p.Z,{icon:"eva:more-vertical-fill"})})}];function b(e){let{data:r}=e;return(0,n.jsx)(x._,{columns:g,rows:r,checkboxSelection:!0,disableRowSelectionOnClick:!0})}var w=t(86006),j=t(55064),Z=t(37487),v=t(16063),y=t(13260),C=t(67304),N=t(66328),k=t(66589);let S=[{field:"id"},{field:"avatar",headerName:"Avatar",align:"center",headerAlign:"center",width:64,sortable:!1,filterable:!1,disableColumnMenu:!0,renderCell:e=>(0,n.jsx)(Z.Z,{alt:e.row.name,sx:{width:36,height:36},children:e.row.name.charAt(0).toUpperCase()})},{field:"name",headerName:"Name",flex:1,editable:!0},{field:"email",headerName:"Email",flex:1,editable:!0,renderCell:e=>(0,n.jsx)(c.Z,{variant:"body2",sx:{textDecoration:"underline"},noWrap:!0,children:e.row.email})},{field:"lastLogin",type:"dateTime",headerName:"Last login",align:"right",headerAlign:"right",width:200},{field:"rating",type:"number",headerName:"Rating",width:160,disableColumnMenu:!0,renderCell:e=>(0,n.jsx)(j.Z,{size:"small",value:e.row.rating,precision:.5,readOnly:!0})},{field:"status",type:"singleSelect",headerName:"Status",valueOptions:["online","alway","busy"],align:"center",headerAlign:"center",width:120,renderCell:e=>(0,n.jsx)(k.Z,{variant:"soft",color:"busy"===e.row.status&&"error"||"alway"===e.row.status&&"warning"||"success",sx:{mx:"auto"},children:e.row.status})},{field:"isAdmin",type:"boolean",align:"center",headerAlign:"center",width:120,renderCell:e=>e.row.isAdmin?(0,n.jsx)(p.Z,{icon:"eva:checkmark-circle-2-fill",sx:{color:"primary.main"}}):"-"},{field:"performance",type:"number",headerName:"Performance",align:"center",headerAlign:"center",width:160,renderCell:e=>(0,n.jsxs)(o.Z,{spacing:1,direction:"row",alignItems:"center",sx:{px:1,width:1,height:1},children:[(0,n.jsx)(v.Z,{value:e.row.performance,variant:"determinate",color:e.row.performance<30&&"error"||e.row.performance>30&&e.row.performance<70&&"warning"||"primary",sx:{width:1,height:6}}),(0,n.jsx)(c.Z,{variant:"caption",sx:{width:80},children:(0,N.f2)(e.row.performance)})]})},{field:"action",headerName:" ",align:"right",width:80,sortable:!1,filterable:!1,disableColumnMenu:!0,renderCell:e=>(0,n.jsx)(f.Z,{onClick:()=>console.info("ID",e.row.id),children:(0,n.jsx)(p.Z,{icon:"eva:more-vertical-fill"})})}];function A(e){let{data:r}=e,[t,i]=(0,w.useState)([]),[a,l]=(0,w.useState)({id:!1});if(S.length){let e=S.find(e=>"rating"===e.field),r=S.findIndex(e=>"rating"===e.field),t=(0,y.U)().map(e=>({...e,InputComponent:J}));S[r]={...e,filterOperators:t}}let o=(0,w.useCallback)(e=>{l(e)},[]),s=["id","action"],d=r.filter(e=>t.includes(e.id));return console.info("SELECTED ROWS",d),(0,n.jsx)(x._,{checkboxSelection:!0,disableRowSelectionOnClick:!0,rows:r,columns:S,onRowSelectionModelChange:e=>{i(e)},columnVisibilityModel:a,onColumnVisibilityModelChange:o,slots:{toolbar:C.n},slotProps:{columnsPanel:{getTogglableColumns:()=>S.filter(e=>!s.includes(e.field)).map(e=>e.field)}}})}function J(e){let{item:r,applyValue:t}=e;return(0,n.jsx)(i.Z,{sx:{p:1,height:1,alignItems:"flex-end",display:"flex"},children:(0,n.jsx)(j.Z,{size:"small",precision:.5,placeholder:"Filter value",value:Number(r.value),onChange:(e,n)=>{t({...r,value:n})}})})}let R=[...Array(20)].map((e,r)=>{let t=r%2&&"online"||r%3&&"alway"||r%4&&"busy"||"offline";return{id:m.QJ.id(r),status:t,email:m.QJ.email(r),name:m.QJ.fullName(r),age:m.QJ.number.age(r),lastLogin:m.QJ.time(r),isAdmin:m.QJ.boolean(r),lastName:m.QJ.lastName(r),rating:m.QJ.number.rating(r),firstName:m.QJ.firstName(r),performance:m.QJ.number.percent(r)}});function _(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{sx:{py:5,bgcolor:e=>"light"===e.palette.mode?"grey.200":"grey.800"},children:(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(u.Z,{heading:"DataGrid",links:[{name:"Components",href:h.H.components},{name:"DataGrid"}],moreLink:["https://mui.com/x/react-data-grid/"],sx:{mb:0}}),(0,n.jsxs)(c.Z,{variant:"body2",sx:{my:3},children:["This component includes 2 ",(0,n.jsx)("strong",{children:"Free"})," and ",(0,n.jsx)("strong",{children:"Paid"})," versions from MUI.",(0,n.jsx)("br",{}),"Paid version will have more features. Please read more"," ",(0,n.jsx)(a.Z,{href:"https://mui.com/x/react-data-grid/",target:"_blank",rel:"noopener",children:"here"})]})]})}),(0,n.jsx)(s.Z,{sx:{my:10},children:(0,n.jsxs)(o.Z,{spacing:5,children:[(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(d.Z,{title:"Basic",sx:{mb:2}}),(0,n.jsx)(i.Z,{sx:{height:390},children:(0,n.jsx)(b,{data:R})})]}),(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(d.Z,{title:"Custom",sx:{mb:2}}),(0,n.jsx)(i.Z,{sx:{height:720},children:(0,n.jsx)(A,{data:R})})]})]})})]})}},66328:function(e,r,t){"use strict";t.d(r,{FK:function(){return a},e_:function(){return l},f2:function(){return o},oe:function(){return d},v1:function(){return s}});var n=t(7578),i=t.n(n);function a(e){return i()(e).format()}function l(e){let r=e?i()(e).format("$0,0.00"):"";return c(r,".00")}function o(e){let r=e?i()(Number(e)/100).format("0.0%"):"";return c(r,".0")}function s(e){let r=e?i()(e).format("0.00a"):"";return c(r,".00")}function d(e){let r=e?i()(e).format("0.0 b"):"";return c(r,".0")}function c(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".00",t=e.includes(r);return t?e.replace(r,""):e}}},function(e){e.O(0,[1278,2929,9083,5846,5551,5597,5011,4571,9744,254,3628,8761,5226,3451,1326,7578,3774,5064,3831,7950,2331,2667,6488,1744],function(){return e(e.s=14844)}),_N_E=e.O()}]);