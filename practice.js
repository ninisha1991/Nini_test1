import { Selector } from "testcafe";

fixture`Example page`.page`https://devexpress.github.io/testcafe/example/`;

test("My test", async t => {
  // const macOSRadioButton = Selector(‘.column.col-2’).find(‘label’).child(el => el.value === ‘MacOS’);
  const triedTestCafe = Selector("#tried-test-cafe");

  await t
    .click(triedTestCafe)
    .expect(triedTestCafe.checked)
    .ok()
    .wait(2000);
});
