// let name = "Aikhan",
    //age = 19,
//     balance = 200.5,
//     test = false
//     x = 4
//     y = 2
// alert(name + age + balance)

// console.log(typeof(name))

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// console.log(5 == "5");
// console.log(x === "x");
// console.log(x < y);
// console.log(x <= x);
// console.log(x != y);

// let age = 18
// if(age >= 18 && age < 60){
//     console.log("Вы прошли")
// }
// else{
//     console.log("Вы не прошли")
// }

// if(x == 4) {
//     console.log("x = 4")

// }
// else{
//     console.log("Ни одно условие не сработало!")
// }

// let a = 5
// let b = 10
// let c = 3
// if(a>(b,c)){
//     console.log(a)
// }
// if(b>(a,c)){
//     console.log(b)
// }
// else{
//     console.log(c)
// }

// let x = prompt("Введите первое число")
// alert(x)
// Number(x)

// let a = prompt("Введите первое число")
// let b = prompt("Введите второе число")
// let c = prompt("Введите третье число")
//  if(a>(b,c)){
//      console.log(a)
//  }
//  else if(b>(a,c)){
//      console.log(b)
//  }
//  else{
//      console.log(c)
//  }


// let d = prompt("Введите первое число")
// let e = prompt("Введите второе число")
// let f = prompt("Введите третье число")
// if(d<(e,f)){
//     console.log(d)
// }
// else if(e<(d,f)){
//     console.log(e)
// }
// else{
//     console.log(f)
// }

let name = prompt("Введите свое имя")
while(name <= 3) {
    name = prompt("Вы неправильно ввели свое имя.Попробуйте еще раз");
}  console.log(name)
let age = +prompt("Введите ваш возраст")
  while(age >= 14 , age <= 60) {
    if(age <= 14){
      age = +prompt("Ты еще маленький")
      
    }else if (age >= 60){
      age = +prompt("Вы уже слишком стары"); 
    } 
} console.log(age)
let student = prompt("Вы студент?(да)или(нет)")
if (student == "Да") {
    console.log(true)
}
else{
    while(student != "да") {
        student = prompt("Доступ откланен")
    }
}

//Домашка

//1



// while(a = prompt("Введите свое имя")){
    
//     if (a.length >=3){
//         console.log("True")
//         break;       
//     }
//     else if (a.length <=3){
//         prompt("Вы неправильно ввели имя повторите еще раз")
//         console.log("False")
//         continue;
//     }
// }

//  //2
 
//  while(y = prompt("Введите свой возраст")){
//      if(y>14 && y<60){
//          console.log("Доступ Разрешен")
//          break;
//      }
//      else {
//          prompt("Вы должны быть старше 14 лет повторите еще раз")
//          console.log("Доступ отклонен")
//          continue;
//      }}


//  //3
//  while (x = prompt("Вы являетесь студентом? (yes)or(no) ")){
//     if (x != "yes"){
//         (prompt("Вы не студент!"))
//         console.log("False")
//         continue;
//     }
//     else{
//         (prompt("Вы студент!"))
//         console.log("True")
//         break;
//     }
//  }