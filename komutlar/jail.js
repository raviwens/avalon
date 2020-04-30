const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

    if (!message.member.roles.find("name", "Yetkili")) {
        return message.channel.send(' **Bu Komutu Kullanmak için** \*`Yetkili*\` **Rolüne Sahip Olman Lazım** ')
            .then(m => m.delete(5000));
    } 
 let lozBey = message.mentions.members.first() || message.guild.members.get(args[0])
  if(!lozBey) return message.channel.send("Lütfen susturulacak kişiyi etiketleyiniz.");
  if(lozBey.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Benden yetkili birini susturamam.");
  if (lozBey.id === message.author.id) return message.channel.send("Kendinizi susturamazsınız.");
  let lozRol = message.guild.roles.find(`name`, "Susturuldu");

  if(!lozRol){
    try{
      lozRol = await message.guild.createRole({
        name: "Susturuldu",
        color: "#666666",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(lozRol, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let efeZaman = args[1];
  if(!efeZaman) return message.channel.send("Lütfen doğru bir zaman dilimi giriniz. Örneğin: ***!jail @kişi 1s/m/h/d sebep**");
  let sebep = args[2]
  if(!sebep) return message.channel.send("Lütfen bir sebep giriniz. Örneğin: ***!chatmute @kişi 1s/m/h/d sebep**");

  await(lozBey.addRole(lozRol.id));
   let embed = new Discord.RichEmbed()
              .setAuthor(message.author.tag, message.author.displayAvatarURL)
                .setDescription(` ${efeZaman} süreliğine  tarafından ${sebep} sebebiyle susturuldu!`)
                .setColor("RANDOM");
  message.channel.send(embed);

  setTimeout(function(){
    lozBey.removeRole(lozRol.id);
    let sembed =  new Discord.RichEmbed()
              .setAuthor(message.author.tag, message.author.displayAvatarURL)
                .setDescription(` üyesinin, ${efeZaman} sürelik susturulması, otomatik olarak kaldırıldı.`)
                .setColor("RANDOM");
    message.channel.send(sembed);
  }, ms(efeZaman));

  message.delete();

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["chat-mute","süreli-sustur"],
    permLevel: 0
};

exports.help = {
    name: 'sustur',
    description: 'sustur',
    usage: 'sustur'
};