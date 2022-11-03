import MainPage from "../pages/MainPage"
import {assertEqual, click, openPage, compareNumbers, setMobileResolution} from "../../support/commands";
import CatalogPage from "../pages/CatalogPage";


describe('Избранное', () => {
    const main = new MainPage();
    const catalog = new CatalogPage();

    let textActual1;
    let textActual2;
    let textActual3;
    let textActual4;
    let textActualMin160;
    let textActualMin140;
    let textActualMin140Max160;
    let randomBrend;
    let brend;
    let brendArray;
    let placeholderHeightMin;
    let placeholderHeightMax;
    let randomFilter1
    let randomFilter2
    let acerbity
    let age
    let min
    let max
    let ageArray
    let acerbityArray
    let priceArray = Array();
    let priceArray2
    
    localStorage.debug = 'cypress:*'

    it('Фильтр Ширина в каталоге Матрасы + Сброс фильтров', () => {
        setMobileResolution()
        openPage('matrasy/')
        main.closeCookie()

        cy.get(catalog.info).then((text)=>{
            textActual1 = text.text().trim().split(' ')[4]
            main.assertURlEq('https://www.askona.ru/matrasy/')
        })
        
        catalog.choiceSubFilterMobile(catalog.filterWidthMobile, catalog.filterWidthMin, "160")   
        
        cy.get(catalog.info).then((text)=>{
            textActualMin160 = text.text().trim().split(' ')[4]
            main.assertURlEq('https://www.askona.ru/matrasy/160-i-165-i-170-i-175-i-180-i-190-i-195-i-200x/')
        })

        catalog.choiceSubFilterMobile(catalog.filterWidthMobile,catalog.filterWidthMin, "140")
        
        cy.get(catalog.info).then((text)=>{
            textActualMin140 = text.text().trim().split(' ')[4]
            main.assertURlEq('https://www.askona.ru/matrasy/140-i-148-i-150-i-153-i-158-i-160-i-165-i-170-i-175-i-180-i-190-i-195-i-200x/') 
        })

        catalog.choiceSubFilterMobile(catalog.filterWidthMobile,catalog.filterWidthMax, "160")
        
        cy.get(catalog.info).then((text)=>{
            textActualMin140Max160 = text.text().trim().split(' ')[4] 
            main.assertURlEq('https://www.askona.ru/matrasy/140-i-148-i-150-i-153-i-158-i-160x/')
        })

        catalog.clearFilterMobile()

        cy.get(catalog.info).then((text)=>{
            textActual2 = text.text().trim().split(' ')[4]
            main.assertURlEq('https://www.askona.ru/matrasy/')
        })

        cy.get(catalog.info).then(()=>{
            assertEqual(textActual1, textActual2);
            assert(textActualMin140 >= textActualMin160, `Min140=${textActualMin140}, Min160=${textActualMin160}`);
            assert(textActualMin140 >= textActualMin140Max160, `ошибка ${textActualMin140Max160}`);
        })
    })

    it('проверка фильтров длины в каталоге кроватей', () => {
        setMobileResolution()
        openPage('krovati/dvuspalnye/')
        main.closeCookie()

        cy.get(catalog.info).then((text)=>{
            textActual1 = text.text().trim()
            main.assertURlEq('https://www.askona.ru/krovati/dvuspalnye/')
        })

        catalog.choiceSubFilterMobile(catalog.filterLengthMobile, catalog.filterLengthMin, "200")
        main.assertURlEq('https://www.askona.ru/krovati/dvuspalnye/x200-i-203-i-205-i-210-i-215-i-220/')  
        
        catalog.clearSubFilterMobile(catalog.filterLengthMobile)
        main.assertURlEq('https://www.askona.ru/krovati/dvuspalnye/')

    })

    it('Фильтр Тип матраса в каталоге Матрасы', () => {
        setMobileResolution()
        openPage('matrasy/')
        main.closeCookie()
        
        catalog.choiceFilterTypeMobile('bespruzhinnye')
        
        main.assertURlEq('https://www.askona.ru/matrasy/bespruzhinnye/')

        catalog.filterTypeMobileClear('bespruzhinnye')
        main.assertURlEq('https://www.askona.ru/matrasy/')

        catalog.checkFilterTypeMobile('bespruzhinnye')

    })


    it('Фильтр Цена в каталоге Матрасы + Сброс фильтров', () => {
        setMobileResolution()
        openPage('matrasy/')
        main.closeCookie()

        catalog.choiceFilterMobile(catalog.filterPriceMin, "3000")      
        main.assertURlEq('https://www.askona.ru/matrasy/price-ot-3000/')

        catalog.choiceFilterMobile(catalog.filterPriceMax, "6000")        
        main.assertURlEq('https://www.askona.ru/matrasy/price-ot-3000-do-6000/')
        
        catalog.clearFilterChoiceMobile(catalog.filterPriceMin)
        main.assertURlEq('https://www.askona.ru/matrasy/price-do-6000/')

        catalog.changeFilterChoiceMobile(catalog.filterPriceMax, catalog.filterPriceMin, "3000")
        main.assertURlEq('https://www.askona.ru/matrasy/price-ot-3000/')

        catalog.clearFilterMobile()

        main.assertURlEq('https://www.askona.ru/matrasy/')  

    })
    

    it('Фильтр Бренд в каталоге Матрасы', () => {
        setMobileResolution()
        openPage('matrasy/')
        main.closeCookie()

        brendArray = ['askona1','kids', 'basic', 'classic', 'family', 'kingkoil', 'mediflex', 'original-pro', 'ortho', 'serta', 'sleep-expert', 'sleep-professor']

        catalog.clickTypeFilterMobile(catalog.filterBrandMobile)

        cy.get(catalog.filterBrandMobileCheck).then((brendList)=>{
            randomBrend = main.getRandomInt(brendList.length)
            brend = brendList.eq(randomBrend).text()
            catalog.choiceTypeFilterMobile(brendList.eq(randomBrend))
            cy.url().should('include', brendArray[randomBrend])
        })
        
        catalog.clearFilterMobile()

        main.assertURlEq('https://www.askona.ru/matrasy/')

    })


    it('Комбинация фильтров + сортировка + сохранение результатов выборки при возврате в каталог из КТ', () => {
        setMobileResolution()
        openPage('matrasy/')
        main.closeCookie()

        brendArray = ['askona1','kids', 'basic', 'classic', 'family', 'kingkoil', 'mediflex', 'original-pro', 'ortho', 'serta', 'sleep-expert', 'sleep-professor']
        ageArray = ['do-3-let','do-7-let', 'dlya-vzroslyh', 'dlya-podrostkov', 'dlya-pozhilyh', 'ot-7-let']
        acerbityArray = ['myagkiy-1','raznaya-zhestkost', 'myagkie', 'srednei-zhestkosti', 'vysokaja-zhestkost', 'ekstra-zhestkie']

        click(catalog.filterMobile)

        // выбор жесткости
        click(catalog.filterAcerbityMobile)
        cy.get(catalog.filterAcerbityMobileCheck).then((filterList)=>{
            randomFilter1 = main.getRandomInt(filterList.length)
            acerbity = acerbityArray[randomFilter1]
            click(filterList.eq(randomFilter1))  
            cy.get(catalog.filterBack).click({ force: true })
        })
        // выбор возраста
        cy.get(catalog.filterAgeMobile).click({ force: true })
        cy.get(catalog.filterAgeMobileCheck).then((filterList)=>{
            randomFilter2 = main.getRandomInt(filterList.length)
            age = ageArray[randomFilter2]
            click(filterList.eq(randomFilter2))    
            cy.get(catalog.filterBack).click({ force: true })    
        })
        // выбор минимальной и макстимальной высоты
        cy.get(catalog.filterHeightMobile).click({ force: true })
        cy.get(catalog.filterHeightMin).then((heightMin) => {
            placeholderHeightMin = heightMin.attr('placeholder');
        })

        cy.get(catalog.filterHeightMax).then((heightMax) => {
            placeholderHeightMax = heightMax.attr('placeholder');
        })
        
        cy.get(catalog.filterHeightMin).then(()=>{

            min = Number(placeholderHeightMin) + 1
            max = Number(placeholderHeightMax) - 1
            cy.get(catalog.filterHeightMin).type(min,{ force: true });
            cy.get(catalog.filterHeightMax).type(max,{ force: true });

            cy.wait(2000)
            cy.get(catalog.filterButtonShow).click({ force: true }, {timeout: 5000})
            //cy.get(catalog.filterButtonShow).click({ force: true }, {timeout: 5000})
            
            main.assertURlEq(`https://www.askona.ru/matrasy/${acerbity}/height-ot-${min}-do-${max}/${age}/`)     
        })

        cy.get(catalog.info).then((text)=>{
            textActual3 = text.text().trim().split(' ')[4]
        })

        click(catalog.sortMobile)
        click(catalog.sortMobilePrice)
        cy.wait(2000)

        cy.get(catalog.catalogItems).then((catalogItemsList)=>{
            click(catalogItemsList.eq(0))
            cy.go('back')
            main.assertURlInc(`https://www.askona.ru/matrasy/${acerbity}/height-ot-${min}-do-${max}/${age}/`)
            //cy.get(catalog.sortActive).should('exist') 
        })

        cy.wait(2000)

        cy.get(catalog.info).then((text)=>{
            textActual4 = text.text().trim().split(' ')[4]
            assert(textActual3 == textActual4, `ошибка: numberOfProducts3 = ${textActual3}, numberOfProducts4 = ${textActual4}`);
        })


        cy.get(catalog.catalogItems).then((catalogPriceList)=>{
            for (let i = 0 ; i < catalogPriceList.length; i++){
                priceArray[i] = catalogPriceList.eq(i).attr('data-price')
            }
            priceArray2 = priceArray.sort(compareNumbers)
            for (let i = 0 ; i < catalogPriceList.length; i++){
                assert(priceArray[i] == priceArray2[i]);
            }
        })
        
        //cy.get(catalog.sortActive).should('exist') 

        

    })
})