const themeClassMap = {
  primary: "bg-violet-800 text-white",
  dark: "bg-gray-600 text-white",
};

export const Stats = (props) => {
  return (
    <div
      data-sb-object-id={props.id}
      className={`py-24 px-12 text-center ${
        themeClassMap[props.theme] ?? themeClassMap["dark"]
      }`}
    >
      <div className="mx-auto">
        <div className="max-w-2xl mx-auto mb-16">
          <h2
            data-sb-field-path="heading"
            className="mb-4 text-4xl sm:text-5xl"
          >
            {props.heading}
          </h2>
          <div
            data-sb-field-path="body"
            options={{ forceBlock: true }}
            className="sm:text-xl"
          >
            {props.body}
          </div>
        </div>
        <div className="grid max-w-3xl gap-12 mx-auto sm:grid-cols-3">
          {props.stats.length > 0 &&
            props.stats.map((stat, idx) => (
              <StatItem key={idx} theme={props.theme} {...stat} />
            ))}
        </div>
      </div>
    </div>
  );
};

const itemThemeClassMap = {
  primary: "bg-violet-700",
  dark: "bg-gray-500",
};

const StatItem = (props) => {
  return (
    <div
      data-sb-object-id={props.id}
      className={`px-4 py-8 rounded-md ${
        itemThemeClassMap[props.theme] ?? itemThemeClassMap["dark"]
      }`}
    >
      <div data-sb-field-path="value" className="mb-3 text-3xl sm:text-4xl">
        {props.value}
      </div>
      <div data-sb-field-path="label" className="text-sm uppercase">
        {props.label}
      </div>
    </div>
  );
};
