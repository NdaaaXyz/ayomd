let handler = async (m, { conn }) => {
  conn.send2Button(m.chat, `Silahkan pilih kak Truth/Dare`, wm, 'Truth', '/truth', 'Dare', '/dare', m)
}
handler.help = ['tod']
handler.tags = ['game']
handler.command = /^(tod)$/i

module.exports = handler
