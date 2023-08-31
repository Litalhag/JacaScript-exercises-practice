const checkBox = document.querySelector("#triggerRejection");
const triggerPromise = document.querySelector("#triggerPromise");

triggerPromise.addEventListener("click", function () {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (checkBox.checked) {
        reject("The promise has been rejected");
      } else {
        resolve("The promise has been resolved!");
      }
    }, 1000);
  });
  promise.then((successMessage) => {
    message.textContent = successMessage;
    message.classList.remove("rejected");
    message.classList.add("resolved");
  });

  promise.catch((error) => {
    message.textContent = error;
    message.classList.remove("resolved");
    message.classList.add("rejected");
  });
});
