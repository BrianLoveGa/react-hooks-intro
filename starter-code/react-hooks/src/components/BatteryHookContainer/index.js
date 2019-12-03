// Update the import to include the useState hook
import React, { useState, useEffect } from 'react';
// Import the Battery component used for visualization
import Battery from '../Battery/Battery';

import { register, unregister } from "../../utils/battery"





function BatteryHookContainer() {
	//   // useState always returns an array of two elements
	//   const arr = useState(.41);
	//   // First element is the value of the state
	//   const level = arr[0];
	//   // Second element is a setter function for updating the state
	//   const setLevel = arr[1];
	//   //

	/// so this should auto pretty

	/// wonder

	const [batteryData, updateBatteryData] = useState({
		level: 0.69,
		charging: false
    });

    const updateBattery = batteryStatus => {
        updateBatteryData(batteryStatus)

    }

    /// same as like component did mount  component did update

    useEffect(() => {
        console.log("useEffect was called");
        register(updateBattery)

        return () => {
            unregister(updateBatteryData);
        };
        
    }, []);

	return (
		<div>
			<Battery level={batteryData.level} charging={batteryData.charging} />
			{/* <br></br>
			<button
				onClick={() =>
					updateBatteryData({
						level: batteryData.level + 0.01,
						charging: batteryData.charging
					})
				}
			>
				+power+up+
			</button>
			<button
				onClick={() =>
					updateBatteryData({
						level: batteryData.level - 0.01,
						charging: batteryData.charging
					})
				}
			>
				-power-down-
			</button> */}
		</div>
	);
}

export default BatteryHookContainer;
