"use client";
import { useEffect, useState } from "react";
import { getPageFromSlug } from "../../utils/content";
import { Home } from "../../components/Home";

const componentMap = {
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

  return (
    <div>
      {(data.sections || []).map((section, idx) => {
        const Component = componentMap[section.type];
        return <Component key={idx} {...section} />;
      })}
    </div>
  );
}
