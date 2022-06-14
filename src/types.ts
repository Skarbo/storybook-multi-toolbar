import type { IconKey } from '@storybook/components';
import { Story } from '@storybook/api';

export type MultiToolbarListItem = {
  value?: unknown;
  title: string;
  param?: string;
  left?: string;
  right?: string;
  center?: string;
};

type MultiToolbarListNormal = {
  title?: string;
  items: MultiToolbarListItem[];
  param: string;
  type: never;
};

type MultiToolbarListToggle = MultiToolbarListNormal & {
  param?: string;
  type: 'toggle';
};

export type MultiToolbarList = MultiToolbarListNormal | MultiToolbarListToggle;

export type MultiToolbarParams = {
  param: string;
  name: string;
  description?: string;
  icon?: IconKey;
  lists: MultiToolbarList[];
  separator?: boolean;
  filter?: ((story: Story) => boolean) | RegExp;
};

export type MultiToolbarParameters = {
  disable?: boolean;
  toolbars: MultiToolbarParams[];
};
