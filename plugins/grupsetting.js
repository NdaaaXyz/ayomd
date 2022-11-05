let handler = async(m, { conn, usedPrefix, command, args, text, }) => {

    let ras = `Halo Kak @${m.sender.split('@')[0]}`

    let sel = `[ All In One ] Dengan MengClick Saja Kamu Dapat Mengaktifkan Berbagai Settingan Di Group Loh!!!😅☝`

    let rs = `Klik`

const sections = [ {

	title: `Beta Testing`,

	rows: [

	{title: `Antilink`, rowId: `.on antilink`, description: `aktifkan fitur ini untuk meng kick otomatis jika member mengirim link group`},

        {title: `Welcome`, rowId: `.on welcome`, description: `Aktifkan fitur ini untuk menyapa member baru join!`},

	{title: `OPEN`, rowId: `.group buka`, description: `Aktifkan Fitur Ini Untuk meng izinkan agar semua member untuk mengirim pesan`},

	{title: `CLOSE`, rowId: `.group tutup`, description: `Aktifkan Fitur Ini Untuk meng izinkan agar hanya admin yang mengirim pesan`},
	{title: `Get Link`, rowId: `.link`, description: `Dapatkan Link Group Ini`},

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
handler.help = ['grupsetting']

handler.tags = ['group']

handler.command = /^(grup|allinonegroup|grupsetting)$/i

module.exports = handler