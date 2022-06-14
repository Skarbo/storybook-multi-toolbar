import type { MultiToolbarList, MultiToolbarParams } from '../types';
import { useGlobals, useGlobalTypes } from '@storybook/api';
import React, { useCallback, useEffect, useState } from 'react';
import { IconButton, Icons, WithTooltip } from '@storybook/components';
import MultiToolbarLists from './MultiToolbarLists';

type Props = { toolbar: MultiToolbarParams };

const createToolbarValues = (
  values: Record<string, unknown>
): Record<string, unknown> => {
  return Object.entries(values).reduce((acc, [key, value]) => {
    acc[key] = value;

    if (typeof value === 'string' && (value === 'true' || value === 'false')) {
      acc[key] = value === 'true';
    }

    return acc;
  }, {} as Record<string, unknown>);
};

const MultiToolbar: React.FC<Props> = ({ toolbar }) => {
  const [globals, updateGlobals] = useGlobals();
  const [active, setActive] = useState(false);
  const globalTypes = useGlobalTypes();
  const values = createToolbarValues(globals[toolbar.param] || {});

  useEffect(() => {
    if (globalTypes[toolbar.param]) {
      setActive(
        JSON.stringify(globalTypes[toolbar.param].defaultValue) !==
          JSON.stringify(values)
      );
    }
  }, [globals, values]);

  const onChange = useCallback(
    (list: MultiToolbarList, value: unknown, param: string) => {
      const newValues = {
        [toolbar.param]: {
          ...values,
          [param]: value,
        },
      };

      // toggle
      if (list.type === 'toggle') {
        newValues[toolbar.param][param] = !values[param];
      }

      updateGlobals(newValues);
    },
    [values]
  );

  return (
    <WithTooltip
      tooltip={({ onHide }) => (
        <MultiToolbarLists
          activeValue={values}
          lists={toolbar.lists}
          onChange={(list, value, param) => {
            onChange(list, value, param);
            onHide();
          }}
        />
      )}
      trigger="click"
      closeOnClick
    >
      <IconButton active={active} title={toolbar.description || toolbar.name}>
        <Icons icon={toolbar.icon || 'structure'} />
      </IconButton>
    </WithTooltip>
  );
};

export default MultiToolbar;
