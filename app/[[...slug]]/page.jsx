"use client";
import { useEffect, useState } from "react";
import { getPageFromSlug } from "../../utils/content";
import { Hero } from "../../components/Hero";
import { Stats } from "../../components/Stats";

const componentMap = {
  hero: Hero,
  stats: Stats,
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

  return (
    <div>
      {(data.sections || []).map((section, idx) => {
        const Component = componentMap[section.type];
        return <Component key={idx} {...section} />;
      })}
    </div>
  );
}
