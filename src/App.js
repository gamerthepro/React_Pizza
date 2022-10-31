import React from 'react';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import './scss/app.scss';

function App() {
  const [pizzaItem, setPizzaItem] = React.useState([]);
  fetch('https://635e546e03d2d4d47aec6160.mockapi.io/Items')
    .then((res) => {
      return res.json();
    })
    .then((arr) => {
      setPizzaItem(arr);
    });

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzaItem.map((obj) => (
              <PizzaBlock key={obj.title} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
