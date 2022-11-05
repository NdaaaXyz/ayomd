let handler = async (m, { conn, command }) => {
let waifu2 = conn.pickRandom(require('../api/waifu.json'))
  conn.sendButtonImg(m.chat, waifu2, 'By NdaaBotz', wm, 'Next', `${command}`, m)
}
handler.help = ['waifu2']
handler.tags = ['new']
handler.command = /^(waifu2)$/i
//By Ndaa?
module.exports = handler