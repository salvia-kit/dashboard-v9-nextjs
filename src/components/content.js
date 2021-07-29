const Content = ({ title }) => (
  <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow">
    <p className="text-center text-3xl font-bold text-gray-800 dark:text-white">
      The big team
    </p>
    <p className="text-center mb-12 text-xl font-normal text-gray-500 dark:text-gray-300">
      Meet the best team in the world
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {creators.map((data) => (
        <div className="p-4" key={data.name}>
          <div className="flex-col  flex justify-center items-center">
            <div className="flex-shrink-0">
              <span className="block relative">
                <img
                  alt={data.name}
                  src={data.src}
                  className="mx-auto object-cover rounded-full h-20 w-20 "
                />
              </span>
            </div>
            <div className="mt-2 text-center flex flex-col">
              <span className="text-gray-600 dark:text-white text-lg font-medium">
                {data.name}
              </span>
              <span className="text-gray-500 text-xs">{data.title}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const creators = [
  {
    name: 'Enoch Ndika',
    src: '/images/person/1.jpg',
    title: 'Creator of Salvia-kit',
  },
  {
    name: 'Guillermo Rauch',
    src: '/images/person/2.jpg',
    title: 'CEO Vercel',
  },
  {
    name: 'Ashley Zahabian',
    src: '/images/person/17.jpg',
    title: 'Motivational Speaker',
  },
  {
    name: 'Gloria Gaynor',
    src: '/images/person/18.jpg',
    title: 'Singer',
  },
  {
    name: 'Segun Adebayo',
    src: '/images/person/3.jpg',
    title: 'Creator of Chakra-UI',
  },
  {
    name: 'Roman Reigns',
    src: '/images/person/15.jpg',
    title: 'Trible Chief',
  },
  {
    name: 'Les Brown',
    src: '/images/person/16.jpg',
    title: 'Motivational Speaker',
  },
  {
    name: 'Cristiano Ronaldo',
    src: '/images/person/4.png',
    title: 'Footballer',
  },
  {
    name: 'Leo Messi',
    src: '/images/person/5.jpg',
    title: 'Footballer',
  },
  {
    name: 'John Cena',
    src: '/images/person/13.jpg',
    title: "You can't see me",
  },
  {
    name: 'Alexi Panos',
    src: '/images/person/6.jpg',
    title: 'Motivational Speaker',
  },
  {
    name: 'Triple H',
    src: '/images/person/8.jpg',
    title: 'Talents creator at WWE NXT',
  },
  {
    name: 'Tony Khan',
    src: '/images/person/9.jpg',
    title: 'CEO AEW',
  },
  {
    name: 'Big Ramy',
    src: '/images/person/10.jpg',
    title: 'Mr. Olympia Winner',
  },
  {
    name: 'Rene Gonzalez',
    src: '/images/person/11.jpg',
    title: 'Singer',
  },
  {
    name: 'Dave Chapelle',
    src: '/images/person/12.jpg',
    title: 'Stand-up comedian',
  },
  {
    name: 'Jonathan Ilunga',
    src: '/images/person/7.jpg',
    title: 'Developer',
  },
  {
    name: 'Teddy Riner',
    src: '/images/person/14.jpg',
    title: 'Judoka',
  },
];

export default Content;
