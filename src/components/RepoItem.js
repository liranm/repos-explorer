import React from 'react';

export const RepoItem = (props) => (
    <li className="repo-item">
        <a href={props.url} target="_blank" rel="noopener noreferrer" className="repo-item__link">{props.name}</a>
        <p className="repo-item__stars">{props.stargazers_count}</p>
    </li>
);