import React from "react";
// ??? prototype
// import PropTypes from "prop-types";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";

// ArticleList.jsx must accept 1 prop: articles, an array of article objects 
// returned from the JSON response.
const ArticleList = (props) => {

    const myList = props.articleList;
    if (myList.length) {
        const mappedList = myList.map((listItem) => (
            <li key={listItem.slug}>{ArticleListItem(listItem)}</li>
        ));

        return (
            <>
                <div>
                    <ul>{mappedList}</ul>
                </div>
            </>
        );

        // return ArticleListItem(props);
    } else {
        // If the list of articles is not available
        return (<div>You have no data!</div>);
    }
};

export default ArticleList;
