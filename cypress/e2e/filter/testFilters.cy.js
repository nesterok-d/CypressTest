import MainPage from "../pages/MainPage"
import {assertEqual, click, openPage, compareNumbers} from "../../support/commands";
import CatalogPage from "../pages/CatalogPage";


describe('Избранное', () => {
    const main = new MainPage();
    const catalog = new CatalogPage();

    let numberOfProducts1;
    let numberOfProducts2;
    let numberOfProducts3;
    let numberOfProducts4;
    let numberOfProductMin160;
    let numberOfProductMin140;
    let numberOfProductMin140Max160;
    let textActual1;
    let textActual2;
    let textActual3;
    let textActual4;
    let numberOfProductsArray3;
    let numberOfProductsArray4;
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

    /*it('Фильтр Ширина в каталоге Матрасы + Сброс фильтров', () => {
        
        openPage('matrasy/')
        main.closeCookie()

        cy.get(catalog.info).then((text)=>{
            textActual1 = text.text().trim().split(' ')[4]
            main.assertURlEq('https://www.askona.ru/matrasy/')
        })

        cy.get(catalog.filterWidthMin).type("160");
        cy.wait(4000)

        cy.get(catalog.info).then((text)=>{
            textActualMin160 = text.text().trim().split(' ')[4]
            main.assertURlEq('https://www.askona.ru/matrasy/160-i-165-i-170-i-175-i-180-i-190-i-195-i-200x/') 
        })

        cy.get(catalog.filterWidthMin).clear();
        cy.get(catalog.filterWidthMin).type("140")
        cy.wait(4000)

        cy.get(catalog.info).then((text)=>{
            textActualMin140 = text.text().trim().split(' ')[4]
            main.assertURlEq('https://www.askona.ru/matrasy/140-i-148-i-150-i-153-i-158-i-160-i-165-i-170-i-175-i-180-i-190-i-195-i-200x/')
        })

        cy.get(catalog.filterWidthMax).type("160");
        cy.wait(4000)

        cy.get(catalog.info).then((text)=>{
            textActualMin140Max160 = text.text().trim().split(' ')[4] 
            main.assertURlEq('https://www.askona.ru/matrasy/140-i-148-i-150-i-153-i-158-i-160x/')
        })

        click(catalog.catalogButtonClear)
        cy.wait(4000)

        cy.get(catalog.info).then((text)=>{
            textActual2 = text.text().trim().split(' ')[4]
        })

        cy.get(catalog.info).then(()=>{
            assertEqual(textActual1, textActual1);
            assert(textActualMin140 >= textActualMin160, "ошибка");
            assert(textActualMin140 >= textActualMin140Max160, "ошибка");
        })
    })

    it('проверка фильтров длины в каталоге кроватей', () => {
        
        openPage('krovati/dvuspalnye/')
        main.closeCookie()

        cy.get(catalog.info).then((text)=>{
            textActual1 = text.text().trim()
        })

        main.assertURlEq('https://www.askona.ru/krovati/dvuspalnye/')
    
        cy.get(catalog.filterLengthMin).type("200");
        main.assertURlEq('https://www.askona.ru/krovati/dvuspalnye/x200-i-203-i-205-i-210-i-215-i-220/')  

        
        click(catalog.catalogButtonClear)
        main.assertURlEq('https://www.askona.ru/krovati/')

    })

    it('Фильтр Тип матраса в каталоге Матрасы', () => {
        
        openPage('matrasy/')
        main.closeCookie()
        
        click(catalog.filterBespruzhinnye)
        main.assertURlEq('eq', 'https://www.askona.ru/matrasy/bespruzhinnye/')
        cy.get(catalog.filterBespruzhinnyeActive).should('exist')

        click(catalog.filterBespruzhinnye)
        cy.wait(4000)

        cy.get(catalog.catalogButtonClear).should('not.exist')
        cy.get(catalog.filterBespruzhinnyeActive).should('not.exist')        

    })


    it('Фильтр Цена в каталоге Матрасы + Сброс фильтров', () => {
        
        openPage('matrasy/')
        main.closeCookie()

        cy.get(catalog.filterPriceMin).type("3000");        
        main.assertURlEq('https://www.askona.ru/matrasy/price-ot-3000/')

        cy.get(catalog.filterPriceMax).type("6000");
        main.assertURlEq('https://www.askona.ru/matrasy/price-ot-3000-do-6000/')

        cy.get(catalog.filterPriceMin).clear();
        main.assertURlEq('https://www.askona.ru/matrasy/price-do-6000/')

        cy.get(catalog.filterPriceMax).clear();
        cy.get(catalog.filterPriceMin).type("3000");
        main.assertURlEq('https://www.askona.ru/matrasy/price-ot-3000/')

        click(catalog.buttonClearFilters)
        main.assertURlEq('https://www.askona.ru/matrasy/')  

    })
    

    it('Фильтр Бренд в каталоге Матрасы', () => {
        
        openPage('matrasy/')
        main.closeCookie()

        brendArray = ['askona1','kids', 'basic', 'classic', 'family', 'king-koil', 'mediflex', 'original-pro', 'ortho', 'serta', 'sleep-expert', 'sleep-professor']

        cy.get(catalog.filterBrand).then((brendList)=>{
            randomBrend = main.getRandomInt(brendList.length)
            brend = brendList.eq(randomBrend).text()
            click(brendList.eq(randomBrend))
            main.assertURlInc(brendArray[randomBrend])
        })

        click(catalog.buttonClearFilters)

        main.assertURlEq('https://www.askona.ru/matrasy/')

    })*/


    it('Комбинация фильтров + сортировка + сохранение результатов выборки при возврате в каталог из КТ', () => {
        
        openPage('matrasy/')
        main.closeCookie()

        brendArray = ['askona1','kids', 'basic', 'classic', 'family', 'kingkoil', 'mediflex', 'original-pro', 'ortho', 'serta', 'sleep-expert', 'sleep-professor']
        ageArray = ['do-3-let','do-7-let', 'dlya-vzroslyh', 'dlya-podrostkov', 'dlya-pozhilyh', 'ot-7-let']
        acerbityArray = ['myagkiy-1','raznaya-zhestkost', 'myagkie', 'srednei-zhestkosti', 'vysokaja-zhestkost', 'ekstra-zhestkie']

        // выбор жесткости
        
        cy.get(catalog.filterAcerbity).then((filterList)=>{
            randomFilter1 = main.getRandomInt(filterList.length)
            acerbity = acerbityArray[randomFilter1]
            click(filterList.eq(randomFilter1))        
        })
        // выбор возраста

        cy.get(catalog.filterAge).then((filterList)=>{
            randomFilter2 = main.getRandomInt(filterList.length)
            age = ageArray[randomFilter2]
            click(filterList.eq(randomFilter2))        
        })

        //main.getPlaceholder(placeholderHeightMin, catalog.filterHeightMin)
        cy.get(catalog.filterHeightMin).then((heightMin) => {
            placeholderHeightMin = heightMin.attr('placeholder');
        })

        cy.get(catalog.filterHeightMax).then((heightMax) => {
            placeholderHeightMax = heightMax.attr('placeholder');
        })

        // выбор минимальной и макстимальной высоты
        cy.get(catalog.filterHeightMin).then(()=>{

            min = Number(placeholderHeightMin) + 1
            cy.log(min)
            max = Number(placeholderHeightMax) - 1
            cy.get(catalog.filterHeightMin).type(min);
            cy.get(catalog.filterHeightMax).type(max); 
        })

        cy.wait(4000)

        cy.get(catalog.info).then((text)=>{
            textActual3 = text.text().trim().split(' ')[4]
            cy.log(textActual3)
        })

        click(catalog.sortPrice)
        cy.wait(2000)

        cy.get(catalog.catalogItems).then((catalogItemsList)=>{
            click(catalogItemsList.eq(0))
            cy.go('back')
            cy.wait(4000)
            main.assertURlInc(`https://www.askona.ru/matrasy/${acerbity}/height-ot-${min}-do-${max}/${age}/`)
            cy.get(catalog.sortActive).should('exist') 
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
        
        cy.get(catalog.sortActive).should('exist') 

        

    })/**/
})