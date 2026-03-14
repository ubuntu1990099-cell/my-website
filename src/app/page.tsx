export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            王哥的主页
          </h1>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">关于</a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">项目</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">联系</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-8 h-32 w-32 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-6xl">
            🐕
          </div>
          <h2 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white">
            你好，我是王哥！
          </h2>
          <p className="mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
            热爱技术，喜欢折腾。这里是个人主页，记录生活、分享项目、探索世界。
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="rounded-full bg-indigo-600 px-8 py-3 text-white font-medium hover:bg-indigo-700 transition-colors"
            >
              查看项目
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-indigo-600 px-8 py-3 text-indigo-600 font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
            >
              联系我
            </a>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="mt-32">
          <h3 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white text-center">
            关于我
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg">
              <div className="text-4xl mb-4">💻</div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">技术栈</h4>
              <p className="text-gray-600 dark:text-gray-300">
                喜欢尝试新技术，从 Web 开发到 AI 应用，保持学习，持续成长。
              </p>
            </div>
            <div className="rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">兴趣爱好</h4>
              <p className="text-gray-600 dark:text-gray-300">
                折腾各种工具和服务，探索效率提升的可能性，享受解决问题的过程。
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mt-32">
          <h3 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white text-center">
            项目展示
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-40 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl mb-4"></div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">项目 {i}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  这是一个很酷的项目，展示了最新的技术栈和设计理念。
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-32 mb-20">
          <h3 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white text-center">
            联系我
          </h3>
          <div className="max-w-md mx-auto rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              有想法要交流？欢迎联系！
            </p>
            <a
              href="mailto:neo1990099@gmail.com"
              className="inline-block rounded-full bg-indigo-600 px-8 py-3 text-white font-medium hover:bg-indigo-700 transition-colors"
            >
              发送邮件
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
          <p>© 2026 王哥的主页。Built with Next.js & TailwindCSS</p>
        </div>
      </footer>
    </div>
  );
}
