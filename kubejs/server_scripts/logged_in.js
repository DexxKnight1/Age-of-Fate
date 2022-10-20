events.listen('player.logged_in', function (event) {

    if (!event.player.stages.has('starting_items')) {

        //Give the player a custom Akashic Tome
		event.player.give(Item.of('akashictome:tome', {
            'akashictome:data': {
                    industrialforegoing: {
                    id: 'patchouli:guide_book',
                    Count: 1,
                    tag: {
                            'akashictome:displayName': { text: "Industrial Foregoing's Manual" },
                            'patchouli:book': 'industrialforegoing:industrial_foregoing',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Industrial Foregoing\'s Manual"}]}'
                            }
                        }
                    },
				    allthemodium: {
                    id: 'patchouli:guide_book',
                    Count: 1,
                    tag: {
                            'akashictome:displayName': { text: "Allthemodium" },
                            'patchouli:book': 'allthemodium:allthemodium',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Allthemodium"}]}'
                            }
                        }
                    },
				    modularrouters: {
                    id: 'patchouli:guide_book',
                    Count: 1,
                    tag: {
                            'akashictome:displayName': { text: "Modular Routers Manual" },
                            'patchouli:book': 'modularrouters:book',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Modular Routers Manual"}]}'
                            }
                        }
                    },
				    advancedperipherals: {
                    id: 'patchouli:guide_book',
                    Count: 1,
                    tag: {
                            'akashictome:displayName': { text: "Advanced Peripherals" },
                            'patchouli:book': 'advancedperipherals:manual',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Advanced Peripherals"}]}'
                            }
                        }
                    },
				    extendedcrafting: {
                    id: 'patchouli:guide_book',
                    Count: 1,
                    tag: {
                            'akashictome:displayName': { text: "Extended Crafting" },
                            'patchouli:book': 'extendedcrafting:guide',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Extended Crafting"}]}'
                            }
                        }
                    },
				    simplyjetpacks: {
                    id: 'patchouli:guide_book',
                    Count: 1,
                    tag: {
                            'akashictome:displayName': { text: "Simple Jatpacks 2" },
                            'patchouli:book': 'simplyjetpacks:guidebook',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Simple Jatpacks 2"}]}'
                            }
                        }
                    },
					the_afterlight: {
                    id: 'patchouli:guide_book',
                    Count: 1,
                    tag: {
                            'akashictome:displayName': { text: "Afterlight Tome" },
                            'patchouli:book': 'the_afterlight:afterlight_tome',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Afterlight Tome"}]}'
                            }
                        }
                    },
                    'mana-and-artifice': {
                        id: 'mana-and-artifice:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Codex Arcana' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Codex Arcana"}]}'
                            }
                        }
                    },
                    theoneprobe: {
                        id: 'theoneprobe:probenote',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'The One Probe Settings' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"The One Probe Read Me"}]}'
                            }
                        }
                    },
				    securitycraft: {
                        id: 'securitycraft:sc_manual',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'SecurityCraft Manual' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"SecurityCraft Manual"}]}'
                            }
                        }
                    },
				    blue_skies: {
                        id: 'blue_skies:blue_journal',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Blue Journal' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Tome Of Blood"}]}'
                            }
                        }
                    },	
                    vampirism: {
                    id: 'guideapi-vp:vampirism-guidebook',
                    Count: 1,
                    tag: {
                            'akashictome:displayName': { text: "Vampirism Guide" },
                            'guideapi-vp:vampirism-guidebook': 'vampirism:guidebook',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Vampirism Guide"}]}'
                            }
                        }
                    },
				    enigmaticlegacy: {
                        id: 'enigmaticlegacy:the_acknowledgment',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'The Acknowledgment' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"The Acknowledgment"}]}'
                            }
                        }
                    },
				    forbidden_arcanus: {
                        id: 'forbidden_arcanus:forbiddenmicon',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Forbiddenmicon' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Forbiddenmicon"}]}'
                            }
                        }
                    },
				    tconstruct: {
                        id: 'tconstruct:encyclopedia',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Encyclopedia of Tinkering' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Encyclopedia of Tinkering"}]}'
                            }
                        }
                    },
				    forestcraft: {
                        id: 'forestcraft:guidebook',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Guide-Book' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Guide-Book"}]}'
                            }
                        }
                    },
                    astralsorcery: {
                        id: 'astralsorcery:tome',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Astral Tome' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Astral Tome"}]}'
                            }
                        }
                    },
				    alexsmobs: {
                        id: 'alexsmobs:animal_dictionary',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Animal Dictionary' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Animal Dictionary"}]}'
                            }
                        }
                    },
				    ftbquests: {
                        id: 'ftbquests:book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Quest Book' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Quest Book"}]}'
                            }
                        }
                    },
                    evilcraft: {
                        id: 'evilcraft:origins_of_darkness',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Origins of Darkness' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Origins of Darkness"}]}'
                            }
                        }
                    },
                    immersiveengineering: {
                        id: 'immersiveengineering:manual',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: "Engineer's Manual" },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Engineer\'s Manual"}]}'
                            }
                        }
                    },
				    engineersdecor: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: "Engineer's Decor" },
                            'patchouli:book': 'engineersdecor:engineersdecor_manual',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Engineer\'s Decor"}]}'
                            }
                        }
                    },
				    twilightforest: {
                    id: 'patchouli:guide_book',
                    Count: 1,
                    tag: {
                            'akashictome:displayName': { text: "Traveller's Logbook [WIP]" },
                            'patchouli:book': 'twilightforest:guide',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Traveller\'s Logbook [WIP]"}]}'
                            }
                        }
                    },
                    eidolon: {
                        id: 'eidolon:codex',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Ars Ecclesia' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Ars Ecclesia"}]}'
                            }
                        }
                    },
                    botania: {
                        id: 'botania:lexicon',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Lexica Botania' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Lexica Botania"}]}'
                            }
                        }
                    },
                    thermal: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Thermalpedia' },
                            'patchouli:book': 'thermal:guidebook',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Thermalpedia"}]}'
                            }
                        }
                    },
                    rftoolsbase: {
                        id: 'rftoolsbase:manual',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Technology Guide' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Technology Guide"}]}'
                            }
                        }
                    },
                    naturesaura: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Book of Natural Aura' },
                            'patchouli:book': 'naturesaura:book',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Book of Natural Aura"}]}'
                            }
                        }
                    },
                    storagenetwork: {
                    id: 'patchouli:guide_book',
                    Count: 1,
                    tag: {
                            'akashictome:displayName': { text: "Network Guide Book" },
                            'patchouli:book': 'storagenetwork:network_book',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Network Guide Book"}]}'
                            }
                        }
                    },
                    supplementaries: {
                    id: 'patchouli:guide_book',
                    Count: 1,
                    tag: {
                            'akashictome:displayName': { text: "Supplemental Manual" },
                            'patchouli:book': 'supplementaries:supplementaries_guide',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Supplemental Manual"}]}'
                            }
                        }
                    },
                    psi: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Encyclopaedia Psionica' },
                            'patchouli:book': 'psi:encyclopaedia_psionica',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Dictionary of Spirits"}]}'
                            }
                        }
                    },
                    solcarrot: {
                        id: 'solcarrot:food_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Food Book' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Food Book"}]}'
                            }
                        }
                    },
                    ars_nouveau: {
                        id: 'ars_nouveau:worn_notebook',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Worn Notebook' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Worn Notebook"}]}'
                            }
                        }
                    },
                    iceandfire: {
                        id: 'iceandfire:bestiary',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Bestiary' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Worn Notebook"}]}'
                            }
                        }
                    },
                    bigreactors: {
                    id: 'patchouli:guide_book',
                    Count: 1,
                    tag: {
                            'akashictome:displayName': { text: "The Extreme Book" },
                            'patchouli:book': 'bigreactors:erguide',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"The Extreme Book"}]}'
                            }
                        }
                    },
				    bloodmagic: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Sanguine Scientiem' },
                            'patchouli:book': 'bloodmagic:guide',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Sanguine Scientiem"}]}'
                            }
                        }
                    },
				    mysticalagriculture: {
                    id: 'patchouli:guide_book',
                    Count: 1,
                    tag: {
                            'akashictome:displayName': { text: "Mystical Agriculture" },
                            'patchouli:book': 'mysticalagriculture:guide',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Mystical Agriculture"}]}'
                            }
                        }
                    },
				    cyclic: {
                    id: 'patchouli:guide_book',
                    Count: 1,
                    tag: {
                            'akashictome:displayName': { text: "Cyclic Guidebook" },
                            'patchouli:book': 'cyclic:cyclic_guide_book',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Cyclic Guidebook"}]}'
                            }
                        }
                    },
					apotheosis: {
                    id: 'patchouli:guide_book',
                    Count: 1,
                    tag: {
                            'akashictome:displayName': { text: "Chronicle of Shadows" },
                            'patchouli:book': 'apotheosis:apoth_chronicle',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Chronicle of Shadows"}]}'
                            }
                        }
                    },
                    tomeofblood: {
                        id: 'tomeofblood:tome_of_blood',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Tome Of Blood' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Tome Of Blood"}]}'
                            }
                        }
                    }
            }
        }))

        //Add the Game Stage, preventing them getting it again.
        event.player.stages.add('starting_items')
    }
})
