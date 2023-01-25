// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
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
});
// let textDescription = $(".description");
let saveButton = $(".saveBtn");
let container = $(".container-lg");
let allTimeBlocks = container.children("div");

saveButton.on("click", function (event) {
  let clickedSaveButton = $(this);
  let textDescription = clickedSaveButton.siblings(".description");
  let currentEl = clickedSaveButton.closest("div");

  console.log(allTimeBlocks);
  let index = currentEl.index();
  console.log(index);
  if (index === 0) {
    let divId = `#hour-` + 9;
    console.log(divId);
    localStorage.setItem(divId, textDescription.val());
    renderMessage(divId,index);
  } else {
    divId = `#hour-` + (9 + index);
    localStorage.setItem(divId, textDescription.val());
    console.log(divId);
    renderMessage(divId,index);
  }
});

function renderMessage(value,number) {
  let lastMessage = localStorage.getItem(value);
  let element = document.getElementById(value);
  if (lastMessage !== null && element) {
    element.getElementsByClassName("description")[number].value = lastMessage;
  }
}

function init() {
  renderMessage;
}

init();

//adds current day to header space
let today = dayjs();
$("#currentDay").text(today.format("MMM D, YYYY"));
