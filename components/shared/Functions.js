import React from 'react'
import { View, Text } from 'react-native'
import { List } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

export const Accordion = ({data}) => {
    const [accordionExpanded, setAccordionExpanded] = React.useState(0)

    return (
        <View style={{backgroundColor: 'white'}}>
            <List.Section style={{marginVertical: 0, paddingHorizontal: 10}}>
                {
                    data.map((item, index) => 
                        <List.Accordion title={item.title} 
                            expanded={accordionExpanded == index} 
                            style={{backgroundColor: 'white', borderTopWidth: 1, borderTopColor: 'rgb(230,230,230)'}}
                            titleStyle={{color: '#372AA4', fontWeight: 'bold', fontSize: 15}}
                            onPress={() => setAccordionExpanded(index)}
                            id={index}
                            right={() => <AntDesign name="plus" size={13} color="black" />}
                            key={index}>
                            <List.Item 
                                title={() => 
                                        <View>
                                            <Text>
                                                {item.text}
                                            </Text>
                                        </View>
                                    } 
                                style={{backgroundColor: 'white'}}
                            />
                        </List.Accordion>)
                }
                
                
            </List.Section >
        </View>
    )
}