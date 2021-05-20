import
{
    Vec2Add,
    Vec2,
    Vec2Multiply,
    Vec2Subtract,
    Vec2AddScalar,
    Vec2Scale,
    Vec2ScaleAndAdd,
    Vec2SubtractScalar,
    Vec2DivideScalar,
    Vec2Divide,
    Vec2Normalize,
    Vec2Dot,
    Vec2Clone,
    Vec2Abs,
    Vec2Ceil,
    Vec2Floor,
    Vec2Fract,
    Vec2Negate,
    Vec2Inverse,
    Vec2One,
    Vec2Equals,
    Vec2Zero,
    Vec2Round,
    Vec2CopyFrom,
    Vec2Cross,
    Vec2Random,
    Vec2Center,
    GetVec2DistanceSquared,
    GetVec2Distance,
    GetVec2DistancePower,
    Vec2Transform,
    Vec2MultiplyByFloats,
    GetVec2ManhattanLength,
    GetVec2ManhattanDistance,
    GetVec2Length,
    Vec2Rotate,
    Vec2Min,
    Vec2Max,
    Vec2TransformMat2d,
    Vec2TransformMat4,
    Vec2SetLength,
    GetVec2LengthSquared,
    Vec2RoundToZero,
    Vec2PerpDot,
    GetVec2Angle,
    GetVec2AngleY,
    GetChebyshevDistance,
    Vec2Lerp,
    Vec2FromGridIndex,
    GetDistanceFromSegment,
    Vec2Bezier,
    Vec2Clamp
} from '../../../phaser-genesis/src/math/vec2';
import { Matrix2D } from '../../../phaser-genesis/src/math/mat2d';
import { Matrix4 } from '../../../phaser-genesis/src/math/mat4';

describe("Vec2 - tests", () =>
{
    test('New Vec2 {x: 3, y: 6}', () =>
    {
        const vec2 = new Vec2(3, 6);
        expect(vec2).toMatchObject({ x: 3, y: 6 });
    });


    test('New Vec2 to array {x: 3, y: 6} = [3, 6]', () =>
    {
        const vec2 = new Vec2(3, 6);
        const result = vec2.toArray();
        const match = [3, 6];
        expect(result).toEqual(match);
    });

    test('New Vec2 to string {x: 3, y: 6} = "{ x=3, y=6 }"', () =>
    {
        const vec2 = new Vec2(3, 6);
        const result = vec2.toString();
        const match = "{ x=3, y=6 }";
        expect(result).toEqual(match);
    });

    test('Vec2 from Array [3, 6] to {x: 3, y: 6}:Vec2', () =>
    {
        const fromArrayValue = [3, 6];

        const result = new Vec2();
        result.fromArray(fromArrayValue);

        const match = new Vec2(3, 6);
        expect(result).toEqual(match);
    });

    // Basic operations
    test('Sum two vec2 [3, 6] + [4, 7] = [7, 13]', () =>
    {
        const vec_a = new Vec2(3, 6);
        const vec_b = new Vec2(4, 7);

        const result = Vec2Add(vec_a, vec_b);
        const match = new Vec2(7, 13);
        expect(result).toMatchObject(match);
    });

    test('Multiply two vec2 [3, 6] * [4, 7] = [12, 42]', () =>
    {
        const vec_a = new Vec2(3, 6);
        const vec_b = new Vec2(4, 7);

        const result = Vec2Multiply(vec_a, vec_b);
        const match = new Vec2(12, 42);
        expect(result).toMatchObject(match);
    });

    test('Multiply by float [3, 6] * x:4, y:7 = [12, 42]', () =>
    {
        const vec_a = new Vec2(3, 6);

        const result = Vec2MultiplyByFloats(vec_a, 4, 7);
        const match = new Vec2(12, 42);
        expect(result).toMatchObject(match);
    });

    test('Subtrac two vec2 [3, 6] - [4, 7] = [-1, -1] and [6, 8] - [2, 6] = [4, 2]', () =>
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

    test('Divide two vec2 [20, 30] / [4, 2] = [5, 15]', () =>
    {
        const vec_a = new Vec2(20, 64);
        const vec_b = new Vec2(10, 4);

        const result = Vec2Divide(vec_a, vec_b);
        const match = new Vec2(2, 16);
        expect(result).toMatchObject(match);
    });

    // Scalar
    test('Scale vec2 [3, 6] * 4 = [12, 24]', () =>
    {
        const vec = new Vec2(3, 6);
        const scale = 4;

        const result = Vec2Scale(vec, scale);
        const match = new Vec2(12, 24);
        expect(result).toMatchObject(match);
    });

    test('add scalar [3, 6] + 4 = [7, 10]', () =>
    {
        const vec2 = new Vec2(3, 6);
        const addScalar = 4;

        const result = Vec2AddScalar(vec2, addScalar);
        const match = new Vec2(7, 10);
        expect(result).toMatchObject(match);
    });

    test('Scale and Add  [3, 6] + ([4, 7] * 4) = [19, 34]', () =>
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

    test('Divide scalar [20, 16] / 4 = [5, 4]', () =>
    {
        const vec = new Vec2(20, 16);
        const scalar = 4;

        const result = Vec2DivideScalar(vec, scalar);
        const match = new Vec2(5, 4);
        expect(result).toMatchObject(match);
    });

    test('Normalize vec2 [132, 250] = [0.4669123116297254, 0.8843036205108435]', () =>
    {
        const vec = new Vec2(132, 250);

        const result = Vec2Normalize(vec);
        // Result of A/||A||
        const match = new Vec2(0.4669123116297254, 0.8843036205108435);
        expect(result).toMatchObject(match);
    });

    test('Dot vec2 [125, 240] . [125, 240] = 8305', () =>
    {
        const vec_a = new Vec2(125, 240);
        const vec_b = new Vec2(5, 32);

        const result = Vec2Dot(vec_a, vec_b);
        // Result of A/||A||
        const match: number = 8305;
        expect(result).toEqual(match);
    });

    test('Cross vec2 [125, 240] * [125, 240] = []', () =>
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

        expect(result).toEqual(match)
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

    // test('Vec2 Distance power', () => {

    //     // TODO: Hacer esto
    //     const vec_a = new Vec2(20, 30);
    //     const vec_b = new Vec2(12, 24);

    //     const result = GetVec2DistancePower(vec_a, vec_b, 3);

    //     const match: number = 76;
    //     expect(result).toBeCloseTo(match)
    // });

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

        const matrix4X= new Matrix4().set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0); // Translate X
        const matrix4Y= new Matrix4().set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0); // Translate X

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

    // test('Vec2 Bezier', () =>
    // {

    //     const vec_a = new Vec2(50, 260);
    //     const vec_b = new Vec2(610, 25);
    //     const vec_c = new Vec2(320, 370);
    //     const vec_d = new Vec2(735, 550);
    //     const t:number = 2;


    //     const result = Vec2Bezier(vec_a, vec_b, vec_c, vec_d, t);
    //     const match = new Vec2(5650, -150);

    //     expect(result).toMatchObject(match);
    // });

    
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

});
