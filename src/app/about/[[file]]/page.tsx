import Explorer from "@/components/Explorer";
import HtmlCodeBlock from "@/components/HtmlCodeBlock";
import Preview from "@/components/Preview";
import { ABOUT } from "@/constants";

export const runtime = 'edge';

interface AboutPageProps {
  params: { file?: string };
}

const AboutPage = ({ params }: AboutPageProps) => {
  const fileParam = params?.file as string;
  const activeFile = ABOUT.find((file) => file.label === fileParam) || ABOUT[0];
  return (
    <div className="flex flex-col min-h-[80vh] border-b border-gray-600 overflow-hidden">
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden w-full">
        {/* Explorer Sidebar */}
        <Explorer />
        <section className="flex flex-col flex-1 w-full md:w-4/5">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-[80vh] border-r border-gray-600">
              <div className="px-4 py-2 border-b  border-gray-600 bg-gray-800/40">
                <span className="font-semibold">
                  {activeFile.label
                    ? `${activeFile.label}.html`
                    : activeFile.label}
                </span>
              </div>
              <HtmlCodeBlock htmlCode={activeFile.code} />
            </div>
            <Preview params={params} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
