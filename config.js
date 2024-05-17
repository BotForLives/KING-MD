const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("27767494368")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://KING-MDBot:naveeddogar@cluster0.jkvj760.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'avenyamakazi8gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'south africa'
global.gurl = 'https://instagram.com/naveeddogar_' // add your username
global.sudo = process.env.SUDO || '27767494368'
global.devs = '27767494368';
global.website = 'https://github.com/naveeddogar/KING-MD' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/a6b9bbde7feaa92c69c7b.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'AVE-𝙈𝘿' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '•Ave•' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0h5dVRCUU9PR1Y0aUQzNGFZaVl0d3JHL3c3Z1Z6VitDWjdKNXNkaXIzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUTRYQ2NJVmd0QXo5SHB2QzF1SG0yUzlsQ1krMDhzam92T3lKcTA4WWVVQT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHT24xR0cxd1ZFcm5mdkt4UndjZmpPUEk1d0NKRlZXWmdEN0VLcm4zTDBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5aXpvN1QyRW1vS25sZ3NXTXJuUTdMMHkvWFFHRnJNOFlLVUE0c3RVbDBjPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdFR3A0Qi9LOWJZejBwcGZEdzFFUVdEc0EzWlh1cG1qOEpLbTY4NVFibVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpQM2lrbkt3cmREdTZRaVl6TXpmMEpsa3Q3UjJBOTJYQ04xd3VZb1FqVWc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2ZUJXNC94dHpIVkN2N0t5d0d0RkdyZ3g4QlVycnkvUy9Cc01TcHRTVk1KdTgrbThoWm9mY2M0OUxZTFlISlhHTzNrTUpwbjN5WlNEaWZRYm9aYXREUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIzOCwiYWR2U2VjcmV0S2V5IjoidnR0RCs3RWZqSWtuMm8rNUdTU3N0UXdHUms5d084R3RzVFBmK0hXYm53ST0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicUtsTGhPNTZRN3kwdmstZEJTY3JpUSIsInBob25lSWQiOiJhOTkwNTdmMC04MjhlLTQ0ZTEtOTE3Yy0xMWJmYjU1N2ExYmIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGVwVktpWkt6clo0bzJ1dGZramtoVndMNkxjPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvRENGQUljTDMwZHFRbmI5c3V5ODVXM09aS2s9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNPS2QxSWNIRU56Q25ySUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIycWMwb1pudWRKcHhmNlRLRjYwOU9xeXJHcnc0Y3d6MlRRRFNZQnN5TGdrPSIsImFjY291bnRTaWduYXR1cmUiOiJ1ZTdLUzZoc3lYQjRQQXltYlRxckpXZnZzRzVXNVJ2NzlUWU0wQlVRSWhhQlVDcjc4dTdIK3hnNSsrcmtBTkRnUENuQlFOZkpXVzErWGRNYlMrb3ZDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoic0laQk5Zckp2VXZjMnVWUnRsNFB6dTNUYjJ5dllnemlNWXVQTUM4NTduU010b05YRmJIN3ZIOEMzYVozZWtPWndSbkFGenNsOWxwYTlnR0QwMGp0QkE9PSJ9LCJtZSI6eyJpZCI6IjI3NjY1NTcyODg2OjE3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkF2ZSBCb3QifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc2NjU1NzI4ODY6MTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZHFuTktHWjduU2FjWCtreWhldFBUcXNxeHE4T0hNTTlrMEEwbUFiTWk0SiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNTk3MDQwMH0=' : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'avee' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? '' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Im alive and well' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.０.１' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR-2.0',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
