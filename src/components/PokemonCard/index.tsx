import { memo } from 'react';

import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PokemonType } from 'Types/PokemonType';

import { unslugfy } from 'helpers';

import { CardBg, IdBg, TypesBg } from './styled';

interface IPokemonCardProps {
  pokemon: PokemonType;
}

const PokemonCard: React.FC<IPokemonCardProps> = ({ pokemon }) => {
  return (
    <CardBg
      bgColor={pokemon.color}
      className="d-flex flex-column position-relative px-3 py-3 "
    >
      <IdBg bgColor={pokemon.color} className="align-self-end">
        <h2>#{String(pokemon.id).padStart(3, '0')}</h2>
      </IdBg>
      <Row className="flex-row ">
        <Col className="col-md-6 ">
          <h2 className="mb-3">{unslugfy(pokemon.name)}</h2>
          <div className="d-flex flex-column align-items-start">
            {Array.isArray(pokemon.types) &&
              pokemon.types.length > 0 &&
              pokemon.types.map((_t) => (
                <TypesBg key={_t} className="my-1">
                  <p className="py-0 px-3 my-0">{_t}</p>
                </TypesBg>
              ))}
          </div>
        </Col>
        <Col className="d-flex col-md-6">
          <Link to={`/${pokemon.name}`} className="stretched-link">
            {pokemon.image && (
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className=" img-fluid"
              />
            )}
          </Link>
        </Col>
      </Row>
    </CardBg>
  );
};

export default memo(PokemonCard);
