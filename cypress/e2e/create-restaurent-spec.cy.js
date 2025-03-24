describe("레스토랑을 추가할 수 있다.", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
    cy.viewport(1200, 1000);

    cy.get(".gnb__button").click();
  });

  it("음식점의 카테고리 기본값은 '선택해 주세요'이다.", () => {
    cy.get(".modal #category").should("have.value", "선택해 주세요");
    cy.get(".modal #category option:selected").should(
      "have.text",
      "선택해 주세요"
    );
  });

  it("음식점의 카테고리를 선택할 수 있다.", () => {
    cy.get(".modal .form-select option[value='한식']").should("exist");

    cy.get(".modal .form-select").select("한식");

    cy.get(".modal .form-select").should("have.value", "한식");
  });

  it('음식점 카테고리에는 "한식", "중식", "일식", "양식", "기타" 가 있다.', () => {
    cy.get(".modal .form-select option[value='한식']").should("exist");

    cy.get(".modal .form-select option[value='중식']").should("exist");

    cy.get(".modal .form-select option[value='일식']").should("exist");

    cy.get(".modal .form-select option[value='양식']").should("exist");

    cy.get('.modal .form-select option[value="기타"]').should("exist");
  });

  it("음식점의 이름을 입력할 수 있다.", () => {
    cy.get('.modal .form-item input[name="name"]').type("새로운 음식점");
    cy.get('.modal .form-item input[name="name"]').should(
      "have.value",
      "새로운 음식점"
    );
  });
  it("음식점의 거리를 선택할 수 있다.", () => {
    cy.get(".modal #distance").should("have.value", "선택해 주세요");
    cy.get(".modal #distance").select("10분 내");
    cy.get(".modal #distance").should("have.value", "10분 내");
  });

  it("음식점의 설명을 입력할 수 있다.", () => {
    cy.get(".modal #description").should("exist");
    cy.get(".modal #description").type("설명을 기입할수 있다.");
    cy.get(".modal #description").should("have.value", "설명을 기입할수 있다.");
  });

  it("링크를 입력할 수 있다.", () => {
    cy.get('.modal .form-item input[name="link"]').type("새로운 음식점");
    cy.get('.modal .form-item input[name="link"]').should(
      "have.value",
      "새로운 음식점"
    );
  });

  it("전체 플로우 테스트", () => {
    cy.get(".modal #category").should("have.value", "선택해 주세요");
    cy.get(".modal .form-select").select("한식");

    cy.get('.modal .form-item input[name="name"]').type("새로운 음식점");
    cy.get(".modal #distance").select("10분 내");
    cy.get(".modal #description").type("설명을 기입할수 있다.");

    cy.get('.modal .form-item input[name="link"]').type("새로운 음식점");

    cy.get(".modal .button--primary").click();
    cy.get(".modal.modal--open").should("not.exist");
  });
});
