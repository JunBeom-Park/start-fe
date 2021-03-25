console.log('app');



// // Create
// var todos = ['운동'];
// var todo = '게임';
// todos.push(todo);
// console.log(todos);

// // Read
// var todos = ['운동', '게임'];
// todos.forEach(function(todo) {
//   console.log(todo);
// });

//Update
// var todos = ['운동', '게임'];
// var updateTodo = '게임';
// var updateIndex = todos.findIndex(function(todo) {
//   return todo === updateTodo;
// });
// todos[updateIndex] = '공부';
// console.log(todos);

// var todos = ['운동', '게임'];
// var updateTodo = '게임';

// var newTodos = todos.map(function(todo) {
//   if (todo === updateTodo) {
//     return '공부';
//   }
//   return todo;
// });

// console.log(newTodos);

//Delete
// var todos = ['운동', '공부', '목욕'];
// var deleteTodo = '공부';
// var deleteIndex = todos.findIndex(function(todo) {
//   return todo === deleteTodo;
// });
// todos.splice(deleteIndex, 1);
// console.log(todos);

// var todos = ['운동', '공부'];
// var deleteTodo = '공부';
// var newTodos = todos.filter(function(toods) {
//   return todo !== delteTodo;
// });
// console.log(newTodo);

//동적 타이핑
// var foo = 42;    // Number
// var foo = "bar"; // String
// var foo = true;  // Boolean

// if("test"){  //true 로 자동 변환
//     console.log("true");
//   }
  
//   "2"  + 2; // "22"
  
//   2 + 5 + "1" // "71"






//참조타입

//값 value

// var a = 1;
// var b = a;
// b = 2;
// console.log(a, b);

// var a = [1];
// var b = a;
// b[0] = [2];
// console.log(a, b);


// // 참조 reference

// var a = { x: 1 };
// var b = a;
// b.x = 2;
// console.log(a, b);


// //call by value
// function byValue(count) {
//     count = count + 2;
//   }
//   var count = 3;
//   byValue(count);
//   console.log(count); //3
  
//   //call by reference
//   function byReference(count) {
//     count.push('2');
//   }
//   var count = ['1'];
//   byReference(count);
//   console.log(count); // ["1","2"]



// //for
// for (var count = 0; count < 5; count++) {
//   //총 5번 실행
// }

// var obj = { a: 1, b: 2 };

// //느리다.비권장
// for (var prop in obj) {
//   console.log(prop, obj[prop]);
// }



// //while
// var isClosed = true;
// while (isClosed) {
//   //반복코드

//   //false로 만들어서 루프종료
//   isClosed = false;

//   //루프종료
//   break;
// }



// //함수
// function sum(x) {
//   var y = 1;
//   return x + y; //return 문이 없을경우 undefined반환
// }

// var sum = function() {
//   var y = 1;
//   return x + y;
// };
