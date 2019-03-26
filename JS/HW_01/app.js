// task 01

// const ADMIN_PASSWORD = 'q1w2e3r4';
// let message = prompt ('введите пароль');

// if(message === ADMIN_PASSWORD){
//     alert('Добро пожаловать')
// }else{
//     alert('отменено')
// }
// if(message !==ADMIN_PASSWORD){
//     alert('Доступ запрещен')
// }

// ==========================================================================


// task02

// const credits = '23500';
// const priceDroid = '3000';
// const quantity = '8';

// let totalPrice = credits -(priceDroid*quantity);

// if((quantity * priceDroid)<= credits){
//     console.log(`Вы купили ${quantity} дроидов, на счету осталось ${totalPrice} кредитов`);
// }

// if((quantity * priceDroid)>credits){
//     console.log(`У вас не достаточно кредитов`)
// }

// =============================================================================


// task03

let startPrice;
 const country = prompt('введите страну');

 switch(country){
     case 'Япония':
     startPrice = '250';
     break;

     case 'Штаты':
     startPrice = '320';
     break;
    
     case 'Африка':
     startPrice = '80';
     break;

     case 'индия':
     startPrice = '500';
     break;

     default:
     alert('нет тут такого....ЙЕП!');
 }

 alert(`В ${country} стоимость доставки ${startPrice} кредитов`);