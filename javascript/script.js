//alert("belajar javascript");

function kirim() {
// ambil value nama
let nama = document.getElementById("nama").value;
console.log("Nama: " + nama);
let saran = document.getElementById("saran").value;

// tampilkan nama ul id=list-pesan
// document.getElementById("list-pesan").innerHTML = "<li>" + nama + "</li>";
// document.getElementById("list-pesan").innerHTML += `<li>${nama}</li>`;
// document.getElementById("list-pesan").innerHTML += `<li>${nama} - ${saran}</li>`;

document.getElementById("list-pesan").innerHTML += `<tr><td>${nama}</td><td>${saran}</td></tr>`;
}