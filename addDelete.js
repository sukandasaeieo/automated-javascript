const { Builder, By, Key, until } = require('selenium-webdriver');

async function addDelete() {
  //launch the browser
  let driver = await new Builder().forBrowser('chrome').build();

  // Navigate to the website
  try {
    await driver.get("https://practice.expandtesting.com/add-remove-elements");

    // Add 5 items
    for (let i = 0; i < 5; i++) {
      await driver.findElement(By.className('btn-primary')).click();
      await driver.sleep(1000); 
    }

    // Delete each item
    let elements = await driver.findElements(By.className('added-manually'));
    for (let i = 0; i < elements.length; i++) {
      await elements[i].click();
      await driver.sleep(1000); 
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  } finally {
    await driver.quit();
  }
}
addDelete();
