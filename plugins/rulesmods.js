let handler  = async (m, { conn, usedPrefix: _p }) => {

let mods = `

Rules For Mods

- all owner demote ke mods reason? kalo ad fitur eror ke spam

- fitur owner dah bisa di akses buat mods

- jangan asal bc jika ketahuan kamu akan di demote + remove + kick + banned ( ijin dulu )

- Ini adalah peringatan untuk semua orang yang memiliki role mods di bot ini, hanya karena anda memiliki role dan memiliki akses untuk ban,warn,deluser tidak berarti anda adalah staff atau moderator anda tidak bisa begitu saja ban,warn dan reset db user tanpa alasan dan bukti

- dan satu hal lagi selalu  gunakan warn kepada user sebelum menghukum mereka, saya selalu mengatakan ini.

`

conn.sendButton(m.chat, mods, 'read please', 'ℹ️ owner', '.owner', null, adReply)

}

handler.command = /^(rulesmods)$/i

module.exports = handler