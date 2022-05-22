import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';

const ScreenBase = ({route}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {name: type} = route;

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://swapi.py4e.com/api/${type.toLowerCase()}/`)
      .then(response => response.json())
      .then(responseJson => {
        setData(responseJson.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error, 'FAIL REQUEST');
      });
  }, [type]);

  const mapData = data?.map(item => {
    if (type === 'People') {
      const {name, height, birth_year, films, vehicles, starships} = item;
      return (
        <Collapse>
          <CollapseHeader>
            <Text>{name}</Text>
          </CollapseHeader>
          <CollapseBody>
            <View key={name} style={styles.details}>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Height:</Text>
                <Text styles={styles.value}>{height || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Birth Year:</Text>
                <Text styles={styles.value}>{birth_year || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Films:</Text>
                <Text styles={styles.value}>{films?.length || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Cars:</Text>
                <Text styles={styles.value}>{vehicles?.length || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Starships:</Text>
                <Text styles={styles.value}>{starships?.length || 'N/A'}</Text>
              </View>
            </View>
          </CollapseBody>
        </Collapse>
      );
    } else if (type === 'Planets') {
      const {name, diameter, climate, gravity, terrain, population, residents} =
        item;
      return (
        <Collapse>
          <CollapseHeader>
            <Text>{name}</Text>
          </CollapseHeader>
          <CollapseBody>
            <View key={name} style={styles.details}>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Diameter:</Text>
                <Text styles={styles.value}>{diameter || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Climate:</Text>
                <Text styles={styles.value}>{climate || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Gravity:</Text>
                <Text styles={styles.value}>{gravity || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Terrain:</Text>
                <Text styles={styles.value}>{terrain || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Population:</Text>
                <Text styles={styles.value}>{population || 'N/A'}</Text>
              </View>
            </View>
          </CollapseBody>
        </Collapse>
      );
    } else if (type === 'Vehicles') {
      const {
        name,
        model,
        manufacturer,
        cost_in_credits,
        max_atmosphering_speed,
        crew,
        passengers,
        cargo_capacity,
        consumables,
        vehicle_class,
        pilots,
      } = item;
      return (
        <Collapse>
          <CollapseHeader>
            <Text>{name}</Text>
          </CollapseHeader>
          <CollapseBody>
            <View key={name} style={styles.details}>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Model:</Text>
                <Text styles={styles.value}>{model || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Manufacturer:</Text>
                <Text styles={styles.value}>{manufacturer || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Cost:</Text>
                <Text styles={styles.value}>{cost_in_credits || 'N/A'}</Text>
              </View>

              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Max Speed:</Text>
                <Text styles={styles.value}>
                  {max_atmosphering_speed || 'N/A'}
                </Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Crew:</Text>
                <Text styles={styles.value}>{crew || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Passengers:</Text>
                <Text styles={styles.value}>{passengers || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Cargo Capacity:</Text>
                <Text styles={styles.value}>{cargo_capacity || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Consumables:</Text>
                <Text styles={styles.value}>{consumables || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Class:</Text>
                <Text styles={styles.value}>{vehicle_class || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Pilots:</Text>
                <Text styles={styles.value}>{pilots?.length || 'N/A'}</Text>
              </View>
            </View>
          </CollapseBody>
        </Collapse>
      );
    } else if (type === 'Starships') {
      const {
        name,
        model,
        manufacturer,
        cost_in_credits,
        length,
        max_atmosphering_speed,
        crew,
        passengers,
        cargo_capacity,
        consumables,
        hyperdrive_rating,
        MGLT,
        starship_class,
        pilots,
        films,
        created,
        edited,
        url,
      } = item;
      return (
        <Collapse>
          <CollapseHeader>
            <Text>{name}</Text>
          </CollapseHeader>
          <CollapseBody>
            <View key={name} style={styles.details}>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Model:</Text>
                <Text styles={styles.value}>{model || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Manufacturer:</Text>
                <Text styles={styles.value}>{manufacturer || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Cost:</Text>
                <Text styles={styles.value}>{cost_in_credits || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Length:</Text>
                <Text styles={styles.value}>{length || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Max Speed:</Text>
                <Text styles={styles.value}>
                  {max_atmosphering_speed || 'N/A'}
                </Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Crew:</Text>
                <Text styles={styles.value}>{crew || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Passengers:</Text>
                <Text styles={styles.value}>{passengers || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Cargo Capacity:</Text>
                <Text styles={styles.value}>{cargo_capacity || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Consumables:</Text>
                <Text styles={styles.value}>{consumables || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Hyperdrive Rating:</Text>
                <Text styles={styles.value}>{hyperdrive_rating || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>MGLT:</Text>
                <Text styles={styles.value}>{MGLT || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Class:</Text>
                <Text styles={styles.value}>{starship_class || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Pilots:</Text>
                <Text styles={styles.value}>{pilots?.length || 'N/A'}</Text>
              </View>
            </View>
          </CollapseBody>
        </Collapse>
      );
    } else if (type === 'Films') {
      const {
        title,
        episode_id,
        opening_crawl,
        director,
        producer,
        release_date,
      } = item;
      return (
        <Collapse>
          <CollapseHeader>
            <Text>{title}</Text>
          </CollapseHeader>
          <CollapseBody>
            <View key={title} style={styles.details}>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Episode ID:</Text>
                <Text styles={styles.value}>{episode_id || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Opening Crawl:</Text>
                <Text styles={styles.value}>{opening_crawl || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Director:</Text>
                <Text styles={styles.value}>{director || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Producer:</Text>
                <Text styles={styles.value}>{producer || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Release Date:</Text>
                <Text styles={styles.value}>{release_date || 'N/A'}</Text>
              </View>
            </View>
          </CollapseBody>
        </Collapse>
      );
    } else if (type === 'Species') {
      const {name, classification, designation, average_height, language} =
        item;
      return (
        <Collapse>
          <CollapseHeader>
            <Text>{name}</Text>
          </CollapseHeader>
          <CollapseBody>
            <View key={name} style={styles.details}>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Classification:</Text>
                <Text styles={styles.value}>{classification || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Designation:</Text>
                <Text styles={styles.value}>{designation || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Average Height:</Text>
                <Text styles={styles.value}>{average_height || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key2}>Language:</Text>
                <Text styles={styles.value}>{language || 'N/A'}</Text>
              </View>
            </View>
          </CollapseBody>
        </Collapse>
      );
    }
  });

  return isLoading ? (
    <View style={styles.centerLoader}>
      <ActivityIndicator color="lightblue" size="large" />
      <Text style={styles.loaderText}>Finding {type} around Endor...</Text>
    </View>
  ) : (
    <FlatList
      data={mapData}
      renderItem={({item}) => <View style={styles.item}>{item}</View>}
    />
  );
};

export default ScreenBase;

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  itemText: {
    fontWeight: 'bold',
  },
  centerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderText: {
    marginTop: 10,
  },
  details: {
    padding: 10,
  },

  itemDetail: {
    flexDirection: 'row',
  },
  key: {
    fontWeight: 'bold',
    width: 80,
  },
  key2: {
    fontWeight: 'bold',
    width: 120,
  },
  value: {
    fontWeight: 'normal',
  },
});