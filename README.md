# JavaScript Snippets

> JavaScript Snippets for MDN and Lib

<p align="center">
  <img src="https://images.cnblogs.com/cnblogs_com/jwyblogs/1576071/o_220312063215_javascript.png" alt="icon">
</p>
<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=jwy.javascript-snippets-self">
    <img src="https://img.shields.io/visual-studio-marketplace/i/jwy.javascript-snippets-self?style=square" alt="">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=jwy.javascript-snippets-self">
    <img src="https://img.shields.io/visual-studio-marketplace/d/jwy.javascript-snippets-self?style=square" alt="">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=jwy.javascript-snippets-self">
    <img src="https://img.shields.io/visual-studio-marketplace/stars/jwy.javascript-snippets-self?style=square" alt="">
  </a>
  <a href="https://github.com/jwyGithub/JavaScript-Snippets/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/jwyGithub/JavaScript-Snippets?style=square" alt="">
  </a>
</p>

## Snippets

> Array

<table border>
    <tr style="font-weight: bold">
        <td width="200">Snippet prefix</td>
        <td width="200">Specification</td>
        <td>Description</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.at</td>
        <td>Stage 4 Draft / January 24, 2022</td>
        <td>at()方法接收一个整数值并返回该索引的项目，允许正数和负数。负整数从数组中的最后一个项目开始倒数。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.concat</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.copyWithin</td>
        <td>ECMAScript 2016 (ECMA-262)</td>
        <td>copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.entries</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.every</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.filter</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.find</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.findIndex</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.flat</td>
        <td>ECMAScript 2019</td>
        <td>flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.flatMap</td>
        <td>ECMAScript (ECMA-262)</td>
        <td>flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.forEach</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>forEach() 方法对数组的每个元素执行一次给定的函数。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.from</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>Array.from() 方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.isArray</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>Array.isArray() 确定传递的值是否为数组。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.includes</td>
        <td>ECMAScript 2016 (ECMA-262)</td>
        <td>includes()方法确定数组的条目中是否包含某个值，并相应地返回true或false</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.indexOf</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>indexOf()方法返回数组中可以找到给定元素的第一个索引，如果不存在，则返回-1</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.join</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>join()方法通过连接数组(或类似数组的对象)中的所有元素(用逗号或指定的分隔符字符串分隔)来创建并返回一个新字符串。如果数组只有一个项目，则在不使用分隔符的情况下返回该项目</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.keys</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>keys()方法返回一个包含数组中每个索引键的Array Iterator对象。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.lastIndexOf</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>lastIndexOf()方法返回指定元素(也即有效的 JavaScript 值或变量)在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.map</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>map()方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.of</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.pop</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.push</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>push()方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.reduce</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>reduce()方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.reduceRight</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>reduceRight()方法接受一个函数作为累加器(accumulator)和数组的每个值(从右到左)将其减少为单个值</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.reverse</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>reverse()方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.shift</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.slice</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝(包括 begin，不包括end)。原始数组不会被改变。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.some</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>some()方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.sort</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>sort() 方法用原地算法对数组的元素进行排序，并返回数组。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.splice</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Array.prototype.unshift</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>unshift()方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。</td>
    </tr>
</table>
<br />

> Object

<table border>
    <tr style="font-weight: bold">
        <td width="200">Snippet prefix</td>
        <td width="200">Specification</td>
        <td>Description</td>
    </tr>
    <tr style="color: #1296db">
        <td>Object.keys</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致</td>
    </tr>
    <tr style="color: #1296db">
        <td>Object.values</td>
        <td>ECMAScript 2017 (ECMA-262)</td>
        <td>Object.values()方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Object.entries</td>
        <td>ECMAScript 2017 (ECMA-262)</td>
        <td>Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致(区别在于 for-in 循环还会枚举原型链中的属性)。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Object.assign</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Object.freeze</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>
            Object.freeze()
            方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze()
            返回和传入的参数相同的对象。
        </td>
    </tr>
    <tr style="color: #1296db">
        <td>Object.is</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>Object.is() 方法判断两个值是否为同一个值。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Object.prototype.toString</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>toString() 方法返回一个表示该对象的字符串。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Object.prototype.hasOwnProperty</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性(也就是，是否有指定的键)。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Object.getOwnPropertyDescriptor</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>Object.getOwnPropertyDescriptor() 方法返回指定对象上一个自有属性对应的属性描述符。(自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性)</td>
    </tr>
    <tr style="color: #1296db">
        <td>Object.getOwnPropertyNames</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名(包括不可枚举属性但不包括Symbol值作为名称的属性)组成的数组。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Object.defineProperty</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。</td>
    </tr>
</table>
<br />

> Promise

<table border>
    <tr style="font-weight: bold">
        <td width="200">Snippet prefix</td>
        <td width="200">Specification</td>
        <td>Description</td>
    </tr>
    <tr style="color: #1296db">
        <td>Promise-then-catch-finally</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>Promise 对象用于表示一个异步操作的最终完成 (或失败)及其结果值。</td>
    </tr>
    <tr style="color: #1296db">
        <td>Promise.all</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>
            Promise.all() 方法接收一个promise的iterable类型(注:Array，Map，Set都属于ES6的iterable类型)的输入，并且只返回一个Promise实例，
            那个输入的所有promise的resolve回调的结果是一个数组。这个Promise的resolve回调执行是在所有输入的promise的resolve回调都结束，或者输入的iterable里没有promise了的时候。它的reject回调执行是，只要任何一个输入的promise的reject回调执行或者输入不合法的promise就会立即抛出错误，并且reject的是第一个抛出的错误信息
        </td>
    </tr>
    <tr style="color: #1296db">
        <td>Promise.allSettled</td>
        <td>Promise.allSettled() (TC39第4阶段草案)</td>
        <td>
            该Promise.allSettled()方法返回一个在所有给定的promise都已经fulfilled或rejected后的promise，并带有一个对象数组，每个对象表示对应的promise结果。当您有多个彼此不依赖的异步任务成功完成时，或者您总是想知道每个promise的结果时，通常使用它。
        </td>
    </tr>
    <tr style="color: #1296db">
        <td>Promise.any</td>
        <td>Promise.any() (TC39第4阶段草案)</td>
        <td>
            Promise.any() 接收一个Promise可迭代对象，只要其中的一个 promise 成功，就返回那个已经成功的 promise 。如果可迭代对象中没有一个 promise 成功（即所有的 promises
            都失败/拒绝），就返回一个失败的 promise 和AggregateError类型的实例，它是 Error 的一个子类，用于把单一的错误集合在一起。本质上，这个方法和Promise.all()是相反的。
        </td>
    </tr>
    <tr style="color: #1296db">
        <td>Promise.race</td>
        <td>ECMAScript 2015 (6th Edition, ECMA-262)</td>
        <td>Promise.race(iterable) 方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。</td>
    </tr>
</table>
<br />

> Proxy

<table border>
    <tr style="font-weight: bold">
        <td width="200">Snippet prefix</td>
        <td width="200">Specification</td>
        <td>Description</td>
    </tr>
    <tr style="color: #1296db">
        <td>Proxy</td>
        <td>ECMAScript 2017 (ECMA-262)</td>
        <td>Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。</td>
    </tr>
</table>
<br />

> axios

<table border>
    <tr style="font-weight: bold">
        <td width="200">Snippet prefix</td>
        <td width="200">Code</td>
        <td>Description</td>
    </tr>
    <tr style="color: #1296db">
        <td>axios.create</td>
        <td>axios.create()</td>
        <td>创建一个新的 axios 实例</td>
    </tr>
    <tr style="color: #1296db">
        <td>axios.get</td>
        <td>axios.get()</td>
        <td>GET 请求</td>
    </tr>
    <tr style="color: #1296db">
        <td>axios.post</td>
        <td>axios.post()</td>
        <td>取消请求</td>
    </tr>
    <tr style="color: #1296db">
        <td>controller.abort</td>
        <td>controller.abort()</td>
        <td>取消请求</td>
    </tr>
</table>
<br />

> console

<table border>
    <tr style="font-weight: bold">
        <td width="200">Snippet prefix</td>
        <td width="200">Code</td>
        <td>Description</td>
    </tr>
    <tr style="color: #1296db">
        <td>clg</td>
        <td>console.log()</td>
        <td></td>
    </tr>
    <tr style="color: #1296db">
        <td>clgr</td>
        <td>console.group()</td>
        <td>用于将显示的信息分组，可以把信息进行折叠和展开。</td>
    </tr>
    <tr style="color: #1296db">
        <td>clt</td>
        <td>console.table()</td>
        <td>将复合类型的数据转为表格显示。</td>
    </tr>
    <tr style="color: #1296db">
        <td>cltime</td>
        <td>console.time()</td>
        <td>计时器</td>
    </tr>
</table>
<br />

> import

<table border>
    <tr style="font-weight: bold">
        <td width="200">Snippet prefix</td>
        <td width="200">Code</td>
        <td>Description</td>
    </tr>
    <tr style="color: #1296db">
        <td>imm</td>
        <td>import moduleName from 'module'</td>
        <td>ES module 引入默认模块</td>
    </tr>
    <tr style="color: #1296db">
        <td>imm</td>
        <td>import { module } from module</td>
        <td>ES module 按需引入模块</td>
    </tr>
    <tr style="color: #1296db">
        <td>imam</td>
        <td>import * as module from 'module'</td>
        <td>ES module 引入全部模块</td>
    </tr>
</table>
<br />

> require

<table border>
    <tr style="font-weight: bold">
        <td width="200">Snippet prefix</td>
        <td width="200">Code</td>
        <td>Description</td>
    </tr>
    <tr style="color: #1296db">
        <td>rmm</td>
        <td>const module = require(module)</td>
        <td>commonJS引入默认模块</td>
    </tr>
    <tr style="color: #1296db">
        <td>rmm</td>
        <td>const { } = require(module)</td>
        <td>commonJS按需引入模块</td>
    </tr>
</table>
<br />

### Supported languages

-   javascript (.js)
-   typescript (.ts)
-   javascriptreact (.jsx)
-   typescripereact (.tsx)
