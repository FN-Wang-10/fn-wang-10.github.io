import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Tips from "../components/tips";
import { HOME_BUTTON_CONFIG } from "../utils";

import "./index.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const PRIMARY_CLASS = "button button--primary button--lg mg-8";
  console.log("siteConfig", siteConfig);

  return (
    <Layout>
      <main className="layout-main">
        <div className="wrap">
          <Tips />
          {HOME_BUTTON_CONFIG.length &&
            HOME_BUTTON_CONFIG.map((item) => (
              <div key={item.title}>
                {item.children.length &&
                  item.children.map((i) => (
                    <Link key={i.to} to={i.to} className={PRIMARY_CLASS}>
                      {i.title}
                    </Link>
                  ))}
              </div>
            ))}
        </div>
      </main>
    </Layout>
  );
}
