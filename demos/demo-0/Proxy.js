const targetObj = {
  a: 1
};
// Proxy
const proxyObj = new Proxy(targetObj, {
  get(target, propKey, receiver) {
    console.log(`get target :`, target, target === targetObj);
    console.log(`getpropKey :`, propKey);
    console.log(`get receiver:`, receiver);
  },
  set(target, propKey, value, receiver) {
    console.log(`set target:`, target, target === targetObj);
    console.log(`set propKey:`, propKey);
    console.log(`set value:`, value);
    console.log(`set receiver:`, receiver);
    target[propKey] = value;
  }
});
console.log(`proxyObj:`, proxyObj);
