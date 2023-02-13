import { memo, useCallback, useEffect } from 'react';

import { Col, Container, ProgressBar, Row, Spinner } from 'react-bootstrap';
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

const PokemonPage: React.FC = () => {
  const setTitle = useTitle();
  const { name } = useParams();
  const { pokemon, pokemonLoading, fetchPokemon } = usePokemons();

  const pokedexIndex = (id: number): string =>
    `#${String(id).padStart(3, '0')}`;

  const capitalizeStr = useCallback((text: string) => {
    const str = text;
    const capitalized = str[0].toUpperCase() + str.substring(1);
    return capitalized;
  }, []);

  useEffect(() => {
    if (pokemon) setTitle(unslugfy(pokemon.name));
  }, [pokemon, setTitle]);

  useEffect(() => {
    fetchPokemon({ variables: { name } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="d-flex flex-column">
      {pokemonLoading && (
        <LoadingDiv className="d-flex align-items-center justify-content-center">
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
                <Container className="py-3  align-items-center justify-content-center flex-grow-1">
                  <Link to="/">
                    <button type="button" className="btn px-0 text-white">
                      ← Back
                    </button>
                  </Link>
                  <div>
                    <div className="mb-3 d-flex justify-content-between">
                      <h2>{unslugfy(pokemon.name)}</h2>
                      <h2>{pokedexIndex(pokemon.id)}</h2>
                    </div>
                    <div className="d-flex flex-column align-items-start">
                      {Array.isArray(pokemon.types) &&
                        pokemon.types.length > 0 &&
                        pokemon.types.map((_t) => (
                          <TypesBg key={_t} className="my-1">
                            <p className="py-0 px-3 my-0">{_t}</p>
                          </TypesBg>
                        ))}
                    </div>
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
                  <PokemonBg2 className="px-3 py-3">
                    <Description bgColor={pokemon.color}>
                      Description
                    </Description>
                    <p>{pokemon.description}</p>
                    <Row className="my-4">
                      <Col className="d-flex flex-column fw-bold align-items-center">
                        <span>
                          <FaBalanceScale />
                          {pokemon.weight}kg
                        </span>{' '}
                        <span>weight</span>
                      </Col>{' '}
                      <Col className="d-flex flex-column fw-bold align-items-center border-start border-end border-dark">
                        <span>
                          <FaRulerVertical />
                          {pokemon.height}m
                        </span>{' '}
                        <span>height</span>
                      </Col>{' '}
                      <Col className="d-flex flex-column fw-bold align-items-center">
                        <span>{unslugfy(pokemon?.move)}</span>
                        <span>main move</span>
                      </Col>
                    </Row>
                    <h2 className="my-2">Features</h2>
                    <p>
                      Gender: <FaMars style={{ color: '#6C79DB' }} />{' '}
                      {pokemon?.gender?.m}%{' '}
                      <FaVenus style={{ color: '#F0729F' }} />
                      {pokemon?.gender?.f}%
                    </p>
                    <div>
                      <div className="d-flex row ">
                        <span className="col col-5 col-md-2">
                          {capitalizeStr(pokemon.stats[0].name)}
                        </span>
                        <span className="col col-1">
                          {pokemon?.stats[0].value}
                        </span>
                        <div className=" col col-6 col-md-9">
                          <ProgressBar
                            role="progressbar"
                            variant={
                              pokemon.stats[0].value >= 50
                                ? 'success'
                                : 'danger'
                            }
                            now={pokemon.stats[0].value}
                          />
                        </div>
                      </div>
                      <div className="d-flex row ">
                        <span className="col col-5 col-md-2">
                          {capitalizeStr(pokemon.stats[1].name)}
                        </span>
                        <span className="col col-1">
                          {pokemon?.stats[1].value}
                        </span>
                        <div className=" col col-6 col-md-9">
                          <ProgressBar
                            role="progressbar"
                            variant={
                              pokemon.stats[1].value >= 50
                                ? 'success'
                                : 'danger'
                            }
                            now={pokemon.stats[1].value}
                          />
                        </div>
                      </div>
                      <div className="d-flex row ">
                        <span className="col col-5 col-md-2">
                          {capitalizeStr(pokemon.stats[2].name)}
                        </span>
                        <span className="col col-1">
                          {pokemon?.stats[2].value}
                        </span>
                        <div className=" col col-6 col-md-9">
                          <ProgressBar
                            role="progressbar"
                            variant={
                              pokemon.stats[2].value >= 50
                                ? 'success'
                                : 'danger'
                            }
                            now={pokemon.stats[2].value}
                          />
                        </div>
                      </div>
                      <div className="d-flex row ">
                        <span className="col col-5 col-md-2">
                          {capitalizeStr(pokemon.stats[3].name)}
                        </span>
                        <span className="col col-1">
                          {pokemon?.stats[3].value}
                        </span>
                        <div className=" col col-6 col-md-9">
                          <ProgressBar
                            role="progressbar"
                            variant={
                              pokemon.stats[3].value >= 50
                                ? 'success'
                                : 'danger'
                            }
                            now={pokemon.stats[3].value}
                          />
                        </div>
                      </div>
                      <div className="d-flex row ">
                        <span className="col col-5 col-md-2">
                          {capitalizeStr(pokemon.stats[4].name)}
                        </span>
                        <span className="col col-1">
                          {pokemon?.stats[4].value}
                        </span>
                        <div className=" col col-6 col-md-9">
                          <ProgressBar
                            role="progressbar"
                            variant={
                              pokemon.stats[4].value >= 50
                                ? 'success'
                                : 'danger'
                            }
                            now={pokemon.stats[4].value}
                          />
                        </div>
                      </div>
                      <div className="d-flex row ">
                        <span className="col col-5 col-md-2">
                          {capitalizeStr(pokemon.stats[5].name)}
                        </span>
                        <span className="col col-1">
                          {pokemon?.stats[5].value}
                        </span>
                        <div className=" col col-6 col-md-9">
                          <ProgressBar
                            role="progressbar"
                            variant={
                              pokemon.stats[5].value >= 50
                                ? 'success'
                                : 'danger'
                            }
                            now={pokemon.stats[5].value}
                          />
                        </div>
                      </div>
                      <div className="d-flex row ">
                        <span className="col col-5 col-md-2">Total:</span>
                        <span className="col col-1">
                          {calcFeaturesTotal(pokemon.stats)}
                        </span>
                        <div className=" col col-6 col-md-9">
                          <ProgressBar
                            role="progressbar"
                            variant={
                              calcFeaturesTotal(pokemon.stats) >= 300
                                ? 'success'
                                : 'danger'
                            }
                            now={calcFeaturesTotal(pokemon.stats) / 6}
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
    </div>
  );
};

export default memo(PokemonPage);
