// <============  First Method ========== >

// let a = 0;
// let target = setInterval(anim, 1000);

// function anim() {
//   if (a == 400) {
//     clearInterval(target);
//   } else {
//     a = a + 10;
//     console.log((a = a + 10));
//     let x = document.querySelector(".test");
//     x.style.width = a + "px";
//   }
// }

// <============  Second Method ========== >
let b = 0;

let target1 = setInterval(() => {
  if (b == 400) {
    clearInterval(target1);
  } else {
    b = b + 10;
    let x = document.querySelector(".test");
    x.style.width = b + "px";
  }
}, 500);
