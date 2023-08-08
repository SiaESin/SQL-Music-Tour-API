'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stage', [
      {
        stage_name: 'Vibe',
        capacity: 800
      },
      {
        stage_name: 'BeatRoot',
        capacity: 500
      },
      {
        stage_name: 'Ear Worm',
        capacity: 1000
      },
      {
        stage_name: 'Mingwa',
        capacity: 1200
      },
      {
        stage_name: 'Purple',
        capacity: 10000
      },
      {
        stage_name: 'Phoenix',
        capacity: 60000
      },
      {
        stage_name: 'Vuvuzela',
        capacity: 6000
      },
      {
        stage_name: 'Mega Lounge',
        capacity: 800
      },
      {
        stage_name: 'Garage',
        capacity: 4000
      },
      {
        stage_name: 'Bonobo',
        capacity: 1200
      },
    ], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stage', null, {});
  }
};