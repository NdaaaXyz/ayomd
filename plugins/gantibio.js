let handler = async (m,{conn, usedPrefix:p, text}) => {
  let usr = global.db.data.users[m.sender]
  if (!text) throw `Penggunaan salah! contoh ${p}gantibio syg kamu`
  let txt = `berhasil merubah nama menjadi ${text}`
  
  usr.bio = text
  conn.reply(m.chat, txt, m)
}
handler.command = /^(gantibio)$/i

module.exports = handler
