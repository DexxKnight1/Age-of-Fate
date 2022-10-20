onEvent('recipes', (event) => {

    event.shaped('minecraft:furnace', ['ABA', 'B B', 'ABA'], {
        A: 'allthecompressed:cobblestone_block_1x',
        B: '#forge:cobblestone'
    }).id(`kubejs:minecraft/furnace`)

    event.shaped('minecraft:crafting_table', ['AB ', 'BA '], {
        A: '#minecraft:planks',
        B: '#minecraft:logs'
    }).id(`kubejs:minecraft/crafting/table`)

    event.shaped('4x minecraft:chest', ['AAA', 'A A', 'AAA'], {
        A: '#minecraft:logs'
    }).id(`kubejs:minecraft/chest_from_logs`)

    event.shaped('minecraft:chest', ['AAA', 'A A', 'AAA'], {
        A: '#minecraft:planks'
    }).id(`kubejs:minecraft/chest_from_planks`)

    event.shaped('minecraft:trapped_chest', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:planks',
        B: 'minecraft:tripwire_hook'
    }).id(`kubejs:minecraft/trapped_chest`)

    event.shaped('minecraft:comparator', [' A ', 'ABA', 'CCC'], {
        A: 'minecraft:redstone_torch',
        B: '#appliedenergistics2:crystals/nether',
        C: 'minecraft:stone'
    }).id(`kubejs:minecraft/comparator`)

    event.shaped('minecraft:name_tag', ['  A', ' B ', 'B  '], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:paper'
    }).id(`kubejs:minecraft/name_tag`)

    event.shaped('minecraft:gravel', ['AA ', 'AA '], {
        A: 'minecraft:flint'
    }).id(`kubejs:minecraft/gravel`)

    event.shaped('16x minecraft:stick', ['A', 'A'], {
        A: '#minecraft:logs'
    }).id(`kubejs:minecraft/stick`)

    event.shaped('minecraft:sponge', ['CAC', 'ABA', 'CAC'], {
        A: 'minecraft:bucket',
        B: '#forge:dyes/yellow',
        C: '#minecraft:wool'
    }).id(`kubejs:minecraft/sponge`)

    event.shaped('minecraft:dragon_breath', [' D ', 'ABA', ' D '], {
        B: 'minecraft:glass_bottle',
        A: 'mysticalagriculture:air_essence',
        D: 'mysticalagriculture:dragon_egg_essence'
    }).id(`kubejs:minecraft/dragon_breath`)

    event.shaped('minecraft:bell', ['AAA', 'BBB', ' C '], {
        A: 'minecraft:stick',
        B: 'minecraft:gold_ingot',
        C: 'minecraft:gold_block'
    }).id(`kubejs:minecraft/bell`)

    event.shaped('2x minecraft:phantom_membrane', ['  A', ' AB', 'ABC'], {
        A: 'minecraft:feather',
        B: 'minecraft:cobweb',
        C: 'tconstruct:silky_cloth'
    }).id(`kubejs:minecraft/phantom/membrane`)

    event.shaped('minecraft:elytra', ['ABA', 'CDC', 'E E'], {
        A: 'rats:dragon_wing',
        B: 'minecraft:nether_star',
        C: 'botania:mana_string',
        D: 'create_stuff_additions:encased_jet_chestplate',
        E: 'forbidden_arcanus:golden_feather'
    }).id(`kubejs:minecraft/elytra`)

    event.shaped('minecraft:totem_of_undying', ['ABA', 'BCB', 'EBE'], {
        A: 'minecraft:emerald_block',
        B: 'bloodmagic:lavacrystal',
        C: 'naturesaura:pet_reviver',
        E: 'forestcraft:soul_essence'
    }).id(`kubejs:minecraft/totem_of_undying`)

    event.shaped('minecraft:hopper', ['ABA', 'ABA', ' A '], {
        A: 'minecraft:iron_ingot',
        B: '#minecraft:logs'
    }).id(`kubejs:minecraft/hopper`)

    event.shaped('12x minecraft:grass', [' E ', 'E E'], {
        E: 'mysticalagriculture:nature_essence' 
    }).id('kubejs:minecraft/grass')

    event.shaped('minecraft:iron_horse_armor', ['  A', 'ABA', 'ACA'], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:saddle',
        C: 'druidcraft:rope'
    }).id(`kubejs:minecraft/iron_horse_armor`)

    event.shaped('minecraft:golden_horse_armor', ['  A', 'ABA', 'ACA'], {
        A: 'minecraft:gold_ingot',
        B: 'minecraft:saddle',
        C: 'druidcraft:rope'
    }).id(`kubejs:minecraft/golden_horse_armor`)

    event.shaped('minecraft:diamond_horse_armor', ['  A', 'ABA', 'ACA'], {
        A: 'minecraft:diamond',
        B: 'minecraft:saddle',
        C: 'druidcraft:rope'
    }).id(`kubejs:minecraft/diamond_horse_armor`)

    //Concrete Conversion
    event.shaped('8x minecraft:white_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:white_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/white_concrete`)

    event.shaped('8x minecraft:orange_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:orange_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/orange_concrete`)

    event.shaped('8x minecraft:magenta_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:magenta_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/magenta_concrete`)

    event.shaped('8x minecraft:light_blue_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:light_blue_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/light_blue_concrete`)

    event.shaped('8x minecraft:yellow_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:yellow_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/yellow_concrete`)

    event.shaped('8x minecraft:lime_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:lime_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/lime_concrete`)

    event.shaped('8x minecraft:pink_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:pink_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/pink_concrete`)

    event.shaped('8x minecraft:gray_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:gray_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/gray_concrete`)

    event.shaped('8x minecraft:light_gray_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:light_gray_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/light_gray_concrete`)

    event.shaped('8x minecraft:cyan_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:cyan_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/cyan_concrete`)

    event.shaped('8x minecraft:purple_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:purple_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/purple_concrete`)

    event.shaped('8x minecraft:blue_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:blue_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/blue_concrete`)

    event.shaped('8x minecraft:brown_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:brown_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/brown_concrete`)

    event.shaped('8x minecraft:green_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:green_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/green_concrete`)

    event.shaped('8x minecraft:red_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:red_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/red_concrete`)

    event.shaped('8x minecraft:black_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:black_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/black_concrete`)

    //Concrete Powders
    event.shaped('8x minecraft:white_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/white',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/white_concrete_powder`)

    event.shaped('8x minecraft:orange_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/orange',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/orange_concrete_powder`)

    event.shaped('8x minecraft:magenta_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/magenta',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/magenta_concrete_powder`)

    event.shaped('8x minecraft:light_blue_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/light_blue',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/light_blue_concrete_powder`)

    event.shaped('8x minecraft:yellow_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/yellow',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/yellow_concrete_powder`)

    event.shaped('8x minecraft:lime_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/lime',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/lime_concrete_powder`)

    event.shaped('8x minecraft:pink_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/pink',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/pink_concrete_powder`)

    event.shaped('8x minecraft:gray_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/gray',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/gray_concrete_powder`)

    event.shaped('8x minecraft:light_gray_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/light_gray',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/light_gray_concrete_powder`)

    event.shaped('8x minecraft:cyan_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/cyan',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/cyan_concrete_powder`)

    event.shaped('8x minecraft:purple_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/purple',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/purple_concrete_powder`)

    event.shaped('8x minecraft:blue_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/blue',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/blue_concrete_powder`)

    event.shaped('8x minecraft:brown_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/brown',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/brown_concrete_powder`)

    event.shaped('8x minecraft:green_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/green',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/green_concrete_powder`)

    event.shaped('8x minecraft:red_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/red',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/red_concrete_powder`)

    event.shaped('8x minecraft:black_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/black',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/black_concrete_powder`)

    event.shaped('8x minecraft:white_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/white',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/white_concrete_powder_with_slag`)

    event.shaped('8x minecraft:orange_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/orange',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/orange_concrete_powder_with_slag`)

    event.shaped('8x minecraft:magenta_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/magenta',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/magenta_concrete_powder_with_slag`)

    event.shaped('8x minecraft:light_blue_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/light_blue',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/light_blue_concrete_powder_with_slag`)

    event.shaped('8x minecraft:yellow_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/yellow',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/yellow_concrete_powder_with_slag`)

    event.shaped('8x minecraft:lime_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/lime',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/lime_concrete_powder_with_slag`)

    event.shaped('8x minecraft:pink_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/pink',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/pink_concrete_powder_with_slag`)

    event.shaped('8x minecraft:gray_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/gray',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/gray_concrete_powder_with_slag`)

    event.shaped('8x minecraft:light_gray_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/light_gray',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/light_gray_concrete_powder_with_slag`)

    event.shaped('8x minecraft:cyan_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/cyan',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/cyan_concrete_powder_with_slag`)

    event.shaped('8x minecraft:purple_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/purple',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/purple_concrete_powder_with_slag`)

    event.shaped('8x minecraft:blue_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/blue',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/blue_concrete_powder_with_slag`)

    event.shaped('8x minecraft:brown_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/brown',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/brown_concrete_powder_with_slag`)

    event.shaped('8x minecraft:green_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/green',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/green_concrete_powder_with_slag`)

    event.shaped('8x minecraft:red_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/red',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/red_concrete_powder_with_slag`)

    event.shaped('8x minecraft:black_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/black',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/black_concrete_powder_with_slag`)

    //Stained Glass
    event.shaped('8x minecraft:white_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/white'
    }).id(`kubejs:minecraft/white_stained_glass`)

    event.shaped('8x minecraft:orange_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/orange'
    }).id(`kubejs:minecraft/orange_stained_glass`)

    event.shaped('8x minecraft:magenta_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/magenta'
    }).id(`kubejs:minecraft/magenta_stained_glass`)

    event.shaped('8x minecraft:light_blue_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/light_blue'
    }).id(`kubejs:minecraft/light_blue_stained_glass`)

    event.shaped('8x minecraft:yellow_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/yellow'
    }).id(`kubejs:minecraft/yellow_stained_glass`)

    event.shaped('8x minecraft:lime_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/lime'
    }).id(`kubejs:minecraft/lime_stained_glass`)

    event.shaped('8x minecraft:pink_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/pink'
    }).id(`kubejs:minecraft/pink_stained_glass`)

    event.shaped('8x minecraft:gray_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/gray'
    }).id(`kubejs:minecraft/gray_stained_glass`)

    event.shaped('8x minecraft:light_gray_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/light_gray'
    }).id(`kubejs:minecraft/light_gray_stained_glass`)

    event.shaped('8x minecraft:cyan_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/cyan'
    }).id(`kubejs:minecraft/cyan_stained_glass`)

    event.shaped('8x minecraft:purple_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/purple'
    }).id(`kubejs:minecraft/purple_stained_glass`)

    event.shaped('8x minecraft:blue_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/blue'
    }).id(`kubejs:minecraft/blue_stained_glass`)

    event.shaped('8x minecraft:brown_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/brown'
    }).id(`kubejs:minecraft/brown_stained_glass`)

    event.shaped('8x minecraft:green_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/green'
    }).id(`kubejs:minecraft/green_stained_glass`)

    event.shaped('8x minecraft:red_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/red'
    }).id(`kubejs:minecraft/red_stained_glass`)

    event.shaped('8x minecraft:black_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/black'
    }).id(`kubejs:minecraft/black_stained_glass`)

    //Stained Glass Pane
    event.shaped('8x minecraft:white_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/white'
    }).id(`kubejs:minecraft/white_stained_glass_pane`)

    event.shaped('8x minecraft:orange_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/orange'
    }).id(`kubejs:minecraft/orange_stained_glass_pane`)

    event.shaped('8x minecraft:magenta_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/magenta'
    }).id(`kubejs:minecraft/magenta_stained_glass_pane`)

    event.shaped('8x minecraft:light_blue_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/light_blue'
    }).id(`kubejs:minecraft/light_blue_stained_glass_pane`)

    event.shaped('8x minecraft:yellow_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/yellow'
    }).id(`kubejs:minecraft/yellow_stained_glass_pane`)

    event.shaped('8x minecraft:lime_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/lime'
    }).id(`kubejs:minecraft/lime_stained_glass_pane`)

    event.shaped('8x minecraft:pink_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/pink'
    }).id(`kubejs:minecraft/pink_stained_glass_pane`)

    event.shaped('8x minecraft:gray_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/gray'
    }).id(`kubejs:minecraft/gray_stained_glass_pane`)

    event.shaped('8x minecraft:light_gray_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/light_gray'
    }).id(`kubejs:minecraft/light_gray_stained_glass_pane`)

    event.shaped('8x minecraft:cyan_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/cyan'
    }).id(`kubejs:minecraft/cyan_stained_glass_pane`)

    event.shaped('8x minecraft:purple_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/purple'
    }).id(`kubejs:minecraft/purple_stained_glass_pane`)

    event.shaped('8x minecraft:blue_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/blue'
    }).id(`kubejs:minecraft/blue_stained_glass_pane`)

    event.shaped('8x minecraft:brown_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/brown'
    }).id(`kubejs:minecraft/brown_stained_glass_pane`)

    event.shaped('8x minecraft:green_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/green'
    }).id(`kubejs:minecraft/green_stained_glass_pane`)

    event.shaped('8x minecraft:red_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/red'
    }).id(`kubejs:minecraft/red_stained_glass_pane`)

    event.shaped('8x minecraft:black_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/black'
    }).id(`kubejs:minecraft/black_stained_glass_pane`)

    //Glazed Terracotta
    event.shaped('8x minecraft:white_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:terracotta',
        B: '#forge:dyes/white'
    }).id(`kubejs:minecraft/white_terracotta`)
    
    event.shaped('8x minecraft:orange_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:terracotta',
        B: '#forge:dyes/orange'
    }).id(`kubejs:minecraft/orange_terracotta`)
    
    event.shaped('8x minecraft:magenta_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:terracotta',
        B: '#forge:dyes/magenta'
    }).id(`kubejs:minecraft/magenta_terracotta`)
    
    event.shaped('8x minecraft:light_blue_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:terracotta',
        B: '#forge:dyes/light_blue'
    }).id(`kubejs:minecraft/light_blue_terracotta`)
    
    event.shaped('8x minecraft:yellow_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:terracotta',
        B: '#forge:dyes/yellow'
    }).id(`kubejs:minecraft/yellow_terracotta`)
    
    event.shaped('8x minecraft:lime_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:terracotta',
        B: '#forge:dyes/lime'
    }).id(`kubejs:minecraft/lime_terracotta`)
    
    event.shaped('8x minecraft:pink_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:terracotta',
        B: '#forge:dyes/pink'
    }).id(`kubejs:minecraft/pink_terracotta`)
    
    event.shaped('8x minecraft:gray_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:terracotta',
        B: '#forge:dyes/gray'
    }).id(`kubejs:minecraft/gray_terracotta`)
    
    event.shaped('8x minecraft:light_gray_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:terracotta',
        B: '#forge:dyes/light_gray'
    }).id(`kubejs:minecraft/light_gray_terracotta`)
    
    event.shaped('8x minecraft:cyan_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:terracotta',
        B: '#forge:dyes/cyan'
    }).id(`kubejs:minecraft/cyan_terracotta`)
    
    event.shaped('8x minecraft:purple_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:terracotta',
        B: '#forge:dyes/purple'
    }).id(`kubejs:minecraft/purple_terracotta`)
    
    event.shaped('8x minecraft:blue_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:terracotta',
        B: '#forge:dyes/blue'
    }).id(`kubejs:minecraft/blue_terracotta`)
    
    event.shaped('8x minecraft:brown_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:terracotta',
        B: '#forge:dyes/brown'
    }).id(`kubejs:minecraft/brown_terracotta`)
    
    event.shaped('8x minecraft:green_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:terracotta',
        B: '#forge:dyes/green'
    }).id(`kubejs:minecraft/green_terracotta`)
    
    event.shaped('8x minecraft:red_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:terracotta',
        B: '#forge:dyes/red'
    }).id(`kubejs:minecraft/red_terracotta`)
    
    event.shaped('8x minecraft:black_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:terracotta',
        B: '#forge:dyes/black'
    }).id(`kubejs:minecraft/black_terracotta`)

    //Glazed Terracotta
    event.shaped('8x minecraft:white_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/white'
    }).id(`kubejs:minecraft/white_glazed_terracotta`)

    event.shaped('8x minecraft:orange_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/orange'
    }).id(`kubejs:minecraft/orange_glazed_terracotta`)

    event.shaped('8x minecraft:magenta_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/magenta'
    }).id(`kubejs:minecraft/magenta_glazed_terracotta`)

    event.shaped('8x minecraft:light_blue_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/light_blue'
    }).id(`kubejs:minecraft/light_blue_glazed_terracotta`)

    event.shaped('8x minecraft:yellow_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/yellow'
    }).id(`kubejs:minecraft/yellow_glazed_terracotta`)

    event.shaped('8x minecraft:lime_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/lime'
    }).id(`kubejs:minecraft/lime_glazed_terracotta`)

    event.shaped('8x minecraft:pink_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/pink'
    }).id(`kubejs:minecraft/pink_glazed_terracotta`)

    event.shaped('8x minecraft:gray_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/gray'
    }).id(`kubejs:minecraft/gray_glazed_terracotta`)

    event.shaped('8x minecraft:light_gray_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/light_gray'
    }).id(`kubejs:minecraft/light_gray_glazed_terracotta`)

    event.shaped('8x minecraft:cyan_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/cyan'
    }).id(`kubejs:minecraft/cyan_glazed_terracotta`)

    event.shaped('8x minecraft:purple_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/purple'
    }).id(`kubejs:minecraft/purple_glazed_terracotta`)

    event.shaped('8x minecraft:blue_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/blue'
    }).id(`kubejs:minecraft/blue_glazed_terracotta`)

    event.shaped('8x minecraft:brown_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/brown'
    }).id(`kubejs:minecraft/brown_glazed_terracotta`)

    event.shaped('8x minecraft:green_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/green'
    }).id(`kubejs:minecraft/green_glazed_terracotta`)

    event.shaped('8x minecraft:red_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/red'
    }).id(`kubejs:minecraft/red_glazed_terracotta`)

    event.shaped('8x minecraft:black_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/black'
    }).id(`kubejs:minecraft/black_glazed_terracotta`)

    //Wool
    event.shaped('8x minecraft:white_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/white'
    }).id(`kubejs:minecraft/white_wool`)
        
    event.shaped('8x minecraft:orange_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/orange'
    }).id(`kubejs:minecraft/orange_wool`)
        
    event.shaped('8x minecraft:magenta_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/magenta'
    }).id(`kubejs:minecraft/magenta_wool`)
        
    event.shaped('8x minecraft:light_blue_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/light_blue'
    }).id(`kubejs:minecraft/light_blue_wool`)
        
    event.shaped('8x minecraft:yellow_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/yellow'
    }).id(`kubejs:minecraft/yellow_wool`)
        
    event.shaped('8x minecraft:lime_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/lime'
    }).id(`kubejs:minecraft/lime_wool`)
        
    event.shaped('8x minecraft:pink_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/pink'
    }).id(`kubejs:minecraft/pink_wool`)
        
    event.shaped('8x minecraft:gray_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/gray'
    }).id(`kubejs:minecraft/gray_wool`)
        
    event.shaped('8x minecraft:light_gray_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/light_gray'
    }).id(`kubejs:minecraft/light_gray_wool`)
        
    event.shaped('8x minecraft:cyan_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/cyan'
    }).id(`kubejs:minecraft/cyan_wool`)
        
    event.shaped('8x minecraft:purple_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/purple'
    }).id(`kubejs:minecraft/purple_wool`)
        
    event.shaped('8x minecraft:blue_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/blue'
    }).id(`kubejs:minecraft/blue_wool`)
        
    event.shaped('8x minecraft:brown_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/brown'
    }).id(`kubejs:minecraft/brown_wool`)
        
    event.shaped('8x minecraft:green_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/green'
    }).id(`kubejs:minecraft/green_wool`)
        
    event.shaped('8x minecraft:red_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/red'
    }).id(`kubejs:minecraft/red_wool`)
        
    event.shaped('8x minecraft:black_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/black'
    }).id(`kubejs:minecraft/black_wool`)

    event.shapeless('3x minecraft:bone', 'minecraft:bone_block').id(`kubejs:minecraft/bone`)
    event.shapeless('4x minecraft:clay_ball', 'minecraft:clay').id(`kubejs:minecraft/clay_ball`)
    event.shapeless('4x minecraft:string', '#minecraft:wool').id(`kubejs:minecraft/string`)
    event.shapeless('4x minecraft:glowstone_dust', 'minecraft:glowstone').id(`kubejs:minecraft/glowstone_dust`)
    event.shapeless('4x minecraft:quartz', 'minecraft:quartz_block').id(`kubejs:minecraft/quartz`)
    event.shapeless('4x minecraft:snowball', 'minecraft:snow_block').id(`kubejs:minecraft/snowball`)
    event.shapeless('4x minecraft:phantom_membrane', 'cyclic:membrane').id(`kubejs:minecraft/phantom_membrane`)
    event.shapeless('4x minecraft:nether_wart', 'minecraft:nether_wart_block').id(`kubejs:minecraft/nether_wart`)
    event.shapeless('9x minecraft:ice', 'minecraft:packed_ice').id(`kubejs:minecraft/ice`)
    event.shapeless('9x minecraft:packed_ice', 'minecraft:blue_ice').id(`kubejs:minecraft/packed_ice`)
    event.shapeless('minecraft:blaze_rod', ['minecraft:blaze_powder', 'minecraft:blaze_powder']).id(`kubejs:minecraft/blaze_rod`)
    event.shapeless('minecraft:crying_obsidian', ['minecraft:obsidian', 'minecraft:ghast_tear']).id(`kubejs:minecraft/crying_obsidian`)
    event.shapeless('minecraft:experience_bottle', ['minecraft:lapis_lazuli', 'minecraft:redstone', 'minecraft:glowstone_dust', 'minecraft:quartz', 'minecraft:glass_bottle']).id(`kubejs:minecraft/experience_bottle`)
    event.shapeless('minecraft:experience_bottle', ['minecraft:golden_apple', 'minecraft:glass_bottle']).id(`kubejs:minecraft/experience/bottle`)
    
    //Beds
    event.shapeless('minecraft:white_bed', ['#minecraft:beds', '#forge:dyes/white']).id(`kubejs:minecraft/white/bed`)
    event.shapeless('minecraft:orange_bed', ['#minecraft:beds', '#forge:dyes/orange']).id(`kubejs:minecraft/orange/bed`)
    event.shapeless('minecraft:magenta_bed', ['#minecraft:beds', '#forge:dyes/magenta']).id(`kubejs:minecraft/magenta/bed`)
    event.shapeless('minecraft:light_blue_bed', ['#minecraft:beds', '#forge:dyes/light_blue']).id(`kubejs:minecraft/light_blue/bed`)
    event.shapeless('minecraft:yellow_bed', ['#minecraft:beds', '#forge:dyes/yellow']).id(`kubejs:minecraft/yellow/bed`)
    event.shapeless('minecraft:lime_bed', ['#minecraft:beds', '#forge:dyes/lime']).id(`kubejs:minecraft/lime/bed`)
    event.shapeless('minecraft:pink_bed', ['#minecraft:beds', '#forge:dyes/pink']).id(`kubejs:minecraft/pink/bed`)
    event.shapeless('minecraft:gray_bed', ['#minecraft:beds', '#forge:dyes/gray']).id(`kubejs:minecraft/gray/bed`)
    event.shapeless('minecraft:light_gray_bed', ['#minecraft:beds', '#forge:dyes/light_gray']).id(`kubejs:minecraft/light_gray/bed`)
    event.shapeless('minecraft:cyan_bed', ['#minecraft:beds', '#forge:dyes/cyan']).id(`kubejs:minecraft/cyan/bed`)
    event.shapeless('minecraft:purple_bed', ['#minecraft:beds', '#forge:dyes/purple']).id(`kubejs:minecraft/purple/bed`)
    event.shapeless('minecraft:blue_bed', ['#minecraft:beds', '#forge:dyes/blue']).id(`kubejs:minecraft/blue/bed`)
    event.shapeless('minecraft:brown_bed', ['#minecraft:beds', '#forge:dyes/brown']).id(`kubejs:minecraft/brown/bed`)
    event.shapeless('minecraft:green_bed', ['#minecraft:beds', '#forge:dyes/green']).id(`kubejs:minecraft/green/bed`)
    event.shapeless('minecraft:red_bed', ['#minecraft:beds', '#forge:dyes/red']).id(`kubejs:minecraft/red/bed`)
    event.shapeless('minecraft:black_bed', ['#minecraft:beds', '#forge:dyes/black']).id(`kubejs:minecraft/black/bed`)

    modifyShaped(event, 'minecraft:book', 1, ['AA ', 'AB '], {
        A: '#forge:paper',
        B: '#forge:leather'
    })

    modifyShaped(event, 'minecraft:cake', 1, ['AAA', 'BCB', 'DDD'], {
        A: '#forge:milk',
        B: '#forge:sugar',
        C: '#forge:eggs',
        D: '#forge:grains'
    })

    modifyShaped(event, 'minecraft:cookie', 1, ['   ', 'ABA', '   '], {
        A: '#forge:grains',
        B: '#forge:crops/cocoabeans'
    })

    modifyShaped(event, 'minecraft:brewing_stand', 1, ['   ', ' A ', 'BBB'], {
        A: '#forge:rods/blaze',
        B: '#forge:cobblestone'
    })

    modifyShaped(event, 'minecraft:fire_charge', 3, ['AB ', 'C  '], {
        A: '#forge:gunpowder',
        B: '#forge:dusts/blaze',
        C: '#minecraft:coals'
    })

    modifyShaped(event, 'minecraft:map', 1, ['AAA', 'ABA', 'AAA'], {
        A: '#forge:paper',
        B: 'minecraft:compass'
    })

    modifyShaped(event, 'minecraft:pumpkin_pie', 1, ['AB ', 'C  '], {
        A: '#forge:crops/pumpkin',
        B: '#forge:sugar',
        C: '#forge:eggs'
    })

    modifyShaped(event, 'minecraft:rabbit_stew', 1, ['ABC', 'DE ', '   '], {
        A: 'minecraft:baked_potato',
        B: 'minecraft:cooked_rabbit',
        C: 'minecraft:bowl',
        D: 'minecraft:carrot',
        E: '#forge:mushrooms'
    })

    modifyShaped(event, 'minecraft:leather_horse_armor', 1, ['  A', 'ABA', 'ACA'], {
        A: 'minecraft:leather',
        B: 'minecraft:saddle',
        C: 'druidcraft:rope'
    })

    modifyShaped(event, 'minecraft:lead', 2, ['AA ', 'AB ', '  A'], {
        A: '#forge:string',
        B: '#forge:slimeballs'
    })

    modifyShaped(event, 'minecraft:bow', 1, [' AB', 'A B', ' AB'], {
        A: '#forge:rods/wooden',
        B: '#forge:string'
    })

    modifyShaped(event, 'minecraft:arrow', 8, [' A ', ' B ', ' C '], {
        A: '#forge:arrow_top',
        B: '#forge:rods/wooden',
        C: '#forge:feathers'
    })

})
