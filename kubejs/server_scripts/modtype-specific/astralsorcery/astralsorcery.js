onEvent('recipes', (event) => {

  const recipes = [
    {
        input: { block: 'eidolon:worktable' },
        output: { block: 'astralsorcery:altar_discovery' },
        starlight: 60,
        id: 'astralsorcery:block_transmutation/craftingtable_altar'
    },
    {
        input: { block: 'minecraft:iron_ore' },
        output: { block: 'astralsorcery:starmetal_ore' },
        starlight: 100,
        id: 'astralsorcery:block_transmutation/iron_starmetal'
    },
  ]

  recipes.forEach((recipe) => {
    recipe.type = 'astralsorcery:block_transmutation';
    event.custom(recipe).id(recipe.id);
  })
  
  //event.remove({id: 'astralsorcery:block_transmutation/craftingtable_altar'})

  //event.recipes.astralsorcery.infuser({
    //fluidInput: 'astralsorcery:liquid_starlight',
    //input: { item: 'quark:marble' },
    //output: { item: 'astralsorcery:marble_raw', count: 1 },
    //consumptionChance: 0.1,
    //duration: 100,
    //consumeMultipleFluids: false,
    //acceptChaliceInput: true,
    //copyNBTToOutputs: false
  //}).id(`kubejs:astralsorcery/infuser/marble_raw`)

})
