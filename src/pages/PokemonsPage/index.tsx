import { memo, useEffect } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';

import { usePokemons } from 'context/PokemonsContext';

import Footer from 'components/Footer';
import Header from 'components/Header';
import PokemonCard from 'components/PokemonCard';

import useTitle from 'hooks/useTitle';

const PokemonsPage: React.FC = () => {
  const setTitle = useTitle();
  const { pokemons, loading, fetchNextPage, hasMorePages } = usePokemons();

  useEffect(() => {
    setTitle('Pokemons');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Container>
        <h1 className="my-5">Qual pokemon você escolheria?</h1>
        {loading && pokemons.length === 0 && <p>Loading...</p>}
        {pokemons.length > 0 && Array.isArray(pokemons) && (
          <InfiniteScroll
            style={{ overflow: 'visible' }}
            dataLength={pokemons.length}
            next={fetchNextPage}
            hasMore={hasMorePages}
            loader={<h4>Loading...</h4>}
          >
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              {pokemons.map((pokemon) => (
                <Col key={pokemon.id}>
                  <PokemonCard pokemon={pokemon} />
                </Col>
              ))}
            </Row>
          </InfiniteScroll>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default memo(PokemonsPage);

// style={{ display: 'flex', flexDirection: 'column-reverse' }} // To put endMessage and loader to the top.
