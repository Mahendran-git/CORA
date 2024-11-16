document.getElementById("getStartedBtn").addEventListener("click", function() {
    document.getElementById("introPage").style.display = "none";
    document.getElementById("colorPickerPage").style.display = "block";
  });

  document.getElementById("colorPicker").addEventListener("input", function() {
    const color = this.value;
    document.getElementById("hexCode").textContent = color;
    const rgbColor = hexToRgb(color);
    document.getElementById("rgbCode").textContent = `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;
  });

  function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255
    };
  }

  function copyCode(id) {
    const code = document.getElementById(id).textContent;
    navigator.clipboard.writeText(code).then(() => {
      alert(`${code} copied to clipboard!`);
    });
  }