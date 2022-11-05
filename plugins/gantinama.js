let handler = async (m, {conn, usedPrefix:p, text}) => {
  let user = global.db.data.users[m.sender] 
  user.name = text.trim()
  let txt = `Berhasil Mengubah Nama Menjadi *${text}*`
  if (!text) throw `penggunaan salah! contoh ${p}gantinama <nama>`
  
  conn.reply(m.chat, txt, m)
}
handler.tags = ['main']
handler.help = ['gantinama <nama>']
handler.command = /^(cangename|gantinama)$/i
  
module.exports = handler