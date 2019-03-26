function toggleModal() {
  const button = document.getElementById("button");
  const moreInfo = document.getElementById("more-information");
  button.classList.toggle("hidden");
  moreInfo.classList.toggle("visible");
}