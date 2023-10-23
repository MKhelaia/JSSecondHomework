
1.
// let a = 5;
// while (a <= 100){
//     console.log(a);
//     a++
// }

2.
// let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
// for (let i = 0; i < 11; i++) {
//     const element = array1[i];
//     if (element < 10 && element > 0) {
//         console.log(element);
//     }
// }

3.
// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let target = 5
// if(array2.includes(target)){
//     console.log("არის");
// }
// else{
//     console.log("არ მოიძებნა");
// }

4.
// let array3 = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < array3.length; i++) {
//     sum += array3[i];     
// }

// console.log(sum);

5.
// let array3 = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < array3.length; i++) {
//     sum += array3[i];     
// }

// console.log(sum/array3.length);

6.
// let array5 = [1, 2, 3, 7, 6, 9];
// for (let itemArray of array5) {
//     if (itemArray == 7){
//         continue;
//     }
//     console.log(itemArray);
// }

7.
// let user = {
//     firstname: "giorgi",
//     lastname: "smith",
//     age: 25,
//     studentstatus: "active"
// };
// console.log(user.studentstatus);

8.
// let user = {
//     name: 'giorgi',
//     age: 20,
//     studentstatus: 'active'
// }

// if (user.age < 18 && user.studentstatus === 'active') {
//     console.log("hello");
// } else if (user.name === 'levani') {
//     console.log("hello levani");
// } else if (user.studentstatus === 'active' && user.age < 25) {
//     console.log("hello world");
// } else {
//     console.log("Error");
// }
9.
// let array = [
//     [2, -3, 5, 10],
//     [25, -24, -11, 100],
//     [-6, -7, 10],
// ];

// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//         const element = array[i][j];
//         if (element > 0) {
//             console.log(element);
//         }
//     }
// }
10.
// let array = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element % 2 === 0) {
//         console.log("ლუწი: " + element);
//     }
//     else{
//         console.log("კენტი: " + element);
//     }
// }
11.
// let users = [
//     {username: 'giorgi', status: false},
//     {username: 'levani', status: false},
//     {username: 'anna', status: true}
// ]
// let userWithTrueStatus = users.find(user => user.status === true);

// console.log(userWithTrueStatus);