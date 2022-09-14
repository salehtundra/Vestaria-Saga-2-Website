import SectionBody from "../components/guide/SectionBody"
import SectionHeader from "../components/guide/SectionHeader"
import Footer from "../components/guide/Footer"

const GuideOverview = () => {

    return (
        <div id="main">
          <SectionHeader>
            <h1 class="text-big">
              Guide Overview
            </h1>
          </SectionHeader>
          <SectionBody>
            <p class="text-small">
              I made a few guides on the first game recently and enjoyed doing it so I am going to list some of the interesting stuff I found on a chapter by chapter basis as well as some strategies for beating the chapter. I hope others who are unfamiliar with SRPGs or struggle with these types of games can be helped by this guide. Also for those who want 100% of everything this is for you.
            </p>     
          </SectionBody>          
          <Footer />
        </div>
    )
}

export default GuideOverview;