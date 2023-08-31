const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");
const btnCloseModal = document.querySelector("#closeBtn");
const btnOpenModal = document.querySelector("#showModalBtn");

const openModal = function () {
  modal.style.display = "block"; // Show the modal
  overlay.style.display = "block"; // Show the overlay
};

const closeModal = function () {
  modal.style.display = "none"; // Hide the modal
  overlay.style.display = "none"; // Hide the overlay
};

btnOpenModal.addEventListener("click", openModal); // open the modal
btnCloseModal.addEventListener("click", closeModal); // close the modal

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modal.style.display !== "none") {
    closeModal();
  }
});

document.addEventListener("click", function (e) {
  if (
    e.target !== btnOpenModal &&
    e.target !== modal &&
    !modal.contains(e.target)
  )
    closeModal();
});
