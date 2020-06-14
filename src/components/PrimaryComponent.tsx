import { View, Text, Button, useEventHandler } from "@nodegui/react-nodegui";
import React, { useState, useEffect } from "react";
import { QPushButtonSignals } from "@nodegui/nodegui";
import { State } from "../store/store";
import { useSelector, useDispatch } from "react-redux";

const selector = (state: State) => state.valueContainer.value;
const updateSelector = (state: State) => state.forcedUpdateCounter;

export const PrimaryComponent: React.FC<{}> = () => {
  const [startTimer, setStartTimer] = useState(false);

  const value = useSelector(selector);
  const updateCount = useSelector(updateSelector);
  const dispatch = useDispatch();

  const handler = useEventHandler<QPushButtonSignals>(
    {
      clicked: () => setStartTimer(true),
    },
    []
  );

  const countHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: () =>
        dispatch({
          type: "forceUpdate",
        }),
    },
    []
  );

  useEffect(() => {
    if (!startTimer) {
      return;
    }

    dispatch({
      type: "setValue",
      value: "unset",
    });

    let timeout: NodeJS.Timeout | undefined = undefined;
    let tickCount = 0;

    timeout = setInterval(() => {
      if (tickCount > 4) {
        setStartTimer(false);
        clearInterval(timeout as any);
        timeout = undefined;
      }

      dispatch({
        type: "setValue",
        value: `${tickCount} Ticks`,
      });

      tickCount += 1;
    }, 10);
  }, [startTimer]);

  return (
    <View>
      <Text>{value}</Text>
      <Button on={handler}>Click</Button>
      <Text>{updateCount}</Text>
      <Button on={countHandler}>Update</Button>
    </View>
  );
};
