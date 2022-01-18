/*const statement = "Nauka progtamowania jest "
let choice = prompt("Co sądzisz o nauce programowania");
alert(statement + choice );*/
//launch szablonowy pozwala wyswietlic wartosc zmiennej wewnatrz stringe

let choice = prompt("Co sądzisz o nauce programowania");
let statement =  `Nauka programowania jest ${choice}`; //pod escape
alert (statement);