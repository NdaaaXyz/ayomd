let axios = require("axios");

let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan parameter, Contoh *#katajago cantik*', m)

  await m.reply(wait)

	axios.get(`https://ndaabitz-xyz.herokuapp.com/api/katajago?text=cantik&apikey=ndaabotz`).then ((res) => {

	 	let hasil = `${res.data.result.result.list}`

    conn.reply(m.chat, hasil, fkontak)

	})

}

handler.help = ['katajago <kata>']

handler.tags = ['quotes']

handler.command = /^katajago$/i

module.exports = handler