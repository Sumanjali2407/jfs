let isLogin = false;
let captcha = "";

function generateCaptcha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captchaText").innerText = captcha;
}

generateCaptcha();

function toggleForm() {
    isLogin = !isLogin;
    document.getElementById("formTitle").innerText = isLogin ? "Login" : "Register";
    document.querySelector(".toggle").innerText = isLogin
        ? "New user? Register"
        : "Already registered? Login";
}

document.getElementById("authForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const userCaptcha = document.getElementById("captchaInput").value;

    if (userCaptcha !== captcha) {
        alert("❌ Incorrect CAPTCHA");
        generateCaptcha();
        return;
    }

    const storedUser = localStorage.getItem("user");

    if (isLogin) {
        // LOGIN LOGIC
        if (!storedUser) {
            alert("❌ No account found. Please register first.");
            return;
        }

        const userData = JSON.parse(storedUser);

        if (username === userData.username && password === userData.password) {
            alert("✅ Login successful");
        } else {
            alert("❌ Invalid username or password");
        }

    } else {
        // REGISTER LOGIC
        if (storedUser) {
            alert("⚠ Account already exists. Please login.");
            return;
        }

        const userData = {
            username: username,
            password: password
        };

        localStorage.setItem("user", JSON.stringify(userData));
        alert("🎉 Registration successful. Now you can login!");
        toggleForm();
    }

    generateCaptcha();
    this.reset();
});
