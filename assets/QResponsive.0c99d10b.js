import{c as S,h as C,p as $,o as H,e as M,q as P,b as D}from"./QBtn.335e29a9.js";import{c as i,h as c,r as N,Q as j,C as L,g as K}from"./index.bfd8a2bb.js";import{u as E,e as U,d as G,b as J,c as O}from"./use-ratio.54b0079b.js";var Z=S({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:o}){const n=i(()=>parseInt(e.lines,10)),f=i(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),y=i(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>c("div",{style:y.value,class:f.value},C(o.default))}}),p=S({name:"QAvatar",props:{...$,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:o}){const n=H(e),f=i(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),y=i(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const b=e.icon!==void 0?[c(M,{name:e.icon})]:void 0;return c("div",{class:f.value,style:n.value},[c("div",{class:"q-avatar__content row flex-center overflow-hidden",style:y.value},P(o.default,b))])}}});function T(e,o,n){return n<=o?o:Math.min(n,Math.max(o,e))}var ee=S({name:"QRating",props:{...$,...E,modelValue:{type:Number,required:!0},max:{type:[String,Number],default:5},icon:[String,Array],iconHalf:[String,Array],iconSelected:[String,Array],iconAriaLabel:[String,Array],color:[String,Array],colorHalf:[String,Array],colorSelected:[String,Array],noReset:Boolean,noDimming:Boolean,readonly:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{slots:o,emit:n}){const{proxy:{$q:f}}=K(),y=H(e),b=U(e),V=G(b),u=N(0);let m={};const g=i(()=>e.readonly!==!0&&e.disable!==!0),w=i(()=>`q-rating row inline items-center q-rating--${g.value===!0?"":"non-"}editable`+(e.noDimming===!0?" q-rating--no-dimming":"")+(e.disable===!0?" disabled":"")+(e.color!==void 0&&Array.isArray(e.color)===!1?` text-${e.color}`:"")),B=i(()=>{const l=Array.isArray(e.icon)===!0?e.icon.length:0,t=Array.isArray(e.iconSelected)===!0?e.iconSelected.length:0,r=Array.isArray(e.iconHalf)===!0?e.iconHalf.length:0,d=Array.isArray(e.color)===!0?e.color.length:0,v=Array.isArray(e.colorSelected)===!0?e.colorSelected.length:0,a=Array.isArray(e.colorHalf)===!0?e.colorHalf.length:0;return{iconLen:l,icon:l>0?e.icon[l-1]:e.icon,selIconLen:t,selIcon:t>0?e.iconSelected[t-1]:e.iconSelected,halfIconLen:r,halfIcon:r>0?e.iconHalf[t-1]:e.iconHalf,colorLen:d,color:d>0?e.color[d-1]:e.color,selColorLen:v,selColor:v>0?e.colorSelected[v-1]:e.colorSelected,halfColorLen:a,halfColor:a>0?e.colorHalf[a-1]:e.colorHalf}}),Q=i(()=>{if(typeof e.iconAriaLabel=="string"){const l=e.iconAriaLabel.length!==0?`${e.iconAriaLabel} `:"";return t=>`${l}${t}`}if(Array.isArray(e.iconAriaLabel)===!0){const l=e.iconAriaLabel.length;if(l>0)return t=>e.iconAriaLabel[Math.min(t,l)-1]}return(l,t)=>`${t} ${l}`}),R=i(()=>{const l=[],t=B.value,r=Math.ceil(e.modelValue),d=g.value===!0?0:null,v=e.iconHalf===void 0||r===e.modelValue?-1:r;for(let a=1;a<=e.max;a++){const s=u.value===0&&e.modelValue>=a||u.value>0&&u.value>=a,h=v===a&&u.value<a,A=u.value>0&&(h===!0?r:e.modelValue)>=a&&u.value<a,x=h===!0?a<=t.halfColorLen?e.colorHalf[a-1]:t.halfColor:t.selColor!==void 0&&s===!0?a<=t.selColorLen?e.colorSelected[a-1]:t.selColor:a<=t.colorLen?e.color[a-1]:t.color,F=(h===!0?a<=t.halfIconLen?e.iconHalf[a-1]:t.halfIcon:t.selIcon!==void 0&&(s===!0||A===!0)?a<=t.selIconLen?e.iconSelected[a-1]:t.selIcon:a<=t.iconLen?e.icon[a-1]:t.icon)||f.iconSet.rating.icon;l.push({name:(h===!0?a<=t.halfIconLen?e.iconHalf[a-1]:t.halfIcon:t.selIcon!==void 0&&(s===!0||A===!0)?a<=t.selIconLen?e.iconSelected[a-1]:t.selIcon:a<=t.iconLen?e.icon[a-1]:t.icon)||f.iconSet.rating.icon,attrs:{tabindex:d,role:"radio","aria-checked":e.modelValue===a?"true":"false","aria-label":Q.value(a,F)},iconClass:"q-rating__icon"+(s===!0||h===!0?" q-rating__icon--active":"")+(A===!0?" q-rating__icon--exselected":"")+(u.value===a?" q-rating__icon--hovered":"")+(x!==void 0?` text-${x}`:"")})}return l}),z=i(()=>{const l={role:"radiogroup"};return e.disable===!0&&(l["aria-disabled"]="true"),e.readonly===!0&&(l["aria-readonly"]="true"),l});function q(l){if(g.value===!0){const t=T(parseInt(l,10),1,parseInt(e.max,10)),r=e.noReset!==!0&&e.modelValue===t?0:t;r!==e.modelValue&&n("update:modelValue",r),u.value=0}}function I(l){g.value===!0&&(u.value=l)}function k(l,t){switch(l.keyCode){case 13:case 32:return q(t),L(l);case 37:case 40:return m[`rt${t-1}`]&&m[`rt${t-1}`].focus(),L(l);case 39:case 38:return m[`rt${t+1}`]&&m[`rt${t+1}`].focus(),L(l)}}function _(){u.value=0}return j(()=>{m={}}),()=>{const l=[];return R.value.forEach(({iconClass:t,name:r,attrs:d},v)=>{const a=v+1;l.push(c("div",{key:a,ref:s=>{m[`rt${a}`]=s},class:"q-rating__icon-container flex flex-center",...d,onClick(){q(a)},onMouseover(){I(a)},onMouseout:_,onFocus(){I(a)},onBlur:_,onKeyup(s){k(s,a)}},D(o[`tip-${a}`],[c(M,{class:t,name:r})])))}),e.name!==void 0&&e.disable!==!0&&V(l,"push"),c("div",{class:w.value,style:y.value,...z.value},l)}}}),te=S({name:"QResponsive",props:J,setup(e,{slots:o}){const n=O(e);return()=>c("div",{class:"q-responsive"},[c("div",{class:"q-responsive__filler overflow-hidden"},[c("div",{style:n.value})]),c("div",{class:"q-responsive__content absolute-full fit"},C(o.default))])}});export{Z as Q,p as a,te as b,ee as c};
