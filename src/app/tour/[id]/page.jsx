"use client";


const tours=[
  {
    "id": 1,
    "image": "https://i.ibb.co.com/5W7PZXW5/sainmartin.jpg",
    "name": "Saint Martin's Island",
    "rating": 4.8,
    "package": "2 Days 1 Night",
    "cost": 8000,
    "members": 2,
    "description": "A small beautiful island in the northeast of the Bay of Bengal known for its coral reefs and serene beaches.",
    "route": "Dhaka → Cox's Bazar → Teknaf → Saint Martin's Island",
    "famousFor": "Coral reefs, crystal-clear blue water, and coconut tree landscapes.",
    "extraDescription": "The only coral island in Bangladesh, locally called 'Narikel Jinjira'. Famous for its stargazing, calm beaches, and marine life.",
    "famousHotels": ["Blue Marine Resort", "Coral Reef Resort", "Dream Night Resort"],
    "bestTimeToVisit": "November to March",
    "activities": ["Snorkeling", "Scuba diving", "Cycling", "Sunrise & Sunset watching"],
    "foodSpecialties": ["Fresh seafood (lobster, crab, fish)", "Coconut water"],
    "travelTips": "Avoid monsoon season; carry cash as ATMs are not available."
  },
  {
    "id": 2,
    "image": "https://i.ibb.co.com/Gvb0CNXW/sunderban.jpg",
    "name": "Sundarbans",
    "rating": 4.7,
    "package": "3 Days 2 Nights",
    "cost": 12000,
    "members": 4,
    "description": "The largest mangrove forest in the world, home to the Royal Bengal Tiger and diverse wildlife.",
    "route": "Dhaka → Khulna → Sundarbans",
    "famousFor": "Royal Bengal Tigers, mangrove forests, and wildlife biodiversity.",
    "extraDescription": "A UNESCO World Heritage Site covering 10,000 sq km, Sundarbans is famous for tigers, deer, crocodiles, and unique mangrove ecology.",
    "famousHotels": ["Tiger Garden International Hotel (Khulna)", "Hotel Royal International", "Sundarban Eco Resort"],
    "bestTimeToVisit": "October to March",
    "activities": ["Boat safaris", "Wildlife photography", "Bird watching", "Forest exploration"],
    "foodSpecialties": ["Freshwater fish curry", "Local shrimp dishes"],
    "travelTips": "Hire an experienced guide; insect repellent is essential."
  },
  {
    "id": 3,
    "image": "https://i.ibb.co.com/xKbW9rcd/Sajek-Valley-2.jpg",
    "name": "Sajek Valley",
    "rating": 4.9,
    "package": "2 Days 1 Night",
    "cost": 9500,
    "members": 2,
    "description": "A picturesque valley in the Chittagong Hill Tracts, famous for its hills, rivers, and scenic sunset views.",
    "route": "Dhaka → Khagrachhari → Sajek Valley",
    "famousFor": "Hilltop views above the clouds and tribal lifestyle.",
    "extraDescription": "Known as the 'Queen of Hills', Sajek offers stunning cloud valleys, indigenous culture, and colorful tribal markets.",
    "famousHotels": ["Meghpunji Resort", "Sajek Resort", "Runmoy Resort"],
    "bestTimeToVisit": "September to February",
    "activities": ["Jeep rides", "Hill trekking", "Tribal cultural experience", "Photography"],
    "foodSpecialties": ["Hill chicken BBQ", "Bamboo chicken", "Local fruits"],
    "travelTips": "Internet is limited; book resorts in advance."
  },
  {
    "id": 4,
    "image": "https://i.ibb.co.com/BKLwptKf/cosx-bazzar.jpg",
    "name": "Cox's Bazar",
    "rating": 4.6,
    "package": "2 Days 1 Night",
    "cost": 7000,
    "members": 2,
    "description": "World's longest natural sandy sea beach stretching along the Bay of Bengal.",
    "route": "Dhaka → Chittagong → Cox's Bazar",
    "famousFor": "Longest sandy sea beach in the world (120 km).",
    "extraDescription": "One of Bangladesh's most famous tourist destinations with sea waves, marine drive, and luxury hotels.",
    "famousHotels": ["Sayeman Beach Resort", "Long Beach Hotel", "Hotel Sea Crown"],
    "bestTimeToVisit": "November to March",
    "activities": ["Beach walking", "Surfing", "Paragliding", "Seafood dining"],
    "foodSpecialties": ["Dry fish (Shutki)", "Seafood platters"],
    "travelTips": "Avoid peak season for cheaper rates."
  },
  {
    "id": 5,
    "image": "https://i.ibb.co.com/jkqGtsTn/sre-mangalo.jpg",
    "name": "Srimangal",
    "rating": 4.5,
    "package": "1 Day Trip",
    "cost": 3000,
    "members": 1,
    "description": "The tea capital of Bangladesh, known for its lush green tea gardens and the famous Seven Color Tea.",
    "route": "Dhaka → Sylhet → Srimangal",
    "famousFor": "Tea gardens and Seven Layer Tea.",
    "extraDescription": "Srimangal is called the 'Land of Two Leaves and a Bud'. It has hundreds of tea estates, hills, and the Lawachara rainforest.",
    "famousHotels": ["Grand Sultan Tea Resort", "DuSai Resort & Spa", "Hotel Skypark"],
    "bestTimeToVisit": "October to March",
    "activities": ["Tea garden tours", "Rainforest trekking", "Cycling"],
    "foodSpecialties": ["Seven Layer Tea", "Tribal rice cakes"],
    "travelTips": "Hire a local guide for tribal village visits."
  },
  {
    "id": 6,
    "image": "https://i.ibb.co.com/LhzYhy2v/rangamati.jpg",
    "name": "Rangamati",
    "rating": 4.7,
    "package": "2 Days 1 Night",
    "cost": 8500,
    "members": 2,
    "description": "A scenic district in Chittagong Hill Tracts famous for Kaptai Lake, hanging bridge, and tribal culture.",
    "route": "Dhaka → Chittagong → Rangamati",
    "famousFor": "Kaptai Lake and tribal handicrafts.",
    "extraDescription": "Known as the 'Lake City', Rangamati offers boat rides, tribal lifestyles, and Buddhist temples.",
    "famousHotels": ["Parjatan Motel", "Lake View Island Resort", "Green Castle Resort"],
    "bestTimeToVisit": "September to February",
    "activities": ["Boat rides on Kaptai Lake", "Hill trekking", "Shopping tribal crafts"],
    "foodSpecialties": ["Hill chicken", "Bamboo shoot curry"],
    "travelTips": "Respect local tribal traditions when visiting."
  },
  {
    "id": 7,
    "image": "https://i.ibb.co.com/N6zkNH4J/kuakata.jpg",
    "name": "Kuakata",
    "rating": 4.6,
    "package": "2 Days 1 Night",
    "cost": 6000,
    "members": 2,
    "description": "A unique sea beach where both sunrise and sunset can be viewed from the same spot.",
    "route": "Dhaka → Barisal → Kuakata",
    "famousFor": "Panoramic sunrise & sunset views.",
    "extraDescription": "Called the 'Daughter of the Sea', Kuakata is also a place for Hindu and Buddhist pilgrimages.",
    "famousHotels": ["Kuakata Grand Hotel", "Hotel Graver Inn", "Kuakata Guest House"],
    "bestTimeToVisit": "October to March",
    "activities": ["Beach walking", "Fishing village visits", "Photography"],
    "foodSpecialties": ["Hilsa fish curry", "Dry fish"],
    "travelTips": "The beach is less crowded than Cox’s Bazar, great for peace seekers."
  },
  {
    "id": 8,
    "image": "https://i.ibb.co.com/ZzsTPCrR/jaflong.jpg",
    "name": "Jaflong",
    "rating": 4.5,
    "package": "1 Day Trip",
    "cost": 3500,
    "members": 1,
    "description": "A popular tourist spot on the Bangladesh–India border with stunning stone collection spots and hills.",
    "route": "Dhaka → Sylhet → Jaflong",
    "famousFor": "Stone collection and views of Meghalaya hills.",
    "extraDescription": "Located on the India-Bangladesh border, Jaflong is also home to Khasi tribal villages.",
    "famousHotels": ["Hotel Valley Garden (Sylhet)", "La Rose Hotel", "Nazimgarh Resort"],
    "bestTimeToVisit": "October to March",
    "activities": ["Boat rides", "Stone collection site visits", "Tribal village exploration"],
    "foodSpecialties": ["Pitha (rice cakes)", "Sylheti fish dishes"],
    "travelTips": "Carry light clothes for sunny weather."
  },
  {
    "id": 9,
    "image": "https://i.ibb.co.com/Tq2HNhj1/lal-bag.jpg",
    "name": "Lalbagh Fort",
    "rating": 4.4,
    "package": "Half Day Trip",
    "cost": 1500,
    "members": 1,
    "description": "A 17th-century Mughal fort complex in Dhaka featuring beautiful gardens and historical architecture.",
    "route": "Dhaka → Lalbagh Fort",
    "famousFor": "Mughal architecture and historical importance.",
    "extraDescription": "Built in 1678, the fort has a mosque, tomb, and palace, showcasing Mughal art and history.",
    "famousHotels": ["Pan Pacific Sonargaon", "Hotel InterContinental Dhaka"],
    "bestTimeToVisit": "November to February",
    "activities": ["Exploring gardens", "Historical sightseeing", "Photography"],
    "foodSpecialties": ["Dhakaiya Biryani", "Bakarkhani"],
    "travelTips": "Best visited in the morning to avoid crowds."
  },
  {
    "id": 10,
    "image": "https://i.ibb.co.com/yn9ccgbB/jhorna.jpg",
    "name": "Kuinari Waterfalls",
    "rating": 4.6,
    "package": "1 Day Trip",
    "cost": 4000,
    "members": 2,
    "description": "A hidden gem in Bangladesh offering a peaceful waterfall experience surrounded by lush greenery.",
    "route": "Dhaka → Chittagong → Kuinari Waterfalls",
    "famousFor": "Waterfalls and natural forest environment.",
    "extraDescription": "A relatively unexplored waterfall spot with fresh mountain water and lush forest trails.",
    "famousHotels": ["Hotel Orchid (Chittagong)", "Well Park Residence", "Forest Resort"],
    "bestTimeToVisit": "June to September (monsoon season)",
    "activities": ["Hiking", "Swimming under waterfalls", "Photography"],
    "foodSpecialties": ["Local tribal food", "Fresh fruits"],
    "travelTips": "Wear non-slippery shoes; carry water and dry clothes."
  }
]


export default function TourDetails({ params }) {
  const tour = tours.find((t) => t.id === Number(params.id));

  if (!tour) {
    return (
      <h1 className="text-center text-red-600 text-xl font-bold mt-10">
        ❌ Tour not found!
      </h1>
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <img src={tour.image} alt={tour.name} className="w-full h-72 object-cover" />
        <div className="p-6 md:p-10 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h1 className="text-3xl md:text-4xl font-bold text-red-700">{tour.name}</h1>
            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
              ⭐ {tour.rating}
            </span>
          </div>
          <p className="text-gray-600 leading-relaxed">{tour.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div className="space-y-2">
              <p><strong>📦 Package:</strong> {tour.package}</p>
              <p><strong>💰 Cost:</strong> {tour.cost} BDT</p>
              <p><strong>👥 Members:</strong> {tour.members}</p>
              <p><strong>🛣️ Route:</strong> {tour.route}</p>
            </div>
            <div className="space-y-2">
              <p><strong>🏞️ Famous For:</strong> {tour.famousFor}</p>
              <p><strong>🕒 Best Time:</strong> {tour.bestTimeToVisit}</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">🎯 Activities</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {tour.activities.map((act, i) => (
                <li key={i}>{act}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">🍽️ Food Specialties</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {tour.foodSpecialties.map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">🏨 Famous Hotels</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {tour.famousHotels.map((hotel, i) => (
                <li key={i}>{hotel}</li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-400">
            <h2 className="text-lg font-semibold mb-2">💡 Travel Tips</h2>
            <p className="text-gray-600">{tour.travelTips}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
