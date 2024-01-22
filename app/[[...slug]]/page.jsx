"use client";
import { useEffect, useState } from "react";
import { getPageFromSlug } from "../../utils/content";
import { WelcomeBannerHome } from "../../components/Home/WelcomeBannerHome";
import { TitleCardImage } from "../../components/TitleCardImage";
import { RegionalHome } from "../../components/Home/RegionalHome";
import { StatsHome } from "../../components/Home/StatsHome";

const componentMap = {
  home: WelcomeBannerHome,
  brandSection: TitleCardImage,
  statsSection: StatsHome,
  regionalSection: RegionalHome,
};

export default function ComposablePage({ params }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const slug = "/" + (params?.slug ?? [""]).join("/");
      const page = await getPageFromSlug(slug);
      setData(page);
    })();
  }, [params?.slug]);

  return (
    <div>
      {(data.sections || []).map((section, idx) => {
        const Component = componentMap[section.type];
        return <Component key={idx} {...section} />;
      })}
    </div>
  );
}
