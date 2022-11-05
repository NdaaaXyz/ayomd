let axios = require("axios");

let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan parameter, Contoh *#balikhuruf NdaaBotz*', m)

  await m.reply(wait)

	axios.get(`https://ndaabitz-xyz.herokuapp.com/api/balikhuruf?text=${text}&apikey=ndaabotz`).then ((res) => {

	 	let hasil = `~> Hasil : ${res.data.result.result.list}`

    conn.reply(m.chat, hasil, fkontak)

	})

}

handler.help = ['balikhuruf']

handler.tags = ['fun']

handler.command = /^balikhuruf$/i

module.exports = handler