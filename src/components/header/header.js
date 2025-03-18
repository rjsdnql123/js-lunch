import { HEADER_CONSTANT } from "./constant";

function createTitle({ titleContent }) {
  const title = document.createElement("h1");
  title.className = "gnb__title text-title";
  title.textContent = titleContent;
  return title;
}

function createButton({ ariaLabel, imgAlt, headerButtonClick }) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "gnb__button";
  button.setAttribute("aria-label", ariaLabel);

  button.addEventListener("click", () => {
    headerButtonClick();
  });

  const img = document.createElement("img");
  img.src = "./public/assets/add-button.png";
  img.alt = imgAlt;
  button.appendChild(img);

  return button;
}

export function createHeaderComponent({ headerButtonClick }) {
  const header = document.createElement("header");
  header.className = "gnb";

  header.appendChild(createTitle({ titleContent: HEADER_CONSTANT.TITLE }));
  header.appendChild(
    createButton({
      ariaLabel: HEADER_CONSTANT.BUTTON_ARIA_LABEL,
      imgAlt: HEADER_CONSTANT.BUTTON_IMG_ALT,
      headerButtonClick,
    })
  );

  return header;
}
