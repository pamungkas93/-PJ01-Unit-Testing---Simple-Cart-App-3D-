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
        .type("Dhuta Pamungkas Ibnusiqin")
        .should("have.value", "Dhuta Pamungkas Ibnusiqin");
      cy.contains("nb-card", "Inline form")
        .find('[placeholder="Email"]')
        .click()
        .type("dhutadhuta4@gmail.com")
        .should("have.value", "dhutadhuta4@gmail.com");
      cy.contains("nb-card", "Inline form").find(".custom-checkbox").click();
    });
  
    it("Testing Using the Grid", () => {
      cy.get("#inputEmail1")
        .type("lisuardi@gmail.com")
        .should("have.value", "lisuardi@gmail.com");
      cy.get("#inputPassword2").type("dhuta93").should("have.value", "dhuta93");
      cy.contains("Option 1").click();
    });
  
    it("Testing Basic Form", () => {
      cy.get("#exampleInputEmail1")
        .type("dhutadhuta4@gmail.com")
        .should("have.value", "dhutadhuta4@gmail.com");
      cy.get("#exampleInputPassword1")
        .type("dhutadhuta4")
        .should("have.value", "dhutadhuta4");
      cy.contains("Check me out").click();
    });
  
    it("Testing Form Without Labels", () => {
        cy.get('[placeholder="Recipients"]')
          .type("Dhuta Pamungkas Ibnusiqin")
          .should("have.value", "Dhuta Pamungkas Ibnusiqin");
        cy.get('[placeholder="Subject"]')
          .type("Assalamualaikum")
          .should("have.value", "Assalamualaikum");
        cy.get('textarea[placeholder="Message"]')
          .type("Assalamualaikum, saya Dhuta Pamungkas Ibnusiqin")
          .should("have.value", "Assalamualaikum, saya Dhuta Pamungkas Ibnusiqin");
      });
  
    it("Testing Block form", () => {
      cy.get("#inputFirstName")
        .type("Dhuta Pamungkas Ibnusiqin")
        .should("have.value", "Dhuta Pamungkas Ibnusiqin");
      cy.get("#inputLastName").type("Lisuardi").should("have.value", "Lisuardi");
      cy.get("#inputEmail")
        .type("dhutadhuta4@gmail.com")
        .should("have.value", "dhutadhuta4@gmail.com");
      cy.get("#inputWebsite")
        .type("https://www.facebook.com/tata/?hl=id")
        .should("have.value", "https://www.facebook.com/tata/?hl=id");
    });
  });
  