import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import DynamicArticle from "./DynamicArticle/DynamicArticle.jsx";
import { isEmpty } from "lodash";
import ArticleList from "./ArticleList/ArticleList.jsx";

function App() {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("http://demo1390455.mockable.io/articles");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
    <div className="App">
      <Switch>
        {/* You will need to update one of the routes that are already there so that the list 
          of all the articles are displayed at this URL: http://localhost:3000/articlelist */}
        <Route exact path={`/articlelist`}>
          {/* In src/App.js, import then add your new ArticleList component to the router. */}
          <ArticleList articleList={Object.values(fetchedData)} />
        </Route>

        {/* <Route
          path={`/articlelist/:slug`}
          render={({ match }) => {
            // getting the parameters from the url and passing
            // down to the component as props
            console.log("this slug", match.params.slug);
            return <div>Component</div>;
          }}
        /> */}

        {/* You will need to update one of the routes that are already there so that the 
        individual article is displayed at a URL similar to the following */}
        <Route
          path={`/articlelist/:slug`}
          render={({ match }) => {
            const arr = Object.values(fetchedData);
            let index = 0;
            for (; index < arr.length; index++) {
              if (arr[index].slug == match.params.slug) {
                break;
              }
            }
            return <DynamicArticle article={Object.values(fetchedData)[index]} />
          }}
        />

        <Route>
          <DynamicArticle article={Object.values(fetchedData)[1]} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
