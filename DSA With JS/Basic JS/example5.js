function TreeConstructor(strArr) {
  let w = [];
  for (let i = 0; i < strArr.length; i++) {
    let c = strArr[i];
    console.log(c[3]);
    
    w.push(parseInt(c[3])); // Store parent in a list
  }
  console.log(w);
  return strArr;
  
  
}

console.log(TreeConstructor( ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]));
