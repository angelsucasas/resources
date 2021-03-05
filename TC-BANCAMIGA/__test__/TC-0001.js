require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
const Keys = require('selenium-webdriver').Key

describe('TC-0001', function() {
    jest.setTimeout(300000);
    let driver
    let vars
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function() {
        await driver.quit();
    })
    it('TC-0001: inicio de sesión PN exitoso', async function() {
        await driver.manage().window().maximize();
        await driver.get("https://autogestion-bancamiga-lab.herokuapp.com/");        
        await driver.findElement(By.id("email")).click();
        await driver.findElement(By.id("email")).sendKeys("angel.alejandro08@hotmail.com");
        await driver.findElement(By.id("password")).sendKeys("angel!?*1");
        await driver.findElement(By.id("password")).sendKeys(Keys.ENTER);
        await driver.findElement(By.css(".icon")).click();
    })
})