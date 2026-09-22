function escapeHtml(str) {
  return (str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Sadə mətni paraqraflara bölür (boş sətir = yeni paraqraf), hər şeyi escape edir.
// Öz sətrində olan ![alt](https://...) sintaksisini şəkil kimi göstərir.
function renderContent(text) {
  return (text ?? "")
    .split(/\n\s*\n/)
    .map(renderParagraph)
    .join("");
}

function renderParagraph(paragraph) {
  const trimmed = paragraph.trim();
  const imageMatch = trimmed.match(/^!\[([^\]]*)\]\((https?:\/\/[^\s)]+)\)$/);

  if (imageMatch) {
    const alt = imageMatch[1];
    const url = imageMatch[2];
    const caption = alt ? `<figcaption>${escapeHtml(alt)}</figcaption>` : "";
    return `<figure class="article-image"><img src="${escapeHtml(url)}" alt="${escapeHtml(alt)}" loading="lazy">${caption}</figure>`;
  }

  return `<p>${escapeHtml(paragraph).replace(/\n/g, "<br>")}</p>`;
}
