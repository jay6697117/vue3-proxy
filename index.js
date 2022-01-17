"use strict";
(function () {
    let name = '我是个靓仔';
    // name = 1; // 报错
    name = '我是个靓仔1'; // 报错
    console.log(`name:`, name);
    let me = {
        name: '靓仔圣',
        age: 18
    };
    // me.age = '整条街'; // 报错
    me.age = 19; // 报错
    console.log(`me:`, me);
})();
