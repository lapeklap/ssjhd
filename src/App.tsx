import { useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  Copy,
  ExternalLink,
  Menu,
  Send,
  Shield,
  Sparkles,
  Twitter,
  X,
  Zap,
} from 'lucide-react';

const CONTRACT_ADDRESS = '0xSSJHOOD8a1e3b7d6f2c9a0e5b4d1c8f7a6e3b2';

const navItems = [
  { label: 'Power', href: '#power' },
  { label: 'The mission', href: '#mission' },
  { label: 'Roadmap', href: '#roadmap' },
];

function App() {
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const copyAddress = async () => {
    await navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="site-shell">
      <div className="noise" />
      <nav className="topbar container">
        <a className="brand" href="#top" aria-label="SSJHood home">
          <img src="/logo.png" alt="SSJHood logo" />
          <span>$SSJHOOD</span>
        </a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <a href={item.href} key={item.label} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <a href="#community" onClick={() => setMenuOpen(false)}>Community</a>
        </div>
        <div className="nav-actions">
          <a className="icon-link" href="https://t.me/ssjhoodcoin" target="_blank" rel="noreferrer" aria-label="Telegram"><Send size={17} /></a>
          <a className="icon-link" href="https://x.com/ssjhoodcoin" target="_blank" rel="noreferrer" aria-label="Twitter / X"><Twitter size={16} /></a>
          <a className="nav-buy" href="https://app.uniswap.org/swap?chain=robinhood&inputCurrency=NATIVE&outputCurrency=x00000000000000000000000" target="_blank" rel="noreferrer">Buy $SSJHOOD <ArrowUpRight size={16} /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" /> Fair launch on Robinhood Chain</div>
          <h1>Power up.<br /><em>Take the hood.</em></h1>
          <p className="hero-text">The next evolution of Robinhood has arrived. A community-powered meme token inspired by the legendary Super Saiyan transformation.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://app.uniswap.org/swap?chain=robinhood&inputCurrency=NATIVE&outputCurrency=x00000000000000000000000" target="_blank" rel="noreferrer">Buy on Uniswap <ArrowUpRight size={18} /></a>
            <a className="button button-ghost" href="#mission">Discover the mission <ChevronRight size={17} /></a>
          </div>
          <div className="contract-row">
            <span>CONTRACT ADDRESS</span>
            <button onClick={copyAddress} className="contract-button" title="Copy contract address">
              <code>{CONTRACT_ADDRESS}</code>
              {copied ? <Check size={15} /> : <Copy size={15} />}
              <strong>{copied ? 'Copied' : 'Copy'}</strong>
            </button>
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-glow" />
          <div className="hero-ring"><img src="/logo.png" alt="SSJHood coin" /></div>
          <img className="hero-character" src="/images/drag.png" alt="SSJHood powering up in Sherwood" />
          <div className="hero-tag tag-top"><Zap size={14} fill="currentColor" /> LIMITS: BROKEN</div>
          <div className="hero-tag tag-bottom">POWER LEVEL <b>∞</b></div>
        </div>
      </section>

      <div className="ticker" aria-label="SSJHood slogans">
        <div className="ticker-track"><span>TIME TO BREAK THE LIMITS.</span><b>✦</b><span>IT&apos;S TIME TO INCREASE POWER.</span><b>✦</b><span>HOOD IS ABOUT TO POWER UP.</span><b>✦</b><span>TIME TO BREAK THE LIMITS.</span><b>✦</b></div>
      </div>

      <section className="power-section container" id="power">
        <div className="section-intro">
          <p className="kicker">01 / The power-up</p>
          <h2>Born in the forest.<br /><span>Built for the chain.</span></h2>
          <p>From the hood to the stars, $SSJHOOD is here to increase the power, bring the volume and build the strongest community on Robinhood Chain.</p>
        </div>
        <div className="feature-grid">
          <article className="feature-card image-card large"><img src="/images/pow.jpg" alt="SSJHood powering up" /><div className="image-caption"><span>01</span><strong>It&apos;s time to<br />increase power. <Zap size={18} fill="currentColor" /></strong></div></article>
          <article className="feature-card dark-card"><div className="card-icon"><Sparkles size={22} /></div><span className="card-number">02</span><h3>Zero limits.<br />Full energy.</h3><p>No holding back. Just power, volume and community.</p><div className="card-line" /></article>
          <article className="feature-card image-card"><img src="/images/1000008509.png" alt="Sherwood at sunset" /><div className="image-caption"><span>03</span><strong>Hood is about<br />to power up.</strong></div></article>
        </div>
      </section>

      <section className="mission-section" id="mission">
        <div className="mission-image"><img src="/images/crew.jpg" alt="The SSJHood crew" /><div className="mission-stamp">SSJ<br /><small>HOOD</small></div></div>
        <div className="mission-copy"><p className="kicker">02 / The mission</p><h2>We&apos;re not here<br />just to save <span>Sherwood.</span></h2><p className="mission-quote">“Inspired by the legendary Super Saiyan transformation, SSJHood represents the next evolution of Robinhood, with the mission of bringing a new level of energy to the ecosystem.”</p><a className="text-link" href="#roadmap">See what&apos;s next <ArrowDown size={16} /></a></div>
      </section>

      <section className="roadmap-section container" id="roadmap">
        <div className="roadmap-heading"><p className="kicker">03 / The path forward</p><h2>The road to<br /><span>ascension.</span></h2><p>Every legend starts somewhere. Ours starts here.</p></div>
        <div className="roadmap-list">
          <div className="roadmap-item active"><span className="roadmap-dot"><Check size={14} /></span><div><p>PHASE 01</p><h3>The launch</h3><span>Fair launch on Robinhood Chain / Community comes together / First power-up</span></div><b>NOW</b></div>
          <div className="roadmap-item"><span className="roadmap-dot" /><div><p>PHASE 02</p><h3>Power moves</h3><span>Grow the forest / Increase volume / Build the strongest hood on chain</span></div><b>NEXT</b></div>
          <div className="roadmap-item"><span className="roadmap-dot" /><div><p>PHASE 03</p><h3>Super Saiyan</h3><span>Community-led expansion / New realms / The strongest evolution yet</span></div><b>SOON</b></div>
        </div>
      </section>

      <section className="community-section container" id="community"><div className="community-copy"><div className="eyebrow"><Shield size={15} /> Join the movement</div><h2>Ready to<br /><span>power up?</span></h2><p>No limits. No holding back. Find your crew and enter the hood.</p><div className="community-actions"><a className="button button-primary" href="https://t.me/ssjhoodcoin" target="_blank" rel="noreferrer"><Send size={17} /> Join Telegram</a><a className="button button-outline" href="https://x.com/ssjhoodcoin" target="_blank" rel="noreferrer"><Twitter size={16} /> Follow on X</a><a className="button button-outline" href="https://dexscreener.com/robinhood/0xssjhood000000" target="_blank" rel="noreferrer">View on Dexscreener <ExternalLink size={16} /></a></div></div><div className="community-art"><img className="community-art-image" src="/images/sher.png" alt="The Sherwood forest" /><div className="community-label">THE STRONGEST<br /><span>COMMUNITY</span></div></div></section>

      <footer className="footer container"><img className="footer-image" src="/images/peop.png" alt="The Sherwood community" /><div className="footer-meta"><a className="brand" href="#top"><img src="/logo.png" alt="SSJHood logo" /><span>$SSJHOOD</span></a><span>Built with power on Robinhood Chain.</span><span className="footer-disclaimer">Disclaimer: $SSJHOOD is a parody meme token for entertainment only. Crypto assets are highly risky and may lose all value. Never invest more than you can afford to lose.</span><span>© 2026 SSJHOOD</span></div></footer>
    </main>
  );
}

export default App;
