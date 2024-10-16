/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
//https://docusaurus.io/docs/sidebar

//MAIN!!!
const sidebars = {
  landingSidebar: [
    {
      type: 'doc',
      label: 'Home',
      id: 'index'
    },
    {
      type: 'doc',
      label: 'Introduction to OpenDI',
      id: 'OpenDI Intro Material'
    },
    {
      type: 'doc',
      label: 'How to Contribute',
      id: 'How To Contribute'
    },
    {
      type: 'category',
      label: 'OpenDI Standards',
      items: [
        {
          type: 'link',
          label: 'Roles and User Stories',
          href: 'http://opendi.org/roles-user-stories'
        },
        {
          type: 'link',
          label: '(Working Draft) API Specification',
          href: 'http://opendi.org/api-specification'
        },
      ]
    },
    {
      type: 'category',
      label: 'How to Use OpenDI',
      items: [
        {
          type: 'doc',
          label: 'Resource Guide',
          id: 'How-to-use-OpenDI/Resource Guide'
        },
        {
          type: 'doc',
          label: 'Reference Implementations',
          id: 'How-to-use-OpenDI/Reference Implementations'
        },
        {
          type: 'doc',
          label: 'Gallery',
          id: 'How-to-use-OpenDI/Gallery'
        },
      ]
    },
    {
      type: 'doc',
      label: 'OpenDI Glossary',
      id: 'OpenDI Glossary'
    }
  ],

};

export default sidebars;
