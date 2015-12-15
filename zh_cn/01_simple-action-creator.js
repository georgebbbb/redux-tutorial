// 教程 1 - simple-action-creator.js

//我们在上一篇的介绍中讨论了一点actions，但是呢问题来了，“action creators”(action 创造器)究竟是什么东西呢，他是怎样和 action 发生联系的呢
// 他其实非常简单下面几行代码就能解释

// 这个 “action creators” 其实就是一个 function
var actionCreator = function() {
    // 创建一个 action 并将其 return
    return {
        type: 'AN_ACTION'
    }
}

//这就完了吗？？当然咯

//然而，需要注意的这个action的格式。action其实是一个含有一个名为"type"的属性的对象(object)，
//这样写是flux的一种惯例。
//这个“type”可以让你进一步的操作action，当然，你也可以通过action的属性传递其他你想要传递的数据

//我们稍后还会发现 ，这个action creator 也可以return其他别的东西（比如说return 一个  function）而不是一个action，
//这样做对处理异步action是及其有用的(关于异步action的更多详情在dispatch-async-action.js)


// 就象我们预料的那样，我们可以执行这个action creator  然后得到 action
console.log(actionCreator())
// Output: { type: 'AN_ACTION' }

// Ok, this works but it does not go anywhere...
// What we need is to have this action be sent somewhere so that
// anyone interested could know that something happened and could act accordingly.
// We call this process "Dispatching an action".

// To dispatch an action we need... a dispatch function ("Captain obvious").
// And to let anyone interested know that an action happened, we need a mechanism to register
// subscribers.

// So far here is the flow of our application:
// ActionCreator -> Action

// Read more about actions and action creators here:
// http://rackt.org/redux/docs/recipes/ReducingBoilerplate.html

// Go to next tutorial: 02_simple-subscriber.js
