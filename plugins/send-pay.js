
let handler = async(m, { conn, text, usedPrefix }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan dikirim', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    
    let user = global.db.data.users[m.sender]

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `*「 R Pay Message 」*\n\nDari : wa.me/${korban}\nPesan : ${pesan}\n\n*${global.wm}*`

    conn.relayMessage(korban + '@s.whatsapp.net',  {
     requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 25000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `${spam1}`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})

    let logs = `[!] Berhasil mengirim pay wa ke nomor ${korban}`
    conn.reply(m.chat, logs, m)
}
handler.help = ['sendpay <nomor>']
handler.tags = ['sending']
handler.command = /^(sendpay|spay)$/i
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
