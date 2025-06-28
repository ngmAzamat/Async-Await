// fetch("https://picsum.photos/500/500")
//   .then((res) => res.blob())
//   .then((blob) => {
//     console.log(blob);
//     const file = new File([blob], "image", { type: blob.type });
//     console.log(file);
//   });

/* fetch('URL')
.then(resp => resp.blob())
.then(blob => saveImg(blob))
function saveImg(blob) {
let link = document.createElement('a');
link.setAttribute('href',URL.createObjectURL(blob));
link.setAttribute('download',Date.now()+'');
link.click()
}
*/
const a = document.querySelectorAll("a");
const data = "hjbkl;o";
const blob = new blob([data], { type: "text/plain" });
const url = URL.createObjectURL(blob);
console.log(url);
a.href = url;
a.download = "blob-to-download.txt";
