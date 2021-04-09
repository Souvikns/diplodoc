const path = require('path');
const {reader} = require('../../utils/reader')

test("checking if reader returns the correct fileName", () => {
    let mkFiles = reader(path.resolve(__dirname), /\.md?/);
    expect(mkFiles).toEqual(['index.md']);
})