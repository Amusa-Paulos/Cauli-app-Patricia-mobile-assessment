import React from 'react'
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons, Foundation, Entypo } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements';
import { Accordion } from '../shared/Functions';

function GeneralPage (props) {
    const routeParams = props.route.params

    const maskBackgroundColor = {
        general: {backgroundColor: '#372AA4'},
        safety: {backgroundColor: '#28AFB0'},
        products: {backgroundColor: '#8E83F1'},
        charges: {backgroundColor: '#EF7970'},
    }
    const accordionData = [
        {
            title: 'What is Cauli?',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
                    'eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                    'Ut enim ad minim veniam,'
        },
        {
            title: 'Why should I buy giftcards on Cauli?',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
                    'eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                    'Ut enim ad minim veniam,'
        },
        {
            title: 'What is Cauli?',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
                    'eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                    'Ut enim ad minim veniam,'
        },
        {
            title: 'What is Cauli?',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
                    'eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                    'Ut enim ad minim veniam,'
        },
        {
            title: 'What is Cauli?',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
                    'eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                    'Ut enim ad minim veniam,'
        },
    ]
    return (
        <View style={{flex: 1}}>
            <FlatList 
                data={[[]]} 
                keyExtractor={() => 1} 
                renderItem={() => 
                    <View>
                        <View style={[styles.mask, maskBackgroundColor[routeParams.page]]}>
                            <View style={{position: 'absolute', bottom: 8, flexDirection: 'row'}}>
                                {
                                    [1,2,3,4,5,6].map((t,i) => 
                                    <View style={{width: 80, height: 80, 
                                        backgroundColor: `rgba(255,255,255,${i%2 != 0 ? '0' : '0.1'})`, 
                                        borderTopRightRadius: 70}} key={i}></View> )
                                }                                                               
                            </View>
                            <View style={{flexDirection: 'row', zIndex: +999, alignItems: 'center'}}>
                                <MaterialIcons name="donut-large" size={35} color="white" />
                                <Text style={styles.maskText}>{routeParams.title}</Text>
                            </View>
                        </View>

                        <Accordion data={accordionData} />

                        <View style={{paddingHorizontal: 10, marginTop: 10, marginBottom: 10}}>
                            <View style={{backgroundColor: 'white', paddingHorizontal: 15, 
                                paddingVertical: 15, borderRadius: 8}}>
                                <View style={{flexDirection: 'row', 
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                    }}>
                                    <Text style={{fontWeight: 'bold'}}>Was this information helpful?</Text>
                                    <MaterialCommunityIcons name="close" size={13} color="black" />
                                </View>
                                <View style={{marginTop: 10, display: 'flex', flexDirection: 'row',
                                    alignItems: 'center', justifyContent: 'space-between'}}>
                                    <View style={{width: '45%', backgroundColor: '#F4F5F7', 
                                        display: 'flex', justifyContent: 'center', flexDirection: 'row', 
                                        paddingVertical: 7, borderRadius: 8, alignItems: 'center'}}>
                                        <Image source={require('../../assets/res/blushing.png')}
                                            style={{width: 12, height: 12}} />
                                        <Text style={{marginHorizontal: 10, fontSize: 12}}>Yes</Text>
                                    </View>
                                    <View style={{width: '45%', backgroundColor: '#F4F5F7', 
                                        display: 'flex', justifyContent: 'center', flexDirection: 'row', 
                                        paddingVertical: 7, borderRadius: 8, alignItems: 'center'}}>
                                        <Image source={require('../../assets/res/angry.png')}
                                            style={{width: 12, height: 12}} />
                                        <Text style={{marginHorizontal: 10, fontSize: 12}}>No</Text>
                                    </View>

                                </View>
                            </View>
                        </View>

                        <View style={{marginVertical: 10, marginHorizontal: 10}}>
                            <View>
                                <Text style={{fontSize: 15, fontWeight: '700'}}>Other categories</Text>
                            </View>
                        </View>

                        <View style={{paddingHorizontal: 10}}>
                            {routeParams.page != 'general' && <View style={{marginBottom: 10}}>
                                <TouchableOpacity>
                                    <ListItem containerStyle={{height: 68, borderRadius: 8}}>
                                        <MaterialIcons name="donut-large" size={30} color="#372AA4" />
                                        <ListItem.Content>
                                            <ListItem.Title style={{fontWeight: '400'}}>
                                                General
                                            </ListItem.Title>
                                        </ListItem.Content>
                                        <ListItem.Content right>
                                            <ListItem.Title right style={{ color: 'green' }}>
                                                <Entypo name="chevron-thin-right" size={12} color="#637381" />
                                            </ListItem.Title>
                                        </ListItem.Content>
                                    </ListItem>
                                </TouchableOpacity>
                            </View>}

                            {routeParams.page != 'safety' && <View style={{marginBottom: 10}}>
                                <TouchableOpacity>
                                    <ListItem containerStyle={{height: 68, borderRadius: 8}}>
                                        <Foundation name="shield" size={33} color="#28AFB0" />
                                        <ListItem.Content>
                                            <ListItem.Title style={{fontWeight: '400'}}>
                                                Safety and Security
                                            </ListItem.Title>
                                        </ListItem.Content>
                                        <ListItem.Content right>
                                            <ListItem.Title right style={{ color: 'green' }}>
                                                <Entypo name="chevron-thin-right" size={12} color="#637381" />
                                            </ListItem.Title>
                                        </ListItem.Content>
                                    </ListItem>
                                </TouchableOpacity>
                            </View>}
                            
                            {routeParams.page != 'products' && <View style={{marginBottom: 10}}>
                                <TouchableOpacity>
                                    <ListItem containerStyle={{height: 68, borderRadius: 8}}>
                                    <MaterialIcons name="dashboard" size={27} color="#8E83F1"/>
                                        <ListItem.Content>
                                            <ListItem.Title style={{fontWeight: '400'}}>
                                                Products
                                            </ListItem.Title>
                                        </ListItem.Content>
                                        <ListItem.Content right>
                                            <ListItem.Title right style={{ color: 'green' }}>
                                                <Entypo name="chevron-thin-right" size={12} color="#637381" />
                                            </ListItem.Title>
                                        </ListItem.Content>
                                    </ListItem>
                                </TouchableOpacity>
                            </View>}
                            
                            {routeParams.page != 'charges' && <View style={{marginBottom: 10}}>
                                <TouchableOpacity>
                                    <ListItem containerStyle={{height: 68, borderRadius: 8}}>
                                    <Foundation name="dollar" size={35} color="#EF7970" />
                                        <ListItem.Content>
                                            <ListItem.Title style={{fontWeight: '400'}}>
                                                Fees and Charges
                                            </ListItem.Title>
                                        </ListItem.Content>
                                        <ListItem.Content right>
                                            <ListItem.Title right style={{ color: 'green' }}>
                                                <Entypo name="chevron-thin-right" size={12} color="#637381" />
                                            </ListItem.Title>
                                        </ListItem.Content>
                                    </ListItem>
                                </TouchableOpacity>
                            </View>}

                        </View>

                        

                    </View>
                }
                style={{flex: 1, }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    mask: {
        height: 58,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        position: 'relative'
    },
    maskText: {
        marginHorizontal: 10, 
        color: 'white', 
        fontSize: 20, 
        fontWeight: '700'
    }
})

export default React.memo(GeneralPage)