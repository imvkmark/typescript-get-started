test('逻辑操作符 || ', () => {
    let user = {
        level: 0
    }
    let level = user.level || '暂无';
    expect(level).toBe('暂无')
})


test('对象解构', () => {
    // 解构
    let { bar } = { bar: 'baz' };
    expect(bar).toBe('baz')

    // 重新命名变量
    let { bar: baz } = { bar: 'baz' };
    expect(baz).toBe('baz')

    // 变量和解构模式是不同的东西, 需要区别利用
    const node = {
        loc: {
            start: {
                line: 1,
                column: 5
            }
        }
    };
    let { loc, loc: { start }, loc: { start: { column } } } = node
    expect(column).toBe(5)

    let { message: msg = 'Something went wrong' } = {};
    expect(msg).toBe('Something went wrong')

})
