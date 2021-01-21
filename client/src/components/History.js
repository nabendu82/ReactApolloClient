import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const HISTORY_QUERY = gql`
    query HistoryQuery($id: Int!) {
        history(id: $id) {
            id
            title
            event_date_utc
            details
            links {
                reddit
                article
                wikipedia
            }
        }
    }
`;


const History = (props) => {
    let { id } = props.match.params;
    id = parseInt(id);

    const { loading, error, data } = useQuery(HISTORY_QUERY, { variables: { id } });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data)

    const { title, event_date_utc, details, links: {reddit, article, wikipedia }} = data.history;

    return (
        <div>
            <h1 className="display-4 my-3">
                <span className="text-dark">Event:</span> {title}
            </h1>
            <h4 className="mb-3">Event Details</h4>
            <ul className="list-group">
                <li className="list-group-item">Details:{' '}
                    <span className="text-success font-weight-bold">{details}</span>
                </li>
                <li className="list-group-item">Date:{' '}
                    <span className="text-success font-weight-bold">
                        <Moment format="dddd, MMMM Do YYYY, h:mm a">{event_date_utc}</Moment>
                    </span>
                </li>
                {reddit &&
                    <li className="list-group-item">Reddit: {' '}
                        <a href={reddit} target="_blank" rel="noopener noreferrer">
                            Read more on Reddit!
                    </a>
                    </li>
                }
                {article &&
                    <li className="list-group-item">Article: {' '}
                        <a href={article} target="_blank" rel="noopener noreferrer">
                            Read more on article!
                    </a>
                    </li>
                }
                {wikipedia &&
                    <li className="list-group-item">Wikipedia: {' '}
                        <a href={wikipedia} target="_blank" rel="noopener noreferrer">
                            Read more on Wikipedia!
                    </a>
                    </li>
                }
            </ul>
            <hr />
            <Link to="/histories" className="btn btn-secondary">Back</Link>
        </div>
    )
}

export default History
