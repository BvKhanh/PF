// window.onload = function () {
//     var heightHeader = document.querySelector(".site-header").offsetHeight;
//     document.querySelector(".all-dishes-container").style.marginTop = heightHeader + "px";

//     /** Tạo ID cho các sản phẩm */
//     var foods = document.querySelectorAll(".food");
//     foods.forEach(function (food, index) {
//         food.setAttribute("id", index);
//     });

//     /** Filter */
//     var oldIndex;
//     var checkFilter;
//     var filterItems = document.querySelectorAll(".filter-option");
//     filterItems.forEach(function (filterItem, index) {
//         filterItem.addEventListener("click", function () {
//             // Nếu lần tiếp theo mà click sang option khác thì sẽ phải add thêm class còn không thì remove
//             if (index !== oldIndex) {
//                 checkFilter = false;
//                 oldIndex = index;
//             }
//             filterItems.forEach(function (item) {
//                 item.classList.remove("active");
//             });
//             if (checkFilter) {
//                 filterItem.classList.remove("active");
//                 checkFilter = false;
//             } else {
//                 filterItem.classList.add("active");
//                 checkFilter = true;
//             }
//         });
//     });

//     /** Xác định filter được chọn và cập nhật văn bản */
//     function checkFilter(className) {
//         var filterItems = document.querySelectorAll("." + className + " li");
//         filterItems.forEach(function (item) {
//             item.addEventListener("click", function () {
//                 // Gán text của heading bằng text của option vừa nhấn
//                 document.querySelector("." + className + " .filter-option__inner span").textContent = this.textContent;
//             });
//         });
//     }
//     checkFilter("portion-filter");
//     checkFilter("dish-type-filter");
//     checkFilter("dishes-sort");
// };
