describe('Phaser 4 test', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:30001');
    });

    it('Test Phaser 4 examples', async () => {
        await expect(page.title()).resolves.toMatch('');
        const image = await page.screenshot({ fullPage: true });
        expect(image).toMatchImageSnapshot({diffDirection: "vertical", comparisonMethod: "ssim", dumpDiffToConsole: false});
    });
});