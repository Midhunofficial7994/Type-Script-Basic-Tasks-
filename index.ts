// infer types 

// let useName ="Midhun";
// let  age  =21;
 

//Defining Types or Explicit Types

// let userName : string ="Midhun";

// let age :Number=0;
// let bool : boolean=true
// let skills: string[] = ["Js","React","Html","Ts"]
// let count: number[] = [2,3,4,5,6,7,8];
// let emptyArray : [] = [];
// let userDetail : {name:string,age:number,place:string}={
//     name:"Midhun",
//     age:21,
//     place:"Calicut"
// };
// function add(x:number,y:number){
//     console.log(add(2,3))
//     return x+3
// }


// Interface


// interface Details {
//     name :string;
//     age:number;
//     place : string;
//     myfun :() => void;
// }

// var userDetail :Details={
//     name: "Midhun",
//     age: 21,
//     place: "Calicut",
//     myfun() {
//         console.log(this.name);
        
//     },
// };


// Type


// type Details ={
//     name :string;
//         age:number;
//         place : string;
//         myfun :() => void;
// }

// Union /Optional


interface Details {
    name :string;
    age:number | string;
    place : string;
    myfun :() => void;
}


var userDetail :Details={
    name: "Midhun",
    age: 21,
    place: "Calicut",
    myfun() {
        console.log(this.name);
        
    },
};


//  let skills  :(string | number)[]= [1,2,"Midhun"];



// Functions


function myFun (userDetail:Details){
   return  userDetail.name;
}
myFun(userDetail)


