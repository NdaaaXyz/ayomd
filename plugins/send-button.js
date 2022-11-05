
let handler = async(m, { conn, text, usedPrefix }) => {
let [number, pesan, pesan1, pesan2] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan dikirim', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (!pesan1) return conn.reply(m.chat, 'Silahkan masukan button text nya', m)
    if (!pesan2) return conn.reply(m.chat, 'Silahkan masukan command nya!', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    
    let user = global.db.data.users[m.sender]

    let korban = `${number}`
    let buttontext = `${pesan1}`
    let buttoncmd = `${pesan2}`
    var nomor = m.sender
    let yy = `*「 Button Message 」*\n\nDari : wa.me/${korban}\nPesan : ${pesan}\n\n*${global.wm}*`

    conn.sendButton(korban + '@s.whatsapp.net', yy, wm, buttontext, buttoncmd, m)

    let logs = `[!] Berhasil mengirim button message wa ke nomor ${korban}`
    conn.reply(m.chat, logs, m)
}
handler.help = ['sendButton <nomor>|<pesan>|nama button|command button']
handler.tags = ['sending']
handler.command = /^(sendbutton|sbutton)$/i
handler.rowner = false
handler.limit = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
