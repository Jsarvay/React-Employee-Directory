import React from "react";
import "./style.css";

function Search(props) {
    return (
        <div className="form-group">
            <form className="search">
                <input
                name="search"
                type="text"
                placeholder="search"
                className="form-control">
                </input>
            </form>
        </div>
    )
};

export default Search;