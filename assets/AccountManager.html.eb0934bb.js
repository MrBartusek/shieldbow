import{_ as r,r as l,o as i,c as p,a as t,b as n,w as a,d as c,e}from"./app.ef83c763.js";const d={},h=c(`<h2 id="accountmanager-class" tabindex="-1"><a class="header-anchor" href="#accountmanager-class" aria-hidden="true">#</a> AccountManager class</h2><p>An account manager - to fetch and manage all the RIOT accounts.</p><p><strong>Signature:</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">class</span> <span class="token class-name">AccountManager</span> <span class="token keyword">implements</span> <span class="token class-name">BaseManager<span class="token operator">&lt;</span>Account<span class="token operator">&gt;</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Implements: BaseManager&lt;Account&gt;</p>`,5),u=t("strong",null,"References:",-1),_=e(),g=e("BaseManager"),m=e(", "),b=e("Account"),f=c(`<hr><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> Constructor</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">new</span> <span class="token class-name">AccountManager</span> <span class="token punctuation">(</span>client<span class="token operator">:</span> Client<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Constructs a new instance of the <code>AccountManager</code> class.</p><p><strong>Parameters:</strong></p>`,5),k=t("thead",null,[t("tr",null,[t("th",null,"Parameter"),t("th",null,"Type"),t("th",null,"Description")])],-1),v=t("td",null,"client",-1),y=e("Client"),S=t("td",null,"The client this account manager belongs to.",-1),T=t("hr",null,null,-1),A=t("h3",{id:"properties",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),e(" Properties")],-1),x=t("h4",{id:"cache",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#cache","aria-hidden":"true"},"#"),e(" cache")],-1),O=t("p",null,"The accounts cached in the memory.",-1),R=t("strong",null,"Type",-1),P=e(": "),C={href:"https://discord.js.org/#/docs/collection/stable/class/Collection",target:"_blank",rel:"noopener noreferrer"},I=e("Collection"),M=e(" < "),U={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},w=e("String"),B=e(", "),F=e("Account"),j=e(" >"),z=t("hr",null,null,-1),G=t("h4",{id:"client",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#client","aria-hidden":"true"},"#"),e(" client")],-1),J=t("p",null,"The client this accounts manager belongs to.",-1),N=t("strong",null,"Type",-1),W=e(": "),D=e("Client"),L=c(`<hr><h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h3><h4 id="fetch-id-options" tabindex="-1"><a class="header-anchor" href="#fetch-id-options" aria-hidden="true">#</a> .fetch (id, options)</h4><p>Fetch a RIOT account by its unique PUUID.</p><p><strong>Signature:</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">fetch</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> FetchOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Account<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>`,7),V=t("thead",null,[t("tr",null,[t("th",null,"Parameter"),t("th",null,"Type"),t("th",null,"Description")])],-1),E=t("td",null,"id",-1),q={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},H=e("String"),K=t("td",null,"The PUUID of the RIOT account.",-1),Q=t("td",null,"options",-1),X=e("FetchOptions"),Y=t("td",null,"The basic fetching options.",-1),Z=t("strong",null,"Return type",-1),$=e(": "),tt={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"},et=e("Promise"),nt=e(" < "),st=e("Account"),at=e(" >"),ot=c(`<hr><h4 id="fetchbynameandtag-name-tag-options" tabindex="-1"><a class="header-anchor" href="#fetchbynameandtag-name-tag-options" aria-hidden="true">#</a> .fetchByNameAndTag (name, tag, options)</h4><p>Fetch a RIOT account by its name and tag.</p><p><strong>Signature:</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">fetchByNameAndTag</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> FetchOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Account<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p>`,6),ct=t("thead",null,[t("tr",null,[t("th",null,"Parameter"),t("th",null,"Type"),t("th",null,"Description")])],-1),lt=t("td",null,"name",-1),rt={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},it=e("String"),pt=t("td",null,"The name of this RIOT account.",-1),dt=t("td",null,"tag",-1),ht={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},ut=e("String"),_t=t("td",null,"The tag of this RIOT account.",-1),gt=t("td",null,"options",-1),mt=e("FetchOptions"),bt=t("td",null,"The basic fetching options.",-1),ft=t("strong",null,"Return type",-1),kt=e(": "),vt={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"},yt=e("Promise"),St=e(" < "),Tt=e("Account"),At=e(" >"),xt=t("hr",null,null,-1);function Ot(Rt,Pt){const s=l("RouterLink"),o=l("ExternalLinkIcon");return i(),p("div",null,[h,t("p",null,[u,_,n(s,{to:"/api/BaseManager.html"},{default:a(()=>[g]),_:1}),m,n(s,{to:"/api/Account.html"},{default:a(()=>[b]),_:1})]),f,t("table",null,[k,t("tbody",null,[t("tr",null,[v,t("td",null,[n(s,{to:"/api/Client.html"},{default:a(()=>[y]),_:1})]),S])])]),T,A,x,O,t("p",null,[R,P,t("a",C,[I,n(o)]),M,t("a",U,[w,n(o)]),B,n(s,{to:"/api/Account.html"},{default:a(()=>[F]),_:1}),j]),z,G,J,t("p",null,[N,W,n(s,{to:"/api/Client.html"},{default:a(()=>[D]),_:1})]),L,t("table",null,[V,t("tbody",null,[t("tr",null,[E,t("td",null,[t("a",q,[H,n(o)])]),K]),t("tr",null,[Q,t("td",null,[n(s,{to:"/api/FetchOptions.html"},{default:a(()=>[X]),_:1})]),Y])])]),t("p",null,[Z,$,t("a",tt,[et,n(o)]),nt,n(s,{to:"/api/Account.html"},{default:a(()=>[st]),_:1}),at]),ot,t("table",null,[ct,t("tbody",null,[t("tr",null,[lt,t("td",null,[t("a",rt,[it,n(o)])]),pt]),t("tr",null,[dt,t("td",null,[t("a",ht,[ut,n(o)])]),_t]),t("tr",null,[gt,t("td",null,[n(s,{to:"/api/FetchOptions.html"},{default:a(()=>[mt]),_:1})]),bt])])]),t("p",null,[ft,kt,t("a",vt,[yt,n(o)]),St,n(s,{to:"/api/Account.html"},{default:a(()=>[Tt]),_:1}),At]),xt])}var It=r(d,[["render",Ot],["__file","AccountManager.html.vue"]]);export{It as default};
