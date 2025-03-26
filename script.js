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
// Tạo hiệu ứng tuyết rơi
const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const numFlakes = 100; // Số bông tuyết
const flakes = [];

for (let i = 0; i < numFlakes; i++) {
    flakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1, // Kích thước tuyết
        speedX: Math.random() * 1 - 0.5, // Chuyển động ngang
        speedY: Math.random() * 2 + 1, // Chuyển động xuống
    });
}

function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.beginPath();
    
    flakes.forEach(flake => {
        ctx.moveTo(flake.x, flake.y);
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    });

    ctx.fill();
    moveFlakes();
}

function moveFlakes() {
    flakes.forEach(flake => {
        flake.y += flake.speedY;
        flake.x += flake.speedX;

        if (flake.y > canvas.height) {
            flake.y = 0;
            flake.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(drawSnowflakes);
}

drawSnowflakes();

