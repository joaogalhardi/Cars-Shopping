import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../screens/Home/home';
import { cars } from '../utils/car';
import Car from '../screens/Car/car';

export default function Rotas() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      {cars.map((item) => {
        return (
          <Route
            path={item.path}
            element={
              <Car
                nome={item.name}
                preco={item.price}
                foto={item.photo}
                ano={item.ano}
                descricao={item.descricao}
              />
            }
            key={item.id}
          />
        );
      })}
    </Routes>
  );
}
