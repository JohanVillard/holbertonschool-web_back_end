/* eslint-disable class-methods-use-this */

export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    this.validateEvacuationMessage();
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw new Error('Sqft must be an number.');
    }
    this._sqft = newSqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }

  validateEvacuationMessage() {
    if (this.constructor !== Building
      && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
