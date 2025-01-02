const fs = require('fs')

global.owner = "6285929014979" 
global.status = false
global.welcome = true

global.prefa = ['','!','.',',','🐤','🗿']

global.packname = 'Delta'
global.author = 'Delta'

global.mess = {
ingroup: "It's not funny, this feature is only for groups💢",
admin: "not funny, only group admins use this feature💢",
owner: "Wow! You're not my owner🗣️",
premium: "you are not a premium user",
seller: "You don't have access as a seller yet",
wait: "please just wait ngab"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
