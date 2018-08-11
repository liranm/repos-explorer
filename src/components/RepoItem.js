import React from 'react';

export const RepoItem = (props) => (
    <li className="repos-list-item">
        <a href={props.url} target="_blank" rel="noopener noreferrer" className="repos-list-item__link">{props.name}</a>
        <p className="repos-list-item__stars">{props.stargazers_count}</p>
    </li>
);