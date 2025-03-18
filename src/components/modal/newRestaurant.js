import { RESTAURANT_CATEGORY_LIST, SORT_OPTION_LIST } from "../select/constant";
import { createSelectComponent } from "../select/select";
export function createNewRestaurantForm({}) {
  const newRestaurantForm = document.createElement("form");
  newRestaurantForm.appendChild(
    createNewRestaurantCategoryWrapperAndLabel({ label: "카테고리" })
  );
  newRestaurantForm.appendChild(
    createNewRestaurantNameWrapperAndLabel({ label: "이름" })
  );
  newRestaurantForm.appendChild(
    createNewRestaurantSortWrapperAndLabel({ label: "거리" })
  );
  return newRestaurantForm;
}

const createNewRestaurantCategoryWrapperAndLabel = ({ label }) => {
  const createCategoryWrapper = document.createElement("div");
  createCategoryWrapper.classList.add("form-item", "form-item--required");
  const newRestaurantCategoryLabel = document.createElement("label");
  newRestaurantCategoryLabel.htmlFor = "category text-caption";
  newRestaurantCategoryLabel.textContent = label;

  createCategoryWrapper.appendChild(newRestaurantCategoryLabel);
  createCategoryWrapper.appendChild(createNewRestaurantCategorySelect());

  return createCategoryWrapper;
};

const createNewRestaurantNameWrapperAndLabel = ({ label }) => {
  const createNameWrapper = document.createElement("div");
  createNameWrapper.classList.add("form-item", "form-item--required");
  const newRestaurantNameLabel = document.createElement("label");
  newRestaurantNameLabel.htmlFor = "name text-caption";
  newRestaurantNameLabel.textContent = label;

  createNameWrapper.appendChild(newRestaurantNameLabel);
  createNameWrapper.appendChild(createNewRestaurantNameInput());

  return createNameWrapper;
};

const createNewRestaurantSortWrapperAndLabel = ({ label }) => {
  const createSortWrapper = document.createElement("div");
  createSortWrapper.classList.add("form-item", "form-item--required");
  const newRestaurantSortLabel = document.createElement("label");
  newRestaurantSortLabel.htmlFor = "distance text-caption";
  newRestaurantSortLabel.textContent = label;

  createSortWrapper.appendChild(newRestaurantSortLabel);
  createSortWrapper.appendChild(createNewRestaurantSortSelect());

  return createSortWrapper;
};

const createNewRestaurantNameInput = () => {
  const input = document.createElement("input");
  input.type = "text";
  input.id = "name";
  input.name = "name";
  return input;
};

const createNewRestaurantCategorySelect = () => {
  const select = createSelectComponent({
    className: "form-select",
    attName: "category",
    id: "category",
    options: RESTAURANT_CATEGORY_LIST,
  });
  return select;
};

const createNewRestaurantSortSelect = () => {
  const select = createSelectComponent({
    className: "restaurant-filter",
    attName: "sorting",
    id: "sorting-filter",
    options: SORT_OPTION_LIST,
  });
  return select;
};
