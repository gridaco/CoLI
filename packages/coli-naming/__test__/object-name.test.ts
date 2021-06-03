import { buildObjectName, CasedObjectName } from "..";

test("build object name 1", () => {
  expect(buildObjectName("i", "love", "you", "gy")).toStrictEqual(<
    CasedObjectName
  >{
    flat: "iloveyougy",
    snake: "i_love_you_gy",
    _snake: "_i_love_you_gy",
    camel: "iLoveYouGy",
    _camel: "_iLoveYouGy",
    pascal: "ILoveYouGy",
    _pascal: "_ILoveYouGy",
    kebab: "i-love-you-gy",
    upper: "ILOVEYOUGY",
    upper_snake: "I_LOVE_YOU_GY",
    _upper_snake: "_I_LOVE_YOU_GY",
  });
});

test("build object name 2", () => {
  expect(buildObjectName("_", "500", "startups")).toStrictEqual(<
    CasedObjectName
  >{
    _camel: "_500Startups",
    _pascal: "_500Startups",
    _snake: "_500_startups",
    _upper_snake: "_500_STARTUPS",
    camel: "_500Startups",
    flat: "_500startups",
    kebab: "500-startups",
    pascal: "_500Startups",
    snake: "_500_startups",
    upper: "_500STARTUPS",
    upper_snake: "_500_STARTUPS",
  });
});
