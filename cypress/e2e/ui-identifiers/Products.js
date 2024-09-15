class Products {
  getFirstProductTitle() {
    return cy.get('[data-test=inventory-item]').first().find('.inventory_item_label > a');
  }

  getFirstProductDescription() {
    return cy.get('[data-test=inventory-item]').first().find('.inventory_item_desc');
  }

  getAllProductsCount() {
    return cy.get('[data-test=inventory-item]');
  }

}

export default Products;
