import { useEffect } from "react";


function Addfood() {

  useEffect(() => {

    const $ = window.$;

    function addToCart(item) {
      var list;
      if (localStorage.getItem("cart") == null) {
          list = [item];
      } else {
          list = JSON.parse(localStorage.getItem("cart")) || [];
          let check = true;
          for (let x of list) {
              if (x.id === item.id && x.category === item.category && x.size === item.size) {

                  x.quantity += 1;
                  check = false;
                  break;
              }
          }
          if (check) {
              list.push(item);
          }
      }
      localStorage.setItem("cart", JSON.stringify(list));
      loadMiniCart();
      displayNotify(item); // Hàm hiển thị thông báo đã thêm vào giỏ
  }


    $('.btn-addCart').click(function() {
      if ($(this).text() == "Thêm vào giỏ hàng") {
          var name = $(".content__heading").text();
          var img = $(".food-img__option-item.active img").attr("src");
          var category = $(".content__category-heading b").text();
          var size = $(".btn-size.active").text();
          var price = convertToNumber($(".content__price").text());

          // Lấy mã sản phẩm (ma_mon_an) từ URL trang chi tiết sản phẩm
          var ma_mon_an = window.location.pathname.split('/').pop(); // Lấy phần cuối cùng của đường dẫn URL

          var item = {
              id: ma_mon_an, 
              name: name,
              img: img,
              category: category,
              size: size,
              price: price,
              quantity: 1, 
              discount: 0
          };

          addToCart(item); // Thêm thông tin vào local storage
      }
  });


  $(document).on("click", ".btn--size", function () {
    const valueBtn = this;
    const id = $(valueBtn).closest(".food").attr("id");
    const name = $(`#${id} .food-name`).text();
    const img = $(`#${id} .food-img-1`).attr("src");
    const category = $(`#${id} .food-content__option-item-wrap.active span`).attr("data");
    const size = $(valueBtn).text();
    const price = convertToNumber($(`#${id} .food-price`).text());

    const item = {
        id,
        name,
        img,
        category,
        size,
        price,
        quantity:1,
        discount: 0,
    };
    
    addToCart(item);
  });


    function XoaMiniCart(id, size, category) {
      let list = JSON.parse(localStorage.getItem("cart")) || [];
      var index = list.findIndex(
        (x) => x.id ===id && x.size === size && x.category === category
      );
      if (index >= 0) {
        list.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(list));
      loadMiniCart();
    }

    window.XoaMiniCart = XoaMiniCart;

    function loadMiniCart() {
      let list = JSON.parse(localStorage.getItem("cart")) || [];
      var str = "";
      var length = list.length;
      if (length > 0) {
        for (let x of list) {
          str += `<li class="mini-cart__item">
                <a class="mini-cart__link">
                <div class="mini-cart__link-img">
                    <img src="${x.img}" alt="">
                </div>
                <div class="mini-cart__link-content">
                    <p class="mini-cart__link-content-name">${x.name}</p>
                    <p class="mini-cart__link-content-describe">${x.category}${x.size}</p>
                    <p class="mini-cart__link-content-price">${convertVND(
                      x.price
                    )}</p>
                    <p class="mini-cart__link-content-quantity">x${
                      x.quantity
                    }</p>
                    <span class="mini-cart__item-cancel" onClick="XoaMiniCart('${
                      x.id
                    }','${x.size}','${x.category}')">✕</span>
                </div>
                </a>
            </li>`;
        }
        document.querySelector(".mini-cart__list").innerHTML = str;
        document.querySelector(
          ".header__actions-cart-notify"
        ).textContent = `${length}`;
        document.querySelector(".added-food").textContent = `${length}`;
      } else {
        document.querySelector(".mini-cart__list").innerHTML =
          '<p class="cart-empty">Không có sản phẩm</p>';
        document.querySelector(".header__actions-cart-notify").textContent =
          "0";
        document.querySelector(".added-food").textContent = "0";
      }
    }
    loadMiniCart();
    

    function displayNotify(item) {
      $(".notify-added-img img").attr("src", `${item.img}`); // load link ảnh
      $(".notify-food__title").text(`${item.name}`);
      $(".notify-food__category").text(`${item.category}`);
      $(".notify-food__size").text(`${item.size}`);
      $(".notify-food__prices").text(`${convertVND(item.price)}`);
      $(".notify-added").css("transform", "translateX(0px)"); // đưa block thông báo dịch chuyển vào trong màn hình

      // block thông báo được thu vào sau 4 giây
      setTimeout(function () {
        $(".notify-added").css("transform", "translateX(calc(100% + 20px))");
      }, 3000);
    }

    function convertToNumber(price) {
      let result = "";
      for (let i = 0; i < price.length; i++) {
        if (price[i] !== "." && price[i] !== "đ") {
          result += price[i];
        }
      }
      return parseInt(result, 10);
    }

    //Hàm chuyển từ số sang chuỗi theo định dạng VND
    function convertVND(number) {
      if (number == 0) {
        return "0đ";
      }
      var str = JSON.stringify(number);
      var result = "";
      var length = str.length;
      var count = 0;
      for (var i = length - 1; i >= 0; --i) {
        if (count % 3 == 0 && count != 0) {
          result = str[i] + "." + result;
        } else {
          result = str[i] + result;
        }
        count++;
      }
      return result + "đ";
    }
    
    return () => {
      $(document).off("click", ".btn--size");
    };
    
  },[]);
}

export default Addfood;
