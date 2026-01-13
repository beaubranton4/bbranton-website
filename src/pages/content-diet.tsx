import Head from 'next/head';

interface ContentItem {
  name: string;
  note?: string;
}

interface ContentGroup {
  title: string;
  description: string;
  items: ContentItem[];
  color: string;
}

const contentGroups: ContentGroup[] = [
  {
    title: 'Anime',
    description: 'Shonen arcs that taught me how to chase power-ups, loyalty, and perseverance from a young age.',
    color: 'cyan',
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
    color: 'pink',
    items: [
      { name: "Sam Altman's essays on finding purpose", note: 'North stars for aiming high while staying grounded.' },
      { name: 'Naval Ravikant on leverage', note: 'A reminder to build assets that compound while I sleep.' },
    ],
  },
  {
    title: 'X Accounts',
    description: 'People whose timelines consistently deliver signal over noise.',
    color: 'cyan',
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
    color: 'cyan',
    items: [
      { name: 'Chida Rajan' },
      { name: 'CatGPT' },
    ],
  },
  {
    title: 'Podcasts',
    description: 'Long-form conversations that feed my operator side.',
    color: 'pink',
    items: [
      { name: 'My First Million' },
      { name: 'Startup Ideas Podcast' },
      { name: 'How I Built This' },
    ],
  },
  {
    title: 'Books',
    description: 'Printed fuel that reshaped how I create and relate.',
    color: 'cyan',
    items: [
      { name: 'Show Your Work', note: 'The catalyst for putting this blog into the world.' },
      { name: 'Tomorrow, and Tomorrow, and Tomorrow', note: 'My favorite fictional reminder about creativity, partnership, and play.' },
      { name: 'Norwegian Wood by Haruki Murakami', note: 'A melancholy compass for feeling deeply and moving forward anyway.' },
    ],
  },
];

const colorMap: Record<string, string> = {
  cyan: 'text-cyan-400 border-cyan-500/30',
  pink: 'text-pink-400 border-pink-500/30',
};

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
        <h1 
          className="text-2xl font-bold mb-4 text-cyan-400"
          style={{ fontFamily: "'Press Start 2P', system-ui, sans-serif", fontSize: '14px', lineHeight: '1.8' }}
        >
          CONTENT DIET
        </h1>
        <p className="text-gray-400 mb-2">
          You are what you eat. I am constantly eating and thus, constantly changing.
        </p>
        <p className="text-gray-500 text-sm mb-10">
          This page is the living list of inputs that have most shaped my taste, ambition, and worldview—
          from Saturday morning anime arcs to essays that keep my compass pointed toward meaningful work.
        </p>

        <div className="space-y-6">
          {contentGroups.map((group) => (
            <section key={group.title} className="arcade-card p-5">
              <h2 className={`text-lg font-bold mb-2 ${colorMap[group.color].split(' ')[0]}`}>
                {group.title}
              </h2>
              <p className="text-gray-500 text-sm mb-4">{group.description}</p>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-start gap-2">
                    <span className={colorMap[group.color].split(' ')[0]}>▸</span>
                    <div>
                      <span className="text-gray-300 text-sm">{item.name}</span>
                      {item.note && (
                        <p className="text-gray-500 text-xs mt-0.5">{item.note}</p>
                      )}
                    </div>
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
