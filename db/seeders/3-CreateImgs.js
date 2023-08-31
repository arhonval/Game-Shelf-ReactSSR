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
    await queryInterface.bulkInsert("Imgs", [
      {
        url: "/imgs/screenshots/s-l500.png",
        game_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "/imgs/screenshots/161449973412854284.png",
        game_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "/imgs/screenshots/Doom-1993-id-Software-sur-MS-DOS-Des-les-premiers-FPS-seul-la-main-du-personnage.png",
        game_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "/imgs/screenshots/SPECIAL_Fallout_2.jpg",
        game_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "/imgs/screenshots/10-cf0c97aeba9de46edb32b7cb8df1a0a9-Fallout 1 - Game.png",
        game_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "/imgs/screenshots/screenshot9.jpg",
        game_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "/imgs/screenshots/Doom2_title.png",
        game_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "/imgs/screenshots/doom2scr.jpeg",
        game_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "/imgs/screenshots/1905270-doom-ii-dos-cyberdemon-vs-hell-barons.png",
        game_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "/imgs/screenshots/FF1-Town-2_scale_800_700.jpg",
        game_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "/imgs/screenshots/FF1-Dungeon_scale_800_700.jpg",
        game_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "/imgs/screenshots/FF1-Battle-2_scale_800_700.jpg",
        game_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "/imgs/screenshots/ff7-cloud-tifa_scale_800_700.jpg",
        game_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "/imgs/screenshots/Final-Fantasy-VII-Remake-and-Kingdom-Heart-III-Screenshots-Final-Fantasy-VII-First-Boss-Original.jpg",
        game_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "/imgs/screenshots/pc-final-fantasy-vii-ps4-gameplay-screenshot-cloud-sephiroth.jpg",
        game_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "/imgs/screenshots/067482.jpg",
        game_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "/imgs/screenshots/monster-hunter-world-1-10.jpg",
        game_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "/imgs/screenshots/monsterhunterworld-9-1-1059531.jpg",
        game_id: 6,
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
    await queryInterface.bulkDelete("Imgs", null, {});
  },
};
