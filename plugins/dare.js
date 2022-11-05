let handler = async (m, { conn, command }) => {
let dare = conn.pickRandom(require('../api/dare.json'))
  conn.sendButton(m.chat, dare, wm, 'Next', `${command}`, m)
}
handler.help = ['dare']
handler.tags = ['truthordare']
handler.command = /^(dare)$/i
//By Ndaa?
module.exports = handler
