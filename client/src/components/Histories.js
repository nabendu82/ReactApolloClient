import React from 'react'
import { useQuery, gql } from '@apollo/client'
import HistoryItem from './HistoryItem';

const HISTORIES_QUERY = gql`
    query HistoriesQuery {
        histories {
            id
            title
            event_date_utc
        }
    }
`;

const Histories = () => {
    const { loading, error, data } = useQuery(HISTORIES_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <h1 className="display-4 my-3">History</h1>
            {data.histories.map(history => (
                <HistoryItem key={history.id} history={history} />
            ))}

        </>
    )
}

export default Histories
