let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://ndaabitz-xyz.herokuapp.com/api/wallpubg?apikey=ndaabotz')
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'istri gweh', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['waifu3']
handler.tags = ['new']
handler.command = /^(waifu3)$/i

handler.limit = true

module.exports = handler