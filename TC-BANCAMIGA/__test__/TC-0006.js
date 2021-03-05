// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

function waitForPageLoad (driver, timeout) {
    var oldHtmlElement;

    // check the arguments
    if (typeof timeout === 'undefined') {
        timeout = 5000;
    } else {
        if (typeof timeout !== 'number' || timeout <= 0) {
            throw new TypeError('The argument timeout must be a integer > 0');
        }
    }

    // get the html tag on the old page
    oldHtmlElement = driver.findElement(webdriver.By.tagName('html'));

    // wait until the function returns true or the timeout expires
    driver.wait(function () {
        // get the html tag on the (eventually already) new page
        var newHtmlElement = driver.findElement(webdriver.By.tagName('html')),
            newHtmlElementId = newHtmlElement.getId(),
            oldHtmlElementId = oldHtmlElement.getId();

        // compare the id of the html tag on the page with the one we just got
        //  and if it's no longer the same one, we must be on the new page.
        return oldHtmlElementId !== newHtmlElementId;
    }, timeout);
}

describe('Completacion datos cliente natural', function() {
  jest.setTimeout(300000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Completacion datos cliente natural', async function() {





    await driver.manage().window().maximize();
    await driver.get("https://autogestion-bancamiga-lab.herokuapp.com/")    
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("angel.alejandro08@hotmail.com")
    await driver.findElement(By.id("password")).sendKeys("angel!?*1")
    await driver.findElement(By.id("password")).sendKeys(Key.ENTER)
    await driver.wait(until.elementLocated(By.css(".site-menu-item:nth-child(1) > a")), 30000)
    await driver.findElement(By.css(".site-menu-item:nth-child(1) > a")).click()
    await driver.wait(until.elementLocated(By.linkText("EDITAR DATOS")), 30000)
    await driver.findElement(By.linkText("EDITAR DATOS")).click()        
    await driver.wait(until.elementLocated(By.id("natural_person_main_email")), 60000)    
    await driver.findElement(By.id("natural_person_main_email")).click()    
    await driver.findElement(By.id("natural_person_main_email")).sendKeys("changeTest@hotmail.com")
    await driver.wait(until.elementLocated(By.id("natural_person_first_name")), 30000)
    await driver.findElement(By.id("natural_person_first_name")).click()
    await driver.findElement(By.id("natural_person_first_name")).sendKeys("Tester")
    await driver.wait(until.elementLocated(By.id("natural_person_second_name")), 30000)
    await driver.findElement(By.id("natural_person_second_name")).click()
    await driver.findElement(By.id("natural_person_second_name")).sendKeys("Selenium")
    await driver.wait(until.elementLocated(By.id("natural_person_first_surname")), 30000)
    await driver.findElement(By.id("natural_person_first_surname")).sendKeys("Online")
    await driver.findElement(By.id("natural_person_first_surname")).click()
    await driver.wait(until.elementLocated(By.id("natural_person_first_surname")), 30000)
    await driver.findElement(By.id("natural_person_first_surname")).sendKeys("Sucasas")
    await driver.wait(until.elementLocated(By.id("natural_person_second_surname")), 30000)
    await driver.findElement(By.id("natural_person_second_surname")).sendKeys("Goncalves")
    await driver.findElement(By.id("natural_person_birth_date")).click()
    await driver.findElement(By.css(".ui-datepicker-year")).click()
    await driver.findElement(By.css(".ui-datepicker-month")).click()
    await driver.findElement(By.linkText("22")).click()
    await driver.findElement(By.id("natural_person_birth_country_id")).click()
    {
      const dropdown = await driver.findElement(By.id("natural_person_birth_country_id"))
      await dropdown.findElement(By.xpath("//option[. = 'ARUBA']")).click()
    }
    await driver.findElement(By.id("natural_person_birth_country_id")).click()
    await driver.findElement(By.id("natural_person_val_gender_id")).click()
    {
      const dropdown = await driver.findElement(By.id("natural_person_val_gender_id"))
      await dropdown.findElement(By.xpath("//option[. = 'MASCULINO']")).click()
    }
    await driver.findElement(By.id("natural_person_val_gender_id")).click()
    await driver.findElement(By.id("natural_person_val_marital_status_id")).click()
    {
      const dropdown = await driver.findElement(By.id("natural_person_val_marital_status_id"))
      await dropdown.findElement(By.xpath("//option[. = 'DIVORCIADO']")).click()
    }
    await driver.findElement(By.id("natural_person_val_marital_status_id")).click()
    await driver.findElement(By.id("natural_person_val_academic_level_id")).click()
    {
      const dropdown = await driver.findElement(By.id("natural_person_val_academic_level_id"))
      await dropdown.findElement(By.xpath("//option[. = 'NO ESPECIFICA']")).click()
    }
    await driver.findElement(By.id("natural_person_val_academic_level_id")).click()
    await driver.findElement(By.id("natural_person_profession_id")).click()
    {
      const dropdown = await driver.findElement(By.id("natural_person_profession_id"))
      await dropdown.findElement(By.xpath("//option[. = 'ARQUITECTURA AERONAÚTICA Y CIENCIAS NAÚT']")).click()
    }
    await driver.findElement(By.id("natural_person_profession_id")).click()
    await driver.findElement(By.id("natural_person_ocupation_id")).click()
    {
      const dropdown = await driver.findElement(By.id("natural_person_ocupation_id"))
      await dropdown.findElement(By.xpath("//option[. = 'AGTE ADMPUBADUN IMPY AFINES NO CLAS']")).click()
    }
    await driver.findElement(By.id("natural_person_ocupation_id")).click()
    await driver.findElement(By.id("natural_person_is_retired")).click()
    {
      const dropdown = await driver.findElement(By.id("natural_person_is_retired"))
      await dropdown.findElement(By.xpath("//option[. = 'NO']")).click()
    }
    await driver.findElement(By.id("natural_person_is_retired")).click()
    await driver.findElement(By.id("natural_person_is_pensioner")).click()
    {
      const dropdown = await driver.findElement(By.id("natural_person_is_pensioner"))
      await dropdown.findElement(By.xpath("//option[. = 'NO']")).click()
    }
    await driver.findElement(By.id("natural_person_is_pensioner")).click()
    {
      const dropdown = await driver.findElement(By.id("natural_person_first_nationality_id"))
      await dropdown.findElement(By.xpath("//option[. = 'BAHAMAS']")).click()
    }
    await driver.findElement(By.id("natural_person_first_nationality_id")).click()
    await driver.findElement(By.id("natural_person_second_nationality_id")).click()
    {
      const dropdown = await driver.findElement(By.id("natural_person_second_nationality_id"))
      await dropdown.findElement(By.xpath("//option[. = 'AUSTRALIA']")).click()
    }
    await driver.findElement(By.id("natural_person_second_nationality_id")).click()
    await driver.findElement(By.id("natural_person_val_permanence_condition_id")).click()
    await driver.findElement(By.id("natural_person_val_permanence_condition_id")).click()
    await driver.findElement(By.id("natural_person_val_relationship_bank_id")).click()
    {
      const dropdown = await driver.findElement(By.id("natural_person_val_relationship_bank_id"))
      await dropdown.findElement(By.xpath("//option[. = 'Contratado']")).click()
    }
    await driver.findElement(By.id("natural_person_val_relationship_bank_id")).click()
    await driver.findElement(By.id("natural_person_number_children")).click()
    await driver.findElement(By.id("natural_person_number_children")).sendKeys("1")
    await driver.findElement(By.id("natural_person_family_burden")).sendKeys("1")
    await driver.findElement(By.id("natural_person_val_relationship_office_public_id")).click()
    {
      const dropdown = await driver.findElement(By.id("natural_person_val_relationship_office_public_id"))
      await dropdown.findElement(By.xpath("//option[. = 'Ejercio cargo publico en el extranjero']")).click()
    }
    await driver.findElement(By.id("natural_person_val_relationship_office_public_id")).click()
    await driver.findElement(By.id("natural_person_val_relationship_office_public_id")).click()
    {
      const dropdown = await driver.findElement(By.id("natural_person_val_relationship_office_public_id"))
      await dropdown.findElement(By.xpath("//option[. = 'Ejerce cargo publico en el pais']")).click()
    }
    await driver.findElement(By.id("natural_person_val_relationship_office_public_id")).click()
    await driver.findElement(By.id("natural_person_val_identification_type_id")).click()
    {
      const dropdown = await driver.findElement(By.id("natural_person_val_identification_type_id"))
      await dropdown.findElement(By.xpath("//option[. = 'CEDULA EXTRANJERA']")).click()
    }
    await driver.findElement(By.id("natural_person_val_identification_type_id")).click()
    await driver.findElement(By.id("natural_person_val_identification_type_id")).click()
    {
      const dropdown = await driver.findElement(By.id("natural_person_val_identification_type_id"))
      await dropdown.findElement(By.xpath("//option[. = 'CEDULA DE IDENTIDAD']")).click()
    }
    await driver.findElement(By.id("natural_person_val_identification_type_id")).click()
    await driver.findElement(By.id("val_prefix_identification_type_id")).click()
    {
      const dropdown = await driver.findElement(By.id("val_prefix_identification_type_id"))
      await dropdown.findElement(By.xpath("//option[. = 'V']")).click()
    }
    await driver.findElement(By.id("val_prefix_identification_type_id")).click()
    await driver.findElement(By.id("natural_person_identification")).click()
    await driver.findElement(By.id("natural_person_identification")).sendKeys("33112020")
    await driver.findElement(By.id("natural_person_identification_expedition_date")).click()
    await driver.findElement(By.css(".ui-datepicker-year")).click()
    await driver.findElement(By.css(".ui-datepicker-year")).click()
    await driver.findElement(By.css("tr:nth-child(3) > td:nth-child(3)")).click()
    {
      const element = await driver.findElement(By.id("natural_person_identification_expiration_date"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.id("ui-datepicker-div"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.css(".natural_people")).click()
    await driver.findElement(By.css("tr:nth-child(6) > td:nth-child(1)")).click()
    await driver.findElement(By.id("natural_person_rif_val_identification_type_id")).click()
    await driver.findElement(By.id("natural_person_rif_val_identification_type_id")).click()
    await driver.findElement(By.id("rif_val_prefix_identification_type_id")).click()
    await driver.findElement(By.id("rif_val_prefix_identification_type_id")).click()
    await driver.findElement(By.id("natural_person_rif_number")).click()
    await driver.findElement(By.id("natural_person_country_of_rif_id")).click()
    {
      const dropdown = await driver.findElement(By.id("natural_person_country_of_rif_id"))
      await dropdown.findElement(By.xpath("//option[. = 'AUSTRIA']")).click()
    }
    await driver.findElement(By.id("natural_person_country_of_rif_id")).click()
    await driver.findElement(By.id("natural_person_rif_expedition_date")).click()
    await driver.findElement(By.css(".ui-datepicker-year")).click()
    await driver.findElement(By.css(".ui-datepicker-month")).click()
    await driver.findElement(By.css("tr:nth-child(2) > td:nth-child(5)")).click()
    await driver.findElement(By.css(".row:nth-child(24) > .col-md-6:nth-child(2) > .form-group")).click()
    await driver.findElement(By.linkText("30")).click()
    await driver.findElement(By.id("natural_person_passport_val_identification_type_id")).click()
    await driver.findElement(By.id("natural_person_passport_val_identification_type_id")).click()
    await driver.findElement(By.id("natural_person_passport_val_prefix_identification_type_id")).click()
    await driver.findElement(By.id("natural_person_passport_val_prefix_identification_type_id")).click()
    await driver.findElement(By.id("natural_person_passport_number")).click()
    await driver.findElement(By.id("natural_person_country_of_passport_id")).click()
    {
      const dropdown = await driver.findElement(By.id("natural_person_country_of_passport_id"))
      await dropdown.findElement(By.xpath("//option[. = 'BAHRAIN']")).click()
    }
    await driver.findElement(By.id("natural_person_country_of_passport_id")).click()
    await driver.findElement(By.css("tr:nth-child(3) > td:nth-child(5)")).click()
    await driver.findElement(By.id("natural_person_passport_expiration_date")).click()
    await driver.findElement(By.linkText("30")).click()
  })
})
