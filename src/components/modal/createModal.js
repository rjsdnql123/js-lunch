export function createModal({}) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  const modalBackground = document.createElement("div");
  modalBackground.classList.add("modal-backdrop");
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");

  modal.appendChild(modalBackground);
  modal.appendChild(modalContainer);
  return modal;
}
