function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: string | number): number {
  if (typeof b === 'string') {
    return a + parseFloat(b);
  } else {
    return a + b;
  }
}

let result1 = add(10, 20); // Works correctly
let result2 = addSafe(10, "20"); // Works correctly after conversion
let result3 = addSafe(10, 30); // Works correctly without conversion