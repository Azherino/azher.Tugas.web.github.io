// Simulasi data keranjang dari sebelumnya
const cartItems = [];
const cartList = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");

// Event listener untuk keranjang
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", (event) => {
        const gameItem = event.target.closest(".game-item");
        const gameName = gameItem.querySelector("h2").textContent;
        const gamePrice = parseInt(gameItem.querySelector("p:nth-of-type(2)").textContent.replace("Harga: Rp ", "").replace(",", ""));

        cartItems.push({ name: gameName, price: gamePrice });
        updateCart();
    });
});

function updateCart() {
    cartList.innerHTML = "";
    let total = 0;
    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Rp ${item.price}`;
        cartList.appendChild(li);
        total += item.price;
    });
    totalPrice.textContent = `Total: Rp ${total.toLocaleString()}`;
}

// Fungsi untuk menangani data formulir Sign Up
document.getElementById("signup-form").addEventListener("submit", (event) => {
    event.preventDefault();  // Mencegah pengiriman form sebenarnya (karena tidak ada backend)

    // Ambil data dari form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Cetak data ke konsol sebagai simulasi proses signup
    console.log("User signed up:");
    console.log("Nama:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    alert("Pendaftaran berhasil! Selamat datang, " + name);

    // Reset form
    event.target.reset();
});
