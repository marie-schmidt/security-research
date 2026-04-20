export const SITE = {
  title: "Marie Schmidt",
  tagline: "Web and Cloud Security Research",
  description: "A minimal, responsive Astro theme for technical writing",
  url: "https://marieschmidt.me", // Update this to your site URL
  baseurl: "",
  lang: "en",
  timezone: "Americas/Vancouver",
  cdn: "",
  avatar: "/commons/marie-purple-avatar.jpeg",
  social_preview_image: "",
  social: {
    name: "Geocine",
    email: "example@domain.com"
  },
  github: {
    username: "marie-schmidt"
  }
  // twitter: {
  //   username: "twitter_username"
  // }
};

export const SOCIAL = {
  name: "Geocine",
  email: "example@domain.com",
  links: ["https://github.com/geocine", "https://twitter.com/geocine"],
  // Email obfuscation parts for spam protection
  emailUser: "marie.schmidt",
  emailDomain: "email.com"
};

export const GITHUB = {
  username: "github_username"
};

export const TWITTER = {
  username: "twitter_username"
};

export const ANALYTICS = {
  google: {
    id: ""
  },
  goatcounter: {
    id: ""
  },
  umami: {
    id: "",
    domain: ""
  },
  matomo: {
    id: "",
    domain: ""
  },
  cloudflare: {
    id: ""
  },
  fathom: {
    id: ""
  }
};

export const PAGEVIEWS = {
  provider: "" // 'goatcounter'
};

export const COMMENTS = {
  provider: "", // 'disqus' | 'utterances' | 'giscus'
  disqus: {
    shortname: ""
  },
  utterances: {
    repo: "",
    issue_term: ""
  },
  giscus: {
    repo: "",
    repo_id: "",
    category: "",
    category_id: "",
    mapping: "pathname",
    strict: "0",
    input_position: "bottom",
    lang: "en",
    reactions_enabled: "1"
  }
};

export const FEATURES = {
  toc: true,
  theme_mode: "", // 'light' | 'dark' | '' (empty for system default with toggle)
  pwa: {
    enabled: true,
    cache: {
      enabled: true,
      deny_paths: []
    }
  }
};

export const PAGINATION = {
  postsPerPage: 10
};

export const WEBMASTER_VERIFICATIONS = {
  google: "",
  bing: "",
  alexa: "",
  yandex: "",
  baidu: "",
  facebook: ""
};
