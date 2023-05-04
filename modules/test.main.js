import { updateValueTable } from "./main.js";
updateValueTable();
test("update value table with a event", () => {
  const valueTable = document.getElementsByClassName("valueTable")[0];
  expect(valueTable.textContent).toBe("0");
});
