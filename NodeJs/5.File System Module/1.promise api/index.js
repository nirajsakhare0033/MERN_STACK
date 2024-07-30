import * as fs from 'fs/promises';
//creating directory / folder
/*
try {
  await fs.mkdir('D:\\Softtech\\nodejs\\courses');
  console.log("Folder Created... ")

} catch (error){
  console.log(error);
}
  */

//read the files
/*
try {
  const files = await fs.readdir("D:\\Softtech\\nodejs\\courses");
  for (const file of files) {
    console.log(file);
  }

} catch (error){
  console.log(error);
}

*/

//Remove Folder / Directory
//condition is this code is work empty directory
/*
try {
  await fs.rmdir('D:\\Softtech\\nodejs\\courses')
  console.log("done")
  
} catch (error) {
  console.log(error)
}
*/

//Create and Write Files
try {
  await fs.writeFile('README.md', "hello nodejs replace");
  console.log("done")
} catch (error) {
  console.log(error)
}

//read file
try {
  const data = await fs.readFile("README.md", "utf-8");
  console.log(data)
} catch (error) {
  console.log(error)
}