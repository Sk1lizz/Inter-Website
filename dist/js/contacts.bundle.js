! function() {
    const e = document.querySelector("form"),
        t = document.querySelector("name"),
        a = document.querySelector("email"),
        m = document.querySelector("message");
    e.addEventListener("submit", (e => {
        e.preventDefault(),
            function() {
                const e = `Full Name: ${t.value}<br>) Email:${a.value}  Message:${m.value} `;
                Email.send({ Host: "smtp.elasticemail.com", Username: "skvanter@gmail.com", Password: "E4A84136D0F50B9D128B323F3654F9512686", To: "skvanter@gmail.com", From: "skvanter@gmail.com", Subject: subject.value, Body: e }).then((e => alert(e)))
            }()
    }))
}();