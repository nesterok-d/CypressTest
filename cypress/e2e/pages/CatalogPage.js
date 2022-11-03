import {assertEqual, click, getRandom} from "../../support/commands";
import MainPage from "../pages/MainPage"

class CatalogPage {
 
    main = new MainPage();
    
    
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
    //filterTypeMobile = 'label[for="extra_sec_filter_type-bespruzhinnye"]'
    filterTypeMobileCheck = '#extra_sec_filter_type-bespruzhinnye'

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

    choiceSubFilterMobile(type, border, text){
        this.clickTypeFilterMobile(type)
        cy.get(border).clear();
        cy.get(border).type(text)
        cy.wait(4000)
        cy.get(this.filterButtonShow).click({ force: true })
    }
    choiceFilterMobile(border, text){
        click(this.filterMobile)
        cy.get(border).clear();
        cy.get(border).type(text)
        cy.wait(4000)
        cy.get(this.filterButtonShow).click({ force: true })
    }
    clickTypeFilterMobile(type){
        click(this.filterMobile)
        click(type)
    }
    clearFilterChoiceMobile(border){
        click(this.filterMobile)
        cy.get(border).clear();
        cy.wait(2000)
        cy.get(this.filterButtonShow).click({ force: true })
    }
    changeFilterChoiceMobile(borderForClear, border, text){
        click(this.filterMobile)
        cy.get(borderForClear).clear();
        cy.get(border).type(text)
        cy.wait(2000)
        cy.get(this.filterButtonShow).click({ force: true })
    }
    choiceTypeFilterMobile(type){
        click(type)
        cy.wait(2000)
        cy.get(this.filterButtonShow).click({ force: true })
        cy.wait(3000)
    }

    clearFilterMobile(){
        click(this.filterMobile)
        cy.wait(4000)
        cy.get(this.catalogButtonClearMobile).click({ force: true })
        cy.wait(4000)
    }
    clearSubFilterMobile(SubFilter){
        click(this.filterMobile)
        click(SubFilter)
        click(this.catalogSubButtonClearMobile)
        cy.wait(4000)
        cy.get(this.filterButtonShow).click({ force: true })
    }

    filterTypeMobileClear(type){
        click(this.filterMobile)
        click(this.filterTypeMobile)
        cy.get('#extra_sec_filter_type-'+type).should('exist').should('be.checked')
        click('label[for="extra_sec_filter_type-'+type+'"]')
        cy.get('#extra_sec_filter_type-'+type).should('not.be.visible').should('not.be.checked')
        cy.wait(2000)
        cy.get(this.filterButtonShow).click({ force: true })
    }

    choiceFilterTypeMobile(type){
        click(this.filterMobile)
        click(this.filterTypeMobile)
        cy.get('#extra_sec_filter_type-'+type).should('not.be.visible').should('not.be.checked')
        click('label[for="extra_sec_filter_type-'+type+'"]')
        cy.get('#extra_sec_filter_type-'+type).should('exist').should('be.checked')
        cy.wait(2000)
        cy.get(this.filterButtonShow).click({ force: true })
    }
    checkFilterTypeMobile(type){
        click(this.filterMobile)
        click(this.filterTypeMobile)
        cy.get('#extra_sec_filter_type-'+type).should('not.be.visible').should('not.be.checked')
        
    }
    coiceCatalogItems(){
        cy.get(this.catalogItemsAvailable).then((productList)=>{
            cy.get(productList.eq(Math.floor(Math.random() *productList.length))).click({ force: true })
        })
        cy.wait(1000)
    }

}

export default CatalogPage