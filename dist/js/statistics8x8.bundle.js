!function(){const e=[{number:"1.",name:"Костич",counter:"6"},{number:"2.",name:"Языков",counter:"22"},{number:"3.",name:"Макарчев",counter:"3"},{number:"4.",name:"Волконский",counter:"3"},{number:"5.",name:"Шеин",counter:"2"},{number:"6.",name:"Матвеев",counter:"2"},{number:"7.",name:"Белкин",counter:"1"},{number:"8.",name:"Голуб",counter:"8"},{number:"9.",name:"Власов",counter:"1"},{number:"10.",name:"Касулин",counter:"1"},{number:"11.",name:"Белоножкин",counter:"2"},{number:"12.",name:"Автогол",counter:"1"},{number:"13.",name:"Абянов",counter:"1"}],n=[{number:"1.",name:"Макарчев",counter:"1"},{number:"1.",name:"Власов",counter:"4"},{number:"1.",name:"Мищенко",counter:"1"},{number:"1.",name:"Белоножкин",counter:"5"},{number:"1.",name:"Языков",counter:"8"},{number:"1.",name:"Шеин",counter:"4"},{number:"1.",name:"Петрищев",counter:"1"},{number:"1.",name:"Синицын",counter:"2"},{number:"1.",name:"Костич",counter:"4"},{number:"1.",name:"Матвеев",counter:"1"},{number:"1.",name:"Котов",counter:"2"},{number:"1.",name:"Голуб",counter:"4"},{number:"1.",name:"Волконский",counter:"3"},{number:"1.",name:"Тапчан",counter:"2"}],r=e=>e.sort(((e,n)=>parseInt(n.counter)-parseInt(e.counter)));r(e),r(n);const t=e=>{e.forEach(((e,n)=>{e.number=`${n+1}.`}))};t(e),t(n);const a={};e.forEach((e=>{a[e.name]={name:e.name,goals:parseInt(e.counter)||0,assists:0}})),n.forEach((e=>{a[e.name]?a[e.name].assists=parseInt(e.counter)||0:a[e.name]={name:e.name,goals:0,assists:parseInt(e.counter)||0}}));const u=Object.values(a);u.sort(((e,n)=>{const r=e.goals+e.assists;return n.goals+n.assists-r}));const c=document.querySelector(".goals-list"),s=document.querySelector(".assists-list"),m=document.querySelector(".goals-assists-list");e.forEach((e=>{const n=document.createElement("li");n.innerHTML=`\n            <div class="number">${e.number}</div>\n            <div class="player">${e.name}</div>\n            <div class="counter">${e.counter}</div>\n        `,c.appendChild(n)})),n.forEach((e=>{const n=document.createElement("li");n.innerHTML=`\n            <div class="number">${e.number}</div>\n            <div class="player">${e.name}</div>\n            <div class="counter">${e.counter}</div>\n        `,s.appendChild(n)})),u.forEach(((e,n)=>{const r=document.createElement("li");r.innerHTML=`\n            <div class="number">${n+1}.</div>\n            <div class="player">${e.name}</div>\n            <div class="total">${e.goals+e.assists}</div>\n        `,m.appendChild(r)}));const o=[{number:"2.",name:"Мищенко",counter:"13"},{number:"1.",name:"Мытько",counter:"24"},{number:"3.",name:"Исаев",counter:"12"},{number:"4.",name:"Сыпченко",counter:"4"}],i=document.querySelector(".goalkeepers-list");o.sort(((e,n)=>parseInt(n.counter)-parseInt(e.counter))),o.forEach((e=>{const n=document.createElement("li");n.innerHTML=`\n        <div class="number">${e.number}</div>\n        <div class="player">${e.name}</div>\n        <div class="counter">${e.counter}</div>\n    `,i.appendChild(n)}));const l=[{number:"1.",name:"-",counter:"-"}],d=document.querySelector(".goalkeepers-list-zero");l.sort(((e,n)=>parseInt(n.counter)-parseInt(e.counter))),l.forEach((e=>{const n=document.createElement("li");n.innerHTML=`\n<div class="number">${e.number}</div>\n<div class="player">${e.name}</div>\n<div class="counter">${e.counter}</div>\n`,d.appendChild(n)}))}();