import{l as u}from"./lodash-CYUvmsfZ.js";import{r as x}from"./index-BhXzJfuy.js";const m=()=>{const o=u.debounce(t=>{const e=t.currentTarget;if(!e)return;const{left:r,top:n,width:s,height:c}=e.getBoundingClientRect(),a=t.clientX-r,l=t.clientY-n,i=a/s,p=l/c,y=(i-.5)*25,d=(p-.5)*-25;e.style.setProperty("--rotate-y",`${y}deg`),e.style.setProperty("--rotate-x",`${d}deg`)},16,{maxWait:16});return x.useCallback(t=>o({...t}),[o])};export{m as C};
