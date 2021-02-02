describe('store-ui-shared', () => {
  beforeEach(() => cy.visit(
    '/iframe.html?id=headercomponent--primary&knob-title=BoardGameHoard'
  ));

  it('should show the title', () => {
    cy.get('bg-hoard-header').contains('BoardGameHoard');
  });
});
