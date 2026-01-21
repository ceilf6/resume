// ItemHeader/ItemHeader.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var ItemHeader = ({
  leftContent,
  startYear,
  startMonth,
  startDate,
  endYear,
  endMonth,
  endDate,
  className = ""
}) => {
  const formatDateTime = () => {
    let start = `${startYear}`;
    let end = `${endYear}`;
    if (startMonth !== void 0) {
      start += `-${String(startMonth).padStart(2, "0")}`;
      if (startDate !== void 0) {
        start += `-${String(startDate).padStart(2, "0")}`;
      }
    }
    if (endMonth !== void 0) {
      end += `-${String(endMonth).padStart(2, "0")}`;
      if (endDate !== void 0) {
        end += `-${String(endDate).padStart(2, "0")}`;
      }
    }
    return `${start}/${end}`;
  };
  const formatDisplayText = () => {
    let start = `${startYear} \u5E74`;
    let end = `${endYear} \u5E74`;
    if (startMonth !== void 0) {
      start += ` ${startMonth} \u6708`;
      if (startDate !== void 0) {
        start += ` ${startDate} \u65E5`;
      }
    }
    if (endMonth !== void 0) {
      end += ` ${endMonth} \u6708`;
      if (endDate !== void 0) {
        end += ` ${endDate} \u65E5`;
      }
    }
    return `${start} - ${end}`;
  };
  const dateTime = formatDateTime();
  const displayText = formatDisplayText();
  return /* @__PURE__ */ jsxs("div", { className: `item-header ${className}`.trim(), children: [
    /* @__PURE__ */ jsx("h3", { className: "item-header__left", children: leftContent }),
    /* @__PURE__ */ jsx("time", { className: "item-header__right", dateTime, children: displayText })
  ] });
};
var ItemHeader_default = ItemHeader;

// SectionHeader/SectionHeader.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var SectionHeader = ({
  title,
  className = ""
}) => {
  return /* @__PURE__ */ jsxs2("div", { className: `SectionHeader ${className}`.trim(), children: [
    /* @__PURE__ */ jsx2("h2", { className: "SectionHeader__title", children: title }),
    /* @__PURE__ */ jsx2("div", { className: "SectionHeader__divider", "aria-hidden": "true" })
  ] });
};
var SectionHeader_default = SectionHeader;

// utils/parseMarkdown.tsx
import React from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var tokenize = (text) => {
  const tokens = [];
  const regex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`)/g;
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({
        type: "text",
        content: text.slice(lastIndex, match.index)
      });
    }
    if (match[2] !== void 0 && match[3] !== void 0) {
      tokens.push({
        type: "link",
        content: match[2],
        href: match[3]
      });
    } else if (match[4] !== void 0) {
      tokens.push({
        type: "strong",
        content: match[4]
      });
    } else if (match[5] !== void 0) {
      tokens.push({
        type: "em",
        content: match[5]
      });
    } else if (match[6] !== void 0) {
      tokens.push({
        type: "code",
        content: match[6]
      });
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push({
      type: "text",
      content: text.slice(lastIndex)
    });
  }
  return tokens;
};
var renderTokens = (tokens) => {
  return tokens.map((token, index) => {
    switch (token.type) {
      case "strong":
        return /* @__PURE__ */ jsx3("strong", { children: token.content }, index);
      case "em":
        return /* @__PURE__ */ jsx3("em", { children: token.content }, index);
      case "code":
        return /* @__PURE__ */ jsx3("code", { children: token.content }, index);
      case "link":
        return /* @__PURE__ */ jsx3("a", { href: token.href, target: "_blank", rel: "noopener noreferrer", children: token.content }, index);
      default:
        return /* @__PURE__ */ jsx3(React.Fragment, { children: token.content }, index);
    }
  });
};
var parseMarkdown = (text) => {
  const tokens = tokenize(text);
  return renderTokens(tokens);
};

// utils/withMarkdown.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var DEFAULT_EXCLUDE = [
  "className",
  "id",
  "style",
  "href",
  "src",
  "alt",
  "title",
  "name",
  "type",
  "value",
  "placeholder"
  // 以 Link、Url、Id、Class、Key 结尾的 props
];
var shouldExclude = (key, excludeList) => {
  if (excludeList.includes(key)) return true;
  const excludeSuffixes = ["Link", "Url", "Href", "Id", "Class", "Key", "Ref"];
  return excludeSuffixes.some((suffix) => key.endsWith(suffix));
};
var parseProps = (props, options = {}) => {
  const { exclude = [], only } = options;
  const excludeList = [...DEFAULT_EXCLUDE, ...exclude];
  const result = {};
  for (const [key, value] of Object.entries(props)) {
    const shouldParse = only ? only.includes(key) : !shouldExclude(key, excludeList);
    if (shouldParse && typeof value === "string") {
      result[key] = parseMarkdown(value);
    } else if (shouldParse && Array.isArray(value)) {
      result[key] = value.map(
        (item) => typeof item === "string" ? parseMarkdown(item) : item
      );
    } else {
      result[key] = value;
    }
  }
  return result;
};
function withMarkdown(Component, options = {}) {
  const WrappedComponent = (props) => {
    const parsedProps = parseProps(props, options);
    return /* @__PURE__ */ jsx4(Component, { ...parsedProps });
  };
  WrappedComponent.displayName = `withMarkdown(${Component.displayName || Component.name || "Component"})`;
  return WrappedComponent;
}

// ProjectItem/ProjectItem.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var ProjectItem = ({
  leftContent,
  startYear,
  startMonth,
  startDate,
  endYear,
  endMonth,
  endDate,
  position,
  projectName,
  projectLink,
  techStack,
  description,
  tasks,
  className = ""
}) => {
  return /* @__PURE__ */ jsxs3("article", { className: `project-item ${className}`.trim(), children: [
    /* @__PURE__ */ jsx5(
      ItemHeader_default,
      {
        leftContent,
        startYear,
        startMonth,
        startDate,
        endYear,
        endMonth,
        endDate
      }
    ),
    /* @__PURE__ */ jsxs3("dl", { className: "project-item__details", children: [
      /* @__PURE__ */ jsxs3("div", { className: "project-item__row", children: [
        /* @__PURE__ */ jsx5("dt", { children: "\u5C97\u4F4D: " }),
        /* @__PURE__ */ jsx5("dd", { children: position })
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "project-item__row", children: [
        /* @__PURE__ */ jsx5("dt", { children: "\u5DE5\u4F5C\u9879\u76EE: " }),
        /* @__PURE__ */ jsx5("dd", { children: projectLink ? /* @__PURE__ */ jsx5("a", { href: projectLink, target: "_blank", rel: "noopener noreferrer", children: projectName }) : projectName })
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "project-item__row", children: [
        /* @__PURE__ */ jsx5("dt", { children: "\u6280\u672F\u6808: " }),
        /* @__PURE__ */ jsx5("dd", { children: techStack })
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "project-item__row", children: [
        /* @__PURE__ */ jsx5("dt", { children: "\u9879\u76EE\u63CF\u8FF0: " }),
        /* @__PURE__ */ jsx5("dd", { children: description })
      ] })
    ] }),
    /* @__PURE__ */ jsxs3("section", { className: "project-item__tasks", children: [
      /* @__PURE__ */ jsx5("h4", { className: "project-item__tasks-title", children: "\u4E3B\u8981\u5DE5\u4F5C: " }),
      /* @__PURE__ */ jsx5("ol", { className: "project-item__tasks-list", children: tasks.map((task, index) => /* @__PURE__ */ jsx5("li", { children: task }, index)) })
    ] })
  ] });
};
var ProjectItem_default = withMarkdown(ProjectItem);
export {
  ItemHeader_default as ItemHeader,
  ProjectItem_default as ProjectItem,
  SectionHeader_default as SectionHeader
};
//# sourceMappingURL=index.js.map