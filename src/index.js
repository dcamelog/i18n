import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en"

let ln = navigator.language || navigator.userLanguage;
let def = localeEnMessages;
if (ln === "es-ES") {
    def = localeEsMessages
}
ReactDOM.render(<IntlProvider locale={ln} messages={def}>

    <JobsList />

</IntlProvider>, document.getElementById("root")
);
