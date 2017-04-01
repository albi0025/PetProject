import {expect} from 'chai';
import sync from './sync';

describe('Sync', () => {
  describe('listDiff', () => {
    it('works', () => {
      let a1 = [{animalId: 1}, {animalId: 2}, {animalId: 3}];
      let a2 = [{animalId: 2}, {animalId: 3}, {animalId: 4}];
      expect(sync.listDiff(a1, a2)).to.eql([{animalId: 1}]);
      expect(sync.listDiff(a2, a1)).to.eql([{animalId: 4}]);
    });
  });
});
