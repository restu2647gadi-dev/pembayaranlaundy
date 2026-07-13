function hitungTotal(){

    let nama = document.getElementById("nama").value;
    let layanan = document.getElementById("layanan");

    let namaLayanan = layanan.options[layanan.selectedIndex].text;
    let harga = parseInt(layanan.value);

    let berat = parseFloat(document.getElementById("berat").value);

    if(nama === "" || isNaN(berat)){
        alert("Silakan lengkapi data terlebih dahulu!");
        return;
    }

    let total = harga * berat;

    document.getElementById("struk").innerHTML = `
        <h3>Struk Laundry</h3>

        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Layanan:</strong> ${namaLayanan}</p>
        <p><strong>Berat:</strong> ${berat} Kg</p>
        <p><strong>Harga/Kg:</strong> Rp ${harga.toLocaleString('id-ID')}</p>

        <hr>

        <h2>Total Bayar</h2>
        <h2>Rp ${total.toLocaleString('id-ID')}</h2>
    `;

    document.getElementById("nominal").innerHTML =
        "Silakan Bayar Rp " + total.toLocaleString('id-ID');

    document.getElementById("qris").style.display = "block";
}

function bayarQRIS(){

    alert("Pembayaran berhasil dikonfirmasi.");

    document.getElementById("struk").innerHTML += `
        <hr>

        <h2 style="color:green;">STATUS : LUNAS</h2>

        <p>Pembayaran menggunakan QRIS.</p>
    `;

    document.getElementById("qris").style.display = "none";
}