import { configureStore } from "@reduxjs/toolkit";

export type State = {
  valueContainer: {
    value?: string;
  };
  forcedUpdateCounter: number;
};

type Action =
  | {
      type: "setValue";
      value: string;
    }
  | {
      type: "forceUpdate";
    };

export const reducer = (
  state: State = {
    valueContainer: {},
    forcedUpdateCounter: 0,
  },
  action: Action
): State => {
  switch (action.type) {
    case "setValue": {
      return {
        ...state,
        valueContainer: {
          ...state.valueContainer,
          value: action.value,
        },
      };
    }
    case "forceUpdate": {
      return {
        ...state,
        forcedUpdateCounter: state.forcedUpdateCounter + 1,
      };
    }
  }

  return state;
};

export const store = configureStore({
  reducer,
});
