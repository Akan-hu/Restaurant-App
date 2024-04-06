import client from './sanity';

let sanityQuery = (query, params) => client.fetch(query, params);
export const getFeaturedRestaurants = () => {
  return sanityQuery(`
  *[_type=='featured']{
    ...,
    restaurants[]->{
      ...,
      dishes[]->{
        ...
      },
      type->{
        name
      }
    }
  }
  `);
};
export const getCategories = () => {
  const query = `
  *[_type=='category']`;
  console.log('Query:', query);
  sanityQuery(query, {})
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error('Error executing query:', error);
    });

  sanityQuery(query, {})
    .then(response => {
      if (Array.isArray(response)) {
        if (response.length === 0) {
          console.log('No categories found.');
        } else {
          console.log('Categories found:', response);
        }
      } else {
        console.log('Unexpected response format:', response);
      }
    })
    .catch(error => {
      console.error('Error executing query:', error);
    });

  return sanityQuery(`
  *[_type=='category']`);
};
