import { Text, Window, hot, View } from "@nodegui/react-nodegui";
import React from "react";
import { Provider } from "react-redux";
import { QIcon } from "@nodegui/nodegui";
import { StepOne } from "./components/stepone";
import { StepTwo } from "./components/steptwo";
import nodeguiIcon from "../assets/nodegui.jpg";
import { PrimaryComponent } from "./components/PrimaryComponent";
import { store } from "./store/store";

const minSize = { width: 500, height: 520 };
const winIcon = new QIcon(nodeguiIcon);
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Window
          windowIcon={winIcon}
          windowTitle="Hello 👋🏽"
          minSize={minSize}
          styleSheet={styleSheet}
        >
          <View>
            <PrimaryComponent />
          </View>
        </Window>
      </Provider>
    );
  }
}

const containerStyle = `
  flex: 1; 
`;

const styleSheet = `
  #welcome-text {
    font-size: 24px;
    padding-top: 20px;
    qproperty-alignment: 'AlignHCenter';
    font-family: 'sans-serif';
  }

  #step-1, #step-2 {
    font-size: 18px;
    padding-top: 10px;
    padding-horizontal: 20px;
  }
`;

export default hot(App);
