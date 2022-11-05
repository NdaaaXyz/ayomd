let fs = require('fs')

let handler = async (m, { conn, text }) => {

    m.reply('Tunggu Sebentar, Proses Getting sound')

    let sesi = await fs.readFileSync('./sound/sound3.mp3')

    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'audio/mpeg', fileName: 'sound3.mp3' }, { quoted: m })

}

handler.help = ['sound3']

handler.tags = ['sound']

handler.command = /^(sound3)$/i

//by Ndaa:3

module.exports = handler

