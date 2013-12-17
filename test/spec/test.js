/* global describe, it */

(function () {
  'use strict';
  var expect = chai.expect;

  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {
        expect(true).to.be.true;
      });
    });
  });
})();
