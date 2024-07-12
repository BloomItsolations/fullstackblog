export default function MarkdownPreview({ markdown }) {
  return <div dangerouslySetInnerHTML={{ __html: markdown }} />;
}
