const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

document.querySelector(".form-submit").addEventListener("click", () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "email": emailInput.value,
        "password": passwordInput.value
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://localhost:44360/api/login", requestOptions)
    .then(response => response.json())
    .then(result => {
        if (result == 200) {
            alert("Đăng nhập thành công!");
            window.location.href = "../home.html"
        } else {
            alert("Email hoặc mật khẩu không chính xác");
            location.reload();
        }
    })
    .catch(error => console.log('error', error));
})