import React from "react";
import { Trans } from "react-i18next";
import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";

import ConicGradiSection from "../components/ConicGradiSection";
import Schema from "../components/Home/Schema";
import Summary from "../components/Home/Summary";
import { firebaseConfig } from "../config";

const app = firebase.initializeApp(firebaseConfig);
getAnalytics(app);

const Home = () => {
  // const { t } = useTranslation();

  return (
    <>
      <ConicGradiSection
        title={<Trans>We build (on) Elastos.</Trans>}
        titleAlign="center"
        scrollDown={true}
      />
      <Schema />
      <Summary type="sdk" />
      <Summary type="app" />
    </>
  );
};

export default Home;
