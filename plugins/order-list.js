let handler = async(m, { conn, usedPrefix, command, args, text, }) => {

    let ras = `Halo Kak @${m.sender.split('@')[0]}`

    let sel = `Berikut Ini Adalah List Harga Sewa NdaaBotz`

    let rs = `List Harga`

const sections = [ {

	title: `Silahkan Pilih List Type Store Dibawah!`,

	rows: [

	{title: `Sewa Bot 1 Hari`, rowId: `.satuh`, description: `Sewa Bot Dengan Durasi 1 Hari`},

        {title: `Sewa Bot 1 Minggu`, rowId: `.satumgg`, description: `Sewa Bot Dengan Durasi 1 Minggu`},

	{title: `Sewa Bot 1 Bulan`, rowId: `.satubln`, description: `Sewa Bot Dengan Durasi 1 Bulan`},

	{title: `Sewa Bot Permanent`, rowId: `.orderpermanent`, description: `Sewa Bot Dengan Durasi Permanent`},

               ]

    } ]

const listMessage = {

  text: sel,

  mentions: [m.sender],

  footer: wm,

  title: ras,

  buttonText: rs,

  sections

}

    if(!args[1]) await conn.sendMessage(m.chat, listMessage, { quoted: m })
}
handler.help = ['sewabot']

handler.tags = ['main', 'new']

handler.command = /^(harga|sewa|sewabot)$/i

module.exports = handler