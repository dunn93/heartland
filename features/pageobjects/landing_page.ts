import { browser } from "@wdio/globals";

export default class home_page {
  public async open() {
    await browser.url("https://magento.softwaretestingboard.com");
    (await browser.getUrl()) === "https://magento.softwaretestingboard.com",
      { timeout: 5000, timeoutMsg: "Page didn't load within 5 seconds" };
  }

  public async filterByCategory(category: string) {
    (await $("#input.search.input-text")).click;
    (await $(category)).addValue;
  }

  // public async search(query: string) {
  //   await browser.setValue(this.sear)
  // }
}
