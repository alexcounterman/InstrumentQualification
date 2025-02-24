const PDFDocument = require('pdfkit');
const fs = require('fs');

function generateReport(instrumentId, matrix) {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(`report_${instrumentId}.pdf`));

  doc.fontSize(16).text('Instrument Qualification Report', { align: 'center' });
  doc.moveDown();

  matrix.forEach((item) => {
    doc.text(`Requirement: ${item.requirement.description}`);
    doc.text(`Status: ${item.status}`);
    doc.moveDown();
  });

  doc.end();
}

module.exports = { generateReport };
