//this will be the first file where development of TACO will take place, below are the first functions

function imprimir(p1) {
    console.log(p1 * p2); // printing function that receives only one value
  }

function imprimir(...args) { // printing function that recives infinite values in the shape of an array
    args.forEach((arg, index) => {
      console.log(`Argument ${index}:`, arg);
    });
  }