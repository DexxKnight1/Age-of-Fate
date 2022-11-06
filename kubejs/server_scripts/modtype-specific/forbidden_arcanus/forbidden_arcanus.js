onEvent('recipes', (event) => {
	
  event.remove({id: 'forbidden_arcanus:eternal_stella'})
  event.remove({id: 'forbidden_arcanus:arcane_gold_ingot_1'})
  event.remove({id: 'forbidden_arcanus:arcane_gold_ingot_2'})
  event.remove({id: 'forbidden_arcanus:arcane_gold_ingot_3'})

  event.shaped('forbidden_arcanus:eternal_stella', ['DBC', 'BAB', 'CBD'], {
    A: 'forbidden_arcanus:stellarite_piece',
    B: 'forbidden_arcanus:xpetrified_orb',
    C: 'allthemodium:allthemodium_ingot',
    D: '#forge:ingot/hexium'
  }).id(`kubejs:forbidden_arcanus/eternal_stella`)
  
})
