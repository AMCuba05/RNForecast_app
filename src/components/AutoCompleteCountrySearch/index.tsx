import React from 'react';
import { AutocompleteDropdown, TAutocompleteDropdownItem } from "react-native-autocomplete-dropdown";
import {View, Text} from 'react-native';
import {CountryState} from '../../models/reducers';
import AutoCompleteStyles from "./styles";

interface AutoCompleteCountrySearchProps {
  countries: CountryState;
  onSelectItem: (item: TAutocompleteDropdownItem) => void;
}

export const AutoCompleteCountrySearch: React.FC<
  AutoCompleteCountrySearchProps
> = ({countries, onSelectItem}) => {
  return (
    <View style={AutoCompleteStyles.container}>
      <Text style={AutoCompleteStyles.title}>Please Select a Country:</Text>
      <AutocompleteDropdown
        onSelectItem={(item: TAutocompleteDropdownItem) => {
          onSelectItem(item);
        }}
        dataSet={countries.items}
      />
    </View>
  );
};
