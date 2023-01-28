let saveButton = $(".saveBtn");
let container = $(".container-lg");
let allTimeBlocks = container.children("div");
let today = dayjs();
$("#currentDay").text(today.format("dddd, MMM D, YYYY"));
let hour = dayjs().hour();


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

