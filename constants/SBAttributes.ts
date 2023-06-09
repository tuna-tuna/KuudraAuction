import { SBAttributeTypes } from "../types/AttributeTypes";

export const SBAttributes = [
    "Arachno",
    "Attack Speed",
    "Blazing",
    "Combo",
    "Elite",
    "Ender",
    "Ignition",
    "Life Recovery",
    "Mana Steal",
    "Midas Touch",
    "Undead",
    "Warrior",
    "Deadeye",
    "Arachno Resistance",
    "Blazing Resistance",
    "Breeze",
    "Dominance",
    "Ender Resistance",
    "Experience",
    "Fortitude",
    "Life Regeneration",
    "Lifeline",
    "Magic Find",
    "Mana Pool",
    "Mana Regeneration",
    "Vitality",
    "Speed",
    "Undead Resistance",
    "Veteran",
    "Blazing Fortune",
    "Fishing Experience",
    "Infection",
    "Double Hook",
    "Fisherman",
    "Fishing Speed",
    "Hunter",
    "Trophy Hunter"];

export const SBAttributeIDs = {
    "Arachno": "arachno",
    "Attack Speed": "attack_speed",
    "Blazing": "blazing",
    "Combo": "combo",
    "Elite": "elite",
    "Ender": "ender",
    "Ignition": "ignition",
    "Life Recovery": "life_recovery",
    "Mana Steal": "mana_steal",
    "Midas Touch": "midas_touch",
    "Undead": "undead",
    "Warrior": "warrior",
    "Deadeye": "deadeye",
    "Arachno Resistance": "arachno_resistance",
    "Blazing Resistance": "blazing_resistance",
    "Breeze": "breeze",
    "Dominance": "dominance",
    "Ender Resistance": "ender_resistance",
    "Experience": "experience",
    "Fortitude": "fortitude",
    "Life Regeneration": "life_regeneration",
    "Lifeline": "lifeline",
    "Magic Find": "magic_find",
    "Mana Pool": "mana_pool",
    "Mana Regeneration": "mana_regeneration",
    "Vitality": "mending",
    "Speed": "speed",
    "Undead Resistance": "undead_resistance",
    "Veteran": "veteran",
    "Blazing Fortune": "blazing_fortune",
    "Fishing Experience": "fishing_experience",
    "Infection": "infection",
    "Double Hook": "double_hook",
    "Fisherman": "fisherman",
    "Fishing Speed": "fishing_speed",
    "Hunter": "hunter",
    "Trophy Hunter": "trophy_hunter",
}

export const validateAttribute = (attr: string | string[] | undefined) => {
    if (typeof attr === "undefined" || typeof attr === "object") return "";
    else if (SBAttributes.includes(attr)) return SBAttributeIDs[attr as SBAttributeTypes];
    else return "";
};

export const getAttributeNameFromID = (attrID: string) => {
    const keys = Object.keys(SBAttributeIDs);
    let name = "";
    keys.forEach((key) => {
        if (SBAttributeIDs[key as SBAttributeTypes] === attrID) {
            name = key;
        }
    });
    return name;
}