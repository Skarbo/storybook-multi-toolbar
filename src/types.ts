import type { IconKey } from '@storybook/components';
import { Story } from '@storybook/api';

type MultiToolbarListItemBase = {
  title: string;
  left?: string;
  /**
   * Prepare with 'icon:<icon-key>' to display icon.
   * @see https://storybook.js.org/docs/react/faq#what-icons-are-available-for-my-toolbar-or-my-addon
   */
  right?: string;
  center?: string;
};

export type MultiToolbarListItemNormal = MultiToolbarListItemBase & {
  value: unknown;
  param?: never;
};

export type MultiToolbarListItemToggle = MultiToolbarListItemBase & {
  value?: unknown;
  param: string;
};

type MultiToolbarListBase = {
  title?: string;
};

type MultiToolbarListNormal = MultiToolbarListBase & {
  items: MultiToolbarListItemNormal[];
  param: string;
  type?: never;
};

type MultiToolbarListToggle = MultiToolbarListBase & {
  type: 'toggle';
  param?: never;
  items: MultiToolbarListItemToggle[];
};

export type MultiToolbarList = MultiToolbarListNormal | MultiToolbarListToggle;

export type MultiToolbarParams = {
  param: string;
  name: string;
  description?: string;
  icon?: IconKey;
  lists: MultiToolbarList[];
  /** Show separator between previous toolbar */
  separator?: boolean;
  /** Filter stories. RegExp tests against <code>Story.kind</code>. */
  filter?: ((story: Story) => boolean) | RegExp;
};

export type MultiToolbarParameters = {
  disable?: boolean;
  toolbars: MultiToolbarParams[];
};
