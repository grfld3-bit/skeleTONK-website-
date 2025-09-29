export default function Home(){
  return (
    <div className="text-center p-6 md:p-12">
      <img src="/SkeleTONK_logo.jpg" alt="SkeleTONK Logo" className="mx-auto w-32 md:w-48 mb-6"/>
      <h1 className="text-3xl md:text-5xl font-bold text-green-400">SkeleTONK Meme Coin ☠️📈🔥</h1>
      <p className="text-md md:text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
        The spookiest meme coin alive. Join the Bone Army today!
      </p>
      <nav className="mt-6 flex flex-col md:flex-row justify-center gap-4">
        <a href="/whitepaper" className="bg-green-500 px-5 py-2 rounded-lg text-black hover:bg-green-600">Whitepaper</a>
        <a href="/roadmap" className="bg-purple-500 px-5 py-2 rounded-lg text-white hover:bg-purple-600">Roadmap</a>
        <a href="/community" className="bg-blue-500 px-5 py-2 rounded-lg text-white hover:bg-blue-600">Community</a>
      </nav>
    </div>
  )
}
