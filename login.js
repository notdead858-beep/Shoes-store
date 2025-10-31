// validation form login
const inputUsername = document.querySelector(".form-control3");
const inputPassword = document.querySelector(".form-control4");
const btnLogin = document.querySelector(".btun");

// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value
    ) {
      alert("Đăng Nhập Thành Công");
      window.location.href = "home.html";
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});
