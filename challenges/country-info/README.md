# Country Info

In this challenge, you'll be synchronizing the result of fetching country data from an external API (the url below) with your component's state.

The JSX is finished, so all you need to do is fetch the data from the following URL and update the component's state with the result.

```js
const url = `https://restcountries.com/v2/alpha/${countryCode}`;
```

You'll update data with the exact JSON response returned from the given url.

## Tasks

- Display a loading state when fetching data
- Fetch new data based on the user's input
- Render an error message if fetch fails
