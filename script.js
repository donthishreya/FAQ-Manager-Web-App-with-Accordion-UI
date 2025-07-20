const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    header.classList.toggle("active");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      // Close other items
      document.querySelectorAll(".accordion-content").forEach((el) => {
        el.style.maxHeight = null;
      });

      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
