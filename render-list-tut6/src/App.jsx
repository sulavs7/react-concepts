import List from "./list";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];
  const vegetables = [
    { id: 1, name: "lettuce", calories: 95 },
    { id: 2, name: "cauliflower", calories: 200 },
    { id: 3, name: "potato", calories: 199 },
    { id: 4, name: "okra", calories: 159 },
    { id: 5, name: "cabbage", calories: 37 },
  ];

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category=" fruits" />}
      {vegetables.length > 0 && (
        <List items={vegetables} category="vegetables" />
      )}
    </>
  );
}
export default App;
