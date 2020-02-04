const puppeteer = require('puppeteer');

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

async function main(login, password, num){
  const browser = await puppeteer.launch(
    {headless: false, 
      'defaultViewport' : { 'width' : 1024, 'height' : 1600 }
  });
  const page = await browser.newPage();
  await page.goto('https://www.nike.com/ru/', {
    waitUntil: 'networkidle2',
  });
  await page.click("button[data-type=click_navJoinLogin]");
  await page.type('input[name=emailAddress]', login, {delay: 20});
  await page.type('input[name=password]', password, {delay: 20});
  await delay(4000);
  await page.click("input[value=ВОЙТИ]");
  await delay(4000);
  await page.goto('https://www.nike.com/ru/launch/t/dunk-low-plum/', {
    waitUntil: 'networkidle2',
  });
  await page.screenshot({path: 'browser' + num + '.png'});
  await browser.close();
};

let login = ['neytronoman@gmail.com', 'iskandarakhm@gmail.com', 'Haswelvc@yandex.ru', /*'takhmdezhanovrs@gmail.com', 'resalle@bk.ru', 'david.kundeutschrus@gmail.com'*/];
    let password = ['Electron99', 'BelarA123456', 'Electron99', /*'BelarA123', 'BElarA123', 'Kun48434348'*/];   

let i = 0;                   

function myLoop () {           
   setTimeout(function () {          
    main(login[i], password[i], i+1)  
    i++;                    
      if (i < login.length) {            
         myLoop();             
      }                        
   }, 2000)
}

myLoop(); 





