import tempo1317Img from '../assets/images/tempo_13_17_ai.jpg';
import tempo25Img from '../assets/images/tempo_25_ai.jpg';
import urbaniaImg from '../assets/images/urbania_ai.jpg';
import ertigaImg from '../assets/images/ertiga_ai.jpg';
import brezzaImg from '../assets/images/vitara_brezza_ai.jpg';
import dzireImg from '../assets/images/swift_dzire_ai.jpg';

export const VEHICLES = [
  {
    id: 'dzire',
    name: 'Swift Dzire',
    category: 'cabs',
    type: 'Sedan',
    seats: 5,
    price: 3500,
    priceLabel: '₹3,500 onwards',
    image: dzireImg,
    badge: 'Best Budget Sedan',
    description: 'Sleek and comfortable 5-seater sedan, perfect for couples, business travelers, and airport drop/pickup between Shillong, Guwahati & outstation destinations.',
    features: ['5 Seater Capacity', 'Spacious Trunk Boot', 'Quiet Interior', 'Automatic AC', 'Clean Seat Covers', 'On-Time Guaranteed'],
    specifications: {
      fuel: 'Petrol',
      transmission: 'Manual',
      luggage: '2 Large Suitcases',
      ac: 'Front & Rear AC'
    }
  },
  {
    id: 'brezza',
    name: 'Vitara Brezza',
    category: 'cabs',
    type: 'Compact SUV',
    seats: 5,
    price: 4000,
    priceLabel: '₹4,000 onwards',
    image: brezzaImg,
    badge: 'Compact Hill SUV',
    description: 'Sturdy 5-seater compact SUV built for rugged hill curves, steep inclines, and swift sightseeing trips around Meghalaya, Assam & Arunachal Pradesh.',
    features: ['5 Seater Capacity', 'High Ground Clearance', 'Chilling Air Conditioning', 'Comfortable Suspension', 'Sound System', 'Friendly Driver'],
    specifications: {
      fuel: 'Petrol',
      transmission: 'Manual',
      luggage: '2-3 Bags',
      ac: 'Single Zone Climate Control'
    }
  },
  {
    id: 'ertiga',
    name: 'Ertiga',
    category: 'cabs',
    type: 'MUV',
    seats: 7,
    price: 4500,
    priceLabel: '₹4,500 onwards',
    image: ertigaImg,
    badge: 'Family Favorite MUV',
    description: 'Economical yet highly spacious 7-seater MUV, ideal for small families exploring Shillong local points, Guwahati, Kaziranga & outstation routes.',
    features: ['7 Seater Capacity', 'Foldable Rear Seats', 'Roof Mounted AC Vents', 'Fuel Efficient & Smooth', 'Clean Interiors', 'Punctual Pickup Service'],
    specifications: {
      fuel: 'Petrol/CNG',
      transmission: 'Manual',
      luggage: '3 Bags',
      ac: 'Rear AC Vents'
    }
  },
  {
    id: 'tt-13-17',
    name: '13/17 Seater Tempo Traveller',
    category: 'tempo-traveller',
    type: 'Tempo Traveller',
    seats: '13/17',
    price: 7500,
    priceLabel: '₹7,500 onwards',
    image: tempo1317Img,
    badge: 'Popular for Groups',
    description: 'Spacious and comfortable Tempo Traveller for family trips, tour groups and hill excursions around Meghalaya, Assam & Arunachal Pradesh.',
    features: ['Reclining Seats', 'Powerful AC / Blower', 'Ample Boot Space', 'High Roof Standing Comfort', 'Bluetooth Music System', 'Hill-Trained Driver'],
    specifications: {
      fuel: 'Diesel',
      transmission: 'Manual',
      luggage: '4-8 Bags',
      ac: 'Roof Mounted AC'
    }
  },
  {
    id: 'tt-25',
    name: '25 Seater Tempo Traveller',
    category: 'tempo-traveller',
    type: 'Tempo Traveller',
    seats: 25,
    price: 10000,
    priceLabel: '₹10,000 onwards',
    image: tempo25Img,
    badge: 'Large Event Special',
    description: 'Maximum capacity 25-seater Tempo Traveller ideal for large corporate groups, wedding parties, and extended tour delegations across Meghalaya, Assam & Arunachal Pradesh.',
    features: ['25 Comfortable Seats', 'Spacious Interiors', 'High Roof Clearance', 'Heavy Duty Suspension', 'Entertainment System', 'Experienced Mountain Driver'],
    specifications: {
      fuel: 'Diesel',
      transmission: 'Manual',
      luggage: '8+ Large Bags',
      ac: 'Powerful Central AC'
    }
  },
  {
    id: 'urb-12-16',
    name: '12/16 Seater Urbania',
    category: 'urbania',
    type: 'Force Urbania',
    seats: '12/16',
    price: 11000,
    priceLabel: '₹11,000 onwards',
    image: urbaniaImg,
    badge: 'Executive VIP Luxury',
    description: 'Executive Urbania for Shillong and Urbania for Guwahati. Monocoque body safety, individual AC vents, and supreme suspension comfort across Meghalaya, Assam & Arunachal Pradesh.',
    features: ['Plush Reclining Seats', 'Individual AC Vents', 'Super Quiet Cabin', 'Monocoque Safety Body', 'Individual USB Chargers', 'Panoramic Wide Windows'],
    specifications: {
      fuel: 'Diesel',
      transmission: 'Manual 6-Speed',
      luggage: '5-9 Bags',
      ac: 'Climate Control Individual Vents'
    }
  }
];

export const SERVICES = [
  {
    id: 'service-tempo',
    title: 'Tempo Traveller Rental',
    subtitle: '13, 17 & 25 Seater Options',
    description: 'Looking for a Tempo Traveller for Shillong or Tempo Traveller for Guwahati? We offer top-rated Tempo Traveller and Urbania Rental for Shillong & Guwahati for family trips, tour groups, Cherrapunji, Dawki, Kaziranga & outstation travel.',
    image: tempo1317Img,
    startingPrice: '₹7,500 / day onwards',
    highlights: [
      'High Roof Standing Comfort',
      'Pushback Reclining Seats',
      'Huge Luggage Capacity',
      'Experienced Hill Road Driver'
    ]
  },
  {
    id: 'service-urbania',
    title: 'Force Urbania Rental',
    subtitle: '12 & 16 Seater Luxury Vans',
    description: 'Executive Urbania for Shillong and Urbania for Guwahati rentals. Next-generation VIP group travel for corporate delegations, weddings, and executive Meghalaya, Assam & Arunachal Pradesh tour packages.',
    image: urbaniaImg,
    startingPrice: '₹11,000 / day onwards',
    highlights: [
      'Monocoque Ultra-Quiet Body',
      'Individual Air Vents & USB Ports',
      'Panoramic Scenic Windows',
      'Plush Soft Leatherette Seating'
    ]
  },
  {
    id: 'service-cab',
    title: 'Cab Rental Services',
    subtitle: 'Ertiga, Brezza & Dzire',
    description: 'Reliable local sightseeing and outstation cab services across Meghalaya, Assam & Arunachal Pradesh with courteous, experienced local drivers.',
    image: dzireImg,
    startingPrice: '₹3,500 / day onwards',
    highlights: [
      'Local Shillong & Guwahati Airport Drop',
      'Flexible Half-Day & Full-Day Packages',
      'Well-Maintained Clean Vehicles',
      'Fixed Transparent Pricing'
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Well-Maintained Vehicles',
    description: 'Regularly serviced, sanitized, and mechanically inspected vehicles ensuring maximum safety on mountain terrains.'
  },
  {
    title: 'Professional Drivers',
    description: 'Courteous, punctual, and expert drivers with deep knowledge of Meghalaya, Assam & Arunachal Pradesh mountain routes and tourist safety.'
  },
  {
    title: 'Comfortable Travel',
    description: 'Spacious legroom, pushback reclining seats, high-performance AC, and smooth suspension for long journeys.'
  },
  {
    title: 'On-Time Pickup & Drop',
    description: 'Strict punctuality guaranteed for Shillong local points, Guwahati Airport, Kaziranga & outstation drops.'
  },
  {
    title: 'Affordable Pricing',
    description: 'Transparent rates starting from ₹3,500 with zero hidden charges or unexpected surprise fees.'
  },
  {
    title: '24/7 Customer Support',
    description: 'Dedicated trip assistance before, during, and after your journey across Meghalaya, Assam & Arunachal Pradesh.'
  }
];

export const MEGHALAYA_DESTINATIONS = [
  {
    name: 'Cherrapunji (Sohra)',
    tagline: 'Waterfalls & Living Root Bridges',
    distance: '54 km from Shillong',
    description: 'Explore Nohkalikai Falls, Seven Sisters Falls, Mawsmai Cave, and majestic living root bridges in comfort.',
    recommendedVehicle: 'Tempo Traveller / Urbania'
  },
  {
    name: 'Dawki & Umngot River',
    tagline: 'Crystal Clear Boating Paradise',
    distance: '82 km from Shillong',
    description: 'Glide over transparent waters at Dawki near the Indo-Bangladesh border and visit Bangladesh viewpoint.',
    recommendedVehicle: 'Force Urbania / Ertiga'
  },
  {
    name: 'Kaziranga & Assam Circuit',
    tagline: 'Wildlife & Tea Garden Trails',
    distance: '240 km from Shillong',
    description: 'Experience rhino safaris in Kaziranga National Park and lush tea gardens across Assam.',
    recommendedVehicle: 'Force Urbania / Tempo Traveller'
  },
  {
    name: 'Tawang & Arunachal Circuit',
    tagline: 'Monasteries & Snowy Passes',
    distance: 'Outstation Expedition',
    description: 'Journey to Sela Pass, Tawang Monastery, and scenic alpine valleys in Arunachal Pradesh.',
    recommendedVehicle: 'Tempo Traveller / Force Urbania'
  }
];

export const BUSINESS_INFO = {
  name: 'Tempo Traveller and Urbania Co.',
  tagline: 'Your Journey, Our Priority',
  email: 'tempotravellerandurbania@gmail.com',
  phone: '+91 6909326969',
  phoneFormatted: '+91 69093 26969',
  whatsappNumber: '916909326969',
  address: 'Police Bazar, Jail Road, Opp. Hotel COURTYARD by Marriott, Shillong, Meghalaya – 793001',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.675685824985!2d91.88371517596078!3d25.577457777467794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37507ea293c0429f%3A0xb5bfaaa1f52d9a3a!2sHotel%20Courtyard%20by%20Marriott%20Shillong!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
};
