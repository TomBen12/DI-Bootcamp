import fs from "fs/promises";

const copyFile = async () => {
  try {
    const data = await fs.readFile("source.txt", "utf-8");
    await fs.writeFile("destination.txt", data);
  } catch (error) {
    console.log(error.message);
  }
};
copyFile();
