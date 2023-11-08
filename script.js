let monMin = document.getElementById('mon-min');
let tueMin = document.getElementById('tue-min');
let wedMin = document.getElementById('wed-min');
let thuMin = document.getElementById('thu-min');
let friMin = document.getElementById('fri-min');
let satMin = document.getElementById('sat-min');
let target = document.getElementById('target');

const form = document.querySelector('form');
const goButton = document.querySelector('button');


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    getRandomNumForDay();
})


const getRandomNumForDay = ()=>{
    let a = Number(monMin.value)+(Number(monMin.value)*0.15);
    let b = Number(tueMin.value)+(Number(tueMin.value)*0.15);
    let c = Number(wedMin.value)+(Number(wedMin.value)*0.15);
    let d = Number(thuMin.value)+(Number(thuMin.value)*0.15);
    let e = Number(friMin.value)+(Number(friMin.value)*0.15);
    let f = Number(satMin.value)+(Number(satMin.value)*0.15);

    let aa;
    let bb;
    let cc;
    let dd;
    let ee;
    let ff;


    let targetVal = Number(target.value);

    let isMatch  = false;

    let control = 1;

    console.log(a + getRandomIntInclusive(10, 40));

    while(!isMatch){
        aa = a+getRandomIntInclusive(10, 40);
        bb = b+getRandomIntInclusive(10, 40);
        cc = c+getRandomIntInclusive(10, 40);
        dd = d+getRandomIntInclusive(10, 50);
        ee = e+getRandomIntInclusive(10, 80);
        ff = f+getRandomIntInclusive(10, 50);

        console.log(control);

        if(aa+bb+cc+dd+ee+ff === targetVal){
            isMatch = true
        }

        if(control > 8000){
            break;
        }

        control++;
    }

    console.log(aa+bb+cc+dd+ee+ff);
    /* if(isMatch)  */printResults(aa,bb,cc,dd,ee,ff);

}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

function printResults(mon, tue, wed, thu, fri, sat){
    let results = [...document.querySelectorAll('.result')];
    results.forEach((el, i) =>{
        el.textContent = arguments[i];
    } )
}

