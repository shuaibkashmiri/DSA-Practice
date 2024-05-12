// insertion of new element in array at specific position using own logic

let arr = [60, 30, 23, 56, 10];

function getResult() {
  let newEl = document.getElementById("value").value;
  newEl=parseInt(newEl);
  let position = document.getElementById("position").value;
if(position>=0 && position<=arr.length){
  
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i >= position) {
      arr[i + 1] = arr[i];
      if (i == position) {
        arr[i] = newEl;
      }
    }
  }
console.log(`The New Element ${newEl} inserted into Array on position ${position}`);
console.log(arr);
}
else{
    console.log("Enter Valid Position");
}

}
