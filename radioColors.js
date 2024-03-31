const { Builder, By, Key, until } = require('selenium-webdriver');

async function selectcolor() {
  // Launch the browser
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the website
    await driver.get("https://practice.expandtesting.com/radio-buttons");

    // Selecting colors
    const colors = ['blue', 'red', 'yellow', 'black', 'green'];
    for (const color of colors) {
        await driver.findElement(By.css(`input[name="color"][value="${color}"]`)).click();
        console.log(`Selected color: ${color}`);
        await driver.sleep(1000);
    }

} catch (error) {
    console.error('An error occurred:', error);
} finally {
    // Close browser
    await driver.quit();
}
}
selectcolor();