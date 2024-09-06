'use strict';

/**
 * what-to-build router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::what-to-build.what-to-build');
