// 1.0 API Object.defineProperty
const obj = {
  _title: 'hello',
  // get title() {
  //   console.log(`get this === obj:`, this === obj);
  //   return this._title;
  // },
  // set title(val) {
  //   console.log(`set this === obj:`, this === obj);
  //   this._title = val;
  // }
};
Object.defineProperty(obj, 'title', {
  get() {
    console.log(`get this === obj:`, this === obj)
    return this._title;
  },
  set(val) {
    console.log(`set this === obj:`, this === obj)
    this._title = val;
  }
});
console.log(`obj:`, obj);
