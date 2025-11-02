function spiralGrid(T, testcases){
  let result = [];
  
  for(let i = 0; i<T; i++){
      const N = testcases[i][0];
      const M = testcases[i][1];
      let direction;
    
    if(N > M){
      direction = (M % 2 === 0) ? 'U' : 'D';
      } else if(N < M){
        direction = (N % 2 === 0) ? 'L' : 'R';
        }else {
            direction = (N % 2 === 0) ? 'L' : 'R';
        }
        result.push(direction);  
  }
  return result;
}

// Ejemplo de uso
const T = 4;
const testCases = [
    [1, 1],
    [2, 2],
    [3, 1],
    [3, 3]
];

const output = spiralGrid(T, testCases);
console.log(output);