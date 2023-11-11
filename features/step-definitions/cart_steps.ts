import { Given, When, Then } from "@wdio/cucumber-framework";

When(/^User Selects Product$/, () => {
  return true;
});

When(/^User Selects <size>, <color>, <qty>$/, () => {
  return true;
});

When(/^User Adds Items to Cart$/, () => {
  return true;
});

Then(/^Message displays saying <message>$/, () => {
  return true;
});

Then(/^Cart Number Box Appears$/, () => {
  return true;
});
