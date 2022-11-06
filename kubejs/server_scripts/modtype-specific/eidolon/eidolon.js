onEvent('recipes', event => {

    modifyShaped(event, 'eidolon:worktable', 1, ['AAA', 'BCB', 'DDD'], {
        A: 'minecraft:red_carpet',
        B: 'eidolon:pewter_ingot',
        C: 'naturesaura:ancient_planks',
        D: 'eidolon:wooden_altar'
    })

    modifyShaped(event, 'eidolon:brazier', 1, ['AAA', 'DBD', 'CDC'], {
        A: 'eidolon:pewter_ingot',
        B: 'allthecompressed:coal_block_1x',
        C: '#forge:rods/aluminum',
        D: 'eidolon:enchanted_ash'
    })

})
