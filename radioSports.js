const { Builder, By, Key, until } = require('selenium-webdriver');

async function selectsport() {
  // Launch the browser
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the website
    await driver.get("https://practice.expandtesting.com/radio-buttons");

    // Selecting sports
    const sports = ['basketball', 'football', 'tennis'];
    for (const sport of sports) {
        await driver.findElement(By.css(`input[name="sport"][value="${sport}"]`)).click();
        console.log(`Selected sport: ${sport}`);
        await driver.sleep(1000);
    }

} catch (error) {
    console.error('An error occurred:', error);
} finally {
    // Close browser
    await driver.quit();
}
}
selectsport();