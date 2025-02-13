export const appConfig = {
  'home': 'FormScreen',
  'pages': [
    {
      'name': 'FormScreen',
      'title': 'User Registration',
      'content': {
        'type': 'View',
        'props': { 'style': { 'flex': 1, 'padding': 20 } },
        'children': [
          {
            'type': 'View',
            'props': { 'style': { 'marginBottom': 20 } },
            'children': [
              {
                'type': 'Text',
                'props': { 'text': 'User Registration', 'style': { 'fontSize': 22, 'fontWeight': 'bold' } },
              },
              {
                'type': 'Text',
                'props': { 'text': 'Fill in the details below:', 'style': { 'fontSize': 16, 'color': 'gray' } },
              },
            ],
          },
          {
            'type': 'TextInput',
            'props': { 'placeholder': 'Enter your name', 'stateKey': 'name' },
          },
          {
            'type': 'TextInput',
            'props': { 'placeholder': 'Enter your email', 'stateKey': 'email' },
          },
          {
            'type': 'View',
            'props': { 'style': { 'flexDirection': 'row', 'justifyContent': 'space-between' } },
            'children': [
              {
                'type': 'Button',
                'props': { 'title': 'Submit', 'onPress': 'handleSubmit' },
              },
              {
                'type': 'Button',
                'props': { 'title': 'Go to User List', 'navigateTo': 'ListScreen' },
              },
            ],
          },
        ],
      },
    },
    {
      'name': 'ListScreen',
      'title': 'User List',
      'content': {
        'type': 'View',
        'props': { 'style': { 'flex': 1, 'padding': 20 } },
        'children': [
          {
            'type': 'Text',
            'props': { 'text': 'User List', 'style': { 'fontSize': 22, 'fontWeight': 'bold' } },
          },
          {
            'type': 'FlatList',
            'props': {
              'data': [
                { 'id': '1', 'name': 'Ali' },
                { 'id': '2', 'name': 'Dana' },
                { 'id': '3', 'name': 'Ramzi' },
              ],
              'renderItem': {
                'type': 'Text',
                'props': { 'text': '{{item.name}}', 'onPress': 'showUserDetails' },
              },
            },
          },
          {
            'type': 'Button',
            'props': { 'title': 'Back to Registration', 'navigateTo': 'FormScreen' },
          },
        ],
      },
    },
  ],
};
