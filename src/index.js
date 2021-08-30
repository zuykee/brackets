module.exports = function check(str, bracketsConfig) {
let stack = new Array;

for (let i=0; i<str.length; i++) {
 
  for (let j=0;j<bracketsConfig.length;j++) {
  if (str[i] == bracketsConfig[j][0]){
    stack.push(str[i]);
    console.log(bracketsConfig[j][1])
    
  } else {
      if(str[i] == bracketsConfig[j][1] && stack.length>0 && stack[stack.lenght-1] == bracketsConfig [j][0]){
        stack.pop(stack);
       
      }
    
    
  }
  } 
  

}
console.log(stack);
result =  stack.length > 0 ?  false:  true;

return result;
}
