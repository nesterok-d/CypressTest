import MainPage from "../e2e/pages/MainPage"
import {assertEqual, click, setText, openPage, setMobileResolution} from "../support/commands";
import ProductPage from "../e2e/pages/ProductPage";
import FavouritesPage from "../e2e/pages/FavouritesPage"
import CatalogPage from "./pages/CatalogPage";
import { each } from "cypress/types/bluebird";

describe('Избранное', () => {
    const main = new MainPage();
    const card = new ProductPage();
    const favour = new FavouritesPage();
    const catalog = new CatalogPage();

    let favouritesNumber;
    let message;
    let numberOfProducts1;
    let numberOfProducts2;
    let numberOfProductMin160;
    let numberOfProductMin140;
    let numberOfProductMin140Max160;
    let numberOfProduct5;
    let textActual1;
    let textActual2;
    let numberOfProductsArray1;
    let numberOfProductsArray2;
    let numberOfProductsArrayMin160;
    let numberOfProductsArrayMin140;
    let numberOfProductsArrayMin140Max160;
    let textActualMin160;
    let textActualMin140;
    let textActualMin140Max160;
    let url;
    let randomBrend;
    let brend;
    let brendArray;
    let resalts;
    let placeholderHeightMin;
    let placeholderHeightMax;
    let randomFilter1
    let randomFilter2
    let acerbity
    let age
    let min
    let max
    let sortType
    let length
    let sortTypeText
    
    localStorage.debug = 'cypress:*'

    //cy.get("#username").type("tomsmith");

    /*it('проверка фильтров ширины в каталоге матрасов', () => {
        
        openPage('matrasy/')
        main.closeCookie()

        cy.get(catalog.info).then((text)=>{
            textActual1 = text.text().trim()
        })

        cy.url().should('include', 'https://www.askona.ru/matrasy/')
        //assertEqual(url, 'https://www.askona.ru/matrasy/')  https://www.askona.ru/matrasy/140-i-148-i-150-i-153-i-158-i-160-i-165-i-170-i-175-i-180-i-190-i-195-i-200x/

        cy.get(catalog.filterWidthMin).type("160");
        cy.wait(4000)
        //assertEqual(cy.url(), 'https://www.askona.ru/matrasy/')   

        cy.get(catalog.info).then((text)=>{
            textActualMin160 = text.text().trim()
        })

        cy.get(catalog.filterWidthMin).clear();
        cy.get(catalog.filterWidthMin).type("140")
        cy.wait(4000)

        cy.get(catalog.info).then((text)=>{
            textActualMin140 = text.text().trim()
        })

        cy.get(catalog.filterWidthMax).type("160");
        cy.wait(4000)


        cy.get(catalog.info).then((text)=>{
            textActualMin140Max160 = text.text().trim()
            
        })


        click(catalog.catalogButtonClear)
        cy.wait(4000)

        cy.get(catalog.info).then((text)=>{
            textActual2 = text.text().trim()

        })

        cy.get(catalog.info).then(()=>{
            numberOfProductsArray2 = textActual2.split(' ');
            numberOfProducts2 = numberOfProductsArray2[4];
            cy.log(`numberOfProducts2 = ${numberOfProducts2}`)

            numberOfProductsArray1 = textActual1.split(' ');
            numberOfProducts1 = numberOfProductsArray1[4];
            cy.log(`numberOfProducts1 = ${numberOfProducts1}`)

            numberOfProductsArrayMin140Max160 = textActualMin140Max160.split(' ');
            numberOfProductMin140Max160 = numberOfProductsArrayMin140Max160[4]
            cy.log(`numberOfProductMin140Max160 = ${numberOfProductMin140Max160}`)

            numberOfProductsArrayMin160 = textActualMin160.split(' ');
            numberOfProductMin160 = numberOfProductsArrayMin160[4]
            cy.log(`numberOfProductMin160 = ${numberOfProductMin160}`)

            numberOfProductsArrayMin140 = textActualMin140.split(' ');
            numberOfProductMin140 = numberOfProductsArrayMin140[4]
            cy.log(`numberOfProductMin140 = ${numberOfProductMin140}`)

            assertEqual(numberOfProducts1, numberOfProducts2);
            assert(numberOfProductMin140 >= numberOfProductMin160, "ошибка");
            assert(numberOfProductMin140 >= numberOfProductMin140Max160, "ошибка");

        })
    
    })*/

    /*it('проверка фильтров длины в каталоге кроватей', () => {
        
        openPage('krovati/dvuspalnye/')
        main.closeCookie()

        cy.get(catalog.info).then((text)=>{
            textActual1 = text.text().trim()
        })

        cy.url().should('eq', 'https://www.askona.ru/krovati/dvuspalnye/')
        //assertEqual(url, 'https://www.askona.ru/matrasy/')  https://www.askona.ru/matrasy/140-i-148-i-150-i-153-i-158-i-160-i-165-i-170-i-175-i-180-i-190-i-195-i-200x/

        cy.get(catalog.filterLengthMin).type("200");
        cy.wait(4000)
        cy.url().should('eq', 'https://www.askona.ru/krovati/dvuspalnye/x200-i-203-i-205-i-210-i-215-i-220/')  

        
        click(catalog.catalogButtonClear)
        cy.wait(4000)
        cy.url().should('eq', 'https://www.askona.ru/krovati/')

    })*/

    /*it('Фильтр Тип матраса в каталоге Матрасы', () => {
        
        openPage('matrasy/')
        main.closeCookie()
        
        click(catalog.filterBespruzhinnye)
        cy.wait(4000)
        
        cy.url().should('eq', 'https://www.askona.ru/matrasy/bespruzhinnye/')

        click(catalog.filterBespruzhinnye)
        cy.wait(4000)

        cy.get(catalog.catalogButtonClear).should('not.exist')
        cy.get(catalog.filterBespruzhinnyeActive).should('not.exist')        

    })*/


    /*it('Фильтр Цена в каталоге Матрасы + Сброс фильтров', () => {
        
        openPage('matrasy/')
        main.closeCookie()

        cy.get(catalog.filterPriceMin).type("3000");
        cy.wait(4000)
        
        cy.url().should('eq', 'https://www.askona.ru/matrasy/price-ot-3000/')

        cy.get(catalog.filterPriceMax).type("6000");
        cy.wait(4000)
        
        cy.url().should('eq', 'https://www.askona.ru/matrasy/price-ot-3000-do-6000/')

        cy.get(catalog.filterPriceMin).clear();
        cy.wait(4000)

        cy.url().should('eq', 'https://www.askona.ru/matrasy/price-do-6000/')

        cy.get(catalog.filterPriceMax).clear();
        cy.get(catalog.filterPriceMin).type("3000");
        cy.wait(4000)

        cy.url().should('eq', 'https://www.askona.ru/matrasy/price-ot-3000/')

        click(catalog.buttonClearFilters)
        cy.wait(4000)

        cy.url().should('eq', 'https://www.askona.ru/matrasy/')  

    })*/
    //

    it('Фильтр Бренд в каталоге Матрасы', () => {
        
        openPage('matrasy/')
        main.closeCookie()

        brendArray = ['askona1','kids', 'basic', 'classic', 'family', 'king-koil', 'mediflex', 'original-pro', 'ortho', 'serta', 'sleep-expert', 'sleep-professor']

        cy.get(catalog.filterBrand).then((brendList)=>{
            randomBrend = main.getRandomInt(brendList.length)
            brend = brendList.eq(randomBrend).text()
            click(brendList.eq(randomBrend))
            cy.log(brend)
            cy.wait(3000)

            cy.url().should('include', brendArray[randomBrend])
            
        })

        click(catalog.buttonClearFilters)
        cy.wait(4000)

        cy.url().should('eq', 'https://www.askona.ru/matrasy/')

    })


    // Комбинация фильтров + сортировка + сохранение результатов выборки при возврате в каталог из КТ
    // <preconds>Осуществлен переход в каталог /matrasy/
    // 1 В блоке с фильтрами выбираем рандомно по одному значению в фильтрах Жесткость и Возраст.
    // В поля фильтра Высота вводим значения от и до (в пределах мин и макс)
    // Клик на сортировку Цена
    // Запоминаем кол-во товаров в выборке
    // Переходим в первую карточку товара
    // Возвращаемся в каталог: клик на кнопку назад в браузере.
    // OP Проверяем урл: /matrasy/XX/height-ot-ZZ-do-QQ/YY/
    // XX - выбранная жесткость
    // ZZ и QQ - значения от и до, введенные в фильтре Высота
    // YY - возраст
    // Выбранный фильтр отмечен как активный (класс active у нажатой ссылки).
    // Кол-во товаров в выборке то, что запоминали
    // Товары в плитке отсортированы по цене от меньшей к большей.
    // минимальная и максимальная ширина выбирается из данных в списках min_width_list и max_width_list
    /*it('Комбинация фильтров + сортировка + сохранение результатов выборки при возврате в каталог из КТ', () => {
        
        openPage('matrasy/')
        main.closeCookie()

        brendArray = ['askona1','kids', 'basic', 'classic', 'family', 'kingkoil', 'mediflex', 'original-pro', 'ortho', 'serta', 'sleep-expert', 'sleep-professor']

        // выбор жесткости
        cy.get(catalog.filterAcerbity).then((filterList)=>{
            randomFilter1 = main.getRandomInt(filterList.length)
            acerbity = filterList.eq(randomFilter1).text()
            click(filterList.eq(randomFilter1))        
        })
        // выбор возраста
        cy.get(catalog.filterAge).then((filterList)=>{
            randomFilter2 = main.getRandomInt(filterList.length)
            age = filterList.eq(randomFilter2).text()
            click(filterList.eq(randomFilter2))        
        })

        cy.get(catalog.filterHeightMin).then((heightMin) => {
            placeholderHeightMin = heightMin.attr('placeholder');
        })

        cy.get(catalog.filterHeightMax).then((heightMax) => {
            placeholderHeightMax = heightMax.attr('placeholder');
        })

        // выбор минимальной и макстимальной высоты
        cy.get(catalog.filterHeightMin).then(()=>{

            min = Number(placeholderHeightMin) + Number(main.getRandomInt(placeholderHeightMax-placeholderHeightMin))
            max = Number(min) + Number(main.getRandomInt(placeholderHeightMax-min))
            cy.get(catalog.filterHeightMin).type(min);
            cy.get(catalog.filterHeightMax).type(max);
            cy.log(`min = ${min}`)
            cy.log(`max = ${max}`)      
        })
        
        click(catalog.sortPrice)
        cy.get(catalog.catalogItems).then((catalogList)=>{
            click(catalogList.eq(1))
            cy.go('back')
            cy.url().should('eq', 'https://www.askona.ru/matrasy/')
            

        })


        

        click(catalog.buttonClearFilters)
        cy.wait(4000)
        window.history.back();
        cy.url().should('eq', 'https://www.askona.ru/matrasy/')

    })*/
})