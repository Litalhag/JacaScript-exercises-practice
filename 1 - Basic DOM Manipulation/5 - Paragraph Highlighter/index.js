function highlight(element) {
  // selected color by user
  const color = document.querySelector("#colorPicker").value;

  // setting the background color when clicked on p
  element.style.backgroundColor = color;
}
