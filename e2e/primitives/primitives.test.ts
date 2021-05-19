import { MatchImageSnapshotOptions, toMatchImageSnapshot } from "jest-image-snapshot";
import { Page } from "puppeteer";
expect.extend({ toMatchImageSnapshot });

describe('3D', () => {
    let pages: Page;

    beforeAll(async () => {
        pages = await browser.newPage();
        await pages.setViewport({
            width: 800,
            height: 600,
            deviceScaleFactor: 1,
        });
    });

    test('Primitives', async () => {
        await pages.goto('http://localhost:30001/view.html?f=3d/primitives.js', { "waitUntil": "load", "timeout": 0 });

        await pages.waitForSelector('canvas', { timeout: 4000 });

        const image = await pages.screenshot();

        const options: MatchImageSnapshotOptions = {
            customSnapshotIdentifier: "test-primitives",
            failureThreshold: 3000,
            comparisonMethod: 'ssim',
            failureThresholdType: "pixel"
        };

        expect(image).toMatchImageSnapshot(options);

    }, 30000);

    test('edit cube', async () => {
        await pages.goto('http://localhost:30001/view.html?f=3d/edit cube.js', { "waitUntil": "load", "timeout": 0 });

        await pages.waitForSelector('canvas', { timeout: 4000 });

        const image = await pages.screenshot();
        const options: MatchImageSnapshotOptions = {
            customSnapshotIdentifier: "test-edit-cube",
            failureThreshold: 3000,
            comparisonMethod: 'ssim',
            failureThresholdType: "pixel"
        };
        expect(image).toMatchImageSnapshot(options);

    }, 30000);

    test('rotating cube', async () => {
        await pages.goto('http://localhost:30001/view.html?f=3d/rotating cube.js', { "waitUntil": "load", "timeout": 0 });

        await pages.waitForSelector('canvas', { timeout: 4000 });

        await pages.waitForTimeout(1000);

        const image = await pages.screenshot();
        const options: MatchImageSnapshotOptions = {
            customSnapshotIdentifier: "test-rotating-cube",
            failureThreshold: 0.2,
            failureThresholdType: "percent",
            comparisonMethod: 'ssim'
        };
        expect(image).toMatchImageSnapshot(options);

    }, 30000);

})
