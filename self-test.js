 function check(str, bracketsConfig) {
    let stack = new Array;
    for (let i=0; i<str.length; i++) {
         for( let j=0;j<bracketsConfig.length;j++){
      if (str[i] == bracketsConfig[j][0]){
        stack.push(str[i]);
        console.log(stack);
      } 
         if(str[i+1] == bracketsConfig[j][1] && str[i] == bracketsConfig [j][0]){
             stack.pop();
             console.log(stack);
         }
        
       } 
    
    }
    result =  stack.length > 0 ?  false :  true;
    console.log(bracketsConfig[0][1]);
    console.log(stack.length);
     console.log(stack);
    return result;
    }

    console.log(check('([{}])',[['(', ')'], ['[', ']'], ['{', '}']]));
    