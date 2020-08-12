const removeanimation = () => {
  $(".box").removeClass("fadedown");
  $(".box").addClass("grow");
  console.log('removed');
};

setTimeout(removeanimation, 1800);

 
