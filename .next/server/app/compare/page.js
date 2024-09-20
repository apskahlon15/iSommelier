(()=>{var e={};e.id=266,e.ids=[266],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},6180:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>d,routeModule:()=>h,tree:()=>c}),r(3256),r(9128),r(5866);var a=r(3191),s=r(8716),l=r(7922),o=r.n(l),i=r(5231),n={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>i[e]);r.d(t,n);let c=["",{children:["compare",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3256)),"C:\\Users\\arman\\Desktop\\CAPSTONE\\iSommelier\\app\\compare\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9128)),"C:\\Users\\arman\\Desktop\\CAPSTONE\\iSommelier\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\arman\\Desktop\\CAPSTONE\\iSommelier\\app\\compare\\page.js"],m="/compare/page",u={require:r,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/compare/page",pathname:"/compare",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5956:(e,t,r)=>{Promise.resolve().then(r.bind(r,123))},2409:(e,t,r)=>{Promise.resolve().then(r.bind(r,3012)),Promise.resolve().then(r.t.bind(r,9404,23))},6346:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},123:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var a=r(326),s=r(7577);let l=[{id:1,name:"Wine 1",description:"A rich Chardonnay with hints of citrus and apple.",image:"/white.webp",rating:4.5,volume:"750ml",alcohol:"13%",sugarContent:"2g/L",varietal:"Chardonnay",body:"Medium",sweetness:"Dry",flavourProfile:"Citrus, Apple",region:"Napa Valley"},{id:2,name:"Wine 2",description:"A crisp Sauvignon Blanc with notes of grass and lime.",image:"/red.webp",rating:4.2,volume:"750ml",alcohol:"12%",sugarContent:"3g/L",varietal:"Sauvignon Blanc",body:"Light",sweetness:"Off-dry",flavourProfile:"Grass, Lime",region:"Marlborough"},{id:3,name:"Wine 3",description:"A full-bodied Pinot Noir with berry and oak flavors.",image:"/wine3.webp",rating:4,volume:"750ml",alcohol:"14%",sugarContent:"4g/L",varietal:"Pinot Noir",body:"Full",sweetness:"Sweet",flavourProfile:"Berry, Oak",region:"Burgundy"},{id:4,name:"Wine 4",description:"A delicate Riesling with floral and peach notes.",image:"/wine4.webp",rating:4.3,volume:"750ml",alcohol:"11%",sugarContent:"8g/L",varietal:"Riesling",body:"Light",sweetness:"Sweet",flavourProfile:"Peach, Floral",region:"Mosel"},{id:5,name:"Wine 5",description:"A robust Cabernet Sauvignon with flavors of blackcurrant and tobacco.",image:"/wine5.webp",rating:4.6,volume:"750ml",alcohol:"15%",sugarContent:"1g/L",varietal:"Cabernet Sauvignon",body:"Full",sweetness:"Dry",flavourProfile:"Blackcurrant, Tobacco",region:"California"},{id:6,name:"Wine 6",description:"A smooth Merlot with cherry and chocolate notes.",image:"/wine6.webp",rating:4.4,volume:"750ml",alcohol:"13.5%",sugarContent:"2.5g/L",varietal:"Merlot",body:"Medium",sweetness:"Dry",flavourProfile:"Cherry, Chocolate",region:"Bordeaux"},{id:7,name:"Wine 7",description:"An elegant Champagne with notes of apple and brioche.",image:"/wine7.webp",rating:4.7,volume:"750ml",alcohol:"12%",sugarContent:"6g/L",varietal:"Champagne",body:"Light",sweetness:"Brut",flavourProfile:"Apple, Brioche",region:"Champagne"},{id:8,name:"Wine 8",description:"A complex Shiraz with spicy and smoky undertones.",image:"/wine8.webp",rating:4.3,volume:"750ml",alcohol:"14.5%",sugarContent:"3g/L",varietal:"Shiraz",body:"Full",sweetness:"Dry",flavourProfile:"Spicy, Smoky",region:"Barossa Valley"}],o=()=>{let[e,t]=(0,s.useState)([]),[r,o]=(0,s.useState)(!1),i=r=>{e.includes(r)?t(e.filter(e=>e!==r)):t([...e,r])},n=()=>{t([]),o(!1)};return(0,a.jsxs)("div",{className:"bg-white min-h-screen p-8",children:[!r&&a.jsx("h1",{className:"text-2xl text-center font-bold py-8",style:{color:"#03045e"},children:e.length<2?"Click on the wines to compare":"Select wines and click Compare"}),!r&&a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",children:l.map(t=>(0,a.jsxs)("div",{onClick:()=>i(t),className:`cursor-pointer p-4 border rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out ${e.includes(t)?"border-blue-500":"border-gray-300"}`,children:[a.jsx("h2",{className:"text-lg font-semibold text-black",children:t.name}),a.jsx("p",{className:"mt-2 text-black",children:t.description}),a.jsx("img",{src:t.image,alt:t.name,className:"w-48 h-auto mt-4"})]},t.id))}),e.length>1&&!r&&(0,a.jsxs)("div",{className:"mt-6 flex justify-center gap-6",children:[a.jsx("button",{onClick:()=>{e.length>1&&o(!0)},className:"px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-xl",children:"Compare"}),a.jsx("button",{onClick:n,className:"px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-xl",children:"Reset Selection"})]}),r&&(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[a.jsx("h2",{className:"text-xl text-center font-bold py-4",style:{color:"#03045e"},children:"Wine Comparison"}),a.jsx("div",{className:"flex justify-center w-full px-8 mb-4",children:e.map((t,r)=>(0,a.jsxs)("div",{className:`flex-grow flex flex-col items-center p-4 ${r!==e.length-1?"border-r border-gray-300":""}`,children:[a.jsx("img",{src:t.image,alt:t.name,className:"w-48 h-auto mt-4"}),a.jsx("h2",{className:"text-lg font-semibold text-black mt-4",children:t.name}),a.jsx("p",{className:"text-black mt-2",children:t.description})]},t.id))}),e.length>1&&a.jsx("div",{className:"w-full max-w-6xl mt-4",children:(()=>{if(0===e.length)return null;let t=["name","rating","volume","alcohol","sugarContent","varietal","body","sweetness","flavourProfile","region"];return a.jsx("div",{className:"w-full max-w-6xl mt-8",children:(0,a.jsxs)("div",{className:"flex flex-col",children:[a.jsx("div",{className:"flex border-b-2 border-gray-300",children:t.map(e=>a.jsx("div",{className:"flex-1 text-lg font-bold text-center py-2 border-r border-gray-300",style:{color:"#03045e"},children:e.replace(/([A-Z])/g," $1").replace(/^./,e=>e.toUpperCase())},e))}),a.jsx("div",{className:"flex flex-col",children:e.map(e=>a.jsx("div",{className:"flex border-b border-gray-300",children:t.map(t=>a.jsx("div",{className:"flex-1 text-lg font-bold text-center py-2",style:{color:"black"},children:e[t]||"N/A"},t))},e.id))})]})})})()}),a.jsx("button",{onClick:n,className:"mt-6 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-xl",children:"Reset Comparison"})]})]})}},3012:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var a=r(326),s=r(7577),l=r(5047),o=r(6226);let i=()=>{let[e,t]=(0,s.useState)(""),r=(0,l.useRouter)(),i=e=>{r.push(e)};return a.jsx("nav",{className:"p-6 shadow-lg",style:{backgroundColor:"#03045e"},children:(0,a.jsxs)("div",{className:"container mx-auto flex items-center justify-between",children:[a.jsx("div",{className:"flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-105",children:a.jsx(o.default,{src:"/iSomillier-logo.png",alt:"iSommelier Logo",width:110,height:110})}),a.jsx("div",{className:"flex-grow flex justify-center",children:a.jsx("div",{className:"relative w-full max-w-lg",children:(0,a.jsxs)("form",{onSubmit:t=>{t.preventDefault(),console.log("Search Query:",e)},className:"relative flex items-center",children:[a.jsx("input",{type:"text",className:"w-full h-12 p-4 pr-16 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-lg text-black transition-transform duration-300 ease-in-out hover:shadow-xl",placeholder:"Search for wines, regions, or varietals...",value:e,onChange:e=>t(e.target.value)}),a.jsx("button",{type:"submit",className:"absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors duration-300 ease-in-out",children:"Search"})]})})}),a.jsx("div",{className:"flex items-center space-x-8",children:(0,a.jsxs)("ul",{className:"flex space-x-8 text-lg font-semibold",children:[a.jsx("li",{className:"relative group",children:(0,a.jsxs)("button",{onClick:()=>i("/"),className:"text-gray-200 flex items-center hover:text-yellow-400",children:[a.jsx("span",{className:"relative",children:"Home"}),a.jsx("span",{className:"absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"})]})}),a.jsx("li",{className:"relative group",children:(0,a.jsxs)("button",{onClick:()=>i("/about"),className:"text-gray-200 flex items-center hover:text-yellow-400",children:[a.jsx("span",{className:"relative",children:"About"}),a.jsx("span",{className:"absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"})]})}),a.jsx("li",{className:"relative group",children:(0,a.jsxs)("button",{onClick:()=>i("/wishlist"),className:"text-gray-200 flex items-center hover:text-yellow-400",children:[a.jsx("span",{className:"relative",children:"Wishlist"}),a.jsx("span",{className:"absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"})]})}),a.jsx("li",{className:"relative group",children:(0,a.jsxs)("button",{onClick:()=>i("/feedback"),className:"text-gray-200 flex items-center hover:text-yellow-400",children:[a.jsx("span",{className:"relative",children:"Feedback"}),a.jsx("span",{className:"absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"})]})}),a.jsx("li",{className:"relative group",children:(0,a.jsxs)("button",{onClick:()=>i("/signup"),className:"text-gray-200 flex items-center hover:text-yellow-400",children:[a.jsx("span",{className:"relative",children:"Sign Up"}),a.jsx("span",{className:"absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"})]})})]})})]})})}},3256:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});let a=(0,r(8570).createProxy)(String.raw`C:\Users\arman\Desktop\CAPSTONE\iSommelier\app\compare\page.js#default`)},9128:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n,metadata:()=>i});var a=r(9510);let s=(0,r(8570).createProxy)(String.raw`C:\Users\arman\Desktop\CAPSTONE\iSommelier\app\src\components\Navbar.js#default`);var l=r(7371);let o=()=>a.jsx("footer",{className:"w-full py-6 text-center bg-[#03045e] text-white",children:(0,a.jsxs)("div",{className:"max-w-screen-lg mx-auto px-4",children:[(0,a.jsxs)("p",{className:"text-sm md:text-base font-light",children:["\xa9 ",new Date().getFullYear()," ",a.jsx("span",{className:"font-semibold",children:"iSommelier"}),". All rights reserved."]}),(0,a.jsxs)("div",{className:"mt-4 flex justify-center gap-6",children:[a.jsx(l.default,{href:"/about",className:"text-sm md:text-base hover:underline",children:"About Us"}),a.jsx(l.default,{href:"/privacy",className:"text-sm md:text-base hover:underline",children:"Privacy Policy"}),a.jsx(l.default,{href:"/terms",className:"text-sm md:text-base hover:underline",children:"Terms of Service"})]})]})});r(7272);let i={title:"iSommelier",description:"Generated by create next app"};function n({children:e}){return a.jsx("html",{lang:"en",children:a.jsx("body",{children:(0,a.jsxs)("div",{className:"min-h-screen flex flex-col",children:[a.jsx(s,{}),a.jsx("main",{className:"flex-grow",children:e}),a.jsx(o,{})]})})})}},7481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(6621);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[948,347,621],()=>r(6180));module.exports=a})();