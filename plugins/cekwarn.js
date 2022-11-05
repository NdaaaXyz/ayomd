let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu = `Kamu Memiliki Total Warn ${user.warn}`
    conn.sendButton(m.chat, anu, wm, 'Profile', '.profil', m)
}
handler.help = ['Cekwarn @user']

handler.tags = ['group']

handler.command = /^cekwarn$/i

handler.group = true

handler.botAdmin = false

module.exports = handler

