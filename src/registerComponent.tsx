import { addons, types } from '@storybook/addons';
import React from 'react';

import { ADDON_ID } from './constants';
import MultiTool from './components/MultiTool';

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: 'Multi toolbar',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => <MultiTool />,
  });
});
