test('数组解构', () => {
    // 数组解构
    let [a, b] = [1, undefined]
    let [, c] = [0, 1, 2]
    expect(a).toBe(1)
    expect(b).toBeUndefined()
    expect(c).toBe(1)


    // 解构支持默认值
    // null 不能认定为没有值, null 是特殊的类型
    let [d1 = 0, d2 = 1, d3 = 3] = [undefined, undefined, null]
    expect(d1).toBe(0)
    expect(d2).toBe(1)
    expect(d3).toBeNull()
})
