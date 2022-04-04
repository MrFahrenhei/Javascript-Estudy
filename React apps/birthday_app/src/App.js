import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setPeople] = useState(data);
  return (
    <React.Fragment>
      <main>
      <section class="container">
        <h3>{people.length} Aniversários hoje</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Limpe Tudo</button>
      </section>
      </main>
    </React.Fragment>
  );
}


export default App;
