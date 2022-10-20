//ITEM TAGS
onEvent('item.tags', (event) => {

    let alltheores = ['aluminum', 'copper', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc']
    let allthemodiumores = ['allthemodium', 'vibranium', 'unobtainium']

    allthemodiumores.forEach(item => {
        event.add(`mekanism:clumps/${item}`, `allthemodium:${item}_clump`)
        event.add(`mekanism:clumps`, `#mekanism:clumps/${item}`)
        event.add(`mekanism:dirty_dusts/${item}`, `allthemodium:dirty_${item}_dust`)
        event.add(`mekanism:dirty_dusts`, `#mekanism:dirty_dusts/${item}`)
        event.add(`mekanism:shards/${item}`, `allthemodium:${item}_shard`)
        event.add(`mekanism:shards`, `#mekanism:shards/${item}`)
        event.add(`mekanism:crystals/${item}`, `allthemodium:${item}_crystal`)
        event.add(`mekanism:crystals`, `#mekanism:crystals/${item}`)
    })
    alltheores.forEach(item => {
        event.add(`mekanism:clumps/${item}`, `alltheores:${item}_clump`)
        event.add(`mekanism:clumps`, `#mekanism:clumps/${item}`)
        event.add(`mekanism:dirty_dusts/${item}`, `alltheores:dirty_${item}_dust`)
        event.add(`mekanism:dirty_dusts`, `#mekanism:dirty_dusts/${item}`)
        event.add(`mekanism:shards/${item}`, `alltheores:${item}_shard`)
        event.add(`mekanism:shards`, `#mekanism:shards/${item}`)
        event.add(`mekanism:crystals/${item}`, `alltheores:${item}_crystal`)
        event.add(`mekanism:crystals`, `#mekanism:crystals/${item}`)
    })
        event.add('forge:stone', ['quark:deepslate', 'the_afterlight:afterlight_rock'])
        event.add('forge:marble', '#chisel:marble')
        event.add('forge:bookshelves', ['the_afterlight:moon_bookshelf', 'the_afterlight:gloom_shelf'])
        event.add('chisel:marble', ['astralsorcery:marble_raw', 'quark:marble'])
        event.add('chisel:limestone', ['create:limestone', 'create:weathered_limestone', 'quark:limestone'])
        event.add('chisel:basalt', ['minecraft:basalt', 'minecraft:polished_basalt'])
        event.add('chisel:sandstone', ['minecraft:sandstone', 'minecraft:chiseled_sandstone', 'minecraft:cut_sandstone', 'minecraft:smooth_sandstone'])
        event.add('chisel:metals/aluminum', 'alltheores:aluminum_block')
        event.add('chisel:metals/bronze', 'thermal:bronze_block')
        event.add('chisel:emerald', 'minecraft:emerald_block')
        event.add('chisel:redstone', 'minecraft:redstone_block')
        event.add('chisel:coal', 'minecraft:coal_block')
        event.add('chisel:charcoal', 'thermal:charcoal_block')
        event.add('chisel:end_stone', 'minecraft:end_stone')
        event.add('minecraft:logs_unstripped', '/^.+:(?!stripped_).+_log$/')
        event.add('minecraft:logs', ['the_afterlight:gloom_wood', 'the_afterlight:moonlight_log'])
        event.add('forge:swords', ['allthemodium:alloy_paxel', 'allthemodium:alloy_sword'])
        event.add('forge:dusts/certus_quartz', ['appliedenergistics2:certus_quartz_dust'])
        event.add('forge:ores/arcane_brick', 'ars_nouveau:arcane_ore')
        event.add('forge:ores/dimensionalshard', ['rftoolsbase:dimensionalshard_overworld', 'rftoolsbase:dimensionalshard_nether', 'rftoolsbase:dimensionalshard_end'])
        event.add('forge:ores', ['#forge:ores/certus_quartz', '#forge:ores/oratchalcum', '#forge:ores/rat_gem', '#forge:ores/dimensionalshard', '#forge:ores/arcane_brick'])
        event.add('forge:plastic', ['mekanism:hdpe_sheet'])
        event.add('misctags:farmland/tier6', ['mysticalagradditions:insanium_farmland'])
        event.add('misctags:farmland/tier5', ['mysticalagriculture:supremium_farmland', '#misctags:farmland/tier6'])
        event.add('misctags:farmland/tier4', ['mysticalagriculture:imperium_farmland', '#misctags:farmland/tier5'])
        event.add('misctags:farmland/tier3', ['mysticalagriculture:tertium_farmland', '#misctags:farmland/tier4'])
        event.add('misctags:farmland/tier2', ['mysticalagriculture:prudentium_farmland', '#misctags:farmland/tier3'])
        event.add('misctags:farmland/tier1', ['mysticalagriculture:inferium_farmland', '#misctags:farmland/tier2'])
        event.add('misctags:biofuel2', ['#minecraft:saplings', '#minecraft:leaves', '#forge:seeds', 'minecraft:dried_kelp', 'minecraft:kelp', 'minecraft:seagrass', 'minecraft:grass'])
        event.add('misctags:biofuel4', ['#forge:fruits', 'minecraft:tall_grass', 'minecraft:nether_sprouts', 'minecraft:dried_kelp_block', 'minecraft:cactus', 'minecraft:sugar_cane', 'minecraft:weeping_vines', 'minecraft:twisting_vines', 'minecraft:vine', 'minecraft:melon_slice', 'byg:skyris_vine', 'byg:embur_gel_vines'])
        event.add('misctags:biofuel5', ['#forge:vegetables', '#forge:cookies', '#forge:flour_plants', '#forge:mushrooms', '#forge:mushroom_stems', '#minecraft:flowers', 'minecraft:lily_pad', 'minecraft:sea_pickle', 'minecraft:shroomlight', 'minecraft:large_fern', 'minecraft:fern', 'minecraft:crimson_roots', 'minecraft:warped_roots', 'minecraft:carved_pumpkin', 'minecraft:nether_wart', 'minecraft:cocoa_beans'])
        event.add('misctags:biofuel7', ['#minecraft:wart_blocks', '#forge:mushroom_caps', 'minecraft:baked_potato', 'minecraft:hay_block', '#forge:bread'])
        event.add('misctags:biofuel8', ['minecraft:cake', 'minecraft:pumpkin_pie'])
        event.add('forge:axes', ['byg:pendorite_battleaxe'])
        event.add('forge:pickaxes', ['allthemodium:alloy_pick'])
        event.add('minecraft:stone_tool_materials', ['#forge:stone', '#forge:cobblestone'])
        event.add('minecraft:stone_crafting_materials', ['#forge:stone', '#forge:cobblestone'])
        event.add('appliedenergistics2:nether_quartz_dust', '#forge:dusts/quartz')
        event.add('appliedenergistics2:dusts/nether_quartz', '#forge:dusts/quartz')
        event.add('appliedenergistics2:dusts/quartz', '#forge:dusts/quartz')
        event.add('appliedenergistics2:dusts/ender', '#forge:dusts/ender_pearl')
        event.add('forge:seeds', 'immersiveengineering:seed')
        event.add('engineerstools:musli_bar_seeds', '#forge:seeds')
        event.add('forge:ingots', ['#forge:ingots/unobtainium_allthemodium_alloy', '#forge:ingots/vibranium_unobtainium_alloy', '#forge:ingots/vibranium_allthemodium_alloy', '#forge:ingots/oratchalcum'])
        event.add('forge:sand', ['byg:white_sand', 'byg:black_sand', 'byg:purple_sand', 'byg:blue_sand'])
        event.add('forge:nuggets', '#forge:nuggets/oratchalcum')
        event.add('forge:fruits', 'byg:holly_berries')
        event.add('forge:milk', ['blue_skies:ventium_milk_bucket', 'pamhc2foodcore:freshmilkitem', 'pamhc2foodextended:soymilkitem'])
        event.add('forge:gems/dimensionalshard', 'rftoolsbase:dimensionalshard')
        event.add('forge:mushroom_caps/black_puff_mushroom', 'byg:black_puff_mushroom_block')
        event.add('forge:mushroom_caps/blue_glowshroom', 'byg:blue_glowshroom_block')
        event.add('forge:mushroom_caps/weeping_milkcap_mushroom', 'byg:weeping_milkcap_mushroom_block')
        event.add('forge:mushroom_caps/green_mushroom', 'byg:green_mushroom_block')
        event.add('forge:mushroom_caps/purple_glowshroom', 'byg:purple_glowshroom_block')
        event.add('forge:mushroom_caps/brown_mushroom', 'minecraft:brown_mushroom_block')
        event.add('forge:mushroom_caps/red_mushroom', 'minecraft:red_mushroom_block')
        event.add('forge:mushroom_stems/brown_mushroom', 'byg:brown_mushroom_stem')
        event.add('forge:mushroom_stems/red_glowshroom', 'byg:red_glowshroom_stem')
        event.add('forge:mushroom_stems/white_mushroom', 'byg:white_mushroom_stem')
        event.add('forge:mushroom_stems/yellow_glowshroom', 'byg:yellow_glowshroom_stem')
        event.add('forge:mushroom_stems/mushroom', 'minecraft:mushroom_stem')
        event.add('forge:mushroom_caps', ['#forge:mushroom_caps/red_mushroom', '#forge:mushroom_caps/brown_mushroom', '#forge:mushroom_caps/blue_glowshroom', '#forge:mushroom_caps/purple_glowshroom', '#forge:mushroom_caps/green_mushroom', '#forge:mushroom_caps/black_puff_mushroom', '#forge:mushroom_caps/weeping_milkcap_mushroom', 'undergarden:indigo_mushroom_cap', 'undergarden:veil_mushroom_cap', 'undergarden:ink_mushroom_cap', 'undergarden:blood_mushroom_cap', 'blue_skies:snowcap_mushroom_block'])
        event.add('forge:mushroom_stems', ['#forge:mushroom_stems/mushroom', '#forge:mushroom_stems/brown_mushroom', '#forge:mushroom_stems/white_mushroom', '#forge:mushroom_stems/red_glowshroom', '#forge:mushroom_stems/yellow_glowshroom'])
        event.add('forge:mushrooms', ['minecraft:warped_fungus', 'minecraft:crimson_fungus', 'byg:blue_glowshroom', 'byg:purple_glowshroom'])
        event.add('forge:storage_blocks', '#forge:storage_blocks/uraninite')
        event.add('forge:gems', '#forge:gems/dimensionalshard')
        event.add('misctags:flowers/draconic_flowers', 'minecraft:dragon_egg')
        event.add('misctags:flowers/end_flowers', ['minecraft:chorus_flower', 'minecraft:chorus_plant'])
        event.add('misctags:flowers/end_flower', ['minecraft:chorus_flower', 'minecraft:chorus_plant'])
        event.add('misctags:flowers/forest_flowers', ['#minecraft:flowers', 'minecraft:sweet_berries'])
        event.add('misctags:flowers/glowing_flowers', ['minecraft:shroomlight', 'minecraft:glowstone', 'minecraft:redstone_lamp'])
        event.add('misctags:flowers/magical_flowers', ['#botania:special_flowers', '#botania:mystical_flowers', '#botania:double_mystical_flowers'])
        event.add('misctags:flowers/nether_flowers', ['minecraft:crimson_fungus', 'minecraft:warped_fungus', 'minecraft:nether_wart', 'minecraft:crimson_roots', 'minecraft:warped_roots', 'minecraft:weeping_vines', 'minecraft:twisting_vines'])
        event.add('misctags:flowers/swamp_flowers', ['byg:tiny_lilypads', 'byg:reeds', 'byg:cattail', 'minecraft:lily_pad', 'minecraft:sugar_cane', 'minecraft:brown_mushroom', 'minecraft:red_mushroom'])
        event.add('misctags:flowers/wither_flowers', 'minecraft:wither_rose')
        event.add('forge:storage_blocks/nether_star', 'allthecompressed:nether_star_block')
        event.add('forge:storage_blocks', ['#forge:storage_blocks/nether_star'])
        event.add('dankstorage:blacklisted_usage', '/^usefulbackpacks:/')
        event.add('minecraft:wart_blocks', '/.+_wart_block/')
        event.add('forge:axes', ['/.+_axe/', '/.+_paxel/', '/.+:axe_.+/'])
        event.add('forge:pickaxes', ['/.+_pickaxe/', '/.+_paxel/', '/.+:pickaxe_.+/'])
        event.add('forge:shovels', ['/.+_shovel/', '/.+_paxel/', '/.+:shovel_.+/'])
        event.add('forge:swords', ['/.+_sword/', '/.+:sword_.+/'])
        event.add('forge:hoes', ['/.+_hoe/', '/.+:hoe_.+/'])
        event.add('forge:simple_honeycombs', '/^.+:(?!(catnip|rgbee)_).*honeycomb$/')
        event.add('forge:simple_honeycomb_blocks', '/^.+:(?!(catnip|rgbee)_).*honeycomb_block$/')
        event.add('minecraft:wooden_buttons', '/forbidden_arcanus:.+_button/')
        event.add('minecraft:wooden_slabs', ['the_afterlight:gloom_wood_plank_slab', 'the_afterlight:moonlight_slab'])
        event.add('minecraft:planks', '/forbidden_arcanus:.+_planks/')
        event.add('minecraft:planks', ['the_afterlight:gloom_wood_planks', 'the_afterlight:moonlight_planks'])
        event.add('misctags:water/items', ['#forge:water', 'minecraft:water_bucket', 'create:honey_bucket', 'create:chocolate_bucket', 'mysticalagriculture:water_essence'])
        event.add('misctags:immersive_engineering_hammer', 'immersiveengineering:hammer')
        event.add('misctags:immersive_engineering_wirecutter', 'immersiveengineering:wirecutter')
        event.add('misctags:botany_pots', colors.map(color => `botanypots:${color}_botany_pot`).concat('botanypots:botany_pot'))
        event.add('forbidden_arcanus:indestructible_blacklisted', /^cb_microblock:[\w]+_saw$/)
        event.add('mana-and-artifice:stonecutter_resettable_redstone_arcane_stones', [
            'mana-and-artifice:decoration/redstone_arcane_stone_straight',
            'mana-and-artifice:decoration/redstone_arcane_stone_corner',
            'mana-and-artifice:decoration/redstone_arcane_stone_t',
            'mana-and-artifice:decoration/redstone_arcane_stone_quad',
            'mana-and-artifice:decoration/redstone_arcane_stone_chiseled',
            'mana-and-artifice:decoration/redstone_arcane_stone_pillar',
        ])
        event.add('mana-and-artifice:stonecutter_resettable_redstone_arcane_sandstones', [
            'mana-and-artifice:decoration/redstone_arcane_sandstone_straight',
            'mana-and-artifice:decoration/redstone_arcane_sandstone_corner',
            'mana-and-artifice:decoration/redstone_arcane_sandstone_t',
            'mana-and-artifice:decoration/redstone_arcane_sandstone_quad',
            'mana-and-artifice:decoration/redstone_arcane_sandstone_chiseled',
            'mana-and-artifice:decoration/redstone_arcane_sandstone_pillar',
        ])
        event.add('forge:rawfishes', '#forge:raw_fishes')
        event.add('forge:grains', ['#forg:grain/wheat', '#forge:grain/amaranth', '#forge:grain/barley', '#forge:grain/millet', '#forge:grain/oats', '#forge:grain/quinoa', '#forge:grain/rice', '#forge:grain/rye'])
        event.add('forge:arrow_top', [
            'minecraft:flint',
            'byg:therium_shard',
            'xreliquary:guardian_spike',
            'alexsmobs:bone_serpent_tooth',
            'alexsmobs:shark_tooth',
            'alexsmobs:cachalot_whale_tooth',
            'ambient_world:hippo_tooth',
            'werewolves:werewolf_tooth',
            'mod_lavacow:sharptooth',
            'upgrade_aquatic:thrasher_tooth'
        ])
        event.add('forge:feathers', 'forestcraft:terror_bringer_feather')
        event.add('forge:water', ['evilcraft:bucket_eternal_water', 'blue_skies:ventium_water_bucket', 'forbidden_arcanus:edelwood_water_bucket'])


    //Tag removals
        event.remove(`minecraft:small_flowers`, `#botania:special_flowers`)
        event.remove('forge:leather', 'forbidden_arcanus:rotten_leather')
        event.remove('engineerstools:musli_bar_food_blacklisted', 'minecraft:chicken')
        event.remove('forge:dyes/yellow', 'mekanism:dust_sulfur')
        event.remove('forge:nether_stars', 'forbidden_arcanus:dark_nether_star')
        event.remove('curios:head', 'botania:flight_tiara')
        event.remove('appliedenergistics2:glass', ['#forge:glass', 'minecraft:glass'])
        event.remove('appliedenergistics2:metal_ingots', ['#forge:ingots/gold', '#forge:ingots/iron'])
        event.remove('appliedenergistics2:wool', '#minecraft:wool')
        event.remove('appliedenergistics2:workbench', 'minecraft:crafting_table')
        event.remove('forge:cheese/silkentofu', 'pamhc2foodextended:silkentofuitem')
        event.remove('forge:chests/personal', 'mekanism:personal_chest')
        event.remove('forge:chests/electric', 'mekanism:personal_chest')
        event.remove('forge:chests', 'mekanism:personal_chest')

    //Astral Sorcery
    var addStar = [
        'astralsorcery:shifting_star_vicio',
        'astralsorcery:shifting_star_evorsio',
        'astralsorcery:shifting_star_discidia',
        'astralsorcery:shifting_star_armara',
        'astralsorcery:shifting_star_aevitas'
    ]
    event.get('astralsorcery:stars/irradiant').add(addStar)
    event.add('astralsorcery:crystals/collector', ['astralsorcery:celestial_collector_crystal', 'astralsorcery:rock_collector_crystal'])
    event.add('astralsorcery:crystals/attuned', ['astralsorcery:attuned_celestial_crystal', 'astralsorcery:attuned_rock_crystal'])
	event.add('astralsorcery:constellations', 'astralsorcery:constellation_paper')

    //Chest
    var addChests = [
        'minecraft:chest',
		'quark:oak_chest',
		'quark:spruce_chest',
		'quark:birch_chest',
		'quark:jungle_chest',
		'quark:acacia_chest',
		'quark:dark_oak_chest',
		'quark:crimson_chest',
		'quark:warped_chest',
		'quark:prismarine_chest',
		'quark:nether_brick_chest',
		'upgrade_aquatic:driftwood_chest',
		'upgrade_aquatic:river_chest'
    ]
    event.get('regular_chest:chest').add(addChests)

    //BLUE SKIES
    //Spears
    var addSpears = [
        'blue_skies:bluebright_spear',
		'blue_skies:starlit_spear',
        'blue_skies:frostbright_spear',
        'blue_skies:lunar_spear',
        'blue_skies:dusk_spear',
        'blue_skies:maple_spear',
        'blue_skies:cherry_spear'
    ]
    event.get('blue_skies:spears').add(addSpears)

    //Summoner Artifact Drops
    var addSummoner_Drops = [
        'blue_skies:ethereal_arc',
		'blue_skies:soulbound_spear',
        'blue_skies:summoning_tome',
        'blue_skies:summoning_table',
        'blue_skies:blinding_rage'
    ]
    event.get('blue_skies:summoner_drops').add(addSummoner_Drops)

    //Starlit Crusher Artifact Drops
    var addStarlit_Crusher_Drops = [
        'blue_skies:crushing_hammer',
		'blue_skies:nature_arc',
        'blue_skies:defying_starlight'
    ]
    event.get('blue_skies:starlit_crusher_drops').add(addStarlit_Crusher_Drops)

    //Alchemist Artifact Drops
    var addAlchemist_Drops = [
        'blue_skies:spike_shield',
		'blue_skies:dusk_arc',
        'blue_skies:alchemy_table',
        'blue_skies:blinding_rage'
    ]
    event.get('blue_skies:alchemist_drops').add(addAlchemist_Drops)

    //Arachnarch Artifact Drops
    var addArachnarch_Drops = [
        'blue_skies:venom_sac',
		'blue_skies:poison_arc',
        'blue_skies:different_sword',
        'blue_skies:venomous_encounter'
    ]
    event.get('blue_skies:arachnarch_drops').add(addArachnarch_Drops)

    //Rats Marbled Cheese
    var addMarbledCheese = [
        'rats:marbled_cheese_raw',
        'rats:marbled_cheese',
        'rats:marbled_cheese_tile',
        'rats:marbled_cheese_chiseled',
        'rats:marbled_cheese_pillar',
        'rats:marbled_cheese_brick',
        'rats:marbled_cheese_brick_chiseled',
        'rats:marbled_cheese_brick_cracked',
        'rats:marbled_cheese_brick_mossy'
    ]
    event.get('marbled_cheese:marbeld_cheese').add(addMarbledCheese)

    //Doggy Talents
    event.add('doggytalents:beds', 'doggytalents:dog_bed' )

    //Ender Bag
    var addBag = [
        'ender_bags:white_bag',
		'ender_bags:orange_bag',
		'ender_bags:magenta_bag',
		'ender_bags:light_blue_bag',
		'ender_bags:yellow_bag',
		'ender_bags:lime_bag',
		'ender_bags:pink_bag',
		'ender_bags:gray_bag',
		'ender_bags:light_gray_bag',
		'ender_bags:cyan_bag',
		'ender_bags:purple_bag',
		'ender_bags:blue_bag',
		'ender_bags:brown_bag',
		'ender_bags:green_bag',
		'ender_bags:red_bag',
		'ender_bags:black_bag'
    ]
    event.get('ender_bags:ender_bag').add(addBag)

    //Industrial Foregoing
    event.add('industrialforegoing:bioreactor', '#forge:crops')

    //Mineclonies
    event.add('minecolonies:supply_deployers', ['minecolonies:supplychestdeployer','minecolonies:supplycampdeployer'])

    //Mining Gadgets
    var addMiner = [
        'mininggadgets:mininggadget_simple',
        'mininggadgets:mininggadget_fancy',
        'mininggadgets:mininggadget'
    ]
    event.get('mininggadgets:mininggadget').add(addMiner)

    //Mystic Alagriculture
    event.add('misctags:farmland/tier1', ['mysticalagriculture:inferium_farmland', '#misctags:farmland/tier2'])
    event.add('misctags:farmland/tier2', ['mysticalagriculture:prudentium_farmland', '#misctags:farmland/tier3'])
    event.add('misctags:farmland/tier3', ['mysticalagriculture:tertium_farmland', '#misctags:farmland/tier4'])
    event.add('misctags:farmland/tier4', ['mysticalagriculture:imperium_farmland', '#misctags:farmland/tier5'])
    event.add('misctags:farmland/tier5', ['mysticalagriculture:supremium_farmland', '#misctags:farmland/tier6'])
    event.add('misctags:farmland/tier6', 'mysticalagradditions:insanium_farmland')

    //RFTools
    //Crafters
    for (i = 1; i <= 3; i++) {
        event.get('rftools:crafter').add('rftoolsutility:crafter' + i)
    }
    //Power Cells
    for (i = 1; i <= 3; i++) {
        event.get('rftools:powercell').add('rftoolspower:cell' + i)
    }
    //Dimensional Cells
    var dimtiers = ['_simple', '', '_advanced']
    dimtiers.forEach(function (tier) {
        event.get('rftools:dimensionalcell').add('rftoolspower:dimensionalcell' + tier)
    })
    //Quarry Shape Cards
    var quarrycards = ['_fortune', '_silk', '']
    quarrycards.forEach(function (card) {
        event.get('rftools:quarrycard').add('rftoolsbuilder:shape_card_quarry' + card)
        event.get('rftools:quarrycard').add('rftoolsbuilder:shape_card_quarry_clear' + card)
    })
    //Fluid Shape Cards
    event.get('rftools:fluidcard').add('rftoolsbuilder:shape_card_liquid')
    event.get('rftools:fluidcard').add('rftoolsbuilder:shape_card_pump')
    event.get('rftools:fluidcard').add('rftoolsbuilder:shape_card_pump_clear')

    //Storage Drawers
    //Full Drawers 1x1
    var drawer1x1 =[
        'storagedrawers:oak_full_drawers_1',
        'storagedrawers:spruce_full_drawers_1',
        'storagedrawers:birch_full_drawers_1',
        'storagedrawers:jungle_full_drawers_1',
        'storagedrawers:acacia_full_drawers_1',
        'storagedrawers:dark_oak_full_drawers_1'
    ]
    event.get('storagedrawers:full_drawers_1').add(drawer1x1)
    //Full Drawers 1x2
    var drawer1x2 =[
        'storagedrawers:oak_full_drawers_2',
        'storagedrawers:spruce_full_drawers_2',
        'storagedrawers:birch_full_drawers_2',
        'storagedrawers:jungle_full_drawers_2',
        'storagedrawers:acacia_full_drawers_2',
        'storagedrawers:dark_oak_full_drawers_2'
    ]
    event.get('storagedrawers:full_drawers_2').add(drawer1x2)
    //Full Drawers 2x2
    var drawer2x2 =[
        'storagedrawers:oak_full_drawers_4',
        'storagedrawers:spruce_full_drawers_4',
        'storagedrawers:birch_full_drawers_4',
        'storagedrawers:jungle_full_drawers_4',
        'storagedrawers:acacia_full_drawers_4',
        'storagedrawers:dark_oak_full_drawers_4'
    ]
    event.get('storagedrawers:full_drawers_4').add(drawer2x2)
    //Drawers Trim
    var addTrim =[
        'storagedrawers:oak_trim',
        'storagedrawers:spruce_trim',
        'storagedrawers:birch_trim',
        'storagedrawers:jungle_trim',
        'storagedrawers:acacia_trim',
        'storagedrawers:dark_oak_trim'
    ]
    event.get('storagedrawers:drawers_trim').add(addTrim)

    //Tinkers' Construct
    event.add('tconstruct:part_builders', 'tconstruct:part_builder')
    event.add('tconstruct:tinker_stations', 'tconstruct:tinker_station')
    event.add('tconstruct:crafting_stations', 'tconstruct:crafting_station')
    event.add('tconstruct:tinkers_anvils', 'tconstruct:tinkers_anvil')

    //Tetra
    //var hammerUpgrades = [
        //'tetra:combustion_chamber',
        //'tetra:planar_stabilizer',
        //'tetra:vent_plate'
    //]
    //event.get('tetra:forge_hammer_upgrades').add(hammerUpgrades)

    //Botany Pots
    event.add('misctags:botany_pots', colors.map(color => `botanypots:${color}_botany_pot`).concat('botanypots:botany_pot'))
    event.add('misctags:botany_pots', colors.map(color => `botanypotstiers:elite_${color}_botany_pot`).concat('botanypotstiers:elite_botany_pot'))
    event.add('misctags:botany_pots', colors.map(color => `botanypotstiers:ultra_${color}_botany_pot`).concat('botanypotstiers:ultra_botany_pot'))
    event.add('misctags:botany_pots', colors.map(color => `botanypotstiers:creative_${color}_botany_pot`).concat('botanypotstiers:creative_botany_pot'))

    //Imersive Engineering
    event.add('misctags:immersive_engineering_hammer', 'immersiveengineering:hammer')

    //Mushrooms
    event.add('forge:mushroom_caps/black_puff_mushroom', 'byg:black_puff_mushroom_block')
    event.add('forge:mushroom_caps/blue_glowshroom', 'byg:blue_glowshroom_block')
    event.add('forge:mushroom_caps/weeping_milkcap_mushroom', 'byg:weeping_milkcap_mushroom_block')
    event.add('forge:mushroom_caps/green_mushroom', 'byg:green_mushroom_block')
    event.add('forge:mushroom_caps/purple_glowshroom', 'byg:purple_glowshroom_block')
    event.add('forge:mushroom_caps/brown_mushroom', 'minecraft:brown_mushroom_block')
    event.add('forge:mushroom_caps/red_mushroom', 'minecraft:red_mushroom_block')
    event.add('forge:mushroom_stems/brown_mushroom', 'byg:brown_mushroom_stem')
    event.add('forge:mushroom_stems/red_glowshroom', 'byg:red_glowshroom_stem')
    event.add('forge:mushroom_stems/white_mushroom', 'byg:white_mushroom_stem')
    event.add('forge:mushroom_stems/yellow_glowshroom', 'byg:yellow_glowshroom_stem')
    event.add('forge:mushroom_stems/mushroom', 'minecraft:mushroom_stem')
    event.add('forge:mushroom_caps', ['#forge:mushroom_caps/red_mushroom', '#forge:mushroom_caps/brown_mushroom', '#forge:mushroom_caps/blue_glowshroom', '#forge:mushroom_caps/purple_glowshroom', '#forge:mushroom_caps/green_mushroom', '#forge:mushroom_caps/black_puff_mushroom', '#forge:mushroom_caps/weeping_milkcap_mushroom'])
    event.add('forge:mushroom_stems', ['#forge:mushroom_stems/mushroom', '#forge:mushroom_stems/brown_mushroom', '#forge:mushroom_stems/white_mushroom', '#forge:mushroom_stems/red_glowshroom', '#forge:mushroom_stems/yellow_glowshroom'])
    event.add('forge:mushrooms', ['minecraft:warped_fungus', 'minecraft:crimson_fungus', 'byg:blue_glowshroom', 'byg:purple_glowshroom'])

    event.add('forge:mushroom_caps/black_puff_mushroom', 'byg:black_puff_mushroom_block')
    event.add('forge:mushroom_caps/blue_glowshroom', 'byg:blue_glowshroom_block')
    event.add('forge:mushroom_caps/weeping_milkcap_mushroom', 'byg:weeping_milkcap_mushroom_block')
    event.add('forge:mushroom_caps/green_mushroom', 'byg:green_mushroom_block')
    event.add('forge:mushroom_caps/purple_glowshroom', 'byg:purple_glowshroom_block')
    event.add('forge:mushroom_caps/brown_mushroom', 'minecraft:brown_mushroom_block')
    event.add('forge:mushroom_caps/red_mushroom', 'minecraft:red_mushroom_block')
    event.add('forge:mushroom_stems/brown_mushroom', 'byg:brown_mushroom_stem')
    event.add('forge:mushroom_stems/red_glowshroom', 'byg:red_glowshroom_stem')
    event.add('forge:mushroom_stems/white_mushroom', 'byg:white_mushroom_stem')
    event.add('forge:mushroom_stems/yellow_glowshroom', 'byg:yellow_glowshroom_stem')
    event.add('forge:mushroom_stems/mushroom', 'minecraft:mushroom_stem')
    event.add('forge:mushroom_caps', ['#forge:mushroom_caps/red_mushroom', '#forge:mushroom_caps/brown_mushroom', '#forge:mushroom_caps/blue_glowshroom', '#forge:mushroom_caps/purple_glowshroom', '#forge:mushroom_caps/green_mushroom', '#forge:mushroom_caps/black_puff_mushroom', '#forge:mushroom_caps/weeping_milkcap_mushroom'])
    event.add('forge:mushroom_stems', ['#forge:mushroom_stems/mushroom', '#forge:mushroom_stems/brown_mushroom', '#forge:mushroom_stems/white_mushroom', '#forge:mushroom_stems/red_glowshroom', '#forge:mushroom_stems/yellow_glowshroom'])
    event.add('forge:mushrooms', ['minecraft:warped_fungus', 'minecraft:crimson_fungus', 'byg:blue_glowshroom', 'byg:purple_glowshroom'])
    
    //Pam's
    event.add('forge:soysauce', 'pamhc2foodextended:soysauceitem')
    event.add('forge:vanilla', 'pamhc2foodextended:vanillaitem')
    event.add('forge:crops/mustard', 'pamhc2crops:mustardseedsitem')
    event.add('forge:crop/peach', 'pamhc2trees:peachitem')
    event.add('pamhc2foodcore:basicfishsandwhichitem', 'pamhc2foodcore:basicfishsandwichitem')
    event.add('pamhc2foodextended:cottoncandyitem', 'pamhc2foodcore:cottoncandyitem')
    event.add('pamhc2foodcore:mashedpotatoes', 'pamhc2foodcore:mashedpotatoesitem')

    //Banner Patterns
    event.add('misctags:banner/patterns', [
        'minecraft:flower_banner_pattern',
        'minecraft:creeper_banner_pattern',
        'minecraft:skull_banner_pattern',
        'minecraft:mojang_banner_pattern',
        'minecraft:globe_banner_pattern',
        'minecraft:piglin_banner_pattern',
        'iceandfire:banner_pattern_fire',
        'iceandfire:banner_pattern_ice',
        'iceandfire:banner_pattern_lightning',
        'iceandfire:banner_pattern_fire_head',
        'iceandfire:banner_pattern_ice_head',
        'iceandfire:banner_pattern_lightning_head',
        'iceandfire:banner_pattern_amphithere',
        'iceandfire:banner_pattern_bird',
        'iceandfire:banner_pattern_eye',
        'iceandfire:banner_pattern_fae',
        'iceandfire:banner_pattern_feather',
        'iceandfire:banner_pattern_gorgon',
        'iceandfire:banner_pattern_hippocampus',
        'iceandfire:banner_pattern_hippogryph_head',
        'iceandfire:banner_pattern_mermaid',
        'iceandfire:banner_pattern_sea_serpent',
        'iceandfire:banner_pattern_troll',
        'iceandfire:banner_pattern_weezer',
        'iceandfire:banner_pattern_dread',
        'alexsmobs:banner_pattern_bear',
        'alexsmobs:banner_pattern_australia_0',
        'alexsmobs:banner_pattern_australia_1',
        'alexsmobs:banner_pattern_new_mexico',
        'darkutils:vector_plate_banner_pattern',
        'immersiveengineering:bannerpattern_hammer',
        'immersiveengineering:bannerpattern_bevels',
        'immersiveengineering:bannerpattern_ornate',
        'immersiveengineering:bannerpattern_treated_wood',
        'immersiveengineering:bannerpattern_windmill',
        'immersiveengineering:bannerpattern_wolf_r',
        'immersiveengineering:bannerpattern_wolf_l',
        'immersiveengineering:bannerpattern_wolf',
        'rats:rat_banner_pattern',
        'rats:cheese_banner_pattern',
        'rats:rat_and_crossbones_banner_pattern',
        'rats:rat_and_sickle_banner_pattern',
        'magistuarmory:apostolic_cross_pattern',
        'magistuarmory:bowl_pattern',
        'magistuarmory:bull_pattern',
        'magistuarmory:chess_pattern',
        'magistuarmory:crusader_cross_pattern',
        'magistuarmory:dragon_pattern',
        'magistuarmory:eagle_pattern',
        'magistuarmory:horse_pattern',
        'magistuarmory:lily_pattern',
        'magistuarmory:lion1_pattern',
        'magistuarmory:lion2_pattern',
        'magistuarmory:orthodox_cross_pattern',
        'magistuarmory:snake_pattern',
        'magistuarmory:sun_pattern',
        'magistuarmory:swords_pattern',
        'magistuarmory:tower_pattern',
        'magistuarmory:tree_pattern',
        'mod_lavacow:banner_pattern_skeletonking',
        'mod_lavacow:banner_pattern_wendigo',
    ])

    event.add('forge:glazed_terracotta', [
        'minecraft:white_glazed_terracotta',
        'minecraft:orange_glazed_terracotta',
        'minecraft:magenta_glazed_terracotta',
        'minecraft:light_blue_glazed_terracotta',
        'minecraft:yellow_glazed_terracotta',
        'minecraft:lime_glazed_terracotta',
        'minecraft:pink_glazed_terracotta',
        'minecraft:gray_glazed_terracotta',
        'minecraft:light_gray_glazed_terracotta',
        'minecraft:cyan_glazed_terracotta',
        'minecraft:purple_glazed_terracotta',
        'minecraft:blue_glazed_terracotta',
        'minecraft:brown_glazed_terracotta',
        'minecraft:green_glazed_terracotta',
        'minecraft:red_glazed_terracotta',
        'minecraft:black_glazed_terracotta'
    ])

})

//BLOCK TAGS
onEvent('block.tags', (event) => {

    event.add('forge:stone', ['quark:deepslate'])
    event.add('forge:marble', '#chisel:marble')
    event.add('chisel:marble', ['astralsorcery:marble_raw', 'quark:marble'])
    event.add('chisel:limestone', ['create:limestone', 'create:weathered_limestone', 'quark:limestone'])
    event.add('chisel:basalt', ['minecraft:basalt', 'minecraft:polished_basalt'])
    event.add('chisel:sandstone', ['minecraft:sandstone', 'minecraft:chiseled_sandstone', 'minecraft:cut_sandstone', 'minecraft:smooth_sandstone'])
    event.add('chisel:metals/aluminum', 'alltheores:aluminum_block')
    event.add('chisel:metals/bronze', 'thermal:bronze_block')
    event.add('chisel:emerald', 'minecraft:emerald_block')
    event.add('chisel:redstone', 'minecraft:redstone_block')
    event.add('chisel:coal', 'minecraft:coal_block')
    event.add('chisel:charcoal', 'thermal:charcoal_block')
    event.add('chisel:end_stone', 'minecraft:end_stone')
    event.add('forge:ores/certus_quartz', ['appliedenergistics2:quartz_ore', 'appliedenergistics2:charged_quartz_ore'])
    event.add('forge:ores/quartz', '#forge:ores/certus_quartz')
    event.add('forge:ores/arcane_brick', 'ars_nouveau:arcane_ore')
    event.add('forge:ores/dimensionalshard', ['rftoolsbase:dimensionalshard_overworld', 'rftoolsbase:dimensionalshard_nether', 'rftoolsbase:dimensionalshard_end'])
    event.add('forge:ores', ['#forge:ores/certus_quartz', '#forge:ores/oratchalcum', '#forge:ores/rat_gem', '#forge:ores/dimensionalshard', '#forge:ores/arcane_brick'])
    event.add('misctags:no_moving', ['#minecraft:wither_immune', 'appliedenergistics2:cable_bus', 'cookingforblockheads:fridge', 'draconicevolution:chaos_crystal', 'draconicevolution:chaos_crystal_part', 'astralsorcery:rock_collector_crystal', 'astralsorcery:celestial_collector_crystal', /^refinedstorage:/, /^extrastorage:/, /^waystones:/, /^appliedenergistics2:/, /^thermal:/, /^mekanism:/, /^creativecrafter:/])
    event.add('mekanism:cardboard_blacklist', '#misctags:no_moving')
    event.add('create:brittle', '#misctags:no_moving')
    event.add('misctags:flowers/draconic_flowers', 'minecraft:dragon_egg')
    event.add('misctags:flowers/end_flowers', ['minecraft:chorus_flower', 'minecraft:chorus_plant'])
    event.add('misctags:flowers/forest_flowers', ['#minecraft:flowers', 'minecraft:sweet_berry_bush'])
    event.add('misctags:flowers/glowing_flowers', ['minecraft:shroomlight', 'minecraft:glowstone', 'minecraft:redstone_lamp'])
    event.add('misctags:flowers/magical_flowers', ['#botania:special_flowers', '#botania:mystical_flowers', '#botania:double_mystical_flowers'])
    event.add('misctags:flowers/nether_flowers', ['minecraft:crimson_fungus', 'minecraft:warped_fungus', 'minecraft:nether_wart', 'minecraft:crimson_roots', 'minecraft:warped_roots', 'minecraft:weeping_vines', 'minecraft:twisting_vines'])
    event.add('misctags:flowers/swamp_flowers', ['byg:tiny_lilypads', 'byg:reeds', 'byg:cattail', 'minecraft:lily_pad', 'minecraft:sugar_cane', 'minecraft:brown_mushroom', 'minecraft:red_mushroom'])
    event.add('misctags:flowers/wither_flowers', 'minecraft:wither_rose')
    event.add('forge:mushroom_caps/black_puff_mushroom', 'byg:black_puff_mushroom_block')
    event.add('forge:mushroom_caps/blue_glowshroom', 'byg:blue_glowshroom_block')
    event.add('forge:mushroom_caps/weeping_milkcap_mushroom', 'byg:weeping_milkcap_mushroom_block')
    event.add('forge:mushroom_caps/green_mushroom', 'byg:green_mushroom_block')
    event.add('forge:mushroom_caps/purple_glowshroom', 'byg:purple_glowshroom_block')
    event.add('forge:mushroom_caps/brown_mushroom', 'minecraft:brown_mushroom_block')
    event.add('forge:mushroom_caps/red_mushroom', 'minecraft:red_mushroom_block')
    event.add('forge:mushroom_stems/brown_mushroom', 'byg:brown_mushroom_stem')
    event.add('forge:mushroom_stems/red_glowshroom', 'byg:red_glowshroom_stem')
    event.add('forge:mushroom_stems/white_mushroom', 'byg:white_mushroom_stem')
    event.add('forge:mushroom_stems/yellow_glowshroom', 'byg:yellow_glowshroom_stem')
    event.add('forge:mushroom_stems/mushroom', 'minecraft:mushroom_stem')
    event.add('forge:mushroom_caps', ['#forge:mushroom_caps/red_mushroom', '#forge:mushroom_caps/brown_mushroom', '#forge:mushroom_caps/blue_glowshroom', '#forge:mushroom_caps/purple_glowshroom', '#forge:mushroom_caps/green_mushroom', '#forge:mushroom_caps/black_puff_mushroom', '#forge:mushroom_caps/weeping_milkcap_mushroom'])
    event.add('forge:mushroom_stems', ['#forge:mushroom_stems/mushroom', '#forge:mushroom_stems/brown_mushroom', '#forge:mushroom_stems/white_mushroom', '#forge:mushroom_stems/red_glowshroom', '#forge:mushroom_stems/yellow_glowshroom'])
    event.add('forge:mushrooms', ['minecraft:warped_fungus', 'minecraft:crimson_fungus', 'byg:blue_glowshroom', 'byg:purple_glowshroom'])
    event.add('forge:storage_blocks', ['#forge:storage_blocks/uraninite', '#forge:storage_blocks/oratchalcum', '#forge:storage_blocks/nether_star'])
    event.add('forge:storage_blocks/nether_star', 'allthecompressed:nether_star_block')
    event.add('cyclic:scythe_brush', '#minecraft:flowers')
    event.add('mcwwindows:window', '/mcwwindows:.+_win/')
    event.add('misctags:concrete', '/minecraft:.+_concrete/')
    event.add('buildinggadgets:blacklist/copy_paste', [/^refinedstorage:.+$/, /^windowlogging:.+$/, /^mekanism:.+$/])
    event.add('buildinggadgets:blacklist/building', [/^refinedstorage:.+$/, /^windowlogging:.+$/, /^mekanism:.+$/])

    //Tag removals
    event.removeAll('minecraft:enderman_holdable')
    event.remove('forge:chests/personal', 'mekanism:personal_chest')
    event.remove('forge:chests/electric', 'mekanism:personal_chest')
    event.remove('forge:chests', 'mekanism:personal_chest')

})

//ENTITY TAGS
onEvent('entity_type.tags', (event) => {

    event.add('industrialforegoing:mob_imprisonment_tool_blacklist', [/iceandfire:myrmex.+/, /iceandfire:.+_dragon/, 'iceandfire:dragon_multipart', 'iceandfire:dragon_egg', 'artifacts:mimic',/mana-and-artifice:.+/])

})

//FLUID TAGS
onEvent('fluid.tags', (event) => {

    let alltheores = ['aluminum', 'copper', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc']
  
    alltheores.forEach(material => {
      event.add(`forge:molten_${material}`, [`alltheores:molten_${material}`, `#tconstruct:molten_${material}`])
      event.add(`tconstruct:metal_like`, `alltheores:molten_${material}`)
    })

    event.add('minecraft:water', ['cofh_core:honey', 'cyclic:honey'])
})
