let fs = require('fs')

let handler = async (m, { conn, text }) => {

    m.reply('Tunggu Sebentar, Proses Getting sound')

    let sesi = await fs.readFileSync('./sound/sound2.mp3')

    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'audio/mpeg', fileName: 'sound2.mp3' }, { quoted: m })

}

handler.help = ['sound2']

handler.tags = ['sound']

handler.command = /^(sound2)$/i
//by ndaa
module.exports = handler

