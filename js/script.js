const themeStyle = document.querySelector("#themeStyle");
const toggleSwitch = document.querySelector("input[type='checkbox']");

//Switching Logic
const switchTheme = (theme) => {
  themeStyle.setAttribute("href", `./css/${theme}.css`);
};

toggleSwitch.addEventListener("change", (evt) => {
  const val = evt.target.checked;
  val === true ? switchTheme("dark") : switchTheme("light");
});
