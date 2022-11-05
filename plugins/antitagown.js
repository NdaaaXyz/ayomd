let fetch = require("node-fetch")

const { sticker } = require('../lib/sticker')

const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn }) => {

  let name = await conn.getName(m.sender)

  let res = await `https://telegra.ph/file/2ebbdae3d2e7ff9be4c89.png`

  let stiker = await sticker(null, res, global.packname, global.author)

  conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })

}

handler.customPrefix = /@6288239928939 |@6288239928939/i

handler.command = new RegExp

module.exports = handler

