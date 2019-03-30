// // task 01

const ADMIN_PASSWORD = 'q1w2e3r4';
let message = prompt ('введите пароль');

if(message === null){
    alert('Отменено пользователем');
}else if(message == ADMIN_PASSWORD){
    alert('Добро пожаловать');
}else{
    alert('Доступ запрещен')
}

alert(message);
// ==========================================================================


// //task02

const credits = '23500';
const priceDroid = '3000';
const quantity = '12';

let totalPrice = credits -(priceDroid*quantity);

if((quantity * priceDroid)<= credits){
    console.log(`Вы купили ${quantity} дроидов, на счету осталось ${totalPrice} кредитов`);
}
if((quantity * priceDroid)>credits){
    console.log(`У вас не достаточно кредитов`)
}

// // =============================================================================


// // task03

let startPrice;
let country = prompt ('введите страну').toLowerCase();

switch(country.trim()){
    case 'япония':
    startPrice = '250';
    alert(`В ${country} стоимость доставки ${startPrice} кредитов`);
    break;

    case 'штаты':
    startPrice = '320';
    alert(`В ${country} стоимость доставки ${startPrice} кредитов`);
    break;
    
    case 'африка':
    startPrice = '80';
    alert(`В ${country} стоимость доставки ${startPrice} кредитов`);
    break;

    case 'индия':
    startPrice = '500';
    alert(`В ${country} стоимость доставки ${startPrice} кредитов`);
    break;

    case (''):
    alert('сделайте ваш выбор');
    break;

    default:
    alert('в вашей стране доставка не доступна');

}
    






