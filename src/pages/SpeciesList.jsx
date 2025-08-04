import React from "react";

const species = [
  {
    id: 1,
    name: "Specie",
    description:
      "Description Lorem ipsum dolor sit amet. Et corporis adipisci sed tempore modi ad minima quae qui quia illum.",
  },
  {
    id: 2,
    name: "Specie",
    description:
      "Description Lorem ipsum dolor sit amet. Et corporis adipisci sed tempore modi ad minima quae qui quia illum.",
  },
  {
    id: 3,
    name: "Specie",
    description:
      "Description Lorem ipsum dolor sit amet. Et corporis adipisci sed tempore modi ad minima quae qui quia illum.",
  },
  {
    id: 4,
    name: "Specie",
    description:
      "Description Lorem ipsum dolor sit amet. Et corporis adipisci sed tempore modi ad minima quae qui quia illum.",
  },
];

export default function SpeciesList() {
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
      <div className="flex flex-col gap-4 w-full max-w-md">
        {species.map((item) => (
          <div
            key={item.id}
            className="flex items-center border border-blue-gray-200 rounded-lg p-4 bg-white"
          >
            <div className="w-16 h-16 bg-blue-gray-100 rounded flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-400"
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
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-blue-gray-700 mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-blue-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
