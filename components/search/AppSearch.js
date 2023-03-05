import { SearchBar } from "@rneui/themed";
import React, { memo, useState } from "react";
import { View } from "react-native";

const AppSearch = () => {
  const [value, setValue] = useState("");

  return (
    <View>
      <SearchBar
        onChangeText={(val) => setValue(val)}
        value={value}
        lightTheme={true}
        containerStyle={{
          backgroundColor: "white",
          padding: 0,
          borderWidth: 1,
          borderColor: "#dedede",
          borderRadius: 10,
          overflow: "hidden",
          height: 40,
        }}
        placeholder="Search"
        inputContainerStyle={{
          backgroundColor: "white",
          height: 40,
          alignSelf: "center",
        }}
        inputStyle={{ backgroundColor: "white", fontSize: 14 }}
      />
    </View>
  );
};

export default memo(AppSearch);
