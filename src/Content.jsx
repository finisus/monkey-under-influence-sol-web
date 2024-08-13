import pfpImg from './assets/pfp.jpeg';

function Content() {
  return (
    <div className='content window'>
      <div className='title-bar'>
        <div className="title-bar-text">monkeyhigh.exe</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">
        <img src={pfpImg} alt="pfp" />
      </div>
    </div>
  );
}

export default Content;