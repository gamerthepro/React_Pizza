import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            onClick={() => setActiveIndex(index)}
            key={value}
            className={activeIndex === index ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
