
export interface Product {
  image:string[];
  name: string;
  rating: number;
  description: string;
  reference:string;
  i:number;
}

export const products:Product[] = [
  {
    image:['../assets/images/air13.png', "../assets/images/air13(1).png", '../assets/images/air13(3).png'],
    name:'MacBook Air 13" Apple M1',
    rating:4.9,
    description:"Apple's thinnest and lightest laptop has been completely transformed with the advent of the Apple M1 chip. The CPU is now up to 3.5 times faster. Graphic — up to 5 times. And thanks to Apple's advanced Neural Engine system, the speed of machine learning has increased up to 9 times. The new MacBook Air runs longer on a single charge than previous models.",
    reference:"https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=511010000&sr=1&qid=dca2d2a8acf4f7b2e03e984fb7fde2bd&ref=shared_link",
    i:0
  },
  {
    image:['../assets/images/air136(1).png', '../assets/images/air136(2).png', '../assets/images/air136(3).png'],
    name:'MacBook Air 13.6" Apple M2',
    rating: 4.8,
    description: 'The new generation MacBook Air based on the M2 chip is characterized by incredible speed and energy efficiency, and its surprisingly thin body is made entirely of aluminum. This is a super portable and heavy—duty laptop on which you can work, play or create anything - wherever it is convenient.',
    reference: 'https://kaspi.kz/shop/p/noutbuk-apple-macbook-air-13-6-a2681-m2-chip-8gb-ssd-512gb-midnight-ios-mly43ru-a--111249127/?c=511010000&sr=6&qid=7c10f66393fe1d5cffd117bfb2e6b512&ref=shared_link',
    i:0
  },
  {
    image:['../assets/images/air153(1).png', '../assets/images/air153(2).png', '../assets/images/air153(3).png'],
    name:'MacBook Air 15.3" Apple M2',
    rating: 4.9,
    description: 'The 15-inch MacBook Air is an excellent choice for connoisseurs of thin and light laptops. It offers a large and high-quality screen, ideal for those who appreciate spacious display and comfort at work. Thanks to the base M2 processor, the laptop provides sufficient performance for most tasks. Visually, the 15-inch model is almost indistinguishable from the already familiar 13-inch version of the MacBook Air with the M2 processor.',
    reference: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2023-mqkw3-sinii-111217728/?c=511010000&sr=2&qid=cf1e8f4ec9b6d72586de343c413e1a40&ref=shared_link',
    i:0
  },
  {
    image:['../assets/images/pro162(1).png', '../assets/images/pro162(2).png', '../assets/images/pro162(3).png'],
    name:'MacBook Pro 16.2" Apple M1 Pro',
    rating: 4.6,
    description: 'The super fast M1 Pro and M1 Max chips deliver phenomenal performance and provide surprisingly long battery life. Add to this the stunning Liquid Retina XBM display and even more ports for professional work. This is the laptop you\'ve been waiting for.',
    reference: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-mk183-seryi-102892102/?c=511010000&sr=1&qid=b936e882798135b0de0b751c32ad4dda&ref=shared_link',
    i:0
  },
  {
    image: ['../assets/images/iphone15pro-1.webp', '../assets/images/iphone15pro-2.jpg', '../assets/images/iphone15pro-3.webp'],
    name:'Apple Iphone 15pro',
    rating: 4.7,
    description: 'The Apple iPhone 15 Pro is a heavy-duty smartphone made of titanium. The device runs on a powerful Apple A17 Pro processor and has advanced professional-level optics.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-chernyi-113138109/?c=750000000',
    i:0
  },
  {
    image: ['../assets/images/iphone15pro-1.webp', '../assets/images/iphone15pro-2.jpg', '../assets/images/iphone15pro-3.webp'],
    name:'Apple Iphone 15pro max',
    rating: 4.9,
    description: 'The Apple iPhone 15 Pro Max is a heavy-duty flagship made of titanium. The latest Apple A17 Pro chip is responsible for the uncompromising performance of the smartphone. The device received an advanced camera system, thoughtful ergonomics, an updated design and a new programmable button.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    i:0
  },
  {
    image: ['../assets/images/iphone14promax-1.png', '../assets/images/iphone14promax-2.jpeg', '../assets/images/iphone14promax-3.jpg'],
    name:'Apple Iphone 14 pro max',
    rating: 4.7,
    description: 'The Apple iPhone 14 ProMax is Apple\'s flagship smartphone, which has impressive technical specifications and stylish design.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000',
    i:0
  },
  {
    image: ['../assets/images/iphone12-1.jpg', '../assets/images/iphone12-2.jpg', '../assets/images/iphone12-3.jpeg'],
    name:'Apple Iphone 12',
    rating: 4.2,
    description: 'Incredibly durable Ceramic Shield front panel. A gorgeous bright OLED display. A powerful chip. And a two-camera system. All this is available in the Apple iPhone 12.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-12-128gb-chernyi-100656960/?c=750000000',
    i:0
  },
  {
    image: ['../assets/images/iphone13promax-1.jpeg', '../assets/images/iphone13promax-2.jpeg', '../assets/images/iphone13promax-3.jpeg'],
    name:'Apple Iphone 13 pro max',
    rating: 4.5,
    description: 'The Apple iPhone 13 ProMax has received a 6.7-inch Super Retina XDR1 display with an adaptive refresh rate of up to 120 Ghz and ProMotion technology for faster and smoother interaction. Thanks to the Ceramic Shield front panel, the screen is protected from cracks, scratches and other minor damages.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-max-128gb-goluboi-102298789/?c=750000000',
    i:0
  },
  {
    image: ['../assets/images/iphone14plus-1.jpeg', '../assets/images/iphone14plus-2.jpeg', '../assets/images/iphone14plus-3.jpeg'],
    name:'Apple Iphone 14 plus',
    rating: 4.5,
    description: 'The iPhone 14 Plus is very difficult after the basic iPhone 14. It would be possible to limit ourselves to just one phrase: just an enlarged 14th with all the consequences. But it is also impossible not to tell anything at all.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-14-plus-128gb-chernyi-106363170/?c=750000000',
    i:0
  }

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/