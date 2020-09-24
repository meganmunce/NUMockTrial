// OPENING ANIMATION

const removeanimation = () => {
  $(".box").removeClass("fadedown");
  $(".u").addClass("grow");
  $(".i").addClass("grow");
  $(".g").addClass("grow");
  console.log('removed');
};

setTimeout(removeanimation, 1800);

// MODAL TUTORIAL

var modal = document.getElementById("mymodal");
var whitemodal = document.getElementById("whitemodal");
var logo = document.querySelector(".logoclass");
var modal1 = document.querySelector(".modal1");
var modal2 = document.querySelector(".modal2");

const showModal = () => {
  modal.style.display="block";
  whitemodal.style.display="block";
};

setTimeout(showModal, 3000);

const closeModal = () => {
  modal.style.display="none";
  whitemodal.style.display="none";
  modal1.style.display="block";
};

document.querySelector('.modalclose').onclick = closeModal;
