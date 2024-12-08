(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1464],{53158:function(t,i,n){Promise.resolve().then(n.bind(n,31766))},31766:function(t,i,n){"use strict";n.r(i),n.d(i,{default:function(){return r}});var a=n(9268),e=n(99605),o=n(28744);function r(t){let{children:i}=t;return(0,a.jsx)(e.Ak,{children:(0,a.jsx)(o.Z,{title:"Manage the job more effectively with Minimal",children:i})})}},56880:function(t,i,n){"use strict";n.r(i),n.d(i,{AuthContext:function(){return e}});var a=n(86006);let e=(0,a.createContext)({})},99605:function(t,i,n){"use strict";n.d(i,{a1:function(){return c},Ak:function(){return u},jx:function(){return f}});var a=n(9268),e=n(86006),o=n(17950),r=n(74373),l=n(1503);let s={jwt:o.H.auth.jwt.login,auth0:o.H.auth.auth0.login,amplify:o.H.auth.amplify.login,firebase:o.H.auth.firebase.login};function c(t){let{children:i}=t,n=(0,r.tv)(),{authenticated:o,method:c}=(0,l.E)(),[u,d]=(0,e.useState)(!1),p=(0,e.useCallback)(()=>{if(o)d(!0);else{let t=new URLSearchParams({returnTo:window.location.href}).toString(),i=s[c],a="".concat(i,"?").concat(t);n.replace(a)}},[o,c,n]);return((0,e.useEffect)(()=>{p()},[]),u)?(0,a.jsx)(a.Fragment,{children:i}):null}function u(t){let{children:i}=t,n=(0,r.tv)(),{authenticated:s}=(0,l.E)(),c=(0,e.useCallback)(()=>{s&&n.replace(o.H.demo.root)},[s,n]);return(0,e.useEffect)(()=>{c()},[c]),(0,a.jsx)(a.Fragment,{children:i})}var d=n(30655),p=n(89843),y=n(90409),x=n(31935),m=n(92975);function f(t){let{hasContent:i,roles:n,children:e,sx:o}=t,{user:r}=(0,l.E)(),s=null==r?void 0:r.role;return void 0===n||n.includes(s)?(0,a.jsxs)(a.Fragment,{children:[" ",e," "]}):i?(0,a.jsxs)(p.Z,{component:m.NM,sx:{textAlign:"center",...o},children:[(0,a.jsx)(d.m.div,{variants:(0,m.Wp)().in,children:(0,a.jsx)(y.Z,{variant:"h3",paragraph:!0,children:"Permission Denied"})}),(0,a.jsx)(d.m.div,{variants:(0,m.Wp)().in,children:(0,a.jsx)(y.Z,{sx:{color:"text.secondary"},children:"You do not have permission to access this page"})}),(0,a.jsx)(d.m.div,{variants:(0,m.Wp)().in,children:(0,a.jsx)(x.E,{sx:{height:260,my:{xs:5,sm:10}}})})]}):null}},1503:function(t,i,n){"use strict";n.d(i,{E:function(){return o}});var a=n(86006),e=n(56880);let o=()=>{let t=(0,a.useContext)(e.AuthContext);if(!t)throw Error("useAuthContext context must be use inside AuthProvider");return t}},92975:function(t,i,n){"use strict";n.d(i,{NM:function(){return Z},DG:function(){return w},R0:function(){return f},Q4:function(){return h},UZ:function(){return g},Wp:function(){return p},Ew:function(){return m},EU:function(){return l},HN:function(){return c},U6:function(){return x},lj:function(){return a},j$:function(){return y},Jt:function(){return d},pH:function(){return u},BN:function(){return e},BL:function(){return s}});let a={animate:{fillOpacity:[0,0,1],pathLength:[1,.4,0],transition:{duration:2,ease:[.43,.13,.23,.96]}}},e=t=>{let i=(null==t?void 0:t.duration)||.32,n=(null==t?void 0:t.ease)||[.43,.13,.23,.96];return{duration:i,ease:n}},o=t=>{let i=(null==t?void 0:t.durationIn)||.64,n=(null==t?void 0:t.easeIn)||[.43,.13,.23,.96];return{duration:i,ease:n}},r=t=>{let i=(null==t?void 0:t.durationOut)||.48,n=(null==t?void 0:t.easeOut)||[.43,.13,.23,.96];return{duration:i,ease:n}},l=t=>{let i=(null==t?void 0:t.distance)||120,n=null==t?void 0:t.durationIn,a=null==t?void 0:t.durationOut,e=null==t?void 0:t.easeIn,l=null==t?void 0:t.easeOut;return{in:{initial:{opacity:0},animate:{opacity:1,transition:o},exit:{opacity:0,transition:r}},inUp:{initial:{y:i,opacity:0},animate:{y:0,opacity:1,transition:o({durationIn:n,easeIn:e})},exit:{y:i,opacity:0,transition:r({durationOut:a,easeOut:l})}},inDown:{initial:{y:-i,opacity:0},animate:{y:0,opacity:1,transition:o({durationIn:n,easeIn:e})},exit:{y:-i,opacity:0,transition:r({durationOut:a,easeOut:l})}},inLeft:{initial:{x:-i,opacity:0},animate:{x:0,opacity:1,transition:o({durationIn:n,easeIn:e})},exit:{x:-i,opacity:0,transition:r({durationOut:a,easeOut:l})}},inRight:{initial:{x:i,opacity:0},animate:{x:0,opacity:1,transition:o({durationIn:n,easeIn:e})},exit:{x:i,opacity:0,transition:r({durationOut:a,easeOut:l})}},out:{initial:{opacity:1},animate:{opacity:0,transition:o({durationIn:n,easeIn:e})},exit:{opacity:1,transition:r({durationOut:a,easeOut:l})}},outUp:{initial:{y:0,opacity:1},animate:{y:-i,opacity:0,transition:o({durationIn:n,easeIn:e})},exit:{y:0,opacity:1,transition:r({durationOut:a,easeOut:l})}},outDown:{initial:{y:0,opacity:1},animate:{y:i,opacity:0,transition:o({durationIn:n,easeIn:e})},exit:{y:0,opacity:1,transition:r({durationOut:a,easeOut:l})}},outLeft:{initial:{x:0,opacity:1},animate:{x:-i,opacity:0,transition:o({durationIn:n,easeIn:e})},exit:{x:0,opacity:1,transition:r({durationOut:a,easeOut:l})}},outRight:{initial:{x:0,opacity:1},animate:{x:i,opacity:0,transition:o({durationIn:n,easeIn:e})},exit:{x:0,opacity:1,transition:r({durationOut:a,easeOut:l})}}}},s=t=>{let i=(null==t?void 0:t.distance)||720,n=null==t?void 0:t.durationIn,a=null==t?void 0:t.durationOut,e=null==t?void 0:t.easeIn,l=null==t?void 0:t.easeOut;return{in:{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1,transition:o({durationIn:n,easeIn:e})},exit:{scale:0,opacity:0,transition:r({durationOut:a,easeOut:l})}},inUp:{initial:{scale:0,opacity:0,translateY:i},animate:{scale:1,opacity:1,translateY:0,transition:o({durationIn:n,easeIn:e})},exit:{scale:0,opacity:0,translateY:i,transition:r({durationOut:a,easeOut:l})}},inDown:{initial:{scale:0,opacity:0,translateY:-i},animate:{scale:1,opacity:1,translateY:0,transition:o({durationIn:n,easeIn:e})},exit:{scale:0,opacity:0,translateY:-i,transition:r({durationOut:a,easeOut:l})}},inLeft:{initial:{scale:0,opacity:0,translateX:-i},animate:{scale:1,opacity:1,translateX:0,transition:o({durationIn:n,easeIn:e})},exit:{scale:0,opacity:0,translateX:-i,transition:r({durationOut:a,easeOut:l})}},inRight:{initial:{scale:0,opacity:0,translateX:i},animate:{scale:1,opacity:1,translateX:0,transition:o({durationIn:n,easeIn:e})},exit:{scale:0,opacity:0,translateX:i,transition:r({durationOut:a,easeOut:l})}},out:{initial:{scale:1,opacity:1},animate:{scale:0,opacity:0,transition:o({durationIn:n,easeIn:e})}},outUp:{initial:{scale:1,opacity:1},animate:{scale:0,opacity:0,translateY:-i,transition:o({durationIn:n,easeIn:e})}},outDown:{initial:{scale:1,opacity:1},animate:{scale:0,opacity:0,translateY:i,transition:o({durationIn:n,easeIn:e})}},outLeft:{initial:{scale:1,opacity:1},animate:{scale:0,opacity:0,translateX:-i,transition:o({durationIn:n,easeIn:e})}},outRight:{initial:{scale:1,opacity:1},animate:{scale:0,opacity:0,translateX:i,transition:o({durationIn:n,easeIn:e})}}}},c=t=>{let i=null==t?void 0:t.durationIn,n=null==t?void 0:t.durationOut,a=null==t?void 0:t.easeIn,e=null==t?void 0:t.easeOut;return{inX:{initial:{rotateX:-180,opacity:0},animate:{rotateX:0,opacity:1,transition:o({durationIn:i,easeIn:a})},exit:{rotateX:-180,opacity:0,transition:r({durationOut:n,easeOut:e})}},inY:{initial:{rotateY:-180,opacity:0},animate:{rotateY:0,opacity:1,transition:o({durationIn:i,easeIn:a})},exit:{rotateY:-180,opacity:0,transition:r({durationOut:n,easeOut:e})}},outX:{initial:{rotateX:0,opacity:1},animate:{rotateX:70,opacity:0,transition:r({durationOut:n,easeOut:e})}},outY:{initial:{rotateY:0,opacity:1},animate:{rotateY:70,opacity:0,transition:r({durationOut:n,easeOut:e})}}}},u=t=>{let i=(null==t?void 0:t.distance)||160,n=null==t?void 0:t.durationIn,a=null==t?void 0:t.durationOut,e=null==t?void 0:t.easeIn,l=null==t?void 0:t.easeOut;return{inUp:{initial:{y:i},animate:{y:0,transition:o({durationIn:n,easeIn:e})},exit:{y:i,transition:r({durationOut:a,easeOut:l})}},inDown:{initial:{y:-i},animate:{y:0,transition:o({durationIn:n,easeIn:e})},exit:{y:-i,transition:r({durationOut:a,easeOut:l})}},inLeft:{initial:{x:-i},animate:{x:0,transition:o({durationIn:n,easeIn:e})},exit:{x:-i,transition:r({durationOut:a,easeOut:l})}},inRight:{initial:{x:i},animate:{x:0,transition:o({durationIn:n,easeIn:e})},exit:{x:i,transition:r({durationOut:a,easeOut:l})}},outUp:{initial:{y:0},animate:{y:-i,transition:o({durationIn:n,easeIn:e})},exit:{y:0,transition:r({durationOut:a,easeOut:l})}},outDown:{initial:{y:0},animate:{y:i,transition:o({durationIn:n,easeIn:e})},exit:{y:0,transition:r({durationOut:a,easeOut:l})}},outLeft:{initial:{x:0},animate:{x:-i,transition:o({durationIn:n,easeIn:e})},exit:{x:0,transition:r({durationOut:a,easeOut:l})}},outRight:{initial:{x:0},animate:{x:i,transition:o({durationIn:n,easeIn:e})},exit:{x:0,transition:r({durationOut:a,easeOut:l})}}}},d=t=>{let i=null==t?void 0:t.durationIn,n=null==t?void 0:t.durationOut,a=null==t?void 0:t.easeIn,e=null==t?void 0:t.easeOut;return{inX:{initial:{scaleX:0,opacity:0},animate:{scaleX:1,opacity:1,transition:o({durationIn:i,easeIn:a})},exit:{scaleX:0,opacity:0,transition:r({durationOut:n,easeOut:e})}},inY:{initial:{scaleY:0,opacity:0},animate:{scaleY:1,opacity:1,transition:o({durationIn:i,easeIn:a})},exit:{scaleY:0,opacity:0,transition:r({durationOut:n,easeOut:e})}},outX:{initial:{scaleX:1,opacity:1},animate:{scaleX:0,opacity:0,transition:o({durationIn:i,easeIn:a})}},outY:{initial:{scaleY:1,opacity:1},animate:{scaleY:0,opacity:0,transition:o({durationIn:i,easeIn:a})}}}},p=t=>{let i=null==t?void 0:t.durationIn,n=null==t?void 0:t.durationOut,a=null==t?void 0:t.easeIn,e=null==t?void 0:t.easeOut;return{in:{initial:{},animate:{scale:[.3,1.1,.9,1.03,.97,1],opacity:[0,1,1,1,1,1],transition:o({durationIn:i,easeIn:a})},exit:{scale:[.9,1.1,.3],opacity:[1,1,0]}},inUp:{initial:{},animate:{y:[720,-24,12,-4,0],scaleY:[4,.9,.95,.985,1],opacity:[0,1,1,1,1],transition:{...o({durationIn:i,easeIn:a})}},exit:{y:[12,-24,720],scaleY:[.985,.9,3],opacity:[1,1,0],transition:r({durationOut:n,easeOut:e})}},inDown:{initial:{},animate:{y:[-720,24,-12,4,0],scaleY:[4,.9,.95,.985,1],opacity:[0,1,1,1,1],transition:o({durationIn:i,easeIn:a})},exit:{y:[-12,24,-720],scaleY:[.985,.9,3],opacity:[1,1,0],transition:r({durationOut:n,easeOut:e})}},inLeft:{initial:{},animate:{x:[-720,24,-12,4,0],scaleX:[3,1,.98,.995,1],opacity:[0,1,1,1,1],transition:o({durationIn:i,easeIn:a})},exit:{x:[0,24,-720],scaleX:[1,.9,2],opacity:[1,1,0],transition:r({durationOut:n,easeOut:e})}},inRight:{initial:{},animate:{x:[720,-24,12,-4,0],scaleX:[3,1,.98,.995,1],opacity:[0,1,1,1,1],transition:o({durationIn:i,easeIn:a})},exit:{x:[0,-24,720],scaleX:[1,.9,2],opacity:[1,1,0],transition:r({durationOut:n,easeOut:e})}},out:{animate:{scale:[.9,1.1,.3],opacity:[1,1,0]}},outUp:{animate:{y:[-12,24,-720],scaleY:[.985,.9,3],opacity:[1,1,0]}},outDown:{animate:{y:[12,-24,720],scaleY:[.985,.9,3],opacity:[1,1,0]}},outLeft:{animate:{x:[0,24,-720],scaleX:[1,.9,2],opacity:[1,1,0]}},outRight:{animate:{x:[0,-24,720],scaleX:[1,.9,2],opacity:[1,1,0]}}}},y=t=>{let i=null==t?void 0:t.durationIn,n=null==t?void 0:t.durationOut,a=null==t?void 0:t.easeIn,e=null==t?void 0:t.easeOut;return{in:{initial:{opacity:0,rotate:-360},animate:{opacity:1,rotate:0,transition:o({durationIn:i,easeIn:a})},exit:{opacity:0,rotate:-360,transition:r({durationOut:n,easeOut:e})}},out:{initial:{opacity:1,rotate:0},animate:{opacity:0,rotate:-360,transition:r({durationOut:n,easeOut:e})}}}},x=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1.09,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.97;return{hover:{scale:t},tap:{scale:i}}},m=t=>{let i=(null==t?void 0:t.staggerIn)||.05,n=(null==t?void 0:t.staggerIn)||.05,a=(null==t?void 0:t.staggerIn)||.05;return{animate:{transition:{staggerChildren:i,delayChildren:n}},exit:{transition:{staggerChildren:a,staggerDirection:-1}}}},f=t=>{let i=(null==t?void 0:t.colors)||["#19dcea","#b22cff"],n=(null==t?void 0:t.duration)||5,a=(null==t?void 0:t.ease)||"linear";return{animate:{background:i,transition:{duration:n,ease:a}}}},h=t=>{let i=(null==t?void 0:t.duration)||5,n=(null==t?void 0:t.ease)||"easeOut";return{top:{animate:{scale:[1,1.25],y:[0,-15],transformOrigin:["50% 16%","50% top"],transition:{duration:i,ease:n}}},bottom:{animate:{scale:[1,1.25],y:[0,15],transformOrigin:["50% 84%","50% bottom"],transition:{duration:i,ease:n}}},left:{animate:{scale:[1,1.25],x:[0,20],y:[0,15],transformOrigin:["16% 50%","0% left"],transition:{duration:i,ease:n}}},right:{animate:{scale:[1,1.25],x:[0,-20],y:[0,-15],transformOrigin:["84% 50%","0% right"],transition:{duration:i,ease:n}}}}},g=t=>{let i=(null==t?void 0:t.colors)||["#ee7752","#e73c7e","#23a6d5","#23d5ab"],n=(null==t?void 0:t.duration)||5,a=(null==t?void 0:t.ease)||"linear",e=t=>"linear-gradient(".concat(t,"deg, ").concat(i,")");return{top:{animate:{backgroundImage:[e(0),e(0)],backgroundPosition:["center 99%","center 1%"],backgroundSize:["100% 600%","100% 600%"],transition:{duration:n,ease:a}}},right:{animate:{backgroundPosition:["1% center","99% center"],backgroundImage:[e(270),e(270)],backgroundSize:["600% 100%","600% 100%"],transition:{duration:n,ease:a}}},bottom:{animate:{backgroundImage:[e(0),e(0)],backgroundPosition:["center 1%","center 99%"],backgroundSize:["100% 600%","100% 600%"],transition:{duration:n,ease:a}}},left:{animate:{backgroundPosition:["99% center","1% center"],backgroundImage:[e(270),e(270)],backgroundSize:["600% 100%","600% 100%"],transition:{duration:n,ease:a}}}}};var v=n(9268),b=n(30655),k=n(81771),j=n(52992);function w(t){let{children:i,disableAnimatedMobile:n=!0,...a}=t,e=(0,j.F)("down","sm");return e&&n?(0,v.jsx)(k.Z,{...a,children:i}):(0,v.jsx)(k.Z,{component:b.m.div,initial:"initial",whileInView:"animate",viewport:{once:!0,amount:.3},variants:m(),...a,children:i})}function Z(t){let{animate:i,action:n=!1,children:a,...e}=t;return n?(0,v.jsx)(k.Z,{component:b.m.div,initial:!1,animate:i?"animate":"exit",variants:m(),...e,children:a}):(0,v.jsx)(k.Z,{component:b.m.div,initial:"initial",animate:"animate",exit:"exit",variants:m(),...e,children:a})}},46604:function(t,i,n){"use strict";n.d(i,{Z:function(){return u}});var a=n(9268),e=n(86006),o=n(4957),r=n(69881),l=n(81771),s=n(5669);let c=(0,e.forwardRef)((t,i)=>{let{disabledLink:n=!1,sx:e,...c}=t,u=(0,o.Z)(),d=u.palette.primary.light,p=u.palette.primary.main,y=u.palette.primary.dark,x=(0,a.jsx)(l.Z,{ref:i,component:"div",sx:{width:40,height:40,display:"inline-flex",...e},...c,children:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",children:[(0,a.jsxs)("defs",{children:[(0,a.jsxs)("linearGradient",{id:"BG1",x1:"100%",x2:"50%",y1:"9.946%",y2:"50%",children:[(0,a.jsx)("stop",{offset:"0%",stopColor:y}),(0,a.jsx)("stop",{offset:"100%",stopColor:p})]}),(0,a.jsxs)("linearGradient",{id:"BG2",x1:"50%",x2:"50%",y1:"0%",y2:"100%",children:[(0,a.jsx)("stop",{offset:"0%",stopColor:d}),(0,a.jsx)("stop",{offset:"100%",stopColor:p})]}),(0,a.jsxs)("linearGradient",{id:"BG3",x1:"50%",x2:"50%",y1:"0%",y2:"100%",children:[(0,a.jsx)("stop",{offset:"0%",stopColor:d}),(0,a.jsx)("stop",{offset:"100%",stopColor:p})]})]}),(0,a.jsxs)("g",{fill:p,fillRule:"evenodd",stroke:"none",strokeWidth:"1",children:[(0,a.jsx)("path",{fill:"url(#BG1)",d:"M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z"}),(0,a.jsx)("path",{fill:"url(#BG2)",d:"M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"}),(0,a.jsx)("path",{fill:"url(#BG3)",d:"M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"})]})]})});return n?x:(0,a.jsx)(r.Z,{component:s.r,href:"/",sx:{display:"contents"},children:x})});var u=c},52992:function(t,i,n){"use strict";n.d(i,{F:function(){return o},z:function(){return r}});var a=n(4957),e=n(93066);function o(t,i,n){let o=(0,a.Z)(),r=(0,e.Z)(o.breakpoints.up(i)),l=(0,e.Z)(o.breakpoints.down(i)),s=(0,e.Z)(o.breakpoints.between(i,n)),c=(0,e.Z)(o.breakpoints.only(i));return"up"===t?r:"down"===t?l:"between"===t?s:c}function r(){let t=(0,a.Z)(),i=[...t.breakpoints.keys].reverse();return i.reduce((i,n)=>{let a=(0,e.Z)(t.breakpoints.up(n));return!i&&a?n:i},null)||"xs"}},28744:function(t,i,n){"use strict";n.d(i,{Z:function(){return g}});var a=n(9268),e=n(4957),o=n(23343),r=n(81771),l=n(69881),s=n(65507),c=n(19744),u=n(90409),d=n(1503),p=n(17950),y=n(5669),x=n(52992),m=n(42933),f=n(46604);let h=[{id:"jwt",label:"Jwt",path:p.H.auth.jwt.login,icon:"/assets/icons/auth/ic_jwt.svg"},{id:"firebase",label:"Firebase",path:p.H.auth.firebase.login,icon:"/assets/icons/auth/ic_firebase.svg"},{id:"amplify",label:"Amplify",path:p.H.auth.amplify.login,icon:"/assets/icons/auth/ic_amplify.svg"},{id:"auth0",label:"Auth0",path:p.H.auth.auth0.login,icon:"/assets/icons/auth/ic_auth0.svg"}];function g(t){let{children:i,image:n,title:p}=t,{method:g}=(0,d.E)(),v=(0,e.Z)(),b=(0,x.F)("up","md"),k=(0,a.jsx)(f.Z,{sx:{zIndex:9,position:"absolute",m:{xs:2,md:5}}}),j=(0,a.jsx)(s.Z,{sx:{width:1,mx:"auto",maxWidth:480,px:{xs:2,md:8},py:{xs:15,md:30}},children:i}),w=(0,a.jsxs)(s.Z,{flexGrow:1,alignItems:"center",justifyContent:"center",spacing:10,sx:{...(0,m.v3)({color:(0,o.Fq)(v.palette.background.default,"light"===v.palette.mode?.88:.94),imgUrl:"/assets/background/overlay_2.jpg"})},children:[(0,a.jsx)(u.Z,{variant:"h3",sx:{maxWidth:480,textAlign:"center"},children:p||"Hi, Welcome back"}),(0,a.jsx)(r.Z,{component:"img",alt:"auth",src:n||"/assets/illustrations/illustration_dashboard.png",sx:{maxWidth:720}}),(0,a.jsx)(s.Z,{direction:"row",spacing:2,children:h.map(t=>(0,a.jsx)(c.Z,{title:t.label,children:(0,a.jsx)(l.Z,{component:y.r,href:t.path,children:(0,a.jsx)(r.Z,{component:"img",alt:t.label,src:t.icon,sx:{width:32,height:32,...g!==t.id&&{filter:"grayscale(100%)"}}})})},t.label))})]});return(0,a.jsxs)(s.Z,{component:"main",direction:"row",sx:{minHeight:"100vh"},children:[k,b&&w,j]})}},5669:function(t,i,n){"use strict";n.d(i,{r:function(){return s}});var a=n(9268),e=n(86006),o=n(35846),r=n.n(o);let l=(0,e.forwardRef)((t,i)=>{let{...n}=t;return(0,a.jsx)(r(),{ref:i,...n})});var s=l},74373:function(t,i,n){"use strict";n.d(i,{UO:function(){return a.useParams},jD:function(){return a.usePathname},tv:function(){return a.useRouter},lr:function(){return a.useSearchParams}}),n(58583);var a=n(56008)},58583:function(t,i,n){"use strict";n.d(i,{X:function(){return e}});var a=n(56008);function e(t){let i=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=(0,a.usePathname)(),e=t.startsWith("#"),o="/"===t?"/":"".concat(t,"/"),r=!e&&n===o,l=!e&&n.includes(o);return i?l:r}},42933:function(t,i,n){"use strict";n.d(i,{D9:function(){return c},Ls:function(){return u},O1:function(){return y},XK:function(){return p},uS:function(){return s},v3:function(){return d}});var a=n(23343),e=n(69515),o=n(90182),r=n(67490),l=n(46017);let s=t=>{let{theme:i,bgcolor:n,dropdown:a}=t;return{...u({blur:20,opacity:.9,color:i.palette.background.paper,...!!n&&{color:n}}),backgroundImage:"url(/assets/cyan-blur.png), url(/assets/red-blur.png)",backgroundRepeat:"no-repeat, no-repeat",backgroundPosition:"top right, left bottom",backgroundSize:"50%, 50%",...a&&{padding:i.spacing(.5),boxShadow:i.customShadows.dropdown,borderRadius:1.25*i.shape.borderRadius}}},c=t=>({...t.typography.body2,padding:t.spacing(.75,1),borderRadius:.75*t.shape.borderRadius,"&:not(:last-of-type)":{marginBottom:4},["&.".concat(r.Z.selected)]:{fontWeight:t.typography.fontWeightSemiBold,backgroundColor:t.palette.action.selected,"&:hover":{backgroundColor:t.palette.action.hover}},["& .".concat(o.Z.root)]:{padding:t.spacing(.5),marginLeft:t.spacing(-.5),marginRight:t.spacing(.5)},["&.".concat(l.Z.option,'[aria-selected="true"]')]:{backgroundColor:t.palette.action.selected,"&:hover":{backgroundColor:t.palette.action.hover}},["&+.".concat(e.Z.root)]:{margin:t.spacing(.5,0)}});function u(t){let i=(null==t?void 0:t.color)||"#000000",n=(null==t?void 0:t.blur)||6,e=(null==t?void 0:t.opacity)||.8,o=null==t?void 0:t.imgUrl;return o?{position:"relative",backgroundImage:"url(".concat(o,")"),"&:before":{position:"absolute",top:0,left:0,zIndex:9,content:'""',width:"100%",height:"100%",backdropFilter:"blur(".concat(n,"px)"),WebkitBackdropFilter:"blur(".concat(n,"px)"),backgroundColor:(0,a.Fq)(i,e)}}:{backdropFilter:"blur(".concat(n,"px)"),WebkitBackdropFilter:"blur(".concat(n,"px)"),backgroundColor:(0,a.Fq)(i,e)}}function d(t){let i=(null==t?void 0:t.direction)||"to bottom",n=null==t?void 0:t.startColor,a=null==t?void 0:t.endColor,e=null==t?void 0:t.imgUrl,o=null==t?void 0:t.color;return e?{background:"linear-gradient(".concat(i,", ").concat(n||o,", ").concat(a||o,"), url(").concat(e,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}:{background:"linear-gradient(".concat(i,", ").concat(n,", ").concat(a,")")}}function p(t){return{background:"-webkit-linear-gradient(".concat(t,")"),WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}let y={x:{msOverflowStyle:"none",scrollbarWidth:"none",overflowX:"scroll","&::-webkit-scrollbar":{display:"none"}},y:{msOverflowStyle:"none",scrollbarWidth:"none",overflowY:"scroll","&::-webkit-scrollbar":{display:"none"}}}}},function(t){t.O(0,[1278,2929,5846,5597,5011,9744,655,6446,7950,1935,2667,6488,1744],function(){return t(t.s=53158)}),_N_E=t.O()}]);