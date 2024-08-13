
function Navbar() {

  // Hyperlinks
  const openTwitter = () => {
    window.open('https://twitter.com/', '_blank');
  }
  const openTelegram = () => {
    window.open('https://t.me/monekyunderinfluence', '_blank');
  }
  const openSolscan = () => {
    window.open('https://solscan.io/token/B9te4rs8gBiRKZVo2bPVus1x239zpg3fm8JkRmZnNLsP', '_blank');
  }
  const openBuy = () => {
    window.open('https://pump.fun/B9te4rs8gBiRKZVo2bPVus1x239zpg3fm8JkRmZnNLsP', '_blank');
  }

  return (
    <div className="navbar window">
      <div className="title-bar">
        <div className="title-bar-text">Socials</div>
      </div>
      <div className="window-body">
        <button onClick={openTwitter}>Twitter</button>
        <button onClick={openTelegram}>Telegram</button>
        <button onClick={openSolscan}>Solscan</button>
        <button className="buy-btn" onClick={openBuy}>Buy</button>
      </div>
    </div>
  );
}

export default Navbar;