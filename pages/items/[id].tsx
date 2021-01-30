import { motion } from "framer-motion";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Button from "../../components/Button";
import PortfolioHeading from "../../components/PortfolioHeading";
import backIcon from "../../media/backIcon.svg";
import PortfolioSubtitle from "../../components/PortfolioSubtitle";
import PortfolioTitle from "../../components/PortfolioTitle";
import DbService from "../../DbService";

import IPortfolioItem from "../../models/IPortfolioItem";
import { useRouter } from "next/router";

export default function PortfolioItemDetails(props: { item: IPortfolioItem }) {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="background">
        <div className="page">
          <img
            src={backIcon}
            alt="back_button"
            className="back_button"
            onClick={() => router.push("/")}
          />
          <img src={`../` + props.item.imgSrc} alt="logo" className="logo" />

          <PortfolioTitle
            title={props.item.title}
            alternateColor={props.item.color.primary}
          />
          <PortfolioSubtitle
            subtitle={props.item.subtitle}
            alternateColor={props.item.color.primary}
          />

          <div className="button_container">
            <a href={props.item.link} target="_blank">
              <Button
                onClick={() => {}}
                label="VIEW SITE"
                alternateColors={{
                  background: {
                    idle: props.item.color.button.idle,
                    hover: props.item.color.button.hover,
                    pressed: props.item.color.button.pressed,
                  },
                  text: props.item.color.button.text,
                }}
              />
            </a>
          </div>
          <div className="description">{props.item.description}</div>
          <div className="heading_container">
            <PortfolioHeading
              heading="TECHNOLOGIES"
              items={props.item.technologies}
              alternateColors={{
                heading: props.item.color.primary,
                item: props.item.color.text,
              }}
            />
            <PortfolioHeading
              heading="LANGUAGES"
              items={props.item.languages}
              alternateColors={{
                heading: props.item.color.primary,
                item: props.item.color.text,
              }}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .background: {
          max-width: 100vw;
          box-sizing: border-box;
          min-height: 100vh;
          background: ${props.item.color.background};
        }
        .page {
          box-sizing: border-box;
          max-width: 100vw;

          padding: 0 10vw;
          display: grid;
          grid-template:
            "." ${43 / 16}rem
            "back_buttonA" auto
            "." ${47 / 16}rem
            "logoA" auto
            "." ${90 / 16}rem
            "titleA" auto
            "." ${22 / 16}rem
            "subtitleA" auto
            "." ${47 / 16}rem
            "buttonA" auto
            "." ${55 / 16}rem
            "descriptionA" auto/auto;
        }

        .back_button {
          grid-area: back_buttonA;
          cursor: pointer;
        }
        .logo {
          justify-self: center;
          grid-area: logoA;
        }

        .button_container {
          grid-area: buttonA;

          display: flex;
        }

        a {
          text-decoration: none;
        }

        .description {
          font-family: "Montserrat", sans-serif;
          grid-area: descriptionA;
          line-height: 200%;
          color: ${props.item.color.text};
        }

        .heading_container {
          display: none;
        }

        @media (min-width: 768px) {
          .page {
            grid-template:
              ". ." ${52 / 16}rem
              "back_buttonA back_buttonA" auto
              ". ." ${47 / 16}rem
              "titleA logoA" auto
              ". logoA" ${30 / 16}rem
              "subtitleA logoA" auto
              ". ." ${47 / 16}rem
              "buttonA ." auto
              ". ." ${66 / 16}rem
              "descriptionA descriptionA" auto
              / 1fr auto;
          }
          .logo {
            justify-self: start;
          }
        }

        @media (min-width: 1000px) {
          .description {
            width: 80%;
          }
        }

        @media (min-width: 1400px) {
          .page {
            grid-template:
              ". ." ${52 / 16}rem
              "back_buttonA back_buttonA" auto
              ". ." ${47 / 16}rem
              "titleA logoA" auto
              ". logoA" ${30 / 16}rem
              "subtitleA logoA" auto
              ". headingA" ${47 / 16}rem
              "buttonA headingA" auto
              ". headingA" ${66 / 16}rem
              "descriptionA headingA" auto
              / 1fr auto;
          }

          .heading_container {
            display: block;
            grid-area: headingA;
          }
        }
      `}</style>
    </motion.div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const result = DbService.getAllId().payload;
  if (result) {
    return {
      paths: result.ids.map((x) => ({ params: { id: x } })),
      fallback: true,
    };
  } else {
    return {
      paths: ["null"],
      fallback: true,
    };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  // console.log(DbService.getAllItems().payload?.items[0]);
  for (const i of DbService.getAllItems().payload?.items!) {
    if (i.id === context.params!.id) {
      return {
        props: {
          item: i,
        },
        revalidate: 1,
      };
    }
  }
  return {
    props: {
      item: DbService.getAllItems().payload?.items[0],
    },
    revalidate: 1,
  };
};
