const { regForm } = document.forms;

regForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (document.querySelector(".error")) {
    document.querySelector(".error").remove();
  }
  const data = new FormData(regForm);
  const inputs = Object.fromEntries(data);
  console.log("inputs:", inputs);
  try {
    const response = await fetch("/registrate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const result = await response.json();
    if (result.err) {
      const errMsg = document.createElement("div");
      errMsg.className = "error";
      errMsg.innerText = result.err;
      errMsg.style.color = "red";
      regForm.append(errMsg);
    } else if (result.msg) {
      window.location.href = "/platforms";
    }
  } catch (error) {
    alert(error);
  }
});
