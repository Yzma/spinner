
const animation  = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']
let delay = 100
for (let i of animation) {
  setTimeout(() => {
    process.stdout.write(`\r${i}   `)
  }, delay += 200)
}
