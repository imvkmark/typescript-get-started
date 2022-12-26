# 类

类用来实现类接口

```ts
interface ClockInterface {
    // 属性
    currentTime: Date;

    // 方法
    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    // 属性
    currentTime: Date = new Date();

    // 方法
    setTime(d: Date) {
        this.currentTime = d;
    }

    constructor(h: number, m: number) {
    }
}
```

类的实例部分的构造, 该实例部分的无法通过一个类实现

```ts
interface ClockConstructor {
    new(hour: number, minute: number);
}
```
