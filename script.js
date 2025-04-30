function generateQRCode() {
    const qrBox = document.getElementById('qrBox');
    const link = document.getElementById('linkInput').value;
    const downloadBtn = document.getElementById('downloadBtn');

    qrBox.innerHTML = ''; 

    if (!link) {
      alert('Please enter a link!');
      return;
    }

    QRCode.toCanvas(link, { width: 200 }, function (err, canvas) {
      if (err) {
        console.error(err);
        alert('Failed to generate QR code.');
        return;
      }

      qrBox.appendChild(canvas);

      downloadBtn.style.display = 'inline-block';

      downloadBtn.onclick = function () {
        const imageFormat = 'image/png';
        const imageData = canvas.toDataURL(imageFormat);

        const a = document.createElement('a');
        a.href = imageData;
        a.download = 'qrcode.png';
        a.click();
      };
    });
  }

 
