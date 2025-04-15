$(document).ready(function () {
    $("a[href^='#']").on("click", function (event) {
      event.preventDefault();
  
      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top - 70,
        },
        500
      );
    });
  });
  
  // Form Handling
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();
    const name = $("#name").val();
    const email = $("#email").val();
    const message = $("#message").val();
  
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      $("#contactForm")[0].reset();
    } else {
      alert("Please fill all fields.");
    }
  });
  