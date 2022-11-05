let fs = require('fs')

let handler = async (m, { conn, text }) => {

    m.reply('Tunggu Sebentar, Proses Getting sound')

    let sesi = await fs.readFileSync('./sound/sound1.mp3')

    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'audio/mpeg', fileName: 'sound1.mp3' }, { quoted: m })

}

handler.help = ['sound1']

handler.tags = ['sound']

handler.command = /^(sound1)$/i
//by Ndaa:3
module.exports = handler