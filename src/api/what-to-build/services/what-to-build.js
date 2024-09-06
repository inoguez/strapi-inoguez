'use strict';

/**
 * what-to-build service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::what-to-build.what-to-build');
