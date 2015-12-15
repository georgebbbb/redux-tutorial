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

// 好，他运行起来了。。但是这啥也做不了，然而并没有卵用
//  我们需要的是 这个action 能够发送到一个地方，这样的话能够让对他感兴趣的东东知道发生了什么，并让这些东东们做出相应的反应
// 我们称这个过程为 "Dispatching an action" （发出一个action）

// 为了能够 "Dispatching an action" （发出一个action）  我们需要一个  dispatch function ("这不是废话嘛").
//另外为了够让对他感兴趣的东东知道发生了什么，我们需要一种机制能够让这些东东注册，这样这个东东就成为了
//这个action的订阅者(action 一旦dispatch，订阅者就能知道 )
// 好，截至目前为止我们已经有这样的数据流了
// ActionCreator -> Action

// 想要了解更多有关create action请看下面
// http://rackt.org/redux/docs/recipes/ReducingBoilerplate.html

// 转到下一个教程: 02_simple-subscriber.js
