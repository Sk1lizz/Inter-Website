! function() {

    // Голы
    const n = [{ number: "1.", name: "Костич", counter: "2" },
            { number: "2.", name: "Волконский", counter: "1" },
            { number: "3.", name: "Шеин", counter: "1" },
            { number: "4.", name: "Петрищев", counter: "1" },
            { number: "6.", name: "Пашаев", counter: "1" },
            { number: "7.", name: "Пожидаев", counter: "1" }
        ],

        // Ассисты

        e = [{ number: "1.", name: "Власов", counter: "1" },
            { number: "2.", name: "Пашаев", counter: "1" },
            { number: "3.", name: "Долгов", counter: "1" },
            { number: "4.", name: "Костич", counter: "1" },
        ],

        // Вратари
        t = [{ number: "1.", name: "Сыпченко", counter: "11" },
            { number: "3.", name: "Исаев", counter: "6" },
            { number: "2.", name: "Мищенко", counter: "4" }
        ],

        // Матчей на 0
        a = [{ number: "1.", name: "-", counter: "-" }],

        // Дзанетти приз
        r = [{ name: "Батуев", training: 11 },
            { name: "Белоножкин", training: 7 },
            { name: "Бутин", training: 11 },
            { name: "Власов", training: 11 },
            { name: "Волконский", training: 10 },
            { name: "Долгов", training: 15 },
            { name: "Швамбергер", training: 5 },
            { name: "Исаев", training: 8 },
            { name: "Пашаев", training: 4 },
            { name: "Королев", training: 13 },
            { name: "Костич", training: 7 },
            { name: "Ларин", training: 2 },
            { name: "Матвеев", training: 18 },
            { name: "Мищенко", training: 3 },
            { name: "Петрищев", training: 19 },
            { name: "Родионов", training: 0 },
            { name: "Тапчан", training: 0 },
            { name: "Савельев", training: 8 },
            { name: "Салимгареев", training: 15 },
            { name: "Сыпченко", training: 8 },
            { name: "Амири", training: 14 },
            { name: "Шаропов", training: 15 },
            { name: "Шеин", training: 11 },
            { name: "Юсуф", training: 3 },
            { name: "Иванов", training: 8 }
        ],

        i = n => n.sort(((n, e) => parseInt(e.counter) - parseInt(n.counter)));
    i(n), i(e);
    const s = n => { n.forEach(((n, e) => { n.number = `${e+1}.` })) };
    s(n), s(e);
    const c = {};
    n.forEach((n => { c[n.name] = { name: n.name, goals: parseInt(n.counter) || 0, assists: 0 } })), e.forEach((n => { c[n.name] ? c[n.name].assists = parseInt(n.counter) || 0 : c[n.name] = { name: n.name, goals: 0, assists: parseInt(n.counter) || 0 } }));
    const o = Object.values(c);
    o.sort(((n, e) => { const t = n.goals + n.assists; return e.goals + e.assists - t }));
    const m = document.querySelector(".goals-list"),
        u = document.querySelector(".assists-list"),
        l = document.querySelector(".goals-assists-list");
    n.forEach((n => {
        const e = document.createElement("li");
        e.innerHTML = `\n    <div class="number">${n.number}</div>\n    <div class="player">${n.name}</div>\n    <div class="counter">${n.counter}</div>\n    `, m.appendChild(e)
    })), e.forEach((n => {
        const e = document.createElement("li");
        e.innerHTML = `\n    <div class="number">${n.number}</div>\n    <div class="player">${n.name}</div>\n    <div class="counter">${n.counter}</div>\n    `, u.appendChild(e)
    })), o.forEach(((n, e) => {
        const t = document.createElement("li");
        t.innerHTML = `\n    <div class="number">${e+1}.</div>\n    <div class="player">${n.name}</div>\n    <div class="total">${n.goals+n.assists}</div>\n    `, l.appendChild(t)
    }));
    const d = document.querySelector(".goalkeepers-list");
    t.sort(((n, e) => parseInt(e.counter) - parseInt(n.counter))), t.forEach((n => {
        const e = document.createElement("li");
        e.innerHTML = `\n        <div class="number">${n.number}</div>\n        <div class="player">${n.name}</div>\n        <div class="counter">${n.counter}</div>\n    `, d.appendChild(e)
    }));
    const g = document.querySelector(".goalkeepers-list-zero");
    a.sort(((n, e) => parseInt(e.counter) - parseInt(n.counter))), a.forEach((n => {
        const e = document.createElement("li");
        e.innerHTML = `\n<div class="number">${n.number}</div>\n<div class="player">${n.name}</div>\n<div class="counter">${n.counter}</div>\n`, g.appendChild(e)
    }));
    const v = document.querySelector(".zanetti_top-list");
    r.sort(((n, e) => e.training - n.training)), r.slice(0, 3).forEach(((n, e) => {
        const t = document.createElement("li");
        t.innerHTML = `\n<div class="position">${e+1+"."}</div>\n<div class="name">${n.name}</div>\n<div class="training">${n.training}</div>\n`, v.appendChild(t)
    }));
    const p = parseInt(document.querySelector(".goals .number").textContent) - parseInt(document.querySelector(".goals_conceded .number").textContent);
    document.querySelector(".difference .number").textContent = `${p>=0?"+":""}${p}`
}();