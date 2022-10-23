import { View, FlatList, Platform } from "react-native";
import React from "react";

const Space = () => {
	return <View style={{ marginLeft: 15 }} />
}

export default Carousel = ({ data, renderItem }) => {
	return (
		<View>
			<FlatList
				horizontal={true}
				data={data}
				renderItem={renderItem}
				showsHorizontalScrollIndicator={false}
				ItemSeparatorComponent={Space}
			/>
		</View>
	);
};
