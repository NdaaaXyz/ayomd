let handler = async (m, { conn, command }) => {
let dark = conn.pickRandom(require('../api/darkjoke.json'))
  conn.sendButtonImg(m.chat, dark, 'Dark', wm, 'Next', `${command}`, m)
}
handler.help = ['darkjoke']
handler.tags = ['new', 'fun']
handler.command = /^(darkjoke)$/i
//By Ndaa?
module.exports = handler
