"use client";
import { motion } from "framer-motion";
import Link from "next/link";
// import tours from '@/data/tours.json';

export default function TourCard() {
  const tours = [
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

  return (
    <div className="my-5">
          <h1 className="text-2xl text-center">Next Plan your trip</h1>
    
   
  <div className=" min-h-screen flex items-center justify-center px-6 py-16"
      style={{
        backgroundImage:
          "url('/asscets/a5 - Copy.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      
      {tours.map((tour, index) => (
        <motion.div
          key={tour.id}
          className="card bg-white shadow-xl rounded-lg overflow-hidden"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 15px 25px rgba(220, 38, 38, 0.4)",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
        >
          <figure>
            <img
              src={tour.image}
              alt={tour.name}
              className="w-full h-48 object-cover"
            />
          </figure>

         <div className="p-4 flex flex-col justify-between min-h-[250px]">
  <h2 className="text-2xl font-bold text-red-700">{tour.name}</h2>

  <div className="flex items-center justify-between mt-2">
    <div className="flex items-center text-yellow-400">
      {"⭐".repeat(Math.floor(tour.rating))}
      {tour.rating % 1 !== 0 && "✰"}
      <span className="ml-2 text-gray-600 font-medium">
        {tour.rating.toFixed(1)}
      </span>
    </div>
    <span className="rounded-3xl p-2 badge badge-sm bg-red-200 text-red-800">
      {tour.package}
    </span>
  </div>

 <div className="mt-auto pt-4">
                <Link href={`/tour/${tour.id}`}>
                  <button className="btn btn-sm btn-outline btn-error w-full hover:bg-red-700 hover:text-white transition">
                    View Details
                  </button>
                </Link>
              </div>
</div>

        </motion.div>
      ))}
    </div>
  </div>
   </div>
  );
}






    
        
 