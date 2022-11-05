let fs = require('fs')
let handler = async (m, { conn, text }) => {
    m.reply('Jangan Jual & Jangan Hapus Tqto Ya')
    let sesi = await fs.readFileSync('./sc/file')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'sc.zip' }, { quoted: m })
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

handler.owner = false

module.exports = handler