require("chromedriver");
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require("chai");

describe("selenium tests", function () {
    this.timeout(30_000);

    it("should return 80 KMs", async () => {
        const driver = await new Builder().forBrowser("chrome").build();
        try {
            await driver.get("http://localhost:3000/testing/ex1");
            const search = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div:nth-child(2) > input"));
            await search.sendKeys("50", Key.ENTER);
            const result = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div.mt-4.input-group > input"));
            expect(await result.getAttribute("value")).to.equal("80");
        } finally {
            await driver.quit();
        }
    })
    it("should return 50 Miles", async () => {
        const driver = await new Builder().forBrowser("chrome").build();
        try {
            await driver.get("http://localhost:3000/testing/ex1");
            const search = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div.mt-4.input-group > input"));
            await search.sendKeys("80", Key.ENTER);
            const result = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div:nth-child(2) > input"));
            expect(await result.getAttribute("value")).to.equal("50");
        } finally {
            await driver.quit();
        }
    })
    it("should have a value of 4 after 4 +1 clicks", async () => {
        const driver = await new Builder().forBrowser("chrome").build();
        try {
            await driver.get("http://localhost:3000/testing/ex2");
            for (let i = 0; i < 4; i++){
                let search = await driver.findElement(By.css("#root > div > div.container > div.input-group > button:nth-child(4)")).click();
            }
            const result = await driver.findElement(By.css("#root > div > div.container > div.input-group > input"));
            expect(await result.getAttribute("value")).to.equal("4");
        } finally {
            await driver.quit();
        }
    })
    it("should return Lord of the Rings ", async () => {
        const driver = await new Builder().forBrowser("chrome").build();
        try {
            await driver.get("http://localhost:3000/testing/ex3");
            const search = await driver.findElement(By.css("#filmTitle"));
            await search.sendKeys("lord of the rings", Key.ENTER);
            const result = await driver.wait(until.elementLocated(By.css("#root > div > div.container > div.container > div > div:nth-child(1) > div > div > div")));
            expect(await result.getText()).to.equal("The Lord of the Rings: The Fellowship of the Ring");
        } finally {
            await driver.quit();
        }
    })
    it("should return Harry Potter details page ", async () => {
        const driver = await new Builder().forBrowser("chrome").build();
        try {
            await driver.get("http://localhost:3000/testing/ex3");
            const search = await driver.findElement(By.css("#filmTitle"));
            await search.sendKeys("harry potter", Key.ENTER);
            const result = await driver.wait(until.elementLocated(By.css("#root > div > div.container > div.container > div > div:nth-child(4) > div > img"))).click();
            const result2 = await driver.wait(until.elementLocated(By.css("#root > div > div:nth-child(3) > div > div > div")));
            expect(await result2.getText()).to.equal("Harry Potter and the Prisoner of Azkaban");
        } finally {
            await driver.quit();
        }
    })
})
it("History should have 3 at the 3rd position after 4 clicks", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("http://localhost:3000/testing/ex2");
        for (let i = 0; i < 4; i++){
            let search = await driver.findElement(By.css("#root > div > div.container > div.input-group > button:nth-child(4)")).click();
        }
        const result = driver.wait(until.elementLocated(By.css("#root > div > div.container > div:nth-child(5) > p:nth-child(3)")));
        expect(await result.getText()).to.equal("3");
    } finally {
        await driver.quit();
    }
})