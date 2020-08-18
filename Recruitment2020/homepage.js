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

const skipTutorial = () => {
  modal.style.display="none";
  whitemodal.style.display="none";
};

const closeModal = () => {
  modal.style.display="none";
  whitemodal.style.display="none";
  logo.style.border="5px solid red";
  modal1.style.display="block";
};

const step2 = () => {
  logo.style.border="none";
  modal1.style.display="none";
  document.querySelector('.b').style.border="5px solid red";
  modal2.style.display="block";
};

const step3 = () => {
  modal2.style.display="none";
  document.querySelector('.b').style.border="none";
};

document.querySelector('.modalclose').onclick = closeModal;
document.querySelector('.skiptutorial').onclick = skipTutorial;
document.querySelector(".next1").onclick = step2;
document.querySelector(".next2").onclick = step3;

// CHANGING CONTENT

learnContent = ``

watchContent = ``

watchCall = ``

const removeLearn = () => {
  $(".e").addClass("fadeleft");
  console.log('added');
};

const removeWatch = () => {

};

const removeCall = () => {

};

const homepage = () => {

};

// e is learn more
document.querySelector('.e').onclick = removeWatch;
document.querySelector('.e').onclick = removeCall;
// f is watch videos
document.querySelector('.f').onclick = removeLearn;
document.querySelector('.f').onclick = removeCall;
// g is zoom calls
document.querySelector('.g').onclick = removeLearn;
document.querySelector('.g').onclick = removeWatch;
// to return to homepage
