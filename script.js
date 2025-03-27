<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Config Master 3.0</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <button id="loginBtn">Login</button>
    <button id="logoutBtn" style="display: none;">Logout</button>

    <div id="privateContent" style="display: none;">
        <h2>Danh sách cấu hình</h2>
        <ul>
            <li><a href="https://www.mediafire.com/file/fhp19nnxn50ccmt/CONFIG+MASTER+1.5📩.crt/file" target="_blank">Download Config 1.5📩</a></li>
            <li><a href="https://www.mediafire.com/file/9evdec6lj69anc9/DPISUPPORTCONFIGDEV🔥.accessibilityPunctuationGroup/file" target="_blank">Download Dấu Câu☎️ </a></li>
        </ul>
    </div>

    <script>
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
                    alert("Key Sai Mua Ib Zalo 0399978176!");
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

            // Hàm toàn màn hình
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

            // Gọi hàm khi trang tải xong
            goFullscreen();

            // Tạo hiệu ứng tuyết rơi
            function createSnowflakes() {
                var snowflakeCount = 100; // Số lượng tuyết rơi
                for (var i = 0; i < snowflakeCount; i++) {
                    var snowflake = document.createElement('div');
                    snowflake.innerHTML = '❄'; // Dấu hiệu tuyết
                    snowflake.classList.add('snowflake');
                    snowflake.style.left = Math.random() * 100 + 'vw'; // Đặt vị trí ngẫu nhiên
                    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Thời gian rơi ngẫu nhiên
                    snowflake.style.animationDelay = Math.random() * 5 + 's'; // Độ trễ ngẫu nhiên
                    document.body.appendChild(snowflake);
                }
            }

            // Gọi hàm tạo tuyết rơi khi trang tải xong
            createSnowflakes();
        });
    </script>
</body>
</html>




