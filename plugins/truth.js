let handler = async (m, { conn, command }) => {
let truth = conn.pickRandom(require('../api/truth.json'))
  conn.sendButton(m.chat, truth, wm, 'Next', `${command}`, m)
}
handler.help = ['truth']
handler.tags = ['truthordare']
handler.command = /^(truth)$/i
//By Ndaa?
module.exports = handler
