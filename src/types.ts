export interface Country {
  name: string;
  flag: string;
  alpha3Code: string;
  capital: string;
  population: number;
  languages: [{
    name: string;
  }];
  currencies: [{
    code: string;
    name: string;
    symbol: string;
  }];
  timezones: string[];
  region: string,
}

export interface CountryProps {
  isLoading: boolean,
  country: Country,
  countries: Country[],
}

export interface SearchbarProps {
  placeholder?: string,
  onSearch?: Function,
  value?: string,
}

