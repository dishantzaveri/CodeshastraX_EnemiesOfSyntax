import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
// import ProgressCircle from 'react-native-progress-circle';
import * as Progress from 'react-native-progress';



const CourseList = ({ img, title, bg, onPress,time }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                flexDirection: "row",
                backgroundColor: bg,
                padding: 20,
                marginHorizontal: 20,
                borderRadius: 20,
                alignItems: "center",
                marginTop: 10
            }}
        >
            <Image
                source={img}
                style={{ width: 40, height: 40 }}
            />

            <View>
                <Text style={{
                    color: "#345c74",
                    fontFamily: "Bold",
                    fontSize: 13,
                    paddingHorizontal: 20,
                    width: 170
                }}>{title}</Text>
                <Text style={{
                    color: "#f58084",
                    fontFamily: "Medium",
                    fontSize: 12,
                    paddingHorizontal: 20
                }}>
                    10 hours, 19 lessons
                </Text>
            </View>
            <Text style={{
                color: "#345c74",
                fontFamily: "Medium",
                fontSize: 13,
                paddingLeft: 10,
                paddingRight: 10
            }}>
                25%
            </Text>
            {/* <ProgressCircle
                percent={30}
                radius={17}
                borderWidth={1.5}
                color="f580084"
                shadowColor="#FFF"
                bgColor="#FFF"
            >
                <Image
                    source={require('../images/pl.png')}
                />
            </ProgressCircle> */}
            {/* <Progress.Bar progress={0.3} width={200} />
            <Progress.Pie progress={0.4} size={50} />
            <Progress.Circle size={30} indeterminate={true} /> */}
            <Progress.CircleSnail color={['red', 'green', 'blue']} />

        </TouchableOpacity>
    );
};

export default CourseList;
