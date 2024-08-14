export function html(strings, ...values) {
    return strings.reduce((acc, str, i) => {
      const value = values[i] != null ? values[i] : '';
      return acc + str + escapeHtml(value);
    }, '');
  }
  
  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (m) => {
      switch (m) {
        case '&': return '&amp;';
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '"': return '&quot;';
        case "'": return '&#39;';
      }
    });
  }