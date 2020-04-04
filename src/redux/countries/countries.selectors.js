import { createSelector } from 'reselect';

const selectCountriesCases = state => state.countriesCases;

export const selectCountries = createSelector(
  [selectCountriesCases],
  data => data.countries
);

export const selectCountry = createSelector(
  [selectCountriesCases],
  data => data.country
);

export const selectCountryCount = createSelector(
  [selectCountriesCases],
  data => data.countries.filter(({ country }) => country !== 'World').length
);

export const selectIsFetching = createSelector(
  [selectCountriesCases],
  data => data.isFetching
);

export const selectErrorMessage = createSelector(
  [selectCountriesCases],
  data => data.selectErrorMessage
);
