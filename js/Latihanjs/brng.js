var dataBarang = [
    { nama: "Monitor", harga: "200" },
    { nama: "Keyboard", harga: "30" },
    { nama: "Mouse", harga: "15" }
];

function showBarang(){
    var listBarang = document.getElementById("list-barang");
    //Clear list Barang
    listBarang.innerHTML = "";

    //Cetak Semua Barang
    for(let i = 0; i < dataBarang.length; i++){
        var btnEdit = "<a href='#' onclick='editBarang("+i+")'>Edit</a>";
        var btnHapus = "<a href='#' onclick='hapusBarang("+i+")'>Hapus</a>";

        listBarang.innerHTML += "<li>" + dataBarang[i].nama + " - Harga:" + dataBarang[i].harga + " ["+ btnEdit + "] | " + btnHapus + " </li>";
    }
}

function addBarang(){
    var namaInput = document.querySelector("input[name=barang]").value;
    var hargaInput = document.querySelector("input[name=harga]").value;

    var newBarang = {
        nama: namaInput,
        harga: hargaInput
    };

    dataBarang.push(newBarang);
    showBarang();

    // Clear input fields
    document.querySelector("input[name=barang]").value = "";
    document.querySelector("input[name=harga]").value = "";
}

function editBarang(id){
    var newNama = prompt("Nama Baru", dataBarang[id].nama);
    var newHarga = prompt("Harga Baru", dataBarang[id].harga);

    dataBarang[id].nama = newNama;
    dataBarang[id].harga = newHarga;
    showBarang();
}

function hapusBarang(id){
    dataBarang.splice(id, 1);
    showBarang();
}