const Snippet = () => (
  <pre className="font-mono text-sm px-4 py-1 rounded overflow-x-auto max-w-full bg-gray-100 text-black border">
    {`[ 
  {
    section: 'Administration',
    icon: <DocumentsIcon />,
    content: [
       {
         title: 'Taxes',
         link: '/administration/taxes',
       },
       {
         title: 'Travel',
         link: '/administration/travel',
       },
    ]
  }
]
`}
  </pre>
);

export default Snippet;
