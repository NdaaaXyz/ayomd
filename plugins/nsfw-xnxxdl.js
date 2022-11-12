let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
        if (!text) throw m.reply(`Linknya ?`)
        let res = await fetch(`https://malesin.xyz/xnxxdl?url=${text}`)
        let json = await res.json()
        conn.sendFile(m.chat, json.result.files.low, '', '', m)
     }

handler.help = ['xnxxdl <url>']
handler.tags = ['premium']
handler.command = /^(xnxxdl)$/i
handler.premium = true
handler.register = false
handler.limit = false
module.exports = handler
