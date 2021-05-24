import { UppercaseFirst } from '../../../phaser-genesis/src/utils/string';

describe("String - tests", () =>
{
    test('UppercaseFirst', () =>
    {
        const match = "Hello";
        const result = UppercaseFirst("hello");
        expect(result).toEqual(match);
    })
});