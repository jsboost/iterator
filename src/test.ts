import iterator from "./iterator";


iterator<number | string>([1, 2, 3, 'a', 'b', 'c'], (item) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.dir(item.value[1]);
      resolve(true);
    }, 500)
  });
}).then(()  => {
  console.dir("done");
})
