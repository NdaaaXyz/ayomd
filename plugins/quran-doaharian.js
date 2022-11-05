let handler = async (m, { conn }) => {
  let json = conn.pickRandom(require(../api/doaharian.json)

conn.sendButton(m.chat, 'Nama: ${json.title}\n\nArabic: ${json.arabic}\n\nLatin: ${json.latin}\n\ntranslation: ${json.translation}', wm, 'next', '.doaharian', m)
}
handler.command = /^(doaharian)$/i

module.exports = handler
