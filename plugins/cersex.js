let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan parameter, Contoh *#circuit NdaaBot*', m)

  await m.reply('Sedang di proses kak:b')
	axios.get(`https://web-production-7b1f.up.railway.app/api/music/joox?query=${text}&apikey=APIKEY`).then ((res) => {
	 	let hasil = `~> *Judul Lagu* : ${res.data.result.lagu}\n\nPenyanyi : ${res.data.result.penyanyi}`

    conn.sendFile(m.chat, res.data.result.img, 'carsex.jpeg', hasil, m)
	})
}
handler.help = ['cersex']
handler.tags = ['internet', 'fun', 'quotes']
handler.command = /^kntol$/i


module.exports = handler