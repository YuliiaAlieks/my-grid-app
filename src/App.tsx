import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import { SomeList } from './components/SomeList/SomeList';


import { UsersList } from './features/users/Users';


function App() {

  return (
    <div>
      <h1>My Grid App</h1>
      {/* <UsersList /> */}
      <SomeList />
    </div>
  );
}

export default App;
