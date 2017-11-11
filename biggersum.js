var numbers = [1, 34, 23, -12];

function sum(numbers){
   var max = 0;
   var sum;
   var i = 0;

   while (i < numbers.length) {
     sum = numbers[i] + numbers[i + 1];
     if (sum > max) {
       max = sum;
     }
     i++;
   }
   return max;
 }

 alert(sum(numbers));
