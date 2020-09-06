const Discord = require("discord.js");
require("dotenv/config");
const client = new Discord.Client();
const serverData = [
    {
        name: "CM4D",
        description: "Server for Call me for Duty Server",
        seed: "",
        datapacks: "Armor Statues, AFK Display, Multiplayer Sleep, Custom Nether Portals, Durability Ping, Track Raw Statistics, Track Statistics, Nether Portal Co-ords, Coordinates HUD, Real Time Clock, Workstation Highlights, Player Head Drops, Double Shulker Shells, Larger Phantoms, More Mob Heads, Silence Mobs, Count Mob Deaths, Villager Death Messages, Spawn Teleportation, Spawning Spheres, Item Averages, Wandering Trader Sells Player Heads, Tag, Thunder Shrine",

    }
];

client.once('ready', () => {
    console.log('ready');
});

client.login(process.env.TOKEN);


client.on('message', message => {
    if (message.channel.id === '749671462629015592') {
        if (message.content.startsWith("m?")) {

        } else if (message.content.startsWith("m?")) {

        } else if (message.content.startsWith("m?")) {

        } else if (message.content.startsWith("m?")) {

        } else if (message.content.startsWith("m?")) {

        } else if (message.content.startsWith("m?")) {

        } else if (message.content.startsWith("m?")) {

        } else if (message.content.startsWith("m?")) {

        } else if (message.content.startsWith("m?")) {

        } else if (message.content.startsWith("m?")) {

        }
    }
});