import React from "react";

export default function HomeMap() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white p-4">
      <nav className="flex gap-2 w-full max-w-md mt-4 mb-8">
        <button className="flex-1 bg-gray-200 text-gray-400 font-semibold py-2 rounded">
          MySerpente
        </button>
        <button className="flex-1 bg-white text-blue-700 font-semibold py-2 rounded border border-blue-700">
          Espécies
        </button>
        <button className="flex-1 bg-white text-blue-700 font-semibold py-2 rounded border border-blue-700">
          Legalização
        </button>
      </nav>
      <div className="flex flex-col items-center justify-center flex-1 w-full">
        <h2 className="text-xl font-semibold mb-6 text-blue-gray-700">
          Mapa espécie por área
        </h2>
        <div className="w-64 h-40 bg-blue-gray-100 rounded-lg flex items-center justify-center">
          {/* Aqui pode ser inserido um componente de mapa futuramente */}
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="80" height="80" rx="10" fill="#E0E7EF" />
            <path
              d="M20 40L60 40M40 20L40 60"
              stroke="#B0B7C3"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <div className="fixed bottom-8 right-8">
        <button className="bg-gray-200 rounded-full p-3 shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.797.657 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
