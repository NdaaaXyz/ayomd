let handler = async (m, { conn, command }) => {
let sadboy = conn.pickRandom(require('../api/sadboy.json'))
  conn.sendButton(m.chat, sadboy, wm, 'Next', `${command}`, m)
}
handler.help = ['sadboy']
handler.tags = ['quotes']
handler.command = /^(sadboy)$/i
//By Ndaa?
module.exports = handler
