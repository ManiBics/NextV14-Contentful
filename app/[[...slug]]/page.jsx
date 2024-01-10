"use client";
import { useEffect, useState } from "react";
import { getPageFromSlug } from "../../utils/content";
import { Hero } from "../../components/Hero";
import { Stats } from "../../components/Stats";
import { Home } from "../../components/Home";

const componentMap = {
  hero: Hero,
  stats: Stats,
  home: Home,
};

export default function ComposablePage({ params }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const slug = "/" + (params?.slug ?? [""]).join("/");
      const page = await getPageFromSlug(slug);
      setData(page);
    })();
  }, []);
  console.log('data', data)
  return (
    <div>
      {(data.sections || []).map((section, idx) => {
        const Component = componentMap[section.type];
        return <Component key={idx} {...section} />;
      })}
    </div>
  );
}
