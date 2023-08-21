// Question 1

// let str = "Hello World"
// let reverseStr=""

// for(let i=str.length-1;i>=0;i--){
// reverseStr = str[i]
// console.log(reverseStr)
// }

// Question 2

// let vowels = ["a","e","i","o","u"]
// let str = "mm nn nn mm aa"
// let numberofvowels = 0

// for(let i=0;i<str.length;i++){
//     if(str[i].includes("a")||str[i].includes("e")||str[i].includes("i")||str[i].includes("o")||str[i].includes("u")){
//         numberofvowels = numberofvowels + 1
//     }else{
//         numberofvowels = numberofvowels + 0
//     }
    
// }
// console.log(numberofvowels)

// Question 3

// let str = "hello world"
// let words = str.split(" ")
// let uppercaseString = ''

// for(let i=0;i<words.length;i++){
//     let word = words[i];
//     if(word.length > 0){
//     let uppercaseAction = word[0].toUpperCase() + word.slice(1).toLowerCase()
//     uppercaseString = uppercaseString + uppercaseAction  
    
//     }
//     if(i<words.length-1){
//         uppercaseString = uppercaseString + " "
//     }
// }
// console.log(uppercaseString)  

// Question 4

// let str = "lissil"
// let str1 = ""
// let str2 = ""
// for(let i=0;i<str.length;i++){
//     str1 = str1 + str[i]
    
//     //console.log(str2)
    
// }
// for(let j=str.length-1;j>=0;j--){
//     str2 = str2 + str[j]
// }

// if(str1===str2){
//     console.log("It is a palindrome")
// }
// else {
//     console.log("It is not a palindrome")
// }

// Question 5

// let arr = [1,-1,-2,0,7]
// let positivesum=0

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>0){
//         positivesum = positivesum + arr[i]
//     }
// }
// console.log(positivesum)

// Question 6

// let findelement = 70;
// let arr = [10,20,30,40,50,60,70,10,20,30,40,50,60,70]
// let firstOccurence = ""

// for(let i=0;i<arr.length;i++){
//     if(arr[i]==findelement){
//         firstOccurence = arr.indexOf(arr[i])
//     }
// }
// console.log(firstOccurence)

// Question 7

// let arr=[1,2,1,2]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]===arr[j]){
//             arr.splice(j,1)
//             j--
//         }
//     }
// }
// console.log(arr)

// Question 8
// let arr=[2,3,1,5,7,6,4]


// for (let i=0; i<arr.length-1;i++) {
//     for (let j=0;j<arr.length-i-1;j++) {
//       if (arr[j] > arr[j+1]) {
        
//         let temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//       }
//     }
//   }


//   let sortedAsc=arr
//   console.log(sortedAsc)

//   for (let i=0; i<arr.length-1;i++) {
//     for (let j=0;j<arr.length-i-1;j++) {
//       if (arr[j] < arr[j+1]) {
        
//         let temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//       }
//     }
//   }
//   let sortedDesc = arr
//   console.log(arr)
// Question 9

// let i=0;
// let evennumbers = ""
// while(i<20){
//     if(i%2 === 0){
//         evennumbers = evennumbers + i + " "
//     }
//     i++
    
// }

// console.log(evennumbers)

// Question 10

// let factorialResult = 1

// let n=7
// do{
//     factorialResult = factorialResult * n
//     n--
// }while(n>1)

// console.log(factorialResult)

// Question 11

// let obj={
//     firstName:"Aqsa",
//     lastName:"Mehdi",
//     Age:22,
//     canDrive:true
// }

// for(let x in obj){
//     console.log(x + ":",obj[x])
// }

// Question 12

// let arr = [1,2,3,4,5,6,7]
// for(let x of arr){
//     let doublearr = x*2
//     console.log(doublearr)
// }

// Question 13

// let number = 2
// if(number%2===1){
//     console.log(`${number} is an odd number`)
// }
// else{
//     console.log(`${number} is a even number`)
// }

// Question 14

// let n1=1
// let n2=2
// let n3=3

// let maximumnumber = n1>n2?(n1>n3?n1:n3):(n2>n3?n2:n3)
// console.log(`Among ${n1}, ${n2} and ${n3} , the greatest number is ${maximumnumber}`)

// Question 15

// let year=2040

// if(year%4===0  && year%400===0 && year%100===0){
//     console.log(`${year} is a leap year`)
// }
// else{
//     console.log(`${year} is not a leap year`)
// }


