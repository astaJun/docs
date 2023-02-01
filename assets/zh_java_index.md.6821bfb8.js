import{r as o,o as p,c,a as s,b as a,d as l,u as i,e,V as r}from"./app.e1a6c131.js";const y=e('<h1 id="markdown-预览" tabindex="-1">Markdown 预览 <a class="header-anchor" href="#markdown-预览" aria-hidden="true">#</a></h1><h2 id="link" tabindex="-1">Link <a class="header-anchor" href="#link" aria-hidden="true">#</a></h2><p><a href="/test/">Home</a></p><p><a href="/test/foo/">foo</a></p><h2 id="badge" tabindex="-1">Badge <a class="header-anchor" href="#badge" aria-hidden="true">#</a></h2>',5),d={id:"title",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#title","aria-hidden":"true"},"#",-1),F={id:"title-1",tabindex:"-1"},h=s("a",{class:"header-anchor",href:"#title-1","aria-hidden":"true"},"#",-1),g={id:"title-2",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#title-2","aria-hidden":"true"},"#",-1),C={id:"title-3",tabindex:"-1"},m=s("a",{class:"header-anchor",href:"#title-3","aria-hidden":"true"},"#",-1),A=s("h2",{id:"团队",tabindex:"-1"},[a("团队 "),s("a",{class:"header-anchor",href:"#团队","aria-hidden":"true"},"#")],-1),_=s("h1",{id:"our-team",tabindex:"-1"},[a("Our Team "),s("a",{class:"header-anchor",href:"#our-team","aria-hidden":"true"},"#")],-1),b=s("p",null,"Say hello to our awesome team.",-1),f=e(`<h2 id="表格" tabindex="-1">表格 <a class="header-anchor" href="#表格" aria-hidden="true">#</a></h2><table><thead><tr><th>Tables</th><th style="text-align:center;">Are</th><th style="text-align:right;">Cool</th></tr></thead><tbody><tr><td>col 3 is</td><td style="text-align:center;">right-aligned</td><td style="text-align:right;">$1600</td></tr><tr><td>col 2 is</td><td style="text-align:center;">centered</td><td style="text-align:right;">$12</td></tr><tr><td>zebra stripes</td><td style="text-align:center;">are neat</td><td style="text-align:right;">$1</td></tr></tbody></table><h2 id="emoji" tabindex="-1">emoji <a class="header-anchor" href="#emoji" aria-hidden="true">#</a></h2><p>🎉 💯</p><h2 id="提醒" tabindex="-1">提醒 <a class="header-anchor" href="#提醒" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning.</p></div><details class="details custom-block"><summary>Details</summary><p>This is a details block.</p></details><div class="danger custom-block"><p class="custom-block-title">STOP</p><p>Danger zone, do not proceed</p></div><details class="details custom-block"><summary>Click me to view the code</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, VitePress!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div></details><h2 id="代码块" tabindex="-1">代码块 <a class="header-anchor" href="#代码块" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">MyComponent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">todo in todos</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">todo.id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {{ todo.text }}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">      msg</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Highlighted!</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line highlighted"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Highlighted</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">      msg</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Highlighted!</span></span>
<span class="line"><span style="color:#C3E88D;">      This line isn&#39;t highlighted,</span></span>
<span class="line highlighted"><span style="color:#C3E88D;">      but this and the next 2 are.</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#F07178;">      motd</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VitePress is awesome</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#F07178;">      lorem</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ipsum</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      msg</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Focused!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// [!code  focus]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      msg</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Removed</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// [!code  --]</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">msg</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Added</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// [!code  ++]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,19),j=JSON.parse('{"title":"Markdown 预览","description":"","frontmatter":{},"headers":[{"level":2,"title":"Link","slug":"link","link":"#link","children":[]},{"level":2,"title":"Badge","slug":"badge","link":"#badge","children":[{"level":3,"title":"Title","slug":"title","link":"#title","children":[]},{"level":3,"title":"Title","slug":"title-1","link":"#title-1","children":[]},{"level":3,"title":"Title","slug":"title-2","link":"#title-2","children":[]},{"level":3,"title":"Title","slug":"title-3","link":"#title-3","children":[]}]},{"level":2,"title":"团队","slug":"团队","link":"#团队","children":[]},{"level":2,"title":"表格","slug":"表格","link":"#表格","children":[]},{"level":2,"title":"emoji","slug":"emoji","link":"#emoji","children":[]},{"level":2,"title":"提醒","slug":"提醒","link":"#提醒","children":[]},{"level":2,"title":"代码块","slug":"代码块","link":"#代码块","children":[]}],"relativePath":"zh/java/index.md","lastUpdated":1675278215000}'),k={name:"zh/java/index.md"},w=Object.assign(k,{setup(v){const t=[{avatar:"https://www.github.com/yyx990803.png",name:"Evan You",title:"Creator",links:[{icon:"github",link:"https://github.com/yyx990803"},{icon:"twitter",link:"https://twitter.com/youyuxi"}]}];return(x,T)=>{const n=o("Badge");return p(),c("div",null,[y,s("h3",d,[a("Title "),l(n,{type:"info",text:"default"}),a(),D]),s("h3",F,[a("Title "),l(n,{type:"tip",text:"^1.9.0"}),a(),h]),s("h3",g,[a("Title "),l(n,{type:"warning",text:"beta"}),a(),u]),s("h3",C,[a("Title "),l(n,{type:"danger",text:"caution"}),a(),m]),A,_,b,l(i(r),{size:"small",members:t}),f])}}});export{j as __pageData,w as default};
