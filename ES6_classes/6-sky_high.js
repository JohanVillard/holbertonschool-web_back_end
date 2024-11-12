import Building from './5-building'

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floor() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return 'Evacuate slowly the NUMBER_OF_FLOORS floors'
  }
}
