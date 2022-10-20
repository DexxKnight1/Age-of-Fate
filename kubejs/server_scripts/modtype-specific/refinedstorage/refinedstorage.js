onEvent('recipes', (event) => {

  event.remove({ output: 'refinedstorage:raw_basic_processor'})
  event.remove({ output: 'refinedstorage:raw_improved_processor'})
  event.remove({ output: 'refinedstorage:raw_advanced_processor'})
  event.remove({ output: 'extradisks:raw_withering_processor'})
  
  event.remove({ output: 'refinedstorage:silicon'})
  event.remove({id: 'extradisks:disk/shaped/infinite_storage_disk'})
  event.remove({id: 'extradisks:advanced_storage_housing'})
  
  event.remove({ output: 'creativecrafter:creative_crafter' })
  event.remove({ output: 'creativewirelesstransmitter:creative_wireless_transmitter' })
  event.remove({ output: 'refinedstorage:machine_casing'})
  
  event.shapeless('refinedstorage:raw_basic_processor', ['refinedstorage:processor_binding', 'projectred-core:electrotine_ingot', 'projectred-core:silicon', 'minecraft:redstone']).id(`kubejs:refinedstorage/raw_basic_processor`)
  event.shapeless('refinedstorage:raw_improved_processor', ['refinedstorage:processor_binding', 'tconstruct:rose_gold_ingot', 'projectred-core:silicon', 'minecraft:redstone']).id(`kubejs:refinedstorage/raw_improved_processor`)
  event.shapeless('refinedstorage:raw_advanced_processor', ['refinedstorage:processor_binding', 'rftoolsbase:infused_diamond', 'projectred-core:silicon', 'minecraft:redstone']).id(`kubejs:refinedstorage/raw_advanced_processor`)
  event.shapeless('extradisks:raw_withering_processor', ['refinedstorage:processor_binding', 'astralsorcery:shifting_star', 'projectred-core:silicon', 'minecraft:redstone']).id(`kubejs:extradisks/raw_withering_processor`)
  
  event.shaped(Item.of('refinedstorage:machine_casing', 1), [
      'ABA',
      'CDC',
      'ABA'
    ], {
          A: 'refinedstorage:quartz_enriched_iron',
          B: '#forge:coins/invar',
          C: 'industrialforegoing:plastic',
          D: '#forge:stone'
  }).id(`kubejs:refinedstorage/machine_casing`)

  event.shaped(Item.of('extradisks:infinite_storage_disk', 1), [
			'DED',
			'EHE',
			'FGF'
	  ], {
            D: '#forge:glass',
            E: 'refinedstorage:quartz_enriched_iron',
            F: 'extradisks:withering_processor',
			      H: 'extradisks:infinite_storage_part',
			      G: 'extrastorage:neural_processor'
  }).id(`kubejs:extradisks/infinite_storage_disk`)
	
	event.shaped(Item.of('extradisks:advanced_storage_housing', 1), [
			'DED',
			'E E',
			'FGF'
	  ], {
            D: '#forge:glass',
            E: 'refinedstorage:quartz_enriched_iron',
            F: 'extradisks:withering_processor',
			      G: 'extrastorage:neural_processor'
    }).id(`kubejs:extradisks/advanced_storage_housing`)
  
  event.replaceInput({item: 'refinedstorage:silicon'}, 'projectred-core:silicon')
  
})
