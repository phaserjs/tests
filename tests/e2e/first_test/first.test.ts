describe('Phaser 4 test', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:30001');
    });

    let pages = page;
    test('Test Phaser 4 examples', async () => {
        await expect(pages.title()).resolves.toMatch('');
        const image = await pages.screenshot({ fullPage: true });
        expect(image).toMatchImageSnapshot({ diffDirection: "vertical", comparisonMethod: "ssim", dumpDiffToConsole: false });
    });
})
