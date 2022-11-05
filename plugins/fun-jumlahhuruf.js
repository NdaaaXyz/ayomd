let axios = require("axios");

let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan parameter, Contoh *#jumlahhuruf NdaaBotz*', m)

  await m.reply(wait)

	axios.get(`https://ndaabitz-xyz.herokuapp.com/api/jumlahhuruf?text=${text}&apikey=ndaabotz`).then ((res) => {

	 	let hasil = `~> Hasil : ${res.data.result.result.list}`

    conn.reply(m.chat, hasil, fkontak)

	})

}

handler.help = ['jumlahhuruf']

handler.tags = ['fun']

handler.command = /^jumlahhuruf$/i

module.exports = handler