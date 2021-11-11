const saveItemV2 = async (item: number): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    if (item == 0) {
      return resolve();
    }
    return reject("errorV2");
  });
};

import { saveUserPreference, userPreference } from "./storage";
async function main() {
  // const key = "some";
  // const preference: preference = {
  //   enable: false,
  //   forbiddenWords: ["a"],
  //   forbiddenChannels: ["b"],
  // };
  // await saveItem(key, preference)
  //   .then((v) => {
  //     console.log(v, "ok");
  //   })
  //   .catch((e) => {
  //     console.log("error");
  //     console.log(e);
  //   });

  await saveItemV2(1)
    .then((v) => {
      console.log(v, "ok");
    })
    .catch((e) => {
      console.log("error");
      console.log(e);
    });
}
// main();
