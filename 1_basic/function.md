# 函数

## 定义

js 的函数定义

```js
let myAdd = function (x, y) {
    return x + y;
}
```

加入类型限定之后的函数类型

```ts
let myAdd = function (x: number, y: number): number {
    return x + y;
}
```

完整类型, 包含参数烈性和返回类型

```ts
let myAdd: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
}
```

增加可读性的函数类型, 函数类型要求数量匹配, 不要求函数名称匹配

```ts
let myAdd: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
    return x + y;
}
```

## 可选参数

可选参数放到必选参数之后

```ts
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + " " + lastName;
    } else {
        return firstName;
    }
}
```

默认参数

```ts
function buildName(firstName: string, lastName = 'zhao') {
    if (lastName) {
        return firstName + " " + lastName;
    } else {
        return firstName;
    }
}
```

## 剩余参数

```ts
let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
```

## this

箭头函数能够保存函数创建时候的 this 的值

```ts
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }
    }
}
```
