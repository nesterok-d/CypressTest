import {click, getRandom} from "../../support/commands";


class CatalogPage {
 

    
    
    catalogItems = 'div.catalog__items[id="filter-items"] div.catalog-card'
    catalogItemsAvailable = 'div.catalog__items[id="filter-items"] div.catalog-card[data-available="true"] a'
    catalogItemsAvailable1 = '#filter-items > div > div.catalog-card__image'
    catalogIconFavourites = 'div.catalog-card__favorite'
    catalogPrice = 'div.catalog-card div.catalog-card__price'
    catalogWidth = 'div.catalog-card__props-sizes span'
    catalogPricePercent = 'div.catalog-card div.catalog-card__price div.stickers--discount'
    catalogPricePercentOld = 'div.catalog-card div.catalog-card__price span'
    productName1 = 'div.catalog-card__title'
    productName1 = 'div.catalog-card__title div'
    productSize = 'div.catalog-card__props-sizes span'
    catalogIconFavouritesActive = 'div.catalog-card__favorite input[checked]'
    info = 'div.pagination-info'

    filterWidthMin = 'input[name="shirina"][data-view="min"]'
    filterWidthMax = 'input[name="shirina"][data-view="max"]'
    filterWidthMobile = 'div[data-target="#shirina-modal"]'

    filterLengthMin = 'input[name="dlina"][data-view="min"]'
    filterLengthMax = 'input[name="dlina"][data-view="max"]'
    filterLengthMobile = 'div[data-target="#dlina-modal"]'

    filterPriceMin = 'input[name="price"][data-view="min"]'
    filterPriceMax = 'input[name="price"][data-view="max"]'

    filterBrand = 'a[data-cat_name="brand"]'
    filterBrandMobileCheck = '#brand-modal div div div.modal-body div.custom-checkbox label'
    filterBrandMobile = 'div[data-target="#brand-modal"]' 
    filterAlso = 'div.filter-item span'
    filterAge = 'a[data-cat_name="user_age"]'
    filterAgeMobile = 'div[data-target="#user_age-modal"]' 
    filterAgeMobileCheck = '#user_age-modal div div div.modal-body div label'

    filterAcerbity = 'a[data-cat_name="acerbity"]'
    filterAcerbityMobile = 'div[data-target="#acerbity-modal"]' 
    filterAcerbityMobileCheck = '#acerbity-modal div div div.modal-body div label'
    
    filterHeightMin = 'input[name="height"][data-view="min"]'
    filterHeightMax = 'input[name="height"][data-view="max"]'
    filterHeightMobile = 'div[data-target="#height-modal"]' 
    filterBack = '#height-modal div div div.modal-header button'

    filterBespruzhinnye = 'a[title="Беспружинный"]'
    filterBespruzhinnyeActive = 'a.checked[title="Беспружинный"]'
    filterTypeMobile = 'div[data-target="#extra_sec_filter_type-modal"]' 
    filterTypeMobileBespruzhinnye = 'label[for="extra_sec_filter_type-bespruzhinnye"]'
    filterTypeMobileBespruzhinnyeCheck = '#extra_sec_filter_type-bespruzhinnye'

    sortPrice = '#filter-mobile > div > button:nth-child(2)'
    sortActive = 'button.sorting-button.active'

    sortMobile = 'button.sorting-mobile'
    sortMobilePrice = '#sorting > div > div > div.modal-body > div > button:nth-child(4)'
    
    filterButtonShow = '#filter div div div.modal-body div.filters-mobile__control button'

    buttonClearFilters = 'div.catalog__filter button[type="reset"]'
    catalogButtonClear = 'div.catalog__clear button[type="reset"]'
    catalogButtonClear2 = 'button[type="reset"]'

    filterMobile = 'div.filters-mobile__burger'
    catalogButtonClearMobile = '#filter > div > div > div.modal-header > button.reset-filter'
    catalogSubButtonClearMobile ='#dlina-modal > div > div > div.modal-body > div.filters-mobile__modal-title > button'

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