import{r as s,j as e}from"./index-DejzgYAY.js";import{c}from"./clsx-B-dksMZM.js";import{g as o,u as x}from"./index-B-UIf8hc.js";import{S as m}from"./ScrollTrigger-9BXoZkrM.js";o.registerPlugin(m);const u=({H1:l,H2:n,color:t="black"})=>{const r=s.useRef(null),a=s.useRef(null);return x(()=>{o.fromTo(a.current,{rotationZ:"-5deg",rotationX:"-80deg",rotateY:"-100deg",translateX:"-40%",translateY:"100%",scale:1.1},{rotationZ:"0deg",rotationX:"0deg",rotateY:"0deg",translateX:"0%",translateY:"0%",scale:1,opacity:1,ease:"power2.out",duration:1,scrollTrigger:{trigger:r.current,start:"top bottom",end:"top 10%",scrub:1}})},[]),e.jsxs("header",{ref:r,className:c("center flex-col gap-y-5 text-wrap px-5 py-24 uppercase max-md:py-16",{"text-black":t==="black","text-blue-75":t==="blue"}),children:[e.jsx("h1",{className:"font-general text-xs font-semibold max-lg:text-[0.6rem] max-md:text-[0.5rem]",children:l}),e.jsx("h2",{ref:a,className:"special-font rotate- text-center font-zentry text-[7rem] leading-[0.9] max-lg:text-6xl max-md:text-5xl",children:n})]})};export{u as S};