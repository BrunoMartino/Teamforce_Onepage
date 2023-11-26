const form = document.querySelector(".grid-form");
const url = window.location.href;
const usPath = "/us-en/index.html";

function sendedFormPT(response) {
  if (response.ok) {
    form.innerHTML =
      "<p class='form-sucess'><span>Já Recebemos seu e-mail</span> e em breve um de nossos especialistas entrará em contato</p>";
  } else {
    form.innerHTML =
      "<p class='form-error'><span>Erro no envio</span>, você pode enviar diretamente para atendimento@teamforceglobal.com</p>";
  }
}
function sendedFormEN(response) {
  if (response.ok) {
    form.innerHTML =
      "<p class='form-sucess'><span>We already receive your message</span> and soon one of our expert will contact you</p>";
  } else {
    form.innerHTML =
      "<p class='form-error'><span>There's a error on sending</span>, you can send directly to atendimento@teamforceglobal.com</p>";
  }
}

function showFeedback(response) {
  if (url.includes(usPath)) {
    sendedFormEN(response);
  } else {
    sendedFormPT(response);
  }
}

function sendForm(event) {
  event.preventDefault();
  const btn = document.querySelector(".grid-form button");
  btn.disabled = true;
  if (url.includes(usPath)) {
    btn.innerText = "Sending...";
  } else {
    btn.innerText = "Enviando...";
  }

  const data = new FormData(form);

  if (url.includes(usPath)) {
    fetch("../assets/src/mailer.php", {
      method: "POST",
      body: data,
    }).then(showFeedback);
  } else {
    fetch("./assets/src/mailer.php", {
      method: "POST",
      body: data,
    }).then(showFeedback);
  }
}

form.addEventListener("submit", sendForm);
