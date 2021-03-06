import React from "react";

import { storiesOf } from "@storybook/react";

import Icon from "components/icon";
import Section from "components/section";
import Button, {
  ButtonVariant,
  ButtonSize,
  Props as ButtonProps
} from "../index";

const commonProps = {
  className: "mr-5"
};

interface RowProps {
  title: string;
  children?: React.ReactNode;
}

const Row = ({
  title,
  children,
  ...rest
}: RowProps & Omit<ButtonProps, "children">) => (
  <Section type="story" headline={title}>
    <>
      <Button {...commonProps} {...rest}>
        {children || "Regular"}
      </Button>
      <Button {...commonProps} {...rest} size={ButtonSize.Small}>
        {children || "Small"}
      </Button>
      <Button {...commonProps} {...rest} outline>
        {children || "Outline"}
      </Button>
      <Button {...commonProps} {...rest} outline size={ButtonSize.Small}>
        {children || "Outline Small"}
      </Button>
      <Button {...commonProps} {...rest} outline border={false}>
        {children || "Borderless"}
      </Button>
    </>
  </Section>
);

storiesOf("Components.Button", module).add("Variants", () => (
  <div>
    <Row title="Primary Button" variant={ButtonVariant.Primary} />
    <Row title="Secondary Button" variant={ButtonVariant.Secondary} />
    <Row title="Danger Button" variant={ButtonVariant.Danger} />
    <Row title="Unstyled Button" variant={ButtonVariant.Unstyled} />

    <Row title="Disabled Button" variant={ButtonVariant.Primary} disabled />

    <Row title="Icon Text Button" variant={ButtonVariant.Primary}>
      Button <Icon name="cog" position="right" />
    </Row>
    <Row
      title="Icon Button"
      variant={ButtonVariant.Primary}
      aria-label="Icon Button"
    >
      <Icon name="cog" />
    </Row>
  </div>
));
