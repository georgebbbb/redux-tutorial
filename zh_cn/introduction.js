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
// 2)  和我们View(视图层)里关联的数据= Models (模型)
// 3) Logic to retrieve data, glue all views together and to react accordingly to user events,
//    data modifications, etc. = Controller

// This is the very classic MVC that we all know about. But it actually looks like concepts of flux,
// just expressed in a slightly different way:
// - Models look like stores
// - user events, data modifications and their handlers look like
//   "action creators" -> action -> dispatcher -> callback
// - Views look like React views (or anything else as far as flux is concerned)

// So is flux just a matter of new vocabulary? Not exactly. But vocabulary DOES matter, because by introducing
// these new terms we are now able to express more precisely things that were regrouped under
// various terminologies... For example, isn't a data fetch an action? Just like a click is also an action?
// And a change in an input is an action too... Then we're all already used to issuing actions from our
// applications, we were just calling them differently. And instead of having handlers for those
// actions directly modify Models or Views, flux ensures all actions go first through something called
// a dispatcher, then through our stores, and finally all watchers of stores are notified.

// To get more clarity how MVC and flux differ, we'll
// take a classic use-case in an MVC application:
// In a classic MVC application you could easily end up with:
// 1) User clicks on button "A"
// 2) A click handler on button "A" triggers a change on Model "A"
// 3) A change handler on Model "A" triggers a change on Model "B"
// 4) A change handler on Model "B" triggers a change on View "B" that re-renders itself

// Finding the source of a bug in such an environment when something goes wrong can become quite challenging
// very quickly. This is because every View can watch every Model, and every Model can watch other Models, so
// basically data can arrive from a lot of places and be changed by a lot of sources (any views or any models).

// Whereas when using flux and its unidirectional data flow, the example above could become:
// 1) user clicks on button "A"
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
