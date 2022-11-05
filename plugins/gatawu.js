;let fetch = require("node-fetch")

const { sticker } = require('../lib/sticker')

const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn }) => {

  let res = await `https://telegra.ph/file/82322fc00691d044c53d4.jpg`

  let stiker = await sticker(null, res, global.packname, global.author)

  conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })

}

handler.customPrefix = /^(gatau|yntkts|gtw)$/i

handler.command = new RegExp

module.exports = handler
