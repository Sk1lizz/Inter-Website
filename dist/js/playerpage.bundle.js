! function() {
    let e, t = new Date,
        n = new Date(t.getFullYear(), t.getMonth(), t.getDate()),
        a = document.getElementById("birthday").textContent.split("."),
        l = new Date(parseInt(a[2]), parseInt(a[1]) - 1, parseInt(a[0])),
        o = new Date(n.getFullYear(), l.getMonth(), l.getDate());
    e = n.getFullYear() - l.getFullYear(), n < o && (e -= 1), document.getElementById("age").textContent = `${e} лет`;
    let g, r = document.getElementById("datateamTime").textContent.split("."),
        d = new Date(parseInt(r[2]), parseInt(r[1]) - 1, parseInt(r[0])),
        h = new Date(n.getFullYear(), d.getMonth(), d.getDate());
    g = n.getFullYear() - d.getFullYear(), n < h && (g -= 1);
    let s = n.getMonth() - d.getMonth();
    s < 0 && (s += 12), g += s / 12;
    let i = `${Math.floor(g)}`;
    if (i.endsWith("1") ? i += " год" : i.endsWith("2") || i.endsWith("3") || i.endsWith("4") ? i += " года" : i += " лет", 0 === g) i = "Меньше месяца";
    else if (g < 1) {
        i = "";
        let e = `${Math.floor(12*g-12*Math.floor(g))}`;
        e += "1" === e ? " месяц" : e >= "2" && e <= "4" ? " месяца" : " месяцев", i += ` ${e}`
    } else {
        let e = `${Math.floor(12*g-12*Math.floor(g))}`;
        e += "1" === e ? " месяц" : e >= "2" && e <= "4" ? " месяца" : " месяцев", i += ` ${e}`
    }
    document.getElementById("datateamTime").textContent = i
}();