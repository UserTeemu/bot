import { FireMessage } from "../../../lib/extensions/message";
import { Language } from "../../../lib/util/language";
import { Command } from "../../../lib/util/command";
import { MessageEmbed } from "discord.js";

export default class Skin extends Command {
  constructor() {
    super("skin", {
      description: (language: Language) =>
        language.get("SKIN_COMMAND_DESCRIPTION"),
      clientPermissions: ["SEND_MESSAGES"],
      args: [
        {
          id: "ign",
          type: /\w{1,16}/im,
          readableType: "ign",
          default: null,
          required: true,
        },
      ],
    });
  }

  async exec(
    message: FireMessage,
    args: { ign?: { match: any[]; matches: any[] } }
  ) {
    if (!args.ign) return await message.error("SKIN_INVALID_IGN");
    const ign: string = args.ign.match[0];
    let uuid = await this.client.util.nameToUUID(ign);
    if (!uuid) return await message.error("MCUUID_FETCH_FAIL");
    const embed = new MessageEmbed()
      .setColor(message.member.displayColor || "#ffffff")
      .setImage(`https://visage.surgeplay.com/full/512/${uuid}`)
      .setFooter(
        `Requested by ${message.author}`,
        message.author.displayAvatarURL({ size: 2048, dynamic: true })
      );
    return await message.channel.send(embed);
  }
}
