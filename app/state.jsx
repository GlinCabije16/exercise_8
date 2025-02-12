import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function State() {
  const [count, setCount] = useState(0);

  function handleButtonPress() {
    // setCount(count + 1);
    // setCount((c) => c + 1);
    setCount(function (c) {
      return c + 1;
    })
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 100, fontWeight: 600 }}>
        {count}
      </Text>
      <Button
        onPress={handleButtonPress}
        title="Click Me"
      />
    </View>
  );

}
