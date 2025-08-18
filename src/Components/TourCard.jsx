"use client";
import { motion } from "framer-motion";
import tours from '@/data/tours.json';

export default function TourCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {tours.map((tour, index) => (
        <motion.div
          key={tour.id}
          className="card bg-white shadow-xl rounded-lg overflow-hidden"
          whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(220, 38, 38, 0.4)" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
        >
          {/* Image */}
          <figure>
            <img
              src={tour.image}
              alt={tour.name}
              className="w-full h-48 object-cover"
            />
          </figure>

          {/* Content */}
          <div className="p-4 flex flex-col justify-between h-full">
            {/* Title */}
            <h2 className="text-2xl font-bold text-red-700">{tour.name}</h2>

            {/* Rating & Package */}
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center text-yellow-400">
                {"⭐".repeat(Math.floor(tour.rating))}
                {tour.rating % 1 !== 0 && "✰"}
                <span className="ml-2 text-gray-600 font-medium">
                  {tour.rating.toFixed(1)}
                </span>
              </div>
              <span className="badge badge-sm bg-red-200 text-red-800">
                {tour.package}
              </span>
            </div>

            {/* Cost & Members */}
            <p className="mt-2 text-gray-700 font-semibold">
              Cost: BDT {tour.cost} ({tour.members}{" "}
              {tour.members > 1 ? "members" : "member"})
            </p>

            {/* Description */}
            <p className="mt-2 text-gray-600 text-sm line-clamp-3">
              {tour.description}
            </p>

            {/* Route */}
            <p className="mt-1 text-gray-400 text-xs">Route: {tour.route}</p>

            {/* Button */}
            <div className="mt-4">
              <button className="btn btn-sm btn-outline btn-error w-full hover:bg-red-700 hover:text-white transition">
                View Details
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
