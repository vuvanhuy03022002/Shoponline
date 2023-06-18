getAllProducts();

function getAllProducts() {
    var myHeaders = new Headers();

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://localhost:44360/api/product/all", requestOptions)
    .then(response => response.json())
    .then(result => {
        let htmls = "";
        result.forEach(product => {
            const html = `
                <div class="col l-2-4 m-4 s-6">
                    <a class="home-product-item" href="../product/product_detail.html#${product.id}">
                        <div class="home-product-item__img" style="background-image: url(${product.thumbnail});"></div>
                        <h4 class="home-product-item__name">${product.name}</h4>
                        <div class="home-product-item__price">
                            <span class="item__price--old">${product.price} vnđ</span>
                            <span class="item__price--current">${product.price} vnđ</span>
                        </div>
                
                        <div class="home-product-item__action">
                            <span class="home-product-item__like liked">
                                <i class="home-product__like-icon--empty far fa-heart"></i>
                                <i class="home-product__like-icon--fill fas fa-heart"></i>
                            </span>
                
                            <div class="home-product-item__rate">
                                <i class="rate--star-gold fas fa-star"></i>
                                <i class="rate--star-gold fas fa-star"></i>
                                <i class="rate--star-gold fas fa-star"></i>
                                <i class="rate--star-gold fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                
                        <div class="home-product-item__favourite">
                            <i class="fas fa-check"></i>
                            <span>Yêu thích</span>
                        </div>
                    </a>
                </div>
            `
            htmls += html;
            document.querySelector(".list_item").innerHTML = htmls;
        });
    })
    .catch(error => console.log('error', error));
}