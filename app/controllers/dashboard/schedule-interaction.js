import Ember from 'ember';
import ModelsNavigationMixin from 'phoenix/mixins/models-navigation';
import EmberValidations from 'ember-validations';

export default Ember.ObjectController.extend(ModelsNavigationMixin, EmberValidations.Mixin, {
  needs: ['dashboard'],
  dashboard: Ember.computed.oneWay('controllers.dashboard'),

  navigableModels: Ember.computed.oneWay('dashboard.interactionsToSchedule'),
  modelRouteParams: ['dashboard.schedule-interaction'],

  actions: {
    hideSidePanel: function() {
      this.transitionToRoute('dashboard');
    }
  },

  validations: {
    speakDialIn: {
      presence: true
    }
});
