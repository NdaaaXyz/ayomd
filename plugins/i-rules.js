let handler  = async (m, { conn, usedPrefix: _p }) => {

let cap = `Rules For All 

• Toxic? Serah Dosa Tanggung Sendiri

• Di larang spam bot ketahuan? Banned

• Nomor +212 udah auto ke banned

• Jika bot tidak respon harap ulangi Jika tidak merespon untuk ke 3x nya berarti bot sedang offline/maintance

• Fitur Eror? Jangan Di spam ya kontol mending lu lapor ke owner

• Request fitur chat owner or /req

Thanks Untuk User Yang Bijak

 

-Ndaa`

conn.sendButtonDoc(m.chat, cap, wm, 'ℹ️ Menu', '.menu', null, adReply)

}

handler.tags = ['info']

handler.help = ['rules']

handler.command = /^(rules)$/i

module.exports = handler