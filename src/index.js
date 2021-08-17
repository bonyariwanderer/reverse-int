module.exports = function reverse (n) {
 let reversed = 0;
 let digit = 0;
 let num  = Math.abs(n);
   
 while(num) {
  digit = num % 10;
  reversed = reversed * 10 + digit;
  num = Math.floor(num / 10);  
 }
 return reversed;
}
