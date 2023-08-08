'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('band', [
      {
        name: 'Trix and Treatz',
        genre: 'Hip-Hop',
        available_start_time: '12:00:00',
        end_time: '18:00:00'
      },
      {
        name: 'Painted Toes',
        genre: 'Alternative',
        available_start_time: '14:00:00',
        end_time: '19:00:00'
      },
      {
        name: 'Rome',
        genre: 'Pop',
        available_start_time: '16:00:00',
        end_time: '21:00:00'
      },
      {
        name: 'Underdone',
        genre: 'Rock',
        available_start_time: '18:00:00',
        end_time: '23:00:00'
      },
      {
        name: 'Iron Sconce',
        genre: 'Indie',
        available_start_time: '19:00:00',
        end_time: '23:00:00'
      },
      {
        name: 'Mistaken',
        genre: 'Alternative',
        available_start_time: '17:00:00',
        end_time: '22:00:00'
      },
      {
        name: 'Pink Panda',
        genre: 'Oldies',
        available_start_time: '21:00:00',
        end_time: '23:00:00'
      },
      {
        name: 'Persistent',
        genre: 'Metal',
        available_start_time: '15:00:00',
        end_time: '20:00:00'
      },
      {
        name: 'Rotten Peal',
        genre: 'Metal',
        available_start_time: '14:00:00',
        end_time: '19:00:00'
      },
      {
        name: 'DJ Leopard',
        genre: 'Rap',
        available_start_time: '13:00:00',
        end_time: '19:00:00'
      },
    ], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
    
  }
};
