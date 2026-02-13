import Student from "./Student.jsx";
function App() {
  return (
    <>
      <Student name="spongebob" age="hello" isStudent={true} />
      <Student name="Rajesh" age={44} isStudent={false} />
      <Student name="Ramesh" age={33} isStudent={false} />
      <Student name="Himesh" age={23} isStudent={true} />
      <Student />
    </>
  );
}

export default App;
