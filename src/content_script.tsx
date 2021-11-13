import { loadUserPreference, userPreference } from "./storage";

// "mousemove"

const hideAllPosts = () => {
  const contentSections = document.querySelectorAll<HTMLElement>("#content");
  for (const section of contentSections) {
    const titleSection = section.querySelector<HTMLElement>("#title");

    if (titleSection === null) return;
    try {
      if (titleSection.innerHTML === "最新の YouTube 投稿") {
        section.style.display = "none";
      }
    } catch (e) {
      console.log(e);
    }
  }
};

const hideTopBar = () => {
  const header = "#header > ytd-feed-filter-chip-bar-renderer";
  const headerSection = document.querySelector<HTMLElement>(header);

  if (headerSection === null) return;

  headerSection.style.display = "none";
};

const hideDislike = () => {
  const dislike =
    "#top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(2)";
  const dislikeSection = document.querySelector<HTMLElement>(dislike);

  if (dislikeSection === null) return;

  dislikeSection.style.display = "none";
};

const hideSentimentBarRenderer = (selector: string) => {
  // const selector = "#sentiment"
  const selectorSection = document.querySelector<HTMLElement>(selector);

  if (selectorSection === null) return;

  selectorSection.style.display = "none";
};

interface ElementHref extends HTMLElement {
  href: string | null;
}

export const hideComments = (channelID: string) => {
  try {
    const content = "#contents > ytd-comment-thread-renderer";
    const contentSection = document.querySelectorAll<HTMLElement>(content);

    for (const i of contentSection) {
      const channelSection = i.querySelector<ElementHref>("#author-text");

      if (channelSection === null) return;

      if (channelSection.href == channelID) {
        i.style.display = "none";
      }
    }
  } catch (e) {
    console.log(e);
  }
};

export const hideAuthorItem = (channelID: string) => {
  try {
    const content = "#contents > ytd-comment-renderer";
    const authorTextSection = document.querySelectorAll<ElementHref>(content);
    if (authorTextSection === null) return;

    for (const s of authorTextSection) {
      const authorSection = s.querySelector<ElementHref>("#author-text");
      if (authorSection === null) return;

      if (authorSection.href == channelID) {
        s.style.display = "none";
      }
    }
  } catch (e) {
    console.log(e);
  }
};

document.getElementById("replies")?.addEventListener("change", () => {
  const hideAuthorUrl =
    "https://www.youtube.com/channel/UCP0x3qewLOX2NeMunrUQW3Q";
  hideAuthorItem(hideAuthorUrl);
  hideComments(hideAuthorUrl);
  const url = "https://www.youtube.com/channel/UC0fhkDONgI0OIxrq-HxvLAw";
  hideAuthorItem(url);
  hideComments(url);
});
window.addEventListener("scroll", async () => {
  let defaultUserPreference: userPreference = {
    enable: true,
    forbiddenWords: [],
    forbiddenChannels: [],
  };
  let userPreference =
    (await loadUserPreference("key")) ?? defaultUserPreference;

  const baseURL = "https://www.youtube.com/channel/";
  if (!userPreference.enable) return;
  for (const url of userPreference.forbiddenChannels) {
    hideAuthorItem(baseURL + url);
    hideComments(baseURL + url);
  }
});
