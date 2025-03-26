function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Đăng nhập giả lập (tài khoản cố định)
    if (username === "admin" && password === "123456") {
        localStorage.setItem("loggedIn", "true"); // Lưu trạng thái đăng nhập
        window.location.href = "index.html"; // Chuyển hướng sau khi đăng nhập
    } else {
        document.getElementById("error-message").textContent = "Sai tài khoản hoặc mật khẩu!";
    }
}

function logout() {
    localStorage.removeItem("loggedIn"); // Xóa trạng thái đăng nhập
    window.location.href = "login.html"; // Chuyển hướng về trang đăng nhập
}

// Kiểm tra nếu chưa đăng nhập thì không cho vào index.html
if (window.location.pathname.includes("index.html") && localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}
