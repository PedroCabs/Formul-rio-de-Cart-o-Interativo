const num_F = document.getElementById("numberFront");
const num_I = document.getElementById("numberInput");

const name_F = document.getElementById("nameFront");
const name_I = document.getElementById("nameInput");

const month_F = document.getElementById("month_Front");
const month_I = document.getElementById("monthInput");

const year_F = document.getElementById("YY_Front");
const year_I = document.getElementById("yearInput");

const cc_F = document.getElementById("numbBack");
const cc_I = document.getElementById("ccInput");

const confirm_btn = document.getElementById("confirm_btn");

function numbInfo(e) {

num_F.innerText = e.target.value
.replace(/\D/g, '') 
.replace(/(\d{4})(?=\d)/g, '$1 ');

num_F.value = e.target.value
.replace(/\D/g, '') 
.replace(/(\d{4})(?=\d)/g, '$1 '); 
}


function nameInfo(e) {
  name_F.innerHTML = e.target.value;
}

function monthInfo(e) {
  month_F.innerHTML = e.target.value;
}

function yearInfo(e) {
  year_F.innerHTML = e.target.value;
}

function ccInfo(e) {
  cc_F.innerHTML = e.target.value;
}

function validateForm() {
  component = false
  if (name_I.value.trim() === "") {
    name_I.classList.add("error");
    document.querySelector(".messerror1").innerText = "Name is required.";
  } else {
    name_I.classList.remove("error");
    document.querySelector(".messerror1").innerText = "";
    component = true
    return component
  }

  if (num_I.value.trim() === "") {
    num_I.classList.add("error");
    document.querySelector(".messerror2").innerText =
      "Wrong format, numbers only.";
  } else {
    num_I.classList.remove("error");
    document.querySelector(".messerror2").innerText = "";
    component = true
    return component
  }

  if (month_I.value.trim() === "") {
    month_I.classList.add("error");
    document.querySelector(".messerror3").innerText = "Can't be blank.";
  } else {
    month_I.classList.remove("error");
    document.querySelector(".messerror3").innerText = "";
    component = true
    return component
  }

  if (year_I.value.trim() === "") {
    year_I.classList.add("error");
    document.querySelector(".messerror4").innerText = "Can't be blank.";
  } else {
    year_I.classList.remove("error");
    document.querySelector(".messerror4").innerText = "";
    component = true
    return component
  }

  if (cc_I.value.trim() === "") {
    cc_I.classList.add("error");
    document.querySelector(".messerror5").innerText = "Can't be blank.";
  } else {
    cc_I.classList.remove("error");
    document.querySelector(".messerror5").innerText = "";
    component = true
    return component
  }
}

confirm_btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (validateForm()) {
    document.querySelector(".card_form").style.display = "none";
    document.querySelector(".card_complete").style.display = "flex";
  }
});

num_I.addEventListener("keyup", numbInfo);
name_I.addEventListener("keyup", nameInfo);
year_I.addEventListener("keyup", yearInfo);
month_I.addEventListener("keyup", monthInfo);
cc_I.addEventListener("keyup", ccInfo);
