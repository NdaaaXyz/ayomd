let axios = require("axios");

let handler = async(m, { conn, text }) => {

    //if (!text) return conn.reply(m.chat, 'Masukan parameter, Contoh *#circuit NdaaBot*', m)

  await m.reply(wait)

	axios.get(`https://ndaabitz-xyz.herokuapp.com/api/wallrandom?apikey=ndaabotz`).then ((res) => {

	 	let hasil = `~> *Author* : ${res.data.result.author}\n\nStatus : ${res.data.result.status}`

    conn.sendFile(m.chat, res.data.result.list.gambar, 'ml.jpeg', hasil, m)

	})

}

handler.help = ['wallrandom']

handler.tags = ['wallpaper']

handler.command = /^wallrandom$/i

module.exports = handler