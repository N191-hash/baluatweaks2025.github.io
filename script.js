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
function goFullscreen() {
  let docElm = document.documentElement;
  if (docElm.requestFullscreen) {
    docElm.requestFullscreen();
  } else if (docElm.mozRequestFullScreen) {
    docElm.mozRequestFullScreen();
  } else if (docElm.webkitRequestFullscreen) {
    docElm.webkitRequestFullscreen();
  } else if (docElm.msRequestFullscreen) {
    docElm.msRequestFullscreen();
  }
}

window.onload = function() {
  goFullscreen(); // Gọi hàm khi trang tải xong
}
// Thiết lập canvas
var canvas = document.getElementById("snowCanvas");
var ctx = canvas.getContext("2d");

// Đặt kích thước canvas cho phù hợp với cửa sổ trình duyệt
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Tạo mảng bông tuyết
var snowflakes = [];

// Tạo đối tượng bông tuyết
function Snowflake(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
}

// Tạo bông tuyết ngẫu nhiên
function createSnowflakes() {
    for (var i = 0; i < 100; i++) {
        var size = Math.random() * 5 + 2; // Kích thước bông tuyết
        var speed = Math.random() * 3 + 1; // Tốc độ rơi
        var x = Math.random() * canvas.width; // Vị trí x ngẫu nhiên
        var y = Math.random() * canvas.height; // Vị trí y ngẫu nhiên
        snowflakes.push(new Snowflake(x, y, size, speed));
    }
}

// Vẽ các bông tuyết trên canvas
function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Xóa canvas mỗi lần vẽ lại

    for (var i = 0; i < snowflakes.length; i++) {
        var snowflake = snowflakes[i];
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.size, 0, Math.PI * 2);
        ctx.fillStyle = "#fff"; // Màu trắng cho bông tuyết
        ctx.fill();
        
        // Di chuyển bông tuyết xuống dưới
        snowflake.y += snowflake.speed;

        // Nếu bông tuyết rơi ra khỏi màn hình thì đặt lại vị trí
        if (snowflake.y > canvas.height) {
            snowflake.y = -snowflake.size;
            snowflake.x = Math.random() * canvas.width;
        }
    }
}

// Cập nhật và vẽ lại liên tục
function update() {
    drawSnowflakes();
    requestAnimationFrame(update); // Đảm bảo hiệu ứng liên tục
}

// Bắt đầu tạo tuyết và cập nhật liên tục
createSnowflakes();
update();
function goFullScreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari và Opera
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
    }
}

// Gọi hàm khi trang web đã tải xong hoặc khi người dùng nhấn vào một nút
window.onload = function() {
    goFullScreen();
};



