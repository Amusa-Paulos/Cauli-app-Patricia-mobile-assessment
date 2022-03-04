import React from 'react'
import { View, Text, FlatList, TextInput, StyleSheet, 
    TouchableOpacity, Dimensions, Image } from 'react-native'
import { Formik } from 'formik';
import { Button, BottomSheet, ListItem, } from 'react-native-elements';
import { FontAwesome, MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';

const screensize = Dimensions.get('window').width
const carouselContainerWidth = screensize - 30
const carouselWidth = screensize / 3.2
function ReportIssue (props) {
    const formikRef = React.useRef(null);
    const [attachScreenShotClicked, setAttachScreenShotClicked] = React.useState(false)
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
                                    <Text style={{fontSize: 15, fontWeight: '500'}}>What issue are you reporting?</Text>
                                </View>
                                <TextInput
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    placeholder="Tell us what happened"
                                    style={{height: 50, borderWidth: 1, 
                                        borderColor: '#DEE2E6', borderRadius: 10,
                                        paddingHorizontal: 16
                                    }}
                                    
                                    
                                    />
                            </View>

                            <View style={{paddingTop: 30, marginBottom: 30}}>
                                <View style={{marginBottom: 10}}>
                                    <Text style={{fontSize: 15, fontWeight: '500'}}>
                                        Anything else you would like us to know?
                                    </Text>
                                </View>
                                <TextInput
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    placeholder="Any extra information to describe the issue"
                                    style={{height: 117, borderWidth: 1, 
                                        borderColor: '#DEE2E6', borderRadius: 10,
                                        padding: 16, textAlignVertical: 'top',
                                        
                                    }}
                                    
                                    
                                    
                                    />
                            </View>

                        </View>

                        <View style={styles.screenshotsContainer} onTouchEnd={() => setAttachScreenShotClicked(true)}>
                            {!attachScreenShotClicked ?
                                <TouchableOpacity style={{flexDirection: 'row', 
                                    display: 'flex', alignItems: 'center'}}>
                                    <FontAwesome name="camera" size={17} color="#372AA4" />
                                    <Text style={{color: '#372AA4', fontSize: 15, 
                                        fontWeight: '500', marginHorizontal: 10}}>
                                        Attach screenshot
                                    </Text>
                                </TouchableOpacity> :
                            
                                <View style={{width: '100%'}}>
                                    <View style={{paddingVertical: 15, display: 'flex', borderBottomWidth: 1,
                                        flexDirection: 'row', justifyContent: 'space-between',
                                        borderBottomColor: '#dddddd'
                                        }}>
                                        <View>
                                            <Text style={{fontSize: 14, fontWeight: '700'}}>Images</Text>
                                        </View>
                                        <TouchableOpacity style={{flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
                                            <FontAwesome name="camera" size={15} color="#6C757D" />
                                            <Text style={{color: '#6C757D', fontSize: 12, 
                                                fontWeight: '500', marginHorizontal: 10}}>
                                                Add screenshot
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                    <Carousel
                                        data={carouselData}
                                        renderItem={_renderItem}
                                        sliderWidth={carouselContainerWidth}
                                        itemWidth={carouselWidth}
                                        activeSlideAlignment={'start'}
                                        inactiveSlideScale={1}
                                        inactiveSlideOpacity={1}
                                    />
                                    </View>

                                </View>
                            }

                        </View>

                        <View style={{justifyContent: 'center', display: 'flex', flexDirection: 'row'}}>
                            <Button
                                title="Submit"
                                buttonStyle={{
                                    backgroundColor: '#372AA4',
                                    borderRadius: 10,
                                    height: 50,
                                    width: 235
                                }}
                                onPress={() => setModalVisible(true)}
                            />
                        </View>



                    </View>

                    )}

                    </Formik>

                </View>
            } />

        <BottomSheet modalProps={{}} 
            isVisible={modalVisible}
            containerStyle={{backgroundColor: 'rgba(200,200,200, 0.7)'}}>
                <ListItem
                    containerStyle={{borderTopRightRadius: 24, borderTopLeftRadius: 24}}
                    onPress={() => setModalVisible(false)}
                >
                    <ListItem.Content style={{display: 'flex', alignItems: 'center', marginVertical: 10}}>
                        <ListItem.Title style={{textAlign: 'center', fontWeight: '700', fontSize: 16}}>
                            What issue would you like to resolve?
                        </ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <View style={{paddingHorizontal: 20, paddingBottom: 20, backgroundColor: 'white'}}>
                    <TouchableOpacity>
                        <ListItem bottomDivider>
                            <Feather name="activity" size={18} color="#372AA4" />
                            <ListItem.Content>
                                <ListItem.Title style={{fontSize: 15}}>
                                    Report suspicious activity
                                </ListItem.Title>
                            </ListItem.Content>                        
                        </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ListItem bottomDivider>
                            <Ionicons name="warning" size={18} color="#372AA4" />
                            <ListItem.Content>
                                <ListItem.Title style={{fontSize: 15}}>
                                    Report a problem
                                </ListItem.Title>
                            </ListItem.Content>                        
                        </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ListItem bottomDivider>
                            <Feather name="alert-octagon" size={18} color="#372AA4" />
                            <ListItem.Content>
                                <ListItem.Title style={{fontSize: 15}}>
                                    Other
                                </ListItem.Title>
                            </ListItem.Content>                        
                        </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <ListItem>
                            <ListItem.Content style={{fontSize: 15, textAlign: 'center', 
                                        display: 'flex', alignItems: 'center'}}>
                                <ListItem.Title>
                                    <Text>Cancel</Text>
                                </ListItem.Title>
                            </ListItem.Content>                        
                        </ListItem>
                    </TouchableOpacity>
                </View>
        </BottomSheet>
        </View>
    )
}

const styles = StyleSheet.create({
    screenshotsContainer: {
        backgroundColor: 'white', marginTop: 20, 
        marginBottom: 60, 
        minHeight: 79, 
        paddingHorizontal: 20, 
        display: 'flex',
        alignItems: 'center', 
        flexDirection: 'row',
    },
    wrapper: {
        backgroundColor: 'red',
        height: 92,
    },
    slides: {
        height: carouselWidth,
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    slideInnerContainer: {
        width: (carouselWidth - 20), 
        height: (carouselWidth - 20), 
        position: 'relative'
    },
    removeButton: {
        position: 'absolute',
        top: -7,
        right: -7,
        width: 15,
        height: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#362aa4',
        borderRadius: 5
    }
})

export default React.memo(ReportIssue)