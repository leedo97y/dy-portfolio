import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

/**
 * @description SEO를 위해 본인의 정보로 수정해주세요.
 */
const DEFAULT_SEO = {
  title: "Front-End 개발자 이도연 입니다.",
  description: "안녕하세요, 프론트엔드 개발자 이도연입니다.",
  canonical: "https://www.naver.com/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.naver.com/",
    title: "Front-End 개발자 이도연 입니다.",
    site_name: "Front-End 개발자 이도연 입니다.",
    images: [
      {
        url: "/share.png",
        width: 285,
        height: 167,
        alt: "Front-End 개발자 이도연 입니다.",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "Front-End 개발자 이도연 입니다.",
    },
    {
      name: "msapplication-tooltip",
      content: "Front-End 개발자 이도연 입니다.",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
