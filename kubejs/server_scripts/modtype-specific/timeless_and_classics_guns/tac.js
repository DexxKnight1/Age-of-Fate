onEvent('recipes', (event) => {

    event.remove({id: 'tac:craft_timeless_workbench'})

    event.shaped('tac:workbench', ['AAA', 'BCB', 'DED'], {
        A: '#minecraft:logs',
        B: 'allthecompressed:steel_block_3x',
        C: 'rftoolscontrol:processor',
        D: 'forestcraft:enderite_ingot',
        E: 'rftoolscontrol:programmer'
    }).id(`kubejs:tac/workbench`)     

})
