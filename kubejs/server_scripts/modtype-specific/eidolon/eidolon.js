onEvent('recipes', event => {

    event.remove({output: 'eidolon:crucible'})
    event.remove({output: 'eidolon:worktable'})
    event.remove({output: 'eidolon:brazier'})

    event.shaped('eidolon:crucible', ['B B', 'B B', 'AAA'], {
      A: 'eidolon:pewter_block',
      B: 'eidolon:pewter_ingot'
    }).id(`kubejs:eidolon/crucible`)

    event.shaped('eidolon:worktable', ['AAA', 'BCB', 'DDD'], {
        A: 'minecraft:red_carpet',
        B: 'eidolon:pewter_ingot',
        C: 'naturesaura:ancient_planks',
        D: 'eidolon:wooden_altar'
    }).id(`kubejs:eidolon/magic_workbench`)

    event.shaped('eidolon:brazier', ['AAA', 'DBD', 'CDC'], {
        A: 'eidolon:pewter_ingot',
        B: 'allthecompressed:coal_block_1x',
        C: '#forge:rods/aluminum',
        D: 'eidolon:enchanted_ash'
    }).id(`kubejs:eidolon/brazier`)

})
