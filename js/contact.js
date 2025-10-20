document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("success-msg");

  const fields = {
    name: {
      input: document.getElementById("name"),
      error: document.getElementById("error-name"),
      message: "Full name is required.",
    },
    email: {
      input: document.getElementById("email"),
      error: document.getElementById("error-email"),
      message: "Valid email is required (e.g. name@example.com).",
    },
    subject: {
      input: document.getElementById("subject"),
      error: document.getElementById("error-subject"),
      message: "Subject is required.",
    },
    message: {
      input: document.getElementById("message"),
      error: document.getElementById("error-message"),
      message: "Message must be at least 10 characters long.",
    },
  };

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;
    successMsg.hidden = true;

    Object.values(fields).forEach(({ error }) => (error.textContent = ""));

    if (!fields.name.input.value.trim()) {
      fields.name.error.textContent = fields.name.message;
      isValid = false;
    }


    const emailVal = fields.email.input.value.trim();
    if (!emailVal || !validateEmail(emailVal)) {
      fields.email.error.textContent = fields.email.message;
      isValid = false;
    }


    if (!fields.subject.input.value.trim()) {
      fields.subject.error.textContent = fields.subject.message;
      isValid = false;
    }


    const msgVal = fields.message.input.value.trim();
    if (msgVal.length < 10) {
      fields.message.error.textContent = fields.message.message;
      isValid = false;
    }

 
    if (isValid) {
      successMsg.hidden = false;
      form.reset();
    }
  });
});
