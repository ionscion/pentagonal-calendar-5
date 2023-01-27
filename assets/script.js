let saveButton = $(".saveBtn");
let container = $(".container-lg");
let allTimeBlocks = container.children("div");
let today = dayjs();
$("#currentDay").text(today.format("dddd, MMM D, YYYY"));
let hour = dayjs().hour();
console.log(`hour is ${hour}`);

$(function () {
  saveButton.on("click", function () {
    let clickedSaveButton = $(this);
    let textDescription = clickedSaveButton.siblings(".description");
    let currentEl = clickedSaveButton.closest("div");
    let index = currentEl.index();
    if (index === 0) {
      let divId = `#hour-` + 9;
      localStorage.setItem(divId, textDescription.val());
    } else {
      divId = `#hour-` + (9 + index);
      localStorage.setItem(divId, textDescription.val());
    }
  });
  function renderMessage() {
    for (let i = 9; i < 18; i++) {
      let storedData = localStorage.getItem("#hour-" + i);
      $("#hour-" + i)
        .children("textarea")
        .val(storedData);
    }
  }

  function setStyle() {
    let hour = dayjs().hour();
    for (let i = 0; i < allTimeBlocks.length; i++) {
      let currentDiv = $(allTimeBlocks.get(i));
      let currentDivAttr = currentDiv.attr("id").slice(5);
      if (currentDivAttr == hour) {
        currentDiv.addClass("present");
      } else if (currentDivAttr < hour) {
        currentDiv.addClass("past");
      } else if (currentDivAttr > hour) {
        currentDiv.addClass("future");
      }
    }
  }

  function init() {
    renderMessage();
    setStyle();
  }
  init();
});

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
