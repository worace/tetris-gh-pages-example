var assert = require('chai').assert;
var Shape = require('../lib/shape');
var jShape = require('../lib/game-pieces/j-shape');
var Board = require('../lib/board.js');
var Piece = require('../lib/piece.js');

describe('The Shapes', function() {
  
  it('Should exist', function () {
    assert(new Shape());
  });

  it('Has several types of shapes', function () {
    var b = new Board();
    assert(new jShape(b));
  });

  it('has 4 Pieces', function () {
    var b = new Board();
    var j = new jShape(b);
    assert.equal(j.pieces.length, 4);
  });

  it('jShape has rotations', function () {
    var b = new Board();
    var j = new jShape(b);
    j.rotations.push("test");
    assert(j.rotations);
    assert.equal(j.rotations, "test");
  });

  it('can move shapes down', function () {
    var b = new Board();
    var j = new jShape(b);
    // debugger;
    assert(b.isOccupied(5, 0));
    assert(b.isOccupied(5, 1));
    assert(b.isOccupied(5, 2));
    assert(b.isOccupied(4, 2));
    j.moveDown();
    assert(!b.isOccupied(5, 0));
    assert(b.isOccupied(5, 1));
    assert(b.isOccupied(5, 2));
    assert(b.isOccupied(5, 3));
    assert(b.isOccupied(4, 3));
  });

  it('can tell if a piece is locked', function () {
    var b = new Board();
    var p = new Piece(b, 5, 0);
    assert(!b.isLocked(5, 0));
    p.locked = true;
    assert(b.isLocked(5, 0));
  });

});