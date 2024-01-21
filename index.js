let nameEl = document.getElementById("name-el");
let whatEl = document.getElementById("what-el");
let specificEl = document.getElementById("specific-el");
let requiredEl = document.getElementById("required-el");

let message = "";

let submit = () => {
  if (nameEl.value === "") {
    requiredEl.style.display = "block";
    return;
  }
  requiredEl.style.display = "none";
  message = `Hello, I am ${nameEl.value}.`;
  nameEl.value = "";
  if (whatEl.value !== "") {
    message = `${message} I want to sell ${whatEl.value}.`;
    whatEl.value = "";
  } else {
    message = `${message} I want to sell scrap.`;
  }
  if (specificEl.value !== "") {
    message = `${message} Specifically I have ${specificEl.value}`;
    specificEl.value = "";
  }
  callWhatsapp();
};

let callWhatsapp = () => {
  console.log(message);
  console.log(`http://wa.me/9922741134?text=${message}`);
  window.location(`http://wa.me/9922741134?text=${message}`);
};
