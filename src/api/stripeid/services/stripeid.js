'use strict';

/**
 * stripeid service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stripeid.stripeid');
