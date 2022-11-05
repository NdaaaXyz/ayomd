let handler = async (m, { conn, command }) => {

let emojih = conn.pickRandom(require('../api/emoji.json'))

  conn.sendButton(m.chat, emojih, wm, 'Next', `${command}`, m)

}

handler.help = ['randomemoji']

handler.tags = ['fun', 'new']

handler.command = /^(randomemoji)$/i

//By Ndaa?

module.exports = handler