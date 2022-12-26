test('字符串解构赋值', () => {
    // 解构, 最低版本是 es2015
    let [h, e, l, , o] = 'hello';

    expect(h).toBe('h')
    expect(e).toBe('e')
    expect(l).toBe('l')
    expect(o).toBe('o')
})
