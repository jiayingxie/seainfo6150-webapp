import React from "react";
// ??? prototype

// ArticleListItem.jsx must accept 1 prop: article, a single article object
const ArticleListItem = (props) => {
    const item = props;

    return (
        <>
            <div>

                <h2>{item.title}</h2>
                <time dateTime={item.timeStamp}>{item.displayDate}</time>
                <p>{item.shortText}</p>

            </div>
        </>
    );

    // the following code is not the answer I want
    // const myList = props.articleList;

    // const mappedList = myList.map((listItem) => (
    //     <li key={listItem.slug}>
    //         <h2>{listItem.title}</h2>
    //         <time dateTime={listItem.timeStamp}>{listItem.displayDate}</time>
    //         <p>{listItem.shortText}</p>
    //     </li>
    // ));

    // return (
    //     <>
    //         <div>
    //             <ul>{mappedList}</ul>
    //         </div>
    //     </>
    // );
};

export default ArticleListItem;