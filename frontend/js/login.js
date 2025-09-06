function checklogin(redirect, username, passwords, loginerror) {
  let htmlusername = window.document.getElementById(username).value;
  let htmlpassword = window.document.getElementById(passwords).value;
  if (htmlusername == "admin" && htmlpassword == "admin") {
    window.location.href = redirect;
  } else {
    window.document.getElementById(loginerror).innerHTML = "Incorrect UserName or Password try again...";
  }
}
