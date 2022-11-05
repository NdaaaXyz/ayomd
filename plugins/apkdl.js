let fetch = require("node-fetch")
let handler = async(m, { conn, usedPrefix, command, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Command nya', m)

let f = await fetch(`https://nzcha-apii.herokuapp.com/apk-search?q=${text}`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
Nama App : ${v.name}
Link : ${v.url}
Download : ${v.dl_url}
Desc : ${v.desc}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButtonImg(m.chat, v.thumb, teks, wm, 'Search!', `${usedPrefix + command}`m)

}
handler.help = ['rexdl'].map(v => v + ' <apk>')
handler.tags = ['tools']
handler.command = /^(apkdl)$/i

module.exports = handler