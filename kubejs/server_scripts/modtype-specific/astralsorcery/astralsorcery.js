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

})
