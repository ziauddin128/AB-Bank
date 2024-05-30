//small screen hamburger menu
var menu_btn = document.querySelector("#menu_btn");
var menu_icon = document.querySelector("#menu_btn > i");
var menu = document.querySelector(".menu");

menu_btn.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");

    if (menu_icon.classList.contains("ri-menu-line")) {
        menu_icon.classList.remove("ri-menu-line");
        menu_icon.classList.add("ri-close-line");
    } else {
        menu_icon.classList.remove("ri-close-line");
        menu_icon.classList.add("ri-menu-line");
    }
})

//review section
var user_pics = document.querySelectorAll(".user_pic");
var user_texts = document.querySelectorAll(".user_text");
function show_review()
{
    for (const user_pic of user_pics) {
        user_pic.classList.remove("active");
    }
    for (const user_text of user_texts) {
        user_text.classList.remove("active");
    }
    var i = Array.from(user_pics).indexOf(event.target);

    user_pics[i].classList.add("active");
    user_texts[i].classList.add("active");
}

//pricing toggle 
var toggle_btn = document.querySelector("#toggle_btn");

var card_1_front = document.querySelector("#card_1_front");
var card_1_back = document.querySelector("#card_1_back");

var card_2_front = document.querySelector("#card_2_front");
var card_2_back = document.querySelector("#card_2_back");

var card_3_front = document.querySelector("#card_3_front");
var card_3_back = document.querySelector("#card_3_back");

toggle_btn.addEventListener("change", function()
{
    card_1_front.classList.toggle("-rotate-y-180");
    card_1_back.classList.toggle("rotate-y-180");

    card_2_front.classList.toggle("-rotate-y-180");
    card_2_back.classList.toggle("rotate-y-180");

    card_3_front.classList.toggle("-rotate-y-180");
    card_3_back.classList.toggle("rotate-y-180");
})

