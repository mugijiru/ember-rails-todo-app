import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { underscore } from '@ember/string';
import { pluralize } from 'ember-inflector';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api/v1';

  pathForType(type) {
    const underscored = underscore(type);
    return pluralize(underscored);
  }
}
