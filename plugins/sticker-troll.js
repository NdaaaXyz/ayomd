let fetch = require("node-fetch")

const { sticker } = require('../lib/sticker')

const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn }) => {

  let name = await conn.getName(m.sender)

  let res = await `https://telegra.ph/file/cdbedf2271ba74da9b173.png`

  let stiker = await sticker(null, res, global.packname, global.author)

  conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })

}

handler.customPrefix = /^(troll)$/i

handler.command = new RegExp

module.exports = handler

