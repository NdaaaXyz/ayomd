let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let json = await (await fetch('https://random-picture-wheat.vercel.app/api/?json')).json()
  await conn.sendButtonImg(m.chat, json.url, sukses, wm, 'next', '.randomimg', m)
}
handler.help = ['randomimg']
handler.tags = ['internet']
handler.command = /^(randomimg)$/i

module.exports = handler
