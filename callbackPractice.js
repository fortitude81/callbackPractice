/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the sayHi function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



  //Code Here for first
  

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
//first(names, function(firstName){
//  console.log('The first name in names is ' + firstName)
//});



var first = function(arr, cb){  //passin in names array and funciton below(cb)
  var firstOne = arr[0];   // setting index 0 to a variable
  cb(firstOne);            // passing index 0 (var) into cb func
}

first(names, function(firstName){  //invoke function-first, this is the callback funciton being passed in!
  console.log('The first name in names is ' + firstName);  
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last

//last(names, function(lastName){
//  console.log('The last name in names is ' + lastName);
//});

var last = function(arr, cb) {
  var lastOne = (arr[arr.length -1]); 
  cb(lastOne);
}

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


  //Code Here for multiply

//multiply(4, 3, function(answer){
//  console.log('The answer is ' + answer); //should console.log 12
//})

var multiply = function(num1, num2, cb) {
  var mult = num1 * num2;
  cb(mult); 
}


multiply(4, 3, function(answer){   //being passed 2 numbers and function that needs an answer, we need mult function
 console.log('The answer is ' + answer); //should console.log 12
});

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


  //Code Here for contains
///////////////
var contains = function(arr, name, cb) {
    var result = false;
      if (arr.indexOf(name) !== -1){
        result = true 
      } 
        cb(result);
  }

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});




/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


//var uniq = names.filter(function(elem, index, array){
//  return array.indexOf(elem) === index;
//  })
//};

    //Code Here for uniq

 var uniq = function(arr, cb){
  var newArr = [];                          // need new empty array
    for (var i = 0; i < arr.length; i++){   //loop through arr passed in
      var found = undefined;                //once name is found in array
      for (var y = 0; y < newArr.length; y++){ //
        if (arr[i] === newArr[y]) {
          found = true;
          break;
        }
      }
      if (found != true) {
        newArr.push(arr[i]);
      }
    }
    cb(newArr);
 }   

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each
var each = function(arr, cb) {
  for (var i = 0; i <= arr.length; i++) {
    cb(arr[i]);
  }
}

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


 //code here for getUserById

function(arr,id, cb){
  for (var i = 0; i < arr.length; i++){
    if (arr[i].id === id) {
      cb(arr[i]);
      break;
    }
  }
} 

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
