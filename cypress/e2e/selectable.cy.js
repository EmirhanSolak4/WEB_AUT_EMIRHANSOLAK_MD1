describe('Selectable Grid Test', () => {
    it('should select and validate specific grid items', () => {
      // 1. Sayfaya git
      cy.visit('https://demoqa.com/selectable');
  
      // 2. Grid sekmesine tıkla
      cy.contains('Grid').click();
  
      // 3. Seçilecek kutular
      const selectedItems = ['Two', 'Four', 'Six', 'Eight'];
      selectedItems.forEach(item => {
        cy.contains('.list-group-item', item).click();
      });
  
      // 4. Seçili olanları doğrula
      selectedItems.forEach(item => {
        cy.contains('.list-group-item', item).should('have.class', 'active');
      });
  
      // 5. Seçili olmayanları doğrula
      const unselectedItems = ['One', 'Three', 'Five', 'Seven', 'Nine'];
      unselectedItems.forEach(item => {
        cy.contains('.list-group-item', item).should('not.have.class', 'active');
      });
    });
  });
  