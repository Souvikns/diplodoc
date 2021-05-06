const Reader = require("../reader");
const path = require("path");
const {MarkdownFile} = require('../models');

describe("Reader object ", () => {
  test("should ", () => {
    let st = "index.md";
    expect(/\.md$/.test(st)).toBeTruthy();
  });

  test("should return paths of md files", async () => {
    try {
      let files = await Reader(path.resolve(__dirname, "md")).mdFiles();
      expect(files.length === 1).toBeTruthy();
      expect(files[0] instanceof MarkdownFile).toBeTruthy();
    } catch (error) {
      console.log(error);
    }
  });

  test("should return png file", async () => {
    try {
      let files = await Reader(path.resolve(__dirname, "md")).staticFiles();
      expect(files.length === 1).toBeTruthy();
      expect(
          files.includes(
              "C:\\Users\\Souvi\\Documents\\Programs\\My_Projects\\diplodoc\\lib\\__tests__\\md\\index.png"))
          .toBeTruthy();
    } catch (error) {
      console.log(error);
    }
  });
});
