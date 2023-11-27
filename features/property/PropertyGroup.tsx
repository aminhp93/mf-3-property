import React from "react";
// import { Icon } from "../../lib/components";
// import List from "../../lib/components/List";
// class List extends React.PureComponent {
//   render() {
//     return <ul>{this.props.children}</ul>;
//   }
// }

// class ListElement extends React.PureComponent {
//   render() {
//     return (
//       <li
//         // className={this.props.compact ? compactElement : normalElement}
//         onClick={this.props.onClick}
//         onKeyDown={(e) =>
//           (e.key === "Enter" || e.key === " ") && this.props.onClick()
//         }
//       >
//         {this.props.leadingElement}
//         <span>{this.props.children}</span>
//         {this.props.trailingElement}
//       </li>
//     );
//   }
// }

// export default class PropertyGroup extends React.Component {
//   state = {
//     expanded: false,
//   };

//   render() {
//     const { label, children } = this.props;
//     return (
//       <React.Fragment>
//         <ListElement
//           onClick={() => this.setState((s) => ({ expanded: !s.expanded }))}
//           //   leadingElement={
//           //     <Icon>{this.state.expanded ? "expand_more" : "chevron_right"}</Icon>
//           //   }
//           compact={true}
//         >
//           {label}
//         </ListElement>
//         {this.state.expanded && children}
//       </React.Fragment>
//     );
//   }
// }

const ListElement = ({ onClick, children }: any) => {
  return (
    <li
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
    >
      <span>{children}</span>
    </li>
  );
};

const PropertyGroup = ({ label, children }: any) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <React.Fragment>
      <ListElement onClick={() => setExpanded(!expanded)}>{label}</ListElement>
      {expanded && children}
    </React.Fragment>
  );
};

export default PropertyGroup;
