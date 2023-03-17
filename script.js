window.onload = () => {
  let items = document.querySelectorAll(".carousel .carousel-item");

  items.forEach((el) => {
    const minPerSlide = 5;
    let next = el.nextElementSibling;
    for (let i = 1; i < minPerSlide; i++) {
      if (!next) {
        // wrap carousel by using first child
        next = items[0];
      }
      let cloneChild = next.cloneNode(true);
      el.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });

  const watchNowModal = document.getElementById("watchNowModal");
  watchNowModal.addEventListener("show.bs.modal", (event) => {
    // Button that triggered the modal
    const button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    const imageUrl = button.getAttribute("data-bs-image");
    const titleMovie = button.getAttribute("data-bs-title");
    const castMovie = button.getAttribute("data-bs-cast");
    const castImages = castMovie.split(",");
    // Update the modal's content.
    const modalTitle = watchNowModal.querySelector("#modal-title");
    const modalImage = watchNowModal.querySelector("#mainImage");
    const modalDescription = watchNowModal.querySelector(".modal-description");
    const modalCast = watchNowModal.querySelector("#movieCast");

    modalImage.src = imageUrl;
    modalTitle.textContent = titleMovie;
    modalCast.innerHTML = "";
    for (const castImage of castImages) {
      const castLink = document.createElement("a");
      const castElement = document.createElement("img");

      castElement.src = castImage;
      castLink.appendChild(castElement);
      modalCast.appendChild(castLink);
    }
  });
};
