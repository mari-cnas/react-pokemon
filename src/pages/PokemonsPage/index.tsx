import { memo, useEffect } from 'react';

import { Col, Container, Row, Spinner } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';

import { usePokemons } from 'context/PokemonsContext';

import Footer from 'components/Footer';
import Header from 'components/Header';
import PokemonCard from 'components/PokemonCard';

import useTitle from 'hooks/useTitle';

import { LoadingDiv } from 'styles/GlobalStyles';

const PokemonsPage: React.FC = () => {
  const setTitle = useTitle();
  const { pokemons, loading, fetchNextPage, hasMorePages } = usePokemons();

  useEffect(() => {
    setTitle('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Container>
        {loading && pokemons.length === 0 && (
          <LoadingDiv className="d-flex aling-items-center justify-content-center">
            <Spinner animation="border" variant="danger" className="my-auto" />
          </LoadingDiv>
        )}
        {pokemons.length > 0 && Array.isArray(pokemons) && (
          <>
            <h1 className="my-5">Qual pokemon você escolheria?</h1>
            <InfiniteScroll
              style={{ overflow: 'visible' }}
              dataLength={pokemons.length}
              next={fetchNextPage}
              hasMore={hasMorePages}
              loader={<h4>Loading...</h4>}
            >
              <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {pokemons.map((pokemon) => (
                  <Col key={pokemon.id} className="d-flex">
                    <PokemonCard pokemon={pokemon} />
                  </Col>
                ))}
              </Row>
            </InfiniteScroll>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default memo(PokemonsPage);
