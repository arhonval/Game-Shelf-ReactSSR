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
    await queryInterface.bulkInsert("Platforms", [
      {
        name: "NES",
        img: "/imgs/NES-Console-Set.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "SNES",
        img: "/imgs/SNES-Mod1-Console-Set.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Playstation",
        img: "/imgs/Playstation_logo_colour.svg.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Playstation 2",
        img: "/imgs/1200px-PS2-Versions.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MS DOS",
        img: "/imgs/Msdos-icon.svg.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Windows",
        img: "/imgs/Icon-windows_os.svg.png",
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
    await queryInterface.bulkDelete("Platforms", null, {});
  },
};
