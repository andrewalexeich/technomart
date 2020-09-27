const content = document.getElementsByClassName("services__info");
const tab = document.getElementsByClassName("services__tab");

for (let i = 0; i < tab.length; i++) {
    if (tab[i].classList.contains("services__tab--active")) {
        content[i].style.display = "flex";
    }

    tab[i].addEventListener("click", (e) => {
        for (let k = 0; k < tab.length; k++) {
            content[k].style.display = "";
            tab[k].classList.remove("services__tab--active");
        }
        e.target.classList.add("services__tab--active");
        content[i].style.display = "flex";
    });
}