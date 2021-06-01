import { RemoveAt, Reverse, UppercaseFirst } from '../../../phaser-genesis/src/utils/string';

describe("String - tests", () =>
{
    test('UppercaseFirst', () =>
    {
        const match = "Hello";
        const result = UppercaseFirst("hello");
        expect(result).toEqual(match);
    });

    test('Test Reverse', () =>
    {
        const match = "olleH";
        const result = Reverse("Hello");     
        expect(result).toEqual(match);
    });

    test('Test RemoveAt', () =>
    {
        const match = "Hello orld";
        const result = RemoveAt("Hello World", 7);
        expect(result).toEqual(match);
    });

});