// ============================
// 企業サイトテンプレート
// メインJavaScript
// ============================

document.addEventListener('DOMContentLoaded', () => {
  const SITE_CONFIG = window.SITE_CONFIG || {};

  const config = {
    companyNameJa: SITE_CONFIG.companyNameJa || '株式会社サンプル',
    companyNameEn: SITE_CONFIG.companyNameEn || 'Sample Inc.',
    logoMain: SITE_CONFIG.logoMain || 'Sample',
    logoAccent: SITE_CONFIG.logoAccent || 'Inc.',
    heroEyebrow: SITE_CONFIG.heroEyebrow || 'Business Creative Company — Tokyo',
    heroTitleLine1: SITE_CONFIG.heroTitleLine1 || 'CREATE',
    heroTitleLine2: SITE_CONFIG.heroTitleLine2 || 'TRUST.',
    heroTitleLine3: SITE_CONFIG.heroTitleLine3 || 'FORWARD',
    heroSubTitle: SITE_CONFIG.heroSubTitle || '人と企業の前進を、確かな支援で支える。',
    heroDescription: SITE_CONFIG.heroDescription || '株式会社サンプルは、東京を拠点に事業を展開する企業です。',
    aboutTitle: SITE_CONFIG.aboutTitle || '人と企業の未来を、\n前向きに支える。',
    aboutText1: SITE_CONFIG.aboutText1 || '私たちは、クライアントの課題に向き合い、新しい価値を提供します。',
    aboutText2: SITE_CONFIG.aboutText2 || '誠実な対応と柔軟な提案を通じて、長く信頼される企業を目指しています。',
    aboutText3: SITE_CONFIG.aboutText3 || '東京から全国へ。私たちは常に事業の可能性を広げています。',
    ceoName: SITE_CONFIG.ceoName || '代表者名',
    locationZip: SITE_CONFIG.locationZip || '〒000-0000',
    locationAddress: SITE_CONFIG.locationAddress || '東京都〇〇区〇〇0-0-0',
    businessDescription: SITE_CONFIG.businessDescription || '事業内容',
    businessSectionTitle: SITE_CONFIG.businessSectionTitle || 'BUSINESS',
    businessSectionSub: SITE_CONFIG.businessSectionSub || '企業活動を支える多角的なサポートを提供します',
    recruitCatch: SITE_CONFIG.recruitCatch || '全国主要エリア ― 募集中',
    recruitJobType: SITE_CONFIG.recruitJobType || '事務職',
    recruitJobDescription: SITE_CONFIG.recruitJobDescription || '事業を支えるサポート業務',
    heroPrimaryCta: SITE_CONFIG.heroPrimaryCta || '採用情報を見る',
    heroSecondaryCta: SITE_CONFIG.heroSecondaryCta || 'About Us',
    recruitCtaText: SITE_CONFIG.recruitCtaText || 'ご希望の勤務地を選んで、お問い合わせフォームよりご応募ください。',
    recruitCtaButton: SITE_CONFIG.recruitCtaButton || '応募する',
    heroStats: Array.isArray(SITE_CONFIG.heroStats) ? SITE_CONFIG.heroStats : [
      { value: '27', suffix: '拠点', label: '募集勤務地' },
      { value: '100', suffix: '%', label: '土日祝休み' },
      { value: '∞', suffix: '', label: 'Possibility' }
    ],
    businessItems: Array.isArray(SITE_CONFIG.businessItems) ? SITE_CONFIG.businessItems : [
      {
        number: '01',
        title: '事業内容01',
        description: 'ここに事業内容の説明を入力します。'
      },
      {
        number: '02',
        title: '事業内容02',
        description: 'ここに事業内容の説明を入力します。'
      },
      {
        number: '03',
        title: '事業内容03',
        description: 'ここに事業内容の説明を入力します。'
      }
    ],
    metaTitle: SITE_CONFIG.metaTitle || '企業サイトテンプレート',
    metaDescription: SITE_CONFIG.metaDescription || '企業サイトテンプレートです。',
    contactEndpoint: SITE_CONFIG.contactEndpoint || 'tables/contact_messages',
    copyrightYear: SITE_CONFIG.copyrightYear || new Date().getFullYear().toString()
  };

  config.locationFull = `${config.locationZip}\n${config.locationAddress}`;
  config.copyrightText = `© ${config.copyrightYear} ${config.companyNameEn}`;

  // ----------------------------
  // メタ情報反映
  // ----------------------------
  document.title = config.metaTitle;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', config.metaDescription);
  }

  // ----------------------------
  // data-site-text の自動反映
  // ----------------------------
  document.querySelectorAll('[data-site-text]').forEach((el) => {
    const key = el.dataset.siteText;
    if (key && Object.prototype.hasOwnProperty.call(config, key)) {
      el.textContent = config[key];
    }
  });

  // ----------------------------
  // ヒーロータイトル生成
  // ----------------------------
  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) {
    heroTitle.innerHTML = `
      ${escapeHtml(config.heroTitleLine1)}<br>
      <span class="gold">${escapeHtml(config.heroTitleLine2)}</span><br>
      <span class="stroke">${escapeHtml(config.heroTitleLine3)}</span>
    `;
  }

  // ----------------------------
  // ヒーロースタッツ生成
  // ----------------------------
  const heroStats = document.getElementById('hero-stats');
  if (heroStats) {
    heroStats.innerHTML = config.heroStats.map((item) => `
      <div class="hero-stat-item">
        <div class="hero-stat-num">
          ${escapeHtml(item.value || '')}${item.suffix ? `<span style="font-size:1.4rem;">${escapeHtml(item.suffix)}</span>` : ''}
        </div>
        <div class="hero-stat-label">${escapeHtml(item.label || '')}</div>
      </div>
    `).join('');
  }

  // ----------------------------
  // Businessカード生成
  // ----------------------------
  const businessGrid = document.getElementById('business-grid');
  if (businessGrid) {
    businessGrid.innerHTML = config.businessItems.map((item) => `
      <div class="biz-card fade-up">
        <div class="biz-num">${escapeHtml(item.number || '')}</div>
        <h3>${escapeHtml(item.title || '')}</h3>
        <p>${escapeHtml(item.description || '')}</p>
      </div>
    `).join('');
  }

  // ---- ハンバーガーメニュー ----
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('global-nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- スクロールアニメーション ----
  const fadeEls = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach(el => observer.observe(el));

  // ---- トップへ戻るボタン ----
  const backTop = document.getElementById('back-top');
  if (backTop) {
    window.addEventListener('scroll', () => {
      backTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    backTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- 採用フィルター ----
  const filterBtns = document.querySelectorAll('.filter-btn');
  const prefCards = document.querySelectorAll('.pref-card');

  if (filterBtns.length && prefCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const region = btn.dataset.region;
        prefCards.forEach(card => {
          card.style.display = (region === 'all' || card.dataset.region === region) ? 'block' : 'none';
        });
      });
    });
  }

  // ---- お問い合わせフォーム ----
  const form = document.getElementById('contact-form');
  const successBox = document.getElementById('form-success');

  if (form && successBox) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      let valid = true;

      const name = document.getElementById('name');
      const nameErr = document.getElementById('name-err');
      if (!name.value.trim()) {
        nameErr.style.display = 'block';
        valid = false;
      } else {
        nameErr.style.display = 'none';
      }

      const email = document.getElementById('email');
      const emailErr = document.getElementById('email-err');
      if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        emailErr.style.display = 'block';
        valid = false;
      } else {
        emailErr.style.display = 'none';
      }

      const category = document.getElementById('category');
      const categoryErr = document.getElementById('category-err');
      if (!category.value) {
        categoryErr.style.display = 'block';
        valid = false;
      } else {
        categoryErr.style.display = 'none';
      }

      const message = document.getElementById('message');
      const messageErr = document.getElementById('message-err');
      if (!message.value.trim()) {
        messageErr.style.display = 'block';
        valid = false;
      } else {
        messageErr.style.display = 'none';
      }

      if (!valid) return;

      try {
        await fetch(config.contactEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            companyName: config.companyNameJa,
            name: name.value.trim(),
            company: document.getElementById('company').value.trim(),
            email: email.value.trim(),
            category: category.value,
            message: message.value.trim()
          })
        });
      } catch (_) {
        // 静的サイト公開時に送信先未設定でもUIは完了表示に進める
        // 本番運用時は contactEndpoint を実際の送信先に変更してください
      }

      form.style.display = 'none';
      successBox.style.display = 'block';
    });
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
});
