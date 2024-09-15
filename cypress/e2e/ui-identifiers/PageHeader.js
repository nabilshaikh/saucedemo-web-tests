class PageHeader {
  getPagePrimaryHeaderLabel() {
    return cy.get('[data-test=primary-header]').find('.app_logo');
  }

  getPageTitleLabel() {
    return cy.get('[data-test=title]');
  }

  getShoppingCart() {
    return cy.get('[data-test=shopping-cart-link]');
  }

  sortProductByCondition(input) {
    return cy.get('[data-test="product-sort-container"]').select(input).invoke('val'); // enter value as ''Price (low to high)''
  }

  getBurgerMenu() {
    return cy.get('#react-burger-menu-btn');
  }

  getAllItems() {
    return cy.get('[data-test=inventory-sidebar-link]');
  }

  getAbout() {
    return cy.get('[data-test=about-sidebar-link]');
  }

  getLogout() {
    return cy.get('[data-test=logout-sidebar-link]');
  }

  getResetAppState() {
    return  cy.get('[data-test=reset-sidebar-link]');
  }
}

export default PageHeader;
