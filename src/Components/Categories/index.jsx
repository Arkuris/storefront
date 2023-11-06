import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { activateCategory } from '../../store/categories/index.js';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const activeCategory = useSelector((state) => state.categories.activeCategory);

  return (
    <List component="nav" aria-label="categories">
      {categories.map((cat) => (
        <ListItem
          button
          selected={activeCategory === cat.name}
          key={cat.name}
          onClick={() => dispatch(activateCategory(cat.name))}
        >
          {cat.displayName}
        </ListItem>
      ))}
    </List>
  );
};

export default Categories;
