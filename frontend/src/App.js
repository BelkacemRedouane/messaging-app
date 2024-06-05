import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_RESULT = gql`
  query GetResult {
    result
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_RESULT);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error); // Afficher l'erreur dans la console
    return <p>Error :(</p>;
  }

  return (
    <div>
      <h1>GraphQL Test</h1>
      <p>{data.result}</p>
    </div>
  );
}

export default App;
