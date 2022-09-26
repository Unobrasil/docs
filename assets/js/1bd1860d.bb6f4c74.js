"use strict";(self.webpackChunk_betterdiscord_docs=self.webpackChunk_betterdiscord_docs||[]).push([[4470],{5162:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(7294),n=a(6010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.Z)(i,r),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(7462),n=a(7294),i=a(6010),r=a(2389),o=a(7392),s=a(7094),d=a(2466);const u="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,a;const{lazy:r,block:p,defaultValue:m,values:h,groupId:b,className:k}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:g.map((e=>{let{props:{value:t,label:a,attributes:l}}=e;return{value:t,label:a,attributes:l}})),f=(0,o.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===m?m:null!=(t=null!=m?m:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?t:g[0].props.value;if(null!==N&&!v.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:D,setTabGroupChoices:w}=(0,s.U)(),[A,B]=(0,n.useState)(N),y=[],{blockElementScrollPositionUntilNextRender:Y}=(0,d.o5)();if(null!=b){const e=D[b];null!=e&&e!==A&&v.some((t=>t.value===e))&&B(e)}const X=e=>{const t=e.currentTarget,a=y.indexOf(t),l=v[a].value;l!==A&&(Y(t),B(l),null!=b&&w(b,String(l)))},T=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var l;const t=y.indexOf(e.currentTarget)+1;a=null!=(l=y[t])?l:y[0];break}case"ArrowLeft":{var n;const t=y.indexOf(e.currentTarget)-1;a=null!=(n=y[t])?n:y[y.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,i.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},k)},v.map((e=>{let{value:t,label:a,attributes:r}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:e=>y.push(e),onKeyDown:T,onFocus:X,onClick:X},r,{className:(0,i.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":A===t})}),null!=a?a:t)}))),r?(0,n.cloneElement)(g.filter((e=>e.props.value===A))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==A})))))}function m(e){const t=(0,r.Z)();return n.createElement(p,(0,l.Z)({key:String(t)},e))}},9706:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var l=a(7462),n=(a(7294),a(3905)),i=a(5488),r=a(5162),o=a(814);const s={sidebar_position:1,description:"Quick guide to getting BetterDiscord."},d="Installation",u={unversionedId:"users/getting-started/installation",id:"users/getting-started/installation",title:"Installation",description:"Quick guide to getting BetterDiscord.",source:"@site/docs/users/getting-started/installation.mdx",sourceDirName:"users/getting-started",slug:"/users/getting-started/installation",permalink:"/users/getting-started/installation",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Quick guide to getting BetterDiscord."},sidebar:"usersSidebar",previous:{title:"Getting Started",permalink:"/users/getting-started"},next:{title:"Configuration",permalink:"/users/getting-started/configuration"}},c={},p=[{value:"Automatic Installation",id:"automatic-installation",level:2},{value:"Video",id:"video",level:3},{value:"Step-by-Step",id:"step-by-step",level:3},{value:"Manual Installation",id:"manual-installation",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Steps",id:"steps",level:3},{value:"1. Clone the BetterDiscord repository",id:"1-clone-the-betterdiscord-repository",level:4},{value:"2. Enter the directory",id:"2-enter-the-directory",level:4},{value:"3. Install dependencies",id:"3-install-dependencies",level:4},{value:"4. Build BetterDiscord",id:"4-build-betterdiscord",level:4},{value:"5. Install to Discord",id:"5-install-to-discord",level:4}],m={toc:p};function h(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,l.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"installation"},"Installation"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If you experience any issues following these steps, try the ",(0,n.kt)("a",{parentName:"p",href:"./troubleshooting"},"troubleshooting")," guide.")),(0,n.kt)("h2",{id:"automatic-installation"},"Automatic Installation"),(0,n.kt)("h3",{id:"video"},"Video"),(0,n.kt)("p",null,"If you prefer a video tutorial, take a look at this:"),(0,n.kt)("iframe",{width:"850",height:"478",src:"https://www.youtube.com/embed/n_CCYtIZj0Y",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("h3",{id:"step-by-step"},"Step-by-Step"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("a",{parentName:"li",href:"https://betterdiscord.app"},"BetterDiscord Website")," and click the big download button. Save this somewhere on your computer."),(0,n.kt)("li",{parentName:"ol"},"Open the installer you downloaded in the previous step."),(0,n.kt)("li",{parentName:"ol"},"Accept the license agreement, and click next to proceed.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"BetterDiscord Installer",src:a(3368).Z,width:"550",height:"350"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("inlineCode",{parentName:"li"},"Install")," then click the next button to proceed with installation."),(0,n.kt)("li",{parentName:"ol"},"Select the version of Discord you want to use. If you're not sure what this means, just select ",(0,n.kt)("inlineCode",{parentName:"li"},"Stable"),". Click the install button when ready."),(0,n.kt)("li",{parentName:"ol"},"Let the installer process the installation. It should tell you when the installation has completed."),(0,n.kt)("li",{parentName:"ol"},"Verify that BetterDiscord is installed.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open (or switch to) Discord, and open Discord's settings."),(0,n.kt)("li",{parentName:"ul"},"Check the tabs on the left for a new section called ",(0,n.kt)("inlineCode",{parentName:"li"},"BetterDiscord")," (see below)")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"BetterDiscord Settings Tabs",src:a(4674).Z,width:"121",height:"194"})),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"Enjoy BetterDiscord!")),(0,n.kt)("h2",{id:"manual-installation"},"Manual Installation"),(0,n.kt)("p",null,"For those that can't get the automatic installers to work, those that want more control over their installation, and for developers."),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Git - ",(0,n.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"https://git-scm.com/downloads")),(0,n.kt)("li",{parentName:"ul"},"Node.js - ",(0,n.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/")),(0,n.kt)("li",{parentName:"ul"},"npm")),(0,n.kt)("h3",{id:"steps"},"Steps"),(0,n.kt)("h4",{id:"1-clone-the-betterdiscord-repository"},"1. Clone the BetterDiscord repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/BetterDiscord/BetterDiscord.git\n")),(0,n.kt)("p",null,"If this fails due to region lock or something similar, you can download a zipped copy directly from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/BetterDiscord/BetterDiscord/archive/refs/heads/main.zip"},"https://github.com/BetterDiscord/BetterDiscord/archive/refs/heads/main.zip")),(0,n.kt)("h4",{id:"2-enter-the-directory"},"2. Enter the directory"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd BetterDiscord\n")),(0,n.kt)("h4",{id:"3-install-dependencies"},"3. Install dependencies"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,n.kt)("h4",{id:"4-build-betterdiscord"},"4. Build BetterDiscord"),(0,n.kt)("p",null,"This will create a ",(0,n.kt)("inlineCode",{parentName:"p"},"injector.js"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"preload.js"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"renderer.js")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"dist/")," folder."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,n.kt)("h4",{id:"5-install-to-discord"},"5. Install to Discord"),(0,n.kt)(i.Z,{className:"code-tabs",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"stable",mdxType:"TabItem"},(0,n.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"npm run inject")),(0,n.kt)(r.Z,{value:"canary",mdxType:"TabItem"},(0,n.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"npm run inject canary")),(0,n.kt)(r.Z,{value:"ptb",mdxType:"TabItem"},(0,n.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"npm run inject ptb"))))}h.isMDXComponent=!0},4674:(e,t,a)=>{a.d(t,{Z:()=>l});const l="data:image/png;base64,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"},3368:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/installer-c052fae139181bec86e08b7e15fa5e50.png"}}]);