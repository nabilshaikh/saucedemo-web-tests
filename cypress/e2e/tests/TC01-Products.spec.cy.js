/// <reference types="cypress" />
import Login from '../ui-identifiers/Login';
import Header from '../ui-identifiers/PageHeader';
import Product from '../ui-identifiers/Products';

const login = new Login();
const header = new Header();
const product = new Product();

describe('Sample test', () => {
  it('Verify the total products present on Products page (i.e inventory.html)', () => {
    cy.visit('/');
    login.getUsername().type('standard_user');
    login.getPassword().type('secret_sauce');
    login.getLoginButton().click();
    product.getAllProductsCount().should('have.length', 6)
  })
})