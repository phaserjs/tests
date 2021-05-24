import {
    Vec3,
    Vec3Add,
    Vec3AddScalar,
    Vec3Cross,
    Vec3Divide,
    Vec3DivideScalar,
    Vec3Dot,
    Vec3Max,
    Vec3Min,
    Vec3Multiply,
    Vec3MultiplyByFloats,
    Vec3Normalize,
    Vec3Scale,
    Vec3ScaleAndAdd,
    Vec3Subtract,
    Vec3SubtractScalar
} from "../../../phaser-genesis/src/math/vec3";

describe("Vec3 - tests", () =>
{
    test('New Vec3', () =>
    {
        const vec = new Vec3(3, 6, 8);
        expect(vec).toMatchObject({ x: 3, y: 6, z: 8});

        const vec2 = new Vec3();
        expect(vec2).toMatchObject({x: 0, y: 0, z: 0});

        const vec3 = new Vec3(4, 5, 4);
        vec3.set();
        expect(vec3).toMatchObject({x: 0, y: 0, z: 0});
    });

    test('Vec3 to array', () =>
    {
        const vec2 = new Vec3(3, 6, 30);
        const result = vec2.toArray();
        const match = [3, 6, 30];
        expect(result).toEqual(match);
    });

    test('Vec3 to string', () =>
    {
        const vec2 = new Vec3(3, 6, 30);
        const result = vec2.toString();
        const match = "{ x=3, y=6, z=30 }";
        expect(result).toEqual(match);
    });

    test('Vec2 from Array', () =>
    {
        const fromArrayValue = [3, 6, 30];

        const result = new Vec3();
        result.fromArray(fromArrayValue);

        const match = new Vec3(3, 6, 30);
        expect(result).toEqual(match);
    });

    test('Vec3 Min', () =>
    {
        const vec_a = new Vec3(10, 30, 20);
        const vec_b = new Vec3(20, 12, 25);

        const result = Vec3Min(vec_a, vec_b);

        const match = new Vec3(10, 12, 20);

        expect(result).toMatchObject(match)
    });

    test('Vec3 Max', () =>
    {
        const vec_a = new Vec3(10, 30, 40);
        const vec_b = new Vec3(20, 12, 10);

        const result = Vec3Max(vec_a, vec_b);

        const match = new Vec3(20, 30, 40);

        expect(result).toMatchObject(match)
    });

    test('Vec3 Add', () =>
    {
        const vec_a = new Vec3(3, 6, 8);
        const vec_b = new Vec3(4, 7, 2);

        const result = Vec3Add(vec_a, vec_b);
        const match = new Vec3(7, 13, 10);
        expect(result).toMatchObject(match);
    });

    test('Vec3 Multiply', () =>
    {
        const vec_a = new Vec3(3, 6, 5);
        const vec_b = new Vec3(4, 7, 8);

        const result = Vec3Multiply(vec_a, vec_b);
        const match = new Vec3(12, 42, 40);
        expect(result).toMatchObject(match);
    });

    test('Vec3 Multiply by float', () =>
    {
        const vec_a = new Vec3(3, 6, 5);
        const vec_b = new Vec3(4, 7, 8);

        const result = Vec3MultiplyByFloats(vec_a, vec_b.x, vec_b.y, vec_b.z);
        const match = new Vec3(12, 42, 40);
        expect(result).toMatchObject(match);
    });

    test('Vec3 subtract', () =>
    {
        const vec_a = new Vec3(3, 6, 10);
        const vec_b = new Vec3(4, 7, 8);

        const result = Vec3Subtract(vec_a, vec_b);
        const match = new Vec3(-1, -1, 2);
        expect(result).toMatchObject(match);
    });

    test('Vec3 Divide', () =>
    {
        const vec_a = new Vec3(20, 64, 25);
        const vec_b = new Vec3(10, 4, 5);

        const result = Vec3Divide(vec_a, vec_b);
        const match = new Vec3(2, 16, 5);
        expect(result).toMatchObject(match);
    });

    
    test('Vec3 Scale', () =>
    {
        const vec = new Vec3(3, 6, 5);
        const scale = 4;

        const result = Vec3Scale(vec, scale);
        const match = new Vec3(12, 24, 20);
        expect(result).toMatchObject(match);
    });

    test('Vec3 AddScalar', () =>
    {
        const vec2 = new Vec3(3, 6, 9);
        const addScalar = 4;

        const result = Vec3AddScalar(vec2, addScalar);
        const match = new Vec3(7, 10, 13);
        expect(result).toMatchObject(match);
    });

    test('Vec3 Scale and Add', () =>
    {
        const vec_a = new Vec3(3, 6, 9);
        const vec_b = new Vec3(4, 7, 3);
        const scalar = 4;

        const result = Vec3ScaleAndAdd(vec_a, vec_b, scalar);
        const match = new Vec3(19, 34, 21);

        expect(result).toMatchObject(match);
    });

    test('Vec3 Substract Scalar', () =>
    {
        const vec = new Vec3(9, 23, 55);
        const scalar = 4;

        const result = Vec3SubtractScalar(vec, scalar);
        const match = new Vec3(5, 19, 51);
        expect(result).toMatchObject(match);
    });

    test('Divide scalar [20, 16] / 4 = [5, 4]', () =>
    {
        const vec = new Vec3(20, 16, 12);
        const scalar = 4;

        const result = Vec3DivideScalar(vec, scalar);
        const match = new Vec3(5, 4, 3);
        expect(result).toMatchObject(match);
    });

    test('Vec3 Normalize', () =>
    {
        const vec = new Vec3(132, 250, 20);

        const result = Vec3Normalize(vec);
        // Result of A/||A||
        const match = new Vec3(0.4657482882999998, 0.8820990308712118, 0.07056792246969694);
        expect(result).toMatchObject(match);

        const vec2 = new Vec3(0, 0, 0);

        const result2 = Vec3Normalize(vec2);
        // Result of A/||A||
        const match2 = new Vec3(0, 0, 0);
        expect(result2).toMatchObject(match2);
    });

    test('Vec3 Dot', () =>
    {
        const vec_a = new Vec3(125, 240, 30);
        const vec_b = new Vec3(5, 32, 3);

        const result = Vec3Dot(vec_a, vec_b);
        // Result of A/||A||
        const match: number = 8430;
        expect(result).toEqual(match);
    });

    test('Vec3 Cross', () =>
    {
        const vec_a = new Vec3(125, 240, 30);
        const vec_b = new Vec3(5, 32, 3);

        const result = Vec3Cross(vec_a, vec_b);
        const match = new Vec3(-240, -246, 3024);
        expect(result).toEqual(match);
    });

});