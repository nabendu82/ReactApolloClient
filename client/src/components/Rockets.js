import React from 'react'
import { useQuery, gql } from '@apollo/client'
import RocketItem from './RocketItem';

const ROCKETS_QUERY = gql`
    query RocketsQuery {
        rockets {
            rocket_id
            rocket_name
            rocket_type
            wikipedia
            description
        }
    }
`;

const Rockets = () => {
    const { loading, error, data } = useQuery(ROCKETS_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data)
    return (
        <>
            <h1 className="display-4 my-3">Rockets</h1>
            {data.rockets.map(rocket => (
                <RocketItem key={rocket.rocket_id} rocket={rocket} />
            ))}
        </>
    )
}

export default Rockets
