import discord
from discord.ext import commands

from keep_alive import keep_alive

keep_alive()

# Define your bot's token
TOKEN = ""

# Set the channel ID where you want to log activities
LOG_CHANNEL_ID = 1174771424045568112  # Replace with your channel ID

# Create an instance of the bot
bot = commands.Bot(command_prefix="!", intents=discord.Intents.all())


# Event that runs when the bot is ready
@bot.event
async def on_ready():
  print(f"Logged in as {bot.user.name}")


# Command to assign the "Fresher" role to specified members
@bot.command()
async def assign_fresher(ctx, *members: discord.Member):
  # Replace "Fresher" with the name of your desired role
  role_name = "Fresher"

  # Replace GUILD_ID with the ID of your server
  guild_id = 1174696299984064593

  guild = bot.get_guild(guild_id)

  # Find the role with the specified name
  role = discord.utils.get(guild.roles, name=role_name)

  if not role:
    await ctx.send(f"Role '{role_name}' not found.")
    return

  for member in members:
    await member.add_roles(role)
    await ctx.send(f"Assigned role '{role_name}' to {member.display_name}")


# Event: Channel is created
@bot.event
async def on_guild_channel_create(channel):
  log_channel = bot.get_channel(LOG_CHANNEL_ID)
  if log_channel:
    await log_channel.send(f'Channel created: *{channel.name}*')


# Event: Channel is edited
@bot.event
async def on_guild_channel_update(before, after):
  log_channel = bot.get_channel(LOG_CHANNEL_ID)
  if log_channel:
    await log_channel.send(f'Channel edited: *{before.name}*')


# Event: Channel is deleted
@bot.event
async def on_guild_channel_delete(channel):
  log_channel = bot.get_channel(LOG_CHANNEL_ID)
  if log_channel:
    await log_channel.send(f'Channel deleted: *{channel.name}*')


# Event: User is banned
@bot.event
async def on_member_ban(guild, user):
  log_channel = bot.get_channel(LOG_CHANNEL_ID)
  if log_channel:
    await log_channel.send(f'User banned: *{user.name}#{user.discriminator}*')


# Event: User is unbanned
@bot.event
async def on_member_unban(guild, user):
  log_channel = bot.get_channel(LOG_CHANNEL_ID)
  if log_channel:
    await log_channel.send(f'User unbanned: *{user.name}#{user.discriminator}*'
                           )


# Event: User joins the server
@bot.event
async def on_member_join(member):
  log_channel = bot.get_channel(LOG_CHANNEL_ID)
  if log_channel:
    await log_channel.send(
        f'User joined: *{member.name}#{member.discriminator}*')


# Event: User leaves the server
@bot.event
async def on_member_remove(member):
  log_channel = bot.get_channel(LOG_CHANNEL_ID)
  if log_channel:
    await log_channel.send(f'User left: *{member.name}#{member.discriminator}*'
                           )


# Event: User is kicked
@bot.event
async def on_member_remove(member):
  log_channel = bot.get_channel(LOG_CHANNEL_ID)
  if log_channel:
    await log_channel.send(
        f'User kicked: *{member.name}#{member.discriminator}*')


# Event: Bot is added to the server
@bot.event
async def on_guild_join(guild):
  log_channel = bot.get_channel(LOG_CHANNEL_ID)
  if log_channel:
    await log_channel.send(f'Bot added to server: *{guild.name}*')


# Event: User is given/revoked a role
@bot.event
async def on_member_update(before, after):
  log_channel = bot.get_channel(LOG_CHANNEL_ID)
  if log_channel:
    added_roles = set(after.roles) - set(before.roles)
    removed_roles = set(before.roles) - set(after.roles)

    if added_roles:
      await log_channel.send(
          f'Role(s) given: {", ".join([str(role) for role in added_roles])} to *{after.name}#{after.discriminator}*'
      )
    if removed_roles:
      await log_channel.send(
          f'Role(s) revoked: {", ".join([str(role) for role in removed_roles])} from *{after.name}#{after.discriminator}*'
      )


# Event: Role is created/edited/deleted
@bot.event
async def on_guild_role_create(role):
  log_channel = bot.get_channel(LOG_CHANNEL_ID)
  if log_channel:
    await log_channel.send(f'Role created: *{role.name}*')


@bot.event
async def on_guild_role_update(before, after):
  log_channel = bot.get_channel(LOG_CHANNEL_ID)
  if log_channel:
    await log_channel.send(f'Role edited: *{before.name}*')


@bot.event
async def on_guild_role_delete(role):
  log_channel = bot.get_channel(LOG_CHANNEL_ID)
  if log_channel:
    await log_channel.send(f'Role deleted: *{role.name}*')


# Event: User joins/leaves a voice channel
@bot.event
async def on_voice_state_update(member, before, after):
  log_channel = bot.get_channel(LOG_CHANNEL_ID)
  if log_channel:
    if before.channel != after.channel:
      if after.channel:
        await log_channel.send(
            f'User {member.name}#{member.discriminator} joined voice channel: *{after.channel.name}*'
        )
      elif before.channel:
        await log_channel.send(
            f'User {member.name}#{member.discriminator} left voice channel: *{before.channel.name}*'
        )


# Event: User is muted/deafened in a voice channel
@bot.event
async def on_member_update(before, after):
  log_channel = bot.get_channel(LOG_CHANNEL_ID)
  if log_channel:
    if before.mute != after.mute:
      if after.mute:
        await log_channel.send(
            f'User {after.name}#{after.discriminator} was muted.')
      else:
        await log_channel.send(
            f'User {after.name}#{after.discriminator} was unmuted.')

    if before.deaf != after.deaf:
      if after.deaf:
        await log_channel.send(
            f'User {after.name}#{after.discriminator} was deafened.')
      else:
        await log_channel.send(
            f'User {after.name}#{after.discriminator} was undeafened.')


#Event for people who use abusive language
warnings = {}


@bot.event
async def on_message(message):
  if message.author == bot.user:
    return

  abusive_words = ["fuck", "sexy", "motherfucker", "cocksucker", "piss","fuck you","shit","Cornhole","cornhole","Cock","cock","piss off","Asshat","asshat","Chutiye","chutiye","Kutta","kutta","Saala","saala","Kutti","kutti","Saali","saali","bc","BC","BKL","bkl","Behen ke lode","behen ke lode","dick head","asshole","son of a bitch","bastard","bitch","damn","bollocks","bugger","bloddy hell","choad","crikey","rubbish","shag","wanker","Taking the piss","Twat","twat","taking the piss","Fuck","Sexy","Motherfucker","Cocksucker","Piss","Fuck you","Shit","Piss off","Dick head","Asshole","Son of a bitch","Bastard","Bitch","Damn","Bollocks","Bugger","Bloody hell","Choad","Crikey","Rubbish","Shag","Wanker","Slut","slut","Pussy","pussy","Bullshit","bullshit"]
  if any(word in message.content.lower() for word in abusive_words):
    user_id = str(message.author.id)

    if user_id not in warnings:
      warnings[user_id] = 1
      await message.channel.send(
          f"{message.author.mention}, Warning: Abusive language is not allowed."
      )
    else:
      await message.author.ban(reason="Repeated abusive language")
      await message.channel.send(
          f"{message.author.display_name} has been banned for repeated use of abusive language."
      )

  await bot.process_commands(message)


# Run the bot
bot.run(TOKEN)
