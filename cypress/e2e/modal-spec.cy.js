describe("모달이 열리고 닫히는 기능을 확인한다.", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("최초 접속시 모달이 열리지 않는다.", () => {
    cy.get(".modal--open").should("not.exist");
  });

  it("모달을 열고 닫는다.", () => {
    cy.get(".gnb__button").click();
    cy.get(".modal--open").should("exist");
    cy.get(".button--secondary").click();
    cy.get(".modal--open").should("not.exist");
  });
});
