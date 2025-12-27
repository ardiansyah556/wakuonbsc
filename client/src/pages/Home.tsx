import { Button } from "@/components/ui/button";
import { ExternalLink, Twitter, Send } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Playful Maximalism with Crypto Energy
 * - Vibrant yellows and oranges for energy
 * - Meme-style characters as core visual element
 * - Community-centric layout with prominent social links
 * - Asymmetric grid with organic flow
 */

const characters = [
  {
    name: "瓦库汉堡",
    engName: "Waku Burger",
    image: "/images/waku-character-burger.jpg",
    description: "原始战士 - 瓦库币的创始者，充满力量和决心",
  },
  {
    name: "披萨骑士",
    engName: "Pizza Knight",
    image: "/images/waku-character-pizza.png",
    description: "勇敢的守卫者 - 保护社区的安全",
  },
  {
    name: "玉米卷战士",
    engName: "Taco Warrior",
    image: "/images/waku-character-taco.png",
    description: "快速的行动者 - 推动项目向前发展",
  },
  {
    name: "甜甜圈卫士",
    engName: "Donut Guardian",
    image: "/images/waku-character-donut.png",
    description: "甜蜜的守护者 - 给社区带来快乐",
  },
  {
    name: "拉面狂人",
    engName: "Ramen Maniac",
    image: "/images/waku-character-ramen.png",
    description: "疯狂的能量 - 不断推动创新",
  },
];

export default function Home() {
  const [selectedCharacter, setSelectedCharacter] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-orange-50 to-yellow-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-200">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src="/images/waku-character-burger.jpg"
              alt="Waku Logo"
              className="w-12 h-12 object-cover rounded-lg shadow-md hover:scale-110 transition-transform"
            />
            <span className="font-bold text-lg bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              瓦库币
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/wakuonbsc"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-orange-100 rounded-lg transition"
            >
              <Twitter className="w-5 h-5 text-orange-600" />
            </a>
            <a
              href="https://t.me/wakuportal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-orange-100 rounded-lg transition"
            >
              <Send className="w-5 h-5 text-orange-600" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                瓦库币
              </span>
              <br />
              <span className="text-gray-800">最疯狂的美食币</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              加入美食战士的冒险！瓦库币是一个充满乐趣、社区驱动的加密货币项目。我们的角色团队准备好改变区块链世界。
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://four.meme"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold text-lg px-8 py-6 rounded-xl flex items-center gap-2">
                  公平启动 <ExternalLink className="w-5 h-5" />
                </Button>
              </a>
              <Button
                variant="outline"
                className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold text-lg px-8 py-6 rounded-xl"
              >
                了解更多
              </Button>
            </div>
          </div>
          <div className="relative h-96 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-orange-300 to-red-300 rounded-full blur-3xl opacity-30"></div>
            <img
              src={characters[0].image}
              alt="Waku Burger"
              className="relative w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Character Showcase */}
      <section className="py-20 bg-white/50 backdrop-blur">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            认识我们的战士
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            每个角色都代表瓦库币社区的不同方面。他们一起创造了一个独特的、充满活力的生态系统。
          </p>

          {/* Featured Character */}
          <div className="mb-12 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8 border-2 border-orange-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-80 flex items-center justify-center">
                <img
                  src={characters[selectedCharacter].image}
                  alt={characters[selectedCharacter].engName}
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-800">
                  {characters[selectedCharacter].name}
                </h3>
                <p className="text-gray-700 text-lg">
                  {characters[selectedCharacter].description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {characters.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedCharacter(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        idx === selectedCharacter
                          ? "bg-orange-600 w-8"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Character Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {characters.map((char, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedCharacter(idx)}
                className="group cursor-pointer bg-white rounded-xl p-4 border-2 border-orange-200 hover:border-orange-500 transition-all hover:shadow-lg"
              >
                <div className="relative h-40 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={char.image}
                    alt={char.engName}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-bold text-gray-800 text-center">{char.name}</h4>
                <p className="text-sm text-gray-600 text-center mt-1">{char.engName}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            为什么选择瓦库币？
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "社区驱动",
                description: "由热情的社区成员推动的项目，每个声音都很重要。",
                icon: "👥",
              },
              {
                title: "公平启动",
                description: "在 four.meme 上进行公平启动，确保所有人平等机会。",
                icon: "⚖️",
              },
              {
                title: "充满乐趣",
                description: "一个充满乐趣和幽默的项目，不要太严肃对待自己。",
                icon: "🎉",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border-2 border-orange-200 hover:border-orange-500 transition-all hover:shadow-lg"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">准备加入冒险？</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            在 four.meme 上参与瓦库币的公平启动，或加入我们的社区了解最新信息。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://four.meme"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-orange-600 hover:bg-gray-100 font-bold text-lg px-8 py-6 rounded-xl">
                立即启动 <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a
              href="https://x.com/wakuonbsc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white/20 text-white hover:bg-white/30 font-bold text-lg px-8 py-6 rounded-xl border-2 border-white">
                关注 Twitter <Twitter className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">瓦库币</h4>
              <p className="text-gray-400">最疯狂的美食币。加入我们的冒险。</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">链接</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://four.meme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    four.meme
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/wakuonbsc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">社区</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://t.me/wakuportal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">免责声明</h4>
              <p className="text-gray-400 text-sm">
                这是一个社区项目。请进行自己的研究。
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 瓦库币 (Waku Memecoin). 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
