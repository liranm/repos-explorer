import React from 'react';

export const UserForm = (props) => (
    <div className="search-user">
        <form action="" 
            onSubmit={props.handleSubmit} 
            className="search-user__form">

            <span className="search-user__label">
                Show repos for user
            </span>

            <input type="text" 
                className="search-user__input"
                onChange={props.handleInputChange}
                value={props.currentUser}
                />

            <button className="search-user__button">Go</button>
        </form>
        {props.errorMessage && <p className="search-user__error-message">{props.errorMessage}</p>}
        {props.loadingMessage && <p className="search-user__loading-message">{props.loadingMessage}</p>}
    </div>
);