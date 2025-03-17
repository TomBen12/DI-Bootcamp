import fs from "fs/promises";

const readDirectory = async () => {
  try {
    const files = await fs.readdir(".");
    console.log(files);
  } catch (error) {
    console.log(error.message);
  }
};
readDirectory();
