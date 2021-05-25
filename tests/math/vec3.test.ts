import {
    GetVec3Angle,
    GetVec3Distance,
    GetVec3DistanceSquared,
    GetVec3Length,
    GetVec3LengthSquared,
    GetVec3ManhattanDistance,
    GetVec3ManhattanLength,
    Vec3,
    Vec3Abs,
    Vec3Add,
    Vec3AddScalar,
    Vec3Ceil,
    Vec3Center,
    Vec3Clamp,
    Vec3ClampLength,
    Vec3ClampScalar,
    Vec3Clone,
    Vec3CopyFrom,
    Vec3Cross,
    Vec3Divide,
    Vec3DivideScalar,
    Vec3Dot,
    Vec3Equals,
    Vec3Floor,
    Vec3Fract,
    Vec3Inverse,
    Vec3Lerp,
    Vec3Max,
    Vec3Min,
    Vec3Multiply,
    Vec3MultiplyByFloats,
    Vec3Negate,
    Vec3Normalize,
    Vec3One,
    Vec3Random,
    Vec3Round,
    Vec3RoundToZero,
    Vec3Scale,
    Vec3ScaleAndAdd,
    Vec3SetLength,
    Vec3Subtract,
    Vec3SubtractScalar,
    Vec3TransformMat4,
    Vec3Zero
} from "../../../phaser-genesis/src/math/vec3";

import { Matrix4 } from "../../../phaser-genesis/src/math/mat4";
import { Vec2FuzzyEquals } from "../../../phaser-genesis/src/math/vec2";

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

    test('Vec3 Divide scalar', () =>
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
        const match: number = 8395;
        expect(result).toEqual(match);
    });

    test('Vec3 Cross', () =>
    {
        const vec_a = new Vec3(125, 240, 30);
        const vec_b = new Vec3(5, 32, 3);

        const result = Vec3Cross(vec_a, vec_b);
        const match = new Vec3(-240, -225, 2800);
        expect(result).toEqual(match);
    });

    test('Vec3 Set Length', () =>
    {
        const vec2 = new Vec3(132, 250, 20);
        const result = Vec3SetLength(vec2, 5);

        const match = new Vec3(2.328741441499999, 4.410495154356059, 0.3528396123484847);
        expect(result).toEqual(match)
    });

    test('Vec3 Length', () =>
    {
        const vec_a = new Vec3(25, 64, 60);

        const result = GetVec3Length(vec_a);

        const match: number = 91.21951545584969;
        expect(result).toEqual(match);
    });

    test('Vec3 Length Square', () =>
    {
        const vec_a = new Vec3(5, 16, 32);

        const result = GetVec3LengthSquared(vec_a);

        const match: number = 1305;
        expect(result).toEqual(match);
    });

    test('Vec3 clone', () =>
    {
        const vec = new Vec3(125, 240, 200);
        const match = Vec3Clone(vec);

        expect(match instanceof Vec3).toBeTruthy();
        expect(vec).toMatchObject(match);

        match.set(2, 4, 5);
        expect(vec).not.toMatchObject(match);
    });

    test('Vec3 Round to Zero', () =>
    {
        const vec_a = new Vec3(10.54, 30.25,  60.3);
        const result_a = Vec3RoundToZero(vec_a);
        const match_a = new Vec3(10, 30, 60);
        expect(result_a).toMatchObject(match_a);

        const vec_b = new Vec3(-10.54, -30.25, 60.3);
        const result_b = Vec3RoundToZero(vec_b);
        const match_b = new Vec3(-10, -30, 60);
        expect(result_b).toMatchObject(match_b);
    });

    test('Vec3 Round', () =>
    {
        const vec = new Vec3(5.6, 10.2, 40.7);

        const result = Vec3Round(vec);
        const match = new Vec3(6, 10, 41);

        expect(result).toMatchObject(match);
    });

    test('Vec3 Ceil', () =>
    {
        const vec = new Vec3(5.6, 10.2, 40.59);

        const result = Vec3Ceil(vec);
        const match = new Vec3(6, 11, 41);

        expect(result).toMatchObject(match);
    });

    test('Vec3 Floor', () =>
    {
        const vec = new Vec3(5.6, 10.2, 32.32);

        const result = Vec3Floor(vec);
        const match = new Vec3(5, 10, 32);

        expect(result).toMatchObject(match);

        const vec_b = new Vec3(-5.6, -10.2, -32.32);

        const result_b = Vec3Floor(vec_b);
        const match_b = new Vec3(-6, -11, -33);

        expect(result_b).toMatchObject(match_b);
    });

    test('Vec3 Frac', () =>
    {
        const vec2 = new Vec3(5.6, 10.2, 3.3);

        const result = Vec3Fract(vec2);
        const match = new Vec3(0.6, 0.2, 0.3);

        expect(result.x).toBeCloseTo(match.x);
        expect(result.y).toBeCloseTo(match.y);
    });


    test('Vec3 random [?, ?, ?]', () =>
    {
        const mock = jest.fn();
        const vec_a = new Vec3();
        mock(Vec3Random(vec_a, 5));

        expect(mock).toBeCalledWith(expect.any(Vec3));

        const vec_b = new Vec3();
        mock(Vec3Random(vec_b));

        expect(mock).toBeCalledWith(expect.any(Vec3));
    });


    test('Vec3 abs', () =>
    {
        const vec2 = new Vec3(-3, -5, 8);

        const result = Vec3Abs(vec2);
        const match = new Vec3(3, 5, 8);

        expect(result).toMatchObject(match);
    });

    test('Vec3 negate', () =>
    {
        const vec2 = new Vec3(-5, 10, -67);

        const result = Vec3Negate(vec2);
        const match = new Vec3(5, -10, 67);

        expect(result).toMatchObject(match);
    });

    test('Vec3 inverse', () =>
    {
        const vec2 = new Vec3(5, 20, 40);

        const result = Vec3Inverse(vec2);
        const match = new Vec3(0.2, 0.05, 0.025);

        expect(result).toMatchObject(match);
    });


    test('Vec3 Zero', () =>
    {
        const result = Vec3Zero();
        const match = new Vec3(0, 0);

        expect(result).toMatchObject(match)
    });

    
    test('Vec3 one', () =>
    {
        const result = Vec3One();
        const match = new Vec3(1, 1, 1);

        expect(result).toMatchObject(match);
    });

    test('Vec3 equal', () =>
    {
        const vec_a = new Vec3(4, 290, 200);
        const vec_b = new Vec3(4, 290, 200);
        const vec_c = new Vec3(5, 239, 200);

        const result_a = Vec3Equals(vec_a, vec_b); // True
        const result_b = Vec3Equals(vec_a, vec_c); // False

        expect(result_a).toBeTruthy();
        expect(result_b).toBeFalsy();
    });

    test('Vec3 copy from another vector', () =>
    {

        const vec_a = new Vec3(123.4, 894.2, 200.70);
        const vec_b = new Vec3();

        const result = Vec3CopyFrom(vec_a, vec_b);

        expect(result).toMatchObject(vec_a)
    });

    test('Vec3 center  [10, 30] and [40, 70] = [25, 50]', () =>
    {

        const vec_a = new Vec3(10, 30, -40);
        const vec_b = new Vec3(40, 70, 180);

        const result = Vec3Center(vec_a, vec_b);

        const match = new Vec3(25, 50, 70);

        expect(result).toMatchObject(match)
    });

    test('Vec3 Distance', () =>
    {

        const vec_a = new Vec3(10, 30, 60);
        const vec_b = new Vec3(40, 70, 25);

        const result = GetVec3Distance(vec_a, vec_b);

        const match: number = 61.032778078668514;

        expect(result).toEqual(match)
    });

    test('Vec3 Get distance squared', () =>
    {
        const vec_a = new Vec3(10, 30, 60);
        const vec_b = new Vec3(40, 70, 25);

        const result = GetVec3DistanceSquared(vec_a, vec_b);

        const match: number =  Math.pow(61.032778078668514, 2);

        expect(result).toEqual(match)
    });

    // TODO: Make transform
    test('Vec3 transform', () =>
    {
        const vec_a = new Vec3(10, 30, 20);
        const matrix4 = new Matrix4().set(
            1, 0, 0, 0, 
            0, 1, 0, 0, 
            0, 0, 1, 0, 
            20, 60, -15, 1);
        const resultX = Vec3TransformMat4(vec_a, matrix4);
        const matchX = new Vec3(30, 90, 5);
        expect(resultX).toEqual(matchX)
        // Scala test
        const matrix4Scale = new Matrix4().set(
            2, 0, 0, 0, 
            0, 0.5, 0, 0, 
            0, 0, 3, 0, 
            0, 0, 0, 1);
        const resultscale = Vec3TransformMat4(matchX, matrix4Scale);
        const matchScale = new Vec3(60, 45, 15);
        expect(resultscale).toEqual(matchScale)
    });

    test('Vec3 Angle', () =>
    {
        const vec_a = new Vec3(10, 16, 20);
        const vec_b = new Vec3(30, 80, 20);
        const result = GetVec3Angle(vec_a, vec_b);
        const match: number = 0.6082455789102096;

        expect(result).toEqual(match);
    });

    test('Vec3 Fuzzy Equals', () =>
    {

        const vec_a = new Vec3(3.5, 2.9, 4.2);
        const vec_b = new Vec3(3, 2, 4);
        const epsilon = 1;
        const epsilon2 = .5;

        const result = Vec2FuzzyEquals(vec_a, vec_b, epsilon);
        const result2 = Vec2FuzzyEquals(vec_a, vec_b, epsilon2);
        const result3 = Vec2FuzzyEquals(vec_a, vec_b);

        expect(result).toBeTruthy();
        expect(result2).toBeFalsy();
        expect(result3).toBeFalsy();
    });

    test('Vec3 Clamp', () =>
    {
        const vec_min = new Vec3(20, 10, 15);
        const vec_max = new Vec3(400, 400, 400);
        const vec_inside_min_max = new Vec3(300, 256, 100);

        const min = new Vec3(40, 25, 15);
        const max = new Vec3(320, 370, 370);
        const result_min = Vec3Clamp(vec_min, min, max);
        const match_min = new Vec3(40, 25, 15);
        expect(result_min).toMatchObject(match_min);

        const result_max = Vec3Clamp(vec_max, min, max);
        const match_max = new Vec3(320, 370, 370);
        expect(result_max).toMatchObject(match_max);

        const result_in_min_max = Vec3Clamp(vec_inside_min_max, min, max);
        const match_in_min_max = new Vec3(300, 256, 100);
        expect(result_in_min_max).toMatchObject(match_in_min_max);
    });

    test('Vec2 ClampScalar', () =>
    {
        const vec_min = new Vec3(20, 10, 25);

        // Test min
        const min = 30;
        const max = 80;

        const result_min = Vec3ClampScalar(vec_min, min, max);
        const match_min = new Vec3(30, 30, 30);
        expect(result_min).toMatchObject(match_min);

        const vec_max = new Vec3(400, 400, 400);
        const result_max = Vec3ClampScalar(vec_max, min, max);
        const match_max = new Vec3(80, 80, 80);
        expect(result_max).toMatchObject(match_max);

        const vec_inside_min_max = new Vec3(50, 40, 70);
        const result_in_min_max = Vec3ClampScalar(vec_inside_min_max, min, max);
        const match_in_min_max = new Vec3(50, 40, 70);
        expect(result_in_min_max).toMatchObject(match_in_min_max);
    });

    test('Vec2 ClampLength', () =>
    {
        const vec = new Vec3(10, 30, 20);

        // Test min
        const min = 30;
        const max = 80;

        const result_min = Vec3ClampLength(vec, min, max);
        const match_min = new Vec3( 9.999999999999998, 30, 19.999999999999996);
        expect(result_min.x).toBeCloseTo(match_min.x);
        expect(result_min.y).toBeCloseTo(match_min.y);
        expect(result_min.z).toBeCloseTo(match_min.z);
    });

    test('Vec3 Lerp', () =>
    {
        const vec_a = new Vec3(10, 20, 20);
        const vec_b = new Vec3(50, 80, 90);
        const result = Vec3Lerp(vec_a, vec_b, 0.5);
        const match = new Vec3(30, 50, 55);

        expect(result).toEqual(match);

        const result2 = Vec3Lerp(vec_a, vec_b, 0.9);
        const match2 = new Vec3(46, 74, 83);

        expect(result2).toMatchObject(match2);
    });

    test('Vec3 Manhattan Length', () =>
    {

        const vec2 = new Vec3(10, 30, 20);

        const result = GetVec3ManhattanLength(vec2);

        const match: number = 60;

        expect(result).toEqual(match)
    });

    test('Vec3 Manhattan Distance', () =>
    {

        const vec_a = new Vec3(10, 30, 20);
        const vec_b = new Vec3(50, 80, 90);

        const result = GetVec3ManhattanDistance(vec_a, vec_b);

        const match: number = 160;

        expect(result).toEqual(match)
    });

});