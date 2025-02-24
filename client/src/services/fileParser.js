const java = require('java');
java.classpath.push('path/to/pdfbox.jar');

async function extractFromPDF(filePath) {
  const PDFTextStripper = java.import('org.apache.pdfbox.text.PDFTextStripper');
  const PDDocument = java.import('org.apache.pdfbox.pdmodel.PDDocument');
  const document = PDDocument.loadSync(filePath);
  const stripper = new PDFTextStripper();
  const text = stripper.getTextSync(document);
  document.closeSync();
  return text;
}

module.exports = { extractFromPDF };
