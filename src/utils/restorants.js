const restorants = [
  {
    id: "1",
    name: "MC Donald Bandung",
    lokasi: "Jln Ciciru Raya Bandung",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIB_TT9UUIfxUDel3GB_M4HeKfXMABsRrz2xvim8IkzYJTy_2",
    food: [
      {
        id: "1",
        nama: "Hamburger",
        harga: 10000,
        price: 0,
        gambar:
          "https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg"
      },
      {
        id: "2",
        nama: "Chicken Snack Wrap",
        harga: 20000,
        price: 0,
        gambar:
          "https://www.thedailymeal.com/sites/default/files/2014/09/25/snackwrapcrop.jpg"
      },
      {
        id: "3",
        nama: "Kentang Goreng",
        harga: 10000,
        price: 0,
        gambar:
          "http://www.tokomesin.com/wp-content/uploads/2017/09/3-Cara-Membuat-Kentang-Goreng-Lezat-Tanpa-Ribet-tokomesin2.jpg"
      },
      {
        id: "4",
        nama: "Ayam Goreng",
        harga: 10000,
        price: 0,
        gambar:
          "https://images.says.com/uploads/story_source/source_image/535496/4a1d.jpg"
      }
    ]
  },
  {
    id: "2",
    name: "Restorant Dapur Solo",
    lokasi: "Jln Solo Raya",
    image: "https://arsitektour.files.wordpress.com/2014/12/sunter2-1_1.jpg",
    food: [
      {
        id: "1",
        nama: "Fish Fillet",
        harga: 15000,
        price: 0,
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdJOHDNes8e4w6zHIuvT2TRifNh3vCg-SlSXKF0PyYnEyYf0TAXw"
      },
      {
        id: "2",
        nama: "Or Burger",
        harga: 20000,
        price: 0,
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbysCbRMI6CQKW8DNiGQs9clsWXCOmY4ww-vjRtswiBz6fEfih"
      },
      {
        id: "3",
        nama: "Oriental Bento",
        harga: 40000,
        price: 0,
        gambar:
          "https://id.openrice.com/userphoto/photo/0/7N/001ICZ36C61FF3673A888Cl.jpg"
      },
      {
        id: "4",
        nama: "Twisty",
        harga: 2000,
        price: 0,
        gambar: "http://files.hd.kfcku.com/images/product/twisty.png"
      }
    ]
  },
  {
    id: "3",
    name: "Dapur Mie Jakarta",
    lokasi: "Jln Kalibata Jakarta",
    image:
      "https://cdn3.id.orstatic.com/userphoto/doorphoto/0/IF/003N1Y92E843875061AD81px.jpg",
    food: [
      {
        id: "1",
        nama: "Mie Goreng Pedas",
        harga: 13000,
        price: 0,
        gambar:
          "http://www.dapurkobe.co.id/wp-content/uploads/mie-goreng-sosis.jpg"
      },
      {
        id: "2",
        nama: "Mie Jawa Pedas",
        harga: 13000,
        price: 0,
        gambar:
          "https://i.pinimg.com/originals/37/c3/b2/37c3b27ed7a86c23aa1d81a126884404.jpg"
      },
      {
        id: "3",
        nama: "Mie Ayam Sepesial",
        harga: 9000,
        price: 0,
        gambar:
          "https://scm-assets.constant.co/scm/unilever/a6798e909fa57bfd19c3e7f00737e5d6/c6dcd039-6721-4d25-b6a6-4825842fba04.jpg"
      }
    ]
  },
  {
    id: "4",
    name: "Waroeng Steak And Shake Semarang",
    lokasi: "Jln Ngaliyan Raya",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHpO1UOK05Y7VQnWZSa_H4h165bAKWKTaMZnvqCH2D_yMeULd4",
    food: [
      {
        id: "1",
        nama: "Hamburger Steak",
        harga: 12000,
        price: 0,
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi0m-trxrEsRrY4ojfC5Xm_cJvvAikuvm3o8oxPZdEzdkLzGCQ"
      },
      {
        id: "2",
        nama: "Original Steak",
        harga: 14000,
        price: 0,
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Mu8N4_mLuvCE9lSwLrbDttu2zv4RSp_iB-NuxhTd7jtO7l7y"
      },
      {
        id: "3",
        nama: "Steak Ikan Cumi",
        harga: 28000,
        price: 0,
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSHSAfpYNcExCD8tBzZmIXZM5baCcXad5A_lC93DHfbP4ljKO"
      }
    ]
  },
  {
    id: "5",
    name: "Puput Restorant Jakarta",
    lokasi: "Jln Piere Tandean Jakarta",
    image:
      "https://apollo-singapore.akamaized.net/v1/files/84gbvjzysqko3-ID/image;s=966x691;olx-st/_1_.jpg",
    food: [
      {
        id: "1",
        nama: "Nasi Goreng Original",
        harga: 19000,
        price: 0,
        gambar:
          "https://scm-assets.constant.co/scm/unilever/1db348501df1238f872479d225e08c34/c5b644d4-7bd0-4021-b3d1-085021fa1b97.jpg"
      },
      {
        id: "2",
        nama: "Mie Goreng Complete",
        harga: 11000,
        price: 0,
        gambar:
          "https://citraindonesia.com/wp-content/uploads/2018/07/resep-mie-goreng-telur-spesial.jpg"
      },
      {
        id: "3",
        nama: "SeaFood",
        harga: 40000,
        price: 0,
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHsPnylPHAVFcQL0QobFR2pS2RqC6JOoLZsnMpE8GWK24WNAR"
      },
      {
        id: "4",
        nama: "Pasta",
        harga: 30000,
        price: 0,
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS677axBxbNeyM4PEA6Bn9VNAmP8SKbfrPb0L9Il9HXKgEygiQI"
      }
    ]
  },
  {
    id: "6",
    name: "Korean Resto Yogyakarta",
    lokasi: "Jln Sleman Yogyakarta",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/0a/bd/f9/a3/oasis-hatfield-road-st.jpg",
    food: [
      {
        id: "1",
        nama: "Kimchi Korea",
        harga: 30000,
        price: 0,
        gambar:
          "https://i2.wp.com/www.gildedgingerbread.com/wp-content/uploads/2017/07/Mak-Kimchi-8-1.jpg?resize=750%2C600&ssl=1"
      },
      {
        id: "2",
        nama: "Sanakjhi",
        harga: 55000,
        price: 0,
        gambar:
          "https://previews.123rf.com/images/photodee/photodee1612/photodee161200395/66976967-sannakji-octopus-korean-food.jpg"
      },
      {
        id: "3",
        nama: "Khimbab",
        harga: 115000,
        price: 0,
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0YMNZ9l0jyYbCw5KM2E4hcD5hTgfPlnkJkZg9YhaRtvk0Enh9"
      },
      {
        id: "4",
        nama: "japachae",
        harga: 25000,
        price: 0,
        gambar:
          "https://www.rabbitandwolves.com/wp-content/uploads/2019/02/Korean-BBQ-Tofu0563.jpg"
      }
    ]
  }
];

export default restorants;
