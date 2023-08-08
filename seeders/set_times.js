'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('set_time', [
      {
        set_time_id: '18', 
        event_id: '18',
        stage_id: '18',
        band_id: '18',
        set_start_time: '17:00:00',
        set_end_time: '18:00:00'
      },
      {
        set_time_id: '9', 
        event_id: '9',
        stage_id: '9',
        band_id: '9',
        set_start_time: '18:00:00',
        set_end_time: '19:00:00'
      },
      {
        set_time_id: '10', 
        event_id: '10',
        stage_id: '10',
        band_id: '10',
        set_start_time: '18:00:00',
        set_end_time: '23:00:00'
      },
      {
        set_time_id: '11', 
        event_id: '11',
        stage_id: '11',
        band_id: '11',
        set_start_time: '18:00:00',
        set_end_time: '21:00:00'
      },
      {
        set_time_id: '12', 
        event_id: '12',
        stage_id: '12',
        band_id: '12',
        set_start_time: '18:00:00',
        set_end_time: '20:00:00'
      },
      {
        set_time_id: '13', 
        event_id: '13',
        stage_id: '13',
        band_id: '13',
        set_start_time: '19:00:00',
        set_end_time: '21:00:00'
      },
      {
        set_time_id: '14', 
        event_id: '14',
        stage_id: '14',
        band_id: '14',
        set_start_time: '19:00:00',
        set_end_time: '22:00:00'
      },
      {
        set_time_id: '15', 
        event_id: '15',
        stage_id: '15',
        band_id: '15',
        set_start_time: '20:00:00',
        set_end_time: '23:00:00'
      },
      {
        set_time_id: '16', 
        event_id: '16',
        stage_id: '16',
        band_id: '16',
        set_start_time: '20:00:00',
        set_end_time: '22:00:00'
      },
      {
        set_time_id: '17', 
        event_id: '17',
        stage_id: '17',
        band_id: '17',
        set_start_time: '16:00:00',
        set_end_time: '19:00:00'
      },
      {
        set_time_id: '19', 
        event_id: '19',
        stage_id: '19',
        band_id: '19',
        set_start_time: '12:00:00',
        set_end_time: '13:00:00'
      },
      {
        set_time_id: '20', 
        event_id: '20',
        stage_id: '20',
        band_id: '20',
        set_start_time: '13:00:00',
        set_end_time: '14:00:00'
      },
      {
        set_time_id: '21', 
        event_id: '21',
        stage_id: '21',
        band_id: '21',
        set_start_time: '14:00:00',
        set_end_time: '15:00:00'
      },
      
    ], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('set_time', null, {});
  }
};