import type { MultiToolbarParameters } from '../src/types';

const multiToolbarParameters: MultiToolbarParameters = {
  toolbars: [
    {
      param: 'features',
      name: 'Features',
      lists: [
        // toggleable menu items
        {
          type: 'toggle',
          title: 'Toggle features',
          items: [
            { param: 'firstFeature', title: 'First feature' },
            {
              param: 'secondFeature',
              title: 'Second feature',
              center: 'center',
            },
            {
              param: 'thirdFeature',
              title: 'Third feature',
              left: 'left',
              right: 'icon:thumbsup',
            },
          ],
        },
        // toggleable with custom value
        {
          type: 'toggle',
          items: [{ param: 'custom', title: 'Custom value', value: 'customValue' }],
        },
        // normal toolbar items
        {
          title: 'Locale',
          param: 'locale',
          items: [
            { value: 'en', right: '🇺🇸', title: 'English' },
            { value: 'fr', right: '🇫🇷', title: 'Français' },
            { value: 'es', right: '🇪🇸', title: 'Español' },
            { value: 'zh', right: '🇨🇳', title: '中文' },
            { value: 'kr', right: '🇰🇷', title: '한국어' },
          ],
        },
      ],
    },
    // another toolbar menu
    {
      param: 'anotherFeature',
      icon: 'wrench',
      name: 'Another feature',
      // separator between previous toolbar
      separator: true,
      // only show for 'Another' story
      filter: (story) => story.name === 'Another',
      lists: [
        {
          param: 'foo',
          items: [
            {
              value: 'bar',
              title: 'Bar',
            },
            {
              value: 'baz',
              title: 'Baz',
            },
          ],
        },
      ],
    },
  ],
};

export const parameters = {
  multiToolbar: multiToolbarParameters,
};

export const globalTypes = {
  features: {
    defaultValue: {
      locale: 'es', // pre select locale
    },
  },
  anotherFeature: {
    defaultValue: {},
  },
};
