const implement = () => {
  console.log("Fire");
};
const debounce = (fn, delay) => {
  let context = this;
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(context);
    }, delay);
  };
};
const handleFire = debounce(implement, 300);

document.getElementById("debounce").addEventListener("click", handleFire);
