const { armor, weapon } = document.forms;
const armorDiv = document.querySelector(".armor");
const weaponDiv = document.querySelector(".weapon");

armor.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (armorDiv.childNodes.length >= 27) {
    while (armorDiv.firstChild) {
      armorDiv.removeChild(armorDiv.firstChild);
    }
  }
  if (weaponDiv.childNodes.length >= 4) {
    while (weaponDiv.firstChild) {
      weaponDiv.removeChild(weaponDiv.firstChild);
    }
  }
  const data = new FormData(armor);
  const inputs = Object.fromEntries(data);
  console.log("inputs:", inputs);
  try {
    const response = await fetch(
      `https://mhw-db.com/armor/sets/${inputs.setId}`,
      {
        method: "GET",
      }
    );
    const result = await response.json();
    console.log("result:", result);
    console.log(result.pieces[0].assets.imageMale);
    const armorName = document.createElement("div");
    armorName.className = "armor-name";
    armorName.innerText = `name: ${result.name}`;
    const armorRank = document.createElement("div");
    armorRank.className = "armor-rank";
    armorRank.innerText = `rank: ${result.rank}`;
    const headImg = document.createElement("img");
    headImg.className = "head-img";
    headImg.src = result.pieces[0].assets.imageMale;
    const headName = document.createElement("div");
    headName.className = "head-name";
    headName.innerText = `name: ${result.pieces[0].name}`;
    const headRank = document.createElement("div");
    headRank.className = "head-rank";
    headRank.innerText = `rank: ${result.pieces[0].rank}`;
    const headDefense = document.createElement("div");
    headDefense.className = "head-defense";
    headDefense.innerText = `defense: base: ${result.pieces[0].defense.base}, max: ${result.pieces[0].defense.max}, augmented: ${result.pieces[0].defense.augmented}`;
    const headResistance = document.createElement("div");
    headResistance.className = "head-resistance";
    headResistance.innerText = `resistances: fire: ${result.pieces[0].resistances.fire}, water: ${result.pieces[0].resistances.water}, ice: ${result.pieces[0].resistances.ice}, thunder: ${result.pieces[0].resistances.thunder}, dragon: ${result.pieces[0].resistances.dragon}`;
    const chestImg = document.createElement("img");
    chestImg.className = "chest-img";
    chestImg.src = result.pieces[1].assets.imageMale;
    const chestName = document.createElement("div");
    chestName.className = "chest-name";
    chestName.innerText = `name: ${result.pieces[1].name}`;
    const chestRank = document.createElement("div");
    chestRank.className = "chest-rank";
    chestRank.innerText = `rank: ${result.pieces[1].rank}`;
    const chestDefense = document.createElement("div");
    chestDefense.className = "chest-defense";
    chestDefense.innerText = `defense: base: ${result.pieces[1].defense.base}, max: ${result.pieces[1].defense.max}, augmented: ${result.pieces[1].defense.augmented}`;
    const chestResistance = document.createElement("div");
    chestResistance.className = "chest-resistance";
    chestResistance.innerText = `resistances: fire: ${result.pieces[1].resistances.fire}, water: ${result.pieces[1].resistances.water}, ice: ${result.pieces[1].resistances.ice}, thunder: ${result.pieces[1].resistances.thunder}, dragon: ${result.pieces[1].resistances.dragon}`;
    const glovesImg = document.createElement("img");
    glovesImg.className = "gloves-img";
    glovesImg.src = result.pieces[2].assets.imageMale;
    const glovesName = document.createElement("div");
    glovesName.className = "gloves-name";
    glovesName.innerText = `name: ${result.pieces[2].name}`;
    const glovesRank = document.createElement("div");
    glovesRank.className = "gloves-rank";
    glovesRank.innerText = `rank: ${result.pieces[2].rank}`;
    const glovesDefense = document.createElement("div");
    glovesDefense.className = "gloves-defense";
    glovesDefense.innerText = `defense: base: ${result.pieces[2].defense.base}, max: ${result.pieces[2].defense.max}, augmented: ${result.pieces[2].defense.augmented}`;
    const glovesResistance = document.createElement("div");
    glovesResistance.className = "gloves-resistance";
    glovesResistance.innerText = `resistances: fire: ${result.pieces[2].resistances.fire}, water: ${result.pieces[2].resistances.water}, ice: ${result.pieces[2].resistances.ice}, thunder: ${result.pieces[2].resistances.thunder}, dragon: ${result.pieces[2].resistances.dragon}`;
    const waistImg = document.createElement("img");
    waistImg.className = "waist-img";
    waistImg.src = result.pieces[3].assets.imageMale;
    const waistName = document.createElement("div");
    waistName.className = "waist-name";
    waistName.innerText = `name: ${result.pieces[3].name}`;
    const waistRank = document.createElement("div");
    waistRank.className = "waist-rank";
    waistRank.innerText = `rank: ${result.pieces[3].rank}`;
    const waistDefense = document.createElement("div");
    waistDefense.className = "waist-defense";
    waistDefense.innerText = `defense: base: ${result.pieces[3].defense.base}, max: ${result.pieces[3].defense.max}, augmented: ${result.pieces[3].defense.augmented}`;
    const waistResistance = document.createElement("div");
    waistResistance.className = "waist-resistance";
    headResistance.innerText = `resistances: fire: ${result.pieces[3].resistances.fire}, water: ${result.pieces[3].resistances.water}, ice: ${result.pieces[3].resistances.ice}, thunder: ${result.pieces[3].resistances.thunder}, dragon: ${result.pieces[3].resistances.dragon}`;
    const legsImg = document.createElement("img");
    legsImg.className = "legs-img";
    legsImg.src = result.pieces[4].assets.imageMale;
    const legsName = document.createElement("div");
    legsName.className = "legs-name";
    legsName.innerText = `name: ${result.pieces[4].name}`;
    const legsRank = document.createElement("div");
    legsRank.className = "legs-rank";
    legsRank.innerText = `rank: ${result.pieces[4].rank}`;
    const legsDefense = document.createElement("div");
    legsDefense.className = "legs-defense";
    legsDefense.innerText = `defense: base: ${result.pieces[4].defense.base}, max: ${result.pieces[4].defense.max}, augmented: ${result.pieces[4].defense.augmented}`;
    const legsResistance = document.createElement("div");
    legsResistance.className = "legs-resistance";
    legsResistance.innerText = `resistances: fire: ${result.pieces[4].resistances.fire}, water: ${result.pieces[4].resistances.water}, ice: ${result.pieces[4].resistances.ice}, thunder: ${result.pieces[4].resistances.thunder}, dragon: ${result.pieces[4].resistances.dragon}`;
    armorDiv.appendChild(armorName);
    armorDiv.appendChild(armorRank);
    armorDiv.appendChild(headImg);
    armorDiv.appendChild(headName);
    armorDiv.appendChild(headRank);
    armorDiv.appendChild(headDefense);
    armorDiv.appendChild(headResistance);
    armorDiv.appendChild(chestImg);
    armorDiv.appendChild(chestName);
    armorDiv.appendChild(chestRank);
    armorDiv.appendChild(chestDefense);
    armorDiv.appendChild(chestResistance);
    armorDiv.appendChild(glovesImg);
    armorDiv.appendChild(glovesName);
    armorDiv.appendChild(glovesRank);
    armorDiv.appendChild(glovesDefense);
    armorDiv.appendChild(glovesResistance);
    armorDiv.appendChild(waistImg);
    armorDiv.appendChild(waistName);
    armorDiv.appendChild(waistRank);
    armorDiv.appendChild(waistDefense);
    armorDiv.appendChild(waistResistance);
    armorDiv.appendChild(legsImg);
    armorDiv.appendChild(legsName);
    armorDiv.appendChild(legsRank);
    armorDiv.appendChild(legsDefense);
    armorDiv.appendChild(legsResistance);
    console.log(armorDiv.childNodes);
  } catch (error) {
    alert(error);
  }
});

weapon.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (armorDiv.childNodes.length >= 27) {
    while (armorDiv.firstChild) {
      armorDiv.removeChild(armorDiv.firstChild);
    }
  }
  if (weaponDiv.childNodes.length >= 4) {
    while (weaponDiv.firstChild) {
      weaponDiv.removeChild(weaponDiv.firstChild);
    }
  }
  const data = new FormData(weapon);
  const input = Object.fromEntries(data);
  console.log("input:", input);
  try {
    const response = await fetch(
      `https://mhw-db.com/weapons/${input.weaponId}`,
      {
        method: "GET",
      }
    );
    const result = await response.json();
    console.log("result:", result);
    const weaponImg = document.createElement("img");
    weaponImg.className = "weapon-img";
    weaponImg.src = result.assets.image;
    const weaponName = document.createElement("div");
    weaponName.className = "weapon-name";
    weaponName.innerText = `name: ${result.name}`;
    const weaponType = document.createElement("div");
    weaponType.className = "weapon-type";
    weaponType.innerText = `type: ${result.type}`;
    const weaponAttack = document.createElement("div");
    weaponAttack.className = "weapon-attack";
    weaponAttack.innerText = `attack: ${result.attack.raw}`;
    weaponDiv.appendChild(weaponImg);
    weaponDiv.appendChild(weaponName);
    weaponDiv.appendChild(weaponType);
    weaponDiv.appendChild(weaponAttack);
    console.log(weaponDiv.childNodes);
  } catch (error) {
    alert(error);
  }
});
