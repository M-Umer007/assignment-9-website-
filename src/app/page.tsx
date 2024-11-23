export default function Home() {
  
  return (
    <div className="p-4">
      {/* First Row: 2 Cards */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex-1 min-w-[300px] bg-gray-100 border border-gray-300 p-4 rounded-md shadow">
          <h2 className="text-lg font-semibold">Card 1</h2>
          <p className="text-gray-600">Description of Card 1</p>
        </div>
        <div className="flex-1 min-w-[300px] bg-gray-100 border border-gray-300 p-4 rounded-md shadow">
          <h2 className="text-lg font-semibold">Card 2</h2>
          <p className="text-gray-600">Description of Card 2</p>
        </div>
      </div>

      {/* Second Row: 3 Cards */}
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px] bg-gray-100 border border-gray-300 p-4 rounded-md shadow">
          <h2 className="text-lg font-semibold">Card 3</h2>
          <p className="text-gray-600">Description of Card 3</p>
        </div>
        <div className="flex-1 min-w-[200px] bg-gray-100 border border-gray-300 p-4 rounded-md shadow">
          <h2 className="text-lg font-semibold">Card 4</h2>
          <p className="text-gray-600">Description of Card 4</p>
        </div>
        <div className="flex-1 min-w-[200px] bg-gray-100 border border-gray-300 p-4 rounded-md shadow">
          <h2 className="text-lg font-semibold">Card 5</h2>
          <p className="text-gray-600">Description of Card 5</p>
        </div>
      </div>
    </div>
  );
};