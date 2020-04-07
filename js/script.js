let sidemodal = document.querySelector("#sideModalTR");
let navwhatsapp = document.querySelector("#navwhatsapp");
let navbar = document.querySelector("#navbar");


let modalActive = false;



navwhatsapp.addEventListener("mouseenter", () => {
    if (!modalActive) {
        $('#sideModalTR').modal('show');
        navbar.style ="";
        modalActive = true;
    }

    
    console.log("mouseenter");
});

navwhatsapp.addEventListener("mouseleave", () => {
    $('#sideModalTR').modal('hide');
    modalActive = false;
    /*$('#sideModalTR').modal('hide');
    setTimeout(() => {
        modalActive = false;
    }, 500);*/

    console.log("mouseleave");
});

console.log(navwhatsapp);