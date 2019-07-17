const fs = require("fs").promises

function parse(data) {
  const lines = data.split("M\n")
  lines.pop()
  const result = {}
  lines.forEach(line => {
    const key = line.split(" ")[0].replace(".", " ")
    const value = line.split(" ")[1]
    result[key] = value
  })
  return result
}

async function main() {
  const data = await fs.readFile("./size.txt", "utf8")
  const json = parse(data)
  const jsonString = JSON.stringify(json, null, 4)
  await fs.writeFile("../app/src/size.json", jsonString, "utf8")
  console.log("Done!")
}

main()
