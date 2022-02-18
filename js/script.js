/* ---------------função: menu-hamburger */
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
    if (event.type === "touchstart") {
        event.preventDefault();
        const nav = document.getElementById("nav");
        nav.classList.toggle("active");

        const active = nav.classList.contains("active");

        event.currentTarget.setAttribute("aria-expanded", active);

        if (active) {
            event.currentTarget.setAttribute("aria-label", "Fechar menu");
        } else {
            event.currentTarget.setAttribute("aria-label", "Abrir menu");
        }
    }
}
btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

/* -------------------------------------------------------- */

/* ---------------função: accordionList----------------------------------------- */

function initAccordion() {
    const accordionList = document.querySelectorAll(".js-accordion dt");

    const classAtivo = "ativo";
    if (accordionList.length) {
        accordionList[0].classList.add(classAtivo);
        accordionList[0].nextElementSibling.classList.add(classAtivo);

        function activeAccordion() {
            this.classList.toggle(classAtivo);
            //selecionando o elemento após o dt:

            this.nextElementSibling.classList.toggle(classAtivo);
        }

        accordionList.forEach((itens) => {
            itens.addEventListener("click", activeAccordion);
        });
    }
}

initAccordion();

function initLink() {
    const links = document.querySelectorAll("#header-menu a ");
    if (links.length) {
        function ativarLinks(link) {
            const url = location.href;
            const href = link.href;

            if (url.includes(href)) {
                link.classList.toggle("ativo");
            }
            links.forEach((lnk) => lnk.classList.toggle("ativo"));
        }

        //evento p links
        links.forEach(ativarLinks);
    }
}

initLink();

////Data e hora:

function horario() {
    const decHorario = document.querySelector(".dec");
    if (decHorario) {
        let textoDec = document.querySelector(".textoDec");
        let dataAtual = new Date();
        let horaAtual = dataAtual.getHours();
        if (horaAtual >= 9 && horaAtual <= 17) {
            textoDec.innerText = "Aberto";
            decHorario.src = "./img/atividades/icons/dec-aberto.svg";
        } else {
            textoDec.innerText = "Fechado";
            decHorario.src = "./img/atividades/icons/dec-fechado.svg";
        }
    }
}
horario();