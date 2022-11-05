let handler  = async (m, { conn, usedPrefix: _p }) => {
let cap = `
Kenapa kak manggil owner
`
conn.sendButtonDoc(m.chat, `Kenapa Kak Manggil Owner?`, cap, 'ℹ️ Menu', '.menu', null, adReply)
}
handler.customPrefix = /^(ndaa|erland|er|erlanda|ndaaa|nda)$/i
handler.command = new RegExp

module.exports = handler