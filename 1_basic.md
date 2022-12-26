# 基本介绍

Typescript 作为 Javascript 的超集, 在运行的时候不会干扰 js 的运行, 仅仅是给予运行提示和更好的纠错工具

现在没有工具在不经过修改的时候运行 TypeScript, 所以需要 TypeScript 的编译器 `tsc`

TypeScript 可以把高版本的 ECMAScript 降级为低版本的 ECMAScript, 这个操作称之为降级

## Type & Interface

类型

类型合并

Interface 


Interface 和 Type 的区别

类型断言

```ts
// as 形式
const canvasA = document.getElementById("main_canvas") as HTMLCanvasElement;

// 尖括号形式
const canvasB = <HTMLCanvasElement>document.getElementById("main_canvas");
```

数组类型

```ts
let listA: number[] = [1, 2, 3];

let listB: Array<number> = [1, 2, 3];



// 可索引的字串数组
interface StringArray {
    [index: number]: string
}
```

元组类型


```ts
let x: [string, number];

x = ['1', 0]
```

枚举

```ts
enum Color {Green, Blue, Yellow}
let color: Color = Color.Yellow;
```


属性定义

```ts
interface SquareConfig {
    // 宽度
    width: number,
    // 可选颜色
    color?: string,

    // 额外附加任意数量的属性
    [propName: string]: any
}
```


函数定义, 函数参数名称不要求和接口中的定义的名字相匹配

```ts
interface SearchFunc {
    (source: string, subString: string): boolean;
}
```
