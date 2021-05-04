//*************Q1 */
// var arr=[[0,1,2,3],[1,0,2,3],[0,3,1,2]]

//*************************Q2 */

// var arr=[[0,1,2,3],[1,0,2,3],[0,3,1,2],[3,0,1,2]]

// for(var a=0;a<arr.length;a++){
    
//   for(var i=0;i<arr[a].length;i++){
//     document.write(arr[a][i])
//   }
//   document.write("<br />")
// }

//***********************Q3

// for(var i=0;i<=10;i++){
//     document.write("<div>"+i+"</div>")
// }


//Q4************************************

// var multi=+prompt("enter a number");

// for(var a=1;a<20;a++){
//     document.write(multi+"x"+a+" = "+a*multi+"<br />")
// }



// //Q5****************************


// var fruits = ["apple", "banana", "mango", "orange","strawberry"];

// for(var y=0;y<5;y++){
//     document.write("<h4>"+ fruits[y] + "</h4>")
    
// }
// for(var y=0;y<5;y++){
    
//     document.write("<h4>"+"Element at index ["+y+"] "+fruits[y]+"</h4>")
// }

//Q6*****************************

// var number=+prompt("enter a number ")

// document.write("Counting ")
// for(var a=0;a<=number;a++){
//     document.write(a +", ")
// }
// document.write("<br />")
// document.write("Reverse Counting ")
// for(var z=20;z>=0;z--){
//     document.write(z+", ")
// }
// document.write("<br />")
// document.write("even ")
// for(var a=0;a<=20;a++){
//     if(a%2==0){
//         document.write(a+", ")
//     }
// }
// document.write("<br />")
// document.write("Odd ")
// for(var a=0;a<=20;a++){
//     if(a%2!==0){
//         document.write(a+", ")
//     }
// }

//Q7*************************************
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userInput=prompt("Enter Value");

// var flag=false;

// for(var i=0; i<arr.length;i++){
//     if(userInput === arr[i]){
//         flag=true
//         document.write(userInput+" is available in index ( "+i+" ) in our bakery")
//     }

// }
// if(flag ===false){
//     document.write("We are sorry." +userInput+"is not available")
// }
//Q8**************
// var A = [24, 53, 78, 91, 12]
// document.write("the largest number is ")
// document.write(Math.max(...A));



//Q9*********************
// var A = [24, 53, 78, 91, 12]
// document.write("the smallest number is ")
// document.write(Math.min(...A));

//Q10**************************

// var result=0;
// for(var a=0; a<20;a++){

//      result=(result+5)
//     document.write(result +" ")
// }