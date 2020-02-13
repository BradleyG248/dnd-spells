import SpellService from "../Services/SpellService.js";
import store from "../store.js";
//Private
function _drawApiSpells() {
  let template = '';
  store.State.spells.forEach(spell => {
    template += `<li onclick = "app.spellController.setActiveSpell('${spell.id}')">${spell.name}</li>`
  })
  document.getElementById("spell-list").innerHTML = template;
}
function _drawActiveSpell() {
  document.getElementById("active-spell").innerHTML = store.State.activeSpell.Template;
}
function _drawMySpells() {
  let template = '';
  let spells = store.State.mySpells;
  spells.forEach(spell => {
    template += `<li onclick = "app.spellController.setActiveSpell('')">${spell.name}</li>`
  })
  document.getElementById("my-spells").innerHTML = template;
}

//Public
export default class SpellsController {
  constructor() {
    store.subscribe("spells", _drawApiSpells)
    store.subscribe("activeSpell", _drawActiveSpell)
    store.subscribe("mySpells", _drawMySpells)
    SpellService.getAllApiSpells();
    SpellService.getAllMySpells();
  }
  setActiveSpell(id) {
    SpellService.setActiveSpell(id);
  }
  addSpell() {
    SpellService.addSpell();
  }
}
