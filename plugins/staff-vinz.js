const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n'
                    + 'FN:Vinz\n' // full name
                    + 'TEL;type=CELL;type=VOICE;waid=6285711537991:+62 857-1153-7991\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'vinz', contacts: [{ vcard }] } }, { quoted: m })
}
handler.command = /^(staffvinz)$/i

module.exports = handler
