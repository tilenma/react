import React, {useState} from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: uName+Math.random().toString() }];
    });
  };
  return (
    <div>
      <AddUser onAddUsers={addUserHandler} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
