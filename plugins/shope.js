let fetch = require('node-fetch')
let handler = async (m, {conn, text}) => {
if (!text) throw `Cari apa?`
let res = await fetch('https://leyscoders-api.herokuapp.com/api/shopee?q=${text}&apikey=MIMINGANZ')
let bang = await res.json()
let sat = bang.result
await conn.reply(m.chat, `Nama : ${sat.judul}\nHarga : ${sat.harga}\nMerk : ${sat.merk}\nStock : ${sat.stock}\nLike : ${sat.like}\nTerjual : ${sat.terjual}`, fkontak)
}
handler.command = /^(sope)$/i

module.exports = handler
