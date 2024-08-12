const slider = () => {
  let counter = 1;
  document.getElementById("radio1").checked = true;

  setInterval(() => {
    counter++;
    if (counter > 4) {
      counter = 1;
    }
    document.getElementById("radio" + counter).checked = true;
  }, 5000);
};
slider();

const scrollAnimation = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  const hiddenElement = document.querySelectorAll(".hidden");
  hiddenElement.forEach((el) => observer.observe(el));
};

scrollAnimation();
