let axios = require('axios');

let handler = async (m, { conn, args, usedPrefix, command }) => {

    if (!args[0]) throw `contoh:\n ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`

    let res = (await axios.get(API('males', '/tiktok2', { url: args[0] } ))).data;

    if (res.status != 200) throw res.message;

    if (!res) throw res.message;

    conn.sendButtonVid(m.chat, res.video, sukses, wm, 'menu', usedPrefix + 'menu', m)

}

handler.help = ['tiktok'].map(v => v + ' <url>')

handler.tags = ['downloader']

handler.command = /^(tiktok2)$/i

handler.limit = true

handler.group = true

module.exports = handler

