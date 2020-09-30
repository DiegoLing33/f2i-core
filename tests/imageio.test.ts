import F2I from "../src";
import Jimp = require("jimp");

/**
 * Text to image tests
 */
test("Testing text to image", async () => {

    // Create and save
    const testImage = await (await F2I.textToImage("I am the text")).save("tests/test2");

    // Read and compare
    const image = await Jimp.read("tests/test1.png");
    expect(testImage.bitmap.data).toEqual(image.bitmap.data);
});

/**
 * Image to text tests V1
 */
test("Testing image by object to text", async () => {
    const image = await Jimp.read("tests/test2.png");
    const text = await F2I.imageToText(image);
    expect(text).toEqual("I am the text");
});

/**
 * Image to text tests V2
 */
test("Testing image by path to text", async () => {
    const text = await F2I.imagePathToText("tests/test2");
    expect(text).toEqual("I am the text");
});
