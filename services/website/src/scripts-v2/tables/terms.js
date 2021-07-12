const readMarkdownPages = require('../../scripts/readMarkdownPages')

module.exports = {
    id: "terms",
    create: async () => {
        const pages = await readMarkdownPages()

        return pages.filter(page => page.template === "TermDetailPage")
    }
}