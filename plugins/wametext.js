

let handler = async(m, { conn, text, usedPrefix }) => {

let [number, pesan] = text.split `|`



    if (!number) return conn.reply(m.chat, 'Penggunaan salah! contoh ${usedPrefix}wame 6288239928939|woi', m)

    if (!text) return conn.reply(m.chat, 'Penggunaan salah! contoh ${usedPrefix}wame 6288239928939|woi', m)

    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)

    

   conn.reply(m.chat, `wa.me/${nomor}?text=${pesan}`

}

handler.help = ['wametext <nomor>|<pesan>']

handler.tags = ['main']

handler.command = /^(wametext)$/i

handler.rowner = false

handler.limit = false

handler.premium = false

handler.group = false

handler.private = false



handler.admin = false

handler.botAdmin = false



handler.fail = null

handler.limit = false



module.exports = handler

