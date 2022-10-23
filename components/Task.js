import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Task(props) {
	const [done, setDone] = useState(false);

	const completeTask = (index) => {
		setDone(!done);
	};

	return (
		<View style={{ paddingHorizontal: 5, flexDirection: 'row', backgroundColor: '#87CEEB', height: 80, width: "100%", alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
			<View style={{
				flexDirection: 'row',
				alignItems: 'center',
				flexWrap: 'wrap',
				width: '80%'
			}}>
				<TouchableOpacity onPress={completeTask} style={{ width: '20%' }}>
					{done ? (
						<MaterialCommunityIcons
							name="checkbox-marked-outline"
							size={30}
							color="black"
						/>
					) : (
						<MaterialCommunityIcons
							name="checkbox-blank-outline"
							size={30}
							color="black"
						/>
					)}
				</TouchableOpacity>
				<Text style={
					done ? { width: '60%', fontSize: 15, fontWeight: '500', textDecorationLine: 'line-through', color: '#999' } :
						{ width: '60%', fontSize: 15, fontWeight: '500' }
				}
					numberOfLines={3}
					ellipsizeMode={"tail"}
				>
					{props.text}
				</Text>
			</View>
			<TouchableOpacity onPress={() => { }} style={{ width: '10%' }}>
				<MaterialIcons name="delete" size={24} color="black" />
			</TouchableOpacity>
		</View>
	)
}