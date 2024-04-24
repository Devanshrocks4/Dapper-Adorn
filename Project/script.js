document.addEventListener("DOMContentLoaded", function () {
  const signInForm = document.querySelector("form");
  const emailInput = document.getElementById("form2Example1");
  const passwordInput = document.getElementById("form2Example2");
  const signInButton = document.querySelector(".btn-primary");

  signInButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (
      emailInput.value === "prashantyadav2069@gmail.com" &&
      passwordInput.value === "19697"
    ) {
      alert("Login Successfully");
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach((scrollLink) => {
    scrollLink.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = scrollLink.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      const offset = targetElement.offsetTop;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    });
  });
});
