import { memo, useEffect } from 'react';

import { Container, Spinner } from 'react-bootstrap';
// import LanguageSwitcher from 'components/LanguageSwitcher';
import {
  FaVenus,
  FaMars,
  FaRulerVertical,
  FaBalanceScale,
} from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

import { usePokemons } from 'context/PokemonsContext';
import { calcFeaturesTotal } from 'context/PokemonsContext/helpers';

import { unslugfy } from 'helpers';

import useTitle from 'hooks/useTitle';

import { LoadingDiv } from 'styles/GlobalStyles';

import logo from '../../assets/pokemon_logo.png';
import { Description, PokemonBg1, PokemonBg2, TypesBg } from './styled';
// const total = calcFeaturesTotal(pokemon.stats);
const PokemonPage: React.FC = () => {
  const setTitle = useTitle();
  const { name } = useParams();
  const { pokemon, pokemonLoading, fetchPokemon } = usePokemons();
  // const total = calcFeaturesTotal(pokemon.stats);

  useEffect(() => {
    if (pokemon) setTitle(unslugfy(pokemon.name));
  }, [pokemon, setTitle]);

  useEffect(() => {
    fetchPokemon({ variables: { name } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {pokemonLoading && (
        <LoadingDiv className="d-flex aling-items-center justify-content-center">
          <Spinner animation="border" variant="danger" className="my-auto" />
        </LoadingDiv>
      )}
      {!pokemonLoading &&
        pokemon &&
        pokemon.stats !== undefined &&
        pokemon.move !== undefined && (
          <>
            {pokemonLoading && <p>Loading...</p>}
            {!pokemonLoading && pokemon && (
              <PokemonBg1 bgColor={pokemon.color}>
                <Container>
                  <Link to="/">
                    <button type="button" className="btn px-0 text-white">
                      ← Voltar
                    </button>
                  </Link>
                  <div>
                    <div className="mb-3 d-flex justify-content-between">
                      <h2>{unslugfy(pokemon.name)}</h2>
                      <h2>#{String(pokemon.id).padStart(3, '0')}</h2>
                    </div>
                    <TypesBg className="px-3 py-1">Types</TypesBg>
                    <div className="d-flex justify-content-center">
                      {pokemon.image && (
                        <img
                          style={{ width: 400 }}
                          src={pokemon.image}
                          alt={pokemon.name}
                          className="pt-3 mb-0 pb-0 img-fluid"
                        />
                      )}
                    </div>
                  </div>
                </Container>
                <Container>
                  <PokemonBg2 className="px-3 py-3">
                    <Description bgColor={pokemon.color}>Descrição</Description>
                    <p>{pokemon.description}</p>
                    <div className="d-flex justify-content-around">
                      <div className="d-flex flex-column fw-bold">
                        <span>
                          <FaBalanceScale />
                          {pokemon.weight}kg
                        </span>{' '}
                        <span>weight</span>
                      </div>{' '}
                      |
                      <div className="d-flex flex-column fw-bold">
                        <span>
                          <FaRulerVertical />
                          {pokemon.height}m
                        </span>{' '}
                        <span>height</span>
                      </div>{' '}
                      |
                      <div className="d-flex flex-column fw-bold">
                        <span>{unslugfy(pokemon?.move)}</span>
                        <span>main move</span>
                      </div>
                    </div>
                    <h2 className="my-2">Features</h2>
                    <p>
                      Gender: <FaMars /> {pokemon?.gender?.m}% <FaVenus />
                      {pokemon?.gender?.f}%
                    </p>
                    <div className="pe-5">
                      <div className="d-flex row ">
                        <span className="col col-md-2">Hip:</span>
                        <span className="col col-md-1">
                          {pokemon?.stats[0].value}
                        </span>
                        <div className="progress col">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: pokemon.stats[0].value }}
                          />
                        </div>
                      </div>
                      <div className="d-flex row">
                        <span className="col col-md-2">Attack:</span>
                        <span className="col col-md-1">
                          {pokemon.stats[1].value}
                        </span>
                        <div className="progress col">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: pokemon.stats[1].value }}
                          />
                        </div>
                      </div>
                      <div className="d-flex row">
                        <span className="col col-md-2">Defense:</span>
                        <span className="col col-md-1">
                          {pokemon.stats[2].value}
                        </span>
                        <div className="progress col">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: pokemon.stats[2].value }}
                          />
                        </div>
                      </div>
                      <div className="d-flex row">
                        <span className="col col-md-2">Special Attack:</span>
                        <span className="col col-md-1">
                          {pokemon.stats[3].value}
                        </span>
                        <div className="progress col">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: pokemon.stats[3].value }}
                          />
                        </div>
                      </div>
                      <div className="d-flex row">
                        <span className="col col-md-2">Special Defense:</span>
                        <span className="col col-md-1">
                          {pokemon.stats[4].value}
                        </span>
                        <div className="progress col">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: pokemon.stats[4].value }}
                          />
                        </div>
                      </div>
                      <div className="d-flex row">
                        <span className="col col-md-2">Speed:</span>
                        <span className="col col-md-1">
                          {pokemon.stats[5].value}
                        </span>
                        <div className="progress col">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: pokemon.stats[5].value }}
                          />
                        </div>
                      </div>
                      <div className="d-flex row">
                        <span className="col col-md-2">Total:</span>
                        <span className="col col-md-1">
                          {calcFeaturesTotal(pokemon.stats)}
                        </span>
                        <div className="progress col">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: calcFeaturesTotal(pokemon.stats) }}
                          />
                        </div>
                      </div>
                    </div>
                  </PokemonBg2>
                </Container>
                <div className="d-flex justify-content-center align-items-center py-5 px-5">
                  <img
                    className="img-fluid "
                    src={logo}
                    alt="logo"
                    style={{ width: 250 }}
                  />
                </div>
              </PokemonBg1>
            )}
          </>
        )}
    </>
  );
};

export default memo(PokemonPage);
