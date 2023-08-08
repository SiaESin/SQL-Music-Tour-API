'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('event', [
      {
        name: 'Freedom Frequency Festival',
        date: '2024-07-04T00:00:00.000Z',
        start_time: '9:00:00',
        end_time: '23:00:00'
      },
      {
        name: 'Dance Maze',
        date: '2024-05-15T00:00:00.000Z',
        start_time: '09:00:00',
        end_time: '22:00:00'
      },
      {
        name: 'Soundlicious',
        date: '2024-03-13T00:00:00.000Z',
        start_time: '09:00:00',
        end_time: '23:00:00'
      },
      {
        name: 'Roots Festival',
        date: '2024-06-22T00:00:00.000Z',
        start_time: '09:00:00',
        end_time: '21:00:00'
      },
      {
        name: 'Grooving Nights',
        date: '2024-09-28T00:00:00.000Z',
        start_time: '10:00:00',
        end_time: '21:00:00'
      },
      {
        name: 'Melting Man',
        date: '2024-01-26T00:00:00.000Z',
        start_time: '10:00:00',
        end_time: '22:00:00'
      },
      {
        name: 'ECD',
        date: '2024-05-05T00:00:00.000Z',
        start_time: '10:00:00',
        end_time: '23:00:00'
      },
      {
        name: 'Pop and Rock',
        date: '2024-04-19T00:00:00.000Z',
        start_time: '10:00:00',
        end_time: '23:00:00'
      },
      {
        name: 'Violet Music',
        date: '2024-10-13T00:00:00.000Z',
        start_time: '11:00:00',
        end_time: '22:00:00'
      },
      {
        name: 'Garden Affairs',
        date: '2024-11-15T00:00:00.000Z',
        start_time: '11:00:00',
        end_time: '23:00:00'
      },
    ], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('event', null, {});
  }
};