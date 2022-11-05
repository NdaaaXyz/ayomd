const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n'
                    + 'FN:Hann\n' // full name
                    + 'TEL;type=CELL;type=VOICE;waid=6288804285774:+62 888-0428-5774\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Hann', contacts: [{ vcard }] } }, { quoted: m })
}
handler.command = /^(staffhann)$/i

module.exports = handler
