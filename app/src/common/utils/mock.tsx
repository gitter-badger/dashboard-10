import React from "react";
import { Provider } from "react-redux";
import _ from "lodash";

import initStore, { State } from "../../state/store";

const { store } = initStore();

export const mountConnected = (Component: React.ReactNode) => (
  <Provider store={store}>{Component}</Provider>
);

/* Default widget props (e.g. for unit tests) */
export const widgetProps = {
  meta: {},
  setData: _.noop,
  setOptions: _.noop,
  triggerUpdate: _.noop
};

/* Default connected widget props (e.g. for stories) */
export const connectedWidgetProps = {
  options: {},
  data: {},
  removeWidgetFromLayout: _.noop,
  hasError: false,
  className: "resize",
  ...widgetProps
};

/* Default empty state */
export const stateProps: State = {
  config: { theme: "", language: "" },
  widgets: {},
  layout: {
    isEditable: false,
    config: { mobile: [], desktop: [] },
    nextWidgetId: 1
  }
};
