fetch("https://api.ifgid.info/api/time")
.then(function (response) {
  return response.json();
});
.then(function (data) {
  console.log(data);
});
