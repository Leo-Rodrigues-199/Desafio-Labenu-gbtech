const formContact = document.querySelector("#formContact");
const nameForm = document.querySelector("#name");
const emailForm = document.querySelector("#email");
const messageForm = document.querySelector("#message");
const showFormResult = document.querySelector(".show_result");

formContact.addEventListener("submit", validateForm);

function isEmpty(value) {
  const string = value.trim();
  return string.length === 0;
}

function emailsIsValid(email) {
  return /^[A-Za-z0-9.]{1,32}@[a-z0-9]{1,16}\.com$/.test(email);
}

function validateForm(event) {
  const errors = [];
  event.preventDefault();
  emailForm.value = emailForm.value.trim();

  if (isEmpty(nameForm.value)) {
    errors.push("Erro: Insira seu nome.");
  }

  if (!emailsIsValid(emailForm.value)) {
    errors.push("Erro: Endereço de e-mail inválido.");
  }

  if (isEmpty(messageForm.value)) {
    errors.push("Erro: Insira uma mensagem.");
  }

  if (errors.length >= 1) {
    showFormResult.innerHTML = String(errors).split(",").join("<br>");
    showFormResult.classList.add("error");
    showFormResult.classList.remove("ok");
  } else {
    const user = nameForm.value.split(" ")[0];
    showFormResult.innerHTML = `Obrigado pelo contato, ${user}!`;
    showFormResult.classList.add("ok");
    emailForm.value = "";
    messageForm.value = "";
    showFormResult.scrollIntoView({
      behavior: "smooth",
    });
  }
}
