import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions} from 'react-native'
import { Card } from 'react-native-elements'
import { MaterialIcons, Foundation } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width
const cardHeight = screenWidth / 2.4
function Home (props) {
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <FlatList data={[[]]} renderItem={() => 
                <View style={styles.container}>
                    <View style={{marginBottom: 20}}>
                        <Text style={{textAlign: 'center', fontSize: 30}}>FAQ</Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
    
                        <View style={styles.cardExternalContainer} 
                            onTouchEnd={()=>props.navigation.navigate('GeneralPage', {
                                page: 'general',
                                title: 'General'
                            })}>
                            <Card containerStyle={[styles.cardContainerStyle, styles.cardContainer1]} wrapperStyle={{}}>
                                <TouchableOpacity
                                    style={{
                                    position: "relative",
                                    alignItems: "center"
                                    }}>
                                    <MaterialIcons name="donut-large" size={35} color="white" 
                                        style={{marginBottom: 10}} />
                                    <Text style={{fontSize: 15, color: 'white'}}>General</Text>
                                </TouchableOpacity>
                            </Card>
                        </View>
    
                        <View style={styles.cardExternalContainer}
                            onTouchEnd={()=>props.navigation.navigate('GeneralPage', {
                                page: 'safety',
                                title: 'Safety and Security'
                            })}>
                            <Card containerStyle={[styles.cardContainerStyle, styles.cardContainer2]} wrapperStyle={{}}>
                                <TouchableOpacity
                                    style={{
                                    position: "relative",
                                    alignItems: "center"
                                    }}>
                                        <Foundation name="shield" size={35} color="white" style={{marginBottom: 10}} />
                                        <Text style={{fontSize: 15, color: 'white'}}>Safety and Security</Text>
                                        
                                    
                                </TouchableOpacity>
                            </Card>
                        </View>
    
                        <View style={styles.cardExternalContainer}
                            onTouchEnd={()=>props.navigation.navigate('GeneralPage', {
                                page: 'products',
                                title: 'Products'
                            })}>
                            <Card containerStyle={[styles.cardContainerStyle, styles.cardContainer3]} wrapperStyle={{}}>
                                <TouchableOpacity
                                    style={{
                                    position: "relative",
                                    alignItems: "center"
                                    }}>
                                        <MaterialIcons name="dashboard" size={35} color="white" style={{marginBottom: 10}} />
                                        <Text style={{fontSize: 15, color: 'white'}}>Products</Text>
                                        
                                    
                                </TouchableOpacity>
                            </Card>
                        </View>
    
                        <View style={styles.cardExternalContainer}
                            onTouchEnd={()=>props.navigation.navigate('GeneralPage', {
                                page: 'charges',
                                title: 'Fees and Charges'
                            })}>
                            <Card containerStyle={[styles.cardContainerStyle, styles.cardContainer4]} wrapperStyle={{}}>
                                <TouchableOpacity
                                    style={{
                                    position: "relative",
                                    alignItems: "center"
                                    }}>
                                        <Foundation name="dollar" size={35} color="white" 
                                        style={{marginBottom: 10}} />
                                        <Text style={{fontSize: 15, color: 'white'}}>Fees and Charges</Text>
                                        
                                    
                                </TouchableOpacity>
                            </Card>
                        </View>
    
                    </View>
    
                    
                </View>} 
            keyExtractor={item => 1} 
            style={{backgroundColor: 'white'}}
            />

            <View style={{marginTop: 60, paddingHorizontal: 15, paddingBottom: 15}}>
                <View style={[styles.extra, {backgroundColor: 'rgb(10,180,190)'}]} onTouchEnd={() => props.navigation.navigate('SuggestFeature')}>
                    <TouchableOpacity style={styles.extraInner}>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                            Suggest a feature
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.extra, {backgroundColor: 'rgb(190,20,10)'}]} onTouchEnd={() => props.navigation.navigate('ReportIssue')}>
                    <TouchableOpacity style={styles.extraInner}>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                            Report an issue
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    cardExternalContainer: {
        width: '50%', 
        marginBottom: 10
    },
    cardContainerStyle: {
        elevation: 15,
        borderRadius: 10,
        height: cardHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardContainer1: {
        borderColor: '#372AA4',
        backgroundColor: '#372AA4',
    },
    cardContainer2: {
        borderColor: '#28AFB0',
        backgroundColor: '#28AFB0',
    },
    cardContainer3: {
        borderColor: '#8E83F1',
        backgroundColor: '#8E83F1',
    },
    cardContainer4: {
        borderColor: '#EF7970',
        backgroundColor: '#EF7970',
    },
    extra: {
        elevation: 5,  
        borderRadius: 10, 
        marginBottom: 10,
    },
    extraInner: {
        paddingHorizontal: 20, 
        paddingVertical: 15,
    }
})

export default React.memo(Home)