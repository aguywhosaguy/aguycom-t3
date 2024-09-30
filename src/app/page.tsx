export default function HomePage() {
  return (
    <main className="px-20 py-30 my-20 mx-auto max-w-6xl">
      <div className="space-y-5">
        <h1 className="text-5xl font-bold">Welcome!</h1>
        <div className="space-y-3">
          <p>Hello! I&#39;m aguywhosaguy. This is the website where i&#39;ll keep all of my projects. It&#39;s quite empty at the moment, as I haven&#39;t gotten a lot done.</p>
          <p>While I haven&#39;t really found my place yet, I&#39;m interested in web development. However, frontend isn&#39;t really my strong suit, if you couldn&#39;t tell by my masterful web design.</p>
          <p>Most of the things I make these days are hobby projects for niche communities.</p>
          <p></p>
        </div>
        <div className="space-y-4">
            <p>You can find me on:</p>
            <ul className="list-disc pl-20">
              <li><a href="https://github.com/aguywhosaguy" className="font-bold underline">GitHub</a></li>
              <li><a href="https://youtube.com/aguywhosaguy" className="font-bold underline">YouTube</a></li>
            </ul>
            <p>I also go by the same username on Discord, @aguywhosaguy.</p>
            <p>Check out the projects tab to see what I&#39;m up to.</p>
        </div>
      </div>
    </main>
  );
}
