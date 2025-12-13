# 📋Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

⚠️ **ALWAYS BACKUP YOUR WORLD BEFORE UPDATING!**

💡 **Java Argument Optimization**: Check out these recommendations by [clicking here](https://github.com/TheUsefulLists/UsefulMods/blob/main/JavaArgumentsOptimization.md).

---

Table of Contents
- [4.4.5] - 2025-12-09 (Latest)
- [4.4.4] - 2025-12-08
- [4.4.3] - 2025-12-07
- [4.4.2] - 2025-12-06
- [4.4.1] - 2025-12-05
- [4.4.0] - 2025-12-04
- [4.3.9] - 2025-12-03
- [4.3.8] - 2025-12-02
- [4.3.7] - 2025-11-30
- [4.3.6] - 2025-11-29
- [4.3.5] - 2025-11-28
- [4.3.4] - 2025-11-27
- [4.3.3] - 2025-11-26
- [4.3.2] - 2025-11-25
- [4.3.1] - 2025-11-24
- [4.3.0] - 2025-11-23
- [4.2.9] - 2025-11-22
- [4.2.8] - 2025-11-21
- [4.2.7] - 2025-11-20
- [4.2.6] - 2025-11-19
- [4.2.5] - 2025-11-18
- [4.2.4] - 2025-11-17
- [4.2.3] - 2025-11-16
- [4.2.2] - 2025-11-15
- [4.2.1] - 2025-11-14
- [4.2.0] - 2025-11-13
- [4.1.9] - 2025-11-12
- [4.1.8] - 2025-11-11
- [4.1.7] - 2025-11-10
- [4.1.6] - 2025-11-09
- [4.1.5] - 2025-11-08
- [4.1.4] - 2025-11-07
- [4.1.3] - 2025-11-06
- [4.1.2] - 2025-11-05
- [4.1.1] - 2025-11-04
- [4.1.0] - 2025-11-03
- [4.0.9] - 2025-11-02
- [4.0.8] - 2025-11-01
- [4.0.7] - 2025-10-31
- [4.0.6] - 2025-10-30
- [4.0.5] - 2025-10-29
- [4.0.4] - 2025-10-28
- [4.0.3] - 2025-10-27
- [4.0.2] - 2025-10-26
- [4.0.1] - 2025-10-25
- [[4.0.0] - 2025-02-26 (Initial 1.20.1 Release)](https://github.com/DexxKnight1/Age-of-Fate/edit/main/Changelogs%20%5B1.20.1%5D.md#-aof-v445---20251209)

---

# 🎮 [AOF-v4.4.5] - 2025.12.09

### ⚡ Performance & Stability Improvements

### 🔥 Critical Updates

**Server Crash Fix**
- Fixed server crash caused by Adaptive Optimization on dedicated servers
- Adaptive Optimization now **client-only** (maintains client FPS benefits)
- Server pack excludes Adaptive to prevent ClassNotFoundException crashes
- **Dual-pack strategy**: 694 mods (client) / 634 mods (server)

**Shader Performance Breakthrough**
- Removed Vanillin to resolve shader incompatibilities
- Shader FPS improved by **100-133%** (180-350 FPS with shaders)
- Clean rendering pipeline with Oculus + Xenon
- Confirmed Vanillin + Flywheel rendering pipeline conflict resolved

### 📊 Performance Benchmarks

*Tested on i7-14700K / RTX 4070 Ti SUPER / 64GB RAM*

- **Client FPS with shaders**: 180-350 FPS (up from ~150 baseline)
- **Client FPS without shaders**: 500-900 FPS (up from ~500 baseline)
- **Server**: Zero "can't keep up" warnings during exploration
- **Stability**: 99%+ smooth gameplay, minimal frame drops
- **Boot time**: ~183 seconds with 634 mods on server

### 🔑 Key Optimizations

- Async chunk generation (ServerCore) eliminates server lag warnings
- Real-time client FPS optimization (Adaptive on client only)
- Fast chunk transmission (Chunk Sending mod)
- Perfect client-server synchronization (Sync Fix)
- Optimized structure generation (Structure Layout Optimizer)

### ✅ Fixed
- Fixed missing rewards for some quests
- Fixed server crash caused by Adaptive Optimization on dedicated servers
### ➕ Added
- Added Sync Fix
- Added Adaptive Optimization(reborn)
- Added Utilitarian
- Added Sparse Structures
### 🔄 Changed
- Updated Doggy Talents Next
- Updated Guard Villagers
- Updated Just Enough Breeding (JEBr)
- Updated Macaw's Fences and Walls
- Updated Macaw's Lights and Lamps
- Updated Medieval Origins Revival
- Updated MineColonies
- Updated ModernFix
- Updated MVS - Moog's Voyager Structures
- Updated Oh The Biomes We've Gone
- Updated Sophisticated Backpacks
- Updated Sophisticated Core
- Updated THE UNDEAD REVAMPED
### ➖ Removed
- Removed chunky chunks! [Not needed]
- Removed Better Advancements [Not needed]
- Removed FastEvent [Not needed]
- Removed Krypton FNP [Not needed]
- Removed Sodium/Embeddium Dynamic Lights [Incompatible with Lucent]
- Removed No Startup Messages Please [Feature implemented in the Utilitarian mod]
- Removed No More Trampling [Feature implemented in the Utilitarian mod]
- Removed Snad [Feature implemented in the Utilitarian mod]
- Removed MiniCoal [Feature implemented in the Utilitarian mod]
- Removed Save My Shaky Network [Not needed]
- Removed Dynamic View [Feature implemented in the ServerCore mod]
- Removed Sparse Structures Reforged [Replaced by Sparse Structures mod]
- Removed TickAccelerate [Not needed]
- Removed **Vanillin** [Incompatible with Shaders - Confirmed Flywheel conflict causing shader performance degradation]

### 🔬 Technical Notes

**Mod Stack Performance Validation**

**S++ Tier (Critical - Game Changing):**
- **Xenon**: Handles 900 FPS rendering without shaders, 350 FPS with shaders
- **Oculus**: Shader support with optimized rendering pipeline
- **ServerCore**: Async chunk generation eliminates "can't keep up" warnings
- **FerriteCore**: Memory optimization foundation
- **ModernFix**: Fast boot (183s) and runtime optimizations
- **Structure Layout Optimizer**: Minimizes frame drops during structure generation

**S Tier (Essential - Major Impact):**
- **Adaptive Optimization** (client-only): Real-time FPS adaptation proven effective
- **Chunk Sending**: Fast chunk transmission, no client bottleneck
- **Sync Fix**: Perfect client-server synchronization

**A Tier (Important):**
- **ImmediatelyFast**: Rendering optimizations
- **Connectivity**: Network optimization
- **NBT Diagnostic**: NBT operation optimization

### 📦 Pack Deployment

- **Singleplayer/Client**: Use full pack (694 mods with Adaptive)
- **Dedicated Server**: Use server pack (634 mods without Adaptive)
- **Difference**: 60 mods (client-side rendering, optimization, and UI mods)

> 📝 **Note**: Performance scales higher on dedicated hosting (tested on 8GB localhost, better expected on 15GB+ dedicated servers with independent resources)

---

# 🎮 [AOF-v4.4.4] - 2025.12.06

### ✅ Fixed
- Fixed [Bug]: Server cannot start #121
- Fixed [Bug]: Immersive Airship hull recipe does not work #122
- Fixed Immersive Engineering coil recipes
- Fixed and removed some duplicate recipes
- Fixed Reward tables the Quest book
- Fixed Datapack mess
- Resolved the excavating issue by disabling that enchantment [Use FTB Ultimine instead]
### ➕ Added
- Added Industrial Heavy Metal Thunder
- Added Twilight Forest Final Boss (remake)
- Added Twilight Forest Cave Fix
- Added RPG Origins
- Added Packet Fixer
- Added MMV - Moog's Missing Villages
### 🔄 Changed
- Updated Forge to v47.4.13
- Updated Aquaculture 2
- Updated Better Combat
- Updated Crash Assistant
- Updated Dank Storage
- Updated Eccentric Tome
- Updated Extreme Reactors
- Updated Extended Terminal
- Updated Forestry: Community Edition
- Updated FTB Library
- Updated Guard Villagers
- Updated Kiwi 🥝
- Updated Kotlin for Forge
- Updated Krypton FNP
- Updated Netherite Tweaks & Fixes
- Updated Save My Shaky Network
### ➖ Removed
- Removed Twilight Forest Final Boss
- Removed Twilight Tweaks
- Removed Integrated Villages [Prevents the CTOV mod from working properly]

---

# 🎮 [AOF-v4.4.3] - 2025.12.01

### ✅ Fixed
- Polished and cleaned all KubeJS scripts
- Resolved Eternal modifier exploit by adding a blacklist through datapack. Thanks to @Cyn-SolveroftheAbsolute Gremlins
- Fixed Allthemodium structure spawners spawning below Apotheosis minimum depth via datapack. Thanks to @Cyn-SolveroftheAbsolute Gremlins
- Implemented automated quest reward system with custom tradeable items, shop integration, and optional paper conversion. Thanks to @Cyn-SolveroftheAbsolute Gremlins
### ➕ Added
- Added LightSpeedRe - Launch optimizations
### 🔄 Changed
- Updated A Quarky Registry Fix
- Updated Advanced Loot Info
- Updated Eidolon : Repraised
- Updated FTB Quests
- Updated Gnetum
- Updated Guard Villagers
- Updated Hostile Mobs and Girls (HMaG)
- Updated Icarus
- Updated Just Enough Items (JEI)
- Updated Lootr
- Updated MineColonies
- Updated Sophisticated Storage
- Updated Structurize
### ➖ Removed
- Removed Create: Alex's Caves Compat [currently incompatible with the Create version]

---

# 🎮 [AOF-v4.4.2] - 2025.11.24

### ✅ Fixed
- Fixed [Bug]: can't use /withdraw #119
### 🔄 Changed
- Updated Forge to v47.4.12
- Updated Applied Energistics 2 Wireless Terminals
- Updated Blood Magic
- Updated Crash Assistant
- Updated Create: Escalated
- Updated Data Anchor
- Updated Drippy Loading Screen
- Updated Extended Terminal
- Updated ExtendedAE
- Updated FancyMenu
- Updated Just Enough Items (JEI)
- Updated Macaw's Furniture
- Updated Macaw's Trapdoors
- Updated MineColonies
### ➖ Removed
- Removed Tooltip Integration

---

# 🎮 [AOF-v4.4.1] - 2025.11.21

### ✅ Fixed
- 🔥 HOT FIX: the IGSEconomy folder was missed

---

# 🎮 [AOF-v4.4.0] - 2025.11.21

### ✅ Fixed
- Fixed [Bug]: Can't shoot with a Draconic Bow (Draconic Evolution) #118
- Fixed the amount of ATM molten fluids from 1000 mb to the correct 810 mb
### ➕ Added
- Added missing ores into Mining Dimension
- Added Sophisticated Storage Create Integration
### 🔄 Changed
- Improved Currency System, thanks to TheStraying11, Nahaj, and the InfiniteGamingServers team
- Disabled shaders by default when launching the game
- Disabled Extended Terminal mod [not entirely removed] until the mod devs fix the issue
- Updated Advanced Loot Info
- Updated AllTheLeaks (Memory Leak Fix)
- Updated Amendments
- Updated Applied Mekanistics
- Updated Born In Configuration
- Updated Crash Assistant
- Updated Eidolon : Repraised
- Updated Euphoria Patches
- Updated Forestry: Community Edition
- Updated FTB Quests
- Updated Icarus
- Updated Just Enough Items (JEI)
- Updated Moog's Structure Lib (moogs_structures)
- Updated Save My Shaky Network
- Updated Sinytra Connector

---

# 🎮 [AOF-v4.3.9] - 2025.11.16

### ✅ Fixed
- Fixed minor recipe issues
### ➕ Added
- Added A Quarky Registry Fix
- Added Nyfs Spiders Au Naturel Edit
- Added quick pack
- Added Netherite Tweaks & Fixes
- Added Void Miner: Fully Automated
- Added Mango's MultiBlock Library
- Added Void Miner Quests
### 🔄 Changed
- Updated Actually Subtractions
- Updated Advanced Loot Info
- Updated AE Additions - ExtraCells2 Fork
- Updated BisectHosting Server Integration Menu
- Updated Chat Heads
- Updated Common Capabilities
- Updated Crash Assistant
- Updated Create Crafts & Additions
- Updated Cyclops Core
- Updated Deimos Lib
- Updated Euphoria Patches
- Updated EvilCraft
- Updated FTB Quests
- Updated Gnetum
- Updated Inventory Essentials
- Updated Just Enough Items (JEI)
- Updated MineColonies
- Updated MNS - Moog's Nether Structures
- Updated Oh The Biomes We've Gone
- Updated PackagedAuto
- Updated Structurize
- Updated Treasure2
### ➖ Removed
- Removed Infinity Nexus Miner [Replaced by Void Miner: Fully Automated]
- Removed Infinity Nexus Core
- Removed Nyf's Spiders [Replaced by Nyfs Spiders Au Naturel Edit]

---

# 🎮 [AOF-v4.3.8] - 2025.11.10

### ✅ Fixed
- Fixed [Bug]: JEI does not display ATM Furnaces
- Added a warning note to address the possibility that items with durability could be voided when using the Lost Engine spellstone
- Fixed a few recipe bugs
### ➕ Added
- Added Allthemodium Quests
- Added Iron Furnaces Enhanced
- Added FTB Chunks Compatibility
- Added Just Enough Archaeology
### 🔄 Changed
- Updated Crash Assistant
- Updated Hostile Mobs and Girls (HMaG)
- Updated Macaw's Furniture
- Updated MineColonies
- Updated ModernFix
### ➖ Removed
- Removed AzureLib
- Removed Item Production Lib
- Removed Nolijium
- Removed Tickrate API
- Removed Necronomicon API
- Removed AeroBlender
- Removed AE2AddonLib
- Removed Iron Furnaces

---

# 🎮 [AOF-v4.3.7] - 2025.11.07

### ➕ Added
- Added Origins (Fabric)
- Added Sinytra Connector
- Added Connector Extras
- Added Krypton FNP
### 🔄 Changed
- Disabled Krampus and Krampus Henchman from spawning to prevent deleting players' items
- Updated Advanced Loot Info
- Updated AE2: Crafting Tree
- Updated AllTheLeaks (Memory Leak Fix)
- Updated Battle Towers – Thexian
- Updated Create
- Updated Cucumber Library
- Updated Domum Ornamentum
- Updated Enchant With Mob
- Updated Ender IO
- Updated Euphoria Patches
- Updated Generator Galore
- Updated Just Enough Breeding (JEBr)
- Updated Just Enough Items (JEI)
- Updated Medieval Origins Revival
- Updated MineColonies
- Updated Moderately Enough Effect Descriptions (MEED)
- Updated ModernFix
- Updated Moonlight Lib
- Updated Mystical Agradditions
- Updated OptiLeaves
- Updated T.O Magic 'n Extras - Iron's Spells Addon
- Updated THE UNDEAD REVAMPED
### ➖ Removed
- Removed Mermod
- Removed Origins (Forge)
- Removed Origins RPG
- Removed Alternate Origin GUI

---

# 🎮 [AOF-v4.3.6] - 2025.11.02

### 🔄 Changed
- Updated Aquamirae
- Updated Crash Assistant
- Updated Entity Culling
- Updated Gnetum
- Updated Inventory Essentials
- Updated Just Enough Items (JEI)
- Updated Just Enough Mekanism Multiblocks
- Updated MineColonies
- Updated Obscure API
- Updated Oh The Biomes We've Gone
- Updated Save My Shaky Network
- Updated Sophisticated Backpacks
- Updated Sophisticated Core
- Updated Sophisticated Storage
- Updated Thermal Extra
- Updated Tinkers Integrations and Tweaks
- Updated Treasure2
### ➖ Removed
- Removed Ice And Fire Patcher

---

# 🎮 [AOF-v4.3.5] - 2025.10.28

### ✅ Fixed
- Fixed Crates/Bags tags by the Basic Agriculture questline
### ➕ Added
- Added Skeleton AI Fix
- Added Achievements Optimizer
- Added AE2AddonLib
### 🔄 Changed
- Updated Actually Divisions
- Updated AdvancedAE
- Updated Applied Energistics 2 Wireless Terminals
- Updated Born in Chaos
- Updated Crash Assistant
- Updated Colorwheel
- Updated Create
- Updated Laser Bridges & Doors
- Updated Midnight Madness
- Updated MineColonies
- Updated MNS - Moog's Nether Structures
- Updated T.O Magic 'n Extras - Iron's Spells Addon
### ➖ Removed
- Removed Ars Botania
- Removed Ars Fauna

---

# [AOF-v4.3.4] - 2025.10.25
### ✅ Fixed
- Fixed Medieval Origins Revival sizing issue, #ticket-0312
- Fixed Farmer's Delight and Quark crates/bags recipe issues, #ticket-0307
### ➕ Added
- Added Great Scrollable Tooltips
### 🔄 Changed
- Downgraded AzureLib to v 3.0.27
- Updated Allthemodium
- Updated Applied Energistics 2
- Updated Collective
- Updated Crash Assistant
- Updated Cyclops Core
- Updated Dreadsteel
- Updated ExtendedAE
- Updated Just Enough Immersive Multiblocks
- Updated MineColonies
- Updated Not Enough Animations
- Updated Security Craft
- Updated Structure Layout Optimizer
- Updated Thermal Extra
- Updated Tinkers Integrations and Tweaks
- Updated T.O Magic 'n Extras - Iron's Spells Addon
### ➖ Removed
- Removed Cable Facades

---

# 🎮 [AOF-v4.3.3] - 2025.10.20

### ➕ Added
- Added Better Biome Reblend
- Added TickAccelerate
- Added Anvil Restoration
### 🔄 Changed
- Updated AzureLib
- Updated Collective
- Updated Common Capabilities
- Updated Crash Assistant
- Updated Doggy Talents Next
- Updated Entity Culling
- Updated Euphoria Patches
- Updated GuideME
- Updated Just Enough Immersive Multiblocks
- Updated Moonlight Lib
- Updated MVS - Moog's Voyager Structures
- Updated Not Enough Animations
- Updated Reliquary Reincarnations
- Updated Savage & Ravage
- Updated ShadowizardLib
- Updated Sophisticated Backpacks
- Updated Sophisticated Storage
- Updated Supplementaries
- Updated Thermal Extra
### ➖ Removed
- Removed Zume

---

# 🎮 [AOF-v4.3.2] - 2025.10.15

### ✅ Fixed
- Fixed missed tag for sugar
- Fixed [Bug]: Using Quest Journal and Necronomicon in the Eccentric Tome causes duplication of those books. #ticket-0274
- Fixed missed items in the Iron's Spells 'n Spellbooks questline
- Fixed Quests reward table
### 🔄 Changed
- Updated AdvancedAE
- Updated AllTheLeaks (Memory Leak Fix)
- Updated Crash Assistant
- Updated Extra Hostile Neural Networks
- Updated MineColonies
- Updated Relics: Artifacts Compat
- Updated ShadowizardLib
- Updated Sophisticated Storage
- Updated The Deep Void

---

# 🎮 [AOF-v4.3.1] - 2025.10.14

### ✅ Fixed
- Fixed Memory leak issue
- Fixed [Bug]: Performance Issue: Significant Block Breaking Delay in Survival Mode Caused by Rats Mod #104
- Fixed [Bug]: Energizing rod (Spirited) crafting recipe #106
### ➕ Added
- Added Labelling Containers
- Added Colorwheel
### 🔄 Changed
- Downgraded Aquamirae to v6.0.0
- Updated Call from the depths - Sculk Dimension
- Updated FastConfigAPI
- Updated MNS - Moog's Nether Structures
- Updated Multi-Piston
- Updated Not Enough Animations
- Updated Sophisticated Backpacks
- Updated Sophisticated Storage
- Updated Tickrate API
- Updated Void Lib
### ➖ Removed
- Removed Rats
- Removed Call of Yucatán

---

# 🎮 [AOF-v4.3.0] - 2025.10.12

### ✅ Fixed
- Fixed "net.minecraft.nbt.compounttag.m128459(string)" error message; NEW WORLD REQUIRED
- Increased separation distance for dragon roosts, cyclops caves, etc., based on [Suggestion]: Dragon Nest spawn rate #105
### ➕ Added
- Added Pale Garde Backport: The Garde Awakens
### 🔄 Changed
- Updated Forge to v47.4.10
- Updated Complementary Shaders – Reimagined
- Updated Complementary Shaders – Unbound
- Updated Actually Subtractions
- Updated Amplified Nether
- Updated Applied Energistics 2
- Updated AzureLib
- Updated Balm
- Updated Born In Configuration
- Updated Botany Trees
- Updated Call from the depths - Sculk Dimension
- Updated Common Capabilities
- Updated Crash Assistant
- Updated Cyclops Core
- Updated Enigmatic Addons
- Updated Entity Culling Fabric/Forge
- Updated Euphoria Patches
- Updated Fzzy Config
- Updated L's Spooky Trees
- Updated MineColonies
- Updated Modonomicon
- Updated Not Enough Animations
- Updated Oh The Trees You'll Grow
- Updated Sophisticated Core
- Updated Zume
### ➖ Removed
- Removed Ice And Fire: Addon
- Removed Cataclysm: Spellbooks
- Removed Pale Garden and Creaking

---

# 🎮 [AOF-v4.2.9] - 2025.10.06

### 🔄 Changed
- Updated MakeUp - Ultra Fast | Shaders
- Updated Actually Subtractions
- Updated Advanced Loot Info
- Updated AdvancedAE
- Updated AllTheLeaks (Memory Leak Fix)
- Updated Amendments
- Updated Applied Flux
- Updated Aquamirae (Forge)
- Updated AzureLib
- Updated Balm
- Updated BlockUI
- Updated Cataclysm: Spellbooks
- Updated Chat Heads
- Updated Collective
- Updated Crash Assistant
- Updated Dungeons Enhanced
- Updated ExtendedAE
- Updated Extra Hostile Neural Networks
- Updated Farming for Blockheads
- Updated Gnetum
- Updated GottschCore
- Updated Hostile Mobs and Girls (HMaG)
- Updated Ice and Fire: Curios and Trinkets
- Updated Industrial Foregoing
- Updated Integrated Dungeons and Structures
- Updated Just Enough Breeding (JEBr)
- Updated Just Enough Mekanism Multiblocks
- Updated MineColonies
- Updated Modonomicon
- Updated Moonlight Lib
- Updated Oh The Biomes We've Gone
- Updated Raided
- Updated Relics: Artifacts Compat
- Updated Sophisticated Backpacks
- Updated Sophisticated Core
- Updated Sophisticated Storage
- Updated Structurize
- Updated Structurize
- Updated Supplementaries
- Updated T.O Magic 'n Extras - Iron's Spells Addon
- Updated TACT - Tiny Alex's Caves Tweaks
- Updated Tinkers Integrations and Tweaks
- Updated Treasure2

---

# 🎮 [AOF-v4.2.8] - 2025.09.27

### ➕ Added
- Added EXP Counter
### 🔄 Changed
- Updated Forge to v47.4.9
- Updated AdvancedAE
- Updated Advanced Loot Info
- Updated AllTheLeaks (Memory Leak Fix)
- Updated Applied Botanics Addon
- Updated Applied Energistics 2 Wireless Terminals
- Updated AzureLib
- Updated Born In Configuration
- Updated Bosses'Rise
- Updated Brutal Bosses - Custom Bosses
- Updated Chat Heads
- Updated Connectivity
- Updated Dreadsteel
- Updated Ender IO
- Updated ExtendedAE
- Updated Extreme Reactors
- Updated Farsight
- Updated GeckoLib
- Updated GuideME
- Updated ImmediatelyFast
- Updated Just Enough Breeding (JEBr)
- Updated Just Enough Items (JEI)
- Updated Macaw's Paths and Pavings
- Updated Macaw's Windows
- Updated MineColonies
- Updated Moderately Enough Effect Descriptions (MEED)
- Updated Moonlight Lib
- Updated Relics: Artifacts Compat
- Updated Reliquary Reincarnations
- Updated Save My Shaky Network
- Updated Simply Swords: Overhaul
- Updated Sophisticated Backpacks
- Updated Sophisticated Core
- Updated Sophisticated Storage
- Updated Supplementaries
- Updated Structurize
- Updated The Deep Void
- Updated THE UNDEAD REVAMPED
- Updated Tinkers Integrations and Tweaks
### ➖ Removed
- Removed Iris / Oculus & GeckoLib Compat

---

# 🎮 [AOF-v4.2.7] - 2025.09.14

### ✅ Fixed
- Fixed recipes for Deorum tools and weapons
- Fixed Nature's Aura questline
### ➕ Added
- Added Bee Fix
- Added chunky chunks!
- Added Industrial Foregoing Souls
- Added Just Enough Mekanism Multiblocks
- Added Gravitational Modulating Additional Unit
- Added Ars Elemental
- Added Ars Technica
- Added Laser Bridges & Doors
- Added Chargers
- Added Ice And Fire: Addon
### 🔄 Changed
- Updated Advanced Loot Info
- Updated Balm
- Updated Cooking for Blockheads
- Updated Create: Alex's Caves Compat
- Updated Delightful
- Updated Eidolon : Repraised
- Updated Euphoria Patches
- Updated Extended Terminal
- Updated ExtendedAE
- Updated Farming for Blockheads
- Updated Immersive Aircraft
- Updated Inventory Essentials
- Updated Just Enough Breeding (JEBr)
- Updated MineColonies
- Updated Moonlight Lib
- Updated Relics
- Updated Relics: Artifacts Compat
- Updated Reliquary Reincarnations
- Updated Sophisticated Backpacks
- Updated Sophisticated Core
- Updated Sophisticated Storage
- Updated Supplementaries
- Updated T.O Magic 'n Extras - Iron's Spells Addon
- Updated Thermal Extra

---

# 🎮 [AOF-v4.2.6] - 2025.09.07

### ✅ Fixed
- Fixed Aversion Obelisk recipe
### ➕ Added
- Added Extended Terminal
- Added PackagedMekemicals
- Added PackagedDraconic
- Added Applied Sorting
- Added Tinkers' Unexplored
### 🔄 Changed
- Updated Forge to v47.4.8
- Updated AdvancedAE
- Updated AllTheLeaks (Memory Leak Fix)
- Updated Brutal Bosses - Custom Bosses
- Updated Cable Facades
- Updated Corail Tombstone
- Updated Enigmatic Addons
- Updated Fast Item Frames
- Updated Inventory Profiles Next
- Updated Iron's Spells 'n Spellbooks
- Updated Lootr
- Updated Mekanism: Weapons
- Updated MineColonies
- Updated Relics
- Updated Save My Shaky Network
- Updated Sawmill
- Updated Sophisticated Backpacks
- Updated Sophisticated Core
- Updated Sophisticated Storage
- Updated The Deep Void
- Updated Tinker's Planner Reborn

---

# 🎮 [AOF-v4.2.5] - 2025.08.31

### ✅ Fixed
- Fixed Nether Star & Ender Pearl compressed block recipes
### ➕ Added
- Added KubeJS Ars Nouveau
- Added KubeJS Create
- Added Ars Controle
- Added Ars Botania
- Added Ars Fauna
- Added Create: Alex's Caves Compat
- Added Create: Escalated
- Added Sophisticated Backpack Allthemodium Tier
- Added Sophisticated Storage Allthemodium tier
- Added Tinker's Planner Reborn
- Added Botania Seeds
- Added Digital Botania
### 🔄 Changed
- Updated MakeUp - Ultra Fast | Shaders
- Updated AdvancedAE
- Updated Advanced Loot Info
- Updated AllTheLeaks (Memory Leak Fix)
- Updated Bagus Lib
- Updated Baubley Heart Canisters
- Updated Ender IO
- Updated FancyMenu
- Updated Fast Async World Save
- Updated Fusion (Connected Textures)
- Updated GeckoLib
- Updated GuideME
- Updated Hostile Mobs and Girls (HMaG)
- Updated Hunter'sReturn
- Updated Ice And Fire Patcher
- Updated MineColonies
- Updated Moonlight Lib
- Updated More Overlays Updated
- Updated Not Enough Animations
- Updated Oh The Biomes We've Gone
- Updated PackagedAuto
- Updated Pipez
- Updated Puzzles Lib
- Updated Reliquary Reincarnations
- Updated Save My Shaky Network
- Updated Sodium/Embeddium Options Mod Compat
- Updated Sophisticated Core
- Updated Sophisticated Storage
- Updated THE UNDEAD REVAMPED
- Updated T.O Magic 'n Extras - Iron's Spells Addon
- Updated Wireless Chargers

---

# 🎮 [AOF-v4.2.4] - 2025.08.23

### ➕ Added
- Added Mo Glass
- Added Origins Expanded Foods [datapack]
- Added 4 NEW Bosses to the Boss Arena Questline
- Added Hardened Myrmex Resin recipe
### 🔄 Changed
- Updated Forge to v47.4.6
- Updated MakeUp - Ultra Fast | Shaders
- Updated Actually Divisions
- Updated AdvancedAE
- Updated Advanced Loot Info
- Updated AllTheLeaks (Memory Leak Fix)
- Updated Almost Unified
- Updated Amendments
- Updated Bad Horse Fix
- Updated Bosses'Rise
- Updated Botania
- Updated Common Capabilities
- Updated Cucumber Library
- Updated Corail Tombstone
- Updated Create Crafts & Additions
- Updated Domum Ornamentum
- Updated Eidolon : Repraised
- Updated Ender IO
- Updated Enigmatic Addons
- Updated EvilCraft
- Updated ExtendedAE
- Updated Extended Crafting
- Updated Extra Hostile Neural Networks
- Updated Farmer's Delight
- Updated Formations Overworld
- Updated FTB Ultimine
- Updated Fusion (Connected Textures)
- Updated Inventory Profiles Next
- Updated Iron Jetpacks
- Updated Kiwi 🥝
- Updated KleeSlabs
- Updated L_Ender 's Cataclysm
- Updated Lootr
- Updated Mekanism: Weapons
- Updated MES - Moog's End Structures
- Updated MineColonies
- Updated Moderately Enough Effect Descriptions (MEED)
- Updated Moonlight Lib
- Updated Mystical Agradditions
- Updated Mystical Agriculture
- Updated Mystical Customization
- Updated Oh The Biomes We've Gone
- Updated PackagedAuto
- Updated Platforms
- Updated Reliquary Reincarnations
- Updated Sanguine Neural Networks [Hostile Neural Networks Addon]
- Updated Save My Shaky Network
- Updated ShetiPhianCore
- Updated Sophisticated Backpacks
- Updated Sophisticated Core
- Updated Sophisticated Storage
- Updated Structurize
- Updated Supplementaries
- Updated Tesseract
- Updated Tinker and Better Combat
- Updated Tinkers Integrations and Tweaks
- Updated Tinkers' Thinking
- Updated T.O Magic 'n Extras - Iron's Spells Addon
### ➖ Removed
- Removed Infinity Upgrade recipe
- Removed GWOLF's API [this time, for sure]
- Removed Better Days

---

# 🎮 [AOF-v4.2.3] - 2025.08.08

### ➕ Added
- Added Bosses'Rise [experimentally]
### 🔄 Changed
- Downgraded Forge to v47.4.3 [seems to be the best option for now]
- Downgraded Formations Overworld [it seems the gameplay is less laggy]
- Updated Amendments
- Updated Applied Energistics 2
- Updated AzureLib
- Updated Building Gadgets
- Updated Corail Tombstone
- Updated Enigmatic Addons
- Updated EvilCraft
- Updated Jade 🔍
- Updated L_Ender 's Cataclysm
- Updated MineColonies
- Updated MmmMmmMmmMmm (Target Dummy)
- Updated Moonlight Lib
- Updated Mystical Agriculture
- Updated Sophisticated Core
- Updated The Deep Void
- Updated THE UNDEAD REVAMPED
- Updated Vampirism Integrations
- Updated Waystones
### ➖ Removed
- Removed End Memory Leak API
- Removed GWOLF's API

---

# 🎮 [AOF-v4.2.2] - 2025.08.03

### ✅ Fixed
- Potential Fixed Memory Leak Issue
- Potential fix for The Final Boss not spawning
- Fixed some Quest issues
- Fixed some recipe issues
### ➕ Added
- Added End Memory Leak API [experimentally]
- Added GWOLF's API [experimentally]
### 🔄 Changed
- Updated Forge to v47.4.5
- Updated Applied Energistics 2
- Updated Balm
- Updated Born in Chaos
- Updated Botania
- Updated Deep Aether
- Updated Fzzy Config
- Updated Inventory Pets
- Updated Iron's Spells 'n Spellbooks
- Updated MineColonies
- Updated ModernFix
- Updated Moonlight Lib
- Updated Sanguine Neural Networks [Hostile Neural Networks Addon]
- Updated Structurize
- Updated TConJEI
- Updated T.O Magic 'n Extras - Iron's Spells Addon
- Updated THE UNDEAD REVAMPED

---

# 🎮 [AOF-v4.2.1] - 2025.08.01

### 🔄 Changed
- Downgraded Forge to v47.4.1
- Updated AzureLib
- Updated Corail Tombstone
- Updated Durability Tooltip
- Updated EvilCraft
- Updated FTB Quests
- Updated Fusion (Connected Textures)
- Updated Glassential Renewed
- Updated Inventory Profiles Next
- Updated L_Ender 's Cataclysm
- Updated MmmMmmMmmMmm (Target Dummy)
- Updated PackagedAuto
- Updated PackagedExCrafting
- Updated Powah! (Rearchitected)
- Updated Sawmill
- Updated Sophisticated Core
- Updated Sophisticated Storage
- Updated The Deep Void
- Updated Tickrate API

---

# 🎮 [AOF-v4.2.0] - 2025.07.29

### 🔄 Changed
- Updated Advanced Loot Info
- Updated AzureLib
- Updated Corail Tombstone
- Updated Crash Assistant
- Updated Forestry: Community Edition
- Updated Fusion (Connected Textures)
- Updated FTB Library
- Updated Integrated Dungeons and Structures
- Updated Item Collectors
- Updated Inventory Profiles Next
- Updated L_Ender 's Cataclysm
- Updated Mantle
- Updated Moderately Enough Effect Descriptions (MEED)
- Updated MineColonies
- Updated Mo' Bees
- Updated Moonlight Lib
- Updated Oh The Biomes We've Gone
- Updated Reliquary Reincarnations
- Updated Sophisticated Backpacks
- Updated Sophisticated Core
- Updated Sophisticated Storage
- Updated T.O Magic 'n Extras - Iron's Spells Addon
- Updated The Deep Void
- Updated THE UNDEAD REVAMPED
- Updated Tinkers' Thinking
- Updated Visual Workbench

---

# 🎮 [AOF-v4.1.9] - 2025.07.22

### 🔄 Changed
- Updated Forge to v47.4.4
- Updated Advanced Loot Info
- Updated Applied Energistics 2
- Updated Balm
- Updated Cataclysm: Spellbooks
- Updated Corail Tombstone
- Updated Crafting Tweaks
- Updated Crash Assistant
- Updated Delightful
- Updated Draconic Evolution
- Updated Ender IO
- Updated Entity Culling
- Updated Extreme Reactors
- Updated FancyMenu
- Updated Formations (Structure Library)
- Updated Formations Overworld
- Updated Fusion (Connected Textures)
- Updated Fzzy Config
- Updated GeckoLib
- Updated Guard Villagers
- Updated Ice and Fire: Curios and Trinkets
- Updated Integrated Simply Swords
- Updated Inventory Essentials
- Updated KleeSlabs
- Updated L_Ender 's Cataclysm
- Updated Mantle
- Updated MineColonies
- Updated Moderately Enough Effect Descriptions (MEED)
- Updated ModernFix
- Updated PackagedAuto
- Updated PackagedExCrafting
- Updated Reliquary Reincarnations
- Updated Repurposed Structures
- Updated Save My Shaky Network
- Updated Sophisticated Backpacks
- Updated THE UNDEAD REVAMPED
- Updated T.O Magic 'n Extras - Iron's Spells Addon
- Updated Tickrate API
- Updated Tinkers Construct
- Updated Waystones

---

# 🎮 [AOF-v4.1.8] - 2025.07.12

### ✅ Fixed
- Fixed several missing dust recipes
### ➕ Added
- Added Mo' Bees
- Added Forestry: Worktable Display
- Added Thermal Unlimited
- Added Save My Shaky Network
- Added Metal Bundles
- Added Ender Zoology
- Added Cataclysm: Spellbooks
- Added AzureLib
- Added NEW Quests to Iron's Spells 'n Spellbooks questline
- Added NEW Quests to Let’s begin the adventure questline
### 🔄 Changed
- Increased the number of milestones for Spice of Life from 300 to 1199, thanks to Kuktar
- Changed the recipes for Compasses as suggested in [Suggestion]: "Explorer's Compass" #92
- Changed Clock recipe
- Changed Bucket recipe
- Updated AdvancedAE
- Updated Applied Flux
- Updated Corail Tombstone
- Updated ImmediatelyFast
- Updated Immersive Aircraft
- Updated Lithostitched
- Updated MineColonies
- Updated Moonlight Lib
- Updated Not Enough Animations
- Updated PackagedExCrafting
- Updated Snow Under Trees
- Updated Sophisticated Backpacks
- Updated Sophisticated Core
- Updated Sophisticated Storage
- Updated Supplementaries
- Updated THE UNDEAD REVAMPED
- Updated Tickrate API

---

# 🎮 [AOF-v4.1.7] - 2025.07.07

### ✅ Fixed
- Fixed [ticket] Rods and plates recycling recipes #0184
- Fixed several missing gear and plate recipes
### ➕ Added
- Added Fix Attack Lag
- Added Advanced Loot Info
- Added Dead Bush recipe
- Added Mushroom Blocks recipe
- Added Empty Minecarts recipe
- Added Pointed Dripstone
- Added Rose Bush recipe
### 🔄 Changed
- Updated Forge to v47.4.3
- Updated AIOT Botania
- Updated Amplified Nether
- Updated Bagus Lib
- Updated Cataclysmic Combat
- Updated Corail Tombstone
- Updated Crash Assistant
- Updated Dave's Potioneering
- Updated Domum Ornamentum
- Updated Enigmatic Delicacy
- Updated Entity Culling
- Updated Extended Crafting
- Updated FancyMenu
- Updated Hostile Mobs and Girls (HMaG)
- Updated Jaden's Nether Expansion
- Updated L_Ender 's Cataclysm
- Updated Macaw's Windows
- Updated Midnight Madness
- Updated Moderately Enough Effect Descriptions (MEED)
- Updated ModernFix
- Updated PackagedAuto
- Updated PackagedExCrafting
- Updated Realm RPG: Imps & Demons
- Updated RPG-Hud
- Updated Sophisticated Storage
- Updated Structure Essentials
- Updated Structurize
- Updated Supplementaries
- Updated THE UNDEAD REVAMPED
- Updated Werewolves - Become a Beast!
### ➖ Removed
- Removed Pick Up Notifier

---

# 🎮 [AOF-v4.1.6] - 2025.06.29

### ✅ Fixed
- Fixed [Bug]: Crop Crate recipe broken after update #94
- Fixed [Bug]: Create Mechanical Crafter Ticking Entity while crafting Crushing Wheel #96
- Fixed Smeltery recipes for Allthemodium, Vibranium, and Unobtainium blocks
### 🔄 Changed
- Updated AE2: Crafting Tree
- Updated Ars Nouveau
- Updated Citadel
- Updated Corail Tombstone
- Updated Crash Assistant
- Updated Delightful
- Updated Doggy Talents Next
- Updated Domum Ornamentum
- Updated Enigmatic Delicacy
- Updated FramedBlocks
- Updated FTB Ultimine
- Updated Functional Storage
- Updated GottschCore
- Updated Integrated Dungeons and Structures
- Updated Integrated Villages
- Updated Jaden's Nether Expansion
- Updated Lithostitched
- Updated MineColonies
- Updated Moonlight Lib
- Updated MythicBotany
- Updated Not Enough Animations
- Updated Oh The Biomes We've Gone
- Updated Sophisticated Storage
- Updated Tinkers' Thinking

---

# 🎮 [AOF-v4.1.5] - 2025.06.22

### ✅ Fixed
- Fixed several key bindings, this time for sure
### ➕ Added
- Added Macaw's Paths and Pavings
### 🔄 Changed
- Updated Chalk
- Updated Corail Tombstone
- Updated Cucumber Library
- Updated Domum Ornamentum
- Updated Enigmatic Addons
- Updated Enigmatic Delicacy
- Updated Entity Culling
- Updated Euphoria Patches
- Updated ExtendedAE
- Updated Fast IP Ping
- Updated Fast Item Frames
- Updated GeckoLib
- Updated GuideME
- Updated Item Split Bug Fix
- Updated Hostile Mobs and Girls (HMaG)
- Updated L_Ender 's Cataclysm
- Updated MineColonies
- Updated Moderately Enough Effect Descriptions (MEED)
- Updated Moonlight Lib
- Updated Mystical Agriculture
- Updated Oh The Biomes We've Gone
- Updated Sophisticated Backpacks
- Updated Sophisticated Core
- Updated Sophisticated Storage
- Updated The Deep Void
- Updated Tinkers' Thinking

---

# 🎮 [AOF-v4.1.4] - 2025.06.15

### ✅ Fixed
- Fixed key binding for Knowledge of Death
- Fixed auto resetting render distance to 5 chunks
### ➕ Added
- Added Cable Facades
- Added Nature's Aura Render Fix
- Added Bad Horse Fix
- Added Allex’s Caves Better Combat
- Added Useful Slime
### 🔄 Changed
- Updated Applied Energistics 2
- Updated Applied Flux
- Updated BlockUI
- Updated Born In Configuration
- Updated Botanical Machinery
- Updated Brutal Bosses - Custom Bosses
- Updated Chisel Chipped Integration
- Updated Corail Tombstone
- Updated CorgiLib
- Updated Crash Assistant
- Updated Create
- Updated Croptopia Delight
- Updated Delightful
- Updated Doggy Talents Next
- Updated Dungeons Enhanced
- Updated Extra Hostile Neural Networks
- Updated Farmer's Delight
- Updated Gnetum
- Updated GottschCore
- Updated GuideME
- Updated Immersive Tips
- Updated Industrial Foregoing
- Updated Mantle
- Updated MineColonies
- Updated MmmMmmMmmMmm (Target Dummy)
- Updated Moderately Enough Effect Descriptions (MEED)
- Updated ModernFix
- Updated Moonlight Lib
- Updated MVS - Moog's Voyager Structures
- Updated Oh The Trees You'll Grow
- Updated Sawmill
- Updated Supplementaries
- Updated Structurize
- Updated The Deep Void
- Updated Thermal Extra
- Updated Tinkers Construct
- Updated Tinkers Integrations and Tweaks
- Updated Tinkers' Levelling Addon
- Updated Tinkers' Thinking
- Updated YUNG's Cave Biomes
### ➖ Removed
- Removed Accessories

---

# 🎮 [AOF-v4.1.3] - 2025.06.01

### ✅ Fixed
- Fixed several invalid recipes
- Fixed the invalid reward in the Ars Nouveau questline
### ➕ Added
- Added fix GPU memory leak
- Added Item Split Bug Fix
- Added Icarus
- Added Mermod
- Added Transmog
### 🔄 Changed
- Updated Forge to v47.4.1
- Updated AmbientSounds 6
- Updated Applied Flux
- Updated Balm
- Updated Common Capabilities
- Updated Corail Tombstone
- Updated Crash Assistant
- Updated Cyclops Core
- Updated Doggy Talents Next
- Updated Elysium API
- Updated Enchant With Mob
- Updated Enigmatic Addons
- Updated Euphoria Patches
- Updated Forestry: Community Edition
- Updated Fzzy Config
- Updated Hostile Mobs and Girls (HMaG)
- Updated Gnetum
- Updated Jaden's Nether Expansion
- Updated Just Enough Items (JEI)
- Updated Just Enough Items (JEI)
- Updated KeybindsPurger
- Updated Mantle
- Updated McJtyLib
- Updated MineColonies
- Updated Mowzie's Mobs
- Updated Mystical Agriculture
- Updated Oh The Trees You'll Grow
- Updated OpenBlocks Elevator
- Updated Sophisticated Backpacks
- Updated Sophisticated Core
- Updated Sophisticated Storage
- Updated TConJEI
- Updated Tinkers Construct
- Updated The Midnight
### ➖ Removed
- Removed GPUTape

---

# 🎮 [AOF-v4.1.2] - 2025.05.24

### ✅ Fixed
- Fixed the overlap between the Vampirism Skills button and the Enigmatic Magnet Ring button
- Fixed several recipe callbacks due to non-existing items
### 🔄 Changed
- Updated Almost Unified
- Updated Balm
- Updated Corail Tombstone
- Updated Crash Assistant
- Updated Doggy Talents Next
- Updated Enigmatic Addons
- Updated Euphoria Patches
- Updated Forestry: Community Edition
- Updated FTB Essentials
- Updated Infinity Nexus Miner
- Updated Mekanism
- Updated Mekanism Generators
- Updated Mekanism Tools
- Updated MineColonies
- Updated ModernFix
- Updated Sophisticated Core
- Updated Waystones
### ➖ Removed
- Removed Immersive Optimization

---

# 🎮 [AOF-v4.1.1] - 2025.05.19

### ✅ Fixed
- Fixed the Custom Portals quest in the Mekanism chapter one questline
### ➕ Added
- Added Gnetum
- Added FastEvent
- Added a Grave Dust recipe for the Pulverizer, Sag Mill, and Crusher as suggested in [Suggestion]: #88
### 🔄 Changed
- Updated Complementary Shaders – Reimagined
- Updated Complementary Shaders – Unbound
- Updated AE Additions - ExtraCells2 Fork
- Updated AmbientSounds 6
- Updated Balm
- Updated Common Capabilities
- Updated Crash Assistant
- Updated Data Anchor
- Updated Deep Aether
- Updated Dungeons Enhanced
- Updated Enigmatic Addons
- Updated Elysium API
- Updated Euphoria Patches
- Updated ExtendedAE
- Updated Extreme sound muffler
- Updated FancyMenu
- Updated FTB Ranks
- Updated Ice And Fire Patcher
- Updated Lithostitched
- Updated Macaw's Bridges
- Updated Medieval Origins Revival
- Updated MineColonies
- Updated Moonlight Lib
- Updated ModernFix
- Updated Moderately Enough Effect Descriptions (MEED)
- Updated OptiLeaves
- Updated Repurposed Structures
- Updated Sophisticated Backpacks
- Updated Sophisticated Core
- Updated Sophisticated Storage
- Updated Structurize
- Updated The Deep Void
- Updated Tickrate API
- Updated Tinker and Better Combat
- Updated TxniLib
- Updated Waystones
- Updated Werewolves - Become a Beast!
### ➖ Removed
- Removed Gateways to Eternity
- Removed Gateways to Eternity - More Gateways
- Removed Origins: Classes

---

# 🎮 [AOF-v4.1.0] - 2025.05.07

### ✅ Fixed
- Fixed Creepers no longer explode behind walls
- Fixed Gold block recipe, [Suggestion]: Changing the order for gold block crafting. #83
- Fixed Framed Drawer recipe, [Suggestion]: Compacting drawer can be bypassed… #85
- Main Menu music is set to 80% volume and can be turned off in the music options settings
- Resolved the MBT issue with Singularity quest completions
- Resolved Advanced Importer and Exporter in the Refined Storage questline, #ticket-0110
- Resolved the Coal Dust problem by implementing a crafting recipe, #ticket-0114
### ➕ Added
- Added Eyes of Ice and Fire
- Added Ice and Fire: Curios and Trinkets
- Added Simply Swords: Overhaul
- Added Xenon
- Added Game Menu Mod Option
- Added Underwater Village - Oceanic Structures
- Added Whisperer's Jungle Temple
- Added Haunted House
- Added Spooky Campsite
- Added Psi
- Added Psi Quests
### 🔄 Changed
- Updated MakeUp - Ultra Fast | Shaders
- Updated AEInfinityBooster
- Updated AllTheLeaks (Memory Leak Fix)
- Updated Almost Unified
- Updated AmbientSounds 6
- Updated Applied Energistics 2
- Updated Applied Flux
- Updated Apotheosis
- Updated Autochef's Delight
- Updated Biome Music
- Updated Born in Chaos
- Updated Born In Configuration
- Updated Brutal Bosses - Custom Bosses
- Updated Chat Heads
- Updated ChoiceTheorem's Overhauled Village
- Updated Collective
- Updated Crash Assistant
- Updated Create: New Age
- Updated Croptopia Delight
- Updated Cyclops Core
- Updated Data Anchor
- Updated Doggy Talents Next
- Updated Drippy Loading Screen
- Updated Enchant With Mob
- Updated EvilCraft
- Updated ExtendedAE
- Updated FancyMenu
- Updated Fast Item Frames
- Updated Forestry: Community Edition
- Updated Fusion (Connected Textures)
- Updated FTB Chunks
- Updated FTB Filter System
- Updated FTB Quests
- Updated FTB Ranks
- Updated Hostile Mobs and Girls (HMaG)
- Updated Immersive Messages API
- Updated Immersive Optimization
- Updated Iron's Spells 'n Spellbooks
- Updated Kiwi 🥝
- Updated L_Ender 's Cataclysm
- Updated Macaw's Lights and Lamps
- Updated Macaw's Roofs
- Updated Measurements
- Updated Midnight Madness
- Updated MineColonies
- Updated Moonlight Lib
- Updated Mowzie's Mobs
- Updated Mystical Agriculture
- Updated Mystical Agradditions
- Updated Oh The Trees You'll Grow
- Updated Particle Core
- Updated Polymorph
- Updated Powah! (Rearchitected)
- Updated Quark
- Updated Refined Storage Manual
- Updated Security Craft
- Updated Sophisticated Backpacks
- Updated Sophisticated Core
- Updated Sophisticated Storage
- Updated Supplementaries
- Updated Structurize
- Updated TConJEI
- Updated The Deep Void
- Updated THE UNDEAD REVAMPED
- Updated Thermal Extra
- Updated Treasure2
- Updated Twilight Construct
- Updated Vanillin
- Updated Zeta
### ➖ Removed
- Removed Embeddium
- Removed Chloride (Embeddium++)
- Removed The Lost Castle
- Removed Savage Ender Dragon
- Removed Better Mods Button
- Removed Suggestion Provider Fix
- Removed Skin Layers 3D
- Removed SerializationIsBad
- Removed Particle Core
- Removed Packet Fixer
- Removed Log Begone
- Removed FTB Pack Companion
- Removed Ksyxis
- Removed Faster Ladder Climbing

---

# 🎮 [AOF-v4.0.9] - 2025.04.15

### ➕ Added
- Added Embeddium
- Added Chloride (Embeddium++)
- Added Mowzie's Cataclysm
- Added No Animal Tempt Delay
- Added Macaw's Paintings
- Added Cycle Paintings
- Added Quests Kill Task Tweaks
### 🔄 Changed
- Updated Chat Heads
- Updated PackagedExCrafting
- Updated Sophisticated Core
- Updated Sophisticated Storage
- Updated THE UNDEAD REVAMPED
### ➖ Removed
- Removed Xenon

---

# 🎮 [AOF-v4.0.8] - 2025.04.14

### ✅ Fixed
- Fixed empty rewards and some other issues in the Quest book
- Resolved the issue with empty loot chests, #ticket-0072 
### ➕ Added
- Added Multipart Machines: Farming
- Added Multipart Machines: Grinding (Replacement for Easy Mob Farm)
- Added Farming & Grinding Quests
- Added Extra Data Models for Hostile Networks
- Added Cataclysm stone recipes
### 🔄 Changed
- Updated Chat Heads
- Updated ChoiceTheorem's Overhauled Village
- Updated Corail Tombstone
- Updated Crash Assistant
- Updated Curios API
- Updated Cyclops Core
- Updated Fusion (Connected Textures)
- Updated L_Ender 's Cataclysm
- Updated MineColonies
- Updated Oh The Biomes We've Gone
- Updated Sophisticated Backpacks
- Updated Sophisticated Core
- Updated Sophisticated Storage
- Updated Structure Essentials
- Updated The Deep Void
- Updated THE UNDEAD REVAMPED
- Updated Tom's Simple Storage Mod
### ➖ Removed
- Removed Easy Mob Farm
- Removed Shut Up GL Error
- Removed [EMF] Entity Model Features
- Removed [ESF] Entity Sound Features
- Removed [ETF] Entity Texture Features

---

# 🎮 [AOF-v4.0.7] - 2025.04.12

### ✅ Fixed
- Fixed the Middle Button key bind for inventory sorting
- Enhanced and optimized game performance
### ➕ Added
- Added Crash Assistant
- Added Actually Subtractions
- Added Actually Divisions
- Added Mekanism Covers
- Added MNS - Moog's Nether Structures
- Added MVS - Moog's Voyager Structures
- Added MSS - Moog's Soaring Structures
- Added AE2 Network Analyser
- Added AE2 Import Export Card
- Added Hey Berry! SHUT UP
- Added Nolijium
- Added FTB Filter System
- Added Chidori Origins Collection
- Added Medieval Origins Revival
- Added Glassential Renewed
- Added Improvable Skills 3
### 🔄 Changed
- Updated Blueprint
- Updated Corail Tombstone
- Updated Curios API
- Updated FTB Ranks
- Updated FTB XMod Compat
- Updated Fzzy Config
- Updated Sophisticated Storage
- Updated Sophisticated Backpacks
- Updated Sophisticated Core
- Updated Supplementaries
- Updated THE UNDEAD REVAMPED
### ➖ Removed
- Removed Vanilla AIOTs
- Removed Glassential
- Removed Apothic Curios
- Removed Passive Skill Tree
- Removed Passive Skill Tree Additions
- Removed Origins: Vampire
- Removed Tinker's Compatibility
- Removed LDLib
- Removed Construct's Casting
- Removed ConnectedTexturesMod

---

# 🎮 [AOF-v4.0.6] - 2025.04.09

### ✅ Fixed
- Fixed 3D tooltip that was causing lag in JEI, #ticket-0029
- Fixed the incorrect template used for upgrading Plated Bone Tools, #ticket-0049
- Fixed broken Quests and Quest-related issues, #ticket-0044, #ticket-0055
### ➕ Added
- Added Notes
- Added Reflex AntiLag
- Added OptiLeaves
- Added Relics: Alex's Mobs Compat
- Added Relics: Alex's Caves Compat
- Added Twilight Construct
- Added Packet Fixer
- Added Mekanism Pipez Fix
- Added Hostile Neural Networks
- Added Extra Hostile Neural Networks
- Added Sanguine Neural Networks
- Added Hostile Neural Networks Quests
### 🔄 Changed
- Updated AllTheLeaks (Memory Leak Fix)
- Updated Allthemodium
- Updated AmbientSounds 6
- Updated Apotheotic Additions
- Updated Artifacts
- Updated CreativeCore
- Updated Curios API
- Updated Cyclic
- Updated Elysium API
- Updated Enigmatic Delicacy
- Updated Iron's Spells 'n Spellbooks
- Updated Jaden's Nether Expansion
- Updated MineColonies
- Updated Moderately Enough Effect Descriptions (MEED)
- Updated ModernFix
- Updated Moonlight Lib
- Updated Mystical Agradditions
- Updated Mystical Agriculture
- Updated Oh The Biomes We've Gone
- Updated Oh The Trees You'll Grow
- Updated Polymorph
- Updated Powah!
- Updated Puzzles Lib
- Updated Relics
- Updated Snow Under Trees
- Updated Sophisticated Backpacks
- Updated Sophisticated Core
- Updated Sophisticated Storage
- Updated Supplementaries
- Updated The Deep Void
### ➖ Removed
- Removed GuideME
- Removed Legendary Tooltips
- Removed Prism
- Removed JEI Integration
- Removed In Control!
- Removed Clear Despawn
- Removed Forgified Fabric API

---

# 🎮 [AOF-v4.0.5] - 2025.03.31

### ✅ Fixed
- Fixed empty tags
- Fixed broken recipes
- Fixed empty quest rewards
- Fixed [Bug]: Broom from EvilCraft grants unlimited creative flight #53
- Fixed [Bug]: Prefab:gui/fish_pond - size 536 x 300 Lower resolution #74
- Reorganized Quest Book, largely inspired by [Suggestion]: Quests #72
- Resolved trades AllTheCompressed items by Wanderer Trader using a custom data pack
### ➕ Added
- Added Apotheotic Additions
- Added Ars Additions
- Added All The Arcanist Gear
- Added All the Wizard Gear
- Added KeybindsPurger
- Added Wither Spawn Fix
- Added T.O Magic 'n Extras - Iron's Spells Addon
- Added Create: Oppenheimered
- Added Temporal API
- Added TACT - Tiny Alex's Caves Tweaks
- Added Enigmatic Delicacy
- Added JEI Integration
- Added Neruina - Ticking Entity Fixer
- Added Passive Skill Tree Additions
- Added Project: Vibrant Journeys
- Added Saturn
- Added Apothic Curios
- Added Ksyxis
- Added Tinkers Integrations and Tweaks
- Added Construct's Casting
### 🔄 Changed
- Updated Balm
- Updated BlockUI
- Updated Botania
- Updated Collective
- Updated Doggy Talents Next
- Updated Extra Disks
- Updated Fast Item Frames
- Updated FLIB
- Updated Fzzy Config
- Updated Integrated API
- Updated L_Ender 's Cataclysm
- Updated Macaw's Fences and Walls
- Updated MineColonies
- Updated Pipez
- Updated Sophisticated Core
- Updated Sophisticated Storage
- Updated Structurize
- Updated Structure Essentials
- Updated Tinker and Better Combat
- Updated Zeta
### ➖ Removed
- Removed Does It Tick?
- Removed Valarian Conquest
- Removed Pirates of the Craft
- Removed Blueprint Texture Issue Fix
- Removed Chunk Activity Tracker
- Removed Better Fps - Render Distance

---

# 🎮 [AOF-v4.0.4] - 2025.03.28

### ✅ Fixed
- Fixed Smithing Table GUI
- Resolved several recipe issues
- Fixed [Bug]: Epic Stats Error Message Spam #76
- Fixed [Bug]: ne.mc.cr.CrucifixMod message spam Dedicated Server #79
- Fixed #ticket-0171, #ticket-0182, #ticket-0188, #ticket-0225, #ticket-0003
### ➕ Added
- Added AdvancedAE
- Added [Suggestion]: Just enough calculation #73 
- Added Gateways to Eternity
- Added Gateways to Eternity - More Gateways
- Added Passive Skill Tree
- Added Jade 🔍
- Added Jade Addons
- Added JadeColonies
- Added Fast Item Frames
- Added Vanillin
### 🔄 Changed
- Updated AE2: Crafting Tree
- Updated AllTheLeaks (Memory Leak Fix)
- Updated Applied Energistics 2
- Updated Applied Flux
- Updated Artifacts
- Updated Balm
- Updated BlockUI
- Updated Botany Pots
- Updated Create
- Updated Cyclops Core
- Updated Data Anchor
- Updated Does It Tick?
- Updated Domum Ornamentum
- Updated Easy Mob Farm
- Updated Enhanced Celestials - Blood, Blue, & Harvest (Super) Moons
- Updated Entity Culling
- Updated FastSuite
- Updated Forestry: Community Edition
- Updated Fzzy Config
- Updated GeckoLib
- Updated Gendustry: Community Edition
- Updated HammerLib
- Updated Hostile Mobs and Girls (HMaG)
- Updated Immersive Aircraft
- Updated Immersive Tips
- Updated Integrated Dungeons and Structures
- Updated L_Ender 's Cataclysm
- Updated LDLib
- Updated Lootr
- Updated MineColonies
- Updated Moderately Enough Effect Descriptions (MEED)
- Updated Moonlight Lib
- Updated Not Enough Animations
- Updated Oh The Biomes We've Gone
- Updated Skin Layers 3D
- Updated Sophisticated Core
- Updated Supplementaries
- Updated Structurize
- Updated The Deep Void
- Updated Tinker and Better Combat
- Updated TrashSlot
### ➖ Removed
- Removed Achievements Optimizer
- Removed FPS Reducer
- Removed Epic Stats Remastered
- Removed Recipe Essentials
- Removed Obscure Tooltips
- Removed Nyf's Quivers
- Removed Nyf's Archery Plus
- Removed Tweaks addon for MineColonies
- Removed Compatibility addon for MineColonies
- Removed Apotheotic Additions
- Removed Ars Additions
- Removed Bountiful
- Removed Kambrik
- Removed Cataclysm Apotheosis Addon (Be sure to look at the description section)
- Removed Creeper Overhaul
- Removed Enderman Overhaul
- Removed Aether Villages
- Removed Aether: Lost Content Addon
- Removed Ancient Aether
- Removed The Aether: Redux
- Removed Ecologics
- Removed Better With Minecolonies
- Removed Spice of MineColonies Life: Carrot Flavor
- Removed Attributizer
- Removed Effect Descriptions
- Removed Beautify!
- Removed Biome Makeover
- Removed Towns and Towers
- Removed Cristel Lib
- Removed Enemy Expansion
- Removed VillagersPlus
- Removed WITS (What Is This Structure?)
- Removed Waystones Teleport Pets
- Removed Nether Villager Trader
- Removed Click Machine
- Removed FindMe
- Removed Ping Wheel
- Removed PiglinSafety
- Removed Pretty Beaches
- Removed Radium Reforged
- Removed FTB Quests Optimizer
- Removed YetAnotherConfigLib
- Removed Monobank
- Removed Enlightend
- Removed Netherific
- Removed Mystic's Monstrosity Fixes
- Removed OnlyLooking Updated
- Removed Potions Master
- Removed Resource Pack Overrides
- Removed ResourcePackCached
- Removed Wares
- Removed YDM's Spellswords
- Removed YDM's Weapon Master
- Removed Just Enough Resources Profiler (JEARGH)
- Removed Mod Name Tooltip
- Removed Silent Gear
- Removed SilentGear Compat
- Removed Silent Lib (silentlib)
- Removed Explorify – Dungeons & Structures
- Removed The One Probe
- Removed Simple Storage Network
- Removed Crucifix: Unbanished

---

# 🎮 [AOF-v4.0.2] - 2025.03.17

### ✅ Fixed
- All repeatable Quests in the Quest Book have been fixed
- Fixed Crafting on a Stick recipes
- Fixed [Bug]: Wither Drops/Quest #58
- Fixed [Bug]: Empty and partially empty Tags #59
- Fixed [Bug]: Allthemodium Alloy Pick uncraftable #60
- Fixed [Bug]: Repeatable Quests are not repeatable #61
- Fixed [Bug]: Mystical Agriculture Seeds without Recipes #62
- Fixed [Bug]: EpicStats will not give xp #63
- Fixed [Bug]: KubeJS Boss-Crystals #65
- Fixed #ticket-0195
- Fixed #ticket-0197
- Fixed #ticket-0200
- Fixed #ticket-0201
- Fixed #ticket-0202
- Fixed #ticket-0231
- Fixed #ticket-0236
### ➕ Added
- Added Tom's Simple Storage Mod
- Added Tom's Simple Storage Quests
- Added Create Contraption Terminals
- Added Modern World Creation
- Added Better Combat
- Added Aqua Combat
- Added Cataclysmic Combat
- Added Ice and Fire Dragons X Better Combat
- Added Tinker and Better Combat
- Added Tooltip Integration
- Added Obscure Tooltips
- Added GravelMiner
- Added Xenon
- Added Applied Energistics 2
- Added Applied Energistics 2 Wireless Terminals
- Added Applied Mekanistics
- Added Applied Botanics Addon
- Added Applied Cooking
- Added Applied Flux
- Added AE2 Things
- Added AEInfinityBooster
- Added AE Additions - ExtraCells2 Fork
- Added MEGA Cells
- Added ME Requester
- Added Polymorphic Energistics
- Added AE2: Crafting Tree
- Added GuideME
- Added PackagedExCrafting
- Added PackagedAuto
- Added ExtendedAE
- Added Ars Énergistique
- Added Hang Glider
### 🔄 Changed
- Updated AllTheLeaks (Memory Leak Fix)
- Updated Aquaculture 2
- Updated Call from the depths - Sculk Dimencion
- Updated Chisel Chipped Integration
- Updated Compatibility addon for MineColonies
- Updated Create
- Updated Create Crafts & Additions
- Updated Crucifix: Unbanished
- Updated Cyclops Core
- Updated Doggy Talents Next
- Updated Enhanced Celestials - Blood, Blue, & Harvest (Super) Moons
- Updated Enigmatic Addons
- Updated Fast Async World Save
- Updated FramedBlocks
- Updated Forestry: Community Edition
- Updated Fzzy Config
- Updated GeckoLib
- Updated Hexerei
- Updated ImmediatelyFast
- Updated MineColonies
- Updated Moonlight Lib
- Updated Oh The Trees You'll Grow
- Updated Quark
- Updated Server Performance - Smooth Chunk Save
- Updated Separated Leaves
- Updated Sophisticated Backpacks
- Updated Spice of MineColonies Life: Carrot Flavor
- Updated Structurize
- Updated TerraBlender
- Updated Treasure2
- Updated Tweaks addon for MineColonies
- Updated TxniLib
- Updated What Are They Up To (Watut)
- Updated YUNG's Cave Biomes
- Updated Zeta
### ➖ Removed
- Removed The Abyss II - The Other Side
- Removed XyCraft
- Removed XyCraft: Override
- Removed XyCraft: World
- Removed Underground Jungle
- Removed The Conjurer
- Removed Kobolds!
- Removed Flerovium
- Removed Embeddium
- Removed Embeddium (Rubidium) Extra
- Removed Sodium/Embeddium Options API
- Removed Sodium/Embeddium Options Mod Compat
- Removed Sodium/Embeddium Dynamic Lights
- Removed Chloride (Embeddium++)
- Removed Enhanced Celestials Shader Support
- Removed Paragliders
- Removed Progressive Bosses
- Removed InsaneLib

---

# 🎮 [AOF-v4.0.1] - 2025.03.10

### ✅ Fixed
- Improved game performance, courtesy of ModernGamingWorld
- Reduced total loading time for the game from 11 minutes to 6 minutes
- Resolved missing textures in the Quest Book #ticket-0124
- Addressed missing reward in the Quest Book #ticket-0136
### ➕ Added
- Added Gendustry: Community Edition
- Added Botanic Additions
- Added Pick Up Notifier
- Added Cut Through
- Added Oculus
- Added Iris/Oculus & GeckoLib Compat
- Added Sodium/Embeddium Dynamic Lights
- Added Better Compatibility Checker
- Added Better Days
- Added Crash Utilities
- Added Effect Descriptions
- Added Entity Culling
- Added FindMe
- Added Flat Bedrock
- Added Flerovium
- Added FlickerFix
- Added Horse Expert
- Added Just Enough Breeding (JEBr)
- Added Leave My Bars Alone
- Added Mystic's Monstrosity Fixes
- Added Night Config Fixes
- Added No Startup Messages Please
- Added Ok Zoomer Forge
- Added Pretty Beaches
- Added Resource Pack Overrides
- Added ResourcePackCached
- Added Shut Up GL Error
- Added Sparse Structures Reforged
- Added TipTheScales
- Added Visual Workbench
- Added Yeetus Experimentus
### 🔄 Changed
- Updated Forge to v47.4.0
- Updated Amendments
- Updated Aquaculture 2
- Updated Battle Towers – LordTheo
- Updated Blueprint
- Updated Cataclysm Apotheosis Addon
- Updated Chisel Reborn
- Updated Chloride (Embeddium++)
- Updated ChoiceTheorem's Overhauled Village
- Updated Collective
- Updated Compatibility addon for MineColonies
- Updated Cooking for Blockheads
- Updated Corail Tombstone
- Updated Create
- Updated Create Crafts & Additions
- Updated Create: New Age
- Updated Curios API
- Updated Delightful
- Updated Doggy Talents Next
- Updated Easy Mob Farm
- Updated Ender IO
- Updated Enigmatic Addons
- Updated EvilCraft
- Updated Extreme Reactors
- Updated Extreme sound muffler
- Updated Forestry: Community Edition
- Updated FramedBlocks
- Updated FTB Quests
- Updated Fzzy Config
- Updated Ice and Fire Artifacts
- Updated ImmediatelyFast
- Updated Immersive Aircraft
- Updated L_Ender 's Cataclysm
- Updated LDLib
- Updated Mantle
- Updated Mekanism
- Updated Mekanism Generators
- Updated Mekanism Tools
- Updated MineColonies
- Updated MmmMmmMmmMmm (Target Dummy)
- Updated Moderately Enough Effect Descriptions (MEED)
- Updated Moonlight Lib
- Updated OctoLib
- Updated Oh The Biomes We've Gone
- Updated Placebo
- Updated Puzzles Lib
- Updated Sophisticated Backpacks
- Updated Sophisticated Core
- Updated Structure Essentials
- Updated Supplementaries
- Updated TConJEI
- Updated The Deep Void
- Updated Thermal Extra
- Updated Tickrate API
- Updated Tinkers Construct
- Updated Tinkers' Levelling Addon
- Updated Tweaks addon for MineColonies
- Updated Twilight Forest Final Boss
- Updated Vampirism - Become a vampire!
- Updated Werewolves - Become a Beast!
- Updated Waystones
- Updated What Are They Up To (Watut)
- Updated YUNG's Cave Biomes (Forge)
### ➖ Removed
- Removed Entity Culling
- Removed Progressive Difficulty: Chaos Integration
- Removed Combat Roll
- Removed Alternate current
- Removed BadOptimizations
- Removed Bobby Reforged
- Removed Bocchium
- Removed Clean Swing Through Grass
- Removed Sinytra Connector
- Removed Connector Extras
- Removed Forgified Fabric API
- Removed Wither Spawn Fix
- Removed Starlight
- Removed Smooth Boot (Reloaded)
- Removed Saturn
- Removed Packet Fixer
- Removed Noisium
- Removed Mekalus (Oculus fork with fixed Mekanism MekaSuit rendering)
- Removed Lucent
- Removed Limited Chunkloading - Chunk cleanup
- Removed Leaky - Item Lag Fix
- Removed fix GPU memory leak
- Removed My Server Is Compatible
- Removed Common Weapons
- Removed Dungeon Now Loading 1%
- Removed Too Fast
- Removed Ice and Fire Artifacts
- Removed Create: Crystal Clear
- Removed Create: Steam 'n' Rails

---

# 🎮 [AOF-v4.0.0] - 2025.02.26

### 🔄 Changed
- Port to 1.20.1
