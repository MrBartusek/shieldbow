import{_ as i,r as l,o as c,c as r,a as e,b as n,w as s,d,e as t}from"./app.ef83c763.js";const h={},p=d(`<h2 id="team-class" tabindex="-1"><a class="header-anchor" href="#team-class" aria-hidden="true">#</a> Team class</h2><p>A representation of a team in a match.</p><p><strong>Signature:</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">class</span> <span class="token class-name">Team</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> Constructor</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">new</span> <span class="token class-name">Team</span> <span class="token punctuation">(</span>client<span class="token operator">:</span> Client<span class="token punctuation">,</span> data<span class="token operator">:</span> TeamData<span class="token punctuation">,</span> participants<span class="token operator">:</span> ParticipantData<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Constructs a new instance of the <code>Team</code> class.</p><p><strong>Parameters:</strong></p>`,9),_=e("thead",null,[e("tr",null,[e("th",null,"Parameter"),e("th",null,"Type"),e("th",null,"Description")])],-1),u=e("td",null,"client",-1),m=t("Client"),b=e("td",null,null,-1),f=e("td",null,"data",-1),k=t("TeamData"),v=e("td",null,null,-1),g=e("td",null,"participants",-1),T=t("ParticipantData"),x=t("[]"),y=e("td",null,null,-1),w=e("hr",null,null,-1),D=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),C=e("h4",{id:"bans",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bans","aria-hidden":"true"},"#"),t(" bans")],-1),j=e("p",null,"The champions banned by the team.",-1),P=e("strong",null,"Type",-1),B=t(": "),N=t("ChampionBan"),S=t("[]"),L=e("hr",null,null,-1),O=e("h4",{id:"id",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#id","aria-hidden":"true"},"#"),t(" id")],-1),R=e("p",null,"The ID of the team.",-1),V=e("strong",null,"Type",-1),E=t(": "),I={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"},W=t("Number"),z=e("hr",null,null,-1),G=e("h4",{id:"objectives",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#objectives","aria-hidden":"true"},"#"),t(" objectives")],-1),J=e("p",null,"The objectives secured by the team.",-1),U=e("strong",null,"Type",-1),A=t(": "),q=t("TeamObjectivesData"),F=e("hr",null,null,-1),H=e("h4",{id:"participants",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#participants","aria-hidden":"true"},"#"),t(" participants")],-1),K=e("p",null,"The participants in the team.",-1),M=e("strong",null,"Type",-1),Q=t(": "),X=t("Participant"),Y=t("[]"),Z=e("hr",null,null,-1),$=e("h4",{id:"win",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#win","aria-hidden":"true"},"#"),t(" win")],-1),ee=e("p",null,"Whether the team won the match.",-1),te=e("strong",null,"Type",-1),ne=t(": "),ae={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"},se=t("Boolean"),oe=e("hr",null,null,-1);function le(ie,ce){const a=l("RouterLink"),o=l("ExternalLinkIcon");return c(),r("div",null,[p,e("table",null,[_,e("tbody",null,[e("tr",null,[u,e("td",null,[n(a,{to:"/api/Client.html"},{default:s(()=>[m]),_:1})]),b]),e("tr",null,[f,e("td",null,[n(a,{to:"/api/TeamData.html"},{default:s(()=>[k]),_:1})]),v]),e("tr",null,[g,e("td",null,[n(a,{to:"/api/ParticipantData.html"},{default:s(()=>[T]),_:1}),x]),y])])]),w,D,C,j,e("p",null,[P,B,n(a,{to:"/api/ChampionBan.html"},{default:s(()=>[N]),_:1}),S]),L,O,R,e("p",null,[V,E,e("a",I,[W,n(o)])]),z,G,J,e("p",null,[U,A,n(a,{to:"/api/TeamObjectivesData.html"},{default:s(()=>[q]),_:1})]),F,H,K,e("p",null,[M,Q,n(a,{to:"/api/Participant.html"},{default:s(()=>[X]),_:1}),Y]),Z,$,ee,e("p",null,[te,ne,e("a",ae,[se,n(o)])]),oe])}var de=i(h,[["render",le],["__file","Team.html.vue"]]);export{de as default};
