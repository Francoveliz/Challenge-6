function test() {
  const name = document.getElementById("name-input");
  const lastName = document.getElementById("last-name-input");
  const email = document.getElementById("email-input");
  const pass = document.getElementById("pass-input");

  if (name.value === "") {
    document.getElementById("name-error").style.display = "block";
    document.getElementById("name-alert").style.visibility = "visible";
  }
  if (lastName.value === "") {
    document.getElementById("last-name-error").style.display = "block";
    document.getElementById("last-name-alert").style.visibility = "visible";
  }
  if (email.value === "") {
    document.getElementById("email-error").style.display = "block";
    document.getElementById("email-alert").style.visibility = "visible";
  }
  if (pass.value === "") {
    document.getElementById("pass-error").style.display = "block";
    document.getElementById("pass-alert").style.visibility = "visible";
  }

}
