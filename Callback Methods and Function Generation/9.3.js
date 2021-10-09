
const foods = ["falafel","angus","Zebra", "sabich", "hummus", 
"pizza with extra pineapple"];
​
 let sortFood = foods.sort();
 console.log(sortFood);
​
for(let j=0 ; j < foods.length-1 ; j++){
    for(let i=0 ; i < j ; i++){
​
        if(foods[i][0] > foods[i+1][0]){
             let temp = foods[i];
             foods[i] = foods[i+1]
             foods[i+1]=temp;
        }
      }
}
​
