import { Given, When, Then } from "@wdio/cucumber-framework";
import home_page from "../pageobjects/landing_page";

const homePage = new home_page();

Given(/^User is on Home Page$/, async () => {
  await homePage.open();
  console.log("Current URL:", await browser.getUrl());
});

When(/^User filters for {string}$/, async (category: string) => {
  homePage.filterByCategory(category);
});

Then(/^User sees <resultsbanner> for category$/, async (resultsbanner) => {
  let classNameAndText = await $(".page-title=Search results for: 'jackets'");
  await expect(classNameAndText).toHaveText("Search results for: 'jackets'");
});
