import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {MapViewStyles} from './styles';
interface MapViewProps {
  route: {
    params: {lat: number; lon: number};
  };
}

export const MapViewScreen: React.FC<MapViewProps> = ({route}) => {
  const {lat, lon} = route.params;
  const navigation = useNavigation();

  const onPressBack = () => navigation.goBack();
  return (
    <View>
      <View style={MapViewStyles.headerContainer}>
        <TouchableOpacity style={MapViewStyles.button} onPress={onPressBack}>
          <Icon name={'left'} size={30} color={'#010048'} />
        </TouchableOpacity>
        <Text style={MapViewStyles.headerTitle}>Map View</Text>
      </View>
      <MapView
        style={MapViewStyles.mapContainer}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: lat,
          longitude: lon,
          latitudeDelta: 15,
          longitudeDelta: 15,
        }}
      />
    </View>
  );
};
