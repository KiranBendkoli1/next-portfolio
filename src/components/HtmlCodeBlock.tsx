import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface HtmlCodeBlockProps {
  htmlCode: string;
}

const HtmlCodeBlock: React.FC<HtmlCodeBlockProps> = ({ htmlCode }) => {
  return (
    <div className="relative">
      <SyntaxHighlighter
        language="html"
        style={dracula}
        wrapLongLines={true}
        customStyle={{
          backgroundColor: "transparent",
          fontSize: "10px",
          lineHeight: "1.5",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          overflow: "hidden",
        }}
      >
        {htmlCode}
      </SyntaxHighlighter>
    </div>
  );
};
export default HtmlCodeBlock;
