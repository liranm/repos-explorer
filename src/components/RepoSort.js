import React from 'react';

export const RepoSort = (props) => (
    <label className="sort-results">
        <span className="sort-results__label">Sort repositories by</span>
        <select 
            className="sort-results__select"
            onChange={props.handleSortChange}
        >
            <option value="stargazers">Stargazers</option>
            <option value="name">Name</option>
        </select>
    </label>
);