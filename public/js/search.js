const { searchForm } = document.forms;

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(searchForm);
  const input = Object.fromEntries(data);
  console.log("input:", input);
  window.location.href = `/search/${input.search}`;
});
