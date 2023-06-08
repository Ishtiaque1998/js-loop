var numbers=[11,22,33,44,55,98,780];

for (var i=0;i<numbers.length;i++){
 var number= numbers[i];
 if(number>100){
  continue;
 }
 console.log(number)
}
