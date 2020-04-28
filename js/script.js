$(document).ready(() => {

    // Sticky navigation
    $(".js--section-about").waypoint(function (direction) {
        if (direction == "down") {
            $(".navigation").addClass("navigation--sticky");
        } else {
            $(".navigation").removeClass("navigation--sticky");
        }
    }, {
        offset: "55px"
    });

    // Scroll on buttons
    $(".js--scroll-to-reserve").click(function () {
        $("html, body").animate({ scrollTop: $(".js--section-reserve").offset().top }, 1500);
    });

    $(".js--scroll-to-start").click(function () {
        $("html, body").animate({ scrollTop: $(".js--section-about").offset().top }, 1000);
    });

    $(".js--scroll-to-profit").click(function () {
        $("html, body").animate({ scrollTop: $(".js--section-profit").offset().top }, 1000);
    });

    $(".js--scroll-to-organisers").click(function () {
        $("html, body").animate({ scrollTop: $(".js--section-organisers").offset().top }, 1000);
    });

    // Animations on scroll 
    $(".js--section-about").waypoint(function () {
        this.element.querySelector(".heading-secondary").style.animation = "moveFromTop .75s ease-in forwards";
        this.element.querySelector(".section-about__features").style.animation = "appearance 1.5s .75s forwards";
    }, {
        offset: "50%"
    });

    $(".js--section-clients").waypoint(function () {
        this.element.querySelector(".section-clients__features").style.animation = "appearance 1.5s forwards";
    }, {
        offset: "50%"
    });

    $(".js--section-profit").waypoint(function () {
        this.element.querySelectorAll(".section-profit__item").forEach(function (elem) {
            elem.style.animation = "moveFromBottom 1s forwards";
        });
    }, {
        offset: "25%"
    });

    $(".js--section-organisers").waypoint(function () {
        this.element.querySelector(".section-organisers__box").style.animation = "moveFromBottom 1s forwards";
    }, {
        offset: "50%"
    })

    quotationsVisited = false;

    // Changing quotations on scroll
    $(".js--section-quotations").waypoint(function () {
        if (!quotationsVisited) {
            const quotations = Array.from(this.element.querySelectorAll(".quote-box__quotation"));
            const visible = "quote-box__quotation--visible";

            let i = 0;
            quotationsVisited = true;

            const waitForAnimation = index => {
                return new Promise((resolve, reject) => {
                    quotations[index].style.animation = "moveToRightScreen 1s ease-in forwards";

                    setTimeout(() => {
                        // waiting
                        resolve();
                    }, 900);
                });
            }

            setInterval(() => {
                waitForAnimation(i).then(() => {
                    quotations[i].classList.remove(visible);

                    i = (i === 3) ? 0 : i + 1;

                    quotations[i].style.animation = "moveFromLeftScreen 1s ease-out 1.25s backwards";
                    quotations[i].classList.add(visible);
                });
            }, 5000);


        }
    }, {
        offset: "25%"
    });
});