onEvent('recipes', (event) => {
	
  event.remove({ output: 'forbidden_arcanus:eternal_stella'})

  event.shaped('forbidden_arcanus:eternal_stella', ['DBC', 'BAB', 'CBD'], {
    A: 'forbidden_arcanus:stellarite_piece',
    B: 'forbidden_arcanus:xpetrified_orb',
    C: 'allthemodium:allthemodium_ingot',
    D: '#forge:ingot/hexium'
  }).id(`kubejs:forbidden_arcanus/eternal_stella`)
  
})
