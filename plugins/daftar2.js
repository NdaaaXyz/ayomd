const { createHash } = require('crypto')
let Reg = .*/\|
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Kamu sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SERIAL NUMBER>`
  if (!Reg.test(text)) throw `contoh:\n*${usedPrefix + command} manusia.16*`
  let [_, email, splitter, name] = text.match(Reg)
  if (!email) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!name) throw 'Umur tidak boleh kosong (Angka)'
  user.name = name.trim()
  user.email = email
  user.regTime = + new Date
  user.registered = true
  let prefix = usedPrefix
  let sn = createHash('md5').update(m.sender).digest('hex')
  conn.sendButton(m.chat, `
┌─「 *daftar berhasil* 」
├ nama: ${name}
├ email: ${email}
└────  

*SN* (Serial Number) di kirim di chat pribadi dan digunakan untuk daftar ulang, jika lupa *SN* silahkan ketik *${usedPrefix}sn* untuk mengecek *SN* kamu! 
`.trim(), wm, `Profile`,`${prefix}pp`, m) 
conn.sendMessage(m.sender, {text: `*SN:* ${sn}`}, m)
}
handler.help = ['daftar', 'register'].map(v => v + ' <name>.<age>')
handler.tags = ['xp']

handler.command = /^(daftar2)$/i

module.exports = handler