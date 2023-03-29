const {I} = inject();

module.exports = {
    menuLink: locate('button[aria-label="Toggle navigation"]').as('Menu link'),
    AcceptCookieButton: locate('#onetrust-accept-btn-handler').as('Cookie Button'),
    ShoesMenu: locate('[data-category="men-nav-shoes"]').as('Shoes menu'),
    SneakerMenu: locate('[automation-key-category-id="sneakers"]').as('Sneakers menu'),
    productTile: locate('.fixed-ratio-tile').as('productTile'),
    SortByButton: locate('.js-sort-by-btn').as('Sort button'),
    PriceHighLow: locate('[input-id="lowestPrice"]').as('Price Sorting from High to Low'),
    SelectSizeButton:  locate('.js-select-size-btn').as('Select Size button'),
    SelectSize39: locate('[data-current-size="Size 39"]').as('Selelct size 39'),
    AddToCart: locate('[data-ga-addtobag="Add_To_Cart"]:not(disabled)').withText('Add to bag').as('Add to cart'),



    OpenMenu() {
        I.click(this.menuLink);
        I.click(this.ShoesMenu);
        I.click(this.SneakerMenu);
        I.waitForVisible(this.productTile);
    },

    AcceptCookie() {
        I.waitForVisible(this.AcceptCookieButton);
        I.click(this.AcceptCookieButton)
    },

    SortbyPrice() {
        I.click(this.SortByButton);
        I.click(this.PriceHighLow);
    },

    ClickOnTheCheapestProduct() {
        I.click(this.productTile);
        I.waitForVisible(this.SelectSizeButton);
    },

    SelectSize() {
        I.click(this.SelectSizeButton)
        I.waitForVisible(this.SelectSize39)
        I.click(this.SelectSize39)
        I.waitForVisible(this.AddToCart)
    },

}
