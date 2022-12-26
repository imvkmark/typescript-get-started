# 字面量类型

字符串字面量类型

```ts
type Easing = "ease-in" | "ease-out" | "ease-in-out";
```

数字字面量类型

```ts
interface MapConfig {
    lng: number;
    lat: number;
    tileSize: 8 | 16 | 32;
}
```

布尔字面量类型, 约束某些属性之间互有关联的对象

```ts
interface ValidationSuccess {
    isValid: true;
    reason: null;
};

interface ValidationFailure {
    isValid: false;
    reason: string;
};

type ValidationResult =
    | ValidationSuccess
    | ValidationFailure;
```

