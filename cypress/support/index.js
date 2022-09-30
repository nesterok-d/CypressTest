import "./commands"

Cypress.Server.defaults({
    delay: 500,
    force404: false,
    ignore:(xhr) => {
        return true;
    }
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
  // failing the test
    return false
    })