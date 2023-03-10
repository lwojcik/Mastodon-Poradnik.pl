const path = require("path");
const fs = require("fs");
const html_to_pdf = require("html-pdf-node");
const siteConfig = require("../content/_data/siteConfig.json");

const generatePdf = () => {
  console.log("Generating PDF file...");

  const rootPath = path.join(__dirname, "..", "_site");

  const htmlContentPath = path.join(rootPath, "czytaj", "czytaj-pdf.html");

  const content = fs.readFileSync(htmlContentPath, {
    encoding: "utf8",
    flag: "r"
  });

  const file = {
    content
  };

  const options = {
    format: siteConfig.pdf.format,
    path: path.join(rootPath, siteConfig.pdf.fileName),
    margin: {
      top: "2.2cm",
      bottom: "2.2cm",
      left: "1.5cm",
      right: "1.5cm"
    },
    preferCSSPageSize: true,
    displayHeaderFooter: true,
    headerTemplate: "<div/>",
    footerTemplate:
      '<div style="text-align: right;width: 297mm;font-size: 10px;"><span style="margin-right: 1cm">str. <span class="pageNumber"></span> z <span class="totalPages"></span></span></div>'
  };

  html_to_pdf.generatePdf(file, options);
};

generatePdf();
