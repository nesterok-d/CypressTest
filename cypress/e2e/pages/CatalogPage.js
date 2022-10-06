import {click, getRandom} from "../../support/commands";


class CatalogPage {
 

    
    
    catalogItems = 'a.catalog-card__link'
    catalogIconFavourites = 'div.catalog-card__favorite'
    catalogPrice = 'div.catalog-card div.catalog-card__price'
    productName1 = 'div.catalog-card__title'
    productName1 = 'div.catalog-card__title div'
    productSize = 'div.catalog-card__props-sizes span'
    catalogIconFavouritesActive = 'div.catalog-card__favorite input[checked]'
    info = 'div.pagination-info'

    filterWidthMin = 'input[name="shirina"][data-view="min"]'
    filterWidthMax = 'input[name="shirina"][data-view="max"]'
    filterLengthMin = 'input[name="dlina"][data-view="min"]'
    filterLengthMax = 'input[name="dlina"][data-view="max"]'
    filterPriceMin = 'input[name="price"][data-view="min"]'
    filterPriceMax = 'input[name="price"][data-view="max"]'
    filterBrand = 'a[data-cat_name="brand"]'
    filterAlso = 'div.filter-item span'
    filterAge = 'a[data-cat_name="user_age"]'
    filterAcerbity = 'a[data-cat_name="acerbity"]'
    filterHeightMin = 'input[name="height"][data-view="min"]'
    filterHeightMax = 'input[name="height"][data-view="max"]'
    filterBespruzhinnye = 'a[title="Беспружинный"]'
    filterBespruzhinnyeActive = 'a.checked[title="Беспружинный"]'

    sortPrice = '#filter-mobile > div > button:nth-child(2)'
    sortActive = 'button.sorting-button.active'
    


    buttonClearFilters = 'div.catalog__filter button[type="reset"]'
    catalogButtonClear = 'div.catalog__clear button[type="reset"]'

    getNumberOfProducts(numberOfProducts) {

        let numberOfProductsArray = Array();
        let textActual;

        cy.get(this.info).then((text)=>{
            textActual = text.text().trim()
            numberOfProductsArray = textActual.split(' ');
            numberOfProducts = numberOfProductsArray[4].trim()
            //cy.log(numberOfProducts)
            
        })
    } 

}

export default CatalogPage