// Tests del problema
const tests = ['1BC-1AD', '753BC-747BC', '2000AD-2012AD'];

// Convertir año BC/AD a timeline continua
function yearToAUC(yr) {
  let num = parseInt(yr);
  if (yr.includes('BC')) {
    return 754 - num;  // 1BC = 753 AUC
  } else {
    return 753 + num;  // 1AD = 754 AUC
  }
}

// Convertir número a romano
function toRoman(n) {
  let roman = "";
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  
  for (let i = 0; i < values.length; i++) {
    while (n >= values[i]) {
      roman += symbols[i];
      n -= values[i];
    }
  }
  return roman;
}

// Procesar cada test
for (let i = 0; i < tests.length; i++) {
  let range = tests[i];
  let parts = range.split('-');
  let start = yearToAUC(parts[0]);
  let end = yearToAUC(parts[1]);
  
  let maxChars = 0;
  
  // Revisar todos los años en el rango
  for (let yr = start; yr <= end; yr++) {
    let romanStr = toRoman(yr);
    if (romanStr.length > maxChars) {
      maxChars = romanStr.length;
    }
  }
  
  console.log(range + " → " + maxChars);
}