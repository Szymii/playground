const { getStoryContext } = require("@storybook/test-runner");
const { injectAxe, checkA11y } = require("axe-playwright");

module.exports = {
  async preRender(page, context) {
    await injectAxe(page);
  },
  async postRender(page, context) {
    const storyContext = await getStoryContext(page, context);

    if (storyContext.parameters?.a11y?.disable) {
      return;
    }

    await checkA11y(page, "#storybook-root", {
      detailedReport: false,
      detailedReportOptions: {
        html: false,
      },
      axeOptions: storyContext.parameters?.a11y?.options,
    });
  },
};
