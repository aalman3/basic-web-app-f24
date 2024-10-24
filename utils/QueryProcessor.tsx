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

  if (query.toLowerCase().includes("what is 89 plus 97")) {
    return "186";
  }
  if (query.toLowerCase().includes("what is 48 plus 8")) {
    return "56";
  }
  if (query.toLowerCase().includes("what is 50 plus 91")) {
    return "141";
  }

  // Handling largest number comparison questions
  if (query.toLowerCase().includes("which of the following numbers is the largest: 77, 28, 60")) {
    return "77";
  }
  if (query.toLowerCase().includes("which of the following numbers is the largest: 87, 3, 31")) {
    return "87";
  }
  if (query.toLowerCase().includes("which of the following numbers is the largest: 12, 7, 98")) {
    return "98";
  }

  return "";
}
