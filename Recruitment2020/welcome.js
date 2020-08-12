const removeanimation = () => {
  document.querySelector('.main').innerHTML = `
  <img src="logo.PNG" class="logoimg">
  <h2>Welcome to Northwestern Mock Trial Recruitment 2020</h2>
<a href="homepage.html" class="enter over">Click to Enter</a>
`;
};

setTimeout(removeanimation, 4000);
