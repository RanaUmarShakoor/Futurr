$(".theme-buttons").on("click", function () {
  if ($(".dark-mode-icon").css("display") === "none") {
    $(".dark-mode-icon").css("display", "block");
    $(".light-mode-icon").css("display", "none");
    $(".theme-buttons").css("background", "white");
  } else {
    $(".dark-mode-icon").css("display", "none");
    $(".light-mode-icon").css("display", "block");
    $(".theme-buttons").css("background", "#1E1E1E");
  }
});

$("#navbar-dropdown-button").on("click", function () {
  if ($("#navbar-dropdown").css("display") === "none") {
    $("#navbar-dropdown").css("display", "block");
    // $("#navbar-dropdown").css("position", "absolute");
  } else {
    $("#navbar-dropdown").css("display", "none");
  }
});

let dropdownNavbarStatus = false;
$("#dropdownNavbarLink0").on("click", function () {
  if (!dropdownNavbarStatus) {
    $("#dropdownNavbar0").css("display", "block");
    // $("#dropdownNavbar").css("position", "absolute");
    dropdownNavbarStatus = true;
  } else {
    $("#dropdownNavbar0").css("display", "none");
    dropdownNavbarStatus = false;
  }
});

$("#dropdownNavbarLink1").on("click", function () {
  if ($("#dropdownNavbar1").css("display") === "none") {
    $("#dropdownNavbar1").css("display", "block");
  } else {
    $("#dropdownNavbar1").css("display", "none");
  }
});

$("#dropdownLangSelectButton").on("click", function () {
  if ($("#dropdownLangSelect").css("display") === "none") {
    $("#dropdownLangSelect").css("display", "block");
    $("#dropdownLangSelect").css("position", "absolute");
  } else {
    $("#dropdownLangSelect").css("display", "none");
  }
});
$("#dropdownLangSelectButton0").on("click", function () {
  if ($("#dropdownLangSelect0").css("display") === "none") {
    $("#dropdownLangSelect0").css("display", "block");
    $("#dropdownLangSelect0").css("position", "absolute");
  } else {
    $("#dropdownLangSelect0").css("display", "none");
  }
});

$("#dropdownLangSelect0 li a").on("click", function (event) {
  $("#dropdownLangSelectButton0").html(event.target.name);
  $("#dropdownLangSelectButton").html(event.target.name);
  $("#dropdownLangSelect0").css("display", "none");
});

$("#dropdownLangSelect li a").on("click", function (event) {
  $("#dropdownLangSelectButton").html(event.target.name);
  $("#dropdownLangSelectButton0").html(event.target.name);
  $("#dropdownLangSelect").css("display", "none");
});

// Filters Section
$("#dropdownCategoriesButton").on("click", function () {
  if (!dropdownNavbarStatus) {
    $(".dropdowns").css("display", "none");
    $("#dropdownCategories").css("display", "block");
    // $("#dropdownCategories").css("position", "absolute");
    dropdownNavbarStatus = true;
  } else {
    $("#dropdownCategories").css("display", "none");
    dropdownNavbarStatus = false;
  }
});

$("#dropdownCategories li a").on("click", function () {
  $("#dropdownCategoriesButton").html($(this).html());
  $("#dropdownCategories").css("display", "none");
});

$("#dropdownSortButton").on("click", function () {
  if ($("#dropdownSort").css("display") === "none") {
    $(".dropdowns").css("display", "none");

    $("#dropdownSort").css("display", "block");
    $("#dropdownSort").css("position", "absolute");
  } else {
    $("#dropdownSort").css("display", "none");
  }
});

$("#dropdownSort li a").on("click", function () {
  $("#dropdownSortButton").html($(this).html());
  $("#dropdownSort").css("display", "none");
});

$("#dropdownPricingButton").on("click", function () {
  if ($("#dropdownPricing").css("display") === "none") {
    $(".dropdowns").css("display", "none");

    $("#dropdownPricing").css("display", "block");
    $("#dropdownPricing").css("position", "absolute");
  } else {
    $("#dropdownPricing").css("display", "none");
  }
});

$("#dropdownPricing li a").on("click", function () {
  $("#dropdownPricingButton").html($(this).html());
  $("#dropdownPricing").css("display", "none");
});

$("#dropdownFilterButton").on("click", function () {
  if ($("#dropdownFilter").css("display") === "none") {
    $(".dropdowns").css("display", "none");

    $("#dropdownFilter").css("display", "block");
    $("#dropdownFilter").css("position", "absolute");
  } else {
    $("#dropdownFilter").css("display", "none");
  }
});

$("#dropdownFeatureButton").on("click", function () {
  if ($("#dropdownFeatures").css("display") === "none") {
    $(".dropdown2").css("display", "none");
    $("#dropdownFeatures").css("display", "block");
  } else {
    $("#dropdownFeatures").css("display", "none");
  }
});

$("#dropdownFeatures li a").on("click", function () {
  $("#dropdownFeatureButton").html($(this).html());
  $("#dropdownFeatures").css("display", "none");
});

$("#dropdownRatingsButton").on("click", function () {
  if ($("#dropdownRatings").css("display") === "none") {
    $(".dropdown2").css("display", "none");
    $("#dropdownRatings").css("display", "block");
  } else {
    $("#dropdownRatings").css("display", "none");
  }
});

$("#dropdownRatings li a").on("click", function () {
  $("#dropdownRatingsButton").html($(this).html());
  $("#dropdownRatings").css("display", "none");
});

$("#dropdownLanguagesButton").on("click", function () {
  if ($("#dropdownLanguages").css("display") === "none") {
    $(".dropdown2").css("display", "none");
    $("#dropdownLanguages").css("display", "block");
  } else {
    $("#dropdownLanguages").css("display", "none");
  }
});

$("#dropdownLanguages li a").on("click", function () {
  $("#dropdownLanguagesButton").html($(this).html());
  $("#dropdownLanguages").css("display", "none");
});

$("#resourceDropdownButton").on("click", function () {
  if ($("#resourceDropdown").css("display") === "none") {
    $("#resourceDropdown").css("display", "block");
    $("#resourceDropdown").css("position", "absolute");
  } else {
    $("#resourceDropdown").css("display", "none");
  }
});

// Modals
$("#signInButton").on("click", function () {
  $("#signInModal").css("display", "block");
});

$(".modalCloseButton").on("click", function () {
  $(".staticModal").css("display", "none");
});

$("#signUpModalLink").on("click", function () {
  $("#signInModal").css("display", "none");
  $("#signUpModal").css("display", "block");
});

$("#signInModalLink").on("click", function () {
  $("#signUpModal").css("display", "none");
  $("#signInModal").css("display", "block");
});

$("#submitResourcesButton").on("click", function () {
  $("#submitResourcesModal").css("display", "block");
});

$("#resourceNextButton").on("click", function () {
  $("#submitResourcesModal").css("display", "none");
  $("#uploadImageModal").css("display", "block");
});

$("#submitImageButton").on("click", function () {
  $("#uploadImageModal").css("display", "none");
  $("#submitConfirmModal").css("display", "block");
});

$("#returnHomeButton").on("click", function () {
  $(".staticModal").css("display", "none");
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
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
});

$(function () {
  $(".input-images").imageUploader();
});
