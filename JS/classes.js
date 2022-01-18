class phone {
    brand = "Samsung"
    color = "gold"
    price = 2000.00;
    usbC = false;
    user = "Dawid";
    sendSms = function (text) {
        this.sns = this.user + "wyslal sms: " + text;
    }
}
    let komora=new phone;
komora.sendSms('Nie ide jutro do szkoly')
document.write(komora.sms);
komora.brand="Iphone13";
alert(komora.brand);
alert(komora);
let telefony=new Array(20);
telefony[0]=new Phone;
telefony[0].user='bob';
alert(telefony[0].user);

