import Head from "next/head";
import { useRouter } from "next/router";
/**
    * @param {this.props} `title` `description` `canonical` `image`
*/
const SEO = (props) => {
    let route = useRouter()
    let {
        title = "بيسكتوب اندرويد - Pesktop android",
        description = '  تحميل جميع برامج الويندوز والأندرويد والماك والأنظمة مع الكراكات بروابط مباشرة وسريعة وتدعم الأستكمال مع امكانية تحميل الكراكات منفصلة لكل البرامج',
        canonical = process?.env?.NEXT_PUBLIC_DOMAIN + route.asPath,
        image = '/image/logo.png'
    } = props
    let site_name = 'بيسكتوب اندرويد - Pesktop android'
    return (
        <Head>
            {/* ---------------  application  --------------- */}
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="manifest" href="/manifest.webmanifest" />
            <meta name="theme-color" content="#ffffff" />
            {/* ---------------  icons  --------------- */}

            <link rel="apple-touch-icon" href="/images/logo.png" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/vnd.microsoft.icon" />
            <meta name="author" content="ktsyr1" />

            {/* ---------------  content  --------------- */}
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* ---------------  content google --------------- */}
            <meta property="og:locale" content="ar_AR" />
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={site_name} />

            {/* ---------------  content google --------------- */}
            <meta name="twitter:card" content="summary_large_image" />
            {/* <meta name="twitter:site" content="@PesktopCo" />
            <meta name="twitter:creator" content="@PesktopCo" /> */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:domain" content={process.env.NEXT_PUBLIC_DOMAIN} />

            {/* ---------------  SEO Bots  --------------- */}
            <link rel="canonical" href={canonical} />
            {/* <meta name="ahrefs-site-verification" content="5d2c0ae31d30d25c93cef08f38d7462d8bd78c98566e04b47fa57abd34b09259" /> */}
            <meta name="robots" content="index, follow" />
            {/* <meta name="google-site-verification" content="OR7y7vZTT8JAzL0w48XNuKtUSgT3Zvtja4M0LBt43zM" /> */}
            {/* --------------- Global site tag (gtag.js) - Google Analytics */}
            {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-PPNKBBZWX2"></script>
            <script 
               dangerouslySetInnerHTML={{
                   __html: `
                             window.dataLayer = window.dataLayer || [];
                             function gtag(){dataLayer.push(arguments);}
                             gtag('js', new Date());
                             gtag('config', 'G-PPNKBBZWX2');
                             
                            `,
                        }} 
                     /> */}
            {/* <link rel="stylesheet" href="https://fontlibrary.org/face/droid-arabic-kufi" type="text/css" /> */}

        </Head>
    );
}

export default SEO;
