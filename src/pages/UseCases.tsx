import { Layout } from "@/components/Layout";
import { UseCaseHero } from "@/components/usecases/UseCaseHero";
import { UseCaseScrollStory } from "@/components/usecases/UseCaseScrollStory";
import { UseCaseResults } from "@/components/usecases/UseCaseResults";
import { UseCaseCTA } from "@/components/usecases/UseCaseCTA";

const UseCases = () => {
  return (
    <Layout>
      <UseCaseHero />
      <UseCaseScrollStory />
      <UseCaseResults />
      <UseCaseCTA />
    </Layout>
  );
};

export default UseCases;
