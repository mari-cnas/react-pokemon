import { memo } from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import NotFound from 'pages/NotFound';
import PokemonPage from 'pages/PokemonPage';
import PokemonsPage from 'pages/PokemonsPage';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<PokemonsPage />} />
        <Route path="/:name" element={<PokemonPage />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  );
};

export default memo(Routes);
