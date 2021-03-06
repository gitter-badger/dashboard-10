import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { ConfigurationProps } from "widgets/index";
import Input from "components/forms/input";
import Button, { ButtonSize, ButtonVariant } from "components/button";

import providers from "./lib/providers";

const Configuration = ({
  id,
  options,
  setOptions,
  save
}: ConfigurationProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Input
        setValue={value => setOptions({ url: value })}
        value={options.url}
        label={t("widget.website.configuration.url")}
        className="mb-6"
        type="url"
        autoComplete="url"
        onEnter={save}
      />
      <div className="mb-6">
        {providers.map(provider => (
          <Button
            key={provider.title}
            className="mr-5 mb-2"
            variant={ButtonVariant.Secondary}
            size={ButtonSize.Small}
            outline
            onClick={() =>
              setOptions({
                url: provider.url
              })
            }
          >
            {provider.title}
          </Button>
        ))}
      </div>
      {/* NICE: Extract "Alert/Info" component */}
      <Trans i18nKey="widget.website.configuration.disclaimer">
        <strong></strong>
      </Trans>
    </>
  );
};

export default Configuration;
