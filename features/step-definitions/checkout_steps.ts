import { Given, When, Then } from "@wdio/cucumber-framework";

Given(/^User is on Cart Page$/, () => {
  return true;
});

When(/^User Clicks Proceed to Checkout$/, () => {
  return true;
});

When(
  /^User enters <email>, <first name>, <last name>, <address>, <city>, <state>, <zip>, <country>, <phone>$/,
  () => {
    return true;
  }
);

When(/^User selects continue to payment$/, () => {
  return true;
});

When(/^User selects place order$/, () => {
  return true;
});

Then(/^Message displays saying <message>$/, () => {
  return true;
});
