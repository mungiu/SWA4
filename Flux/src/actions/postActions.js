import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

async function PostData(data) {
    dispatcher.dispatch({
        actionTypes: actionTypes.POST_HISTORY,
        response: await postData("http://localhost:8080/data", data)
    });
}

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    return response;
  }

export {PostData}