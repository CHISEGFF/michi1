
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
    aboutContent: "Michi游戏工作室由一群拥有10年以上游戏开发经验的热爱者创立。",
    teamTitle: "我们的团队",
    team1: "10年以上游戏开发经验",
    team2: "服务于国内外知名品牌",
    team3: "热爱创新",
    team4: "开放包容的团队氛围",
    visionTitle: "我们的愿景",
    visionContent: "我们致力于探索游戏的更多可能性。",
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
    aboutContent: "Michi Game Studio was founded by passionate developers with 10+ years of experience.",
    teamTitle: "Our Team",
    team1: "Over 10 years of experience",
    team2: "Worked with top brands",
    team3: "Passionate about innovation",
    team4: "Inclusive and creative team",
    visionTitle: "Vision",
    visionContent: "We aim to explore the infinite possibilities of gaming.",
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
    aboutContent: "Michiゲームスタジオは、10年以上の経験を持つ開発者により設立されました。",
    teamTitle: "私たちのチーム",
    team1: "10年以上の開発経験",
    team2: "有名ブランドとの協力実績",
    team3: "革新的な挑戦",
    team4: "自由で創造的なチーム",
    visionTitle: "ビジョン",
    visionContent: "ゲームの可能性を広げることに取り組んでいます。",
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
  document.querySelectorAll('.lang-switch button').forEach(btn => btn.classList.remove('active'));
  document.getElementById('lang-' + lang).classList.add('active');
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : (lang === 'ja' ? 'ja' : 'en');
}

// 默认中文
setLang('zh');
