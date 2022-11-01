import React from 'react';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import Placeholder from './components/Placeholder';

import './scss/app.scss';

function App() {
  const [pizzaItem, setPizzaItem] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch('https://635e546e03d2d4d47aec6160.mockapi.io/Items')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPizzaItem(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err('что-то пощло не так'));
      });
  }, []);

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
            {isLoading
              ? [...new Array(6)].map((_, index) => <Placeholder key={index} />)
              : pizzaItem.map((obj) => <PizzaBlock key={obj.title} {...obj} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
