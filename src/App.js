import './App.css';
import { useEffect , useState} from 'react';
import TaskInput from './components/TaskInput';
import db from './utils/firebase'
import Task from './components/Task';
import { collection, onSnapshot } from "firebase/firestore";

function App() {

  //The reference from where we collect data from

  const [tasksData, setTasks] = useState([])
  const data = [];

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "tasks"), (snapshot) => {
      // Respond to data
      // ...
      snapshot.docs.map((doc) => console.log(doc.data()))
    });
    return () => unsubscribe()
  }, [])


;
// setTasks(data);
  return (

    
    

    <div className="App">
      <div className="tasklistContainer">
        <h1>TODO</h1>
        <TaskInput />
 
      </div>
    </div>
  );
}

export default App;
