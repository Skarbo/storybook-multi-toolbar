import type { MultiToolbarParameters } from '../src/types';

export const parameters = {
  multiToolbar: {
    toolbars: [
      {
        param: 'features',
        name: 'Features',
        lists: [
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
          {
            type: 'toggle',
            param: 'singleFeature',
            items: [{ title: 'Single toggle' }],
          },
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
      {
        param: 'another',
        icon: 'wrench',
        name: 'Another',
        separator: true,
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
  } as MultiToolbarParameters,
};

export const globalTypes = {
  features: {
    defaultValue: {},
  },
  another: {
    defaultValue: {},
  },
};
