document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const privateContent = document.getElementById("privateContent");

    // Kiểm tra xem người dùng đã đăng nhập chưa
    if (localStorage.getItem("loggedIn") === "true") {
        showLoggedInContent();
    }

    loginBtn.addEventListener("click", function () {
        const password = prompt("Nhập mật khẩu để đăng nhập:");
        if (password === "123456") { // Đổi mật khẩu tại đây nếu cần
            localStorage.setItem("loggedIn", "true");
            showLoggedInContent();
        } else {
            alert("Mật khẩu sai, vui lòng thử lại!");
        }
    });

    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("loggedIn");
        showLoggedOutContent();
    });

    function showLoggedInContent() {
        loginBtn.style.display = "none";
        logoutBtn.style.display = "inline-block";
        privateContent.style.display = "block";
    }

    function showLoggedOutContent() {
        loginBtn.style.display = "inline-block";
        logoutBtn.style.display = "none";
        privateContent.style.display = "none";
    }
});


