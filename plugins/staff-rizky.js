const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n'
                    + 'FN:Rizky\n' // full name
                    + 'TEL;type=CELL;type=VOICE;waid=6287718046436:+62 877-1804-6436\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'rizky', contacts: [{ vcard }] } }, { quoted: m })
}
handler.command = /^(staffrizky)$/i

module.exports = handler
