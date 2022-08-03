import{_ as e,r as o,o as l,c as p,a as n,b as t,d as c,e as a}from"./app.ef83c763.js";const r={},i=c(`<h2 id="performmath-calculation-effects-datavalue-maxrank-options-function" tabindex="-1"><a class="header-anchor" href="#performmath-calculation-effects-datavalue-maxrank-options-function" aria-hidden="true">#</a> performMath(calculation, effects, datavalue, maxRank, options) function</h2><p>A function that takes in calculations and performs the necessary operations to generate appropriate tooltips.</p><p><strong>Signature:</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">performMath</span><span class="token punctuation">(</span>calculation<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
    __type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> effects<span class="token operator">:</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> datavalue<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> maxRank<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> options<span class="token operator">:</span> <span class="token punctuation">{</span>
    percent<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3>`,5),u=n("thead",null,[n("tr",null,[n("th",null,"Parameter"),n("th",null,"Type"),n("th",null,"Description")])],-1),d=n("tr",null,[n("td",null,"calculation"),n("td",null,"{ [key: string]: any; __type: string; }"),n("td",null,"The calculations.")],-1),k=n("tr",null,[n("td",null,"effects"),n("td",null,"{ value: number[]; }[]"),n("td",null,"The effect values.")],-1),h=n("tr",null,[n("td",null,"datavalue"),n("td",null,"{ [name: string]: number[]; }"),n("td",null,"The named data values.")],-1),m=n("td",null,"maxRank",-1),_={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"},b=a("Number"),v=n("td",null,"The max applicable spell rank.",-1),f=n("tr",null,[n("td",null,"options"),n("td",null,"{ percent: boolean; }"),n("td",null,"Additional spell math options.")],-1),g=n("strong",null,"Return type :",-1),x=a(),y={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},S=a("String"),N=n("hr",null,null,-1);function R(T,M){const s=o("ExternalLinkIcon");return l(),p("div",null,[i,n("table",null,[u,n("tbody",null,[d,k,h,n("tr",null,[m,n("td",null,[n("a",_,[b,t(s)])]),v]),f])]),n("p",null,[g,x,n("a",y,[S,t(s)])]),N])}var w=e(r,[["render",R],["__file","performMath.html.vue"]]);export{w as default};
