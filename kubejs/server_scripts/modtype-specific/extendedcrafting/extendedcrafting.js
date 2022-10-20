onEvent('recipes', (event) => {

    event.remove({output: 'extendedcrafting:basic_auto_table'})
    event.remove({output: 'extendedcrafting:advanced_auto_table'})
    event.remove({output: 'extendedcrafting:elite_auto_table'})
    event.remove({output: 'extendedcrafting:ultimate_auto_table'})
    event.remove({output: 'extendedcrafting:frame'})
    event.remove({output: 'extendedcrafting:compressor'})
 
    //The Ultimate Ingot
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "ooApppAoo",
            "oBCDEFGHo",
            "AIJKLMNOA",
            "pPQRSTUVp",
            "pWXYZ123p",
            "p4567890p",
            "AabcdefgA",
            "ohijklmno",
            "ooApppAoo",
        ],
        key: {
            A: {item: "extendedcrafting:black_iron_ingot", },
            B: {item: "minecraft:iron_ingot", },
            C: {item: "minecraft:gold_ingot", },
            D: {item: "alltheores:aluminum_ingot", },
            E: {item: "alltheores:copper_ingot", },
            F: {item: "alltheores:lead_ingot", },
            G: {item: "alltheores:nickel_ingot", },
            H: {item: "alltheores:osmium_ingot", },
            I: {item: "alltheores:zinc_ingot", },
            J: {item: "alltheores:silver_ingot", },
            K: {item: "alltheores:tin_ingot", },
            L: {item: "alltheores:uranium_ingot", },
            M: {item: "alltheores:platinum_ingot", },
            N: {item: "botania:manasteel_ingot", },
            O: {item: "botania:elementium_ingot", },
            P: {item: "botania:terrasteel_ingot", },
            Q: {item: "tconstruct:cobalt_ingot", },
            R: {item: "tconstruct:slimesteel_ingot", },
            S: {item: "tconstruct:queens_slime_ingot", },
            T: {item: "tconstruct:manyullyn_ingot", },
            U: {item: "tconstruct:hepatizon_ingot", },
            V: {item: "minecraft:netherite_ingot", },
            W: {item: "mysticalagriculture:inferium_ingot", },
            X: {item: "mysticalagriculture:prudentium_ingot", },
            Y: {item: "mysticalagriculture:tertium_ingot", },
            Z: {item: "mysticalagriculture:imperium_ingot", },
            1: {item: "mysticalagriculture:supremium_ingot", },
            2: {item: "mysticalagradditions:insanium_ingot", },
            3: {item: "forestcraft:enderite_ingot", },
            4: {item: "mekanism:ingot_refined_obsidian", },
            5: {item: "mekanism:ingot_refined_glowstone", },
            6: {item: "mekanism:ingot_steel", },
            7: {item: "astralsorcery:starmetal_ingot", },
            8: {item: "eidolon:pewter_ingot", },
            9: {item: "forbidden_arcanus:obsidian_ingot", },
            0: {item: "eidolon:arcane_gold_ingot", },
            a: {item: "forestcraft:molten_ingot", }, 
            b: {item: "allthemodium:allthemodium_ingot", },
            c: {item: "allthemodium:unobtainium_ingot", },
            d: {item: "allthemodium:vibranium_ingot", },
            e: {item: "lazierae2:fluix_steel_ingot", },
            f: {item: "projectred-core:red_ingot", },
            g: {item: "projectred-core:electrotine_ingot", },
            h: {item: "endrem:end_crystal_ingot", },
            i: {item: "thermal:bronze_ingot", },
            j: {item: "thermal:invar_ingot", },
            k: {item: "thermal:constantan_ingot", },
            l: {item: "thermal:signalum_ingot", },
            m: {item: "thermal:lumium_ingot", },
            n: {item: "thermal:enderium_ingot", },
            o: {item: "minecraft:nether_star", },
            p: {item: "extendedcrafting:ender_star", },
        },
        result: {item: "extendedcrafting:the_ultimate_ingot", },
    }).id(`kubejs:extendedcrafting/the_ultimate_ingot`)

    //Auto Crafting Tables
    event.shaped('extendedcrafting:basic_auto_table', ['ABA', 'CDC', 'ABA'], {
        A: 'extendedcrafting:black_iron_block',
        B: 'extendedcrafting:redstone_catalyst',
        C: 'extendedcrafting:crystaltine_catalyst',
        D: 'extendedcrafting:basic_table'
    }).id(`kubejs:extendedcrafting/basic_auto_table`)

    event.shaped('extendedcrafting:advanced_auto_table', ['ABA', 'CDC', 'ABA'], {
        A: 'extendedcrafting:black_iron_block',
        B: 'extendedcrafting:redstone_catalyst',
        C: 'extendedcrafting:crystaltine_catalyst',
        D: 'extendedcrafting:advanced_table'
    }).id(`kubejs:extendedcrafting/advanced_auto_table`)

    event.shaped('extendedcrafting:elite_auto_table', ['ABA', 'CDC', 'ABA'], {
        A: 'extendedcrafting:black_iron_block',
        B: 'extendedcrafting:redstone_catalyst',
        C: 'extendedcrafting:crystaltine_catalyst',
        D: 'extendedcrafting:elite_table'
    }).id(`kubejs:extendedcrafting/elite_auto_table`)

    event.shaped('extendedcrafting:ultimate_auto_table', ['ABA', 'CDC', 'ABA'], {
        A: 'extendedcrafting:black_iron_block',
        B: 'extendedcrafting:redstone_catalyst',
        C: 'extendedcrafting:crystaltine_catalyst',
        D: 'extendedcrafting:ultimate_table'
    }).id(`kubejs:extendedcrafting/ultimate_auto_table`)

    //Black Iron Frame
    event.shaped('extendedcrafting:frame', ['ABA', 'BCB', 'ABA'], {
        A: 'extendedcrafting:black_iron_block',
        B: 'extendedcrafting:ender_star',
        C: 'extendedcrafting:crystaltine_catalyst'
    }).id(`kubejs:extendedcrafting/frame`)

    //Queantum Comressor
    event.shaped('extendedcrafting:compressor', ['ABA', 'CEC', 'ADA'], {
        A: 'extendedcrafting:black_iron_block',
        B: 'extendedcrafting:crystaltine_catalyst',
        C: 'extendedcrafting:the_ultimate_catalyst',
        D: 'extendedcrafting:black_iron_slate',
        E: 'extendedcrafting:frame'
    }).id(`kubejs:extendedcrafting/compressor`)

})
