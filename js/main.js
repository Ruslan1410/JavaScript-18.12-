// document.write("Hello World");
// console.log("Hello World");
// console.info("Hello World");
// console.error("Hello World");
// console.warn("Hello World");

// var num;
// num = 5;

// var num = 5;

// console.log("Переменная:" + num);


// console.log("Math: " + (Math.PI + Math.max(5, 6, 4, 2)+ Math.min(2, -3,-1, 0)))

// var num = 4;

// switch(num) {
//     case 5:
//         console.log("num = 2");
//         break;
//         case 2:
//             console.log("num = 3");
//             break;
//             case 3:
//                 console.log("num = 3");
//                 break;
//                 case 1:
//                     console.log("num = 1");
//                     break;
// default:
//     console.log("num default");
// }

// for(var i = 10; i <= 20; i++){
//     if(i%2 ==0)
//     continue;

//     console.log(i);
// }

var person = null;
if(confirm("You ready?")){
    person = prompt("Enter you name");
    alert("Hello," + person);
} else {
    alert("You enter exit");
}