let handler = async (m, { conn, command }) => {
let walla = conn.pickRandom(require('../api/wallanime.json'))
  conn.sendButtonImg(m.chat, walla, 'nih', wm, 'Next', `${command}`, m)
}
handler.help = ['wallanime']
handler.tags = ['wallpaper']
handler.command = /^(wallanime|wallpaperanime)$/i
//By Ndaa?
module.exports = handler
