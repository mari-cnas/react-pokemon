import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  LazyQueryExecFunction,
  OperationVariables,
  useLazyQuery,
  useQuery,
} from '@apollo/client';
import { PokemonsQueryResultDataType, PokemonType } from 'Types/PokemonType';

import { GET_POKEMONS_QUERY, GET_POKEMON_QUERY } from '../../GraphQLQueries';
import { normalizePokemonQueryResults } from './helpers';

interface IContextProps {
  pokemons: PokemonType[];
  pokemon: PokemonType | null;
  loading: boolean;
  pokemonLoading: boolean;
  hasMorePages: boolean;
  fetchPokemon: LazyQueryExecFunction<
    PokemonsQueryResultDataType,
    OperationVariables
  >;
  fetchNextPage: () => void;
}

interface IPokemonsProviderProps {
  children: React.ReactNode;
}

export const ReactContext = createContext<IContextProps>({} as IContextProps);

const RESULTS_PER_PAGE = 24;

export const PokemonsProvider: React.FC<IPokemonsProviderProps> = ({
  children,
}) => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [pokemon, setPokemon] = useState<PokemonType | null>(null);
  const [offset, setOffset] = useState(0);
  const [hasMorePages, setHasMorePages] = useState(true);

  const { data, loading } = useQuery<PokemonsQueryResultDataType>(
    GET_POKEMONS_QUERY,
    { variables: { limit: RESULTS_PER_PAGE, offset } },
  );

  const fetchNextPage = useCallback(
    () => setOffset((prev) => prev + RESULTS_PER_PAGE),
    [],
  );

  const [fetchPokemon, { data: pokemonData, loading: pokemonLoading }] =
    useLazyQuery<PokemonsQueryResultDataType>(GET_POKEMON_QUERY);

  useEffect(() => {
    if (!!data && Array.isArray(data?.results)) {
      setPokemons((prev) => [
        ...prev,
        ...normalizePokemonQueryResults(data.results),
      ]);
      if (data.results.length < RESULTS_PER_PAGE) {
        setHasMorePages(false);
      }
    }
  }, [data]);

  useEffect(() => {
    if (!!pokemonData && Array.isArray(pokemonData.results)) {
      setPokemon(
        normalizePokemonQueryResults(pokemonData.results)?.[0] ?? null,
      );
    }
  }, [pokemonData]);

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          pokemons,
          pokemon,
          loading,
          pokemonLoading,
          hasMorePages,
          fetchPokemon,
          fetchNextPage,
        }),
        [
          pokemons,
          pokemon,
          loading,
          pokemonLoading,
          hasMorePages,
          fetchPokemon,
          fetchNextPage,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  );
};

export const usePokemons = (): IContextProps => {
  const context = useContext(ReactContext);

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useMyCustomHook must be within MyCustomProvider');
  }

  return context;
};
