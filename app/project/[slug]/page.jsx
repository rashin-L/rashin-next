import ProjectDetail from "@/pages/ProjectDetail";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
// import { BASE_URL } from "../../utils/config"
async function page() {
  //   const res = await fetch(`${BASE_URL}/projects`, {
  //     cache: "no-cache",
  //   });
  //   const data = await res.json();
  //   const projectsList = data?.result?.items;

  // return <ProjectsPage projectsList={projectsList} />;
  return <ProjectDetail />;
}

export default page;
