import React from "react";
import Feature from "./Feature/Feature";

function FeatureList(props) {
  let features;
  if (props.features) {
    features = Object.keys(props.features).map(category => {
      const options = props.features[category].map((item, index) => {
        const selectedClass =
          item.name === props.selected[category].name
            ? "feature__selected"
            : "";
        const featureClass = "feature__option " + selectedClass;
        return (
          <Feature
            key={index}
            featureHeader={category}
            item={item}
            featureClass={featureClass}
            updateFeature={props.updateFeature}
          />
        );
      });

      return (
        <div className="feature" key={category}>
          <div className="feature__name">{category}</div>
          <ul className="feature__list">{options}</ul>
        </div>
      );
    });
  }

  return (
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
      {features}
    </section>
  );
}
export default FeatureList;
