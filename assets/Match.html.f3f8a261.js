import{_ as l,r,o as h,c as i,a as e,b as n,w as a,d,e as t}from"./app.ef83c763.js";const c={},_=d(`<h2 id="match-class" tabindex="-1"><a class="header-anchor" href="#match-class" aria-hidden="true">#</a> Match class</h2><p>A representation of a league of legends match.</p><p><strong>Signature:</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">class</span> <span class="token class-name">Match</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> Constructor</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">new</span> <span class="token class-name">Match</span> <span class="token punctuation">(</span>client<span class="token operator">:</span> Client<span class="token punctuation">,</span> data<span class="token operator">:</span> MatchData<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Constructs a new instance of the <code>Match</code> class.</p><p><strong>Parameters:</strong></p>`,9),p=e("thead",null,[e("tr",null,[e("th",null,"Parameter"),e("th",null,"Type"),e("th",null,"Description")])],-1),u=e("td",null,"client",-1),m=t("Client"),f=e("td",null,"The client requesting the data.",-1),g=e("td",null,"data",-1),b=t("MatchData"),v=e("td",null,"The raw match data from the API.",-1),T=e("hr",null,null,-1),y=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),S=e("h4",{id:"createdtimestamp",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#createdtimestamp","aria-hidden":"true"},"#"),t(" createdTimestamp")],-1),k=e("p",null,"The timestamp of creation of the match (before summoners spawn on the rift).",-1),x=e("strong",null,"Type",-1),G=t(": "),w={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"},N=t("Number"),M=e("hr",null,null,-1),R=e("h4",{id:"duration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#duration","aria-hidden":"true"},"#"),t(" duration")],-1),j=e("p",null,"The duration of the match (in seconds).",-1),U=e("strong",null,"Type",-1),W=t(": "),z={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"},J=t("Number"),O=e("hr",null,null,-1),C=e("h4",{id:"endtimestamp",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#endtimestamp","aria-hidden":"true"},"#"),t(" endTimestamp")],-1),I=e("p",null,"The timestamp of the end of the match.",-1),D=e("strong",null,"Type",-1),q=t(": "),E={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"},V=t("Number"),L=e("hr",null,null,-1),P=e("h4",{id:"gameid",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gameid","aria-hidden":"true"},"#"),t(" gameId")],-1),A=e("p",null,"The ID of the game.",-1),B=e("strong",null,"Type",-1),Q=t(": "),F={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"},H=t("Number"),K=e("hr",null,null,-1),X=e("h4",{id:"gamemode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gamemode","aria-hidden":"true"},"#"),t(" gameMode")],-1),Y=e("p",null,"The game mode for the match.",-1),Z=e("strong",null,"Type",-1),$=t(": "),ee=t("GameMode"),te=e("hr",null,null,-1),ne=e("h4",{id:"gamename",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gamename","aria-hidden":"true"},"#"),t(" gameName")],-1),oe=e("p",null,"The name of the match.",-1),se=e("strong",null,"Type",-1),ae=t(": "),re={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},le=t("String"),he=e("hr",null,null,-1),ie=e("h4",{id:"gametype",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gametype","aria-hidden":"true"},"#"),t(" gameType")],-1),de=e("p",null,"The type of game.",-1),ce=e("strong",null,"Type",-1),_e=t(": "),pe=t("GameType"),ue=e("hr",null,null,-1),me=e("h4",{id:"gameversion",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gameversion","aria-hidden":"true"},"#"),t(" gameVersion")],-1),fe=e("p",null,"The version of the game.",-1),ge=e("strong",null,"Type",-1),be=t(": "),ve={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},Te=t("String"),ye=e("hr",null,null,-1),Se=e("h4",{id:"id",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#id","aria-hidden":"true"},"#"),t(" id")],-1),ke=e("p",null,"The match ID.",-1),xe=e("strong",null,"Type",-1),Ge=t(": "),we={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},Ne=t("String"),Me=e("hr",null,null,-1),Re=e("h4",{id:"map",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#map","aria-hidden":"true"},"#"),t(" map")],-1),je=e("p",null,"The map on which the match was played.",-1),Ue=e("strong",null,"Type",-1),We=t(": "),ze=t("GameMap"),Je=e("hr",null,null,-1),Oe=e("h4",{id:"platformid",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#platformid","aria-hidden":"true"},"#"),t(" platformId")],-1),Ce=e("p",null,"The ID of the platform on which the match was played.",-1),Ie=e("p",null,[t("Eg: "),e("code",null,"NA1"),t(" or "),e("code",null,"EUW1"),t(".")],-1),De=e("strong",null,"Type",-1),qe=t(": "),Ee={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},Ve=t("String"),Le=e("hr",null,null,-1),Pe=e("h4",{id:"queue",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#queue","aria-hidden":"true"},"#"),t(" queue")],-1),Ae=e("p",null,"The queue type of the match.",-1),Be=e("strong",null,"Type",-1),Qe=t(": "),Fe=t("Queue"),He=e("hr",null,null,-1),Ke=e("h4",{id:"starttimestamp",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#starttimestamp","aria-hidden":"true"},"#"),t(" startTimestamp")],-1),Xe=e("p",null,"The timestamp of the beginning of the match (when summoners spawn on the rift).",-1),Ye=e("strong",null,"Type",-1),Ze=t(": "),$e={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"},et=t("Number"),tt=e("hr",null,null,-1),nt=e("h4",{id:"teams",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#teams","aria-hidden":"true"},"#"),t(" teams")],-1),ot=e("p",null,"The 2 teams participating in the match.",-1),st=e("p",null,[t("They are mapped by their map sides ("),e("code",null,"blue"),t(" and "),e("code",null,"red"),t(").")],-1),at=e("strong",null,"Type",-1),rt=t(": "),lt={href:"https://discord.js.org/#/docs/collection/stable/class/Collection",target:"_blank",rel:"noopener noreferrer"},ht=t("Collection"),it=t(" < 'blue' | 'red', "),dt=t("Team"),ct=t(" >"),_t=e("hr",null,null,-1),pt=e("h4",{id:"tournamentcode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tournamentcode","aria-hidden":"true"},"#"),t(" tournamentCode")],-1),ut=e("p",null,"The tournament code of the match (if it is the part of a tournament).",-1),mt=e("strong",null,"Type",-1),ft=t(": "),gt={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},bt=t("String"),vt=e("hr",null,null,-1),Tt=e("h4",{id:"version",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#version","aria-hidden":"true"},"#"),t(" version")],-1),yt=e("p",null,"The data version of the match.",-1),St=e("strong",null,"Type",-1),kt=t(": "),xt={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},Gt=t("String"),wt=e("hr",null,null,-1);function Nt(Mt,Rt){const s=r("RouterLink"),o=r("ExternalLinkIcon");return h(),i("div",null,[_,e("table",null,[p,e("tbody",null,[e("tr",null,[u,e("td",null,[n(s,{to:"/api/Client.html"},{default:a(()=>[m]),_:1})]),f]),e("tr",null,[g,e("td",null,[n(s,{to:"/api/MatchData.html"},{default:a(()=>[b]),_:1})]),v])])]),T,y,S,k,e("p",null,[x,G,e("a",w,[N,n(o)])]),M,R,j,e("p",null,[U,W,e("a",z,[J,n(o)])]),O,C,I,e("p",null,[D,q,e("a",E,[V,n(o)])]),L,P,A,e("p",null,[B,Q,e("a",F,[H,n(o)])]),K,X,Y,e("p",null,[Z,$,n(s,{to:"/api/GameMode.html"},{default:a(()=>[ee]),_:1})]),te,ne,oe,e("p",null,[se,ae,e("a",re,[le,n(o)])]),he,ie,de,e("p",null,[ce,_e,n(s,{to:"/api/GameType.html"},{default:a(()=>[pe]),_:1})]),ue,me,fe,e("p",null,[ge,be,e("a",ve,[Te,n(o)])]),ye,Se,ke,e("p",null,[xe,Ge,e("a",we,[Ne,n(o)])]),Me,Re,je,e("p",null,[Ue,We,n(s,{to:"/api/GameMap.html"},{default:a(()=>[ze]),_:1})]),Je,Oe,Ce,Ie,e("p",null,[De,qe,e("a",Ee,[Ve,n(o)])]),Le,Pe,Ae,e("p",null,[Be,Qe,n(s,{to:"/api/Queue.html"},{default:a(()=>[Fe]),_:1})]),He,Ke,Xe,e("p",null,[Ye,Ze,e("a",$e,[et,n(o)])]),tt,nt,ot,st,e("p",null,[at,rt,e("a",lt,[ht,n(o)]),it,n(s,{to:"/api/Team.html"},{default:a(()=>[dt]),_:1}),ct]),_t,pt,ut,e("p",null,[mt,ft,e("a",gt,[bt,n(o)])]),vt,Tt,yt,e("p",null,[St,kt,e("a",xt,[Gt,n(o)])]),wt])}var Ut=l(c,[["render",Nt],["__file","Match.html.vue"]]);export{Ut as default};
