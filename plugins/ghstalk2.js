let fetch = require('node-fefetch
let handler = async (m, {conn, text}) => {
  if (!text) throw `Nama Gh Nya mana Kontol?`
  let json = await (await fetch('https://api.zacros.my.id/info/ghstalk?username=${text}')).json
  
  await conn.sendButtonImg(m.chat, json.result.avatar, 'Name: ${json.result.name}', wm, 'menu', '.menu', m)
}
handler.command = /^(gh)$/i

module.exports = handler
