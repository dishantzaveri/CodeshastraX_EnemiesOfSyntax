import React from 'react'
import {
    View,
    Text,StyleSheet,Image
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ResumeBuilder from '../components/ResumeBuilder';
import MyResume from '../components/MyResume';


const Tab = createMaterialTopTabNavigator();

export default function Resume() {
    const insets = useSafeAreaInsets();
    return (
         <SafeAreaView style={styles.container}>
            {/* <View></View> */}
            <Tab.Navigator
                initialRouteName="Resume Builder"
                screenOptions={{
                    activeTintColor: "#f58084",
                    labelStyle: { fontSize: 11 },
                    style: { backgroundColor: "#f58084", marginTop: insets.top },
                tabBarActiveTintColor: "#f58084",
                tabBarInactiveTintColor: "#000000",
                tabBarShowLabel: true,
                
                tabBarLabelStyle: {
                  fontSize: 12,
                
                }
                }}
            >
                <Tab.Screen
                    name="ResumeBuilder"
                    component={ResumeBuilder}
                    options={{ tabBarLabel: "Resume Builder" }}
                />
                <Tab.Screen
                    name="MyResume"
                    component={MyResume}
                    options={{ tabBarLabel: "My Resume" }}
                />

            </Tab.Navigator>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 20,
        letterSpacing: 1,
        color: '#000000',
    },
    icon: {
        fontSize: 25,
        position: 'absolute',
        left: 10,
    },
    title1: {
        fontSize: 13,
        textAlign: 'center',
        color: '#f58084',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
});