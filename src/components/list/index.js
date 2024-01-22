const { View, FlatList } = require('react-native');
const { styles } = require('../Lab3_1/styles');

const DATA =[
  {
    id: '1',
    title: 'Data Structures',
    imageSource: require('../../assets/images/messi.jpg'),
  },
  {
    id: '2',
    title: 'Java',
    imageSource: require('../../assets/images/messi.jpg'),
  },
  {
    id: '3',
    title: 'Python',
    imageSource: require('../../assets/images/messi.jpg'),
  },
  {
    id: '4',
    title: 'C++',
    imageSource: require('../../assets/images/messi.jpg'),
  },
  {
    id: '5',
    title: 'Web',
    imageSource: require('../../assets/images/messi.jpg'),
  },
  {
    id: '6',
    title: 'Kotlin',
    imageSource: require('../../assets/images/messi.jpg'),
  },
  {
    id: '7',
    title: 'C',
    imageSource: require('../../assets/images/messi.jpg'),
  },
];
const Item = ({title, imageSource}) => {
  return (
    <View style={styles.item}>
      <Image source={imageSource} style={styles.avatar}> </Image>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
const renderItem =({item}) =>(
  <Item imageSource={item.imageSource} title={item.title}/>
);
const ListCourse = () => {
  return(
    <View style={styles.container}>
      <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
    </View>
  );
};
export default React.memo(ListCourse);