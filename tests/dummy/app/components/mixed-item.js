import Ember from 'ember';
import layout from '../templates/components/mixed-item';

const { Component, String:EmberString, computed, get, run } = Ember;

export default Component.extend({
  layout,
  classNames: ['list-item'],
  index: null,
  attributeBindings: ['style'],
  style: computed(function() {
    const { actualWidth, actualHeight } = get(this, 'item');
    return EmberString.htmlSafe(`width: ${actualWidth}px; height: ${actualHeight}px;`);
  }),
  didRender() {
    run.schedule('afterRender', () => {
      const $el = this.$();
      this.sendAction('heightUpdated', this.get('index'), $el.outerWidth(), $el.outerHeight());
    });
  }
});
