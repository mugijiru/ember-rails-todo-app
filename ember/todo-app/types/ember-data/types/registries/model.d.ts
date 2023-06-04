import Model from '@ember-data/model'
/**
 * Catch-all for ember-data.
 */
export default interface ModelRegistry {
  [key: string]: Model
}
