import { createHeaderComponent } from "./components/header/header";
import { createRestaurantListComponent } from "./components/restaurantList/createRestaurantList";
import { RESTAURANT_LIST } from "./components/restaurantList/constant";
import { createSelectComponent } from "./components/select/select";
import { createModal } from "./components/modal/createModal";
import { createNewRestaurantForm } from "./components/modal/newRestaurant";
import {
  SORTING_FILTER_VALUE,
  INIT_CATEGORY_FILTER_VALUE,
} from "./components/header/constant";
import {
  RESTAURANT_CATEGORY_LIST,
  SORT_OPTION_LIST,
} from "./components/select/constant";
console.log("npm run dev 명령어를 통해 점심 뭐 먹지 미션을 시작하세요");
console.log(
  "%c ___       ___  ___  ________   ________  ___  ___     \n" +
    "|\\  \\     |\\  \\|\\  \\|\\   ___  \\|\\   ____\\|\\  \\|\\  \\    \n" +
    "\\ \\  \\    \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\___|\\ \\  \\\\\\  \\   \n" +
    " \\ \\  \\    \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\    \\ \\   __  \\  \n" +
    "  \\ \\  \\____\\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\____\\ \\  \\ \\  \\ \n" +
    "   \\ \\_______\\ \\_______\\ \\__\\\\ \\__\\ \\_______\\ \\__\\ \\__\\\n" +
    "    \\|_______|\\|_______|\\|__| \\|__|\\|_______|\\|__|\\|__|",
  "color: #d81b60; font-size: 14px; font-weight: bold;"
);

// 자바스크립트 코드에서 이미지 리소스 로드 테스트
// index.html 파일의 html 구조를 수정하셔도 됩니다.
addEventListener("load", () => {
  let categoryFilterValue = INIT_CATEGORY_FILTER_VALUE;
  let sortingFilterValue = SORTING_FILTER_VALUE;
  let restaurantListData = RESTAURANT_LIST;
  let isModalOpen = false;
  const app = document.querySelector("main");
  app.prepend(
    createHeaderComponent({
      headerButtonClick: () => {
        isModalOpen = !isModalOpen;
      },
    })
  );

  const section = document.querySelector(".restaurant-filter-container");
  section.appendChild(
    createSelectComponent({
      attName: "category",
      className: "restaurant-filter",
      id: "category-filter",
      options: RESTAURANT_CATEGORY_LIST,
    })
  );

  section.appendChild(
    createSelectComponent({
      attName: "sorting",
      className: "restaurant-filter",
      id: "sorting-filter",
      options: SORT_OPTION_LIST,
    })
  );

  const restaurantList = document.querySelector(".restaurant-list");

  renderRestaurantList({
    restaurantListData,
    restaurantList,
    sortingFilterValue,
    categoryFilterValue,
  });

  changeFilterListener({
    restaurantListData,
    restaurantList,
    sortingFilterValue,
    categoryFilterValue,
  });

  // app.appendChild(renderModal());
});

function changeFilterListener({
  restaurantListData,
  restaurantList,
  sortingFilterValue,
  categoryFilterValue,
}) {
  document.addEventListener("change", (e) => {
    if (e.target.id === "category-filter") {
      categoryFilterValue = e.target.value;
      renderRestaurantList({
        restaurantListData,
        restaurantList,
        sortingFilterValue,
        categoryFilterValue,
      });
    }

    if (e.target.id === "sorting-filter") {
      sortingFilterValue = e.target.value;
      renderRestaurantList({
        restaurantListData,
        restaurantList,
        sortingFilterValue,
        categoryFilterValue,
      });
    }
  });
}

function renderRestaurantList({
  restaurantListData,
  restaurantList,
  sortingFilterValue,
  categoryFilterValue,
}) {
  restaurantList.innerHTML = "";
  const restaurants = filteredRestaurants(
    categoryFilterValue,
    restaurantListData
  );

  sortedRestaurants(restaurants, sortingFilterValue);

  restaurants.forEach((restaurant) => {
    restaurantList.appendChild(createRestaurantListComponent(restaurant));
  });
}

function filteredRestaurants(categoryFilterValue, restaurantListData) {
  return restaurantListData.filter(
    (item) =>
      categoryFilterValue === "전체" || categoryFilterValue === item.category
  );
}

function sortedRestaurants(restaurants, sortingFilterValue) {
  restaurants.sort((a, b) => {
    if (sortingFilterValue === "distance") {
      const findNumber = (str) => {
        return Number(str.match(/\d+/)[0]);
      };
      return findNumber(a.distance) > findNumber(b.distance) ? 1 : -1;
    }

    if (sortingFilterValue === "name") {
      return a.name > b.name ? 1 : -1;
    }
    return 0;
  });
}

function renderModal() {
  const modal = createModal();
  const modalContainer = modal.querySelector(".modal-container");
  modalContainer.appendChild(createNewRestaurantForm({}));
  return modal;
}
