// let x = 1; 

// const parentFunction = () => {
//   let myvalue = 2;
//   console.log(x);
//   console.log(myvalue);

//   const childFunction = () => {
//     console.log((x += 5));
//     console.log((myvalue += 1));
//   };

//   //   childFunction(); // has an closure on parent function
//   return childFunction;
// };

// const result = parentFunction();
// console.log(result);

// result();
// result(); // increment will be seen

// // aclosure is created when we define a fucntion, not when a function is excecuted.

// console.log(x);
// // console.log(myvalue); // reference error

// IIFE (Immediately Invoked Function Expression)

const privateCounter = (() => {
  let count = 0;
  console.log(`initial value: ${count}`);
  return () => {
    count += 1;
    console.log(count);
  };
})(); 

privateCounter();
privateCounter(); 
privateCounter();

const credits = ((num) => {
  let credits = num;
  console.log(`Initial credits value : ${credits}`);
  return () => {
    credits -= 1;
    if (credits > 0)
      console.log(`Playing game, ${credits} credit(s) remaining`);
    if (credits <= 0) console.log(`Not enough credits`);
  };
})(3);

credits();
credits();
credits();
