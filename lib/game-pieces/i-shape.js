var Shape = require('../shape');
var Piece = require('../piece');

function iShape(board) {

  this.pieces = {
    1: new Piece(board,3,0, "red"),
    2: new Piece(board,4,0, "red"),
    3: new Piece(board,5,0, "red"),
    4: new Piece(board,6,0, "red")
  };

  // Defaults to the first set of offset rotations
  this.offsetGroup = 1;

  this.rotationOffsets = {
    1: {
      1: [2, 3],
      2: [1, 2],
      3: [0, 1],
      4: [-1, 0]
    },
    2: {
      1: [-2, -3],
      2: [-1, -2],
      3: [0, -1],
      4: [1, 0]
    },
    3: {
      1: [2, 3],
      2: [1, 2],
      3: [0, 1],
      4: [-1, 0]
    },
    4: {
      1: [-2, -3],
      2: [-1, -2],
      3: [0, -1],
      4: [1, 0]
    }
  };

}

iShape.prototype = Object.create(Shape.prototype);

module.exports = iShape;
