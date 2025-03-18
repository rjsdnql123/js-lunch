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

  newRestaurantForm.appendChild(
    createNewRestaurantDescriptionWrapperAndLabel({ label: "설명" })
  );

  newRestaurantForm.appendChild(
    createNewRestaurantLinkWrapperAndLabel({ label: "링크" })
  );

  newRestaurantForm.appendChild(createBottomButtonWrapperAnd());
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

function createNewRestaurantDescriptionWrapperAndLabel({ label }) {
  const createDescriptionWrapper = document.createElement("div");
  createDescriptionWrapper.classList.add("form-item");
  const newRestaurantDescriptionLabel = document.createElement("label");
  newRestaurantDescriptionLabel.htmlFor = "description text-caption";
  newRestaurantDescriptionLabel.textContent = label;

  createDescriptionWrapper.appendChild(newRestaurantDescriptionLabel);
  createDescriptionWrapper.appendChild(createNewRestaurantDescriptionInput());

  return createDescriptionWrapper;
}

function createNewRestaurantLinkWrapperAndLabel({ label }) {
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

  createLinkWrapper.appendChild(newRestaurantLinkLabel);
  createLinkWrapper.appendChild(linkInput);
  createLinkWrapper.appendChild(linkDesc);

  return createLinkWrapper;
}

function createBottomButtonWrapperAnd() {
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
