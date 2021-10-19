import puppeteer from "puppeteer";

describe("Chatly Tests", () => {
  let browser;
  let page;

  jest.setTimeout(60000)
  beforeAll(async () => {
    browser = await puppeteer.launch(/* {
      headless: false,
      sloMo: 35
    }*/);
    page = await browser.newPage();
  });

  it("Authentication: contains the welcome text", async () => {
    //await AuthRoute.signOut()
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".App h2");
    const text = await page.$eval(".App h2", (e) => e.textContent);
    expect(text).toContain("Welcome back");
  });

  it("Authentication: Should show error when form is not filled", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".login-form");

    await page.evaluate(() => {document.querySelector('.login-form button').click()});

    let text = await page.$eval(".chakra-alert__desc", (e) => e.textContent);
    
    expect(text).toBe("username must be at least 3 letters");

  });

  it("Authentication: Should show error when wrong password is entered", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".login-form");
    
    await page.type("input[name='username']", "ewere");
    await page.type("input[name='password']", "passwor");

    await page.evaluate(() => {document.querySelector('.login-form button').click()});

    await page.waitForTimeout(3000);
    const text = await page.$eval(".chakra-alert__desc", (e) => e.textContent);
  
    expect(text).toBe("Password is incorrect");
  });

  it("Authentication: Should Log in user", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".login-form");

    await page.type("input[name='username']", "ewere");

    await page.type("input[name='password']", "password");
    await page.evaluate(() => {document.querySelector('.login-form button').click();});
    
    await page.waitForTimeout(3000);
    const text = await page.$eval(".chakra-alert__desc", (e) => e.textContent);
  
    expect(text).toBe("Authentication successful");
  });

  it("Home: Should Contains greeting", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForTimeout(3000);
    const home = await page.$eval('.App h2', el => el.textContent);
    expect(home).toContain("Hello ewere");
  });

  it("Home: Clicking Start should take me to Chat Page", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForTimeout(3000);
    
    await page.evaluate(() => {document.querySelector('button.start-chat').click();});

    await page.waitForTimeout(3000);
    await page.waitForSelector(".chat-input");
    await page.waitForSelector("#trigger");
  });

  it("Chat: Creating message should return a response from ottonova", async () => {
    await page.goto("http://localhost:3000/chat");
    await page.waitForTimeout(3000);
    
    await page.type("input.chat-input", "hello");
    await page.evaluate(() => {document.querySelector("button[type='submit'").click();});

    await page.waitForTimeout(3000);
    await page.waitForSelector("#msg0");
    await page.waitForSelector("#msg1");

    const home = await page.$eval('#msg1 p', el => el.textContent);
    expect(home).toContain("Hey ewere, you said 'hello', right?");
  });

afterAll(() => browser.close());
});