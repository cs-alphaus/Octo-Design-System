import{d as X,o,q as c,w as e,c as u,t as s,r as v,F as A,b as t,x as U,m as b,p as r,a as n,e as m,f as B,y as tt,z as et,g as y,j as E,_ as ct}from"./index-BnqSnyIe.js";const rt={key:2},Z=X({__name:"CustomAvatar",props:{image:{},initial:{},icon:{},color:{default:"primary"},size:{default:"40"}},setup(i){return($,d)=>{const S=v("v-img"),w=v("v-icon"),g=v("v-avatar");return o(),c(g,{size:i.size,color:i.color},{default:e(()=>[i.image?(o(),c(S,{key:0,src:i.image,alt:i.initial||"Avatar"},null,8,["src","alt"])):i.icon?(o(),c(w,{key:1,icon:i.icon,size:"24"},null,8,["icon"])):i.initial?(o(),u("span",rt,s(i.initial),1)):(o(),c(w,{key:3,icon:"mdi-account"}))]),_:1},8,["size","color"])}}});function it(i){return i?i.startsWith("mdi-")?i:`mdi-${i}`:"mdi-help-circle"}const ut={class:"d-flex align-center"},dt={key:1,class:"text-caption text-medium-emphasis mt-1"},mt={class:"d-flex align-center mb-1"},vt={key:1,class:"text-caption text-medium-emphasis mt-1"},x=X({__name:"CustomListItem",props:{config:{},value:{}},emits:["click","menuAction"],setup(i,{emit:$}){const d=i,S=$,w=y(()=>d.config.chipConfig?Array.isArray(d.config.chipConfig)?d.config.chipConfig:[d.config.chipConfig]:[]),g=y(()=>d.config.titleChipConfig?Array.isArray(d.config.titleChipConfig)?d.config.titleChipConfig:[d.config.titleChipConfig]:[]),T=y(()=>!d.config.showMetadata||!d.config.metadataItems?"":d.config.metadataItems.filter(h=>h&&h.trim()!=="").join(" • ")),P=()=>{d.config.clickable!==!1&&S("click",d.value)},H=h=>{h.action(),S("menuAction",h.title,d.value)};return(h,Y)=>{const W=v("v-icon"),R=v("v-list-item-title"),_=v("v-chip"),J=v("v-list-item-subtitle"),j=v("v-btn"),V=v("v-list-item"),N=v("v-list"),O=v("v-menu"),q=v("v-lazy"),G=v("v-divider");return o(),u(A,null,[i.config.enableLazyLoading?(o(),c(q,{key:0,"min-height":i.config.showMetadata?80:64,options:{threshold:.5},transition:"fade-transition"},{default:e(()=>[t(V,{value:i.value,active:i.config.active,height:i.config.showMetadata?80:64,class:"py-4",onClick:P},U({append:e(()=>[i.config.showStatusChip&&w.value.length?(o(!0),u(A,{key:0},B(w.value,(l,C)=>(o(),c(_,{key:C,color:l.color||"primary",variant:l.variant||"tonal",size:"small",rounded:"lg",class:"mr-2",style:{height:"20px"}},{default:e(()=>[m(s(l.text),1)]),_:2},1032,["color","variant"]))),128)):r("",!0),i.config.customRightContent?tt(h.$slots,"right-content",{key:1}):r("",!0),i.config.showActionMenu&&i.config.menuActions?.length?(o(),c(O,{key:2},{activator:e(({props:l})=>[t(j,et(l,{icon:"mdi-dots-vertical",variant:"text",size:"small",class:"ml-2"}),null,16)]),default:e(()=>[t(N,null,{default:e(()=>[(o(!0),u(A,null,B(i.config.menuActions,(l,C)=>(o(),c(V,{key:C,onClick:K=>H(l)},U({default:e(()=>[t(R,null,{default:e(()=>[m(s(l.title),1)]),_:2},1024)]),_:2},[l.icon?{name:"prepend",fn:e(()=>[t(W,{icon:l.icon},null,8,["icon"])]),key:"0"}:void 0]),1032,["onClick"]))),128))]),_:1})]),_:1})):r("",!0)]),default:e(()=>[n("div",null,[n("div",ut,[t(R,{class:"mr-2"},{default:e(()=>[m(s(i.config.title),1)]),_:1}),i.config.showTitleChips&&g.value.length?(o(),u(A,{key:0},[t(_,{color:g.value[0].color||"primary",variant:g.value[0].variant||"tonal",size:"x-small",rounded:"lg",class:"mr-1",style:{height:"20px","font-size":"11px"}},{default:e(()=>[m(s(g.value[0].text),1)]),_:1},8,["color","variant"]),(o(!0),u(A,null,B(g.value.slice(1),(l,C)=>(o(),c(_,{key:C+1,color:l.color||"secondary",variant:l.variant||"outlined",size:"x-small",rounded:"lg",style:{height:"20px","font-size":"11px"}},{default:e(()=>[m(s(l.text),1)]),_:2},1032,["color","variant"]))),128))],64)):r("",!0)])]),i.config.subtitle?(o(),c(J,{key:0},{default:e(()=>[m(s(i.config.subtitle),1)]),_:1})):r("",!0),i.config.showMetadata&&T.value?(o(),u("div",dt,s(T.value),1)):r("",!0)]),_:2},[i.config.showAvatar?{name:"prepend",fn:e(()=>[i.config.avatarType==="provider"?(o(),c(Z,{key:0,image:i.config.avatarSrc,initial:i.config.avatarText,color:i.config.avatarColor,size:"40",class:"mr-1"},null,8,["image","initial","color"])):i.config.avatarType==="user"?(o(),c(Z,{key:1,initial:i.config.avatarText,image:i.config.avatarSrc,icon:i.config.avatarIcon,color:i.config.avatarColor,size:"40",class:"mr-1"},null,8,["initial","image","icon","color"])):i.config.avatarType==="icon"?(o(),c(W,{key:2,icon:b(it)(i.config.avatarIcon||"box_open"),size:"40",class:"mr-1"},null,8,["icon"])):r("",!0)]),key:"0"}:void 0]),1032,["value","active","height"])]),_:3},8,["min-height"])):(o(),c(V,{key:1,value:i.value,active:i.config.active,height:i.config.showMetadata||i.config.showAvatar?80:64,class:"py-4",onClick:P},U({append:e(()=>[i.config.showStatusChip&&w.value.length?(o(!0),u(A,{key:0},B(w.value,(l,C)=>(o(),c(_,{key:C,color:l.color||"primary",variant:l.variant||"tonal",size:"default",rounded:"lg",class:"mr-2"},{default:e(()=>[m(s(l.text),1)]),_:2},1032,["color","variant"]))),128)):r("",!0),i.config.customRightContent?tt(h.$slots,"right-content",{key:1}):r("",!0),i.config.showActionMenu&&i.config.menuActions?.length?(o(),c(O,{key:2},{activator:e(({props:l})=>[t(j,et(l,{icon:"mdi-dots-vertical",variant:"text",size:"small",class:"ml-2"}),null,16)]),default:e(()=>[t(N,null,{default:e(()=>[(o(!0),u(A,null,B(i.config.menuActions,(l,C)=>(o(),c(V,{key:C,onClick:K=>H(l)},U({default:e(()=>[t(R,null,{default:e(()=>[m(s(l.title),1)]),_:2},1024)]),_:2},[l.icon?{name:"prepend",fn:e(()=>[t(W,{icon:l.icon},null,8,["icon"])]),key:"0"}:void 0]),1032,["onClick"]))),128))]),_:1})]),_:1})):r("",!0)]),default:e(()=>[n("div",null,[n("div",mt,[t(R,{class:"mr-2"},{default:e(()=>[m(s(i.config.title),1)]),_:1}),i.config.showTitleChips&&g.value.length?(o(),u(A,{key:0},[t(_,{color:g.value[0].color||"primary",variant:g.value[0].variant||"tonal",size:"small",rounded:"lg",class:"mr-1",style:{height:"20px"}},{default:e(()=>[m(s(g.value[0].text),1)]),_:1},8,["color","variant"]),(o(!0),u(A,null,B(g.value.slice(1),(l,C)=>(o(),c(_,{key:C+1,color:l.color||"secondary",variant:l.variant||"outlined",size:"small",rounded:"lg",class:"mr-1",style:{height:"20px"}},{default:e(()=>[m(s(l.text),1)]),_:2},1032,["color","variant"]))),128))],64)):r("",!0)])]),i.config.subtitle?(o(),c(J,{key:0},{default:e(()=>[m(s(i.config.subtitle),1)]),_:1})):r("",!0),i.config.showMetadata&&T.value?(o(),u("div",vt,s(T.value),1)):r("",!0)]),_:2},[i.config.showAvatar?{name:"prepend",fn:e(()=>[i.config.avatarType==="provider"?(o(),c(Z,{key:0,image:i.config.avatarSrc,initial:i.config.avatarText,color:i.config.avatarColor,size:"40",class:"mr-1"},null,8,["image","initial","color"])):i.config.avatarType==="user"?(o(),c(Z,{key:1,initial:i.config.avatarText,image:i.config.avatarSrc,icon:i.config.avatarIcon,color:i.config.avatarColor,size:"40",class:"mr-1"},null,8,["initial","image","icon","color"])):i.config.avatarType==="icon"?(o(),c(W,{key:2,icon:b(it)(i.config.avatarIcon||"box_open"),size:"24",class:"mr-1"},null,8,["icon"])):r("",!0)]),key:"0"}:void 0]),1032,["value","active","height"])),i.config.showDivider?(o(),c(G,{key:2})):r("",!0)],64)}}}),gt={class:"mb-8"},ht={key:0},ft=["innerHTML"],pt={class:"mb-8"},Ct={key:0},wt=["innerHTML"],bt={class:"mb-8"},yt={key:0},kt=["innerHTML"],xt={class:"mb-8"},At={key:0},St=["innerHTML"],Tt={class:"mb-8"},Mt={key:0},_t=["innerHTML"],It={class:"mb-8"},Lt={key:0},Dt=["innerHTML"],zt={class:"mb-8"},Et={key:0},$t=["innerHTML"],Pt={class:"mb-8"},Ht={key:0},Bt=["innerHTML"],Wt={class:"mb-8"},Rt=`interface ListItemConfig {
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
}`,Vt=`<template>
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
<\/script>`,Ft=`<template>
  <v-list>
    <!-- Normal State -->
    <CustomListItem
      :config="{
        showAvatar: true,
        avatarType: 'user',
        avatarText: 'JD',
        avatarColor: 'primary',
        title: 'John Doe - Normal State',
        subtitle: 'This item is in normal/default state',
        showStatusChip: true,
        chipConfig: {
          text: 'Available',
          color: 'success',
          variant: 'tonal'
        },
        active: false,
        showDivider: true
      }"
      @click="handleClick"
    />

    <!-- Active State -->
    <CustomListItem
      :config="{
        showAvatar: true,
        avatarType: 'user',
        avatarText: 'AB',
        avatarColor: 'secondary',
        title: 'Alice Brown - Active State',
        subtitle: 'This item is currently active/selected',
        showStatusChip: true,
        chipConfig: {
          text: 'Online',
          color: 'info',
          variant: 'tonal'
        },
        active: true,
        showDivider: true
      }"
      @click="handleClick"
    />

    <!-- Selected State -->
    <CustomListItem
      :config="{
        showAvatar: true,
        avatarType: 'icon',
        avatarIcon: 'folder',
        avatarColor: 'warning',
        title: 'Project Alpha - Selected State',
        subtitle: 'This item shows selected state with primary color highlight',
        showTitleChips: true,
        titleChipConfig: {
          text: 'Selected',
          color: 'primary',
          variant: 'flat'
        },
        showStatusChip: true,
        chipConfig: {
          text: 'In Progress',
          color: 'warning',
          variant: 'tonal'
        },
        active: true,
        showDivider: true
      }"
      @click="handleClick"
    />
  </v-list>
</template>

<script setup lang="ts">
import { CustomListItem } from '@/components'

const handleClick = (value: any) => {
  console.log('Clicked:', value)
}
<\/script>`,Jt=`<template>
  <v-list>
    <CustomListItem
      :config="{
        title: 'Basic List Item',
        subtitle: 'Simple list item with title and subtitle'
      }"
      @click="handleClick"
    />
  </v-list>
</template>

<script setup lang="ts">
import { CustomListItem } from '@/components'

const handleClick = (value: any) => {
  console.log('Clicked:', value)
}
<\/script>`,jt=`<template>
  <v-list>
    <CustomListItem
      :config="{
        showAvatar: true,
        avatarType: 'user',
        avatarText: 'JD',
        avatarColor: 'primary',
        title: 'John Doe',
        subtitle: 'john.doe@example.com'
      }"
      @click="handleClick"
    />
  </v-list>
</template>

<script setup lang="ts">
import { CustomListItem } from '@/components'

const handleClick = (value: any) => {
  console.log('Clicked:', value)
}
<\/script>`,Nt=`<template>
  <v-list>
    <CustomListItem
      :config="{
        title: 'AWS Production Account',
        subtitle: 'Primary production environment',
        showStatusChip: true,
        chipConfig: {
          text: 'Active',
          color: 'success',
          variant: 'tonal'
        }
      }"
      @click="handleClick"
    />
  </v-list>
</template>

<script setup lang="ts">
import { CustomListItem } from '@/components'

const handleClick = (value: any) => {
  console.log('Clicked:', value)
}
<\/script>`,Ot=`<template>
  <v-list>
    <CustomListItem
      :config="{
        showAvatar: true,
        avatarType: 'icon',
        avatarIcon: 'cloud',
        title: 'Production Environment',
        subtitle: 'Main production cluster',
        showMetadata: true,
        metadataItems: ['ID: prod-001', 'Region: us-east-1', 'Type: Kubernetes']
      }"
      @click="handleClick"
    />
  </v-list>
</template>

<script setup lang="ts">
import { CustomListItem } from '@/components'

const handleClick = (value: any) => {
  console.log('Clicked:', value)
}
<\/script>`,Ut=`<template>
  <v-list>
    <CustomListItem
      :config="{
        title: 'User Account',
        subtitle: 'Administrator access',
        showActionMenu: true,
        menuActions: [
          {
            title: 'Edit',
            icon: 'mdi-pencil',
            action: () => console.log('Edit clicked')
          },
          {
            title: 'Delete',
            icon: 'mdi-delete',
            action: () => console.log('Delete clicked')
          }
        ]
      }"
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
<\/script>`,Zt=`<template>
  <v-list>
    <!-- AWS Provider Example -->
    <CustomListItem
      :config="{
        showAvatar: true,
        avatarType: 'provider',
        avatarSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
        title: 'AWS Production',
        subtitle: 'Production environment for web services',
        showMetadata: true,
        metadataItems: ['ID: aws-prod-001', 'Region: us-east-1', 'Cost: $1,234/month'],
        showStatusChip: true,
        chipConfig: {
          text: 'Active',
          color: 'success',
          variant: 'tonal'
        },
        showActionMenu: true,
        menuActions: [
          {
            title: 'View Details',
            icon: 'mdi-eye',
            action: () => console.log('View details')
          },
          {
            title: 'Edit Settings',
            icon: 'mdi-cog',
            action: () => console.log('Edit settings')
          }
        ],
        showDivider: true
      }"
      @click="handleClick"
      @menuAction="handleMenuAction"
    />

    <!-- User Example -->
    <CustomListItem
      :config="{
        showAvatar: true,
        avatarType: 'user',
        avatarText: 'AB',
        avatarColor: 'secondary',
        title: 'Alice Brown',
        subtitle: 'Senior Developer',
        showTitleChips: true,
        titleChipConfig: {
          text: 'Admin',
          color: 'warning',
          variant: 'tonal'
        },
        showMetadata: true,
        metadataItems: ['Department: Engineering', 'Location: San Francisco', 'Joined: 2021'],
        showActionMenu: true,
        menuActions: [
          {
            title: 'Send Message',
            icon: 'mdi-message',
            action: () => console.log('Send message')
          },
          {
            title: 'Remove Access',
            icon: 'mdi-account-remove',
            action: () => console.log('Remove access')
          }
        ],
        showDivider: true
      }"
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
<\/script>`,qt=X({__name:"CustomListItemPage",setup(i){const $=E(!1),d=E(!1),S=E(!1),w=E(!1),g=E(!1),T=E(!1),P=E(!1),H=E(!1),h=F=>F.replace(/"([^"]*)"/g,'"<span class="string">$1</span>"').replace(/'([^']*)'/g,`'<span class="string">$1</span>'`).replace(/`([^`]*)`/g,'`<span class="template">$1</span>`').replace(/&lt;(\/?[a-zA-Z][\w-]*)/g,'&lt;<span class="tag">$1</span>').replace(/&gt;/g,'<span class="tag">&gt;</span>').replace(/([:@][\w-]+)(?![^<]*<\/span>)/g,'<span class="directive">$1</span>').replace(/\b(import|export|const|let|var|function|from|interface|type|true|false|null|undefined)\b/g,'<span class="keyword">$1</span>').replace(/(\/\/.*)/g,'<span class="comment">$1</span>').replace(/\b(\d+)\b/g,'<span class="number">$1</span>').replace(/\b([A-Z][a-zA-Z]+)\b/g,'<span class="type">$1</span>'),Y=y(()=>h(Vt.replace(/</g,"&lt;").replace(/>/g,"&gt;"))),W=y(()=>h(Ft.replace(/</g,"&lt;").replace(/>/g,"&gt;"))),R=y(()=>h(Jt.replace(/</g,"&lt;").replace(/>/g,"&gt;"))),_=y(()=>h(jt.replace(/</g,"&lt;").replace(/>/g,"&gt;"))),J=y(()=>h(Nt.replace(/</g,"&lt;").replace(/>/g,"&gt;"))),j=y(()=>h(Ot.replace(/</g,"&lt;").replace(/>/g,"&gt;"))),V=y(()=>h(Ut.replace(/</g,"&lt;").replace(/>/g,"&gt;"))),N=y(()=>h(Zt.replace(/</g,"&lt;").replace(/>/g,"&gt;"))),O={showAvatar:!0,avatarType:"provider",avatarSrc:"https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",avatarText:"AWS",avatarColor:"orange",title:"AWS Production Environment",subtitle:"Primary production infrastructure for web applications",showMetadata:!0,metadataItems:["ID: aws-prod-001","Region: us-east-1","Monthly Cost: $2,450"],showTitleChips:!0,titleChipConfig:[{text:"Critical",color:"error",variant:"tonal"},{text:"Monitored",color:"info",variant:"outlined"}],showStatusChip:!0,chipConfig:[{text:"Active",color:"success",variant:"tonal"},{text:"Optimized",color:"primary",variant:"outlined"}],showActionMenu:!0,menuActions:[{title:"View Dashboard",icon:"mdi-monitor-dashboard",action:()=>console.log("View dashboard clicked")},{title:"Edit Configuration",icon:"mdi-cog",action:()=>console.log("Edit configuration clicked")},{title:"View Costs",icon:"mdi-currency-usd",action:()=>console.log("View costs clicked")},{title:"Generate Report",icon:"mdi-file-document",action:()=>console.log("Generate report clicked")}],showDivider:!0,clickable:!0,active:!1},q={showAvatar:!0,avatarType:"user",avatarText:"JD",avatarColor:"primary",title:"John Doe - Normal State",subtitle:"This item is in normal/default state",showStatusChip:!0,chipConfig:{text:"Available",color:"success",variant:"tonal"},active:!1,showDivider:!0},G={showAvatar:!0,avatarType:"user",avatarText:"AB",avatarColor:"secondary",title:"Alice Brown - Active State",subtitle:"This item is currently active/selected",showStatusChip:!0,chipConfig:{text:"Online",color:"info",variant:"tonal"},active:!0,showDivider:!0},l={showAvatar:!0,avatarType:"icon",avatarIcon:"folder",avatarColor:"warning",title:"Project Alpha - Selected State",subtitle:"This item shows selected state with primary color highlight",showTitleChips:!0,titleChipConfig:{text:"Selected",color:"primary",variant:"flat"},showStatusChip:!0,chipConfig:{text:"In Progress",color:"warning",variant:"tonal"},active:!0,showDivider:!0},C={title:"Basic List Item",subtitle:"Simple list item with title and subtitle"},K={showAvatar:!0,avatarType:"user",avatarText:"JD",avatarColor:"primary",title:"John Doe",subtitle:"john.doe@example.com"},at={title:"AWS Production Account",subtitle:"Primary production environment",showStatusChip:!0,chipConfig:{text:"Active",color:"success",variant:"tonal"}},ot={showAvatar:!0,avatarType:"icon",avatarIcon:"cloud",title:"Production Environment",subtitle:"Main production cluster",showMetadata:!0,metadataItems:["ID: prod-001","Region: us-east-1","Type: Kubernetes"]},nt={title:"User Account",subtitle:"Administrator access",showActionMenu:!0,menuActions:[{title:"Edit",icon:"mdi-pencil",action:()=>console.log("Edit clicked")},{title:"Delete",icon:"mdi-delete",action:()=>console.log("Delete clicked")}]},lt=[{showAvatar:!0,avatarType:"provider",avatarSrc:"https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",title:"AWS Production",subtitle:"Production environment for web services",showMetadata:!0,metadataItems:["ID: aws-prod-001","Region: us-east-1","Cost: $1,234/month"],showStatusChip:!0,chipConfig:{text:"Active",color:"success",variant:"tonal"},showActionMenu:!0,menuActions:[{title:"View Details",icon:"mdi-eye",action:()=>console.log("View details")},{title:"Edit Settings",icon:"mdi-cog",action:()=>console.log("Edit settings")}],showDivider:!0},{showAvatar:!0,avatarType:"user",avatarText:"AB",avatarColor:"secondary",title:"Alice Brown",subtitle:"Senior Developer",showTitleChips:!0,titleChipConfig:{text:"Admin",color:"warning",variant:"tonal"},showMetadata:!0,metadataItems:["Department: Engineering","Location: San Francisco","Joined: 2021"],showActionMenu:!0,menuActions:[{title:"Send Message",icon:"mdi-message",action:()=>console.log("Send message")},{title:"Remove Access",icon:"mdi-account-remove",action:()=>console.log("Remove access")}],showDivider:!0}],k=F=>{console.log("List item clicked:",F)},Q=(F,a)=>{console.log("Menu action:",F,"for item:",a)};return(F,a)=>{const I=v("v-list"),f=v("v-card-text"),p=v("v-card"),L=v("v-btn"),D=v("v-divider"),z=v("v-expand-transition");return o(),u("div",null,[a[25]||(a[25]=n("div",{class:"mb-8"},[n("h1",{class:"text-h4 font-weight-bold mb-4"},"Custom List Item"),n("p",{class:"text-body-1 mb-6"}," A unified, configurable list item component that replaces multiple specific list item variations. This component can be configured to handle any list pattern through a single configuration object. ")],-1)),n("div",gt,[a[8]||(a[8]=n("h2",{class:"text-h5 font-weight-medium mb-4"},"All Features Enabled",-1)),a[9]||(a[9]=n("p",{class:"text-body-2 mb-4 text-medium-emphasis"}," This example demonstrates every available feature of the CustomListItem component in a single configuration. ",-1)),t(p,{class:"mb-4"},{default:e(()=>[t(f,null,{default:e(()=>[t(I,null,{default:e(()=>[t(b(x),{config:O,value:"all-features-demo",onClick:k,onMenuAction:Q})]),_:1})]),_:1})]),_:1}),t(p,null,{default:e(()=>[t(f,{class:"pa-0"},{default:e(()=>[t(L,{onClick:a[0]||(a[0]=M=>$.value=!$.value),variant:"text","prepend-icon":"mdi-code-tags",class:"ma-4"},{default:e(()=>[m(s($.value?"Hide code":"Show code"),1)]),_:1}),t(z,null,{default:e(()=>[$.value?(o(),u("div",ht,[t(D),n("pre",{class:"pa-4 text-caption code-block",innerHTML:Y.value},null,8,ft)])):r("",!0)]),_:1})]),_:1})]),_:1})]),n("div",pt,[a[10]||(a[10]=n("h2",{class:"text-h5 font-weight-medium mb-4"},"Active/Selected States",-1)),a[11]||(a[11]=n("p",{class:"text-body-2 mb-4 text-medium-emphasis"}," Demonstration of different selection and active states for list items. ",-1)),t(p,{class:"mb-4"},{default:e(()=>[t(f,null,{default:e(()=>[t(I,null,{default:e(()=>[t(b(x),{config:q,onClick:k}),t(b(x),{config:G,onClick:k}),t(b(x),{config:l,onClick:k})]),_:1})]),_:1})]),_:1}),t(p,null,{default:e(()=>[t(f,{class:"pa-0"},{default:e(()=>[t(L,{onClick:a[1]||(a[1]=M=>d.value=!d.value),variant:"text","prepend-icon":"mdi-code-tags",class:"ma-4"},{default:e(()=>[m(s(d.value?"Hide code":"Show code"),1)]),_:1}),t(z,null,{default:e(()=>[d.value?(o(),u("div",Ct,[t(D),n("pre",{class:"pa-4 text-caption code-block",innerHTML:W.value},null,8,wt)])):r("",!0)]),_:1})]),_:1})]),_:1})]),n("div",bt,[a[12]||(a[12]=n("h2",{class:"text-h5 font-weight-medium mb-4"},"Basic Example",-1)),a[13]||(a[13]=n("p",{class:"text-body-2 mb-4 text-medium-emphasis"}," Minimal configuration with just title and subtitle. ",-1)),t(p,{class:"mb-4"},{default:e(()=>[t(f,null,{default:e(()=>[t(I,null,{default:e(()=>[t(b(x),{config:C,onClick:k})]),_:1})]),_:1})]),_:1}),t(p,null,{default:e(()=>[t(f,{class:"pa-0"},{default:e(()=>[t(L,{onClick:a[2]||(a[2]=M=>S.value=!S.value),variant:"text","prepend-icon":"mdi-code-tags",class:"ma-4"},{default:e(()=>[m(s(S.value?"Hide code":"Show code"),1)]),_:1}),t(z,null,{default:e(()=>[S.value?(o(),u("div",yt,[t(D),n("pre",{class:"pa-4 text-caption code-block",innerHTML:R.value},null,8,kt)])):r("",!0)]),_:1})]),_:1})]),_:1})]),n("div",xt,[a[14]||(a[14]=n("h2",{class:"text-h5 font-weight-medium mb-4"},"With Avatar",-1)),a[15]||(a[15]=n("p",{class:"text-body-2 mb-4 text-medium-emphasis"}," Adding user avatar with initials and color customization. ",-1)),t(p,{class:"mb-4"},{default:e(()=>[t(f,null,{default:e(()=>[t(I,null,{default:e(()=>[t(b(x),{config:K,onClick:k})]),_:1})]),_:1})]),_:1}),t(p,null,{default:e(()=>[t(f,{class:"pa-0"},{default:e(()=>[t(L,{onClick:a[3]||(a[3]=M=>w.value=!w.value),variant:"text","prepend-icon":"mdi-code-tags",class:"ma-4"},{default:e(()=>[m(s(w.value?"Hide code":"Show code"),1)]),_:1}),t(z,null,{default:e(()=>[w.value?(o(),u("div",At,[t(D),n("pre",{class:"pa-4 text-caption code-block",innerHTML:_.value},null,8,St)])):r("",!0)]),_:1})]),_:1})]),_:1})]),n("div",Tt,[a[16]||(a[16]=n("h2",{class:"text-h5 font-weight-medium mb-4"},"With Status Chips",-1)),a[17]||(a[17]=n("p",{class:"text-body-2 mb-4 text-medium-emphasis"}," Adding status chips on the right side with color and variant options. ",-1)),t(p,{class:"mb-4"},{default:e(()=>[t(f,null,{default:e(()=>[t(I,null,{default:e(()=>[t(b(x),{config:at,onClick:k})]),_:1})]),_:1})]),_:1}),t(p,null,{default:e(()=>[t(f,{class:"pa-0"},{default:e(()=>[t(L,{onClick:a[4]||(a[4]=M=>g.value=!g.value),variant:"text","prepend-icon":"mdi-code-tags",class:"ma-4"},{default:e(()=>[m(s(g.value?"Hide code":"Show code"),1)]),_:1}),t(z,null,{default:e(()=>[g.value?(o(),u("div",Mt,[t(D),n("pre",{class:"pa-4 text-caption code-block",innerHTML:J.value},null,8,_t)])):r("",!0)]),_:1})]),_:1})]),_:1})]),n("div",It,[a[18]||(a[18]=n("h2",{class:"text-h5 font-weight-medium mb-4"},"With Metadata",-1)),a[19]||(a[19]=n("p",{class:"text-body-2 mb-4 text-medium-emphasis"}," Adding tertiary metadata line below the subtitle with dot-separated items. ",-1)),t(p,{class:"mb-4"},{default:e(()=>[t(f,null,{default:e(()=>[t(I,null,{default:e(()=>[t(b(x),{config:ot,onClick:k})]),_:1})]),_:1})]),_:1}),t(p,null,{default:e(()=>[t(f,{class:"pa-0"},{default:e(()=>[t(L,{onClick:a[5]||(a[5]=M=>T.value=!T.value),variant:"text","prepend-icon":"mdi-code-tags",class:"ma-4"},{default:e(()=>[m(s(T.value?"Hide code":"Show code"),1)]),_:1}),t(z,null,{default:e(()=>[T.value?(o(),u("div",Lt,[t(D),n("pre",{class:"pa-4 text-caption code-block",innerHTML:j.value},null,8,Dt)])):r("",!0)]),_:1})]),_:1})]),_:1})]),n("div",zt,[a[20]||(a[20]=n("h2",{class:"text-h5 font-weight-medium mb-4"},"With Action Menu",-1)),a[21]||(a[21]=n("p",{class:"text-body-2 mb-4 text-medium-emphasis"}," Adding a dropdown action menu with customizable actions and icons. ",-1)),t(p,{class:"mb-4"},{default:e(()=>[t(f,null,{default:e(()=>[t(I,null,{default:e(()=>[t(b(x),{config:nt,onClick:k,onMenuAction:Q})]),_:1})]),_:1})]),_:1}),t(p,null,{default:e(()=>[t(f,{class:"pa-0"},{default:e(()=>[t(L,{onClick:a[6]||(a[6]=M=>P.value=!P.value),variant:"text","prepend-icon":"mdi-code-tags",class:"ma-4"},{default:e(()=>[m(s(P.value?"Hide code":"Show code"),1)]),_:1}),t(z,null,{default:e(()=>[P.value?(o(),u("div",Et,[t(D),n("pre",{class:"pa-4 text-caption code-block",innerHTML:V.value},null,8,$t)])):r("",!0)]),_:1})]),_:1})]),_:1})]),n("div",Pt,[a[22]||(a[22]=n("h2",{class:"text-h5 font-weight-medium mb-4"},"Full Example",-1)),a[23]||(a[23]=n("p",{class:"text-body-2 mb-4 text-medium-emphasis"}," Multiple list items demonstrating different configurations in a real-world scenario. ",-1)),t(p,{class:"mb-4"},{default:e(()=>[t(f,null,{default:e(()=>[t(I,null,{default:e(()=>[(o(),u(A,null,B(lt,(M,st)=>t(b(x),{key:st,config:M,onClick:k,onMenuAction:Q},null,8,["config"])),64))]),_:1})]),_:1})]),_:1}),t(p,null,{default:e(()=>[t(f,{class:"pa-0"},{default:e(()=>[t(L,{onClick:a[7]||(a[7]=M=>H.value=!H.value),variant:"text","prepend-icon":"mdi-code-tags",class:"ma-4"},{default:e(()=>[m(s(H.value?"Hide code":"Show code"),1)]),_:1}),t(z,null,{default:e(()=>[H.value?(o(),u("div",Ht,[t(D),n("pre",{class:"pa-4 text-caption code-block",innerHTML:N.value},null,8,Bt)])):r("",!0)]),_:1})]),_:1})]),_:1})]),n("div",Wt,[a[24]||(a[24]=n("h2",{class:"text-h5 font-weight-medium mb-4"},"Configuration API",-1)),t(p,null,{default:e(()=>[t(f,null,{default:e(()=>[n("pre",{class:"text-caption"},s(Rt))]),_:1})]),_:1})])])}}}),Kt=ct(qt,[["__scopeId","data-v-84ec4d40"]]);export{Kt as default};
