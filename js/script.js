var link = document.querySelector(".btn-feedback");
var feedback_popup = document.querySelector(".modal-feedback");
var close_feedback = document.querySelector(".modal-feedback-close");
var login = document.querySelector("[name=fullname]");
var overlay = document.querySelector(".modal-overlay");

link.addEventListener("click", function(event) {
  event.preventDefault();
  feedback_popup.classList.add("modal-feedback-show");
  overlay.classList.add("modal-overlay-show");
  login.focus();
});

close_feedback.addEventListener("click", function(event) {
  event.preventDefault();
  feedback_popup.classList.remove("modal-feedback-show");
  overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (feedback_popup.classList.contains("modal-feedback-show")) {
      feedback_popup.classList.remove("modal-feedback-show");
    }
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (overlay.classList.contains("modal-overlay-show")) {
      overlay.classList.remove("modal-overlay-show");
    }
  }
});