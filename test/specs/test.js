const assert = require('assert');

describe('Amazon', () => {
    it('should be a pending test')
    describe('Searching first 15 tablets', () =>{
        it('With price lower than 70', () => {
            browser.url("https://www.amazon.com/");
            browser.setValue('//*[@id="twotabsearchtextbox"]', "tablet");
            //click search button
            browser.element("//*[@class = 'nav-input' and @type = 'submit' ]").click();
            const cheapTablets = [];

            while(cheapTablets.length < 15){
                //get all names of tablets on current page
                let titles = browser.elements(`//ul[@id = 's-results-list-atf']/li//h2`).getText();
                //get all prices of tablets on current page
                let prices = browser.elements(`//ul[@id = 's-results-list-atf']/li//span[@class = 'sx-price-whole']`).getText();
                for(let i = 0; i < titles.length; ++i){
                    if(cheapTablets.length >= 15){
                        break;
                    }
                    let currentTitle = titles[i];
                    let currentPrice = parseInt(prices[i]);
                    if(currentPrice < 70){
                        cheapTablets.push({currentTitle, currentPrice});
                    }
                }
                //go to the next page
                browser.element("//*[@id='pagnNextString']").click();
            }

            cheapTablets.forEach((tablet,index) => {
                console.log(`${index+1}. ${tablet.currentTitle} \n ${tablet.currentPrice} \n`);
            })

        });
    })
})