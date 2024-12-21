export type Product = {
   id: number
   name: string
   rating: number
   price: number
   img: string
   desc: string
}

export function getProducts(): Product[] {
   return [
      { id: 1, name: "Matcha Latte", rating: 5, price: 10000, img: "/src/assets/images/drink-1.png", desc: "Matcha latte adalah minuman yang terbuat dari bubuk matcha dicampur dengan susu cair atau cairan lainnya. Minuman ini memiliki rasa manis dan creamy dengan sedikit rasa pahit dari teh hijau. Matcha latte bisa disajikan panas atau dingin, dan bisa dibeli dalam bentuk cair atau bubuk siap seduh." },
      { id: 2, name: "Vanilla Latte", rating: 5, price: 5000, img: "/src/assets/images/drink-2.png", desc: "Vanilla latte adalah minuman kopi susu yang terbuat dari espresso, susu, dan ekstrak vanila. Minuman ini memiliki rasa yang manis dan creamy, dengan aroma kopi yang kuat dan aroma vanilla yang khas. Vanilla latte biasanya disajikan dalam cangkir latte berukuran sedang." },
      { id: 3, name: "White chocolate", rating: 3, price: 20000, img: "/src/assets/images/drink-3.png", desc: "White Chocolate Latte adalah minuman standar yang dapat ditemukan di hampir setiap kedai kopi. Minuman ini dibuat dengan susu, kopi, dan cream." },
      { id: 4, name: "Expresso Latte", rating: 3, price: 15000, img: "/src/assets/images/drink-4.png", desc: "Dolce latte adalah minuman kopi yang berasal dari Italia yang dibuat dengan espresso, susu, dan gula. Kata 'dolce' dalam bahasa Italia berarti 'manis' sehingga nama dolce latte secara harfiah berarti 'latte yang manis'. " },
      { id: 5, name: "Caramel latte", rating: 4, price: 8000, img: "/src/assets/images/drink-5.png", desc: "Caramel latte adalah minuman kopi yang terbuat dari campuran espresso, susu, dan sirup karamel. Minuman ini memiliki rasa manis dan gurih, dengan aroma karamel yang khas." },
   ]
}

export function getSingleProduct(id: number): Product {
   return getProducts().filter(p => p.id == id)[0]
}