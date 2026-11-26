export function tick(e) {
  let t = { valueOf: () => e };
  t++;
}

console.log("loaded");
