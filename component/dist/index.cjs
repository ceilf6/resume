"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var index_exports = {};
__export(index_exports, {
  ItemHeader: () => ItemHeader_default,
  ProjectItem: () => ProjectItem_default,
  SectionHeader: () => SectionHeader_default
});
module.exports = __toCommonJS(index_exports);

// ItemHeader/ItemHeader.tsx
var import_jsx_runtime = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: `item-header ${className}`.trim(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "item-header__left", children: leftContent }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", { className: "item-header__right", dateTime, children: displayText })
  ] });
};
var ItemHeader_default = ItemHeader;

// SectionHeader/SectionHeader.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var SectionHeader = ({
  title,
  className = ""
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: `SectionHeader ${className}`.trim(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { className: "SectionHeader__title", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "SectionHeader__divider", "aria-hidden": "true" })
  ] });
};
var SectionHeader_default = SectionHeader;

// utils/parseMarkdown.tsx
var import_react = __toESM(require("react"), 1);
var import_jsx_runtime3 = require("react/jsx-runtime");
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
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("strong", { children: token.content }, index);
      case "em":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("em", { children: token.content }, index);
      case "code":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("code", { children: token.content }, index);
      case "link":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: token.href, target: "_blank", rel: "noopener noreferrer", children: token.content }, index);
      default:
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react.default.Fragment, { children: token.content }, index);
    }
  });
};
var parseMarkdown = (text) => {
  const tokens = tokenize(text);
  return renderTokens(tokens);
};

// utils/withMarkdown.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Component, { ...parsedProps });
  };
  WrappedComponent.displayName = `withMarkdown(${Component.displayName || Component.name || "Component"})`;
  return WrappedComponent;
}

// ProjectItem/ProjectItem.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("article", { className: `project-item ${className}`.trim(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("dl", { className: "project-item__details", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "project-item__row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dt", { children: "\u5C97\u4F4D: " }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dd", { children: position })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "project-item__row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dt", { children: "\u5DE5\u4F5C\u9879\u76EE: " }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dd", { children: projectLink ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: projectLink, target: "_blank", rel: "noopener noreferrer", children: projectName }) : projectName })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "project-item__row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dt", { children: "\u6280\u672F\u6808: " }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dd", { children: techStack })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "project-item__row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dt", { children: "\u9879\u76EE\u63CF\u8FF0: " }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dd", { children: description })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("section", { className: "project-item__tasks", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h4", { className: "project-item__tasks-title", children: "\u4E3B\u8981\u5DE5\u4F5C: " }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("ol", { className: "project-item__tasks-list", children: tasks.map((task, index) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: task }, index)) })
    ] })
  ] });
};
var ProjectItem_default = withMarkdown(ProjectItem);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ItemHeader,
  ProjectItem,
  SectionHeader
});
//# sourceMappingURL=index.cjs.map