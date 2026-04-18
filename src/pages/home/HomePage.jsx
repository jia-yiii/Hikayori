import "./home.css";

function HomePage() {
  return (
    <main>
      <section className="home-hero section">
        <div className="container home-hero__content">
          <div className="home-hero__text">
            <p className="home-hero__eyebrow">Hikayori｜慕光日和</p>
            <h1 className="home-hero__title">溫柔整理穿戴甲購買前的每一步</h1>
            <p className="home-hero__desc">
              讓使用者快速了解穿戴甲、學會尺寸判斷與挑選方式，
              並在購買前一次完成所需資訊填寫，降低溝通成本。
            </p>

            <div className="home-hero__actions">
              <a href="/styles" className="btn-primary">
                開始挑款
              </a>
              <a href="/guide" className="btn-secondary">
                了解穿戴甲
              </a>
            </div>
          </div>

          <div className="home-hero__card">
            <div className="hero-card">
              <p className="hero-card__label">日和流程</p>
              <ol className="hero-card__list">
                <li>挑選喜歡的款式</li>
                <li>確認甲型與尺寸</li>
                <li>填寫製作調查表單</li>
                <li>完成訂購前資訊整理</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-intro section">
        <div className="container">
          <h2 className="section-title">關於慕光日和</h2>
          <p className="section-desc">
            Hikayori 希望將穿戴甲購買前繁瑣的說明與確認流程整理得更清楚，
            讓第一次接觸穿戴甲的使用者，也能安心理解並順利完成訂購準備。
          </p>
        </div>
      </section>

      <section className="home-flow section">
        <div className="container">
          <h2 className="section-title">簡單四步驟完成準備</h2>
          <div className="flow-grid">
            <article className="flow-card">
              <span className="flow-card__num">01</span>
              <h3>瀏覽款式</h3>
              <p>先找到喜歡的風格與設計，建立挑選方向。</p>
            </article>

            <article className="flow-card">
              <span className="flow-card__num">02</span>
              <h3>了解尺寸</h3>
              <p>透過尺寸教學與甲型說明，確認適合自己的規格。</p>
            </article>

            <article className="flow-card">
              <span className="flow-card__num">03</span>
              <h3>填寫表單</h3>
              <p>一次整理尺寸、款式與客製需求，減少來回溝通。</p>
            </article>

            <article className="flow-card">
              <span className="flow-card__num">04</span>
              <h3>完成資訊</h3>
              <p>產出完整訂購內容，可截圖或作為送單依據。</p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-preview section">
        <div className="container">
          <h2 className="section-title">熱門款式預覽</h2>
          <div className="preview-grid">
            <article className="preview-card">
              <div className="preview-card__image" />
              <h3>奶油杏裸色</h3>
              <p>日常溫柔、適合初次配戴</p>
            </article>

            <article className="preview-card">
              <div className="preview-card__image" />
              <h3>微光法式</h3>
              <p>簡約優雅、耐看百搭</p>
            </article>

            <article className="preview-card">
              <div className="preview-card__image" />
              <h3>茶玫瑰暈染</h3>
              <p>溫柔帶氣質，適合日和系風格</p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-cta section">
        <div className="container home-cta__box">
          <div>
            <h2 className="section-title">開始整理你的穿戴甲訂購資訊</h2>
            <p className="section-desc">
              從挑款、尺寸到備註需求，讓每一步都更清楚。
            </p>
          </div>

          <a href="/order" className="btn-primary">
            前往填寫表單
          </a>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
