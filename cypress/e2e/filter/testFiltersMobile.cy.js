import MainPage from "../pages/MainPage"
import {assertEqual, click, openPage, compareNumbers, setMobileResolution} from "../../support/commands";
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
    let numberOfProductsArray1;
    let numberOfProductsArray2;
    let numberOfProductsArray3;
    let numberOfProductsArray4;
    let numberOfProductsArrayMin160;
    let numberOfProductsArrayMin140;
    let numberOfProductsArrayMin140Max160;
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
            textActual1 = text.text().trim()
        })

        cy.url().should('include', 'https://www.askona.ru/matrasy/')

        click(catalog.filterMobile)
        click(catalog.filterWidthMobile)

        cy.get(catalog.filterWidthMin).type("160");
        cy.wait(4000)
        cy.get(catalog.filterButtonShow).click({ force: true })

        cy.get(catalog.info).then((text)=>{
            textActualMin160 = text.text().trim()

        })

        click(catalog.filterMobile)
        click(catalog.filterWidthMobile)

        cy.get(catalog.filterWidthMin).clear();
        cy.get(catalog.filterWidthMin).type("140")
        cy.wait(4000)
        cy.get(catalog.filterButtonShow).click({ force: true })
        
        cy.get(catalog.info).then((text)=>{
            textActualMin140 = text.text().trim()
            cy.url('eq', 'https://www.askona.ru/matrasy/140-i-148-i-150-i-153-i-158-i-160-i-165-i-170-i-175-i-180-i-190-i-195-i-200x/') 
        })

        click(catalog.filterMobile)
        click(catalog.filterWidthMobile)
        cy.get(catalog.filterWidthMax).clear();
        cy.get(catalog.filterWidthMax).type("160");
        cy.wait(4000)
        cy.get(catalog.filterButtonShow).click({ force: true })

        cy.get(catalog.info).then((text)=>{
            textActualMin140Max160 = text.text().trim() 
            cy.url('eq', 'https://www.askona.ru/matrasy/140-i-148-i-150-i-153-i-158-i-160-i-165x/')
        })

        click(catalog.filterMobile)
        cy.wait(4000)
        cy.get(catalog.catalogButtonClearMobile).click({ force: true })
        cy.wait(4000)

        cy.get(catalog.info).then((text)=>{
            textActual2 = text.text().trim()
        })

        cy.get(catalog.info).then(()=>{
            numberOfProductsArray2 = textActual2.split(' ');
            numberOfProducts2 = numberOfProductsArray2[4];

            numberOfProductsArray1 = textActual1.split(' ');
            numberOfProducts1 = numberOfProductsArray1[4];
            cy.log(numberOfProducts1)

            numberOfProductsArrayMin140Max160 = textActualMin140Max160.split(' ');
            numberOfProductMin140Max160 = numberOfProductsArrayMin140Max160[4]

            numberOfProductsArrayMin160 = textActualMin160.split(' ');
            numberOfProductMin160 = numberOfProductsArrayMin160[4]

            numberOfProductsArrayMin140 = textActualMin140.split(' ');
            numberOfProductMin140 = numberOfProductsArrayMin140[4]

            assertEqual(numberOfProducts1, numberOfProducts2);
            assert(numberOfProductMin140 >= numberOfProductMin160, `Min140=${numberOfProductMin140}, Min160=${numberOfProductMin160}`);
            assert(numberOfProductMin140 >= numberOfProductMin140Max160, "ошибка");
        })
    })

    it('проверка фильтров длины в каталоге кроватей', () => {
        setMobileResolution()
        openPage('krovati/dvuspalnye/')
        main.closeCookie()

        cy.get(catalog.info).then((text)=>{
            textActual1 = text.text().trim()

        })

        cy.url().should('eq', 'https://www.askona.ru/krovati/dvuspalnye/')

        click(catalog.filterMobile)
        click(catalog.filterLengthMobile)
    
        cy.get(catalog.filterLengthMin).type("200");
        cy.wait(2000)
        cy.get(catalog.filterButtonShow).click({ force: true })
        cy.url().should('eq', 'https://www.askona.ru/krovati/dvuspalnye/x200-i-203-i-205-i-210-i-215-i-220/')  

        
        click(catalog.filterMobile)
        click(catalog.filterLengthMobile)
        click(catalog.catalogSubButtonClearMobile)
        cy.wait(4000)
        cy.get(catalog.filterButtonShow).click({ force: true })
        cy.url().should('eq', 'https://www.askona.ru/krovati/dvuspalnye/')

    })

    it('Фильтр Тип матраса в каталоге Матрасы', () => {
        setMobileResolution()
        openPage('matrasy/')
        main.closeCookie()
        
        click(catalog.filterMobile)
        click(catalog.filterTypeMobile)
        click(catalog.filterTypeMobileBespruzhinnye)
        cy.get(catalog.filterTypeMobileBespruzhinnyeCheck).should('exist').should('be.checked')
        cy.wait(2000)
        cy.get(catalog.filterButtonShow).click({ force: true })
        
        cy.url().should('eq', 'https://www.askona.ru/matrasy/bespruzhinnye/')

        click(catalog.filterMobile)
        click(catalog.filterTypeMobile)
        cy.get(catalog.filterTypeMobileBespruzhinnyeCheck).should('exist').should('be.checked')
        click(catalog.filterTypeMobileBespruzhinnye)
        cy.get(catalog.filterTypeMobileBespruzhinnyeCheck).should('not.be.visible').should('not.be.checked')
        cy.wait(2000)
        cy.get(catalog.filterButtonShow).click({ force: true })
        cy.url().should('eq', 'https://www.askona.ru/matrasy/')


        click(catalog.filterMobile)
        click(catalog.filterTypeMobile)
        cy.get(catalog.filterTypeMobileBespruzhinnyeCheck).should('not.be.visible').should('not.be.checked')

    })


    it('Фильтр Цена в каталоге Матрасы + Сброс фильтров', () => {
        setMobileResolution()
        openPage('matrasy/')
        main.closeCookie()

        click(catalog.filterMobile)
        cy.get(catalog.filterPriceMin).type("3000");
        cy.wait(2000)
        cy.get(catalog.filterButtonShow).click({ force: true })
        
        cy.url().should('eq', 'https://www.askona.ru/matrasy/price-ot-3000/')

        click(catalog.filterMobile)
        cy.get(catalog.filterPriceMax).type("6000");
        cy.wait(2000)
        cy.get(catalog.filterButtonShow).click({ force: true })
        
        cy.url().should('eq', 'https://www.askona.ru/matrasy/price-ot-3000-do-6000/')

        click(catalog.filterMobile)
        cy.get(catalog.filterPriceMin).clear();
        cy.wait(2000)
        cy.get(catalog.filterButtonShow).click({ force: true })

        cy.url().should('eq', 'https://www.askona.ru/matrasy/price-do-6000/')

        click(catalog.filterMobile)
        cy.get(catalog.filterPriceMax).clear();
        cy.get(catalog.filterPriceMin).type("3000");
        cy.wait(2000)
        cy.get(catalog.filterButtonShow).click({ force: true })

        cy.url().should('eq', 'https://www.askona.ru/matrasy/price-ot-3000/')

        click(catalog.filterMobile)
        click(catalog.catalogButtonClear2)

        cy.url().should('eq', 'https://www.askona.ru/matrasy/')  

    })
    

    it('Фильтр Бренд в каталоге Матрасы', () => {
        setMobileResolution()
        openPage('matrasy/')
        main.closeCookie()

        brendArray = ['askona1','kids', 'basic', 'classic', 'family', 'kingkoil', 'mediflex', 'original-pro', 'ortho', 'serta', 'sleep-expert', 'sleep-professor']

        click(catalog.filterMobile)
        click(catalog.filterBrandMobile)
        cy.get(catalog.filterBrandMobileCheck).then((brendList)=>{
            randomBrend = main.getRandomInt(brendList.length)
            brend = brendList.eq(randomBrend).text()
            cy.log(brend)
            click(brendList.eq(randomBrend))
            cy.wait(2000)
            cy.get(catalog.filterButtonShow).click({ force: true })
            cy.wait(3000)
            cy.url().should('include', brendArray[randomBrend])
        })
        
        click(catalog.filterMobile)
        click(catalog.catalogButtonClear2)
        cy.wait(4000)

        cy.url().should('eq', 'https://www.askona.ru/matrasy/')

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
            cy.get(catalog.filterButtonShow).click({ force: true })
            cy.wait(2000)
            cy.url().should('eq', `https://www.askona.ru/matrasy/${acerbity}/height-ot-${min}-do-${max}/${age}/`)     
        })

        cy.get(catalog.info).then((text)=>{
            textActual3 = text.text().trim()
        })

        click(catalog.sortMobile)
        click(catalog.sortMobilePrice)
        cy.wait(2000)

        cy.get(catalog.catalogItems).then((catalogItemsList)=>{
            click(catalogItemsList.eq(0))
            //cy.wait(2000)
            cy.go('back')
            cy.url().should('include', `https://www.askona.ru/matrasy/${acerbity}/height-ot-${min}-do-${max}/${age}/`)
            //cy.get(catalog.sortActive).should('exist') 
        })

        cy.wait(2000)

        cy.get(catalog.info).then((text)=>{
            textActual4 = text.text().trim()
            numberOfProductsArray4 = textActual4.split(' ');
            numberOfProducts4 = numberOfProductsArray4[4];
            numberOfProductsArray3 = textActual3.split(' ');
            numberOfProducts3 = numberOfProductsArray3[4];
            assert(numberOfProducts3 == numberOfProducts4, `ошибка: numberOfProducts3 = ${numberOfProducts3}, numberOfProducts4 = ${numberOfProducts4}`);

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