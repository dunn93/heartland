import { Given, When, Then } from "@wdio/cucumber-framework";

import Page from "../pageobjects/page";

Given(/^User is on Home Page$/, async (Page) => {
  Page.open();
});

When(/^User filters for <category>$/, async (category) => {
  (await $("#input.search.input-text")).click;
  (await $("")).addValue;
});

Then(/^User sees <resultsbanner> for category$/, async (resultsbanner) => {
  let classNameAndText = await $(".page-title=Search results for: 'jackets'");
  await expect(classNameAndText).toHaveText("Search results for: 'jackets'");
});
