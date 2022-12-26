# 数组

定义数组

```ts
let listA: number[] = [1, 2, 3];

let listB: Array<number> = [1, 2, 3];
```

定义只读数组

```ts
// 只读数组
let listC: ReadonlyArray<number> = [1, 2, 3];
```

定义可索引的字串数组

```ts
interface StringArray {
    [index: number]: string
}
```


定义只读可索引的字串数组

```ts
interface StringArray {
    readonly [index: number]: string
}
```


联合类型索引

```ts
interface NumberOrStringDictionary {
   [index: string]: number | string;
   length: number;    // ok, length is a number
   name: string;      // ok, name is a string
}
```
