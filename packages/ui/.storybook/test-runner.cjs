const { getStoryContext } = require("@storybook/test-runner");
const { injectAxe, checkA11y } = require("axe-playwright");
const { toMatchImageSnapshot } = require("jest-image-snapshot");

const customSnapshotsDir = `${process.cwd()}/__snapshots__`;

module.exports = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  async preRender(page, context) {
    await injectAxe(page);
  },
  async postRender(page, context) {
    const storyContext = await getStoryContext(page, context);

    if (!storyContext.parameters?.a11y?.disable) {
      await checkA11y(page, "#storybook-root", {
        detailedReport: false,
        detailedReportOptions: {
          html: false,
        },
        axeOptions: storyContext.parameters?.a11y?.options,
      });

      if (!storyContext.parameters?.snapshot?.disable) {
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot({
          customSnapshotsDir,
          customSnapshotIdentifier: context.id,
          comparisonMethod: "ssim",
        });
      }
    }
  },
};
