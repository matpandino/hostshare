import { type AppType } from "next/dist/shared/lib/utils";
import { Nunito_Sans } from "@next/font/google";

import "~/styles/globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
});

const App: AppType = ({ Component, pageProps }) => {
  return (
    <main className={nunitoSans.className}>
      <Component {...pageProps} />;
    </main>
  );
};

export default App;
