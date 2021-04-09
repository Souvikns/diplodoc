const path = require('path');
const { reader } = require('../../util')

test("checking if reader returns the correct fileName", () => {
    let mkFiles = reader(path.resolve(__dirname), /\.md?/);
    expect(mkFiles).toEqual(['index.md']);
})