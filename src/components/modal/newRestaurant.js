import {
  RESTAURANT_CATEGORY_LIST,
  SORT_OPTION_LIST,
  RESTAURANT_DISTANCE,
} from "../select/constant";
import { createSelectComponent } from "../select/select";

export function createNewRestaurantForm({ addRestaurant, onCancel }) {
  console.log(addRestaurant, "addRestaurant");
  const newRestaurantForm = document.createElement("form");
  newRestaurantForm.appendChild(
    createNewRestaurantCategoryWrapperAndLabel({ label: "카테고리" })
  );
  newRestaurantForm.appendChild(
    createNewRestaurantNameWrapperAndLabel({ label: "이름" })
  );
  newRestaurantForm.appendChild(
    createNewRestaurantSortWrapperAndLabel({ label: "거리 (도보 이동시간)" })
  );

  newRestaurantForm.appendChild(
    createNewRestaurantDescriptionWrapperAndLabel({
      label: "설명",
      description: "메뉴 등 추가 정보를 입력해 주세요.",
    })
  );

  newRestaurantForm.appendChild(
    createNewRestaurantLinkWrapperAndLabel({
      label: "링크",
      description: "매장 정보를 확인할 수 있는 링크를 입력해 주세요.",
    })
  );

  newRestaurantForm.appendChild(
    createBottomButtonWrapperAnd({
      cancel: () => {
        if (typeof onCancel === "function") {
          onCancel();
        }
      },
      add: (e) => {
        const newRestaurant = {
          category: e.target.form.elements.category.value,
          name: e.target.form.elements.name.value,
          distance: e.target.form.elements.sorting.value,
          description: e.target.form.elements.description.value,
          link: e.target.form.elements.link.value,
        };
        console.log(newRestaurant, "newRestaurant");
        addRestaurant(newRestaurant);
        onCancel();
      },
    })
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

function createNewRestaurantDescriptionWrapperAndLabel({ label, description }) {
  const createDescriptionWrapper = document.createElement("div");
  createDescriptionWrapper.classList.add("form-item");
  const newRestaurantDescriptionLabel = document.createElement("label");
  newRestaurantDescriptionLabel.htmlFor = "description text-caption";
  newRestaurantDescriptionLabel.textContent = label;

  const descriptionSpan = document.createElement("span");
  descriptionSpan.classList.add("help-text", "text-caption");
  descriptionSpan.textContent = description;

  createDescriptionWrapper.appendChild(newRestaurantDescriptionLabel);
  createDescriptionWrapper.appendChild(createNewRestaurantDescriptionInput());
  createDescriptionWrapper.appendChild(descriptionSpan);

  return createDescriptionWrapper;
}

function createNewRestaurantLinkWrapperAndLabel({ label, description }) {
  const createLinkWrapper = document.createElement("div");
  createLinkWrapper.classList.add("form-item");
  const newRestaurantLinkLabel = document.createElement("label");
  newRestaurantLinkLabel.htmlFor = "link text-caption";
  newRestaurantLinkLabel.textContent = label;

  const linkInput = document.createElement("input");
  linkInput.type = "text";
  linkInput.id = "link";
  linkInput.name = "link";

  const linkDesc = document.createElement("span");
  linkDesc.classList.add("help-text", "text-caption");

  linkDesc.textContent = description;

  createLinkWrapper.appendChild(newRestaurantLinkLabel);
  createLinkWrapper.appendChild(linkInput);
  createLinkWrapper.appendChild(linkDesc);

  return createLinkWrapper;
}

function createBottomButtonWrapperAnd({ cancel, add }) {
  const createBottomButtonWrapper = document.createElement("div");
  createBottomButtonWrapper.classList.add("button-container");

  const cancelButton = createButton({
    text: "취소",
    className: "button button--secondary text-caption",
  });

  const addButton = createButton({
    text: "추가",
    className: "button button--primary text-caption",
  });

  addButton.addEventListener("click", add);
  cancelButton.addEventListener("click", cancel);

  createBottomButtonWrapper.appendChild(cancelButton);
  createBottomButtonWrapper.appendChild(addButton);

  return createBottomButtonWrapper;
}

function createButton({ text, className }) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = text;
  button.className += className;
  return button;
}

function createNewRestaurantDescriptionInput() {
  const input = document.createElement("textarea");
  input.id = "description";
  input.name = "description";
  input.rows = 5;
  input.cols = 30;
  return input;
}

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
    options: ["선택해 주세요", ...Object.keys(RESTAURANT_CATEGORY_LIST)],
  });
  return select;
};

const createNewRestaurantSortSelect = () => {
  const select = createSelectComponent({
    className: "restaurant-filter",
    attName: "sorting",
    id: "sorting-filter",
    options: ["선택해 주세요", ...RESTAURANT_DISTANCE],
  });
  return select;
};
