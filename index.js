const QRCode = require("qrcode");
const Excel = require("xlsx");

function generateQrCode(filename, data) {
  try {
    QRCode.toFile("images/" + filename + ".png", data, { width: 500 });
  } catch (err) {
    console.log(err);
  }
}
const ws = Excel.readFile("qr_excel.xlsx").Sheets["Sheet1"];
const data = Excel.utils.sheet_to_json(ws);

data.forEach(function(r) {
  generateQrCode(r.FILENAME, r.URLS);
});
