const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

// EMOJİLİ MESAJ \\
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
        let vUser = msg.member.id;

        const embed = new Discord.RichEmbed()
     .setColor("#76ebed")
    .setAuthor(client.user.username,client.user.displayAvatarURL)
    .setDescription(`<@${vUser}>, Aleyküm Selam Hoşgeldin :)`,true)
    .setTimestamp()
    .setFooter(`KURALLARA UYMAYI UNUTMAYINIZ.!`)
    msg.channel.send(embed);
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Selam') {
        let vUser = msg.member.id;

        const embed = new Discord.RichEmbed()
     .setColor("#76ebed")
    .setAuthor(client.user.username,client.user.displayAvatarURL)
    .setDescription(`<@${vUser}>, Aleyküm Selam Hoşgeldin :)`,true)
    .setTimestamp()
    .setFooter(`KURALLARA UYMAYI UNUTMAYINIZ.!`)
    msg.channel.send(embed);
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Selamun Aleyküm') {
        let vUser = msg.member.id;

        const embed = new Discord.RichEmbed()
     .setColor("#76ebed")
    .setAuthor(client.user.username,client.user.displayAvatarURL)
    .setDescription(`<@${vUser}>, Aleyküm Selam Hoşgeldin :)`,true)
    .setTimestamp()
    .setFooter(`KURALLARA UYMAYI UNUTMAYINIZ.!`)
    msg.channel.send(embed);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Selamun Aleykum') {
        let vUser = msg.member.id;

        const embed = new Discord.RichEmbed()
     .setColor("#76ebed")
    .setAuthor(client.user.username,client.user.displayAvatarURL)
    .setDescription(`<@${vUser}>, Aleyküm Selam Hoşgeldin :)`,true)
    .setTimestamp()
    .setFooter(`KURALLARA UYMAYI UNUTMAYINIZ.!`)
    msg.channel.send(embed);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Selamün Aleyküm') {
        let vUser = msg.member.id;

        const embed = new Discord.RichEmbed()
     .setColor("#76ebed")
    .setAuthor(client.user.username,client.user.displayAvatarURL)
    .setDescription(`<@${vUser}>, Aleyküm Selam Hoşgeldin :)`,true)
    .setTimestamp()
    .setFooter(`KURALLARA UYMAYI UNUTMAYINIZ.!`)
    msg.channel.send(embed);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Selamün Aleykum') {
        let vUser = msg.member.id;

        const embed = new Discord.RichEmbed()
     .setColor("#76ebed")
    .setAuthor(client.user.username,client.user.displayAvatarURL)
    .setDescription(`<@${vUser}>, Aleyküm Selam Hoşgeldin :)`,true)
    .setTimestamp()
    .setFooter(`KURALLARA UYMAYI UNUTMAYINIZ.!`)
    msg.channel.send(embed);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hb') {
      msg.delete()
        let vUser = msg.member.id;
        const emoji = client.emojis.get('693976520644886590');
          msg.channel.send(`<@${vUser}> Diyorki ${emoji}`);
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Hoşbulduk') {
      msg.delete()
        let vUser = msg.member.id;
        const emoji = client.emojis.get('693976520644886590');
          msg.channel.send(`<@${vUser}> Diyorki ${emoji}`);
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Hoşbuldum') {
      msg.delete()
        let vUser = msg.member.id;
        const emoji = client.emojis.get('693976520644886590');
          msg.channel.send(`<@${vUser}> Diyorki ${emoji}`);
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Hoş Bulduk') {
      msg.delete()
        let vUser = msg.member.id;
        const emoji = client.emojis.get('693976520644886590');
          msg.channel.send(`<@${vUser}> Diyorki ${emoji}`);
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Hoş Buldum') {
      msg.delete()
        let vUser = msg.member.id;
        const emoji = client.emojis.get('693976520644886590');
          msg.channel.send(`<@${vUser}> Diyorki ${emoji}`);
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amk') {
      msg.delete()
        let vUser = msg.member.id;
        const emoji = client.emojis.get('693976577167589427');
          msg.channel.send(`<@${vUser}> Diyorki ${emoji}`);
  }
});

// EMOJİLİ MESAJ \\

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    await msg.react('🇦');
    await msg.react('🇸');
}});

// TAG \\
client.on("userUpdate", async(eski, yeni) => {
  if(eski.username !== yeni.username) {
  if(!yeni.username.includes("♅") && client.guilds.get("693280770680291359").members.get(yeni.id).roles.has("693293366951149680")) {
     client.guilds.get("693280770680291359").members.get(yeni.id).removeRole("693293366951149680")
     client.channels.get('693316642863841360').send(`:broken_heart: ${yeni}, ♅ tagını çıkardı!`)
    }
     if(yeni.username.includes("♅") && !client.guilds.get("693280770680291359").members.get(yeni.id).roles.has("693293366951149680")) {
      client.channels.get('693316642863841360').send(`:heart: ${yeni}, ♅ tagını aldı!`)
      client.guilds.get("693280770680291359").members.get(yeni.id).addRole("693293366951149680")
     }
  }
  })
// TAG \\

// KANAL ACIKLAMASI \\

client.on("ready", async () => {
let guild = client.guilds.get("693280770680291359") //Sunucunun ID'sini yazıyoruz.
let online = guild.members.filter(m => !m.user.bot && m.user.presence.status !== "online").size;
  setInterval(() => {
    client.channels.get("693286779062845440").setTopic(
      `Toplam Üye: ${guild.members.size}\nAktif Üye: ${online}`
        .replace(new RegExp("0", "g"), " 0️⃣") 
        .replace(new RegExp("1", "g"), " 1️⃣")
        .replace(new RegExp("2", "g"), " 2️⃣")
        .replace(new RegExp("3", "g"), " 3️⃣")
        .replace(new RegExp("4", "g"), " 4️⃣")
        .replace(new RegExp("5", "g"), " 5️⃣")
        .replace(new RegExp("6", "g"), " 6️⃣")
        .replace(new RegExp("7", "g"), " 7️⃣")
        .replace(new RegExp("8", "g"), " 8️⃣")
        .replace(new RegExp("9", "g"), " 9️⃣")
    );
  }, 3000);
})
// KANAL ACIKLAMASI \\

// KANAL ACIKLAMASI \\

client.on("ready", async () => {
  setInterval(() => {
  const nitrolar = ["HRcfJmenc5iEWXiU","gDFP3HZl67xA8plN","Z7fcVn3gfBmZE5c8","SwDcpIeagForHQBa","34Dx2pkrWOqw4ZZo","AW8nyKBKQJ2XVaIt","c4B4RUzj7VLnk6mL","tcZeycvcLZDeyAoF","lLDpwLsnQabsPz45","JEaG33dpYTf9xvdh","CLUQDrBkwxDAjVyt","zcHVVpZblSyMCZ5x","VbGvIO6bHOy32aMa","XMkzE1sMGb2FjsM0","QWngKSwQ3JEka00I","w8Sk86n9T2CIGmcH","M3ABcN03o9Cheky1","UCSky5vEhrm9pXHm","v18scqZ69m3SFvC9","ACPGLa9FdGHdg5Ai","DuFL02yb4IySdQ0v","myX4me6nZf7dcYq1","SvykDU7DutGaEieW","jriow1YP3tTKLV7g","GJ3EsMcvqZJ8dF5K","cNirUZyuPUmqDWDw","QJdtTl3ahk9zwj00","BDzj610oI9WSZdEg","SbVY6iSMh4DrgzVe","L7irjWFNCdKo3Z7g","N9GDo9mnf3f9hD53","OenNkFqWHQLYg8Zw","wTAjKFs3m2rB0mV4","5pDhPd3zc6HnAFCq","Jq9cVIB0Zyj9SjtR","toP9Nb7g8Kwhvrxt","gnjQFB87EtN575XY","jb5w4KJuF4JqUyti","xT8YncP39kGQphrA","Uh6VEBy5Qu7bWNAH","cECK6lA5IaOmmcdo","Do0LO6uMgWnYgRSP","IY87rcHGmMxJ6GgK","E43LhYTezn3W7KnG","LhzgXlESIaviRTcj","C4rCcTh2OJt2ZdW4","ftwitDauOt0a25nm","7InZbwuI2tvuZaLs","fZTfLyv4te5VqqXv","gQXp2AINJIDKP9pL","VPzVpjP5noHAIhEv","MjbmX6kGkJndYEvS","nzTNvaIAntTLWryy","idXmU3nRtpmNqLNK","SXlKEH3VSplc9Cdq","HjK1Uq7JjdHdORIb","R9jJl4wZZ3UEEs4g","4FQwB6Uuj6v1e9bU","qK8TOap39pOHgdkc","x986H0mihLmUQXri","CTmmU20OvfhxpeYv","bMF964uvxVq24Roi","ETzwSlvsWd3J2Lat","JMQ9oVkXvU30oLuv","T5nZza5Cd96lCxds","oBERAMGRqNwpravB","E94xZTABgF8n0pvU","TZG9clmAVURdBI7I","VWMvGlXAStEZayYF","rgENvZtLlS7oxmcd","EXuLYUUJKY5MQiQx","Oc7BnjIrmhgI53G1","NHaU2pRk5QU05Mpm","IckcvRw0QSpGZln0","9PqG7jWIeZhyT7zf","qZxZ0Dkg0OYRuDbc","dskUqEThk0dpz7jL","0A8yDvAdYwES6DNf","XHiIQb7dLhqW7oV6","SbDoYqWCrFqqYuvs","tfq3rYUuX8DP5XZb","OQZOx0UPwAH4gGFG","3d6ddsfxIU2TVPr7","x7Sz2agT12Qg4UrN","CQjREVVw4VvbTWZI","3Zj3o4MxR5sDZ9HA","IQU4JD5ezsccS45Y","BBLWHWxo8JrFFu1b","djVbZSleGwyyi7Lb","8fdS8hCtgy70O59U","WHor2QFqONtvilSn","cBEUdkFEDrHNS799","DyWTdwicg7UcGCfw","fZipmrcDaJ1DoZsr","M2FnBXTthT1kH97S","rZJ4MicIA4IRFzqf","KujtzCVlrTDgl1RV","hy99fnjtqJkPIRFc","ZywyOzNDIBsRBhB2","z5X34prPU0IIXoGl","sAeqCk8w1mWhMgH3","1PCC8yxStPbkmkYp","g5WDQITqBY6V6JBc","REQJx3vqKmn6pB6k","SZtwZUDr7opVwWT0","jMjpyUxUbQy0HYGu","2xO2Bv64aHe7t7jA","pEY09CitGnWfqa6J","h8R2P06RbCju7YKi","GX3eRw07ndhEDjKv","zK2oBDLjivPsttkt","tCKRFLeuQ4h7fMkN","pvrGiQgnPeqYY6A7","WGdoeIQAi8KoqIlD","mJXCNSvAr0mCA1v7","qlykvZRpgo6o3vUo","jfYrPdfGzuVY40hi","qGp349azrtMmB5D3","by3KqnS5II18s03Y","N6zw8EnABwdiaPTC","ON9bk3zAx2bU1t2G","Y6AxzyrTlSeqSr7R","IDh8YaUjA8dCu5Cl","ciW1lX4Rjlv51C6n","aSKdFURIXAiR9AOU","3hIGNlh1fDkJ3Psv","YGgasQKijV6S0jU9","PIHJVczVvFBcDtED","zg6dMpQ80U9oYOMi","IV7nss2uT8J4gWxY","yEm9n2NTw0i7ujYv","pOdIQz7siiFt8Ooa","07H3qedL9YqrdRpa","dwyleInfYsHbYHIM","oafjfv47omPXrStV","1lTN2D17EQdboE0j","XVHehj7fglNCdGRB","jeqHvF6RknHpJKVD","WobCezUNYBPfvs83","4q9Btugh83Nh071K","55qQNQpqlIjqYGHa","LMoO5FeZT07ssZ9D","UYIyH6wL5zPeTSGq","FmNOuQjBmIRtX215","udOvWWVMq9EcfXiX","KrKwerlCSKeEdbMi","0tkszTefN45ZhFQL","b7xwCbCmI3OZhTAq","5sWVP5IPz3N9XlTT","qOdDYo0MSdz77VVp","8cO9LYAYllZ1czln","Xl96K18HksydRiNt","AlTo8LwBrdTTRTO6","NLhHt1cadcqLD8jc","kK8YNoqXsTiGm1UL","jE4E7XQH6eScUqTY","dgYoEJk55wcexI8j","7WJGAiTH2pkYTP3o","BC60vFVFq6SVNbGh","1HfktsuyMAFrOmsp","EfqpINpyk5HXzDfM","JGoxwWQ09oNkxY1Q","kfduMn7viUsRDKDw","mm9gzuBKef44ANg0","oA66D2CqWevXztuU","e0Scry2VT6FPoVSq","mrCPJkz14ewmzwPo","9qDqccDBQX5aZ7cc","1GHeHO3w7BGyWpIw","oLcEpKjxgFZz6ioU","dBTt8QaQntoCgb5i","Och2NToQHtkObMKO","WcgyZq5G4mvSTaFL","GNTX34pLrt4nqeYy","9C13BWDPmdfxhnVP","Y79K52xpVuBFn91g","ODmyrVtUaQdpG4Wp","LanEAUrFTKJr4La1","0rdQjJZJIiBc1c3X","EkU7MrEwY07vvOhB","oOY4Iy4Bn8o5az0u","vtegIC9XK5NDQmWB","LcRfHJweratWAzBR","ATiarQ3GzdEwdjv6","HQYAwGTKHsnupmA7","V320z6RsvYC2euVI","D0eH8AeY3slNfbcP","iZwz7aqfVQGaVhaB","gKBvRclCRhLt0F7v","KXA4Z0CKeSVwMmNq","DkG1xwVbnDtqzU3N","0kuBh6EG8WifVh2Q","F14i7xsZTGobroix","LePtDdP0JQSlFey1","uXcW3PWHiHdVpM0E","tmeT3rZjYUmzXnYb","nuzv2TwvFI8TEEkO","eb6P58mhqFB0DgFp","0Zd3zdZWXcq1ZyIV","9GfdekYeTmFj2Vv5","9dHdgrAneSRW3wuU","Il6drxODXVF9SREK","WonutiVYGuK5FoO7","OMnuVCJgLMPSEZwV","qp8RCs2nKHBNkSVZ","X7Y2hZWig0uXNd15","ctBplFQYtt5v5ash","TSyeCvFhshIHq9QD","T15RmMuj9HhVC1MW","VLO4UcHS1WPUz2No","vlJBERgmg2aapo63","CghtIPTq7ueDHmzs","IzMw2cBkcOSBK1ab","F86ByibyMWUU1IZo","1c2UcqSgOKLbn3nB","aVWhwuoyWCcHrJ7V","cLsb5W7ttspAnW3I","oe3urIQR4ONtiJuV","oYhZT7onoJLceNIi","ATnKKczGGu20TrQo","NN6HnJLoqoKo8NqO","ODJrICftlBDQ8rqg","XBY7ytasM9zkGVl8","UU9RSoK0EVEILOPe","Nj2kz77TXEYUpJa6","IPZiFZVBbVo23t16","NLb6868YVTaog3Hi","M3KbbsSyZVyeWhW4","57Q7VHm4X4IDJbGP","vIqLCZ6MZdJKAeT5","M1xQMzjctY2PqTev","1MctacNbwXucpscd","6Bb68oFUN6l2oDyH","ctypfhLxVMODBiU9","XuPijZKlmfvJDWSR","iDJtzxVkqza3HHzf","1J8HRsI8LKa7g2QS","JeckeKCcpdYeLeS8","BX2J9hjuBbLAMxL5","sBYQYlZFX2EuOgZh","CDo8HEUWNNEHN0QA","ktPpaCUe7aeB41AX","RUcEfcxeUY896U2x","b1thDHYcm348Lpan","sfAHrnceI1prA2q1","E8hCoBKwNJQXt57z","4qVB7X9MgVTN4h37","taild5CHpiiH1V3P","IVNBWWOL0aadhzVv","edUuVi1YnhPMiBG7","hy7BAI7I64Aa7xKJ","4sKSLaAmBfTlnA5g","zLuWN7KTLioS5d3F","nqexACFkY3xjBXoZ","mJJH5PWrQ4e63PIG","DFkxZreI5y1jfuBg","75nRyJkkSQObfVvV","7aspjKPMmBhK9zsW","SLBFh43TmaZIvqVv","XIN9cGD22xz3GJCt","9biNW6FR9zg8H8Km","zkDnBKcrziXYvkTX","wR7RFoY5gxrWDCUG","4eLhvGZwlEe4A3bW","KSFAql1nSKll8NKC","vMATn9GVPtadscBw","gRzY2bpGQdjDgTnq","W0Yw5wJaLMOSq5Lf","nSGZDpw5tdlULuML","kheeWdFdOkt2tznT","XxsRYgMyVl3Fo5iO","PxDSF43ghr7Yy8AK","bOa2nLgNIKp27EHy","dMK4L6fem59dsPgR","fJhpmoAccObOe5Hm","CuYyPTED5daKRnEo","TMu5JPnbRXGMvQ1Z","ak5vUo6TG6Scz7lk","dUGc39NTT7yo1uZZ","hvMMDQtyBg1P3Hid","e5crWDBU9jX96zPx","4hoNDdRTkynBoGrC","oSs24AgPWPf1dXmc","ZtNqsRNPQyhGawle","aE0fwAz9FGjeAtfv","XBqCI7onO2JhDRRM","rWsvPoewcUWyraxD","kJtE9lVOougGqGlD","qpT39fJo0MZ93hk5","hdIVWVQEiRnNmYh0","qqa2ni40zvc8I5MS","GSWXaW9Zjj3SpPq3","SJQLGfKMnS0yYo6e","QviDaeOiYS5a63sX","xNaKcB7iccHz3Jpa","6yRhUWGoH7XImFrg","q1VKl4a25OOEWEVf","YYgwZQXdbaTjxZI2","YpNLCVaglKKYPioS","i5kYpvJdwhnohyci","yVSPGppjGzdesC9C","Aj9AGaUgZk0AgSi1","zLQTWMmtt1kV8Kgy","blBYJ58YW4eftoUG","TtosltWM8OBlT3Dr","dNykLdWiRHI8nXag","BE7OwR3McrXTGnjH","QQb890vN4gPtxKEl","IhRiu0QjHb0BKMrz","QsIStrV1BnDHIEAj","RNYp4o2GuikltyHw","2lfQnr67yBCNvUMd","PZO86oCw2hi09Kfu","Kr16RxpqCgyzaswG","bidSlLXXOxBP1gJ2","FUZHV9IoFnFdzB17","mg6rQwS3Pb5hqRQE","fMJ2nIxVKMaPuDq4","PYBolqgB363krVmt","V5eS0pstPMtW0ULc","Al3V0KTymNSuH7GY","KL2je9CZly8hEgnb","7V4vsSEFX0D4cnGN","fzkAmm5opCTQL5lN","YTtxuCEvADjrcbIv","BbbiGjYN2fwmyLQV","t6F4SY8sFWhwJQna","PM7AHQpex9GEJP8i","yjt3rsEF54rlcNs4","wedZN1io9criilxm","ZRm5dCAmUSbZ6pGv","Azpmt9D5g4ZTzDIC","xiBzseLnUOeWukTu","B6OM61HiCKanXzuV","DGhRdvXHwBxjtr4x","4sJTwKXhIuA8kCrQ","PevVhIPjpmDxtljx","U9YPFZsU1MyYa9ET","vYFeOk9HUJCJipu0","5cBgTlDex21nD4rk","xq6e7P49G3xuUfve","jPbVtRPo7z20CbYS","TBUfHsf8Y0ZIIIYy","giazHTOOCNEGvAaD","o8SnYIMSTY9LoXON","3bsEzAvea6N5wx0N","alVTotc4WylHMN5I","uPKrt3JWXkMHg9fL","th0jwTpys4jedYmB","dFdv9jHD6g5oqzhV","u0v87NEyIeCrH2jG","yEtQHqgpPFdalkec","EmDSLwSjJ5Hy5fzZ","tDve2cd5VNPMnasG","6Fbf9amzcFfLmSrU","alqxjhAB6u4abYui","nwW45mJ2LyKqluTU","Ih8UlJE2NbtEs03V","Q3wPgEJtzXSxvwK3","DmllqJbwSwhlR6kj","EpyFEvho0Z3NpDO6","C8701AxbsFcnWAql","qiuVfNLwwKhduSwr","LGuAfcvf8IVFSBok","zpjdB2mHHKRRw1lJ","uWvnvRresVBO2it3","w4Fyi9wZdYVLTC3J","SceNplYTuTBIyQOA","kStMDVZTyaEGEW61","fs9CNv31K10EH4ED","EPjSx7Bn289fEkxj","HuLLW32sziyZ7eG2","y67P5M5pVzaxvhF8","tL8pNN2TviJUEUN4","6I2Vge3UXc6QH2WF","SfX39Att8YQRFArU","UqB5wmDCQYzyxY4E","vKVJO2j0yY1y8Bhr","dVj4YmbydmthNzd4","KSE2ujgUAJ0lFi3z","vZN0MEKRSf2dilp5","MqbSArN8AFAYGJAI","9hpXkbhjD0qy5OCn","Frw45183Yh9WPLUI","CKwulPvWG2NKCRCc","r0NbTLMgXu1XfasV","BwaO54sCMxlqG442","4vb1lODElOkoR9cD","hs65CoZhgATtlvw9","XpXXTD4cVa2LNBut","1iijLsMu3chfiEub","vmnlwB9FrrzSYXdQ","wHIWu6tMlfrLrtkR","UVqRFNgZYsTmxthV","guQOsCgcxyWHTe5y","Ho9dwRnh9PeEGRKC","I6uamSLR4cMfCZj3","QB6xBijlFv3FTIM9","QzdO4AEkzr16CIwV","VRKJX35nSKV3jkFW","FNgpjSKYcp2y8s8D","v68MnXl7xQCOQMwG","ZeKhN2lS5rTh3PSl","WpEZl6tebC6p5Wvf","VWGkA3xnFN0bXttY","Z0AJgJJ2tJlouugL","EeozRZ6jbX1BxZ8P","hsvZ515GLIkemf4s","uYL492MoSromhDiK","ow0fDAu9fOJEUOZh","2QMCIaG3Yu4cBRNV","TizmiwsylEJk5a12","3BNgskodwglIWfUw","YJFoVoynkLECpPek","WHbupo2YpsiMHW5m","1kghpha5qU3oSWCE","in5GyowTgAM50bee","rKHeTJ6jC7TUEFP5","IL0MChUWKC7FNs8P","IYmHF5QAb0Wdya5c","0DhADYUMhWcLm6WG","vn7Zxcg9N4VhLUlZ","DphA28ZfQNtthGOY","yMqPlw4gFjtzOHej","EtjVqQ5GdraGIO2l","5eWCkSbefIgQOKW3","L2tBQT560dt1kPBq","Nn5RG41cnZdihC6t","luFgK6Ubm5HO6UPf","5Avb5H44al5Qkz4u","ZiUOZNNMWtA2Ts2K","DzMY12uvkjf3yh40","FVReMeIkkT53i1BL","sHOWBJRgErHdSd6A","2oks6EbRGqBzHJOQ","EuIxIG0e5RkjugYZ","QJU4KoEXqJ0KYhGK","km6chJ1i0PnOYhNP","ewevsYHmwAm0Ghhn","6m4VIi8ejgqT3zMw","5aTAJRZOMTyYrtHm","VoImp6uSwsHABNGp","f2aRUsCUBXYKIoze","66OwD0pKPjBRsi57","DNSYRqGgFEvmRXIf","I0rcJQ2AZ0eBQqMO","R6ZcSwov2HprWkfc","xLImXhNaKrljs5Ma","UPeZ7lVxx8f2K9Kd","Qjah0FuaHP3gpyOE","zCeT2jOSrpaKlUyT","DUF6aoRzmHmBUE1t","Ka8nA3Ktqv5lCK0I","wKaUHTliuFw3dNX5","GMRbGKQeIzuXqz9T","P4kyE7nxt2xgL9qt","pCiXK18K3zBt4yjD","VApgAG2bXPPNzzpC","QIVVJKuQQ0NqATfs","8il0nFBP3zBPWF8y","lkPl110ENeWFVSjS","CYbJlRPF6Gj8OtKj","MKvRcMNYR8rtyZAv","zxky0veItU5wlqk3","7eiZcspeYyLRDJc9","nFdtdjksWO6QS56B","7LdwutuYZT0k5H8S","hroZxHT3dayagLq6","cE2twPvyx6PRiPaM","RZU0r2AZAARxCHuh","B1MZYpV3KnSZmEYz","SmJTFya5pwwXtF0h","JxATBWS7fmonA7ie","aEsLZn9pkb7Gp1h7","diFSYXcTFdmTkRNH","eooPRdHWU4Y8void","rJRGUAcllQGRznSV","x7TChGhgA9Q2YAt1","ZIqAxGgBmt9xyTkc","QONE5Xa1fxaoQzxo","iPWZnoOrGMcZfyG0","h2in48gi6Kpodn0M","rNeTY5nuNXJZsDDu","ZNwiXYlCfBXN0dvG","hol9FjBKH7DBKrQp","cQU6obXEsHQWhmNj","vHPUghPL5AHaUAIg","lamMDrDA3DKwPorH","JteewYR4zp3ukvrw","gGzIw3u1ZfUJRACh","FJtoRW7ql3IP2T8b","xvwD4hmaCN9YnP8B","8HE2iHdDRqb7DsTq","xzyNSomopRhscVsD","BSStfMbSFfNAiEtr","U9YBakyLlStgsq8Z","iOTMBZCfxCjVRkSe","1drxREEadhVbsZ66","j7DBIdOxF4eFu6De","Z2S17E8aBN1eA05o","tkBQH2Ntp7mMb7nd","AIpL3LFlOEaR4kGz","Qe942RUtYFWk3ne2","Mdd8Otkf3feAqRbm","WaToQHn2uJVlLJ55","WxEUgtvKwVImvWGP","82udxAkxina0R6EC","PG8tJr2gcHlsyTMZ","qsfCjjLcsIppmdw8","onl8rGRCex4IasNX","9KQVk99QVR89DXcX","G4tPXLNx5nZ36L3X","4K1JceavzGffGOJU","4nfO3zECB8ME8ebV","PtyT9ppYXMRGQOpr","hWLkOmlbITLksayf","6Z1ClOoiZ48dveiT","bMKTO2Ot0GV4jj2I","XylaucO99GFqaXQV","wfIS719H7X43o4GD","72PNoJwslJVTJxNJ","04bSBkf54cnQG1jg","8Qoxw0FLqqWMXFaz","KM8BFUtlGi5gbGhX","HXlDfH4vg8UoOEwd","dm8yEQJWah8INg21","98m42EsLsJVejhcX","eP70HTHJXig5leE0","ABUiET2UkGWzul1K","O2tiKVqnRpmoXhu3","Z9xW7vID47dc3Vfk","7ufI3KXsnUFR7vEj","JJXxI747qO3zinIH","PDlTe9o0lE3z7KSE","Ss2HiSXYhZeOo5pY","RV1VLbso4eEgKIBS","yhyPl7tzkFSCWOXn","Xbc1pZW3AlX9SaRj","T8tMqrV8AJhCkvjH","MkgG7gBTlSCtdip6","VAf49JtetAYSnpAS","a75DVob2US7RKsHS","g6EpWNCXS2OOKZvq","pBlugLBTPFJuehHG","LUTp7OJbkpED1s3H","lyaDTUtd0MuRYsWF","d4dp2SsNhRuWdIEO","6SfQPVlJuXyO7nx6","HLVXFRwv9PbJ8F1c","CE0VTl0JByQJJUFR","tQi4TlYTfnMdt03D","fgNzbrcp44FWUj8s","ZDb4xgNc5durAXLm","E0WLACeaDxnkjGcO","PRPiV99VmEDPKqcD","bVK6BfGH3nPFr5WG","vyNgaPPd7QLT5lM1","EyCYHKitMSFX1jXr","KQAVXFw9zdEMHVGD","3mPs2ndfG0ipxVWw","dUFtpnkcR9cNvNio","L6yG3ZeYTdyDn5Pb","ITCurjMQyoHAdB02","bI7X7SaFb4X9Itd4","spHHcGuhF6Udan2M","xVEOGsVheHMg5rp5","GkFDp6pQwJww2nhR","PbeDVja2NjlhASTb","amiuawQB5Z0u1VsU","Dp8rb7cmXO4NlROC","Gjp8DJeRVGXpLUjk","uFQwb4q6ImLNVP9j","1DrnEOH7dJ9zO0Ks","eXHJXxKl1DIiH1yW","AcDyUI7QH5aPG5xB","FZzehZNHqgZQl7mi","AJ0CGjyXYiX43BHA","Yi97hkVPaA5Fah47","ilHFAWLLfTLydP9G","2cUZsoaeTYR3VKMp","YylV7CBgx7HJbbx3","5b2YnfydB6kGuEbY","eDI66UR7eFk97u8P","ZmJt28P0SNEmXicm","IsCuVXJIE30J4Z5m","xe5vbIjNxjDE2t4J","CRMUzkxNgcuEpSuE","CV2BbCymSwL5X0Jf","LpOcotZTOzBAGUPt","b9sdG58hDrGANzxf","cWRFYGqn8ov7Nf6i","3uFZSzUsyTDiGG88","yH8HITZkAdHDiN3e","m7LWHI70KhaCQRXy","uB0w1lLn0xM95dWc","Vhg0xgi1JvB195EM","AAH0VTuuTnFN9ORw","VO9oXMKnAv6Far1y","4GPqSrdVhbcUijAR","xweIFOb4iQCRQRg9","yjb4kf4Ab3RJFBk8","gvmSiuXcZ9O5iHdx","qlKqtb7QF2nWqri2","aJlHLNnjWd5xsJ0B","r5BNoPgqeiMrgZfR","RcDvZCRBXSN1wYGC","Sc344MSB8c4dVcvN","mpUOPpYNkSK3K2hi","bl28BCCeJKpEea6t","K9m9y0zHA61t30Be","nfPCeiQ6lM0WtTeO","2NekFSR35L1LT1wz","fpUe3ToI0vRtijxl","41Ol81w1xHeEGvW2","W20hTKtuvCqDAesZ","8UtZm3nBy6zFTpmS","9cxsD3utPCObXuXB","j4b1P3A7xfdvWG0z","VjBccPAegTL3pJXY","VyGRFfiFvhgSlxmg","uV9RaSuQI0lXAjCL","pGyYYpAzDQLKKyzr","vVSnQu1fZNjvXqtd","danbPawzP6zmxQUG","VAng3N42Qaa7NdBx","uWlEt9zraRAEUOyr","DTglYiv8Cjj5IVcG","S2WF9Ecflh1Exbox","sAjRbZ1zxI7LULNW","78MK1ZatDBMIh0wJ","5EG48E29sGW9ObIa","hGc6YSCp39nIscbv","Tzgc3MCNMp6kvm5r","Mc9N2OJeTG76CNsb","MtY7H7NZ4krNKW2N","Kb3T4a6TpwJKtJGp","Q28mhYI7OX0iMXof","1hIfWiVPvrwFwu5L","ImsJnQwgRccMnd3s","f7JMIX3oYMtvGiPF","shehDqJGyZYdz5ys","ZhFcZ0K4RWFv3npb","plRPOvrsVXT9Jxj3","Lykd0tnMMvFwpEqp","dP2FATpvqLz5AFsM","nOgxQx87PIsnHlua","CDfCOF47aoGVn4SJ","STag6GCNd5BhHUeY","XjdTrexydGCIf2fk","Q6cQayg5h3E5hMN4","PuHeeWkKSW8SjuWe","loEtEVZL1PUZFg1t","H4e6uqlsWg5RKdXB","7oF7Wt23j7P9zcHX","uxDdz5u1MSMC8c0U","xsaSGE39NSjfvUjl","0D64QMbrucG0JQzX","MUP6x3DXJhRV2W0Q","x01s3J6boL0WgrWn","xzmlVbFZ0ZEin8jA","1DgwbarWBCWKQTur","5kyh7CKWylRdnday","pCCD5tYh5RSKodc2","wJcl2TS1kA483wfc","hx3Wj2EysQ2uxwuo","iznMvVzSv8DuHQLu","JkvevkOG5oqvTadZ","yed3ZxjmazsKA9LP","2gjRpzSshIUo7Y4b","FzJkauadjXVpv4BM","bWyyxgNRBwhIAsHq","geF7PeTqQDL5wejN","AywxnqjzuY0DDUzu","Tm4wrbTZxHWnxAps","YvXJsYfq45VioWWA","T2HHb7nnfwlu9T50","1rjUwg2CoSc4G6vB","kj5Ga0nuHkcCL7Py","3W98UPmaD8AzQJ0t","bnTne5od1i0bIADC","9M0DpgCSMtdxJ2vT","iBOUxW5tsNStfpOK","Qwb6Q6V8YIdKl3v9","0X0d7FnzycBzauhN","jxja1JI1cnyBFl0V","79A33Aqjs7xTbC9y","iZk9HpcnBrWRa1WY","GitDWRuRQgI5jsWl","VS9ZjB67UJt6OIro","ge0wuUnJVtypZ0cd","3RrWFhlRnagFbPKJ","tmgbwCN8ycmSDk3Z","aqdkBQIAbsPRrGAc","1lfxjtVSCgqRwknw","NDbAsLUcI7z9QOXC","ffAm8sqtVjl2R6Bs","dUaQgT4mU7UIyAwg","qQeMPJHmEmRWlCyk","q3m3MJqyn93PxXy2","JpzEeMoR5AlM4I4A","89IT9X9DsR2MoyKL","aTNVIcSKbleEEq60","XcGNssCPTYCN7wei","hKvhLhu26PemoR9k","4kVQjDwCVzxc041T","GSP3lbL6s2INRp6H","HYAmUp56CnKyzXfb","binpn0CI3DYDGAZ7","9gHp0lfAg3qRPaPV","czzp3n4PuuXTAFcy","kdH5GwnWMvacI02f","YlVv9N3dB9iy1PfJ","98X0eZXquvZjvf1F","uhme2SQPWV8rY6Fu","AOARXutSw6fcBiu0","DprLGjkbSH6iKP44","XupA5utAGaqqZ9ej","2YLvv58jqonJk5af","hOnFnp6ceUvROqqJ","LIH695vS2i1di4Ji","Uj6csZXZ4mmA0HnH","Kg89wWYanRalAWgB","1dwTUTCv2eOPb2Xh","UnX4fjCUX3hEwWWw","NlejsvNx2cZERGvr","JBJWNGyRbkrSyEOO","Za9y0JyN2NSREo4v","VIpvvRgx21DYE439","BSLXQL7SCbP62Xeh","r1diYdeBYbAnnv8e","D4xnFUF3ApKaDJF5","d9n6RcbJLpkOUYt1","LG04j8MpFmYYCTYX","KkukwzE4nGhTic5x","XRTi8QRekWuYNA3F","4HlpRBykrHz0WTt8","F1pO7LWfvGWmdEmm","2gZnNtSIKpQEhiKF","AaRd8gLEQ3pQm690","u2LxMTE1bznQ06Ih","6AWpTSUVUO0CN96Z","bZI59yGqZgxj3Zim","qiUjPFrMpPXAypMW","xVv0eyJrYn9e0kKy","afFXfS1mNwuW04iA","CIICvUGTwkzPaASJ","Eo0L8H5kCG0ZVadh","Th74zOJ5AK1eKV0F","j4YsUbAVyfeJ967r","76sUjShX76APJpvX","kB72Kz9izvZW9uYs","a3ofDi2vKlTAwLW9","imEok96VIb0xMcJ8","PZ52DFmbBndFv6hI","ecDAUHBpr7E0c8f4","moHSNoNmiVsGFgaA","fptPtrRF9U0l9p9Z","P4tQqXDELJHuzuLM","T8ShPFWrU3clRqgM","fN2O6BTBVE4Ao0FQ","Z6Eg0WfVRAfOnhUc","ZgGVarc0P971SaJ9","gKXibCRAn44Y3rHJ","Lfb3EgfUnOdmkozW","XLDtz1RbjGUotAiV","WY2CYh4U1aeRt2Sw","tmTnabrxjuOhlT1b","JIYLSfEpBptLZTF7","66vThFX36PMrJQQu","I0pMvmTuc7UnskSV","bQd0jYLfi2aBldmX","UK0rYcgeLLiB2T8I","1AiAiuwIlbsEGQK7","dZExLUZ1WDKfSZqs","OXLczU98ZNpirEep","0Zt97LbMryurAy8a","DLsBjGEL3m7TFbBk","NdWYaT2puBW276HU","zkrhkr4WA4Indlkv","FnWnBut4OoVc1XaV","IPgwVK26qaMDOz5m","Jklj4lE0GdiAsZ1M","XTYSbZ8ut1MCJToh","VLddtwDXWB0Atm21","96MlAFXnSwTe9jDd","tX9h0ovsI2fswOeI","gdubPDruHQk4gPFU","RsRI1pqL5uyWAV3Z","sHoawt4UkQ1XBH7B","XOUCS2dDxcKybCuX","nzLRPei0c3OiKDdk","G77nQgyzXTmuIYBH","0CNwoWMZPRsOxghE","FTGwdMw65CirFro6","lHwcjOW0k8dq7IVs","3uO8ppbWtmwYXoB3","IcU3nAI36gnde1vZ","CgvRiCWkICvG0NRy","UpF7t6q64dBvdYgn","x5M46vpUO0vBn875","oamYA0biUV0ctiSV","2k1Wl0xG2xW1z0Q3","mMcy7fOTkBNyPeRu","59izg2ddXzQKj8bU","9cuuwUEuKd25hUex","iV1xi9poio6BkSB8","bfilF7HGyO4NwA7F","YnUN0hHWbNboh6jz","0a0m6OpuJR7RiGt3","oM54VpNcmvyChh8Q","hcviSX9tTI1zsKvl","mQqnmQOLlTu6p73X","kD33RAyTZsGGFhJh","6j6Hb6ZvMRrswtQy","hudR5LKE4IAKqZ9q","TjKKHWQ8iVk3KoTZ","OcG5NnT620fArf5q","t1mfmTBjIT8wuHDN","be2mbD1xIIzIah8p","cXv3XNM3xcEiy5Ff","ie3834vjR6AvcQg7","5lkMle68USoS8koF","6qRqIUlh5fALtO3O","AqYmTLHpAcxGSoNo","pzjC47ecTisFCj31","D2DBhRNBkDjR3Op6","srhtD8BnWiYn7i3Y","GtoQyW71ijmolcmX","ljzHqK0OoY5ZVyXR","Kr71ElkovXMusUr1","BY2hDBqDgwAJ4c1T","5Of1GxrNNv7y9dXx","XCrxHtipeVC8GVmK","MsNS8iWBKiF2MgM0","GmQjF85VqgX2mzlp","u4ic5pwKaPxBnLW7","LjRmNXKYvuUb0UYM","JenxmzUa91qDCIpN","iRtAwYHxqKyqEuWh","Hnnh0QVTSlZAReVb","ocHHm7FTPQd5a0yx","Z1PC0tdrfgAhLkdl","TSSaw6ZO6cB5KQk7","TJ64mHPFb0hfHvGW","2Is4iKgcKmUdLd20","7gN7MbxE1GUsyOta","fp5ASgN465YPU5y5","rJStbnYjmk8jlvqy","gumFQyiLTPPG4p5e","6qLbbnyn8v1burPF","4dtglqd2KwmNKW6t","yPi0zR2beUBEcruX","2dUSe80V07v0rWC6","JcGWgjBBMzdS6M2a","BmMjF1WcFuDeVPlA","Cij99bLPpRNtR6Ii","Ae5MXKOSmEXIqcu0","UCrGHTmdmNQYMkAQ","JH9CThOtDTOOliTg","37hEt2UPw3fCWPAO","dhCDKbhX3nW3aBzN","5m2yDAR4KRUwP8Em","4CK9Ab0G0yGg3W6t","RRp2cT80lE1dKZtF","NnJ2GGezHLsKERe0","817p7VYQbjobkk73","B5G1oPXtbv0ytRDy","nVJshJegbedEmjcy","2l7wlTYcakJcFQSx","d1I3UpPxHGtRYkLf","wQCicquOrr3GPzas","My7XgxnXdOLEOluH","G0I98A522KF8bvRH","3hpIUToEOtNnEOai","4ibnb1YXU4zkQvG7","7q2Fr8gGgRj5Jz48","Dgo0A6TVNxaU7da9","Li2NkwJkGY7mRCzY","HdVTSejsnjYwlYW8","MD5KNlS9BKbzaqE0","eJrVeqL5K4LFSj7v","SNcFY5minJDsvPtR","2236rfnD1tbYVZRF","PXU6VsyNQuuzYOT3","k7yEE8OUp3duFnmG","n9Zj89CczqbksCXm","EoffcQOEy0szW9Bw","Y1iYyun16a6bUuON","TiTzP6TSFZle8kGs","EF2Cx44XlEvfga6h","jJmMu0yHTHjXCbDw","sSimysotWtwtrhzr","vOnRkkqBcZDYLOs9","IORjlwKrDkQWpctG","rrjzd8gJAf8do7z4","7kmXtGKzKtBnysDJ","Q9x5fC7aK1VAoQ1G","sgXO7t8RlKYPREMS","KOhOpNRNtYmAu6yT","Wmay76lOCR0WXu9J","tfnsWWnV1YhLDlNv","U8tnNobrFUhKwh25","WKEdhOQMazUkvxei","M1VVDgP6f5DQTzNH","PR69Dtrov6GY83Gw","663ksY4WJEB2wjvv","Ounc9Cc7gTKvuzVG","hxP6cgM2cwB78TTS","P5X5KOhXtYLSg9j0","EOdLJ8hWvLuXreUr","VpFmhEOwR3imT4L2","ajsZVeNuh5aBWapz","7bOr8MeNOmaBo9tH","Yk6yrJiY3IIt38lL","M18sWO3j51fgffsI","K2PBqgzKfQZFdYCz","0KIzHZLImg1d2GnE","39YBslRpSvsR0E7j","eAsasHeLRci7AOQ6","yxbexMM5USXsVB3Q","5K9GfL45odz4hIiq","tGBIRLOAG6STurNP","11M4yFkD3b2Hw7Os","DE1kYIxIp9JHDtev","tuoowuYdgjl5S2WT","3yQ8YFO6gPL5XQsP","JyxbHb5qYBRkCcWe","E86B8UNIpVKnIUg5","8VaMrIqj4qVyltEp","EOC5owmMsAKys6oK","KUbAR2drtW1rj52r","g481Y0rvcqzJb8mW","xEEdMAwfIizrKte0","QDGYfw0Gktu1PUlV","t0L3hIls02JWjc8b","1L1b3EqJwmrkH1Y6","IxYONy3ungh5Wgo7","fLCDdGRR0wMrzK3J","T3rfop2WZ1VrgZ9n","z7qCPiX0EBSRDqS2","PwPVX2c9LHbvgneO","K3I4w5tsrBhayqyh","fnoCLTJS1eecMq3O","37doXC1esviXdl4D","EqiPIVksQE9BCali","xWlsbwwDPRN5pwFq","Clyufh1Z1QVPZ0I6","x4rijWBKk4T63fpC","MgwVoAm9nIWNW9RA","XHxWDNIVhkwzBNRX","wg8aOeGqkcDfZNrb","BTiIeDSbPuJFsymb","XbQqcrRzWG9Qjjot","6tr5YK2xpojCw3Ma","loCkjDkrwns9Epf0","K8nfqP5F3mUtK5b5","XFlRxXchWkPZBP1Q","rWZ6P7780TkJmgZZ","xKRwiNxukVSTE6UK","Vhf3cmqgsOpx88uD","jr1oHyoMA0Q3Pazw","R5KLBam6mb9ciY7n","OBxUoq3R3k8BtBdp","AoJPPssLjB5WcJ9H","8VnTjpDHEl7VYM4W","2MF8XPUV5XY0RsKp","4eEbj0eacHc4nKvq","DsdfOIdtzkPAYIJi","j2rNdMiTtzzwnkYq","VrfAy0EA5zvHo264","uBxmhxyU9aQLBJpQ","iFA8kfs9UYiCUUWj","vtndsRMidnej3l0l","ElNQhvd7pDmAmJhQ","WjZ7rVN6SCiC5qsE","5an53BrxMyQbBVBU","L06vtsuxSACZwCl4","Zc7ajJTZ9t5s6heV","5oyKWTAAFTsONi3m","F9V8JlYQIQvMc2EK","6Urn0424iMUt2BpG","zJ0fn7HqGiTzf6dF","c2KXFIM0xtSJqAMD","aSQD7IgejeFkA37w","zTTaKCsMp39OoZLH","LZdNxsiYFTnWTBJl","lghpmgoA68XdEMwZ","Tcgs7r0Pv3BSMIlY","uukzQDlG6psLWgPp","ZsCRIQmSVR7euZjy","FsGELJonxMpTQvyk","KKrHEGvmqIpH9K3A","PTXkVJA0LgWQ1d2G","BBWM2R1l8viIY9EZ","Kb1AqVlanb8BJyGt","wVzH5WK7O9A8PW7x","VgyyNE9EDZMAhqth","16hfuS8YWrv0HUh7","81BxdodFH6RTEN2b","4vbDpooJkwehNh45","1kiFNutPsjW0C7g6","ZulkXkjxliZmfNoM","oREO5F9XwJ7IbY0Q","bdic2K9MJffM98Kk","LVFP7tn7q048908a","eYlLISPVfjrPkUYU","VT1i8US9LeYrnSBA","Q2VUOiIQTGM5R4Dz","EmTtxB5pg8gFdUwq","tMBY1dTVG5gg0H6J","fModws0mYN23bz84","Yy7eVoSp5rkCLneb","B9pFhB0J0raQKBQZ","mzeM61G3LMuK5NWs","PMiliuitJNq6Y1t7","TikIYcSN0FsJebNZ","nXzRszfvePAYHI5G","Q9ojW65Sgp7RKMWY"]
  const nitroata = nitrolar[Math.floor(Math.random()*nitrolar.length)];
  client.channels.get("699907499876155462").send(`https://discord.gift/${nitroata}`)
}, 5000)//milsaniye
})
// KANAL ACIKLAMASI \\
