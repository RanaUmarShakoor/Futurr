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

