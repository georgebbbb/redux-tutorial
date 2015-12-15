// 教程 2 - simple-subscriber.js

// 第一件事前 。。让我们写一个理论上的订阅者

var mySubscriber = function() {
    console.log('Something happened')
    // do something
}

//超级简单对不对？
// 他虽然现在还没注册人和action 。。但一会就注册到了

// 当它执行的时候 显而易见(只是console.log 一下而已)

mySubscriber()

//截至目前为止 我们的 应用的数据流变成下面酱紫
// ActionCreator -> Action ... Subscriber

// 接着往下看吧，，: 03_about-state-and-meet-redux.js
