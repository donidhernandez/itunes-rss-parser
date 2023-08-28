import Parser from 'rss-parser';

const podcastRssParser = async (url: string) => {
  const parser = new Parser();
  const feed = await parser.parseURL(url);

  return feed;
};

export default podcastRssParser;
