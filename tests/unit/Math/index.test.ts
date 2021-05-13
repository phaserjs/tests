import { Vec2Add, Vec2, Vec2Multiply } from '../../../../phaser-genesis/src/math/vec2';

describe("Math test", () => {
    test('Sum two vectors [3, 6] + [4, 7] = [7, 13]', () => {
        const vec_a = new Vec2(3, 6);
        const vec_b = new Vec2(4, 7);
        const vec_out = new Vec2();
        const add = Vec2Add(vec_a, vec_b, vec_out);
        expect(add).toMatchObject({x: 7, y: 13});
    });

    test('Multiply two vectors [3, 6] + [4, 7] = [12, 42]', () => {
        const vec_a = new Vec2(3, 6);
        const vec_b = new Vec2(4, 7);
        const vec_out = new Vec2();
        const add = Vec2Multiply(vec_a, vec_b, vec_out);
        expect(add).toMatchObject({x: 12, y: 42});
    });
});