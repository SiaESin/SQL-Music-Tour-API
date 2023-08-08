'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('meet_greet', [
      {
        meet_greet_id: 8,
        event_id: 8,
        band_id: 8,
        meet_date: '2024-04-18',
        meet_start_time: '16:00:00',
        meet_end_time: '19:00:00'
      },
      {
        meet_greet_id: 9,
        event_id: 9,
        band_id: 9,
        meet_date: '2024-10-12',
        meet_start_time: '10:00:00',
        meet_end_time: '16:00:00'
      },
      {
        meet_greet_id: 10,
        event_id: 10,
        band_id: 10,
        meet_date: '2024-11-14',
        meet_start_time: '12:00:00',
        meet_end_time: '15:00:00'
      },
      {
        meet_greet_id: 11,
        event_id: 11,
        band_id: 11,
        meet_date: '2024-07-03',
        meet_start_time: '12:00:00',
        meet_end_time: '14:00:00'
      },
      {
        meet_greet_id: 12,
        event_id: 12,
        band_id: 12,
        meet_date: '2024-05-14',
        meet_start_time: '13:00:00',
        meet_end_time: '15:00:00'
      },
      {
        meet_greet_id: 13,
        event_id: 13,
        band_id: 13,
        meet_date: '2024-03-12',
        meet_start_time: '13:00:00',
        meet_end_time: '16:00:00'
      },
      {
        meet_greet_id: 14,
        event_id: 14,
        band_id: 14,
        meet_date: '2024-06-21',
        meet_start_time: '12:00:00',
        meet_end_time: '17:00:00'
      },
      {
        meet_greet_id: 15,
        event_id: 15,
        band_id: 15,
        meet_date: '2024-09-27',
        meet_start_time: '11:00:00',
        meet_end_time: '14:00:00'
      },
      {
        meet_greet_id: 16,
        event_id: 16,
        band_id: 16,
        meet_date: '2024-01-25',
        meet_start_time: '11:00:00',
        meet_end_time: '14:00:00'
      },
      {
        meet_greet_id: 17,
        event_id: 17,
        band_id: 17,
        meet_date: '2024-05-04',
        meet_start_time: '18:00:00',
        meet_end_time: '21:00:00'
      },
      
    ], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('meet_greet', null, {});
  }
};