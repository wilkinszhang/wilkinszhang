import * as fs from "fs";
const md = require("markdown-it")({
  html: true, // Enable HTML tags in source
  breaks: true, // Convert '\n' in paragraphs into <br>
  linkify: true // Autoconvert URL-like text to links
});
import { fetchRssData } from "./fetchRssData";
import { fetchGitHubData } from "./fetchGitHubData";

const blogFeedUrl = "https://wilkinszhang.github.io/w_blog/feed.xml";
const newsletterFeedUrl = "https://wilkinszhang.github.io/w_blog/feed";

const ossProjectRepos = [
  "wilkinszhang",
  "mysylar",
  "Recognition-of-Underwater-leopard-coral-grouper",
  "bolt",
  "w_blog",
  "Video-Lit"
];
const ossLearningMaterialRepos = ["Recognition-of-Underwater-leopard-coral-grouper", "mysylar"];

const githubUsername = "wilkinszhang";
const websiteUrl = "https://wilkinszhang.github.io/w_blog/";
const blogUrl = "https://wilkinszhang.github.io/w_blog/";
const newsletterUrl = "https://wilkinszhang.github.io/w_blog/";
const youtubeUrl = "https://www.youtube.com/channel/UC6urJGN0O9jGPhR00VSgdDA";
const slidesUrl = "https://wilkinszhang.github.io/w_blog/";
const twitterUrl = "https://twitter.com/aska10999542";
const linkedinUrl = "https://linkedin.com/in/wilkinszhang";
const githubSponsorsUrl = "https://github.com/sponsors/wilkinszhang";
const patreonUrl = "https://patreon.com/wilkinszhang";

async function generateMarkdown() {
  const websiteBadge = `[![Website Badge](https://img.shields.io/badge/-Website-3B7EBF?style=for-the-badge&logo=amp&logoColor=white)](${websiteUrl})`;
  const hashnodeBadge = `[![Blog Badge](https://img.shields.io/badge/-Blog-3B7EBF?style=for-the-badge&logo=Hashnode&logoColor=white)](${blogUrl})`;
  const substackBadge = `[![Newsletter Badge](https://img.shields.io/badge/-Newsletter-3B7EBF?style=for-the-badge&logo=Substack&logoColor=white)](${newsletterUrl})`;
  const youtubeBadge = `[![YouTube Badge](https://img.shields.io/badge/-Youtube-3B7EBF?style=for-the-badge&logo=Youtube&logoColor=white)](${youtubeUrl})`;
  const slidesBadge = `[![Slides Badge](https://img.shields.io/badge/-Slides-3B7EBF?style=for-the-badge&logo=slides&logoColor=white)](${slidesUrl})`;
  const linkedinBadge = `[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-3B7EBF?style=for-the-badge&logo=Linkedin&logoColor=white)](${linkedinUrl})`;
  const twitterBadge = `[![Twitter Badge](https://img.shields.io/badge/-@iambolajiayo-3B7EBF?style=for-the-badge&logo=x&logoColor=white)](${twitterUrl})`;
  const githubSponsorsBadge = `[![GitHub Sponsors Badge](https://img.shields.io/badge/-github%20sponsors-3B7EBF?style=for-the-badge&logo=github&logoColor=white)](${githubSponsorsUrl})`;
  const patreonBadge = `[![Patreon Badge](https://img.shields.io/badge/-Patreon-3B7EBF?style=for-the-badge&logo=Patreon&logoColor=white)](${patreonUrl})`;
  const profileCountBadge = `![Profile Views Count Badge](https://komarev.com/ghpvc/?username=${githubUsername}&style=for-the-badge)`;

  const githubStatsCardDark = `[![GitHub-Stats-Card-Dark](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=FFF&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-dark-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-dark-mode-only)`;
  const githubStatsCardLight = `[![GitHub-Stats-Card-Light](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=474A4E&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-light-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-light-mode-only)`;

  const markdownText = `<div align="center">\n

  ${websiteBadge} ${hashnodeBadge} ${substackBadge} ${youtubeBadge} ${slidesBadge} ${linkedinBadge} ${twitterBadge} ${githubSponsorsBadge} ${patreonBadge} ${profileCountBadge}\n
  
  ---\n
  
  Hello 👋🏾! I am an innovative technology professional with advanced IT, data, deep learning, embedded systems, technical writing, open source, community building and entrepreneurship experience at Wuhan University of Technology. I create technical content, build open source projects and learning materials, speak/teach at developer meetups/conferences, and build multiple technical communities.\n
  
  ---\n

  ${githubStatsCardDark}\n
  ${githubStatsCardLight}\n

  </div>\n
  
  ---\n
  
  ## Highlights
  
  <details>\n
  <summary>OSS Projects</summary>\n
  <br />
  Here are some of my other projects you might want to check out that are not pinned:\n
  <br />\n<br />
  ${await fetchGitHubData(ossProjectRepos)}\n
  </details>\n
  
  <details>\n
  <summary>OSS Learning Materials</summary>\n
  <br />
  Here are some of my unique-styled workshop materials you can use to learn key concepts at your own pace:\n
  <br />\n<br />
  ${await fetchGitHubData(ossLearningMaterialRepos)}\n
  </details>\n
  
  <details>\n
  <summary>Recent Blogposts</summary>\n
  <br />
  ${await fetchRssData(blogFeedUrl)}\n
  </details>\n
  
  <details>\n
  <summary>Recent Newsletters</summary>\n
  <br />
  ${await fetchRssData(newsletterFeedUrl)}\n
  </details>\n
  
  <details>\n
  <summary>Quick Tips</summary>\n\n
  - 💬 How to reach me: DM [@wilkinszhang](https://twitter.com/aska10999542) on X (Twitter).\n
  - 📬 Where to find me: Subscribe to my [newsletter](https://wilkinszhang.github.io/w_blog/) to hear from me bi-weekly.\n
  - 📖 Book recommendations: [Knowing God by J. I. Packer](https://bit.ly/3EdCFUW) and [Atomic Habits by James Clear](https://bit.ly/45r1kBH).\n
  - 💙 Fun fact: I'm in a blissful relationship [with Jesus Christ](https://biblegateway.com/passage/?search=1+Corinthians+15%3A1-11&version=NKJV). Check [this](https://bit.ly/3KYYHij) out :).\n
  </details>\n
  
  ---\n

  <a href="https://blog.bolajiayodeji.com/how-to-create-an-automated-profile-readme-using-nodejs-and-github-actions?utm_source=github-profile">Learn how this works.</a> <a href="https://github.com/BolajiAyodeji/BolajiAyodeji/actions/workflows/build.yml"><img src="https://github.com/BolajiAyodeji/BolajiAyodeji/actions/workflows/build.yml/badge.svg" align="right" alt="Rebuild README.md file"></a>\n
   
  <div align="center">\n
   <a href="https://bolajiayodeji.com" target="_blank" rel="noopener noreferrer"><img src="https://bolajiayodeji.com/favicon.png" width="30" /></a>\n
  </div>`;

  const result = md.render(markdownText);

  fs.writeFile("README.md", result, (error) => {
    if (error) throw new Error(`Something went wrong: ${error}.`);
    console.log(`✅ README.md file was succesfully generated.`);
  });
}

generateMarkdown();
