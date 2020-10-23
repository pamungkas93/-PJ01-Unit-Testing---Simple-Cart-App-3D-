/// <reference types="cypress" />

describe("Form Testing", () => {
    it("Visit Page, Changing theme to Lightmode and Testing Inline Form", () => {
      cy.visit("/");
      cy.contains("Forms").click();
      cy.contains("Form Layouts").click();
      cy.contains("Light").click();
      cy.contains("Dark").click();
      cy.contains("nb-card", "Inline form")
        .find('[placeholder="Jane Doe"]')
        .click()
        .type("Dina Lisuardi")
        .should("have.value", "Dina Lisuardi");
      cy.contains("nb-card", "Inline form")
        .find('[placeholder="Email"]')
        .click()
        .type("lisuardidina@gmail.com")
        .should("have.value", "lisuardidina@gmail.com");
      cy.contains("nb-card", "Inline form").find(".custom-checkbox").click();
    });
  
    it("Testing Using the Grid", () => {
      cy.get("#inputEmail1")
        .type("lisuardi@gmail.com")
        .should("have.value", "lisuardi@gmail.com");
      cy.get("#inputPassword2").type("ardan123").should("have.value", "ardan123");
      cy.contains("Option 1").click();
    });
  
    it("Testing Basic Form", () => {
      cy.get("#exampleInputEmail1")
        .type("lisuardidina@gmail.com")
        .should("have.value", "lisuardidina@gmail.com");
      cy.get("#exampleInputPassword1")
        .type("Lisuardi07")
        .should("have.value", "Lisuardi07");
      cy.contains("Check me out").click();
    });
  
    it("Testing Form Without Labels", () => {
        cy.get('[placeholder="Recipients"]')
          .type("Dina Lisuardi")
          .should("have.value", "Dina Lisuardi");
        cy.get('[placeholder="Subject"]')
          .type("Assalamualaikum")
          .should("have.value", "Assalamualaikum");
        cy.get('textarea[placeholder="Message"]')
          .type("Assalamualaikum, saya Dina Lisuardi")
          .should("have.value", "Assalamualaikum, saya Dina Lisuardi");
      });
  
    it("Testing Block form", () => {
      cy.get("#inputFirstName")
        .type("Dina Lisuardi")
        .should("have.value", "Dina Lisuardi");
      cy.get("#inputLastName").type("Lisuardi").should("have.value", "Lisuardi");
      cy.get("#inputEmail")
        .type("lisuardidina@gmail.com")
        .should("have.value", "lisuardidina@gmail.com");
      cy.get("#inputWebsite")
        .type("https://www.instagram.com/dinal0706/?hl=id")
        .should("have.value", "https://www.instagram.com/dinal0706/?hl=id");
    });
  });
  