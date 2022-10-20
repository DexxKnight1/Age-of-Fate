onEvent('recipes', (event) => {

    event.remove({output: 'ars_nouveau:mana_jar'})
    event.remove({output: 'ars_nouveau:glyph_press'})
    event.remove({output: 'ars_nouveau:arcane_core'})
    event.remove({output: 'ars_nouveau:arcane_pedestal'})
    event.remove({output: 'ars_nouveau:enchanting_apparatus'})
    event.remove({output: 'ars_nouveau:spell_prism'})

    event.shaped('ars_nouveau:mana_jar', ['ADA', 'BCB', 'ADA'], {
        A: '#forge:ingots/brass',
        B: '#forge:ingots/gold',
        C: 'supplementaries:jar_tinted',
        D: 'ars_nouveau:warding_stone'
    }).id(`kubejs:ars_nouveau/mana_jar`)

    event.shaped('ars_nouveau:glyph_press', ['BDB', 'ACA', 'BDB'], {
        A: '#forge:ingots/brass',
        B: '#forge:ingots/gold',
        C: 'create:mechanical_piston',
        D: 'ars_nouveau:warding_stone'
    }).id(`kubejs:ars_nouveau/glyph_press`)

    event.shaped('ars_nouveau:arcane_core', ['CAC', 'BDB', 'CAC'], {
        A: 'ars_nouveau:warding_stone',
        B: '#forge:ingots/brass',
        C: '#forge:ingots/gold',
        D: ['#forge:storage_blocks/lapis', '#forge:storage_blocks/fluorite', '#forge:storage_blocks/sulfur']
    }).id(`kubejs:ars_nouveau/arcane_core`)

    event.shaped('ars_nouveau:arcane_pedestal', ['CAC', 'BDB', 'CDC'], {
        A: 'ars_nouveau:arcane_stone',
        B: '#forge:ingots/brass',
        C: '#forge:ingots/gold',
        D: ['#forge:gems/lapis', '#forge:gems/fluorite', '#forge:gems/sulfur']
    }).id(`kubejs:ars_nouveau/arcane_pedestal`)

    event.shaped('ars_nouveau:enchanting_apparatus', ['CAC', 'BDB', 'CAC'], {
        A: 'ars_nouveau:warding_stone',
        B: '#forge:ingots/brass',
        C: '#forge:ingots/gold',
        D: 'industrialforegoing:pink_slime_ingot'
    }).id(`kubejs:ars_nouveau/enchanting_apparatus`)

    event.shaped('ars_nouveau:spell_prism', ['CAC', 'BDB', 'CAC'], {
        A: 'immersiveengineering:treated_wood_horizontal',
        B: 'botania:spell_cloth',
        C: 'allthecompressed:gold_block_2x',
        D: '#forge:quartz'
    }).id(`kubejs:ars_nouveau/spell_prism`)

})
