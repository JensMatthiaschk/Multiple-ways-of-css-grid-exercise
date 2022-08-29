
//Headecimal random color picker function
//
//const button = document.querySelector('button');
//h2El = document.querySelector('h2');
//const bgEl = document.querySelector('section');

//button.addEventListener('click',() => {
//      let color = `#`;
//      color += Math.random().toString(16).slice(2,8);
//      bgEl.style.backgroundColor = color;     //bgEl is a placeholder for the html element (with class of "bgEL" in this case) which style this function takes effect on
//      h2El.innerText = color;                 //h2El can be an h2 header reflecting the hex color output
//      console.log(color)
//})


//RGB Random color picker function
//
//function randomColor() {
//    let rgb = "rgb(";
//    for(let start = 0; start < 3; start++){
//        rgb += Math.floor(Math.random() * 255) + ",";
//        console.log(rgb);
//    }
//    return rgb
//}

//function settingNewValue() {
//    let randomValue = randomColor();
//    document.documentElement.style.setProperty("--headerColor", randomValue + ')');    //the following are predefined variables in Css, ")" (closing round bracket) needs to be added to close the RGB(xxx, xxx, xxx) value.
//    document.documentElement.style.setProperty("--navColor", randomValue + ')');
//    document.documentElement.style.setProperty("--mainColor", randomValue + ')');
//    document.documentElement.style.setProperty("--sideMenuColor", randomValue + ')');
//    document.documentElement.style.setProperty("--adColor", randomValue + ')');
//    document.documentElement.style.setProperty("--footerColor", randomValue + ')');
//}

const section1 = document.querySelector('.Header');
const section2 = document.querySelector('.Navigation');
const section3 = document.querySelector('.Main');
const section4 = document.querySelector('.sideMenu');
const section5 = document.querySelector('.Advertisement');
const section6 = document.querySelector('.Footer');

section1.addEventListener('click',() => {
      let color = `#`;
      color += Math.random().toString(16).slice(2,8);
      section1.style.backgroundColor = color;
      console.log(color)
})

section2.addEventListener('click',() => {
    let color = `#`;
    color += Math.random().toString(16).slice(2,8);
    section2.style.backgroundColor = color;
    console.log(color)
})

section3.addEventListener('click',() => {
    let color = `#`;
    color += Math.random().toString(16).slice(2,8);
    section3.style.backgroundColor = color;
    console.log(color)
})

section4.addEventListener('click',() => {
    let color = `#`;
    color += Math.random().toString(16).slice(2,8);
    section4.style.backgroundColor = color;
    console.log(color)
})

section5.addEventListener('click',() => {
    let color = `#`;
    color += Math.random().toString(16).slice(2,8);
    section5.style.backgroundColor = color;
    console.log(color)
})

section6.addEventListener('click',() => {
    let color = `#`;
    color += Math.random().toString(16).slice(2,8);
    section6.style.backgroundColor = color;
    console.log(color)
})