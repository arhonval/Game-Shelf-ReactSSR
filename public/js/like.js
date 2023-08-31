const likeBtn = document.querySelector(".btn-warning");

likeBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const gameId = likeBtn.dataset.like;
  console.log("gameId:", gameId);
  try {
    const response = await fetch(`/likes/${gameId}`, {
      method: "POST",
    });
    const result = await response.json();
    console.log("result:", result);
    const likeDiv = document.querySelector(".like");
    likeDiv.innerHTML = `<div>${result.msg}</div>`;
  } catch (error) {
    alert(error);
  }
});
