import{d as F,o as a,q as s,w as e,c as g,t as d,r as c,F as k,b as i,x as W,m as p,p as v,a as l,e as C,f as T,y as j,z as H,g as B,j as Z,_ as q}from"./index-CiCYZt5Y.js";const G={key:2},V=F({__name:"CustomAvatar",props:{image:{},initial:{},icon:{},color:{default:"primary"},size:{default:"40"}},setup(t){return(S,u)=>{const z=c("v-img"),x=c("v-icon"),m=c("v-avatar");return a(),s(m,{size:t.size,color:t.color},{default:e(()=>[t.image?(a(),s(z,{key:0,src:t.image,alt:t.initial||"Avatar"},null,8,["src","alt"])):t.icon?(a(),s(x,{key:1,icon:t.icon,size:"24"},null,8,["icon"])):t.initial?(a(),g("span",G,d(t.initial),1)):(a(),s(x,{key:3,icon:"mdi-account"}))]),_:1},8,["size","color"])}}});function N(t){return t?t.startsWith("mdi-")?t:`mdi-${t}`:"mdi-help-circle"}const K={class:"d-flex align-center"},U={key:1,class:"text-caption text-medium-emphasis mt-1"},Q={class:"d-flex align-center mb-1"},X={key:1,class:"text-caption text-medium-emphasis mt-1"},w=F({__name:"CustomListItem",props:{config:{},value:{}},emits:["click","menuAction"],setup(t,{emit:S}){const u=t,z=S,x=B(()=>u.config.chipConfig?Array.isArray(u.config.chipConfig)?u.config.chipConfig:[u.config.chipConfig]:[]),m=B(()=>u.config.titleChipConfig?Array.isArray(u.config.titleChipConfig)?u.config.titleChipConfig:[u.config.titleChipConfig]:[]),I=B(()=>!u.config.showMetadata||!u.config.metadataItems?"":u.config.metadataItems.filter(A=>A&&A.trim()!=="").join(" • ")),L=()=>{u.config.clickable!==!1&&z("click",u.value)},E=A=>{A.action(),z("menuAction",A.title,u.value)};return(A,J)=>{const _=c("v-icon"),D=c("v-list-item-title"),r=c("v-chip"),$=c("v-list-item-subtitle"),M=c("v-btn"),n=c("v-list-item"),b=c("v-list"),f=c("v-menu"),y=c("v-lazy"),R=c("v-divider");return a(),g(k,null,[t.config.enableLazyLoading?(a(),s(y,{key:0,"min-height":t.config.showMetadata?80:64,options:{threshold:.5},transition:"fade-transition"},{default:e(()=>[i(n,{value:t.value,active:t.config.active,height:t.config.showMetadata?80:64,class:"py-4",onClick:L},W({append:e(()=>[t.config.showStatusChip&&x.value.length?(a(!0),g(k,{key:0},T(x.value,(o,h)=>(a(),s(r,{key:h,color:o.color||"primary",variant:o.variant||"tonal",size:"small",rounded:"lg",class:"mr-2",style:{height:"20px"}},{default:e(()=>[C(d(o.text),1)]),_:2},1032,["color","variant"]))),128)):v("",!0),t.config.customRightContent?j(A.$slots,"right-content",{key:1}):v("",!0),t.config.showActionMenu&&t.config.menuActions?.length?(a(),s(f,{key:2},{activator:e(({props:o})=>[i(M,H(o,{icon:"mdi-dots-vertical",variant:"text",size:"small",class:"ml-2"}),null,16)]),default:e(()=>[i(b,null,{default:e(()=>[(a(!0),g(k,null,T(t.config.menuActions,(o,h)=>(a(),s(n,{key:h,onClick:P=>E(o)},W({default:e(()=>[i(D,null,{default:e(()=>[C(d(o.title),1)]),_:2},1024)]),_:2},[o.icon?{name:"prepend",fn:e(()=>[i(_,{icon:o.icon},null,8,["icon"])]),key:"0"}:void 0]),1032,["onClick"]))),128))]),_:1})]),_:1})):v("",!0)]),default:e(()=>[l("div",null,[l("div",K,[i(D,{class:"mr-2"},{default:e(()=>[C(d(t.config.title),1)]),_:1}),t.config.showTitleChips&&m.value.length?(a(),g(k,{key:0},[i(r,{color:m.value[0].color||"primary",variant:m.value[0].variant||"tonal",size:"x-small",rounded:"lg",class:"mr-1",style:{height:"20px","font-size":"11px"}},{default:e(()=>[C(d(m.value[0].text),1)]),_:1},8,["color","variant"]),(a(!0),g(k,null,T(m.value.slice(1),(o,h)=>(a(),s(r,{key:h+1,color:o.color||"secondary",variant:o.variant||"outlined",size:"x-small",rounded:"lg",style:{height:"20px","font-size":"11px"}},{default:e(()=>[C(d(o.text),1)]),_:2},1032,["color","variant"]))),128))],64)):v("",!0)])]),t.config.subtitle?(a(),s($,{key:0},{default:e(()=>[C(d(t.config.subtitle),1)]),_:1})):v("",!0),t.config.showMetadata&&I.value?(a(),g("div",U,d(I.value),1)):v("",!0)]),_:2},[t.config.showAvatar?{name:"prepend",fn:e(()=>[t.config.avatarType==="provider"?(a(),s(V,{key:0,image:t.config.avatarSrc,initial:t.config.avatarText,color:t.config.avatarColor,size:"40",class:"mr-1"},null,8,["image","initial","color"])):t.config.avatarType==="user"?(a(),s(V,{key:1,initial:t.config.avatarText,image:t.config.avatarSrc,icon:t.config.avatarIcon,color:t.config.avatarColor,size:"40",class:"mr-1"},null,8,["initial","image","icon","color"])):t.config.avatarType==="icon"?(a(),s(_,{key:2,icon:p(N)(t.config.avatarIcon||"box_open"),size:"40",class:"mr-1"},null,8,["icon"])):v("",!0)]),key:"0"}:void 0]),1032,["value","active","height"])]),_:3},8,["min-height"])):(a(),s(n,{key:1,value:t.value,active:t.config.active,height:t.config.showMetadata||t.config.showAvatar?80:64,class:"py-4",onClick:L},W({append:e(()=>[t.config.showStatusChip&&x.value.length?(a(!0),g(k,{key:0},T(x.value,(o,h)=>(a(),s(r,{key:h,color:o.color||"primary",variant:o.variant||"tonal",size:"default",rounded:"lg",class:"mr-2"},{default:e(()=>[C(d(o.text),1)]),_:2},1032,["color","variant"]))),128)):v("",!0),t.config.customRightContent?j(A.$slots,"right-content",{key:1}):v("",!0),t.config.showActionMenu&&t.config.menuActions?.length?(a(),s(f,{key:2},{activator:e(({props:o})=>[i(M,H(o,{icon:"mdi-dots-vertical",variant:"text",size:"small",class:"ml-2"}),null,16)]),default:e(()=>[i(b,null,{default:e(()=>[(a(!0),g(k,null,T(t.config.menuActions,(o,h)=>(a(),s(n,{key:h,onClick:P=>E(o)},W({default:e(()=>[i(D,null,{default:e(()=>[C(d(o.title),1)]),_:2},1024)]),_:2},[o.icon?{name:"prepend",fn:e(()=>[i(_,{icon:o.icon},null,8,["icon"])]),key:"0"}:void 0]),1032,["onClick"]))),128))]),_:1})]),_:1})):v("",!0)]),default:e(()=>[l("div",null,[l("div",Q,[i(D,{class:"mr-2"},{default:e(()=>[C(d(t.config.title),1)]),_:1}),t.config.showTitleChips&&m.value.length?(a(),g(k,{key:0},[i(r,{color:m.value[0].color||"primary",variant:m.value[0].variant||"tonal",size:"small",rounded:"lg",class:"mr-1",style:{height:"20px"}},{default:e(()=>[C(d(m.value[0].text),1)]),_:1},8,["color","variant"]),(a(!0),g(k,null,T(m.value.slice(1),(o,h)=>(a(),s(r,{key:h+1,color:o.color||"secondary",variant:o.variant||"outlined",size:"small",rounded:"lg",class:"mr-1",style:{height:"20px"}},{default:e(()=>[C(d(o.text),1)]),_:2},1032,["color","variant"]))),128))],64)):v("",!0)])]),t.config.subtitle?(a(),s($,{key:0},{default:e(()=>[C(d(t.config.subtitle),1)]),_:1})):v("",!0),t.config.showMetadata&&I.value?(a(),g("div",X,d(I.value),1)):v("",!0)]),_:2},[t.config.showAvatar?{name:"prepend",fn:e(()=>[t.config.avatarType==="provider"?(a(),s(V,{key:0,image:t.config.avatarSrc,initial:t.config.avatarText,color:t.config.avatarColor,size:"40",class:"mr-1"},null,8,["image","initial","color"])):t.config.avatarType==="user"?(a(),s(V,{key:1,initial:t.config.avatarText,image:t.config.avatarSrc,icon:t.config.avatarIcon,color:t.config.avatarColor,size:"40",class:"mr-1"},null,8,["initial","image","icon","color"])):t.config.avatarType==="icon"?(a(),s(_,{key:2,icon:p(N)(t.config.avatarIcon||"box_open"),size:"24",class:"mr-1"},null,8,["icon"])):v("",!0)]),key:"0"}:void 0]),1032,["value","active","height"])),t.config.showDivider?(a(),s(R,{key:2})):v("",!0)],64)}}}),Y={class:"mb-8"},tt={key:0},et=["innerHTML"],it={class:"mb-8"},at={class:"mb-8"},nt={class:"mb-8"},ot={class:"mb-8"},lt={class:"mb-8"},st={class:"mb-8"},ct={class:"mb-8"},rt={class:"mb-8"},ut=`interface ListItemConfig {
  // Avatar/Icon Configuration
  showAvatar?: boolean
  avatarType?: 'provider' | 'user' | 'icon'
  avatarSrc?: string
  avatarText?: string
  avatarIcon?: string
  avatarColor?: string

  // Primary Content
  title: string (required)
  subtitle?: string

  // Metadata
  showMetadata?: boolean
  metadataItems?: [string?, string?, string?]

  // Title Chips (beside title)
  showTitleChips?: boolean
  titleChipConfig?: ChipConfig | ChipConfig[]

  // Status Chips (right side)
  showStatusChip?: boolean
  chipConfig?: ChipConfig | ChipConfig[]

  // Action Menu
  showActionMenu?: boolean
  menuActions?: MenuAction[]

  // Behavior
  enableLazyLoading?: boolean
  showDivider?: boolean
  clickable?: boolean
  active?: boolean
  customRightContent?: boolean
}

interface ChipConfig {
  text: string
  color?: string
  variant?: 'flat' | 'tonal' | 'outlined' | 'text' | 'elevated'
}

interface MenuAction {
  title: string
  icon?: string
  action: () => void
}`,dt=`<template>
  <v-list>
    <CustomListItem
      :config="{
        showAvatar: true,
        avatarType: 'provider',
        avatarSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
        avatarText: 'AWS',
        avatarColor: 'orange',
        title: 'AWS Production Environment',
        subtitle: 'Primary production infrastructure for web applications',
        showMetadata: true,
        metadataItems: ['ID: aws-prod-001', 'Region: us-east-1', 'Monthly Cost: $2,450'],
        showTitleChips: true,
        titleChipConfig: [
          {
            text: 'Critical',
            color: 'error',
            variant: 'tonal'
          },
          {
            text: 'Monitored',
            color: 'info',
            variant: 'outlined'
          }
        ],
        showStatusChip: true,
        chipConfig: [
          {
            text: 'Active',
            color: 'success',
            variant: 'tonal'
          },
          {
            text: 'Optimized',
            color: 'primary',
            variant: 'outlined'
          }
        ],
        showActionMenu: true,
        menuActions: [
          {
            title: 'View Dashboard',
            icon: 'mdi-monitor-dashboard',
            action: () => console.log('View dashboard clicked')
          },
          {
            title: 'Edit Configuration',
            icon: 'mdi-cog',
            action: () => console.log('Edit configuration clicked')
          }
        ],
        showDivider: true,
        clickable: true,
        active: false
      }"
      value="all-features-demo"
      @click="handleClick"
      @menuAction="handleMenuAction"
    />
  </v-list>
</template>

<script setup lang="ts">
import { CustomListItem } from '@/components'

const handleClick = (value: any) => {
  console.log('Clicked:', value)
}

const handleMenuAction = (actionTitle: string, value: any) => {
  console.log('Menu action:', actionTitle, 'for item:', value)
}
<\/script>`,mt=F({__name:"CustomListItemPage",setup(t){const S=Z(!1),u=M=>M.replace(/"([^"]*)"/g,'"<span class="string">$1</span>"').replace(/'([^']*)'/g,`'<span class="string">$1</span>'`).replace(/`([^`]*)`/g,'`<span class="template">$1</span>`').replace(/&lt;(\/?[a-zA-Z][\w-]*)/g,'&lt;<span class="tag">$1</span>').replace(/&gt;/g,'<span class="tag">&gt;</span>').replace(/([:@][\w-]+)(?![^<]*<\/span>)/g,'<span class="directive">$1</span>').replace(/\b(import|export|const|let|var|function|from|interface|type|true|false|null|undefined)\b/g,'<span class="keyword">$1</span>').replace(/(\/\/.*)/g,'<span class="comment">$1</span>').replace(/\b(\d+)\b/g,'<span class="number">$1</span>').replace(/\b([A-Z][a-zA-Z]+)\b/g,'<span class="type">$1</span>'),z=B(()=>u(dt.replace(/</g,"&lt;").replace(/>/g,"&gt;"))),x={showAvatar:!0,avatarType:"provider",avatarSrc:"https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",avatarText:"AWS",avatarColor:"orange",title:"AWS Production Environment",subtitle:"Primary production infrastructure for web applications",showMetadata:!0,metadataItems:["ID: aws-prod-001","Region: us-east-1","Monthly Cost: $2,450"],showTitleChips:!0,titleChipConfig:[{text:"Critical",color:"error",variant:"tonal"},{text:"Monitored",color:"info",variant:"outlined"}],showStatusChip:!0,chipConfig:[{text:"Active",color:"success",variant:"tonal"},{text:"Optimized",color:"primary",variant:"outlined"}],showActionMenu:!0,menuActions:[{title:"View Dashboard",icon:"mdi-monitor-dashboard",action:()=>console.log("View dashboard clicked")},{title:"Edit Configuration",icon:"mdi-cog",action:()=>console.log("Edit configuration clicked")},{title:"View Costs",icon:"mdi-currency-usd",action:()=>console.log("View costs clicked")},{title:"Generate Report",icon:"mdi-file-document",action:()=>console.log("Generate report clicked")}],showDivider:!0,clickable:!0,active:!1},m={showAvatar:!0,avatarType:"user",avatarText:"JD",avatarColor:"primary",title:"John Doe - Normal State",subtitle:"This item is in normal/default state",showStatusChip:!0,chipConfig:{text:"Available",color:"success",variant:"tonal"},active:!1,showDivider:!0},I={showAvatar:!0,avatarType:"user",avatarText:"AB",avatarColor:"secondary",title:"Alice Brown - Active State",subtitle:"This item is currently active/selected",showStatusChip:!0,chipConfig:{text:"Online",color:"info",variant:"tonal"},active:!0,showDivider:!0},L={title:"Basic List Item",subtitle:"Simple list item with title and subtitle"},E={showAvatar:!0,avatarType:"user",avatarText:"JD",avatarColor:"primary",title:"John Doe",subtitle:"john.doe@example.com"},A={title:"AWS Production Account",subtitle:"Primary production environment",showStatusChip:!0,chipConfig:{text:"Active",color:"success",variant:"tonal"}},J={showAvatar:!0,avatarType:"icon",avatarIcon:"cloud",title:"Production Environment",subtitle:"Main production cluster",showMetadata:!0,metadataItems:["ID: prod-001","Region: us-east-1","Type: Kubernetes"]},_={title:"User Account",subtitle:"Administrator access",showActionMenu:!0,menuActions:[{title:"Edit",icon:"mdi-pencil",action:()=>console.log("Edit clicked")},{title:"Delete",icon:"mdi-delete",action:()=>console.log("Delete clicked")}]},D=[{showAvatar:!0,avatarType:"provider",avatarSrc:"https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",title:"AWS Production",subtitle:"Production environment for web services",showMetadata:!0,metadataItems:["ID: aws-prod-001","Region: us-east-1","Cost: $1,234/month"],showStatusChip:!0,chipConfig:{text:"Active",color:"success",variant:"tonal"},showActionMenu:!0,menuActions:[{title:"View Details",icon:"mdi-eye",action:()=>console.log("View details")},{title:"Edit Settings",icon:"mdi-cog",action:()=>console.log("Edit settings")}],showDivider:!0},{showAvatar:!0,avatarType:"user",avatarText:"AB",avatarColor:"secondary",title:"Alice Brown",subtitle:"Senior Developer",showTitleChips:!0,titleChipConfig:{text:"Admin",color:"warning",variant:"tonal"},showMetadata:!0,metadataItems:["Department: Engineering","Location: San Francisco","Joined: 2021"],showActionMenu:!0,menuActions:[{title:"Send Message",icon:"mdi-message",action:()=>console.log("Send message")},{title:"Remove Access",icon:"mdi-account-remove",action:()=>console.log("Remove access")}],showDivider:!0}],r=M=>{console.log("List item clicked:",M)},$=(M,n)=>{console.log("Menu action:",M,"for item:",n)};return(M,n)=>{const b=c("v-list"),f=c("v-card-text"),y=c("v-card"),R=c("v-btn"),o=c("v-divider"),h=c("v-expand-transition");return a(),g("div",null,[n[12]||(n[12]=l("div",{class:"mb-8"},[l("h1",{class:"text-h4 font-weight-bold mb-4"},"Custom List Item"),l("p",{class:"text-body-1 mb-6"}," A unified, configurable list item component that replaces multiple specific list item variations. This component can be configured to handle any list pattern through a single configuration object. ")],-1)),l("div",Y,[n[1]||(n[1]=l("h2",{class:"text-h5 font-weight-medium mb-4"},"All Features Enabled",-1)),n[2]||(n[2]=l("p",{class:"text-body-2 mb-4 text-medium-emphasis"}," This example demonstrates every available feature of the CustomListItem component in a single configuration. ",-1)),i(y,{class:"mb-4"},{default:e(()=>[i(f,null,{default:e(()=>[i(b,null,{default:e(()=>[i(p(w),{config:x,value:"all-features-demo",onClick:r,onMenuAction:$})]),_:1})]),_:1})]),_:1}),i(y,null,{default:e(()=>[i(f,{class:"pa-0"},{default:e(()=>[i(R,{onClick:n[0]||(n[0]=P=>S.value=!S.value),variant:"text","prepend-icon":"mdi-code-tags",class:"ma-4"},{default:e(()=>[C(d(S.value?"Hide code":"Show code"),1)]),_:1}),i(h,null,{default:e(()=>[S.value?(a(),g("div",tt,[i(o),l("pre",{class:"pa-4 text-caption code-block",innerHTML:z.value},null,8,et)])):v("",!0)]),_:1})]),_:1})]),_:1})]),l("div",it,[n[3]||(n[3]=l("h2",{class:"text-h5 font-weight-medium mb-4"},"Active/Selected States",-1)),n[4]||(n[4]=l("p",{class:"text-body-2 mb-4 text-medium-emphasis"}," Demonstration of different selection and active states for list items. ",-1)),i(y,null,{default:e(()=>[i(f,null,{default:e(()=>[i(b,null,{default:e(()=>[i(p(w),{config:m,onClick:r}),i(p(w),{config:I,onClick:r}),i(p(w),{config:m,onClick:r}),i(p(w),{config:m,onClick:r})]),_:1})]),_:1})]),_:1})]),l("div",at,[n[5]||(n[5]=l("h2",{class:"text-h5 font-weight-medium mb-4"},"Basic Example",-1)),i(y,null,{default:e(()=>[i(f,null,{default:e(()=>[i(b,null,{default:e(()=>[i(p(w),{config:L,onClick:r})]),_:1})]),_:1})]),_:1})]),l("div",nt,[n[6]||(n[6]=l("h2",{class:"text-h5 font-weight-medium mb-4"},"With Avatar",-1)),i(y,null,{default:e(()=>[i(f,null,{default:e(()=>[i(b,null,{default:e(()=>[i(p(w),{config:E,onClick:r})]),_:1})]),_:1})]),_:1})]),l("div",ot,[n[7]||(n[7]=l("h2",{class:"text-h5 font-weight-medium mb-4"},"With Status Chips",-1)),i(y,null,{default:e(()=>[i(f,null,{default:e(()=>[i(b,null,{default:e(()=>[i(p(w),{config:A,onClick:r})]),_:1})]),_:1})]),_:1})]),l("div",lt,[n[8]||(n[8]=l("h2",{class:"text-h5 font-weight-medium mb-4"},"With Metadata",-1)),i(y,null,{default:e(()=>[i(f,null,{default:e(()=>[i(b,null,{default:e(()=>[i(p(w),{config:J,onClick:r})]),_:1})]),_:1})]),_:1})]),l("div",st,[n[9]||(n[9]=l("h2",{class:"text-h5 font-weight-medium mb-4"},"With Action Menu",-1)),i(y,null,{default:e(()=>[i(f,null,{default:e(()=>[i(b,null,{default:e(()=>[i(p(w),{config:_,onClick:r,onMenuAction:$})]),_:1})]),_:1})]),_:1})]),l("div",ct,[n[10]||(n[10]=l("h2",{class:"text-h5 font-weight-medium mb-4"},"Full Example",-1)),i(y,null,{default:e(()=>[i(f,null,{default:e(()=>[i(b,null,{default:e(()=>[(a(),g(k,null,T(D,(P,O)=>i(p(w),{key:O,config:P,onClick:r,onMenuAction:$},null,8,["config"])),64))]),_:1})]),_:1})]),_:1})]),l("div",rt,[n[11]||(n[11]=l("h2",{class:"text-h5 font-weight-medium mb-4"},"Configuration API",-1)),i(y,null,{default:e(()=>[i(f,null,{default:e(()=>[l("pre",{class:"text-caption"},d(ut))]),_:1})]),_:1})])])}}}),gt=q(mt,[["__scopeId","data-v-56011343"]]);export{gt as default};
