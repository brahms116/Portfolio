import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import LandingSection from "../components/LandingSection";
import PortfolioSection from "../components/PortfolioSection";
import DbService from "../DbService";
import IPortfolioItem from "../models/IPortfolioItem";
import colors from "../styles/colors";
import { Element } from "react-scroll";
import Head from "next/head";

export default function Home(props: { items: IPortfolioItem[] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>PORTFOLIO</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="page">
        <LandingSection />
        <Element name="portfolio">
          <PortfolioSection items={props.items} />
        </Element>
      </div>
      <style jsx>{`
        .page {
          background: ${colors.background};
          min-height: 100vh;
          max-width: 100vw;
        }
      `}</style>
    </motion.div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { items: DbService.getAllItems().payload!.items },
    revalidate: 1,
  };
};
