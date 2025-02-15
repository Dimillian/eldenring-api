import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type ScallingEntry {
    scalling: String
    name: String
  }

  type AttributeEntry {
    amount: Int
    name: String
  }

  type Ammo {
    id: ID!
    name: String
    image: String
    description: String
    type: String
    attackPower: [AttributeEntry]
    passive: String
  }

  type Armor {
    id: ID!
    name: String
    image: String
    description: String
    category: String
    dmgNegation: [AttributeEntry]
    resistance: [AttributeEntry]
    weight: Int
  }

  type AshOfWar {
    id: ID!
    name: String
    image: String
    description: String
    affinity: String
    skill: String
  }

  type Boss {
    id: ID!
    name: String
    image: String
    description: String
    location: String
    drops: [String]
    healthPoints: String
  }

  type ClassStats {
    level: String
    vigor: String
    mind: String
    endurance: String
    strenght: String
    dexterity: String
    inteligence: String
    faith: String
    arcane: String
  }

  type Class {
    id: ID!
    name: String
    image: String
    description: String
    stats: [ClassStats]
  }

  type Creature {
    id: ID!
    name: String
    image: String
    description: String
    location: String
    drops: [String]
  }

  type Incantation {
    id: ID!
    name: String
    image: String
    description: String
    type: String
    cost: Int
    slots: Int
    effects: String
    requires: [AttributeEntry]
  }

  type Item {
    id: ID!
    name: String
    image: String
    description: String
    effect: String
    type: String
  }

  type Location {
    id: ID!
    name: String
    image: String
    description: String
  }

  type Npc {
    id: ID!
    name: String
    image: String
    description: String
    quote: String
    location: String
    role: String
  }

  type Shield {
    id: ID!
    name: String
    image: String
    description: String
    attack: [AttributeEntry]
    defence: [AttributeEntry]
    scalesWith: [ScallingEntry]
    requiredAttributes: [AttributeEntry]
    category: String
    weight: Int
  }

  type Sorcery {
    id: ID!
    name: String
    image: String
    description: String
    type: String
    cost: Int
    slots: Int
    effects: String
    requires: [AttributeEntry]
  }

  type Spirit {
    id: ID!
    name: String
    image: String
    description: String
    fpCost: String
    hpCost: String
    effect: String
  }

  type Talisman {
    id: ID!
    name: String
    image: String
    description: String
    effect: String
  }

  type Weapon {
    id: ID!
    name: String
    image: String
    description: String
    attack: [AttributeEntry]
    defence: [AttributeEntry]
    scalesWith: [ScallingEntry]
    requiredAttributes: [AttributeEntry]
    category: String
    weight: Int
  }

  type Query {
    ammo(
      id: ID
      name: String
      description: String
      type: String
      passive: String
      page: Int = 0
      limit: Int
    ): [Ammo]
    getAmmo(id: String!): Ammo!

    armor(
      id: ID
      name: String
      description: String
      category: String
      weight: Int
      page: Int = 0
      limit: Int
    ): [Armor]
    getArmor(id: String!): Armor!

    ashOfWar(
      id: ID
      name: String
      description: String
      affinity: String
      skill: String
      page: Int = 0
      limit: Int
    ): [AshOfWar]
    getAshOfWar(id: String!): AshOfWar!

    boss(
      id: ID
      name: String
      description: String
      location: String
      healthPoints: String
      page: Int = 0
      limit: Int
    ): [Boss]
    getBoss(id: String!): Boss!

    class(
      id: ID
      name: String
      description: String
      page: Int = 0
      limit: Int
    ): [Class]
    getClass(id: String!): Class!

    creature(
      id: ID
      name: String
      description: String
      location: String
      page: Int = 0
      limit: Int
    ): [Creature]
    getCreature(id: String!): Creature!

    incantation(
      id: ID
      name: String
      description: String
      type: String
      cost: Int
      slots: Int
      page: Int = 0
      limit: Int
    ): [Incantation]
    getIncantation(id: String!): Incantation!

    item(
      id: ID
      name: String
      description: String
      effect: String
      page: Int = 0
      limit: Int
    ): [Item]
    getItem(id: String!): Item!

    location(
      id: ID
      name: String
      description: String
      page: Int = 0
      limit: Int
    ): [Location]
    getLocation(id: String!): Location!

    npc(
      id: ID
      name: String
      description: String
      quote: String
      location: String
      role: String
      page: Int = 0
      limit: Int
    ): [Npc]
    getNpc(id: String!): Npc!

    shield(
      id: ID
      name: String
      description: String
      category: String
      weight: Int
      page: Int = 0
      limit: Int
    ): [Shield]
    getShield(id: String!): Shield!

    sorcery(
      id: ID
      name: String
      description: String
      type: String
      cost: Int
      slots: Int
      page: Int = 0
      limit: Int
    ): [Sorcery]
    getSorcery(id: String!): Sorcery!

    spirit(
      id: ID
      name: String
      description: String
      fpCost: String
      hpCost: String
      effect: String
      page: Int = 0
      limit: Int
    ): [Spirit]
    getSpirit(id: String!): Spirit!

    talisman(
      id: ID
      name: String
      description: String
      effect: String
      page: Int = 0
      limit: Int
    ): [Talisman]
    getTalisman(id: String!): Talisman!

    weapon(
      id: ID
      name: String
      description: String
      category: String
      weight: Int
      page: Int = 0
      limit: Int
    ): [Weapon]
    getWeapon(id: String!): Weapon!
  }
`;
