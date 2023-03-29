const {I, homePage} = inject()

Feature('Add to cart').tag('e2e')

Before(() => {
    I.amOnPage('/')
    homePage.AcceptCookie();
})

Scenario('Navigate to sneakers and add to cart', () => {
    homePage.OpenMenu()
    homePage.SortbyPrice()
    homePage.ClickOnTheCheapestProduct()
    homePage.SelectSize();
    I.click(homePage.AddToCart)
    I.see("Added to bag")

})
