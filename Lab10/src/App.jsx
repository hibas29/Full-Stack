import{ usestate} from'react'
import './App.css'
import Card from './components/card';
import Greetings from './components/Greetings'
import Counter from './components/counter';


function App() {
  const students = [
    { name: "Hiba", class: "TYBCA", rollNo: 18 },
    { name: "Amaan", class: "TYBCA", rollNo: 7 },
    { name: "Rahil", class: "TYBCA", rollNo: 28 }
  ];

  return (
    <>
      {students.map((student, index) => (
        <Card
          key={index}
          name={student.name}
          className={student.class}
          rollNo={student.rollNo}
        />
      ))}
      <Counter/>
      <Reducer/>
    </>
  );
}


export default App