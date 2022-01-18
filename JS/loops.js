/*for(i=0; 1<=100; i+=5)
{
    alert(i=10);
}*/
/*const streets=["Bazynskiego", "Grunwaldzka", "Abrahama", "Stwosza"]
for(let i=0; i <streets.length; i+=1)
{
    alert(streets[i]);
}*/
/*const shoesSize=47;
const price=250;
let n;
let color0fShoes=['red','blue','orange','green','yellow','pink','violet']
const answerSize=prompt("Jaki jest dostepny rozmiar buta?")
const answerPrice=prompt("Ile masz pieniedzy?")
if(+answerSize===shoesSize && +answerPrice>=+price)
{
    alert("Możesz kupic te buty")
    let colorBuyer = prompt('Jakiego koloru buty chcesz kupic');
    for (let i=0;i<color0fShoes.length; i++)
        if (color0fShoes[i] === colorBuyer)
        {
            alert('mamy twoj rozmiar i kolor, a Ty masz kase na te buty')
            n = 1;
        }
    if (n !== 1) alert('nie mamy twojego koloru')
}
if (+answerSize === shoesSize && +answerPrice <= +price)
    alert('Jest twoj rozmiar ale masz za malo pieniedzy');
if (+answerSize !== shoesSize && +answerPrice <= +price)
    alert('nie ma twojego rozmiaru i masz za malo pieniedzy');
if (+answerSize !== shoesSize && +answerPrice >= +price)
    alert('nie ma twojego rozmiaru chociaz masz dosc pieniedzy');*/

/*const shoesSize=[1,2,3,4,5,];
const price=250;
let n=false;k=false;
let color0fShoes=['red','blue','orange','green','yellow','pink','violet']
const answerSize=prompt("Jaki chcesz kolor?")
const answerPrice=prompt("Jaki chcesz rozmiar?")
if(+answerSize===shoesSize && +answerPrice>=+price)
{
    alert("Możesz kupic te buty")
    let colorBuyer = prompt('Jakiego koloru buty chcesz kupic');
    for (let i=0;i<color0fShoes.length; i++)
        if (color0fShoes[i] === colorBuyer)
        {
            alert('mamy twoj rozmiar i kolor, a Ty masz kase na te buty')
            n = 1;
        }
    if (n !== 1) alert('nie mamy twojego koloru')*/
/*let licz=10;
do {
alert("Petla do...while")
alert("Odliczam");
licz--;
}
while(licz<=0)*/
let i=9;
while(i<=9) {
   alert(i);
   i--;
}
do {
   alert(i);
   i--;

i=9;
do {
   document.write(i);
   i--;
}
while(i>=1)
}