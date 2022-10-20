onEvent('recipes', (event) => {

    event.remove({id: 'magistuarmory:steel_ingot_blasting'})
    event.remove({id: 'xreliquary:alkahestry/craftinf/steel_ingot'})

    event.replaceInput({type: 'magistuarmory:crafting_shaped'}, 'magistuarmory:steel_ingot', 'mekanism:ingot_steel')

    event.shaped('magistuarmory:chainmail_horse_armor', ['  A', 'ABA', 'ACA'], {
        A: 'byg:chain_plating',
        B: 'minecraft:saddle',
        C: 'druidcraft:rope'
    }).id(`kubejs:magistuarmory/chainmail_horse_armor`)

})
