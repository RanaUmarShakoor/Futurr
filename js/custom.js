let dropdownNavbarStatus = false;
$("#dropdownNavbarLink").on("click", function(){
    if(!dropdownNavbarStatus){
        $("#dropdownNavbar").css("display", "block");
        $("#dropdownNavbar").css("position", "absolute");
        dropdownNavbarStatus = true;
    }
    else{
        $("#dropdownNavbar").css("display", "none");
        dropdownNavbarStatus = false;
    }
})

$("#dropdownCategoriesButton").on("click", function(){
    if(!dropdownNavbarStatus){
        $("#dropdownCategories").css("display", "block");
        $("#dropdownCategories").css("position", "absolute");
        dropdownNavbarStatus = true;
    }
    else{
        $("#dropdownCategories").css("display", "none");
        dropdownNavbarStatus = false;
    }
})

$("#dropdownSortButton").on("click", function(){
    if( $('#dropdownSort').css("display") === "none" ){
        $("#dropdownSort").css("display", "block");
        $("#dropdownSort").css("position", "absolute");
    }
    else{
        $("#dropdownSort").css("display", "none");
    }
})

$("#dropdownPricingButton").on("click", function(){
    if( $('#dropdownPricing').css("display") === "none" ){
        $("#dropdownPricing").css("display", "block");
        $("#dropdownPricing").css("position", "absolute");
    }
    else{
        $("#dropdownPricing").css("display", "none");
    }
})



  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsiveClass: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    },
    navText: [
        `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="17.5" fill="white" stroke="#D9D9D9"/>
        <path d="M17.024 18.0006L21.1488 22.1253L19.9703 23.3038L14.667 18.0006L19.9703 12.6973L21.1488 13.8758L17.024 18.0006Z" fill="#11174C"/>
        </svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none class="nextBtn" style="transform: rotate(180deg);">
        <circle cx="18" cy="18" r="17.5" fill="white" stroke="#D9D9D9"/>
        <path d="M17.024 18.0006L21.1488 22.1253L19.9703 23.3038L14.667 18.0006L19.9703 12.6973L21.1488 13.8758L17.024 18.0006Z" fill="#11174C"/>
        </svg>`,
      ],
})