import
{
    GetChebyshevDistance,
    GetDistanceFromSegment,
    GetVec2Angle,
    GetVec2AngleY,
    GetVec2Distance,
    GetVec2DistancePower,
    GetVec2DistanceSquared,
    GetVec2Length,
    GetVec2LengthSquared,
    GetVec2ManhattanDistance,
    GetVec2ManhattanLength,
    Vec2,
    Vec2Abs,
    Vec2Add,
    Vec2AddScalar,
    Vec2Bezier,
    Vec2Callback,
    Vec2CatmullRom,
    Vec2Ceil,
    Vec2Center,
    Vec2Clamp,
    Vec2ClampScalar,
    Vec2Clone,
    Vec2CopyFrom,
    Vec2Cross,
    Vec2Divide,
    Vec2DivideScalar,
    Vec2Dot,
    Vec2Equals,
    Vec2Floor,
    Vec2Fract,
    Vec2FromGridIndex,
    Vec2FuzzyEquals,
    Vec2Hermite,
    Vec2Inverse,
    Vec2Lerp,
    Vec2Limit,
    Vec2Max,
    Vec2Min,
    Vec2Multiply,
    Vec2MultiplyByFloats,
    Vec2Negate,
    Vec2Normalize,
    Vec2One,
    Vec2PerpDot,
    Vec2Random,
    Vec2Rotate,
    Vec2Round,
    Vec2RoundToZero,
    Vec2Scale,
    Vec2ScaleAndAdd,
    Vec2SetLength,
    Vec2Subtract,
    Vec2SubtractScalar,
    Vec2Transform,
    Vec2TransformMat2d,
    Vec2TransformMat4,
    Vec2Zero
} from '../../../phaser-genesis/src/math/vec2';

import { Matrix2D } from '../../../phaser-genesis/src/math/mat2d';
import { Matrix4 } from '../../../phaser-genesis/src/math/mat4';

describe("Vec2 - tests", () =>
{
    test('New Vec2', () =>
    {
        const vec = new Vec2(3, 6);
        expect(vec).toMatchObject({ x: 3, y: 6 });
        const vec2 = new Vec2();
        expect(vec2).toMatchObject({x: 0, y: 0});
        const vec3 = new Vec2(4, 5);
        vec3.set();
        expect(vec3).toMatchObject({x: 0, y: 0});
    });

    test('Vec2 to array', () =>
    {
        const vec2 = new Vec2(3, 6);
        const result = vec2.toArray();
        const match = [3, 6];
        expect(result).toEqual(match);
    });

    test('New Vec2 to string', () =>
    {
        const vec2 = new Vec2(3, 6);
        const result = vec2.toString();
        const match = "{ x=3, y=6 }";
        expect(result).toEqual(match);
    });

    test('Vec2 from Array', () =>
    {
        const fromArrayValue = [3, 6];

        const result = new Vec2();
        result.fromArray(fromArrayValue);

        const match = new Vec2(3, 6);
        expect(result).toEqual(match);
    });

    // Basic operations
    test('Vec2 add', () =>
    {
        const vec_a = new Vec2(3, 6);
        const vec_b = new Vec2(4, 7);

        const result = Vec2Add(vec_a, vec_b);
        const match = new Vec2(7, 13);
        expect(result).toMatchObject(match);
    });

    test('Vec2 Multiply', () =>
    {
        const vec_a = new Vec2(3, 6);
        const vec_b = new Vec2(4, 7);

        const result = Vec2Multiply(vec_a, vec_b);
        const match = new Vec2(12, 42);
        expect(result).toMatchObject(match);
    });

    test('Vec2 Multiply by float [3, 6] * x:4, y:7 = [12, 42]', () =>
    {
        const vec_a = new Vec2(3, 6);

        const result = Vec2MultiplyByFloats(vec_a, 4, 7);
        const match = new Vec2(12, 42);
        expect(result).toMatchObject(match);
    });

    test('Vec2 Subtract', () =>
    {
        const vec_a = new Vec2(3, 6);
        const vec_b = new Vec2(4, 7);

        const result = Vec2Subtract(vec_a, vec_b);
        const match = new Vec2(-1, -1);
        expect(result).toMatchObject(match);

        const vec_a2 = new Vec2(6, 8);
        const vec_b2 = new Vec2(2, 6);

        const result2 = Vec2Subtract(vec_a2, vec_b2);
        const match2 = new Vec2(4, 2);
        expect(result2).toMatchObject(match2);

    });

    test('Vec2 Divide', () =>
    {
        const vec_a = new Vec2(20, 64);
        const vec_b = new Vec2(10, 4);

        const result = Vec2Divide(vec_a, vec_b);
        const match = new Vec2(2, 16);
        expect(result).toMatchObject(match);
    });

    // Scalar
    test('Vec2 scale', () =>
    {
        const vec = new Vec2(3, 6);
        const scale = 4;

        const result = Vec2Scale(vec, scale);
        const match = new Vec2(12, 24);
        expect(result).toMatchObject(match);
    });

    test('Vec2 AddScalar', () =>
    {
        const vec2 = new Vec2(3, 6);
        const addScalar = 4;

        const result = Vec2AddScalar(vec2, addScalar);
        const match = new Vec2(7, 10);
        expect(result).toMatchObject(match);
    });

    test('Vec2 Scale and Add', () =>
    {
        const vec_a = new Vec2(3, 6);
        const vec_b = new Vec2(4, 7);
        const scalar = 4;

        const result = Vec2ScaleAndAdd(vec_a, vec_b, scalar);
        const match = new Vec2(19, 34);

        expect(result).toMatchObject(match);
    });

    test('Substract scalar [9, 23] - 4 = [5, 19]', () =>
    {
        const vec = new Vec2(9, 23);
        const scalar = 4;

        const result = Vec2SubtractScalar(vec, scalar);
        const match = new Vec2(5, 19);
        expect(result).toMatchObject(match);
    });

    test('Vec2 Divide Scalar', () =>
    {
        const vec = new Vec2(20, 16);
        const scalar = 4;

        const result = Vec2DivideScalar(vec, scalar);
        const match = new Vec2(5, 4);
        expect(result).toMatchObject(match);
    });

    test('Vec2 Normalize', () =>
    {
        const vec = new Vec2(132, 250);

        const result = Vec2Normalize(vec);
        // Result of A/||A||
        const match = new Vec2(0.4669123116297254, 0.8843036205108435);
        expect(result).toMatchObject(match);

        const vec2 = new Vec2(0, 0);

        const result2 = Vec2Normalize(vec2);
        // Result of A/||A||
        const match2 = new Vec2(0, 0);
        expect(result2).toMatchObject(match2);
    });

    test('Vec2 Dot', () =>
    {
        const vec_a = new Vec2(125, 240);
        const vec_b = new Vec2(5, 32);

        const result = Vec2Dot(vec_a, vec_b);
        const match: number = 8305;
        expect(result).toEqual(match);
    });

    test('Vec2 Cross', () =>
    {
        const vec_a = new Vec2(125, 240);
        const vec_b = new Vec2(5, 32);

        const result = Vec2Cross(vec_a, vec_b);
        const match: number = 2800;
        expect(result).toEqual(match);
    });

    test('Vec2 Set Length', () =>
    {
        const vec2 = new Vec2(10, 30);
        const result = Vec2SetLength(vec2, 5);

        const match = new Vec2(1.5811388300841898, 4.743416490252569);
        expect(result).toEqual(match)
    });

    test('Vec2 Length', () =>
    {
        const vec_a = new Vec2(25, 64);

        const result = GetVec2Length(vec_a);

        const match: number = 68.70953354520753;
        expect(result).toEqual(match);
    });

    test('Vec2 Length Square', () =>
    {
        const vec_a = new Vec2(5, 16);

        const result = GetVec2LengthSquared(vec_a);

        const match: number = 281;
        expect(result).toEqual(match);
    });

    test('Vec2 clone', () =>
    {
        const vec2 = new Vec2(125, 240);
        const match = Vec2Clone(vec2);

        expect(match instanceof Vec2).toBeTruthy();
        expect(vec2).toMatchObject(match);

        match.set(2, 4);
        expect(vec2).not.toMatchObject(match);
    });

    // Round
    test('Vec2 Round to Zero', () =>
    {
        const vec_a = new Vec2(10.54, 30.25);
        const result_a = Vec2RoundToZero(vec_a);

        const match_a = new Vec2(10, 30);

        expect(result_a).toMatchObject(match_a);

        const vec_b = new Vec2(-10.54, -30.25);
        const result_b = Vec2RoundToZero(vec_b);

        const match_b = new Vec2(-10, -30);
        expect(result_b).toMatchObject(match_b);
    });

    test('Vec2 round [5.6, 10.2] = [6, 10]', () =>
    {
        const vec2 = new Vec2(5.6, 10.2);

        const result = Vec2Round(vec2);
        const match = new Vec2(6, 10);

        expect(result).toMatchObject(match);
    });

    test('Vec2 ceil [5.6, 10.2] = [6, 11]', () =>
    {
        const vec2 = new Vec2(5.6, 10.2);

        const result = Vec2Ceil(vec2);
        const match = new Vec2(6, 11);

        expect(result).toMatchObject(match);
    });

    test('Vec2 floor [5.6, 10.2] = [5, 10]', () =>
    {
        const vec2 = new Vec2(5.6, 10.2);

        const result = Vec2Floor(vec2);
        const match = new Vec2(5, 10);

        expect(result).toMatchObject(match);
    });

    test('Vec2 frac [5.6, 10.2] = [5, 10]', () =>
    {
        const vec2 = new Vec2(5.6, 10.2);

        const result = Vec2Fract(vec2);
        const match = new Vec2(0.6, 0.2);

        expect(result.x).toBeCloseTo(match.x);
        expect(result.y).toBeCloseTo(match.y);
    });

    test('Vec2 random [?, ?]', () =>
    {
        const mock = jest.fn();
        const vec_a = new Vec2();
        mock(Vec2Random(vec_a, 5));

        expect(mock).toBeCalledWith(expect.any(Vec2));

        const vec_b = new Vec2();
        mock(Vec2Random(vec_b));

        expect(mock).toBeCalledWith(expect.any(Vec2));
    });

    // Symbols
    test('Vec2 abs [-3, -5] = [3, 5]', () =>
    {
        const vec2 = new Vec2(-3, -5);

        const result = Vec2Abs(vec2);
        const match = new Vec2(3, 5);

        expect(result).toMatchObject(match);
    });

    test('Vec2 negate [-5, 10] = [5, -10]', () =>
    {
        const vec2 = new Vec2(-5, 10);

        const result = Vec2Negate(vec2);
        const match = new Vec2(5, -10);

        expect(result).toMatchObject(match);
    });

    test('Vec2 inverse [1/x, 1/y] -> [5, 20] = [0.2, 0.05]', () =>
    {
        const vec2 = new Vec2(5, 20);

        const result = Vec2Inverse(vec2);
        const match = new Vec2(0.2, 0.05);

        expect(result).toMatchObject(match);
    });


    test('Vec2 Zero [0, 0]', () =>
    {
        const result = Vec2Zero();
        const match = new Vec2(0, 0);

        expect(result).toMatchObject(match)
    });


    test('Vec2 one [1, 1]', () =>
    {
        const result = Vec2One();
        const match = new Vec2(1, 1);

        expect(result).toMatchObject(match);
    });

    test('Vec2 equal', () =>
    {
        const vec_a = new Vec2(4, 290);
        const vec_b = new Vec2(4, 290);
        const vec_c = new Vec2(5, 239);

        const result_a = Vec2Equals(vec_a, vec_b); // True
        const result_b = Vec2Equals(vec_a, vec_c); // False

        expect(result_a).toBeTruthy();
        expect(result_b).toBeFalsy();
    });

    test('Vec2 copy from another vector', () =>
    {

        const vec_a = new Vec2(123, 894);
        const vec_b = new Vec2();

        const result = Vec2CopyFrom(vec_a, vec_b);

        expect(result).toMatchObject(vec_a)
    });

    test('Vec2 center  [10, 30] and [40, 70] = [25, 50]', () =>
    {

        const vec_a = new Vec2(10, 30);
        const vec_b = new Vec2(40, 70);

        const result = Vec2Center(vec_a, vec_b);

        const match = new Vec2(25, 50);

        expect(result).toMatchObject(match)
    });

    test('Vec2 Get distance squared  [10, 30] and [40, 70] = 2500', () =>
    {
        const vec_a = new Vec2(10, 30);
        const vec_b = new Vec2(40, 70);

        const result = GetVec2DistanceSquared(vec_a, vec_b);

        const match: number = 2500;

        expect(result).toEqual(match)
    });

    test('Vec2 Get distance power', () =>
    {
        const vec_a = new Vec2(10, 30);
        const vec_b = new Vec2(40, 70);

        const result = GetVec2DistancePower(vec_a, vec_b, 3);

        const match: number = 301.66206257996714;

        expect(result).toEqual(match);

        const result2 = GetVec2DistancePower(vec_a, vec_b);
        const match2: number = 50;

        expect(result2).toEqual(match2);

    });

    test('Vec2 Distance [10, 30] and [40, 70] = 50', () =>
    {

        const vec_a = new Vec2(10, 30);
        const vec_b = new Vec2(40, 70);

        const result = GetVec2Distance(vec_a, vec_b);

        const match: number = 50;

        expect(result).toEqual(match)
    });

    test('Vec2 transform', () =>
    {

        const vec_a = new Vec2(10, 30);

        const result = Vec2Transform(vec_a, 3, 6, 20, 3, 3);

        const match = new Vec2(8.255753483385602, 1.1344509094760042);

        expect(result).toEqual(match)
    });

    test('Vec2 Manhattan Length', () =>
    {

        const vec2 = new Vec2(10, 30);

        const result = GetVec2ManhattanLength(vec2);

        const match: number = 40;

        expect(result).toEqual(match)
    });

    test('Vec2 Manhattan Distance', () =>
    {

        const vec_a = new Vec2(10, 30);
        const vec_b = new Vec2(40, 50);

        const result = GetVec2ManhattanDistance(vec_a, vec_b);

        const match: number = 50;

        expect(result).toEqual(match)
    });

    test('Vec2 Rotate', () =>
    {
        const vec_a = new Vec2(10, 30);
        const vec_b = new Vec2(.2, .2);

        const result = Vec2Rotate(vec_a, vec_b, 45);

        const match = new Vec2(-20.008769540702982, 24.193449807202708);

        expect(result).toMatchObject(match)
    });

    test('Vec2 Min', () =>
    {
        const vec_a = new Vec2(10, 30);
        const vec_b = new Vec2(20, 12);

        const result = Vec2Min(vec_a, vec_b);

        const match = new Vec2(10, 12);

        expect(result).toMatchObject(match)
    });

    test('Vec2 Max', () =>
    {
        const vec_a = new Vec2(10, 30);
        const vec_b = new Vec2(20, 12);

        const result = Vec2Max(vec_a, vec_b);

        const match = new Vec2(20, 30);

        expect(result).toMatchObject(match)
    });

    test('Vec2 Transform 2D', () =>
    {
        const vec_a = new Vec2(10, 30);
        const matrix2dX = new Matrix2D(1, 0, 0, 1, 20); // Translate X
        const matrix2dY = new Matrix2D(1, 0, 0, 1, 0, 50); // Translate Y

        const resultX = Vec2TransformMat2d(vec_a, matrix2dX);
        const resultY = Vec2TransformMat2d(vec_a, matrix2dY);

        const matchX = new Vec2(30, 30);
        const matchY = new Vec2(10, 80);

        expect(resultX).toMatchObject(matchX);
        expect(resultY).toMatchObject(matchY);
    });

    test('Vec2 Transform Math4', () =>
    {
        const vec_a = new Vec2(10, 30);

        const matrix4X = new Matrix4().set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0); // Translate X
        const matrix4Y = new Matrix4().set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0); // Translate X

        const resultX = Vec2TransformMat4(vec_a, matrix4X);
        const resultY = Vec2TransformMat4(vec_a, matrix4Y);

        const matchX = new Vec2(20, 30);
        const matchY = new Vec2(10, 50);

        expect(resultX).toMatchObject(matchX);
        expect(resultY).toMatchObject(matchY);
    });

    test('Vec2 Perp Dot', () =>
    {
        const vec_b = new Vec2(30, 80);
        const vec_a = new Vec2(10, 16);
        const result = Vec2PerpDot(vec_a, vec_b);
        const match: number = 320;

        expect(result).toEqual(match);
    });

    test('Vec2 Angle', () =>
    {
        const vec_a = new Vec2(10, 16);
        const vec_b = new Vec2(30, 80);
        const result = GetVec2Angle(vec_a, vec_b);
        const match: number = 1.2679114584199251;

        expect(result).toEqual(match);
    });

    test('Vec2 Get Angle Y', () =>
    {
        const vec_a = new Vec2(10, 16);
        const vec_b = new Vec2(30, 80);
        const result = GetVec2AngleY(vec_a, vec_b);
        const match: number = 0.3028848683749714;

        expect(result).toEqual(match);
    });


    test('Vec2 Get Chebyshev Distance', () =>
    {
        const vec_a = new Vec2(10, 16);
        const vec_b = new Vec2(30, 80);
        const result = GetChebyshevDistance(vec_a, vec_b);
        const match: number = 64;

        expect(result).toEqual(match);
    });

    test('Vec2 Lerp', () =>
    {
        const vec_a = new Vec2(10, 20);
        const vec_b = new Vec2(50, 80);
        const result = Vec2Lerp(vec_a, vec_b, 0.5);
        const match = new Vec2(30, 50);

        expect(result).toEqual(match);

        const result2 = Vec2Lerp(vec_a, vec_b, 0.9);
        const match2 = new Vec2(46, 74);

        expect(result2).toMatchObject(match2);
    });

    test('Vec2 from Grid Index 6 x 4 grid, index 16 would equal x: 4 y: 2', () =>
    {
        const result = Vec2FromGridIndex(16, 6, 4);
        const match = new Vec2(4, 2);
        expect(result).toMatchObject(match);

        // Test 2 if index < width - 
        const result2 = Vec2FromGridIndex(5, 6, 4);
        const match2 = new Vec2(5, 0);
        expect(result2).toMatchObject(match2);
    });

    test('Vec2 get distance from segment', () =>
    {

        const vec_p = new Vec2(20, 20);
        const vec_a = new Vec2(10, 20);
        const vec_b = new Vec2(5, 15);

        const result = GetDistanceFromSegment(vec_p, vec_a, vec_b);
        const match: number = 20;
        expect(result).toEqual(match);

        const vec_2_p = new Vec2(20, 20);
        const vec_2_a = new Vec2(10, 20);
        const vec_2_b = new Vec2(10, 20);

        const result2 = GetDistanceFromSegment(vec_2_p, vec_2_a, vec_2_b);
        const match2: number = 10;
        expect(result2).toEqual(match2);

    });

    test('Vec2 Fuzzy Equals', () =>
    {

        const vec_a = new Vec2(3.5, 2.9);
        const vec_b = new Vec2(3, 2);
        const epsilon = 1;
        const epsilon2 = .5;

        const result = Vec2FuzzyEquals(vec_a, vec_b, epsilon);
        const result2 = Vec2FuzzyEquals(vec_a, vec_b, epsilon2);
        const result3 = Vec2FuzzyEquals(vec_a, vec_b);

        expect(result).toBeTruthy();
        expect(result2).toBeFalsy();
        expect(result3).toBeFalsy();
    });

    test('Vec2 Clamp', () =>
    {

        const vec_min = new Vec2(20, 10);
        const vec_max = new Vec2(400, 400);
        const vec_inside_min_max = new Vec2(300, 256);

        const min = new Vec2(40, 25);
        const max = new Vec2(320, 370);

        const result_min = Vec2Clamp(vec_min, min, max);
        const match_min = new Vec2(40, 25);
        expect(result_min).toMatchObject(match_min);

        const result_max = Vec2Clamp(vec_max, min, max);
        const match_max = new Vec2(320, 370);
        expect(result_max).toMatchObject(match_max);

        const result_in_min_max = Vec2Clamp(vec_inside_min_max, min, max);
        const match_in_min_max = new Vec2(300, 256);
        expect(result_in_min_max).toMatchObject(match_in_min_max);
    });

    test('Vec2 ClampScalar', () =>
    {

        const vec_min = new Vec2(20, 10);
        const vec_max = new Vec2(400, 400);
        const vec_inside_min_max = new Vec2(50, 40);

        // Test min
        const min = 30;
        const max = 80;

        const result_min = Vec2ClampScalar(vec_min, min, max);
        const match_min = new Vec2(30, 30);
        expect(result_min).toMatchObject(match_min);

        const result_max = Vec2ClampScalar(vec_max, min, max);
        const match_max = new Vec2(80, 80);
        expect(result_max).toMatchObject(match_max);

        const result_in_min_max = Vec2ClampScalar(vec_inside_min_max, min, max);
        const match_in_min_max = new Vec2(50, 40);
        expect(result_in_min_max).toMatchObject(match_in_min_max);
    });

    test('Vec2 Catmull Rom', () =>
    {
        const vec1 = new Vec2(10, 10);
        const vec2 = new Vec2(20, 20);
        const vec3 = new Vec2(30, 10);
        const vec4 = new Vec2(40, 30);

        const result_points = [
            new Vec2(20, 20),
            new Vec2(21, 19.675),
            new Vec2(22, 18.8),
            new Vec2(23, 17.525),
            new Vec2(24, 16),
            new Vec2(25, 14.375),
            new Vec2(26, 12.8),
            new Vec2(27, 11.424999999999999),
            new Vec2(28, 10.399999999999997),
            new Vec2(29, 9.875)
        ];

        for (let i = 0; i < 10; i++)
        {
            const result = Vec2CatmullRom(vec1, vec2, vec3, vec4, i / 10);
            expect(result).toEqual(result_points[i]);
        }
    });

    test('Vec2 Limit', () =>
    {
        const vec = new Vec2(20, 10);
        const result = Vec2Limit(vec, 8);

        const match = new Vec2(7.155417527999327, 3.5777087639996634);

        expect(result).toMatchObject(match);
    });

    test('Vec2 Bezier', () =>
    {
        const vec1 = new Vec2(50, 260);
        const vec2 = new Vec2(610, 25);
        const vec3 = new Vec2(320, 370);
        const vec4 = new Vec2(735, 550);

        const result_points = [
            new Vec2(50, 260),
            new Vec2(194.054993, 206.154999),
            new Vec2(296.440002, 182.639999),
            new Vec2(366.485016, 184.985001),
            new Vec2(413.519989, 208.720001),
            new Vec2(446.875, 249.375),
            new Vec2(475.880005, 302.480011),
            new Vec2(509.86499, 363.565002),
            new Vec2(558.160034, 428.160034),
            new Vec2(630.094971, 491.794983)
        ];

        for (let i = 0; i < 10; i++)
        {
            const result = Vec2Bezier(vec1, vec2, vec3, vec4, i / 10);
            expect(result.x).toBeCloseTo(result_points[i].x);
            expect(result.y).toBeCloseTo(result_points[i].y);
        }
    });

    // TODO Hermite Curve
    test('Vec2 Hermite', () =>
    {
        const vec1 = new Vec2(50, 260);
        const vec2 = new Vec2(610, 25);
        const vec3 = new Vec2(320, 370);
        const vec4 = new Vec2(735, 550);

        const result_points = [
            new Vec2(50, 260),
            new Vec2(115.71000000000001, 266.815),
            new Vec2(189.07999999999998, 281.52),
            new Vec2(267.47, 303.005),
            new Vec2(348.24000000000007, 330.16),
            new Vec2(428.75, 361.875),
            new Vec2(506.36, 397.04),
            new Vec2(578.43, 434.54499999999996),
            new Vec2(642.32, 473.28000000000003),
            new Vec2(695.3899999999999, 512.135),
        ];

        for (let i = 0; i < 10; i++)
        {
            const result = Vec2Hermite(vec1, vec2, vec3, vec4, i / 10);
            expect(result).toEqual(result_points[i])
        }
    });

    test('Vec2 Callback', () =>
    {
        const handler = jest.fn();
        
        const match = new Vec2(25, 40);
        const callback = new Vec2Callback((vector2) =>
        {
            handler();
            const result = Vec2Clone(vector2);
            expect(result).toEqual(match);
        });
        // No emit event
        callback.set(match.x, match.y);

        // To String
        expect(callback.toString()).toEqual(match.toString());
        // To Array
        expect(callback.toArray()).toEqual(match.toArray());
        
        // set from array
        const callback_from_array = new Vec2Callback((vector2) =>
        {
            handler();
            const result = Vec2Clone(vector2);
            expect(result).toEqual(match);
        }, 10, 20);
        callback_from_array.fromArray(match.toArray());

        // Set x and y
        const set_x = new Vec2Callback((vector2) =>
        {
            handler();
            const result = Vec2Clone(vector2);
            expect(result.x).toEqual(match.x);
        }, 10, 20);
        // branch x == old x
        set_x.x = 10;
        set_x.x = match.x;

        const set_y = new Vec2Callback((vector2) =>
        {
            handler();
            const result = Vec2Clone(vector2);
            expect(result.y).toEqual(match.y);
        }, 10, 20);
        // branch y == old y
        set_y.y = 20;
        set_y.y = match.y;

        // Whe have emitted 4 (set, set x, set y, fromArray) events and used  handlers because we should onlyreceive 4 calls
        expect(handler).toBeCalledTimes(4);

        // Destroy: 
        const handler_destroy = jest.fn();
        const callback_destroy = new Vec2Callback(handler_destroy, 10, 20);
        callback_destroy.destroy();
        callback_destroy.set();
        // We don't should receive calls
        expect(handler_destroy).not.toBeCalled();
    });


});
