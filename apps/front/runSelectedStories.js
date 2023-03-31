import { exec } from "child_process";

const tests = [
  "apps/front/src/__stories__/ChangeLog/ChangeLog.stories.tsx",
  "apps/front/src/__stories__/ChildrenAsFunction/ChildrenAsFunction.stories.tsx",
];

exec(`test-storybook ${tests.join(" ")}`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err}`);
    return 1;
  }

  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
