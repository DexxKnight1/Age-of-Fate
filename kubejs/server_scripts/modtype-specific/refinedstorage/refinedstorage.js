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
  
  event.shaped('refinedstorage:machine_casing', ['ABA', 'CDC', 'ABA'], {
    A: 'refinedstorage:quartz_enriched_iron',
    B: 'projectred-core:silicon',
    C: 'industrialforegoing:plastic',
    D: 'thermal:enderium_glass'
  }).id(`kubejs:refinedstorage/machine_casing`)

  event.shaped('extradisks:infinite_storage_disk', ['DED', 'EHE', 'FGF'], {
    D: 'thermal:enderium_glass',
    E: 'refinedstorage:quartz_enriched_iron',
    F: 'extradisks:withering_processor',
		H: 'extradisks:infinite_storage_part',
		G: 'extrastorage:neural_processor'
  }).id(`kubejs:extradisks/infinite_storage_disk`)
	
	event.shaped('extradisks:advanced_storage_housing', ['DED', 'E E', 'FGF'], {
    D: 'thermal:enderium_glass',
    E: 'refinedstorage:quartz_enriched_iron',
    F: 'extradisks:withering_processor',
		G: 'extrastorage:neural_processor'
  }).id(`kubejs:extradisks/advanced_storage_housing`)
  
  event.replaceInput({item: 'refinedstorage:silicon'}, 'projectred-core:silicon')
  
})
