var monthly_visits_slider = document.getElementById("monthly-visits-slider");
var rankings_slider = document.getElementById("rankings-slider");

noUiSlider.create(monthly_visits_slider, {
  start: [9200, 46000], // Initial values
  connect: true, // Display a colored bar between the handles
  range: {
    min: 0,
    max: 50000,
  },
  format: {
    to: function (value) {
      return Number(Math.round(value)).toLocaleString();
    },
    from: function (value) {
      return value;
    },
  },
  tooltips: true,
});

noUiSlider.create(rankings_slider, {
  start: [210000, 489000], // Initial values
  connect: true, // Display a colored bar between the handles
  range: {
    min: 0,
    max: 500000,
  },
  format: {
    to: function (value) {
      return Number(Math.round(value)).toLocaleString();
    },
    from: function (value) {
      return value;
    },
  },
  tooltips: true,
});

monthly_visits_slider.noUiSlider.on("update", function (values, handle) {
  // This function will be triggered when the slider value changes
  // You can use it to update the displayed values as needed
});

rankings_slider.noUiSlider.on("update", function (values, handle) {
  // This function will be triggered when the slider value changes
  // You can use it to update the displayed values as needed
});
