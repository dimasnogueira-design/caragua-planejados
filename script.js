document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
    LOADER
    ===================================================== */

    const loader =
        document.getElementById("loader");

    const loaderProgress =
        document.getElementById("loaderProgress");

    const loaderPercent =
        document.getElementById("loaderPercent");


    if (
        loader &&
        loaderProgress &&
        loaderPercent
    ) {

        let progress = 0;


        const loadingInterval =
            setInterval(() => {

                progress +=
                    Math.floor(
                        Math.random() * 9
                    ) + 3;


                if (progress >= 100) {

                    progress = 100;

                    clearInterval(
                        loadingInterval
                    );


                    setTimeout(() => {

                        loader
                            .classList
                            .add("hidden");

                    }, 350);

                }


                loaderProgress
                    .style
                    .width =
                        `${progress}%`;


                loaderPercent
                    .textContent =
                        `${progress}%`;

            }, 65);

    }



    /* =====================================================
    HEADER
    ===================================================== */

    const header =
        document.getElementById("header");


    if (header) {

        window.addEventListener(
            "scroll",
            () => {

                header
                    .classList
                    .toggle(
                        "scrolled",
                        window.scrollY > 50
                    );

            }
        );

    }



    /* =====================================================
    MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById(
            "menuToggle"
        );

    const nav =
        document.getElementById("nav");


    if (
        menuToggle &&
        nav
    ) {

        menuToggle.addEventListener(
            "click",
            () => {

                nav
                    .classList
                    .toggle("open");


                document.body
                    .classList
                    .toggle("menu-open");

            }
        );


        document
            .querySelectorAll(".nav a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        nav
                            .classList
                            .remove("open");


                        document.body
                            .classList
                            .remove(
                                "menu-open"
                            );

                    }
                );

            });

    }



    /* =====================================================
    REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    const revealObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add("visible");


                            revealObserver
                                .unobserve(
                                    entry.target
                                );

                        }

                    }
                );

            },

            {
                threshold: .12
            }

        );


    revealElements.forEach(
        element => {

            revealObserver
                .observe(element);

        }
    );



    /* =====================================================
    COUNTERS
    ===================================================== */

    const counters =
        document.querySelectorAll(
            ".counter"
        );


    const counterObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) return;


                        const element =
                            entry.target;


                        const target =
                            Number(
                                element.dataset.target
                            );


                        const duration =
                            1100;


                        const startTime =
                            performance.now();


                        function animateCounter(
                            time
                        ) {

                            const progress =
                                Math.min(
                                    (
                                        time -
                                        startTime
                                    )
                                    /
                                    duration,
                                    1
                                );


                            const eased =
                                1 -
                                Math.pow(
                                    1 - progress,
                                    3
                                );


                            element.textContent =
                                Math.floor(
                                    target * eased
                                )
                                .toLocaleString(
                                    "pt-BR"
                                );


                            if (
                                progress < 1
                            ) {

                                requestAnimationFrame(
                                    animateCounter
                                );

                            }

                        }


                        requestAnimationFrame(
                            animateCounter
                        );


                        counterObserver
                            .unobserve(
                                element
                            );

                    }
                );

            },

            {
                threshold: .5
            }

        );


    counters.forEach(counter => {

        counterObserver
            .observe(counter);

    });



    /* =====================================================
    GOOGLE AUDIT
    ===================================================== */

    const auditData = {

        planejados: {

            query:
                "móveis planejados Caraguatatuba",

            position:
                "FORA DO TOP 3",

            badge:
                "OPORTUNIDADE",

            tone:
                "opportunity",

            local:
                "Na captura analisada, o bloco local exibiu M.A.P Móveis Planejados, Decorplan e Aqua Villa.",

            organic:
                "Concorrentes com domínio próprio já ocupam espaço relevante nos resultados orgânicos abaixo do mapa.",

            insight:
                "Existe espaço para ampliar presença em uma das buscas mais amplas da categoria."

        },


        cozinha: {

            query:
                "cozinha planejada Caraguatatuba",

            position:
                "#03 LOCAL",

            badge:
                "PRESENTE",

            tone:
                "good",

            local:
                "A captura exibiu KW Interiores, Aqua Villa e Caraguá Planejados entre os três negócios do bloco local.",

            organic:
                "Concorrentes com páginas próprias também disputam essa intenção específica de pesquisa.",

            insight:
                "A autoridade local já existe. O site adiciona profundidade e conteúdo específico para cozinhas."

        },


        sobmedida: {

            query:
                "móveis sob medida Caraguatatuba",

            position:
                "#01 LOCAL",

            badge:
                "FORTE",

            tone:
                "good",

            local:
                "Caraguá Planejados apareceu como o primeiro negócio exibido no bloco local da captura.",

            organic:
                "Depois do mapa, sites próprios de concorrentes disputam o restante da página.",

            insight:
                "Reputação local forte com oportunidade de ampliar também a presença orgânica."

        },


        closet: {

            query:
                "closet planejado Caraguatatuba",

            position:
                "#01 LOCAL",

            badge:
                "FORTE",

            tone:
                "good",

            local:
                "Caraguá Planejados apareceu como o primeiro negócio do bloco local exibido.",

            organic:
                "Nos resultados seguintes aparecem páginas específicas relacionadas a móveis e closets planejados.",

            insight:
                "Categorias específicas podem virar páginas fortes dentro do portfólio e da estratégia de busca."

        },


        comercial: {

            query:
                "móveis planejados para comércio Caraguatatuba",

            position:
                "#02 LOCAL",

            badge:
                "PRESENTE",

            tone:
                "good",

            local:
                "Decorplan apareceu primeiro, Caraguá Planejados em segundo e M.A.P em terceiro no bloco local.",

            organic:
                "Existem também páginas direcionadas especificamente a lojas e ambientes comerciais.",

            insight:
                "O segmento comercial já demonstra relevância e pode ganhar apresentação própria dentro do site."

        },


        marcenaria: {

            query:
                "marcenaria sob medida Caraguatatuba",

            position:
                "FORA DO TOP 3",

            badge:
                "OPORTUNIDADE",

            tone:
                "opportunity",

            local:
                "O bloco local exibido trouxe São José, IMH Realize e O Marceneiro Planejados.",

            organic:
                "Resultados orgânicos apresentam sites e diretórios ligados à marcenaria e móveis sob medida.",

            insight:
                "Há espaço para ampliar relevância também pela linguagem de marcenaria."

        }

    };


    const auditContent =
        document.getElementById(
            "auditContent"
        );

    const auditQuery =
        document.getElementById(
            "auditQuery"
        );

    const auditPosition =
        document.getElementById(
            "auditPosition"
        );

    const auditBadge =
        document.getElementById(
            "auditBadge"
        );

    const auditLocal =
        document.getElementById(
            "auditLocal"
        );

    const auditOrganic =
        document.getElementById(
            "auditOrganic"
        );

    const auditInsight =
        document.getElementById(
            "auditInsight"
        );


    document
        .querySelectorAll(".audit-tag")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const key =
                        button.dataset.audit;


                    const item =
                        auditData[key];


                    if (!item) return;


                    document
                        .querySelectorAll(
                            ".audit-tag"
                        )
                        .forEach(tag => {

                            tag
                                .classList
                                .remove(
                                    "active"
                                );

                        });


                    button
                        .classList
                        .add("active");


                    auditContent
                        ?.classList
                        .add("changing");


                    setTimeout(() => {

                        if (auditQuery) {

                            auditQuery.textContent =
                                item.query;

                        }


                        if (auditPosition) {

                            auditPosition.textContent =
                                item.position;

                        }


                        if (auditBadge) {

                            auditBadge.textContent =
                                item.badge;


                            auditBadge.className =
                                `audit-badge ${item.tone}`;

                        }


                        if (auditLocal) {

                            auditLocal.textContent =
                                item.local;

                        }


                        if (auditOrganic) {

                            auditOrganic.textContent =
                                item.organic;

                        }


                        if (auditInsight) {

                            auditInsight.textContent =
                                item.insight;

                        }


                        auditContent
                            ?.classList
                            .remove(
                                "changing"
                            );

                    }, 170);

                }
            );

        });



    /* =====================================================
    LIGHTBOX
    ===================================================== */

    const lightbox =
        document.getElementById(
            "lightbox"
        );

    const lightboxImage =
        document.getElementById(
            "lightboxImage"
        );

    const lightboxTitle =
        document.getElementById(
            "lightboxTitle"
        );

    const lightboxClose =
        document.getElementById(
            "lightboxClose"
        );


    document
        .querySelectorAll(
            ".project-card"
        )
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    if (
                        !lightbox ||
                        !lightboxImage ||
                        !lightboxTitle
                    ) return;


                    lightboxImage.src =
                        card.dataset.image;


                    lightboxTitle.textContent =
                        card.dataset.title;


                    lightbox
                        .classList
                        .add("open");


                    document.body
                        .style
                        .overflow =
                            "hidden";

                }
            );

        });


    function closeLightbox() {

        if (!lightbox) return;


        lightbox
            .classList
            .remove("open");


        document.body
            .style
            .overflow =
                "";

    }


    lightboxClose
        ?.addEventListener(
            "click",
            closeLightbox
        );


    lightbox
        ?.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    lightbox
                ) {

                    closeLightbox();

                }

            }
        );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Escape"
            ) {

                closeLightbox();

            }

        }
    );



    /* =====================================================
    CONFIGURADOR
    ===================================================== */

    const rooms =
        document.querySelectorAll(
            ".room"
        );

    const selectedRoom =
        document.getElementById(
            "selectedRoom"
        );

    const whatsappPreview =
        document.getElementById(
            "whatsappPreview"
        );

    const whatsappText =
        document.getElementById(
            "whatsappText"
        );

    const simulateWhatsapp =
        document.getElementById(
            "simulateWhatsapp"
        );


    let currentRoom =
        "Cozinha";


    rooms.forEach(room => {

        room.addEventListener(
            "click",
            () => {

                rooms.forEach(item => {

                    item
                        .classList
                        .remove("active");

                });


                room
                    .classList
                    .add("active");


                currentRoom =
                    room.dataset.room;


                if (selectedRoom) {

                    selectedRoom.textContent =
                        currentRoom;

                }


                whatsappPreview
                    ?.classList
                    .remove("show");

            }
        );

    });


    simulateWhatsapp
        ?.addEventListener(
            "click",
            () => {

                if (
                    !whatsappText ||
                    !whatsappPreview
                ) return;


                whatsappText.textContent =
                    `Olá! Conheci a Caraguá Planejados pelo site e gostaria de conversar sobre um projeto para ${currentRoom.toLowerCase()}.`;


                whatsappPreview
                    .classList
                    .add("show");

            }
        );



    /* =====================================================
    CALCULADORA — DILUIÇÃO DO INVESTIMENTO
    ===================================================== */

    const ticketInput =
        document.getElementById(
            "ticket"
        );

    const projectsInput =
        document.getElementById(
            "projects"
        );

    const projectsValue =
        document.getElementById(
            "projectsValue"
        );

    const firstYearInvestment =
        document.getElementById(
            "firstYearInvestment"
        );

    const investmentPerProject =
        document.getElementById(
            "investmentPerProject"
        );

    const ticketPercent =
        document.getElementById(
            "ticketPercent"
        );

    const projectSentence =
        document.getElementById(
            "projectSentence"
        );

    const amortizationText =
        document.getElementById(
            "amortizationText"
        );


    const SITE_SETUP =
        1790;


    const MONTHLY_HOSTING =
        49.90;


    const YEARLY_HOSTING =
        MONTHLY_HOSTING * 12;


    const FIRST_YEAR_TOTAL =
        SITE_SETUP +
        YEARLY_HOSTING;


    function formatCurrency(
        value
    ) {

        return new Intl
            .NumberFormat(
                "pt-BR",
                {
                    style:
                        "currency",

                    currency:
                        "BRL",

                    minimumFractionDigits:
                        2,

                    maximumFractionDigits:
                        2
                }
            )
            .format(value);

    }


    function formatPercent(
        value
    ) {

        return value
            .toFixed(1)
            .replace(".", ",")
            + "%";

    }


    function updateCalculator() {

        if (
            !ticketInput ||
            !projectsInput
        ) return;


        const ticket =
            Math.max(
                Number(
                    ticketInput.value
                ) || 0,
                0
            );


        const projects =
            Math.max(
                Number(
                    projectsInput.value
                ) || 1,
                1
            );


        const perProject =
            FIRST_YEAR_TOTAL /
            projects;


        const percentage =
            ticket > 0
            ? (
                perProject /
                ticket
              ) * 100
            : 0;


        if (projectsValue) {

            projectsValue.textContent =
                projects;

        }


        if (firstYearInvestment) {

            firstYearInvestment
                .textContent =
                    formatCurrency(
                        FIRST_YEAR_TOTAL
                    );

        }


        if (investmentPerProject) {

            investmentPerProject
                .textContent =
                    formatCurrency(
                        perProject
                    );

        }


        if (ticketPercent) {

            ticketPercent
                .textContent =
                    formatPercent(
                        percentage
                    );

        }


        if (projectSentence) {

            projectSentence.textContent =
                projects === 1

                ? "considerando 1 projeto"

                : `considerando ${projects} projetos`;

        }


        if (amortizationText) {

            const projectLabel =
                projects === 1
                ? "projeto"
                : "projetos";


            amortizationText.textContent =
                `Com ${projects} ${projectLabel} de ${formatCurrency(ticket)}, o investimento digital do primeiro ano representa aproximadamente ${formatCurrency(perProject)} por projeto, cerca de ${formatPercent(percentage)} do ticket médio.`;

        }

    }


    ticketInput
        ?.addEventListener(
            "input",
            updateCalculator
        );


    projectsInput
        ?.addEventListener(
            "input",
            updateCalculator
        );


    updateCalculator();



    /* =====================================================
    CUSTOM CURSOR
    ===================================================== */

    const cursorDot =
        document.querySelector(
            ".cursor-dot"
        );

    const cursorRing =
        document.querySelector(
            ".cursor-ring"
        );


    if (
        cursorDot &&
        cursorRing &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        let mouseX = 0;
        let mouseY = 0;

        let ringX = 0;
        let ringY = 0;


        document.addEventListener(
            "mousemove",
            event => {

                mouseX =
                    event.clientX;

                mouseY =
                    event.clientY;


                cursorDot
                    .style
                    .left =
                        `${mouseX}px`;


                cursorDot
                    .style
                    .top =
                        `${mouseY}px`;

            }
        );


        function animateCursor() {

            ringX +=
                (
                    mouseX -
                    ringX
                ) * .12;


            ringY +=
                (
                    mouseY -
                    ringY
                ) * .12;


            cursorRing
                .style
                .left =
                    `${ringX}px`;


            cursorRing
                .style
                .top =
                    `${ringY}px`;


            requestAnimationFrame(
                animateCursor
            );

        }


        animateCursor();


        document
            .querySelectorAll(
                "a, button, .project-card"
            )
            .forEach(element => {

                element.addEventListener(
                    "mouseenter",
                    () => {

                        cursorRing
                            .classList
                            .add("hover");

                    }
                );


                element.addEventListener(
                    "mouseleave",
                    () => {

                        cursorRing
                            .classList
                            .remove("hover");

                    }
                );

            });

    }

});