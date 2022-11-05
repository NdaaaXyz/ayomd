let handler = async (m, { conn }) => {		

 conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/asupan?apikey=YogGanz', 'asupan.mp4', 'Nih', m)

}

handler.help = ['randomasupan']

handler.tags = ['new']



handler.command = /^(randomasupan)$/i

handler.premium = true

handler.register = true

handler.limit = false

module.exports = handler