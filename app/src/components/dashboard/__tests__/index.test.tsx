import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import _ from "lodash";

import Widget from "components/widget";
import { Layout } from "common/ducks/layout";

import Dashboard from "../index";

describe("<Dashboard />", () => {
  let wrapper: ShallowWrapper;

  const layout: Layout = {
    mobile: [],
    desktop: []
  };

  beforeEach(() => {
    wrapper = shallow(
      <Dashboard
        layout={layout}
        isLayoutEditable={false}
        saveLayout={_.noop}
        removeWidgetFromLayout={_.noop}
        importWidgets={_.noop}
        widgetIDs={["id-01", "id-02"]}
      />
    );
  });

  const shouldUpdate = ({
    columns,
    widgetIDs
  }: {
    columns?: number;
    widgetIDs?: string[];
  }) =>
    // @ts-ignore
    wrapper.instance().shouldComponentUpdate({
      columns: columns || 3,
      widgetIDs: widgetIDs || ["id-02", "id-01"],
      isLayoutEditable: false,
      layout
    });

  xit("renders widgets", () => {
    test.todo("Write tests for connected component"); // TODO
    expect(wrapper.find(Widget)).toHaveLength(2);
  });

  it("does not perform unnecessary re-renders", () => {
    expect(shouldUpdate({})).toBe(false);
    expect(shouldUpdate({ columns: 3, widgetIDs: ["id-02", "id-01"] })).toBe(
      false
    );
    expect(shouldUpdate({ widgetIDs: ["id-01"] })).toBe(true);
  });
});
