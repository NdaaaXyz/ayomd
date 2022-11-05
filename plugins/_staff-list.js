let handler = async(m, { conn, usedPrefix, command, args, text, }) => {

    let ras = `Halo Kak @${m.sender.split('@')[0]}`

    let sel = `Berikut Ini Adalah List Staff & Owner NdaaBotz`

    let rs = `Click Here`

const sections = [ {

	title: `Silahkan Pilih List Type Store Dibawah!`,

	rows: [

	{title: `( Owner ) Ndaa`, rowId: `.owner`, description: `Official Owner Of NdaaBotz`},

        {title: `( Cs ) Vinz`, rowId: `.staffvinz`, description: `Official Staff Of NdaaBotz`},
        {title: `( Cs ) Hann`, rowId: `.staffhann`, description: `Official Staff Of NdaaBotz`},

	{title: `( Cs ) Dikz`, rowId: `.staffdikz`, description: `Official Staff Of NdaaBotz`},

	{title: `( Cs ) Zens`, rowId: `.staffzens`, description: `Official Staff Of NdaaBotz`},

	{title: `( Cs ) Dizz`, rowId: `.staffdizz`, description: `Official Staff Of NdaaBotz`},

	{title: `( Cs ) Rizky`, rowId: `.staffrizky`, description: `Official Staff Of NdaaBotz`},

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
handler.help = ['liststaff']

handler.tags = ['new', 'info']

handler.command = /^(liststaff|liststaff|listowner|ownerlist)$/i

module.exports = handler
