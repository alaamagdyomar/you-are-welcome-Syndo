import {appWithTranslation} from 'next-i18next';

import './style.scss'

function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />
}

export default appWithTranslation(MyApp);