import Ember from 'ember';

function getRandomInt() {
  return Math.floor(Math.random() * (251) + 75);
}

const DEFAULT_HEIGHT = 200;
const DEFAULT_WIDTH = 200;

export default Ember.Route.extend({
  model: function() {
    var items = [];
    for (var i = 0; i < 1000; i++) {
      var width = getRandomInt();
      var height = getRandomInt();
      items.push({
        name: 'Item ' + (i + 1) + '(' + width + 'x' + height + ')',
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
        actualWidth: width,
        actualHeight: height
      });
    }

    return items;
  }
});
