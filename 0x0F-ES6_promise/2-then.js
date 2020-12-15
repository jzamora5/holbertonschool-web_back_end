function handleResponseFromAPI(promise) {
  return promise
    .catch(() => Error())
    .finally(() => console.log('Got a response from the API'));
}

export default handleResponseFromAPI;
