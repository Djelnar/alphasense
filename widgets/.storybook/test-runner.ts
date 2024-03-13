import { TestRunnerConfig, waitForPageReady } from '@storybook/test-runner'
import { toMatchImageSnapshot } from 'jest-image-snapshot'

const customSnapshotsDir = `${process.cwd()}/__snapshots__`

const config: TestRunnerConfig = {
  setup() {
    expect.extend({ toMatchImageSnapshot })
  },
  async postVisit(page, context) {
    await waitForPageReady(page)

    const image = await page.screenshot()
    expect(image).toMatchImageSnapshot({
      failureThreshold: 0.03,
      failureThresholdType: 'percent',
      customSnapshotsDir,
      customSnapshotIdentifier: `${context.id}-${page.context().browser()!.browserType().name()}`,
    })
  },
  async preVisit(page) {
    page.setViewportSize({
      height: 500,
      width: 500,
    })
  },
}
export default config
