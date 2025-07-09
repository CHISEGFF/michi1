const i18nData = {
  zh: {
    studioName: "Michi 游戏工作室",
    navAbout: "关于我们",
    navTeam: "团队介绍",
    navVision: "我们的愿景",
    navContact: "联系我们",
    navGames: "游戏",
    slogan: "探索游戏道（GAME MICHI）",
    aboutTitle: "关于Michi",
    aboutContent: "Michi游戏工作室由一群拥有10年以上游戏开发经验的热爱者创立。我们曾为多个知名品牌服务，深知行业的复杂与挑战。厌倦了反复的需求和繁琐的沟通，我们决定打造属于自己的创意空间，专注于制作和发行跨平台的轻度休闲游戏。我们相信，游戏不仅是娱乐，更是人与人之间沟通和表达的桥梁。",
    teamTitle: "我们的团队",
    team1: "10年以上游戏开发经验，涵盖策划、美术、程序、音效等多领域",
    team2: "曾服务于国内外知名游戏品牌，积累丰富项目管理与跨文化协作经验",
    team3: "热爱创新，追求极致玩家体验，勇于尝试新玩法与新技术",
    team4: "团队氛围开放包容，鼓励每一位成员表达创意与想法",
    visionTitle: "我们的愿景",
    visionContent: "基于丰富的行业knowhow，我们致力于探索游戏的更多可能性。Michi希望通过轻松有趣的游戏体验，陪伴每一位玩家，探索属于自己的“游戏道”。我们相信，游戏的本质是探索与成长，未来我们将持续创新，打造更多让人会心一笑的作品。",
    contactInfo: "联系方式：contact@michi.com",
    copyright: "© 2024 Michi 游戏工作室"
  },
  en: {
    studioName: "Michi Game Studio",
    navAbout: "About Us",
    navTeam: "Our Team",
    navVision: "Vision",
    navContact: "Contact",
    navGames: "Games",
    slogan: "Explore the Way of Games (GAME MICHI)",
    aboutTitle: "About Michi",
    aboutContent: "Michi Game Studio was founded by a group of passionate developers with over 10 years of experience. Having worked with many renowned brands, we understand the industry's complexity and challenges. Tired of endless requirements and complicated communication, we decided to create our own creative space, focusing on developing and publishing cross-platform casual games. We believe games are not just entertainment, but also a bridge for communication and expression.",
    teamTitle: "Our Team",
    team1: "Over 10 years of experience in game design, art, programming, and audio",
    team2: "Worked with well-known brands worldwide, with rich project management and cross-cultural collaboration experience",
    team3: "Passionate about innovation, dedicated to delivering the best player experience, and eager to try new ideas and technologies",
    team4: "Open and inclusive team culture, encouraging every member to express their creativity",
    visionTitle: "Vision",
    visionContent: "With our extensive knowhow, we are committed to exploring more possibilities in gaming. Michi aims to accompany every player on their journey to discover their own 'Way of Games' through fun and relaxing experiences. We believe the essence of games is exploration and growth, and we will continue to innovate and create more delightful works.",
    contactInfo: "Contact: contact@michi.com",
    copyright: "© 2024 Michi Game Studio"
  },
  ja: {
    studioName: "Michi ゲームスタジオ",
    navAbout: "私たちについて",
    navTeam: "チーム紹介",
    navVision: "ビジョン",
    navContact: "お問い合わせ",
    navGames: "ゲーム",
    slogan: "ゲーム道を探求する（GAME MICHI）",
    aboutTitle: "Michiについて",
    aboutContent: "Michiゲームスタジオは、10年以上のゲーム開発経験を持つ情熱的なメンバーによって設立されました。多くの有名ブランドでの経験を活かし、業界の複雑さと課題を深く理解しています。繰り返される要件や複雑なコミュニケーションに疲れ、自分たちの創造的な空間を作ることを決意しました。私たちは、ゲームは単なる娯楽ではなく、人と人をつなぐ架け橋だと信じています。",
    teamTitle: "私たちのチーム",
    team1: "10年以上のゲーム開発経験、企画・アート・プログラム・サウンドなど多分野に対応",
    team2: "国内外の有名ブランドでのプロジェクト管理や異文化協力の豊富な経験",
    team3: "革新を愛し、最高のプレイヤー体験を追求し、新しいアイデアや技術に挑戦",
    team4: "オープンで包容力のあるチーム文化、全員が自由にアイデアを表現できる環境",
    visionTitle: "ビジョン",
    visionContent: "豊富な業界ノウハウを活かし、ゲームの新たな可能性を追求します。Michiは、楽しくリラックスできるゲーム体験を通じて、すべてのプレイヤーが自分だけの「ゲーム道」を探求できるようサポートします。ゲームの本質は探求と成長であり、今後も革新を続け、心温まる作品を生み出していきます。",
    contactInfo: "お問い合わせ：contact@michi.com",
    copyright: "© 2024 Michi ゲームスタジオ"
  }
};

function setLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18nData[lang][key]) {
      el.textContent = i18nData[lang][key];
    }
  });
  // 按钮高亮
  document.querySelectorAll('.lang-switch button').forEach(btn => btn.classList.remove('active'));
  document.getElementById('lang-' + lang).classList.add('active');
  // 切换html lang属性
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : (lang === 'ja' ? 'ja' : 'en');
}

// 默认中文
setLang('zh'); 