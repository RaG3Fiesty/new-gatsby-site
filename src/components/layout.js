import React from "react"
import "katex/dist/katex.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./header"
import Footer from "./footer"
import { Helmet } from "react-helmet"
import "./index.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-172115128-2"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-172115128-2');
          `}
        </script>

        {/* Microsoft Clarity
        <script type="text/javascript">
          {`
              (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "3w00udr4mh");
          `}
        </script> */}
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
