let handler = async (m, { conn, usedPrefix }) => { 

      conn.relayMessage(m.chat,  {

    requestPaymentMessage: {

      currencyCodeIso4217: 'INR',

      amount1000: 15000000,

      requestFrom: m.sender,

      noteMessage: {

      extendedTextMessage: {

      text: `Dari : @${m.sender.split('@')[0]}

Jenis Item : Sewa Bot 1 bulan

Harga : 15000

Via? : Dana/Gopay/Growtopia/Qris      

Silahkan ikuti link tautan berikut ini dan chat owner untuk melakukan pembayaran : wa.me/6288239928939?text=buy+bot+1+bulan+bang`,

      contextInfo: {

      externalAdReply: {

      showAdAttribution: true

      }}}}}}, {})

}

handler.command = /^satubln$/i

module.exports = handler