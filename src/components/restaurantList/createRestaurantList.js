import { CATEGORY_IMAGE_RESOURCES } from "./constant";

export function createRestaurantListComponent({
  category,
  desc,
  distance,
  name,
}) {
  const list = document.createElement("li");
  list.className = "restaurant";
  list.appendChild(createCategory({ category }));

  const restaurantInfo = document.createElement("div");
  restaurantInfo.className = "restaurant__info";
  restaurantInfo.appendChild(createName({ name }));
  restaurantInfo.appendChild(createDistance({ distance }));
  restaurantInfo.appendChild(createDescription({ desc }));
  list.appendChild(restaurantInfo);
  return list;
}

function createCategory({ category }) {
  const restaurantCategory = document.createElement("div");
  restaurantCategory.className = "restaurant__category";

  const restaurantImage = document.createElement("img");
  restaurantImage.className = "category-icon";
  restaurantImage.src = CATEGORY_IMAGE_RESOURCES[category];

  restaurantCategory.appendChild(restaurantImage);
  return restaurantCategory;
}

function createName({ name }) {
  const restaurantName = document.createElement("div");
  restaurantName.className = "restaurant__name text-subtitle";
  restaurantName.textContent = name;
  return restaurantName;
}

function createDistance({ distance }) {
  const restaurantDistance = document.createElement("span");
  restaurantDistance.className = "restaurant__distance text-body";
  restaurantDistance.textContent = distance;
  return restaurantDistance;
}

function createDescription({ desc }) {
  const restaurantDescription = document.createElement("div");
  restaurantDescription.className = "restaurant__description text-body";
  restaurantDescription.textContent = desc;
  return restaurantDescription;
}
