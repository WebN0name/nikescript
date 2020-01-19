const {Builder, By,Key} = require("selenium-webdriver");

async function example(email, password){
    let driver = new Builder().forBrowser("firefox").build();
    await driver.get("https://www.nike.com/ru/");
    await (await driver.findElement(By.className("nav-btn"))).click();
    await driver.findElement(By.name("emailAddress")).sendKeys(email);
    await driver.findElement(By.name("password")).sendKeys(password);
    setTimeout(() => {
        driver.findElement(By.xpath("//input[@value='ВОЙТИ']")).click();
    }, 5000)
}

let emails = ['neytronoman@gmail.com', 'iskandarakhm@gmail.com', 'Haswelvc@yandex.ru'];
let passwords = ['Electron99', 'BelarA123456', 'Electron99'];


for(let i = 0; i< emails.length; i++){
    example(emails[i], passwords[i]);
}



