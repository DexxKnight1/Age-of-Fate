events.listen('recipes', function (event) {
	
	event.remove({type: 'minecraft:smelting', input: 'draconicevolution:draconium_dust'})
    event.remove({type: 'minecraft:smelting', input: '#forge:ores/draconium'})
    event.remove({output: 'extendedcrafting:ultimate_singularity'})

    event.recipes.mekanism.smelting(Item.of('draconicevolution:draconium_ingot'), 'draconicevolution:draconium_dust')
    event.recipes.mekanism.smelting(Item.of('draconicevolution:draconium_ingot', 2), '#forge:ores/draconium')

    //Creative Energy Cube
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            type: "forge:nbt",
            item: "mekanism:creative_energy_cube",
            count: 1,
            nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}',
        },
        catalyst: {
            item: 'draconicevolution:energy_core',
        },
        total_energy: 2147483647,
        tier: 'CHAOTIC',
        ingredients: [
            {item: 'extendedcrafting:ultimate_singularity', },
            {item: 'mekanism:ultimate_induction_cell', },
            {item: 'mekanism:ultimate_induction_provider', },
            {item: 'mekanism:ultimate_induction_cell', },
            {item: 'mekanism:ultimate_induction_provider', },
            {item: 'draconicevolution:creative_capacitor', },
            {item: 'mekanism:creative_chemical_tank', },
            {item: 'draconicevolution:energy_core_stabilizer', },
            {item: 'draconicevolution:energy_core_stabilizer', },
            {item: 'draconicevolution:energy_core_stabilizer', },
            {item: 'draconicevolution:energy_core_stabilizer', },
            {item: 'mekanism:pellet_polonium', },
            {item: 'mekanism:pellet_polonium', },
            {item: 'mekanism:pellet_polonium', },
            {item: 'mekanism:pellet_polonium', },
            {item: 'mekanism:ultimate_induction_provider', },
            {item: 'mekanism:ultimate_induction_cell', },
            {item: 'mekanism:ultimate_induction_provider', },
            {item: 'mekanism:ultimate_induction_cell', },
            {item: 'extendedcrafting:ultimate_singularity', },
        ],
    }).id(`kubejs:mekanis/creative_energy_cube`)

    //FTB Power Pots
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "ftb-power-pots:power_pot_mk1",
        },
        catalyst: {
            tag: "botanypots:hopper_botany_pots",
        },
        total_energy: 128000000,
        tier: "DRACONIUM",
        ingredients: [
            {item: "allthecompressed:iron_block_2x", },
            {item: "minecraft:emerald_block", },
            {item: "allthecompressed:iron_block_2x", },
            {item: "mekanism:basic_energy_cube", },
            {item: "allthecompressed:iron_block_2x", },
            {item: "minecraft:emerald_block", },
            {item: "allthecompressed:iron_block_2x", },
        ],
    }).id(`kubejs:ftb-power-pots/power_pot_mk1`)

    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "ftb-power-pots:power_pot_mk2",
        },
        catalyst: {
            item: "ftb-power-pots:power_pot_mk1",
        },
        total_energy: 256000000,
        tier: "WYVERN",
        ingredients: [
            {item: "allthecompressed:iron_block_2x", },
            {item: "botania:blaze_block", },
            {item: "allthecompressed:iron_block_2x", },
            {item: "mekanism:advanced_energy_cube", },
            {item: "allthecompressed:iron_block_2x", },
            {item: "botania:blaze_block", },
            {item: "allthecompressed:iron_block_2x", },
        ],
    }).id(`kubejs:ftb-power-pots/power_pot_mk2`)

    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "ftb-power-pots:power_pot_mk3",
        },
        catalyst: {
            item: "ftb-power-pots:power_pot_mk2",
        },
        total_energy: 512000000,
        tier: "DRACONIC",
        ingredients: [
            {item: "allthecompressed:iron_block_2x", },
            {item: "botania:mana_diamond_block", },
            {item: "allthecompressed:iron_block_2x", },
            {item: "mekanism:elite_energy_cube", },
            {item: "allthecompressed:iron_block_2x", },
            {item: "botania:mana_diamond_block", },
            {item: "allthecompressed:iron_block_2x", },
        ],
    }).id(`kubejs:ftb-power-pots/power_pot_mk3`)

    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "ftb-power-pots:power_pot_mk4",
        },
        catalyst: {
            item: "ftb-power-pots:power_pot_mk3",
        },
        total_energy: 768000000,
        tier: "CHAOTIC",
        ingredients: [
            {item: "allthecompressed:iron_block_2x", },
            {item: "draconicevolution:draconium_block", },
            {item: "allthecompressed:iron_block_2x", },
            {item: "mekanism:ultimate_energy_cube", },
            {item: "allthecompressed:iron_block_2x", },
            {item: "draconicevolution:draconium_block", },
            {item: "allthecompressed:iron_block_2x", },
        ],
    }).id(`kubejs:ftb-power-pots/power_pot_mk4`)

    //Mekanism Creative Bin
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "mekanism:creative_bin",
        },
        catalyst: {
            item: "storagedrawers:creative_storage_upgrade",
        },
        total_energy: 158000000,
        tier: "CHAOTIC",
        ingredients: [
            {item: "mekanism:ultimate_bin", },
            {item: "mysticalagradditions:creative_essence", },
            {item: "mekanism:ultimate_bin", },
            {item: "mysticalagradditions:creative_essence", },
            {item: "mekanism:ultimate_bin", },
            {item: "mysticalagradditions:creative_essence", },
            {item: "mekanism:ultimate_bin", },
            {item: "mysticalagradditions:creative_essence", },
        ],
    }).id(`kubejs:mekanism/creative_bin`)

    //Creative Storage Drawer Upgrade
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "storagedrawers:creative_storage_upgrade",
        },
        catalyst: {
            item: "storagedrawers:upgrade_template",
        },
        total_energy: 128000000,
        tier: "CHAOTIC",
        ingredients: [
            {item: "draconicevolution:chaos_shard", },
            {item: "botania:gaia_ingot", },
            {item: "mekanism:pellet_antimatter", },
            {item: "botania:gaia_ingot", },
            {item: "mekanism:pellet_antimatter", },
            {item: "mysticalagradditions:creative_essence", },
            {item: "mysticalagradditions:creative_essence", },
            {item: "draconicevolution:chaos_shard", },
            {item: "mekanism:creative_fluid_tank", },
            {type: "forge:nbt",
                item: "mekanism:creative_energy_cube",
                count: 1,
                nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}', },
            {item: "mekanism:creative_chemical_tank", },
            {type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:clay"}', },
            {item: "draconicevolution:chaos_shard", },
            {item: "mysticalagradditions:creative_essence", },
            {item: "mysticalagradditions:creative_essence", },
            {item: "mekanism:pellet_antimatter",  },
            {item: "botania:gaia_ingot", },
            {item: "mekanism:pellet_antimatter", },
            {item: "botania:gaia_ingot", },
            {item: "draconicevolution:chaos_shard", },
        ],
    }).id(`kubejs:storagedrawers/creative_storage_upgrade`)

    //Draconic Evolution Draconium Chest
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "draconicevolution:draconium_chest",
        },
        catalyst: {
            item: "minecraft:chest",
        },
        total_energy: 20000000,
        tier: "DRACONIUM",
        ingredients: [
            {item: "draconicevolution:draconium_core", },
            {item: "draconicevolution:draconium_core", },
            {item: "minecraft:furnace", },
            {item: "minecraft:furnace", },
            {item: "minecraft:furnace", },
            {item: "minecraft:furnace", },
            {item: "minecraft:furnace", },
            {item: "minecraft:crafting_table", },
            {item: "minecraft:crafting_table", },
            {item: "draconicevolution:draconium_block", },
        ],
    }).id(`kubejs:draconicevolution/draconium_chest`)

    //Extended Crafting Ultimate Singularity
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "extendedcrafting:ultimate_singularity",
        },
        catalyst: {
            item: "appliedenergistics2:quantum_entangled_singularity",
        },
        total_energy: 32000000,
        tier: "DRACONIC",
        ingredients: [
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:aluminum"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:bronze"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:clay"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:coal"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:osmium"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:copper"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:diamond"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:dimensionalshard"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:electrotine"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:electrum"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:emerald"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:glowstone"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:gold"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:invar"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:iron"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:lapis_lazuli"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:lead"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:nickel"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:oak"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:phytogro"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:starmetal"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:pink_slime"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:plastic"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:platinum"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:redstone"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:refined_obsidian"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:silver"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:enderium"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:steel"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:supremium_coal"}', },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:tin"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:uranium"}', },
        ],
    }).id(`kubejs:extendedcrafting/ultimate_singularity`)

    //Simply Jetpacks Creative Jetpack (Armored)
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "simplyjetpacks:jetpack_creative_armored",
        },
        catalyst: {
            item: "simplyjetpacks:jetpack_creative",
        },
        total_energy: 15800000,
        tier: "CHAOTIC",
        ingredients: [
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:refined_obsidian"}', },
            {item: "mysticalagradditions:creative_essence", },
            {item: "forbidden_arcanus:dark_nether_star_block", },
            {item: "mysticalagradditions:creative_essence", },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:platinum"}', },
            {item: "mysticalagradditions:creative_essence", },
            {item: "draconicevolution:draconic_energy_core", },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:steel"}', },
        ],
    }).id(`kubejs:simplyjetpacks/jetpack_creative_armored`)

    //Creative Crafter Creative Crafter
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "creativecrafter:creative_crafter",
        },
        catalyst: {
            item: "extrastorage:netherite_crafter",
        },
        total_energy: 17800000,
        tier: "CHAOTIC",
        ingredients: [
            {item: "extendedcrafting:ultimate_singularity", },
            {item: "mysticalagradditions:creative_essence", },
            {item: "draconicevolution:draconic_energy_core", },
            {item: "mysticalagradditions:creative_essence", },
            {item: "allthecompressed:nether_star_block_3x", },
            {item: "mysticalagradditions:creative_essence", },
            {item: "draconicevolution:draconic_energy_core", },
            {item: "extendedcrafting:ultimate_singularity", },
        ],
    }).id(`kubejs:creativecrafter/creative_crafter`)

    //Creative Transmitter Creative Transmitter
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "creativewirelesstransmitter:creative_wireless_transmitter",
        },
        catalyst: {
            item: "refinedstorage:wireless_transmitter",
        },
        total_energy: 17800000,
        tier: "CHAOTIC",
        ingredients: [
            {item: "extendedcrafting:ultimate_singularity", },
            {item: "mysticalagradditions:creative_essence", },
            {item: "draconicevolution:draconic_energy_core", },
            {item: "mysticalagradditions:creative_essence", },
            {item: "allthecompressed:nether_star_block_3x", },
            {item: "mysticalagradditions:creative_essence", },
            {item: "draconicevolution:draconic_energy_core", },
            {item: "extendedcrafting:ultimate_singularity", },
        ],
    }).id(`kubejs:creativewirelesstransmitter/creative_wireless_transmitter`)

    //Rats Rat Upgrade: Combined(Creative)
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "rats:rat_upgrade_combined_creative",
        },
        catalyst: {
            item: "rats:rat_upgrade_combined",
        },
        total_energy: 16500000,
        tier: "CHAOTIC",
        ingredients: [
            {item: "extendedcrafting:ultimate_singularity", },
            {item: "mysticalagradditions:creative_essence", },
            {item: "rats:arcane_technology", },
            {item: "mysticalagradditions:creative_essence", },
            {item: "mekanism:pellet_antimatter", },
            {item: "mysticalagradditions:creative_essence", },
            {item: "rats:idol_of_ratlantis", },
            {item: "extendedcrafting:ultimate_singularity", },
        ],
    }).id(`kubejs:rats/rat_upgrade_combined_creative`)

    //Rats Rat Upgrade: Creative
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "rats:rat_upgrade_creative",
        },
        catalyst: {
            item: "rats:rat_upgrade_basic",
        },
        total_energy: 17500000,
        tier: "CHAOTIC",
        ingredients: [
            {item: "extendedcrafting:ultimate_singularity", },
            {item: "mysticalagradditions:creative_essence", },
            {item: "rats:arcane_technology", },
            {item: "mysticalagradditions:creative_essence", },
            {item: "mekanism:pellet_antimatter", },
            {item: "mysticalagradditions:creative_essence", },
            {item: "rats:idol_of_ratlantis", },
            {item: "extendedcrafting:ultimate_singularity", },
        ],
    }).id(`kubejs:rats/rat_upgrade_creative`)
    	
})
