import React from 'react'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export default function HistoryItem({
    history:{ id, title, event_date_utc }
}) {
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-10">
                    <h4>Historical Event: <span className="text-success">{title}</span></h4>
                    <p>Date: <Moment format="dddd, MMMM Do YYYY, h:mm a">{event_date_utc}</Moment></p>
                </div>
                <div className="col-md-2">
                    <Link to={`/history/${id}`} className="btn btn-secondary">Details</Link>
                </div>
            </div>
        </div>
    )
}
