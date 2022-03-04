import React from 'react'
import { View, Text, FlatList, TextInput, StyleSheet, 
    Dimensions, Image, } from 'react-native'
import { Formik } from 'formik';
import { Button, Overlay, } from 'react-native-elements';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const screensize = Dimensions.get('window').width
const carouselWidth = screensize / 3.2
function SuggestFeature (props) {
    const formikRef = React.useRef(null);
    const [modalVisible, setModalVisible] = React.useState(false)

    const carouselData = [
        {
            image: '../../assets/res/blushing.jpg',
            item: 'you'
        },
        {
            image: '../../assets/res/blushing.jpg',
            item: 'you'
        },
        {
            image: '../../assets/res/blushing.jpg',
            item: 'you'
        },
        {
            image: '../../assets/res/blushing.jpg',
            item: 'you'
        },
        
    ]
    const _renderItem = ({item, index}) => {
        return (
            <View style={styles.slides} key={index}>
                <View style={styles.slideInnerContainer}>
                    <Image source={require('../../assets/res/card.jpg')} 
                        style={{width: (carouselWidth - 20), 
                            height: (carouselWidth - 20), }} />
                    <View style={styles.removeButton}>
                        <MaterialCommunityIcons name="close" size={10} color="white" />
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={{flex: 1, backgroundColor: 'rgb(230,230,230)'}}>
            <FlatList data={[[]]} keyExtractor={() => 1} 
             renderItem={() => 
                <View>
                    <Formik
                        innerRef={ref => formikRef.current = ref}
                        initialValues={{ email: '' }}
                        onSubmit={values => console.log(values)}>

                    {({ handleChange, handleBlur, handleSubmit, values }) => (

                    <View>
                        <View style={{paddingHorizontal: 20, backgroundColor: 'white'}}>
                            <View style={{paddingTop: 30}}>
                                <View style={{marginBottom: 10}}>
                                    <Text style={{fontSize: 15, fontWeight: '500'}}>
                                        Give your feature a title
                                    </Text>
                                </View>
                                <TextInput
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    placeholder="Enter feature name"
                                    style={{height: 50, borderWidth: 1, 
                                        borderColor: '#DEE2E6', borderRadius: 10,
                                        paddingHorizontal: 16
                                    }}
                                    
                                    
                                    />
                            </View>

                            <View style={{paddingTop: 30}}>
                                <View style={{marginBottom: 10}}>
                                    <Text style={{fontSize: 15, fontWeight: '500'}}>
                                        What kind of feature is this?
                                    </Text>
                                </View>
                                <TextInput
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    placeholder="e.g Payment"
                                    style={{height: 50, borderWidth: 1, 
                                        borderColor: '#DEE2E6', borderRadius: 10,
                                        paddingHorizontal: 16
                                    }}
                                    
                                    
                                    />
                            </View>

                            <View style={{paddingTop: 30, marginBottom: 30}}>
                                <View style={{marginBottom: 10}}>
                                    <Text style={{fontSize: 15, fontWeight: '500'}}>
                                        Tell us more about this feature
                                    </Text>
                                </View>
                                <TextInput
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    placeholder="Type a description"
                                    style={{height: 117, borderWidth: 1, 
                                        borderColor: '#DEE2E6', borderRadius: 10,
                                        padding: 16, textAlignVertical: 'top',
                                        
                                    }}
                                    
                                    
                                    
                                    />
                            </View>

                        </View>

                        

                        <View style={{justifyContent: 'center', display: 'flex', 
                            flexDirection: 'row', marginTop: 120}}>
                            <Button
                                title="Complete"
                                buttonStyle={{
                                    backgroundColor: '#372AA4',
                                    borderRadius: 10,
                                    height: 50,
                                    width: 235
                                }}
                                titleStyle={{fontSize: 14}}
                                onPress={() => setModalVisible(true)}
                            />
                        </View>



                    </View>

                    )}

                    </Formik>

                </View>
            } />

        <Overlay isVisible={modalVisible} 
            onBackdropPress={() => setModalVisible(false)}
            overlayStyle={{width: '80%', borderRadius: 15, paddingBottom: 30}}
            backdropStyle={{backgroundColor: 'rgba(200,200,200,0.7)'}}>
            <View style={{position: 'relative', height: 60,}}>
                <View style={styles.checkOuterContainer}>
                    <View style={styles.checkContainer}>
                        <Feather name="check-square" size={46} color="#A0DDFF" />
                    </View>
                </View>
            </View>
            <View>
                <Text style={{fontSize: 20, fontWeight: '700', textAlign: 'center'}}>
                    Suggestion sent!
                </Text>
            </View>
            <View style={{paddingHorizontal: 10}}>
                <Text style={{textAlign: 'center', fontSize: 14, lineHeight: 20, color: '#7A869A'}}>
                    Awesome! We’ll share your suggestion with other users to vote on. 
                    The highest voted features would be reviewed by the Cauli team
                </Text>
            </View>

            <View style={{marginTop: 25, alignItems: 'center', display: 'flex', }}>
                <Button
                    title="Go to home"
                    buttonStyle={{
                        backgroundColor: '#372AA4',
                        borderRadius: 10,
                        height: 50,
                        width: 235
                    }}
                    titleStyle={{fontSize: 14}}
                    onPress={() => props.navigation.navigate('Home')}
                />

            </View>
        </Overlay>

        
        </View>
    )
}

const styles = StyleSheet.create({
    checkContainer: {
        backgroundColor: '#E0FFFF', 
        width: 80, 
        height: 80,
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkOuterContainer: {
        position: 'absolute',
        top: -25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
})

export default React.memo(SuggestFeature)