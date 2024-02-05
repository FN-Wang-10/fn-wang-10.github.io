import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "富强",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>社会主义核心价值观</>,
  },
  {
    title: "民主",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        <code>社会主义核心价值观</code>
      </>
    ),
  },
  {
    title: "和谐",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>社会主义核心价值观</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
