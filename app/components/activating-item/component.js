import Ember from 'ember';
import layout from '../../templates/components/activating-item';

const ALLOWED_PREFIXES = ['', 'dashboard.', 'dashboard.catch-redirects.'];

export default Ember.Component.extend({
  routingService: Ember.inject.service('routing'),
  layout: layout,
  classNameBindings: ['active'],

  currentWhen: null,

  active: Ember.computed('routingService.currentPath', 'currentWhen', function() {
    let currentPath = this.get('routingService.currentPath');
    let currentWhen = this.get('currentWhen');

    return ALLOWED_PREFIXES.some((prefix) => {
      // NOTE: Perhaps we could have babel give us startsWith?
      let prefixedCurrentWhen = `${prefix}${currentWhen}`;
      return currentPath.substring(0, prefixedCurrentWhen.length) === prefixedCurrentWhen;
    });
  })
});
