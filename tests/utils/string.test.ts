import { UppercaseFirst } from '../../../phaser-genesis/src/utils/string';

describe("String - tests", () =>
{
    test('UppercaseFirst', () =>
    {
        const match = "Hello";
        const result = UppercaseFirst("hello");
        expect(result).toEqual(match);
    });

    // TODO: Make library
    test('Test UUID', () =>
    {
        const match = /([0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[8-9a-b][0-9A-F]{3}-[0-9A-F]{12}){1}/i;
        const result = "ebf4c854-fc57-4d35-a7d8-3e454e8fdc99";
        expect(result).toMatch(match);
    });

});