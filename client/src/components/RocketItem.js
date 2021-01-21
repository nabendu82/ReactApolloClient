import React from 'react'
import { Link } from 'react-router-dom';

export default function RocketItem({
    rocket:{ rocket_id, rocket_name }
}) {
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>Rocket: <span className="text-success">{rocket_name}</span></h4>
                </div>
                <div className="col-md-3">
                    <Link to={`/rockets/${rocket_id}`} className="btn btn-secondary">Rocket Details</Link>
                </div>
            </div>
        </div>
    )
}
