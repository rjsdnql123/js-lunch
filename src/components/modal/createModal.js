import { newRestaurant } from "./constant";
export function createModal() {
  const modal = document.querySelector(".modal");
  const modalBackground = document.createElement("div");
  modalBackground.classList.add("modal-backdrop");
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");
  modalContainer.appendChild(createModalTitle({ title: newRestaurant }));

  modal.appendChild(modalBackground);
  modal.appendChild(modalContainer);
  return modal;
}

function createModalTitle({ title }) {
  const modalTitle = document.createElement("h2");
  modalTitle.classList.add("modal-title", "text-title");
  modalTitle.textContent = title;
  return modalTitle;
}
