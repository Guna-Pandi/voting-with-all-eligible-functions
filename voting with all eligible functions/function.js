function message() {
  const form = document.getElementById("form");
  const values = {};

  const name = document.getElementById("name");
  const date = document.getElementById("dob");
  const place = document.getElementById("Pname");
  const adharnumber = document.getElementById("adharno");
  const cpassword = document.getElementById("password");
  const copassword = document.getElementById("confirmPassword");

  const success = document.getElementById("success-submission");
  const fail = document.getElementById("fail-submission");

  name.addEventListener("change", (event) => {
    values.name = event.target.value;
  });

  date.addEventListener("change", (event) => {
    values.date = event.target.value;
  });

  place.addEventListener("change", (event) => {
    values.pname = event.target.value;
  });

  adharnumber.addEventListener("change", (event) => {
    values.adharnumber = event.target.value;
  });

  cpassword.addEventListener("change", (event) => {
    values.cpassword = event.target.value;
  });

  copassword.addEventListener("change", (event) => {
    values.copassword = event.target.value;
  });

  // Check password validity

  const submitBtn = document.querySelector("#submitBtn");
  const passwordInput = document.querySelector("#password");
  const confirmPasswordInput = document.querySelector("#confirmPassword");
  const errorMessageDiv = document.querySelector("#errorMessage");
  const passMessageDiv = document.querySelector("#passMessage");
  const adharnoInput = document.querySelector("#adharno");
  const nameInput = document.querySelector("#name");
  const placeInput = document.querySelector("#Pname");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(values);
    if (passwordInput.value !== confirmPasswordInput.value) {
      errorMessageDiv.innerHTML = "PASSWORDS DO NOT MATCH !!";
      submitBtn.setAttribute("disabled", "true");
      fail.classList.add("flex");
        fail.classList.remove("hidden");
      
    } else {
      submitBtn.removeAttribute("disabled");
      const noError = checkInputValues();
      const password =
        adharnoInput.value.substring(0, 4) +
        nameInput.value.substring(0, 2) +
        placeInput.value.substring(0, 2);
      passMessageDiv.innerHTML =
        "PASSWORD MATCHED !! <br> YOUR NEW PASSWORD : " + password;
      if (noError) {
        success.classList.remove("hidden");
        success.classList.add("flex");
      } else {
        fail.classList.add("flex");
        fail.classList.remove("hidden");
      }
    }
  });
}

function checkInputValues() {
  const input = document.querySelectorAll("input");
  let allValuesPresent = true;
  input.forEach((input) => {
    if (!input.value) {
      allValuesPresent = false;
    }
  });
  return allValuesPresent;
}
// Calculate age based on date of birth
const esuccess = document.getElementById("eli-submission");
const nefail = document.getElementById("neli-submission");
const dobInput = document.querySelector("#dob");
const ageDiv = document.querySelector("#age");
const allInputs = document.querySelectorAll("input");

dobInput.addEventListener("change", function () {
  const dob = new Date(dobInput.value);
  const today = new Date();
  const age = today.getFullYear() - dob.getFullYear();

  if (age < 18) {
    nefail.style.display = "flex";
    esuccess.style.display = "none";

    allInputs.forEach((input) => {
      input.setAttribute("disabled", "true");
    });
  } else {
    esuccess.style.display = "flex";
    nefail.style.display = "none";

    allInputs.forEach((input) => {
      input.removeAttribute("disabled");
    });
  }
});
