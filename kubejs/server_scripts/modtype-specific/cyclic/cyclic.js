onEvent('recipes', (event) => {

    event.remove({output: 'cyclic:crafter'})

    event.shaped('cyclic:crafter', ['ABA', 'CDC', 'ABA'], {
        A: 'allthecompressed:lapis_block_1x',
        B: 'xkdeco:tech_console',
        C: 'create:sticky_mechanical_piston',
        D: 'cyclic:gem_amber'
    }).id(`kubejs:cyclic/crafter`)

    event.shaped('cyclic:apple_diamond', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:diamond_block',
        B: 'cyclic:apple_honey'
    }).id(`kubejs:cyclic/apple_diamond`)

    event.shaped('cyclic:apple_emerald', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:emerald_block',
        B: 'cyclic:apple_honey'
    }).id(`kubejs:cyclic/apple_emerald`)

})
