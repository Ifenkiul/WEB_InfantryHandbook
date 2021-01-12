


window.addEventListener("load", function () {
  const link = localStorage.getItem('page');

  fetchHtml(link);

  
});
console.log(localStorage.getItem('page'));