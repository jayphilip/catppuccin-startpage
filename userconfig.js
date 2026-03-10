// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "London",
    scale: "C",
  },
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },

  search: {
    engines: {
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      g: ["https://google.com/search?q=", "Google"],
    },
    default: "p",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://www.perplexity.ai",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/banner_09.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
            {
              name: "unsupervisedleap",
              url: "https://unsupervisedleap.com",
              icon: "brand-blogger",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            }
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "bbc news",
              url: "https://www.bbc.co.uk/news",
              icon: "brand-bbc",
              icon_color: palette.red,
            },
            {
              name: "the guardian",
              url: "https://www.theguardian.com",
              icon: "news",
              icon_color: palette.green,
            },
            {
              name: "ft",
              url: "https://www.ft.com",
              icon: "chart-bar",
              icon_color: palette.peach,
            },
            {
              name: "nyt",
              url: "https://www.nytimes.com",
              icon: "newspaper",
              icon_color: palette.blue,
            },
            {
              name: "the atlantic",
              url: "https://www.theatlantic.com",
              icon: "wave-sine",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/banner_07.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.peach,
            },
            {
              name: "Runpod",
              url: "https://runpod.io",
              icon: "server",
              icon_color: palette.green,
            },
            {
              name: "hugging face",
              url: "https://huggingface.co",
              icon: "mood-smile",
              icon_color: palette.yellow,
            },
            {
              name: "papers with code",
              url: "https://paperswithcode.com",
              icon: "file-type-pdf",
              icon_color: palette.red,
            },
            {
              name: "arxiv cs",
              url: "https://arxiv.org/list/cs.LG/recent",
              icon: "school",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: palette.blue,
            },
            {
              name: "neetcode",
              url: "https://neetcode.io",
              icon: "topology-star-3",
              icon_color: palette.green,
            },
            {
              name: "hackerrank",
              url: "https://www.hackerrank.com",
              icon: "brand-open-source",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
    {
      name: "chill",
      background_url: "src/img/banners/banner_08.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.red,
            }
          ],
        },
        {
          name: "gaming",
          links: [
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            }
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.blue);
