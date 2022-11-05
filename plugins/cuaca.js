const axios = require('axios')




let handler = async (m, { conn, args  , usedPrefix, command })=>{


if(!args[0]) throw " please provide place or location name"

    try{

        const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
        const res = await response

        const name = res.data.name
        const Country = res.data.sys.country
        const Weather= res.data.weather[0].description
        const Temperature = res.data.main.temp + '掳C'
        const Minimum_Temperature= res.data.main.temp_min + '掳C'
        const Maximum_Temperature= res.data.main.temp_max + '掳C'
        const Humidity= res.data.main.humidity + '%'
        const Wind= res.data.wind.speed + 'km/h'


        conn.reply(m.chat,`
        馃尭 Place: ${name}\n馃挳 Country: ${Country}\n馃寛 Weather: ${Weather}\n馃帇 Temperature: ${Temperature}\n馃挔 Minimum Temperature: ${Minimum_Temperature}\n馃摏 Maximum Temperature: ${Maximum_Temperature}\n馃挦 Humidity: ${Humidity}\n馃帎 Wind: ${Wind}
        `.trim(),m)
    }catch(e){
throw 'location not found' 
console.log(e)

    }




}

handler.help = ['infocuaca <city>']
handler.tags = ['info']
handler.command = /^infocuaca|weather$/i
handler.limit = true

module.exports = handler
