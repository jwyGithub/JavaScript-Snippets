# JavaScript Snippets

> JavaScript Snippets for MDN

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

<table border style="font-size: 12px">
    <tr>
        <td width="200">snippet prefix</td>
        <td width="200">function</td>
        <td>Description</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.at</td>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.at</td>
        <td>at() 方法接收一个整数值并返回该索引的项目，允许正数和负数。负整数从数组中的最后一个项目开始倒数。</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.concat</td>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.concat</td>
        <td>concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.copyWithin</td>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.copyWithin</td>
        <td>copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.entries</td>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.entries</td>
        <td>entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.every</td>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.every</td>
        <td>every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.filter</td>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.filter</td>
        <td>filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.find</td>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.find</td>
        <td>find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.findIndex</td>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.findIndex</td>
        <td>findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.flat</td>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.flat</td>
        <td>flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.flatMap</td>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.flatMap</td>
        <td>flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.forEach</td>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.forEach</td>
        <td>forEach() 方法对数组的每个元素执行一次给定的函数。</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Array.from</td>
        <td width="200" style="color: #1296db; font-weight: bold">Array.from</td>
        <td>Array.from() 方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Array.isArray</td>
        <td width="200" style="color: #1296db; font-weight: bold">Array.isArray</td>
        <td>Array.isArray() 确定传递的值是否为数组。</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.includes</td>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.includes</td>
        <td>includes()方法确定数组的条目中是否包含某个值，并相应地返回true或false</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.indexOf</td>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.indexOf</td>
        <td>indexOf()方法返回数组中可以找到给定元素的第一个索引，如果不存在，则返回-1</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.join</td>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.join</td>
        <td>join()方法通过连接数组（或类似数组的对象）中的所有元素（用逗号或指定的分隔符字符串分隔）来创建并返回一个新字符串。如果数组只有一个项目，则在不使用分隔符的情况下返回该项目</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.keys</td>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.keys</td>
        <td>keys方法返回一个新的数组迭代器对象，该对象包含数组中每个索引的键。</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.lastIndexOf</td>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.lastIndexOf</td>
        <td>lastIndexOf方法返回可在数组中找到给定元素的最后一个索引，如果不存在，则返回 -1。向后搜索数组，从 开始。fromIndex</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.map</td>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.map</td>
        <td>map() 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.reduce</td>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.reduce</td>
        <td>reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.reduceRight</td>
        <td width="200" style="color: #1296db; font-weight: bold">Array.prototype.reduceRight</td>
        <td>reduceRight() 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。</td>
    </tr>
</table>
<br/>

> Object

<table border style="font-size:12px;">
  <tr>
      <td width="200">snippet prefix</td>
      <td width="200">function</td>
      <td>Description</td>
  </tr>
  <tr>
      <td width="200" style="color: #1296db; font-weight: bold">Object.keys</td>
      <td width="200" style="color: #1296db; font-weight: bold">Object.keys</td>
      <td>Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致</td>
  </tr>
  <tr>
      <td width="200" style="color: #1296db; font-weight: bold">Object.values</td>
      <td width="200" style="color: #1296db; font-weight: bold">Object.values</td>
      <td>Object.values()方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。</td>
  </tr>
  <tr>
      <td width="200" style="color: #1296db; font-weight: bold">Object.entries</td>
      <td width="200" style="color: #1296db; font-weight: bold">Object.entries</td>
      <td>Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。</td>
  </tr>
  <tr>
      <td width="200" style="color: #1296db; font-weight: bold">Object.assign</td>
      <td width="200" style="color: #1296db; font-weight: bold">Object.assign</td>
      <td>Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。</td>
  </tr>
  <tr>
      <td width="200" style="color: #1296db; font-weight: bold">Object.freeze</td>
      <td width="200" style="color: #1296db; font-weight: bold">Object.freeze</td>
      <td>Object.freeze()方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze()返回和传入的参数相同 的对象。
      </td>
  </tr>
  <tr>
      <td width="200" style="color: #1296db; font-weight: bold">Object.is</td>
      <td width="200" style="color: #1296db; font-weight: bold">Object.is</td>
      <td>Object.is() 方法判断两个值是否为同一个值。</td>
  </tr>
  <tr>
      <td width="200" style="color: #1296db; font-weight: bold">Object.prototype.toString</td>
      <td width="200" style="color: #1296db; font-weight: bold">Object.prototype.toString</td>
      <td>toString() 方法返回一个表示该对象的字符串。</td>
  </tr>
  <tr>
      <td width="200" style="color: #1296db; font-weight: bold">Object.defineProperty</td>
      <td width="200" style="color: #1296db; font-weight: bold">Object.defineProperty</td>
      <td>Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。</td>
  </tr>
</table>
<br/>

> Promise

<table border style="font-size: 12px">
    <tr>
        <td width="200">snippet prefix</td>
        <td width="200">function</td>
        <td>Description</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Promise-then-catch-fially</td>
        <td width="200" style="color: #1296db; font-weight: bold">Promise</td>
        <td>Promise 对象用于表示一个异步操作的最终完成 (或失败)及其结果值。</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Promise.all</td>
        <td width="200" style="color: #1296db; font-weight: bold">Promise.all</td>
        <td>Promise 对象用于表示一个异步操作的最终完成 (或失败)及其结果值。</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Promise.allSettled</td>
        <td width="200" style="color: #1296db; font-weight: bold">Promise.allSettled</td>
        <td>该Promise.allSettled()方法返回一个在所有给定的promise都已经fulfilled或rejected后的promise，并带有一个对象数组，每个对象表示对应的promise结果。</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Promise.race</td>
        <td width="200" style="color: #1296db; font-weight: bold">Promise.race</td>
        <td>Promise.race(iterable) 方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。</td>
    </tr>
</table>
<br/>

> console

<table border style="font-size: 12px">
    <tr>
        <td width="200">snippet prefix</td>
        <td width="200">function</td>
        <td>Description</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">clg</td>
        <td width="200" style="color: #1296db; font-weight: bold">console.log()</td>
        <td></td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">clgr</td>
        <td width="200" style="color: #1296db; font-weight: bold">console.group()</td>
        <td>用于将显示的信息分组，可以把信息进行折叠和展开。</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">clt</td>
        <td width="200" style="color: #1296db; font-weight: bold">console.table()</td>
        <td>将复合类型的数据转为表格显示。</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">cltime</td>
        <td width="200" style="color: #1296db; font-weight: bold">console.time()</td>
        <td>计时器</td>
    </tr>
</table>
<br/>

> Proxy

<table border style="font-size: 12px">
    <tr>
        <td width="200">snippet prefix</td>
        <td width="200">function</td>
        <td>Description</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">Proxy</td>
        <td width="200" style="color: #1296db; font-weight: bold">Proxy</td>
        <td>Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。</td>
    </tr>
</table>
<br/>

> import

<table border style="font-size: 12px">
    <tr>
        <td width="200">snippet prefix</td>
        <td width="200">function</td>
        <td>Description</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">imm</td>
        <td width="200" style="color: #1296db; font-weight: bold">import moduleName from 'module'</td>
        <td>ES module 引入默认模块</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">imm</td>
        <td width="200" style="color: #1296db; font-weight: bold">import { module } from module</td>
        <td>ES module 按需引入模块</td>
    </tr>
    <tr>
        <td width="200" style="color: #1296db; font-weight: bold">imam</td>
        <td width="200" style="color: #1296db; font-weight: bold">import * as module from 'module'</td>
        <td>ES module 引入全部模块</td>
    </tr>
</table>
-   javascript(.js)
-   typescript(.ts)
