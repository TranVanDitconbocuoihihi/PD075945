import {Alert, Button } from "react-native"
import React from "react";
const Button1 = () => {
    return (
        <Button
        title="Press me"
        onPress={() => alert('Simple Button pressed')}
        />
    );
};

export default React.memo (Button1);