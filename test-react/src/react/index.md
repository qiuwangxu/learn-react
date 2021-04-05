1. 无障碍
网络无障碍辅助功能（Accessibility，也被称为 a11y，因为以 A 开头，以 Y 结尾，中间一共 11 个字母）是一种可以帮助所有人获得服务的设计和创造。无障碍辅助功能是使得辅助技术正确解读网页的必要条件。


2. 代码分割

# 在你的应用中引入代码分割的最佳方式是通过动态 import() 语法

## React.lazy ()  React.Suspense()

// React.lazy  目前只支持默认导出（default exports） 如果你想被引入的模块使用命名导出（named exports），你可以创建一个中间模块，来重新导出为默认模块。这能保证 tree shaking 不会出错，并且不必引入不需要的组件
// React.Suspense 指定加载指示器（loading indicator），以防其组件树中的某些子组件尚未具备渲染条件

# 异常捕获边界（Error boundaries）

#  基于路由的代码分割


3. Context

# React.createContext
# Context.Provider
# Class.contextType
# Context.Consumer
# Context.displayName
具体实例请查看src/react/contenxt

4. 错误边界 Error Boundaries

# 具体实例查看 src/react/error-boundary

5. refs 转发

# React.creactRef()
# React.forwardRef((props, ref)=>{})
# 函数式ref使用
# 字符串式（不推荐）
# 具体实例查看 src/react/ref

6. React.Fragment

7. HOC 高阶组件

# 高阶组件是参数为组件，返回值为新组件的函数。

8. 与第三方库协同

9. 深入 JSX

10. 性能优化 Optimizing Performance

11. Portals 

# ReactDOM.createPortal(child, container)
# 具体实例查看 src/react/portals

12. Profiler
# 具体实例查看 src/App.tsx

13. 协调

# 讲述react设计动力
# differ算法（算法时间复杂度O(n)）
# 权衡

14. Refs and the DOM

# 如果 ref 回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次，第一次传入参数 null，然后第二次会传入参数 DOM 元素。这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并且设置新的。通过将 ref 的回调函数定义成 class 的绑定函数的方式可以避免上述问题，但是大多数情况下它是无关紧要的。

15. Render Props

render prop 是因为模式才被称为 render prop ，你不一定要用名为 render 的 prop 来使用这种模式。事实上， 任何被用于告知组件需要渲染什么内容的函数 prop 在技术上都可以被称为 “render prop”.

16. 静态类型检查  ts

17. 严格模式 React.StrictMode

18. 使用 PropTypes 进行类型检查

19. 非受控组件

在大多数情况下，我们推荐使用 受控组件 来处理表单数据。在一个受控组件中，表单数据是由 React 组件来管理的。另一种替代方案是使用非受控组件，这时表单数据将交由 DOM 节点来处理。

20. Web Components


### API

1. React.Component

2. React.PureComponent
React.PureComponent 与 React.Component 很相似。两者的区别在于 React.Component 并未实现 shouldComponentUpdate()，而 React.PureComponent 中以浅层对比 prop 和 state 的方式来实现了该函数。


3. React.memo()
// 高阶组件。它与 React.PureComponent 非常相似，
// 但只适用于函数组件
React.memo 仅检查 props 变更。如果函数组件被 React.memo 包裹，且其实现中拥有 useState 或 useContext 的 Hook，当 context 发生变化时，它仍会重新渲染。

4. createElement()   createFactory()

5. 
// React.cloneElemt()  props合并  key ref保留 children替换

// React.isValidElement(object) 验证对象是否React元素  true/false

// React.Children
// React.Children.map
// React.Children.forEach
// React.Children.count
// React.Children.only
// React.Children.toArray

6. React.Fragment

7. React.createRef()   React.forwardRef()

8. React.lazy(()=> import('url'))

9. React.Suspense
#<React.Suspense fallback={<Spinner />}>
      <div>
        <OtherComponent />
      </div>
    </React.Suspense>

