import { createSelectComponent } from "../select/select";
export function createNewRestaurantForm({}) {
  const newRestaurantForm = document.createElement("form");
  newRestaurantForm.appendChild(
    createNewRestaurantCategoryWrapperAndLabel({ label: "카테고리" })
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
  createCategoryWrapper.appendChild(createNewRestaurantCategorySelect({}));
  return createCategoryWrapper;
};

const createNewRestaurantCategorySelect = ({}) => {
  const select = createSelectComponent({
    className: "form-select",
    attName: "category",
    id: "category",
    options: {
      전체: "전체",
      한식: "한식",
      중식: "중식",
      일식: "일식",
      양식: "양식",
      기타: "기타",
    },
  });
  return select;
};
