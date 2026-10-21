import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Australian from '../Australian';

export class JohnCurtin extends Leader {
  static civilization(): typeof Civilization {
    return Australian;
  }

  name(): string {
    return 'John Curtin';
  }
}

export default JohnCurtin;
