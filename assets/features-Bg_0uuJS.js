import{r as n,j as e}from"./index-CgNFxdeJ.js";import{c as u}from"./clsx-B-dksMZM.js";import{C as g}from"./cardHoverEffect-0vKn-jSr.js";import{g as d,u as h}from"./index-BkvKIs-d.js";import{S as c}from"./send-BLDtWctH.js";import{S as f}from"./ScrollTrigger-9BXoZkrM.js";import"./vendor-_uqhELNW.js";import"./lodash-D0heotOm.js";import"./createLucideIcon-C3JAXeVw.js";d.registerPlugin(f);const b=({title:a,description:s,video:i,box:t})=>{const r=n.useRef(null),o=n.useRef(null),m=g(),x=()=>{var l;return(l=r.current)==null?void 0:l.play()},p=()=>r.current&&(r.current.pause(),r.current.currentTime=0);return h(()=>{d.fromTo(o.current,{rotationX:"-80deg",opacity:0},{opacity:1,rotationX:"0deg",duration:.9,scrollTrigger:{trigger:o.current,start:"-240% bottom",end:"bottom top",toggleActions:"restart none none none"}})},[]),e.jsx("div",{ref:o,className:`group cursor-grab ${u(t,{"col-start-1 col-end-3 row-start-1 row-end-4":t===1,"col-start-2 col-end-3 row-start-4 row-end-6":t===2,"col-start-1 col-end-2 row-start-4 row-end-8":t===3,"col-start-2 col-end-3 row-start-6 row-end-8":t===4,"col-start-2 col-end-3 row-start-8 row-end-10":t===5,"card-violet col-start-1 col-end-2 row-start-8 row-end-10":t===6})} `,onMouseMove:m,onMouseEnter:x,onMouseLeave:p,children:e.jsxs("div",{className:"relative size-full overflow-hidden rounded-lg border-[1px] border-white border-opacity-20 transition-transform ease-linear will-change-transform [perspective:1000px] group-hover:[transform:rotateX(var(--rotate-x))_rotateY(var(--rotate-y))_scale(0.95)]",children:[i&&e.jsx("video",{preload:"auto",muted:!0,loop:!0,playsInline:!0,draggable:"false",controls:!1,disablePictureInPicture:!0,className:"video-player size-full scale-125",ref:r,children:e.jsx("source",{src:i,type:"video/mp4"})}),e.jsxs("div",{className:"absolute left-4 top-4 w-72 max-w-64 max-md:max-w-40",children:[a,s]}),e.jsxs("div",{className:"center absolute bottom-4 left-4 gap-2 max-md:flex-col",children:[t!==6&&t!==5&&e.jsxs("button",{className:"card-button text-gray-300",children:[e.jsx(c,{size:12,className:"max-md:size-3",fill:"#d1d5db"})," COMING SOON"]}),t===2&&e.jsxs("button",{className:"card-button text-yellow-300",children:["LAUNCH SITE",e.jsx(c,{size:12,className:"max-md:size-3",fill:"#edff66"})]})]}),t===6&&e.jsx("img",{src:"public/favicon.ico",className:"absolute bottom-4 right-4 size-6 md:size-8 lg:size-12",alt:"logo"})]})})},z=()=>{const a=[{title:e.jsxs("h2",{className:"bento-title special-font",children:["RADIA",e.jsx("span",{children:"N"}),"T"]}),description:e.jsx("p",{className:"pt-2 text-sm text-gray-300 max-md:text-xs",children:"A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."}),video:"public/videos/feature-1.mp4",box:1},{title:e.jsxs("h2",{className:"bento-title special-font",children:["N",e.jsx("span",{children:"E"}),"XUS"]}),description:e.jsx("p",{className:"pt-2 text-sm text-gray-300 max-md:text-xs",children:"A gamified social hub, adding a new dimension of play to your identity, Web3 engagement and social interaction"}),video:"public/videos/feature-3.mp4",box:2},{title:e.jsxs("h2",{className:"bento-title special-font",children:["ZIG",e.jsx("span",{children:"M"}),"A"]}),description:e.jsx("p",{className:"pt-2 text-sm text-gray-300 max-md:text-xs",children:"An anime and gaming-inspired NFT collection - the IP primed for expansion."}),video:"public/videos/feature-2.mp4",box:3},{title:e.jsxs("h2",{className:"bento-title special-font",children:["AZ",e.jsx("span",{children:"U"}),"L"]}),description:e.jsx("p",{className:"pt-2 text-sm text-gray-300 max-md:text-xs",children:"A cross-world AI Agent - elevating your gameplay to be more fun and productive."}),video:"public/videos/feature-4.mp4",box:4},{video:"public/videos/hero-1.mp4",box:5},{title:e.jsxs("h2",{className:"bento-title special-font text-black",children:["M",e.jsx("span",{children:"O"}),"RE",e.jsx("br",{}),"CO",e.jsx("span",{children:"M"}),"ING",e.jsx("br",{}),"S",e.jsx("span",{children:"O"}),"ON"]}),box:6}];return e.jsxs("section",{id:"features",className:"bg-black px-4 py-20 text-blue-75 lg:px-24 xl:px-40",children:[e.jsxs("header",{children:[e.jsx("h1",{className:"max-mg:text-base text-xl max-lg:text-lg",children:"Dive into the Zentry Universe"}),e.jsx("p",{className:"max-mg:text-sm max-w-[28rem] text-lg opacity-75 max-lg:text-base",children:"Immerse yourself in a rich and ever-expanding ecosystem where a vibrant array of products converge into an interconnected universe. Radiant"})]}),e.jsx("div",{className:"grid h-[80rem] grid-cols-2 grid-rows-9 gap-3 py-20 md:h-[85rem] md:gap-5 md:py-24 lg:h-[90rem] lg:py-32 xl:h-[100rem] xl:gap-10 xl:py-40 2xl:h-[125rem]",children:a.map(s=>e.jsx(b,{title:s.title,description:s.description,video:s.video,box:s.box},s.box))})]})};export{z as default};
