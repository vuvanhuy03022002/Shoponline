
createProduct();

function createProduct() {
    const btn = document.querySelector(".submit-product_btn");

    btn.addEventListener("click", () => {

        console.log("test")
        
        const nameValue = document.querySelector(".product_name");
        const thumbnailValue = document.querySelector(".product_thumbnail");
        const descriptionValue = document.querySelector(".product_description");
        const priceValue = document.querySelector(".product_price");

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": nameValue.value,
            "description": descriptionValue.value,
            "thumbnail": thumbnailValue.value,
            "price": priceValue.value
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://localhost:44360/api/product/new", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.status == 400) {
                alert("Không thể tạo sản phẩm do thiếu dữ liệu")
            } else {
                alert("Tạo sản phẩm thành công");
                window.location.href = "../items/items.html"
            }
        })
        .catch(error => alert('error', error));
    })
}