import Head from 'next/head';

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Coming Soon Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center space-y-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-40 h-40"
          viewBox="0 0 64 64"
        >
          <path
            fill="#FFCE31"
            d="M2 38s1-8 30-8 30 8 30 8H2z"
          />
          <path
            fill="#EDA454"
            d="M2 38s4 10 30 10 30-10 30-10H2z"
          />
          <path
            fill="#2A85FF"
            d="M4 46s6 8 28 8 28-8 28-8H4z"
          />
          <path
            fill="#FF4B55"
            d="M4 46h56s2 2 2 4-2 6-30 6-30-4-30-6 2-4 2-4z"
          />
          <path
            fill="#6DA544"
            d="M14 54s4 2 18 2 18-2 18-2v2H14v-2z"
          />
        </svg>
        <h1 className="text-5xl font-bold text-gray-800">Coming Soon</h1>
        <p className="text-xl text-gray-600">Stay tuned! Something awesome is on its way.</p>
      </main>
    </div>
  );
}
