onEvent('item.tooltip', event => {
	
  	// Pipez
  	event.add('pipez:item_pipe', [
    [Text.of('Default:'), ' ', Text.of('4'), ' ', Text.of('items/20t')],
    [Text.of('Basic:'), ' ', Text.of('8'), ' ', Text.of('items/15t')],
    [Text.of('Improved:').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('items/10t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('items/5t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('items/t').darkGray()],
    [Text.of('Infinity:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('items/t').darkPurple()],
  	])
  	event.add('pipez:fluid_pipe', [
    [Text.of('Default:'), ' ', Text.of('50'), ' ', Text.of('mB/t')],
    [Text.of('Basic:'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
    [Text.of('Improved:').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('Infinity:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
  	])
  	event.add('pipez:gas_pipe', [
    [Text.of('Default:'), ' ', Text.of('200'), ' ', Text.of('mB/t')],
    [Text.of('Basic:'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
    [Text.of('Improved:').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('Infinity:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
  	])
 	event.add('pipez:energy_pipe', [
    [Text.of('Default:'), ' ', Text.of('256'), ' ', Text.of('FE/t')],
    [Text.of('Basic:'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
    [Text.of('Improved:').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()],
    [Text.of('Infinity:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('FE/t').darkPurple()],
  	])

  	// Upgrades
  	event.add('pipez:basic_upgrade', [
    [Text.of('Item:'), ' ', Text.of('8'), ' ', Text.of('items/t')],
    [Text.of('Fluid:'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
    [Text.of('Gas:'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
    [Text.of('Energy:'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
  	])
  	event.add('pipez:improved_upgrade', [
    [Text.of('Item:').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('items/t').gold()],
    [Text.of('Fluid:').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Gas:').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Energy:').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
  	])
  	event.add('pipez:advanced_upgrade', [
    [Text.of('Item:').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('items/t').darkAqua()],
    [Text.of('Fluid:').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Gas:').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Energy:').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
  	])
  	event.add('pipez:ultimate_upgrade', [
    [Text.of('Item:').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('items/t').darkGray()],
    [Text.of('Fluid:').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('Gas:').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('Energy:').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()],
 	])
  	event.add('pipez:infinity_upgrade', [
    [Text.of('Item:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('items/t').darkPurple()],
    [Text.of('Fluid:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
    [Text.of('Gas:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
    [Text.of('Energy:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('FE/t').darkPurple()],
  	])

	// Akashic Tome Books
	event.add('industrialforegoing:industrial_foregoing', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('allthemodium:allthemodium', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('psi:encyclopaedia_psionica', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('theoneprobe:probenote', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('blue_skies:blue_journal', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('guideapi-vp:vampirism-guidebook', [Text.of('This book is already included within your Akashic Tome').yellow()])			
	event.add('enigmaticlegacy:the_acknowledgment', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('forbidden_arcanus:forbiddenmicon', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('tconstruct:encyclopedia', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('forestcraft:guidebook', [Text.of('This book is already included within your Akashic Tome').yellow()])		
	event.add('astralsorcery:tome', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('alexsmobs:animal_dictionary', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('ftbquests:book', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('evilcraft:origins_of_darkness', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('immersiveengineering:manual', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('engineersdecor:engineersdecor_manual', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('twilightforest:guide', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('eidolon:codex', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('botania:lexicon', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('thermal:guidebook', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('rftoolsbase:manual', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('naturesaura:book', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('storagenetwork:network_book', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('mana-and-artifice:guide_book', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('solcarrot:food_book',[Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('ars_nouveau:worn_notebook', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('bigreactors:erguide', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('bloodmagic:guide', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('mysticalagriculture:guide', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('cyclic:cyclic_guide_book', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('tomeofblood:tome_of_blood', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('supplementaries:supplementaries_guide', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('simplyjetpacks:guidebook', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('securitycraft:sc_manual', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('advancedperipherals:manual', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('extendedcrafting:guide', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('modularrouters:book', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('apotheosis:apoth_chronicle', [Text.of('This book is already included within your Akashic Tome').yellow()])
	event.add('patchouli:gude_book', [Text.of('This book is already included within your Akashic Tome').yellow()])

	event.add('minecraft:water_bucket', [
	[Text.of('The water buckets are stackable to save the space in the inventory.').gold()],
	[Text.of('WARNING:').darkRed()],
	[Text.of('By using them as entire stack they turns into one singular empty bucket.').darkPurple()],
	[Text.of('Use them one by one from the stack.').darkPurple()],
	])

	event.add('minecraft:lava_bucket', [
	[Text.of('The lava buckets are stackable to save the space in the inventory.').gold()],
	[Text.of('WARNING:').darkRed()],
	[Text.of('By using them as entire stack they turns into one singular empty bucket.').darkPurple()],
	[Text.of('Use them one by one from the stack.').darkPurple()],
	])

	event.add('enderstorage:ender_chest', [
	[Text.of('Cross-dimensional wireless item transfer to any chest on the same channel.').gold()],
	[Text.of('Use dye on the colored bars to set the channel.').gold()],
	[Text.of('Use a diamond on the latch to switch to private channel.').gold()],
	])

	event.add('enderstorage:ender_tank', [
	[Text.of('Cross-dimensional wireless item transfer to any chest on the same channel.').gold()],
	[Text.of('Use dye on the colored bars to set the channel.').gold()],
	[Text.of('Use a diamond on the latch to switch to private channel.').gold()],
	])

})
