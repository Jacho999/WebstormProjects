/*if('7' == 7)
    alert("wartosci sa rowne")
if('7' !=== 7)
    alert("wartosci sa sobie rowne ale typy nie; po lewej stronie jest STRING, po prawej liczba")*/
/*const day0fBirthday =14
const guess=prompt("Zgadnij dzien moich urodzin")
let correct=false;
if(+guess===day0fBirthday){
    correct=true;
}
if(correct===true) {
    alert(`Zgadza sie,dzien moich urodzin to: ${day0fBirthday}`)
    document.write("BRAWO!")
}
if(correct===false){ 
    alert(`Zgaduj dalej`)
    document.write("Odswiez strone, by sprobowac jeszcze raz")
}*/
/*const shoesSize=47;
const price=250;
const color = 'czarny';
const color = 'bialy';
const answerSize=prompt("Jaki jest dostepny rozmiar buta?")
const answerPrice=prompt("Ile kosztuja buty?")
let canBuy
if(+answerSize===47&&+answerPrice<=250))
canBuy=true
if(canBuy===true)
{
 alert("Możesz kupic te buty")
 prompt("Jakiego koloru potrzebujesz?")
}
else if(+answerSize!===47&&+answerPrice>250)
    alert("Rozmiar jest inny niz 47 i cena przekracza 250")
else if(+answerSize!===47&&+answerPrice<=250)
    alert("Twój rozmiar nie jest rowny 47")
else if(+answerSize===47&&+answerPrice>250)
    alert("Cena przekracza 250")*/
const score = prompt("ile punktow uzyskano")
let grade
if(score>90)
{
  grade=5
}
if(score>90)
{
    grade=5
}
else if(score>=80)
{
grade=4
}
else if(score>=70)
{
  grade=3
}
else if(score>=60)
{
 grade=2
}
else if(score<=60)
{
 grade=1
}
alert(`Twoja ocena to ${grade}`)



if (+answerSize == shoeSize && +answerPrice <= +price)
    alert('Jest twoj rozmiar ale masz za malo pieniedzy');
if (+answerSize !== shoeSize && +answerPrice <= +price)
    alert('nie ma twojego rozmiaru i masz za malo pieniedzy');
if (+answerSize !== shoeSize && +answerPrice >= +price)
    alert('nie ma twojego rozmiaru chociaz masz dosc pieniedzy');
