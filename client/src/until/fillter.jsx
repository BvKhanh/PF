import { useEffect } from 'react';

const useFoodFilter = () => {
    useEffect(() => {
        function setupFoodFilter() {
            const foods = document.querySelectorAll(".food");
            foods.forEach((food, index) => {
                food.setAttribute("id", index);
            });

            const filterItems = document.querySelectorAll(".filter-option");
            let oldIndex;
            let checkFilter;
            filterItems.forEach((item, index) => {
                item.addEventListener("click", () => {
                    if (index !== oldIndex) {
                        checkFilter = false;
                        oldIndex = index;
                    }
                    filterItems.forEach(filter => filter.classList.remove("active"));
                    if (checkFilter) {
                        item.classList.remove("active");
                        checkFilter = false;
                    } else {
                        item.classList.add("active");
                        checkFilter = true;
                    }
                });
            });
        }

        function checkFilter(className) {
            const options = document.querySelectorAll(`.${className} li`);
            options.forEach(option => {
                option.addEventListener("click", () => {
                    const span = document.querySelector(`.${className} .filter-option__inner span`);
                    span.textContent = option.textContent;
                });
            });
        }

        setupFoodFilter();
        checkFilter("portion-filter");
        checkFilter("dish-type-filter");
        checkFilter("dishes-sort");
    }, []); // Đã thêm một mảng rỗng để chỉ ra là useEffect sẽ chỉ gọi setupfoodFilter() một lần, ngay sau khi mount component.
};

export default useFoodFilter;
