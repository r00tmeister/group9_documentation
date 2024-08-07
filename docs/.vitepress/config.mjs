import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentation Title",
  description: "Documentation Description",
  appearance: "dark",
  base: "/group9_documentation/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Product Requirements", link: "/prd/project-information" },
      { text: "Technical Requirements", link: "/trd/requirements-overview" },
      {
        text: "API Documentation",
        link: "#",
      },
    ],
    clearUrls: true,
    sidebar: {
      "/prd/": [
        {
          text: "Product Requirements",
          items: [
            { text: "Project Information", link: "/prd/project-information" },
          ],
        },
      ],
      "/trd/": [
        {
          text: "Introduction and goals",
          items: [
            {
              text: "Requirements",
              items: [
                {
                  text: "Requirements Overview",
                  link: "/trd/requirements-overview",
                },
                {
                  text: "External Interface Requirements",
                  link: "/trd/external-interface-requirements",
                },
                {
                  text: "Functional Requirements",
                  link: "/trd/functional-requirements",
                },
                {
                  text: "Non Functional requirements",
                  link: "/trd/non-functional-requirements",
                },
                {
                  text: "Use Case Diagram",
                  link: "/trd/use-case-diagram",
                },
              ],
            },
            {
              text: "Quality Goals",
              link: "/trd/quality-goals",
            },
            { text: "Stakeholders", link: "/trd/stakeholders" },
          ],
        },
        {
          text: "Constraints",
          items: [{ text: "Constraints", link: "/trd/constraints" }],
        },
        {
          text: "Context and scope",
          items: [
            { text: "Business context", link: "/trd/business-context" },
            { text: "Technical context", link: "/trd/technical-context" },
          ],
        },
        {
          text: "Solution strategy",
          items: [
            {
              text: "Proposed solution strategy",
              link: "/trd/proposed-solution-strategy",
            },
          ],
        },
        {
          text: "Building block view",
          items: [
            { text: "Context Level", link: "/trd/context-level" },
            { text: "Container Level", link: "/trd/container-level" },
            {
              text: "Component Level",
              items: [
                {
                  text: "Front-end layer component",
                  link: "/trd/front-end-layer-component",
                },
                {
                  text: "Back-end layer component",
                  link: "/trd/back-end-layer-component",
                },
                {
                  text: "Data layer component",
                  link: "/trd/data-layer-component",
                },
              ],
            },
            {
              text: "Code Level",
              items: [
                {
                  text: "Entity Relationship Diagram",
                  link: "/trd/entity-relationship-diagram",
                },
                {
                  text: "Application Programming Interface",
                  link: "/trd/application-programming-interface",
                },
                {
                  text: "Pages",
                  link: "/trd/pages",
                },
                {
                  text: "Components",
                  link: "/trd/components",
                },
                {
                  text: "Composables",
                  link: "/trd/composables",
                },
                {
                  text: "State",
                  link: "/trd/state",
                },
              ],
            },
          ],
        },
        {
          text: "Runtime view",
          items: [{ text: "Runtime view", link: "/trd/runtime-view" }],
        },
        {
          text: "Deployment view",
          items: [
            { text: "Cloud infrastructure", link: "/trd/cloud-infrastructure" },
          ],
        },
        {
          text: "Crosscutting concepts",
          items: [
            { text: "Middleware", link: "/trd/middleware" },
            { text: "Integrations", link: "/trd/integrations" },
          ],
        },
        {
          text: "Architectural decisions",
          items: [
            {
              text: "Architectural Decisions",
              link: "/trd/architechtural-decisions",
            },
          ],
        },
        {
          text: "Quality requirements",
          items: [
            {
              text: "Pragmatic Quality Model",
              link: "/trd/pragmatic-quality-model",
            },
          ],
        },
        {
          text: "Risk and technical debt",
          items: [
            {
              text: "Risk and technical debt",
              link: "/trd/risk-and-technical-debt",
            },
          ],
        },
        /*    {
          text: "Glossary",
          items: [{ text: "Glossary", link: "/trd/glossary" }],
        }, */
      ],
    },
    appearance: "dark",
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
