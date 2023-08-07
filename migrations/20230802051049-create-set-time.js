'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('set_time', {
      set_time_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.SMALLINT,
        foreignKey: true,
      },
      stage_id: {
        type: Sequelize.SMALLINT,
        allowNull:false
      },
      band_id: {
        type: Sequelize.SMALLINT,
        foreignKey: true,
      },
      set_start_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      set_end_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('set_time');
  }
};