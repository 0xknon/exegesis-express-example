/* eslint-disable */
const aggregatePaginate = require('./mongoose-aggregate-paginate-v2');

/**
 * @param {Schema} schema
 */
module.exports = function(schema) {
  schema.statics.aggregatePaginate = aggregatePaginate;
};
