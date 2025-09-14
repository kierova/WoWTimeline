// World of Warcraft Timeline Data
const worldEvents = {
  0: {
    title: "The First War",
    summary: "",
    details: `
		The Horde enter the Dark Portal and small skirmishes break out with the humans. Rumors spread of monsters in the swamp; most are dismissed as tales.
		<br><br>
		Khadgar is taken in as the apprentice of the Guardian, Medivh, and befriends the half-orc Garona Halforcen who frequently visited the Guardian.
		<br><br>
		The Frostwolves are banished from the Horde and begin sneaking north to find a new home.
		<br><br>
		Blackhand orders the Horde push north and west, far into Stormwind's territories. Many villages and towns are destroyed.
		<br><br>
		The Bleeding Hollow clan pushes into Stranglethorn Vale but are met with strong resistance from the Gurubashi tribe, and eventually retreat.
    `
  },
  1: {
    title: "The First War",
    summary: "",
    details: `
		To combat the Horde, the Northshire Clerics begin entering the battlefield, the humans' first view of a priest on the frontlines.
		<br><br>
		The Old Gods begin contacting Cho'gall and the Twilight's Hammer clan.
		<br><br>
		The Frostwolves arrive in Alterac Valley and Thrall is born, bearing green skin.
		<br><br>
		Durotan and Draka are murdered and leave Thrall for dead, but the infant is soon found by Aedelas Blackmoore.
    `
  },
  3: {
    title: "The First War",
    summary: "",
    details: `
		Redridge falls to the Horde.
		<br><br>
		The Shadow Council moves their operations to Blackrock Mountain.
		<br><br>
		The Horde begins their first siege of Stormwind City. Anduin Lothar leads an assault on the Horde's flank, forcing the Horde to retreat.
		<br><br>
		Garona is allowed entrance to Stormwind by the word of Khadgar, who warns King Llane about Medivh's fall to the Legion.
		<br><br>
		Khadgar and Garona confront Medivh and a battle ensues. Sargeras' spirit, still inside Medivh, magically ages Khadgar well past his prime. Gul'dan sees the battle through Garona's eyes and connects with Medivh to try and learn the Tomb of Sargeras' location. Khadgar slays Medivh and Gul'dan is put into a coma. The death of Medivh causes a catastrophic explosion, scorching the land around Karazhan into Deadwind Pass and turning Brightwood into Duskwood.
		<br><br>
		Seeing the Shadow Council's weakness after Gul'dan's coma, Orgrim Doomhammer challenges Blackhand to a mak'gora. The duel ends with Orgrim crushing Blackhand's skull with Doomhammer, making Orgrim the new Warchief.
		<br><br>
		The Horde besieges Stormwind for a second time.
		<br><br>
		Garona and Khadgar return to Stormwind to inform King Llane of the Guardian's death. In the battle, Gul'dan's old commandments flared brightly in her head once more, and she unwillingly assassinates Llane. The city falls to fire, and Lothar is forced to gather what refugees he can and flee north, burning the remaining ships so the Horde can't follow.
    `
  },
  4: {
    title: "The Second War",
    summary: "",
    details: `
		Orgrim interrogates Garona on the Shadow Council, and marches on Blackrock Spire, executing all the members he could find.
		<br><br>
		Deathwing coaxes the Dragonmaw clan warlocks to find the Demon Soul.
		<br><br>
		Lothar, leading Stormwind's refugees, arrives in Lordaeron, summoning the Seven Kingdoms. In response to Lothar's urging, they form the Council of Seven Nations.
		<br><br>
		The Horde gathers resources and plans their next conquest in pursuit of the refugees.
    `
  },
  5: {
    title: "The Second War",
    summary: "",
    details: `
		Gul'dan creates the first death knights, infused with the souls of his slain Shadow Council.
		<br><br>
		The Horde pushes north, conquering Khaz Modan and trapping the dwarves and gnomes within Ironforge and Gnomeregan.
		<br><br>
		The Council of Seven Nations unanimously votes to form The Alliance of Lordaeron.
		<br><br>
		The Order of the Silver Hand is founded and begins training the first paladins.
		<br><br>
		The Dragonmaw clan bind Alexstrasza in Grim Batol with the Demon Soul, forcing the red dragonflight to the Horde's will.
		<br><br>
		Lothar calls upon an ancient pact, earning the assistance of the Quel'dorei in the war effort.
		<br><br>
		The Horde sail north but are outmatched by the Kul Tiras fleet. Red dragons chase off the Alliance and the Horde make landfall.
    `
  },
  6: {
    title: "The Second War",
    summary: "",
    details: `
		The Battle of Hillsbrad Foothills ensues, leaving much of the landscape in ruin.
		<br><br>
		The Horde frees Zul'jin from human captivity, who in turn pledges the Amani to the Horde's cause.
		<br><br>
		The Horde moves to Quel'Thalas and Gul'dan assists in dismantling the elven runestones.
		<br><br>
		With the assistance of the Horde, the Amani finally begin retaking parts of Eversong. The high elves are pushed back to the walls of Silvermoon, but fail to breach them. Orgrim realizes his resources should be pooled elsewhere and moves his forces southwest towards Alterac, leaving the Amani.
		<br><br>
		Aiden Perenolde strikes a deal with the orcs. They will be allowed passage through Alterac if they spare his city.
		<br><br>
		The Horde begins their siege of Capital City but is met with a strong opposition. Gul'dan abandons the Horde, causing the Horde's loss in the Second War.
		<br><br>
		Gul'dan raises the Broken Shore and makes his way through the Tomb. Defying Kil'jaeden, he and his followers are torn apart by monstrous demons while the rest of his clan is defeated by the Dragonmaw. Cho'gall and the Twilight's Hammer clan flee west to Kalimdor.
		<br><br>
		Khaz Modan is liberated and the dwarves and gnomes readily join the Alliance.
		<br><br>
		Orgrim slays Lothar in combat but is swiftly defeated by Turalyon and captured. Khadgar destroys the Dark Portal, but a rift connecting the two worlds remains. The Second War ends with victory for the Alliance of Lordaeron
    `
  },
    7: {
    title: "Aftermath of the Second War",
    summary: "",
    details: `
		Dal'rend and Maim Blackhand bolster Horde remnants at Blackrock, forming their 'True Horde'. Most orcs flee into the wilderness, traveling in small packs or alone.
		<br><br>
		The Alliance begins the Orcish Internment for their prisoners of war.
		<br><br>
		Aedelas Blackmoore is named lord of Durnholde and secretly raises Thrall as his slave.
		<br><br>
		Nethergarde Keep is established to keep watch over the rift that still exists in the Blasted Lands.
    `
  },
    8: {
    title: "Aftermath of the Second War",
    summary: "",
    details: `
		Ner'zhul reforms what little Horde is left on Draenor then re-opens the Dark Portal with the Skull of Gul'dan. In search of new worlds to conquer, Ner'zhul tasks Teron Gorefiend and the remaining death knights with acquiring artifacts of power; the Scepter of Sargeras, the Eye of Dalaran and the Book of Medivh. Teron Gorefiend and the death knights retrieve all three artifacts.
		<br><br>
		Deathwing pledges his flight to the Horde if they'll take a large number of his eggs with them back to Draenor.
		<br><br>
		The Warsong are tasked with preventing the Alliance from entering the portal, but are beaten back by Turalyon's forces, the Sons of Lothar. The Sons of Lothar invade Draenor, beating back the Horde to Hellfire Citadel. Ner'zhul flees south with the three artifacts to Karabor, now called the Black Temple.
		<br><br>
		While searching for nesting areas, Deathwing and his flight come under assault from the gronn. The most ruthless, Gruul, becomes known as the Dragonkiller after nearly killing Deathwing himself.
		<br><br>
		Ner'zhul uses the power from all three artifacts to call open innumerable dimensional gateways. The influx of power tears apart Draenor into what it is today: Outland.
		<br><br>
		Many orcs flee Draenor to Azeroth and most are captured. Khadgar, still on Draenor, closes the Dark Portal from his side, trapping the Sons of Lothar on a dying world. While Khadgar and the majority of the Sons of Lothar reappeared on Outland, Turalyon and Alleria Windrunner had been trapped in the Twisting Nether, where they were rescued by Xe'ra and the Army of the Light. Ner'zhul, upon jumping through the rifts, is captured by Kil'jaeden and tormented and twisted into the Lich King.
		<br><br>
		The fragmented Horde on Azeroth goes into hiding or exile. Grommash Hellscream hid in the forests of Lordaeron, raiding local villages for food and supplies. Orgrim broke out of his internment, and went deep into exile, only ever meeting with the Frostwolves.
    `
  },
    10: {
    title: "Aftermath of the Second War",
    summary: "",
    details: `
		Battle of Grim Batol - The red dragon in elven guise, Korialstrasz, with the aid of the human mage Rhonin, the high elf ranger Vereesa Windrunner, and the dwarf gryphon rider Falstad Wildhammer, attacked the orcish stronghold in Grim Batol, freeing Alexstrasza from captivity, and destroying the Demon Soul.
		<br><br>
		Cho'gall and the Twilight's Hammer arrive in Kalimdor and establish a base in a cave system beneath Tanaris, seeking to join C'Thun in Ahn'Qiraj. Garona begins assassinating members of the cult, eventually forcing Cho'gall and his followers to flee the area.
		<br><br>
		The Lich King wages war on the Nerubian Empire of Azjol-Nerub.
		<br><br>
		Chieftain Gordok leads the Gordunni across the sea and settles in the ruins of Eldre'thalas, now called Dire Maul, turning into a gladiatorial arena.
    `
  },
    15: {
    title: "Aftermath of the Second War",
    summary: "",
    details: `
		Kel'Thuzad, a skilled necromancer, heeds the voice of the Lich King and travels to Icecrown Citadel. He then creates the Cult of the Damned in service to the Lich King.
		<br><br>
		Thrall breaks out of his internment, leading orcs to break their bonds and form a new Horde.
		<br><br>
		The Alliance splinters after the costly failure of their internment camps.
		<br><br>
		The Kingdoms of Quel'Thalas, Stromgarde and Gilneas leave the Alliance of Lordaeron.
		<br><br>
		King Genn Greymane orders the construction of the Greymane Wall.
		<br><br>
		Kel'Thuzad and the Cult of the Damned begin infecting Andorhal's granaries with the plague.
    `
  },
    18: {
    title: "Aftermath of the Second War",
    summary: "",
    details: `
		Aegwynn uses her power to summon Medivh's spirit on Azeroth. Free of the taint of Sargeras, the Last Guardian decides that he will be the catalyst to unity and decides to warn the other races of the upcoming return of the Burning Legion.
		<br><br>
		Gelbin Mekkatorque is elected High Tinker of Gnomeregan.
    `
  },
    20: {
    title: "The Third War",
    summary: "",
    details: `
		Thrall receives visions from a mysterious figure who warns him of coming darkness and pleads him to travel to Kalimdor. Thrall then rallies the Horde and steals a fleet of human ships, sailing west.
		<br><br>
		The Plague of Undeath spreads across Lordaeron as the Scourge conquers the land. Prince Arthas Menethil is sent to investigate, chasing the source down to Stratholme, and beyond to Northrend, where he is twisted into becoming a death knight. Arthas attacks Stratholme, killing innocent people in hopes of sparing them from turning into undead, eventually confronting the dreadlord Mal'Ganis who spread the plague. Mal'Ganis taunts Arthas into following him to Northrend before vanishing.
		<br><br>
		Arthas chases down Mal'Ganis, setting sail to Northrend with his troops. Here he discovers the runeblade Frostmourne, which claims his soul and turns him into a death knight. He then returns home, slaying his father, and bringing the rest of Lordaeron to ruin.
		<br><br>
		Gnomeregan is invaded by the troggs, Gelbin Mekkatorque decides that the gnomes have to fight alone to let their allies focus on the Scourge in Lordaeron.
		<br><br>
		The Scourge invade and overrun the paladin-protected town of Darrowshire.
		<br><br>
		King Arthas, at the beckoning of the Lich King, recovers the remains of Kel'Thuzad and marches north towards Quel'Thalas to raise the necromancer.
		<br><br>
		The gates of the Greymane Wall are closed to stop the undead. Arugal releases the worgen on Genn Greymane's orders to repel the Scourge. The Worgen Curse begins to spread in Gilneas.
		<br><br>
		The Scourge, lead by Arthas, invade Quel'Thalas and lay ruin to Silvermoon. Using the energies of the Sunwell, Kel'Thuzad is resurrected into a lich, corrupting the Sunwell.
		<br><br>
		Arthas and Kel'Thuzad lay siege to Dalaran to recover the Book of Medivh. Using this tome, they are able to summon Archimonde to Azeroth.
		<br><br>
		Kael'thas Sunstrider returns to Silvermoon, and renames the high elves to blood elves in honor of their fallen kin.
		<br><br>
		The Horde, led by Thrall, makes landfall on Kalimdor and begins to gather their people and search for a new home. They encounter the native tauren and their leader Cairne Bloodhoof, who join them on their journey.
		<br><br>
		After a brief skirmish with Jaina Proudmoore, Grommash Hellscream is sent to build an outpost in Ashenvale. Here he encounters the night elves and a fight quickly breaks out. In desperation, Grom and his clan drink the Blood of Mannoroth to defeat the night elves, slaying the demigod Cenarius.
		<br><br>
		Thrall and Jaina meet at the top of Stonetalon, and are convinced to join an alliance by Medivh. They quickly move to find and cure Grom from the blood-curse. When the bloodlust is lifted, Thrall and Grom confront and slay Mannoroth in what would become Demon Fall Canyon, but Grom soon succumbs to mortal injuries.
		<br><br>
		Archimonde makes his way to Kalimdor, and starts his invasion. Tyrande Whisperwind, in preparation for the invasion, awaken the sleeping druids, including Malfurion Stormrage, and releases the demon hunter Illidan Stormrage to help combat the demons.
    `
  },
    21: {
    title: "The Third War",
    summary: "",
    details: `
		The night elves, along with the orcs lead by Thrall and the humans lead by Jaina, mount a defense at the top of Mount Hyjal against Archimonde. Using an army of wisps, the defenders managed to slay Archimonde.
    `
  },
    22: {
    title: "Rise of the Lich King",
    summary: "",
    details: `
		Marvon Rivetseeker excavates the Broken Pillar in Tanaris.
		<br><br>
		At the behest of Kil'jaeden, Illidan performs a ritual in an attempt to destroy the Frozen Throne, but the ritual disturbs the earth, threatening to tear Azeroth apart. Maiev Shadowsong, along with Malfurion and Tyrande, and even aid from Kael'thas Sunstrider and the blood elves, confront Illidan and stop his ritual. Illidan then flees to Outland hoping to evade Kil'jaeden's wrath.
		<br><br>
		Kael'thas and the blood elves are captured and imprisoned beneath Dalaran by Garithos below Dalaran. Lady Vashj, under the guidance of Illidan, frees Kael'thas and recruits him, offering a solution to his people's magic addiction. Kael'thas follows Vashj into Outland, teaming up with Illidan and Akama to take the Black Temple as a stronghold. Here they are contacted once again by Kil'jaeden, giving Illidan and his cohorts another chance to destroy the Lich King.
		<br><br>
		The banshee Sylvanas Windrunner stages a revolt against Arthas and the scourge, freeing themselves from the Lich King's domination and creating the Forsaken.
		<br><br>
		The Order of the Silver Hand fractures into the Scarlet Crusade and the Argent Dawn.
		<br><br>
		The Lich King, threatened by Illidan's magical attacks, is being weakened and summons Arthas to Icecrown Citadel to defend him. Arthas and Illidan duel, with Arthas being victorious. Arthas ascends Icecrown Citadel and merges with the Lich King Ner'zhul, becoming the next incarnation of the Lich King.
    `
  },
	23: {
    title: "Rise of the Lich King",
    summary: "",
    details: `
		The red dragon Korialstrasz takes the remnant of the Sunwell's energies, creating an avatar in the form of Anveena Teague. Dar'Khan Drathir attempts to use her power to make himself a god, but is destroyed in the process. Anveena then remains at the Sunwell, under the protection of Lor'themar Theron.
		<br><br>
		In Feralas, Cho'gall lures Garona into the open and magically enslaves her, turning her into his servant. The remaining Twilight's Hammer continue into Silithus to join C'Thun.
		<br><br>
		The World Tree Teldrassil is planted off the shore of Darkshore.<br><br>The first Brewfest is organized as a beer-tasting contest between Chen Stormstout, Grimbooze Thunderbrew and Coren Direbrew.
		<br><br>
		The orcs make a permanent settlement in Durotar, naming their new capital Orgrimmar after Ogrim Doomhammer. The Kul'Tiran navy, led by Admiral Daelin Proudmoore landed on the shores of Durotar and attacked the Horde settlements here. Rexxar, Rokhan, and Chen Stormstout team together to help defeat Admiral Proudmoore. Jaina and Thrall come to a peace agreement, allowing the two factions to live in peace.
		<br><br>
		The Forsaken join the Horde.
    `
  },
	24: {
    title: "Rise of the Lich King",
    summary: "",
    details: `
		The Great Lakeshire Drought and the Great Ironforge Flood result from a portal opening within the lake to Ironforge without a liquid filter.
    `
  },
  	25: {
    title: "World of Warcraft",
    summary: "",
    details: `
		Gnomeregan is lost after Sicco Thermaplugg convinces Gelbin Mekkatorque to release lethal radiation in the city, irradiating not only the invading troggs but most of the gnomes as well. Mekkatorque and the gnomes are granted refuge in Ironforge by the dwarves, establishing Tinker Town.
		<br><br>
		King Varian Wrynn is kidnapped. Bolvar Fordragon becomes Regent-Lord of Stormwind.
		<br><br>
		The Lich King reawakens after Arthas' will overpowers Ner'zhul's will, and he begins watching the mortal races and their efforts against the Old Gods and the Burning Legion, creating a plan for invasion based around their responses.
		<br><br>
		The Old Gods spread their influence to cause chaos across Azeroth, but all across the world, adventurers rise up to face these threats.
		<br><br>
		The Searing Blade cultists, a group of warlocks and demons from the Shadow Council, attempt to topple Orgrimmar from the inside. Thrall sends adventurers to infiltrate the cult, and later to slay their leaders.
		<br><br>
		Gryan Stoutmantle sends a group of Alliance soldiers into the deadmines to take out the Defias Brotherhood, lead by Edwin VanCleef. They killed VanCleef and took his head as proof of the deed.
		<br><br>
		Banshee Queen Sylvanas Windrunner dispatches adventurers to kill Archmage Arugal, who is responsible for the outbreak of the worgen curse in Silverpine Forest.
		<br><br>
		A prisoner revolt, led by Bazil Thredd takes control of the Stockade. Warden Thelwater manages to escape the holding area and enlists brave thrill-seekers to venture into the prison and squash the uprising.
		<br><br>
		The Twilight's Hammer takes up residence in the ruins and begins to sacrifice people to Aku'mai, a minion of the Old Gods. The Earthen Ring send heroes down into the depths to wipe out the cultists and their god.
		<br><br>
		High Tinker Gelbin Mekkatorque enlists brave souls to help his people reclaim their beloved city, and put down Mekkatorque's once-trusted advisor, Mekgineer Thermaplugg.
		<br><br>
		Charlga Razorflank stages attacks on rival tribes as well as Horde villages. Some speculate that Charlga has even been negotiating with agents of the Scourge, and adventurers are sent in to wipe out her army of Quillboars.
		<br><br>
		Adventurers are sent into the Monastery to clear it of the Scarlet Crusade and kill High Inquisitor Whitemane.
		<br><br>
		A lich, Amnennar the Coldbringer, takes control of the Quillboar capital and begins twisting them to the Lich King's will. Heroes are sent in to take out the lich and stop the Lich King's plans.
		<br><br>
		The League of Explorers excavates the ancient titan facility, recovering several artifacts, and disabling the Keeper, Archaedas.
		<br><br>
		Adventurers are sent into the Farraki capital to recover a group of lost mercenaries and stop a dangerous demigod from rising.
		<br><br>
		As the headquarters for the Scourge in the Western Plaguelands, adventurers are sent to take out its Scourge overseer, Ras Frostwhisper.
		<br><br>
		Heroes infiltrate Stratholme to squash the Scarlet Crusade leadership, and the Scourge leader of the city, Baron Rivendare.
		<br><br>
		Dagran Thaurissan, Emperor of the Dark Iron clan, is ordered to war against the other dwarves by Firelord Ragnaros. He kidnaps Princess Moira Bronzebeard of Ironforge and they soon fall in love and marry.
		<br><br>
		Magni Bronzebeard sends an elite team of Alliance heroes into the depths to kill Emperor Thaurissan and save his daughter.
		<br><br>
		Moira Thaurissan spreads rumors of Ragnaros' plans, hoping to entice the heroes into defeating him. The Hydraxian Waterlords respond by recruiting heroes from the Alliance and Horde to delve into the Molten Core and defeat Ragnaros.
		<br><br>
		The Horde investigates the increased aggression of the centaur, finding Warug of the Magram clan who informs them of the corruption seeping from the burial grounds of Maraudon.
		<br><br>
		The Horde suppress the violent centaur tribes in Desolace.
		<br><br>
		The Horde infiltrates Maraudon, defeats Princess Theradras, and cleanses the burial grounds.
		<br><br>
		Warug and the Magram tribe unite the rest of the centaur, creating a new age of tranquility amongst them.
		<br><br>
		King Gordok of the Gordunni sends his people out to slaughter everyone they could find indiscriminately. The Horde move to stop him, but discovers the corruption is much deeper than just King Gordok. The Horde confronts the Gordunni and kill King Gordok.
		<br><br>
		The Emerald Nightmare spreads out from this region of the ruins, the heroes of the Horde stop the corruption from spreading and infecting the rest of Feralas.
		<br><br>
		The Horde adventurers discover the Shen'dralar, a secretive sect of Highborne, were feeding off the power of an imprisoned demon, Immol'thar. The Horde banish the demon and kill the elves' leader, Prince Tortheldrin.
		<br><br>
		Short John Mithril begins hosting nonlethal free-for-all arena matches for treasure and glory in the Gurubashi Arena, several times a day.
		<br><br>
		Elemental incursions begin happening throughout Silithus, Un'Goro Crater, Azshara, and Winterspring.
		<br><br>
		Skirmishes between the Alliance and Horde in Warsong Gulch and Alterac Valley become frequent.
		<br><br>
		The Darkmoon Faire gains traction and comes to Mulgore and Elwynn Forest.
		<br><br>
		Moira Thaurissan spread rumors of Dal'rend Blackhand alliance with the black dragon Nefarian, hoping to entice the heroes into defeating them. The Horde champions move through Blackrock Spire, wiping out the Dark Horde's various legions. The Horde continues through the Upper Spire, taking out the Dark Horde's leadership, including Rend himself.
		<br><br>
		Nefarian turns his wrath towards the Horde champions who wiped out his forces, but the Horde faces his wrath head on and slays him. They take the head of Nefarian back to Orgrimmar with them.
		<br><br>
		A skirmish between the League of Arathor and the Forsaken Defilers breaks out in Arathi Basin.
		<br><br>
		The Stranglethorn Fishing Extravaganza begins in Booty Bay, bringing in fishers from all across Azeroth for a fishing tournament.
		<br><br>
		Atal'ai survivors from the Sunken Temple, make their way to Zul'Gurub and enchant the Gurubashi priests, and work to summon Hakkar the Soulflayer. The Zandalar Tribe recruits the Darkspear tribe and their Horde to stop the Atal'ai leader, Jin'do, but were too late to stop Hakkar from entering the world. The Horde champions allowed themselves to be poisoned so when Hakkar drank of their blood, he succumbed to his own dark magic.
		<br><br>
		The Emerald Nightmare spreads from Teldrassil and Fandral Staghelm, struggling to hide it, allows the Cenarion Circle to begin investigating the Nightmare's influence across Kalimdor. The circle sends Horde adventurers into the Wailing Caverns to explore the corruption within, and save the sleeping druid, Naralex, within. The green dragon Itharius calls for the help of the Cenarion Circle to help cleanse the nightmare within effecting several green dragons sleeping within. The circle sends Alliance heroes into the Sunken Temple who put down the corrupted dragons, and even stop an unexpected cult of Atal'ai trolls from summoning Hakkar the Soulflayer. Corrupted green dragons appear around the world from the Emerald Nightmare, and champions of the Horde and Alliance are forced to put them down to stop their rampages.
		<br><br>
		The Cenarion Circle begins exploring Silithus as the corruption spreads, discovering the Twilight's Hammer in the region.
		<br><br>
		Cho'gall and the Twilight's Hammer perform a great ritual, that breaks the Old God C'Thun's bonds, freeing it from its prison below Ahn'Qiraj. Cho'gall leaves to recruit more into the Twilight and free the other Old Gods from captivity, while C'Thun awakens and rallies the qiraji and silithid armies for war.
		<br><br>
		The armies of C'Thun spread from their hives, and the Cenarion Circle calls for help. The Might of Kalimdor is formed and assaults Ahn'Qiraj: The Fallen Kingdom to put an end to C'Thun.
		<br><br>
		The Alliance and Horde begin staging their forward base and gather resources to fund the war effort.
		<br><br>
		The heroes reforge the Scepter of the Shifting Sands and open the Scarab Wall, marching into the Old God's Kingdom. The Horde, led by Varok Saurfang, assaulted the growing army on the surface of Ahn'Qiraj. The Alliance storm into the temple, facing off against Old God's mightiest minions, and defeated C'Thun itself.
		<br><br>
		The Argent Dawn launch an attack on the necropolis of Naxxramas, with Darion Mograine being one of the few survivors after reclaiming the Ashbringer from his father. The Scourge launched a counter-attack on Light's Hope Chapel, which led to Darion making the ultimate sacrifice to save the Argent Dawn, but in turn handing himself and the Ashbringer into the hands of Kel'Thuzad.
		<br><br>
		The Lich King releases several necropoli across Azeroth, the invasion being directed from Naxxramas. Bolvar Fordragon recruits the Alliance heroes to take out Naxxramas and its vile arch-lich overlord.
		<br><br>
		Nozdormu senses a force corrupting the timeways around the events of the War of the Ancients. He dispatches three heroes, Korialstrasz, Rhonin, and Broxigar, to ensure the events of the war play out correctly.
		<br><br>
		Open violence between the Alliance and Horde begins in Silithus and the Eastern Plaguelands.
    `
  },
  	26: {
    title: "The Burning Crusade",
    summary: "",
    details: `
		
    `
  },
  	27: {
    title: "Wrath of the Lich King",
    summary: "",
    details: `
		
    `
  },
  	28: {
    title: "The Cataclysm",
    summary: "",
    details: `
		
    `
  },
  	29: {
    title: "The Hour of Twilight",
    summary: "",
    details: `
		
    `
  },
  	30: {
    title: "Mists of Pandaria",
    summary: "",
    details: `
		
    `
  },
  	31: {
    title: "Warlords of Draenor",
    summary: "",
    details: `
		
    `
  },
  	32: {
    title: "Legion",
    summary: "",
    details: `
		
    `
  },
  	33: {
    title: "Battle for Azeroth",
    summary: "",
    details: `
		
    `
  },
  	35: {
    title: "Shadowlands",
    summary: "",
    details: `
		
    `
  },
  	40: {
    title: "Dragonflight",
    summary: "",
    details: `
		
    `
  },
  	42: {
    title: "The War Within",
    summary: "",
    details: `
		
    `
  },
};

// Character-Specific Events
const characterEvents = {
  5: {
    title: "",
    summary: "Avelyne is born.",
    details: `
      Born to a nobleman father by the name of Lord Evander Dreymont, and a Blackwald witch, 
      Avelyne is left in the care of her ailing mother, raised alone out in the woods.
    `
  },
};
