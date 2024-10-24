export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "aalmana" );
  }

  if (query.toLowerCase().includes("What is your name?")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "aalmana-313" );
  }

  const arithmeticMatch = query.toLowerCase().match(/what is (\d+) plus (\d+)\?/);
  if (arithmeticMatch) {
    const num1 = parseInt(arithmeticMatch[1]);
    const num2 = parseInt(arithmeticMatch[2]);
    return (num1 + num2).toString();
  }

  // Check for comparison queries (e.g., "Which of the following numbers is the largest: 2, 15, 80?")
  const largestNumberMatch = query.toLowerCase().match(/which of the following numbers is the largest: (.*)\?/);
  if (largestNumberMatch) {
    const numbers = largestNumberMatch[1].split(',').map(num => parseInt(num.trim()));
    const largestNumber = Math.max(...numbers);
    return largestNumber.toString();
  }

  const subtractionMatch = query.toLowerCase().match(/what is (\d+) minus (\d+)\?/);
  if (subtractionMatch) {
    const num1 = parseInt(subtractionMatch[1]);
    const num2 = parseInt(subtractionMatch[2]);
    return (num1 - num2).toString();
  }


  // Function to check if a number is prime
function isPrime(num: number): boolean {
  if (num <= 1) return false; // Primes are greater than 1
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Check for prime number queries (e.g., "Which of the following numbers are primes: 45, 16, 61, 75, 41?")
const primeNumbersMatch = query.toLowerCase().match(/which of the following numbers are primes: (.*)\?/);
if (primeNumbersMatch) {
  const numbers = primeNumbersMatch[1].split(',').map(num => parseInt(num.trim()));
  const primeNumbers = numbers.filter(isPrime); // Filter to get prime numbers only
  return primeNumbers.length > 0 ? primeNumbers.join(', ') : "No primes found";
}



  return "";
}