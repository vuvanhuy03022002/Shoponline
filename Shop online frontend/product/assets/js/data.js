const idUrl = window.location.hash;
let idProduct = idUrl.substring(1);

getProduct();

function getProduct() {
    
    var myHeaders = new Headers();

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch(`https://localhost:44360/api/product/${idProduct}`, requestOptions)
    .then(response => response.json())
    .then(result => {
        let htmls = `
        <div class="infomation-img">
            <img src="${result.thumbnail}" alt="">
        </div>
        <div class="infomation_right">
            <div class="infomation--title">${result.name}</div>
            <div class="infomation--detail">${result.description}</div>
            <div class="infomation--pay">giá: ${result.price}</div>
            <div class="buy">
                <a href="#">
                    <div class="infomation--buy">mua</div>
                </a>
            </div>
        </div>
        `
        document.querySelector(".product-detail").innerHTML = htmls;
    })
    .catch(error => console.log('error', error));
}