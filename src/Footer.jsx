import { useRef } from "react";

function Footer() {
  const contractRef = useRef(null);

  const copyContract = async() => {
    const address = contractRef.current;
    const textToCopy = address.innerText;

    try {
      // Try the modern Clipboard API first (if supported)
      navigator.clipboard.writeText(textToCopy);
      console.log("Text copied successfully using Clipboard API");
      alert("Contract copied successfully!");
    } catch (err) {
      // If Clipboard API fails, use the legacy approach
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed"; // Hide element off-screen
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      console.log("Text copied successfully using legacy approach");
      alert("Contract copied successfully!");
    }
  }

  return (
    <div className="footer window">
      <p>DISCLAIMER <br /> $MUI is a meme coin with no intrinsic value or expectations of financial returns.</p>

      <span className="contract">
        CA: <span ref={contractRef}>B9te4rs8gBiRKZVo2bPVus1x239zpg3fm8JkRmZnNLsP</span>
      </span>
      <button 
        onClick={copyContract} 
      >
        Copy Contract
      </button>
    </div>
  );
}

export default Footer;