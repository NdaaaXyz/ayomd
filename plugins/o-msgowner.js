let handler = async (m, {conn, text}) => {
    let kon = `WOI MODS kamu mendapatkan pesan dari mods nih\n\nPesan : text`
    
    conn.reply(m.chat, 'succes mengirim pesan ke mods\nPesan : text', m)
    conn.reply(mods[0]+'@s.whatsapp.net', text, m)
    conn.reply(mods[2]+'@s.whatsapp.net', text, m)
    conn.reply(mods[3]+'@s.whatsapp.net', text, m)
    conn.reply(mods[1]+'@s.whatsapp.net', text, m)
    conn.reply(mods[4]+'@s.whatsapp.net', text, m)
    conn.reply(mods[5]+'@s.whatsapp.net', text, m)
    conn.reply(mods[6]+'@s.whatsapp.net', text, m)
    conn.reply(mods[7]+'@s.whatsapp.net', text, m)
    conn.reply(mods[8]+'@s.whatsapp.net', text, m)
    conn.reply(mods[9]+'@s.whatsapp.net', text, m)
    conn.reply(mods[10]+'@s.whatsapp.net', text, m)
    conn.reply(mods[11]+'@s.whatsapp.net', text, m)
    conn.reply(mods[12]+'@s.whatsapp.net', text, m)
    conn.reply(mods[13]+'@s.whatsapp.net', text, m)
    conn.reply(mods[14]+'@s.whatsapp.net', text, m)
    conn.reply(mods[15]+'@s.whatsapp.net', text, m)
    conn.reply(mods[16]+'@s.whatsapp.net', text, m)
}
handler.command = /^(msgmods)$/i

module.exports = handler