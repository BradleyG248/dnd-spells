export default class Spell {
  constructor(data) {
    this.name = data.name,
      this.id = data._id,
      this.description = data.desc[0],
      this.range = data.range,
      this.components = data.components,
      this.ritual = data.ritual,
      this.duration = data.duration,
      this.concentration = data.concentration,
      this.casting_time = data.casting_time,
      this.level = data.level,
      this.school = data.school
  }

  get Template() {
    return ` 
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${this.name}</h5>
                            <p class="card-text">${this.description}</p>
                            <ul>
                                <li>Spell Range: ${this.range}</li>
                                <li>Duration: ${this.duration}</li>
                                <li>Components: ${this.components}</li>
                                <li>Casting time: ${this.casting_time}</li>
                                <li>Level: ${this.level}</li>
                                <li>School: ${this.school}</li>
                            </ul>
                            <button class="btn btn-info" onclick = "app.spellController.addSpell()">Add Spell</button>
                        </div>
                    </div>
    `
  }
}