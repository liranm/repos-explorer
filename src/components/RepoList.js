import React from 'react';
import { RepoItem } from './RepoItem';

export const RepoList = (props) => {
    if(!props.repos.length) {
        return (
            <p className="repo-list__empty">No repos</p>
        );
    }

    return (
        <ul className="repo-list">
            { props.repos.map(repo => <RepoItem key={repo.id} {...repo} />) }
        </ul>
    );
};