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
    await queryInterface.bulkInsert("Games", [
      {
        title: "Doom",
        description:
          "Doom (стилизованное написание — DooM или DOOM) — компьютерная игра в жанре шутера от первого лица, разработанная и выпущенная компанией id Software в 1993 году. Doom является одной из самых значительных и влиятельных компьютерных игр в истории индустрии; в частности, её популярность во многом определила дальнейшее развитие и распространение жанра шутеров от первого лица",
        date: "10.12.1993",
        genre: "Shooter",
        main_img: "/imgs/gameicon/Doom_cover_art.jpg",
        video: "https://www.youtube.com/embed/aW2lZDBxeT0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Fallout",
        description:
          "Fallout (с англ. — «Выпадение радиоактивных осадков»[4] или «Негативные последствия»[5]) — компьютерная ролевая игра, действие которой происходит в мире, пережившем ядерную войну. Игра, выпущенная в 1997 году компанией Interplay Entertainment, разрабатывалась её структурным подразделением Black Isle Studios[6]. Одно из наиболее известных произведений постапокалиптического жанра. На стадии разработки предполагалось, что Fallout станет фактическим продолжением игры Wasteland, но в связи с отсутствием на тот момент у компании Interplay прав на Wasteland игра Fallout не стала её официальным сиквелом[7][8]. Для игры была разработана собственная ролевая система, получившая название SPECIAL и заменившая систему GURPS, использование которой планировалось изначально.",
        date: "30.09.1997",
        genre: "RPG",
        main_img: "/imgs/gameicon/Fallout.jpg",
        video: "https://www.youtube.com/embed/geLiEiAiQJA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Doom II: Hell on Earth",
        description:
          "Doom II: Hell on Earth — компьютерная игра в жанре шутера от первого лица, разработанная компанией id Software. Изначально была выпущена в 1994 году для персональных компьютеров под управлением MS-DOS. Является продолжением игры Doom, которая вышла в свет годом ранее. В отличие от Doom 1993 года, которая распространялась по условно-бесплатной схеме по почтовым заказам, игра Doom II продавалась в магазинах.",
        date: "30.09.1994",
        genre: "Shooter",
        main_img: "/imgs/gameicon/Doom2_cover_art.jpg",
        video: "https://www.youtube.com/embed/KLJ9mcVgU9g",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Final Fantasy",
        description:
          "Final Fantasy (яп. ファイナルファンタジー фаинару фантадзи:) — видеоигра в жанре JRPG. Была выпущена в Японии компанией Square Co., Ltd. (ныне Square Enix) для Nintendo Entertainment System в 1987 году и положила начало ведущему бренду Square — серии Final Fantasy. Final Fantasy I была не раз портирована для ряда домашних и карманных консолей и зачастую поставлялась в наборе, в комплект которого также входила следующая часть серии — Final Fantasy II; одними из таких наборов являются Final Fantasy Origins (PS One) и Final Fantasy I & II: Dawn of Souls (Game Boy Advance). Final Fantasy стала одной из наиболее влиятельных ранних японских ролевых игр и сыграла одну из ведущих ролей в формировании и популяризации жанра.",
        date: "18.12.1987",
        genre: "jRPG",
        main_img: "/imgs/gameicon/Ff1j_front.jpg",
        video: "https://www.youtube.com/embed/aguBv5Gj49s",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Final Fantasy VII",
        description:
          "Final Fantasy VII (яп. ファイナルファンタジーVII файнару фантадзи: сэбун) — японская ролевая игра, разработанная Square Co Ltd. (ныне Square Enix) и выпущенная Sony Computer Entertainment для игровой приставки Sony PlayStation в 1997 году как седьмая номерная часть серии игр Final Fantasy. Игра была также портирована на операционную систему Windows. Порт на Windows вышел 24 июня 1998 года в США и 25 июня 1998 года в Европе[1]. В 2009 году Final Fantasy VII также была переиздана для сети PlayStation Network, в 2012 году порт игры для Windows стал доступным для платной закачки из магазина цифровой дистрибуции, а в 2013 году игра вышла в Steam. Действие игры происходит в антиутопичном вымышленном мире, выполненном в антураже научной фантастики с элементами фэнтези. Сюжет игры повествует о том, как группа экотеррористов «ЛАВИНА», в состав которой входит и главный герой Клауд Страйф, борется с мегакорпорацией «Син-Ра», деятельность которой ведёт к истощению источника планетарной энергии. В дальнейшем герои сталкиваются с большей опасностью для планеты и самих себя — главным злодеем игры Сефиротом.",
        date: "31.01.1997",
        genre: "jRPG",
        main_img: "/imgs/gameicon/Final_Fantasy_VII_NA_cover.jpg",
        video: "https://www.youtube.com/embed/8TBDPidXpEU",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Monster Hunter: World",
        description:
          "Monster Hunter: World — компьютерная игра в жанре action/RPG, разработанная и выпущенная японской компанией Capcom для платформ PlayStation 4, Xbox One и Windows в 2018 году. Это пятая часть серии игр Monster Hunter. Игра была анонсирована на пресс-конференции PlayStation на выставке Electronic Entertainment Expo 2017[5]. Игра выпущена во всем мире 26 января 2018 года, в Японии игра вышла только на PlayStation 4. В отличие от предыдущих игр серии, игра должна предоставить игрокам возможность перемещаться по миру игры свободно, без экранов загрузки между локациями. Она поддерживает кооперативный режим с возможностью совместной игры до четырех игроков, причем игроки из Японии и западных стран могут играть вместе друг с другом.",
        date: "12.06.2017",
        genre: "action-rpg",
        main_img: "/imgs/gameicon/Monster_Hunter_World_cover_art.jpg",
        video: "https://www.youtube.com/embed/_q1w8Iyjcp8",
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
    await queryInterface.bulkDelete("Games", null, {});
  },
};
