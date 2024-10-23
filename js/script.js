//sini java scrip\\

document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah reload halaman saat form disubmit

    // Ambil nilai dari setiap input form
    var nama = document.getElementById('nama').value;
    var jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
    var tanggal = document.getElementById('tanggal').value;
    var pesan = document.getElementById('pesan').value;

    // Buat output untuk ditampilkan di dalam div
    var output = `<p><strong>Nama:</strong> ${nama}</p>
                  <p><strong>Jenis Kelamin:</strong> ${jenisKelamin}</p>
                  <p><strong>Tanggal:</strong> ${tanggal}</p>
                  <p><strong>Pesan:</strong> ${pesan}</p>`;

    // Tampilkan hasilnya di dalam div dengan id "output"
    document.getElementById('output').innerHTML = output;

    // Reset form setelah submit
    document.getElementById('dataForm').reset();
});