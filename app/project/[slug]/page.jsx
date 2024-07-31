import ProjectDetail from "@/components/ProjectDetail";


export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
const page = ({ params }) => {
  const slug  = params ? params.slug : 'en';
  return <ProjectDetail slug={slug} />;
};
export default page;

