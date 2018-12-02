const assert = require('assert');

describe('Amazon', () => {
    it('should be a pending test')
    describe('Searching tablets', () =>{
        it('Test case 1', () => {
            browser.url("https://www.amazon.com/");
            browser.setValue('//*[@id="twotabsearchtextbox"]', "tablet");
            browser.pause(3000);
            browser.element("//*[@class = 'nav-input' and @type = 'submit' ]").click()
        });
    })
})