const removeanimation = () => {
  $(".box").removeClass("fadedown");
  $(".u").addClass("grow");
  $(".i").addClass("grow");
  $(".g").addClass("grow");
  console.log('removed');
};

setTimeout(removeanimation, 1800);

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
