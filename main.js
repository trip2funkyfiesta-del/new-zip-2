const products = [
  {
    id: 1,
    name: 'Nike Shox TL',
    price: 2400,
    image: '',
    colors: [
      { name: 'Black', image: 'IMAGES/black.JPG', hex: '#000000' },
      { name: 'White', image: 'IMAGES/White shox.webp', hex: '#FFFFFF' },
      { name: 'Red', image: 'IMAGES/NIKE SHOX.jpg', hex: '#FF0000' },
      { name: 'Blue', image: 'IMAGES/blue.JPG', hex: '#0066FF' },
      { name: 'Brown', image: 'IMAGES/brownshox.webp', hex: '#312b0dff' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 2200,
    name: 'Nike TN ',
    price: 1,
    image: 'IMAGES/nike tn.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/nike tn.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/IMG_0932.JPG', hex: '#FFFFFF' },
      { name: 'Blue', image: 'IMAGES/IMG_0912.JPG', hex: '#0066FF' },
      { name: 'Orange', image: 'IMAGES/IMG_0913.JPG', hex: '#ff6f00ff' },
      { name: 'Cyan', image: 'IMAGES/IMG_0914.JPG', hex: '#808080ff' }
    ],
    sizes: ['UK 3', 'UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK10']
  },
  {
    id: 3,
    name: 'Nike Air Force 1',
    price: 1400,
    image: 'IMAGES/nike airforce.jpg',
    colors: [
      { name: 'White', image: 'IMAGES/IMG_1840.JPG', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/IMG_1839.JPG', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/IMG_1847.JPG', hex: '#a8a6a6ff' },
      { name: 'Green', image: 'IMAGES/IMG_1842.JPG', hex: '#0066FF' },
      { name: 'Grey', image: 'IMAGES/IMG_1843.JPG', hex: '#2b5626ff' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 4,
    name: 'Nike Air Max 95',
    price: 2000,
    image: 'IMAGES/95.jpg',
    colors: [
      { name: 'Grey', image: 'IMAGES/95.jpg', hex: '#808080' }, 
      { name: 'Black', image: 'IMAGES/95.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/95.jpg', hex: '#FFFFFF' },
      { name: 'Red', image: 'IMAGES/95.jpg', hex: '#FF0000' },
      { name: 'Blue', image: 'IMAGES/95.jpg', hex: '#0066FF' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 5,
    name: 'Puma Suede ',
    price: 1800,
    image: 'IMAGES/puma suede.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/IMAGES/black suede .JPG',hex:'#000000' },
      { name: 'Red', image: 'IMAGES/puma suede.jpg', hex: '#FF0000' },
      { name: 'Blue', image: 'IMAGES/puma suede.jpg', hex: '#0066FF' },
      { name: 'Grey', image: 'IMAGES/puma suede.jpg', hex: '#808080' },
      { name: 'Green', image: 'IMAGES/green suede .JPG', hex: '#00AA00' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 6,
    name: 'Adidas Campus',
    price: 1800,
    image: 'IMAGES/CAMPUS 00 B.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CAMPUS 00 B.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/grey 00.JPG', hex: '#9a9a9aff' },
      { name: 'Green', image: 'IMAGES/green 00.JPG', hex: '#007d00ff' },
      { name: 'Blue', image: 'IMAGES/CAMPUS 00 B.jpg', hex: '#0066FF' },
      { name: 'Red', image: 'IMAGES/red 00.JPG', hex: '#FF0000' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 7,
    name: 'Vans Knu Skool',
    price: 1600,
    image: 'IMAGES/VANS KNU.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/VANS KNU.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/grey vans .JPG', hex: '#989898ff' },
      { name: 'Red', image: 'IMAGES/VANS KNU.jpg', hex: '#FF0000' },
      { name: 'Blue', image: 'IMAGES/blue vans.JPG', hex: '#0066FF' },
      { name: 'Green', image: 'IMAGES/VANS KNU.jpg', hex: '#00AA00' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 8,
    name: 'New Balance 9060',
    price: 2100.5,
    image: 'IMAGES/9060.jpg',
    colors: [
      { name: 'Grey', image: 'IMAGES/9060.jpg', hex: '#000000ff' },
      { name: 'White', image: 'IMAGES/9060.jpg', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/9060.jpg', hex: '#000000' },
      { name: 'Navy', image: 'IMAGES/blue 9060.JPG', hex: '#052d55ff' },
      { name: 'Beige', image: 'IMAGES/9060.jpg', hex: '#D4AF7A' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 9,
    name: 'Jordan 1 Retro High',
    price: 169.99,
    image: '/Users/Aboo/Desktop/WEB SOLE/IMAGES/retro red 1.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/black 1.JPG', hex: '#000000' },
      { name: 'Red', image: '/Users/Aboo/Desktop/WEB SOLE/IMAGES/retro red 1.JPG', hex: '#FF0000' },
      { name: 'Peach', image: 'IMAGES/peach 1.JPG', hex: '#f6c77dff' },
      { name: 'Blue', image: 'IMAGES/l blue 1.JPG', hex: '#0066FF' },
      { name: 'Green', image: 'IMAGES/orange 1 .JPG', hex: '#f87721ff' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 10,
    name: 'Adidas Samba',
    price: 249.99,
    image: 'IMAGES/IMG_0976.JPG',
    colors: [
      { name: 'Grey', image: 'IMAGES/IMG_0978.JPG', hex: '#f21717ff' },
      { name: 'White', image: 'IMAGES/IMG_0977.JPG', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/IMG_0976.JPG', hex: '#000000' },
      { name: 'Beige', image: 'IMAGES/IMG_0975.JPG', hex: '#121ecaff' },
      { name: 'Brown', image: 'IMAGES/IMG_0974.JPG', hex: '#347d0dff' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 11,
    name: 'Nike P6000',
    price: 64.99,
    image: 'IMAGES/IMG_0987.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/IMG_0987.JPG', hex: '#000000' },
      { name: 'White', image: 'IMAGES/IMG_0988.JPG', hex: '#FFFFFF' },
      { name: 'Red', image: 'IMAGES/IMG_0989.JPG', hex: '#FF0000' },
      { name: 'Brown', image: 'IMAGES/IMG_0990.JPG', hex: '#6e411fff' },
      { name: 'Pink', image: 'IMAGES/IMG_0992.JPG', hex: '#ea00ffff' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 12,
    name: 'Nike Portal',
    price: 79.99,
    image: 'IMAGES/IMG_0968.JPG',
    colors: [
      { name: 'White', image: 'IMAGES/IMG_0972.JPG', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/IMG_0968.JPG', hex: '#000000' },
      { name: 'Blue', image: 'IMAGES/IMG_0969.JPG', hex: '#0080ffff' },
      { name: 'Pink', image: 'IMAGES/IMG_0971.JPG', hex: '#ff00aeff' },
      { name: 'Orange', image: 'IMAGES/IMG_0973.JPG', hex: '#f56a38ff' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 13,
    name: 'Nocta',
    price: 109.99,
    image: 'IMAGES/IMG_1838.JPG',
    colors: [
      { name: 'White', image: 'IMAGES/IMG_1837.JPG', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/IMG_1838.JPG', hex: '#000000' },
      { name: 'Blue', image: 'https://images.pexels.com/photos/2759828/pexels-photo-2759828.jpeg', hex: '#0066FF' },
      { name: 'Green', image: 'https://images.pexels.com/photos/2759828/pexels-photo-2759828.jpeg', hex: '#00AA00' },
      { name: 'Red', image: 'https://images.pexels.com/photos/2759828/pexels-photo-2759828.jpeg', hex: '#FF0000' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 14,
    name: 'Corteiz 95',
    price: 4500,
    image: 'IMAGES/corteiz honeydew.webp',
    colors: [
      { name: 'Grey', image: 'IMAGES/corteiz blue.jpeg', hex: '#e2e2e2ff' },
      { name: 'Green', image: 'IMAGES/corteiz green.jpeg', hex: '#2d7943ff' },
      { name: 'Black', image: 'IMAGES/corteiz honeydew.webp', hex: '#000000' },
      { name: 'Pink', image: 'IMAGES/corteiz pink.webp', hex: '#dd36ffff' },
      { name: 'Red', image: 'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg', hex: '#FF0000' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 15,
    name: 'Nike Dunk Low',
    price: 119.99,
    image: 'IMAGES/IMG_1797.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/IMG_1797.JPG', hex: '#000000' },
      { name: 'White', image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg', hex: '#FFFFFF' },
      { name: 'Blue', image: 'IMAGES/light blue dunks.JPG', hex: '#0066FF' },
      { name: 'Red', image: 'IMAGES/blue dunks.JPG', hex: '#0026ffff' },
      { name: 'Green', image: 'IMAGES/green dunks.JPG', hex: '#00AA00' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 16,
    name: 'Nike Uptempo',
    price: 109.99,
    image: 'IMAGES/black up.JPG',
    colors: [
      { name: 'White', image: 'IMAGES/white up.JPG', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/black up.JPG', hex: '#000000' },
      { name: 'Blue', image: 'IMAGES/blue up.JPG', hex: '#3c97ffff' },
      { name: 'Reverse Black', image: 'IMAGES/white and black up.JPG', hex: '#161515ff' },
      { name: 'Reverse white', image: 'IMAGES/black and white up.JPG', hex: '#FFDD00' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 17,
    name: 'Asics Gel-Lyte III',
    price: 129.99,
    image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg',
    colors: [
      { name: 'Grey', image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg', hex: '#808080' },
      { name: 'White', image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg', hex: '#FFFFFF' },
      { name: 'Black', image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg', hex: '#000000' },
      { name: 'Blue', image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg', hex: '#0066FF' },
      { name: 'Red', image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg', hex: '#FF0000' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 18,
    name: 'Nike SNDR',
    price: 139.99,
    image: 'IMAGES/IMG_1849.JPG',
    colors: [
      { name: 'White', image: 'IMAGES/IMG_1851.JPG', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/IMG_1849.JPG', hex: '#000000' },
      { name: 'Pink', image: 'IMAGES/IMG_1854.JPG', hex: '#e600ffff' },
      { name: 'Blue', image: 'IMAGES/IMG_1852.JPG', hex: '#0066FF' },
      { name: 'Green', image: 'IMAGES/IMG_1855.JPG', hex: '#60f914ff' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 19,
    name: 'Jordan 4',
    price: 94.99,
    image: 'IMAGES/black j4.JPG',
    colors: [
      { name: 'White', image: 'IMAGES/white j4.JPG', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/black j4.JPG', hex: '#000000' },
      { name: 'Red', image: 'IMAGES/red j4.JPG', hex: '#FF0000' },
      { name: 'Blue', image: 'IMAGES/blue j4.JPG', hex: '#0066FF' },
      { name: 'Green', image: 'IMAGES/green j4.JPG', hex: '#065306ff' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 20,
    name: 'New Balance 550',
    price: 119.99,
    image: 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg',
    colors: [
      { name: 'White', image: 'IMAGES/white 550.JPG', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/grey 550.JPG', hex: '#808080' },
      { name: 'Black', image: 'IMAGES/black 550.JPG', hex: '#000000' },
      { name: 'Red', image: 'IMAGES/red 550.JPG', hex: '#ff0000ff' },
      { name: 'Orange', image: 'IMAGES/orange 550.JPG', hex: '#f3610cff' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 21,
    name: 'Nike Corteiz',
    price: 84.99,
    image: 'https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg',
    colors: [
      { name: 'White', image: 'https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg', hex: '#FFFFFF' },
      { name: 'Black', image: 'https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg', hex: '#000000' },
      { name: 'Red', image: 'https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg', hex: '#FF0000' },
      { name: 'Blue', image: 'https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg', hex: '#0066FF' },
      { name: 'Navy', image: 'https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg', hex: '#001F3F' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 22,
    name: 'Vans Old Skool',
    price: 69.99,
    image: 'https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg',
    colors: [
      { name: 'Black', image: 'https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg', hex: '#000000' },
      { name: 'White', image: 'https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg', hex: '#FFFFFF' },
      { name: 'Red', image: 'https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg', hex: '#FF0000' },
      { name: 'Blue', image: 'https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg', hex: '#0066FF' },
      { name: 'Green', image: 'https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg', hex: '#00AA00' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 23,
    name: 'Nike React Element',
    price: 149.99,
    image: 'https://images.pexels.com/photos/1619652/pexels-photo-1619652.jpeg',
    colors: [
      { name: 'White', image: 'https://images.pexels.com/photos/1619652/pexels-photo-1619652.jpeg', hex: '#FFFFFF' },
      { name: 'Black', image: 'https://images.pexels.com/photos/1619652/pexels-photo-1619652.jpeg', hex: '#000000' },
      { name: 'Blue', image: 'https://images.pexels.com/photos/1619652/pexels-photo-1619652.jpeg', hex: '#0066FF' },
      { name: 'Grey', image: 'https://images.pexels.com/photos/1619652/pexels-photo-1619652.jpeg', hex: '#808080' },
      { name: 'Orange', image: 'https://images.pexels.com/photos/1619652/pexels-photo-1619652.jpeg', hex: '#FF6600' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 24,
    name: 'Adidas NMD R1',
    price: 139.99,
    image: 'https://images.pexels.com/photos/1598511/pexels-photo-1598511.jpeg',
    colors: [
      { name: 'Black', image: 'https://images.pexels.com/photos/1598511/pexels-photo-1598511.jpeg', hex: '#000000' },
      { name: 'White', image: 'https://images.pexels.com/photos/1598511/pexels-photo-1598511.jpeg', hex: '#FFFFFF' },
      { name: 'Red', image: 'https://images.pexels.com/photos/1598511/pexels-photo-1598511.jpeg', hex: '#FF0000' },
      { name: 'Blue', image: 'https://images.pexels.com/photos/1598511/pexels-photo-1598511.jpeg', hex: '#0066FF' },
      { name: 'Grey', image: 'https://images.pexels.com/photos/1598511/pexels-photo-1598511.jpeg', hex: '#808080' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 25,
    name: 'Puma Clyde Court',
    price: 124.99,
    image: 'https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg',
    colors: [
      { name: 'Black', image: 'https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg', hex: '#000000' },
      { name: 'White', image: 'https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg', hex: '#FFFFFF' },
      { name: 'Red', image: 'https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg', hex: '#FF0000' },
      { name: 'Blue', image: 'https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg', hex: '#0066FF' },
      { name: 'Orange', image: 'https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg', hex: '#FF6600' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 26,
    name: 'Nike Air Presto',
    price: 134.99,
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg',
    colors: [
      { name: 'Black', image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg', hex: '#000000' },
      { name: 'White', image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg', hex: '#808080' },
      { name: 'Navy', image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg', hex: '#001F3F' },
      { name: 'Red', image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg', hex: '#FF0000' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 27,
    name: 'Adidas Gazelle',
    price: 89.99,
    image: 'IMAGES/IMG_0986.JPG',
    colors: [
      { name: 'Blue', image: 'IMAGES/IMG_0985.JPG', hex: '#0066FF' },
      { name: 'Black', image: 'IMAGES/IMG_0986.JPG', hex: '#000000' },
      { name: 'Red', image: 'IMAGES/IMG_0984.JPG', hex: '#FF0000' },
      { name: 'White', image: 'IMAGES/IMG_0980.JPG', hex: '#ffffffe2' },
      
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 28,
    name: 'New Balance 327',
    price: 99.99,
    image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg',
    colors: [
      { name: 'Grey', image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg', hex: '#808080' },
      { name: 'White', image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg', hex: '#FFFFFF' },
      { name: 'Black', image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg', hex: '#000000' },
      { name: 'Navy', image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg', hex: '#001F3F' },
      { name: 'Burgundy', image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg', hex: '#800020' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 29,
    name: 'Nike SB Dunk High',
    price: 129.99,
    image: 'https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg',
    colors: [
      { name: 'Black', image: 'https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg', hex: '#000000' },
      { name: 'White', image: 'https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg', hex: '#FFFFFF' },
      { name: 'Blue', image: 'https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg', hex: '#0066FF' },
      { name: 'Red', image: 'https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg', hex: '#FF0000' },
      { name: 'Purple', image: 'https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg', hex: '#AA00AA' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 30,
    name: 'Reebok Club C',
    price: 74.99,
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg',
    colors: [
      { name: 'White', image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg', hex: '#FFFFFF' },
      { name: 'Black', image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg', hex: '#000000' },
      { name: 'Green', image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg', hex: '#00AA00' },
      { name: 'Navy', image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg', hex: '#001F3F' },
      { name: 'Red', image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg', hex: '#FF0000' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  }
];
let cart = JSON.parse(localStorage.getItem('soleTheoryCart') || '[]');

function renderProducts() {
  const productsGrid = document.getElementById('productsGrid');

  products.forEach((product, index) => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.style.animationDelay = `${index * 0.1}s`;

    productCard.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">R ${product.price.toFixed(2)}</p>
        <button class="add-to-cart" data-id="${product.id}">ADD TO CART</button>
      </div>
    `;

    productsGrid.appendChild(productCard);
  });

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = parseInt(e.target.dataset.id);
      showProductDetail(productId);
    });
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
  showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  localStorage.setItem('soleTheoryCart', JSON.stringify(cart));

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    cartTotal.textContent = 'R 0.00';
    return;
  }

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <div class="cart-item-image"></div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">R ${item.price.toFixed(2)} x ${item.quantity}</div>
      </div>
      <button class="cart-item-remove" data-id="${item.id}">Remove</button>
    `;

    cartItems.appendChild(cartItem);
  });

  cartTotal.textContent = `R ${total.toFixed(2)}`;

  document.querySelectorAll('.cart-item-remove').forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = parseInt(e.target.dataset.id);
      removeFromCart(productId);
    });
  });
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: #ff0000;
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    z-index: 3000;
    animation: slideInRight 0.3s ease-out;
    box-shadow: 0 10px 30px rgba(255, 0, 0, 0.5);
  `;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartClose = document.getElementById('cartClose');
const cartOverlay = document.getElementById('cartOverlay');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchResultsPanel = document.getElementById('searchResultsPanel');
const searchResultsOverlay = document.getElementById('searchResultsOverlay');
const searchClose = document.getElementById('searchClose');
const searchResultsContent = document.getElementById('searchResultsContent');

mobileMenuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  mobileMenuBtn.classList.toggle('active');
});

cartBtn.addEventListener('click', () => {
  cartSidebar.classList.add('active');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
});

cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

function closeCart() {
  cartSidebar.classList.remove('active');
  cartOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function performSearch(query) {
  if (!query || query.trim() === '') {
    searchResultsContent.innerHTML = '<p class="no-results">Start typing to search...</p>';
    return;
  }

  const searchQuery = query.toLowerCase().trim();
  const results = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery) ||
    product.price.toString().includes(searchQuery)
  );

  if (results.length === 0) {
    searchResultsContent.innerHTML = '<p class="no-results">No products found</p>';
    return;
  }

  searchResultsContent.innerHTML = results.map(product => `
    <div class="search-result-item" data-id="${product.id}">
      <div class="search-result-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="search-result-info">
        <h4>${product.name}</h4>
        <p class="search-result-price">$${product.price.toFixed(2)}</p>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.search-result-item').forEach(item => {
    item.addEventListener('click', () => {
      const productId = parseInt(item.dataset.id);
      closeSearch();
      showProductDetail(productId);
    });
  });
}

function openSearch() {
  searchResultsPanel.classList.add('active');
  searchResultsOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  searchInput.focus();
}

function closeSearch() {
  searchResultsPanel.classList.remove('active');
  searchResultsOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
  searchInput.value = '';
  searchResultsContent.innerHTML = '<p class="no-results">Start typing to search...</p>';
}

searchInput.addEventListener('input', (e) => {
  performSearch(e.target.value);
  if (!searchResultsPanel.classList.contains('active')) {
    openSearch();
  }
});

searchInput.addEventListener('focus', () => {
  openSearch();
});

searchBtn.addEventListener('click', () => {
  openSearch();
});

searchClose.addEventListener('click', closeSearch);
searchResultsOverlay.addEventListener('click', closeSearch);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && searchResultsPanel.classList.contains('active')) {
    closeSearch();
  }
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  showNotification('Message sent! We\'ll get back to you soon.');
  contactForm.reset();
});

const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  showNotification('Thanks for subscribing!');
  newsletterForm.reset();
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

function showProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  updateSearchBarVisibility();

  const mainContent = document.querySelector('main');
  mainContent.innerHTML = `
    <div class="product-detail-page">
      <button class="back-btn" onclick="location.reload()">
        <span>&larr;</span> BACK TO SHOP
      </button>

      <div class="product-detail-container">
        <div class="product-detail-image">
          <img id="productDetailImg" src="${product.image}" alt="${product.name}">
        </div>

        <div class="product-detail-info">
          <h1>${product.name}</h1>
          <p class="product-detail-price">$${product.price.toFixed(2)}</p>

          <div class="color-selector">
            <h3>Select Color</h3>
            <div class="color-options" id="colorOptions">
              ${product.colors.map((color, index) => `
                <button class="color-btn ${index === 0 ? 'active' : ''}"
                        data-image="${color.image}"
                        data-color="${color.name}"
                        style="background: ${color.hex};"
                        title="${color.name}">
                </button>
              `).join('')}
            </div>
            <p class="selected-color" id="selectedColor">${product.colors[0].name}</p>
          </div>

          <div class="size-selector">
            <h3>Select Size</h3>
            <div class="size-options" id="sizeOptions">
              ${product.sizes.map(size => `
                <button class="size-btn" data-size="${size}">${size}</button>
              `).join('')}
            </div>
          </div>

          <button class="checkout-detail-btn" id="checkoutDetailBtn">CHECKOUT</button>
        </div>
      </div>
    </div>
  `;

  let selectedColor = product.colors[0].name;
  let selectedSize = null;

  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      document.getElementById('productDetailImg').src = e.target.dataset.image;
      selectedColor = e.target.dataset.color;
      document.getElementById('selectedColor').textContent = selectedColor;
    });
  });

  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      selectedSize = e.target.dataset.size;
    });
  });

  document.getElementById('checkoutDetailBtn').addEventListener('click', () => {
    if (!selectedSize) {
      showNotification('Please select a size');
      return;
    }
    addToCart(productId);
    showNotification(`${product.name} (${selectedColor}, ${selectedSize}) added to cart!`);
  });
}

function setupClothingLinks() {
  const clothingItems = document.querySelectorAll('.clothing-item');
  clothingItems.forEach((item, index) => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      const categories = ['hoodies', 'tees', 'joggers', 'jackets'];
      showClothingCategory(categories[index]);
    });
  });
}

function updateSearchBarVisibility() {
  const searchContainer = document.querySelector('.search-container');
  const cartBtn = document.querySelector('.cart-btn');
  if (searchContainer) searchContainer.style.display = 'flex';
  if (cartBtn) cartBtn.style.display = 'flex';
}

function showClothingCategory(category) {
  const categoryTitles = {
    hoodies: 'Premium Hoodies',
    tees: 'Graphic Tees',
    joggers: 'Tech Joggers',
    jackets: 'Bomber Jackets'
  };

  updateSearchBarVisibility();

  const mainContent = document.querySelector('main');
  mainContent.innerHTML = `
    <div class="clothing-category-page">
      <button class="back-btn" onclick="location.reload()">
        <span>&larr;</span> BACK TO SHOP
      </button>

      <div class="section-header">
        <h2>${categoryTitles[category].toUpperCase()}</h2>
        <p>Explore our collection of premium ${category}</p>
      </div>

      <div class="products-grid">
        ${Array.from({length: 24}, (_, i) => `
          <div class="product-card placeholder-card">
            <div class="product-image placeholder-image">
              <div class="placeholder-text">Product ${i + 1}</div>
            </div>
            <div class="product-info">
              <h3 class="product-name">${categoryTitles[category]} ${i + 1}</h3>
              <p class="product-price">$${(49.99 + Math.random() * 100).toFixed(2)}</p>
              <button class="add-to-cart" disabled>COMING SOON</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCart();
  setupClothingLinks();

  const checkoutBtn = document.querySelector('.checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Your cart is empty. Add some items before checking out!');
        return;
      }
      window.location.href = '/checkout.html';
    });
  }

  document.querySelectorAll('.product-card, .clothing-item, .value-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

