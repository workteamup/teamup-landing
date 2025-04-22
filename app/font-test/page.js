export default function FontTestPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-4xl mb-8">Poppins Font Weight Test</h1>
      
      <div className="space-y-6">
        {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight) => (
          <div key={weight}>
            <p className={`font-poppins font-${getWeightClass(weight)} text-2xl`}>
              Weight {weight}: The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Class: font-{getWeightClass(weight)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function getWeightClass(weight) {
  const weightMap = {
    100: 'thin',
    200: 'extralight',
    300: 'light',
    400: 'normal',
    500: 'medium',
    600: 'semibold',
    700: 'bold',
    800: 'extrabold',
    900: 'black'
  };
  return weightMap[weight];
} 