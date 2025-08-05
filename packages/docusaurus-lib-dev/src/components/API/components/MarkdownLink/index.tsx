const MarkdownLink = ({ text }: { text: string }) => {
  const markdownLinkRegex = /\[(.*?)\]\s*\((.*?)\)/g;

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = markdownLinkRegex.exec(text)) !== null) {
    // 添加匹配前的普通文本
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    // 添加链接
    const [_, linkText, url] = match;
    const isInternalLink = url.startsWith('/');
    const target = isInternalLink ? '_self' : '_blank';
    const rel = isInternalLink ? undefined : 'noopener noreferrer';

    parts.push(
      <a key={match.index} href={url} target={target} rel={rel}>
        {linkText}
        {!isInternalLink && (
          <svg
            style={{ verticalAlign: '-1px' }}
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4500"
            width="16"
            height="16"
          >
            <path
              fill="currentColor"
              d="M426.666667 256v85.333333H213.333333v469.333334h469.333334v-213.333334h85.333333v256a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V298.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h256z m469.333333-128v341.333333h-85.333333V273.621333l-332.501334 332.544-60.330666-60.330666L750.293333 213.333333H554.666667V128h341.333333z"
              p-id="4501"
            ></path>
          </svg>
        )}
      </a>,
    );

    lastIndex = match.index + match[0].length;
  }

  // 添加剩余文本
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return <div>{parts}</div>;
};

export default MarkdownLink;
