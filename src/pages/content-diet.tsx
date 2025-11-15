import Head from 'next/head';

interface ContentItem {
  name: string;
  note?: string;
}

interface ContentGroup {
  title: string;
  description: string;
  items: ContentItem[];
}

const contentGroups: ContentGroup[] = [
  {
    title: 'Anime',
    description: 'Shonen arcs that taught me how to chase power-ups, loyalty, and perseverance from a young age.',
    items: [
      { name: 'Dragon Ball Z' },
      { name: 'Naruto' },
      { name: 'Yu-Gi-Oh!' },
      { name: 'Code Geass: Lelouch of the Rebellion' },
      { name: 'Tengen Toppa Gurren Lagann' },
      { name: 'Pokémon' },
      { name: 'One Piece' },
      { name: 'Cyberpunk: Edgerunners' },
      { name: 'Jujutsu Kaisen' },
      { name: 'Attack on Titan' },
      { name: 'Demon Slayer' },
    ],
  },
  {
    title: 'Essays',
    description: 'Pieces I revisit when I need a reset on ambition, purpose, and leverage.',
    items: [
      { name: "Sam Altman's essays on finding purpose", note: 'North stars for aiming high while staying grounded.' },
      { name: 'Naval Ravikant on leverage', note: 'A reminder to build assets that compound while I sleep.' },
    ],
  },
  {
    title: 'X Accounts',
    description: 'People whose timelines consistently deliver signal over noise.',
    items: [
      { name: 'Marc Lou' },
      { name: 'Greg Isenberg' },
      { name: 'Sahil Bloom' },
      { name: 'Naval Ravikant' },
    ],
  },
  {
    title: 'Instagram',
    description: 'Feels, fun, and creativity that nudge me to keep shipping.',
    items: [
      { name: 'Chida Rajan' },
      { name: 'CatGPT' },
    ],
  },
  {
    title: 'Podcasts',
    description: 'Long-form conversations that feed my operator side.',
    items: [
      { name: 'My First Million' },
      { name: 'Startup Ideas Podcast' },
      { name: 'How I Built This' },
    ],
  },
  {
    title: 'Books',
    description: 'Printed fuel that reshaped how I create and relate.',
    items: [
      { name: 'Show Your Work', note: 'The catalyst for putting this blog (and everything else) into the world.' },
      { name: 'Tomorrow, and Tomorrow, and Tomorrow', note: 'My favorite fictional reminder about creativity, partnership, and play.' },
      { name: 'Norwegian Wood by Haruki Murakami', note: 'A melancholy compass for feeling deeply and moving forward anyway.' },
    ],
  },
];

export default function ContentDiet() {
  return (
    <>
      <Head>
        <title>My Content Diet | Beau Branton</title>
        <meta
          name="description"
          content="The most influential pieces of content that continue to shape how I think, build, and live."
        />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          The Most Influential Pieces of Content That I&apos;ve Consumed
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
          You are what you eat. I am constantly eating and thus, constantly changing.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          This page is the living list of inputs that have most shaped my taste, ambition, and worldview—
          from Saturday morning anime arcs to essays that keep my compass pointed toward meaningful work.
          If you dig the things I make, here&apos;s the media pantry powering it all.
        </p>

        <div className="space-y-10">
          {contentGroups.map((group) => (
            <section key={group.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-2">{group.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{group.description}</p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <span className="font-medium text-gray-900 dark:text-gray-100">{item.name}</span>
                    {item.note && (
                      <p className="text-gray-600 dark:text-gray-400">{item.note}</p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

