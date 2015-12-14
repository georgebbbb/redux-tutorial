// 教程 0 - introduction.js

// 为什么会有这个教程呢?
// 当我试着学redux的时候,我意识到通过依赖读过的文章和个人经验学习到的有关flux的知识，存在很多错误的地方
// 我不是说那些关于flux的文章不好
// 只是我没有正确掌握这些概念。 最终, 让我仅仅只是会用不同flux框架(Reflux, Flummox, FB Flux)的文档,
// 和试图将他们和我读过的理论概念（actions / actions creators, store, dispatcher, etc）生搬硬套
// 只有当我开始用redux的时候，我才发现这个flux其实比我想象的简单多了 ，这多亏了redux拥有非常精良
// 的设计而且不会向我以前以前用的那些框架一样，有大量的“anti-boilerplate features”（反 范式 特征）
// 现在 ，可以毫不夸张的说 我感觉通过redux学习flux比许多其他框架好多了。
// 用我自己的话讲，这就是为什么我想把我掌握的和运用的有关redux的flux概念分享给大家的原因，

// 你可能已经知道下图呈现的是著名的单数据流flux应用

/*
                 _________               ____________               ___________
                |         |             |            |             |           |
                | Action  |------------▶| Dispatcher |------------▶| callbacks |
                |_________|             |____________|             |___________|
                     ▲                                                   |
                     |                                                   |
                     |                                                   |
 _________       ____|_____                                          ____▼____
|         |◀----|  Action  |                                        |         |
| Web API |     | Creators |                                        |  Store  |
|_________|----▶|__________|                                        |_________|
                     ▲                                                   |
                     |                                                   |
                 ____|________           ____________                ____▼____
                |   User       |         |   React   |              | Change  |
                | interactions |◀--------|   Views   |◀-------------| events  |
                |______________|         |___________|              |_________|

*/

// 在这个教程我们会逐步介绍给你以上图表中的概念.我们会分别尝试理解每一模块存在的理由和扮演着一种什么样的角色，
//而不是上来就解释整张图，这样大家都会头大的  一旦你理解了每一部分，就能集齐龙珠，召唤神龙啦，哈哈哈
// 但是在开始之前, 让我们先聊聊为啥flux会存在，又为啥我们需要它捏？
// 假设我们正在开发一个web应用， 那么它是由啥构成的呢?
// 1) Templates(模版) / html = View(视图)
// 2)  和我们View(视图层)里绑定的数据= Models (模型)
// 3) 取数据的逻辑, 调度切换各种视图层,响应用户事件,数据的修改等= Controller(控制层)


// 这是我们所熟悉的非常经典的mvc模式.想必你心中也有这样的疑惑，如果在表达上稍作修改，其实mvc模式也很想flux的概念
// - Models 就像 stores
// - 用户事件,数据操作和数据修改就像 "action creators" -> action -> dispatcher -> callback
// - (view)视图层 就像 React views

// 所以说，难道flux就仅仅是单词而已吗? 不是这样的.但是这个单词至关重要，
//因为我们可以表达的更精准一些通过这些术语（意思是说，，这么一比，难道flux仅仅是一个名字而已吗，
//其核心概念还和mvc一样。不是这样的,它其实和mvc思想是不同的。但flux的这个单词也不能小觑哦，
//因为它通过提出一些新的术语，可以更精准的描述flxu这一架构），举个例子, 向后台请求数据是可以称为action, 就像一个点击事件也是一个action，
//input的change 事件也是一个action ...然后我们的操作都可以称为action，action只是一个名字而已。
//flux可以确保所有action都是由一个叫做dispatcher发出的 然后经过我们的stores，最后通过监听store，发出一个通知。
//而不是让action直接修改你的Model层和View层(意思是说。。任何action,都必须通过dispatcher发起。
//然后能引起stores改变，stores的改变会通知，再引起view的改变，而不像mvc那样，一个事件过来了，
//在这个事件的回调函数直接里改变model或者修改view)


// 为了清楚的理解mvc和flux的不同,
// 我们将在mvc应用中写一个经典的用例
// 1) 用户点击按钮A
// 2) 按钮A的点击处理函数会触发Model(模型) "A"的改变
// 3) Model"A"的改变，会使监听Model "A"的函数执行，这个函数会触发Model(模型) "B"的改变
// 4) Model"B"的改变，会使监听Model "B"的函数执行，这个函数会触发 View B的 重新渲染

// 在这种环境下想要快速找到bug的源头，那将是一个巨大挑战啊.
//这是因为View监听每一个Model，Model有监听其他的Model，
//所以呢数据可以来自于很多地方又有可能因为可多情况被该改变掉(可能是因为views也可能是因为models)
//(数据的改变可能来自于多种情况，很混乱，不可预测)


// 然后 当 用flux以及它的单向数据流架构，上面的例子就变成这个样子了
// 1) 用户点击按钮A
// 2) a handler on button "A" triggers an action that is dispatched and produces a change on Store "A"
// 3) since all other stores are also notified about the action, Store B can react to the same action too
// 4) View "B" gets notified by the change in Stores A and B, and re-renders

// See how we avoid directly linking Store A to Store B? Each store can only be
// modified by an action and nothing else. And once all stores have replied to an action,
// views can finally update. So in the end, data always flows in one way:
//     action -> store -> view -> action -> store -> view -> action -> ...

// Just as we started our use case above from an action, let's start our tutorial with
// actions and action creators.

// Go to next tutorial: 01_simple-action-creator.js
