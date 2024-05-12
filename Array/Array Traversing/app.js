let arr = [2,3,4,7,5,4,12,34,67,87];

//ARRAY traversing
// for(let i=0;i<arr.length;i++){
//     document.write(`${arr[i]}<br>`);
// }

// accessing array elements using index through input box
// function getElement(){
//     let el=document.querySelector("#element").value
//     alert(arr[el]);
// }

//array validation 
function getElement(){
        let el=document.querySelector("#element").value
        if(el<arr.length && el>=0 && typeof(parseInt(el))===Number){
            console.log(`The element at index ${el} is ${arr[el]} `)
        }
        else{
            console.log("plese enter valid input")
        }
    }