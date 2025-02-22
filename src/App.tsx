import React, { useState } from 'react';
import { Search, MapPin, ChevronDown, Star, Clock3, Bike } from 'lucide-react';

function App() {
  const [location, setLocation] = useState('New York');

  const popularRestaurants = [
    {
      id: 1,
      name: "Pete's Fresh Pizza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
      rating: 4.5,
      cuisine: "Pizza, Italian",
      price: "$$",
      deliveryTime: "25-30",
    },
    {
      id: 2,
      name: "Sushi Master",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80",
      rating: 4.8,
      cuisine: "Japanese, Sushi",
      price: "$$$",
      deliveryTime: "35-40",
    },
    {
      id: 3,
      name: "Burger House",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
      rating: 4.3,
      cuisine: "American, Burgers",
      price: "$$",
      deliveryTime: "20-25",
    },
  ];

  const categories = [
    {
      name: "Pizza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Sushi",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Burgers",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Indian",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="h-[500px] bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
          url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="container mx-auto px-4">
          {/* Navigation */}
          <nav className="flex justify-between items-center py-4">
            <div className="text-white text-2xl font-bold">Zomato</div>
            <div className="space-x-6">
              <button className="text-white hover:text-gray-200">Log in</button>
              <button className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-100">Sign up</button>
            </div>
          </nav>

          {/* Search Section */}
          <div className="max-w-4xl mx-auto mt-32 text-center">
            <h1 className="text-white text-5xl font-bold mb-8">
              Discover the best food & drinks
            </h1>
            <div className="flex bg-white rounded-lg overflow-hidden">
              <div className="flex items-center px-4 border-r border-gray-300">
                <MapPin className="text-red-500 w-5 h-5" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="p-3 outline-none"
                  placeholder="Location"
                />
                <ChevronDown className="text-gray-500 w-5 h-5" />
              </div>
              <div className="flex-1 flex items-center px-4">
                <Search className="text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  className="w-full p-3 outline-none"
                  placeholder="Search for restaurant, cuisine or a dish"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Quick Searches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Restaurants Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Popular Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={restaurant.image} alt={restaurant.name} className="w-full h-64 object-cover" />
                <div className="absolute bottom-4 left-4 bg-white px-2 py-1 rounded text-sm font-semibold">
                  {restaurant.price}
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{restaurant.name}</h3>
                  <div className="flex items-center bg-green-600 text-white px-2 py-1 rounded">
                    <span>{restaurant.rating}</span>
                    <Star className="w-4 h-4 ml-1" />
                  </div>
                </div>
                <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock3 className="w-4 h-4 mr-1" />
                  <span>{restaurant.deliveryTime} mins</span>
                  <Bike className="w-4 h-4 ml-4 mr-1" />
                  <span>Free delivery</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Zomato</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Who We Are</a></li>
                <li><a href="#" className="hover:text-gray-300">Blog</a></li>
                <li><a href="#" className="hover:text-gray-300">Work With Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">For Restaurants</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Partner With Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Apps For You</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Learn More</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-300">Security</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms</a></li>
                <li><a href="#" className="hover:text-gray-300">Sitemap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Social Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
                <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
                <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
                <li><a href="#" className="hover:text-gray-300">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Zomato Clone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;