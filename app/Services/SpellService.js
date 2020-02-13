import store from "../store.js";
import Spell from "../Models/Spell.js"

// @ts-ignore
let _spellApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/spells",
  timeout: 3000
})

// @ts-ignore
let _myApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/bradley/spells",
  timeout: 3000
})


class SpellService {

  getAllApiSpells() {
    _spellApi.get("")
      .then(res => {
        store.commit("spells", res.data);
      })
  }
  getAllMySpells() {
    _myApi.get("")
      .then(res => {
        store.commit("mySpells", res.data.data)
      })
  }
  setActiveSpell(id) {
    if (!id) {

    } else {
      _spellApi.get(id)
        .then(res => {
          console.log(res);
          let spell = new Spell(res.data);
          store.commit("activeSpell", spell);
        })
    }
  }
  addSpell() {
    let activeSpell = store.State.activeSpell
    let spells = [...store.State.mySpells, store.State.activeSpell]
    _myApi
      .post("", activeSpell).then(res => {
        store.commit("mySpells", spells);
      })
  }
}

const service = new SpellService();
export default service;