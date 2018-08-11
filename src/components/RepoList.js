import React from 'react';
import { RepoItem } from './RepoItem';

export const RepoList = (props) => (
    <ul className="repos-list">
        { props.repos.map(repo => <RepoItem key={repo.id} {...repo} />) }
    </ul>
);