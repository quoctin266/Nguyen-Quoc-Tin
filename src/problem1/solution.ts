// Assuming n >= 0

// First way: looping and gradually increasing i
const sum_to_n_a = function (n: number) {
  if (n <= 0) return 0;

  let sum = 0;
  let i = 1;

  do {
    sum += i;
    i++;
  } while (i <= n);

  return sum;
};

// Second way: use Gauss' Formula
const sum_to_n_b = function (n: number) {
  if (n <= 0) return 0;

  const sum = (n * (n + 1)) / 2;

  return sum;
};

// Third way: use recursion
const sum_to_n_c = function (n: number): number {
  if (n <= 0) return 0;

  return n + sum_to_n_c(n - 1);
};

console.log(">> Check result first way:", sum_to_n_a(5));
console.log(">> Check result second way:", sum_to_n_b(5));
console.log(">> Check result third way:", sum_to_n_c(5));
