import { tokenizeSeeds } from "..";

const tt1 = "common name input";
const tt2 = "ILoveYouGY";
const tt3 = "i love you 3-Thousands";
const tt4 = "The12 3quick5 b7rown fo2x% ju@@mps ovver_ t__he laazy-1---dog";
const tt5 = "$12!@$@*@)(_%_#(+_@#(PAJGE";

test("tokenize test 1", () => {
  expect(tokenizeSeeds(tt1)).toStrictEqual(["common", "name", "input"]);
});

test("tokenize test 2", () => {
  expect(tokenizeSeeds(tt2)).toStrictEqual(["i", "love", "you", "gy"]);
});

test("tokenize test 3", () => {
  expect(tokenizeSeeds(tt3)).toStrictEqual([
    "i",
    "love",
    "you",
    "3",
    "thousands",
  ]);
});

test("tokenize test 4", () => {
  expect(tokenizeSeeds(tt4)).toStrictEqual([
    "the",
    "12",
    "3",
    "quick",
    "5",
    "b",
    "7",
    "rown",
    "fo",
    "2",
    "x",
    "ju",
    "mps",
    "ovver",
    "t",
    "he",
    "laazy",
    "1",
    "dog",
  ]);
});

test("tokenize test 5", () => {
  expect(tokenizeSeeds(tt5)).toStrictEqual(["_", "12", "pajge"]);
});
