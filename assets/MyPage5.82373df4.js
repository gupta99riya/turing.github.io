import{a,Q as p}from"./QList.56b9920f.js";import{u,Q as n,a as m,b as _}from"./use-quasar.b9b5ba53.js";import{Q as v}from"./QBtn.335e29a9.js";import{s as f,L as h,r as k,d as x,M as y,m as e,k as o,X as i,j as Q,Y as b}from"./index.bfd8a2bb.js";import"./focus-manager.05708ea9.js";import"./use-ratio.54b0079b.js";var g="/assets/Map.83ae95e1.jpeg";const V=e("div",{class:"q-pa-md col justify-center"},null,-1),B={class:"col-3 col-md-2"},w=e("div",{class:"text-caption"},"Pickup",-1),P=e("br",null,null,-1),j=e("br",null,null,-1),M={class:"col-3"},C=e("div",{class:"text-caption"},"drop",-1),I=e("br",null,null,-1),N=e("br",null,null,-1),q={class:"row justify-center"},L={class:"col-2"},S={class:"col-3",style:{"max-width":"900px","max-height":"800px"}},z=f({__name:"MyPage5",setup(U){const r=h(),c=u(),s=k({pickup:"",drop:""});function d(){if(s.value.pickup==="ip extension"&&s.value.drop==="kamla nagar")return r.push("/MyPage2");c.notify({message:"Invalid location",color:"negative",icon:"report_problem"})}return(E,t)=>(x(),y(b,null,[V,e("div",B,[w,o(a,{spaced:""}),o(n,{modelValue:s.value.pickup,"onUpdate:modelValue":t[0]||(t[0]=l=>s.value.pickup=l),filled:"",dense:"",label:"Please enter your pick up location"},null,8,["modelValue"])]),P,i(),j,e("div",M,[o(p,{style:{"min-width":"20px"}},{default:Q(()=>[C,o(a,{spaced:""}),o(n,{modelValue:s.value.drop,"onUpdate:modelValue":t[1]||(t[1]=l=>s.value.drop=l),filled:"",dense:"",label:"Please enter your drop location"},null,8,["modelValue"]),o(m)]),_:1})]),I,i(),N,e("div",q,[e("div",L,[o(v,{label:"Book",onClick:d,unelevated:"",color:"primary",class:"full-width","no-caps":""})])]),e("div",S,[o(_,{src:g})])],64))}});export{z as default};