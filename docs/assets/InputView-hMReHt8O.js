import{u as v,a as g}from"./programData-BV3P41c1.js";import{d as I,c as p,a as f,b as t,n as o,u as n,h as k,j as C,k as x,o as N,p as S,i as w,_ as V}from"./index-Ar7M8UHM.js";const l=s=>(S("data-v-a59c84c6"),s=s(),w(),s),$={id:"input-view"},y=l(()=>t("p",null,"集会のプログラム数を選んでください。",-1)),B=l(()=>t("p",null,"＜野外奉仕に励む＞",-1)),L=l(()=>t("p",null,"＜クリスチャンとして生活する＞",-1)),P=I({__name:"InputView",setup(s){const a=v(),{setMinistryNumber:u,setLifeNumber:c,addPrograms:m}=a,i=p(()=>a.ministryNumber),d=p(()=>a.lifeNumber),b=g().currentIndexIncrement;return(R,e)=>{const _=x("RouterLink");return N(),f("div",$,[y,B,t("div",null,[t("button",{class:o({bg_orange:i.value===2}),onClick:e[0]||(e[0]=r=>n(u)(2))},"2",2),t("button",{class:o({bg_orange:i.value===3}),onClick:e[1]||(e[1]=r=>n(u)(3))},"3",2),t("button",{class:o({bg_orange:i.value===4}),onClick:e[2]||(e[2]=r=>n(u)(4))},"4",2)]),L,t("div",null,[t("button",{class:o({bg_orange:d.value===1}),onClick:e[3]||(e[3]=r=>n(c)(1))},"1",2),t("button",{class:o({bg_orange:d.value===2}),onClick:e[4]||(e[4]=r=>n(c)(2))},"2",2)]),k(_,{to:"/ProgramView"},{default:C(()=>[t("button",{class:"add-button bg_orange",onClickOnce:e[5]||(e[5]=()=>{n(m)(),n(b)()})}," 決定 ",32)]),_:1})])}}}),E=V(P,[["__scopeId","data-v-a59c84c6"]]);export{E as default};
