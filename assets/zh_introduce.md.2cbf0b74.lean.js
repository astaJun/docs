import{_ as h,o as d,c,r as x,B as v,S as C,M as y,C as k,a as t,w as e,b as T,d as o,e as l,F as S,f as O,g as q,h as A}from"./app.2a1337b3.js";import"./chunks/index.4ed993c7.js";const E={},N={className:"text-3xl font-bold text-red-500 underline"};function B(s,i){return d(),c("h4",N," Hello world! ")}const V=h(E,[["render",B]]);const z={setup(){const s=x(!1);return{visible:s,handleClick:()=>{s.value=!0},handleOk:()=>{s.value=!1},handleCancel:()=>{s.value=!1},images:["https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp","https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp","https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp"],handleChange:n=>{console.log(n)}}}},U=JSON.parse('{"title":"介绍","description":"","frontmatter":{},"headers":[{"level":2,"title":"物联网开发EMQX","slug":"物联网开发emqx","link":"#物联网开发emqx","children":[]},{"level":2,"title":"vitepress示例仓库：","slug":"vitepress示例仓库","link":"#vitepress示例仓库","children":[]},{"level":2,"title":"集成 AcroDesign","slug":"集成-acrodesign","link":"#集成-acrodesign","children":[]},{"level":2,"title":"集成 Tailwind CSS","slug":"集成-tailwind-css","link":"#集成-tailwind-css","children":[]}],"relativePath":"zh/introduce.md","lastUpdated":1675470297000}'),D=T("",8),M=o("div",null,"You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.",-1),P=["src"],I=o("h2",{id:"集成-tailwind-css",tabindex:"-1"},[l("集成 Tailwind CSS "),o("a",{class:"header-anchor",href:"#集成-tailwind-css","aria-hidden":"true"},"#")],-1);function $(s,i,_,a,p,u){const n=v,m=C,g=y,b=A,f=k,w=V;return d(),c("div",null,[D,t(m,null,{default:e(()=>[t(n,{type:"primary"},{default:e(()=>[l("Primary")]),_:1}),t(n,null,{default:e(()=>[l("Secondary")]),_:1}),t(n,{type:"dashed"},{default:e(()=>[l("Dashed")]),_:1}),t(n,{type:"outline"},{default:e(()=>[l("Outline")]),_:1}),t(n,{type:"text"},{default:e(()=>[l("Text")]),_:1})]),_:1}),t(n,{onClick:a.handleClick},{default:e(()=>[l("Open Modal")]),_:1},8,["onClick"]),t(g,{visible:a.visible,"onUpdate:visible":i[0]||(i[0]=r=>a.visible=r),onOk:a.handleOk,onCancel:a.handleCancel},{title:e(()=>[l(" Title ")]),default:e(()=>[M]),_:1},8,["visible","onOk","onCancel"]),t(f,{style:{height:"240px"},"default-current":2,onChange:a.handleChange},{default:e(()=>[(d(!0),c(S,null,O(a.images,r=>(d(),q(b,null,{default:e(()=>[o("img",{src:r,style:{width:"100%"}},null,8,P)]),_:2},1024))),256))]),_:1},8,["onChange"]),I,t(w)])}const X=h(z,[["render",$]]);export{U as __pageData,X as default};