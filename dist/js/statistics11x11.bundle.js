!function(){const n=[{number:"1.",name:"Костич",counter:"2"},{number:"2.",name:"Волконский",counter:"1"},{number:"3.",name:"Шеин",counter:"1"},{number:"4.",name:"Петрищев",counter:"1"},{number:"6.",name:"Пашаев",counter:"1"},{number:"7.",name:"Пожидаев",counter:"1"}],e=[{number:"1.",name:"Власов",counter:"1"},{number:"2.",name:"Пашаев",counter:"1"},{number:"3.",name:"Долгов",counter:"1"},{number:"4.",name:"Костич",counter:"1"}],t=[{number:"1.",name:"Сыпченко",counter:"13"},{number:"2.",name:"Мищенко",counter:"4"},{number:"3.",name:"Исаев",counter:"9"}],a=[{number:"1.",name:"-",counter:"-"}],r=[{name:"Батуев",training:14},{name:"Белоножкин",training:7},{name:"Бутин",training:11},{name:"Власов",training:16},{name:"Волконский",training:13},{name:"Долгов",training:16},{name:"Швамбергер",training:10},{name:"Исаев",training:8},{name:"Пашаев",training:4},{name:"Королев Д.",training:16},{name:"Костич",training:9},{name:"Ларин",training:6},{name:"Матвеев",training:27},{name:"Мищенко",training:3},{name:"Петрищев",training:28},{name:"Родионов",training:0},{name:"Тапчан",training:0},{name:"Савельев",training:11},{name:"Салимгареев",training:21},{name:"Сыпченко",training:13},{name:"Амири",training:23},{name:"Шаропов",training:23},{name:"Шеин",training:20},{name:"Юсуф",training:4},{name:"Иванов",training:15},{name:"Аралекян",training:5},{name:"Демидов",training:1},{name:"Королев И.",training:6},{name:"Пожидаев",training:19},{name:"Хамзин",training:2},{name:"Турнусов",training:2},{name:"Штепа",training:2},{name:"Полевой",training:2},{name:"Нишанов",training:2},{name:"Саидов",training:2}],i=n=>n.sort(((n,e)=>parseInt(e.counter)-parseInt(n.counter)));i(n),i(e);const s=n=>{n.forEach(((n,e)=>{n.number=`${e+1}.`}))};s(n),s(e);const o={};n.forEach((n=>{o[n.name]={name:n.name,goals:parseInt(n.counter)||0,assists:0}})),e.forEach((n=>{o[n.name]?o[n.name].assists=parseInt(n.counter)||0:o[n.name]={name:n.name,goals:0,assists:parseInt(n.counter)||0}}));const c=Object.values(o);c.sort(((n,e)=>{const t=n.goals+n.assists;return e.goals+e.assists-t}));const m=document.querySelector(".goals-list"),u=document.querySelector(".assists-list"),l=document.querySelector(".goals-assists-list");n.forEach((n=>{const e=document.createElement("li");e.innerHTML=`\n    <div class="number">${n.number}</div>\n    <div class="player">${n.name}</div>\n    <div class="counter">${n.counter}</div>\n    `,m.appendChild(e)})),e.forEach((n=>{const e=document.createElement("li");e.innerHTML=`\n    <div class="number">${n.number}</div>\n    <div class="player">${n.name}</div>\n    <div class="counter">${n.counter}</div>\n    `,u.appendChild(e)})),c.forEach(((n,e)=>{const t=document.createElement("li");t.innerHTML=`\n    <div class="number">${e+1}.</div>\n    <div class="player">${n.name}</div>\n    <div class="total">${n.goals+n.assists}</div>\n    `,l.appendChild(t)}));const d=document.querySelector(".goalkeepers-list");t.sort(((n,e)=>parseInt(e.counter)-parseInt(n.counter))),t.forEach((n=>{const e=document.createElement("li");e.innerHTML=`\n        <div class="number">${n.number}</div>\n        <div class="player">${n.name}</div>\n        <div class="counter">${n.counter}</div>\n    `,d.appendChild(e)}));const g=document.querySelector(".goalkeepers-list-zero");a.sort(((n,e)=>parseInt(e.counter)-parseInt(n.counter))),a.forEach((n=>{const e=document.createElement("li");e.innerHTML=`\n<div class="number">${n.number}</div>\n<div class="player">${n.name}</div>\n<div class="counter">${n.counter}</div>\n`,g.appendChild(e)}));const p=document.querySelector(".zanetti_top-list");r.sort(((n,e)=>e.training-n.training)),r.slice(0).forEach(((n,e)=>{const t=document.createElement("li");t.innerHTML=`\n<div class="position">${e+1+"."}</div>\n<div class="name">${n.name}</div>\n<div class="training">${n.training}</div>\n`,p.appendChild(t)}));const v=parseInt(document.querySelector(".goals .number").textContent)-parseInt(document.querySelector(".goals_conceded .number").textContent);document.querySelector(".difference .number").textContent=`${v>=0?"+":""}${v}`;const b=document.querySelector(".goals-list-top");createListItems(n,b);const $=document.querySelector(".assists-list-top");createListItems(e,$);const y=document.querySelector(".goals-assists-list-top");createListItems(c,y);const I=document.querySelector(".goalkeepers-list-top");createListItems(t,I);const E=document.querySelector(".goalkeepers-list-zero-top");createListItems(a,E);const h=document.querySelector(".zanetti_top-list-top");createListItems(r,h),document.addEventListener("DOMContentLoaded",(function(){}))}();