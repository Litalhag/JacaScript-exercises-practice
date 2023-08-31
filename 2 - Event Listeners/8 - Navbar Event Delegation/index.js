const parentUl = document.querySelector("#navList");
const message = document.querySelector("#message");

// event.preventDefault(): Prevents the default behavior of the links, which would navigate to the href attribute's URL. Since they're #, it would scroll to the top of the  page
parentUl.addEventListener("click", function (event) {
  event.preventDefault();

  if (event.target.tagName === "A") {
    const linkName = event.target.dataset.link;

    message.textContent = `You clicked ${linkName}`;
    message.style.display = "block";

    setTimeout(function () {
      message.style.display = "none";
    }, 2000);
  }
});
