let sidemodal = document.querySelector("#sideModalTR");
let navwhatsapp = document.querySelector("#navwhatsapp");
let navbar = document.querySelector("#navbar");


let modalActive = false;



navwhatsapp.addEventListener("mouseenter", () => {
    if (!modalActive) {
        $('#sideModalTR').modal('show');
        // When the modal is shown, we want a fixed body
        
   

        navbar.style = "";
        modalActive = true;
    }


    console.log("mouseenter");
});

navwhatsapp.addEventListener("mouseleave", () => {
    $('#sideModalTR').modal('hide');
    modalActive = false;
    // When the modal is hidden...
    document.body.style.position = '';
    const scrollY = document.body.style.top;
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);

    console.log("mouseleave");
});

console.log(navwhatsapp);

