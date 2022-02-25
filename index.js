let nav = document.querySelectorAll("nav ul li");
let content = document.querySelectorAll(".content > div");
let icon = document.querySelector("nav ul li span i")
nav.forEach(el => {
    content.forEach(con => {
        con.classList.add("active")
        el.addEventListener("click", function () {
            con.classList.remove("active")
            nav.forEach(el => {
                el.childNodes[1].innerHTML = `<i class="fa fa-solid fa-caret-down"></i>`
            })
            el.childNodes[1].innerHTML = `<i class="fa fa-solid fa-caret-right"></i>`

            if (el.dataset.category == con.getAttribute("class")) {
                con.style.display = "";
                console.log(el.childNodes[1].innerHTML)

            } else {
                con.style.display = "none"
            }
        })
    })
})
