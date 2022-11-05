let fetch = require('node-fetch')

let handler = async (m, { conn }) => {

  

let res = await fetch('https://leyscoders-api.herokuapp.com/api/cerita-horor?apikey=MIMINGANZ')

    let json = await res.json()

    

    await m.reply(wait)

await conn.sendButton(m.chat, `Judul: ${json.result.title}

Title: ${json.result.title}

Cerita: ${json.result.desc}`, wm, 'Again', '.ceritahoror', fkontak)

 //   await conn.sendButtonImg(m.chat, json.result.thumbnail, txt, wm, `Again`, `.ceritahoror`, m)

}

handler.help = ['ceritahoror']

handler.tags = ['internet']

handler.command = /^ceritahoror$/i

module.exports = handler