/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const DrawerContent = (props) => {
    return (
        <View>
            <TouchableOpacity onPress={props.navigation.navigate('Profile')}>
                <Text>Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DrawerContent
