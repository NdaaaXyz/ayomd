let handler = async (m, { conn, usedPrefix }) => { 
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
      conn.relayMessage(m.chat,  {

    requestPaymentMessage: {

      currencyCodeIso4217: 'INR',

      amount1000: 25000000,

      requestFrom: m.sender,

      noteMessage: {

      extendedTextMessage: {

      text: `Dari : @${m.sender.split('@')[0]}
 Name : *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*\n

Jenis Item : Sewa Bot permanent

Harga : 25000

Via? : Dana/Gopay/Growtopia/Qris      

Silahkan ikuti link tautan berikut ini dan chat owner untuk melakukan pembayaran : wa.me/6288239928939?text=buy+bot+permanent+bang`,

      contextInfo: {

      externalAdReply: {

      showAdAttribution: true

      }}}}}}, {})

}

handler.command = /^orderpermanent$/i

module.exports = handler