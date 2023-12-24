 //alert("hi")     
      // console.log("hello");  //Debug -fixing problem in code


       //variables -8 bytes 
       let score = 0 //initialization
       //assignment
       
       score =200 //1010 --binary
       console.log("score is " + score);
   
       let amount = 0 
       amount =1000.3  // --dyamically types languages
       const pi =3.14
       // var value =10   --old concepts --2015 before
       console.log("your bill amount is" + amount)


       const totval1 = 20345;
       const totval2 = 10000;
       let tot = totval1 + totval2;
       document.getElementById("demo").innerHTML="the tot amount is" + tot;


       const mul1 =20;
       const mul2 =3;
       let  value =mul1*mul2;
       document.getElementById("demo1").innerHTML ="the tot value is" + value;
        


       // ++a  -- pre increment
      //--a   -- pre decrement
      //a++   -- post increment
      //a--   --post decrement
     // a + =10 shorthand assignment


    //user input

//     let name =prompt("what your name")
//     console.log('hi',name)
    


/*let tickets = prompt("how many ticket you want?")
console.log("you should pay",Number(tickets)*20)

let a = prompt("enter a value")
console.log(Number(a)+200) 

let pack = prompt("how many pack you have?");
console.log( "we calcualte your pack",Number(pack)*22) */


                   //string


let str1 ="i will win my 102 life, "
let str2 ="i will be reach person"


let map1 ="the tot values tot sthe tot is 2500 tot "
let map2 = "  credit vlaue is 3000000000000 "


let name ="sivaraman"



                //template literals
    //introduced in 2015 with ECMAScript of ES6


let firstname ="siva"
let lastname ="raman"
let city ="karaikal"

console.log(firstname +""+ lastname +""+" lives in "+city)

//backtick
let msg =`${firstname}${lastname} lives in ${city}`
console.log(msg)

//multiline string
let sms =`one day i will
  be the rich man`
console.log(sms)

//single and double quotes in string
msg ='cat bite "the" rates'

msg =`cat's bite the "rates"`
console.log(msg)

let totof = "5"
let rupes ="$95"
console.log(`"you have ${totof} items in your cart.
your bill amount is ${rupes}"`)

let cred ="100,000"
let dept ="50,000"
console.log(`"successfully amount credite RS.${cred} 
Amount debite your account RS.${dept}"`)

                  //arrays

let num =10
let  name1 ="vidhya"

let cities =["chennai","madhurai","pondy","trichy"];
let mark=[12,34,64,78,86]
//length -total elements in the array
console.log(mark.length)

//last element
console.log(mark[mark.length-1])

//mix of int and string
let arr=[2,5,7,"diva",'a',[3,7,8]]
console.log(arr)
console.log(arr[5][2])

//2d arrays
let matrix =[[3,4,5 ,[1,2,999]],[7,7,8],[1,2,0]]
console.log(matrix[0][3][2])

//arrays methods
let array =['a','b','c','d','z']

//push -add elements to the end
array.push('f')
console.log(array)

//pop -removes element from the end 
//returned removes value
console.log(array.pop())

//shift-removes element from start of the array 
//returns removed value
console.log(array.shift())
console.log(array)

//unshift-adds element to the start of the array
//returns new length
console.log(array.unshift('Q'))
console.log(array)

// delete
// delete array[2]
// console.log(array[2])


//splice
//1st parameter - starting index
//2nd parameter - no. of elements to be deleted from starting index
//3rd (or more) parameter - values to be inserted from starting index

array.splice(2,1) //delete 1 element starting at index 2
console.log(array)

array.splice(1,1,'M')//replace - deletes element at inedx 1 and inserts 'M'
console.log(array)

array.splice(2,2,'X','Y')//deletes elements at position 1 and 2 and inserts 'm','y'
console.log(array)


array.splice(4,0,'D')
console.log(array)


//slice (starting index, ending index)
//ending index not included

console.log(array.slice(1,4))

//reverse
array.reverse()
console.log(array)

//join - converts array to string
let str = array.join()
console.log(str)

//split - converts string to array
let str3 = "A,S,D,E"
let arr1 = str3.split(',')
console.log(arr1)


















