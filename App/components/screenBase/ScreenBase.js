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
            <Text style={styles.group}>{name}</Text>
          </CollapseHeader>
          <CollapseBody>
            <View key={name} style={styles.details}>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Height:</Text>
                <Text style={styles.value}>{height || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Birth Year:</Text>
                <Text style={styles.value}>{birth_year || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Films:</Text>
                <Text style={styles.value}>{films?.length || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Cars:</Text>
                <Text style={styles.value}>{vehicles?.length || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Starships:</Text>
                <Text style={styles.value}>{starships?.length || 'N/A'}</Text>
              </View>
            </View>
          </CollapseBody>
        </Collapse>
      );
    } else if (type === 'Planets') {
      const {name, diameter, climate, gravity, terrain, population} = item;
      return (
        <Collapse>
          <CollapseHeader>
            <Text style={styles.group}>{name}</Text>
          </CollapseHeader>
          <CollapseBody>
            <View key={name} style={styles.details}>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Diameter:</Text>
                <Text style={styles.value}>{diameter || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Climate:</Text>
                <Text style={styles.value}>{climate || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Gravity:</Text>
                <Text style={styles.value}>{gravity || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Terrain:</Text>
                <Text style={styles.value}>{terrain || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Population:</Text>
                <Text style={styles.value}>{population || 'N/A'}</Text>
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
            <Text style={styles.group}>{name}</Text>
          </CollapseHeader>
          <CollapseBody>
            <View key={name} style={styles.details}>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Model:</Text>
                <Text style={styles.value}>{model || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Manufacturer:</Text>
                <Text style={styles.value}>{manufacturer || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Cost:</Text>
                <Text style={styles.value}>{cost_in_credits || 'N/A'}</Text>
              </View>

              <View style={styles.itemDetail}>
                <Text style={styles.key}>Max Speed:</Text>
                <Text style={styles.value}>
                  {max_atmosphering_speed || 'N/A'}
                </Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Crew:</Text>
                <Text style={styles.value}>{crew || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Passengers:</Text>
                <Text style={styles.value}>{passengers || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Cargo Capacity:</Text>
                <Text style={styles.value}>{cargo_capacity || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Consumables:</Text>
                <Text style={styles.value}>{consumables || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Class:</Text>
                <Text style={styles.value}>{vehicle_class || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Pilots:</Text>
                <Text style={styles.value}>{pilots?.length || 'N/A'}</Text>
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
            <Text style={styles.group}>{name}</Text>
          </CollapseHeader>
          <CollapseBody>
            <View key={name} style={styles.details}>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Model:</Text>
                <Text style={styles.value}>{model || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Manufacturer:</Text>
                <Text style={styles.value}>{manufacturer || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Cost:</Text>
                <Text style={styles.value}>{cost_in_credits || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Length:</Text>
                <Text style={styles.value}>{length || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Max Speed:</Text>
                <Text style={styles.value}>
                  {max_atmosphering_speed || 'N/A'}
                </Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Crew:</Text>
                <Text style={styles.value}>{crew || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Passengers:</Text>
                <Text style={styles.value}>{passengers || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Cargo Capacity:</Text>
                <Text style={styles.value}>{cargo_capacity || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Consumables:</Text>
                <Text style={styles.value}>{consumables || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Hyperdrive Rating:</Text>
                <Text style={styles.value}>{hyperdrive_rating || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>MGLT:</Text>
                <Text style={styles.value}>{MGLT || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Class:</Text>
                <Text style={styles.value}>{starship_class || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Pilots:</Text>
                <Text style={styles.value}>{pilots?.length || 'N/A'}</Text>
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
            <Text style={styles.group}>{title}</Text>
          </CollapseHeader>
          <CollapseBody>
            <View key={title} style={styles.details}>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Episode ID:</Text>
                <Text style={styles.value}>{episode_id || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Opening Crawl:</Text>
                <Text style={styles.value}>{opening_crawl || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Director:</Text>
                <Text style={styles.value}>{director || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Producer:</Text>
                <Text style={styles.value}>{producer || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Release Date:</Text>
                <Text style={styles.value}>{release_date || 'N/A'}</Text>
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
            <Text style={styles.group}>{name}</Text>
          </CollapseHeader>
          <CollapseBody>
            <View key={name} style={styles.details}>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Classification:</Text>
                <Text style={styles.value}>{classification || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Designation:</Text>
                <Text style={styles.value}>{designation || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Average Height:</Text>
                <Text style={styles.value}>{average_height || 'N/A'}</Text>
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.key}>Language:</Text>
                <Text style={styles.value}>{language || 'N/A'}</Text>
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
    color: '#000',
  },
  key: {
    fontWeight: 'bold',
    width: 110,
    color: '#000',
  },

  value: {
    color: '#000',
  },
  group: {
    fontWeight: 'bold',
    color: '#000',
  },
});
