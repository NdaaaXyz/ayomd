let fetch = require("node-fetch")
let fs = require('fs')

const { sticker } = require('../lib/sticker')

const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn }) => {
let ahh = fs.readFileSync('./sticker/yntkts.webp');

  let stiker = await sticker(null, ahh, global.packname, global.author)

  conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })

}
handler.customPrefix = /^(yntkts|gatau)$/i
handler.command = new RegExp

module.exports = handler