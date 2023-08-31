const ws = new WebSocket(window.location.href.replace(/^http/, "ws"));
const { commentForm } = document.forms;
// const likeBtn = document.querySelector(".btn-warning");

// commentForm.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const data = new FormData(commentForm);
//   const input = Object.fromEntries(data);
//   const id = commentForm.dataset.game;
//   console.log("id:", id);
//   console.log("input:", input);
//   try {
//     const response = await fetch(`/games/${id}/comment`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(input),
//     });
//     const result = await response.json();
//     console.log("result:", result);
//     const allComments = document.querySelector(".all-comments");
//     const commentHtml = `
//     <div class="comment bg-body-tertiary mb-2">
//     <div class="d-flex justify-content-between">
//       <div class="fs-6">${result.login}</div>
//       <div class="fs-6">${result.newComment.createdAt}</div>
//     </div>
//     <div class="fs-3">${result.newComment.body}</div>
//   </div>
//     `;
//     allComments.insertAdjacentHTML("beforeend", commentHtml);
//   } catch (error) {
//     alert(error);
//   }
// });

ws.onopen = () => {
  console.log("Open");

  ws.onmessage = (event) => {
    const messageFromServer = JSON.parse(event.data);
    console.log("messageFromServer:", messageFromServer);

    if (messageFromServer.clientMessage) {
      const allComments = document.querySelector(".all-comments");
      const commentHtml = `
    <div class="comment bg-body-tertiary mb-2">
    <div class="d-flex justify-content-between">
      <div class="fs-6">${messageFromServer.login}</div>
    </div>
    <div class="fs-3">${messageFromServer.clientMessage}</div>
  </div>
    `;
      allComments.insertAdjacentHTML("beforeend", commentHtml);
    }
  };

  commentForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log(commentForm);
    const data = new FormData(commentForm);
    const input = Object.fromEntries(data);
    const id = commentForm.dataset.game;
    console.log("id:", id);
    console.log("input:", input);
    try {
      const response = await fetch(`/games/${id}/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      const result = await response.json();
      console.log("result:", result);
      ws.send(JSON.stringify(result));
      commentForm.querySelector("textarea").value = "";
    } catch (error) {
      alert(error);
    }
  });
};

// likeBtn.addEventListener("click", async (e) => {
//   e.preventDefault();
//   const gameId = likeBtn.dataset.like;
//   console.log("gameId:", gameId);
//   try {
//     const response = await fetch(`/likes/${gameId}`, {
//       method: "POST",
//     });
//     const result = await response.json();
//     console.log("result:", result);
//     const likeDiv = document.querySelector(".like");
//     likeDiv.innerHTML = `<div>${result.msg}</div>`;
//   } catch (error) {
//     alert(error);
//   }
// });
