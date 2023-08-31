"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("GamePlatforms", [
      {
        game_id: 1,
        platform_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        game_id: 2,
        platform_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        game_id: 3,
        platform_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        game_id: 4,
        platform_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        game_id: 5,
        platform_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        game_id: 6,
        platform_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("GamePlatforms", null, {});
  },
};
