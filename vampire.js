class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires ++;
    }

    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name) {
      return this;
    }

    for (const offspring of this.offspring) {
      const result = offspring.vampireWithName(name);

      if (result){
        return result;
      }
    }
    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let totalVampires = 0;
    
    for (const offspring of this.offspring) {
      totalVampires += 1;
      totalVampires += offspring.totalDescendents;
    }

    return totalVampires;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    const millennialVampires = []; 
  
    
    if (this.yearConverted > 1980) {
      millennialVampires.push(this);
    }
  
    for (const offspring of this.offspring) {
      const offspringMillennials = offspring.allMillennialVampires; 
      millennialVampires.push(...offspringMillennials);
    }
  
    return millennialVampires;
  }
}


module.exports = Vampire;

